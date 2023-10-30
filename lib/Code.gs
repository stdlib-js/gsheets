/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var pf=s((HKr,lf)=>{"use strict";var htr=typeof Object.defineProperty=="function"?Object.defineProperty:null;lf.exports=htr});var mf=s((WKr,gf)=>{"use strict";var ytr=pf();function qtr(){try{return ytr({},"x",{}),!0}catch{return!1}}gf.exports=qtr});var hf=s((zKr,df)=>{"use strict";var btr=Object.defineProperty;df.exports=btr});var mu=s((DKr,yf)=>{"use strict";function wtr(r){return typeof r=="number"}yf.exports=wtr});var du=s((XKr,bf)=>{"use strict";function Etr(r){return r[0]==="-"}function qf(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Ntr(r,e,t){var i=!1,n=e-r.length;return n<0||(Etr(r)&&(i=!0,r=r.substr(1)),r=t?r+qf(n):qf(n)+r,i&&(r="-"+r)),r}bf.exports=Ntr});var Af=s((JKr,Nf)=>{"use strict";var Atr=mu(),wf=du(),Otr=String.prototype.toLowerCase,Ef=String.prototype.toUpperCase;function Str(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Atr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=wf(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=wf(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Ef.call(r.specifier)?Ef.call(t):Otr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Nf.exports=Str});var Sf=s((xKr,Of)=>{"use strict";function Ttr(r){return typeof r=="string"}Of.exports=Ttr});var _f=s((YKr,If)=>{"use strict";var Itr=mu(),_tr=Math.abs,Ltr=String.prototype.toLowerCase,Tf=String.prototype.toUpperCase,bt=String.prototype.replace,Ptr=/e\+(\d)$/,Rtr=/e-(\d)$/,Ftr=/^(\d+)$/,Mtr=/^(\d+)e/,Btr=/\.0$/,ktr=/\.0*e/,jtr=/(\..*[^0])0*e/;function Ctr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Itr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":_tr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=bt.call(t,jtr,"$1e"),t=bt.call(t,ktr,"e"),t=bt.call(t,Btr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=bt.call(t,Ptr,"e+0$1"),t=bt.call(t,Rtr,"e-0$1"),r.alternate&&(t=bt.call(t,Ftr,"$1."),t=bt.call(t,Mtr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Tf.call(r.specifier)?Tf.call(t):Ltr.call(t),t}If.exports=Ctr});var Rf=s((ZKr,Pf)=>{"use strict";function Lf(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function Gtr(r,e,t){var i=e-r.length;return i<0||(r=t?r+Lf(i):Lf(i)+r),r}Pf.exports=Gtr});var Mf=s(($Kr,Ff)=>{"use strict";var Vtr=Af(),Utr=Sf(),Htr=_f(),Wtr=Rf(),ztr=du(),Dtr=String.fromCharCode,Xn=isNaN,Xtr=Array.isArray;function Jtr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function xtr(r){var e,t,i,n,a,u,o,f,v;if(!Xtr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],Utr(i))u+=i;else{if(e=i.precision!==void 0,i=Jtr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Xn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Xn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Vtr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Xn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Xn(a)?String(i.arg):Dtr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Htr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ztr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Wtr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}Ff.exports=xtr});var kf=s((QKr,Bf)=>{"use strict";var Ytr=Mf();Bf.exports=Ytr});var Cf=s((KKr,jf)=>{"use strict";var Jn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ztr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function $tr(r){var e,t,i,n;for(t=[],n=0,i=Jn.exec(r);i;)e=r.slice(n,Jn.lastIndex-i[0].length),e.length&&t.push(e),t.push(Ztr(i)),n=Jn.lastIndex,i=Jn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}jf.exports=$tr});var Vf=s((rre,Gf)=>{"use strict";var Qtr=Cf();Gf.exports=Qtr});var Hf=s((ere,Uf)=>{"use strict";function Ktr(r){return typeof r=="string"}Uf.exports=Ktr});var Df=s((tre,zf)=>{"use strict";var rir=kf(),eir=Vf(),tir=Hf();function Wf(r){var e,t,i;if(!tir(r))throw new TypeError(Wf("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=eir(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return rir.apply(null,t)}zf.exports=Wf});var q=s((ire,Xf)=>{"use strict";var iir=Df();Xf.exports=iir});var Qf=s((nre,$f)=>{"use strict";var Jf=q(),zt=Object.prototype,xf=zt.toString,Yf=zt.__defineGetter__,Zf=zt.__defineSetter__,nir=zt.__lookupGetter__,air=zt.__lookupSetter__;function sir(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||xf.call(r)==="[object Array]")throw new TypeError(Jf("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||xf.call(t)==="[object Array]")throw new TypeError(Jf("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(nir.call(r,e)||air.call(r,e)?(i=r.__proto__,r.__proto__=zt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Yf&&Yf.call(r,e,t.get),u&&Zf&&Zf.call(r,e,t.set),r}$f.exports=sir});var je=s((are,Kf)=>{"use strict";var uir=mf(),oir=hf(),vir=Qf(),hu;uir()?hu=oir:hu=vir;Kf.exports=hu});var ec=s((sre,rc)=>{"use strict";var fir=je();function cir(r,e,t){fir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}rc.exports=cir});var w=s((ure,tc)=>{"use strict";var lir=ec();tc.exports=lir});var nc=s((ore,ic)=>{"use strict";var pir=je();function gir(r,e,t){pir(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}ic.exports=gir});var nr=s((vre,ac)=>{"use strict";var mir=nc();ac.exports=mir});var uc=s((fre,sc)=>{"use strict";function dir(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}sc.exports=dir});var vc=s((cre,oc)=>{"use strict";var hir=uc();oc.exports=hir});var cc=s((lre,fc)=>{"use strict";function yir(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}fc.exports=yir});var yu=s((pre,lc)=>{"use strict";var qir=cc();lc.exports=qir});var gc=s((gre,pc)=>{"use strict";var bir=yu();function wir(r){return bir(0,r)}pc.exports=wir});var qu=s((mre,mc)=>{"use strict";var Eir=gc();mc.exports=Eir});var yc=s((dre,hc)=>{"use strict";var Ui=vc(),Nir=qu(),dc=q();function Air(r,e,t){var i,n,a,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(a=Nir(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(dc("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Ui(e).join(", "),Ui(t).join(", "),v));if(f===n)a[v]=1;else if(f===1)a[v]=0;else throw new Error(dc("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Ui(e).join(", "),Ui(t).join(", "),v))}return{ref:r,data:i,shape:Ui(t),strides:a}}hc.exports=Air});var bc=s((hre,qc)=>{"use strict";var Oir=yc();qc.exports=Oir});var Nc=s((yre,Ec)=>{"use strict";var wc=bc();function Sir(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,y,N,A,k,T,D,vr;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(k=wc(r[0],e[0],N),T=k.data,A=k.strides,i=A[1],n=A[0],k=wc(r[1],e[1],N),D=k.data,A=k.strides,a=A[1],u=A[0],vr=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,m=0,d=T[p],g=D[h],y=vr[c],v=0;v<o;v++)y[v]=t(d[l],g[m]),l+=i,m+=a;p+=n,h+=u}}Ec.exports=Sir});var bu=s((qre,Ac)=>{"use strict";var Tir=Nc();Ac.exports=Tir});var Sc=s((bre,Oc)=>{"use strict";function Iir(r){var e,t,i,n,a,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}Oc.exports=Iir});var wu=s((wre,Tc)=>{"use strict";var _ir=Sc();Tc.exports=_ir});var _c=s((Ere,Ic)=>{"use strict";var Lir=yu();function Pir(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(Lir(r,i));return t}Ic.exports=Pir});var xn=s((Nre,Lc)=>{"use strict";var Rir=_c();Lc.exports=Rir});var Rc=s((Are,Pc)=>{"use strict";function Fir(r,e,t){var i,n,a,u,o,f;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}Pc.exports=Fir});var Mc=s((Ore,Fc)=>{"use strict";var Mir=Rc();Fc.exports=Mir});var kc=s((Sre,Bc)=>{"use strict";function Bir(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}Bc.exports=Bir});var Eu=s((Tre,jc)=>{"use strict";var kir=kc();jc.exports=kir});var Gc=s((Ire,Cc)=>{"use strict";var jir=/./;Cc.exports=jir});var Nu=s((_re,Vc)=>{"use strict";function Cir(r){return typeof r=="boolean"}Vc.exports=Cir});var Hc=s((Lre,Uc)=>{"use strict";function Gir(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Uc.exports=Gir});var zc=s((Pre,Wc)=>{"use strict";var Vir=Hc();Wc.exports=Vir});var Xc=s((Rre,Dc)=>{"use strict";var Uir=zc(),Hir=Uir();function Wir(){return Hir&&typeof Symbol.toStringTag=="symbol"}Dc.exports=Wir});var Hi=s((Fre,Jc)=>{"use strict";var zir=Xc();Jc.exports=zir});var Au=s((Mre,xc)=>{"use strict";var Dir=Object.prototype.toString;xc.exports=Dir});var Zc=s((Bre,Yc)=>{"use strict";var Xir=Au();function Jir(r){return Xir.call(r)}Yc.exports=Jir});var Qc=s((kre,$c)=>{"use strict";var xir=Object.prototype.hasOwnProperty;function Yir(r,e){return r==null?!1:xir.call(r,e)}$c.exports=Yir});var O=s((jre,Kc)=>{"use strict";var Zir=Qc();Kc.exports=Zir});var el=s((Cre,rl)=>{"use strict";var $ir=typeof Symbol=="function"?Symbol:void 0;rl.exports=$ir});var Ou=s((Gre,tl)=>{"use strict";var Qir=el();tl.exports=Qir});var al=s((Vre,nl)=>{"use strict";var il=Ou(),Kir=typeof il=="function"?il.toStringTag:"";nl.exports=Kir});var ul=s((Ure,sl)=>{"use strict";var rnr=O(),Wi=al(),Su=Au();function enr(r){var e,t,i;if(r==null)return Su.call(r);t=r[Wi],e=rnr(r,Wi);try{r[Wi]=void 0}catch{return Su.call(r)}return i=Su.call(r),e?r[Wi]=t:delete r[Wi],i}sl.exports=enr});var tr=s((Hre,ol)=>{"use strict";var tnr=Hi(),inr=Zc(),nnr=ul(),Tu;tnr()?Tu=nnr:Tu=inr;ol.exports=Tu});var fl=s((Wre,vl)=>{"use strict";var anr=Boolean;vl.exports=anr});var ll=s((zre,cl)=>{"use strict";var snr=fl();cl.exports=snr});var gl=s((Dre,pl)=>{"use strict";var unr=Boolean.prototype.toString;pl.exports=unr});var dl=s((Xre,ml)=>{"use strict";var onr=gl();function vnr(r){try{return onr.call(r),!0}catch{return!1}}ml.exports=vnr});var Iu=s((Jre,hl)=>{"use strict";var fnr=Hi(),cnr=tr(),lnr=ll(),pnr=dl(),gnr=fnr();function mnr(r){return typeof r=="object"?r instanceof lnr?!0:gnr?pnr(r):cnr(r)==="[object Boolean]":!1}hl.exports=mnr});var ql=s((xre,yl)=>{"use strict";var dnr=Nu(),hnr=Iu();function ynr(r){return dnr(r)||hnr(r)}yl.exports=ynr});var fr=s((Yre,wl)=>{"use strict";var bl=w(),_u=ql(),qnr=Nu(),bnr=Iu();bl(_u,"isPrimitive",qnr);bl(_u,"isObject",bnr);wl.exports=_u});var Nl=s((Zre,El)=>{"use strict";function wnr(){return new Function("return this;")()}El.exports=wnr});var Ol=s(($re,Al)=>{"use strict";var Enr=typeof self=="object"?self:null;Al.exports=Enr});var Tl=s((Qre,Sl)=>{"use strict";var Nnr=typeof window=="object"?window:null;Sl.exports=Nnr});var _l=s((Kre,Il)=>{"use strict";var Anr=typeof globalThis=="object"?globalThis:null;Il.exports=Anr});var Ml=s((ree,Fl)=>{"use strict";var Onr=fr().isPrimitive,Snr=q(),Tnr=Nl(),Ll=Ol(),Pl=Tl(),Rl=_l();function Inr(r){if(arguments.length){if(!Onr(r))throw new TypeError(Snr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Tnr()}if(Rl)return Rl;if(Ll)return Ll;if(Pl)return Pl;throw new Error("unexpected error. Unable to resolve global object.")}Fl.exports=Inr});var jl=s((eee,kl)=>{"use strict";var _nr=Ml(),Bl=_nr(),Lnr=Bl.document&&Bl.document.childNodes;kl.exports=Lnr});var Gl=s((tee,Cl)=>{"use strict";var Pnr=Int8Array;Cl.exports=Pnr});var Ul=s((iee,Vl)=>{"use strict";var Rnr=Gc(),Fnr=jl(),Mnr=Gl();function Bnr(){return typeof Rnr=="function"||typeof Mnr=="object"||typeof Fnr=="function"}Vl.exports=Bnr});var Lu=s((nee,Hl)=>{"use strict";function knr(){return/^\s*function\s*([^(]*)/i}Hl.exports=knr});var zl=s((aee,Wl)=>{"use strict";var jnr=Lu(),Cnr=jnr();Wl.exports=Cnr});var Pu=s((see,Xl)=>{"use strict";var Gnr=w(),Dl=Lu(),Vnr=zl();Gnr(Dl,"REGEXP",Vnr);Xl.exports=Dl});var xl=s((uee,Jl)=>{"use strict";var Unr=tr(),Ru;function Hnr(r){return Unr(r)==="[object Array]"}Array.isArray?Ru=Array.isArray:Ru=Hnr;Jl.exports=Ru});var cr=s((oee,Yl)=>{"use strict";var Wnr=xl();Yl.exports=Wnr});var $l=s((vee,Zl)=>{"use strict";var znr=cr(),Dnr=q();function Xnr(r){if(typeof r!="function")throw new TypeError(Dnr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!znr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}Zl.exports=Xnr});var Kl=s((fee,Ql)=>{"use strict";var Jnr=$l();Ql.exports=Jnr});var e4=s((cee,r4)=>{"use strict";function xnr(r){return r!==null&&typeof r=="object"}r4.exports=xnr});var Mu=s((lee,t4)=>{"use strict";var Ynr=w(),Znr=Kl(),Fu=e4(),$nr=Znr(Fu);Ynr(Fu,"isObjectLikeArray",$nr);t4.exports=Fu});var n4=s((pee,i4)=>{"use strict";var Qnr=Mu();function Knr(r){return Qnr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}i4.exports=Knr});var wt=s((gee,a4)=>{"use strict";var rar=n4();a4.exports=rar});var u4=s((mee,s4)=>{"use strict";var ear=tr(),tar=Pu().REGEXP,iar=wt();function nar(r){var e,t,i;if(t=ear(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=tar.exec(i.toString()),e)return e[1]}return iar(r)?"Buffer":t}s4.exports=nar});var Ce=s((dee,o4)=>{"use strict";var aar=u4();o4.exports=aar});var f4=s((hee,v4)=>{"use strict";var sar=Ce();function uar(r){var e;return r===null?"null":(e=typeof r,e==="object"?sar(r).toLowerCase():e)}v4.exports=uar});var l4=s((yee,c4)=>{"use strict";var oar=Ce();function far(r){return oar(r).toLowerCase()}c4.exports=far});var Yn=s((qee,p4)=>{"use strict";var car=Ul(),lar=f4(),par=l4(),gar=car()?par:lar;p4.exports=gar});var m4=s((bee,g4)=>{"use strict";var mar=Yn();function dar(r){return mar(r)==="function"}g4.exports=dar});var L=s((wee,d4)=>{"use strict";var har=m4();d4.exports=har});var y4=s((Eee,h4)=>{"use strict";var yar=Math.floor;h4.exports=yar});var $=s((Nee,q4)=>{"use strict";var qar=y4();q4.exports=qar});var w4=s((Aee,b4)=>{"use strict";var bar=$();function war(r){return bar(r)===r}b4.exports=war});var Tr=s((Oee,E4)=>{"use strict";var Ear=w4();E4.exports=Ear});var A4=s((See,N4)=>{"use strict";var Nar=9007199254740991;N4.exports=Nar});var S4=s((Tee,O4)=>{"use strict";var Aar=Tr(),Oar=A4();function Sar(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Aar(r.length)&&r.length>=0&&r.length<=Oar}O4.exports=Sar});var jr=s((Iee,T4)=>{"use strict";var Tar=S4();T4.exports=Tar});var _4=s((_ee,I4)=>{"use strict";var Iar=L();function _ar(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Iar(r.next)}I4.exports=_ar});var P4=s((Lee,L4)=>{"use strict";var Lar=_4();L4.exports=Lar});var M4=s((Pee,F4)=>{"use strict";var R4="function";function Par(r){return typeof r.get===R4&&typeof r.set===R4}F4.exports=Par});var Bu=s((Ree,B4)=>{"use strict";var Rar=M4();B4.exports=Rar});var C4=s((Fee,j4)=>{"use strict";var k4={complex128:Far,complex64:Mar,default:Bar};function Far(r,e,t){r.set(t,e)}function Mar(r,e,t){r.set(t,e)}function Bar(r,e,t){r.set(t,e)}function kar(r){var e=k4[r];return typeof e=="function"?e:k4.default}j4.exports=kar});var ku=s((Mee,G4)=>{"use strict";var jar=C4();G4.exports=jar});var H4=s((Bee,U4)=>{"use strict";var V4={float64:Car,float32:Gar,int32:Var,int16:Uar,int8:Har,uint32:War,uint16:zar,uint8:Dar,uint8c:Xar,generic:Jar,default:xar};function Car(r,e,t){r[e]=t}function Gar(r,e,t){r[e]=t}function Var(r,e,t){r[e]=t}function Uar(r,e,t){r[e]=t}function Har(r,e,t){r[e]=t}function War(r,e,t){r[e]=t}function zar(r,e,t){r[e]=t}function Dar(r,e,t){r[e]=t}function Xar(r,e,t){r[e]=t}function Jar(r,e,t){r[e]=t}function xar(r,e,t){r[e]=t}function Yar(r){var e=V4[r];return typeof e=="function"?e:V4.default}U4.exports=Yar});var ju=s((kee,W4)=>{"use strict";var Zar=H4();W4.exports=Zar});var D4=s((jee,z4)=>{"use strict";var $ar={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};z4.exports=$ar});var J4=s((Cee,X4)=>{"use strict";var Qar=tr(),Kar=typeof Float64Array=="function";function r0r(r){return Kar&&r instanceof Float64Array||Qar(r)==="[object Float64Array]"}X4.exports=r0r});var Y4=s((Gee,x4)=>{"use strict";var e0r=J4();x4.exports=e0r});var $4=s((Vee,Z4)=>{"use strict";var t0r=typeof Float64Array=="function"?Float64Array:null;Z4.exports=t0r});var r6=s((Uee,K4)=>{"use strict";var i0r=Y4(),Q4=$4();function n0r(){var r,e;if(typeof Q4!="function")return!1;try{e=new Q4([1,3.14,-3.14,NaN]),r=i0r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}K4.exports=n0r});var Cu=s((Hee,e6)=>{"use strict";var a0r=r6();e6.exports=a0r});var i6=s((Wee,t6)=>{"use strict";var s0r=typeof Float64Array=="function"?Float64Array:void 0;t6.exports=s0r});var a6=s((zee,n6)=>{"use strict";function u0r(){throw new Error("not implemented")}n6.exports=u0r});var gr=s((Dee,s6)=>{"use strict";var o0r=Cu(),v0r=i6(),f0r=a6(),Gu;o0r()?Gu=v0r:Gu=f0r;s6.exports=Gu});var o6=s((Xee,u6)=>{"use strict";var c0r=tr(),l0r=typeof Float32Array=="function";function p0r(r){return l0r&&r instanceof Float32Array||c0r(r)==="[object Float32Array]"}u6.exports=p0r});var f6=s((Jee,v6)=>{"use strict";var g0r=o6();v6.exports=g0r});var _=s((xee,c6)=>{"use strict";var m0r=Number.POSITIVE_INFINITY;c6.exports=m0r});var p6=s((Yee,l6)=>{"use strict";var d0r=typeof Float32Array=="function"?Float32Array:null;l6.exports=d0r});var d6=s((Zee,m6)=>{"use strict";var h0r=f6(),y0r=_(),g6=p6();function q0r(){var r,e;if(typeof g6!="function")return!1;try{e=new g6([1,3.14,-3.14,5e40]),r=h0r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===y0r}catch{r=!1}return r}m6.exports=q0r});var y6=s(($ee,h6)=>{"use strict";var b0r=d6();h6.exports=b0r});var b6=s((Qee,q6)=>{"use strict";var w0r=typeof Float32Array=="function"?Float32Array:void 0;q6.exports=w0r});var E6=s((Kee,w6)=>{"use strict";function E0r(){throw new Error("not implemented")}w6.exports=E0r});var Qr=s((rte,N6)=>{"use strict";var N0r=y6(),A0r=b6(),O0r=E6(),Vu;N0r()?Vu=A0r:Vu=O0r;N6.exports=Vu});var O6=s((ete,A6)=>{"use strict";var S0r=tr(),T0r=typeof Uint32Array=="function";function I0r(r){return T0r&&r instanceof Uint32Array||S0r(r)==="[object Uint32Array]"}A6.exports=I0r});var Kr=s((tte,S6)=>{"use strict";var _0r=O6();S6.exports=_0r});var Dt=s((ite,T6)=>{"use strict";var L0r=4294967295;T6.exports=L0r});var _6=s((nte,I6)=>{"use strict";var P0r=typeof Uint32Array=="function"?Uint32Array:null;I6.exports=P0r});var R6=s((ate,P6)=>{"use strict";var R0r=Kr(),Uu=Dt(),L6=_6();function F0r(){var r,e;if(typeof L6!="function")return!1;try{e=[1,3.14,-3.14,Uu+1,Uu+2],e=new L6(e),r=R0r(e)&&e[0]===1&&e[1]===3&&e[2]===Uu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}P6.exports=F0r});var M6=s((ste,F6)=>{"use strict";var M0r=R6();F6.exports=M0r});var k6=s((ute,B6)=>{"use strict";var B0r=typeof Uint32Array=="function"?Uint32Array:void 0;B6.exports=B0r});var C6=s((ote,j6)=>{"use strict";function k0r(){throw new Error("not implemented")}j6.exports=k0r});var lr=s((vte,G6)=>{"use strict";var j0r=M6(),C0r=k6(),G0r=C6(),Hu;j0r()?Hu=C0r:Hu=G0r;G6.exports=Hu});var U6=s((fte,V6)=>{"use strict";var V0r=tr(),U0r=typeof Int32Array=="function";function H0r(r){return U0r&&r instanceof Int32Array||V0r(r)==="[object Int32Array]"}V6.exports=H0r});var Zn=s((cte,H6)=>{"use strict";var W0r=U6();H6.exports=W0r});var Xt=s((lte,W6)=>{"use strict";var z0r=2147483647;W6.exports=z0r});var D6=s((pte,z6)=>{"use strict";var D0r=-2147483648;z6.exports=D0r});var J6=s((gte,X6)=>{"use strict";var X0r=typeof Int32Array=="function"?Int32Array:null;X6.exports=X0r});var Z6=s((mte,Y6)=>{"use strict";var J0r=Zn(),x0r=Xt(),Y0r=D6(),x6=J6();function Z0r(){var r,e;if(typeof x6!="function")return!1;try{e=new x6([1,3.14,-3.14,x0r+1]),r=J0r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Y0r}catch{r=!1}return r}Y6.exports=Z0r});var Q6=s((dte,$6)=>{"use strict";var $0r=Z6();$6.exports=$0r});var r8=s((hte,K6)=>{"use strict";var Q0r=typeof Int32Array=="function"?Int32Array:void 0;K6.exports=Q0r});var t8=s((yte,e8)=>{"use strict";function K0r(){throw new Error("not implemented")}e8.exports=K0r});var Et=s((qte,i8)=>{"use strict";var rsr=Q6(),esr=r8(),tsr=t8(),Wu;rsr()?Wu=esr:Wu=tsr;i8.exports=Wu});var a8=s((bte,n8)=>{"use strict";var isr=tr(),nsr=typeof Uint16Array=="function";function asr(r){return nsr&&r instanceof Uint16Array||isr(r)==="[object Uint16Array]"}n8.exports=asr});var u8=s((wte,s8)=>{"use strict";var ssr=a8();s8.exports=ssr});var v8=s((Ete,o8)=>{"use strict";var usr=65535;o8.exports=usr});var c8=s((Nte,f8)=>{"use strict";var osr=typeof Uint16Array=="function"?Uint16Array:null;f8.exports=osr});var g8=s((Ate,p8)=>{"use strict";var vsr=u8(),zu=v8(),l8=c8();function fsr(){var r,e;if(typeof l8!="function")return!1;try{e=[1,3.14,-3.14,zu+1,zu+2],e=new l8(e),r=vsr(e)&&e[0]===1&&e[1]===3&&e[2]===zu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}p8.exports=fsr});var d8=s((Ote,m8)=>{"use strict";var csr=g8();m8.exports=csr});var y8=s((Ste,h8)=>{"use strict";var lsr=typeof Uint16Array=="function"?Uint16Array:void 0;h8.exports=lsr});var b8=s((Tte,q8)=>{"use strict";function psr(){throw new Error("not implemented")}q8.exports=psr});var Jt=s((Ite,w8)=>{"use strict";var gsr=d8(),msr=y8(),dsr=b8(),Du;gsr()?Du=msr:Du=dsr;w8.exports=Du});var N8=s((_te,E8)=>{"use strict";var hsr=tr(),ysr=typeof Int16Array=="function";function qsr(r){return ysr&&r instanceof Int16Array||hsr(r)==="[object Int16Array]"}E8.exports=qsr});var O8=s((Lte,A8)=>{"use strict";var bsr=N8();A8.exports=bsr});var T8=s((Pte,S8)=>{"use strict";var wsr=32767;S8.exports=wsr});var _8=s((Rte,I8)=>{"use strict";var Esr=-32768;I8.exports=Esr});var P8=s((Fte,L8)=>{"use strict";var Nsr=typeof Int16Array=="function"?Int16Array:null;L8.exports=Nsr});var M8=s((Mte,F8)=>{"use strict";var Asr=O8(),Osr=T8(),Ssr=_8(),R8=P8();function Tsr(){var r,e;if(typeof R8!="function")return!1;try{e=new R8([1,3.14,-3.14,Osr+1]),r=Asr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Ssr}catch{r=!1}return r}F8.exports=Tsr});var k8=s((Bte,B8)=>{"use strict";var Isr=M8();B8.exports=Isr});var C8=s((kte,j8)=>{"use strict";var _sr=typeof Int16Array=="function"?Int16Array:void 0;j8.exports=_sr});var V8=s((jte,G8)=>{"use strict";function Lsr(){throw new Error("not implemented")}G8.exports=Lsr});var zi=s((Cte,U8)=>{"use strict";var Psr=k8(),Rsr=C8(),Fsr=V8(),Xu;Psr()?Xu=Rsr:Xu=Fsr;U8.exports=Xu});var W8=s((Gte,H8)=>{"use strict";var Msr=tr(),Bsr=typeof Uint8Array=="function";function ksr(r){return Bsr&&r instanceof Uint8Array||Msr(r)==="[object Uint8Array]"}H8.exports=ksr});var D8=s((Vte,z8)=>{"use strict";var jsr=W8();z8.exports=jsr});var J8=s((Ute,X8)=>{"use strict";var Csr=255;X8.exports=Csr});var Y8=s((Hte,x8)=>{"use strict";var Gsr=typeof Uint8Array=="function"?Uint8Array:null;x8.exports=Gsr});var Q8=s((Wte,$8)=>{"use strict";var Vsr=D8(),Ju=J8(),Z8=Y8();function Usr(){var r,e;if(typeof Z8!="function")return!1;try{e=[1,3.14,-3.14,Ju+1,Ju+2],e=new Z8(e),r=Vsr(e)&&e[0]===1&&e[1]===3&&e[2]===Ju-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}$8.exports=Usr});var r5=s((zte,K8)=>{"use strict";var Hsr=Q8();K8.exports=Hsr});var t5=s((Dte,e5)=>{"use strict";var Wsr=typeof Uint8Array=="function"?Uint8Array:void 0;e5.exports=Wsr});var n5=s((Xte,i5)=>{"use strict";function zsr(){throw new Error("not implemented")}i5.exports=zsr});var xt=s((Jte,a5)=>{"use strict";var Dsr=r5(),Xsr=t5(),Jsr=n5(),xu;Dsr()?xu=Xsr:xu=Jsr;a5.exports=xu});var u5=s((xte,s5)=>{"use strict";var xsr=tr(),Ysr=typeof Uint8ClampedArray=="function";function Zsr(r){return Ysr&&r instanceof Uint8ClampedArray||xsr(r)==="[object Uint8ClampedArray]"}s5.exports=Zsr});var v5=s((Yte,o5)=>{"use strict";var $sr=u5();o5.exports=$sr});var c5=s((Zte,f5)=>{"use strict";var Qsr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;f5.exports=Qsr});var g5=s(($te,p5)=>{"use strict";var Ksr=v5(),l5=c5();function rur(){var r,e;if(typeof l5!="function")return!1;try{e=new l5([-1,0,1,3.14,4.99,255,256]),r=Ksr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}p5.exports=rur});var d5=s((Qte,m5)=>{"use strict";var eur=g5();m5.exports=eur});var y5=s((Kte,h5)=>{"use strict";var tur=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;h5.exports=tur});var b5=s((rie,q5)=>{"use strict";function iur(){throw new Error("not implemented")}q5.exports=iur});var Di=s((eie,w5)=>{"use strict";var nur=d5(),aur=y5(),sur=b5(),Yu;nur()?Yu=aur:Yu=sur;w5.exports=Yu});var N5=s((tie,E5)=>{"use strict";var uur=tr(),our=typeof Int8Array=="function";function vur(r){return our&&r instanceof Int8Array||uur(r)==="[object Int8Array]"}E5.exports=vur});var O5=s((iie,A5)=>{"use strict";var fur=N5();A5.exports=fur});var T5=s((nie,S5)=>{"use strict";var cur=127;S5.exports=cur});var _5=s((aie,I5)=>{"use strict";var lur=-128;I5.exports=lur});var P5=s((sie,L5)=>{"use strict";var pur=typeof Int8Array=="function"?Int8Array:null;L5.exports=pur});var M5=s((uie,F5)=>{"use strict";var gur=O5(),mur=T5(),dur=_5(),R5=P5();function hur(){var r,e;if(typeof R5!="function")return!1;try{e=new R5([1,3.14,-3.14,mur+1]),r=gur(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===dur}catch{r=!1}return r}F5.exports=hur});var k5=s((oie,B5)=>{"use strict";var yur=M5();B5.exports=yur});var C5=s((vie,j5)=>{"use strict";var qur=typeof Int8Array=="function"?Int8Array:void 0;j5.exports=qur});var V5=s((fie,G5)=>{"use strict";function bur(){throw new Error("not implemented")}G5.exports=bur});var Xi=s((cie,U5)=>{"use strict";var wur=k5(),Eur=C5(),Nur=V5(),Zu;wur()?Zu=Eur:Zu=Nur;U5.exports=Zu});var $u=s((lie,H5)=>{"use strict";function Aur(r){return typeof r=="number"}H5.exports=Aur});var z5=s((pie,W5)=>{"use strict";W5.exports=Number});var $n=s((gie,D5)=>{"use strict";var Our=z5();D5.exports=Our});var J5=s((mie,X5)=>{"use strict";var Sur=$n(),Tur=Sur.prototype.toString;X5.exports=Tur});var Y5=s((die,x5)=>{"use strict";var Iur=J5();function _ur(r){try{return Iur.call(r),!0}catch{return!1}}x5.exports=_ur});var Qu=s((hie,Z5)=>{"use strict";var Lur=Hi(),Pur=tr(),Rur=$n(),Fur=Y5(),Mur=Lur();function Bur(r){return typeof r=="object"?r instanceof Rur?!0:Mur?Fur(r):Pur(r)==="[object Number]":!1}Z5.exports=Bur});var Q5=s((yie,$5)=>{"use strict";var kur=$u(),jur=Qu();function Cur(r){return kur(r)||jur(r)}$5.exports=Cur});var j=s((qie,rp)=>{"use strict";var K5=w(),Ku=Q5(),Gur=$u(),Vur=Qu();K5(Ku,"isPrimitive",Gur);K5(Ku,"isObject",Vur);rp.exports=Ku});var V=s((bie,ep)=>{"use strict";var Uur=$n(),Hur=Uur.NEGATIVE_INFINITY;ep.exports=Hur});var ro=s((wie,tp)=>{"use strict";var Wur=_(),zur=V(),Dur=Tr();function Xur(r){return r<Wur&&r>zur&&Dur(r)}tp.exports=Xur});var eo=s((Eie,ip)=>{"use strict";var Jur=j().isPrimitive,xur=ro();function Yur(r){return Jur(r)&&xur(r)}ip.exports=Yur});var to=s((Nie,np)=>{"use strict";var Zur=j().isObject,$ur=ro();function Qur(r){return Zur(r)&&$ur(r.valueOf())}np.exports=Qur});var sp=s((Aie,ap)=>{"use strict";var Kur=eo(),ror=to();function eor(r){return Kur(r)||ror(r)}ap.exports=eor});var Cr=s((Oie,op)=>{"use strict";var up=w(),io=sp(),tor=eo(),ior=to();up(io,"isPrimitive",tor);up(io,"isObject",ior);op.exports=io});var no=s((Sie,vp)=>{"use strict";var nor=Cr().isPrimitive;function aor(r){return nor(r)&&r>=0}vp.exports=aor});var ao=s((Tie,fp)=>{"use strict";var sor=Cr().isObject;function uor(r){return sor(r)&&r.valueOf()>=0}fp.exports=uor});var lp=s((Iie,cp)=>{"use strict";var oor=no(),vor=ao();function cor(r){return oor(r)||vor(r)}cp.exports=cor});var Ge=s((_ie,gp)=>{"use strict";var pp=w(),so=lp(),lor=no(),por=ao();pp(so,"isPrimitive",lor);pp(so,"isObject",por);gp.exports=so});var dp=s((Lie,mp)=>{"use strict";var gor=4294967295;mp.exports=gor});var yp=s((Pie,hp)=>{"use strict";var mor=Tr(),dor=dp();function hor(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&mor(r.length)&&r.length>=0&&r.length<=dor}hp.exports=hor});var Nt=s((Rie,qp)=>{"use strict";var yor=yp();qp.exports=yor});var wp=s((Fie,bp)=>{"use strict";var qor=tr(),bor=typeof ArrayBuffer=="function";function wor(r){return bor&&r instanceof ArrayBuffer||qor(r)==="[object ArrayBuffer]"}bp.exports=wor});var uo=s((Mie,Ep)=>{"use strict";var Eor=wp();Ep.exports=Eor});var Ap=s((Bie,Np)=>{"use strict";var Nor=cr();function Aor(r){return typeof r=="object"&&r!==null&&!Nor(r)}Np.exports=Aor});var Qn=s((kie,Op)=>{"use strict";var Oor=Ap();Op.exports=Oor});var Tp=s((jie,Sp)=>{"use strict";function Sor(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}Sp.exports=Sor});var _p=s((Cie,Ip)=>{"use strict";function Tor(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}Ip.exports=Tor});var Mp=s((Gie,Fp)=>{"use strict";var Lp=j().isPrimitive,Pp=je(),Ji=w(),Rp=q(),Ior=Tp(),_or=_p();function At(r,e){if(!(this instanceof At))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Lp(r))throw new TypeError(Rp("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Lp(e))throw new TypeError(Rp("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Pp(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),Pp(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Ji(At,"BYTES_PER_ELEMENT",8);Ji(At.prototype,"BYTES_PER_ELEMENT",8);Ji(At.prototype,"byteLength",16);Ji(At.prototype,"toString",Ior);Ji(At.prototype,"toJSON",_or);Fp.exports=At});var Yt=s((Vie,Bp)=>{"use strict";var Lor=Mp();Bp.exports=Lor});var jp=s((Uie,kp)=>{"use strict";var Por=typeof Math.fround=="function"?Math.fround:null;kp.exports=Por});var Vp=s((Hie,Gp)=>{"use strict";var Ror=Qr(),Cp=new Ror(1);function For(r){return Cp[0]=r,Cp[0]}Gp.exports=For});var Wp=s((Wie,Hp)=>{"use strict";var Up=jp(),Mor=Vp(),oo;typeof Up=="function"?oo=Up:oo=Mor;Hp.exports=oo});var Dp=s((zie,zp)=>{"use strict";function Bor(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}zp.exports=Bor});var Jp=s((Die,Xp)=>{"use strict";function kor(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}Xp.exports=kor});var Kp=s((Xie,Qp)=>{"use strict";var xp=j().isPrimitive,Yp=je(),xi=w(),Zp=Wp(),$p=q(),jor=Dp(),Cor=Jp();function Ot(r,e){if(!(this instanceof Ot))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!xp(r))throw new TypeError($p("invalid argument. Real component must be a number. Value: `%s`.",r));if(!xp(e))throw new TypeError($p("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Yp(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Zp(r)}),Yp(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Zp(e)}),this}xi(Ot,"BYTES_PER_ELEMENT",4);xi(Ot.prototype,"BYTES_PER_ELEMENT",4);xi(Ot.prototype,"byteLength",8);xi(Ot.prototype,"toString",jor);xi(Ot.prototype,"toJSON",Cor);Qp.exports=Ot});var Zt=s((Jie,r7)=>{"use strict";var Gor=Kp();r7.exports=Gor});var t7=s((xie,e7)=>{"use strict";var Vor=Yt(),Uor=Zt();function Hor(r){return r instanceof Vor||r instanceof Uor?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}e7.exports=Hor});var Gr=s((Yie,i7)=>{"use strict";var Wor=t7();i7.exports=Wor});var a7=s((Zie,n7)=>{"use strict";var zor=Tr();function Dor(r){return zor(r/2)}n7.exports=Dor});var Kn=s(($ie,s7)=>{"use strict";var Xor=a7();s7.exports=Xor});var o7=s((Qie,u7)=>{"use strict";var Jor=O(),ra=Ou();function xor(){return typeof ra=="function"&&typeof ra("foo")=="symbol"&&Jor(ra,"iterator")&&typeof ra.iterator=="symbol"}u7.exports=xor});var ea=s((Kie,v7)=>{"use strict";var Yor=o7();v7.exports=Yor});var c7=s((rne,f7)=>{"use strict";var Zor=ea(),$or=Zor()?Symbol.iterator:null;f7.exports=$or});var ta=s((ene,l7)=>{"use strict";var Qor=c7();l7.exports=Qor});var g7=s((tne,p7)=>{"use strict";var Kor=je();function r2r(r,e,t){Kor(r,e,{configurable:!1,enumerable:!1,get:t})}p7.exports=r2r});var P=s((ine,m7)=>{"use strict";var e2r=g7();m7.exports=e2r});var h7=s((nne,d7)=>{"use strict";function t2r(r){return r.re}d7.exports=t2r});var Ve=s((ane,y7)=>{"use strict";var i2r=h7();y7.exports=i2r});var b7=s((sne,q7)=>{"use strict";function n2r(r){return r.im}q7.exports=n2r});var Ue=s((une,w7)=>{"use strict";var a2r=b7();w7.exports=a2r});var N7=s((one,E7)=>{"use strict";var s2r=Qr();function u2r(r,e){return new s2r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}E7.exports=u2r});var $t=s((vne,A7)=>{"use strict";var o2r=N7();A7.exports=o2r});var S7=s((fne,O7)=>{"use strict";var v2r=gr();function f2r(r,e){return new v2r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}O7.exports=f2r});var Qt=s((cne,T7)=>{"use strict";var c2r=S7();T7.exports=c2r});var L7=s((lne,_7)=>{"use strict";var I7={float64:l2r,float32:p2r,int32:g2r,int16:m2r,int8:d2r,uint32:h2r,uint16:y2r,uint8:q2r,uint8c:b2r,generic:w2r,default:E2r};function l2r(r,e){return r[e]}function p2r(r,e){return r[e]}function g2r(r,e){return r[e]}function m2r(r,e){return r[e]}function d2r(r,e){return r[e]}function h2r(r,e){return r[e]}function y2r(r,e){return r[e]}function q2r(r,e){return r[e]}function b2r(r,e){return r[e]}function w2r(r,e){return r[e]}function E2r(r,e){return r[e]}function N2r(r){var e=I7[r];return typeof e=="function"?e:I7.default}_7.exports=N2r});var ia=s((pne,P7)=>{"use strict";var A2r=L7();P7.exports=A2r});var M7=s((gne,F7)=>{"use strict";var R7={complex128:O2r,complex64:S2r,default:T2r};function O2r(r,e){return r.get(e)}function S2r(r,e){return r.get(e)}function T2r(r,e){return r.get(e)}function I2r(r){var e=R7[r];return typeof e=="function"?e:R7.default}F7.exports=I2r});var na=s((mne,B7)=>{"use strict";var _2r=M7();B7.exports=_2r});var j7=s((dne,k7)=>{"use strict";var L2r=Nt(),P2r=Gr(),R2r=Ve(),F2r=Ue(),M2r=q();function B2r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,L2r(i)&&i.length>=2)e.push(i[0],i[1]);else if(P2r(i))e.push(R2r(i),F2r(i));else return new TypeError(M2r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}k7.exports=B2r});var G7=s((hne,C7)=>{"use strict";var k2r=Nt(),j2r=Gr(),C2r=Ve(),G2r=Ue(),V2r=q();function U2r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),k2r(a)&&a.length>=2)i.push(a[0],a[1]);else if(j2r(a))i.push(C2r(a),G2r(a));else return new TypeError(V2r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}C7.exports=U2r});var U7=s((yne,V7)=>{"use strict";var H2r=Gr(),W2r=Ve(),z2r=Ue();function D2r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!H2r(i))return null;r[a]=W2r(i),r[a+1]=z2r(i),a+=2}return r}V7.exports=D2r});var Z7=s((qne,Y7)=>{"use strict";var Yi=Ge().isPrimitive,H7=Nt(),fo=jr(),W7=uo(),z7=Qn(),X2r=cr(),St=L(),Kt=Gr(),aa=Kn(),vo=Tr(),J2r=ea(),ri=ta(),mr=w(),oa=P(),Pr=Qr(),D7=Zt(),X=q(),sa=Ve(),ua=Ue(),x2r=$t(),Y2r=Qt(),Z2r=ia(),$2r=na(),X7=j7(),Q2r=G7(),K2r=U7(),Ir=Pr.BYTES_PER_ELEMENT*2,J7=J2r();function ei(r){return r instanceof Q||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function x7(r){return r===Q||r.name==="Complex128Array"}function r1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ir}function e1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ir*2}function Q(){var r,e,t,i;if(e=arguments.length,!(this instanceof Q))return e===0?new Q:e===1?new Q(arguments[0]):e===2?new Q(arguments[0],arguments[1]):new Q(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Pr(0);else if(e===1)if(Yi(arguments[0]))t=new Pr(arguments[0]*2);else if(fo(arguments[0]))if(t=arguments[0],i=t.length,i&&X2r(t)&&Kt(t[0])){if(t=K2r(new Pr(i*2),t),t===null){if(!aa(i))throw new RangeError(X("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Pr(arguments[0])}}else{if(r1r(t))t=x2r(t,0);else if(e1r(t))t=Y2r(t,0);else if(!aa(i))throw new RangeError(X("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Pr(t)}else if(W7(arguments[0])){if(t=arguments[0],!vo(t.byteLength/Ir))throw new RangeError(X("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ir,t.byteLength));t=new Pr(t)}else if(z7(arguments[0])){if(t=arguments[0],J7===!1)throw new TypeError(X("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!St(t[ri]))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ri](),!St(t.next))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=X7(t),t instanceof Error)throw t;t=new Pr(t)}else throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!W7(t))throw new TypeError(X("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Yi(r))throw new TypeError(X("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!vo(r/Ir))throw new RangeError(X("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ir,r));if(e===2){if(i=t.byteLength-r,!vo(i/Ir))throw new RangeError(X("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ir,i));t=new Pr(t,r)}else{if(i=arguments[2],!Yi(i))throw new TypeError(X("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ir>t.byteLength-r)throw new RangeError(X("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ir));t=new Pr(t,r,i*2)}}return mr(this,"_buffer",t),mr(this,"_length",t.length/2),this}mr(Q,"BYTES_PER_ELEMENT",Ir);mr(Q,"name","Complex64Array");mr(Q,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,m;if(!St(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!x7(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!St(n))throw new TypeError(X("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(ei(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),Kt(l))u[m]=sa(l),u[m+1]=ua(l);else if(H7(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(fo(e)){if(n){for(v=e.length,e.get&&e.set?f=$2r("default"):f=Z2r("default"),p=0;p<v;p++)if(!Kt(f(e,p))){c=!0;break}if(c){if(!aa(v))throw new RangeError(X("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),Kt(l))u[m]=sa(l),u[m+1]=ua(l);else if(H7(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(z7(e)&&J7&&St(e[ri])){if(u=e[ri](),!St(u.next))throw new TypeError(X("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=Q2r(u,n,t):o=X7(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(X("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});mr(Q,"of",function(){var e,t;if(!St(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!x7(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});oa(Q.prototype,"buffer",function(){return this._buffer.buffer});oa(Q.prototype,"byteLength",function(){return this._buffer.byteLength});oa(Q.prototype,"byteOffset",function(){return this._buffer.byteOffset});mr(Q.prototype,"BYTES_PER_ELEMENT",Q.BYTES_PER_ELEMENT);mr(Q.prototype,"copyWithin",function(e,t){if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});mr(Q.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},mr(i,"next",f),mr(i,"return",v),ri&&mr(i,ri,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new D7(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});mr(Q.prototype,"get",function(e){var t;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Yi(e))throw new TypeError(X("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new D7(t[e],t[e+1])});oa(Q.prototype,"length",function(){return this._length});mr(Q.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Yi(i))throw new TypeError(X("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Kt(e)){if(i>=this._length)throw new RangeError(X("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=sa(e),n[i+1]=ua(e);return}if(ei(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Ir,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Pr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(fo(e)){for(o=e.length,v=0;v<o;v++)if(!Kt(e[v])){u=!0;break}if(u){if(!aa(o))throw new RangeError(X("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Ir,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Pr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=sa(f),n[i+1]=ua(f),i+=2;return}throw new TypeError(X("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Y7.exports=Q});var Zi=s((bne,$7)=>{"use strict";var t1r=Z7();$7.exports=t1r});var K7=s((wne,Q7)=>{"use strict";function i1r(r){return r.re}Q7.exports=i1r});var He=s((Ene,r9)=>{"use strict";var n1r=K7();r9.exports=n1r});var t9=s((Nne,e9)=>{"use strict";function a1r(r){return r.im}e9.exports=a1r});var We=s((Ane,i9)=>{"use strict";var s1r=t9();i9.exports=s1r});var a9=s((One,n9)=>{"use strict";var u1r=Nt(),o1r=Gr(),v1r=q(),f1r=He(),c1r=We();function l1r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,u1r(i)&&i.length>=2)e.push(i[0],i[1]);else if(o1r(i))e.push(f1r(i),c1r(i));else return new TypeError(v1r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}n9.exports=l1r});var u9=s((Sne,s9)=>{"use strict";var p1r=Nt(),g1r=Gr(),m1r=q(),d1r=He(),h1r=We();function y1r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),p1r(a)&&a.length>=2)i.push(a[0],a[1]);else if(g1r(a))i.push(d1r(a),h1r(a));else return new TypeError(m1r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}s9.exports=y1r});var v9=s((Tne,o9)=>{"use strict";var q1r=Gr(),b1r=He(),w1r=We();function E1r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!q1r(i))return null;r[a]=b1r(i),r[a+1]=w1r(i),a+=2}return r}o9.exports=E1r});var y9=s((Ine,h9)=>{"use strict";var $i=Ge().isPrimitive,f9=Nt(),lo=jr(),c9=uo(),l9=Qn(),N1r=cr(),Tt=L(),ti=Gr(),va=Kn(),co=Tr(),A1r=ea(),ii=ta(),dr=w(),la=P(),Rr=gr(),p9=Yt(),fa=He(),ca=We(),O1r=$t(),S1r=Qt(),T1r=ia(),I1r=na(),J=q(),g9=a9(),_1r=u9(),L1r=v9(),_r=Rr.BYTES_PER_ELEMENT*2,m9=A1r();function ni(r){return r instanceof K||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function d9(r){return r===K||r.name==="Complex64Array"}function P1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===_r/2}function R1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===_r}function K(){var r,e,t,i;if(e=arguments.length,!(this instanceof K))return e===0?new K:e===1?new K(arguments[0]):e===2?new K(arguments[0],arguments[1]):new K(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Rr(0);else if(e===1)if($i(arguments[0]))t=new Rr(arguments[0]*2);else if(lo(arguments[0]))if(t=arguments[0],i=t.length,i&&N1r(t)&&ti(t[0])){if(t=L1r(new Rr(i*2),t),t===null){if(!va(i))throw new RangeError(J("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Rr(arguments[0])}}else{if(P1r(t))t=O1r(t,0);else if(R1r(t))t=S1r(t,0);else if(!va(i))throw new RangeError(J("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Rr(t)}else if(c9(arguments[0])){if(t=arguments[0],!co(t.byteLength/_r))throw new RangeError(J("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",_r,t.byteLength));t=new Rr(t)}else if(l9(arguments[0])){if(t=arguments[0],m9===!1)throw new TypeError(J("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Tt(t[ii]))throw new TypeError(J("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ii](),!Tt(t.next))throw new TypeError(J("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=g9(t),t instanceof Error)throw t;t=new Rr(t)}else throw new TypeError(J("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!c9(t))throw new TypeError(J("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!$i(r))throw new TypeError(J("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!co(r/_r))throw new RangeError(J("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",_r,r));if(e===2){if(i=t.byteLength-r,!co(i/_r))throw new RangeError(J("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",_r,i));t=new Rr(t,r)}else{if(i=arguments[2],!$i(i))throw new TypeError(J("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*_r>t.byteLength-r)throw new RangeError(J("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*_r));t=new Rr(t,r,i*2)}}return dr(this,"_buffer",t),dr(this,"_length",t.length/2),this}dr(K,"BYTES_PER_ELEMENT",_r);dr(K,"name","Complex128Array");dr(K,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,m;if(!Tt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!d9(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Tt(n))throw new TypeError(J("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(ni(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),ti(l))u[m]=fa(l),u[m+1]=ca(l);else if(f9(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(J("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(lo(e)){if(n){for(v=e.length,e.get&&e.set?f=I1r("default"):f=T1r("default"),p=0;p<v;p++)if(!ti(f(e,p))){c=!0;break}if(c){if(!va(v))throw new RangeError(J("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),ti(l))u[m]=fa(l),u[m+1]=ca(l);else if(f9(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(J("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(l9(e)&&m9&&Tt(e[ii])){if(u=e[ii](),!Tt(u.next))throw new TypeError(J("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=_1r(u,n,t):o=g9(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(J("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});dr(K,"of",function(){var e,t;if(!Tt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!d9(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});la(K.prototype,"buffer",function(){return this._buffer.buffer});la(K.prototype,"byteLength",function(){return this._buffer.byteLength});la(K.prototype,"byteOffset",function(){return this._buffer.byteOffset});dr(K.prototype,"BYTES_PER_ELEMENT",K.BYTES_PER_ELEMENT);dr(K.prototype,"copyWithin",function(e,t){if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});dr(K.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},dr(i,"next",f),dr(i,"return",v),ii&&dr(i,ii,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new p9(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});dr(K.prototype,"get",function(e){var t;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!$i(e))throw new TypeError(J("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new p9(t[e],t[e+1])});la(K.prototype,"length",function(){return this._length});dr(K.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!$i(i))throw new TypeError(J("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ti(e)){if(i>=this._length)throw new RangeError(J("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=fa(e),n[i+1]=ca(e);return}if(ni(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Rr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(lo(e)){for(o=e.length,v=0;v<o;v++)if(!ti(e[v])){u=!0;break}if(u){if(!va(o))throw new RangeError(J("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Rr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=fa(f),n[i+1]=ca(f),i+=2;return}throw new TypeError(J("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});h9.exports=K});var Qi=s((_ne,q9)=>{"use strict";var F1r=y9();q9.exports=F1r});var w9=s((Lne,b9)=>{"use strict";var M1r=gr(),B1r=Qr(),k1r=lr(),j1r=Et(),C1r=Jt(),G1r=zi(),V1r=xt(),U1r=Di(),H1r=Xi(),W1r=Zi(),z1r=Qi(),D1r=[M1r,B1r,j1r,k1r,G1r,C1r,H1r,V1r,U1r,W1r,z1r];b9.exports=D1r});var N9=s((Pne,E9)=>{"use strict";var X1r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];E9.exports=X1r});var S9=s((Rne,O9)=>{"use strict";var J1r=wt(),x1r=cr(),Y1r=Ce(),Z1r=D4(),$1r=w9(),A9=N9(),Q1r=A9.length;function K1r(r){var e;if(x1r(r))return"generic";if(J1r(r))return null;for(e=0;e<Q1r;e++)if(r instanceof $1r[e])return A9[e];return Z1r[Y1r(r)]||null}O9.exports=K1r});var pa=s((Fne,T9)=>{"use strict";var r3r=S9();T9.exports=r3r});var L9=s((Mne,_9)=>{"use strict";var I9=L(),e3r=jr(),t3r=P4(),i3r=Bu(),n3r=ku(),a3r=ju(),s3r=pa(),po=q();function u3r(){var r,e,t,i,n,a,u,o,f;if(r=arguments[0],arguments.length>1)if(e3r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!I9(t))throw new TypeError(po("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!I9(t))throw new TypeError(po("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!t3r(r))throw new TypeError(po("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=s3r(i),i3r(i)?a=n3r(u):a=a3r(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}_9.exports=u3r});var R9=s((Bne,P9)=>{"use strict";var o3r=L9();P9.exports=o3r});var M9=s((kne,F9)=>{"use strict";function v3r(r){return r!==r}F9.exports=v3r});var E=s((jne,B9)=>{"use strict";var f3r=M9();B9.exports=f3r});var j9=s((Cne,k9)=>{"use strict";var c3r={Complex64:"complex64",Complex128:"complex128"};k9.exports=c3r});var G9=s((Gne,C9)=>{"use strict";var l3r=Zt(),p3r=Yt(),g3r=[l3r,p3r];C9.exports=g3r});var U9=s((Vne,V9)=>{"use strict";var m3r=["complex64","complex128"];V9.exports=m3r});var z9=s((Une,W9)=>{"use strict";var d3r=Ce(),h3r=j9(),y3r=G9(),H9=U9(),q3r=H9.length;function b3r(r){var e;for(e=0;e<q3r;e++)if(r instanceof y3r[e])return H9[e];return h3r[d3r(r)]||null}W9.exports=b3r});var go=s((Hne,D9)=>{"use strict";var w3r=z9();D9.exports=w3r});var J9=s((Wne,X9)=>{"use strict";var E3r=gr(),N3r=Qr(),A3r=Qi(),O3r=Zi(),S3r={float64:E3r,float32:N3r,complex128:A3r,complex64:O3r};X9.exports=S3r});var Y9=s((zne,x9)=>{"use strict";var T3r=J9();function I3r(r){return T3r[r]||null}x9.exports=I3r});var $9=s((Dne,Z9)=>{"use strict";var _3r=Y9();Z9.exports=_3r});var K9=s((Xne,Q9)=>{"use strict";function L3r(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}Q9.exports=L3r});var ag=s((Jne,ng)=>{"use strict";var P3r=Zt(),R3r=Yt(),rg=He(),eg=We(),tg=Ve(),ig=Ue();function F3r(r,e,t,i,n,a){var u,o,f,v,c,l,p,m,h,d,g,y,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=tg(e),l=ig(e)):(v=rg(e),l=eg(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=tg(i),p=ig(i)):(c=rg(i),p=eg(i)),o===2?u=P3r:u=R3r,n===1)return a?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],a?y=n-1:y=n,d=(c-v)/y,g=(p-l)/y,N=1;N<y;N++)m=v+d*N,h=l+g*N,f.push(new u(m,h));return a&&f.push(new u(c,p)),f}ng.exports=F3r});var mo=s((xne,sg)=>{"use strict";function M3r(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}sg.exports=M3r});var ho=s((Yne,cg)=>{"use strict";var ug=He(),og=We(),vg=Ve(),fg=Ue();function B3r(r,e,t,i,n,a,u){var o,f,v,c,l,p,m,h,d;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=vg(t),v=fg(t)):(o=ug(t),v=og(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=vg(n),c=fg(n)):(f=ug(n),c=og(n)),a===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?m=a-1:m=a,l=(f-o)/m,p=(c-v)/m,d=2,h=1;h<m;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}cg.exports=B3r});var pg=s((Zne,lg)=>{"use strict";var k3r=Object;lg.exports=k3r});var ai=s(($ne,gg)=>{"use strict";var j3r=pg();gg.exports=j3r});var dg=s((Qne,mg)=>{"use strict";var C3r=Object.getPrototypeOf;mg.exports=C3r});var yg=s((Kne,hg)=>{"use strict";function G3r(r){return r.__proto__}hg.exports=G3r});var bg=s((rae,qg)=>{"use strict";var V3r=tr(),U3r=yg();function H3r(r){var e=U3r(r);return e||e===null?e:V3r(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}qg.exports=H3r});var Eg=s((eae,wg)=>{"use strict";var W3r=L(),z3r=dg(),D3r=bg(),yo;W3r(Object.getPrototypeOf)?yo=z3r:yo=D3r;wg.exports=yo});var Ag=s((tae,Ng)=>{"use strict";var X3r=ai(),J3r=Eg();function x3r(r){return r==null?null:(r=X3r(r),J3r(r))}Ng.exports=x3r});var It=s((iae,Og)=>{"use strict";var Y3r=Ag();Og.exports=Y3r});var Ig=s((nae,Tg)=>{"use strict";var Z3r=Qn(),Sg=L(),$3r=It(),ga=O(),Q3r=tr(),K3r=Object.prototype;function rvr(r){var e;for(e in r)if(!ga(r,e))return!1;return!0}function evr(r){var e;return Z3r(r)?(e=$3r(r),e?!ga(r,"constructor")&&ga(e,"constructor")&&Sg(e.constructor)&&Q3r(e.constructor)==="[object Function]"&&ga(e,"isPrototypeOf")&&Sg(e.isPrototypeOf)&&(e===K3r||rvr(r)):!0):!1}Tg.exports=evr});var I=s((aae,_g)=>{"use strict";var tvr=Ig();_g.exports=tvr});var qo=s((sae,Lg)=>{"use strict";function ivr(r){return typeof r=="string"}Lg.exports=ivr});var Rg=s((uae,Pg)=>{"use strict";var nvr=String.prototype.valueOf;Pg.exports=nvr});var Mg=s((oae,Fg)=>{"use strict";var avr=Rg();function svr(r){try{return avr.call(r),!0}catch{return!1}}Fg.exports=svr});var bo=s((vae,Bg)=>{"use strict";var uvr=Hi(),ovr=tr(),vvr=Mg(),fvr=uvr();function cvr(r){return typeof r=="object"?r instanceof String?!0:fvr?vvr(r):ovr(r)==="[object String]":!1}Bg.exports=cvr});var jg=s((fae,kg)=>{"use strict";var lvr=qo(),pvr=bo();function gvr(r){return lvr(r)||pvr(r)}kg.exports=gvr});var rr=s((cae,Gg)=>{"use strict";var Cg=w(),wo=jg(),mvr=qo(),dvr=bo();Cg(wo,"isPrimitive",mvr);Cg(wo,"isObject",dvr);Gg.exports=wo});var No=s((lae,Ug)=>{"use strict";var hvr=I(),Vg=O(),yvr=rr().isPrimitive,qvr=fr().isPrimitive,Eo=q();function bvr(r,e){return hvr(e)?Vg(e,"dtype")&&(r.dtype=e.dtype,!yvr(r.dtype))?new TypeError(Eo("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Vg(e,"endpoint")&&(r.endpoint=e.endpoint,!qvr(r.endpoint))?new TypeError(Eo("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(Eo("invalid argument. Options argument must be an object. Value: `%s`.",e))}Ug.exports=bvr});var Ao=s((pae,wvr)=>{wvr.exports={endpoint:!0}});var xg=s((gae,Jg)=>{"use strict";var Hg=Gr(),Wg=j().isPrimitive,Evr=Ge().isPrimitive,zg=E(),Dg=go(),Nvr=$9(),Avr=$t(),Ovr=Qt(),si=q(),Svr=K9(),Tvr=ag(),Ivr=mo(),Xg=ho(),_vr=No(),Lvr=Ao();function Pvr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(o=Dg(r),o===null){if(!Hg(r))throw new TypeError(si("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!Wg(r)||zg(r))throw new TypeError(si("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=Dg(e),f===null){if(!Hg(e))throw new TypeError(si("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!Wg(e)||zg(e))throw new TypeError(si("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!Evr(t))throw new TypeError(si("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Lvr.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=_vr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?Tvr(o,r,f,e,t,i.endpoint):Svr(r,e,t,i.endpoint);if(n=Nvr(i.dtype),n===null)throw new TypeError(si('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return Xg(Avr(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return Xg(Ovr(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return Ivr(u,r,e,t,i.endpoint)}Jg.exports=Pvr});var Zg=s((mae,Yg)=>{"use strict";var Rvr=Bu(),Fvr=ia(),Mvr=ju(),Bvr=na(),kvr=ku(),jvr=pa();function Cvr(r){var e=jvr(r);return Rvr(r)?{accessorProtocol:!0,accessors:[Bvr(e),kvr(e)]}:{accessorProtocol:!1,accessors:[Fvr(e),Mvr(e)]}}Yg.exports=Cvr});var Qg=s((dae,$g)=>{"use strict";var Gvr=Zg();$g.exports=Gvr});var rm=s((hae,Kg)=>{"use strict";var Vvr=Qg();function Uvr(r){var e=Vvr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Kg.exports=Uvr});var ma=s((yae,em)=>{"use strict";var Hvr=rm();em.exports=Hvr});var um=s((qae,sm)=>{"use strict";var Wvr=Zt(),zvr=Yt(),tm=He(),im=We(),nm=Ve(),am=Ue();function Dvr(r,e,t,i,n,a,u){var o,f,v,c,l,p,m,h,d,g,y,N,A,k;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=nm(t),l=am(t)):(v=tm(t),l=im(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=nm(n),p=am(n)):(c=tm(n),p=im(n)),f===2?o=Wvr:o=zvr,h=r.data,m=r.accessors[1],a===1)return u?m(h,0,new o(c,p)):m(h,0,new o(v,l)),r;for(m(h,0,new o(v,l)),u?A=a-1:A=a,y=(c-v)/A,N=(p-l)/A,k=1;k<A;k++)d=v+y*k,g=l+N*k,m(h,k,new o(d,g));return u&&m(h,A,new o(c,p)),r}sm.exports=Dvr});var vm=s((bae,om)=>{"use strict";function Xvr(r,e,t,i,n){var a,u,o,f,v;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(a,v,e+f*v);return n&&u(a,o,t),r}om.exports=Xvr});var hm=s((wae,dm)=>{"use strict";var fm=Gr(),cm=j().isPrimitive,Jvr=jr(),Ki=q(),lm=E(),pm=go(),xvr=pa(),Yvr=$t(),Zvr=Qt(),gm=ma(),$vr=um(),Qvr=vm(),mm=ho(),Kvr=mo(),rfr=No(),efr=Ao();function tfr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(a=pm(r),a===null){if(!fm(r))throw new TypeError(Ki("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!cm(r)||lm(r))throw new TypeError(Ki("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=pm(e),u===null){if(!fm(e))throw new TypeError(Ki("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!cm(e)||lm(e))throw new TypeError(Ki("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!Jvr(t))throw new TypeError(Ki("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:efr.endpoint},arguments.length>3&&(n=rfr(i,arguments[3]),n))throw n;if(f=xvr(t),f===null&&(f="generic"),f==="complex64")return mm(Yvr(t,0),a,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return mm(Zvr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=gm(t),$vr(v,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=gm(t),v.accessorProtocol?(Qvr(v,r,e,t.length,i.endpoint),t):(Kvr(t,r,e,t.length,i.endpoint),t)}dm.exports=tfr});var bm=s((Eae,qm)=>{"use strict";var ifr=w(),ym=xg(),nfr=hm();ifr(ym,"assign",nfr);qm.exports=ym});var Em=s((Nae,wm)=>{"use strict";var afr=j().isPrimitive,sfr=rr().isPrimitive,ufr=fr().isPrimitive,ofr=cr(),vfr=q(),ffr={number:afr,string:sfr,boolean:ufr};function cfr(r,e,t){var i,n,a,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],a=e[f],u=ffr[a],u(o))i.push([[o]]),n.push([1,1]);else if(ofr(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(vfr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],a,a,String(o)));return[i,n]}wm.exports=cfr});var Oo=s((Aae,Nm)=>{"use strict";var lfr=Em();Nm.exports=lfr});var Om=s((Oae,Am)=>{"use strict";var pfr=xn();function gfr(r){return pfr(1,r)}Am.exports=gfr});var Tm=s((Sae,Sm)=>{"use strict";var mfr=Om();Sm.exports=mfr});var _m=s((Tae,Im)=>{"use strict";function dfr(r,e,t){var i,n,a,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],a=0;a<i;a++)f[a]=t(o[a])}Im.exports=dfr});var So=s((Iae,Lm)=>{"use strict";var hfr=_m();Lm.exports=hfr});var Rm=s((_ae,Pm)=>{"use strict";var yfr=xn();function qfr(r){return yfr(0,r)}Pm.exports=qfr});var To=s((Lae,Fm)=>{"use strict";var bfr=Rm();Fm.exports=bfr});var Bm=s((Pae,Mm)=>{"use strict";var Vr=nr(),wfr=bu(),Efr=wu(),Nfr=xn(),Afr=Mc(),Ofr=Eu(),Sfr=R9(),Tfr=bm(),Ifr=Oo(),_fr=Tm(),Lfr=So(),Pfr=To();function Rfr(r){return Vr(r,"bbinary2d",wfr),Vr(r,"broadcastShapes",Efr),Vr(r,"filled2d",Nfr),Vr(r,"filled2dBy",Afr),Vr(r,"flattenArray",Ofr),Vr(r,"iterator2array",Sfr),Vr(r,"linspace",Tfr),Vr(r,"normalizeBroadcastArgs",Ifr),Vr(r,"ones2d",_fr),Vr(r,"unary2d",Lfr),Vr(r,"zeros2d",Pfr),r}Mm.exports=Rfr});var Cm=s((Rae,jm)=>{"use strict";var km=q();function Ffr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(km('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(km('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}jm.exports=Ffr});var Vm=s((Fae,Gm)=>{"use strict";var Mfr=Cm();Gm.exports=Mfr});var Hm=s((Mae,Um)=>{"use strict";var Bfr=j().isPrimitive,kfr=Vm(),jfr=q();function Cfr(r,e,t,i,n,a){var u,o;if(!(Bfr(r)&&kfr(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(jfr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}Um.exports=Cfr});var zm=s((Bae,Wm)=>{"use strict";var Gfr=Hm();Wm.exports=Gfr});var Xm=s((kae,Dm)=>{"use strict";var Vfr=fr().isPrimitive,Ufr=q();function Hfr(r,e){if(!Vfr(r))throw new TypeError(Ufr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Dm.exports=Hfr});var xm=s((jae,Jm)=>{"use strict";var Wfr=Xm();Jm.exports=Wfr});var Zm=s((Cae,Ym)=>{"use strict";function zfr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}Ym.exports=zfr});var Qm=s((Gae,$m)=>{"use strict";var Dfr=Zm();$m.exports=Dfr});var rd=s((Vae,Km)=>{"use strict";var Xfr=q(),Jfr=Qm();function xfr(r,e,t){if(!Jfr(r,e))throw new TypeError(Xfr("invalid argument. %s must be broadcast compatible.",t))}Km.exports=xfr});var td=s((Uae,ed)=>{"use strict";var Yfr=rd();ed.exports=Yfr});var nd=s((Hae,id)=>{"use strict";function Zfr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}id.exports=Zfr});var sd=s((Wae,ad)=>{"use strict";var $fr=nd();ad.exports=$fr});var od=s((zae,ud)=>{"use strict";var Qfr=q(),Kfr=sd();function rcr(r,e,t,i){if(!Kfr(r,e))throw new TypeError(Qfr("invalid argument. %s must be broadcast compatible with %s.",t,i))}ud.exports=rcr});var fd=s((Dae,vd)=>{"use strict";var ecr=od();vd.exports=ecr});var ld=s((Xae,cd)=>{"use strict";var tcr=q();function icr(r,e){if(r===void 0)throw new Error(tcr("invalid invocation. Must provide %s.",e))}cd.exports=icr});var Io=s((Jae,pd)=>{"use strict";var ncr=ld();pd.exports=ncr});var md=s((xae,gd)=>{"use strict";var acr=q();function scr(r,e,t,i){if(!(r>e))throw new TypeError(acr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}gd.exports=scr});var hd=s((Yae,dd)=>{"use strict";var ucr=md();dd.exports=ucr});var qd=s((Zae,yd)=>{"use strict";var ocr=q();function vcr(r,e,t,i){if(!(r>=e))throw new TypeError(ocr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}yd.exports=vcr});var wd=s(($ae,bd)=>{"use strict";var fcr=qd();bd.exports=fcr});var Nd=s((Qae,Ed)=>{"use strict";var ccr=Cr().isPrimitive,lcr=q();function pcr(r,e){if(!ccr(r))throw new TypeError(lcr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}Ed.exports=pcr});var Od=s((Kae,Ad)=>{"use strict";var gcr=Nd();Ad.exports=gcr});var Td=s((r0e,Sd)=>{"use strict";var mcr=q();function dcr(r,e,t,i){if(!(r<e))throw new TypeError(mcr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Sd.exports=dcr});var _d=s((e0e,Id)=>{"use strict";var hcr=Td();Id.exports=hcr});var Pd=s((t0e,Ld)=>{"use strict";var ycr=q();function qcr(r,e,t,i){if(!(r<=e))throw new TypeError(ycr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Ld.exports=qcr});var Fd=s((i0e,Rd)=>{"use strict";var bcr=Pd();Rd.exports=bcr});var Bd=s((n0e,Md)=>{"use strict";var wcr=Ge().isPrimitive,Ecr=q();function Ncr(r,e){if(!wcr(r))throw new TypeError(Ecr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Md.exports=Ncr});var jd=s((a0e,kd)=>{"use strict";var Acr=Bd();kd.exports=Acr});var _o=s((s0e,Cd)=>{"use strict";var Ocr=j().isPrimitive;function Scr(r){return Ocr(r)&&r>=0}Cd.exports=Scr});var Lo=s((u0e,Gd)=>{"use strict";var Tcr=j().isObject;function Icr(r){return Tcr(r)&&r.valueOf()>=0}Gd.exports=Icr});var Ud=s((o0e,Vd)=>{"use strict";var _cr=_o(),Lcr=Lo();function Pcr(r){return _cr(r)||Lcr(r)}Vd.exports=Pcr});var Ro=s((v0e,Wd)=>{"use strict";var Hd=w(),Po=Ud(),Rcr=_o(),Fcr=Lo();Hd(Po,"isPrimitive",Rcr);Hd(Po,"isObject",Fcr);Wd.exports=Po});var Dd=s((f0e,zd)=>{"use strict";var Mcr=Ro().isPrimitive,Bcr=q();function kcr(r,e){if(!Mcr(r))throw new TypeError(Bcr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}zd.exports=kcr});var Jd=s((c0e,Xd)=>{"use strict";var jcr=Dd();Xd.exports=jcr});var Yd=s((l0e,xd)=>{"use strict";var Ccr=j().isPrimitive,Gcr=q();function Vcr(r,e){if(!Ccr(r))throw new TypeError(Gcr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}xd.exports=Vcr});var $d=s((p0e,Zd)=>{"use strict";var Ucr=Yd();Zd.exports=Ucr});var Kd=s((g0e,Qd)=>{"use strict";var Hcr=q();function Wcr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Hcr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}Qd.exports=Wcr});var eh=s((m0e,rh)=>{"use strict";var zcr=Kd();rh.exports=zcr});var Fo=s((d0e,th)=>{"use strict";var Dcr=Cr().isPrimitive;function Xcr(r){return Dcr(r)&&r>0}th.exports=Xcr});var Mo=s((h0e,ih)=>{"use strict";var Jcr=Cr().isObject;function xcr(r){return Jcr(r)&&r.valueOf()>0}ih.exports=xcr});var ah=s((y0e,nh)=>{"use strict";var Ycr=Fo(),Zcr=Mo();function $cr(r){return Ycr(r)||Zcr(r)}nh.exports=$cr});var re=s((q0e,uh)=>{"use strict";var sh=w(),Bo=ah(),Qcr=Fo(),Kcr=Mo();sh(Bo,"isPrimitive",Qcr);sh(Bo,"isObject",Kcr);uh.exports=Bo});var vh=s((b0e,oh)=>{"use strict";var rlr=re().isPrimitive,elr=q();function tlr(r,e){if(!rlr(r))throw new TypeError(elr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}oh.exports=tlr});var ko=s((w0e,fh)=>{"use strict";var ilr=vh();fh.exports=ilr});var jo=s((E0e,ch)=>{"use strict";var nlr=j().isPrimitive;function alr(r){return nlr(r)&&r>0}ch.exports=alr});var Co=s((N0e,lh)=>{"use strict";var slr=j().isObject;function ulr(r){return slr(r)&&r.valueOf()>0}lh.exports=ulr});var gh=s((A0e,ph)=>{"use strict";var olr=jo(),vlr=Co();function flr(r){return olr(r)||vlr(r)}ph.exports=flr});var W=s((O0e,dh)=>{"use strict";var mh=w(),Go=gh(),clr=jo(),llr=Co();mh(Go,"isPrimitive",clr);mh(Go,"isObject",llr);dh.exports=Go});var yh=s((S0e,hh)=>{"use strict";var plr=W().isPrimitive,glr=q();function mlr(r,e){if(!plr(r))throw new TypeError(glr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}hh.exports=mlr});var bh=s((T0e,qh)=>{"use strict";var dlr=yh();qh.exports=dlr});var Vo=s((I0e,wh)=>{"use strict";var hlr=j().isPrimitive;function ylr(r){return hlr(r)&&r>=0&&r<=1}wh.exports=ylr});var Uo=s((_0e,Eh)=>{"use strict";var qlr=j().isObject;function blr(r){return qlr(r)&&r.valueOf()>=0&&r.valueOf()<=1}Eh.exports=blr});var Ah=s((L0e,Nh)=>{"use strict";var wlr=Vo(),Elr=Uo();function Nlr(r){return wlr(r)||Elr(r)}Nh.exports=Nlr});var rn=s((P0e,Sh)=>{"use strict";var Oh=w(),Ho=Ah(),Alr=Vo(),Olr=Uo();Oh(Ho,"isPrimitive",Alr);Oh(Ho,"isObject",Olr);Sh.exports=Ho});var Ih=s((R0e,Th)=>{"use strict";var Slr=rn().isPrimitive,Tlr=q();function Ilr(r,e){if(!Slr(r))throw new TypeError(Tlr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}Th.exports=Ilr});var Lh=s((F0e,_h)=>{"use strict";var _lr=Ih();_h.exports=_lr});var Rh=s((M0e,Ph)=>{"use strict";var Llr=cr(),Plr=q();function Rlr(r,e){if(!Llr(r))throw new TypeError(Plr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Ph.exports=Rlr});var Mh=s((B0e,Fh)=>{"use strict";var Flr=Rh();Fh.exports=Flr});var kh=s((k0e,Bh)=>{"use strict";function Mlr(r){return r.length===1||r[0].length===1}Bh.exports=Mlr});var Ch=s((j0e,jh)=>{"use strict";var Blr=kh();jh.exports=Blr});var Vh=s((C0e,Gh)=>{"use strict";var klr=cr(),jlr=Ch();function Clr(r){return klr(r)&&jlr(r)}Gh.exports=Clr});var Hh=s((G0e,Uh)=>{"use strict";var Glr=Vh();Uh.exports=Glr});var zh=s((V0e,Wh)=>{"use strict";var Vlr=q(),Ulr=Hh();function Hlr(r,e){if(!Ulr(r))throw new TypeError(Vlr("invalid argument. %s must consist of only a single row or a single column.",e))}Wh.exports=Hlr});var Xh=s((U0e,Dh)=>{"use strict";var Wlr=zh();Dh.exports=Wlr});var xh=s((H0e,Jh)=>{"use strict";function zlr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}Jh.exports=zlr});var Zh=s((W0e,Yh)=>{"use strict";var Dlr=xh();Yh.exports=Dlr});var Qh=s((z0e,$h)=>{"use strict";var Xlr=q(),Jlr=Zh();function xlr(r,e,t){if(!Jlr(r,e))throw new TypeError(Xlr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}$h.exports=xlr});var ry=s((D0e,Kh)=>{"use strict";var Ylr=Qh();Kh.exports=Ylr});var ty=s((X0e,ey)=>{"use strict";var Zlr=rr().isPrimitive,$lr=q();function Qlr(r,e){if(!Zlr(r))throw new TypeError($lr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}ey.exports=Qlr});var ny=s((J0e,iy)=>{"use strict";var Klr=ty();iy.exports=Klr});var sy=s((x0e,ay)=>{"use strict";var r4r=q();function e4r(r){throw new Error(r4r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}ay.exports=e4r});var oy=s((Y0e,uy)=>{"use strict";var t4r=sy();uy.exports=t4r});var cy=s((Z0e,fy)=>{"use strict";var vy=ko(),i4r=Io();function n4r(r,e,t){vy(r,"Number of rows"),vy(e,"Number of columns"),i4r(t,"a pseudorandom number generator seed")}fy.exports=n4r});var py=s(($0e,ly)=>{"use strict";var a4r=cy();ly.exports=a4r});var my=s((Q0e,gy)=>{"use strict";var x=nr(),s4r=cr(),u4r=zm(),o4r=xm(),v4r=td(),f4r=fd(),c4r=Io(),l4r=hd(),p4r=wd(),g4r=Od(),m4r=_d(),d4r=Fd(),h4r=jd(),y4r=Jd(),q4r=$d(),b4r=eh(),w4r=ko(),E4r=bh(),N4r=Lh(),A4r=Mh(),O4r=Xh(),S4r=ry(),T4r=ny(),I4r=oy(),_4r=py();function L4r(r){return x(r,"isBetween",u4r),x(r,"isBoolean",o4r),x(r,"isBroadcastCompatible",v4r),x(r,"isBroadcastCompatibleWith",f4r),x(r,"isDefined",c4r),x(r,"isGreaterThan",l4r),x(r,"isGreaterThanEqual",p4r),x(r,"isInteger",g4r),x(r,"isLessThan",m4r),x(r,"isLessThanEqual",d4r),x(r,"isNonNegativeInteger",h4r),x(r,"isNonNegativeNumber",y4r),x(r,"isNumber",q4r),x(r,"isOneOf",b4r),x(r,"isPositiveInteger",w4r),x(r,"isPositiveNumber",E4r),x(r,"isProbability",N4r),x(r,"isRange",A4r),x(r,"isRange1d",O4r),x(r,"isSameShape",S4r),x(r,"isString",T4r),x(r,"unrecognizedOptionName",I4r),x(r,"verifyCommonPRNGArgs",_4r),r.base={},x(r.base,"isArray",s4r),r}gy.exports=L4r});var hy=s((K0e,dy)=>{"use strict";var Wo=4;function P4r(r,e,t,i,n,a){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%Wo,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<Wo)return n;for(v=f;v<r;v+=Wo)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=a;return n}dy.exports=P4r});var qy=s((rse,yy)=>{"use strict";var en=4;function R4r(r,e,t,i,n,a,u,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&u===1){if(c=r%en,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=u;if(r<en)return a;for(l=c;l<r;l+=en)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=en,v+=en;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=u;return a}yy.exports=R4r});var zo=s((ese,wy)=>{"use strict";var F4r=w(),by=hy(),M4r=qy();F4r(by,"ndarray",M4r);wy.exports=by});var Ay=s((tse,Ny)=>{"use strict";var Ey=nr(),B4r=zo().ndarray,k4r=zo().ndarray;function j4r(r){return Ey(r,"daxpy",B4r),Ey(r,"saxpy",k4r),r}Ny.exports=j4r});var Sy=s((ise,Oy)=>{"use strict";var C4r=It(),G4r=tr();function V4r(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(G4r(r)==="[object Error]")return!0;r=C4r(r)}return!1}Oy.exports=V4r});var Iy=s((nse,Ty)=>{"use strict";var U4r=Sy();Ty.exports=U4r});var Do=s((ase,_y)=>{"use strict";function H4r(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}_y.exports=H4r});var Py=s((sse,Ly)=>{"use strict";var W4r=Do(),z4r=W4r();Ly.exports=z4r});var My=s((use,Fy)=>{"use strict";var D4r=w(),Ry=Do(),X4r=Py();D4r(Ry,"REGEXP",X4r);Fy.exports=Ry});var ky=s((ose,By)=>{"use strict";var J4r=rr().isPrimitive,x4r=My(),Y4r=q();function Z4r(r){if(!J4r(r))throw new TypeError(Y4r("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=x4r().exec(r),r?new RegExp(r[1],r[2]):null}By.exports=Z4r});var Cy=s((vse,jy)=>{"use strict";var $4r=ky();jy.exports=$4r});var Xo=s((fse,Gy)=>{"use strict";var Q4r=j().isPrimitive,K4r=E();function r6r(r){return Q4r(r)&&K4r(r)}Gy.exports=r6r});var Jo=s((cse,Vy)=>{"use strict";var e6r=j().isObject,t6r=E();function i6r(r){return e6r(r)&&t6r(r.valueOf())}Vy.exports=i6r});var Hy=s((lse,Uy)=>{"use strict";var n6r=Xo(),a6r=Jo();function s6r(r){return n6r(r)||a6r(r)}Uy.exports=s6r});var sr=s((pse,zy)=>{"use strict";var Wy=w(),xo=Hy(),u6r=Xo(),o6r=Jo();Wy(xo,"isPrimitive",u6r);Wy(xo,"isObject",o6r);zy.exports=xo});var xy=s((gse,Jy)=>{"use strict";var Dy=sr(),v6r=jr(),f6r=rr().isPrimitive,c6r=Cr().isPrimitive,Xy=q();function l6r(r,e,t){var i,n;if(!v6r(r)&&!f6r(r))throw new TypeError(Xy("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!c6r(t))throw new TypeError(Xy("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(Dy(e)){for(;n<i;n++)if(Dy(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}Jy.exports=l6r});var da=s((mse,Yy)=>{"use strict";var p6r=xy();Yy.exports=p6r});var ha=s((dse,Zy)=>{"use strict";function g6r(r){return Object.keys(Object(r))}Zy.exports=g6r});var Qy=s((hse,$y)=>{"use strict";var m6r=ha();function d6r(){return(m6r(arguments)||"").length!==2}function h6r(){return d6r(1,2)}$y.exports=h6r});var rq=s((yse,Ky)=>{"use strict";var y6r=typeof Object.keys<"u";Ky.exports=y6r});var Yo=s((qse,eq)=>{"use strict";var q6r=tr();function b6r(r){return q6r(r)==="[object Arguments]"}eq.exports=b6r});var nq=s((bse,iq)=>{"use strict";var w6r=Yo(),tq;function E6r(){return w6r(arguments)}tq=E6r();iq.exports=tq});var Zo=s((wse,aq)=>{"use strict";var N6r=Object.prototype.propertyIsEnumerable;aq.exports=N6r});var oq=s((Ese,uq)=>{"use strict";var A6r=Zo(),sq;function O6r(){return!A6r.call("beep","0")}sq=O6r();uq.exports=sq});var fq=s((Nse,vq)=>{"use strict";var S6r=rr(),T6r=sr().isPrimitive,I6r=Cr().isPrimitive,_6r=Zo(),L6r=oq();function P6r(r,e){var t;return r==null?!1:(t=_6r.call(r,e),!t&&L6r&&S6r(r)?(e=+e,!T6r(e)&&I6r(e)&&e>=0&&e<r.length):t)}vq.exports=P6r});var tn=s((Ase,cq)=>{"use strict";var R6r=fq();cq.exports=R6r});var pq=s((Ose,lq)=>{"use strict";var F6r=O(),M6r=tn(),B6r=cr(),k6r=Tr(),j6r=Dt();function C6r(r){return r!==null&&typeof r=="object"&&!B6r(r)&&typeof r.length=="number"&&k6r(r.length)&&r.length>=0&&r.length<=j6r&&F6r(r,"callee")&&!M6r(r,"callee")}lq.exports=C6r});var Qo=s((Sse,gq)=>{"use strict";var G6r=nq(),V6r=Yo(),U6r=pq(),$o;G6r?$o=V6r:$o=U6r;gq.exports=$o});var hq=s((Tse,dq)=>{"use strict";var H6r=Qo(),mq=ha(),W6r=Array.prototype.slice;function z6r(r){return H6r(r)?mq(W6r.call(r)):mq(r)}dq.exports=z6r});var qq=s((Ise,yq)=>{"use strict";function D6r(){}yq.exports=D6r});var C=s((_se,bq)=>{"use strict";var X6r=qq();bq.exports=X6r});var Eq=s((Lse,wq)=>{"use strict";var J6r=tn(),x6r=C(),Y6r=J6r(x6r,"prototype");wq.exports=Y6r});var Aq=s((Pse,Nq)=>{"use strict";var Z6r=tn(),$6r={toString:null},Q6r=!Z6r($6r,"toString");Nq.exports=Q6r});var Ko=s((Rse,Oq)=>{"use strict";function K6r(r){return r.constructor&&r.constructor.prototype===r}Oq.exports=K6r});var Sq=s((Fse,r8r)=>{r8r.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Iq=s((Mse,Tq)=>{"use strict";var e8r=typeof window>"u"?void 0:window;Tq.exports=e8r});var Rq=s((Bse,Pq)=>{"use strict";var t8r=O(),i8r=da(),_q=Yn(),n8r=Ko(),a8r=Sq(),ui=Iq(),Lq;function s8r(){var r;if(_q(ui)==="undefined")return!1;for(r in ui)try{i8r(a8r,r)===-1&&t8r(ui,r)&&ui[r]!==null&&_q(ui[r])==="object"&&n8r(ui[r])}catch{return!0}return!1}Lq=s8r();Pq.exports=Lq});var Mq=s((kse,Fq)=>{"use strict";var u8r=typeof window<"u";Fq.exports=u8r});var jq=s((jse,kq)=>{"use strict";var o8r=Rq(),Bq=Ko(),v8r=Mq();function f8r(r){if(v8r===!1&&!o8r)return Bq(r);try{return Bq(r)}catch{return!1}}kq.exports=f8r});var Cq=s((Cse,c8r)=>{c8r.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Uq=s((Gse,Vq)=>{"use strict";var l8r=Mu(),r2=O(),p8r=Qo(),g8r=Eq(),m8r=Aq(),d8r=jq(),Gq=Cq();function h8r(r){var e,t,i,n,a,u,o;if(n=[],p8r(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!r2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!l8r(r))return n;t=g8r&&i}for(a in r)!(t&&a==="prototype")&&r2(r,a)&&n.push(String(a));if(m8r)for(e=d8r(r),o=0;o<Gq.length;o++)u=Gq[o],!(e&&u==="constructor")&&r2(r,u)&&n.push(String(u));return n}Vq.exports=h8r});var Wq=s((Vse,Hq)=>{"use strict";var y8r=Qy(),q8r=rq(),b8r=ha(),w8r=hq(),E8r=Uq(),ya;q8r?y8r()?ya=w8r:ya=b8r:ya=E8r;Hq.exports=ya});var nn=s((Use,zq)=>{"use strict";var N8r=Wq();zq.exports=N8r});var Xq=s((Hse,Dq)=>{"use strict";var A8r=typeof Object.getOwnPropertyNames<"u";Dq.exports=A8r});var Yq=s((Wse,xq)=>{"use strict";var Jq=ai(),O8r=Jq.getOwnPropertyNames;function S8r(r){return O8r(Jq(r))}xq.exports=S8r});var $q=s((zse,Zq)=>{"use strict";var T8r=ai(),I8r=nn();function _8r(r){return I8r(T8r(r))}Zq.exports=_8r});var Kq=s((Dse,Qq)=>{"use strict";var L8r=Xq(),P8r=Yq(),R8r=$q(),e2;L8r?e2=P8r:e2=R8r;Qq.exports=e2});var eb=s((Xse,rb)=>{"use strict";var F8r=typeof Object.getOwnPropertyDescriptor<"u";rb.exports=F8r});var ib=s((Jse,tb)=>{"use strict";var M8r=Object.getOwnPropertyDescriptor;function B8r(r,e){var t;return r==null?null:(t=M8r(r,e),t===void 0?null:t)}tb.exports=B8r});var ab=s((xse,nb)=>{"use strict";var k8r=O();function j8r(r,e){return k8r(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}nb.exports=j8r});var ub=s((Yse,sb)=>{"use strict";var C8r=eb(),G8r=ib(),V8r=ab(),t2;C8r?t2=G8r:t2=V8r;sb.exports=t2});var vb=s((Zse,ob)=>{"use strict";var U8r=typeof Buffer=="function"?Buffer:null;ob.exports=U8r});var cb=s(($se,fb)=>{"use strict";var H8r=wt(),qa=vb();function W8r(){var r,e;if(typeof qa!="function")return!1;try{typeof qa.from=="function"?e=qa.from([1,2,3,4]):e=new qa([1,2,3,4]),r=H8r(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}fb.exports=W8r});var pb=s((Qse,lb)=>{"use strict";var z8r=cb();lb.exports=z8r});var db=s(ba=>{"use strict";ba.byteLength=X8r;ba.toByteArray=x8r;ba.fromByteArray=$8r;var Dr=[],Fr=[],D8r=typeof Uint8Array<"u"?Uint8Array:Array,i2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_t=0,gb=i2.length;_t<gb;++_t)Dr[_t]=i2[_t],Fr[i2.charCodeAt(_t)]=_t;var _t,gb;Fr["-".charCodeAt(0)]=62;Fr["_".charCodeAt(0)]=63;function mb(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function X8r(r){var e=mb(r),t=e[0],i=e[1];return(t+i)*3/4-i}function J8r(r,e,t){return(e+t)*3/4-t}function x8r(r){var e,t=mb(r),i=t[0],n=t[1],a=new D8r(J8r(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=Fr[r.charCodeAt(f)]<<18|Fr[r.charCodeAt(f+1)]<<12|Fr[r.charCodeAt(f+2)]<<6|Fr[r.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Fr[r.charCodeAt(f)]<<2|Fr[r.charCodeAt(f+1)]>>4,a[u++]=e&255),n===1&&(e=Fr[r.charCodeAt(f)]<<10|Fr[r.charCodeAt(f+1)]<<4|Fr[r.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function Y8r(r){return Dr[r>>18&63]+Dr[r>>12&63]+Dr[r>>6&63]+Dr[r&63]}function Z8r(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(Y8r(i));return n.join("")}function $8r(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(Z8r(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(Dr[e>>2]+Dr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Dr[e>>10]+Dr[e>>4&63]+Dr[e<<2&63]+"=")),n.join("")}});var hb=s(n2=>{n2.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-v}return(m?-1:1)*u*Math.pow(2,a-i)};n2.write=function(r,e,t,i,n,a){var u,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+m]=o&255,m+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+m]=u&255,m+=h,u/=256,v-=8);r[t+m-h]|=d*128}});var Mb=s(ci=>{"use strict";var a2=db(),vi=hb(),yb=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ci.Buffer=b;ci.SlowBuffer=i5r;ci.INSPECT_MAX_BYTES=50;var wa=2147483647;ci.kMaxLength=wa;b.TYPED_ARRAY_SUPPORT=Q8r();!b.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Q8r(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.byteOffset}});function ee(r){if(r>wa)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,b.prototype),e}function b(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return v2(r)}return Eb(r,e,t)}b.poolSize=8192;function Eb(r,e,t){if(typeof r=="string")return r5r(r,e);if(ArrayBuffer.isView(r))return e5r(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Xr(r,ArrayBuffer)||r&&Xr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Xr(r,SharedArrayBuffer)||r&&Xr(r.buffer,SharedArrayBuffer)))return u2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return b.from(i,e,t);let n=t5r(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return b.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}b.from=function(r,e,t){return Eb(r,e,t)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function Nb(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function K8r(r,e,t){return Nb(r),r<=0?ee(r):e!==void 0?typeof t=="string"?ee(r).fill(e,t):ee(r).fill(e):ee(r)}b.alloc=function(r,e,t){return K8r(r,e,t)};function v2(r){return Nb(r),ee(r<0?0:f2(r)|0)}b.allocUnsafe=function(r){return v2(r)};b.allocUnsafeSlow=function(r){return v2(r)};function r5r(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Ab(r,e)|0,i=ee(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function s2(r){let e=r.length<0?0:f2(r.length)|0,t=ee(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function e5r(r){if(Xr(r,Uint8Array)){let e=new Uint8Array(r);return u2(e.buffer,e.byteOffset,e.byteLength)}return s2(r)}function u2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,b.prototype),i}function t5r(r){if(b.isBuffer(r)){let e=f2(r.length)|0,t=ee(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||l2(r.length)?ee(0):s2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return s2(r.data)}function f2(r){if(r>=wa)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+wa.toString(16)+" bytes");return r|0}function i5r(r){return+r!=r&&(r=0),b.alloc(+r)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,t){if(Xr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),Xr(t,Uint8Array)&&(t=b.from(t,t.offset,t.byteLength)),!b.isBuffer(e)||!b.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=b.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(Xr(u,Uint8Array))a+u.length>n.length?(b.isBuffer(u)||(u=b.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(b.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function Ab(r,e){if(b.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Xr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return o2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Fb(r).length;default:if(n)return i?-1:o2(r).length;e=(""+e).toLowerCase(),n=!0}}b.byteLength=Ab;function n5r(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return g5r(this,e,t);case"utf8":case"utf-8":return Sb(this,e,t);case"ascii":return l5r(this,e,t);case"latin1":case"binary":return p5r(this,e,t);case"base64":return f5r(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return m5r(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}b.prototype._isBuffer=!0;function Lt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Lt(this,t,t+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Lt(this,t,t+3),Lt(this,t+1,t+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Lt(this,t,t+7),Lt(this,t+1,t+6),Lt(this,t+2,t+5),Lt(this,t+3,t+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?Sb(this,0,e):n5r.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",t=ci.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};yb&&(b.prototype[yb]=b.prototype.inspect);b.prototype.compare=function(e,t,i,n,a){if(Xr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,f=Math.min(u,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function Ob(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,l2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=b.from(e,i)),b.isBuffer(e))return e.length===0?-1:qb(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):qb(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function qb(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}b.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};b.prototype.indexOf=function(e,t,i){return Ob(this,e,t,i,!0)};b.prototype.lastIndexOf=function(e,t,i){return Ob(this,e,t,i,!1)};function a5r(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(l2(o))return u;r[t+u]=o}return u}function s5r(r,e,t,i){return Ea(o2(e,r.length-t),r,t,i)}function u5r(r,e,t,i){return Ea(q5r(e),r,t,i)}function o5r(r,e,t,i){return Ea(Fb(e),r,t,i)}function v5r(r,e,t,i){return Ea(b5r(e,r.length-t),r,t,i)}b.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return a5r(this,e,t,i);case"utf8":case"utf-8":return s5r(this,e,t,i);case"ascii":case"latin1":case"binary":return u5r(this,e,t,i);case"base64":return o5r(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return v5r(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function f5r(r,e,t){return e===0&&t===r.length?a2.fromByteArray(r):a2.fromByteArray(r.slice(e,t))}function Sb(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return c5r(i)}var bb=4096;function c5r(r){let e=r.length;if(e<=bb)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=bb));return t}function l5r(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function p5r(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function g5r(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=w5r[r[a]];return n}function m5r(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}b.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,b.prototype),n};function ur(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};b.prototype.readUint8=b.prototype.readUInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&an(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&an(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};b.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};b.prototype.readInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};b.prototype.readInt16BE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};b.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&an(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&an(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});b.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),vi.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),vi.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),vi.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),vi.read(this,e,!1,52,8)};function hr(r,e,t,i,n,a){if(!b.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;hr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;hr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,1,255,0),this[t]=e&255,t+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Tb(r,e,t,i,n){Rb(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function Ib(r,e,t,i,n){Rb(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}b.prototype.writeBigUInt64LE=ze(function(e,t=0){return Tb(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=ze(function(e,t=0){return Ib(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);hr(this,e,t,i,f-1,-f)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);hr(this,e,t,i,f-1,-f)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};b.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};b.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};b.prototype.writeBigInt64LE=ze(function(e,t=0){return Tb(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=ze(function(e,t=0){return Ib(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function _b(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Lb(r,e,t,i,n){return e=+e,t=t>>>0,n||_b(r,e,t,4,34028234663852886e22,-34028234663852886e22),vi.write(r,e,t,i,23,4),t+4}b.prototype.writeFloatLE=function(e,t,i){return Lb(this,e,t,!0,i)};b.prototype.writeFloatBE=function(e,t,i){return Lb(this,e,t,!1,i)};function Pb(r,e,t,i,n){return e=+e,t=t>>>0,n||_b(r,e,t,8,17976931348623157e292,-17976931348623157e292),vi.write(r,e,t,i,52,8),t+8}b.prototype.writeDoubleLE=function(e,t,i){return Pb(this,e,t,!0,i)};b.prototype.writeDoubleBE=function(e,t,i){return Pb(this,e,t,!1,i)};b.prototype.copy=function(e,t,i,n){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};b.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!b.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=b.isBuffer(e)?e:b.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var oi={};function c2(r,e,t){oi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}c2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);c2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);c2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=wb(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=wb(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function wb(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function d5r(r,e,t){fi(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&an(e,r.length-(t+1))}function Rb(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new oi.ERR_OUT_OF_RANGE("value",o,r)}d5r(i,n,a)}function fi(r,e){if(typeof r!="number")throw new oi.ERR_INVALID_ARG_TYPE(e,"number",r)}function an(r,e,t){throw Math.floor(r)!==r?(fi(r,t),new oi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new oi.ERR_BUFFER_OUT_OF_BOUNDS:new oi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var h5r=/[^+/0-9A-Za-z-_]/g;function y5r(r){if(r=r.split("=")[0],r=r.trim().replace(h5r,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function o2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function q5r(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function b5r(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function Fb(r){return a2.toByteArray(y5r(r))}function Ea(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Xr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function l2(r){return r!==r}var w5r=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function ze(r){return typeof BigInt>"u"?E5r:r}function E5r(){throw new Error("BigInt not supported")}});var kb=s((iue,Bb)=>{"use strict";var N5r=Mb().Buffer;Bb.exports=N5r});var Cb=s((nue,jb)=>{"use strict";function A5r(){throw new Error("not implemented")}jb.exports=A5r});var Na=s((aue,Gb)=>{"use strict";var O5r=pb(),S5r=kb(),T5r=Cb(),p2;O5r()?p2=S5r:p2=T5r;Gb.exports=p2});var Ub=s((sue,Vb)=>{"use strict";var I5r=L(),_5r=Na(),L5r=I5r(_5r.from);Vb.exports=L5r});var Wb=s((uue,Hb)=>{"use strict";var P5r=wt(),R5r=q(),F5r=Na();function M5r(r){if(!P5r(r))throw new TypeError(R5r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return F5r.from(r)}Hb.exports=M5r});var Db=s((oue,zb)=>{"use strict";var B5r=wt(),k5r=q(),j5r=Na();function C5r(r){if(!B5r(r))throw new TypeError(k5r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new j5r(r)}zb.exports=C5r});var Jb=s((vue,Xb)=>{"use strict";var G5r=Ub(),V5r=Wb(),U5r=Db(),g2;G5r?g2=V5r:g2=U5r;Xb.exports=g2});var Zb=s((fue,Yb)=>{"use strict";var H5r=Xi(),W5r=xt(),z5r=Di(),D5r=zi(),X5r=Jt(),J5r=Et(),x5r=lr(),Y5r=Qr(),Z5r=gr(),xb;function $5r(r){return new H5r(r)}function Q5r(r){return new W5r(r)}function K5r(r){return new z5r(r)}function rpr(r){return new D5r(r)}function epr(r){return new X5r(r)}function tpr(r){return new J5r(r)}function ipr(r){return new x5r(r)}function npr(r){return new Y5r(r)}function apr(r){return new Z5r(r)}function spr(){var r={int8array:$5r,uint8array:Q5r,uint8clampedarray:K5r,int16array:rpr,uint16array:epr,int32array:tpr,uint32array:ipr,float32array:npr,float64array:apr};return r}xb=spr();Yb.exports=xb});var ew=s((cue,rw)=>{"use strict";var Aa=O(),m2=cr(),$b=wt(),upr=Iy(),Qb=Yn(),opr=Cy(),vpr=da(),Kb=nn(),fpr=Kq(),sn=ub(),cpr=It(),un=je(),lpr=Jb(),ppr=Zb();function gpr(r){var e,t,i,n,a,u,o,f;for(e=[],n=[],o=Object.create(cpr(r)),e.push(r),n.push(o),t=fpr(r),f=0;f<t.length;f++)i=t[f],a=sn(r,i),Aa(a,"value")&&(u=m2(r[i])?[]:{},a.value=Pt(r[i],u,e,n,-1)),un(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function mpr(r){var e=[],t=[],i,n,a,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=Kb(r),f=0;f<i.length;f++)u=i[f],n=sn(r,u),Aa(n,"value")&&(a=m2(r[u])?[]:{},n.value=Pt(r[u],a,e,t,-1)),un(o,u,n);return o}function Pt(r,e,t,i,n){var a,u,o,f,v,c,l,p,m,h;if(n-=1,typeof r!="object"||r===null)return r;if($b(r))return lpr(r);if(upr(r))return mpr(r);if(o=Qb(r),o==="date")return new Date(+r);if(o==="regexp")return opr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=ppr[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?gpr(r):{};if(u=Kb(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=Qb(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||$b(p)){a==="object"?(f=sn(r,c),Aa(f,"value")&&(f.value=Pt(p)),un(e,c,f)):e[c]=Pt(p);continue}if(m=vpr(t,p),m!==-1){e[c]=i[m];continue}l=m2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Pt(p,l,t,i,n):(f=sn(r,c),Aa(f,"value")&&(f.value=Pt(p,l,t,i,n)),un(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=sn(r,c),un(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}rw.exports=Pt});var iw=s((lue,tw)=>{"use strict";var dpr=cr(),hpr=Ge().isPrimitive,ypr=q(),qpr=_(),bpr=ew();function wpr(r,e){var t;if(arguments.length>1){if(!hpr(e))throw new TypeError(ypr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=qpr;return t=dpr(r)?new Array(r.length):{},bpr(r,t,[r],[t],e)}tw.exports=wpr});var on=s((pue,nw)=>{"use strict";var Epr=iw();nw.exports=Epr});var aw=s((gue,Npr)=>{Npr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var uw=s((mue,sw)=>{"use strict";var Apr=on(),Opr=aw();function Spr(){return Apr(Opr)}sw.exports=Spr});var ow=s((due,Tpr)=>{Tpr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var fw=s((hue,vw)=>{"use strict";var Ipr=on(),_pr=ow();function Lpr(){return Ipr(_pr)}vw.exports=Lpr});var cw=s((yue,Ppr)=>{Ppr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var pw=s((que,lw)=>{"use strict";var Rpr=on(),Fpr=cw();function Mpr(){return Rpr(Fpr)}lw.exports=Mpr});var gw=s((bue,Bpr)=>{Bpr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var dw=s((wue,mw)=>{"use strict";var kpr=gw();function jpr(){return kpr.slice()}mw.exports=jpr});var hw=s((Eue,Cpr)=>{Cpr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var qw=s((Nue,yw)=>{"use strict";var Gpr=on(),Vpr=hw();function Upr(){return Gpr(Vpr)}yw.exports=Upr});var ww=s((Aue,bw)=>{"use strict";var vn=nr(),Hpr=uw(),Wpr=fw(),zpr=pw(),Dpr=dw(),Xpr=qw();function Jpr(r){return vn(r,"AFINN_111",Hpr),vn(r,"AFINN_96",Wpr),vn(r,"ANSCOMBES_QUARTET",zpr),vn(r,"HERNDON_VENUS_SEMIDIAMETERS",Dpr),vn(r,"NIGHTINGALES_ROSE",Xpr),r}bw.exports=Jpr});var Nw=s((Oue,Ew)=>{"use strict";function xpr(r,e){return r+e}Ew.exports=xpr});var Ow=s((Sue,Aw)=>{"use strict";var Ypr=Nw();Aw.exports=Ypr});var Tw=s((Tue,Sw)=>{"use strict";function Zpr(r,e){return r*e}Sw.exports=Zpr});var _w=s((Iue,Iw)=>{"use strict";var $pr=Tw();Iw.exports=$pr});var Pw=s((_ue,Lw)=>{"use strict";function Qpr(r,e){return r-e}Lw.exports=Qpr});var Fw=s((Lue,Rw)=>{"use strict";var Kpr=Pw();Rw.exports=Kpr});var Bw=s((Pue,Mw)=>{"use strict";var d2=nr(),r7r=Ow(),e7r=_w(),t7r=Fw();function i7r(r){return d2(r,"add",r7r),d2(r,"mul",e7r),d2(r,"sub",t7r),r}Mw.exports=i7r});var Gw=s((Rue,Cw)=>{"use strict";var kw=j().isPrimitive,n7r=_(),a7r=V(),jw=q();function s7r(r,e){return t;function t(i,n){var a;if(!kw(i)){if(e.nonnumeric===void 0)throw new TypeError(jw("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!kw(n)){if(e.nonnumeric===void 0)throw new TypeError(jw("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===n7r?e.pinf:a===a7r?e.ninf:a}}Cw.exports=s7r});var h2=s((Fue,Vw)=>{"use strict";var u7r=Gw();Vw.exports=u7r});var Hw=s((Mue,Uw)=>{"use strict";var o7r=wu(),v7r=bu(),f7r=To(),c7r=q(),l7r=Oo(),p7r=h2(),g7r=["number","number"],m7r=["First argument","Second argument"];function d7r(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(c7r("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=l7r([r[0],r[1]],g7r,m7r),t=o7r(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=f7r(t),a=p7r(e,i),r[0].push(n),r[1].push(t),v7r(r[0],r[1],a),n}Uw.exports=d7r});var zw=s((Bue,Ww)=>{"use strict";var h7r=Hw();Ww.exports=h7r});var Xw=s((kue,Dw)=>{"use strict";var y7r=j().isPrimitive,q7r=_(),b7r=V(),w7r=q();function E7r(r,e){return t;function t(i){var n;if(!y7r(i)){if(e.nonnumeric===void 0)throw new TypeError(w7r("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===q7r?e.pinf:n===b7r?e.ninf:n}}Dw.exports=E7r});var y2=s((jue,Jw)=>{"use strict";var N7r=Xw();Jw.exports=N7r});var Yw=s((Cue,xw)=>{"use strict";var q2=j().isPrimitive,A7r=_(),O7r=V(),b2=q();function S7r(r,e){return t;function t(i,n,a){var u;if(!q2(i)){if(e.nonnumeric===void 0)throw new TypeError(b2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!q2(n)){if(e.nonnumeric===void 0)throw new TypeError(b2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!q2(a)){if(e.nonnumeric===void 0)throw new TypeError(b2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===A7r?e.pinf:u===O7r?e.ninf:u}}xw.exports=S7r});var $w=s((Gue,Zw)=>{"use strict";var T7r=Yw();Zw.exports=T7r});var Kw=s((Vue,Qw)=>{"use strict";var Oa=j().isPrimitive,I7r=_(),_7r=V(),Sa=q();function L7r(r,e){return t;function t(i,n,a,u){var o;if(!Oa(i)){if(e.nonnumeric===void 0)throw new TypeError(Sa("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Oa(n)){if(e.nonnumeric===void 0)throw new TypeError(Sa("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Oa(a)){if(e.nonnumeric===void 0)throw new TypeError(Sa("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Oa(u)){if(e.nonnumeric===void 0)throw new TypeError(Sa("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===I7r?e.pinf:o===_7r?e.ninf:o}}Qw.exports=L7r});var eE=s((Uue,rE)=>{"use strict";var P7r=Kw();rE.exports=P7r});var iE=s((Hue,tE)=>{"use strict";var fn=j().isPrimitive,R7r=_(),F7r=V(),cn=q();function M7r(r,e){return t;function t(i,n,a,u,o){var f;if(!fn(i)){if(e.nonnumeric===void 0)throw new TypeError(cn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!fn(n)){if(e.nonnumeric===void 0)throw new TypeError(cn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!fn(a)){if(e.nonnumeric===void 0)throw new TypeError(cn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!fn(u)){if(e.nonnumeric===void 0)throw new TypeError(cn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!fn(o)){if(e.nonnumeric===void 0)throw new TypeError(cn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,a,u,o),f!==f?e.nan:f===R7r?e.pinf:f===F7r?e.ninf:f}}tE.exports=M7r});var aE=s((Wue,nE)=>{"use strict";var B7r=iE();nE.exports=B7r});var uE=s((zue,sE)=>{"use strict";var k7r=cr(),j7r=So(),C7r=q(),G7r=y2();function V7r(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(C7r("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=G7r(e,i),k7r(t)?(j7r([t,t],[t.length,t[0].length],n),t):n(t)}sE.exports=V7r});var vE=s((Due,oE)=>{"use strict";var U7r=uE();oE.exports=U7r});var cE=s((Xue,fE)=>{"use strict";var Rt=nr(),H7r=zw(),W7r=y2(),z7r=h2(),D7r=$w(),X7r=eE(),J7r=aE(),x7r=vE();function Y7r(r){return Rt(r,"binary",H7r),Rt(r,"d_d",W7r),Rt(r,"dd_d",z7r),Rt(r,"ddd_d",D7r),Rt(r,"dddd_d",X7r),Rt(r,"ddddd_d",J7r),Rt(r,"unary",x7r),r}fE.exports=Y7r});var pE=s((Jue,lE)=>{"use strict";function Z7r(r){return Math.abs(r)}lE.exports=Z7r});var Y=s((xue,gE)=>{"use strict";var $7r=pE();gE.exports=$7r});var dE=s((Yue,mE)=>{"use strict";function Q7r(r){return r*r}mE.exports=Q7r});var Ta=s((Zue,hE)=>{"use strict";var K7r=dE();hE.exports=K7r});var qE=s(($ue,yE)=>{"use strict";var r9r=Math.sqrt;yE.exports=r9r});var G=s((Que,bE)=>{"use strict";var e9r=qE();bE.exports=e9r});var Ia=s((Kue,wE)=>{"use strict";var t9r=.7853981633974483;wE.exports=t9r});var NE=s((roe,EE)=>{"use strict";function i9r(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}EE.exports=i9r});var OE=s((eoe,AE)=>{"use strict";function n9r(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}AE.exports=n9r});var IE=s((toe,TE)=>{"use strict";var a9r=E(),s9r=G(),SE=Ia(),u9r=NE(),o9r=OE(),v9r=6123233995736766e-32;function f9r(r){var e,t,i,n,a;if(a9r(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*o9r(t),t=s9r(t+t),a=SE-t,t=t*n-v9r,a-=t,a+=SE;else{if(i<1e-8)return r;t=i*i,a=t*u9r(t),a=i*a+i}return e?-a:a}TE.exports=f9r});var Ft=s((ioe,_E)=>{"use strict";var c9r=IE();_E.exports=c9r});var FE=s((noe,RE)=>{"use strict";var l9r=E(),LE=Ft(),p9r=G(),PE=Ia(),g9r=6123233995736766e-32;function m9r(r){var e;return l9r(r)?NaN:r<-1||r>1?NaN:r>.5?2*LE(p9r(.5-.5*r)):(e=PE-LE(r),e+=g9r,e+=PE,e)}RE.exports=m9r});var ln=s((aoe,ME)=>{"use strict";var d9r=FE();ME.exports=d9r});var kE=s((soe,BE)=>{"use strict";var h9r=xt(),y9r=Jt(),q9r={uint16:y9r,uint8:h9r};BE.exports=q9r});var VE=s((uoe,GE)=>{"use strict";var jE=kE(),CE;function b9r(){var r,e;return r=new jE.uint16(1),r[0]=4660,e=new jE.uint8(r.buffer),e[0]===52}CE=b9r();GE.exports=CE});var Mt=s((ooe,UE)=>{"use strict";var w9r=VE();UE.exports=w9r});var WE=s((voe,HE)=>{"use strict";var E9r=Mt(),w2;E9r===!0?w2=1:w2=0;HE.exports=w2});var XE=s((foe,DE)=>{"use strict";var N9r=lr(),A9r=gr(),O9r=WE(),zE=new A9r(1),S9r=new N9r(zE.buffer);function T9r(r){return zE[0]=r,S9r[O9r]}DE.exports=T9r});var er=s((coe,JE)=>{"use strict";var I9r=XE();JE.exports=I9r});var YE=s((loe,xE)=>{"use strict";var _9r=Mt(),E2;_9r===!0?E2=1:E2=0;xE.exports=E2});var $E=s((poe,ZE)=>{"use strict";var L9r=lr(),P9r=gr(),R9r=YE(),N2=new P9r(1),F9r=new L9r(N2.buffer);function M9r(r,e){return N2[0]=r,F9r[R9r]=e>>>0,N2[0]}ZE.exports=M9r});var te=s((goe,QE)=>{"use strict";var B9r=$E();QE.exports=B9r});var Jr=s((moe,KE)=>{"use strict";var k9r=1023;KE.exports=k9r});var eN=s((doe,rN)=>{"use strict";function j9r(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}rN.exports=j9r});var sN=s((hoe,aN)=>{"use strict";var C9r=E(),tN=er(),iN=te(),G9r=_(),V9r=V(),nN=Jr(),U9r=eN(),A2=.6931471803691238,O2=19082149292705877e-26,H9r=.41421356237309503,W9r=-.2928932188134525,z9r=1862645149230957e-24,D9r=5551115123125783e-32,X9r=9007199254740992,J9r=.6666666666666666;function x9r(r){var e,t,i,n,a,u,o,f,v,c;if(r<-1||C9r(r))return NaN;if(r===-1)return V9r;if(r===G9r||r===0)return r;if(r<0?i=-r:i=r,c=1,i<H9r){if(i<z9r)return i<D9r?r:r-r*r*.5;r>W9r&&(c=0,n=r,t=1)}return c!==0&&(i<X9r?(v=1+r,t=tN(v),c=(t>>20)-nN,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=tN(v),c=(t>>20)-nN,a=0),t&=1048575,t<434334?v=iN(v,t|1072693248):(c+=1,v=iN(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*O2,c*A2+a):(f=e*(1-J9r*n),c*A2-(f-(c*O2+a)-n)):(u=n/(2+n),o=u*u,f=o*U9r(o),c===0?n-(e-u*(e+f)):c*A2-(e-(u*(e+f)+(c*O2+a))-n))}aN.exports=x9r});var De=s((yoe,uN)=>{"use strict";var Y9r=sN();uN.exports=Y9r});var _a=s((qoe,oN)=>{"use strict";var Z9r=.6931471805599453;oN.exports=Z9r});var fN=s((boe,vN)=>{"use strict";function $9r(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}vN.exports=$9r});var lN=s((woe,cN)=>{"use strict";function Q9r(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}cN.exports=Q9r});var dN=s((Eoe,mN)=>{"use strict";var pN=er(),K9r=te(),rgr=E(),egr=Jr(),tgr=V(),igr=fN(),ngr=lN(),La=.6931471803691238,Pa=19082149292705877e-26,agr=0x40000000000000,sgr=.3333333333333333,gN=1048575,ugr=2146435072,ogr=1048576,vgr=1072693248;function fgr(r){var e,t,i,n,a,u,o,f,v,c,l,p;return r===0?tgr:rgr(r)||r<0?NaN:(t=pN(r),a=0,t<ogr&&(a-=54,r*=agr,t=pN(r)),t>=ugr?r+r:(a+=(t>>20)-egr|0,t&=gN,f=t+614244&1048576|0,r=K9r(r,t|f^vgr),a+=f>>20|0,o=r-1,(gN&2+t)<3?o===0?a===0?0:a*La+a*Pa:(u=o*o*(.5-sgr*o),a===0?o-u:a*La-(u-a*Pa-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*igr(l),i=p*ngr(l),f|=v,u=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*La-(e-(c*(e+u)+a*Pa)-o)):a===0?o-c*(o-u):a*La-(c*(o-u)-a*Pa-o))))}mN.exports=fgr});var R=s((Noe,hN)=>{"use strict";var cgr=dN();hN.exports=cgr});var wN=s((Aoe,bN)=>{"use strict";var lgr=E(),pgr=De(),yN=G(),ggr=_a(),qN=R(),mgr=1<<28;function dgr(r){var e;return lgr(r)||r<1?NaN:r===1?0:r>=mgr?qN(r)+ggr:r>2?qN(2*r-1/(r+yN(r*r-1))):(e=r-1,pgr(e+yN(2*e+e*e)))}bN.exports=dgr});var NN=s((Ooe,EN)=>{"use strict";var hgr=wN();EN.exports=hgr});var Ra=s((Soe,AN)=>{"use strict";var ygr=1.5707963267948966;AN.exports=ygr});var SN=s((Toe,ON)=>{"use strict";function qgr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}ON.exports=qgr});var IN=s((Ioe,TN)=>{"use strict";function bgr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}TN.exports=bgr});var PN=s((_oe,LN)=>{"use strict";var wgr=E(),Egr=_(),S2=Ra(),Ngr=Ia(),Agr=V(),Ogr=SN(),Sgr=IN(),_N=6123233995736766e-32,Tgr=2.414213562373095;function Igr(r){var e,t,i,n;return wgr(r)||r===0?r:r===Egr?S2:r===Agr?-S2:(r<0&&(t=!0,r=-r),e=0,r>Tgr?(i=S2,e=1,r=-(1/r)):r<=.66?i=0:(i=Ngr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*Ogr(n)/Sgr(n),n=r*n+r,e===2?n+=.5*_N:e===1&&(n+=_N),i+=n,t?-i:i)}LN.exports=Igr});var Fa=s((Loe,RN)=>{"use strict";var _gr=PN();RN.exports=_gr});var MN=s((Poe,FN)=>{"use strict";var Lgr=Fa();function Pgr(r){return Lgr(1/r)}FN.exports=Pgr});var kN=s((Roe,BN)=>{"use strict";var Rgr=MN();BN.exports=Rgr});var CN=s((Foe,jN)=>{"use strict";var Fgr=Ft();function Mgr(r){return Fgr(1+r)}jN.exports=Mgr});var VN=s((Moe,GN)=>{"use strict";var Bgr=CN();GN.exports=Bgr});var HN=s((Boe,UN)=>{"use strict";var kgr=Ft();function jgr(r){return kgr(1-r)}UN.exports=jgr});var zN=s((koe,WN)=>{"use strict";var Cgr=HN();WN.exports=Cgr});var XN=s((joe,DN)=>{"use strict";var Ggr=Ft();function Vgr(r){return Ggr(1/r)}DN.exports=Vgr});var xN=s((Coe,JN)=>{"use strict";var Ugr=XN();JN.exports=Ugr});var ZN=s((Goe,YN)=>{"use strict";var Hgr=_(),Wgr=V();function zgr(r){return r===Hgr||r===Wgr}YN.exports=zgr});var Mr=s((Voe,$N)=>{"use strict";var Dgr=ZN();$N.exports=Dgr});var eA=s((Uoe,rA)=>{"use strict";var Xgr=Mr(),Jgr=E(),xgr=De(),QN=G(),Ygr=_a(),KN=R(),Zgr=1/(1<<28),$gr=1<<28;function Qgr(r){var e,t,i;return Jgr(r)||Xgr(r)?r:(r<0&&(r=-r,e=!0),r<Zgr?i=r:r>$gr?i=KN(r)+Ygr:r>2?i=KN(2*r+1/(QN(r*r+1)+r)):(t=r*r,i=xgr(r+t/(1+QN(1+t)))),e?-i:i)}rA.exports=Qgr});var T2=s((Hoe,tA)=>{"use strict";var Kgr=eA();tA.exports=Kgr});var nA=s((Woe,iA)=>{"use strict";var rmr=T2();function emr(r){return rmr(1/r)}iA.exports=emr});var sA=s((zoe,aA)=>{"use strict";var tmr=nA();aA.exports=tmr});var oA=s((Doe,uA)=>{"use strict";var imr=ln(),nmr=G();function amr(r){return 2*imr(nmr(r))}uA.exports=amr});var fA=s((Xoe,vA)=>{"use strict";var smr=oA();vA.exports=smr});var lA=s((Joe,cA)=>{"use strict";var umr=Ft(),omr=G();function vmr(r){return 2*umr(omr(r))}cA.exports=vmr});var gA=s((xoe,pA)=>{"use strict";var fmr=lA();pA.exports=fmr});var hA=s((Yoe,dA)=>{"use strict";var cmr=E(),mA=De(),lmr=_(),pmr=V(),gmr=1/(1<<28);function mmr(r){var e,t;return cmr(r)||r<-1||r>1?NaN:r===1?lmr:r===-1?pmr:(r<0&&(e=!0,r=-r),r<gmr?e?-r:r:(r<.5?(t=r+r,t=.5*mA(t+t*r/(1-r))):t=.5*mA((r+r)/(1-r)),e?-t:t))}dA.exports=mmr});var qA=s((Zoe,yA)=>{"use strict";var dmr=hA();yA.exports=dmr});var wA=s(($oe,bA)=>{"use strict";var hmr=ln();function ymr(r){return hmr(1+r)}bA.exports=ymr});var NA=s((Qoe,EA)=>{"use strict";var qmr=wA();EA.exports=qmr});var OA=s((Koe,AA)=>{"use strict";var bmr=ln();function wmr(r){return bmr(1-r)}AA.exports=wmr});var TA=s((r2e,SA)=>{"use strict";var Emr=OA();SA.exports=Emr});var xr=s((e2e,IA)=>{"use strict";var Nmr=2147483647;IA.exports=Nmr});var pn=s((t2e,_A)=>{"use strict";var Amr=2146435072;_A.exports=Amr});var Ma=s((i2e,LA)=>{"use strict";var Omr=1048575;LA.exports=Omr});var RA=s((n2e,PA)=>{"use strict";var Smr=Mt(),I2;Smr===!0?I2=0:I2=1;PA.exports=I2});var BA=s((a2e,MA)=>{"use strict";var Tmr=lr(),Imr=gr(),_mr=RA(),FA=new Imr(1),Lmr=new Tmr(FA.buffer);function Pmr(r){return FA[0]=r,Lmr[_mr]}MA.exports=Pmr});var jA=s((s2e,kA)=>{"use strict";var Rmr=BA();kA.exports=Rmr});var VA=s((u2e,GA)=>{"use strict";var Fmr=Mt(),CA,_2,L2;Fmr===!0?(_2=1,L2=0):(_2=0,L2=1);CA={HIGH:_2,LOW:L2};GA.exports=CA});var DA=s((o2e,zA)=>{"use strict";var Mmr=lr(),Bmr=gr(),HA=VA(),WA=new Bmr(1),UA=new Mmr(WA.buffer),kmr=HA.HIGH,jmr=HA.LOW;function Cmr(r,e){return UA[kmr]=r,UA[jmr]=e,WA[0]}zA.exports=Cmr});var li=s((v2e,XA)=>{"use strict";var Gmr=DA();XA.exports=Gmr});var P2=s((f2e,JA)=>{"use strict";var Vmr=1023;JA.exports=Vmr});var YA=s((c2e,xA)=>{"use strict";var Umr=-1023;xA.exports=Umr});var R2=s((l2e,ZA)=>{"use strict";var Hmr=-1074;ZA.exports=Hmr});var F2=s((p2e,$A)=>{"use strict";var Wmr=2147483648;$A.exports=Wmr});var rO=s((g2e,KA)=>{"use strict";var zmr=Mt(),QA,M2,B2;zmr===!0?(M2=1,B2=0):(M2=0,B2=1);QA={HIGH:M2,LOW:B2};KA.exports=QA});var k2=s((m2e,nO)=>{"use strict";var Dmr=lr(),Xmr=gr(),tO=rO(),iO=new Xmr(1),eO=new Dmr(iO.buffer),Jmr=tO.HIGH,xmr=tO.LOW;function Ymr(r,e,t,i){return iO[0]=r,e[i]=eO[Jmr],e[i+t]=eO[xmr],e}nO.exports=Ymr});var sO=s((d2e,aO)=>{"use strict";var Zmr=k2();function $mr(r){return Zmr(r,[0>>>0,0>>>0],1,0)}aO.exports=$mr});var pi=s((h2e,oO)=>{"use strict";var Qmr=w(),uO=sO(),Kmr=k2();Qmr(uO,"assign",Kmr);oO.exports=uO});var fO=s((y2e,vO)=>{"use strict";var rdr=F2(),edr=xr(),tdr=pi(),idr=er(),ndr=li(),j2=[0,0];function adr(r,e){var t,i;return tdr.assign(r,j2,1,0),t=j2[0],t&=edr,i=idr(e),i&=rdr,t|=i,ndr(t,j2[1])}vO.exports=adr});var Ba=s((q2e,cO)=>{"use strict";var sdr=fO();cO.exports=sdr});var C2=s((b2e,lO)=>{"use strict";var udr=22250738585072014e-324;lO.exports=udr});var G2=s((w2e,pO)=>{"use strict";var odr=C2(),vdr=Mr(),fdr=E(),cdr=Y(),ldr=4503599627370496;function pdr(r,e,t,i){return fdr(r)||vdr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&cdr(r)<odr?(e[i]=r*ldr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}pO.exports=pdr});var mO=s((E2e,gO)=>{"use strict";var gdr=G2();function mdr(r){return gdr(r,[0,0],1,0)}gO.exports=mdr});var yO=s((N2e,hO)=>{"use strict";var ddr=w(),dO=mO(),hdr=G2();ddr(dO,"assign",hdr);hO.exports=dO});var bO=s((A2e,qO)=>{"use strict";var ydr=er(),qdr=pn(),bdr=Jr();function wdr(r){var e=ydr(r);return e=(e&qdr)>>>20,e-bdr|0}qO.exports=wdr});var EO=s((O2e,wO)=>{"use strict";var Edr=bO();wO.exports=Edr});var AO=s((S2e,NO)=>{"use strict";var Ndr=_(),Adr=V(),Odr=Jr(),Sdr=P2(),Tdr=YA(),Idr=R2(),_dr=E(),Ldr=Mr(),Pdr=Ba(),Rdr=yO().assign,Fdr=EO(),Mdr=pi(),Bdr=li(),kdr=2220446049250313e-31,jdr=2148532223>>>0,V2=[0,0],U2=[0,0];function Cdr(r,e){var t,i;return e===0||r===0||_dr(r)||Ldr(r)?r:(Rdr(r,V2,1,0),r=V2[0],e+=V2[1],e+=Fdr(r),e<Idr?Pdr(0,r):e>Sdr?r<0?Adr:Ndr:(e<=Tdr?(e+=52,i=kdr):i=1,Mdr.assign(r,U2,1,0),t=U2[0],t&=jdr,t|=e+Odr<<20,i*Bdr(t,U2[1])))}NO.exports=Cdr});var ka=s((T2e,OO)=>{"use strict";var Gdr=AO();OO.exports=Gdr});var LO=s((I2e,_O)=>{"use strict";var Vdr=$(),ja=ka(),Va=qu(),TO=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Udr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],H2=16777216,W2=5960464477539063e-23,Ca=Va(20),SO=Va(20),Ga=Va(20),or=Va(20);function IO(r,e,t,i,n,a,u,o,f){var v,c,l,p,m,h,d,g,y;for(p=a,y=i[t],g=t,m=0;g>0;m++)c=W2*y|0,or[m]=y-H2*c|0,y=i[g-1]+c,g-=1;if(y=ja(y,n),y-=8*Vdr(y*.125),d=y|0,y-=d,l=0,n>0?(m=or[t-1]>>24-n,d+=m,or[t-1]-=m<<24-n,l=or[t-1]>>23-n):n===0?l=or[t-1]>>23:y>=.5&&(l=2),l>0){for(d+=1,v=0,m=0;m<t;m++)g=or[m],v===0?g!==0&&(v=1,or[m]=16777216-g):or[m]=16777215-g;if(n>0)switch(n){case 1:or[t-1]&=8388607;break;case 2:or[t-1]&=4194303;break}l===2&&(y=1-y,v!==0&&(y-=ja(1,n)))}if(y===0){for(g=0,m=t-1;m>=a;m--)g|=or[m];if(g===0){for(h=1;or[a-h]===0;h++);for(m=t+1;m<=t+h;m++){for(f[o+m]=TO[u+m],c=0,g=0;g<=o;g++)c+=r[g]*f[o+(m-g)];i[m]=c}return t+=h,IO(r,e,t,i,n,a,u,o,f)}}if(y===0)for(t-=1,n-=24;or[t]===0;)t-=1,n-=24;else y=ja(y,-n),y>=H2?(c=W2*y|0,or[t]=y-H2*c|0,t+=1,n+=24,or[t]=c):or[t]=y|0;for(c=ja(1,n),m=t;m>=0;m--)i[m]=c*or[m],c*=W2;for(m=t;m>=0;m--){for(c=0,h=0;h<=p&&h<=t-m;h++)c+=Udr[h]*i[m+h];Ga[t-m]=c}for(c=0,m=t;m>=0;m--)c+=Ga[m];for(l===0?e[0]=c:e[0]=-c,c=Ga[0]-c,m=1;m<=t;m++)c+=Ga[m];return l===0?e[1]=c:e[1]=-c,d&7}function Hdr(r,e,t,i){var n,a,u,o,f,v,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?Ca[c]=0:Ca[c]=TO[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*Ca[o+(c-l)];SO[c]=n}return f=a,IO(r,e,f,SO,v,a,u,o,Ca)}_O.exports=Hdr});var RO=s((_2e,PO)=>{"use strict";var Wdr=Math.round;PO.exports=Wdr});var z2=s((L2e,FO)=>{"use strict";var zdr=RO();FO.exports=zdr});var jO=s((P2e,kO)=>{"use strict";var Ddr=z2(),MO=er(),Xdr=.6366197723675814,Jdr=1.5707963267341256,xdr=6077100506506192e-26,Ydr=6077100506303966e-26,Zdr=20222662487959506e-37,$dr=20222662487111665e-37,Qdr=84784276603689e-45,BO=2047;function Kdr(r,e,t){var i,n,a,u,o,f,v;return n=Ddr(r*Xdr),u=r-n*Jdr,o=n*xdr,v=e>>20|0,t[0]=u-o,i=MO(t[0]),f=v-(i>>20&BO),f>16&&(a=u,o=n*Ydr,u=a-o,o=n*Zdr-(a-u-o),t[0]=u-o,i=MO(t[0]),f=v-(i>>20&BO),f>49&&(a=u,o=n*$dr,u=a-o,o=n*Qdr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}kO.exports=Kdr});var GO=s((R2e,CO)=>{"use strict";var rhr=xr(),ehr=pn(),thr=Ma(),ihr=er(),nhr=jA(),ahr=li(),shr=LO(),Ua=jO(),uhr=0,ohr=16777216,Xe=1.5707963267341256,Bt=6077100506506192e-26,Ha=2*Bt,Wa=3*Bt,za=4*Bt,vhr=598523,fhr=1072243195,chr=1073928572,lhr=1074752122,phr=1074977148,ghr=1075183036,mhr=1075388923,dhr=1075594811,hhr=1094263291,gn=[0,0,0],mn=[0,0];function yhr(r,e){var t,i,n,a,u,o,f,v;if(n=ihr(r),a=n&rhr|0,a<=fhr)return e[0]=r,e[1]=0,0;if(a<=lhr)return(a&thr)===vhr?Ua(r,a,e):a<=chr?r>0?(v=r-Xe,e[0]=v-Bt,e[1]=v-e[0]-Bt,1):(v=r+Xe,e[0]=v+Bt,e[1]=v-e[0]+Bt,-1):r>0?(v=r-2*Xe,e[0]=v-Ha,e[1]=v-e[0]-Ha,2):(v=r+2*Xe,e[0]=v+Ha,e[1]=v-e[0]+Ha,-2);if(a<=dhr)return a<=ghr?a===phr?Ua(r,a,e):r>0?(v=r-3*Xe,e[0]=v-Wa,e[1]=v-e[0]-Wa,3):(v=r+3*Xe,e[0]=v+Wa,e[1]=v-e[0]+Wa,-3):a===mhr?Ua(r,a,e):r>0?(v=r-4*Xe,e[0]=v-za,e[1]=v-e[0]-za,4):(v=r+4*Xe,e[0]=v+za,e[1]=v-e[0]+za,-4);if(a<hhr)return Ua(r,a,e);if(a>=ehr)return e[0]=NaN,e[1]=NaN,0;for(t=nhr(r),i=(a>>20)-1046,v=ahr(a-(i<<20|0),t),o=0;o<2;o++)gn[o]=v|0,v=(v-gn[o])*ohr;for(gn[2]=v,u=3;gn[u-1]===uhr;)u-=1;return f=shr(gn,mn,i,u,1),r<0?(e[0]=-mn[0],e[1]=-mn[1],-f):(e[0]=mn[0],e[1]=mn[1],f)}CO.exports=yhr});var dn=s((F2e,VO)=>{"use strict";var qhr=GO();VO.exports=qhr});var WO=s((M2e,HO)=>{"use strict";var UO=-.16666666666666632,bhr=.00833333333332249,whr=-.0001984126982985795,Ehr=27557313707070068e-22,Nhr=-25050760253406863e-24,Ahr=158969099521155e-24,Ohr=.0416666666666666,Shr=-.001388888888887411,Thr=2480158728947673e-20,Ihr=-27557314351390663e-23,_hr=2087572321298175e-24,Lhr=-11359647557788195e-27;function Phr(r,e,t,i,n){var a,u,o,f,v;return v=r*r,f=v*v,u=bhr+v*(whr+v*Ehr)+v*f*(Nhr+v*Ahr),o=v*r,e===0?t[n]=r+o*(UO+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*UO),u=v*(Ohr+v*(Shr+v*Thr)),u+=f*f*(Ihr+v*(_hr+v*Lhr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*u-r*e)),t}HO.exports=Phr});var X2=s((B2e,DO)=>{"use strict";var Rhr=xr(),Fhr=pn(),Mhr=er(),Bhr=dn(),zO=WO(),khr=1072243195,jhr=1044381696,D2=[0,0];function Chr(r,e,t,i){var n,a;if(n=Mhr(r),n&=Rhr,n<=khr)return n<jhr&&(r|0)===0&&(e[i]=r,e[i+t]=0),zO(r,0,e,t,i);if(n>=Fhr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=Bhr(r,D2),zO(D2[0],D2[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}DO.exports=Chr});var JO=s((k2e,XO)=>{"use strict";var Ghr=X2();function Vhr(r){return Ghr(r,[0,0],1,0)}XO.exports=Vhr});var hn=s((j2e,YO)=>{"use strict";var Uhr=w(),xO=JO(),Hhr=X2();Uhr(xO,"assign",Hhr);YO.exports=xO});var $O=s((C2e,ZO)=>{"use strict";function Whr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}ZO.exports=Whr});var KO=s((G2e,QO)=>{"use strict";function zhr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}QO.exports=zhr});var eS=s((V2e,rS)=>{"use strict";function Dhr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}rS.exports=Dhr});var iS=s((U2e,tS)=>{"use strict";function Xhr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}tS.exports=Xhr});var aS=s((H2e,nS)=>{"use strict";var Jhr=G(),xhr=hn().assign,Yhr=_(),Zhr=$O(),$hr=KO(),Qhr=eS(),Khr=iS(),ryr=.5641895835477563,eyr=2.404825557695773,tyr=5.520078110286311,iyr=616,nyr=-.0014244423042272315,ayr=1413,syr=.0005468602863106496,yn=[0,0];function uyr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===Yhr?0:r===0?1:r<=4?(a=r*r,n=Zhr(a),u=(r+eyr)*(r-iyr/256-nyr),u*n):r<=8?(a=1-r*r/64,n=$hr(a),u=(r+tyr)*(r-ayr/256-syr),u*n):(a=8/r,i=a*a,e=Qhr(i),t=Khr(i),u=ryr/Jhr(r),xhr(r,yn,1,0),u*(e*(yn[1]+yn[0])-a*t*(yn[0]-yn[1])))}nS.exports=uyr});var J2=s((W2e,sS)=>{"use strict";var oyr=aS();sS.exports=oyr});var Da=s((z2e,uS)=>{"use strict";var vyr=1.772453850905516;uS.exports=vyr});var vS=s((D2e,oS)=>{"use strict";function fyr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}oS.exports=fyr});var cS=s((X2e,fS)=>{"use strict";function cyr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}fS.exports=cyr});var pS=s((J2e,lS)=>{"use strict";function lyr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}lS.exports=lyr});var mS=s((x2e,gS)=>{"use strict";function pyr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}gS.exports=pyr});var hS=s((Y2e,dS)=>{"use strict";var gyr=G(),myr=Y(),dyr=hn().assign,hyr=_(),yyr=Da(),qyr=vS(),byr=cS(),wyr=pS(),Eyr=mS(),Nyr=3.8317059702075125,Ayr=7.015586669815619,Oyr=981,Syr=-.0003252797924876844,Tyr=1796,Iyr=-38330184381246464e-21,qn=[0,0];function _yr(r){var e,t,i,n,a,u,o,f;return f=myr(r),r===0||f===hyr?0:(f<=4?(u=r*r,a=qyr(u),o=f*(f+Nyr)*(f-Oyr/256-Syr),e=o*a):f<=8?(u=r*r,a=byr(u),o=f*(f+Ayr)*(f-Tyr/256-Iyr),e=o*a):(u=8/f,n=u*u,t=wyr(n),i=Eyr(n),o=1/(gyr(f)*yyr),dyr(f,qn,1,0),e=o*(t*(qn[0]-qn[1])+u*i*(qn[0]+qn[1]))),r<0&&(e*=-1),e)}dS.exports=_yr});var x2=s((Z2e,yS)=>{"use strict";var Lyr=hS();yS.exports=Lyr});var Lr=s(($2e,qS)=>{"use strict";var Pyr=3.141592653589793;qS.exports=Pyr});var wS=s((Q2e,bS)=>{"use strict";function Ryr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}bS.exports=Ryr});var NS=s((K2e,ES)=>{"use strict";function Fyr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}ES.exports=Fyr});var OS=s((r1e,AS)=>{"use strict";function Myr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}AS.exports=Myr});var TS=s((e1e,SS)=>{"use strict";function Byr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}SS.exports=Byr});var _S=s((t1e,IS)=>{"use strict";function kyr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}IS.exports=kyr});var MS=s((i1e,FS)=>{"use strict";var Y2=R(),jyr=G(),Cyr=Lr(),Gyr=Da(),Vyr=V(),Uyr=_(),Hyr=hn().assign,Z2=J2(),Wyr=wS(),zyr=NS(),Dyr=OS(),Xyr=TS(),Jyr=_S(),xyr=1/Gyr,$2=2/Cyr,LS=.8935769662791675,PS=3.957678419314858,RS=7.086051060301773,Yyr=228,Zyr=.0029519662791675214,$yr=1013,Qyr=.0006471693148578684,Kyr=1814,rqr=.00011356030177269763,bn=[0,0];function eqr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?Vyr:r===Uyr?0:r<=3?(a=r*r,u=Y2(r/LS)*Z2(r)*$2,n=Wyr(a),o=(r+LS)*(r-Yyr/256-Zyr),u+o*n):r<=5.5?(a=r*r,u=Y2(r/PS)*Z2(r)*$2,n=zyr(a),o=(r+PS)*(r-$yr/256-Qyr),u+o*n):r<=8?(a=r*r,u=Y2(r/RS)*Z2(r)*$2,n=Dyr(a),o=(r+RS)*(r-Kyr/256-rqr),u+o*n):(a=8/r,i=a*a,e=Xyr(i),t=Jyr(i),o=xyr/jyr(r),Hyr(r,bn,1,0),o*(e*(bn[0]-bn[1])+a*t*(bn[1]+bn[0])))}FS.exports=eqr});var kS=s((n1e,BS)=>{"use strict";var tqr=MS();BS.exports=tqr});var CS=s((a1e,jS)=>{"use strict";function iqr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}jS.exports=iqr});var VS=s((s1e,GS)=>{"use strict";function nqr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}GS.exports=nqr});var HS=s((u1e,US)=>{"use strict";function aqr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}US.exports=aqr});var zS=s((o1e,WS)=>{"use strict";function sqr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}WS.exports=sqr});var $S=s((v1e,ZS)=>{"use strict";var DS=R(),uqr=G(),oqr=Lr(),vqr=Da(),fqr=V(),cqr=_(),lqr=hn().assign,XS=x2(),pqr=CS(),gqr=VS(),mqr=HS(),dqr=zS(),hqr=1/vqr,JS=2/oqr,xS=2.197141326031017,YS=5.429681040794135,yqr=562,qqr=.001828826031017035,bqr=1390,wqr=-6459205864867228e-21,wn=[0,0];function Eqr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?fqr:r===cqr?0:r<=4?(a=r*r,u=DS(r/xS)*XS(r)*JS,n=pqr(a),o=(r+xS)*(r-yqr/256-qqr)/r,u+o*n):r<=8?(a=r*r,u=DS(r/YS)*XS(r)*JS,n=gqr(a),o=(r+YS)*(r-bqr/256-wqr)/r,u+o*n):(a=8/r,i=a*a,e=mqr(i),t=dqr(i),o=hqr/uqr(r),lqr(r,wn,1,0),o*(a*t*(wn[0]-wn[1])-e*(wn[0]+wn[1])))}ZS.exports=Eqr});var KS=s((f1e,QS)=>{"use strict";var Nqr=$S();QS.exports=Nqr});var eT=s((c1e,rT)=>{"use strict";function Aqr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}rT.exports=Aqr});var iT=s((l1e,tT)=>{"use strict";function Oqr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}tT.exports=Oqr});var aT=s((p1e,nT)=>{"use strict";var Sqr=eT(),Tqr=iT();function Iqr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*Sqr(a),i+=n*n*Tqr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}nT.exports=Iqr});var Q2=s((g1e,sT)=>{"use strict";var _qr=aT();sT.exports=_qr});var vT=s((m1e,oT)=>{"use strict";var uT=-.16666666666666632,Lqr=.00833333333332249,Pqr=-.0001984126982985795,Rqr=27557313707070068e-22,Fqr=-25050760253406863e-24,Mqr=158969099521155e-24;function Bqr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Lqr+a*(Pqr+a*Rqr)+a*n*(Fqr+a*Mqr),i=a*r,e===0?r+i*(uT+a*t):r-(a*(.5*e-i*t)-e-i*uT)}oT.exports=Bqr});var K2=s((d1e,fT)=>{"use strict";var kqr=vT();fT.exports=kqr});var pT=s((h1e,lT)=>{"use strict";var jqr=er(),r1=Q2(),cT=K2(),Cqr=dn(),ie=[0,0],Gqr=2147483647,Vqr=1072243195,Uqr=1044381696,Hqr=2146435072;function Wqr(r){var e,t;if(e=jqr(r),e&=Gqr,e<=Vqr)return e<Uqr?1:r1(r,0);if(e>=Hqr)return NaN;switch(t=Cqr(r,ie),t&3){case 0:return r1(ie[0],ie[1]);case 1:return-cT(ie[0],ie[1]);case 2:return-r1(ie[0],ie[1]);default:return cT(ie[0],ie[1])}}lT.exports=Wqr});var kt=s((y1e,gT)=>{"use strict";var zqr=pT();gT.exports=zqr});var hT=s((q1e,dT)=>{"use strict";var Dqr=xr(),Xqr=pn(),Jqr=er(),mT=Q2(),e1=K2(),xqr=dn(),Yqr=1072243195,Zqr=1045430272,ne=[0,0];function $qr(r){var e,t;if(e=Jqr(r),e&=Dqr,e<=Yqr)return e<Zqr?r:e1(r,0);if(e>=Xqr)return NaN;switch(t=xqr(r,ne),t&3){case 0:return e1(ne[0],ne[1]);case 1:return mT(ne[0],ne[1]);case 2:return-e1(ne[0],ne[1]);default:return-mT(ne[0],ne[1])}}dT.exports=$qr});var jt=s((b1e,yT)=>{"use strict";var Qqr=hT();yT.exports=Qqr});var En=s((w1e,qT)=>{"use strict";var Kqr=9007199254740991;qT.exports=Kqr});var ET=s((E1e,wT)=>{"use strict";var rbr=E(),ebr=Mr(),tbr=Y(),bT=kt(),ibr=jt(),nbr=$(),t1=Lr(),abr=En(),sbr=abr+1;function ubr(r){var e,t,i,n;return rbr(r)?NaN:ebr(r)?NaN:(e=tbr(r),e>sbr?1:(t=nbr(e),i=e-t,i===.5?0:(i<.25?n=bT(t1*i):i<.75?(i=.5-i,n=ibr(t1*i)):(i=1-i,n=-bT(t1*i)),t%2===1?-n:n)))}wT.exports=ubr});var AT=s((N1e,NT)=>{"use strict";var obr=ET();NT.exports=obr});var TT=s((A1e,ST)=>{"use strict";var OT=Kn();function vbr(r){return r>0?OT(r-1):OT(r+1)}ST.exports=vbr});var i1=s((O1e,IT)=>{"use strict";var fbr=TT();IT.exports=fbr});var LT=s((S1e,_T)=>{"use strict";var cbr=Mt(),n1;cbr===!0?n1=0:n1=1;_T.exports=n1});var RT=s((T1e,PT)=>{"use strict";var lbr=lr(),pbr=gr(),gbr=LT(),a1=new pbr(1),mbr=new lbr(a1.buffer);function dbr(r,e){return a1[0]=r,mbr[gbr]=e>>>0,a1[0]}PT.exports=dbr});var ae=s((I1e,FT)=>{"use strict";var hbr=RT();FT.exports=hbr});var BT=s((_1e,MT)=>{"use strict";function ybr(r){return r|0}MT.exports=ybr});var s1=s((L1e,kT)=>{"use strict";var qbr=BT();kT.exports=qbr});var GT=s((P1e,CT)=>{"use strict";var jT=i1(),bbr=Ba(),wbr=V(),Xa=_();function Ebr(r,e){return e===wbr?Xa:e===Xa?0:e>0?jT(e)?r:0:jT(e)?bbr(Xa,r):Xa}CT.exports=Ebr});var UT=s((R1e,VT)=>{"use strict";var Nbr=xr(),Abr=er(),Obr=1072693247,Ja=1e300,xa=1e-300;function Sbr(r,e){var t,i;return i=Abr(r),t=i&Nbr,t<=Obr?e<0?Ja*Ja:xa*xa:e>0?Ja*Ja:xa*xa}VT.exports=Sbr});var zT=s((F1e,WT)=>{"use strict";var Tbr=Y(),HT=_();function Ibr(r,e){return r===-1?(r-r)/(r-r):r===1?1:Tbr(r)<1==(e===HT)?0:HT}WT.exports=Ibr});var XT=s((M1e,DT)=>{"use strict";function _br(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}DT.exports=_br});var ZT=s((B1e,YT)=>{"use strict";var Lbr=er(),Ya=ae(),JT=te(),Pbr=Jr(),Rbr=XT(),Fbr=1048575,xT=1048576,Mbr=1072693248,Bbr=536870912,kbr=524288,jbr=20,Cbr=9007199254740992,Gbr=.9617966939259756,Vbr=.9617967009544373,Ubr=-7028461650952758e-24,Hbr=[1,1.5],Wbr=[0,.5849624872207642],zbr=[0,1350039202129749e-23];function Dbr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,y,N,A,k,T,D,vr,Z;return D=0,t<xT&&(e*=Cbr,D-=53,t=Lbr(e)),D+=(t>>jbr)-Pbr|0,vr=t&Fbr|0,t=vr|Mbr|0,vr<=235662?Z=0:vr<767610?Z=1:(Z=0,D+=1,t-=xT),e=JT(e,t),c=Hbr[Z],k=e-c,T=1/(e+c),n=k*T,u=Ya(n,0),i=(t>>1|Bbr)+kbr,i+=Z<<18,f=JT(0,i),v=e-(f-c),o=T*(k-u*f-u*v),a=n*n,A=a*a*Rbr(a),A+=o*(u+n),a=u*u,f=3+a+A,f=Ya(f,0),v=A-(f-3-a),k=u*f,T=o*f+v*n,p=k+T,p=Ya(p,0),m=T-(p-k),h=Vbr*p,d=Ubr*p+m*Gbr+zbr[Z],l=Wbr[Z],N=D,g=h+d+l+N,g=Ya(g,0),y=d-(g-N-l-h),r[0]=g,r[1]=y,r}YT.exports=Dbr});var QT=s((k1e,$T)=>{"use strict";function Xbr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}$T.exports=Xbr});var rI=s((j1e,KT)=>{"use strict";var Jbr=ae(),xbr=QT(),Ybr=1.4426950408889634,Zbr=1.4426950216293335,$br=19259629911266175e-24;function Qbr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*xbr(n),u=Zbr*n,o=n*$br-a*Ybr,i=u+o,i=Jbr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}KT.exports=Qbr});var tI=s((C1e,eI)=>{"use strict";function Kbr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}eI.exports=Kbr});var vI=s((G1e,oI)=>{"use strict";var rwr=er(),iI=te(),ewr=ae(),twr=s1(),iwr=ka(),nwr=_a(),nI=Jr(),aI=xr(),sI=Ma(),awr=tI(),uI=1048576,swr=1071644672,Nn=20,uwr=.6931471824645996,owr=-1904654299957768e-24;function vwr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m;return p=r&aI|0,m=(p>>Nn)-nI|0,l=0,p>swr&&(l=r+(uI>>m+1)>>>0,m=((l&aI)>>Nn)-nI|0,i=(l&~(sI>>m))>>>0,a=iI(0,i),l=(l&sI|uI)>>Nn-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=ewr(a,0),o=a*uwr,f=(t-(a-e))*nwr+a*owr,c=o+f,v=f-(c-o),a=c*c,n=c-a*awr(a),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=rwr(c),r=twr(r),r+=l<<Nn>>>0,r>>Nn<=0?c=iwr(c,l):c=iI(c,r),c}oI.exports=vwr});var bI=s((V1e,qI)=>{"use strict";var fI=E(),cI=i1(),lI=Mr(),fwr=Tr(),pI=G(),cwr=Y(),u1=pi(),lwr=ae(),gI=s1(),pwr=V(),gwr=_(),o1=xr(),mwr=GT(),dwr=UT(),hwr=zT(),ywr=ZT(),qwr=rI(),bwr=vI(),wwr=1072693247,Ewr=1105199104,Nwr=1139802112,mI=1083179008,Awr=1072693248,Owr=1083231232,Swr=3230714880>>>0,dI=31,Je=1e300,xe=1e-300,Twr=8008566259537294e-32,se=[0,0],hI=[0,0];function yI(r,e){var t,i,n,a,u,o,f,v,c,l,p,m,h,d,g,y;if(fI(r)||fI(e))return NaN;if(u1.assign(e,se,1,0),o=se[0],f=se[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return pI(r);if(e===-.5)return 1/pI(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(lI(e))return hwr(r,e)}if(u1.assign(r,se,1,0),a=se[0],u=se[1],u===0){if(a===0)return mwr(r,e);if(r===1)return 1;if(r===-1&&cI(e))return-1;if(lI(r))return r===pwr?yI(-0,-e):e<0?0:gwr}if(r<0&&fwr(e)===!1)return(r-r)/(r-r);if(n=cwr(r),t=a&o1|0,i=o&o1|0,v=a>>>dI|0,c=o>>>dI|0,v&&cI(e)?v=-1:v=1,i>Ewr){if(i>Nwr)return dwr(r,e);if(t<wwr)return c===1?v*Je*Je:v*xe*xe;if(t>Awr)return c===0?v*Je*Je:v*xe*xe;h=qwr(hI,n)}else h=ywr(hI,n,t);if(l=lwr(e,0),m=(e-l)*h[0]+e*h[1],p=l*h[0],d=m+p,u1.assign(d,se,1,0),g=gI(se[0]),y=gI(se[1]),g>=mI){if((g-mI|y)!==0||m+Twr>d-p)return v*Je*Je}else if((g&o1)>=Owr&&((g-Swr|y)!==0||m<=d-p))return v*xe*xe;return d=bwr(g,p,m),v*d}qI.exports=yI});var H=s((U1e,wI)=>{"use strict";var Iwr=bI();wI.exports=Iwr});var NI=s((H1e,EI)=>{"use strict";var _wr=1.618033988749895;EI.exports=_wr});var OI=s((W1e,AI)=>{"use strict";var Lwr=E(),Pwr=AT(),Rwr=H(),Fwr=NI(),Mwr=_(),Bwr=V(),kwr=2.23606797749979;function jwr(r){var e,t;return Lwr(r)||r===Mwr||r===Bwr?NaN:(e=Rwr(Fwr,r),t=Pwr(r)/e,(e-t)/kwr)}AI.exports=jwr});var TI=s((z1e,SI)=>{"use strict";var Cwr=OI();SI.exports=Cwr});var _I=s((D1e,II)=>{"use strict";function Gwr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}II.exports=Gwr});var FI=s((X1e,RI)=>{"use strict";var Vwr=C2(),Uwr=F2(),LI=xr(),f1=er(),Hwr=te(),Wwr=Mr(),PI=li(),zwr=pi(),Dwr=E(),Xwr=_I(),Jwr=4294967295>>>0,xwr=3221225472>>>0,Ywr=0x40000000000000,v1=2147483648>>>0,Zwr=1>>>0,$wr=715094163>>>0,Qwr=696219795>>>0,Kwr=f1(Vwr),Ct=[0>>>0,0>>>0];function rEr(r){var e,t,i,n,a,u,o;return r===0||Dwr(r)||Wwr(r)?r:(t=f1(r)>>>0,e=(t&Uwr)>>>0,t&=LI,t<Kwr?(u=Ywr*r,i=(f1(u)&LI)>>>0,i=(i/3>>>0)+Qwr>>>0,u=PI(e|i,0)):(u=0,i=(t/3>>>0)+$wr>>>0,u=Hwr(u,e|i)),n=u*u*(u/r),u*=Xwr(n),zwr.assign(u,Ct,1,0),Ct[1]&v1?(Ct[0]+=Zwr,Ct[1]&=~v1):Ct[1]|=v1,u=PI(Ct[0]&Jwr,Ct[1]&xwr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}RI.exports=rEr});var BI=s((J1e,MI)=>{"use strict";var eEr=FI();MI.exports=eEr});var jI=s((x1e,kI)=>{"use strict";var tEr=Math.ceil;kI.exports=tEr});var An=s((Y1e,CI)=>{"use strict";var iEr=jI();CI.exports=iEr});var VI=s((Z1e,GI)=>{"use strict";function nEr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}GI.exports=nEr});var HI=s(($1e,UI)=>{"use strict";function aEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}UI.exports=aEr});var DI=s((Q1e,zI)=>{"use strict";var sEr=er(),uEr=VI(),oEr=HI(),WI=1048575,vEr=.3333333333333333;function fEr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=sEr(r),a=r-1,(WI&2+n)<3?a===0?0:a*a*(vEr*a-.5):(u=a/(2+a),o=u*u,n&=WI,c=n-398458|0,v=o*o,l=440401-n|0,t=v*uEr(v),i=o*oEr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}zI.exports=fEr});var YI=s((K1e,xI)=>{"use strict";var XI=er(),cEr=te(),lEr=ae(),pEr=E(),gEr=Jr(),mEr=V(),dEr=DI(),hEr=0x40000000000000,JI=.4342944818781689,yEr=25082946711645275e-27,qEr=.30102999566361177,bEr=3694239077158931e-28,wEr=1048575,EEr=2146435072,NEr=1048576,AEr=1072693248;function OEr(r){var e,t,i,n,a,u,o,f;return pEr(r)||r<0?NaN:r===0?mEr:(t=XI(r),u=0,t<NEr&&(u-=54,r*=hEr,t=XI(r)),t>=EEr?r+r:(u+=(t>>20)-gEr|0,t&=wEr,a=t+614244&1048576|0,r=cEr(r,t|a^AEr),u+=a>>20|0,o=u,n=dEr(r),r-=1,e=lEr(r,0),i=r-e,f=o*bEr+(r+n)*yEr,f+=(i+n)*JI+e*JI,f+o*qEr))}xI.exports=OEr});var $I=s((r3e,ZI)=>{"use strict";var SEr=YI();ZI.exports=SEr});var c1=s((e3e,QI)=>{"use strict";var TEr=308;QI.exports=TEr});var l1=s((t3e,KI)=>{"use strict";var IEr=-324;KI.exports=IEr});var e_=s((i3e,r_)=>{"use strict";var _Er=E(),LEr=Mr(),PEr=H(),REr=$(),FEr=An(),MEr=$I(),BEr=c1(),kEr=l1(),jEr=_();function CEr(r){var e,t;return _Er(r)||LEr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=MEr(r),e===-1?t=REr(t):t=FEr(t),t<=kEr?e*0:t>BEr?jEr:e*PEr(10,t))}r_.exports=CEr});var i_=s((n3e,t_)=>{"use strict";var GEr=e_();t_.exports=GEr});var a_=s((a3e,n_)=>{"use strict";function VEr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}n_.exports=VEr});var u_=s((s3e,s_)=>{"use strict";function UEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}s_.exports=UEr});var f_=s((u3e,v_)=>{"use strict";var HEr=er(),WEr=a_(),zEr=u_(),o_=1048575,DEr=.3333333333333333;function XEr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=HEr(r),a=r-1,(o_&2+n)<3?a===0?0:a*a*(DEr*a-.5):(u=a/(2+a),o=u*u,n&=o_,c=n-398458|0,v=o*o,l=440401-n|0,t=v*WEr(v),i=o*zEr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}v_.exports=XEr});var p_=s((o3e,l_)=>{"use strict";var JEr=er(),xEr=te(),YEr=ae(),ZEr=pi(),$Er=E(),QEr=xr(),KEr=Ma(),rNr=Jr(),eNr=V(),tNr=f_(),iNr=0x40000000000000,c_=1.4426950407214463,nNr=16751713164886512e-26,aNr=2146435072,sNr=1048576,uNr=1072693248,p1=[0,0];function oNr(r){var e,t,i,n,a,u,o;if($Er(r)||r<0)return NaN;if(ZEr.assign(r,p1,1,0),i=p1[0],n=p1[1],o=0,i<sNr){if((i&QEr|n)===0)return eNr;o-=54,r*=iNr,i=JEr(r)}return i>=aNr?r+r:(o+=(i>>20)-rNr|0,i&=KEr,u=i+614244&1048576|0,r=xEr(r,i|u^uNr),o+=u>>20|0,a=tNr(r),r-=1,e=YEr(r,0),t=r-e,(r+a)*nNr+(t+a)*c_+e*c_+o)}l_.exports=oNr});var m_=s((v3e,g_)=>{"use strict";var vNr=p_();g_.exports=vNr});var h_=s((f3e,d_)=>{"use strict";var fNr=E(),cNr=Mr(),lNr=H(),pNr=$(),gNr=An(),mNr=m_(),dNr=P2(),hNr=R2(),yNr=_();function qNr(r){var e,t;return fNr(r)||cNr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=mNr(r),t===hNr)?r:(e===-1?t=pNr(t):t=gNr(t),t>dNr?yNr:e*lNr(2,t))}d_.exports=qNr});var q_=s((c3e,y_)=>{"use strict";var bNr=h_();y_.exports=bNr});var w_=s((l3e,b_)=>{"use strict";var wNr=$(),ENr=An();function NNr(r){return r<0?ENr(r):wNr(r)}b_.exports=NNr});var Za=s((p3e,E_)=>{"use strict";var ANr=w_();E_.exports=ANr});var A_=s((g3e,N_)=>{"use strict";function ONr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}N_.exports=ONr});var S_=s((m3e,O_)=>{"use strict";var SNr=ka(),TNr=A_();function INr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*TNr(n),u=1-(e-i*a/(2-a)-r),SNr(u,t)}O_.exports=INr});var R_=s((d3e,P_)=>{"use strict";var _Nr=E(),T_=Za(),LNr=V(),I_=_(),PNr=S_(),RNr=.6931471803691238,FNr=19082149292705877e-26,__=1.4426950408889634,MNr=709.782712893384,BNr=-745.1332191019411,L_=1/(1<<28),kNr=-L_;function jNr(r){var e,t,i;return _Nr(r)||r===I_?r:r===LNr?0:r>MNr?I_:r<BNr?0:r>kNr&&r<L_?1+r:(r<0?i=T_(__*r-.5):i=T_(__*r+.5),e=r-i*RNr,t=i*FNr,PNr(e,t,i))}P_.exports=jNr});var ir=s((h3e,F_)=>{"use strict";var CNr=R_();F_.exports=CNr});var B_=s((y3e,M_)=>{"use strict";var GNr=V();function VNr(r){return r===0&&1/r===GNr}M_.exports=VNr});var g1=s((q3e,k_)=>{"use strict";var UNr=B_();k_.exports=UNr});var m1=s((b3e,j_)=>{"use strict";var HNr=2.5066282746310007;j_.exports=HNr});var G_=s((w3e,C_)=>{"use strict";function WNr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}C_.exports=WNr});var H_=s((E3e,U_)=>{"use strict";var zNr=m1(),V_=H(),DNr=ir(),XNr=G_(),JNr=143.01608;function xNr(r){var e,t,i;return e=1/r,e=1+e*XNr(e),t=DNr(r),r>JNr?(i=V_(r,.5*r-.25),t=i*(i/t)):t=V_(r,r-.5)/t,zNr*t*e}U_.exports=xNr});var z_=s((N3e,W_)=>{"use strict";var YNr=.5772156649015329;W_.exports=YNr});var X_=s((A3e,D_)=>{"use strict";var ZNr=z_();function $Nr(r,e){return e/((1+ZNr*r)*r)}D_.exports=$Nr});var x_=s((O3e,J_)=>{"use strict";function QNr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}J_.exports=QNr});var tL=s((S3e,eL)=>{"use strict";var KNr=E(),rAr=Tr(),eAr=g1(),Y_=Y(),tAr=$(),iAr=jt(),Z_=_(),$_=V(),Q_=Lr(),K_=H_(),rL=X_(),nAr=x_();function aAr(r){var e,t,i,n;if(rAr(r)&&r<0||r===$_||KNr(r))return NaN;if(r===0)return eAr(r)?$_:Z_;if(r>171.61447887182297)return Z_;if(r<-170.5674972726612)return 0;if(t=Y_(r),t>33)return r>=0?K_(r):(i=tAr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*iAr(Q_*n),e*Q_/(Y_(n)*K_(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return rL(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return rL(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*nAr(r))}eL.exports=aAr});var gi=s((T3e,iL)=>{"use strict";var sAr=tL();iL.exports=sAr});var sL=s((I3e,aL)=>{"use strict";var uAr=E(),oAr=Mr(),nL=kt(),d1=jt(),vAr=Y(),On=Ba(),Sn=Lr();function fAr(r){var e,t;return uAr(r)?NaN:oAr(r)?NaN:(t=r%2,e=vAr(t),e===0||e===1?On(0,t):e<.25?d1(Sn*t):e<.75?(e=.5-e,On(nL(Sn*e),t)):e<1.25?(t=On(1,t)-t,d1(Sn*t)):e<1.75?(e-=1.5,-On(nL(Sn*e),t)):(t-=On(2,t),d1(Sn*t)))}aL.exports=fAr});var Tn=s((_3e,uL)=>{"use strict";var cAr=sL();uL.exports=cAr});var vL=s((L3e,oL)=>{"use strict";function lAr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}oL.exports=lAr});var cL=s((P3e,fL)=>{"use strict";function pAr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}fL.exports=pAr});var pL=s((R3e,lL)=>{"use strict";function gAr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}lL.exports=gAr});var mL=s((F3e,gL)=>{"use strict";function mAr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}gL.exports=mAr});var hL=s((M3e,dL)=>{"use strict";function dAr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}dL.exports=dAr});var qL=s((B3e,yL)=>{"use strict";function hAr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}yL.exports=hAr});var wL=s((k3e,bL)=>{"use strict";function yAr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}bL.exports=yAr});var NL=s((j3e,EL)=>{"use strict";function qAr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}EL.exports=qAr});var OL=s((C3e,AL)=>{"use strict";function bAr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}AL.exports=bAr});var TL=s((G3e,SL)=>{"use strict";function wAr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}SL.exports=wAr});var LL=s((V3e,_L)=>{"use strict";var EAr=E(),NAr=Mr(),AAr=Y(),mi=R(),OAr=Za(),SAr=Tn(),TAr=Lr(),h1=_(),IAr=vL(),_Ar=cL(),LAr=pL(),PAr=mL(),RAr=hL(),FAr=qL(),MAr=wL(),BAr=NL(),kAr=OL(),jAr=TL(),CAr=.07721566490153287,GAr=.3224670334241136,VAr=1,UAr=-.07721566490153287,HAr=.48383612272381005,WAr=-.1475877229945939,zAr=.06462494023913339,DAr=-.07721566490153287,XAr=1,JAr=.4189385332046727,$a=1.4616321449683622,xAr=4503599627370496,YAr=0x400000000000000,ZAr=8470329472543003e-37,IL=1.4616321449683622,$Ar=-.12148629053584961,QAr=-3638676997039505e-33;function KAr(r){var e,t,i,n,a,u,o,f,v,c,l,p,m;if(EAr(r)||NAr(r))return r;if(r===0)return h1;if(r<0?(e=!0,r=-r):e=!1,r<ZAr)return-mi(r);if(e){if(r>=xAr||(v=SAr(r),v===0))return h1;t=mi(TAr/AAr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-mi(r),r>=$a-1+.27?(l=1-r,i=0):r>=$a-1-.27?(l=r-(IL-1),i=1):(l=r,i=2)):(m=0,r>=$a+.27?(l=2-r,i=0):r>=$a-.27?(l=r-IL,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=CAr+p*IAr(p),a=p*(GAr+p*_Ar(p)),o=l*u+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=HAr+c*RAr(c),a=WAr+c*FAr(c),n=zAr+c*MAr(c),o=p*u-(QAr-c*(a+l*n)),m+=$Ar+o;break;case 2:u=l*(DAr+l*BAr(l)),a=XAr+l*kAr(l),m+=-.5*l+u/a;break}else if(r<8)switch(i=OAr(r),l=r-i,o=l*(UAr+l*PAr(l)),f=VAr+l*LAr(l),m=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=mi(p)}else r<YAr?(v=mi(r),p=1/r,l=p*p,c=JAr+p*jAr(l),m=(r-.5)*(v-1)+c):m=r*(mi(r)-1);return e&&(m=t-m),m}_L.exports=KAr});var In=s((U3e,PL)=>{"use strict";var rOr=LL();PL.exports=rOr});var Ye=s((H3e,RL)=>{"use strict";var eOr=6.283185307179586;RL.exports=eOr});var y1=s((W3e,FL)=>{"use strict";var tOr=14901161193847656e-24;FL.exports=tOr});var q1=s((z3e,ML)=>{"use strict";var iOr=.9189385332046728;ML.exports=iOr});var BL=s((D3e,nOr)=>{nOr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var kL=s((X3e,aOr)=>{aOr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var jL=s((J3e,sOr)=>{sOr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var GL=s((x3e,CL)=>{"use strict";function uOr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}CL.exports=uOr});var UL=s((Y3e,VL)=>{"use strict";function oOr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}VL.exports=oOr});var WL=s((Z3e,HL)=>{"use strict";function vOr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}HL.exports=vOr});var DL=s(($3e,zL)=>{"use strict";function fOr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}zL.exports=fOr});var JL=s((Q3e,XL)=>{"use strict";function cOr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}XL.exports=cOr});var YL=s((K3e,xL)=>{"use strict";function lOr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}xL.exports=lOr});var rP=s((rve,KL)=>{"use strict";var pOr=E(),gOr=Tr(),mOr=Y(),Qa=ir(),dOr=$(),hOr=gi(),yOr=In(),ZL=Tn(),$L=H(),qOr=R(),bOr=_(),wOr=V(),QL=Ye(),EOr=y1(),NOr=q1(),AOr=BL(),OOr=kL(),SOr=jL(),TOr=GL(),IOr=UL(),_Or=WL(),LOr=DL(),POr=JL(),ROr=YL(),FOr=129,MOr=170,BOr=709,kOr=1.2433929443359375,jOr=.6986598968505859;function b1(r){var e,t,i,n,a,u;if(pOr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(gOr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=FOr)return-SOr[u]/(i+1)}else return(n&1)===0?OOr[n/2]:AOr[(n-3)/2];return mOr(r)<EOr?-.5-NOr*r:(t=1-r,r<0?dOr(r/2)===r/2?0:(e=r,r=t,t=e,r>MOr?(e=ZL(.5*t)*2*b1(r),a=yOr(r),a-=r*qOr(QL),a>BOr?e<0?wOr:bOr:e*Qa(a)):ZL(.5*t)*2*$L(QL,-r)*hOr(r)*b1(r)):r<1?(e=TOr(t),e-=kOr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+IOr(t)):r<=4?(e=jOr+1/-t,e+_Or(r-2)):r<=7?(e=LOr(r-4),1+Qa(e)):r<15?(e=POr(r-7),1+Qa(e)):r<36?(e=ROr(r-15),1+Qa(e)):1+$L(2,-r))}KL.exports=b1});var tP=s((eve,eP)=>{"use strict";var COr=rP();eP.exports=COr});var nP=s((tve,iP)=>{"use strict";var U=nr(),GOr=Y(),VOr=Ta(),UOr=ln(),HOr=NN(),WOr=kN(),zOr=VN(),DOr=zN(),XOr=xN(),JOr=sA(),xOr=fA(),YOr=gA(),ZOr=Ft(),$Or=T2(),QOr=Fa(),KOr=qA(),rSr=NA(),eSr=TA(),tSr=J2(),iSr=x2(),nSr=kS(),aSr=KS(),sSr=TI(),uSr=BI(),oSr=An(),vSr=i_(),fSr=q_(),cSr=kt(),lSr=jt(),pSr=G(),gSr=tP();function mSr(r){return U(r,"abs",GOr),U(r,"abs2",VOr),U(r,"acos",UOr),U(r,"acosh",HOr),U(r,"acot",WOr),U(r,"acovercos",zOr),U(r,"acoversin",DOr),U(r,"acsc",XOr),U(r,"acsch",JOr),U(r,"ahavercos",xOr),U(r,"ahaversin",YOr),U(r,"asin",ZOr),U(r,"asinh",$Or),U(r,"atan",QOr),U(r,"atanh",KOr),U(r,"avercos",rSr),U(r,"aversin",eSr),U(r,"besselj0",tSr),U(r,"besselj1",iSr),U(r,"bessely0",nSr),U(r,"bessely1",aSr),U(r,"binet",sSr),U(r,"cbrt",uSr),U(r,"ceil",oSr),U(r,"ceil10",vSr),U(r,"ceil2",fSr),U(r,"cos",cSr),U(r,"sin",lSr),U(r,"sqrt",pSr),U(r,"zeta",gSr),r}iP.exports=mSr});var sP=s((ive,aP)=>{"use strict";var dSr=nr(),hSr=Bw(),ySr=cE(),qSr=nP();function bSr(r){return dSr(r,"tools",ySr({})),r=hSr(r),r=qSr(r),r}aP.exports=bSr});var oP=s((nve,uP)=>{"use strict";var wSr=je();function ESr(r,e,t,i){wSr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}uP.exports=ESr});var F=s((ave,vP)=>{"use strict";var NSr=oP();vP.exports=NSr});var cP=s((sve,fP)=>{"use strict";function ASr(r){return e;function e(){return r}}fP.exports=ASr});var S=s((uve,lP)=>{"use strict";var OSr=cP();lP.exports=OSr});var gP=s((ove,pP)=>{"use strict";var SSr=_();function TSr(r){return r===0&&1/r===SSr}pP.exports=TSr});var Ze=s((vve,mP)=>{"use strict";var ISr=gP();mP.exports=ISr});var yP=s((fve,hP)=>{"use strict";var _Sr=Ze(),dP=E(),w1=_();function LSr(r,e){return dP(r)||dP(e)?NaN:r===w1||e===w1?w1:r===e&&r===0?_Sr(r)?r:e:r>e?r:e}hP.exports=LSr});var E1=s((cve,qP)=>{"use strict";var PSr=yP();qP.exports=PSr});var EP=s((lve,wP)=>{"use strict";var bP=65535;function RSr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&bP)>>>0,o=(e&bP)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}wP.exports=RSr});var AP=s((pve,NP)=>{"use strict";var FSr=EP();NP.exports=FSr});var N1=s((gve,OP)=>{"use strict";function MSr(r,e,t,i,n,a,u){var o,f,v,c,l,p,m;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,m=0;m<r;m++)v(f,p,c(o,l)),l+=t,p+=a;return e}OP.exports=MSr});var IP=s((mve,TP)=>{"use strict";var SP=ma(),BSr=N1(),A1=8;function kSr(r,e,t,i,n){var a,u,o,f,v,c;if(r<=0)return i;if(o=SP(e),f=SP(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,BSr(r,o,t,a,f,n,u),f.data;if(t===1&&n===1){if(v=r%A1,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<A1)return i;for(c=v;c<r;c+=A1)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}TP.exports=kSr});var PP=s((dve,LP)=>{"use strict";var _P=ma(),jSr=N1(),_n=8;function CSr(r,e,t,i,n,a,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=_P(e),c=_P(n),v.accessorProtocol||c.accessorProtocol)return jSr(r,v,t,i,c,a,u),c.data;if(o=i,f=u,t===1&&a===1){if(l=r%_n,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<_n)return n;for(p=l;p<r;p+=_n)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=_n,f+=_n;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}LP.exports=CSr});var $e=s((hve,FP)=>{"use strict";var GSr=w(),RP=IP(),VSr=PP();GSr(RP,"ndarray",VSr);FP.exports=RP});var BP=s((yve,MP)=>{"use strict";function USr(){}MP.exports=USr});var jP=s((qve,kP)=>{"use strict";var HSr=BP();function WSr(){return HSr.name==="foo"}kP.exports=WSr});var GP=s((bve,CP)=>{"use strict";var zSr=jP();CP.exports=zSr});var UP=s((wve,VP)=>{"use strict";var DSr=L(),XSr=GP(),JSr=q(),xSr=Pu().REGEXP,YSr=XSr();function ZSr(r){if(DSr(r)===!1)throw new TypeError(JSr("invalid argument. Must provide a function. Value: `%s`.",r));return YSr?r.name:xSr.exec(r.toString())[1]}VP.exports=ZSr});var WP=s((Eve,HP)=>{"use strict";var $Sr=UP();HP.exports=$Sr});var DP=s((Nve,zP)=>{"use strict";var QSr=Xi(),KSr=xt(),rTr=Di(),eTr=zi(),tTr=Jt(),iTr=Et(),nTr=lr(),aTr=Qr(),sTr=gr(),uTr=[sTr,aTr,iTr,nTr,eTr,tTr,QSr,KSr,rTr];zP.exports=uTr});var XP=s((Ave,oTr)=>{oTr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var QP=s((Ove,$P)=>{"use strict";var vTr=Ce(),fTr=WP(),YP=It(),cTr=Cu(),lTr=gr(),JP=DP(),xP=XP(),Ka=cTr()?YP(lTr):ZP;Ka=fTr(Ka)==="TypedArray"?Ka:ZP;function ZP(){}function pTr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof Ka)return!0;for(t=0;t<JP.length;t++)if(r instanceof JP[t])return!0;for(;r;){for(e=vTr(r),t=0;t<xP.length;t++)if(xP[t]===e)return!0;r=YP(r)}return!1}$P.exports=pTr});var rR=s((Sve,KP)=>{"use strict";var gTr=QP();KP.exports=gTr});var tR=s((Tve,eR)=>{"use strict";var mTr=Zi(),dTr=Qi(),hTr=[dTr,mTr];eR.exports=hTr});var iR=s((Ive,yTr)=>{yTr.exports=["Complex64Array","Complex128Array"]});var uR=s((_ve,sR)=>{"use strict";var qTr=Ce(),bTr=It(),nR=tR(),aR=iR();function wTr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<nR.length;t++)if(r instanceof nR[t])return!0;for(;r;){for(e=qTr(r),t=0;t<aR.length;t++)if(aR[t]===e)return!0;r=bTr(r)}return!1}sR.exports=wTr});var vR=s((Lve,oR)=>{"use strict";var ETr=uR();oR.exports=ETr});var cR=s((Pve,fR)=>{"use strict";var NTr=q();function ATr(r,e){if(typeof e!="function")throw new TypeError(NTr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}fR.exports=ATr});var pR=s((Rve,lR)=>{"use strict";var OTr=cR();lR.exports=OTr});var mR=s((Fve,gR)=>{"use strict";var STr=Xi(),TTr=xt(),ITr=Di(),_Tr=zi(),LTr=Jt(),PTr=Et(),RTr=lr(),FTr=Qr(),MTr=gr(),BTr=Zi(),kTr=Qi(),jTr=[[MTr,"Float64Array"],[FTr,"Float32Array"],[PTr,"Int32Array"],[RTr,"Uint32Array"],[_Tr,"Int16Array"],[LTr,"Uint16Array"],[STr,"Int8Array"],[TTr,"Uint8Array"],[ITr,"Uint8ClampedArray"],[BTr,"Complex64Array"],[kTr,"Complex128Array"]];gR.exports=jTr});var hR=s((Mve,dR)=>{"use strict";var CTr=pR(),GTr=Ce(),VTr=It(),di=mR();function UTr(r){var e,t;for(t=0;t<di.length;t++)if(CTr(r,di[t][0]))return di[t][1];for(;r;){for(e=GTr(r),t=0;t<di.length;t++)if(e===di[t][1])return di[t][1];r=VTr(r)}}dR.exports=UTr});var qR=s((Bve,yR)=>{"use strict";var HTr=rR(),WTr=vR(),zTr=$t(),DTr=Qt(),XTr=q(),JTr=hR();function xTr(r){var e,t,i;if(HTr(r))e=r;else if(WTr(r))r.BYTES_PER_ELEMENT===8?e=zTr(r,0):e=DTr(r,0);else throw new TypeError(XTr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:JTr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}yR.exports=xTr});var M=s((kve,bR)=>{"use strict";var YTr=qR();bR.exports=YTr});var O1=s((jve,wR)=>{"use strict";var ZTr=Dt(),$Tr=$(),QTr=ZTr-1;function KTr(){var r=$Tr(1+QTr*Math.random());return r>>>0}wR.exports=KTr});var F1=s((Cve,RR)=>{"use strict";var ue=w(),Qe=P(),ER=F(),S1=O(),rIr=I(),eIr=jr(),NR=Kr(),tIr=fr().isPrimitive,AR=re().isPrimitive,_R=En(),LR=Dt(),yr=lr(),iIr=E1(),R1=AP(),hi=$e(),nIr=M(),br=q(),OR=O1(),ar=624,T1=397,SR=LR>>>0,aIr=19650218>>>0,I1=2147483648>>>0,_1=2147483647>>>0,sIr=1812433253>>>0,uIr=1664525>>>0,oIr=1566083941>>>0,vIr=2636928640>>>0,fIr=4022730752>>>0,cIr=2567483615>>>0,L1=[0>>>0,cIr>>>0],PR=1/(_R+1),lIr=67108864>>>0,pIr=2147483648>>>0,P1=1>>>0,gIr=_R*PR,r0=1,e0=3,Ke=2,rt=ar+3,qr=ar+5,Ln=ar+6;function TR(r,e){var t;return e?t="option":t="argument",r.length<Ln+1?new RangeError(br("invalid %s. `state` array has insufficient length.",t)):r[0]!==r0?new RangeError(br("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,r0,r[0])):r[1]!==e0?new RangeError(br("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,e0,r[1])):r[Ke]!==ar?new RangeError(br("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ar,r[Ke])):r[rt]!==1?new RangeError(br("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[rt])):r[qr]!==r.length-Ln?new RangeError(br("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Ln,r[qr])):null}function IR(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=R1(t,sIr)+i>>>0;return r}function mIr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=iIr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=R1(n,uIr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=R1(n,oIr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=pIr,r}function dIr(r){var e,t,i,n;for(n=ar-T1,t=0;t<n;t++)e=r[t]&I1|r[t+1]&_1,r[t]=r[t+T1]^e>>>1^L1[e&P1];for(i=ar-1;t<i;t++)e=r[t]&I1|r[t+1]&_1,r[t]=r[t-n]^e>>>1^L1[e&P1];return e=r[i]&I1|r[0]&_1,r[i]=r[T1-1]^e>>>1^L1[e&P1],r}function hIr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!rIr(r))throw new TypeError(br("invalid argument. Options argument must be an object. Value: `%s`.",r));if(S1(r,"copy")&&(i.copy=r.copy,!tIr(r.copy)))throw new TypeError(br("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(S1(r,"state")){if(t=r.state,i.state=!0,!NR(t))throw new TypeError(br("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=TR(t,!0),u)throw u;i.copy===!1?e=t:(e=new yr(t.length),hi(t.length,t,1,e,1)),t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(qr+1)*e.BYTES_PER_ELEMENT,t[qr])}if(n===void 0)if(S1(r,"seed"))if(n=r.seed,i.seed=!0,AR(n)){if(n>SR)throw new RangeError(br("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(eIr(n)===!1||n.length<1)throw new TypeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!AR(n))throw new TypeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>SR)throw new RangeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new yr(Ln+a),e[0]=r0,e[1]=e0,e[Ke]=ar,e[rt]=1,e[rt+1]=ar,e[qr]=a,hi.ndarray(a,n,1,0,e,1,qr+1),t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(qr+1)*e.BYTES_PER_ELEMENT,a),t=IR(t,ar,aIr),t=mIr(t,ar,n,a)}else n=OR()>>>0}else n=OR()>>>0;return t===void 0&&(e=new yr(Ln+1),e[0]=r0,e[1]=e0,e[Ke]=ar,e[rt]=1,e[rt+1]=ar,e[qr]=1,e[qr+1]=n,t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(qr+1)*e.BYTES_PER_ELEMENT,1),t=IR(t,ar,n)),ue(h,"NAME","mt19937"),Qe(h,"seed",o),Qe(h,"seedLength",f),ER(h,"state",l,p),Qe(h,"stateLength",v),Qe(h,"byteLength",c),ue(h,"toJSON",m),ue(h,"MIN",0),ue(h,"MAX",LR),ue(h,"normalized",d),ue(d,"NAME",h.NAME),Qe(d,"seed",o),Qe(d,"seedLength",f),ER(d,"state",l,p),Qe(d,"stateLength",v),Qe(d,"byteLength",c),ue(d,"toJSON",m),ue(d,"MIN",0),ue(d,"MAX",gIr),h;function o(){var g=e[qr];return hi(g,n,1,new yr(g),1)}function f(){return e[qr]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return hi(g,e,1,new yr(g),1)}function p(g){var y;if(!NR(g))throw new TypeError(br("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(y=TR(g,!1),y)throw y;i.copy===!1?i.state&&g.length===e.length?hi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new yr(g.length)),hi(g.length,g,1,e,1)),t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(qr+1)*e.BYTES_PER_ELEMENT,e[qr])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=nIr(e),g.params=[],g}function h(){var g,y;return y=e[rt+1],y>=ar&&(t=dIr(t),y=0),g=t[y],e[rt+1]=y+1,g^=g>>>11,g^=g<<7&vIr,g^=g<<15&fIr,g^=g>>>18,g>>>0}function d(){var g=h()>>>5,y=h()>>>6;return(g*lIr+y)*PR}}RR.exports=hIr});var MR=s((Gve,FR)=>{"use strict";var yIr=F1(),qIr=O1(),bIr=yIr({seed:qIr()});FR.exports=bIr});var z=s((Vve,kR)=>{"use strict";var wIr=w(),BR=MR(),EIr=F1();wIr(BR,"factory",EIr);kR.exports=BR});var VR=s((Uve,GR)=>{"use strict";var jR=j().isPrimitive,M1=q(),CR=sr();function NIr(r,e){return!jR(r)||CR(r)?new TypeError(M1("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!jR(e)||CR(e)?new TypeError(M1("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(M1("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}GR.exports=NIr});var HR=s((Hve,UR)=>{"use strict";var AIr=H(),OIr=jt(),SIr=Ra();function TIr(r,e,t){return e+AIr(OIr(SIr*r()),2)*(t-e)}UR.exports=TIr});var B1=s((Wve,ZR)=>{"use strict";var oe=w(),t0=P(),WR=F(),zR=I(),DR=L(),XR=O(),JR=S(),IIr=C(),i0=z().factory,xR=E(),_Ir=M(),n0=q(),LIr=VR(),YR=HR();function PIr(){var r,e,t,i,n,a;if(arguments.length===0)e=i0();else if(arguments.length===1){if(r=arguments[0],!zR(r))throw new TypeError(n0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(XR(r,"prng")){if(!DR(r.prng))throw new TypeError(n0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=i0(r)}else{if(n=arguments[0],a=arguments[1],i=LIr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!zR(r))throw new TypeError(n0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(XR(r,"prng")){if(!DR(r.prng))throw new TypeError(n0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=i0(r)}else e=i0()}return n===void 0?t=h:t=m,oe(t,"NAME","arcsine"),r&&r.prng?(oe(t,"seed",null),oe(t,"seedLength",null),WR(t,"state",JR(null),IIr),oe(t,"stateLength",null),oe(t,"byteLength",null),oe(t,"toJSON",JR(null)),oe(t,"PRNG",e)):(t0(t,"seed",u),t0(t,"seedLength",o),WR(t,"state",c,l),t0(t,"stateLength",f),t0(t,"byteLength",v),oe(t,"toJSON",p),oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=_Ir(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return YR(e,n,a)}function h(d,g){return xR(d)||xR(g)||d>=g?NaN:YR(e,d,g)}}ZR.exports=PIr});var QR=s((zve,$R)=>{"use strict";var RIr=B1(),FIr=RIr();$R.exports=FIr});var eF=s((Dve,rF)=>{"use strict";var MIr=w(),KR=QR(),BIr=B1();MIr(KR,"factory",BIr);rF.exports=KR});var k1=s((Xve,uF)=>{"use strict";var ve=w(),a0=P(),tF=F(),iF=I(),kIr=rn().isPrimitive,nF=L(),aF=O(),sF=S(),jIr=C(),s0=z().factory,CIr=E(),GIr=M(),u0=q();function VIr(){var r,e,t,i;if(arguments.length===0)e=s0();else if(arguments.length===1&&iF(arguments[0]))if(r=arguments[0],aF(r,"prng")){if(!nF(r.prng))throw new TypeError(u0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=s0(r);else{if(i=arguments[0],!kIr(i))throw new TypeError(u0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!iF(r))throw new TypeError(u0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(aF(r,"prng")){if(!nF(r.prng))throw new TypeError(u0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=s0(r)}else e=s0()}return i===void 0?t=p:t=l,ve(t,"NAME","bernoulli"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),tF(t,"state",sF(null),jIr),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",sF(null)),ve(t,"PRNG",e)):(a0(t,"seed",n),a0(t,"seedLength",a),tF(t,"state",f,v),a0(t,"stateLength",u),a0(t,"byteLength",o),ve(t,"toJSON",c),ve(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=GIr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return CIr(m)||m<0||m>1?NaN:e()<=m?1:0}}uF.exports=VIr});var vF=s((Jve,oF)=>{"use strict";var UIr=k1(),HIr=UIr();oF.exports=HIr});var lF=s((xve,cF)=>{"use strict";var WIr=w(),fF=vF(),zIr=k1();WIr(fF,"factory",zIr);cF.exports=fF});var dF=s((Yve,mF)=>{"use strict";var DIr=G(),pF=ir(),XIr=R(),gF=.00991256303526217;function JIr(r,e){var t,i,n;for(i=pF(-.5*e*e),t=[],t.push(gF/i),t.push(e),n=2;n<r;n++)t[n]=DIr(-2*XIr(gF/t[n-1]+i)),i=pF(-.5*t[n]*t[n]);return t.push(0),t}mF.exports=JIr});var yF=s((Zve,hF)=>{"use strict";function xIr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}hF.exports=xIr});var wF=s(($ve,bF)=>{"use strict";var qF=R();function YIr(r,e,t){var i,n;do i=qF(r())/e,n=qF(r());while(-2*n<i*i);return t?i-e:e-i}bF.exports=YIr});var OF=s((Qve,AF)=>{"use strict";var ZIr=Y(),EF=ir(),$Ir=dF(),QIr=yF(),KIr=wF(),r_r=128,NF=3.442619855899,Gt=$Ir(r_r,NF),e_r=QIr(Gt),t_r=127;function i_r(r,e){return t;function t(){for(var i,n,a,u,o,f,v;;){if(o=2*r()-1,f=e()&t_r,ZIr(o)<e_r[f])return o*Gt[f];if(f===0)return KIr(r,NF,o<0);if(u=o*Gt[f],a=u*u,v=f+1,i=EF(-.5*(Gt[f]*Gt[f]-a)),n=EF(-.5*(Gt[v]*Gt[v]-a)),n+r()*(i-n)<1)return u}}}AF.exports=i_r});var C1=s((Kve,IF)=>{"use strict";var et=w(),o0=P(),SF=F(),n_r=L(),a_r=I(),s_r=fr().isPrimitive,v0=O(),u_r=Kr(),j1=z().factory,TF=S(),o_r=C(),v_r=$(),f_r=Dt(),c_r=M(),Pn=q(),l_r=OF();function p_r(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!a_r(r))throw new TypeError(Pn("invalid argument. Must provide an object. Value: `%s`.",r));if(v0(r,"copy")&&(n.copy=r.copy,!s_r(r.copy)))throw new TypeError(Pn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(v0(r,"prng")){if(!n_r(r.prng))throw new TypeError(Pn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(v0(r,"state")){if(n.state=r.state,!u_r(r.state))throw new TypeError(Pn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(v0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Pn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=j1(n),e=t.normalized):(t=j1({seed:v_r(1+f_r*e()),copy:n.copy}),n.seed=null):(t=j1(n),e=t.normalized),i=l_r(e,t),et(i,"NAME","improved-ziggurat"),n.seed===null?(et(i,"seed",null),et(i,"seedLength",null)):(o0(i,"seed",a),o0(i,"seedLength",u)),r&&r.prng?(SF(i,"state",TF(null),o_r),et(i,"stateLength",null),et(i,"byteLength",null),et(i,"toJSON",TF(null))):(SF(i,"state",v,c),o0(i,"stateLength",o),o0(i,"byteLength",f),et(i,"toJSON",l)),et(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=c_r(t.state),p.params=[],p}}IF.exports=p_r});var LF=s((rfe,_F)=>{"use strict";var g_r=C1(),m_r=g_r();_F.exports=m_r});var tt=s((efe,RF)=>{"use strict";var d_r=w(),PF=LF(),h_r=C1();d_r(PF,"factory",h_r);RF.exports=PF});var MF=s((tfe,FF)=>{"use strict";var y_r=L(),q_r=y_r(Object.assign);FF.exports=q_r});var kF=s((ife,BF)=>{"use strict";var b_r=Object.assign;BF.exports=b_r});var CF=s((nfe,jF)=>{"use strict";var w_r=typeof Object.getOwnPropertySymbols<"u";jF.exports=w_r});var UF=s((afe,VF)=>{"use strict";var GF=ai(),E_r=GF.getOwnPropertySymbols;function N_r(r){return E_r(GF(r))}VF.exports=N_r});var WF=s((sfe,HF)=>{"use strict";function A_r(){return[]}HF.exports=A_r});var DF=s((ufe,zF)=>{"use strict";var O_r=CF(),S_r=UF(),T_r=WF(),G1;O_r?G1=S_r:G1=T_r;zF.exports=G1});var JF=s((ofe,XF)=>{"use strict";var I_r=nn(),__r=DF(),L_r=tn();function P_r(r){var e,t,i;for(e=I_r(r),t=__r(r),i=0;i<t.length;i++)L_r(r,t[i])&&e.push(t[i]);return e}XF.exports=P_r});var YF=s((vfe,xF)=>{"use strict";var R_r=JF();xF.exports=R_r});var QF=s((ffe,$F)=>{"use strict";var F_r=YF(),ZF=ai(),M_r=q();function B_r(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(M_r("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=ZF(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=F_r(ZF(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}$F.exports=B_r});var Rn=s((cfe,KF)=>{"use strict";var k_r=MF(),j_r=kF(),C_r=QF(),V1;k_r?V1=j_r:V1=C_r;KF.exports=V1});var iM=s((lfe,tM)=>{"use strict";var rM=W().isPrimitive,eM=q();function G_r(r,e){return rM(r)?rM(e)?null:new TypeError(eM("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(eM("invalid argument. First argument must be a positive number. Value: `%s`.",r))}tM.exports=G_r});var oM=s((pfe,uM)=>{"use strict";var nM=R(),aM=G(),V_r=H(),sM=1/3;function U_r(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(t<1?(f=t+1-sM,o=1/aM(9*f),c=V_r(r(),1/t)):(f=t-sM,o=1/aM(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,u=.5*n+f*(1-p+nM(p)),l=r(),(l<a||nM(l)<u)&&(i=!1)}return f*p*c}uM.exports=U_r});var cM=s((gfe,fM)=>{"use strict";var U1=H(),vM=R();function H_r(r,e,t){var i,n,a,u,o,f,v,c;for(a=t-1,o=U1(a+a,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=U1(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*U1(n/(8*t-8),2),f<c&&(c=a*vM(4*v*(1-v)),c+=u*u/2,c>=vM(f)&&(i=!1))));return v}fM.exports=H_r});var pM=s((mfe,lM)=>{"use strict";var W_r=H(),f0=R();function z_r(r,e,t,i){var n,a,u,o,f,v,c,l,p,m,h;for(o=t-1,f=i-1,v=o+f,c=v*f0(v),u=o/v,n=.5/W_r(v,.5),a=!0;a===!0;)l=e(),m=u+l*n,m>=0&&m<=1&&(p=r(),h=o*f0(m/o),h+=f*f0((1-m)/f),h+=c+.5*l*l,h>=f0(p)&&(a=!1));return m}lM.exports=z_r});var dM=s((dfe,mM)=>{"use strict";var H1=ir(),gM=H(),W1=R();function D_r(r,e,t){for(var i,n,a,u,o,f,v;;)if(u=r(),o=r(),f=gM(u,1/e),v=gM(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=W1(u)/e,n=W1(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),H1(i-W1(H1(i)+H1(n))))}mM.exports=D_r});var qM=s((hfe,yM)=>{"use strict";var hM=oM(),X_r=cM(),J_r=pM(),x_r=dM();function Y_r(r,e,t,i){var n,a;return t===i&&t>1.5?X_r(r,e,t):t>1&&i>1?J_r(r,e,t,i):t<1&&i<1?x_r(r,t,i):(n=hM(r,e,t),a=hM(r,e,i),n/(n+a))}yM.exports=Y_r});var J1=s((yfe,_M)=>{"use strict";var fe=w(),c0=P(),bM=F(),wM=I(),EM=fr().isPrimitive,NM=L(),yi=O(),AM=S(),Z_r=C(),OM=tt().factory,l0=z().factory,SM=E(),z1=$e(),D1=lr(),X1=Kr(),TM=Rn(),$_r=M(),ce=q(),Q_r=iM(),IM=qM();function K_r(){var r,e,t,i,n,a,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=l0(n);else if(arguments.length===1){if(n=arguments[0],!wM(n))throw new TypeError(ce("invalid argument. Options argument must be an object. Value: `%s`.",n));if(yi(n,"copy")&&!EM(n.copy))throw new TypeError(ce("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(yi(n,"prng")){if(!NM(n.prng))throw new TypeError(ce("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(yi(n,"state")&&!X1(n.state))throw new TypeError(ce("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=TM({},n),n.copy===!1?o=!1:n.state&&(n.state=z1(n.state.length,n.state,1,new D1(n.state.length),1)),n.copy=!1,a=l0(n)}}else{if(t=arguments[0],i=arguments[1],f=Q_r(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!wM(n))throw new TypeError(ce("invalid argument. Options argument must be an object. Value: `%s`.",n));if(yi(n,"copy")&&!EM(n.copy))throw new TypeError(ce("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(yi(n,"prng")){if(!NM(n.prng))throw new TypeError(ce("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(yi(n,"state")&&!X1(n.state))throw new TypeError(ce("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=TM({},n),n.copy===!1?o=!1:n.state&&(n.state=z1(n.state.length,n.state,1,new D1(n.state.length),1)),n.copy=!1,a=l0(n)}}else n={copy:!1},a=l0(n)}return n&&n.prng?e=OM({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=OM({state:r,copy:!1})),t===void 0?u=y:u=g,fe(u,"NAME","beta"),n&&n.prng?(fe(u,"seed",null),fe(u,"seedLength",null),bM(u,"state",AM(null),Z_r),fe(u,"stateLength",null),fe(u,"byteLength",null),fe(u,"toJSON",AM(null)),fe(u,"PRNG",a)):(c0(u,"seed",v),c0(u,"seedLength",c),bM(u,"state",m,h),c0(u,"stateLength",l),c0(u,"byteLength",p),fe(u,"toJSON",d),fe(u,"PRNG",a),a=a.normalized),u;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function h(N){if(!X1(N))throw new TypeError(ce("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=z1(N.length,N,1,new D1(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=$_r(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return IM(a,e,t,i)}function y(N,A){return SM(N)||SM(A)||N<=0||A<=0?NaN:IM(a,e,N,A)}}_M.exports=K_r});var PM=s((qfe,LM)=>{"use strict";var rLr=J1(),eLr=rLr();LM.exports=eLr});var MM=s((bfe,FM)=>{"use strict";var tLr=w(),RM=PM(),iLr=J1();tLr(RM,"factory",iLr);FM.exports=RM});var CM=s((wfe,jM)=>{"use strict";var BM=W().isPrimitive,kM=q();function nLr(r,e){return BM(r)?BM(e)?null:new TypeError(kM("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(kM("invalid argument. First argument must be a positive number. Value: `%s`.",r))}jM.exports=nLr});var UM=s((Efe,VM)=>{"use strict";var GM=R();function aLr(r,e,t,i,n){var a,u,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+GM(l)),c=r(),(c<o||GM(c)<f)&&(a=!1)}return 1/t*i*l}VM.exports=aLr});var Q1=s((Nfe,$M)=>{"use strict";var le=w(),p0=P(),HM=F(),WM=I(),x1=Kr(),zM=fr().isPrimitive,DM=L(),qi=O(),XM=S(),sLr=C(),JM=tt().factory,g0=z().factory,xM=E(),Y1=G(),YM=H(),Z1=$e(),$1=lr(),uLr=M(),ZM=Rn(),pe=q(),oLr=CM(),m0=UM(),d0=1/3;function vLr(){var r,e,t,i,n,a,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=g0(n);else if(arguments.length===1){if(n=arguments[0],!WM(n))throw new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(qi(n,"copy")&&!zM(n.copy))throw new TypeError(pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(qi(n,"prng")){if(!DM(n.prng))throw new TypeError(pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(qi(n,"state")&&!x1(n.state))throw new TypeError(pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=ZM({},n),n.copy===!1?o=!1:n.state&&(n.state=Z1(n.state.length,n.state,1,new $1(n.state.length),1)),n.copy=!1,a=g0(n)}}else{if(e=arguments[0],i=arguments[1],f=oLr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!WM(n))throw new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(qi(n,"copy")&&!zM(n.copy))throw new TypeError(pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(qi(n,"prng")){if(!DM(n.prng))throw new TypeError(pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(qi(n,"state")&&!x1(n.state))throw new TypeError(pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=ZM({},n),n.copy===!1?o=!1:n.state&&(n.state=Z1(n.state.length,n.state,1,new $1(n.state.length),1)),n.copy=!1,a=g0(n)}}else n={copy:!1},a=g0(n)}return n&&n.prng?t=JM({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=JM({state:r,copy:!1})),e===void 0?u=k:(e>=1?(u=N,c=e-d0):(u=A,c=e+1-d0),v=1/Y1(9*c)),le(u,"NAME","gamma"),n&&n.prng?(le(u,"seed",null),le(u,"seedLength",null),HM(u,"state",XM(null),sLr),le(u,"stateLength",null),le(u,"byteLength",null),le(u,"toJSON",XM(null)),le(u,"PRNG",a)):(p0(u,"seed",l),p0(u,"seedLength",p),HM(u,"state",d,g),p0(u,"stateLength",m),p0(u,"byteLength",h),le(u,"toJSON",y),le(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function g(T){if(!x1(T))throw new TypeError(pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",T));o&&(T=Z1(T.length,T,1,new $1(T.length),1)),a.state=T}function y(){var T={};return T.type="PRNG",T.name=u.NAME,T.state=uLr(a.state),e===void 0?T.params=[]:T.params=[e,i],T}function N(){return m0(a,t,i,c,v)}function A(){return m0(a,t,i,c,v)*YM(a(),1/e)}function k(T,D){var vr,Z;return xM(T)||xM(D)||T<=0||D<=0?NaN:T<1?(Z=T+1-d0,vr=1/Y1(9*Z),m0(a,t,D,Z,vr)*YM(a(),1/T)):(Z=T-d0,vr=1/Y1(9*Z),m0(a,t,D,Z,vr))}}$M.exports=vLr});var KM=s((Afe,QM)=>{"use strict";var fLr=Q1(),cLr=fLr();QM.exports=cLr});var bi=s((Ofe,eB)=>{"use strict";var lLr=w(),rB=KM(),pLr=Q1();lLr(rB,"factory",pLr);eB.exports=rB});var aB=s((Sfe,nB)=>{"use strict";var tB=W().isPrimitive,iB=q();function gLr(r,e){return tB(r)?tB(e)?null:new TypeError(iB("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(iB("invalid argument. First argument must be a positive number. Value: `%s`.",r))}nB.exports=gLr});var uB=s((Tfe,sB)=>{"use strict";function mLr(r,e,t){return r(e,1)/r(t,1)}sB.exports=mLr});var K1=s((Ife,gB)=>{"use strict";var it=w(),h0=P(),oB=F(),vB=I(),fB=S(),dLr=C(),y0=bi().factory,cB=E(),hLr=M(),lB=q(),yLr=aB(),pB=uB();function qLr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=y0();else if(arguments.length===1){if(i=arguments[0],!vB(i))throw new TypeError(lB("invalid argument. Options argument must be an object. Value: `%s`.",i));r=y0(i)}else{if(e=arguments[0],t=arguments[1],u=yLr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!vB(i))throw new TypeError(lB("invalid argument. Options argument must be an object. Value: `%s`.",i));r=y0(i)}else r=y0()}return e===void 0?a=d:a=h,n=r.PRNG,it(a,"NAME","betaprime"),i&&i.prng?(it(a,"seed",null),it(a,"seedLength",null),oB(a,"state",fB(null),dLr),it(a,"stateLength",null),it(a,"byteLength",null),it(a,"toJSON",fB(null))):(h0(a,"seed",o),h0(a,"seedLength",f),oB(a,"state",l,p),h0(a,"stateLength",v),h0(a,"byteLength",c),it(a,"toJSON",m)),it(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=hLr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return pB(r,e,t)}function d(g,y){return cB(g)||cB(y)||g<=0||y<=0?NaN:pB(r,g,y)}}gB.exports=qLr});var dB=s((_fe,mB)=>{"use strict";var bLr=K1(),wLr=bLr();mB.exports=wLr});var qB=s((Lfe,yB)=>{"use strict";var ELr=w(),hB=dB(),NLr=K1();ELr(hB,"factory",NLr);yB.exports=hB});var wB=s((Pfe,bB)=>{"use strict";var ALr=$();function OLr(r){return ALr(r)===r&&r>0}bB.exports=OLr});var r3=s((Rfe,EB)=>{"use strict";var SLr=wB();EB.exports=SLr});var AB=s((Ffe,NB)=>{"use strict";function TLr(r){return r>=0&&r<=1}NB.exports=TLr});var SB=s((Mfe,OB)=>{"use strict";var ILr=AB();OB.exports=ILr});var _B=s((Bfe,IB)=>{"use strict";var _Lr=re().isPrimitive,LLr=rn().isPrimitive,TB=q();function PLr(r,e){return _Lr(r)?LLr(e)?null:new TypeError(TB("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(TB("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}IB.exports=PLr});var PB=s((kfe,LB)=>{"use strict";function RLr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}LB.exports=RLr});var FB=s((jfe,RB)=>{"use strict";var FLr=E();function MLr(r){return r===0||FLr(r)?r:r<0?-1:1}RB.exports=MLr});var q0=s((Cfe,MB)=>{"use strict";var BLr=FB();MB.exports=BLr});var kB=s((Gfe,BB)=>{"use strict";var kLr=H(),jLr=1/12,CLr=1/360,GLr=1/1260;function VLr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=kLr(r,2),(jLr-(CLr-GLr/e)/e)/r}}BB.exports=VLr});var CB=s((Vfe,jB)=>{"use strict";var e3=$(),ULr=q0(),HLr=G(),t3=Y(),b0=R(),w0=kB(),WLr=1/6;function zLr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,y,N,A,k,T,D,vr,Z,gu,zr,pr,Dn;for(D=e3((e+1)*t),v=e-D+1,vr=1-t,Z=t/vr,c=(e+1)*Z,u=e*t*vr,a=HLr(u),g=1.15+2.53*a,d=-.0873+.0248*g+.01*t,y=e*t+.5,i=(2.83+5.1/g)*a,h=.92-4.2/g,n=.86*h,A=(D+.5)*b0((D+1)/(Z*v)),A+=w0(D)+w0(e-D);;){if(pr=r(),pr<=n)return zr=pr/h-.43,Z=zr*(2*d/(.5-t3(zr))+g)+y,e3(Z);if(pr>=h?zr=r()-.5:(zr=pr/h-.93,zr=ULr(zr)*.5-zr,pr=h*r()),l=.5-t3(zr),T=e3(zr*(2*d/l+g)+y),!(T<0||T>e))if(pr=pr*i/(d/(l*l)+g),p=t3(T-D),p>15){if(pr=b0(pr),o=p/u,f=(p/3+.625)*p,f+=WLr,f/=u,o*=f+.5,gu=-(p*p)/(2*u),pr<gu-o||pr<=gu+o&&(m=e-T+1,Dn=A+(e+1)*b0(v/m),Dn+=(T+.5)*b0(m*Z/(T+1)),Dn+=-(w0(T)+w0(e-T)),pr<=Dn))return T}else{if(N=1,D<T)for(k=D;k<=T;k++)N*=c/k-Z;else if(D>T)for(k=T;k<=D;k++)pr*=c/k-Z;if(pr<=N)return T}}}jB.exports=zLr});var UB=s((Ufe,VB)=>{"use strict";var DLr=PB(),XLr=CB();function GB(r,e,t){return t>.5?e-GB(r,e,1-t):e*t<10?DLr(r,e,t):XLr(r,e,t)}VB.exports=GB});var i3=s((Hfe,YB)=>{"use strict";var ge=w(),E0=P(),HB=F(),WB=I(),zB=L(),DB=O(),XB=S(),JLr=C(),JB=E(),xLr=r3(),YLr=SB(),N0=z().factory,ZLr=M(),A0=q(),$Lr=_B(),xB=UB();function QLr(){var r,e,t,i,n,a;if(arguments.length===0)e=N0();else if(arguments.length===1){if(r=arguments[0],!WB(r))throw new TypeError(A0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(DB(r,"prng")){if(!zB(r.prng))throw new TypeError(A0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=N0(r)}else{if(n=arguments[0],a=arguments[1],i=$Lr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!WB(r))throw new TypeError(A0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(DB(r,"prng")){if(!zB(r.prng))throw new TypeError(A0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=N0(r)}else e=N0()}return n===void 0?t=h:t=m,ge(t,"NAME","binomial"),r&&r.prng?(ge(t,"seed",null),ge(t,"seedLength",null),HB(t,"state",XB(null),JLr),ge(t,"stateLength",null),ge(t,"byteLength",null),ge(t,"toJSON",XB(null)),ge(t,"PRNG",e)):(E0(t,"seed",u),E0(t,"seedLength",o),HB(t,"state",c,l),E0(t,"stateLength",f),E0(t,"byteLength",v),ge(t,"toJSON",p),ge(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=ZLr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return xB(e,n,a)}function h(d,g){return JB(d)||JB(g)||!xLr(d)||!YLr(g)?NaN:xB(e,d,g)}}YB.exports=QLr});var $B=s((Wfe,ZB)=>{"use strict";var KLr=i3(),rPr=KLr();ZB.exports=rPr});var rk=s((zfe,KB)=>{"use strict";var ePr=w(),QB=$B(),tPr=i3();ePr(QB,"factory",tPr);KB.exports=QB});var tk=s((Dfe,ek)=>{"use strict";var iPr=G(),nPr=R(),aPr=jt(),sPr=kt(),uPr=Ye();function oPr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=iPr(-2*nPr(n)),o=uPr*a,t=u*sPr(o),e=!1,u*aPr(o)}return e=!0,t}}ek.exports=oPr});var nk=s((Xfe,ik)=>{"use strict";var vPr=G(),fPr=R(),cPr=kt(),lPr=Lr(),pPr=cPr(lPr);function gPr(r){var e=vPr(-2*fPr(r));return e*pPr}ik.exports=gPr});var sk=s((Jfe,ak)=>{"use strict";var mPr=G(),dPr=R(),hPr=kt(),yPr=Ye();function qPr(r){var e=mPr(-2*dPr(r)),t=yPr*r;return e*hPr(t)}ak.exports=qPr});var n3=s((xfe,fk)=>{"use strict";var Br=w(),O0=P(),uk=F(),bPr=I(),wPr=L(),EPr=fr().isPrimitive,Fn=O(),NPr=Kr(),ok=z().factory,vk=S(),APr=C(),OPr=M(),Mn=q(),SPr=tk(),TPr=nk(),IPr=sk();function _Pr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!bPr(r))throw new TypeError(Mn("invalid argument. Must provide an object. Value: `%s`.",r));if(Fn(r,"copy")&&(n.copy=r.copy,!EPr(r.copy)))throw new TypeError(Mn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Fn(r,"prng")){if(!wPr(r.prng))throw new TypeError(Mn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Fn(r,"state")){if(n.state=r.state,!NPr(r.state))throw new TypeError(Mn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Fn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Mn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=ok(n),e=i.normalized):n.seed=null:(i=ok(n),e=i.normalized),t=SPr(e),Br(t,"NAME","box-muller"),n.seed===null?(Br(t,"seed",null),Br(t,"seedLength",null)):(O0(t,"seed",a),O0(t,"seedLength",u)),r&&r.prng?(uk(t,"state",vk(null),APr),Br(t,"stateLength",null),Br(t,"byteLength",null),Br(t,"toJSON",vk(null))):(uk(t,"state",v,c),O0(t,"stateLength",o),O0(t,"byteLength",f),Br(t,"toJSON",l)),Br(t,"PRNG",e),Fn(e,"MIN")?(Br(t,"MIN",TPr(e.MIN)),Br(t,"MAX",IPr(e.MIN))):(Br(t,"MIN",null),Br(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=OPr(i.state),p.params=[],p}}fk.exports=_Pr});var lk=s((Yfe,ck)=>{"use strict";var LPr=n3(),PPr=LPr();ck.exports=PPr});var mk=s((Zfe,gk)=>{"use strict";var RPr=w(),pk=lk(),FPr=n3();RPr(pk,"factory",FPr);gk.exports=pk});var yk=s(($fe,hk)=>{"use strict";var MPr=j().isPrimitive,BPr=W().isPrimitive,dk=q(),kPr=sr();function jPr(r,e){return!MPr(r)||kPr(r)?new TypeError(dk("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):BPr(e)?null:new TypeError(dk("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}hk.exports=jPr});var bk=s((Qfe,qk)=>{"use strict";function CPr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}qk.exports=CPr});var Ek=s((Kfe,wk)=>{"use strict";function GPr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}wk.exports=GPr});var Ok=s((rce,Ak)=>{"use strict";var VPr=er(),Nk=ae(),UPr=bk(),HPr=Ek(),WPr=.7853981633974483,zPr=3061616997868383e-32,DPr=.3333333333333341,XPr=2147483647;function JPr(r,e,t){var i,n,a,u,o,f,v,c,l;return i=VPr(r),n=i&XPr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=WPr-r,c=zPr-e,r=l+c,e=0),l=r*r,c=l*l,u=UPr(c),v=l*HPr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=DPr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=Nk(c,0),v=u-(l-r),a=-1/c,f=Nk(a,0),o=1+f*l,f+a*(o+f*v))}Ak.exports=JPr});var Tk=s((ece,Sk)=>{"use strict";var xPr=Ok();Sk.exports=xPr});var Lk=s((tce,_k)=>{"use strict";var YPr=er(),Ik=Tk(),ZPr=dn(),a3=[0,0],$Pr=2147483647,QPr=1072243195,KPr=2146435072,rRr=1044381696;function eRr(r){var e,t;return e=YPr(r),e&=$Pr,e<=QPr?e<rRr?r:Ik(r,0,1):e>=KPr?NaN:(t=ZPr(r,a3),Ik(a3[0],a3[1],1-((t&1)<<1)))}_k.exports=eRr});var s3=s((ice,Pk)=>{"use strict";var tRr=Lk();Pk.exports=tRr});var Fk=s((nce,Rk)=>{"use strict";var iRr=s3(),nRr=Lr();function aRr(r,e,t){return e+t*iRr(nRr*(r()-.5))}Rk.exports=aRr});var u3=s((ace,Uk)=>{"use strict";var nt=w(),S0=P(),Mk=F(),Bk=I(),kk=L(),jk=O(),Ck=S(),sRr=C(),Gk=E(),wi=tt().factory,uRr=M(),T0=q(),oRr=yk(),Vk=Fk();function vRr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=wi();else if(arguments.length===1){if(t=arguments[0],!Bk(t))throw new TypeError(T0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(jk(t,"prng")){if(!kk(t.prng))throw new TypeError(T0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=wi({prng:t.prng})}else e=wi(t)}else{if(u=arguments[0],r=arguments[1],a=oRr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!Bk(t))throw new TypeError(T0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(jk(t,"prng")){if(!kk(t.prng))throw new TypeError(T0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=wi({prng:t.prng})}else e=wi(t)}else e=wi()}return u===void 0?n=d:n=h,i=e.PRNG,nt(n,"NAME","cauchy"),t&&t.prng?(nt(n,"seed",null),nt(n,"seedLength",null),Mk(n,"state",Ck(null),sRr),nt(n,"stateLength",null),nt(n,"byteLength",null),nt(n,"toJSON",Ck(null))):(S0(n,"seed",o),S0(n,"seedLength",f),Mk(n,"state",l,p),S0(n,"stateLength",v),S0(n,"byteLength",c),nt(n,"toJSON",m)),nt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=uRr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return Vk(e,u,r)}function d(g,y){return Gk(g)||Gk(y)||y<=0?NaN:Vk(e,g,y)}}Uk.exports=vRr});var Wk=s((sce,Hk)=>{"use strict";var fRr=u3(),cRr=fRr();Hk.exports=cRr});var Xk=s((uce,Dk)=>{"use strict";var lRr=w(),zk=Wk(),pRr=u3();lRr(zk,"factory",pRr);Dk.exports=zk});var o3=s((oce,Qk)=>{"use strict";var at=w(),I0=P(),Jk=F(),gRr=W().isPrimitive,xk=I(),Yk=L(),Zk=O(),$k=S(),mRr=C(),dRr=E(),Ei=bi().factory,hRr=M(),_0=q();function yRr(){var r,e,t,i,n;if(arguments.length===0)r=Ei();else if(arguments.length===1&&xk(arguments[0]))if(t=arguments[0],Zk(t,"prng")){if(!Yk(t.prng))throw new TypeError(_0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ei({prng:t.prng})}else r=Ei(t);else{if(n=arguments[0],!gRr(n))throw new TypeError(_0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!xk(t))throw new TypeError(_0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Zk(t,"prng")){if(!Yk(t.prng))throw new TypeError(_0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ei(n/2,.5,{prng:t.prng})}else r=Ei(n/2,.5,t)}else r=Ei(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,at(i,"NAME","chisquare"),t&&t.prng?(at(i,"seed",null),at(i,"seedLength",null),Jk(i,"state",$k(null),mRr),at(i,"stateLength",null),at(i,"byteLength",null),at(i,"toJSON",$k(null))):(I0(i,"seed",a),I0(i,"seedLength",u),Jk(i,"state",v,c),I0(i,"stateLength",o),I0(i,"byteLength",f),at(i,"toJSON",l)),at(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=hRr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function m(h){return dRr(h)||h<=0?NaN:r(h/2,.5)}}Qk.exports=yRr});var rj=s((vce,Kk)=>{"use strict";var qRr=o3(),bRr=qRr();Kk.exports=bRr});var Bn=s((fce,tj)=>{"use strict";var wRr=w(),ej=rj(),ERr=o3();wRr(ej,"factory",ERr);tj.exports=ej});var v3=s((cce,vj)=>{"use strict";var st=w(),L0=P(),ij=F(),NRr=W().isPrimitive,nj=I(),aj=L(),sj=O(),uj=S(),ARr=C(),ORr=E(),Ni=Bn().factory,SRr=M(),oj=G(),P0=q();function TRr(){var r,e,t,i,n;if(arguments.length===0)r=Ni();else if(arguments.length===1&&nj(arguments[0]))if(t=arguments[0],sj(t,"prng")){if(!aj(t.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ni({prng:t.prng})}else r=Ni(t);else{if(n=arguments[0],!NRr(n))throw new TypeError(P0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!nj(t))throw new TypeError(P0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(sj(t,"prng")){if(!aj(t.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ni(n,{prng:t.prng})}else r=Ni(n,t)}else r=Ni(n)}return n===void 0?i=m:i=p,e=r.PRNG,st(i,"NAME","chi"),t&&t.prng?(st(i,"seed",null),st(i,"seedLength",null),ij(i,"state",uj(null),ARr),st(i,"stateLength",null),st(i,"byteLength",null),st(i,"toJSON",uj(null))):(L0(i,"seed",a),L0(i,"seedLength",u),ij(i,"state",v,c),L0(i,"stateLength",o),L0(i,"byteLength",f),st(i,"toJSON",l)),st(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=SRr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return oj(r())}function m(h){return ORr(h)||h<=0?NaN:oj(r(h))}}vj.exports=TRr});var cj=s((lce,fj)=>{"use strict";var IRr=v3(),_Rr=IRr();fj.exports=_Rr});var gj=s((pce,pj)=>{"use strict";var LRr=w(),lj=cj(),PRr=v3();LRr(lj,"factory",PRr);pj.exports=lj});var hj=s((gce,dj)=>{"use strict";var RRr=j().isPrimitive,FRr=W().isPrimitive,mj=q(),MRr=sr();function BRr(r,e){return!RRr(r)||MRr(r)?new TypeError(mj("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):FRr(e)?null:new TypeError(mj("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}dj.exports=BRr});var qj=s((mce,yj)=>{"use strict";var f3=E(),kRr=Tn(),jRr=Lr();function CRr(r,e,t){var i;return f3(r)||f3(e)||f3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+kRr(i)/jRr)/2)}yj.exports=CRr});var Ej=s((dce,wj)=>{"use strict";var bj=E();function GRr(r,e){return bj(r)||bj(e)?NaN:r<e?0:1}wj.exports=GRr});var Oj=s((hce,Aj)=>{"use strict";var VRr=S(),Nj=E();function URr(r){if(Nj(r))return VRr(NaN);return e;function e(t){return Nj(t)?NaN:t<r?0:1}}Aj.exports=URr});var R0=s((yce,Tj)=>{"use strict";var HRr=w(),Sj=Ej(),WRr=Oj();HRr(Sj,"factory",WRr);Tj.exports=Sj});var _j=s((qce,Ij)=>{"use strict";var zRr=S(),DRr=R0().factory,c3=E(),XRr=Tn(),JRr=Lr();function xRr(r,e){if(c3(r)||c3(e)||e<0)return zRr(NaN);if(e===0)return DRr(r);return t;function t(i){var n;return c3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+XRr(n)/JRr)/2)}}Ij.exports=xRr});var Rj=s((bce,Pj)=>{"use strict";var YRr=w(),Lj=qj(),ZRr=_j();YRr(Lj,"factory",ZRr);Pj.exports=Lj});var l3=s((wce,Fj)=>{"use strict";var $Rr=Rj(),QRr=1e4,KRr=1e-12;function rFr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<QRr;){if(u=(i+n)/2,n-i<KRr)return u;a=$Rr(u,e,t),r>a?i=u:n=u,o+=1}return u}Fj.exports=rFr});var Bj=s((Ece,Mj)=>{"use strict";var p3=E(),eFr=l3();function tFr(r,e,t){return p3(e)||p3(t)||p3(r)||t<0||r<0||r>1?NaN:t===0?e:eFr(r,e,t)}Mj.exports=tFr});var jj=s((Nce,kj)=>{"use strict";var iFr=E();function nFr(r,e){return iFr(r)||r<0||r>1?NaN:e}kj.exports=nFr});var Vj=s((Ace,Gj)=>{"use strict";var aFr=S(),Cj=E();function sFr(r){if(Cj(r))return aFr(NaN);return e;function e(t){return Cj(t)||t<0||t>1?NaN:r}}Gj.exports=sFr});var g3=s((Oce,Hj)=>{"use strict";var uFr=w(),Uj=jj(),oFr=Vj();uFr(Uj,"factory",oFr);Hj.exports=Uj});var zj=s((Sce,Wj)=>{"use strict";var vFr=S(),fFr=g3().factory,m3=E(),cFr=l3();function lFr(r,e){if(m3(r)||m3(e)||e<0)return vFr(NaN);if(e===0)return fFr(r);return t;function t(i){return m3(i)||i<0||i>1?NaN:cFr(i,r,e)}}Wj.exports=lFr});var Jj=s((Tce,Xj)=>{"use strict";var pFr=w(),Dj=Bj(),gFr=zj();pFr(Dj,"factory",gFr);Xj.exports=Dj});var Yj=s((Ice,xj)=>{"use strict";var mFr=Jj();function dFr(r,e,t){return mFr(r(),e,t)}xj.exports=dFr});var d3=s((_ce,iC)=>{"use strict";var me=w(),F0=P(),Zj=F(),$j=I(),Qj=L(),Kj=O(),rC=S(),hFr=C(),M0=z().factory,eC=E(),yFr=M(),B0=q(),qFr=hj(),tC=Yj();function bFr(){var r,e,t,i,n,a;if(arguments.length===0)e=M0();else if(arguments.length===1){if(r=arguments[0],!$j(r))throw new TypeError(B0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Kj(r,"prng")){if(!Qj(r.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=M0(r)}else{if(n=arguments[0],a=arguments[1],i=qFr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!$j(r))throw new TypeError(B0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Kj(r,"prng")){if(!Qj(r.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=M0(r)}else e=M0()}return n===void 0?t=h:t=m,me(t,"NAME","cosine"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),Zj(t,"state",rC(null),hFr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",rC(null)),me(t,"PRNG",e)):(F0(t,"seed",u),F0(t,"seedLength",o),Zj(t,"state",c,l),F0(t,"stateLength",f),F0(t,"byteLength",v),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=yFr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return tC(e,n,a)}function h(d,g){return eC(d)||eC(g)||g<=0?NaN:tC(e,d,g)}}iC.exports=bFr});var aC=s((Lce,nC)=>{"use strict";var wFr=d3(),EFr=wFr();nC.exports=EFr});var oC=s((Pce,uC)=>{"use strict";var NFr=w(),sC=aC(),AFr=d3();NFr(sC,"factory",AFr);uC.exports=sC});var lC=s((Rce,cC)=>{"use strict";var vC=Cr().isPrimitive,h3=q(),fC=sr();function OFr(r,e){return!vC(r)||fC(r)?new TypeError(h3("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!vC(e)||fC(e)?new TypeError(h3("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(h3("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}cC.exports=OFr});var mC=s((Fce,gC)=>{"use strict";var y3=En(),Ai=$();function pC(r,e,t){var i,n,a,u,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(u=0;;){for(a===y3?(u=Ai(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Ai((a+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=pC(r,0,Ai(a/f)),!(l>y3/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===y3?(o=Ai(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Ai((n+1)/(a+1));;)if(i=r()-v,i=Ai(i/o),i<=a)return i+e}gC.exports=pC});var q3=s((Mce,NC)=>{"use strict";var de=w(),k0=P(),dC=F(),hC=I(),yC=L(),qC=O(),bC=S(),SFr=C(),j0=z().factory,wC=E(),Oi=Tr(),TFr=M(),ut=q(),IFr=lC(),EC=mC();function _Fr(){var r,e,t,i,n,a;if(arguments.length===0)e=j0();else if(arguments.length===1){if(r=arguments[0],!hC(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(qC(r,"prng")){if(!yC(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Oi(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Oi(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=j0(r)}else{if(n=arguments[0],a=arguments[1],i=IFr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!hC(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(qC(r,"prng")){if(!yC(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Oi(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Oi(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=j0(r)}else e=j0()}return n===void 0?t=h:t=m,de(t,"NAME","discrete-uniform"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),dC(t,"state",bC(null),SFr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",bC(null)),de(t,"PRNG",e)):(k0(t,"seed",u),k0(t,"seedLength",o),dC(t,"state",c,l),k0(t,"stateLength",f),k0(t,"byteLength",v),de(t,"toJSON",p),de(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=TFr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return EC(e,n,a)}function h(d,g){return wC(d)||wC(g)||!Oi(d)||!Oi(g)||d>g?NaN:EC(e,d,g)}}NC.exports=_Fr});var OC=s((Bce,AC)=>{"use strict";var LFr=q3(),PFr=LFr();AC.exports=PFr});var IC=s((kce,TC)=>{"use strict";var RFr=w(),SC=OC(),FFr=q3();RFr(SC,"factory",FFr);TC.exports=SC});var PC=s((jce,LC)=>{"use strict";var MFr=W().isPrimitive,BFr=re().isPrimitive,_C=q();function kFr(r,e){return BFr(r)?MFr(e)?null:new TypeError(_C("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(_C("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}LC.exports=kFr});var FC=s((Cce,RC)=>{"use strict";var jFr=R();function CFr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*jFr(i)}RC.exports=CFr});var b3=s((Gce,UC)=>{"use strict";var he=w(),C0=P(),MC=F(),BC=I(),kC=L(),jC=O(),CC=S(),GFr=C(),G0=z().factory,GC=E(),VFr=r3(),UFr=M(),V0=q(),HFr=PC(),VC=FC();function WFr(){var r,e,t,i,n,a;if(arguments.length===0)e=G0();else if(arguments.length===1){if(t=arguments[0],!BC(t))throw new TypeError(V0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(jC(t,"prng")){if(!kC(t.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=G0(t)}else{if(a=arguments[0],r=arguments[1],n=HFr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!BC(t))throw new TypeError(V0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(jC(t,"prng")){if(!kC(t.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=G0(t)}else e=G0()}return a===void 0?i=h:i=m,he(i,"NAME","erlang"),t&&t.prng?(he(i,"seed",null),he(i,"seedLength",null),MC(i,"state",CC(null),GFr),he(i,"stateLength",null),he(i,"byteLength",null),he(i,"toJSON",CC(null)),he(i,"PRNG",e)):(C0(i,"seed",u),C0(i,"seedLength",o),MC(i,"state",c,l),C0(i,"stateLength",f),C0(i,"byteLength",v),he(i,"toJSON",p),he(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=UFr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return VC(e,a,r)}function h(d,g){return GC(d)||GC(g)||!VFr(d)||g<=0?NaN:VC(e,d,g)}}UC.exports=WFr});var WC=s((Vce,HC)=>{"use strict";var zFr=b3(),DFr=zFr();HC.exports=DFr});var XC=s((Uce,DC)=>{"use strict";var XFr=w(),zC=WC(),JFr=b3();XFr(zC,"factory",JFr);DC.exports=zC});var xC=s((Hce,JC)=>{"use strict";var xFr=R();function YFr(r,e){return-xFr(1-r())/e}JC.exports=YFr});var w3=s((Wce,eG)=>{"use strict";var ye=w(),U0=P(),YC=F(),ZFr=W().isPrimitive,ZC=I(),$C=L(),QC=O(),KC=S(),$Fr=C(),H0=z().factory,QFr=E(),KFr=M(),W0=q(),rG=xC();function rMr(){var r,e,t,i;if(arguments.length===0)t=H0();else if(arguments.length===1&&ZC(arguments[0]))if(e=arguments[0],QC(e,"prng")){if(!$C(e.prng))throw new TypeError(W0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=H0(e);else{if(r=arguments[0],!ZFr(r))throw new TypeError(W0("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!ZC(e))throw new TypeError(W0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(QC(e,"prng")){if(!$C(e.prng))throw new TypeError(W0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=H0(e)}else t=H0()}return r===void 0?i=p:i=l,ye(i,"NAME","exponential"),e&&e.prng?(ye(i,"seed",null),ye(i,"seedLength",null),YC(i,"state",KC(null),$Fr),ye(i,"stateLength",null),ye(i,"byteLength",null),ye(i,"toJSON",KC(null)),ye(i,"PRNG",t)):(U0(i,"seed",n),U0(i,"seedLength",a),YC(i,"state",f,v),U0(i,"stateLength",u),U0(i,"byteLength",o),ye(i,"toJSON",c),ye(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=KFr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return rG(t,r)}function p(m){return QFr(m)||m<=0?NaN:rG(t,m)}}eG.exports=rMr});var iG=s((zce,tG)=>{"use strict";var eMr=w3(),tMr=eMr();tG.exports=tMr});var sG=s((Dce,aG)=>{"use strict";var iMr=w(),nG=iG(),nMr=w3();iMr(nG,"factory",nMr);aG.exports=nG});var fG=s((Xce,vG)=>{"use strict";var uG=W().isPrimitive,oG=q();function aMr(r,e){return uG(r)?uG(e)?null:new TypeError(oG("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(oG("invalid argument. First argument must be a positive number. Value: `%s`.",r))}vG.exports=aMr});var lG=s((Jce,cG)=>{"use strict";function sMr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}cG.exports=sMr});var E3=s((xce,bG)=>{"use strict";var ot=w(),z0=P(),pG=F(),gG=I(),mG=L(),dG=O(),hG=S(),uMr=C(),Si=Bn().factory,yG=E(),oMr=M(),D0=q(),vMr=fG(),qG=lG();function fMr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Si();else if(arguments.length===1){if(e=arguments[0],!gG(e))throw new TypeError(D0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(dG(e,"prng")){if(!mG(e.prng))throw new TypeError(D0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Si({prng:e.prng})}else r=Si(e)}else{if(a=arguments[0],u=arguments[1],n=vMr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!gG(e))throw new TypeError(D0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(dG(e,"prng")){if(!mG(e.prng))throw new TypeError(D0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Si({prng:e.prng})}else r=Si(e)}else r=Si()}return a===void 0?i=d:i=h,t=r.PRNG,ot(i,"NAME","f"),e&&e.prng?(ot(i,"seed",null),ot(i,"seedLength",null),pG(i,"state",hG(null),uMr),ot(i,"stateLength",null),ot(i,"byteLength",null),ot(i,"toJSON",hG(null))):(z0(i,"seed",o),z0(i,"seedLength",f),pG(i,"state",l,p),z0(i,"stateLength",v),z0(i,"byteLength",c),ot(i,"toJSON",m)),ot(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=oMr(t.state),a===void 0?g.params=[]:g.params=[a,u],g}function h(){return qG(r,a,u)}function d(g,y){return yG(g)||yG(y)||g<=0||y<=0?NaN:qG(r,g,y)}}bG.exports=fMr});var EG=s((Yce,wG)=>{"use strict";var cMr=E3(),lMr=cMr();wG.exports=lMr});var OG=s((Zce,AG)=>{"use strict";var pMr=w(),NG=EG(),gMr=E3();pMr(NG,"factory",gMr);AG.exports=NG});var IG=s(($ce,TG)=>{"use strict";var SG=W().isPrimitive,mMr=j().isPrimitive,N3=sr(),A3=q();function dMr(r,e,t){return!SG(r)||N3(r)?new TypeError(A3("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!SG(e)||N3(e)?new TypeError(A3("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!mMr(t)||N3(t)?new TypeError(A3("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}TG.exports=dMr});var LG=s((Qce,_G)=>{"use strict";var hMr=H(),yMr=R();function qMr(r,e,t,i){return i+t*hMr(-yMr(r()),-1/e)}_G.exports=qMr});var S3=s((Kce,jG)=>{"use strict";var qe=w(),X0=P(),PG=F(),RG=I(),FG=L(),MG=O(),BG=S(),bMr=C(),J0=z().factory,O3=E(),wMr=M(),x0=q(),EMr=IG(),kG=LG();function NMr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=J0();else if(arguments.length===1){if(e=arguments[0],!RG(e))throw new TypeError(x0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(MG(e,"prng")){if(!FG(e.prng))throw new TypeError(x0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=J0(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=EMr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!RG(e))throw new TypeError(x0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(MG(e,"prng")){if(!FG(e.prng))throw new TypeError(x0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=J0(e)}else t=J0()}return r===void 0?i=d:i=h,qe(i,"NAME","frechet"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),PG(i,"state",BG(null),bMr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",BG(null)),qe(i,"PRNG",t)):(X0(i,"seed",o),X0(i,"seedLength",f),PG(i,"state",l,p),X0(i,"stateLength",v),X0(i,"byteLength",c),qe(i,"toJSON",m),qe(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=wMr(t.state),r===void 0?g.params=[]:g.params=[r,a,u],g}function h(){return kG(t,r,a,u)}function d(g,y,N){return O3(g)||O3(y)||O3(N)||g<=0||y<=0?NaN:kG(t,g,y,N)}}jG.exports=NMr});var GG=s((rle,CG)=>{"use strict";var AMr=S3(),OMr=AMr();CG.exports=OMr});var HG=s((ele,UG)=>{"use strict";var SMr=w(),VG=GG(),TMr=S3();SMr(VG,"factory",TMr);UG.exports=VG});var DG=s((tle,zG)=>{"use strict";var IMr=$(),WG=R();function _Mr(r,e){var t=r();return t===0&&(t=r()),IMr(WG(t)/WG(1-e))}zG.exports=_Mr});var T3=s((ile,QG)=>{"use strict";var be=w(),Y0=P(),XG=F(),JG=I(),LMr=rn().isPrimitive,xG=L(),YG=O(),ZG=S(),PMr=C(),Z0=z().factory,RMr=E(),FMr=M(),$0=q(),$G=DG();function MMr(){var r,e,t,i;if(arguments.length===0)e=Z0();else if(arguments.length===1&&JG(arguments[0]))if(r=arguments[0],YG(r,"prng")){if(!xG(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r);else{if(i=arguments[0],!LMr(i))throw new TypeError($0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!JG(r))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(YG(r,"prng")){if(!xG(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else e=Z0()}return i===void 0?t=p:t=l,be(t,"NAME","geometric"),r&&r.prng?(be(t,"seed",null),be(t,"seedLength",null),XG(t,"state",ZG(null),PMr),be(t,"stateLength",null),be(t,"byteLength",null),be(t,"toJSON",ZG(null)),be(t,"PRNG",e)):(Y0(t,"seed",n),Y0(t,"seedLength",a),XG(t,"state",f,v),Y0(t,"stateLength",u),Y0(t,"byteLength",o),be(t,"toJSON",c),be(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=FMr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return $G(e,i)}function p(m){return RMr(m)||m<0||m>1?NaN:$G(e,m)}}QG.exports=MMr});var rV=s((nle,KG)=>{"use strict";var BMr=T3(),kMr=BMr();KG.exports=kMr});var iV=s((ale,tV)=>{"use strict";var jMr=w(),eV=rV(),CMr=T3();jMr(eV,"factory",CMr);tV.exports=eV});var sV=s((sle,aV)=>{"use strict";var GMr=j().isPrimitive,VMr=W().isPrimitive,nV=q(),UMr=sr();function HMr(r,e){return!GMr(r)||UMr(r)?new TypeError(nV("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):VMr(e)?null:new TypeError(nV("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}aV.exports=HMr});var vV=s((ule,oV)=>{"use strict";var uV=R();function WMr(r,e,t){return e-t*uV(-uV(r()))}oV.exports=WMr});var I3=s((ole,hV)=>{"use strict";var we=w(),Q0=P(),fV=F(),cV=I(),lV=L(),pV=O(),gV=S(),zMr=C(),K0=z().factory,mV=E(),DMr=M(),rs=q(),XMr=sV(),dV=vV();function JMr(){var r,e,t,i,n,a;if(arguments.length===0)t=K0();else if(arguments.length===1){if(e=arguments[0],!cV(e))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(pV(e,"prng")){if(!lV(e.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=K0(e)}else{if(a=arguments[0],r=arguments[1],n=XMr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!cV(e))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(pV(e,"prng")){if(!lV(e.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=K0(e)}else t=K0()}return a===void 0?i=h:i=m,we(i,"NAME","gumbel"),e&&e.prng?(we(i,"seed",null),we(i,"seedLength",null),fV(i,"state",gV(null),zMr),we(i,"stateLength",null),we(i,"byteLength",null),we(i,"toJSON",gV(null)),we(i,"PRNG",t)):(Q0(i,"seed",u),Q0(i,"seedLength",o),fV(i,"state",c,l),Q0(i,"stateLength",f),Q0(i,"byteLength",v),we(i,"toJSON",p),we(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=DMr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return dV(t,a,r)}function h(d,g){return mV(d)||mV(g)||g<=0?NaN:dV(t,d,g)}}hV.exports=JMr});var qV=s((vle,yV)=>{"use strict";var xMr=I3(),YMr=xMr();yV.exports=YMr});var EV=s((fle,wV)=>{"use strict";var ZMr=w(),bV=qV(),$Mr=I3();ZMr(bV,"factory",$Mr);wV.exports=bV});var AV=s((cle,NV)=>{"use strict";var QMr=$();function KMr(r){return QMr(r)===r&&r>=0}NV.exports=KMr});var SV=s((lle,OV)=>{"use strict";var rBr=AV();OV.exports=rBr});var IV=s((ple,TV)=>{"use strict";var _3=Ge().isPrimitive,kn=q();function eBr(r,e,t){return _3(r)?_3(e)?_3(t)?t>r?new RangeError(kn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(kn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(kn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(kn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(kn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}TV.exports=eBr});var _V=s((gle,tBr)=>{tBr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var PV=s((mle,LV)=>{"use strict";var iBr=E(),nBr=Tr(),aBr=gi(),sBr=_(),uBr=_V(),oBr=170;function vBr(r){return iBr(r)?NaN:nBr(r)?r<0?NaN:r<=oBr?uBr[r]:sBr:aBr(r+1)}LV.exports=vBr});var FV=s((dle,RV)=>{"use strict";var fBr=PV();RV.exports=fBr});var BV=s((hle,MV)=>{"use strict";var vt=FV();function cBr(r,e,t,i){var n,a,u;for(i<t?(n=vt(t)*vt(e+t-i)/(vt(e+t)*vt(t-i)),u=0):(n=vt(e)*vt(i)/(vt(i-t)*vt(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}MV.exports=cBr});var jV=s((yle,kV)=>{"use strict";var es=BV();function lBr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=es(r,n,a,u),t-o):(a=t,n=e-t,o=es(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=es(r,n,a,u),o):(n=e-t,a=t,o=es(r,n,a,u),i-o))}kV.exports=lBr});var P3=s((qle,DV)=>{"use strict";var Ee=w(),ts=P(),CV=F(),GV=I(),VV=L(),UV=O(),HV=S(),pBr=C(),is=z().factory,L3=SV(),WV=_(),gBr=M(),ns=q(),mBr=IV(),zV=jV();function dBr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=is();else if(arguments.length===1){if(r=arguments[0],!GV(r))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UV(r,"prng")){if(!VV(r.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=is(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=mBr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!GV(r))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UV(r,"prng")){if(!VV(r.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=is(r)}else e=is()}return n===void 0?t=d:t=h,Ee(t,"NAME","hypergeometric"),r&&r.prng?(Ee(t,"seed",null),Ee(t,"seedLength",null),CV(t,"state",HV(null),pBr),Ee(t,"stateLength",null),Ee(t,"byteLength",null),Ee(t,"toJSON",HV(null)),Ee(t,"PRNG",e)):(ts(t,"seed",o),ts(t,"seedLength",f),CV(t,"state",l,p),ts(t,"stateLength",v),ts(t,"byteLength",c),Ee(t,"toJSON",m),Ee(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=gBr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return zV(e,n,a,u)}function d(g,y,N){return g===WV||y===WV||!L3(g)||!L3(y)||!L3(N)||N>g?NaN:zV(e,g,y,N)}}DV.exports=dBr});var JV=s((ble,XV)=>{"use strict";var hBr=P3(),yBr=hBr();XV.exports=yBr});var ZV=s((wle,YV)=>{"use strict";var qBr=w(),xV=JV(),bBr=P3();qBr(xV,"factory",bBr);YV.exports=xV});var rU=s((Ele,KV)=>{"use strict";var $V=W().isPrimitive,QV=q();function wBr(r,e){return $V(r)?$V(e)?null:new TypeError(QV("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(QV("invalid argument. First argument must be a positive number. Value: `%s`.",r))}KV.exports=wBr});var R3=s((Nle,uU)=>{"use strict";var ft=w(),as=P(),eU=F(),tU=I(),iU=L(),nU=O(),aU=S(),EBr=C(),Ti=bi().factory,sU=E(),NBr=M(),ss=q(),ABr=rU();function OBr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Ti();else if(arguments.length===1){if(i=arguments[0],!tU(i))throw new TypeError(ss("invalid argument. Options argument must be an object. Value: `%s`.",i));if(nU(i,"prng")){if(!iU(i.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Ti({prng:i.prng})}else r=Ti(i)}else{if(e=arguments[0],t=arguments[1],u=ABr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!tU(i))throw new TypeError(ss("invalid argument. Options argument must be an object. Value: `%s`.",i));if(nU(i,"prng")){if(!iU(i.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Ti(e,t,{prng:i.prng})}else r=Ti(e,t,i)}else r=Ti(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,ft(a,"NAME","invgamma"),i&&i.prng?(ft(a,"seed",null),ft(a,"seedLength",null),eU(a,"state",aU(null),EBr),ft(a,"stateLength",null),ft(a,"byteLength",null),ft(a,"toJSON",aU(null))):(as(a,"seed",o),as(a,"seedLength",f),eU(a,"state",l,p),as(a,"stateLength",v),as(a,"byteLength",c),ft(a,"toJSON",m)),ft(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=NBr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return 1/r()}function d(g,y){return sU(g)||sU(y)||g<=0||y<=0?NaN:1/r(g,y)}}uU.exports=OBr});var vU=s((Ale,oU)=>{"use strict";var SBr=R3(),TBr=SBr();oU.exports=TBr});var lU=s((Ole,cU)=>{"use strict";var IBr=w(),fU=vU(),_Br=R3();IBr(fU,"factory",_Br);cU.exports=fU});var dU=s((Sle,mU)=>{"use strict";var pU=W().isPrimitive,gU=q();function LBr(r,e){return pU(r)?pU(e)?null:new TypeError(gU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(gU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}mU.exports=LBr});var qU=s((Tle,yU)=>{"use strict";var hU=H();function PBr(r,e,t){var i=r();return hU(1-hU(1-i,1/t),1/e)}yU.exports=PBr});var F3=s((Ile,TU)=>{"use strict";var Ne=w(),us=P(),bU=F(),wU=I(),EU=L(),NU=O(),AU=S(),RBr=C(),os=z().factory,OU=E(),FBr=M(),vs=q(),MBr=dU(),SU=qU();function BBr(){var r,e,t,i,n,a;if(arguments.length===0)e=os();else if(arguments.length===1){if(r=arguments[0],!wU(r))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(NU(r,"prng")){if(!EU(r.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=os(r)}else{if(n=arguments[0],a=arguments[1],i=MBr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!wU(r))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(NU(r,"prng")){if(!EU(r.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=os(r)}else e=os()}return n===void 0?t=h:t=m,Ne(t,"NAME","kumaraswamy"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),bU(t,"state",AU(null),RBr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",AU(null)),Ne(t,"PRNG",e)):(us(t,"seed",u),us(t,"seedLength",o),bU(t,"state",c,l),us(t,"stateLength",f),us(t,"byteLength",v),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=FBr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return SU(e,n,a)}function h(d,g){return OU(d)||OU(g)||d<=0||g<=0?NaN:SU(e,d,g)}}TU.exports=BBr});var _U=s((_le,IU)=>{"use strict";var kBr=F3(),jBr=kBr();IU.exports=jBr});var RU=s((Lle,PU)=>{"use strict";var CBr=w(),LU=_U(),GBr=F3();CBr(LU,"factory",GBr);PU.exports=LU});var BU=s((Ple,MU)=>{"use strict";var VBr=j().isPrimitive,UBr=W().isPrimitive,FU=q(),HBr=sr();function WBr(r,e){return!VBr(r)||HBr(r)?new TypeError(FU("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):UBr(e)?null:new TypeError(FU("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}MU.exports=WBr});var jU=s((Rle,kU)=>{"use strict";var zBr=q0(),DBr=Y(),XBr=R();function JBr(r,e,t){var i=r()-.5;return e-t*zBr(i)*XBr(1-2*DBr(i))}kU.exports=JBr});var M3=s((Fle,DU)=>{"use strict";var Ae=w(),fs=P(),CU=F(),GU=I(),VU=L(),UU=O(),HU=S(),xBr=C(),cs=z().factory,WU=E(),YBr=M(),ls=q(),ZBr=BU(),zU=jU();function $Br(){var r,e,t,i,n,a;if(arguments.length===0)e=cs();else if(arguments.length===1){if(r=arguments[0],!GU(r))throw new TypeError(ls("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UU(r,"prng")){if(!VU(r.prng))throw new TypeError(ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=cs(r)}else{if(n=arguments[0],a=arguments[1],i=ZBr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!GU(r))throw new TypeError(ls("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UU(r,"prng")){if(!VU(r.prng))throw new TypeError(ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=cs(r)}else e=cs()}return n===void 0?t=h:t=m,Ae(t,"NAME","laplace"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),CU(t,"state",HU(null),xBr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",HU(null)),Ae(t,"PRNG",e)):(fs(t,"seed",u),fs(t,"seedLength",o),CU(t,"state",c,l),fs(t,"stateLength",f),fs(t,"byteLength",v),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=YBr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return zU(e,n,a)}function h(d,g){return WU(d)||WU(g)||g<=0?NaN:zU(e,d,g)}}DU.exports=$Br});var JU=s((Mle,XU)=>{"use strict";var QBr=M3(),KBr=QBr();XU.exports=KBr});var ZU=s((Ble,YU)=>{"use strict";var rkr=w(),xU=JU(),ekr=M3();rkr(xU,"factory",ekr);YU.exports=xU});var KU=s((kle,QU)=>{"use strict";var tkr=j().isPrimitive,ikr=W().isPrimitive,$U=q(),nkr=sr();function akr(r,e){return!tkr(r)||nkr(r)?new TypeError($U("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):ikr(e)?null:new TypeError($U("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}QU.exports=akr});var eH=s((jle,rH)=>{"use strict";function skr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}rH.exports=skr});var iH=s((Cle,tH)=>{"use strict";function ukr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}tH.exports=ukr});var aH=s((Gle,nH)=>{"use strict";function okr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}nH.exports=okr});var uH=s((Vle,sH)=>{"use strict";function vkr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}sH.exports=vkr});var vH=s((Ule,oH)=>{"use strict";function fkr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}oH.exports=fkr});var pH=s((Hle,lH)=>{"use strict";var ckr=E(),fH=G(),cH=R(),lkr=_(),pkr=V(),gkr=eH(),mkr=iH(),dkr=aH(),hkr=uH(),ykr=vH(),qkr=.08913147449493408,bkr=2.249481201171875,wkr=.807220458984375,Ekr=.9399557113647461,Nkr=.9836282730102539;function Akr(r){var e,t,i,n,a,u;return ckr(r)?NaN:r===1?lkr:r===-1?pkr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=gkr(t),e*(a*qkr+a*u)):n>=.25?(a=fH(-2*cH(n)),n-=.25,u=mkr(n),e*(a/(bkr+u))):(n=fH(-cH(n)),n<3?(i=n-1.125,u=dkr(i),e*(wkr*n+u*n)):n<6?(i=n-3,u=hkr(i),e*(Ekr*n+u*n)):(i=n-6,u=ykr(i),e*(Nkr*n+u*n))))}lH.exports=Akr});var B3=s((Wle,gH)=>{"use strict";var Okr=pH();gH.exports=Okr});var dH=s((zle,mH)=>{"use strict";var Skr=B3(),k3=E(),Tkr=G();function Ikr(r,e,t){var i,n;return k3(e)||k3(t)||k3(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*Tkr(2),i+n*Skr(2*r-1))}mH.exports=Ikr});var yH=s((Dle,hH)=>{"use strict";var _kr=S(),Lkr=g3().factory,Pkr=B3(),j3=E(),Rkr=G();function Fkr(r,e){var t,i;if(j3(r)||j3(e)||e<0)return _kr(NaN);return e===0&&Lkr(r),t=r,i=e*Rkr(2),n;function n(a){return j3(a)||a<0||a>1?NaN:t+i*Pkr(2*a-1)}}hH.exports=Fkr});var C3=s((Xle,bH)=>{"use strict";var Mkr=w(),qH=dH(),Bkr=yH();Mkr(qH,"factory",Bkr);bH.exports=qH});var EH=s((Jle,wH)=>{"use strict";var kkr=C3();function jkr(r,e,t){var i=kkr(1-r()/2,0,1);return e+t/(i*i)}wH.exports=jkr});var G3=s((xle,LH)=>{"use strict";var Oe=w(),ps=P(),NH=F(),AH=I(),OH=L(),SH=O(),TH=S(),Ckr=C(),gs=z().factory,IH=E(),Gkr=M(),ms=q(),Vkr=KU(),_H=EH();function Ukr(){var r,e,t,i,n,a;if(arguments.length===0)e=gs();else if(arguments.length===1){if(r=arguments[0],!AH(r))throw new TypeError(ms("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SH(r,"prng")){if(!OH(r.prng))throw new TypeError(ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=gs(r)}else{if(n=arguments[0],a=arguments[1],i=Vkr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!AH(r))throw new TypeError(ms("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SH(r,"prng")){if(!OH(r.prng))throw new TypeError(ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=gs(r)}else e=gs()}return n===void 0?t=h:t=m,Oe(t,"NAME","levy"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),NH(t,"state",TH(null),Ckr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",TH(null)),Oe(t,"PRNG",e)):(ps(t,"seed",u),ps(t,"seedLength",o),NH(t,"state",c,l),ps(t,"stateLength",f),ps(t,"byteLength",v),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Gkr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return _H(e,n,a)}function h(d,g){return IH(d)||IH(g)||g<=0?NaN:_H(e,d,g)}}LH.exports=Ukr});var RH=s((Yle,PH)=>{"use strict";var Hkr=G3(),Wkr=Hkr();PH.exports=Wkr});var BH=s((Zle,MH)=>{"use strict";var zkr=w(),FH=RH(),Dkr=G3();zkr(FH,"factory",Dkr);MH.exports=FH});var CH=s(($le,jH)=>{"use strict";var Xkr=j().isPrimitive,Jkr=W().isPrimitive,xkr=sr(),kH=q();function Ykr(r,e){return!Xkr(r)||xkr(r)?new TypeError(kH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Jkr(e)?null:new TypeError(kH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}jH.exports=Ykr});var VH=s((Qle,GH)=>{"use strict";var Zkr=R();function $kr(r,e,t){var i=r();return e+t*Zkr(i/(1-i))}GH.exports=$kr});var V3=s((Kle,xH)=>{"use strict";var Se=w(),ds=P(),UH=F(),HH=I(),WH=L(),zH=O(),DH=S(),Qkr=C(),hs=z().factory,XH=E(),Kkr=M(),ys=q(),rjr=CH(),JH=VH();function ejr(){var r,e,t,i,n,a;if(arguments.length===0)e=hs();else if(arguments.length===1){if(r=arguments[0],!HH(r))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zH(r,"prng")){if(!WH(r.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else{if(n=arguments[0],a=arguments[1],i=rjr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!HH(r))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zH(r,"prng")){if(!WH(r.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else e=hs()}return n===void 0?t=h:t=m,Se(t,"NAME","logistic"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),UH(t,"state",DH(null),Qkr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",DH(null)),Se(t,"PRNG",e)):(ds(t,"seed",u),ds(t,"seedLength",o),UH(t,"state",c,l),ds(t,"stateLength",f),ds(t,"byteLength",v),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Kkr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return JH(e,n,a)}function h(d,g){return XH(d)||XH(g)||g<=0?NaN:JH(e,d,g)}}xH.exports=ejr});var ZH=s((r4e,YH)=>{"use strict";var tjr=V3(),ijr=tjr();YH.exports=ijr});var KH=s((e4e,QH)=>{"use strict";var njr=w(),$H=ZH(),ajr=V3();njr($H,"factory",ajr);QH.exports=$H});var tW=s((t4e,eW)=>{"use strict";var sjr=j().isPrimitive,ujr=W().isPrimitive,rW=q(),ojr=sr();function vjr(r,e){return!sjr(r)||ojr(r)?new TypeError(rW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):ujr(e)?null:new TypeError(rW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}eW.exports=vjr});var nW=s((i4e,iW)=>{"use strict";var fjr=ir();function cjr(r,e,t){return fjr(e+t*r())}iW.exports=cjr});var U3=s((n4e,lW)=>{"use strict";var ct=w(),qs=P(),aW=F(),sW=I(),uW=L(),oW=O(),vW=S(),ljr=C(),Ii=tt().factory,fW=E(),pjr=M(),bs=q(),gjr=tW(),cW=nW();function mjr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ii();else if(arguments.length===1){if(t=arguments[0],!sW(t))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(oW(t,"prng")){if(!uW(t.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ii({prng:t.prng})}else e=Ii(t)}else{if(u=arguments[0],r=arguments[1],a=gjr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!sW(t))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(oW(t,"prng")){if(!uW(t.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ii({prng:t.prng})}else e=Ii(t)}else e=Ii()}return u===void 0?n=d:n=h,i=e.PRNG,ct(n,"NAME","lognormal"),t&&t.prng?(ct(n,"seed",null),ct(n,"seedLength",null),aW(n,"state",vW(null),ljr),ct(n,"stateLength",null),ct(n,"byteLength",null),ct(n,"toJSON",vW(null))):(qs(n,"seed",o),qs(n,"seedLength",f),aW(n,"state",l,p),qs(n,"stateLength",v),qs(n,"byteLength",c),ct(n,"toJSON",m)),ct(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=pjr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return cW(e,u,r)}function d(g,y){return fW(g)||fW(y)||y<=0?NaN:cW(e,g,y)}}lW.exports=mjr});var gW=s((a4e,pW)=>{"use strict";var djr=U3(),hjr=djr();pW.exports=hjr});var hW=s((s4e,dW)=>{"use strict";var yjr=w(),mW=gW(),qjr=U3();yjr(mW,"factory",qjr);dW.exports=mW});var H3=s((u4e,yW)=>{"use strict";var bjr=Xt(),wjr=$(),Ejr=bjr-1;function Njr(){var r=wjr(1+Ejr*Math.random());return r|0}yW.exports=Njr});var D3=s((o4e,NW)=>{"use strict";var Te=w(),lt=P(),qW=F(),W3=O(),Ajr=I(),Ojr=fr().isPrimitive,Sjr=jr(),Tjr=re().isPrimitive,bW=Zn(),Ur=q(),ws=Xt(),wr=Et(),_i=$e(),Ijr=M(),wW=H3(),z3=ws-1|0,_jr=ws-1|0,Ljr=16807,Es=1,Ns=2,pt=2,Er=4,jn=5;function EW(r,e){var t;return e?t="option":t="argument",r.length<jn+1?new RangeError(Ur("invalid %s. State array has insufficient length.",t)):r[0]!==Es?new RangeError(Ur("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Es,r[0])):r[1]!==Ns?new RangeError(Ur("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Ns,r[1])):r[pt]!==1?new RangeError(Ur("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[pt])):r[Er]!==r.length-jn?new RangeError(Ur("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-jn,r[Er])):null}function Pjr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!Ajr(r))throw new TypeError(Ur("invalid argument. Options argument must be an object. Value: `%s`.",r));if(W3(r,"copy")&&(i.copy=r.copy,!Ojr(r.copy)))throw new TypeError(Ur("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(W3(r,"state")){if(t=r.state,i.state=!0,!bW(t))throw new TypeError(Ur("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=EW(t,!0),u)throw u;i.copy===!1?e=t:(e=new wr(t.length),_i(t.length,t,1,e,1)),t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,t[Er])}if(n===void 0)if(W3(r,"seed"))if(n=r.seed,i.seed=!0,Tjr(n)){if(n>_jr)throw new RangeError(Ur("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(Sjr(n)&&n.length>0)a=n.length,e=new wr(jn+a),e[0]=Es,e[1]=Ns,e[pt]=1,e[Er]=a,_i.ndarray(a,n,1,0,e,1,Er+1),t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Ur("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=wW()|0}else n=wW()|0;return t===void 0&&(e=new wr(jn+1),e[0]=Es,e[1]=Ns,e[pt]=1,e[Er]=1,e[Er+1]=n,t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Te(h,"NAME","minstd"),lt(h,"seed",o),lt(h,"seedLength",f),qW(h,"state",l,p),lt(h,"stateLength",v),lt(h,"byteLength",c),Te(h,"toJSON",m),Te(h,"MIN",1),Te(h,"MAX",ws-1),Te(h,"normalized",d),Te(d,"NAME",h.NAME),lt(d,"seed",o),lt(d,"seedLength",f),qW(d,"state",l,p),lt(d,"stateLength",v),lt(d,"byteLength",c),Te(d,"toJSON",m),Te(d,"MIN",(h.MIN-1)/z3),Te(d,"MAX",(h.MAX-1)/z3),h;function o(){var g=e[Er];return _i(g,n,1,new wr(g),1)}function f(){return e[Er]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return _i(g,e,1,new wr(g),1)}function p(g){var y;if(!bW(g))throw new TypeError(Ur("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(y=EW(g,!1),y)throw y;i.copy===!1?i.state&&g.length===e.length?_i(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new wr(g.length)),_i(g.length,g,1,e,1)),t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,e[Er])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=Ijr(e),g.params=[],g}function h(){var g=t[0]|0;return g=Ljr*g%ws|0,t[0]=g,g|0}function d(){return(h()-1)/z3}}NW.exports=Pjr});var OW=s((v4e,AW)=>{"use strict";var Rjr=D3(),Fjr=H3(),Mjr=Rjr({seed:Fjr()});AW.exports=Mjr});var IW=s((f4e,TW)=>{"use strict";var Bjr=w(),SW=OW(),kjr=D3();Bjr(SW,"factory",kjr);TW.exports=SW});var LW=s((c4e,_W)=>{"use strict";var jjr=E(),Cjr=8;function Gjr(r,e,t){var i,n;for(n=0;n<Cjr;n++)if(i=r(),jjr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}_W.exports=Gjr});var X3=s((l4e,PW)=>{"use strict";var Vjr=Xt(),Ujr=$(),Hjr=Vjr-1;function Wjr(){var r=Ujr(1+Hjr*Math.random());return r|0}PW.exports=Wjr});var Y3=s((p4e,jW)=>{"use strict";var Ie=w(),gt=P(),RW=F(),J3=O(),zjr=I(),Djr=fr().isPrimitive,Xjr=jr(),Jjr=re().isPrimitive,FW=Zn(),Li=$e(),xjr=$(),Nr=Et(),Cn=Xt(),Yjr=M(),kr=q(),MW=LW(),BW=X3(),x3=Cn-1|0,Zjr=Cn-1|0,$jr=16807,Or=32,Ss=1,Ts=3,mt=2,Pi=Or+3,Ar=Or+6,Gn=Or+7,As=Pi+1,Os=Pi+2;function kW(r,e){var t;return e?t="option":t="argument",r.length<Gn+1?new RangeError(kr("invalid %s. State array has insufficient length.",t)):r[0]!==Ss?new RangeError(kr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ss,r[0])):r[1]!==Ts?new RangeError(kr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Ts,r[1])):r[mt]!==Or?new RangeError(kr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Or,r[mt])):r[Pi]!==2?new RangeError(kr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Pi])):r[Ar]!==r.length-Gn?new RangeError(kr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Gn,r[Ar])):null}function Qjr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!zjr(r))throw new TypeError(kr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(J3(r,"copy")&&(i.copy=r.copy,!Djr(r.copy)))throw new TypeError(kr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(J3(r,"state")){if(t=r.state,i.state=!0,!FW(t))throw new TypeError(kr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=kW(t,!0),u)throw u;i.copy===!1?e=t:(e=new Nr(t.length),Li(t.length,t,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(J3(r,"seed"))if(n=r.seed,i.seed=!0,Jjr(n)){if(n>Zjr)throw new RangeError(kr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(Xjr(n)&&n.length>0)a=n.length,e=new Nr(Gn+a),e[0]=Ss,e[1]=Ts,e[mt]=Or,e[Pi]=2,e[Os]=n[0],e[Ar]=a,Li.ndarray(a,n,1,0,e,1,Ar+1),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t=MW(h,t,Or),e[As]=t[0];else throw new TypeError(kr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=BW()|0}else n=BW()|0;return t===void 0&&(e=new Nr(Gn+1),e[0]=Ss,e[1]=Ts,e[mt]=Or,e[Pi]=2,e[Os]=n,e[Ar]=1,e[Ar+1]=n,t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t=MW(h,t,Or),e[As]=t[0]),Ie(d,"NAME","minstd-shuffle"),gt(d,"seed",o),gt(d,"seedLength",f),RW(d,"state",l,p),gt(d,"stateLength",v),gt(d,"byteLength",c),Ie(d,"toJSON",m),Ie(d,"MIN",1),Ie(d,"MAX",Cn-1),Ie(d,"normalized",g),Ie(g,"NAME",d.NAME),gt(g,"seed",o),gt(g,"seedLength",f),RW(g,"state",l,p),gt(g,"stateLength",v),gt(g,"byteLength",c),Ie(g,"toJSON",m),Ie(g,"MIN",(d.MIN-1)/x3),Ie(g,"MAX",(d.MAX-1)/x3),d;function o(){var y=e[Ar];return Li(y,n,1,new Nr(y),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var y=e.length;return Li(y,e,1,new Nr(y),1)}function p(y){var N;if(!FW(y))throw new TypeError(kr("invalid argument. Must provide an Int32Array. Value: `%s`.",y));if(N=kW(y,!1),N)throw N;i.copy===!1?i.state&&y.length===e.length?Li(y.length,y,1,e,1):(e=y,i.state=!0):(y.length!==e.length&&(e=new Nr(y.length)),Li(y.length,y,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function m(){var y={};return y.type="PRNG",y.name=d.NAME,y.state=Yjr(e),y.params=[],y}function h(){var y=e[Os]|0;return y=$jr*y%Cn|0,e[Os]=y,y|0}function d(){var y,N;return y=e[As],N=xjr(Or*(y/Cn)),y=t[N],e[As]=y,t[N]=h(),y}function g(){return(d()-1)/x3}}jW.exports=Qjr});var GW=s((g4e,CW)=>{"use strict";var Kjr=Y3(),rCr=X3(),eCr=Kjr({seed:rCr()});CW.exports=eCr});var HW=s((m4e,UW)=>{"use strict";var tCr=w(),VW=GW(),iCr=Y3();tCr(VW,"factory",iCr);UW.exports=VW});var zW=s((d4e,WW)=>{"use strict";var nCr=ir();function aCr(r,e){for(var t=r(),i=1;t>nCr(-e);)i+=1,t*=r();return i-1}WW.exports=aCr});var XW=s((h4e,DW)=>{"use strict";var sCr=$();function uCr(r){return sCr(r)===r&&r<0}DW.exports=uCr});var xW=s((y4e,JW)=>{"use strict";var oCr=XW();JW.exports=oCr});var ZW=s((q4e,YW)=>{"use strict";var vCr=xW(),fCr=In();function cCr(r){return vCr(r)?NaN:fCr(r+1)}YW.exports=cCr});var QW=s((b4e,$W)=>{"use strict";var lCr=ZW();$W.exports=lCr});var tz=s((w4e,ez)=>{"use strict";var pCr=QW(),KW=$(),gCr=q0(),mCr=G(),rz=Y(),Is=R(),dCr=q1(),hCr=1/12,yCr=1/360;function qCr(r,e){var t,i,n,a,u,o,f,v,c,l;for(t=mCr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-rz(c))+f,c+=e+.445,KW(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=gCr(c)*.5-c,l=u*r()),a=.5-rz(c),(a>=.013||a>=l)&&(v=KW((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*Is(e/v),c+=-e-dCr+v,c-=(hCr-yCr/(v*v))/v,v>=10&&c>=Is(l*t)||(c=v*Is(e)-e-pCr(v),v>=0&&v<=9&&c>=Is(l))))return v}}ez.exports=qCr});var nz=s((E4e,iz)=>{"use strict";var bCr=zW(),wCr=tz();function ECr(r,e){return e<30?bCr(r,e):wCr(r,e)}iz.exports=ECr});var Z3=s((N4e,cz)=>{"use strict";var _e=w(),_s=P(),az=F(),NCr=W().isPrimitive,sz=I(),uz=L(),oz=O(),vz=S(),ACr=C(),Ls=z().factory,OCr=E(),SCr=M(),Ps=q(),fz=nz();function TCr(){var r,e,t,i;if(arguments.length===0)t=Ls();else if(arguments.length===1&&sz(arguments[0]))if(e=arguments[0],oz(e,"prng")){if(!uz(e.prng))throw new TypeError(Ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ls(e);else{if(r=arguments[0],!NCr(r))throw new TypeError(Ps("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!sz(e))throw new TypeError(Ps("invalid argument. Options argument must be an object. Value: `%s`.",e));if(oz(e,"prng")){if(!uz(e.prng))throw new TypeError(Ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ls(e)}else t=Ls()}return r===void 0?i=p:i=l,_e(i,"NAME","poisson"),e&&e.prng?(_e(i,"seed",null),_e(i,"seedLength",null),az(i,"state",vz(null),ACr),_e(i,"stateLength",null),_e(i,"byteLength",null),_e(i,"toJSON",vz(null)),_e(i,"PRNG",t)):(_s(i,"seed",n),_s(i,"seedLength",a),az(i,"state",f,v),_s(i,"stateLength",u),_s(i,"byteLength",o),_e(i,"toJSON",c),_e(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=SCr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return fz(t,r)}function p(m){return OCr(m)||m<=0?NaN:fz(t,m)}}cz.exports=TCr});var pz=s((A4e,lz)=>{"use strict";var ICr=Z3(),_Cr=ICr();lz.exports=_Cr});var $3=s((O4e,mz)=>{"use strict";var LCr=w(),gz=pz(),PCr=Z3();LCr(gz,"factory",PCr);mz.exports=gz});var hz=s((S4e,dz)=>{"use strict";var RCr=W().isPrimitive,FCr=j().isPrimitive,Q3=q(),MCr=sr();function BCr(r,e){return RCr(r)?!FCr(e)||MCr(e)?new TypeError(Q3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Q3("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Q3("invalid argument. First argument must be a positive number. Value: `%s`.",r))}dz.exports=BCr});var tv=s((T4e,Oz)=>{"use strict";var dt=w(),Rs=P(),yz=F(),Ri=O(),qz=I(),K3=Kr(),bz=fr().isPrimitive,wz=L(),Ez=S(),kCr=C(),Nz=E(),Fi=$3().factory,Fs=bi().factory,rv=$e(),ev=lr(),Az=Rn(),jCr=M(),Le=q(),CCr=hz();function GCr(){var r,e,t,i,n,a,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=Fi(i);else if(arguments.length===1){if(i=arguments[0],!qz(i))throw new TypeError(Le("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ri(i,"copy")&&!bz(i.copy))throw new TypeError(Le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ri(i,"prng")){if(!wz(i.prng))throw new TypeError(Le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Fi({prng:i.prng})}else{if(Ri(i,"state")&&!K3(i.state))throw new TypeError(Le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=Az({},i),i.copy===!1?u=!1:i.state&&(i.state=rv(i.state.length,i.state,1,new ev(i.state.length),1)),i.copy=!1,t=Fi(i)}}else{if(v=arguments[0],f=arguments[1],o=CCr(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!qz(i))throw new TypeError(Le("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ri(i,"copy")&&!bz(i.copy))throw new TypeError(Le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ri(i,"prng")){if(!wz(i.prng))throw new TypeError(Le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Fi({prng:i.prng})}else{if(Ri(i,"state")&&!K3(i.state))throw new TypeError(Le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=Az({},i),i.copy===!1?u=!1:i.state&&(i.state=rv(i.state.length,i.state,1,new ev(i.state.length),1)),i.copy=!1,t=Fi(i)}}else i={copy:!1},t=Fi(i)}return i&&i.prng?v===void 0?r=Fs({prng:i.prng}):r=Fs(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=Fs({state:e,copy:!1}):r=Fs(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=y,a=t.PRNG,dt(n,"NAME","negative-binomial"),i&&i.prng?(dt(n,"seed",null),dt(n,"seedLength",null),yz(n,"state",Ez(null),kCr),dt(n,"stateLength",null),dt(n,"byteLength",null),dt(n,"toJSON",Ez(null))):(Rs(n,"seed",c),Rs(n,"seedLength",l),yz(n,"state",h,d),Rs(n,"stateLength",p),Rs(n,"byteLength",m),dt(n,"toJSON",g)),dt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function h(){return a.state}function d(A){if(!K3(A))throw new TypeError(Le("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));u&&(A=rv(A.length,A,1,new ev(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=jCr(a.state),v===void 0?A.params=[]:A.params=[v,f],A}function y(){return t(r())}function N(A,k){return Nz(A)||Nz(k)||k<=0||k>=1?NaN:t(r(A,k/(1-k)))}}Oz.exports=GCr});var Tz=s((I4e,Sz)=>{"use strict";var VCr=tv(),UCr=VCr();Sz.exports=UCr});var Lz=s((_4e,_z)=>{"use strict";var HCr=w(),Iz=Tz(),WCr=tv();HCr(Iz,"factory",WCr);_z.exports=Iz});var Fz=s((L4e,Rz)=>{"use strict";var zCr=j().isPrimitive,DCr=W().isPrimitive,Pz=q(),XCr=sr();function JCr(r,e){return!zCr(r)||XCr(r)?new TypeError(Pz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):DCr(e)?null:new TypeError(Pz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Rz.exports=JCr});var Bz=s((P4e,Mz)=>{"use strict";function xCr(r,e,t){return e+t*r()}Mz.exports=xCr});var iv=s((R4e,Wz)=>{"use strict";var ht=w(),Ms=P(),kz=F(),jz=I(),Cz=L(),Gz=O(),Vz=S(),YCr=C(),Mi=tt().factory,Uz=E(),ZCr=M(),Bs=q(),$Cr=Fz(),Hz=Bz();function QCr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Mi();else if(arguments.length===1){if(t=arguments[0],!jz(t))throw new TypeError(Bs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Gz(t,"prng")){if(!Cz(t.prng))throw new TypeError(Bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Mi({prng:t.prng})}else e=Mi(t)}else{if(u=arguments[0],r=arguments[1],a=$Cr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!jz(t))throw new TypeError(Bs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Gz(t,"prng")){if(!Cz(t.prng))throw new TypeError(Bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Mi({prng:t.prng})}else e=Mi(t)}else e=Mi()}return u===void 0?n=d:n=h,i=e.PRNG,ht(n,"NAME","normal"),t&&t.prng?(ht(n,"seed",null),ht(n,"seedLength",null),kz(n,"state",Vz(null),YCr),ht(n,"stateLength",null),ht(n,"byteLength",null),ht(n,"toJSON",Vz(null))):(Ms(n,"seed",o),Ms(n,"seedLength",f),kz(n,"state",l,p),Ms(n,"stateLength",v),Ms(n,"byteLength",c),ht(n,"toJSON",m)),ht(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=ZCr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return Hz(e,u,r)}function d(g,y){return Uz(g)||Uz(y)||y<=0?NaN:Hz(e,g,y)}}Wz.exports=QCr});var Dz=s((F4e,zz)=>{"use strict";var KCr=iv(),rGr=KCr();zz.exports=rGr});var xz=s((M4e,Jz)=>{"use strict";var eGr=w(),Xz=Dz(),tGr=iv();eGr(Xz,"factory",tGr);Jz.exports=Xz});var Qz=s((B4e,$z)=>{"use strict";var Yz=W().isPrimitive,Zz=q();function iGr(r,e){return Yz(r)?Yz(e)?null:new TypeError(Zz("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Zz("invalid argument. First argument must be a positive number. Value: `%s`.",r))}$z.exports=iGr});var rD=s((k4e,Kz)=>{"use strict";var nGr=H();function aGr(r,e,t){return t/nGr(r(),1/e)}Kz.exports=aGr});var nv=s((j4e,oD)=>{"use strict";var Pe=w(),ks=P(),eD=F(),tD=I(),iD=L(),nD=O(),aD=S(),sGr=C(),js=z().factory,sD=E(),uGr=M(),Cs=q(),oGr=Qz(),uD=rD();function vGr(){var r,e,t,i,n,a;if(arguments.length===0)i=js();else if(arguments.length===1){if(t=arguments[0],!tD(t))throw new TypeError(Cs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(nD(t,"prng")){if(!iD(t.prng))throw new TypeError(Cs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=js(t)}else{if(r=arguments[0],e=arguments[1],a=oGr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!tD(t))throw new TypeError(Cs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(nD(t,"prng")){if(!iD(t.prng))throw new TypeError(Cs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=js(t)}else i=js()}return r===void 0?n=h:n=m,Pe(n,"NAME","pareto-type1"),t&&t.prng?(Pe(n,"seed",null),Pe(n,"seedLength",null),eD(n,"state",aD(null),sGr),Pe(n,"stateLength",null),Pe(n,"byteLength",null),Pe(n,"toJSON",aD(null)),Pe(n,"PRNG",i)):(ks(n,"seed",u),ks(n,"seedLength",o),eD(n,"state",c,l),ks(n,"stateLength",f),ks(n,"byteLength",v),Pe(n,"toJSON",p),Pe(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=uGr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function m(){return uD(i,r,e)}function h(d,g){return sD(d)||sD(g)||d<=0||g<=0?NaN:uD(i,d,g)}}oD.exports=vGr});var fD=s((C4e,vD)=>{"use strict";var fGr=nv(),cGr=fGr();vD.exports=cGr});var pD=s((G4e,lD)=>{"use strict";var lGr=w(),cD=fD(),pGr=nv();lGr(cD,"factory",pGr);lD.exports=cD});var mD=s((V4e,gD)=>{"use strict";var gGr=G(),mGr=R();function dGr(r,e){return e*gGr(-2*mGr(r()))}gD.exports=dGr});var av=s((U4e,ED)=>{"use strict";var Re=w(),Gs=P(),dD=F(),hGr=W().isPrimitive,hD=I(),yD=L(),qD=O(),bD=S(),yGr=C(),Vs=z().factory,qGr=E(),bGr=M(),Us=q(),wD=mD();function wGr(){var r,e,t,i;if(arguments.length===0)t=Vs();else if(arguments.length===1&&hD(arguments[0]))if(e=arguments[0],qD(e,"prng")){if(!yD(e.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Vs(e);else{if(r=arguments[0],!hGr(r))throw new TypeError(Us("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!hD(e))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",e));if(qD(e,"prng")){if(!yD(e.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Vs(e)}else t=Vs()}return r===void 0?i=p:i=l,Re(i,"NAME","rayleigh"),e&&e.prng?(Re(i,"seed",null),Re(i,"seedLength",null),dD(i,"state",bD(null),yGr),Re(i,"stateLength",null),Re(i,"byteLength",null),Re(i,"toJSON",bD(null)),Re(i,"PRNG",t)):(Gs(i,"seed",n),Gs(i,"seedLength",a),dD(i,"state",f,v),Gs(i,"stateLength",u),Gs(i,"byteLength",o),Re(i,"toJSON",c),Re(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=bGr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return wD(t,r)}function p(m){return qGr(m)||m<=0?NaN:wD(t,m)}}ED.exports=wGr});var AD=s((H4e,ND)=>{"use strict";var EGr=av(),NGr=EGr();ND.exports=NGr});var TD=s((W4e,SD)=>{"use strict";var AGr=w(),OD=AD(),OGr=av();AGr(OD,"factory",OGr);SD.exports=OD});var vv=s((z4e,kD)=>{"use strict";var yt=w(),Hs=P(),ID=F(),Bi=O(),_D=W().isPrimitive,LD=I(),sv=Kr(),PD=fr().isPrimitive,SGr=E(),RD=L(),FD=S(),TGr=C(),Ws=Bn().factory,ki=tt().factory,uv=$e(),ov=lr(),MD=Rn(),IGr=M(),Yr=q(),BD=G();function _Gr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=ki(n);else if(arguments.length===1)if(LD(arguments[0])){if(n=arguments[0],Bi(n,"copy")&&!PD(n.copy))throw new TypeError(Yr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Bi(n,"prng")){if(!RD(n.prng))throw new TypeError(Yr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=ki({prng:n.prng})}else{if(Bi(n,"state")&&!sv(n.state))throw new TypeError(Yr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=MD({},n),n.copy===!1?u=!1:n.state&&(n.state=uv(n.state.length,n.state,1,new ov(n.state.length),1)),n.copy=!1,t=ki(n)}}else{if(o=arguments[0],!_D(o))throw new TypeError(Yr("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=ki(n)}else{if(o=arguments[0],!_D(o))throw new TypeError(Yr("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!LD(n))throw new TypeError(Yr("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Bi(n,"copy")&&!PD(n.copy))throw new TypeError(Yr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Bi(n,"prng")){if(!RD(n.prng))throw new TypeError(Yr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=ki({prng:n.prng})}else{if(Bi(n,"state")&&!sv(n.state))throw new TypeError(Yr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=MD({},n),n.copy===!1?u=!1:n.state&&(n.state=uv(n.state.length,n.state,1,new ov(n.state.length),1)),n.copy=!1,t=ki(n)}}return n&&n.prng?o===void 0?r=Ws({prng:n.prng}):r=Ws(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Ws({state:e,copy:!1}):r=Ws(o,{state:e,copy:!1})),o===void 0?a=g:a=d,i=t.PRNG,yt(a,"NAME","t"),n&&n.prng?(yt(a,"seed",null),yt(a,"seedLength",null),ID(a,"state",FD(null),TGr),yt(a,"stateLength",null),yt(a,"byteLength",null),yt(a,"toJSON",FD(null))):(Hs(a,"seed",f),Hs(a,"seedLength",v),ID(a,"state",p,m),Hs(a,"stateLength",c),Hs(a,"byteLength",l),yt(a,"toJSON",h)),yt(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(y){if(!sv(y))throw new TypeError(Yr("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));u&&(y=uv(y.length,y,1,new ov(y.length),1)),i.state=y}function h(){var y={};return y.type="PRNG",y.name=a.NAME,y.state=IGr(i.state),o===void 0?y.params=[]:y.params=[o],y}function d(){return t()/BD(r()/o)}function g(y){return SGr(y)||y<=0?NaN:t()/BD(r(y)/y)}}kD.exports=_Gr});var CD=s((D4e,jD)=>{"use strict";var LGr=vv(),PGr=LGr();jD.exports=PGr});var UD=s((X4e,VD)=>{"use strict";var RGr=w(),GD=CD(),FGr=vv();RGr(GD,"factory",FGr);VD.exports=GD});var WD=s((J4e,HD)=>{"use strict";var fv=j().isPrimitive,zs=q(),cv=sr();function MGr(r,e,t){return!fv(r)||cv(r)?new TypeError(zs("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!fv(e)||cv(e)?new TypeError(zs("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!fv(t)||cv(t)?new TypeError(zs("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(zs("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}HD.exports=MGr});var XD=s((x4e,DD)=>{"use strict";var zD=G();function BGr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+zD(a*u)):(a=(t-e)*(t-i),t-zD(a*(1-u)))}DD.exports=BGr});var pv=s((Y4e,KD)=>{"use strict";var Fe=w(),Ds=P(),JD=F(),xD=I(),YD=L(),ZD=O(),$D=S(),kGr=C(),Xs=z().factory,lv=E(),jGr=M(),Js=q(),CGr=WD(),QD=XD();function GGr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Xs();else if(arguments.length===1){if(r=arguments[0],!xD(r))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ZD(r,"prng")){if(!YD(r.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Xs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=CGr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!xD(r))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ZD(r,"prng")){if(!YD(r.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Xs(r)}else e=Xs()}return n===void 0?t=d:t=h,Fe(t,"NAME","triangular"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),JD(t,"state",$D(null),kGr),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",$D(null)),Fe(t,"PRNG",e)):(Ds(t,"seed",o),Ds(t,"seedLength",f),JD(t,"state",l,p),Ds(t,"stateLength",v),Ds(t,"byteLength",c),Fe(t,"toJSON",m),Fe(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=jGr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return QD(e,n,a,u)}function d(g,y,N){return lv(g)||lv(y)||lv(N)||!(g<=N&&N<=y)?NaN:QD(e,g,y,N)}}KD.exports=GGr});var eX=s((Z4e,rX)=>{"use strict";var VGr=pv(),UGr=VGr();rX.exports=UGr});var nX=s(($4e,iX)=>{"use strict";var HGr=w(),tX=eX(),WGr=pv();HGr(tX,"factory",WGr);iX.exports=tX});var oX=s((Q4e,uX)=>{"use strict";var aX=j().isPrimitive,gv=q(),sX=sr();function zGr(r,e){return!aX(r)||sX(r)?new TypeError(gv("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!aX(e)||sX(e)?new TypeError(gv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(gv("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}uX.exports=zGr});var fX=s((K4e,vX)=>{"use strict";function DGr(r,e,t){var i=r();return t*i+(1-i)*e}vX.exports=DGr});var mv=s((r6e,yX)=>{"use strict";var Me=w(),xs=P(),cX=F(),lX=I(),pX=L(),gX=O(),mX=S(),XGr=C(),Ys=z().factory,dX=E(),JGr=M(),Zs=q(),xGr=oX(),hX=fX();function YGr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ys();else if(arguments.length===1){if(r=arguments[0],!lX(r))throw new TypeError(Zs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gX(r,"prng")){if(!pX(r.prng))throw new TypeError(Zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ys(r)}else{if(n=arguments[0],a=arguments[1],i=xGr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!lX(r))throw new TypeError(Zs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gX(r,"prng")){if(!pX(r.prng))throw new TypeError(Zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ys(r)}else e=Ys()}return n===void 0?t=h:t=m,Me(t,"NAME","uniform"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),cX(t,"state",mX(null),XGr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",mX(null)),Me(t,"PRNG",e)):(xs(t,"seed",u),xs(t,"seedLength",o),cX(t,"state",c,l),xs(t,"stateLength",f),xs(t,"byteLength",v),Me(t,"toJSON",p),Me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=JGr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return hX(e,n,a)}function h(d,g){return dX(d)||dX(g)||d>=g?NaN:hX(e,d,g)}}yX.exports=YGr});var bX=s((e6e,qX)=>{"use strict";var ZGr=mv(),$Gr=ZGr();qX.exports=$Gr});var NX=s((t6e,EX)=>{"use strict";var QGr=w(),wX=bX(),KGr=mv();QGr(wX,"factory",KGr);EX.exports=wX});var TX=s((i6e,SX)=>{"use strict";var AX=W().isPrimitive,OX=q();function rVr(r,e){return AX(r)?AX(e)?null:new TypeError(OX("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(OX("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}SX.exports=rVr});var _X=s((n6e,IX)=>{"use strict";var eVr=H(),tVr=R();function iVr(r,e,t){return t*eVr(-tVr(1-r()),1/e)}IX.exports=iVr});var dv=s((a6e,jX)=>{"use strict";var Be=w(),$s=P(),LX=F(),PX=I(),RX=L(),FX=O(),MX=S(),nVr=C(),Qs=z().factory,BX=E(),aVr=M(),Ks=q(),sVr=TX(),kX=_X();function uVr(){var r,e,t,i,n,a;if(arguments.length===0)t=Qs();else if(arguments.length===1){if(e=arguments[0],!PX(e))throw new TypeError(Ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(FX(e,"prng")){if(!RX(e.prng))throw new TypeError(Ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Qs(e)}else{if(a=arguments[0],r=arguments[1],n=sVr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!PX(e))throw new TypeError(Ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(FX(e,"prng")){if(!RX(e.prng))throw new TypeError(Ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Qs(e)}else t=Qs()}return r===void 0?i=h:i=m,Be(i,"NAME","weibull"),e&&e.prng?(Be(i,"seed",null),Be(i,"seedLength",null),LX(i,"state",MX(null),nVr),Be(i,"stateLength",null),Be(i,"byteLength",null),Be(i,"toJSON",MX(null)),Be(i,"PRNG",t)):($s(i,"seed",u),$s(i,"seedLength",o),LX(i,"state",c,l),$s(i,"stateLength",f),$s(i,"byteLength",v),Be(i,"toJSON",p),Be(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=aVr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return kX(t,a,r)}function h(d,g){return BX(d)||BX(g)||d<=0||g<=0?NaN:kX(t,d,g)}}jX.exports=uVr});var GX=s((s6e,CX)=>{"use strict";var oVr=dv(),vVr=oVr();CX.exports=vVr});var HX=s((u6e,UX)=>{"use strict";var fVr=w(),VX=GX(),cVr=dv();fVr(VX,"factory",cVr);UX.exports=VX});var zX=s((o6e,WX)=>{"use strict";var lVr=cr(),pVr=Cr().isPrimitive,gVr=q(),mVr=Eu();function dVr(r){if(pVr(r))return r;if(lVr(r))return mVr(r);throw new TypeError(gVr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}WX.exports=dVr});var XX=s((v6e,DX)=>{"use strict";var hVr=zX();DX.exports=hVr});var xX=s((f6e,JX)=>{"use strict";var B=nr(),yVr=eF().factory,qVr=lF().factory,bVr=MM().factory,wVr=qB().factory,EVr=rk().factory,NVr=mk().factory,AVr=Xk().factory,OVr=gj().factory,SVr=Bn().factory,TVr=oC().factory,IVr=IC().factory,_Vr=XC().factory,LVr=sG().factory,PVr=OG().factory,RVr=HG().factory,FVr=bi().factory,MVr=iV().factory,BVr=EV().factory,kVr=ZV().factory,jVr=tt().factory,CVr=lU().factory,GVr=RU().factory,VVr=ZU().factory,UVr=BH().factory,HVr=KH().factory,WVr=hW().factory,zVr=IW().factory,DVr=HW().factory,XVr=z().factory,JVr=Lz().factory,xVr=xz().factory,YVr=pD().factory,ZVr=$3().factory,$Vr=TD().factory,QVr=UD().factory,KVr=nX().factory,rUr=NX().factory,eUr=HX().factory,tUr=XX();function iUr(r){return B(r,"arcsine",yVr),B(r,"bernoulli",qVr),B(r,"beta",bVr),B(r,"betaprime",wVr),B(r,"binomial",EVr),B(r,"boxMuller",NVr),B(r,"cauchy",AVr),B(r,"chi",OVr),B(r,"chisquare",SVr),B(r,"cosine",TVr),B(r,"discreteUniform",IVr),B(r,"erlang",_Vr),B(r,"exponential",LVr),B(r,"f",PVr),B(r,"frechet",RVr),B(r,"gamma",FVr),B(r,"geometric",MVr),B(r,"gumbel",BVr),B(r,"hypergeometric",kVr),B(r,"improvedZiggurat",jVr),B(r,"invgamma",CVr),B(r,"kumaraswamy",GVr),B(r,"laplace",VVr),B(r,"levy",UVr),B(r,"logistic",HVr),B(r,"lognormal",WVr),B(r,"minstd",zVr),B(r,"minstdShuffle",DVr),B(r,"mt19937",XVr),B(r,"negativeBinomial",JVr),B(r,"normal",xVr),B(r,"pareto1",YVr),B(r,"poisson",ZVr),B(r,"rayleigh",$Vr),B(r,"t",QVr),B(r,"triangular",KVr),B(r,"uniform",rUr),B(r,"weibull",eUr),r.base={},B(r.base,"normalizeSeed",tUr),r}JX.exports=iUr});var ZX=s((c6e,YX)=>{"use strict";var nUr=I(),ru=O(),aUr=Cr().isPrimitive,sUr=re().isPrimitive,uUr=Ge().isPrimitive,oUr=Ro().isPrimitive,Vn=q();function vUr(r,e){return nUr(e)?ru(e,"period")&&(r.period=e.period,!sUr(e.period))?new TypeError(Vn("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):ru(e,"amplitude")&&(r.amplitude=e.amplitude,!oUr(e.amplitude))?new TypeError(Vn("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):ru(e,"offset")&&(r.offset=e.offset,!aUr(e.offset))?new TypeError(Vn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):ru(e,"iter")&&(r.iter=e.iter,!uUr(e.iter))?new TypeError(Vn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(Vn("invalid argument. Options argument must be an object. Value: `%s`.",e))}YX.exports=vUr});var rJ=s((l6e,KX)=>{"use strict";var hv=w(),$X=ta(),fUr=s3(),cUr=Fa(),lUr=Ra(),pUr=Lr(),gUr=ZX();function QX(r){var e,t,i,n,a,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=gUr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=pUr/e.period,o=e.amplitude/lUr,f=0,t={},hv(t,"next",v),hv(t,"return",c),$X&&hv(t,$X,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*cUr(fUr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return QX(e)}}KX.exports=QX});var tJ=s((p6e,eJ)=>{"use strict";var mUr=rJ();eJ.exports=mUr});var nJ=s((g6e,iJ)=>{"use strict";var dUr=nr(),hUr=tJ();function yUr(r){return dUr(r,"iterSawtoothWave",hUr),r}iJ.exports=yUr});var sJ=s((m6e,aJ)=>{"use strict";var qUr=17976931348623157e292;aJ.exports=qUr});var eu=s((d6e,uJ)=>{"use strict";var bUr=709.782712893384;uJ.exports=bUr});var vJ=s((h6e,oJ)=>{"use strict";var wUr=ir();function EUr(r,e){var t,i,n,a;if(n=wUr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}oJ.exports=EUr});var cJ=s((y6e,fJ)=>{"use strict";function NUr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}fJ.exports=NUr});var pJ=s((q6e,lJ)=>{"use strict";function AUr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}lJ.exports=AUr});var mJ=s((b6e,gJ)=>{"use strict";function OUr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}gJ.exports=OUr});var hJ=s((w6e,dJ)=>{"use strict";function SUr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}dJ.exports=SUr});var qJ=s((E6e,yJ)=>{"use strict";function TUr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}yJ.exports=TUr});var wJ=s((N6e,bJ)=>{"use strict";function IUr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}bJ.exports=IUr});var NJ=s((A6e,EJ)=>{"use strict";function _Ur(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}EJ.exports=_Ur});var OJ=s((O6e,AJ)=>{"use strict";function LUr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}AJ.exports=LUr});var _J=s((S6e,IJ)=>{"use strict";var PUr=E(),SJ=ir(),RUr=ae(),FUr=_(),MUr=V(),BUr=cJ(),kUr=pJ(),jUr=mJ(),CUr=hJ(),GUr=qJ(),VUr=wJ(),UUr=NJ(),HUr=OJ(),tu=1e-300,WUr=13877787807814457e-33,TJ=.8450629115104675,zUr=.12837916709551256,DUr=1,XUr=-.0023621185607526594,JUr=1,xUr=-.009864944034847148,YUr=1,ZUr=-.0098649429247001,$Ur=1;function QUr(r){var e,t,i,n,a,u,o,f;if(PUr(r))return NaN;if(r===FUr)return 0;if(r===MUr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<WUr?1-r:(i=r*r,n=zUr+i*BUr(i),a=DUr+i*kUr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=XUr+a*jUr(a),f=JUr+a*CUr(a),e?1+TJ+o/f:1-TJ-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=xUr+a*GUr(a),a=YUr+a*VUr(a);else{if(r<-6)return 2-tu;n=ZUr+a*UUr(a),a=$Ur+a*HUr(a)}return i=RUr(t,0),n=SJ(-(i*i)-.5625)*SJ((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-tu:tu*tu}IJ.exports=QUr});var Vt=s((T6e,LJ)=>{"use strict";var KUr=_J();LJ.exports=KUr});var FJ=s((I6e,RJ)=>{"use strict";var rHr=Vt(),PJ=G(),eHr=ir(),tHr=Lr();function iHr(r,e){var t,i,n,a,u;if(a=rHr(PJ(e)),a!==0&&r>1){for(i=eHr(-e)/PJ(tHr*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}RJ.exports=iHr});var yv=s((_6e,MJ)=>{"use strict";var nHr=-708.3964185322641;MJ.exports=nHr});var CJ=s((L6e,jJ)=>{"use strict";var ji=ir(),iu=H(),aHr=R(),BJ=eu(),kJ=yv();function sHr(r,e){var t,i;return i=r*aHr(e),e>=1?i<BJ&&-e>kJ?t=iu(e,r)*ji(-e):r>=1?t=iu(e/ji(e/r),r):t=ji(i-e):i>kJ?t=iu(e,r)*ji(-e):e/r<BJ?t=iu(e/ji(e/r),r):t=ji(i-e),t}jJ.exports=sHr});var qv=s((P6e,GJ)=>{"use strict";function uHr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}GJ.exports=uHr});var UJ=s((R6e,VJ)=>{"use strict";var oHr=Function;VJ.exports=oHr});var WJ=s((F6e,HJ)=>{"use strict";var vHr=UJ();HJ.exports=vHr});var DJ=s((M6e,zJ)=>{"use strict";var fHr=WJ(),cHr=qv();function lHr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new fHr(e)();function a(u){return cHr(r,u)}}zJ.exports=lHr});var xJ=s((B6e,JJ)=>{"use strict";var pHr=w(),XJ=qv(),gHr=DJ();pHr(XJ,"factory",gHr);JJ.exports=XJ});var Ut=s((k6e,YJ)=>{"use strict";var mHr=2220446049250313e-31;YJ.exports=mHr});var $J=s((j6e,ZJ)=>{"use strict";var dHr=eval;ZJ.exports=dHr});var KJ=s((C6e,QJ)=>{"use strict";var hHr=$J();function yHr(){var r;try{hHr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}QJ.exports=yHr});var bv=s((G6e,rx)=>{"use strict";var qHr=KJ();rx.exports=qHr});var tx=s((V6e,ex)=>{"use strict";var nu=Y(),bHr=Ut(),wHr=1e6;function EHr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||bHr,a=o.maxTerms||wHr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,nu(i*u)>=nu(n)||--a===0)break}else do n=r(),u+=n;while(nu(i*u)<nu(n)&&--a);return u}ex.exports=EHr});var ax=s((U6e,nx)=>{"use strict";var ix=Y(),NHr=Ut(),AHr=1e6;function OHr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||NHr,n=u.maxTerms||AHr,a=u.initialValue||0;do i=r(),a+=i;while(ix(t*a)<ix(i)&&--n);return a}nx.exports=OHr});var au=s((H6e,sx)=>{"use strict";var SHr=bv(),THr=tx(),IHr=ax(),wv;SHr()?wv=THr:wv=IHr;sx.exports=wv});var ox=s((W6e,ux)=>{"use strict";function _Hr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}ux.exports=_Hr});var fx=s((z6e,vx)=>{"use strict";var LHr=Y(),PHr=R(),RHr=Ut(),FHr=au(),MHr=ox();function BHr(r){var e,t;return r<=-1?NaN:(t=LHr(r),t>.95?PHr(1+r)-r:t<RHr?-r*r/2:(e={initialValue:-r},FHr(MHr(r),e)))}vx.exports=BHr});var lx=s((D6e,cx)=>{"use strict";var kHr=fx();cx.exports=kHr});var gx=s((X6e,px)=>{"use strict";function jHr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}px.exports=jHr});var dx=s((J6e,mx)=>{"use strict";function CHr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}mx.exports=CHr});var yx=s((x6e,hx)=>{"use strict";function GHr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}hx.exports=GHr});var bx=s((Y6e,qx)=>{"use strict";function VHr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}qx.exports=VHr});var Ex=s((Z6e,wx)=>{"use strict";function UHr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}wx.exports=UHr});var Ax=s(($6e,Nx)=>{"use strict";function HHr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Nx.exports=HHr});var Sx=s((Q6e,Ox)=>{"use strict";function WHr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Ox.exports=WHr});var Ix=s((K6e,Tx)=>{"use strict";function zHr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Tx.exports=zHr});var Lx=s((r8e,_x)=>{"use strict";function DHr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}_x.exports=DHr});var Rx=s((e8e,Px)=>{"use strict";var XHr=xJ(),JHr=lx(),xHr=Vt(),Ev=G(),YHr=ir(),ZHr=Ye(),$Hr=gx(),QHr=dx(),KHr=yx(),rWr=bx(),eWr=Ex(),tWr=Ax(),iWr=Sx(),nWr=Ix(),aWr=Lx(),Hr=[0,0,0,0,0,0,0,0,0,0];function sWr(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-JHr(i),a=r*n,u=Ev(2*n),e<r&&(u=-u),Hr[0]=$Hr(u),Hr[1]=QHr(u),Hr[2]=KHr(u),Hr[3]=rWr(u),Hr[4]=eWr(u),Hr[5]=tWr(u),Hr[6]=iWr(u),Hr[7]=nWr(u),Hr[8]=aWr(u),Hr[9]=-.0005967612901927463,t=XHr(Hr,1/r),t*=YHr(-a)/Ev(ZHr*r),e<r&&(t=-t),t+=xHr(Ev(a))/2,t}Px.exports=sWr});var Mx=s((t8e,Fx)=>{"use strict";function uWr(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}Fx.exports=uWr});var kx=s((i8e,Bx)=>{"use strict";var oWr=au(),vWr=Mx();function fWr(r,e,t){var i,n;return t=t||0,n=vWr(r,e),i=oWr(n,{initialValue:t}),i}Bx.exports=fWr});var Cx=s((n8e,jx)=>{"use strict";function cWr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}jx.exports=cWr});var Vx=s((a8e,Gx)=>{"use strict";var lWr=Cx();Gx.exports=lWr});var Hx=s((s8e,Ux)=>{"use strict";var pWr=Vx();Ux.exports=pWr});var Dx=s((u8e,zx)=>{"use strict";var gWr=g1(),Wx=E(),Nv=V();function mWr(r,e){return Wx(r)||Wx(e)?NaN:r===Nv||e===Nv?Nv:r===e&&r===0?gWr(r)?r:e:r<e?r:e}zx.exports=mWr});var Jx=s((o8e,Xx)=>{"use strict";var dWr=Dx();Xx.exports=dWr});var Yx=s((v8e,xx)=>{"use strict";var hWr=10.900511;xx.exports=hWr});var Av=s((f8e,Zx)=>{"use strict";var yWr=2.718281828459045;Zx.exports=yWr});var Kx=s((c8e,Qx)=>{"use strict";var qWr=Hx(),bWr=In(),wWr=gi(),EWr=De(),NWr=G(),AWr=Y(),qt=ir(),Un=H(),Ov=E1(),Sv=Jx(),$x=R(),su=eu(),Hn=yv(),Tv=Yx(),OWr=Av();function SWr(r,e){var t,i,n,a,u,o,f;return n=r+Tv-.5,f=(e-r-Tv+.5)/n,r<1?e<=Hn?qt(r*$x(e)-e-bWr(r)):Un(e,r)*qt(-e)/wWr(r):(AWr(f*f*r)<=100&&r>150?(t=r*(EWr(f)-f)+e*(.5-Tv)/n,t=qt(t)):(a=r*$x(e/n),u=r-e,Sv(a,u)<=Hn||Ov(a,u)>=su?(i=u/r,Sv(a,u)/2>Hn&&Ov(a,u)/2<su?(o=Un(e/n,r/2)*qt(u/2),t=o*o):Sv(a,u)/4>Hn&&Ov(a,u)/4<su&&e>r?(o=Un(e/n,r/4)*qt(u/4),t=o*o,t*=t):i>Hn&&i<su?t=Un(e*qt(i)/n,r):t=qt(a+u)):t=Un(e/n,r)*qt(u)),t*=NWr(n/OWr)/qWr(r),t)}Qx.exports=SWr});var eY=s((l8e,rY)=>{"use strict";var TWr=.34657359027997264;rY.exports=TWr});var iY=s((p8e,tY)=>{"use strict";function IWr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}tY.exports=IWr});var vY=s((g8e,oY)=>{"use strict";var _Wr=E(),nY=er(),Iv=te(),LWr=li(),aY=_(),PWr=V(),sY=Jr(),RWr=eY(),FWr=iY(),MWr=709.782712893384,_v=.6931471803691238,Lv=19082149292705877e-26,uY=1.4426950408889634,BWr=38.816242111356935,kWr=1.0397207708399179;function jWr(r){var e,t,i,n,a,u,o,f,v,c,l,p,m;if(r===aY||_Wr(r))return r;if(r===PWr)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=BWr){if(i)return-1;if(f>=MWr)return aY}if(u=nY(f)|0,f>RWr)f<kWr?i?(n=r+_v,a=-Lv,m=-1):(n=r-_v,a=Lv,m=1):(i?m=uY*r-.5:m=uY*r+.5,m|=0,l=m,n=r-l*_v,a=l*Lv),r=n-a,c=n-r-a;else{if(u<1016070144)return r;m=0}return e=.5*r,v=r*e,o=1+v*FWr(v),l=3-o*e,p=v*((o-l)/(6-r*l)),m===0?r-(r*p-v):(t=LWr(sY+m<<20,0),p=r*(p-c)-c,p-=v,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(f=1-(p-r),m===1024?(n=nY(f)+(m<<20)|0,f=Iv(f,n)):f*=t,f-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=Iv(l,n),f=l-(p-r)):(n=sY-m<<20|0,l=Iv(l,n),f=r-(p+l),f+=1),f*=t,f))}oY.exports=jWr});var Pv=s((m8e,fY)=>{"use strict";var CWr=vY();fY.exports=CWr});var gY=s((d8e,pY)=>{"use strict";var cY=E(),lY=Y(),GWr=Pv(),VWr=R(),UWr=H(),HWr=Za();function WWr(r,e){var t;if(cY(r)||cY(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((lY(e*(r-1))<.5||lY(e)<.2)&&(t=VWr(r)*e,t<.5))return GWr(t)}else if(HWr(e)!==e)return NaN;return UWr(r,e)-1}pY.exports=WWr});var dY=s((h8e,mY)=>{"use strict";var zWr=gY();mY.exports=zWr});var yY=s((y8e,hY)=>{"use strict";function DWr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}hY.exports=DWr});var bY=s((q8e,qY)=>{"use strict";function XWr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}qY.exports=XWr});var EY=s((b8e,wY)=>{"use strict";function JWr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}wY.exports=JWr});var AY=s((w8e,NY)=>{"use strict";var Rv=R(),xWr=Ut(),YWr=yY(),ZWr=bY(),$Wr=EY(),QWr=.15896368026733398,KWr=.5281534194946289,rzr=.45201730728149414;function ezr(r,e,t){var i,n,a,u;if(r<xWr)return-Rv(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=Rv(r);while(r>=3);t=r-2}return a=t*(r+1),u=YWr(t),n+=a*QWr+a*u,n}return r<1&&(n+=-Rv(r),t=e,e=r,r+=1),r<=1.5?(a=ZWr(e),i=e*t,n+=i*KWr+i*a,n):(a=t*e,u=$Wr(-t),n+=a*rzr+a*u,n)}NY.exports=ezr});var _Y=s((E8e,IY)=>{"use strict";var OY=gi(),SY=Pv(),tzr=De(),izr=E(),TY=AY();function nzr(r){return izr(r)?NaN:r<0?r<-.5?OY(1+r)-1:SY(-tzr(r)+TY(r+2,r+1,r)):r<2?SY(TY(r+1,r,r-1)):OY(1+r)-1}IY.exports=nzr});var PY=s((N8e,LY)=>{"use strict";var azr=_Y();LY.exports=azr});var FY=s((A8e,RY)=>{"use strict";function szr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}RY.exports=szr});var BY=s((O8e,MY)=>{"use strict";var uzr=dY(),ozr=au(),vzr=PY(),fzr=FY();function czr(r,e,t){var i,n,a,u,o;return n=vzr(r),a=(n+1)/r,u=uzr(e,r),n-=u,n/=r,o=fzr(r,e),u+=1,i=t?a:0,n=-u*ozr(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}MY.exports=czr});var Fv=s((S8e,kY)=>{"use strict";var lzr=11754943508222875e-54;kY.exports=lzr});var CY=s((T8e,jY)=>{"use strict";var uu=Y(),Zr=Fv(),pzr=Ut(),gzr=1e6;function mzr(r,e,t){var i,n,a,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],a=v[0],u===0&&(u=Zr),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=Zr),o=v[1]+v[0]/o,o===0&&(o=Zr),f=1/f,n=o*f,u*=n);while(uu(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=Zr),o=v[1]+v[0]/o,o===0&&(o=Zr),f=1/f,n=o*f,u*=n);while(v&&uu(n-1)>e&&--t);return a/u}function dzr(r,e,t){var i,n,a,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=Zr),u=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=Zr),u=f[1]+f[0]/u,u===0&&(u=Zr),o=1/o,n=u*o,a*=n);while(f&&uu(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=Zr),u=f[1]+f[0]/u,u===0&&(u=Zr),o=1/o,n=u*o,a*=n);while(f&&uu(n-1)>e&&--t);return a}function hzr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||gzr,n=i.tolerance||pzr,i.keep?dzr(r,n,t):mzr(r,n,t)}jY.exports=hzr});var UY=s((I8e,VY)=>{"use strict";var GY=Y(),yzr=Ut(),Ci=Fv(),qzr=1e6;function bzr(r,e,t){var i,n,a,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=Ci),a=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=Ci),a=f[1]+f[0]/a,a===0&&(a=Ci),u=1/u,i=a*u,o*=i);while(f&&GY(i-1)>e&&--t);return n/o}function wzr(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=Ci),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=Ci),n=o[1]+o[0]/n,n===0&&(n=Ci),a=1/a,i=n*a,u*=i);while(o&&GY(i-1)>e&&--t);return u}function Ezr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||yzr,t=i.maxIter||qzr,i.keep?wzr(r,n,t):bzr(r,n,t)}VY.exports=Ezr});var WY=s((_8e,HY)=>{"use strict";var Nzr=bv(),Azr=CY(),Ozr=UY(),Mv;Nzr()?Mv=Azr:Mv=Ozr;HY.exports=Mv});var DY=s((L8e,zY)=>{"use strict";function Szr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}zY.exports=Szr});var JY=s((P8e,XY)=>{"use strict";var Tzr=WY(),Izr=DY();function _zr(r,e){var t=Izr(r,e);return 1/(e-r+1+Tzr(t))}XY.exports=_zr});var iZ=s((R8e,tZ)=>{"use strict";var Lzr=In(),Pzr=$(),Wn=gi(),xY=Y(),Rzr=ir(),YY=H(),Wr=R(),Fzr=y1(),ZY=sJ(),Mzr=m1(),$Y=eu(),Bzr=_(),kzr=vJ(),jzr=FJ(),QY=CJ(),Czr=Rx(),Bv=kx(),KY=Kx(),Gzr=BY(),rZ=JY(),Vzr=170;function eZ(r,e,t,i){var n,a,u,o,f,v,c,l,p,m,h,d,g,y,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=Vzr&&!a)return l&&e*4<r?(p=e*Wr(r)-r,p+=Wr(rZ(e,r))):!l&&e>4*r?(p=e*Wr(r)-r,o=0,p+=Wr(Bv(e,r,o)/e)):(p=eZ(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Wr(p)-e+(e-.5)*Wr(e),p+=Wr(Mzr)):(p=e*Wr(r)-r,o=0,p+=Wr(Bv(e,r,o)/e)):p=Wr(p)+Lzr(e)),p>$Y?Bzr:Rzr(p);switch(c=e<30&&e<=r+1&&r<$Y,c?(y=Pzr(e),m=y===e,f=m?!1:xY(y-e)===.5):m=f=!1,m&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<Fzr&&e>1?u=6:r<.5?-.4/Wr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,a&&e>20&&(h=xY((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=kzr(e,r),a===!1&&(p*=Wn(e));break;case 1:p=jzr(e,r),a===!1&&(p*=Wn(e));break;case 2:p=a?KY(e,r):QY(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:Wn(e),a||p>=1||ZY*p>o?(o/=p,a||e<1||ZY/e>o?(o*=-e,n=!0):o=0):o=0)),p*=Bv(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=Gzr(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?KY(e,r):QY(e,r),p!==0&&(p*=rZ(e,r));break;case 5:p=Czr(e,r),r>=e&&(l=!l);break;case 6:p=a?YY(r,e)/Wn(e+1):YY(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:Wn(e),p=d-p),p}tZ.exports=eZ});var kv=s((F8e,nZ)=>{"use strict";var Uzr=iZ();nZ.exports=Uzr});var sZ=s((M8e,aZ)=>{"use strict";var Hzr=kv(),jv=E(),Wzr=_();function zzr(r,e,t){return jv(r)||jv(e)||jv(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Wzr?1:Hzr(r*t,e)}aZ.exports=zzr});var vZ=s((B8e,oZ)=>{"use strict";var Dzr=S(),Xzr=R0().factory,Jzr=kv(),uZ=E(),xzr=_();function Yzr(r,e){if(uZ(r)||uZ(e)||r<0||e<=0)return Dzr(NaN);if(r===0)return Xzr(0);return t;function t(i){return i<=0?0:i===xzr?1:Jzr(i*e,r)}}oZ.exports=Yzr});var Cv=s((k8e,cZ)=>{"use strict";var Zzr=w(),fZ=sZ(),$zr=vZ();Zzr(fZ,"factory",$zr);cZ.exports=fZ});var pZ=s((j8e,lZ)=>{"use strict";var Qzr=Cv();function Kzr(r,e){return Qzr(r,e/2,.5)}lZ.exports=Kzr});var mZ=s((C8e,gZ)=>{"use strict";var rDr=Cv().factory;function eDr(r){return rDr(r/2,.5)}gZ.exports=eDr});var yZ=s((G8e,hZ)=>{"use strict";var tDr=w(),dZ=pZ(),iDr=mZ();tDr(dZ,"factory",iDr);hZ.exports=dZ});var EZ=s((V8e,wZ)=>{"use strict";var nDr=I(),aDr=O(),sDr=da(),qZ=q(),bZ=["values","indices","*"];function uDr(r,e){return nDr(e)?aDr(e,"returns")&&(r.returns=e.returns,sDr(bZ,r.returns)===-1)?new TypeError(qZ('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",bZ.join('", "'),r.returns)):null:new TypeError(qZ("invalid argument. Options argument must be an object. Value: `%s`.",e))}wZ.exports=uDr});var AZ=s((U8e,NZ)=>{"use strict";var oDr=O();function vDr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),oDr(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}NZ.exports=vDr});var SZ=s((H8e,OZ)=>{"use strict";var fDr=O();function cDr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),fDr(t,n)?t[n].push(a):t[n]=[a];return t}OZ.exports=cDr});var IZ=s((W8e,TZ)=>{"use strict";var lDr=O();function pDr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),lDr(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}TZ.exports=pDr});var RZ=s((z8e,PZ)=>{"use strict";var _Z=jr(),LZ=q(),gDr=EZ(),mDr=AZ(),dDr=SZ(),hDr=IZ();function yDr(r,e,t){var i,n,a;if(!_Z(r))throw new TypeError(LZ("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=gDr(i,e),n)throw n;a=t}if(!_Z(a))throw new TypeError(LZ("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?mDr(r,a):i.returns==="indices"?dDr(r,a):hDr(r,a)}PZ.exports=yDr});var MZ=s((D8e,FZ)=>{"use strict";var qDr=RZ();FZ.exports=qDr});var kZ=s((X8e,BZ)=>{"use strict";function bDr(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}BZ.exports=bDr});var GZ=s((J8e,CZ)=>{"use strict";var wDr=cr(),EDr=j().isPrimitive,NDr=I(),ADr=sr(),jZ=O(),Gv=q();function ODr(r,e){return NDr(e)?jZ(e,"alpha")&&(r.alpha=e.alpha,!EDr(r.alpha)||ADr(r.alpha))?new TypeError(Gv("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):jZ(e,"groups")&&(r.groups=e.groups,!wDr(r.groups))?new TypeError(Gv("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(Gv("invalid argument. Options argument must be an object. Value: `%s`.",e))}CZ.exports=ODr});var UZ=s((x8e,VZ)=>{"use strict";var SDr=-308;VZ.exports=SDr});var xZ=s((Y8e,JZ)=>{"use strict";var HZ=E(),ou=Mr(),WZ=H(),TDr=Y(),zZ=z2(),IDr=En(),DZ=c1(),_Dr=UZ(),LDr=l1(),PDr=IDr+1,XZ=1e308;function RDr(r,e){var t,i;return HZ(r)||HZ(e)||ou(e)?NaN:ou(r)||r===0||e<LDr||TDr(r)>PDr&&e<=0?r:e>DZ?0*r:e<_Dr?(t=WZ(10,-(e+DZ)),i=r*XZ*t,ou(i)?r:zZ(i)/XZ/t):(t=WZ(10,-e),i=r*t,ou(i)?r:zZ(i)/t)}JZ.exports=RDr});var ZZ=s((Z8e,YZ)=>{"use strict";var FDr=xZ();YZ.exports=FDr});var KZ=s(($8e,QZ)=>{"use strict";var MDr=re(),BDr=I(),kDr=fr().isPrimitive,$Z=O(),Vv=q(),Uv=ZZ();function jDr(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!BDr(r))throw new TypeError(Vv("invalid argument. First argument must be an object. Value: `%s`.",r));if($Z(r,"digits")){if(!MDr(r.digits))throw new TypeError(Vv("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if($Z(r,"decision")){if(!kDr(r.decision))throw new TypeError(Vv("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+Uv(this.pValue,-t)+`
`,i+="    statistic: "+Uv(this.statistic,-t)+`
`,i+="    df: "+Uv(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}QZ.exports=jDr});var t$=s((Q8e,e$)=>{"use strict";var CDr=jr(),GDr=I(),Ht=nr(),VDr=nn(),vu=q(),UDr=yZ(),HDr=MZ(),r$=R(),WDr=kZ(),zDr=GZ(),DDr=KZ();function XDr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,m,h,d,g,y,N,A;if(f=[],e=arguments.length,v={},GDr(arguments[e-1])&&(r=arguments[e-1],e-=1,m=zDr(v,r),m))throw m;if(v.groups){if(n=HDr(arguments[0],v.groups),i=VDr(n),e=i.length,e<2)throw new Error(vu("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)f.push(n[i[A]])}else for(A=0;A<e;A++)f.push(arguments[A]);for(u=0,t=0,o=0,h=0,y=new Array(e),N=y.slice(),A=0;A<e;A++){if(p=f[A],!CDr(p))throw new TypeError(vu("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(vu("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));y[A]=p.length-1,u+=y[A],t+=1/y[A],N[A]=WDr(p),o+=y[A]*N[A],h+=y[A]*r$(N[A])}if(o/=u,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(vu("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*r$(o)-h,l/=1+(t-1/u)/(3*(e-1)),g=e-1,c=1-UDr(l,g),d={},Ht(d,"rejected",c<=a),Ht(d,"alpha",a),Ht(d,"pValue",c),Ht(d,"statistic",l),Ht(d,"df",g),Ht(d,"method","Bartlett's test of equal variances"),Ht(d,"print",DDr),d}e$.exports=XDr});var n$=s((K8e,i$)=>{"use strict";var JDr=t$();i$.exports=JDr});var s$=s((r5e,a$)=>{"use strict";var Hv=E(),xDr=Ze();function YDr(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,v=1,Hv(a)===!1)for(v;v<r;v++){if(u+=t,f=e[u],Hv(f)){a=f;break}(f>a||f===a&&xDr(f))&&(a=f),i[o]=a,o+=n}if(Hv(a))for(v;v<r;v++)i[o]=a,o+=n;return i}a$.exports=YDr});var o$=s((e5e,u$)=>{"use strict";var Wv=E(),ZDr=Ze();function $Dr(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=a,l=1,Wv(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],Wv(c)){o=c;break}(c>o||c===o&&ZDr(c))&&(o=c),n[v]=o,v+=a}if(Wv(o))for(l;l<r;l++)n[v]=o,v+=a;return n}u$.exports=$Dr});var c$=s((t5e,f$)=>{"use strict";var QDr=w(),v$=s$(),KDr=o$();QDr(v$,"ndarray",KDr);f$.exports=v$});var p$=s((i5e,l$)=>{"use strict";var rXr=c$();l$.exports=rXr});var m$=s((n5e,g$)=>{"use strict";var eXr=E(),tXr=Ze();function iXr(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],eXr(a))return a;(a>i||a===i&&tXr(a))&&(i=a)}return i}g$.exports=iXr});var h$=s((a5e,d$)=>{"use strict";var nXr=E(),aXr=Ze();function sXr(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],nXr(u))return u;(u>n||u===n&&aXr(u))&&(n=u)}return n}d$.exports=sXr});var b$=s((s5e,q$)=>{"use strict";var uXr=w(),y$=m$(),oXr=h$();uXr(y$,"ndarray",oXr);q$.exports=y$});var E$=s((u5e,w$)=>{"use strict";var vXr=b$();w$.exports=vXr});var O$=s((o5e,A$)=>{"use strict";var N$=E(),fXr=Ze();function cXr(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(a=e[u],N$(a))return a;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],N$(f))return f;(f>a||f===a&&fXr(f))&&(a=f)}return a}A$.exports=cXr});var I$=s((v5e,T$)=>{"use strict";var S$=E(),lXr=Ze();function pXr(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],S$(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],S$(c))return c;(c>o||c===o&&lXr(c))&&(o=c)}return o}T$.exports=pXr});var P$=s((f5e,L$)=>{"use strict";var gXr=w(),_$=O$(),mXr=I$();gXr(_$,"ndarray",mXr);L$.exports=_$});var F$=s((c5e,R$)=>{"use strict";var dXr=Vt(),hXr=G(),zv=E();function yXr(r,e,t){var i,n;return zv(r)||zv(e)||zv(t)||t<0?NaN:t===0?r<e?0:1:(i=t*hXr(2),n=r-e,.5*dXr(-n/i))}R$.exports=yXr});var B$=s((l5e,M$)=>{"use strict";var qXr=S(),bXr=R0().factory,Dv=E(),wXr=G(),EXr=Vt();function NXr(r,e){var t;if(Dv(r)||Dv(e)||e<0)return qXr(NaN);if(e===0)return bXr(r);return t=e*wXr(2),i;function i(n){var a;return Dv(n)?NaN:(a=n-r,.5*EXr(-a/t))}}M$.exports=NXr});var C$=s((p5e,j$)=>{"use strict";var AXr=w(),k$=F$(),OXr=B$();AXr(k$,"factory",OXr);j$.exports=k$});var U$=s((g5e,V$)=>{"use strict";var G$=E(),SXr=R(),TXr=Ye(),IXr=Av();function _Xr(r,e){return G$(r)||G$(e)||e<=0?NaN:.5*SXr(TXr*IXr*e*e)}V$.exports=_Xr});var W$=s((m5e,H$)=>{"use strict";var LXr=U$();H$.exports=LXr});var X$=s((d5e,D$)=>{"use strict";var z$=E();function PXr(r,e){return z$(r)||z$(e)||e<=0?NaN:0}D$.exports=PXr});var x$=s((h5e,J$)=>{"use strict";var RXr=X$();J$.exports=RXr});var Z$=s((y5e,Y$)=>{"use strict";var FXr=$(),MXr=[BXr,kXr,jXr,CXr,GXr,VXr,UXr,HXr,WXr,zXr,DXr,XXr,JXr,xXr,YXr,ZXr,$Xr,QXr,KXr,rJr,eJr,tJr,iJr,nJr,aJr,sJr,uJr,oJr,vJr,fJr,cJr,lJr,pJr,gJr,mJr,dJr,hJr,yJr,qJr,bJr,wJr,EJr,NJr,AJr,OJr,SJr,TJr,IJr,_Jr,LJr,PJr,RJr,FJr,MJr,BJr,kJr,jJr,CJr,GJr,VJr,UJr,HJr,WJr,zJr,DJr,XJr,JJr,xJr,YJr,ZJr,$Jr,QJr,KJr,rxr,exr,txr,ixr,nxr,axr,sxr,uxr,oxr,vxr,fxr,cxr,lxr,pxr,gxr,mxr,dxr,hxr,yxr,qxr,bxr,wxr,Exr,Nxr,Axr,Oxr,Sxr,Txr];function BXr(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function kXr(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function jXr(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function CXr(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function GXr(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function VXr(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function UXr(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function HXr(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function WXr(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function zXr(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function DXr(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function XXr(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function JXr(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function xXr(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function YXr(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function ZXr(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function $Xr(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function QXr(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function KXr(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function rJr(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function eJr(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function tJr(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function iJr(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function nJr(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function aJr(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function sJr(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function uJr(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function oJr(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function vJr(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function fJr(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function cJr(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function lJr(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function pJr(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function gJr(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function mJr(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function dJr(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function hJr(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function yJr(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function qJr(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function bJr(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function wJr(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function EJr(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function NJr(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function AJr(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function OJr(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function SJr(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function TJr(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function IJr(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function _Jr(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function LJr(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function PJr(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function RJr(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function FJr(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function MJr(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function BJr(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function kJr(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function jJr(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function CJr(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function GJr(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function VJr(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function UJr(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function HJr(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function WJr(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function zJr(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function DJr(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function XJr(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function JJr(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function xJr(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function YJr(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function ZJr(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function $Jr(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function QJr(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function KJr(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function rxr(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function exr(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function txr(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function ixr(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function nxr(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function axr(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function sxr(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function uxr(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function oxr(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function vxr(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function fxr(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function cxr(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function lxr(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function pxr(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function gxr(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function mxr(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function dxr(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function hxr(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function yxr(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function qxr(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function bxr(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function wxr(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function Exr(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function Nxr(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function Axr(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function Oxr(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function Sxr(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function Txr(){return 1}function Ixr(r){var e=FXr(r),t=MXr[e];return t(2*r-(2*e+1))}Y$.exports=Ixr});var eQ=s((q5e,rQ)=>{"use strict";var $$=ir(),_xr=_(),Q$=Z$(),K$=.5641895835477563;function Lxr(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?K$/r:(e=r*r,K$*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):Q$(400/(4+r)):r<-26.7?_xr:(e=r*r,r<-6.1?2*$$(e):2*$$(e)-Q$(400/(4-r)))}rQ.exports=Lxr});var Xv=s((b5e,tQ)=>{"use strict";var Pxr=eQ();tQ.exports=Pxr});var aQ=s((w5e,nQ)=>{"use strict";var Rxr=R(),Fxr=De(),Mxr=Ta(),Bxr=Vt(),kxr=Xv(),jxr=V(),Jv=E(),iQ=.7071067811865475;function Cxr(r,e,t){var i;return Jv(r)||Jv(e)||Jv(t)||t<0?NaN:t===0?r<e?jxr:0:(i=(r-e)/t,i<-1?Rxr(kxr(-i*iQ)/2)-Mxr(i)/2:Fxr(-Bxr(i*iQ)/2))}nQ.exports=Cxr});var oQ=s((E5e,uQ)=>{"use strict";var sQ=E(),Gxr=V();function Vxr(r,e){return sQ(r)||sQ(e)?NaN:r<e?Gxr:0}uQ.exports=Vxr});var cQ=s((N5e,fQ)=>{"use strict";var Uxr=S(),vQ=E(),Hxr=V();function Wxr(r){if(vQ(r))return Uxr(NaN);return e;function e(t){return vQ(t)?NaN:t<r?Hxr:0}}fQ.exports=Wxr});var gQ=s((A5e,pQ)=>{"use strict";var zxr=w(),lQ=oQ(),Dxr=cQ();zxr(lQ,"factory",Dxr);pQ.exports=lQ});var yQ=s((O5e,hQ)=>{"use strict";var Xxr=S(),Jxr=gQ().factory,mQ=E(),xxr=De(),Yxr=Ta(),Zxr=Vt(),$xr=Xv(),Qxr=R(),dQ=.7071067811865475;function Kxr(r,e){if(mQ(r)||mQ(e)||e<0)return Xxr(NaN);if(e===0)return Jxr(r);return t;function t(i){var n=(i-r)/e;return n<-1?Qxr($xr(-n*dQ)/2)-Yxr(n)/2:xxr(-Zxr(n*dQ)/2)}}hQ.exports=Kxr});var wQ=s((S5e,bQ)=>{"use strict";var rYr=w(),qQ=aQ(),eYr=yQ();rYr(qQ,"factory",eYr);bQ.exports=qQ});var xv=s((T5e,EQ)=>{"use strict";var tYr=1.8378770664093456;EQ.exports=tYr});var OQ=s((I5e,AQ)=>{"use strict";var iYr=R(),NQ=H(),nYr=xv(),aYr=V(),sYr=_(),Yv=E();function uYr(r,e,t){var i,n,a;return Yv(r)||Yv(e)||Yv(t)||t<0?NaN:t===0?r===e?sYr:aYr:(i=NQ(t,2),n=-.5*(2*iYr(t)+nYr),a=-1/(2*i),n+a*NQ(r-e,2))}AQ.exports=uYr});var IQ=s((_5e,TQ)=>{"use strict";var oYr=_(),vYr=V(),SQ=E();function fYr(r,e){return SQ(r)||SQ(e)?NaN:r===e?oYr:vYr}TQ.exports=fYr});var PQ=s((L5e,LQ)=>{"use strict";var cYr=S(),lYr=_(),pYr=V(),_Q=E();function gYr(r){if(_Q(r))return cYr(NaN);return e;function e(t){return _Q(t)?NaN:t===r?lYr:pYr}}LQ.exports=gYr});var MQ=s((P5e,FQ)=>{"use strict";var mYr=w(),RQ=IQ(),dYr=PQ();mYr(RQ,"factory",dYr);FQ.exports=RQ});var CQ=s((R5e,jQ)=>{"use strict";var hYr=S(),yYr=MQ().factory,qYr=xv(),BQ=E(),kQ=H(),bYr=R();function wYr(r,e){var t,i,n;if(BQ(r)||BQ(e)||e<0)return hYr(NaN);if(e===0)return yYr(r);return t=kQ(e,2),i=-.5*(2*bYr(e)+qYr),n=-1/(2*t),a;function a(u){return i+n*kQ(u-r,2)}}jQ.exports=wYr});var UQ=s((F5e,VQ)=>{"use strict";var EYr=w(),GQ=OQ(),NYr=CQ();EYr(GQ,"factory",NYr);VQ.exports=GQ});var zQ=s((M5e,WQ)=>{"use strict";var HQ=E();function AYr(r,e){return HQ(r)||HQ(e)||e<=0?NaN:r}WQ.exports=AYr});var XQ=s((B5e,DQ)=>{"use strict";var OYr=zQ();DQ.exports=OYr});var YQ=s((k5e,xQ)=>{"use strict";var JQ=E();function SYr(r,e){return JQ(r)||JQ(e)||e<=0?NaN:r}xQ.exports=SYr});var $Q=s((j5e,ZQ)=>{"use strict";var TYr=YQ();ZQ.exports=TYr});var KQ=s((C5e,QQ)=>{"use strict";var Zv=E(),IYr=ir(),_Yr=H();function LYr(r,e,t){return Zv(r)||Zv(e)||Zv(t)||t<=0?NaN:IYr(e*r+.5*_Yr(t*r,2))}QQ.exports=LYr});var eK=s((G5e,rK)=>{"use strict";var PYr=S(),$v=E(),RYr=ir(),FYr=H();function MYr(r,e){if($v(r)||$v(e)||e<=0)return PYr(NaN);return t;function t(i){return $v(i)?NaN:RYr(r*i+.5*FYr(e*i,2))}}rK.exports=MYr});var nK=s((V5e,iK)=>{"use strict";var BYr=w(),tK=KQ(),kYr=eK();BYr(tK,"factory",kYr);iK.exports=tK});var uK=s((U5e,sK)=>{"use strict";var aK=E();function jYr(r,e){return aK(r)||aK(e)||e<=0?NaN:r}sK.exports=jYr});var vK=s((H5e,oK)=>{"use strict";var CYr=uK();oK.exports=CYr});var lK=s((W5e,cK)=>{"use strict";var GYr=ir(),fK=H(),VYr=G(),UYr=Ye(),HYr=_(),Qv=E();function WYr(r,e,t){var i,n,a;return Qv(r)||Qv(e)||Qv(t)||t<0?NaN:t===0?r===e?HYr:0:(i=fK(t,2),n=1/VYr(i*UYr),a=-1/(2*i),n*GYr(a*fK(r-e,2)))}cK.exports=WYr});var mK=s((z5e,gK)=>{"use strict";var zYr=_(),pK=E();function DYr(r,e){return pK(r)||pK(e)?NaN:r===e?zYr:0}gK.exports=DYr});var yK=s((D5e,hK)=>{"use strict";var XYr=S(),JYr=_(),dK=E();function xYr(r){if(dK(r))return XYr(NaN);return e;function e(t){return dK(t)?NaN:t===r?JYr:0}}hK.exports=xYr});var wK=s((X5e,bK)=>{"use strict";var YYr=w(),qK=mK(),ZYr=yK();YYr(qK,"factory",ZYr);bK.exports=qK});var AK=s((J5e,NK)=>{"use strict";var $Yr=S(),QYr=wK().factory,Kv=E(),KYr=G(),rZr=ir(),EK=H(),eZr=Ye();function tZr(r,e){var t,i,n;if(Kv(r)||Kv(e)||e<0)return $Yr(NaN);if(e===0)return QYr(r);return t=EK(e,2),i=1/KYr(t*eZr),n=-1/(2*t),a;function a(u){return Kv(u)?NaN:i*rZr(n*EK(u-r,2))}}NK.exports=tZr});var TK=s((x5e,SK)=>{"use strict";var iZr=w(),OK=lK(),nZr=AK();iZr(OK,"factory",nZr);SK.exports=OK});var LK=s((Y5e,_K)=>{"use strict";var IK=E();function aZr(r,e){return IK(r)||IK(e)||e<=0?NaN:0}_K.exports=aZr});var RK=s((Z5e,PK)=>{"use strict";var sZr=LK();PK.exports=sZr});var BK=s(($5e,MK)=>{"use strict";var FK=E();function uZr(r,e){return FK(r)||FK(e)||e<=0?NaN:e}MK.exports=uZr});var jK=s((Q5e,kK)=>{"use strict";var oZr=BK();kK.exports=oZr});var VK=s((K5e,GK)=>{"use strict";var CK=E();function vZr(r,e){return CK(r)||CK(e)||e<=0?NaN:e*e}GK.exports=vZr});var HK=s((rpe,UK)=>{"use strict";var fZr=VK();UK.exports=fZr});var zK=s((epe,WK)=>{"use strict";var Sr=nr(),cZr=C$(),lZr=W$(),pZr=x$(),gZr=wQ(),mZr=UQ(),dZr=XQ(),hZr=$Q(),yZr=nK(),qZr=vK(),bZr=TK(),wZr=C3(),EZr=RK(),NZr=jK(),AZr=HK();function OZr(r){return Sr(r,"cdf",cZr),Sr(r,"entropy",lZr),Sr(r,"kurtosis",pZr),Sr(r,"logcdf",gZr),Sr(r,"logpdf",mZr),Sr(r,"mean",dZr),Sr(r,"median",hZr),Sr(r,"mgf",yZr),Sr(r,"mode",qZr),Sr(r,"pdf",bZr),Sr(r,"quantile",wZr),Sr(r,"skewness",EZr),Sr(r,"stdev",NZr),Sr(r,"variance",AZr),r}WK.exports=OZr});var XK=s((tpe,DK)=>{"use strict";var SZr=nr(),TZr=zK();function IZr(r){return SZr(r,"normal",TZr({})),r}DK.exports=IZr});var xK=s((ipe,JK)=>{"use strict";var zn=nr(),_Zr=n$(),LZr=p$().ndarray,PZr=E$().ndarray,RZr=P$().ndarray,FZr=XK();function MZr(r){return zn(r,"bartlettTest",_Zr),zn(r,"cumax",LZr),zn(r,"max",PZr),zn(r,"mskmax",RZr),zn(r,"dists",FZr({})),r}JK.exports=MZr});var ZK=s((npe,YK)=>{"use strict";var BZr=rr().isPrimitive,kZr=q();function jZr(r){return e;function e(t){if(!BZr(t))throw new TypeError(kZr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}YK.exports=jZr});var QK=s((ape,$K)=>{"use strict";var CZr=ZK();$K.exports=CZr});var trr=s((spe,err)=>{"use strict";var KK=rr().isPrimitive,rrr=q();function GZr(r){return e;function e(t,i){if(!KK(t))throw new TypeError(rrr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!KK(i))throw new TypeError(rrr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}err.exports=GZr});var nrr=s((upe,irr)=>{"use strict";var VZr=trr();irr.exports=VZr});var srr=s((ope,arr)=>{"use strict";var rf=rr().isPrimitive,ef=q();function UZr(r){return e;function e(t,i,n){if(!rf(t))throw new TypeError(ef("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!rf(i))throw new TypeError(ef("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!rf(n))throw new TypeError(ef("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}arr.exports=UZr});var orr=s((vpe,urr)=>{"use strict";var HZr=srr();urr.exports=HZr});var frr=s((fpe,vrr)=>{"use strict";var tf=nr(),WZr=QK(),zZr=nrr(),DZr=orr();function XZr(r){return tf(r,"s_o",WZr),tf(r,"ss_o",zZr),tf(r,"sss_o",DZr),r}vrr.exports=XZr});var lrr=s((cpe,crr)=>{"use strict";function JZr(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}crr.exports=JZr});var fu=s((lpe,prr)=>{"use strict";var xZr=lrr();prr.exports=xZr});var mrr=s((ppe,grr)=>{"use strict";function YZr(r){return r.toLowerCase()}grr.exports=YZr});var Gi=s((gpe,drr)=>{"use strict";var ZZr=mrr();drr.exports=ZZr});var yrr=s((mpe,hrr)=>{"use strict";function $Zr(r,e,t){return r.replace(e,t)}hrr.exports=$Zr});var Wt=s((dpe,qrr)=>{"use strict";var QZr=yrr();qrr.exports=QZr});var wrr=s((hpe,brr)=>{"use strict";var KZr=typeof String.prototype.trim<"u";brr.exports=KZr});var nf=s((ype,Err)=>{"use strict";var r$r=String.prototype.trim;Err.exports=r$r});var Srr=s((qpe,Orr)=>{"use strict";var Nrr=nf(),e$r=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,Arr="\u180E";function t$r(){return Nrr.call(e$r)===""&&Nrr.call(Arr)===Arr}Orr.exports=t$r});var Irr=s((bpe,Trr)=>{"use strict";var i$r=Wt(),n$r=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function a$r(r){return i$r(r,n$r,"$1")}Trr.exports=a$r});var Lrr=s((wpe,_rr)=>{"use strict";var s$r=nf();function u$r(r){return s$r.call(r)}_rr.exports=u$r});var Vi=s((Epe,Prr)=>{"use strict";var o$r=wrr(),v$r=Srr(),f$r=Irr(),c$r=Lrr(),af;o$r&&v$r()?af=c$r:af=f$r;Prr.exports=af});var Frr=s((Npe,Rrr)=>{"use strict";var l$r=fu(),p$r=Gi(),cu=Wt(),g$r=Vi(),m$r=/\s+/g,d$r=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,h$r=/(?:\s|^)([^\s]+)(?=\s|$)/g,y$r=/([a-z0-9])([A-Z])/g;function q$r(r,e,t){return e=p$r(e),t===0?e:l$r(e)}function b$r(r){return r=cu(r,d$r," "),r=cu(r,m$r," "),r=cu(r,y$r,"$1 $2"),r=g$r(r),cu(r,h$r,q$r)}Rrr.exports=b$r});var Brr=s((Ape,Mrr)=>{"use strict";var w$r=Frr();Mrr.exports=w$r});var jrr=s((Ope,krr)=>{"use strict";var E$r=rr().isPrimitive,N$r=q(),A$r=Brr();function O$r(r){if(!E$r(r))throw new TypeError(N$r("invalid argument. First argument must be a string. Value: `%s`.",r));return A$r(r)}krr.exports=O$r});var Grr=s((Spe,Crr)=>{"use strict";var S$r=jrr();Crr.exports=S$r});var Urr=s((Tpe,Vrr)=>{"use strict";var T$r=rr().isPrimitive,I$r=q(),_$r=fu();function L$r(r){if(!T$r(r))throw new TypeError(I$r("invalid argument. First argument must be a string. Value: `%s`.",r));return _$r(r)}Vrr.exports=L$r});var Wrr=s((Ipe,Hrr)=>{"use strict";var P$r=Urr();Hrr.exports=P$r});var Drr=s((_pe,zrr)=>{"use strict";function R$r(r){return r.toUpperCase()}zrr.exports=R$r});var Jrr=s((Lpe,Xrr)=>{"use strict";var F$r=Drr();Xrr.exports=F$r});var Yrr=s((Ppe,xrr)=>{"use strict";var M$r=Jrr(),sf=Wt(),B$r=Vi(),k$r=/\s+/g,j$r=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,C$r=/([a-z0-9])([A-Z])/g;function G$r(r){return r=sf(r,j$r," "),r=sf(r,C$r,"$1 $2"),r=B$r(r),r=sf(r,k$r,"_"),M$r(r)}xrr.exports=G$r});var $rr=s((Rpe,Zrr)=>{"use strict";var V$r=Yrr();Zrr.exports=V$r});var Krr=s((Fpe,Qrr)=>{"use strict";var U$r=rr().isPrimitive,H$r=q(),W$r=$rr();function z$r(r){if(!U$r(r))throw new TypeError(H$r("invalid argument. Must provide a string. Value: `%s`.",r));return W$r(r)}Qrr.exports=z$r});var eer=s((Mpe,rer)=>{"use strict";var D$r=Krr();rer.exports=D$r});var ier=s((Bpe,ter)=>{"use strict";var X$r=Gi(),uf=Wt(),J$r=Vi(),x$r=/\s+/g,Y$r=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Z$r=/([a-z0-9])([A-Z])/g;function $$r(r){return r=uf(r,Y$r," "),r=uf(r,Z$r,"$1 $2"),r=J$r(r),r=uf(r,x$r,"-"),X$r(r)}ter.exports=$$r});var aer=s((kpe,ner)=>{"use strict";var Q$r=ier();ner.exports=Q$r});var uer=s((jpe,ser)=>{"use strict";var K$r=rr().isPrimitive,rQr=q(),eQr=aer();function tQr(r){if(!K$r(r))throw new TypeError(rQr("invalid argument. Must provide a string. Value: `%s`.",r));return eQr(r)}ser.exports=tQr});var ver=s((Cpe,oer)=>{"use strict";var iQr=uer();oer.exports=iQr});var cer=s((Gpe,fer)=>{"use strict";var nQr=rr().isPrimitive,aQr=q(),sQr=Gi();function uQr(r){if(!nQr(r))throw new TypeError(aQr("invalid argument. Must provide a string. Value: `%s`.",r));return sQr(r)}fer.exports=uQr});var per=s((Vpe,ler)=>{"use strict";var oQr=cer();ler.exports=oQr});var mer=s((Upe,ger)=>{"use strict";var vQr=fu(),fQr=Gi(),lu=Wt(),cQr=Vi(),lQr=/\s+/g,pQr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,gQr=/(?:\s|^)([^\s]+)(?=\s|$)/g,mQr=/([a-z0-9])([A-Z])/g;function dQr(r,e){return vQr(fQr(e))}function hQr(r){return r=lu(r,pQr," "),r=lu(r,lQr," "),r=lu(r,mQr,"$1 $2"),r=cQr(r),lu(r,gQr,dQr)}ger.exports=hQr});var her=s((Hpe,der)=>{"use strict";var yQr=mer();der.exports=yQr});var qer=s((Wpe,yer)=>{"use strict";var qQr=rr().isPrimitive,bQr=q(),wQr=her();function EQr(r){if(!qQr(r))throw new TypeError(bQr("invalid argument. First argument must be a string. Value: `%s`.",r));return wQr(r)}yer.exports=EQr});var wer=s((zpe,ber)=>{"use strict";var NQr=qer();ber.exports=NQr});var Ner=s((Dpe,Eer)=>{"use strict";var AQr=Gi(),of=Wt(),OQr=Vi(),SQr=/\s+/g,TQr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,IQr=/([a-z0-9])([A-Z])/g;function _Qr(r){return r=of(r,TQr," "),r=of(r,IQr,"$1 $2"),r=OQr(r),r=of(r,SQr,"_"),AQr(r)}Eer.exports=_Qr});var Oer=s((Xpe,Aer)=>{"use strict";var LQr=Ner();Aer.exports=LQr});var Ter=s((Jpe,Ser)=>{"use strict";var PQr=rr().isPrimitive,RQr=q(),FQr=Oer();function MQr(r){if(!PQr(r))throw new TypeError(RQr("invalid argument. Must provide a string. Value: `%s`.",r));return FQr(r)}Ser.exports=MQr});var _er=s((xpe,Ier)=>{"use strict";var BQr=Ter();Ier.exports=BQr});var Rer=s((Ype,Per)=>{"use strict";var kQr=I(),Ler=O(),jQr=fr().isPrimitive,CQr=rr().isPrimitive,vf=q();function GQr(r,e){return kQr(e)?Ler(e,"flags")&&(r.flags=e.flags,!CQr(r.flags))?new TypeError(vf("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):Ler(e,"capture")&&(r.capture=e.capture,!jQr(r.capture))?new TypeError(vf("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(vf("invalid argument. Options argument must be an object. Value: `%s`.",e))}Per.exports=GQr});var pu=s((Zpe,Mer)=>{"use strict";var VQr=Rer(),Fer=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function UQr(r){var e,t;if(arguments.length>0){if(e={},t=VQr(e,r),t)throw t;return e.capture?new RegExp("("+Fer+")",e.flags):new RegExp(Fer,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}Mer.exports=UQr});var ker=s(($pe,Ber)=>{"use strict";var HQr=pu(),WQr=HQr({capture:!0});Ber.exports=WQr});var Cer=s((Qpe,jer)=>{"use strict";var zQr=pu(),DQr=zQr();jer.exports=DQr});var Uer=s((Kpe,Ver)=>{"use strict";var Ger=w(),ff=pu(),XQr=ker(),JQr=Cer();Ger(ff,"REGEXP",JQr);Ger(ff,"REGEXP_CAPTURE",XQr);Ver.exports=ff});var Wer=s((r7e,Her)=>{"use strict";var xQr=Uer().REGEXP;function YQr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),xQr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}Her.exports=YQr});var Der=s((e7e,zer)=>{"use strict";var ZQr=Wer();zer.exports=ZQr});var Jer=s((t7e,Xer)=>{"use strict";var $Qr=rr().isPrimitive,QQr=q(),KQr=Der();function rKr(r){if(!$Qr(r))throw new TypeError(QQr("invalid argument. Must provide a string. Value: `%s`.",r));return KQr(r)}Xer.exports=rKr});var Yer=s((i7e,xer)=>{"use strict";var eKr=Jer();xer.exports=eKr});var $er=s((n7e,Zer)=>{"use strict";function tKr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}Zer.exports=tKr});var Ker=s((a7e,Qer)=>{"use strict";var iKr=$er();Qer.exports=iKr});var etr=s((s7e,rtr)=>{"use strict";var nKr=rr().isPrimitive,aKr=q(),sKr=Ker();function uKr(r){if(!nKr(r))throw new TypeError(aKr("invalid argument. First argument must be a string. Value: `%s`.",r));return sKr(r)}rtr.exports=uKr});var itr=s((u7e,ttr)=>{"use strict";var oKr=etr();ttr.exports=oKr});var atr=s((o7e,ntr)=>{"use strict";var vKr=rr().isPrimitive,fKr=q();function cKr(r){if(!vKr(r))throw new TypeError(fKr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}ntr.exports=cKr});var utr=s((v7e,str)=>{"use strict";var lKr=atr();str.exports=lKr});var vtr=s((f7e,otr)=>{"use strict";var $r=nr(),pKr=Grr(),gKr=Wrr(),mKr=eer(),dKr=ver(),hKr=per(),yKr=wer(),qKr=_er(),bKr=Yer(),wKr=itr(),EKr=utr();function NKr(r){return $r(r,"camelcase",pKr),$r(r,"capitalize",gKr),$r(r,"constantcase",mKr),$r(r,"kebabcase",dKr),$r(r,"lowercase",hKr),$r(r,"pascalcase",yKr),$r(r,"snakecase",qKr),$r(r,"startcase",bKr),$r(r,"uncapitalize",wKr),$r(r,"uppercase",EKr),r}otr.exports=NKr});var ctr=s((c7e,ftr)=>{"use strict";var AKr=nr(),OKr=frr(),SKr=vtr();function TKr(r){return AKr(r,"tools",OKr({})),r=SKr(r),r}ftr.exports=TKr});var ptr=s((l7e,ltr)=>{"use strict";var ke=nr(),IKr=Bm(),_Kr=my(),LKr=Ay(),PKr=ww(),RKr=sP(),FKr=xX(),MKr=nJ(),BKr=xK(),kKr=ctr();function jKr(){var r={};return ke(r,"array",IKr({})),ke(r,"assert",_Kr({})),ke(r,"blas",LKr({})),ke(r,"datasets",PKr({})),ke(r,"math",RKr({})),ke(r,"random",FKr({})),ke(r,"simulate",MKr({})),ke(r,"stats",BKr({})),ke(r,"string",kKr({})),r}ltr.exports=jKr});var mtr=s((p7e,gtr)=>{"use strict";var CKr=w(),cf=ptr();CKr(cf,"CACHED",cf());gtr.exports=cf});var VKr=s((g7e,dtr)=>{var GKr=mtr().CACHED;dtr.exports=GKr});return VKr();})();
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
	out = ns.blas.saxpy( N, alpha, ns.array.flattenArray( x ), strideX, offsetX, ns.array.flattenArray( y ), strideY, offsetY ); 
	// If provided two rows, return a row...
	if ( x.length === 1 && y.length === 1 ) {
		return [ out ];
	}
	return out;
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
	out = ns.blas.daxpy( N, alpha, ns.array.flattenArray( x ), strideX, offsetX, ns.array.flattenArray( y ), strideY, offsetY ); 
	// If provided two rows, return a row...
	if ( x.length === 1 && y.length === 1 ) {
		return [ out ];
	}
	return out;
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
	return ns.array.filled2d( value, [ nrows, ncols ] );
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
	return ns.array.zeros2d( [ nrows, ncols ] );
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
	return ns.array.ones2d( [ nrows, ncols ] );
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
	return ns.array.linspace( start, stop, length, opts );
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
	it = ns.simulate.iterSawtoothWave( opts );
	return ns.array.iterator2array( it );
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
	data = ns.datasets.ANSCOMBES_QUARTET(); 
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.binet );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.bessely0 );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ceil );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.avercos );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.bessely1 );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.atanh );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ceil10 );
}
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
* STDLIB_MUL( -1.2, 2.0 )
*
* @example
* STDLIB_MUL( A1:A100, B1:B100 )
*
* @example
* STDLIB_MUL( A1:D100, 2.0 )
*
* @example
* STDLIB_MUL( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_MUL( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.mul );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acsch );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.aversin );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ceil2 );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.abs2 );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.sin );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acot );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acos );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.asinh );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.asin );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cos );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.zeta );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.sqrt );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acsc );
}
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
* STDLIB_SUB( -1.2, 2.0 )
*
* @example
* STDLIB_SUB( A1:A100, B1:B100 )
*
* @example
* STDLIB_SUB( A1:D100, 2.0 )
*
* @example
* STDLIB_SUB( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_SUB( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.sub );
}
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
* STDLIB_ADD( -1.2, 2.0 )
*
* @example
* STDLIB_ADD( A1:A100, B1:B100 )
*
* @example
* STDLIB_ADD( A1:D100, 2.0 )
*
* @example
* STDLIB_ADD( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ADD( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.add );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.abs );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.besselj0 );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acoversin );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.atan );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ahavercos );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.besselj1 );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acosh );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ahaversin );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acovercos );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cbrt );
}
var __STDLIB_KEBABCASE = ns.string.tools.s_o( ns.string.kebabcase ); 
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
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_KEBABCASE );
		return value;
	}
	return __STDLIB_KEBABCASE( value );
}
var __STDLIB_STARTCASE = ns.string.tools.s_o( ns.string.startcase ); 
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
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_STARTCASE );
		return value;
	}
	return __STDLIB_STARTCASE( value );
}
var __STDLIB_SNAKECASE = ns.string.tools.s_o( ns.string.snakecase ); 
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
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_SNAKECASE );
		return value;
	}
	return __STDLIB_SNAKECASE( value );
}
var __STDLIB_UPPERCASE = ns.string.tools.s_o( ns.string.uppercase ); 
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
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_UPPERCASE );
		return value;
	}
	return __STDLIB_UPPERCASE( value );
}
var __STDLIB_CONSTANTCASE = ns.string.tools.s_o( ns.string.constantcase ); 
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
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CONSTANTCASE );
		return value;
	}
	return __STDLIB_CONSTANTCASE( value );
}
var __STDLIB_UNCAPITALIZE = ns.string.tools.s_o( ns.string.uncapitalize ); 
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
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_UNCAPITALIZE );
		return value;
	}
	return __STDLIB_UNCAPITALIZE( value );
}
var __STDLIB_LOWERCASE = ns.string.tools.s_o( ns.string.lowercase ); 
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
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_LOWERCASE );
		return value;
	}
	return __STDLIB_LOWERCASE( value );
}
var __STDLIB_CAMELCASE = ns.string.tools.s_o( ns.string.camelcase ); 
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
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CAMELCASE );
		return value;
	}
	return __STDLIB_CAMELCASE( value );
}
var __STDLIB_CAPITALIZE = ns.string.tools.s_o( ns.string.capitalize ); 
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
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CAPITALIZE );
		return value;
	}
	return __STDLIB_CAPITALIZE( value );
}
var __STDLIB_PASCALCASE = ns.string.tools.s_o( ns.string.pascalcase ); 
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
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_PASCALCASE );
		return value;
	}
	return __STDLIB_PASCALCASE( value );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Degrees of freedom' );
	rand = ns.random.chi( k, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			sd = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.bernoulli( p, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.boxMuller({
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			sd = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			sd = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			sd = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( lambda, 'Rate parameter' );
	rand = ns.random.exponential( lambda, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], f );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.geometric( p, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( a );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( v, 'Degrees of freedom' );
	rand = ns.random.t( v, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], f );
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
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Degrees of freedom' );
	rand = ns.random.chisquare( k, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			sd = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( lambda, 'Mean parameter' );
	rand = ns.random.poisson( lambda, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( sigma, 'Scale parameter' );
	rand = ns.random.rayleigh( sigma, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.improvedZiggurat({
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], f );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.base.normalizeSeed( v );
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
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
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
	out = ns.stats.bartlettTest( ns.array.flattenArray( values ), opts );
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
			out.push( ns.stats.max( N, x[ i ], 1, 0 ) );
		}
		return out;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	M = x[ 0 ].length; // number of columns
	N = x.length;      // number of rows
	// Flatten the input array to a strided array in row-major order:
	sarray = ns.array.flattenArray( x );
	// Set the offset which defines the pointer to the first indexed element in a column:
	offset = 0;
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		out.push( ns.stats.max( N, sarray, M, offset ) );
		offset += 1;
	}
	return [ out ];
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
			out.push( ns.stats.mskmax( N, x[ ix ], sx, 0, mask[ im ], sm, 0 ) );
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
	sarray = ns.array.flattenArray( x );
	smask = ns.array.flattenArray( mask );
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		out.push( ns.stats.mskmax( N, sarray, sx, ix, smask, sm, im ) );
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
			ns.stats.cumax( N, x[ i ], 1, 0, x[ i ], 1, 0 );
		}
		return x;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	M = x[ 0 ].length; // number of columns
	N = x.length;      // number of rows
	// Flatten the input array to a strided array in row-major order:
	sarray = ns.array.flattenArray( x );
	// Set the offset which defines the pointer to the first indexed element in a column:
	offset = 0;
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		ns.stats.cumax( N, sarray, M, offset, sarray, M, offset );
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
* @throws {Error} input arguments must be broadcast compatible
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.variance );
}
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
* @throws {Error} input arguments must be broadcast compatible
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.mean );
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
* @throws {Error} input arguments must be broadcast compatible
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
	var shape;
	var args;
	var opts;
	var out;
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
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.array.normalizeBroadcastArgs( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_LOGPDF_DTYPES, __STDLIB_DISTS_NORMAL_LOGPDF_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.array.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.array.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.math.tools.ddd_d( ns.stats.dists.normal.logpdf, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.array.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
}
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
* @throws {Error} input arguments must be broadcast compatible
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.mode );
}
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
* @throws {Error} input arguments must be broadcast compatible
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.median );
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
* @throws {Error} input arguments must be broadcast compatible
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
	var shape;
	var args;
	var opts;
	var out;
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
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.array.normalizeBroadcastArgs( [ p, mu, sigma ], __STDLIB_DISTS_NORMAL_QUANTILE_DTYPES, __STDLIB_DISTS_NORMAL_QUANTILE_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.array.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.array.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.math.tools.ddd_d( ns.stats.dists.normal.quantile, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.array.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
}
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
* @throws {Error} input arguments must be broadcast compatible
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.entropy );
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
* @throws {Error} input arguments must be broadcast compatible
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
	var shape;
	var args;
	var opts;
	var out;
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
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.array.normalizeBroadcastArgs( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_PDF_DTYPES, __STDLIB_DISTS_NORMAL_PDF_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.array.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.array.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.math.tools.ddd_d( ns.stats.dists.normal.pdf, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.array.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
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
* @throws {Error} input arguments must be broadcast compatible
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
	var shape;
	var args;
	var opts;
	var out;
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
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.array.normalizeBroadcastArgs( [ t, mu, sigma ], __STDLIB_DISTS_NORMAL_MGF_DTYPES, __STDLIB_DISTS_NORMAL_MGF_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.array.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.array.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.math.tools.ddd_d( ns.stats.dists.normal.mgf, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.array.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
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
* @throws {Error} input arguments must be broadcast compatible
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
	var shape;
	var args;
	var opts;
	var out;
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
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.array.normalizeBroadcastArgs( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_CDF_DTYPES, __STDLIB_DISTS_NORMAL_CDF_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.array.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.array.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.math.tools.ddd_d( ns.stats.dists.normal.cdf, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.array.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
}
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
* @throws {Error} input arguments must be broadcast compatible
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.kurtosis );
}
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
* @throws {Error} input arguments must be broadcast compatible
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.stdev );
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
* @throws {Error} input arguments must be broadcast compatible
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
	var shape;
	var args;
	var opts;
	var out;
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
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.array.normalizeBroadcastArgs( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_LOGCDF_DTYPES, __STDLIB_DISTS_NORMAL_LOGCDF_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.array.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.array.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.math.tools.ddd_d( ns.stats.dists.normal.logcdf, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.array.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
}
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
* @throws {Error} input arguments must be broadcast compatible
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.skewness );
}
