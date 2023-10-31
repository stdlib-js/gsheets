/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var b4=s((Jre,y4)=>{"use strict";var Htr=typeof Object.defineProperty=="function"?Object.defineProperty:null;y4.exports=Htr});var E4=s((Yre,w4)=>{"use strict";var Wtr=b4();function ztr(){try{return Wtr({},"x",{}),!0}catch{return!1}}w4.exports=ztr});var A4=s((Zre,N4)=>{"use strict";var Dtr=Object.defineProperty;N4.exports=Dtr});var Nu=s(($re,O4)=>{"use strict";function Xtr(r){return typeof r=="number"}O4.exports=Xtr});var Au=s((Qre,T4)=>{"use strict";function xtr(r){return r[0]==="-"}function S4(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Jtr(r,e,t){var i=!1,n=e-r.length;return n<0||(xtr(r)&&(i=!0,r=r.substr(1)),r=t?r+S4(n):S4(n)+r,i&&(r="-"+r)),r}T4.exports=Jtr});var P4=s((Kre,L4)=>{"use strict";var Ytr=Nu(),I4=Au(),Ztr=String.prototype.toLowerCase,_4=String.prototype.toUpperCase;function $tr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Ytr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=I4(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=I4(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===_4.call(r.specifier)?_4.call(t):Ztr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}L4.exports=$tr});var F4=s((ree,R4)=>{"use strict";function Qtr(r){return typeof r=="string"}R4.exports=Qtr});var k4=s((eee,B4)=>{"use strict";var Ktr=Nu(),rir=Math.abs,eir=String.prototype.toLowerCase,M4=String.prototype.toUpperCase,Nt=String.prototype.replace,tir=/e\+(\d)$/,iir=/e-(\d)$/,nir=/^(\d+)$/,air=/^(\d+)e/,sir=/\.0$/,uir=/\.0*e/,oir=/(\..*[^0])0*e/;function vir(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Ktr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":rir(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Nt.call(t,oir,"$1e"),t=Nt.call(t,uir,"e"),t=Nt.call(t,sir,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Nt.call(t,tir,"e+0$1"),t=Nt.call(t,iir,"e-0$1"),r.alternate&&(t=Nt.call(t,nir,"$1."),t=Nt.call(t,air,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===M4.call(r.specifier)?M4.call(t):eir.call(t),t}B4.exports=vir});var G4=s((tee,C4)=>{"use strict";function j4(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function fir(r,e,t){var i=e-r.length;return i<0||(r=t?r+j4(i):j4(i)+r),r}C4.exports=fir});var U4=s((iee,V4)=>{"use strict";var cir=P4(),lir=F4(),pir=k4(),gir=G4(),mir=Au(),dir=String.fromCharCode,Jn=isNaN,hir=Array.isArray;function qir(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function yir(r){var e,t,i,n,a,u,o,f,v;if(!hir(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],lir(i))u+=i;else{if(e=i.precision!==void 0,i=qir(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Jn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Jn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=cir(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Jn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Jn(a)?String(i.arg):dir(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=pir(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=mir(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=gir(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}V4.exports=yir});var W4=s((nee,H4)=>{"use strict";var bir=U4();H4.exports=bir});var D4=s((aee,z4)=>{"use strict";var Yn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function wir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function Eir(r){var e,t,i,n;for(t=[],n=0,i=Yn.exec(r);i;)e=r.slice(n,Yn.lastIndex-i[0].length),e.length&&t.push(e),t.push(wir(i)),n=Yn.lastIndex,i=Yn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}z4.exports=Eir});var x4=s((see,X4)=>{"use strict";var Nir=D4();X4.exports=Nir});var Y4=s((uee,J4)=>{"use strict";function Air(r){return typeof r=="string"}J4.exports=Air});var Q4=s((oee,$4)=>{"use strict";var Oir=W4(),Sir=x4(),Tir=Y4();function Z4(r){var e,t,i;if(!Tir(r))throw new TypeError(Z4("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Sir(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Oir.apply(null,t)}$4.exports=Z4});var y=s((vee,K4)=>{"use strict";var Iir=Q4();K4.exports=Iir});var av=s((fee,nv)=>{"use strict";var rv=y(),Xt=Object.prototype,ev=Xt.toString,tv=Xt.__defineGetter__,iv=Xt.__defineSetter__,_ir=Xt.__lookupGetter__,Lir=Xt.__lookupSetter__;function Pir(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||ev.call(r)==="[object Array]")throw new TypeError(rv("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||ev.call(t)==="[object Array]")throw new TypeError(rv("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(_ir.call(r,e)||Lir.call(r,e)?(i=r.__proto__,r.__proto__=Xt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&tv&&tv.call(r,e,t.get),u&&iv&&iv.call(r,e,t.set),r}nv.exports=Pir});var Ce=s((cee,sv)=>{"use strict";var Rir=E4(),Fir=A4(),Mir=av(),Ou;Rir()?Ou=Fir:Ou=Mir;sv.exports=Ou});var ov=s((lee,uv)=>{"use strict";var Bir=Ce();function kir(r,e,t){Bir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}uv.exports=kir});var w=s((pee,vv)=>{"use strict";var jir=ov();vv.exports=jir});var cv=s((gee,fv)=>{"use strict";var Cir=Ce();function Gir(r,e,t){Cir(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}fv.exports=Gir});var ar=s((mee,lv)=>{"use strict";var Vir=cv();lv.exports=Vir});var gv=s((dee,pv)=>{"use strict";function Uir(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}pv.exports=Uir});var dv=s((hee,mv)=>{"use strict";var Hir=gv();mv.exports=Hir});var qv=s((qee,hv)=>{"use strict";function Wir(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}hv.exports=Wir});var Su=s((yee,yv)=>{"use strict";var zir=qv();yv.exports=zir});var wv=s((bee,bv)=>{"use strict";var Dir=Su();function Xir(r){return Dir(0,r)}bv.exports=Xir});var Tu=s((wee,Ev)=>{"use strict";var xir=wv();Ev.exports=xir});var Ov=s((Eee,Av)=>{"use strict";var zi=dv(),Jir=Tu(),Nv=y();function Yir(r,e,t){var i,n,a,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(a=Jir(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(Nv("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",zi(e).join(", "),zi(t).join(", "),v));if(f===n)a[v]=1;else if(f===1)a[v]=0;else throw new Error(Nv("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",zi(e).join(", "),zi(t).join(", "),v))}return{ref:r,data:i,shape:zi(t),strides:a}}Av.exports=Yir});var Iu=s((Nee,Sv)=>{"use strict";var Zir=Ov();Sv.exports=Zir});var _v=s((Aee,Iv)=>{"use strict";var Tv=Iu();function $ir(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,F,S,z,Q;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(F=Tv(r[0],e[0],N),S=F.data,A=F.strides,i=A[1],n=A[0],F=Tv(r[1],e[1],N),z=F.data,A=F.strides,a=A[1],u=A[0],Q=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,m=0,d=S[p],g=z[h],q=Q[c],v=0;v<o;v++)q[v]=t(d[l],g[m]),l+=i,m+=a;p+=n,h+=u}}Iv.exports=$ir});var _u=s((Oee,Lv)=>{"use strict";var Qir=_v();Lv.exports=Qir});var Rv=s((See,Pv)=>{"use strict";var Lu=Iu();function Kir(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,F,S,z,Q,U,Tr,Ir,ur,Et,q4;if(Q=e[3],v=Q[1],c=Q[0],!(v<=0||c<=0))for(Tr=Lu(r[0],e[0],Q),Ir=Tr.data,U=Tr.strides,i=U[1],n=U[0],Tr=Lu(r[1],e[1],Q),ur=Tr.data,U=Tr.strides,a=U[1],u=U[0],Tr=Lu(r[2],e[2],Q),Et=Tr.data,U=Tr.strides,o=U[1],f=U[0],q4=r[3],h=0,g=0,N=0,p=0;p<c;p++){for(m=0,d=0,q=0,A=Ir[h],F=ur[g],S=Et[N],z=q4[p],l=0;l<v;l++)z[l]=t(A[m],F[d],S[q]),m+=i,d+=a,q+=o;h+=n,g+=u,N+=f}}Pv.exports=Kir});var Pu=s((Tee,Fv)=>{"use strict";var rnr=Rv();Fv.exports=rnr});var Bv=s((Iee,Mv)=>{"use strict";function enr(r){var e,t,i,n,a,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}Mv.exports=enr});var Zn=s((_ee,kv)=>{"use strict";var tnr=Bv();kv.exports=tnr});var Cv=s((Lee,jv)=>{"use strict";var inr=Su();function nnr(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(inr(r,i));return t}jv.exports=nnr});var $n=s((Pee,Gv)=>{"use strict";var anr=Cv();Gv.exports=anr});var Uv=s((Ree,Vv)=>{"use strict";function snr(r,e,t){var i,n,a,u,o,f;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}Vv.exports=snr});var Wv=s((Fee,Hv)=>{"use strict";var unr=Uv();Hv.exports=unr});var Dv=s((Mee,zv)=>{"use strict";function onr(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}zv.exports=onr});var Ru=s((Bee,Xv)=>{"use strict";var vnr=Dv();Xv.exports=vnr});var Jv=s((kee,xv)=>{"use strict";var fnr=/./;xv.exports=fnr});var Fu=s((jee,Yv)=>{"use strict";function cnr(r){return typeof r=="boolean"}Yv.exports=cnr});var $v=s((Cee,Zv)=>{"use strict";function lnr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Zv.exports=lnr});var Kv=s((Gee,Qv)=>{"use strict";var pnr=$v();Qv.exports=pnr});var ef=s((Vee,rf)=>{"use strict";var gnr=Kv(),mnr=gnr();function dnr(){return mnr&&typeof Symbol.toStringTag=="symbol"}rf.exports=dnr});var Di=s((Uee,tf)=>{"use strict";var hnr=ef();tf.exports=hnr});var Mu=s((Hee,nf)=>{"use strict";var qnr=Object.prototype.toString;nf.exports=qnr});var sf=s((Wee,af)=>{"use strict";var ynr=Mu();function bnr(r){return ynr.call(r)}af.exports=bnr});var of=s((zee,uf)=>{"use strict";var wnr=Object.prototype.hasOwnProperty;function Enr(r,e){return r==null?!1:wnr.call(r,e)}uf.exports=Enr});var O=s((Dee,vf)=>{"use strict";var Nnr=of();vf.exports=Nnr});var cf=s((Xee,ff)=>{"use strict";var Anr=typeof Symbol=="function"?Symbol:void 0;ff.exports=Anr});var Bu=s((xee,lf)=>{"use strict";var Onr=cf();lf.exports=Onr});var mf=s((Jee,gf)=>{"use strict";var pf=Bu(),Snr=typeof pf=="function"?pf.toStringTag:"";gf.exports=Snr});var hf=s((Yee,df)=>{"use strict";var Tnr=O(),Xi=mf(),ku=Mu();function Inr(r){var e,t,i;if(r==null)return ku.call(r);t=r[Xi],e=Tnr(r,Xi);try{r[Xi]=void 0}catch{return ku.call(r)}return i=ku.call(r),e?r[Xi]=t:delete r[Xi],i}df.exports=Inr});var ir=s((Zee,qf)=>{"use strict";var _nr=Di(),Lnr=sf(),Pnr=hf(),ju;_nr()?ju=Pnr:ju=Lnr;qf.exports=ju});var bf=s(($ee,yf)=>{"use strict";var Rnr=Boolean;yf.exports=Rnr});var Ef=s((Qee,wf)=>{"use strict";var Fnr=bf();wf.exports=Fnr});var Af=s((Kee,Nf)=>{"use strict";var Mnr=Boolean.prototype.toString;Nf.exports=Mnr});var Sf=s((rte,Of)=>{"use strict";var Bnr=Af();function knr(r){try{return Bnr.call(r),!0}catch{return!1}}Of.exports=knr});var Cu=s((ete,Tf)=>{"use strict";var jnr=Di(),Cnr=ir(),Gnr=Ef(),Vnr=Sf(),Unr=jnr();function Hnr(r){return typeof r=="object"?r instanceof Gnr?!0:Unr?Vnr(r):Cnr(r)==="[object Boolean]":!1}Tf.exports=Hnr});var _f=s((tte,If)=>{"use strict";var Wnr=Fu(),znr=Cu();function Dnr(r){return Wnr(r)||znr(r)}If.exports=Dnr});var cr=s((ite,Pf)=>{"use strict";var Lf=w(),Gu=_f(),Xnr=Fu(),xnr=Cu();Lf(Gu,"isPrimitive",Xnr);Lf(Gu,"isObject",xnr);Pf.exports=Gu});var Ff=s((nte,Rf)=>{"use strict";function Jnr(){return new Function("return this;")()}Rf.exports=Jnr});var Bf=s((ate,Mf)=>{"use strict";var Ynr=typeof self=="object"?self:null;Mf.exports=Ynr});var jf=s((ste,kf)=>{"use strict";var Znr=typeof window=="object"?window:null;kf.exports=Znr});var Gf=s((ute,Cf)=>{"use strict";var $nr=typeof globalThis=="object"?globalThis:null;Cf.exports=$nr});var zf=s((ote,Wf)=>{"use strict";var Qnr=cr().isPrimitive,Knr=y(),rar=Ff(),Vf=Bf(),Uf=jf(),Hf=Gf();function ear(r){if(arguments.length){if(!Qnr(r))throw new TypeError(Knr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return rar()}if(Hf)return Hf;if(Vf)return Vf;if(Uf)return Uf;throw new Error("unexpected error. Unable to resolve global object.")}Wf.exports=ear});var xf=s((vte,Xf)=>{"use strict";var tar=zf(),Df=tar(),iar=Df.document&&Df.document.childNodes;Xf.exports=iar});var Yf=s((fte,Jf)=>{"use strict";var nar=Int8Array;Jf.exports=nar});var $f=s((cte,Zf)=>{"use strict";var aar=Jv(),sar=xf(),uar=Yf();function oar(){return typeof aar=="function"||typeof uar=="object"||typeof sar=="function"}Zf.exports=oar});var Vu=s((lte,Qf)=>{"use strict";function far(){return/^\s*function\s*([^(]*)/i}Qf.exports=far});var rc=s((pte,Kf)=>{"use strict";var car=Vu(),lar=car();Kf.exports=lar});var Uu=s((gte,tc)=>{"use strict";var par=w(),ec=Vu(),gar=rc();par(ec,"REGEXP",gar);tc.exports=ec});var nc=s((mte,ic)=>{"use strict";var mar=ir(),Hu;function dar(r){return mar(r)==="[object Array]"}Array.isArray?Hu=Array.isArray:Hu=dar;ic.exports=Hu});var lr=s((dte,ac)=>{"use strict";var har=nc();ac.exports=har});var uc=s((hte,sc)=>{"use strict";var qar=lr(),yar=y();function bar(r){if(typeof r!="function")throw new TypeError(yar("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!qar(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}sc.exports=bar});var vc=s((qte,oc)=>{"use strict";var war=uc();oc.exports=war});var cc=s((yte,fc)=>{"use strict";function Ear(r){return r!==null&&typeof r=="object"}fc.exports=Ear});var zu=s((bte,lc)=>{"use strict";var Nar=w(),Aar=vc(),Wu=cc(),Oar=Aar(Wu);Nar(Wu,"isObjectLikeArray",Oar);lc.exports=Wu});var gc=s((wte,pc)=>{"use strict";var Sar=zu();function Tar(r){return Sar(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}pc.exports=Tar});var At=s((Ete,mc)=>{"use strict";var Iar=gc();mc.exports=Iar});var hc=s((Nte,dc)=>{"use strict";var _ar=ir(),Lar=Uu().REGEXP,Par=At();function Rar(r){var e,t,i;if(t=_ar(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Lar.exec(i.toString()),e)return e[1]}return Par(r)?"Buffer":t}dc.exports=Rar});var Ge=s((Ate,qc)=>{"use strict";var Far=hc();qc.exports=Far});var bc=s((Ote,yc)=>{"use strict";var Mar=Ge();function Bar(r){var e;return r===null?"null":(e=typeof r,e==="object"?Mar(r).toLowerCase():e)}yc.exports=Bar});var Ec=s((Ste,wc)=>{"use strict";var kar=Ge();function jar(r){return kar(r).toLowerCase()}wc.exports=jar});var Qn=s((Tte,Nc)=>{"use strict";var Car=$f(),Gar=bc(),Var=Ec(),Uar=Car()?Var:Gar;Nc.exports=Uar});var Oc=s((Ite,Ac)=>{"use strict";var Har=Qn();function War(r){return Har(r)==="function"}Ac.exports=War});var L=s((_te,Sc)=>{"use strict";var zar=Oc();Sc.exports=zar});var Ic=s((Lte,Tc)=>{"use strict";var Dar=Math.floor;Tc.exports=Dar});var J=s((Pte,_c)=>{"use strict";var Xar=Ic();_c.exports=Xar});var Pc=s((Rte,Lc)=>{"use strict";var xar=J();function Jar(r){return xar(r)===r}Lc.exports=Jar});var _r=s((Fte,Rc)=>{"use strict";var Yar=Pc();Rc.exports=Yar});var Mc=s((Mte,Fc)=>{"use strict";var Zar=9007199254740991;Fc.exports=Zar});var kc=s((Bte,Bc)=>{"use strict";var $ar=_r(),Qar=Mc();function Kar(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&$ar(r.length)&&r.length>=0&&r.length<=Qar}Bc.exports=Kar});var Vr=s((kte,jc)=>{"use strict";var r0r=kc();jc.exports=r0r});var Gc=s((jte,Cc)=>{"use strict";var e0r=L();function t0r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&e0r(r.next)}Cc.exports=t0r});var Uc=s((Cte,Vc)=>{"use strict";var i0r=Gc();Vc.exports=i0r});var zc=s((Gte,Wc)=>{"use strict";var Hc="function";function n0r(r){return typeof r.get===Hc&&typeof r.set===Hc}Wc.exports=n0r});var Du=s((Vte,Dc)=>{"use strict";var a0r=zc();Dc.exports=a0r});var Jc=s((Ute,xc)=>{"use strict";var Xc={complex128:s0r,complex64:u0r,default:o0r};function s0r(r,e,t){r.set(t,e)}function u0r(r,e,t){r.set(t,e)}function o0r(r,e,t){r.set(t,e)}function v0r(r){var e=Xc[r];return typeof e=="function"?e:Xc.default}xc.exports=v0r});var Xu=s((Hte,Yc)=>{"use strict";var f0r=Jc();Yc.exports=f0r});var Qc=s((Wte,$c)=>{"use strict";var Zc={float64:c0r,float32:l0r,int32:p0r,int16:g0r,int8:m0r,uint32:d0r,uint16:h0r,uint8:q0r,uint8c:y0r,generic:b0r,default:w0r};function c0r(r,e,t){r[e]=t}function l0r(r,e,t){r[e]=t}function p0r(r,e,t){r[e]=t}function g0r(r,e,t){r[e]=t}function m0r(r,e,t){r[e]=t}function d0r(r,e,t){r[e]=t}function h0r(r,e,t){r[e]=t}function q0r(r,e,t){r[e]=t}function y0r(r,e,t){r[e]=t}function b0r(r,e,t){r[e]=t}function w0r(r,e,t){r[e]=t}function E0r(r){var e=Zc[r];return typeof e=="function"?e:Zc.default}$c.exports=E0r});var xu=s((zte,Kc)=>{"use strict";var N0r=Qc();Kc.exports=N0r});var e5=s((Dte,r5)=>{"use strict";var A0r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};r5.exports=A0r});var i5=s((Xte,t5)=>{"use strict";var O0r=ir(),S0r=typeof Float64Array=="function";function T0r(r){return S0r&&r instanceof Float64Array||O0r(r)==="[object Float64Array]"}t5.exports=T0r});var a5=s((xte,n5)=>{"use strict";var I0r=i5();n5.exports=I0r});var u5=s((Jte,s5)=>{"use strict";var _0r=typeof Float64Array=="function"?Float64Array:null;s5.exports=_0r});var f5=s((Yte,v5)=>{"use strict";var L0r=a5(),o5=u5();function P0r(){var r,e;if(typeof o5!="function")return!1;try{e=new o5([1,3.14,-3.14,NaN]),r=L0r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}v5.exports=P0r});var Ju=s((Zte,c5)=>{"use strict";var R0r=f5();c5.exports=R0r});var p5=s(($te,l5)=>{"use strict";var F0r=typeof Float64Array=="function"?Float64Array:void 0;l5.exports=F0r});var m5=s((Qte,g5)=>{"use strict";function M0r(){throw new Error("not implemented")}g5.exports=M0r});var gr=s((Kte,d5)=>{"use strict";var B0r=Ju(),k0r=p5(),j0r=m5(),Yu;B0r()?Yu=k0r:Yu=j0r;d5.exports=Yu});var q5=s((rie,h5)=>{"use strict";var C0r=ir(),G0r=typeof Float32Array=="function";function V0r(r){return G0r&&r instanceof Float32Array||C0r(r)==="[object Float32Array]"}h5.exports=V0r});var b5=s((eie,y5)=>{"use strict";var U0r=q5();y5.exports=U0r});var I=s((tie,w5)=>{"use strict";var H0r=Number.POSITIVE_INFINITY;w5.exports=H0r});var N5=s((iie,E5)=>{"use strict";var W0r=typeof Float32Array=="function"?Float32Array:null;E5.exports=W0r});var S5=s((nie,O5)=>{"use strict";var z0r=b5(),D0r=I(),A5=N5();function X0r(){var r,e;if(typeof A5!="function")return!1;try{e=new A5([1,3.14,-3.14,5e40]),r=z0r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===D0r}catch{r=!1}return r}O5.exports=X0r});var I5=s((aie,T5)=>{"use strict";var x0r=S5();T5.exports=x0r});var L5=s((sie,_5)=>{"use strict";var J0r=typeof Float32Array=="function"?Float32Array:void 0;_5.exports=J0r});var R5=s((uie,P5)=>{"use strict";function Y0r(){throw new Error("not implemented")}P5.exports=Y0r});var Kr=s((oie,F5)=>{"use strict";var Z0r=I5(),$0r=L5(),Q0r=R5(),Zu;Z0r()?Zu=$0r:Zu=Q0r;F5.exports=Zu});var B5=s((vie,M5)=>{"use strict";var K0r=ir(),rsr=typeof Uint32Array=="function";function esr(r){return rsr&&r instanceof Uint32Array||K0r(r)==="[object Uint32Array]"}M5.exports=esr});var re=s((fie,k5)=>{"use strict";var tsr=B5();k5.exports=tsr});var xt=s((cie,j5)=>{"use strict";var isr=4294967295;j5.exports=isr});var G5=s((lie,C5)=>{"use strict";var nsr=typeof Uint32Array=="function"?Uint32Array:null;C5.exports=nsr});var H5=s((pie,U5)=>{"use strict";var asr=re(),$u=xt(),V5=G5();function ssr(){var r,e;if(typeof V5!="function")return!1;try{e=[1,3.14,-3.14,$u+1,$u+2],e=new V5(e),r=asr(e)&&e[0]===1&&e[1]===3&&e[2]===$u-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}U5.exports=ssr});var z5=s((gie,W5)=>{"use strict";var usr=H5();W5.exports=usr});var X5=s((mie,D5)=>{"use strict";var osr=typeof Uint32Array=="function"?Uint32Array:void 0;D5.exports=osr});var J5=s((die,x5)=>{"use strict";function vsr(){throw new Error("not implemented")}x5.exports=vsr});var pr=s((hie,Y5)=>{"use strict";var fsr=z5(),csr=X5(),lsr=J5(),Qu;fsr()?Qu=csr:Qu=lsr;Y5.exports=Qu});var $5=s((qie,Z5)=>{"use strict";var psr=ir(),gsr=typeof Int32Array=="function";function msr(r){return gsr&&r instanceof Int32Array||psr(r)==="[object Int32Array]"}Z5.exports=msr});var Kn=s((yie,Q5)=>{"use strict";var dsr=$5();Q5.exports=dsr});var Jt=s((bie,K5)=>{"use strict";var hsr=2147483647;K5.exports=hsr});var el=s((wie,rl)=>{"use strict";var qsr=-2147483648;rl.exports=qsr});var il=s((Eie,tl)=>{"use strict";var ysr=typeof Int32Array=="function"?Int32Array:null;tl.exports=ysr});var sl=s((Nie,al)=>{"use strict";var bsr=Kn(),wsr=Jt(),Esr=el(),nl=il();function Nsr(){var r,e;if(typeof nl!="function")return!1;try{e=new nl([1,3.14,-3.14,wsr+1]),r=bsr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Esr}catch{r=!1}return r}al.exports=Nsr});var ol=s((Aie,ul)=>{"use strict";var Asr=sl();ul.exports=Asr});var fl=s((Oie,vl)=>{"use strict";var Osr=typeof Int32Array=="function"?Int32Array:void 0;vl.exports=Osr});var ll=s((Sie,cl)=>{"use strict";function Ssr(){throw new Error("not implemented")}cl.exports=Ssr});var Ot=s((Tie,pl)=>{"use strict";var Tsr=ol(),Isr=fl(),_sr=ll(),Ku;Tsr()?Ku=Isr:Ku=_sr;pl.exports=Ku});var ml=s((Iie,gl)=>{"use strict";var Lsr=ir(),Psr=typeof Uint16Array=="function";function Rsr(r){return Psr&&r instanceof Uint16Array||Lsr(r)==="[object Uint16Array]"}gl.exports=Rsr});var hl=s((_ie,dl)=>{"use strict";var Fsr=ml();dl.exports=Fsr});var yl=s((Lie,ql)=>{"use strict";var Msr=65535;ql.exports=Msr});var wl=s((Pie,bl)=>{"use strict";var Bsr=typeof Uint16Array=="function"?Uint16Array:null;bl.exports=Bsr});var Al=s((Rie,Nl)=>{"use strict";var ksr=hl(),ro=yl(),El=wl();function jsr(){var r,e;if(typeof El!="function")return!1;try{e=[1,3.14,-3.14,ro+1,ro+2],e=new El(e),r=ksr(e)&&e[0]===1&&e[1]===3&&e[2]===ro-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Nl.exports=jsr});var Sl=s((Fie,Ol)=>{"use strict";var Csr=Al();Ol.exports=Csr});var Il=s((Mie,Tl)=>{"use strict";var Gsr=typeof Uint16Array=="function"?Uint16Array:void 0;Tl.exports=Gsr});var Ll=s((Bie,_l)=>{"use strict";function Vsr(){throw new Error("not implemented")}_l.exports=Vsr});var Yt=s((kie,Pl)=>{"use strict";var Usr=Sl(),Hsr=Il(),Wsr=Ll(),eo;Usr()?eo=Hsr:eo=Wsr;Pl.exports=eo});var Fl=s((jie,Rl)=>{"use strict";var zsr=ir(),Dsr=typeof Int16Array=="function";function Xsr(r){return Dsr&&r instanceof Int16Array||zsr(r)==="[object Int16Array]"}Rl.exports=Xsr});var Bl=s((Cie,Ml)=>{"use strict";var xsr=Fl();Ml.exports=xsr});var jl=s((Gie,kl)=>{"use strict";var Jsr=32767;kl.exports=Jsr});var Gl=s((Vie,Cl)=>{"use strict";var Ysr=-32768;Cl.exports=Ysr});var Ul=s((Uie,Vl)=>{"use strict";var Zsr=typeof Int16Array=="function"?Int16Array:null;Vl.exports=Zsr});var zl=s((Hie,Wl)=>{"use strict";var $sr=Bl(),Qsr=jl(),Ksr=Gl(),Hl=Ul();function rur(){var r,e;if(typeof Hl!="function")return!1;try{e=new Hl([1,3.14,-3.14,Qsr+1]),r=$sr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Ksr}catch{r=!1}return r}Wl.exports=rur});var Xl=s((Wie,Dl)=>{"use strict";var eur=zl();Dl.exports=eur});var Jl=s((zie,xl)=>{"use strict";var tur=typeof Int16Array=="function"?Int16Array:void 0;xl.exports=tur});var Zl=s((Die,Yl)=>{"use strict";function iur(){throw new Error("not implemented")}Yl.exports=iur});var xi=s((Xie,$l)=>{"use strict";var nur=Xl(),aur=Jl(),sur=Zl(),to;nur()?to=aur:to=sur;$l.exports=to});var Kl=s((xie,Ql)=>{"use strict";var uur=ir(),our=typeof Uint8Array=="function";function vur(r){return our&&r instanceof Uint8Array||uur(r)==="[object Uint8Array]"}Ql.exports=vur});var e8=s((Jie,r8)=>{"use strict";var fur=Kl();r8.exports=fur});var i8=s((Yie,t8)=>{"use strict";var cur=255;t8.exports=cur});var a8=s((Zie,n8)=>{"use strict";var lur=typeof Uint8Array=="function"?Uint8Array:null;n8.exports=lur});var o8=s(($ie,u8)=>{"use strict";var pur=e8(),io=i8(),s8=a8();function gur(){var r,e;if(typeof s8!="function")return!1;try{e=[1,3.14,-3.14,io+1,io+2],e=new s8(e),r=pur(e)&&e[0]===1&&e[1]===3&&e[2]===io-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}u8.exports=gur});var f8=s((Qie,v8)=>{"use strict";var mur=o8();v8.exports=mur});var l8=s((Kie,c8)=>{"use strict";var dur=typeof Uint8Array=="function"?Uint8Array:void 0;c8.exports=dur});var g8=s((rne,p8)=>{"use strict";function hur(){throw new Error("not implemented")}p8.exports=hur});var Zt=s((ene,m8)=>{"use strict";var qur=f8(),yur=l8(),bur=g8(),no;qur()?no=yur:no=bur;m8.exports=no});var h8=s((tne,d8)=>{"use strict";var wur=ir(),Eur=typeof Uint8ClampedArray=="function";function Nur(r){return Eur&&r instanceof Uint8ClampedArray||wur(r)==="[object Uint8ClampedArray]"}d8.exports=Nur});var y8=s((ine,q8)=>{"use strict";var Aur=h8();q8.exports=Aur});var w8=s((nne,b8)=>{"use strict";var Our=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;b8.exports=Our});var A8=s((ane,N8)=>{"use strict";var Sur=y8(),E8=w8();function Tur(){var r,e;if(typeof E8!="function")return!1;try{e=new E8([-1,0,1,3.14,4.99,255,256]),r=Sur(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}N8.exports=Tur});var S8=s((sne,O8)=>{"use strict";var Iur=A8();O8.exports=Iur});var I8=s((une,T8)=>{"use strict";var _ur=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;T8.exports=_ur});var L8=s((one,_8)=>{"use strict";function Lur(){throw new Error("not implemented")}_8.exports=Lur});var Ji=s((vne,P8)=>{"use strict";var Pur=S8(),Rur=I8(),Fur=L8(),ao;Pur()?ao=Rur:ao=Fur;P8.exports=ao});var F8=s((fne,R8)=>{"use strict";var Mur=ir(),Bur=typeof Int8Array=="function";function kur(r){return Bur&&r instanceof Int8Array||Mur(r)==="[object Int8Array]"}R8.exports=kur});var B8=s((cne,M8)=>{"use strict";var jur=F8();M8.exports=jur});var j8=s((lne,k8)=>{"use strict";var Cur=127;k8.exports=Cur});var G8=s((pne,C8)=>{"use strict";var Gur=-128;C8.exports=Gur});var U8=s((gne,V8)=>{"use strict";var Vur=typeof Int8Array=="function"?Int8Array:null;V8.exports=Vur});var z8=s((mne,W8)=>{"use strict";var Uur=B8(),Hur=j8(),Wur=G8(),H8=U8();function zur(){var r,e;if(typeof H8!="function")return!1;try{e=new H8([1,3.14,-3.14,Hur+1]),r=Uur(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Wur}catch{r=!1}return r}W8.exports=zur});var X8=s((dne,D8)=>{"use strict";var Dur=z8();D8.exports=Dur});var J8=s((hne,x8)=>{"use strict";var Xur=typeof Int8Array=="function"?Int8Array:void 0;x8.exports=Xur});var Z8=s((qne,Y8)=>{"use strict";function xur(){throw new Error("not implemented")}Y8.exports=xur});var Yi=s((yne,$8)=>{"use strict";var Jur=X8(),Yur=J8(),Zur=Z8(),so;Jur()?so=Yur:so=Zur;$8.exports=so});var uo=s((bne,Q8)=>{"use strict";function $ur(r){return typeof r=="number"}Q8.exports=$ur});var r7=s((wne,K8)=>{"use strict";K8.exports=Number});var ra=s((Ene,e7)=>{"use strict";var Qur=r7();e7.exports=Qur});var i7=s((Nne,t7)=>{"use strict";var Kur=ra(),ror=Kur.prototype.toString;t7.exports=ror});var a7=s((Ane,n7)=>{"use strict";var eor=i7();function tor(r){try{return eor.call(r),!0}catch{return!1}}n7.exports=tor});var oo=s((One,s7)=>{"use strict";var ior=Di(),nor=ir(),aor=ra(),sor=a7(),uor=ior();function oor(r){return typeof r=="object"?r instanceof aor?!0:uor?sor(r):nor(r)==="[object Number]":!1}s7.exports=oor});var o7=s((Sne,u7)=>{"use strict";var vor=uo(),cor=oo();function lor(r){return vor(r)||cor(r)}u7.exports=lor});var j=s((Tne,f7)=>{"use strict";var v7=w(),vo=o7(),por=uo(),gor=oo();v7(vo,"isPrimitive",por);v7(vo,"isObject",gor);f7.exports=vo});var G=s((Ine,c7)=>{"use strict";var mor=ra(),dor=mor.NEGATIVE_INFINITY;c7.exports=dor});var fo=s((_ne,l7)=>{"use strict";var hor=I(),qor=G(),yor=_r();function bor(r){return r<hor&&r>qor&&yor(r)}l7.exports=bor});var co=s((Lne,p7)=>{"use strict";var wor=j().isPrimitive,Eor=fo();function Nor(r){return wor(r)&&Eor(r)}p7.exports=Nor});var lo=s((Pne,g7)=>{"use strict";var Aor=j().isObject,Oor=fo();function Sor(r){return Aor(r)&&Oor(r.valueOf())}g7.exports=Sor});var d7=s((Rne,m7)=>{"use strict";var Tor=co(),Ior=lo();function _or(r){return Tor(r)||Ior(r)}m7.exports=_or});var Ur=s((Fne,q7)=>{"use strict";var h7=w(),po=d7(),Lor=co(),Por=lo();h7(po,"isPrimitive",Lor);h7(po,"isObject",Por);q7.exports=po});var go=s((Mne,y7)=>{"use strict";var Ror=Ur().isPrimitive;function For(r){return Ror(r)&&r>=0}y7.exports=For});var mo=s((Bne,b7)=>{"use strict";var Mor=Ur().isObject;function Bor(r){return Mor(r)&&r.valueOf()>=0}b7.exports=Bor});var E7=s((kne,w7)=>{"use strict";var kor=go(),jor=mo();function Cor(r){return kor(r)||jor(r)}w7.exports=Cor});var Ve=s((jne,A7)=>{"use strict";var N7=w(),ho=E7(),Gor=go(),Vor=mo();N7(ho,"isPrimitive",Gor);N7(ho,"isObject",Vor);A7.exports=ho});var S7=s((Cne,O7)=>{"use strict";var Uor=4294967295;O7.exports=Uor});var I7=s((Gne,T7)=>{"use strict";var Hor=_r(),Wor=S7();function zor(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Hor(r.length)&&r.length>=0&&r.length<=Wor}T7.exports=zor});var St=s((Vne,_7)=>{"use strict";var Dor=I7();_7.exports=Dor});var P7=s((Une,L7)=>{"use strict";var Xor=ir(),xor=typeof ArrayBuffer=="function";function Jor(r){return xor&&r instanceof ArrayBuffer||Xor(r)==="[object ArrayBuffer]"}L7.exports=Jor});var qo=s((Hne,R7)=>{"use strict";var Yor=P7();R7.exports=Yor});var M7=s((Wne,F7)=>{"use strict";var Zor=lr();function $or(r){return typeof r=="object"&&r!==null&&!Zor(r)}F7.exports=$or});var ea=s((zne,B7)=>{"use strict";var Qor=M7();B7.exports=Qor});var j7=s((Dne,k7)=>{"use strict";function Kor(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}k7.exports=Kor});var G7=s((Xne,C7)=>{"use strict";function r2r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}C7.exports=r2r});var z7=s((xne,W7)=>{"use strict";var V7=j().isPrimitive,U7=Ce(),Zi=w(),H7=y(),e2r=j7(),t2r=G7();function Tt(r,e){if(!(this instanceof Tt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!V7(r))throw new TypeError(H7("invalid argument. Real component must be a number. Value: `%s`.",r));if(!V7(e))throw new TypeError(H7("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return U7(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),U7(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Zi(Tt,"BYTES_PER_ELEMENT",8);Zi(Tt.prototype,"BYTES_PER_ELEMENT",8);Zi(Tt.prototype,"byteLength",16);Zi(Tt.prototype,"toString",e2r);Zi(Tt.prototype,"toJSON",t2r);W7.exports=Tt});var $t=s((Jne,D7)=>{"use strict";var i2r=z7();D7.exports=i2r});var x7=s((Yne,X7)=>{"use strict";var n2r=typeof Math.fround=="function"?Math.fround:null;X7.exports=n2r});var Z7=s((Zne,Y7)=>{"use strict";var a2r=Kr(),J7=new a2r(1);function s2r(r){return J7[0]=r,J7[0]}Y7.exports=s2r});var K7=s(($ne,Q7)=>{"use strict";var $7=x7(),u2r=Z7(),yo;typeof $7=="function"?yo=$7:yo=u2r;Q7.exports=yo});var e9=s((Qne,r9)=>{"use strict";function o2r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}r9.exports=o2r});var i9=s((Kne,t9)=>{"use strict";function v2r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}t9.exports=v2r});var v9=s((rae,o9)=>{"use strict";var n9=j().isPrimitive,a9=Ce(),$i=w(),s9=K7(),u9=y(),f2r=e9(),c2r=i9();function It(r,e){if(!(this instanceof It))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!n9(r))throw new TypeError(u9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!n9(e))throw new TypeError(u9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return a9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:s9(r)}),a9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:s9(e)}),this}$i(It,"BYTES_PER_ELEMENT",4);$i(It.prototype,"BYTES_PER_ELEMENT",4);$i(It.prototype,"byteLength",8);$i(It.prototype,"toString",f2r);$i(It.prototype,"toJSON",c2r);o9.exports=It});var Qt=s((eae,f9)=>{"use strict";var l2r=v9();f9.exports=l2r});var l9=s((tae,c9)=>{"use strict";var p2r=$t(),g2r=Qt();function m2r(r){return r instanceof p2r||r instanceof g2r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}c9.exports=m2r});var Hr=s((iae,p9)=>{"use strict";var d2r=l9();p9.exports=d2r});var m9=s((nae,g9)=>{"use strict";var h2r=_r();function q2r(r){return h2r(r/2)}g9.exports=q2r});var ta=s((aae,d9)=>{"use strict";var y2r=m9();d9.exports=y2r});var q9=s((sae,h9)=>{"use strict";var b2r=O(),ia=Bu();function w2r(){return typeof ia=="function"&&typeof ia("foo")=="symbol"&&b2r(ia,"iterator")&&typeof ia.iterator=="symbol"}h9.exports=w2r});var na=s((uae,y9)=>{"use strict";var E2r=q9();y9.exports=E2r});var w9=s((oae,b9)=>{"use strict";var N2r=na(),A2r=N2r()?Symbol.iterator:null;b9.exports=A2r});var aa=s((vae,E9)=>{"use strict";var O2r=w9();E9.exports=O2r});var A9=s((fae,N9)=>{"use strict";var S2r=Ce();function T2r(r,e,t){S2r(r,e,{configurable:!1,enumerable:!1,get:t})}N9.exports=T2r});var P=s((cae,O9)=>{"use strict";var I2r=A9();O9.exports=I2r});var T9=s((lae,S9)=>{"use strict";function _2r(r){return r.re}S9.exports=_2r});var Ue=s((pae,I9)=>{"use strict";var L2r=T9();I9.exports=L2r});var L9=s((gae,_9)=>{"use strict";function P2r(r){return r.im}_9.exports=P2r});var He=s((mae,P9)=>{"use strict";var R2r=L9();P9.exports=R2r});var F9=s((dae,R9)=>{"use strict";var F2r=Kr();function M2r(r,e){return new F2r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}R9.exports=M2r});var Kt=s((hae,M9)=>{"use strict";var B2r=F9();M9.exports=B2r});var k9=s((qae,B9)=>{"use strict";var k2r=gr();function j2r(r,e){return new k2r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}B9.exports=j2r});var ri=s((yae,j9)=>{"use strict";var C2r=k9();j9.exports=C2r});var V9=s((bae,G9)=>{"use strict";var C9={float64:G2r,float32:V2r,int32:U2r,int16:H2r,int8:W2r,uint32:z2r,uint16:D2r,uint8:X2r,uint8c:x2r,generic:J2r,default:Y2r};function G2r(r,e){return r[e]}function V2r(r,e){return r[e]}function U2r(r,e){return r[e]}function H2r(r,e){return r[e]}function W2r(r,e){return r[e]}function z2r(r,e){return r[e]}function D2r(r,e){return r[e]}function X2r(r,e){return r[e]}function x2r(r,e){return r[e]}function J2r(r,e){return r[e]}function Y2r(r,e){return r[e]}function Z2r(r){var e=C9[r];return typeof e=="function"?e:C9.default}G9.exports=Z2r});var sa=s((wae,U9)=>{"use strict";var $2r=V9();U9.exports=$2r});var z9=s((Eae,W9)=>{"use strict";var H9={complex128:Q2r,complex64:K2r,default:r1r};function Q2r(r,e){return r.get(e)}function K2r(r,e){return r.get(e)}function r1r(r,e){return r.get(e)}function e1r(r){var e=H9[r];return typeof e=="function"?e:H9.default}W9.exports=e1r});var ua=s((Nae,D9)=>{"use strict";var t1r=z9();D9.exports=t1r});var x9=s((Aae,X9)=>{"use strict";var i1r=St(),n1r=Hr(),a1r=Ue(),s1r=He(),u1r=y();function o1r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,i1r(i)&&i.length>=2)e.push(i[0],i[1]);else if(n1r(i))e.push(a1r(i),s1r(i));else return new TypeError(u1r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}X9.exports=o1r});var Y9=s((Oae,J9)=>{"use strict";var v1r=St(),f1r=Hr(),c1r=Ue(),l1r=He(),p1r=y();function g1r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),v1r(a)&&a.length>=2)i.push(a[0],a[1]);else if(f1r(a))i.push(c1r(a),l1r(a));else return new TypeError(p1r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}J9.exports=g1r});var $9=s((Sae,Z9)=>{"use strict";var m1r=Hr(),d1r=Ue(),h1r=He();function q1r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!m1r(i))return null;r[a]=d1r(i),r[a+1]=h1r(i),a+=2}return r}Z9.exports=q1r});var sp=s((Tae,ap)=>{"use strict";var Qi=Ve().isPrimitive,Q9=St(),wo=Vr(),K9=qo(),rp=ea(),y1r=lr(),_t=L(),ei=Hr(),oa=ta(),bo=_r(),b1r=na(),ti=aa(),mr=w(),ca=P(),Mr=Kr(),ep=Qt(),Y=y(),va=Ue(),fa=He(),w1r=Kt(),E1r=ri(),N1r=sa(),A1r=ua(),tp=x9(),O1r=Y9(),S1r=$9(),Lr=Mr.BYTES_PER_ELEMENT*2,ip=b1r();function ii(r){return r instanceof K||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function np(r){return r===K||r.name==="Complex128Array"}function T1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Lr}function I1r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Lr*2}function K(){var r,e,t,i;if(e=arguments.length,!(this instanceof K))return e===0?new K:e===1?new K(arguments[0]):e===2?new K(arguments[0],arguments[1]):new K(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Mr(0);else if(e===1)if(Qi(arguments[0]))t=new Mr(arguments[0]*2);else if(wo(arguments[0]))if(t=arguments[0],i=t.length,i&&y1r(t)&&ei(t[0])){if(t=S1r(new Mr(i*2),t),t===null){if(!oa(i))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(arguments[0])}}else{if(T1r(t))t=w1r(t,0);else if(I1r(t))t=E1r(t,0);else if(!oa(i))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(t)}else if(K9(arguments[0])){if(t=arguments[0],!bo(t.byteLength/Lr))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Lr,t.byteLength));t=new Mr(t)}else if(rp(arguments[0])){if(t=arguments[0],ip===!1)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!_t(t[ti]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ti](),!_t(t.next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=tp(t),t instanceof Error)throw t;t=new Mr(t)}else throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!K9(t))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Qi(r))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!bo(r/Lr))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Lr,r));if(e===2){if(i=t.byteLength-r,!bo(i/Lr))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Lr,i));t=new Mr(t,r)}else{if(i=arguments[2],!Qi(i))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Lr>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Lr));t=new Mr(t,r,i*2)}}return mr(this,"_buffer",t),mr(this,"_length",t.length/2),this}mr(K,"BYTES_PER_ELEMENT",Lr);mr(K,"name","Complex64Array");mr(K,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,m;if(!_t(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!np(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!_t(n))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(ii(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),ei(l))u[m]=va(l),u[m+1]=fa(l);else if(Q9(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(wo(e)){if(n){for(v=e.length,e.get&&e.set?f=A1r("default"):f=N1r("default"),p=0;p<v;p++)if(!ei(f(e,p))){c=!0;break}if(c){if(!oa(v))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),ei(l))u[m]=va(l),u[m+1]=fa(l);else if(Q9(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(rp(e)&&ip&&_t(e[ti])){if(u=e[ti](),!_t(u.next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=O1r(u,n,t):o=tp(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});mr(K,"of",function(){var e,t;if(!_t(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!np(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ca(K.prototype,"buffer",function(){return this._buffer.buffer});ca(K.prototype,"byteLength",function(){return this._buffer.byteLength});ca(K.prototype,"byteOffset",function(){return this._buffer.byteOffset});mr(K.prototype,"BYTES_PER_ELEMENT",K.BYTES_PER_ELEMENT);mr(K.prototype,"copyWithin",function(e,t){if(!ii(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});mr(K.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!ii(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},mr(i,"next",f),mr(i,"return",v),ti&&mr(i,ti,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new ep(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});mr(K.prototype,"get",function(e){var t;if(!ii(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qi(e))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new ep(t[e],t[e+1])});ca(K.prototype,"length",function(){return this._length});mr(K.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!ii(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Qi(i))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ei(e)){if(i>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=va(e),n[i+1]=fa(e);return}if(ii(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(wo(e)){for(o=e.length,v=0;v<o;v++)if(!ei(e[v])){u=!0;break}if(u){if(!oa(o))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=va(f),n[i+1]=fa(f),i+=2;return}throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});ap.exports=K});var Ki=s((Iae,up)=>{"use strict";var _1r=sp();up.exports=_1r});var vp=s((_ae,op)=>{"use strict";function L1r(r){return r.re}op.exports=L1r});var We=s((Lae,fp)=>{"use strict";var P1r=vp();fp.exports=P1r});var lp=s((Pae,cp)=>{"use strict";function R1r(r){return r.im}cp.exports=R1r});var ze=s((Rae,pp)=>{"use strict";var F1r=lp();pp.exports=F1r});var mp=s((Fae,gp)=>{"use strict";var M1r=St(),B1r=Hr(),k1r=y(),j1r=We(),C1r=ze();function G1r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,M1r(i)&&i.length>=2)e.push(i[0],i[1]);else if(B1r(i))e.push(j1r(i),C1r(i));else return new TypeError(k1r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}gp.exports=G1r});var hp=s((Mae,dp)=>{"use strict";var V1r=St(),U1r=Hr(),H1r=y(),W1r=We(),z1r=ze();function D1r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),V1r(a)&&a.length>=2)i.push(a[0],a[1]);else if(U1r(a))i.push(W1r(a),z1r(a));else return new TypeError(H1r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}dp.exports=D1r});var yp=s((Bae,qp)=>{"use strict";var X1r=Hr(),x1r=We(),J1r=ze();function Y1r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!X1r(i))return null;r[a]=x1r(i),r[a+1]=J1r(i),a+=2}return r}qp.exports=Y1r});var Ip=s((kae,Tp)=>{"use strict";var rn=Ve().isPrimitive,bp=St(),No=Vr(),wp=qo(),Ep=ea(),Z1r=lr(),Lt=L(),ni=Hr(),la=ta(),Eo=_r(),$1r=na(),ai=aa(),dr=w(),ma=P(),Br=gr(),Np=$t(),pa=We(),ga=ze(),Q1r=Kt(),K1r=ri(),r3r=sa(),e3r=ua(),Z=y(),Ap=mp(),t3r=hp(),i3r=yp(),Pr=Br.BYTES_PER_ELEMENT*2,Op=$1r();function si(r){return r instanceof rr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Sp(r){return r===rr||r.name==="Complex64Array"}function n3r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Pr/2}function a3r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Pr}function rr(){var r,e,t,i;if(e=arguments.length,!(this instanceof rr))return e===0?new rr:e===1?new rr(arguments[0]):e===2?new rr(arguments[0],arguments[1]):new rr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Br(0);else if(e===1)if(rn(arguments[0]))t=new Br(arguments[0]*2);else if(No(arguments[0]))if(t=arguments[0],i=t.length,i&&Z1r(t)&&ni(t[0])){if(t=i3r(new Br(i*2),t),t===null){if(!la(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Br(arguments[0])}}else{if(n3r(t))t=Q1r(t,0);else if(a3r(t))t=K1r(t,0);else if(!la(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Br(t)}else if(wp(arguments[0])){if(t=arguments[0],!Eo(t.byteLength/Pr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Pr,t.byteLength));t=new Br(t)}else if(Ep(arguments[0])){if(t=arguments[0],Op===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Lt(t[ai]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ai](),!Lt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Ap(t),t instanceof Error)throw t;t=new Br(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!wp(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!rn(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Eo(r/Pr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Pr,r));if(e===2){if(i=t.byteLength-r,!Eo(i/Pr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Pr,i));t=new Br(t,r)}else{if(i=arguments[2],!rn(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Pr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Pr));t=new Br(t,r,i*2)}}return dr(this,"_buffer",t),dr(this,"_length",t.length/2),this}dr(rr,"BYTES_PER_ELEMENT",Pr);dr(rr,"name","Complex128Array");dr(rr,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,m;if(!Lt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Sp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Lt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(si(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),ni(l))u[m]=pa(l),u[m+1]=ga(l);else if(bp(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(No(e)){if(n){for(v=e.length,e.get&&e.set?f=e3r("default"):f=r3r("default"),p=0;p<v;p++)if(!ni(f(e,p))){c=!0;break}if(c){if(!la(v))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),ni(l))u[m]=pa(l),u[m+1]=ga(l);else if(bp(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(Ep(e)&&Op&&Lt(e[ai])){if(u=e[ai](),!Lt(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=t3r(u,n,t):o=Ap(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});dr(rr,"of",function(){var e,t;if(!Lt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Sp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ma(rr.prototype,"buffer",function(){return this._buffer.buffer});ma(rr.prototype,"byteLength",function(){return this._buffer.byteLength});ma(rr.prototype,"byteOffset",function(){return this._buffer.byteOffset});dr(rr.prototype,"BYTES_PER_ELEMENT",rr.BYTES_PER_ELEMENT);dr(rr.prototype,"copyWithin",function(e,t){if(!si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});dr(rr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},dr(i,"next",f),dr(i,"return",v),ai&&dr(i,ai,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Np(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});dr(rr.prototype,"get",function(e){var t;if(!si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!rn(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Np(t[e],t[e+1])});ma(rr.prototype,"length",function(){return this._length});dr(rr.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!si(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!rn(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ni(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=pa(e),n[i+1]=ga(e);return}if(si(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Br(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(No(e)){for(o=e.length,v=0;v<o;v++)if(!ni(e[v])){u=!0;break}if(u){if(!la(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Br(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=pa(f),n[i+1]=ga(f),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Tp.exports=rr});var en=s((jae,_p)=>{"use strict";var s3r=Ip();_p.exports=s3r});var Pp=s((Cae,Lp)=>{"use strict";var u3r=gr(),o3r=Kr(),v3r=pr(),f3r=Ot(),c3r=Yt(),l3r=xi(),p3r=Zt(),g3r=Ji(),m3r=Yi(),d3r=Ki(),h3r=en(),q3r=[u3r,o3r,f3r,v3r,l3r,c3r,m3r,p3r,g3r,d3r,h3r];Lp.exports=q3r});var Fp=s((Gae,Rp)=>{"use strict";var y3r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];Rp.exports=y3r});var kp=s((Vae,Bp)=>{"use strict";var b3r=At(),w3r=lr(),E3r=Ge(),N3r=e5(),A3r=Pp(),Mp=Fp(),O3r=Mp.length;function S3r(r){var e;if(w3r(r))return"generic";if(b3r(r))return null;for(e=0;e<O3r;e++)if(r instanceof A3r[e])return Mp[e];return N3r[E3r(r)]||null}Bp.exports=S3r});var da=s((Uae,jp)=>{"use strict";var T3r=kp();jp.exports=T3r});var Vp=s((Hae,Gp)=>{"use strict";var Cp=L(),I3r=Vr(),_3r=Uc(),L3r=Du(),P3r=Xu(),R3r=xu(),F3r=da(),Ao=y();function M3r(){var r,e,t,i,n,a,u,o,f;if(r=arguments[0],arguments.length>1)if(I3r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!Cp(t))throw new TypeError(Ao("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!Cp(t))throw new TypeError(Ao("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!_3r(r))throw new TypeError(Ao("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=F3r(i),L3r(i)?a=P3r(u):a=R3r(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}Gp.exports=M3r});var Hp=s((Wae,Up)=>{"use strict";var B3r=Vp();Up.exports=B3r});var zp=s((zae,Wp)=>{"use strict";function k3r(r){return r!==r}Wp.exports=k3r});var E=s((Dae,Dp)=>{"use strict";var j3r=zp();Dp.exports=j3r});var xp=s((Xae,Xp)=>{"use strict";var C3r={Complex64:"complex64",Complex128:"complex128"};Xp.exports=C3r});var Yp=s((xae,Jp)=>{"use strict";var G3r=Qt(),V3r=$t(),U3r=[G3r,V3r];Jp.exports=U3r});var $p=s((Jae,Zp)=>{"use strict";var H3r=["complex64","complex128"];Zp.exports=H3r});var rg=s((Yae,Kp)=>{"use strict";var W3r=Ge(),z3r=xp(),D3r=Yp(),Qp=$p(),X3r=Qp.length;function x3r(r){var e;for(e=0;e<X3r;e++)if(r instanceof D3r[e])return Qp[e];return z3r[W3r(r)]||null}Kp.exports=x3r});var Oo=s((Zae,eg)=>{"use strict";var J3r=rg();eg.exports=J3r});var ig=s(($ae,tg)=>{"use strict";var Y3r=gr(),Z3r=Kr(),$3r=en(),Q3r=Ki(),K3r={float64:Y3r,float32:Z3r,complex128:$3r,complex64:Q3r};tg.exports=K3r});var ag=s((Qae,ng)=>{"use strict";var r6r=ig();function e6r(r){return r6r[r]||null}ng.exports=e6r});var ug=s((Kae,sg)=>{"use strict";var t6r=ag();sg.exports=t6r});var vg=s((r0e,og)=>{"use strict";function i6r(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}og.exports=i6r});var mg=s((e0e,gg)=>{"use strict";var n6r=Qt(),a6r=$t(),fg=We(),cg=ze(),lg=Ue(),pg=He();function s6r(r,e,t,i,n,a){var u,o,f,v,c,l,p,m,h,d,g,q,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=lg(e),l=pg(e)):(v=fg(e),l=cg(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=lg(i),p=pg(i)):(c=fg(i),p=cg(i)),o===2?u=n6r:u=a6r,n===1)return a?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],a?q=n-1:q=n,d=(c-v)/q,g=(p-l)/q,N=1;N<q;N++)m=v+d*N,h=l+g*N,f.push(new u(m,h));return a&&f.push(new u(c,p)),f}gg.exports=s6r});var So=s((t0e,dg)=>{"use strict";function u6r(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}dg.exports=u6r});var To=s((i0e,wg)=>{"use strict";var hg=We(),qg=ze(),yg=Ue(),bg=He();function o6r(r,e,t,i,n,a,u){var o,f,v,c,l,p,m,h,d;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=yg(t),v=bg(t)):(o=hg(t),v=qg(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=yg(n),c=bg(n)):(f=hg(n),c=qg(n)),a===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?m=a-1:m=a,l=(f-o)/m,p=(c-v)/m,d=2,h=1;h<m;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}wg.exports=o6r});var Ng=s((n0e,Eg)=>{"use strict";var v6r=Object;Eg.exports=v6r});var ui=s((a0e,Ag)=>{"use strict";var f6r=Ng();Ag.exports=f6r});var Sg=s((s0e,Og)=>{"use strict";var c6r=Object.getPrototypeOf;Og.exports=c6r});var Ig=s((u0e,Tg)=>{"use strict";function l6r(r){return r.__proto__}Tg.exports=l6r});var Lg=s((o0e,_g)=>{"use strict";var p6r=ir(),g6r=Ig();function m6r(r){var e=g6r(r);return e||e===null?e:p6r(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}_g.exports=m6r});var Rg=s((v0e,Pg)=>{"use strict";var d6r=L(),h6r=Sg(),q6r=Lg(),Io;d6r(Object.getPrototypeOf)?Io=h6r:Io=q6r;Pg.exports=Io});var Mg=s((f0e,Fg)=>{"use strict";var y6r=ui(),b6r=Rg();function w6r(r){return r==null?null:(r=y6r(r),b6r(r))}Fg.exports=w6r});var Pt=s((c0e,Bg)=>{"use strict";var E6r=Mg();Bg.exports=E6r});var Cg=s((l0e,jg)=>{"use strict";var N6r=ea(),kg=L(),A6r=Pt(),ha=O(),O6r=ir(),S6r=Object.prototype;function T6r(r){var e;for(e in r)if(!ha(r,e))return!1;return!0}function I6r(r){var e;return N6r(r)?(e=A6r(r),e?!ha(r,"constructor")&&ha(e,"constructor")&&kg(e.constructor)&&O6r(e.constructor)==="[object Function]"&&ha(e,"isPrototypeOf")&&kg(e.isPrototypeOf)&&(e===S6r||T6r(r)):!0):!1}jg.exports=I6r});var _=s((p0e,Gg)=>{"use strict";var _6r=Cg();Gg.exports=_6r});var _o=s((g0e,Vg)=>{"use strict";function L6r(r){return typeof r=="string"}Vg.exports=L6r});var Hg=s((m0e,Ug)=>{"use strict";var P6r=String.prototype.valueOf;Ug.exports=P6r});var zg=s((d0e,Wg)=>{"use strict";var R6r=Hg();function F6r(r){try{return R6r.call(r),!0}catch{return!1}}Wg.exports=F6r});var Lo=s((h0e,Dg)=>{"use strict";var M6r=Di(),B6r=ir(),k6r=zg(),j6r=M6r();function C6r(r){return typeof r=="object"?r instanceof String?!0:j6r?k6r(r):B6r(r)==="[object String]":!1}Dg.exports=C6r});var xg=s((q0e,Xg)=>{"use strict";var G6r=_o(),V6r=Lo();function U6r(r){return G6r(r)||V6r(r)}Xg.exports=U6r});var er=s((y0e,Yg)=>{"use strict";var Jg=w(),Po=xg(),H6r=_o(),W6r=Lo();Jg(Po,"isPrimitive",H6r);Jg(Po,"isObject",W6r);Yg.exports=Po});var Fo=s((b0e,$g)=>{"use strict";var z6r=_(),Zg=O(),D6r=er().isPrimitive,X6r=cr().isPrimitive,Ro=y();function x6r(r,e){return z6r(e)?Zg(e,"dtype")&&(r.dtype=e.dtype,!D6r(r.dtype))?new TypeError(Ro("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Zg(e,"endpoint")&&(r.endpoint=e.endpoint,!X6r(r.endpoint))?new TypeError(Ro("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(Ro("invalid argument. Options argument must be an object. Value: `%s`.",e))}$g.exports=x6r});var Mo=s((w0e,J6r)=>{J6r.exports={endpoint:!0}});var nm=s((E0e,im)=>{"use strict";var Qg=Hr(),Kg=j().isPrimitive,Y6r=Ve().isPrimitive,rm=E(),em=Oo(),Z6r=ug(),$6r=Kt(),Q6r=ri(),oi=y(),K6r=vg(),r4r=mg(),e4r=So(),tm=To(),t4r=Fo(),i4r=Mo();function n4r(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(o=em(r),o===null){if(!Qg(r))throw new TypeError(oi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!Kg(r)||rm(r))throw new TypeError(oi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=em(e),f===null){if(!Qg(e))throw new TypeError(oi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!Kg(e)||rm(e))throw new TypeError(oi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!Y6r(t))throw new TypeError(oi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:i4r.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=t4r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?r4r(o,r,f,e,t,i.endpoint):K6r(r,e,t,i.endpoint);if(n=Z6r(i.dtype),n===null)throw new TypeError(oi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return tm($6r(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return tm(Q6r(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return e4r(u,r,e,t,i.endpoint)}im.exports=n4r});var sm=s((N0e,am)=>{"use strict";var a4r=Du(),s4r=sa(),u4r=xu(),o4r=ua(),v4r=Xu(),f4r=da();function c4r(r){var e=f4r(r);return a4r(r)?{accessorProtocol:!0,accessors:[o4r(e),v4r(e)]}:{accessorProtocol:!1,accessors:[s4r(e),u4r(e)]}}am.exports=c4r});var om=s((A0e,um)=>{"use strict";var l4r=sm();um.exports=l4r});var fm=s((O0e,vm)=>{"use strict";var p4r=om();function g4r(r){var e=p4r(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}vm.exports=g4r});var qa=s((S0e,cm)=>{"use strict";var m4r=fm();cm.exports=m4r});var hm=s((T0e,dm)=>{"use strict";var d4r=Qt(),h4r=$t(),lm=We(),pm=ze(),gm=Ue(),mm=He();function q4r(r,e,t,i,n,a,u){var o,f,v,c,l,p,m,h,d,g,q,N,A,F;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=gm(t),l=mm(t)):(v=lm(t),l=pm(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=gm(n),p=mm(n)):(c=lm(n),p=pm(n)),f===2?o=d4r:o=h4r,h=r.data,m=r.accessors[1],a===1)return u?m(h,0,new o(c,p)):m(h,0,new o(v,l)),r;for(m(h,0,new o(v,l)),u?A=a-1:A=a,q=(c-v)/A,N=(p-l)/A,F=1;F<A;F++)d=v+q*F,g=l+N*F,m(h,F,new o(d,g));return u&&m(h,A,new o(c,p)),r}dm.exports=q4r});var ym=s((I0e,qm)=>{"use strict";function y4r(r,e,t,i,n){var a,u,o,f,v;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(a,v,e+f*v);return n&&u(a,o,t),r}qm.exports=y4r});var Tm=s((_0e,Sm)=>{"use strict";var bm=Hr(),wm=j().isPrimitive,b4r=Vr(),tn=y(),Em=E(),Nm=Oo(),w4r=da(),E4r=Kt(),N4r=ri(),Am=qa(),A4r=hm(),O4r=ym(),Om=To(),S4r=So(),T4r=Fo(),I4r=Mo();function _4r(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(a=Nm(r),a===null){if(!bm(r))throw new TypeError(tn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!wm(r)||Em(r))throw new TypeError(tn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=Nm(e),u===null){if(!bm(e))throw new TypeError(tn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!wm(e)||Em(e))throw new TypeError(tn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!b4r(t))throw new TypeError(tn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:I4r.endpoint},arguments.length>3&&(n=T4r(i,arguments[3]),n))throw n;if(f=w4r(t),f===null&&(f="generic"),f==="complex64")return Om(E4r(t,0),a,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return Om(N4r(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=Am(t),A4r(v,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=Am(t),v.accessorProtocol?(O4r(v,r,e,t.length,i.endpoint),t):(S4r(t,r,e,t.length,i.endpoint),t)}Sm.exports=_4r});var Lm=s((L0e,_m)=>{"use strict";var L4r=w(),Im=nm(),P4r=Tm();L4r(Im,"assign",P4r);_m.exports=Im});var Rm=s((P0e,Pm)=>{"use strict";var R4r=j().isPrimitive,F4r=er().isPrimitive,M4r=cr().isPrimitive,B4r=lr(),k4r=y(),j4r={number:R4r,string:F4r,boolean:M4r};function C4r(r,e,t){var i,n,a,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],a=e[f],u=j4r[a],u(o))i.push([[o]]),n.push([1,1]);else if(B4r(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(k4r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],a,a,String(o)));return[i,n]}Pm.exports=C4r});var ya=s((R0e,Fm)=>{"use strict";var G4r=Rm();Fm.exports=G4r});var Bm=s((F0e,Mm)=>{"use strict";var V4r=$n();function U4r(r){return V4r(1,r)}Mm.exports=U4r});var jm=s((M0e,km)=>{"use strict";var H4r=Bm();km.exports=H4r});var Gm=s((B0e,Cm)=>{"use strict";function W4r(r,e,t){var i,n,a,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],a=0;a<i;a++)f[a]=t(o[a])}Cm.exports=W4r});var Bo=s((k0e,Vm)=>{"use strict";var z4r=Gm();Vm.exports=z4r});var Hm=s((j0e,Um)=>{"use strict";var D4r=$n();function X4r(r){return D4r(0,r)}Um.exports=X4r});var ba=s((C0e,Wm)=>{"use strict";var x4r=Hm();Wm.exports=x4r});var Dm=s((G0e,zm)=>{"use strict";var kr=ar(),J4r=_u(),Y4r=Pu(),Z4r=Zn(),$4r=$n(),Q4r=Wv(),K4r=Ru(),rvr=Hp(),evr=Lm(),tvr=ya(),ivr=jm(),nvr=Bo(),avr=ba();function svr(r){return kr(r,"bbinary2d",J4r),kr(r,"bternary2d",Y4r),kr(r,"broadcastShapes",Z4r),kr(r,"filled2d",$4r),kr(r,"filled2dBy",Q4r),kr(r,"flattenArray",K4r),kr(r,"iterator2array",rvr),kr(r,"linspace",evr),kr(r,"normalizeBroadcastArgs",tvr),kr(r,"ones2d",ivr),kr(r,"unary2d",nvr),kr(r,"zeros2d",avr),r}zm.exports=svr});var Jm=s((V0e,xm)=>{"use strict";var Xm=y();function uvr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(Xm('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(Xm('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}xm.exports=uvr});var Zm=s((U0e,Ym)=>{"use strict";var ovr=Jm();Ym.exports=ovr});var Qm=s((H0e,$m)=>{"use strict";var vvr=j().isPrimitive,fvr=Zm(),cvr=y();function lvr(r,e,t,i,n,a){var u,o;if(!(vvr(r)&&fvr(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(cvr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}$m.exports=lvr});var rd=s((W0e,Km)=>{"use strict";var pvr=Qm();Km.exports=pvr});var td=s((z0e,ed)=>{"use strict";var gvr=cr().isPrimitive,mvr=y();function dvr(r,e){if(!gvr(r))throw new TypeError(mvr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}ed.exports=dvr});var nd=s((D0e,id)=>{"use strict";var hvr=td();id.exports=hvr});var sd=s((X0e,ad)=>{"use strict";function qvr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}ad.exports=qvr});var od=s((x0e,ud)=>{"use strict";var yvr=sd();ud.exports=yvr});var fd=s((J0e,vd)=>{"use strict";var bvr=y(),wvr=od();function Evr(r,e,t){if(!wvr(r,e))throw new TypeError(bvr("invalid argument. %s must be broadcast compatible.",t))}vd.exports=Evr});var ld=s((Y0e,cd)=>{"use strict";var Nvr=fd();cd.exports=Nvr});var gd=s((Z0e,pd)=>{"use strict";function Avr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}pd.exports=Avr});var dd=s(($0e,md)=>{"use strict";var Ovr=gd();md.exports=Ovr});var qd=s((Q0e,hd)=>{"use strict";var Svr=y(),Tvr=dd();function Ivr(r,e,t,i){if(!Tvr(r,e))throw new TypeError(Svr("invalid argument. %s must be broadcast compatible with %s.",t,i))}hd.exports=Ivr});var bd=s((K0e,yd)=>{"use strict";var _vr=qd();yd.exports=_vr});var Ed=s((rse,wd)=>{"use strict";var Lvr=y();function Pvr(r,e){if(r===void 0)throw new Error(Lvr("invalid invocation. Must provide %s.",e))}wd.exports=Pvr});var ko=s((ese,Nd)=>{"use strict";var Rvr=Ed();Nd.exports=Rvr});var Od=s((tse,Ad)=>{"use strict";var Fvr=y();function Mvr(r,e,t,i){if(!(r>e))throw new TypeError(Fvr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Ad.exports=Mvr});var Td=s((ise,Sd)=>{"use strict";var Bvr=Od();Sd.exports=Bvr});var _d=s((nse,Id)=>{"use strict";var kvr=y();function jvr(r,e,t,i){if(!(r>=e))throw new TypeError(kvr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Id.exports=jvr});var Pd=s((ase,Ld)=>{"use strict";var Cvr=_d();Ld.exports=Cvr});var Fd=s((sse,Rd)=>{"use strict";var Gvr=Ur().isPrimitive,Vvr=y();function Uvr(r,e){if(!Gvr(r))throw new TypeError(Vvr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}Rd.exports=Uvr});var Bd=s((use,Md)=>{"use strict";var Hvr=Fd();Md.exports=Hvr});var jd=s((ose,kd)=>{"use strict";var Wvr=y();function zvr(r,e,t,i){if(!(r<e))throw new TypeError(Wvr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}kd.exports=zvr});var Gd=s((vse,Cd)=>{"use strict";var Dvr=jd();Cd.exports=Dvr});var Ud=s((fse,Vd)=>{"use strict";var Xvr=y();function xvr(r,e,t,i){if(!(r<=e))throw new TypeError(Xvr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Vd.exports=xvr});var Wd=s((cse,Hd)=>{"use strict";var Jvr=Ud();Hd.exports=Jvr});var Dd=s((lse,zd)=>{"use strict";var Yvr=Ve().isPrimitive,Zvr=y();function $vr(r,e){if(!Yvr(r))throw new TypeError(Zvr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}zd.exports=$vr});var xd=s((pse,Xd)=>{"use strict";var Qvr=Dd();Xd.exports=Qvr});var jo=s((gse,Jd)=>{"use strict";var Kvr=j().isPrimitive;function rfr(r){return Kvr(r)&&r>=0}Jd.exports=rfr});var Co=s((mse,Yd)=>{"use strict";var efr=j().isObject;function tfr(r){return efr(r)&&r.valueOf()>=0}Yd.exports=tfr});var $d=s((dse,Zd)=>{"use strict";var ifr=jo(),nfr=Co();function afr(r){return ifr(r)||nfr(r)}Zd.exports=afr});var Vo=s((hse,Kd)=>{"use strict";var Qd=w(),Go=$d(),sfr=jo(),ufr=Co();Qd(Go,"isPrimitive",sfr);Qd(Go,"isObject",ufr);Kd.exports=Go});var eh=s((qse,rh)=>{"use strict";var ofr=Vo().isPrimitive,vfr=y();function ffr(r,e){if(!ofr(r))throw new TypeError(vfr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}rh.exports=ffr});var ih=s((yse,th)=>{"use strict";var cfr=eh();th.exports=cfr});var ah=s((bse,nh)=>{"use strict";var lfr=j().isPrimitive,pfr=y();function gfr(r,e){if(!lfr(r))throw new TypeError(pfr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}nh.exports=gfr});var uh=s((wse,sh)=>{"use strict";var mfr=ah();sh.exports=mfr});var vh=s((Ese,oh)=>{"use strict";var dfr=y();function hfr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(dfr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}oh.exports=hfr});var ch=s((Nse,fh)=>{"use strict";var qfr=vh();fh.exports=qfr});var Uo=s((Ase,lh)=>{"use strict";var yfr=Ur().isPrimitive;function bfr(r){return yfr(r)&&r>0}lh.exports=bfr});var Ho=s((Ose,ph)=>{"use strict";var wfr=Ur().isObject;function Efr(r){return wfr(r)&&r.valueOf()>0}ph.exports=Efr});var mh=s((Sse,gh)=>{"use strict";var Nfr=Uo(),Afr=Ho();function Ofr(r){return Nfr(r)||Afr(r)}gh.exports=Ofr});var ee=s((Tse,hh)=>{"use strict";var dh=w(),Wo=mh(),Sfr=Uo(),Tfr=Ho();dh(Wo,"isPrimitive",Sfr);dh(Wo,"isObject",Tfr);hh.exports=Wo});var yh=s((Ise,qh)=>{"use strict";var Ifr=ee().isPrimitive,_fr=y();function Lfr(r,e){if(!Ifr(r))throw new TypeError(_fr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}qh.exports=Lfr});var zo=s((_se,bh)=>{"use strict";var Pfr=yh();bh.exports=Pfr});var Do=s((Lse,wh)=>{"use strict";var Rfr=j().isPrimitive;function Ffr(r){return Rfr(r)&&r>0}wh.exports=Ffr});var Xo=s((Pse,Eh)=>{"use strict";var Mfr=j().isObject;function Bfr(r){return Mfr(r)&&r.valueOf()>0}Eh.exports=Bfr});var Ah=s((Rse,Nh)=>{"use strict";var kfr=Do(),jfr=Xo();function Cfr(r){return kfr(r)||jfr(r)}Nh.exports=Cfr});var D=s((Fse,Sh)=>{"use strict";var Oh=w(),xo=Ah(),Gfr=Do(),Vfr=Xo();Oh(xo,"isPrimitive",Gfr);Oh(xo,"isObject",Vfr);Sh.exports=xo});var Ih=s((Mse,Th)=>{"use strict";var Ufr=D().isPrimitive,Hfr=y();function Wfr(r,e){if(!Ufr(r))throw new TypeError(Hfr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}Th.exports=Wfr});var Lh=s((Bse,_h)=>{"use strict";var zfr=Ih();_h.exports=zfr});var Jo=s((kse,Ph)=>{"use strict";var Dfr=j().isPrimitive;function Xfr(r){return Dfr(r)&&r>=0&&r<=1}Ph.exports=Xfr});var Yo=s((jse,Rh)=>{"use strict";var xfr=j().isObject;function Jfr(r){return xfr(r)&&r.valueOf()>=0&&r.valueOf()<=1}Rh.exports=Jfr});var Mh=s((Cse,Fh)=>{"use strict";var Yfr=Jo(),Zfr=Yo();function $fr(r){return Yfr(r)||Zfr(r)}Fh.exports=$fr});var nn=s((Gse,kh)=>{"use strict";var Bh=w(),Zo=Mh(),Qfr=Jo(),Kfr=Yo();Bh(Zo,"isPrimitive",Qfr);Bh(Zo,"isObject",Kfr);kh.exports=Zo});var Ch=s((Vse,jh)=>{"use strict";var rcr=nn().isPrimitive,ecr=y();function tcr(r,e){if(!rcr(r))throw new TypeError(ecr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}jh.exports=tcr});var Vh=s((Use,Gh)=>{"use strict";var icr=Ch();Gh.exports=icr});var Hh=s((Hse,Uh)=>{"use strict";var ncr=lr(),acr=y();function scr(r,e){if(!ncr(r))throw new TypeError(acr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Uh.exports=scr});var zh=s((Wse,Wh)=>{"use strict";var ucr=Hh();Wh.exports=ucr});var Xh=s((zse,Dh)=>{"use strict";function ocr(r){return r.length===1||r[0].length===1}Dh.exports=ocr});var Jh=s((Dse,xh)=>{"use strict";var vcr=Xh();xh.exports=vcr});var Zh=s((Xse,Yh)=>{"use strict";var fcr=lr(),ccr=Jh();function lcr(r){return fcr(r)&&ccr(r)}Yh.exports=lcr});var Qh=s((xse,$h)=>{"use strict";var pcr=Zh();$h.exports=pcr});var rq=s((Jse,Kh)=>{"use strict";var gcr=y(),mcr=Qh();function dcr(r,e){if(!mcr(r))throw new TypeError(gcr("invalid argument. %s must consist of only a single row or a single column.",e))}Kh.exports=dcr});var tq=s((Yse,eq)=>{"use strict";var hcr=rq();eq.exports=hcr});var nq=s((Zse,iq)=>{"use strict";function qcr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}iq.exports=qcr});var sq=s(($se,aq)=>{"use strict";var ycr=nq();aq.exports=ycr});var oq=s((Qse,uq)=>{"use strict";var bcr=y(),wcr=sq();function Ecr(r,e,t){if(!wcr(r,e))throw new TypeError(bcr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}uq.exports=Ecr});var fq=s((Kse,vq)=>{"use strict";var Ncr=oq();vq.exports=Ncr});var lq=s((rue,cq)=>{"use strict";var Acr=er().isPrimitive,Ocr=y();function Scr(r,e){if(!Acr(r))throw new TypeError(Ocr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}cq.exports=Scr});var gq=s((eue,pq)=>{"use strict";var Tcr=lq();pq.exports=Tcr});var dq=s((tue,mq)=>{"use strict";var Icr=y();function _cr(r){throw new Error(Icr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}mq.exports=_cr});var qq=s((iue,hq)=>{"use strict";var Lcr=dq();hq.exports=Lcr});var wq=s((nue,bq)=>{"use strict";var yq=zo(),Pcr=ko();function Rcr(r,e,t){yq(r,"Number of rows"),yq(e,"Number of columns"),Pcr(t,"a pseudorandom number generator seed")}bq.exports=Rcr});var Nq=s((aue,Eq)=>{"use strict";var Fcr=wq();Eq.exports=Fcr});var Oq=s((sue,Aq)=>{"use strict";var $=ar(),Mcr=lr(),Bcr=rd(),kcr=nd(),jcr=ld(),Ccr=bd(),Gcr=ko(),Vcr=Td(),Ucr=Pd(),Hcr=Bd(),Wcr=Gd(),zcr=Wd(),Dcr=xd(),Xcr=ih(),xcr=uh(),Jcr=ch(),Ycr=zo(),Zcr=Lh(),$cr=Vh(),Qcr=zh(),Kcr=tq(),r5r=fq(),e5r=gq(),t5r=qq(),i5r=Nq();function n5r(r){return $(r,"isBetween",Bcr),$(r,"isBoolean",kcr),$(r,"isBroadcastCompatible",jcr),$(r,"isBroadcastCompatibleWith",Ccr),$(r,"isDefined",Gcr),$(r,"isGreaterThan",Vcr),$(r,"isGreaterThanEqual",Ucr),$(r,"isInteger",Hcr),$(r,"isLessThan",Wcr),$(r,"isLessThanEqual",zcr),$(r,"isNonNegativeInteger",Dcr),$(r,"isNonNegativeNumber",Xcr),$(r,"isNumber",xcr),$(r,"isOneOf",Jcr),$(r,"isPositiveInteger",Ycr),$(r,"isPositiveNumber",Zcr),$(r,"isProbability",$cr),$(r,"isRange",Qcr),$(r,"isRange1d",Kcr),$(r,"isSameShape",r5r),$(r,"isString",e5r),$(r,"unrecognizedOptionName",t5r),$(r,"verifyCommonPRNGArgs",i5r),r.base={},$(r.base,"isArray",Mcr),r}Aq.exports=n5r});var Tq=s((uue,Sq)=>{"use strict";var $o=4;function a5r(r,e,t,i,n,a){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%$o,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<$o)return n;for(v=f;v<r;v+=$o)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=a;return n}Sq.exports=a5r});var _q=s((oue,Iq)=>{"use strict";var an=4;function s5r(r,e,t,i,n,a,u,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&u===1){if(c=r%an,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=u;if(r<an)return a;for(l=c;l<r;l+=an)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=an,v+=an;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=u;return a}Iq.exports=s5r});var Qo=s((vue,Pq)=>{"use strict";var u5r=w(),Lq=Tq(),o5r=_q();u5r(Lq,"ndarray",o5r);Pq.exports=Lq});var Mq=s((fue,Fq)=>{"use strict";var Rq=ar(),v5r=Qo().ndarray,f5r=Qo().ndarray;function c5r(r){return Rq(r,"daxpy",v5r),Rq(r,"saxpy",f5r),r}Fq.exports=c5r});var kq=s((cue,Bq)=>{"use strict";var l5r=Pt(),p5r=ir();function g5r(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(p5r(r)==="[object Error]")return!0;r=l5r(r)}return!1}Bq.exports=g5r});var Cq=s((lue,jq)=>{"use strict";var m5r=kq();jq.exports=m5r});var Ko=s((pue,Gq)=>{"use strict";function d5r(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Gq.exports=d5r});var Uq=s((gue,Vq)=>{"use strict";var h5r=Ko(),q5r=h5r();Vq.exports=q5r});var zq=s((mue,Wq)=>{"use strict";var y5r=w(),Hq=Ko(),b5r=Uq();y5r(Hq,"REGEXP",b5r);Wq.exports=Hq});var Xq=s((due,Dq)=>{"use strict";var w5r=er().isPrimitive,E5r=zq(),N5r=y();function A5r(r){if(!w5r(r))throw new TypeError(N5r("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=E5r().exec(r),r?new RegExp(r[1],r[2]):null}Dq.exports=A5r});var Jq=s((hue,xq)=>{"use strict";var O5r=Xq();xq.exports=O5r});var r2=s((que,Yq)=>{"use strict";var S5r=j().isPrimitive,T5r=E();function I5r(r){return S5r(r)&&T5r(r)}Yq.exports=I5r});var e2=s((yue,Zq)=>{"use strict";var _5r=j().isObject,L5r=E();function P5r(r){return _5r(r)&&L5r(r.valueOf())}Zq.exports=P5r});var Qq=s((bue,$q)=>{"use strict";var R5r=r2(),F5r=e2();function M5r(r){return R5r(r)||F5r(r)}$q.exports=M5r});var or=s((wue,ry)=>{"use strict";var Kq=w(),t2=Qq(),B5r=r2(),k5r=e2();Kq(t2,"isPrimitive",B5r);Kq(t2,"isObject",k5r);ry.exports=t2});var ny=s((Eue,iy)=>{"use strict";var ey=or(),j5r=Vr(),C5r=er().isPrimitive,G5r=Ur().isPrimitive,ty=y();function V5r(r,e,t){var i,n;if(!j5r(r)&&!C5r(r))throw new TypeError(ty("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!G5r(t))throw new TypeError(ty("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(ey(e)){for(;n<i;n++)if(ey(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}iy.exports=V5r});var wa=s((Nue,ay)=>{"use strict";var U5r=ny();ay.exports=U5r});var Ea=s((Aue,sy)=>{"use strict";function H5r(r){return Object.keys(Object(r))}sy.exports=H5r});var oy=s((Oue,uy)=>{"use strict";var W5r=Ea();function z5r(){return(W5r(arguments)||"").length!==2}function D5r(){return z5r(1,2)}uy.exports=D5r});var fy=s((Sue,vy)=>{"use strict";var X5r=typeof Object.keys<"u";vy.exports=X5r});var i2=s((Tue,cy)=>{"use strict";var x5r=ir();function J5r(r){return x5r(r)==="[object Arguments]"}cy.exports=J5r});var gy=s((Iue,py)=>{"use strict";var Y5r=i2(),ly;function Z5r(){return Y5r(arguments)}ly=Z5r();py.exports=ly});var n2=s((_ue,my)=>{"use strict";var $5r=Object.prototype.propertyIsEnumerable;my.exports=$5r});var qy=s((Lue,hy)=>{"use strict";var Q5r=n2(),dy;function K5r(){return!Q5r.call("beep","0")}dy=K5r();hy.exports=dy});var by=s((Pue,yy)=>{"use strict";var rlr=er(),elr=or().isPrimitive,tlr=Ur().isPrimitive,ilr=n2(),nlr=qy();function alr(r,e){var t;return r==null?!1:(t=ilr.call(r,e),!t&&nlr&&rlr(r)?(e=+e,!elr(e)&&tlr(e)&&e>=0&&e<r.length):t)}yy.exports=alr});var sn=s((Rue,wy)=>{"use strict";var slr=by();wy.exports=slr});var Ny=s((Fue,Ey)=>{"use strict";var ulr=O(),olr=sn(),vlr=lr(),flr=_r(),clr=xt();function llr(r){return r!==null&&typeof r=="object"&&!vlr(r)&&typeof r.length=="number"&&flr(r.length)&&r.length>=0&&r.length<=clr&&ulr(r,"callee")&&!olr(r,"callee")}Ey.exports=llr});var s2=s((Mue,Ay)=>{"use strict";var plr=gy(),glr=i2(),mlr=Ny(),a2;plr?a2=glr:a2=mlr;Ay.exports=a2});var Ty=s((Bue,Sy)=>{"use strict";var dlr=s2(),Oy=Ea(),hlr=Array.prototype.slice;function qlr(r){return dlr(r)?Oy(hlr.call(r)):Oy(r)}Sy.exports=qlr});var _y=s((kue,Iy)=>{"use strict";function ylr(){}Iy.exports=ylr});var C=s((jue,Ly)=>{"use strict";var blr=_y();Ly.exports=blr});var Ry=s((Cue,Py)=>{"use strict";var wlr=sn(),Elr=C(),Nlr=wlr(Elr,"prototype");Py.exports=Nlr});var My=s((Gue,Fy)=>{"use strict";var Alr=sn(),Olr={toString:null},Slr=!Alr(Olr,"toString");Fy.exports=Slr});var u2=s((Vue,By)=>{"use strict";function Tlr(r){return r.constructor&&r.constructor.prototype===r}By.exports=Tlr});var ky=s((Uue,Ilr)=>{Ilr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Cy=s((Hue,jy)=>{"use strict";var _lr=typeof window>"u"?void 0:window;jy.exports=_lr});var Hy=s((Wue,Uy)=>{"use strict";var Llr=O(),Plr=wa(),Gy=Qn(),Rlr=u2(),Flr=ky(),vi=Cy(),Vy;function Mlr(){var r;if(Gy(vi)==="undefined")return!1;for(r in vi)try{Plr(Flr,r)===-1&&Llr(vi,r)&&vi[r]!==null&&Gy(vi[r])==="object"&&Rlr(vi[r])}catch{return!0}return!1}Vy=Mlr();Uy.exports=Vy});var zy=s((zue,Wy)=>{"use strict";var Blr=typeof window<"u";Wy.exports=Blr});var xy=s((Due,Xy)=>{"use strict";var klr=Hy(),Dy=u2(),jlr=zy();function Clr(r){if(jlr===!1&&!klr)return Dy(r);try{return Dy(r)}catch{return!1}}Xy.exports=Clr});var Jy=s((Xue,Glr)=>{Glr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var $y=s((xue,Zy)=>{"use strict";var Vlr=zu(),o2=O(),Ulr=s2(),Hlr=Ry(),Wlr=My(),zlr=xy(),Yy=Jy();function Dlr(r){var e,t,i,n,a,u,o;if(n=[],Ulr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!o2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Vlr(r))return n;t=Hlr&&i}for(a in r)!(t&&a==="prototype")&&o2(r,a)&&n.push(String(a));if(Wlr)for(e=zlr(r),o=0;o<Yy.length;o++)u=Yy[o],!(e&&u==="constructor")&&o2(r,u)&&n.push(String(u));return n}Zy.exports=Dlr});var Ky=s((Jue,Qy)=>{"use strict";var Xlr=oy(),xlr=fy(),Jlr=Ea(),Ylr=Ty(),Zlr=$y(),Na;xlr?Xlr()?Na=Ylr:Na=Jlr:Na=Zlr;Qy.exports=Na});var un=s((Yue,rb)=>{"use strict";var $lr=Ky();rb.exports=$lr});var tb=s((Zue,eb)=>{"use strict";var Qlr=typeof Object.getOwnPropertyNames<"u";eb.exports=Qlr});var ab=s(($ue,nb)=>{"use strict";var ib=ui(),Klr=ib.getOwnPropertyNames;function r8r(r){return Klr(ib(r))}nb.exports=r8r});var ub=s((Que,sb)=>{"use strict";var e8r=ui(),t8r=un();function i8r(r){return t8r(e8r(r))}sb.exports=i8r});var vb=s((Kue,ob)=>{"use strict";var n8r=tb(),a8r=ab(),s8r=ub(),v2;n8r?v2=a8r:v2=s8r;ob.exports=v2});var cb=s((roe,fb)=>{"use strict";var u8r=typeof Object.getOwnPropertyDescriptor<"u";fb.exports=u8r});var pb=s((eoe,lb)=>{"use strict";var o8r=Object.getOwnPropertyDescriptor;function v8r(r,e){var t;return r==null?null:(t=o8r(r,e),t===void 0?null:t)}lb.exports=v8r});var mb=s((toe,gb)=>{"use strict";var f8r=O();function c8r(r,e){return f8r(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}gb.exports=c8r});var hb=s((ioe,db)=>{"use strict";var l8r=cb(),p8r=pb(),g8r=mb(),f2;l8r?f2=p8r:f2=g8r;db.exports=f2});var yb=s((noe,qb)=>{"use strict";var m8r=typeof Buffer=="function"?Buffer:null;qb.exports=m8r});var wb=s((aoe,bb)=>{"use strict";var d8r=At(),Aa=yb();function h8r(){var r,e;if(typeof Aa!="function")return!1;try{typeof Aa.from=="function"?e=Aa.from([1,2,3,4]):e=new Aa([1,2,3,4]),r=d8r(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}bb.exports=h8r});var Nb=s((soe,Eb)=>{"use strict";var q8r=wb();Eb.exports=q8r});var Sb=s(Oa=>{"use strict";Oa.byteLength=b8r;Oa.toByteArray=E8r;Oa.fromByteArray=O8r;var Xr=[],jr=[],y8r=typeof Uint8Array<"u"?Uint8Array:Array,c2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Rt=0,Ab=c2.length;Rt<Ab;++Rt)Xr[Rt]=c2[Rt],jr[c2.charCodeAt(Rt)]=Rt;var Rt,Ab;jr["-".charCodeAt(0)]=62;jr["_".charCodeAt(0)]=63;function Ob(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function b8r(r){var e=Ob(r),t=e[0],i=e[1];return(t+i)*3/4-i}function w8r(r,e,t){return(e+t)*3/4-t}function E8r(r){var e,t=Ob(r),i=t[0],n=t[1],a=new y8r(w8r(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=jr[r.charCodeAt(f)]<<18|jr[r.charCodeAt(f+1)]<<12|jr[r.charCodeAt(f+2)]<<6|jr[r.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=jr[r.charCodeAt(f)]<<2|jr[r.charCodeAt(f+1)]>>4,a[u++]=e&255),n===1&&(e=jr[r.charCodeAt(f)]<<10|jr[r.charCodeAt(f+1)]<<4|jr[r.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function N8r(r){return Xr[r>>18&63]+Xr[r>>12&63]+Xr[r>>6&63]+Xr[r&63]}function A8r(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(N8r(i));return n.join("")}function O8r(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(A8r(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(Xr[e>>2]+Xr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Xr[e>>10]+Xr[e>>4&63]+Xr[e<<2&63]+"=")),n.join("")}});var Tb=s(l2=>{l2.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-v}return(m?-1:1)*u*Math.pow(2,a-i)};l2.write=function(r,e,t,i,n,a){var u,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+m]=o&255,m+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+m]=u&255,m+=h,u/=256,v-=8);r[t+m-h]|=d*128}});var zb=s(pi=>{"use strict";var p2=Sb(),ci=Tb(),Ib=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;pi.Buffer=b;pi.SlowBuffer=P8r;pi.INSPECT_MAX_BYTES=50;var Sa=2147483647;pi.kMaxLength=Sa;b.TYPED_ARRAY_SUPPORT=S8r();!b.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function S8r(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.byteOffset}});function te(r){if(r>Sa)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,b.prototype),e}function b(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return h2(r)}return Rb(r,e,t)}b.poolSize=8192;function Rb(r,e,t){if(typeof r=="string")return I8r(r,e);if(ArrayBuffer.isView(r))return _8r(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(xr(r,ArrayBuffer)||r&&xr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(xr(r,SharedArrayBuffer)||r&&xr(r.buffer,SharedArrayBuffer)))return m2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return b.from(i,e,t);let n=L8r(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return b.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}b.from=function(r,e,t){return Rb(r,e,t)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function Fb(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function T8r(r,e,t){return Fb(r),r<=0?te(r):e!==void 0?typeof t=="string"?te(r).fill(e,t):te(r).fill(e):te(r)}b.alloc=function(r,e,t){return T8r(r,e,t)};function h2(r){return Fb(r),te(r<0?0:q2(r)|0)}b.allocUnsafe=function(r){return h2(r)};b.allocUnsafeSlow=function(r){return h2(r)};function I8r(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Mb(r,e)|0,i=te(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function g2(r){let e=r.length<0?0:q2(r.length)|0,t=te(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function _8r(r){if(xr(r,Uint8Array)){let e=new Uint8Array(r);return m2(e.buffer,e.byteOffset,e.byteLength)}return g2(r)}function m2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,b.prototype),i}function L8r(r){if(b.isBuffer(r)){let e=q2(r.length)|0,t=te(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||b2(r.length)?te(0):g2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return g2(r.data)}function q2(r){if(r>=Sa)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Sa.toString(16)+" bytes");return r|0}function P8r(r){return+r!=r&&(r=0),b.alloc(+r)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,t){if(xr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),xr(t,Uint8Array)&&(t=b.from(t,t.offset,t.byteLength)),!b.isBuffer(e)||!b.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=b.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(xr(u,Uint8Array))a+u.length>n.length?(b.isBuffer(u)||(u=b.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(b.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function Mb(r,e){if(b.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||xr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return d2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Wb(r).length;default:if(n)return i?-1:d2(r).length;e=(""+e).toLowerCase(),n=!0}}b.byteLength=Mb;function R8r(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return H8r(this,e,t);case"utf8":case"utf-8":return kb(this,e,t);case"ascii":return V8r(this,e,t);case"latin1":case"binary":return U8r(this,e,t);case"base64":return C8r(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W8r(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}b.prototype._isBuffer=!0;function Ft(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Ft(this,t,t+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Ft(this,t,t+3),Ft(this,t+1,t+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Ft(this,t,t+7),Ft(this,t+1,t+6),Ft(this,t+2,t+5),Ft(this,t+3,t+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?kb(this,0,e):R8r.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",t=pi.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};Ib&&(b.prototype[Ib]=b.prototype.inspect);b.prototype.compare=function(e,t,i,n,a){if(xr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,f=Math.min(u,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function Bb(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,b2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=b.from(e,i)),b.isBuffer(e))return e.length===0?-1:_b(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):_b(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function _b(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}b.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};b.prototype.indexOf=function(e,t,i){return Bb(this,e,t,i,!0)};b.prototype.lastIndexOf=function(e,t,i){return Bb(this,e,t,i,!1)};function F8r(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(b2(o))return u;r[t+u]=o}return u}function M8r(r,e,t,i){return Ta(d2(e,r.length-t),r,t,i)}function B8r(r,e,t,i){return Ta(x8r(e),r,t,i)}function k8r(r,e,t,i){return Ta(Wb(e),r,t,i)}function j8r(r,e,t,i){return Ta(J8r(e,r.length-t),r,t,i)}b.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return F8r(this,e,t,i);case"utf8":case"utf-8":return M8r(this,e,t,i);case"ascii":case"latin1":case"binary":return B8r(this,e,t,i);case"base64":return k8r(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j8r(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function C8r(r,e,t){return e===0&&t===r.length?p2.fromByteArray(r):p2.fromByteArray(r.slice(e,t))}function kb(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return G8r(i)}var Lb=4096;function G8r(r){let e=r.length;if(e<=Lb)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=Lb));return t}function V8r(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function U8r(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function H8r(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=Y8r[r[a]];return n}function W8r(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}b.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,b.prototype),n};function vr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};b.prototype.readUint8=b.prototype.readUInt8=function(e,t){return e=e>>>0,t||vr(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||vr(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||vr(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=De(function(e){e=e>>>0,li(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&on(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=De(function(e){e=e>>>0,li(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&on(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};b.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};b.prototype.readInt8=function(e,t){return e=e>>>0,t||vr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,t){e=e>>>0,t||vr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};b.prototype.readInt16BE=function(e,t){e=e>>>0,t||vr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};b.prototype.readInt32LE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=De(function(e){e=e>>>0,li(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&on(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=De(function(e){e=e>>>0,li(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&on(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});b.prototype.readFloatLE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),ci.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),ci.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||vr(e,8,this.length),ci.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||vr(e,8,this.length),ci.read(this,e,!1,52,8)};function hr(r,e,t,i,n,a){if(!b.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;hr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;hr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,1,255,0),this[t]=e&255,t+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function jb(r,e,t,i,n){Hb(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function Cb(r,e,t,i,n){Hb(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}b.prototype.writeBigUInt64LE=De(function(e,t=0){return jb(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=De(function(e,t=0){return Cb(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);hr(this,e,t,i,f-1,-f)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);hr(this,e,t,i,f-1,-f)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};b.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};b.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||hr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};b.prototype.writeBigInt64LE=De(function(e,t=0){return jb(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=De(function(e,t=0){return Cb(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Gb(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Vb(r,e,t,i,n){return e=+e,t=t>>>0,n||Gb(r,e,t,4,34028234663852886e22,-34028234663852886e22),ci.write(r,e,t,i,23,4),t+4}b.prototype.writeFloatLE=function(e,t,i){return Vb(this,e,t,!0,i)};b.prototype.writeFloatBE=function(e,t,i){return Vb(this,e,t,!1,i)};function Ub(r,e,t,i,n){return e=+e,t=t>>>0,n||Gb(r,e,t,8,17976931348623157e292,-17976931348623157e292),ci.write(r,e,t,i,52,8),t+8}b.prototype.writeDoubleLE=function(e,t,i){return Ub(this,e,t,!0,i)};b.prototype.writeDoubleBE=function(e,t,i){return Ub(this,e,t,!1,i)};b.prototype.copy=function(e,t,i,n){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};b.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!b.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=b.isBuffer(e)?e:b.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var fi={};function y2(r,e,t){fi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}y2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);y2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);y2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=Pb(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=Pb(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function Pb(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function z8r(r,e,t){li(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&on(e,r.length-(t+1))}function Hb(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new fi.ERR_OUT_OF_RANGE("value",o,r)}z8r(i,n,a)}function li(r,e){if(typeof r!="number")throw new fi.ERR_INVALID_ARG_TYPE(e,"number",r)}function on(r,e,t){throw Math.floor(r)!==r?(li(r,t),new fi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new fi.ERR_BUFFER_OUT_OF_BOUNDS:new fi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var D8r=/[^+/0-9A-Za-z-_]/g;function X8r(r){if(r=r.split("=")[0],r=r.trim().replace(D8r,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function d2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function x8r(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function J8r(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function Wb(r){return p2.toByteArray(X8r(r))}function Ta(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function xr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function b2(r){return r!==r}var Y8r=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function De(r){return typeof BigInt>"u"?Z8r:r}function Z8r(){throw new Error("BigInt not supported")}});var Xb=s((coe,Db)=>{"use strict";var $8r=zb().Buffer;Db.exports=$8r});var Jb=s((loe,xb)=>{"use strict";function Q8r(){throw new Error("not implemented")}xb.exports=Q8r});var Ia=s((poe,Yb)=>{"use strict";var K8r=Nb(),r7r=Xb(),e7r=Jb(),w2;K8r()?w2=r7r:w2=e7r;Yb.exports=w2});var $b=s((goe,Zb)=>{"use strict";var t7r=L(),i7r=Ia(),n7r=t7r(i7r.from);Zb.exports=n7r});var Kb=s((moe,Qb)=>{"use strict";var a7r=At(),s7r=y(),u7r=Ia();function o7r(r){if(!a7r(r))throw new TypeError(s7r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return u7r.from(r)}Qb.exports=o7r});var ew=s((doe,rw)=>{"use strict";var v7r=At(),f7r=y(),c7r=Ia();function l7r(r){if(!v7r(r))throw new TypeError(f7r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new c7r(r)}rw.exports=l7r});var iw=s((hoe,tw)=>{"use strict";var p7r=$b(),g7r=Kb(),m7r=ew(),E2;p7r?E2=g7r:E2=m7r;tw.exports=E2});var sw=s((qoe,aw)=>{"use strict";var d7r=Yi(),h7r=Zt(),q7r=Ji(),y7r=xi(),b7r=Yt(),w7r=Ot(),E7r=pr(),N7r=Kr(),A7r=gr(),nw;function O7r(r){return new d7r(r)}function S7r(r){return new h7r(r)}function T7r(r){return new q7r(r)}function I7r(r){return new y7r(r)}function _7r(r){return new b7r(r)}function L7r(r){return new w7r(r)}function P7r(r){return new E7r(r)}function R7r(r){return new N7r(r)}function F7r(r){return new A7r(r)}function M7r(){var r={int8array:O7r,uint8array:S7r,uint8clampedarray:T7r,int16array:I7r,uint16array:_7r,int32array:L7r,uint32array:P7r,float32array:R7r,float64array:F7r};return r}nw=M7r();aw.exports=nw});var cw=s((yoe,fw)=>{"use strict";var _a=O(),N2=lr(),uw=At(),B7r=Cq(),ow=Qn(),k7r=Jq(),j7r=wa(),vw=un(),C7r=vb(),vn=hb(),G7r=Pt(),fn=Ce(),V7r=iw(),U7r=sw();function H7r(r){var e,t,i,n,a,u,o,f;for(e=[],n=[],o=Object.create(G7r(r)),e.push(r),n.push(o),t=C7r(r),f=0;f<t.length;f++)i=t[f],a=vn(r,i),_a(a,"value")&&(u=N2(r[i])?[]:{},a.value=Mt(r[i],u,e,n,-1)),fn(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function W7r(r){var e=[],t=[],i,n,a,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=vw(r),f=0;f<i.length;f++)u=i[f],n=vn(r,u),_a(n,"value")&&(a=N2(r[u])?[]:{},n.value=Mt(r[u],a,e,t,-1)),fn(o,u,n);return o}function Mt(r,e,t,i,n){var a,u,o,f,v,c,l,p,m,h;if(n-=1,typeof r!="object"||r===null)return r;if(uw(r))return V7r(r);if(B7r(r))return W7r(r);if(o=ow(r),o==="date")return new Date(+r);if(o==="regexp")return k7r(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=U7r[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?H7r(r):{};if(u=vw(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=ow(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||uw(p)){a==="object"?(f=vn(r,c),_a(f,"value")&&(f.value=Mt(p)),fn(e,c,f)):e[c]=Mt(p);continue}if(m=j7r(t,p),m!==-1){e[c]=i[m];continue}l=N2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Mt(p,l,t,i,n):(f=vn(r,c),_a(f,"value")&&(f.value=Mt(p,l,t,i,n)),fn(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=vn(r,c),fn(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}fw.exports=Mt});var pw=s((boe,lw)=>{"use strict";var z7r=lr(),D7r=Ve().isPrimitive,X7r=y(),x7r=I(),J7r=cw();function Y7r(r,e){var t;if(arguments.length>1){if(!D7r(e))throw new TypeError(X7r("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=x7r;return t=z7r(r)?new Array(r.length):{},J7r(r,t,[r],[t],e)}lw.exports=Y7r});var cn=s((woe,gw)=>{"use strict";var Z7r=pw();gw.exports=Z7r});var mw=s((Eoe,$7r)=>{$7r.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var hw=s((Noe,dw)=>{"use strict";var Q7r=cn(),K7r=mw();function r9r(){return Q7r(K7r)}dw.exports=r9r});var qw=s((Aoe,e9r)=>{e9r.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var bw=s((Ooe,yw)=>{"use strict";var t9r=cn(),i9r=qw();function n9r(){return t9r(i9r)}yw.exports=n9r});var ww=s((Soe,a9r)=>{a9r.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var Nw=s((Toe,Ew)=>{"use strict";var s9r=cn(),u9r=ww();function o9r(){return s9r(u9r)}Ew.exports=o9r});var Aw=s((Ioe,v9r)=>{v9r.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var Sw=s((_oe,Ow)=>{"use strict";var f9r=Aw();function c9r(){return f9r.slice()}Ow.exports=c9r});var Tw=s((Loe,l9r)=>{l9r.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var _w=s((Poe,Iw)=>{"use strict";var p9r=cn(),g9r=Tw();function m9r(){return p9r(g9r)}Iw.exports=m9r});var Pw=s((Roe,Lw)=>{"use strict";var ln=ar(),d9r=hw(),h9r=bw(),q9r=Nw(),y9r=Sw(),b9r=_w();function w9r(r){return ln(r,"AFINN_111",d9r),ln(r,"AFINN_96",h9r),ln(r,"ANSCOMBES_QUARTET",q9r),ln(r,"HERNDON_VENUS_SEMIDIAMETERS",y9r),ln(r,"NIGHTINGALES_ROSE",b9r),r}Lw.exports=w9r});var Fw=s((Foe,Rw)=>{"use strict";function E9r(r,e){return r+e}Rw.exports=E9r});var Bw=s((Moe,Mw)=>{"use strict";var N9r=Fw();Mw.exports=N9r});var jw=s((Boe,kw)=>{"use strict";var A9r=I(),O9r=G();function S9r(r){return r===A9r||r===O9r}kw.exports=S9r});var Rr=s((koe,Cw)=>{"use strict";var T9r=jw();Cw.exports=T9r});var Uw=s((joe,Vw)=>{"use strict";var Gw=ta();function I9r(r){return r>0?Gw(r-1):Gw(r+1)}Vw.exports=I9r});var La=s((Coe,Hw)=>{"use strict";var _9r=Uw();Hw.exports=_9r});var zw=s((Goe,Ww)=>{"use strict";var L9r=Math.sqrt;Ww.exports=L9r});var V=s((Voe,Dw)=>{"use strict";var P9r=zw();Dw.exports=P9r});var xw=s((Uoe,Xw)=>{"use strict";function R9r(r){return Math.abs(r)}Xw.exports=R9r});var x=s((Hoe,Jw)=>{"use strict";var F9r=xw();Jw.exports=F9r});var Zw=s((Woe,Yw)=>{"use strict";var M9r=Zt(),B9r=Yt(),k9r={uint16:B9r,uint8:M9r};Yw.exports=k9r});var rE=s((zoe,Kw)=>{"use strict";var $w=Zw(),Qw;function j9r(){var r,e;return r=new $w.uint16(1),r[0]=4660,e=new $w.uint8(r.buffer),e[0]===52}Qw=j9r();Kw.exports=Qw});var Bt=s((Doe,eE)=>{"use strict";var C9r=rE();eE.exports=C9r});var nE=s((Xoe,iE)=>{"use strict";var G9r=Bt(),tE,A2,O2;G9r===!0?(A2=1,O2=0):(A2=0,O2=1);tE={HIGH:A2,LOW:O2};iE.exports=tE});var S2=s((xoe,oE)=>{"use strict";var V9r=pr(),U9r=gr(),sE=nE(),uE=new U9r(1),aE=new V9r(uE.buffer),H9r=sE.HIGH,W9r=sE.LOW;function z9r(r,e,t,i){return uE[0]=r,e[i]=aE[H9r],e[i+t]=aE[W9r],e}oE.exports=z9r});var fE=s((Joe,vE)=>{"use strict";var D9r=S2();function X9r(r){return D9r(r,[0>>>0,0>>>0],1,0)}vE.exports=X9r});var gi=s((Yoe,lE)=>{"use strict";var x9r=w(),cE=fE(),J9r=S2();x9r(cE,"assign",J9r);lE.exports=cE});var gE=s((Zoe,pE)=>{"use strict";var Y9r=Bt(),T2;Y9r===!0?T2=0:T2=1;pE.exports=T2});var dE=s(($oe,mE)=>{"use strict";var Z9r=pr(),$9r=gr(),Q9r=gE(),I2=new $9r(1),K9r=new Z9r(I2.buffer);function rpr(r,e){return I2[0]=r,K9r[Q9r]=e>>>0,I2[0]}mE.exports=rpr});var ie=s((Qoe,hE)=>{"use strict";var epr=dE();hE.exports=epr});var yE=s((Koe,qE)=>{"use strict";function tpr(r){return r|0}qE.exports=tpr});var _2=s((r2e,bE)=>{"use strict";var ipr=yE();bE.exports=ipr});var Jr=s((e2e,wE)=>{"use strict";var npr=2147483647;wE.exports=npr});var L2=s((t2e,EE)=>{"use strict";var apr=2147483648;EE.exports=apr});var AE=s((i2e,NE)=>{"use strict";var spr=Bt(),P2;spr===!0?P2=1:P2=0;NE.exports=P2});var TE=s((n2e,SE)=>{"use strict";var upr=pr(),opr=gr(),vpr=AE(),OE=new opr(1),fpr=new upr(OE.buffer);function cpr(r){return OE[0]=r,fpr[vpr]}SE.exports=cpr});var tr=s((a2e,IE)=>{"use strict";var lpr=TE();IE.exports=lpr});var PE=s((s2e,LE)=>{"use strict";var ppr=Bt(),_E,R2,F2;ppr===!0?(R2=1,F2=0):(R2=0,F2=1);_E={HIGH:R2,LOW:F2};LE.exports=_E});var kE=s((u2e,BE)=>{"use strict";var gpr=pr(),mpr=gr(),FE=PE(),ME=new mpr(1),RE=new gpr(ME.buffer),dpr=FE.HIGH,hpr=FE.LOW;function qpr(r,e){return RE[dpr]=r,RE[hpr]=e,ME[0]}BE.exports=qpr});var mi=s((o2e,jE)=>{"use strict";var ypr=kE();jE.exports=ypr});var GE=s((v2e,CE)=>{"use strict";var bpr=L2(),wpr=Jr(),Epr=gi(),Npr=tr(),Apr=mi(),M2=[0,0];function Opr(r,e){var t,i;return Epr.assign(r,M2,1,0),t=M2[0],t&=wpr,i=Npr(e),i&=bpr,t|=i,Apr(t,M2[1])}CE.exports=Opr});var Pa=s((f2e,VE)=>{"use strict";var Spr=GE();VE.exports=Spr});var WE=s((c2e,HE)=>{"use strict";var UE=La(),Tpr=Pa(),Ipr=G(),Ra=I();function _pr(r,e){return e===Ipr?Ra:e===Ra?0:e>0?UE(e)?r:0:UE(e)?Tpr(Ra,r):Ra}HE.exports=_pr});var DE=s((l2e,zE)=>{"use strict";var Lpr=Jr(),Ppr=tr(),Rpr=1072693247,Fa=1e300,Ma=1e-300;function Fpr(r,e){var t,i;return i=Ppr(r),t=i&Lpr,t<=Rpr?e<0?Fa*Fa:Ma*Ma:e>0?Fa*Fa:Ma*Ma}zE.exports=Fpr});var JE=s((p2e,xE)=>{"use strict";var Mpr=x(),XE=I();function Bpr(r,e){return r===-1?(r-r)/(r-r):r===1?1:Mpr(r)<1==(e===XE)?0:XE}xE.exports=Bpr});var ZE=s((g2e,YE)=>{"use strict";var kpr=Bt(),B2;kpr===!0?B2=1:B2=0;YE.exports=B2});var QE=s((m2e,$E)=>{"use strict";var jpr=pr(),Cpr=gr(),Gpr=ZE(),k2=new Cpr(1),Vpr=new jpr(k2.buffer);function Upr(r,e){return k2[0]=r,Vpr[Gpr]=e>>>0,k2[0]}$E.exports=Upr});var ne=s((d2e,KE)=>{"use strict";var Hpr=QE();KE.exports=Hpr});var Yr=s((h2e,rN)=>{"use strict";var Wpr=1023;rN.exports=Wpr});var tN=s((q2e,eN)=>{"use strict";function zpr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}eN.exports=zpr});var sN=s((y2e,aN)=>{"use strict";var Dpr=tr(),Ba=ie(),iN=ne(),Xpr=Yr(),xpr=tN(),Jpr=1048575,nN=1048576,Ypr=1072693248,Zpr=536870912,$pr=524288,Qpr=20,Kpr=9007199254740992,rgr=.9617966939259756,egr=.9617967009544373,tgr=-7028461650952758e-24,igr=[1,1.5],ngr=[0,.5849624872207642],agr=[0,1350039202129749e-23];function sgr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,F,S,z,Q,U;return z=0,t<nN&&(e*=Kpr,z-=53,t=Dpr(e)),z+=(t>>Qpr)-Xpr|0,Q=t&Jpr|0,t=Q|Ypr|0,Q<=235662?U=0:Q<767610?U=1:(U=0,z+=1,t-=nN),e=iN(e,t),c=igr[U],F=e-c,S=1/(e+c),n=F*S,u=Ba(n,0),i=(t>>1|Zpr)+$pr,i+=U<<18,f=iN(0,i),v=e-(f-c),o=S*(F-u*f-u*v),a=n*n,A=a*a*xpr(a),A+=o*(u+n),a=u*u,f=3+a+A,f=Ba(f,0),v=A-(f-3-a),F=u*f,S=o*f+v*n,p=F+S,p=Ba(p,0),m=S-(p-F),h=egr*p,d=tgr*p+m*rgr+agr[U],l=ngr[U],N=z,g=h+d+l+N,g=Ba(g,0),q=d-(g-N-l-h),r[0]=g,r[1]=q,r}aN.exports=sgr});var oN=s((b2e,uN)=>{"use strict";function ugr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}uN.exports=ugr});var fN=s((w2e,vN)=>{"use strict";var ogr=ie(),vgr=oN(),fgr=1.4426950408889634,cgr=1.4426950216293335,lgr=19259629911266175e-24;function pgr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*vgr(n),u=cgr*n,o=n*lgr-a*fgr,i=u+o,i=ogr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}vN.exports=pgr});var j2=s((E2e,cN)=>{"use strict";var ggr=1023;cN.exports=ggr});var pN=s((N2e,lN)=>{"use strict";var mgr=-1023;lN.exports=mgr});var C2=s((A2e,gN)=>{"use strict";var dgr=-1074;gN.exports=dgr});var G2=s((O2e,mN)=>{"use strict";var hgr=22250738585072014e-324;mN.exports=hgr});var V2=s((S2e,dN)=>{"use strict";var qgr=G2(),ygr=Rr(),bgr=E(),wgr=x(),Egr=4503599627370496;function Ngr(r,e,t,i){return bgr(r)||ygr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&wgr(r)<qgr?(e[i]=r*Egr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}dN.exports=Ngr});var qN=s((T2e,hN)=>{"use strict";var Agr=V2();function Ogr(r){return Agr(r,[0,0],1,0)}hN.exports=Ogr});var wN=s((I2e,bN)=>{"use strict";var Sgr=w(),yN=qN(),Tgr=V2();Sgr(yN,"assign",Tgr);bN.exports=yN});var pn=s((_2e,EN)=>{"use strict";var Igr=2146435072;EN.exports=Igr});var AN=s((L2e,NN)=>{"use strict";var _gr=tr(),Lgr=pn(),Pgr=Yr();function Rgr(r){var e=_gr(r);return e=(e&Lgr)>>>20,e-Pgr|0}NN.exports=Rgr});var SN=s((P2e,ON)=>{"use strict";var Fgr=AN();ON.exports=Fgr});var IN=s((R2e,TN)=>{"use strict";var Mgr=I(),Bgr=G(),kgr=Yr(),jgr=j2(),Cgr=pN(),Ggr=C2(),Vgr=E(),Ugr=Rr(),Hgr=Pa(),Wgr=wN().assign,zgr=SN(),Dgr=gi(),Xgr=mi(),xgr=2220446049250313e-31,Jgr=2148532223>>>0,U2=[0,0],H2=[0,0];function Ygr(r,e){var t,i;return e===0||r===0||Vgr(r)||Ugr(r)?r:(Wgr(r,U2,1,0),r=U2[0],e+=U2[1],e+=zgr(r),e<Ggr?Hgr(0,r):e>jgr?r<0?Bgr:Mgr:(e<=Cgr?(e+=52,i=xgr):i=1,Dgr.assign(r,H2,1,0),t=H2[0],t&=Jgr,t|=e+kgr<<20,i*Xgr(t,H2[1])))}TN.exports=Ygr});var ka=s((F2e,_N)=>{"use strict";var Zgr=IN();_N.exports=Zgr});var ja=s((M2e,LN)=>{"use strict";var $gr=.6931471805599453;LN.exports=$gr});var Ca=s((B2e,PN)=>{"use strict";var Qgr=1048575;PN.exports=Qgr});var FN=s((k2e,RN)=>{"use strict";function Kgr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}RN.exports=Kgr});var VN=s((j2e,GN)=>{"use strict";var rmr=tr(),MN=ne(),emr=ie(),tmr=_2(),imr=ka(),nmr=ja(),BN=Yr(),kN=Jr(),jN=Ca(),amr=FN(),CN=1048576,smr=1071644672,gn=20,umr=.6931471824645996,omr=-1904654299957768e-24;function vmr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m;return p=r&kN|0,m=(p>>gn)-BN|0,l=0,p>smr&&(l=r+(CN>>m+1)>>>0,m=((l&kN)>>gn)-BN|0,i=(l&~(jN>>m))>>>0,a=MN(0,i),l=(l&jN|CN)>>gn-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=emr(a,0),o=a*umr,f=(t-(a-e))*nmr+a*omr,c=o+f,v=f-(c-o),a=c*c,n=c-a*amr(a),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=rmr(c),r=tmr(r),r+=l<<gn>>>0,r>>gn<=0?c=imr(c,l):c=MN(c,r),c}GN.exports=vmr});var $N=s((C2e,ZN)=>{"use strict";var UN=E(),HN=La(),WN=Rr(),fmr=_r(),zN=V(),cmr=x(),W2=gi(),lmr=ie(),DN=_2(),pmr=G(),gmr=I(),z2=Jr(),mmr=WE(),dmr=DE(),hmr=JE(),qmr=sN(),ymr=fN(),bmr=VN(),wmr=1072693247,Emr=1105199104,Nmr=1139802112,XN=1083179008,Amr=1072693248,Omr=1083231232,Smr=3230714880>>>0,xN=31,Xe=1e300,xe=1e-300,Tmr=8008566259537294e-32,ae=[0,0],JN=[0,0];function YN(r,e){var t,i,n,a,u,o,f,v,c,l,p,m,h,d,g,q;if(UN(r)||UN(e))return NaN;if(W2.assign(e,ae,1,0),o=ae[0],f=ae[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return zN(r);if(e===-.5)return 1/zN(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(WN(e))return hmr(r,e)}if(W2.assign(r,ae,1,0),a=ae[0],u=ae[1],u===0){if(a===0)return mmr(r,e);if(r===1)return 1;if(r===-1&&HN(e))return-1;if(WN(r))return r===pmr?YN(-0,-e):e<0?0:gmr}if(r<0&&fmr(e)===!1)return(r-r)/(r-r);if(n=cmr(r),t=a&z2|0,i=o&z2|0,v=a>>>xN|0,c=o>>>xN|0,v&&HN(e)?v=-1:v=1,i>Emr){if(i>Nmr)return dmr(r,e);if(t<wmr)return c===1?v*Xe*Xe:v*xe*xe;if(t>Amr)return c===0?v*Xe*Xe:v*xe*xe;h=ymr(JN,n)}else h=qmr(JN,n,t);if(l=lmr(e,0),m=(e-l)*h[0]+e*h[1],p=l*h[0],d=m+p,W2.assign(d,ae,1,0),g=DN(ae[0]),q=DN(ae[1]),g>=XN){if((g-XN|q)!==0||m+Tmr>d-p)return v*Xe*Xe}else if((g&z2)>=Omr&&((g-Smr|q)!==0||m<=d-p))return v*xe*xe;return d=bmr(g,p,m),v*d}ZN.exports=YN});var W=s((G2e,QN)=>{"use strict";var Imr=$N();QN.exports=Imr});var di=s((V2e,KN)=>{"use strict";var _mr=9007199254740991;KN.exports=_mr});var Ga=s((U2e,rA)=>{"use strict";var Lmr=308;rA.exports=Lmr});var D2=s((H2e,eA)=>{"use strict";var Pmr=-308;eA.exports=Pmr});var Va=s((W2e,tA)=>{"use strict";var Rmr=-324;tA.exports=Rmr});var vA=s((z2e,oA)=>{"use strict";var iA=E(),Ua=Rr(),nA=W(),Fmr=x(),aA=J(),Mmr=di(),sA=Ga(),Bmr=D2(),kmr=Va(),jmr=G(),Cmr=Mmr+1,uA=1e308;function Gmr(r,e){var t,i;return iA(r)||iA(e)||Ua(e)?NaN:Ua(r)||r===0||e<kmr||Fmr(r)>Cmr&&e<=0?r:e>sA?r>=0?0:jmr:e<Bmr?(t=nA(10,-(e+sA)),i=r*uA*t,Ua(i)?r:aA(i)/uA/t):(t=nA(10,-e),i=r*t,Ua(i)?r:aA(i)/t)}oA.exports=Gmr});var cA=s((D2e,fA)=>{"use strict";var Vmr=vA();fA.exports=Vmr});var pA=s((X2e,lA)=>{"use strict";function Umr(r,e){return r*e}lA.exports=Umr});var mA=s((x2e,gA)=>{"use strict";var Hmr=pA();gA.exports=Hmr});var hA=s((J2e,dA)=>{"use strict";function Wmr(r,e){return r-e}dA.exports=Wmr});var yA=s((Y2e,qA)=>{"use strict";var zmr=hA();qA.exports=zmr});var wA=s((Z2e,bA)=>{"use strict";var mn=ar(),Dmr=Bw(),Xmr=cA(),xmr=mA(),Jmr=W(),Ymr=yA();function Zmr(r){return mn(r,"add",Dmr),mn(r,"floorn",Xmr),mn(r,"mul",xmr),mn(r,"pow",Jmr),mn(r,"sub",Ymr),r}bA.exports=Zmr});var OA=s(($2e,AA)=>{"use strict";var EA=j().isPrimitive,$mr=I(),Qmr=G(),NA=y();function Kmr(r,e){return t;function t(i,n){var a;if(!EA(i)){if(e.nonnumeric===void 0)throw new TypeError(NA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!EA(n)){if(e.nonnumeric===void 0)throw new TypeError(NA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===$mr?e.pinf:a===Qmr?e.ninf:a}}AA.exports=Kmr});var X2=s((Q2e,SA)=>{"use strict";var rdr=OA();SA.exports=rdr});var IA=s((K2e,TA)=>{"use strict";var edr=Zn(),tdr=_u(),idr=ba(),ndr=y(),adr=ya(),sdr=X2(),udr=["number","number"],odr=["First argument","Second argument"];function vdr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(ndr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=adr([r[0],r[1]],udr,odr),t=edr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=idr(t),a=sdr(e,i),r[0].push(n),r[1].push(t),tdr(r[0],r[1],a),n}TA.exports=vdr});var LA=s((r1e,_A)=>{"use strict";var fdr=IA();_A.exports=fdr});var RA=s((e1e,PA)=>{"use strict";var cdr=j().isPrimitive,ldr=I(),pdr=G(),gdr=y();function mdr(r,e){return t;function t(i){var n;if(!cdr(i)){if(e.nonnumeric===void 0)throw new TypeError(gdr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===ldr?e.pinf:n===pdr?e.ninf:n}}PA.exports=mdr});var x2=s((t1e,FA)=>{"use strict";var ddr=RA();FA.exports=ddr});var BA=s((i1e,MA)=>{"use strict";var J2=j().isPrimitive,hdr=I(),qdr=G(),Y2=y();function ydr(r,e){return t;function t(i,n,a){var u;if(!J2(i)){if(e.nonnumeric===void 0)throw new TypeError(Y2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!J2(n)){if(e.nonnumeric===void 0)throw new TypeError(Y2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!J2(a)){if(e.nonnumeric===void 0)throw new TypeError(Y2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===hdr?e.pinf:u===qdr?e.ninf:u}}MA.exports=ydr});var Z2=s((n1e,kA)=>{"use strict";var bdr=BA();kA.exports=bdr});var CA=s((a1e,jA)=>{"use strict";var Ha=j().isPrimitive,wdr=I(),Edr=G(),Wa=y();function Ndr(r,e){return t;function t(i,n,a,u){var o;if(!Ha(i)){if(e.nonnumeric===void 0)throw new TypeError(Wa("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Ha(n)){if(e.nonnumeric===void 0)throw new TypeError(Wa("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Ha(a)){if(e.nonnumeric===void 0)throw new TypeError(Wa("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Ha(u)){if(e.nonnumeric===void 0)throw new TypeError(Wa("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===wdr?e.pinf:o===Edr?e.ninf:o}}jA.exports=Ndr});var VA=s((s1e,GA)=>{"use strict";var Adr=CA();GA.exports=Adr});var HA=s((u1e,UA)=>{"use strict";var dn=j().isPrimitive,Odr=I(),Sdr=G(),hn=y();function Tdr(r,e){return t;function t(i,n,a,u,o){var f;if(!dn(i)){if(e.nonnumeric===void 0)throw new TypeError(hn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!dn(n)){if(e.nonnumeric===void 0)throw new TypeError(hn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!dn(a)){if(e.nonnumeric===void 0)throw new TypeError(hn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!dn(u)){if(e.nonnumeric===void 0)throw new TypeError(hn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!dn(o)){if(e.nonnumeric===void 0)throw new TypeError(hn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,a,u,o),f!==f?e.nan:f===Odr?e.pinf:f===Sdr?e.ninf:f}}UA.exports=Tdr});var zA=s((o1e,WA)=>{"use strict";var Idr=HA();WA.exports=Idr});var XA=s((v1e,DA)=>{"use strict";var _dr=Zn(),Ldr=Pu(),Pdr=ba(),Rdr=y(),Fdr=ya(),Mdr=Z2(),Bdr=["number","number","number"],kdr=["First argument","Second argument","Third argument"];function jdr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(Rdr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=Fdr([r[0],r[1],r[2]],Bdr,kdr),t=_dr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=Pdr(t),a=Mdr(e,i),r[0].push(n),r[1].push(t),Ldr(r[0],r[1],a),n}DA.exports=jdr});var JA=s((f1e,xA)=>{"use strict";var Cdr=XA();xA.exports=Cdr});var ZA=s((c1e,YA)=>{"use strict";var Gdr=lr(),Vdr=Bo(),Udr=y(),Hdr=x2();function Wdr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(Udr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=Hdr(e,i),Gdr(t)?(Vdr([t,t],[t.length,t[0].length],n),t):n(t)}YA.exports=Wdr});var QA=s((l1e,$A)=>{"use strict";var zdr=ZA();$A.exports=zdr});var rO=s((p1e,KA)=>{"use strict";var Je=ar(),Ddr=LA(),Xdr=x2(),xdr=X2(),Jdr=Z2(),Ydr=VA(),Zdr=zA(),$dr=JA(),Qdr=QA();function Kdr(r){return Je(r,"binary",Ddr),Je(r,"d_d",Xdr),Je(r,"dd_d",xdr),Je(r,"ddd_d",Jdr),Je(r,"dddd_d",Ydr),Je(r,"ddddd_d",Zdr),Je(r,"ternary",$dr),Je(r,"unary",Qdr),r}KA.exports=Kdr});var tO=s((g1e,eO)=>{"use strict";function rhr(r){return r*r}eO.exports=rhr});var za=s((m1e,iO)=>{"use strict";var ehr=tO();iO.exports=ehr});var Da=s((d1e,nO)=>{"use strict";var thr=.7853981633974483;nO.exports=thr});var sO=s((h1e,aO)=>{"use strict";function ihr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}aO.exports=ihr});var oO=s((q1e,uO)=>{"use strict";function nhr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}uO.exports=nhr});var cO=s((y1e,fO)=>{"use strict";var ahr=E(),shr=V(),vO=Da(),uhr=sO(),ohr=oO(),vhr=6123233995736766e-32;function fhr(r){var e,t,i,n,a;if(ahr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*ohr(t),t=shr(t+t),a=vO-t,t=t*n-vhr,a-=t,a+=vO;else{if(i<1e-8)return r;t=i*i,a=t*uhr(t),a=i*a+i}return e?-a:a}fO.exports=fhr});var kt=s((b1e,lO)=>{"use strict";var chr=cO();lO.exports=chr});var dO=s((w1e,mO)=>{"use strict";var lhr=E(),pO=kt(),phr=V(),gO=Da(),ghr=6123233995736766e-32;function mhr(r){var e;return lhr(r)?NaN:r<-1||r>1?NaN:r>.5?2*pO(phr(.5-.5*r)):(e=gO-pO(r),e+=ghr,e+=gO,e)}mO.exports=mhr});var qn=s((E1e,hO)=>{"use strict";var dhr=dO();hO.exports=dhr});var yO=s((N1e,qO)=>{"use strict";function hhr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}qO.exports=hhr});var AO=s((A1e,NO)=>{"use strict";var qhr=E(),bO=tr(),wO=ne(),yhr=I(),bhr=G(),EO=Yr(),whr=yO(),$2=.6931471803691238,Q2=19082149292705877e-26,Ehr=.41421356237309503,Nhr=-.2928932188134525,Ahr=1862645149230957e-24,Ohr=5551115123125783e-32,Shr=9007199254740992,Thr=.6666666666666666;function Ihr(r){var e,t,i,n,a,u,o,f,v,c;if(r<-1||qhr(r))return NaN;if(r===-1)return bhr;if(r===yhr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<Ehr){if(i<Ahr)return i<Ohr?r:r-r*r*.5;r>Nhr&&(c=0,n=r,t=1)}return c!==0&&(i<Shr?(v=1+r,t=bO(v),c=(t>>20)-EO,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=bO(v),c=(t>>20)-EO,a=0),t&=1048575,t<434334?v=wO(v,t|1072693248):(c+=1,v=wO(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*Q2,c*$2+a):(f=e*(1-Thr*n),c*$2-(f-(c*Q2+a)-n)):(u=n/(2+n),o=u*u,f=o*whr(o),c===0?n-(e-u*(e+f)):c*$2-(e-(u*(e+f)+(c*Q2+a))-n))}NO.exports=Ihr});var Ye=s((O1e,OO)=>{"use strict";var _hr=AO();OO.exports=_hr});var TO=s((S1e,SO)=>{"use strict";function Lhr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}SO.exports=Lhr});var _O=s((T1e,IO)=>{"use strict";function Phr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}IO.exports=Phr});var FO=s((I1e,RO)=>{"use strict";var LO=tr(),Rhr=ne(),Fhr=E(),Mhr=Yr(),Bhr=G(),khr=TO(),jhr=_O(),Xa=.6931471803691238,xa=19082149292705877e-26,Chr=0x40000000000000,Ghr=.3333333333333333,PO=1048575,Vhr=2146435072,Uhr=1048576,Hhr=1072693248;function Whr(r){var e,t,i,n,a,u,o,f,v,c,l,p;return r===0?Bhr:Fhr(r)||r<0?NaN:(t=LO(r),a=0,t<Uhr&&(a-=54,r*=Chr,t=LO(r)),t>=Vhr?r+r:(a+=(t>>20)-Mhr|0,t&=PO,f=t+614244&1048576|0,r=Rhr(r,t|f^Hhr),a+=f>>20|0,o=r-1,(PO&2+t)<3?o===0?a===0?0:a*Xa+a*xa:(u=o*o*(.5-Ghr*o),a===0?o-u:a*Xa-(u-a*xa-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*khr(l),i=p*jhr(l),f|=v,u=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*Xa-(e-(c*(e+u)+a*xa)-o)):a===0?o-c*(o-u):a*Xa-(c*(o-u)-a*xa-o))))}RO.exports=Whr});var R=s((_1e,MO)=>{"use strict";var zhr=FO();MO.exports=zhr});var CO=s((L1e,jO)=>{"use strict";var Dhr=E(),Xhr=Ye(),BO=V(),xhr=ja(),kO=R(),Jhr=1<<28;function Yhr(r){var e;return Dhr(r)||r<1?NaN:r===1?0:r>=Jhr?kO(r)+xhr:r>2?kO(2*r-1/(r+BO(r*r-1))):(e=r-1,Xhr(e+BO(2*e+e*e)))}jO.exports=Yhr});var VO=s((P1e,GO)=>{"use strict";var Zhr=CO();GO.exports=Zhr});var Ja=s((R1e,UO)=>{"use strict";var $hr=1.5707963267948966;UO.exports=$hr});var WO=s((F1e,HO)=>{"use strict";function Qhr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}HO.exports=Qhr});var DO=s((M1e,zO)=>{"use strict";function Khr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}zO.exports=Khr});var JO=s((B1e,xO)=>{"use strict";var rqr=E(),eqr=I(),K2=Ja(),tqr=Da(),iqr=G(),nqr=WO(),aqr=DO(),XO=6123233995736766e-32,sqr=2.414213562373095;function uqr(r){var e,t,i,n;return rqr(r)||r===0?r:r===eqr?K2:r===iqr?-K2:(r<0&&(t=!0,r=-r),e=0,r>sqr?(i=K2,e=1,r=-(1/r)):r<=.66?i=0:(i=tqr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*nqr(n)/aqr(n),n=r*n+r,e===2?n+=.5*XO:e===1&&(n+=XO),i+=n,t?-i:i)}xO.exports=uqr});var Ya=s((k1e,YO)=>{"use strict";var oqr=JO();YO.exports=oqr});var $O=s((j1e,ZO)=>{"use strict";var vqr=Ya();function fqr(r){return vqr(1/r)}ZO.exports=fqr});var KO=s((C1e,QO)=>{"use strict";var cqr=$O();QO.exports=cqr});var eS=s((G1e,rS)=>{"use strict";var lqr=kt();function pqr(r){return lqr(1+r)}rS.exports=pqr});var iS=s((V1e,tS)=>{"use strict";var gqr=eS();tS.exports=gqr});var aS=s((U1e,nS)=>{"use strict";var mqr=kt();function dqr(r){return mqr(1-r)}nS.exports=dqr});var uS=s((H1e,sS)=>{"use strict";var hqr=aS();sS.exports=hqr});var vS=s((W1e,oS)=>{"use strict";var qqr=kt();function yqr(r){return qqr(1/r)}oS.exports=yqr});var cS=s((z1e,fS)=>{"use strict";var bqr=vS();fS.exports=bqr});var mS=s((D1e,gS)=>{"use strict";var wqr=Rr(),Eqr=E(),Nqr=Ye(),lS=V(),Aqr=ja(),pS=R(),Oqr=1/(1<<28),Sqr=1<<28;function Tqr(r){var e,t,i;return Eqr(r)||wqr(r)?r:(r<0&&(r=-r,e=!0),r<Oqr?i=r:r>Sqr?i=pS(r)+Aqr:r>2?i=pS(2*r+1/(lS(r*r+1)+r)):(t=r*r,i=Nqr(r+t/(1+lS(1+t)))),e?-i:i)}gS.exports=Tqr});var r1=s((X1e,dS)=>{"use strict";var Iqr=mS();dS.exports=Iqr});var qS=s((x1e,hS)=>{"use strict";var _qr=r1();function Lqr(r){return _qr(1/r)}hS.exports=Lqr});var bS=s((J1e,yS)=>{"use strict";var Pqr=qS();yS.exports=Pqr});var ES=s((Y1e,wS)=>{"use strict";var Rqr=qn(),Fqr=V();function Mqr(r){return 2*Rqr(Fqr(r))}wS.exports=Mqr});var AS=s((Z1e,NS)=>{"use strict";var Bqr=ES();NS.exports=Bqr});var SS=s(($1e,OS)=>{"use strict";var kqr=kt(),jqr=V();function Cqr(r){return 2*kqr(jqr(r))}OS.exports=Cqr});var IS=s((Q1e,TS)=>{"use strict";var Gqr=SS();TS.exports=Gqr});var PS=s((K1e,LS)=>{"use strict";var Vqr=E(),_S=Ye(),Uqr=I(),Hqr=G(),Wqr=1/(1<<28);function zqr(r){var e,t;return Vqr(r)||r<-1||r>1?NaN:r===1?Uqr:r===-1?Hqr:(r<0&&(e=!0,r=-r),r<Wqr?e?-r:r:(r<.5?(t=r+r,t=.5*_S(t+t*r/(1-r))):t=.5*_S((r+r)/(1-r)),e?-t:t))}LS.exports=zqr});var FS=s((r3e,RS)=>{"use strict";var Dqr=PS();RS.exports=Dqr});var BS=s((e3e,MS)=>{"use strict";var Xqr=qn();function xqr(r){return Xqr(1+r)}MS.exports=xqr});var jS=s((t3e,kS)=>{"use strict";var Jqr=BS();kS.exports=Jqr});var GS=s((i3e,CS)=>{"use strict";var Yqr=qn();function Zqr(r){return Yqr(1-r)}CS.exports=Zqr});var US=s((n3e,VS)=>{"use strict";var $qr=GS();VS.exports=$qr});var WS=s((a3e,HS)=>{"use strict";var Qqr=J();function Kqr(r){return Qqr(r)===r&&r>=0}HS.exports=Kqr});var e1=s((s3e,zS)=>{"use strict";var ryr=WS();zS.exports=ryr});var DS=s((u3e,eyr)=>{eyr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var xS=s((o3e,XS)=>{"use strict";var tyr=e1(),iyr=E(),nyr=La(),ayr=G(),syr=I(),uyr=DS(),oyr=258;function vyr(r){return iyr(r)||!tyr(r)?NaN:nyr(r)?0:r>oyr?r/2&1?syr:ayr:uyr[r/2]}XS.exports=vyr});var YS=s((v3e,JS)=>{"use strict";var fyr=xS();JS.exports=fyr});var $S=s((f3e,ZS)=>{"use strict";var cyr=Bt(),t1;cyr===!0?t1=0:t1=1;ZS.exports=t1});var rT=s((c3e,KS)=>{"use strict";var lyr=pr(),pyr=gr(),gyr=$S(),QS=new pyr(1),myr=new lyr(QS.buffer);function dyr(r){return QS[0]=r,myr[gyr]}KS.exports=dyr});var tT=s((l3e,eT)=>{"use strict";var hyr=rT();eT.exports=hyr});var uT=s((p3e,sT)=>{"use strict";var qyr=J(),Za=ka(),Ka=Tu(),nT=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],yyr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],i1=16777216,n1=5960464477539063e-23,$a=Ka(20),iT=Ka(20),Qa=Ka(20),fr=Ka(20);function aT(r,e,t,i,n,a,u,o,f){var v,c,l,p,m,h,d,g,q;for(p=a,q=i[t],g=t,m=0;g>0;m++)c=n1*q|0,fr[m]=q-i1*c|0,q=i[g-1]+c,g-=1;if(q=Za(q,n),q-=8*qyr(q*.125),d=q|0,q-=d,l=0,n>0?(m=fr[t-1]>>24-n,d+=m,fr[t-1]-=m<<24-n,l=fr[t-1]>>23-n):n===0?l=fr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,v=0,m=0;m<t;m++)g=fr[m],v===0?g!==0&&(v=1,fr[m]=16777216-g):fr[m]=16777215-g;if(n>0)switch(n){case 1:fr[t-1]&=8388607;break;case 2:fr[t-1]&=4194303;break}l===2&&(q=1-q,v!==0&&(q-=Za(1,n)))}if(q===0){for(g=0,m=t-1;m>=a;m--)g|=fr[m];if(g===0){for(h=1;fr[a-h]===0;h++);for(m=t+1;m<=t+h;m++){for(f[o+m]=nT[u+m],c=0,g=0;g<=o;g++)c+=r[g]*f[o+(m-g)];i[m]=c}return t+=h,aT(r,e,t,i,n,a,u,o,f)}}if(q===0)for(t-=1,n-=24;fr[t]===0;)t-=1,n-=24;else q=Za(q,-n),q>=i1?(c=n1*q|0,fr[t]=q-i1*c|0,t+=1,n+=24,fr[t]=c):fr[t]=q|0;for(c=Za(1,n),m=t;m>=0;m--)i[m]=c*fr[m],c*=n1;for(m=t;m>=0;m--){for(c=0,h=0;h<=p&&h<=t-m;h++)c+=yyr[h]*i[m+h];Qa[t-m]=c}for(c=0,m=t;m>=0;m--)c+=Qa[m];for(l===0?e[0]=c:e[0]=-c,c=Qa[0]-c,m=1;m<=t;m++)c+=Qa[m];return l===0?e[1]=c:e[1]=-c,d&7}function byr(r,e,t,i){var n,a,u,o,f,v,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?$a[c]=0:$a[c]=nT[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*$a[o+(c-l)];iT[c]=n}return f=a,aT(r,e,f,iT,v,a,u,o,$a)}sT.exports=byr});var vT=s((g3e,oT)=>{"use strict";var wyr=Math.round;oT.exports=wyr});var a1=s((m3e,fT)=>{"use strict";var Eyr=vT();fT.exports=Eyr});var gT=s((d3e,pT)=>{"use strict";var Nyr=a1(),cT=tr(),Ayr=.6366197723675814,Oyr=1.5707963267341256,Syr=6077100506506192e-26,Tyr=6077100506303966e-26,Iyr=20222662487959506e-37,_yr=20222662487111665e-37,Lyr=84784276603689e-45,lT=2047;function Pyr(r,e,t){var i,n,a,u,o,f,v;return n=Nyr(r*Ayr),u=r-n*Oyr,o=n*Syr,v=e>>20|0,t[0]=u-o,i=cT(t[0]),f=v-(i>>20&lT),f>16&&(a=u,o=n*Tyr,u=a-o,o=n*Iyr-(a-u-o),t[0]=u-o,i=cT(t[0]),f=v-(i>>20&lT),f>49&&(a=u,o=n*_yr,u=a-o,o=n*Lyr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}pT.exports=Pyr});var dT=s((h3e,mT)=>{"use strict";var Ryr=Jr(),Fyr=pn(),Myr=Ca(),Byr=tr(),kyr=tT(),jyr=mi(),Cyr=uT(),r0=gT(),Gyr=0,Vyr=16777216,Ze=1.5707963267341256,jt=6077100506506192e-26,e0=2*jt,t0=3*jt,i0=4*jt,Uyr=598523,Hyr=1072243195,Wyr=1073928572,zyr=1074752122,Dyr=1074977148,Xyr=1075183036,xyr=1075388923,Jyr=1075594811,Yyr=1094263291,yn=[0,0,0],bn=[0,0];function Zyr(r,e){var t,i,n,a,u,o,f,v;if(n=Byr(r),a=n&Ryr|0,a<=Hyr)return e[0]=r,e[1]=0,0;if(a<=zyr)return(a&Myr)===Uyr?r0(r,a,e):a<=Wyr?r>0?(v=r-Ze,e[0]=v-jt,e[1]=v-e[0]-jt,1):(v=r+Ze,e[0]=v+jt,e[1]=v-e[0]+jt,-1):r>0?(v=r-2*Ze,e[0]=v-e0,e[1]=v-e[0]-e0,2):(v=r+2*Ze,e[0]=v+e0,e[1]=v-e[0]+e0,-2);if(a<=Jyr)return a<=Xyr?a===Dyr?r0(r,a,e):r>0?(v=r-3*Ze,e[0]=v-t0,e[1]=v-e[0]-t0,3):(v=r+3*Ze,e[0]=v+t0,e[1]=v-e[0]+t0,-3):a===xyr?r0(r,a,e):r>0?(v=r-4*Ze,e[0]=v-i0,e[1]=v-e[0]-i0,4):(v=r+4*Ze,e[0]=v+i0,e[1]=v-e[0]+i0,-4);if(a<Yyr)return r0(r,a,e);if(a>=Fyr)return e[0]=NaN,e[1]=NaN,0;for(t=kyr(r),i=(a>>20)-1046,v=jyr(a-(i<<20|0),t),o=0;o<2;o++)yn[o]=v|0,v=(v-yn[o])*Vyr;for(yn[2]=v,u=3;yn[u-1]===Gyr;)u-=1;return f=Cyr(yn,bn,i,u,1),r<0?(e[0]=-bn[0],e[1]=-bn[1],-f):(e[0]=bn[0],e[1]=bn[1],f)}mT.exports=Zyr});var wn=s((q3e,hT)=>{"use strict";var $yr=dT();hT.exports=$yr});var bT=s((y3e,yT)=>{"use strict";var qT=-.16666666666666632,Qyr=.00833333333332249,Kyr=-.0001984126982985795,rbr=27557313707070068e-22,ebr=-25050760253406863e-24,tbr=158969099521155e-24,ibr=.0416666666666666,nbr=-.001388888888887411,abr=2480158728947673e-20,sbr=-27557314351390663e-23,ubr=2087572321298175e-24,obr=-11359647557788195e-27;function vbr(r,e,t,i,n){var a,u,o,f,v;return v=r*r,f=v*v,u=Qyr+v*(Kyr+v*rbr)+v*f*(ebr+v*tbr),o=v*r,e===0?t[n]=r+o*(qT+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*qT),u=v*(ibr+v*(nbr+v*abr)),u+=f*f*(sbr+v*(ubr+v*obr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*u-r*e)),t}yT.exports=vbr});var u1=s((b3e,ET)=>{"use strict";var fbr=Jr(),cbr=pn(),lbr=tr(),pbr=wn(),wT=bT(),gbr=1072243195,mbr=1044381696,s1=[0,0];function dbr(r,e,t,i){var n,a;if(n=lbr(r),n&=fbr,n<=gbr)return n<mbr&&(r|0)===0&&(e[i]=r,e[i+t]=0),wT(r,0,e,t,i);if(n>=cbr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=pbr(r,s1),wT(s1[0],s1[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}ET.exports=dbr});var AT=s((w3e,NT)=>{"use strict";var hbr=u1();function qbr(r){return hbr(r,[0,0],1,0)}NT.exports=qbr});var En=s((E3e,ST)=>{"use strict";var ybr=w(),OT=AT(),bbr=u1();ybr(OT,"assign",bbr);ST.exports=OT});var IT=s((N3e,TT)=>{"use strict";function wbr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}TT.exports=wbr});var LT=s((A3e,_T)=>{"use strict";function Ebr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}_T.exports=Ebr});var RT=s((O3e,PT)=>{"use strict";function Nbr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}PT.exports=Nbr});var MT=s((S3e,FT)=>{"use strict";function Abr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}FT.exports=Abr});var kT=s((T3e,BT)=>{"use strict";var Obr=V(),Sbr=En().assign,Tbr=I(),Ibr=IT(),_br=LT(),Lbr=RT(),Pbr=MT(),Rbr=.5641895835477563,Fbr=2.404825557695773,Mbr=5.520078110286311,Bbr=616,kbr=-.0014244423042272315,jbr=1413,Cbr=.0005468602863106496,Nn=[0,0];function Gbr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===Tbr?0:r===0?1:r<=4?(a=r*r,n=Ibr(a),u=(r+Fbr)*(r-Bbr/256-kbr),u*n):r<=8?(a=1-r*r/64,n=_br(a),u=(r+Mbr)*(r-jbr/256-Cbr),u*n):(a=8/r,i=a*a,e=Lbr(i),t=Pbr(i),u=Rbr/Obr(r),Sbr(r,Nn,1,0),u*(e*(Nn[1]+Nn[0])-a*t*(Nn[0]-Nn[1])))}BT.exports=Gbr});var o1=s((I3e,jT)=>{"use strict";var Vbr=kT();jT.exports=Vbr});var n0=s((_3e,CT)=>{"use strict";var Ubr=1.772453850905516;CT.exports=Ubr});var VT=s((L3e,GT)=>{"use strict";function Hbr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}GT.exports=Hbr});var HT=s((P3e,UT)=>{"use strict";function Wbr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}UT.exports=Wbr});var zT=s((R3e,WT)=>{"use strict";function zbr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}WT.exports=zbr});var XT=s((F3e,DT)=>{"use strict";function Dbr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}DT.exports=Dbr});var JT=s((M3e,xT)=>{"use strict";var Xbr=V(),xbr=x(),Jbr=En().assign,Ybr=I(),Zbr=n0(),$br=VT(),Qbr=HT(),Kbr=zT(),rwr=XT(),ewr=3.8317059702075125,twr=7.015586669815619,iwr=981,nwr=-.0003252797924876844,awr=1796,swr=-38330184381246464e-21,An=[0,0];function uwr(r){var e,t,i,n,a,u,o,f;return f=xbr(r),r===0||f===Ybr?0:(f<=4?(u=r*r,a=$br(u),o=f*(f+ewr)*(f-iwr/256-nwr),e=o*a):f<=8?(u=r*r,a=Qbr(u),o=f*(f+twr)*(f-awr/256-swr),e=o*a):(u=8/f,n=u*u,t=Kbr(n),i=rwr(n),o=1/(Xbr(f)*Zbr),Jbr(f,An,1,0),e=o*(t*(An[0]-An[1])+u*i*(An[0]+An[1]))),r<0&&(e*=-1),e)}xT.exports=uwr});var v1=s((B3e,YT)=>{"use strict";var owr=JT();YT.exports=owr});var Fr=s((k3e,ZT)=>{"use strict";var vwr=3.141592653589793;ZT.exports=vwr});var QT=s((j3e,$T)=>{"use strict";function fwr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}$T.exports=fwr});var rI=s((C3e,KT)=>{"use strict";function cwr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}KT.exports=cwr});var tI=s((G3e,eI)=>{"use strict";function lwr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}eI.exports=lwr});var nI=s((V3e,iI)=>{"use strict";function pwr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}iI.exports=pwr});var sI=s((U3e,aI)=>{"use strict";function gwr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}aI.exports=gwr});var cI=s((H3e,fI)=>{"use strict";var f1=R(),mwr=V(),dwr=Fr(),hwr=n0(),qwr=G(),ywr=I(),bwr=En().assign,c1=o1(),wwr=QT(),Ewr=rI(),Nwr=tI(),Awr=nI(),Owr=sI(),Swr=1/hwr,l1=2/dwr,uI=.8935769662791675,oI=3.957678419314858,vI=7.086051060301773,Twr=228,Iwr=.0029519662791675214,_wr=1013,Lwr=.0006471693148578684,Pwr=1814,Rwr=.00011356030177269763,On=[0,0];function Fwr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?qwr:r===ywr?0:r<=3?(a=r*r,u=f1(r/uI)*c1(r)*l1,n=wwr(a),o=(r+uI)*(r-Twr/256-Iwr),u+o*n):r<=5.5?(a=r*r,u=f1(r/oI)*c1(r)*l1,n=Ewr(a),o=(r+oI)*(r-_wr/256-Lwr),u+o*n):r<=8?(a=r*r,u=f1(r/vI)*c1(r)*l1,n=Nwr(a),o=(r+vI)*(r-Pwr/256-Rwr),u+o*n):(a=8/r,i=a*a,e=Awr(i),t=Owr(i),o=Swr/mwr(r),bwr(r,On,1,0),o*(e*(On[0]-On[1])+a*t*(On[1]+On[0])))}fI.exports=Fwr});var pI=s((W3e,lI)=>{"use strict";var Mwr=cI();lI.exports=Mwr});var mI=s((z3e,gI)=>{"use strict";function Bwr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}gI.exports=Bwr});var hI=s((D3e,dI)=>{"use strict";function kwr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}dI.exports=kwr});var yI=s((X3e,qI)=>{"use strict";function jwr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}qI.exports=jwr});var wI=s((x3e,bI)=>{"use strict";function Cwr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}bI.exports=Cwr});var II=s((J3e,TI)=>{"use strict";var EI=R(),Gwr=V(),Vwr=Fr(),Uwr=n0(),Hwr=G(),Wwr=I(),zwr=En().assign,NI=v1(),Dwr=mI(),Xwr=hI(),xwr=yI(),Jwr=wI(),Ywr=1/Uwr,AI=2/Vwr,OI=2.197141326031017,SI=5.429681040794135,Zwr=562,$wr=.001828826031017035,Qwr=1390,Kwr=-6459205864867228e-21,Sn=[0,0];function rEr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?Hwr:r===Wwr?0:r<=4?(a=r*r,u=EI(r/OI)*NI(r)*AI,n=Dwr(a),o=(r+OI)*(r-Zwr/256-$wr)/r,u+o*n):r<=8?(a=r*r,u=EI(r/SI)*NI(r)*AI,n=Xwr(a),o=(r+SI)*(r-Qwr/256-Kwr)/r,u+o*n):(a=8/r,i=a*a,e=xwr(i),t=Jwr(i),o=Ywr/Gwr(r),zwr(r,Sn,1,0),o*(a*t*(Sn[0]-Sn[1])-e*(Sn[0]+Sn[1])))}TI.exports=rEr});var LI=s((Y3e,_I)=>{"use strict";var eEr=II();_I.exports=eEr});var RI=s((Z3e,PI)=>{"use strict";function tEr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}PI.exports=tEr});var MI=s(($3e,FI)=>{"use strict";function iEr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}FI.exports=iEr});var kI=s((Q3e,BI)=>{"use strict";var nEr=RI(),aEr=MI();function sEr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*nEr(a),i+=n*n*aEr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}BI.exports=sEr});var p1=s((K3e,jI)=>{"use strict";var uEr=kI();jI.exports=uEr});var VI=s((r6e,GI)=>{"use strict";var CI=-.16666666666666632,oEr=.00833333333332249,vEr=-.0001984126982985795,fEr=27557313707070068e-22,cEr=-25050760253406863e-24,lEr=158969099521155e-24;function pEr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=oEr+a*(vEr+a*fEr)+a*n*(cEr+a*lEr),i=a*r,e===0?r+i*(CI+a*t):r-(a*(.5*e-i*t)-e-i*CI)}GI.exports=pEr});var g1=s((e6e,UI)=>{"use strict";var gEr=VI();UI.exports=gEr});var zI=s((t6e,WI)=>{"use strict";var mEr=tr(),m1=p1(),HI=g1(),dEr=wn(),se=[0,0],hEr=2147483647,qEr=1072243195,yEr=1044381696,bEr=2146435072;function wEr(r){var e,t;if(e=mEr(r),e&=hEr,e<=qEr)return e<yEr?1:m1(r,0);if(e>=bEr)return NaN;switch(t=dEr(r,se),t&3){case 0:return m1(se[0],se[1]);case 1:return-HI(se[0],se[1]);case 2:return-m1(se[0],se[1]);default:return HI(se[0],se[1])}}WI.exports=wEr});var Ct=s((i6e,DI)=>{"use strict";var EEr=zI();DI.exports=EEr});var JI=s((n6e,xI)=>{"use strict";var NEr=Jr(),AEr=pn(),OEr=tr(),XI=p1(),d1=g1(),SEr=wn(),TEr=1072243195,IEr=1045430272,ue=[0,0];function _Er(r){var e,t;if(e=OEr(r),e&=NEr,e<=TEr)return e<IEr?r:d1(r,0);if(e>=AEr)return NaN;switch(t=SEr(r,ue),t&3){case 0:return d1(ue[0],ue[1]);case 1:return XI(ue[0],ue[1]);case 2:return-d1(ue[0],ue[1]);default:return-XI(ue[0],ue[1])}}xI.exports=_Er});var Gt=s((a6e,YI)=>{"use strict";var LEr=JI();YI.exports=LEr});var QI=s((s6e,$I)=>{"use strict";var PEr=E(),REr=Rr(),FEr=x(),ZI=Ct(),MEr=Gt(),BEr=J(),h1=Fr(),kEr=di(),jEr=kEr+1;function CEr(r){var e,t,i,n;return PEr(r)?NaN:REr(r)?NaN:(e=FEr(r),e>jEr?1:(t=BEr(e),i=e-t,i===.5?0:(i<.25?n=ZI(h1*i):i<.75?(i=.5-i,n=MEr(h1*i)):(i=1-i,n=-ZI(h1*i)),t%2===1?-n:n)))}$I.exports=CEr});var r_=s((u6e,KI)=>{"use strict";var GEr=QI();KI.exports=GEr});var t_=s((o6e,e_)=>{"use strict";var VEr=1.618033988749895;e_.exports=VEr});var n_=s((v6e,i_)=>{"use strict";var UEr=E(),HEr=r_(),WEr=W(),zEr=t_(),DEr=I(),XEr=G(),xEr=2.23606797749979;function JEr(r){var e,t;return UEr(r)||r===DEr||r===XEr?NaN:(e=WEr(zEr,r),t=HEr(r)/e,(e-t)/xEr)}i_.exports=JEr});var s_=s((f6e,a_)=>{"use strict";var YEr=n_();a_.exports=YEr});var o_=s((c6e,u_)=>{"use strict";function ZEr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}u_.exports=ZEr});var l_=s((l6e,c_)=>{"use strict";var $Er=G2(),QEr=L2(),v_=Jr(),y1=tr(),KEr=ne(),rNr=Rr(),f_=mi(),eNr=gi(),tNr=E(),iNr=o_(),nNr=4294967295>>>0,aNr=3221225472>>>0,sNr=0x40000000000000,q1=2147483648>>>0,uNr=1>>>0,oNr=715094163>>>0,vNr=696219795>>>0,fNr=y1($Er),Vt=[0>>>0,0>>>0];function cNr(r){var e,t,i,n,a,u,o;return r===0||tNr(r)||rNr(r)?r:(t=y1(r)>>>0,e=(t&QEr)>>>0,t&=v_,t<fNr?(u=sNr*r,i=(y1(u)&v_)>>>0,i=(i/3>>>0)+vNr>>>0,u=f_(e|i,0)):(u=0,i=(t/3>>>0)+oNr>>>0,u=KEr(u,e|i)),n=u*u*(u/r),u*=iNr(n),eNr.assign(u,Vt,1,0),Vt[1]&q1?(Vt[0]+=uNr,Vt[1]&=~q1):Vt[1]|=q1,u=f_(Vt[0]&nNr,Vt[1]&aNr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}c_.exports=cNr});var g_=s((p6e,p_)=>{"use strict";var lNr=l_();p_.exports=lNr});var d_=s((g6e,m_)=>{"use strict";var pNr=Math.ceil;m_.exports=pNr});var Tn=s((m6e,h_)=>{"use strict";var gNr=d_();h_.exports=gNr});var y_=s((d6e,q_)=>{"use strict";function mNr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}q_.exports=mNr});var w_=s((h6e,b_)=>{"use strict";function dNr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}b_.exports=dNr});var A_=s((q6e,N_)=>{"use strict";var hNr=tr(),qNr=y_(),yNr=w_(),E_=1048575,bNr=.3333333333333333;function wNr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=hNr(r),a=r-1,(E_&2+n)<3?a===0?0:a*a*(bNr*a-.5):(u=a/(2+a),o=u*u,n&=E_,c=n-398458|0,v=o*o,l=440401-n|0,t=v*qNr(v),i=o*yNr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}N_.exports=wNr});var I_=s((y6e,T_)=>{"use strict";var O_=tr(),ENr=ne(),NNr=ie(),ANr=E(),ONr=Yr(),SNr=G(),TNr=A_(),INr=0x40000000000000,S_=.4342944818781689,_Nr=25082946711645275e-27,LNr=.30102999566361177,PNr=3694239077158931e-28,RNr=1048575,FNr=2146435072,MNr=1048576,BNr=1072693248;function kNr(r){var e,t,i,n,a,u,o,f;return ANr(r)||r<0?NaN:r===0?SNr:(t=O_(r),u=0,t<MNr&&(u-=54,r*=INr,t=O_(r)),t>=FNr?r+r:(u+=(t>>20)-ONr|0,t&=RNr,a=t+614244&1048576|0,r=ENr(r,t|a^BNr),u+=a>>20|0,o=u,n=TNr(r),r-=1,e=NNr(r,0),i=r-e,f=o*PNr+(r+n)*_Nr,f+=(i+n)*S_+e*S_,f+o*LNr))}T_.exports=kNr});var L_=s((b6e,__)=>{"use strict";var jNr=I_();__.exports=jNr});var R_=s((w6e,P_)=>{"use strict";var CNr=E(),GNr=Rr(),VNr=W(),UNr=J(),HNr=Tn(),WNr=L_(),zNr=Ga(),DNr=Va(),XNr=I();function xNr(r){var e,t;return CNr(r)||GNr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=WNr(r),e===-1?t=UNr(t):t=HNr(t),t<=DNr?e*0:t>zNr?XNr:e*VNr(10,t))}P_.exports=xNr});var M_=s((E6e,F_)=>{"use strict";var JNr=R_();F_.exports=JNr});var k_=s((N6e,B_)=>{"use strict";function YNr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}B_.exports=YNr});var C_=s((A6e,j_)=>{"use strict";function ZNr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}j_.exports=ZNr});var U_=s((O6e,V_)=>{"use strict";var $Nr=tr(),QNr=k_(),KNr=C_(),G_=1048575,rAr=.3333333333333333;function eAr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=$Nr(r),a=r-1,(G_&2+n)<3?a===0?0:a*a*(rAr*a-.5):(u=a/(2+a),o=u*u,n&=G_,c=n-398458|0,v=o*o,l=440401-n|0,t=v*QNr(v),i=o*KNr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}V_.exports=eAr});var z_=s((S6e,W_)=>{"use strict";var tAr=tr(),iAr=ne(),nAr=ie(),aAr=gi(),sAr=E(),uAr=Jr(),oAr=Ca(),vAr=Yr(),fAr=G(),cAr=U_(),lAr=0x40000000000000,H_=1.4426950407214463,pAr=16751713164886512e-26,gAr=2146435072,mAr=1048576,dAr=1072693248,b1=[0,0];function hAr(r){var e,t,i,n,a,u,o;if(sAr(r)||r<0)return NaN;if(aAr.assign(r,b1,1,0),i=b1[0],n=b1[1],o=0,i<mAr){if((i&uAr|n)===0)return fAr;o-=54,r*=lAr,i=tAr(r)}return i>=gAr?r+r:(o+=(i>>20)-vAr|0,i&=oAr,u=i+614244&1048576|0,r=iAr(r,i|u^dAr),o+=u>>20|0,a=cAr(r),r-=1,e=nAr(r,0),t=r-e,(r+a)*pAr+(t+a)*H_+e*H_+o)}W_.exports=hAr});var X_=s((T6e,D_)=>{"use strict";var qAr=z_();D_.exports=qAr});var J_=s((I6e,x_)=>{"use strict";var yAr=E(),bAr=Rr(),wAr=W(),EAr=J(),NAr=Tn(),AAr=X_(),OAr=j2(),SAr=C2(),TAr=I();function IAr(r){var e,t;return yAr(r)||bAr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=AAr(r),t===SAr)?r:(e===-1?t=EAr(t):t=NAr(t),t>OAr?TAr:e*wAr(2,t))}x_.exports=IAr});var Z_=s((_6e,Y_)=>{"use strict";var _Ar=J_();Y_.exports=_Ar});var Q_=s((L6e,$_)=>{"use strict";var LAr=J(),PAr=Tn();function RAr(r){return r<0?PAr(r):LAr(r)}$_.exports=RAr});var a0=s((P6e,K_)=>{"use strict";var FAr=Q_();K_.exports=FAr});var eL=s((R6e,rL)=>{"use strict";function MAr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}rL.exports=MAr});var iL=s((F6e,tL)=>{"use strict";var BAr=ka(),kAr=eL();function jAr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*kAr(n),u=1-(e-i*a/(2-a)-r),BAr(u,t)}tL.exports=jAr});var vL=s((M6e,oL)=>{"use strict";var CAr=E(),nL=a0(),GAr=G(),aL=I(),VAr=iL(),UAr=.6931471803691238,HAr=19082149292705877e-26,sL=1.4426950408889634,WAr=709.782712893384,zAr=-745.1332191019411,uL=1/(1<<28),DAr=-uL;function XAr(r){var e,t,i;return CAr(r)||r===aL?r:r===GAr?0:r>WAr?aL:r<zAr?0:r>DAr&&r<uL?1+r:(r<0?i=nL(sL*r-.5):i=nL(sL*r+.5),e=r-i*UAr,t=i*HAr,VAr(e,t,i))}oL.exports=XAr});var nr=s((B6e,fL)=>{"use strict";var xAr=vL();fL.exports=xAr});var lL=s((k6e,cL)=>{"use strict";var JAr=G();function YAr(r){return r===0&&1/r===JAr}cL.exports=YAr});var w1=s((j6e,pL)=>{"use strict";var ZAr=lL();pL.exports=ZAr});var E1=s((C6e,gL)=>{"use strict";var $Ar=2.5066282746310007;gL.exports=$Ar});var dL=s((G6e,mL)=>{"use strict";function QAr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}mL.exports=QAr});var yL=s((V6e,qL)=>{"use strict";var KAr=E1(),hL=W(),rOr=nr(),eOr=dL(),tOr=143.01608;function iOr(r){var e,t,i;return e=1/r,e=1+e*eOr(e),t=rOr(r),r>tOr?(i=hL(r,.5*r-.25),t=i*(i/t)):t=hL(r,r-.5)/t,KAr*t*e}qL.exports=iOr});var wL=s((U6e,bL)=>{"use strict";var nOr=.5772156649015329;bL.exports=nOr});var NL=s((H6e,EL)=>{"use strict";var aOr=wL();function sOr(r,e){return e/((1+aOr*r)*r)}EL.exports=sOr});var OL=s((W6e,AL)=>{"use strict";function uOr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}AL.exports=uOr});var FL=s((z6e,RL)=>{"use strict";var oOr=E(),vOr=_r(),fOr=w1(),SL=x(),cOr=J(),lOr=Gt(),TL=I(),IL=G(),_L=Fr(),LL=yL(),PL=NL(),pOr=OL();function gOr(r){var e,t,i,n;if(vOr(r)&&r<0||r===IL||oOr(r))return NaN;if(r===0)return fOr(r)?IL:TL;if(r>171.61447887182297)return TL;if(r<-170.5674972726612)return 0;if(t=SL(r),t>33)return r>=0?LL(r):(i=cOr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*lOr(_L*n),e*_L/(SL(n)*LL(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return PL(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return PL(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*pOr(r))}RL.exports=gOr});var hi=s((D6e,ML)=>{"use strict";var mOr=FL();ML.exports=mOr});var jL=s((X6e,kL)=>{"use strict";var dOr=E(),hOr=Rr(),BL=Ct(),N1=Gt(),qOr=x(),In=Pa(),_n=Fr();function yOr(r){var e,t;return dOr(r)?NaN:hOr(r)?NaN:(t=r%2,e=qOr(t),e===0||e===1?In(0,t):e<.25?N1(_n*t):e<.75?(e=.5-e,In(BL(_n*e),t)):e<1.25?(t=In(1,t)-t,N1(_n*t)):e<1.75?(e-=1.5,-In(BL(_n*e),t)):(t-=In(2,t),N1(_n*t)))}kL.exports=yOr});var Ln=s((x6e,CL)=>{"use strict";var bOr=jL();CL.exports=bOr});var VL=s((J6e,GL)=>{"use strict";function wOr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}GL.exports=wOr});var HL=s((Y6e,UL)=>{"use strict";function EOr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}UL.exports=EOr});var zL=s((Z6e,WL)=>{"use strict";function NOr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}WL.exports=NOr});var XL=s(($6e,DL)=>{"use strict";function AOr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}DL.exports=AOr});var JL=s((Q6e,xL)=>{"use strict";function OOr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}xL.exports=OOr});var ZL=s((K6e,YL)=>{"use strict";function SOr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}YL.exports=SOr});var QL=s((r4e,$L)=>{"use strict";function TOr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}$L.exports=TOr});var rP=s((e4e,KL)=>{"use strict";function IOr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}KL.exports=IOr});var tP=s((t4e,eP)=>{"use strict";function _Or(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}eP.exports=_Or});var nP=s((i4e,iP)=>{"use strict";function LOr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}iP.exports=LOr});var uP=s((n4e,sP)=>{"use strict";var POr=E(),ROr=Rr(),FOr=x(),qi=R(),MOr=a0(),BOr=Ln(),kOr=Fr(),A1=I(),jOr=VL(),COr=HL(),GOr=zL(),VOr=XL(),UOr=JL(),HOr=ZL(),WOr=QL(),zOr=rP(),DOr=tP(),XOr=nP(),xOr=.07721566490153287,JOr=.3224670334241136,YOr=1,ZOr=-.07721566490153287,$Or=.48383612272381005,QOr=-.1475877229945939,KOr=.06462494023913339,rSr=-.07721566490153287,eSr=1,tSr=.4189385332046727,s0=1.4616321449683622,iSr=4503599627370496,nSr=0x400000000000000,aSr=8470329472543003e-37,aP=1.4616321449683622,sSr=-.12148629053584961,uSr=-3638676997039505e-33;function oSr(r){var e,t,i,n,a,u,o,f,v,c,l,p,m;if(POr(r)||ROr(r))return r;if(r===0)return A1;if(r<0?(e=!0,r=-r):e=!1,r<aSr)return-qi(r);if(e){if(r>=iSr||(v=BOr(r),v===0))return A1;t=qi(kOr/FOr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-qi(r),r>=s0-1+.27?(l=1-r,i=0):r>=s0-1-.27?(l=r-(aP-1),i=1):(l=r,i=2)):(m=0,r>=s0+.27?(l=2-r,i=0):r>=s0-.27?(l=r-aP,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=xOr+p*jOr(p),a=p*(JOr+p*COr(p)),o=l*u+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=$Or+c*UOr(c),a=QOr+c*HOr(c),n=KOr+c*WOr(c),o=p*u-(uSr-c*(a+l*n)),m+=sSr+o;break;case 2:u=l*(rSr+l*zOr(l)),a=eSr+l*DOr(l),m+=-.5*l+u/a;break}else if(r<8)switch(i=MOr(r),l=r-i,o=l*(ZOr+l*VOr(l)),f=YOr+l*GOr(l),m=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=qi(p)}else r<nSr?(v=qi(r),p=1/r,l=p*p,c=tSr+p*XOr(l),m=(r-.5)*(v-1)+c):m=r*(qi(r)-1);return e&&(m=t-m),m}sP.exports=oSr});var Pn=s((a4e,oP)=>{"use strict";var vSr=uP();oP.exports=vSr});var $e=s((s4e,vP)=>{"use strict";var fSr=6.283185307179586;vP.exports=fSr});var O1=s((u4e,fP)=>{"use strict";var cSr=14901161193847656e-24;fP.exports=cSr});var S1=s((o4e,cP)=>{"use strict";var lSr=.9189385332046728;cP.exports=lSr});var lP=s((v4e,pSr)=>{pSr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var pP=s((f4e,gSr)=>{gSr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var gP=s((c4e,mSr)=>{mSr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var dP=s((l4e,mP)=>{"use strict";function dSr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}mP.exports=dSr});var qP=s((p4e,hP)=>{"use strict";function hSr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}hP.exports=hSr});var bP=s((g4e,yP)=>{"use strict";function qSr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}yP.exports=qSr});var EP=s((m4e,wP)=>{"use strict";function ySr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}wP.exports=ySr});var AP=s((d4e,NP)=>{"use strict";function bSr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}NP.exports=bSr});var SP=s((h4e,OP)=>{"use strict";function wSr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}OP.exports=wSr});var PP=s((q4e,LP)=>{"use strict";var ESr=E(),NSr=_r(),ASr=x(),u0=nr(),OSr=J(),SSr=hi(),TSr=Pn(),TP=Ln(),IP=W(),ISr=R(),_Sr=I(),LSr=G(),_P=$e(),PSr=O1(),RSr=S1(),FSr=lP(),MSr=pP(),BSr=gP(),kSr=dP(),jSr=qP(),CSr=bP(),GSr=EP(),VSr=AP(),USr=SP(),HSr=129,WSr=170,zSr=709,DSr=1.2433929443359375,XSr=.6986598968505859;function T1(r){var e,t,i,n,a,u;if(ESr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(NSr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=HSr)return-BSr[u]/(i+1)}else return(n&1)===0?MSr[n/2]:FSr[(n-3)/2];return ASr(r)<PSr?-.5-RSr*r:(t=1-r,r<0?OSr(r/2)===r/2?0:(e=r,r=t,t=e,r>WSr?(e=TP(.5*t)*2*T1(r),a=TSr(r),a-=r*ISr(_P),a>zSr?e<0?LSr:_Sr:e*u0(a)):TP(.5*t)*2*IP(_P,-r)*SSr(r)*T1(r)):r<1?(e=kSr(t),e-=DSr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+jSr(t)):r<=4?(e=XSr+1/-t,e+CSr(r-2)):r<=7?(e=GSr(r-4),1+u0(e)):r<15?(e=VSr(r-7),1+u0(e)):r<36?(e=USr(r-15),1+u0(e)):1+IP(2,-r))}LP.exports=T1});var FP=s((y4e,RP)=>{"use strict";var xSr=PP();RP.exports=xSr});var BP=s((b4e,MP)=>{"use strict";var H=ar(),JSr=x(),YSr=za(),ZSr=qn(),$Sr=VO(),QSr=KO(),KSr=iS(),rTr=uS(),eTr=cS(),tTr=bS(),iTr=AS(),nTr=IS(),aTr=kt(),sTr=r1(),uTr=Ya(),oTr=FS(),vTr=jS(),fTr=US(),cTr=YS(),lTr=o1(),pTr=v1(),gTr=pI(),mTr=LI(),dTr=s_(),hTr=g_(),qTr=Tn(),yTr=M_(),bTr=Z_(),wTr=Ct(),ETr=Gt(),NTr=V(),ATr=FP();function OTr(r){return H(r,"abs",JSr),H(r,"abs2",YSr),H(r,"acos",ZSr),H(r,"acosh",$Sr),H(r,"acot",QSr),H(r,"acovercos",KSr),H(r,"acoversin",rTr),H(r,"acsc",eTr),H(r,"acsch",tTr),H(r,"ahavercos",iTr),H(r,"ahaversin",nTr),H(r,"asin",aTr),H(r,"asinh",sTr),H(r,"atan",uTr),H(r,"atanh",oTr),H(r,"avercos",vTr),H(r,"aversin",fTr),H(r,"bernoulli",cTr),H(r,"besselj0",lTr),H(r,"besselj1",pTr),H(r,"bessely0",gTr),H(r,"bessely1",mTr),H(r,"binet",dTr),H(r,"cbrt",hTr),H(r,"ceil",qTr),H(r,"ceil10",yTr),H(r,"ceil2",bTr),H(r,"cos",wTr),H(r,"sin",ETr),H(r,"sqrt",NTr),H(r,"zeta",ATr),r}MP.exports=OTr});var jP=s((w4e,kP)=>{"use strict";var STr=ar(),TTr=wA(),ITr=rO(),_Tr=BP();function LTr(r){return STr(r,"tools",ITr({})),r=TTr(r),r=_Tr(r),r}kP.exports=LTr});var GP=s((E4e,CP)=>{"use strict";var PTr=Ce();function RTr(r,e,t,i){PTr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}CP.exports=RTr});var M=s((N4e,VP)=>{"use strict";var FTr=GP();VP.exports=FTr});var HP=s((A4e,UP)=>{"use strict";function MTr(r){return e;function e(){return r}}UP.exports=MTr});var T=s((O4e,WP)=>{"use strict";var BTr=HP();WP.exports=BTr});var DP=s((S4e,zP)=>{"use strict";var kTr=I();function jTr(r){return r===0&&1/r===kTr}zP.exports=jTr});var Qe=s((T4e,XP)=>{"use strict";var CTr=DP();XP.exports=CTr});var YP=s((I4e,JP)=>{"use strict";var GTr=Qe(),xP=E(),I1=I();function VTr(r,e){return xP(r)||xP(e)?NaN:r===I1||e===I1?I1:r===e&&r===0?GTr(r)?r:e:r>e?r:e}JP.exports=VTr});var _1=s((_4e,ZP)=>{"use strict";var UTr=YP();ZP.exports=UTr});var KP=s((L4e,QP)=>{"use strict";var $P=65535;function HTr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&$P)>>>0,o=(e&$P)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}QP.exports=HTr});var eR=s((P4e,rR)=>{"use strict";var WTr=KP();rR.exports=WTr});var L1=s((R4e,tR)=>{"use strict";function zTr(r,e,t,i,n,a,u){var o,f,v,c,l,p,m;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,m=0;m<r;m++)v(f,p,c(o,l)),l+=t,p+=a;return e}tR.exports=zTr});var aR=s((F4e,nR)=>{"use strict";var iR=qa(),DTr=L1(),P1=8;function XTr(r,e,t,i,n){var a,u,o,f,v,c;if(r<=0)return i;if(o=iR(e),f=iR(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,DTr(r,o,t,a,f,n,u),f.data;if(t===1&&n===1){if(v=r%P1,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<P1)return i;for(c=v;c<r;c+=P1)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}nR.exports=XTr});var oR=s((M4e,uR)=>{"use strict";var sR=qa(),xTr=L1(),Rn=8;function JTr(r,e,t,i,n,a,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=sR(e),c=sR(n),v.accessorProtocol||c.accessorProtocol)return xTr(r,v,t,i,c,a,u),c.data;if(o=i,f=u,t===1&&a===1){if(l=r%Rn,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<Rn)return n;for(p=l;p<r;p+=Rn)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=Rn,f+=Rn;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}uR.exports=JTr});var Ke=s((B4e,fR)=>{"use strict";var YTr=w(),vR=aR(),ZTr=oR();YTr(vR,"ndarray",ZTr);fR.exports=vR});var lR=s((k4e,cR)=>{"use strict";function $Tr(){}cR.exports=$Tr});var gR=s((j4e,pR)=>{"use strict";var QTr=lR();function KTr(){return QTr.name==="foo"}pR.exports=KTr});var dR=s((C4e,mR)=>{"use strict";var rIr=gR();mR.exports=rIr});var qR=s((G4e,hR)=>{"use strict";var eIr=L(),tIr=dR(),iIr=y(),nIr=Uu().REGEXP,aIr=tIr();function sIr(r){if(eIr(r)===!1)throw new TypeError(iIr("invalid argument. Must provide a function. Value: `%s`.",r));return aIr?r.name:nIr.exec(r.toString())[1]}hR.exports=sIr});var bR=s((V4e,yR)=>{"use strict";var uIr=qR();yR.exports=uIr});var ER=s((U4e,wR)=>{"use strict";var oIr=Yi(),vIr=Zt(),fIr=Ji(),cIr=xi(),lIr=Yt(),pIr=Ot(),gIr=pr(),mIr=Kr(),dIr=gr(),hIr=[dIr,mIr,pIr,gIr,cIr,lIr,oIr,vIr,fIr];wR.exports=hIr});var NR=s((H4e,qIr)=>{qIr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var _R=s((W4e,IR)=>{"use strict";var yIr=Ge(),bIr=bR(),SR=Pt(),wIr=Ju(),EIr=gr(),AR=ER(),OR=NR(),o0=wIr()?SR(EIr):TR;o0=bIr(o0)==="TypedArray"?o0:TR;function TR(){}function NIr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof o0)return!0;for(t=0;t<AR.length;t++)if(r instanceof AR[t])return!0;for(;r;){for(e=yIr(r),t=0;t<OR.length;t++)if(OR[t]===e)return!0;r=SR(r)}return!1}IR.exports=NIr});var PR=s((z4e,LR)=>{"use strict";var AIr=_R();LR.exports=AIr});var FR=s((D4e,RR)=>{"use strict";var OIr=Ki(),SIr=en(),TIr=[SIr,OIr];RR.exports=TIr});var MR=s((X4e,IIr)=>{IIr.exports=["Complex64Array","Complex128Array"]});var CR=s((x4e,jR)=>{"use strict";var _Ir=Ge(),LIr=Pt(),BR=FR(),kR=MR();function PIr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<BR.length;t++)if(r instanceof BR[t])return!0;for(;r;){for(e=_Ir(r),t=0;t<kR.length;t++)if(kR[t]===e)return!0;r=LIr(r)}return!1}jR.exports=PIr});var VR=s((J4e,GR)=>{"use strict";var RIr=CR();GR.exports=RIr});var HR=s((Y4e,UR)=>{"use strict";var FIr=y();function MIr(r,e){if(typeof e!="function")throw new TypeError(FIr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}UR.exports=MIr});var zR=s((Z4e,WR)=>{"use strict";var BIr=HR();WR.exports=BIr});var XR=s(($4e,DR)=>{"use strict";var kIr=Yi(),jIr=Zt(),CIr=Ji(),GIr=xi(),VIr=Yt(),UIr=Ot(),HIr=pr(),WIr=Kr(),zIr=gr(),DIr=Ki(),XIr=en(),xIr=[[zIr,"Float64Array"],[WIr,"Float32Array"],[UIr,"Int32Array"],[HIr,"Uint32Array"],[GIr,"Int16Array"],[VIr,"Uint16Array"],[kIr,"Int8Array"],[jIr,"Uint8Array"],[CIr,"Uint8ClampedArray"],[DIr,"Complex64Array"],[XIr,"Complex128Array"]];DR.exports=xIr});var JR=s((Q4e,xR)=>{"use strict";var JIr=zR(),YIr=Ge(),ZIr=Pt(),yi=XR();function $Ir(r){var e,t;for(t=0;t<yi.length;t++)if(JIr(r,yi[t][0]))return yi[t][1];for(;r;){for(e=YIr(r),t=0;t<yi.length;t++)if(e===yi[t][1])return yi[t][1];r=ZIr(r)}}xR.exports=$Ir});var ZR=s((K4e,YR)=>{"use strict";var QIr=PR(),KIr=VR(),r_r=Kt(),e_r=ri(),t_r=y(),i_r=JR();function n_r(r){var e,t,i;if(QIr(r))e=r;else if(KIr(r))r.BYTES_PER_ELEMENT===8?e=r_r(r,0):e=e_r(r,0);else throw new TypeError(t_r("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:i_r(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}YR.exports=n_r});var B=s((rve,$R)=>{"use strict";var a_r=ZR();$R.exports=a_r});var R1=s((eve,QR)=>{"use strict";var s_r=xt(),u_r=J(),o_r=s_r-1;function v_r(){var r=u_r(1+o_r*Math.random());return r>>>0}QR.exports=v_r});var V1=s((tve,vF)=>{"use strict";var oe=w(),rt=P(),KR=M(),F1=O(),f_r=_(),c_r=Vr(),rF=re(),l_r=cr().isPrimitive,eF=ee().isPrimitive,sF=di(),uF=xt(),qr=pr(),p_r=_1(),G1=eR(),bi=Ke(),g_r=B(),br=y(),tF=R1(),sr=624,M1=397,iF=uF>>>0,m_r=19650218>>>0,B1=2147483648>>>0,k1=2147483647>>>0,d_r=1812433253>>>0,h_r=1664525>>>0,q_r=1566083941>>>0,y_r=2636928640>>>0,b_r=4022730752>>>0,w_r=2567483615>>>0,j1=[0>>>0,w_r>>>0],oF=1/(sF+1),E_r=67108864>>>0,N_r=2147483648>>>0,C1=1>>>0,A_r=sF*oF,v0=1,f0=3,et=2,tt=sr+3,yr=sr+5,Fn=sr+6;function nF(r,e){var t;return e?t="option":t="argument",r.length<Fn+1?new RangeError(br("invalid %s. `state` array has insufficient length.",t)):r[0]!==v0?new RangeError(br("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,v0,r[0])):r[1]!==f0?new RangeError(br("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,f0,r[1])):r[et]!==sr?new RangeError(br("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,sr,r[et])):r[tt]!==1?new RangeError(br("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[tt])):r[yr]!==r.length-Fn?new RangeError(br("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Fn,r[yr])):null}function aF(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=G1(t,d_r)+i>>>0;return r}function O_r(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=p_r(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=G1(n,h_r)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=G1(n,q_r)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=N_r,r}function S_r(r){var e,t,i,n;for(n=sr-M1,t=0;t<n;t++)e=r[t]&B1|r[t+1]&k1,r[t]=r[t+M1]^e>>>1^j1[e&C1];for(i=sr-1;t<i;t++)e=r[t]&B1|r[t+1]&k1,r[t]=r[t-n]^e>>>1^j1[e&C1];return e=r[i]&B1|r[0]&k1,r[i]=r[M1-1]^e>>>1^j1[e&C1],r}function T_r(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!f_r(r))throw new TypeError(br("invalid argument. Options argument must be an object. Value: `%s`.",r));if(F1(r,"copy")&&(i.copy=r.copy,!l_r(r.copy)))throw new TypeError(br("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(F1(r,"state")){if(t=r.state,i.state=!0,!rF(t))throw new TypeError(br("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=nF(t,!0),u)throw u;i.copy===!1?e=t:(e=new qr(t.length),bi(t.length,t,1,e,1)),t=new qr(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,sr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,t[yr])}if(n===void 0)if(F1(r,"seed"))if(n=r.seed,i.seed=!0,eF(n)){if(n>iF)throw new RangeError(br("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(c_r(n)===!1||n.length<1)throw new TypeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!eF(n))throw new TypeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>iF)throw new RangeError(br("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new qr(Fn+a),e[0]=v0,e[1]=f0,e[et]=sr,e[tt]=1,e[tt+1]=sr,e[yr]=a,bi.ndarray(a,n,1,0,e,1,yr+1),t=new qr(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,sr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,a),t=aF(t,sr,m_r),t=O_r(t,sr,n,a)}else n=tF()>>>0}else n=tF()>>>0;return t===void 0&&(e=new qr(Fn+1),e[0]=v0,e[1]=f0,e[et]=sr,e[tt]=1,e[tt+1]=sr,e[yr]=1,e[yr+1]=n,t=new qr(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,sr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,1),t=aF(t,sr,n)),oe(h,"NAME","mt19937"),rt(h,"seed",o),rt(h,"seedLength",f),KR(h,"state",l,p),rt(h,"stateLength",v),rt(h,"byteLength",c),oe(h,"toJSON",m),oe(h,"MIN",0),oe(h,"MAX",uF),oe(h,"normalized",d),oe(d,"NAME",h.NAME),rt(d,"seed",o),rt(d,"seedLength",f),KR(d,"state",l,p),rt(d,"stateLength",v),rt(d,"byteLength",c),oe(d,"toJSON",m),oe(d,"MIN",0),oe(d,"MAX",A_r),h;function o(){var g=e[yr];return bi(g,n,1,new qr(g),1)}function f(){return e[yr]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return bi(g,e,1,new qr(g),1)}function p(g){var q;if(!rF(g))throw new TypeError(br("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(q=nF(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?bi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new qr(g.length)),bi(g.length,g,1,e,1)),t=new qr(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,sr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,e[yr])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=g_r(e),g.params=[],g}function h(){var g,q;return q=e[tt+1],q>=sr&&(t=S_r(t),q=0),g=t[q],e[tt+1]=q+1,g^=g>>>11,g^=g<<7&y_r,g^=g<<15&b_r,g^=g>>>18,g>>>0}function d(){var g=h()>>>5,q=h()>>>6;return(g*E_r+q)*oF}}vF.exports=T_r});var cF=s((ive,fF)=>{"use strict";var I_r=V1(),__r=R1(),L_r=I_r({seed:__r()});fF.exports=L_r});var X=s((nve,pF)=>{"use strict";var P_r=w(),lF=cF(),R_r=V1();P_r(lF,"factory",R_r);pF.exports=lF});var hF=s((ave,dF)=>{"use strict";var gF=j().isPrimitive,U1=y(),mF=or();function F_r(r,e){return!gF(r)||mF(r)?new TypeError(U1("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!gF(e)||mF(e)?new TypeError(U1("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(U1("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}dF.exports=F_r});var yF=s((sve,qF)=>{"use strict";var M_r=W(),B_r=Gt(),k_r=Ja();function j_r(r,e,t){return e+M_r(B_r(k_r*r()),2)*(t-e)}qF.exports=j_r});var H1=s((uve,TF)=>{"use strict";var ve=w(),c0=P(),bF=M(),wF=_(),EF=L(),NF=O(),AF=T(),C_r=C(),l0=X().factory,OF=E(),G_r=B(),p0=y(),V_r=hF(),SF=yF();function U_r(){var r,e,t,i,n,a;if(arguments.length===0)e=l0();else if(arguments.length===1){if(r=arguments[0],!wF(r))throw new TypeError(p0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(NF(r,"prng")){if(!EF(r.prng))throw new TypeError(p0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=l0(r)}else{if(n=arguments[0],a=arguments[1],i=V_r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!wF(r))throw new TypeError(p0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(NF(r,"prng")){if(!EF(r.prng))throw new TypeError(p0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=l0(r)}else e=l0()}return n===void 0?t=h:t=m,ve(t,"NAME","arcsine"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),bF(t,"state",AF(null),C_r),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",AF(null)),ve(t,"PRNG",e)):(c0(t,"seed",u),c0(t,"seedLength",o),bF(t,"state",c,l),c0(t,"stateLength",f),c0(t,"byteLength",v),ve(t,"toJSON",p),ve(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=G_r(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return SF(e,n,a)}function h(d,g){return OF(d)||OF(g)||d>=g?NaN:SF(e,d,g)}}TF.exports=U_r});var _F=s((ove,IF)=>{"use strict";var H_r=H1(),W_r=H_r();IF.exports=W_r});var RF=s((vve,PF)=>{"use strict";var z_r=w(),LF=_F(),D_r=H1();z_r(LF,"factory",D_r);PF.exports=LF});var W1=s((fve,CF)=>{"use strict";var fe=w(),g0=P(),FF=M(),MF=_(),X_r=nn().isPrimitive,BF=L(),kF=O(),jF=T(),x_r=C(),m0=X().factory,J_r=E(),Y_r=B(),d0=y();function Z_r(){var r,e,t,i;if(arguments.length===0)e=m0();else if(arguments.length===1&&MF(arguments[0]))if(r=arguments[0],kF(r,"prng")){if(!BF(r.prng))throw new TypeError(d0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=m0(r);else{if(i=arguments[0],!X_r(i))throw new TypeError(d0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!MF(r))throw new TypeError(d0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(kF(r,"prng")){if(!BF(r.prng))throw new TypeError(d0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=m0(r)}else e=m0()}return i===void 0?t=p:t=l,fe(t,"NAME","bernoulli"),r&&r.prng?(fe(t,"seed",null),fe(t,"seedLength",null),FF(t,"state",jF(null),x_r),fe(t,"stateLength",null),fe(t,"byteLength",null),fe(t,"toJSON",jF(null)),fe(t,"PRNG",e)):(g0(t,"seed",n),g0(t,"seedLength",a),FF(t,"state",f,v),g0(t,"stateLength",u),g0(t,"byteLength",o),fe(t,"toJSON",c),fe(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Y_r(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return J_r(m)||m<0||m>1?NaN:e()<=m?1:0}}CF.exports=Z_r});var VF=s((cve,GF)=>{"use strict";var $_r=W1(),Q_r=$_r();GF.exports=Q_r});var WF=s((lve,HF)=>{"use strict";var K_r=w(),UF=VF(),rLr=W1();K_r(UF,"factory",rLr);HF.exports=UF});var xF=s((pve,XF)=>{"use strict";var eLr=V(),zF=nr(),tLr=R(),DF=.00991256303526217;function iLr(r,e){var t,i,n;for(i=zF(-.5*e*e),t=[],t.push(DF/i),t.push(e),n=2;n<r;n++)t[n]=eLr(-2*tLr(DF/t[n-1]+i)),i=zF(-.5*t[n]*t[n]);return t.push(0),t}XF.exports=iLr});var YF=s((gve,JF)=>{"use strict";function nLr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}JF.exports=nLr});var QF=s((mve,$F)=>{"use strict";var ZF=R();function aLr(r,e,t){var i,n;do i=ZF(r())/e,n=ZF(r());while(-2*n<i*i);return t?i-e:e-i}$F.exports=aLr});var tM=s((dve,eM)=>{"use strict";var sLr=x(),KF=nr(),uLr=xF(),oLr=YF(),vLr=QF(),fLr=128,rM=3.442619855899,Ut=uLr(fLr,rM),cLr=oLr(Ut),lLr=127;function pLr(r,e){return t;function t(){for(var i,n,a,u,o,f,v;;){if(o=2*r()-1,f=e()&lLr,sLr(o)<cLr[f])return o*Ut[f];if(f===0)return vLr(r,rM,o<0);if(u=o*Ut[f],a=u*u,v=f+1,i=KF(-.5*(Ut[f]*Ut[f]-a)),n=KF(-.5*(Ut[v]*Ut[v]-a)),n+r()*(i-n)<1)return u}}}eM.exports=pLr});var D1=s((hve,aM)=>{"use strict";var it=w(),h0=P(),iM=M(),gLr=L(),mLr=_(),dLr=cr().isPrimitive,q0=O(),hLr=re(),z1=X().factory,nM=T(),qLr=C(),yLr=J(),bLr=xt(),wLr=B(),Mn=y(),ELr=tM();function NLr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!mLr(r))throw new TypeError(Mn("invalid argument. Must provide an object. Value: `%s`.",r));if(q0(r,"copy")&&(n.copy=r.copy,!dLr(r.copy)))throw new TypeError(Mn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(q0(r,"prng")){if(!gLr(r.prng))throw new TypeError(Mn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(q0(r,"state")){if(n.state=r.state,!hLr(r.state))throw new TypeError(Mn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(q0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Mn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=z1(n),e=t.normalized):(t=z1({seed:yLr(1+bLr*e()),copy:n.copy}),n.seed=null):(t=z1(n),e=t.normalized),i=ELr(e,t),it(i,"NAME","improved-ziggurat"),n.seed===null?(it(i,"seed",null),it(i,"seedLength",null)):(h0(i,"seed",a),h0(i,"seedLength",u)),r&&r.prng?(iM(i,"state",nM(null),qLr),it(i,"stateLength",null),it(i,"byteLength",null),it(i,"toJSON",nM(null))):(iM(i,"state",v,c),h0(i,"stateLength",o),h0(i,"byteLength",f),it(i,"toJSON",l)),it(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=wLr(t.state),p.params=[],p}}aM.exports=NLr});var uM=s((qve,sM)=>{"use strict";var ALr=D1(),OLr=ALr();sM.exports=OLr});var nt=s((yve,vM)=>{"use strict";var SLr=w(),oM=uM(),TLr=D1();SLr(oM,"factory",TLr);vM.exports=oM});var cM=s((bve,fM)=>{"use strict";var ILr=L(),_Lr=ILr(Object.assign);fM.exports=_Lr});var pM=s((wve,lM)=>{"use strict";var LLr=Object.assign;lM.exports=LLr});var mM=s((Eve,gM)=>{"use strict";var PLr=typeof Object.getOwnPropertySymbols<"u";gM.exports=PLr});var qM=s((Nve,hM)=>{"use strict";var dM=ui(),RLr=dM.getOwnPropertySymbols;function FLr(r){return RLr(dM(r))}hM.exports=FLr});var bM=s((Ave,yM)=>{"use strict";function MLr(){return[]}yM.exports=MLr});var EM=s((Ove,wM)=>{"use strict";var BLr=mM(),kLr=qM(),jLr=bM(),X1;BLr?X1=kLr:X1=jLr;wM.exports=X1});var AM=s((Sve,NM)=>{"use strict";var CLr=un(),GLr=EM(),VLr=sn();function ULr(r){var e,t,i;for(e=CLr(r),t=GLr(r),i=0;i<t.length;i++)VLr(r,t[i])&&e.push(t[i]);return e}NM.exports=ULr});var SM=s((Tve,OM)=>{"use strict";var HLr=AM();OM.exports=HLr});var _M=s((Ive,IM)=>{"use strict";var WLr=SM(),TM=ui(),zLr=y();function DLr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(zLr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=TM(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=WLr(TM(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}IM.exports=DLr});var Bn=s((_ve,LM)=>{"use strict";var XLr=cM(),xLr=pM(),JLr=_M(),x1;XLr?x1=xLr:x1=JLr;LM.exports=x1});var MM=s((Lve,FM)=>{"use strict";var PM=D().isPrimitive,RM=y();function YLr(r,e){return PM(r)?PM(e)?null:new TypeError(RM("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(RM("invalid argument. First argument must be a positive number. Value: `%s`.",r))}FM.exports=YLr});var GM=s((Pve,CM)=>{"use strict";var BM=R(),kM=V(),ZLr=W(),jM=1/3;function $Lr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(t<1?(f=t+1-jM,o=1/kM(9*f),c=ZLr(r(),1/t)):(f=t-jM,o=1/kM(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,u=.5*n+f*(1-p+BM(p)),l=r(),(l<a||BM(l)<u)&&(i=!1)}return f*p*c}CM.exports=$Lr});var HM=s((Rve,UM)=>{"use strict";var J1=W(),VM=R();function QLr(r,e,t){var i,n,a,u,o,f,v,c;for(a=t-1,o=J1(a+a,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=J1(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*J1(n/(8*t-8),2),f<c&&(c=a*VM(4*v*(1-v)),c+=u*u/2,c>=VM(f)&&(i=!1))));return v}UM.exports=QLr});var zM=s((Fve,WM)=>{"use strict";var KLr=W(),y0=R();function rPr(r,e,t,i){var n,a,u,o,f,v,c,l,p,m,h;for(o=t-1,f=i-1,v=o+f,c=v*y0(v),u=o/v,n=.5/KLr(v,.5),a=!0;a===!0;)l=e(),m=u+l*n,m>=0&&m<=1&&(p=r(),h=o*y0(m/o),h+=f*y0((1-m)/f),h+=c+.5*l*l,h>=y0(p)&&(a=!1));return m}WM.exports=rPr});var xM=s((Mve,XM)=>{"use strict";var Y1=nr(),DM=W(),Z1=R();function ePr(r,e,t){for(var i,n,a,u,o,f,v;;)if(u=r(),o=r(),f=DM(u,1/e),v=DM(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=Z1(u)/e,n=Z1(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),Y1(i-Z1(Y1(i)+Y1(n))))}XM.exports=ePr});var ZM=s((Bve,YM)=>{"use strict";var JM=GM(),tPr=HM(),iPr=zM(),nPr=xM();function aPr(r,e,t,i){var n,a;return t===i&&t>1.5?tPr(r,e,t):t>1&&i>1?iPr(r,e,t,i):t<1&&i<1?nPr(r,t,i):(n=JM(r,e,t),a=JM(r,e,i),n/(n+a))}YM.exports=aPr});var r3=s((kve,sB)=>{"use strict";var ce=w(),b0=P(),$M=M(),QM=_(),KM=cr().isPrimitive,rB=L(),wi=O(),eB=T(),sPr=C(),tB=nt().factory,w0=X().factory,iB=E(),$1=Ke(),Q1=pr(),K1=re(),nB=Bn(),uPr=B(),le=y(),oPr=MM(),aB=ZM();function vPr(){var r,e,t,i,n,a,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=w0(n);else if(arguments.length===1){if(n=arguments[0],!QM(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(wi(n,"copy")&&!KM(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(wi(n,"prng")){if(!rB(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(wi(n,"state")&&!K1(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=nB({},n),n.copy===!1?o=!1:n.state&&(n.state=$1(n.state.length,n.state,1,new Q1(n.state.length),1)),n.copy=!1,a=w0(n)}}else{if(t=arguments[0],i=arguments[1],f=oPr(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!QM(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(wi(n,"copy")&&!KM(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(wi(n,"prng")){if(!rB(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(wi(n,"state")&&!K1(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=nB({},n),n.copy===!1?o=!1:n.state&&(n.state=$1(n.state.length,n.state,1,new Q1(n.state.length),1)),n.copy=!1,a=w0(n)}}else n={copy:!1},a=w0(n)}return n&&n.prng?e=tB({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=tB({state:r,copy:!1})),t===void 0?u=q:u=g,ce(u,"NAME","beta"),n&&n.prng?(ce(u,"seed",null),ce(u,"seedLength",null),$M(u,"state",eB(null),sPr),ce(u,"stateLength",null),ce(u,"byteLength",null),ce(u,"toJSON",eB(null)),ce(u,"PRNG",a)):(b0(u,"seed",v),b0(u,"seedLength",c),$M(u,"state",m,h),b0(u,"stateLength",l),b0(u,"byteLength",p),ce(u,"toJSON",d),ce(u,"PRNG",a),a=a.normalized),u;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function h(N){if(!K1(N))throw new TypeError(le("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=$1(N.length,N,1,new Q1(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=uPr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return aB(a,e,t,i)}function q(N,A){return iB(N)||iB(A)||N<=0||A<=0?NaN:aB(a,e,N,A)}}sB.exports=vPr});var oB=s((jve,uB)=>{"use strict";var fPr=r3(),cPr=fPr();uB.exports=cPr});var cB=s((Cve,fB)=>{"use strict";var lPr=w(),vB=oB(),pPr=r3();lPr(vB,"factory",pPr);fB.exports=vB});var mB=s((Gve,gB)=>{"use strict";var lB=D().isPrimitive,pB=y();function gPr(r,e){return lB(r)?lB(e)?null:new TypeError(pB("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(pB("invalid argument. First argument must be a positive number. Value: `%s`.",r))}gB.exports=gPr});var qB=s((Vve,hB)=>{"use strict";var dB=R();function mPr(r,e,t,i,n){var a,u,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+dB(l)),c=r(),(c<o||dB(c)<f)&&(a=!1)}return 1/t*i*l}hB.exports=mPr});var a3=s((Uve,IB)=>{"use strict";var pe=w(),E0=P(),yB=M(),bB=_(),e3=re(),wB=cr().isPrimitive,EB=L(),Ei=O(),NB=T(),dPr=C(),AB=nt().factory,N0=X().factory,OB=E(),t3=V(),SB=W(),i3=Ke(),n3=pr(),hPr=B(),TB=Bn(),ge=y(),qPr=mB(),A0=qB(),O0=1/3;function yPr(){var r,e,t,i,n,a,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=N0(n);else if(arguments.length===1){if(n=arguments[0],!bB(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ei(n,"copy")&&!wB(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ei(n,"prng")){if(!EB(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ei(n,"state")&&!e3(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=TB({},n),n.copy===!1?o=!1:n.state&&(n.state=i3(n.state.length,n.state,1,new n3(n.state.length),1)),n.copy=!1,a=N0(n)}}else{if(e=arguments[0],i=arguments[1],f=qPr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!bB(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ei(n,"copy")&&!wB(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ei(n,"prng")){if(!EB(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ei(n,"state")&&!e3(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=TB({},n),n.copy===!1?o=!1:n.state&&(n.state=i3(n.state.length,n.state,1,new n3(n.state.length),1)),n.copy=!1,a=N0(n)}}else n={copy:!1},a=N0(n)}return n&&n.prng?t=AB({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=AB({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-O0):(u=A,c=e+1-O0),v=1/t3(9*c)),pe(u,"NAME","gamma"),n&&n.prng?(pe(u,"seed",null),pe(u,"seedLength",null),yB(u,"state",NB(null),dPr),pe(u,"stateLength",null),pe(u,"byteLength",null),pe(u,"toJSON",NB(null)),pe(u,"PRNG",a)):(E0(u,"seed",l),E0(u,"seedLength",p),yB(u,"state",d,g),E0(u,"stateLength",m),E0(u,"byteLength",h),pe(u,"toJSON",q),pe(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function g(S){if(!e3(S))throw new TypeError(ge("invalid argument. Must provide a Uint32Array. Value: `%s`.",S));o&&(S=i3(S.length,S,1,new n3(S.length),1)),a.state=S}function q(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=hPr(a.state),e===void 0?S.params=[]:S.params=[e,i],S}function N(){return A0(a,t,i,c,v)}function A(){return A0(a,t,i,c,v)*SB(a(),1/e)}function F(S,z){var Q,U;return OB(S)||OB(z)||S<=0||z<=0?NaN:S<1?(U=S+1-O0,Q=1/t3(9*U),A0(a,t,z,U,Q)*SB(a(),1/S)):(U=S-O0,Q=1/t3(9*U),A0(a,t,z,U,Q))}}IB.exports=yPr});var LB=s((Hve,_B)=>{"use strict";var bPr=a3(),wPr=bPr();_B.exports=wPr});var Ni=s((Wve,RB)=>{"use strict";var EPr=w(),PB=LB(),NPr=a3();EPr(PB,"factory",NPr);RB.exports=PB});var kB=s((zve,BB)=>{"use strict";var FB=D().isPrimitive,MB=y();function APr(r,e){return FB(r)?FB(e)?null:new TypeError(MB("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(MB("invalid argument. First argument must be a positive number. Value: `%s`.",r))}BB.exports=APr});var CB=s((Dve,jB)=>{"use strict";function OPr(r,e,t){return r(e,1)/r(t,1)}jB.exports=OPr});var s3=s((Xve,DB)=>{"use strict";var at=w(),S0=P(),GB=M(),VB=_(),UB=T(),SPr=C(),T0=Ni().factory,HB=E(),TPr=B(),WB=y(),IPr=kB(),zB=CB();function _Pr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=T0();else if(arguments.length===1){if(i=arguments[0],!VB(i))throw new TypeError(WB("invalid argument. Options argument must be an object. Value: `%s`.",i));r=T0(i)}else{if(e=arguments[0],t=arguments[1],u=IPr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!VB(i))throw new TypeError(WB("invalid argument. Options argument must be an object. Value: `%s`.",i));r=T0(i)}else r=T0()}return e===void 0?a=d:a=h,n=r.PRNG,at(a,"NAME","betaprime"),i&&i.prng?(at(a,"seed",null),at(a,"seedLength",null),GB(a,"state",UB(null),SPr),at(a,"stateLength",null),at(a,"byteLength",null),at(a,"toJSON",UB(null))):(S0(a,"seed",o),S0(a,"seedLength",f),GB(a,"state",l,p),S0(a,"stateLength",v),S0(a,"byteLength",c),at(a,"toJSON",m)),at(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=TPr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return zB(r,e,t)}function d(g,q){return HB(g)||HB(q)||g<=0||q<=0?NaN:zB(r,g,q)}}DB.exports=_Pr});var xB=s((xve,XB)=>{"use strict";var LPr=s3(),PPr=LPr();XB.exports=PPr});var ZB=s((Jve,YB)=>{"use strict";var RPr=w(),JB=xB(),FPr=s3();RPr(JB,"factory",FPr);YB.exports=JB});var QB=s((Yve,$B)=>{"use strict";var MPr=J();function BPr(r){return MPr(r)===r&&r>0}$B.exports=BPr});var u3=s((Zve,KB)=>{"use strict";var kPr=QB();KB.exports=kPr});var ek=s(($ve,rk)=>{"use strict";function jPr(r){return r>=0&&r<=1}rk.exports=jPr});var ik=s((Qve,tk)=>{"use strict";var CPr=ek();tk.exports=CPr});var sk=s((Kve,ak)=>{"use strict";var GPr=ee().isPrimitive,VPr=nn().isPrimitive,nk=y();function UPr(r,e){return GPr(r)?VPr(e)?null:new TypeError(nk("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(nk("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}ak.exports=UPr});var ok=s((rfe,uk)=>{"use strict";function HPr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}uk.exports=HPr});var fk=s((efe,vk)=>{"use strict";var WPr=E();function zPr(r){return r===0||WPr(r)?r:r<0?-1:1}vk.exports=zPr});var I0=s((tfe,ck)=>{"use strict";var DPr=fk();ck.exports=DPr});var pk=s((ife,lk)=>{"use strict";var XPr=W(),xPr=1/12,JPr=1/360,YPr=1/1260;function ZPr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=XPr(r,2),(xPr-(JPr-YPr/e)/e)/r}}lk.exports=ZPr});var mk=s((nfe,gk)=>{"use strict";var o3=J(),$Pr=I0(),QPr=V(),v3=x(),_0=R(),L0=pk(),KPr=1/6;function rRr(r,e,t){var i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A,F,S,z,Q,U,Tr,Ir,ur,Et;for(z=o3((e+1)*t),v=e-z+1,Q=1-t,U=t/Q,c=(e+1)*U,u=e*t*Q,a=QPr(u),g=1.15+2.53*a,d=-.0873+.0248*g+.01*t,q=e*t+.5,i=(2.83+5.1/g)*a,h=.92-4.2/g,n=.86*h,A=(z+.5)*_0((z+1)/(U*v)),A+=L0(z)+L0(e-z);;){if(ur=r(),ur<=n)return Ir=ur/h-.43,U=Ir*(2*d/(.5-v3(Ir))+g)+q,o3(U);if(ur>=h?Ir=r()-.5:(Ir=ur/h-.93,Ir=$Pr(Ir)*.5-Ir,ur=h*r()),l=.5-v3(Ir),S=o3(Ir*(2*d/l+g)+q),!(S<0||S>e))if(ur=ur*i/(d/(l*l)+g),p=v3(S-z),p>15){if(ur=_0(ur),o=p/u,f=(p/3+.625)*p,f+=KPr,f/=u,o*=f+.5,Tr=-(p*p)/(2*u),ur<Tr-o||ur<=Tr+o&&(m=e-S+1,Et=A+(e+1)*_0(v/m),Et+=(S+.5)*_0(m*U/(S+1)),Et+=-(L0(S)+L0(e-S)),ur<=Et))return S}else{if(N=1,z<S)for(F=z;F<=S;F++)N*=c/F-U;else if(z>S)for(F=S;F<=z;F++)ur*=c/F-U;if(ur<=N)return S}}}gk.exports=rRr});var qk=s((afe,hk)=>{"use strict";var eRr=ok(),tRr=mk();function dk(r,e,t){return t>.5?e-dk(r,e,1-t):e*t<10?eRr(r,e,t):tRr(r,e,t)}hk.exports=dk});var f3=s((sfe,Sk)=>{"use strict";var me=w(),P0=P(),yk=M(),bk=_(),wk=L(),Ek=O(),Nk=T(),iRr=C(),Ak=E(),nRr=u3(),aRr=ik(),R0=X().factory,sRr=B(),F0=y(),uRr=sk(),Ok=qk();function oRr(){var r,e,t,i,n,a;if(arguments.length===0)e=R0();else if(arguments.length===1){if(r=arguments[0],!bk(r))throw new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ek(r,"prng")){if(!wk(r.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=R0(r)}else{if(n=arguments[0],a=arguments[1],i=uRr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!bk(r))throw new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ek(r,"prng")){if(!wk(r.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=R0(r)}else e=R0()}return n===void 0?t=h:t=m,me(t,"NAME","binomial"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),yk(t,"state",Nk(null),iRr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",Nk(null)),me(t,"PRNG",e)):(P0(t,"seed",u),P0(t,"seedLength",o),yk(t,"state",c,l),P0(t,"stateLength",f),P0(t,"byteLength",v),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=sRr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return Ok(e,n,a)}function h(d,g){return Ak(d)||Ak(g)||!nRr(d)||!aRr(g)?NaN:Ok(e,d,g)}}Sk.exports=oRr});var Ik=s((ufe,Tk)=>{"use strict";var vRr=f3(),fRr=vRr();Tk.exports=fRr});var Pk=s((ofe,Lk)=>{"use strict";var cRr=w(),_k=Ik(),lRr=f3();cRr(_k,"factory",lRr);Lk.exports=_k});var Fk=s((vfe,Rk)=>{"use strict";var pRr=V(),gRr=R(),mRr=Gt(),dRr=Ct(),hRr=$e();function qRr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=pRr(-2*gRr(n)),o=hRr*a,t=u*dRr(o),e=!1,u*mRr(o)}return e=!0,t}}Rk.exports=qRr});var Bk=s((ffe,Mk)=>{"use strict";var yRr=V(),bRr=R(),wRr=Ct(),ERr=Fr(),NRr=wRr(ERr);function ARr(r){var e=yRr(-2*bRr(r));return e*NRr}Mk.exports=ARr});var jk=s((cfe,kk)=>{"use strict";var ORr=V(),SRr=R(),TRr=Ct(),IRr=$e();function _Rr(r){var e=ORr(-2*SRr(r)),t=IRr*r;return e*TRr(t)}kk.exports=_Rr});var c3=s((lfe,Uk)=>{"use strict";var Cr=w(),M0=P(),Ck=M(),LRr=_(),PRr=L(),RRr=cr().isPrimitive,kn=O(),FRr=re(),Gk=X().factory,Vk=T(),MRr=C(),BRr=B(),jn=y(),kRr=Fk(),jRr=Bk(),CRr=jk();function GRr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!LRr(r))throw new TypeError(jn("invalid argument. Must provide an object. Value: `%s`.",r));if(kn(r,"copy")&&(n.copy=r.copy,!RRr(r.copy)))throw new TypeError(jn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(kn(r,"prng")){if(!PRr(r.prng))throw new TypeError(jn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(kn(r,"state")){if(n.state=r.state,!FRr(r.state))throw new TypeError(jn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(kn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(jn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=Gk(n),e=i.normalized):n.seed=null:(i=Gk(n),e=i.normalized),t=kRr(e),Cr(t,"NAME","box-muller"),n.seed===null?(Cr(t,"seed",null),Cr(t,"seedLength",null)):(M0(t,"seed",a),M0(t,"seedLength",u)),r&&r.prng?(Ck(t,"state",Vk(null),MRr),Cr(t,"stateLength",null),Cr(t,"byteLength",null),Cr(t,"toJSON",Vk(null))):(Ck(t,"state",v,c),M0(t,"stateLength",o),M0(t,"byteLength",f),Cr(t,"toJSON",l)),Cr(t,"PRNG",e),kn(e,"MIN")?(Cr(t,"MIN",jRr(e.MIN)),Cr(t,"MAX",CRr(e.MIN))):(Cr(t,"MIN",null),Cr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=BRr(i.state),p.params=[],p}}Uk.exports=GRr});var Wk=s((pfe,Hk)=>{"use strict";var VRr=c3(),URr=VRr();Hk.exports=URr});var Xk=s((gfe,Dk)=>{"use strict";var HRr=w(),zk=Wk(),WRr=c3();HRr(zk,"factory",WRr);Dk.exports=zk});var Yk=s((mfe,Jk)=>{"use strict";var zRr=j().isPrimitive,DRr=D().isPrimitive,xk=y(),XRr=or();function xRr(r,e){return!zRr(r)||XRr(r)?new TypeError(xk("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):DRr(e)?null:new TypeError(xk("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Jk.exports=xRr});var $k=s((dfe,Zk)=>{"use strict";function JRr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}Zk.exports=JRr});var Kk=s((hfe,Qk)=>{"use strict";function YRr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}Qk.exports=YRr});var tj=s((qfe,ej)=>{"use strict";var ZRr=tr(),rj=ie(),$Rr=$k(),QRr=Kk(),KRr=.7853981633974483,rFr=3061616997868383e-32,eFr=.3333333333333341,tFr=2147483647;function iFr(r,e,t){var i,n,a,u,o,f,v,c,l;return i=ZRr(r),n=i&tFr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=KRr-r,c=rFr-e,r=l+c,e=0),l=r*r,c=l*l,u=$Rr(c),v=l*QRr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=eFr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=rj(c,0),v=u-(l-r),a=-1/c,f=rj(a,0),o=1+f*l,f+a*(o+f*v))}ej.exports=iFr});var nj=s((yfe,ij)=>{"use strict";var nFr=tj();ij.exports=nFr});var uj=s((bfe,sj)=>{"use strict";var aFr=tr(),aj=nj(),sFr=wn(),l3=[0,0],uFr=2147483647,oFr=1072243195,vFr=2146435072,fFr=1044381696;function cFr(r){var e,t;return e=aFr(r),e&=uFr,e<=oFr?e<fFr?r:aj(r,0,1):e>=vFr?NaN:(t=sFr(r,l3),aj(l3[0],l3[1],1-((t&1)<<1)))}sj.exports=cFr});var p3=s((wfe,oj)=>{"use strict";var lFr=uj();oj.exports=lFr});var fj=s((Efe,vj)=>{"use strict";var pFr=p3(),gFr=Fr();function mFr(r,e,t){return e+t*pFr(gFr*(r()-.5))}vj.exports=mFr});var g3=s((Nfe,qj)=>{"use strict";var st=w(),B0=P(),cj=M(),lj=_(),pj=L(),gj=O(),mj=T(),dFr=C(),dj=E(),Ai=nt().factory,hFr=B(),k0=y(),qFr=Yk(),hj=fj();function yFr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ai();else if(arguments.length===1){if(t=arguments[0],!lj(t))throw new TypeError(k0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(gj(t,"prng")){if(!pj(t.prng))throw new TypeError(k0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ai({prng:t.prng})}else e=Ai(t)}else{if(u=arguments[0],r=arguments[1],a=qFr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!lj(t))throw new TypeError(k0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(gj(t,"prng")){if(!pj(t.prng))throw new TypeError(k0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ai({prng:t.prng})}else e=Ai(t)}else e=Ai()}return u===void 0?n=d:n=h,i=e.PRNG,st(n,"NAME","cauchy"),t&&t.prng?(st(n,"seed",null),st(n,"seedLength",null),cj(n,"state",mj(null),dFr),st(n,"stateLength",null),st(n,"byteLength",null),st(n,"toJSON",mj(null))):(B0(n,"seed",o),B0(n,"seedLength",f),cj(n,"state",l,p),B0(n,"stateLength",v),B0(n,"byteLength",c),st(n,"toJSON",m)),st(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=hFr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return hj(e,u,r)}function d(g,q){return dj(g)||dj(q)||q<=0?NaN:hj(e,g,q)}}qj.exports=yFr});var bj=s((Afe,yj)=>{"use strict";var bFr=g3(),wFr=bFr();yj.exports=wFr});var Nj=s((Ofe,Ej)=>{"use strict";var EFr=w(),wj=bj(),NFr=g3();EFr(wj,"factory",NFr);Ej.exports=wj});var m3=s((Sfe,_j)=>{"use strict";var ut=w(),j0=P(),Aj=M(),AFr=D().isPrimitive,Oj=_(),Sj=L(),Tj=O(),Ij=T(),OFr=C(),SFr=E(),Oi=Ni().factory,TFr=B(),C0=y();function IFr(){var r,e,t,i,n;if(arguments.length===0)r=Oi();else if(arguments.length===1&&Oj(arguments[0]))if(t=arguments[0],Tj(t,"prng")){if(!Sj(t.prng))throw new TypeError(C0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Oi({prng:t.prng})}else r=Oi(t);else{if(n=arguments[0],!AFr(n))throw new TypeError(C0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!Oj(t))throw new TypeError(C0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Tj(t,"prng")){if(!Sj(t.prng))throw new TypeError(C0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Oi(n/2,.5,{prng:t.prng})}else r=Oi(n/2,.5,t)}else r=Oi(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,ut(i,"NAME","chisquare"),t&&t.prng?(ut(i,"seed",null),ut(i,"seedLength",null),Aj(i,"state",Ij(null),OFr),ut(i,"stateLength",null),ut(i,"byteLength",null),ut(i,"toJSON",Ij(null))):(j0(i,"seed",a),j0(i,"seedLength",u),Aj(i,"state",v,c),j0(i,"stateLength",o),j0(i,"byteLength",f),ut(i,"toJSON",l)),ut(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=TFr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function m(h){return SFr(h)||h<=0?NaN:r(h/2,.5)}}_j.exports=IFr});var Pj=s((Tfe,Lj)=>{"use strict";var _Fr=m3(),LFr=_Fr();Lj.exports=LFr});var Cn=s((Ife,Fj)=>{"use strict";var PFr=w(),Rj=Pj(),RFr=m3();PFr(Rj,"factory",RFr);Fj.exports=Rj});var d3=s((_fe,Vj)=>{"use strict";var ot=w(),G0=P(),Mj=M(),FFr=D().isPrimitive,Bj=_(),kj=L(),jj=O(),Cj=T(),MFr=C(),BFr=E(),Si=Cn().factory,kFr=B(),Gj=V(),V0=y();function jFr(){var r,e,t,i,n;if(arguments.length===0)r=Si();else if(arguments.length===1&&Bj(arguments[0]))if(t=arguments[0],jj(t,"prng")){if(!kj(t.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si({prng:t.prng})}else r=Si(t);else{if(n=arguments[0],!FFr(n))throw new TypeError(V0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!Bj(t))throw new TypeError(V0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(jj(t,"prng")){if(!kj(t.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si(n,{prng:t.prng})}else r=Si(n,t)}else r=Si(n)}return n===void 0?i=m:i=p,e=r.PRNG,ot(i,"NAME","chi"),t&&t.prng?(ot(i,"seed",null),ot(i,"seedLength",null),Mj(i,"state",Cj(null),MFr),ot(i,"stateLength",null),ot(i,"byteLength",null),ot(i,"toJSON",Cj(null))):(G0(i,"seed",a),G0(i,"seedLength",u),Mj(i,"state",v,c),G0(i,"stateLength",o),G0(i,"byteLength",f),ot(i,"toJSON",l)),ot(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=kFr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return Gj(r())}function m(h){return BFr(h)||h<=0?NaN:Gj(r(h))}}Vj.exports=jFr});var Hj=s((Lfe,Uj)=>{"use strict";var CFr=d3(),GFr=CFr();Uj.exports=GFr});var Dj=s((Pfe,zj)=>{"use strict";var VFr=w(),Wj=Hj(),UFr=d3();VFr(Wj,"factory",UFr);zj.exports=Wj});var Jj=s((Rfe,xj)=>{"use strict";var HFr=j().isPrimitive,WFr=D().isPrimitive,Xj=y(),zFr=or();function DFr(r,e){return!HFr(r)||zFr(r)?new TypeError(Xj("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):WFr(e)?null:new TypeError(Xj("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}xj.exports=DFr});var Zj=s((Ffe,Yj)=>{"use strict";var h3=E(),XFr=Ln(),xFr=Fr();function JFr(r,e,t){var i;return h3(r)||h3(e)||h3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+XFr(i)/xFr)/2)}Yj.exports=JFr});var Kj=s((Mfe,Qj)=>{"use strict";var $j=E();function YFr(r,e){return $j(r)||$j(e)?NaN:r<e?0:1}Qj.exports=YFr});var tC=s((Bfe,eC)=>{"use strict";var ZFr=T(),rC=E();function $Fr(r){if(rC(r))return ZFr(NaN);return e;function e(t){return rC(t)?NaN:t<r?0:1}}eC.exports=$Fr});var U0=s((kfe,nC)=>{"use strict";var QFr=w(),iC=Kj(),KFr=tC();QFr(iC,"factory",KFr);nC.exports=iC});var sC=s((jfe,aC)=>{"use strict";var rMr=T(),eMr=U0().factory,q3=E(),tMr=Ln(),iMr=Fr();function nMr(r,e){if(q3(r)||q3(e)||e<0)return rMr(NaN);if(e===0)return eMr(r);return t;function t(i){var n;return q3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+tMr(n)/iMr)/2)}}aC.exports=nMr});var vC=s((Cfe,oC)=>{"use strict";var aMr=w(),uC=Zj(),sMr=sC();aMr(uC,"factory",sMr);oC.exports=uC});var y3=s((Gfe,fC)=>{"use strict";var uMr=vC(),oMr=1e4,vMr=1e-12;function fMr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<oMr;){if(u=(i+n)/2,n-i<vMr)return u;a=uMr(u,e,t),r>a?i=u:n=u,o+=1}return u}fC.exports=fMr});var lC=s((Vfe,cC)=>{"use strict";var b3=E(),cMr=y3();function lMr(r,e,t){return b3(e)||b3(t)||b3(r)||t<0||r<0||r>1?NaN:t===0?e:cMr(r,e,t)}cC.exports=lMr});var gC=s((Ufe,pC)=>{"use strict";var pMr=E();function gMr(r,e){return pMr(r)||r<0||r>1?NaN:e}pC.exports=gMr});var hC=s((Hfe,dC)=>{"use strict";var mMr=T(),mC=E();function dMr(r){if(mC(r))return mMr(NaN);return e;function e(t){return mC(t)||t<0||t>1?NaN:r}}dC.exports=dMr});var w3=s((Wfe,yC)=>{"use strict";var hMr=w(),qC=gC(),qMr=hC();hMr(qC,"factory",qMr);yC.exports=qC});var wC=s((zfe,bC)=>{"use strict";var yMr=T(),bMr=w3().factory,E3=E(),wMr=y3();function EMr(r,e){if(E3(r)||E3(e)||e<0)return yMr(NaN);if(e===0)return bMr(r);return t;function t(i){return E3(i)||i<0||i>1?NaN:wMr(i,r,e)}}bC.exports=EMr});var AC=s((Dfe,NC)=>{"use strict";var NMr=w(),EC=lC(),AMr=wC();NMr(EC,"factory",AMr);NC.exports=EC});var SC=s((Xfe,OC)=>{"use strict";var OMr=AC();function SMr(r,e,t){return OMr(r(),e,t)}OC.exports=SMr});var N3=s((xfe,MC)=>{"use strict";var de=w(),H0=P(),TC=M(),IC=_(),_C=L(),LC=O(),PC=T(),TMr=C(),W0=X().factory,RC=E(),IMr=B(),z0=y(),_Mr=Jj(),FC=SC();function LMr(){var r,e,t,i,n,a;if(arguments.length===0)e=W0();else if(arguments.length===1){if(r=arguments[0],!IC(r))throw new TypeError(z0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LC(r,"prng")){if(!_C(r.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=W0(r)}else{if(n=arguments[0],a=arguments[1],i=_Mr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!IC(r))throw new TypeError(z0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LC(r,"prng")){if(!_C(r.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=W0(r)}else e=W0()}return n===void 0?t=h:t=m,de(t,"NAME","cosine"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),TC(t,"state",PC(null),TMr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",PC(null)),de(t,"PRNG",e)):(H0(t,"seed",u),H0(t,"seedLength",o),TC(t,"state",c,l),H0(t,"stateLength",f),H0(t,"byteLength",v),de(t,"toJSON",p),de(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=IMr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return FC(e,n,a)}function h(d,g){return RC(d)||RC(g)||g<=0?NaN:FC(e,d,g)}}MC.exports=LMr});var kC=s((Jfe,BC)=>{"use strict";var PMr=N3(),RMr=PMr();BC.exports=RMr});var GC=s((Yfe,CC)=>{"use strict";var FMr=w(),jC=kC(),MMr=N3();FMr(jC,"factory",MMr);CC.exports=jC});var WC=s((Zfe,HC)=>{"use strict";var VC=Ur().isPrimitive,A3=y(),UC=or();function BMr(r,e){return!VC(r)||UC(r)?new TypeError(A3("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!VC(e)||UC(e)?new TypeError(A3("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(A3("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}HC.exports=BMr});var XC=s(($fe,DC)=>{"use strict";var O3=di(),Ti=J();function zC(r,e,t){var i,n,a,u,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(u=0;;){for(a===O3?(u=Ti(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Ti((a+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=zC(r,0,Ti(a/f)),!(l>O3/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===O3?(o=Ti(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Ti((n+1)/(a+1));;)if(i=r()-v,i=Ti(i/o),i<=a)return i+e}DC.exports=zC});var S3=s((Qfe,rG)=>{"use strict";var he=w(),D0=P(),xC=M(),JC=_(),YC=L(),ZC=O(),$C=T(),kMr=C(),X0=X().factory,QC=E(),Ii=_r(),jMr=B(),vt=y(),CMr=WC(),KC=XC();function GMr(){var r,e,t,i,n,a;if(arguments.length===0)e=X0();else if(arguments.length===1){if(r=arguments[0],!JC(r))throw new TypeError(vt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ZC(r,"prng")){if(!YC(r.prng))throw new TypeError(vt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ii(e.MIN))throw new TypeError(vt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ii(e.MAX))throw new TypeError(vt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=X0(r)}else{if(n=arguments[0],a=arguments[1],i=CMr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!JC(r))throw new TypeError(vt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ZC(r,"prng")){if(!YC(r.prng))throw new TypeError(vt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ii(e.MIN))throw new TypeError(vt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ii(e.MAX))throw new TypeError(vt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=X0(r)}else e=X0()}return n===void 0?t=h:t=m,he(t,"NAME","discrete-uniform"),r&&r.prng?(he(t,"seed",null),he(t,"seedLength",null),xC(t,"state",$C(null),kMr),he(t,"stateLength",null),he(t,"byteLength",null),he(t,"toJSON",$C(null)),he(t,"PRNG",e)):(D0(t,"seed",u),D0(t,"seedLength",o),xC(t,"state",c,l),D0(t,"stateLength",f),D0(t,"byteLength",v),he(t,"toJSON",p),he(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=jMr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return KC(e,n,a)}function h(d,g){return QC(d)||QC(g)||!Ii(d)||!Ii(g)||d>g?NaN:KC(e,d,g)}}rG.exports=GMr});var tG=s((Kfe,eG)=>{"use strict";var VMr=S3(),UMr=VMr();eG.exports=UMr});var aG=s((rce,nG)=>{"use strict";var HMr=w(),iG=tG(),WMr=S3();HMr(iG,"factory",WMr);nG.exports=iG});var oG=s((ece,uG)=>{"use strict";var zMr=D().isPrimitive,DMr=ee().isPrimitive,sG=y();function XMr(r,e){return DMr(r)?zMr(e)?null:new TypeError(sG("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(sG("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}uG.exports=XMr});var fG=s((tce,vG)=>{"use strict";var xMr=R();function JMr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*xMr(i)}vG.exports=JMr});var T3=s((ice,qG)=>{"use strict";var qe=w(),x0=P(),cG=M(),lG=_(),pG=L(),gG=O(),mG=T(),YMr=C(),J0=X().factory,dG=E(),ZMr=u3(),$Mr=B(),Y0=y(),QMr=oG(),hG=fG();function KMr(){var r,e,t,i,n,a;if(arguments.length===0)e=J0();else if(arguments.length===1){if(t=arguments[0],!lG(t))throw new TypeError(Y0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(gG(t,"prng")){if(!pG(t.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=J0(t)}else{if(a=arguments[0],r=arguments[1],n=QMr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!lG(t))throw new TypeError(Y0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(gG(t,"prng")){if(!pG(t.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=J0(t)}else e=J0()}return a===void 0?i=h:i=m,qe(i,"NAME","erlang"),t&&t.prng?(qe(i,"seed",null),qe(i,"seedLength",null),cG(i,"state",mG(null),YMr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",mG(null)),qe(i,"PRNG",e)):(x0(i,"seed",u),x0(i,"seedLength",o),cG(i,"state",c,l),x0(i,"stateLength",f),x0(i,"byteLength",v),qe(i,"toJSON",p),qe(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=$Mr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return hG(e,a,r)}function h(d,g){return dG(d)||dG(g)||!ZMr(d)||g<=0?NaN:hG(e,d,g)}}qG.exports=KMr});var bG=s((nce,yG)=>{"use strict";var rBr=T3(),eBr=rBr();yG.exports=eBr});var NG=s((ace,EG)=>{"use strict";var tBr=w(),wG=bG(),iBr=T3();tBr(wG,"factory",iBr);EG.exports=wG});var OG=s((sce,AG)=>{"use strict";var nBr=R();function aBr(r,e){return-nBr(1-r())/e}AG.exports=aBr});var I3=s((uce,RG)=>{"use strict";var ye=w(),Z0=P(),SG=M(),sBr=D().isPrimitive,TG=_(),IG=L(),_G=O(),LG=T(),uBr=C(),$0=X().factory,oBr=E(),vBr=B(),Q0=y(),PG=OG();function fBr(){var r,e,t,i;if(arguments.length===0)t=$0();else if(arguments.length===1&&TG(arguments[0]))if(e=arguments[0],_G(e,"prng")){if(!IG(e.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=$0(e);else{if(r=arguments[0],!sBr(r))throw new TypeError(Q0("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!TG(e))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(_G(e,"prng")){if(!IG(e.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=$0(e)}else t=$0()}return r===void 0?i=p:i=l,ye(i,"NAME","exponential"),e&&e.prng?(ye(i,"seed",null),ye(i,"seedLength",null),SG(i,"state",LG(null),uBr),ye(i,"stateLength",null),ye(i,"byteLength",null),ye(i,"toJSON",LG(null)),ye(i,"PRNG",t)):(Z0(i,"seed",n),Z0(i,"seedLength",a),SG(i,"state",f,v),Z0(i,"stateLength",u),Z0(i,"byteLength",o),ye(i,"toJSON",c),ye(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=vBr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return PG(t,r)}function p(m){return oBr(m)||m<=0?NaN:PG(t,m)}}RG.exports=fBr});var MG=s((oce,FG)=>{"use strict";var cBr=I3(),lBr=cBr();FG.exports=lBr});var jG=s((vce,kG)=>{"use strict";var pBr=w(),BG=MG(),gBr=I3();pBr(BG,"factory",gBr);kG.exports=BG});var UG=s((fce,VG)=>{"use strict";var CG=D().isPrimitive,GG=y();function mBr(r,e){return CG(r)?CG(e)?null:new TypeError(GG("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(GG("invalid argument. First argument must be a positive number. Value: `%s`.",r))}VG.exports=mBr});var WG=s((cce,HG)=>{"use strict";function dBr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}HG.exports=dBr});var _3=s((lce,$G)=>{"use strict";var ft=w(),K0=P(),zG=M(),DG=_(),XG=L(),xG=O(),JG=T(),hBr=C(),_i=Cn().factory,YG=E(),qBr=B(),rs=y(),yBr=UG(),ZG=WG();function bBr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=_i();else if(arguments.length===1){if(e=arguments[0],!DG(e))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(xG(e,"prng")){if(!XG(e.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=_i({prng:e.prng})}else r=_i(e)}else{if(a=arguments[0],u=arguments[1],n=yBr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!DG(e))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(xG(e,"prng")){if(!XG(e.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=_i({prng:e.prng})}else r=_i(e)}else r=_i()}return a===void 0?i=d:i=h,t=r.PRNG,ft(i,"NAME","f"),e&&e.prng?(ft(i,"seed",null),ft(i,"seedLength",null),zG(i,"state",JG(null),hBr),ft(i,"stateLength",null),ft(i,"byteLength",null),ft(i,"toJSON",JG(null))):(K0(i,"seed",o),K0(i,"seedLength",f),zG(i,"state",l,p),K0(i,"stateLength",v),K0(i,"byteLength",c),ft(i,"toJSON",m)),ft(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=qBr(t.state),a===void 0?g.params=[]:g.params=[a,u],g}function h(){return ZG(r,a,u)}function d(g,q){return YG(g)||YG(q)||g<=0||q<=0?NaN:ZG(r,g,q)}}$G.exports=bBr});var KG=s((pce,QG)=>{"use strict";var wBr=_3(),EBr=wBr();QG.exports=EBr});var tV=s((gce,eV)=>{"use strict";var NBr=w(),rV=KG(),ABr=_3();NBr(rV,"factory",ABr);eV.exports=rV});var aV=s((mce,nV)=>{"use strict";var iV=D().isPrimitive,OBr=j().isPrimitive,L3=or(),P3=y();function SBr(r,e,t){return!iV(r)||L3(r)?new TypeError(P3("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!iV(e)||L3(e)?new TypeError(P3("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!OBr(t)||L3(t)?new TypeError(P3("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}nV.exports=SBr});var uV=s((dce,sV)=>{"use strict";var TBr=W(),IBr=R();function _Br(r,e,t,i){return i+t*TBr(-IBr(r()),-1/e)}sV.exports=_Br});var F3=s((hce,gV)=>{"use strict";var be=w(),es=P(),oV=M(),vV=_(),fV=L(),cV=O(),lV=T(),LBr=C(),ts=X().factory,R3=E(),PBr=B(),is=y(),RBr=aV(),pV=uV();function FBr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=ts();else if(arguments.length===1){if(e=arguments[0],!vV(e))throw new TypeError(is("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cV(e,"prng")){if(!fV(e.prng))throw new TypeError(is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ts(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=RBr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!vV(e))throw new TypeError(is("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cV(e,"prng")){if(!fV(e.prng))throw new TypeError(is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ts(e)}else t=ts()}return r===void 0?i=d:i=h,be(i,"NAME","frechet"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),oV(i,"state",lV(null),LBr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",lV(null)),be(i,"PRNG",t)):(es(i,"seed",o),es(i,"seedLength",f),oV(i,"state",l,p),es(i,"stateLength",v),es(i,"byteLength",c),be(i,"toJSON",m),be(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=PBr(t.state),r===void 0?g.params=[]:g.params=[r,a,u],g}function h(){return pV(t,r,a,u)}function d(g,q,N){return R3(g)||R3(q)||R3(N)||g<=0||q<=0?NaN:pV(t,g,q,N)}}gV.exports=FBr});var dV=s((qce,mV)=>{"use strict";var MBr=F3(),BBr=MBr();mV.exports=BBr});var yV=s((yce,qV)=>{"use strict";var kBr=w(),hV=dV(),jBr=F3();kBr(hV,"factory",jBr);qV.exports=hV});var EV=s((bce,wV)=>{"use strict";var CBr=J(),bV=R();function GBr(r,e){var t=r();return t===0&&(t=r()),CBr(bV(t)/bV(1-e))}wV.exports=GBr});var M3=s((wce,_V)=>{"use strict";var we=w(),ns=P(),NV=M(),AV=_(),VBr=nn().isPrimitive,OV=L(),SV=O(),TV=T(),UBr=C(),as=X().factory,HBr=E(),WBr=B(),ss=y(),IV=EV();function zBr(){var r,e,t,i;if(arguments.length===0)e=as();else if(arguments.length===1&&AV(arguments[0]))if(r=arguments[0],SV(r,"prng")){if(!OV(r.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=as(r);else{if(i=arguments[0],!VBr(i))throw new TypeError(ss("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!AV(r))throw new TypeError(ss("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SV(r,"prng")){if(!OV(r.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=as(r)}else e=as()}return i===void 0?t=p:t=l,we(t,"NAME","geometric"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),NV(t,"state",TV(null),UBr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",TV(null)),we(t,"PRNG",e)):(ns(t,"seed",n),ns(t,"seedLength",a),NV(t,"state",f,v),ns(t,"stateLength",u),ns(t,"byteLength",o),we(t,"toJSON",c),we(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=WBr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return IV(e,i)}function p(m){return HBr(m)||m<0||m>1?NaN:IV(e,m)}}_V.exports=zBr});var PV=s((Ece,LV)=>{"use strict";var DBr=M3(),XBr=DBr();LV.exports=XBr});var MV=s((Nce,FV)=>{"use strict";var xBr=w(),RV=PV(),JBr=M3();xBr(RV,"factory",JBr);FV.exports=RV});var jV=s((Ace,kV)=>{"use strict";var YBr=j().isPrimitive,ZBr=D().isPrimitive,BV=y(),$Br=or();function QBr(r,e){return!YBr(r)||$Br(r)?new TypeError(BV("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):ZBr(e)?null:new TypeError(BV("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}kV.exports=QBr});var VV=s((Oce,GV)=>{"use strict";var CV=R();function KBr(r,e,t){return e-t*CV(-CV(r()))}GV.exports=KBr});var B3=s((Sce,JV)=>{"use strict";var Ee=w(),us=P(),UV=M(),HV=_(),WV=L(),zV=O(),DV=T(),rkr=C(),os=X().factory,XV=E(),ekr=B(),vs=y(),tkr=jV(),xV=VV();function ikr(){var r,e,t,i,n,a;if(arguments.length===0)t=os();else if(arguments.length===1){if(e=arguments[0],!HV(e))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(zV(e,"prng")){if(!WV(e.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=os(e)}else{if(a=arguments[0],r=arguments[1],n=tkr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!HV(e))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(zV(e,"prng")){if(!WV(e.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=os(e)}else t=os()}return a===void 0?i=h:i=m,Ee(i,"NAME","gumbel"),e&&e.prng?(Ee(i,"seed",null),Ee(i,"seedLength",null),UV(i,"state",DV(null),rkr),Ee(i,"stateLength",null),Ee(i,"byteLength",null),Ee(i,"toJSON",DV(null)),Ee(i,"PRNG",t)):(us(i,"seed",u),us(i,"seedLength",o),UV(i,"state",c,l),us(i,"stateLength",f),us(i,"byteLength",v),Ee(i,"toJSON",p),Ee(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=ekr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return xV(t,a,r)}function h(d,g){return XV(d)||XV(g)||g<=0?NaN:xV(t,d,g)}}JV.exports=ikr});var ZV=s((Tce,YV)=>{"use strict";var nkr=B3(),akr=nkr();YV.exports=akr});var KV=s((Ice,QV)=>{"use strict";var skr=w(),$V=ZV(),ukr=B3();skr($V,"factory",ukr);QV.exports=$V});var eU=s((_ce,rU)=>{"use strict";var k3=Ve().isPrimitive,Gn=y();function okr(r,e,t){return k3(r)?k3(e)?k3(t)?t>r?new RangeError(Gn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(Gn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(Gn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(Gn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(Gn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}rU.exports=okr});var tU=s((Lce,vkr)=>{vkr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var nU=s((Pce,iU)=>{"use strict";var fkr=E(),ckr=_r(),lkr=hi(),pkr=I(),gkr=tU(),mkr=170;function dkr(r){return fkr(r)?NaN:ckr(r)?r<0?NaN:r<=mkr?gkr[r]:pkr:lkr(r+1)}iU.exports=dkr});var sU=s((Rce,aU)=>{"use strict";var hkr=nU();aU.exports=hkr});var oU=s((Fce,uU)=>{"use strict";var ct=sU();function qkr(r,e,t,i){var n,a,u;for(i<t?(n=ct(t)*ct(e+t-i)/(ct(e+t)*ct(t-i)),u=0):(n=ct(e)*ct(i)/(ct(i-t)*ct(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}uU.exports=qkr});var fU=s((Mce,vU)=>{"use strict";var fs=oU();function ykr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=fs(r,n,a,u),t-o):(a=t,n=e-t,o=fs(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=fs(r,n,a,u),o):(n=e-t,a=t,o=fs(r,n,a,u),i-o))}vU.exports=ykr});var C3=s((Bce,qU)=>{"use strict";var Ne=w(),cs=P(),cU=M(),lU=_(),pU=L(),gU=O(),mU=T(),bkr=C(),ls=X().factory,j3=e1(),dU=I(),wkr=B(),ps=y(),Ekr=eU(),hU=fU();function Nkr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=ls();else if(arguments.length===1){if(r=arguments[0],!lU(r))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gU(r,"prng")){if(!pU(r.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ls(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=Ekr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!lU(r))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gU(r,"prng")){if(!pU(r.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ls(r)}else e=ls()}return n===void 0?t=d:t=h,Ne(t,"NAME","hypergeometric"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),cU(t,"state",mU(null),bkr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",mU(null)),Ne(t,"PRNG",e)):(cs(t,"seed",o),cs(t,"seedLength",f),cU(t,"state",l,p),cs(t,"stateLength",v),cs(t,"byteLength",c),Ne(t,"toJSON",m),Ne(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=wkr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return hU(e,n,a,u)}function d(g,q,N){return g===dU||q===dU||!j3(g)||!j3(q)||!j3(N)||N>g?NaN:hU(e,g,q,N)}}qU.exports=Nkr});var bU=s((kce,yU)=>{"use strict";var Akr=C3(),Okr=Akr();yU.exports=Okr});var NU=s((jce,EU)=>{"use strict";var Skr=w(),wU=bU(),Tkr=C3();Skr(wU,"factory",Tkr);EU.exports=wU});var TU=s((Cce,SU)=>{"use strict";var AU=D().isPrimitive,OU=y();function Ikr(r,e){return AU(r)?AU(e)?null:new TypeError(OU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(OU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}SU.exports=Ikr});var G3=s((Gce,MU)=>{"use strict";var lt=w(),gs=P(),IU=M(),_U=_(),LU=L(),PU=O(),RU=T(),_kr=C(),Li=Ni().factory,FU=E(),Lkr=B(),ms=y(),Pkr=TU();function Rkr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Li();else if(arguments.length===1){if(i=arguments[0],!_U(i))throw new TypeError(ms("invalid argument. Options argument must be an object. Value: `%s`.",i));if(PU(i,"prng")){if(!LU(i.prng))throw new TypeError(ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Li({prng:i.prng})}else r=Li(i)}else{if(e=arguments[0],t=arguments[1],u=Pkr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!_U(i))throw new TypeError(ms("invalid argument. Options argument must be an object. Value: `%s`.",i));if(PU(i,"prng")){if(!LU(i.prng))throw new TypeError(ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Li(e,t,{prng:i.prng})}else r=Li(e,t,i)}else r=Li(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,lt(a,"NAME","invgamma"),i&&i.prng?(lt(a,"seed",null),lt(a,"seedLength",null),IU(a,"state",RU(null),_kr),lt(a,"stateLength",null),lt(a,"byteLength",null),lt(a,"toJSON",RU(null))):(gs(a,"seed",o),gs(a,"seedLength",f),IU(a,"state",l,p),gs(a,"stateLength",v),gs(a,"byteLength",c),lt(a,"toJSON",m)),lt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Lkr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return 1/r()}function d(g,q){return FU(g)||FU(q)||g<=0||q<=0?NaN:1/r(g,q)}}MU.exports=Rkr});var kU=s((Vce,BU)=>{"use strict";var Fkr=G3(),Mkr=Fkr();BU.exports=Mkr});var GU=s((Uce,CU)=>{"use strict";var Bkr=w(),jU=kU(),kkr=G3();Bkr(jU,"factory",kkr);CU.exports=jU});var WU=s((Hce,HU)=>{"use strict";var VU=D().isPrimitive,UU=y();function jkr(r,e){return VU(r)?VU(e)?null:new TypeError(UU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(UU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}HU.exports=jkr});var XU=s((Wce,DU)=>{"use strict";var zU=W();function Ckr(r,e,t){var i=r();return zU(1-zU(1-i,1/t),1/e)}DU.exports=Ckr});var V3=s((zce,rH)=>{"use strict";var Ae=w(),ds=P(),xU=M(),JU=_(),YU=L(),ZU=O(),$U=T(),Gkr=C(),hs=X().factory,QU=E(),Vkr=B(),qs=y(),Ukr=WU(),KU=XU();function Hkr(){var r,e,t,i,n,a;if(arguments.length===0)e=hs();else if(arguments.length===1){if(r=arguments[0],!JU(r))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ZU(r,"prng")){if(!YU(r.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else{if(n=arguments[0],a=arguments[1],i=Ukr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!JU(r))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ZU(r,"prng")){if(!YU(r.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else e=hs()}return n===void 0?t=h:t=m,Ae(t,"NAME","kumaraswamy"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),xU(t,"state",$U(null),Gkr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",$U(null)),Ae(t,"PRNG",e)):(ds(t,"seed",u),ds(t,"seedLength",o),xU(t,"state",c,l),ds(t,"stateLength",f),ds(t,"byteLength",v),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Vkr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return KU(e,n,a)}function h(d,g){return QU(d)||QU(g)||d<=0||g<=0?NaN:KU(e,d,g)}}rH.exports=Hkr});var tH=s((Dce,eH)=>{"use strict";var Wkr=V3(),zkr=Wkr();eH.exports=zkr});var aH=s((Xce,nH)=>{"use strict";var Dkr=w(),iH=tH(),Xkr=V3();Dkr(iH,"factory",Xkr);nH.exports=iH});var oH=s((xce,uH)=>{"use strict";var xkr=j().isPrimitive,Jkr=D().isPrimitive,sH=y(),Ykr=or();function Zkr(r,e){return!xkr(r)||Ykr(r)?new TypeError(sH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Jkr(e)?null:new TypeError(sH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}uH.exports=Zkr});var fH=s((Jce,vH)=>{"use strict";var $kr=I0(),Qkr=x(),Kkr=R();function rjr(r,e,t){var i=r()-.5;return e-t*$kr(i)*Kkr(1-2*Qkr(i))}vH.exports=rjr});var U3=s((Yce,qH)=>{"use strict";var Oe=w(),ys=P(),cH=M(),lH=_(),pH=L(),gH=O(),mH=T(),ejr=C(),bs=X().factory,dH=E(),tjr=B(),ws=y(),ijr=oH(),hH=fH();function njr(){var r,e,t,i,n,a;if(arguments.length===0)e=bs();else if(arguments.length===1){if(r=arguments[0],!lH(r))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gH(r,"prng")){if(!pH(r.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=bs(r)}else{if(n=arguments[0],a=arguments[1],i=ijr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!lH(r))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gH(r,"prng")){if(!pH(r.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=bs(r)}else e=bs()}return n===void 0?t=h:t=m,Oe(t,"NAME","laplace"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),cH(t,"state",mH(null),ejr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",mH(null)),Oe(t,"PRNG",e)):(ys(t,"seed",u),ys(t,"seedLength",o),cH(t,"state",c,l),ys(t,"stateLength",f),ys(t,"byteLength",v),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=tjr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return hH(e,n,a)}function h(d,g){return dH(d)||dH(g)||g<=0?NaN:hH(e,d,g)}}qH.exports=njr});var bH=s((Zce,yH)=>{"use strict";var ajr=U3(),sjr=ajr();yH.exports=sjr});var NH=s(($ce,EH)=>{"use strict";var ujr=w(),wH=bH(),ojr=U3();ujr(wH,"factory",ojr);EH.exports=wH});var SH=s((Qce,OH)=>{"use strict";var vjr=j().isPrimitive,fjr=D().isPrimitive,AH=y(),cjr=or();function ljr(r,e){return!vjr(r)||cjr(r)?new TypeError(AH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):fjr(e)?null:new TypeError(AH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}OH.exports=ljr});var IH=s((Kce,TH)=>{"use strict";function pjr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}TH.exports=pjr});var LH=s((r5e,_H)=>{"use strict";function gjr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}_H.exports=gjr});var RH=s((e5e,PH)=>{"use strict";function mjr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}PH.exports=mjr});var MH=s((t5e,FH)=>{"use strict";function djr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}FH.exports=djr});var kH=s((i5e,BH)=>{"use strict";function hjr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}BH.exports=hjr});var VH=s((n5e,GH)=>{"use strict";var qjr=E(),jH=V(),CH=R(),yjr=I(),bjr=G(),wjr=IH(),Ejr=LH(),Njr=RH(),Ajr=MH(),Ojr=kH(),Sjr=.08913147449493408,Tjr=2.249481201171875,Ijr=.807220458984375,_jr=.9399557113647461,Ljr=.9836282730102539;function Pjr(r){var e,t,i,n,a,u;return qjr(r)?NaN:r===1?yjr:r===-1?bjr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=wjr(t),e*(a*Sjr+a*u)):n>=.25?(a=jH(-2*CH(n)),n-=.25,u=Ejr(n),e*(a/(Tjr+u))):(n=jH(-CH(n)),n<3?(i=n-1.125,u=Njr(i),e*(Ijr*n+u*n)):n<6?(i=n-3,u=Ajr(i),e*(_jr*n+u*n)):(i=n-6,u=Ojr(i),e*(Ljr*n+u*n))))}GH.exports=Pjr});var H3=s((a5e,UH)=>{"use strict";var Rjr=VH();UH.exports=Rjr});var WH=s((s5e,HH)=>{"use strict";var Fjr=H3(),W3=E(),Mjr=V();function Bjr(r,e,t){var i,n;return W3(e)||W3(t)||W3(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*Mjr(2),i+n*Fjr(2*r-1))}HH.exports=Bjr});var DH=s((u5e,zH)=>{"use strict";var kjr=T(),jjr=w3().factory,Cjr=H3(),z3=E(),Gjr=V();function Vjr(r,e){var t,i;if(z3(r)||z3(e)||e<0)return kjr(NaN);return e===0&&jjr(r),t=r,i=e*Gjr(2),n;function n(a){return z3(a)||a<0||a>1?NaN:t+i*Cjr(2*a-1)}}zH.exports=Vjr});var D3=s((o5e,xH)=>{"use strict";var Ujr=w(),XH=WH(),Hjr=DH();Ujr(XH,"factory",Hjr);xH.exports=XH});var YH=s((v5e,JH)=>{"use strict";var Wjr=D3();function zjr(r,e,t){var i=Wjr(1-r()/2,0,1);return e+t/(i*i)}JH.exports=zjr});var X3=s((f5e,iW)=>{"use strict";var Se=w(),Es=P(),ZH=M(),$H=_(),QH=L(),KH=O(),rW=T(),Djr=C(),Ns=X().factory,eW=E(),Xjr=B(),As=y(),xjr=SH(),tW=YH();function Jjr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ns();else if(arguments.length===1){if(r=arguments[0],!$H(r))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KH(r,"prng")){if(!QH(r.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else{if(n=arguments[0],a=arguments[1],i=xjr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!$H(r))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KH(r,"prng")){if(!QH(r.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else e=Ns()}return n===void 0?t=h:t=m,Se(t,"NAME","levy"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),ZH(t,"state",rW(null),Djr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",rW(null)),Se(t,"PRNG",e)):(Es(t,"seed",u),Es(t,"seedLength",o),ZH(t,"state",c,l),Es(t,"stateLength",f),Es(t,"byteLength",v),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Xjr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return tW(e,n,a)}function h(d,g){return eW(d)||eW(g)||g<=0?NaN:tW(e,d,g)}}iW.exports=Jjr});var aW=s((c5e,nW)=>{"use strict";var Yjr=X3(),Zjr=Yjr();nW.exports=Zjr});var oW=s((l5e,uW)=>{"use strict";var $jr=w(),sW=aW(),Qjr=X3();$jr(sW,"factory",Qjr);uW.exports=sW});var cW=s((p5e,fW)=>{"use strict";var Kjr=j().isPrimitive,rCr=D().isPrimitive,eCr=or(),vW=y();function tCr(r,e){return!Kjr(r)||eCr(r)?new TypeError(vW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):rCr(e)?null:new TypeError(vW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}fW.exports=tCr});var pW=s((g5e,lW)=>{"use strict";var iCr=R();function nCr(r,e,t){var i=r();return e+t*iCr(i/(1-i))}lW.exports=nCr});var x3=s((m5e,wW)=>{"use strict";var Te=w(),Os=P(),gW=M(),mW=_(),dW=L(),hW=O(),qW=T(),aCr=C(),Ss=X().factory,yW=E(),sCr=B(),Ts=y(),uCr=cW(),bW=pW();function oCr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ss();else if(arguments.length===1){if(r=arguments[0],!mW(r))throw new TypeError(Ts("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hW(r,"prng")){if(!dW(r.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ss(r)}else{if(n=arguments[0],a=arguments[1],i=uCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!mW(r))throw new TypeError(Ts("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hW(r,"prng")){if(!dW(r.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ss(r)}else e=Ss()}return n===void 0?t=h:t=m,Te(t,"NAME","logistic"),r&&r.prng?(Te(t,"seed",null),Te(t,"seedLength",null),gW(t,"state",qW(null),aCr),Te(t,"stateLength",null),Te(t,"byteLength",null),Te(t,"toJSON",qW(null)),Te(t,"PRNG",e)):(Os(t,"seed",u),Os(t,"seedLength",o),gW(t,"state",c,l),Os(t,"stateLength",f),Os(t,"byteLength",v),Te(t,"toJSON",p),Te(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=sCr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return bW(e,n,a)}function h(d,g){return yW(d)||yW(g)||g<=0?NaN:bW(e,d,g)}}wW.exports=oCr});var NW=s((d5e,EW)=>{"use strict";var vCr=x3(),fCr=vCr();EW.exports=fCr});var SW=s((h5e,OW)=>{"use strict";var cCr=w(),AW=NW(),lCr=x3();cCr(AW,"factory",lCr);OW.exports=AW});var _W=s((q5e,IW)=>{"use strict";var pCr=j().isPrimitive,gCr=D().isPrimitive,TW=y(),mCr=or();function dCr(r,e){return!pCr(r)||mCr(r)?new TypeError(TW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):gCr(e)?null:new TypeError(TW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}IW.exports=dCr});var PW=s((y5e,LW)=>{"use strict";var hCr=nr();function qCr(r,e,t){return hCr(e+t*r())}LW.exports=qCr});var J3=s((b5e,GW)=>{"use strict";var pt=w(),Is=P(),RW=M(),FW=_(),MW=L(),BW=O(),kW=T(),yCr=C(),Pi=nt().factory,jW=E(),bCr=B(),_s=y(),wCr=_W(),CW=PW();function ECr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Pi();else if(arguments.length===1){if(t=arguments[0],!FW(t))throw new TypeError(_s("invalid argument. Options argument must be an object. Value: `%s`.",t));if(BW(t,"prng")){if(!MW(t.prng))throw new TypeError(_s("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Pi({prng:t.prng})}else e=Pi(t)}else{if(u=arguments[0],r=arguments[1],a=wCr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!FW(t))throw new TypeError(_s("invalid argument. Options argument must be an object. Value: `%s`.",t));if(BW(t,"prng")){if(!MW(t.prng))throw new TypeError(_s("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Pi({prng:t.prng})}else e=Pi(t)}else e=Pi()}return u===void 0?n=d:n=h,i=e.PRNG,pt(n,"NAME","lognormal"),t&&t.prng?(pt(n,"seed",null),pt(n,"seedLength",null),RW(n,"state",kW(null),yCr),pt(n,"stateLength",null),pt(n,"byteLength",null),pt(n,"toJSON",kW(null))):(Is(n,"seed",o),Is(n,"seedLength",f),RW(n,"state",l,p),Is(n,"stateLength",v),Is(n,"byteLength",c),pt(n,"toJSON",m)),pt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=bCr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return CW(e,u,r)}function d(g,q){return jW(g)||jW(q)||q<=0?NaN:CW(e,g,q)}}GW.exports=ECr});var UW=s((w5e,VW)=>{"use strict";var NCr=J3(),ACr=NCr();VW.exports=ACr});var zW=s((E5e,WW)=>{"use strict";var OCr=w(),HW=UW(),SCr=J3();OCr(HW,"factory",SCr);WW.exports=HW});var Y3=s((N5e,DW)=>{"use strict";var TCr=Jt(),ICr=J(),_Cr=TCr-1;function LCr(){var r=ICr(1+_Cr*Math.random());return r|0}DW.exports=LCr});var Q3=s((A5e,ZW)=>{"use strict";var Ie=w(),gt=P(),XW=M(),Z3=O(),PCr=_(),RCr=cr().isPrimitive,FCr=Vr(),MCr=ee().isPrimitive,xW=Kn(),Wr=y(),Ls=Jt(),wr=Ot(),Ri=Ke(),BCr=B(),JW=Y3(),$3=Ls-1|0,kCr=Ls-1|0,jCr=16807,Ps=1,Rs=2,mt=2,Er=4,Vn=5;function YW(r,e){var t;return e?t="option":t="argument",r.length<Vn+1?new RangeError(Wr("invalid %s. State array has insufficient length.",t)):r[0]!==Ps?new RangeError(Wr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ps,r[0])):r[1]!==Rs?new RangeError(Wr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Rs,r[1])):r[mt]!==1?new RangeError(Wr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[mt])):r[Er]!==r.length-Vn?new RangeError(Wr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Vn,r[Er])):null}function CCr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!PCr(r))throw new TypeError(Wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Z3(r,"copy")&&(i.copy=r.copy,!RCr(r.copy)))throw new TypeError(Wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Z3(r,"state")){if(t=r.state,i.state=!0,!xW(t))throw new TypeError(Wr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=YW(t,!0),u)throw u;i.copy===!1?e=t:(e=new wr(t.length),Ri(t.length,t,1,e,1)),t=new wr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,t[Er])}if(n===void 0)if(Z3(r,"seed"))if(n=r.seed,i.seed=!0,MCr(n)){if(n>kCr)throw new RangeError(Wr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(FCr(n)&&n.length>0)a=n.length,e=new wr(Vn+a),e[0]=Ps,e[1]=Rs,e[mt]=1,e[Er]=a,Ri.ndarray(a,n,1,0,e,1,Er+1),t=new wr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Wr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=JW()|0}else n=JW()|0;return t===void 0&&(e=new wr(Vn+1),e[0]=Ps,e[1]=Rs,e[mt]=1,e[Er]=1,e[Er+1]=n,t=new wr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Ie(h,"NAME","minstd"),gt(h,"seed",o),gt(h,"seedLength",f),XW(h,"state",l,p),gt(h,"stateLength",v),gt(h,"byteLength",c),Ie(h,"toJSON",m),Ie(h,"MIN",1),Ie(h,"MAX",Ls-1),Ie(h,"normalized",d),Ie(d,"NAME",h.NAME),gt(d,"seed",o),gt(d,"seedLength",f),XW(d,"state",l,p),gt(d,"stateLength",v),gt(d,"byteLength",c),Ie(d,"toJSON",m),Ie(d,"MIN",(h.MIN-1)/$3),Ie(d,"MAX",(h.MAX-1)/$3),h;function o(){var g=e[Er];return Ri(g,n,1,new wr(g),1)}function f(){return e[Er]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Ri(g,e,1,new wr(g),1)}function p(g){var q;if(!xW(g))throw new TypeError(Wr("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(q=YW(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?Ri(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new wr(g.length)),Ri(g.length,g,1,e,1)),t=new wr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new wr(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,e[Er])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=BCr(e),g.params=[],g}function h(){var g=t[0]|0;return g=jCr*g%Ls|0,t[0]=g,g|0}function d(){return(h()-1)/$3}}ZW.exports=CCr});var QW=s((O5e,$W)=>{"use strict";var GCr=Q3(),VCr=Y3(),UCr=GCr({seed:VCr()});$W.exports=UCr});var ez=s((S5e,rz)=>{"use strict";var HCr=w(),KW=QW(),WCr=Q3();HCr(KW,"factory",WCr);rz.exports=KW});var iz=s((T5e,tz)=>{"use strict";var zCr=E(),DCr=8;function XCr(r,e,t){var i,n;for(n=0;n<DCr;n++)if(i=r(),zCr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}tz.exports=XCr});var K3=s((I5e,nz)=>{"use strict";var xCr=Jt(),JCr=J(),YCr=xCr-1;function ZCr(){var r=JCr(1+YCr*Math.random());return r|0}nz.exports=ZCr});var t6=s((_5e,fz)=>{"use strict";var _e=w(),dt=P(),az=M(),r6=O(),$Cr=_(),QCr=cr().isPrimitive,KCr=Vr(),rGr=ee().isPrimitive,sz=Kn(),Fi=Ke(),eGr=J(),Nr=Ot(),Un=Jt(),tGr=B(),Gr=y(),uz=iz(),oz=K3(),e6=Un-1|0,iGr=Un-1|0,nGr=16807,Or=32,Bs=1,ks=3,ht=2,Mi=Or+3,Ar=Or+6,Hn=Or+7,Fs=Mi+1,Ms=Mi+2;function vz(r,e){var t;return e?t="option":t="argument",r.length<Hn+1?new RangeError(Gr("invalid %s. State array has insufficient length.",t)):r[0]!==Bs?new RangeError(Gr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Bs,r[0])):r[1]!==ks?new RangeError(Gr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,ks,r[1])):r[ht]!==Or?new RangeError(Gr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Or,r[ht])):r[Mi]!==2?new RangeError(Gr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Mi])):r[Ar]!==r.length-Hn?new RangeError(Gr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Hn,r[Ar])):null}function aGr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!$Cr(r))throw new TypeError(Gr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(r6(r,"copy")&&(i.copy=r.copy,!QCr(r.copy)))throw new TypeError(Gr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(r6(r,"state")){if(t=r.state,i.state=!0,!sz(t))throw new TypeError(Gr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=vz(t,!0),u)throw u;i.copy===!1?e=t:(e=new Nr(t.length),Fi(t.length,t,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(r6(r,"seed"))if(n=r.seed,i.seed=!0,rGr(n)){if(n>iGr)throw new RangeError(Gr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(KCr(n)&&n.length>0)a=n.length,e=new Nr(Hn+a),e[0]=Bs,e[1]=ks,e[ht]=Or,e[Mi]=2,e[Ms]=n[0],e[Ar]=a,Fi.ndarray(a,n,1,0,e,1,Ar+1),t=new Nr(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t=uz(h,t,Or),e[Fs]=t[0];else throw new TypeError(Gr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=oz()|0}else n=oz()|0;return t===void 0&&(e=new Nr(Hn+1),e[0]=Bs,e[1]=ks,e[ht]=Or,e[Mi]=2,e[Ms]=n,e[Ar]=1,e[Ar+1]=n,t=new Nr(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t=uz(h,t,Or),e[Fs]=t[0]),_e(d,"NAME","minstd-shuffle"),dt(d,"seed",o),dt(d,"seedLength",f),az(d,"state",l,p),dt(d,"stateLength",v),dt(d,"byteLength",c),_e(d,"toJSON",m),_e(d,"MIN",1),_e(d,"MAX",Un-1),_e(d,"normalized",g),_e(g,"NAME",d.NAME),dt(g,"seed",o),dt(g,"seedLength",f),az(g,"state",l,p),dt(g,"stateLength",v),dt(g,"byteLength",c),_e(g,"toJSON",m),_e(g,"MIN",(d.MIN-1)/e6),_e(g,"MAX",(d.MAX-1)/e6),d;function o(){var q=e[Ar];return Fi(q,n,1,new Nr(q),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return Fi(q,e,1,new Nr(q),1)}function p(q){var N;if(!sz(q))throw new TypeError(Gr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=vz(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?Fi(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Nr(q.length)),Fi(q.length,q,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function m(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=tGr(e),q.params=[],q}function h(){var q=e[Ms]|0;return q=nGr*q%Un|0,e[Ms]=q,q|0}function d(){var q,N;return q=e[Fs],N=eGr(Or*(q/Un)),q=t[N],e[Fs]=q,t[N]=h(),q}function g(){return(d()-1)/e6}}fz.exports=aGr});var lz=s((L5e,cz)=>{"use strict";var sGr=t6(),uGr=K3(),oGr=sGr({seed:uGr()});cz.exports=oGr});var mz=s((P5e,gz)=>{"use strict";var vGr=w(),pz=lz(),fGr=t6();vGr(pz,"factory",fGr);gz.exports=pz});var hz=s((R5e,dz)=>{"use strict";var cGr=nr();function lGr(r,e){for(var t=r(),i=1;t>cGr(-e);)i+=1,t*=r();return i-1}dz.exports=lGr});var yz=s((F5e,qz)=>{"use strict";var pGr=J();function gGr(r){return pGr(r)===r&&r<0}qz.exports=gGr});var wz=s((M5e,bz)=>{"use strict";var mGr=yz();bz.exports=mGr});var Nz=s((B5e,Ez)=>{"use strict";var dGr=wz(),hGr=Pn();function qGr(r){return dGr(r)?NaN:hGr(r+1)}Ez.exports=qGr});var Oz=s((k5e,Az)=>{"use strict";var yGr=Nz();Az.exports=yGr});var _z=s((j5e,Iz)=>{"use strict";var bGr=Oz(),Sz=J(),wGr=I0(),EGr=V(),Tz=x(),js=R(),NGr=S1(),AGr=1/12,OGr=1/360;function SGr(r,e){var t,i,n,a,u,o,f,v,c,l;for(t=EGr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-Tz(c))+f,c+=e+.445,Sz(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=wGr(c)*.5-c,l=u*r()),a=.5-Tz(c),(a>=.013||a>=l)&&(v=Sz((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*js(e/v),c+=-e-NGr+v,c-=(AGr-OGr/(v*v))/v,v>=10&&c>=js(l*t)||(c=v*js(e)-e-bGr(v),v>=0&&v<=9&&c>=js(l))))return v}}Iz.exports=SGr});var Pz=s((C5e,Lz)=>{"use strict";var TGr=hz(),IGr=_z();function _Gr(r,e){return e<30?TGr(r,e):IGr(r,e)}Lz.exports=_Gr});var i6=s((G5e,Cz)=>{"use strict";var Le=w(),Cs=P(),Rz=M(),LGr=D().isPrimitive,Fz=_(),Mz=L(),Bz=O(),kz=T(),PGr=C(),Gs=X().factory,RGr=E(),FGr=B(),Vs=y(),jz=Pz();function MGr(){var r,e,t,i;if(arguments.length===0)t=Gs();else if(arguments.length===1&&Fz(arguments[0]))if(e=arguments[0],Bz(e,"prng")){if(!Mz(e.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gs(e);else{if(r=arguments[0],!LGr(r))throw new TypeError(Vs("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!Fz(e))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Bz(e,"prng")){if(!Mz(e.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gs(e)}else t=Gs()}return r===void 0?i=p:i=l,Le(i,"NAME","poisson"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),Rz(i,"state",kz(null),PGr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",kz(null)),Le(i,"PRNG",t)):(Cs(i,"seed",n),Cs(i,"seedLength",a),Rz(i,"state",f,v),Cs(i,"stateLength",u),Cs(i,"byteLength",o),Le(i,"toJSON",c),Le(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=FGr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return jz(t,r)}function p(m){return RGr(m)||m<=0?NaN:jz(t,m)}}Cz.exports=MGr});var Vz=s((V5e,Gz)=>{"use strict";var BGr=i6(),kGr=BGr();Gz.exports=kGr});var n6=s((U5e,Hz)=>{"use strict";var jGr=w(),Uz=Vz(),CGr=i6();jGr(Uz,"factory",CGr);Hz.exports=Uz});var zz=s((H5e,Wz)=>{"use strict";var GGr=D().isPrimitive,VGr=j().isPrimitive,a6=y(),UGr=or();function HGr(r,e){return GGr(r)?!VGr(e)||UGr(e)?new TypeError(a6("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(a6("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(a6("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Wz.exports=HGr});var v6=s((W5e,Qz)=>{"use strict";var qt=w(),Us=P(),Dz=M(),Bi=O(),Xz=_(),s6=re(),xz=cr().isPrimitive,Jz=L(),Yz=T(),WGr=C(),Zz=E(),ki=n6().factory,Hs=Ni().factory,u6=Ke(),o6=pr(),$z=Bn(),zGr=B(),Pe=y(),DGr=zz();function XGr(){var r,e,t,i,n,a,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=ki(i);else if(arguments.length===1){if(i=arguments[0],!Xz(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Bi(i,"copy")&&!xz(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Bi(i,"prng")){if(!Jz(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=ki({prng:i.prng})}else{if(Bi(i,"state")&&!s6(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=$z({},i),i.copy===!1?u=!1:i.state&&(i.state=u6(i.state.length,i.state,1,new o6(i.state.length),1)),i.copy=!1,t=ki(i)}}else{if(v=arguments[0],f=arguments[1],o=DGr(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!Xz(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Bi(i,"copy")&&!xz(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Bi(i,"prng")){if(!Jz(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=ki({prng:i.prng})}else{if(Bi(i,"state")&&!s6(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=$z({},i),i.copy===!1?u=!1:i.state&&(i.state=u6(i.state.length,i.state,1,new o6(i.state.length),1)),i.copy=!1,t=ki(i)}}else i={copy:!1},t=ki(i)}return i&&i.prng?v===void 0?r=Hs({prng:i.prng}):r=Hs(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=Hs({state:e,copy:!1}):r=Hs(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=q,a=t.PRNG,qt(n,"NAME","negative-binomial"),i&&i.prng?(qt(n,"seed",null),qt(n,"seedLength",null),Dz(n,"state",Yz(null),WGr),qt(n,"stateLength",null),qt(n,"byteLength",null),qt(n,"toJSON",Yz(null))):(Us(n,"seed",c),Us(n,"seedLength",l),Dz(n,"state",h,d),Us(n,"stateLength",p),Us(n,"byteLength",m),qt(n,"toJSON",g)),qt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function h(){return a.state}function d(A){if(!s6(A))throw new TypeError(Pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));u&&(A=u6(A.length,A,1,new o6(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=zGr(a.state),v===void 0?A.params=[]:A.params=[v,f],A}function q(){return t(r())}function N(A,F){return Zz(A)||Zz(F)||F<=0||F>=1?NaN:t(r(A,F/(1-F)))}}Qz.exports=XGr});var rD=s((z5e,Kz)=>{"use strict";var xGr=v6(),JGr=xGr();Kz.exports=JGr});var iD=s((D5e,tD)=>{"use strict";var YGr=w(),eD=rD(),ZGr=v6();YGr(eD,"factory",ZGr);tD.exports=eD});var sD=s((X5e,aD)=>{"use strict";var $Gr=j().isPrimitive,QGr=D().isPrimitive,nD=y(),KGr=or();function rVr(r,e){return!$Gr(r)||KGr(r)?new TypeError(nD("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):QGr(e)?null:new TypeError(nD("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}aD.exports=rVr});var oD=s((x5e,uD)=>{"use strict";function eVr(r,e,t){return e+t*r()}uD.exports=eVr});var f6=s((J5e,dD)=>{"use strict";var yt=w(),Ws=P(),vD=M(),fD=_(),cD=L(),lD=O(),pD=T(),tVr=C(),ji=nt().factory,gD=E(),iVr=B(),zs=y(),nVr=sD(),mD=oD();function aVr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=ji();else if(arguments.length===1){if(t=arguments[0],!fD(t))throw new TypeError(zs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(lD(t,"prng")){if(!cD(t.prng))throw new TypeError(zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else{if(u=arguments[0],r=arguments[1],a=nVr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!fD(t))throw new TypeError(zs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(lD(t,"prng")){if(!cD(t.prng))throw new TypeError(zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else e=ji()}return u===void 0?n=d:n=h,i=e.PRNG,yt(n,"NAME","normal"),t&&t.prng?(yt(n,"seed",null),yt(n,"seedLength",null),vD(n,"state",pD(null),tVr),yt(n,"stateLength",null),yt(n,"byteLength",null),yt(n,"toJSON",pD(null))):(Ws(n,"seed",o),Ws(n,"seedLength",f),vD(n,"state",l,p),Ws(n,"stateLength",v),Ws(n,"byteLength",c),yt(n,"toJSON",m)),yt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=iVr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return mD(e,u,r)}function d(g,q){return gD(g)||gD(q)||q<=0?NaN:mD(e,g,q)}}dD.exports=aVr});var qD=s((Y5e,hD)=>{"use strict";var sVr=f6(),uVr=sVr();hD.exports=uVr});var wD=s((Z5e,bD)=>{"use strict";var oVr=w(),yD=qD(),vVr=f6();oVr(yD,"factory",vVr);bD.exports=yD});var OD=s(($5e,AD)=>{"use strict";var ED=D().isPrimitive,ND=y();function fVr(r,e){return ED(r)?ED(e)?null:new TypeError(ND("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(ND("invalid argument. First argument must be a positive number. Value: `%s`.",r))}AD.exports=fVr});var TD=s((Q5e,SD)=>{"use strict";var cVr=W();function lVr(r,e,t){return t/cVr(r(),1/e)}SD.exports=lVr});var c6=s((K5e,BD)=>{"use strict";var Re=w(),Ds=P(),ID=M(),_D=_(),LD=L(),PD=O(),RD=T(),pVr=C(),Xs=X().factory,FD=E(),gVr=B(),xs=y(),mVr=OD(),MD=TD();function dVr(){var r,e,t,i,n,a;if(arguments.length===0)i=Xs();else if(arguments.length===1){if(t=arguments[0],!_D(t))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PD(t,"prng")){if(!LD(t.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Xs(t)}else{if(r=arguments[0],e=arguments[1],a=mVr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!_D(t))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PD(t,"prng")){if(!LD(t.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Xs(t)}else i=Xs()}return r===void 0?n=h:n=m,Re(n,"NAME","pareto-type1"),t&&t.prng?(Re(n,"seed",null),Re(n,"seedLength",null),ID(n,"state",RD(null),pVr),Re(n,"stateLength",null),Re(n,"byteLength",null),Re(n,"toJSON",RD(null)),Re(n,"PRNG",i)):(Ds(n,"seed",u),Ds(n,"seedLength",o),ID(n,"state",c,l),Ds(n,"stateLength",f),Ds(n,"byteLength",v),Re(n,"toJSON",p),Re(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=gVr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function m(){return MD(i,r,e)}function h(d,g){return FD(d)||FD(g)||d<=0||g<=0?NaN:MD(i,d,g)}}BD.exports=dVr});var jD=s((rle,kD)=>{"use strict";var hVr=c6(),qVr=hVr();kD.exports=qVr});var VD=s((ele,GD)=>{"use strict";var yVr=w(),CD=jD(),bVr=c6();yVr(CD,"factory",bVr);GD.exports=CD});var HD=s((tle,UD)=>{"use strict";var wVr=V(),EVr=R();function NVr(r,e){return e*wVr(-2*EVr(r()))}UD.exports=NVr});var l6=s((ile,YD)=>{"use strict";var Fe=w(),Js=P(),WD=M(),AVr=D().isPrimitive,zD=_(),DD=L(),XD=O(),xD=T(),OVr=C(),Ys=X().factory,SVr=E(),TVr=B(),Zs=y(),JD=HD();function IVr(){var r,e,t,i;if(arguments.length===0)t=Ys();else if(arguments.length===1&&zD(arguments[0]))if(e=arguments[0],XD(e,"prng")){if(!DD(e.prng))throw new TypeError(Zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ys(e);else{if(r=arguments[0],!AVr(r))throw new TypeError(Zs("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!zD(e))throw new TypeError(Zs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(XD(e,"prng")){if(!DD(e.prng))throw new TypeError(Zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ys(e)}else t=Ys()}return r===void 0?i=p:i=l,Fe(i,"NAME","rayleigh"),e&&e.prng?(Fe(i,"seed",null),Fe(i,"seedLength",null),WD(i,"state",xD(null),OVr),Fe(i,"stateLength",null),Fe(i,"byteLength",null),Fe(i,"toJSON",xD(null)),Fe(i,"PRNG",t)):(Js(i,"seed",n),Js(i,"seedLength",a),WD(i,"state",f,v),Js(i,"stateLength",u),Js(i,"byteLength",o),Fe(i,"toJSON",c),Fe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=TVr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return JD(t,r)}function p(m){return SVr(m)||m<=0?NaN:JD(t,m)}}YD.exports=IVr});var $D=s((nle,ZD)=>{"use strict";var _Vr=l6(),LVr=_Vr();ZD.exports=LVr});var rX=s((ale,KD)=>{"use strict";var PVr=w(),QD=$D(),RVr=l6();PVr(QD,"factory",RVr);KD.exports=QD});var d6=s((sle,vX)=>{"use strict";var bt=w(),$s=P(),eX=M(),Ci=O(),tX=D().isPrimitive,iX=_(),p6=re(),nX=cr().isPrimitive,FVr=E(),aX=L(),sX=T(),MVr=C(),Qs=Cn().factory,Gi=nt().factory,g6=Ke(),m6=pr(),uX=Bn(),BVr=B(),Zr=y(),oX=V();function kVr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Gi(n);else if(arguments.length===1)if(iX(arguments[0])){if(n=arguments[0],Ci(n,"copy")&&!nX(n.copy))throw new TypeError(Zr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ci(n,"prng")){if(!aX(n.prng))throw new TypeError(Zr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Gi({prng:n.prng})}else{if(Ci(n,"state")&&!p6(n.state))throw new TypeError(Zr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=uX({},n),n.copy===!1?u=!1:n.state&&(n.state=g6(n.state.length,n.state,1,new m6(n.state.length),1)),n.copy=!1,t=Gi(n)}}else{if(o=arguments[0],!tX(o))throw new TypeError(Zr("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Gi(n)}else{if(o=arguments[0],!tX(o))throw new TypeError(Zr("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!iX(n))throw new TypeError(Zr("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ci(n,"copy")&&!nX(n.copy))throw new TypeError(Zr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ci(n,"prng")){if(!aX(n.prng))throw new TypeError(Zr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Gi({prng:n.prng})}else{if(Ci(n,"state")&&!p6(n.state))throw new TypeError(Zr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=uX({},n),n.copy===!1?u=!1:n.state&&(n.state=g6(n.state.length,n.state,1,new m6(n.state.length),1)),n.copy=!1,t=Gi(n)}}return n&&n.prng?o===void 0?r=Qs({prng:n.prng}):r=Qs(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Qs({state:e,copy:!1}):r=Qs(o,{state:e,copy:!1})),o===void 0?a=g:a=d,i=t.PRNG,bt(a,"NAME","t"),n&&n.prng?(bt(a,"seed",null),bt(a,"seedLength",null),eX(a,"state",sX(null),MVr),bt(a,"stateLength",null),bt(a,"byteLength",null),bt(a,"toJSON",sX(null))):($s(a,"seed",f),$s(a,"seedLength",v),eX(a,"state",p,m),$s(a,"stateLength",c),$s(a,"byteLength",l),bt(a,"toJSON",h)),bt(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(q){if(!p6(q))throw new TypeError(Zr("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=g6(q.length,q,1,new m6(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=BVr(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/oX(r()/o)}function g(q){return FVr(q)||q<=0?NaN:t()/oX(r(q)/q)}}vX.exports=kVr});var cX=s((ule,fX)=>{"use strict";var jVr=d6(),CVr=jVr();fX.exports=CVr});var gX=s((ole,pX)=>{"use strict";var GVr=w(),lX=cX(),VVr=d6();GVr(lX,"factory",VVr);pX.exports=lX});var dX=s((vle,mX)=>{"use strict";var h6=j().isPrimitive,Ks=y(),q6=or();function UVr(r,e,t){return!h6(r)||q6(r)?new TypeError(Ks("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!h6(e)||q6(e)?new TypeError(Ks("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!h6(t)||q6(t)?new TypeError(Ks("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Ks("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}mX.exports=UVr});var yX=s((fle,qX)=>{"use strict";var hX=V();function HVr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+hX(a*u)):(a=(t-e)*(t-i),t-hX(a*(1-u)))}qX.exports=HVr});var b6=s((cle,SX)=>{"use strict";var Me=w(),ru=P(),bX=M(),wX=_(),EX=L(),NX=O(),AX=T(),WVr=C(),eu=X().factory,y6=E(),zVr=B(),tu=y(),DVr=dX(),OX=yX();function XVr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=eu();else if(arguments.length===1){if(r=arguments[0],!wX(r))throw new TypeError(tu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(NX(r,"prng")){if(!EX(r.prng))throw new TypeError(tu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=eu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=DVr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!wX(r))throw new TypeError(tu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(NX(r,"prng")){if(!EX(r.prng))throw new TypeError(tu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=eu(r)}else e=eu()}return n===void 0?t=d:t=h,Me(t,"NAME","triangular"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),bX(t,"state",AX(null),WVr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",AX(null)),Me(t,"PRNG",e)):(ru(t,"seed",o),ru(t,"seedLength",f),bX(t,"state",l,p),ru(t,"stateLength",v),ru(t,"byteLength",c),Me(t,"toJSON",m),Me(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=zVr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return OX(e,n,a,u)}function d(g,q,N){return y6(g)||y6(q)||y6(N)||!(g<=N&&N<=q)?NaN:OX(e,g,q,N)}}SX.exports=XVr});var IX=s((lle,TX)=>{"use strict";var xVr=b6(),JVr=xVr();TX.exports=JVr});var PX=s((ple,LX)=>{"use strict";var YVr=w(),_X=IX(),ZVr=b6();YVr(_X,"factory",ZVr);LX.exports=_X});var BX=s((gle,MX)=>{"use strict";var RX=j().isPrimitive,w6=y(),FX=or();function $Vr(r,e){return!RX(r)||FX(r)?new TypeError(w6("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!RX(e)||FX(e)?new TypeError(w6("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(w6("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}MX.exports=$Vr});var jX=s((mle,kX)=>{"use strict";function QVr(r,e,t){var i=r();return t*i+(1-i)*e}kX.exports=QVr});var E6=s((dle,DX)=>{"use strict";var Be=w(),iu=P(),CX=M(),GX=_(),VX=L(),UX=O(),HX=T(),KVr=C(),nu=X().factory,WX=E(),rUr=B(),au=y(),eUr=BX(),zX=jX();function tUr(){var r,e,t,i,n,a;if(arguments.length===0)e=nu();else if(arguments.length===1){if(r=arguments[0],!GX(r))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UX(r,"prng")){if(!VX(r.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=nu(r)}else{if(n=arguments[0],a=arguments[1],i=eUr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!GX(r))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UX(r,"prng")){if(!VX(r.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=nu(r)}else e=nu()}return n===void 0?t=h:t=m,Be(t,"NAME","uniform"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),CX(t,"state",HX(null),KVr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",HX(null)),Be(t,"PRNG",e)):(iu(t,"seed",u),iu(t,"seedLength",o),CX(t,"state",c,l),iu(t,"stateLength",f),iu(t,"byteLength",v),Be(t,"toJSON",p),Be(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=rUr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return zX(e,n,a)}function h(d,g){return WX(d)||WX(g)||d>=g?NaN:zX(e,d,g)}}DX.exports=tUr});var xX=s((hle,XX)=>{"use strict";var iUr=E6(),nUr=iUr();XX.exports=nUr});var ZX=s((qle,YX)=>{"use strict";var aUr=w(),JX=xX(),sUr=E6();aUr(JX,"factory",sUr);YX.exports=JX});var rx=s((yle,KX)=>{"use strict";var $X=D().isPrimitive,QX=y();function uUr(r,e){return $X(r)?$X(e)?null:new TypeError(QX("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(QX("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}KX.exports=uUr});var tx=s((ble,ex)=>{"use strict";var oUr=W(),vUr=R();function fUr(r,e,t){return t*oUr(-vUr(1-r()),1/e)}ex.exports=fUr});var N6=s((wle,fx)=>{"use strict";var ke=w(),su=P(),ix=M(),nx=_(),ax=L(),sx=O(),ux=T(),cUr=C(),uu=X().factory,ox=E(),lUr=B(),ou=y(),pUr=rx(),vx=tx();function gUr(){var r,e,t,i,n,a;if(arguments.length===0)t=uu();else if(arguments.length===1){if(e=arguments[0],!nx(e))throw new TypeError(ou("invalid argument. Options argument must be an object. Value: `%s`.",e));if(sx(e,"prng")){if(!ax(e.prng))throw new TypeError(ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=uu(e)}else{if(a=arguments[0],r=arguments[1],n=pUr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!nx(e))throw new TypeError(ou("invalid argument. Options argument must be an object. Value: `%s`.",e));if(sx(e,"prng")){if(!ax(e.prng))throw new TypeError(ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=uu(e)}else t=uu()}return r===void 0?i=h:i=m,ke(i,"NAME","weibull"),e&&e.prng?(ke(i,"seed",null),ke(i,"seedLength",null),ix(i,"state",ux(null),cUr),ke(i,"stateLength",null),ke(i,"byteLength",null),ke(i,"toJSON",ux(null)),ke(i,"PRNG",t)):(su(i,"seed",u),su(i,"seedLength",o),ix(i,"state",c,l),su(i,"stateLength",f),su(i,"byteLength",v),ke(i,"toJSON",p),ke(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=lUr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return vx(t,a,r)}function h(d,g){return ox(d)||ox(g)||d<=0||g<=0?NaN:vx(t,d,g)}}fx.exports=gUr});var lx=s((Ele,cx)=>{"use strict";var mUr=N6(),dUr=mUr();cx.exports=dUr});var mx=s((Nle,gx)=>{"use strict";var hUr=w(),px=lx(),qUr=N6();hUr(px,"factory",qUr);gx.exports=px});var hx=s((Ale,dx)=>{"use strict";var yUr=lr(),bUr=Ur().isPrimitive,wUr=y(),EUr=Ru();function NUr(r){if(bUr(r))return r;if(yUr(r))return EUr(r);throw new TypeError(wUr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}dx.exports=NUr});var yx=s((Ole,qx)=>{"use strict";var AUr=hx();qx.exports=AUr});var wx=s((Sle,bx)=>{"use strict";var k=ar(),OUr=RF().factory,SUr=WF().factory,TUr=cB().factory,IUr=ZB().factory,_Ur=Pk().factory,LUr=Xk().factory,PUr=Nj().factory,RUr=Dj().factory,FUr=Cn().factory,MUr=GC().factory,BUr=aG().factory,kUr=NG().factory,jUr=jG().factory,CUr=tV().factory,GUr=yV().factory,VUr=Ni().factory,UUr=MV().factory,HUr=KV().factory,WUr=NU().factory,zUr=nt().factory,DUr=GU().factory,XUr=aH().factory,xUr=NH().factory,JUr=oW().factory,YUr=SW().factory,ZUr=zW().factory,$Ur=ez().factory,QUr=mz().factory,KUr=X().factory,rHr=iD().factory,eHr=wD().factory,tHr=VD().factory,iHr=n6().factory,nHr=rX().factory,aHr=gX().factory,sHr=PX().factory,uHr=ZX().factory,oHr=mx().factory,vHr=yx();function fHr(r){return k(r,"arcsine",OUr),k(r,"bernoulli",SUr),k(r,"beta",TUr),k(r,"betaprime",IUr),k(r,"binomial",_Ur),k(r,"boxMuller",LUr),k(r,"cauchy",PUr),k(r,"chi",RUr),k(r,"chisquare",FUr),k(r,"cosine",MUr),k(r,"discreteUniform",BUr),k(r,"erlang",kUr),k(r,"exponential",jUr),k(r,"f",CUr),k(r,"frechet",GUr),k(r,"gamma",VUr),k(r,"geometric",UUr),k(r,"gumbel",HUr),k(r,"hypergeometric",WUr),k(r,"improvedZiggurat",zUr),k(r,"invgamma",DUr),k(r,"kumaraswamy",XUr),k(r,"laplace",xUr),k(r,"levy",JUr),k(r,"logistic",YUr),k(r,"lognormal",ZUr),k(r,"minstd",$Ur),k(r,"minstdShuffle",QUr),k(r,"mt19937",KUr),k(r,"negativeBinomial",rHr),k(r,"normal",eHr),k(r,"pareto1",tHr),k(r,"poisson",iHr),k(r,"rayleigh",nHr),k(r,"t",aHr),k(r,"triangular",sHr),k(r,"uniform",uHr),k(r,"weibull",oHr),r.base={},k(r.base,"normalizeSeed",vHr),r}bx.exports=fHr});var Nx=s((Tle,Ex)=>{"use strict";var cHr=_(),vu=O(),lHr=Ur().isPrimitive,pHr=ee().isPrimitive,gHr=Ve().isPrimitive,mHr=Vo().isPrimitive,Wn=y();function dHr(r,e){return cHr(e)?vu(e,"period")&&(r.period=e.period,!pHr(e.period))?new TypeError(Wn("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):vu(e,"amplitude")&&(r.amplitude=e.amplitude,!mHr(e.amplitude))?new TypeError(Wn("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):vu(e,"offset")&&(r.offset=e.offset,!lHr(e.offset))?new TypeError(Wn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):vu(e,"iter")&&(r.iter=e.iter,!gHr(e.iter))?new TypeError(Wn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(Wn("invalid argument. Options argument must be an object. Value: `%s`.",e))}Ex.exports=dHr});var Tx=s((Ile,Sx)=>{"use strict";var A6=w(),Ax=aa(),hHr=p3(),qHr=Ya(),yHr=Ja(),bHr=Fr(),wHr=Nx();function Ox(r){var e,t,i,n,a,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=wHr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=bHr/e.period,o=e.amplitude/yHr,f=0,t={},A6(t,"next",v),A6(t,"return",c),Ax&&A6(t,Ax,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*qHr(hHr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return Ox(e)}}Sx.exports=Ox});var _x=s((_le,Ix)=>{"use strict";var EHr=Tx();Ix.exports=EHr});var Px=s((Lle,Lx)=>{"use strict";var NHr=ar(),AHr=_x();function OHr(r){return NHr(r,"iterSawtoothWave",AHr),r}Lx.exports=OHr});var Fx=s((Ple,Rx)=>{"use strict";var SHr=17976931348623157e292;Rx.exports=SHr});var fu=s((Rle,Mx)=>{"use strict";var THr=709.782712893384;Mx.exports=THr});var kx=s((Fle,Bx)=>{"use strict";var IHr=nr();function _Hr(r,e){var t,i,n,a;if(n=IHr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}Bx.exports=_Hr});var Cx=s((Mle,jx)=>{"use strict";function LHr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}jx.exports=LHr});var Vx=s((Ble,Gx)=>{"use strict";function PHr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Gx.exports=PHr});var Hx=s((kle,Ux)=>{"use strict";function RHr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}Ux.exports=RHr});var zx=s((jle,Wx)=>{"use strict";function FHr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}Wx.exports=FHr});var Xx=s((Cle,Dx)=>{"use strict";function MHr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}Dx.exports=MHr});var Jx=s((Gle,xx)=>{"use strict";function BHr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}xx.exports=BHr});var Zx=s((Vle,Yx)=>{"use strict";function kHr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Yx.exports=kHr});var Qx=s((Ule,$x)=>{"use strict";function jHr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}$x.exports=jHr});var tJ=s((Hle,eJ)=>{"use strict";var CHr=E(),Kx=nr(),GHr=ie(),VHr=I(),UHr=G(),HHr=Cx(),WHr=Vx(),zHr=Hx(),DHr=zx(),XHr=Xx(),xHr=Jx(),JHr=Zx(),YHr=Qx(),cu=1e-300,ZHr=13877787807814457e-33,rJ=.8450629115104675,$Hr=.12837916709551256,QHr=1,KHr=-.0023621185607526594,rWr=1,eWr=-.009864944034847148,tWr=1,iWr=-.0098649429247001,nWr=1;function aWr(r){var e,t,i,n,a,u,o,f;if(CHr(r))return NaN;if(r===VHr)return 0;if(r===UHr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<ZHr?1-r:(i=r*r,n=$Hr+i*HHr(i),a=QHr+i*WHr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=KHr+a*zHr(a),f=rWr+a*DHr(a),e?1+rJ+o/f:1-rJ-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=eWr+a*XHr(a),a=tWr+a*xHr(a);else{if(r<-6)return 2-cu;n=iWr+a*JHr(a),a=nWr+a*YHr(a)}return i=GHr(t,0),n=Kx(-(i*i)-.5625)*Kx((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-cu:cu*cu}eJ.exports=aWr});var Ht=s((Wle,iJ)=>{"use strict";var sWr=tJ();iJ.exports=sWr});var sJ=s((zle,aJ)=>{"use strict";var uWr=Ht(),nJ=V(),oWr=nr(),vWr=Fr();function fWr(r,e){var t,i,n,a,u;if(a=uWr(nJ(e)),a!==0&&r>1){for(i=oWr(-e)/nJ(vWr*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}aJ.exports=fWr});var O6=s((Dle,uJ)=>{"use strict";var cWr=-708.3964185322641;uJ.exports=cWr});var cJ=s((Xle,fJ)=>{"use strict";var Vi=nr(),lu=W(),lWr=R(),oJ=fu(),vJ=O6();function pWr(r,e){var t,i;return i=r*lWr(e),e>=1?i<oJ&&-e>vJ?t=lu(e,r)*Vi(-e):r>=1?t=lu(e/Vi(e/r),r):t=Vi(i-e):i>vJ?t=lu(e,r)*Vi(-e):e/r<oJ?t=lu(e/Vi(e/r),r):t=Vi(i-e),t}fJ.exports=pWr});var S6=s((xle,lJ)=>{"use strict";function gWr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}lJ.exports=gWr});var gJ=s((Jle,pJ)=>{"use strict";var mWr=Function;pJ.exports=mWr});var dJ=s((Yle,mJ)=>{"use strict";var dWr=gJ();mJ.exports=dWr});var qJ=s((Zle,hJ)=>{"use strict";var hWr=dJ(),qWr=S6();function yWr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new hWr(e)();function a(u){return qWr(r,u)}}hJ.exports=yWr});var wJ=s(($le,bJ)=>{"use strict";var bWr=w(),yJ=S6(),wWr=qJ();bWr(yJ,"factory",wWr);bJ.exports=yJ});var Wt=s((Qle,EJ)=>{"use strict";var EWr=2220446049250313e-31;EJ.exports=EWr});var AJ=s((Kle,NJ)=>{"use strict";var NWr=eval;NJ.exports=NWr});var SJ=s((r8e,OJ)=>{"use strict";var AWr=AJ();function OWr(){var r;try{AWr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}OJ.exports=OWr});var T6=s((e8e,TJ)=>{"use strict";var SWr=SJ();TJ.exports=SWr});var _J=s((t8e,IJ)=>{"use strict";var pu=x(),TWr=Wt(),IWr=1e6;function _Wr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||TWr,a=o.maxTerms||IWr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,pu(i*u)>=pu(n)||--a===0)break}else do n=r(),u+=n;while(pu(i*u)<pu(n)&&--a);return u}IJ.exports=_Wr});var RJ=s((i8e,PJ)=>{"use strict";var LJ=x(),LWr=Wt(),PWr=1e6;function RWr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||LWr,n=u.maxTerms||PWr,a=u.initialValue||0;do i=r(),a+=i;while(LJ(t*a)<LJ(i)&&--n);return a}PJ.exports=RWr});var gu=s((n8e,FJ)=>{"use strict";var FWr=T6(),MWr=_J(),BWr=RJ(),I6;FWr()?I6=MWr:I6=BWr;FJ.exports=I6});var BJ=s((a8e,MJ)=>{"use strict";function kWr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}MJ.exports=kWr});var jJ=s((s8e,kJ)=>{"use strict";var jWr=x(),CWr=R(),GWr=Wt(),VWr=gu(),UWr=BJ();function HWr(r){var e,t;return r<=-1?NaN:(t=jWr(r),t>.95?CWr(1+r)-r:t<GWr?-r*r/2:(e={initialValue:-r},VWr(UWr(r),e)))}kJ.exports=HWr});var GJ=s((u8e,CJ)=>{"use strict";var WWr=jJ();CJ.exports=WWr});var UJ=s((o8e,VJ)=>{"use strict";function zWr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}VJ.exports=zWr});var WJ=s((v8e,HJ)=>{"use strict";function DWr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}HJ.exports=DWr});var DJ=s((f8e,zJ)=>{"use strict";function XWr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}zJ.exports=XWr});var xJ=s((c8e,XJ)=>{"use strict";function xWr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}XJ.exports=xWr});var YJ=s((l8e,JJ)=>{"use strict";function JWr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}JJ.exports=JWr});var $J=s((p8e,ZJ)=>{"use strict";function YWr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}ZJ.exports=YWr});var KJ=s((g8e,QJ)=>{"use strict";function ZWr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}QJ.exports=ZWr});var eY=s((m8e,rY)=>{"use strict";function $Wr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}rY.exports=$Wr});var iY=s((d8e,tY)=>{"use strict";function QWr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}tY.exports=QWr});var aY=s((h8e,nY)=>{"use strict";var KWr=wJ(),rzr=GJ(),ezr=Ht(),_6=V(),tzr=nr(),izr=$e(),nzr=UJ(),azr=WJ(),szr=DJ(),uzr=xJ(),ozr=YJ(),vzr=$J(),fzr=KJ(),czr=eY(),lzr=iY(),zr=[0,0,0,0,0,0,0,0,0,0];function pzr(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-rzr(i),a=r*n,u=_6(2*n),e<r&&(u=-u),zr[0]=nzr(u),zr[1]=azr(u),zr[2]=szr(u),zr[3]=uzr(u),zr[4]=ozr(u),zr[5]=vzr(u),zr[6]=fzr(u),zr[7]=czr(u),zr[8]=lzr(u),zr[9]=-.0005967612901927463,t=KWr(zr,1/r),t*=tzr(-a)/_6(izr*r),e<r&&(t=-t),t+=ezr(_6(a))/2,t}nY.exports=pzr});var uY=s((q8e,sY)=>{"use strict";function gzr(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}sY.exports=gzr});var vY=s((y8e,oY)=>{"use strict";var mzr=gu(),dzr=uY();function hzr(r,e,t){var i,n;return t=t||0,n=dzr(r,e),i=mzr(n,{initialValue:t}),i}oY.exports=hzr});var cY=s((b8e,fY)=>{"use strict";function qzr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}fY.exports=qzr});var pY=s((w8e,lY)=>{"use strict";var yzr=cY();lY.exports=yzr});var mY=s((E8e,gY)=>{"use strict";var bzr=pY();gY.exports=bzr});var qY=s((N8e,hY)=>{"use strict";var wzr=w1(),dY=E(),L6=G();function Ezr(r,e){return dY(r)||dY(e)?NaN:r===L6||e===L6?L6:r===e&&r===0?wzr(r)?r:e:r<e?r:e}hY.exports=Ezr});var bY=s((A8e,yY)=>{"use strict";var Nzr=qY();yY.exports=Nzr});var EY=s((O8e,wY)=>{"use strict";var Azr=10.900511;wY.exports=Azr});var P6=s((S8e,NY)=>{"use strict";var Ozr=2.718281828459045;NY.exports=Ozr});var SY=s((T8e,OY)=>{"use strict";var Szr=mY(),Tzr=Pn(),Izr=hi(),_zr=Ye(),Lzr=V(),Pzr=x(),wt=nr(),zn=W(),R6=_1(),F6=bY(),AY=R(),mu=fu(),Dn=O6(),M6=EY(),Rzr=P6();function Fzr(r,e){var t,i,n,a,u,o,f;return n=r+M6-.5,f=(e-r-M6+.5)/n,r<1?e<=Dn?wt(r*AY(e)-e-Tzr(r)):zn(e,r)*wt(-e)/Izr(r):(Pzr(f*f*r)<=100&&r>150?(t=r*(_zr(f)-f)+e*(.5-M6)/n,t=wt(t)):(a=r*AY(e/n),u=r-e,F6(a,u)<=Dn||R6(a,u)>=mu?(i=u/r,F6(a,u)/2>Dn&&R6(a,u)/2<mu?(o=zn(e/n,r/2)*wt(u/2),t=o*o):F6(a,u)/4>Dn&&R6(a,u)/4<mu&&e>r?(o=zn(e/n,r/4)*wt(u/4),t=o*o,t*=t):i>Dn&&i<mu?t=zn(e*wt(i)/n,r):t=wt(a+u)):t=zn(e/n,r)*wt(u)),t*=Lzr(n/Rzr)/Szr(r),t)}OY.exports=Fzr});var IY=s((I8e,TY)=>{"use strict";var Mzr=.34657359027997264;TY.exports=Mzr});var LY=s((_8e,_Y)=>{"use strict";function Bzr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}_Y.exports=Bzr});var kY=s((L8e,BY)=>{"use strict";var kzr=E(),PY=tr(),B6=ne(),jzr=mi(),RY=I(),Czr=G(),FY=Yr(),Gzr=IY(),Vzr=LY(),Uzr=709.782712893384,k6=.6931471803691238,j6=19082149292705877e-26,MY=1.4426950408889634,Hzr=38.816242111356935,Wzr=1.0397207708399179;function zzr(r){var e,t,i,n,a,u,o,f,v,c,l,p,m;if(r===RY||kzr(r))return r;if(r===Czr)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=Hzr){if(i)return-1;if(f>=Uzr)return RY}if(u=PY(f)|0,f>Gzr)f<Wzr?i?(n=r+k6,a=-j6,m=-1):(n=r-k6,a=j6,m=1):(i?m=MY*r-.5:m=MY*r+.5,m|=0,l=m,n=r-l*k6,a=l*j6),r=n-a,c=n-r-a;else{if(u<1016070144)return r;m=0}return e=.5*r,v=r*e,o=1+v*Vzr(v),l=3-o*e,p=v*((o-l)/(6-r*l)),m===0?r-(r*p-v):(t=jzr(FY+m<<20,0),p=r*(p-c)-c,p-=v,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(f=1-(p-r),m===1024?(n=PY(f)+(m<<20)|0,f=B6(f,n)):f*=t,f-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=B6(l,n),f=l-(p-r)):(n=FY-m<<20|0,l=B6(l,n),f=r-(p+l),f+=1),f*=t,f))}BY.exports=zzr});var C6=s((P8e,jY)=>{"use strict";var Dzr=kY();jY.exports=Dzr});var UY=s((R8e,VY)=>{"use strict";var CY=E(),GY=x(),Xzr=C6(),xzr=R(),Jzr=W(),Yzr=a0();function Zzr(r,e){var t;if(CY(r)||CY(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((GY(e*(r-1))<.5||GY(e)<.2)&&(t=xzr(r)*e,t<.5))return Xzr(t)}else if(Yzr(e)!==e)return NaN;return Jzr(r,e)-1}VY.exports=Zzr});var WY=s((F8e,HY)=>{"use strict";var $zr=UY();HY.exports=$zr});var DY=s((M8e,zY)=>{"use strict";function Qzr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}zY.exports=Qzr});var xY=s((B8e,XY)=>{"use strict";function Kzr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}XY.exports=Kzr});var YY=s((k8e,JY)=>{"use strict";function rDr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}JY.exports=rDr});var $Y=s((j8e,ZY)=>{"use strict";var G6=R(),eDr=Wt(),tDr=DY(),iDr=xY(),nDr=YY(),aDr=.15896368026733398,sDr=.5281534194946289,uDr=.45201730728149414;function oDr(r,e,t){var i,n,a,u;if(r<eDr)return-G6(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=G6(r);while(r>=3);t=r-2}return a=t*(r+1),u=tDr(t),n+=a*aDr+a*u,n}return r<1&&(n+=-G6(r),t=e,e=r,r+=1),r<=1.5?(a=iDr(e),i=e*t,n+=i*sDr+i*a,n):(a=t*e,u=nDr(-t),n+=a*uDr+a*u,n)}ZY.exports=oDr});var tZ=s((C8e,eZ)=>{"use strict";var QY=hi(),KY=C6(),vDr=Ye(),fDr=E(),rZ=$Y();function cDr(r){return fDr(r)?NaN:r<0?r<-.5?QY(1+r)-1:KY(-vDr(r)+rZ(r+2,r+1,r)):r<2?KY(rZ(r+1,r,r-1)):QY(1+r)-1}eZ.exports=cDr});var nZ=s((G8e,iZ)=>{"use strict";var lDr=tZ();iZ.exports=lDr});var sZ=s((V8e,aZ)=>{"use strict";function pDr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}aZ.exports=pDr});var oZ=s((U8e,uZ)=>{"use strict";var gDr=WY(),mDr=gu(),dDr=nZ(),hDr=sZ();function qDr(r,e,t){var i,n,a,u,o;return n=dDr(r),a=(n+1)/r,u=gDr(e,r),n-=u,n/=r,o=hDr(r,e),u+=1,i=t?a:0,n=-u*mDr(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}uZ.exports=qDr});var V6=s((H8e,vZ)=>{"use strict";var yDr=11754943508222875e-54;vZ.exports=yDr});var cZ=s((W8e,fZ)=>{"use strict";var du=x(),$r=V6(),bDr=Wt(),wDr=1e6;function EDr(r,e,t){var i,n,a,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],a=v[0],u===0&&(u=$r),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=$r),o=v[1]+v[0]/o,o===0&&(o=$r),f=1/f,n=o*f,u*=n);while(du(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=$r),o=v[1]+v[0]/o,o===0&&(o=$r),f=1/f,n=o*f,u*=n);while(v&&du(n-1)>e&&--t);return a/u}function NDr(r,e,t){var i,n,a,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=$r),u=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=$r),u=f[1]+f[0]/u,u===0&&(u=$r),o=1/o,n=u*o,a*=n);while(f&&du(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=$r),u=f[1]+f[0]/u,u===0&&(u=$r),o=1/o,n=u*o,a*=n);while(f&&du(n-1)>e&&--t);return a}function ADr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||wDr,n=i.tolerance||bDr,i.keep?NDr(r,n,t):EDr(r,n,t)}fZ.exports=ADr});var gZ=s((z8e,pZ)=>{"use strict";var lZ=x(),ODr=Wt(),Ui=V6(),SDr=1e6;function TDr(r,e,t){var i,n,a,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=Ui),a=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=Ui),a=f[1]+f[0]/a,a===0&&(a=Ui),u=1/u,i=a*u,o*=i);while(f&&lZ(i-1)>e&&--t);return n/o}function IDr(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=Ui),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=Ui),n=o[1]+o[0]/n,n===0&&(n=Ui),a=1/a,i=n*a,u*=i);while(o&&lZ(i-1)>e&&--t);return u}function _Dr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||ODr,t=i.maxIter||SDr,i.keep?IDr(r,n,t):TDr(r,n,t)}pZ.exports=_Dr});var dZ=s((D8e,mZ)=>{"use strict";var LDr=T6(),PDr=cZ(),RDr=gZ(),U6;LDr()?U6=PDr:U6=RDr;mZ.exports=U6});var qZ=s((X8e,hZ)=>{"use strict";function FDr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}hZ.exports=FDr});var bZ=s((x8e,yZ)=>{"use strict";var MDr=dZ(),BDr=qZ();function kDr(r,e){var t=BDr(r,e);return 1/(e-r+1+MDr(t))}yZ.exports=kDr});var LZ=s((J8e,_Z)=>{"use strict";var jDr=Pn(),CDr=J(),Xn=hi(),wZ=x(),GDr=nr(),EZ=W(),Dr=R(),VDr=O1(),NZ=Fx(),UDr=E1(),AZ=fu(),HDr=I(),WDr=kx(),zDr=sJ(),OZ=cJ(),DDr=aY(),H6=vY(),SZ=SY(),XDr=oZ(),TZ=bZ(),xDr=170;function IZ(r,e,t,i){var n,a,u,o,f,v,c,l,p,m,h,d,g,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=xDr&&!a)return l&&e*4<r?(p=e*Dr(r)-r,p+=Dr(TZ(e,r))):!l&&e>4*r?(p=e*Dr(r)-r,o=0,p+=Dr(H6(e,r,o)/e)):(p=IZ(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Dr(p)-e+(e-.5)*Dr(e),p+=Dr(UDr)):(p=e*Dr(r)-r,o=0,p+=Dr(H6(e,r,o)/e)):p=Dr(p)+jDr(e)),p>AZ?HDr:GDr(p);switch(c=e<30&&e<=r+1&&r<AZ,c?(q=CDr(e),m=q===e,f=m?!1:wZ(q-e)===.5):m=f=!1,m&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<VDr&&e>1?u=6:r<.5?-.4/Dr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,a&&e>20&&(h=wZ((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=WDr(e,r),a===!1&&(p*=Xn(e));break;case 1:p=zDr(e,r),a===!1&&(p*=Xn(e));break;case 2:p=a?SZ(e,r):OZ(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:Xn(e),a||p>=1||NZ*p>o?(o/=p,a||e<1||NZ/e>o?(o*=-e,n=!0):o=0):o=0)),p*=H6(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=XDr(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?SZ(e,r):OZ(e,r),p!==0&&(p*=TZ(e,r));break;case 5:p=DDr(e,r),r>=e&&(l=!l);break;case 6:p=a?EZ(r,e)/Xn(e+1):EZ(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:Xn(e),p=d-p),p}_Z.exports=IZ});var W6=s((Y8e,PZ)=>{"use strict";var JDr=LZ();PZ.exports=JDr});var FZ=s((Z8e,RZ)=>{"use strict";var YDr=W6(),z6=E(),ZDr=I();function $Dr(r,e,t){return z6(r)||z6(e)||z6(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===ZDr?1:YDr(r*t,e)}RZ.exports=$Dr});var kZ=s(($8e,BZ)=>{"use strict";var QDr=T(),KDr=U0().factory,rXr=W6(),MZ=E(),eXr=I();function tXr(r,e){if(MZ(r)||MZ(e)||r<0||e<=0)return QDr(NaN);if(r===0)return KDr(0);return t;function t(i){return i<=0?0:i===eXr?1:rXr(i*e,r)}}BZ.exports=tXr});var D6=s((Q8e,CZ)=>{"use strict";var iXr=w(),jZ=FZ(),nXr=kZ();iXr(jZ,"factory",nXr);CZ.exports=jZ});var VZ=s((K8e,GZ)=>{"use strict";var aXr=D6();function sXr(r,e){return aXr(r,e/2,.5)}GZ.exports=sXr});var HZ=s((r7e,UZ)=>{"use strict";var uXr=D6().factory;function oXr(r){return uXr(r/2,.5)}UZ.exports=oXr});var DZ=s((e7e,zZ)=>{"use strict";var vXr=w(),WZ=VZ(),fXr=HZ();vXr(WZ,"factory",fXr);zZ.exports=WZ});var YZ=s((t7e,JZ)=>{"use strict";var cXr=_(),lXr=O(),pXr=wa(),XZ=y(),xZ=["values","indices","*"];function gXr(r,e){return cXr(e)?lXr(e,"returns")&&(r.returns=e.returns,pXr(xZ,r.returns)===-1)?new TypeError(XZ('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",xZ.join('", "'),r.returns)):null:new TypeError(XZ("invalid argument. Options argument must be an object. Value: `%s`.",e))}JZ.exports=gXr});var $Z=s((i7e,ZZ)=>{"use strict";var mXr=O();function dXr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),mXr(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}ZZ.exports=dXr});var KZ=s((n7e,QZ)=>{"use strict";var hXr=O();function qXr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),hXr(t,n)?t[n].push(a):t[n]=[a];return t}QZ.exports=qXr});var e$=s((a7e,r$)=>{"use strict";var yXr=O();function bXr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),yXr(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}r$.exports=bXr});var a$=s((s7e,n$)=>{"use strict";var t$=Vr(),i$=y(),wXr=YZ(),EXr=$Z(),NXr=KZ(),AXr=e$();function OXr(r,e,t){var i,n,a;if(!t$(r))throw new TypeError(i$("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=wXr(i,e),n)throw n;a=t}if(!t$(a))throw new TypeError(i$("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?EXr(r,a):i.returns==="indices"?NXr(r,a):AXr(r,a)}n$.exports=OXr});var u$=s((u7e,s$)=>{"use strict";var SXr=a$();s$.exports=SXr});var v$=s((o7e,o$)=>{"use strict";function TXr(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}o$.exports=TXr});var l$=s((v7e,c$)=>{"use strict";var IXr=lr(),_Xr=j().isPrimitive,LXr=_(),PXr=or(),f$=O(),X6=y();function RXr(r,e){return LXr(e)?f$(e,"alpha")&&(r.alpha=e.alpha,!_Xr(r.alpha)||PXr(r.alpha))?new TypeError(X6("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):f$(e,"groups")&&(r.groups=e.groups,!IXr(r.groups))?new TypeError(X6("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(X6("invalid argument. Options argument must be an object. Value: `%s`.",e))}c$.exports=RXr});var y$=s((f7e,q$)=>{"use strict";var p$=E(),hu=Rr(),g$=W(),FXr=x(),m$=a1(),MXr=di(),d$=Ga(),BXr=D2(),kXr=Va(),jXr=MXr+1,h$=1e308;function CXr(r,e){var t,i;return p$(r)||p$(e)||hu(e)?NaN:hu(r)||r===0||e<kXr||FXr(r)>jXr&&e<=0?r:e>d$?0*r:e<BXr?(t=g$(10,-(e+d$)),i=r*h$*t,hu(i)?r:m$(i)/h$/t):(t=g$(10,-e),i=r*t,hu(i)?r:m$(i)/t)}q$.exports=CXr});var w$=s((c7e,b$)=>{"use strict";var GXr=y$();b$.exports=GXr});var A$=s((l7e,N$)=>{"use strict";var VXr=ee(),UXr=_(),HXr=cr().isPrimitive,E$=O(),x6=y(),J6=w$();function WXr(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!UXr(r))throw new TypeError(x6("invalid argument. First argument must be an object. Value: `%s`.",r));if(E$(r,"digits")){if(!VXr(r.digits))throw new TypeError(x6("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(E$(r,"decision")){if(!HXr(r.decision))throw new TypeError(x6("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+J6(this.pValue,-t)+`
`,i+="    statistic: "+J6(this.statistic,-t)+`
`,i+="    df: "+J6(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}N$.exports=WXr});var T$=s((p7e,S$)=>{"use strict";var zXr=Vr(),DXr=_(),zt=ar(),XXr=un(),qu=y(),xXr=DZ(),JXr=u$(),O$=R(),YXr=v$(),ZXr=l$(),$Xr=A$();function QXr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,m,h,d,g,q,N,A;if(f=[],e=arguments.length,v={},DXr(arguments[e-1])&&(r=arguments[e-1],e-=1,m=ZXr(v,r),m))throw m;if(v.groups){if(n=JXr(arguments[0],v.groups),i=XXr(n),e=i.length,e<2)throw new Error(qu("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)f.push(n[i[A]])}else for(A=0;A<e;A++)f.push(arguments[A]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),A=0;A<e;A++){if(p=f[A],!zXr(p))throw new TypeError(qu("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(qu("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[A]=p.length-1,u+=q[A],t+=1/q[A],N[A]=YXr(p),o+=q[A]*N[A],h+=q[A]*O$(N[A])}if(o/=u,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(qu("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*O$(o)-h,l/=1+(t-1/u)/(3*(e-1)),g=e-1,c=1-xXr(l,g),d={},zt(d,"rejected",c<=a),zt(d,"alpha",a),zt(d,"pValue",c),zt(d,"statistic",l),zt(d,"df",g),zt(d,"method","Bartlett's test of equal variances"),zt(d,"print",$Xr),d}S$.exports=QXr});var _$=s((g7e,I$)=>{"use strict";var KXr=T$();I$.exports=KXr});var P$=s((m7e,L$)=>{"use strict";var Y6=E(),rxr=Qe();function exr(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,v=1,Y6(a)===!1)for(v;v<r;v++){if(u+=t,f=e[u],Y6(f)){a=f;break}(f>a||f===a&&rxr(f))&&(a=f),i[o]=a,o+=n}if(Y6(a))for(v;v<r;v++)i[o]=a,o+=n;return i}L$.exports=exr});var F$=s((d7e,R$)=>{"use strict";var Z6=E(),txr=Qe();function ixr(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=a,l=1,Z6(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],Z6(c)){o=c;break}(c>o||c===o&&txr(c))&&(o=c),n[v]=o,v+=a}if(Z6(o))for(l;l<r;l++)n[v]=o,v+=a;return n}R$.exports=ixr});var k$=s((h7e,B$)=>{"use strict";var nxr=w(),M$=P$(),axr=F$();nxr(M$,"ndarray",axr);B$.exports=M$});var C$=s((q7e,j$)=>{"use strict";var sxr=k$();j$.exports=sxr});var V$=s((y7e,G$)=>{"use strict";var uxr=E(),oxr=Qe();function vxr(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],uxr(a))return a;(a>i||a===i&&oxr(a))&&(i=a)}return i}G$.exports=vxr});var H$=s((b7e,U$)=>{"use strict";var fxr=E(),cxr=Qe();function lxr(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],fxr(u))return u;(u>n||u===n&&cxr(u))&&(n=u)}return n}U$.exports=lxr});var D$=s((w7e,z$)=>{"use strict";var pxr=w(),W$=V$(),gxr=H$();pxr(W$,"ndarray",gxr);z$.exports=W$});var x$=s((E7e,X$)=>{"use strict";var mxr=D$();X$.exports=mxr});var Z$=s((N7e,Y$)=>{"use strict";var J$=E(),dxr=Qe();function hxr(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(a=e[u],J$(a))return a;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],J$(f))return f;(f>a||f===a&&dxr(f))&&(a=f)}return a}Y$.exports=hxr});var K$=s((A7e,Q$)=>{"use strict";var $$=E(),qxr=Qe();function yxr(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],$$(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],$$(c))return c;(c>o||c===o&&qxr(c))&&(o=c)}return o}Q$.exports=yxr});var tQ=s((O7e,eQ)=>{"use strict";var bxr=w(),rQ=Z$(),wxr=K$();bxr(rQ,"ndarray",wxr);eQ.exports=rQ});var nQ=s((S7e,iQ)=>{"use strict";var Exr=Ht(),Nxr=V(),$6=E();function Axr(r,e,t){var i,n;return $6(r)||$6(e)||$6(t)||t<0?NaN:t===0?r<e?0:1:(i=t*Nxr(2),n=r-e,.5*Exr(-n/i))}iQ.exports=Axr});var sQ=s((T7e,aQ)=>{"use strict";var Oxr=T(),Sxr=U0().factory,Q6=E(),Txr=V(),Ixr=Ht();function _xr(r,e){var t;if(Q6(r)||Q6(e)||e<0)return Oxr(NaN);if(e===0)return Sxr(r);return t=e*Txr(2),i;function i(n){var a;return Q6(n)?NaN:(a=n-r,.5*Ixr(-a/t))}}aQ.exports=_xr});var vQ=s((I7e,oQ)=>{"use strict";var Lxr=w(),uQ=nQ(),Pxr=sQ();Lxr(uQ,"factory",Pxr);oQ.exports=uQ});var lQ=s((_7e,cQ)=>{"use strict";var fQ=E(),Rxr=R(),Fxr=$e(),Mxr=P6();function Bxr(r,e){return fQ(r)||fQ(e)||e<=0?NaN:.5*Rxr(Fxr*Mxr*e*e)}cQ.exports=Bxr});var gQ=s((L7e,pQ)=>{"use strict";var kxr=lQ();pQ.exports=kxr});var hQ=s((P7e,dQ)=>{"use strict";var mQ=E();function jxr(r,e){return mQ(r)||mQ(e)||e<=0?NaN:0}dQ.exports=jxr});var yQ=s((R7e,qQ)=>{"use strict";var Cxr=hQ();qQ.exports=Cxr});var wQ=s((F7e,bQ)=>{"use strict";var Gxr=J(),Vxr=[Uxr,Hxr,Wxr,zxr,Dxr,Xxr,xxr,Jxr,Yxr,Zxr,$xr,Qxr,Kxr,rJr,eJr,tJr,iJr,nJr,aJr,sJr,uJr,oJr,vJr,fJr,cJr,lJr,pJr,gJr,mJr,dJr,hJr,qJr,yJr,bJr,wJr,EJr,NJr,AJr,OJr,SJr,TJr,IJr,_Jr,LJr,PJr,RJr,FJr,MJr,BJr,kJr,jJr,CJr,GJr,VJr,UJr,HJr,WJr,zJr,DJr,XJr,xJr,JJr,YJr,ZJr,$Jr,QJr,KJr,rYr,eYr,tYr,iYr,nYr,aYr,sYr,uYr,oYr,vYr,fYr,cYr,lYr,pYr,gYr,mYr,dYr,hYr,qYr,yYr,bYr,wYr,EYr,NYr,AYr,OYr,SYr,TYr,IYr,_Yr,LYr,PYr,RYr,FYr];function Uxr(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function Hxr(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function Wxr(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function zxr(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function Dxr(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function Xxr(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function xxr(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function Jxr(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function Yxr(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function Zxr(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function $xr(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function Qxr(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function Kxr(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function rJr(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function eJr(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function tJr(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function iJr(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function nJr(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function aJr(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function sJr(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function uJr(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function oJr(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function vJr(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function fJr(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function cJr(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function lJr(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function pJr(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function gJr(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function mJr(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function dJr(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function hJr(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function qJr(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function yJr(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function bJr(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function wJr(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function EJr(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function NJr(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function AJr(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function OJr(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function SJr(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function TJr(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function IJr(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function _Jr(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function LJr(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function PJr(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function RJr(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function FJr(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function MJr(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function BJr(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function kJr(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function jJr(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function CJr(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function GJr(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function VJr(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function UJr(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function HJr(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function WJr(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function zJr(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function DJr(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function XJr(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function xJr(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function JJr(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function YJr(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function ZJr(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function $Jr(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function QJr(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function KJr(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function rYr(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function eYr(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function tYr(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function iYr(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function nYr(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function aYr(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function sYr(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function uYr(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function oYr(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function vYr(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function fYr(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function cYr(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function lYr(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function pYr(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function gYr(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function mYr(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function dYr(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function hYr(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function qYr(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function yYr(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function bYr(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function wYr(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function EYr(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function NYr(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function AYr(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function OYr(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function SYr(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function TYr(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function IYr(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function _Yr(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function LYr(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function PYr(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function RYr(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function FYr(){return 1}function MYr(r){var e=Gxr(r),t=Vxr[e];return t(2*r-(2*e+1))}bQ.exports=MYr});var SQ=s((M7e,OQ)=>{"use strict";var EQ=nr(),BYr=I(),NQ=wQ(),AQ=.5641895835477563;function kYr(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?AQ/r:(e=r*r,AQ*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):NQ(400/(4+r)):r<-26.7?BYr:(e=r*r,r<-6.1?2*EQ(e):2*EQ(e)-NQ(400/(4-r)))}OQ.exports=kYr});var K6=s((B7e,TQ)=>{"use strict";var jYr=SQ();TQ.exports=jYr});var LQ=s((k7e,_Q)=>{"use strict";var CYr=R(),GYr=Ye(),VYr=za(),UYr=Ht(),HYr=K6(),WYr=G(),r4=E(),IQ=.7071067811865475;function zYr(r,e,t){var i;return r4(r)||r4(e)||r4(t)||t<0?NaN:t===0?r<e?WYr:0:(i=(r-e)/t,i<-1?CYr(HYr(-i*IQ)/2)-VYr(i)/2:GYr(-UYr(i*IQ)/2))}_Q.exports=zYr});var FQ=s((j7e,RQ)=>{"use strict";var PQ=E(),DYr=G();function XYr(r,e){return PQ(r)||PQ(e)?NaN:r<e?DYr:0}RQ.exports=XYr});var kQ=s((C7e,BQ)=>{"use strict";var xYr=T(),MQ=E(),JYr=G();function YYr(r){if(MQ(r))return xYr(NaN);return e;function e(t){return MQ(t)?NaN:t<r?JYr:0}}BQ.exports=YYr});var GQ=s((G7e,CQ)=>{"use strict";var ZYr=w(),jQ=FQ(),$Yr=kQ();ZYr(jQ,"factory",$Yr);CQ.exports=jQ});var WQ=s((V7e,HQ)=>{"use strict";var QYr=T(),KYr=GQ().factory,VQ=E(),rZr=Ye(),eZr=za(),tZr=Ht(),iZr=K6(),nZr=R(),UQ=.7071067811865475;function aZr(r,e){if(VQ(r)||VQ(e)||e<0)return QYr(NaN);if(e===0)return KYr(r);return t;function t(i){var n=(i-r)/e;return n<-1?nZr(iZr(-n*UQ)/2)-eZr(n)/2:rZr(-tZr(n*UQ)/2)}}HQ.exports=aZr});var XQ=s((U7e,DQ)=>{"use strict";var sZr=w(),zQ=LQ(),uZr=WQ();sZr(zQ,"factory",uZr);DQ.exports=zQ});var e4=s((H7e,xQ)=>{"use strict";var oZr=1.8378770664093456;xQ.exports=oZr});var ZQ=s((W7e,YQ)=>{"use strict";var vZr=R(),JQ=W(),fZr=e4(),cZr=G(),lZr=I(),t4=E();function pZr(r,e,t){var i,n,a;return t4(r)||t4(e)||t4(t)||t<0?NaN:t===0?r===e?lZr:cZr:(i=JQ(t,2),n=-.5*(2*vZr(t)+fZr),a=-1/(2*i),n+a*JQ(r-e,2))}YQ.exports=pZr});var KQ=s((z7e,QQ)=>{"use strict";var gZr=I(),mZr=G(),$Q=E();function dZr(r,e){return $Q(r)||$Q(e)?NaN:r===e?gZr:mZr}QQ.exports=dZr});var tK=s((D7e,eK)=>{"use strict";var hZr=T(),qZr=I(),yZr=G(),rK=E();function bZr(r){if(rK(r))return hZr(NaN);return e;function e(t){return rK(t)?NaN:t===r?qZr:yZr}}eK.exports=bZr});var aK=s((X7e,nK)=>{"use strict";var wZr=w(),iK=KQ(),EZr=tK();wZr(iK,"factory",EZr);nK.exports=iK});var vK=s((x7e,oK)=>{"use strict";var NZr=T(),AZr=aK().factory,OZr=e4(),sK=E(),uK=W(),SZr=R();function TZr(r,e){var t,i,n;if(sK(r)||sK(e)||e<0)return NZr(NaN);if(e===0)return AZr(r);return t=uK(e,2),i=-.5*(2*SZr(e)+OZr),n=-1/(2*t),a;function a(u){return i+n*uK(u-r,2)}}oK.exports=TZr});var lK=s((J7e,cK)=>{"use strict";var IZr=w(),fK=ZQ(),_Zr=vK();IZr(fK,"factory",_Zr);cK.exports=fK});var mK=s((Y7e,gK)=>{"use strict";var pK=E();function LZr(r,e){return pK(r)||pK(e)||e<=0?NaN:r}gK.exports=LZr});var hK=s((Z7e,dK)=>{"use strict";var PZr=mK();dK.exports=PZr});var bK=s(($7e,yK)=>{"use strict";var qK=E();function RZr(r,e){return qK(r)||qK(e)||e<=0?NaN:r}yK.exports=RZr});var EK=s((Q7e,wK)=>{"use strict";var FZr=bK();wK.exports=FZr});var AK=s((K7e,NK)=>{"use strict";var i4=E(),MZr=nr(),BZr=W();function kZr(r,e,t){return i4(r)||i4(e)||i4(t)||t<=0?NaN:MZr(e*r+.5*BZr(t*r,2))}NK.exports=kZr});var SK=s((r9e,OK)=>{"use strict";var jZr=T(),n4=E(),CZr=nr(),GZr=W();function VZr(r,e){if(n4(r)||n4(e)||e<=0)return jZr(NaN);return t;function t(i){return n4(i)?NaN:CZr(r*i+.5*GZr(e*i,2))}}OK.exports=VZr});var _K=s((e9e,IK)=>{"use strict";var UZr=w(),TK=AK(),HZr=SK();UZr(TK,"factory",HZr);IK.exports=TK});var RK=s((t9e,PK)=>{"use strict";var LK=E();function WZr(r,e){return LK(r)||LK(e)||e<=0?NaN:r}PK.exports=WZr});var MK=s((i9e,FK)=>{"use strict";var zZr=RK();FK.exports=zZr});var jK=s((n9e,kK)=>{"use strict";var DZr=nr(),BK=W(),XZr=V(),xZr=$e(),JZr=I(),a4=E();function YZr(r,e,t){var i,n,a;return a4(r)||a4(e)||a4(t)||t<0?NaN:t===0?r===e?JZr:0:(i=BK(t,2),n=1/XZr(i*xZr),a=-1/(2*i),n*DZr(a*BK(r-e,2)))}kK.exports=YZr});var VK=s((a9e,GK)=>{"use strict";var ZZr=I(),CK=E();function $Zr(r,e){return CK(r)||CK(e)?NaN:r===e?ZZr:0}GK.exports=$Zr});var WK=s((s9e,HK)=>{"use strict";var QZr=T(),KZr=I(),UK=E();function r$r(r){if(UK(r))return QZr(NaN);return e;function e(t){return UK(t)?NaN:t===r?KZr:0}}HK.exports=r$r});var XK=s((u9e,DK)=>{"use strict";var e$r=w(),zK=VK(),t$r=WK();e$r(zK,"factory",t$r);DK.exports=zK});var YK=s((o9e,JK)=>{"use strict";var i$r=T(),n$r=XK().factory,s4=E(),a$r=V(),s$r=nr(),xK=W(),u$r=$e();function o$r(r,e){var t,i,n;if(s4(r)||s4(e)||e<0)return i$r(NaN);if(e===0)return n$r(r);return t=xK(e,2),i=1/a$r(t*u$r),n=-1/(2*t),a;function a(u){return s4(u)?NaN:i*s$r(n*xK(u-r,2))}}JK.exports=o$r});var QK=s((v9e,$K)=>{"use strict";var v$r=w(),ZK=jK(),f$r=YK();v$r(ZK,"factory",f$r);$K.exports=ZK});var err=s((f9e,rrr)=>{"use strict";var KK=E();function c$r(r,e){return KK(r)||KK(e)||e<=0?NaN:0}rrr.exports=c$r});var irr=s((c9e,trr)=>{"use strict";var l$r=err();trr.exports=l$r});var srr=s((l9e,arr)=>{"use strict";var nrr=E();function p$r(r,e){return nrr(r)||nrr(e)||e<=0?NaN:e}arr.exports=p$r});var orr=s((p9e,urr)=>{"use strict";var g$r=srr();urr.exports=g$r});var crr=s((g9e,frr)=>{"use strict";var vrr=E();function m$r(r,e){return vrr(r)||vrr(e)||e<=0?NaN:e*e}frr.exports=m$r});var prr=s((m9e,lrr)=>{"use strict";var d$r=crr();lrr.exports=d$r});var mrr=s((d9e,grr)=>{"use strict";var Sr=ar(),h$r=vQ(),q$r=gQ(),y$r=yQ(),b$r=XQ(),w$r=lK(),E$r=hK(),N$r=EK(),A$r=_K(),O$r=MK(),S$r=QK(),T$r=D3(),I$r=irr(),_$r=orr(),L$r=prr();function P$r(r){return Sr(r,"cdf",h$r),Sr(r,"entropy",q$r),Sr(r,"kurtosis",y$r),Sr(r,"logcdf",b$r),Sr(r,"logpdf",w$r),Sr(r,"mean",E$r),Sr(r,"median",N$r),Sr(r,"mgf",A$r),Sr(r,"mode",O$r),Sr(r,"pdf",S$r),Sr(r,"quantile",T$r),Sr(r,"skewness",I$r),Sr(r,"stdev",_$r),Sr(r,"variance",L$r),r}grr.exports=P$r});var hrr=s((h9e,drr)=>{"use strict";var R$r=ar(),F$r=mrr();function M$r(r){return R$r(r,"normal",F$r({})),r}drr.exports=M$r});var yrr=s((q9e,qrr)=>{"use strict";var xn=ar(),B$r=_$(),k$r=C$().ndarray,j$r=x$().ndarray,C$r=tQ().ndarray,G$r=hrr();function V$r(r){return xn(r,"bartlettTest",B$r),xn(r,"cumax",k$r),xn(r,"max",j$r),xn(r,"mskmax",C$r),xn(r,"dists",G$r({})),r}qrr.exports=V$r});var wrr=s((y9e,brr)=>{"use strict";var U$r=er().isPrimitive,H$r=y();function W$r(r){return e;function e(t){if(!U$r(t))throw new TypeError(H$r("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}brr.exports=W$r});var Nrr=s((b9e,Err)=>{"use strict";var z$r=wrr();Err.exports=z$r});var Trr=s((w9e,Srr)=>{"use strict";var Arr=er().isPrimitive,Orr=y();function D$r(r){return e;function e(t,i){if(!Arr(t))throw new TypeError(Orr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Arr(i))throw new TypeError(Orr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Srr.exports=D$r});var _rr=s((E9e,Irr)=>{"use strict";var X$r=Trr();Irr.exports=X$r});var Prr=s((N9e,Lrr)=>{"use strict";var u4=er().isPrimitive,o4=y();function x$r(r){return e;function e(t,i,n){if(!u4(t))throw new TypeError(o4("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!u4(i))throw new TypeError(o4("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!u4(n))throw new TypeError(o4("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}Lrr.exports=x$r});var Frr=s((A9e,Rrr)=>{"use strict";var J$r=Prr();Rrr.exports=J$r});var Brr=s((O9e,Mrr)=>{"use strict";var v4=ar(),Y$r=Nrr(),Z$r=_rr(),$$r=Frr();function Q$r(r){return v4(r,"s_o",Y$r),v4(r,"ss_o",Z$r),v4(r,"sss_o",$$r),r}Mrr.exports=Q$r});var jrr=s((S9e,krr)=>{"use strict";function K$r(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}krr.exports=K$r});var yu=s((T9e,Crr)=>{"use strict";var rQr=jrr();Crr.exports=rQr});var Vrr=s((I9e,Grr)=>{"use strict";function eQr(r){return r.toLowerCase()}Grr.exports=eQr});var Hi=s((_9e,Urr)=>{"use strict";var tQr=Vrr();Urr.exports=tQr});var Wrr=s((L9e,Hrr)=>{"use strict";function iQr(r,e,t){return r.replace(e,t)}Hrr.exports=iQr});var Dt=s((P9e,zrr)=>{"use strict";var nQr=Wrr();zrr.exports=nQr});var Xrr=s((R9e,Drr)=>{"use strict";var aQr=typeof String.prototype.trim<"u";Drr.exports=aQr});var f4=s((F9e,xrr)=>{"use strict";var sQr=String.prototype.trim;xrr.exports=sQr});var $rr=s((M9e,Zrr)=>{"use strict";var Jrr=f4(),uQr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,Yrr="\u180E";function oQr(){return Jrr.call(uQr)===""&&Jrr.call(Yrr)===Yrr}Zrr.exports=oQr});var Krr=s((B9e,Qrr)=>{"use strict";var vQr=Dt(),fQr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function cQr(r){return vQr(r,fQr,"$1")}Qrr.exports=cQr});var eer=s((k9e,rer)=>{"use strict";var lQr=f4();function pQr(r){return lQr.call(r)}rer.exports=pQr});var Wi=s((j9e,ter)=>{"use strict";var gQr=Xrr(),mQr=$rr(),dQr=Krr(),hQr=eer(),c4;gQr&&mQr()?c4=hQr:c4=dQr;ter.exports=c4});var ner=s((C9e,ier)=>{"use strict";var qQr=yu(),yQr=Hi(),bu=Dt(),bQr=Wi(),wQr=/\s+/g,EQr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,NQr=/(?:\s|^)([^\s]+)(?=\s|$)/g,AQr=/([a-z0-9])([A-Z])/g;function OQr(r,e,t){return e=yQr(e),t===0?e:qQr(e)}function SQr(r){return r=bu(r,EQr," "),r=bu(r,wQr," "),r=bu(r,AQr,"$1 $2"),r=bQr(r),bu(r,NQr,OQr)}ier.exports=SQr});var ser=s((G9e,aer)=>{"use strict";var TQr=ner();aer.exports=TQr});var oer=s((V9e,uer)=>{"use strict";var IQr=er().isPrimitive,_Qr=y(),LQr=ser();function PQr(r){if(!IQr(r))throw new TypeError(_Qr("invalid argument. First argument must be a string. Value: `%s`.",r));return LQr(r)}uer.exports=PQr});var fer=s((U9e,ver)=>{"use strict";var RQr=oer();ver.exports=RQr});var ler=s((H9e,cer)=>{"use strict";var FQr=er().isPrimitive,MQr=y(),BQr=yu();function kQr(r){if(!FQr(r))throw new TypeError(MQr("invalid argument. First argument must be a string. Value: `%s`.",r));return BQr(r)}cer.exports=kQr});var ger=s((W9e,per)=>{"use strict";var jQr=ler();per.exports=jQr});var der=s((z9e,mer)=>{"use strict";function CQr(r){return r.toUpperCase()}mer.exports=CQr});var qer=s((D9e,her)=>{"use strict";var GQr=der();her.exports=GQr});var ber=s((X9e,yer)=>{"use strict";var VQr=qer(),l4=Dt(),UQr=Wi(),HQr=/\s+/g,WQr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,zQr=/([a-z0-9])([A-Z])/g;function DQr(r){return r=l4(r,WQr," "),r=l4(r,zQr,"$1 $2"),r=UQr(r),r=l4(r,HQr,"_"),VQr(r)}yer.exports=DQr});var Eer=s((x9e,wer)=>{"use strict";var XQr=ber();wer.exports=XQr});var Aer=s((J9e,Ner)=>{"use strict";var xQr=er().isPrimitive,JQr=y(),YQr=Eer();function ZQr(r){if(!xQr(r))throw new TypeError(JQr("invalid argument. Must provide a string. Value: `%s`.",r));return YQr(r)}Ner.exports=ZQr});var Ser=s((Y9e,Oer)=>{"use strict";var $Qr=Aer();Oer.exports=$Qr});var Ier=s((Z9e,Ter)=>{"use strict";var QQr=Hi(),p4=Dt(),KQr=Wi(),rKr=/\s+/g,eKr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,tKr=/([a-z0-9])([A-Z])/g;function iKr(r){return r=p4(r,eKr," "),r=p4(r,tKr,"$1 $2"),r=KQr(r),r=p4(r,rKr,"-"),QQr(r)}Ter.exports=iKr});var Ler=s(($9e,_er)=>{"use strict";var nKr=Ier();_er.exports=nKr});var Rer=s((Q9e,Per)=>{"use strict";var aKr=er().isPrimitive,sKr=y(),uKr=Ler();function oKr(r){if(!aKr(r))throw new TypeError(sKr("invalid argument. Must provide a string. Value: `%s`.",r));return uKr(r)}Per.exports=oKr});var Mer=s((K9e,Fer)=>{"use strict";var vKr=Rer();Fer.exports=vKr});var ker=s((rpe,Ber)=>{"use strict";var fKr=er().isPrimitive,cKr=y(),lKr=Hi();function pKr(r){if(!fKr(r))throw new TypeError(cKr("invalid argument. Must provide a string. Value: `%s`.",r));return lKr(r)}Ber.exports=pKr});var Cer=s((epe,jer)=>{"use strict";var gKr=ker();jer.exports=gKr});var Ver=s((tpe,Ger)=>{"use strict";var mKr=yu(),dKr=Hi(),wu=Dt(),hKr=Wi(),qKr=/\s+/g,yKr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,bKr=/(?:\s|^)([^\s]+)(?=\s|$)/g,wKr=/([a-z0-9])([A-Z])/g;function EKr(r,e){return mKr(dKr(e))}function NKr(r){return r=wu(r,yKr," "),r=wu(r,qKr," "),r=wu(r,wKr,"$1 $2"),r=hKr(r),wu(r,bKr,EKr)}Ger.exports=NKr});var Her=s((ipe,Uer)=>{"use strict";var AKr=Ver();Uer.exports=AKr});var zer=s((npe,Wer)=>{"use strict";var OKr=er().isPrimitive,SKr=y(),TKr=Her();function IKr(r){if(!OKr(r))throw new TypeError(SKr("invalid argument. First argument must be a string. Value: `%s`.",r));return TKr(r)}Wer.exports=IKr});var Xer=s((ape,Der)=>{"use strict";var _Kr=zer();Der.exports=_Kr});var Jer=s((spe,xer)=>{"use strict";var LKr=Hi(),g4=Dt(),PKr=Wi(),RKr=/\s+/g,FKr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,MKr=/([a-z0-9])([A-Z])/g;function BKr(r){return r=g4(r,FKr," "),r=g4(r,MKr,"$1 $2"),r=PKr(r),r=g4(r,RKr,"_"),LKr(r)}xer.exports=BKr});var Zer=s((upe,Yer)=>{"use strict";var kKr=Jer();Yer.exports=kKr});var Qer=s((ope,$er)=>{"use strict";var jKr=er().isPrimitive,CKr=y(),GKr=Zer();function VKr(r){if(!jKr(r))throw new TypeError(CKr("invalid argument. Must provide a string. Value: `%s`.",r));return GKr(r)}$er.exports=VKr});var rtr=s((vpe,Ker)=>{"use strict";var UKr=Qer();Ker.exports=UKr});var itr=s((fpe,ttr)=>{"use strict";var HKr=_(),etr=O(),WKr=cr().isPrimitive,zKr=er().isPrimitive,m4=y();function DKr(r,e){return HKr(e)?etr(e,"flags")&&(r.flags=e.flags,!zKr(r.flags))?new TypeError(m4("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):etr(e,"capture")&&(r.capture=e.capture,!WKr(r.capture))?new TypeError(m4("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(m4("invalid argument. Options argument must be an object. Value: `%s`.",e))}ttr.exports=DKr});var Eu=s((cpe,atr)=>{"use strict";var XKr=itr(),ntr=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function xKr(r){var e,t;if(arguments.length>0){if(e={},t=XKr(e,r),t)throw t;return e.capture?new RegExp("("+ntr+")",e.flags):new RegExp(ntr,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}atr.exports=xKr});var utr=s((lpe,str)=>{"use strict";var JKr=Eu(),YKr=JKr({capture:!0});str.exports=YKr});var vtr=s((ppe,otr)=>{"use strict";var ZKr=Eu(),$Kr=ZKr();otr.exports=$Kr});var ltr=s((gpe,ctr)=>{"use strict";var ftr=w(),d4=Eu(),QKr=utr(),KKr=vtr();ftr(d4,"REGEXP",KKr);ftr(d4,"REGEXP_CAPTURE",QKr);ctr.exports=d4});var gtr=s((mpe,ptr)=>{"use strict";var rre=ltr().REGEXP;function ere(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),rre.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}ptr.exports=ere});var dtr=s((dpe,mtr)=>{"use strict";var tre=gtr();mtr.exports=tre});var qtr=s((hpe,htr)=>{"use strict";var ire=er().isPrimitive,nre=y(),are=dtr();function sre(r){if(!ire(r))throw new TypeError(nre("invalid argument. Must provide a string. Value: `%s`.",r));return are(r)}htr.exports=sre});var btr=s((qpe,ytr)=>{"use strict";var ure=qtr();ytr.exports=ure});var Etr=s((ype,wtr)=>{"use strict";function ore(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}wtr.exports=ore});var Atr=s((bpe,Ntr)=>{"use strict";var vre=Etr();Ntr.exports=vre});var Str=s((wpe,Otr)=>{"use strict";var fre=er().isPrimitive,cre=y(),lre=Atr();function pre(r){if(!fre(r))throw new TypeError(cre("invalid argument. First argument must be a string. Value: `%s`.",r));return lre(r)}Otr.exports=pre});var Itr=s((Epe,Ttr)=>{"use strict";var gre=Str();Ttr.exports=gre});var Ltr=s((Npe,_tr)=>{"use strict";var mre=er().isPrimitive,dre=y();function hre(r){if(!mre(r))throw new TypeError(dre("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}_tr.exports=hre});var Rtr=s((Ape,Ptr)=>{"use strict";var qre=Ltr();Ptr.exports=qre});var Mtr=s((Ope,Ftr)=>{"use strict";var Qr=ar(),yre=fer(),bre=ger(),wre=Ser(),Ere=Mer(),Nre=Cer(),Are=Xer(),Ore=rtr(),Sre=btr(),Tre=Itr(),Ire=Rtr();function _re(r){return Qr(r,"camelcase",yre),Qr(r,"capitalize",bre),Qr(r,"constantcase",wre),Qr(r,"kebabcase",Ere),Qr(r,"lowercase",Nre),Qr(r,"pascalcase",Are),Qr(r,"snakecase",Ore),Qr(r,"startcase",Sre),Qr(r,"uncapitalize",Tre),Qr(r,"uppercase",Ire),r}Ftr.exports=_re});var ktr=s((Spe,Btr)=>{"use strict";var Lre=ar(),Pre=Brr(),Rre=Mtr();function Fre(r){return Lre(r,"tools",Pre({})),r=Rre(r),r}Btr.exports=Fre});var Ctr=s((Tpe,jtr)=>{"use strict";var je=ar(),Mre=Dm(),Bre=Oq(),kre=Mq(),jre=Pw(),Cre=jP(),Gre=wx(),Vre=Px(),Ure=yrr(),Hre=ktr();function Wre(){var r={};return je(r,"array",Mre({})),je(r,"assert",Bre({})),je(r,"blas",kre({})),je(r,"datasets",jre({})),je(r,"math",Cre({})),je(r,"random",Gre({})),je(r,"simulate",Vre({})),je(r,"stats",Ure({})),je(r,"string",Hre({})),r}jtr.exports=Wre});var Vtr=s((Ipe,Gtr)=>{"use strict";var zre=w(),h4=Ctr();zre(h4,"CACHED",h4());Gtr.exports=h4});var Xre=s((_pe,Utr)=>{var Dre=Vtr().CACHED;Utr.exports=Dre});return Xre();})();
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.logpdf );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.quantile );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.pdf );
}
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.mgf );
}
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.cdf );
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
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.logcdf );
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
