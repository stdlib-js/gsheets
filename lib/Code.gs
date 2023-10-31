/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var q4=s((Fre,h4)=>{"use strict";var Ctr=typeof Object.defineProperty=="function"?Object.defineProperty:null;h4.exports=Ctr});var b4=s((Mre,y4)=>{"use strict";var Gtr=q4();function Vtr(){try{return Gtr({},"x",{}),!0}catch{return!1}}y4.exports=Vtr});var E4=s((Bre,w4)=>{"use strict";var Utr=Object.defineProperty;w4.exports=Utr});var bu=s((kre,N4)=>{"use strict";function Htr(r){return typeof r=="number"}N4.exports=Htr});var wu=s((jre,O4)=>{"use strict";function Wtr(r){return r[0]==="-"}function A4(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function ztr(r,e,t){var i=!1,n=e-r.length;return n<0||(Wtr(r)&&(i=!0,r=r.substr(1)),r=t?r+A4(n):A4(n)+r,i&&(r="-"+r)),r}O4.exports=ztr});var _4=s((Cre,I4)=>{"use strict";var Dtr=bu(),S4=wu(),Xtr=String.prototype.toLowerCase,T4=String.prototype.toUpperCase;function Jtr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Dtr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=S4(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=S4(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===T4.call(r.specifier)?T4.call(t):Xtr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}I4.exports=Jtr});var P4=s((Gre,L4)=>{"use strict";function xtr(r){return typeof r=="string"}L4.exports=xtr});var M4=s((Vre,F4)=>{"use strict";var Ytr=bu(),Ztr=Math.abs,$tr=String.prototype.toLowerCase,R4=String.prototype.toUpperCase,Et=String.prototype.replace,Qtr=/e\+(\d)$/,Ktr=/e-(\d)$/,rir=/^(\d+)$/,eir=/^(\d+)e/,tir=/\.0$/,iir=/\.0*e/,nir=/(\..*[^0])0*e/;function air(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Ytr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Ztr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Et.call(t,nir,"$1e"),t=Et.call(t,iir,"e"),t=Et.call(t,tir,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Et.call(t,Qtr,"e+0$1"),t=Et.call(t,Ktr,"e-0$1"),r.alternate&&(t=Et.call(t,rir,"$1."),t=Et.call(t,eir,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===R4.call(r.specifier)?R4.call(t):$tr.call(t),t}F4.exports=air});var j4=s((Ure,k4)=>{"use strict";function B4(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function sir(r,e,t){var i=e-r.length;return i<0||(r=t?r+B4(i):B4(i)+r),r}k4.exports=sir});var G4=s((Hre,C4)=>{"use strict";var uir=_4(),oir=P4(),vir=M4(),fir=j4(),cir=wu(),lir=String.fromCharCode,xn=isNaN,pir=Array.isArray;function gir(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function mir(r){var e,t,i,n,a,u,o,f,v;if(!pir(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],oir(i))u+=i;else{if(e=i.precision!==void 0,i=gir(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,xn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,xn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=uir(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!xn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=xn(a)?String(i.arg):lir(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=vir(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=cir(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=fir(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}C4.exports=mir});var U4=s((Wre,V4)=>{"use strict";var dir=G4();V4.exports=dir});var W4=s((zre,H4)=>{"use strict";var Yn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function hir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function qir(r){var e,t,i,n;for(t=[],n=0,i=Yn.exec(r);i;)e=r.slice(n,Yn.lastIndex-i[0].length),e.length&&t.push(e),t.push(hir(i)),n=Yn.lastIndex,i=Yn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}H4.exports=qir});var D4=s((Dre,z4)=>{"use strict";var yir=W4();z4.exports=yir});var J4=s((Xre,X4)=>{"use strict";function bir(r){return typeof r=="string"}X4.exports=bir});var Z4=s((Jre,Y4)=>{"use strict";var wir=U4(),Eir=D4(),Nir=J4();function x4(r){var e,t,i;if(!Nir(r))throw new TypeError(x4("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Eir(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return wir.apply(null,t)}Y4.exports=x4});var y=s((xre,$4)=>{"use strict";var Air=Z4();$4.exports=Air});var iv=s((Yre,tv)=>{"use strict";var Q4=y(),Xt=Object.prototype,K4=Xt.toString,rv=Xt.__defineGetter__,ev=Xt.__defineSetter__,Oir=Xt.__lookupGetter__,Sir=Xt.__lookupSetter__;function Tir(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||K4.call(r)==="[object Array]")throw new TypeError(Q4("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||K4.call(t)==="[object Array]")throw new TypeError(Q4("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(Oir.call(r,e)||Sir.call(r,e)?(i=r.__proto__,r.__proto__=Xt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&rv&&rv.call(r,e,t.get),u&&ev&&ev.call(r,e,t.set),r}tv.exports=Tir});var Ce=s((Zre,nv)=>{"use strict";var Iir=b4(),_ir=E4(),Lir=iv(),Eu;Iir()?Eu=_ir:Eu=Lir;nv.exports=Eu});var sv=s(($re,av)=>{"use strict";var Pir=Ce();function Rir(r,e,t){Pir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}av.exports=Rir});var w=s((Qre,uv)=>{"use strict";var Fir=sv();uv.exports=Fir});var vv=s((Kre,ov)=>{"use strict";var Mir=Ce();function Bir(r,e,t){Mir(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}ov.exports=Bir});var ar=s((ree,fv)=>{"use strict";var kir=vv();fv.exports=kir});var lv=s((eee,cv)=>{"use strict";function jir(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}cv.exports=jir});var gv=s((tee,pv)=>{"use strict";var Cir=lv();pv.exports=Cir});var dv=s((iee,mv)=>{"use strict";function Gir(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}mv.exports=Gir});var Nu=s((nee,hv)=>{"use strict";var Vir=dv();hv.exports=Vir});var yv=s((aee,qv)=>{"use strict";var Uir=Nu();function Hir(r){return Uir(0,r)}qv.exports=Hir});var Au=s((see,bv)=>{"use strict";var Wir=yv();bv.exports=Wir});var Nv=s((uee,Ev)=>{"use strict";var zi=gv(),zir=Au(),wv=y();function Dir(r,e,t){var i,n,a,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(a=zir(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(wv("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",zi(e).join(", "),zi(t).join(", "),v));if(f===n)a[v]=1;else if(f===1)a[v]=0;else throw new Error(wv("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",zi(e).join(", "),zi(t).join(", "),v))}return{ref:r,data:i,shape:zi(t),strides:a}}Ev.exports=Dir});var Ou=s((oee,Av)=>{"use strict";var Xir=Nv();Av.exports=Xir});var Tv=s((vee,Sv)=>{"use strict";var Ov=Ou();function Jir(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,F,S,z,Q;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(F=Ov(r[0],e[0],N),S=F.data,A=F.strides,i=A[1],n=A[0],F=Ov(r[1],e[1],N),z=F.data,A=F.strides,a=A[1],u=A[0],Q=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,m=0,d=S[p],g=z[h],q=Q[c],v=0;v<o;v++)q[v]=t(d[l],g[m]),l+=i,m+=a;p+=n,h+=u}}Sv.exports=Jir});var Su=s((fee,Iv)=>{"use strict";var xir=Tv();Iv.exports=xir});var Lv=s((cee,_v)=>{"use strict";var Tu=Ou();function Yir(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,F,S,z,Q,U,Tr,Ir,ur,wt,d4;if(Q=e[3],v=Q[1],c=Q[0],!(v<=0||c<=0))for(Tr=Tu(r[0],e[0],Q),Ir=Tr.data,U=Tr.strides,i=U[1],n=U[0],Tr=Tu(r[1],e[1],Q),ur=Tr.data,U=Tr.strides,a=U[1],u=U[0],Tr=Tu(r[2],e[2],Q),wt=Tr.data,U=Tr.strides,o=U[1],f=U[0],d4=r[3],h=0,g=0,N=0,p=0;p<c;p++){for(m=0,d=0,q=0,A=Ir[h],F=ur[g],S=wt[N],z=d4[p],l=0;l<v;l++)z[l]=t(A[m],F[d],S[q]),m+=i,d+=a,q+=o;h+=n,g+=u,N+=f}}_v.exports=Yir});var Rv=s((lee,Pv)=>{"use strict";var Zir=Lv();Pv.exports=Zir});var Mv=s((pee,Fv)=>{"use strict";function $ir(r){var e,t,i,n,a,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}Fv.exports=$ir});var Iu=s((gee,Bv)=>{"use strict";var Qir=Mv();Bv.exports=Qir});var jv=s((mee,kv)=>{"use strict";var Kir=Nu();function rnr(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(Kir(r,i));return t}kv.exports=rnr});var Zn=s((dee,Cv)=>{"use strict";var enr=jv();Cv.exports=enr});var Vv=s((hee,Gv)=>{"use strict";function tnr(r,e,t){var i,n,a,u,o,f;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}Gv.exports=tnr});var Hv=s((qee,Uv)=>{"use strict";var inr=Vv();Uv.exports=inr});var zv=s((yee,Wv)=>{"use strict";function nnr(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}Wv.exports=nnr});var _u=s((bee,Dv)=>{"use strict";var anr=zv();Dv.exports=anr});var Jv=s((wee,Xv)=>{"use strict";var snr=/./;Xv.exports=snr});var Lu=s((Eee,xv)=>{"use strict";function unr(r){return typeof r=="boolean"}xv.exports=unr});var Zv=s((Nee,Yv)=>{"use strict";function onr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Yv.exports=onr});var Qv=s((Aee,$v)=>{"use strict";var vnr=Zv();$v.exports=vnr});var rf=s((Oee,Kv)=>{"use strict";var fnr=Qv(),cnr=fnr();function lnr(){return cnr&&typeof Symbol.toStringTag=="symbol"}Kv.exports=lnr});var Di=s((See,ef)=>{"use strict";var pnr=rf();ef.exports=pnr});var Pu=s((Tee,tf)=>{"use strict";var gnr=Object.prototype.toString;tf.exports=gnr});var af=s((Iee,nf)=>{"use strict";var mnr=Pu();function dnr(r){return mnr.call(r)}nf.exports=dnr});var uf=s((_ee,sf)=>{"use strict";var hnr=Object.prototype.hasOwnProperty;function qnr(r,e){return r==null?!1:hnr.call(r,e)}sf.exports=qnr});var O=s((Lee,of)=>{"use strict";var ynr=uf();of.exports=ynr});var ff=s((Pee,vf)=>{"use strict";var bnr=typeof Symbol=="function"?Symbol:void 0;vf.exports=bnr});var Ru=s((Ree,cf)=>{"use strict";var wnr=ff();cf.exports=wnr});var gf=s((Fee,pf)=>{"use strict";var lf=Ru(),Enr=typeof lf=="function"?lf.toStringTag:"";pf.exports=Enr});var df=s((Mee,mf)=>{"use strict";var Nnr=O(),Xi=gf(),Fu=Pu();function Anr(r){var e,t,i;if(r==null)return Fu.call(r);t=r[Xi],e=Nnr(r,Xi);try{r[Xi]=void 0}catch{return Fu.call(r)}return i=Fu.call(r),e?r[Xi]=t:delete r[Xi],i}mf.exports=Anr});var ir=s((Bee,hf)=>{"use strict";var Onr=Di(),Snr=af(),Tnr=df(),Mu;Onr()?Mu=Tnr:Mu=Snr;hf.exports=Mu});var yf=s((kee,qf)=>{"use strict";var Inr=Boolean;qf.exports=Inr});var wf=s((jee,bf)=>{"use strict";var _nr=yf();bf.exports=_nr});var Nf=s((Cee,Ef)=>{"use strict";var Lnr=Boolean.prototype.toString;Ef.exports=Lnr});var Of=s((Gee,Af)=>{"use strict";var Pnr=Nf();function Rnr(r){try{return Pnr.call(r),!0}catch{return!1}}Af.exports=Rnr});var Bu=s((Vee,Sf)=>{"use strict";var Fnr=Di(),Mnr=ir(),Bnr=wf(),knr=Of(),jnr=Fnr();function Cnr(r){return typeof r=="object"?r instanceof Bnr?!0:jnr?knr(r):Mnr(r)==="[object Boolean]":!1}Sf.exports=Cnr});var If=s((Uee,Tf)=>{"use strict";var Gnr=Lu(),Vnr=Bu();function Unr(r){return Gnr(r)||Vnr(r)}Tf.exports=Unr});var cr=s((Hee,Lf)=>{"use strict";var _f=w(),ku=If(),Hnr=Lu(),Wnr=Bu();_f(ku,"isPrimitive",Hnr);_f(ku,"isObject",Wnr);Lf.exports=ku});var Rf=s((Wee,Pf)=>{"use strict";function znr(){return new Function("return this;")()}Pf.exports=znr});var Mf=s((zee,Ff)=>{"use strict";var Dnr=typeof self=="object"?self:null;Ff.exports=Dnr});var kf=s((Dee,Bf)=>{"use strict";var Xnr=typeof window=="object"?window:null;Bf.exports=Xnr});var Cf=s((Xee,jf)=>{"use strict";var Jnr=typeof globalThis=="object"?globalThis:null;jf.exports=Jnr});var Wf=s((Jee,Hf)=>{"use strict";var xnr=cr().isPrimitive,Ynr=y(),Znr=Rf(),Gf=Mf(),Vf=kf(),Uf=Cf();function $nr(r){if(arguments.length){if(!xnr(r))throw new TypeError(Ynr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Znr()}if(Uf)return Uf;if(Gf)return Gf;if(Vf)return Vf;throw new Error("unexpected error. Unable to resolve global object.")}Hf.exports=$nr});var Xf=s((xee,Df)=>{"use strict";var Qnr=Wf(),zf=Qnr(),Knr=zf.document&&zf.document.childNodes;Df.exports=Knr});var xf=s((Yee,Jf)=>{"use strict";var rar=Int8Array;Jf.exports=rar});var Zf=s((Zee,Yf)=>{"use strict";var ear=Jv(),tar=Xf(),iar=xf();function nar(){return typeof ear=="function"||typeof iar=="object"||typeof tar=="function"}Yf.exports=nar});var ju=s(($ee,$f)=>{"use strict";function aar(){return/^\s*function\s*([^(]*)/i}$f.exports=aar});var Kf=s((Qee,Qf)=>{"use strict";var sar=ju(),uar=sar();Qf.exports=uar});var Cu=s((Kee,ec)=>{"use strict";var oar=w(),rc=ju(),far=Kf();oar(rc,"REGEXP",far);ec.exports=rc});var ic=s((rte,tc)=>{"use strict";var car=ir(),Gu;function lar(r){return car(r)==="[object Array]"}Array.isArray?Gu=Array.isArray:Gu=lar;tc.exports=Gu});var lr=s((ete,nc)=>{"use strict";var par=ic();nc.exports=par});var sc=s((tte,ac)=>{"use strict";var gar=lr(),mar=y();function dar(r){if(typeof r!="function")throw new TypeError(mar("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!gar(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}ac.exports=dar});var oc=s((ite,uc)=>{"use strict";var har=sc();uc.exports=har});var fc=s((nte,vc)=>{"use strict";function qar(r){return r!==null&&typeof r=="object"}vc.exports=qar});var Uu=s((ate,cc)=>{"use strict";var yar=w(),bar=oc(),Vu=fc(),war=bar(Vu);yar(Vu,"isObjectLikeArray",war);cc.exports=Vu});var pc=s((ste,lc)=>{"use strict";var Ear=Uu();function Nar(r){return Ear(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}lc.exports=Nar});var Nt=s((ute,gc)=>{"use strict";var Aar=pc();gc.exports=Aar});var dc=s((ote,mc)=>{"use strict";var Oar=ir(),Sar=Cu().REGEXP,Tar=Nt();function Iar(r){var e,t,i;if(t=Oar(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Sar.exec(i.toString()),e)return e[1]}return Tar(r)?"Buffer":t}mc.exports=Iar});var Ge=s((vte,hc)=>{"use strict";var _ar=dc();hc.exports=_ar});var yc=s((fte,qc)=>{"use strict";var Lar=Ge();function Par(r){var e;return r===null?"null":(e=typeof r,e==="object"?Lar(r).toLowerCase():e)}qc.exports=Par});var wc=s((cte,bc)=>{"use strict";var Rar=Ge();function Far(r){return Rar(r).toLowerCase()}bc.exports=Far});var $n=s((lte,Ec)=>{"use strict";var Mar=Zf(),Bar=yc(),kar=wc(),jar=Mar()?kar:Bar;Ec.exports=jar});var Ac=s((pte,Nc)=>{"use strict";var Car=$n();function Gar(r){return Car(r)==="function"}Nc.exports=Gar});var L=s((gte,Oc)=>{"use strict";var Var=Ac();Oc.exports=Var});var Tc=s((mte,Sc)=>{"use strict";var Uar=Math.floor;Sc.exports=Uar});var x=s((dte,Ic)=>{"use strict";var Har=Tc();Ic.exports=Har});var Lc=s((hte,_c)=>{"use strict";var War=x();function zar(r){return War(r)===r}_c.exports=zar});var _r=s((qte,Pc)=>{"use strict";var Dar=Lc();Pc.exports=Dar});var Fc=s((yte,Rc)=>{"use strict";var Xar=9007199254740991;Rc.exports=Xar});var Bc=s((bte,Mc)=>{"use strict";var Jar=_r(),xar=Fc();function Yar(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Jar(r.length)&&r.length>=0&&r.length<=xar}Mc.exports=Yar});var Vr=s((wte,kc)=>{"use strict";var Zar=Bc();kc.exports=Zar});var Cc=s((Ete,jc)=>{"use strict";var $ar=L();function Qar(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&$ar(r.next)}jc.exports=Qar});var Vc=s((Nte,Gc)=>{"use strict";var Kar=Cc();Gc.exports=Kar});var Wc=s((Ate,Hc)=>{"use strict";var Uc="function";function r0r(r){return typeof r.get===Uc&&typeof r.set===Uc}Hc.exports=r0r});var Hu=s((Ote,zc)=>{"use strict";var e0r=Wc();zc.exports=e0r});var Jc=s((Ste,Xc)=>{"use strict";var Dc={complex128:t0r,complex64:i0r,default:n0r};function t0r(r,e,t){r.set(t,e)}function i0r(r,e,t){r.set(t,e)}function n0r(r,e,t){r.set(t,e)}function a0r(r){var e=Dc[r];return typeof e=="function"?e:Dc.default}Xc.exports=a0r});var Wu=s((Tte,xc)=>{"use strict";var s0r=Jc();xc.exports=s0r});var $c=s((Ite,Zc)=>{"use strict";var Yc={float64:u0r,float32:o0r,int32:v0r,int16:f0r,int8:c0r,uint32:l0r,uint16:p0r,uint8:g0r,uint8c:m0r,generic:d0r,default:h0r};function u0r(r,e,t){r[e]=t}function o0r(r,e,t){r[e]=t}function v0r(r,e,t){r[e]=t}function f0r(r,e,t){r[e]=t}function c0r(r,e,t){r[e]=t}function l0r(r,e,t){r[e]=t}function p0r(r,e,t){r[e]=t}function g0r(r,e,t){r[e]=t}function m0r(r,e,t){r[e]=t}function d0r(r,e,t){r[e]=t}function h0r(r,e,t){r[e]=t}function q0r(r){var e=Yc[r];return typeof e=="function"?e:Yc.default}Zc.exports=q0r});var zu=s((_te,Qc)=>{"use strict";var y0r=$c();Qc.exports=y0r});var r5=s((Lte,Kc)=>{"use strict";var b0r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Kc.exports=b0r});var t5=s((Pte,e5)=>{"use strict";var w0r=ir(),E0r=typeof Float64Array=="function";function N0r(r){return E0r&&r instanceof Float64Array||w0r(r)==="[object Float64Array]"}e5.exports=N0r});var n5=s((Rte,i5)=>{"use strict";var A0r=t5();i5.exports=A0r});var s5=s((Fte,a5)=>{"use strict";var O0r=typeof Float64Array=="function"?Float64Array:null;a5.exports=O0r});var v5=s((Mte,o5)=>{"use strict";var S0r=n5(),u5=s5();function T0r(){var r,e;if(typeof u5!="function")return!1;try{e=new u5([1,3.14,-3.14,NaN]),r=S0r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}o5.exports=T0r});var Du=s((Bte,f5)=>{"use strict";var I0r=v5();f5.exports=I0r});var l5=s((kte,c5)=>{"use strict";var _0r=typeof Float64Array=="function"?Float64Array:void 0;c5.exports=_0r});var g5=s((jte,p5)=>{"use strict";function L0r(){throw new Error("not implemented")}p5.exports=L0r});var gr=s((Cte,m5)=>{"use strict";var P0r=Du(),R0r=l5(),F0r=g5(),Xu;P0r()?Xu=R0r:Xu=F0r;m5.exports=Xu});var h5=s((Gte,d5)=>{"use strict";var M0r=ir(),B0r=typeof Float32Array=="function";function k0r(r){return B0r&&r instanceof Float32Array||M0r(r)==="[object Float32Array]"}d5.exports=k0r});var y5=s((Vte,q5)=>{"use strict";var j0r=h5();q5.exports=j0r});var I=s((Ute,b5)=>{"use strict";var C0r=Number.POSITIVE_INFINITY;b5.exports=C0r});var E5=s((Hte,w5)=>{"use strict";var G0r=typeof Float32Array=="function"?Float32Array:null;w5.exports=G0r});var O5=s((Wte,A5)=>{"use strict";var V0r=y5(),U0r=I(),N5=E5();function H0r(){var r,e;if(typeof N5!="function")return!1;try{e=new N5([1,3.14,-3.14,5e40]),r=V0r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===U0r}catch{r=!1}return r}A5.exports=H0r});var T5=s((zte,S5)=>{"use strict";var W0r=O5();S5.exports=W0r});var _5=s((Dte,I5)=>{"use strict";var z0r=typeof Float32Array=="function"?Float32Array:void 0;I5.exports=z0r});var P5=s((Xte,L5)=>{"use strict";function D0r(){throw new Error("not implemented")}L5.exports=D0r});var Kr=s((Jte,R5)=>{"use strict";var X0r=T5(),J0r=_5(),x0r=P5(),Ju;X0r()?Ju=J0r:Ju=x0r;R5.exports=Ju});var M5=s((xte,F5)=>{"use strict";var Y0r=ir(),Z0r=typeof Uint32Array=="function";function $0r(r){return Z0r&&r instanceof Uint32Array||Y0r(r)==="[object Uint32Array]"}F5.exports=$0r});var re=s((Yte,B5)=>{"use strict";var Q0r=M5();B5.exports=Q0r});var Jt=s((Zte,k5)=>{"use strict";var K0r=4294967295;k5.exports=K0r});var C5=s(($te,j5)=>{"use strict";var rsr=typeof Uint32Array=="function"?Uint32Array:null;j5.exports=rsr});var U5=s((Qte,V5)=>{"use strict";var esr=re(),xu=Jt(),G5=C5();function tsr(){var r,e;if(typeof G5!="function")return!1;try{e=[1,3.14,-3.14,xu+1,xu+2],e=new G5(e),r=esr(e)&&e[0]===1&&e[1]===3&&e[2]===xu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}V5.exports=tsr});var W5=s((Kte,H5)=>{"use strict";var isr=U5();H5.exports=isr});var D5=s((rie,z5)=>{"use strict";var nsr=typeof Uint32Array=="function"?Uint32Array:void 0;z5.exports=nsr});var J5=s((eie,X5)=>{"use strict";function asr(){throw new Error("not implemented")}X5.exports=asr});var pr=s((tie,x5)=>{"use strict";var ssr=W5(),usr=D5(),osr=J5(),Yu;ssr()?Yu=usr:Yu=osr;x5.exports=Yu});var Z5=s((iie,Y5)=>{"use strict";var vsr=ir(),fsr=typeof Int32Array=="function";function csr(r){return fsr&&r instanceof Int32Array||vsr(r)==="[object Int32Array]"}Y5.exports=csr});var Qn=s((nie,$5)=>{"use strict";var lsr=Z5();$5.exports=lsr});var xt=s((aie,Q5)=>{"use strict";var psr=2147483647;Q5.exports=psr});var r8=s((sie,K5)=>{"use strict";var gsr=-2147483648;K5.exports=gsr});var t8=s((uie,e8)=>{"use strict";var msr=typeof Int32Array=="function"?Int32Array:null;e8.exports=msr});var a8=s((oie,n8)=>{"use strict";var dsr=Qn(),hsr=xt(),qsr=r8(),i8=t8();function ysr(){var r,e;if(typeof i8!="function")return!1;try{e=new i8([1,3.14,-3.14,hsr+1]),r=dsr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===qsr}catch{r=!1}return r}n8.exports=ysr});var u8=s((vie,s8)=>{"use strict";var bsr=a8();s8.exports=bsr});var v8=s((fie,o8)=>{"use strict";var wsr=typeof Int32Array=="function"?Int32Array:void 0;o8.exports=wsr});var c8=s((cie,f8)=>{"use strict";function Esr(){throw new Error("not implemented")}f8.exports=Esr});var At=s((lie,l8)=>{"use strict";var Nsr=u8(),Asr=v8(),Osr=c8(),Zu;Nsr()?Zu=Asr:Zu=Osr;l8.exports=Zu});var g8=s((pie,p8)=>{"use strict";var Ssr=ir(),Tsr=typeof Uint16Array=="function";function Isr(r){return Tsr&&r instanceof Uint16Array||Ssr(r)==="[object Uint16Array]"}p8.exports=Isr});var d8=s((gie,m8)=>{"use strict";var _sr=g8();m8.exports=_sr});var q8=s((mie,h8)=>{"use strict";var Lsr=65535;h8.exports=Lsr});var b8=s((die,y8)=>{"use strict";var Psr=typeof Uint16Array=="function"?Uint16Array:null;y8.exports=Psr});var N8=s((hie,E8)=>{"use strict";var Rsr=d8(),$u=q8(),w8=b8();function Fsr(){var r,e;if(typeof w8!="function")return!1;try{e=[1,3.14,-3.14,$u+1,$u+2],e=new w8(e),r=Rsr(e)&&e[0]===1&&e[1]===3&&e[2]===$u-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}E8.exports=Fsr});var O8=s((qie,A8)=>{"use strict";var Msr=N8();A8.exports=Msr});var T8=s((yie,S8)=>{"use strict";var Bsr=typeof Uint16Array=="function"?Uint16Array:void 0;S8.exports=Bsr});var _8=s((bie,I8)=>{"use strict";function ksr(){throw new Error("not implemented")}I8.exports=ksr});var Yt=s((wie,L8)=>{"use strict";var jsr=O8(),Csr=T8(),Gsr=_8(),Qu;jsr()?Qu=Csr:Qu=Gsr;L8.exports=Qu});var R8=s((Eie,P8)=>{"use strict";var Vsr=ir(),Usr=typeof Int16Array=="function";function Hsr(r){return Usr&&r instanceof Int16Array||Vsr(r)==="[object Int16Array]"}P8.exports=Hsr});var M8=s((Nie,F8)=>{"use strict";var Wsr=R8();F8.exports=Wsr});var k8=s((Aie,B8)=>{"use strict";var zsr=32767;B8.exports=zsr});var C8=s((Oie,j8)=>{"use strict";var Dsr=-32768;j8.exports=Dsr});var V8=s((Sie,G8)=>{"use strict";var Xsr=typeof Int16Array=="function"?Int16Array:null;G8.exports=Xsr});var W8=s((Tie,H8)=>{"use strict";var Jsr=M8(),xsr=k8(),Ysr=C8(),U8=V8();function Zsr(){var r,e;if(typeof U8!="function")return!1;try{e=new U8([1,3.14,-3.14,xsr+1]),r=Jsr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Ysr}catch{r=!1}return r}H8.exports=Zsr});var D8=s((Iie,z8)=>{"use strict";var $sr=W8();z8.exports=$sr});var J8=s((_ie,X8)=>{"use strict";var Qsr=typeof Int16Array=="function"?Int16Array:void 0;X8.exports=Qsr});var Y8=s((Lie,x8)=>{"use strict";function Ksr(){throw new Error("not implemented")}x8.exports=Ksr});var Ji=s((Pie,Z8)=>{"use strict";var rur=D8(),eur=J8(),tur=Y8(),Ku;rur()?Ku=eur:Ku=tur;Z8.exports=Ku});var Q8=s((Rie,$8)=>{"use strict";var iur=ir(),nur=typeof Uint8Array=="function";function aur(r){return nur&&r instanceof Uint8Array||iur(r)==="[object Uint8Array]"}$8.exports=aur});var rl=s((Fie,K8)=>{"use strict";var sur=Q8();K8.exports=sur});var tl=s((Mie,el)=>{"use strict";var uur=255;el.exports=uur});var nl=s((Bie,il)=>{"use strict";var our=typeof Uint8Array=="function"?Uint8Array:null;il.exports=our});var ul=s((kie,sl)=>{"use strict";var vur=rl(),ro=tl(),al=nl();function fur(){var r,e;if(typeof al!="function")return!1;try{e=[1,3.14,-3.14,ro+1,ro+2],e=new al(e),r=vur(e)&&e[0]===1&&e[1]===3&&e[2]===ro-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}sl.exports=fur});var vl=s((jie,ol)=>{"use strict";var cur=ul();ol.exports=cur});var cl=s((Cie,fl)=>{"use strict";var lur=typeof Uint8Array=="function"?Uint8Array:void 0;fl.exports=lur});var pl=s((Gie,ll)=>{"use strict";function pur(){throw new Error("not implemented")}ll.exports=pur});var Zt=s((Vie,gl)=>{"use strict";var gur=vl(),mur=cl(),dur=pl(),eo;gur()?eo=mur:eo=dur;gl.exports=eo});var dl=s((Uie,ml)=>{"use strict";var hur=ir(),qur=typeof Uint8ClampedArray=="function";function yur(r){return qur&&r instanceof Uint8ClampedArray||hur(r)==="[object Uint8ClampedArray]"}ml.exports=yur});var ql=s((Hie,hl)=>{"use strict";var bur=dl();hl.exports=bur});var bl=s((Wie,yl)=>{"use strict";var wur=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;yl.exports=wur});var Nl=s((zie,El)=>{"use strict";var Eur=ql(),wl=bl();function Nur(){var r,e;if(typeof wl!="function")return!1;try{e=new wl([-1,0,1,3.14,4.99,255,256]),r=Eur(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}El.exports=Nur});var Ol=s((Die,Al)=>{"use strict";var Aur=Nl();Al.exports=Aur});var Tl=s((Xie,Sl)=>{"use strict";var Our=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Sl.exports=Our});var _l=s((Jie,Il)=>{"use strict";function Sur(){throw new Error("not implemented")}Il.exports=Sur});var xi=s((xie,Ll)=>{"use strict";var Tur=Ol(),Iur=Tl(),_ur=_l(),to;Tur()?to=Iur:to=_ur;Ll.exports=to});var Rl=s((Yie,Pl)=>{"use strict";var Lur=ir(),Pur=typeof Int8Array=="function";function Rur(r){return Pur&&r instanceof Int8Array||Lur(r)==="[object Int8Array]"}Pl.exports=Rur});var Ml=s((Zie,Fl)=>{"use strict";var Fur=Rl();Fl.exports=Fur});var kl=s(($ie,Bl)=>{"use strict";var Mur=127;Bl.exports=Mur});var Cl=s((Qie,jl)=>{"use strict";var Bur=-128;jl.exports=Bur});var Vl=s((Kie,Gl)=>{"use strict";var kur=typeof Int8Array=="function"?Int8Array:null;Gl.exports=kur});var Wl=s((rne,Hl)=>{"use strict";var jur=Ml(),Cur=kl(),Gur=Cl(),Ul=Vl();function Vur(){var r,e;if(typeof Ul!="function")return!1;try{e=new Ul([1,3.14,-3.14,Cur+1]),r=jur(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Gur}catch{r=!1}return r}Hl.exports=Vur});var Dl=s((ene,zl)=>{"use strict";var Uur=Wl();zl.exports=Uur});var Jl=s((tne,Xl)=>{"use strict";var Hur=typeof Int8Array=="function"?Int8Array:void 0;Xl.exports=Hur});var Yl=s((ine,xl)=>{"use strict";function Wur(){throw new Error("not implemented")}xl.exports=Wur});var Yi=s((nne,Zl)=>{"use strict";var zur=Dl(),Dur=Jl(),Xur=Yl(),io;zur()?io=Dur:io=Xur;Zl.exports=io});var no=s((ane,$l)=>{"use strict";function Jur(r){return typeof r=="number"}$l.exports=Jur});var Kl=s((sne,Ql)=>{"use strict";Ql.exports=Number});var Kn=s((une,r7)=>{"use strict";var xur=Kl();r7.exports=xur});var t7=s((one,e7)=>{"use strict";var Yur=Kn(),Zur=Yur.prototype.toString;e7.exports=Zur});var n7=s((vne,i7)=>{"use strict";var $ur=t7();function Qur(r){try{return $ur.call(r),!0}catch{return!1}}i7.exports=Qur});var ao=s((fne,a7)=>{"use strict";var Kur=Di(),ror=ir(),eor=Kn(),tor=n7(),ior=Kur();function nor(r){return typeof r=="object"?r instanceof eor?!0:ior?tor(r):ror(r)==="[object Number]":!1}a7.exports=nor});var u7=s((cne,s7)=>{"use strict";var aor=no(),sor=ao();function uor(r){return aor(r)||sor(r)}s7.exports=uor});var j=s((lne,v7)=>{"use strict";var o7=w(),so=u7(),oor=no(),vor=ao();o7(so,"isPrimitive",oor);o7(so,"isObject",vor);v7.exports=so});var G=s((pne,f7)=>{"use strict";var cor=Kn(),lor=cor.NEGATIVE_INFINITY;f7.exports=lor});var uo=s((gne,c7)=>{"use strict";var por=I(),gor=G(),mor=_r();function dor(r){return r<por&&r>gor&&mor(r)}c7.exports=dor});var oo=s((mne,l7)=>{"use strict";var hor=j().isPrimitive,qor=uo();function yor(r){return hor(r)&&qor(r)}l7.exports=yor});var vo=s((dne,p7)=>{"use strict";var bor=j().isObject,wor=uo();function Eor(r){return bor(r)&&wor(r.valueOf())}p7.exports=Eor});var m7=s((hne,g7)=>{"use strict";var Nor=oo(),Aor=vo();function Oor(r){return Nor(r)||Aor(r)}g7.exports=Oor});var Ur=s((qne,h7)=>{"use strict";var d7=w(),fo=m7(),Sor=oo(),Tor=vo();d7(fo,"isPrimitive",Sor);d7(fo,"isObject",Tor);h7.exports=fo});var co=s((yne,q7)=>{"use strict";var Ior=Ur().isPrimitive;function _or(r){return Ior(r)&&r>=0}q7.exports=_or});var lo=s((bne,y7)=>{"use strict";var Lor=Ur().isObject;function Por(r){return Lor(r)&&r.valueOf()>=0}y7.exports=Por});var w7=s((wne,b7)=>{"use strict";var Ror=co(),For=lo();function Mor(r){return Ror(r)||For(r)}b7.exports=Mor});var Ve=s((Ene,N7)=>{"use strict";var E7=w(),po=w7(),Bor=co(),kor=lo();E7(po,"isPrimitive",Bor);E7(po,"isObject",kor);N7.exports=po});var O7=s((Nne,A7)=>{"use strict";var jor=4294967295;A7.exports=jor});var T7=s((Ane,S7)=>{"use strict";var Cor=_r(),Gor=O7();function Vor(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Cor(r.length)&&r.length>=0&&r.length<=Gor}S7.exports=Vor});var Ot=s((One,I7)=>{"use strict";var Uor=T7();I7.exports=Uor});var L7=s((Sne,_7)=>{"use strict";var Hor=ir(),Wor=typeof ArrayBuffer=="function";function zor(r){return Wor&&r instanceof ArrayBuffer||Hor(r)==="[object ArrayBuffer]"}_7.exports=zor});var go=s((Tne,P7)=>{"use strict";var Dor=L7();P7.exports=Dor});var F7=s((Ine,R7)=>{"use strict";var Xor=lr();function Jor(r){return typeof r=="object"&&r!==null&&!Xor(r)}R7.exports=Jor});var ra=s((_ne,M7)=>{"use strict";var xor=F7();M7.exports=xor});var k7=s((Lne,B7)=>{"use strict";function Yor(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}B7.exports=Yor});var C7=s((Pne,j7)=>{"use strict";function Zor(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}j7.exports=Zor});var W7=s((Rne,H7)=>{"use strict";var G7=j().isPrimitive,V7=Ce(),Zi=w(),U7=y(),$or=k7(),Qor=C7();function St(r,e){if(!(this instanceof St))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!G7(r))throw new TypeError(U7("invalid argument. Real component must be a number. Value: `%s`.",r));if(!G7(e))throw new TypeError(U7("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return V7(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),V7(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Zi(St,"BYTES_PER_ELEMENT",8);Zi(St.prototype,"BYTES_PER_ELEMENT",8);Zi(St.prototype,"byteLength",16);Zi(St.prototype,"toString",$or);Zi(St.prototype,"toJSON",Qor);H7.exports=St});var $t=s((Fne,z7)=>{"use strict";var Kor=W7();z7.exports=Kor});var X7=s((Mne,D7)=>{"use strict";var r2r=typeof Math.fround=="function"?Math.fround:null;D7.exports=r2r});var Y7=s((Bne,x7)=>{"use strict";var e2r=Kr(),J7=new e2r(1);function t2r(r){return J7[0]=r,J7[0]}x7.exports=t2r});var Q7=s((kne,$7)=>{"use strict";var Z7=X7(),i2r=Y7(),mo;typeof Z7=="function"?mo=Z7:mo=i2r;$7.exports=mo});var r9=s((jne,K7)=>{"use strict";function n2r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}K7.exports=n2r});var t9=s((Cne,e9)=>{"use strict";function a2r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}e9.exports=a2r});var o9=s((Gne,u9)=>{"use strict";var i9=j().isPrimitive,n9=Ce(),$i=w(),a9=Q7(),s9=y(),s2r=r9(),u2r=t9();function Tt(r,e){if(!(this instanceof Tt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!i9(r))throw new TypeError(s9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!i9(e))throw new TypeError(s9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return n9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:a9(r)}),n9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:a9(e)}),this}$i(Tt,"BYTES_PER_ELEMENT",4);$i(Tt.prototype,"BYTES_PER_ELEMENT",4);$i(Tt.prototype,"byteLength",8);$i(Tt.prototype,"toString",s2r);$i(Tt.prototype,"toJSON",u2r);u9.exports=Tt});var Qt=s((Vne,v9)=>{"use strict";var o2r=o9();v9.exports=o2r});var c9=s((Une,f9)=>{"use strict";var v2r=$t(),f2r=Qt();function c2r(r){return r instanceof v2r||r instanceof f2r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}f9.exports=c2r});var Hr=s((Hne,l9)=>{"use strict";var l2r=c9();l9.exports=l2r});var g9=s((Wne,p9)=>{"use strict";var p2r=_r();function g2r(r){return p2r(r/2)}p9.exports=g2r});var ea=s((zne,m9)=>{"use strict";var m2r=g9();m9.exports=m2r});var h9=s((Dne,d9)=>{"use strict";var d2r=O(),ta=Ru();function h2r(){return typeof ta=="function"&&typeof ta("foo")=="symbol"&&d2r(ta,"iterator")&&typeof ta.iterator=="symbol"}d9.exports=h2r});var ia=s((Xne,q9)=>{"use strict";var q2r=h9();q9.exports=q2r});var b9=s((Jne,y9)=>{"use strict";var y2r=ia(),b2r=y2r()?Symbol.iterator:null;y9.exports=b2r});var na=s((xne,w9)=>{"use strict";var w2r=b9();w9.exports=w2r});var N9=s((Yne,E9)=>{"use strict";var E2r=Ce();function N2r(r,e,t){E2r(r,e,{configurable:!1,enumerable:!1,get:t})}E9.exports=N2r});var P=s((Zne,A9)=>{"use strict";var A2r=N9();A9.exports=A2r});var S9=s(($ne,O9)=>{"use strict";function O2r(r){return r.re}O9.exports=O2r});var Ue=s((Qne,T9)=>{"use strict";var S2r=S9();T9.exports=S2r});var _9=s((Kne,I9)=>{"use strict";function T2r(r){return r.im}I9.exports=T2r});var He=s((rae,L9)=>{"use strict";var I2r=_9();L9.exports=I2r});var R9=s((eae,P9)=>{"use strict";var _2r=Kr();function L2r(r,e){return new _2r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}P9.exports=L2r});var Kt=s((tae,F9)=>{"use strict";var P2r=R9();F9.exports=P2r});var B9=s((iae,M9)=>{"use strict";var R2r=gr();function F2r(r,e){return new R2r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}M9.exports=F2r});var ri=s((nae,k9)=>{"use strict";var M2r=B9();k9.exports=M2r});var G9=s((aae,C9)=>{"use strict";var j9={float64:B2r,float32:k2r,int32:j2r,int16:C2r,int8:G2r,uint32:V2r,uint16:U2r,uint8:H2r,uint8c:W2r,generic:z2r,default:D2r};function B2r(r,e){return r[e]}function k2r(r,e){return r[e]}function j2r(r,e){return r[e]}function C2r(r,e){return r[e]}function G2r(r,e){return r[e]}function V2r(r,e){return r[e]}function U2r(r,e){return r[e]}function H2r(r,e){return r[e]}function W2r(r,e){return r[e]}function z2r(r,e){return r[e]}function D2r(r,e){return r[e]}function X2r(r){var e=j9[r];return typeof e=="function"?e:j9.default}C9.exports=X2r});var aa=s((sae,V9)=>{"use strict";var J2r=G9();V9.exports=J2r});var W9=s((uae,H9)=>{"use strict";var U9={complex128:x2r,complex64:Y2r,default:Z2r};function x2r(r,e){return r.get(e)}function Y2r(r,e){return r.get(e)}function Z2r(r,e){return r.get(e)}function $2r(r){var e=U9[r];return typeof e=="function"?e:U9.default}H9.exports=$2r});var sa=s((oae,z9)=>{"use strict";var Q2r=W9();z9.exports=Q2r});var X9=s((vae,D9)=>{"use strict";var K2r=Ot(),r1r=Hr(),e1r=Ue(),t1r=He(),i1r=y();function n1r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,K2r(i)&&i.length>=2)e.push(i[0],i[1]);else if(r1r(i))e.push(e1r(i),t1r(i));else return new TypeError(i1r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}D9.exports=n1r});var x9=s((fae,J9)=>{"use strict";var a1r=Ot(),s1r=Hr(),u1r=Ue(),o1r=He(),v1r=y();function f1r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),a1r(a)&&a.length>=2)i.push(a[0],a[1]);else if(s1r(a))i.push(u1r(a),o1r(a));else return new TypeError(v1r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}J9.exports=f1r});var Z9=s((cae,Y9)=>{"use strict";var c1r=Hr(),l1r=Ue(),p1r=He();function g1r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!c1r(i))return null;r[a]=l1r(i),r[a+1]=p1r(i),a+=2}return r}Y9.exports=g1r});var ap=s((lae,np)=>{"use strict";var Qi=Ve().isPrimitive,$9=Ot(),qo=Vr(),Q9=go(),K9=ra(),m1r=lr(),It=L(),ei=Hr(),ua=ea(),ho=_r(),d1r=ia(),ti=na(),mr=w(),fa=P(),Mr=Kr(),rp=Qt(),Y=y(),oa=Ue(),va=He(),h1r=Kt(),q1r=ri(),y1r=aa(),b1r=sa(),ep=X9(),w1r=x9(),E1r=Z9(),Lr=Mr.BYTES_PER_ELEMENT*2,tp=d1r();function ii(r){return r instanceof K||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function ip(r){return r===K||r.name==="Complex128Array"}function N1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Lr}function A1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Lr*2}function K(){var r,e,t,i;if(e=arguments.length,!(this instanceof K))return e===0?new K:e===1?new K(arguments[0]):e===2?new K(arguments[0],arguments[1]):new K(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Mr(0);else if(e===1)if(Qi(arguments[0]))t=new Mr(arguments[0]*2);else if(qo(arguments[0]))if(t=arguments[0],i=t.length,i&&m1r(t)&&ei(t[0])){if(t=E1r(new Mr(i*2),t),t===null){if(!ua(i))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(arguments[0])}}else{if(N1r(t))t=h1r(t,0);else if(A1r(t))t=q1r(t,0);else if(!ua(i))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(t)}else if(Q9(arguments[0])){if(t=arguments[0],!ho(t.byteLength/Lr))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Lr,t.byteLength));t=new Mr(t)}else if(K9(arguments[0])){if(t=arguments[0],tp===!1)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!It(t[ti]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ti](),!It(t.next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=ep(t),t instanceof Error)throw t;t=new Mr(t)}else throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Q9(t))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Qi(r))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ho(r/Lr))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Lr,r));if(e===2){if(i=t.byteLength-r,!ho(i/Lr))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Lr,i));t=new Mr(t,r)}else{if(i=arguments[2],!Qi(i))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Lr>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Lr));t=new Mr(t,r,i*2)}}return mr(this,"_buffer",t),mr(this,"_length",t.length/2),this}mr(K,"BYTES_PER_ELEMENT",Lr);mr(K,"name","Complex64Array");mr(K,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,m;if(!It(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ip(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!It(n))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(ii(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),ei(l))u[m]=oa(l),u[m+1]=va(l);else if($9(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(qo(e)){if(n){for(v=e.length,e.get&&e.set?f=b1r("default"):f=y1r("default"),p=0;p<v;p++)if(!ei(f(e,p))){c=!0;break}if(c){if(!ua(v))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),ei(l))u[m]=oa(l),u[m+1]=va(l);else if($9(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(K9(e)&&tp&&It(e[ti])){if(u=e[ti](),!It(u.next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=w1r(u,n,t):o=ep(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});mr(K,"of",function(){var e,t;if(!It(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ip(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});fa(K.prototype,"buffer",function(){return this._buffer.buffer});fa(K.prototype,"byteLength",function(){return this._buffer.byteLength});fa(K.prototype,"byteOffset",function(){return this._buffer.byteOffset});mr(K.prototype,"BYTES_PER_ELEMENT",K.BYTES_PER_ELEMENT);mr(K.prototype,"copyWithin",function(e,t){if(!ii(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});mr(K.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!ii(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},mr(i,"next",f),mr(i,"return",v),ti&&mr(i,ti,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new rp(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});mr(K.prototype,"get",function(e){var t;if(!ii(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qi(e))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new rp(t[e],t[e+1])});fa(K.prototype,"length",function(){return this._length});mr(K.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!ii(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Qi(i))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ei(e)){if(i>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=oa(e),n[i+1]=va(e);return}if(ii(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(qo(e)){for(o=e.length,v=0;v<o;v++)if(!ei(e[v])){u=!0;break}if(u){if(!ua(o))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=oa(f),n[i+1]=va(f),i+=2;return}throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});np.exports=K});var Ki=s((pae,sp)=>{"use strict";var O1r=ap();sp.exports=O1r});var op=s((gae,up)=>{"use strict";function S1r(r){return r.re}up.exports=S1r});var We=s((mae,vp)=>{"use strict";var T1r=op();vp.exports=T1r});var cp=s((dae,fp)=>{"use strict";function I1r(r){return r.im}fp.exports=I1r});var ze=s((hae,lp)=>{"use strict";var _1r=cp();lp.exports=_1r});var gp=s((qae,pp)=>{"use strict";var L1r=Ot(),P1r=Hr(),R1r=y(),F1r=We(),M1r=ze();function B1r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,L1r(i)&&i.length>=2)e.push(i[0],i[1]);else if(P1r(i))e.push(F1r(i),M1r(i));else return new TypeError(R1r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}pp.exports=B1r});var dp=s((yae,mp)=>{"use strict";var k1r=Ot(),j1r=Hr(),C1r=y(),G1r=We(),V1r=ze();function U1r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),k1r(a)&&a.length>=2)i.push(a[0],a[1]);else if(j1r(a))i.push(G1r(a),V1r(a));else return new TypeError(C1r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}mp.exports=U1r});var qp=s((bae,hp)=>{"use strict";var H1r=Hr(),W1r=We(),z1r=ze();function D1r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!H1r(i))return null;r[a]=W1r(i),r[a+1]=z1r(i),a+=2}return r}hp.exports=D1r});var Tp=s((wae,Sp)=>{"use strict";var rn=Ve().isPrimitive,yp=Ot(),bo=Vr(),bp=go(),wp=ra(),X1r=lr(),_t=L(),ni=Hr(),ca=ea(),yo=_r(),J1r=ia(),ai=na(),dr=w(),ga=P(),Br=gr(),Ep=$t(),la=We(),pa=ze(),x1r=Kt(),Y1r=ri(),Z1r=aa(),$1r=sa(),Z=y(),Np=gp(),Q1r=dp(),K1r=qp(),Pr=Br.BYTES_PER_ELEMENT*2,Ap=J1r();function si(r){return r instanceof rr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Op(r){return r===rr||r.name==="Complex64Array"}function r3r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Pr/2}function e3r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Pr}function rr(){var r,e,t,i;if(e=arguments.length,!(this instanceof rr))return e===0?new rr:e===1?new rr(arguments[0]):e===2?new rr(arguments[0],arguments[1]):new rr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Br(0);else if(e===1)if(rn(arguments[0]))t=new Br(arguments[0]*2);else if(bo(arguments[0]))if(t=arguments[0],i=t.length,i&&X1r(t)&&ni(t[0])){if(t=K1r(new Br(i*2),t),t===null){if(!ca(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Br(arguments[0])}}else{if(r3r(t))t=x1r(t,0);else if(e3r(t))t=Y1r(t,0);else if(!ca(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Br(t)}else if(bp(arguments[0])){if(t=arguments[0],!yo(t.byteLength/Pr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Pr,t.byteLength));t=new Br(t)}else if(wp(arguments[0])){if(t=arguments[0],Ap===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!_t(t[ai]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ai](),!_t(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Np(t),t instanceof Error)throw t;t=new Br(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!bp(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!rn(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!yo(r/Pr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Pr,r));if(e===2){if(i=t.byteLength-r,!yo(i/Pr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Pr,i));t=new Br(t,r)}else{if(i=arguments[2],!rn(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Pr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Pr));t=new Br(t,r,i*2)}}return dr(this,"_buffer",t),dr(this,"_length",t.length/2),this}dr(rr,"BYTES_PER_ELEMENT",Pr);dr(rr,"name","Complex128Array");dr(rr,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,m;if(!_t(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Op(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!_t(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(si(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),ni(l))u[m]=la(l),u[m+1]=pa(l);else if(yp(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(bo(e)){if(n){for(v=e.length,e.get&&e.set?f=$1r("default"):f=Z1r("default"),p=0;p<v;p++)if(!ni(f(e,p))){c=!0;break}if(c){if(!ca(v))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),ni(l))u[m]=la(l),u[m+1]=pa(l);else if(yp(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(wp(e)&&Ap&&_t(e[ai])){if(u=e[ai](),!_t(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=Q1r(u,n,t):o=Np(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});dr(rr,"of",function(){var e,t;if(!_t(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Op(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ga(rr.prototype,"buffer",function(){return this._buffer.buffer});ga(rr.prototype,"byteLength",function(){return this._buffer.byteLength});ga(rr.prototype,"byteOffset",function(){return this._buffer.byteOffset});dr(rr.prototype,"BYTES_PER_ELEMENT",rr.BYTES_PER_ELEMENT);dr(rr.prototype,"copyWithin",function(e,t){if(!si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});dr(rr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},dr(i,"next",f),dr(i,"return",v),ai&&dr(i,ai,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Ep(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});dr(rr.prototype,"get",function(e){var t;if(!si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!rn(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Ep(t[e],t[e+1])});ga(rr.prototype,"length",function(){return this._length});dr(rr.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!rn(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ni(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=la(e),n[i+1]=pa(e);return}if(si(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Br(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(bo(e)){for(o=e.length,v=0;v<o;v++)if(!ni(e[v])){u=!0;break}if(u){if(!ca(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Br(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=la(f),n[i+1]=pa(f),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Sp.exports=rr});var en=s((Eae,Ip)=>{"use strict";var t3r=Tp();Ip.exports=t3r});var Lp=s((Nae,_p)=>{"use strict";var i3r=gr(),n3r=Kr(),a3r=pr(),s3r=At(),u3r=Yt(),o3r=Ji(),v3r=Zt(),f3r=xi(),c3r=Yi(),l3r=Ki(),p3r=en(),g3r=[i3r,n3r,s3r,a3r,o3r,u3r,c3r,v3r,f3r,l3r,p3r];_p.exports=g3r});var Rp=s((Aae,Pp)=>{"use strict";var m3r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];Pp.exports=m3r});var Bp=s((Oae,Mp)=>{"use strict";var d3r=Nt(),h3r=lr(),q3r=Ge(),y3r=r5(),b3r=Lp(),Fp=Rp(),w3r=Fp.length;function E3r(r){var e;if(h3r(r))return"generic";if(d3r(r))return null;for(e=0;e<w3r;e++)if(r instanceof b3r[e])return Fp[e];return y3r[q3r(r)]||null}Mp.exports=E3r});var ma=s((Sae,kp)=>{"use strict";var N3r=Bp();kp.exports=N3r});var Gp=s((Tae,Cp)=>{"use strict";var jp=L(),A3r=Vr(),O3r=Vc(),S3r=Hu(),T3r=Wu(),I3r=zu(),_3r=ma(),wo=y();function L3r(){var r,e,t,i,n,a,u,o,f;if(r=arguments[0],arguments.length>1)if(A3r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!jp(t))throw new TypeError(wo("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!jp(t))throw new TypeError(wo("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!O3r(r))throw new TypeError(wo("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=_3r(i),S3r(i)?a=T3r(u):a=I3r(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}Cp.exports=L3r});var Up=s((Iae,Vp)=>{"use strict";var P3r=Gp();Vp.exports=P3r});var Wp=s((_ae,Hp)=>{"use strict";function R3r(r){return r!==r}Hp.exports=R3r});var E=s((Lae,zp)=>{"use strict";var F3r=Wp();zp.exports=F3r});var Xp=s((Pae,Dp)=>{"use strict";var M3r={Complex64:"complex64",Complex128:"complex128"};Dp.exports=M3r});var xp=s((Rae,Jp)=>{"use strict";var B3r=Qt(),k3r=$t(),j3r=[B3r,k3r];Jp.exports=j3r});var Zp=s((Fae,Yp)=>{"use strict";var C3r=["complex64","complex128"];Yp.exports=C3r});var Kp=s((Mae,Qp)=>{"use strict";var G3r=Ge(),V3r=Xp(),U3r=xp(),$p=Zp(),H3r=$p.length;function W3r(r){var e;for(e=0;e<H3r;e++)if(r instanceof U3r[e])return $p[e];return V3r[G3r(r)]||null}Qp.exports=W3r});var Eo=s((Bae,rg)=>{"use strict";var z3r=Kp();rg.exports=z3r});var tg=s((kae,eg)=>{"use strict";var D3r=gr(),X3r=Kr(),J3r=en(),x3r=Ki(),Y3r={float64:D3r,float32:X3r,complex128:J3r,complex64:x3r};eg.exports=Y3r});var ng=s((jae,ig)=>{"use strict";var Z3r=tg();function $3r(r){return Z3r[r]||null}ig.exports=$3r});var sg=s((Cae,ag)=>{"use strict";var Q3r=ng();ag.exports=Q3r});var og=s((Gae,ug)=>{"use strict";function K3r(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}ug.exports=K3r});var gg=s((Vae,pg)=>{"use strict";var r6r=Qt(),e6r=$t(),vg=We(),fg=ze(),cg=Ue(),lg=He();function t6r(r,e,t,i,n,a){var u,o,f,v,c,l,p,m,h,d,g,q,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=cg(e),l=lg(e)):(v=vg(e),l=fg(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=cg(i),p=lg(i)):(c=vg(i),p=fg(i)),o===2?u=r6r:u=e6r,n===1)return a?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],a?q=n-1:q=n,d=(c-v)/q,g=(p-l)/q,N=1;N<q;N++)m=v+d*N,h=l+g*N,f.push(new u(m,h));return a&&f.push(new u(c,p)),f}pg.exports=t6r});var No=s((Uae,mg)=>{"use strict";function i6r(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}mg.exports=i6r});var Ao=s((Hae,bg)=>{"use strict";var dg=We(),hg=ze(),qg=Ue(),yg=He();function n6r(r,e,t,i,n,a,u){var o,f,v,c,l,p,m,h,d;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=qg(t),v=yg(t)):(o=dg(t),v=hg(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=qg(n),c=yg(n)):(f=dg(n),c=hg(n)),a===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?m=a-1:m=a,l=(f-o)/m,p=(c-v)/m,d=2,h=1;h<m;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}bg.exports=n6r});var Eg=s((Wae,wg)=>{"use strict";var a6r=Object;wg.exports=a6r});var ui=s((zae,Ng)=>{"use strict";var s6r=Eg();Ng.exports=s6r});var Og=s((Dae,Ag)=>{"use strict";var u6r=Object.getPrototypeOf;Ag.exports=u6r});var Tg=s((Xae,Sg)=>{"use strict";function o6r(r){return r.__proto__}Sg.exports=o6r});var _g=s((Jae,Ig)=>{"use strict";var v6r=ir(),f6r=Tg();function c6r(r){var e=f6r(r);return e||e===null?e:v6r(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Ig.exports=c6r});var Pg=s((xae,Lg)=>{"use strict";var l6r=L(),p6r=Og(),g6r=_g(),Oo;l6r(Object.getPrototypeOf)?Oo=p6r:Oo=g6r;Lg.exports=Oo});var Fg=s((Yae,Rg)=>{"use strict";var m6r=ui(),d6r=Pg();function h6r(r){return r==null?null:(r=m6r(r),d6r(r))}Rg.exports=h6r});var Lt=s((Zae,Mg)=>{"use strict";var q6r=Fg();Mg.exports=q6r});var jg=s(($ae,kg)=>{"use strict";var y6r=ra(),Bg=L(),b6r=Lt(),da=O(),w6r=ir(),E6r=Object.prototype;function N6r(r){var e;for(e in r)if(!da(r,e))return!1;return!0}function A6r(r){var e;return y6r(r)?(e=b6r(r),e?!da(r,"constructor")&&da(e,"constructor")&&Bg(e.constructor)&&w6r(e.constructor)==="[object Function]"&&da(e,"isPrototypeOf")&&Bg(e.isPrototypeOf)&&(e===E6r||N6r(r)):!0):!1}kg.exports=A6r});var _=s((Qae,Cg)=>{"use strict";var O6r=jg();Cg.exports=O6r});var So=s((Kae,Gg)=>{"use strict";function S6r(r){return typeof r=="string"}Gg.exports=S6r});var Ug=s((r0e,Vg)=>{"use strict";var T6r=String.prototype.valueOf;Vg.exports=T6r});var Wg=s((e0e,Hg)=>{"use strict";var I6r=Ug();function _6r(r){try{return I6r.call(r),!0}catch{return!1}}Hg.exports=_6r});var To=s((t0e,zg)=>{"use strict";var L6r=Di(),P6r=ir(),R6r=Wg(),F6r=L6r();function M6r(r){return typeof r=="object"?r instanceof String?!0:F6r?R6r(r):P6r(r)==="[object String]":!1}zg.exports=M6r});var Xg=s((i0e,Dg)=>{"use strict";var B6r=So(),k6r=To();function j6r(r){return B6r(r)||k6r(r)}Dg.exports=j6r});var er=s((n0e,xg)=>{"use strict";var Jg=w(),Io=Xg(),C6r=So(),G6r=To();Jg(Io,"isPrimitive",C6r);Jg(Io,"isObject",G6r);xg.exports=Io});var Lo=s((a0e,Zg)=>{"use strict";var V6r=_(),Yg=O(),U6r=er().isPrimitive,H6r=cr().isPrimitive,_o=y();function W6r(r,e){return V6r(e)?Yg(e,"dtype")&&(r.dtype=e.dtype,!U6r(r.dtype))?new TypeError(_o("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Yg(e,"endpoint")&&(r.endpoint=e.endpoint,!H6r(r.endpoint))?new TypeError(_o("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(_o("invalid argument. Options argument must be an object. Value: `%s`.",e))}Zg.exports=W6r});var Po=s((s0e,z6r)=>{z6r.exports={endpoint:!0}});var im=s((u0e,tm)=>{"use strict";var $g=Hr(),Qg=j().isPrimitive,D6r=Ve().isPrimitive,Kg=E(),rm=Eo(),X6r=sg(),J6r=Kt(),x6r=ri(),oi=y(),Y6r=og(),Z6r=gg(),$6r=No(),em=Ao(),Q6r=Lo(),K6r=Po();function r4r(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(o=rm(r),o===null){if(!$g(r))throw new TypeError(oi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!Qg(r)||Kg(r))throw new TypeError(oi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=rm(e),f===null){if(!$g(e))throw new TypeError(oi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!Qg(e)||Kg(e))throw new TypeError(oi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!D6r(t))throw new TypeError(oi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:K6r.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=Q6r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?Z6r(o,r,f,e,t,i.endpoint):Y6r(r,e,t,i.endpoint);if(n=X6r(i.dtype),n===null)throw new TypeError(oi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return em(J6r(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return em(x6r(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return $6r(u,r,e,t,i.endpoint)}tm.exports=r4r});var am=s((o0e,nm)=>{"use strict";var e4r=Hu(),t4r=aa(),i4r=zu(),n4r=sa(),a4r=Wu(),s4r=ma();function u4r(r){var e=s4r(r);return e4r(r)?{accessorProtocol:!0,accessors:[n4r(e),a4r(e)]}:{accessorProtocol:!1,accessors:[t4r(e),i4r(e)]}}nm.exports=u4r});var um=s((v0e,sm)=>{"use strict";var o4r=am();sm.exports=o4r});var vm=s((f0e,om)=>{"use strict";var v4r=um();function f4r(r){var e=v4r(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}om.exports=f4r});var ha=s((c0e,fm)=>{"use strict";var c4r=vm();fm.exports=c4r});var dm=s((l0e,mm)=>{"use strict";var l4r=Qt(),p4r=$t(),cm=We(),lm=ze(),pm=Ue(),gm=He();function g4r(r,e,t,i,n,a,u){var o,f,v,c,l,p,m,h,d,g,q,N,A,F;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=pm(t),l=gm(t)):(v=cm(t),l=lm(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=pm(n),p=gm(n)):(c=cm(n),p=lm(n)),f===2?o=l4r:o=p4r,h=r.data,m=r.accessors[1],a===1)return u?m(h,0,new o(c,p)):m(h,0,new o(v,l)),r;for(m(h,0,new o(v,l)),u?A=a-1:A=a,q=(c-v)/A,N=(p-l)/A,F=1;F<A;F++)d=v+q*F,g=l+N*F,m(h,F,new o(d,g));return u&&m(h,A,new o(c,p)),r}mm.exports=g4r});var qm=s((p0e,hm)=>{"use strict";function m4r(r,e,t,i,n){var a,u,o,f,v;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(a,v,e+f*v);return n&&u(a,o,t),r}hm.exports=m4r});var Sm=s((g0e,Om)=>{"use strict";var ym=Hr(),bm=j().isPrimitive,d4r=Vr(),tn=y(),wm=E(),Em=Eo(),h4r=ma(),q4r=Kt(),y4r=ri(),Nm=ha(),b4r=dm(),w4r=qm(),Am=Ao(),E4r=No(),N4r=Lo(),A4r=Po();function O4r(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(a=Em(r),a===null){if(!ym(r))throw new TypeError(tn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!bm(r)||wm(r))throw new TypeError(tn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=Em(e),u===null){if(!ym(e))throw new TypeError(tn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!bm(e)||wm(e))throw new TypeError(tn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!d4r(t))throw new TypeError(tn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:A4r.endpoint},arguments.length>3&&(n=N4r(i,arguments[3]),n))throw n;if(f=h4r(t),f===null&&(f="generic"),f==="complex64")return Am(q4r(t,0),a,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return Am(y4r(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=Nm(t),b4r(v,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=Nm(t),v.accessorProtocol?(w4r(v,r,e,t.length,i.endpoint),t):(E4r(t,r,e,t.length,i.endpoint),t)}Om.exports=O4r});var _m=s((m0e,Im)=>{"use strict";var S4r=w(),Tm=im(),T4r=Sm();S4r(Tm,"assign",T4r);Im.exports=Tm});var Pm=s((d0e,Lm)=>{"use strict";var I4r=j().isPrimitive,_4r=er().isPrimitive,L4r=cr().isPrimitive,P4r=lr(),R4r=y(),F4r={number:I4r,string:_4r,boolean:L4r};function M4r(r,e,t){var i,n,a,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],a=e[f],u=F4r[a],u(o))i.push([[o]]),n.push([1,1]);else if(P4r(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(R4r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],a,a,String(o)));return[i,n]}Lm.exports=M4r});var Ro=s((h0e,Rm)=>{"use strict";var B4r=Pm();Rm.exports=B4r});var Mm=s((q0e,Fm)=>{"use strict";var k4r=Zn();function j4r(r){return k4r(1,r)}Fm.exports=j4r});var km=s((y0e,Bm)=>{"use strict";var C4r=Mm();Bm.exports=C4r});var Cm=s((b0e,jm)=>{"use strict";function G4r(r,e,t){var i,n,a,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],a=0;a<i;a++)f[a]=t(o[a])}jm.exports=G4r});var Fo=s((w0e,Gm)=>{"use strict";var V4r=Cm();Gm.exports=V4r});var Um=s((E0e,Vm)=>{"use strict";var U4r=Zn();function H4r(r){return U4r(0,r)}Vm.exports=H4r});var Mo=s((N0e,Hm)=>{"use strict";var W4r=Um();Hm.exports=W4r});var zm=s((A0e,Wm)=>{"use strict";var kr=ar(),z4r=Su(),D4r=Rv(),X4r=Iu(),J4r=Zn(),x4r=Hv(),Y4r=_u(),Z4r=Up(),$4r=_m(),Q4r=Ro(),K4r=km(),rvr=Fo(),evr=Mo();function tvr(r){return kr(r,"bbinary2d",z4r),kr(r,"bternary2d",D4r),kr(r,"broadcastShapes",X4r),kr(r,"filled2d",J4r),kr(r,"filled2dBy",x4r),kr(r,"flattenArray",Y4r),kr(r,"iterator2array",Z4r),kr(r,"linspace",$4r),kr(r,"normalizeBroadcastArgs",Q4r),kr(r,"ones2d",K4r),kr(r,"unary2d",rvr),kr(r,"zeros2d",evr),r}Wm.exports=tvr});var Jm=s((O0e,Xm)=>{"use strict";var Dm=y();function ivr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(Dm('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(Dm('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}Xm.exports=ivr});var Ym=s((S0e,xm)=>{"use strict";var nvr=Jm();xm.exports=nvr});var $m=s((T0e,Zm)=>{"use strict";var avr=j().isPrimitive,svr=Ym(),uvr=y();function ovr(r,e,t,i,n,a){var u,o;if(!(avr(r)&&svr(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(uvr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}Zm.exports=ovr});var Km=s((I0e,Qm)=>{"use strict";var vvr=$m();Qm.exports=vvr});var ed=s((_0e,rd)=>{"use strict";var fvr=cr().isPrimitive,cvr=y();function lvr(r,e){if(!fvr(r))throw new TypeError(cvr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}rd.exports=lvr});var id=s((L0e,td)=>{"use strict";var pvr=ed();td.exports=pvr});var ad=s((P0e,nd)=>{"use strict";function gvr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}nd.exports=gvr});var ud=s((R0e,sd)=>{"use strict";var mvr=ad();sd.exports=mvr});var vd=s((F0e,od)=>{"use strict";var dvr=y(),hvr=ud();function qvr(r,e,t){if(!hvr(r,e))throw new TypeError(dvr("invalid argument. %s must be broadcast compatible.",t))}od.exports=qvr});var cd=s((M0e,fd)=>{"use strict";var yvr=vd();fd.exports=yvr});var pd=s((B0e,ld)=>{"use strict";function bvr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}ld.exports=bvr});var md=s((k0e,gd)=>{"use strict";var wvr=pd();gd.exports=wvr});var hd=s((j0e,dd)=>{"use strict";var Evr=y(),Nvr=md();function Avr(r,e,t,i){if(!Nvr(r,e))throw new TypeError(Evr("invalid argument. %s must be broadcast compatible with %s.",t,i))}dd.exports=Avr});var yd=s((C0e,qd)=>{"use strict";var Ovr=hd();qd.exports=Ovr});var wd=s((G0e,bd)=>{"use strict";var Svr=y();function Tvr(r,e){if(r===void 0)throw new Error(Svr("invalid invocation. Must provide %s.",e))}bd.exports=Tvr});var Bo=s((V0e,Ed)=>{"use strict";var Ivr=wd();Ed.exports=Ivr});var Ad=s((U0e,Nd)=>{"use strict";var _vr=y();function Lvr(r,e,t,i){if(!(r>e))throw new TypeError(_vr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Nd.exports=Lvr});var Sd=s((H0e,Od)=>{"use strict";var Pvr=Ad();Od.exports=Pvr});var Id=s((W0e,Td)=>{"use strict";var Rvr=y();function Fvr(r,e,t,i){if(!(r>=e))throw new TypeError(Rvr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Td.exports=Fvr});var Ld=s((z0e,_d)=>{"use strict";var Mvr=Id();_d.exports=Mvr});var Rd=s((D0e,Pd)=>{"use strict";var Bvr=Ur().isPrimitive,kvr=y();function jvr(r,e){if(!Bvr(r))throw new TypeError(kvr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}Pd.exports=jvr});var Md=s((X0e,Fd)=>{"use strict";var Cvr=Rd();Fd.exports=Cvr});var kd=s((J0e,Bd)=>{"use strict";var Gvr=y();function Vvr(r,e,t,i){if(!(r<e))throw new TypeError(Gvr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Bd.exports=Vvr});var Cd=s((x0e,jd)=>{"use strict";var Uvr=kd();jd.exports=Uvr});var Vd=s((Y0e,Gd)=>{"use strict";var Hvr=y();function Wvr(r,e,t,i){if(!(r<=e))throw new TypeError(Hvr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Gd.exports=Wvr});var Hd=s((Z0e,Ud)=>{"use strict";var zvr=Vd();Ud.exports=zvr});var zd=s(($0e,Wd)=>{"use strict";var Dvr=Ve().isPrimitive,Xvr=y();function Jvr(r,e){if(!Dvr(r))throw new TypeError(Xvr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Wd.exports=Jvr});var Xd=s((Q0e,Dd)=>{"use strict";var xvr=zd();Dd.exports=xvr});var ko=s((K0e,Jd)=>{"use strict";var Yvr=j().isPrimitive;function Zvr(r){return Yvr(r)&&r>=0}Jd.exports=Zvr});var jo=s((rse,xd)=>{"use strict";var $vr=j().isObject;function Qvr(r){return $vr(r)&&r.valueOf()>=0}xd.exports=Qvr});var Zd=s((ese,Yd)=>{"use strict";var Kvr=ko(),rfr=jo();function efr(r){return Kvr(r)||rfr(r)}Yd.exports=efr});var Go=s((tse,Qd)=>{"use strict";var $d=w(),Co=Zd(),tfr=ko(),ifr=jo();$d(Co,"isPrimitive",tfr);$d(Co,"isObject",ifr);Qd.exports=Co});var rh=s((ise,Kd)=>{"use strict";var nfr=Go().isPrimitive,afr=y();function sfr(r,e){if(!nfr(r))throw new TypeError(afr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Kd.exports=sfr});var th=s((nse,eh)=>{"use strict";var ufr=rh();eh.exports=ufr});var nh=s((ase,ih)=>{"use strict";var ofr=j().isPrimitive,vfr=y();function ffr(r,e){if(!ofr(r))throw new TypeError(vfr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}ih.exports=ffr});var sh=s((sse,ah)=>{"use strict";var cfr=nh();ah.exports=cfr});var oh=s((use,uh)=>{"use strict";var lfr=y();function pfr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(lfr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}uh.exports=pfr});var fh=s((ose,vh)=>{"use strict";var gfr=oh();vh.exports=gfr});var Vo=s((vse,ch)=>{"use strict";var mfr=Ur().isPrimitive;function dfr(r){return mfr(r)&&r>0}ch.exports=dfr});var Uo=s((fse,lh)=>{"use strict";var hfr=Ur().isObject;function qfr(r){return hfr(r)&&r.valueOf()>0}lh.exports=qfr});var gh=s((cse,ph)=>{"use strict";var yfr=Vo(),bfr=Uo();function wfr(r){return yfr(r)||bfr(r)}ph.exports=wfr});var ee=s((lse,dh)=>{"use strict";var mh=w(),Ho=gh(),Efr=Vo(),Nfr=Uo();mh(Ho,"isPrimitive",Efr);mh(Ho,"isObject",Nfr);dh.exports=Ho});var qh=s((pse,hh)=>{"use strict";var Afr=ee().isPrimitive,Ofr=y();function Sfr(r,e){if(!Afr(r))throw new TypeError(Ofr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}hh.exports=Sfr});var Wo=s((gse,yh)=>{"use strict";var Tfr=qh();yh.exports=Tfr});var zo=s((mse,bh)=>{"use strict";var Ifr=j().isPrimitive;function _fr(r){return Ifr(r)&&r>0}bh.exports=_fr});var Do=s((dse,wh)=>{"use strict";var Lfr=j().isObject;function Pfr(r){return Lfr(r)&&r.valueOf()>0}wh.exports=Pfr});var Nh=s((hse,Eh)=>{"use strict";var Rfr=zo(),Ffr=Do();function Mfr(r){return Rfr(r)||Ffr(r)}Eh.exports=Mfr});var D=s((qse,Oh)=>{"use strict";var Ah=w(),Xo=Nh(),Bfr=zo(),kfr=Do();Ah(Xo,"isPrimitive",Bfr);Ah(Xo,"isObject",kfr);Oh.exports=Xo});var Th=s((yse,Sh)=>{"use strict";var jfr=D().isPrimitive,Cfr=y();function Gfr(r,e){if(!jfr(r))throw new TypeError(Cfr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}Sh.exports=Gfr});var _h=s((bse,Ih)=>{"use strict";var Vfr=Th();Ih.exports=Vfr});var Jo=s((wse,Lh)=>{"use strict";var Ufr=j().isPrimitive;function Hfr(r){return Ufr(r)&&r>=0&&r<=1}Lh.exports=Hfr});var xo=s((Ese,Ph)=>{"use strict";var Wfr=j().isObject;function zfr(r){return Wfr(r)&&r.valueOf()>=0&&r.valueOf()<=1}Ph.exports=zfr});var Fh=s((Nse,Rh)=>{"use strict";var Dfr=Jo(),Xfr=xo();function Jfr(r){return Dfr(r)||Xfr(r)}Rh.exports=Jfr});var nn=s((Ase,Bh)=>{"use strict";var Mh=w(),Yo=Fh(),xfr=Jo(),Yfr=xo();Mh(Yo,"isPrimitive",xfr);Mh(Yo,"isObject",Yfr);Bh.exports=Yo});var jh=s((Ose,kh)=>{"use strict";var Zfr=nn().isPrimitive,$fr=y();function Qfr(r,e){if(!Zfr(r))throw new TypeError($fr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}kh.exports=Qfr});var Gh=s((Sse,Ch)=>{"use strict";var Kfr=jh();Ch.exports=Kfr});var Uh=s((Tse,Vh)=>{"use strict";var rcr=lr(),ecr=y();function tcr(r,e){if(!rcr(r))throw new TypeError(ecr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Vh.exports=tcr});var Wh=s((Ise,Hh)=>{"use strict";var icr=Uh();Hh.exports=icr});var Dh=s((_se,zh)=>{"use strict";function ncr(r){return r.length===1||r[0].length===1}zh.exports=ncr});var Jh=s((Lse,Xh)=>{"use strict";var acr=Dh();Xh.exports=acr});var Yh=s((Pse,xh)=>{"use strict";var scr=lr(),ucr=Jh();function ocr(r){return scr(r)&&ucr(r)}xh.exports=ocr});var $h=s((Rse,Zh)=>{"use strict";var vcr=Yh();Zh.exports=vcr});var Kh=s((Fse,Qh)=>{"use strict";var fcr=y(),ccr=$h();function lcr(r,e){if(!ccr(r))throw new TypeError(fcr("invalid argument. %s must consist of only a single row or a single column.",e))}Qh.exports=lcr});var eq=s((Mse,rq)=>{"use strict";var pcr=Kh();rq.exports=pcr});var iq=s((Bse,tq)=>{"use strict";function gcr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}tq.exports=gcr});var aq=s((kse,nq)=>{"use strict";var mcr=iq();nq.exports=mcr});var uq=s((jse,sq)=>{"use strict";var dcr=y(),hcr=aq();function qcr(r,e,t){if(!hcr(r,e))throw new TypeError(dcr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}sq.exports=qcr});var vq=s((Cse,oq)=>{"use strict";var ycr=uq();oq.exports=ycr});var cq=s((Gse,fq)=>{"use strict";var bcr=er().isPrimitive,wcr=y();function Ecr(r,e){if(!bcr(r))throw new TypeError(wcr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}fq.exports=Ecr});var pq=s((Vse,lq)=>{"use strict";var Ncr=cq();lq.exports=Ncr});var mq=s((Use,gq)=>{"use strict";var Acr=y();function Ocr(r){throw new Error(Acr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}gq.exports=Ocr});var hq=s((Hse,dq)=>{"use strict";var Scr=mq();dq.exports=Scr});var bq=s((Wse,yq)=>{"use strict";var qq=Wo(),Tcr=Bo();function Icr(r,e,t){qq(r,"Number of rows"),qq(e,"Number of columns"),Tcr(t,"a pseudorandom number generator seed")}yq.exports=Icr});var Eq=s((zse,wq)=>{"use strict";var _cr=bq();wq.exports=_cr});var Aq=s((Dse,Nq)=>{"use strict";var $=ar(),Lcr=lr(),Pcr=Km(),Rcr=id(),Fcr=cd(),Mcr=yd(),Bcr=Bo(),kcr=Sd(),jcr=Ld(),Ccr=Md(),Gcr=Cd(),Vcr=Hd(),Ucr=Xd(),Hcr=th(),Wcr=sh(),zcr=fh(),Dcr=Wo(),Xcr=_h(),Jcr=Gh(),xcr=Wh(),Ycr=eq(),Zcr=vq(),$cr=pq(),Qcr=hq(),Kcr=Eq();function r5r(r){return $(r,"isBetween",Pcr),$(r,"isBoolean",Rcr),$(r,"isBroadcastCompatible",Fcr),$(r,"isBroadcastCompatibleWith",Mcr),$(r,"isDefined",Bcr),$(r,"isGreaterThan",kcr),$(r,"isGreaterThanEqual",jcr),$(r,"isInteger",Ccr),$(r,"isLessThan",Gcr),$(r,"isLessThanEqual",Vcr),$(r,"isNonNegativeInteger",Ucr),$(r,"isNonNegativeNumber",Hcr),$(r,"isNumber",Wcr),$(r,"isOneOf",zcr),$(r,"isPositiveInteger",Dcr),$(r,"isPositiveNumber",Xcr),$(r,"isProbability",Jcr),$(r,"isRange",xcr),$(r,"isRange1d",Ycr),$(r,"isSameShape",Zcr),$(r,"isString",$cr),$(r,"unrecognizedOptionName",Qcr),$(r,"verifyCommonPRNGArgs",Kcr),r.base={},$(r.base,"isArray",Lcr),r}Nq.exports=r5r});var Sq=s((Xse,Oq)=>{"use strict";var Zo=4;function e5r(r,e,t,i,n,a){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%Zo,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<Zo)return n;for(v=f;v<r;v+=Zo)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=a;return n}Oq.exports=e5r});var Iq=s((Jse,Tq)=>{"use strict";var an=4;function t5r(r,e,t,i,n,a,u,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&u===1){if(c=r%an,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=u;if(r<an)return a;for(l=c;l<r;l+=an)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=an,v+=an;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=u;return a}Tq.exports=t5r});var $o=s((xse,Lq)=>{"use strict";var i5r=w(),_q=Sq(),n5r=Iq();i5r(_q,"ndarray",n5r);Lq.exports=_q});var Fq=s((Yse,Rq)=>{"use strict";var Pq=ar(),a5r=$o().ndarray,s5r=$o().ndarray;function u5r(r){return Pq(r,"daxpy",a5r),Pq(r,"saxpy",s5r),r}Rq.exports=u5r});var Bq=s((Zse,Mq)=>{"use strict";var o5r=Lt(),v5r=ir();function f5r(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(v5r(r)==="[object Error]")return!0;r=o5r(r)}return!1}Mq.exports=f5r});var jq=s(($se,kq)=>{"use strict";var c5r=Bq();kq.exports=c5r});var Qo=s((Qse,Cq)=>{"use strict";function l5r(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Cq.exports=l5r});var Vq=s((Kse,Gq)=>{"use strict";var p5r=Qo(),g5r=p5r();Gq.exports=g5r});var Wq=s((rue,Hq)=>{"use strict";var m5r=w(),Uq=Qo(),d5r=Vq();m5r(Uq,"REGEXP",d5r);Hq.exports=Uq});var Dq=s((eue,zq)=>{"use strict";var h5r=er().isPrimitive,q5r=Wq(),y5r=y();function b5r(r){if(!h5r(r))throw new TypeError(y5r("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=q5r().exec(r),r?new RegExp(r[1],r[2]):null}zq.exports=b5r});var Jq=s((tue,Xq)=>{"use strict";var w5r=Dq();Xq.exports=w5r});var Ko=s((iue,xq)=>{"use strict";var E5r=j().isPrimitive,N5r=E();function A5r(r){return E5r(r)&&N5r(r)}xq.exports=A5r});var r2=s((nue,Yq)=>{"use strict";var O5r=j().isObject,S5r=E();function T5r(r){return O5r(r)&&S5r(r.valueOf())}Yq.exports=T5r});var $q=s((aue,Zq)=>{"use strict";var I5r=Ko(),_5r=r2();function L5r(r){return I5r(r)||_5r(r)}Zq.exports=L5r});var or=s((sue,Kq)=>{"use strict";var Qq=w(),e2=$q(),P5r=Ko(),R5r=r2();Qq(e2,"isPrimitive",P5r);Qq(e2,"isObject",R5r);Kq.exports=e2});var iy=s((uue,ty)=>{"use strict";var ry=or(),F5r=Vr(),M5r=er().isPrimitive,B5r=Ur().isPrimitive,ey=y();function k5r(r,e,t){var i,n;if(!F5r(r)&&!M5r(r))throw new TypeError(ey("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!B5r(t))throw new TypeError(ey("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(ry(e)){for(;n<i;n++)if(ry(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}ty.exports=k5r});var qa=s((oue,ny)=>{"use strict";var j5r=iy();ny.exports=j5r});var ya=s((vue,ay)=>{"use strict";function C5r(r){return Object.keys(Object(r))}ay.exports=C5r});var uy=s((fue,sy)=>{"use strict";var G5r=ya();function V5r(){return(G5r(arguments)||"").length!==2}function U5r(){return V5r(1,2)}sy.exports=U5r});var vy=s((cue,oy)=>{"use strict";var H5r=typeof Object.keys<"u";oy.exports=H5r});var t2=s((lue,fy)=>{"use strict";var W5r=ir();function z5r(r){return W5r(r)==="[object Arguments]"}fy.exports=z5r});var py=s((pue,ly)=>{"use strict";var D5r=t2(),cy;function X5r(){return D5r(arguments)}cy=X5r();ly.exports=cy});var i2=s((gue,gy)=>{"use strict";var J5r=Object.prototype.propertyIsEnumerable;gy.exports=J5r});var hy=s((mue,dy)=>{"use strict";var x5r=i2(),my;function Y5r(){return!x5r.call("beep","0")}my=Y5r();dy.exports=my});var yy=s((due,qy)=>{"use strict";var Z5r=er(),$5r=or().isPrimitive,Q5r=Ur().isPrimitive,K5r=i2(),r8r=hy();function e8r(r,e){var t;return r==null?!1:(t=K5r.call(r,e),!t&&r8r&&Z5r(r)?(e=+e,!$5r(e)&&Q5r(e)&&e>=0&&e<r.length):t)}qy.exports=e8r});var sn=s((hue,by)=>{"use strict";var t8r=yy();by.exports=t8r});var Ey=s((que,wy)=>{"use strict";var i8r=O(),n8r=sn(),a8r=lr(),s8r=_r(),u8r=Jt();function o8r(r){return r!==null&&typeof r=="object"&&!a8r(r)&&typeof r.length=="number"&&s8r(r.length)&&r.length>=0&&r.length<=u8r&&i8r(r,"callee")&&!n8r(r,"callee")}wy.exports=o8r});var a2=s((yue,Ny)=>{"use strict";var v8r=py(),f8r=t2(),c8r=Ey(),n2;v8r?n2=f8r:n2=c8r;Ny.exports=n2});var Sy=s((bue,Oy)=>{"use strict";var l8r=a2(),Ay=ya(),p8r=Array.prototype.slice;function g8r(r){return l8r(r)?Ay(p8r.call(r)):Ay(r)}Oy.exports=g8r});var Iy=s((wue,Ty)=>{"use strict";function m8r(){}Ty.exports=m8r});var C=s((Eue,_y)=>{"use strict";var d8r=Iy();_y.exports=d8r});var Py=s((Nue,Ly)=>{"use strict";var h8r=sn(),q8r=C(),y8r=h8r(q8r,"prototype");Ly.exports=y8r});var Fy=s((Aue,Ry)=>{"use strict";var b8r=sn(),w8r={toString:null},E8r=!b8r(w8r,"toString");Ry.exports=E8r});var s2=s((Oue,My)=>{"use strict";function N8r(r){return r.constructor&&r.constructor.prototype===r}My.exports=N8r});var By=s((Sue,A8r)=>{A8r.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var jy=s((Tue,ky)=>{"use strict";var O8r=typeof window>"u"?void 0:window;ky.exports=O8r});var Uy=s((Iue,Vy)=>{"use strict";var S8r=O(),T8r=qa(),Cy=$n(),I8r=s2(),_8r=By(),vi=jy(),Gy;function L8r(){var r;if(Cy(vi)==="undefined")return!1;for(r in vi)try{T8r(_8r,r)===-1&&S8r(vi,r)&&vi[r]!==null&&Cy(vi[r])==="object"&&I8r(vi[r])}catch{return!0}return!1}Gy=L8r();Vy.exports=Gy});var Wy=s((_ue,Hy)=>{"use strict";var P8r=typeof window<"u";Hy.exports=P8r});var Xy=s((Lue,Dy)=>{"use strict";var R8r=Uy(),zy=s2(),F8r=Wy();function M8r(r){if(F8r===!1&&!R8r)return zy(r);try{return zy(r)}catch{return!1}}Dy.exports=M8r});var Jy=s((Pue,B8r)=>{B8r.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Zy=s((Rue,Yy)=>{"use strict";var k8r=Uu(),u2=O(),j8r=a2(),C8r=Py(),G8r=Fy(),V8r=Xy(),xy=Jy();function U8r(r){var e,t,i,n,a,u,o;if(n=[],j8r(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!u2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!k8r(r))return n;t=C8r&&i}for(a in r)!(t&&a==="prototype")&&u2(r,a)&&n.push(String(a));if(G8r)for(e=V8r(r),o=0;o<xy.length;o++)u=xy[o],!(e&&u==="constructor")&&u2(r,u)&&n.push(String(u));return n}Yy.exports=U8r});var Qy=s((Fue,$y)=>{"use strict";var H8r=uy(),W8r=vy(),z8r=ya(),D8r=Sy(),X8r=Zy(),ba;W8r?H8r()?ba=D8r:ba=z8r:ba=X8r;$y.exports=ba});var un=s((Mue,Ky)=>{"use strict";var J8r=Qy();Ky.exports=J8r});var eb=s((Bue,rb)=>{"use strict";var x8r=typeof Object.getOwnPropertyNames<"u";rb.exports=x8r});var nb=s((kue,ib)=>{"use strict";var tb=ui(),Y8r=tb.getOwnPropertyNames;function Z8r(r){return Y8r(tb(r))}ib.exports=Z8r});var sb=s((jue,ab)=>{"use strict";var $8r=ui(),Q8r=un();function K8r(r){return Q8r($8r(r))}ab.exports=K8r});var ob=s((Cue,ub)=>{"use strict";var rlr=eb(),elr=nb(),tlr=sb(),o2;rlr?o2=elr:o2=tlr;ub.exports=o2});var fb=s((Gue,vb)=>{"use strict";var ilr=typeof Object.getOwnPropertyDescriptor<"u";vb.exports=ilr});var lb=s((Vue,cb)=>{"use strict";var nlr=Object.getOwnPropertyDescriptor;function alr(r,e){var t;return r==null?null:(t=nlr(r,e),t===void 0?null:t)}cb.exports=alr});var gb=s((Uue,pb)=>{"use strict";var slr=O();function ulr(r,e){return slr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}pb.exports=ulr});var db=s((Hue,mb)=>{"use strict";var olr=fb(),vlr=lb(),flr=gb(),v2;olr?v2=vlr:v2=flr;mb.exports=v2});var qb=s((Wue,hb)=>{"use strict";var clr=typeof Buffer=="function"?Buffer:null;hb.exports=clr});var bb=s((zue,yb)=>{"use strict";var llr=Nt(),wa=qb();function plr(){var r,e;if(typeof wa!="function")return!1;try{typeof wa.from=="function"?e=wa.from([1,2,3,4]):e=new wa([1,2,3,4]),r=llr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}yb.exports=plr});var Eb=s((Due,wb)=>{"use strict";var glr=bb();wb.exports=glr});var Ob=s(Ea=>{"use strict";Ea.byteLength=dlr;Ea.toByteArray=qlr;Ea.fromByteArray=wlr;var Xr=[],jr=[],mlr=typeof Uint8Array<"u"?Uint8Array:Array,f2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Pt=0,Nb=f2.length;Pt<Nb;++Pt)Xr[Pt]=f2[Pt],jr[f2.charCodeAt(Pt)]=Pt;var Pt,Nb;jr["-".charCodeAt(0)]=62;jr["_".charCodeAt(0)]=63;function Ab(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function dlr(r){var e=Ab(r),t=e[0],i=e[1];return(t+i)*3/4-i}function hlr(r,e,t){return(e+t)*3/4-t}function qlr(r){var e,t=Ab(r),i=t[0],n=t[1],a=new mlr(hlr(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=jr[r.charCodeAt(f)]<<18|jr[r.charCodeAt(f+1)]<<12|jr[r.charCodeAt(f+2)]<<6|jr[r.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=jr[r.charCodeAt(f)]<<2|jr[r.charCodeAt(f+1)]>>4,a[u++]=e&255),n===1&&(e=jr[r.charCodeAt(f)]<<10|jr[r.charCodeAt(f+1)]<<4|jr[r.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function ylr(r){return Xr[r>>18&63]+Xr[r>>12&63]+Xr[r>>6&63]+Xr[r&63]}function blr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(ylr(i));return n.join("")}function wlr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(blr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(Xr[e>>2]+Xr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Xr[e>>10]+Xr[e>>4&63]+Xr[e<<2&63]+"=")),n.join("")}});var Sb=s(c2=>{c2.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-v}return(m?-1:1)*u*Math.pow(2,a-i)};c2.write=function(r,e,t,i,n,a){var u,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+m]=o&255,m+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+m]=u&255,m+=h,u/=256,v-=8);r[t+m-h]|=d*128}});var Wb=s(pi=>{"use strict";var l2=Ob(),ci=Sb(),Tb=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;pi.Buffer=b;pi.SlowBuffer=Tlr;pi.INSPECT_MAX_BYTES=50;var Na=2147483647;pi.kMaxLength=Na;b.TYPED_ARRAY_SUPPORT=Elr();!b.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Elr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.byteOffset}});function te(r){if(r>Na)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,b.prototype),e}function b(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return d2(r)}return Pb(r,e,t)}b.poolSize=8192;function Pb(r,e,t){if(typeof r=="string")return Alr(r,e);if(ArrayBuffer.isView(r))return Olr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Jr(r,ArrayBuffer)||r&&Jr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Jr(r,SharedArrayBuffer)||r&&Jr(r.buffer,SharedArrayBuffer)))return g2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return b.from(i,e,t);let n=Slr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return b.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}b.from=function(r,e,t){return Pb(r,e,t)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function Rb(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function Nlr(r,e,t){return Rb(r),r<=0?te(r):e!==void 0?typeof t=="string"?te(r).fill(e,t):te(r).fill(e):te(r)}b.alloc=function(r,e,t){return Nlr(r,e,t)};function d2(r){return Rb(r),te(r<0?0:h2(r)|0)}b.allocUnsafe=function(r){return d2(r)};b.allocUnsafeSlow=function(r){return d2(r)};function Alr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Fb(r,e)|0,i=te(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function p2(r){let e=r.length<0?0:h2(r.length)|0,t=te(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function Olr(r){if(Jr(r,Uint8Array)){let e=new Uint8Array(r);return g2(e.buffer,e.byteOffset,e.byteLength)}return p2(r)}function g2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,b.prototype),i}function Slr(r){if(b.isBuffer(r)){let e=h2(r.length)|0,t=te(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||y2(r.length)?te(0):p2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return p2(r.data)}function h2(r){if(r>=Na)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Na.toString(16)+" bytes");return r|0}function Tlr(r){return+r!=r&&(r=0),b.alloc(+r)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,t){if(Jr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),Jr(t,Uint8Array)&&(t=b.from(t,t.offset,t.byteLength)),!b.isBuffer(e)||!b.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=b.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(Jr(u,Uint8Array))a+u.length>n.length?(b.isBuffer(u)||(u=b.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(b.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function Fb(r,e){if(b.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Jr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return m2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Hb(r).length;default:if(n)return i?-1:m2(r).length;e=(""+e).toLowerCase(),n=!0}}b.byteLength=Fb;function Ilr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Clr(this,e,t);case"utf8":case"utf-8":return Bb(this,e,t);case"ascii":return klr(this,e,t);case"latin1":case"binary":return jlr(this,e,t);case"base64":return Mlr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Glr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}b.prototype._isBuffer=!0;function Rt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Rt(this,t,t+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Rt(this,t,t+3),Rt(this,t+1,t+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Rt(this,t,t+7),Rt(this,t+1,t+6),Rt(this,t+2,t+5),Rt(this,t+3,t+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?Bb(this,0,e):Ilr.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",t=pi.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};Tb&&(b.prototype[Tb]=b.prototype.inspect);b.prototype.compare=function(e,t,i,n,a){if(Jr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,f=Math.min(u,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function Mb(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,y2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=b.from(e,i)),b.isBuffer(e))return e.length===0?-1:Ib(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Ib(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function Ib(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}b.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};b.prototype.indexOf=function(e,t,i){return Mb(this,e,t,i,!0)};b.prototype.lastIndexOf=function(e,t,i){return Mb(this,e,t,i,!1)};function _lr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(y2(o))return u;r[t+u]=o}return u}function Llr(r,e,t,i){return Aa(m2(e,r.length-t),r,t,i)}function Plr(r,e,t,i){return Aa(Wlr(e),r,t,i)}function Rlr(r,e,t,i){return Aa(Hb(e),r,t,i)}function Flr(r,e,t,i){return Aa(zlr(e,r.length-t),r,t,i)}b.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return _lr(this,e,t,i);case"utf8":case"utf-8":return Llr(this,e,t,i);case"ascii":case"latin1":case"binary":return Plr(this,e,t,i);case"base64":return Rlr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Flr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Mlr(r,e,t){return e===0&&t===r.length?l2.fromByteArray(r):l2.fromByteArray(r.slice(e,t))}function Bb(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return Blr(i)}var _b=4096;function Blr(r){let e=r.length;if(e<=_b)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=_b));return t}function klr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function jlr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function Clr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=Dlr[r[a]];return n}function Glr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}b.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,b.prototype),n};function vr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};b.prototype.readUint8=b.prototype.readUInt8=function(e,t){return e=e>>>0,t||vr(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||vr(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||vr(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=De(function(e){e=e>>>0,li(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&on(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=De(function(e){e=e>>>0,li(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&on(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};b.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};b.prototype.readInt8=function(e,t){return e=e>>>0,t||vr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,t){e=e>>>0,t||vr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};b.prototype.readInt16BE=function(e,t){e=e>>>0,t||vr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};b.prototype.readInt32LE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=De(function(e){e=e>>>0,li(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&on(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=De(function(e){e=e>>>0,li(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&on(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});b.prototype.readFloatLE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),ci.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),ci.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||vr(e,8,this.length),ci.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||vr(e,8,this.length),ci.read(this,e,!1,52,8)};function hr(r,e,t,i,n,a){if(!b.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;hr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;hr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,1,255,0),this[t]=e&255,t+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function kb(r,e,t,i,n){Ub(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function jb(r,e,t,i,n){Ub(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}b.prototype.writeBigUInt64LE=De(function(e,t=0){return kb(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=De(function(e,t=0){return jb(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);hr(this,e,t,i,f-1,-f)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);hr(this,e,t,i,f-1,-f)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};b.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};b.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};b.prototype.writeBigInt64LE=De(function(e,t=0){return kb(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=De(function(e,t=0){return jb(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Cb(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Gb(r,e,t,i,n){return e=+e,t=t>>>0,n||Cb(r,e,t,4,34028234663852886e22,-34028234663852886e22),ci.write(r,e,t,i,23,4),t+4}b.prototype.writeFloatLE=function(e,t,i){return Gb(this,e,t,!0,i)};b.prototype.writeFloatBE=function(e,t,i){return Gb(this,e,t,!1,i)};function Vb(r,e,t,i,n){return e=+e,t=t>>>0,n||Cb(r,e,t,8,17976931348623157e292,-17976931348623157e292),ci.write(r,e,t,i,52,8),t+8}b.prototype.writeDoubleLE=function(e,t,i){return Vb(this,e,t,!0,i)};b.prototype.writeDoubleBE=function(e,t,i){return Vb(this,e,t,!1,i)};b.prototype.copy=function(e,t,i,n){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};b.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!b.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=b.isBuffer(e)?e:b.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var fi={};function q2(r,e,t){fi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}q2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);q2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);q2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=Lb(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=Lb(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function Lb(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function Vlr(r,e,t){li(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&on(e,r.length-(t+1))}function Ub(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new fi.ERR_OUT_OF_RANGE("value",o,r)}Vlr(i,n,a)}function li(r,e){if(typeof r!="number")throw new fi.ERR_INVALID_ARG_TYPE(e,"number",r)}function on(r,e,t){throw Math.floor(r)!==r?(li(r,t),new fi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new fi.ERR_BUFFER_OUT_OF_BOUNDS:new fi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var Ulr=/[^+/0-9A-Za-z-_]/g;function Hlr(r){if(r=r.split("=")[0],r=r.trim().replace(Ulr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function m2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Wlr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function zlr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function Hb(r){return l2.toByteArray(Hlr(r))}function Aa(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Jr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function y2(r){return r!==r}var Dlr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function De(r){return typeof BigInt>"u"?Xlr:r}function Xlr(){throw new Error("BigInt not supported")}});var Db=s((Zue,zb)=>{"use strict";var Jlr=Wb().Buffer;zb.exports=Jlr});var Jb=s(($ue,Xb)=>{"use strict";function xlr(){throw new Error("not implemented")}Xb.exports=xlr});var Oa=s((Que,xb)=>{"use strict";var Ylr=Eb(),Zlr=Db(),$lr=Jb(),b2;Ylr()?b2=Zlr:b2=$lr;xb.exports=b2});var Zb=s((Kue,Yb)=>{"use strict";var Qlr=L(),Klr=Oa(),r7r=Qlr(Klr.from);Yb.exports=r7r});var Qb=s((roe,$b)=>{"use strict";var e7r=Nt(),t7r=y(),i7r=Oa();function n7r(r){if(!e7r(r))throw new TypeError(t7r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return i7r.from(r)}$b.exports=n7r});var rw=s((eoe,Kb)=>{"use strict";var a7r=Nt(),s7r=y(),u7r=Oa();function o7r(r){if(!a7r(r))throw new TypeError(s7r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new u7r(r)}Kb.exports=o7r});var tw=s((toe,ew)=>{"use strict";var v7r=Zb(),f7r=Qb(),c7r=rw(),w2;v7r?w2=f7r:w2=c7r;ew.exports=w2});var aw=s((ioe,nw)=>{"use strict";var l7r=Yi(),p7r=Zt(),g7r=xi(),m7r=Ji(),d7r=Yt(),h7r=At(),q7r=pr(),y7r=Kr(),b7r=gr(),iw;function w7r(r){return new l7r(r)}function E7r(r){return new p7r(r)}function N7r(r){return new g7r(r)}function A7r(r){return new m7r(r)}function O7r(r){return new d7r(r)}function S7r(r){return new h7r(r)}function T7r(r){return new q7r(r)}function I7r(r){return new y7r(r)}function _7r(r){return new b7r(r)}function L7r(){var r={int8array:w7r,uint8array:E7r,uint8clampedarray:N7r,int16array:A7r,uint16array:O7r,int32array:S7r,uint32array:T7r,float32array:I7r,float64array:_7r};return r}iw=L7r();nw.exports=iw});var fw=s((noe,vw)=>{"use strict";var Sa=O(),E2=lr(),sw=Nt(),P7r=jq(),uw=$n(),R7r=Jq(),F7r=qa(),ow=un(),M7r=ob(),vn=db(),B7r=Lt(),fn=Ce(),k7r=tw(),j7r=aw();function C7r(r){var e,t,i,n,a,u,o,f;for(e=[],n=[],o=Object.create(B7r(r)),e.push(r),n.push(o),t=M7r(r),f=0;f<t.length;f++)i=t[f],a=vn(r,i),Sa(a,"value")&&(u=E2(r[i])?[]:{},a.value=Ft(r[i],u,e,n,-1)),fn(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function G7r(r){var e=[],t=[],i,n,a,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=ow(r),f=0;f<i.length;f++)u=i[f],n=vn(r,u),Sa(n,"value")&&(a=E2(r[u])?[]:{},n.value=Ft(r[u],a,e,t,-1)),fn(o,u,n);return o}function Ft(r,e,t,i,n){var a,u,o,f,v,c,l,p,m,h;if(n-=1,typeof r!="object"||r===null)return r;if(sw(r))return k7r(r);if(P7r(r))return G7r(r);if(o=uw(r),o==="date")return new Date(+r);if(o==="regexp")return R7r(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=j7r[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?C7r(r):{};if(u=ow(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=uw(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||sw(p)){a==="object"?(f=vn(r,c),Sa(f,"value")&&(f.value=Ft(p)),fn(e,c,f)):e[c]=Ft(p);continue}if(m=F7r(t,p),m!==-1){e[c]=i[m];continue}l=E2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Ft(p,l,t,i,n):(f=vn(r,c),Sa(f,"value")&&(f.value=Ft(p,l,t,i,n)),fn(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=vn(r,c),fn(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}vw.exports=Ft});var lw=s((aoe,cw)=>{"use strict";var V7r=lr(),U7r=Ve().isPrimitive,H7r=y(),W7r=I(),z7r=fw();function D7r(r,e){var t;if(arguments.length>1){if(!U7r(e))throw new TypeError(H7r("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=W7r;return t=V7r(r)?new Array(r.length):{},z7r(r,t,[r],[t],e)}cw.exports=D7r});var cn=s((soe,pw)=>{"use strict";var X7r=lw();pw.exports=X7r});var gw=s((uoe,J7r)=>{J7r.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var dw=s((ooe,mw)=>{"use strict";var x7r=cn(),Y7r=gw();function Z7r(){return x7r(Y7r)}mw.exports=Z7r});var hw=s((voe,$7r)=>{$7r.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var yw=s((foe,qw)=>{"use strict";var Q7r=cn(),K7r=hw();function r9r(){return Q7r(K7r)}qw.exports=r9r});var bw=s((coe,e9r)=>{e9r.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var Ew=s((loe,ww)=>{"use strict";var t9r=cn(),i9r=bw();function n9r(){return t9r(i9r)}ww.exports=n9r});var Nw=s((poe,a9r)=>{a9r.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var Ow=s((goe,Aw)=>{"use strict";var s9r=Nw();function u9r(){return s9r.slice()}Aw.exports=u9r});var Sw=s((moe,o9r)=>{o9r.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var Iw=s((doe,Tw)=>{"use strict";var v9r=cn(),f9r=Sw();function c9r(){return v9r(f9r)}Tw.exports=c9r});var Lw=s((hoe,_w)=>{"use strict";var ln=ar(),l9r=dw(),p9r=yw(),g9r=Ew(),m9r=Ow(),d9r=Iw();function h9r(r){return ln(r,"AFINN_111",l9r),ln(r,"AFINN_96",p9r),ln(r,"ANSCOMBES_QUARTET",g9r),ln(r,"HERNDON_VENUS_SEMIDIAMETERS",m9r),ln(r,"NIGHTINGALES_ROSE",d9r),r}_w.exports=h9r});var Rw=s((qoe,Pw)=>{"use strict";function q9r(r,e){return r+e}Pw.exports=q9r});var Mw=s((yoe,Fw)=>{"use strict";var y9r=Rw();Fw.exports=y9r});var kw=s((boe,Bw)=>{"use strict";var b9r=I(),w9r=G();function E9r(r){return r===b9r||r===w9r}Bw.exports=E9r});var Rr=s((woe,jw)=>{"use strict";var N9r=kw();jw.exports=N9r});var Vw=s((Eoe,Gw)=>{"use strict";var Cw=ea();function A9r(r){return r>0?Cw(r-1):Cw(r+1)}Gw.exports=A9r});var Ta=s((Noe,Uw)=>{"use strict";var O9r=Vw();Uw.exports=O9r});var Ww=s((Aoe,Hw)=>{"use strict";var S9r=Math.sqrt;Hw.exports=S9r});var V=s((Ooe,zw)=>{"use strict";var T9r=Ww();zw.exports=T9r});var Xw=s((Soe,Dw)=>{"use strict";function I9r(r){return Math.abs(r)}Dw.exports=I9r});var J=s((Toe,Jw)=>{"use strict";var _9r=Xw();Jw.exports=_9r});var Yw=s((Ioe,xw)=>{"use strict";var L9r=Zt(),P9r=Yt(),R9r={uint16:P9r,uint8:L9r};xw.exports=R9r});var Kw=s((_oe,Qw)=>{"use strict";var Zw=Yw(),$w;function F9r(){var r,e;return r=new Zw.uint16(1),r[0]=4660,e=new Zw.uint8(r.buffer),e[0]===52}$w=F9r();Qw.exports=$w});var Mt=s((Loe,rE)=>{"use strict";var M9r=Kw();rE.exports=M9r});var iE=s((Poe,tE)=>{"use strict";var B9r=Mt(),eE,N2,A2;B9r===!0?(N2=1,A2=0):(N2=0,A2=1);eE={HIGH:N2,LOW:A2};tE.exports=eE});var O2=s((Roe,uE)=>{"use strict";var k9r=pr(),j9r=gr(),aE=iE(),sE=new j9r(1),nE=new k9r(sE.buffer),C9r=aE.HIGH,G9r=aE.LOW;function V9r(r,e,t,i){return sE[0]=r,e[i]=nE[C9r],e[i+t]=nE[G9r],e}uE.exports=V9r});var vE=s((Foe,oE)=>{"use strict";var U9r=O2();function H9r(r){return U9r(r,[0>>>0,0>>>0],1,0)}oE.exports=H9r});var gi=s((Moe,cE)=>{"use strict";var W9r=w(),fE=vE(),z9r=O2();W9r(fE,"assign",z9r);cE.exports=fE});var pE=s((Boe,lE)=>{"use strict";var D9r=Mt(),S2;D9r===!0?S2=0:S2=1;lE.exports=S2});var mE=s((koe,gE)=>{"use strict";var X9r=pr(),J9r=gr(),x9r=pE(),T2=new J9r(1),Y9r=new X9r(T2.buffer);function Z9r(r,e){return T2[0]=r,Y9r[x9r]=e>>>0,T2[0]}gE.exports=Z9r});var ie=s((joe,dE)=>{"use strict";var $9r=mE();dE.exports=$9r});var qE=s((Coe,hE)=>{"use strict";function Q9r(r){return r|0}hE.exports=Q9r});var I2=s((Goe,yE)=>{"use strict";var K9r=qE();yE.exports=K9r});var xr=s((Voe,bE)=>{"use strict";var rpr=2147483647;bE.exports=rpr});var _2=s((Uoe,wE)=>{"use strict";var epr=2147483648;wE.exports=epr});var NE=s((Hoe,EE)=>{"use strict";var tpr=Mt(),L2;tpr===!0?L2=1:L2=0;EE.exports=L2});var SE=s((Woe,OE)=>{"use strict";var ipr=pr(),npr=gr(),apr=NE(),AE=new npr(1),spr=new ipr(AE.buffer);function upr(r){return AE[0]=r,spr[apr]}OE.exports=upr});var tr=s((zoe,TE)=>{"use strict";var opr=SE();TE.exports=opr});var LE=s((Doe,_E)=>{"use strict";var vpr=Mt(),IE,P2,R2;vpr===!0?(P2=1,R2=0):(P2=0,R2=1);IE={HIGH:P2,LOW:R2};_E.exports=IE});var BE=s((Xoe,ME)=>{"use strict";var fpr=pr(),cpr=gr(),RE=LE(),FE=new cpr(1),PE=new fpr(FE.buffer),lpr=RE.HIGH,ppr=RE.LOW;function gpr(r,e){return PE[lpr]=r,PE[ppr]=e,FE[0]}ME.exports=gpr});var mi=s((Joe,kE)=>{"use strict";var mpr=BE();kE.exports=mpr});var CE=s((xoe,jE)=>{"use strict";var dpr=_2(),hpr=xr(),qpr=gi(),ypr=tr(),bpr=mi(),F2=[0,0];function wpr(r,e){var t,i;return qpr.assign(r,F2,1,0),t=F2[0],t&=hpr,i=ypr(e),i&=dpr,t|=i,bpr(t,F2[1])}jE.exports=wpr});var Ia=s((Yoe,GE)=>{"use strict";var Epr=CE();GE.exports=Epr});var HE=s((Zoe,UE)=>{"use strict";var VE=Ta(),Npr=Ia(),Apr=G(),_a=I();function Opr(r,e){return e===Apr?_a:e===_a?0:e>0?VE(e)?r:0:VE(e)?Npr(_a,r):_a}UE.exports=Opr});var zE=s(($oe,WE)=>{"use strict";var Spr=xr(),Tpr=tr(),Ipr=1072693247,La=1e300,Pa=1e-300;function _pr(r,e){var t,i;return i=Tpr(r),t=i&Spr,t<=Ipr?e<0?La*La:Pa*Pa:e>0?La*La:Pa*Pa}WE.exports=_pr});var JE=s((Qoe,XE)=>{"use strict";var Lpr=J(),DE=I();function Ppr(r,e){return r===-1?(r-r)/(r-r):r===1?1:Lpr(r)<1==(e===DE)?0:DE}XE.exports=Ppr});var YE=s((Koe,xE)=>{"use strict";var Rpr=Mt(),M2;Rpr===!0?M2=1:M2=0;xE.exports=M2});var $E=s((r2e,ZE)=>{"use strict";var Fpr=pr(),Mpr=gr(),Bpr=YE(),B2=new Mpr(1),kpr=new Fpr(B2.buffer);function jpr(r,e){return B2[0]=r,kpr[Bpr]=e>>>0,B2[0]}ZE.exports=jpr});var ne=s((e2e,QE)=>{"use strict";var Cpr=$E();QE.exports=Cpr});var Yr=s((t2e,KE)=>{"use strict";var Gpr=1023;KE.exports=Gpr});var eN=s((i2e,rN)=>{"use strict";function Vpr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}rN.exports=Vpr});var aN=s((n2e,nN)=>{"use strict";var Upr=tr(),Ra=ie(),tN=ne(),Hpr=Yr(),Wpr=eN(),zpr=1048575,iN=1048576,Dpr=1072693248,Xpr=536870912,Jpr=524288,xpr=20,Ypr=9007199254740992,Zpr=.9617966939259756,$pr=.9617967009544373,Qpr=-7028461650952758e-24,Kpr=[1,1.5],rgr=[0,.5849624872207642],egr=[0,1350039202129749e-23];function tgr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,F,S,z,Q,U;return z=0,t<iN&&(e*=Ypr,z-=53,t=Upr(e)),z+=(t>>xpr)-Hpr|0,Q=t&zpr|0,t=Q|Dpr|0,Q<=235662?U=0:Q<767610?U=1:(U=0,z+=1,t-=iN),e=tN(e,t),c=Kpr[U],F=e-c,S=1/(e+c),n=F*S,u=Ra(n,0),i=(t>>1|Xpr)+Jpr,i+=U<<18,f=tN(0,i),v=e-(f-c),o=S*(F-u*f-u*v),a=n*n,A=a*a*Wpr(a),A+=o*(u+n),a=u*u,f=3+a+A,f=Ra(f,0),v=A-(f-3-a),F=u*f,S=o*f+v*n,p=F+S,p=Ra(p,0),m=S-(p-F),h=$pr*p,d=Qpr*p+m*Zpr+egr[U],l=rgr[U],N=z,g=h+d+l+N,g=Ra(g,0),q=d-(g-N-l-h),r[0]=g,r[1]=q,r}nN.exports=tgr});var uN=s((a2e,sN)=>{"use strict";function igr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}sN.exports=igr});var vN=s((s2e,oN)=>{"use strict";var ngr=ie(),agr=uN(),sgr=1.4426950408889634,ugr=1.4426950216293335,ogr=19259629911266175e-24;function vgr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*agr(n),u=ugr*n,o=n*ogr-a*sgr,i=u+o,i=ngr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}oN.exports=vgr});var k2=s((u2e,fN)=>{"use strict";var fgr=1023;fN.exports=fgr});var lN=s((o2e,cN)=>{"use strict";var cgr=-1023;cN.exports=cgr});var j2=s((v2e,pN)=>{"use strict";var lgr=-1074;pN.exports=lgr});var C2=s((f2e,gN)=>{"use strict";var pgr=22250738585072014e-324;gN.exports=pgr});var G2=s((c2e,mN)=>{"use strict";var ggr=C2(),mgr=Rr(),dgr=E(),hgr=J(),qgr=4503599627370496;function ygr(r,e,t,i){return dgr(r)||mgr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&hgr(r)<ggr?(e[i]=r*qgr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}mN.exports=ygr});var hN=s((l2e,dN)=>{"use strict";var bgr=G2();function wgr(r){return bgr(r,[0,0],1,0)}dN.exports=wgr});var bN=s((p2e,yN)=>{"use strict";var Egr=w(),qN=hN(),Ngr=G2();Egr(qN,"assign",Ngr);yN.exports=qN});var pn=s((g2e,wN)=>{"use strict";var Agr=2146435072;wN.exports=Agr});var NN=s((m2e,EN)=>{"use strict";var Ogr=tr(),Sgr=pn(),Tgr=Yr();function Igr(r){var e=Ogr(r);return e=(e&Sgr)>>>20,e-Tgr|0}EN.exports=Igr});var ON=s((d2e,AN)=>{"use strict";var _gr=NN();AN.exports=_gr});var TN=s((h2e,SN)=>{"use strict";var Lgr=I(),Pgr=G(),Rgr=Yr(),Fgr=k2(),Mgr=lN(),Bgr=j2(),kgr=E(),jgr=Rr(),Cgr=Ia(),Ggr=bN().assign,Vgr=ON(),Ugr=gi(),Hgr=mi(),Wgr=2220446049250313e-31,zgr=2148532223>>>0,V2=[0,0],U2=[0,0];function Dgr(r,e){var t,i;return e===0||r===0||kgr(r)||jgr(r)?r:(Ggr(r,V2,1,0),r=V2[0],e+=V2[1],e+=Vgr(r),e<Bgr?Cgr(0,r):e>Fgr?r<0?Pgr:Lgr:(e<=Mgr?(e+=52,i=Wgr):i=1,Ugr.assign(r,U2,1,0),t=U2[0],t&=zgr,t|=e+Rgr<<20,i*Hgr(t,U2[1])))}SN.exports=Dgr});var Fa=s((q2e,IN)=>{"use strict";var Xgr=TN();IN.exports=Xgr});var Ma=s((y2e,_N)=>{"use strict";var Jgr=.6931471805599453;_N.exports=Jgr});var Ba=s((b2e,LN)=>{"use strict";var xgr=1048575;LN.exports=xgr});var RN=s((w2e,PN)=>{"use strict";function Ygr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}PN.exports=Ygr});var GN=s((E2e,CN)=>{"use strict";var Zgr=tr(),FN=ne(),$gr=ie(),Qgr=I2(),Kgr=Fa(),rmr=Ma(),MN=Yr(),BN=xr(),kN=Ba(),emr=RN(),jN=1048576,tmr=1071644672,gn=20,imr=.6931471824645996,nmr=-1904654299957768e-24;function amr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m;return p=r&BN|0,m=(p>>gn)-MN|0,l=0,p>tmr&&(l=r+(jN>>m+1)>>>0,m=((l&BN)>>gn)-MN|0,i=(l&~(kN>>m))>>>0,a=FN(0,i),l=(l&kN|jN)>>gn-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=$gr(a,0),o=a*imr,f=(t-(a-e))*rmr+a*nmr,c=o+f,v=f-(c-o),a=c*c,n=c-a*emr(a),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=Zgr(c),r=Qgr(r),r+=l<<gn>>>0,r>>gn<=0?c=Kgr(c,l):c=FN(c,r),c}CN.exports=amr});var ZN=s((N2e,YN)=>{"use strict";var VN=E(),UN=Ta(),HN=Rr(),smr=_r(),WN=V(),umr=J(),H2=gi(),omr=ie(),zN=I2(),vmr=G(),fmr=I(),W2=xr(),cmr=HE(),lmr=zE(),pmr=JE(),gmr=aN(),mmr=vN(),dmr=GN(),hmr=1072693247,qmr=1105199104,ymr=1139802112,DN=1083179008,bmr=1072693248,wmr=1083231232,Emr=3230714880>>>0,XN=31,Xe=1e300,Je=1e-300,Nmr=8008566259537294e-32,ae=[0,0],JN=[0,0];function xN(r,e){var t,i,n,a,u,o,f,v,c,l,p,m,h,d,g,q;if(VN(r)||VN(e))return NaN;if(H2.assign(e,ae,1,0),o=ae[0],f=ae[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return WN(r);if(e===-.5)return 1/WN(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(HN(e))return pmr(r,e)}if(H2.assign(r,ae,1,0),a=ae[0],u=ae[1],u===0){if(a===0)return cmr(r,e);if(r===1)return 1;if(r===-1&&UN(e))return-1;if(HN(r))return r===vmr?xN(-0,-e):e<0?0:fmr}if(r<0&&smr(e)===!1)return(r-r)/(r-r);if(n=umr(r),t=a&W2|0,i=o&W2|0,v=a>>>XN|0,c=o>>>XN|0,v&&UN(e)?v=-1:v=1,i>qmr){if(i>ymr)return lmr(r,e);if(t<hmr)return c===1?v*Xe*Xe:v*Je*Je;if(t>bmr)return c===0?v*Xe*Xe:v*Je*Je;h=mmr(JN,n)}else h=gmr(JN,n,t);if(l=omr(e,0),m=(e-l)*h[0]+e*h[1],p=l*h[0],d=m+p,H2.assign(d,ae,1,0),g=zN(ae[0]),q=zN(ae[1]),g>=DN){if((g-DN|q)!==0||m+Nmr>d-p)return v*Xe*Xe}else if((g&W2)>=wmr&&((g-Emr|q)!==0||m<=d-p))return v*Je*Je;return d=dmr(g,p,m),v*d}YN.exports=xN});var W=s((A2e,$N)=>{"use strict";var Amr=ZN();$N.exports=Amr});var di=s((O2e,QN)=>{"use strict";var Omr=9007199254740991;QN.exports=Omr});var ka=s((S2e,KN)=>{"use strict";var Smr=308;KN.exports=Smr});var z2=s((T2e,rA)=>{"use strict";var Tmr=-308;rA.exports=Tmr});var ja=s((I2e,eA)=>{"use strict";var Imr=-324;eA.exports=Imr});var oA=s((_2e,uA)=>{"use strict";var tA=E(),Ca=Rr(),iA=W(),_mr=J(),nA=x(),Lmr=di(),aA=ka(),Pmr=z2(),Rmr=ja(),Fmr=G(),Mmr=Lmr+1,sA=1e308;function Bmr(r,e){var t,i;return tA(r)||tA(e)||Ca(e)?NaN:Ca(r)||r===0||e<Rmr||_mr(r)>Mmr&&e<=0?r:e>aA?r>=0?0:Fmr:e<Pmr?(t=iA(10,-(e+aA)),i=r*sA*t,Ca(i)?r:nA(i)/sA/t):(t=iA(10,-e),i=r*t,Ca(i)?r:nA(i)/t)}uA.exports=Bmr});var fA=s((L2e,vA)=>{"use strict";var kmr=oA();vA.exports=kmr});var lA=s((P2e,cA)=>{"use strict";function jmr(r,e){return r*e}cA.exports=jmr});var gA=s((R2e,pA)=>{"use strict";var Cmr=lA();pA.exports=Cmr});var dA=s((F2e,mA)=>{"use strict";function Gmr(r,e){return r-e}mA.exports=Gmr});var qA=s((M2e,hA)=>{"use strict";var Vmr=dA();hA.exports=Vmr});var bA=s((B2e,yA)=>{"use strict";var mn=ar(),Umr=Mw(),Hmr=fA(),Wmr=gA(),zmr=W(),Dmr=qA();function Xmr(r){return mn(r,"add",Umr),mn(r,"floorn",Hmr),mn(r,"mul",Wmr),mn(r,"pow",zmr),mn(r,"sub",Dmr),r}yA.exports=Xmr});var AA=s((k2e,NA)=>{"use strict";var wA=j().isPrimitive,Jmr=I(),xmr=G(),EA=y();function Ymr(r,e){return t;function t(i,n){var a;if(!wA(i)){if(e.nonnumeric===void 0)throw new TypeError(EA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!wA(n)){if(e.nonnumeric===void 0)throw new TypeError(EA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===Jmr?e.pinf:a===xmr?e.ninf:a}}NA.exports=Ymr});var D2=s((j2e,OA)=>{"use strict";var Zmr=AA();OA.exports=Zmr});var TA=s((C2e,SA)=>{"use strict";var $mr=Iu(),Qmr=Su(),Kmr=Mo(),rdr=y(),edr=Ro(),tdr=D2(),idr=["number","number"],ndr=["First argument","Second argument"];function adr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(rdr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=edr([r[0],r[1]],idr,ndr),t=$mr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=Kmr(t),a=tdr(e,i),r[0].push(n),r[1].push(t),Qmr(r[0],r[1],a),n}SA.exports=adr});var _A=s((G2e,IA)=>{"use strict";var sdr=TA();IA.exports=sdr});var PA=s((V2e,LA)=>{"use strict";var udr=j().isPrimitive,odr=I(),vdr=G(),fdr=y();function cdr(r,e){return t;function t(i){var n;if(!udr(i)){if(e.nonnumeric===void 0)throw new TypeError(fdr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===odr?e.pinf:n===vdr?e.ninf:n}}LA.exports=cdr});var X2=s((U2e,RA)=>{"use strict";var ldr=PA();RA.exports=ldr});var MA=s((H2e,FA)=>{"use strict";var J2=j().isPrimitive,pdr=I(),gdr=G(),x2=y();function mdr(r,e){return t;function t(i,n,a){var u;if(!J2(i)){if(e.nonnumeric===void 0)throw new TypeError(x2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!J2(n)){if(e.nonnumeric===void 0)throw new TypeError(x2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!J2(a)){if(e.nonnumeric===void 0)throw new TypeError(x2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===pdr?e.pinf:u===gdr?e.ninf:u}}FA.exports=mdr});var kA=s((W2e,BA)=>{"use strict";var ddr=MA();BA.exports=ddr});var CA=s((z2e,jA)=>{"use strict";var Ga=j().isPrimitive,hdr=I(),qdr=G(),Va=y();function ydr(r,e){return t;function t(i,n,a,u){var o;if(!Ga(i)){if(e.nonnumeric===void 0)throw new TypeError(Va("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Ga(n)){if(e.nonnumeric===void 0)throw new TypeError(Va("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Ga(a)){if(e.nonnumeric===void 0)throw new TypeError(Va("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Ga(u)){if(e.nonnumeric===void 0)throw new TypeError(Va("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===hdr?e.pinf:o===qdr?e.ninf:o}}jA.exports=ydr});var VA=s((D2e,GA)=>{"use strict";var bdr=CA();GA.exports=bdr});var HA=s((X2e,UA)=>{"use strict";var dn=j().isPrimitive,wdr=I(),Edr=G(),hn=y();function Ndr(r,e){return t;function t(i,n,a,u,o){var f;if(!dn(i)){if(e.nonnumeric===void 0)throw new TypeError(hn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!dn(n)){if(e.nonnumeric===void 0)throw new TypeError(hn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!dn(a)){if(e.nonnumeric===void 0)throw new TypeError(hn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!dn(u)){if(e.nonnumeric===void 0)throw new TypeError(hn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!dn(o)){if(e.nonnumeric===void 0)throw new TypeError(hn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,a,u,o),f!==f?e.nan:f===wdr?e.pinf:f===Edr?e.ninf:f}}UA.exports=Ndr});var zA=s((J2e,WA)=>{"use strict";var Adr=HA();WA.exports=Adr});var XA=s((x2e,DA)=>{"use strict";var Odr=lr(),Sdr=Fo(),Tdr=y(),Idr=X2();function _dr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(Tdr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=Idr(e,i),Odr(t)?(Sdr([t,t],[t.length,t[0].length],n),t):n(t)}DA.exports=_dr});var xA=s((Y2e,JA)=>{"use strict";var Ldr=XA();JA.exports=Ldr});var ZA=s((Z2e,YA)=>{"use strict";var Bt=ar(),Pdr=_A(),Rdr=X2(),Fdr=D2(),Mdr=kA(),Bdr=VA(),kdr=zA(),jdr=xA();function Cdr(r){return Bt(r,"binary",Pdr),Bt(r,"d_d",Rdr),Bt(r,"dd_d",Fdr),Bt(r,"ddd_d",Mdr),Bt(r,"dddd_d",Bdr),Bt(r,"ddddd_d",kdr),Bt(r,"unary",jdr),r}YA.exports=Cdr});var QA=s(($2e,$A)=>{"use strict";function Gdr(r){return r*r}$A.exports=Gdr});var Ua=s((Q2e,KA)=>{"use strict";var Vdr=QA();KA.exports=Vdr});var Ha=s((K2e,rO)=>{"use strict";var Udr=.7853981633974483;rO.exports=Udr});var tO=s((r1e,eO)=>{"use strict";function Hdr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}eO.exports=Hdr});var nO=s((e1e,iO)=>{"use strict";function Wdr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}iO.exports=Wdr});var uO=s((t1e,sO)=>{"use strict";var zdr=E(),Ddr=V(),aO=Ha(),Xdr=tO(),Jdr=nO(),xdr=6123233995736766e-32;function Ydr(r){var e,t,i,n,a;if(zdr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*Jdr(t),t=Ddr(t+t),a=aO-t,t=t*n-xdr,a-=t,a+=aO;else{if(i<1e-8)return r;t=i*i,a=t*Xdr(t),a=i*a+i}return e?-a:a}sO.exports=Ydr});var kt=s((i1e,oO)=>{"use strict";var Zdr=uO();oO.exports=Zdr});var lO=s((n1e,cO)=>{"use strict";var $dr=E(),vO=kt(),Qdr=V(),fO=Ha(),Kdr=6123233995736766e-32;function rhr(r){var e;return $dr(r)?NaN:r<-1||r>1?NaN:r>.5?2*vO(Qdr(.5-.5*r)):(e=fO-vO(r),e+=Kdr,e+=fO,e)}cO.exports=rhr});var qn=s((a1e,pO)=>{"use strict";var ehr=lO();pO.exports=ehr});var mO=s((s1e,gO)=>{"use strict";function thr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}gO.exports=thr});var bO=s((u1e,yO)=>{"use strict";var ihr=E(),dO=tr(),hO=ne(),nhr=I(),ahr=G(),qO=Yr(),shr=mO(),Y2=.6931471803691238,Z2=19082149292705877e-26,uhr=.41421356237309503,ohr=-.2928932188134525,vhr=1862645149230957e-24,fhr=5551115123125783e-32,chr=9007199254740992,lhr=.6666666666666666;function phr(r){var e,t,i,n,a,u,o,f,v,c;if(r<-1||ihr(r))return NaN;if(r===-1)return ahr;if(r===nhr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<uhr){if(i<vhr)return i<fhr?r:r-r*r*.5;r>ohr&&(c=0,n=r,t=1)}return c!==0&&(i<chr?(v=1+r,t=dO(v),c=(t>>20)-qO,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=dO(v),c=(t>>20)-qO,a=0),t&=1048575,t<434334?v=hO(v,t|1072693248):(c+=1,v=hO(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*Z2,c*Y2+a):(f=e*(1-lhr*n),c*Y2-(f-(c*Z2+a)-n)):(u=n/(2+n),o=u*u,f=o*shr(o),c===0?n-(e-u*(e+f)):c*Y2-(e-(u*(e+f)+(c*Z2+a))-n))}yO.exports=phr});var xe=s((o1e,wO)=>{"use strict";var ghr=bO();wO.exports=ghr});var NO=s((v1e,EO)=>{"use strict";function mhr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}EO.exports=mhr});var OO=s((f1e,AO)=>{"use strict";function dhr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}AO.exports=dhr});var _O=s((c1e,IO)=>{"use strict";var SO=tr(),hhr=ne(),qhr=E(),yhr=Yr(),bhr=G(),whr=NO(),Ehr=OO(),Wa=.6931471803691238,za=19082149292705877e-26,Nhr=0x40000000000000,Ahr=.3333333333333333,TO=1048575,Ohr=2146435072,Shr=1048576,Thr=1072693248;function Ihr(r){var e,t,i,n,a,u,o,f,v,c,l,p;return r===0?bhr:qhr(r)||r<0?NaN:(t=SO(r),a=0,t<Shr&&(a-=54,r*=Nhr,t=SO(r)),t>=Ohr?r+r:(a+=(t>>20)-yhr|0,t&=TO,f=t+614244&1048576|0,r=hhr(r,t|f^Thr),a+=f>>20|0,o=r-1,(TO&2+t)<3?o===0?a===0?0:a*Wa+a*za:(u=o*o*(.5-Ahr*o),a===0?o-u:a*Wa-(u-a*za-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*whr(l),i=p*Ehr(l),f|=v,u=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*Wa-(e-(c*(e+u)+a*za)-o)):a===0?o-c*(o-u):a*Wa-(c*(o-u)-a*za-o))))}IO.exports=Ihr});var R=s((l1e,LO)=>{"use strict";var _hr=_O();LO.exports=_hr});var MO=s((p1e,FO)=>{"use strict";var Lhr=E(),Phr=xe(),PO=V(),Rhr=Ma(),RO=R(),Fhr=1<<28;function Mhr(r){var e;return Lhr(r)||r<1?NaN:r===1?0:r>=Fhr?RO(r)+Rhr:r>2?RO(2*r-1/(r+PO(r*r-1))):(e=r-1,Phr(e+PO(2*e+e*e)))}FO.exports=Mhr});var kO=s((g1e,BO)=>{"use strict";var Bhr=MO();BO.exports=Bhr});var Da=s((m1e,jO)=>{"use strict";var khr=1.5707963267948966;jO.exports=khr});var GO=s((d1e,CO)=>{"use strict";function jhr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}CO.exports=jhr});var UO=s((h1e,VO)=>{"use strict";function Chr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}VO.exports=Chr});var zO=s((q1e,WO)=>{"use strict";var Ghr=E(),Vhr=I(),$2=Da(),Uhr=Ha(),Hhr=G(),Whr=GO(),zhr=UO(),HO=6123233995736766e-32,Dhr=2.414213562373095;function Xhr(r){var e,t,i,n;return Ghr(r)||r===0?r:r===Vhr?$2:r===Hhr?-$2:(r<0&&(t=!0,r=-r),e=0,r>Dhr?(i=$2,e=1,r=-(1/r)):r<=.66?i=0:(i=Uhr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*Whr(n)/zhr(n),n=r*n+r,e===2?n+=.5*HO:e===1&&(n+=HO),i+=n,t?-i:i)}WO.exports=Xhr});var Xa=s((y1e,DO)=>{"use strict";var Jhr=zO();DO.exports=Jhr});var JO=s((b1e,XO)=>{"use strict";var xhr=Xa();function Yhr(r){return xhr(1/r)}XO.exports=Yhr});var YO=s((w1e,xO)=>{"use strict";var Zhr=JO();xO.exports=Zhr});var $O=s((E1e,ZO)=>{"use strict";var $hr=kt();function Qhr(r){return $hr(1+r)}ZO.exports=Qhr});var KO=s((N1e,QO)=>{"use strict";var Khr=$O();QO.exports=Khr});var eS=s((A1e,rS)=>{"use strict";var rqr=kt();function eqr(r){return rqr(1-r)}rS.exports=eqr});var iS=s((O1e,tS)=>{"use strict";var tqr=eS();tS.exports=tqr});var aS=s((S1e,nS)=>{"use strict";var iqr=kt();function nqr(r){return iqr(1/r)}nS.exports=nqr});var uS=s((T1e,sS)=>{"use strict";var aqr=aS();sS.exports=aqr});var cS=s((I1e,fS)=>{"use strict";var sqr=Rr(),uqr=E(),oqr=xe(),oS=V(),vqr=Ma(),vS=R(),fqr=1/(1<<28),cqr=1<<28;function lqr(r){var e,t,i;return uqr(r)||sqr(r)?r:(r<0&&(r=-r,e=!0),r<fqr?i=r:r>cqr?i=vS(r)+vqr:r>2?i=vS(2*r+1/(oS(r*r+1)+r)):(t=r*r,i=oqr(r+t/(1+oS(1+t)))),e?-i:i)}fS.exports=lqr});var Q2=s((_1e,lS)=>{"use strict";var pqr=cS();lS.exports=pqr});var gS=s((L1e,pS)=>{"use strict";var gqr=Q2();function mqr(r){return gqr(1/r)}pS.exports=mqr});var dS=s((P1e,mS)=>{"use strict";var dqr=gS();mS.exports=dqr});var qS=s((R1e,hS)=>{"use strict";var hqr=qn(),qqr=V();function yqr(r){return 2*hqr(qqr(r))}hS.exports=yqr});var bS=s((F1e,yS)=>{"use strict";var bqr=qS();yS.exports=bqr});var ES=s((M1e,wS)=>{"use strict";var wqr=kt(),Eqr=V();function Nqr(r){return 2*wqr(Eqr(r))}wS.exports=Nqr});var AS=s((B1e,NS)=>{"use strict";var Aqr=ES();NS.exports=Aqr});var TS=s((k1e,SS)=>{"use strict";var Oqr=E(),OS=xe(),Sqr=I(),Tqr=G(),Iqr=1/(1<<28);function _qr(r){var e,t;return Oqr(r)||r<-1||r>1?NaN:r===1?Sqr:r===-1?Tqr:(r<0&&(e=!0,r=-r),r<Iqr?e?-r:r:(r<.5?(t=r+r,t=.5*OS(t+t*r/(1-r))):t=.5*OS((r+r)/(1-r)),e?-t:t))}SS.exports=_qr});var _S=s((j1e,IS)=>{"use strict";var Lqr=TS();IS.exports=Lqr});var PS=s((C1e,LS)=>{"use strict";var Pqr=qn();function Rqr(r){return Pqr(1+r)}LS.exports=Rqr});var FS=s((G1e,RS)=>{"use strict";var Fqr=PS();RS.exports=Fqr});var BS=s((V1e,MS)=>{"use strict";var Mqr=qn();function Bqr(r){return Mqr(1-r)}MS.exports=Bqr});var jS=s((U1e,kS)=>{"use strict";var kqr=BS();kS.exports=kqr});var GS=s((H1e,CS)=>{"use strict";var jqr=x();function Cqr(r){return jqr(r)===r&&r>=0}CS.exports=Cqr});var K2=s((W1e,VS)=>{"use strict";var Gqr=GS();VS.exports=Gqr});var US=s((z1e,Vqr)=>{Vqr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var WS=s((D1e,HS)=>{"use strict";var Uqr=K2(),Hqr=E(),Wqr=Ta(),zqr=G(),Dqr=I(),Xqr=US(),Jqr=258;function xqr(r){return Hqr(r)||!Uqr(r)?NaN:Wqr(r)?0:r>Jqr?r/2&1?Dqr:zqr:Xqr[r/2]}HS.exports=xqr});var DS=s((X1e,zS)=>{"use strict";var Yqr=WS();zS.exports=Yqr});var JS=s((J1e,XS)=>{"use strict";var Zqr=Mt(),r1;Zqr===!0?r1=0:r1=1;XS.exports=r1});var ZS=s((x1e,YS)=>{"use strict";var $qr=pr(),Qqr=gr(),Kqr=JS(),xS=new Qqr(1),ryr=new $qr(xS.buffer);function eyr(r){return xS[0]=r,ryr[Kqr]}YS.exports=eyr});var QS=s((Y1e,$S)=>{"use strict";var tyr=ZS();$S.exports=tyr});var iT=s((Z1e,tT)=>{"use strict";var iyr=x(),Ja=Fa(),Za=Au(),rT=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],nyr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],e1=16777216,t1=5960464477539063e-23,xa=Za(20),KS=Za(20),Ya=Za(20),fr=Za(20);function eT(r,e,t,i,n,a,u,o,f){var v,c,l,p,m,h,d,g,q;for(p=a,q=i[t],g=t,m=0;g>0;m++)c=t1*q|0,fr[m]=q-e1*c|0,q=i[g-1]+c,g-=1;if(q=Ja(q,n),q-=8*iyr(q*.125),d=q|0,q-=d,l=0,n>0?(m=fr[t-1]>>24-n,d+=m,fr[t-1]-=m<<24-n,l=fr[t-1]>>23-n):n===0?l=fr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,v=0,m=0;m<t;m++)g=fr[m],v===0?g!==0&&(v=1,fr[m]=16777216-g):fr[m]=16777215-g;if(n>0)switch(n){case 1:fr[t-1]&=8388607;break;case 2:fr[t-1]&=4194303;break}l===2&&(q=1-q,v!==0&&(q-=Ja(1,n)))}if(q===0){for(g=0,m=t-1;m>=a;m--)g|=fr[m];if(g===0){for(h=1;fr[a-h]===0;h++);for(m=t+1;m<=t+h;m++){for(f[o+m]=rT[u+m],c=0,g=0;g<=o;g++)c+=r[g]*f[o+(m-g)];i[m]=c}return t+=h,eT(r,e,t,i,n,a,u,o,f)}}if(q===0)for(t-=1,n-=24;fr[t]===0;)t-=1,n-=24;else q=Ja(q,-n),q>=e1?(c=t1*q|0,fr[t]=q-e1*c|0,t+=1,n+=24,fr[t]=c):fr[t]=q|0;for(c=Ja(1,n),m=t;m>=0;m--)i[m]=c*fr[m],c*=t1;for(m=t;m>=0;m--){for(c=0,h=0;h<=p&&h<=t-m;h++)c+=nyr[h]*i[m+h];Ya[t-m]=c}for(c=0,m=t;m>=0;m--)c+=Ya[m];for(l===0?e[0]=c:e[0]=-c,c=Ya[0]-c,m=1;m<=t;m++)c+=Ya[m];return l===0?e[1]=c:e[1]=-c,d&7}function ayr(r,e,t,i){var n,a,u,o,f,v,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?xa[c]=0:xa[c]=rT[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*xa[o+(c-l)];KS[c]=n}return f=a,eT(r,e,f,KS,v,a,u,o,xa)}tT.exports=ayr});var aT=s(($1e,nT)=>{"use strict";var syr=Math.round;nT.exports=syr});var i1=s((Q1e,sT)=>{"use strict";var uyr=aT();sT.exports=uyr});var fT=s((K1e,vT)=>{"use strict";var oyr=i1(),uT=tr(),vyr=.6366197723675814,fyr=1.5707963267341256,cyr=6077100506506192e-26,lyr=6077100506303966e-26,pyr=20222662487959506e-37,gyr=20222662487111665e-37,myr=84784276603689e-45,oT=2047;function dyr(r,e,t){var i,n,a,u,o,f,v;return n=oyr(r*vyr),u=r-n*fyr,o=n*cyr,v=e>>20|0,t[0]=u-o,i=uT(t[0]),f=v-(i>>20&oT),f>16&&(a=u,o=n*lyr,u=a-o,o=n*pyr-(a-u-o),t[0]=u-o,i=uT(t[0]),f=v-(i>>20&oT),f>49&&(a=u,o=n*gyr,u=a-o,o=n*myr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}vT.exports=dyr});var lT=s((r3e,cT)=>{"use strict";var hyr=xr(),qyr=pn(),yyr=Ba(),byr=tr(),wyr=QS(),Eyr=mi(),Nyr=iT(),$a=fT(),Ayr=0,Oyr=16777216,Ye=1.5707963267341256,jt=6077100506506192e-26,Qa=2*jt,Ka=3*jt,r0=4*jt,Syr=598523,Tyr=1072243195,Iyr=1073928572,_yr=1074752122,Lyr=1074977148,Pyr=1075183036,Ryr=1075388923,Fyr=1075594811,Myr=1094263291,yn=[0,0,0],bn=[0,0];function Byr(r,e){var t,i,n,a,u,o,f,v;if(n=byr(r),a=n&hyr|0,a<=Tyr)return e[0]=r,e[1]=0,0;if(a<=_yr)return(a&yyr)===Syr?$a(r,a,e):a<=Iyr?r>0?(v=r-Ye,e[0]=v-jt,e[1]=v-e[0]-jt,1):(v=r+Ye,e[0]=v+jt,e[1]=v-e[0]+jt,-1):r>0?(v=r-2*Ye,e[0]=v-Qa,e[1]=v-e[0]-Qa,2):(v=r+2*Ye,e[0]=v+Qa,e[1]=v-e[0]+Qa,-2);if(a<=Fyr)return a<=Pyr?a===Lyr?$a(r,a,e):r>0?(v=r-3*Ye,e[0]=v-Ka,e[1]=v-e[0]-Ka,3):(v=r+3*Ye,e[0]=v+Ka,e[1]=v-e[0]+Ka,-3):a===Ryr?$a(r,a,e):r>0?(v=r-4*Ye,e[0]=v-r0,e[1]=v-e[0]-r0,4):(v=r+4*Ye,e[0]=v+r0,e[1]=v-e[0]+r0,-4);if(a<Myr)return $a(r,a,e);if(a>=qyr)return e[0]=NaN,e[1]=NaN,0;for(t=wyr(r),i=(a>>20)-1046,v=Eyr(a-(i<<20|0),t),o=0;o<2;o++)yn[o]=v|0,v=(v-yn[o])*Oyr;for(yn[2]=v,u=3;yn[u-1]===Ayr;)u-=1;return f=Nyr(yn,bn,i,u,1),r<0?(e[0]=-bn[0],e[1]=-bn[1],-f):(e[0]=bn[0],e[1]=bn[1],f)}cT.exports=Byr});var wn=s((e3e,pT)=>{"use strict";var kyr=lT();pT.exports=kyr});var dT=s((t3e,mT)=>{"use strict";var gT=-.16666666666666632,jyr=.00833333333332249,Cyr=-.0001984126982985795,Gyr=27557313707070068e-22,Vyr=-25050760253406863e-24,Uyr=158969099521155e-24,Hyr=.0416666666666666,Wyr=-.001388888888887411,zyr=2480158728947673e-20,Dyr=-27557314351390663e-23,Xyr=2087572321298175e-24,Jyr=-11359647557788195e-27;function xyr(r,e,t,i,n){var a,u,o,f,v;return v=r*r,f=v*v,u=jyr+v*(Cyr+v*Gyr)+v*f*(Vyr+v*Uyr),o=v*r,e===0?t[n]=r+o*(gT+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*gT),u=v*(Hyr+v*(Wyr+v*zyr)),u+=f*f*(Dyr+v*(Xyr+v*Jyr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*u-r*e)),t}mT.exports=xyr});var a1=s((i3e,qT)=>{"use strict";var Yyr=xr(),Zyr=pn(),$yr=tr(),Qyr=wn(),hT=dT(),Kyr=1072243195,rbr=1044381696,n1=[0,0];function ebr(r,e,t,i){var n,a;if(n=$yr(r),n&=Yyr,n<=Kyr)return n<rbr&&(r|0)===0&&(e[i]=r,e[i+t]=0),hT(r,0,e,t,i);if(n>=Zyr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=Qyr(r,n1),hT(n1[0],n1[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}qT.exports=ebr});var bT=s((n3e,yT)=>{"use strict";var tbr=a1();function ibr(r){return tbr(r,[0,0],1,0)}yT.exports=ibr});var En=s((a3e,ET)=>{"use strict";var nbr=w(),wT=bT(),abr=a1();nbr(wT,"assign",abr);ET.exports=wT});var AT=s((s3e,NT)=>{"use strict";function sbr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}NT.exports=sbr});var ST=s((u3e,OT)=>{"use strict";function ubr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}OT.exports=ubr});var IT=s((o3e,TT)=>{"use strict";function obr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}TT.exports=obr});var LT=s((v3e,_T)=>{"use strict";function vbr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}_T.exports=vbr});var RT=s((f3e,PT)=>{"use strict";var fbr=V(),cbr=En().assign,lbr=I(),pbr=AT(),gbr=ST(),mbr=IT(),dbr=LT(),hbr=.5641895835477563,qbr=2.404825557695773,ybr=5.520078110286311,bbr=616,wbr=-.0014244423042272315,Ebr=1413,Nbr=.0005468602863106496,Nn=[0,0];function Abr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===lbr?0:r===0?1:r<=4?(a=r*r,n=pbr(a),u=(r+qbr)*(r-bbr/256-wbr),u*n):r<=8?(a=1-r*r/64,n=gbr(a),u=(r+ybr)*(r-Ebr/256-Nbr),u*n):(a=8/r,i=a*a,e=mbr(i),t=dbr(i),u=hbr/fbr(r),cbr(r,Nn,1,0),u*(e*(Nn[1]+Nn[0])-a*t*(Nn[0]-Nn[1])))}PT.exports=Abr});var s1=s((c3e,FT)=>{"use strict";var Obr=RT();FT.exports=Obr});var e0=s((l3e,MT)=>{"use strict";var Sbr=1.772453850905516;MT.exports=Sbr});var kT=s((p3e,BT)=>{"use strict";function Tbr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}BT.exports=Tbr});var CT=s((g3e,jT)=>{"use strict";function Ibr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}jT.exports=Ibr});var VT=s((m3e,GT)=>{"use strict";function _br(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}GT.exports=_br});var HT=s((d3e,UT)=>{"use strict";function Lbr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}UT.exports=Lbr});var zT=s((h3e,WT)=>{"use strict";var Pbr=V(),Rbr=J(),Fbr=En().assign,Mbr=I(),Bbr=e0(),kbr=kT(),jbr=CT(),Cbr=VT(),Gbr=HT(),Vbr=3.8317059702075125,Ubr=7.015586669815619,Hbr=981,Wbr=-.0003252797924876844,zbr=1796,Dbr=-38330184381246464e-21,An=[0,0];function Xbr(r){var e,t,i,n,a,u,o,f;return f=Rbr(r),r===0||f===Mbr?0:(f<=4?(u=r*r,a=kbr(u),o=f*(f+Vbr)*(f-Hbr/256-Wbr),e=o*a):f<=8?(u=r*r,a=jbr(u),o=f*(f+Ubr)*(f-zbr/256-Dbr),e=o*a):(u=8/f,n=u*u,t=Cbr(n),i=Gbr(n),o=1/(Pbr(f)*Bbr),Fbr(f,An,1,0),e=o*(t*(An[0]-An[1])+u*i*(An[0]+An[1]))),r<0&&(e*=-1),e)}WT.exports=Xbr});var u1=s((q3e,DT)=>{"use strict";var Jbr=zT();DT.exports=Jbr});var Fr=s((y3e,XT)=>{"use strict";var xbr=3.141592653589793;XT.exports=xbr});var xT=s((b3e,JT)=>{"use strict";function Ybr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}JT.exports=Ybr});var ZT=s((w3e,YT)=>{"use strict";function Zbr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}YT.exports=Zbr});var QT=s((E3e,$T)=>{"use strict";function $br(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}$T.exports=$br});var rI=s((N3e,KT)=>{"use strict";function Qbr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}KT.exports=Qbr});var tI=s((A3e,eI)=>{"use strict";function Kbr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}eI.exports=Kbr});var uI=s((O3e,sI)=>{"use strict";var o1=R(),rwr=V(),ewr=Fr(),twr=e0(),iwr=G(),nwr=I(),awr=En().assign,v1=s1(),swr=xT(),uwr=ZT(),owr=QT(),vwr=rI(),fwr=tI(),cwr=1/twr,f1=2/ewr,iI=.8935769662791675,nI=3.957678419314858,aI=7.086051060301773,lwr=228,pwr=.0029519662791675214,gwr=1013,mwr=.0006471693148578684,dwr=1814,hwr=.00011356030177269763,On=[0,0];function qwr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?iwr:r===nwr?0:r<=3?(a=r*r,u=o1(r/iI)*v1(r)*f1,n=swr(a),o=(r+iI)*(r-lwr/256-pwr),u+o*n):r<=5.5?(a=r*r,u=o1(r/nI)*v1(r)*f1,n=uwr(a),o=(r+nI)*(r-gwr/256-mwr),u+o*n):r<=8?(a=r*r,u=o1(r/aI)*v1(r)*f1,n=owr(a),o=(r+aI)*(r-dwr/256-hwr),u+o*n):(a=8/r,i=a*a,e=vwr(i),t=fwr(i),o=cwr/rwr(r),awr(r,On,1,0),o*(e*(On[0]-On[1])+a*t*(On[1]+On[0])))}sI.exports=qwr});var vI=s((S3e,oI)=>{"use strict";var ywr=uI();oI.exports=ywr});var cI=s((T3e,fI)=>{"use strict";function bwr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}fI.exports=bwr});var pI=s((I3e,lI)=>{"use strict";function wwr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}lI.exports=wwr});var mI=s((_3e,gI)=>{"use strict";function Ewr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}gI.exports=Ewr});var hI=s((L3e,dI)=>{"use strict";function Nwr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}dI.exports=Nwr});var AI=s((P3e,NI)=>{"use strict";var qI=R(),Awr=V(),Owr=Fr(),Swr=e0(),Twr=G(),Iwr=I(),_wr=En().assign,yI=u1(),Lwr=cI(),Pwr=pI(),Rwr=mI(),Fwr=hI(),Mwr=1/Swr,bI=2/Owr,wI=2.197141326031017,EI=5.429681040794135,Bwr=562,kwr=.001828826031017035,jwr=1390,Cwr=-6459205864867228e-21,Sn=[0,0];function Gwr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?Twr:r===Iwr?0:r<=4?(a=r*r,u=qI(r/wI)*yI(r)*bI,n=Lwr(a),o=(r+wI)*(r-Bwr/256-kwr)/r,u+o*n):r<=8?(a=r*r,u=qI(r/EI)*yI(r)*bI,n=Pwr(a),o=(r+EI)*(r-jwr/256-Cwr)/r,u+o*n):(a=8/r,i=a*a,e=Rwr(i),t=Fwr(i),o=Mwr/Awr(r),_wr(r,Sn,1,0),o*(a*t*(Sn[0]-Sn[1])-e*(Sn[0]+Sn[1])))}NI.exports=Gwr});var SI=s((R3e,OI)=>{"use strict";var Vwr=AI();OI.exports=Vwr});var II=s((F3e,TI)=>{"use strict";function Uwr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}TI.exports=Uwr});var LI=s((M3e,_I)=>{"use strict";function Hwr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}_I.exports=Hwr});var RI=s((B3e,PI)=>{"use strict";var Wwr=II(),zwr=LI();function Dwr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*Wwr(a),i+=n*n*zwr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}PI.exports=Dwr});var c1=s((k3e,FI)=>{"use strict";var Xwr=RI();FI.exports=Xwr});var kI=s((j3e,BI)=>{"use strict";var MI=-.16666666666666632,Jwr=.00833333333332249,xwr=-.0001984126982985795,Ywr=27557313707070068e-22,Zwr=-25050760253406863e-24,$wr=158969099521155e-24;function Qwr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Jwr+a*(xwr+a*Ywr)+a*n*(Zwr+a*$wr),i=a*r,e===0?r+i*(MI+a*t):r-(a*(.5*e-i*t)-e-i*MI)}BI.exports=Qwr});var l1=s((C3e,jI)=>{"use strict";var Kwr=kI();jI.exports=Kwr});var VI=s((G3e,GI)=>{"use strict";var rEr=tr(),p1=c1(),CI=l1(),eEr=wn(),se=[0,0],tEr=2147483647,iEr=1072243195,nEr=1044381696,aEr=2146435072;function sEr(r){var e,t;if(e=rEr(r),e&=tEr,e<=iEr)return e<nEr?1:p1(r,0);if(e>=aEr)return NaN;switch(t=eEr(r,se),t&3){case 0:return p1(se[0],se[1]);case 1:return-CI(se[0],se[1]);case 2:return-p1(se[0],se[1]);default:return CI(se[0],se[1])}}GI.exports=sEr});var Ct=s((V3e,UI)=>{"use strict";var uEr=VI();UI.exports=uEr});var zI=s((U3e,WI)=>{"use strict";var oEr=xr(),vEr=pn(),fEr=tr(),HI=c1(),g1=l1(),cEr=wn(),lEr=1072243195,pEr=1045430272,ue=[0,0];function gEr(r){var e,t;if(e=fEr(r),e&=oEr,e<=lEr)return e<pEr?r:g1(r,0);if(e>=vEr)return NaN;switch(t=cEr(r,ue),t&3){case 0:return g1(ue[0],ue[1]);case 1:return HI(ue[0],ue[1]);case 2:return-g1(ue[0],ue[1]);default:return-HI(ue[0],ue[1])}}WI.exports=gEr});var Gt=s((H3e,DI)=>{"use strict";var mEr=zI();DI.exports=mEr});var xI=s((W3e,JI)=>{"use strict";var dEr=E(),hEr=Rr(),qEr=J(),XI=Ct(),yEr=Gt(),bEr=x(),m1=Fr(),wEr=di(),EEr=wEr+1;function NEr(r){var e,t,i,n;return dEr(r)?NaN:hEr(r)?NaN:(e=qEr(r),e>EEr?1:(t=bEr(e),i=e-t,i===.5?0:(i<.25?n=XI(m1*i):i<.75?(i=.5-i,n=yEr(m1*i)):(i=1-i,n=-XI(m1*i)),t%2===1?-n:n)))}JI.exports=NEr});var ZI=s((z3e,YI)=>{"use strict";var AEr=xI();YI.exports=AEr});var QI=s((D3e,$I)=>{"use strict";var OEr=1.618033988749895;$I.exports=OEr});var r_=s((X3e,KI)=>{"use strict";var SEr=E(),TEr=ZI(),IEr=W(),_Er=QI(),LEr=I(),PEr=G(),REr=2.23606797749979;function FEr(r){var e,t;return SEr(r)||r===LEr||r===PEr?NaN:(e=IEr(_Er,r),t=TEr(r)/e,(e-t)/REr)}KI.exports=FEr});var t_=s((J3e,e_)=>{"use strict";var MEr=r_();e_.exports=MEr});var n_=s((x3e,i_)=>{"use strict";function BEr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}i_.exports=BEr});var o_=s((Y3e,u_)=>{"use strict";var kEr=C2(),jEr=_2(),a_=xr(),h1=tr(),CEr=ne(),GEr=Rr(),s_=mi(),VEr=gi(),UEr=E(),HEr=n_(),WEr=4294967295>>>0,zEr=3221225472>>>0,DEr=0x40000000000000,d1=2147483648>>>0,XEr=1>>>0,JEr=715094163>>>0,xEr=696219795>>>0,YEr=h1(kEr),Vt=[0>>>0,0>>>0];function ZEr(r){var e,t,i,n,a,u,o;return r===0||UEr(r)||GEr(r)?r:(t=h1(r)>>>0,e=(t&jEr)>>>0,t&=a_,t<YEr?(u=DEr*r,i=(h1(u)&a_)>>>0,i=(i/3>>>0)+xEr>>>0,u=s_(e|i,0)):(u=0,i=(t/3>>>0)+JEr>>>0,u=CEr(u,e|i)),n=u*u*(u/r),u*=HEr(n),VEr.assign(u,Vt,1,0),Vt[1]&d1?(Vt[0]+=XEr,Vt[1]&=~d1):Vt[1]|=d1,u=s_(Vt[0]&WEr,Vt[1]&zEr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}u_.exports=ZEr});var f_=s((Z3e,v_)=>{"use strict";var $Er=o_();v_.exports=$Er});var l_=s(($3e,c_)=>{"use strict";var QEr=Math.ceil;c_.exports=QEr});var Tn=s((Q3e,p_)=>{"use strict";var KEr=l_();p_.exports=KEr});var m_=s((K3e,g_)=>{"use strict";function rNr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}g_.exports=rNr});var h_=s((r6e,d_)=>{"use strict";function eNr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}d_.exports=eNr});var b_=s((e6e,y_)=>{"use strict";var tNr=tr(),iNr=m_(),nNr=h_(),q_=1048575,aNr=.3333333333333333;function sNr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=tNr(r),a=r-1,(q_&2+n)<3?a===0?0:a*a*(aNr*a-.5):(u=a/(2+a),o=u*u,n&=q_,c=n-398458|0,v=o*o,l=440401-n|0,t=v*iNr(v),i=o*nNr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}y_.exports=sNr});var A_=s((t6e,N_)=>{"use strict";var w_=tr(),uNr=ne(),oNr=ie(),vNr=E(),fNr=Yr(),cNr=G(),lNr=b_(),pNr=0x40000000000000,E_=.4342944818781689,gNr=25082946711645275e-27,mNr=.30102999566361177,dNr=3694239077158931e-28,hNr=1048575,qNr=2146435072,yNr=1048576,bNr=1072693248;function wNr(r){var e,t,i,n,a,u,o,f;return vNr(r)||r<0?NaN:r===0?cNr:(t=w_(r),u=0,t<yNr&&(u-=54,r*=pNr,t=w_(r)),t>=qNr?r+r:(u+=(t>>20)-fNr|0,t&=hNr,a=t+614244&1048576|0,r=uNr(r,t|a^bNr),u+=a>>20|0,o=u,n=lNr(r),r-=1,e=oNr(r,0),i=r-e,f=o*dNr+(r+n)*gNr,f+=(i+n)*E_+e*E_,f+o*mNr))}N_.exports=wNr});var S_=s((i6e,O_)=>{"use strict";var ENr=A_();O_.exports=ENr});var I_=s((n6e,T_)=>{"use strict";var NNr=E(),ANr=Rr(),ONr=W(),SNr=x(),TNr=Tn(),INr=S_(),_Nr=ka(),LNr=ja(),PNr=I();function RNr(r){var e,t;return NNr(r)||ANr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=INr(r),e===-1?t=SNr(t):t=TNr(t),t<=LNr?e*0:t>_Nr?PNr:e*ONr(10,t))}T_.exports=RNr});var L_=s((a6e,__)=>{"use strict";var FNr=I_();__.exports=FNr});var R_=s((s6e,P_)=>{"use strict";function MNr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}P_.exports=MNr});var M_=s((u6e,F_)=>{"use strict";function BNr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}F_.exports=BNr});var j_=s((o6e,k_)=>{"use strict";var kNr=tr(),jNr=R_(),CNr=M_(),B_=1048575,GNr=.3333333333333333;function VNr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=kNr(r),a=r-1,(B_&2+n)<3?a===0?0:a*a*(GNr*a-.5):(u=a/(2+a),o=u*u,n&=B_,c=n-398458|0,v=o*o,l=440401-n|0,t=v*jNr(v),i=o*CNr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}k_.exports=VNr});var V_=s((v6e,G_)=>{"use strict";var UNr=tr(),HNr=ne(),WNr=ie(),zNr=gi(),DNr=E(),XNr=xr(),JNr=Ba(),xNr=Yr(),YNr=G(),ZNr=j_(),$Nr=0x40000000000000,C_=1.4426950407214463,QNr=16751713164886512e-26,KNr=2146435072,rAr=1048576,eAr=1072693248,q1=[0,0];function tAr(r){var e,t,i,n,a,u,o;if(DNr(r)||r<0)return NaN;if(zNr.assign(r,q1,1,0),i=q1[0],n=q1[1],o=0,i<rAr){if((i&XNr|n)===0)return YNr;o-=54,r*=$Nr,i=UNr(r)}return i>=KNr?r+r:(o+=(i>>20)-xNr|0,i&=JNr,u=i+614244&1048576|0,r=HNr(r,i|u^eAr),o+=u>>20|0,a=ZNr(r),r-=1,e=WNr(r,0),t=r-e,(r+a)*QNr+(t+a)*C_+e*C_+o)}G_.exports=tAr});var H_=s((f6e,U_)=>{"use strict";var iAr=V_();U_.exports=iAr});var z_=s((c6e,W_)=>{"use strict";var nAr=E(),aAr=Rr(),sAr=W(),uAr=x(),oAr=Tn(),vAr=H_(),fAr=k2(),cAr=j2(),lAr=I();function pAr(r){var e,t;return nAr(r)||aAr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=vAr(r),t===cAr)?r:(e===-1?t=uAr(t):t=oAr(t),t>fAr?lAr:e*sAr(2,t))}W_.exports=pAr});var X_=s((l6e,D_)=>{"use strict";var gAr=z_();D_.exports=gAr});var x_=s((p6e,J_)=>{"use strict";var mAr=x(),dAr=Tn();function hAr(r){return r<0?dAr(r):mAr(r)}J_.exports=hAr});var t0=s((g6e,Y_)=>{"use strict";var qAr=x_();Y_.exports=qAr});var $_=s((m6e,Z_)=>{"use strict";function yAr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}Z_.exports=yAr});var K_=s((d6e,Q_)=>{"use strict";var bAr=Fa(),wAr=$_();function EAr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*wAr(n),u=1-(e-i*a/(2-a)-r),bAr(u,t)}Q_.exports=EAr});var aL=s((h6e,nL)=>{"use strict";var NAr=E(),rL=t0(),AAr=G(),eL=I(),OAr=K_(),SAr=.6931471803691238,TAr=19082149292705877e-26,tL=1.4426950408889634,IAr=709.782712893384,_Ar=-745.1332191019411,iL=1/(1<<28),LAr=-iL;function PAr(r){var e,t,i;return NAr(r)||r===eL?r:r===AAr?0:r>IAr?eL:r<_Ar?0:r>LAr&&r<iL?1+r:(r<0?i=rL(tL*r-.5):i=rL(tL*r+.5),e=r-i*SAr,t=i*TAr,OAr(e,t,i))}nL.exports=PAr});var nr=s((q6e,sL)=>{"use strict";var RAr=aL();sL.exports=RAr});var oL=s((y6e,uL)=>{"use strict";var FAr=G();function MAr(r){return r===0&&1/r===FAr}uL.exports=MAr});var y1=s((b6e,vL)=>{"use strict";var BAr=oL();vL.exports=BAr});var b1=s((w6e,fL)=>{"use strict";var kAr=2.5066282746310007;fL.exports=kAr});var lL=s((E6e,cL)=>{"use strict";function jAr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}cL.exports=jAr});var mL=s((N6e,gL)=>{"use strict";var CAr=b1(),pL=W(),GAr=nr(),VAr=lL(),UAr=143.01608;function HAr(r){var e,t,i;return e=1/r,e=1+e*VAr(e),t=GAr(r),r>UAr?(i=pL(r,.5*r-.25),t=i*(i/t)):t=pL(r,r-.5)/t,CAr*t*e}gL.exports=HAr});var hL=s((A6e,dL)=>{"use strict";var WAr=.5772156649015329;dL.exports=WAr});var yL=s((O6e,qL)=>{"use strict";var zAr=hL();function DAr(r,e){return e/((1+zAr*r)*r)}qL.exports=DAr});var wL=s((S6e,bL)=>{"use strict";function XAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}bL.exports=XAr});var _L=s((T6e,IL)=>{"use strict";var JAr=E(),xAr=_r(),YAr=y1(),EL=J(),ZAr=x(),$Ar=Gt(),NL=I(),AL=G(),OL=Fr(),SL=mL(),TL=yL(),QAr=wL();function KAr(r){var e,t,i,n;if(xAr(r)&&r<0||r===AL||JAr(r))return NaN;if(r===0)return YAr(r)?AL:NL;if(r>171.61447887182297)return NL;if(r<-170.5674972726612)return 0;if(t=EL(r),t>33)return r>=0?SL(r):(i=ZAr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*$Ar(OL*n),e*OL/(EL(n)*SL(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return TL(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return TL(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*QAr(r))}IL.exports=KAr});var hi=s((I6e,LL)=>{"use strict";var rOr=_L();LL.exports=rOr});var FL=s((_6e,RL)=>{"use strict";var eOr=E(),tOr=Rr(),PL=Ct(),w1=Gt(),iOr=J(),In=Ia(),_n=Fr();function nOr(r){var e,t;return eOr(r)?NaN:tOr(r)?NaN:(t=r%2,e=iOr(t),e===0||e===1?In(0,t):e<.25?w1(_n*t):e<.75?(e=.5-e,In(PL(_n*e),t)):e<1.25?(t=In(1,t)-t,w1(_n*t)):e<1.75?(e-=1.5,-In(PL(_n*e),t)):(t-=In(2,t),w1(_n*t)))}RL.exports=nOr});var Ln=s((L6e,ML)=>{"use strict";var aOr=FL();ML.exports=aOr});var kL=s((P6e,BL)=>{"use strict";function sOr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}BL.exports=sOr});var CL=s((R6e,jL)=>{"use strict";function uOr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}jL.exports=uOr});var VL=s((F6e,GL)=>{"use strict";function oOr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}GL.exports=oOr});var HL=s((M6e,UL)=>{"use strict";function vOr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}UL.exports=vOr});var zL=s((B6e,WL)=>{"use strict";function fOr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}WL.exports=fOr});var XL=s((k6e,DL)=>{"use strict";function cOr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}DL.exports=cOr});var xL=s((j6e,JL)=>{"use strict";function lOr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}JL.exports=lOr});var ZL=s((C6e,YL)=>{"use strict";function pOr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}YL.exports=pOr});var QL=s((G6e,$L)=>{"use strict";function gOr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}$L.exports=gOr});var rP=s((V6e,KL)=>{"use strict";function mOr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}KL.exports=mOr});var iP=s((U6e,tP)=>{"use strict";var dOr=E(),hOr=Rr(),qOr=J(),qi=R(),yOr=t0(),bOr=Ln(),wOr=Fr(),E1=I(),EOr=kL(),NOr=CL(),AOr=VL(),OOr=HL(),SOr=zL(),TOr=XL(),IOr=xL(),_Or=ZL(),LOr=QL(),POr=rP(),ROr=.07721566490153287,FOr=.3224670334241136,MOr=1,BOr=-.07721566490153287,kOr=.48383612272381005,jOr=-.1475877229945939,COr=.06462494023913339,GOr=-.07721566490153287,VOr=1,UOr=.4189385332046727,i0=1.4616321449683622,HOr=4503599627370496,WOr=0x400000000000000,zOr=8470329472543003e-37,eP=1.4616321449683622,DOr=-.12148629053584961,XOr=-3638676997039505e-33;function JOr(r){var e,t,i,n,a,u,o,f,v,c,l,p,m;if(dOr(r)||hOr(r))return r;if(r===0)return E1;if(r<0?(e=!0,r=-r):e=!1,r<zOr)return-qi(r);if(e){if(r>=HOr||(v=bOr(r),v===0))return E1;t=qi(wOr/qOr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-qi(r),r>=i0-1+.27?(l=1-r,i=0):r>=i0-1-.27?(l=r-(eP-1),i=1):(l=r,i=2)):(m=0,r>=i0+.27?(l=2-r,i=0):r>=i0-.27?(l=r-eP,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=ROr+p*EOr(p),a=p*(FOr+p*NOr(p)),o=l*u+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=kOr+c*SOr(c),a=jOr+c*TOr(c),n=COr+c*IOr(c),o=p*u-(XOr-c*(a+l*n)),m+=DOr+o;break;case 2:u=l*(GOr+l*_Or(l)),a=VOr+l*LOr(l),m+=-.5*l+u/a;break}else if(r<8)switch(i=yOr(r),l=r-i,o=l*(BOr+l*OOr(l)),f=MOr+l*AOr(l),m=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=qi(p)}else r<WOr?(v=qi(r),p=1/r,l=p*p,c=UOr+p*POr(l),m=(r-.5)*(v-1)+c):m=r*(qi(r)-1);return e&&(m=t-m),m}tP.exports=JOr});var Pn=s((H6e,nP)=>{"use strict";var xOr=iP();nP.exports=xOr});var Ze=s((W6e,aP)=>{"use strict";var YOr=6.283185307179586;aP.exports=YOr});var N1=s((z6e,sP)=>{"use strict";var ZOr=14901161193847656e-24;sP.exports=ZOr});var A1=s((D6e,uP)=>{"use strict";var $Or=.9189385332046728;uP.exports=$Or});var oP=s((X6e,QOr)=>{QOr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var vP=s((J6e,KOr)=>{KOr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var fP=s((x6e,rSr)=>{rSr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var lP=s((Y6e,cP)=>{"use strict";function eSr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}cP.exports=eSr});var gP=s((Z6e,pP)=>{"use strict";function tSr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}pP.exports=tSr});var dP=s(($6e,mP)=>{"use strict";function iSr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}mP.exports=iSr});var qP=s((Q6e,hP)=>{"use strict";function nSr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}hP.exports=nSr});var bP=s((K6e,yP)=>{"use strict";function aSr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}yP.exports=aSr});var EP=s((r4e,wP)=>{"use strict";function sSr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}wP.exports=sSr});var TP=s((e4e,SP)=>{"use strict";var uSr=E(),oSr=_r(),vSr=J(),n0=nr(),fSr=x(),cSr=hi(),lSr=Pn(),NP=Ln(),AP=W(),pSr=R(),gSr=I(),mSr=G(),OP=Ze(),dSr=N1(),hSr=A1(),qSr=oP(),ySr=vP(),bSr=fP(),wSr=lP(),ESr=gP(),NSr=dP(),ASr=qP(),OSr=bP(),SSr=EP(),TSr=129,ISr=170,_Sr=709,LSr=1.2433929443359375,PSr=.6986598968505859;function O1(r){var e,t,i,n,a,u;if(uSr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(oSr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=TSr)return-bSr[u]/(i+1)}else return(n&1)===0?ySr[n/2]:qSr[(n-3)/2];return vSr(r)<dSr?-.5-hSr*r:(t=1-r,r<0?fSr(r/2)===r/2?0:(e=r,r=t,t=e,r>ISr?(e=NP(.5*t)*2*O1(r),a=lSr(r),a-=r*pSr(OP),a>_Sr?e<0?mSr:gSr:e*n0(a)):NP(.5*t)*2*AP(OP,-r)*cSr(r)*O1(r)):r<1?(e=wSr(t),e-=LSr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+ESr(t)):r<=4?(e=PSr+1/-t,e+NSr(r-2)):r<=7?(e=ASr(r-4),1+n0(e)):r<15?(e=OSr(r-7),1+n0(e)):r<36?(e=SSr(r-15),1+n0(e)):1+AP(2,-r))}SP.exports=O1});var _P=s((t4e,IP)=>{"use strict";var RSr=TP();IP.exports=RSr});var PP=s((i4e,LP)=>{"use strict";var H=ar(),FSr=J(),MSr=Ua(),BSr=qn(),kSr=kO(),jSr=YO(),CSr=KO(),GSr=iS(),VSr=uS(),USr=dS(),HSr=bS(),WSr=AS(),zSr=kt(),DSr=Q2(),XSr=Xa(),JSr=_S(),xSr=FS(),YSr=jS(),ZSr=DS(),$Sr=s1(),QSr=u1(),KSr=vI(),rTr=SI(),eTr=t_(),tTr=f_(),iTr=Tn(),nTr=L_(),aTr=X_(),sTr=Ct(),uTr=Gt(),oTr=V(),vTr=_P();function fTr(r){return H(r,"abs",FSr),H(r,"abs2",MSr),H(r,"acos",BSr),H(r,"acosh",kSr),H(r,"acot",jSr),H(r,"acovercos",CSr),H(r,"acoversin",GSr),H(r,"acsc",VSr),H(r,"acsch",USr),H(r,"ahavercos",HSr),H(r,"ahaversin",WSr),H(r,"asin",zSr),H(r,"asinh",DSr),H(r,"atan",XSr),H(r,"atanh",JSr),H(r,"avercos",xSr),H(r,"aversin",YSr),H(r,"bernoulli",ZSr),H(r,"besselj0",$Sr),H(r,"besselj1",QSr),H(r,"bessely0",KSr),H(r,"bessely1",rTr),H(r,"binet",eTr),H(r,"cbrt",tTr),H(r,"ceil",iTr),H(r,"ceil10",nTr),H(r,"ceil2",aTr),H(r,"cos",sTr),H(r,"sin",uTr),H(r,"sqrt",oTr),H(r,"zeta",vTr),r}LP.exports=fTr});var FP=s((n4e,RP)=>{"use strict";var cTr=ar(),lTr=bA(),pTr=ZA(),gTr=PP();function mTr(r){return cTr(r,"tools",pTr({})),r=lTr(r),r=gTr(r),r}RP.exports=mTr});var BP=s((a4e,MP)=>{"use strict";var dTr=Ce();function hTr(r,e,t,i){dTr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}MP.exports=hTr});var M=s((s4e,kP)=>{"use strict";var qTr=BP();kP.exports=qTr});var CP=s((u4e,jP)=>{"use strict";function yTr(r){return e;function e(){return r}}jP.exports=yTr});var T=s((o4e,GP)=>{"use strict";var bTr=CP();GP.exports=bTr});var UP=s((v4e,VP)=>{"use strict";var wTr=I();function ETr(r){return r===0&&1/r===wTr}VP.exports=ETr});var $e=s((f4e,HP)=>{"use strict";var NTr=UP();HP.exports=NTr});var DP=s((c4e,zP)=>{"use strict";var ATr=$e(),WP=E(),S1=I();function OTr(r,e){return WP(r)||WP(e)?NaN:r===S1||e===S1?S1:r===e&&r===0?ATr(r)?r:e:r>e?r:e}zP.exports=OTr});var T1=s((l4e,XP)=>{"use strict";var STr=DP();XP.exports=STr});var YP=s((p4e,xP)=>{"use strict";var JP=65535;function TTr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&JP)>>>0,o=(e&JP)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}xP.exports=TTr});var $P=s((g4e,ZP)=>{"use strict";var ITr=YP();ZP.exports=ITr});var I1=s((m4e,QP)=>{"use strict";function _Tr(r,e,t,i,n,a,u){var o,f,v,c,l,p,m;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,m=0;m<r;m++)v(f,p,c(o,l)),l+=t,p+=a;return e}QP.exports=_Tr});var eR=s((d4e,rR)=>{"use strict";var KP=ha(),LTr=I1(),_1=8;function PTr(r,e,t,i,n){var a,u,o,f,v,c;if(r<=0)return i;if(o=KP(e),f=KP(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,LTr(r,o,t,a,f,n,u),f.data;if(t===1&&n===1){if(v=r%_1,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<_1)return i;for(c=v;c<r;c+=_1)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}rR.exports=PTr});var nR=s((h4e,iR)=>{"use strict";var tR=ha(),RTr=I1(),Rn=8;function FTr(r,e,t,i,n,a,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=tR(e),c=tR(n),v.accessorProtocol||c.accessorProtocol)return RTr(r,v,t,i,c,a,u),c.data;if(o=i,f=u,t===1&&a===1){if(l=r%Rn,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<Rn)return n;for(p=l;p<r;p+=Rn)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=Rn,f+=Rn;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}iR.exports=FTr});var Qe=s((q4e,sR)=>{"use strict";var MTr=w(),aR=eR(),BTr=nR();MTr(aR,"ndarray",BTr);sR.exports=aR});var oR=s((y4e,uR)=>{"use strict";function kTr(){}uR.exports=kTr});var fR=s((b4e,vR)=>{"use strict";var jTr=oR();function CTr(){return jTr.name==="foo"}vR.exports=CTr});var lR=s((w4e,cR)=>{"use strict";var GTr=fR();cR.exports=GTr});var gR=s((E4e,pR)=>{"use strict";var VTr=L(),UTr=lR(),HTr=y(),WTr=Cu().REGEXP,zTr=UTr();function DTr(r){if(VTr(r)===!1)throw new TypeError(HTr("invalid argument. Must provide a function. Value: `%s`.",r));return zTr?r.name:WTr.exec(r.toString())[1]}pR.exports=DTr});var dR=s((N4e,mR)=>{"use strict";var XTr=gR();mR.exports=XTr});var qR=s((A4e,hR)=>{"use strict";var JTr=Yi(),xTr=Zt(),YTr=xi(),ZTr=Ji(),$Tr=Yt(),QTr=At(),KTr=pr(),rIr=Kr(),eIr=gr(),tIr=[eIr,rIr,QTr,KTr,ZTr,$Tr,JTr,xTr,YTr];hR.exports=tIr});var yR=s((O4e,iIr)=>{iIr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var OR=s((S4e,AR)=>{"use strict";var nIr=Ge(),aIr=dR(),ER=Lt(),sIr=Du(),uIr=gr(),bR=qR(),wR=yR(),a0=sIr()?ER(uIr):NR;a0=aIr(a0)==="TypedArray"?a0:NR;function NR(){}function oIr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof a0)return!0;for(t=0;t<bR.length;t++)if(r instanceof bR[t])return!0;for(;r;){for(e=nIr(r),t=0;t<wR.length;t++)if(wR[t]===e)return!0;r=ER(r)}return!1}AR.exports=oIr});var TR=s((T4e,SR)=>{"use strict";var vIr=OR();SR.exports=vIr});var _R=s((I4e,IR)=>{"use strict";var fIr=Ki(),cIr=en(),lIr=[cIr,fIr];IR.exports=lIr});var LR=s((_4e,pIr)=>{pIr.exports=["Complex64Array","Complex128Array"]});var MR=s((L4e,FR)=>{"use strict";var gIr=Ge(),mIr=Lt(),PR=_R(),RR=LR();function dIr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<PR.length;t++)if(r instanceof PR[t])return!0;for(;r;){for(e=gIr(r),t=0;t<RR.length;t++)if(RR[t]===e)return!0;r=mIr(r)}return!1}FR.exports=dIr});var kR=s((P4e,BR)=>{"use strict";var hIr=MR();BR.exports=hIr});var CR=s((R4e,jR)=>{"use strict";var qIr=y();function yIr(r,e){if(typeof e!="function")throw new TypeError(qIr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}jR.exports=yIr});var VR=s((F4e,GR)=>{"use strict";var bIr=CR();GR.exports=bIr});var HR=s((M4e,UR)=>{"use strict";var wIr=Yi(),EIr=Zt(),NIr=xi(),AIr=Ji(),OIr=Yt(),SIr=At(),TIr=pr(),IIr=Kr(),_Ir=gr(),LIr=Ki(),PIr=en(),RIr=[[_Ir,"Float64Array"],[IIr,"Float32Array"],[SIr,"Int32Array"],[TIr,"Uint32Array"],[AIr,"Int16Array"],[OIr,"Uint16Array"],[wIr,"Int8Array"],[EIr,"Uint8Array"],[NIr,"Uint8ClampedArray"],[LIr,"Complex64Array"],[PIr,"Complex128Array"]];UR.exports=RIr});var zR=s((B4e,WR)=>{"use strict";var FIr=VR(),MIr=Ge(),BIr=Lt(),yi=HR();function kIr(r){var e,t;for(t=0;t<yi.length;t++)if(FIr(r,yi[t][0]))return yi[t][1];for(;r;){for(e=MIr(r),t=0;t<yi.length;t++)if(e===yi[t][1])return yi[t][1];r=BIr(r)}}WR.exports=kIr});var XR=s((k4e,DR)=>{"use strict";var jIr=TR(),CIr=kR(),GIr=Kt(),VIr=ri(),UIr=y(),HIr=zR();function WIr(r){var e,t,i;if(jIr(r))e=r;else if(CIr(r))r.BYTES_PER_ELEMENT===8?e=GIr(r,0):e=VIr(r,0);else throw new TypeError(UIr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:HIr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}DR.exports=WIr});var B=s((j4e,JR)=>{"use strict";var zIr=XR();JR.exports=zIr});var L1=s((C4e,xR)=>{"use strict";var DIr=Jt(),XIr=x(),JIr=DIr-1;function xIr(){var r=XIr(1+JIr*Math.random());return r>>>0}xR.exports=xIr});var C1=s((G4e,aF)=>{"use strict";var oe=w(),Ke=P(),YR=M(),P1=O(),YIr=_(),ZIr=Vr(),ZR=re(),$Ir=cr().isPrimitive,$R=ee().isPrimitive,tF=di(),iF=Jt(),qr=pr(),QIr=T1(),j1=$P(),bi=Qe(),KIr=B(),br=y(),QR=L1(),sr=624,R1=397,KR=iF>>>0,r_r=19650218>>>0,F1=2147483648>>>0,M1=2147483647>>>0,e_r=1812433253>>>0,t_r=1664525>>>0,i_r=1566083941>>>0,n_r=2636928640>>>0,a_r=4022730752>>>0,s_r=2567483615>>>0,B1=[0>>>0,s_r>>>0],nF=1/(tF+1),u_r=67108864>>>0,o_r=2147483648>>>0,k1=1>>>0,v_r=tF*nF,s0=1,u0=3,rt=2,et=sr+3,yr=sr+5,Fn=sr+6;function rF(r,e){var t;return e?t="option":t="argument",r.length<Fn+1?new RangeError(br("invalid %s. `state` array has insufficient length.",t)):r[0]!==s0?new RangeError(br("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,s0,r[0])):r[1]!==u0?new RangeError(br("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,u0,r[1])):r[rt]!==sr?new RangeError(br("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,sr,r[rt])):r[et]!==1?new RangeError(br("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[et])):r[yr]!==r.length-Fn?new RangeError(br("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Fn,r[yr])):null}function eF(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=j1(t,e_r)+i>>>0;return r}function f_r(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=QIr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=j1(n,t_r)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=j1(n,i_r)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=o_r,r}function c_r(r){var e,t,i,n;for(n=sr-R1,t=0;t<n;t++)e=r[t]&F1|r[t+1]&M1,r[t]=r[t+R1]^e>>>1^B1[e&k1];for(i=sr-1;t<i;t++)e=r[t]&F1|r[t+1]&M1,r[t]=r[t-n]^e>>>1^B1[e&k1];return e=r[i]&F1|r[0]&M1,r[i]=r[R1-1]^e>>>1^B1[e&k1],r}function l_r(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!YIr(r))throw new TypeError(br("invalid argument. Options argument must be an object. Value: `%s`.",r));if(P1(r,"copy")&&(i.copy=r.copy,!$Ir(r.copy)))throw new TypeError(br("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(P1(r,"state")){if(t=r.state,i.state=!0,!ZR(t))throw new TypeError(br("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=rF(t,!0),u)throw u;i.copy===!1?e=t:(e=new qr(t.length),bi(t.length,t,1,e,1)),t=new qr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,sr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,t[yr])}if(n===void 0)if(P1(r,"seed"))if(n=r.seed,i.seed=!0,$R(n)){if(n>KR)throw new RangeError(br("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(ZIr(n)===!1||n.length<1)throw new TypeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!$R(n))throw new TypeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>KR)throw new RangeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new qr(Fn+a),e[0]=s0,e[1]=u0,e[rt]=sr,e[et]=1,e[et+1]=sr,e[yr]=a,bi.ndarray(a,n,1,0,e,1,yr+1),t=new qr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,sr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,a),t=eF(t,sr,r_r),t=f_r(t,sr,n,a)}else n=QR()>>>0}else n=QR()>>>0;return t===void 0&&(e=new qr(Fn+1),e[0]=s0,e[1]=u0,e[rt]=sr,e[et]=1,e[et+1]=sr,e[yr]=1,e[yr+1]=n,t=new qr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,sr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,1),t=eF(t,sr,n)),oe(h,"NAME","mt19937"),Ke(h,"seed",o),Ke(h,"seedLength",f),YR(h,"state",l,p),Ke(h,"stateLength",v),Ke(h,"byteLength",c),oe(h,"toJSON",m),oe(h,"MIN",0),oe(h,"MAX",iF),oe(h,"normalized",d),oe(d,"NAME",h.NAME),Ke(d,"seed",o),Ke(d,"seedLength",f),YR(d,"state",l,p),Ke(d,"stateLength",v),Ke(d,"byteLength",c),oe(d,"toJSON",m),oe(d,"MIN",0),oe(d,"MAX",v_r),h;function o(){var g=e[yr];return bi(g,n,1,new qr(g),1)}function f(){return e[yr]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return bi(g,e,1,new qr(g),1)}function p(g){var q;if(!ZR(g))throw new TypeError(br("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(q=rF(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?bi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new qr(g.length)),bi(g.length,g,1,e,1)),t=new qr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,sr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,e[yr])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=KIr(e),g.params=[],g}function h(){var g,q;return q=e[et+1],q>=sr&&(t=c_r(t),q=0),g=t[q],e[et+1]=q+1,g^=g>>>11,g^=g<<7&n_r,g^=g<<15&a_r,g^=g>>>18,g>>>0}function d(){var g=h()>>>5,q=h()>>>6;return(g*u_r+q)*nF}}aF.exports=l_r});var uF=s((V4e,sF)=>{"use strict";var p_r=C1(),g_r=L1(),m_r=p_r({seed:g_r()});sF.exports=m_r});var X=s((U4e,vF)=>{"use strict";var d_r=w(),oF=uF(),h_r=C1();d_r(oF,"factory",h_r);vF.exports=oF});var pF=s((H4e,lF)=>{"use strict";var fF=j().isPrimitive,G1=y(),cF=or();function q_r(r,e){return!fF(r)||cF(r)?new TypeError(G1("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!fF(e)||cF(e)?new TypeError(G1("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(G1("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}lF.exports=q_r});var mF=s((W4e,gF)=>{"use strict";var y_r=W(),b_r=Gt(),w_r=Da();function E_r(r,e,t){return e+y_r(b_r(w_r*r()),2)*(t-e)}gF.exports=E_r});var V1=s((z4e,NF)=>{"use strict";var ve=w(),o0=P(),dF=M(),hF=_(),qF=L(),yF=O(),bF=T(),N_r=C(),v0=X().factory,wF=E(),A_r=B(),f0=y(),O_r=pF(),EF=mF();function S_r(){var r,e,t,i,n,a;if(arguments.length===0)e=v0();else if(arguments.length===1){if(r=arguments[0],!hF(r))throw new TypeError(f0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yF(r,"prng")){if(!qF(r.prng))throw new TypeError(f0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=v0(r)}else{if(n=arguments[0],a=arguments[1],i=O_r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!hF(r))throw new TypeError(f0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yF(r,"prng")){if(!qF(r.prng))throw new TypeError(f0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=v0(r)}else e=v0()}return n===void 0?t=h:t=m,ve(t,"NAME","arcsine"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),dF(t,"state",bF(null),N_r),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",bF(null)),ve(t,"PRNG",e)):(o0(t,"seed",u),o0(t,"seedLength",o),dF(t,"state",c,l),o0(t,"stateLength",f),o0(t,"byteLength",v),ve(t,"toJSON",p),ve(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=A_r(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return EF(e,n,a)}function h(d,g){return wF(d)||wF(g)||d>=g?NaN:EF(e,d,g)}}NF.exports=S_r});var OF=s((D4e,AF)=>{"use strict";var T_r=V1(),I_r=T_r();AF.exports=I_r});var IF=s((X4e,TF)=>{"use strict";var __r=w(),SF=OF(),L_r=V1();__r(SF,"factory",L_r);TF.exports=SF});var U1=s((J4e,MF)=>{"use strict";var fe=w(),c0=P(),_F=M(),LF=_(),P_r=nn().isPrimitive,PF=L(),RF=O(),FF=T(),R_r=C(),l0=X().factory,F_r=E(),M_r=B(),p0=y();function B_r(){var r,e,t,i;if(arguments.length===0)e=l0();else if(arguments.length===1&&LF(arguments[0]))if(r=arguments[0],RF(r,"prng")){if(!PF(r.prng))throw new TypeError(p0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=l0(r);else{if(i=arguments[0],!P_r(i))throw new TypeError(p0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!LF(r))throw new TypeError(p0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(RF(r,"prng")){if(!PF(r.prng))throw new TypeError(p0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=l0(r)}else e=l0()}return i===void 0?t=p:t=l,fe(t,"NAME","bernoulli"),r&&r.prng?(fe(t,"seed",null),fe(t,"seedLength",null),_F(t,"state",FF(null),R_r),fe(t,"stateLength",null),fe(t,"byteLength",null),fe(t,"toJSON",FF(null)),fe(t,"PRNG",e)):(c0(t,"seed",n),c0(t,"seedLength",a),_F(t,"state",f,v),c0(t,"stateLength",u),c0(t,"byteLength",o),fe(t,"toJSON",c),fe(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=M_r(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return F_r(m)||m<0||m>1?NaN:e()<=m?1:0}}MF.exports=B_r});var kF=s((x4e,BF)=>{"use strict";var k_r=U1(),j_r=k_r();BF.exports=j_r});var GF=s((Y4e,CF)=>{"use strict";var C_r=w(),jF=kF(),G_r=U1();C_r(jF,"factory",G_r);CF.exports=jF});var WF=s((Z4e,HF)=>{"use strict";var V_r=V(),VF=nr(),U_r=R(),UF=.00991256303526217;function H_r(r,e){var t,i,n;for(i=VF(-.5*e*e),t=[],t.push(UF/i),t.push(e),n=2;n<r;n++)t[n]=V_r(-2*U_r(UF/t[n-1]+i)),i=VF(-.5*t[n]*t[n]);return t.push(0),t}HF.exports=H_r});var DF=s(($4e,zF)=>{"use strict";function W_r(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}zF.exports=W_r});var xF=s((Q4e,JF)=>{"use strict";var XF=R();function z_r(r,e,t){var i,n;do i=XF(r())/e,n=XF(r());while(-2*n<i*i);return t?i-e:e-i}JF.exports=z_r});var QF=s((K4e,$F)=>{"use strict";var D_r=J(),YF=nr(),X_r=WF(),J_r=DF(),x_r=xF(),Y_r=128,ZF=3.442619855899,Ut=X_r(Y_r,ZF),Z_r=J_r(Ut),$_r=127;function Q_r(r,e){return t;function t(){for(var i,n,a,u,o,f,v;;){if(o=2*r()-1,f=e()&$_r,D_r(o)<Z_r[f])return o*Ut[f];if(f===0)return x_r(r,ZF,o<0);if(u=o*Ut[f],a=u*u,v=f+1,i=YF(-.5*(Ut[f]*Ut[f]-a)),n=YF(-.5*(Ut[v]*Ut[v]-a)),n+r()*(i-n)<1)return u}}}$F.exports=Q_r});var W1=s((rve,eM)=>{"use strict";var tt=w(),g0=P(),KF=M(),K_r=L(),rLr=_(),eLr=cr().isPrimitive,m0=O(),tLr=re(),H1=X().factory,rM=T(),iLr=C(),nLr=x(),aLr=Jt(),sLr=B(),Mn=y(),uLr=QF();function oLr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!rLr(r))throw new TypeError(Mn("invalid argument. Must provide an object. Value: `%s`.",r));if(m0(r,"copy")&&(n.copy=r.copy,!eLr(r.copy)))throw new TypeError(Mn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(m0(r,"prng")){if(!K_r(r.prng))throw new TypeError(Mn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(m0(r,"state")){if(n.state=r.state,!tLr(r.state))throw new TypeError(Mn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(m0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Mn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=H1(n),e=t.normalized):(t=H1({seed:nLr(1+aLr*e()),copy:n.copy}),n.seed=null):(t=H1(n),e=t.normalized),i=uLr(e,t),tt(i,"NAME","improved-ziggurat"),n.seed===null?(tt(i,"seed",null),tt(i,"seedLength",null)):(g0(i,"seed",a),g0(i,"seedLength",u)),r&&r.prng?(KF(i,"state",rM(null),iLr),tt(i,"stateLength",null),tt(i,"byteLength",null),tt(i,"toJSON",rM(null))):(KF(i,"state",v,c),g0(i,"stateLength",o),g0(i,"byteLength",f),tt(i,"toJSON",l)),tt(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=sLr(t.state),p.params=[],p}}eM.exports=oLr});var iM=s((eve,tM)=>{"use strict";var vLr=W1(),fLr=vLr();tM.exports=fLr});var it=s((tve,aM)=>{"use strict";var cLr=w(),nM=iM(),lLr=W1();cLr(nM,"factory",lLr);aM.exports=nM});var uM=s((ive,sM)=>{"use strict";var pLr=L(),gLr=pLr(Object.assign);sM.exports=gLr});var vM=s((nve,oM)=>{"use strict";var mLr=Object.assign;oM.exports=mLr});var cM=s((ave,fM)=>{"use strict";var dLr=typeof Object.getOwnPropertySymbols<"u";fM.exports=dLr});var gM=s((sve,pM)=>{"use strict";var lM=ui(),hLr=lM.getOwnPropertySymbols;function qLr(r){return hLr(lM(r))}pM.exports=qLr});var dM=s((uve,mM)=>{"use strict";function yLr(){return[]}mM.exports=yLr});var qM=s((ove,hM)=>{"use strict";var bLr=cM(),wLr=gM(),ELr=dM(),z1;bLr?z1=wLr:z1=ELr;hM.exports=z1});var bM=s((vve,yM)=>{"use strict";var NLr=un(),ALr=qM(),OLr=sn();function SLr(r){var e,t,i;for(e=NLr(r),t=ALr(r),i=0;i<t.length;i++)OLr(r,t[i])&&e.push(t[i]);return e}yM.exports=SLr});var EM=s((fve,wM)=>{"use strict";var TLr=bM();wM.exports=TLr});var OM=s((cve,AM)=>{"use strict";var ILr=EM(),NM=ui(),_Lr=y();function LLr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(_Lr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=NM(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=ILr(NM(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}AM.exports=LLr});var Bn=s((lve,SM)=>{"use strict";var PLr=uM(),RLr=vM(),FLr=OM(),D1;PLr?D1=RLr:D1=FLr;SM.exports=D1});var LM=s((pve,_M)=>{"use strict";var TM=D().isPrimitive,IM=y();function MLr(r,e){return TM(r)?TM(e)?null:new TypeError(IM("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(IM("invalid argument. First argument must be a positive number. Value: `%s`.",r))}_M.exports=MLr});var BM=s((gve,MM)=>{"use strict";var PM=R(),RM=V(),BLr=W(),FM=1/3;function kLr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(t<1?(f=t+1-FM,o=1/RM(9*f),c=BLr(r(),1/t)):(f=t-FM,o=1/RM(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,u=.5*n+f*(1-p+PM(p)),l=r(),(l<a||PM(l)<u)&&(i=!1)}return f*p*c}MM.exports=kLr});var CM=s((mve,jM)=>{"use strict";var X1=W(),kM=R();function jLr(r,e,t){var i,n,a,u,o,f,v,c;for(a=t-1,o=X1(a+a,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=X1(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*X1(n/(8*t-8),2),f<c&&(c=a*kM(4*v*(1-v)),c+=u*u/2,c>=kM(f)&&(i=!1))));return v}jM.exports=jLr});var VM=s((dve,GM)=>{"use strict";var CLr=W(),d0=R();function GLr(r,e,t,i){var n,a,u,o,f,v,c,l,p,m,h;for(o=t-1,f=i-1,v=o+f,c=v*d0(v),u=o/v,n=.5/CLr(v,.5),a=!0;a===!0;)l=e(),m=u+l*n,m>=0&&m<=1&&(p=r(),h=o*d0(m/o),h+=f*d0((1-m)/f),h+=c+.5*l*l,h>=d0(p)&&(a=!1));return m}GM.exports=GLr});var WM=s((hve,HM)=>{"use strict";var J1=nr(),UM=W(),x1=R();function VLr(r,e,t){for(var i,n,a,u,o,f,v;;)if(u=r(),o=r(),f=UM(u,1/e),v=UM(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=x1(u)/e,n=x1(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),J1(i-x1(J1(i)+J1(n))))}HM.exports=VLr});var XM=s((qve,DM)=>{"use strict";var zM=BM(),ULr=CM(),HLr=VM(),WLr=WM();function zLr(r,e,t,i){var n,a;return t===i&&t>1.5?ULr(r,e,t):t>1&&i>1?HLr(r,e,t,i):t<1&&i<1?WLr(r,t,i):(n=zM(r,e,t),a=zM(r,e,i),n/(n+a))}DM.exports=zLr});var Q1=s((yve,tB)=>{"use strict";var ce=w(),h0=P(),JM=M(),xM=_(),YM=cr().isPrimitive,ZM=L(),wi=O(),$M=T(),DLr=C(),QM=it().factory,q0=X().factory,KM=E(),Y1=Qe(),Z1=pr(),$1=re(),rB=Bn(),XLr=B(),le=y(),JLr=LM(),eB=XM();function xLr(){var r,e,t,i,n,a,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=q0(n);else if(arguments.length===1){if(n=arguments[0],!xM(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(wi(n,"copy")&&!YM(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(wi(n,"prng")){if(!ZM(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(wi(n,"state")&&!$1(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=rB({},n),n.copy===!1?o=!1:n.state&&(n.state=Y1(n.state.length,n.state,1,new Z1(n.state.length),1)),n.copy=!1,a=q0(n)}}else{if(t=arguments[0],i=arguments[1],f=JLr(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!xM(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(wi(n,"copy")&&!YM(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(wi(n,"prng")){if(!ZM(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(wi(n,"state")&&!$1(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=rB({},n),n.copy===!1?o=!1:n.state&&(n.state=Y1(n.state.length,n.state,1,new Z1(n.state.length),1)),n.copy=!1,a=q0(n)}}else n={copy:!1},a=q0(n)}return n&&n.prng?e=QM({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=QM({state:r,copy:!1})),t===void 0?u=q:u=g,ce(u,"NAME","beta"),n&&n.prng?(ce(u,"seed",null),ce(u,"seedLength",null),JM(u,"state",$M(null),DLr),ce(u,"stateLength",null),ce(u,"byteLength",null),ce(u,"toJSON",$M(null)),ce(u,"PRNG",a)):(h0(u,"seed",v),h0(u,"seedLength",c),JM(u,"state",m,h),h0(u,"stateLength",l),h0(u,"byteLength",p),ce(u,"toJSON",d),ce(u,"PRNG",a),a=a.normalized),u;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function h(N){if(!$1(N))throw new TypeError(le("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=Y1(N.length,N,1,new Z1(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=XLr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return eB(a,e,t,i)}function q(N,A){return KM(N)||KM(A)||N<=0||A<=0?NaN:eB(a,e,N,A)}}tB.exports=xLr});var nB=s((bve,iB)=>{"use strict";var YLr=Q1(),ZLr=YLr();iB.exports=ZLr});var uB=s((wve,sB)=>{"use strict";var $Lr=w(),aB=nB(),QLr=Q1();$Lr(aB,"factory",QLr);sB.exports=aB});var cB=s((Eve,fB)=>{"use strict";var oB=D().isPrimitive,vB=y();function KLr(r,e){return oB(r)?oB(e)?null:new TypeError(vB("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(vB("invalid argument. First argument must be a positive number. Value: `%s`.",r))}fB.exports=KLr});var gB=s((Nve,pB)=>{"use strict";var lB=R();function rPr(r,e,t,i,n){var a,u,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+lB(l)),c=r(),(c<o||lB(c)<f)&&(a=!1)}return 1/t*i*l}pB.exports=rPr});var i3=s((Ave,AB)=>{"use strict";var pe=w(),y0=P(),mB=M(),dB=_(),K1=re(),hB=cr().isPrimitive,qB=L(),Ei=O(),yB=T(),ePr=C(),bB=it().factory,b0=X().factory,wB=E(),r3=V(),EB=W(),e3=Qe(),t3=pr(),tPr=B(),NB=Bn(),ge=y(),iPr=cB(),w0=gB(),E0=1/3;function nPr(){var r,e,t,i,n,a,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=b0(n);else if(arguments.length===1){if(n=arguments[0],!dB(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ei(n,"copy")&&!hB(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ei(n,"prng")){if(!qB(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ei(n,"state")&&!K1(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=NB({},n),n.copy===!1?o=!1:n.state&&(n.state=e3(n.state.length,n.state,1,new t3(n.state.length),1)),n.copy=!1,a=b0(n)}}else{if(e=arguments[0],i=arguments[1],f=iPr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!dB(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ei(n,"copy")&&!hB(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ei(n,"prng")){if(!qB(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ei(n,"state")&&!K1(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=NB({},n),n.copy===!1?o=!1:n.state&&(n.state=e3(n.state.length,n.state,1,new t3(n.state.length),1)),n.copy=!1,a=b0(n)}}else n={copy:!1},a=b0(n)}return n&&n.prng?t=bB({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=bB({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-E0):(u=A,c=e+1-E0),v=1/r3(9*c)),pe(u,"NAME","gamma"),n&&n.prng?(pe(u,"seed",null),pe(u,"seedLength",null),mB(u,"state",yB(null),ePr),pe(u,"stateLength",null),pe(u,"byteLength",null),pe(u,"toJSON",yB(null)),pe(u,"PRNG",a)):(y0(u,"seed",l),y0(u,"seedLength",p),mB(u,"state",d,g),y0(u,"stateLength",m),y0(u,"byteLength",h),pe(u,"toJSON",q),pe(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function g(S){if(!K1(S))throw new TypeError(ge("invalid argument. Must provide a Uint32Array. Value: `%s`.",S));o&&(S=e3(S.length,S,1,new t3(S.length),1)),a.state=S}function q(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=tPr(a.state),e===void 0?S.params=[]:S.params=[e,i],S}function N(){return w0(a,t,i,c,v)}function A(){return w0(a,t,i,c,v)*EB(a(),1/e)}function F(S,z){var Q,U;return wB(S)||wB(z)||S<=0||z<=0?NaN:S<1?(U=S+1-E0,Q=1/r3(9*U),w0(a,t,z,U,Q)*EB(a(),1/S)):(U=S-E0,Q=1/r3(9*U),w0(a,t,z,U,Q))}}AB.exports=nPr});var SB=s((Ove,OB)=>{"use strict";var aPr=i3(),sPr=aPr();OB.exports=sPr});var Ni=s((Sve,IB)=>{"use strict";var uPr=w(),TB=SB(),oPr=i3();uPr(TB,"factory",oPr);IB.exports=TB});var RB=s((Tve,PB)=>{"use strict";var _B=D().isPrimitive,LB=y();function vPr(r,e){return _B(r)?_B(e)?null:new TypeError(LB("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(LB("invalid argument. First argument must be a positive number. Value: `%s`.",r))}PB.exports=vPr});var MB=s((Ive,FB)=>{"use strict";function fPr(r,e,t){return r(e,1)/r(t,1)}FB.exports=fPr});var n3=s((_ve,UB)=>{"use strict";var nt=w(),N0=P(),BB=M(),kB=_(),jB=T(),cPr=C(),A0=Ni().factory,CB=E(),lPr=B(),GB=y(),pPr=RB(),VB=MB();function gPr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=A0();else if(arguments.length===1){if(i=arguments[0],!kB(i))throw new TypeError(GB("invalid argument. Options argument must be an object. Value: `%s`.",i));r=A0(i)}else{if(e=arguments[0],t=arguments[1],u=pPr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!kB(i))throw new TypeError(GB("invalid argument. Options argument must be an object. Value: `%s`.",i));r=A0(i)}else r=A0()}return e===void 0?a=d:a=h,n=r.PRNG,nt(a,"NAME","betaprime"),i&&i.prng?(nt(a,"seed",null),nt(a,"seedLength",null),BB(a,"state",jB(null),cPr),nt(a,"stateLength",null),nt(a,"byteLength",null),nt(a,"toJSON",jB(null))):(N0(a,"seed",o),N0(a,"seedLength",f),BB(a,"state",l,p),N0(a,"stateLength",v),N0(a,"byteLength",c),nt(a,"toJSON",m)),nt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=lPr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return VB(r,e,t)}function d(g,q){return CB(g)||CB(q)||g<=0||q<=0?NaN:VB(r,g,q)}}UB.exports=gPr});var WB=s((Lve,HB)=>{"use strict";var mPr=n3(),dPr=mPr();HB.exports=dPr});var XB=s((Pve,DB)=>{"use strict";var hPr=w(),zB=WB(),qPr=n3();hPr(zB,"factory",qPr);DB.exports=zB});var xB=s((Rve,JB)=>{"use strict";var yPr=x();function bPr(r){return yPr(r)===r&&r>0}JB.exports=bPr});var a3=s((Fve,YB)=>{"use strict";var wPr=xB();YB.exports=wPr});var $B=s((Mve,ZB)=>{"use strict";function EPr(r){return r>=0&&r<=1}ZB.exports=EPr});var KB=s((Bve,QB)=>{"use strict";var NPr=$B();QB.exports=NPr});var tk=s((kve,ek)=>{"use strict";var APr=ee().isPrimitive,OPr=nn().isPrimitive,rk=y();function SPr(r,e){return APr(r)?OPr(e)?null:new TypeError(rk("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(rk("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}ek.exports=SPr});var nk=s((jve,ik)=>{"use strict";function TPr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}ik.exports=TPr});var sk=s((Cve,ak)=>{"use strict";var IPr=E();function _Pr(r){return r===0||IPr(r)?r:r<0?-1:1}ak.exports=_Pr});var O0=s((Gve,uk)=>{"use strict";var LPr=sk();uk.exports=LPr});var vk=s((Vve,ok)=>{"use strict";var PPr=W(),RPr=1/12,FPr=1/360,MPr=1/1260;function BPr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=PPr(r,2),(RPr-(FPr-MPr/e)/e)/r}}ok.exports=BPr});var ck=s((Uve,fk)=>{"use strict";var s3=x(),kPr=O0(),jPr=V(),u3=J(),S0=R(),T0=vk(),CPr=1/6;function GPr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,F,S,z,Q,U,Tr,Ir,ur,wt;for(z=s3((e+1)*t),v=e-z+1,Q=1-t,U=t/Q,c=(e+1)*U,u=e*t*Q,a=jPr(u),g=1.15+2.53*a,d=-.0873+.0248*g+.01*t,q=e*t+.5,i=(2.83+5.1/g)*a,h=.92-4.2/g,n=.86*h,A=(z+.5)*S0((z+1)/(U*v)),A+=T0(z)+T0(e-z);;){if(ur=r(),ur<=n)return Ir=ur/h-.43,U=Ir*(2*d/(.5-u3(Ir))+g)+q,s3(U);if(ur>=h?Ir=r()-.5:(Ir=ur/h-.93,Ir=kPr(Ir)*.5-Ir,ur=h*r()),l=.5-u3(Ir),S=s3(Ir*(2*d/l+g)+q),!(S<0||S>e))if(ur=ur*i/(d/(l*l)+g),p=u3(S-z),p>15){if(ur=S0(ur),o=p/u,f=(p/3+.625)*p,f+=CPr,f/=u,o*=f+.5,Tr=-(p*p)/(2*u),ur<Tr-o||ur<=Tr+o&&(m=e-S+1,wt=A+(e+1)*S0(v/m),wt+=(S+.5)*S0(m*U/(S+1)),wt+=-(T0(S)+T0(e-S)),ur<=wt))return S}else{if(N=1,z<S)for(F=z;F<=S;F++)N*=c/F-U;else if(z>S)for(F=S;F<=z;F++)ur*=c/F-U;if(ur<=N)return S}}}fk.exports=GPr});var gk=s((Hve,pk)=>{"use strict";var VPr=nk(),UPr=ck();function lk(r,e,t){return t>.5?e-lk(r,e,1-t):e*t<10?VPr(r,e,t):UPr(r,e,t)}pk.exports=lk});var o3=s((Wve,Ek)=>{"use strict";var me=w(),I0=P(),mk=M(),dk=_(),hk=L(),qk=O(),yk=T(),HPr=C(),bk=E(),WPr=a3(),zPr=KB(),_0=X().factory,DPr=B(),L0=y(),XPr=tk(),wk=gk();function JPr(){var r,e,t,i,n,a;if(arguments.length===0)e=_0();else if(arguments.length===1){if(r=arguments[0],!dk(r))throw new TypeError(L0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(qk(r,"prng")){if(!hk(r.prng))throw new TypeError(L0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=_0(r)}else{if(n=arguments[0],a=arguments[1],i=XPr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!dk(r))throw new TypeError(L0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(qk(r,"prng")){if(!hk(r.prng))throw new TypeError(L0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=_0(r)}else e=_0()}return n===void 0?t=h:t=m,me(t,"NAME","binomial"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),mk(t,"state",yk(null),HPr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",yk(null)),me(t,"PRNG",e)):(I0(t,"seed",u),I0(t,"seedLength",o),mk(t,"state",c,l),I0(t,"stateLength",f),I0(t,"byteLength",v),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=DPr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return wk(e,n,a)}function h(d,g){return bk(d)||bk(g)||!WPr(d)||!zPr(g)?NaN:wk(e,d,g)}}Ek.exports=JPr});var Ak=s((zve,Nk)=>{"use strict";var xPr=o3(),YPr=xPr();Nk.exports=YPr});var Tk=s((Dve,Sk)=>{"use strict";var ZPr=w(),Ok=Ak(),$Pr=o3();ZPr(Ok,"factory",$Pr);Sk.exports=Ok});var _k=s((Xve,Ik)=>{"use strict";var QPr=V(),KPr=R(),rRr=Gt(),eRr=Ct(),tRr=Ze();function iRr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=QPr(-2*KPr(n)),o=tRr*a,t=u*eRr(o),e=!1,u*rRr(o)}return e=!0,t}}Ik.exports=iRr});var Pk=s((Jve,Lk)=>{"use strict";var nRr=V(),aRr=R(),sRr=Ct(),uRr=Fr(),oRr=sRr(uRr);function vRr(r){var e=nRr(-2*aRr(r));return e*oRr}Lk.exports=vRr});var Fk=s((xve,Rk)=>{"use strict";var fRr=V(),cRr=R(),lRr=Ct(),pRr=Ze();function gRr(r){var e=fRr(-2*cRr(r)),t=pRr*r;return e*lRr(t)}Rk.exports=gRr});var v3=s((Yve,jk)=>{"use strict";var Cr=w(),P0=P(),Mk=M(),mRr=_(),dRr=L(),hRr=cr().isPrimitive,kn=O(),qRr=re(),Bk=X().factory,kk=T(),yRr=C(),bRr=B(),jn=y(),wRr=_k(),ERr=Pk(),NRr=Fk();function ARr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!mRr(r))throw new TypeError(jn("invalid argument. Must provide an object. Value: `%s`.",r));if(kn(r,"copy")&&(n.copy=r.copy,!hRr(r.copy)))throw new TypeError(jn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(kn(r,"prng")){if(!dRr(r.prng))throw new TypeError(jn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(kn(r,"state")){if(n.state=r.state,!qRr(r.state))throw new TypeError(jn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(kn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(jn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=Bk(n),e=i.normalized):n.seed=null:(i=Bk(n),e=i.normalized),t=wRr(e),Cr(t,"NAME","box-muller"),n.seed===null?(Cr(t,"seed",null),Cr(t,"seedLength",null)):(P0(t,"seed",a),P0(t,"seedLength",u)),r&&r.prng?(Mk(t,"state",kk(null),yRr),Cr(t,"stateLength",null),Cr(t,"byteLength",null),Cr(t,"toJSON",kk(null))):(Mk(t,"state",v,c),P0(t,"stateLength",o),P0(t,"byteLength",f),Cr(t,"toJSON",l)),Cr(t,"PRNG",e),kn(e,"MIN")?(Cr(t,"MIN",ERr(e.MIN)),Cr(t,"MAX",NRr(e.MIN))):(Cr(t,"MIN",null),Cr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=bRr(i.state),p.params=[],p}}jk.exports=ARr});var Gk=s((Zve,Ck)=>{"use strict";var ORr=v3(),SRr=ORr();Ck.exports=SRr});var Hk=s(($ve,Uk)=>{"use strict";var TRr=w(),Vk=Gk(),IRr=v3();TRr(Vk,"factory",IRr);Uk.exports=Vk});var Dk=s((Qve,zk)=>{"use strict";var _Rr=j().isPrimitive,LRr=D().isPrimitive,Wk=y(),PRr=or();function RRr(r,e){return!_Rr(r)||PRr(r)?new TypeError(Wk("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):LRr(e)?null:new TypeError(Wk("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}zk.exports=RRr});var Jk=s((Kve,Xk)=>{"use strict";function FRr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}Xk.exports=FRr});var Yk=s((rfe,xk)=>{"use strict";function MRr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}xk.exports=MRr});var Qk=s((efe,$k)=>{"use strict";var BRr=tr(),Zk=ie(),kRr=Jk(),jRr=Yk(),CRr=.7853981633974483,GRr=3061616997868383e-32,VRr=.3333333333333341,URr=2147483647;function HRr(r,e,t){var i,n,a,u,o,f,v,c,l;return i=BRr(r),n=i&URr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=CRr-r,c=GRr-e,r=l+c,e=0),l=r*r,c=l*l,u=kRr(c),v=l*jRr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=VRr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=Zk(c,0),v=u-(l-r),a=-1/c,f=Zk(a,0),o=1+f*l,f+a*(o+f*v))}$k.exports=HRr});var rj=s((tfe,Kk)=>{"use strict";var WRr=Qk();Kk.exports=WRr});var ij=s((ife,tj)=>{"use strict";var zRr=tr(),ej=rj(),DRr=wn(),f3=[0,0],XRr=2147483647,JRr=1072243195,xRr=2146435072,YRr=1044381696;function ZRr(r){var e,t;return e=zRr(r),e&=XRr,e<=JRr?e<YRr?r:ej(r,0,1):e>=xRr?NaN:(t=DRr(r,f3),ej(f3[0],f3[1],1-((t&1)<<1)))}tj.exports=ZRr});var c3=s((nfe,nj)=>{"use strict";var $Rr=ij();nj.exports=$Rr});var sj=s((afe,aj)=>{"use strict";var QRr=c3(),KRr=Fr();function rFr(r,e,t){return e+t*QRr(KRr*(r()-.5))}aj.exports=rFr});var l3=s((sfe,gj)=>{"use strict";var at=w(),R0=P(),uj=M(),oj=_(),vj=L(),fj=O(),cj=T(),eFr=C(),lj=E(),Ai=it().factory,tFr=B(),F0=y(),iFr=Dk(),pj=sj();function nFr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ai();else if(arguments.length===1){if(t=arguments[0],!oj(t))throw new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(fj(t,"prng")){if(!vj(t.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ai({prng:t.prng})}else e=Ai(t)}else{if(u=arguments[0],r=arguments[1],a=iFr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!oj(t))throw new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(fj(t,"prng")){if(!vj(t.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ai({prng:t.prng})}else e=Ai(t)}else e=Ai()}return u===void 0?n=d:n=h,i=e.PRNG,at(n,"NAME","cauchy"),t&&t.prng?(at(n,"seed",null),at(n,"seedLength",null),uj(n,"state",cj(null),eFr),at(n,"stateLength",null),at(n,"byteLength",null),at(n,"toJSON",cj(null))):(R0(n,"seed",o),R0(n,"seedLength",f),uj(n,"state",l,p),R0(n,"stateLength",v),R0(n,"byteLength",c),at(n,"toJSON",m)),at(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=tFr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return pj(e,u,r)}function d(g,q){return lj(g)||lj(q)||q<=0?NaN:pj(e,g,q)}}gj.exports=nFr});var dj=s((ufe,mj)=>{"use strict";var aFr=l3(),sFr=aFr();mj.exports=sFr});var yj=s((ofe,qj)=>{"use strict";var uFr=w(),hj=dj(),oFr=l3();uFr(hj,"factory",oFr);qj.exports=hj});var p3=s((vfe,Oj)=>{"use strict";var st=w(),M0=P(),bj=M(),vFr=D().isPrimitive,wj=_(),Ej=L(),Nj=O(),Aj=T(),fFr=C(),cFr=E(),Oi=Ni().factory,lFr=B(),B0=y();function pFr(){var r,e,t,i,n;if(arguments.length===0)r=Oi();else if(arguments.length===1&&wj(arguments[0]))if(t=arguments[0],Nj(t,"prng")){if(!Ej(t.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Oi({prng:t.prng})}else r=Oi(t);else{if(n=arguments[0],!vFr(n))throw new TypeError(B0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!wj(t))throw new TypeError(B0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Nj(t,"prng")){if(!Ej(t.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Oi(n/2,.5,{prng:t.prng})}else r=Oi(n/2,.5,t)}else r=Oi(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,st(i,"NAME","chisquare"),t&&t.prng?(st(i,"seed",null),st(i,"seedLength",null),bj(i,"state",Aj(null),fFr),st(i,"stateLength",null),st(i,"byteLength",null),st(i,"toJSON",Aj(null))):(M0(i,"seed",a),M0(i,"seedLength",u),bj(i,"state",v,c),M0(i,"stateLength",o),M0(i,"byteLength",f),st(i,"toJSON",l)),st(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=lFr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function m(h){return cFr(h)||h<=0?NaN:r(h/2,.5)}}Oj.exports=pFr});var Tj=s((ffe,Sj)=>{"use strict";var gFr=p3(),mFr=gFr();Sj.exports=mFr});var Cn=s((cfe,_j)=>{"use strict";var dFr=w(),Ij=Tj(),hFr=p3();dFr(Ij,"factory",hFr);_j.exports=Ij});var g3=s((lfe,kj)=>{"use strict";var ut=w(),k0=P(),Lj=M(),qFr=D().isPrimitive,Pj=_(),Rj=L(),Fj=O(),Mj=T(),yFr=C(),bFr=E(),Si=Cn().factory,wFr=B(),Bj=V(),j0=y();function EFr(){var r,e,t,i,n;if(arguments.length===0)r=Si();else if(arguments.length===1&&Pj(arguments[0]))if(t=arguments[0],Fj(t,"prng")){if(!Rj(t.prng))throw new TypeError(j0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si({prng:t.prng})}else r=Si(t);else{if(n=arguments[0],!qFr(n))throw new TypeError(j0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!Pj(t))throw new TypeError(j0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Fj(t,"prng")){if(!Rj(t.prng))throw new TypeError(j0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si(n,{prng:t.prng})}else r=Si(n,t)}else r=Si(n)}return n===void 0?i=m:i=p,e=r.PRNG,ut(i,"NAME","chi"),t&&t.prng?(ut(i,"seed",null),ut(i,"seedLength",null),Lj(i,"state",Mj(null),yFr),ut(i,"stateLength",null),ut(i,"byteLength",null),ut(i,"toJSON",Mj(null))):(k0(i,"seed",a),k0(i,"seedLength",u),Lj(i,"state",v,c),k0(i,"stateLength",o),k0(i,"byteLength",f),ut(i,"toJSON",l)),ut(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=wFr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return Bj(r())}function m(h){return bFr(h)||h<=0?NaN:Bj(r(h))}}kj.exports=EFr});var Cj=s((pfe,jj)=>{"use strict";var NFr=g3(),AFr=NFr();jj.exports=AFr});var Uj=s((gfe,Vj)=>{"use strict";var OFr=w(),Gj=Cj(),SFr=g3();OFr(Gj,"factory",SFr);Vj.exports=Gj});var zj=s((mfe,Wj)=>{"use strict";var TFr=j().isPrimitive,IFr=D().isPrimitive,Hj=y(),_Fr=or();function LFr(r,e){return!TFr(r)||_Fr(r)?new TypeError(Hj("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):IFr(e)?null:new TypeError(Hj("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Wj.exports=LFr});var Xj=s((dfe,Dj)=>{"use strict";var m3=E(),PFr=Ln(),RFr=Fr();function FFr(r,e,t){var i;return m3(r)||m3(e)||m3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+PFr(i)/RFr)/2)}Dj.exports=FFr});var Yj=s((hfe,xj)=>{"use strict";var Jj=E();function MFr(r,e){return Jj(r)||Jj(e)?NaN:r<e?0:1}xj.exports=MFr});var Qj=s((qfe,$j)=>{"use strict";var BFr=T(),Zj=E();function kFr(r){if(Zj(r))return BFr(NaN);return e;function e(t){return Zj(t)?NaN:t<r?0:1}}$j.exports=kFr});var C0=s((yfe,rC)=>{"use strict";var jFr=w(),Kj=Yj(),CFr=Qj();jFr(Kj,"factory",CFr);rC.exports=Kj});var tC=s((bfe,eC)=>{"use strict";var GFr=T(),VFr=C0().factory,d3=E(),UFr=Ln(),HFr=Fr();function WFr(r,e){if(d3(r)||d3(e)||e<0)return GFr(NaN);if(e===0)return VFr(r);return t;function t(i){var n;return d3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+UFr(n)/HFr)/2)}}eC.exports=WFr});var aC=s((wfe,nC)=>{"use strict";var zFr=w(),iC=Xj(),DFr=tC();zFr(iC,"factory",DFr);nC.exports=iC});var h3=s((Efe,sC)=>{"use strict";var XFr=aC(),JFr=1e4,xFr=1e-12;function YFr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<JFr;){if(u=(i+n)/2,n-i<xFr)return u;a=XFr(u,e,t),r>a?i=u:n=u,o+=1}return u}sC.exports=YFr});var oC=s((Nfe,uC)=>{"use strict";var q3=E(),ZFr=h3();function $Fr(r,e,t){return q3(e)||q3(t)||q3(r)||t<0||r<0||r>1?NaN:t===0?e:ZFr(r,e,t)}uC.exports=$Fr});var fC=s((Afe,vC)=>{"use strict";var QFr=E();function KFr(r,e){return QFr(r)||r<0||r>1?NaN:e}vC.exports=KFr});var pC=s((Ofe,lC)=>{"use strict";var rMr=T(),cC=E();function eMr(r){if(cC(r))return rMr(NaN);return e;function e(t){return cC(t)||t<0||t>1?NaN:r}}lC.exports=eMr});var y3=s((Sfe,mC)=>{"use strict";var tMr=w(),gC=fC(),iMr=pC();tMr(gC,"factory",iMr);mC.exports=gC});var hC=s((Tfe,dC)=>{"use strict";var nMr=T(),aMr=y3().factory,b3=E(),sMr=h3();function uMr(r,e){if(b3(r)||b3(e)||e<0)return nMr(NaN);if(e===0)return aMr(r);return t;function t(i){return b3(i)||i<0||i>1?NaN:sMr(i,r,e)}}dC.exports=uMr});var bC=s((Ife,yC)=>{"use strict";var oMr=w(),qC=oC(),vMr=hC();oMr(qC,"factory",vMr);yC.exports=qC});var EC=s((_fe,wC)=>{"use strict";var fMr=bC();function cMr(r,e,t){return fMr(r(),e,t)}wC.exports=cMr});var w3=s((Lfe,LC)=>{"use strict";var de=w(),G0=P(),NC=M(),AC=_(),OC=L(),SC=O(),TC=T(),lMr=C(),V0=X().factory,IC=E(),pMr=B(),U0=y(),gMr=zj(),_C=EC();function mMr(){var r,e,t,i,n,a;if(arguments.length===0)e=V0();else if(arguments.length===1){if(r=arguments[0],!AC(r))throw new TypeError(U0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SC(r,"prng")){if(!OC(r.prng))throw new TypeError(U0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=V0(r)}else{if(n=arguments[0],a=arguments[1],i=gMr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!AC(r))throw new TypeError(U0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SC(r,"prng")){if(!OC(r.prng))throw new TypeError(U0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=V0(r)}else e=V0()}return n===void 0?t=h:t=m,de(t,"NAME","cosine"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),NC(t,"state",TC(null),lMr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",TC(null)),de(t,"PRNG",e)):(G0(t,"seed",u),G0(t,"seedLength",o),NC(t,"state",c,l),G0(t,"stateLength",f),G0(t,"byteLength",v),de(t,"toJSON",p),de(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=pMr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return _C(e,n,a)}function h(d,g){return IC(d)||IC(g)||g<=0?NaN:_C(e,d,g)}}LC.exports=mMr});var RC=s((Pfe,PC)=>{"use strict";var dMr=w3(),hMr=dMr();PC.exports=hMr});var BC=s((Rfe,MC)=>{"use strict";var qMr=w(),FC=RC(),yMr=w3();qMr(FC,"factory",yMr);MC.exports=FC});var GC=s((Ffe,CC)=>{"use strict";var kC=Ur().isPrimitive,E3=y(),jC=or();function bMr(r,e){return!kC(r)||jC(r)?new TypeError(E3("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!kC(e)||jC(e)?new TypeError(E3("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(E3("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}CC.exports=bMr});var HC=s((Mfe,UC)=>{"use strict";var N3=di(),Ti=x();function VC(r,e,t){var i,n,a,u,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(u=0;;){for(a===N3?(u=Ti(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Ti((a+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=VC(r,0,Ti(a/f)),!(l>N3/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===N3?(o=Ti(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Ti((n+1)/(a+1));;)if(i=r()-v,i=Ti(i/o),i<=a)return i+e}UC.exports=VC});var A3=s((Bfe,ZC)=>{"use strict";var he=w(),H0=P(),WC=M(),zC=_(),DC=L(),XC=O(),JC=T(),wMr=C(),W0=X().factory,xC=E(),Ii=_r(),EMr=B(),ot=y(),NMr=GC(),YC=HC();function AMr(){var r,e,t,i,n,a;if(arguments.length===0)e=W0();else if(arguments.length===1){if(r=arguments[0],!zC(r))throw new TypeError(ot("invalid argument. Options argument must be an object. Value: `%s`.",r));if(XC(r,"prng")){if(!DC(r.prng))throw new TypeError(ot("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ii(e.MIN))throw new TypeError(ot("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ii(e.MAX))throw new TypeError(ot("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=W0(r)}else{if(n=arguments[0],a=arguments[1],i=NMr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!zC(r))throw new TypeError(ot("invalid argument. Options argument must be an object. Value: `%s`.",r));if(XC(r,"prng")){if(!DC(r.prng))throw new TypeError(ot("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ii(e.MIN))throw new TypeError(ot("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ii(e.MAX))throw new TypeError(ot("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=W0(r)}else e=W0()}return n===void 0?t=h:t=m,he(t,"NAME","discrete-uniform"),r&&r.prng?(he(t,"seed",null),he(t,"seedLength",null),WC(t,"state",JC(null),wMr),he(t,"stateLength",null),he(t,"byteLength",null),he(t,"toJSON",JC(null)),he(t,"PRNG",e)):(H0(t,"seed",u),H0(t,"seedLength",o),WC(t,"state",c,l),H0(t,"stateLength",f),H0(t,"byteLength",v),he(t,"toJSON",p),he(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=EMr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return YC(e,n,a)}function h(d,g){return xC(d)||xC(g)||!Ii(d)||!Ii(g)||d>g?NaN:YC(e,d,g)}}ZC.exports=AMr});var QC=s((kfe,$C)=>{"use strict";var OMr=A3(),SMr=OMr();$C.exports=SMr});var eG=s((jfe,rG)=>{"use strict";var TMr=w(),KC=QC(),IMr=A3();TMr(KC,"factory",IMr);rG.exports=KC});var nG=s((Cfe,iG)=>{"use strict";var _Mr=D().isPrimitive,LMr=ee().isPrimitive,tG=y();function PMr(r,e){return LMr(r)?_Mr(e)?null:new TypeError(tG("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(tG("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}iG.exports=PMr});var sG=s((Gfe,aG)=>{"use strict";var RMr=R();function FMr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*RMr(i)}aG.exports=FMr});var O3=s((Vfe,gG)=>{"use strict";var qe=w(),z0=P(),uG=M(),oG=_(),vG=L(),fG=O(),cG=T(),MMr=C(),D0=X().factory,lG=E(),BMr=a3(),kMr=B(),X0=y(),jMr=nG(),pG=sG();function CMr(){var r,e,t,i,n,a;if(arguments.length===0)e=D0();else if(arguments.length===1){if(t=arguments[0],!oG(t))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(fG(t,"prng")){if(!vG(t.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=D0(t)}else{if(a=arguments[0],r=arguments[1],n=jMr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!oG(t))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(fG(t,"prng")){if(!vG(t.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=D0(t)}else e=D0()}return a===void 0?i=h:i=m,qe(i,"NAME","erlang"),t&&t.prng?(qe(i,"seed",null),qe(i,"seedLength",null),uG(i,"state",cG(null),MMr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",cG(null)),qe(i,"PRNG",e)):(z0(i,"seed",u),z0(i,"seedLength",o),uG(i,"state",c,l),z0(i,"stateLength",f),z0(i,"byteLength",v),qe(i,"toJSON",p),qe(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=kMr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return pG(e,a,r)}function h(d,g){return lG(d)||lG(g)||!BMr(d)||g<=0?NaN:pG(e,d,g)}}gG.exports=CMr});var dG=s((Ufe,mG)=>{"use strict";var GMr=O3(),VMr=GMr();mG.exports=VMr});var yG=s((Hfe,qG)=>{"use strict";var UMr=w(),hG=dG(),HMr=O3();UMr(hG,"factory",HMr);qG.exports=hG});var wG=s((Wfe,bG)=>{"use strict";var WMr=R();function zMr(r,e){return-WMr(1-r())/e}bG.exports=zMr});var S3=s((zfe,IG)=>{"use strict";var ye=w(),J0=P(),EG=M(),DMr=D().isPrimitive,NG=_(),AG=L(),OG=O(),SG=T(),XMr=C(),x0=X().factory,JMr=E(),xMr=B(),Y0=y(),TG=wG();function YMr(){var r,e,t,i;if(arguments.length===0)t=x0();else if(arguments.length===1&&NG(arguments[0]))if(e=arguments[0],OG(e,"prng")){if(!AG(e.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=x0(e);else{if(r=arguments[0],!DMr(r))throw new TypeError(Y0("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!NG(e))throw new TypeError(Y0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(OG(e,"prng")){if(!AG(e.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=x0(e)}else t=x0()}return r===void 0?i=p:i=l,ye(i,"NAME","exponential"),e&&e.prng?(ye(i,"seed",null),ye(i,"seedLength",null),EG(i,"state",SG(null),XMr),ye(i,"stateLength",null),ye(i,"byteLength",null),ye(i,"toJSON",SG(null)),ye(i,"PRNG",t)):(J0(i,"seed",n),J0(i,"seedLength",a),EG(i,"state",f,v),J0(i,"stateLength",u),J0(i,"byteLength",o),ye(i,"toJSON",c),ye(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=xMr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return TG(t,r)}function p(m){return JMr(m)||m<=0?NaN:TG(t,m)}}IG.exports=YMr});var LG=s((Dfe,_G)=>{"use strict";var ZMr=S3(),$Mr=ZMr();_G.exports=$Mr});var FG=s((Xfe,RG)=>{"use strict";var QMr=w(),PG=LG(),KMr=S3();QMr(PG,"factory",KMr);RG.exports=PG});var jG=s((Jfe,kG)=>{"use strict";var MG=D().isPrimitive,BG=y();function rBr(r,e){return MG(r)?MG(e)?null:new TypeError(BG("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(BG("invalid argument. First argument must be a positive number. Value: `%s`.",r))}kG.exports=rBr});var GG=s((xfe,CG)=>{"use strict";function eBr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}CG.exports=eBr});var T3=s((Yfe,JG)=>{"use strict";var vt=w(),Z0=P(),VG=M(),UG=_(),HG=L(),WG=O(),zG=T(),tBr=C(),_i=Cn().factory,DG=E(),iBr=B(),$0=y(),nBr=jG(),XG=GG();function aBr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=_i();else if(arguments.length===1){if(e=arguments[0],!UG(e))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(WG(e,"prng")){if(!HG(e.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=_i({prng:e.prng})}else r=_i(e)}else{if(a=arguments[0],u=arguments[1],n=nBr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!UG(e))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(WG(e,"prng")){if(!HG(e.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=_i({prng:e.prng})}else r=_i(e)}else r=_i()}return a===void 0?i=d:i=h,t=r.PRNG,vt(i,"NAME","f"),e&&e.prng?(vt(i,"seed",null),vt(i,"seedLength",null),VG(i,"state",zG(null),tBr),vt(i,"stateLength",null),vt(i,"byteLength",null),vt(i,"toJSON",zG(null))):(Z0(i,"seed",o),Z0(i,"seedLength",f),VG(i,"state",l,p),Z0(i,"stateLength",v),Z0(i,"byteLength",c),vt(i,"toJSON",m)),vt(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=iBr(t.state),a===void 0?g.params=[]:g.params=[a,u],g}function h(){return XG(r,a,u)}function d(g,q){return DG(g)||DG(q)||g<=0||q<=0?NaN:XG(r,g,q)}}JG.exports=aBr});var YG=s((Zfe,xG)=>{"use strict";var sBr=T3(),uBr=sBr();xG.exports=uBr});var QG=s(($fe,$G)=>{"use strict";var oBr=w(),ZG=YG(),vBr=T3();oBr(ZG,"factory",vBr);$G.exports=ZG});var eV=s((Qfe,rV)=>{"use strict";var KG=D().isPrimitive,fBr=j().isPrimitive,I3=or(),_3=y();function cBr(r,e,t){return!KG(r)||I3(r)?new TypeError(_3("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!KG(e)||I3(e)?new TypeError(_3("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!fBr(t)||I3(t)?new TypeError(_3("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}rV.exports=cBr});var iV=s((Kfe,tV)=>{"use strict";var lBr=W(),pBr=R();function gBr(r,e,t,i){return i+t*lBr(-pBr(r()),-1/e)}tV.exports=gBr});var P3=s((rce,fV)=>{"use strict";var be=w(),Q0=P(),nV=M(),aV=_(),sV=L(),uV=O(),oV=T(),mBr=C(),K0=X().factory,L3=E(),dBr=B(),rs=y(),hBr=eV(),vV=iV();function qBr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=K0();else if(arguments.length===1){if(e=arguments[0],!aV(e))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(uV(e,"prng")){if(!sV(e.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=K0(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=hBr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!aV(e))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(uV(e,"prng")){if(!sV(e.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=K0(e)}else t=K0()}return r===void 0?i=d:i=h,be(i,"NAME","frechet"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),nV(i,"state",oV(null),mBr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",oV(null)),be(i,"PRNG",t)):(Q0(i,"seed",o),Q0(i,"seedLength",f),nV(i,"state",l,p),Q0(i,"stateLength",v),Q0(i,"byteLength",c),be(i,"toJSON",m),be(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=dBr(t.state),r===void 0?g.params=[]:g.params=[r,a,u],g}function h(){return vV(t,r,a,u)}function d(g,q,N){return L3(g)||L3(q)||L3(N)||g<=0||q<=0?NaN:vV(t,g,q,N)}}fV.exports=qBr});var lV=s((ece,cV)=>{"use strict";var yBr=P3(),bBr=yBr();cV.exports=bBr});var mV=s((tce,gV)=>{"use strict";var wBr=w(),pV=lV(),EBr=P3();wBr(pV,"factory",EBr);gV.exports=pV});var qV=s((ice,hV)=>{"use strict";var NBr=x(),dV=R();function ABr(r,e){var t=r();return t===0&&(t=r()),NBr(dV(t)/dV(1-e))}hV.exports=ABr});var R3=s((nce,OV)=>{"use strict";var we=w(),es=P(),yV=M(),bV=_(),OBr=nn().isPrimitive,wV=L(),EV=O(),NV=T(),SBr=C(),ts=X().factory,TBr=E(),IBr=B(),is=y(),AV=qV();function _Br(){var r,e,t,i;if(arguments.length===0)e=ts();else if(arguments.length===1&&bV(arguments[0]))if(r=arguments[0],EV(r,"prng")){if(!wV(r.prng))throw new TypeError(is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ts(r);else{if(i=arguments[0],!OBr(i))throw new TypeError(is("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!bV(r))throw new TypeError(is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(EV(r,"prng")){if(!wV(r.prng))throw new TypeError(is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ts(r)}else e=ts()}return i===void 0?t=p:t=l,we(t,"NAME","geometric"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),yV(t,"state",NV(null),SBr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",NV(null)),we(t,"PRNG",e)):(es(t,"seed",n),es(t,"seedLength",a),yV(t,"state",f,v),es(t,"stateLength",u),es(t,"byteLength",o),we(t,"toJSON",c),we(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=IBr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return AV(e,i)}function p(m){return TBr(m)||m<0||m>1?NaN:AV(e,m)}}OV.exports=_Br});var TV=s((ace,SV)=>{"use strict";var LBr=R3(),PBr=LBr();SV.exports=PBr});var LV=s((sce,_V)=>{"use strict";var RBr=w(),IV=TV(),FBr=R3();RBr(IV,"factory",FBr);_V.exports=IV});var FV=s((uce,RV)=>{"use strict";var MBr=j().isPrimitive,BBr=D().isPrimitive,PV=y(),kBr=or();function jBr(r,e){return!MBr(r)||kBr(r)?new TypeError(PV("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):BBr(e)?null:new TypeError(PV("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}RV.exports=jBr});var kV=s((oce,BV)=>{"use strict";var MV=R();function CBr(r,e,t){return e-t*MV(-MV(r()))}BV.exports=CBr});var F3=s((vce,zV)=>{"use strict";var Ee=w(),ns=P(),jV=M(),CV=_(),GV=L(),VV=O(),UV=T(),GBr=C(),as=X().factory,HV=E(),VBr=B(),ss=y(),UBr=FV(),WV=kV();function HBr(){var r,e,t,i,n,a;if(arguments.length===0)t=as();else if(arguments.length===1){if(e=arguments[0],!CV(e))throw new TypeError(ss("invalid argument. Options argument must be an object. Value: `%s`.",e));if(VV(e,"prng")){if(!GV(e.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=as(e)}else{if(a=arguments[0],r=arguments[1],n=UBr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!CV(e))throw new TypeError(ss("invalid argument. Options argument must be an object. Value: `%s`.",e));if(VV(e,"prng")){if(!GV(e.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=as(e)}else t=as()}return a===void 0?i=h:i=m,Ee(i,"NAME","gumbel"),e&&e.prng?(Ee(i,"seed",null),Ee(i,"seedLength",null),jV(i,"state",UV(null),GBr),Ee(i,"stateLength",null),Ee(i,"byteLength",null),Ee(i,"toJSON",UV(null)),Ee(i,"PRNG",t)):(ns(i,"seed",u),ns(i,"seedLength",o),jV(i,"state",c,l),ns(i,"stateLength",f),ns(i,"byteLength",v),Ee(i,"toJSON",p),Ee(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=VBr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return WV(t,a,r)}function h(d,g){return HV(d)||HV(g)||g<=0?NaN:WV(t,d,g)}}zV.exports=HBr});var XV=s((fce,DV)=>{"use strict";var WBr=F3(),zBr=WBr();DV.exports=zBr});var YV=s((cce,xV)=>{"use strict";var DBr=w(),JV=XV(),XBr=F3();DBr(JV,"factory",XBr);xV.exports=JV});var $V=s((lce,ZV)=>{"use strict";var M3=Ve().isPrimitive,Gn=y();function JBr(r,e,t){return M3(r)?M3(e)?M3(t)?t>r?new RangeError(Gn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(Gn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(Gn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(Gn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(Gn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}ZV.exports=JBr});var QV=s((pce,xBr)=>{xBr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var rU=s((gce,KV)=>{"use strict";var YBr=E(),ZBr=_r(),$Br=hi(),QBr=I(),KBr=QV(),rkr=170;function ekr(r){return YBr(r)?NaN:ZBr(r)?r<0?NaN:r<=rkr?KBr[r]:QBr:$Br(r+1)}KV.exports=ekr});var tU=s((mce,eU)=>{"use strict";var tkr=rU();eU.exports=tkr});var nU=s((dce,iU)=>{"use strict";var ft=tU();function ikr(r,e,t,i){var n,a,u;for(i<t?(n=ft(t)*ft(e+t-i)/(ft(e+t)*ft(t-i)),u=0):(n=ft(e)*ft(i)/(ft(i-t)*ft(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}iU.exports=ikr});var sU=s((hce,aU)=>{"use strict";var us=nU();function nkr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=us(r,n,a,u),t-o):(a=t,n=e-t,o=us(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=us(r,n,a,u),o):(n=e-t,a=t,o=us(r,n,a,u),i-o))}aU.exports=nkr});var k3=s((qce,gU)=>{"use strict";var Ne=w(),os=P(),uU=M(),oU=_(),vU=L(),fU=O(),cU=T(),akr=C(),vs=X().factory,B3=K2(),lU=I(),skr=B(),fs=y(),ukr=$V(),pU=sU();function okr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=vs();else if(arguments.length===1){if(r=arguments[0],!oU(r))throw new TypeError(fs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fU(r,"prng")){if(!vU(r.prng))throw new TypeError(fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=ukr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!oU(r))throw new TypeError(fs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fU(r,"prng")){if(!vU(r.prng))throw new TypeError(fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vs(r)}else e=vs()}return n===void 0?t=d:t=h,Ne(t,"NAME","hypergeometric"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),uU(t,"state",cU(null),akr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",cU(null)),Ne(t,"PRNG",e)):(os(t,"seed",o),os(t,"seedLength",f),uU(t,"state",l,p),os(t,"stateLength",v),os(t,"byteLength",c),Ne(t,"toJSON",m),Ne(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=skr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return pU(e,n,a,u)}function d(g,q,N){return g===lU||q===lU||!B3(g)||!B3(q)||!B3(N)||N>g?NaN:pU(e,g,q,N)}}gU.exports=okr});var dU=s((yce,mU)=>{"use strict";var vkr=k3(),fkr=vkr();mU.exports=fkr});var yU=s((bce,qU)=>{"use strict";var ckr=w(),hU=dU(),lkr=k3();ckr(hU,"factory",lkr);qU.exports=hU});var NU=s((wce,EU)=>{"use strict";var bU=D().isPrimitive,wU=y();function pkr(r,e){return bU(r)?bU(e)?null:new TypeError(wU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(wU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}EU.exports=pkr});var j3=s((Ece,LU)=>{"use strict";var ct=w(),cs=P(),AU=M(),OU=_(),SU=L(),TU=O(),IU=T(),gkr=C(),Li=Ni().factory,_U=E(),mkr=B(),ls=y(),dkr=NU();function hkr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Li();else if(arguments.length===1){if(i=arguments[0],!OU(i))throw new TypeError(ls("invalid argument. Options argument must be an object. Value: `%s`.",i));if(TU(i,"prng")){if(!SU(i.prng))throw new TypeError(ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Li({prng:i.prng})}else r=Li(i)}else{if(e=arguments[0],t=arguments[1],u=dkr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!OU(i))throw new TypeError(ls("invalid argument. Options argument must be an object. Value: `%s`.",i));if(TU(i,"prng")){if(!SU(i.prng))throw new TypeError(ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Li(e,t,{prng:i.prng})}else r=Li(e,t,i)}else r=Li(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,ct(a,"NAME","invgamma"),i&&i.prng?(ct(a,"seed",null),ct(a,"seedLength",null),AU(a,"state",IU(null),gkr),ct(a,"stateLength",null),ct(a,"byteLength",null),ct(a,"toJSON",IU(null))):(cs(a,"seed",o),cs(a,"seedLength",f),AU(a,"state",l,p),cs(a,"stateLength",v),cs(a,"byteLength",c),ct(a,"toJSON",m)),ct(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=mkr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return 1/r()}function d(g,q){return _U(g)||_U(q)||g<=0||q<=0?NaN:1/r(g,q)}}LU.exports=hkr});var RU=s((Nce,PU)=>{"use strict";var qkr=j3(),ykr=qkr();PU.exports=ykr});var BU=s((Ace,MU)=>{"use strict";var bkr=w(),FU=RU(),wkr=j3();bkr(FU,"factory",wkr);MU.exports=FU});var GU=s((Oce,CU)=>{"use strict";var kU=D().isPrimitive,jU=y();function Ekr(r,e){return kU(r)?kU(e)?null:new TypeError(jU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(jU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}CU.exports=Ekr});var HU=s((Sce,UU)=>{"use strict";var VU=W();function Nkr(r,e,t){var i=r();return VU(1-VU(1-i,1/t),1/e)}UU.exports=Nkr});var C3=s((Tce,ZU)=>{"use strict";var Ae=w(),ps=P(),WU=M(),zU=_(),DU=L(),XU=O(),JU=T(),Akr=C(),gs=X().factory,xU=E(),Okr=B(),ms=y(),Skr=GU(),YU=HU();function Tkr(){var r,e,t,i,n,a;if(arguments.length===0)e=gs();else if(arguments.length===1){if(r=arguments[0],!zU(r))throw new TypeError(ms("invalid argument. Options argument must be an object. Value: `%s`.",r));if(XU(r,"prng")){if(!DU(r.prng))throw new TypeError(ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=gs(r)}else{if(n=arguments[0],a=arguments[1],i=Skr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!zU(r))throw new TypeError(ms("invalid argument. Options argument must be an object. Value: `%s`.",r));if(XU(r,"prng")){if(!DU(r.prng))throw new TypeError(ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=gs(r)}else e=gs()}return n===void 0?t=h:t=m,Ae(t,"NAME","kumaraswamy"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),WU(t,"state",JU(null),Akr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",JU(null)),Ae(t,"PRNG",e)):(ps(t,"seed",u),ps(t,"seedLength",o),WU(t,"state",c,l),ps(t,"stateLength",f),ps(t,"byteLength",v),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Okr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return YU(e,n,a)}function h(d,g){return xU(d)||xU(g)||d<=0||g<=0?NaN:YU(e,d,g)}}ZU.exports=Tkr});var QU=s((Ice,$U)=>{"use strict";var Ikr=C3(),_kr=Ikr();$U.exports=_kr});var eH=s((_ce,rH)=>{"use strict";var Lkr=w(),KU=QU(),Pkr=C3();Lkr(KU,"factory",Pkr);rH.exports=KU});var nH=s((Lce,iH)=>{"use strict";var Rkr=j().isPrimitive,Fkr=D().isPrimitive,tH=y(),Mkr=or();function Bkr(r,e){return!Rkr(r)||Mkr(r)?new TypeError(tH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Fkr(e)?null:new TypeError(tH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}iH.exports=Bkr});var sH=s((Pce,aH)=>{"use strict";var kkr=O0(),jkr=J(),Ckr=R();function Gkr(r,e,t){var i=r()-.5;return e-t*kkr(i)*Ckr(1-2*jkr(i))}aH.exports=Gkr});var G3=s((Rce,gH)=>{"use strict";var Oe=w(),ds=P(),uH=M(),oH=_(),vH=L(),fH=O(),cH=T(),Vkr=C(),hs=X().factory,lH=E(),Ukr=B(),qs=y(),Hkr=nH(),pH=sH();function Wkr(){var r,e,t,i,n,a;if(arguments.length===0)e=hs();else if(arguments.length===1){if(r=arguments[0],!oH(r))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fH(r,"prng")){if(!vH(r.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else{if(n=arguments[0],a=arguments[1],i=Hkr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!oH(r))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fH(r,"prng")){if(!vH(r.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else e=hs()}return n===void 0?t=h:t=m,Oe(t,"NAME","laplace"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),uH(t,"state",cH(null),Vkr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",cH(null)),Oe(t,"PRNG",e)):(ds(t,"seed",u),ds(t,"seedLength",o),uH(t,"state",c,l),ds(t,"stateLength",f),ds(t,"byteLength",v),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Ukr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return pH(e,n,a)}function h(d,g){return lH(d)||lH(g)||g<=0?NaN:pH(e,d,g)}}gH.exports=Wkr});var dH=s((Fce,mH)=>{"use strict";var zkr=G3(),Dkr=zkr();mH.exports=Dkr});var yH=s((Mce,qH)=>{"use strict";var Xkr=w(),hH=dH(),Jkr=G3();Xkr(hH,"factory",Jkr);qH.exports=hH});var EH=s((Bce,wH)=>{"use strict";var xkr=j().isPrimitive,Ykr=D().isPrimitive,bH=y(),Zkr=or();function $kr(r,e){return!xkr(r)||Zkr(r)?new TypeError(bH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Ykr(e)?null:new TypeError(bH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}wH.exports=$kr});var AH=s((kce,NH)=>{"use strict";function Qkr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}NH.exports=Qkr});var SH=s((jce,OH)=>{"use strict";function Kkr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}OH.exports=Kkr});var IH=s((Cce,TH)=>{"use strict";function rjr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}TH.exports=rjr});var LH=s((Gce,_H)=>{"use strict";function ejr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}_H.exports=ejr});var RH=s((Vce,PH)=>{"use strict";function tjr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}PH.exports=tjr});var kH=s((Uce,BH)=>{"use strict";var ijr=E(),FH=V(),MH=R(),njr=I(),ajr=G(),sjr=AH(),ujr=SH(),ojr=IH(),vjr=LH(),fjr=RH(),cjr=.08913147449493408,ljr=2.249481201171875,pjr=.807220458984375,gjr=.9399557113647461,mjr=.9836282730102539;function djr(r){var e,t,i,n,a,u;return ijr(r)?NaN:r===1?njr:r===-1?ajr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=sjr(t),e*(a*cjr+a*u)):n>=.25?(a=FH(-2*MH(n)),n-=.25,u=ujr(n),e*(a/(ljr+u))):(n=FH(-MH(n)),n<3?(i=n-1.125,u=ojr(i),e*(pjr*n+u*n)):n<6?(i=n-3,u=vjr(i),e*(gjr*n+u*n)):(i=n-6,u=fjr(i),e*(mjr*n+u*n))))}BH.exports=djr});var V3=s((Hce,jH)=>{"use strict";var hjr=kH();jH.exports=hjr});var GH=s((Wce,CH)=>{"use strict";var qjr=V3(),U3=E(),yjr=V();function bjr(r,e,t){var i,n;return U3(e)||U3(t)||U3(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*yjr(2),i+n*qjr(2*r-1))}CH.exports=bjr});var UH=s((zce,VH)=>{"use strict";var wjr=T(),Ejr=y3().factory,Njr=V3(),H3=E(),Ajr=V();function Ojr(r,e){var t,i;if(H3(r)||H3(e)||e<0)return wjr(NaN);return e===0&&Ejr(r),t=r,i=e*Ajr(2),n;function n(a){return H3(a)||a<0||a>1?NaN:t+i*Njr(2*a-1)}}VH.exports=Ojr});var W3=s((Dce,WH)=>{"use strict";var Sjr=w(),HH=GH(),Tjr=UH();Sjr(HH,"factory",Tjr);WH.exports=HH});var DH=s((Xce,zH)=>{"use strict";var Ijr=W3();function _jr(r,e,t){var i=Ijr(1-r()/2,0,1);return e+t/(i*i)}zH.exports=_jr});var z3=s((Jce,KH)=>{"use strict";var Se=w(),ys=P(),XH=M(),JH=_(),xH=L(),YH=O(),ZH=T(),Ljr=C(),bs=X().factory,$H=E(),Pjr=B(),ws=y(),Rjr=EH(),QH=DH();function Fjr(){var r,e,t,i,n,a;if(arguments.length===0)e=bs();else if(arguments.length===1){if(r=arguments[0],!JH(r))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(YH(r,"prng")){if(!xH(r.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=bs(r)}else{if(n=arguments[0],a=arguments[1],i=Rjr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!JH(r))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(YH(r,"prng")){if(!xH(r.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=bs(r)}else e=bs()}return n===void 0?t=h:t=m,Se(t,"NAME","levy"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),XH(t,"state",ZH(null),Ljr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",ZH(null)),Se(t,"PRNG",e)):(ys(t,"seed",u),ys(t,"seedLength",o),XH(t,"state",c,l),ys(t,"stateLength",f),ys(t,"byteLength",v),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Pjr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return QH(e,n,a)}function h(d,g){return $H(d)||$H(g)||g<=0?NaN:QH(e,d,g)}}KH.exports=Fjr});var eW=s((xce,rW)=>{"use strict";var Mjr=z3(),Bjr=Mjr();rW.exports=Bjr});var nW=s((Yce,iW)=>{"use strict";var kjr=w(),tW=eW(),jjr=z3();kjr(tW,"factory",jjr);iW.exports=tW});var uW=s((Zce,sW)=>{"use strict";var Cjr=j().isPrimitive,Gjr=D().isPrimitive,Vjr=or(),aW=y();function Ujr(r,e){return!Cjr(r)||Vjr(r)?new TypeError(aW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Gjr(e)?null:new TypeError(aW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}sW.exports=Ujr});var vW=s(($ce,oW)=>{"use strict";var Hjr=R();function Wjr(r,e,t){var i=r();return e+t*Hjr(i/(1-i))}oW.exports=Wjr});var D3=s((Qce,hW)=>{"use strict";var Te=w(),Es=P(),fW=M(),cW=_(),lW=L(),pW=O(),gW=T(),zjr=C(),Ns=X().factory,mW=E(),Djr=B(),As=y(),Xjr=uW(),dW=vW();function Jjr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ns();else if(arguments.length===1){if(r=arguments[0],!cW(r))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",r));if(pW(r,"prng")){if(!lW(r.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else{if(n=arguments[0],a=arguments[1],i=Xjr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!cW(r))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",r));if(pW(r,"prng")){if(!lW(r.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else e=Ns()}return n===void 0?t=h:t=m,Te(t,"NAME","logistic"),r&&r.prng?(Te(t,"seed",null),Te(t,"seedLength",null),fW(t,"state",gW(null),zjr),Te(t,"stateLength",null),Te(t,"byteLength",null),Te(t,"toJSON",gW(null)),Te(t,"PRNG",e)):(Es(t,"seed",u),Es(t,"seedLength",o),fW(t,"state",c,l),Es(t,"stateLength",f),Es(t,"byteLength",v),Te(t,"toJSON",p),Te(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Djr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return dW(e,n,a)}function h(d,g){return mW(d)||mW(g)||g<=0?NaN:dW(e,d,g)}}hW.exports=Jjr});var yW=s((Kce,qW)=>{"use strict";var xjr=D3(),Yjr=xjr();qW.exports=Yjr});var EW=s((r5e,wW)=>{"use strict";var Zjr=w(),bW=yW(),$jr=D3();Zjr(bW,"factory",$jr);wW.exports=bW});var OW=s((e5e,AW)=>{"use strict";var Qjr=j().isPrimitive,Kjr=D().isPrimitive,NW=y(),rCr=or();function eCr(r,e){return!Qjr(r)||rCr(r)?new TypeError(NW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Kjr(e)?null:new TypeError(NW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}AW.exports=eCr});var TW=s((t5e,SW)=>{"use strict";var tCr=nr();function iCr(r,e,t){return tCr(e+t*r())}SW.exports=iCr});var X3=s((i5e,BW)=>{"use strict";var lt=w(),Os=P(),IW=M(),_W=_(),LW=L(),PW=O(),RW=T(),nCr=C(),Pi=it().factory,FW=E(),aCr=B(),Ss=y(),sCr=OW(),MW=TW();function uCr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Pi();else if(arguments.length===1){if(t=arguments[0],!_W(t))throw new TypeError(Ss("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PW(t,"prng")){if(!LW(t.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Pi({prng:t.prng})}else e=Pi(t)}else{if(u=arguments[0],r=arguments[1],a=sCr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!_W(t))throw new TypeError(Ss("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PW(t,"prng")){if(!LW(t.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Pi({prng:t.prng})}else e=Pi(t)}else e=Pi()}return u===void 0?n=d:n=h,i=e.PRNG,lt(n,"NAME","lognormal"),t&&t.prng?(lt(n,"seed",null),lt(n,"seedLength",null),IW(n,"state",RW(null),nCr),lt(n,"stateLength",null),lt(n,"byteLength",null),lt(n,"toJSON",RW(null))):(Os(n,"seed",o),Os(n,"seedLength",f),IW(n,"state",l,p),Os(n,"stateLength",v),Os(n,"byteLength",c),lt(n,"toJSON",m)),lt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=aCr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return MW(e,u,r)}function d(g,q){return FW(g)||FW(q)||q<=0?NaN:MW(e,g,q)}}BW.exports=uCr});var jW=s((n5e,kW)=>{"use strict";var oCr=X3(),vCr=oCr();kW.exports=vCr});var VW=s((a5e,GW)=>{"use strict";var fCr=w(),CW=jW(),cCr=X3();fCr(CW,"factory",cCr);GW.exports=CW});var J3=s((s5e,UW)=>{"use strict";var lCr=xt(),pCr=x(),gCr=lCr-1;function mCr(){var r=pCr(1+gCr*Math.random());return r|0}UW.exports=mCr});var Z3=s((u5e,XW)=>{"use strict";var Ie=w(),pt=P(),HW=M(),x3=O(),dCr=_(),hCr=cr().isPrimitive,qCr=Vr(),yCr=ee().isPrimitive,WW=Qn(),Wr=y(),Ts=xt(),wr=At(),Ri=Qe(),bCr=B(),zW=J3(),Y3=Ts-1|0,wCr=Ts-1|0,ECr=16807,Is=1,_s=2,gt=2,Er=4,Vn=5;function DW(r,e){var t;return e?t="option":t="argument",r.length<Vn+1?new RangeError(Wr("invalid %s. State array has insufficient length.",t)):r[0]!==Is?new RangeError(Wr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Is,r[0])):r[1]!==_s?new RangeError(Wr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,_s,r[1])):r[gt]!==1?new RangeError(Wr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[gt])):r[Er]!==r.length-Vn?new RangeError(Wr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Vn,r[Er])):null}function NCr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!dCr(r))throw new TypeError(Wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(x3(r,"copy")&&(i.copy=r.copy,!hCr(r.copy)))throw new TypeError(Wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(x3(r,"state")){if(t=r.state,i.state=!0,!WW(t))throw new TypeError(Wr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=DW(t,!0),u)throw u;i.copy===!1?e=t:(e=new wr(t.length),Ri(t.length,t,1,e,1)),t=new wr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,t[Er])}if(n===void 0)if(x3(r,"seed"))if(n=r.seed,i.seed=!0,yCr(n)){if(n>wCr)throw new RangeError(Wr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(qCr(n)&&n.length>0)a=n.length,e=new wr(Vn+a),e[0]=Is,e[1]=_s,e[gt]=1,e[Er]=a,Ri.ndarray(a,n,1,0,e,1,Er+1),t=new wr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Wr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=zW()|0}else n=zW()|0;return t===void 0&&(e=new wr(Vn+1),e[0]=Is,e[1]=_s,e[gt]=1,e[Er]=1,e[Er+1]=n,t=new wr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Ie(h,"NAME","minstd"),pt(h,"seed",o),pt(h,"seedLength",f),HW(h,"state",l,p),pt(h,"stateLength",v),pt(h,"byteLength",c),Ie(h,"toJSON",m),Ie(h,"MIN",1),Ie(h,"MAX",Ts-1),Ie(h,"normalized",d),Ie(d,"NAME",h.NAME),pt(d,"seed",o),pt(d,"seedLength",f),HW(d,"state",l,p),pt(d,"stateLength",v),pt(d,"byteLength",c),Ie(d,"toJSON",m),Ie(d,"MIN",(h.MIN-1)/Y3),Ie(d,"MAX",(h.MAX-1)/Y3),h;function o(){var g=e[Er];return Ri(g,n,1,new wr(g),1)}function f(){return e[Er]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Ri(g,e,1,new wr(g),1)}function p(g){var q;if(!WW(g))throw new TypeError(Wr("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(q=DW(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?Ri(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new wr(g.length)),Ri(g.length,g,1,e,1)),t=new wr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,e[Er])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=bCr(e),g.params=[],g}function h(){var g=t[0]|0;return g=ECr*g%Ts|0,t[0]=g,g|0}function d(){return(h()-1)/Y3}}XW.exports=NCr});var xW=s((o5e,JW)=>{"use strict";var ACr=Z3(),OCr=J3(),SCr=ACr({seed:OCr()});JW.exports=SCr});var $W=s((v5e,ZW)=>{"use strict";var TCr=w(),YW=xW(),ICr=Z3();TCr(YW,"factory",ICr);ZW.exports=YW});var KW=s((f5e,QW)=>{"use strict";var _Cr=E(),LCr=8;function PCr(r,e,t){var i,n;for(n=0;n<LCr;n++)if(i=r(),_Cr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}QW.exports=PCr});var $3=s((c5e,rz)=>{"use strict";var RCr=xt(),FCr=x(),MCr=RCr-1;function BCr(){var r=FCr(1+MCr*Math.random());return r|0}rz.exports=BCr});var r6=s((l5e,sz)=>{"use strict";var _e=w(),mt=P(),ez=M(),Q3=O(),kCr=_(),jCr=cr().isPrimitive,CCr=Vr(),GCr=ee().isPrimitive,tz=Qn(),Fi=Qe(),VCr=x(),Nr=At(),Un=xt(),UCr=B(),Gr=y(),iz=KW(),nz=$3(),K3=Un-1|0,HCr=Un-1|0,WCr=16807,Or=32,Rs=1,Fs=3,dt=2,Mi=Or+3,Ar=Or+6,Hn=Or+7,Ls=Mi+1,Ps=Mi+2;function az(r,e){var t;return e?t="option":t="argument",r.length<Hn+1?new RangeError(Gr("invalid %s. State array has insufficient length.",t)):r[0]!==Rs?new RangeError(Gr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Rs,r[0])):r[1]!==Fs?new RangeError(Gr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Fs,r[1])):r[dt]!==Or?new RangeError(Gr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Or,r[dt])):r[Mi]!==2?new RangeError(Gr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Mi])):r[Ar]!==r.length-Hn?new RangeError(Gr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Hn,r[Ar])):null}function zCr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!kCr(r))throw new TypeError(Gr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Q3(r,"copy")&&(i.copy=r.copy,!jCr(r.copy)))throw new TypeError(Gr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Q3(r,"state")){if(t=r.state,i.state=!0,!tz(t))throw new TypeError(Gr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=az(t,!0),u)throw u;i.copy===!1?e=t:(e=new Nr(t.length),Fi(t.length,t,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(Q3(r,"seed"))if(n=r.seed,i.seed=!0,GCr(n)){if(n>HCr)throw new RangeError(Gr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(CCr(n)&&n.length>0)a=n.length,e=new Nr(Hn+a),e[0]=Rs,e[1]=Fs,e[dt]=Or,e[Mi]=2,e[Ps]=n[0],e[Ar]=a,Fi.ndarray(a,n,1,0,e,1,Ar+1),t=new Nr(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t=iz(h,t,Or),e[Ls]=t[0];else throw new TypeError(Gr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=nz()|0}else n=nz()|0;return t===void 0&&(e=new Nr(Hn+1),e[0]=Rs,e[1]=Fs,e[dt]=Or,e[Mi]=2,e[Ps]=n,e[Ar]=1,e[Ar+1]=n,t=new Nr(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t=iz(h,t,Or),e[Ls]=t[0]),_e(d,"NAME","minstd-shuffle"),mt(d,"seed",o),mt(d,"seedLength",f),ez(d,"state",l,p),mt(d,"stateLength",v),mt(d,"byteLength",c),_e(d,"toJSON",m),_e(d,"MIN",1),_e(d,"MAX",Un-1),_e(d,"normalized",g),_e(g,"NAME",d.NAME),mt(g,"seed",o),mt(g,"seedLength",f),ez(g,"state",l,p),mt(g,"stateLength",v),mt(g,"byteLength",c),_e(g,"toJSON",m),_e(g,"MIN",(d.MIN-1)/K3),_e(g,"MAX",(d.MAX-1)/K3),d;function o(){var q=e[Ar];return Fi(q,n,1,new Nr(q),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return Fi(q,e,1,new Nr(q),1)}function p(q){var N;if(!tz(q))throw new TypeError(Gr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=az(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?Fi(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Nr(q.length)),Fi(q.length,q,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function m(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=UCr(e),q.params=[],q}function h(){var q=e[Ps]|0;return q=WCr*q%Un|0,e[Ps]=q,q|0}function d(){var q,N;return q=e[Ls],N=VCr(Or*(q/Un)),q=t[N],e[Ls]=q,t[N]=h(),q}function g(){return(d()-1)/K3}}sz.exports=zCr});var oz=s((p5e,uz)=>{"use strict";var DCr=r6(),XCr=$3(),JCr=DCr({seed:XCr()});uz.exports=JCr});var cz=s((g5e,fz)=>{"use strict";var xCr=w(),vz=oz(),YCr=r6();xCr(vz,"factory",YCr);fz.exports=vz});var pz=s((m5e,lz)=>{"use strict";var ZCr=nr();function $Cr(r,e){for(var t=r(),i=1;t>ZCr(-e);)i+=1,t*=r();return i-1}lz.exports=$Cr});var mz=s((d5e,gz)=>{"use strict";var QCr=x();function KCr(r){return QCr(r)===r&&r<0}gz.exports=KCr});var hz=s((h5e,dz)=>{"use strict";var rGr=mz();dz.exports=rGr});var yz=s((q5e,qz)=>{"use strict";var eGr=hz(),tGr=Pn();function iGr(r){return eGr(r)?NaN:tGr(r+1)}qz.exports=iGr});var wz=s((y5e,bz)=>{"use strict";var nGr=yz();bz.exports=nGr});var Oz=s((b5e,Az)=>{"use strict";var aGr=wz(),Ez=x(),sGr=O0(),uGr=V(),Nz=J(),Ms=R(),oGr=A1(),vGr=1/12,fGr=1/360;function cGr(r,e){var t,i,n,a,u,o,f,v,c,l;for(t=uGr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-Nz(c))+f,c+=e+.445,Ez(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=sGr(c)*.5-c,l=u*r()),a=.5-Nz(c),(a>=.013||a>=l)&&(v=Ez((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*Ms(e/v),c+=-e-oGr+v,c-=(vGr-fGr/(v*v))/v,v>=10&&c>=Ms(l*t)||(c=v*Ms(e)-e-aGr(v),v>=0&&v<=9&&c>=Ms(l))))return v}}Az.exports=cGr});var Tz=s((w5e,Sz)=>{"use strict";var lGr=pz(),pGr=Oz();function gGr(r,e){return e<30?lGr(r,e):pGr(r,e)}Sz.exports=gGr});var e6=s((E5e,Mz)=>{"use strict";var Le=w(),Bs=P(),Iz=M(),mGr=D().isPrimitive,_z=_(),Lz=L(),Pz=O(),Rz=T(),dGr=C(),ks=X().factory,hGr=E(),qGr=B(),js=y(),Fz=Tz();function yGr(){var r,e,t,i;if(arguments.length===0)t=ks();else if(arguments.length===1&&_z(arguments[0]))if(e=arguments[0],Pz(e,"prng")){if(!Lz(e.prng))throw new TypeError(js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ks(e);else{if(r=arguments[0],!mGr(r))throw new TypeError(js("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!_z(e))throw new TypeError(js("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Pz(e,"prng")){if(!Lz(e.prng))throw new TypeError(js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ks(e)}else t=ks()}return r===void 0?i=p:i=l,Le(i,"NAME","poisson"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),Iz(i,"state",Rz(null),dGr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",Rz(null)),Le(i,"PRNG",t)):(Bs(i,"seed",n),Bs(i,"seedLength",a),Iz(i,"state",f,v),Bs(i,"stateLength",u),Bs(i,"byteLength",o),Le(i,"toJSON",c),Le(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=qGr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Fz(t,r)}function p(m){return hGr(m)||m<=0?NaN:Fz(t,m)}}Mz.exports=yGr});var kz=s((N5e,Bz)=>{"use strict";var bGr=e6(),wGr=bGr();Bz.exports=wGr});var t6=s((A5e,Cz)=>{"use strict";var EGr=w(),jz=kz(),NGr=e6();EGr(jz,"factory",NGr);Cz.exports=jz});var Vz=s((O5e,Gz)=>{"use strict";var AGr=D().isPrimitive,OGr=j().isPrimitive,i6=y(),SGr=or();function TGr(r,e){return AGr(r)?!OGr(e)||SGr(e)?new TypeError(i6("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(i6("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(i6("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Gz.exports=TGr});var u6=s((S5e,xz)=>{"use strict";var ht=w(),Cs=P(),Uz=M(),Bi=O(),Hz=_(),n6=re(),Wz=cr().isPrimitive,zz=L(),Dz=T(),IGr=C(),Xz=E(),ki=t6().factory,Gs=Ni().factory,a6=Qe(),s6=pr(),Jz=Bn(),_Gr=B(),Pe=y(),LGr=Vz();function PGr(){var r,e,t,i,n,a,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=ki(i);else if(arguments.length===1){if(i=arguments[0],!Hz(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Bi(i,"copy")&&!Wz(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Bi(i,"prng")){if(!zz(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=ki({prng:i.prng})}else{if(Bi(i,"state")&&!n6(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=Jz({},i),i.copy===!1?u=!1:i.state&&(i.state=a6(i.state.length,i.state,1,new s6(i.state.length),1)),i.copy=!1,t=ki(i)}}else{if(v=arguments[0],f=arguments[1],o=LGr(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!Hz(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Bi(i,"copy")&&!Wz(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Bi(i,"prng")){if(!zz(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=ki({prng:i.prng})}else{if(Bi(i,"state")&&!n6(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=Jz({},i),i.copy===!1?u=!1:i.state&&(i.state=a6(i.state.length,i.state,1,new s6(i.state.length),1)),i.copy=!1,t=ki(i)}}else i={copy:!1},t=ki(i)}return i&&i.prng?v===void 0?r=Gs({prng:i.prng}):r=Gs(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=Gs({state:e,copy:!1}):r=Gs(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=q,a=t.PRNG,ht(n,"NAME","negative-binomial"),i&&i.prng?(ht(n,"seed",null),ht(n,"seedLength",null),Uz(n,"state",Dz(null),IGr),ht(n,"stateLength",null),ht(n,"byteLength",null),ht(n,"toJSON",Dz(null))):(Cs(n,"seed",c),Cs(n,"seedLength",l),Uz(n,"state",h,d),Cs(n,"stateLength",p),Cs(n,"byteLength",m),ht(n,"toJSON",g)),ht(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function h(){return a.state}function d(A){if(!n6(A))throw new TypeError(Pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));u&&(A=a6(A.length,A,1,new s6(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=_Gr(a.state),v===void 0?A.params=[]:A.params=[v,f],A}function q(){return t(r())}function N(A,F){return Xz(A)||Xz(F)||F<=0||F>=1?NaN:t(r(A,F/(1-F)))}}xz.exports=PGr});var Zz=s((T5e,Yz)=>{"use strict";var RGr=u6(),FGr=RGr();Yz.exports=FGr});var Kz=s((I5e,Qz)=>{"use strict";var MGr=w(),$z=Zz(),BGr=u6();MGr($z,"factory",BGr);Qz.exports=$z});var tD=s((_5e,eD)=>{"use strict";var kGr=j().isPrimitive,jGr=D().isPrimitive,rD=y(),CGr=or();function GGr(r,e){return!kGr(r)||CGr(r)?new TypeError(rD("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):jGr(e)?null:new TypeError(rD("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}eD.exports=GGr});var nD=s((L5e,iD)=>{"use strict";function VGr(r,e,t){return e+t*r()}iD.exports=VGr});var o6=s((P5e,lD)=>{"use strict";var qt=w(),Vs=P(),aD=M(),sD=_(),uD=L(),oD=O(),vD=T(),UGr=C(),ji=it().factory,fD=E(),HGr=B(),Us=y(),WGr=tD(),cD=nD();function zGr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=ji();else if(arguments.length===1){if(t=arguments[0],!sD(t))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",t));if(oD(t,"prng")){if(!uD(t.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else{if(u=arguments[0],r=arguments[1],a=WGr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!sD(t))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",t));if(oD(t,"prng")){if(!uD(t.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else e=ji()}return u===void 0?n=d:n=h,i=e.PRNG,qt(n,"NAME","normal"),t&&t.prng?(qt(n,"seed",null),qt(n,"seedLength",null),aD(n,"state",vD(null),UGr),qt(n,"stateLength",null),qt(n,"byteLength",null),qt(n,"toJSON",vD(null))):(Vs(n,"seed",o),Vs(n,"seedLength",f),aD(n,"state",l,p),Vs(n,"stateLength",v),Vs(n,"byteLength",c),qt(n,"toJSON",m)),qt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=HGr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return cD(e,u,r)}function d(g,q){return fD(g)||fD(q)||q<=0?NaN:cD(e,g,q)}}lD.exports=zGr});var gD=s((R5e,pD)=>{"use strict";var DGr=o6(),XGr=DGr();pD.exports=XGr});var hD=s((F5e,dD)=>{"use strict";var JGr=w(),mD=gD(),xGr=o6();JGr(mD,"factory",xGr);dD.exports=mD});var wD=s((M5e,bD)=>{"use strict";var qD=D().isPrimitive,yD=y();function YGr(r,e){return qD(r)?qD(e)?null:new TypeError(yD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(yD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}bD.exports=YGr});var ND=s((B5e,ED)=>{"use strict";var ZGr=W();function $Gr(r,e,t){return t/ZGr(r(),1/e)}ED.exports=$Gr});var v6=s((k5e,PD)=>{"use strict";var Re=w(),Hs=P(),AD=M(),OD=_(),SD=L(),TD=O(),ID=T(),QGr=C(),Ws=X().factory,_D=E(),KGr=B(),zs=y(),rVr=wD(),LD=ND();function eVr(){var r,e,t,i,n,a;if(arguments.length===0)i=Ws();else if(arguments.length===1){if(t=arguments[0],!OD(t))throw new TypeError(zs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(TD(t,"prng")){if(!SD(t.prng))throw new TypeError(zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Ws(t)}else{if(r=arguments[0],e=arguments[1],a=rVr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!OD(t))throw new TypeError(zs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(TD(t,"prng")){if(!SD(t.prng))throw new TypeError(zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Ws(t)}else i=Ws()}return r===void 0?n=h:n=m,Re(n,"NAME","pareto-type1"),t&&t.prng?(Re(n,"seed",null),Re(n,"seedLength",null),AD(n,"state",ID(null),QGr),Re(n,"stateLength",null),Re(n,"byteLength",null),Re(n,"toJSON",ID(null)),Re(n,"PRNG",i)):(Hs(n,"seed",u),Hs(n,"seedLength",o),AD(n,"state",c,l),Hs(n,"stateLength",f),Hs(n,"byteLength",v),Re(n,"toJSON",p),Re(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=KGr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function m(){return LD(i,r,e)}function h(d,g){return _D(d)||_D(g)||d<=0||g<=0?NaN:LD(i,d,g)}}PD.exports=eVr});var FD=s((j5e,RD)=>{"use strict";var tVr=v6(),iVr=tVr();RD.exports=iVr});var kD=s((C5e,BD)=>{"use strict";var nVr=w(),MD=FD(),aVr=v6();nVr(MD,"factory",aVr);BD.exports=MD});var CD=s((G5e,jD)=>{"use strict";var sVr=V(),uVr=R();function oVr(r,e){return e*sVr(-2*uVr(r()))}jD.exports=oVr});var f6=s((V5e,DD)=>{"use strict";var Fe=w(),Ds=P(),GD=M(),vVr=D().isPrimitive,VD=_(),UD=L(),HD=O(),WD=T(),fVr=C(),Xs=X().factory,cVr=E(),lVr=B(),Js=y(),zD=CD();function pVr(){var r,e,t,i;if(arguments.length===0)t=Xs();else if(arguments.length===1&&VD(arguments[0]))if(e=arguments[0],HD(e,"prng")){if(!UD(e.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xs(e);else{if(r=arguments[0],!vVr(r))throw new TypeError(Js("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!VD(e))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",e));if(HD(e,"prng")){if(!UD(e.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xs(e)}else t=Xs()}return r===void 0?i=p:i=l,Fe(i,"NAME","rayleigh"),e&&e.prng?(Fe(i,"seed",null),Fe(i,"seedLength",null),GD(i,"state",WD(null),fVr),Fe(i,"stateLength",null),Fe(i,"byteLength",null),Fe(i,"toJSON",WD(null)),Fe(i,"PRNG",t)):(Ds(i,"seed",n),Ds(i,"seedLength",a),GD(i,"state",f,v),Ds(i,"stateLength",u),Ds(i,"byteLength",o),Fe(i,"toJSON",c),Fe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=lVr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return zD(t,r)}function p(m){return cVr(m)||m<=0?NaN:zD(t,m)}}DD.exports=pVr});var JD=s((U5e,XD)=>{"use strict";var gVr=f6(),mVr=gVr();XD.exports=mVr});var ZD=s((H5e,YD)=>{"use strict";var dVr=w(),xD=JD(),hVr=f6();dVr(xD,"factory",hVr);YD.exports=xD});var g6=s((W5e,aX)=>{"use strict";var yt=w(),xs=P(),$D=M(),Ci=O(),QD=D().isPrimitive,KD=_(),c6=re(),rX=cr().isPrimitive,qVr=E(),eX=L(),tX=T(),yVr=C(),Ys=Cn().factory,Gi=it().factory,l6=Qe(),p6=pr(),iX=Bn(),bVr=B(),Zr=y(),nX=V();function wVr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Gi(n);else if(arguments.length===1)if(KD(arguments[0])){if(n=arguments[0],Ci(n,"copy")&&!rX(n.copy))throw new TypeError(Zr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ci(n,"prng")){if(!eX(n.prng))throw new TypeError(Zr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Gi({prng:n.prng})}else{if(Ci(n,"state")&&!c6(n.state))throw new TypeError(Zr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=iX({},n),n.copy===!1?u=!1:n.state&&(n.state=l6(n.state.length,n.state,1,new p6(n.state.length),1)),n.copy=!1,t=Gi(n)}}else{if(o=arguments[0],!QD(o))throw new TypeError(Zr("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Gi(n)}else{if(o=arguments[0],!QD(o))throw new TypeError(Zr("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!KD(n))throw new TypeError(Zr("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ci(n,"copy")&&!rX(n.copy))throw new TypeError(Zr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ci(n,"prng")){if(!eX(n.prng))throw new TypeError(Zr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Gi({prng:n.prng})}else{if(Ci(n,"state")&&!c6(n.state))throw new TypeError(Zr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=iX({},n),n.copy===!1?u=!1:n.state&&(n.state=l6(n.state.length,n.state,1,new p6(n.state.length),1)),n.copy=!1,t=Gi(n)}}return n&&n.prng?o===void 0?r=Ys({prng:n.prng}):r=Ys(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Ys({state:e,copy:!1}):r=Ys(o,{state:e,copy:!1})),o===void 0?a=g:a=d,i=t.PRNG,yt(a,"NAME","t"),n&&n.prng?(yt(a,"seed",null),yt(a,"seedLength",null),$D(a,"state",tX(null),yVr),yt(a,"stateLength",null),yt(a,"byteLength",null),yt(a,"toJSON",tX(null))):(xs(a,"seed",f),xs(a,"seedLength",v),$D(a,"state",p,m),xs(a,"stateLength",c),xs(a,"byteLength",l),yt(a,"toJSON",h)),yt(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(q){if(!c6(q))throw new TypeError(Zr("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=l6(q.length,q,1,new p6(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=bVr(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/nX(r()/o)}function g(q){return qVr(q)||q<=0?NaN:t()/nX(r(q)/q)}}aX.exports=wVr});var uX=s((z5e,sX)=>{"use strict";var EVr=g6(),NVr=EVr();sX.exports=NVr});var fX=s((D5e,vX)=>{"use strict";var AVr=w(),oX=uX(),OVr=g6();AVr(oX,"factory",OVr);vX.exports=oX});var lX=s((X5e,cX)=>{"use strict";var m6=j().isPrimitive,Zs=y(),d6=or();function SVr(r,e,t){return!m6(r)||d6(r)?new TypeError(Zs("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!m6(e)||d6(e)?new TypeError(Zs("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!m6(t)||d6(t)?new TypeError(Zs("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Zs("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}cX.exports=SVr});var mX=s((J5e,gX)=>{"use strict";var pX=V();function TVr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+pX(a*u)):(a=(t-e)*(t-i),t-pX(a*(1-u)))}gX.exports=TVr});var q6=s((x5e,EX)=>{"use strict";var Me=w(),$s=P(),dX=M(),hX=_(),qX=L(),yX=O(),bX=T(),IVr=C(),Qs=X().factory,h6=E(),_Vr=B(),Ks=y(),LVr=lX(),wX=mX();function PVr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Qs();else if(arguments.length===1){if(r=arguments[0],!hX(r))throw new TypeError(Ks("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yX(r,"prng")){if(!qX(r.prng))throw new TypeError(Ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Qs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=LVr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!hX(r))throw new TypeError(Ks("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yX(r,"prng")){if(!qX(r.prng))throw new TypeError(Ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Qs(r)}else e=Qs()}return n===void 0?t=d:t=h,Me(t,"NAME","triangular"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),dX(t,"state",bX(null),IVr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",bX(null)),Me(t,"PRNG",e)):($s(t,"seed",o),$s(t,"seedLength",f),dX(t,"state",l,p),$s(t,"stateLength",v),$s(t,"byteLength",c),Me(t,"toJSON",m),Me(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=_Vr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return wX(e,n,a,u)}function d(g,q,N){return h6(g)||h6(q)||h6(N)||!(g<=N&&N<=q)?NaN:wX(e,g,q,N)}}EX.exports=PVr});var AX=s((Y5e,NX)=>{"use strict";var RVr=q6(),FVr=RVr();NX.exports=FVr});var TX=s((Z5e,SX)=>{"use strict";var MVr=w(),OX=AX(),BVr=q6();MVr(OX,"factory",BVr);SX.exports=OX});var PX=s(($5e,LX)=>{"use strict";var IX=j().isPrimitive,y6=y(),_X=or();function kVr(r,e){return!IX(r)||_X(r)?new TypeError(y6("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!IX(e)||_X(e)?new TypeError(y6("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(y6("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}LX.exports=kVr});var FX=s((Q5e,RX)=>{"use strict";function jVr(r,e,t){var i=r();return t*i+(1-i)*e}RX.exports=jVr});var b6=s((K5e,UX)=>{"use strict";var Be=w(),ru=P(),MX=M(),BX=_(),kX=L(),jX=O(),CX=T(),CVr=C(),eu=X().factory,GX=E(),GVr=B(),tu=y(),VVr=PX(),VX=FX();function UVr(){var r,e,t,i,n,a;if(arguments.length===0)e=eu();else if(arguments.length===1){if(r=arguments[0],!BX(r))throw new TypeError(tu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(jX(r,"prng")){if(!kX(r.prng))throw new TypeError(tu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=eu(r)}else{if(n=arguments[0],a=arguments[1],i=VVr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!BX(r))throw new TypeError(tu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(jX(r,"prng")){if(!kX(r.prng))throw new TypeError(tu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=eu(r)}else e=eu()}return n===void 0?t=h:t=m,Be(t,"NAME","uniform"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),MX(t,"state",CX(null),CVr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",CX(null)),Be(t,"PRNG",e)):(ru(t,"seed",u),ru(t,"seedLength",o),MX(t,"state",c,l),ru(t,"stateLength",f),ru(t,"byteLength",v),Be(t,"toJSON",p),Be(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=GVr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return VX(e,n,a)}function h(d,g){return GX(d)||GX(g)||d>=g?NaN:VX(e,d,g)}}UX.exports=UVr});var WX=s((r8e,HX)=>{"use strict";var HVr=b6(),WVr=HVr();HX.exports=WVr});var XX=s((e8e,DX)=>{"use strict";var zVr=w(),zX=WX(),DVr=b6();zVr(zX,"factory",DVr);DX.exports=zX});var ZX=s((t8e,YX)=>{"use strict";var JX=D().isPrimitive,xX=y();function XVr(r,e){return JX(r)?JX(e)?null:new TypeError(xX("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(xX("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}YX.exports=XVr});var QX=s((i8e,$X)=>{"use strict";var JVr=W(),xVr=R();function YVr(r,e,t){return t*JVr(-xVr(1-r()),1/e)}$X.exports=YVr});var w6=s((n8e,sJ)=>{"use strict";var ke=w(),iu=P(),KX=M(),rJ=_(),eJ=L(),tJ=O(),iJ=T(),ZVr=C(),nu=X().factory,nJ=E(),$Vr=B(),au=y(),QVr=ZX(),aJ=QX();function KVr(){var r,e,t,i,n,a;if(arguments.length===0)t=nu();else if(arguments.length===1){if(e=arguments[0],!rJ(e))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",e));if(tJ(e,"prng")){if(!eJ(e.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=nu(e)}else{if(a=arguments[0],r=arguments[1],n=QVr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!rJ(e))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",e));if(tJ(e,"prng")){if(!eJ(e.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=nu(e)}else t=nu()}return r===void 0?i=h:i=m,ke(i,"NAME","weibull"),e&&e.prng?(ke(i,"seed",null),ke(i,"seedLength",null),KX(i,"state",iJ(null),ZVr),ke(i,"stateLength",null),ke(i,"byteLength",null),ke(i,"toJSON",iJ(null)),ke(i,"PRNG",t)):(iu(i,"seed",u),iu(i,"seedLength",o),KX(i,"state",c,l),iu(i,"stateLength",f),iu(i,"byteLength",v),ke(i,"toJSON",p),ke(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=$Vr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return aJ(t,a,r)}function h(d,g){return nJ(d)||nJ(g)||d<=0||g<=0?NaN:aJ(t,d,g)}}sJ.exports=KVr});var oJ=s((a8e,uJ)=>{"use strict";var rUr=w6(),eUr=rUr();uJ.exports=eUr});var cJ=s((s8e,fJ)=>{"use strict";var tUr=w(),vJ=oJ(),iUr=w6();tUr(vJ,"factory",iUr);fJ.exports=vJ});var pJ=s((u8e,lJ)=>{"use strict";var nUr=lr(),aUr=Ur().isPrimitive,sUr=y(),uUr=_u();function oUr(r){if(aUr(r))return r;if(nUr(r))return uUr(r);throw new TypeError(sUr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}lJ.exports=oUr});var mJ=s((o8e,gJ)=>{"use strict";var vUr=pJ();gJ.exports=vUr});var hJ=s((v8e,dJ)=>{"use strict";var k=ar(),fUr=IF().factory,cUr=GF().factory,lUr=uB().factory,pUr=XB().factory,gUr=Tk().factory,mUr=Hk().factory,dUr=yj().factory,hUr=Uj().factory,qUr=Cn().factory,yUr=BC().factory,bUr=eG().factory,wUr=yG().factory,EUr=FG().factory,NUr=QG().factory,AUr=mV().factory,OUr=Ni().factory,SUr=LV().factory,TUr=YV().factory,IUr=yU().factory,_Ur=it().factory,LUr=BU().factory,PUr=eH().factory,RUr=yH().factory,FUr=nW().factory,MUr=EW().factory,BUr=VW().factory,kUr=$W().factory,jUr=cz().factory,CUr=X().factory,GUr=Kz().factory,VUr=hD().factory,UUr=kD().factory,HUr=t6().factory,WUr=ZD().factory,zUr=fX().factory,DUr=TX().factory,XUr=XX().factory,JUr=cJ().factory,xUr=mJ();function YUr(r){return k(r,"arcsine",fUr),k(r,"bernoulli",cUr),k(r,"beta",lUr),k(r,"betaprime",pUr),k(r,"binomial",gUr),k(r,"boxMuller",mUr),k(r,"cauchy",dUr),k(r,"chi",hUr),k(r,"chisquare",qUr),k(r,"cosine",yUr),k(r,"discreteUniform",bUr),k(r,"erlang",wUr),k(r,"exponential",EUr),k(r,"f",NUr),k(r,"frechet",AUr),k(r,"gamma",OUr),k(r,"geometric",SUr),k(r,"gumbel",TUr),k(r,"hypergeometric",IUr),k(r,"improvedZiggurat",_Ur),k(r,"invgamma",LUr),k(r,"kumaraswamy",PUr),k(r,"laplace",RUr),k(r,"levy",FUr),k(r,"logistic",MUr),k(r,"lognormal",BUr),k(r,"minstd",kUr),k(r,"minstdShuffle",jUr),k(r,"mt19937",CUr),k(r,"negativeBinomial",GUr),k(r,"normal",VUr),k(r,"pareto1",UUr),k(r,"poisson",HUr),k(r,"rayleigh",WUr),k(r,"t",zUr),k(r,"triangular",DUr),k(r,"uniform",XUr),k(r,"weibull",JUr),r.base={},k(r.base,"normalizeSeed",xUr),r}dJ.exports=YUr});var yJ=s((f8e,qJ)=>{"use strict";var ZUr=_(),su=O(),$Ur=Ur().isPrimitive,QUr=ee().isPrimitive,KUr=Ve().isPrimitive,rHr=Go().isPrimitive,Wn=y();function eHr(r,e){return ZUr(e)?su(e,"period")&&(r.period=e.period,!QUr(e.period))?new TypeError(Wn("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):su(e,"amplitude")&&(r.amplitude=e.amplitude,!rHr(e.amplitude))?new TypeError(Wn("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):su(e,"offset")&&(r.offset=e.offset,!$Ur(e.offset))?new TypeError(Wn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):su(e,"iter")&&(r.iter=e.iter,!KUr(e.iter))?new TypeError(Wn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(Wn("invalid argument. Options argument must be an object. Value: `%s`.",e))}qJ.exports=eHr});var NJ=s((c8e,EJ)=>{"use strict";var E6=w(),bJ=na(),tHr=c3(),iHr=Xa(),nHr=Da(),aHr=Fr(),sHr=yJ();function wJ(r){var e,t,i,n,a,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=sHr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=aHr/e.period,o=e.amplitude/nHr,f=0,t={},E6(t,"next",v),E6(t,"return",c),bJ&&E6(t,bJ,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*iHr(tHr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return wJ(e)}}EJ.exports=wJ});var OJ=s((l8e,AJ)=>{"use strict";var uHr=NJ();AJ.exports=uHr});var TJ=s((p8e,SJ)=>{"use strict";var oHr=ar(),vHr=OJ();function fHr(r){return oHr(r,"iterSawtoothWave",vHr),r}SJ.exports=fHr});var _J=s((g8e,IJ)=>{"use strict";var cHr=17976931348623157e292;IJ.exports=cHr});var uu=s((m8e,LJ)=>{"use strict";var lHr=709.782712893384;LJ.exports=lHr});var RJ=s((d8e,PJ)=>{"use strict";var pHr=nr();function gHr(r,e){var t,i,n,a;if(n=pHr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}PJ.exports=gHr});var MJ=s((h8e,FJ)=>{"use strict";function mHr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}FJ.exports=mHr});var kJ=s((q8e,BJ)=>{"use strict";function dHr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}BJ.exports=dHr});var CJ=s((y8e,jJ)=>{"use strict";function hHr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}jJ.exports=hHr});var VJ=s((b8e,GJ)=>{"use strict";function qHr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}GJ.exports=qHr});var HJ=s((w8e,UJ)=>{"use strict";function yHr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}UJ.exports=yHr});var zJ=s((E8e,WJ)=>{"use strict";function bHr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}WJ.exports=bHr});var XJ=s((N8e,DJ)=>{"use strict";function wHr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}DJ.exports=wHr});var xJ=s((A8e,JJ)=>{"use strict";function EHr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}JJ.exports=EHr});var QJ=s((O8e,$J)=>{"use strict";var NHr=E(),YJ=nr(),AHr=ie(),OHr=I(),SHr=G(),THr=MJ(),IHr=kJ(),_Hr=CJ(),LHr=VJ(),PHr=HJ(),RHr=zJ(),FHr=XJ(),MHr=xJ(),ou=1e-300,BHr=13877787807814457e-33,ZJ=.8450629115104675,kHr=.12837916709551256,jHr=1,CHr=-.0023621185607526594,GHr=1,VHr=-.009864944034847148,UHr=1,HHr=-.0098649429247001,WHr=1;function zHr(r){var e,t,i,n,a,u,o,f;if(NHr(r))return NaN;if(r===OHr)return 0;if(r===SHr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<BHr?1-r:(i=r*r,n=kHr+i*THr(i),a=jHr+i*IHr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=CHr+a*_Hr(a),f=GHr+a*LHr(a),e?1+ZJ+o/f:1-ZJ-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=VHr+a*PHr(a),a=UHr+a*RHr(a);else{if(r<-6)return 2-ou;n=HHr+a*FHr(a),a=WHr+a*MHr(a)}return i=AHr(t,0),n=YJ(-(i*i)-.5625)*YJ((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-ou:ou*ou}$J.exports=zHr});var Ht=s((S8e,KJ)=>{"use strict";var DHr=QJ();KJ.exports=DHr});var tx=s((T8e,ex)=>{"use strict";var XHr=Ht(),rx=V(),JHr=nr(),xHr=Fr();function YHr(r,e){var t,i,n,a,u;if(a=XHr(rx(e)),a!==0&&r>1){for(i=JHr(-e)/rx(xHr*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}ex.exports=YHr});var N6=s((I8e,ix)=>{"use strict";var ZHr=-708.3964185322641;ix.exports=ZHr});var ux=s((_8e,sx)=>{"use strict";var Vi=nr(),vu=W(),$Hr=R(),nx=uu(),ax=N6();function QHr(r,e){var t,i;return i=r*$Hr(e),e>=1?i<nx&&-e>ax?t=vu(e,r)*Vi(-e):r>=1?t=vu(e/Vi(e/r),r):t=Vi(i-e):i>ax?t=vu(e,r)*Vi(-e):e/r<nx?t=vu(e/Vi(e/r),r):t=Vi(i-e),t}sx.exports=QHr});var A6=s((L8e,ox)=>{"use strict";function KHr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}ox.exports=KHr});var fx=s((P8e,vx)=>{"use strict";var rWr=Function;vx.exports=rWr});var lx=s((R8e,cx)=>{"use strict";var eWr=fx();cx.exports=eWr});var gx=s((F8e,px)=>{"use strict";var tWr=lx(),iWr=A6();function nWr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new tWr(e)();function a(u){return iWr(r,u)}}px.exports=nWr});var hx=s((M8e,dx)=>{"use strict";var aWr=w(),mx=A6(),sWr=gx();aWr(mx,"factory",sWr);dx.exports=mx});var Wt=s((B8e,qx)=>{"use strict";var uWr=2220446049250313e-31;qx.exports=uWr});var bx=s((k8e,yx)=>{"use strict";var oWr=eval;yx.exports=oWr});var Ex=s((j8e,wx)=>{"use strict";var vWr=bx();function fWr(){var r;try{vWr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}wx.exports=fWr});var O6=s((C8e,Nx)=>{"use strict";var cWr=Ex();Nx.exports=cWr});var Ox=s((G8e,Ax)=>{"use strict";var fu=J(),lWr=Wt(),pWr=1e6;function gWr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||lWr,a=o.maxTerms||pWr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,fu(i*u)>=fu(n)||--a===0)break}else do n=r(),u+=n;while(fu(i*u)<fu(n)&&--a);return u}Ax.exports=gWr});var Ix=s((V8e,Tx)=>{"use strict";var Sx=J(),mWr=Wt(),dWr=1e6;function hWr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||mWr,n=u.maxTerms||dWr,a=u.initialValue||0;do i=r(),a+=i;while(Sx(t*a)<Sx(i)&&--n);return a}Tx.exports=hWr});var cu=s((U8e,_x)=>{"use strict";var qWr=O6(),yWr=Ox(),bWr=Ix(),S6;qWr()?S6=yWr:S6=bWr;_x.exports=S6});var Px=s((H8e,Lx)=>{"use strict";function wWr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}Lx.exports=wWr});var Fx=s((W8e,Rx)=>{"use strict";var EWr=J(),NWr=R(),AWr=Wt(),OWr=cu(),SWr=Px();function TWr(r){var e,t;return r<=-1?NaN:(t=EWr(r),t>.95?NWr(1+r)-r:t<AWr?-r*r/2:(e={initialValue:-r},OWr(SWr(r),e)))}Rx.exports=TWr});var Bx=s((z8e,Mx)=>{"use strict";var IWr=Fx();Mx.exports=IWr});var jx=s((D8e,kx)=>{"use strict";function _Wr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}kx.exports=_Wr});var Gx=s((X8e,Cx)=>{"use strict";function LWr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}Cx.exports=LWr});var Ux=s((J8e,Vx)=>{"use strict";function PWr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Vx.exports=PWr});var Wx=s((x8e,Hx)=>{"use strict";function RWr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Hx.exports=RWr});var Dx=s((Y8e,zx)=>{"use strict";function FWr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}zx.exports=FWr});var Jx=s((Z8e,Xx)=>{"use strict";function MWr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Xx.exports=MWr});var Yx=s(($8e,xx)=>{"use strict";function BWr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}xx.exports=BWr});var $x=s((Q8e,Zx)=>{"use strict";function kWr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Zx.exports=kWr});var Kx=s((K8e,Qx)=>{"use strict";function jWr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Qx.exports=jWr});var eY=s((rle,rY)=>{"use strict";var CWr=hx(),GWr=Bx(),VWr=Ht(),T6=V(),UWr=nr(),HWr=Ze(),WWr=jx(),zWr=Gx(),DWr=Ux(),XWr=Wx(),JWr=Dx(),xWr=Jx(),YWr=Yx(),ZWr=$x(),$Wr=Kx(),zr=[0,0,0,0,0,0,0,0,0,0];function QWr(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-GWr(i),a=r*n,u=T6(2*n),e<r&&(u=-u),zr[0]=WWr(u),zr[1]=zWr(u),zr[2]=DWr(u),zr[3]=XWr(u),zr[4]=JWr(u),zr[5]=xWr(u),zr[6]=YWr(u),zr[7]=ZWr(u),zr[8]=$Wr(u),zr[9]=-.0005967612901927463,t=CWr(zr,1/r),t*=UWr(-a)/T6(HWr*r),e<r&&(t=-t),t+=VWr(T6(a))/2,t}rY.exports=QWr});var iY=s((ele,tY)=>{"use strict";function KWr(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}tY.exports=KWr});var aY=s((tle,nY)=>{"use strict";var rzr=cu(),ezr=iY();function tzr(r,e,t){var i,n;return t=t||0,n=ezr(r,e),i=rzr(n,{initialValue:t}),i}nY.exports=tzr});var uY=s((ile,sY)=>{"use strict";function izr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}sY.exports=izr});var vY=s((nle,oY)=>{"use strict";var nzr=uY();oY.exports=nzr});var cY=s((ale,fY)=>{"use strict";var azr=vY();fY.exports=azr});var gY=s((sle,pY)=>{"use strict";var szr=y1(),lY=E(),I6=G();function uzr(r,e){return lY(r)||lY(e)?NaN:r===I6||e===I6?I6:r===e&&r===0?szr(r)?r:e:r<e?r:e}pY.exports=uzr});var dY=s((ule,mY)=>{"use strict";var ozr=gY();mY.exports=ozr});var qY=s((ole,hY)=>{"use strict";var vzr=10.900511;hY.exports=vzr});var _6=s((vle,yY)=>{"use strict";var fzr=2.718281828459045;yY.exports=fzr});var EY=s((fle,wY)=>{"use strict";var czr=cY(),lzr=Pn(),pzr=hi(),gzr=xe(),mzr=V(),dzr=J(),bt=nr(),zn=W(),L6=T1(),P6=dY(),bY=R(),lu=uu(),Dn=N6(),R6=qY(),hzr=_6();function qzr(r,e){var t,i,n,a,u,o,f;return n=r+R6-.5,f=(e-r-R6+.5)/n,r<1?e<=Dn?bt(r*bY(e)-e-lzr(r)):zn(e,r)*bt(-e)/pzr(r):(dzr(f*f*r)<=100&&r>150?(t=r*(gzr(f)-f)+e*(.5-R6)/n,t=bt(t)):(a=r*bY(e/n),u=r-e,P6(a,u)<=Dn||L6(a,u)>=lu?(i=u/r,P6(a,u)/2>Dn&&L6(a,u)/2<lu?(o=zn(e/n,r/2)*bt(u/2),t=o*o):P6(a,u)/4>Dn&&L6(a,u)/4<lu&&e>r?(o=zn(e/n,r/4)*bt(u/4),t=o*o,t*=t):i>Dn&&i<lu?t=zn(e*bt(i)/n,r):t=bt(a+u)):t=zn(e/n,r)*bt(u)),t*=mzr(n/hzr)/czr(r),t)}wY.exports=qzr});var AY=s((cle,NY)=>{"use strict";var yzr=.34657359027997264;NY.exports=yzr});var SY=s((lle,OY)=>{"use strict";function bzr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}OY.exports=bzr});var RY=s((ple,PY)=>{"use strict";var wzr=E(),TY=tr(),F6=ne(),Ezr=mi(),IY=I(),Nzr=G(),_Y=Yr(),Azr=AY(),Ozr=SY(),Szr=709.782712893384,M6=.6931471803691238,B6=19082149292705877e-26,LY=1.4426950408889634,Tzr=38.816242111356935,Izr=1.0397207708399179;function _zr(r){var e,t,i,n,a,u,o,f,v,c,l,p,m;if(r===IY||wzr(r))return r;if(r===Nzr)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=Tzr){if(i)return-1;if(f>=Szr)return IY}if(u=TY(f)|0,f>Azr)f<Izr?i?(n=r+M6,a=-B6,m=-1):(n=r-M6,a=B6,m=1):(i?m=LY*r-.5:m=LY*r+.5,m|=0,l=m,n=r-l*M6,a=l*B6),r=n-a,c=n-r-a;else{if(u<1016070144)return r;m=0}return e=.5*r,v=r*e,o=1+v*Ozr(v),l=3-o*e,p=v*((o-l)/(6-r*l)),m===0?r-(r*p-v):(t=Ezr(_Y+m<<20,0),p=r*(p-c)-c,p-=v,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(f=1-(p-r),m===1024?(n=TY(f)+(m<<20)|0,f=F6(f,n)):f*=t,f-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=F6(l,n),f=l-(p-r)):(n=_Y-m<<20|0,l=F6(l,n),f=r-(p+l),f+=1),f*=t,f))}PY.exports=_zr});var k6=s((gle,FY)=>{"use strict";var Lzr=RY();FY.exports=Lzr});var jY=s((mle,kY)=>{"use strict";var MY=E(),BY=J(),Pzr=k6(),Rzr=R(),Fzr=W(),Mzr=t0();function Bzr(r,e){var t;if(MY(r)||MY(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((BY(e*(r-1))<.5||BY(e)<.2)&&(t=Rzr(r)*e,t<.5))return Pzr(t)}else if(Mzr(e)!==e)return NaN;return Fzr(r,e)-1}kY.exports=Bzr});var GY=s((dle,CY)=>{"use strict";var kzr=jY();CY.exports=kzr});var UY=s((hle,VY)=>{"use strict";function jzr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}VY.exports=jzr});var WY=s((qle,HY)=>{"use strict";function Czr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}HY.exports=Czr});var DY=s((yle,zY)=>{"use strict";function Gzr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}zY.exports=Gzr});var JY=s((ble,XY)=>{"use strict";var j6=R(),Vzr=Wt(),Uzr=UY(),Hzr=WY(),Wzr=DY(),zzr=.15896368026733398,Dzr=.5281534194946289,Xzr=.45201730728149414;function Jzr(r,e,t){var i,n,a,u;if(r<Vzr)return-j6(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=j6(r);while(r>=3);t=r-2}return a=t*(r+1),u=Uzr(t),n+=a*zzr+a*u,n}return r<1&&(n+=-j6(r),t=e,e=r,r+=1),r<=1.5?(a=Hzr(e),i=e*t,n+=i*Dzr+i*a,n):(a=t*e,u=Wzr(-t),n+=a*Xzr+a*u,n)}XY.exports=Jzr});var QY=s((wle,$Y)=>{"use strict";var xY=hi(),YY=k6(),xzr=xe(),Yzr=E(),ZY=JY();function Zzr(r){return Yzr(r)?NaN:r<0?r<-.5?xY(1+r)-1:YY(-xzr(r)+ZY(r+2,r+1,r)):r<2?YY(ZY(r+1,r,r-1)):xY(1+r)-1}$Y.exports=Zzr});var rZ=s((Ele,KY)=>{"use strict";var $zr=QY();KY.exports=$zr});var tZ=s((Nle,eZ)=>{"use strict";function Qzr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}eZ.exports=Qzr});var nZ=s((Ale,iZ)=>{"use strict";var Kzr=GY(),rDr=cu(),eDr=rZ(),tDr=tZ();function iDr(r,e,t){var i,n,a,u,o;return n=eDr(r),a=(n+1)/r,u=Kzr(e,r),n-=u,n/=r,o=tDr(r,e),u+=1,i=t?a:0,n=-u*rDr(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}iZ.exports=iDr});var C6=s((Ole,aZ)=>{"use strict";var nDr=11754943508222875e-54;aZ.exports=nDr});var uZ=s((Sle,sZ)=>{"use strict";var pu=J(),$r=C6(),aDr=Wt(),sDr=1e6;function uDr(r,e,t){var i,n,a,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],a=v[0],u===0&&(u=$r),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=$r),o=v[1]+v[0]/o,o===0&&(o=$r),f=1/f,n=o*f,u*=n);while(pu(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=$r),o=v[1]+v[0]/o,o===0&&(o=$r),f=1/f,n=o*f,u*=n);while(v&&pu(n-1)>e&&--t);return a/u}function oDr(r,e,t){var i,n,a,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=$r),u=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=$r),u=f[1]+f[0]/u,u===0&&(u=$r),o=1/o,n=u*o,a*=n);while(f&&pu(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=$r),u=f[1]+f[0]/u,u===0&&(u=$r),o=1/o,n=u*o,a*=n);while(f&&pu(n-1)>e&&--t);return a}function vDr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||sDr,n=i.tolerance||aDr,i.keep?oDr(r,n,t):uDr(r,n,t)}sZ.exports=vDr});var fZ=s((Tle,vZ)=>{"use strict";var oZ=J(),fDr=Wt(),Ui=C6(),cDr=1e6;function lDr(r,e,t){var i,n,a,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=Ui),a=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=Ui),a=f[1]+f[0]/a,a===0&&(a=Ui),u=1/u,i=a*u,o*=i);while(f&&oZ(i-1)>e&&--t);return n/o}function pDr(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=Ui),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=Ui),n=o[1]+o[0]/n,n===0&&(n=Ui),a=1/a,i=n*a,u*=i);while(o&&oZ(i-1)>e&&--t);return u}function gDr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||fDr,t=i.maxIter||cDr,i.keep?pDr(r,n,t):lDr(r,n,t)}vZ.exports=gDr});var lZ=s((Ile,cZ)=>{"use strict";var mDr=O6(),dDr=uZ(),hDr=fZ(),G6;mDr()?G6=dDr:G6=hDr;cZ.exports=G6});var gZ=s((_le,pZ)=>{"use strict";function qDr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}pZ.exports=qDr});var dZ=s((Lle,mZ)=>{"use strict";var yDr=lZ(),bDr=gZ();function wDr(r,e){var t=bDr(r,e);return 1/(e-r+1+yDr(t))}mZ.exports=wDr});var SZ=s((Ple,OZ)=>{"use strict";var EDr=Pn(),NDr=x(),Xn=hi(),hZ=J(),ADr=nr(),qZ=W(),Dr=R(),ODr=N1(),yZ=_J(),SDr=b1(),bZ=uu(),TDr=I(),IDr=RJ(),_Dr=tx(),wZ=ux(),LDr=eY(),V6=aY(),EZ=EY(),PDr=nZ(),NZ=dZ(),RDr=170;function AZ(r,e,t,i){var n,a,u,o,f,v,c,l,p,m,h,d,g,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=RDr&&!a)return l&&e*4<r?(p=e*Dr(r)-r,p+=Dr(NZ(e,r))):!l&&e>4*r?(p=e*Dr(r)-r,o=0,p+=Dr(V6(e,r,o)/e)):(p=AZ(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Dr(p)-e+(e-.5)*Dr(e),p+=Dr(SDr)):(p=e*Dr(r)-r,o=0,p+=Dr(V6(e,r,o)/e)):p=Dr(p)+EDr(e)),p>bZ?TDr:ADr(p);switch(c=e<30&&e<=r+1&&r<bZ,c?(q=NDr(e),m=q===e,f=m?!1:hZ(q-e)===.5):m=f=!1,m&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<ODr&&e>1?u=6:r<.5?-.4/Dr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,a&&e>20&&(h=hZ((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=IDr(e,r),a===!1&&(p*=Xn(e));break;case 1:p=_Dr(e,r),a===!1&&(p*=Xn(e));break;case 2:p=a?EZ(e,r):wZ(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:Xn(e),a||p>=1||yZ*p>o?(o/=p,a||e<1||yZ/e>o?(o*=-e,n=!0):o=0):o=0)),p*=V6(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=PDr(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?EZ(e,r):wZ(e,r),p!==0&&(p*=NZ(e,r));break;case 5:p=LDr(e,r),r>=e&&(l=!l);break;case 6:p=a?qZ(r,e)/Xn(e+1):qZ(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:Xn(e),p=d-p),p}OZ.exports=AZ});var U6=s((Rle,TZ)=>{"use strict";var FDr=SZ();TZ.exports=FDr});var _Z=s((Fle,IZ)=>{"use strict";var MDr=U6(),H6=E(),BDr=I();function kDr(r,e,t){return H6(r)||H6(e)||H6(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===BDr?1:MDr(r*t,e)}IZ.exports=kDr});var RZ=s((Mle,PZ)=>{"use strict";var jDr=T(),CDr=C0().factory,GDr=U6(),LZ=E(),VDr=I();function UDr(r,e){if(LZ(r)||LZ(e)||r<0||e<=0)return jDr(NaN);if(r===0)return CDr(0);return t;function t(i){return i<=0?0:i===VDr?1:GDr(i*e,r)}}PZ.exports=UDr});var W6=s((Ble,MZ)=>{"use strict";var HDr=w(),FZ=_Z(),WDr=RZ();HDr(FZ,"factory",WDr);MZ.exports=FZ});var kZ=s((kle,BZ)=>{"use strict";var zDr=W6();function DDr(r,e){return zDr(r,e/2,.5)}BZ.exports=DDr});var CZ=s((jle,jZ)=>{"use strict";var XDr=W6().factory;function JDr(r){return XDr(r/2,.5)}jZ.exports=JDr});var UZ=s((Cle,VZ)=>{"use strict";var xDr=w(),GZ=kZ(),YDr=CZ();xDr(GZ,"factory",YDr);VZ.exports=GZ});var DZ=s((Gle,zZ)=>{"use strict";var ZDr=_(),$Dr=O(),QDr=qa(),HZ=y(),WZ=["values","indices","*"];function KDr(r,e){return ZDr(e)?$Dr(e,"returns")&&(r.returns=e.returns,QDr(WZ,r.returns)===-1)?new TypeError(HZ('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",WZ.join('", "'),r.returns)):null:new TypeError(HZ("invalid argument. Options argument must be an object. Value: `%s`.",e))}zZ.exports=KDr});var JZ=s((Vle,XZ)=>{"use strict";var rXr=O();function eXr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),rXr(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}XZ.exports=eXr});var YZ=s((Ule,xZ)=>{"use strict";var tXr=O();function iXr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),tXr(t,n)?t[n].push(a):t[n]=[a];return t}xZ.exports=iXr});var $Z=s((Hle,ZZ)=>{"use strict";var nXr=O();function aXr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),nXr(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}ZZ.exports=aXr});var e$=s((Wle,r$)=>{"use strict";var QZ=Vr(),KZ=y(),sXr=DZ(),uXr=JZ(),oXr=YZ(),vXr=$Z();function fXr(r,e,t){var i,n,a;if(!QZ(r))throw new TypeError(KZ("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=sXr(i,e),n)throw n;a=t}if(!QZ(a))throw new TypeError(KZ("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?uXr(r,a):i.returns==="indices"?oXr(r,a):vXr(r,a)}r$.exports=fXr});var i$=s((zle,t$)=>{"use strict";var cXr=e$();t$.exports=cXr});var a$=s((Dle,n$)=>{"use strict";function lXr(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}n$.exports=lXr});var o$=s((Xle,u$)=>{"use strict";var pXr=lr(),gXr=j().isPrimitive,mXr=_(),dXr=or(),s$=O(),z6=y();function hXr(r,e){return mXr(e)?s$(e,"alpha")&&(r.alpha=e.alpha,!gXr(r.alpha)||dXr(r.alpha))?new TypeError(z6("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):s$(e,"groups")&&(r.groups=e.groups,!pXr(r.groups))?new TypeError(z6("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(z6("invalid argument. Options argument must be an object. Value: `%s`.",e))}u$.exports=hXr});var m$=s((Jle,g$)=>{"use strict";var v$=E(),gu=Rr(),f$=W(),qXr=J(),c$=i1(),yXr=di(),l$=ka(),bXr=z2(),wXr=ja(),EXr=yXr+1,p$=1e308;function NXr(r,e){var t,i;return v$(r)||v$(e)||gu(e)?NaN:gu(r)||r===0||e<wXr||qXr(r)>EXr&&e<=0?r:e>l$?0*r:e<bXr?(t=f$(10,-(e+l$)),i=r*p$*t,gu(i)?r:c$(i)/p$/t):(t=f$(10,-e),i=r*t,gu(i)?r:c$(i)/t)}g$.exports=NXr});var h$=s((xle,d$)=>{"use strict";var AXr=m$();d$.exports=AXr});var b$=s((Yle,y$)=>{"use strict";var OXr=ee(),SXr=_(),TXr=cr().isPrimitive,q$=O(),D6=y(),X6=h$();function IXr(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!SXr(r))throw new TypeError(D6("invalid argument. First argument must be an object. Value: `%s`.",r));if(q$(r,"digits")){if(!OXr(r.digits))throw new TypeError(D6("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(q$(r,"decision")){if(!TXr(r.decision))throw new TypeError(D6("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+X6(this.pValue,-t)+`
`,i+="    statistic: "+X6(this.statistic,-t)+`
`,i+="    df: "+X6(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}y$.exports=IXr});var N$=s((Zle,E$)=>{"use strict";var _Xr=Vr(),LXr=_(),zt=ar(),PXr=un(),mu=y(),RXr=UZ(),FXr=i$(),w$=R(),MXr=a$(),BXr=o$(),kXr=b$();function jXr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A;if(f=[],e=arguments.length,v={},LXr(arguments[e-1])&&(r=arguments[e-1],e-=1,m=BXr(v,r),m))throw m;if(v.groups){if(n=FXr(arguments[0],v.groups),i=PXr(n),e=i.length,e<2)throw new Error(mu("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)f.push(n[i[A]])}else for(A=0;A<e;A++)f.push(arguments[A]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),A=0;A<e;A++){if(p=f[A],!_Xr(p))throw new TypeError(mu("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(mu("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[A]=p.length-1,u+=q[A],t+=1/q[A],N[A]=MXr(p),o+=q[A]*N[A],h+=q[A]*w$(N[A])}if(o/=u,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(mu("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*w$(o)-h,l/=1+(t-1/u)/(3*(e-1)),g=e-1,c=1-RXr(l,g),d={},zt(d,"rejected",c<=a),zt(d,"alpha",a),zt(d,"pValue",c),zt(d,"statistic",l),zt(d,"df",g),zt(d,"method","Bartlett's test of equal variances"),zt(d,"print",kXr),d}E$.exports=jXr});var O$=s(($le,A$)=>{"use strict";var CXr=N$();A$.exports=CXr});var T$=s((Qle,S$)=>{"use strict";var J6=E(),GXr=$e();function VXr(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,v=1,J6(a)===!1)for(v;v<r;v++){if(u+=t,f=e[u],J6(f)){a=f;break}(f>a||f===a&&GXr(f))&&(a=f),i[o]=a,o+=n}if(J6(a))for(v;v<r;v++)i[o]=a,o+=n;return i}S$.exports=VXr});var _$=s((Kle,I$)=>{"use strict";var x6=E(),UXr=$e();function HXr(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=a,l=1,x6(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],x6(c)){o=c;break}(c>o||c===o&&UXr(c))&&(o=c),n[v]=o,v+=a}if(x6(o))for(l;l<r;l++)n[v]=o,v+=a;return n}I$.exports=HXr});var R$=s((r7e,P$)=>{"use strict";var WXr=w(),L$=T$(),zXr=_$();WXr(L$,"ndarray",zXr);P$.exports=L$});var M$=s((e7e,F$)=>{"use strict";var DXr=R$();F$.exports=DXr});var k$=s((t7e,B$)=>{"use strict";var XXr=E(),JXr=$e();function xXr(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],XXr(a))return a;(a>i||a===i&&JXr(a))&&(i=a)}return i}B$.exports=xXr});var C$=s((i7e,j$)=>{"use strict";var YXr=E(),ZXr=$e();function $Xr(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],YXr(u))return u;(u>n||u===n&&ZXr(u))&&(n=u)}return n}j$.exports=$Xr});var U$=s((n7e,V$)=>{"use strict";var QXr=w(),G$=k$(),KXr=C$();QXr(G$,"ndarray",KXr);V$.exports=G$});var W$=s((a7e,H$)=>{"use strict";var rJr=U$();H$.exports=rJr});var X$=s((s7e,D$)=>{"use strict";var z$=E(),eJr=$e();function tJr(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(a=e[u],z$(a))return a;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],z$(f))return f;(f>a||f===a&&eJr(f))&&(a=f)}return a}D$.exports=tJr});var Y$=s((u7e,x$)=>{"use strict";var J$=E(),iJr=$e();function nJr(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],J$(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],J$(c))return c;(c>o||c===o&&iJr(c))&&(o=c)}return o}x$.exports=nJr});var Q$=s((o7e,$$)=>{"use strict";var aJr=w(),Z$=X$(),sJr=Y$();aJr(Z$,"ndarray",sJr);$$.exports=Z$});var rQ=s((v7e,K$)=>{"use strict";var uJr=Ht(),oJr=V(),Y6=E();function vJr(r,e,t){var i,n;return Y6(r)||Y6(e)||Y6(t)||t<0?NaN:t===0?r<e?0:1:(i=t*oJr(2),n=r-e,.5*uJr(-n/i))}K$.exports=vJr});var tQ=s((f7e,eQ)=>{"use strict";var fJr=T(),cJr=C0().factory,Z6=E(),lJr=V(),pJr=Ht();function gJr(r,e){var t;if(Z6(r)||Z6(e)||e<0)return fJr(NaN);if(e===0)return cJr(r);return t=e*lJr(2),i;function i(n){var a;return Z6(n)?NaN:(a=n-r,.5*pJr(-a/t))}}eQ.exports=gJr});var aQ=s((c7e,nQ)=>{"use strict";var mJr=w(),iQ=rQ(),dJr=tQ();mJr(iQ,"factory",dJr);nQ.exports=iQ});var oQ=s((l7e,uQ)=>{"use strict";var sQ=E(),hJr=R(),qJr=Ze(),yJr=_6();function bJr(r,e){return sQ(r)||sQ(e)||e<=0?NaN:.5*hJr(qJr*yJr*e*e)}uQ.exports=bJr});var fQ=s((p7e,vQ)=>{"use strict";var wJr=oQ();vQ.exports=wJr});var pQ=s((g7e,lQ)=>{"use strict";var cQ=E();function EJr(r,e){return cQ(r)||cQ(e)||e<=0?NaN:0}lQ.exports=EJr});var mQ=s((m7e,gQ)=>{"use strict";var NJr=pQ();gQ.exports=NJr});var hQ=s((d7e,dQ)=>{"use strict";var AJr=x(),OJr=[SJr,TJr,IJr,_Jr,LJr,PJr,RJr,FJr,MJr,BJr,kJr,jJr,CJr,GJr,VJr,UJr,HJr,WJr,zJr,DJr,XJr,JJr,xJr,YJr,ZJr,$Jr,QJr,KJr,rxr,exr,txr,ixr,nxr,axr,sxr,uxr,oxr,vxr,fxr,cxr,lxr,pxr,gxr,mxr,dxr,hxr,qxr,yxr,bxr,wxr,Exr,Nxr,Axr,Oxr,Sxr,Txr,Ixr,_xr,Lxr,Pxr,Rxr,Fxr,Mxr,Bxr,kxr,jxr,Cxr,Gxr,Vxr,Uxr,Hxr,Wxr,zxr,Dxr,Xxr,Jxr,xxr,Yxr,Zxr,$xr,Qxr,Kxr,rYr,eYr,tYr,iYr,nYr,aYr,sYr,uYr,oYr,vYr,fYr,cYr,lYr,pYr,gYr,mYr,dYr,hYr,qYr];function SJr(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function TJr(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function IJr(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function _Jr(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function LJr(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function PJr(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function RJr(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function FJr(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function MJr(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function BJr(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function kJr(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function jJr(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function CJr(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function GJr(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function VJr(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function UJr(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function HJr(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function WJr(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function zJr(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function DJr(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function XJr(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function JJr(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function xJr(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function YJr(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function ZJr(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function $Jr(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function QJr(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function KJr(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function rxr(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function exr(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function txr(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function ixr(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function nxr(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function axr(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function sxr(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function uxr(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function oxr(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function vxr(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function fxr(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function cxr(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function lxr(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function pxr(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function gxr(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function mxr(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function dxr(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function hxr(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function qxr(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function yxr(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function bxr(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function wxr(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function Exr(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function Nxr(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function Axr(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function Oxr(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function Sxr(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function Txr(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function Ixr(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function _xr(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function Lxr(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function Pxr(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function Rxr(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function Fxr(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function Mxr(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function Bxr(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function kxr(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function jxr(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function Cxr(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function Gxr(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function Vxr(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function Uxr(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function Hxr(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function Wxr(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function zxr(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function Dxr(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function Xxr(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function Jxr(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function xxr(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function Yxr(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function Zxr(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function $xr(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function Qxr(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function Kxr(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function rYr(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function eYr(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function tYr(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function iYr(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function nYr(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function aYr(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function sYr(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function uYr(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function oYr(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function vYr(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function fYr(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function cYr(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function lYr(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function pYr(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function gYr(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function mYr(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function dYr(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function hYr(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function qYr(){return 1}function yYr(r){var e=AJr(r),t=OJr[e];return t(2*r-(2*e+1))}dQ.exports=yYr});var EQ=s((h7e,wQ)=>{"use strict";var qQ=nr(),bYr=I(),yQ=hQ(),bQ=.5641895835477563;function wYr(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?bQ/r:(e=r*r,bQ*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):yQ(400/(4+r)):r<-26.7?bYr:(e=r*r,r<-6.1?2*qQ(e):2*qQ(e)-yQ(400/(4-r)))}wQ.exports=wYr});var $6=s((q7e,NQ)=>{"use strict";var EYr=EQ();NQ.exports=EYr});var SQ=s((y7e,OQ)=>{"use strict";var NYr=R(),AYr=xe(),OYr=Ua(),SYr=Ht(),TYr=$6(),IYr=G(),Q6=E(),AQ=.7071067811865475;function _Yr(r,e,t){var i;return Q6(r)||Q6(e)||Q6(t)||t<0?NaN:t===0?r<e?IYr:0:(i=(r-e)/t,i<-1?NYr(TYr(-i*AQ)/2)-OYr(i)/2:AYr(-SYr(i*AQ)/2))}OQ.exports=_Yr});var _Q=s((b7e,IQ)=>{"use strict";var TQ=E(),LYr=G();function PYr(r,e){return TQ(r)||TQ(e)?NaN:r<e?LYr:0}IQ.exports=PYr});var RQ=s((w7e,PQ)=>{"use strict";var RYr=T(),LQ=E(),FYr=G();function MYr(r){if(LQ(r))return RYr(NaN);return e;function e(t){return LQ(t)?NaN:t<r?FYr:0}}PQ.exports=MYr});var BQ=s((E7e,MQ)=>{"use strict";var BYr=w(),FQ=_Q(),kYr=RQ();BYr(FQ,"factory",kYr);MQ.exports=FQ});var GQ=s((N7e,CQ)=>{"use strict";var jYr=T(),CYr=BQ().factory,kQ=E(),GYr=xe(),VYr=Ua(),UYr=Ht(),HYr=$6(),WYr=R(),jQ=.7071067811865475;function zYr(r,e){if(kQ(r)||kQ(e)||e<0)return jYr(NaN);if(e===0)return CYr(r);return t;function t(i){var n=(i-r)/e;return n<-1?WYr(HYr(-n*jQ)/2)-VYr(n)/2:GYr(-UYr(n*jQ)/2)}}CQ.exports=zYr});var HQ=s((A7e,UQ)=>{"use strict";var DYr=w(),VQ=SQ(),XYr=GQ();DYr(VQ,"factory",XYr);UQ.exports=VQ});var K6=s((O7e,WQ)=>{"use strict";var JYr=1.8378770664093456;WQ.exports=JYr});var XQ=s((S7e,DQ)=>{"use strict";var xYr=R(),zQ=W(),YYr=K6(),ZYr=G(),$Yr=I(),r4=E();function QYr(r,e,t){var i,n,a;return r4(r)||r4(e)||r4(t)||t<0?NaN:t===0?r===e?$Yr:ZYr:(i=zQ(t,2),n=-.5*(2*xYr(t)+YYr),a=-1/(2*i),n+a*zQ(r-e,2))}DQ.exports=QYr});var YQ=s((T7e,xQ)=>{"use strict";var KYr=I(),rZr=G(),JQ=E();function eZr(r,e){return JQ(r)||JQ(e)?NaN:r===e?KYr:rZr}xQ.exports=eZr});var QQ=s((I7e,$Q)=>{"use strict";var tZr=T(),iZr=I(),nZr=G(),ZQ=E();function aZr(r){if(ZQ(r))return tZr(NaN);return e;function e(t){return ZQ(t)?NaN:t===r?iZr:nZr}}$Q.exports=aZr});var eK=s((_7e,rK)=>{"use strict";var sZr=w(),KQ=YQ(),uZr=QQ();sZr(KQ,"factory",uZr);rK.exports=KQ});var aK=s((L7e,nK)=>{"use strict";var oZr=T(),vZr=eK().factory,fZr=K6(),tK=E(),iK=W(),cZr=R();function lZr(r,e){var t,i,n;if(tK(r)||tK(e)||e<0)return oZr(NaN);if(e===0)return vZr(r);return t=iK(e,2),i=-.5*(2*cZr(e)+fZr),n=-1/(2*t),a;function a(u){return i+n*iK(u-r,2)}}nK.exports=lZr});var oK=s((P7e,uK)=>{"use strict";var pZr=w(),sK=XQ(),gZr=aK();pZr(sK,"factory",gZr);uK.exports=sK});var cK=s((R7e,fK)=>{"use strict";var vK=E();function mZr(r,e){return vK(r)||vK(e)||e<=0?NaN:r}fK.exports=mZr});var pK=s((F7e,lK)=>{"use strict";var dZr=cK();lK.exports=dZr});var dK=s((M7e,mK)=>{"use strict";var gK=E();function hZr(r,e){return gK(r)||gK(e)||e<=0?NaN:r}mK.exports=hZr});var qK=s((B7e,hK)=>{"use strict";var qZr=dK();hK.exports=qZr});var bK=s((k7e,yK)=>{"use strict";var e4=E(),yZr=nr(),bZr=W();function wZr(r,e,t){return e4(r)||e4(e)||e4(t)||t<=0?NaN:yZr(e*r+.5*bZr(t*r,2))}yK.exports=wZr});var EK=s((j7e,wK)=>{"use strict";var EZr=T(),t4=E(),NZr=nr(),AZr=W();function OZr(r,e){if(t4(r)||t4(e)||e<=0)return EZr(NaN);return t;function t(i){return t4(i)?NaN:NZr(r*i+.5*AZr(e*i,2))}}wK.exports=OZr});var OK=s((C7e,AK)=>{"use strict";var SZr=w(),NK=bK(),TZr=EK();SZr(NK,"factory",TZr);AK.exports=NK});var IK=s((G7e,TK)=>{"use strict";var SK=E();function IZr(r,e){return SK(r)||SK(e)||e<=0?NaN:r}TK.exports=IZr});var LK=s((V7e,_K)=>{"use strict";var _Zr=IK();_K.exports=_Zr});var FK=s((U7e,RK)=>{"use strict";var LZr=nr(),PK=W(),PZr=V(),RZr=Ze(),FZr=I(),i4=E();function MZr(r,e,t){var i,n,a;return i4(r)||i4(e)||i4(t)||t<0?NaN:t===0?r===e?FZr:0:(i=PK(t,2),n=1/PZr(i*RZr),a=-1/(2*i),n*LZr(a*PK(r-e,2)))}RK.exports=MZr});var kK=s((H7e,BK)=>{"use strict";var BZr=I(),MK=E();function kZr(r,e){return MK(r)||MK(e)?NaN:r===e?BZr:0}BK.exports=kZr});var GK=s((W7e,CK)=>{"use strict";var jZr=T(),CZr=I(),jK=E();function GZr(r){if(jK(r))return jZr(NaN);return e;function e(t){return jK(t)?NaN:t===r?CZr:0}}CK.exports=GZr});var HK=s((z7e,UK)=>{"use strict";var VZr=w(),VK=kK(),UZr=GK();VZr(VK,"factory",UZr);UK.exports=VK});var DK=s((D7e,zK)=>{"use strict";var HZr=T(),WZr=HK().factory,n4=E(),zZr=V(),DZr=nr(),WK=W(),XZr=Ze();function JZr(r,e){var t,i,n;if(n4(r)||n4(e)||e<0)return HZr(NaN);if(e===0)return WZr(r);return t=WK(e,2),i=1/zZr(t*XZr),n=-1/(2*t),a;function a(u){return n4(u)?NaN:i*DZr(n*WK(u-r,2))}}zK.exports=JZr});var xK=s((X7e,JK)=>{"use strict";var xZr=w(),XK=FK(),YZr=DK();xZr(XK,"factory",YZr);JK.exports=XK});var $K=s((J7e,ZK)=>{"use strict";var YK=E();function ZZr(r,e){return YK(r)||YK(e)||e<=0?NaN:0}ZK.exports=ZZr});var KK=s((x7e,QK)=>{"use strict";var $Zr=$K();QK.exports=$Zr});var trr=s((Y7e,err)=>{"use strict";var rrr=E();function QZr(r,e){return rrr(r)||rrr(e)||e<=0?NaN:e}err.exports=QZr});var nrr=s((Z7e,irr)=>{"use strict";var KZr=trr();irr.exports=KZr});var urr=s(($7e,srr)=>{"use strict";var arr=E();function r$r(r,e){return arr(r)||arr(e)||e<=0?NaN:e*e}srr.exports=r$r});var vrr=s((Q7e,orr)=>{"use strict";var e$r=urr();orr.exports=e$r});var crr=s((K7e,frr)=>{"use strict";var Sr=ar(),t$r=aQ(),i$r=fQ(),n$r=mQ(),a$r=HQ(),s$r=oK(),u$r=pK(),o$r=qK(),v$r=OK(),f$r=LK(),c$r=xK(),l$r=W3(),p$r=KK(),g$r=nrr(),m$r=vrr();function d$r(r){return Sr(r,"cdf",t$r),Sr(r,"entropy",i$r),Sr(r,"kurtosis",n$r),Sr(r,"logcdf",a$r),Sr(r,"logpdf",s$r),Sr(r,"mean",u$r),Sr(r,"median",o$r),Sr(r,"mgf",v$r),Sr(r,"mode",f$r),Sr(r,"pdf",c$r),Sr(r,"quantile",l$r),Sr(r,"skewness",p$r),Sr(r,"stdev",g$r),Sr(r,"variance",m$r),r}frr.exports=d$r});var prr=s((r9e,lrr)=>{"use strict";var h$r=ar(),q$r=crr();function y$r(r){return h$r(r,"normal",q$r({})),r}lrr.exports=y$r});var mrr=s((e9e,grr)=>{"use strict";var Jn=ar(),b$r=O$(),w$r=M$().ndarray,E$r=W$().ndarray,N$r=Q$().ndarray,A$r=prr();function O$r(r){return Jn(r,"bartlettTest",b$r),Jn(r,"cumax",w$r),Jn(r,"max",E$r),Jn(r,"mskmax",N$r),Jn(r,"dists",A$r({})),r}grr.exports=O$r});var hrr=s((t9e,drr)=>{"use strict";var S$r=er().isPrimitive,T$r=y();function I$r(r){return e;function e(t){if(!S$r(t))throw new TypeError(T$r("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}drr.exports=I$r});var yrr=s((i9e,qrr)=>{"use strict";var _$r=hrr();qrr.exports=_$r});var Nrr=s((n9e,Err)=>{"use strict";var brr=er().isPrimitive,wrr=y();function L$r(r){return e;function e(t,i){if(!brr(t))throw new TypeError(wrr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!brr(i))throw new TypeError(wrr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Err.exports=L$r});var Orr=s((a9e,Arr)=>{"use strict";var P$r=Nrr();Arr.exports=P$r});var Trr=s((s9e,Srr)=>{"use strict";var a4=er().isPrimitive,s4=y();function R$r(r){return e;function e(t,i,n){if(!a4(t))throw new TypeError(s4("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!a4(i))throw new TypeError(s4("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!a4(n))throw new TypeError(s4("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}Srr.exports=R$r});var _rr=s((u9e,Irr)=>{"use strict";var F$r=Trr();Irr.exports=F$r});var Prr=s((o9e,Lrr)=>{"use strict";var u4=ar(),M$r=yrr(),B$r=Orr(),k$r=_rr();function j$r(r){return u4(r,"s_o",M$r),u4(r,"ss_o",B$r),u4(r,"sss_o",k$r),r}Lrr.exports=j$r});var Frr=s((v9e,Rrr)=>{"use strict";function C$r(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}Rrr.exports=C$r});var du=s((f9e,Mrr)=>{"use strict";var G$r=Frr();Mrr.exports=G$r});var krr=s((c9e,Brr)=>{"use strict";function V$r(r){return r.toLowerCase()}Brr.exports=V$r});var Hi=s((l9e,jrr)=>{"use strict";var U$r=krr();jrr.exports=U$r});var Grr=s((p9e,Crr)=>{"use strict";function H$r(r,e,t){return r.replace(e,t)}Crr.exports=H$r});var Dt=s((g9e,Vrr)=>{"use strict";var W$r=Grr();Vrr.exports=W$r});var Hrr=s((m9e,Urr)=>{"use strict";var z$r=typeof String.prototype.trim<"u";Urr.exports=z$r});var o4=s((d9e,Wrr)=>{"use strict";var D$r=String.prototype.trim;Wrr.exports=D$r});var Jrr=s((h9e,Xrr)=>{"use strict";var zrr=o4(),X$r=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,Drr="\u180E";function J$r(){return zrr.call(X$r)===""&&zrr.call(Drr)===Drr}Xrr.exports=J$r});var Yrr=s((q9e,xrr)=>{"use strict";var x$r=Dt(),Y$r=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function Z$r(r){return x$r(r,Y$r,"$1")}xrr.exports=Z$r});var $rr=s((y9e,Zrr)=>{"use strict";var $$r=o4();function Q$r(r){return $$r.call(r)}Zrr.exports=Q$r});var Wi=s((b9e,Qrr)=>{"use strict";var K$r=Hrr(),rQr=Jrr(),eQr=Yrr(),tQr=$rr(),v4;K$r&&rQr()?v4=tQr:v4=eQr;Qrr.exports=v4});var rer=s((w9e,Krr)=>{"use strict";var iQr=du(),nQr=Hi(),hu=Dt(),aQr=Wi(),sQr=/\s+/g,uQr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,oQr=/(?:\s|^)([^\s]+)(?=\s|$)/g,vQr=/([a-z0-9])([A-Z])/g;function fQr(r,e,t){return e=nQr(e),t===0?e:iQr(e)}function cQr(r){return r=hu(r,uQr," "),r=hu(r,sQr," "),r=hu(r,vQr,"$1 $2"),r=aQr(r),hu(r,oQr,fQr)}Krr.exports=cQr});var ter=s((E9e,eer)=>{"use strict";var lQr=rer();eer.exports=lQr});var ner=s((N9e,ier)=>{"use strict";var pQr=er().isPrimitive,gQr=y(),mQr=ter();function dQr(r){if(!pQr(r))throw new TypeError(gQr("invalid argument. First argument must be a string. Value: `%s`.",r));return mQr(r)}ier.exports=dQr});var ser=s((A9e,aer)=>{"use strict";var hQr=ner();aer.exports=hQr});var oer=s((O9e,uer)=>{"use strict";var qQr=er().isPrimitive,yQr=y(),bQr=du();function wQr(r){if(!qQr(r))throw new TypeError(yQr("invalid argument. First argument must be a string. Value: `%s`.",r));return bQr(r)}uer.exports=wQr});var fer=s((S9e,ver)=>{"use strict";var EQr=oer();ver.exports=EQr});var ler=s((T9e,cer)=>{"use strict";function NQr(r){return r.toUpperCase()}cer.exports=NQr});var ger=s((I9e,per)=>{"use strict";var AQr=ler();per.exports=AQr});var der=s((_9e,mer)=>{"use strict";var OQr=ger(),f4=Dt(),SQr=Wi(),TQr=/\s+/g,IQr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,_Qr=/([a-z0-9])([A-Z])/g;function LQr(r){return r=f4(r,IQr," "),r=f4(r,_Qr,"$1 $2"),r=SQr(r),r=f4(r,TQr,"_"),OQr(r)}mer.exports=LQr});var qer=s((L9e,her)=>{"use strict";var PQr=der();her.exports=PQr});var ber=s((P9e,yer)=>{"use strict";var RQr=er().isPrimitive,FQr=y(),MQr=qer();function BQr(r){if(!RQr(r))throw new TypeError(FQr("invalid argument. Must provide a string. Value: `%s`.",r));return MQr(r)}yer.exports=BQr});var Eer=s((R9e,wer)=>{"use strict";var kQr=ber();wer.exports=kQr});var Aer=s((F9e,Ner)=>{"use strict";var jQr=Hi(),c4=Dt(),CQr=Wi(),GQr=/\s+/g,VQr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,UQr=/([a-z0-9])([A-Z])/g;function HQr(r){return r=c4(r,VQr," "),r=c4(r,UQr,"$1 $2"),r=CQr(r),r=c4(r,GQr,"-"),jQr(r)}Ner.exports=HQr});var Ser=s((M9e,Oer)=>{"use strict";var WQr=Aer();Oer.exports=WQr});var Ier=s((B9e,Ter)=>{"use strict";var zQr=er().isPrimitive,DQr=y(),XQr=Ser();function JQr(r){if(!zQr(r))throw new TypeError(DQr("invalid argument. Must provide a string. Value: `%s`.",r));return XQr(r)}Ter.exports=JQr});var Ler=s((k9e,_er)=>{"use strict";var xQr=Ier();_er.exports=xQr});var Rer=s((j9e,Per)=>{"use strict";var YQr=er().isPrimitive,ZQr=y(),$Qr=Hi();function QQr(r){if(!YQr(r))throw new TypeError(ZQr("invalid argument. Must provide a string. Value: `%s`.",r));return $Qr(r)}Per.exports=QQr});var Mer=s((C9e,Fer)=>{"use strict";var KQr=Rer();Fer.exports=KQr});var ker=s((G9e,Ber)=>{"use strict";var rKr=du(),eKr=Hi(),qu=Dt(),tKr=Wi(),iKr=/\s+/g,nKr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,aKr=/(?:\s|^)([^\s]+)(?=\s|$)/g,sKr=/([a-z0-9])([A-Z])/g;function uKr(r,e){return rKr(eKr(e))}function oKr(r){return r=qu(r,nKr," "),r=qu(r,iKr," "),r=qu(r,sKr,"$1 $2"),r=tKr(r),qu(r,aKr,uKr)}Ber.exports=oKr});var Cer=s((V9e,jer)=>{"use strict";var vKr=ker();jer.exports=vKr});var Ver=s((U9e,Ger)=>{"use strict";var fKr=er().isPrimitive,cKr=y(),lKr=Cer();function pKr(r){if(!fKr(r))throw new TypeError(cKr("invalid argument. First argument must be a string. Value: `%s`.",r));return lKr(r)}Ger.exports=pKr});var Her=s((H9e,Uer)=>{"use strict";var gKr=Ver();Uer.exports=gKr});var zer=s((W9e,Wer)=>{"use strict";var mKr=Hi(),l4=Dt(),dKr=Wi(),hKr=/\s+/g,qKr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,yKr=/([a-z0-9])([A-Z])/g;function bKr(r){return r=l4(r,qKr," "),r=l4(r,yKr,"$1 $2"),r=dKr(r),r=l4(r,hKr,"_"),mKr(r)}Wer.exports=bKr});var Xer=s((z9e,Der)=>{"use strict";var wKr=zer();Der.exports=wKr});var xer=s((D9e,Jer)=>{"use strict";var EKr=er().isPrimitive,NKr=y(),AKr=Xer();function OKr(r){if(!EKr(r))throw new TypeError(NKr("invalid argument. Must provide a string. Value: `%s`.",r));return AKr(r)}Jer.exports=OKr});var Zer=s((X9e,Yer)=>{"use strict";var SKr=xer();Yer.exports=SKr});var Ker=s((J9e,Qer)=>{"use strict";var TKr=_(),$er=O(),IKr=cr().isPrimitive,_Kr=er().isPrimitive,p4=y();function LKr(r,e){return TKr(e)?$er(e,"flags")&&(r.flags=e.flags,!_Kr(r.flags))?new TypeError(p4("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):$er(e,"capture")&&(r.capture=e.capture,!IKr(r.capture))?new TypeError(p4("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(p4("invalid argument. Options argument must be an object. Value: `%s`.",e))}Qer.exports=LKr});var yu=s((x9e,etr)=>{"use strict";var PKr=Ker(),rtr=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function RKr(r){var e,t;if(arguments.length>0){if(e={},t=PKr(e,r),t)throw t;return e.capture?new RegExp("("+rtr+")",e.flags):new RegExp(rtr,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}etr.exports=RKr});var itr=s((Y9e,ttr)=>{"use strict";var FKr=yu(),MKr=FKr({capture:!0});ttr.exports=MKr});var atr=s((Z9e,ntr)=>{"use strict";var BKr=yu(),kKr=BKr();ntr.exports=kKr});var otr=s(($9e,utr)=>{"use strict";var str=w(),g4=yu(),jKr=itr(),CKr=atr();str(g4,"REGEXP",CKr);str(g4,"REGEXP_CAPTURE",jKr);utr.exports=g4});var ftr=s((Q9e,vtr)=>{"use strict";var GKr=otr().REGEXP;function VKr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),GKr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}vtr.exports=VKr});var ltr=s((K9e,ctr)=>{"use strict";var UKr=ftr();ctr.exports=UKr});var gtr=s((rpe,ptr)=>{"use strict";var HKr=er().isPrimitive,WKr=y(),zKr=ltr();function DKr(r){if(!HKr(r))throw new TypeError(WKr("invalid argument. Must provide a string. Value: `%s`.",r));return zKr(r)}ptr.exports=DKr});var dtr=s((epe,mtr)=>{"use strict";var XKr=gtr();mtr.exports=XKr});var qtr=s((tpe,htr)=>{"use strict";function JKr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}htr.exports=JKr});var btr=s((ipe,ytr)=>{"use strict";var xKr=qtr();ytr.exports=xKr});var Etr=s((npe,wtr)=>{"use strict";var YKr=er().isPrimitive,ZKr=y(),$Kr=btr();function QKr(r){if(!YKr(r))throw new TypeError(ZKr("invalid argument. First argument must be a string. Value: `%s`.",r));return $Kr(r)}wtr.exports=QKr});var Atr=s((ape,Ntr)=>{"use strict";var KKr=Etr();Ntr.exports=KKr});var Str=s((spe,Otr)=>{"use strict";var rre=er().isPrimitive,ere=y();function tre(r){if(!rre(r))throw new TypeError(ere("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}Otr.exports=tre});var Itr=s((upe,Ttr)=>{"use strict";var ire=Str();Ttr.exports=ire});var Ltr=s((ope,_tr)=>{"use strict";var Qr=ar(),nre=ser(),are=fer(),sre=Eer(),ure=Ler(),ore=Mer(),vre=Her(),fre=Zer(),cre=dtr(),lre=Atr(),pre=Itr();function gre(r){return Qr(r,"camelcase",nre),Qr(r,"capitalize",are),Qr(r,"constantcase",sre),Qr(r,"kebabcase",ure),Qr(r,"lowercase",ore),Qr(r,"pascalcase",vre),Qr(r,"snakecase",fre),Qr(r,"startcase",cre),Qr(r,"uncapitalize",lre),Qr(r,"uppercase",pre),r}_tr.exports=gre});var Rtr=s((vpe,Ptr)=>{"use strict";var mre=ar(),dre=Prr(),hre=Ltr();function qre(r){return mre(r,"tools",dre({})),r=hre(r),r}Ptr.exports=qre});var Mtr=s((fpe,Ftr)=>{"use strict";var je=ar(),yre=zm(),bre=Aq(),wre=Fq(),Ere=Lw(),Nre=FP(),Are=hJ(),Ore=TJ(),Sre=mrr(),Tre=Rtr();function Ire(){var r={};return je(r,"array",yre({})),je(r,"assert",bre({})),je(r,"blas",wre({})),je(r,"datasets",Ere({})),je(r,"math",Nre({})),je(r,"random",Are({})),je(r,"simulate",Ore({})),je(r,"stats",Sre({})),je(r,"string",Tre({})),r}Ftr.exports=Ire});var ktr=s((cpe,Btr)=>{"use strict";var _re=w(),m4=Mtr();_re(m4,"CACHED",m4());Btr.exports=m4});var Pre=s((lpe,jtr)=>{var Lre=ktr().CACHED;jtr.exports=Lre});return Pre();})();
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
