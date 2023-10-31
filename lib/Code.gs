/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var m4=s((Are,g4)=>{"use strict";var Rtr=typeof Object.defineProperty=="function"?Object.defineProperty:null;g4.exports=Rtr});var h4=s((Ore,d4)=>{"use strict";var Ftr=m4();function Mtr(){try{return Ftr({},"x",{}),!0}catch{return!1}}d4.exports=Mtr});var y4=s((Sre,q4)=>{"use strict";var Btr=Object.defineProperty;q4.exports=Btr});var bu=s((Tre,b4)=>{"use strict";function ktr(r){return typeof r=="number"}b4.exports=ktr});var wu=s((Ire,E4)=>{"use strict";function jtr(r){return r[0]==="-"}function w4(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Ctr(r,e,t){var i=!1,n=e-r.length;return n<0||(jtr(r)&&(i=!0,r=r.substr(1)),r=t?r+w4(n):w4(n)+r,i&&(r="-"+r)),r}E4.exports=Ctr});var S4=s((_re,O4)=>{"use strict";var Gtr=bu(),N4=wu(),Vtr=String.prototype.toLowerCase,A4=String.prototype.toUpperCase;function Utr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Gtr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=N4(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=N4(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===A4.call(r.specifier)?A4.call(t):Vtr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}O4.exports=Utr});var I4=s((Lre,T4)=>{"use strict";function Htr(r){return typeof r=="string"}T4.exports=Htr});var P4=s((Pre,L4)=>{"use strict";var Wtr=bu(),ztr=Math.abs,Dtr=String.prototype.toLowerCase,_4=String.prototype.toUpperCase,bt=String.prototype.replace,Xtr=/e\+(\d)$/,Jtr=/e-(\d)$/,xtr=/^(\d+)$/,Ytr=/^(\d+)e/,Ztr=/\.0$/,$tr=/\.0*e/,Qtr=/(\..*[^0])0*e/;function Ktr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Wtr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":ztr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=bt.call(t,Qtr,"$1e"),t=bt.call(t,$tr,"e"),t=bt.call(t,Ztr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=bt.call(t,Xtr,"e+0$1"),t=bt.call(t,Jtr,"e-0$1"),r.alternate&&(t=bt.call(t,xtr,"$1."),t=bt.call(t,Ytr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===_4.call(r.specifier)?_4.call(t):Dtr.call(t),t}L4.exports=Ktr});var M4=s((Rre,F4)=>{"use strict";function R4(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function rir(r,e,t){var i=e-r.length;return i<0||(r=t?r+R4(i):R4(i)+r),r}F4.exports=rir});var k4=s((Fre,B4)=>{"use strict";var eir=S4(),tir=I4(),iir=P4(),nir=M4(),air=wu(),sir=String.fromCharCode,Jn=isNaN,uir=Array.isArray;function oir(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function vir(r){var e,t,i,n,a,u,o,f,v;if(!uir(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],tir(i))u+=i;else{if(e=i.precision!==void 0,i=oir(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Jn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Jn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=eir(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Jn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Jn(a)?String(i.arg):sir(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=iir(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=air(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=nir(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}B4.exports=vir});var C4=s((Mre,j4)=>{"use strict";var fir=k4();j4.exports=fir});var V4=s((Bre,G4)=>{"use strict";var xn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function cir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function lir(r){var e,t,i,n;for(t=[],n=0,i=xn.exec(r);i;)e=r.slice(n,xn.lastIndex-i[0].length),e.length&&t.push(e),t.push(cir(i)),n=xn.lastIndex,i=xn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}G4.exports=lir});var H4=s((kre,U4)=>{"use strict";var pir=V4();U4.exports=pir});var z4=s((jre,W4)=>{"use strict";function gir(r){return typeof r=="string"}W4.exports=gir});var J4=s((Cre,X4)=>{"use strict";var mir=C4(),dir=H4(),hir=z4();function D4(r){var e,t,i;if(!hir(r))throw new TypeError(D4("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=dir(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return mir.apply(null,t)}X4.exports=D4});var y=s((Gre,x4)=>{"use strict";var qir=J4();x4.exports=qir});var rv=s((Vre,K4)=>{"use strict";var Y4=y(),zt=Object.prototype,Z4=zt.toString,$4=zt.__defineGetter__,Q4=zt.__defineSetter__,yir=zt.__lookupGetter__,bir=zt.__lookupSetter__;function wir(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||Z4.call(r)==="[object Array]")throw new TypeError(Y4("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Z4.call(t)==="[object Array]")throw new TypeError(Y4("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(yir.call(r,e)||bir.call(r,e)?(i=r.__proto__,r.__proto__=zt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$4&&$4.call(r,e,t.get),u&&Q4&&Q4.call(r,e,t.set),r}K4.exports=wir});var je=s((Ure,ev)=>{"use strict";var Eir=h4(),Nir=y4(),Air=rv(),Eu;Eir()?Eu=Nir:Eu=Air;ev.exports=Eu});var iv=s((Hre,tv)=>{"use strict";var Oir=je();function Sir(r,e,t){Oir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}tv.exports=Sir});var w=s((Wre,nv)=>{"use strict";var Tir=iv();nv.exports=Tir});var sv=s((zre,av)=>{"use strict";var Iir=je();function _ir(r,e,t){Iir(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}av.exports=_ir});var nr=s((Dre,uv)=>{"use strict";var Lir=sv();uv.exports=Lir});var vv=s((Xre,ov)=>{"use strict";function Pir(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}ov.exports=Pir});var cv=s((Jre,fv)=>{"use strict";var Rir=vv();fv.exports=Rir});var pv=s((xre,lv)=>{"use strict";function Fir(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}lv.exports=Fir});var Nu=s((Yre,gv)=>{"use strict";var Mir=pv();gv.exports=Mir});var dv=s((Zre,mv)=>{"use strict";var Bir=Nu();function kir(r){return Bir(0,r)}mv.exports=kir});var Au=s(($re,hv)=>{"use strict";var jir=dv();hv.exports=jir});var bv=s((Qre,yv)=>{"use strict";var Hi=cv(),Cir=Au(),qv=y();function Gir(r,e,t){var i,n,a,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(a=Cir(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(qv("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Hi(e).join(", "),Hi(t).join(", "),v));if(f===n)a[v]=1;else if(f===1)a[v]=0;else throw new Error(qv("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Hi(e).join(", "),Hi(t).join(", "),v))}return{ref:r,data:i,shape:Hi(t),strides:a}}yv.exports=Gir});var Ev=s((Kre,wv)=>{"use strict";var Vir=bv();wv.exports=Vir});var Ov=s((ree,Av)=>{"use strict";var Nv=Ev();function Uir(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,k,T,D,vr;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(k=Nv(r[0],e[0],N),T=k.data,A=k.strides,i=A[1],n=A[0],k=Nv(r[1],e[1],N),D=k.data,A=k.strides,a=A[1],u=A[0],vr=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,m=0,d=T[p],g=D[h],q=vr[c],v=0;v<o;v++)q[v]=t(d[l],g[m]),l+=i,m+=a;p+=n,h+=u}}Av.exports=Uir});var Ou=s((eee,Sv)=>{"use strict";var Hir=Ov();Sv.exports=Hir});var Iv=s((tee,Tv)=>{"use strict";function Wir(r){var e,t,i,n,a,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}Tv.exports=Wir});var Su=s((iee,_v)=>{"use strict";var zir=Iv();_v.exports=zir});var Pv=s((nee,Lv)=>{"use strict";var Dir=Nu();function Xir(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(Dir(r,i));return t}Lv.exports=Xir});var Yn=s((aee,Rv)=>{"use strict";var Jir=Pv();Rv.exports=Jir});var Mv=s((see,Fv)=>{"use strict";function xir(r,e,t){var i,n,a,u,o,f;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}Fv.exports=xir});var kv=s((uee,Bv)=>{"use strict";var Yir=Mv();Bv.exports=Yir});var Cv=s((oee,jv)=>{"use strict";function Zir(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}jv.exports=Zir});var Tu=s((vee,Gv)=>{"use strict";var $ir=Cv();Gv.exports=$ir});var Uv=s((fee,Vv)=>{"use strict";var Qir=/./;Vv.exports=Qir});var Iu=s((cee,Hv)=>{"use strict";function Kir(r){return typeof r=="boolean"}Hv.exports=Kir});var zv=s((lee,Wv)=>{"use strict";function rnr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Wv.exports=rnr});var Xv=s((pee,Dv)=>{"use strict";var enr=zv();Dv.exports=enr});var xv=s((gee,Jv)=>{"use strict";var tnr=Xv(),inr=tnr();function nnr(){return inr&&typeof Symbol.toStringTag=="symbol"}Jv.exports=nnr});var Wi=s((mee,Yv)=>{"use strict";var anr=xv();Yv.exports=anr});var _u=s((dee,Zv)=>{"use strict";var snr=Object.prototype.toString;Zv.exports=snr});var Qv=s((hee,$v)=>{"use strict";var unr=_u();function onr(r){return unr.call(r)}$v.exports=onr});var rf=s((qee,Kv)=>{"use strict";var vnr=Object.prototype.hasOwnProperty;function fnr(r,e){return r==null?!1:vnr.call(r,e)}Kv.exports=fnr});var O=s((yee,ef)=>{"use strict";var cnr=rf();ef.exports=cnr});var nf=s((bee,tf)=>{"use strict";var lnr=typeof Symbol=="function"?Symbol:void 0;tf.exports=lnr});var Lu=s((wee,af)=>{"use strict";var pnr=nf();af.exports=pnr});var of=s((Eee,uf)=>{"use strict";var sf=Lu(),gnr=typeof sf=="function"?sf.toStringTag:"";uf.exports=gnr});var ff=s((Nee,vf)=>{"use strict";var mnr=O(),zi=of(),Pu=_u();function dnr(r){var e,t,i;if(r==null)return Pu.call(r);t=r[zi],e=mnr(r,zi);try{r[zi]=void 0}catch{return Pu.call(r)}return i=Pu.call(r),e?r[zi]=t:delete r[zi],i}vf.exports=dnr});var tr=s((Aee,cf)=>{"use strict";var hnr=Wi(),qnr=Qv(),ynr=ff(),Ru;hnr()?Ru=ynr:Ru=qnr;cf.exports=Ru});var pf=s((Oee,lf)=>{"use strict";var bnr=Boolean;lf.exports=bnr});var mf=s((See,gf)=>{"use strict";var wnr=pf();gf.exports=wnr});var hf=s((Tee,df)=>{"use strict";var Enr=Boolean.prototype.toString;df.exports=Enr});var yf=s((Iee,qf)=>{"use strict";var Nnr=hf();function Anr(r){try{return Nnr.call(r),!0}catch{return!1}}qf.exports=Anr});var Fu=s((_ee,bf)=>{"use strict";var Onr=Wi(),Snr=tr(),Tnr=mf(),Inr=yf(),_nr=Onr();function Lnr(r){return typeof r=="object"?r instanceof Tnr?!0:_nr?Inr(r):Snr(r)==="[object Boolean]":!1}bf.exports=Lnr});var Ef=s((Lee,wf)=>{"use strict";var Pnr=Iu(),Rnr=Fu();function Fnr(r){return Pnr(r)||Rnr(r)}wf.exports=Fnr});var fr=s((Pee,Af)=>{"use strict";var Nf=w(),Mu=Ef(),Mnr=Iu(),Bnr=Fu();Nf(Mu,"isPrimitive",Mnr);Nf(Mu,"isObject",Bnr);Af.exports=Mu});var Sf=s((Ree,Of)=>{"use strict";function knr(){return new Function("return this;")()}Of.exports=knr});var If=s((Fee,Tf)=>{"use strict";var jnr=typeof self=="object"?self:null;Tf.exports=jnr});var Lf=s((Mee,_f)=>{"use strict";var Cnr=typeof window=="object"?window:null;_f.exports=Cnr});var Rf=s((Bee,Pf)=>{"use strict";var Gnr=typeof globalThis=="object"?globalThis:null;Pf.exports=Gnr});var jf=s((kee,kf)=>{"use strict";var Vnr=fr().isPrimitive,Unr=y(),Hnr=Sf(),Ff=If(),Mf=Lf(),Bf=Rf();function Wnr(r){if(arguments.length){if(!Vnr(r))throw new TypeError(Unr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Hnr()}if(Bf)return Bf;if(Ff)return Ff;if(Mf)return Mf;throw new Error("unexpected error. Unable to resolve global object.")}kf.exports=Wnr});var Vf=s((jee,Gf)=>{"use strict";var znr=jf(),Cf=znr(),Dnr=Cf.document&&Cf.document.childNodes;Gf.exports=Dnr});var Hf=s((Cee,Uf)=>{"use strict";var Xnr=Int8Array;Uf.exports=Xnr});var zf=s((Gee,Wf)=>{"use strict";var Jnr=Uv(),xnr=Vf(),Ynr=Hf();function Znr(){return typeof Jnr=="function"||typeof Ynr=="object"||typeof xnr=="function"}Wf.exports=Znr});var Bu=s((Vee,Df)=>{"use strict";function $nr(){return/^\s*function\s*([^(]*)/i}Df.exports=$nr});var Jf=s((Uee,Xf)=>{"use strict";var Qnr=Bu(),Knr=Qnr();Xf.exports=Knr});var ku=s((Hee,Yf)=>{"use strict";var rar=w(),xf=Bu(),ear=Jf();rar(xf,"REGEXP",ear);Yf.exports=xf});var $f=s((Wee,Zf)=>{"use strict";var tar=tr(),ju;function iar(r){return tar(r)==="[object Array]"}Array.isArray?ju=Array.isArray:ju=iar;Zf.exports=ju});var cr=s((zee,Qf)=>{"use strict";var nar=$f();Qf.exports=nar});var rc=s((Dee,Kf)=>{"use strict";var aar=cr(),sar=y();function uar(r){if(typeof r!="function")throw new TypeError(sar("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!aar(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}Kf.exports=uar});var tc=s((Xee,ec)=>{"use strict";var oar=rc();ec.exports=oar});var nc=s((Jee,ic)=>{"use strict";function far(r){return r!==null&&typeof r=="object"}ic.exports=far});var Gu=s((xee,ac)=>{"use strict";var car=w(),lar=tc(),Cu=nc(),par=lar(Cu);car(Cu,"isObjectLikeArray",par);ac.exports=Cu});var uc=s((Yee,sc)=>{"use strict";var gar=Gu();function mar(r){return gar(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}sc.exports=mar});var wt=s((Zee,oc)=>{"use strict";var dar=uc();oc.exports=dar});var fc=s(($ee,vc)=>{"use strict";var har=tr(),qar=ku().REGEXP,yar=wt();function bar(r){var e,t,i;if(t=har(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=qar.exec(i.toString()),e)return e[1]}return yar(r)?"Buffer":t}vc.exports=bar});var Ce=s((Qee,cc)=>{"use strict";var war=fc();cc.exports=war});var pc=s((Kee,lc)=>{"use strict";var Ear=Ce();function Nar(r){var e;return r===null?"null":(e=typeof r,e==="object"?Ear(r).toLowerCase():e)}lc.exports=Nar});var mc=s((rte,gc)=>{"use strict";var Aar=Ce();function Oar(r){return Aar(r).toLowerCase()}gc.exports=Oar});var Zn=s((ete,dc)=>{"use strict";var Sar=zf(),Tar=pc(),Iar=mc(),_ar=Sar()?Iar:Tar;dc.exports=_ar});var qc=s((tte,hc)=>{"use strict";var Lar=Zn();function Par(r){return Lar(r)==="function"}hc.exports=Par});var L=s((ite,yc)=>{"use strict";var Rar=qc();yc.exports=Rar});var wc=s((nte,bc)=>{"use strict";var Far=Math.floor;bc.exports=Far});var J=s((ate,Ec)=>{"use strict";var Mar=wc();Ec.exports=Mar});var Ac=s((ste,Nc)=>{"use strict";var Bar=J();function kar(r){return Bar(r)===r}Nc.exports=kar});var Tr=s((ute,Oc)=>{"use strict";var jar=Ac();Oc.exports=jar});var Tc=s((ote,Sc)=>{"use strict";var Car=9007199254740991;Sc.exports=Car});var _c=s((vte,Ic)=>{"use strict";var Gar=Tr(),Var=Tc();function Uar(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Gar(r.length)&&r.length>=0&&r.length<=Var}Ic.exports=Uar});var jr=s((fte,Lc)=>{"use strict";var Har=_c();Lc.exports=Har});var Rc=s((cte,Pc)=>{"use strict";var War=L();function zar(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&War(r.next)}Pc.exports=zar});var Mc=s((lte,Fc)=>{"use strict";var Dar=Rc();Fc.exports=Dar});var jc=s((pte,kc)=>{"use strict";var Bc="function";function Xar(r){return typeof r.get===Bc&&typeof r.set===Bc}kc.exports=Xar});var Vu=s((gte,Cc)=>{"use strict";var Jar=jc();Cc.exports=Jar});var Uc=s((mte,Vc)=>{"use strict";var Gc={complex128:xar,complex64:Yar,default:Zar};function xar(r,e,t){r.set(t,e)}function Yar(r,e,t){r.set(t,e)}function Zar(r,e,t){r.set(t,e)}function $ar(r){var e=Gc[r];return typeof e=="function"?e:Gc.default}Vc.exports=$ar});var Uu=s((dte,Hc)=>{"use strict";var Qar=Uc();Hc.exports=Qar});var Dc=s((hte,zc)=>{"use strict";var Wc={float64:Kar,float32:r0r,int32:e0r,int16:t0r,int8:i0r,uint32:n0r,uint16:a0r,uint8:s0r,uint8c:u0r,generic:o0r,default:v0r};function Kar(r,e,t){r[e]=t}function r0r(r,e,t){r[e]=t}function e0r(r,e,t){r[e]=t}function t0r(r,e,t){r[e]=t}function i0r(r,e,t){r[e]=t}function n0r(r,e,t){r[e]=t}function a0r(r,e,t){r[e]=t}function s0r(r,e,t){r[e]=t}function u0r(r,e,t){r[e]=t}function o0r(r,e,t){r[e]=t}function v0r(r,e,t){r[e]=t}function f0r(r){var e=Wc[r];return typeof e=="function"?e:Wc.default}zc.exports=f0r});var Hu=s((qte,Xc)=>{"use strict";var c0r=Dc();Xc.exports=c0r});var xc=s((yte,Jc)=>{"use strict";var l0r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Jc.exports=l0r});var Zc=s((bte,Yc)=>{"use strict";var p0r=tr(),g0r=typeof Float64Array=="function";function m0r(r){return g0r&&r instanceof Float64Array||p0r(r)==="[object Float64Array]"}Yc.exports=m0r});var Qc=s((wte,$c)=>{"use strict";var d0r=Zc();$c.exports=d0r});var r5=s((Ete,Kc)=>{"use strict";var h0r=typeof Float64Array=="function"?Float64Array:null;Kc.exports=h0r});var i5=s((Nte,t5)=>{"use strict";var q0r=Qc(),e5=r5();function y0r(){var r,e;if(typeof e5!="function")return!1;try{e=new e5([1,3.14,-3.14,NaN]),r=q0r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}t5.exports=y0r});var Wu=s((Ate,n5)=>{"use strict";var b0r=i5();n5.exports=b0r});var s5=s((Ote,a5)=>{"use strict";var w0r=typeof Float64Array=="function"?Float64Array:void 0;a5.exports=w0r});var o5=s((Ste,u5)=>{"use strict";function E0r(){throw new Error("not implemented")}u5.exports=E0r});var gr=s((Tte,v5)=>{"use strict";var N0r=Wu(),A0r=s5(),O0r=o5(),zu;N0r()?zu=A0r:zu=O0r;v5.exports=zu});var c5=s((Ite,f5)=>{"use strict";var S0r=tr(),T0r=typeof Float32Array=="function";function I0r(r){return T0r&&r instanceof Float32Array||S0r(r)==="[object Float32Array]"}f5.exports=I0r});var p5=s((_te,l5)=>{"use strict";var _0r=c5();l5.exports=_0r});var I=s((Lte,g5)=>{"use strict";var L0r=Number.POSITIVE_INFINITY;g5.exports=L0r});var d5=s((Pte,m5)=>{"use strict";var P0r=typeof Float32Array=="function"?Float32Array:null;m5.exports=P0r});var y5=s((Rte,q5)=>{"use strict";var R0r=p5(),F0r=I(),h5=d5();function M0r(){var r,e;if(typeof h5!="function")return!1;try{e=new h5([1,3.14,-3.14,5e40]),r=R0r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===F0r}catch{r=!1}return r}q5.exports=M0r});var w5=s((Fte,b5)=>{"use strict";var B0r=y5();b5.exports=B0r});var N5=s((Mte,E5)=>{"use strict";var k0r=typeof Float32Array=="function"?Float32Array:void 0;E5.exports=k0r});var O5=s((Bte,A5)=>{"use strict";function j0r(){throw new Error("not implemented")}A5.exports=j0r});var Qr=s((kte,S5)=>{"use strict";var C0r=w5(),G0r=N5(),V0r=O5(),Du;C0r()?Du=G0r:Du=V0r;S5.exports=Du});var I5=s((jte,T5)=>{"use strict";var U0r=tr(),H0r=typeof Uint32Array=="function";function W0r(r){return H0r&&r instanceof Uint32Array||U0r(r)==="[object Uint32Array]"}T5.exports=W0r});var Kr=s((Cte,_5)=>{"use strict";var z0r=I5();_5.exports=z0r});var Dt=s((Gte,L5)=>{"use strict";var D0r=4294967295;L5.exports=D0r});var R5=s((Vte,P5)=>{"use strict";var X0r=typeof Uint32Array=="function"?Uint32Array:null;P5.exports=X0r});var B5=s((Ute,M5)=>{"use strict";var J0r=Kr(),Xu=Dt(),F5=R5();function x0r(){var r,e;if(typeof F5!="function")return!1;try{e=[1,3.14,-3.14,Xu+1,Xu+2],e=new F5(e),r=J0r(e)&&e[0]===1&&e[1]===3&&e[2]===Xu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}M5.exports=x0r});var j5=s((Hte,k5)=>{"use strict";var Y0r=B5();k5.exports=Y0r});var G5=s((Wte,C5)=>{"use strict";var Z0r=typeof Uint32Array=="function"?Uint32Array:void 0;C5.exports=Z0r});var U5=s((zte,V5)=>{"use strict";function $0r(){throw new Error("not implemented")}V5.exports=$0r});var lr=s((Dte,H5)=>{"use strict";var Q0r=j5(),K0r=G5(),rsr=U5(),Ju;Q0r()?Ju=K0r:Ju=rsr;H5.exports=Ju});var z5=s((Xte,W5)=>{"use strict";var esr=tr(),tsr=typeof Int32Array=="function";function isr(r){return tsr&&r instanceof Int32Array||esr(r)==="[object Int32Array]"}W5.exports=isr});var $n=s((Jte,D5)=>{"use strict";var nsr=z5();D5.exports=nsr});var Xt=s((xte,X5)=>{"use strict";var asr=2147483647;X5.exports=asr});var x5=s((Yte,J5)=>{"use strict";var ssr=-2147483648;J5.exports=ssr});var Z5=s((Zte,Y5)=>{"use strict";var usr=typeof Int32Array=="function"?Int32Array:null;Y5.exports=usr});var K5=s(($te,Q5)=>{"use strict";var osr=$n(),vsr=Xt(),fsr=x5(),$5=Z5();function csr(){var r,e;if(typeof $5!="function")return!1;try{e=new $5([1,3.14,-3.14,vsr+1]),r=osr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===fsr}catch{r=!1}return r}Q5.exports=csr});var e8=s((Qte,r8)=>{"use strict";var lsr=K5();r8.exports=lsr});var i8=s((Kte,t8)=>{"use strict";var psr=typeof Int32Array=="function"?Int32Array:void 0;t8.exports=psr});var a8=s((rie,n8)=>{"use strict";function gsr(){throw new Error("not implemented")}n8.exports=gsr});var Et=s((eie,s8)=>{"use strict";var msr=e8(),dsr=i8(),hsr=a8(),xu;msr()?xu=dsr:xu=hsr;s8.exports=xu});var o8=s((tie,u8)=>{"use strict";var qsr=tr(),ysr=typeof Uint16Array=="function";function bsr(r){return ysr&&r instanceof Uint16Array||qsr(r)==="[object Uint16Array]"}u8.exports=bsr});var f8=s((iie,v8)=>{"use strict";var wsr=o8();v8.exports=wsr});var l8=s((nie,c8)=>{"use strict";var Esr=65535;c8.exports=Esr});var g8=s((aie,p8)=>{"use strict";var Nsr=typeof Uint16Array=="function"?Uint16Array:null;p8.exports=Nsr});var h8=s((sie,d8)=>{"use strict";var Asr=f8(),Yu=l8(),m8=g8();function Osr(){var r,e;if(typeof m8!="function")return!1;try{e=[1,3.14,-3.14,Yu+1,Yu+2],e=new m8(e),r=Asr(e)&&e[0]===1&&e[1]===3&&e[2]===Yu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}d8.exports=Osr});var y8=s((uie,q8)=>{"use strict";var Ssr=h8();q8.exports=Ssr});var w8=s((oie,b8)=>{"use strict";var Tsr=typeof Uint16Array=="function"?Uint16Array:void 0;b8.exports=Tsr});var N8=s((vie,E8)=>{"use strict";function Isr(){throw new Error("not implemented")}E8.exports=Isr});var Jt=s((fie,A8)=>{"use strict";var _sr=y8(),Lsr=w8(),Psr=N8(),Zu;_sr()?Zu=Lsr:Zu=Psr;A8.exports=Zu});var S8=s((cie,O8)=>{"use strict";var Rsr=tr(),Fsr=typeof Int16Array=="function";function Msr(r){return Fsr&&r instanceof Int16Array||Rsr(r)==="[object Int16Array]"}O8.exports=Msr});var I8=s((lie,T8)=>{"use strict";var Bsr=S8();T8.exports=Bsr});var L8=s((pie,_8)=>{"use strict";var ksr=32767;_8.exports=ksr});var R8=s((gie,P8)=>{"use strict";var jsr=-32768;P8.exports=jsr});var M8=s((mie,F8)=>{"use strict";var Csr=typeof Int16Array=="function"?Int16Array:null;F8.exports=Csr});var j8=s((die,k8)=>{"use strict";var Gsr=I8(),Vsr=L8(),Usr=R8(),B8=M8();function Hsr(){var r,e;if(typeof B8!="function")return!1;try{e=new B8([1,3.14,-3.14,Vsr+1]),r=Gsr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Usr}catch{r=!1}return r}k8.exports=Hsr});var G8=s((hie,C8)=>{"use strict";var Wsr=j8();C8.exports=Wsr});var U8=s((qie,V8)=>{"use strict";var zsr=typeof Int16Array=="function"?Int16Array:void 0;V8.exports=zsr});var W8=s((yie,H8)=>{"use strict";function Dsr(){throw new Error("not implemented")}H8.exports=Dsr});var Di=s((bie,z8)=>{"use strict";var Xsr=G8(),Jsr=U8(),xsr=W8(),$u;Xsr()?$u=Jsr:$u=xsr;z8.exports=$u});var X8=s((wie,D8)=>{"use strict";var Ysr=tr(),Zsr=typeof Uint8Array=="function";function $sr(r){return Zsr&&r instanceof Uint8Array||Ysr(r)==="[object Uint8Array]"}D8.exports=$sr});var x8=s((Eie,J8)=>{"use strict";var Qsr=X8();J8.exports=Qsr});var Z8=s((Nie,Y8)=>{"use strict";var Ksr=255;Y8.exports=Ksr});var Q8=s((Aie,$8)=>{"use strict";var rur=typeof Uint8Array=="function"?Uint8Array:null;$8.exports=rur});var el=s((Oie,rl)=>{"use strict";var eur=x8(),Qu=Z8(),K8=Q8();function tur(){var r,e;if(typeof K8!="function")return!1;try{e=[1,3.14,-3.14,Qu+1,Qu+2],e=new K8(e),r=eur(e)&&e[0]===1&&e[1]===3&&e[2]===Qu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}rl.exports=tur});var il=s((Sie,tl)=>{"use strict";var iur=el();tl.exports=iur});var al=s((Tie,nl)=>{"use strict";var nur=typeof Uint8Array=="function"?Uint8Array:void 0;nl.exports=nur});var ul=s((Iie,sl)=>{"use strict";function aur(){throw new Error("not implemented")}sl.exports=aur});var xt=s((_ie,ol)=>{"use strict";var sur=il(),uur=al(),our=ul(),Ku;sur()?Ku=uur:Ku=our;ol.exports=Ku});var fl=s((Lie,vl)=>{"use strict";var vur=tr(),fur=typeof Uint8ClampedArray=="function";function cur(r){return fur&&r instanceof Uint8ClampedArray||vur(r)==="[object Uint8ClampedArray]"}vl.exports=cur});var ll=s((Pie,cl)=>{"use strict";var lur=fl();cl.exports=lur});var gl=s((Rie,pl)=>{"use strict";var pur=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;pl.exports=pur});var hl=s((Fie,dl)=>{"use strict";var gur=ll(),ml=gl();function mur(){var r,e;if(typeof ml!="function")return!1;try{e=new ml([-1,0,1,3.14,4.99,255,256]),r=gur(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}dl.exports=mur});var yl=s((Mie,ql)=>{"use strict";var dur=hl();ql.exports=dur});var wl=s((Bie,bl)=>{"use strict";var hur=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;bl.exports=hur});var Nl=s((kie,El)=>{"use strict";function qur(){throw new Error("not implemented")}El.exports=qur});var Xi=s((jie,Al)=>{"use strict";var yur=yl(),bur=wl(),wur=Nl(),ro;yur()?ro=bur:ro=wur;Al.exports=ro});var Sl=s((Cie,Ol)=>{"use strict";var Eur=tr(),Nur=typeof Int8Array=="function";function Aur(r){return Nur&&r instanceof Int8Array||Eur(r)==="[object Int8Array]"}Ol.exports=Aur});var Il=s((Gie,Tl)=>{"use strict";var Our=Sl();Tl.exports=Our});var Ll=s((Vie,_l)=>{"use strict";var Sur=127;_l.exports=Sur});var Rl=s((Uie,Pl)=>{"use strict";var Tur=-128;Pl.exports=Tur});var Ml=s((Hie,Fl)=>{"use strict";var Iur=typeof Int8Array=="function"?Int8Array:null;Fl.exports=Iur});var jl=s((Wie,kl)=>{"use strict";var _ur=Il(),Lur=Ll(),Pur=Rl(),Bl=Ml();function Rur(){var r,e;if(typeof Bl!="function")return!1;try{e=new Bl([1,3.14,-3.14,Lur+1]),r=_ur(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Pur}catch{r=!1}return r}kl.exports=Rur});var Gl=s((zie,Cl)=>{"use strict";var Fur=jl();Cl.exports=Fur});var Ul=s((Die,Vl)=>{"use strict";var Mur=typeof Int8Array=="function"?Int8Array:void 0;Vl.exports=Mur});var Wl=s((Xie,Hl)=>{"use strict";function Bur(){throw new Error("not implemented")}Hl.exports=Bur});var Ji=s((Jie,zl)=>{"use strict";var kur=Gl(),jur=Ul(),Cur=Wl(),eo;kur()?eo=jur:eo=Cur;zl.exports=eo});var to=s((xie,Dl)=>{"use strict";function Gur(r){return typeof r=="number"}Dl.exports=Gur});var Jl=s((Yie,Xl)=>{"use strict";Xl.exports=Number});var Qn=s((Zie,xl)=>{"use strict";var Vur=Jl();xl.exports=Vur});var Zl=s(($ie,Yl)=>{"use strict";var Uur=Qn(),Hur=Uur.prototype.toString;Yl.exports=Hur});var Ql=s((Qie,$l)=>{"use strict";var Wur=Zl();function zur(r){try{return Wur.call(r),!0}catch{return!1}}$l.exports=zur});var io=s((Kie,Kl)=>{"use strict";var Dur=Wi(),Xur=tr(),Jur=Qn(),xur=Ql(),Yur=Dur();function Zur(r){return typeof r=="object"?r instanceof Jur?!0:Yur?xur(r):Xur(r)==="[object Number]":!1}Kl.exports=Zur});var e7=s((rne,r7)=>{"use strict";var $ur=to(),Qur=io();function Kur(r){return $ur(r)||Qur(r)}r7.exports=Kur});var j=s((ene,i7)=>{"use strict";var t7=w(),no=e7(),ror=to(),eor=io();t7(no,"isPrimitive",ror);t7(no,"isObject",eor);i7.exports=no});var G=s((tne,n7)=>{"use strict";var tor=Qn(),ior=tor.NEGATIVE_INFINITY;n7.exports=ior});var ao=s((ine,a7)=>{"use strict";var nor=I(),aor=G(),sor=Tr();function uor(r){return r<nor&&r>aor&&sor(r)}a7.exports=uor});var so=s((nne,s7)=>{"use strict";var oor=j().isPrimitive,vor=ao();function cor(r){return oor(r)&&vor(r)}s7.exports=cor});var uo=s((ane,u7)=>{"use strict";var lor=j().isObject,por=ao();function gor(r){return lor(r)&&por(r.valueOf())}u7.exports=gor});var v7=s((sne,o7)=>{"use strict";var mor=so(),dor=uo();function hor(r){return mor(r)||dor(r)}o7.exports=hor});var Cr=s((une,c7)=>{"use strict";var f7=w(),oo=v7(),qor=so(),yor=uo();f7(oo,"isPrimitive",qor);f7(oo,"isObject",yor);c7.exports=oo});var vo=s((one,l7)=>{"use strict";var bor=Cr().isPrimitive;function wor(r){return bor(r)&&r>=0}l7.exports=wor});var fo=s((vne,p7)=>{"use strict";var Eor=Cr().isObject;function Nor(r){return Eor(r)&&r.valueOf()>=0}p7.exports=Nor});var m7=s((fne,g7)=>{"use strict";var Aor=vo(),Oor=fo();function Sor(r){return Aor(r)||Oor(r)}g7.exports=Sor});var Ge=s((cne,h7)=>{"use strict";var d7=w(),co=m7(),Tor=vo(),Ior=fo();d7(co,"isPrimitive",Tor);d7(co,"isObject",Ior);h7.exports=co});var y7=s((lne,q7)=>{"use strict";var _or=4294967295;q7.exports=_or});var w7=s((pne,b7)=>{"use strict";var Lor=Tr(),Por=y7();function Ror(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Lor(r.length)&&r.length>=0&&r.length<=Por}b7.exports=Ror});var Nt=s((gne,E7)=>{"use strict";var For=w7();E7.exports=For});var A7=s((mne,N7)=>{"use strict";var Mor=tr(),Bor=typeof ArrayBuffer=="function";function kor(r){return Bor&&r instanceof ArrayBuffer||Mor(r)==="[object ArrayBuffer]"}N7.exports=kor});var lo=s((dne,O7)=>{"use strict";var jor=A7();O7.exports=jor});var T7=s((hne,S7)=>{"use strict";var Cor=cr();function Gor(r){return typeof r=="object"&&r!==null&&!Cor(r)}S7.exports=Gor});var Kn=s((qne,I7)=>{"use strict";var Vor=T7();I7.exports=Vor});var L7=s((yne,_7)=>{"use strict";function Uor(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}_7.exports=Uor});var R7=s((bne,P7)=>{"use strict";function Hor(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}P7.exports=Hor});var j7=s((wne,k7)=>{"use strict";var F7=j().isPrimitive,M7=je(),xi=w(),B7=y(),Wor=L7(),zor=R7();function At(r,e){if(!(this instanceof At))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!F7(r))throw new TypeError(B7("invalid argument. Real component must be a number. Value: `%s`.",r));if(!F7(e))throw new TypeError(B7("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return M7(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),M7(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}xi(At,"BYTES_PER_ELEMENT",8);xi(At.prototype,"BYTES_PER_ELEMENT",8);xi(At.prototype,"byteLength",16);xi(At.prototype,"toString",Wor);xi(At.prototype,"toJSON",zor);k7.exports=At});var Yt=s((Ene,C7)=>{"use strict";var Dor=j7();C7.exports=Dor});var V7=s((Nne,G7)=>{"use strict";var Xor=typeof Math.fround=="function"?Math.fround:null;G7.exports=Xor});var W7=s((Ane,H7)=>{"use strict";var Jor=Qr(),U7=new Jor(1);function xor(r){return U7[0]=r,U7[0]}H7.exports=xor});var X7=s((One,D7)=>{"use strict";var z7=V7(),Yor=W7(),po;typeof z7=="function"?po=z7:po=Yor;D7.exports=po});var x7=s((Sne,J7)=>{"use strict";function Zor(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}J7.exports=Zor});var Z7=s((Tne,Y7)=>{"use strict";function $or(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}Y7.exports=$or});var t9=s((Ine,e9)=>{"use strict";var $7=j().isPrimitive,Q7=je(),Yi=w(),K7=X7(),r9=y(),Qor=x7(),Kor=Z7();function Ot(r,e){if(!(this instanceof Ot))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!$7(r))throw new TypeError(r9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!$7(e))throw new TypeError(r9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Q7(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:K7(r)}),Q7(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:K7(e)}),this}Yi(Ot,"BYTES_PER_ELEMENT",4);Yi(Ot.prototype,"BYTES_PER_ELEMENT",4);Yi(Ot.prototype,"byteLength",8);Yi(Ot.prototype,"toString",Qor);Yi(Ot.prototype,"toJSON",Kor);e9.exports=Ot});var Zt=s((_ne,i9)=>{"use strict";var r2r=t9();i9.exports=r2r});var a9=s((Lne,n9)=>{"use strict";var e2r=Yt(),t2r=Zt();function i2r(r){return r instanceof e2r||r instanceof t2r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}n9.exports=i2r});var Gr=s((Pne,s9)=>{"use strict";var n2r=a9();s9.exports=n2r});var o9=s((Rne,u9)=>{"use strict";var a2r=Tr();function s2r(r){return a2r(r/2)}u9.exports=s2r});var ra=s((Fne,v9)=>{"use strict";var u2r=o9();v9.exports=u2r});var c9=s((Mne,f9)=>{"use strict";var o2r=O(),ea=Lu();function v2r(){return typeof ea=="function"&&typeof ea("foo")=="symbol"&&o2r(ea,"iterator")&&typeof ea.iterator=="symbol"}f9.exports=v2r});var ta=s((Bne,l9)=>{"use strict";var f2r=c9();l9.exports=f2r});var g9=s((kne,p9)=>{"use strict";var c2r=ta(),l2r=c2r()?Symbol.iterator:null;p9.exports=l2r});var ia=s((jne,m9)=>{"use strict";var p2r=g9();m9.exports=p2r});var h9=s((Cne,d9)=>{"use strict";var g2r=je();function m2r(r,e,t){g2r(r,e,{configurable:!1,enumerable:!1,get:t})}d9.exports=m2r});var P=s((Gne,q9)=>{"use strict";var d2r=h9();q9.exports=d2r});var b9=s((Vne,y9)=>{"use strict";function h2r(r){return r.re}y9.exports=h2r});var Ve=s((Une,w9)=>{"use strict";var q2r=b9();w9.exports=q2r});var N9=s((Hne,E9)=>{"use strict";function y2r(r){return r.im}E9.exports=y2r});var Ue=s((Wne,A9)=>{"use strict";var b2r=N9();A9.exports=b2r});var S9=s((zne,O9)=>{"use strict";var w2r=Qr();function E2r(r,e){return new w2r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}O9.exports=E2r});var $t=s((Dne,T9)=>{"use strict";var N2r=S9();T9.exports=N2r});var _9=s((Xne,I9)=>{"use strict";var A2r=gr();function O2r(r,e){return new A2r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}I9.exports=O2r});var Qt=s((Jne,L9)=>{"use strict";var S2r=_9();L9.exports=S2r});var F9=s((xne,R9)=>{"use strict";var P9={float64:T2r,float32:I2r,int32:_2r,int16:L2r,int8:P2r,uint32:R2r,uint16:F2r,uint8:M2r,uint8c:B2r,generic:k2r,default:j2r};function T2r(r,e){return r[e]}function I2r(r,e){return r[e]}function _2r(r,e){return r[e]}function L2r(r,e){return r[e]}function P2r(r,e){return r[e]}function R2r(r,e){return r[e]}function F2r(r,e){return r[e]}function M2r(r,e){return r[e]}function B2r(r,e){return r[e]}function k2r(r,e){return r[e]}function j2r(r,e){return r[e]}function C2r(r){var e=P9[r];return typeof e=="function"?e:P9.default}R9.exports=C2r});var na=s((Yne,M9)=>{"use strict";var G2r=F9();M9.exports=G2r});var j9=s((Zne,k9)=>{"use strict";var B9={complex128:V2r,complex64:U2r,default:H2r};function V2r(r,e){return r.get(e)}function U2r(r,e){return r.get(e)}function H2r(r,e){return r.get(e)}function W2r(r){var e=B9[r];return typeof e=="function"?e:B9.default}k9.exports=W2r});var aa=s(($ne,C9)=>{"use strict";var z2r=j9();C9.exports=z2r});var V9=s((Qne,G9)=>{"use strict";var D2r=Nt(),X2r=Gr(),J2r=Ve(),x2r=Ue(),Y2r=y();function Z2r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,D2r(i)&&i.length>=2)e.push(i[0],i[1]);else if(X2r(i))e.push(J2r(i),x2r(i));else return new TypeError(Y2r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}G9.exports=Z2r});var H9=s((Kne,U9)=>{"use strict";var $2r=Nt(),Q2r=Gr(),K2r=Ve(),r1r=Ue(),e1r=y();function t1r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),$2r(a)&&a.length>=2)i.push(a[0],a[1]);else if(Q2r(a))i.push(K2r(a),r1r(a));else return new TypeError(e1r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}U9.exports=t1r});var z9=s((rae,W9)=>{"use strict";var i1r=Gr(),n1r=Ve(),a1r=Ue();function s1r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!i1r(i))return null;r[a]=n1r(i),r[a+1]=a1r(i),a+=2}return r}W9.exports=s1r});var K9=s((eae,Q9)=>{"use strict";var Zi=Ge().isPrimitive,D9=Nt(),mo=jr(),X9=lo(),J9=Kn(),u1r=cr(),St=L(),Kt=Gr(),sa=ra(),go=Tr(),o1r=ta(),ri=ia(),mr=w(),va=P(),Rr=Qr(),x9=Zt(),x=y(),ua=Ve(),oa=Ue(),v1r=$t(),f1r=Qt(),c1r=na(),l1r=aa(),Y9=V9(),p1r=H9(),g1r=z9(),Ir=Rr.BYTES_PER_ELEMENT*2,Z9=o1r();function ei(r){return r instanceof Q||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function $9(r){return r===Q||r.name==="Complex128Array"}function m1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ir}function d1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ir*2}function Q(){var r,e,t,i;if(e=arguments.length,!(this instanceof Q))return e===0?new Q:e===1?new Q(arguments[0]):e===2?new Q(arguments[0],arguments[1]):new Q(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Rr(0);else if(e===1)if(Zi(arguments[0]))t=new Rr(arguments[0]*2);else if(mo(arguments[0]))if(t=arguments[0],i=t.length,i&&u1r(t)&&Kt(t[0])){if(t=g1r(new Rr(i*2),t),t===null){if(!sa(i))throw new RangeError(x("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Rr(arguments[0])}}else{if(m1r(t))t=v1r(t,0);else if(d1r(t))t=f1r(t,0);else if(!sa(i))throw new RangeError(x("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Rr(t)}else if(X9(arguments[0])){if(t=arguments[0],!go(t.byteLength/Ir))throw new RangeError(x("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ir,t.byteLength));t=new Rr(t)}else if(J9(arguments[0])){if(t=arguments[0],Z9===!1)throw new TypeError(x("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!St(t[ri]))throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ri](),!St(t.next))throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Y9(t),t instanceof Error)throw t;t=new Rr(t)}else throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!X9(t))throw new TypeError(x("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Zi(r))throw new TypeError(x("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!go(r/Ir))throw new RangeError(x("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ir,r));if(e===2){if(i=t.byteLength-r,!go(i/Ir))throw new RangeError(x("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ir,i));t=new Rr(t,r)}else{if(i=arguments[2],!Zi(i))throw new TypeError(x("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ir>t.byteLength-r)throw new RangeError(x("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ir));t=new Rr(t,r,i*2)}}return mr(this,"_buffer",t),mr(this,"_length",t.length/2),this}mr(Q,"BYTES_PER_ELEMENT",Ir);mr(Q,"name","Complex64Array");mr(Q,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,m;if(!St(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!$9(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!St(n))throw new TypeError(x("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(ei(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),Kt(l))u[m]=ua(l),u[m+1]=oa(l);else if(D9(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(x("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(mo(e)){if(n){for(v=e.length,e.get&&e.set?f=l1r("default"):f=c1r("default"),p=0;p<v;p++)if(!Kt(f(e,p))){c=!0;break}if(c){if(!sa(v))throw new RangeError(x("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),Kt(l))u[m]=ua(l),u[m+1]=oa(l);else if(D9(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(x("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(J9(e)&&Z9&&St(e[ri])){if(u=e[ri](),!St(u.next))throw new TypeError(x("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=p1r(u,n,t):o=Y9(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(x("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});mr(Q,"of",function(){var e,t;if(!St(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!$9(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});va(Q.prototype,"buffer",function(){return this._buffer.buffer});va(Q.prototype,"byteLength",function(){return this._buffer.byteLength});va(Q.prototype,"byteOffset",function(){return this._buffer.byteOffset});mr(Q.prototype,"BYTES_PER_ELEMENT",Q.BYTES_PER_ELEMENT);mr(Q.prototype,"copyWithin",function(e,t){if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});mr(Q.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},mr(i,"next",f),mr(i,"return",v),ri&&mr(i,ri,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new x9(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});mr(Q.prototype,"get",function(e){var t;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zi(e))throw new TypeError(x("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new x9(t[e],t[e+1])});va(Q.prototype,"length",function(){return this._length});mr(Q.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Zi(i))throw new TypeError(x("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Kt(e)){if(i>=this._length)throw new RangeError(x("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=ua(e),n[i+1]=oa(e);return}if(ei(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Ir,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Rr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(mo(e)){for(o=e.length,v=0;v<o;v++)if(!Kt(e[v])){u=!0;break}if(u){if(!sa(o))throw new RangeError(x("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Ir,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Rr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=ua(f),n[i+1]=oa(f),i+=2;return}throw new TypeError(x("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Q9.exports=Q});var $i=s((tae,rp)=>{"use strict";var h1r=K9();rp.exports=h1r});var tp=s((iae,ep)=>{"use strict";function q1r(r){return r.re}ep.exports=q1r});var He=s((nae,ip)=>{"use strict";var y1r=tp();ip.exports=y1r});var ap=s((aae,np)=>{"use strict";function b1r(r){return r.im}np.exports=b1r});var We=s((sae,sp)=>{"use strict";var w1r=ap();sp.exports=w1r});var op=s((uae,up)=>{"use strict";var E1r=Nt(),N1r=Gr(),A1r=y(),O1r=He(),S1r=We();function T1r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,E1r(i)&&i.length>=2)e.push(i[0],i[1]);else if(N1r(i))e.push(O1r(i),S1r(i));else return new TypeError(A1r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}up.exports=T1r});var fp=s((oae,vp)=>{"use strict";var I1r=Nt(),_1r=Gr(),L1r=y(),P1r=He(),R1r=We();function F1r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),I1r(a)&&a.length>=2)i.push(a[0],a[1]);else if(_1r(a))i.push(P1r(a),R1r(a));else return new TypeError(L1r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}vp.exports=F1r});var lp=s((vae,cp)=>{"use strict";var M1r=Gr(),B1r=He(),k1r=We();function j1r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!M1r(i))return null;r[a]=B1r(i),r[a+1]=k1r(i),a+=2}return r}cp.exports=j1r});var wp=s((fae,bp)=>{"use strict";var Qi=Ge().isPrimitive,pp=Nt(),qo=jr(),gp=lo(),mp=Kn(),C1r=cr(),Tt=L(),ti=Gr(),fa=ra(),ho=Tr(),G1r=ta(),ii=ia(),dr=w(),pa=P(),Fr=gr(),dp=Yt(),ca=He(),la=We(),V1r=$t(),U1r=Qt(),H1r=na(),W1r=aa(),Y=y(),hp=op(),z1r=fp(),D1r=lp(),_r=Fr.BYTES_PER_ELEMENT*2,qp=G1r();function ni(r){return r instanceof K||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function yp(r){return r===K||r.name==="Complex64Array"}function X1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===_r/2}function J1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===_r}function K(){var r,e,t,i;if(e=arguments.length,!(this instanceof K))return e===0?new K:e===1?new K(arguments[0]):e===2?new K(arguments[0],arguments[1]):new K(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Fr(0);else if(e===1)if(Qi(arguments[0]))t=new Fr(arguments[0]*2);else if(qo(arguments[0]))if(t=arguments[0],i=t.length,i&&C1r(t)&&ti(t[0])){if(t=D1r(new Fr(i*2),t),t===null){if(!fa(i))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(arguments[0])}}else{if(X1r(t))t=V1r(t,0);else if(J1r(t))t=U1r(t,0);else if(!fa(i))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(t)}else if(gp(arguments[0])){if(t=arguments[0],!ho(t.byteLength/_r))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",_r,t.byteLength));t=new Fr(t)}else if(mp(arguments[0])){if(t=arguments[0],qp===!1)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Tt(t[ii]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ii](),!Tt(t.next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=hp(t),t instanceof Error)throw t;t=new Fr(t)}else throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!gp(t))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Qi(r))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ho(r/_r))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",_r,r));if(e===2){if(i=t.byteLength-r,!ho(i/_r))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",_r,i));t=new Fr(t,r)}else{if(i=arguments[2],!Qi(i))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*_r>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*_r));t=new Fr(t,r,i*2)}}return dr(this,"_buffer",t),dr(this,"_length",t.length/2),this}dr(K,"BYTES_PER_ELEMENT",_r);dr(K,"name","Complex128Array");dr(K,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,m;if(!Tt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Tt(n))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(ni(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),ti(l))u[m]=ca(l),u[m+1]=la(l);else if(pp(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(qo(e)){if(n){for(v=e.length,e.get&&e.set?f=W1r("default"):f=H1r("default"),p=0;p<v;p++)if(!ti(f(e,p))){c=!0;break}if(c){if(!fa(v))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),ti(l))u[m]=ca(l),u[m+1]=la(l);else if(pp(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(mp(e)&&qp&&Tt(e[ii])){if(u=e[ii](),!Tt(u.next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=z1r(u,n,t):o=hp(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});dr(K,"of",function(){var e,t;if(!Tt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});pa(K.prototype,"buffer",function(){return this._buffer.buffer});pa(K.prototype,"byteLength",function(){return this._buffer.byteLength});pa(K.prototype,"byteOffset",function(){return this._buffer.byteOffset});dr(K.prototype,"BYTES_PER_ELEMENT",K.BYTES_PER_ELEMENT);dr(K.prototype,"copyWithin",function(e,t){if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});dr(K.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},dr(i,"next",f),dr(i,"return",v),ii&&dr(i,ii,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new dp(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});dr(K.prototype,"get",function(e){var t;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qi(e))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new dp(t[e],t[e+1])});pa(K.prototype,"length",function(){return this._length});dr(K.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Qi(i))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ti(e)){if(i>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=ca(e),n[i+1]=la(e);return}if(ni(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(qo(e)){for(o=e.length,v=0;v<o;v++)if(!ti(e[v])){u=!0;break}if(u){if(!fa(o))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=ca(f),n[i+1]=la(f),i+=2;return}throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});bp.exports=K});var Ki=s((cae,Ep)=>{"use strict";var x1r=wp();Ep.exports=x1r});var Ap=s((lae,Np)=>{"use strict";var Y1r=gr(),Z1r=Qr(),$1r=lr(),Q1r=Et(),K1r=Jt(),r3r=Di(),e3r=xt(),t3r=Xi(),i3r=Ji(),n3r=$i(),a3r=Ki(),s3r=[Y1r,Z1r,Q1r,$1r,r3r,K1r,i3r,e3r,t3r,n3r,a3r];Np.exports=s3r});var Sp=s((pae,Op)=>{"use strict";var u3r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];Op.exports=u3r});var _p=s((gae,Ip)=>{"use strict";var o3r=wt(),v3r=cr(),f3r=Ce(),c3r=xc(),l3r=Ap(),Tp=Sp(),p3r=Tp.length;function g3r(r){var e;if(v3r(r))return"generic";if(o3r(r))return null;for(e=0;e<p3r;e++)if(r instanceof l3r[e])return Tp[e];return c3r[f3r(r)]||null}Ip.exports=g3r});var ga=s((mae,Lp)=>{"use strict";var m3r=_p();Lp.exports=m3r});var Fp=s((dae,Rp)=>{"use strict";var Pp=L(),d3r=jr(),h3r=Mc(),q3r=Vu(),y3r=Uu(),b3r=Hu(),w3r=ga(),yo=y();function E3r(){var r,e,t,i,n,a,u,o,f;if(r=arguments[0],arguments.length>1)if(d3r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!Pp(t))throw new TypeError(yo("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!Pp(t))throw new TypeError(yo("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!h3r(r))throw new TypeError(yo("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=w3r(i),q3r(i)?a=y3r(u):a=b3r(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}Rp.exports=E3r});var Bp=s((hae,Mp)=>{"use strict";var N3r=Fp();Mp.exports=N3r});var jp=s((qae,kp)=>{"use strict";function A3r(r){return r!==r}kp.exports=A3r});var E=s((yae,Cp)=>{"use strict";var O3r=jp();Cp.exports=O3r});var Vp=s((bae,Gp)=>{"use strict";var S3r={Complex64:"complex64",Complex128:"complex128"};Gp.exports=S3r});var Hp=s((wae,Up)=>{"use strict";var T3r=Zt(),I3r=Yt(),_3r=[T3r,I3r];Up.exports=_3r});var zp=s((Eae,Wp)=>{"use strict";var L3r=["complex64","complex128"];Wp.exports=L3r});var Jp=s((Nae,Xp)=>{"use strict";var P3r=Ce(),R3r=Vp(),F3r=Hp(),Dp=zp(),M3r=Dp.length;function B3r(r){var e;for(e=0;e<M3r;e++)if(r instanceof F3r[e])return Dp[e];return R3r[P3r(r)]||null}Xp.exports=B3r});var bo=s((Aae,xp)=>{"use strict";var k3r=Jp();xp.exports=k3r});var Zp=s((Oae,Yp)=>{"use strict";var j3r=gr(),C3r=Qr(),G3r=Ki(),V3r=$i(),U3r={float64:j3r,float32:C3r,complex128:G3r,complex64:V3r};Yp.exports=U3r});var Qp=s((Sae,$p)=>{"use strict";var H3r=Zp();function W3r(r){return H3r[r]||null}$p.exports=W3r});var rg=s((Tae,Kp)=>{"use strict";var z3r=Qp();Kp.exports=z3r});var tg=s((Iae,eg)=>{"use strict";function D3r(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}eg.exports=D3r});var og=s((_ae,ug)=>{"use strict";var X3r=Zt(),J3r=Yt(),ig=He(),ng=We(),ag=Ve(),sg=Ue();function x3r(r,e,t,i,n,a){var u,o,f,v,c,l,p,m,h,d,g,q,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=ag(e),l=sg(e)):(v=ig(e),l=ng(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=ag(i),p=sg(i)):(c=ig(i),p=ng(i)),o===2?u=X3r:u=J3r,n===1)return a?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],a?q=n-1:q=n,d=(c-v)/q,g=(p-l)/q,N=1;N<q;N++)m=v+d*N,h=l+g*N,f.push(new u(m,h));return a&&f.push(new u(c,p)),f}ug.exports=x3r});var wo=s((Lae,vg)=>{"use strict";function Y3r(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}vg.exports=Y3r});var Eo=s((Pae,gg)=>{"use strict";var fg=He(),cg=We(),lg=Ve(),pg=Ue();function Z3r(r,e,t,i,n,a,u){var o,f,v,c,l,p,m,h,d;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=lg(t),v=pg(t)):(o=fg(t),v=cg(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=lg(n),c=pg(n)):(f=fg(n),c=cg(n)),a===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?m=a-1:m=a,l=(f-o)/m,p=(c-v)/m,d=2,h=1;h<m;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}gg.exports=Z3r});var dg=s((Rae,mg)=>{"use strict";var $3r=Object;mg.exports=$3r});var ai=s((Fae,hg)=>{"use strict";var Q3r=dg();hg.exports=Q3r});var yg=s((Mae,qg)=>{"use strict";var K3r=Object.getPrototypeOf;qg.exports=K3r});var wg=s((Bae,bg)=>{"use strict";function r6r(r){return r.__proto__}bg.exports=r6r});var Ng=s((kae,Eg)=>{"use strict";var e6r=tr(),t6r=wg();function i6r(r){var e=t6r(r);return e||e===null?e:e6r(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Eg.exports=i6r});var Og=s((jae,Ag)=>{"use strict";var n6r=L(),a6r=yg(),s6r=Ng(),No;n6r(Object.getPrototypeOf)?No=a6r:No=s6r;Ag.exports=No});var Tg=s((Cae,Sg)=>{"use strict";var u6r=ai(),o6r=Og();function v6r(r){return r==null?null:(r=u6r(r),o6r(r))}Sg.exports=v6r});var It=s((Gae,Ig)=>{"use strict";var f6r=Tg();Ig.exports=f6r});var Pg=s((Vae,Lg)=>{"use strict";var c6r=Kn(),_g=L(),l6r=It(),ma=O(),p6r=tr(),g6r=Object.prototype;function m6r(r){var e;for(e in r)if(!ma(r,e))return!1;return!0}function d6r(r){var e;return c6r(r)?(e=l6r(r),e?!ma(r,"constructor")&&ma(e,"constructor")&&_g(e.constructor)&&p6r(e.constructor)==="[object Function]"&&ma(e,"isPrototypeOf")&&_g(e.isPrototypeOf)&&(e===g6r||m6r(r)):!0):!1}Lg.exports=d6r});var _=s((Uae,Rg)=>{"use strict";var h6r=Pg();Rg.exports=h6r});var Ao=s((Hae,Fg)=>{"use strict";function q6r(r){return typeof r=="string"}Fg.exports=q6r});var Bg=s((Wae,Mg)=>{"use strict";var y6r=String.prototype.valueOf;Mg.exports=y6r});var jg=s((zae,kg)=>{"use strict";var b6r=Bg();function w6r(r){try{return b6r.call(r),!0}catch{return!1}}kg.exports=w6r});var Oo=s((Dae,Cg)=>{"use strict";var E6r=Wi(),N6r=tr(),A6r=jg(),O6r=E6r();function S6r(r){return typeof r=="object"?r instanceof String?!0:O6r?A6r(r):N6r(r)==="[object String]":!1}Cg.exports=S6r});var Vg=s((Xae,Gg)=>{"use strict";var T6r=Ao(),I6r=Oo();function _6r(r){return T6r(r)||I6r(r)}Gg.exports=_6r});var rr=s((Jae,Hg)=>{"use strict";var Ug=w(),So=Vg(),L6r=Ao(),P6r=Oo();Ug(So,"isPrimitive",L6r);Ug(So,"isObject",P6r);Hg.exports=So});var Io=s((xae,zg)=>{"use strict";var R6r=_(),Wg=O(),F6r=rr().isPrimitive,M6r=fr().isPrimitive,To=y();function B6r(r,e){return R6r(e)?Wg(e,"dtype")&&(r.dtype=e.dtype,!F6r(r.dtype))?new TypeError(To("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Wg(e,"endpoint")&&(r.endpoint=e.endpoint,!M6r(r.endpoint))?new TypeError(To("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(To("invalid argument. Options argument must be an object. Value: `%s`.",e))}zg.exports=B6r});var _o=s((Yae,k6r)=>{k6r.exports={endpoint:!0}});var $g=s((Zae,Zg)=>{"use strict";var Dg=Gr(),Xg=j().isPrimitive,j6r=Ge().isPrimitive,Jg=E(),xg=bo(),C6r=rg(),G6r=$t(),V6r=Qt(),si=y(),U6r=tg(),H6r=og(),W6r=wo(),Yg=Eo(),z6r=Io(),D6r=_o();function X6r(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(o=xg(r),o===null){if(!Dg(r))throw new TypeError(si("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!Xg(r)||Jg(r))throw new TypeError(si("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=xg(e),f===null){if(!Dg(e))throw new TypeError(si("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!Xg(e)||Jg(e))throw new TypeError(si("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!j6r(t))throw new TypeError(si("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:D6r.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=z6r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?H6r(o,r,f,e,t,i.endpoint):U6r(r,e,t,i.endpoint);if(n=C6r(i.dtype),n===null)throw new TypeError(si('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return Yg(G6r(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return Yg(V6r(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return W6r(u,r,e,t,i.endpoint)}Zg.exports=X6r});var Kg=s(($ae,Qg)=>{"use strict";var J6r=Vu(),x6r=na(),Y6r=Hu(),Z6r=aa(),$6r=Uu(),Q6r=ga();function K6r(r){var e=Q6r(r);return J6r(r)?{accessorProtocol:!0,accessors:[Z6r(e),$6r(e)]}:{accessorProtocol:!1,accessors:[x6r(e),Y6r(e)]}}Qg.exports=K6r});var em=s((Qae,rm)=>{"use strict";var r4r=Kg();rm.exports=r4r});var im=s((Kae,tm)=>{"use strict";var e4r=em();function t4r(r){var e=e4r(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}tm.exports=t4r});var da=s((r0e,nm)=>{"use strict";var i4r=im();nm.exports=i4r});var fm=s((e0e,vm)=>{"use strict";var n4r=Zt(),a4r=Yt(),am=He(),sm=We(),um=Ve(),om=Ue();function s4r(r,e,t,i,n,a,u){var o,f,v,c,l,p,m,h,d,g,q,N,A,k;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=um(t),l=om(t)):(v=am(t),l=sm(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=um(n),p=om(n)):(c=am(n),p=sm(n)),f===2?o=n4r:o=a4r,h=r.data,m=r.accessors[1],a===1)return u?m(h,0,new o(c,p)):m(h,0,new o(v,l)),r;for(m(h,0,new o(v,l)),u?A=a-1:A=a,q=(c-v)/A,N=(p-l)/A,k=1;k<A;k++)d=v+q*k,g=l+N*k,m(h,k,new o(d,g));return u&&m(h,A,new o(c,p)),r}vm.exports=s4r});var lm=s((t0e,cm)=>{"use strict";function u4r(r,e,t,i,n){var a,u,o,f,v;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(a,v,e+f*v);return n&&u(a,o,t),r}cm.exports=u4r});var bm=s((i0e,ym)=>{"use strict";var pm=Gr(),gm=j().isPrimitive,o4r=jr(),rn=y(),mm=E(),dm=bo(),v4r=ga(),f4r=$t(),c4r=Qt(),hm=da(),l4r=fm(),p4r=lm(),qm=Eo(),g4r=wo(),m4r=Io(),d4r=_o();function h4r(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(a=dm(r),a===null){if(!pm(r))throw new TypeError(rn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!gm(r)||mm(r))throw new TypeError(rn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=dm(e),u===null){if(!pm(e))throw new TypeError(rn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!gm(e)||mm(e))throw new TypeError(rn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!o4r(t))throw new TypeError(rn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:d4r.endpoint},arguments.length>3&&(n=m4r(i,arguments[3]),n))throw n;if(f=v4r(t),f===null&&(f="generic"),f==="complex64")return qm(f4r(t,0),a,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return qm(c4r(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=hm(t),l4r(v,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=hm(t),v.accessorProtocol?(p4r(v,r,e,t.length,i.endpoint),t):(g4r(t,r,e,t.length,i.endpoint),t)}ym.exports=h4r});var Nm=s((n0e,Em)=>{"use strict";var q4r=w(),wm=$g(),y4r=bm();q4r(wm,"assign",y4r);Em.exports=wm});var Om=s((a0e,Am)=>{"use strict";var b4r=j().isPrimitive,w4r=rr().isPrimitive,E4r=fr().isPrimitive,N4r=cr(),A4r=y(),O4r={number:b4r,string:w4r,boolean:E4r};function S4r(r,e,t){var i,n,a,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],a=e[f],u=O4r[a],u(o))i.push([[o]]),n.push([1,1]);else if(N4r(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(A4r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],a,a,String(o)));return[i,n]}Am.exports=S4r});var Lo=s((s0e,Sm)=>{"use strict";var T4r=Om();Sm.exports=T4r});var Im=s((u0e,Tm)=>{"use strict";var I4r=Yn();function _4r(r){return I4r(1,r)}Tm.exports=_4r});var Lm=s((o0e,_m)=>{"use strict";var L4r=Im();_m.exports=L4r});var Rm=s((v0e,Pm)=>{"use strict";function P4r(r,e,t){var i,n,a,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],a=0;a<i;a++)f[a]=t(o[a])}Pm.exports=P4r});var Po=s((f0e,Fm)=>{"use strict";var R4r=Rm();Fm.exports=R4r});var Bm=s((c0e,Mm)=>{"use strict";var F4r=Yn();function M4r(r){return F4r(0,r)}Mm.exports=M4r});var Ro=s((l0e,km)=>{"use strict";var B4r=Bm();km.exports=B4r});var Cm=s((p0e,jm)=>{"use strict";var Vr=nr(),k4r=Ou(),j4r=Su(),C4r=Yn(),G4r=kv(),V4r=Tu(),U4r=Bp(),H4r=Nm(),W4r=Lo(),z4r=Lm(),D4r=Po(),X4r=Ro();function J4r(r){return Vr(r,"bbinary2d",k4r),Vr(r,"broadcastShapes",j4r),Vr(r,"filled2d",C4r),Vr(r,"filled2dBy",G4r),Vr(r,"flattenArray",V4r),Vr(r,"iterator2array",U4r),Vr(r,"linspace",H4r),Vr(r,"normalizeBroadcastArgs",W4r),Vr(r,"ones2d",z4r),Vr(r,"unary2d",D4r),Vr(r,"zeros2d",X4r),r}jm.exports=J4r});var Um=s((g0e,Vm)=>{"use strict";var Gm=y();function x4r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(Gm('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(Gm('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}Vm.exports=x4r});var Wm=s((m0e,Hm)=>{"use strict";var Y4r=Um();Hm.exports=Y4r});var Dm=s((d0e,zm)=>{"use strict";var Z4r=j().isPrimitive,$4r=Wm(),Q4r=y();function K4r(r,e,t,i,n,a){var u,o;if(!(Z4r(r)&&$4r(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(Q4r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}zm.exports=K4r});var Jm=s((h0e,Xm)=>{"use strict";var rvr=Dm();Xm.exports=rvr});var Ym=s((q0e,xm)=>{"use strict";var evr=fr().isPrimitive,tvr=y();function ivr(r,e){if(!evr(r))throw new TypeError(tvr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}xm.exports=ivr});var $m=s((y0e,Zm)=>{"use strict";var nvr=Ym();Zm.exports=nvr});var Km=s((b0e,Qm)=>{"use strict";function avr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}Qm.exports=avr});var ed=s((w0e,rd)=>{"use strict";var svr=Km();rd.exports=svr});var id=s((E0e,td)=>{"use strict";var uvr=y(),ovr=ed();function vvr(r,e,t){if(!ovr(r,e))throw new TypeError(uvr("invalid argument. %s must be broadcast compatible.",t))}td.exports=vvr});var ad=s((N0e,nd)=>{"use strict";var fvr=id();nd.exports=fvr});var ud=s((A0e,sd)=>{"use strict";function cvr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}sd.exports=cvr});var vd=s((O0e,od)=>{"use strict";var lvr=ud();od.exports=lvr});var cd=s((S0e,fd)=>{"use strict";var pvr=y(),gvr=vd();function mvr(r,e,t,i){if(!gvr(r,e))throw new TypeError(pvr("invalid argument. %s must be broadcast compatible with %s.",t,i))}fd.exports=mvr});var pd=s((T0e,ld)=>{"use strict";var dvr=cd();ld.exports=dvr});var md=s((I0e,gd)=>{"use strict";var hvr=y();function qvr(r,e){if(r===void 0)throw new Error(hvr("invalid invocation. Must provide %s.",e))}gd.exports=qvr});var Fo=s((_0e,dd)=>{"use strict";var yvr=md();dd.exports=yvr});var qd=s((L0e,hd)=>{"use strict";var bvr=y();function wvr(r,e,t,i){if(!(r>e))throw new TypeError(bvr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}hd.exports=wvr});var bd=s((P0e,yd)=>{"use strict";var Evr=qd();yd.exports=Evr});var Ed=s((R0e,wd)=>{"use strict";var Nvr=y();function Avr(r,e,t,i){if(!(r>=e))throw new TypeError(Nvr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}wd.exports=Avr});var Ad=s((F0e,Nd)=>{"use strict";var Ovr=Ed();Nd.exports=Ovr});var Sd=s((M0e,Od)=>{"use strict";var Svr=Cr().isPrimitive,Tvr=y();function Ivr(r,e){if(!Svr(r))throw new TypeError(Tvr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}Od.exports=Ivr});var Id=s((B0e,Td)=>{"use strict";var _vr=Sd();Td.exports=_vr});var Ld=s((k0e,_d)=>{"use strict";var Lvr=y();function Pvr(r,e,t,i){if(!(r<e))throw new TypeError(Lvr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}_d.exports=Pvr});var Rd=s((j0e,Pd)=>{"use strict";var Rvr=Ld();Pd.exports=Rvr});var Md=s((C0e,Fd)=>{"use strict";var Fvr=y();function Mvr(r,e,t,i){if(!(r<=e))throw new TypeError(Fvr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Fd.exports=Mvr});var kd=s((G0e,Bd)=>{"use strict";var Bvr=Md();Bd.exports=Bvr});var Cd=s((V0e,jd)=>{"use strict";var kvr=Ge().isPrimitive,jvr=y();function Cvr(r,e){if(!kvr(r))throw new TypeError(jvr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}jd.exports=Cvr});var Vd=s((U0e,Gd)=>{"use strict";var Gvr=Cd();Gd.exports=Gvr});var Mo=s((H0e,Ud)=>{"use strict";var Vvr=j().isPrimitive;function Uvr(r){return Vvr(r)&&r>=0}Ud.exports=Uvr});var Bo=s((W0e,Hd)=>{"use strict";var Hvr=j().isObject;function Wvr(r){return Hvr(r)&&r.valueOf()>=0}Hd.exports=Wvr});var zd=s((z0e,Wd)=>{"use strict";var zvr=Mo(),Dvr=Bo();function Xvr(r){return zvr(r)||Dvr(r)}Wd.exports=Xvr});var jo=s((D0e,Xd)=>{"use strict";var Dd=w(),ko=zd(),Jvr=Mo(),xvr=Bo();Dd(ko,"isPrimitive",Jvr);Dd(ko,"isObject",xvr);Xd.exports=ko});var xd=s((X0e,Jd)=>{"use strict";var Yvr=jo().isPrimitive,Zvr=y();function $vr(r,e){if(!Yvr(r))throw new TypeError(Zvr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Jd.exports=$vr});var Zd=s((J0e,Yd)=>{"use strict";var Qvr=xd();Yd.exports=Qvr});var Qd=s((x0e,$d)=>{"use strict";var Kvr=j().isPrimitive,rfr=y();function efr(r,e){if(!Kvr(r))throw new TypeError(rfr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}$d.exports=efr});var rh=s((Y0e,Kd)=>{"use strict";var tfr=Qd();Kd.exports=tfr});var th=s((Z0e,eh)=>{"use strict";var ifr=y();function nfr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(ifr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}eh.exports=nfr});var nh=s(($0e,ih)=>{"use strict";var afr=th();ih.exports=afr});var Co=s((Q0e,ah)=>{"use strict";var sfr=Cr().isPrimitive;function ufr(r){return sfr(r)&&r>0}ah.exports=ufr});var Go=s((K0e,sh)=>{"use strict";var ofr=Cr().isObject;function vfr(r){return ofr(r)&&r.valueOf()>0}sh.exports=vfr});var oh=s((rse,uh)=>{"use strict";var ffr=Co(),cfr=Go();function lfr(r){return ffr(r)||cfr(r)}uh.exports=lfr});var re=s((ese,fh)=>{"use strict";var vh=w(),Vo=oh(),pfr=Co(),gfr=Go();vh(Vo,"isPrimitive",pfr);vh(Vo,"isObject",gfr);fh.exports=Vo});var lh=s((tse,ch)=>{"use strict";var mfr=re().isPrimitive,dfr=y();function hfr(r,e){if(!mfr(r))throw new TypeError(dfr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}ch.exports=hfr});var Uo=s((ise,ph)=>{"use strict";var qfr=lh();ph.exports=qfr});var Ho=s((nse,gh)=>{"use strict";var yfr=j().isPrimitive;function bfr(r){return yfr(r)&&r>0}gh.exports=bfr});var Wo=s((ase,mh)=>{"use strict";var wfr=j().isObject;function Efr(r){return wfr(r)&&r.valueOf()>0}mh.exports=Efr});var hh=s((sse,dh)=>{"use strict";var Nfr=Ho(),Afr=Wo();function Ofr(r){return Nfr(r)||Afr(r)}dh.exports=Ofr});var W=s((use,yh)=>{"use strict";var qh=w(),zo=hh(),Sfr=Ho(),Tfr=Wo();qh(zo,"isPrimitive",Sfr);qh(zo,"isObject",Tfr);yh.exports=zo});var wh=s((ose,bh)=>{"use strict";var Ifr=W().isPrimitive,_fr=y();function Lfr(r,e){if(!Ifr(r))throw new TypeError(_fr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}bh.exports=Lfr});var Nh=s((vse,Eh)=>{"use strict";var Pfr=wh();Eh.exports=Pfr});var Do=s((fse,Ah)=>{"use strict";var Rfr=j().isPrimitive;function Ffr(r){return Rfr(r)&&r>=0&&r<=1}Ah.exports=Ffr});var Xo=s((cse,Oh)=>{"use strict";var Mfr=j().isObject;function Bfr(r){return Mfr(r)&&r.valueOf()>=0&&r.valueOf()<=1}Oh.exports=Bfr});var Th=s((lse,Sh)=>{"use strict";var kfr=Do(),jfr=Xo();function Cfr(r){return kfr(r)||jfr(r)}Sh.exports=Cfr});var en=s((pse,_h)=>{"use strict";var Ih=w(),Jo=Th(),Gfr=Do(),Vfr=Xo();Ih(Jo,"isPrimitive",Gfr);Ih(Jo,"isObject",Vfr);_h.exports=Jo});var Ph=s((gse,Lh)=>{"use strict";var Ufr=en().isPrimitive,Hfr=y();function Wfr(r,e){if(!Ufr(r))throw new TypeError(Hfr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}Lh.exports=Wfr});var Fh=s((mse,Rh)=>{"use strict";var zfr=Ph();Rh.exports=zfr});var Bh=s((dse,Mh)=>{"use strict";var Dfr=cr(),Xfr=y();function Jfr(r,e){if(!Dfr(r))throw new TypeError(Xfr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Mh.exports=Jfr});var jh=s((hse,kh)=>{"use strict";var xfr=Bh();kh.exports=xfr});var Gh=s((qse,Ch)=>{"use strict";function Yfr(r){return r.length===1||r[0].length===1}Ch.exports=Yfr});var Uh=s((yse,Vh)=>{"use strict";var Zfr=Gh();Vh.exports=Zfr});var Wh=s((bse,Hh)=>{"use strict";var $fr=cr(),Qfr=Uh();function Kfr(r){return $fr(r)&&Qfr(r)}Hh.exports=Kfr});var Dh=s((wse,zh)=>{"use strict";var rcr=Wh();zh.exports=rcr});var Jh=s((Ese,Xh)=>{"use strict";var ecr=y(),tcr=Dh();function icr(r,e){if(!tcr(r))throw new TypeError(ecr("invalid argument. %s must consist of only a single row or a single column.",e))}Xh.exports=icr});var Yh=s((Nse,xh)=>{"use strict";var ncr=Jh();xh.exports=ncr});var $h=s((Ase,Zh)=>{"use strict";function acr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}Zh.exports=acr});var Kh=s((Ose,Qh)=>{"use strict";var scr=$h();Qh.exports=scr});var eq=s((Sse,rq)=>{"use strict";var ucr=y(),ocr=Kh();function vcr(r,e,t){if(!ocr(r,e))throw new TypeError(ucr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}rq.exports=vcr});var iq=s((Tse,tq)=>{"use strict";var fcr=eq();tq.exports=fcr});var aq=s((Ise,nq)=>{"use strict";var ccr=rr().isPrimitive,lcr=y();function pcr(r,e){if(!ccr(r))throw new TypeError(lcr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}nq.exports=pcr});var uq=s((_se,sq)=>{"use strict";var gcr=aq();sq.exports=gcr});var vq=s((Lse,oq)=>{"use strict";var mcr=y();function dcr(r){throw new Error(mcr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}oq.exports=dcr});var cq=s((Pse,fq)=>{"use strict";var hcr=vq();fq.exports=hcr});var gq=s((Rse,pq)=>{"use strict";var lq=Uo(),qcr=Fo();function ycr(r,e,t){lq(r,"Number of rows"),lq(e,"Number of columns"),qcr(t,"a pseudorandom number generator seed")}pq.exports=ycr});var dq=s((Fse,mq)=>{"use strict";var bcr=gq();mq.exports=bcr});var qq=s((Mse,hq)=>{"use strict";var Z=nr(),wcr=cr(),Ecr=Jm(),Ncr=$m(),Acr=ad(),Ocr=pd(),Scr=Fo(),Tcr=bd(),Icr=Ad(),_cr=Id(),Lcr=Rd(),Pcr=kd(),Rcr=Vd(),Fcr=Zd(),Mcr=rh(),Bcr=nh(),kcr=Uo(),jcr=Nh(),Ccr=Fh(),Gcr=jh(),Vcr=Yh(),Ucr=iq(),Hcr=uq(),Wcr=cq(),zcr=dq();function Dcr(r){return Z(r,"isBetween",Ecr),Z(r,"isBoolean",Ncr),Z(r,"isBroadcastCompatible",Acr),Z(r,"isBroadcastCompatibleWith",Ocr),Z(r,"isDefined",Scr),Z(r,"isGreaterThan",Tcr),Z(r,"isGreaterThanEqual",Icr),Z(r,"isInteger",_cr),Z(r,"isLessThan",Lcr),Z(r,"isLessThanEqual",Pcr),Z(r,"isNonNegativeInteger",Rcr),Z(r,"isNonNegativeNumber",Fcr),Z(r,"isNumber",Mcr),Z(r,"isOneOf",Bcr),Z(r,"isPositiveInteger",kcr),Z(r,"isPositiveNumber",jcr),Z(r,"isProbability",Ccr),Z(r,"isRange",Gcr),Z(r,"isRange1d",Vcr),Z(r,"isSameShape",Ucr),Z(r,"isString",Hcr),Z(r,"unrecognizedOptionName",Wcr),Z(r,"verifyCommonPRNGArgs",zcr),r.base={},Z(r.base,"isArray",wcr),r}hq.exports=Dcr});var bq=s((Bse,yq)=>{"use strict";var xo=4;function Xcr(r,e,t,i,n,a){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%xo,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<xo)return n;for(v=f;v<r;v+=xo)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=a;return n}yq.exports=Xcr});var Eq=s((kse,wq)=>{"use strict";var tn=4;function Jcr(r,e,t,i,n,a,u,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&u===1){if(c=r%tn,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=u;if(r<tn)return a;for(l=c;l<r;l+=tn)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=tn,v+=tn;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=u;return a}wq.exports=Jcr});var Yo=s((jse,Aq)=>{"use strict";var xcr=w(),Nq=bq(),Ycr=Eq();xcr(Nq,"ndarray",Ycr);Aq.exports=Nq});var Tq=s((Cse,Sq)=>{"use strict";var Oq=nr(),Zcr=Yo().ndarray,$cr=Yo().ndarray;function Qcr(r){return Oq(r,"daxpy",Zcr),Oq(r,"saxpy",$cr),r}Sq.exports=Qcr});var _q=s((Gse,Iq)=>{"use strict";var Kcr=It(),r5r=tr();function e5r(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(r5r(r)==="[object Error]")return!0;r=Kcr(r)}return!1}Iq.exports=e5r});var Pq=s((Vse,Lq)=>{"use strict";var t5r=_q();Lq.exports=t5r});var Zo=s((Use,Rq)=>{"use strict";function i5r(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Rq.exports=i5r});var Mq=s((Hse,Fq)=>{"use strict";var n5r=Zo(),a5r=n5r();Fq.exports=a5r});var jq=s((Wse,kq)=>{"use strict";var s5r=w(),Bq=Zo(),u5r=Mq();s5r(Bq,"REGEXP",u5r);kq.exports=Bq});var Gq=s((zse,Cq)=>{"use strict";var o5r=rr().isPrimitive,v5r=jq(),f5r=y();function c5r(r){if(!o5r(r))throw new TypeError(f5r("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=v5r().exec(r),r?new RegExp(r[1],r[2]):null}Cq.exports=c5r});var Uq=s((Dse,Vq)=>{"use strict";var l5r=Gq();Vq.exports=l5r});var $o=s((Xse,Hq)=>{"use strict";var p5r=j().isPrimitive,g5r=E();function m5r(r){return p5r(r)&&g5r(r)}Hq.exports=m5r});var Qo=s((Jse,Wq)=>{"use strict";var d5r=j().isObject,h5r=E();function q5r(r){return d5r(r)&&h5r(r.valueOf())}Wq.exports=q5r});var Dq=s((xse,zq)=>{"use strict";var y5r=$o(),b5r=Qo();function w5r(r){return y5r(r)||b5r(r)}zq.exports=w5r});var sr=s((Yse,Jq)=>{"use strict";var Xq=w(),Ko=Dq(),E5r=$o(),N5r=Qo();Xq(Ko,"isPrimitive",E5r);Xq(Ko,"isObject",N5r);Jq.exports=Ko});var $q=s((Zse,Zq)=>{"use strict";var xq=sr(),A5r=jr(),O5r=rr().isPrimitive,S5r=Cr().isPrimitive,Yq=y();function T5r(r,e,t){var i,n;if(!A5r(r)&&!O5r(r))throw new TypeError(Yq("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!S5r(t))throw new TypeError(Yq("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(xq(e)){for(;n<i;n++)if(xq(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}Zq.exports=T5r});var ha=s(($se,Qq)=>{"use strict";var I5r=$q();Qq.exports=I5r});var qa=s((Qse,Kq)=>{"use strict";function _5r(r){return Object.keys(Object(r))}Kq.exports=_5r});var ey=s((Kse,ry)=>{"use strict";var L5r=qa();function P5r(){return(L5r(arguments)||"").length!==2}function R5r(){return P5r(1,2)}ry.exports=R5r});var iy=s((rue,ty)=>{"use strict";var F5r=typeof Object.keys<"u";ty.exports=F5r});var r2=s((eue,ny)=>{"use strict";var M5r=tr();function B5r(r){return M5r(r)==="[object Arguments]"}ny.exports=B5r});var uy=s((tue,sy)=>{"use strict";var k5r=r2(),ay;function j5r(){return k5r(arguments)}ay=j5r();sy.exports=ay});var e2=s((iue,oy)=>{"use strict";var C5r=Object.prototype.propertyIsEnumerable;oy.exports=C5r});var cy=s((nue,fy)=>{"use strict";var G5r=e2(),vy;function V5r(){return!G5r.call("beep","0")}vy=V5r();fy.exports=vy});var py=s((aue,ly)=>{"use strict";var U5r=rr(),H5r=sr().isPrimitive,W5r=Cr().isPrimitive,z5r=e2(),D5r=cy();function X5r(r,e){var t;return r==null?!1:(t=z5r.call(r,e),!t&&D5r&&U5r(r)?(e=+e,!H5r(e)&&W5r(e)&&e>=0&&e<r.length):t)}ly.exports=X5r});var nn=s((sue,gy)=>{"use strict";var J5r=py();gy.exports=J5r});var dy=s((uue,my)=>{"use strict";var x5r=O(),Y5r=nn(),Z5r=cr(),$5r=Tr(),Q5r=Dt();function K5r(r){return r!==null&&typeof r=="object"&&!Z5r(r)&&typeof r.length=="number"&&$5r(r.length)&&r.length>=0&&r.length<=Q5r&&x5r(r,"callee")&&!Y5r(r,"callee")}my.exports=K5r});var i2=s((oue,hy)=>{"use strict";var r8r=uy(),e8r=r2(),t8r=dy(),t2;r8r?t2=e8r:t2=t8r;hy.exports=t2});var by=s((vue,yy)=>{"use strict";var i8r=i2(),qy=qa(),n8r=Array.prototype.slice;function a8r(r){return i8r(r)?qy(n8r.call(r)):qy(r)}yy.exports=a8r});var Ey=s((fue,wy)=>{"use strict";function s8r(){}wy.exports=s8r});var C=s((cue,Ny)=>{"use strict";var u8r=Ey();Ny.exports=u8r});var Oy=s((lue,Ay)=>{"use strict";var o8r=nn(),v8r=C(),f8r=o8r(v8r,"prototype");Ay.exports=f8r});var Ty=s((pue,Sy)=>{"use strict";var c8r=nn(),l8r={toString:null},p8r=!c8r(l8r,"toString");Sy.exports=p8r});var n2=s((gue,Iy)=>{"use strict";function g8r(r){return r.constructor&&r.constructor.prototype===r}Iy.exports=g8r});var _y=s((mue,m8r)=>{m8r.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Py=s((due,Ly)=>{"use strict";var d8r=typeof window>"u"?void 0:window;Ly.exports=d8r});var By=s((hue,My)=>{"use strict";var h8r=O(),q8r=ha(),Ry=Zn(),y8r=n2(),b8r=_y(),ui=Py(),Fy;function w8r(){var r;if(Ry(ui)==="undefined")return!1;for(r in ui)try{q8r(b8r,r)===-1&&h8r(ui,r)&&ui[r]!==null&&Ry(ui[r])==="object"&&y8r(ui[r])}catch{return!0}return!1}Fy=w8r();My.exports=Fy});var jy=s((que,ky)=>{"use strict";var E8r=typeof window<"u";ky.exports=E8r});var Vy=s((yue,Gy)=>{"use strict";var N8r=By(),Cy=n2(),A8r=jy();function O8r(r){if(A8r===!1&&!N8r)return Cy(r);try{return Cy(r)}catch{return!1}}Gy.exports=O8r});var Uy=s((bue,S8r)=>{S8r.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var zy=s((wue,Wy)=>{"use strict";var T8r=Gu(),a2=O(),I8r=i2(),_8r=Oy(),L8r=Ty(),P8r=Vy(),Hy=Uy();function R8r(r){var e,t,i,n,a,u,o;if(n=[],I8r(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!a2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!T8r(r))return n;t=_8r&&i}for(a in r)!(t&&a==="prototype")&&a2(r,a)&&n.push(String(a));if(L8r)for(e=P8r(r),o=0;o<Hy.length;o++)u=Hy[o],!(e&&u==="constructor")&&a2(r,u)&&n.push(String(u));return n}Wy.exports=R8r});var Xy=s((Eue,Dy)=>{"use strict";var F8r=ey(),M8r=iy(),B8r=qa(),k8r=by(),j8r=zy(),ya;M8r?F8r()?ya=k8r:ya=B8r:ya=j8r;Dy.exports=ya});var an=s((Nue,Jy)=>{"use strict";var C8r=Xy();Jy.exports=C8r});var Yy=s((Aue,xy)=>{"use strict";var G8r=typeof Object.getOwnPropertyNames<"u";xy.exports=G8r});var Qy=s((Oue,$y)=>{"use strict";var Zy=ai(),V8r=Zy.getOwnPropertyNames;function U8r(r){return V8r(Zy(r))}$y.exports=U8r});var rb=s((Sue,Ky)=>{"use strict";var H8r=ai(),W8r=an();function z8r(r){return W8r(H8r(r))}Ky.exports=z8r});var tb=s((Tue,eb)=>{"use strict";var D8r=Yy(),X8r=Qy(),J8r=rb(),s2;D8r?s2=X8r:s2=J8r;eb.exports=s2});var nb=s((Iue,ib)=>{"use strict";var x8r=typeof Object.getOwnPropertyDescriptor<"u";ib.exports=x8r});var sb=s((_ue,ab)=>{"use strict";var Y8r=Object.getOwnPropertyDescriptor;function Z8r(r,e){var t;return r==null?null:(t=Y8r(r,e),t===void 0?null:t)}ab.exports=Z8r});var ob=s((Lue,ub)=>{"use strict";var $8r=O();function Q8r(r,e){return $8r(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}ub.exports=Q8r});var fb=s((Pue,vb)=>{"use strict";var K8r=nb(),rlr=sb(),elr=ob(),u2;K8r?u2=rlr:u2=elr;vb.exports=u2});var lb=s((Rue,cb)=>{"use strict";var tlr=typeof Buffer=="function"?Buffer:null;cb.exports=tlr});var gb=s((Fue,pb)=>{"use strict";var ilr=wt(),ba=lb();function nlr(){var r,e;if(typeof ba!="function")return!1;try{typeof ba.from=="function"?e=ba.from([1,2,3,4]):e=new ba([1,2,3,4]),r=ilr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}pb.exports=nlr});var db=s((Mue,mb)=>{"use strict";var alr=gb();mb.exports=alr});var yb=s(wa=>{"use strict";wa.byteLength=ulr;wa.toByteArray=vlr;wa.fromByteArray=llr;var Dr=[],Mr=[],slr=typeof Uint8Array<"u"?Uint8Array:Array,o2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_t=0,hb=o2.length;_t<hb;++_t)Dr[_t]=o2[_t],Mr[o2.charCodeAt(_t)]=_t;var _t,hb;Mr["-".charCodeAt(0)]=62;Mr["_".charCodeAt(0)]=63;function qb(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function ulr(r){var e=qb(r),t=e[0],i=e[1];return(t+i)*3/4-i}function olr(r,e,t){return(e+t)*3/4-t}function vlr(r){var e,t=qb(r),i=t[0],n=t[1],a=new slr(olr(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=Mr[r.charCodeAt(f)]<<18|Mr[r.charCodeAt(f+1)]<<12|Mr[r.charCodeAt(f+2)]<<6|Mr[r.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Mr[r.charCodeAt(f)]<<2|Mr[r.charCodeAt(f+1)]>>4,a[u++]=e&255),n===1&&(e=Mr[r.charCodeAt(f)]<<10|Mr[r.charCodeAt(f+1)]<<4|Mr[r.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function flr(r){return Dr[r>>18&63]+Dr[r>>12&63]+Dr[r>>6&63]+Dr[r&63]}function clr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(flr(i));return n.join("")}function llr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(clr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(Dr[e>>2]+Dr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Dr[e>>10]+Dr[e>>4&63]+Dr[e<<2&63]+"=")),n.join("")}});var bb=s(v2=>{v2.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-v}return(m?-1:1)*u*Math.pow(2,a-i)};v2.write=function(r,e,t,i,n,a){var u,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+m]=o&255,m+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+m]=u&255,m+=h,u/=256,v-=8);r[t+m-h]|=d*128}});var jb=s(ci=>{"use strict";var f2=yb(),vi=bb(),wb=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ci.Buffer=b;ci.SlowBuffer=qlr;ci.INSPECT_MAX_BYTES=50;var Ea=2147483647;ci.kMaxLength=Ea;b.TYPED_ARRAY_SUPPORT=plr();!b.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function plr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.byteOffset}});function ee(r){if(r>Ea)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,b.prototype),e}function b(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return g2(r)}return Ob(r,e,t)}b.poolSize=8192;function Ob(r,e,t){if(typeof r=="string")return mlr(r,e);if(ArrayBuffer.isView(r))return dlr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Xr(r,ArrayBuffer)||r&&Xr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Xr(r,SharedArrayBuffer)||r&&Xr(r.buffer,SharedArrayBuffer)))return l2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return b.from(i,e,t);let n=hlr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return b.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}b.from=function(r,e,t){return Ob(r,e,t)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function Sb(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function glr(r,e,t){return Sb(r),r<=0?ee(r):e!==void 0?typeof t=="string"?ee(r).fill(e,t):ee(r).fill(e):ee(r)}b.alloc=function(r,e,t){return glr(r,e,t)};function g2(r){return Sb(r),ee(r<0?0:m2(r)|0)}b.allocUnsafe=function(r){return g2(r)};b.allocUnsafeSlow=function(r){return g2(r)};function mlr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Tb(r,e)|0,i=ee(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function c2(r){let e=r.length<0?0:m2(r.length)|0,t=ee(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function dlr(r){if(Xr(r,Uint8Array)){let e=new Uint8Array(r);return l2(e.buffer,e.byteOffset,e.byteLength)}return c2(r)}function l2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,b.prototype),i}function hlr(r){if(b.isBuffer(r)){let e=m2(r.length)|0,t=ee(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||h2(r.length)?ee(0):c2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return c2(r.data)}function m2(r){if(r>=Ea)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ea.toString(16)+" bytes");return r|0}function qlr(r){return+r!=r&&(r=0),b.alloc(+r)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,t){if(Xr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),Xr(t,Uint8Array)&&(t=b.from(t,t.offset,t.byteLength)),!b.isBuffer(e)||!b.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=b.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(Xr(u,Uint8Array))a+u.length>n.length?(b.isBuffer(u)||(u=b.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(b.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function Tb(r,e){if(b.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Xr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return p2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return kb(r).length;default:if(n)return i?-1:p2(r).length;e=(""+e).toLowerCase(),n=!0}}b.byteLength=Tb;function ylr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return _lr(this,e,t);case"utf8":case"utf-8":return _b(this,e,t);case"ascii":return Tlr(this,e,t);case"latin1":case"binary":return Ilr(this,e,t);case"base64":return Olr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Llr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}b.prototype._isBuffer=!0;function Lt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Lt(this,t,t+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Lt(this,t,t+3),Lt(this,t+1,t+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Lt(this,t,t+7),Lt(this,t+1,t+6),Lt(this,t+2,t+5),Lt(this,t+3,t+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?_b(this,0,e):ylr.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",t=ci.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};wb&&(b.prototype[wb]=b.prototype.inspect);b.prototype.compare=function(e,t,i,n,a){if(Xr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,f=Math.min(u,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function Ib(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,h2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=b.from(e,i)),b.isBuffer(e))return e.length===0?-1:Eb(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Eb(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function Eb(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}b.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};b.prototype.indexOf=function(e,t,i){return Ib(this,e,t,i,!0)};b.prototype.lastIndexOf=function(e,t,i){return Ib(this,e,t,i,!1)};function blr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(h2(o))return u;r[t+u]=o}return u}function wlr(r,e,t,i){return Na(p2(e,r.length-t),r,t,i)}function Elr(r,e,t,i){return Na(Mlr(e),r,t,i)}function Nlr(r,e,t,i){return Na(kb(e),r,t,i)}function Alr(r,e,t,i){return Na(Blr(e,r.length-t),r,t,i)}b.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return blr(this,e,t,i);case"utf8":case"utf-8":return wlr(this,e,t,i);case"ascii":case"latin1":case"binary":return Elr(this,e,t,i);case"base64":return Nlr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Alr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Olr(r,e,t){return e===0&&t===r.length?f2.fromByteArray(r):f2.fromByteArray(r.slice(e,t))}function _b(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return Slr(i)}var Nb=4096;function Slr(r){let e=r.length;if(e<=Nb)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=Nb));return t}function Tlr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function Ilr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function _lr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=klr[r[a]];return n}function Llr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}b.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,b.prototype),n};function ur(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};b.prototype.readUint8=b.prototype.readUInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&sn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&sn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};b.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};b.prototype.readInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};b.prototype.readInt16BE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};b.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&sn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&sn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});b.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),vi.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),vi.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),vi.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),vi.read(this,e,!1,52,8)};function hr(r,e,t,i,n,a){if(!b.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;hr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;hr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,1,255,0),this[t]=e&255,t+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Lb(r,e,t,i,n){Bb(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function Pb(r,e,t,i,n){Bb(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}b.prototype.writeBigUInt64LE=ze(function(e,t=0){return Lb(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=ze(function(e,t=0){return Pb(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);hr(this,e,t,i,f-1,-f)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);hr(this,e,t,i,f-1,-f)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};b.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};b.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};b.prototype.writeBigInt64LE=ze(function(e,t=0){return Lb(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=ze(function(e,t=0){return Pb(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Rb(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Fb(r,e,t,i,n){return e=+e,t=t>>>0,n||Rb(r,e,t,4,34028234663852886e22,-34028234663852886e22),vi.write(r,e,t,i,23,4),t+4}b.prototype.writeFloatLE=function(e,t,i){return Fb(this,e,t,!0,i)};b.prototype.writeFloatBE=function(e,t,i){return Fb(this,e,t,!1,i)};function Mb(r,e,t,i,n){return e=+e,t=t>>>0,n||Rb(r,e,t,8,17976931348623157e292,-17976931348623157e292),vi.write(r,e,t,i,52,8),t+8}b.prototype.writeDoubleLE=function(e,t,i){return Mb(this,e,t,!0,i)};b.prototype.writeDoubleBE=function(e,t,i){return Mb(this,e,t,!1,i)};b.prototype.copy=function(e,t,i,n){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};b.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!b.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=b.isBuffer(e)?e:b.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var oi={};function d2(r,e,t){oi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}d2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);d2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);d2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=Ab(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=Ab(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function Ab(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function Plr(r,e,t){fi(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&sn(e,r.length-(t+1))}function Bb(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new oi.ERR_OUT_OF_RANGE("value",o,r)}Plr(i,n,a)}function fi(r,e){if(typeof r!="number")throw new oi.ERR_INVALID_ARG_TYPE(e,"number",r)}function sn(r,e,t){throw Math.floor(r)!==r?(fi(r,t),new oi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new oi.ERR_BUFFER_OUT_OF_BOUNDS:new oi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var Rlr=/[^+/0-9A-Za-z-_]/g;function Flr(r){if(r=r.split("=")[0],r=r.trim().replace(Rlr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function p2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Mlr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Blr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function kb(r){return f2.toByteArray(Flr(r))}function Na(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Xr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function h2(r){return r!==r}var klr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function ze(r){return typeof BigInt>"u"?jlr:r}function jlr(){throw new Error("BigInt not supported")}});var Gb=s((Gue,Cb)=>{"use strict";var Clr=jb().Buffer;Cb.exports=Clr});var Ub=s((Vue,Vb)=>{"use strict";function Glr(){throw new Error("not implemented")}Vb.exports=Glr});var Aa=s((Uue,Hb)=>{"use strict";var Vlr=db(),Ulr=Gb(),Hlr=Ub(),q2;Vlr()?q2=Ulr:q2=Hlr;Hb.exports=q2});var zb=s((Hue,Wb)=>{"use strict";var Wlr=L(),zlr=Aa(),Dlr=Wlr(zlr.from);Wb.exports=Dlr});var Xb=s((Wue,Db)=>{"use strict";var Xlr=wt(),Jlr=y(),xlr=Aa();function Ylr(r){if(!Xlr(r))throw new TypeError(Jlr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return xlr.from(r)}Db.exports=Ylr});var xb=s((zue,Jb)=>{"use strict";var Zlr=wt(),$lr=y(),Qlr=Aa();function Klr(r){if(!Zlr(r))throw new TypeError($lr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Qlr(r)}Jb.exports=Klr});var Zb=s((Due,Yb)=>{"use strict";var r7r=zb(),e7r=Xb(),t7r=xb(),y2;r7r?y2=e7r:y2=t7r;Yb.exports=y2});var Kb=s((Xue,Qb)=>{"use strict";var i7r=Ji(),n7r=xt(),a7r=Xi(),s7r=Di(),u7r=Jt(),o7r=Et(),v7r=lr(),f7r=Qr(),c7r=gr(),$b;function l7r(r){return new i7r(r)}function p7r(r){return new n7r(r)}function g7r(r){return new a7r(r)}function m7r(r){return new s7r(r)}function d7r(r){return new u7r(r)}function h7r(r){return new o7r(r)}function q7r(r){return new v7r(r)}function y7r(r){return new f7r(r)}function b7r(r){return new c7r(r)}function w7r(){var r={int8array:l7r,uint8array:p7r,uint8clampedarray:g7r,int16array:m7r,uint16array:d7r,int32array:h7r,uint32array:q7r,float32array:y7r,float64array:b7r};return r}$b=w7r();Qb.exports=$b});var nw=s((Jue,iw)=>{"use strict";var Oa=O(),b2=cr(),rw=wt(),E7r=Pq(),ew=Zn(),N7r=Uq(),A7r=ha(),tw=an(),O7r=tb(),un=fb(),S7r=It(),on=je(),T7r=Zb(),I7r=Kb();function _7r(r){var e,t,i,n,a,u,o,f;for(e=[],n=[],o=Object.create(S7r(r)),e.push(r),n.push(o),t=O7r(r),f=0;f<t.length;f++)i=t[f],a=un(r,i),Oa(a,"value")&&(u=b2(r[i])?[]:{},a.value=Pt(r[i],u,e,n,-1)),on(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function L7r(r){var e=[],t=[],i,n,a,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=tw(r),f=0;f<i.length;f++)u=i[f],n=un(r,u),Oa(n,"value")&&(a=b2(r[u])?[]:{},n.value=Pt(r[u],a,e,t,-1)),on(o,u,n);return o}function Pt(r,e,t,i,n){var a,u,o,f,v,c,l,p,m,h;if(n-=1,typeof r!="object"||r===null)return r;if(rw(r))return T7r(r);if(E7r(r))return L7r(r);if(o=ew(r),o==="date")return new Date(+r);if(o==="regexp")return N7r(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=I7r[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?_7r(r):{};if(u=tw(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=ew(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||rw(p)){a==="object"?(f=un(r,c),Oa(f,"value")&&(f.value=Pt(p)),on(e,c,f)):e[c]=Pt(p);continue}if(m=A7r(t,p),m!==-1){e[c]=i[m];continue}l=b2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Pt(p,l,t,i,n):(f=un(r,c),Oa(f,"value")&&(f.value=Pt(p,l,t,i,n)),on(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=un(r,c),on(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}iw.exports=Pt});var sw=s((xue,aw)=>{"use strict";var P7r=cr(),R7r=Ge().isPrimitive,F7r=y(),M7r=I(),B7r=nw();function k7r(r,e){var t;if(arguments.length>1){if(!R7r(e))throw new TypeError(F7r("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=M7r;return t=P7r(r)?new Array(r.length):{},B7r(r,t,[r],[t],e)}aw.exports=k7r});var vn=s((Yue,uw)=>{"use strict";var j7r=sw();uw.exports=j7r});var ow=s((Zue,C7r)=>{C7r.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var fw=s(($ue,vw)=>{"use strict";var G7r=vn(),V7r=ow();function U7r(){return G7r(V7r)}vw.exports=U7r});var cw=s((Que,H7r)=>{H7r.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var pw=s((Kue,lw)=>{"use strict";var W7r=vn(),z7r=cw();function D7r(){return W7r(z7r)}lw.exports=D7r});var gw=s((roe,X7r)=>{X7r.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var dw=s((eoe,mw)=>{"use strict";var J7r=vn(),x7r=gw();function Y7r(){return J7r(x7r)}mw.exports=Y7r});var hw=s((toe,Z7r)=>{Z7r.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var yw=s((ioe,qw)=>{"use strict";var $7r=hw();function Q7r(){return $7r.slice()}qw.exports=Q7r});var bw=s((noe,K7r)=>{K7r.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var Ew=s((aoe,ww)=>{"use strict";var r9r=vn(),e9r=bw();function t9r(){return r9r(e9r)}ww.exports=t9r});var Aw=s((soe,Nw)=>{"use strict";var fn=nr(),i9r=fw(),n9r=pw(),a9r=dw(),s9r=yw(),u9r=Ew();function o9r(r){return fn(r,"AFINN_111",i9r),fn(r,"AFINN_96",n9r),fn(r,"ANSCOMBES_QUARTET",a9r),fn(r,"HERNDON_VENUS_SEMIDIAMETERS",s9r),fn(r,"NIGHTINGALES_ROSE",u9r),r}Nw.exports=o9r});var Sw=s((uoe,Ow)=>{"use strict";function v9r(r,e){return r+e}Ow.exports=v9r});var Iw=s((ooe,Tw)=>{"use strict";var f9r=Sw();Tw.exports=f9r});var Lw=s((voe,_w)=>{"use strict";var c9r=I(),l9r=G();function p9r(r){return r===c9r||r===l9r}_w.exports=p9r});var Lr=s((foe,Pw)=>{"use strict";var g9r=Lw();Pw.exports=g9r});var Mw=s((coe,Fw)=>{"use strict";var Rw=ra();function m9r(r){return r>0?Rw(r-1):Rw(r+1)}Fw.exports=m9r});var Sa=s((loe,Bw)=>{"use strict";var d9r=Mw();Bw.exports=d9r});var jw=s((poe,kw)=>{"use strict";var h9r=Math.sqrt;kw.exports=h9r});var V=s((goe,Cw)=>{"use strict";var q9r=jw();Cw.exports=q9r});var Vw=s((moe,Gw)=>{"use strict";function y9r(r){return Math.abs(r)}Gw.exports=y9r});var X=s((doe,Uw)=>{"use strict";var b9r=Vw();Uw.exports=b9r});var Ww=s((hoe,Hw)=>{"use strict";var w9r=xt(),E9r=Jt(),N9r={uint16:E9r,uint8:w9r};Hw.exports=N9r});var Jw=s((qoe,Xw)=>{"use strict";var zw=Ww(),Dw;function A9r(){var r,e;return r=new zw.uint16(1),r[0]=4660,e=new zw.uint8(r.buffer),e[0]===52}Dw=A9r();Xw.exports=Dw});var Rt=s((yoe,xw)=>{"use strict";var O9r=Jw();xw.exports=O9r});var $w=s((boe,Zw)=>{"use strict";var S9r=Rt(),Yw,w2,E2;S9r===!0?(w2=1,E2=0):(w2=0,E2=1);Yw={HIGH:w2,LOW:E2};Zw.exports=Yw});var N2=s((woe,eE)=>{"use strict";var T9r=lr(),I9r=gr(),Kw=$w(),rE=new I9r(1),Qw=new T9r(rE.buffer),_9r=Kw.HIGH,L9r=Kw.LOW;function P9r(r,e,t,i){return rE[0]=r,e[i]=Qw[_9r],e[i+t]=Qw[L9r],e}eE.exports=P9r});var iE=s((Eoe,tE)=>{"use strict";var R9r=N2();function F9r(r){return R9r(r,[0>>>0,0>>>0],1,0)}tE.exports=F9r});var li=s((Noe,aE)=>{"use strict";var M9r=w(),nE=iE(),B9r=N2();M9r(nE,"assign",B9r);aE.exports=nE});var uE=s((Aoe,sE)=>{"use strict";var k9r=Rt(),A2;k9r===!0?A2=0:A2=1;sE.exports=A2});var vE=s((Ooe,oE)=>{"use strict";var j9r=lr(),C9r=gr(),G9r=uE(),O2=new C9r(1),V9r=new j9r(O2.buffer);function U9r(r,e){return O2[0]=r,V9r[G9r]=e>>>0,O2[0]}oE.exports=U9r});var te=s((Soe,fE)=>{"use strict";var H9r=vE();fE.exports=H9r});var lE=s((Toe,cE)=>{"use strict";function W9r(r){return r|0}cE.exports=W9r});var S2=s((Ioe,pE)=>{"use strict";var z9r=lE();pE.exports=z9r});var Jr=s((_oe,gE)=>{"use strict";var D9r=2147483647;gE.exports=D9r});var T2=s((Loe,mE)=>{"use strict";var X9r=2147483648;mE.exports=X9r});var hE=s((Poe,dE)=>{"use strict";var J9r=Rt(),I2;J9r===!0?I2=1:I2=0;dE.exports=I2});var bE=s((Roe,yE)=>{"use strict";var x9r=lr(),Y9r=gr(),Z9r=hE(),qE=new Y9r(1),$9r=new x9r(qE.buffer);function Q9r(r){return qE[0]=r,$9r[Z9r]}yE.exports=Q9r});var er=s((Foe,wE)=>{"use strict";var K9r=bE();wE.exports=K9r});var AE=s((Moe,NE)=>{"use strict";var rpr=Rt(),EE,_2,L2;rpr===!0?(_2=1,L2=0):(_2=0,L2=1);EE={HIGH:_2,LOW:L2};NE.exports=EE});var _E=s((Boe,IE)=>{"use strict";var epr=lr(),tpr=gr(),SE=AE(),TE=new tpr(1),OE=new epr(TE.buffer),ipr=SE.HIGH,npr=SE.LOW;function apr(r,e){return OE[ipr]=r,OE[npr]=e,TE[0]}IE.exports=apr});var pi=s((koe,LE)=>{"use strict";var spr=_E();LE.exports=spr});var RE=s((joe,PE)=>{"use strict";var upr=T2(),opr=Jr(),vpr=li(),fpr=er(),cpr=pi(),P2=[0,0];function lpr(r,e){var t,i;return vpr.assign(r,P2,1,0),t=P2[0],t&=opr,i=fpr(e),i&=upr,t|=i,cpr(t,P2[1])}PE.exports=lpr});var Ta=s((Coe,FE)=>{"use strict";var ppr=RE();FE.exports=ppr});var kE=s((Goe,BE)=>{"use strict";var ME=Sa(),gpr=Ta(),mpr=G(),Ia=I();function dpr(r,e){return e===mpr?Ia:e===Ia?0:e>0?ME(e)?r:0:ME(e)?gpr(Ia,r):Ia}BE.exports=dpr});var CE=s((Voe,jE)=>{"use strict";var hpr=Jr(),qpr=er(),ypr=1072693247,_a=1e300,La=1e-300;function bpr(r,e){var t,i;return i=qpr(r),t=i&hpr,t<=ypr?e<0?_a*_a:La*La:e>0?_a*_a:La*La}jE.exports=bpr});var UE=s((Uoe,VE)=>{"use strict";var wpr=X(),GE=I();function Epr(r,e){return r===-1?(r-r)/(r-r):r===1?1:wpr(r)<1==(e===GE)?0:GE}VE.exports=Epr});var WE=s((Hoe,HE)=>{"use strict";var Npr=Rt(),R2;Npr===!0?R2=1:R2=0;HE.exports=R2});var DE=s((Woe,zE)=>{"use strict";var Apr=lr(),Opr=gr(),Spr=WE(),F2=new Opr(1),Tpr=new Apr(F2.buffer);function Ipr(r,e){return F2[0]=r,Tpr[Spr]=e>>>0,F2[0]}zE.exports=Ipr});var ie=s((zoe,XE)=>{"use strict";var _pr=DE();XE.exports=_pr});var xr=s((Doe,JE)=>{"use strict";var Lpr=1023;JE.exports=Lpr});var YE=s((Xoe,xE)=>{"use strict";function Ppr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}xE.exports=Ppr});var KE=s((Joe,QE)=>{"use strict";var Rpr=er(),Pa=te(),ZE=ie(),Fpr=xr(),Mpr=YE(),Bpr=1048575,$E=1048576,kpr=1072693248,jpr=536870912,Cpr=524288,Gpr=20,Vpr=9007199254740992,Upr=.9617966939259756,Hpr=.9617967009544373,Wpr=-7028461650952758e-24,zpr=[1,1.5],Dpr=[0,.5849624872207642],Xpr=[0,1350039202129749e-23];function Jpr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,k,T,D,vr,$;return D=0,t<$E&&(e*=Vpr,D-=53,t=Rpr(e)),D+=(t>>Gpr)-Fpr|0,vr=t&Bpr|0,t=vr|kpr|0,vr<=235662?$=0:vr<767610?$=1:($=0,D+=1,t-=$E),e=ZE(e,t),c=zpr[$],k=e-c,T=1/(e+c),n=k*T,u=Pa(n,0),i=(t>>1|jpr)+Cpr,i+=$<<18,f=ZE(0,i),v=e-(f-c),o=T*(k-u*f-u*v),a=n*n,A=a*a*Mpr(a),A+=o*(u+n),a=u*u,f=3+a+A,f=Pa(f,0),v=A-(f-3-a),k=u*f,T=o*f+v*n,p=k+T,p=Pa(p,0),m=T-(p-k),h=Hpr*p,d=Wpr*p+m*Upr+Xpr[$],l=Dpr[$],N=D,g=h+d+l+N,g=Pa(g,0),q=d-(g-N-l-h),r[0]=g,r[1]=q,r}QE.exports=Jpr});var eN=s((xoe,rN)=>{"use strict";function xpr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}rN.exports=xpr});var iN=s((Yoe,tN)=>{"use strict";var Ypr=te(),Zpr=eN(),$pr=1.4426950408889634,Qpr=1.4426950216293335,Kpr=19259629911266175e-24;function rgr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*Zpr(n),u=Qpr*n,o=n*Kpr-a*$pr,i=u+o,i=Ypr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}tN.exports=rgr});var M2=s((Zoe,nN)=>{"use strict";var egr=1023;nN.exports=egr});var sN=s(($oe,aN)=>{"use strict";var tgr=-1023;aN.exports=tgr});var B2=s((Qoe,uN)=>{"use strict";var igr=-1074;uN.exports=igr});var k2=s((Koe,oN)=>{"use strict";var ngr=22250738585072014e-324;oN.exports=ngr});var j2=s((r2e,vN)=>{"use strict";var agr=k2(),sgr=Lr(),ugr=E(),ogr=X(),vgr=4503599627370496;function fgr(r,e,t,i){return ugr(r)||sgr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&ogr(r)<agr?(e[i]=r*vgr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}vN.exports=fgr});var cN=s((e2e,fN)=>{"use strict";var cgr=j2();function lgr(r){return cgr(r,[0,0],1,0)}fN.exports=lgr});var gN=s((t2e,pN)=>{"use strict";var pgr=w(),lN=cN(),ggr=j2();pgr(lN,"assign",ggr);pN.exports=lN});var cn=s((i2e,mN)=>{"use strict";var mgr=2146435072;mN.exports=mgr});var hN=s((n2e,dN)=>{"use strict";var dgr=er(),hgr=cn(),qgr=xr();function ygr(r){var e=dgr(r);return e=(e&hgr)>>>20,e-qgr|0}dN.exports=ygr});var yN=s((a2e,qN)=>{"use strict";var bgr=hN();qN.exports=bgr});var wN=s((s2e,bN)=>{"use strict";var wgr=I(),Egr=G(),Ngr=xr(),Agr=M2(),Ogr=sN(),Sgr=B2(),Tgr=E(),Igr=Lr(),_gr=Ta(),Lgr=gN().assign,Pgr=yN(),Rgr=li(),Fgr=pi(),Mgr=2220446049250313e-31,Bgr=2148532223>>>0,C2=[0,0],G2=[0,0];function kgr(r,e){var t,i;return e===0||r===0||Tgr(r)||Igr(r)?r:(Lgr(r,C2,1,0),r=C2[0],e+=C2[1],e+=Pgr(r),e<Sgr?_gr(0,r):e>Agr?r<0?Egr:wgr:(e<=Ogr?(e+=52,i=Mgr):i=1,Rgr.assign(r,G2,1,0),t=G2[0],t&=Bgr,t|=e+Ngr<<20,i*Fgr(t,G2[1])))}bN.exports=kgr});var Ra=s((u2e,EN)=>{"use strict";var jgr=wN();EN.exports=jgr});var Fa=s((o2e,NN)=>{"use strict";var Cgr=.6931471805599453;NN.exports=Cgr});var Ma=s((v2e,AN)=>{"use strict";var Ggr=1048575;AN.exports=Ggr});var SN=s((f2e,ON)=>{"use strict";function Vgr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}ON.exports=Vgr});var FN=s((c2e,RN)=>{"use strict";var Ugr=er(),TN=ie(),Hgr=te(),Wgr=S2(),zgr=Ra(),Dgr=Fa(),IN=xr(),_N=Jr(),LN=Ma(),Xgr=SN(),PN=1048576,Jgr=1071644672,ln=20,xgr=.6931471824645996,Ygr=-1904654299957768e-24;function Zgr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m;return p=r&_N|0,m=(p>>ln)-IN|0,l=0,p>Jgr&&(l=r+(PN>>m+1)>>>0,m=((l&_N)>>ln)-IN|0,i=(l&~(LN>>m))>>>0,a=TN(0,i),l=(l&LN|PN)>>ln-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=Hgr(a,0),o=a*xgr,f=(t-(a-e))*Dgr+a*Ygr,c=o+f,v=f-(c-o),a=c*c,n=c-a*Xgr(a),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=Ugr(c),r=Wgr(r),r+=l<<ln>>>0,r>>ln<=0?c=zgr(c,l):c=TN(c,r),c}RN.exports=Zgr});var zN=s((l2e,WN)=>{"use strict";var MN=E(),BN=Sa(),kN=Lr(),$gr=Tr(),jN=V(),Qgr=X(),V2=li(),Kgr=te(),CN=S2(),rmr=G(),emr=I(),U2=Jr(),tmr=kE(),imr=CE(),nmr=UE(),amr=KE(),smr=iN(),umr=FN(),omr=1072693247,vmr=1105199104,fmr=1139802112,GN=1083179008,cmr=1072693248,lmr=1083231232,pmr=3230714880>>>0,VN=31,De=1e300,Xe=1e-300,gmr=8008566259537294e-32,ne=[0,0],UN=[0,0];function HN(r,e){var t,i,n,a,u,o,f,v,c,l,p,m,h,d,g,q;if(MN(r)||MN(e))return NaN;if(V2.assign(e,ne,1,0),o=ne[0],f=ne[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return jN(r);if(e===-.5)return 1/jN(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(kN(e))return nmr(r,e)}if(V2.assign(r,ne,1,0),a=ne[0],u=ne[1],u===0){if(a===0)return tmr(r,e);if(r===1)return 1;if(r===-1&&BN(e))return-1;if(kN(r))return r===rmr?HN(-0,-e):e<0?0:emr}if(r<0&&$gr(e)===!1)return(r-r)/(r-r);if(n=Qgr(r),t=a&U2|0,i=o&U2|0,v=a>>>VN|0,c=o>>>VN|0,v&&BN(e)?v=-1:v=1,i>vmr){if(i>fmr)return imr(r,e);if(t<omr)return c===1?v*De*De:v*Xe*Xe;if(t>cmr)return c===0?v*De*De:v*Xe*Xe;h=smr(UN,n)}else h=amr(UN,n,t);if(l=Kgr(e,0),m=(e-l)*h[0]+e*h[1],p=l*h[0],d=m+p,V2.assign(d,ne,1,0),g=CN(ne[0]),q=CN(ne[1]),g>=GN){if((g-GN|q)!==0||m+gmr>d-p)return v*De*De}else if((g&U2)>=lmr&&((g-pmr|q)!==0||m<=d-p))return v*Xe*Xe;return d=umr(g,p,m),v*d}WN.exports=HN});var H=s((p2e,DN)=>{"use strict";var mmr=zN();DN.exports=mmr});var gi=s((g2e,XN)=>{"use strict";var dmr=9007199254740991;XN.exports=dmr});var Ba=s((m2e,JN)=>{"use strict";var hmr=308;JN.exports=hmr});var H2=s((d2e,xN)=>{"use strict";var qmr=-308;xN.exports=qmr});var ka=s((h2e,YN)=>{"use strict";var ymr=-324;YN.exports=ymr});var tA=s((q2e,eA)=>{"use strict";var ZN=E(),ja=Lr(),$N=H(),bmr=X(),QN=J(),wmr=gi(),KN=Ba(),Emr=H2(),Nmr=ka(),Amr=G(),Omr=wmr+1,rA=1e308;function Smr(r,e){var t,i;return ZN(r)||ZN(e)||ja(e)?NaN:ja(r)||r===0||e<Nmr||bmr(r)>Omr&&e<=0?r:e>KN?r>=0?0:Amr:e<Emr?(t=$N(10,-(e+KN)),i=r*rA*t,ja(i)?r:QN(i)/rA/t):(t=$N(10,-e),i=r*t,ja(i)?r:QN(i)/t)}eA.exports=Smr});var nA=s((y2e,iA)=>{"use strict";var Tmr=tA();iA.exports=Tmr});var sA=s((b2e,aA)=>{"use strict";function Imr(r,e){return r*e}aA.exports=Imr});var oA=s((w2e,uA)=>{"use strict";var _mr=sA();uA.exports=_mr});var fA=s((E2e,vA)=>{"use strict";function Lmr(r,e){return r-e}vA.exports=Lmr});var lA=s((N2e,cA)=>{"use strict";var Pmr=fA();cA.exports=Pmr});var gA=s((A2e,pA)=>{"use strict";var pn=nr(),Rmr=Iw(),Fmr=nA(),Mmr=oA(),Bmr=H(),kmr=lA();function jmr(r){return pn(r,"add",Rmr),pn(r,"floorn",Fmr),pn(r,"mul",Mmr),pn(r,"pow",Bmr),pn(r,"sub",kmr),r}pA.exports=jmr});var qA=s((O2e,hA)=>{"use strict";var mA=j().isPrimitive,Cmr=I(),Gmr=G(),dA=y();function Vmr(r,e){return t;function t(i,n){var a;if(!mA(i)){if(e.nonnumeric===void 0)throw new TypeError(dA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!mA(n)){if(e.nonnumeric===void 0)throw new TypeError(dA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===Cmr?e.pinf:a===Gmr?e.ninf:a}}hA.exports=Vmr});var W2=s((S2e,yA)=>{"use strict";var Umr=qA();yA.exports=Umr});var wA=s((T2e,bA)=>{"use strict";var Hmr=Su(),Wmr=Ou(),zmr=Ro(),Dmr=y(),Xmr=Lo(),Jmr=W2(),xmr=["number","number"],Ymr=["First argument","Second argument"];function Zmr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(Dmr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=Xmr([r[0],r[1]],xmr,Ymr),t=Hmr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=zmr(t),a=Jmr(e,i),r[0].push(n),r[1].push(t),Wmr(r[0],r[1],a),n}bA.exports=Zmr});var NA=s((I2e,EA)=>{"use strict";var $mr=wA();EA.exports=$mr});var OA=s((_2e,AA)=>{"use strict";var Qmr=j().isPrimitive,Kmr=I(),rdr=G(),edr=y();function tdr(r,e){return t;function t(i){var n;if(!Qmr(i)){if(e.nonnumeric===void 0)throw new TypeError(edr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===Kmr?e.pinf:n===rdr?e.ninf:n}}AA.exports=tdr});var z2=s((L2e,SA)=>{"use strict";var idr=OA();SA.exports=idr});var IA=s((P2e,TA)=>{"use strict";var D2=j().isPrimitive,ndr=I(),adr=G(),X2=y();function sdr(r,e){return t;function t(i,n,a){var u;if(!D2(i)){if(e.nonnumeric===void 0)throw new TypeError(X2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!D2(n)){if(e.nonnumeric===void 0)throw new TypeError(X2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!D2(a)){if(e.nonnumeric===void 0)throw new TypeError(X2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===ndr?e.pinf:u===adr?e.ninf:u}}TA.exports=sdr});var LA=s((R2e,_A)=>{"use strict";var udr=IA();_A.exports=udr});var RA=s((F2e,PA)=>{"use strict";var Ca=j().isPrimitive,odr=I(),vdr=G(),Ga=y();function fdr(r,e){return t;function t(i,n,a,u){var o;if(!Ca(i)){if(e.nonnumeric===void 0)throw new TypeError(Ga("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Ca(n)){if(e.nonnumeric===void 0)throw new TypeError(Ga("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Ca(a)){if(e.nonnumeric===void 0)throw new TypeError(Ga("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Ca(u)){if(e.nonnumeric===void 0)throw new TypeError(Ga("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===odr?e.pinf:o===vdr?e.ninf:o}}PA.exports=fdr});var MA=s((M2e,FA)=>{"use strict";var cdr=RA();FA.exports=cdr});var kA=s((B2e,BA)=>{"use strict";var gn=j().isPrimitive,ldr=I(),pdr=G(),mn=y();function gdr(r,e){return t;function t(i,n,a,u,o){var f;if(!gn(i)){if(e.nonnumeric===void 0)throw new TypeError(mn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!gn(n)){if(e.nonnumeric===void 0)throw new TypeError(mn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!gn(a)){if(e.nonnumeric===void 0)throw new TypeError(mn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!gn(u)){if(e.nonnumeric===void 0)throw new TypeError(mn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!gn(o)){if(e.nonnumeric===void 0)throw new TypeError(mn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,a,u,o),f!==f?e.nan:f===ldr?e.pinf:f===pdr?e.ninf:f}}BA.exports=gdr});var CA=s((k2e,jA)=>{"use strict";var mdr=kA();jA.exports=mdr});var VA=s((j2e,GA)=>{"use strict";var ddr=cr(),hdr=Po(),qdr=y(),ydr=z2();function bdr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(qdr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=ydr(e,i),ddr(t)?(hdr([t,t],[t.length,t[0].length],n),t):n(t)}GA.exports=bdr});var HA=s((C2e,UA)=>{"use strict";var wdr=VA();UA.exports=wdr});var zA=s((G2e,WA)=>{"use strict";var Ft=nr(),Edr=NA(),Ndr=z2(),Adr=W2(),Odr=LA(),Sdr=MA(),Tdr=CA(),Idr=HA();function _dr(r){return Ft(r,"binary",Edr),Ft(r,"d_d",Ndr),Ft(r,"dd_d",Adr),Ft(r,"ddd_d",Odr),Ft(r,"dddd_d",Sdr),Ft(r,"ddddd_d",Tdr),Ft(r,"unary",Idr),r}WA.exports=_dr});var XA=s((V2e,DA)=>{"use strict";function Ldr(r){return r*r}DA.exports=Ldr});var Va=s((U2e,JA)=>{"use strict";var Pdr=XA();JA.exports=Pdr});var Ua=s((H2e,xA)=>{"use strict";var Rdr=.7853981633974483;xA.exports=Rdr});var ZA=s((W2e,YA)=>{"use strict";function Fdr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}YA.exports=Fdr});var QA=s((z2e,$A)=>{"use strict";function Mdr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}$A.exports=Mdr});var eO=s((D2e,rO)=>{"use strict";var Bdr=E(),kdr=V(),KA=Ua(),jdr=ZA(),Cdr=QA(),Gdr=6123233995736766e-32;function Vdr(r){var e,t,i,n,a;if(Bdr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*Cdr(t),t=kdr(t+t),a=KA-t,t=t*n-Gdr,a-=t,a+=KA;else{if(i<1e-8)return r;t=i*i,a=t*jdr(t),a=i*a+i}return e?-a:a}rO.exports=Vdr});var Mt=s((X2e,tO)=>{"use strict";var Udr=eO();tO.exports=Udr});var sO=s((J2e,aO)=>{"use strict";var Hdr=E(),iO=Mt(),Wdr=V(),nO=Ua(),zdr=6123233995736766e-32;function Ddr(r){var e;return Hdr(r)?NaN:r<-1||r>1?NaN:r>.5?2*iO(Wdr(.5-.5*r)):(e=nO-iO(r),e+=zdr,e+=nO,e)}aO.exports=Ddr});var dn=s((x2e,uO)=>{"use strict";var Xdr=sO();uO.exports=Xdr});var vO=s((Y2e,oO)=>{"use strict";function Jdr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}oO.exports=Jdr});var gO=s((Z2e,pO)=>{"use strict";var xdr=E(),fO=er(),cO=ie(),Ydr=I(),Zdr=G(),lO=xr(),$dr=vO(),J2=.6931471803691238,x2=19082149292705877e-26,Qdr=.41421356237309503,Kdr=-.2928932188134525,rhr=1862645149230957e-24,ehr=5551115123125783e-32,thr=9007199254740992,ihr=.6666666666666666;function nhr(r){var e,t,i,n,a,u,o,f,v,c;if(r<-1||xdr(r))return NaN;if(r===-1)return Zdr;if(r===Ydr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<Qdr){if(i<rhr)return i<ehr?r:r-r*r*.5;r>Kdr&&(c=0,n=r,t=1)}return c!==0&&(i<thr?(v=1+r,t=fO(v),c=(t>>20)-lO,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=fO(v),c=(t>>20)-lO,a=0),t&=1048575,t<434334?v=cO(v,t|1072693248):(c+=1,v=cO(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*x2,c*J2+a):(f=e*(1-ihr*n),c*J2-(f-(c*x2+a)-n)):(u=n/(2+n),o=u*u,f=o*$dr(o),c===0?n-(e-u*(e+f)):c*J2-(e-(u*(e+f)+(c*x2+a))-n))}pO.exports=nhr});var Je=s(($2e,mO)=>{"use strict";var ahr=gO();mO.exports=ahr});var hO=s((Q2e,dO)=>{"use strict";function shr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}dO.exports=shr});var yO=s((K2e,qO)=>{"use strict";function uhr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}qO.exports=uhr});var NO=s((r1e,EO)=>{"use strict";var bO=er(),ohr=ie(),vhr=E(),fhr=xr(),chr=G(),lhr=hO(),phr=yO(),Ha=.6931471803691238,Wa=19082149292705877e-26,ghr=0x40000000000000,mhr=.3333333333333333,wO=1048575,dhr=2146435072,hhr=1048576,qhr=1072693248;function yhr(r){var e,t,i,n,a,u,o,f,v,c,l,p;return r===0?chr:vhr(r)||r<0?NaN:(t=bO(r),a=0,t<hhr&&(a-=54,r*=ghr,t=bO(r)),t>=dhr?r+r:(a+=(t>>20)-fhr|0,t&=wO,f=t+614244&1048576|0,r=ohr(r,t|f^qhr),a+=f>>20|0,o=r-1,(wO&2+t)<3?o===0?a===0?0:a*Ha+a*Wa:(u=o*o*(.5-mhr*o),a===0?o-u:a*Ha-(u-a*Wa-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*lhr(l),i=p*phr(l),f|=v,u=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*Ha-(e-(c*(e+u)+a*Wa)-o)):a===0?o-c*(o-u):a*Ha-(c*(o-u)-a*Wa-o))))}EO.exports=yhr});var R=s((e1e,AO)=>{"use strict";var bhr=NO();AO.exports=bhr});var IO=s((t1e,TO)=>{"use strict";var whr=E(),Ehr=Je(),OO=V(),Nhr=Fa(),SO=R(),Ahr=1<<28;function Ohr(r){var e;return whr(r)||r<1?NaN:r===1?0:r>=Ahr?SO(r)+Nhr:r>2?SO(2*r-1/(r+OO(r*r-1))):(e=r-1,Ehr(e+OO(2*e+e*e)))}TO.exports=Ohr});var LO=s((i1e,_O)=>{"use strict";var Shr=IO();_O.exports=Shr});var za=s((n1e,PO)=>{"use strict";var Thr=1.5707963267948966;PO.exports=Thr});var FO=s((a1e,RO)=>{"use strict";function Ihr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}RO.exports=Ihr});var BO=s((s1e,MO)=>{"use strict";function _hr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}MO.exports=_hr});var CO=s((u1e,jO)=>{"use strict";var Lhr=E(),Phr=I(),Y2=za(),Rhr=Ua(),Fhr=G(),Mhr=FO(),Bhr=BO(),kO=6123233995736766e-32,khr=2.414213562373095;function jhr(r){var e,t,i,n;return Lhr(r)||r===0?r:r===Phr?Y2:r===Fhr?-Y2:(r<0&&(t=!0,r=-r),e=0,r>khr?(i=Y2,e=1,r=-(1/r)):r<=.66?i=0:(i=Rhr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*Mhr(n)/Bhr(n),n=r*n+r,e===2?n+=.5*kO:e===1&&(n+=kO),i+=n,t?-i:i)}jO.exports=jhr});var Da=s((o1e,GO)=>{"use strict";var Chr=CO();GO.exports=Chr});var UO=s((v1e,VO)=>{"use strict";var Ghr=Da();function Vhr(r){return Ghr(1/r)}VO.exports=Vhr});var WO=s((f1e,HO)=>{"use strict";var Uhr=UO();HO.exports=Uhr});var DO=s((c1e,zO)=>{"use strict";var Hhr=Mt();function Whr(r){return Hhr(1+r)}zO.exports=Whr});var JO=s((l1e,XO)=>{"use strict";var zhr=DO();XO.exports=zhr});var YO=s((p1e,xO)=>{"use strict";var Dhr=Mt();function Xhr(r){return Dhr(1-r)}xO.exports=Xhr});var $O=s((g1e,ZO)=>{"use strict";var Jhr=YO();ZO.exports=Jhr});var KO=s((m1e,QO)=>{"use strict";var xhr=Mt();function Yhr(r){return xhr(1/r)}QO.exports=Yhr});var eS=s((d1e,rS)=>{"use strict";var Zhr=KO();rS.exports=Zhr});var aS=s((h1e,nS)=>{"use strict";var $hr=Lr(),Qhr=E(),Khr=Je(),tS=V(),rqr=Fa(),iS=R(),eqr=1/(1<<28),tqr=1<<28;function iqr(r){var e,t,i;return Qhr(r)||$hr(r)?r:(r<0&&(r=-r,e=!0),r<eqr?i=r:r>tqr?i=iS(r)+rqr:r>2?i=iS(2*r+1/(tS(r*r+1)+r)):(t=r*r,i=Khr(r+t/(1+tS(1+t)))),e?-i:i)}nS.exports=iqr});var Z2=s((q1e,sS)=>{"use strict";var nqr=aS();sS.exports=nqr});var oS=s((y1e,uS)=>{"use strict";var aqr=Z2();function sqr(r){return aqr(1/r)}uS.exports=sqr});var fS=s((b1e,vS)=>{"use strict";var uqr=oS();vS.exports=uqr});var lS=s((w1e,cS)=>{"use strict";var oqr=dn(),vqr=V();function fqr(r){return 2*oqr(vqr(r))}cS.exports=fqr});var gS=s((E1e,pS)=>{"use strict";var cqr=lS();pS.exports=cqr});var dS=s((N1e,mS)=>{"use strict";var lqr=Mt(),pqr=V();function gqr(r){return 2*lqr(pqr(r))}mS.exports=gqr});var qS=s((A1e,hS)=>{"use strict";var mqr=dS();hS.exports=mqr});var wS=s((O1e,bS)=>{"use strict";var dqr=E(),yS=Je(),hqr=I(),qqr=G(),yqr=1/(1<<28);function bqr(r){var e,t;return dqr(r)||r<-1||r>1?NaN:r===1?hqr:r===-1?qqr:(r<0&&(e=!0,r=-r),r<yqr?e?-r:r:(r<.5?(t=r+r,t=.5*yS(t+t*r/(1-r))):t=.5*yS((r+r)/(1-r)),e?-t:t))}bS.exports=bqr});var NS=s((S1e,ES)=>{"use strict";var wqr=wS();ES.exports=wqr});var OS=s((T1e,AS)=>{"use strict";var Eqr=dn();function Nqr(r){return Eqr(1+r)}AS.exports=Nqr});var TS=s((I1e,SS)=>{"use strict";var Aqr=OS();SS.exports=Aqr});var _S=s((_1e,IS)=>{"use strict";var Oqr=dn();function Sqr(r){return Oqr(1-r)}IS.exports=Sqr});var PS=s((L1e,LS)=>{"use strict";var Tqr=_S();LS.exports=Tqr});var FS=s((P1e,RS)=>{"use strict";var Iqr=J();function _qr(r){return Iqr(r)===r&&r>=0}RS.exports=_qr});var $2=s((R1e,MS)=>{"use strict";var Lqr=FS();MS.exports=Lqr});var BS=s((F1e,Pqr)=>{Pqr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var jS=s((M1e,kS)=>{"use strict";var Rqr=$2(),Fqr=E(),Mqr=Sa(),Bqr=G(),kqr=I(),jqr=BS(),Cqr=258;function Gqr(r){return Fqr(r)||!Rqr(r)?NaN:Mqr(r)?0:r>Cqr?r/2&1?kqr:Bqr:jqr[r/2]}kS.exports=Gqr});var GS=s((B1e,CS)=>{"use strict";var Vqr=jS();CS.exports=Vqr});var US=s((k1e,VS)=>{"use strict";var Uqr=Rt(),Q2;Uqr===!0?Q2=0:Q2=1;VS.exports=Q2});var zS=s((j1e,WS)=>{"use strict";var Hqr=lr(),Wqr=gr(),zqr=US(),HS=new Wqr(1),Dqr=new Hqr(HS.buffer);function Xqr(r){return HS[0]=r,Dqr[zqr]}WS.exports=Xqr});var XS=s((C1e,DS)=>{"use strict";var Jqr=zS();DS.exports=Jqr});var $S=s((G1e,ZS)=>{"use strict";var xqr=J(),Xa=Ra(),Ya=Au(),xS=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Yqr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],K2=16777216,r1=5960464477539063e-23,Ja=Ya(20),JS=Ya(20),xa=Ya(20),or=Ya(20);function YS(r,e,t,i,n,a,u,o,f){var v,c,l,p,m,h,d,g,q;for(p=a,q=i[t],g=t,m=0;g>0;m++)c=r1*q|0,or[m]=q-K2*c|0,q=i[g-1]+c,g-=1;if(q=Xa(q,n),q-=8*xqr(q*.125),d=q|0,q-=d,l=0,n>0?(m=or[t-1]>>24-n,d+=m,or[t-1]-=m<<24-n,l=or[t-1]>>23-n):n===0?l=or[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,v=0,m=0;m<t;m++)g=or[m],v===0?g!==0&&(v=1,or[m]=16777216-g):or[m]=16777215-g;if(n>0)switch(n){case 1:or[t-1]&=8388607;break;case 2:or[t-1]&=4194303;break}l===2&&(q=1-q,v!==0&&(q-=Xa(1,n)))}if(q===0){for(g=0,m=t-1;m>=a;m--)g|=or[m];if(g===0){for(h=1;or[a-h]===0;h++);for(m=t+1;m<=t+h;m++){for(f[o+m]=xS[u+m],c=0,g=0;g<=o;g++)c+=r[g]*f[o+(m-g)];i[m]=c}return t+=h,YS(r,e,t,i,n,a,u,o,f)}}if(q===0)for(t-=1,n-=24;or[t]===0;)t-=1,n-=24;else q=Xa(q,-n),q>=K2?(c=r1*q|0,or[t]=q-K2*c|0,t+=1,n+=24,or[t]=c):or[t]=q|0;for(c=Xa(1,n),m=t;m>=0;m--)i[m]=c*or[m],c*=r1;for(m=t;m>=0;m--){for(c=0,h=0;h<=p&&h<=t-m;h++)c+=Yqr[h]*i[m+h];xa[t-m]=c}for(c=0,m=t;m>=0;m--)c+=xa[m];for(l===0?e[0]=c:e[0]=-c,c=xa[0]-c,m=1;m<=t;m++)c+=xa[m];return l===0?e[1]=c:e[1]=-c,d&7}function Zqr(r,e,t,i){var n,a,u,o,f,v,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?Ja[c]=0:Ja[c]=xS[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*Ja[o+(c-l)];JS[c]=n}return f=a,YS(r,e,f,JS,v,a,u,o,Ja)}ZS.exports=Zqr});var KS=s((V1e,QS)=>{"use strict";var $qr=Math.round;QS.exports=$qr});var e1=s((U1e,rT)=>{"use strict";var Qqr=KS();rT.exports=Qqr});var nT=s((H1e,iT)=>{"use strict";var Kqr=e1(),eT=er(),ryr=.6366197723675814,eyr=1.5707963267341256,tyr=6077100506506192e-26,iyr=6077100506303966e-26,nyr=20222662487959506e-37,ayr=20222662487111665e-37,syr=84784276603689e-45,tT=2047;function uyr(r,e,t){var i,n,a,u,o,f,v;return n=Kqr(r*ryr),u=r-n*eyr,o=n*tyr,v=e>>20|0,t[0]=u-o,i=eT(t[0]),f=v-(i>>20&tT),f>16&&(a=u,o=n*iyr,u=a-o,o=n*nyr-(a-u-o),t[0]=u-o,i=eT(t[0]),f=v-(i>>20&tT),f>49&&(a=u,o=n*ayr,u=a-o,o=n*syr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}iT.exports=uyr});var sT=s((W1e,aT)=>{"use strict";var oyr=Jr(),vyr=cn(),fyr=Ma(),cyr=er(),lyr=XS(),pyr=pi(),gyr=$S(),Za=nT(),myr=0,dyr=16777216,xe=1.5707963267341256,Bt=6077100506506192e-26,$a=2*Bt,Qa=3*Bt,Ka=4*Bt,hyr=598523,qyr=1072243195,yyr=1073928572,byr=1074752122,wyr=1074977148,Eyr=1075183036,Nyr=1075388923,Ayr=1075594811,Oyr=1094263291,hn=[0,0,0],qn=[0,0];function Syr(r,e){var t,i,n,a,u,o,f,v;if(n=cyr(r),a=n&oyr|0,a<=qyr)return e[0]=r,e[1]=0,0;if(a<=byr)return(a&fyr)===hyr?Za(r,a,e):a<=yyr?r>0?(v=r-xe,e[0]=v-Bt,e[1]=v-e[0]-Bt,1):(v=r+xe,e[0]=v+Bt,e[1]=v-e[0]+Bt,-1):r>0?(v=r-2*xe,e[0]=v-$a,e[1]=v-e[0]-$a,2):(v=r+2*xe,e[0]=v+$a,e[1]=v-e[0]+$a,-2);if(a<=Ayr)return a<=Eyr?a===wyr?Za(r,a,e):r>0?(v=r-3*xe,e[0]=v-Qa,e[1]=v-e[0]-Qa,3):(v=r+3*xe,e[0]=v+Qa,e[1]=v-e[0]+Qa,-3):a===Nyr?Za(r,a,e):r>0?(v=r-4*xe,e[0]=v-Ka,e[1]=v-e[0]-Ka,4):(v=r+4*xe,e[0]=v+Ka,e[1]=v-e[0]+Ka,-4);if(a<Oyr)return Za(r,a,e);if(a>=vyr)return e[0]=NaN,e[1]=NaN,0;for(t=lyr(r),i=(a>>20)-1046,v=pyr(a-(i<<20|0),t),o=0;o<2;o++)hn[o]=v|0,v=(v-hn[o])*dyr;for(hn[2]=v,u=3;hn[u-1]===myr;)u-=1;return f=gyr(hn,qn,i,u,1),r<0?(e[0]=-qn[0],e[1]=-qn[1],-f):(e[0]=qn[0],e[1]=qn[1],f)}aT.exports=Syr});var yn=s((z1e,uT)=>{"use strict";var Tyr=sT();uT.exports=Tyr});var fT=s((D1e,vT)=>{"use strict";var oT=-.16666666666666632,Iyr=.00833333333332249,_yr=-.0001984126982985795,Lyr=27557313707070068e-22,Pyr=-25050760253406863e-24,Ryr=158969099521155e-24,Fyr=.0416666666666666,Myr=-.001388888888887411,Byr=2480158728947673e-20,kyr=-27557314351390663e-23,jyr=2087572321298175e-24,Cyr=-11359647557788195e-27;function Gyr(r,e,t,i,n){var a,u,o,f,v;return v=r*r,f=v*v,u=Iyr+v*(_yr+v*Lyr)+v*f*(Pyr+v*Ryr),o=v*r,e===0?t[n]=r+o*(oT+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*oT),u=v*(Fyr+v*(Myr+v*Byr)),u+=f*f*(kyr+v*(jyr+v*Cyr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*u-r*e)),t}vT.exports=Gyr});var i1=s((X1e,lT)=>{"use strict";var Vyr=Jr(),Uyr=cn(),Hyr=er(),Wyr=yn(),cT=fT(),zyr=1072243195,Dyr=1044381696,t1=[0,0];function Xyr(r,e,t,i){var n,a;if(n=Hyr(r),n&=Vyr,n<=zyr)return n<Dyr&&(r|0)===0&&(e[i]=r,e[i+t]=0),cT(r,0,e,t,i);if(n>=Uyr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=Wyr(r,t1),cT(t1[0],t1[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}lT.exports=Xyr});var gT=s((J1e,pT)=>{"use strict";var Jyr=i1();function xyr(r){return Jyr(r,[0,0],1,0)}pT.exports=xyr});var bn=s((x1e,dT)=>{"use strict";var Yyr=w(),mT=gT(),Zyr=i1();Yyr(mT,"assign",Zyr);dT.exports=mT});var qT=s((Y1e,hT)=>{"use strict";function $yr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}hT.exports=$yr});var bT=s((Z1e,yT)=>{"use strict";function Qyr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}yT.exports=Qyr});var ET=s(($1e,wT)=>{"use strict";function Kyr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}wT.exports=Kyr});var AT=s((Q1e,NT)=>{"use strict";function rbr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}NT.exports=rbr});var ST=s((K1e,OT)=>{"use strict";var ebr=V(),tbr=bn().assign,ibr=I(),nbr=qT(),abr=bT(),sbr=ET(),ubr=AT(),obr=.5641895835477563,vbr=2.404825557695773,fbr=5.520078110286311,cbr=616,lbr=-.0014244423042272315,pbr=1413,gbr=.0005468602863106496,wn=[0,0];function mbr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===ibr?0:r===0?1:r<=4?(a=r*r,n=nbr(a),u=(r+vbr)*(r-cbr/256-lbr),u*n):r<=8?(a=1-r*r/64,n=abr(a),u=(r+fbr)*(r-pbr/256-gbr),u*n):(a=8/r,i=a*a,e=sbr(i),t=ubr(i),u=obr/ebr(r),tbr(r,wn,1,0),u*(e*(wn[1]+wn[0])-a*t*(wn[0]-wn[1])))}OT.exports=mbr});var n1=s((r3e,TT)=>{"use strict";var dbr=ST();TT.exports=dbr});var r0=s((e3e,IT)=>{"use strict";var hbr=1.772453850905516;IT.exports=hbr});var LT=s((t3e,_T)=>{"use strict";function qbr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}_T.exports=qbr});var RT=s((i3e,PT)=>{"use strict";function ybr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}PT.exports=ybr});var MT=s((n3e,FT)=>{"use strict";function bbr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}FT.exports=bbr});var kT=s((a3e,BT)=>{"use strict";function wbr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}BT.exports=wbr});var CT=s((s3e,jT)=>{"use strict";var Ebr=V(),Nbr=X(),Abr=bn().assign,Obr=I(),Sbr=r0(),Tbr=LT(),Ibr=RT(),_br=MT(),Lbr=kT(),Pbr=3.8317059702075125,Rbr=7.015586669815619,Fbr=981,Mbr=-.0003252797924876844,Bbr=1796,kbr=-38330184381246464e-21,En=[0,0];function jbr(r){var e,t,i,n,a,u,o,f;return f=Nbr(r),r===0||f===Obr?0:(f<=4?(u=r*r,a=Tbr(u),o=f*(f+Pbr)*(f-Fbr/256-Mbr),e=o*a):f<=8?(u=r*r,a=Ibr(u),o=f*(f+Rbr)*(f-Bbr/256-kbr),e=o*a):(u=8/f,n=u*u,t=_br(n),i=Lbr(n),o=1/(Ebr(f)*Sbr),Abr(f,En,1,0),e=o*(t*(En[0]-En[1])+u*i*(En[0]+En[1]))),r<0&&(e*=-1),e)}jT.exports=jbr});var a1=s((u3e,GT)=>{"use strict";var Cbr=CT();GT.exports=Cbr});var Pr=s((o3e,VT)=>{"use strict";var Gbr=3.141592653589793;VT.exports=Gbr});var HT=s((v3e,UT)=>{"use strict";function Vbr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}UT.exports=Vbr});var zT=s((f3e,WT)=>{"use strict";function Ubr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}WT.exports=Ubr});var XT=s((c3e,DT)=>{"use strict";function Hbr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}DT.exports=Hbr});var xT=s((l3e,JT)=>{"use strict";function Wbr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}JT.exports=Wbr});var ZT=s((p3e,YT)=>{"use strict";function zbr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}YT.exports=zbr});var eI=s((g3e,rI)=>{"use strict";var s1=R(),Dbr=V(),Xbr=Pr(),Jbr=r0(),xbr=G(),Ybr=I(),Zbr=bn().assign,u1=n1(),$br=HT(),Qbr=zT(),Kbr=XT(),rwr=xT(),ewr=ZT(),twr=1/Jbr,o1=2/Xbr,$T=.8935769662791675,QT=3.957678419314858,KT=7.086051060301773,iwr=228,nwr=.0029519662791675214,awr=1013,swr=.0006471693148578684,uwr=1814,owr=.00011356030177269763,Nn=[0,0];function vwr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?xbr:r===Ybr?0:r<=3?(a=r*r,u=s1(r/$T)*u1(r)*o1,n=$br(a),o=(r+$T)*(r-iwr/256-nwr),u+o*n):r<=5.5?(a=r*r,u=s1(r/QT)*u1(r)*o1,n=Qbr(a),o=(r+QT)*(r-awr/256-swr),u+o*n):r<=8?(a=r*r,u=s1(r/KT)*u1(r)*o1,n=Kbr(a),o=(r+KT)*(r-uwr/256-owr),u+o*n):(a=8/r,i=a*a,e=rwr(i),t=ewr(i),o=twr/Dbr(r),Zbr(r,Nn,1,0),o*(e*(Nn[0]-Nn[1])+a*t*(Nn[1]+Nn[0])))}rI.exports=vwr});var iI=s((m3e,tI)=>{"use strict";var fwr=eI();tI.exports=fwr});var aI=s((d3e,nI)=>{"use strict";function cwr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}nI.exports=cwr});var uI=s((h3e,sI)=>{"use strict";function lwr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}sI.exports=lwr});var vI=s((q3e,oI)=>{"use strict";function pwr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}oI.exports=pwr});var cI=s((y3e,fI)=>{"use strict";function gwr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}fI.exports=gwr});var qI=s((b3e,hI)=>{"use strict";var lI=R(),mwr=V(),dwr=Pr(),hwr=r0(),qwr=G(),ywr=I(),bwr=bn().assign,pI=a1(),wwr=aI(),Ewr=uI(),Nwr=vI(),Awr=cI(),Owr=1/hwr,gI=2/dwr,mI=2.197141326031017,dI=5.429681040794135,Swr=562,Twr=.001828826031017035,Iwr=1390,_wr=-6459205864867228e-21,An=[0,0];function Lwr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?qwr:r===ywr?0:r<=4?(a=r*r,u=lI(r/mI)*pI(r)*gI,n=wwr(a),o=(r+mI)*(r-Swr/256-Twr)/r,u+o*n):r<=8?(a=r*r,u=lI(r/dI)*pI(r)*gI,n=Ewr(a),o=(r+dI)*(r-Iwr/256-_wr)/r,u+o*n):(a=8/r,i=a*a,e=Nwr(i),t=Awr(i),o=Owr/mwr(r),bwr(r,An,1,0),o*(a*t*(An[0]-An[1])-e*(An[0]+An[1])))}hI.exports=Lwr});var bI=s((w3e,yI)=>{"use strict";var Pwr=qI();yI.exports=Pwr});var EI=s((E3e,wI)=>{"use strict";function Rwr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}wI.exports=Rwr});var AI=s((N3e,NI)=>{"use strict";function Fwr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}NI.exports=Fwr});var SI=s((A3e,OI)=>{"use strict";var Mwr=EI(),Bwr=AI();function kwr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*Mwr(a),i+=n*n*Bwr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}OI.exports=kwr});var v1=s((O3e,TI)=>{"use strict";var jwr=SI();TI.exports=jwr});var LI=s((S3e,_I)=>{"use strict";var II=-.16666666666666632,Cwr=.00833333333332249,Gwr=-.0001984126982985795,Vwr=27557313707070068e-22,Uwr=-25050760253406863e-24,Hwr=158969099521155e-24;function Wwr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Cwr+a*(Gwr+a*Vwr)+a*n*(Uwr+a*Hwr),i=a*r,e===0?r+i*(II+a*t):r-(a*(.5*e-i*t)-e-i*II)}_I.exports=Wwr});var f1=s((T3e,PI)=>{"use strict";var zwr=LI();PI.exports=zwr});var MI=s((I3e,FI)=>{"use strict";var Dwr=er(),c1=v1(),RI=f1(),Xwr=yn(),ae=[0,0],Jwr=2147483647,xwr=1072243195,Ywr=1044381696,Zwr=2146435072;function $wr(r){var e,t;if(e=Dwr(r),e&=Jwr,e<=xwr)return e<Ywr?1:c1(r,0);if(e>=Zwr)return NaN;switch(t=Xwr(r,ae),t&3){case 0:return c1(ae[0],ae[1]);case 1:return-RI(ae[0],ae[1]);case 2:return-c1(ae[0],ae[1]);default:return RI(ae[0],ae[1])}}FI.exports=$wr});var kt=s((_3e,BI)=>{"use strict";var Qwr=MI();BI.exports=Qwr});var CI=s((L3e,jI)=>{"use strict";var Kwr=Jr(),rEr=cn(),eEr=er(),kI=v1(),l1=f1(),tEr=yn(),iEr=1072243195,nEr=1045430272,se=[0,0];function aEr(r){var e,t;if(e=eEr(r),e&=Kwr,e<=iEr)return e<nEr?r:l1(r,0);if(e>=rEr)return NaN;switch(t=tEr(r,se),t&3){case 0:return l1(se[0],se[1]);case 1:return kI(se[0],se[1]);case 2:return-l1(se[0],se[1]);default:return-kI(se[0],se[1])}}jI.exports=aEr});var jt=s((P3e,GI)=>{"use strict";var sEr=CI();GI.exports=sEr});var HI=s((R3e,UI)=>{"use strict";var uEr=E(),oEr=Lr(),vEr=X(),VI=kt(),fEr=jt(),cEr=J(),p1=Pr(),lEr=gi(),pEr=lEr+1;function gEr(r){var e,t,i,n;return uEr(r)?NaN:oEr(r)?NaN:(e=vEr(r),e>pEr?1:(t=cEr(e),i=e-t,i===.5?0:(i<.25?n=VI(p1*i):i<.75?(i=.5-i,n=fEr(p1*i)):(i=1-i,n=-VI(p1*i)),t%2===1?-n:n)))}UI.exports=gEr});var zI=s((F3e,WI)=>{"use strict";var mEr=HI();WI.exports=mEr});var XI=s((M3e,DI)=>{"use strict";var dEr=1.618033988749895;DI.exports=dEr});var xI=s((B3e,JI)=>{"use strict";var hEr=E(),qEr=zI(),yEr=H(),bEr=XI(),wEr=I(),EEr=G(),NEr=2.23606797749979;function AEr(r){var e,t;return hEr(r)||r===wEr||r===EEr?NaN:(e=yEr(bEr,r),t=qEr(r)/e,(e-t)/NEr)}JI.exports=AEr});var ZI=s((k3e,YI)=>{"use strict";var OEr=xI();YI.exports=OEr});var QI=s((j3e,$I)=>{"use strict";function SEr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}$I.exports=SEr});var t_=s((C3e,e_)=>{"use strict";var TEr=k2(),IEr=T2(),KI=Jr(),m1=er(),_Er=ie(),LEr=Lr(),r_=pi(),PEr=li(),REr=E(),FEr=QI(),MEr=4294967295>>>0,BEr=3221225472>>>0,kEr=0x40000000000000,g1=2147483648>>>0,jEr=1>>>0,CEr=715094163>>>0,GEr=696219795>>>0,VEr=m1(TEr),Ct=[0>>>0,0>>>0];function UEr(r){var e,t,i,n,a,u,o;return r===0||REr(r)||LEr(r)?r:(t=m1(r)>>>0,e=(t&IEr)>>>0,t&=KI,t<VEr?(u=kEr*r,i=(m1(u)&KI)>>>0,i=(i/3>>>0)+GEr>>>0,u=r_(e|i,0)):(u=0,i=(t/3>>>0)+CEr>>>0,u=_Er(u,e|i)),n=u*u*(u/r),u*=FEr(n),PEr.assign(u,Ct,1,0),Ct[1]&g1?(Ct[0]+=jEr,Ct[1]&=~g1):Ct[1]|=g1,u=r_(Ct[0]&MEr,Ct[1]&BEr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}e_.exports=UEr});var n_=s((G3e,i_)=>{"use strict";var HEr=t_();i_.exports=HEr});var s_=s((V3e,a_)=>{"use strict";var WEr=Math.ceil;a_.exports=WEr});var On=s((U3e,u_)=>{"use strict";var zEr=s_();u_.exports=zEr});var v_=s((H3e,o_)=>{"use strict";function DEr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}o_.exports=DEr});var c_=s((W3e,f_)=>{"use strict";function XEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}f_.exports=XEr});var g_=s((z3e,p_)=>{"use strict";var JEr=er(),xEr=v_(),YEr=c_(),l_=1048575,ZEr=.3333333333333333;function $Er(r){var e,t,i,n,a,u,o,f,v,c,l;return n=JEr(r),a=r-1,(l_&2+n)<3?a===0?0:a*a*(ZEr*a-.5):(u=a/(2+a),o=u*u,n&=l_,c=n-398458|0,v=o*o,l=440401-n|0,t=v*xEr(v),i=o*YEr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}p_.exports=$Er});var q_=s((D3e,h_)=>{"use strict";var m_=er(),QEr=ie(),KEr=te(),rNr=E(),eNr=xr(),tNr=G(),iNr=g_(),nNr=0x40000000000000,d_=.4342944818781689,aNr=25082946711645275e-27,sNr=.30102999566361177,uNr=3694239077158931e-28,oNr=1048575,vNr=2146435072,fNr=1048576,cNr=1072693248;function lNr(r){var e,t,i,n,a,u,o,f;return rNr(r)||r<0?NaN:r===0?tNr:(t=m_(r),u=0,t<fNr&&(u-=54,r*=nNr,t=m_(r)),t>=vNr?r+r:(u+=(t>>20)-eNr|0,t&=oNr,a=t+614244&1048576|0,r=QEr(r,t|a^cNr),u+=a>>20|0,o=u,n=iNr(r),r-=1,e=KEr(r,0),i=r-e,f=o*uNr+(r+n)*aNr,f+=(i+n)*d_+e*d_,f+o*sNr))}h_.exports=lNr});var b_=s((X3e,y_)=>{"use strict";var pNr=q_();y_.exports=pNr});var E_=s((J3e,w_)=>{"use strict";var gNr=E(),mNr=Lr(),dNr=H(),hNr=J(),qNr=On(),yNr=b_(),bNr=Ba(),wNr=ka(),ENr=I();function NNr(r){var e,t;return gNr(r)||mNr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=yNr(r),e===-1?t=hNr(t):t=qNr(t),t<=wNr?e*0:t>bNr?ENr:e*dNr(10,t))}w_.exports=NNr});var A_=s((x3e,N_)=>{"use strict";var ANr=E_();N_.exports=ANr});var S_=s((Y3e,O_)=>{"use strict";function ONr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}O_.exports=ONr});var I_=s((Z3e,T_)=>{"use strict";function SNr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}T_.exports=SNr});var P_=s(($3e,L_)=>{"use strict";var TNr=er(),INr=S_(),_Nr=I_(),__=1048575,LNr=.3333333333333333;function PNr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=TNr(r),a=r-1,(__&2+n)<3?a===0?0:a*a*(LNr*a-.5):(u=a/(2+a),o=u*u,n&=__,c=n-398458|0,v=o*o,l=440401-n|0,t=v*INr(v),i=o*_Nr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}L_.exports=PNr});var M_=s((Q3e,F_)=>{"use strict";var RNr=er(),FNr=ie(),MNr=te(),BNr=li(),kNr=E(),jNr=Jr(),CNr=Ma(),GNr=xr(),VNr=G(),UNr=P_(),HNr=0x40000000000000,R_=1.4426950407214463,WNr=16751713164886512e-26,zNr=2146435072,DNr=1048576,XNr=1072693248,d1=[0,0];function JNr(r){var e,t,i,n,a,u,o;if(kNr(r)||r<0)return NaN;if(BNr.assign(r,d1,1,0),i=d1[0],n=d1[1],o=0,i<DNr){if((i&jNr|n)===0)return VNr;o-=54,r*=HNr,i=RNr(r)}return i>=zNr?r+r:(o+=(i>>20)-GNr|0,i&=CNr,u=i+614244&1048576|0,r=FNr(r,i|u^XNr),o+=u>>20|0,a=UNr(r),r-=1,e=MNr(r,0),t=r-e,(r+a)*WNr+(t+a)*R_+e*R_+o)}F_.exports=JNr});var k_=s((K3e,B_)=>{"use strict";var xNr=M_();B_.exports=xNr});var C_=s((r6e,j_)=>{"use strict";var YNr=E(),ZNr=Lr(),$Nr=H(),QNr=J(),KNr=On(),rAr=k_(),eAr=M2(),tAr=B2(),iAr=I();function nAr(r){var e,t;return YNr(r)||ZNr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=rAr(r),t===tAr)?r:(e===-1?t=QNr(t):t=KNr(t),t>eAr?iAr:e*$Nr(2,t))}j_.exports=nAr});var V_=s((e6e,G_)=>{"use strict";var aAr=C_();G_.exports=aAr});var H_=s((t6e,U_)=>{"use strict";var sAr=J(),uAr=On();function oAr(r){return r<0?uAr(r):sAr(r)}U_.exports=oAr});var e0=s((i6e,W_)=>{"use strict";var vAr=H_();W_.exports=vAr});var D_=s((n6e,z_)=>{"use strict";function fAr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}z_.exports=fAr});var J_=s((a6e,X_)=>{"use strict";var cAr=Ra(),lAr=D_();function pAr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*lAr(n),u=1-(e-i*a/(2-a)-r),cAr(u,t)}X_.exports=pAr});var K_=s((s6e,Q_)=>{"use strict";var gAr=E(),x_=e0(),mAr=G(),Y_=I(),dAr=J_(),hAr=.6931471803691238,qAr=19082149292705877e-26,Z_=1.4426950408889634,yAr=709.782712893384,bAr=-745.1332191019411,$_=1/(1<<28),wAr=-$_;function EAr(r){var e,t,i;return gAr(r)||r===Y_?r:r===mAr?0:r>yAr?Y_:r<bAr?0:r>wAr&&r<$_?1+r:(r<0?i=x_(Z_*r-.5):i=x_(Z_*r+.5),e=r-i*hAr,t=i*qAr,dAr(e,t,i))}Q_.exports=EAr});var ir=s((u6e,rL)=>{"use strict";var NAr=K_();rL.exports=NAr});var tL=s((o6e,eL)=>{"use strict";var AAr=G();function OAr(r){return r===0&&1/r===AAr}eL.exports=OAr});var h1=s((v6e,iL)=>{"use strict";var SAr=tL();iL.exports=SAr});var q1=s((f6e,nL)=>{"use strict";var TAr=2.5066282746310007;nL.exports=TAr});var sL=s((c6e,aL)=>{"use strict";function IAr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}aL.exports=IAr});var vL=s((l6e,oL)=>{"use strict";var _Ar=q1(),uL=H(),LAr=ir(),PAr=sL(),RAr=143.01608;function FAr(r){var e,t,i;return e=1/r,e=1+e*PAr(e),t=LAr(r),r>RAr?(i=uL(r,.5*r-.25),t=i*(i/t)):t=uL(r,r-.5)/t,_Ar*t*e}oL.exports=FAr});var cL=s((p6e,fL)=>{"use strict";var MAr=.5772156649015329;fL.exports=MAr});var pL=s((g6e,lL)=>{"use strict";var BAr=cL();function kAr(r,e){return e/((1+BAr*r)*r)}lL.exports=kAr});var mL=s((m6e,gL)=>{"use strict";function jAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}gL.exports=jAr});var NL=s((d6e,EL)=>{"use strict";var CAr=E(),GAr=Tr(),VAr=h1(),dL=X(),UAr=J(),HAr=jt(),hL=I(),qL=G(),yL=Pr(),bL=vL(),wL=pL(),WAr=mL();function zAr(r){var e,t,i,n;if(GAr(r)&&r<0||r===qL||CAr(r))return NaN;if(r===0)return VAr(r)?qL:hL;if(r>171.61447887182297)return hL;if(r<-170.5674972726612)return 0;if(t=dL(r),t>33)return r>=0?bL(r):(i=UAr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*HAr(yL*n),e*yL/(dL(n)*bL(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return wL(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return wL(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*WAr(r))}EL.exports=zAr});var mi=s((h6e,AL)=>{"use strict";var DAr=NL();AL.exports=DAr});var TL=s((q6e,SL)=>{"use strict";var XAr=E(),JAr=Lr(),OL=kt(),y1=jt(),xAr=X(),Sn=Ta(),Tn=Pr();function YAr(r){var e,t;return XAr(r)?NaN:JAr(r)?NaN:(t=r%2,e=xAr(t),e===0||e===1?Sn(0,t):e<.25?y1(Tn*t):e<.75?(e=.5-e,Sn(OL(Tn*e),t)):e<1.25?(t=Sn(1,t)-t,y1(Tn*t)):e<1.75?(e-=1.5,-Sn(OL(Tn*e),t)):(t-=Sn(2,t),y1(Tn*t)))}SL.exports=YAr});var In=s((y6e,IL)=>{"use strict";var ZAr=TL();IL.exports=ZAr});var LL=s((b6e,_L)=>{"use strict";function $Ar(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}_L.exports=$Ar});var RL=s((w6e,PL)=>{"use strict";function QAr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}PL.exports=QAr});var ML=s((E6e,FL)=>{"use strict";function KAr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}FL.exports=KAr});var kL=s((N6e,BL)=>{"use strict";function rOr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}BL.exports=rOr});var CL=s((A6e,jL)=>{"use strict";function eOr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}jL.exports=eOr});var VL=s((O6e,GL)=>{"use strict";function tOr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}GL.exports=tOr});var HL=s((S6e,UL)=>{"use strict";function iOr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}UL.exports=iOr});var zL=s((T6e,WL)=>{"use strict";function nOr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}WL.exports=nOr});var XL=s((I6e,DL)=>{"use strict";function aOr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}DL.exports=aOr});var xL=s((_6e,JL)=>{"use strict";function sOr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}JL.exports=sOr});var $L=s((L6e,ZL)=>{"use strict";var uOr=E(),oOr=Lr(),vOr=X(),di=R(),fOr=e0(),cOr=In(),lOr=Pr(),b1=I(),pOr=LL(),gOr=RL(),mOr=ML(),dOr=kL(),hOr=CL(),qOr=VL(),yOr=HL(),bOr=zL(),wOr=XL(),EOr=xL(),NOr=.07721566490153287,AOr=.3224670334241136,OOr=1,SOr=-.07721566490153287,TOr=.48383612272381005,IOr=-.1475877229945939,_Or=.06462494023913339,LOr=-.07721566490153287,POr=1,ROr=.4189385332046727,t0=1.4616321449683622,FOr=4503599627370496,MOr=0x400000000000000,BOr=8470329472543003e-37,YL=1.4616321449683622,kOr=-.12148629053584961,jOr=-3638676997039505e-33;function COr(r){var e,t,i,n,a,u,o,f,v,c,l,p,m;if(uOr(r)||oOr(r))return r;if(r===0)return b1;if(r<0?(e=!0,r=-r):e=!1,r<BOr)return-di(r);if(e){if(r>=FOr||(v=cOr(r),v===0))return b1;t=di(lOr/vOr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-di(r),r>=t0-1+.27?(l=1-r,i=0):r>=t0-1-.27?(l=r-(YL-1),i=1):(l=r,i=2)):(m=0,r>=t0+.27?(l=2-r,i=0):r>=t0-.27?(l=r-YL,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=NOr+p*pOr(p),a=p*(AOr+p*gOr(p)),o=l*u+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=TOr+c*hOr(c),a=IOr+c*qOr(c),n=_Or+c*yOr(c),o=p*u-(jOr-c*(a+l*n)),m+=kOr+o;break;case 2:u=l*(LOr+l*bOr(l)),a=POr+l*wOr(l),m+=-.5*l+u/a;break}else if(r<8)switch(i=fOr(r),l=r-i,o=l*(SOr+l*dOr(l)),f=OOr+l*mOr(l),m=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=di(p)}else r<MOr?(v=di(r),p=1/r,l=p*p,c=ROr+p*EOr(l),m=(r-.5)*(v-1)+c):m=r*(di(r)-1);return e&&(m=t-m),m}ZL.exports=COr});var _n=s((P6e,QL)=>{"use strict";var GOr=$L();QL.exports=GOr});var Ye=s((R6e,KL)=>{"use strict";var VOr=6.283185307179586;KL.exports=VOr});var w1=s((F6e,rP)=>{"use strict";var UOr=14901161193847656e-24;rP.exports=UOr});var E1=s((M6e,eP)=>{"use strict";var HOr=.9189385332046728;eP.exports=HOr});var tP=s((B6e,WOr)=>{WOr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var iP=s((k6e,zOr)=>{zOr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var nP=s((j6e,DOr)=>{DOr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var sP=s((C6e,aP)=>{"use strict";function XOr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}aP.exports=XOr});var oP=s((G6e,uP)=>{"use strict";function JOr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}uP.exports=JOr});var fP=s((V6e,vP)=>{"use strict";function xOr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}vP.exports=xOr});var lP=s((U6e,cP)=>{"use strict";function YOr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}cP.exports=YOr});var gP=s((H6e,pP)=>{"use strict";function ZOr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}pP.exports=ZOr});var dP=s((W6e,mP)=>{"use strict";function $Or(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}mP.exports=$Or});var wP=s((z6e,bP)=>{"use strict";var QOr=E(),KOr=Tr(),rSr=X(),i0=ir(),eSr=J(),tSr=mi(),iSr=_n(),hP=In(),qP=H(),nSr=R(),aSr=I(),sSr=G(),yP=Ye(),uSr=w1(),oSr=E1(),vSr=tP(),fSr=iP(),cSr=nP(),lSr=sP(),pSr=oP(),gSr=fP(),mSr=lP(),dSr=gP(),hSr=dP(),qSr=129,ySr=170,bSr=709,wSr=1.2433929443359375,ESr=.6986598968505859;function N1(r){var e,t,i,n,a,u;if(QOr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(KOr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=qSr)return-cSr[u]/(i+1)}else return(n&1)===0?fSr[n/2]:vSr[(n-3)/2];return rSr(r)<uSr?-.5-oSr*r:(t=1-r,r<0?eSr(r/2)===r/2?0:(e=r,r=t,t=e,r>ySr?(e=hP(.5*t)*2*N1(r),a=iSr(r),a-=r*nSr(yP),a>bSr?e<0?sSr:aSr:e*i0(a)):hP(.5*t)*2*qP(yP,-r)*tSr(r)*N1(r)):r<1?(e=lSr(t),e-=wSr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+pSr(t)):r<=4?(e=ESr+1/-t,e+gSr(r-2)):r<=7?(e=mSr(r-4),1+i0(e)):r<15?(e=dSr(r-7),1+i0(e)):r<36?(e=hSr(r-15),1+i0(e)):1+qP(2,-r))}bP.exports=N1});var NP=s((D6e,EP)=>{"use strict";var NSr=wP();EP.exports=NSr});var OP=s((X6e,AP)=>{"use strict";var U=nr(),ASr=X(),OSr=Va(),SSr=dn(),TSr=LO(),ISr=WO(),_Sr=JO(),LSr=$O(),PSr=eS(),RSr=fS(),FSr=gS(),MSr=qS(),BSr=Mt(),kSr=Z2(),jSr=Da(),CSr=NS(),GSr=TS(),VSr=PS(),USr=GS(),HSr=n1(),WSr=a1(),zSr=iI(),DSr=bI(),XSr=ZI(),JSr=n_(),xSr=On(),YSr=A_(),ZSr=V_(),$Sr=kt(),QSr=jt(),KSr=V(),rTr=NP();function eTr(r){return U(r,"abs",ASr),U(r,"abs2",OSr),U(r,"acos",SSr),U(r,"acosh",TSr),U(r,"acot",ISr),U(r,"acovercos",_Sr),U(r,"acoversin",LSr),U(r,"acsc",PSr),U(r,"acsch",RSr),U(r,"ahavercos",FSr),U(r,"ahaversin",MSr),U(r,"asin",BSr),U(r,"asinh",kSr),U(r,"atan",jSr),U(r,"atanh",CSr),U(r,"avercos",GSr),U(r,"aversin",VSr),U(r,"bernoulli",USr),U(r,"besselj0",HSr),U(r,"besselj1",WSr),U(r,"bessely0",zSr),U(r,"bessely1",DSr),U(r,"binet",XSr),U(r,"cbrt",JSr),U(r,"ceil",xSr),U(r,"ceil10",YSr),U(r,"ceil2",ZSr),U(r,"cos",$Sr),U(r,"sin",QSr),U(r,"sqrt",KSr),U(r,"zeta",rTr),r}AP.exports=eTr});var TP=s((J6e,SP)=>{"use strict";var tTr=nr(),iTr=gA(),nTr=zA(),aTr=OP();function sTr(r){return tTr(r,"tools",nTr({})),r=iTr(r),r=aTr(r),r}SP.exports=sTr});var _P=s((x6e,IP)=>{"use strict";var uTr=je();function oTr(r,e,t,i){uTr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}IP.exports=oTr});var F=s((Y6e,LP)=>{"use strict";var vTr=_P();LP.exports=vTr});var RP=s((Z6e,PP)=>{"use strict";function fTr(r){return e;function e(){return r}}PP.exports=fTr});var S=s(($6e,FP)=>{"use strict";var cTr=RP();FP.exports=cTr});var BP=s((Q6e,MP)=>{"use strict";var lTr=I();function pTr(r){return r===0&&1/r===lTr}MP.exports=pTr});var Ze=s((K6e,kP)=>{"use strict";var gTr=BP();kP.exports=gTr});var GP=s((r4e,CP)=>{"use strict";var mTr=Ze(),jP=E(),A1=I();function dTr(r,e){return jP(r)||jP(e)?NaN:r===A1||e===A1?A1:r===e&&r===0?mTr(r)?r:e:r>e?r:e}CP.exports=dTr});var O1=s((e4e,VP)=>{"use strict";var hTr=GP();VP.exports=hTr});var WP=s((t4e,HP)=>{"use strict";var UP=65535;function qTr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&UP)>>>0,o=(e&UP)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}HP.exports=qTr});var DP=s((i4e,zP)=>{"use strict";var yTr=WP();zP.exports=yTr});var S1=s((n4e,XP)=>{"use strict";function bTr(r,e,t,i,n,a,u){var o,f,v,c,l,p,m;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,m=0;m<r;m++)v(f,p,c(o,l)),l+=t,p+=a;return e}XP.exports=bTr});var YP=s((a4e,xP)=>{"use strict";var JP=da(),wTr=S1(),T1=8;function ETr(r,e,t,i,n){var a,u,o,f,v,c;if(r<=0)return i;if(o=JP(e),f=JP(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,wTr(r,o,t,a,f,n,u),f.data;if(t===1&&n===1){if(v=r%T1,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<T1)return i;for(c=v;c<r;c+=T1)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}xP.exports=ETr});var QP=s((s4e,$P)=>{"use strict";var ZP=da(),NTr=S1(),Ln=8;function ATr(r,e,t,i,n,a,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=ZP(e),c=ZP(n),v.accessorProtocol||c.accessorProtocol)return NTr(r,v,t,i,c,a,u),c.data;if(o=i,f=u,t===1&&a===1){if(l=r%Ln,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<Ln)return n;for(p=l;p<r;p+=Ln)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=Ln,f+=Ln;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}$P.exports=ATr});var $e=s((u4e,rR)=>{"use strict";var OTr=w(),KP=YP(),STr=QP();OTr(KP,"ndarray",STr);rR.exports=KP});var tR=s((o4e,eR)=>{"use strict";function TTr(){}eR.exports=TTr});var nR=s((v4e,iR)=>{"use strict";var ITr=tR();function _Tr(){return ITr.name==="foo"}iR.exports=_Tr});var sR=s((f4e,aR)=>{"use strict";var LTr=nR();aR.exports=LTr});var oR=s((c4e,uR)=>{"use strict";var PTr=L(),RTr=sR(),FTr=y(),MTr=ku().REGEXP,BTr=RTr();function kTr(r){if(PTr(r)===!1)throw new TypeError(FTr("invalid argument. Must provide a function. Value: `%s`.",r));return BTr?r.name:MTr.exec(r.toString())[1]}uR.exports=kTr});var fR=s((l4e,vR)=>{"use strict";var jTr=oR();vR.exports=jTr});var lR=s((p4e,cR)=>{"use strict";var CTr=Ji(),GTr=xt(),VTr=Xi(),UTr=Di(),HTr=Jt(),WTr=Et(),zTr=lr(),DTr=Qr(),XTr=gr(),JTr=[XTr,DTr,WTr,zTr,UTr,HTr,CTr,GTr,VTr];cR.exports=JTr});var pR=s((g4e,xTr)=>{xTr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var yR=s((m4e,qR)=>{"use strict";var YTr=Ce(),ZTr=fR(),dR=It(),$Tr=Wu(),QTr=gr(),gR=lR(),mR=pR(),n0=$Tr()?dR(QTr):hR;n0=ZTr(n0)==="TypedArray"?n0:hR;function hR(){}function KTr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof n0)return!0;for(t=0;t<gR.length;t++)if(r instanceof gR[t])return!0;for(;r;){for(e=YTr(r),t=0;t<mR.length;t++)if(mR[t]===e)return!0;r=dR(r)}return!1}qR.exports=KTr});var wR=s((d4e,bR)=>{"use strict";var rIr=yR();bR.exports=rIr});var NR=s((h4e,ER)=>{"use strict";var eIr=$i(),tIr=Ki(),iIr=[tIr,eIr];ER.exports=iIr});var AR=s((q4e,nIr)=>{nIr.exports=["Complex64Array","Complex128Array"]});var IR=s((y4e,TR)=>{"use strict";var aIr=Ce(),sIr=It(),OR=NR(),SR=AR();function uIr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<OR.length;t++)if(r instanceof OR[t])return!0;for(;r;){for(e=aIr(r),t=0;t<SR.length;t++)if(SR[t]===e)return!0;r=sIr(r)}return!1}TR.exports=uIr});var LR=s((b4e,_R)=>{"use strict";var oIr=IR();_R.exports=oIr});var RR=s((w4e,PR)=>{"use strict";var vIr=y();function fIr(r,e){if(typeof e!="function")throw new TypeError(vIr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}PR.exports=fIr});var MR=s((E4e,FR)=>{"use strict";var cIr=RR();FR.exports=cIr});var kR=s((N4e,BR)=>{"use strict";var lIr=Ji(),pIr=xt(),gIr=Xi(),mIr=Di(),dIr=Jt(),hIr=Et(),qIr=lr(),yIr=Qr(),bIr=gr(),wIr=$i(),EIr=Ki(),NIr=[[bIr,"Float64Array"],[yIr,"Float32Array"],[hIr,"Int32Array"],[qIr,"Uint32Array"],[mIr,"Int16Array"],[dIr,"Uint16Array"],[lIr,"Int8Array"],[pIr,"Uint8Array"],[gIr,"Uint8ClampedArray"],[wIr,"Complex64Array"],[EIr,"Complex128Array"]];BR.exports=NIr});var CR=s((A4e,jR)=>{"use strict";var AIr=MR(),OIr=Ce(),SIr=It(),hi=kR();function TIr(r){var e,t;for(t=0;t<hi.length;t++)if(AIr(r,hi[t][0]))return hi[t][1];for(;r;){for(e=OIr(r),t=0;t<hi.length;t++)if(e===hi[t][1])return hi[t][1];r=SIr(r)}}jR.exports=TIr});var VR=s((O4e,GR)=>{"use strict";var IIr=wR(),_Ir=LR(),LIr=$t(),PIr=Qt(),RIr=y(),FIr=CR();function MIr(r){var e,t,i;if(IIr(r))e=r;else if(_Ir(r))r.BYTES_PER_ELEMENT===8?e=LIr(r,0):e=PIr(r,0);else throw new TypeError(RIr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:FIr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}GR.exports=MIr});var M=s((S4e,UR)=>{"use strict";var BIr=VR();UR.exports=BIr});var I1=s((T4e,HR)=>{"use strict";var kIr=Dt(),jIr=J(),CIr=kIr-1;function GIr(){var r=jIr(1+CIr*Math.random());return r>>>0}HR.exports=GIr});var k1=s((I4e,KR)=>{"use strict";var ue=w(),Qe=P(),WR=F(),_1=O(),VIr=_(),UIr=jr(),zR=Kr(),HIr=fr().isPrimitive,DR=re().isPrimitive,ZR=gi(),$R=Dt(),qr=lr(),WIr=O1(),B1=DP(),qi=$e(),zIr=M(),br=y(),XR=I1(),ar=624,L1=397,JR=$R>>>0,DIr=19650218>>>0,P1=2147483648>>>0,R1=2147483647>>>0,XIr=1812433253>>>0,JIr=1664525>>>0,xIr=1566083941>>>0,YIr=2636928640>>>0,ZIr=4022730752>>>0,$Ir=2567483615>>>0,F1=[0>>>0,$Ir>>>0],QR=1/(ZR+1),QIr=67108864>>>0,KIr=2147483648>>>0,M1=1>>>0,r_r=ZR*QR,a0=1,s0=3,Ke=2,rt=ar+3,yr=ar+5,Pn=ar+6;function xR(r,e){var t;return e?t="option":t="argument",r.length<Pn+1?new RangeError(br("invalid %s. `state` array has insufficient length.",t)):r[0]!==a0?new RangeError(br("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,a0,r[0])):r[1]!==s0?new RangeError(br("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,s0,r[1])):r[Ke]!==ar?new RangeError(br("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ar,r[Ke])):r[rt]!==1?new RangeError(br("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[rt])):r[yr]!==r.length-Pn?new RangeError(br("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Pn,r[yr])):null}function YR(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=B1(t,XIr)+i>>>0;return r}function e_r(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=WIr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=B1(n,JIr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=B1(n,xIr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=KIr,r}function t_r(r){var e,t,i,n;for(n=ar-L1,t=0;t<n;t++)e=r[t]&P1|r[t+1]&R1,r[t]=r[t+L1]^e>>>1^F1[e&M1];for(i=ar-1;t<i;t++)e=r[t]&P1|r[t+1]&R1,r[t]=r[t-n]^e>>>1^F1[e&M1];return e=r[i]&P1|r[0]&R1,r[i]=r[L1-1]^e>>>1^F1[e&M1],r}function i_r(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!VIr(r))throw new TypeError(br("invalid argument. Options argument must be an object. Value: `%s`.",r));if(_1(r,"copy")&&(i.copy=r.copy,!HIr(r.copy)))throw new TypeError(br("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(_1(r,"state")){if(t=r.state,i.state=!0,!zR(t))throw new TypeError(br("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=xR(t,!0),u)throw u;i.copy===!1?e=t:(e=new qr(t.length),qi(t.length,t,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,t[yr])}if(n===void 0)if(_1(r,"seed"))if(n=r.seed,i.seed=!0,DR(n)){if(n>JR)throw new RangeError(br("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(UIr(n)===!1||n.length<1)throw new TypeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!DR(n))throw new TypeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>JR)throw new RangeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new qr(Pn+a),e[0]=a0,e[1]=s0,e[Ke]=ar,e[rt]=1,e[rt+1]=ar,e[yr]=a,qi.ndarray(a,n,1,0,e,1,yr+1),t=new qr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,a),t=YR(t,ar,DIr),t=e_r(t,ar,n,a)}else n=XR()>>>0}else n=XR()>>>0;return t===void 0&&(e=new qr(Pn+1),e[0]=a0,e[1]=s0,e[Ke]=ar,e[rt]=1,e[rt+1]=ar,e[yr]=1,e[yr+1]=n,t=new qr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,1),t=YR(t,ar,n)),ue(h,"NAME","mt19937"),Qe(h,"seed",o),Qe(h,"seedLength",f),WR(h,"state",l,p),Qe(h,"stateLength",v),Qe(h,"byteLength",c),ue(h,"toJSON",m),ue(h,"MIN",0),ue(h,"MAX",$R),ue(h,"normalized",d),ue(d,"NAME",h.NAME),Qe(d,"seed",o),Qe(d,"seedLength",f),WR(d,"state",l,p),Qe(d,"stateLength",v),Qe(d,"byteLength",c),ue(d,"toJSON",m),ue(d,"MIN",0),ue(d,"MAX",r_r),h;function o(){var g=e[yr];return qi(g,n,1,new qr(g),1)}function f(){return e[yr]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return qi(g,e,1,new qr(g),1)}function p(g){var q;if(!zR(g))throw new TypeError(br("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(q=xR(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?qi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new qr(g.length)),qi(g.length,g,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,e[yr])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=zIr(e),g.params=[],g}function h(){var g,q;return q=e[rt+1],q>=ar&&(t=t_r(t),q=0),g=t[q],e[rt+1]=q+1,g^=g>>>11,g^=g<<7&YIr,g^=g<<15&ZIr,g^=g>>>18,g>>>0}function d(){var g=h()>>>5,q=h()>>>6;return(g*QIr+q)*QR}}KR.exports=i_r});var eF=s((_4e,rF)=>{"use strict";var n_r=k1(),a_r=I1(),s_r=n_r({seed:a_r()});rF.exports=s_r});var z=s((L4e,iF)=>{"use strict";var u_r=w(),tF=eF(),o_r=k1();u_r(tF,"factory",o_r);iF.exports=tF});var uF=s((P4e,sF)=>{"use strict";var nF=j().isPrimitive,j1=y(),aF=sr();function v_r(r,e){return!nF(r)||aF(r)?new TypeError(j1("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!nF(e)||aF(e)?new TypeError(j1("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(j1("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}sF.exports=v_r});var vF=s((R4e,oF)=>{"use strict";var f_r=H(),c_r=jt(),l_r=za();function p_r(r,e,t){return e+f_r(c_r(l_r*r()),2)*(t-e)}oF.exports=p_r});var C1=s((F4e,hF)=>{"use strict";var oe=w(),u0=P(),fF=F(),cF=_(),lF=L(),pF=O(),gF=S(),g_r=C(),o0=z().factory,mF=E(),m_r=M(),v0=y(),d_r=uF(),dF=vF();function h_r(){var r,e,t,i,n,a;if(arguments.length===0)e=o0();else if(arguments.length===1){if(r=arguments[0],!cF(r))throw new TypeError(v0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(pF(r,"prng")){if(!lF(r.prng))throw new TypeError(v0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=o0(r)}else{if(n=arguments[0],a=arguments[1],i=d_r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!cF(r))throw new TypeError(v0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(pF(r,"prng")){if(!lF(r.prng))throw new TypeError(v0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=o0(r)}else e=o0()}return n===void 0?t=h:t=m,oe(t,"NAME","arcsine"),r&&r.prng?(oe(t,"seed",null),oe(t,"seedLength",null),fF(t,"state",gF(null),g_r),oe(t,"stateLength",null),oe(t,"byteLength",null),oe(t,"toJSON",gF(null)),oe(t,"PRNG",e)):(u0(t,"seed",u),u0(t,"seedLength",o),fF(t,"state",c,l),u0(t,"stateLength",f),u0(t,"byteLength",v),oe(t,"toJSON",p),oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=m_r(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return dF(e,n,a)}function h(d,g){return mF(d)||mF(g)||d>=g?NaN:dF(e,d,g)}}hF.exports=h_r});var yF=s((M4e,qF)=>{"use strict";var q_r=C1(),y_r=q_r();qF.exports=y_r});var EF=s((B4e,wF)=>{"use strict";var b_r=w(),bF=yF(),w_r=C1();b_r(bF,"factory",w_r);wF.exports=bF});var G1=s((k4e,IF)=>{"use strict";var ve=w(),f0=P(),NF=F(),AF=_(),E_r=en().isPrimitive,OF=L(),SF=O(),TF=S(),N_r=C(),c0=z().factory,A_r=E(),O_r=M(),l0=y();function S_r(){var r,e,t,i;if(arguments.length===0)e=c0();else if(arguments.length===1&&AF(arguments[0]))if(r=arguments[0],SF(r,"prng")){if(!OF(r.prng))throw new TypeError(l0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=c0(r);else{if(i=arguments[0],!E_r(i))throw new TypeError(l0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!AF(r))throw new TypeError(l0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SF(r,"prng")){if(!OF(r.prng))throw new TypeError(l0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=c0(r)}else e=c0()}return i===void 0?t=p:t=l,ve(t,"NAME","bernoulli"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),NF(t,"state",TF(null),N_r),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",TF(null)),ve(t,"PRNG",e)):(f0(t,"seed",n),f0(t,"seedLength",a),NF(t,"state",f,v),f0(t,"stateLength",u),f0(t,"byteLength",o),ve(t,"toJSON",c),ve(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=O_r(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return A_r(m)||m<0||m>1?NaN:e()<=m?1:0}}IF.exports=S_r});var LF=s((j4e,_F)=>{"use strict";var T_r=G1(),I_r=T_r();_F.exports=I_r});var FF=s((C4e,RF)=>{"use strict";var __r=w(),PF=LF(),L_r=G1();__r(PF,"factory",L_r);RF.exports=PF});var jF=s((G4e,kF)=>{"use strict";var P_r=V(),MF=ir(),R_r=R(),BF=.00991256303526217;function F_r(r,e){var t,i,n;for(i=MF(-.5*e*e),t=[],t.push(BF/i),t.push(e),n=2;n<r;n++)t[n]=P_r(-2*R_r(BF/t[n-1]+i)),i=MF(-.5*t[n]*t[n]);return t.push(0),t}kF.exports=F_r});var GF=s((V4e,CF)=>{"use strict";function M_r(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}CF.exports=M_r});var HF=s((U4e,UF)=>{"use strict";var VF=R();function B_r(r,e,t){var i,n;do i=VF(r())/e,n=VF(r());while(-2*n<i*i);return t?i-e:e-i}UF.exports=B_r});var XF=s((H4e,DF)=>{"use strict";var k_r=X(),WF=ir(),j_r=jF(),C_r=GF(),G_r=HF(),V_r=128,zF=3.442619855899,Gt=j_r(V_r,zF),U_r=C_r(Gt),H_r=127;function W_r(r,e){return t;function t(){for(var i,n,a,u,o,f,v;;){if(o=2*r()-1,f=e()&H_r,k_r(o)<U_r[f])return o*Gt[f];if(f===0)return G_r(r,zF,o<0);if(u=o*Gt[f],a=u*u,v=f+1,i=WF(-.5*(Gt[f]*Gt[f]-a)),n=WF(-.5*(Gt[v]*Gt[v]-a)),n+r()*(i-n)<1)return u}}}DF.exports=W_r});var U1=s((W4e,YF)=>{"use strict";var et=w(),p0=P(),JF=F(),z_r=L(),D_r=_(),X_r=fr().isPrimitive,g0=O(),J_r=Kr(),V1=z().factory,xF=S(),x_r=C(),Y_r=J(),Z_r=Dt(),$_r=M(),Rn=y(),Q_r=XF();function K_r(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!D_r(r))throw new TypeError(Rn("invalid argument. Must provide an object. Value: `%s`.",r));if(g0(r,"copy")&&(n.copy=r.copy,!X_r(r.copy)))throw new TypeError(Rn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(g0(r,"prng")){if(!z_r(r.prng))throw new TypeError(Rn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(g0(r,"state")){if(n.state=r.state,!J_r(r.state))throw new TypeError(Rn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(g0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Rn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=V1(n),e=t.normalized):(t=V1({seed:Y_r(1+Z_r*e()),copy:n.copy}),n.seed=null):(t=V1(n),e=t.normalized),i=Q_r(e,t),et(i,"NAME","improved-ziggurat"),n.seed===null?(et(i,"seed",null),et(i,"seedLength",null)):(p0(i,"seed",a),p0(i,"seedLength",u)),r&&r.prng?(JF(i,"state",xF(null),x_r),et(i,"stateLength",null),et(i,"byteLength",null),et(i,"toJSON",xF(null))):(JF(i,"state",v,c),p0(i,"stateLength",o),p0(i,"byteLength",f),et(i,"toJSON",l)),et(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=$_r(t.state),p.params=[],p}}YF.exports=K_r});var $F=s((z4e,ZF)=>{"use strict";var rLr=U1(),eLr=rLr();ZF.exports=eLr});var tt=s((D4e,KF)=>{"use strict";var tLr=w(),QF=$F(),iLr=U1();tLr(QF,"factory",iLr);KF.exports=QF});var eM=s((X4e,rM)=>{"use strict";var nLr=L(),aLr=nLr(Object.assign);rM.exports=aLr});var iM=s((J4e,tM)=>{"use strict";var sLr=Object.assign;tM.exports=sLr});var aM=s((x4e,nM)=>{"use strict";var uLr=typeof Object.getOwnPropertySymbols<"u";nM.exports=uLr});var oM=s((Y4e,uM)=>{"use strict";var sM=ai(),oLr=sM.getOwnPropertySymbols;function vLr(r){return oLr(sM(r))}uM.exports=vLr});var fM=s((Z4e,vM)=>{"use strict";function fLr(){return[]}vM.exports=fLr});var lM=s(($4e,cM)=>{"use strict";var cLr=aM(),lLr=oM(),pLr=fM(),H1;cLr?H1=lLr:H1=pLr;cM.exports=H1});var gM=s((Q4e,pM)=>{"use strict";var gLr=an(),mLr=lM(),dLr=nn();function hLr(r){var e,t,i;for(e=gLr(r),t=mLr(r),i=0;i<t.length;i++)dLr(r,t[i])&&e.push(t[i]);return e}pM.exports=hLr});var dM=s((K4e,mM)=>{"use strict";var qLr=gM();mM.exports=qLr});var yM=s((rve,qM)=>{"use strict";var yLr=dM(),hM=ai(),bLr=y();function wLr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(bLr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=hM(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=yLr(hM(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}qM.exports=wLr});var Fn=s((eve,bM)=>{"use strict";var ELr=eM(),NLr=iM(),ALr=yM(),W1;ELr?W1=NLr:W1=ALr;bM.exports=W1});var AM=s((tve,NM)=>{"use strict";var wM=W().isPrimitive,EM=y();function OLr(r,e){return wM(r)?wM(e)?null:new TypeError(EM("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(EM("invalid argument. First argument must be a positive number. Value: `%s`.",r))}NM.exports=OLr});var _M=s((ive,IM)=>{"use strict";var OM=R(),SM=V(),SLr=H(),TM=1/3;function TLr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(t<1?(f=t+1-TM,o=1/SM(9*f),c=SLr(r(),1/t)):(f=t-TM,o=1/SM(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,u=.5*n+f*(1-p+OM(p)),l=r(),(l<a||OM(l)<u)&&(i=!1)}return f*p*c}IM.exports=TLr});var RM=s((nve,PM)=>{"use strict";var z1=H(),LM=R();function ILr(r,e,t){var i,n,a,u,o,f,v,c;for(a=t-1,o=z1(a+a,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=z1(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*z1(n/(8*t-8),2),f<c&&(c=a*LM(4*v*(1-v)),c+=u*u/2,c>=LM(f)&&(i=!1))));return v}PM.exports=ILr});var MM=s((ave,FM)=>{"use strict";var _Lr=H(),m0=R();function LLr(r,e,t,i){var n,a,u,o,f,v,c,l,p,m,h;for(o=t-1,f=i-1,v=o+f,c=v*m0(v),u=o/v,n=.5/_Lr(v,.5),a=!0;a===!0;)l=e(),m=u+l*n,m>=0&&m<=1&&(p=r(),h=o*m0(m/o),h+=f*m0((1-m)/f),h+=c+.5*l*l,h>=m0(p)&&(a=!1));return m}FM.exports=LLr});var jM=s((sve,kM)=>{"use strict";var D1=ir(),BM=H(),X1=R();function PLr(r,e,t){for(var i,n,a,u,o,f,v;;)if(u=r(),o=r(),f=BM(u,1/e),v=BM(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=X1(u)/e,n=X1(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),D1(i-X1(D1(i)+D1(n))))}kM.exports=PLr});var VM=s((uve,GM)=>{"use strict";var CM=_M(),RLr=RM(),FLr=MM(),MLr=jM();function BLr(r,e,t,i){var n,a;return t===i&&t>1.5?RLr(r,e,t):t>1&&i>1?FLr(r,e,t,i):t<1&&i<1?MLr(r,t,i):(n=CM(r,e,t),a=CM(r,e,i),n/(n+a))}GM.exports=BLr});var Z1=s((ove,ZM)=>{"use strict";var fe=w(),d0=P(),UM=F(),HM=_(),WM=fr().isPrimitive,zM=L(),yi=O(),DM=S(),kLr=C(),XM=tt().factory,h0=z().factory,JM=E(),J1=$e(),x1=lr(),Y1=Kr(),xM=Fn(),jLr=M(),ce=y(),CLr=AM(),YM=VM();function GLr(){var r,e,t,i,n,a,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=h0(n);else if(arguments.length===1){if(n=arguments[0],!HM(n))throw new TypeError(ce("invalid argument. Options argument must be an object. Value: `%s`.",n));if(yi(n,"copy")&&!WM(n.copy))throw new TypeError(ce("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(yi(n,"prng")){if(!zM(n.prng))throw new TypeError(ce("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(yi(n,"state")&&!Y1(n.state))throw new TypeError(ce("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=xM({},n),n.copy===!1?o=!1:n.state&&(n.state=J1(n.state.length,n.state,1,new x1(n.state.length),1)),n.copy=!1,a=h0(n)}}else{if(t=arguments[0],i=arguments[1],f=CLr(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!HM(n))throw new TypeError(ce("invalid argument. Options argument must be an object. Value: `%s`.",n));if(yi(n,"copy")&&!WM(n.copy))throw new TypeError(ce("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(yi(n,"prng")){if(!zM(n.prng))throw new TypeError(ce("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(yi(n,"state")&&!Y1(n.state))throw new TypeError(ce("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=xM({},n),n.copy===!1?o=!1:n.state&&(n.state=J1(n.state.length,n.state,1,new x1(n.state.length),1)),n.copy=!1,a=h0(n)}}else n={copy:!1},a=h0(n)}return n&&n.prng?e=XM({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=XM({state:r,copy:!1})),t===void 0?u=q:u=g,fe(u,"NAME","beta"),n&&n.prng?(fe(u,"seed",null),fe(u,"seedLength",null),UM(u,"state",DM(null),kLr),fe(u,"stateLength",null),fe(u,"byteLength",null),fe(u,"toJSON",DM(null)),fe(u,"PRNG",a)):(d0(u,"seed",v),d0(u,"seedLength",c),UM(u,"state",m,h),d0(u,"stateLength",l),d0(u,"byteLength",p),fe(u,"toJSON",d),fe(u,"PRNG",a),a=a.normalized),u;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function h(N){if(!Y1(N))throw new TypeError(ce("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=J1(N.length,N,1,new x1(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=jLr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return YM(a,e,t,i)}function q(N,A){return JM(N)||JM(A)||N<=0||A<=0?NaN:YM(a,e,N,A)}}ZM.exports=GLr});var QM=s((vve,$M)=>{"use strict";var VLr=Z1(),ULr=VLr();$M.exports=ULr});var eB=s((fve,rB)=>{"use strict";var HLr=w(),KM=QM(),WLr=Z1();HLr(KM,"factory",WLr);rB.exports=KM});var aB=s((cve,nB)=>{"use strict";var tB=W().isPrimitive,iB=y();function zLr(r,e){return tB(r)?tB(e)?null:new TypeError(iB("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(iB("invalid argument. First argument must be a positive number. Value: `%s`.",r))}nB.exports=zLr});var oB=s((lve,uB)=>{"use strict";var sB=R();function DLr(r,e,t,i,n){var a,u,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+sB(l)),c=r(),(c<o||sB(c)<f)&&(a=!1)}return 1/t*i*l}uB.exports=DLr});var e3=s((pve,qB)=>{"use strict";var le=w(),q0=P(),vB=F(),fB=_(),$1=Kr(),cB=fr().isPrimitive,lB=L(),bi=O(),pB=S(),XLr=C(),gB=tt().factory,y0=z().factory,mB=E(),Q1=V(),dB=H(),K1=$e(),r3=lr(),JLr=M(),hB=Fn(),pe=y(),xLr=aB(),b0=oB(),w0=1/3;function YLr(){var r,e,t,i,n,a,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=y0(n);else if(arguments.length===1){if(n=arguments[0],!fB(n))throw new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!cB(n.copy))throw new TypeError(pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!lB(n.prng))throw new TypeError(pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!$1(n.state))throw new TypeError(pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=hB({},n),n.copy===!1?o=!1:n.state&&(n.state=K1(n.state.length,n.state,1,new r3(n.state.length),1)),n.copy=!1,a=y0(n)}}else{if(e=arguments[0],i=arguments[1],f=xLr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!fB(n))throw new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!cB(n.copy))throw new TypeError(pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!lB(n.prng))throw new TypeError(pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!$1(n.state))throw new TypeError(pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=hB({},n),n.copy===!1?o=!1:n.state&&(n.state=K1(n.state.length,n.state,1,new r3(n.state.length),1)),n.copy=!1,a=y0(n)}}else n={copy:!1},a=y0(n)}return n&&n.prng?t=gB({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=gB({state:r,copy:!1})),e===void 0?u=k:(e>=1?(u=N,c=e-w0):(u=A,c=e+1-w0),v=1/Q1(9*c)),le(u,"NAME","gamma"),n&&n.prng?(le(u,"seed",null),le(u,"seedLength",null),vB(u,"state",pB(null),XLr),le(u,"stateLength",null),le(u,"byteLength",null),le(u,"toJSON",pB(null)),le(u,"PRNG",a)):(q0(u,"seed",l),q0(u,"seedLength",p),vB(u,"state",d,g),q0(u,"stateLength",m),q0(u,"byteLength",h),le(u,"toJSON",q),le(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function g(T){if(!$1(T))throw new TypeError(pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",T));o&&(T=K1(T.length,T,1,new r3(T.length),1)),a.state=T}function q(){var T={};return T.type="PRNG",T.name=u.NAME,T.state=JLr(a.state),e===void 0?T.params=[]:T.params=[e,i],T}function N(){return b0(a,t,i,c,v)}function A(){return b0(a,t,i,c,v)*dB(a(),1/e)}function k(T,D){var vr,$;return mB(T)||mB(D)||T<=0||D<=0?NaN:T<1?($=T+1-w0,vr=1/Q1(9*$),b0(a,t,D,$,vr)*dB(a(),1/T)):($=T-w0,vr=1/Q1(9*$),b0(a,t,D,$,vr))}}qB.exports=YLr});var bB=s((gve,yB)=>{"use strict";var ZLr=e3(),$Lr=ZLr();yB.exports=$Lr});var wi=s((mve,EB)=>{"use strict";var QLr=w(),wB=bB(),KLr=e3();QLr(wB,"factory",KLr);EB.exports=wB});var SB=s((dve,OB)=>{"use strict";var NB=W().isPrimitive,AB=y();function rPr(r,e){return NB(r)?NB(e)?null:new TypeError(AB("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(AB("invalid argument. First argument must be a positive number. Value: `%s`.",r))}OB.exports=rPr});var IB=s((hve,TB)=>{"use strict";function ePr(r,e,t){return r(e,1)/r(t,1)}TB.exports=ePr});var t3=s((qve,BB)=>{"use strict";var it=w(),E0=P(),_B=F(),LB=_(),PB=S(),tPr=C(),N0=wi().factory,RB=E(),iPr=M(),FB=y(),nPr=SB(),MB=IB();function aPr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=N0();else if(arguments.length===1){if(i=arguments[0],!LB(i))throw new TypeError(FB("invalid argument. Options argument must be an object. Value: `%s`.",i));r=N0(i)}else{if(e=arguments[0],t=arguments[1],u=nPr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!LB(i))throw new TypeError(FB("invalid argument. Options argument must be an object. Value: `%s`.",i));r=N0(i)}else r=N0()}return e===void 0?a=d:a=h,n=r.PRNG,it(a,"NAME","betaprime"),i&&i.prng?(it(a,"seed",null),it(a,"seedLength",null),_B(a,"state",PB(null),tPr),it(a,"stateLength",null),it(a,"byteLength",null),it(a,"toJSON",PB(null))):(E0(a,"seed",o),E0(a,"seedLength",f),_B(a,"state",l,p),E0(a,"stateLength",v),E0(a,"byteLength",c),it(a,"toJSON",m)),it(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=iPr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return MB(r,e,t)}function d(g,q){return RB(g)||RB(q)||g<=0||q<=0?NaN:MB(r,g,q)}}BB.exports=aPr});var jB=s((yve,kB)=>{"use strict";var sPr=t3(),uPr=sPr();kB.exports=uPr});var VB=s((bve,GB)=>{"use strict";var oPr=w(),CB=jB(),vPr=t3();oPr(CB,"factory",vPr);GB.exports=CB});var HB=s((wve,UB)=>{"use strict";var fPr=J();function cPr(r){return fPr(r)===r&&r>0}UB.exports=cPr});var i3=s((Eve,WB)=>{"use strict";var lPr=HB();WB.exports=lPr});var DB=s((Nve,zB)=>{"use strict";function pPr(r){return r>=0&&r<=1}zB.exports=pPr});var JB=s((Ave,XB)=>{"use strict";var gPr=DB();XB.exports=gPr});var ZB=s((Ove,YB)=>{"use strict";var mPr=re().isPrimitive,dPr=en().isPrimitive,xB=y();function hPr(r,e){return mPr(r)?dPr(e)?null:new TypeError(xB("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(xB("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}YB.exports=hPr});var QB=s((Sve,$B)=>{"use strict";function qPr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}$B.exports=qPr});var rk=s((Tve,KB)=>{"use strict";var yPr=E();function bPr(r){return r===0||yPr(r)?r:r<0?-1:1}KB.exports=bPr});var A0=s((Ive,ek)=>{"use strict";var wPr=rk();ek.exports=wPr});var ik=s((_ve,tk)=>{"use strict";var EPr=H(),NPr=1/12,APr=1/360,OPr=1/1260;function SPr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=EPr(r,2),(NPr-(APr-OPr/e)/e)/r}}tk.exports=SPr});var ak=s((Lve,nk)=>{"use strict";var n3=J(),TPr=A0(),IPr=V(),a3=X(),O0=R(),S0=ik(),_Pr=1/6;function LPr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,k,T,D,vr,$,yu,zr,pr,Xn;for(D=n3((e+1)*t),v=e-D+1,vr=1-t,$=t/vr,c=(e+1)*$,u=e*t*vr,a=IPr(u),g=1.15+2.53*a,d=-.0873+.0248*g+.01*t,q=e*t+.5,i=(2.83+5.1/g)*a,h=.92-4.2/g,n=.86*h,A=(D+.5)*O0((D+1)/($*v)),A+=S0(D)+S0(e-D);;){if(pr=r(),pr<=n)return zr=pr/h-.43,$=zr*(2*d/(.5-a3(zr))+g)+q,n3($);if(pr>=h?zr=r()-.5:(zr=pr/h-.93,zr=TPr(zr)*.5-zr,pr=h*r()),l=.5-a3(zr),T=n3(zr*(2*d/l+g)+q),!(T<0||T>e))if(pr=pr*i/(d/(l*l)+g),p=a3(T-D),p>15){if(pr=O0(pr),o=p/u,f=(p/3+.625)*p,f+=_Pr,f/=u,o*=f+.5,yu=-(p*p)/(2*u),pr<yu-o||pr<=yu+o&&(m=e-T+1,Xn=A+(e+1)*O0(v/m),Xn+=(T+.5)*O0(m*$/(T+1)),Xn+=-(S0(T)+S0(e-T)),pr<=Xn))return T}else{if(N=1,D<T)for(k=D;k<=T;k++)N*=c/k-$;else if(D>T)for(k=T;k<=D;k++)pr*=c/k-$;if(pr<=N)return T}}}nk.exports=LPr});var ok=s((Pve,uk)=>{"use strict";var PPr=QB(),RPr=ak();function sk(r,e,t){return t>.5?e-sk(r,e,1-t):e*t<10?PPr(r,e,t):RPr(r,e,t)}uk.exports=sk});var s3=s((Rve,dk)=>{"use strict";var ge=w(),T0=P(),vk=F(),fk=_(),ck=L(),lk=O(),pk=S(),FPr=C(),gk=E(),MPr=i3(),BPr=JB(),I0=z().factory,kPr=M(),_0=y(),jPr=ZB(),mk=ok();function CPr(){var r,e,t,i,n,a;if(arguments.length===0)e=I0();else if(arguments.length===1){if(r=arguments[0],!fk(r))throw new TypeError(_0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(lk(r,"prng")){if(!ck(r.prng))throw new TypeError(_0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=I0(r)}else{if(n=arguments[0],a=arguments[1],i=jPr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!fk(r))throw new TypeError(_0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(lk(r,"prng")){if(!ck(r.prng))throw new TypeError(_0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=I0(r)}else e=I0()}return n===void 0?t=h:t=m,ge(t,"NAME","binomial"),r&&r.prng?(ge(t,"seed",null),ge(t,"seedLength",null),vk(t,"state",pk(null),FPr),ge(t,"stateLength",null),ge(t,"byteLength",null),ge(t,"toJSON",pk(null)),ge(t,"PRNG",e)):(T0(t,"seed",u),T0(t,"seedLength",o),vk(t,"state",c,l),T0(t,"stateLength",f),T0(t,"byteLength",v),ge(t,"toJSON",p),ge(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=kPr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return mk(e,n,a)}function h(d,g){return gk(d)||gk(g)||!MPr(d)||!BPr(g)?NaN:mk(e,d,g)}}dk.exports=CPr});var qk=s((Fve,hk)=>{"use strict";var GPr=s3(),VPr=GPr();hk.exports=VPr});var wk=s((Mve,bk)=>{"use strict";var UPr=w(),yk=qk(),HPr=s3();UPr(yk,"factory",HPr);bk.exports=yk});var Nk=s((Bve,Ek)=>{"use strict";var WPr=V(),zPr=R(),DPr=jt(),XPr=kt(),JPr=Ye();function xPr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=WPr(-2*zPr(n)),o=JPr*a,t=u*XPr(o),e=!1,u*DPr(o)}return e=!0,t}}Ek.exports=xPr});var Ok=s((kve,Ak)=>{"use strict";var YPr=V(),ZPr=R(),$Pr=kt(),QPr=Pr(),KPr=$Pr(QPr);function rRr(r){var e=YPr(-2*ZPr(r));return e*KPr}Ak.exports=rRr});var Tk=s((jve,Sk)=>{"use strict";var eRr=V(),tRr=R(),iRr=kt(),nRr=Ye();function aRr(r){var e=eRr(-2*tRr(r)),t=nRr*r;return e*iRr(t)}Sk.exports=aRr});var u3=s((Cve,Pk)=>{"use strict";var Br=w(),L0=P(),Ik=F(),sRr=_(),uRr=L(),oRr=fr().isPrimitive,Mn=O(),vRr=Kr(),_k=z().factory,Lk=S(),fRr=C(),cRr=M(),Bn=y(),lRr=Nk(),pRr=Ok(),gRr=Tk();function mRr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!sRr(r))throw new TypeError(Bn("invalid argument. Must provide an object. Value: `%s`.",r));if(Mn(r,"copy")&&(n.copy=r.copy,!oRr(r.copy)))throw new TypeError(Bn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Mn(r,"prng")){if(!uRr(r.prng))throw new TypeError(Bn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Mn(r,"state")){if(n.state=r.state,!vRr(r.state))throw new TypeError(Bn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Mn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Bn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=_k(n),e=i.normalized):n.seed=null:(i=_k(n),e=i.normalized),t=lRr(e),Br(t,"NAME","box-muller"),n.seed===null?(Br(t,"seed",null),Br(t,"seedLength",null)):(L0(t,"seed",a),L0(t,"seedLength",u)),r&&r.prng?(Ik(t,"state",Lk(null),fRr),Br(t,"stateLength",null),Br(t,"byteLength",null),Br(t,"toJSON",Lk(null))):(Ik(t,"state",v,c),L0(t,"stateLength",o),L0(t,"byteLength",f),Br(t,"toJSON",l)),Br(t,"PRNG",e),Mn(e,"MIN")?(Br(t,"MIN",pRr(e.MIN)),Br(t,"MAX",gRr(e.MIN))):(Br(t,"MIN",null),Br(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=cRr(i.state),p.params=[],p}}Pk.exports=mRr});var Fk=s((Gve,Rk)=>{"use strict";var dRr=u3(),hRr=dRr();Rk.exports=hRr});var kk=s((Vve,Bk)=>{"use strict";var qRr=w(),Mk=Fk(),yRr=u3();qRr(Mk,"factory",yRr);Bk.exports=Mk});var Gk=s((Uve,Ck)=>{"use strict";var bRr=j().isPrimitive,wRr=W().isPrimitive,jk=y(),ERr=sr();function NRr(r,e){return!bRr(r)||ERr(r)?new TypeError(jk("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):wRr(e)?null:new TypeError(jk("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Ck.exports=NRr});var Uk=s((Hve,Vk)=>{"use strict";function ARr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}Vk.exports=ARr});var Wk=s((Wve,Hk)=>{"use strict";function ORr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}Hk.exports=ORr});var Xk=s((zve,Dk)=>{"use strict";var SRr=er(),zk=te(),TRr=Uk(),IRr=Wk(),_Rr=.7853981633974483,LRr=3061616997868383e-32,PRr=.3333333333333341,RRr=2147483647;function FRr(r,e,t){var i,n,a,u,o,f,v,c,l;return i=SRr(r),n=i&RRr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=_Rr-r,c=LRr-e,r=l+c,e=0),l=r*r,c=l*l,u=TRr(c),v=l*IRr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=PRr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=zk(c,0),v=u-(l-r),a=-1/c,f=zk(a,0),o=1+f*l,f+a*(o+f*v))}Dk.exports=FRr});var xk=s((Dve,Jk)=>{"use strict";var MRr=Xk();Jk.exports=MRr});var $k=s((Xve,Zk)=>{"use strict";var BRr=er(),Yk=xk(),kRr=yn(),o3=[0,0],jRr=2147483647,CRr=1072243195,GRr=2146435072,VRr=1044381696;function URr(r){var e,t;return e=BRr(r),e&=jRr,e<=CRr?e<VRr?r:Yk(r,0,1):e>=GRr?NaN:(t=kRr(r,o3),Yk(o3[0],o3[1],1-((t&1)<<1)))}Zk.exports=URr});var v3=s((Jve,Qk)=>{"use strict";var HRr=$k();Qk.exports=HRr});var rj=s((xve,Kk)=>{"use strict";var WRr=v3(),zRr=Pr();function DRr(r,e,t){return e+t*WRr(zRr*(r()-.5))}Kk.exports=DRr});var f3=s((Yve,oj)=>{"use strict";var nt=w(),P0=P(),ej=F(),tj=_(),ij=L(),nj=O(),aj=S(),XRr=C(),sj=E(),Ei=tt().factory,JRr=M(),R0=y(),xRr=Gk(),uj=rj();function YRr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ei();else if(arguments.length===1){if(t=arguments[0],!tj(t))throw new TypeError(R0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(nj(t,"prng")){if(!ij(t.prng))throw new TypeError(R0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ei({prng:t.prng})}else e=Ei(t)}else{if(u=arguments[0],r=arguments[1],a=xRr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!tj(t))throw new TypeError(R0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(nj(t,"prng")){if(!ij(t.prng))throw new TypeError(R0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ei({prng:t.prng})}else e=Ei(t)}else e=Ei()}return u===void 0?n=d:n=h,i=e.PRNG,nt(n,"NAME","cauchy"),t&&t.prng?(nt(n,"seed",null),nt(n,"seedLength",null),ej(n,"state",aj(null),XRr),nt(n,"stateLength",null),nt(n,"byteLength",null),nt(n,"toJSON",aj(null))):(P0(n,"seed",o),P0(n,"seedLength",f),ej(n,"state",l,p),P0(n,"stateLength",v),P0(n,"byteLength",c),nt(n,"toJSON",m)),nt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=JRr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return uj(e,u,r)}function d(g,q){return sj(g)||sj(q)||q<=0?NaN:uj(e,g,q)}}oj.exports=YRr});var fj=s((Zve,vj)=>{"use strict";var ZRr=f3(),$Rr=ZRr();vj.exports=$Rr});var pj=s(($ve,lj)=>{"use strict";var QRr=w(),cj=fj(),KRr=f3();QRr(cj,"factory",KRr);lj.exports=cj});var c3=s((Qve,yj)=>{"use strict";var at=w(),F0=P(),gj=F(),rFr=W().isPrimitive,mj=_(),dj=L(),hj=O(),qj=S(),eFr=C(),tFr=E(),Ni=wi().factory,iFr=M(),M0=y();function nFr(){var r,e,t,i,n;if(arguments.length===0)r=Ni();else if(arguments.length===1&&mj(arguments[0]))if(t=arguments[0],hj(t,"prng")){if(!dj(t.prng))throw new TypeError(M0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ni({prng:t.prng})}else r=Ni(t);else{if(n=arguments[0],!rFr(n))throw new TypeError(M0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!mj(t))throw new TypeError(M0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hj(t,"prng")){if(!dj(t.prng))throw new TypeError(M0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ni(n/2,.5,{prng:t.prng})}else r=Ni(n/2,.5,t)}else r=Ni(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,at(i,"NAME","chisquare"),t&&t.prng?(at(i,"seed",null),at(i,"seedLength",null),gj(i,"state",qj(null),eFr),at(i,"stateLength",null),at(i,"byteLength",null),at(i,"toJSON",qj(null))):(F0(i,"seed",a),F0(i,"seedLength",u),gj(i,"state",v,c),F0(i,"stateLength",o),F0(i,"byteLength",f),at(i,"toJSON",l)),at(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=iFr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function m(h){return tFr(h)||h<=0?NaN:r(h/2,.5)}}yj.exports=nFr});var wj=s((Kve,bj)=>{"use strict";var aFr=c3(),sFr=aFr();bj.exports=sFr});var kn=s((rfe,Nj)=>{"use strict";var uFr=w(),Ej=wj(),oFr=c3();uFr(Ej,"factory",oFr);Nj.exports=Ej});var l3=s((efe,Lj)=>{"use strict";var st=w(),B0=P(),Aj=F(),vFr=W().isPrimitive,Oj=_(),Sj=L(),Tj=O(),Ij=S(),fFr=C(),cFr=E(),Ai=kn().factory,lFr=M(),_j=V(),k0=y();function pFr(){var r,e,t,i,n;if(arguments.length===0)r=Ai();else if(arguments.length===1&&Oj(arguments[0]))if(t=arguments[0],Tj(t,"prng")){if(!Sj(t.prng))throw new TypeError(k0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ai({prng:t.prng})}else r=Ai(t);else{if(n=arguments[0],!vFr(n))throw new TypeError(k0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!Oj(t))throw new TypeError(k0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Tj(t,"prng")){if(!Sj(t.prng))throw new TypeError(k0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ai(n,{prng:t.prng})}else r=Ai(n,t)}else r=Ai(n)}return n===void 0?i=m:i=p,e=r.PRNG,st(i,"NAME","chi"),t&&t.prng?(st(i,"seed",null),st(i,"seedLength",null),Aj(i,"state",Ij(null),fFr),st(i,"stateLength",null),st(i,"byteLength",null),st(i,"toJSON",Ij(null))):(B0(i,"seed",a),B0(i,"seedLength",u),Aj(i,"state",v,c),B0(i,"stateLength",o),B0(i,"byteLength",f),st(i,"toJSON",l)),st(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=lFr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return _j(r())}function m(h){return cFr(h)||h<=0?NaN:_j(r(h))}}Lj.exports=pFr});var Rj=s((tfe,Pj)=>{"use strict";var gFr=l3(),mFr=gFr();Pj.exports=mFr});var Bj=s((ife,Mj)=>{"use strict";var dFr=w(),Fj=Rj(),hFr=l3();dFr(Fj,"factory",hFr);Mj.exports=Fj});var Cj=s((nfe,jj)=>{"use strict";var qFr=j().isPrimitive,yFr=W().isPrimitive,kj=y(),bFr=sr();function wFr(r,e){return!qFr(r)||bFr(r)?new TypeError(kj("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):yFr(e)?null:new TypeError(kj("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}jj.exports=wFr});var Vj=s((afe,Gj)=>{"use strict";var p3=E(),EFr=In(),NFr=Pr();function AFr(r,e,t){var i;return p3(r)||p3(e)||p3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+EFr(i)/NFr)/2)}Gj.exports=AFr});var Wj=s((sfe,Hj)=>{"use strict";var Uj=E();function OFr(r,e){return Uj(r)||Uj(e)?NaN:r<e?0:1}Hj.exports=OFr});var Xj=s((ufe,Dj)=>{"use strict";var SFr=S(),zj=E();function TFr(r){if(zj(r))return SFr(NaN);return e;function e(t){return zj(t)?NaN:t<r?0:1}}Dj.exports=TFr});var j0=s((ofe,xj)=>{"use strict";var IFr=w(),Jj=Wj(),_Fr=Xj();IFr(Jj,"factory",_Fr);xj.exports=Jj});var Zj=s((vfe,Yj)=>{"use strict";var LFr=S(),PFr=j0().factory,g3=E(),RFr=In(),FFr=Pr();function MFr(r,e){if(g3(r)||g3(e)||e<0)return LFr(NaN);if(e===0)return PFr(r);return t;function t(i){var n;return g3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+RFr(n)/FFr)/2)}}Yj.exports=MFr});var Kj=s((ffe,Qj)=>{"use strict";var BFr=w(),$j=Vj(),kFr=Zj();BFr($j,"factory",kFr);Qj.exports=$j});var m3=s((cfe,rC)=>{"use strict";var jFr=Kj(),CFr=1e4,GFr=1e-12;function VFr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<CFr;){if(u=(i+n)/2,n-i<GFr)return u;a=jFr(u,e,t),r>a?i=u:n=u,o+=1}return u}rC.exports=VFr});var tC=s((lfe,eC)=>{"use strict";var d3=E(),UFr=m3();function HFr(r,e,t){return d3(e)||d3(t)||d3(r)||t<0||r<0||r>1?NaN:t===0?e:UFr(r,e,t)}eC.exports=HFr});var nC=s((pfe,iC)=>{"use strict";var WFr=E();function zFr(r,e){return WFr(r)||r<0||r>1?NaN:e}iC.exports=zFr});var uC=s((gfe,sC)=>{"use strict";var DFr=S(),aC=E();function XFr(r){if(aC(r))return DFr(NaN);return e;function e(t){return aC(t)||t<0||t>1?NaN:r}}sC.exports=XFr});var h3=s((mfe,vC)=>{"use strict";var JFr=w(),oC=nC(),xFr=uC();JFr(oC,"factory",xFr);vC.exports=oC});var cC=s((dfe,fC)=>{"use strict";var YFr=S(),ZFr=h3().factory,q3=E(),$Fr=m3();function QFr(r,e){if(q3(r)||q3(e)||e<0)return YFr(NaN);if(e===0)return ZFr(r);return t;function t(i){return q3(i)||i<0||i>1?NaN:$Fr(i,r,e)}}fC.exports=QFr});var gC=s((hfe,pC)=>{"use strict";var KFr=w(),lC=tC(),rMr=cC();KFr(lC,"factory",rMr);pC.exports=lC});var dC=s((qfe,mC)=>{"use strict";var eMr=gC();function tMr(r,e,t){return eMr(r(),e,t)}mC.exports=tMr});var y3=s((yfe,AC)=>{"use strict";var me=w(),C0=P(),hC=F(),qC=_(),yC=L(),bC=O(),wC=S(),iMr=C(),G0=z().factory,EC=E(),nMr=M(),V0=y(),aMr=Cj(),NC=dC();function sMr(){var r,e,t,i,n,a;if(arguments.length===0)e=G0();else if(arguments.length===1){if(r=arguments[0],!qC(r))throw new TypeError(V0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(bC(r,"prng")){if(!yC(r.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=G0(r)}else{if(n=arguments[0],a=arguments[1],i=aMr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!qC(r))throw new TypeError(V0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(bC(r,"prng")){if(!yC(r.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=G0(r)}else e=G0()}return n===void 0?t=h:t=m,me(t,"NAME","cosine"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),hC(t,"state",wC(null),iMr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",wC(null)),me(t,"PRNG",e)):(C0(t,"seed",u),C0(t,"seedLength",o),hC(t,"state",c,l),C0(t,"stateLength",f),C0(t,"byteLength",v),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=nMr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return NC(e,n,a)}function h(d,g){return EC(d)||EC(g)||g<=0?NaN:NC(e,d,g)}}AC.exports=sMr});var SC=s((bfe,OC)=>{"use strict";var uMr=y3(),oMr=uMr();OC.exports=oMr});var _C=s((wfe,IC)=>{"use strict";var vMr=w(),TC=SC(),fMr=y3();vMr(TC,"factory",fMr);IC.exports=TC});var FC=s((Efe,RC)=>{"use strict";var LC=Cr().isPrimitive,b3=y(),PC=sr();function cMr(r,e){return!LC(r)||PC(r)?new TypeError(b3("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!LC(e)||PC(e)?new TypeError(b3("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(b3("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}RC.exports=cMr});var kC=s((Nfe,BC)=>{"use strict";var w3=gi(),Oi=J();function MC(r,e,t){var i,n,a,u,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(u=0;;){for(a===w3?(u=Oi(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Oi((a+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=MC(r,0,Oi(a/f)),!(l>w3/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===w3?(o=Oi(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Oi((n+1)/(a+1));;)if(i=r()-v,i=Oi(i/o),i<=a)return i+e}BC.exports=MC});var E3=s((Afe,zC)=>{"use strict";var de=w(),U0=P(),jC=F(),CC=_(),GC=L(),VC=O(),UC=S(),lMr=C(),H0=z().factory,HC=E(),Si=Tr(),pMr=M(),ut=y(),gMr=FC(),WC=kC();function mMr(){var r,e,t,i,n,a;if(arguments.length===0)e=H0();else if(arguments.length===1){if(r=arguments[0],!CC(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(VC(r,"prng")){if(!GC(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Si(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Si(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=H0(r)}else{if(n=arguments[0],a=arguments[1],i=gMr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!CC(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(VC(r,"prng")){if(!GC(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Si(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Si(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=H0(r)}else e=H0()}return n===void 0?t=h:t=m,de(t,"NAME","discrete-uniform"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),jC(t,"state",UC(null),lMr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",UC(null)),de(t,"PRNG",e)):(U0(t,"seed",u),U0(t,"seedLength",o),jC(t,"state",c,l),U0(t,"stateLength",f),U0(t,"byteLength",v),de(t,"toJSON",p),de(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=pMr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return WC(e,n,a)}function h(d,g){return HC(d)||HC(g)||!Si(d)||!Si(g)||d>g?NaN:WC(e,d,g)}}zC.exports=mMr});var XC=s((Ofe,DC)=>{"use strict";var dMr=E3(),hMr=dMr();DC.exports=hMr});var YC=s((Sfe,xC)=>{"use strict";var qMr=w(),JC=XC(),yMr=E3();qMr(JC,"factory",yMr);xC.exports=JC});var QC=s((Tfe,$C)=>{"use strict";var bMr=W().isPrimitive,wMr=re().isPrimitive,ZC=y();function EMr(r,e){return wMr(r)?bMr(e)?null:new TypeError(ZC("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(ZC("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}$C.exports=EMr});var rG=s((Ife,KC)=>{"use strict";var NMr=R();function AMr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*NMr(i)}KC.exports=AMr});var N3=s((_fe,oG)=>{"use strict";var he=w(),W0=P(),eG=F(),tG=_(),iG=L(),nG=O(),aG=S(),OMr=C(),z0=z().factory,sG=E(),SMr=i3(),TMr=M(),D0=y(),IMr=QC(),uG=rG();function _Mr(){var r,e,t,i,n,a;if(arguments.length===0)e=z0();else if(arguments.length===1){if(t=arguments[0],!tG(t))throw new TypeError(D0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(nG(t,"prng")){if(!iG(t.prng))throw new TypeError(D0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=z0(t)}else{if(a=arguments[0],r=arguments[1],n=IMr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!tG(t))throw new TypeError(D0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(nG(t,"prng")){if(!iG(t.prng))throw new TypeError(D0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=z0(t)}else e=z0()}return a===void 0?i=h:i=m,he(i,"NAME","erlang"),t&&t.prng?(he(i,"seed",null),he(i,"seedLength",null),eG(i,"state",aG(null),OMr),he(i,"stateLength",null),he(i,"byteLength",null),he(i,"toJSON",aG(null)),he(i,"PRNG",e)):(W0(i,"seed",u),W0(i,"seedLength",o),eG(i,"state",c,l),W0(i,"stateLength",f),W0(i,"byteLength",v),he(i,"toJSON",p),he(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=TMr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return uG(e,a,r)}function h(d,g){return sG(d)||sG(g)||!SMr(d)||g<=0?NaN:uG(e,d,g)}}oG.exports=_Mr});var fG=s((Lfe,vG)=>{"use strict";var LMr=N3(),PMr=LMr();vG.exports=PMr});var pG=s((Pfe,lG)=>{"use strict";var RMr=w(),cG=fG(),FMr=N3();RMr(cG,"factory",FMr);lG.exports=cG});var mG=s((Rfe,gG)=>{"use strict";var MMr=R();function BMr(r,e){return-MMr(1-r())/e}gG.exports=BMr});var A3=s((Ffe,EG)=>{"use strict";var qe=w(),X0=P(),dG=F(),kMr=W().isPrimitive,hG=_(),qG=L(),yG=O(),bG=S(),jMr=C(),J0=z().factory,CMr=E(),GMr=M(),x0=y(),wG=mG();function VMr(){var r,e,t,i;if(arguments.length===0)t=J0();else if(arguments.length===1&&hG(arguments[0]))if(e=arguments[0],yG(e,"prng")){if(!qG(e.prng))throw new TypeError(x0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=J0(e);else{if(r=arguments[0],!kMr(r))throw new TypeError(x0("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!hG(e))throw new TypeError(x0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(yG(e,"prng")){if(!qG(e.prng))throw new TypeError(x0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=J0(e)}else t=J0()}return r===void 0?i=p:i=l,qe(i,"NAME","exponential"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),dG(i,"state",bG(null),jMr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",bG(null)),qe(i,"PRNG",t)):(X0(i,"seed",n),X0(i,"seedLength",a),dG(i,"state",f,v),X0(i,"stateLength",u),X0(i,"byteLength",o),qe(i,"toJSON",c),qe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=GMr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return wG(t,r)}function p(m){return CMr(m)||m<=0?NaN:wG(t,m)}}EG.exports=VMr});var AG=s((Mfe,NG)=>{"use strict";var UMr=A3(),HMr=UMr();NG.exports=HMr});var TG=s((Bfe,SG)=>{"use strict";var WMr=w(),OG=AG(),zMr=A3();WMr(OG,"factory",zMr);SG.exports=OG});var PG=s((kfe,LG)=>{"use strict";var IG=W().isPrimitive,_G=y();function DMr(r,e){return IG(r)?IG(e)?null:new TypeError(_G("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(_G("invalid argument. First argument must be a positive number. Value: `%s`.",r))}LG.exports=DMr});var FG=s((jfe,RG)=>{"use strict";function XMr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}RG.exports=XMr});var O3=s((Cfe,UG)=>{"use strict";var ot=w(),Y0=P(),MG=F(),BG=_(),kG=L(),jG=O(),CG=S(),JMr=C(),Ti=kn().factory,GG=E(),xMr=M(),Z0=y(),YMr=PG(),VG=FG();function ZMr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Ti();else if(arguments.length===1){if(e=arguments[0],!BG(e))throw new TypeError(Z0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(jG(e,"prng")){if(!kG(e.prng))throw new TypeError(Z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ti({prng:e.prng})}else r=Ti(e)}else{if(a=arguments[0],u=arguments[1],n=YMr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!BG(e))throw new TypeError(Z0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(jG(e,"prng")){if(!kG(e.prng))throw new TypeError(Z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ti({prng:e.prng})}else r=Ti(e)}else r=Ti()}return a===void 0?i=d:i=h,t=r.PRNG,ot(i,"NAME","f"),e&&e.prng?(ot(i,"seed",null),ot(i,"seedLength",null),MG(i,"state",CG(null),JMr),ot(i,"stateLength",null),ot(i,"byteLength",null),ot(i,"toJSON",CG(null))):(Y0(i,"seed",o),Y0(i,"seedLength",f),MG(i,"state",l,p),Y0(i,"stateLength",v),Y0(i,"byteLength",c),ot(i,"toJSON",m)),ot(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=xMr(t.state),a===void 0?g.params=[]:g.params=[a,u],g}function h(){return VG(r,a,u)}function d(g,q){return GG(g)||GG(q)||g<=0||q<=0?NaN:VG(r,g,q)}}UG.exports=ZMr});var WG=s((Gfe,HG)=>{"use strict";var $Mr=O3(),QMr=$Mr();HG.exports=QMr});var XG=s((Vfe,DG)=>{"use strict";var KMr=w(),zG=WG(),rBr=O3();KMr(zG,"factory",rBr);DG.exports=zG});var YG=s((Ufe,xG)=>{"use strict";var JG=W().isPrimitive,eBr=j().isPrimitive,S3=sr(),T3=y();function tBr(r,e,t){return!JG(r)||S3(r)?new TypeError(T3("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!JG(e)||S3(e)?new TypeError(T3("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!eBr(t)||S3(t)?new TypeError(T3("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}xG.exports=tBr});var $G=s((Hfe,ZG)=>{"use strict";var iBr=H(),nBr=R();function aBr(r,e,t,i){return i+t*iBr(-nBr(r()),-1/e)}ZG.exports=aBr});var _3=s((Wfe,nV)=>{"use strict";var ye=w(),$0=P(),QG=F(),KG=_(),rV=L(),eV=O(),tV=S(),sBr=C(),Q0=z().factory,I3=E(),uBr=M(),K0=y(),oBr=YG(),iV=$G();function vBr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=Q0();else if(arguments.length===1){if(e=arguments[0],!KG(e))throw new TypeError(K0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(eV(e,"prng")){if(!rV(e.prng))throw new TypeError(K0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Q0(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=oBr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!KG(e))throw new TypeError(K0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(eV(e,"prng")){if(!rV(e.prng))throw new TypeError(K0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Q0(e)}else t=Q0()}return r===void 0?i=d:i=h,ye(i,"NAME","frechet"),e&&e.prng?(ye(i,"seed",null),ye(i,"seedLength",null),QG(i,"state",tV(null),sBr),ye(i,"stateLength",null),ye(i,"byteLength",null),ye(i,"toJSON",tV(null)),ye(i,"PRNG",t)):($0(i,"seed",o),$0(i,"seedLength",f),QG(i,"state",l,p),$0(i,"stateLength",v),$0(i,"byteLength",c),ye(i,"toJSON",m),ye(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=uBr(t.state),r===void 0?g.params=[]:g.params=[r,a,u],g}function h(){return iV(t,r,a,u)}function d(g,q,N){return I3(g)||I3(q)||I3(N)||g<=0||q<=0?NaN:iV(t,g,q,N)}}nV.exports=vBr});var sV=s((zfe,aV)=>{"use strict";var fBr=_3(),cBr=fBr();aV.exports=cBr});var vV=s((Dfe,oV)=>{"use strict";var lBr=w(),uV=sV(),pBr=_3();lBr(uV,"factory",pBr);oV.exports=uV});var lV=s((Xfe,cV)=>{"use strict";var gBr=J(),fV=R();function mBr(r,e){var t=r();return t===0&&(t=r()),gBr(fV(t)/fV(1-e))}cV.exports=mBr});var L3=s((Jfe,yV)=>{"use strict";var be=w(),rs=P(),pV=F(),gV=_(),dBr=en().isPrimitive,mV=L(),dV=O(),hV=S(),hBr=C(),es=z().factory,qBr=E(),yBr=M(),ts=y(),qV=lV();function bBr(){var r,e,t,i;if(arguments.length===0)e=es();else if(arguments.length===1&&gV(arguments[0]))if(r=arguments[0],dV(r,"prng")){if(!mV(r.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=es(r);else{if(i=arguments[0],!dBr(i))throw new TypeError(ts("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!gV(r))throw new TypeError(ts("invalid argument. Options argument must be an object. Value: `%s`.",r));if(dV(r,"prng")){if(!mV(r.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=es(r)}else e=es()}return i===void 0?t=p:t=l,be(t,"NAME","geometric"),r&&r.prng?(be(t,"seed",null),be(t,"seedLength",null),pV(t,"state",hV(null),hBr),be(t,"stateLength",null),be(t,"byteLength",null),be(t,"toJSON",hV(null)),be(t,"PRNG",e)):(rs(t,"seed",n),rs(t,"seedLength",a),pV(t,"state",f,v),rs(t,"stateLength",u),rs(t,"byteLength",o),be(t,"toJSON",c),be(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=yBr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return qV(e,i)}function p(m){return qBr(m)||m<0||m>1?NaN:qV(e,m)}}yV.exports=bBr});var wV=s((xfe,bV)=>{"use strict";var wBr=L3(),EBr=wBr();bV.exports=EBr});var AV=s((Yfe,NV)=>{"use strict";var NBr=w(),EV=wV(),ABr=L3();NBr(EV,"factory",ABr);NV.exports=EV});var TV=s((Zfe,SV)=>{"use strict";var OBr=j().isPrimitive,SBr=W().isPrimitive,OV=y(),TBr=sr();function IBr(r,e){return!OBr(r)||TBr(r)?new TypeError(OV("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):SBr(e)?null:new TypeError(OV("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}SV.exports=IBr});var LV=s(($fe,_V)=>{"use strict";var IV=R();function _Br(r,e,t){return e-t*IV(-IV(r()))}_V.exports=_Br});var P3=s((Qfe,CV)=>{"use strict";var we=w(),is=P(),PV=F(),RV=_(),FV=L(),MV=O(),BV=S(),LBr=C(),ns=z().factory,kV=E(),PBr=M(),as=y(),RBr=TV(),jV=LV();function FBr(){var r,e,t,i,n,a;if(arguments.length===0)t=ns();else if(arguments.length===1){if(e=arguments[0],!RV(e))throw new TypeError(as("invalid argument. Options argument must be an object. Value: `%s`.",e));if(MV(e,"prng")){if(!FV(e.prng))throw new TypeError(as("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ns(e)}else{if(a=arguments[0],r=arguments[1],n=RBr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!RV(e))throw new TypeError(as("invalid argument. Options argument must be an object. Value: `%s`.",e));if(MV(e,"prng")){if(!FV(e.prng))throw new TypeError(as("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ns(e)}else t=ns()}return a===void 0?i=h:i=m,we(i,"NAME","gumbel"),e&&e.prng?(we(i,"seed",null),we(i,"seedLength",null),PV(i,"state",BV(null),LBr),we(i,"stateLength",null),we(i,"byteLength",null),we(i,"toJSON",BV(null)),we(i,"PRNG",t)):(is(i,"seed",u),is(i,"seedLength",o),PV(i,"state",c,l),is(i,"stateLength",f),is(i,"byteLength",v),we(i,"toJSON",p),we(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=PBr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return jV(t,a,r)}function h(d,g){return kV(d)||kV(g)||g<=0?NaN:jV(t,d,g)}}CV.exports=FBr});var VV=s((Kfe,GV)=>{"use strict";var MBr=P3(),BBr=MBr();GV.exports=BBr});var WV=s((rce,HV)=>{"use strict";var kBr=w(),UV=VV(),jBr=P3();kBr(UV,"factory",jBr);HV.exports=UV});var DV=s((ece,zV)=>{"use strict";var R3=Ge().isPrimitive,jn=y();function CBr(r,e,t){return R3(r)?R3(e)?R3(t)?t>r?new RangeError(jn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(jn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(jn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(jn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(jn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}zV.exports=CBr});var XV=s((tce,GBr)=>{GBr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var xV=s((ice,JV)=>{"use strict";var VBr=E(),UBr=Tr(),HBr=mi(),WBr=I(),zBr=XV(),DBr=170;function XBr(r){return VBr(r)?NaN:UBr(r)?r<0?NaN:r<=DBr?zBr[r]:WBr:HBr(r+1)}JV.exports=XBr});var ZV=s((nce,YV)=>{"use strict";var JBr=xV();YV.exports=JBr});var QV=s((ace,$V)=>{"use strict";var vt=ZV();function xBr(r,e,t,i){var n,a,u;for(i<t?(n=vt(t)*vt(e+t-i)/(vt(e+t)*vt(t-i)),u=0):(n=vt(e)*vt(i)/(vt(i-t)*vt(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}$V.exports=xBr});var rU=s((sce,KV)=>{"use strict";var ss=QV();function YBr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=ss(r,n,a,u),t-o):(a=t,n=e-t,o=ss(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=ss(r,n,a,u),o):(n=e-t,a=t,o=ss(r,n,a,u),i-o))}KV.exports=YBr});var M3=s((uce,oU)=>{"use strict";var Ee=w(),us=P(),eU=F(),tU=_(),iU=L(),nU=O(),aU=S(),ZBr=C(),os=z().factory,F3=$2(),sU=I(),$Br=M(),vs=y(),QBr=DV(),uU=rU();function KBr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=os();else if(arguments.length===1){if(r=arguments[0],!tU(r))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nU(r,"prng")){if(!iU(r.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=os(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=QBr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!tU(r))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nU(r,"prng")){if(!iU(r.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=os(r)}else e=os()}return n===void 0?t=d:t=h,Ee(t,"NAME","hypergeometric"),r&&r.prng?(Ee(t,"seed",null),Ee(t,"seedLength",null),eU(t,"state",aU(null),ZBr),Ee(t,"stateLength",null),Ee(t,"byteLength",null),Ee(t,"toJSON",aU(null)),Ee(t,"PRNG",e)):(us(t,"seed",o),us(t,"seedLength",f),eU(t,"state",l,p),us(t,"stateLength",v),us(t,"byteLength",c),Ee(t,"toJSON",m),Ee(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=$Br(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return uU(e,n,a,u)}function d(g,q,N){return g===sU||q===sU||!F3(g)||!F3(q)||!F3(N)||N>g?NaN:uU(e,g,q,N)}}oU.exports=KBr});var fU=s((oce,vU)=>{"use strict";var rkr=M3(),ekr=rkr();vU.exports=ekr});var pU=s((vce,lU)=>{"use strict";var tkr=w(),cU=fU(),ikr=M3();tkr(cU,"factory",ikr);lU.exports=cU});var hU=s((fce,dU)=>{"use strict";var gU=W().isPrimitive,mU=y();function nkr(r,e){return gU(r)?gU(e)?null:new TypeError(mU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(mU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}dU.exports=nkr});var B3=s((cce,AU)=>{"use strict";var ft=w(),fs=P(),qU=F(),yU=_(),bU=L(),wU=O(),EU=S(),akr=C(),Ii=wi().factory,NU=E(),skr=M(),cs=y(),ukr=hU();function okr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Ii();else if(arguments.length===1){if(i=arguments[0],!yU(i))throw new TypeError(cs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(wU(i,"prng")){if(!bU(i.prng))throw new TypeError(cs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Ii({prng:i.prng})}else r=Ii(i)}else{if(e=arguments[0],t=arguments[1],u=ukr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!yU(i))throw new TypeError(cs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(wU(i,"prng")){if(!bU(i.prng))throw new TypeError(cs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Ii(e,t,{prng:i.prng})}else r=Ii(e,t,i)}else r=Ii(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,ft(a,"NAME","invgamma"),i&&i.prng?(ft(a,"seed",null),ft(a,"seedLength",null),qU(a,"state",EU(null),akr),ft(a,"stateLength",null),ft(a,"byteLength",null),ft(a,"toJSON",EU(null))):(fs(a,"seed",o),fs(a,"seedLength",f),qU(a,"state",l,p),fs(a,"stateLength",v),fs(a,"byteLength",c),ft(a,"toJSON",m)),ft(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=skr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return 1/r()}function d(g,q){return NU(g)||NU(q)||g<=0||q<=0?NaN:1/r(g,q)}}AU.exports=okr});var SU=s((lce,OU)=>{"use strict";var vkr=B3(),fkr=vkr();OU.exports=fkr});var _U=s((pce,IU)=>{"use strict";var ckr=w(),TU=SU(),lkr=B3();ckr(TU,"factory",lkr);IU.exports=TU});var FU=s((gce,RU)=>{"use strict";var LU=W().isPrimitive,PU=y();function pkr(r,e){return LU(r)?LU(e)?null:new TypeError(PU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(PU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}RU.exports=pkr});var kU=s((mce,BU)=>{"use strict";var MU=H();function gkr(r,e,t){var i=r();return MU(1-MU(1-i,1/t),1/e)}BU.exports=gkr});var k3=s((dce,zU)=>{"use strict";var Ne=w(),ls=P(),jU=F(),CU=_(),GU=L(),VU=O(),UU=S(),mkr=C(),ps=z().factory,HU=E(),dkr=M(),gs=y(),hkr=FU(),WU=kU();function qkr(){var r,e,t,i,n,a;if(arguments.length===0)e=ps();else if(arguments.length===1){if(r=arguments[0],!CU(r))throw new TypeError(gs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(VU(r,"prng")){if(!GU(r.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ps(r)}else{if(n=arguments[0],a=arguments[1],i=hkr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!CU(r))throw new TypeError(gs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(VU(r,"prng")){if(!GU(r.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ps(r)}else e=ps()}return n===void 0?t=h:t=m,Ne(t,"NAME","kumaraswamy"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),jU(t,"state",UU(null),mkr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",UU(null)),Ne(t,"PRNG",e)):(ls(t,"seed",u),ls(t,"seedLength",o),jU(t,"state",c,l),ls(t,"stateLength",f),ls(t,"byteLength",v),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=dkr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return WU(e,n,a)}function h(d,g){return HU(d)||HU(g)||d<=0||g<=0?NaN:WU(e,d,g)}}zU.exports=qkr});var XU=s((hce,DU)=>{"use strict";var ykr=k3(),bkr=ykr();DU.exports=bkr});var YU=s((qce,xU)=>{"use strict";var wkr=w(),JU=XU(),Ekr=k3();wkr(JU,"factory",Ekr);xU.exports=JU});var QU=s((yce,$U)=>{"use strict";var Nkr=j().isPrimitive,Akr=W().isPrimitive,ZU=y(),Okr=sr();function Skr(r,e){return!Nkr(r)||Okr(r)?new TypeError(ZU("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Akr(e)?null:new TypeError(ZU("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}$U.exports=Skr});var rH=s((bce,KU)=>{"use strict";var Tkr=A0(),Ikr=X(),_kr=R();function Lkr(r,e,t){var i=r()-.5;return e-t*Tkr(i)*_kr(1-2*Ikr(i))}KU.exports=Lkr});var j3=s((wce,oH)=>{"use strict";var Ae=w(),ms=P(),eH=F(),tH=_(),iH=L(),nH=O(),aH=S(),Pkr=C(),ds=z().factory,sH=E(),Rkr=M(),hs=y(),Fkr=QU(),uH=rH();function Mkr(){var r,e,t,i,n,a;if(arguments.length===0)e=ds();else if(arguments.length===1){if(r=arguments[0],!tH(r))throw new TypeError(hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nH(r,"prng")){if(!iH(r.prng))throw new TypeError(hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ds(r)}else{if(n=arguments[0],a=arguments[1],i=Fkr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!tH(r))throw new TypeError(hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nH(r,"prng")){if(!iH(r.prng))throw new TypeError(hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ds(r)}else e=ds()}return n===void 0?t=h:t=m,Ae(t,"NAME","laplace"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),eH(t,"state",aH(null),Pkr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",aH(null)),Ae(t,"PRNG",e)):(ms(t,"seed",u),ms(t,"seedLength",o),eH(t,"state",c,l),ms(t,"stateLength",f),ms(t,"byteLength",v),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Rkr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return uH(e,n,a)}function h(d,g){return sH(d)||sH(g)||g<=0?NaN:uH(e,d,g)}}oH.exports=Mkr});var fH=s((Ece,vH)=>{"use strict";var Bkr=j3(),kkr=Bkr();vH.exports=kkr});var pH=s((Nce,lH)=>{"use strict";var jkr=w(),cH=fH(),Ckr=j3();jkr(cH,"factory",Ckr);lH.exports=cH});var dH=s((Ace,mH)=>{"use strict";var Gkr=j().isPrimitive,Vkr=W().isPrimitive,gH=y(),Ukr=sr();function Hkr(r,e){return!Gkr(r)||Ukr(r)?new TypeError(gH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Vkr(e)?null:new TypeError(gH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}mH.exports=Hkr});var qH=s((Oce,hH)=>{"use strict";function Wkr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}hH.exports=Wkr});var bH=s((Sce,yH)=>{"use strict";function zkr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}yH.exports=zkr});var EH=s((Tce,wH)=>{"use strict";function Dkr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}wH.exports=Dkr});var AH=s((Ice,NH)=>{"use strict";function Xkr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}NH.exports=Xkr});var SH=s((_ce,OH)=>{"use strict";function Jkr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}OH.exports=Jkr});var LH=s((Lce,_H)=>{"use strict";var xkr=E(),TH=V(),IH=R(),Ykr=I(),Zkr=G(),$kr=qH(),Qkr=bH(),Kkr=EH(),rjr=AH(),ejr=SH(),tjr=.08913147449493408,ijr=2.249481201171875,njr=.807220458984375,ajr=.9399557113647461,sjr=.9836282730102539;function ujr(r){var e,t,i,n,a,u;return xkr(r)?NaN:r===1?Ykr:r===-1?Zkr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=$kr(t),e*(a*tjr+a*u)):n>=.25?(a=TH(-2*IH(n)),n-=.25,u=Qkr(n),e*(a/(ijr+u))):(n=TH(-IH(n)),n<3?(i=n-1.125,u=Kkr(i),e*(njr*n+u*n)):n<6?(i=n-3,u=rjr(i),e*(ajr*n+u*n)):(i=n-6,u=ejr(i),e*(sjr*n+u*n))))}_H.exports=ujr});var C3=s((Pce,PH)=>{"use strict";var ojr=LH();PH.exports=ojr});var FH=s((Rce,RH)=>{"use strict";var vjr=C3(),G3=E(),fjr=V();function cjr(r,e,t){var i,n;return G3(e)||G3(t)||G3(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*fjr(2),i+n*vjr(2*r-1))}RH.exports=cjr});var BH=s((Fce,MH)=>{"use strict";var ljr=S(),pjr=h3().factory,gjr=C3(),V3=E(),mjr=V();function djr(r,e){var t,i;if(V3(r)||V3(e)||e<0)return ljr(NaN);return e===0&&pjr(r),t=r,i=e*mjr(2),n;function n(a){return V3(a)||a<0||a>1?NaN:t+i*gjr(2*a-1)}}MH.exports=djr});var U3=s((Mce,jH)=>{"use strict";var hjr=w(),kH=FH(),qjr=BH();hjr(kH,"factory",qjr);jH.exports=kH});var GH=s((Bce,CH)=>{"use strict";var yjr=U3();function bjr(r,e,t){var i=yjr(1-r()/2,0,1);return e+t/(i*i)}CH.exports=bjr});var H3=s((kce,JH)=>{"use strict";var Oe=w(),qs=P(),VH=F(),UH=_(),HH=L(),WH=O(),zH=S(),wjr=C(),ys=z().factory,DH=E(),Ejr=M(),bs=y(),Njr=dH(),XH=GH();function Ajr(){var r,e,t,i,n,a;if(arguments.length===0)e=ys();else if(arguments.length===1){if(r=arguments[0],!UH(r))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(WH(r,"prng")){if(!HH(r.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ys(r)}else{if(n=arguments[0],a=arguments[1],i=Njr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!UH(r))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(WH(r,"prng")){if(!HH(r.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ys(r)}else e=ys()}return n===void 0?t=h:t=m,Oe(t,"NAME","levy"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),VH(t,"state",zH(null),wjr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",zH(null)),Oe(t,"PRNG",e)):(qs(t,"seed",u),qs(t,"seedLength",o),VH(t,"state",c,l),qs(t,"stateLength",f),qs(t,"byteLength",v),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Ejr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return XH(e,n,a)}function h(d,g){return DH(d)||DH(g)||g<=0?NaN:XH(e,d,g)}}JH.exports=Ajr});var YH=s((jce,xH)=>{"use strict";var Ojr=H3(),Sjr=Ojr();xH.exports=Sjr});var QH=s((Cce,$H)=>{"use strict";var Tjr=w(),ZH=YH(),Ijr=H3();Tjr(ZH,"factory",Ijr);$H.exports=ZH});var eW=s((Gce,rW)=>{"use strict";var _jr=j().isPrimitive,Ljr=W().isPrimitive,Pjr=sr(),KH=y();function Rjr(r,e){return!_jr(r)||Pjr(r)?new TypeError(KH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Ljr(e)?null:new TypeError(KH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}rW.exports=Rjr});var iW=s((Vce,tW)=>{"use strict";var Fjr=R();function Mjr(r,e,t){var i=r();return e+t*Fjr(i/(1-i))}tW.exports=Mjr});var W3=s((Uce,cW)=>{"use strict";var Se=w(),ws=P(),nW=F(),aW=_(),sW=L(),uW=O(),oW=S(),Bjr=C(),Es=z().factory,vW=E(),kjr=M(),Ns=y(),jjr=eW(),fW=iW();function Cjr(){var r,e,t,i,n,a;if(arguments.length===0)e=Es();else if(arguments.length===1){if(r=arguments[0],!aW(r))throw new TypeError(Ns("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uW(r,"prng")){if(!sW(r.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Es(r)}else{if(n=arguments[0],a=arguments[1],i=jjr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!aW(r))throw new TypeError(Ns("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uW(r,"prng")){if(!sW(r.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Es(r)}else e=Es()}return n===void 0?t=h:t=m,Se(t,"NAME","logistic"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),nW(t,"state",oW(null),Bjr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",oW(null)),Se(t,"PRNG",e)):(ws(t,"seed",u),ws(t,"seedLength",o),nW(t,"state",c,l),ws(t,"stateLength",f),ws(t,"byteLength",v),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=kjr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return fW(e,n,a)}function h(d,g){return vW(d)||vW(g)||g<=0?NaN:fW(e,d,g)}}cW.exports=Cjr});var pW=s((Hce,lW)=>{"use strict";var Gjr=W3(),Vjr=Gjr();lW.exports=Vjr});var dW=s((Wce,mW)=>{"use strict";var Ujr=w(),gW=pW(),Hjr=W3();Ujr(gW,"factory",Hjr);mW.exports=gW});var yW=s((zce,qW)=>{"use strict";var Wjr=j().isPrimitive,zjr=W().isPrimitive,hW=y(),Djr=sr();function Xjr(r,e){return!Wjr(r)||Djr(r)?new TypeError(hW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):zjr(e)?null:new TypeError(hW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}qW.exports=Xjr});var wW=s((Dce,bW)=>{"use strict";var Jjr=ir();function xjr(r,e,t){return Jjr(e+t*r())}bW.exports=xjr});var z3=s((Xce,_W)=>{"use strict";var ct=w(),As=P(),EW=F(),NW=_(),AW=L(),OW=O(),SW=S(),Yjr=C(),_i=tt().factory,TW=E(),Zjr=M(),Os=y(),$jr=yW(),IW=wW();function Qjr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=_i();else if(arguments.length===1){if(t=arguments[0],!NW(t))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",t));if(OW(t,"prng")){if(!AW(t.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=_i({prng:t.prng})}else e=_i(t)}else{if(u=arguments[0],r=arguments[1],a=$jr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!NW(t))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",t));if(OW(t,"prng")){if(!AW(t.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=_i({prng:t.prng})}else e=_i(t)}else e=_i()}return u===void 0?n=d:n=h,i=e.PRNG,ct(n,"NAME","lognormal"),t&&t.prng?(ct(n,"seed",null),ct(n,"seedLength",null),EW(n,"state",SW(null),Yjr),ct(n,"stateLength",null),ct(n,"byteLength",null),ct(n,"toJSON",SW(null))):(As(n,"seed",o),As(n,"seedLength",f),EW(n,"state",l,p),As(n,"stateLength",v),As(n,"byteLength",c),ct(n,"toJSON",m)),ct(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=Zjr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return IW(e,u,r)}function d(g,q){return TW(g)||TW(q)||q<=0?NaN:IW(e,g,q)}}_W.exports=Qjr});var PW=s((Jce,LW)=>{"use strict";var Kjr=z3(),rCr=Kjr();LW.exports=rCr});var MW=s((xce,FW)=>{"use strict";var eCr=w(),RW=PW(),tCr=z3();eCr(RW,"factory",tCr);FW.exports=RW});var D3=s((Yce,BW)=>{"use strict";var iCr=Xt(),nCr=J(),aCr=iCr-1;function sCr(){var r=nCr(1+aCr*Math.random());return r|0}BW.exports=sCr});var x3=s((Zce,VW)=>{"use strict";var Te=w(),lt=P(),kW=F(),X3=O(),uCr=_(),oCr=fr().isPrimitive,vCr=jr(),fCr=re().isPrimitive,jW=$n(),Ur=y(),Ss=Xt(),wr=Et(),Li=$e(),cCr=M(),CW=D3(),J3=Ss-1|0,lCr=Ss-1|0,pCr=16807,Ts=1,Is=2,pt=2,Er=4,Cn=5;function GW(r,e){var t;return e?t="option":t="argument",r.length<Cn+1?new RangeError(Ur("invalid %s. State array has insufficient length.",t)):r[0]!==Ts?new RangeError(Ur("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ts,r[0])):r[1]!==Is?new RangeError(Ur("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Is,r[1])):r[pt]!==1?new RangeError(Ur("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[pt])):r[Er]!==r.length-Cn?new RangeError(Ur("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Cn,r[Er])):null}function gCr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!uCr(r))throw new TypeError(Ur("invalid argument. Options argument must be an object. Value: `%s`.",r));if(X3(r,"copy")&&(i.copy=r.copy,!oCr(r.copy)))throw new TypeError(Ur("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(X3(r,"state")){if(t=r.state,i.state=!0,!jW(t))throw new TypeError(Ur("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=GW(t,!0),u)throw u;i.copy===!1?e=t:(e=new wr(t.length),Li(t.length,t,1,e,1)),t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,t[Er])}if(n===void 0)if(X3(r,"seed"))if(n=r.seed,i.seed=!0,fCr(n)){if(n>lCr)throw new RangeError(Ur("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(vCr(n)&&n.length>0)a=n.length,e=new wr(Cn+a),e[0]=Ts,e[1]=Is,e[pt]=1,e[Er]=a,Li.ndarray(a,n,1,0,e,1,Er+1),t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Ur("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=CW()|0}else n=CW()|0;return t===void 0&&(e=new wr(Cn+1),e[0]=Ts,e[1]=Is,e[pt]=1,e[Er]=1,e[Er+1]=n,t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Te(h,"NAME","minstd"),lt(h,"seed",o),lt(h,"seedLength",f),kW(h,"state",l,p),lt(h,"stateLength",v),lt(h,"byteLength",c),Te(h,"toJSON",m),Te(h,"MIN",1),Te(h,"MAX",Ss-1),Te(h,"normalized",d),Te(d,"NAME",h.NAME),lt(d,"seed",o),lt(d,"seedLength",f),kW(d,"state",l,p),lt(d,"stateLength",v),lt(d,"byteLength",c),Te(d,"toJSON",m),Te(d,"MIN",(h.MIN-1)/J3),Te(d,"MAX",(h.MAX-1)/J3),h;function o(){var g=e[Er];return Li(g,n,1,new wr(g),1)}function f(){return e[Er]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Li(g,e,1,new wr(g),1)}function p(g){var q;if(!jW(g))throw new TypeError(Ur("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(q=GW(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?Li(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new wr(g.length)),Li(g.length,g,1,e,1)),t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,e[Er])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=cCr(e),g.params=[],g}function h(){var g=t[0]|0;return g=pCr*g%Ss|0,t[0]=g,g|0}function d(){return(h()-1)/J3}}VW.exports=gCr});var HW=s(($ce,UW)=>{"use strict";var mCr=x3(),dCr=D3(),hCr=mCr({seed:dCr()});UW.exports=hCr});var DW=s((Qce,zW)=>{"use strict";var qCr=w(),WW=HW(),yCr=x3();qCr(WW,"factory",yCr);zW.exports=WW});var JW=s((Kce,XW)=>{"use strict";var bCr=E(),wCr=8;function ECr(r,e,t){var i,n;for(n=0;n<wCr;n++)if(i=r(),bCr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}XW.exports=ECr});var Y3=s((r5e,xW)=>{"use strict";var NCr=Xt(),ACr=J(),OCr=NCr-1;function SCr(){var r=ACr(1+OCr*Math.random());return r|0}xW.exports=SCr});var Q3=s((e5e,rz)=>{"use strict";var Ie=w(),gt=P(),YW=F(),Z3=O(),TCr=_(),ICr=fr().isPrimitive,_Cr=jr(),LCr=re().isPrimitive,ZW=$n(),Pi=$e(),PCr=J(),Nr=Et(),Gn=Xt(),RCr=M(),kr=y(),$W=JW(),QW=Y3(),$3=Gn-1|0,FCr=Gn-1|0,MCr=16807,Or=32,Ps=1,Rs=3,mt=2,Ri=Or+3,Ar=Or+6,Vn=Or+7,_s=Ri+1,Ls=Ri+2;function KW(r,e){var t;return e?t="option":t="argument",r.length<Vn+1?new RangeError(kr("invalid %s. State array has insufficient length.",t)):r[0]!==Ps?new RangeError(kr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ps,r[0])):r[1]!==Rs?new RangeError(kr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Rs,r[1])):r[mt]!==Or?new RangeError(kr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Or,r[mt])):r[Ri]!==2?new RangeError(kr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Ri])):r[Ar]!==r.length-Vn?new RangeError(kr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Vn,r[Ar])):null}function BCr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!TCr(r))throw new TypeError(kr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Z3(r,"copy")&&(i.copy=r.copy,!ICr(r.copy)))throw new TypeError(kr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Z3(r,"state")){if(t=r.state,i.state=!0,!ZW(t))throw new TypeError(kr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=KW(t,!0),u)throw u;i.copy===!1?e=t:(e=new Nr(t.length),Pi(t.length,t,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(Z3(r,"seed"))if(n=r.seed,i.seed=!0,LCr(n)){if(n>FCr)throw new RangeError(kr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(_Cr(n)&&n.length>0)a=n.length,e=new Nr(Vn+a),e[0]=Ps,e[1]=Rs,e[mt]=Or,e[Ri]=2,e[Ls]=n[0],e[Ar]=a,Pi.ndarray(a,n,1,0,e,1,Ar+1),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t=$W(h,t,Or),e[_s]=t[0];else throw new TypeError(kr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=QW()|0}else n=QW()|0;return t===void 0&&(e=new Nr(Vn+1),e[0]=Ps,e[1]=Rs,e[mt]=Or,e[Ri]=2,e[Ls]=n,e[Ar]=1,e[Ar+1]=n,t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t=$W(h,t,Or),e[_s]=t[0]),Ie(d,"NAME","minstd-shuffle"),gt(d,"seed",o),gt(d,"seedLength",f),YW(d,"state",l,p),gt(d,"stateLength",v),gt(d,"byteLength",c),Ie(d,"toJSON",m),Ie(d,"MIN",1),Ie(d,"MAX",Gn-1),Ie(d,"normalized",g),Ie(g,"NAME",d.NAME),gt(g,"seed",o),gt(g,"seedLength",f),YW(g,"state",l,p),gt(g,"stateLength",v),gt(g,"byteLength",c),Ie(g,"toJSON",m),Ie(g,"MIN",(d.MIN-1)/$3),Ie(g,"MAX",(d.MAX-1)/$3),d;function o(){var q=e[Ar];return Pi(q,n,1,new Nr(q),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return Pi(q,e,1,new Nr(q),1)}function p(q){var N;if(!ZW(q))throw new TypeError(kr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=KW(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?Pi(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Nr(q.length)),Pi(q.length,q,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function m(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=RCr(e),q.params=[],q}function h(){var q=e[Ls]|0;return q=MCr*q%Gn|0,e[Ls]=q,q|0}function d(){var q,N;return q=e[_s],N=PCr(Or*(q/Gn)),q=t[N],e[_s]=q,t[N]=h(),q}function g(){return(d()-1)/$3}}rz.exports=BCr});var tz=s((t5e,ez)=>{"use strict";var kCr=Q3(),jCr=Y3(),CCr=kCr({seed:jCr()});ez.exports=CCr});var az=s((i5e,nz)=>{"use strict";var GCr=w(),iz=tz(),VCr=Q3();GCr(iz,"factory",VCr);nz.exports=iz});var uz=s((n5e,sz)=>{"use strict";var UCr=ir();function HCr(r,e){for(var t=r(),i=1;t>UCr(-e);)i+=1,t*=r();return i-1}sz.exports=HCr});var vz=s((a5e,oz)=>{"use strict";var WCr=J();function zCr(r){return WCr(r)===r&&r<0}oz.exports=zCr});var cz=s((s5e,fz)=>{"use strict";var DCr=vz();fz.exports=DCr});var pz=s((u5e,lz)=>{"use strict";var XCr=cz(),JCr=_n();function xCr(r){return XCr(r)?NaN:JCr(r+1)}lz.exports=xCr});var mz=s((o5e,gz)=>{"use strict";var YCr=pz();gz.exports=YCr});var yz=s((v5e,qz)=>{"use strict";var ZCr=mz(),dz=J(),$Cr=A0(),QCr=V(),hz=X(),Fs=R(),KCr=E1(),rGr=1/12,eGr=1/360;function tGr(r,e){var t,i,n,a,u,o,f,v,c,l;for(t=QCr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-hz(c))+f,c+=e+.445,dz(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=$Cr(c)*.5-c,l=u*r()),a=.5-hz(c),(a>=.013||a>=l)&&(v=dz((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*Fs(e/v),c+=-e-KCr+v,c-=(rGr-eGr/(v*v))/v,v>=10&&c>=Fs(l*t)||(c=v*Fs(e)-e-ZCr(v),v>=0&&v<=9&&c>=Fs(l))))return v}}qz.exports=tGr});var wz=s((f5e,bz)=>{"use strict";var iGr=uz(),nGr=yz();function aGr(r,e){return e<30?iGr(r,e):nGr(r,e)}bz.exports=aGr});var K3=s((c5e,Iz)=>{"use strict";var _e=w(),Ms=P(),Ez=F(),sGr=W().isPrimitive,Nz=_(),Az=L(),Oz=O(),Sz=S(),uGr=C(),Bs=z().factory,oGr=E(),vGr=M(),ks=y(),Tz=wz();function fGr(){var r,e,t,i;if(arguments.length===0)t=Bs();else if(arguments.length===1&&Nz(arguments[0]))if(e=arguments[0],Oz(e,"prng")){if(!Az(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Bs(e);else{if(r=arguments[0],!sGr(r))throw new TypeError(ks("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!Nz(e))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Oz(e,"prng")){if(!Az(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Bs(e)}else t=Bs()}return r===void 0?i=p:i=l,_e(i,"NAME","poisson"),e&&e.prng?(_e(i,"seed",null),_e(i,"seedLength",null),Ez(i,"state",Sz(null),uGr),_e(i,"stateLength",null),_e(i,"byteLength",null),_e(i,"toJSON",Sz(null)),_e(i,"PRNG",t)):(Ms(i,"seed",n),Ms(i,"seedLength",a),Ez(i,"state",f,v),Ms(i,"stateLength",u),Ms(i,"byteLength",o),_e(i,"toJSON",c),_e(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=vGr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Tz(t,r)}function p(m){return oGr(m)||m<=0?NaN:Tz(t,m)}}Iz.exports=fGr});var Lz=s((l5e,_z)=>{"use strict";var cGr=K3(),lGr=cGr();_z.exports=lGr});var r6=s((p5e,Rz)=>{"use strict";var pGr=w(),Pz=Lz(),gGr=K3();pGr(Pz,"factory",gGr);Rz.exports=Pz});var Mz=s((g5e,Fz)=>{"use strict";var mGr=W().isPrimitive,dGr=j().isPrimitive,e6=y(),hGr=sr();function qGr(r,e){return mGr(r)?!dGr(e)||hGr(e)?new TypeError(e6("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(e6("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(e6("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Fz.exports=qGr});var a6=s((m5e,Hz)=>{"use strict";var dt=w(),js=P(),Bz=F(),Fi=O(),kz=_(),t6=Kr(),jz=fr().isPrimitive,Cz=L(),Gz=S(),yGr=C(),Vz=E(),Mi=r6().factory,Cs=wi().factory,i6=$e(),n6=lr(),Uz=Fn(),bGr=M(),Le=y(),wGr=Mz();function EGr(){var r,e,t,i,n,a,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=Mi(i);else if(arguments.length===1){if(i=arguments[0],!kz(i))throw new TypeError(Le("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Fi(i,"copy")&&!jz(i.copy))throw new TypeError(Le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Fi(i,"prng")){if(!Cz(i.prng))throw new TypeError(Le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Mi({prng:i.prng})}else{if(Fi(i,"state")&&!t6(i.state))throw new TypeError(Le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=Uz({},i),i.copy===!1?u=!1:i.state&&(i.state=i6(i.state.length,i.state,1,new n6(i.state.length),1)),i.copy=!1,t=Mi(i)}}else{if(v=arguments[0],f=arguments[1],o=wGr(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!kz(i))throw new TypeError(Le("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Fi(i,"copy")&&!jz(i.copy))throw new TypeError(Le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Fi(i,"prng")){if(!Cz(i.prng))throw new TypeError(Le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Mi({prng:i.prng})}else{if(Fi(i,"state")&&!t6(i.state))throw new TypeError(Le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=Uz({},i),i.copy===!1?u=!1:i.state&&(i.state=i6(i.state.length,i.state,1,new n6(i.state.length),1)),i.copy=!1,t=Mi(i)}}else i={copy:!1},t=Mi(i)}return i&&i.prng?v===void 0?r=Cs({prng:i.prng}):r=Cs(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=Cs({state:e,copy:!1}):r=Cs(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=q,a=t.PRNG,dt(n,"NAME","negative-binomial"),i&&i.prng?(dt(n,"seed",null),dt(n,"seedLength",null),Bz(n,"state",Gz(null),yGr),dt(n,"stateLength",null),dt(n,"byteLength",null),dt(n,"toJSON",Gz(null))):(js(n,"seed",c),js(n,"seedLength",l),Bz(n,"state",h,d),js(n,"stateLength",p),js(n,"byteLength",m),dt(n,"toJSON",g)),dt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function h(){return a.state}function d(A){if(!t6(A))throw new TypeError(Le("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));u&&(A=i6(A.length,A,1,new n6(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=bGr(a.state),v===void 0?A.params=[]:A.params=[v,f],A}function q(){return t(r())}function N(A,k){return Vz(A)||Vz(k)||k<=0||k>=1?NaN:t(r(A,k/(1-k)))}}Hz.exports=EGr});var zz=s((d5e,Wz)=>{"use strict";var NGr=a6(),AGr=NGr();Wz.exports=AGr});var Jz=s((h5e,Xz)=>{"use strict";var OGr=w(),Dz=zz(),SGr=a6();OGr(Dz,"factory",SGr);Xz.exports=Dz});var Zz=s((q5e,Yz)=>{"use strict";var TGr=j().isPrimitive,IGr=W().isPrimitive,xz=y(),_Gr=sr();function LGr(r,e){return!TGr(r)||_Gr(r)?new TypeError(xz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):IGr(e)?null:new TypeError(xz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Yz.exports=LGr});var Qz=s((y5e,$z)=>{"use strict";function PGr(r,e,t){return e+t*r()}$z.exports=PGr});var s6=s((b5e,sD)=>{"use strict";var ht=w(),Gs=P(),Kz=F(),rD=_(),eD=L(),tD=O(),iD=S(),RGr=C(),Bi=tt().factory,nD=E(),FGr=M(),Vs=y(),MGr=Zz(),aD=Qz();function BGr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Bi();else if(arguments.length===1){if(t=arguments[0],!rD(t))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(tD(t,"prng")){if(!eD(t.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Bi({prng:t.prng})}else e=Bi(t)}else{if(u=arguments[0],r=arguments[1],a=MGr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!rD(t))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(tD(t,"prng")){if(!eD(t.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Bi({prng:t.prng})}else e=Bi(t)}else e=Bi()}return u===void 0?n=d:n=h,i=e.PRNG,ht(n,"NAME","normal"),t&&t.prng?(ht(n,"seed",null),ht(n,"seedLength",null),Kz(n,"state",iD(null),RGr),ht(n,"stateLength",null),ht(n,"byteLength",null),ht(n,"toJSON",iD(null))):(Gs(n,"seed",o),Gs(n,"seedLength",f),Kz(n,"state",l,p),Gs(n,"stateLength",v),Gs(n,"byteLength",c),ht(n,"toJSON",m)),ht(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=FGr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return aD(e,u,r)}function d(g,q){return nD(g)||nD(q)||q<=0?NaN:aD(e,g,q)}}sD.exports=BGr});var oD=s((w5e,uD)=>{"use strict";var kGr=s6(),jGr=kGr();uD.exports=jGr});var cD=s((E5e,fD)=>{"use strict";var CGr=w(),vD=oD(),GGr=s6();CGr(vD,"factory",GGr);fD.exports=vD});var mD=s((N5e,gD)=>{"use strict";var lD=W().isPrimitive,pD=y();function VGr(r,e){return lD(r)?lD(e)?null:new TypeError(pD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(pD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}gD.exports=VGr});var hD=s((A5e,dD)=>{"use strict";var UGr=H();function HGr(r,e,t){return t/UGr(r(),1/e)}dD.exports=HGr});var u6=s((O5e,OD)=>{"use strict";var Pe=w(),Us=P(),qD=F(),yD=_(),bD=L(),wD=O(),ED=S(),WGr=C(),Hs=z().factory,ND=E(),zGr=M(),Ws=y(),DGr=mD(),AD=hD();function XGr(){var r,e,t,i,n,a;if(arguments.length===0)i=Hs();else if(arguments.length===1){if(t=arguments[0],!yD(t))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",t));if(wD(t,"prng")){if(!bD(t.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Hs(t)}else{if(r=arguments[0],e=arguments[1],a=DGr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!yD(t))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",t));if(wD(t,"prng")){if(!bD(t.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Hs(t)}else i=Hs()}return r===void 0?n=h:n=m,Pe(n,"NAME","pareto-type1"),t&&t.prng?(Pe(n,"seed",null),Pe(n,"seedLength",null),qD(n,"state",ED(null),WGr),Pe(n,"stateLength",null),Pe(n,"byteLength",null),Pe(n,"toJSON",ED(null)),Pe(n,"PRNG",i)):(Us(n,"seed",u),Us(n,"seedLength",o),qD(n,"state",c,l),Us(n,"stateLength",f),Us(n,"byteLength",v),Pe(n,"toJSON",p),Pe(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=zGr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function m(){return AD(i,r,e)}function h(d,g){return ND(d)||ND(g)||d<=0||g<=0?NaN:AD(i,d,g)}}OD.exports=XGr});var TD=s((S5e,SD)=>{"use strict";var JGr=u6(),xGr=JGr();SD.exports=xGr});var LD=s((T5e,_D)=>{"use strict";var YGr=w(),ID=TD(),ZGr=u6();YGr(ID,"factory",ZGr);_D.exports=ID});var RD=s((I5e,PD)=>{"use strict";var $Gr=V(),QGr=R();function KGr(r,e){return e*$Gr(-2*QGr(r()))}PD.exports=KGr});var o6=s((_5e,GD)=>{"use strict";var Re=w(),zs=P(),FD=F(),rVr=W().isPrimitive,MD=_(),BD=L(),kD=O(),jD=S(),eVr=C(),Ds=z().factory,tVr=E(),iVr=M(),Xs=y(),CD=RD();function nVr(){var r,e,t,i;if(arguments.length===0)t=Ds();else if(arguments.length===1&&MD(arguments[0]))if(e=arguments[0],kD(e,"prng")){if(!BD(e.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ds(e);else{if(r=arguments[0],!rVr(r))throw new TypeError(Xs("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!MD(e))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(kD(e,"prng")){if(!BD(e.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ds(e)}else t=Ds()}return r===void 0?i=p:i=l,Re(i,"NAME","rayleigh"),e&&e.prng?(Re(i,"seed",null),Re(i,"seedLength",null),FD(i,"state",jD(null),eVr),Re(i,"stateLength",null),Re(i,"byteLength",null),Re(i,"toJSON",jD(null)),Re(i,"PRNG",t)):(zs(i,"seed",n),zs(i,"seedLength",a),FD(i,"state",f,v),zs(i,"stateLength",u),zs(i,"byteLength",o),Re(i,"toJSON",c),Re(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=iVr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return CD(t,r)}function p(m){return tVr(m)||m<=0?NaN:CD(t,m)}}GD.exports=nVr});var UD=s((L5e,VD)=>{"use strict";var aVr=o6(),sVr=aVr();VD.exports=sVr});var zD=s((P5e,WD)=>{"use strict";var uVr=w(),HD=UD(),oVr=o6();uVr(HD,"factory",oVr);WD.exports=HD});var l6=s((R5e,KD)=>{"use strict";var qt=w(),Js=P(),DD=F(),ki=O(),XD=W().isPrimitive,JD=_(),v6=Kr(),xD=fr().isPrimitive,vVr=E(),YD=L(),ZD=S(),fVr=C(),xs=kn().factory,ji=tt().factory,f6=$e(),c6=lr(),$D=Fn(),cVr=M(),Yr=y(),QD=V();function lVr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=ji(n);else if(arguments.length===1)if(JD(arguments[0])){if(n=arguments[0],ki(n,"copy")&&!xD(n.copy))throw new TypeError(Yr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ki(n,"prng")){if(!YD(n.prng))throw new TypeError(Yr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=ji({prng:n.prng})}else{if(ki(n,"state")&&!v6(n.state))throw new TypeError(Yr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=$D({},n),n.copy===!1?u=!1:n.state&&(n.state=f6(n.state.length,n.state,1,new c6(n.state.length),1)),n.copy=!1,t=ji(n)}}else{if(o=arguments[0],!XD(o))throw new TypeError(Yr("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=ji(n)}else{if(o=arguments[0],!XD(o))throw new TypeError(Yr("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!JD(n))throw new TypeError(Yr("invalid argument. Options argument must be an object. Value: `%s`.",n));if(ki(n,"copy")&&!xD(n.copy))throw new TypeError(Yr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ki(n,"prng")){if(!YD(n.prng))throw new TypeError(Yr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=ji({prng:n.prng})}else{if(ki(n,"state")&&!v6(n.state))throw new TypeError(Yr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=$D({},n),n.copy===!1?u=!1:n.state&&(n.state=f6(n.state.length,n.state,1,new c6(n.state.length),1)),n.copy=!1,t=ji(n)}}return n&&n.prng?o===void 0?r=xs({prng:n.prng}):r=xs(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=xs({state:e,copy:!1}):r=xs(o,{state:e,copy:!1})),o===void 0?a=g:a=d,i=t.PRNG,qt(a,"NAME","t"),n&&n.prng?(qt(a,"seed",null),qt(a,"seedLength",null),DD(a,"state",ZD(null),fVr),qt(a,"stateLength",null),qt(a,"byteLength",null),qt(a,"toJSON",ZD(null))):(Js(a,"seed",f),Js(a,"seedLength",v),DD(a,"state",p,m),Js(a,"stateLength",c),Js(a,"byteLength",l),qt(a,"toJSON",h)),qt(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(q){if(!v6(q))throw new TypeError(Yr("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=f6(q.length,q,1,new c6(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=cVr(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/QD(r()/o)}function g(q){return vVr(q)||q<=0?NaN:t()/QD(r(q)/q)}}KD.exports=lVr});var eX=s((F5e,rX)=>{"use strict";var pVr=l6(),gVr=pVr();rX.exports=gVr});var nX=s((M5e,iX)=>{"use strict";var mVr=w(),tX=eX(),dVr=l6();mVr(tX,"factory",dVr);iX.exports=tX});var sX=s((B5e,aX)=>{"use strict";var p6=j().isPrimitive,Ys=y(),g6=sr();function hVr(r,e,t){return!p6(r)||g6(r)?new TypeError(Ys("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!p6(e)||g6(e)?new TypeError(Ys("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!p6(t)||g6(t)?new TypeError(Ys("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Ys("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}aX.exports=hVr});var vX=s((k5e,oX)=>{"use strict";var uX=V();function qVr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+uX(a*u)):(a=(t-e)*(t-i),t-uX(a*(1-u)))}oX.exports=qVr});var d6=s((j5e,dX)=>{"use strict";var Fe=w(),Zs=P(),fX=F(),cX=_(),lX=L(),pX=O(),gX=S(),yVr=C(),$s=z().factory,m6=E(),bVr=M(),Qs=y(),wVr=sX(),mX=vX();function EVr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=$s();else if(arguments.length===1){if(r=arguments[0],!cX(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(pX(r,"prng")){if(!lX(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$s(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=wVr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!cX(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(pX(r,"prng")){if(!lX(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$s(r)}else e=$s()}return n===void 0?t=d:t=h,Fe(t,"NAME","triangular"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),fX(t,"state",gX(null),yVr),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",gX(null)),Fe(t,"PRNG",e)):(Zs(t,"seed",o),Zs(t,"seedLength",f),fX(t,"state",l,p),Zs(t,"stateLength",v),Zs(t,"byteLength",c),Fe(t,"toJSON",m),Fe(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=bVr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return mX(e,n,a,u)}function d(g,q,N){return m6(g)||m6(q)||m6(N)||!(g<=N&&N<=q)?NaN:mX(e,g,q,N)}}dX.exports=EVr});var qX=s((C5e,hX)=>{"use strict";var NVr=d6(),AVr=NVr();hX.exports=AVr});var wX=s((G5e,bX)=>{"use strict";var OVr=w(),yX=qX(),SVr=d6();OVr(yX,"factory",SVr);bX.exports=yX});var OX=s((V5e,AX)=>{"use strict";var EX=j().isPrimitive,h6=y(),NX=sr();function TVr(r,e){return!EX(r)||NX(r)?new TypeError(h6("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!EX(e)||NX(e)?new TypeError(h6("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(h6("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}AX.exports=TVr});var TX=s((U5e,SX)=>{"use strict";function IVr(r,e,t){var i=r();return t*i+(1-i)*e}SX.exports=IVr});var q6=s((H5e,BX)=>{"use strict";var Me=w(),Ks=P(),IX=F(),_X=_(),LX=L(),PX=O(),RX=S(),_Vr=C(),ru=z().factory,FX=E(),LVr=M(),eu=y(),PVr=OX(),MX=TX();function RVr(){var r,e,t,i,n,a;if(arguments.length===0)e=ru();else if(arguments.length===1){if(r=arguments[0],!_X(r))throw new TypeError(eu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PX(r,"prng")){if(!LX(r.prng))throw new TypeError(eu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ru(r)}else{if(n=arguments[0],a=arguments[1],i=PVr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!_X(r))throw new TypeError(eu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PX(r,"prng")){if(!LX(r.prng))throw new TypeError(eu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ru(r)}else e=ru()}return n===void 0?t=h:t=m,Me(t,"NAME","uniform"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),IX(t,"state",RX(null),_Vr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",RX(null)),Me(t,"PRNG",e)):(Ks(t,"seed",u),Ks(t,"seedLength",o),IX(t,"state",c,l),Ks(t,"stateLength",f),Ks(t,"byteLength",v),Me(t,"toJSON",p),Me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=LVr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return MX(e,n,a)}function h(d,g){return FX(d)||FX(g)||d>=g?NaN:MX(e,d,g)}}BX.exports=RVr});var jX=s((W5e,kX)=>{"use strict";var FVr=q6(),MVr=FVr();kX.exports=MVr});var VX=s((z5e,GX)=>{"use strict";var BVr=w(),CX=jX(),kVr=q6();BVr(CX,"factory",kVr);GX.exports=CX});var zX=s((D5e,WX)=>{"use strict";var UX=W().isPrimitive,HX=y();function jVr(r,e){return UX(r)?UX(e)?null:new TypeError(HX("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(HX("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}WX.exports=jVr});var XX=s((X5e,DX)=>{"use strict";var CVr=H(),GVr=R();function VVr(r,e,t){return t*CVr(-GVr(1-r()),1/e)}DX.exports=VVr});var y6=s((J5e,rJ)=>{"use strict";var Be=w(),tu=P(),JX=F(),xX=_(),YX=L(),ZX=O(),$X=S(),UVr=C(),iu=z().factory,QX=E(),HVr=M(),nu=y(),WVr=zX(),KX=XX();function zVr(){var r,e,t,i,n,a;if(arguments.length===0)t=iu();else if(arguments.length===1){if(e=arguments[0],!xX(e))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ZX(e,"prng")){if(!YX(e.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=iu(e)}else{if(a=arguments[0],r=arguments[1],n=WVr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!xX(e))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ZX(e,"prng")){if(!YX(e.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=iu(e)}else t=iu()}return r===void 0?i=h:i=m,Be(i,"NAME","weibull"),e&&e.prng?(Be(i,"seed",null),Be(i,"seedLength",null),JX(i,"state",$X(null),UVr),Be(i,"stateLength",null),Be(i,"byteLength",null),Be(i,"toJSON",$X(null)),Be(i,"PRNG",t)):(tu(i,"seed",u),tu(i,"seedLength",o),JX(i,"state",c,l),tu(i,"stateLength",f),tu(i,"byteLength",v),Be(i,"toJSON",p),Be(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=HVr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return KX(t,a,r)}function h(d,g){return QX(d)||QX(g)||d<=0||g<=0?NaN:KX(t,d,g)}}rJ.exports=zVr});var tJ=s((x5e,eJ)=>{"use strict";var DVr=y6(),XVr=DVr();eJ.exports=XVr});var aJ=s((Y5e,nJ)=>{"use strict";var JVr=w(),iJ=tJ(),xVr=y6();JVr(iJ,"factory",xVr);nJ.exports=iJ});var uJ=s((Z5e,sJ)=>{"use strict";var YVr=cr(),ZVr=Cr().isPrimitive,$Vr=y(),QVr=Tu();function KVr(r){if(ZVr(r))return r;if(YVr(r))return QVr(r);throw new TypeError($Vr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}sJ.exports=KVr});var vJ=s(($5e,oJ)=>{"use strict";var rUr=uJ();oJ.exports=rUr});var cJ=s((Q5e,fJ)=>{"use strict";var B=nr(),eUr=EF().factory,tUr=FF().factory,iUr=eB().factory,nUr=VB().factory,aUr=wk().factory,sUr=kk().factory,uUr=pj().factory,oUr=Bj().factory,vUr=kn().factory,fUr=_C().factory,cUr=YC().factory,lUr=pG().factory,pUr=TG().factory,gUr=XG().factory,mUr=vV().factory,dUr=wi().factory,hUr=AV().factory,qUr=WV().factory,yUr=pU().factory,bUr=tt().factory,wUr=_U().factory,EUr=YU().factory,NUr=pH().factory,AUr=QH().factory,OUr=dW().factory,SUr=MW().factory,TUr=DW().factory,IUr=az().factory,_Ur=z().factory,LUr=Jz().factory,PUr=cD().factory,RUr=LD().factory,FUr=r6().factory,MUr=zD().factory,BUr=nX().factory,kUr=wX().factory,jUr=VX().factory,CUr=aJ().factory,GUr=vJ();function VUr(r){return B(r,"arcsine",eUr),B(r,"bernoulli",tUr),B(r,"beta",iUr),B(r,"betaprime",nUr),B(r,"binomial",aUr),B(r,"boxMuller",sUr),B(r,"cauchy",uUr),B(r,"chi",oUr),B(r,"chisquare",vUr),B(r,"cosine",fUr),B(r,"discreteUniform",cUr),B(r,"erlang",lUr),B(r,"exponential",pUr),B(r,"f",gUr),B(r,"frechet",mUr),B(r,"gamma",dUr),B(r,"geometric",hUr),B(r,"gumbel",qUr),B(r,"hypergeometric",yUr),B(r,"improvedZiggurat",bUr),B(r,"invgamma",wUr),B(r,"kumaraswamy",EUr),B(r,"laplace",NUr),B(r,"levy",AUr),B(r,"logistic",OUr),B(r,"lognormal",SUr),B(r,"minstd",TUr),B(r,"minstdShuffle",IUr),B(r,"mt19937",_Ur),B(r,"negativeBinomial",LUr),B(r,"normal",PUr),B(r,"pareto1",RUr),B(r,"poisson",FUr),B(r,"rayleigh",MUr),B(r,"t",BUr),B(r,"triangular",kUr),B(r,"uniform",jUr),B(r,"weibull",CUr),r.base={},B(r.base,"normalizeSeed",GUr),r}fJ.exports=VUr});var pJ=s((K5e,lJ)=>{"use strict";var UUr=_(),au=O(),HUr=Cr().isPrimitive,WUr=re().isPrimitive,zUr=Ge().isPrimitive,DUr=jo().isPrimitive,Un=y();function XUr(r,e){return UUr(e)?au(e,"period")&&(r.period=e.period,!WUr(e.period))?new TypeError(Un("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):au(e,"amplitude")&&(r.amplitude=e.amplitude,!DUr(e.amplitude))?new TypeError(Un("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):au(e,"offset")&&(r.offset=e.offset,!HUr(e.offset))?new TypeError(Un("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):au(e,"iter")&&(r.iter=e.iter,!zUr(e.iter))?new TypeError(Un("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(Un("invalid argument. Options argument must be an object. Value: `%s`.",e))}lJ.exports=XUr});var hJ=s((r8e,dJ)=>{"use strict";var b6=w(),gJ=ia(),JUr=v3(),xUr=Da(),YUr=za(),ZUr=Pr(),$Ur=pJ();function mJ(r){var e,t,i,n,a,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=$Ur(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=ZUr/e.period,o=e.amplitude/YUr,f=0,t={},b6(t,"next",v),b6(t,"return",c),gJ&&b6(t,gJ,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*xUr(JUr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return mJ(e)}}dJ.exports=mJ});var yJ=s((e8e,qJ)=>{"use strict";var QUr=hJ();qJ.exports=QUr});var wJ=s((t8e,bJ)=>{"use strict";var KUr=nr(),rHr=yJ();function eHr(r){return KUr(r,"iterSawtoothWave",rHr),r}bJ.exports=eHr});var NJ=s((i8e,EJ)=>{"use strict";var tHr=17976931348623157e292;EJ.exports=tHr});var su=s((n8e,AJ)=>{"use strict";var iHr=709.782712893384;AJ.exports=iHr});var SJ=s((a8e,OJ)=>{"use strict";var nHr=ir();function aHr(r,e){var t,i,n,a;if(n=nHr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}OJ.exports=aHr});var IJ=s((s8e,TJ)=>{"use strict";function sHr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}TJ.exports=sHr});var LJ=s((u8e,_J)=>{"use strict";function uHr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}_J.exports=uHr});var RJ=s((o8e,PJ)=>{"use strict";function oHr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}PJ.exports=oHr});var MJ=s((v8e,FJ)=>{"use strict";function vHr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}FJ.exports=vHr});var kJ=s((f8e,BJ)=>{"use strict";function fHr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}BJ.exports=fHr});var CJ=s((c8e,jJ)=>{"use strict";function cHr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}jJ.exports=cHr});var VJ=s((l8e,GJ)=>{"use strict";function lHr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}GJ.exports=lHr});var HJ=s((p8e,UJ)=>{"use strict";function pHr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}UJ.exports=pHr});var XJ=s((g8e,DJ)=>{"use strict";var gHr=E(),WJ=ir(),mHr=te(),dHr=I(),hHr=G(),qHr=IJ(),yHr=LJ(),bHr=RJ(),wHr=MJ(),EHr=kJ(),NHr=CJ(),AHr=VJ(),OHr=HJ(),uu=1e-300,SHr=13877787807814457e-33,zJ=.8450629115104675,THr=.12837916709551256,IHr=1,_Hr=-.0023621185607526594,LHr=1,PHr=-.009864944034847148,RHr=1,FHr=-.0098649429247001,MHr=1;function BHr(r){var e,t,i,n,a,u,o,f;if(gHr(r))return NaN;if(r===dHr)return 0;if(r===hHr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<SHr?1-r:(i=r*r,n=THr+i*qHr(i),a=IHr+i*yHr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=_Hr+a*bHr(a),f=LHr+a*wHr(a),e?1+zJ+o/f:1-zJ-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=PHr+a*EHr(a),a=RHr+a*NHr(a);else{if(r<-6)return 2-uu;n=FHr+a*AHr(a),a=MHr+a*OHr(a)}return i=mHr(t,0),n=WJ(-(i*i)-.5625)*WJ((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-uu:uu*uu}DJ.exports=BHr});var Vt=s((m8e,JJ)=>{"use strict";var kHr=XJ();JJ.exports=kHr});var ZJ=s((d8e,YJ)=>{"use strict";var jHr=Vt(),xJ=V(),CHr=ir(),GHr=Pr();function VHr(r,e){var t,i,n,a,u;if(a=jHr(xJ(e)),a!==0&&r>1){for(i=CHr(-e)/xJ(GHr*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}YJ.exports=VHr});var w6=s((h8e,$J)=>{"use strict";var UHr=-708.3964185322641;$J.exports=UHr});var ex=s((q8e,rx)=>{"use strict";var Ci=ir(),ou=H(),HHr=R(),QJ=su(),KJ=w6();function WHr(r,e){var t,i;return i=r*HHr(e),e>=1?i<QJ&&-e>KJ?t=ou(e,r)*Ci(-e):r>=1?t=ou(e/Ci(e/r),r):t=Ci(i-e):i>KJ?t=ou(e,r)*Ci(-e):e/r<QJ?t=ou(e/Ci(e/r),r):t=Ci(i-e),t}rx.exports=WHr});var E6=s((y8e,tx)=>{"use strict";function zHr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}tx.exports=zHr});var nx=s((b8e,ix)=>{"use strict";var DHr=Function;ix.exports=DHr});var sx=s((w8e,ax)=>{"use strict";var XHr=nx();ax.exports=XHr});var ox=s((E8e,ux)=>{"use strict";var JHr=sx(),xHr=E6();function YHr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new JHr(e)();function a(u){return xHr(r,u)}}ux.exports=YHr});var cx=s((N8e,fx)=>{"use strict";var ZHr=w(),vx=E6(),$Hr=ox();ZHr(vx,"factory",$Hr);fx.exports=vx});var Ut=s((A8e,lx)=>{"use strict";var QHr=2220446049250313e-31;lx.exports=QHr});var gx=s((O8e,px)=>{"use strict";var KHr=eval;px.exports=KHr});var dx=s((S8e,mx)=>{"use strict";var rWr=gx();function eWr(){var r;try{rWr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}mx.exports=eWr});var N6=s((T8e,hx)=>{"use strict";var tWr=dx();hx.exports=tWr});var yx=s((I8e,qx)=>{"use strict";var vu=X(),iWr=Ut(),nWr=1e6;function aWr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||iWr,a=o.maxTerms||nWr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,vu(i*u)>=vu(n)||--a===0)break}else do n=r(),u+=n;while(vu(i*u)<vu(n)&&--a);return u}qx.exports=aWr});var Ex=s((_8e,wx)=>{"use strict";var bx=X(),sWr=Ut(),uWr=1e6;function oWr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||sWr,n=u.maxTerms||uWr,a=u.initialValue||0;do i=r(),a+=i;while(bx(t*a)<bx(i)&&--n);return a}wx.exports=oWr});var fu=s((L8e,Nx)=>{"use strict";var vWr=N6(),fWr=yx(),cWr=Ex(),A6;vWr()?A6=fWr:A6=cWr;Nx.exports=A6});var Ox=s((P8e,Ax)=>{"use strict";function lWr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}Ax.exports=lWr});var Tx=s((R8e,Sx)=>{"use strict";var pWr=X(),gWr=R(),mWr=Ut(),dWr=fu(),hWr=Ox();function qWr(r){var e,t;return r<=-1?NaN:(t=pWr(r),t>.95?gWr(1+r)-r:t<mWr?-r*r/2:(e={initialValue:-r},dWr(hWr(r),e)))}Sx.exports=qWr});var _x=s((F8e,Ix)=>{"use strict";var yWr=Tx();Ix.exports=yWr});var Px=s((M8e,Lx)=>{"use strict";function bWr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Lx.exports=bWr});var Fx=s((B8e,Rx)=>{"use strict";function wWr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}Rx.exports=wWr});var Bx=s((k8e,Mx)=>{"use strict";function EWr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Mx.exports=EWr});var jx=s((j8e,kx)=>{"use strict";function NWr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}kx.exports=NWr});var Gx=s((C8e,Cx)=>{"use strict";function AWr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Cx.exports=AWr});var Ux=s((G8e,Vx)=>{"use strict";function OWr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Vx.exports=OWr});var Wx=s((V8e,Hx)=>{"use strict";function SWr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Hx.exports=SWr});var Dx=s((U8e,zx)=>{"use strict";function TWr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}zx.exports=TWr});var Jx=s((H8e,Xx)=>{"use strict";function IWr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Xx.exports=IWr});var Yx=s((W8e,xx)=>{"use strict";var _Wr=cx(),LWr=_x(),PWr=Vt(),O6=V(),RWr=ir(),FWr=Ye(),MWr=Px(),BWr=Fx(),kWr=Bx(),jWr=jx(),CWr=Gx(),GWr=Ux(),VWr=Wx(),UWr=Dx(),HWr=Jx(),Hr=[0,0,0,0,0,0,0,0,0,0];function WWr(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-LWr(i),a=r*n,u=O6(2*n),e<r&&(u=-u),Hr[0]=MWr(u),Hr[1]=BWr(u),Hr[2]=kWr(u),Hr[3]=jWr(u),Hr[4]=CWr(u),Hr[5]=GWr(u),Hr[6]=VWr(u),Hr[7]=UWr(u),Hr[8]=HWr(u),Hr[9]=-.0005967612901927463,t=_Wr(Hr,1/r),t*=RWr(-a)/O6(FWr*r),e<r&&(t=-t),t+=PWr(O6(a))/2,t}xx.exports=WWr});var $x=s((z8e,Zx)=>{"use strict";function zWr(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}Zx.exports=zWr});var Kx=s((D8e,Qx)=>{"use strict";var DWr=fu(),XWr=$x();function JWr(r,e,t){var i,n;return t=t||0,n=XWr(r,e),i=DWr(n,{initialValue:t}),i}Qx.exports=JWr});var eY=s((X8e,rY)=>{"use strict";function xWr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}rY.exports=xWr});var iY=s((J8e,tY)=>{"use strict";var YWr=eY();tY.exports=YWr});var aY=s((x8e,nY)=>{"use strict";var ZWr=iY();nY.exports=ZWr});var oY=s((Y8e,uY)=>{"use strict";var $Wr=h1(),sY=E(),S6=G();function QWr(r,e){return sY(r)||sY(e)?NaN:r===S6||e===S6?S6:r===e&&r===0?$Wr(r)?r:e:r<e?r:e}uY.exports=QWr});var fY=s((Z8e,vY)=>{"use strict";var KWr=oY();vY.exports=KWr});var lY=s(($8e,cY)=>{"use strict";var rzr=10.900511;cY.exports=rzr});var T6=s((Q8e,pY)=>{"use strict";var ezr=2.718281828459045;pY.exports=ezr});var dY=s((K8e,mY)=>{"use strict";var tzr=aY(),izr=_n(),nzr=mi(),azr=Je(),szr=V(),uzr=X(),yt=ir(),Hn=H(),I6=O1(),_6=fY(),gY=R(),cu=su(),Wn=w6(),L6=lY(),ozr=T6();function vzr(r,e){var t,i,n,a,u,o,f;return n=r+L6-.5,f=(e-r-L6+.5)/n,r<1?e<=Wn?yt(r*gY(e)-e-izr(r)):Hn(e,r)*yt(-e)/nzr(r):(uzr(f*f*r)<=100&&r>150?(t=r*(azr(f)-f)+e*(.5-L6)/n,t=yt(t)):(a=r*gY(e/n),u=r-e,_6(a,u)<=Wn||I6(a,u)>=cu?(i=u/r,_6(a,u)/2>Wn&&I6(a,u)/2<cu?(o=Hn(e/n,r/2)*yt(u/2),t=o*o):_6(a,u)/4>Wn&&I6(a,u)/4<cu&&e>r?(o=Hn(e/n,r/4)*yt(u/4),t=o*o,t*=t):i>Wn&&i<cu?t=Hn(e*yt(i)/n,r):t=yt(a+u)):t=Hn(e/n,r)*yt(u)),t*=szr(n/ozr)/tzr(r),t)}mY.exports=vzr});var qY=s((rle,hY)=>{"use strict";var fzr=.34657359027997264;hY.exports=fzr});var bY=s((ele,yY)=>{"use strict";function czr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}yY.exports=czr});var SY=s((tle,OY)=>{"use strict";var lzr=E(),wY=er(),P6=ie(),pzr=pi(),EY=I(),gzr=G(),NY=xr(),mzr=qY(),dzr=bY(),hzr=709.782712893384,R6=.6931471803691238,F6=19082149292705877e-26,AY=1.4426950408889634,qzr=38.816242111356935,yzr=1.0397207708399179;function bzr(r){var e,t,i,n,a,u,o,f,v,c,l,p,m;if(r===EY||lzr(r))return r;if(r===gzr)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=qzr){if(i)return-1;if(f>=hzr)return EY}if(u=wY(f)|0,f>mzr)f<yzr?i?(n=r+R6,a=-F6,m=-1):(n=r-R6,a=F6,m=1):(i?m=AY*r-.5:m=AY*r+.5,m|=0,l=m,n=r-l*R6,a=l*F6),r=n-a,c=n-r-a;else{if(u<1016070144)return r;m=0}return e=.5*r,v=r*e,o=1+v*dzr(v),l=3-o*e,p=v*((o-l)/(6-r*l)),m===0?r-(r*p-v):(t=pzr(NY+m<<20,0),p=r*(p-c)-c,p-=v,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(f=1-(p-r),m===1024?(n=wY(f)+(m<<20)|0,f=P6(f,n)):f*=t,f-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=P6(l,n),f=l-(p-r)):(n=NY-m<<20|0,l=P6(l,n),f=r-(p+l),f+=1),f*=t,f))}OY.exports=bzr});var M6=s((ile,TY)=>{"use strict";var wzr=SY();TY.exports=wzr});var PY=s((nle,LY)=>{"use strict";var IY=E(),_Y=X(),Ezr=M6(),Nzr=R(),Azr=H(),Ozr=e0();function Szr(r,e){var t;if(IY(r)||IY(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((_Y(e*(r-1))<.5||_Y(e)<.2)&&(t=Nzr(r)*e,t<.5))return Ezr(t)}else if(Ozr(e)!==e)return NaN;return Azr(r,e)-1}LY.exports=Szr});var FY=s((ale,RY)=>{"use strict";var Tzr=PY();RY.exports=Tzr});var BY=s((sle,MY)=>{"use strict";function Izr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}MY.exports=Izr});var jY=s((ule,kY)=>{"use strict";function _zr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}kY.exports=_zr});var GY=s((ole,CY)=>{"use strict";function Lzr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}CY.exports=Lzr});var UY=s((vle,VY)=>{"use strict";var B6=R(),Pzr=Ut(),Rzr=BY(),Fzr=jY(),Mzr=GY(),Bzr=.15896368026733398,kzr=.5281534194946289,jzr=.45201730728149414;function Czr(r,e,t){var i,n,a,u;if(r<Pzr)return-B6(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=B6(r);while(r>=3);t=r-2}return a=t*(r+1),u=Rzr(t),n+=a*Bzr+a*u,n}return r<1&&(n+=-B6(r),t=e,e=r,r+=1),r<=1.5?(a=Fzr(e),i=e*t,n+=i*kzr+i*a,n):(a=t*e,u=Mzr(-t),n+=a*jzr+a*u,n)}VY.exports=Czr});var XY=s((fle,DY)=>{"use strict";var HY=mi(),WY=M6(),Gzr=Je(),Vzr=E(),zY=UY();function Uzr(r){return Vzr(r)?NaN:r<0?r<-.5?HY(1+r)-1:WY(-Gzr(r)+zY(r+2,r+1,r)):r<2?WY(zY(r+1,r,r-1)):HY(1+r)-1}DY.exports=Uzr});var xY=s((cle,JY)=>{"use strict";var Hzr=XY();JY.exports=Hzr});var ZY=s((lle,YY)=>{"use strict";function Wzr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}YY.exports=Wzr});var QY=s((ple,$Y)=>{"use strict";var zzr=FY(),Dzr=fu(),Xzr=xY(),Jzr=ZY();function xzr(r,e,t){var i,n,a,u,o;return n=Xzr(r),a=(n+1)/r,u=zzr(e,r),n-=u,n/=r,o=Jzr(r,e),u+=1,i=t?a:0,n=-u*Dzr(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}$Y.exports=xzr});var k6=s((gle,KY)=>{"use strict";var Yzr=11754943508222875e-54;KY.exports=Yzr});var eZ=s((mle,rZ)=>{"use strict";var lu=X(),Zr=k6(),Zzr=Ut(),$zr=1e6;function Qzr(r,e,t){var i,n,a,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],a=v[0],u===0&&(u=Zr),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=Zr),o=v[1]+v[0]/o,o===0&&(o=Zr),f=1/f,n=o*f,u*=n);while(lu(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=Zr),o=v[1]+v[0]/o,o===0&&(o=Zr),f=1/f,n=o*f,u*=n);while(v&&lu(n-1)>e&&--t);return a/u}function Kzr(r,e,t){var i,n,a,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=Zr),u=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=Zr),u=f[1]+f[0]/u,u===0&&(u=Zr),o=1/o,n=u*o,a*=n);while(f&&lu(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=Zr),u=f[1]+f[0]/u,u===0&&(u=Zr),o=1/o,n=u*o,a*=n);while(f&&lu(n-1)>e&&--t);return a}function rDr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||$zr,n=i.tolerance||Zzr,i.keep?Kzr(r,n,t):Qzr(r,n,t)}rZ.exports=rDr});var nZ=s((dle,iZ)=>{"use strict";var tZ=X(),eDr=Ut(),Gi=k6(),tDr=1e6;function iDr(r,e,t){var i,n,a,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=Gi),a=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=Gi),a=f[1]+f[0]/a,a===0&&(a=Gi),u=1/u,i=a*u,o*=i);while(f&&tZ(i-1)>e&&--t);return n/o}function nDr(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=Gi),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=Gi),n=o[1]+o[0]/n,n===0&&(n=Gi),a=1/a,i=n*a,u*=i);while(o&&tZ(i-1)>e&&--t);return u}function aDr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||eDr,t=i.maxIter||tDr,i.keep?nDr(r,n,t):iDr(r,n,t)}iZ.exports=aDr});var sZ=s((hle,aZ)=>{"use strict";var sDr=N6(),uDr=eZ(),oDr=nZ(),j6;sDr()?j6=uDr:j6=oDr;aZ.exports=j6});var oZ=s((qle,uZ)=>{"use strict";function vDr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}uZ.exports=vDr});var fZ=s((yle,vZ)=>{"use strict";var fDr=sZ(),cDr=oZ();function lDr(r,e){var t=cDr(r,e);return 1/(e-r+1+fDr(t))}vZ.exports=lDr});var bZ=s((ble,yZ)=>{"use strict";var pDr=_n(),gDr=J(),zn=mi(),cZ=X(),mDr=ir(),lZ=H(),Wr=R(),dDr=w1(),pZ=NJ(),hDr=q1(),gZ=su(),qDr=I(),yDr=SJ(),bDr=ZJ(),mZ=ex(),wDr=Yx(),C6=Kx(),dZ=dY(),EDr=QY(),hZ=fZ(),NDr=170;function qZ(r,e,t,i){var n,a,u,o,f,v,c,l,p,m,h,d,g,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=NDr&&!a)return l&&e*4<r?(p=e*Wr(r)-r,p+=Wr(hZ(e,r))):!l&&e>4*r?(p=e*Wr(r)-r,o=0,p+=Wr(C6(e,r,o)/e)):(p=qZ(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Wr(p)-e+(e-.5)*Wr(e),p+=Wr(hDr)):(p=e*Wr(r)-r,o=0,p+=Wr(C6(e,r,o)/e)):p=Wr(p)+pDr(e)),p>gZ?qDr:mDr(p);switch(c=e<30&&e<=r+1&&r<gZ,c?(q=gDr(e),m=q===e,f=m?!1:cZ(q-e)===.5):m=f=!1,m&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<dDr&&e>1?u=6:r<.5?-.4/Wr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,a&&e>20&&(h=cZ((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=yDr(e,r),a===!1&&(p*=zn(e));break;case 1:p=bDr(e,r),a===!1&&(p*=zn(e));break;case 2:p=a?dZ(e,r):mZ(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:zn(e),a||p>=1||pZ*p>o?(o/=p,a||e<1||pZ/e>o?(o*=-e,n=!0):o=0):o=0)),p*=C6(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=EDr(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?dZ(e,r):mZ(e,r),p!==0&&(p*=hZ(e,r));break;case 5:p=wDr(e,r),r>=e&&(l=!l);break;case 6:p=a?lZ(r,e)/zn(e+1):lZ(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:zn(e),p=d-p),p}yZ.exports=qZ});var G6=s((wle,wZ)=>{"use strict";var ADr=bZ();wZ.exports=ADr});var NZ=s((Ele,EZ)=>{"use strict";var ODr=G6(),V6=E(),SDr=I();function TDr(r,e,t){return V6(r)||V6(e)||V6(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===SDr?1:ODr(r*t,e)}EZ.exports=TDr});var SZ=s((Nle,OZ)=>{"use strict";var IDr=S(),_Dr=j0().factory,LDr=G6(),AZ=E(),PDr=I();function RDr(r,e){if(AZ(r)||AZ(e)||r<0||e<=0)return IDr(NaN);if(r===0)return _Dr(0);return t;function t(i){return i<=0?0:i===PDr?1:LDr(i*e,r)}}OZ.exports=RDr});var U6=s((Ale,IZ)=>{"use strict";var FDr=w(),TZ=NZ(),MDr=SZ();FDr(TZ,"factory",MDr);IZ.exports=TZ});var LZ=s((Ole,_Z)=>{"use strict";var BDr=U6();function kDr(r,e){return BDr(r,e/2,.5)}_Z.exports=kDr});var RZ=s((Sle,PZ)=>{"use strict";var jDr=U6().factory;function CDr(r){return jDr(r/2,.5)}PZ.exports=CDr});var BZ=s((Tle,MZ)=>{"use strict";var GDr=w(),FZ=LZ(),VDr=RZ();GDr(FZ,"factory",VDr);MZ.exports=FZ});var GZ=s((Ile,CZ)=>{"use strict";var UDr=_(),HDr=O(),WDr=ha(),kZ=y(),jZ=["values","indices","*"];function zDr(r,e){return UDr(e)?HDr(e,"returns")&&(r.returns=e.returns,WDr(jZ,r.returns)===-1)?new TypeError(kZ('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",jZ.join('", "'),r.returns)):null:new TypeError(kZ("invalid argument. Options argument must be an object. Value: `%s`.",e))}CZ.exports=zDr});var UZ=s((_le,VZ)=>{"use strict";var DDr=O();function XDr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),DDr(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}VZ.exports=XDr});var WZ=s((Lle,HZ)=>{"use strict";var JDr=O();function xDr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),JDr(t,n)?t[n].push(a):t[n]=[a];return t}HZ.exports=xDr});var DZ=s((Ple,zZ)=>{"use strict";var YDr=O();function ZDr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),YDr(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}zZ.exports=ZDr});var YZ=s((Rle,xZ)=>{"use strict";var XZ=jr(),JZ=y(),$Dr=GZ(),QDr=UZ(),KDr=WZ(),rXr=DZ();function eXr(r,e,t){var i,n,a;if(!XZ(r))throw new TypeError(JZ("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=$Dr(i,e),n)throw n;a=t}if(!XZ(a))throw new TypeError(JZ("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?QDr(r,a):i.returns==="indices"?KDr(r,a):rXr(r,a)}xZ.exports=eXr});var $Z=s((Fle,ZZ)=>{"use strict";var tXr=YZ();ZZ.exports=tXr});var KZ=s((Mle,QZ)=>{"use strict";function iXr(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}QZ.exports=iXr});var t$=s((Ble,e$)=>{"use strict";var nXr=cr(),aXr=j().isPrimitive,sXr=_(),uXr=sr(),r$=O(),H6=y();function oXr(r,e){return sXr(e)?r$(e,"alpha")&&(r.alpha=e.alpha,!aXr(r.alpha)||uXr(r.alpha))?new TypeError(H6("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):r$(e,"groups")&&(r.groups=e.groups,!nXr(r.groups))?new TypeError(H6("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(H6("invalid argument. Options argument must be an object. Value: `%s`.",e))}e$.exports=oXr});var v$=s((kle,o$)=>{"use strict";var i$=E(),pu=Lr(),n$=H(),vXr=X(),a$=e1(),fXr=gi(),s$=Ba(),cXr=H2(),lXr=ka(),pXr=fXr+1,u$=1e308;function gXr(r,e){var t,i;return i$(r)||i$(e)||pu(e)?NaN:pu(r)||r===0||e<lXr||vXr(r)>pXr&&e<=0?r:e>s$?0*r:e<cXr?(t=n$(10,-(e+s$)),i=r*u$*t,pu(i)?r:a$(i)/u$/t):(t=n$(10,-e),i=r*t,pu(i)?r:a$(i)/t)}o$.exports=gXr});var c$=s((jle,f$)=>{"use strict";var mXr=v$();f$.exports=mXr});var g$=s((Cle,p$)=>{"use strict";var dXr=re(),hXr=_(),qXr=fr().isPrimitive,l$=O(),W6=y(),z6=c$();function yXr(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!hXr(r))throw new TypeError(W6("invalid argument. First argument must be an object. Value: `%s`.",r));if(l$(r,"digits")){if(!dXr(r.digits))throw new TypeError(W6("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(l$(r,"decision")){if(!qXr(r.decision))throw new TypeError(W6("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+z6(this.pValue,-t)+`
`,i+="    statistic: "+z6(this.statistic,-t)+`
`,i+="    df: "+z6(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}p$.exports=yXr});var h$=s((Gle,d$)=>{"use strict";var bXr=jr(),wXr=_(),Ht=nr(),EXr=an(),gu=y(),NXr=BZ(),AXr=$Z(),m$=R(),OXr=KZ(),SXr=t$(),TXr=g$();function IXr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A;if(f=[],e=arguments.length,v={},wXr(arguments[e-1])&&(r=arguments[e-1],e-=1,m=SXr(v,r),m))throw m;if(v.groups){if(n=AXr(arguments[0],v.groups),i=EXr(n),e=i.length,e<2)throw new Error(gu("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)f.push(n[i[A]])}else for(A=0;A<e;A++)f.push(arguments[A]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),A=0;A<e;A++){if(p=f[A],!bXr(p))throw new TypeError(gu("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(gu("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[A]=p.length-1,u+=q[A],t+=1/q[A],N[A]=OXr(p),o+=q[A]*N[A],h+=q[A]*m$(N[A])}if(o/=u,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(gu("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*m$(o)-h,l/=1+(t-1/u)/(3*(e-1)),g=e-1,c=1-NXr(l,g),d={},Ht(d,"rejected",c<=a),Ht(d,"alpha",a),Ht(d,"pValue",c),Ht(d,"statistic",l),Ht(d,"df",g),Ht(d,"method","Bartlett's test of equal variances"),Ht(d,"print",TXr),d}d$.exports=IXr});var y$=s((Vle,q$)=>{"use strict";var _Xr=h$();q$.exports=_Xr});var w$=s((Ule,b$)=>{"use strict";var D6=E(),LXr=Ze();function PXr(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,v=1,D6(a)===!1)for(v;v<r;v++){if(u+=t,f=e[u],D6(f)){a=f;break}(f>a||f===a&&LXr(f))&&(a=f),i[o]=a,o+=n}if(D6(a))for(v;v<r;v++)i[o]=a,o+=n;return i}b$.exports=PXr});var N$=s((Hle,E$)=>{"use strict";var X6=E(),RXr=Ze();function FXr(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=a,l=1,X6(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],X6(c)){o=c;break}(c>o||c===o&&RXr(c))&&(o=c),n[v]=o,v+=a}if(X6(o))for(l;l<r;l++)n[v]=o,v+=a;return n}E$.exports=FXr});var S$=s((Wle,O$)=>{"use strict";var MXr=w(),A$=w$(),BXr=N$();MXr(A$,"ndarray",BXr);O$.exports=A$});var I$=s((zle,T$)=>{"use strict";var kXr=S$();T$.exports=kXr});var L$=s((Dle,_$)=>{"use strict";var jXr=E(),CXr=Ze();function GXr(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],jXr(a))return a;(a>i||a===i&&CXr(a))&&(i=a)}return i}_$.exports=GXr});var R$=s((Xle,P$)=>{"use strict";var VXr=E(),UXr=Ze();function HXr(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],VXr(u))return u;(u>n||u===n&&UXr(u))&&(n=u)}return n}P$.exports=HXr});var B$=s((Jle,M$)=>{"use strict";var WXr=w(),F$=L$(),zXr=R$();WXr(F$,"ndarray",zXr);M$.exports=F$});var j$=s((xle,k$)=>{"use strict";var DXr=B$();k$.exports=DXr});var V$=s((Yle,G$)=>{"use strict";var C$=E(),XXr=Ze();function JXr(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(a=e[u],C$(a))return a;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],C$(f))return f;(f>a||f===a&&XXr(f))&&(a=f)}return a}G$.exports=JXr});var W$=s((Zle,H$)=>{"use strict";var U$=E(),xXr=Ze();function YXr(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],U$(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],U$(c))return c;(c>o||c===o&&xXr(c))&&(o=c)}return o}H$.exports=YXr});var X$=s(($le,D$)=>{"use strict";var ZXr=w(),z$=V$(),$Xr=W$();ZXr(z$,"ndarray",$Xr);D$.exports=z$});var x$=s((Qle,J$)=>{"use strict";var QXr=Vt(),KXr=V(),J6=E();function rJr(r,e,t){var i,n;return J6(r)||J6(e)||J6(t)||t<0?NaN:t===0?r<e?0:1:(i=t*KXr(2),n=r-e,.5*QXr(-n/i))}J$.exports=rJr});var Z$=s((Kle,Y$)=>{"use strict";var eJr=S(),tJr=j0().factory,x6=E(),iJr=V(),nJr=Vt();function aJr(r,e){var t;if(x6(r)||x6(e)||e<0)return eJr(NaN);if(e===0)return tJr(r);return t=e*iJr(2),i;function i(n){var a;return x6(n)?NaN:(a=n-r,.5*nJr(-a/t))}}Y$.exports=aJr});var K$=s((r7e,Q$)=>{"use strict";var sJr=w(),$$=x$(),uJr=Z$();sJr($$,"factory",uJr);Q$.exports=$$});var tQ=s((e7e,eQ)=>{"use strict";var rQ=E(),oJr=R(),vJr=Ye(),fJr=T6();function cJr(r,e){return rQ(r)||rQ(e)||e<=0?NaN:.5*oJr(vJr*fJr*e*e)}eQ.exports=cJr});var nQ=s((t7e,iQ)=>{"use strict";var lJr=tQ();iQ.exports=lJr});var uQ=s((i7e,sQ)=>{"use strict";var aQ=E();function pJr(r,e){return aQ(r)||aQ(e)||e<=0?NaN:0}sQ.exports=pJr});var vQ=s((n7e,oQ)=>{"use strict";var gJr=uQ();oQ.exports=gJr});var cQ=s((a7e,fQ)=>{"use strict";var mJr=J(),dJr=[hJr,qJr,yJr,bJr,wJr,EJr,NJr,AJr,OJr,SJr,TJr,IJr,_Jr,LJr,PJr,RJr,FJr,MJr,BJr,kJr,jJr,CJr,GJr,VJr,UJr,HJr,WJr,zJr,DJr,XJr,JJr,xJr,YJr,ZJr,$Jr,QJr,KJr,rxr,exr,txr,ixr,nxr,axr,sxr,uxr,oxr,vxr,fxr,cxr,lxr,pxr,gxr,mxr,dxr,hxr,qxr,yxr,bxr,wxr,Exr,Nxr,Axr,Oxr,Sxr,Txr,Ixr,_xr,Lxr,Pxr,Rxr,Fxr,Mxr,Bxr,kxr,jxr,Cxr,Gxr,Vxr,Uxr,Hxr,Wxr,zxr,Dxr,Xxr,Jxr,xxr,Yxr,Zxr,$xr,Qxr,Kxr,rYr,eYr,tYr,iYr,nYr,aYr,sYr,uYr,oYr,vYr];function hJr(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function qJr(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function yJr(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function bJr(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function wJr(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function EJr(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function NJr(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function AJr(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function OJr(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function SJr(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function TJr(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function IJr(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function _Jr(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function LJr(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function PJr(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function RJr(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function FJr(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function MJr(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function BJr(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function kJr(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function jJr(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function CJr(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function GJr(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function VJr(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function UJr(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function HJr(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function WJr(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function zJr(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function DJr(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function XJr(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function JJr(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function xJr(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function YJr(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function ZJr(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function $Jr(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function QJr(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function KJr(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function rxr(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function exr(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function txr(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function ixr(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function nxr(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function axr(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function sxr(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function uxr(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function oxr(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function vxr(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function fxr(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function cxr(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function lxr(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function pxr(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function gxr(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function mxr(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function dxr(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function hxr(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function qxr(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function yxr(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function bxr(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function wxr(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function Exr(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function Nxr(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function Axr(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function Oxr(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function Sxr(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function Txr(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function Ixr(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function _xr(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function Lxr(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function Pxr(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function Rxr(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function Fxr(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function Mxr(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function Bxr(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function kxr(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function jxr(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function Cxr(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function Gxr(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function Vxr(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function Uxr(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function Hxr(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function Wxr(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function zxr(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function Dxr(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function Xxr(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function Jxr(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function xxr(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function Yxr(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function Zxr(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function $xr(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function Qxr(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function Kxr(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function rYr(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function eYr(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function tYr(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function iYr(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function nYr(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function aYr(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function sYr(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function uYr(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function oYr(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function vYr(){return 1}function fYr(r){var e=mJr(r),t=dJr[e];return t(2*r-(2*e+1))}fQ.exports=fYr});var dQ=s((s7e,mQ)=>{"use strict";var lQ=ir(),cYr=I(),pQ=cQ(),gQ=.5641895835477563;function lYr(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?gQ/r:(e=r*r,gQ*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):pQ(400/(4+r)):r<-26.7?cYr:(e=r*r,r<-6.1?2*lQ(e):2*lQ(e)-pQ(400/(4-r)))}mQ.exports=lYr});var Y6=s((u7e,hQ)=>{"use strict";var pYr=dQ();hQ.exports=pYr});var bQ=s((o7e,yQ)=>{"use strict";var gYr=R(),mYr=Je(),dYr=Va(),hYr=Vt(),qYr=Y6(),yYr=G(),Z6=E(),qQ=.7071067811865475;function bYr(r,e,t){var i;return Z6(r)||Z6(e)||Z6(t)||t<0?NaN:t===0?r<e?yYr:0:(i=(r-e)/t,i<-1?gYr(qYr(-i*qQ)/2)-dYr(i)/2:mYr(-hYr(i*qQ)/2))}yQ.exports=bYr});var NQ=s((v7e,EQ)=>{"use strict";var wQ=E(),wYr=G();function EYr(r,e){return wQ(r)||wQ(e)?NaN:r<e?wYr:0}EQ.exports=EYr});var SQ=s((f7e,OQ)=>{"use strict";var NYr=S(),AQ=E(),AYr=G();function OYr(r){if(AQ(r))return NYr(NaN);return e;function e(t){return AQ(t)?NaN:t<r?AYr:0}}OQ.exports=OYr});var _Q=s((c7e,IQ)=>{"use strict";var SYr=w(),TQ=NQ(),TYr=SQ();SYr(TQ,"factory",TYr);IQ.exports=TQ});var FQ=s((l7e,RQ)=>{"use strict";var IYr=S(),_Yr=_Q().factory,LQ=E(),LYr=Je(),PYr=Va(),RYr=Vt(),FYr=Y6(),MYr=R(),PQ=.7071067811865475;function BYr(r,e){if(LQ(r)||LQ(e)||e<0)return IYr(NaN);if(e===0)return _Yr(r);return t;function t(i){var n=(i-r)/e;return n<-1?MYr(FYr(-n*PQ)/2)-PYr(n)/2:LYr(-RYr(n*PQ)/2)}}RQ.exports=BYr});var kQ=s((p7e,BQ)=>{"use strict";var kYr=w(),MQ=bQ(),jYr=FQ();kYr(MQ,"factory",jYr);BQ.exports=MQ});var $6=s((g7e,jQ)=>{"use strict";var CYr=1.8378770664093456;jQ.exports=CYr});var VQ=s((m7e,GQ)=>{"use strict";var GYr=R(),CQ=H(),VYr=$6(),UYr=G(),HYr=I(),Q6=E();function WYr(r,e,t){var i,n,a;return Q6(r)||Q6(e)||Q6(t)||t<0?NaN:t===0?r===e?HYr:UYr:(i=CQ(t,2),n=-.5*(2*GYr(t)+VYr),a=-1/(2*i),n+a*CQ(r-e,2))}GQ.exports=WYr});var WQ=s((d7e,HQ)=>{"use strict";var zYr=I(),DYr=G(),UQ=E();function XYr(r,e){return UQ(r)||UQ(e)?NaN:r===e?zYr:DYr}HQ.exports=XYr});var XQ=s((h7e,DQ)=>{"use strict";var JYr=S(),xYr=I(),YYr=G(),zQ=E();function ZYr(r){if(zQ(r))return JYr(NaN);return e;function e(t){return zQ(t)?NaN:t===r?xYr:YYr}}DQ.exports=ZYr});var YQ=s((q7e,xQ)=>{"use strict";var $Yr=w(),JQ=WQ(),QYr=XQ();$Yr(JQ,"factory",QYr);xQ.exports=JQ});var KQ=s((y7e,QQ)=>{"use strict";var KYr=S(),rZr=YQ().factory,eZr=$6(),ZQ=E(),$Q=H(),tZr=R();function iZr(r,e){var t,i,n;if(ZQ(r)||ZQ(e)||e<0)return KYr(NaN);if(e===0)return rZr(r);return t=$Q(e,2),i=-.5*(2*tZr(e)+eZr),n=-1/(2*t),a;function a(u){return i+n*$Q(u-r,2)}}QQ.exports=iZr});var tK=s((b7e,eK)=>{"use strict";var nZr=w(),rK=VQ(),aZr=KQ();nZr(rK,"factory",aZr);eK.exports=rK});var aK=s((w7e,nK)=>{"use strict";var iK=E();function sZr(r,e){return iK(r)||iK(e)||e<=0?NaN:r}nK.exports=sZr});var uK=s((E7e,sK)=>{"use strict";var uZr=aK();sK.exports=uZr});var fK=s((N7e,vK)=>{"use strict";var oK=E();function oZr(r,e){return oK(r)||oK(e)||e<=0?NaN:r}vK.exports=oZr});var lK=s((A7e,cK)=>{"use strict";var vZr=fK();cK.exports=vZr});var gK=s((O7e,pK)=>{"use strict";var K6=E(),fZr=ir(),cZr=H();function lZr(r,e,t){return K6(r)||K6(e)||K6(t)||t<=0?NaN:fZr(e*r+.5*cZr(t*r,2))}pK.exports=lZr});var dK=s((S7e,mK)=>{"use strict";var pZr=S(),r4=E(),gZr=ir(),mZr=H();function dZr(r,e){if(r4(r)||r4(e)||e<=0)return pZr(NaN);return t;function t(i){return r4(i)?NaN:gZr(r*i+.5*mZr(e*i,2))}}mK.exports=dZr});var yK=s((T7e,qK)=>{"use strict";var hZr=w(),hK=gK(),qZr=dK();hZr(hK,"factory",qZr);qK.exports=hK});var EK=s((I7e,wK)=>{"use strict";var bK=E();function yZr(r,e){return bK(r)||bK(e)||e<=0?NaN:r}wK.exports=yZr});var AK=s((_7e,NK)=>{"use strict";var bZr=EK();NK.exports=bZr});var TK=s((L7e,SK)=>{"use strict";var wZr=ir(),OK=H(),EZr=V(),NZr=Ye(),AZr=I(),e4=E();function OZr(r,e,t){var i,n,a;return e4(r)||e4(e)||e4(t)||t<0?NaN:t===0?r===e?AZr:0:(i=OK(t,2),n=1/EZr(i*NZr),a=-1/(2*i),n*wZr(a*OK(r-e,2)))}SK.exports=OZr});var LK=s((P7e,_K)=>{"use strict";var SZr=I(),IK=E();function TZr(r,e){return IK(r)||IK(e)?NaN:r===e?SZr:0}_K.exports=TZr});var FK=s((R7e,RK)=>{"use strict";var IZr=S(),_Zr=I(),PK=E();function LZr(r){if(PK(r))return IZr(NaN);return e;function e(t){return PK(t)?NaN:t===r?_Zr:0}}RK.exports=LZr});var kK=s((F7e,BK)=>{"use strict";var PZr=w(),MK=LK(),RZr=FK();PZr(MK,"factory",RZr);BK.exports=MK});var GK=s((M7e,CK)=>{"use strict";var FZr=S(),MZr=kK().factory,t4=E(),BZr=V(),kZr=ir(),jK=H(),jZr=Ye();function CZr(r,e){var t,i,n;if(t4(r)||t4(e)||e<0)return FZr(NaN);if(e===0)return MZr(r);return t=jK(e,2),i=1/BZr(t*jZr),n=-1/(2*t),a;function a(u){return t4(u)?NaN:i*kZr(n*jK(u-r,2))}}CK.exports=CZr});var HK=s((B7e,UK)=>{"use strict";var GZr=w(),VK=TK(),VZr=GK();GZr(VK,"factory",VZr);UK.exports=VK});var DK=s((k7e,zK)=>{"use strict";var WK=E();function UZr(r,e){return WK(r)||WK(e)||e<=0?NaN:0}zK.exports=UZr});var JK=s((j7e,XK)=>{"use strict";var HZr=DK();XK.exports=HZr});var ZK=s((C7e,YK)=>{"use strict";var xK=E();function WZr(r,e){return xK(r)||xK(e)||e<=0?NaN:e}YK.exports=WZr});var QK=s((G7e,$K)=>{"use strict";var zZr=ZK();$K.exports=zZr});var err=s((V7e,rrr)=>{"use strict";var KK=E();function DZr(r,e){return KK(r)||KK(e)||e<=0?NaN:e*e}rrr.exports=DZr});var irr=s((U7e,trr)=>{"use strict";var XZr=err();trr.exports=XZr});var arr=s((H7e,nrr)=>{"use strict";var Sr=nr(),JZr=K$(),xZr=nQ(),YZr=vQ(),ZZr=kQ(),$Zr=tK(),QZr=uK(),KZr=lK(),r$r=yK(),e$r=AK(),t$r=HK(),i$r=U3(),n$r=JK(),a$r=QK(),s$r=irr();function u$r(r){return Sr(r,"cdf",JZr),Sr(r,"entropy",xZr),Sr(r,"kurtosis",YZr),Sr(r,"logcdf",ZZr),Sr(r,"logpdf",$Zr),Sr(r,"mean",QZr),Sr(r,"median",KZr),Sr(r,"mgf",r$r),Sr(r,"mode",e$r),Sr(r,"pdf",t$r),Sr(r,"quantile",i$r),Sr(r,"skewness",n$r),Sr(r,"stdev",a$r),Sr(r,"variance",s$r),r}nrr.exports=u$r});var urr=s((W7e,srr)=>{"use strict";var o$r=nr(),v$r=arr();function f$r(r){return o$r(r,"normal",v$r({})),r}srr.exports=f$r});var vrr=s((z7e,orr)=>{"use strict";var Dn=nr(),c$r=y$(),l$r=I$().ndarray,p$r=j$().ndarray,g$r=X$().ndarray,m$r=urr();function d$r(r){return Dn(r,"bartlettTest",c$r),Dn(r,"cumax",l$r),Dn(r,"max",p$r),Dn(r,"mskmax",g$r),Dn(r,"dists",m$r({})),r}orr.exports=d$r});var crr=s((D7e,frr)=>{"use strict";var h$r=rr().isPrimitive,q$r=y();function y$r(r){return e;function e(t){if(!h$r(t))throw new TypeError(q$r("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}frr.exports=y$r});var prr=s((X7e,lrr)=>{"use strict";var b$r=crr();lrr.exports=b$r});var hrr=s((J7e,drr)=>{"use strict";var grr=rr().isPrimitive,mrr=y();function w$r(r){return e;function e(t,i){if(!grr(t))throw new TypeError(mrr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!grr(i))throw new TypeError(mrr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}drr.exports=w$r});var yrr=s((x7e,qrr)=>{"use strict";var E$r=hrr();qrr.exports=E$r});var wrr=s((Y7e,brr)=>{"use strict";var i4=rr().isPrimitive,n4=y();function N$r(r){return e;function e(t,i,n){if(!i4(t))throw new TypeError(n4("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!i4(i))throw new TypeError(n4("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!i4(n))throw new TypeError(n4("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}brr.exports=N$r});var Nrr=s((Z7e,Err)=>{"use strict";var A$r=wrr();Err.exports=A$r});var Orr=s(($7e,Arr)=>{"use strict";var a4=nr(),O$r=prr(),S$r=yrr(),T$r=Nrr();function I$r(r){return a4(r,"s_o",O$r),a4(r,"ss_o",S$r),a4(r,"sss_o",T$r),r}Arr.exports=I$r});var Trr=s((Q7e,Srr)=>{"use strict";function _$r(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}Srr.exports=_$r});var mu=s((K7e,Irr)=>{"use strict";var L$r=Trr();Irr.exports=L$r});var Lrr=s((r9e,_rr)=>{"use strict";function P$r(r){return r.toLowerCase()}_rr.exports=P$r});var Vi=s((e9e,Prr)=>{"use strict";var R$r=Lrr();Prr.exports=R$r});var Frr=s((t9e,Rrr)=>{"use strict";function F$r(r,e,t){return r.replace(e,t)}Rrr.exports=F$r});var Wt=s((i9e,Mrr)=>{"use strict";var M$r=Frr();Mrr.exports=M$r});var krr=s((n9e,Brr)=>{"use strict";var B$r=typeof String.prototype.trim<"u";Brr.exports=B$r});var s4=s((a9e,jrr)=>{"use strict";var k$r=String.prototype.trim;jrr.exports=k$r});var Urr=s((s9e,Vrr)=>{"use strict";var Crr=s4(),j$r=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,Grr="\u180E";function C$r(){return Crr.call(j$r)===""&&Crr.call(Grr)===Grr}Vrr.exports=C$r});var Wrr=s((u9e,Hrr)=>{"use strict";var G$r=Wt(),V$r=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function U$r(r){return G$r(r,V$r,"$1")}Hrr.exports=U$r});var Drr=s((o9e,zrr)=>{"use strict";var H$r=s4();function W$r(r){return H$r.call(r)}zrr.exports=W$r});var Ui=s((v9e,Xrr)=>{"use strict";var z$r=krr(),D$r=Urr(),X$r=Wrr(),J$r=Drr(),u4;z$r&&D$r()?u4=J$r:u4=X$r;Xrr.exports=u4});var xrr=s((f9e,Jrr)=>{"use strict";var x$r=mu(),Y$r=Vi(),du=Wt(),Z$r=Ui(),$$r=/\s+/g,Q$r=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,K$r=/(?:\s|^)([^\s]+)(?=\s|$)/g,rQr=/([a-z0-9])([A-Z])/g;function eQr(r,e,t){return e=Y$r(e),t===0?e:x$r(e)}function tQr(r){return r=du(r,Q$r," "),r=du(r,$$r," "),r=du(r,rQr,"$1 $2"),r=Z$r(r),du(r,K$r,eQr)}Jrr.exports=tQr});var Zrr=s((c9e,Yrr)=>{"use strict";var iQr=xrr();Yrr.exports=iQr});var Qrr=s((l9e,$rr)=>{"use strict";var nQr=rr().isPrimitive,aQr=y(),sQr=Zrr();function uQr(r){if(!nQr(r))throw new TypeError(aQr("invalid argument. First argument must be a string. Value: `%s`.",r));return sQr(r)}$rr.exports=uQr});var rer=s((p9e,Krr)=>{"use strict";var oQr=Qrr();Krr.exports=oQr});var ter=s((g9e,eer)=>{"use strict";var vQr=rr().isPrimitive,fQr=y(),cQr=mu();function lQr(r){if(!vQr(r))throw new TypeError(fQr("invalid argument. First argument must be a string. Value: `%s`.",r));return cQr(r)}eer.exports=lQr});var ner=s((m9e,ier)=>{"use strict";var pQr=ter();ier.exports=pQr});var ser=s((d9e,aer)=>{"use strict";function gQr(r){return r.toUpperCase()}aer.exports=gQr});var oer=s((h9e,uer)=>{"use strict";var mQr=ser();uer.exports=mQr});var fer=s((q9e,ver)=>{"use strict";var dQr=oer(),o4=Wt(),hQr=Ui(),qQr=/\s+/g,yQr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,bQr=/([a-z0-9])([A-Z])/g;function wQr(r){return r=o4(r,yQr," "),r=o4(r,bQr,"$1 $2"),r=hQr(r),r=o4(r,qQr,"_"),dQr(r)}ver.exports=wQr});var ler=s((y9e,cer)=>{"use strict";var EQr=fer();cer.exports=EQr});var ger=s((b9e,per)=>{"use strict";var NQr=rr().isPrimitive,AQr=y(),OQr=ler();function SQr(r){if(!NQr(r))throw new TypeError(AQr("invalid argument. Must provide a string. Value: `%s`.",r));return OQr(r)}per.exports=SQr});var der=s((w9e,mer)=>{"use strict";var TQr=ger();mer.exports=TQr});var qer=s((E9e,her)=>{"use strict";var IQr=Vi(),v4=Wt(),_Qr=Ui(),LQr=/\s+/g,PQr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,RQr=/([a-z0-9])([A-Z])/g;function FQr(r){return r=v4(r,PQr," "),r=v4(r,RQr,"$1 $2"),r=_Qr(r),r=v4(r,LQr,"-"),IQr(r)}her.exports=FQr});var ber=s((N9e,yer)=>{"use strict";var MQr=qer();yer.exports=MQr});var Eer=s((A9e,wer)=>{"use strict";var BQr=rr().isPrimitive,kQr=y(),jQr=ber();function CQr(r){if(!BQr(r))throw new TypeError(kQr("invalid argument. Must provide a string. Value: `%s`.",r));return jQr(r)}wer.exports=CQr});var Aer=s((O9e,Ner)=>{"use strict";var GQr=Eer();Ner.exports=GQr});var Ser=s((S9e,Oer)=>{"use strict";var VQr=rr().isPrimitive,UQr=y(),HQr=Vi();function WQr(r){if(!VQr(r))throw new TypeError(UQr("invalid argument. Must provide a string. Value: `%s`.",r));return HQr(r)}Oer.exports=WQr});var Ier=s((T9e,Ter)=>{"use strict";var zQr=Ser();Ter.exports=zQr});var Ler=s((I9e,_er)=>{"use strict";var DQr=mu(),XQr=Vi(),hu=Wt(),JQr=Ui(),xQr=/\s+/g,YQr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ZQr=/(?:\s|^)([^\s]+)(?=\s|$)/g,$Qr=/([a-z0-9])([A-Z])/g;function QQr(r,e){return DQr(XQr(e))}function KQr(r){return r=hu(r,YQr," "),r=hu(r,xQr," "),r=hu(r,$Qr,"$1 $2"),r=JQr(r),hu(r,ZQr,QQr)}_er.exports=KQr});var Rer=s((_9e,Per)=>{"use strict";var rKr=Ler();Per.exports=rKr});var Mer=s((L9e,Fer)=>{"use strict";var eKr=rr().isPrimitive,tKr=y(),iKr=Rer();function nKr(r){if(!eKr(r))throw new TypeError(tKr("invalid argument. First argument must be a string. Value: `%s`.",r));return iKr(r)}Fer.exports=nKr});var ker=s((P9e,Ber)=>{"use strict";var aKr=Mer();Ber.exports=aKr});var Cer=s((R9e,jer)=>{"use strict";var sKr=Vi(),f4=Wt(),uKr=Ui(),oKr=/\s+/g,vKr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,fKr=/([a-z0-9])([A-Z])/g;function cKr(r){return r=f4(r,vKr," "),r=f4(r,fKr,"$1 $2"),r=uKr(r),r=f4(r,oKr,"_"),sKr(r)}jer.exports=cKr});var Ver=s((F9e,Ger)=>{"use strict";var lKr=Cer();Ger.exports=lKr});var Her=s((M9e,Uer)=>{"use strict";var pKr=rr().isPrimitive,gKr=y(),mKr=Ver();function dKr(r){if(!pKr(r))throw new TypeError(gKr("invalid argument. Must provide a string. Value: `%s`.",r));return mKr(r)}Uer.exports=dKr});var zer=s((B9e,Wer)=>{"use strict";var hKr=Her();Wer.exports=hKr});var Jer=s((k9e,Xer)=>{"use strict";var qKr=_(),Der=O(),yKr=fr().isPrimitive,bKr=rr().isPrimitive,c4=y();function wKr(r,e){return qKr(e)?Der(e,"flags")&&(r.flags=e.flags,!bKr(r.flags))?new TypeError(c4("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):Der(e,"capture")&&(r.capture=e.capture,!yKr(r.capture))?new TypeError(c4("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(c4("invalid argument. Options argument must be an object. Value: `%s`.",e))}Xer.exports=wKr});var qu=s((j9e,Yer)=>{"use strict";var EKr=Jer(),xer=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function NKr(r){var e,t;if(arguments.length>0){if(e={},t=EKr(e,r),t)throw t;return e.capture?new RegExp("("+xer+")",e.flags):new RegExp(xer,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}Yer.exports=NKr});var $er=s((C9e,Zer)=>{"use strict";var AKr=qu(),OKr=AKr({capture:!0});Zer.exports=OKr});var Ker=s((G9e,Qer)=>{"use strict";var SKr=qu(),TKr=SKr();Qer.exports=TKr});var ttr=s((V9e,etr)=>{"use strict";var rtr=w(),l4=qu(),IKr=$er(),_Kr=Ker();rtr(l4,"REGEXP",_Kr);rtr(l4,"REGEXP_CAPTURE",IKr);etr.exports=l4});var ntr=s((U9e,itr)=>{"use strict";var LKr=ttr().REGEXP;function PKr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),LKr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}itr.exports=PKr});var str=s((H9e,atr)=>{"use strict";var RKr=ntr();atr.exports=RKr});var otr=s((W9e,utr)=>{"use strict";var FKr=rr().isPrimitive,MKr=y(),BKr=str();function kKr(r){if(!FKr(r))throw new TypeError(MKr("invalid argument. Must provide a string. Value: `%s`.",r));return BKr(r)}utr.exports=kKr});var ftr=s((z9e,vtr)=>{"use strict";var jKr=otr();vtr.exports=jKr});var ltr=s((D9e,ctr)=>{"use strict";function CKr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}ctr.exports=CKr});var gtr=s((X9e,ptr)=>{"use strict";var GKr=ltr();ptr.exports=GKr});var dtr=s((J9e,mtr)=>{"use strict";var VKr=rr().isPrimitive,UKr=y(),HKr=gtr();function WKr(r){if(!VKr(r))throw new TypeError(UKr("invalid argument. First argument must be a string. Value: `%s`.",r));return HKr(r)}mtr.exports=WKr});var qtr=s((x9e,htr)=>{"use strict";var zKr=dtr();htr.exports=zKr});var btr=s((Y9e,ytr)=>{"use strict";var DKr=rr().isPrimitive,XKr=y();function JKr(r){if(!DKr(r))throw new TypeError(XKr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}ytr.exports=JKr});var Etr=s((Z9e,wtr)=>{"use strict";var xKr=btr();wtr.exports=xKr});var Atr=s(($9e,Ntr)=>{"use strict";var $r=nr(),YKr=rer(),ZKr=ner(),$Kr=der(),QKr=Aer(),KKr=Ier(),rre=ker(),ere=zer(),tre=ftr(),ire=qtr(),nre=Etr();function are(r){return $r(r,"camelcase",YKr),$r(r,"capitalize",ZKr),$r(r,"constantcase",$Kr),$r(r,"kebabcase",QKr),$r(r,"lowercase",KKr),$r(r,"pascalcase",rre),$r(r,"snakecase",ere),$r(r,"startcase",tre),$r(r,"uncapitalize",ire),$r(r,"uppercase",nre),r}Ntr.exports=are});var Str=s((Q9e,Otr)=>{"use strict";var sre=nr(),ure=Orr(),ore=Atr();function vre(r){return sre(r,"tools",ure({})),r=ore(r),r}Otr.exports=vre});var Itr=s((K9e,Ttr)=>{"use strict";var ke=nr(),fre=Cm(),cre=qq(),lre=Tq(),pre=Aw(),gre=TP(),mre=cJ(),dre=wJ(),hre=vrr(),qre=Str();function yre(){var r={};return ke(r,"array",fre({})),ke(r,"assert",cre({})),ke(r,"blas",lre({})),ke(r,"datasets",pre({})),ke(r,"math",gre({})),ke(r,"random",mre({})),ke(r,"simulate",dre({})),ke(r,"stats",hre({})),ke(r,"string",qre({})),r}Ttr.exports=yre});var Ltr=s((rpe,_tr)=>{"use strict";var bre=w(),p4=Itr();bre(p4,"CACHED",p4());_tr.exports=p4});var Ere=s((epe,Ptr)=>{var wre=Ltr().CACHED;Ptr.exports=wre});return Ere();})();
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
* Computes the nth Bernoulli number.
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
* STDLIB_BERNOULLI( 0 )
*
* @example
* STDLIB_BERNOULLI( A1:A100 )
*
* @example
* STDLIB_BERNOULLI( A1:D100 )
*
* @example
* STDLIB_BERNOULLI( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BERNOULLI( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.bernoulli );
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
* Evaluates the exponential function.
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
* STDLIB_POW( 2.0, 3.0 )
*
* @example
* STDLIB_POW( A1:A100, B1:B100 )
*
* @example
* STDLIB_POW( A1:D100, 3.0 )
*
* @example
* STDLIB_POW( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_POW( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.pow );
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
* STDLIB_MUL( -1.2, 3.1 )
*
* @example
* STDLIB_MUL( A1:A100, B1:B100 )
*
* @example
* STDLIB_MUL( A1:D100, 3.1 )
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
* STDLIB_SUB( -1.2, 3.1 )
*
* @example
* STDLIB_SUB( A1:A100, B1:B100 )
*
* @example
* STDLIB_SUB( A1:D100, 3.1 )
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
* STDLIB_ADD( -1.2, 3.1 )
*
* @example
* STDLIB_ADD( A1:A100, B1:B100 )
*
* @example
* STDLIB_ADD( A1:D100, 3.1 )
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
* Rounds a number to the nearest multiple of 10^n toward negative infinity.
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
* STDLIB_FLOORN( 3.141592653589793, -4 )
*
* @example
* STDLIB_FLOORN( A1:A100, B1:B100 )
*
* @example
* STDLIB_FLOORN( A1:D100, -4 )
*
* @example
* STDLIB_FLOORN( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_FLOORN( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.floorn );
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
			opts[ o ] = ns.array.flattenArray( v );
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
