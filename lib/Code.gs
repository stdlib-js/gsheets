/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var mf=s((ore,gf)=>{"use strict";var Ttr=typeof Object.defineProperty=="function"?Object.defineProperty:null;gf.exports=Ttr});var hf=s((vre,df)=>{"use strict";var Itr=mf();function _tr(){try{return Itr({},"x",{}),!0}catch{return!1}}df.exports=_tr});var yf=s((fre,qf)=>{"use strict";var Ltr=Object.defineProperty;qf.exports=Ltr});var yu=s((cre,bf)=>{"use strict";function Ptr(r){return typeof r=="number"}bf.exports=Ptr});var bu=s((lre,Ef)=>{"use strict";function Rtr(r){return r[0]==="-"}function wf(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Ftr(r,e,t){var i=!1,n=e-r.length;return n<0||(Rtr(r)&&(i=!0,r=r.substr(1)),r=t?r+wf(n):wf(n)+r,i&&(r="-"+r)),r}Ef.exports=Ftr});var Sf=s((pre,Of)=>{"use strict";var Mtr=yu(),Nf=bu(),Btr=String.prototype.toLowerCase,Af=String.prototype.toUpperCase;function ktr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Mtr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Nf(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Nf(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Af.call(r.specifier)?Af.call(t):Btr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Of.exports=ktr});var If=s((gre,Tf)=>{"use strict";function jtr(r){return typeof r=="string"}Tf.exports=jtr});var Pf=s((mre,Lf)=>{"use strict";var Ctr=yu(),Gtr=Math.abs,Vtr=String.prototype.toLowerCase,_f=String.prototype.toUpperCase,bt=String.prototype.replace,Utr=/e\+(\d)$/,Htr=/e-(\d)$/,Wtr=/^(\d+)$/,ztr=/^(\d+)e/,Dtr=/\.0$/,Xtr=/\.0*e/,Jtr=/(\..*[^0])0*e/;function xtr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Ctr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Gtr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=bt.call(t,Jtr,"$1e"),t=bt.call(t,Xtr,"e"),t=bt.call(t,Dtr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=bt.call(t,Utr,"e+0$1"),t=bt.call(t,Htr,"e-0$1"),r.alternate&&(t=bt.call(t,Wtr,"$1."),t=bt.call(t,ztr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===_f.call(r.specifier)?_f.call(t):Vtr.call(t),t}Lf.exports=xtr});var Mf=s((dre,Ff)=>{"use strict";function Rf(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function Ytr(r,e,t){var i=e-r.length;return i<0||(r=t?r+Rf(i):Rf(i)+r),r}Ff.exports=Ytr});var kf=s((hre,Bf)=>{"use strict";var Ztr=Sf(),$tr=If(),Qtr=Pf(),Ktr=Mf(),rir=bu(),eir=String.fromCharCode,Jn=isNaN,tir=Array.isArray;function iir(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function nir(r){var e,t,i,n,a,u,o,f,v;if(!tir(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],$tr(i))u+=i;else{if(e=i.precision!==void 0,i=iir(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Jn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Jn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Ztr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Jn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Jn(a)?String(i.arg):eir(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Qtr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=rir(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ktr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}Bf.exports=nir});var Cf=s((qre,jf)=>{"use strict";var air=kf();jf.exports=air});var Vf=s((yre,Gf)=>{"use strict";var xn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function sir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function uir(r){var e,t,i,n;for(t=[],n=0,i=xn.exec(r);i;)e=r.slice(n,xn.lastIndex-i[0].length),e.length&&t.push(e),t.push(sir(i)),n=xn.lastIndex,i=xn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}Gf.exports=uir});var Hf=s((bre,Uf)=>{"use strict";var oir=Vf();Uf.exports=oir});var zf=s((wre,Wf)=>{"use strict";function vir(r){return typeof r=="string"}Wf.exports=vir});var Jf=s((Ere,Xf)=>{"use strict";var fir=Cf(),cir=Hf(),lir=zf();function Df(r){var e,t,i;if(!lir(r))throw new TypeError(Df("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=cir(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return fir.apply(null,t)}Xf.exports=Df});var y=s((Nre,xf)=>{"use strict";var pir=Jf();xf.exports=pir});var rc=s((Are,Kf)=>{"use strict";var Yf=y(),zt=Object.prototype,Zf=zt.toString,$f=zt.__defineGetter__,Qf=zt.__defineSetter__,gir=zt.__lookupGetter__,mir=zt.__lookupSetter__;function dir(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||Zf.call(r)==="[object Array]")throw new TypeError(Yf("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Zf.call(t)==="[object Array]")throw new TypeError(Yf("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(gir.call(r,e)||mir.call(r,e)?(i=r.__proto__,r.__proto__=zt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$f&&$f.call(r,e,t.get),u&&Qf&&Qf.call(r,e,t.set),r}Kf.exports=dir});var je=s((Ore,ec)=>{"use strict";var hir=hf(),qir=yf(),yir=rc(),wu;hir()?wu=qir:wu=yir;ec.exports=wu});var ic=s((Sre,tc)=>{"use strict";var bir=je();function wir(r,e,t){bir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}tc.exports=wir});var w=s((Tre,nc)=>{"use strict";var Eir=ic();nc.exports=Eir});var sc=s((Ire,ac)=>{"use strict";var Nir=je();function Air(r,e,t){Nir(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}ac.exports=Air});var nr=s((_re,uc)=>{"use strict";var Oir=sc();uc.exports=Oir});var vc=s((Lre,oc)=>{"use strict";function Sir(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}oc.exports=Sir});var cc=s((Pre,fc)=>{"use strict";var Tir=vc();fc.exports=Tir});var pc=s((Rre,lc)=>{"use strict";function Iir(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}lc.exports=Iir});var Eu=s((Fre,gc)=>{"use strict";var _ir=pc();gc.exports=_ir});var dc=s((Mre,mc)=>{"use strict";var Lir=Eu();function Pir(r){return Lir(0,r)}mc.exports=Pir});var Nu=s((Bre,hc)=>{"use strict";var Rir=dc();hc.exports=Rir});var bc=s((kre,yc)=>{"use strict";var Hi=cc(),Fir=Nu(),qc=y();function Mir(r,e,t){var i,n,a,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(a=Fir(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(qc("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Hi(e).join(", "),Hi(t).join(", "),v));if(f===n)a[v]=1;else if(f===1)a[v]=0;else throw new Error(qc("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Hi(e).join(", "),Hi(t).join(", "),v))}return{ref:r,data:i,shape:Hi(t),strides:a}}yc.exports=Mir});var Ec=s((jre,wc)=>{"use strict";var Bir=bc();wc.exports=Bir});var Oc=s((Cre,Ac)=>{"use strict";var Nc=Ec();function kir(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,k,T,D,vr;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(k=Nc(r[0],e[0],N),T=k.data,A=k.strides,i=A[1],n=A[0],k=Nc(r[1],e[1],N),D=k.data,A=k.strides,a=A[1],u=A[0],vr=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,m=0,d=T[p],g=D[h],q=vr[c],v=0;v<o;v++)q[v]=t(d[l],g[m]),l+=i,m+=a;p+=n,h+=u}}Ac.exports=kir});var Au=s((Gre,Sc)=>{"use strict";var jir=Oc();Sc.exports=jir});var Ic=s((Vre,Tc)=>{"use strict";function Cir(r){var e,t,i,n,a,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}Tc.exports=Cir});var Ou=s((Ure,_c)=>{"use strict";var Gir=Ic();_c.exports=Gir});var Pc=s((Hre,Lc)=>{"use strict";var Vir=Eu();function Uir(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(Vir(r,i));return t}Lc.exports=Uir});var Yn=s((Wre,Rc)=>{"use strict";var Hir=Pc();Rc.exports=Hir});var Mc=s((zre,Fc)=>{"use strict";function Wir(r,e,t){var i,n,a,u,o,f;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}Fc.exports=Wir});var kc=s((Dre,Bc)=>{"use strict";var zir=Mc();Bc.exports=zir});var Cc=s((Xre,jc)=>{"use strict";function Dir(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}jc.exports=Dir});var Su=s((Jre,Gc)=>{"use strict";var Xir=Cc();Gc.exports=Xir});var Uc=s((xre,Vc)=>{"use strict";var Jir=/./;Vc.exports=Jir});var Tu=s((Yre,Hc)=>{"use strict";function xir(r){return typeof r=="boolean"}Hc.exports=xir});var zc=s((Zre,Wc)=>{"use strict";function Yir(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Wc.exports=Yir});var Xc=s(($re,Dc)=>{"use strict";var Zir=zc();Dc.exports=Zir});var xc=s((Qre,Jc)=>{"use strict";var $ir=Xc(),Qir=$ir();function Kir(){return Qir&&typeof Symbol.toStringTag=="symbol"}Jc.exports=Kir});var Wi=s((Kre,Yc)=>{"use strict";var rnr=xc();Yc.exports=rnr});var Iu=s((ree,Zc)=>{"use strict";var enr=Object.prototype.toString;Zc.exports=enr});var Qc=s((eee,$c)=>{"use strict";var tnr=Iu();function inr(r){return tnr.call(r)}$c.exports=inr});var rl=s((tee,Kc)=>{"use strict";var nnr=Object.prototype.hasOwnProperty;function anr(r,e){return r==null?!1:nnr.call(r,e)}Kc.exports=anr});var O=s((iee,el)=>{"use strict";var snr=rl();el.exports=snr});var il=s((nee,tl)=>{"use strict";var unr=typeof Symbol=="function"?Symbol:void 0;tl.exports=unr});var _u=s((aee,nl)=>{"use strict";var onr=il();nl.exports=onr});var ul=s((see,sl)=>{"use strict";var al=_u(),vnr=typeof al=="function"?al.toStringTag:"";sl.exports=vnr});var vl=s((uee,ol)=>{"use strict";var fnr=O(),zi=ul(),Lu=Iu();function cnr(r){var e,t,i;if(r==null)return Lu.call(r);t=r[zi],e=fnr(r,zi);try{r[zi]=void 0}catch{return Lu.call(r)}return i=Lu.call(r),e?r[zi]=t:delete r[zi],i}ol.exports=cnr});var tr=s((oee,fl)=>{"use strict";var lnr=Wi(),pnr=Qc(),gnr=vl(),Pu;lnr()?Pu=gnr:Pu=pnr;fl.exports=Pu});var ll=s((vee,cl)=>{"use strict";var mnr=Boolean;cl.exports=mnr});var gl=s((fee,pl)=>{"use strict";var dnr=ll();pl.exports=dnr});var dl=s((cee,ml)=>{"use strict";var hnr=Boolean.prototype.toString;ml.exports=hnr});var ql=s((lee,hl)=>{"use strict";var qnr=dl();function ynr(r){try{return qnr.call(r),!0}catch{return!1}}hl.exports=ynr});var Ru=s((pee,yl)=>{"use strict";var bnr=Wi(),wnr=tr(),Enr=gl(),Nnr=ql(),Anr=bnr();function Onr(r){return typeof r=="object"?r instanceof Enr?!0:Anr?Nnr(r):wnr(r)==="[object Boolean]":!1}yl.exports=Onr});var wl=s((gee,bl)=>{"use strict";var Snr=Tu(),Tnr=Ru();function Inr(r){return Snr(r)||Tnr(r)}bl.exports=Inr});var fr=s((mee,Nl)=>{"use strict";var El=w(),Fu=wl(),_nr=Tu(),Lnr=Ru();El(Fu,"isPrimitive",_nr);El(Fu,"isObject",Lnr);Nl.exports=Fu});var Ol=s((dee,Al)=>{"use strict";function Pnr(){return new Function("return this;")()}Al.exports=Pnr});var Tl=s((hee,Sl)=>{"use strict";var Rnr=typeof self=="object"?self:null;Sl.exports=Rnr});var _l=s((qee,Il)=>{"use strict";var Fnr=typeof window=="object"?window:null;Il.exports=Fnr});var Pl=s((yee,Ll)=>{"use strict";var Mnr=typeof globalThis=="object"?globalThis:null;Ll.exports=Mnr});var kl=s((bee,Bl)=>{"use strict";var Bnr=fr().isPrimitive,knr=y(),jnr=Ol(),Rl=Tl(),Fl=_l(),Ml=Pl();function Cnr(r){if(arguments.length){if(!Bnr(r))throw new TypeError(knr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return jnr()}if(Ml)return Ml;if(Rl)return Rl;if(Fl)return Fl;throw new Error("unexpected error. Unable to resolve global object.")}Bl.exports=Cnr});var Gl=s((wee,Cl)=>{"use strict";var Gnr=kl(),jl=Gnr(),Vnr=jl.document&&jl.document.childNodes;Cl.exports=Vnr});var Ul=s((Eee,Vl)=>{"use strict";var Unr=Int8Array;Vl.exports=Unr});var Wl=s((Nee,Hl)=>{"use strict";var Hnr=Uc(),Wnr=Gl(),znr=Ul();function Dnr(){return typeof Hnr=="function"||typeof znr=="object"||typeof Wnr=="function"}Hl.exports=Dnr});var Mu=s((Aee,zl)=>{"use strict";function Xnr(){return/^\s*function\s*([^(]*)/i}zl.exports=Xnr});var Xl=s((Oee,Dl)=>{"use strict";var Jnr=Mu(),xnr=Jnr();Dl.exports=xnr});var Bu=s((See,xl)=>{"use strict";var Ynr=w(),Jl=Mu(),Znr=Xl();Ynr(Jl,"REGEXP",Znr);xl.exports=Jl});var Zl=s((Tee,Yl)=>{"use strict";var $nr=tr(),ku;function Qnr(r){return $nr(r)==="[object Array]"}Array.isArray?ku=Array.isArray:ku=Qnr;Yl.exports=ku});var cr=s((Iee,$l)=>{"use strict";var Knr=Zl();$l.exports=Knr});var Kl=s((_ee,Ql)=>{"use strict";var rar=cr(),ear=y();function tar(r){if(typeof r!="function")throw new TypeError(ear("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!rar(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}Ql.exports=tar});var e4=s((Lee,r4)=>{"use strict";var iar=Kl();r4.exports=iar});var i4=s((Pee,t4)=>{"use strict";function nar(r){return r!==null&&typeof r=="object"}t4.exports=nar});var Cu=s((Ree,n4)=>{"use strict";var aar=w(),sar=e4(),ju=i4(),uar=sar(ju);aar(ju,"isObjectLikeArray",uar);n4.exports=ju});var s4=s((Fee,a4)=>{"use strict";var oar=Cu();function far(r){return oar(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}a4.exports=far});var wt=s((Mee,u4)=>{"use strict";var car=s4();u4.exports=car});var v4=s((Bee,o4)=>{"use strict";var lar=tr(),par=Bu().REGEXP,gar=wt();function mar(r){var e,t,i;if(t=lar(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=par.exec(i.toString()),e)return e[1]}return gar(r)?"Buffer":t}o4.exports=mar});var Ce=s((kee,f4)=>{"use strict";var dar=v4();f4.exports=dar});var l4=s((jee,c4)=>{"use strict";var har=Ce();function qar(r){var e;return r===null?"null":(e=typeof r,e==="object"?har(r).toLowerCase():e)}c4.exports=qar});var g4=s((Cee,p4)=>{"use strict";var yar=Ce();function bar(r){return yar(r).toLowerCase()}p4.exports=bar});var Zn=s((Gee,m4)=>{"use strict";var war=Wl(),Ear=l4(),Nar=g4(),Aar=war()?Nar:Ear;m4.exports=Aar});var h4=s((Vee,d4)=>{"use strict";var Oar=Zn();function Sar(r){return Oar(r)==="function"}d4.exports=Sar});var L=s((Uee,q4)=>{"use strict";var Tar=h4();q4.exports=Tar});var b4=s((Hee,y4)=>{"use strict";var Iar=Math.floor;y4.exports=Iar});var J=s((Wee,w4)=>{"use strict";var _ar=b4();w4.exports=_ar});var N4=s((zee,E4)=>{"use strict";var Lar=J();function Par(r){return Lar(r)===r}E4.exports=Par});var Tr=s((Dee,A4)=>{"use strict";var Rar=N4();A4.exports=Rar});var S4=s((Xee,O4)=>{"use strict";var Far=9007199254740991;O4.exports=Far});var I4=s((Jee,T4)=>{"use strict";var Mar=Tr(),Bar=S4();function kar(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Mar(r.length)&&r.length>=0&&r.length<=Bar}T4.exports=kar});var jr=s((xee,_4)=>{"use strict";var jar=I4();_4.exports=jar});var P4=s((Yee,L4)=>{"use strict";var Car=L();function Gar(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Car(r.next)}L4.exports=Gar});var F4=s((Zee,R4)=>{"use strict";var Var=P4();R4.exports=Var});var k4=s(($ee,B4)=>{"use strict";var M4="function";function Uar(r){return typeof r.get===M4&&typeof r.set===M4}B4.exports=Uar});var Gu=s((Qee,j4)=>{"use strict";var Har=k4();j4.exports=Har});var V4=s((Kee,G4)=>{"use strict";var C4={complex128:War,complex64:zar,default:Dar};function War(r,e,t){r.set(t,e)}function zar(r,e,t){r.set(t,e)}function Dar(r,e,t){r.set(t,e)}function Xar(r){var e=C4[r];return typeof e=="function"?e:C4.default}G4.exports=Xar});var Vu=s((rte,U4)=>{"use strict";var Jar=V4();U4.exports=Jar});var z4=s((ete,W4)=>{"use strict";var H4={float64:xar,float32:Yar,int32:Zar,int16:$ar,int8:Qar,uint32:Kar,uint16:r0r,uint8:e0r,uint8c:t0r,generic:i0r,default:n0r};function xar(r,e,t){r[e]=t}function Yar(r,e,t){r[e]=t}function Zar(r,e,t){r[e]=t}function $ar(r,e,t){r[e]=t}function Qar(r,e,t){r[e]=t}function Kar(r,e,t){r[e]=t}function r0r(r,e,t){r[e]=t}function e0r(r,e,t){r[e]=t}function t0r(r,e,t){r[e]=t}function i0r(r,e,t){r[e]=t}function n0r(r,e,t){r[e]=t}function a0r(r){var e=H4[r];return typeof e=="function"?e:H4.default}W4.exports=a0r});var Uu=s((tte,D4)=>{"use strict";var s0r=z4();D4.exports=s0r});var J4=s((ite,X4)=>{"use strict";var u0r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};X4.exports=u0r});var Y4=s((nte,x4)=>{"use strict";var o0r=tr(),v0r=typeof Float64Array=="function";function f0r(r){return v0r&&r instanceof Float64Array||o0r(r)==="[object Float64Array]"}x4.exports=f0r});var $4=s((ate,Z4)=>{"use strict";var c0r=Y4();Z4.exports=c0r});var K4=s((ste,Q4)=>{"use strict";var l0r=typeof Float64Array=="function"?Float64Array:null;Q4.exports=l0r});var t6=s((ute,e6)=>{"use strict";var p0r=$4(),r6=K4();function g0r(){var r,e;if(typeof r6!="function")return!1;try{e=new r6([1,3.14,-3.14,NaN]),r=p0r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}e6.exports=g0r});var Hu=s((ote,i6)=>{"use strict";var m0r=t6();i6.exports=m0r});var a6=s((vte,n6)=>{"use strict";var d0r=typeof Float64Array=="function"?Float64Array:void 0;n6.exports=d0r});var u6=s((fte,s6)=>{"use strict";function h0r(){throw new Error("not implemented")}s6.exports=h0r});var gr=s((cte,o6)=>{"use strict";var q0r=Hu(),y0r=a6(),b0r=u6(),Wu;q0r()?Wu=y0r:Wu=b0r;o6.exports=Wu});var f6=s((lte,v6)=>{"use strict";var w0r=tr(),E0r=typeof Float32Array=="function";function N0r(r){return E0r&&r instanceof Float32Array||w0r(r)==="[object Float32Array]"}v6.exports=N0r});var l6=s((pte,c6)=>{"use strict";var A0r=f6();c6.exports=A0r});var _=s((gte,p6)=>{"use strict";var O0r=Number.POSITIVE_INFINITY;p6.exports=O0r});var m6=s((mte,g6)=>{"use strict";var S0r=typeof Float32Array=="function"?Float32Array:null;g6.exports=S0r});var q6=s((dte,h6)=>{"use strict";var T0r=l6(),I0r=_(),d6=m6();function _0r(){var r,e;if(typeof d6!="function")return!1;try{e=new d6([1,3.14,-3.14,5e40]),r=T0r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===I0r}catch{r=!1}return r}h6.exports=_0r});var b6=s((hte,y6)=>{"use strict";var L0r=q6();y6.exports=L0r});var E6=s((qte,w6)=>{"use strict";var P0r=typeof Float32Array=="function"?Float32Array:void 0;w6.exports=P0r});var A6=s((yte,N6)=>{"use strict";function R0r(){throw new Error("not implemented")}N6.exports=R0r});var Qr=s((bte,O6)=>{"use strict";var F0r=b6(),M0r=E6(),B0r=A6(),zu;F0r()?zu=M0r:zu=B0r;O6.exports=zu});var T6=s((wte,S6)=>{"use strict";var k0r=tr(),j0r=typeof Uint32Array=="function";function C0r(r){return j0r&&r instanceof Uint32Array||k0r(r)==="[object Uint32Array]"}S6.exports=C0r});var Kr=s((Ete,I6)=>{"use strict";var G0r=T6();I6.exports=G0r});var Dt=s((Nte,_6)=>{"use strict";var V0r=4294967295;_6.exports=V0r});var P6=s((Ate,L6)=>{"use strict";var U0r=typeof Uint32Array=="function"?Uint32Array:null;L6.exports=U0r});var M6=s((Ote,F6)=>{"use strict";var H0r=Kr(),Du=Dt(),R6=P6();function W0r(){var r,e;if(typeof R6!="function")return!1;try{e=[1,3.14,-3.14,Du+1,Du+2],e=new R6(e),r=H0r(e)&&e[0]===1&&e[1]===3&&e[2]===Du-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}F6.exports=W0r});var k6=s((Ste,B6)=>{"use strict";var z0r=M6();B6.exports=z0r});var C6=s((Tte,j6)=>{"use strict";var D0r=typeof Uint32Array=="function"?Uint32Array:void 0;j6.exports=D0r});var V6=s((Ite,G6)=>{"use strict";function X0r(){throw new Error("not implemented")}G6.exports=X0r});var lr=s((_te,U6)=>{"use strict";var J0r=k6(),x0r=C6(),Y0r=V6(),Xu;J0r()?Xu=x0r:Xu=Y0r;U6.exports=Xu});var W6=s((Lte,H6)=>{"use strict";var Z0r=tr(),$0r=typeof Int32Array=="function";function Q0r(r){return $0r&&r instanceof Int32Array||Z0r(r)==="[object Int32Array]"}H6.exports=Q0r});var $n=s((Pte,z6)=>{"use strict";var K0r=W6();z6.exports=K0r});var Xt=s((Rte,D6)=>{"use strict";var rsr=2147483647;D6.exports=rsr});var J6=s((Fte,X6)=>{"use strict";var esr=-2147483648;X6.exports=esr});var Y6=s((Mte,x6)=>{"use strict";var tsr=typeof Int32Array=="function"?Int32Array:null;x6.exports=tsr});var Q6=s((Bte,$6)=>{"use strict";var isr=$n(),nsr=Xt(),asr=J6(),Z6=Y6();function ssr(){var r,e;if(typeof Z6!="function")return!1;try{e=new Z6([1,3.14,-3.14,nsr+1]),r=isr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===asr}catch{r=!1}return r}$6.exports=ssr});var r8=s((kte,K6)=>{"use strict";var usr=Q6();K6.exports=usr});var t8=s((jte,e8)=>{"use strict";var osr=typeof Int32Array=="function"?Int32Array:void 0;e8.exports=osr});var n8=s((Cte,i8)=>{"use strict";function vsr(){throw new Error("not implemented")}i8.exports=vsr});var Et=s((Gte,a8)=>{"use strict";var fsr=r8(),csr=t8(),lsr=n8(),Ju;fsr()?Ju=csr:Ju=lsr;a8.exports=Ju});var u8=s((Vte,s8)=>{"use strict";var psr=tr(),gsr=typeof Uint16Array=="function";function msr(r){return gsr&&r instanceof Uint16Array||psr(r)==="[object Uint16Array]"}s8.exports=msr});var v8=s((Ute,o8)=>{"use strict";var dsr=u8();o8.exports=dsr});var c8=s((Hte,f8)=>{"use strict";var hsr=65535;f8.exports=hsr});var p8=s((Wte,l8)=>{"use strict";var qsr=typeof Uint16Array=="function"?Uint16Array:null;l8.exports=qsr});var d8=s((zte,m8)=>{"use strict";var ysr=v8(),xu=c8(),g8=p8();function bsr(){var r,e;if(typeof g8!="function")return!1;try{e=[1,3.14,-3.14,xu+1,xu+2],e=new g8(e),r=ysr(e)&&e[0]===1&&e[1]===3&&e[2]===xu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}m8.exports=bsr});var q8=s((Dte,h8)=>{"use strict";var wsr=d8();h8.exports=wsr});var b8=s((Xte,y8)=>{"use strict";var Esr=typeof Uint16Array=="function"?Uint16Array:void 0;y8.exports=Esr});var E8=s((Jte,w8)=>{"use strict";function Nsr(){throw new Error("not implemented")}w8.exports=Nsr});var Jt=s((xte,N8)=>{"use strict";var Asr=q8(),Osr=b8(),Ssr=E8(),Yu;Asr()?Yu=Osr:Yu=Ssr;N8.exports=Yu});var O8=s((Yte,A8)=>{"use strict";var Tsr=tr(),Isr=typeof Int16Array=="function";function _sr(r){return Isr&&r instanceof Int16Array||Tsr(r)==="[object Int16Array]"}A8.exports=_sr});var T8=s((Zte,S8)=>{"use strict";var Lsr=O8();S8.exports=Lsr});var _8=s(($te,I8)=>{"use strict";var Psr=32767;I8.exports=Psr});var P8=s((Qte,L8)=>{"use strict";var Rsr=-32768;L8.exports=Rsr});var F8=s((Kte,R8)=>{"use strict";var Fsr=typeof Int16Array=="function"?Int16Array:null;R8.exports=Fsr});var k8=s((rie,B8)=>{"use strict";var Msr=T8(),Bsr=_8(),ksr=P8(),M8=F8();function jsr(){var r,e;if(typeof M8!="function")return!1;try{e=new M8([1,3.14,-3.14,Bsr+1]),r=Msr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===ksr}catch{r=!1}return r}B8.exports=jsr});var C8=s((eie,j8)=>{"use strict";var Csr=k8();j8.exports=Csr});var V8=s((tie,G8)=>{"use strict";var Gsr=typeof Int16Array=="function"?Int16Array:void 0;G8.exports=Gsr});var H8=s((iie,U8)=>{"use strict";function Vsr(){throw new Error("not implemented")}U8.exports=Vsr});var Di=s((nie,W8)=>{"use strict";var Usr=C8(),Hsr=V8(),Wsr=H8(),Zu;Usr()?Zu=Hsr:Zu=Wsr;W8.exports=Zu});var D8=s((aie,z8)=>{"use strict";var zsr=tr(),Dsr=typeof Uint8Array=="function";function Xsr(r){return Dsr&&r instanceof Uint8Array||zsr(r)==="[object Uint8Array]"}z8.exports=Xsr});var J8=s((sie,X8)=>{"use strict";var Jsr=D8();X8.exports=Jsr});var Y8=s((uie,x8)=>{"use strict";var xsr=255;x8.exports=xsr});var $8=s((oie,Z8)=>{"use strict";var Ysr=typeof Uint8Array=="function"?Uint8Array:null;Z8.exports=Ysr});var r5=s((vie,K8)=>{"use strict";var Zsr=J8(),$u=Y8(),Q8=$8();function $sr(){var r,e;if(typeof Q8!="function")return!1;try{e=[1,3.14,-3.14,$u+1,$u+2],e=new Q8(e),r=Zsr(e)&&e[0]===1&&e[1]===3&&e[2]===$u-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}K8.exports=$sr});var t5=s((fie,e5)=>{"use strict";var Qsr=r5();e5.exports=Qsr});var n5=s((cie,i5)=>{"use strict";var Ksr=typeof Uint8Array=="function"?Uint8Array:void 0;i5.exports=Ksr});var s5=s((lie,a5)=>{"use strict";function rur(){throw new Error("not implemented")}a5.exports=rur});var xt=s((pie,u5)=>{"use strict";var eur=t5(),tur=n5(),iur=s5(),Qu;eur()?Qu=tur:Qu=iur;u5.exports=Qu});var v5=s((gie,o5)=>{"use strict";var nur=tr(),aur=typeof Uint8ClampedArray=="function";function sur(r){return aur&&r instanceof Uint8ClampedArray||nur(r)==="[object Uint8ClampedArray]"}o5.exports=sur});var c5=s((mie,f5)=>{"use strict";var uur=v5();f5.exports=uur});var p5=s((die,l5)=>{"use strict";var our=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;l5.exports=our});var d5=s((hie,m5)=>{"use strict";var vur=c5(),g5=p5();function fur(){var r,e;if(typeof g5!="function")return!1;try{e=new g5([-1,0,1,3.14,4.99,255,256]),r=vur(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}m5.exports=fur});var q5=s((qie,h5)=>{"use strict";var cur=d5();h5.exports=cur});var b5=s((yie,y5)=>{"use strict";var lur=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;y5.exports=lur});var E5=s((bie,w5)=>{"use strict";function pur(){throw new Error("not implemented")}w5.exports=pur});var Xi=s((wie,N5)=>{"use strict";var gur=q5(),mur=b5(),dur=E5(),Ku;gur()?Ku=mur:Ku=dur;N5.exports=Ku});var O5=s((Eie,A5)=>{"use strict";var hur=tr(),qur=typeof Int8Array=="function";function yur(r){return qur&&r instanceof Int8Array||hur(r)==="[object Int8Array]"}A5.exports=yur});var T5=s((Nie,S5)=>{"use strict";var bur=O5();S5.exports=bur});var _5=s((Aie,I5)=>{"use strict";var wur=127;I5.exports=wur});var P5=s((Oie,L5)=>{"use strict";var Eur=-128;L5.exports=Eur});var F5=s((Sie,R5)=>{"use strict";var Nur=typeof Int8Array=="function"?Int8Array:null;R5.exports=Nur});var k5=s((Tie,B5)=>{"use strict";var Aur=T5(),Our=_5(),Sur=P5(),M5=F5();function Tur(){var r,e;if(typeof M5!="function")return!1;try{e=new M5([1,3.14,-3.14,Our+1]),r=Aur(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Sur}catch{r=!1}return r}B5.exports=Tur});var C5=s((Iie,j5)=>{"use strict";var Iur=k5();j5.exports=Iur});var V5=s((_ie,G5)=>{"use strict";var _ur=typeof Int8Array=="function"?Int8Array:void 0;G5.exports=_ur});var H5=s((Lie,U5)=>{"use strict";function Lur(){throw new Error("not implemented")}U5.exports=Lur});var Ji=s((Pie,W5)=>{"use strict";var Pur=C5(),Rur=V5(),Fur=H5(),ro;Pur()?ro=Rur:ro=Fur;W5.exports=ro});var eo=s((Rie,z5)=>{"use strict";function Mur(r){return typeof r=="number"}z5.exports=Mur});var X5=s((Fie,D5)=>{"use strict";D5.exports=Number});var Qn=s((Mie,J5)=>{"use strict";var Bur=X5();J5.exports=Bur});var Y5=s((Bie,x5)=>{"use strict";var kur=Qn(),jur=kur.prototype.toString;x5.exports=jur});var $5=s((kie,Z5)=>{"use strict";var Cur=Y5();function Gur(r){try{return Cur.call(r),!0}catch{return!1}}Z5.exports=Gur});var to=s((jie,Q5)=>{"use strict";var Vur=Wi(),Uur=tr(),Hur=Qn(),Wur=$5(),zur=Vur();function Dur(r){return typeof r=="object"?r instanceof Hur?!0:zur?Wur(r):Uur(r)==="[object Number]":!1}Q5.exports=Dur});var rp=s((Cie,K5)=>{"use strict";var Xur=eo(),Jur=to();function xur(r){return Xur(r)||Jur(r)}K5.exports=xur});var j=s((Gie,tp)=>{"use strict";var ep=w(),io=rp(),Yur=eo(),Zur=to();ep(io,"isPrimitive",Yur);ep(io,"isObject",Zur);tp.exports=io});var G=s((Vie,ip)=>{"use strict";var $ur=Qn(),Qur=$ur.NEGATIVE_INFINITY;ip.exports=Qur});var no=s((Uie,np)=>{"use strict";var Kur=_(),ror=G(),eor=Tr();function tor(r){return r<Kur&&r>ror&&eor(r)}np.exports=tor});var ao=s((Hie,ap)=>{"use strict";var ior=j().isPrimitive,nor=no();function aor(r){return ior(r)&&nor(r)}ap.exports=aor});var so=s((Wie,sp)=>{"use strict";var sor=j().isObject,uor=no();function oor(r){return sor(r)&&uor(r.valueOf())}sp.exports=oor});var op=s((zie,up)=>{"use strict";var vor=ao(),cor=so();function lor(r){return vor(r)||cor(r)}up.exports=lor});var Cr=s((Die,fp)=>{"use strict";var vp=w(),uo=op(),por=ao(),gor=so();vp(uo,"isPrimitive",por);vp(uo,"isObject",gor);fp.exports=uo});var oo=s((Xie,cp)=>{"use strict";var mor=Cr().isPrimitive;function dor(r){return mor(r)&&r>=0}cp.exports=dor});var vo=s((Jie,lp)=>{"use strict";var hor=Cr().isObject;function qor(r){return hor(r)&&r.valueOf()>=0}lp.exports=qor});var gp=s((xie,pp)=>{"use strict";var yor=oo(),bor=vo();function wor(r){return yor(r)||bor(r)}pp.exports=wor});var Ge=s((Yie,dp)=>{"use strict";var mp=w(),fo=gp(),Eor=oo(),Nor=vo();mp(fo,"isPrimitive",Eor);mp(fo,"isObject",Nor);dp.exports=fo});var qp=s((Zie,hp)=>{"use strict";var Aor=4294967295;hp.exports=Aor});var bp=s(($ie,yp)=>{"use strict";var Oor=Tr(),Sor=qp();function Tor(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Oor(r.length)&&r.length>=0&&r.length<=Sor}yp.exports=Tor});var Nt=s((Qie,wp)=>{"use strict";var Ior=bp();wp.exports=Ior});var Np=s((Kie,Ep)=>{"use strict";var _or=tr(),Lor=typeof ArrayBuffer=="function";function Por(r){return Lor&&r instanceof ArrayBuffer||_or(r)==="[object ArrayBuffer]"}Ep.exports=Por});var co=s((rne,Ap)=>{"use strict";var Ror=Np();Ap.exports=Ror});var Sp=s((ene,Op)=>{"use strict";var For=cr();function Mor(r){return typeof r=="object"&&r!==null&&!For(r)}Op.exports=Mor});var Kn=s((tne,Tp)=>{"use strict";var Bor=Sp();Tp.exports=Bor});var _p=s((ine,Ip)=>{"use strict";function kor(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}Ip.exports=kor});var Pp=s((nne,Lp)=>{"use strict";function jor(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}Lp.exports=jor});var kp=s((ane,Bp)=>{"use strict";var Rp=j().isPrimitive,Fp=je(),xi=w(),Mp=y(),Cor=_p(),Gor=Pp();function At(r,e){if(!(this instanceof At))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Rp(r))throw new TypeError(Mp("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Rp(e))throw new TypeError(Mp("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Fp(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),Fp(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}xi(At,"BYTES_PER_ELEMENT",8);xi(At.prototype,"BYTES_PER_ELEMENT",8);xi(At.prototype,"byteLength",16);xi(At.prototype,"toString",Cor);xi(At.prototype,"toJSON",Gor);Bp.exports=At});var Yt=s((sne,jp)=>{"use strict";var Vor=kp();jp.exports=Vor});var Gp=s((une,Cp)=>{"use strict";var Uor=typeof Math.fround=="function"?Math.fround:null;Cp.exports=Uor});var Hp=s((one,Up)=>{"use strict";var Hor=Qr(),Vp=new Hor(1);function Wor(r){return Vp[0]=r,Vp[0]}Up.exports=Wor});var Dp=s((vne,zp)=>{"use strict";var Wp=Gp(),zor=Hp(),lo;typeof Wp=="function"?lo=Wp:lo=zor;zp.exports=lo});var Jp=s((fne,Xp)=>{"use strict";function Dor(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}Xp.exports=Dor});var Yp=s((cne,xp)=>{"use strict";function Xor(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}xp.exports=Xor});var e7=s((lne,r7)=>{"use strict";var Zp=j().isPrimitive,$p=je(),Yi=w(),Qp=Dp(),Kp=y(),Jor=Jp(),xor=Yp();function Ot(r,e){if(!(this instanceof Ot))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Zp(r))throw new TypeError(Kp("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Zp(e))throw new TypeError(Kp("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return $p(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Qp(r)}),$p(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Qp(e)}),this}Yi(Ot,"BYTES_PER_ELEMENT",4);Yi(Ot.prototype,"BYTES_PER_ELEMENT",4);Yi(Ot.prototype,"byteLength",8);Yi(Ot.prototype,"toString",Jor);Yi(Ot.prototype,"toJSON",xor);r7.exports=Ot});var Zt=s((pne,t7)=>{"use strict";var Yor=e7();t7.exports=Yor});var n7=s((gne,i7)=>{"use strict";var Zor=Yt(),$or=Zt();function Qor(r){return r instanceof Zor||r instanceof $or?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}i7.exports=Qor});var Gr=s((mne,a7)=>{"use strict";var Kor=n7();a7.exports=Kor});var u7=s((dne,s7)=>{"use strict";var r2r=Tr();function e2r(r){return r2r(r/2)}s7.exports=e2r});var ra=s((hne,o7)=>{"use strict";var t2r=u7();o7.exports=t2r});var f7=s((qne,v7)=>{"use strict";var i2r=O(),ea=_u();function n2r(){return typeof ea=="function"&&typeof ea("foo")=="symbol"&&i2r(ea,"iterator")&&typeof ea.iterator=="symbol"}v7.exports=n2r});var ta=s((yne,c7)=>{"use strict";var a2r=f7();c7.exports=a2r});var p7=s((bne,l7)=>{"use strict";var s2r=ta(),u2r=s2r()?Symbol.iterator:null;l7.exports=u2r});var ia=s((wne,g7)=>{"use strict";var o2r=p7();g7.exports=o2r});var d7=s((Ene,m7)=>{"use strict";var v2r=je();function f2r(r,e,t){v2r(r,e,{configurable:!1,enumerable:!1,get:t})}m7.exports=f2r});var P=s((Nne,h7)=>{"use strict";var c2r=d7();h7.exports=c2r});var y7=s((Ane,q7)=>{"use strict";function l2r(r){return r.re}q7.exports=l2r});var Ve=s((One,b7)=>{"use strict";var p2r=y7();b7.exports=p2r});var E7=s((Sne,w7)=>{"use strict";function g2r(r){return r.im}w7.exports=g2r});var Ue=s((Tne,N7)=>{"use strict";var m2r=E7();N7.exports=m2r});var O7=s((Ine,A7)=>{"use strict";var d2r=Qr();function h2r(r,e){return new d2r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}A7.exports=h2r});var $t=s((_ne,S7)=>{"use strict";var q2r=O7();S7.exports=q2r});var I7=s((Lne,T7)=>{"use strict";var y2r=gr();function b2r(r,e){return new y2r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}T7.exports=b2r});var Qt=s((Pne,_7)=>{"use strict";var w2r=I7();_7.exports=w2r});var R7=s((Rne,P7)=>{"use strict";var L7={float64:E2r,float32:N2r,int32:A2r,int16:O2r,int8:S2r,uint32:T2r,uint16:I2r,uint8:_2r,uint8c:L2r,generic:P2r,default:R2r};function E2r(r,e){return r[e]}function N2r(r,e){return r[e]}function A2r(r,e){return r[e]}function O2r(r,e){return r[e]}function S2r(r,e){return r[e]}function T2r(r,e){return r[e]}function I2r(r,e){return r[e]}function _2r(r,e){return r[e]}function L2r(r,e){return r[e]}function P2r(r,e){return r[e]}function R2r(r,e){return r[e]}function F2r(r){var e=L7[r];return typeof e=="function"?e:L7.default}P7.exports=F2r});var na=s((Fne,F7)=>{"use strict";var M2r=R7();F7.exports=M2r});var k7=s((Mne,B7)=>{"use strict";var M7={complex128:B2r,complex64:k2r,default:j2r};function B2r(r,e){return r.get(e)}function k2r(r,e){return r.get(e)}function j2r(r,e){return r.get(e)}function C2r(r){var e=M7[r];return typeof e=="function"?e:M7.default}B7.exports=C2r});var aa=s((Bne,j7)=>{"use strict";var G2r=k7();j7.exports=G2r});var G7=s((kne,C7)=>{"use strict";var V2r=Nt(),U2r=Gr(),H2r=Ve(),W2r=Ue(),z2r=y();function D2r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,V2r(i)&&i.length>=2)e.push(i[0],i[1]);else if(U2r(i))e.push(H2r(i),W2r(i));else return new TypeError(z2r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}C7.exports=D2r});var U7=s((jne,V7)=>{"use strict";var X2r=Nt(),J2r=Gr(),x2r=Ve(),Y2r=Ue(),Z2r=y();function $2r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),X2r(a)&&a.length>=2)i.push(a[0],a[1]);else if(J2r(a))i.push(x2r(a),Y2r(a));else return new TypeError(Z2r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}V7.exports=$2r});var W7=s((Cne,H7)=>{"use strict";var Q2r=Gr(),K2r=Ve(),r1r=Ue();function e1r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!Q2r(i))return null;r[a]=K2r(i),r[a+1]=r1r(i),a+=2}return r}H7.exports=e1r});var Q7=s((Gne,$7)=>{"use strict";var Zi=Ge().isPrimitive,z7=Nt(),go=jr(),D7=co(),X7=Kn(),t1r=cr(),St=L(),Kt=Gr(),sa=ra(),po=Tr(),i1r=ta(),ri=ia(),mr=w(),va=P(),Rr=Qr(),J7=Zt(),x=y(),ua=Ve(),oa=Ue(),n1r=$t(),a1r=Qt(),s1r=na(),u1r=aa(),x7=G7(),o1r=U7(),v1r=W7(),Ir=Rr.BYTES_PER_ELEMENT*2,Y7=i1r();function ei(r){return r instanceof Q||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Z7(r){return r===Q||r.name==="Complex128Array"}function f1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ir}function c1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ir*2}function Q(){var r,e,t,i;if(e=arguments.length,!(this instanceof Q))return e===0?new Q:e===1?new Q(arguments[0]):e===2?new Q(arguments[0],arguments[1]):new Q(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Rr(0);else if(e===1)if(Zi(arguments[0]))t=new Rr(arguments[0]*2);else if(go(arguments[0]))if(t=arguments[0],i=t.length,i&&t1r(t)&&Kt(t[0])){if(t=v1r(new Rr(i*2),t),t===null){if(!sa(i))throw new RangeError(x("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Rr(arguments[0])}}else{if(f1r(t))t=n1r(t,0);else if(c1r(t))t=a1r(t,0);else if(!sa(i))throw new RangeError(x("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Rr(t)}else if(D7(arguments[0])){if(t=arguments[0],!po(t.byteLength/Ir))throw new RangeError(x("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ir,t.byteLength));t=new Rr(t)}else if(X7(arguments[0])){if(t=arguments[0],Y7===!1)throw new TypeError(x("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!St(t[ri]))throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ri](),!St(t.next))throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=x7(t),t instanceof Error)throw t;t=new Rr(t)}else throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!D7(t))throw new TypeError(x("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Zi(r))throw new TypeError(x("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!po(r/Ir))throw new RangeError(x("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ir,r));if(e===2){if(i=t.byteLength-r,!po(i/Ir))throw new RangeError(x("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ir,i));t=new Rr(t,r)}else{if(i=arguments[2],!Zi(i))throw new TypeError(x("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ir>t.byteLength-r)throw new RangeError(x("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ir));t=new Rr(t,r,i*2)}}return mr(this,"_buffer",t),mr(this,"_length",t.length/2),this}mr(Q,"BYTES_PER_ELEMENT",Ir);mr(Q,"name","Complex64Array");mr(Q,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,m;if(!St(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Z7(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!St(n))throw new TypeError(x("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(ei(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),Kt(l))u[m]=ua(l),u[m+1]=oa(l);else if(z7(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(x("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(go(e)){if(n){for(v=e.length,e.get&&e.set?f=u1r("default"):f=s1r("default"),p=0;p<v;p++)if(!Kt(f(e,p))){c=!0;break}if(c){if(!sa(v))throw new RangeError(x("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),Kt(l))u[m]=ua(l),u[m+1]=oa(l);else if(z7(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(x("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(X7(e)&&Y7&&St(e[ri])){if(u=e[ri](),!St(u.next))throw new TypeError(x("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=o1r(u,n,t):o=x7(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(x("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});mr(Q,"of",function(){var e,t;if(!St(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Z7(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});va(Q.prototype,"buffer",function(){return this._buffer.buffer});va(Q.prototype,"byteLength",function(){return this._buffer.byteLength});va(Q.prototype,"byteOffset",function(){return this._buffer.byteOffset});mr(Q.prototype,"BYTES_PER_ELEMENT",Q.BYTES_PER_ELEMENT);mr(Q.prototype,"copyWithin",function(e,t){if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});mr(Q.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},mr(i,"next",f),mr(i,"return",v),ri&&mr(i,ri,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new J7(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});mr(Q.prototype,"get",function(e){var t;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Zi(e))throw new TypeError(x("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new J7(t[e],t[e+1])});va(Q.prototype,"length",function(){return this._length});mr(Q.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Zi(i))throw new TypeError(x("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Kt(e)){if(i>=this._length)throw new RangeError(x("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=ua(e),n[i+1]=oa(e);return}if(ei(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Ir,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Rr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(go(e)){for(o=e.length,v=0;v<o;v++)if(!Kt(e[v])){u=!0;break}if(u){if(!sa(o))throw new RangeError(x("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Ir,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Rr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=ua(f),n[i+1]=oa(f),i+=2;return}throw new TypeError(x("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});$7.exports=Q});var $i=s((Vne,K7)=>{"use strict";var l1r=Q7();K7.exports=l1r});var e9=s((Une,r9)=>{"use strict";function p1r(r){return r.re}r9.exports=p1r});var He=s((Hne,t9)=>{"use strict";var g1r=e9();t9.exports=g1r});var n9=s((Wne,i9)=>{"use strict";function m1r(r){return r.im}i9.exports=m1r});var We=s((zne,a9)=>{"use strict";var d1r=n9();a9.exports=d1r});var u9=s((Dne,s9)=>{"use strict";var h1r=Nt(),q1r=Gr(),y1r=y(),b1r=He(),w1r=We();function E1r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,h1r(i)&&i.length>=2)e.push(i[0],i[1]);else if(q1r(i))e.push(b1r(i),w1r(i));else return new TypeError(y1r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}s9.exports=E1r});var v9=s((Xne,o9)=>{"use strict";var N1r=Nt(),A1r=Gr(),O1r=y(),S1r=He(),T1r=We();function I1r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),N1r(a)&&a.length>=2)i.push(a[0],a[1]);else if(A1r(a))i.push(S1r(a),T1r(a));else return new TypeError(O1r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}o9.exports=I1r});var c9=s((Jne,f9)=>{"use strict";var _1r=Gr(),L1r=He(),P1r=We();function R1r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!_1r(i))return null;r[a]=L1r(i),r[a+1]=P1r(i),a+=2}return r}f9.exports=R1r});var b9=s((xne,y9)=>{"use strict";var Qi=Ge().isPrimitive,l9=Nt(),ho=jr(),p9=co(),g9=Kn(),F1r=cr(),Tt=L(),ti=Gr(),fa=ra(),mo=Tr(),M1r=ta(),ii=ia(),dr=w(),pa=P(),Fr=gr(),m9=Yt(),ca=He(),la=We(),B1r=$t(),k1r=Qt(),j1r=na(),C1r=aa(),Y=y(),d9=u9(),G1r=v9(),V1r=c9(),_r=Fr.BYTES_PER_ELEMENT*2,h9=M1r();function ni(r){return r instanceof K||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function q9(r){return r===K||r.name==="Complex64Array"}function U1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===_r/2}function H1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===_r}function K(){var r,e,t,i;if(e=arguments.length,!(this instanceof K))return e===0?new K:e===1?new K(arguments[0]):e===2?new K(arguments[0],arguments[1]):new K(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Fr(0);else if(e===1)if(Qi(arguments[0]))t=new Fr(arguments[0]*2);else if(ho(arguments[0]))if(t=arguments[0],i=t.length,i&&F1r(t)&&ti(t[0])){if(t=V1r(new Fr(i*2),t),t===null){if(!fa(i))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(arguments[0])}}else{if(U1r(t))t=B1r(t,0);else if(H1r(t))t=k1r(t,0);else if(!fa(i))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(t)}else if(p9(arguments[0])){if(t=arguments[0],!mo(t.byteLength/_r))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",_r,t.byteLength));t=new Fr(t)}else if(g9(arguments[0])){if(t=arguments[0],h9===!1)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Tt(t[ii]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ii](),!Tt(t.next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=d9(t),t instanceof Error)throw t;t=new Fr(t)}else throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!p9(t))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Qi(r))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!mo(r/_r))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",_r,r));if(e===2){if(i=t.byteLength-r,!mo(i/_r))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",_r,i));t=new Fr(t,r)}else{if(i=arguments[2],!Qi(i))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*_r>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*_r));t=new Fr(t,r,i*2)}}return dr(this,"_buffer",t),dr(this,"_length",t.length/2),this}dr(K,"BYTES_PER_ELEMENT",_r);dr(K,"name","Complex128Array");dr(K,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,m;if(!Tt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!q9(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Tt(n))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(ni(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),ti(l))u[m]=ca(l),u[m+1]=la(l);else if(l9(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(ho(e)){if(n){for(v=e.length,e.get&&e.set?f=C1r("default"):f=j1r("default"),p=0;p<v;p++)if(!ti(f(e,p))){c=!0;break}if(c){if(!fa(v))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),ti(l))u[m]=ca(l),u[m+1]=la(l);else if(l9(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(g9(e)&&h9&&Tt(e[ii])){if(u=e[ii](),!Tt(u.next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=G1r(u,n,t):o=d9(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});dr(K,"of",function(){var e,t;if(!Tt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!q9(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});pa(K.prototype,"buffer",function(){return this._buffer.buffer});pa(K.prototype,"byteLength",function(){return this._buffer.byteLength});pa(K.prototype,"byteOffset",function(){return this._buffer.byteOffset});dr(K.prototype,"BYTES_PER_ELEMENT",K.BYTES_PER_ELEMENT);dr(K.prototype,"copyWithin",function(e,t){if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});dr(K.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},dr(i,"next",f),dr(i,"return",v),ii&&dr(i,ii,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new m9(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});dr(K.prototype,"get",function(e){var t;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qi(e))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new m9(t[e],t[e+1])});pa(K.prototype,"length",function(){return this._length});dr(K.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Qi(i))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ti(e)){if(i>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=ca(e),n[i+1]=la(e);return}if(ni(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(ho(e)){for(o=e.length,v=0;v<o;v++)if(!ti(e[v])){u=!0;break}if(u){if(!fa(o))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=ca(f),n[i+1]=la(f),i+=2;return}throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});y9.exports=K});var Ki=s((Yne,w9)=>{"use strict";var W1r=b9();w9.exports=W1r});var N9=s((Zne,E9)=>{"use strict";var z1r=gr(),D1r=Qr(),X1r=lr(),J1r=Et(),x1r=Jt(),Y1r=Di(),Z1r=xt(),$1r=Xi(),Q1r=Ji(),K1r=$i(),r3r=Ki(),e3r=[z1r,D1r,J1r,X1r,Y1r,x1r,Q1r,Z1r,$1r,K1r,r3r];E9.exports=e3r});var O9=s(($ne,A9)=>{"use strict";var t3r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];A9.exports=t3r});var I9=s((Qne,T9)=>{"use strict";var i3r=wt(),n3r=cr(),a3r=Ce(),s3r=J4(),u3r=N9(),S9=O9(),o3r=S9.length;function v3r(r){var e;if(n3r(r))return"generic";if(i3r(r))return null;for(e=0;e<o3r;e++)if(r instanceof u3r[e])return S9[e];return s3r[a3r(r)]||null}T9.exports=v3r});var ga=s((Kne,_9)=>{"use strict";var f3r=I9();_9.exports=f3r});var R9=s((rae,P9)=>{"use strict";var L9=L(),c3r=jr(),l3r=F4(),p3r=Gu(),g3r=Vu(),m3r=Uu(),d3r=ga(),qo=y();function h3r(){var r,e,t,i,n,a,u,o,f;if(r=arguments[0],arguments.length>1)if(c3r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!L9(t))throw new TypeError(qo("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!L9(t))throw new TypeError(qo("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!l3r(r))throw new TypeError(qo("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=d3r(i),p3r(i)?a=g3r(u):a=m3r(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}P9.exports=h3r});var M9=s((eae,F9)=>{"use strict";var q3r=R9();F9.exports=q3r});var k9=s((tae,B9)=>{"use strict";function y3r(r){return r!==r}B9.exports=y3r});var E=s((iae,j9)=>{"use strict";var b3r=k9();j9.exports=b3r});var G9=s((nae,C9)=>{"use strict";var w3r={Complex64:"complex64",Complex128:"complex128"};C9.exports=w3r});var U9=s((aae,V9)=>{"use strict";var E3r=Zt(),N3r=Yt(),A3r=[E3r,N3r];V9.exports=A3r});var W9=s((sae,H9)=>{"use strict";var O3r=["complex64","complex128"];H9.exports=O3r});var X9=s((uae,D9)=>{"use strict";var S3r=Ce(),T3r=G9(),I3r=U9(),z9=W9(),_3r=z9.length;function L3r(r){var e;for(e=0;e<_3r;e++)if(r instanceof I3r[e])return z9[e];return T3r[S3r(r)]||null}D9.exports=L3r});var yo=s((oae,J9)=>{"use strict";var P3r=X9();J9.exports=P3r});var Y9=s((vae,x9)=>{"use strict";var R3r=gr(),F3r=Qr(),M3r=Ki(),B3r=$i(),k3r={float64:R3r,float32:F3r,complex128:M3r,complex64:B3r};x9.exports=k3r});var $9=s((fae,Z9)=>{"use strict";var j3r=Y9();function C3r(r){return j3r[r]||null}Z9.exports=C3r});var K9=s((cae,Q9)=>{"use strict";var G3r=$9();Q9.exports=G3r});var eg=s((lae,rg)=>{"use strict";function V3r(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}rg.exports=V3r});var ug=s((pae,sg)=>{"use strict";var U3r=Zt(),H3r=Yt(),tg=He(),ig=We(),ng=Ve(),ag=Ue();function W3r(r,e,t,i,n,a){var u,o,f,v,c,l,p,m,h,d,g,q,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=ng(e),l=ag(e)):(v=tg(e),l=ig(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=ng(i),p=ag(i)):(c=tg(i),p=ig(i)),o===2?u=U3r:u=H3r,n===1)return a?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],a?q=n-1:q=n,d=(c-v)/q,g=(p-l)/q,N=1;N<q;N++)m=v+d*N,h=l+g*N,f.push(new u(m,h));return a&&f.push(new u(c,p)),f}sg.exports=W3r});var bo=s((gae,og)=>{"use strict";function z3r(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}og.exports=z3r});var wo=s((mae,pg)=>{"use strict";var vg=He(),fg=We(),cg=Ve(),lg=Ue();function D3r(r,e,t,i,n,a,u){var o,f,v,c,l,p,m,h,d;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=cg(t),v=lg(t)):(o=vg(t),v=fg(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=cg(n),c=lg(n)):(f=vg(n),c=fg(n)),a===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?m=a-1:m=a,l=(f-o)/m,p=(c-v)/m,d=2,h=1;h<m;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}pg.exports=D3r});var mg=s((dae,gg)=>{"use strict";var X3r=Object;gg.exports=X3r});var ai=s((hae,dg)=>{"use strict";var J3r=mg();dg.exports=J3r});var qg=s((qae,hg)=>{"use strict";var x3r=Object.getPrototypeOf;hg.exports=x3r});var bg=s((yae,yg)=>{"use strict";function Y3r(r){return r.__proto__}yg.exports=Y3r});var Eg=s((bae,wg)=>{"use strict";var Z3r=tr(),$3r=bg();function Q3r(r){var e=$3r(r);return e||e===null?e:Z3r(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}wg.exports=Q3r});var Ag=s((wae,Ng)=>{"use strict";var K3r=L(),rvr=qg(),evr=Eg(),Eo;K3r(Object.getPrototypeOf)?Eo=rvr:Eo=evr;Ng.exports=Eo});var Sg=s((Eae,Og)=>{"use strict";var tvr=ai(),ivr=Ag();function nvr(r){return r==null?null:(r=tvr(r),ivr(r))}Og.exports=nvr});var It=s((Nae,Tg)=>{"use strict";var avr=Sg();Tg.exports=avr});var Lg=s((Aae,_g)=>{"use strict";var svr=Kn(),Ig=L(),uvr=It(),ma=O(),ovr=tr(),vvr=Object.prototype;function fvr(r){var e;for(e in r)if(!ma(r,e))return!1;return!0}function cvr(r){var e;return svr(r)?(e=uvr(r),e?!ma(r,"constructor")&&ma(e,"constructor")&&Ig(e.constructor)&&ovr(e.constructor)==="[object Function]"&&ma(e,"isPrototypeOf")&&Ig(e.isPrototypeOf)&&(e===vvr||fvr(r)):!0):!1}_g.exports=cvr});var I=s((Oae,Pg)=>{"use strict";var lvr=Lg();Pg.exports=lvr});var No=s((Sae,Rg)=>{"use strict";function pvr(r){return typeof r=="string"}Rg.exports=pvr});var Mg=s((Tae,Fg)=>{"use strict";var gvr=String.prototype.valueOf;Fg.exports=gvr});var kg=s((Iae,Bg)=>{"use strict";var mvr=Mg();function dvr(r){try{return mvr.call(r),!0}catch{return!1}}Bg.exports=dvr});var Ao=s((_ae,jg)=>{"use strict";var hvr=Wi(),qvr=tr(),yvr=kg(),bvr=hvr();function wvr(r){return typeof r=="object"?r instanceof String?!0:bvr?yvr(r):qvr(r)==="[object String]":!1}jg.exports=wvr});var Gg=s((Lae,Cg)=>{"use strict";var Evr=No(),Nvr=Ao();function Avr(r){return Evr(r)||Nvr(r)}Cg.exports=Avr});var rr=s((Pae,Ug)=>{"use strict";var Vg=w(),Oo=Gg(),Ovr=No(),Svr=Ao();Vg(Oo,"isPrimitive",Ovr);Vg(Oo,"isObject",Svr);Ug.exports=Oo});var To=s((Rae,Wg)=>{"use strict";var Tvr=I(),Hg=O(),Ivr=rr().isPrimitive,_vr=fr().isPrimitive,So=y();function Lvr(r,e){return Tvr(e)?Hg(e,"dtype")&&(r.dtype=e.dtype,!Ivr(r.dtype))?new TypeError(So("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Hg(e,"endpoint")&&(r.endpoint=e.endpoint,!_vr(r.endpoint))?new TypeError(So("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(So("invalid argument. Options argument must be an object. Value: `%s`.",e))}Wg.exports=Lvr});var Io=s((Fae,Pvr)=>{Pvr.exports={endpoint:!0}});var Zg=s((Mae,Yg)=>{"use strict";var zg=Gr(),Dg=j().isPrimitive,Rvr=Ge().isPrimitive,Xg=E(),Jg=yo(),Fvr=K9(),Mvr=$t(),Bvr=Qt(),si=y(),kvr=eg(),jvr=ug(),Cvr=bo(),xg=wo(),Gvr=To(),Vvr=Io();function Uvr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(o=Jg(r),o===null){if(!zg(r))throw new TypeError(si("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!Dg(r)||Xg(r))throw new TypeError(si("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=Jg(e),f===null){if(!zg(e))throw new TypeError(si("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!Dg(e)||Xg(e))throw new TypeError(si("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!Rvr(t))throw new TypeError(si("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Vvr.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=Gvr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?jvr(o,r,f,e,t,i.endpoint):kvr(r,e,t,i.endpoint);if(n=Fvr(i.dtype),n===null)throw new TypeError(si('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return xg(Mvr(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return xg(Bvr(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return Cvr(u,r,e,t,i.endpoint)}Yg.exports=Uvr});var Qg=s((Bae,$g)=>{"use strict";var Hvr=Gu(),Wvr=na(),zvr=Uu(),Dvr=aa(),Xvr=Vu(),Jvr=ga();function xvr(r){var e=Jvr(r);return Hvr(r)?{accessorProtocol:!0,accessors:[Dvr(e),Xvr(e)]}:{accessorProtocol:!1,accessors:[Wvr(e),zvr(e)]}}$g.exports=xvr});var rm=s((kae,Kg)=>{"use strict";var Yvr=Qg();Kg.exports=Yvr});var tm=s((jae,em)=>{"use strict";var Zvr=rm();function $vr(r){var e=Zvr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}em.exports=$vr});var da=s((Cae,im)=>{"use strict";var Qvr=tm();im.exports=Qvr});var vm=s((Gae,om)=>{"use strict";var Kvr=Zt(),rfr=Yt(),nm=He(),am=We(),sm=Ve(),um=Ue();function efr(r,e,t,i,n,a,u){var o,f,v,c,l,p,m,h,d,g,q,N,A,k;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=sm(t),l=um(t)):(v=nm(t),l=am(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=sm(n),p=um(n)):(c=nm(n),p=am(n)),f===2?o=Kvr:o=rfr,h=r.data,m=r.accessors[1],a===1)return u?m(h,0,new o(c,p)):m(h,0,new o(v,l)),r;for(m(h,0,new o(v,l)),u?A=a-1:A=a,q=(c-v)/A,N=(p-l)/A,k=1;k<A;k++)d=v+q*k,g=l+N*k,m(h,k,new o(d,g));return u&&m(h,A,new o(c,p)),r}om.exports=efr});var cm=s((Vae,fm)=>{"use strict";function tfr(r,e,t,i,n){var a,u,o,f,v;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(a,v,e+f*v);return n&&u(a,o,t),r}fm.exports=tfr});var ym=s((Uae,qm)=>{"use strict";var lm=Gr(),pm=j().isPrimitive,ifr=jr(),rn=y(),gm=E(),mm=yo(),nfr=ga(),afr=$t(),sfr=Qt(),dm=da(),ufr=vm(),ofr=cm(),hm=wo(),vfr=bo(),ffr=To(),cfr=Io();function lfr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(a=mm(r),a===null){if(!lm(r))throw new TypeError(rn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!pm(r)||gm(r))throw new TypeError(rn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=mm(e),u===null){if(!lm(e))throw new TypeError(rn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!pm(e)||gm(e))throw new TypeError(rn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!ifr(t))throw new TypeError(rn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:cfr.endpoint},arguments.length>3&&(n=ffr(i,arguments[3]),n))throw n;if(f=nfr(t),f===null&&(f="generic"),f==="complex64")return hm(afr(t,0),a,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return hm(sfr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=dm(t),ufr(v,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=dm(t),v.accessorProtocol?(ofr(v,r,e,t.length,i.endpoint),t):(vfr(t,r,e,t.length,i.endpoint),t)}qm.exports=lfr});var Em=s((Hae,wm)=>{"use strict";var pfr=w(),bm=Zg(),gfr=ym();pfr(bm,"assign",gfr);wm.exports=bm});var Am=s((Wae,Nm)=>{"use strict";var mfr=j().isPrimitive,dfr=rr().isPrimitive,hfr=fr().isPrimitive,qfr=cr(),yfr=y(),bfr={number:mfr,string:dfr,boolean:hfr};function wfr(r,e,t){var i,n,a,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],a=e[f],u=bfr[a],u(o))i.push([[o]]),n.push([1,1]);else if(qfr(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(yfr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],a,a,String(o)));return[i,n]}Nm.exports=wfr});var _o=s((zae,Om)=>{"use strict";var Efr=Am();Om.exports=Efr});var Tm=s((Dae,Sm)=>{"use strict";var Nfr=Yn();function Afr(r){return Nfr(1,r)}Sm.exports=Afr});var _m=s((Xae,Im)=>{"use strict";var Ofr=Tm();Im.exports=Ofr});var Pm=s((Jae,Lm)=>{"use strict";function Sfr(r,e,t){var i,n,a,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],a=0;a<i;a++)f[a]=t(o[a])}Lm.exports=Sfr});var Lo=s((xae,Rm)=>{"use strict";var Tfr=Pm();Rm.exports=Tfr});var Mm=s((Yae,Fm)=>{"use strict";var Ifr=Yn();function _fr(r){return Ifr(0,r)}Fm.exports=_fr});var Po=s((Zae,Bm)=>{"use strict";var Lfr=Mm();Bm.exports=Lfr});var jm=s(($ae,km)=>{"use strict";var Vr=nr(),Pfr=Au(),Rfr=Ou(),Ffr=Yn(),Mfr=kc(),Bfr=Su(),kfr=M9(),jfr=Em(),Cfr=_o(),Gfr=_m(),Vfr=Lo(),Ufr=Po();function Hfr(r){return Vr(r,"bbinary2d",Pfr),Vr(r,"broadcastShapes",Rfr),Vr(r,"filled2d",Ffr),Vr(r,"filled2dBy",Mfr),Vr(r,"flattenArray",Bfr),Vr(r,"iterator2array",kfr),Vr(r,"linspace",jfr),Vr(r,"normalizeBroadcastArgs",Cfr),Vr(r,"ones2d",Gfr),Vr(r,"unary2d",Vfr),Vr(r,"zeros2d",Ufr),r}km.exports=Hfr});var Vm=s((Qae,Gm)=>{"use strict";var Cm=y();function Wfr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(Cm('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(Cm('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}Gm.exports=Wfr});var Hm=s((Kae,Um)=>{"use strict";var zfr=Vm();Um.exports=zfr});var zm=s((r0e,Wm)=>{"use strict";var Dfr=j().isPrimitive,Xfr=Hm(),Jfr=y();function xfr(r,e,t,i,n,a){var u,o;if(!(Dfr(r)&&Xfr(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(Jfr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}Wm.exports=xfr});var Xm=s((e0e,Dm)=>{"use strict";var Yfr=zm();Dm.exports=Yfr});var xm=s((t0e,Jm)=>{"use strict";var Zfr=fr().isPrimitive,$fr=y();function Qfr(r,e){if(!Zfr(r))throw new TypeError($fr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Jm.exports=Qfr});var Zm=s((i0e,Ym)=>{"use strict";var Kfr=xm();Ym.exports=Kfr});var Qm=s((n0e,$m)=>{"use strict";function rcr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}$m.exports=rcr});var rd=s((a0e,Km)=>{"use strict";var ecr=Qm();Km.exports=ecr});var td=s((s0e,ed)=>{"use strict";var tcr=y(),icr=rd();function ncr(r,e,t){if(!icr(r,e))throw new TypeError(tcr("invalid argument. %s must be broadcast compatible.",t))}ed.exports=ncr});var nd=s((u0e,id)=>{"use strict";var acr=td();id.exports=acr});var sd=s((o0e,ad)=>{"use strict";function scr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}ad.exports=scr});var od=s((v0e,ud)=>{"use strict";var ucr=sd();ud.exports=ucr});var fd=s((f0e,vd)=>{"use strict";var ocr=y(),vcr=od();function fcr(r,e,t,i){if(!vcr(r,e))throw new TypeError(ocr("invalid argument. %s must be broadcast compatible with %s.",t,i))}vd.exports=fcr});var ld=s((c0e,cd)=>{"use strict";var ccr=fd();cd.exports=ccr});var gd=s((l0e,pd)=>{"use strict";var lcr=y();function pcr(r,e){if(r===void 0)throw new Error(lcr("invalid invocation. Must provide %s.",e))}pd.exports=pcr});var Ro=s((p0e,md)=>{"use strict";var gcr=gd();md.exports=gcr});var hd=s((g0e,dd)=>{"use strict";var mcr=y();function dcr(r,e,t,i){if(!(r>e))throw new TypeError(mcr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}dd.exports=dcr});var yd=s((m0e,qd)=>{"use strict";var hcr=hd();qd.exports=hcr});var wd=s((d0e,bd)=>{"use strict";var qcr=y();function ycr(r,e,t,i){if(!(r>=e))throw new TypeError(qcr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}bd.exports=ycr});var Nd=s((h0e,Ed)=>{"use strict";var bcr=wd();Ed.exports=bcr});var Od=s((q0e,Ad)=>{"use strict";var wcr=Cr().isPrimitive,Ecr=y();function Ncr(r,e){if(!wcr(r))throw new TypeError(Ecr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}Ad.exports=Ncr});var Td=s((y0e,Sd)=>{"use strict";var Acr=Od();Sd.exports=Acr});var _d=s((b0e,Id)=>{"use strict";var Ocr=y();function Scr(r,e,t,i){if(!(r<e))throw new TypeError(Ocr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Id.exports=Scr});var Pd=s((w0e,Ld)=>{"use strict";var Tcr=_d();Ld.exports=Tcr});var Fd=s((E0e,Rd)=>{"use strict";var Icr=y();function _cr(r,e,t,i){if(!(r<=e))throw new TypeError(Icr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Rd.exports=_cr});var Bd=s((N0e,Md)=>{"use strict";var Lcr=Fd();Md.exports=Lcr});var jd=s((A0e,kd)=>{"use strict";var Pcr=Ge().isPrimitive,Rcr=y();function Fcr(r,e){if(!Pcr(r))throw new TypeError(Rcr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}kd.exports=Fcr});var Gd=s((O0e,Cd)=>{"use strict";var Mcr=jd();Cd.exports=Mcr});var Fo=s((S0e,Vd)=>{"use strict";var Bcr=j().isPrimitive;function kcr(r){return Bcr(r)&&r>=0}Vd.exports=kcr});var Mo=s((T0e,Ud)=>{"use strict";var jcr=j().isObject;function Ccr(r){return jcr(r)&&r.valueOf()>=0}Ud.exports=Ccr});var Wd=s((I0e,Hd)=>{"use strict";var Gcr=Fo(),Vcr=Mo();function Ucr(r){return Gcr(r)||Vcr(r)}Hd.exports=Ucr});var ko=s((_0e,Dd)=>{"use strict";var zd=w(),Bo=Wd(),Hcr=Fo(),Wcr=Mo();zd(Bo,"isPrimitive",Hcr);zd(Bo,"isObject",Wcr);Dd.exports=Bo});var Jd=s((L0e,Xd)=>{"use strict";var zcr=ko().isPrimitive,Dcr=y();function Xcr(r,e){if(!zcr(r))throw new TypeError(Dcr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Xd.exports=Xcr});var Yd=s((P0e,xd)=>{"use strict";var Jcr=Jd();xd.exports=Jcr});var $d=s((R0e,Zd)=>{"use strict";var xcr=j().isPrimitive,Ycr=y();function Zcr(r,e){if(!xcr(r))throw new TypeError(Ycr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Zd.exports=Zcr});var Kd=s((F0e,Qd)=>{"use strict";var $cr=$d();Qd.exports=$cr});var eh=s((M0e,rh)=>{"use strict";var Qcr=y();function Kcr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Qcr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}rh.exports=Kcr});var ih=s((B0e,th)=>{"use strict";var rlr=eh();th.exports=rlr});var jo=s((k0e,nh)=>{"use strict";var elr=Cr().isPrimitive;function tlr(r){return elr(r)&&r>0}nh.exports=tlr});var Co=s((j0e,ah)=>{"use strict";var ilr=Cr().isObject;function nlr(r){return ilr(r)&&r.valueOf()>0}ah.exports=nlr});var uh=s((C0e,sh)=>{"use strict";var alr=jo(),slr=Co();function ulr(r){return alr(r)||slr(r)}sh.exports=ulr});var re=s((G0e,vh)=>{"use strict";var oh=w(),Go=uh(),olr=jo(),vlr=Co();oh(Go,"isPrimitive",olr);oh(Go,"isObject",vlr);vh.exports=Go});var ch=s((V0e,fh)=>{"use strict";var flr=re().isPrimitive,clr=y();function llr(r,e){if(!flr(r))throw new TypeError(clr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}fh.exports=llr});var Vo=s((U0e,lh)=>{"use strict";var plr=ch();lh.exports=plr});var Uo=s((H0e,ph)=>{"use strict";var glr=j().isPrimitive;function mlr(r){return glr(r)&&r>0}ph.exports=mlr});var Ho=s((W0e,gh)=>{"use strict";var dlr=j().isObject;function hlr(r){return dlr(r)&&r.valueOf()>0}gh.exports=hlr});var dh=s((z0e,mh)=>{"use strict";var qlr=Uo(),ylr=Ho();function blr(r){return qlr(r)||ylr(r)}mh.exports=blr});var W=s((D0e,qh)=>{"use strict";var hh=w(),Wo=dh(),wlr=Uo(),Elr=Ho();hh(Wo,"isPrimitive",wlr);hh(Wo,"isObject",Elr);qh.exports=Wo});var bh=s((X0e,yh)=>{"use strict";var Nlr=W().isPrimitive,Alr=y();function Olr(r,e){if(!Nlr(r))throw new TypeError(Alr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}yh.exports=Olr});var Eh=s((J0e,wh)=>{"use strict";var Slr=bh();wh.exports=Slr});var zo=s((x0e,Nh)=>{"use strict";var Tlr=j().isPrimitive;function Ilr(r){return Tlr(r)&&r>=0&&r<=1}Nh.exports=Ilr});var Do=s((Y0e,Ah)=>{"use strict";var _lr=j().isObject;function Llr(r){return _lr(r)&&r.valueOf()>=0&&r.valueOf()<=1}Ah.exports=Llr});var Sh=s((Z0e,Oh)=>{"use strict";var Plr=zo(),Rlr=Do();function Flr(r){return Plr(r)||Rlr(r)}Oh.exports=Flr});var en=s(($0e,Ih)=>{"use strict";var Th=w(),Xo=Sh(),Mlr=zo(),Blr=Do();Th(Xo,"isPrimitive",Mlr);Th(Xo,"isObject",Blr);Ih.exports=Xo});var Lh=s((Q0e,_h)=>{"use strict";var klr=en().isPrimitive,jlr=y();function Clr(r,e){if(!klr(r))throw new TypeError(jlr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}_h.exports=Clr});var Rh=s((K0e,Ph)=>{"use strict";var Glr=Lh();Ph.exports=Glr});var Mh=s((rse,Fh)=>{"use strict";var Vlr=cr(),Ulr=y();function Hlr(r,e){if(!Vlr(r))throw new TypeError(Ulr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Fh.exports=Hlr});var kh=s((ese,Bh)=>{"use strict";var Wlr=Mh();Bh.exports=Wlr});var Ch=s((tse,jh)=>{"use strict";function zlr(r){return r.length===1||r[0].length===1}jh.exports=zlr});var Vh=s((ise,Gh)=>{"use strict";var Dlr=Ch();Gh.exports=Dlr});var Hh=s((nse,Uh)=>{"use strict";var Xlr=cr(),Jlr=Vh();function xlr(r){return Xlr(r)&&Jlr(r)}Uh.exports=xlr});var zh=s((ase,Wh)=>{"use strict";var Ylr=Hh();Wh.exports=Ylr});var Xh=s((sse,Dh)=>{"use strict";var Zlr=y(),$lr=zh();function Qlr(r,e){if(!$lr(r))throw new TypeError(Zlr("invalid argument. %s must consist of only a single row or a single column.",e))}Dh.exports=Qlr});var xh=s((use,Jh)=>{"use strict";var Klr=Xh();Jh.exports=Klr});var Zh=s((ose,Yh)=>{"use strict";function r4r(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}Yh.exports=r4r});var Qh=s((vse,$h)=>{"use strict";var e4r=Zh();$h.exports=e4r});var rq=s((fse,Kh)=>{"use strict";var t4r=y(),i4r=Qh();function n4r(r,e,t){if(!i4r(r,e))throw new TypeError(t4r("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}Kh.exports=n4r});var tq=s((cse,eq)=>{"use strict";var a4r=rq();eq.exports=a4r});var nq=s((lse,iq)=>{"use strict";var s4r=rr().isPrimitive,u4r=y();function o4r(r,e){if(!s4r(r))throw new TypeError(u4r("invalid argument. %s must be a string. Value: %s.",e,String(r)))}iq.exports=o4r});var sq=s((pse,aq)=>{"use strict";var v4r=nq();aq.exports=v4r});var oq=s((gse,uq)=>{"use strict";var f4r=y();function c4r(r){throw new Error(f4r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}uq.exports=c4r});var fq=s((mse,vq)=>{"use strict";var l4r=oq();vq.exports=l4r});var pq=s((dse,lq)=>{"use strict";var cq=Vo(),p4r=Ro();function g4r(r,e,t){cq(r,"Number of rows"),cq(e,"Number of columns"),p4r(t,"a pseudorandom number generator seed")}lq.exports=g4r});var mq=s((hse,gq)=>{"use strict";var m4r=pq();gq.exports=m4r});var hq=s((qse,dq)=>{"use strict";var Z=nr(),d4r=cr(),h4r=Xm(),q4r=Zm(),y4r=nd(),b4r=ld(),w4r=Ro(),E4r=yd(),N4r=Nd(),A4r=Td(),O4r=Pd(),S4r=Bd(),T4r=Gd(),I4r=Yd(),_4r=Kd(),L4r=ih(),P4r=Vo(),R4r=Eh(),F4r=Rh(),M4r=kh(),B4r=xh(),k4r=tq(),j4r=sq(),C4r=fq(),G4r=mq();function V4r(r){return Z(r,"isBetween",h4r),Z(r,"isBoolean",q4r),Z(r,"isBroadcastCompatible",y4r),Z(r,"isBroadcastCompatibleWith",b4r),Z(r,"isDefined",w4r),Z(r,"isGreaterThan",E4r),Z(r,"isGreaterThanEqual",N4r),Z(r,"isInteger",A4r),Z(r,"isLessThan",O4r),Z(r,"isLessThanEqual",S4r),Z(r,"isNonNegativeInteger",T4r),Z(r,"isNonNegativeNumber",I4r),Z(r,"isNumber",_4r),Z(r,"isOneOf",L4r),Z(r,"isPositiveInteger",P4r),Z(r,"isPositiveNumber",R4r),Z(r,"isProbability",F4r),Z(r,"isRange",M4r),Z(r,"isRange1d",B4r),Z(r,"isSameShape",k4r),Z(r,"isString",j4r),Z(r,"unrecognizedOptionName",C4r),Z(r,"verifyCommonPRNGArgs",G4r),r.base={},Z(r.base,"isArray",d4r),r}dq.exports=V4r});var yq=s((yse,qq)=>{"use strict";var Jo=4;function U4r(r,e,t,i,n,a){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%Jo,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<Jo)return n;for(v=f;v<r;v+=Jo)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=a;return n}qq.exports=U4r});var wq=s((bse,bq)=>{"use strict";var tn=4;function H4r(r,e,t,i,n,a,u,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&u===1){if(c=r%tn,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=u;if(r<tn)return a;for(l=c;l<r;l+=tn)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=tn,v+=tn;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=u;return a}bq.exports=H4r});var xo=s((wse,Nq)=>{"use strict";var W4r=w(),Eq=yq(),z4r=wq();W4r(Eq,"ndarray",z4r);Nq.exports=Eq});var Sq=s((Ese,Oq)=>{"use strict";var Aq=nr(),D4r=xo().ndarray,X4r=xo().ndarray;function J4r(r){return Aq(r,"daxpy",D4r),Aq(r,"saxpy",X4r),r}Oq.exports=J4r});var Iq=s((Nse,Tq)=>{"use strict";var x4r=It(),Y4r=tr();function Z4r(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(Y4r(r)==="[object Error]")return!0;r=x4r(r)}return!1}Tq.exports=Z4r});var Lq=s((Ase,_q)=>{"use strict";var $4r=Iq();_q.exports=$4r});var Yo=s((Ose,Pq)=>{"use strict";function Q4r(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Pq.exports=Q4r});var Fq=s((Sse,Rq)=>{"use strict";var K4r=Yo(),r6r=K4r();Rq.exports=r6r});var kq=s((Tse,Bq)=>{"use strict";var e6r=w(),Mq=Yo(),t6r=Fq();e6r(Mq,"REGEXP",t6r);Bq.exports=Mq});var Cq=s((Ise,jq)=>{"use strict";var i6r=rr().isPrimitive,n6r=kq(),a6r=y();function s6r(r){if(!i6r(r))throw new TypeError(a6r("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=n6r().exec(r),r?new RegExp(r[1],r[2]):null}jq.exports=s6r});var Vq=s((_se,Gq)=>{"use strict";var u6r=Cq();Gq.exports=u6r});var Zo=s((Lse,Uq)=>{"use strict";var o6r=j().isPrimitive,v6r=E();function f6r(r){return o6r(r)&&v6r(r)}Uq.exports=f6r});var $o=s((Pse,Hq)=>{"use strict";var c6r=j().isObject,l6r=E();function p6r(r){return c6r(r)&&l6r(r.valueOf())}Hq.exports=p6r});var zq=s((Rse,Wq)=>{"use strict";var g6r=Zo(),m6r=$o();function d6r(r){return g6r(r)||m6r(r)}Wq.exports=d6r});var sr=s((Fse,Xq)=>{"use strict";var Dq=w(),Qo=zq(),h6r=Zo(),q6r=$o();Dq(Qo,"isPrimitive",h6r);Dq(Qo,"isObject",q6r);Xq.exports=Qo});var Zq=s((Mse,Yq)=>{"use strict";var Jq=sr(),y6r=jr(),b6r=rr().isPrimitive,w6r=Cr().isPrimitive,xq=y();function E6r(r,e,t){var i,n;if(!y6r(r)&&!b6r(r))throw new TypeError(xq("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!w6r(t))throw new TypeError(xq("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(Jq(e)){for(;n<i;n++)if(Jq(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}Yq.exports=E6r});var ha=s((Bse,$q)=>{"use strict";var N6r=Zq();$q.exports=N6r});var qa=s((kse,Qq)=>{"use strict";function A6r(r){return Object.keys(Object(r))}Qq.exports=A6r});var ry=s((jse,Kq)=>{"use strict";var O6r=qa();function S6r(){return(O6r(arguments)||"").length!==2}function T6r(){return S6r(1,2)}Kq.exports=T6r});var ty=s((Cse,ey)=>{"use strict";var I6r=typeof Object.keys<"u";ey.exports=I6r});var Ko=s((Gse,iy)=>{"use strict";var _6r=tr();function L6r(r){return _6r(r)==="[object Arguments]"}iy.exports=L6r});var sy=s((Vse,ay)=>{"use strict";var P6r=Ko(),ny;function R6r(){return P6r(arguments)}ny=R6r();ay.exports=ny});var r2=s((Use,uy)=>{"use strict";var F6r=Object.prototype.propertyIsEnumerable;uy.exports=F6r});var fy=s((Hse,vy)=>{"use strict";var M6r=r2(),oy;function B6r(){return!M6r.call("beep","0")}oy=B6r();vy.exports=oy});var ly=s((Wse,cy)=>{"use strict";var k6r=rr(),j6r=sr().isPrimitive,C6r=Cr().isPrimitive,G6r=r2(),V6r=fy();function U6r(r,e){var t;return r==null?!1:(t=G6r.call(r,e),!t&&V6r&&k6r(r)?(e=+e,!j6r(e)&&C6r(e)&&e>=0&&e<r.length):t)}cy.exports=U6r});var nn=s((zse,py)=>{"use strict";var H6r=ly();py.exports=H6r});var my=s((Dse,gy)=>{"use strict";var W6r=O(),z6r=nn(),D6r=cr(),X6r=Tr(),J6r=Dt();function x6r(r){return r!==null&&typeof r=="object"&&!D6r(r)&&typeof r.length=="number"&&X6r(r.length)&&r.length>=0&&r.length<=J6r&&W6r(r,"callee")&&!z6r(r,"callee")}gy.exports=x6r});var t2=s((Xse,dy)=>{"use strict";var Y6r=sy(),Z6r=Ko(),$6r=my(),e2;Y6r?e2=Z6r:e2=$6r;dy.exports=e2});var yy=s((Jse,qy)=>{"use strict";var Q6r=t2(),hy=qa(),K6r=Array.prototype.slice;function r8r(r){return Q6r(r)?hy(K6r.call(r)):hy(r)}qy.exports=r8r});var wy=s((xse,by)=>{"use strict";function e8r(){}by.exports=e8r});var C=s((Yse,Ey)=>{"use strict";var t8r=wy();Ey.exports=t8r});var Ay=s((Zse,Ny)=>{"use strict";var i8r=nn(),n8r=C(),a8r=i8r(n8r,"prototype");Ny.exports=a8r});var Sy=s(($se,Oy)=>{"use strict";var s8r=nn(),u8r={toString:null},o8r=!s8r(u8r,"toString");Oy.exports=o8r});var i2=s((Qse,Ty)=>{"use strict";function v8r(r){return r.constructor&&r.constructor.prototype===r}Ty.exports=v8r});var Iy=s((Kse,f8r)=>{f8r.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Ly=s((rue,_y)=>{"use strict";var c8r=typeof window>"u"?void 0:window;_y.exports=c8r});var My=s((eue,Fy)=>{"use strict";var l8r=O(),p8r=ha(),Py=Zn(),g8r=i2(),m8r=Iy(),ui=Ly(),Ry;function d8r(){var r;if(Py(ui)==="undefined")return!1;for(r in ui)try{p8r(m8r,r)===-1&&l8r(ui,r)&&ui[r]!==null&&Py(ui[r])==="object"&&g8r(ui[r])}catch{return!0}return!1}Ry=d8r();Fy.exports=Ry});var ky=s((tue,By)=>{"use strict";var h8r=typeof window<"u";By.exports=h8r});var Gy=s((iue,Cy)=>{"use strict";var q8r=My(),jy=i2(),y8r=ky();function b8r(r){if(y8r===!1&&!q8r)return jy(r);try{return jy(r)}catch{return!1}}Cy.exports=b8r});var Vy=s((nue,w8r)=>{w8r.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Wy=s((aue,Hy)=>{"use strict";var E8r=Cu(),n2=O(),N8r=t2(),A8r=Ay(),O8r=Sy(),S8r=Gy(),Uy=Vy();function T8r(r){var e,t,i,n,a,u,o;if(n=[],N8r(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!n2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!E8r(r))return n;t=A8r&&i}for(a in r)!(t&&a==="prototype")&&n2(r,a)&&n.push(String(a));if(O8r)for(e=S8r(r),o=0;o<Uy.length;o++)u=Uy[o],!(e&&u==="constructor")&&n2(r,u)&&n.push(String(u));return n}Hy.exports=T8r});var Dy=s((sue,zy)=>{"use strict";var I8r=ry(),_8r=ty(),L8r=qa(),P8r=yy(),R8r=Wy(),ya;_8r?I8r()?ya=P8r:ya=L8r:ya=R8r;zy.exports=ya});var an=s((uue,Xy)=>{"use strict";var F8r=Dy();Xy.exports=F8r});var xy=s((oue,Jy)=>{"use strict";var M8r=typeof Object.getOwnPropertyNames<"u";Jy.exports=M8r});var $y=s((vue,Zy)=>{"use strict";var Yy=ai(),B8r=Yy.getOwnPropertyNames;function k8r(r){return B8r(Yy(r))}Zy.exports=k8r});var Ky=s((fue,Qy)=>{"use strict";var j8r=ai(),C8r=an();function G8r(r){return C8r(j8r(r))}Qy.exports=G8r});var eb=s((cue,rb)=>{"use strict";var V8r=xy(),U8r=$y(),H8r=Ky(),a2;V8r?a2=U8r:a2=H8r;rb.exports=a2});var ib=s((lue,tb)=>{"use strict";var W8r=typeof Object.getOwnPropertyDescriptor<"u";tb.exports=W8r});var ab=s((pue,nb)=>{"use strict";var z8r=Object.getOwnPropertyDescriptor;function D8r(r,e){var t;return r==null?null:(t=z8r(r,e),t===void 0?null:t)}nb.exports=D8r});var ub=s((gue,sb)=>{"use strict";var X8r=O();function J8r(r,e){return X8r(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}sb.exports=J8r});var vb=s((mue,ob)=>{"use strict";var x8r=ib(),Y8r=ab(),Z8r=ub(),s2;x8r?s2=Y8r:s2=Z8r;ob.exports=s2});var cb=s((due,fb)=>{"use strict";var $8r=typeof Buffer=="function"?Buffer:null;fb.exports=$8r});var pb=s((hue,lb)=>{"use strict";var Q8r=wt(),ba=cb();function K8r(){var r,e;if(typeof ba!="function")return!1;try{typeof ba.from=="function"?e=ba.from([1,2,3,4]):e=new ba([1,2,3,4]),r=Q8r(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}lb.exports=K8r});var mb=s((que,gb)=>{"use strict";var r5r=pb();gb.exports=r5r});var qb=s(wa=>{"use strict";wa.byteLength=t5r;wa.toByteArray=n5r;wa.fromByteArray=u5r;var Dr=[],Mr=[],e5r=typeof Uint8Array<"u"?Uint8Array:Array,u2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_t=0,db=u2.length;_t<db;++_t)Dr[_t]=u2[_t],Mr[u2.charCodeAt(_t)]=_t;var _t,db;Mr["-".charCodeAt(0)]=62;Mr["_".charCodeAt(0)]=63;function hb(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function t5r(r){var e=hb(r),t=e[0],i=e[1];return(t+i)*3/4-i}function i5r(r,e,t){return(e+t)*3/4-t}function n5r(r){var e,t=hb(r),i=t[0],n=t[1],a=new e5r(i5r(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=Mr[r.charCodeAt(f)]<<18|Mr[r.charCodeAt(f+1)]<<12|Mr[r.charCodeAt(f+2)]<<6|Mr[r.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Mr[r.charCodeAt(f)]<<2|Mr[r.charCodeAt(f+1)]>>4,a[u++]=e&255),n===1&&(e=Mr[r.charCodeAt(f)]<<10|Mr[r.charCodeAt(f+1)]<<4|Mr[r.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function a5r(r){return Dr[r>>18&63]+Dr[r>>12&63]+Dr[r>>6&63]+Dr[r&63]}function s5r(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(a5r(i));return n.join("")}function u5r(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(s5r(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(Dr[e>>2]+Dr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Dr[e>>10]+Dr[e>>4&63]+Dr[e<<2&63]+"=")),n.join("")}});var yb=s(o2=>{o2.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-v}return(m?-1:1)*u*Math.pow(2,a-i)};o2.write=function(r,e,t,i,n,a){var u,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+m]=o&255,m+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+m]=u&255,m+=h,u/=256,v-=8);r[t+m-h]|=d*128}});var kb=s(ci=>{"use strict";var v2=qb(),vi=yb(),bb=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ci.Buffer=b;ci.SlowBuffer=p5r;ci.INSPECT_MAX_BYTES=50;var Ea=2147483647;ci.kMaxLength=Ea;b.TYPED_ARRAY_SUPPORT=o5r();!b.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o5r(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.byteOffset}});function ee(r){if(r>Ea)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,b.prototype),e}function b(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return p2(r)}return Ab(r,e,t)}b.poolSize=8192;function Ab(r,e,t){if(typeof r=="string")return f5r(r,e);if(ArrayBuffer.isView(r))return c5r(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Xr(r,ArrayBuffer)||r&&Xr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Xr(r,SharedArrayBuffer)||r&&Xr(r.buffer,SharedArrayBuffer)))return c2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return b.from(i,e,t);let n=l5r(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return b.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}b.from=function(r,e,t){return Ab(r,e,t)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function Ob(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function v5r(r,e,t){return Ob(r),r<=0?ee(r):e!==void 0?typeof t=="string"?ee(r).fill(e,t):ee(r).fill(e):ee(r)}b.alloc=function(r,e,t){return v5r(r,e,t)};function p2(r){return Ob(r),ee(r<0?0:g2(r)|0)}b.allocUnsafe=function(r){return p2(r)};b.allocUnsafeSlow=function(r){return p2(r)};function f5r(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Sb(r,e)|0,i=ee(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function f2(r){let e=r.length<0?0:g2(r.length)|0,t=ee(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function c5r(r){if(Xr(r,Uint8Array)){let e=new Uint8Array(r);return c2(e.buffer,e.byteOffset,e.byteLength)}return f2(r)}function c2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,b.prototype),i}function l5r(r){if(b.isBuffer(r)){let e=g2(r.length)|0,t=ee(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||d2(r.length)?ee(0):f2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return f2(r.data)}function g2(r){if(r>=Ea)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ea.toString(16)+" bytes");return r|0}function p5r(r){return+r!=r&&(r=0),b.alloc(+r)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,t){if(Xr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),Xr(t,Uint8Array)&&(t=b.from(t,t.offset,t.byteLength)),!b.isBuffer(e)||!b.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=b.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(Xr(u,Uint8Array))a+u.length>n.length?(b.isBuffer(u)||(u=b.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(b.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function Sb(r,e){if(b.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Xr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return l2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Bb(r).length;default:if(n)return i?-1:l2(r).length;e=(""+e).toLowerCase(),n=!0}}b.byteLength=Sb;function g5r(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return A5r(this,e,t);case"utf8":case"utf-8":return Ib(this,e,t);case"ascii":return E5r(this,e,t);case"latin1":case"binary":return N5r(this,e,t);case"base64":return b5r(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O5r(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}b.prototype._isBuffer=!0;function Lt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Lt(this,t,t+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Lt(this,t,t+3),Lt(this,t+1,t+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Lt(this,t,t+7),Lt(this,t+1,t+6),Lt(this,t+2,t+5),Lt(this,t+3,t+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?Ib(this,0,e):g5r.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",t=ci.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};bb&&(b.prototype[bb]=b.prototype.inspect);b.prototype.compare=function(e,t,i,n,a){if(Xr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,f=Math.min(u,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function Tb(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,d2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=b.from(e,i)),b.isBuffer(e))return e.length===0?-1:wb(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):wb(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function wb(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}b.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};b.prototype.indexOf=function(e,t,i){return Tb(this,e,t,i,!0)};b.prototype.lastIndexOf=function(e,t,i){return Tb(this,e,t,i,!1)};function m5r(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(d2(o))return u;r[t+u]=o}return u}function d5r(r,e,t,i){return Na(l2(e,r.length-t),r,t,i)}function h5r(r,e,t,i){return Na(_5r(e),r,t,i)}function q5r(r,e,t,i){return Na(Bb(e),r,t,i)}function y5r(r,e,t,i){return Na(L5r(e,r.length-t),r,t,i)}b.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return m5r(this,e,t,i);case"utf8":case"utf-8":return d5r(this,e,t,i);case"ascii":case"latin1":case"binary":return h5r(this,e,t,i);case"base64":return q5r(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return y5r(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function b5r(r,e,t){return e===0&&t===r.length?v2.fromByteArray(r):v2.fromByteArray(r.slice(e,t))}function Ib(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return w5r(i)}var Eb=4096;function w5r(r){let e=r.length;if(e<=Eb)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=Eb));return t}function E5r(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function N5r(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function A5r(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=P5r[r[a]];return n}function O5r(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}b.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,b.prototype),n};function ur(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};b.prototype.readUint8=b.prototype.readUInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&sn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&sn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};b.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};b.prototype.readInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};b.prototype.readInt16BE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};b.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&sn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=ze(function(e){e=e>>>0,fi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&sn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});b.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),vi.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),vi.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),vi.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),vi.read(this,e,!1,52,8)};function hr(r,e,t,i,n,a){if(!b.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;hr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;hr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,1,255,0),this[t]=e&255,t+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function _b(r,e,t,i,n){Mb(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function Lb(r,e,t,i,n){Mb(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}b.prototype.writeBigUInt64LE=ze(function(e,t=0){return _b(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=ze(function(e,t=0){return Lb(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);hr(this,e,t,i,f-1,-f)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);hr(this,e,t,i,f-1,-f)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};b.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};b.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};b.prototype.writeBigInt64LE=ze(function(e,t=0){return _b(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=ze(function(e,t=0){return Lb(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Pb(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Rb(r,e,t,i,n){return e=+e,t=t>>>0,n||Pb(r,e,t,4,34028234663852886e22,-34028234663852886e22),vi.write(r,e,t,i,23,4),t+4}b.prototype.writeFloatLE=function(e,t,i){return Rb(this,e,t,!0,i)};b.prototype.writeFloatBE=function(e,t,i){return Rb(this,e,t,!1,i)};function Fb(r,e,t,i,n){return e=+e,t=t>>>0,n||Pb(r,e,t,8,17976931348623157e292,-17976931348623157e292),vi.write(r,e,t,i,52,8),t+8}b.prototype.writeDoubleLE=function(e,t,i){return Fb(this,e,t,!0,i)};b.prototype.writeDoubleBE=function(e,t,i){return Fb(this,e,t,!1,i)};b.prototype.copy=function(e,t,i,n){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};b.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!b.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=b.isBuffer(e)?e:b.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var oi={};function m2(r,e,t){oi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}m2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);m2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);m2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=Nb(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=Nb(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function Nb(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function S5r(r,e,t){fi(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&sn(e,r.length-(t+1))}function Mb(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new oi.ERR_OUT_OF_RANGE("value",o,r)}S5r(i,n,a)}function fi(r,e){if(typeof r!="number")throw new oi.ERR_INVALID_ARG_TYPE(e,"number",r)}function sn(r,e,t){throw Math.floor(r)!==r?(fi(r,t),new oi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new oi.ERR_BUFFER_OUT_OF_BOUNDS:new oi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var T5r=/[^+/0-9A-Za-z-_]/g;function I5r(r){if(r=r.split("=")[0],r=r.trim().replace(T5r,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function l2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function _5r(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function L5r(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function Bb(r){return v2.toByteArray(I5r(r))}function Na(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Xr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function d2(r){return r!==r}var P5r=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function ze(r){return typeof BigInt>"u"?R5r:r}function R5r(){throw new Error("BigInt not supported")}});var Cb=s((Nue,jb)=>{"use strict";var F5r=kb().Buffer;jb.exports=F5r});var Vb=s((Aue,Gb)=>{"use strict";function M5r(){throw new Error("not implemented")}Gb.exports=M5r});var Aa=s((Oue,Ub)=>{"use strict";var B5r=mb(),k5r=Cb(),j5r=Vb(),h2;B5r()?h2=k5r:h2=j5r;Ub.exports=h2});var Wb=s((Sue,Hb)=>{"use strict";var C5r=L(),G5r=Aa(),V5r=C5r(G5r.from);Hb.exports=V5r});var Db=s((Tue,zb)=>{"use strict";var U5r=wt(),H5r=y(),W5r=Aa();function z5r(r){if(!U5r(r))throw new TypeError(H5r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return W5r.from(r)}zb.exports=z5r});var Jb=s((Iue,Xb)=>{"use strict";var D5r=wt(),X5r=y(),J5r=Aa();function x5r(r){if(!D5r(r))throw new TypeError(X5r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new J5r(r)}Xb.exports=x5r});var Yb=s((_ue,xb)=>{"use strict";var Y5r=Wb(),Z5r=Db(),$5r=Jb(),q2;Y5r?q2=Z5r:q2=$5r;xb.exports=q2});var Qb=s((Lue,$b)=>{"use strict";var Q5r=Ji(),K5r=xt(),rpr=Xi(),epr=Di(),tpr=Jt(),ipr=Et(),npr=lr(),apr=Qr(),spr=gr(),Zb;function upr(r){return new Q5r(r)}function opr(r){return new K5r(r)}function vpr(r){return new rpr(r)}function fpr(r){return new epr(r)}function cpr(r){return new tpr(r)}function lpr(r){return new ipr(r)}function ppr(r){return new npr(r)}function gpr(r){return new apr(r)}function mpr(r){return new spr(r)}function dpr(){var r={int8array:upr,uint8array:opr,uint8clampedarray:vpr,int16array:fpr,uint16array:cpr,int32array:lpr,uint32array:ppr,float32array:gpr,float64array:mpr};return r}Zb=dpr();$b.exports=Zb});var iw=s((Pue,tw)=>{"use strict";var Oa=O(),y2=cr(),Kb=wt(),hpr=Lq(),rw=Zn(),qpr=Vq(),ypr=ha(),ew=an(),bpr=eb(),un=vb(),wpr=It(),on=je(),Epr=Yb(),Npr=Qb();function Apr(r){var e,t,i,n,a,u,o,f;for(e=[],n=[],o=Object.create(wpr(r)),e.push(r),n.push(o),t=bpr(r),f=0;f<t.length;f++)i=t[f],a=un(r,i),Oa(a,"value")&&(u=y2(r[i])?[]:{},a.value=Pt(r[i],u,e,n,-1)),on(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Opr(r){var e=[],t=[],i,n,a,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=ew(r),f=0;f<i.length;f++)u=i[f],n=un(r,u),Oa(n,"value")&&(a=y2(r[u])?[]:{},n.value=Pt(r[u],a,e,t,-1)),on(o,u,n);return o}function Pt(r,e,t,i,n){var a,u,o,f,v,c,l,p,m,h;if(n-=1,typeof r!="object"||r===null)return r;if(Kb(r))return Epr(r);if(hpr(r))return Opr(r);if(o=rw(r),o==="date")return new Date(+r);if(o==="regexp")return qpr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=Npr[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Apr(r):{};if(u=ew(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=rw(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||Kb(p)){a==="object"?(f=un(r,c),Oa(f,"value")&&(f.value=Pt(p)),on(e,c,f)):e[c]=Pt(p);continue}if(m=ypr(t,p),m!==-1){e[c]=i[m];continue}l=y2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Pt(p,l,t,i,n):(f=un(r,c),Oa(f,"value")&&(f.value=Pt(p,l,t,i,n)),on(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=un(r,c),on(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}tw.exports=Pt});var aw=s((Rue,nw)=>{"use strict";var Spr=cr(),Tpr=Ge().isPrimitive,Ipr=y(),_pr=_(),Lpr=iw();function Ppr(r,e){var t;if(arguments.length>1){if(!Tpr(e))throw new TypeError(Ipr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=_pr;return t=Spr(r)?new Array(r.length):{},Lpr(r,t,[r],[t],e)}nw.exports=Ppr});var vn=s((Fue,sw)=>{"use strict";var Rpr=aw();sw.exports=Rpr});var uw=s((Mue,Fpr)=>{Fpr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var vw=s((Bue,ow)=>{"use strict";var Mpr=vn(),Bpr=uw();function kpr(){return Mpr(Bpr)}ow.exports=kpr});var fw=s((kue,jpr)=>{jpr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var lw=s((jue,cw)=>{"use strict";var Cpr=vn(),Gpr=fw();function Vpr(){return Cpr(Gpr)}cw.exports=Vpr});var pw=s((Cue,Upr)=>{Upr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var mw=s((Gue,gw)=>{"use strict";var Hpr=vn(),Wpr=pw();function zpr(){return Hpr(Wpr)}gw.exports=zpr});var dw=s((Vue,Dpr)=>{Dpr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var qw=s((Uue,hw)=>{"use strict";var Xpr=dw();function Jpr(){return Xpr.slice()}hw.exports=Jpr});var yw=s((Hue,xpr)=>{xpr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var ww=s((Wue,bw)=>{"use strict";var Ypr=vn(),Zpr=yw();function $pr(){return Ypr(Zpr)}bw.exports=$pr});var Nw=s((zue,Ew)=>{"use strict";var fn=nr(),Qpr=vw(),Kpr=lw(),r7r=mw(),e7r=qw(),t7r=ww();function i7r(r){return fn(r,"AFINN_111",Qpr),fn(r,"AFINN_96",Kpr),fn(r,"ANSCOMBES_QUARTET",r7r),fn(r,"HERNDON_VENUS_SEMIDIAMETERS",e7r),fn(r,"NIGHTINGALES_ROSE",t7r),r}Ew.exports=i7r});var Ow=s((Due,Aw)=>{"use strict";function n7r(r,e){return r+e}Aw.exports=n7r});var Tw=s((Xue,Sw)=>{"use strict";var a7r=Ow();Sw.exports=a7r});var _w=s((Jue,Iw)=>{"use strict";var s7r=_(),u7r=G();function o7r(r){return r===s7r||r===u7r}Iw.exports=o7r});var Lr=s((xue,Lw)=>{"use strict";var v7r=_w();Lw.exports=v7r});var Fw=s((Yue,Rw)=>{"use strict";var Pw=ra();function f7r(r){return r>0?Pw(r-1):Pw(r+1)}Rw.exports=f7r});var b2=s((Zue,Mw)=>{"use strict";var c7r=Fw();Mw.exports=c7r});var kw=s(($ue,Bw)=>{"use strict";var l7r=Math.sqrt;Bw.exports=l7r});var V=s((Que,jw)=>{"use strict";var p7r=kw();jw.exports=p7r});var Gw=s((Kue,Cw)=>{"use strict";function g7r(r){return Math.abs(r)}Cw.exports=g7r});var X=s((roe,Vw)=>{"use strict";var m7r=Gw();Vw.exports=m7r});var Hw=s((eoe,Uw)=>{"use strict";var d7r=xt(),h7r=Jt(),q7r={uint16:h7r,uint8:d7r};Uw.exports=q7r});var Xw=s((toe,Dw)=>{"use strict";var Ww=Hw(),zw;function y7r(){var r,e;return r=new Ww.uint16(1),r[0]=4660,e=new Ww.uint8(r.buffer),e[0]===52}zw=y7r();Dw.exports=zw});var Rt=s((ioe,Jw)=>{"use strict";var b7r=Xw();Jw.exports=b7r});var Zw=s((noe,Yw)=>{"use strict";var w7r=Rt(),xw,w2,E2;w7r===!0?(w2=1,E2=0):(w2=0,E2=1);xw={HIGH:w2,LOW:E2};Yw.exports=xw});var N2=s((aoe,rE)=>{"use strict";var E7r=lr(),N7r=gr(),Qw=Zw(),Kw=new N7r(1),$w=new E7r(Kw.buffer),A7r=Qw.HIGH,O7r=Qw.LOW;function S7r(r,e,t,i){return Kw[0]=r,e[i]=$w[A7r],e[i+t]=$w[O7r],e}rE.exports=S7r});var tE=s((soe,eE)=>{"use strict";var T7r=N2();function I7r(r){return T7r(r,[0>>>0,0>>>0],1,0)}eE.exports=I7r});var li=s((uoe,nE)=>{"use strict";var _7r=w(),iE=tE(),L7r=N2();_7r(iE,"assign",L7r);nE.exports=iE});var sE=s((ooe,aE)=>{"use strict";var P7r=Rt(),A2;P7r===!0?A2=0:A2=1;aE.exports=A2});var oE=s((voe,uE)=>{"use strict";var R7r=lr(),F7r=gr(),M7r=sE(),O2=new F7r(1),B7r=new R7r(O2.buffer);function k7r(r,e){return O2[0]=r,B7r[M7r]=e>>>0,O2[0]}uE.exports=k7r});var te=s((foe,vE)=>{"use strict";var j7r=oE();vE.exports=j7r});var cE=s((coe,fE)=>{"use strict";function C7r(r){return r|0}fE.exports=C7r});var S2=s((loe,lE)=>{"use strict";var G7r=cE();lE.exports=G7r});var Jr=s((poe,pE)=>{"use strict";var V7r=2147483647;pE.exports=V7r});var T2=s((goe,gE)=>{"use strict";var U7r=2147483648;gE.exports=U7r});var dE=s((moe,mE)=>{"use strict";var H7r=Rt(),I2;H7r===!0?I2=1:I2=0;mE.exports=I2});var yE=s((doe,qE)=>{"use strict";var W7r=lr(),z7r=gr(),D7r=dE(),hE=new z7r(1),X7r=new W7r(hE.buffer);function J7r(r){return hE[0]=r,X7r[D7r]}qE.exports=J7r});var er=s((hoe,bE)=>{"use strict";var x7r=yE();bE.exports=x7r});var NE=s((qoe,EE)=>{"use strict";var Y7r=Rt(),wE,_2,L2;Y7r===!0?(_2=1,L2=0):(_2=0,L2=1);wE={HIGH:_2,LOW:L2};EE.exports=wE});var IE=s((yoe,TE)=>{"use strict";var Z7r=lr(),$7r=gr(),OE=NE(),SE=new $7r(1),AE=new Z7r(SE.buffer),Q7r=OE.HIGH,K7r=OE.LOW;function r9r(r,e){return AE[Q7r]=r,AE[K7r]=e,SE[0]}TE.exports=r9r});var pi=s((boe,_E)=>{"use strict";var e9r=IE();_E.exports=e9r});var PE=s((woe,LE)=>{"use strict";var t9r=T2(),i9r=Jr(),n9r=li(),a9r=er(),s9r=pi(),P2=[0,0];function u9r(r,e){var t,i;return n9r.assign(r,P2,1,0),t=P2[0],t&=i9r,i=a9r(e),i&=t9r,t|=i,s9r(t,P2[1])}LE.exports=u9r});var Sa=s((Eoe,RE)=>{"use strict";var o9r=PE();RE.exports=o9r});var BE=s((Noe,ME)=>{"use strict";var FE=b2(),v9r=Sa(),f9r=G(),Ta=_();function c9r(r,e){return e===f9r?Ta:e===Ta?0:e>0?FE(e)?r:0:FE(e)?v9r(Ta,r):Ta}ME.exports=c9r});var jE=s((Aoe,kE)=>{"use strict";var l9r=Jr(),p9r=er(),g9r=1072693247,Ia=1e300,_a=1e-300;function m9r(r,e){var t,i;return i=p9r(r),t=i&l9r,t<=g9r?e<0?Ia*Ia:_a*_a:e>0?Ia*Ia:_a*_a}kE.exports=m9r});var VE=s((Ooe,GE)=>{"use strict";var d9r=X(),CE=_();function h9r(r,e){return r===-1?(r-r)/(r-r):r===1?1:d9r(r)<1==(e===CE)?0:CE}GE.exports=h9r});var HE=s((Soe,UE)=>{"use strict";var q9r=Rt(),R2;q9r===!0?R2=1:R2=0;UE.exports=R2});var zE=s((Toe,WE)=>{"use strict";var y9r=lr(),b9r=gr(),w9r=HE(),F2=new b9r(1),E9r=new y9r(F2.buffer);function N9r(r,e){return F2[0]=r,E9r[w9r]=e>>>0,F2[0]}WE.exports=N9r});var ie=s((Ioe,DE)=>{"use strict";var A9r=zE();DE.exports=A9r});var xr=s((_oe,XE)=>{"use strict";var O9r=1023;XE.exports=O9r});var xE=s((Loe,JE)=>{"use strict";function S9r(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}JE.exports=S9r});var QE=s((Poe,$E)=>{"use strict";var T9r=er(),La=te(),YE=ie(),I9r=xr(),_9r=xE(),L9r=1048575,ZE=1048576,P9r=1072693248,R9r=536870912,F9r=524288,M9r=20,B9r=9007199254740992,k9r=.9617966939259756,j9r=.9617967009544373,C9r=-7028461650952758e-24,G9r=[1,1.5],V9r=[0,.5849624872207642],U9r=[0,1350039202129749e-23];function H9r(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,k,T,D,vr,$;return D=0,t<ZE&&(e*=B9r,D-=53,t=T9r(e)),D+=(t>>M9r)-I9r|0,vr=t&L9r|0,t=vr|P9r|0,vr<=235662?$=0:vr<767610?$=1:($=0,D+=1,t-=ZE),e=YE(e,t),c=G9r[$],k=e-c,T=1/(e+c),n=k*T,u=La(n,0),i=(t>>1|R9r)+F9r,i+=$<<18,f=YE(0,i),v=e-(f-c),o=T*(k-u*f-u*v),a=n*n,A=a*a*_9r(a),A+=o*(u+n),a=u*u,f=3+a+A,f=La(f,0),v=A-(f-3-a),k=u*f,T=o*f+v*n,p=k+T,p=La(p,0),m=T-(p-k),h=j9r*p,d=C9r*p+m*k9r+U9r[$],l=V9r[$],N=D,g=h+d+l+N,g=La(g,0),q=d-(g-N-l-h),r[0]=g,r[1]=q,r}$E.exports=H9r});var rN=s((Roe,KE)=>{"use strict";function W9r(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}KE.exports=W9r});var tN=s((Foe,eN)=>{"use strict";var z9r=te(),D9r=rN(),X9r=1.4426950408889634,J9r=1.4426950216293335,x9r=19259629911266175e-24;function Y9r(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*D9r(n),u=J9r*n,o=n*x9r-a*X9r,i=u+o,i=z9r(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}eN.exports=Y9r});var M2=s((Moe,iN)=>{"use strict";var Z9r=1023;iN.exports=Z9r});var aN=s((Boe,nN)=>{"use strict";var $9r=-1023;nN.exports=$9r});var B2=s((koe,sN)=>{"use strict";var Q9r=-1074;sN.exports=Q9r});var k2=s((joe,uN)=>{"use strict";var K9r=22250738585072014e-324;uN.exports=K9r});var j2=s((Coe,oN)=>{"use strict";var rgr=k2(),egr=Lr(),tgr=E(),igr=X(),ngr=4503599627370496;function agr(r,e,t,i){return tgr(r)||egr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&igr(r)<rgr?(e[i]=r*ngr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}oN.exports=agr});var fN=s((Goe,vN)=>{"use strict";var sgr=j2();function ugr(r){return sgr(r,[0,0],1,0)}vN.exports=ugr});var pN=s((Voe,lN)=>{"use strict";var ogr=w(),cN=fN(),vgr=j2();ogr(cN,"assign",vgr);lN.exports=cN});var cn=s((Uoe,gN)=>{"use strict";var fgr=2146435072;gN.exports=fgr});var dN=s((Hoe,mN)=>{"use strict";var cgr=er(),lgr=cn(),pgr=xr();function ggr(r){var e=cgr(r);return e=(e&lgr)>>>20,e-pgr|0}mN.exports=ggr});var qN=s((Woe,hN)=>{"use strict";var mgr=dN();hN.exports=mgr});var bN=s((zoe,yN)=>{"use strict";var dgr=_(),hgr=G(),qgr=xr(),ygr=M2(),bgr=aN(),wgr=B2(),Egr=E(),Ngr=Lr(),Agr=Sa(),Ogr=pN().assign,Sgr=qN(),Tgr=li(),Igr=pi(),_gr=2220446049250313e-31,Lgr=2148532223>>>0,C2=[0,0],G2=[0,0];function Pgr(r,e){var t,i;return e===0||r===0||Egr(r)||Ngr(r)?r:(Ogr(r,C2,1,0),r=C2[0],e+=C2[1],e+=Sgr(r),e<wgr?Agr(0,r):e>ygr?r<0?hgr:dgr:(e<=bgr?(e+=52,i=_gr):i=1,Tgr.assign(r,G2,1,0),t=G2[0],t&=Lgr,t|=e+qgr<<20,i*Igr(t,G2[1])))}yN.exports=Pgr});var Pa=s((Doe,wN)=>{"use strict";var Rgr=bN();wN.exports=Rgr});var Ra=s((Xoe,EN)=>{"use strict";var Fgr=.6931471805599453;EN.exports=Fgr});var Fa=s((Joe,NN)=>{"use strict";var Mgr=1048575;NN.exports=Mgr});var ON=s((xoe,AN)=>{"use strict";function Bgr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}AN.exports=Bgr});var RN=s((Yoe,PN)=>{"use strict";var kgr=er(),SN=ie(),jgr=te(),Cgr=S2(),Ggr=Pa(),Vgr=Ra(),TN=xr(),IN=Jr(),_N=Fa(),Ugr=ON(),LN=1048576,Hgr=1071644672,ln=20,Wgr=.6931471824645996,zgr=-1904654299957768e-24;function Dgr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m;return p=r&IN|0,m=(p>>ln)-TN|0,l=0,p>Hgr&&(l=r+(LN>>m+1)>>>0,m=((l&IN)>>ln)-TN|0,i=(l&~(_N>>m))>>>0,a=SN(0,i),l=(l&_N|LN)>>ln-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=jgr(a,0),o=a*Wgr,f=(t-(a-e))*Vgr+a*zgr,c=o+f,v=f-(c-o),a=c*c,n=c-a*Ugr(a),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=kgr(c),r=Cgr(r),r+=l<<ln>>>0,r>>ln<=0?c=Ggr(c,l):c=SN(c,r),c}PN.exports=Dgr});var WN=s((Zoe,HN)=>{"use strict";var FN=E(),MN=b2(),BN=Lr(),Xgr=Tr(),kN=V(),Jgr=X(),V2=li(),xgr=te(),jN=S2(),Ygr=G(),Zgr=_(),U2=Jr(),$gr=BE(),Qgr=jE(),Kgr=VE(),rmr=QE(),emr=tN(),tmr=RN(),imr=1072693247,nmr=1105199104,amr=1139802112,CN=1083179008,smr=1072693248,umr=1083231232,omr=3230714880>>>0,GN=31,De=1e300,Xe=1e-300,vmr=8008566259537294e-32,ne=[0,0],VN=[0,0];function UN(r,e){var t,i,n,a,u,o,f,v,c,l,p,m,h,d,g,q;if(FN(r)||FN(e))return NaN;if(V2.assign(e,ne,1,0),o=ne[0],f=ne[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return kN(r);if(e===-.5)return 1/kN(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(BN(e))return Kgr(r,e)}if(V2.assign(r,ne,1,0),a=ne[0],u=ne[1],u===0){if(a===0)return $gr(r,e);if(r===1)return 1;if(r===-1&&MN(e))return-1;if(BN(r))return r===Ygr?UN(-0,-e):e<0?0:Zgr}if(r<0&&Xgr(e)===!1)return(r-r)/(r-r);if(n=Jgr(r),t=a&U2|0,i=o&U2|0,v=a>>>GN|0,c=o>>>GN|0,v&&MN(e)?v=-1:v=1,i>nmr){if(i>amr)return Qgr(r,e);if(t<imr)return c===1?v*De*De:v*Xe*Xe;if(t>smr)return c===0?v*De*De:v*Xe*Xe;h=emr(VN,n)}else h=rmr(VN,n,t);if(l=xgr(e,0),m=(e-l)*h[0]+e*h[1],p=l*h[0],d=m+p,V2.assign(d,ne,1,0),g=jN(ne[0]),q=jN(ne[1]),g>=CN){if((g-CN|q)!==0||m+vmr>d-p)return v*De*De}else if((g&U2)>=umr&&((g-omr|q)!==0||m<=d-p))return v*Xe*Xe;return d=tmr(g,p,m),v*d}HN.exports=UN});var U=s(($oe,zN)=>{"use strict";var fmr=WN();zN.exports=fmr});var gi=s((Qoe,DN)=>{"use strict";var cmr=9007199254740991;DN.exports=cmr});var Ma=s((Koe,XN)=>{"use strict";var lmr=308;XN.exports=lmr});var H2=s((r2e,JN)=>{"use strict";var pmr=-308;JN.exports=pmr});var Ba=s((e2e,xN)=>{"use strict";var gmr=-324;xN.exports=gmr});var eA=s((t2e,rA)=>{"use strict";var YN=E(),ka=Lr(),ZN=U(),mmr=X(),$N=J(),dmr=gi(),QN=Ma(),hmr=H2(),qmr=Ba(),ymr=G(),bmr=dmr+1,KN=1e308;function wmr(r,e){var t,i;return YN(r)||YN(e)||ka(e)?NaN:ka(r)||r===0||e<qmr||mmr(r)>bmr&&e<=0?r:e>QN?r>=0?0:ymr:e<hmr?(t=ZN(10,-(e+QN)),i=r*KN*t,ka(i)?r:$N(i)/KN/t):(t=ZN(10,-e),i=r*t,ka(i)?r:$N(i)/t)}rA.exports=wmr});var iA=s((i2e,tA)=>{"use strict";var Emr=eA();tA.exports=Emr});var aA=s((n2e,nA)=>{"use strict";function Nmr(r,e){return r*e}nA.exports=Nmr});var uA=s((a2e,sA)=>{"use strict";var Amr=aA();sA.exports=Amr});var vA=s((s2e,oA)=>{"use strict";function Omr(r,e){return r-e}oA.exports=Omr});var cA=s((u2e,fA)=>{"use strict";var Smr=vA();fA.exports=Smr});var pA=s((o2e,lA)=>{"use strict";var pn=nr(),Tmr=Tw(),Imr=iA(),_mr=uA(),Lmr=U(),Pmr=cA();function Rmr(r){return pn(r,"add",Tmr),pn(r,"floorn",Imr),pn(r,"mul",_mr),pn(r,"pow",Lmr),pn(r,"sub",Pmr),r}lA.exports=Rmr});var hA=s((v2e,dA)=>{"use strict";var gA=j().isPrimitive,Fmr=_(),Mmr=G(),mA=y();function Bmr(r,e){return t;function t(i,n){var a;if(!gA(i)){if(e.nonnumeric===void 0)throw new TypeError(mA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!gA(n)){if(e.nonnumeric===void 0)throw new TypeError(mA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===Fmr?e.pinf:a===Mmr?e.ninf:a}}dA.exports=Bmr});var W2=s((f2e,qA)=>{"use strict";var kmr=hA();qA.exports=kmr});var bA=s((c2e,yA)=>{"use strict";var jmr=Ou(),Cmr=Au(),Gmr=Po(),Vmr=y(),Umr=_o(),Hmr=W2(),Wmr=["number","number"],zmr=["First argument","Second argument"];function Dmr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(Vmr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=Umr([r[0],r[1]],Wmr,zmr),t=jmr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=Gmr(t),a=Hmr(e,i),r[0].push(n),r[1].push(t),Cmr(r[0],r[1],a),n}yA.exports=Dmr});var EA=s((l2e,wA)=>{"use strict";var Xmr=bA();wA.exports=Xmr});var AA=s((p2e,NA)=>{"use strict";var Jmr=j().isPrimitive,xmr=_(),Ymr=G(),Zmr=y();function $mr(r,e){return t;function t(i){var n;if(!Jmr(i)){if(e.nonnumeric===void 0)throw new TypeError(Zmr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===xmr?e.pinf:n===Ymr?e.ninf:n}}NA.exports=$mr});var z2=s((g2e,OA)=>{"use strict";var Qmr=AA();OA.exports=Qmr});var TA=s((m2e,SA)=>{"use strict";var D2=j().isPrimitive,Kmr=_(),rdr=G(),X2=y();function edr(r,e){return t;function t(i,n,a){var u;if(!D2(i)){if(e.nonnumeric===void 0)throw new TypeError(X2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!D2(n)){if(e.nonnumeric===void 0)throw new TypeError(X2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!D2(a)){if(e.nonnumeric===void 0)throw new TypeError(X2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===Kmr?e.pinf:u===rdr?e.ninf:u}}SA.exports=edr});var _A=s((d2e,IA)=>{"use strict";var tdr=TA();IA.exports=tdr});var PA=s((h2e,LA)=>{"use strict";var ja=j().isPrimitive,idr=_(),ndr=G(),Ca=y();function adr(r,e){return t;function t(i,n,a,u){var o;if(!ja(i)){if(e.nonnumeric===void 0)throw new TypeError(Ca("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!ja(n)){if(e.nonnumeric===void 0)throw new TypeError(Ca("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!ja(a)){if(e.nonnumeric===void 0)throw new TypeError(Ca("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!ja(u)){if(e.nonnumeric===void 0)throw new TypeError(Ca("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===idr?e.pinf:o===ndr?e.ninf:o}}LA.exports=adr});var FA=s((q2e,RA)=>{"use strict";var sdr=PA();RA.exports=sdr});var BA=s((y2e,MA)=>{"use strict";var gn=j().isPrimitive,udr=_(),odr=G(),mn=y();function vdr(r,e){return t;function t(i,n,a,u,o){var f;if(!gn(i)){if(e.nonnumeric===void 0)throw new TypeError(mn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!gn(n)){if(e.nonnumeric===void 0)throw new TypeError(mn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!gn(a)){if(e.nonnumeric===void 0)throw new TypeError(mn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!gn(u)){if(e.nonnumeric===void 0)throw new TypeError(mn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!gn(o)){if(e.nonnumeric===void 0)throw new TypeError(mn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,a,u,o),f!==f?e.nan:f===udr?e.pinf:f===odr?e.ninf:f}}MA.exports=vdr});var jA=s((b2e,kA)=>{"use strict";var fdr=BA();kA.exports=fdr});var GA=s((w2e,CA)=>{"use strict";var cdr=cr(),ldr=Lo(),pdr=y(),gdr=z2();function mdr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(pdr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=gdr(e,i),cdr(t)?(ldr([t,t],[t.length,t[0].length],n),t):n(t)}CA.exports=mdr});var UA=s((E2e,VA)=>{"use strict";var ddr=GA();VA.exports=ddr});var WA=s((N2e,HA)=>{"use strict";var Ft=nr(),hdr=EA(),qdr=z2(),ydr=W2(),bdr=_A(),wdr=FA(),Edr=jA(),Ndr=UA();function Adr(r){return Ft(r,"binary",hdr),Ft(r,"d_d",qdr),Ft(r,"dd_d",ydr),Ft(r,"ddd_d",bdr),Ft(r,"dddd_d",wdr),Ft(r,"ddddd_d",Edr),Ft(r,"unary",Ndr),r}HA.exports=Adr});var DA=s((A2e,zA)=>{"use strict";function Odr(r){return r*r}zA.exports=Odr});var Ga=s((O2e,XA)=>{"use strict";var Sdr=DA();XA.exports=Sdr});var Va=s((S2e,JA)=>{"use strict";var Tdr=.7853981633974483;JA.exports=Tdr});var YA=s((T2e,xA)=>{"use strict";function Idr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}xA.exports=Idr});var $A=s((I2e,ZA)=>{"use strict";function _dr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}ZA.exports=_dr});var rO=s((_2e,KA)=>{"use strict";var Ldr=E(),Pdr=V(),QA=Va(),Rdr=YA(),Fdr=$A(),Mdr=6123233995736766e-32;function Bdr(r){var e,t,i,n,a;if(Ldr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*Fdr(t),t=Pdr(t+t),a=QA-t,t=t*n-Mdr,a-=t,a+=QA;else{if(i<1e-8)return r;t=i*i,a=t*Rdr(t),a=i*a+i}return e?-a:a}KA.exports=Bdr});var Mt=s((L2e,eO)=>{"use strict";var kdr=rO();eO.exports=kdr});var aO=s((P2e,nO)=>{"use strict";var jdr=E(),tO=Mt(),Cdr=V(),iO=Va(),Gdr=6123233995736766e-32;function Vdr(r){var e;return jdr(r)?NaN:r<-1||r>1?NaN:r>.5?2*tO(Cdr(.5-.5*r)):(e=iO-tO(r),e+=Gdr,e+=iO,e)}nO.exports=Vdr});var dn=s((R2e,sO)=>{"use strict";var Udr=aO();sO.exports=Udr});var oO=s((F2e,uO)=>{"use strict";function Hdr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}uO.exports=Hdr});var pO=s((M2e,lO)=>{"use strict";var Wdr=E(),vO=er(),fO=ie(),zdr=_(),Ddr=G(),cO=xr(),Xdr=oO(),J2=.6931471803691238,x2=19082149292705877e-26,Jdr=.41421356237309503,xdr=-.2928932188134525,Ydr=1862645149230957e-24,Zdr=5551115123125783e-32,$dr=9007199254740992,Qdr=.6666666666666666;function Kdr(r){var e,t,i,n,a,u,o,f,v,c;if(r<-1||Wdr(r))return NaN;if(r===-1)return Ddr;if(r===zdr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<Jdr){if(i<Ydr)return i<Zdr?r:r-r*r*.5;r>xdr&&(c=0,n=r,t=1)}return c!==0&&(i<$dr?(v=1+r,t=vO(v),c=(t>>20)-cO,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=vO(v),c=(t>>20)-cO,a=0),t&=1048575,t<434334?v=fO(v,t|1072693248):(c+=1,v=fO(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*x2,c*J2+a):(f=e*(1-Qdr*n),c*J2-(f-(c*x2+a)-n)):(u=n/(2+n),o=u*u,f=o*Xdr(o),c===0?n-(e-u*(e+f)):c*J2-(e-(u*(e+f)+(c*x2+a))-n))}lO.exports=Kdr});var Je=s((B2e,gO)=>{"use strict";var rhr=pO();gO.exports=rhr});var dO=s((k2e,mO)=>{"use strict";function ehr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}mO.exports=ehr});var qO=s((j2e,hO)=>{"use strict";function thr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}hO.exports=thr});var EO=s((C2e,wO)=>{"use strict";var yO=er(),ihr=ie(),nhr=E(),ahr=xr(),shr=G(),uhr=dO(),ohr=qO(),Ua=.6931471803691238,Ha=19082149292705877e-26,vhr=0x40000000000000,fhr=.3333333333333333,bO=1048575,chr=2146435072,lhr=1048576,phr=1072693248;function ghr(r){var e,t,i,n,a,u,o,f,v,c,l,p;return r===0?shr:nhr(r)||r<0?NaN:(t=yO(r),a=0,t<lhr&&(a-=54,r*=vhr,t=yO(r)),t>=chr?r+r:(a+=(t>>20)-ahr|0,t&=bO,f=t+614244&1048576|0,r=ihr(r,t|f^phr),a+=f>>20|0,o=r-1,(bO&2+t)<3?o===0?a===0?0:a*Ua+a*Ha:(u=o*o*(.5-fhr*o),a===0?o-u:a*Ua-(u-a*Ha-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*uhr(l),i=p*ohr(l),f|=v,u=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*Ua-(e-(c*(e+u)+a*Ha)-o)):a===0?o-c*(o-u):a*Ua-(c*(o-u)-a*Ha-o))))}wO.exports=ghr});var R=s((G2e,NO)=>{"use strict";var mhr=EO();NO.exports=mhr});var TO=s((V2e,SO)=>{"use strict";var dhr=E(),hhr=Je(),AO=V(),qhr=Ra(),OO=R(),yhr=1<<28;function bhr(r){var e;return dhr(r)||r<1?NaN:r===1?0:r>=yhr?OO(r)+qhr:r>2?OO(2*r-1/(r+AO(r*r-1))):(e=r-1,hhr(e+AO(2*e+e*e)))}SO.exports=bhr});var _O=s((U2e,IO)=>{"use strict";var whr=TO();IO.exports=whr});var Wa=s((H2e,LO)=>{"use strict";var Ehr=1.5707963267948966;LO.exports=Ehr});var RO=s((W2e,PO)=>{"use strict";function Nhr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}PO.exports=Nhr});var MO=s((z2e,FO)=>{"use strict";function Ahr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}FO.exports=Ahr});var jO=s((D2e,kO)=>{"use strict";var Ohr=E(),Shr=_(),Y2=Wa(),Thr=Va(),Ihr=G(),_hr=RO(),Lhr=MO(),BO=6123233995736766e-32,Phr=2.414213562373095;function Rhr(r){var e,t,i,n;return Ohr(r)||r===0?r:r===Shr?Y2:r===Ihr?-Y2:(r<0&&(t=!0,r=-r),e=0,r>Phr?(i=Y2,e=1,r=-(1/r)):r<=.66?i=0:(i=Thr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*_hr(n)/Lhr(n),n=r*n+r,e===2?n+=.5*BO:e===1&&(n+=BO),i+=n,t?-i:i)}kO.exports=Rhr});var za=s((X2e,CO)=>{"use strict";var Fhr=jO();CO.exports=Fhr});var VO=s((J2e,GO)=>{"use strict";var Mhr=za();function Bhr(r){return Mhr(1/r)}GO.exports=Bhr});var HO=s((x2e,UO)=>{"use strict";var khr=VO();UO.exports=khr});var zO=s((Y2e,WO)=>{"use strict";var jhr=Mt();function Chr(r){return jhr(1+r)}WO.exports=Chr});var XO=s((Z2e,DO)=>{"use strict";var Ghr=zO();DO.exports=Ghr});var xO=s(($2e,JO)=>{"use strict";var Vhr=Mt();function Uhr(r){return Vhr(1-r)}JO.exports=Uhr});var ZO=s((Q2e,YO)=>{"use strict";var Hhr=xO();YO.exports=Hhr});var QO=s((K2e,$O)=>{"use strict";var Whr=Mt();function zhr(r){return Whr(1/r)}$O.exports=zhr});var rS=s((r1e,KO)=>{"use strict";var Dhr=QO();KO.exports=Dhr});var nS=s((e1e,iS)=>{"use strict";var Xhr=Lr(),Jhr=E(),xhr=Je(),eS=V(),Yhr=Ra(),tS=R(),Zhr=1/(1<<28),$hr=1<<28;function Qhr(r){var e,t,i;return Jhr(r)||Xhr(r)?r:(r<0&&(r=-r,e=!0),r<Zhr?i=r:r>$hr?i=tS(r)+Yhr:r>2?i=tS(2*r+1/(eS(r*r+1)+r)):(t=r*r,i=xhr(r+t/(1+eS(1+t)))),e?-i:i)}iS.exports=Qhr});var Z2=s((t1e,aS)=>{"use strict";var Khr=nS();aS.exports=Khr});var uS=s((i1e,sS)=>{"use strict";var rqr=Z2();function eqr(r){return rqr(1/r)}sS.exports=eqr});var vS=s((n1e,oS)=>{"use strict";var tqr=uS();oS.exports=tqr});var cS=s((a1e,fS)=>{"use strict";var iqr=dn(),nqr=V();function aqr(r){return 2*iqr(nqr(r))}fS.exports=aqr});var pS=s((s1e,lS)=>{"use strict";var sqr=cS();lS.exports=sqr});var mS=s((u1e,gS)=>{"use strict";var uqr=Mt(),oqr=V();function vqr(r){return 2*uqr(oqr(r))}gS.exports=vqr});var hS=s((o1e,dS)=>{"use strict";var fqr=mS();dS.exports=fqr});var bS=s((v1e,yS)=>{"use strict";var cqr=E(),qS=Je(),lqr=_(),pqr=G(),gqr=1/(1<<28);function mqr(r){var e,t;return cqr(r)||r<-1||r>1?NaN:r===1?lqr:r===-1?pqr:(r<0&&(e=!0,r=-r),r<gqr?e?-r:r:(r<.5?(t=r+r,t=.5*qS(t+t*r/(1-r))):t=.5*qS((r+r)/(1-r)),e?-t:t))}yS.exports=mqr});var ES=s((f1e,wS)=>{"use strict";var dqr=bS();wS.exports=dqr});var AS=s((c1e,NS)=>{"use strict";var hqr=dn();function qqr(r){return hqr(1+r)}NS.exports=qqr});var SS=s((l1e,OS)=>{"use strict";var yqr=AS();OS.exports=yqr});var IS=s((p1e,TS)=>{"use strict";var bqr=dn();function wqr(r){return bqr(1-r)}TS.exports=wqr});var LS=s((g1e,_S)=>{"use strict";var Eqr=IS();_S.exports=Eqr});var RS=s((m1e,PS)=>{"use strict";var Nqr=Rt(),$2;Nqr===!0?$2=0:$2=1;PS.exports=$2});var BS=s((d1e,MS)=>{"use strict";var Aqr=lr(),Oqr=gr(),Sqr=RS(),FS=new Oqr(1),Tqr=new Aqr(FS.buffer);function Iqr(r){return FS[0]=r,Tqr[Sqr]}MS.exports=Iqr});var jS=s((h1e,kS)=>{"use strict";var _qr=BS();kS.exports=_qr});var HS=s((q1e,US)=>{"use strict";var Lqr=J(),Da=Pa(),xa=Nu(),GS=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Pqr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Q2=16777216,K2=5960464477539063e-23,Xa=xa(20),CS=xa(20),Ja=xa(20),or=xa(20);function VS(r,e,t,i,n,a,u,o,f){var v,c,l,p,m,h,d,g,q;for(p=a,q=i[t],g=t,m=0;g>0;m++)c=K2*q|0,or[m]=q-Q2*c|0,q=i[g-1]+c,g-=1;if(q=Da(q,n),q-=8*Lqr(q*.125),d=q|0,q-=d,l=0,n>0?(m=or[t-1]>>24-n,d+=m,or[t-1]-=m<<24-n,l=or[t-1]>>23-n):n===0?l=or[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,v=0,m=0;m<t;m++)g=or[m],v===0?g!==0&&(v=1,or[m]=16777216-g):or[m]=16777215-g;if(n>0)switch(n){case 1:or[t-1]&=8388607;break;case 2:or[t-1]&=4194303;break}l===2&&(q=1-q,v!==0&&(q-=Da(1,n)))}if(q===0){for(g=0,m=t-1;m>=a;m--)g|=or[m];if(g===0){for(h=1;or[a-h]===0;h++);for(m=t+1;m<=t+h;m++){for(f[o+m]=GS[u+m],c=0,g=0;g<=o;g++)c+=r[g]*f[o+(m-g)];i[m]=c}return t+=h,VS(r,e,t,i,n,a,u,o,f)}}if(q===0)for(t-=1,n-=24;or[t]===0;)t-=1,n-=24;else q=Da(q,-n),q>=Q2?(c=K2*q|0,or[t]=q-Q2*c|0,t+=1,n+=24,or[t]=c):or[t]=q|0;for(c=Da(1,n),m=t;m>=0;m--)i[m]=c*or[m],c*=K2;for(m=t;m>=0;m--){for(c=0,h=0;h<=p&&h<=t-m;h++)c+=Pqr[h]*i[m+h];Ja[t-m]=c}for(c=0,m=t;m>=0;m--)c+=Ja[m];for(l===0?e[0]=c:e[0]=-c,c=Ja[0]-c,m=1;m<=t;m++)c+=Ja[m];return l===0?e[1]=c:e[1]=-c,d&7}function Rqr(r,e,t,i){var n,a,u,o,f,v,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?Xa[c]=0:Xa[c]=GS[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*Xa[o+(c-l)];CS[c]=n}return f=a,VS(r,e,f,CS,v,a,u,o,Xa)}US.exports=Rqr});var zS=s((y1e,WS)=>{"use strict";var Fqr=Math.round;WS.exports=Fqr});var r1=s((b1e,DS)=>{"use strict";var Mqr=zS();DS.exports=Mqr});var YS=s((w1e,xS)=>{"use strict";var Bqr=r1(),XS=er(),kqr=.6366197723675814,jqr=1.5707963267341256,Cqr=6077100506506192e-26,Gqr=6077100506303966e-26,Vqr=20222662487959506e-37,Uqr=20222662487111665e-37,Hqr=84784276603689e-45,JS=2047;function Wqr(r,e,t){var i,n,a,u,o,f,v;return n=Bqr(r*kqr),u=r-n*jqr,o=n*Cqr,v=e>>20|0,t[0]=u-o,i=XS(t[0]),f=v-(i>>20&JS),f>16&&(a=u,o=n*Gqr,u=a-o,o=n*Vqr-(a-u-o),t[0]=u-o,i=XS(t[0]),f=v-(i>>20&JS),f>49&&(a=u,o=n*Uqr,u=a-o,o=n*Hqr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}xS.exports=Wqr});var $S=s((E1e,ZS)=>{"use strict";var zqr=Jr(),Dqr=cn(),Xqr=Fa(),Jqr=er(),xqr=jS(),Yqr=pi(),Zqr=HS(),Ya=YS(),$qr=0,Qqr=16777216,xe=1.5707963267341256,Bt=6077100506506192e-26,Za=2*Bt,$a=3*Bt,Qa=4*Bt,Kqr=598523,ryr=1072243195,eyr=1073928572,tyr=1074752122,iyr=1074977148,nyr=1075183036,ayr=1075388923,syr=1075594811,uyr=1094263291,hn=[0,0,0],qn=[0,0];function oyr(r,e){var t,i,n,a,u,o,f,v;if(n=Jqr(r),a=n&zqr|0,a<=ryr)return e[0]=r,e[1]=0,0;if(a<=tyr)return(a&Xqr)===Kqr?Ya(r,a,e):a<=eyr?r>0?(v=r-xe,e[0]=v-Bt,e[1]=v-e[0]-Bt,1):(v=r+xe,e[0]=v+Bt,e[1]=v-e[0]+Bt,-1):r>0?(v=r-2*xe,e[0]=v-Za,e[1]=v-e[0]-Za,2):(v=r+2*xe,e[0]=v+Za,e[1]=v-e[0]+Za,-2);if(a<=syr)return a<=nyr?a===iyr?Ya(r,a,e):r>0?(v=r-3*xe,e[0]=v-$a,e[1]=v-e[0]-$a,3):(v=r+3*xe,e[0]=v+$a,e[1]=v-e[0]+$a,-3):a===ayr?Ya(r,a,e):r>0?(v=r-4*xe,e[0]=v-Qa,e[1]=v-e[0]-Qa,4):(v=r+4*xe,e[0]=v+Qa,e[1]=v-e[0]+Qa,-4);if(a<uyr)return Ya(r,a,e);if(a>=Dqr)return e[0]=NaN,e[1]=NaN,0;for(t=xqr(r),i=(a>>20)-1046,v=Yqr(a-(i<<20|0),t),o=0;o<2;o++)hn[o]=v|0,v=(v-hn[o])*Qqr;for(hn[2]=v,u=3;hn[u-1]===$qr;)u-=1;return f=Zqr(hn,qn,i,u,1),r<0?(e[0]=-qn[0],e[1]=-qn[1],-f):(e[0]=qn[0],e[1]=qn[1],f)}ZS.exports=oyr});var yn=s((N1e,QS)=>{"use strict";var vyr=$S();QS.exports=vyr});var eT=s((A1e,rT)=>{"use strict";var KS=-.16666666666666632,fyr=.00833333333332249,cyr=-.0001984126982985795,lyr=27557313707070068e-22,pyr=-25050760253406863e-24,gyr=158969099521155e-24,myr=.0416666666666666,dyr=-.001388888888887411,hyr=2480158728947673e-20,qyr=-27557314351390663e-23,yyr=2087572321298175e-24,byr=-11359647557788195e-27;function wyr(r,e,t,i,n){var a,u,o,f,v;return v=r*r,f=v*v,u=fyr+v*(cyr+v*lyr)+v*f*(pyr+v*gyr),o=v*r,e===0?t[n]=r+o*(KS+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*KS),u=v*(myr+v*(dyr+v*hyr)),u+=f*f*(qyr+v*(yyr+v*byr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*u-r*e)),t}rT.exports=wyr});var t1=s((O1e,iT)=>{"use strict";var Eyr=Jr(),Nyr=cn(),Ayr=er(),Oyr=yn(),tT=eT(),Syr=1072243195,Tyr=1044381696,e1=[0,0];function Iyr(r,e,t,i){var n,a;if(n=Ayr(r),n&=Eyr,n<=Syr)return n<Tyr&&(r|0)===0&&(e[i]=r,e[i+t]=0),tT(r,0,e,t,i);if(n>=Nyr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=Oyr(r,e1),tT(e1[0],e1[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}iT.exports=Iyr});var aT=s((S1e,nT)=>{"use strict";var _yr=t1();function Lyr(r){return _yr(r,[0,0],1,0)}nT.exports=Lyr});var bn=s((T1e,uT)=>{"use strict";var Pyr=w(),sT=aT(),Ryr=t1();Pyr(sT,"assign",Ryr);uT.exports=sT});var vT=s((I1e,oT)=>{"use strict";function Fyr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}oT.exports=Fyr});var cT=s((_1e,fT)=>{"use strict";function Myr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}fT.exports=Myr});var pT=s((L1e,lT)=>{"use strict";function Byr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}lT.exports=Byr});var mT=s((P1e,gT)=>{"use strict";function kyr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}gT.exports=kyr});var hT=s((R1e,dT)=>{"use strict";var jyr=V(),Cyr=bn().assign,Gyr=_(),Vyr=vT(),Uyr=cT(),Hyr=pT(),Wyr=mT(),zyr=.5641895835477563,Dyr=2.404825557695773,Xyr=5.520078110286311,Jyr=616,xyr=-.0014244423042272315,Yyr=1413,Zyr=.0005468602863106496,wn=[0,0];function $yr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===Gyr?0:r===0?1:r<=4?(a=r*r,n=Vyr(a),u=(r+Dyr)*(r-Jyr/256-xyr),u*n):r<=8?(a=1-r*r/64,n=Uyr(a),u=(r+Xyr)*(r-Yyr/256-Zyr),u*n):(a=8/r,i=a*a,e=Hyr(i),t=Wyr(i),u=zyr/jyr(r),Cyr(r,wn,1,0),u*(e*(wn[1]+wn[0])-a*t*(wn[0]-wn[1])))}dT.exports=$yr});var i1=s((F1e,qT)=>{"use strict";var Qyr=hT();qT.exports=Qyr});var Ka=s((M1e,yT)=>{"use strict";var Kyr=1.772453850905516;yT.exports=Kyr});var wT=s((B1e,bT)=>{"use strict";function rbr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}bT.exports=rbr});var NT=s((k1e,ET)=>{"use strict";function ebr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}ET.exports=ebr});var OT=s((j1e,AT)=>{"use strict";function tbr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}AT.exports=tbr});var TT=s((C1e,ST)=>{"use strict";function ibr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}ST.exports=ibr});var _T=s((G1e,IT)=>{"use strict";var nbr=V(),abr=X(),sbr=bn().assign,ubr=_(),obr=Ka(),vbr=wT(),fbr=NT(),cbr=OT(),lbr=TT(),pbr=3.8317059702075125,gbr=7.015586669815619,mbr=981,dbr=-.0003252797924876844,hbr=1796,qbr=-38330184381246464e-21,En=[0,0];function ybr(r){var e,t,i,n,a,u,o,f;return f=abr(r),r===0||f===ubr?0:(f<=4?(u=r*r,a=vbr(u),o=f*(f+pbr)*(f-mbr/256-dbr),e=o*a):f<=8?(u=r*r,a=fbr(u),o=f*(f+gbr)*(f-hbr/256-qbr),e=o*a):(u=8/f,n=u*u,t=cbr(n),i=lbr(n),o=1/(nbr(f)*obr),sbr(f,En,1,0),e=o*(t*(En[0]-En[1])+u*i*(En[0]+En[1]))),r<0&&(e*=-1),e)}IT.exports=ybr});var n1=s((V1e,LT)=>{"use strict";var bbr=_T();LT.exports=bbr});var Pr=s((U1e,PT)=>{"use strict";var wbr=3.141592653589793;PT.exports=wbr});var FT=s((H1e,RT)=>{"use strict";function Ebr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}RT.exports=Ebr});var BT=s((W1e,MT)=>{"use strict";function Nbr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}MT.exports=Nbr});var jT=s((z1e,kT)=>{"use strict";function Abr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}kT.exports=Abr});var GT=s((D1e,CT)=>{"use strict";function Obr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}CT.exports=Obr});var UT=s((X1e,VT)=>{"use strict";function Sbr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}VT.exports=Sbr});var XT=s((J1e,DT)=>{"use strict";var a1=R(),Tbr=V(),Ibr=Pr(),_br=Ka(),Lbr=G(),Pbr=_(),Rbr=bn().assign,s1=i1(),Fbr=FT(),Mbr=BT(),Bbr=jT(),kbr=GT(),jbr=UT(),Cbr=1/_br,u1=2/Ibr,HT=.8935769662791675,WT=3.957678419314858,zT=7.086051060301773,Gbr=228,Vbr=.0029519662791675214,Ubr=1013,Hbr=.0006471693148578684,Wbr=1814,zbr=.00011356030177269763,Nn=[0,0];function Dbr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?Lbr:r===Pbr?0:r<=3?(a=r*r,u=a1(r/HT)*s1(r)*u1,n=Fbr(a),o=(r+HT)*(r-Gbr/256-Vbr),u+o*n):r<=5.5?(a=r*r,u=a1(r/WT)*s1(r)*u1,n=Mbr(a),o=(r+WT)*(r-Ubr/256-Hbr),u+o*n):r<=8?(a=r*r,u=a1(r/zT)*s1(r)*u1,n=Bbr(a),o=(r+zT)*(r-Wbr/256-zbr),u+o*n):(a=8/r,i=a*a,e=kbr(i),t=jbr(i),o=Cbr/Tbr(r),Rbr(r,Nn,1,0),o*(e*(Nn[0]-Nn[1])+a*t*(Nn[1]+Nn[0])))}DT.exports=Dbr});var xT=s((x1e,JT)=>{"use strict";var Xbr=XT();JT.exports=Xbr});var ZT=s((Y1e,YT)=>{"use strict";function Jbr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}YT.exports=Jbr});var QT=s((Z1e,$T)=>{"use strict";function xbr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}$T.exports=xbr});var rI=s(($1e,KT)=>{"use strict";function Ybr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}KT.exports=Ybr});var tI=s((Q1e,eI)=>{"use strict";function Zbr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}eI.exports=Zbr});var vI=s((K1e,oI)=>{"use strict";var iI=R(),$br=V(),Qbr=Pr(),Kbr=Ka(),rwr=G(),ewr=_(),twr=bn().assign,nI=n1(),iwr=ZT(),nwr=QT(),awr=rI(),swr=tI(),uwr=1/Kbr,aI=2/Qbr,sI=2.197141326031017,uI=5.429681040794135,owr=562,vwr=.001828826031017035,fwr=1390,cwr=-6459205864867228e-21,An=[0,0];function lwr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?rwr:r===ewr?0:r<=4?(a=r*r,u=iI(r/sI)*nI(r)*aI,n=iwr(a),o=(r+sI)*(r-owr/256-vwr)/r,u+o*n):r<=8?(a=r*r,u=iI(r/uI)*nI(r)*aI,n=nwr(a),o=(r+uI)*(r-fwr/256-cwr)/r,u+o*n):(a=8/r,i=a*a,e=awr(i),t=swr(i),o=uwr/$br(r),twr(r,An,1,0),o*(a*t*(An[0]-An[1])-e*(An[0]+An[1])))}oI.exports=lwr});var cI=s((r3e,fI)=>{"use strict";var pwr=vI();fI.exports=pwr});var pI=s((e3e,lI)=>{"use strict";function gwr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}lI.exports=gwr});var mI=s((t3e,gI)=>{"use strict";function mwr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}gI.exports=mwr});var hI=s((i3e,dI)=>{"use strict";var dwr=pI(),hwr=mI();function qwr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*dwr(a),i+=n*n*hwr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}dI.exports=qwr});var o1=s((n3e,qI)=>{"use strict";var ywr=hI();qI.exports=ywr});var wI=s((a3e,bI)=>{"use strict";var yI=-.16666666666666632,bwr=.00833333333332249,wwr=-.0001984126982985795,Ewr=27557313707070068e-22,Nwr=-25050760253406863e-24,Awr=158969099521155e-24;function Owr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=bwr+a*(wwr+a*Ewr)+a*n*(Nwr+a*Awr),i=a*r,e===0?r+i*(yI+a*t):r-(a*(.5*e-i*t)-e-i*yI)}bI.exports=Owr});var v1=s((s3e,EI)=>{"use strict";var Swr=wI();EI.exports=Swr});var OI=s((u3e,AI)=>{"use strict";var Twr=er(),f1=o1(),NI=v1(),Iwr=yn(),ae=[0,0],_wr=2147483647,Lwr=1072243195,Pwr=1044381696,Rwr=2146435072;function Fwr(r){var e,t;if(e=Twr(r),e&=_wr,e<=Lwr)return e<Pwr?1:f1(r,0);if(e>=Rwr)return NaN;switch(t=Iwr(r,ae),t&3){case 0:return f1(ae[0],ae[1]);case 1:return-NI(ae[0],ae[1]);case 2:return-f1(ae[0],ae[1]);default:return NI(ae[0],ae[1])}}AI.exports=Fwr});var kt=s((o3e,SI)=>{"use strict";var Mwr=OI();SI.exports=Mwr});var _I=s((v3e,II)=>{"use strict";var Bwr=Jr(),kwr=cn(),jwr=er(),TI=o1(),c1=v1(),Cwr=yn(),Gwr=1072243195,Vwr=1045430272,se=[0,0];function Uwr(r){var e,t;if(e=jwr(r),e&=Bwr,e<=Gwr)return e<Vwr?r:c1(r,0);if(e>=kwr)return NaN;switch(t=Cwr(r,se),t&3){case 0:return c1(se[0],se[1]);case 1:return TI(se[0],se[1]);case 2:return-c1(se[0],se[1]);default:return-TI(se[0],se[1])}}II.exports=Uwr});var jt=s((f3e,LI)=>{"use strict";var Hwr=_I();LI.exports=Hwr});var FI=s((c3e,RI)=>{"use strict";var Wwr=E(),zwr=Lr(),Dwr=X(),PI=kt(),Xwr=jt(),Jwr=J(),l1=Pr(),xwr=gi(),Ywr=xwr+1;function Zwr(r){var e,t,i,n;return Wwr(r)?NaN:zwr(r)?NaN:(e=Dwr(r),e>Ywr?1:(t=Jwr(e),i=e-t,i===.5?0:(i<.25?n=PI(l1*i):i<.75?(i=.5-i,n=Xwr(l1*i)):(i=1-i,n=-PI(l1*i)),t%2===1?-n:n)))}RI.exports=Zwr});var BI=s((l3e,MI)=>{"use strict";var $wr=FI();MI.exports=$wr});var jI=s((p3e,kI)=>{"use strict";var Qwr=1.618033988749895;kI.exports=Qwr});var GI=s((g3e,CI)=>{"use strict";var Kwr=E(),rEr=BI(),eEr=U(),tEr=jI(),iEr=_(),nEr=G(),aEr=2.23606797749979;function sEr(r){var e,t;return Kwr(r)||r===iEr||r===nEr?NaN:(e=eEr(tEr,r),t=rEr(r)/e,(e-t)/aEr)}CI.exports=sEr});var UI=s((m3e,VI)=>{"use strict";var uEr=GI();VI.exports=uEr});var WI=s((d3e,HI)=>{"use strict";function oEr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}HI.exports=oEr});var JI=s((h3e,XI)=>{"use strict";var vEr=k2(),fEr=T2(),zI=Jr(),g1=er(),cEr=ie(),lEr=Lr(),DI=pi(),pEr=li(),gEr=E(),mEr=WI(),dEr=4294967295>>>0,hEr=3221225472>>>0,qEr=0x40000000000000,p1=2147483648>>>0,yEr=1>>>0,bEr=715094163>>>0,wEr=696219795>>>0,EEr=g1(vEr),Ct=[0>>>0,0>>>0];function NEr(r){var e,t,i,n,a,u,o;return r===0||gEr(r)||lEr(r)?r:(t=g1(r)>>>0,e=(t&fEr)>>>0,t&=zI,t<EEr?(u=qEr*r,i=(g1(u)&zI)>>>0,i=(i/3>>>0)+wEr>>>0,u=DI(e|i,0)):(u=0,i=(t/3>>>0)+bEr>>>0,u=cEr(u,e|i)),n=u*u*(u/r),u*=mEr(n),pEr.assign(u,Ct,1,0),Ct[1]&p1?(Ct[0]+=yEr,Ct[1]&=~p1):Ct[1]|=p1,u=DI(Ct[0]&dEr,Ct[1]&hEr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}XI.exports=NEr});var YI=s((q3e,xI)=>{"use strict";var AEr=JI();xI.exports=AEr});var $I=s((y3e,ZI)=>{"use strict";var OEr=Math.ceil;ZI.exports=OEr});var On=s((b3e,QI)=>{"use strict";var SEr=$I();QI.exports=SEr});var r_=s((w3e,KI)=>{"use strict";function TEr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}KI.exports=TEr});var t_=s((E3e,e_)=>{"use strict";function IEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}e_.exports=IEr});var a_=s((N3e,n_)=>{"use strict";var _Er=er(),LEr=r_(),PEr=t_(),i_=1048575,REr=.3333333333333333;function FEr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=_Er(r),a=r-1,(i_&2+n)<3?a===0?0:a*a*(REr*a-.5):(u=a/(2+a),o=u*u,n&=i_,c=n-398458|0,v=o*o,l=440401-n|0,t=v*LEr(v),i=o*PEr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}n_.exports=FEr});var v_=s((A3e,o_)=>{"use strict";var s_=er(),MEr=ie(),BEr=te(),kEr=E(),jEr=xr(),CEr=G(),GEr=a_(),VEr=0x40000000000000,u_=.4342944818781689,UEr=25082946711645275e-27,HEr=.30102999566361177,WEr=3694239077158931e-28,zEr=1048575,DEr=2146435072,XEr=1048576,JEr=1072693248;function xEr(r){var e,t,i,n,a,u,o,f;return kEr(r)||r<0?NaN:r===0?CEr:(t=s_(r),u=0,t<XEr&&(u-=54,r*=VEr,t=s_(r)),t>=DEr?r+r:(u+=(t>>20)-jEr|0,t&=zEr,a=t+614244&1048576|0,r=MEr(r,t|a^JEr),u+=a>>20|0,o=u,n=GEr(r),r-=1,e=BEr(r,0),i=r-e,f=o*WEr+(r+n)*UEr,f+=(i+n)*u_+e*u_,f+o*HEr))}o_.exports=xEr});var c_=s((O3e,f_)=>{"use strict";var YEr=v_();f_.exports=YEr});var p_=s((S3e,l_)=>{"use strict";var ZEr=E(),$Er=Lr(),QEr=U(),KEr=J(),rNr=On(),eNr=c_(),tNr=Ma(),iNr=Ba(),nNr=_();function aNr(r){var e,t;return ZEr(r)||$Er(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=eNr(r),e===-1?t=KEr(t):t=rNr(t),t<=iNr?e*0:t>tNr?nNr:e*QEr(10,t))}l_.exports=aNr});var m_=s((T3e,g_)=>{"use strict";var sNr=p_();g_.exports=sNr});var h_=s((I3e,d_)=>{"use strict";function uNr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}d_.exports=uNr});var y_=s((_3e,q_)=>{"use strict";function oNr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}q_.exports=oNr});var E_=s((L3e,w_)=>{"use strict";var vNr=er(),fNr=h_(),cNr=y_(),b_=1048575,lNr=.3333333333333333;function pNr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=vNr(r),a=r-1,(b_&2+n)<3?a===0?0:a*a*(lNr*a-.5):(u=a/(2+a),o=u*u,n&=b_,c=n-398458|0,v=o*o,l=440401-n|0,t=v*fNr(v),i=o*cNr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}w_.exports=pNr});var O_=s((P3e,A_)=>{"use strict";var gNr=er(),mNr=ie(),dNr=te(),hNr=li(),qNr=E(),yNr=Jr(),bNr=Fa(),wNr=xr(),ENr=G(),NNr=E_(),ANr=0x40000000000000,N_=1.4426950407214463,ONr=16751713164886512e-26,SNr=2146435072,TNr=1048576,INr=1072693248,m1=[0,0];function _Nr(r){var e,t,i,n,a,u,o;if(qNr(r)||r<0)return NaN;if(hNr.assign(r,m1,1,0),i=m1[0],n=m1[1],o=0,i<TNr){if((i&yNr|n)===0)return ENr;o-=54,r*=ANr,i=gNr(r)}return i>=SNr?r+r:(o+=(i>>20)-wNr|0,i&=bNr,u=i+614244&1048576|0,r=mNr(r,i|u^INr),o+=u>>20|0,a=NNr(r),r-=1,e=dNr(r,0),t=r-e,(r+a)*ONr+(t+a)*N_+e*N_+o)}A_.exports=_Nr});var T_=s((R3e,S_)=>{"use strict";var LNr=O_();S_.exports=LNr});var __=s((F3e,I_)=>{"use strict";var PNr=E(),RNr=Lr(),FNr=U(),MNr=J(),BNr=On(),kNr=T_(),jNr=M2(),CNr=B2(),GNr=_();function VNr(r){var e,t;return PNr(r)||RNr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=kNr(r),t===CNr)?r:(e===-1?t=MNr(t):t=BNr(t),t>jNr?GNr:e*FNr(2,t))}I_.exports=VNr});var P_=s((M3e,L_)=>{"use strict";var UNr=__();L_.exports=UNr});var F_=s((B3e,R_)=>{"use strict";var HNr=J(),WNr=On();function zNr(r){return r<0?WNr(r):HNr(r)}R_.exports=zNr});var r0=s((k3e,M_)=>{"use strict";var DNr=F_();M_.exports=DNr});var k_=s((j3e,B_)=>{"use strict";function XNr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}B_.exports=XNr});var C_=s((C3e,j_)=>{"use strict";var JNr=Pa(),xNr=k_();function YNr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*xNr(n),u=1-(e-i*a/(2-a)-r),JNr(u,t)}j_.exports=YNr});var z_=s((G3e,W_)=>{"use strict";var ZNr=E(),G_=r0(),$Nr=G(),V_=_(),QNr=C_(),KNr=.6931471803691238,rAr=19082149292705877e-26,U_=1.4426950408889634,eAr=709.782712893384,tAr=-745.1332191019411,H_=1/(1<<28),iAr=-H_;function nAr(r){var e,t,i;return ZNr(r)||r===V_?r:r===$Nr?0:r>eAr?V_:r<tAr?0:r>iAr&&r<H_?1+r:(r<0?i=G_(U_*r-.5):i=G_(U_*r+.5),e=r-i*KNr,t=i*rAr,QNr(e,t,i))}W_.exports=nAr});var ir=s((V3e,D_)=>{"use strict";var aAr=z_();D_.exports=aAr});var J_=s((U3e,X_)=>{"use strict";var sAr=G();function uAr(r){return r===0&&1/r===sAr}X_.exports=uAr});var d1=s((H3e,x_)=>{"use strict";var oAr=J_();x_.exports=oAr});var h1=s((W3e,Y_)=>{"use strict";var vAr=2.5066282746310007;Y_.exports=vAr});var $_=s((z3e,Z_)=>{"use strict";function fAr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Z_.exports=fAr});var rL=s((D3e,K_)=>{"use strict";var cAr=h1(),Q_=U(),lAr=ir(),pAr=$_(),gAr=143.01608;function mAr(r){var e,t,i;return e=1/r,e=1+e*pAr(e),t=lAr(r),r>gAr?(i=Q_(r,.5*r-.25),t=i*(i/t)):t=Q_(r,r-.5)/t,cAr*t*e}K_.exports=mAr});var tL=s((X3e,eL)=>{"use strict";var dAr=.5772156649015329;eL.exports=dAr});var nL=s((J3e,iL)=>{"use strict";var hAr=tL();function qAr(r,e){return e/((1+hAr*r)*r)}iL.exports=qAr});var sL=s((x3e,aL)=>{"use strict";function yAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}aL.exports=yAr});var gL=s((Y3e,pL)=>{"use strict";var bAr=E(),wAr=Tr(),EAr=d1(),uL=X(),NAr=J(),AAr=jt(),oL=_(),vL=G(),fL=Pr(),cL=rL(),lL=nL(),OAr=sL();function SAr(r){var e,t,i,n;if(wAr(r)&&r<0||r===vL||bAr(r))return NaN;if(r===0)return EAr(r)?vL:oL;if(r>171.61447887182297)return oL;if(r<-170.5674972726612)return 0;if(t=uL(r),t>33)return r>=0?cL(r):(i=NAr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*AAr(fL*n),e*fL/(uL(n)*cL(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return lL(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return lL(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*OAr(r))}pL.exports=SAr});var mi=s((Z3e,mL)=>{"use strict";var TAr=gL();mL.exports=TAr});var qL=s(($3e,hL)=>{"use strict";var IAr=E(),_Ar=Lr(),dL=kt(),q1=jt(),LAr=X(),Sn=Sa(),Tn=Pr();function PAr(r){var e,t;return IAr(r)?NaN:_Ar(r)?NaN:(t=r%2,e=LAr(t),e===0||e===1?Sn(0,t):e<.25?q1(Tn*t):e<.75?(e=.5-e,Sn(dL(Tn*e),t)):e<1.25?(t=Sn(1,t)-t,q1(Tn*t)):e<1.75?(e-=1.5,-Sn(dL(Tn*e),t)):(t-=Sn(2,t),q1(Tn*t)))}hL.exports=PAr});var In=s((Q3e,yL)=>{"use strict";var RAr=qL();yL.exports=RAr});var wL=s((K3e,bL)=>{"use strict";function FAr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}bL.exports=FAr});var NL=s((rve,EL)=>{"use strict";function MAr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}EL.exports=MAr});var OL=s((eve,AL)=>{"use strict";function BAr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}AL.exports=BAr});var TL=s((tve,SL)=>{"use strict";function kAr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}SL.exports=kAr});var _L=s((ive,IL)=>{"use strict";function jAr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}IL.exports=jAr});var PL=s((nve,LL)=>{"use strict";function CAr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}LL.exports=CAr});var FL=s((ave,RL)=>{"use strict";function GAr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}RL.exports=GAr});var BL=s((sve,ML)=>{"use strict";function VAr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}ML.exports=VAr});var jL=s((uve,kL)=>{"use strict";function UAr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}kL.exports=UAr});var GL=s((ove,CL)=>{"use strict";function HAr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}CL.exports=HAr});var HL=s((vve,UL)=>{"use strict";var WAr=E(),zAr=Lr(),DAr=X(),di=R(),XAr=r0(),JAr=In(),xAr=Pr(),y1=_(),YAr=wL(),ZAr=NL(),$Ar=OL(),QAr=TL(),KAr=_L(),rOr=PL(),eOr=FL(),tOr=BL(),iOr=jL(),nOr=GL(),aOr=.07721566490153287,sOr=.3224670334241136,uOr=1,oOr=-.07721566490153287,vOr=.48383612272381005,fOr=-.1475877229945939,cOr=.06462494023913339,lOr=-.07721566490153287,pOr=1,gOr=.4189385332046727,e0=1.4616321449683622,mOr=4503599627370496,dOr=0x400000000000000,hOr=8470329472543003e-37,VL=1.4616321449683622,qOr=-.12148629053584961,yOr=-3638676997039505e-33;function bOr(r){var e,t,i,n,a,u,o,f,v,c,l,p,m;if(WAr(r)||zAr(r))return r;if(r===0)return y1;if(r<0?(e=!0,r=-r):e=!1,r<hOr)return-di(r);if(e){if(r>=mOr||(v=JAr(r),v===0))return y1;t=di(xAr/DAr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-di(r),r>=e0-1+.27?(l=1-r,i=0):r>=e0-1-.27?(l=r-(VL-1),i=1):(l=r,i=2)):(m=0,r>=e0+.27?(l=2-r,i=0):r>=e0-.27?(l=r-VL,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=aOr+p*YAr(p),a=p*(sOr+p*ZAr(p)),o=l*u+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=vOr+c*KAr(c),a=fOr+c*rOr(c),n=cOr+c*eOr(c),o=p*u-(yOr-c*(a+l*n)),m+=qOr+o;break;case 2:u=l*(lOr+l*tOr(l)),a=pOr+l*iOr(l),m+=-.5*l+u/a;break}else if(r<8)switch(i=XAr(r),l=r-i,o=l*(oOr+l*QAr(l)),f=uOr+l*$Ar(l),m=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=di(p)}else r<dOr?(v=di(r),p=1/r,l=p*p,c=gOr+p*nOr(l),m=(r-.5)*(v-1)+c):m=r*(di(r)-1);return e&&(m=t-m),m}UL.exports=bOr});var _n=s((fve,WL)=>{"use strict";var wOr=HL();WL.exports=wOr});var Ye=s((cve,zL)=>{"use strict";var EOr=6.283185307179586;zL.exports=EOr});var b1=s((lve,DL)=>{"use strict";var NOr=14901161193847656e-24;DL.exports=NOr});var w1=s((pve,XL)=>{"use strict";var AOr=.9189385332046728;XL.exports=AOr});var JL=s((gve,OOr)=>{OOr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var xL=s((mve,SOr)=>{SOr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var YL=s((dve,TOr)=>{TOr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var $L=s((hve,ZL)=>{"use strict";function IOr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}ZL.exports=IOr});var KL=s((qve,QL)=>{"use strict";function _Or(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}QL.exports=_Or});var eP=s((yve,rP)=>{"use strict";function LOr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}rP.exports=LOr});var iP=s((bve,tP)=>{"use strict";function POr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}tP.exports=POr});var aP=s((wve,nP)=>{"use strict";function ROr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}nP.exports=ROr});var uP=s((Eve,sP)=>{"use strict";function FOr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}sP.exports=FOr});var lP=s((Nve,cP)=>{"use strict";var MOr=E(),BOr=Tr(),kOr=X(),t0=ir(),jOr=J(),COr=mi(),GOr=_n(),oP=In(),vP=U(),VOr=R(),UOr=_(),HOr=G(),fP=Ye(),WOr=b1(),zOr=w1(),DOr=JL(),XOr=xL(),JOr=YL(),xOr=$L(),YOr=KL(),ZOr=eP(),$Or=iP(),QOr=aP(),KOr=uP(),rSr=129,eSr=170,tSr=709,iSr=1.2433929443359375,nSr=.6986598968505859;function E1(r){var e,t,i,n,a,u;if(MOr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(BOr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=rSr)return-JOr[u]/(i+1)}else return(n&1)===0?XOr[n/2]:DOr[(n-3)/2];return kOr(r)<WOr?-.5-zOr*r:(t=1-r,r<0?jOr(r/2)===r/2?0:(e=r,r=t,t=e,r>eSr?(e=oP(.5*t)*2*E1(r),a=GOr(r),a-=r*VOr(fP),a>tSr?e<0?HOr:UOr:e*t0(a)):oP(.5*t)*2*vP(fP,-r)*COr(r)*E1(r)):r<1?(e=xOr(t),e-=iSr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+YOr(t)):r<=4?(e=nSr+1/-t,e+ZOr(r-2)):r<=7?(e=$Or(r-4),1+t0(e)):r<15?(e=QOr(r-7),1+t0(e)):r<36?(e=KOr(r-15),1+t0(e)):1+vP(2,-r))}cP.exports=E1});var gP=s((Ave,pP)=>{"use strict";var aSr=lP();pP.exports=aSr});var dP=s((Ove,mP)=>{"use strict";var H=nr(),sSr=X(),uSr=Ga(),oSr=dn(),vSr=_O(),fSr=HO(),cSr=XO(),lSr=ZO(),pSr=rS(),gSr=vS(),mSr=pS(),dSr=hS(),hSr=Mt(),qSr=Z2(),ySr=za(),bSr=ES(),wSr=SS(),ESr=LS(),NSr=i1(),ASr=n1(),OSr=xT(),SSr=cI(),TSr=UI(),ISr=YI(),_Sr=On(),LSr=m_(),PSr=P_(),RSr=kt(),FSr=jt(),MSr=V(),BSr=gP();function kSr(r){return H(r,"abs",sSr),H(r,"abs2",uSr),H(r,"acos",oSr),H(r,"acosh",vSr),H(r,"acot",fSr),H(r,"acovercos",cSr),H(r,"acoversin",lSr),H(r,"acsc",pSr),H(r,"acsch",gSr),H(r,"ahavercos",mSr),H(r,"ahaversin",dSr),H(r,"asin",hSr),H(r,"asinh",qSr),H(r,"atan",ySr),H(r,"atanh",bSr),H(r,"avercos",wSr),H(r,"aversin",ESr),H(r,"besselj0",NSr),H(r,"besselj1",ASr),H(r,"bessely0",OSr),H(r,"bessely1",SSr),H(r,"binet",TSr),H(r,"cbrt",ISr),H(r,"ceil",_Sr),H(r,"ceil10",LSr),H(r,"ceil2",PSr),H(r,"cos",RSr),H(r,"sin",FSr),H(r,"sqrt",MSr),H(r,"zeta",BSr),r}mP.exports=kSr});var qP=s((Sve,hP)=>{"use strict";var jSr=nr(),CSr=pA(),GSr=WA(),VSr=dP();function USr(r){return jSr(r,"tools",GSr({})),r=CSr(r),r=VSr(r),r}hP.exports=USr});var bP=s((Tve,yP)=>{"use strict";var HSr=je();function WSr(r,e,t,i){HSr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}yP.exports=WSr});var F=s((Ive,wP)=>{"use strict";var zSr=bP();wP.exports=zSr});var NP=s((_ve,EP)=>{"use strict";function DSr(r){return e;function e(){return r}}EP.exports=DSr});var S=s((Lve,AP)=>{"use strict";var XSr=NP();AP.exports=XSr});var SP=s((Pve,OP)=>{"use strict";var JSr=_();function xSr(r){return r===0&&1/r===JSr}OP.exports=xSr});var Ze=s((Rve,TP)=>{"use strict";var YSr=SP();TP.exports=YSr});var LP=s((Fve,_P)=>{"use strict";var ZSr=Ze(),IP=E(),N1=_();function $Sr(r,e){return IP(r)||IP(e)?NaN:r===N1||e===N1?N1:r===e&&r===0?ZSr(r)?r:e:r>e?r:e}_P.exports=$Sr});var A1=s((Mve,PP)=>{"use strict";var QSr=LP();PP.exports=QSr});var MP=s((Bve,FP)=>{"use strict";var RP=65535;function KSr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&RP)>>>0,o=(e&RP)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}FP.exports=KSr});var kP=s((kve,BP)=>{"use strict";var rTr=MP();BP.exports=rTr});var O1=s((jve,jP)=>{"use strict";function eTr(r,e,t,i,n,a,u){var o,f,v,c,l,p,m;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,m=0;m<r;m++)v(f,p,c(o,l)),l+=t,p+=a;return e}jP.exports=eTr});var VP=s((Cve,GP)=>{"use strict";var CP=da(),tTr=O1(),S1=8;function iTr(r,e,t,i,n){var a,u,o,f,v,c;if(r<=0)return i;if(o=CP(e),f=CP(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,tTr(r,o,t,a,f,n,u),f.data;if(t===1&&n===1){if(v=r%S1,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<S1)return i;for(c=v;c<r;c+=S1)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}GP.exports=iTr});var WP=s((Gve,HP)=>{"use strict";var UP=da(),nTr=O1(),Ln=8;function aTr(r,e,t,i,n,a,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=UP(e),c=UP(n),v.accessorProtocol||c.accessorProtocol)return nTr(r,v,t,i,c,a,u),c.data;if(o=i,f=u,t===1&&a===1){if(l=r%Ln,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<Ln)return n;for(p=l;p<r;p+=Ln)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=Ln,f+=Ln;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}HP.exports=aTr});var $e=s((Vve,DP)=>{"use strict";var sTr=w(),zP=VP(),uTr=WP();sTr(zP,"ndarray",uTr);DP.exports=zP});var JP=s((Uve,XP)=>{"use strict";function oTr(){}XP.exports=oTr});var YP=s((Hve,xP)=>{"use strict";var vTr=JP();function fTr(){return vTr.name==="foo"}xP.exports=fTr});var $P=s((Wve,ZP)=>{"use strict";var cTr=YP();ZP.exports=cTr});var KP=s((zve,QP)=>{"use strict";var lTr=L(),pTr=$P(),gTr=y(),mTr=Bu().REGEXP,dTr=pTr();function hTr(r){if(lTr(r)===!1)throw new TypeError(gTr("invalid argument. Must provide a function. Value: `%s`.",r));return dTr?r.name:mTr.exec(r.toString())[1]}QP.exports=hTr});var eR=s((Dve,rR)=>{"use strict";var qTr=KP();rR.exports=qTr});var iR=s((Xve,tR)=>{"use strict";var yTr=Ji(),bTr=xt(),wTr=Xi(),ETr=Di(),NTr=Jt(),ATr=Et(),OTr=lr(),STr=Qr(),TTr=gr(),ITr=[TTr,STr,ATr,OTr,ETr,NTr,yTr,bTr,wTr];tR.exports=ITr});var nR=s((Jve,_Tr)=>{_Tr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var fR=s((xve,vR)=>{"use strict";var LTr=Ce(),PTr=eR(),uR=It(),RTr=Hu(),FTr=gr(),aR=iR(),sR=nR(),i0=RTr()?uR(FTr):oR;i0=PTr(i0)==="TypedArray"?i0:oR;function oR(){}function MTr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof i0)return!0;for(t=0;t<aR.length;t++)if(r instanceof aR[t])return!0;for(;r;){for(e=LTr(r),t=0;t<sR.length;t++)if(sR[t]===e)return!0;r=uR(r)}return!1}vR.exports=MTr});var lR=s((Yve,cR)=>{"use strict";var BTr=fR();cR.exports=BTr});var gR=s((Zve,pR)=>{"use strict";var kTr=$i(),jTr=Ki(),CTr=[jTr,kTr];pR.exports=CTr});var mR=s(($ve,GTr)=>{GTr.exports=["Complex64Array","Complex128Array"]});var yR=s((Qve,qR)=>{"use strict";var VTr=Ce(),UTr=It(),dR=gR(),hR=mR();function HTr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<dR.length;t++)if(r instanceof dR[t])return!0;for(;r;){for(e=VTr(r),t=0;t<hR.length;t++)if(hR[t]===e)return!0;r=UTr(r)}return!1}qR.exports=HTr});var wR=s((Kve,bR)=>{"use strict";var WTr=yR();bR.exports=WTr});var NR=s((rfe,ER)=>{"use strict";var zTr=y();function DTr(r,e){if(typeof e!="function")throw new TypeError(zTr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}ER.exports=DTr});var OR=s((efe,AR)=>{"use strict";var XTr=NR();AR.exports=XTr});var TR=s((tfe,SR)=>{"use strict";var JTr=Ji(),xTr=xt(),YTr=Xi(),ZTr=Di(),$Tr=Jt(),QTr=Et(),KTr=lr(),rIr=Qr(),eIr=gr(),tIr=$i(),iIr=Ki(),nIr=[[eIr,"Float64Array"],[rIr,"Float32Array"],[QTr,"Int32Array"],[KTr,"Uint32Array"],[ZTr,"Int16Array"],[$Tr,"Uint16Array"],[JTr,"Int8Array"],[xTr,"Uint8Array"],[YTr,"Uint8ClampedArray"],[tIr,"Complex64Array"],[iIr,"Complex128Array"]];SR.exports=nIr});var _R=s((ife,IR)=>{"use strict";var aIr=OR(),sIr=Ce(),uIr=It(),hi=TR();function oIr(r){var e,t;for(t=0;t<hi.length;t++)if(aIr(r,hi[t][0]))return hi[t][1];for(;r;){for(e=sIr(r),t=0;t<hi.length;t++)if(e===hi[t][1])return hi[t][1];r=uIr(r)}}IR.exports=oIr});var PR=s((nfe,LR)=>{"use strict";var vIr=lR(),fIr=wR(),cIr=$t(),lIr=Qt(),pIr=y(),gIr=_R();function mIr(r){var e,t,i;if(vIr(r))e=r;else if(fIr(r))r.BYTES_PER_ELEMENT===8?e=cIr(r,0):e=lIr(r,0);else throw new TypeError(pIr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:gIr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}LR.exports=mIr});var M=s((afe,RR)=>{"use strict";var dIr=PR();RR.exports=dIr});var T1=s((sfe,FR)=>{"use strict";var hIr=Dt(),qIr=J(),yIr=hIr-1;function bIr(){var r=qIr(1+yIr*Math.random());return r>>>0}FR.exports=bIr});var B1=s((ufe,zR)=>{"use strict";var ue=w(),Qe=P(),MR=F(),I1=O(),wIr=I(),EIr=jr(),BR=Kr(),NIr=fr().isPrimitive,kR=re().isPrimitive,UR=gi(),HR=Dt(),qr=lr(),AIr=A1(),M1=kP(),qi=$e(),OIr=M(),br=y(),jR=T1(),ar=624,_1=397,CR=HR>>>0,SIr=19650218>>>0,L1=2147483648>>>0,P1=2147483647>>>0,TIr=1812433253>>>0,IIr=1664525>>>0,_Ir=1566083941>>>0,LIr=2636928640>>>0,PIr=4022730752>>>0,RIr=2567483615>>>0,R1=[0>>>0,RIr>>>0],WR=1/(UR+1),FIr=67108864>>>0,MIr=2147483648>>>0,F1=1>>>0,BIr=UR*WR,n0=1,a0=3,Ke=2,rt=ar+3,yr=ar+5,Pn=ar+6;function GR(r,e){var t;return e?t="option":t="argument",r.length<Pn+1?new RangeError(br("invalid %s. `state` array has insufficient length.",t)):r[0]!==n0?new RangeError(br("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,n0,r[0])):r[1]!==a0?new RangeError(br("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,a0,r[1])):r[Ke]!==ar?new RangeError(br("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ar,r[Ke])):r[rt]!==1?new RangeError(br("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[rt])):r[yr]!==r.length-Pn?new RangeError(br("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Pn,r[yr])):null}function VR(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=M1(t,TIr)+i>>>0;return r}function kIr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=AIr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=M1(n,IIr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=M1(n,_Ir)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=MIr,r}function jIr(r){var e,t,i,n;for(n=ar-_1,t=0;t<n;t++)e=r[t]&L1|r[t+1]&P1,r[t]=r[t+_1]^e>>>1^R1[e&F1];for(i=ar-1;t<i;t++)e=r[t]&L1|r[t+1]&P1,r[t]=r[t-n]^e>>>1^R1[e&F1];return e=r[i]&L1|r[0]&P1,r[i]=r[_1-1]^e>>>1^R1[e&F1],r}function CIr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!wIr(r))throw new TypeError(br("invalid argument. Options argument must be an object. Value: `%s`.",r));if(I1(r,"copy")&&(i.copy=r.copy,!NIr(r.copy)))throw new TypeError(br("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(I1(r,"state")){if(t=r.state,i.state=!0,!BR(t))throw new TypeError(br("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=GR(t,!0),u)throw u;i.copy===!1?e=t:(e=new qr(t.length),qi(t.length,t,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,t[yr])}if(n===void 0)if(I1(r,"seed"))if(n=r.seed,i.seed=!0,kR(n)){if(n>CR)throw new RangeError(br("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(EIr(n)===!1||n.length<1)throw new TypeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!kR(n))throw new TypeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>CR)throw new RangeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new qr(Pn+a),e[0]=n0,e[1]=a0,e[Ke]=ar,e[rt]=1,e[rt+1]=ar,e[yr]=a,qi.ndarray(a,n,1,0,e,1,yr+1),t=new qr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,a),t=VR(t,ar,SIr),t=kIr(t,ar,n,a)}else n=jR()>>>0}else n=jR()>>>0;return t===void 0&&(e=new qr(Pn+1),e[0]=n0,e[1]=a0,e[Ke]=ar,e[rt]=1,e[rt+1]=ar,e[yr]=1,e[yr+1]=n,t=new qr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,1),t=VR(t,ar,n)),ue(h,"NAME","mt19937"),Qe(h,"seed",o),Qe(h,"seedLength",f),MR(h,"state",l,p),Qe(h,"stateLength",v),Qe(h,"byteLength",c),ue(h,"toJSON",m),ue(h,"MIN",0),ue(h,"MAX",HR),ue(h,"normalized",d),ue(d,"NAME",h.NAME),Qe(d,"seed",o),Qe(d,"seedLength",f),MR(d,"state",l,p),Qe(d,"stateLength",v),Qe(d,"byteLength",c),ue(d,"toJSON",m),ue(d,"MIN",0),ue(d,"MAX",BIr),h;function o(){var g=e[yr];return qi(g,n,1,new qr(g),1)}function f(){return e[yr]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return qi(g,e,1,new qr(g),1)}function p(g){var q;if(!BR(g))throw new TypeError(br("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(q=GR(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?qi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new qr(g.length)),qi(g.length,g,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,e[yr])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=OIr(e),g.params=[],g}function h(){var g,q;return q=e[rt+1],q>=ar&&(t=jIr(t),q=0),g=t[q],e[rt+1]=q+1,g^=g>>>11,g^=g<<7&LIr,g^=g<<15&PIr,g^=g>>>18,g>>>0}function d(){var g=h()>>>5,q=h()>>>6;return(g*FIr+q)*WR}}zR.exports=CIr});var XR=s((ofe,DR)=>{"use strict";var GIr=B1(),VIr=T1(),UIr=GIr({seed:VIr()});DR.exports=UIr});var z=s((vfe,xR)=>{"use strict";var HIr=w(),JR=XR(),WIr=B1();HIr(JR,"factory",WIr);xR.exports=JR});var QR=s((ffe,$R)=>{"use strict";var YR=j().isPrimitive,k1=y(),ZR=sr();function zIr(r,e){return!YR(r)||ZR(r)?new TypeError(k1("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!YR(e)||ZR(e)?new TypeError(k1("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(k1("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}$R.exports=zIr});var rF=s((cfe,KR)=>{"use strict";var DIr=U(),XIr=jt(),JIr=Wa();function xIr(r,e,t){return e+DIr(XIr(JIr*r()),2)*(t-e)}KR.exports=xIr});var j1=s((lfe,oF)=>{"use strict";var oe=w(),s0=P(),eF=F(),tF=I(),iF=L(),nF=O(),aF=S(),YIr=C(),u0=z().factory,sF=E(),ZIr=M(),o0=y(),$Ir=QR(),uF=rF();function QIr(){var r,e,t,i,n,a;if(arguments.length===0)e=u0();else if(arguments.length===1){if(r=arguments[0],!tF(r))throw new TypeError(o0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nF(r,"prng")){if(!iF(r.prng))throw new TypeError(o0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=u0(r)}else{if(n=arguments[0],a=arguments[1],i=$Ir(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!tF(r))throw new TypeError(o0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nF(r,"prng")){if(!iF(r.prng))throw new TypeError(o0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=u0(r)}else e=u0()}return n===void 0?t=h:t=m,oe(t,"NAME","arcsine"),r&&r.prng?(oe(t,"seed",null),oe(t,"seedLength",null),eF(t,"state",aF(null),YIr),oe(t,"stateLength",null),oe(t,"byteLength",null),oe(t,"toJSON",aF(null)),oe(t,"PRNG",e)):(s0(t,"seed",u),s0(t,"seedLength",o),eF(t,"state",c,l),s0(t,"stateLength",f),s0(t,"byteLength",v),oe(t,"toJSON",p),oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=ZIr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return uF(e,n,a)}function h(d,g){return sF(d)||sF(g)||d>=g?NaN:uF(e,d,g)}}oF.exports=QIr});var fF=s((pfe,vF)=>{"use strict";var KIr=j1(),r_r=KIr();vF.exports=r_r});var pF=s((gfe,lF)=>{"use strict";var e_r=w(),cF=fF(),t_r=j1();e_r(cF,"factory",t_r);lF.exports=cF});var C1=s((mfe,yF)=>{"use strict";var ve=w(),v0=P(),gF=F(),mF=I(),i_r=en().isPrimitive,dF=L(),hF=O(),qF=S(),n_r=C(),f0=z().factory,a_r=E(),s_r=M(),c0=y();function u_r(){var r,e,t,i;if(arguments.length===0)e=f0();else if(arguments.length===1&&mF(arguments[0]))if(r=arguments[0],hF(r,"prng")){if(!dF(r.prng))throw new TypeError(c0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=f0(r);else{if(i=arguments[0],!i_r(i))throw new TypeError(c0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!mF(r))throw new TypeError(c0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hF(r,"prng")){if(!dF(r.prng))throw new TypeError(c0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=f0(r)}else e=f0()}return i===void 0?t=p:t=l,ve(t,"NAME","bernoulli"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),gF(t,"state",qF(null),n_r),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",qF(null)),ve(t,"PRNG",e)):(v0(t,"seed",n),v0(t,"seedLength",a),gF(t,"state",f,v),v0(t,"stateLength",u),v0(t,"byteLength",o),ve(t,"toJSON",c),ve(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=s_r(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return a_r(m)||m<0||m>1?NaN:e()<=m?1:0}}yF.exports=u_r});var wF=s((dfe,bF)=>{"use strict";var o_r=C1(),v_r=o_r();bF.exports=v_r});var AF=s((hfe,NF)=>{"use strict";var f_r=w(),EF=wF(),c_r=C1();f_r(EF,"factory",c_r);NF.exports=EF});var IF=s((qfe,TF)=>{"use strict";var l_r=V(),OF=ir(),p_r=R(),SF=.00991256303526217;function g_r(r,e){var t,i,n;for(i=OF(-.5*e*e),t=[],t.push(SF/i),t.push(e),n=2;n<r;n++)t[n]=l_r(-2*p_r(SF/t[n-1]+i)),i=OF(-.5*t[n]*t[n]);return t.push(0),t}TF.exports=g_r});var LF=s((yfe,_F)=>{"use strict";function m_r(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}_F.exports=m_r});var FF=s((bfe,RF)=>{"use strict";var PF=R();function d_r(r,e,t){var i,n;do i=PF(r())/e,n=PF(r());while(-2*n<i*i);return t?i-e:e-i}RF.exports=d_r});var jF=s((wfe,kF)=>{"use strict";var h_r=X(),MF=ir(),q_r=IF(),y_r=LF(),b_r=FF(),w_r=128,BF=3.442619855899,Gt=q_r(w_r,BF),E_r=y_r(Gt),N_r=127;function A_r(r,e){return t;function t(){for(var i,n,a,u,o,f,v;;){if(o=2*r()-1,f=e()&N_r,h_r(o)<E_r[f])return o*Gt[f];if(f===0)return b_r(r,BF,o<0);if(u=o*Gt[f],a=u*u,v=f+1,i=MF(-.5*(Gt[f]*Gt[f]-a)),n=MF(-.5*(Gt[v]*Gt[v]-a)),n+r()*(i-n)<1)return u}}}kF.exports=A_r});var V1=s((Efe,VF)=>{"use strict";var et=w(),l0=P(),CF=F(),O_r=L(),S_r=I(),T_r=fr().isPrimitive,p0=O(),I_r=Kr(),G1=z().factory,GF=S(),__r=C(),L_r=J(),P_r=Dt(),R_r=M(),Rn=y(),F_r=jF();function M_r(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!S_r(r))throw new TypeError(Rn("invalid argument. Must provide an object. Value: `%s`.",r));if(p0(r,"copy")&&(n.copy=r.copy,!T_r(r.copy)))throw new TypeError(Rn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(p0(r,"prng")){if(!O_r(r.prng))throw new TypeError(Rn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(p0(r,"state")){if(n.state=r.state,!I_r(r.state))throw new TypeError(Rn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(p0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Rn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=G1(n),e=t.normalized):(t=G1({seed:L_r(1+P_r*e()),copy:n.copy}),n.seed=null):(t=G1(n),e=t.normalized),i=F_r(e,t),et(i,"NAME","improved-ziggurat"),n.seed===null?(et(i,"seed",null),et(i,"seedLength",null)):(l0(i,"seed",a),l0(i,"seedLength",u)),r&&r.prng?(CF(i,"state",GF(null),__r),et(i,"stateLength",null),et(i,"byteLength",null),et(i,"toJSON",GF(null))):(CF(i,"state",v,c),l0(i,"stateLength",o),l0(i,"byteLength",f),et(i,"toJSON",l)),et(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=R_r(t.state),p.params=[],p}}VF.exports=M_r});var HF=s((Nfe,UF)=>{"use strict";var B_r=V1(),k_r=B_r();UF.exports=k_r});var tt=s((Afe,zF)=>{"use strict";var j_r=w(),WF=HF(),C_r=V1();j_r(WF,"factory",C_r);zF.exports=WF});var XF=s((Ofe,DF)=>{"use strict";var G_r=L(),V_r=G_r(Object.assign);DF.exports=V_r});var xF=s((Sfe,JF)=>{"use strict";var U_r=Object.assign;JF.exports=U_r});var ZF=s((Tfe,YF)=>{"use strict";var H_r=typeof Object.getOwnPropertySymbols<"u";YF.exports=H_r});var KF=s((Ife,QF)=>{"use strict";var $F=ai(),W_r=$F.getOwnPropertySymbols;function z_r(r){return W_r($F(r))}QF.exports=z_r});var eM=s((_fe,rM)=>{"use strict";function D_r(){return[]}rM.exports=D_r});var iM=s((Lfe,tM)=>{"use strict";var X_r=ZF(),J_r=KF(),x_r=eM(),U1;X_r?U1=J_r:U1=x_r;tM.exports=U1});var aM=s((Pfe,nM)=>{"use strict";var Y_r=an(),Z_r=iM(),$_r=nn();function Q_r(r){var e,t,i;for(e=Y_r(r),t=Z_r(r),i=0;i<t.length;i++)$_r(r,t[i])&&e.push(t[i]);return e}nM.exports=Q_r});var uM=s((Rfe,sM)=>{"use strict";var K_r=aM();sM.exports=K_r});var fM=s((Ffe,vM)=>{"use strict";var rLr=uM(),oM=ai(),eLr=y();function tLr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(eLr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=oM(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=rLr(oM(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}vM.exports=tLr});var Fn=s((Mfe,cM)=>{"use strict";var iLr=XF(),nLr=xF(),aLr=fM(),H1;iLr?H1=nLr:H1=aLr;cM.exports=H1});var mM=s((Bfe,gM)=>{"use strict";var lM=W().isPrimitive,pM=y();function sLr(r,e){return lM(r)?lM(e)?null:new TypeError(pM("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(pM("invalid argument. First argument must be a positive number. Value: `%s`.",r))}gM.exports=sLr});var bM=s((kfe,yM)=>{"use strict";var dM=R(),hM=V(),uLr=U(),qM=1/3;function oLr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(t<1?(f=t+1-qM,o=1/hM(9*f),c=uLr(r(),1/t)):(f=t-qM,o=1/hM(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,u=.5*n+f*(1-p+dM(p)),l=r(),(l<a||dM(l)<u)&&(i=!1)}return f*p*c}yM.exports=oLr});var NM=s((jfe,EM)=>{"use strict";var W1=U(),wM=R();function vLr(r,e,t){var i,n,a,u,o,f,v,c;for(a=t-1,o=W1(a+a,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=W1(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*W1(n/(8*t-8),2),f<c&&(c=a*wM(4*v*(1-v)),c+=u*u/2,c>=wM(f)&&(i=!1))));return v}EM.exports=vLr});var OM=s((Cfe,AM)=>{"use strict";var fLr=U(),g0=R();function cLr(r,e,t,i){var n,a,u,o,f,v,c,l,p,m,h;for(o=t-1,f=i-1,v=o+f,c=v*g0(v),u=o/v,n=.5/fLr(v,.5),a=!0;a===!0;)l=e(),m=u+l*n,m>=0&&m<=1&&(p=r(),h=o*g0(m/o),h+=f*g0((1-m)/f),h+=c+.5*l*l,h>=g0(p)&&(a=!1));return m}AM.exports=cLr});var IM=s((Gfe,TM)=>{"use strict";var z1=ir(),SM=U(),D1=R();function lLr(r,e,t){for(var i,n,a,u,o,f,v;;)if(u=r(),o=r(),f=SM(u,1/e),v=SM(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=D1(u)/e,n=D1(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),z1(i-D1(z1(i)+z1(n))))}TM.exports=lLr});var PM=s((Vfe,LM)=>{"use strict";var _M=bM(),pLr=NM(),gLr=OM(),mLr=IM();function dLr(r,e,t,i){var n,a;return t===i&&t>1.5?pLr(r,e,t):t>1&&i>1?gLr(r,e,t,i):t<1&&i<1?mLr(r,t,i):(n=_M(r,e,t),a=_M(r,e,i),n/(n+a))}LM.exports=dLr});var Y1=s((Ufe,UM)=>{"use strict";var fe=w(),m0=P(),RM=F(),FM=I(),MM=fr().isPrimitive,BM=L(),yi=O(),kM=S(),hLr=C(),jM=tt().factory,d0=z().factory,CM=E(),X1=$e(),J1=lr(),x1=Kr(),GM=Fn(),qLr=M(),ce=y(),yLr=mM(),VM=PM();function bLr(){var r,e,t,i,n,a,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=d0(n);else if(arguments.length===1){if(n=arguments[0],!FM(n))throw new TypeError(ce("invalid argument. Options argument must be an object. Value: `%s`.",n));if(yi(n,"copy")&&!MM(n.copy))throw new TypeError(ce("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(yi(n,"prng")){if(!BM(n.prng))throw new TypeError(ce("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(yi(n,"state")&&!x1(n.state))throw new TypeError(ce("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=GM({},n),n.copy===!1?o=!1:n.state&&(n.state=X1(n.state.length,n.state,1,new J1(n.state.length),1)),n.copy=!1,a=d0(n)}}else{if(t=arguments[0],i=arguments[1],f=yLr(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!FM(n))throw new TypeError(ce("invalid argument. Options argument must be an object. Value: `%s`.",n));if(yi(n,"copy")&&!MM(n.copy))throw new TypeError(ce("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(yi(n,"prng")){if(!BM(n.prng))throw new TypeError(ce("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(yi(n,"state")&&!x1(n.state))throw new TypeError(ce("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=GM({},n),n.copy===!1?o=!1:n.state&&(n.state=X1(n.state.length,n.state,1,new J1(n.state.length),1)),n.copy=!1,a=d0(n)}}else n={copy:!1},a=d0(n)}return n&&n.prng?e=jM({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=jM({state:r,copy:!1})),t===void 0?u=q:u=g,fe(u,"NAME","beta"),n&&n.prng?(fe(u,"seed",null),fe(u,"seedLength",null),RM(u,"state",kM(null),hLr),fe(u,"stateLength",null),fe(u,"byteLength",null),fe(u,"toJSON",kM(null)),fe(u,"PRNG",a)):(m0(u,"seed",v),m0(u,"seedLength",c),RM(u,"state",m,h),m0(u,"stateLength",l),m0(u,"byteLength",p),fe(u,"toJSON",d),fe(u,"PRNG",a),a=a.normalized),u;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function h(N){if(!x1(N))throw new TypeError(ce("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=X1(N.length,N,1,new J1(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=qLr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return VM(a,e,t,i)}function q(N,A){return CM(N)||CM(A)||N<=0||A<=0?NaN:VM(a,e,N,A)}}UM.exports=bLr});var WM=s((Hfe,HM)=>{"use strict";var wLr=Y1(),ELr=wLr();HM.exports=ELr});var XM=s((Wfe,DM)=>{"use strict";var NLr=w(),zM=WM(),ALr=Y1();NLr(zM,"factory",ALr);DM.exports=zM});var ZM=s((zfe,YM)=>{"use strict";var JM=W().isPrimitive,xM=y();function OLr(r,e){return JM(r)?JM(e)?null:new TypeError(xM("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(xM("invalid argument. First argument must be a positive number. Value: `%s`.",r))}YM.exports=OLr});var KM=s((Dfe,QM)=>{"use strict";var $M=R();function SLr(r,e,t,i,n){var a,u,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+$M(l)),c=r(),(c<o||$M(c)<f)&&(a=!1)}return 1/t*i*l}QM.exports=SLr});var r3=s((Xfe,vB)=>{"use strict";var le=w(),h0=P(),rB=F(),eB=I(),Z1=Kr(),tB=fr().isPrimitive,iB=L(),bi=O(),nB=S(),TLr=C(),aB=tt().factory,q0=z().factory,sB=E(),$1=V(),uB=U(),Q1=$e(),K1=lr(),ILr=M(),oB=Fn(),pe=y(),_Lr=ZM(),y0=KM(),b0=1/3;function LLr(){var r,e,t,i,n,a,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=q0(n);else if(arguments.length===1){if(n=arguments[0],!eB(n))throw new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!tB(n.copy))throw new TypeError(pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!iB(n.prng))throw new TypeError(pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!Z1(n.state))throw new TypeError(pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=oB({},n),n.copy===!1?o=!1:n.state&&(n.state=Q1(n.state.length,n.state,1,new K1(n.state.length),1)),n.copy=!1,a=q0(n)}}else{if(e=arguments[0],i=arguments[1],f=_Lr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!eB(n))throw new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!tB(n.copy))throw new TypeError(pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!iB(n.prng))throw new TypeError(pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!Z1(n.state))throw new TypeError(pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=oB({},n),n.copy===!1?o=!1:n.state&&(n.state=Q1(n.state.length,n.state,1,new K1(n.state.length),1)),n.copy=!1,a=q0(n)}}else n={copy:!1},a=q0(n)}return n&&n.prng?t=aB({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=aB({state:r,copy:!1})),e===void 0?u=k:(e>=1?(u=N,c=e-b0):(u=A,c=e+1-b0),v=1/$1(9*c)),le(u,"NAME","gamma"),n&&n.prng?(le(u,"seed",null),le(u,"seedLength",null),rB(u,"state",nB(null),TLr),le(u,"stateLength",null),le(u,"byteLength",null),le(u,"toJSON",nB(null)),le(u,"PRNG",a)):(h0(u,"seed",l),h0(u,"seedLength",p),rB(u,"state",d,g),h0(u,"stateLength",m),h0(u,"byteLength",h),le(u,"toJSON",q),le(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function g(T){if(!Z1(T))throw new TypeError(pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",T));o&&(T=Q1(T.length,T,1,new K1(T.length),1)),a.state=T}function q(){var T={};return T.type="PRNG",T.name=u.NAME,T.state=ILr(a.state),e===void 0?T.params=[]:T.params=[e,i],T}function N(){return y0(a,t,i,c,v)}function A(){return y0(a,t,i,c,v)*uB(a(),1/e)}function k(T,D){var vr,$;return sB(T)||sB(D)||T<=0||D<=0?NaN:T<1?($=T+1-b0,vr=1/$1(9*$),y0(a,t,D,$,vr)*uB(a(),1/T)):($=T-b0,vr=1/$1(9*$),y0(a,t,D,$,vr))}}vB.exports=LLr});var cB=s((Jfe,fB)=>{"use strict";var PLr=r3(),RLr=PLr();fB.exports=RLr});var wi=s((xfe,pB)=>{"use strict";var FLr=w(),lB=cB(),MLr=r3();FLr(lB,"factory",MLr);pB.exports=lB});var hB=s((Yfe,dB)=>{"use strict";var gB=W().isPrimitive,mB=y();function BLr(r,e){return gB(r)?gB(e)?null:new TypeError(mB("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(mB("invalid argument. First argument must be a positive number. Value: `%s`.",r))}dB.exports=BLr});var yB=s((Zfe,qB)=>{"use strict";function kLr(r,e,t){return r(e,1)/r(t,1)}qB.exports=kLr});var e3=s(($fe,SB)=>{"use strict";var it=w(),w0=P(),bB=F(),wB=I(),EB=S(),jLr=C(),E0=wi().factory,NB=E(),CLr=M(),AB=y(),GLr=hB(),OB=yB();function VLr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=E0();else if(arguments.length===1){if(i=arguments[0],!wB(i))throw new TypeError(AB("invalid argument. Options argument must be an object. Value: `%s`.",i));r=E0(i)}else{if(e=arguments[0],t=arguments[1],u=GLr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!wB(i))throw new TypeError(AB("invalid argument. Options argument must be an object. Value: `%s`.",i));r=E0(i)}else r=E0()}return e===void 0?a=d:a=h,n=r.PRNG,it(a,"NAME","betaprime"),i&&i.prng?(it(a,"seed",null),it(a,"seedLength",null),bB(a,"state",EB(null),jLr),it(a,"stateLength",null),it(a,"byteLength",null),it(a,"toJSON",EB(null))):(w0(a,"seed",o),w0(a,"seedLength",f),bB(a,"state",l,p),w0(a,"stateLength",v),w0(a,"byteLength",c),it(a,"toJSON",m)),it(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=CLr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return OB(r,e,t)}function d(g,q){return NB(g)||NB(q)||g<=0||q<=0?NaN:OB(r,g,q)}}SB.exports=VLr});var IB=s((Qfe,TB)=>{"use strict";var ULr=e3(),HLr=ULr();TB.exports=HLr});var PB=s((Kfe,LB)=>{"use strict";var WLr=w(),_B=IB(),zLr=e3();WLr(_B,"factory",zLr);LB.exports=_B});var FB=s((rce,RB)=>{"use strict";var DLr=J();function XLr(r){return DLr(r)===r&&r>0}RB.exports=XLr});var t3=s((ece,MB)=>{"use strict";var JLr=FB();MB.exports=JLr});var kB=s((tce,BB)=>{"use strict";function xLr(r){return r>=0&&r<=1}BB.exports=xLr});var CB=s((ice,jB)=>{"use strict";var YLr=kB();jB.exports=YLr});var UB=s((nce,VB)=>{"use strict";var ZLr=re().isPrimitive,$Lr=en().isPrimitive,GB=y();function QLr(r,e){return ZLr(r)?$Lr(e)?null:new TypeError(GB("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(GB("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}VB.exports=QLr});var WB=s((ace,HB)=>{"use strict";function KLr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}HB.exports=KLr});var DB=s((sce,zB)=>{"use strict";var rPr=E();function ePr(r){return r===0||rPr(r)?r:r<0?-1:1}zB.exports=ePr});var N0=s((uce,XB)=>{"use strict";var tPr=DB();XB.exports=tPr});var xB=s((oce,JB)=>{"use strict";var iPr=U(),nPr=1/12,aPr=1/360,sPr=1/1260;function uPr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=iPr(r,2),(nPr-(aPr-sPr/e)/e)/r}}JB.exports=uPr});var ZB=s((vce,YB)=>{"use strict";var i3=J(),oPr=N0(),vPr=V(),n3=X(),A0=R(),O0=xB(),fPr=1/6;function cPr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,k,T,D,vr,$,qu,zr,pr,Xn;for(D=i3((e+1)*t),v=e-D+1,vr=1-t,$=t/vr,c=(e+1)*$,u=e*t*vr,a=vPr(u),g=1.15+2.53*a,d=-.0873+.0248*g+.01*t,q=e*t+.5,i=(2.83+5.1/g)*a,h=.92-4.2/g,n=.86*h,A=(D+.5)*A0((D+1)/($*v)),A+=O0(D)+O0(e-D);;){if(pr=r(),pr<=n)return zr=pr/h-.43,$=zr*(2*d/(.5-n3(zr))+g)+q,i3($);if(pr>=h?zr=r()-.5:(zr=pr/h-.93,zr=oPr(zr)*.5-zr,pr=h*r()),l=.5-n3(zr),T=i3(zr*(2*d/l+g)+q),!(T<0||T>e))if(pr=pr*i/(d/(l*l)+g),p=n3(T-D),p>15){if(pr=A0(pr),o=p/u,f=(p/3+.625)*p,f+=fPr,f/=u,o*=f+.5,qu=-(p*p)/(2*u),pr<qu-o||pr<=qu+o&&(m=e-T+1,Xn=A+(e+1)*A0(v/m),Xn+=(T+.5)*A0(m*$/(T+1)),Xn+=-(O0(T)+O0(e-T)),pr<=Xn))return T}else{if(N=1,D<T)for(k=D;k<=T;k++)N*=c/k-$;else if(D>T)for(k=T;k<=D;k++)pr*=c/k-$;if(pr<=N)return T}}}YB.exports=cPr});var KB=s((fce,QB)=>{"use strict";var lPr=WB(),pPr=ZB();function $B(r,e,t){return t>.5?e-$B(r,e,1-t):e*t<10?lPr(r,e,t):pPr(r,e,t)}QB.exports=$B});var a3=s((cce,uk)=>{"use strict";var ge=w(),S0=P(),rk=F(),ek=I(),tk=L(),ik=O(),nk=S(),gPr=C(),ak=E(),mPr=t3(),dPr=CB(),T0=z().factory,hPr=M(),I0=y(),qPr=UB(),sk=KB();function yPr(){var r,e,t,i,n,a;if(arguments.length===0)e=T0();else if(arguments.length===1){if(r=arguments[0],!ek(r))throw new TypeError(I0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ik(r,"prng")){if(!tk(r.prng))throw new TypeError(I0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=T0(r)}else{if(n=arguments[0],a=arguments[1],i=qPr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!ek(r))throw new TypeError(I0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ik(r,"prng")){if(!tk(r.prng))throw new TypeError(I0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=T0(r)}else e=T0()}return n===void 0?t=h:t=m,ge(t,"NAME","binomial"),r&&r.prng?(ge(t,"seed",null),ge(t,"seedLength",null),rk(t,"state",nk(null),gPr),ge(t,"stateLength",null),ge(t,"byteLength",null),ge(t,"toJSON",nk(null)),ge(t,"PRNG",e)):(S0(t,"seed",u),S0(t,"seedLength",o),rk(t,"state",c,l),S0(t,"stateLength",f),S0(t,"byteLength",v),ge(t,"toJSON",p),ge(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=hPr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return sk(e,n,a)}function h(d,g){return ak(d)||ak(g)||!mPr(d)||!dPr(g)?NaN:sk(e,d,g)}}uk.exports=yPr});var vk=s((lce,ok)=>{"use strict";var bPr=a3(),wPr=bPr();ok.exports=wPr});var lk=s((pce,ck)=>{"use strict";var EPr=w(),fk=vk(),NPr=a3();EPr(fk,"factory",NPr);ck.exports=fk});var gk=s((gce,pk)=>{"use strict";var APr=V(),OPr=R(),SPr=jt(),TPr=kt(),IPr=Ye();function _Pr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=APr(-2*OPr(n)),o=IPr*a,t=u*TPr(o),e=!1,u*SPr(o)}return e=!0,t}}pk.exports=_Pr});var dk=s((mce,mk)=>{"use strict";var LPr=V(),PPr=R(),RPr=kt(),FPr=Pr(),MPr=RPr(FPr);function BPr(r){var e=LPr(-2*PPr(r));return e*MPr}mk.exports=BPr});var qk=s((dce,hk)=>{"use strict";var kPr=V(),jPr=R(),CPr=kt(),GPr=Ye();function VPr(r){var e=kPr(-2*jPr(r)),t=GPr*r;return e*CPr(t)}hk.exports=VPr});var s3=s((hce,Ek)=>{"use strict";var Br=w(),_0=P(),yk=F(),UPr=I(),HPr=L(),WPr=fr().isPrimitive,Mn=O(),zPr=Kr(),bk=z().factory,wk=S(),DPr=C(),XPr=M(),Bn=y(),JPr=gk(),xPr=dk(),YPr=qk();function ZPr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!UPr(r))throw new TypeError(Bn("invalid argument. Must provide an object. Value: `%s`.",r));if(Mn(r,"copy")&&(n.copy=r.copy,!WPr(r.copy)))throw new TypeError(Bn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Mn(r,"prng")){if(!HPr(r.prng))throw new TypeError(Bn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Mn(r,"state")){if(n.state=r.state,!zPr(r.state))throw new TypeError(Bn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Mn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Bn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=bk(n),e=i.normalized):n.seed=null:(i=bk(n),e=i.normalized),t=JPr(e),Br(t,"NAME","box-muller"),n.seed===null?(Br(t,"seed",null),Br(t,"seedLength",null)):(_0(t,"seed",a),_0(t,"seedLength",u)),r&&r.prng?(yk(t,"state",wk(null),DPr),Br(t,"stateLength",null),Br(t,"byteLength",null),Br(t,"toJSON",wk(null))):(yk(t,"state",v,c),_0(t,"stateLength",o),_0(t,"byteLength",f),Br(t,"toJSON",l)),Br(t,"PRNG",e),Mn(e,"MIN")?(Br(t,"MIN",xPr(e.MIN)),Br(t,"MAX",YPr(e.MIN))):(Br(t,"MIN",null),Br(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=XPr(i.state),p.params=[],p}}Ek.exports=ZPr});var Ak=s((qce,Nk)=>{"use strict";var $Pr=s3(),QPr=$Pr();Nk.exports=QPr});var Tk=s((yce,Sk)=>{"use strict";var KPr=w(),Ok=Ak(),rRr=s3();KPr(Ok,"factory",rRr);Sk.exports=Ok});var Lk=s((bce,_k)=>{"use strict";var eRr=j().isPrimitive,tRr=W().isPrimitive,Ik=y(),iRr=sr();function nRr(r,e){return!eRr(r)||iRr(r)?new TypeError(Ik("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):tRr(e)?null:new TypeError(Ik("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}_k.exports=nRr});var Rk=s((wce,Pk)=>{"use strict";function aRr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}Pk.exports=aRr});var Mk=s((Ece,Fk)=>{"use strict";function sRr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}Fk.exports=sRr});var jk=s((Nce,kk)=>{"use strict";var uRr=er(),Bk=te(),oRr=Rk(),vRr=Mk(),fRr=.7853981633974483,cRr=3061616997868383e-32,lRr=.3333333333333341,pRr=2147483647;function gRr(r,e,t){var i,n,a,u,o,f,v,c,l;return i=uRr(r),n=i&pRr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=fRr-r,c=cRr-e,r=l+c,e=0),l=r*r,c=l*l,u=oRr(c),v=l*vRr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=lRr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=Bk(c,0),v=u-(l-r),a=-1/c,f=Bk(a,0),o=1+f*l,f+a*(o+f*v))}kk.exports=gRr});var Gk=s((Ace,Ck)=>{"use strict";var mRr=jk();Ck.exports=mRr});var Hk=s((Oce,Uk)=>{"use strict";var dRr=er(),Vk=Gk(),hRr=yn(),u3=[0,0],qRr=2147483647,yRr=1072243195,bRr=2146435072,wRr=1044381696;function ERr(r){var e,t;return e=dRr(r),e&=qRr,e<=yRr?e<wRr?r:Vk(r,0,1):e>=bRr?NaN:(t=hRr(r,u3),Vk(u3[0],u3[1],1-((t&1)<<1)))}Uk.exports=ERr});var o3=s((Sce,Wk)=>{"use strict";var NRr=Hk();Wk.exports=NRr});var Dk=s((Tce,zk)=>{"use strict";var ARr=o3(),ORr=Pr();function SRr(r,e,t){return e+t*ARr(ORr*(r()-.5))}zk.exports=SRr});var v3=s((Ice,Kk)=>{"use strict";var nt=w(),L0=P(),Xk=F(),Jk=I(),xk=L(),Yk=O(),Zk=S(),TRr=C(),$k=E(),Ei=tt().factory,IRr=M(),P0=y(),_Rr=Lk(),Qk=Dk();function LRr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ei();else if(arguments.length===1){if(t=arguments[0],!Jk(t))throw new TypeError(P0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Yk(t,"prng")){if(!xk(t.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ei({prng:t.prng})}else e=Ei(t)}else{if(u=arguments[0],r=arguments[1],a=_Rr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!Jk(t))throw new TypeError(P0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Yk(t,"prng")){if(!xk(t.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ei({prng:t.prng})}else e=Ei(t)}else e=Ei()}return u===void 0?n=d:n=h,i=e.PRNG,nt(n,"NAME","cauchy"),t&&t.prng?(nt(n,"seed",null),nt(n,"seedLength",null),Xk(n,"state",Zk(null),TRr),nt(n,"stateLength",null),nt(n,"byteLength",null),nt(n,"toJSON",Zk(null))):(L0(n,"seed",o),L0(n,"seedLength",f),Xk(n,"state",l,p),L0(n,"stateLength",v),L0(n,"byteLength",c),nt(n,"toJSON",m)),nt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=IRr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return Qk(e,u,r)}function d(g,q){return $k(g)||$k(q)||q<=0?NaN:Qk(e,g,q)}}Kk.exports=LRr});var ej=s((_ce,rj)=>{"use strict";var PRr=v3(),RRr=PRr();rj.exports=RRr});var nj=s((Lce,ij)=>{"use strict";var FRr=w(),tj=ej(),MRr=v3();FRr(tj,"factory",MRr);ij.exports=tj});var f3=s((Pce,fj)=>{"use strict";var at=w(),R0=P(),aj=F(),BRr=W().isPrimitive,sj=I(),uj=L(),oj=O(),vj=S(),kRr=C(),jRr=E(),Ni=wi().factory,CRr=M(),F0=y();function GRr(){var r,e,t,i,n;if(arguments.length===0)r=Ni();else if(arguments.length===1&&sj(arguments[0]))if(t=arguments[0],oj(t,"prng")){if(!uj(t.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ni({prng:t.prng})}else r=Ni(t);else{if(n=arguments[0],!BRr(n))throw new TypeError(F0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!sj(t))throw new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(oj(t,"prng")){if(!uj(t.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ni(n/2,.5,{prng:t.prng})}else r=Ni(n/2,.5,t)}else r=Ni(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,at(i,"NAME","chisquare"),t&&t.prng?(at(i,"seed",null),at(i,"seedLength",null),aj(i,"state",vj(null),kRr),at(i,"stateLength",null),at(i,"byteLength",null),at(i,"toJSON",vj(null))):(R0(i,"seed",a),R0(i,"seedLength",u),aj(i,"state",v,c),R0(i,"stateLength",o),R0(i,"byteLength",f),at(i,"toJSON",l)),at(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=CRr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function m(h){return jRr(h)||h<=0?NaN:r(h/2,.5)}}fj.exports=GRr});var lj=s((Rce,cj)=>{"use strict";var VRr=f3(),URr=VRr();cj.exports=URr});var kn=s((Fce,gj)=>{"use strict";var HRr=w(),pj=lj(),WRr=f3();HRr(pj,"factory",WRr);gj.exports=pj});var c3=s((Mce,wj)=>{"use strict";var st=w(),M0=P(),mj=F(),zRr=W().isPrimitive,dj=I(),hj=L(),qj=O(),yj=S(),DRr=C(),XRr=E(),Ai=kn().factory,JRr=M(),bj=V(),B0=y();function xRr(){var r,e,t,i,n;if(arguments.length===0)r=Ai();else if(arguments.length===1&&dj(arguments[0]))if(t=arguments[0],qj(t,"prng")){if(!hj(t.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ai({prng:t.prng})}else r=Ai(t);else{if(n=arguments[0],!zRr(n))throw new TypeError(B0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!dj(t))throw new TypeError(B0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(qj(t,"prng")){if(!hj(t.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ai(n,{prng:t.prng})}else r=Ai(n,t)}else r=Ai(n)}return n===void 0?i=m:i=p,e=r.PRNG,st(i,"NAME","chi"),t&&t.prng?(st(i,"seed",null),st(i,"seedLength",null),mj(i,"state",yj(null),DRr),st(i,"stateLength",null),st(i,"byteLength",null),st(i,"toJSON",yj(null))):(M0(i,"seed",a),M0(i,"seedLength",u),mj(i,"state",v,c),M0(i,"stateLength",o),M0(i,"byteLength",f),st(i,"toJSON",l)),st(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=JRr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return bj(r())}function m(h){return XRr(h)||h<=0?NaN:bj(r(h))}}wj.exports=xRr});var Nj=s((Bce,Ej)=>{"use strict";var YRr=c3(),ZRr=YRr();Ej.exports=ZRr});var Sj=s((kce,Oj)=>{"use strict";var $Rr=w(),Aj=Nj(),QRr=c3();$Rr(Aj,"factory",QRr);Oj.exports=Aj});var _j=s((jce,Ij)=>{"use strict";var KRr=j().isPrimitive,rFr=W().isPrimitive,Tj=y(),eFr=sr();function tFr(r,e){return!KRr(r)||eFr(r)?new TypeError(Tj("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):rFr(e)?null:new TypeError(Tj("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Ij.exports=tFr});var Pj=s((Cce,Lj)=>{"use strict";var l3=E(),iFr=In(),nFr=Pr();function aFr(r,e,t){var i;return l3(r)||l3(e)||l3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+iFr(i)/nFr)/2)}Lj.exports=aFr});var Mj=s((Gce,Fj)=>{"use strict";var Rj=E();function sFr(r,e){return Rj(r)||Rj(e)?NaN:r<e?0:1}Fj.exports=sFr});var jj=s((Vce,kj)=>{"use strict";var uFr=S(),Bj=E();function oFr(r){if(Bj(r))return uFr(NaN);return e;function e(t){return Bj(t)?NaN:t<r?0:1}}kj.exports=oFr});var k0=s((Uce,Gj)=>{"use strict";var vFr=w(),Cj=Mj(),fFr=jj();vFr(Cj,"factory",fFr);Gj.exports=Cj});var Uj=s((Hce,Vj)=>{"use strict";var cFr=S(),lFr=k0().factory,p3=E(),pFr=In(),gFr=Pr();function mFr(r,e){if(p3(r)||p3(e)||e<0)return cFr(NaN);if(e===0)return lFr(r);return t;function t(i){var n;return p3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+pFr(n)/gFr)/2)}}Vj.exports=mFr});var zj=s((Wce,Wj)=>{"use strict";var dFr=w(),Hj=Pj(),hFr=Uj();dFr(Hj,"factory",hFr);Wj.exports=Hj});var g3=s((zce,Dj)=>{"use strict";var qFr=zj(),yFr=1e4,bFr=1e-12;function wFr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<yFr;){if(u=(i+n)/2,n-i<bFr)return u;a=qFr(u,e,t),r>a?i=u:n=u,o+=1}return u}Dj.exports=wFr});var Jj=s((Dce,Xj)=>{"use strict";var m3=E(),EFr=g3();function NFr(r,e,t){return m3(e)||m3(t)||m3(r)||t<0||r<0||r>1?NaN:t===0?e:EFr(r,e,t)}Xj.exports=NFr});var Yj=s((Xce,xj)=>{"use strict";var AFr=E();function OFr(r,e){return AFr(r)||r<0||r>1?NaN:e}xj.exports=OFr});var Qj=s((Jce,$j)=>{"use strict";var SFr=S(),Zj=E();function TFr(r){if(Zj(r))return SFr(NaN);return e;function e(t){return Zj(t)||t<0||t>1?NaN:r}}$j.exports=TFr});var d3=s((xce,rC)=>{"use strict";var IFr=w(),Kj=Yj(),_Fr=Qj();IFr(Kj,"factory",_Fr);rC.exports=Kj});var tC=s((Yce,eC)=>{"use strict";var LFr=S(),PFr=d3().factory,h3=E(),RFr=g3();function FFr(r,e){if(h3(r)||h3(e)||e<0)return LFr(NaN);if(e===0)return PFr(r);return t;function t(i){return h3(i)||i<0||i>1?NaN:RFr(i,r,e)}}eC.exports=FFr});var aC=s((Zce,nC)=>{"use strict";var MFr=w(),iC=Jj(),BFr=tC();MFr(iC,"factory",BFr);nC.exports=iC});var uC=s(($ce,sC)=>{"use strict";var kFr=aC();function jFr(r,e,t){return kFr(r(),e,t)}sC.exports=jFr});var q3=s((Qce,mC)=>{"use strict";var me=w(),j0=P(),oC=F(),vC=I(),fC=L(),cC=O(),lC=S(),CFr=C(),C0=z().factory,pC=E(),GFr=M(),G0=y(),VFr=_j(),gC=uC();function UFr(){var r,e,t,i,n,a;if(arguments.length===0)e=C0();else if(arguments.length===1){if(r=arguments[0],!vC(r))throw new TypeError(G0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(cC(r,"prng")){if(!fC(r.prng))throw new TypeError(G0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=C0(r)}else{if(n=arguments[0],a=arguments[1],i=VFr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!vC(r))throw new TypeError(G0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(cC(r,"prng")){if(!fC(r.prng))throw new TypeError(G0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=C0(r)}else e=C0()}return n===void 0?t=h:t=m,me(t,"NAME","cosine"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),oC(t,"state",lC(null),CFr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",lC(null)),me(t,"PRNG",e)):(j0(t,"seed",u),j0(t,"seedLength",o),oC(t,"state",c,l),j0(t,"stateLength",f),j0(t,"byteLength",v),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=GFr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return gC(e,n,a)}function h(d,g){return pC(d)||pC(g)||g<=0?NaN:gC(e,d,g)}}mC.exports=UFr});var hC=s((Kce,dC)=>{"use strict";var HFr=q3(),WFr=HFr();dC.exports=WFr});var bC=s((rle,yC)=>{"use strict";var zFr=w(),qC=hC(),DFr=q3();zFr(qC,"factory",DFr);yC.exports=qC});var AC=s((ele,NC)=>{"use strict";var wC=Cr().isPrimitive,y3=y(),EC=sr();function XFr(r,e){return!wC(r)||EC(r)?new TypeError(y3("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!wC(e)||EC(e)?new TypeError(y3("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(y3("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}NC.exports=XFr});var TC=s((tle,SC)=>{"use strict";var b3=gi(),Oi=J();function OC(r,e,t){var i,n,a,u,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(u=0;;){for(a===b3?(u=Oi(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Oi((a+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=OC(r,0,Oi(a/f)),!(l>b3/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===b3?(o=Oi(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Oi((n+1)/(a+1));;)if(i=r()-v,i=Oi(i/o),i<=a)return i+e}SC.exports=OC});var w3=s((ile,BC)=>{"use strict";var de=w(),V0=P(),IC=F(),_C=I(),LC=L(),PC=O(),RC=S(),JFr=C(),U0=z().factory,FC=E(),Si=Tr(),xFr=M(),ut=y(),YFr=AC(),MC=TC();function ZFr(){var r,e,t,i,n,a;if(arguments.length===0)e=U0();else if(arguments.length===1){if(r=arguments[0],!_C(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PC(r,"prng")){if(!LC(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Si(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Si(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=U0(r)}else{if(n=arguments[0],a=arguments[1],i=YFr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!_C(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PC(r,"prng")){if(!LC(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Si(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Si(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=U0(r)}else e=U0()}return n===void 0?t=h:t=m,de(t,"NAME","discrete-uniform"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),IC(t,"state",RC(null),JFr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",RC(null)),de(t,"PRNG",e)):(V0(t,"seed",u),V0(t,"seedLength",o),IC(t,"state",c,l),V0(t,"stateLength",f),V0(t,"byteLength",v),de(t,"toJSON",p),de(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=xFr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return MC(e,n,a)}function h(d,g){return FC(d)||FC(g)||!Si(d)||!Si(g)||d>g?NaN:MC(e,d,g)}}BC.exports=ZFr});var jC=s((nle,kC)=>{"use strict";var $Fr=w3(),QFr=$Fr();kC.exports=QFr});var VC=s((ale,GC)=>{"use strict";var KFr=w(),CC=jC(),rMr=w3();KFr(CC,"factory",rMr);GC.exports=CC});var WC=s((sle,HC)=>{"use strict";var eMr=W().isPrimitive,tMr=re().isPrimitive,UC=y();function iMr(r,e){return tMr(r)?eMr(e)?null:new TypeError(UC("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(UC("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}HC.exports=iMr});var DC=s((ule,zC)=>{"use strict";var nMr=R();function aMr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*nMr(i)}zC.exports=aMr});var E3=s((ole,KC)=>{"use strict";var he=w(),H0=P(),XC=F(),JC=I(),xC=L(),YC=O(),ZC=S(),sMr=C(),W0=z().factory,$C=E(),uMr=t3(),oMr=M(),z0=y(),vMr=WC(),QC=DC();function fMr(){var r,e,t,i,n,a;if(arguments.length===0)e=W0();else if(arguments.length===1){if(t=arguments[0],!JC(t))throw new TypeError(z0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(YC(t,"prng")){if(!xC(t.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=W0(t)}else{if(a=arguments[0],r=arguments[1],n=vMr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!JC(t))throw new TypeError(z0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(YC(t,"prng")){if(!xC(t.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=W0(t)}else e=W0()}return a===void 0?i=h:i=m,he(i,"NAME","erlang"),t&&t.prng?(he(i,"seed",null),he(i,"seedLength",null),XC(i,"state",ZC(null),sMr),he(i,"stateLength",null),he(i,"byteLength",null),he(i,"toJSON",ZC(null)),he(i,"PRNG",e)):(H0(i,"seed",u),H0(i,"seedLength",o),XC(i,"state",c,l),H0(i,"stateLength",f),H0(i,"byteLength",v),he(i,"toJSON",p),he(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=oMr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return QC(e,a,r)}function h(d,g){return $C(d)||$C(g)||!uMr(d)||g<=0?NaN:QC(e,d,g)}}KC.exports=fMr});var eG=s((vle,rG)=>{"use strict";var cMr=E3(),lMr=cMr();rG.exports=lMr});var nG=s((fle,iG)=>{"use strict";var pMr=w(),tG=eG(),gMr=E3();pMr(tG,"factory",gMr);iG.exports=tG});var sG=s((cle,aG)=>{"use strict";var mMr=R();function dMr(r,e){return-mMr(1-r())/e}aG.exports=dMr});var N3=s((lle,pG)=>{"use strict";var qe=w(),D0=P(),uG=F(),hMr=W().isPrimitive,oG=I(),vG=L(),fG=O(),cG=S(),qMr=C(),X0=z().factory,yMr=E(),bMr=M(),J0=y(),lG=sG();function wMr(){var r,e,t,i;if(arguments.length===0)t=X0();else if(arguments.length===1&&oG(arguments[0]))if(e=arguments[0],fG(e,"prng")){if(!vG(e.prng))throw new TypeError(J0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=X0(e);else{if(r=arguments[0],!hMr(r))throw new TypeError(J0("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!oG(e))throw new TypeError(J0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(fG(e,"prng")){if(!vG(e.prng))throw new TypeError(J0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=X0(e)}else t=X0()}return r===void 0?i=p:i=l,qe(i,"NAME","exponential"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),uG(i,"state",cG(null),qMr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",cG(null)),qe(i,"PRNG",t)):(D0(i,"seed",n),D0(i,"seedLength",a),uG(i,"state",f,v),D0(i,"stateLength",u),D0(i,"byteLength",o),qe(i,"toJSON",c),qe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=bMr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return lG(t,r)}function p(m){return yMr(m)||m<=0?NaN:lG(t,m)}}pG.exports=wMr});var mG=s((ple,gG)=>{"use strict";var EMr=N3(),NMr=EMr();gG.exports=NMr});var qG=s((gle,hG)=>{"use strict";var AMr=w(),dG=mG(),OMr=N3();AMr(dG,"factory",OMr);hG.exports=dG});var EG=s((mle,wG)=>{"use strict";var yG=W().isPrimitive,bG=y();function SMr(r,e){return yG(r)?yG(e)?null:new TypeError(bG("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(bG("invalid argument. First argument must be a positive number. Value: `%s`.",r))}wG.exports=SMr});var AG=s((dle,NG)=>{"use strict";function TMr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}NG.exports=TMr});var A3=s((hle,RG)=>{"use strict";var ot=w(),x0=P(),OG=F(),SG=I(),TG=L(),IG=O(),_G=S(),IMr=C(),Ti=kn().factory,LG=E(),_Mr=M(),Y0=y(),LMr=EG(),PG=AG();function PMr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Ti();else if(arguments.length===1){if(e=arguments[0],!SG(e))throw new TypeError(Y0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(IG(e,"prng")){if(!TG(e.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ti({prng:e.prng})}else r=Ti(e)}else{if(a=arguments[0],u=arguments[1],n=LMr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!SG(e))throw new TypeError(Y0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(IG(e,"prng")){if(!TG(e.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ti({prng:e.prng})}else r=Ti(e)}else r=Ti()}return a===void 0?i=d:i=h,t=r.PRNG,ot(i,"NAME","f"),e&&e.prng?(ot(i,"seed",null),ot(i,"seedLength",null),OG(i,"state",_G(null),IMr),ot(i,"stateLength",null),ot(i,"byteLength",null),ot(i,"toJSON",_G(null))):(x0(i,"seed",o),x0(i,"seedLength",f),OG(i,"state",l,p),x0(i,"stateLength",v),x0(i,"byteLength",c),ot(i,"toJSON",m)),ot(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=_Mr(t.state),a===void 0?g.params=[]:g.params=[a,u],g}function h(){return PG(r,a,u)}function d(g,q){return LG(g)||LG(q)||g<=0||q<=0?NaN:PG(r,g,q)}}RG.exports=PMr});var MG=s((qle,FG)=>{"use strict";var RMr=A3(),FMr=RMr();FG.exports=FMr});var jG=s((yle,kG)=>{"use strict";var MMr=w(),BG=MG(),BMr=A3();MMr(BG,"factory",BMr);kG.exports=BG});var VG=s((ble,GG)=>{"use strict";var CG=W().isPrimitive,kMr=j().isPrimitive,O3=sr(),S3=y();function jMr(r,e,t){return!CG(r)||O3(r)?new TypeError(S3("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!CG(e)||O3(e)?new TypeError(S3("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!kMr(t)||O3(t)?new TypeError(S3("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}GG.exports=jMr});var HG=s((wle,UG)=>{"use strict";var CMr=U(),GMr=R();function VMr(r,e,t,i){return i+t*CMr(-GMr(r()),-1/e)}UG.exports=VMr});var I3=s((Ele,YG)=>{"use strict";var ye=w(),Z0=P(),WG=F(),zG=I(),DG=L(),XG=O(),JG=S(),UMr=C(),$0=z().factory,T3=E(),HMr=M(),Q0=y(),WMr=VG(),xG=HG();function zMr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=$0();else if(arguments.length===1){if(e=arguments[0],!zG(e))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(XG(e,"prng")){if(!DG(e.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=$0(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=WMr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!zG(e))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(XG(e,"prng")){if(!DG(e.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=$0(e)}else t=$0()}return r===void 0?i=d:i=h,ye(i,"NAME","frechet"),e&&e.prng?(ye(i,"seed",null),ye(i,"seedLength",null),WG(i,"state",JG(null),UMr),ye(i,"stateLength",null),ye(i,"byteLength",null),ye(i,"toJSON",JG(null)),ye(i,"PRNG",t)):(Z0(i,"seed",o),Z0(i,"seedLength",f),WG(i,"state",l,p),Z0(i,"stateLength",v),Z0(i,"byteLength",c),ye(i,"toJSON",m),ye(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=HMr(t.state),r===void 0?g.params=[]:g.params=[r,a,u],g}function h(){return xG(t,r,a,u)}function d(g,q,N){return T3(g)||T3(q)||T3(N)||g<=0||q<=0?NaN:xG(t,g,q,N)}}YG.exports=zMr});var $G=s((Nle,ZG)=>{"use strict";var DMr=I3(),XMr=DMr();ZG.exports=XMr});var rV=s((Ale,KG)=>{"use strict";var JMr=w(),QG=$G(),xMr=I3();JMr(QG,"factory",xMr);KG.exports=QG});var iV=s((Ole,tV)=>{"use strict";var YMr=J(),eV=R();function ZMr(r,e){var t=r();return t===0&&(t=r()),YMr(eV(t)/eV(1-e))}tV.exports=ZMr});var _3=s((Sle,fV)=>{"use strict";var be=w(),K0=P(),nV=F(),aV=I(),$Mr=en().isPrimitive,sV=L(),uV=O(),oV=S(),QMr=C(),rs=z().factory,KMr=E(),rBr=M(),es=y(),vV=iV();function eBr(){var r,e,t,i;if(arguments.length===0)e=rs();else if(arguments.length===1&&aV(arguments[0]))if(r=arguments[0],uV(r,"prng")){if(!sV(r.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=rs(r);else{if(i=arguments[0],!$Mr(i))throw new TypeError(es("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!aV(r))throw new TypeError(es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uV(r,"prng")){if(!sV(r.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=rs(r)}else e=rs()}return i===void 0?t=p:t=l,be(t,"NAME","geometric"),r&&r.prng?(be(t,"seed",null),be(t,"seedLength",null),nV(t,"state",oV(null),QMr),be(t,"stateLength",null),be(t,"byteLength",null),be(t,"toJSON",oV(null)),be(t,"PRNG",e)):(K0(t,"seed",n),K0(t,"seedLength",a),nV(t,"state",f,v),K0(t,"stateLength",u),K0(t,"byteLength",o),be(t,"toJSON",c),be(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=rBr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return vV(e,i)}function p(m){return KMr(m)||m<0||m>1?NaN:vV(e,m)}}fV.exports=eBr});var lV=s((Tle,cV)=>{"use strict";var tBr=_3(),iBr=tBr();cV.exports=iBr});var mV=s((Ile,gV)=>{"use strict";var nBr=w(),pV=lV(),aBr=_3();nBr(pV,"factory",aBr);gV.exports=pV});var qV=s((_le,hV)=>{"use strict";var sBr=j().isPrimitive,uBr=W().isPrimitive,dV=y(),oBr=sr();function vBr(r,e){return!sBr(r)||oBr(r)?new TypeError(dV("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):uBr(e)?null:new TypeError(dV("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}hV.exports=vBr});var wV=s((Lle,bV)=>{"use strict";var yV=R();function fBr(r,e,t){return e-t*yV(-yV(r()))}bV.exports=fBr});var L3=s((Ple,_V)=>{"use strict";var we=w(),ts=P(),EV=F(),NV=I(),AV=L(),OV=O(),SV=S(),cBr=C(),is=z().factory,TV=E(),lBr=M(),ns=y(),pBr=qV(),IV=wV();function gBr(){var r,e,t,i,n,a;if(arguments.length===0)t=is();else if(arguments.length===1){if(e=arguments[0],!NV(e))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",e));if(OV(e,"prng")){if(!AV(e.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=is(e)}else{if(a=arguments[0],r=arguments[1],n=pBr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!NV(e))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",e));if(OV(e,"prng")){if(!AV(e.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=is(e)}else t=is()}return a===void 0?i=h:i=m,we(i,"NAME","gumbel"),e&&e.prng?(we(i,"seed",null),we(i,"seedLength",null),EV(i,"state",SV(null),cBr),we(i,"stateLength",null),we(i,"byteLength",null),we(i,"toJSON",SV(null)),we(i,"PRNG",t)):(ts(i,"seed",u),ts(i,"seedLength",o),EV(i,"state",c,l),ts(i,"stateLength",f),ts(i,"byteLength",v),we(i,"toJSON",p),we(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=lBr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return IV(t,a,r)}function h(d,g){return TV(d)||TV(g)||g<=0?NaN:IV(t,d,g)}}_V.exports=gBr});var PV=s((Rle,LV)=>{"use strict";var mBr=L3(),dBr=mBr();LV.exports=dBr});var MV=s((Fle,FV)=>{"use strict";var hBr=w(),RV=PV(),qBr=L3();hBr(RV,"factory",qBr);FV.exports=RV});var kV=s((Mle,BV)=>{"use strict";var yBr=J();function bBr(r){return yBr(r)===r&&r>=0}BV.exports=bBr});var CV=s((Ble,jV)=>{"use strict";var wBr=kV();jV.exports=wBr});var VV=s((kle,GV)=>{"use strict";var P3=Ge().isPrimitive,jn=y();function EBr(r,e,t){return P3(r)?P3(e)?P3(t)?t>r?new RangeError(jn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(jn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(jn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(jn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(jn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}GV.exports=EBr});var UV=s((jle,NBr)=>{NBr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var WV=s((Cle,HV)=>{"use strict";var ABr=E(),OBr=Tr(),SBr=mi(),TBr=_(),IBr=UV(),_Br=170;function LBr(r){return ABr(r)?NaN:OBr(r)?r<0?NaN:r<=_Br?IBr[r]:TBr:SBr(r+1)}HV.exports=LBr});var DV=s((Gle,zV)=>{"use strict";var PBr=WV();zV.exports=PBr});var JV=s((Vle,XV)=>{"use strict";var vt=DV();function RBr(r,e,t,i){var n,a,u;for(i<t?(n=vt(t)*vt(e+t-i)/(vt(e+t)*vt(t-i)),u=0):(n=vt(e)*vt(i)/(vt(i-t)*vt(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}XV.exports=RBr});var YV=s((Ule,xV)=>{"use strict";var as=JV();function FBr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=as(r,n,a,u),t-o):(a=t,n=e-t,o=as(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=as(r,n,a,u),o):(n=e-t,a=t,o=as(r,n,a,u),i-o))}xV.exports=FBr});var F3=s((Hle,iU)=>{"use strict";var Ee=w(),ss=P(),ZV=F(),$V=I(),QV=L(),KV=O(),rU=S(),MBr=C(),us=z().factory,R3=CV(),eU=_(),BBr=M(),os=y(),kBr=VV(),tU=YV();function jBr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=us();else if(arguments.length===1){if(r=arguments[0],!$V(r))throw new TypeError(os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KV(r,"prng")){if(!QV(r.prng))throw new TypeError(os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=us(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=kBr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!$V(r))throw new TypeError(os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KV(r,"prng")){if(!QV(r.prng))throw new TypeError(os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=us(r)}else e=us()}return n===void 0?t=d:t=h,Ee(t,"NAME","hypergeometric"),r&&r.prng?(Ee(t,"seed",null),Ee(t,"seedLength",null),ZV(t,"state",rU(null),MBr),Ee(t,"stateLength",null),Ee(t,"byteLength",null),Ee(t,"toJSON",rU(null)),Ee(t,"PRNG",e)):(ss(t,"seed",o),ss(t,"seedLength",f),ZV(t,"state",l,p),ss(t,"stateLength",v),ss(t,"byteLength",c),Ee(t,"toJSON",m),Ee(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=BBr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return tU(e,n,a,u)}function d(g,q,N){return g===eU||q===eU||!R3(g)||!R3(q)||!R3(N)||N>g?NaN:tU(e,g,q,N)}}iU.exports=jBr});var aU=s((Wle,nU)=>{"use strict";var CBr=F3(),GBr=CBr();nU.exports=GBr});var oU=s((zle,uU)=>{"use strict";var VBr=w(),sU=aU(),UBr=F3();VBr(sU,"factory",UBr);uU.exports=sU});var lU=s((Dle,cU)=>{"use strict";var vU=W().isPrimitive,fU=y();function HBr(r,e){return vU(r)?vU(e)?null:new TypeError(fU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(fU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}cU.exports=HBr});var M3=s((Xle,yU)=>{"use strict";var ft=w(),vs=P(),pU=F(),gU=I(),mU=L(),dU=O(),hU=S(),WBr=C(),Ii=wi().factory,qU=E(),zBr=M(),fs=y(),DBr=lU();function XBr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Ii();else if(arguments.length===1){if(i=arguments[0],!gU(i))throw new TypeError(fs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(dU(i,"prng")){if(!mU(i.prng))throw new TypeError(fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Ii({prng:i.prng})}else r=Ii(i)}else{if(e=arguments[0],t=arguments[1],u=DBr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!gU(i))throw new TypeError(fs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(dU(i,"prng")){if(!mU(i.prng))throw new TypeError(fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Ii(e,t,{prng:i.prng})}else r=Ii(e,t,i)}else r=Ii(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,ft(a,"NAME","invgamma"),i&&i.prng?(ft(a,"seed",null),ft(a,"seedLength",null),pU(a,"state",hU(null),WBr),ft(a,"stateLength",null),ft(a,"byteLength",null),ft(a,"toJSON",hU(null))):(vs(a,"seed",o),vs(a,"seedLength",f),pU(a,"state",l,p),vs(a,"stateLength",v),vs(a,"byteLength",c),ft(a,"toJSON",m)),ft(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=zBr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return 1/r()}function d(g,q){return qU(g)||qU(q)||g<=0||q<=0?NaN:1/r(g,q)}}yU.exports=XBr});var wU=s((Jle,bU)=>{"use strict";var JBr=M3(),xBr=JBr();bU.exports=xBr});var AU=s((xle,NU)=>{"use strict";var YBr=w(),EU=wU(),ZBr=M3();YBr(EU,"factory",ZBr);NU.exports=EU});var IU=s((Yle,TU)=>{"use strict";var OU=W().isPrimitive,SU=y();function $Br(r,e){return OU(r)?OU(e)?null:new TypeError(SU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(SU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}TU.exports=$Br});var PU=s((Zle,LU)=>{"use strict";var _U=U();function QBr(r,e,t){var i=r();return _U(1-_U(1-i,1/t),1/e)}LU.exports=QBr});var B3=s(($le,GU)=>{"use strict";var Ne=w(),cs=P(),RU=F(),FU=I(),MU=L(),BU=O(),kU=S(),KBr=C(),ls=z().factory,jU=E(),rkr=M(),ps=y(),ekr=IU(),CU=PU();function tkr(){var r,e,t,i,n,a;if(arguments.length===0)e=ls();else if(arguments.length===1){if(r=arguments[0],!FU(r))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BU(r,"prng")){if(!MU(r.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ls(r)}else{if(n=arguments[0],a=arguments[1],i=ekr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!FU(r))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BU(r,"prng")){if(!MU(r.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ls(r)}else e=ls()}return n===void 0?t=h:t=m,Ne(t,"NAME","kumaraswamy"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),RU(t,"state",kU(null),KBr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",kU(null)),Ne(t,"PRNG",e)):(cs(t,"seed",u),cs(t,"seedLength",o),RU(t,"state",c,l),cs(t,"stateLength",f),cs(t,"byteLength",v),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=rkr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return CU(e,n,a)}function h(d,g){return jU(d)||jU(g)||d<=0||g<=0?NaN:CU(e,d,g)}}GU.exports=tkr});var UU=s((Qle,VU)=>{"use strict";var ikr=B3(),nkr=ikr();VU.exports=nkr});var zU=s((Kle,WU)=>{"use strict";var akr=w(),HU=UU(),skr=B3();akr(HU,"factory",skr);WU.exports=HU});var JU=s((r4e,XU)=>{"use strict";var ukr=j().isPrimitive,okr=W().isPrimitive,DU=y(),vkr=sr();function fkr(r,e){return!ukr(r)||vkr(r)?new TypeError(DU("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):okr(e)?null:new TypeError(DU("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}XU.exports=fkr});var YU=s((e4e,xU)=>{"use strict";var ckr=N0(),lkr=X(),pkr=R();function gkr(r,e,t){var i=r()-.5;return e-t*ckr(i)*pkr(1-2*lkr(i))}xU.exports=gkr});var k3=s((t4e,iH)=>{"use strict";var Ae=w(),gs=P(),ZU=F(),$U=I(),QU=L(),KU=O(),rH=S(),mkr=C(),ms=z().factory,eH=E(),dkr=M(),ds=y(),hkr=JU(),tH=YU();function qkr(){var r,e,t,i,n,a;if(arguments.length===0)e=ms();else if(arguments.length===1){if(r=arguments[0],!$U(r))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KU(r,"prng")){if(!QU(r.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ms(r)}else{if(n=arguments[0],a=arguments[1],i=hkr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!$U(r))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KU(r,"prng")){if(!QU(r.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ms(r)}else e=ms()}return n===void 0?t=h:t=m,Ae(t,"NAME","laplace"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),ZU(t,"state",rH(null),mkr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",rH(null)),Ae(t,"PRNG",e)):(gs(t,"seed",u),gs(t,"seedLength",o),ZU(t,"state",c,l),gs(t,"stateLength",f),gs(t,"byteLength",v),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=dkr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return tH(e,n,a)}function h(d,g){return eH(d)||eH(g)||g<=0?NaN:tH(e,d,g)}}iH.exports=qkr});var aH=s((i4e,nH)=>{"use strict";var ykr=k3(),bkr=ykr();nH.exports=bkr});var oH=s((n4e,uH)=>{"use strict";var wkr=w(),sH=aH(),Ekr=k3();wkr(sH,"factory",Ekr);uH.exports=sH});var cH=s((a4e,fH)=>{"use strict";var Nkr=j().isPrimitive,Akr=W().isPrimitive,vH=y(),Okr=sr();function Skr(r,e){return!Nkr(r)||Okr(r)?new TypeError(vH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Akr(e)?null:new TypeError(vH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}fH.exports=Skr});var pH=s((s4e,lH)=>{"use strict";function Tkr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}lH.exports=Tkr});var mH=s((u4e,gH)=>{"use strict";function Ikr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}gH.exports=Ikr});var hH=s((o4e,dH)=>{"use strict";function _kr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}dH.exports=_kr});var yH=s((v4e,qH)=>{"use strict";function Lkr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}qH.exports=Lkr});var wH=s((f4e,bH)=>{"use strict";function Pkr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}bH.exports=Pkr});var OH=s((c4e,AH)=>{"use strict";var Rkr=E(),EH=V(),NH=R(),Fkr=_(),Mkr=G(),Bkr=pH(),kkr=mH(),jkr=hH(),Ckr=yH(),Gkr=wH(),Vkr=.08913147449493408,Ukr=2.249481201171875,Hkr=.807220458984375,Wkr=.9399557113647461,zkr=.9836282730102539;function Dkr(r){var e,t,i,n,a,u;return Rkr(r)?NaN:r===1?Fkr:r===-1?Mkr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=Bkr(t),e*(a*Vkr+a*u)):n>=.25?(a=EH(-2*NH(n)),n-=.25,u=kkr(n),e*(a/(Ukr+u))):(n=EH(-NH(n)),n<3?(i=n-1.125,u=jkr(i),e*(Hkr*n+u*n)):n<6?(i=n-3,u=Ckr(i),e*(Wkr*n+u*n)):(i=n-6,u=Gkr(i),e*(zkr*n+u*n))))}AH.exports=Dkr});var j3=s((l4e,SH)=>{"use strict";var Xkr=OH();SH.exports=Xkr});var IH=s((p4e,TH)=>{"use strict";var Jkr=j3(),C3=E(),xkr=V();function Ykr(r,e,t){var i,n;return C3(e)||C3(t)||C3(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*xkr(2),i+n*Jkr(2*r-1))}TH.exports=Ykr});var LH=s((g4e,_H)=>{"use strict";var Zkr=S(),$kr=d3().factory,Qkr=j3(),G3=E(),Kkr=V();function rjr(r,e){var t,i;if(G3(r)||G3(e)||e<0)return Zkr(NaN);return e===0&&$kr(r),t=r,i=e*Kkr(2),n;function n(a){return G3(a)||a<0||a>1?NaN:t+i*Qkr(2*a-1)}}_H.exports=rjr});var V3=s((m4e,RH)=>{"use strict";var ejr=w(),PH=IH(),tjr=LH();ejr(PH,"factory",tjr);RH.exports=PH});var MH=s((d4e,FH)=>{"use strict";var ijr=V3();function njr(r,e,t){var i=ijr(1-r()/2,0,1);return e+t/(i*i)}FH.exports=njr});var U3=s((h4e,HH)=>{"use strict";var Oe=w(),hs=P(),BH=F(),kH=I(),jH=L(),CH=O(),GH=S(),ajr=C(),qs=z().factory,VH=E(),sjr=M(),ys=y(),ujr=cH(),UH=MH();function ojr(){var r,e,t,i,n,a;if(arguments.length===0)e=qs();else if(arguments.length===1){if(r=arguments[0],!kH(r))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",r));if(CH(r,"prng")){if(!jH(r.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qs(r)}else{if(n=arguments[0],a=arguments[1],i=ujr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!kH(r))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",r));if(CH(r,"prng")){if(!jH(r.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qs(r)}else e=qs()}return n===void 0?t=h:t=m,Oe(t,"NAME","levy"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),BH(t,"state",GH(null),ajr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",GH(null)),Oe(t,"PRNG",e)):(hs(t,"seed",u),hs(t,"seedLength",o),BH(t,"state",c,l),hs(t,"stateLength",f),hs(t,"byteLength",v),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=sjr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return UH(e,n,a)}function h(d,g){return VH(d)||VH(g)||g<=0?NaN:UH(e,d,g)}}HH.exports=ojr});var zH=s((q4e,WH)=>{"use strict";var vjr=U3(),fjr=vjr();WH.exports=fjr});var JH=s((y4e,XH)=>{"use strict";var cjr=w(),DH=zH(),ljr=U3();cjr(DH,"factory",ljr);XH.exports=DH});var ZH=s((b4e,YH)=>{"use strict";var pjr=j().isPrimitive,gjr=W().isPrimitive,mjr=sr(),xH=y();function djr(r,e){return!pjr(r)||mjr(r)?new TypeError(xH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):gjr(e)?null:new TypeError(xH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}YH.exports=djr});var QH=s((w4e,$H)=>{"use strict";var hjr=R();function qjr(r,e,t){var i=r();return e+t*hjr(i/(1-i))}$H.exports=qjr});var H3=s((E4e,sW)=>{"use strict";var Se=w(),bs=P(),KH=F(),rW=I(),eW=L(),tW=O(),iW=S(),yjr=C(),ws=z().factory,nW=E(),bjr=M(),Es=y(),wjr=ZH(),aW=QH();function Ejr(){var r,e,t,i,n,a;if(arguments.length===0)e=ws();else if(arguments.length===1){if(r=arguments[0],!rW(r))throw new TypeError(Es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(tW(r,"prng")){if(!eW(r.prng))throw new TypeError(Es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ws(r)}else{if(n=arguments[0],a=arguments[1],i=wjr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!rW(r))throw new TypeError(Es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(tW(r,"prng")){if(!eW(r.prng))throw new TypeError(Es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ws(r)}else e=ws()}return n===void 0?t=h:t=m,Se(t,"NAME","logistic"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),KH(t,"state",iW(null),yjr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",iW(null)),Se(t,"PRNG",e)):(bs(t,"seed",u),bs(t,"seedLength",o),KH(t,"state",c,l),bs(t,"stateLength",f),bs(t,"byteLength",v),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=bjr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return aW(e,n,a)}function h(d,g){return nW(d)||nW(g)||g<=0?NaN:aW(e,d,g)}}sW.exports=Ejr});var oW=s((N4e,uW)=>{"use strict";var Njr=H3(),Ajr=Njr();uW.exports=Ajr});var cW=s((A4e,fW)=>{"use strict";var Ojr=w(),vW=oW(),Sjr=H3();Ojr(vW,"factory",Sjr);fW.exports=vW});var gW=s((O4e,pW)=>{"use strict";var Tjr=j().isPrimitive,Ijr=W().isPrimitive,lW=y(),_jr=sr();function Ljr(r,e){return!Tjr(r)||_jr(r)?new TypeError(lW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Ijr(e)?null:new TypeError(lW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}pW.exports=Ljr});var dW=s((S4e,mW)=>{"use strict";var Pjr=ir();function Rjr(r,e,t){return Pjr(e+t*r())}mW.exports=Rjr});var W3=s((T4e,AW)=>{"use strict";var ct=w(),Ns=P(),hW=F(),qW=I(),yW=L(),bW=O(),wW=S(),Fjr=C(),_i=tt().factory,EW=E(),Mjr=M(),As=y(),Bjr=gW(),NW=dW();function kjr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=_i();else if(arguments.length===1){if(t=arguments[0],!qW(t))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",t));if(bW(t,"prng")){if(!yW(t.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=_i({prng:t.prng})}else e=_i(t)}else{if(u=arguments[0],r=arguments[1],a=Bjr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!qW(t))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",t));if(bW(t,"prng")){if(!yW(t.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=_i({prng:t.prng})}else e=_i(t)}else e=_i()}return u===void 0?n=d:n=h,i=e.PRNG,ct(n,"NAME","lognormal"),t&&t.prng?(ct(n,"seed",null),ct(n,"seedLength",null),hW(n,"state",wW(null),Fjr),ct(n,"stateLength",null),ct(n,"byteLength",null),ct(n,"toJSON",wW(null))):(Ns(n,"seed",o),Ns(n,"seedLength",f),hW(n,"state",l,p),Ns(n,"stateLength",v),Ns(n,"byteLength",c),ct(n,"toJSON",m)),ct(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=Mjr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return NW(e,u,r)}function d(g,q){return EW(g)||EW(q)||q<=0?NaN:NW(e,g,q)}}AW.exports=kjr});var SW=s((I4e,OW)=>{"use strict";var jjr=W3(),Cjr=jjr();OW.exports=Cjr});var _W=s((_4e,IW)=>{"use strict";var Gjr=w(),TW=SW(),Vjr=W3();Gjr(TW,"factory",Vjr);IW.exports=TW});var z3=s((L4e,LW)=>{"use strict";var Ujr=Xt(),Hjr=J(),Wjr=Ujr-1;function zjr(){var r=Hjr(1+Wjr*Math.random());return r|0}LW.exports=zjr});var J3=s((P4e,BW)=>{"use strict";var Te=w(),lt=P(),PW=F(),D3=O(),Djr=I(),Xjr=fr().isPrimitive,Jjr=jr(),xjr=re().isPrimitive,RW=$n(),Ur=y(),Os=Xt(),wr=Et(),Li=$e(),Yjr=M(),FW=z3(),X3=Os-1|0,Zjr=Os-1|0,$jr=16807,Ss=1,Ts=2,pt=2,Er=4,Cn=5;function MW(r,e){var t;return e?t="option":t="argument",r.length<Cn+1?new RangeError(Ur("invalid %s. State array has insufficient length.",t)):r[0]!==Ss?new RangeError(Ur("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ss,r[0])):r[1]!==Ts?new RangeError(Ur("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Ts,r[1])):r[pt]!==1?new RangeError(Ur("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[pt])):r[Er]!==r.length-Cn?new RangeError(Ur("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Cn,r[Er])):null}function Qjr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!Djr(r))throw new TypeError(Ur("invalid argument. Options argument must be an object. Value: `%s`.",r));if(D3(r,"copy")&&(i.copy=r.copy,!Xjr(r.copy)))throw new TypeError(Ur("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(D3(r,"state")){if(t=r.state,i.state=!0,!RW(t))throw new TypeError(Ur("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=MW(t,!0),u)throw u;i.copy===!1?e=t:(e=new wr(t.length),Li(t.length,t,1,e,1)),t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,t[Er])}if(n===void 0)if(D3(r,"seed"))if(n=r.seed,i.seed=!0,xjr(n)){if(n>Zjr)throw new RangeError(Ur("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(Jjr(n)&&n.length>0)a=n.length,e=new wr(Cn+a),e[0]=Ss,e[1]=Ts,e[pt]=1,e[Er]=a,Li.ndarray(a,n,1,0,e,1,Er+1),t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Ur("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=FW()|0}else n=FW()|0;return t===void 0&&(e=new wr(Cn+1),e[0]=Ss,e[1]=Ts,e[pt]=1,e[Er]=1,e[Er+1]=n,t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Te(h,"NAME","minstd"),lt(h,"seed",o),lt(h,"seedLength",f),PW(h,"state",l,p),lt(h,"stateLength",v),lt(h,"byteLength",c),Te(h,"toJSON",m),Te(h,"MIN",1),Te(h,"MAX",Os-1),Te(h,"normalized",d),Te(d,"NAME",h.NAME),lt(d,"seed",o),lt(d,"seedLength",f),PW(d,"state",l,p),lt(d,"stateLength",v),lt(d,"byteLength",c),Te(d,"toJSON",m),Te(d,"MIN",(h.MIN-1)/X3),Te(d,"MAX",(h.MAX-1)/X3),h;function o(){var g=e[Er];return Li(g,n,1,new wr(g),1)}function f(){return e[Er]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Li(g,e,1,new wr(g),1)}function p(g){var q;if(!RW(g))throw new TypeError(Ur("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(q=MW(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?Li(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new wr(g.length)),Li(g.length,g,1,e,1)),t=new wr(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,e[Er])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=Yjr(e),g.params=[],g}function h(){var g=t[0]|0;return g=$jr*g%Os|0,t[0]=g,g|0}function d(){return(h()-1)/X3}}BW.exports=Qjr});var jW=s((R4e,kW)=>{"use strict";var Kjr=J3(),rCr=z3(),eCr=Kjr({seed:rCr()});kW.exports=eCr});var VW=s((F4e,GW)=>{"use strict";var tCr=w(),CW=jW(),iCr=J3();tCr(CW,"factory",iCr);GW.exports=CW});var HW=s((M4e,UW)=>{"use strict";var nCr=E(),aCr=8;function sCr(r,e,t){var i,n;for(n=0;n<aCr;n++)if(i=r(),nCr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}UW.exports=sCr});var x3=s((B4e,WW)=>{"use strict";var uCr=Xt(),oCr=J(),vCr=uCr-1;function fCr(){var r=oCr(1+vCr*Math.random());return r|0}WW.exports=fCr});var $3=s((k4e,YW)=>{"use strict";var Ie=w(),gt=P(),zW=F(),Y3=O(),cCr=I(),lCr=fr().isPrimitive,pCr=jr(),gCr=re().isPrimitive,DW=$n(),Pi=$e(),mCr=J(),Nr=Et(),Gn=Xt(),dCr=M(),kr=y(),XW=HW(),JW=x3(),Z3=Gn-1|0,hCr=Gn-1|0,qCr=16807,Or=32,Ls=1,Ps=3,mt=2,Ri=Or+3,Ar=Or+6,Vn=Or+7,Is=Ri+1,_s=Ri+2;function xW(r,e){var t;return e?t="option":t="argument",r.length<Vn+1?new RangeError(kr("invalid %s. State array has insufficient length.",t)):r[0]!==Ls?new RangeError(kr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ls,r[0])):r[1]!==Ps?new RangeError(kr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Ps,r[1])):r[mt]!==Or?new RangeError(kr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Or,r[mt])):r[Ri]!==2?new RangeError(kr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Ri])):r[Ar]!==r.length-Vn?new RangeError(kr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Vn,r[Ar])):null}function yCr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!cCr(r))throw new TypeError(kr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Y3(r,"copy")&&(i.copy=r.copy,!lCr(r.copy)))throw new TypeError(kr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Y3(r,"state")){if(t=r.state,i.state=!0,!DW(t))throw new TypeError(kr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=xW(t,!0),u)throw u;i.copy===!1?e=t:(e=new Nr(t.length),Pi(t.length,t,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(Y3(r,"seed"))if(n=r.seed,i.seed=!0,gCr(n)){if(n>hCr)throw new RangeError(kr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(pCr(n)&&n.length>0)a=n.length,e=new Nr(Vn+a),e[0]=Ls,e[1]=Ps,e[mt]=Or,e[Ri]=2,e[_s]=n[0],e[Ar]=a,Pi.ndarray(a,n,1,0,e,1,Ar+1),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t=XW(h,t,Or),e[Is]=t[0];else throw new TypeError(kr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=JW()|0}else n=JW()|0;return t===void 0&&(e=new Nr(Vn+1),e[0]=Ls,e[1]=Ps,e[mt]=Or,e[Ri]=2,e[_s]=n,e[Ar]=1,e[Ar+1]=n,t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t=XW(h,t,Or),e[Is]=t[0]),Ie(d,"NAME","minstd-shuffle"),gt(d,"seed",o),gt(d,"seedLength",f),zW(d,"state",l,p),gt(d,"stateLength",v),gt(d,"byteLength",c),Ie(d,"toJSON",m),Ie(d,"MIN",1),Ie(d,"MAX",Gn-1),Ie(d,"normalized",g),Ie(g,"NAME",d.NAME),gt(g,"seed",o),gt(g,"seedLength",f),zW(g,"state",l,p),gt(g,"stateLength",v),gt(g,"byteLength",c),Ie(g,"toJSON",m),Ie(g,"MIN",(d.MIN-1)/Z3),Ie(g,"MAX",(d.MAX-1)/Z3),d;function o(){var q=e[Ar];return Pi(q,n,1,new Nr(q),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return Pi(q,e,1,new Nr(q),1)}function p(q){var N;if(!DW(q))throw new TypeError(kr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=xW(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?Pi(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Nr(q.length)),Pi(q.length,q,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function m(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=dCr(e),q.params=[],q}function h(){var q=e[_s]|0;return q=qCr*q%Gn|0,e[_s]=q,q|0}function d(){var q,N;return q=e[Is],N=mCr(Or*(q/Gn)),q=t[N],e[Is]=q,t[N]=h(),q}function g(){return(d()-1)/Z3}}YW.exports=yCr});var $W=s((j4e,ZW)=>{"use strict";var bCr=$3(),wCr=x3(),ECr=bCr({seed:wCr()});ZW.exports=ECr});var rz=s((C4e,KW)=>{"use strict";var NCr=w(),QW=$W(),ACr=$3();NCr(QW,"factory",ACr);KW.exports=QW});var tz=s((G4e,ez)=>{"use strict";var OCr=ir();function SCr(r,e){for(var t=r(),i=1;t>OCr(-e);)i+=1,t*=r();return i-1}ez.exports=SCr});var nz=s((V4e,iz)=>{"use strict";var TCr=J();function ICr(r){return TCr(r)===r&&r<0}iz.exports=ICr});var sz=s((U4e,az)=>{"use strict";var _Cr=nz();az.exports=_Cr});var oz=s((H4e,uz)=>{"use strict";var LCr=sz(),PCr=_n();function RCr(r){return LCr(r)?NaN:PCr(r+1)}uz.exports=RCr});var fz=s((W4e,vz)=>{"use strict";var FCr=oz();vz.exports=FCr});var gz=s((z4e,pz)=>{"use strict";var MCr=fz(),cz=J(),BCr=N0(),kCr=V(),lz=X(),Rs=R(),jCr=w1(),CCr=1/12,GCr=1/360;function VCr(r,e){var t,i,n,a,u,o,f,v,c,l;for(t=kCr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-lz(c))+f,c+=e+.445,cz(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=BCr(c)*.5-c,l=u*r()),a=.5-lz(c),(a>=.013||a>=l)&&(v=cz((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*Rs(e/v),c+=-e-jCr+v,c-=(CCr-GCr/(v*v))/v,v>=10&&c>=Rs(l*t)||(c=v*Rs(e)-e-MCr(v),v>=0&&v<=9&&c>=Rs(l))))return v}}pz.exports=VCr});var dz=s((D4e,mz)=>{"use strict";var UCr=tz(),HCr=gz();function WCr(r,e){return e<30?UCr(r,e):HCr(r,e)}mz.exports=WCr});var Q3=s((X4e,Nz)=>{"use strict";var _e=w(),Fs=P(),hz=F(),zCr=W().isPrimitive,qz=I(),yz=L(),bz=O(),wz=S(),DCr=C(),Ms=z().factory,XCr=E(),JCr=M(),Bs=y(),Ez=dz();function xCr(){var r,e,t,i;if(arguments.length===0)t=Ms();else if(arguments.length===1&&qz(arguments[0]))if(e=arguments[0],bz(e,"prng")){if(!yz(e.prng))throw new TypeError(Bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ms(e);else{if(r=arguments[0],!zCr(r))throw new TypeError(Bs("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!qz(e))throw new TypeError(Bs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(bz(e,"prng")){if(!yz(e.prng))throw new TypeError(Bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ms(e)}else t=Ms()}return r===void 0?i=p:i=l,_e(i,"NAME","poisson"),e&&e.prng?(_e(i,"seed",null),_e(i,"seedLength",null),hz(i,"state",wz(null),DCr),_e(i,"stateLength",null),_e(i,"byteLength",null),_e(i,"toJSON",wz(null)),_e(i,"PRNG",t)):(Fs(i,"seed",n),Fs(i,"seedLength",a),hz(i,"state",f,v),Fs(i,"stateLength",u),Fs(i,"byteLength",o),_e(i,"toJSON",c),_e(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=JCr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Ez(t,r)}function p(m){return XCr(m)||m<=0?NaN:Ez(t,m)}}Nz.exports=xCr});var Oz=s((J4e,Az)=>{"use strict";var YCr=Q3(),ZCr=YCr();Az.exports=ZCr});var K3=s((x4e,Tz)=>{"use strict";var $Cr=w(),Sz=Oz(),QCr=Q3();$Cr(Sz,"factory",QCr);Tz.exports=Sz});var _z=s((Y4e,Iz)=>{"use strict";var KCr=W().isPrimitive,rGr=j().isPrimitive,rv=y(),eGr=sr();function tGr(r,e){return KCr(r)?!rGr(e)||eGr(e)?new TypeError(rv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(rv("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(rv("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Iz.exports=tGr});var nv=s((Z4e,jz)=>{"use strict";var dt=w(),ks=P(),Lz=F(),Fi=O(),Pz=I(),ev=Kr(),Rz=fr().isPrimitive,Fz=L(),Mz=S(),iGr=C(),Bz=E(),Mi=K3().factory,js=wi().factory,tv=$e(),iv=lr(),kz=Fn(),nGr=M(),Le=y(),aGr=_z();function sGr(){var r,e,t,i,n,a,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=Mi(i);else if(arguments.length===1){if(i=arguments[0],!Pz(i))throw new TypeError(Le("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Fi(i,"copy")&&!Rz(i.copy))throw new TypeError(Le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Fi(i,"prng")){if(!Fz(i.prng))throw new TypeError(Le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Mi({prng:i.prng})}else{if(Fi(i,"state")&&!ev(i.state))throw new TypeError(Le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=kz({},i),i.copy===!1?u=!1:i.state&&(i.state=tv(i.state.length,i.state,1,new iv(i.state.length),1)),i.copy=!1,t=Mi(i)}}else{if(v=arguments[0],f=arguments[1],o=aGr(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!Pz(i))throw new TypeError(Le("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Fi(i,"copy")&&!Rz(i.copy))throw new TypeError(Le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Fi(i,"prng")){if(!Fz(i.prng))throw new TypeError(Le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Mi({prng:i.prng})}else{if(Fi(i,"state")&&!ev(i.state))throw new TypeError(Le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=kz({},i),i.copy===!1?u=!1:i.state&&(i.state=tv(i.state.length,i.state,1,new iv(i.state.length),1)),i.copy=!1,t=Mi(i)}}else i={copy:!1},t=Mi(i)}return i&&i.prng?v===void 0?r=js({prng:i.prng}):r=js(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=js({state:e,copy:!1}):r=js(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=q,a=t.PRNG,dt(n,"NAME","negative-binomial"),i&&i.prng?(dt(n,"seed",null),dt(n,"seedLength",null),Lz(n,"state",Mz(null),iGr),dt(n,"stateLength",null),dt(n,"byteLength",null),dt(n,"toJSON",Mz(null))):(ks(n,"seed",c),ks(n,"seedLength",l),Lz(n,"state",h,d),ks(n,"stateLength",p),ks(n,"byteLength",m),dt(n,"toJSON",g)),dt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function h(){return a.state}function d(A){if(!ev(A))throw new TypeError(Le("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));u&&(A=tv(A.length,A,1,new iv(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=nGr(a.state),v===void 0?A.params=[]:A.params=[v,f],A}function q(){return t(r())}function N(A,k){return Bz(A)||Bz(k)||k<=0||k>=1?NaN:t(r(A,k/(1-k)))}}jz.exports=sGr});var Gz=s(($4e,Cz)=>{"use strict";var uGr=nv(),oGr=uGr();Cz.exports=oGr});var Hz=s((Q4e,Uz)=>{"use strict";var vGr=w(),Vz=Gz(),fGr=nv();vGr(Vz,"factory",fGr);Uz.exports=Vz});var Dz=s((K4e,zz)=>{"use strict";var cGr=j().isPrimitive,lGr=W().isPrimitive,Wz=y(),pGr=sr();function gGr(r,e){return!cGr(r)||pGr(r)?new TypeError(Wz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):lGr(e)?null:new TypeError(Wz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}zz.exports=gGr});var Jz=s((r6e,Xz)=>{"use strict";function mGr(r,e,t){return e+t*r()}Xz.exports=mGr});var av=s((e6e,eD)=>{"use strict";var ht=w(),Cs=P(),xz=F(),Yz=I(),Zz=L(),$z=O(),Qz=S(),dGr=C(),Bi=tt().factory,Kz=E(),hGr=M(),Gs=y(),qGr=Dz(),rD=Jz();function yGr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Bi();else if(arguments.length===1){if(t=arguments[0],!Yz(t))throw new TypeError(Gs("invalid argument. Options argument must be an object. Value: `%s`.",t));if($z(t,"prng")){if(!Zz(t.prng))throw new TypeError(Gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Bi({prng:t.prng})}else e=Bi(t)}else{if(u=arguments[0],r=arguments[1],a=qGr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!Yz(t))throw new TypeError(Gs("invalid argument. Options argument must be an object. Value: `%s`.",t));if($z(t,"prng")){if(!Zz(t.prng))throw new TypeError(Gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Bi({prng:t.prng})}else e=Bi(t)}else e=Bi()}return u===void 0?n=d:n=h,i=e.PRNG,ht(n,"NAME","normal"),t&&t.prng?(ht(n,"seed",null),ht(n,"seedLength",null),xz(n,"state",Qz(null),dGr),ht(n,"stateLength",null),ht(n,"byteLength",null),ht(n,"toJSON",Qz(null))):(Cs(n,"seed",o),Cs(n,"seedLength",f),xz(n,"state",l,p),Cs(n,"stateLength",v),Cs(n,"byteLength",c),ht(n,"toJSON",m)),ht(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=hGr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return rD(e,u,r)}function d(g,q){return Kz(g)||Kz(q)||q<=0?NaN:rD(e,g,q)}}eD.exports=yGr});var iD=s((t6e,tD)=>{"use strict";var bGr=av(),wGr=bGr();tD.exports=wGr});var sD=s((i6e,aD)=>{"use strict";var EGr=w(),nD=iD(),NGr=av();EGr(nD,"factory",NGr);aD.exports=nD});var fD=s((n6e,vD)=>{"use strict";var uD=W().isPrimitive,oD=y();function AGr(r,e){return uD(r)?uD(e)?null:new TypeError(oD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(oD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}vD.exports=AGr});var lD=s((a6e,cD)=>{"use strict";var OGr=U();function SGr(r,e,t){return t/OGr(r(),1/e)}cD.exports=SGr});var sv=s((s6e,bD)=>{"use strict";var Pe=w(),Vs=P(),pD=F(),gD=I(),mD=L(),dD=O(),hD=S(),TGr=C(),Us=z().factory,qD=E(),IGr=M(),Hs=y(),_Gr=fD(),yD=lD();function LGr(){var r,e,t,i,n,a;if(arguments.length===0)i=Us();else if(arguments.length===1){if(t=arguments[0],!gD(t))throw new TypeError(Hs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(dD(t,"prng")){if(!mD(t.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Us(t)}else{if(r=arguments[0],e=arguments[1],a=_Gr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!gD(t))throw new TypeError(Hs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(dD(t,"prng")){if(!mD(t.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Us(t)}else i=Us()}return r===void 0?n=h:n=m,Pe(n,"NAME","pareto-type1"),t&&t.prng?(Pe(n,"seed",null),Pe(n,"seedLength",null),pD(n,"state",hD(null),TGr),Pe(n,"stateLength",null),Pe(n,"byteLength",null),Pe(n,"toJSON",hD(null)),Pe(n,"PRNG",i)):(Vs(n,"seed",u),Vs(n,"seedLength",o),pD(n,"state",c,l),Vs(n,"stateLength",f),Vs(n,"byteLength",v),Pe(n,"toJSON",p),Pe(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=IGr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function m(){return yD(i,r,e)}function h(d,g){return qD(d)||qD(g)||d<=0||g<=0?NaN:yD(i,d,g)}}bD.exports=LGr});var ED=s((u6e,wD)=>{"use strict";var PGr=sv(),RGr=PGr();wD.exports=RGr});var OD=s((o6e,AD)=>{"use strict";var FGr=w(),ND=ED(),MGr=sv();FGr(ND,"factory",MGr);AD.exports=ND});var TD=s((v6e,SD)=>{"use strict";var BGr=V(),kGr=R();function jGr(r,e){return e*BGr(-2*kGr(r()))}SD.exports=jGr});var uv=s((f6e,MD)=>{"use strict";var Re=w(),Ws=P(),ID=F(),CGr=W().isPrimitive,_D=I(),LD=L(),PD=O(),RD=S(),GGr=C(),zs=z().factory,VGr=E(),UGr=M(),Ds=y(),FD=TD();function HGr(){var r,e,t,i;if(arguments.length===0)t=zs();else if(arguments.length===1&&_D(arguments[0]))if(e=arguments[0],PD(e,"prng")){if(!LD(e.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zs(e);else{if(r=arguments[0],!CGr(r))throw new TypeError(Ds("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!_D(e))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",e));if(PD(e,"prng")){if(!LD(e.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zs(e)}else t=zs()}return r===void 0?i=p:i=l,Re(i,"NAME","rayleigh"),e&&e.prng?(Re(i,"seed",null),Re(i,"seedLength",null),ID(i,"state",RD(null),GGr),Re(i,"stateLength",null),Re(i,"byteLength",null),Re(i,"toJSON",RD(null)),Re(i,"PRNG",t)):(Ws(i,"seed",n),Ws(i,"seedLength",a),ID(i,"state",f,v),Ws(i,"stateLength",u),Ws(i,"byteLength",o),Re(i,"toJSON",c),Re(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=UGr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return FD(t,r)}function p(m){return VGr(m)||m<=0?NaN:FD(t,m)}}MD.exports=HGr});var kD=s((c6e,BD)=>{"use strict";var WGr=uv(),zGr=WGr();BD.exports=zGr});var GD=s((l6e,CD)=>{"use strict";var DGr=w(),jD=kD(),XGr=uv();DGr(jD,"factory",XGr);CD.exports=jD});var cv=s((p6e,xD)=>{"use strict";var qt=w(),Xs=P(),VD=F(),ki=O(),UD=W().isPrimitive,HD=I(),ov=Kr(),WD=fr().isPrimitive,JGr=E(),zD=L(),DD=S(),xGr=C(),Js=kn().factory,ji=tt().factory,vv=$e(),fv=lr(),XD=Fn(),YGr=M(),Yr=y(),JD=V();function ZGr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=ji(n);else if(arguments.length===1)if(HD(arguments[0])){if(n=arguments[0],ki(n,"copy")&&!WD(n.copy))throw new TypeError(Yr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ki(n,"prng")){if(!zD(n.prng))throw new TypeError(Yr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=ji({prng:n.prng})}else{if(ki(n,"state")&&!ov(n.state))throw new TypeError(Yr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=XD({},n),n.copy===!1?u=!1:n.state&&(n.state=vv(n.state.length,n.state,1,new fv(n.state.length),1)),n.copy=!1,t=ji(n)}}else{if(o=arguments[0],!UD(o))throw new TypeError(Yr("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=ji(n)}else{if(o=arguments[0],!UD(o))throw new TypeError(Yr("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!HD(n))throw new TypeError(Yr("invalid argument. Options argument must be an object. Value: `%s`.",n));if(ki(n,"copy")&&!WD(n.copy))throw new TypeError(Yr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ki(n,"prng")){if(!zD(n.prng))throw new TypeError(Yr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=ji({prng:n.prng})}else{if(ki(n,"state")&&!ov(n.state))throw new TypeError(Yr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=XD({},n),n.copy===!1?u=!1:n.state&&(n.state=vv(n.state.length,n.state,1,new fv(n.state.length),1)),n.copy=!1,t=ji(n)}}return n&&n.prng?o===void 0?r=Js({prng:n.prng}):r=Js(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Js({state:e,copy:!1}):r=Js(o,{state:e,copy:!1})),o===void 0?a=g:a=d,i=t.PRNG,qt(a,"NAME","t"),n&&n.prng?(qt(a,"seed",null),qt(a,"seedLength",null),VD(a,"state",DD(null),xGr),qt(a,"stateLength",null),qt(a,"byteLength",null),qt(a,"toJSON",DD(null))):(Xs(a,"seed",f),Xs(a,"seedLength",v),VD(a,"state",p,m),Xs(a,"stateLength",c),Xs(a,"byteLength",l),qt(a,"toJSON",h)),qt(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(q){if(!ov(q))throw new TypeError(Yr("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=vv(q.length,q,1,new fv(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=YGr(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/JD(r()/o)}function g(q){return JGr(q)||q<=0?NaN:t()/JD(r(q)/q)}}xD.exports=ZGr});var ZD=s((g6e,YD)=>{"use strict";var $Gr=cv(),QGr=$Gr();YD.exports=QGr});var KD=s((m6e,QD)=>{"use strict";var KGr=w(),$D=ZD(),rVr=cv();KGr($D,"factory",rVr);QD.exports=$D});var eX=s((d6e,rX)=>{"use strict";var lv=j().isPrimitive,xs=y(),pv=sr();function eVr(r,e,t){return!lv(r)||pv(r)?new TypeError(xs("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!lv(e)||pv(e)?new TypeError(xs("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!lv(t)||pv(t)?new TypeError(xs("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(xs("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}rX.exports=eVr});var nX=s((h6e,iX)=>{"use strict";var tX=V();function tVr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+tX(a*u)):(a=(t-e)*(t-i),t-tX(a*(1-u)))}iX.exports=tVr});var mv=s((q6e,cX)=>{"use strict";var Fe=w(),Ys=P(),aX=F(),sX=I(),uX=L(),oX=O(),vX=S(),iVr=C(),Zs=z().factory,gv=E(),nVr=M(),$s=y(),aVr=eX(),fX=nX();function sVr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Zs();else if(arguments.length===1){if(r=arguments[0],!sX(r))throw new TypeError($s("invalid argument. Options argument must be an object. Value: `%s`.",r));if(oX(r,"prng")){if(!uX(r.prng))throw new TypeError($s("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=aVr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!sX(r))throw new TypeError($s("invalid argument. Options argument must be an object. Value: `%s`.",r));if(oX(r,"prng")){if(!uX(r.prng))throw new TypeError($s("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else e=Zs()}return n===void 0?t=d:t=h,Fe(t,"NAME","triangular"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),aX(t,"state",vX(null),iVr),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",vX(null)),Fe(t,"PRNG",e)):(Ys(t,"seed",o),Ys(t,"seedLength",f),aX(t,"state",l,p),Ys(t,"stateLength",v),Ys(t,"byteLength",c),Fe(t,"toJSON",m),Fe(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=nVr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return fX(e,n,a,u)}function d(g,q,N){return gv(g)||gv(q)||gv(N)||!(g<=N&&N<=q)?NaN:fX(e,g,q,N)}}cX.exports=sVr});var pX=s((y6e,lX)=>{"use strict";var uVr=mv(),oVr=uVr();lX.exports=oVr});var dX=s((b6e,mX)=>{"use strict";var vVr=w(),gX=pX(),fVr=mv();vVr(gX,"factory",fVr);mX.exports=gX});var bX=s((w6e,yX)=>{"use strict";var hX=j().isPrimitive,dv=y(),qX=sr();function cVr(r,e){return!hX(r)||qX(r)?new TypeError(dv("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!hX(e)||qX(e)?new TypeError(dv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(dv("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}yX.exports=cVr});var EX=s((E6e,wX)=>{"use strict";function lVr(r,e,t){var i=r();return t*i+(1-i)*e}wX.exports=lVr});var hv=s((N6e,LX)=>{"use strict";var Me=w(),Qs=P(),NX=F(),AX=I(),OX=L(),SX=O(),TX=S(),pVr=C(),Ks=z().factory,IX=E(),gVr=M(),ru=y(),mVr=bX(),_X=EX();function dVr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ks();else if(arguments.length===1){if(r=arguments[0],!AX(r))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SX(r,"prng")){if(!OX(r.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ks(r)}else{if(n=arguments[0],a=arguments[1],i=mVr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!AX(r))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SX(r,"prng")){if(!OX(r.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ks(r)}else e=Ks()}return n===void 0?t=h:t=m,Me(t,"NAME","uniform"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),NX(t,"state",TX(null),pVr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",TX(null)),Me(t,"PRNG",e)):(Qs(t,"seed",u),Qs(t,"seedLength",o),NX(t,"state",c,l),Qs(t,"stateLength",f),Qs(t,"byteLength",v),Me(t,"toJSON",p),Me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=gVr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return _X(e,n,a)}function h(d,g){return IX(d)||IX(g)||d>=g?NaN:_X(e,d,g)}}LX.exports=dVr});var RX=s((A6e,PX)=>{"use strict";var hVr=hv(),qVr=hVr();PX.exports=qVr});var BX=s((O6e,MX)=>{"use strict";var yVr=w(),FX=RX(),bVr=hv();yVr(FX,"factory",bVr);MX.exports=FX});var GX=s((S6e,CX)=>{"use strict";var kX=W().isPrimitive,jX=y();function wVr(r,e){return kX(r)?kX(e)?null:new TypeError(jX("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(jX("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}CX.exports=wVr});var UX=s((T6e,VX)=>{"use strict";var EVr=U(),NVr=R();function AVr(r,e,t){return t*EVr(-NVr(1-r()),1/e)}VX.exports=AVr});var qv=s((I6e,YX)=>{"use strict";var Be=w(),eu=P(),HX=F(),WX=I(),zX=L(),DX=O(),XX=S(),OVr=C(),tu=z().factory,JX=E(),SVr=M(),iu=y(),TVr=GX(),xX=UX();function IVr(){var r,e,t,i,n,a;if(arguments.length===0)t=tu();else if(arguments.length===1){if(e=arguments[0],!WX(e))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(DX(e,"prng")){if(!zX(e.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=tu(e)}else{if(a=arguments[0],r=arguments[1],n=TVr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!WX(e))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(DX(e,"prng")){if(!zX(e.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=tu(e)}else t=tu()}return r===void 0?i=h:i=m,Be(i,"NAME","weibull"),e&&e.prng?(Be(i,"seed",null),Be(i,"seedLength",null),HX(i,"state",XX(null),OVr),Be(i,"stateLength",null),Be(i,"byteLength",null),Be(i,"toJSON",XX(null)),Be(i,"PRNG",t)):(eu(i,"seed",u),eu(i,"seedLength",o),HX(i,"state",c,l),eu(i,"stateLength",f),eu(i,"byteLength",v),Be(i,"toJSON",p),Be(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=SVr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return xX(t,a,r)}function h(d,g){return JX(d)||JX(g)||d<=0||g<=0?NaN:xX(t,d,g)}}YX.exports=IVr});var $X=s((_6e,ZX)=>{"use strict";var _Vr=qv(),LVr=_Vr();ZX.exports=LVr});var rJ=s((L6e,KX)=>{"use strict";var PVr=w(),QX=$X(),RVr=qv();PVr(QX,"factory",RVr);KX.exports=QX});var tJ=s((P6e,eJ)=>{"use strict";var FVr=cr(),MVr=Cr().isPrimitive,BVr=y(),kVr=Su();function jVr(r){if(MVr(r))return r;if(FVr(r))return kVr(r);throw new TypeError(BVr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}eJ.exports=jVr});var nJ=s((R6e,iJ)=>{"use strict";var CVr=tJ();iJ.exports=CVr});var sJ=s((F6e,aJ)=>{"use strict";var B=nr(),GVr=pF().factory,VVr=AF().factory,UVr=XM().factory,HVr=PB().factory,WVr=lk().factory,zVr=Tk().factory,DVr=nj().factory,XVr=Sj().factory,JVr=kn().factory,xVr=bC().factory,YVr=VC().factory,ZVr=nG().factory,$Vr=qG().factory,QVr=jG().factory,KVr=rV().factory,rUr=wi().factory,eUr=mV().factory,tUr=MV().factory,iUr=oU().factory,nUr=tt().factory,aUr=AU().factory,sUr=zU().factory,uUr=oH().factory,oUr=JH().factory,vUr=cW().factory,fUr=_W().factory,cUr=VW().factory,lUr=rz().factory,pUr=z().factory,gUr=Hz().factory,mUr=sD().factory,dUr=OD().factory,hUr=K3().factory,qUr=GD().factory,yUr=KD().factory,bUr=dX().factory,wUr=BX().factory,EUr=rJ().factory,NUr=nJ();function AUr(r){return B(r,"arcsine",GVr),B(r,"bernoulli",VVr),B(r,"beta",UVr),B(r,"betaprime",HVr),B(r,"binomial",WVr),B(r,"boxMuller",zVr),B(r,"cauchy",DVr),B(r,"chi",XVr),B(r,"chisquare",JVr),B(r,"cosine",xVr),B(r,"discreteUniform",YVr),B(r,"erlang",ZVr),B(r,"exponential",$Vr),B(r,"f",QVr),B(r,"frechet",KVr),B(r,"gamma",rUr),B(r,"geometric",eUr),B(r,"gumbel",tUr),B(r,"hypergeometric",iUr),B(r,"improvedZiggurat",nUr),B(r,"invgamma",aUr),B(r,"kumaraswamy",sUr),B(r,"laplace",uUr),B(r,"levy",oUr),B(r,"logistic",vUr),B(r,"lognormal",fUr),B(r,"minstd",cUr),B(r,"minstdShuffle",lUr),B(r,"mt19937",pUr),B(r,"negativeBinomial",gUr),B(r,"normal",mUr),B(r,"pareto1",dUr),B(r,"poisson",hUr),B(r,"rayleigh",qUr),B(r,"t",yUr),B(r,"triangular",bUr),B(r,"uniform",wUr),B(r,"weibull",EUr),r.base={},B(r.base,"normalizeSeed",NUr),r}aJ.exports=AUr});var oJ=s((M6e,uJ)=>{"use strict";var OUr=I(),nu=O(),SUr=Cr().isPrimitive,TUr=re().isPrimitive,IUr=Ge().isPrimitive,_Ur=ko().isPrimitive,Un=y();function LUr(r,e){return OUr(e)?nu(e,"period")&&(r.period=e.period,!TUr(e.period))?new TypeError(Un("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):nu(e,"amplitude")&&(r.amplitude=e.amplitude,!_Ur(e.amplitude))?new TypeError(Un("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):nu(e,"offset")&&(r.offset=e.offset,!SUr(e.offset))?new TypeError(Un("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):nu(e,"iter")&&(r.iter=e.iter,!IUr(e.iter))?new TypeError(Un("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(Un("invalid argument. Options argument must be an object. Value: `%s`.",e))}uJ.exports=LUr});var lJ=s((B6e,cJ)=>{"use strict";var yv=w(),vJ=ia(),PUr=o3(),RUr=za(),FUr=Wa(),MUr=Pr(),BUr=oJ();function fJ(r){var e,t,i,n,a,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=BUr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=MUr/e.period,o=e.amplitude/FUr,f=0,t={},yv(t,"next",v),yv(t,"return",c),vJ&&yv(t,vJ,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*RUr(PUr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return fJ(e)}}cJ.exports=fJ});var gJ=s((k6e,pJ)=>{"use strict";var kUr=lJ();pJ.exports=kUr});var dJ=s((j6e,mJ)=>{"use strict";var jUr=nr(),CUr=gJ();function GUr(r){return jUr(r,"iterSawtoothWave",CUr),r}mJ.exports=GUr});var qJ=s((C6e,hJ)=>{"use strict";var VUr=17976931348623157e292;hJ.exports=VUr});var au=s((G6e,yJ)=>{"use strict";var UUr=709.782712893384;yJ.exports=UUr});var wJ=s((V6e,bJ)=>{"use strict";var HUr=ir();function WUr(r,e){var t,i,n,a;if(n=HUr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}bJ.exports=WUr});var NJ=s((U6e,EJ)=>{"use strict";function zUr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}EJ.exports=zUr});var OJ=s((H6e,AJ)=>{"use strict";function DUr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}AJ.exports=DUr});var TJ=s((W6e,SJ)=>{"use strict";function XUr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}SJ.exports=XUr});var _J=s((z6e,IJ)=>{"use strict";function JUr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}IJ.exports=JUr});var PJ=s((D6e,LJ)=>{"use strict";function xUr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}LJ.exports=xUr});var FJ=s((X6e,RJ)=>{"use strict";function YUr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}RJ.exports=YUr});var BJ=s((J6e,MJ)=>{"use strict";function ZUr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}MJ.exports=ZUr});var jJ=s((x6e,kJ)=>{"use strict";function $Ur(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}kJ.exports=$Ur});var UJ=s((Y6e,VJ)=>{"use strict";var QUr=E(),CJ=ir(),KUr=te(),rHr=_(),eHr=G(),tHr=NJ(),iHr=OJ(),nHr=TJ(),aHr=_J(),sHr=PJ(),uHr=FJ(),oHr=BJ(),vHr=jJ(),su=1e-300,fHr=13877787807814457e-33,GJ=.8450629115104675,cHr=.12837916709551256,lHr=1,pHr=-.0023621185607526594,gHr=1,mHr=-.009864944034847148,dHr=1,hHr=-.0098649429247001,qHr=1;function yHr(r){var e,t,i,n,a,u,o,f;if(QUr(r))return NaN;if(r===rHr)return 0;if(r===eHr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<fHr?1-r:(i=r*r,n=cHr+i*tHr(i),a=lHr+i*iHr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=pHr+a*nHr(a),f=gHr+a*aHr(a),e?1+GJ+o/f:1-GJ-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=mHr+a*sHr(a),a=dHr+a*uHr(a);else{if(r<-6)return 2-su;n=hHr+a*oHr(a),a=qHr+a*vHr(a)}return i=KUr(t,0),n=CJ(-(i*i)-.5625)*CJ((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-su:su*su}VJ.exports=yHr});var Vt=s((Z6e,HJ)=>{"use strict";var bHr=UJ();HJ.exports=bHr});var DJ=s(($6e,zJ)=>{"use strict";var wHr=Vt(),WJ=V(),EHr=ir(),NHr=Pr();function AHr(r,e){var t,i,n,a,u;if(a=wHr(WJ(e)),a!==0&&r>1){for(i=EHr(-e)/WJ(NHr*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}zJ.exports=AHr});var bv=s((Q6e,XJ)=>{"use strict";var OHr=-708.3964185322641;XJ.exports=OHr});var ZJ=s((K6e,YJ)=>{"use strict";var Ci=ir(),uu=U(),SHr=R(),JJ=au(),xJ=bv();function THr(r,e){var t,i;return i=r*SHr(e),e>=1?i<JJ&&-e>xJ?t=uu(e,r)*Ci(-e):r>=1?t=uu(e/Ci(e/r),r):t=Ci(i-e):i>xJ?t=uu(e,r)*Ci(-e):e/r<JJ?t=uu(e/Ci(e/r),r):t=Ci(i-e),t}YJ.exports=THr});var wv=s((r8e,$J)=>{"use strict";function IHr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}$J.exports=IHr});var KJ=s((e8e,QJ)=>{"use strict";var _Hr=Function;QJ.exports=_Hr});var ex=s((t8e,rx)=>{"use strict";var LHr=KJ();rx.exports=LHr});var ix=s((i8e,tx)=>{"use strict";var PHr=ex(),RHr=wv();function FHr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new PHr(e)();function a(u){return RHr(r,u)}}tx.exports=FHr});var sx=s((n8e,ax)=>{"use strict";var MHr=w(),nx=wv(),BHr=ix();MHr(nx,"factory",BHr);ax.exports=nx});var Ut=s((a8e,ux)=>{"use strict";var kHr=2220446049250313e-31;ux.exports=kHr});var vx=s((s8e,ox)=>{"use strict";var jHr=eval;ox.exports=jHr});var cx=s((u8e,fx)=>{"use strict";var CHr=vx();function GHr(){var r;try{CHr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}fx.exports=GHr});var Ev=s((o8e,lx)=>{"use strict";var VHr=cx();lx.exports=VHr});var gx=s((v8e,px)=>{"use strict";var ou=X(),UHr=Ut(),HHr=1e6;function WHr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||UHr,a=o.maxTerms||HHr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,ou(i*u)>=ou(n)||--a===0)break}else do n=r(),u+=n;while(ou(i*u)<ou(n)&&--a);return u}px.exports=WHr});var hx=s((f8e,dx)=>{"use strict";var mx=X(),zHr=Ut(),DHr=1e6;function XHr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||zHr,n=u.maxTerms||DHr,a=u.initialValue||0;do i=r(),a+=i;while(mx(t*a)<mx(i)&&--n);return a}dx.exports=XHr});var vu=s((c8e,qx)=>{"use strict";var JHr=Ev(),xHr=gx(),YHr=hx(),Nv;JHr()?Nv=xHr:Nv=YHr;qx.exports=Nv});var bx=s((l8e,yx)=>{"use strict";function ZHr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}yx.exports=ZHr});var Ex=s((p8e,wx)=>{"use strict";var $Hr=X(),QHr=R(),KHr=Ut(),rWr=vu(),eWr=bx();function tWr(r){var e,t;return r<=-1?NaN:(t=$Hr(r),t>.95?QHr(1+r)-r:t<KHr?-r*r/2:(e={initialValue:-r},rWr(eWr(r),e)))}wx.exports=tWr});var Ax=s((g8e,Nx)=>{"use strict";var iWr=Ex();Nx.exports=iWr});var Sx=s((m8e,Ox)=>{"use strict";function nWr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Ox.exports=nWr});var Ix=s((d8e,Tx)=>{"use strict";function aWr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}Tx.exports=aWr});var Lx=s((h8e,_x)=>{"use strict";function sWr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}_x.exports=sWr});var Rx=s((q8e,Px)=>{"use strict";function uWr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Px.exports=uWr});var Mx=s((y8e,Fx)=>{"use strict";function oWr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Fx.exports=oWr});var kx=s((b8e,Bx)=>{"use strict";function vWr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Bx.exports=vWr});var Cx=s((w8e,jx)=>{"use strict";function fWr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}jx.exports=fWr});var Vx=s((E8e,Gx)=>{"use strict";function cWr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Gx.exports=cWr});var Hx=s((N8e,Ux)=>{"use strict";function lWr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Ux.exports=lWr});var zx=s((A8e,Wx)=>{"use strict";var pWr=sx(),gWr=Ax(),mWr=Vt(),Av=V(),dWr=ir(),hWr=Ye(),qWr=Sx(),yWr=Ix(),bWr=Lx(),wWr=Rx(),EWr=Mx(),NWr=kx(),AWr=Cx(),OWr=Vx(),SWr=Hx(),Hr=[0,0,0,0,0,0,0,0,0,0];function TWr(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-gWr(i),a=r*n,u=Av(2*n),e<r&&(u=-u),Hr[0]=qWr(u),Hr[1]=yWr(u),Hr[2]=bWr(u),Hr[3]=wWr(u),Hr[4]=EWr(u),Hr[5]=NWr(u),Hr[6]=AWr(u),Hr[7]=OWr(u),Hr[8]=SWr(u),Hr[9]=-.0005967612901927463,t=pWr(Hr,1/r),t*=dWr(-a)/Av(hWr*r),e<r&&(t=-t),t+=mWr(Av(a))/2,t}Wx.exports=TWr});var Xx=s((O8e,Dx)=>{"use strict";function IWr(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}Dx.exports=IWr});var xx=s((S8e,Jx)=>{"use strict";var _Wr=vu(),LWr=Xx();function PWr(r,e,t){var i,n;return t=t||0,n=LWr(r,e),i=_Wr(n,{initialValue:t}),i}Jx.exports=PWr});var Zx=s((T8e,Yx)=>{"use strict";function RWr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Yx.exports=RWr});var Qx=s((I8e,$x)=>{"use strict";var FWr=Zx();$x.exports=FWr});var rY=s((_8e,Kx)=>{"use strict";var MWr=Qx();Kx.exports=MWr});var iY=s((L8e,tY)=>{"use strict";var BWr=d1(),eY=E(),Ov=G();function kWr(r,e){return eY(r)||eY(e)?NaN:r===Ov||e===Ov?Ov:r===e&&r===0?BWr(r)?r:e:r<e?r:e}tY.exports=kWr});var aY=s((P8e,nY)=>{"use strict";var jWr=iY();nY.exports=jWr});var uY=s((R8e,sY)=>{"use strict";var CWr=10.900511;sY.exports=CWr});var Sv=s((F8e,oY)=>{"use strict";var GWr=2.718281828459045;oY.exports=GWr});var cY=s((M8e,fY)=>{"use strict";var VWr=rY(),UWr=_n(),HWr=mi(),WWr=Je(),zWr=V(),DWr=X(),yt=ir(),Hn=U(),Tv=A1(),Iv=aY(),vY=R(),fu=au(),Wn=bv(),_v=uY(),XWr=Sv();function JWr(r,e){var t,i,n,a,u,o,f;return n=r+_v-.5,f=(e-r-_v+.5)/n,r<1?e<=Wn?yt(r*vY(e)-e-UWr(r)):Hn(e,r)*yt(-e)/HWr(r):(DWr(f*f*r)<=100&&r>150?(t=r*(WWr(f)-f)+e*(.5-_v)/n,t=yt(t)):(a=r*vY(e/n),u=r-e,Iv(a,u)<=Wn||Tv(a,u)>=fu?(i=u/r,Iv(a,u)/2>Wn&&Tv(a,u)/2<fu?(o=Hn(e/n,r/2)*yt(u/2),t=o*o):Iv(a,u)/4>Wn&&Tv(a,u)/4<fu&&e>r?(o=Hn(e/n,r/4)*yt(u/4),t=o*o,t*=t):i>Wn&&i<fu?t=Hn(e*yt(i)/n,r):t=yt(a+u)):t=Hn(e/n,r)*yt(u)),t*=zWr(n/XWr)/VWr(r),t)}fY.exports=JWr});var pY=s((B8e,lY)=>{"use strict";var xWr=.34657359027997264;lY.exports=xWr});var mY=s((k8e,gY)=>{"use strict";function YWr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}gY.exports=YWr});var wY=s((j8e,bY)=>{"use strict";var ZWr=E(),dY=er(),Lv=ie(),$Wr=pi(),hY=_(),QWr=G(),qY=xr(),KWr=pY(),rzr=mY(),ezr=709.782712893384,Pv=.6931471803691238,Rv=19082149292705877e-26,yY=1.4426950408889634,tzr=38.816242111356935,izr=1.0397207708399179;function nzr(r){var e,t,i,n,a,u,o,f,v,c,l,p,m;if(r===hY||ZWr(r))return r;if(r===QWr)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=tzr){if(i)return-1;if(f>=ezr)return hY}if(u=dY(f)|0,f>KWr)f<izr?i?(n=r+Pv,a=-Rv,m=-1):(n=r-Pv,a=Rv,m=1):(i?m=yY*r-.5:m=yY*r+.5,m|=0,l=m,n=r-l*Pv,a=l*Rv),r=n-a,c=n-r-a;else{if(u<1016070144)return r;m=0}return e=.5*r,v=r*e,o=1+v*rzr(v),l=3-o*e,p=v*((o-l)/(6-r*l)),m===0?r-(r*p-v):(t=$Wr(qY+m<<20,0),p=r*(p-c)-c,p-=v,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(f=1-(p-r),m===1024?(n=dY(f)+(m<<20)|0,f=Lv(f,n)):f*=t,f-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=Lv(l,n),f=l-(p-r)):(n=qY-m<<20|0,l=Lv(l,n),f=r-(p+l),f+=1),f*=t,f))}bY.exports=nzr});var Fv=s((C8e,EY)=>{"use strict";var azr=wY();EY.exports=azr});var SY=s((G8e,OY)=>{"use strict";var NY=E(),AY=X(),szr=Fv(),uzr=R(),ozr=U(),vzr=r0();function fzr(r,e){var t;if(NY(r)||NY(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((AY(e*(r-1))<.5||AY(e)<.2)&&(t=uzr(r)*e,t<.5))return szr(t)}else if(vzr(e)!==e)return NaN;return ozr(r,e)-1}OY.exports=fzr});var IY=s((V8e,TY)=>{"use strict";var czr=SY();TY.exports=czr});var LY=s((U8e,_Y)=>{"use strict";function lzr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}_Y.exports=lzr});var RY=s((H8e,PY)=>{"use strict";function pzr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}PY.exports=pzr});var MY=s((W8e,FY)=>{"use strict";function gzr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}FY.exports=gzr});var kY=s((z8e,BY)=>{"use strict";var Mv=R(),mzr=Ut(),dzr=LY(),hzr=RY(),qzr=MY(),yzr=.15896368026733398,bzr=.5281534194946289,wzr=.45201730728149414;function Ezr(r,e,t){var i,n,a,u;if(r<mzr)return-Mv(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=Mv(r);while(r>=3);t=r-2}return a=t*(r+1),u=dzr(t),n+=a*yzr+a*u,n}return r<1&&(n+=-Mv(r),t=e,e=r,r+=1),r<=1.5?(a=hzr(e),i=e*t,n+=i*bzr+i*a,n):(a=t*e,u=qzr(-t),n+=a*wzr+a*u,n)}BY.exports=Ezr});var UY=s((D8e,VY)=>{"use strict";var jY=mi(),CY=Fv(),Nzr=Je(),Azr=E(),GY=kY();function Ozr(r){return Azr(r)?NaN:r<0?r<-.5?jY(1+r)-1:CY(-Nzr(r)+GY(r+2,r+1,r)):r<2?CY(GY(r+1,r,r-1)):jY(1+r)-1}VY.exports=Ozr});var WY=s((X8e,HY)=>{"use strict";var Szr=UY();HY.exports=Szr});var DY=s((J8e,zY)=>{"use strict";function Tzr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}zY.exports=Tzr});var JY=s((x8e,XY)=>{"use strict";var Izr=IY(),_zr=vu(),Lzr=WY(),Pzr=DY();function Rzr(r,e,t){var i,n,a,u,o;return n=Lzr(r),a=(n+1)/r,u=Izr(e,r),n-=u,n/=r,o=Pzr(r,e),u+=1,i=t?a:0,n=-u*_zr(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}XY.exports=Rzr});var Bv=s((Y8e,xY)=>{"use strict";var Fzr=11754943508222875e-54;xY.exports=Fzr});var ZY=s((Z8e,YY)=>{"use strict";var cu=X(),Zr=Bv(),Mzr=Ut(),Bzr=1e6;function kzr(r,e,t){var i,n,a,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],a=v[0],u===0&&(u=Zr),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=Zr),o=v[1]+v[0]/o,o===0&&(o=Zr),f=1/f,n=o*f,u*=n);while(cu(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=Zr),o=v[1]+v[0]/o,o===0&&(o=Zr),f=1/f,n=o*f,u*=n);while(v&&cu(n-1)>e&&--t);return a/u}function jzr(r,e,t){var i,n,a,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=Zr),u=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=Zr),u=f[1]+f[0]/u,u===0&&(u=Zr),o=1/o,n=u*o,a*=n);while(f&&cu(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=Zr),u=f[1]+f[0]/u,u===0&&(u=Zr),o=1/o,n=u*o,a*=n);while(f&&cu(n-1)>e&&--t);return a}function Czr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||Bzr,n=i.tolerance||Mzr,i.keep?jzr(r,n,t):kzr(r,n,t)}YY.exports=Czr});var KY=s(($8e,QY)=>{"use strict";var $Y=X(),Gzr=Ut(),Gi=Bv(),Vzr=1e6;function Uzr(r,e,t){var i,n,a,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=Gi),a=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=Gi),a=f[1]+f[0]/a,a===0&&(a=Gi),u=1/u,i=a*u,o*=i);while(f&&$Y(i-1)>e&&--t);return n/o}function Hzr(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=Gi),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=Gi),n=o[1]+o[0]/n,n===0&&(n=Gi),a=1/a,i=n*a,u*=i);while(o&&$Y(i-1)>e&&--t);return u}function Wzr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||Gzr,t=i.maxIter||Vzr,i.keep?Hzr(r,n,t):Uzr(r,n,t)}QY.exports=Wzr});var eZ=s((Q8e,rZ)=>{"use strict";var zzr=Ev(),Dzr=ZY(),Xzr=KY(),kv;zzr()?kv=Dzr:kv=Xzr;rZ.exports=kv});var iZ=s((K8e,tZ)=>{"use strict";function Jzr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}tZ.exports=Jzr});var aZ=s((r5e,nZ)=>{"use strict";var xzr=eZ(),Yzr=iZ();function Zzr(r,e){var t=Yzr(r,e);return 1/(e-r+1+xzr(t))}nZ.exports=Zzr});var mZ=s((e5e,gZ)=>{"use strict";var $zr=_n(),Qzr=J(),zn=mi(),sZ=X(),Kzr=ir(),uZ=U(),Wr=R(),rDr=b1(),oZ=qJ(),eDr=h1(),vZ=au(),tDr=_(),iDr=wJ(),nDr=DJ(),fZ=ZJ(),aDr=zx(),jv=xx(),cZ=cY(),sDr=JY(),lZ=aZ(),uDr=170;function pZ(r,e,t,i){var n,a,u,o,f,v,c,l,p,m,h,d,g,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=uDr&&!a)return l&&e*4<r?(p=e*Wr(r)-r,p+=Wr(lZ(e,r))):!l&&e>4*r?(p=e*Wr(r)-r,o=0,p+=Wr(jv(e,r,o)/e)):(p=pZ(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Wr(p)-e+(e-.5)*Wr(e),p+=Wr(eDr)):(p=e*Wr(r)-r,o=0,p+=Wr(jv(e,r,o)/e)):p=Wr(p)+$zr(e)),p>vZ?tDr:Kzr(p);switch(c=e<30&&e<=r+1&&r<vZ,c?(q=Qzr(e),m=q===e,f=m?!1:sZ(q-e)===.5):m=f=!1,m&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<rDr&&e>1?u=6:r<.5?-.4/Wr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,a&&e>20&&(h=sZ((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=iDr(e,r),a===!1&&(p*=zn(e));break;case 1:p=nDr(e,r),a===!1&&(p*=zn(e));break;case 2:p=a?cZ(e,r):fZ(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:zn(e),a||p>=1||oZ*p>o?(o/=p,a||e<1||oZ/e>o?(o*=-e,n=!0):o=0):o=0)),p*=jv(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=sDr(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?cZ(e,r):fZ(e,r),p!==0&&(p*=lZ(e,r));break;case 5:p=aDr(e,r),r>=e&&(l=!l);break;case 6:p=a?uZ(r,e)/zn(e+1):uZ(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:zn(e),p=d-p),p}gZ.exports=pZ});var Cv=s((t5e,dZ)=>{"use strict";var oDr=mZ();dZ.exports=oDr});var qZ=s((i5e,hZ)=>{"use strict";var vDr=Cv(),Gv=E(),fDr=_();function cDr(r,e,t){return Gv(r)||Gv(e)||Gv(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===fDr?1:vDr(r*t,e)}hZ.exports=cDr});var wZ=s((n5e,bZ)=>{"use strict";var lDr=S(),pDr=k0().factory,gDr=Cv(),yZ=E(),mDr=_();function dDr(r,e){if(yZ(r)||yZ(e)||r<0||e<=0)return lDr(NaN);if(r===0)return pDr(0);return t;function t(i){return i<=0?0:i===mDr?1:gDr(i*e,r)}}bZ.exports=dDr});var Vv=s((a5e,NZ)=>{"use strict";var hDr=w(),EZ=qZ(),qDr=wZ();hDr(EZ,"factory",qDr);NZ.exports=EZ});var OZ=s((s5e,AZ)=>{"use strict";var yDr=Vv();function bDr(r,e){return yDr(r,e/2,.5)}AZ.exports=bDr});var TZ=s((u5e,SZ)=>{"use strict";var wDr=Vv().factory;function EDr(r){return wDr(r/2,.5)}SZ.exports=EDr});var LZ=s((o5e,_Z)=>{"use strict";var NDr=w(),IZ=OZ(),ADr=TZ();NDr(IZ,"factory",ADr);_Z.exports=IZ});var MZ=s((v5e,FZ)=>{"use strict";var ODr=I(),SDr=O(),TDr=ha(),PZ=y(),RZ=["values","indices","*"];function IDr(r,e){return ODr(e)?SDr(e,"returns")&&(r.returns=e.returns,TDr(RZ,r.returns)===-1)?new TypeError(PZ('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",RZ.join('", "'),r.returns)):null:new TypeError(PZ("invalid argument. Options argument must be an object. Value: `%s`.",e))}FZ.exports=IDr});var kZ=s((f5e,BZ)=>{"use strict";var _Dr=O();function LDr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),_Dr(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}BZ.exports=LDr});var CZ=s((c5e,jZ)=>{"use strict";var PDr=O();function RDr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),PDr(t,n)?t[n].push(a):t[n]=[a];return t}jZ.exports=RDr});var VZ=s((l5e,GZ)=>{"use strict";var FDr=O();function MDr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),FDr(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}GZ.exports=MDr});var zZ=s((p5e,WZ)=>{"use strict";var UZ=jr(),HZ=y(),BDr=MZ(),kDr=kZ(),jDr=CZ(),CDr=VZ();function GDr(r,e,t){var i,n,a;if(!UZ(r))throw new TypeError(HZ("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=BDr(i,e),n)throw n;a=t}if(!UZ(a))throw new TypeError(HZ("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?kDr(r,a):i.returns==="indices"?jDr(r,a):CDr(r,a)}WZ.exports=GDr});var XZ=s((g5e,DZ)=>{"use strict";var VDr=zZ();DZ.exports=VDr});var xZ=s((m5e,JZ)=>{"use strict";function UDr(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}JZ.exports=UDr});var $Z=s((d5e,ZZ)=>{"use strict";var HDr=cr(),WDr=j().isPrimitive,zDr=I(),DDr=sr(),YZ=O(),Uv=y();function XDr(r,e){return zDr(e)?YZ(e,"alpha")&&(r.alpha=e.alpha,!WDr(r.alpha)||DDr(r.alpha))?new TypeError(Uv("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):YZ(e,"groups")&&(r.groups=e.groups,!HDr(r.groups))?new TypeError(Uv("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(Uv("invalid argument. Options argument must be an object. Value: `%s`.",e))}ZZ.exports=XDr});var n$=s((h5e,i$)=>{"use strict";var QZ=E(),lu=Lr(),KZ=U(),JDr=X(),r$=r1(),xDr=gi(),e$=Ma(),YDr=H2(),ZDr=Ba(),$Dr=xDr+1,t$=1e308;function QDr(r,e){var t,i;return QZ(r)||QZ(e)||lu(e)?NaN:lu(r)||r===0||e<ZDr||JDr(r)>$Dr&&e<=0?r:e>e$?0*r:e<YDr?(t=KZ(10,-(e+e$)),i=r*t$*t,lu(i)?r:r$(i)/t$/t):(t=KZ(10,-e),i=r*t,lu(i)?r:r$(i)/t)}i$.exports=QDr});var s$=s((q5e,a$)=>{"use strict";var KDr=n$();a$.exports=KDr});var v$=s((y5e,o$)=>{"use strict";var rXr=re(),eXr=I(),tXr=fr().isPrimitive,u$=O(),Hv=y(),Wv=s$();function iXr(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!eXr(r))throw new TypeError(Hv("invalid argument. First argument must be an object. Value: `%s`.",r));if(u$(r,"digits")){if(!rXr(r.digits))throw new TypeError(Hv("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(u$(r,"decision")){if(!tXr(r.decision))throw new TypeError(Hv("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+Wv(this.pValue,-t)+`
`,i+="    statistic: "+Wv(this.statistic,-t)+`
`,i+="    df: "+Wv(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}o$.exports=iXr});var l$=s((b5e,c$)=>{"use strict";var nXr=jr(),aXr=I(),Ht=nr(),sXr=an(),pu=y(),uXr=LZ(),oXr=XZ(),f$=R(),vXr=xZ(),fXr=$Z(),cXr=v$();function lXr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A;if(f=[],e=arguments.length,v={},aXr(arguments[e-1])&&(r=arguments[e-1],e-=1,m=fXr(v,r),m))throw m;if(v.groups){if(n=oXr(arguments[0],v.groups),i=sXr(n),e=i.length,e<2)throw new Error(pu("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)f.push(n[i[A]])}else for(A=0;A<e;A++)f.push(arguments[A]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),A=0;A<e;A++){if(p=f[A],!nXr(p))throw new TypeError(pu("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(pu("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[A]=p.length-1,u+=q[A],t+=1/q[A],N[A]=vXr(p),o+=q[A]*N[A],h+=q[A]*f$(N[A])}if(o/=u,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(pu("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*f$(o)-h,l/=1+(t-1/u)/(3*(e-1)),g=e-1,c=1-uXr(l,g),d={},Ht(d,"rejected",c<=a),Ht(d,"alpha",a),Ht(d,"pValue",c),Ht(d,"statistic",l),Ht(d,"df",g),Ht(d,"method","Bartlett's test of equal variances"),Ht(d,"print",cXr),d}c$.exports=lXr});var g$=s((w5e,p$)=>{"use strict";var pXr=l$();p$.exports=pXr});var d$=s((E5e,m$)=>{"use strict";var zv=E(),gXr=Ze();function mXr(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,v=1,zv(a)===!1)for(v;v<r;v++){if(u+=t,f=e[u],zv(f)){a=f;break}(f>a||f===a&&gXr(f))&&(a=f),i[o]=a,o+=n}if(zv(a))for(v;v<r;v++)i[o]=a,o+=n;return i}m$.exports=mXr});var q$=s((N5e,h$)=>{"use strict";var Dv=E(),dXr=Ze();function hXr(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=a,l=1,Dv(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],Dv(c)){o=c;break}(c>o||c===o&&dXr(c))&&(o=c),n[v]=o,v+=a}if(Dv(o))for(l;l<r;l++)n[v]=o,v+=a;return n}h$.exports=hXr});var w$=s((A5e,b$)=>{"use strict";var qXr=w(),y$=d$(),yXr=q$();qXr(y$,"ndarray",yXr);b$.exports=y$});var N$=s((O5e,E$)=>{"use strict";var bXr=w$();E$.exports=bXr});var O$=s((S5e,A$)=>{"use strict";var wXr=E(),EXr=Ze();function NXr(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],wXr(a))return a;(a>i||a===i&&EXr(a))&&(i=a)}return i}A$.exports=NXr});var T$=s((T5e,S$)=>{"use strict";var AXr=E(),OXr=Ze();function SXr(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],AXr(u))return u;(u>n||u===n&&OXr(u))&&(n=u)}return n}S$.exports=SXr});var L$=s((I5e,_$)=>{"use strict";var TXr=w(),I$=O$(),IXr=T$();TXr(I$,"ndarray",IXr);_$.exports=I$});var R$=s((_5e,P$)=>{"use strict";var _Xr=L$();P$.exports=_Xr});var B$=s((L5e,M$)=>{"use strict";var F$=E(),LXr=Ze();function PXr(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(a=e[u],F$(a))return a;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],F$(f))return f;(f>a||f===a&&LXr(f))&&(a=f)}return a}M$.exports=PXr});var C$=s((P5e,j$)=>{"use strict";var k$=E(),RXr=Ze();function FXr(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],k$(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],k$(c))return c;(c>o||c===o&&RXr(c))&&(o=c)}return o}j$.exports=FXr});var U$=s((R5e,V$)=>{"use strict";var MXr=w(),G$=B$(),BXr=C$();MXr(G$,"ndarray",BXr);V$.exports=G$});var W$=s((F5e,H$)=>{"use strict";var kXr=Vt(),jXr=V(),Xv=E();function CXr(r,e,t){var i,n;return Xv(r)||Xv(e)||Xv(t)||t<0?NaN:t===0?r<e?0:1:(i=t*jXr(2),n=r-e,.5*kXr(-n/i))}H$.exports=CXr});var D$=s((M5e,z$)=>{"use strict";var GXr=S(),VXr=k0().factory,Jv=E(),UXr=V(),HXr=Vt();function WXr(r,e){var t;if(Jv(r)||Jv(e)||e<0)return GXr(NaN);if(e===0)return VXr(r);return t=e*UXr(2),i;function i(n){var a;return Jv(n)?NaN:(a=n-r,.5*HXr(-a/t))}}z$.exports=WXr});var x$=s((B5e,J$)=>{"use strict";var zXr=w(),X$=W$(),DXr=D$();zXr(X$,"factory",DXr);J$.exports=X$});var $$=s((k5e,Z$)=>{"use strict";var Y$=E(),XXr=R(),JXr=Ye(),xXr=Sv();function YXr(r,e){return Y$(r)||Y$(e)||e<=0?NaN:.5*XXr(JXr*xXr*e*e)}Z$.exports=YXr});var K$=s((j5e,Q$)=>{"use strict";var ZXr=$$();Q$.exports=ZXr});var tQ=s((C5e,eQ)=>{"use strict";var rQ=E();function $Xr(r,e){return rQ(r)||rQ(e)||e<=0?NaN:0}eQ.exports=$Xr});var nQ=s((G5e,iQ)=>{"use strict";var QXr=tQ();iQ.exports=QXr});var sQ=s((V5e,aQ)=>{"use strict";var KXr=J(),rJr=[eJr,tJr,iJr,nJr,aJr,sJr,uJr,oJr,vJr,fJr,cJr,lJr,pJr,gJr,mJr,dJr,hJr,qJr,yJr,bJr,wJr,EJr,NJr,AJr,OJr,SJr,TJr,IJr,_Jr,LJr,PJr,RJr,FJr,MJr,BJr,kJr,jJr,CJr,GJr,VJr,UJr,HJr,WJr,zJr,DJr,XJr,JJr,xJr,YJr,ZJr,$Jr,QJr,KJr,rxr,exr,txr,ixr,nxr,axr,sxr,uxr,oxr,vxr,fxr,cxr,lxr,pxr,gxr,mxr,dxr,hxr,qxr,yxr,bxr,wxr,Exr,Nxr,Axr,Oxr,Sxr,Txr,Ixr,_xr,Lxr,Pxr,Rxr,Fxr,Mxr,Bxr,kxr,jxr,Cxr,Gxr,Vxr,Uxr,Hxr,Wxr,zxr,Dxr,Xxr,Jxr];function eJr(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function tJr(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function iJr(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function nJr(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function aJr(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function sJr(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function uJr(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function oJr(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function vJr(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function fJr(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function cJr(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function lJr(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function pJr(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function gJr(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function mJr(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function dJr(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function hJr(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function qJr(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function yJr(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function bJr(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function wJr(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function EJr(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function NJr(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function AJr(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function OJr(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function SJr(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function TJr(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function IJr(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function _Jr(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function LJr(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function PJr(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function RJr(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function FJr(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function MJr(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function BJr(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function kJr(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function jJr(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function CJr(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function GJr(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function VJr(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function UJr(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function HJr(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function WJr(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function zJr(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function DJr(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function XJr(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function JJr(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function xJr(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function YJr(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function ZJr(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function $Jr(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function QJr(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function KJr(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function rxr(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function exr(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function txr(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function ixr(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function nxr(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function axr(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function sxr(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function uxr(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function oxr(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function vxr(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function fxr(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function cxr(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function lxr(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function pxr(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function gxr(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function mxr(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function dxr(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function hxr(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function qxr(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function yxr(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function bxr(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function wxr(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function Exr(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function Nxr(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function Axr(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function Oxr(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function Sxr(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function Txr(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function Ixr(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function _xr(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function Lxr(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function Pxr(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function Rxr(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function Fxr(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function Mxr(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function Bxr(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function kxr(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function jxr(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function Cxr(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function Gxr(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function Vxr(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function Uxr(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function Hxr(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function Wxr(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function zxr(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function Dxr(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function Xxr(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function Jxr(){return 1}function xxr(r){var e=KXr(r),t=rJr[e];return t(2*r-(2*e+1))}aQ.exports=xxr});var cQ=s((U5e,fQ)=>{"use strict";var uQ=ir(),Yxr=_(),oQ=sQ(),vQ=.5641895835477563;function Zxr(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?vQ/r:(e=r*r,vQ*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):oQ(400/(4+r)):r<-26.7?Yxr:(e=r*r,r<-6.1?2*uQ(e):2*uQ(e)-oQ(400/(4-r)))}fQ.exports=Zxr});var xv=s((H5e,lQ)=>{"use strict";var $xr=cQ();lQ.exports=$xr});var mQ=s((W5e,gQ)=>{"use strict";var Qxr=R(),Kxr=Je(),rYr=Ga(),eYr=Vt(),tYr=xv(),iYr=G(),Yv=E(),pQ=.7071067811865475;function nYr(r,e,t){var i;return Yv(r)||Yv(e)||Yv(t)||t<0?NaN:t===0?r<e?iYr:0:(i=(r-e)/t,i<-1?Qxr(tYr(-i*pQ)/2)-rYr(i)/2:Kxr(-eYr(i*pQ)/2))}gQ.exports=nYr});var qQ=s((z5e,hQ)=>{"use strict";var dQ=E(),aYr=G();function sYr(r,e){return dQ(r)||dQ(e)?NaN:r<e?aYr:0}hQ.exports=sYr});var wQ=s((D5e,bQ)=>{"use strict";var uYr=S(),yQ=E(),oYr=G();function vYr(r){if(yQ(r))return uYr(NaN);return e;function e(t){return yQ(t)?NaN:t<r?oYr:0}}bQ.exports=vYr});var AQ=s((X5e,NQ)=>{"use strict";var fYr=w(),EQ=qQ(),cYr=wQ();fYr(EQ,"factory",cYr);NQ.exports=EQ});var IQ=s((J5e,TQ)=>{"use strict";var lYr=S(),pYr=AQ().factory,OQ=E(),gYr=Je(),mYr=Ga(),dYr=Vt(),hYr=xv(),qYr=R(),SQ=.7071067811865475;function yYr(r,e){if(OQ(r)||OQ(e)||e<0)return lYr(NaN);if(e===0)return pYr(r);return t;function t(i){var n=(i-r)/e;return n<-1?qYr(hYr(-n*SQ)/2)-mYr(n)/2:gYr(-dYr(n*SQ)/2)}}TQ.exports=yYr});var PQ=s((x5e,LQ)=>{"use strict";var bYr=w(),_Q=mQ(),wYr=IQ();bYr(_Q,"factory",wYr);LQ.exports=_Q});var Zv=s((Y5e,RQ)=>{"use strict";var EYr=1.8378770664093456;RQ.exports=EYr});var BQ=s((Z5e,MQ)=>{"use strict";var NYr=R(),FQ=U(),AYr=Zv(),OYr=G(),SYr=_(),$v=E();function TYr(r,e,t){var i,n,a;return $v(r)||$v(e)||$v(t)||t<0?NaN:t===0?r===e?SYr:OYr:(i=FQ(t,2),n=-.5*(2*NYr(t)+AYr),a=-1/(2*i),n+a*FQ(r-e,2))}MQ.exports=TYr});var CQ=s(($5e,jQ)=>{"use strict";var IYr=_(),_Yr=G(),kQ=E();function LYr(r,e){return kQ(r)||kQ(e)?NaN:r===e?IYr:_Yr}jQ.exports=LYr});var UQ=s((Q5e,VQ)=>{"use strict";var PYr=S(),RYr=_(),FYr=G(),GQ=E();function MYr(r){if(GQ(r))return PYr(NaN);return e;function e(t){return GQ(t)?NaN:t===r?RYr:FYr}}VQ.exports=MYr});var zQ=s((K5e,WQ)=>{"use strict";var BYr=w(),HQ=CQ(),kYr=UQ();BYr(HQ,"factory",kYr);WQ.exports=HQ});var xQ=s((rpe,JQ)=>{"use strict";var jYr=S(),CYr=zQ().factory,GYr=Zv(),DQ=E(),XQ=U(),VYr=R();function UYr(r,e){var t,i,n;if(DQ(r)||DQ(e)||e<0)return jYr(NaN);if(e===0)return CYr(r);return t=XQ(e,2),i=-.5*(2*VYr(e)+GYr),n=-1/(2*t),a;function a(u){return i+n*XQ(u-r,2)}}JQ.exports=UYr});var $Q=s((epe,ZQ)=>{"use strict";var HYr=w(),YQ=BQ(),WYr=xQ();HYr(YQ,"factory",WYr);ZQ.exports=YQ});var rK=s((tpe,KQ)=>{"use strict";var QQ=E();function zYr(r,e){return QQ(r)||QQ(e)||e<=0?NaN:r}KQ.exports=zYr});var tK=s((ipe,eK)=>{"use strict";var DYr=rK();eK.exports=DYr});var aK=s((npe,nK)=>{"use strict";var iK=E();function XYr(r,e){return iK(r)||iK(e)||e<=0?NaN:r}nK.exports=XYr});var uK=s((ape,sK)=>{"use strict";var JYr=aK();sK.exports=JYr});var vK=s((spe,oK)=>{"use strict";var Qv=E(),xYr=ir(),YYr=U();function ZYr(r,e,t){return Qv(r)||Qv(e)||Qv(t)||t<=0?NaN:xYr(e*r+.5*YYr(t*r,2))}oK.exports=ZYr});var cK=s((upe,fK)=>{"use strict";var $Yr=S(),Kv=E(),QYr=ir(),KYr=U();function rZr(r,e){if(Kv(r)||Kv(e)||e<=0)return $Yr(NaN);return t;function t(i){return Kv(i)?NaN:QYr(r*i+.5*KYr(e*i,2))}}fK.exports=rZr});var gK=s((ope,pK)=>{"use strict";var eZr=w(),lK=vK(),tZr=cK();eZr(lK,"factory",tZr);pK.exports=lK});var hK=s((vpe,dK)=>{"use strict";var mK=E();function iZr(r,e){return mK(r)||mK(e)||e<=0?NaN:r}dK.exports=iZr});var yK=s((fpe,qK)=>{"use strict";var nZr=hK();qK.exports=nZr});var EK=s((cpe,wK)=>{"use strict";var aZr=ir(),bK=U(),sZr=V(),uZr=Ye(),oZr=_(),rf=E();function vZr(r,e,t){var i,n,a;return rf(r)||rf(e)||rf(t)||t<0?NaN:t===0?r===e?oZr:0:(i=bK(t,2),n=1/sZr(i*uZr),a=-1/(2*i),n*aZr(a*bK(r-e,2)))}wK.exports=vZr});var OK=s((lpe,AK)=>{"use strict";var fZr=_(),NK=E();function cZr(r,e){return NK(r)||NK(e)?NaN:r===e?fZr:0}AK.exports=cZr});var IK=s((ppe,TK)=>{"use strict";var lZr=S(),pZr=_(),SK=E();function gZr(r){if(SK(r))return lZr(NaN);return e;function e(t){return SK(t)?NaN:t===r?pZr:0}}TK.exports=gZr});var PK=s((gpe,LK)=>{"use strict";var mZr=w(),_K=OK(),dZr=IK();mZr(_K,"factory",dZr);LK.exports=_K});var MK=s((mpe,FK)=>{"use strict";var hZr=S(),qZr=PK().factory,ef=E(),yZr=V(),bZr=ir(),RK=U(),wZr=Ye();function EZr(r,e){var t,i,n;if(ef(r)||ef(e)||e<0)return hZr(NaN);if(e===0)return qZr(r);return t=RK(e,2),i=1/yZr(t*wZr),n=-1/(2*t),a;function a(u){return ef(u)?NaN:i*bZr(n*RK(u-r,2))}}FK.exports=EZr});var jK=s((dpe,kK)=>{"use strict";var NZr=w(),BK=EK(),AZr=MK();NZr(BK,"factory",AZr);kK.exports=BK});var VK=s((hpe,GK)=>{"use strict";var CK=E();function OZr(r,e){return CK(r)||CK(e)||e<=0?NaN:0}GK.exports=OZr});var HK=s((qpe,UK)=>{"use strict";var SZr=VK();UK.exports=SZr});var DK=s((ype,zK)=>{"use strict";var WK=E();function TZr(r,e){return WK(r)||WK(e)||e<=0?NaN:e}zK.exports=TZr});var JK=s((bpe,XK)=>{"use strict";var IZr=DK();XK.exports=IZr});var ZK=s((wpe,YK)=>{"use strict";var xK=E();function _Zr(r,e){return xK(r)||xK(e)||e<=0?NaN:e*e}YK.exports=_Zr});var QK=s((Epe,$K)=>{"use strict";var LZr=ZK();$K.exports=LZr});var rrr=s((Npe,KK)=>{"use strict";var Sr=nr(),PZr=x$(),RZr=K$(),FZr=nQ(),MZr=PQ(),BZr=$Q(),kZr=tK(),jZr=uK(),CZr=gK(),GZr=yK(),VZr=jK(),UZr=V3(),HZr=HK(),WZr=JK(),zZr=QK();function DZr(r){return Sr(r,"cdf",PZr),Sr(r,"entropy",RZr),Sr(r,"kurtosis",FZr),Sr(r,"logcdf",MZr),Sr(r,"logpdf",BZr),Sr(r,"mean",kZr),Sr(r,"median",jZr),Sr(r,"mgf",CZr),Sr(r,"mode",GZr),Sr(r,"pdf",VZr),Sr(r,"quantile",UZr),Sr(r,"skewness",HZr),Sr(r,"stdev",WZr),Sr(r,"variance",zZr),r}KK.exports=DZr});var trr=s((Ape,err)=>{"use strict";var XZr=nr(),JZr=rrr();function xZr(r){return XZr(r,"normal",JZr({})),r}err.exports=xZr});var nrr=s((Ope,irr)=>{"use strict";var Dn=nr(),YZr=g$(),ZZr=N$().ndarray,$Zr=R$().ndarray,QZr=U$().ndarray,KZr=trr();function r$r(r){return Dn(r,"bartlettTest",YZr),Dn(r,"cumax",ZZr),Dn(r,"max",$Zr),Dn(r,"mskmax",QZr),Dn(r,"dists",KZr({})),r}irr.exports=r$r});var srr=s((Spe,arr)=>{"use strict";var e$r=rr().isPrimitive,t$r=y();function i$r(r){return e;function e(t){if(!e$r(t))throw new TypeError(t$r("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}arr.exports=i$r});var orr=s((Tpe,urr)=>{"use strict";var n$r=srr();urr.exports=n$r});var lrr=s((Ipe,crr)=>{"use strict";var vrr=rr().isPrimitive,frr=y();function a$r(r){return e;function e(t,i){if(!vrr(t))throw new TypeError(frr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!vrr(i))throw new TypeError(frr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}crr.exports=a$r});var grr=s((_pe,prr)=>{"use strict";var s$r=lrr();prr.exports=s$r});var drr=s((Lpe,mrr)=>{"use strict";var tf=rr().isPrimitive,nf=y();function u$r(r){return e;function e(t,i,n){if(!tf(t))throw new TypeError(nf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!tf(i))throw new TypeError(nf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!tf(n))throw new TypeError(nf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}mrr.exports=u$r});var qrr=s((Ppe,hrr)=>{"use strict";var o$r=drr();hrr.exports=o$r});var brr=s((Rpe,yrr)=>{"use strict";var af=nr(),v$r=orr(),f$r=grr(),c$r=qrr();function l$r(r){return af(r,"s_o",v$r),af(r,"ss_o",f$r),af(r,"sss_o",c$r),r}yrr.exports=l$r});var Err=s((Fpe,wrr)=>{"use strict";function p$r(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}wrr.exports=p$r});var gu=s((Mpe,Nrr)=>{"use strict";var g$r=Err();Nrr.exports=g$r});var Orr=s((Bpe,Arr)=>{"use strict";function m$r(r){return r.toLowerCase()}Arr.exports=m$r});var Vi=s((kpe,Srr)=>{"use strict";var d$r=Orr();Srr.exports=d$r});var Irr=s((jpe,Trr)=>{"use strict";function h$r(r,e,t){return r.replace(e,t)}Trr.exports=h$r});var Wt=s((Cpe,_rr)=>{"use strict";var q$r=Irr();_rr.exports=q$r});var Prr=s((Gpe,Lrr)=>{"use strict";var y$r=typeof String.prototype.trim<"u";Lrr.exports=y$r});var sf=s((Vpe,Rrr)=>{"use strict";var b$r=String.prototype.trim;Rrr.exports=b$r});var krr=s((Upe,Brr)=>{"use strict";var Frr=sf(),w$r=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,Mrr="\u180E";function E$r(){return Frr.call(w$r)===""&&Frr.call(Mrr)===Mrr}Brr.exports=E$r});var Crr=s((Hpe,jrr)=>{"use strict";var N$r=Wt(),A$r=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function O$r(r){return N$r(r,A$r,"$1")}jrr.exports=O$r});var Vrr=s((Wpe,Grr)=>{"use strict";var S$r=sf();function T$r(r){return S$r.call(r)}Grr.exports=T$r});var Ui=s((zpe,Urr)=>{"use strict";var I$r=Prr(),_$r=krr(),L$r=Crr(),P$r=Vrr(),uf;I$r&&_$r()?uf=P$r:uf=L$r;Urr.exports=uf});var Wrr=s((Dpe,Hrr)=>{"use strict";var R$r=gu(),F$r=Vi(),mu=Wt(),M$r=Ui(),B$r=/\s+/g,k$r=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,j$r=/(?:\s|^)([^\s]+)(?=\s|$)/g,C$r=/([a-z0-9])([A-Z])/g;function G$r(r,e,t){return e=F$r(e),t===0?e:R$r(e)}function V$r(r){return r=mu(r,k$r," "),r=mu(r,B$r," "),r=mu(r,C$r,"$1 $2"),r=M$r(r),mu(r,j$r,G$r)}Hrr.exports=V$r});var Drr=s((Xpe,zrr)=>{"use strict";var U$r=Wrr();zrr.exports=U$r});var Jrr=s((Jpe,Xrr)=>{"use strict";var H$r=rr().isPrimitive,W$r=y(),z$r=Drr();function D$r(r){if(!H$r(r))throw new TypeError(W$r("invalid argument. First argument must be a string. Value: `%s`.",r));return z$r(r)}Xrr.exports=D$r});var Yrr=s((xpe,xrr)=>{"use strict";var X$r=Jrr();xrr.exports=X$r});var $rr=s((Ype,Zrr)=>{"use strict";var J$r=rr().isPrimitive,x$r=y(),Y$r=gu();function Z$r(r){if(!J$r(r))throw new TypeError(x$r("invalid argument. First argument must be a string. Value: `%s`.",r));return Y$r(r)}Zrr.exports=Z$r});var Krr=s((Zpe,Qrr)=>{"use strict";var $$r=$rr();Qrr.exports=$$r});var eer=s(($pe,rer)=>{"use strict";function Q$r(r){return r.toUpperCase()}rer.exports=Q$r});var ier=s((Qpe,ter)=>{"use strict";var K$r=eer();ter.exports=K$r});var aer=s((Kpe,ner)=>{"use strict";var rQr=ier(),of=Wt(),eQr=Ui(),tQr=/\s+/g,iQr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,nQr=/([a-z0-9])([A-Z])/g;function aQr(r){return r=of(r,iQr," "),r=of(r,nQr,"$1 $2"),r=eQr(r),r=of(r,tQr,"_"),rQr(r)}ner.exports=aQr});var uer=s((r7e,ser)=>{"use strict";var sQr=aer();ser.exports=sQr});var ver=s((e7e,oer)=>{"use strict";var uQr=rr().isPrimitive,oQr=y(),vQr=uer();function fQr(r){if(!uQr(r))throw new TypeError(oQr("invalid argument. Must provide a string. Value: `%s`.",r));return vQr(r)}oer.exports=fQr});var cer=s((t7e,fer)=>{"use strict";var cQr=ver();fer.exports=cQr});var per=s((i7e,ler)=>{"use strict";var lQr=Vi(),vf=Wt(),pQr=Ui(),gQr=/\s+/g,mQr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,dQr=/([a-z0-9])([A-Z])/g;function hQr(r){return r=vf(r,mQr," "),r=vf(r,dQr,"$1 $2"),r=pQr(r),r=vf(r,gQr,"-"),lQr(r)}ler.exports=hQr});var mer=s((n7e,ger)=>{"use strict";var qQr=per();ger.exports=qQr});var her=s((a7e,der)=>{"use strict";var yQr=rr().isPrimitive,bQr=y(),wQr=mer();function EQr(r){if(!yQr(r))throw new TypeError(bQr("invalid argument. Must provide a string. Value: `%s`.",r));return wQr(r)}der.exports=EQr});var yer=s((s7e,qer)=>{"use strict";var NQr=her();qer.exports=NQr});var wer=s((u7e,ber)=>{"use strict";var AQr=rr().isPrimitive,OQr=y(),SQr=Vi();function TQr(r){if(!AQr(r))throw new TypeError(OQr("invalid argument. Must provide a string. Value: `%s`.",r));return SQr(r)}ber.exports=TQr});var Ner=s((o7e,Eer)=>{"use strict";var IQr=wer();Eer.exports=IQr});var Oer=s((v7e,Aer)=>{"use strict";var _Qr=gu(),LQr=Vi(),du=Wt(),PQr=Ui(),RQr=/\s+/g,FQr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,MQr=/(?:\s|^)([^\s]+)(?=\s|$)/g,BQr=/([a-z0-9])([A-Z])/g;function kQr(r,e){return _Qr(LQr(e))}function jQr(r){return r=du(r,FQr," "),r=du(r,RQr," "),r=du(r,BQr,"$1 $2"),r=PQr(r),du(r,MQr,kQr)}Aer.exports=jQr});var Ter=s((f7e,Ser)=>{"use strict";var CQr=Oer();Ser.exports=CQr});var _er=s((c7e,Ier)=>{"use strict";var GQr=rr().isPrimitive,VQr=y(),UQr=Ter();function HQr(r){if(!GQr(r))throw new TypeError(VQr("invalid argument. First argument must be a string. Value: `%s`.",r));return UQr(r)}Ier.exports=HQr});var Per=s((l7e,Ler)=>{"use strict";var WQr=_er();Ler.exports=WQr});var Fer=s((p7e,Rer)=>{"use strict";var zQr=Vi(),ff=Wt(),DQr=Ui(),XQr=/\s+/g,JQr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,xQr=/([a-z0-9])([A-Z])/g;function YQr(r){return r=ff(r,JQr," "),r=ff(r,xQr,"$1 $2"),r=DQr(r),r=ff(r,XQr,"_"),zQr(r)}Rer.exports=YQr});var Ber=s((g7e,Mer)=>{"use strict";var ZQr=Fer();Mer.exports=ZQr});var jer=s((m7e,ker)=>{"use strict";var $Qr=rr().isPrimitive,QQr=y(),KQr=Ber();function rKr(r){if(!$Qr(r))throw new TypeError(QQr("invalid argument. Must provide a string. Value: `%s`.",r));return KQr(r)}ker.exports=rKr});var Ger=s((d7e,Cer)=>{"use strict";var eKr=jer();Cer.exports=eKr});var Her=s((h7e,Uer)=>{"use strict";var tKr=I(),Ver=O(),iKr=fr().isPrimitive,nKr=rr().isPrimitive,cf=y();function aKr(r,e){return tKr(e)?Ver(e,"flags")&&(r.flags=e.flags,!nKr(r.flags))?new TypeError(cf("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):Ver(e,"capture")&&(r.capture=e.capture,!iKr(r.capture))?new TypeError(cf("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(cf("invalid argument. Options argument must be an object. Value: `%s`.",e))}Uer.exports=aKr});var hu=s((q7e,zer)=>{"use strict";var sKr=Her(),Wer=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function uKr(r){var e,t;if(arguments.length>0){if(e={},t=sKr(e,r),t)throw t;return e.capture?new RegExp("("+Wer+")",e.flags):new RegExp(Wer,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}zer.exports=uKr});var Xer=s((y7e,Der)=>{"use strict";var oKr=hu(),vKr=oKr({capture:!0});Der.exports=vKr});var xer=s((b7e,Jer)=>{"use strict";var fKr=hu(),cKr=fKr();Jer.exports=cKr});var $er=s((w7e,Zer)=>{"use strict";var Yer=w(),lf=hu(),lKr=Xer(),pKr=xer();Yer(lf,"REGEXP",pKr);Yer(lf,"REGEXP_CAPTURE",lKr);Zer.exports=lf});var Ker=s((E7e,Qer)=>{"use strict";var gKr=$er().REGEXP;function mKr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),gKr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}Qer.exports=mKr});var etr=s((N7e,rtr)=>{"use strict";var dKr=Ker();rtr.exports=dKr});var itr=s((A7e,ttr)=>{"use strict";var hKr=rr().isPrimitive,qKr=y(),yKr=etr();function bKr(r){if(!hKr(r))throw new TypeError(qKr("invalid argument. Must provide a string. Value: `%s`.",r));return yKr(r)}ttr.exports=bKr});var atr=s((O7e,ntr)=>{"use strict";var wKr=itr();ntr.exports=wKr});var utr=s((S7e,str)=>{"use strict";function EKr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}str.exports=EKr});var vtr=s((T7e,otr)=>{"use strict";var NKr=utr();otr.exports=NKr});var ctr=s((I7e,ftr)=>{"use strict";var AKr=rr().isPrimitive,OKr=y(),SKr=vtr();function TKr(r){if(!AKr(r))throw new TypeError(OKr("invalid argument. First argument must be a string. Value: `%s`.",r));return SKr(r)}ftr.exports=TKr});var ptr=s((_7e,ltr)=>{"use strict";var IKr=ctr();ltr.exports=IKr});var mtr=s((L7e,gtr)=>{"use strict";var _Kr=rr().isPrimitive,LKr=y();function PKr(r){if(!_Kr(r))throw new TypeError(LKr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}gtr.exports=PKr});var htr=s((P7e,dtr)=>{"use strict";var RKr=mtr();dtr.exports=RKr});var ytr=s((R7e,qtr)=>{"use strict";var $r=nr(),FKr=Yrr(),MKr=Krr(),BKr=cer(),kKr=yer(),jKr=Ner(),CKr=Per(),GKr=Ger(),VKr=atr(),UKr=ptr(),HKr=htr();function WKr(r){return $r(r,"camelcase",FKr),$r(r,"capitalize",MKr),$r(r,"constantcase",BKr),$r(r,"kebabcase",kKr),$r(r,"lowercase",jKr),$r(r,"pascalcase",CKr),$r(r,"snakecase",GKr),$r(r,"startcase",VKr),$r(r,"uncapitalize",UKr),$r(r,"uppercase",HKr),r}qtr.exports=WKr});var wtr=s((F7e,btr)=>{"use strict";var zKr=nr(),DKr=brr(),XKr=ytr();function JKr(r){return zKr(r,"tools",DKr({})),r=XKr(r),r}btr.exports=JKr});var Ntr=s((M7e,Etr)=>{"use strict";var ke=nr(),xKr=jm(),YKr=hq(),ZKr=Sq(),$Kr=Nw(),QKr=qP(),KKr=sJ(),rre=dJ(),ere=nrr(),tre=wtr();function ire(){var r={};return ke(r,"array",xKr({})),ke(r,"assert",YKr({})),ke(r,"blas",ZKr({})),ke(r,"datasets",$Kr({})),ke(r,"math",QKr({})),ke(r,"random",KKr({})),ke(r,"simulate",rre({})),ke(r,"stats",ere({})),ke(r,"string",tre({})),r}Etr.exports=ire});var Otr=s((B7e,Atr)=>{"use strict";var nre=w(),pf=Ntr();nre(pf,"CACHED",pf());Atr.exports=pf});var sre=s((k7e,Str)=>{var are=Otr().CACHED;Str.exports=are});return sre();})();
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
