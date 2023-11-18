/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var a5=s((cEe,i5)=>{"use strict";var mcr=typeof Object.defineProperty=="function"?Object.defineProperty:null;i5.exports=mcr});var s5=s((lEe,n5)=>{"use strict";var ycr=a5();function hcr(){try{return ycr({},"x",{}),!0}catch{return!1}}n5.exports=hcr});var o5=s((pEe,u5)=>{"use strict";var qcr=Object.defineProperty;u5.exports=qcr});var _1=s((dEe,v5)=>{"use strict";function bcr(r){return typeof r=="number"}v5.exports=bcr});var T1=s((gEe,c5)=>{"use strict";function wcr(r){return r[0]==="-"}function f5(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Ecr(r,e,t){var i=!1,a=e-r.length;return a<0||(wcr(r)&&(i=!0,r=r.substr(1)),r=t?r+f5(a):f5(a)+r,i&&(r="-"+r)),r}c5.exports=Ecr});var g5=s((mEe,d5)=>{"use strict";var Ncr=_1(),l5=T1(),Scr=String.prototype.toLowerCase,p5=String.prototype.toUpperCase;function Ocr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Ncr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=l5(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=l5(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===p5.call(r.specifier)?p5.call(t):Scr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}d5.exports=Ocr});var y5=s((yEe,m5)=>{"use strict";function Acr(r){return typeof r=="string"}m5.exports=Acr});var b5=s((hEe,q5)=>{"use strict";var _cr=_1(),Tcr=Math.abs,Icr=String.prototype.toLowerCase,h5=String.prototype.toUpperCase,Ji=String.prototype.replace,Rcr=/e\+(\d)$/,Lcr=/e-(\d)$/,Pcr=/^(\d+)$/,Fcr=/^(\d+)e/,jcr=/\.0$/,Mcr=/\.0*e/,Bcr=/(\..*[^0])0*e/;function kcr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!_cr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Tcr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Ji.call(t,Bcr,"$1e"),t=Ji.call(t,Mcr,"e"),t=Ji.call(t,jcr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ji.call(t,Rcr,"e+0$1"),t=Ji.call(t,Lcr,"e-0$1"),r.alternate&&(t=Ji.call(t,Pcr,"$1."),t=Ji.call(t,Fcr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===h5.call(r.specifier)?h5.call(t):Icr.call(t),t}q5.exports=kcr});var N5=s((qEe,E5)=>{"use strict";function w5(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function Ccr(r,e,t){var i=e-r.length;return i<0||(r=t?r+w5(i):w5(i)+r),r}E5.exports=Ccr});var O5=s((bEe,S5)=>{"use strict";var Vcr=g5(),Ucr=y5(),Gcr=b5(),Dcr=N5(),Hcr=T1(),zcr=String.fromCharCode,V0=isNaN,Wcr=Array.isArray;function Xcr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Jcr(r){var e,t,i,a,n,u,o,v,f;if(!Wcr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],Ucr(i))u+=i;else{if(e=i.precision!==void 0,i=Xcr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,V0(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,V0(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Vcr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!V0(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=V0(n)?String(i.arg):zcr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Gcr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Hcr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Dcr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}S5.exports=Jcr});var _5=s((wEe,A5)=>{"use strict";var Ycr=O5();A5.exports=Ycr});var I5=s((EEe,T5)=>{"use strict";var U0=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function xcr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function Zcr(r){var e,t,i,a;for(t=[],a=0,i=U0.exec(r);i;)e=r.slice(a,U0.lastIndex-i[0].length),e.length&&t.push(e),t.push(xcr(i)),a=U0.lastIndex,i=U0.exec(r);return e=r.slice(a),e.length&&t.push(e),t}T5.exports=Zcr});var L5=s((NEe,R5)=>{"use strict";var $cr=I5();R5.exports=$cr});var F5=s((SEe,P5)=>{"use strict";function Qcr(r){return typeof r=="string"}P5.exports=Qcr});var B5=s((OEe,M5)=>{"use strict";var Kcr=_5(),rlr=L5(),elr=F5();function j5(r){var e,t,i;if(!elr(r))throw new TypeError(j5("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=rlr(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Kcr.apply(null,t)}M5.exports=j5});var V=s((AEe,k5)=>{"use strict";var tlr=B5();k5.exports=tlr});var H5=s((_Ee,D5)=>{"use strict";var C5=V(),da=Object.prototype,V5=da.toString,U5=da.__defineGetter__,G5=da.__defineSetter__,ilr=da.__lookupGetter__,alr=da.__lookupSetter__;function nlr(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||V5.call(r)==="[object Array]")throw new TypeError(C5("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||V5.call(t)==="[object Array]")throw new TypeError(C5("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(ilr.call(r,e)||alr.call(r,e)?(i=r.__proto__,r.__proto__=da,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&U5&&U5.call(r,e,t.get),u&&G5&&G5.call(r,e,t.set),r}D5.exports=nlr});var ni=s((TEe,z5)=>{"use strict";var slr=s5(),ulr=o5(),olr=H5(),I1;slr()?I1=ulr:I1=olr;z5.exports=I1});var X5=s((IEe,W5)=>{"use strict";var vlr=ni();function flr(r,e,t){vlr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}W5.exports=flr});var D=s((REe,J5)=>{"use strict";var clr=X5();J5.exports=clr});var x5=s((LEe,Y5)=>{"use strict";var llr=ni();function plr(r,e,t){llr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}Y5.exports=plr});var Qr=s((PEe,Z5)=>{"use strict";var dlr=x5();Z5.exports=dlr});var Q5=s((FEe,$5)=>{"use strict";function glr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}$5.exports=glr});var Sn=s((jEe,K5)=>{"use strict";var mlr=Q5();K5.exports=mlr});var ec=s((MEe,rc)=>{"use strict";function ylr(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}rc.exports=ylr});var On=s((BEe,tc)=>{"use strict";var hlr=ec();tc.exports=hlr});var ac=s((kEe,ic)=>{"use strict";var qlr=On();function blr(r){return qlr(0,r)}ic.exports=blr});var si=s((CEe,nc)=>{"use strict";var wlr=ac();nc.exports=wlr});var oc=s((VEe,uc)=>{"use strict";var An=Sn(),Elr=si(),sc=V();function Nlr(r,e,t){var i,a,n,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(n=Elr(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],a=t[f],a!==0&&a<v)throw new Error(sc("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",An(e).join(", "),An(t).join(", "),f));if(v===a)n[f]=1;else if(v===1)n[f]=0;else throw new Error(sc("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",An(e).join(", "),An(t).join(", "),f))}return{ref:r,data:i,shape:An(t),strides:n}}uc.exports=Nlr});var R1=s((UEe,vc)=>{"use strict";var Slr=oc();vc.exports=Slr});var lc=s((GEe,cc)=>{"use strict";var fc=R1();function Olr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S;if(q=e[2],o=q[1],v=q[0],!(o<=0||v<=0))for(A=fc(r[0],e[0],q),b=A.data,w=A.strides,i=w[1],a=w[0],A=fc(r[1],e[1],q),T=A.data,w=A.strides,n=w[1],u=w[0],S=r[2],p=0,y=0,c=0;c<v;c++){for(l=0,m=0,g=b[p],d=T[y],h=S[c],f=0;f<o;f++)h[f]=t(g[l],d[m]),l+=i,m+=n;p+=a,y+=u}}cc.exports=Olr});var L1=s((DEe,pc)=>{"use strict";var Alr=lc();pc.exports=Alr});var gc=s((HEe,dc)=>{"use strict";var P1=R1();function _lr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M;if(S=e[3],f=S[1],c=S[0],!(f<=0||c<=0))for(N=P1(r[0],e[0],S),I=N.data,O=N.strides,i=O[1],a=O[0],N=P1(r[1],e[1],S),E=N.data,O=N.strides,n=O[1],u=O[0],N=P1(r[2],e[2],S),P=N.data,O=N.strides,o=O[1],v=O[0],M=r[3],y=0,d=0,q=0,p=0;p<c;p++){for(m=0,g=0,h=0,w=I[y],A=E[d],b=P[q],T=M[p],l=0;l<f;l++)T[l]=t(w[m],A[g],b[h]),m+=i,g+=n,h+=o;y+=a,d+=u,q+=v}}dc.exports=_lr});var F1=s((zEe,mc)=>{"use strict";var Tlr=gc();mc.exports=Tlr});var hc=s((WEe,yc)=>{"use strict";function Ilr(r){var e,t,i,a,n,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(a=r[0],f=a.length,v===1){for(c=0;c<f;c++)t.push(a[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(n=e[0]-f+c,n>=0?i=a[n]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}yc.exports=Ilr});var G0=s((XEe,qc)=>{"use strict";var Rlr=hc();qc.exports=Rlr});var wc=s((JEe,bc)=>{"use strict";var Llr=On();function Plr(r,e){var t,i,a,n;for(i=e[1],a=e[0],t=[],n=0;n<a;n++)t.push(Llr(r,i));return t}bc.exports=Plr});var D0=s((YEe,Ec)=>{"use strict";var Flr=wc();Ec.exports=Flr});var Sc=s((xEe,Nc)=>{"use strict";function jlr(r,e,t){var i,a,n,u,o,v;for(n=r[1],u=r[0],i=[],o=0;o<u;o++){for(a=[],v=0;v<n;v++)a.push(e.call(t,[o,v]));i.push(a)}return i}Nc.exports=jlr});var Ac=s((ZEe,Oc)=>{"use strict";var Mlr=Sc();Oc.exports=Mlr});var Tc=s(($Ee,_c)=>{"use strict";function Blr(r){var e,t,i,a,n,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],n=0;n<t;n++)for(a=r[n],u=0;u<i;u++)e.push(a[u]);return e}_c.exports=Blr});var Rc=s((QEe,Ic)=>{"use strict";function klr(r,e,t,i){var a,n,u,o,v,f;for(n=r.length,u=r[0].length,a=i,v=0;v<n;v++)for(o=r[v],f=0;f<u;f++)e[a]=o[f],a+=t;return e}Ic.exports=klr});var H0=s((KEe,Pc)=>{"use strict";var Clr=D(),Lc=Tc(),Vlr=Rc();Clr(Lc,"assign",Vlr);Pc.exports=Lc});var jc=s((rNe,Fc)=>{"use strict";var Ulr=/./;Fc.exports=Ulr});var j1=s((eNe,Mc)=>{"use strict";function Glr(r){return typeof r=="boolean"}Mc.exports=Glr});var kc=s((tNe,Bc)=>{"use strict";function Dlr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Bc.exports=Dlr});var Vc=s((iNe,Cc)=>{"use strict";var Hlr=kc();Cc.exports=Hlr});var Gc=s((aNe,Uc)=>{"use strict";var zlr=Vc(),Wlr=zlr();function Xlr(){return Wlr&&typeof Symbol.toStringTag=="symbol"}Uc.exports=Xlr});var ga=s((nNe,Dc)=>{"use strict";var Jlr=Gc();Dc.exports=Jlr});var M1=s((sNe,Hc)=>{"use strict";var Ylr=Object.prototype.toString;Hc.exports=Ylr});var Wc=s((uNe,zc)=>{"use strict";var xlr=M1();function Zlr(r){return xlr.call(r)}zc.exports=Zlr});var Jc=s((oNe,Xc)=>{"use strict";var $lr=Object.prototype.hasOwnProperty;function Qlr(r,e){return r==null?!1:$lr.call(r,e)}Xc.exports=Qlr});var vr=s((vNe,Yc)=>{"use strict";var Klr=Jc();Yc.exports=Klr});var Zc=s((fNe,xc)=>{"use strict";var r8r=typeof Symbol=="function"?Symbol:void 0;xc.exports=r8r});var B1=s((cNe,$c)=>{"use strict";var e8r=Zc();$c.exports=e8r});var rl=s((lNe,Kc)=>{"use strict";var Qc=B1(),t8r=typeof Qc=="function"?Qc.toStringTag:"";Kc.exports=t8r});var tl=s((pNe,el)=>{"use strict";var i8r=vr(),_n=rl(),k1=M1();function a8r(r){var e,t,i;if(r==null)return k1.call(r);t=r[_n],e=i8r(r,_n);try{r[_n]=void 0}catch{return k1.call(r)}return i=k1.call(r),e?r[_n]=t:delete r[_n],i}el.exports=a8r});var re=s((dNe,il)=>{"use strict";var n8r=ga(),s8r=Wc(),u8r=tl(),C1;n8r()?C1=u8r:C1=s8r;il.exports=C1});var nl=s((gNe,al)=>{"use strict";var o8r=Boolean;al.exports=o8r});var V1=s((mNe,sl)=>{"use strict";var v8r=nl();sl.exports=v8r});var ol=s((yNe,ul)=>{"use strict";var f8r=Boolean.prototype.toString;ul.exports=f8r});var fl=s((hNe,vl)=>{"use strict";var c8r=ol();function l8r(r){try{return c8r.call(r),!0}catch{return!1}}vl.exports=l8r});var U1=s((qNe,cl)=>{"use strict";var p8r=ga(),d8r=re(),g8r=V1(),m8r=fl(),y8r=p8r();function h8r(r){return typeof r=="object"?r instanceof g8r?!0:y8r?m8r(r):d8r(r)==="[object Boolean]":!1}cl.exports=h8r});var pl=s((bNe,ll)=>{"use strict";var q8r=j1(),b8r=U1();function w8r(r){return q8r(r)||b8r(r)}ll.exports=w8r});var de=s((wNe,gl)=>{"use strict";var dl=D(),G1=pl(),E8r=j1(),N8r=U1();dl(G1,"isPrimitive",E8r);dl(G1,"isObject",N8r);gl.exports=G1});var yl=s((ENe,ml)=>{"use strict";function S8r(){return new Function("return this;")()}ml.exports=S8r});var ql=s((NNe,hl)=>{"use strict";var O8r=typeof self=="object"?self:null;hl.exports=O8r});var wl=s((SNe,bl)=>{"use strict";var A8r=typeof window=="object"?window:null;bl.exports=A8r});var Nl=s((ONe,El)=>{"use strict";var _8r=typeof globalThis=="object"?globalThis:null;El.exports=_8r});var D1=s((ANe,_l)=>{"use strict";var T8r=de().isPrimitive,I8r=V(),R8r=yl(),Sl=ql(),Ol=wl(),Al=Nl();function L8r(r){if(arguments.length){if(!T8r(r))throw new TypeError(I8r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return R8r()}if(Al)return Al;if(Sl)return Sl;if(Ol)return Ol;throw new Error("unexpected error. Unable to resolve global object.")}_l.exports=L8r});var Rl=s((_Ne,Il)=>{"use strict";var P8r=D1(),Tl=P8r(),F8r=Tl.document&&Tl.document.childNodes;Il.exports=F8r});var Pl=s((TNe,Ll)=>{"use strict";var j8r=Int8Array;Ll.exports=j8r});var jl=s((INe,Fl)=>{"use strict";var M8r=jc(),B8r=Rl(),k8r=Pl();function C8r(){return typeof M8r=="function"||typeof k8r=="object"||typeof B8r=="function"}Fl.exports=C8r});var H1=s((RNe,Ml)=>{"use strict";function V8r(){return/^\s*function\s*([^(]*)/i}Ml.exports=V8r});var kl=s((LNe,Bl)=>{"use strict";var U8r=H1(),G8r=U8r();Bl.exports=G8r});var z1=s((PNe,Vl)=>{"use strict";var D8r=D(),Cl=H1(),H8r=kl();D8r(Cl,"REGEXP",H8r);Vl.exports=Cl});var Gl=s((FNe,Ul)=>{"use strict";var z8r=re(),W1;function W8r(r){return z8r(r)==="[object Array]"}Array.isArray?W1=Array.isArray:W1=W8r;Ul.exports=W1});var qe=s((jNe,Dl)=>{"use strict";var X8r=Gl();Dl.exports=X8r});var zl=s((MNe,Hl)=>{"use strict";var J8r=qe(),Y8r=V();function x8r(r){if(typeof r!="function")throw new TypeError(Y8r("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!J8r(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}Hl.exports=x8r});var Xl=s((BNe,Wl)=>{"use strict";var Z8r=zl();Wl.exports=Z8r});var Yl=s((kNe,Jl)=>{"use strict";function $8r(r){return r!==null&&typeof r=="object"}Jl.exports=$8r});var J1=s((CNe,xl)=>{"use strict";var Q8r=D(),K8r=Xl(),X1=Yl(),r7r=K8r(X1);Q8r(X1,"isObjectLikeArray",r7r);xl.exports=X1});var $l=s((VNe,Zl)=>{"use strict";var e7r=J1();function t7r(r){return e7r(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}Zl.exports=t7r});var Yi=s((UNe,Ql)=>{"use strict";var i7r=$l();Ql.exports=i7r});var r8=s((GNe,Kl)=>{"use strict";var a7r=re(),n7r=z1().REGEXP,s7r=Yi();function u7r(r){var e,t,i;if(t=a7r(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=n7r.exec(i.toString()),e)return e[1]}return s7r(r)?"Buffer":t}Kl.exports=u7r});var qt=s((DNe,e8)=>{"use strict";var o7r=r8();e8.exports=o7r});var i8=s((HNe,t8)=>{"use strict";var v7r=qt();function f7r(r){var e;return r===null?"null":(e=typeof r,e==="object"?v7r(r).toLowerCase():e)}t8.exports=f7r});var n8=s((zNe,a8)=>{"use strict";var c7r=qt();function l7r(r){return c7r(r).toLowerCase()}a8.exports=l7r});var z0=s((WNe,s8)=>{"use strict";var p7r=jl(),d7r=i8(),g7r=n8(),m7r=p7r()?g7r:d7r;s8.exports=m7r});var o8=s((XNe,u8)=>{"use strict";var y7r=z0();function h7r(r){return y7r(r)==="function"}u8.exports=h7r});var qr=s((JNe,v8)=>{"use strict";var q7r=o8();v8.exports=q7r});var c8=s((YNe,f8)=>{"use strict";var b7r=Math.floor;f8.exports=b7r});var Ur=s((xNe,l8)=>{"use strict";var w7r=c8();l8.exports=w7r});var d8=s((ZNe,p8)=>{"use strict";var E7r=Ur();function N7r(r){return E7r(r)===r}p8.exports=N7r});var Ee=s(($Ne,g8)=>{"use strict";var S7r=d8();g8.exports=S7r});var y8=s((QNe,m8)=>{"use strict";var O7r=9007199254740991;m8.exports=O7r});var q8=s((KNe,h8)=>{"use strict";var A7r=Ee(),_7r=y8();function T7r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&A7r(r.length)&&r.length>=0&&r.length<=_7r}h8.exports=T7r});var Ve=s((rSe,b8)=>{"use strict";var I7r=q8();b8.exports=I7r});var E8=s((eSe,w8)=>{"use strict";var R7r=qr();function L7r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&R7r(r.next)}w8.exports=L7r});var S8=s((tSe,N8)=>{"use strict";var P7r=E8();N8.exports=P7r});var _8=s((iSe,A8)=>{"use strict";var O8="function";function F7r(r){return typeof r.get===O8&&typeof r.set===O8}A8.exports=F7r});var ma=s((aSe,T8)=>{"use strict";var j7r=_8();T8.exports=j7r});var L8=s((nSe,R8)=>{"use strict";var I8={complex128:M7r,complex64:B7r,default:k7r};function M7r(r,e,t){r.set(t,e)}function B7r(r,e,t){r.set(t,e)}function k7r(r,e,t){r.set(t,e)}function C7r(r){var e=I8[r];return typeof e=="function"?e:I8.default}R8.exports=C7r});var W0=s((sSe,P8)=>{"use strict";var V7r=L8();P8.exports=V7r});var M8=s((uSe,j8)=>{"use strict";var F8={float64:U7r,float32:G7r,int32:D7r,int16:H7r,int8:z7r,uint32:W7r,uint16:X7r,uint8:J7r,uint8c:Y7r,generic:x7r,default:Z7r};function U7r(r,e,t){r[e]=t}function G7r(r,e,t){r[e]=t}function D7r(r,e,t){r[e]=t}function H7r(r,e,t){r[e]=t}function z7r(r,e,t){r[e]=t}function W7r(r,e,t){r[e]=t}function X7r(r,e,t){r[e]=t}function J7r(r,e,t){r[e]=t}function Y7r(r,e,t){r[e]=t}function x7r(r,e,t){r[e]=t}function Z7r(r,e,t){r[e]=t}function $7r(r){var e=F8[r];return typeof e=="function"?e:F8.default}j8.exports=$7r});var X0=s((oSe,B8)=>{"use strict";var Q7r=M8();B8.exports=Q7r});var C8=s((vSe,k8)=>{"use strict";var K7r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};k8.exports=K7r});var U8=s((fSe,V8)=>{"use strict";var r9r=re(),e9r=typeof Float64Array=="function";function t9r(r){return e9r&&r instanceof Float64Array||r9r(r)==="[object Float64Array]"}V8.exports=t9r});var D8=s((cSe,G8)=>{"use strict";var i9r=U8();G8.exports=i9r});var z8=s((lSe,H8)=>{"use strict";var a9r=typeof Float64Array=="function"?Float64Array:null;H8.exports=a9r});var J8=s((pSe,X8)=>{"use strict";var n9r=D8(),W8=z8();function s9r(){var r,e;if(typeof W8!="function")return!1;try{e=new W8([1,3.14,-3.14,NaN]),r=n9r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}X8.exports=s9r});var Y1=s((dSe,Y8)=>{"use strict";var u9r=J8();Y8.exports=u9r});var Z8=s((gSe,x8)=>{"use strict";var o9r=typeof Float64Array=="function"?Float64Array:void 0;x8.exports=o9r});var Q8=s((mSe,$8)=>{"use strict";function v9r(){throw new Error("not implemented")}$8.exports=v9r});var ge=s((ySe,K8)=>{"use strict";var f9r=Y1(),c9r=Z8(),l9r=Q8(),x1;f9r()?x1=c9r:x1=l9r;K8.exports=x1});var e7=s((hSe,r7)=>{"use strict";var p9r=re(),d9r=typeof Float32Array=="function";function g9r(r){return d9r&&r instanceof Float32Array||p9r(r)==="[object Float32Array]"}r7.exports=g9r});var i7=s((qSe,t7)=>{"use strict";var m9r=e7();t7.exports=m9r});var pr=s((bSe,a7)=>{"use strict";var y9r=Number.POSITIVE_INFINITY;a7.exports=y9r});var s7=s((wSe,n7)=>{"use strict";var h9r=typeof Float32Array=="function"?Float32Array:null;n7.exports=h9r});var v7=s((ESe,o7)=>{"use strict";var q9r=i7(),b9r=pr(),u7=s7();function w9r(){var r,e;if(typeof u7!="function")return!1;try{e=new u7([1,3.14,-3.14,5e40]),r=q9r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===b9r}catch{r=!1}return r}o7.exports=w9r});var c7=s((NSe,f7)=>{"use strict";var E9r=v7();f7.exports=E9r});var p7=s((SSe,l7)=>{"use strict";var N9r=typeof Float32Array=="function"?Float32Array:void 0;l7.exports=N9r});var g7=s((OSe,d7)=>{"use strict";function S9r(){throw new Error("not implemented")}d7.exports=S9r});var et=s((ASe,m7)=>{"use strict";var O9r=c7(),A9r=p7(),_9r=g7(),Z1;O9r()?Z1=A9r:Z1=_9r;m7.exports=Z1});var h7=s((_Se,y7)=>{"use strict";var T9r=re(),I9r=typeof Uint32Array=="function";function R9r(r){return I9r&&r instanceof Uint32Array||T9r(r)==="[object Uint32Array]"}y7.exports=R9r});var bt=s((TSe,q7)=>{"use strict";var L9r=h7();q7.exports=L9r});var ya=s((ISe,b7)=>{"use strict";var P9r=4294967295;b7.exports=P9r});var E7=s((RSe,w7)=>{"use strict";var F9r=typeof Uint32Array=="function"?Uint32Array:null;w7.exports=F9r});var O7=s((LSe,S7)=>{"use strict";var j9r=bt(),$1=ya(),N7=E7();function M9r(){var r,e;if(typeof N7!="function")return!1;try{e=[1,3.14,-3.14,$1+1,$1+2],e=new N7(e),r=j9r(e)&&e[0]===1&&e[1]===3&&e[2]===$1-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}S7.exports=M9r});var _7=s((PSe,A7)=>{"use strict";var B9r=O7();A7.exports=B9r});var I7=s((FSe,T7)=>{"use strict";var k9r=typeof Uint32Array=="function"?Uint32Array:void 0;T7.exports=k9r});var L7=s((jSe,R7)=>{"use strict";function C9r(){throw new Error("not implemented")}R7.exports=C9r});var me=s((MSe,P7)=>{"use strict";var V9r=_7(),U9r=I7(),G9r=L7(),Q1;V9r()?Q1=U9r:Q1=G9r;P7.exports=Q1});var j7=s((BSe,F7)=>{"use strict";var D9r=re(),H9r=typeof Int32Array=="function";function z9r(r){return H9r&&r instanceof Int32Array||D9r(r)==="[object Int32Array]"}F7.exports=z9r});var J0=s((kSe,M7)=>{"use strict";var W9r=j7();M7.exports=W9r});var ha=s((CSe,B7)=>{"use strict";var X9r=2147483647;B7.exports=X9r});var C7=s((VSe,k7)=>{"use strict";var J9r=-2147483648;k7.exports=J9r});var U7=s((USe,V7)=>{"use strict";var Y9r=typeof Int32Array=="function"?Int32Array:null;V7.exports=Y9r});var H7=s((GSe,D7)=>{"use strict";var x9r=J0(),Z9r=ha(),$9r=C7(),G7=U7();function Q9r(){var r,e;if(typeof G7!="function")return!1;try{e=new G7([1,3.14,-3.14,Z9r+1]),r=x9r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===$9r}catch{r=!1}return r}D7.exports=Q9r});var W7=s((DSe,z7)=>{"use strict";var K9r=H7();z7.exports=K9r});var J7=s((HSe,X7)=>{"use strict";var rpr=typeof Int32Array=="function"?Int32Array:void 0;X7.exports=rpr});var x7=s((zSe,Y7)=>{"use strict";function epr(){throw new Error("not implemented")}Y7.exports=epr});var ui=s((WSe,Z7)=>{"use strict";var tpr=W7(),ipr=J7(),apr=x7(),K1;tpr()?K1=ipr:K1=apr;Z7.exports=K1});var Q7=s((XSe,$7)=>{"use strict";var npr=re(),spr=typeof Uint16Array=="function";function upr(r){return spr&&r instanceof Uint16Array||npr(r)==="[object Uint16Array]"}$7.exports=upr});var r9=s((JSe,K7)=>{"use strict";var opr=Q7();K7.exports=opr});var t9=s((YSe,e9)=>{"use strict";var vpr=65535;e9.exports=vpr});var a9=s((xSe,i9)=>{"use strict";var fpr=typeof Uint16Array=="function"?Uint16Array:null;i9.exports=fpr});var u9=s((ZSe,s9)=>{"use strict";var cpr=r9(),r2=t9(),n9=a9();function lpr(){var r,e;if(typeof n9!="function")return!1;try{e=[1,3.14,-3.14,r2+1,r2+2],e=new n9(e),r=cpr(e)&&e[0]===1&&e[1]===3&&e[2]===r2-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}s9.exports=lpr});var v9=s(($Se,o9)=>{"use strict";var ppr=u9();o9.exports=ppr});var c9=s((QSe,f9)=>{"use strict";var dpr=typeof Uint16Array=="function"?Uint16Array:void 0;f9.exports=dpr});var p9=s((KSe,l9)=>{"use strict";function gpr(){throw new Error("not implemented")}l9.exports=gpr});var xi=s((rOe,d9)=>{"use strict";var mpr=v9(),ypr=c9(),hpr=p9(),e2;mpr()?e2=ypr:e2=hpr;d9.exports=e2});var m9=s((eOe,g9)=>{"use strict";var qpr=re(),bpr=typeof Int16Array=="function";function wpr(r){return bpr&&r instanceof Int16Array||qpr(r)==="[object Int16Array]"}g9.exports=wpr});var h9=s((tOe,y9)=>{"use strict";var Epr=m9();y9.exports=Epr});var b9=s((iOe,q9)=>{"use strict";var Npr=32767;q9.exports=Npr});var E9=s((aOe,w9)=>{"use strict";var Spr=-32768;w9.exports=Spr});var S9=s((nOe,N9)=>{"use strict";var Opr=typeof Int16Array=="function"?Int16Array:null;N9.exports=Opr});var _9=s((sOe,A9)=>{"use strict";var Apr=h9(),_pr=b9(),Tpr=E9(),O9=S9();function Ipr(){var r,e;if(typeof O9!="function")return!1;try{e=new O9([1,3.14,-3.14,_pr+1]),r=Apr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Tpr}catch{r=!1}return r}A9.exports=Ipr});var I9=s((uOe,T9)=>{"use strict";var Rpr=_9();T9.exports=Rpr});var L9=s((oOe,R9)=>{"use strict";var Lpr=typeof Int16Array=="function"?Int16Array:void 0;R9.exports=Lpr});var F9=s((vOe,P9)=>{"use strict";function Ppr(){throw new Error("not implemented")}P9.exports=Ppr});var qa=s((fOe,j9)=>{"use strict";var Fpr=I9(),jpr=L9(),Mpr=F9(),t2;Fpr()?t2=jpr:t2=Mpr;j9.exports=t2});var B9=s((cOe,M9)=>{"use strict";var Bpr=re(),kpr=typeof Uint8Array=="function";function Cpr(r){return kpr&&r instanceof Uint8Array||Bpr(r)==="[object Uint8Array]"}M9.exports=Cpr});var C9=s((lOe,k9)=>{"use strict";var Vpr=B9();k9.exports=Vpr});var U9=s((pOe,V9)=>{"use strict";var Upr=255;V9.exports=Upr});var D9=s((dOe,G9)=>{"use strict";var Gpr=typeof Uint8Array=="function"?Uint8Array:null;G9.exports=Gpr});var W9=s((gOe,z9)=>{"use strict";var Dpr=C9(),i2=U9(),H9=D9();function Hpr(){var r,e;if(typeof H9!="function")return!1;try{e=[1,3.14,-3.14,i2+1,i2+2],e=new H9(e),r=Dpr(e)&&e[0]===1&&e[1]===3&&e[2]===i2-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}z9.exports=Hpr});var J9=s((mOe,X9)=>{"use strict";var zpr=W9();X9.exports=zpr});var x9=s((yOe,Y9)=>{"use strict";var Wpr=typeof Uint8Array=="function"?Uint8Array:void 0;Y9.exports=Wpr});var $9=s((hOe,Z9)=>{"use strict";function Xpr(){throw new Error("not implemented")}Z9.exports=Xpr});var tt=s((qOe,Q9)=>{"use strict";var Jpr=J9(),Ypr=x9(),xpr=$9(),a2;Jpr()?a2=Ypr:a2=xpr;Q9.exports=a2});var rp=s((bOe,K9)=>{"use strict";var Zpr=re(),$pr=typeof Uint8ClampedArray=="function";function Qpr(r){return $pr&&r instanceof Uint8ClampedArray||Zpr(r)==="[object Uint8ClampedArray]"}K9.exports=Qpr});var tp=s((wOe,ep)=>{"use strict";var Kpr=rp();ep.exports=Kpr});var ap=s((EOe,ip)=>{"use strict";var rdr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;ip.exports=rdr});var up=s((NOe,sp)=>{"use strict";var edr=tp(),np=ap();function tdr(){var r,e;if(typeof np!="function")return!1;try{e=new np([-1,0,1,3.14,4.99,255,256]),r=edr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}sp.exports=tdr});var vp=s((SOe,op)=>{"use strict";var idr=up();op.exports=idr});var cp=s((OOe,fp)=>{"use strict";var adr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;fp.exports=adr});var pp=s((AOe,lp)=>{"use strict";function ndr(){throw new Error("not implemented")}lp.exports=ndr});var ba=s((_Oe,dp)=>{"use strict";var sdr=vp(),udr=cp(),odr=pp(),n2;sdr()?n2=udr:n2=odr;dp.exports=n2});var mp=s((TOe,gp)=>{"use strict";var vdr=re(),fdr=typeof Int8Array=="function";function cdr(r){return fdr&&r instanceof Int8Array||vdr(r)==="[object Int8Array]"}gp.exports=cdr});var hp=s((IOe,yp)=>{"use strict";var ldr=mp();yp.exports=ldr});var bp=s((ROe,qp)=>{"use strict";var pdr=127;qp.exports=pdr});var Ep=s((LOe,wp)=>{"use strict";var ddr=-128;wp.exports=ddr});var Sp=s((POe,Np)=>{"use strict";var gdr=typeof Int8Array=="function"?Int8Array:null;Np.exports=gdr});var _p=s((FOe,Ap)=>{"use strict";var mdr=hp(),ydr=bp(),hdr=Ep(),Op=Sp();function qdr(){var r,e;if(typeof Op!="function")return!1;try{e=new Op([1,3.14,-3.14,ydr+1]),r=mdr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===hdr}catch{r=!1}return r}Ap.exports=qdr});var Ip=s((jOe,Tp)=>{"use strict";var bdr=_p();Tp.exports=bdr});var Lp=s((MOe,Rp)=>{"use strict";var wdr=typeof Int8Array=="function"?Int8Array:void 0;Rp.exports=wdr});var Fp=s((BOe,Pp)=>{"use strict";function Edr(){throw new Error("not implemented")}Pp.exports=Edr});var wa=s((kOe,jp)=>{"use strict";var Ndr=Ip(),Sdr=Lp(),Odr=Fp(),s2;Ndr()?s2=Sdr:s2=Odr;jp.exports=s2});var u2=s((COe,Mp)=>{"use strict";function Adr(r){return typeof r=="number"}Mp.exports=Adr});var kp=s((VOe,Bp)=>{"use strict";Bp.exports=Number});var Y0=s((UOe,Cp)=>{"use strict";var _dr=kp();Cp.exports=_dr});var Up=s((GOe,Vp)=>{"use strict";var Tdr=Y0(),Idr=Tdr.prototype.toString;Vp.exports=Idr});var Dp=s((DOe,Gp)=>{"use strict";var Rdr=Up();function Ldr(r){try{return Rdr.call(r),!0}catch{return!1}}Gp.exports=Ldr});var o2=s((HOe,Hp)=>{"use strict";var Pdr=ga(),Fdr=re(),jdr=Y0(),Mdr=Dp(),Bdr=Pdr();function kdr(r){return typeof r=="object"?r instanceof jdr?!0:Bdr?Mdr(r):Fdr(r)==="[object Number]":!1}Hp.exports=kdr});var Wp=s((zOe,zp)=>{"use strict";var Cdr=u2(),Vdr=o2();function Udr(r){return Cdr(r)||Vdr(r)}zp.exports=Udr});var Nr=s((WOe,Jp)=>{"use strict";var Xp=D(),v2=Wp(),Gdr=u2(),Ddr=o2();Xp(v2,"isPrimitive",Gdr);Xp(v2,"isObject",Ddr);Jp.exports=v2});var Ir=s((XOe,Yp)=>{"use strict";var Hdr=Y0(),zdr=Hdr.NEGATIVE_INFINITY;Yp.exports=zdr});var f2=s((JOe,xp)=>{"use strict";var Wdr=pr(),Xdr=Ir(),Jdr=Ee();function Ydr(r){return r<Wdr&&r>Xdr&&Jdr(r)}xp.exports=Ydr});var c2=s((YOe,Zp)=>{"use strict";var xdr=Nr().isPrimitive,Zdr=f2();function $dr(r){return xdr(r)&&Zdr(r)}Zp.exports=$dr});var l2=s((xOe,$p)=>{"use strict";var Qdr=Nr().isObject,Kdr=f2();function rgr(r){return Qdr(r)&&Kdr(r.valueOf())}$p.exports=rgr});var Kp=s((ZOe,Qp)=>{"use strict";var egr=c2(),tgr=l2();function igr(r){return egr(r)||tgr(r)}Qp.exports=igr});var ye=s(($Oe,ed)=>{"use strict";var rd=D(),p2=Kp(),agr=c2(),ngr=l2();rd(p2,"isPrimitive",agr);rd(p2,"isObject",ngr);ed.exports=p2});var d2=s((QOe,td)=>{"use strict";var sgr=ye().isPrimitive;function ugr(r){return sgr(r)&&r>=0}td.exports=ugr});var g2=s((KOe,id)=>{"use strict";var ogr=ye().isObject;function vgr(r){return ogr(r)&&r.valueOf()>=0}id.exports=vgr});var nd=s((rAe,ad)=>{"use strict";var fgr=d2(),cgr=g2();function lgr(r){return fgr(r)||cgr(r)}ad.exports=lgr});var be=s((eAe,ud)=>{"use strict";var sd=D(),m2=nd(),pgr=d2(),dgr=g2();sd(m2,"isPrimitive",pgr);sd(m2,"isObject",dgr);ud.exports=m2});var y2=s((tAe,od)=>{"use strict";var ggr=4294967295;od.exports=ggr});var fd=s((iAe,vd)=>{"use strict";var mgr=Ee(),ygr=y2();function hgr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&mgr(r.length)&&r.length>=0&&r.length<=ygr}vd.exports=hgr});var Zi=s((aAe,cd)=>{"use strict";var qgr=fd();cd.exports=qgr});var pd=s((nAe,ld)=>{"use strict";var bgr=re(),wgr=typeof ArrayBuffer=="function";function Egr(r){return wgr&&r instanceof ArrayBuffer||bgr(r)==="[object ArrayBuffer]"}ld.exports=Egr});var x0=s((sAe,dd)=>{"use strict";var Ngr=pd();dd.exports=Ngr});var md=s((uAe,gd)=>{"use strict";var Sgr=qe();function Ogr(r){return typeof r=="object"&&r!==null&&!Sgr(r)}gd.exports=Ogr});var Z0=s((oAe,yd)=>{"use strict";var Agr=md();yd.exports=Agr});var qd=s((vAe,hd)=>{"use strict";function _gr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}hd.exports=_gr});var wd=s((fAe,bd)=>{"use strict";function Tgr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}bd.exports=Tgr});var Ad=s((cAe,Od)=>{"use strict";var Ed=Nr().isPrimitive,Nd=ni(),Tn=D(),Sd=V(),Igr=qd(),Rgr=wd();function $i(r,e){if(!(this instanceof $i))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ed(r))throw new TypeError(Sd("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Ed(e))throw new TypeError(Sd("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Nd(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),Nd(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Tn($i,"BYTES_PER_ELEMENT",8);Tn($i.prototype,"BYTES_PER_ELEMENT",8);Tn($i.prototype,"byteLength",16);Tn($i.prototype,"toString",Igr);Tn($i.prototype,"toJSON",Rgr);Od.exports=$i});var Ea=s((lAe,_d)=>{"use strict";var Lgr=Ad();_d.exports=Lgr});var Id=s((pAe,Td)=>{"use strict";var Pgr=typeof Math.fround=="function"?Math.fround:null;Td.exports=Pgr});var Pd=s((dAe,Ld)=>{"use strict";var Fgr=et(),Rd=new Fgr(1);function jgr(r){return Rd[0]=r,Rd[0]}Ld.exports=jgr});var Md=s((gAe,jd)=>{"use strict";var Fd=Id(),Mgr=Pd(),h2;typeof Fd=="function"?h2=Fd:h2=Mgr;jd.exports=h2});var kd=s((mAe,Bd)=>{"use strict";function Bgr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}Bd.exports=Bgr});var Vd=s((yAe,Cd)=>{"use strict";function kgr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}Cd.exports=kgr});var Wd=s((hAe,zd)=>{"use strict";var Ud=Nr().isPrimitive,Gd=ni(),In=D(),Dd=Md(),Hd=V(),Cgr=kd(),Vgr=Vd();function Qi(r,e){if(!(this instanceof Qi))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ud(r))throw new TypeError(Hd("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Ud(e))throw new TypeError(Hd("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Gd(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Dd(r)}),Gd(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Dd(e)}),this}In(Qi,"BYTES_PER_ELEMENT",4);In(Qi.prototype,"BYTES_PER_ELEMENT",4);In(Qi.prototype,"byteLength",8);In(Qi.prototype,"toString",Cgr);In(Qi.prototype,"toJSON",Vgr);zd.exports=Qi});var Na=s((qAe,Xd)=>{"use strict";var Ugr=Wd();Xd.exports=Ugr});var Yd=s((bAe,Jd)=>{"use strict";var Ggr=Ea(),Dgr=Na();function Hgr(r){return r instanceof Ggr||r instanceof Dgr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}Jd.exports=Hgr});var Ye=s((wAe,xd)=>{"use strict";var zgr=Yd();xd.exports=zgr});var $d=s((EAe,Zd)=>{"use strict";var Wgr=Ee();function Xgr(r){return Wgr(r/2)}Zd.exports=Xgr});var $0=s((NAe,Qd)=>{"use strict";var Jgr=$d();Qd.exports=Jgr});var rg=s((SAe,Kd)=>{"use strict";var Ygr=vr(),Q0=B1();function xgr(){return typeof Q0=="function"&&typeof Q0("foo")=="symbol"&&Ygr(Q0,"iterator")&&typeof Q0.iterator=="symbol"}Kd.exports=xgr});var K0=s((OAe,eg)=>{"use strict";var Zgr=rg();eg.exports=Zgr});var ig=s((AAe,tg)=>{"use strict";var $gr=K0(),Qgr=$gr()?Symbol.iterator:null;tg.exports=Qgr});var Rn=s((_Ae,ag)=>{"use strict";var Kgr=ig();ag.exports=Kgr});var sg=s((TAe,ng)=>{"use strict";var rmr=ni();function emr(r,e,t){rmr(r,e,{configurable:!1,enumerable:!1,get:t})}ng.exports=emr});var br=s((IAe,ug)=>{"use strict";var tmr=sg();ug.exports=tmr});var vg=s((RAe,og)=>{"use strict";function imr(r){return r.re}og.exports=imr});var oi=s((LAe,fg)=>{"use strict";var amr=vg();fg.exports=amr});var lg=s((PAe,cg)=>{"use strict";function nmr(r){return r.im}cg.exports=nmr});var vi=s((FAe,pg)=>{"use strict";var smr=lg();pg.exports=smr});var gg=s((jAe,dg)=>{"use strict";var umr=et();function omr(r,e){return new umr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}dg.exports=omr});var Sa=s((MAe,mg)=>{"use strict";var vmr=gg();mg.exports=vmr});var hg=s((BAe,yg)=>{"use strict";var fmr=ge();function cmr(r,e){return new fmr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}yg.exports=cmr});var Oa=s((kAe,qg)=>{"use strict";var lmr=hg();qg.exports=lmr});var Eg=s((CAe,wg)=>{"use strict";var bg={float64:pmr,float32:dmr,int32:gmr,int16:mmr,int8:ymr,uint32:hmr,uint16:qmr,uint8:bmr,uint8c:wmr,generic:Emr,default:Nmr};function pmr(r,e){return r[e]}function dmr(r,e){return r[e]}function gmr(r,e){return r[e]}function mmr(r,e){return r[e]}function ymr(r,e){return r[e]}function hmr(r,e){return r[e]}function qmr(r,e){return r[e]}function bmr(r,e){return r[e]}function wmr(r,e){return r[e]}function Emr(r,e){return r[e]}function Nmr(r,e){return r[e]}function Smr(r){var e=bg[r];return typeof e=="function"?e:bg.default}wg.exports=Smr});var Aa=s((VAe,Ng)=>{"use strict";var Omr=Eg();Ng.exports=Omr});var Ag=s((UAe,Og)=>{"use strict";var Sg={complex128:Amr,complex64:_mr,default:Tmr};function Amr(r,e){return r.get(e)}function _mr(r,e){return r.get(e)}function Tmr(r,e){return r.get(e)}function Imr(r){var e=Sg[r];return typeof e=="function"?e:Sg.default}Og.exports=Imr});var Ki=s((GAe,_g)=>{"use strict";var Rmr=Ag();_g.exports=Rmr});var Ig=s((DAe,Tg)=>{"use strict";var Lmr=Zi(),Pmr=Ye(),Fmr=oi(),jmr=vi(),Mmr=V();function Bmr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Lmr(i)&&i.length>=2)e.push(i[0],i[1]);else if(Pmr(i))e.push(Fmr(i),jmr(i));else return new TypeError(Mmr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Tg.exports=Bmr});var Lg=s((HAe,Rg)=>{"use strict";var kmr=Zi(),Cmr=Ye(),Vmr=oi(),Umr=vi(),Gmr=V();function Dmr(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),kmr(n)&&n.length>=2)i.push(n[0],n[1]);else if(Cmr(n))i.push(Vmr(n),Umr(n));else return new TypeError(Gmr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}Rg.exports=Dmr});var Fg=s((zAe,Pg)=>{"use strict";var Hmr=Ye(),zmr=oi(),Wmr=vi();function Xmr(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!Hmr(i))return null;r[n]=zmr(i),r[n+1]=Wmr(i),n+=2}return r}Pg.exports=Xmr});var Dg=s((WAe,Gg)=>{"use strict";var Ln=be().isPrimitive,jg=Zi(),b2=Ve(),Mg=x0(),Bg=Z0(),Jmr=qe(),ra=qr(),_a=Ye(),rs=$0(),q2=Ee(),Ymr=K0(),Ta=Rn(),Ne=D(),is=br(),De=et(),kg=Na(),Zr=V(),es=oi(),ts=vi(),xmr=Sa(),Zmr=Oa(),$mr=Aa(),Qmr=Ki(),Cg=Ig(),Kmr=Lg(),ryr=Fg(),Ue=De.BYTES_PER_ELEMENT*2,Vg=Ymr();function Ia(r){return r instanceof ee||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Ug(r){return r===ee||r.name==="Complex128Array"}function eyr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ue}function tyr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ue*2}function ee(){var r,e,t,i;if(e=arguments.length,!(this instanceof ee))return e===0?new ee:e===1?new ee(arguments[0]):e===2?new ee(arguments[0],arguments[1]):new ee(arguments[0],arguments[1],arguments[2]);if(e===0)t=new De(0);else if(e===1)if(Ln(arguments[0]))t=new De(arguments[0]*2);else if(b2(arguments[0]))if(t=arguments[0],i=t.length,i&&Jmr(t)&&_a(t[0])){if(t=ryr(new De(i*2),t),t===null){if(!rs(i))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(arguments[0])}}else{if(eyr(t))t=xmr(t,0);else if(tyr(t))t=Zmr(t,0);else if(!rs(i))throw new RangeError(Zr("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(t)}else if(Mg(arguments[0])){if(t=arguments[0],!q2(t.byteLength/Ue))throw new RangeError(Zr("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ue,t.byteLength));t=new De(t)}else if(Bg(arguments[0])){if(t=arguments[0],Vg===!1)throw new TypeError(Zr("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!ra(t[Ta]))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ta](),!ra(t.next))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Cg(t),t instanceof Error)throw t;t=new De(t)}else throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Mg(t))throw new TypeError(Zr("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Ln(r))throw new TypeError(Zr("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!q2(r/Ue))throw new RangeError(Zr("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ue,r));if(e===2){if(i=t.byteLength-r,!q2(i/Ue))throw new RangeError(Zr("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ue,i));t=new De(t,r)}else{if(i=arguments[2],!Ln(i))throw new TypeError(Zr("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ue>t.byteLength-r)throw new RangeError(Zr("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ue));t=new De(t,r,i*2)}}return Ne(this,"_buffer",t),Ne(this,"_length",t.length/2),this}Ne(ee,"BYTES_PER_ELEMENT",Ue);Ne(ee,"name","Complex64Array");Ne(ee,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!ra(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ug(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!ra(a))throw new TypeError(Zr("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(Ia(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),_a(l))u[m]=es(l),u[m+1]=ts(l);else if(jg(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(b2(e)){if(a){for(f=e.length,e.get&&e.set?v=Qmr("default"):v=$mr("default"),p=0;p<f;p++)if(!_a(v(e,p))){c=!0;break}if(c){if(!rs(f))throw new RangeError(Zr("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),_a(l))u[m]=es(l),u[m+1]=ts(l);else if(jg(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(Bg(e)&&Vg&&ra(e[Ta])){if(u=e[Ta](),!ra(u.next))throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=Kmr(u,a,t):o=Cg(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Ne(ee,"of",function(){var e,t;if(!ra(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ug(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});is(ee.prototype,"buffer",function(){return this._buffer.buffer});is(ee.prototype,"byteLength",function(){return this._buffer.byteLength});is(ee.prototype,"byteOffset",function(){return this._buffer.byteOffset});Ne(ee.prototype,"BYTES_PER_ELEMENT",ee.BYTES_PER_ELEMENT);Ne(ee.prototype,"copyWithin",function(e,t){if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Ne(ee.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Ne(i,"next",v),Ne(i,"return",f),Ta&&Ne(i,Ta,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new kg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Ne(ee.prototype,"get",function(e){var t;if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ln(e))throw new TypeError(Zr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new kg(t[e],t[e+1])});is(ee.prototype,"length",function(){return this._length});Ne(ee.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!Ln(i))throw new TypeError(Zr("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(_a(e)){if(i>=this._length)throw new RangeError(Zr("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=es(e),a[i+1]=ts(e);return}if(Ia(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ue,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(b2(e)){for(o=e.length,f=0;f<o;f++)if(!_a(e[f])){u=!0;break}if(u){if(!rs(o))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ue,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=es(v),a[i+1]=ts(v),i+=2;return}throw new TypeError(Zr("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Gg.exports=ee});var Ra=s((XAe,Hg)=>{"use strict";var iyr=Dg();Hg.exports=iyr});var Wg=s((JAe,zg)=>{"use strict";function ayr(r){return r.re}zg.exports=ayr});var it=s((YAe,Xg)=>{"use strict";var nyr=Wg();Xg.exports=nyr});var Yg=s((xAe,Jg)=>{"use strict";function syr(r){return r.im}Jg.exports=syr});var at=s((ZAe,xg)=>{"use strict";var uyr=Yg();xg.exports=uyr});var $g=s(($Ae,Zg)=>{"use strict";var oyr=Zi(),vyr=Ye(),fyr=V(),cyr=it(),lyr=at();function pyr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,oyr(i)&&i.length>=2)e.push(i[0],i[1]);else if(vyr(i))e.push(cyr(i),lyr(i));else return new TypeError(fyr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Zg.exports=pyr});var Kg=s((QAe,Qg)=>{"use strict";var dyr=Zi(),gyr=Ye(),myr=V(),yyr=it(),hyr=at();function qyr(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),dyr(n)&&n.length>=2)i.push(n[0],n[1]);else if(gyr(n))i.push(yyr(n),hyr(n));else return new TypeError(myr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}Qg.exports=qyr});var em=s((KAe,rm)=>{"use strict";var byr=Ye(),wyr=it(),Eyr=at();function Nyr(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!byr(i))return null;r[n]=wyr(i),r[n+1]=Eyr(i),n+=2}return r}rm.exports=Nyr});var fm=s((r_e,vm)=>{"use strict";var Pn=be().isPrimitive,tm=Zi(),E2=Ve(),im=x0(),am=Z0(),Syr=qe(),ea=qr(),La=Ye(),as=$0(),w2=Ee(),Oyr=K0(),Pa=Rn(),Se=D(),us=br(),He=ge(),nm=Ea(),ns=it(),ss=at(),Ayr=Sa(),_yr=Oa(),Tyr=Aa(),Iyr=Ki(),$r=V(),sm=$g(),Ryr=Kg(),Lyr=em(),Ge=He.BYTES_PER_ELEMENT*2,um=Oyr();function Fa(r){return r instanceof te||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function om(r){return r===te||r.name==="Complex64Array"}function Pyr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ge/2}function Fyr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ge}function te(){var r,e,t,i;if(e=arguments.length,!(this instanceof te))return e===0?new te:e===1?new te(arguments[0]):e===2?new te(arguments[0],arguments[1]):new te(arguments[0],arguments[1],arguments[2]);if(e===0)t=new He(0);else if(e===1)if(Pn(arguments[0]))t=new He(arguments[0]*2);else if(E2(arguments[0]))if(t=arguments[0],i=t.length,i&&Syr(t)&&La(t[0])){if(t=Lyr(new He(i*2),t),t===null){if(!as(i))throw new RangeError($r("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new He(arguments[0])}}else{if(Pyr(t))t=Ayr(t,0);else if(Fyr(t))t=_yr(t,0);else if(!as(i))throw new RangeError($r("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new He(t)}else if(im(arguments[0])){if(t=arguments[0],!w2(t.byteLength/Ge))throw new RangeError($r("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ge,t.byteLength));t=new He(t)}else if(am(arguments[0])){if(t=arguments[0],um===!1)throw new TypeError($r("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!ea(t[Pa]))throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Pa](),!ea(t.next))throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=sm(t),t instanceof Error)throw t;t=new He(t)}else throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!im(t))throw new TypeError($r("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Pn(r))throw new TypeError($r("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!w2(r/Ge))throw new RangeError($r("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ge,r));if(e===2){if(i=t.byteLength-r,!w2(i/Ge))throw new RangeError($r("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ge,i));t=new He(t,r)}else{if(i=arguments[2],!Pn(i))throw new TypeError($r("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ge>t.byteLength-r)throw new RangeError($r("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ge));t=new He(t,r,i*2)}}return Se(this,"_buffer",t),Se(this,"_length",t.length/2),this}Se(te,"BYTES_PER_ELEMENT",Ge);Se(te,"name","Complex128Array");Se(te,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!ea(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!om(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!ea(a))throw new TypeError($r("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(Fa(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),La(l))u[m]=ns(l),u[m+1]=ss(l);else if(tm(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(E2(e)){if(a){for(f=e.length,e.get&&e.set?v=Iyr("default"):v=Tyr("default"),p=0;p<f;p++)if(!La(v(e,p))){c=!0;break}if(c){if(!as(f))throw new RangeError($r("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),La(l))u[m]=ns(l),u[m+1]=ss(l);else if(tm(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(am(e)&&um&&ea(e[Pa])){if(u=e[Pa](),!ea(u.next))throw new TypeError($r("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=Ryr(u,a,t):o=sm(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError($r("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Se(te,"of",function(){var e,t;if(!ea(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!om(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});us(te.prototype,"buffer",function(){return this._buffer.buffer});us(te.prototype,"byteLength",function(){return this._buffer.byteLength});us(te.prototype,"byteOffset",function(){return this._buffer.byteOffset});Se(te.prototype,"BYTES_PER_ELEMENT",te.BYTES_PER_ELEMENT);Se(te.prototype,"copyWithin",function(e,t){if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Se(te.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Se(i,"next",v),Se(i,"return",f),Pa&&Se(i,Pa,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new nm(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Se(te.prototype,"get",function(e){var t;if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Pn(e))throw new TypeError($r("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new nm(t[e],t[e+1])});us(te.prototype,"length",function(){return this._length});Se(te.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!Pn(i))throw new TypeError($r("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(La(e)){if(i>=this._length)throw new RangeError($r("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=ns(e),a[i+1]=ss(e);return}if(Fa(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ge,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new He(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(E2(e)){for(o=e.length,f=0;f<o;f++)if(!La(e[f])){u=!0;break}if(u){if(!as(o))throw new RangeError($r("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ge,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new He(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=ns(v),a[i+1]=ss(v),i+=2;return}throw new TypeError($r("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});vm.exports=te});var ja=s((e_e,cm)=>{"use strict";var jyr=fm();cm.exports=jyr});var pm=s((t_e,lm)=>{"use strict";var Myr=ge(),Byr=et(),kyr=me(),Cyr=ui(),Vyr=xi(),Uyr=qa(),Gyr=tt(),Dyr=ba(),Hyr=wa(),zyr=Ra(),Wyr=ja(),Xyr=[Myr,Byr,Cyr,kyr,Uyr,Vyr,Hyr,Gyr,Dyr,zyr,Wyr];lm.exports=Xyr});var gm=s((i_e,dm)=>{"use strict";var Jyr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];dm.exports=Jyr});var hm=s((a_e,ym)=>{"use strict";var Yyr=Yi(),xyr=qe(),Zyr=qt(),$yr=C8(),Qyr=pm(),mm=gm(),Kyr=mm.length;function rhr(r){var e;if(xyr(r))return"generic";if(Yyr(r))return null;for(e=0;e<Kyr;e++)if(r instanceof Qyr[e])return mm[e];return $yr[Zyr(r)]||null}ym.exports=rhr});var Ma=s((n_e,qm)=>{"use strict";var ehr=hm();qm.exports=ehr});var Em=s((s_e,wm)=>{"use strict";var bm=qr(),thr=Ve(),ihr=S8(),ahr=ma(),nhr=W0(),shr=X0(),uhr=Ma(),N2=V();function ohr(){var r,e,t,i,a,n,u,o,v;if(r=arguments[0],arguments.length>1)if(thr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!bm(t))throw new TypeError(N2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!bm(t))throw new TypeError(N2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!ihr(r))throw new TypeError(N2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(a=i.length,u=uhr(i),ahr(i)?n=nhr(u):n=shr(u),t){for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,t.call(e,v.value,o));return i}for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,v.value);return i}wm.exports=ohr});var Sm=s((u_e,Nm)=>{"use strict";var vhr=Em();Nm.exports=vhr});var Am=s((o_e,Om)=>{"use strict";function fhr(r){return r!==r}Om.exports=fhr});var z=s((v_e,_m)=>{"use strict";var chr=Am();_m.exports=chr});var Im=s((f_e,Tm)=>{"use strict";var lhr={Complex64:"complex64",Complex128:"complex128"};Tm.exports=lhr});var Lm=s((c_e,Rm)=>{"use strict";var phr=Na(),dhr=Ea(),ghr=[phr,dhr];Rm.exports=ghr});var Fm=s((l_e,Pm)=>{"use strict";var mhr=["complex64","complex128"];Pm.exports=mhr});var Bm=s((p_e,Mm)=>{"use strict";var yhr=qt(),hhr=Im(),qhr=Lm(),jm=Fm(),bhr=jm.length;function whr(r){var e;for(e=0;e<bhr;e++)if(r instanceof qhr[e])return jm[e];return hhr[yhr(r)]||null}Mm.exports=whr});var S2=s((d_e,km)=>{"use strict";var Ehr=Bm();km.exports=Ehr});var Vm=s((g_e,Cm)=>{"use strict";var Nhr=ge(),Shr=et(),Ohr=ja(),Ahr=Ra(),_hr={float64:Nhr,float32:Shr,complex128:Ohr,complex64:Ahr};Cm.exports=_hr});var Gm=s((m_e,Um)=>{"use strict";var Thr=Vm();function Ihr(r){return Thr[r]||null}Um.exports=Ihr});var Hm=s((y_e,Dm)=>{"use strict";var Rhr=Gm();Dm.exports=Rhr});var Wm=s((h_e,zm)=>{"use strict";function Lhr(r,e,t,i){var a,n,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(a=[r],i?n=t-1:n=t,u=(e-r)/n,o=1;o<n;o++)a.push(r+u*o);return i&&a.push(e),a}zm.exports=Lhr});var $m=s((q_e,Zm)=>{"use strict";var Phr=Na(),Fhr=Ea(),Xm=it(),Jm=at(),Ym=oi(),xm=vi();function jhr(r,e,t,i,a,n){var u,o,v,f,c,l,p,m,y,g,d,h,q;if(a===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=Ym(e),l=xm(e)):(f=Xm(e),l=Jm(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Ym(i),p=xm(i)):(c=Xm(i),p=Jm(i)),o===2?u=Phr:u=Fhr,a===1)return n?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],n?h=a-1:h=a,g=(c-f)/h,d=(p-l)/h,q=1;q<h;q++)m=f+g*q,y=l+d*q,v.push(new u(m,y));return n&&v.push(new u(c,p)),v}Zm.exports=jhr});var O2=s((b_e,Qm)=>{"use strict";function Mhr(r,e,t,i,a){var n,u,o;if(i===0)return r;if(i===1)return a?r[0]=t:r[0]=e,r;for(r[0]=e,a?n=i-1:n=i,u=(t-e)/n,o=1;o<n;o++)r[o]=e+u*o;return a&&(r[n]=t),r}Qm.exports=Mhr});var A2=s((w_e,iy)=>{"use strict";var Km=it(),ry=at(),ey=oi(),ty=vi();function Bhr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g;if(n===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=ey(t),f=ty(t)):(o=Km(t),f=ry(t)),i==="float64"?(v=a,c=0):i==="complex64"?(v=ey(a),c=ty(a)):(v=Km(a),c=ry(a)),n===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=n-1:m=n,l=(v-o)/m,p=(c-f)/m,g=2,y=1;y<m;y++)r[g]=o+l*y,r[g+1]=f+p*y,g+=2;return u&&(r[g]=v,r[g+1]=c),r}iy.exports=Bhr});var ny=s((E_e,ay)=>{"use strict";var khr=Object;ay.exports=khr});var Ba=s((N_e,sy)=>{"use strict";var Chr=ny();sy.exports=Chr});var oy=s((S_e,uy)=>{"use strict";var Vhr=Object.getPrototypeOf;uy.exports=Vhr});var fy=s((O_e,vy)=>{"use strict";function Uhr(r){return r.__proto__}vy.exports=Uhr});var ly=s((A_e,cy)=>{"use strict";var Ghr=re(),Dhr=fy();function Hhr(r){var e=Dhr(r);return e||e===null?e:Ghr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}cy.exports=Hhr});var dy=s((__e,py)=>{"use strict";var zhr=qr(),Whr=oy(),Xhr=ly(),_2;zhr(Object.getPrototypeOf)?_2=Whr:_2=Xhr;py.exports=_2});var my=s((T_e,gy)=>{"use strict";var Jhr=Ba(),Yhr=dy();function xhr(r){return r==null?null:(r=Jhr(r),Yhr(r))}gy.exports=xhr});var ta=s((I_e,yy)=>{"use strict";var Zhr=my();yy.exports=Zhr});var by=s((R_e,qy)=>{"use strict";var $hr=Z0(),hy=qr(),Qhr=ta(),os=vr(),Khr=re(),rqr=Object.prototype;function eqr(r){var e;for(e in r)if(!os(r,e))return!1;return!0}function tqr(r){var e;return $hr(r)?(e=Qhr(r),e?!os(r,"constructor")&&os(e,"constructor")&&hy(e.constructor)&&Khr(e.constructor)==="[object Function]"&&os(e,"isPrototypeOf")&&hy(e.isPrototypeOf)&&(e===rqr||eqr(r)):!0):!1}qy.exports=tqr});var hr=s((L_e,wy)=>{"use strict";var iqr=by();wy.exports=iqr});var T2=s((P_e,Ey)=>{"use strict";function aqr(r){return typeof r=="string"}Ey.exports=aqr});var Sy=s((F_e,Ny)=>{"use strict";var nqr=String.prototype.valueOf;Ny.exports=nqr});var Ay=s((j_e,Oy)=>{"use strict";var sqr=Sy();function uqr(r){try{return sqr.call(r),!0}catch{return!1}}Oy.exports=uqr});var I2=s((M_e,_y)=>{"use strict";var oqr=ga(),vqr=re(),fqr=Ay(),cqr=oqr();function lqr(r){return typeof r=="object"?r instanceof String?!0:cqr?fqr(r):vqr(r)==="[object String]":!1}_y.exports=lqr});var Iy=s((B_e,Ty)=>{"use strict";var pqr=T2(),dqr=I2();function gqr(r){return pqr(r)||dqr(r)}Ty.exports=gqr});var Yr=s((k_e,Ly)=>{"use strict";var Ry=D(),R2=Iy(),mqr=T2(),yqr=I2();Ry(R2,"isPrimitive",mqr);Ry(R2,"isObject",yqr);Ly.exports=R2});var P2=s((C_e,Fy)=>{"use strict";var hqr=hr(),Py=vr(),qqr=Yr().isPrimitive,bqr=de().isPrimitive,L2=V();function wqr(r,e){return hqr(e)?Py(e,"dtype")&&(r.dtype=e.dtype,!qqr(r.dtype))?new TypeError(L2("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Py(e,"endpoint")&&(r.endpoint=e.endpoint,!bqr(r.endpoint))?new TypeError(L2("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(L2("invalid argument. Options argument must be an object. Value: `%s`.",e))}Fy.exports=wqr});var F2=s((V_e,Eqr)=>{Eqr.exports={endpoint:!0}});var Uy=s((U_e,Vy)=>{"use strict";var jy=Ye(),My=Nr().isPrimitive,Nqr=be().isPrimitive,By=z(),ky=S2(),Sqr=Hm(),Oqr=Sa(),Aqr=Oa(),ka=V(),_qr=Wm(),Tqr=$m(),Iqr=O2(),Cy=A2(),Rqr=P2(),Lqr=F2();function Pqr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(o=ky(r),o===null){if(!jy(r))throw new TypeError(ka("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!My(r)||By(r))throw new TypeError(ka("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=ky(e),v===null){if(!jy(e))throw new TypeError(ka("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!My(e)||By(e))throw new TypeError(ka("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!Nqr(t))throw new TypeError(ka("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Lqr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(n=Rqr(i,arguments[3]),n))throw n;if(i.dtype==="generic")return f?Tqr(o,r,v,e,t,i.endpoint):_qr(r,e,t,i.endpoint);if(a=Sqr(i.dtype),a===null)throw new TypeError(ka('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new a(t),i.dtype==="complex64")return Cy(Oqr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return Cy(Aqr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return Iqr(u,r,e,t,i.endpoint)}Vy.exports=Pqr});var Dy=s((G_e,Gy)=>{"use strict";var Fqr=ma(),jqr=Aa(),Mqr=X0(),Bqr=Ki(),kqr=W0(),Cqr=Ma();function Vqr(r){var e=Cqr(r);return Fqr(r)?{accessorProtocol:!0,accessors:[Bqr(e),kqr(e)]}:{accessorProtocol:!1,accessors:[jqr(e),Mqr(e)]}}Gy.exports=Vqr});var zy=s((D_e,Hy)=>{"use strict";var Uqr=Dy();Hy.exports=Uqr});var Xy=s((H_e,Wy)=>{"use strict";var Gqr=zy();function Dqr(r){var e=Gqr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Wy.exports=Dqr});var Fn=s((z_e,Jy)=>{"use strict";var Hqr=Xy();Jy.exports=Hqr});var Ky=s((W_e,Qy)=>{"use strict";var zqr=Na(),Wqr=Ea(),Yy=it(),xy=at(),Zy=oi(),$y=vi();function Xqr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g,d,h,q,w,A;if(n===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=Zy(t),l=$y(t)):(f=Yy(t),l=xy(t)),i==="float64"?(c=a,p=0):i==="complex64"?(v+=1,c=Zy(a),p=$y(a)):(c=Yy(a),p=xy(a)),v===2?o=zqr:o=Wqr,y=r.data,m=r.accessors[1],n===1)return u?m(y,0,new o(c,p)):m(y,0,new o(f,l)),r;for(m(y,0,new o(f,l)),u?w=n-1:w=n,h=(c-f)/w,q=(p-l)/w,A=1;A<w;A++)g=f+h*A,d=l+q*A,m(y,A,new o(g,d));return u&&m(y,w,new o(c,p)),r}Qy.exports=Xqr});var eh=s((X_e,rh)=>{"use strict";function Jqr(r,e,t,i,a){var n,u,o,v,f;if(i===0)return r;if(n=r.data,u=r.accessors[1],i===1)return a?u(n,0,t):u(n,0,e),r;for(u(n,0,e),a?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(n,f,e+v*f);return a&&u(n,o,t),r}rh.exports=Jqr});var vh=s((J_e,oh)=>{"use strict";var th=Ye(),ih=Nr().isPrimitive,Yqr=Ve(),jn=V(),ah=z(),nh=S2(),xqr=Ma(),Zqr=Sa(),$qr=Oa(),sh=Fn(),Qqr=Ky(),Kqr=eh(),uh=A2(),rbr=O2(),ebr=P2(),tbr=F2();function ibr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(n=nh(r),n===null){if(!th(r))throw new TypeError(jn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="complex128"}o=!0}else{if(!ih(r)||ah(r))throw new TypeError(jn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="float64"}if(typeof e=="object"){if(u=nh(e),u===null){if(!th(e))throw new TypeError(jn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!ih(e)||ah(e))throw new TypeError(jn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!Yqr(t))throw new TypeError(jn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:tbr.endpoint},arguments.length>3&&(a=ebr(i,arguments[3]),a))throw a;if(v=xqr(t),v===null&&(v="generic"),v==="complex64")return uh(Zqr(t,0),n,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return uh($qr(t,0),n,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=sh(t),Qqr(f,n,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=sh(t),f.accessorProtocol?(Kqr(f,r,e,t.length,i.endpoint),t):(rbr(t,r,e,t.length,i.endpoint),t)}oh.exports=ibr});var lh=s((Y_e,ch)=>{"use strict";var abr=D(),fh=Uy(),nbr=vh();abr(fh,"assign",nbr);ch.exports=fh});var dh=s((x_e,ph)=>{"use strict";var sbr=Nr().isPrimitive,ubr=Yr().isPrimitive,obr=de().isPrimitive,vbr=qe(),fbr=V(),cbr={number:sbr,string:ubr,boolean:obr};function lbr(r,e,t){var i,a,n,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],i=[],v=0;v<r.length;v++)if(o=r[v],n=e[v],u=cbr[n],u(o))i.push([[o]]),a.push([1,1]);else if(vbr(o))i.push(o),a.push([o.length,o[0].length]);else throw new TypeError(fbr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],n,n,String(o)));return[i,a]}ph.exports=lbr});var vs=s((Z_e,gh)=>{"use strict";var pbr=dh();gh.exports=pbr});var yh=s(($_e,mh)=>{"use strict";var dbr=D0();function gbr(r){return dbr(1,r)}mh.exports=gbr});var qh=s((Q_e,hh)=>{"use strict";var mbr=yh();hh.exports=mbr});var wh=s((K_e,bh)=>{"use strict";function ybr(r,e,t){var i,a,n,u,o,v,f,c;if(i=e[1],a=e[0],!(i<=0||a<=0))for(f=r[0],c=r[1],u=0;u<a;u++)for(o=f[u],v=c[u],n=0;n<i;n++)v[n]=t(o[n])}bh.exports=ybr});var j2=s((rTe,Eh)=>{"use strict";var hbr=wh();Eh.exports=hbr});var Sh=s((eTe,Nh)=>{"use strict";var qbr=D0();function bbr(r){return qbr(0,r)}Nh.exports=bbr});var fs=s((tTe,Oh)=>{"use strict";var wbr=Sh();Oh.exports=wbr});var _h=s((iTe,Ah)=>{"use strict";var Oe=Qr(),Ebr=L1(),Nbr=F1(),Sbr=G0(),Obr=On(),Abr=D0(),_br=Ac(),Tbr=H0(),Ibr=Sm(),Rbr=lh(),Lbr=vs(),Pbr=qh(),Fbr=j2(),jbr=si(),Mbr=fs();function Bbr(r){return Oe(r,"bbinary2d",Ebr),Oe(r,"bternary2d",Nbr),Oe(r,"broadcastShapes",Sbr),Oe(r,"filled",Obr),Oe(r,"filled2d",Abr),Oe(r,"filled2dBy",_br),Oe(r,"flatten2d",Tbr),Oe(r,"iterator2array",Ibr),Oe(r,"linspace",Rbr),Oe(r,"normalizeBroadcastArgs",Lbr),Oe(r,"ones2d",Pbr),Oe(r,"unary2d",Fbr),Oe(r,"zeros",jbr),Oe(r,"zeros2d",Mbr),r}Ah.exports=Bbr});var Rh=s((aTe,Ih)=>{"use strict";var Th=V();function kbr(r,e,t,i,a){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(Th('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(a!=="closed"&&a!=="open")throw new TypeError(Th('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),a))}return i==="closed"||i===void 0?a==="closed"||a===void 0?r>=e&&r<=t:r>=e&&r<t:a==="closed"||a===void 0?r>e&&r<=t:r>e&&r<t}Ih.exports=kbr});var Ph=s((nTe,Lh)=>{"use strict";var Cbr=Rh();Lh.exports=Cbr});var jh=s((sTe,Fh)=>{"use strict";var Vbr=Nr().isPrimitive,Ubr=Ph(),Gbr=V();function Dbr(r,e,t,i,a,n){var u,o;if(!(Vbr(r)&&Ubr(r,e,t,i,a)))throw i==="closed"?u="[":u="(",a==="closed"?o="]":o=")",new TypeError(Gbr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",n,u,e,t,o,String(r)))}Fh.exports=Dbr});var Bh=s((uTe,Mh)=>{"use strict";var Hbr=jh();Mh.exports=Hbr});var Ch=s((oTe,kh)=>{"use strict";var zbr=de().isPrimitive,Wbr=V();function Xbr(r,e){if(!zbr(r))throw new TypeError(Wbr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}kh.exports=Xbr});var Uh=s((vTe,Vh)=>{"use strict";var Jbr=Ch();Vh.exports=Jbr});var Dh=s((fTe,Gh)=>{"use strict";function Ybr(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,e!==1&&i!==1&&i!==e||t!==1&&a!==1&&a!==t)return!1;return!0}Gh.exports=Ybr});var zh=s((cTe,Hh)=>{"use strict";var xbr=Dh();Hh.exports=xbr});var Xh=s((lTe,Wh)=>{"use strict";var Zbr=V(),$br=zh();function Qbr(r,e,t){if(!$br(r,e))throw new TypeError(Zbr("invalid argument. %s must be broadcast compatible.",t))}Wh.exports=Qbr});var Yh=s((pTe,Jh)=>{"use strict";var Kbr=Xh();Jh.exports=Kbr});var Zh=s((dTe,xh)=>{"use strict";function rwr(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,i!==1&&i!==e||a!==1&&a!==t)return!1;return!0}xh.exports=rwr});var Qh=s((gTe,$h)=>{"use strict";var ewr=Zh();$h.exports=ewr});var rq=s((mTe,Kh)=>{"use strict";var twr=V(),iwr=Qh();function awr(r,e,t,i){if(!iwr(r,e))throw new TypeError(twr("invalid argument. %s must be broadcast compatible with %s.",t,i))}Kh.exports=awr});var tq=s((yTe,eq)=>{"use strict";var nwr=rq();eq.exports=nwr});var aq=s((hTe,iq)=>{"use strict";function swr(r,e,t){var i,a,n,u,o;for(i=r.length,a=t,n=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?n+=u*(r[o]-1):u<0&&(a+=u*(r[o]-1))}return[a,n]}iq.exports=swr});var sq=s((qTe,nq)=>{"use strict";function uwr(r,e,t,i){var a,n,u,o,v;for(a=r.length,n=t,u=t,v=0;v<a;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(n+=o*(r[v]-1))}return i[0]=n,i[1]=u,i}nq.exports=uwr});var cs=s((bTe,oq)=>{"use strict";var owr=D(),uq=aq(),vwr=sq();owr(uq,"assign",vwr);oq.exports=uq});var fq=s((wTe,vq)=>{"use strict";var fwr=cs();function cwr(r,e,t,i){var a=fwr(e,t,i);return a[0]>=0&&a[1]<r}vq.exports=cwr});var M2=s((ETe,cq)=>{"use strict";var lwr=fq();cq.exports=lwr});var pq=s((NTe,lq)=>{"use strict";var pwr=M2();function dwr(r,e,t,i){if(e.length&&!pwr(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}lq.exports=dwr});var gq=s((STe,dq)=>{"use strict";var gwr=pq();dq.exports=gwr});var yq=s((OTe,mq)=>{"use strict";var mwr=V();function ywr(r,e){if(r===void 0)throw new Error(mwr("invalid invocation. Must provide %s.",e))}mq.exports=ywr});var B2=s((ATe,hq)=>{"use strict";var hwr=yq();hq.exports=hwr});var bq=s((_Te,qq)=>{"use strict";var qwr=V();function bwr(r,e,t,i){if(!(r>e))throw new TypeError(qwr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}qq.exports=bwr});var Eq=s((TTe,wq)=>{"use strict";var wwr=bq();wq.exports=wwr});var Sq=s((ITe,Nq)=>{"use strict";var Ewr=V();function Nwr(r,e,t,i){if(!(r>=e))throw new TypeError(Ewr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Nq.exports=Nwr});var Aq=s((RTe,Oq)=>{"use strict";var Swr=Sq();Oq.exports=Swr});var Tq=s((LTe,_q)=>{"use strict";var Owr=ye().isPrimitive,Awr=V();function _wr(r,e){if(!Owr(r))throw new TypeError(Awr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}_q.exports=_wr});var Rq=s((PTe,Iq)=>{"use strict";var Twr=Tq();Iq.exports=Twr});var Pq=s((FTe,Lq)=>{"use strict";var Iwr=V();function Rwr(r,e,t,i){if(!(r<e))throw new TypeError(Iwr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Lq.exports=Rwr});var jq=s((jTe,Fq)=>{"use strict";var Lwr=Pq();Fq.exports=Lwr});var Bq=s((MTe,Mq)=>{"use strict";var Pwr=V();function Fwr(r,e,t,i){if(!(r<=e))throw new TypeError(Pwr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Mq.exports=Fwr});var Cq=s((BTe,kq)=>{"use strict";var jwr=Bq();kq.exports=jwr});var Uq=s((kTe,Vq)=>{"use strict";var Mwr=be().isPrimitive,Bwr=V();function kwr(r,e){if(!Mwr(r))throw new TypeError(Bwr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Vq.exports=kwr});var Dq=s((CTe,Gq)=>{"use strict";var Cwr=Uq();Gq.exports=Cwr});var k2=s((VTe,Hq)=>{"use strict";var Vwr=Nr().isPrimitive;function Uwr(r){return Vwr(r)&&r>=0}Hq.exports=Uwr});var C2=s((UTe,zq)=>{"use strict";var Gwr=Nr().isObject;function Dwr(r){return Gwr(r)&&r.valueOf()>=0}zq.exports=Dwr});var Xq=s((GTe,Wq)=>{"use strict";var Hwr=k2(),zwr=C2();function Wwr(r){return Hwr(r)||zwr(r)}Wq.exports=Wwr});var ls=s((DTe,Yq)=>{"use strict";var Jq=D(),V2=Xq(),Xwr=k2(),Jwr=C2();Jq(V2,"isPrimitive",Xwr);Jq(V2,"isObject",Jwr);Yq.exports=V2});var Zq=s((HTe,xq)=>{"use strict";var Ywr=ls().isPrimitive,xwr=V();function Zwr(r,e){if(!Ywr(r))throw new TypeError(xwr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}xq.exports=Zwr});var Qq=s((zTe,$q)=>{"use strict";var $wr=Zq();$q.exports=$wr});var rb=s((WTe,Kq)=>{"use strict";var Qwr=Nr().isPrimitive,Kwr=V();function rEr(r,e){if(!Qwr(r))throw new TypeError(Kwr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Kq.exports=rEr});var tb=s((XTe,eb)=>{"use strict";var eEr=rb();eb.exports=eEr});var ab=s((JTe,ib)=>{"use strict";var tEr=V();function iEr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(tEr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}ib.exports=iEr});var sb=s((YTe,nb)=>{"use strict";var aEr=ab();nb.exports=aEr});var U2=s((xTe,ub)=>{"use strict";var nEr=ye().isPrimitive;function sEr(r){return nEr(r)&&r>0}ub.exports=sEr});var G2=s((ZTe,ob)=>{"use strict";var uEr=ye().isObject;function oEr(r){return uEr(r)&&r.valueOf()>0}ob.exports=oEr});var fb=s(($Te,vb)=>{"use strict";var vEr=U2(),fEr=G2();function cEr(r){return vEr(r)||fEr(r)}vb.exports=cEr});var nt=s((QTe,lb)=>{"use strict";var cb=D(),D2=fb(),lEr=U2(),pEr=G2();cb(D2,"isPrimitive",lEr);cb(D2,"isObject",pEr);lb.exports=D2});var db=s((KTe,pb)=>{"use strict";var dEr=nt().isPrimitive,gEr=V();function mEr(r,e){if(!dEr(r))throw new TypeError(gEr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}pb.exports=mEr});var H2=s((rIe,gb)=>{"use strict";var yEr=db();gb.exports=yEr});var z2=s((eIe,mb)=>{"use strict";var hEr=Nr().isPrimitive;function qEr(r){return hEr(r)&&r>0}mb.exports=qEr});var W2=s((tIe,yb)=>{"use strict";var bEr=Nr().isObject;function wEr(r){return bEr(r)&&r.valueOf()>0}yb.exports=wEr});var qb=s((iIe,hb)=>{"use strict";var EEr=z2(),NEr=W2();function SEr(r){return EEr(r)||NEr(r)}hb.exports=SEr});var Hr=s((aIe,wb)=>{"use strict";var bb=D(),X2=qb(),OEr=z2(),AEr=W2();bb(X2,"isPrimitive",OEr);bb(X2,"isObject",AEr);wb.exports=X2});var Nb=s((nIe,Eb)=>{"use strict";var _Er=Hr().isPrimitive,TEr=V();function IEr(r,e){if(!_Er(r))throw new TypeError(TEr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}Eb.exports=IEr});var Ob=s((sIe,Sb)=>{"use strict";var REr=Nb();Sb.exports=REr});var J2=s((uIe,Ab)=>{"use strict";var LEr=Nr().isPrimitive;function PEr(r){return LEr(r)&&r>=0&&r<=1}Ab.exports=PEr});var Y2=s((oIe,_b)=>{"use strict";var FEr=Nr().isObject;function jEr(r){return FEr(r)&&r.valueOf()>=0&&r.valueOf()<=1}_b.exports=jEr});var Ib=s((vIe,Tb)=>{"use strict";var MEr=J2(),BEr=Y2();function kEr(r){return MEr(r)||BEr(r)}Tb.exports=kEr});var Mn=s((fIe,Lb)=>{"use strict";var Rb=D(),x2=Ib(),CEr=J2(),VEr=Y2();Rb(x2,"isPrimitive",CEr);Rb(x2,"isObject",VEr);Lb.exports=x2});var Fb=s((cIe,Pb)=>{"use strict";var UEr=Mn().isPrimitive,GEr=V();function DEr(r,e){if(!UEr(r))throw new TypeError(GEr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}Pb.exports=DEr});var Mb=s((lIe,jb)=>{"use strict";var HEr=Fb();jb.exports=HEr});var kb=s((pIe,Bb)=>{"use strict";var zEr=qe(),WEr=V();function XEr(r,e){if(!zEr(r))throw new TypeError(WEr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Bb.exports=XEr});var Vb=s((dIe,Cb)=>{"use strict";var JEr=kb();Cb.exports=JEr});var Gb=s((gIe,Ub)=>{"use strict";function YEr(r){return r.length===1||r[0].length===1}Ub.exports=YEr});var Hb=s((mIe,Db)=>{"use strict";var xEr=Gb();Db.exports=xEr});var Wb=s((yIe,zb)=>{"use strict";var ZEr=qe(),$Er=Hb();function QEr(r){return ZEr(r)&&$Er(r)}zb.exports=QEr});var Z2=s((hIe,Xb)=>{"use strict";var KEr=Wb();Xb.exports=KEr});var Yb=s((qIe,Jb)=>{"use strict";var rNr=V(),eNr=Z2();function tNr(r,e){if(!eNr(r))throw new TypeError(rNr("invalid argument. %s must consist of only a single row or a single column.",e))}Jb.exports=tNr});var Zb=s((bIe,xb)=>{"use strict";var iNr=Yb();xb.exports=iNr});var Qb=s((wIe,$b)=>{"use strict";function aNr(r){var e,t,i,a;for(e=r.length,t=r[0].length,a=1;a<arguments.length;a++)if(i=arguments[a],i.length!==e||i[0].length!==t)return!1;return!0}$b.exports=aNr});var rw=s((EIe,Kb)=>{"use strict";var nNr=Qb();Kb.exports=nNr});var tw=s((NIe,ew)=>{"use strict";var sNr=V(),uNr=rw();function oNr(r,e,t){if(!uNr(r,e))throw new TypeError(sNr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}ew.exports=oNr});var aw=s((SIe,iw)=>{"use strict";var vNr=tw();iw.exports=vNr});var sw=s((OIe,nw)=>{"use strict";var fNr=Yr().isPrimitive,cNr=V();function lNr(r,e){if(!fNr(r))throw new TypeError(cNr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}nw.exports=lNr});var ow=s((AIe,uw)=>{"use strict";var pNr=sw();uw.exports=pNr});var fw=s((_Ie,vw)=>{"use strict";var dNr=V(),gNr=be().isPrimitive;function mNr(r,e){var t;for(t=0;t<r.length;t++)if(!gNr(r[t]))throw new TypeError(dNr("invalid argument. %s must contain only nonnegative integers.",e))}vw.exports=mNr});var lw=s((TIe,cw)=>{"use strict";var yNr=fw();cw.exports=yNr});var dw=s((IIe,pw)=>{"use strict";var hNr=V(),qNr=ye().isPrimitive;function bNr(r,e){var t;for(t=0;t<r.length;t++)if(!qNr(r[t]))throw new TypeError(hNr("invalid argument. %s must contain only integers.",e))}pw.exports=bNr});var mw=s((RIe,gw)=>{"use strict";var wNr=dw();gw.exports=wNr});var hw=s((LIe,yw)=>{"use strict";var ENr=V();function NNr(r){throw new Error(ENr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}yw.exports=NNr});var bw=s((PIe,qw)=>{"use strict";var SNr=hw();qw.exports=SNr});var Nw=s((FIe,Ew)=>{"use strict";var ww=H2(),ONr=B2();function ANr(r,e,t){ww(r,"Number of rows"),ww(e,"Number of columns"),ONr(t,"a pseudorandom number generator seed")}Ew.exports=ANr});var Ow=s((jIe,Sw)=>{"use strict";var _Nr=Nw();Sw.exports=_Nr});var _w=s((MIe,Aw)=>{"use strict";var TNr=Ee(),INr=y2();function RNr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&TNr(r.length)&&r.length>=0&&r.length<=INr}Aw.exports=RNr});var Iw=s((BIe,Tw)=>{"use strict";var LNr=_w();Tw.exports=LNr});var Lw=s((kIe,Rw)=>{"use strict";var PNr=Iw(),FNr=V();function jNr(r){if(typeof r!="function")throw new TypeError(FNr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!PNr(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}Rw.exports=jNr});var $2=s((CIe,Pw)=>{"use strict";var MNr=Lw();Pw.exports=MNr});var Mw=s((VIe,jw)=>{"use strict";var Q2=ye(),Fw=D(),K2=$2(),BNr=K2(Q2.isPrimitive),kNr=K2(Q2.isObject),rv=K2(Q2);Fw(rv,"primitives",BNr);Fw(rv,"objects",kNr);jw.exports=rv});var Cw=s((UIe,kw)=>{"use strict";var ev=be(),Bw=D(),tv=$2(),CNr=tv(ev.isPrimitive),VNr=tv(ev.isObject),iv=tv(ev);Bw(iv,"primitives",CNr);Bw(iv,"objects",VNr);kw.exports=iv});var Uw=s((GIe,Vw)=>{"use strict";var st=Qr(),UNr=qe(),GNr=ye().isPrimitive,DNr=Mw().primitives,HNr=be().isPrimitive,zNr=Cw().primitives,WNr=ls().isPrimitive,XNr=Nr().isPrimitive,JNr=nt().isPrimitive,YNr=Hr().isPrimitive,xNr=Yr().isPrimitive;function ZNr(r){return st(r,"isArray",UNr),st(r,"isInteger",GNr),st(r,"isIntegerArray",DNr),st(r,"isNonNegativeInteger",HNr),st(r,"isNonNegativeIntegerArray",zNr),st(r,"isNonNegativeNumber",WNr),st(r,"isNumber",XNr),st(r,"isPositiveInteger",JNr),st(r,"isPositiveNumber",YNr),st(r,"isString",xNr),r}Vw.exports=ZNr});var Dw=s((DIe,Gw)=>{"use strict";var zr=Qr(),$Nr=Bh(),QNr=Uh(),KNr=Yh(),rSr=tq(),eSr=gq(),tSr=B2(),iSr=Eq(),aSr=Aq(),nSr=Rq(),sSr=jq(),uSr=Cq(),oSr=Dq(),vSr=Qq(),fSr=tb(),cSr=sb(),lSr=H2(),pSr=Ob(),dSr=Mb(),gSr=Vb(),mSr=Zb(),ySr=aw(),hSr=ow(),qSr=lw(),bSr=mw(),wSr=bw(),ESr=Ow(),NSr=Uw();function SSr(r){return zr(r,"isBetween",$Nr),zr(r,"isBoolean",QNr),zr(r,"isBroadcastCompatible",KNr),zr(r,"isBroadcastCompatibleWith",rSr),zr(r,"isBufferLengthCompatible",eSr),zr(r,"isDefined",tSr),zr(r,"isGreaterThan",iSr),zr(r,"isGreaterThanEqual",aSr),zr(r,"isInteger",nSr),zr(r,"isLessThan",sSr),zr(r,"isLessThanEqual",uSr),zr(r,"isNonNegativeInteger",oSr),zr(r,"isNonNegativeNumber",vSr),zr(r,"isNumber",fSr),zr(r,"isOneOf",cSr),zr(r,"isPositiveInteger",lSr),zr(r,"isPositiveNumber",pSr),zr(r,"isProbability",dSr),zr(r,"isRange",gSr),zr(r,"isRange1d",mSr),zr(r,"isSameShape",ySr),zr(r,"isString",hSr),zr(r,"isValidShape",qSr),zr(r,"isValidStrides",bSr),zr(r,"unrecognizedOptionName",wSr),zr(r,"verifyCommonPRNGArgs",ESr),zr(r,"base",NSr({})),r}Gw.exports=SSr});var zw=s((HIe,Hw)=>{"use strict";var av=4;function OSr(r,e,t,i,a,n){var u,o,v,f;if(r<=0||e===0)return a;if(i===1&&n===1){if(v=r%av,v>0)for(f=0;f<v;f++)a[f]+=e*t[f];if(r<av)return a;for(f=v;f<r;f+=av)a[f]+=e*t[f],a[f+1]+=e*t[f+1],a[f+2]+=e*t[f+2],a[f+3]+=e*t[f+3];return a}for(i<0?u=(1-r)*i:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r;f++)a[o]+=e*t[u],u+=i,o+=n;return a}Hw.exports=OSr});var Xw=s((zIe,Ww)=>{"use strict";var Bn=4;function ASr(r,e,t,i,a,n,u,o){var v,f,c,l;if(r<=0||e===0)return n;if(v=a,f=o,i===1&&u===1){if(c=r%Bn,c>0)for(l=0;l<c;l++)n[f]+=e*t[v],v+=i,f+=u;if(r<Bn)return n;for(l=c;l<r;l+=Bn)n[f]+=e*t[v],n[f+1]+=e*t[v+1],n[f+2]+=e*t[v+2],n[f+3]+=e*t[v+3],v+=Bn,f+=Bn;return n}for(l=0;l<r;l++)n[f]+=e*t[v],v+=i,f+=u;return n}Ww.exports=ASr});var nv=s((WIe,Yw)=>{"use strict";var _Sr=D(),Jw=zw(),TSr=Xw();_Sr(Jw,"ndarray",TSr);Yw.exports=Jw});var $w=s((XIe,Zw)=>{"use strict";var xw=Qr(),ISr=nv().ndarray,RSr=nv().ndarray;function LSr(r){return xw(r,"daxpy",ISr),xw(r,"saxpy",RSr),r}Zw.exports=LSr});var Kw=s((JIe,Qw)=>{"use strict";var PSr=ta(),FSr=re();function jSr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(FSr(r)==="[object Error]")return!0;r=PSr(r)}return!1}Qw.exports=jSr});var eE=s((YIe,rE)=>{"use strict";var MSr=Kw();rE.exports=MSr});var sv=s((xIe,tE)=>{"use strict";function BSr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}tE.exports=BSr});var aE=s((ZIe,iE)=>{"use strict";var kSr=sv(),CSr=kSr();iE.exports=CSr});var uE=s(($Ie,sE)=>{"use strict";var VSr=D(),nE=sv(),USr=aE();VSr(nE,"REGEXP",USr);sE.exports=nE});var vE=s((QIe,oE)=>{"use strict";var GSr=Yr().isPrimitive,DSr=uE(),HSr=V();function zSr(r){if(!GSr(r))throw new TypeError(HSr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=DSr().exec(r),r?new RegExp(r[1],r[2]):null}oE.exports=zSr});var cE=s((KIe,fE)=>{"use strict";var WSr=vE();fE.exports=WSr});var uv=s((rRe,lE)=>{"use strict";var XSr=Nr().isPrimitive,JSr=z();function YSr(r){return XSr(r)&&JSr(r)}lE.exports=YSr});var ov=s((eRe,pE)=>{"use strict";var xSr=Nr().isObject,ZSr=z();function $Sr(r){return xSr(r)&&ZSr(r.valueOf())}pE.exports=$Sr});var gE=s((tRe,dE)=>{"use strict";var QSr=uv(),KSr=ov();function rOr(r){return QSr(r)||KSr(r)}dE.exports=rOr});var oe=s((iRe,yE)=>{"use strict";var mE=D(),vv=gE(),eOr=uv(),tOr=ov();mE(vv,"isPrimitive",eOr);mE(vv,"isObject",tOr);yE.exports=vv});var wE=s((aRe,bE)=>{"use strict";var hE=oe(),iOr=Ve(),aOr=Yr().isPrimitive,nOr=ye().isPrimitive,qE=V();function sOr(r,e,t){var i,a;if(!iOr(r)&&!aOr(r))throw new TypeError(qE("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!nOr(t))throw new TypeError(qE("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;a=t}else a=i+t,a<0&&(a=0)}else a=0;if(hE(e)){for(;a<i;a++)if(hE(r[a]))return a}else for(;a<i;a++)if(r[a]===e)return a;return-1}bE.exports=sOr});var ps=s((nRe,EE)=>{"use strict";var uOr=wE();EE.exports=uOr});var ds=s((sRe,NE)=>{"use strict";function oOr(r){return Object.keys(Object(r))}NE.exports=oOr});var OE=s((uRe,SE)=>{"use strict";var vOr=ds();function fOr(){return(vOr(arguments)||"").length!==2}function cOr(){return fOr(1,2)}SE.exports=cOr});var _E=s((oRe,AE)=>{"use strict";var lOr=typeof Object.keys<"u";AE.exports=lOr});var fv=s((vRe,TE)=>{"use strict";var pOr=re();function dOr(r){return pOr(r)==="[object Arguments]"}TE.exports=dOr});var LE=s((fRe,RE)=>{"use strict";var gOr=fv(),IE;function mOr(){return gOr(arguments)}IE=mOr();RE.exports=IE});var cv=s((cRe,PE)=>{"use strict";var yOr=Object.prototype.propertyIsEnumerable;PE.exports=yOr});var ME=s((lRe,jE)=>{"use strict";var hOr=cv(),FE;function qOr(){return!hOr.call("beep","0")}FE=qOr();jE.exports=FE});var kE=s((pRe,BE)=>{"use strict";var bOr=Yr(),wOr=oe().isPrimitive,EOr=ye().isPrimitive,NOr=cv(),SOr=ME();function OOr(r,e){var t;return r==null?!1:(t=NOr.call(r,e),!t&&SOr&&bOr(r)?(e=+e,!wOr(e)&&EOr(e)&&e>=0&&e<r.length):t)}BE.exports=OOr});var kn=s((dRe,CE)=>{"use strict";var AOr=kE();CE.exports=AOr});var UE=s((gRe,VE)=>{"use strict";var _Or=vr(),TOr=kn(),IOr=qe(),ROr=Ee(),LOr=ya();function POr(r){return r!==null&&typeof r=="object"&&!IOr(r)&&typeof r.length=="number"&&ROr(r.length)&&r.length>=0&&r.length<=LOr&&_Or(r,"callee")&&!TOr(r,"callee")}VE.exports=POr});var pv=s((mRe,GE)=>{"use strict";var FOr=LE(),jOr=fv(),MOr=UE(),lv;FOr?lv=jOr:lv=MOr;GE.exports=lv});var zE=s((yRe,HE)=>{"use strict";var BOr=pv(),DE=ds(),kOr=Array.prototype.slice;function COr(r){return BOr(r)?DE(kOr.call(r)):DE(r)}HE.exports=COr});var XE=s((hRe,WE)=>{"use strict";function VOr(){}WE.exports=VOr});var Lr=s((qRe,JE)=>{"use strict";var UOr=XE();JE.exports=UOr});var xE=s((bRe,YE)=>{"use strict";var GOr=kn(),DOr=Lr(),HOr=GOr(DOr,"prototype");YE.exports=HOr});var $E=s((wRe,ZE)=>{"use strict";var zOr=kn(),WOr={toString:null},XOr=!zOr(WOr,"toString");ZE.exports=XOr});var dv=s((ERe,QE)=>{"use strict";function JOr(r){return r.constructor&&r.constructor.prototype===r}QE.exports=JOr});var KE=s((NRe,YOr)=>{YOr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var eN=s((SRe,rN)=>{"use strict";var xOr=typeof window>"u"?void 0:window;rN.exports=xOr});var nN=s((ORe,aN)=>{"use strict";var ZOr=vr(),$Or=ps(),tN=z0(),QOr=dv(),KOr=KE(),Ca=eN(),iN;function rAr(){var r;if(tN(Ca)==="undefined")return!1;for(r in Ca)try{$Or(KOr,r)===-1&&ZOr(Ca,r)&&Ca[r]!==null&&tN(Ca[r])==="object"&&QOr(Ca[r])}catch{return!0}return!1}iN=rAr();aN.exports=iN});var uN=s((ARe,sN)=>{"use strict";var eAr=typeof window<"u";sN.exports=eAr});var fN=s((_Re,vN)=>{"use strict";var tAr=nN(),oN=dv(),iAr=uN();function aAr(r){if(iAr===!1&&!tAr)return oN(r);try{return oN(r)}catch{return!1}}vN.exports=aAr});var cN=s((TRe,nAr)=>{nAr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var dN=s((IRe,pN)=>{"use strict";var sAr=J1(),gv=vr(),uAr=pv(),oAr=xE(),vAr=$E(),fAr=fN(),lN=cN();function cAr(r){var e,t,i,a,n,u,o;if(a=[],uAr(r)){for(o=0;o<r.length;o++)a.push(o.toString());return a}if(typeof r=="string"){if(r.length>0&&!gv(r,"0"))for(o=0;o<r.length;o++)a.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!sAr(r))return a;t=oAr&&i}for(n in r)!(t&&n==="prototype")&&gv(r,n)&&a.push(String(n));if(vAr)for(e=fAr(r),o=0;o<lN.length;o++)u=lN[o],!(e&&u==="constructor")&&gv(r,u)&&a.push(String(u));return a}pN.exports=cAr});var mN=s((RRe,gN)=>{"use strict";var lAr=OE(),pAr=_E(),dAr=ds(),gAr=zE(),mAr=dN(),gs;pAr?lAr()?gs=gAr:gs=dAr:gs=mAr;gN.exports=gs});var Va=s((LRe,yN)=>{"use strict";var yAr=mN();yN.exports=yAr});var qN=s((PRe,hN)=>{"use strict";var hAr=typeof Object.getOwnPropertyNames<"u";hN.exports=hAr});var EN=s((FRe,wN)=>{"use strict";var bN=Ba(),qAr=bN.getOwnPropertyNames;function bAr(r){return qAr(bN(r))}wN.exports=bAr});var SN=s((jRe,NN)=>{"use strict";var wAr=Ba(),EAr=Va();function NAr(r){return EAr(wAr(r))}NN.exports=NAr});var AN=s((MRe,ON)=>{"use strict";var SAr=qN(),OAr=EN(),AAr=SN(),mv;SAr?mv=OAr:mv=AAr;ON.exports=mv});var TN=s((BRe,_N)=>{"use strict";var _Ar=typeof Object.getOwnPropertyDescriptor<"u";_N.exports=_Ar});var RN=s((kRe,IN)=>{"use strict";var TAr=Object.getOwnPropertyDescriptor;function IAr(r,e){var t;return r==null?null:(t=TAr(r,e),t===void 0?null:t)}IN.exports=IAr});var PN=s((CRe,LN)=>{"use strict";var RAr=vr();function LAr(r,e){return RAr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}LN.exports=LAr});var jN=s((VRe,FN)=>{"use strict";var PAr=TN(),FAr=RN(),jAr=PN(),yv;PAr?yv=FAr:yv=jAr;FN.exports=yv});var BN=s((URe,MN)=>{"use strict";var MAr=typeof Buffer=="function"?Buffer:null;MN.exports=MAr});var CN=s((GRe,kN)=>{"use strict";var BAr=Yi(),ms=BN();function kAr(){var r,e;if(typeof ms!="function")return!1;try{typeof ms.from=="function"?e=ms.from([1,2,3,4]):e=new ms([1,2,3,4]),r=BAr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}kN.exports=kAr});var UN=s((DRe,VN)=>{"use strict";var CAr=CN();VN.exports=CAr});var HN=s(ys=>{"use strict";ys.byteLength=UAr;ys.toByteArray=DAr;ys.fromByteArray=WAr;var ut=[],ze=[],VAr=typeof Uint8Array<"u"?Uint8Array:Array,hv="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ia=0,GN=hv.length;ia<GN;++ia)ut[ia]=hv[ia],ze[hv.charCodeAt(ia)]=ia;var ia,GN;ze["-".charCodeAt(0)]=62;ze["_".charCodeAt(0)]=63;function DN(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function UAr(r){var e=DN(r),t=e[0],i=e[1];return(t+i)*3/4-i}function GAr(r,e,t){return(e+t)*3/4-t}function DAr(r){var e,t=DN(r),i=t[0],a=t[1],n=new VAr(GAr(r,i,a)),u=0,o=a>0?i-4:i,v;for(v=0;v<o;v+=4)e=ze[r.charCodeAt(v)]<<18|ze[r.charCodeAt(v+1)]<<12|ze[r.charCodeAt(v+2)]<<6|ze[r.charCodeAt(v+3)],n[u++]=e>>16&255,n[u++]=e>>8&255,n[u++]=e&255;return a===2&&(e=ze[r.charCodeAt(v)]<<2|ze[r.charCodeAt(v+1)]>>4,n[u++]=e&255),a===1&&(e=ze[r.charCodeAt(v)]<<10|ze[r.charCodeAt(v+1)]<<4|ze[r.charCodeAt(v+2)]>>2,n[u++]=e>>8&255,n[u++]=e&255),n}function HAr(r){return ut[r>>18&63]+ut[r>>12&63]+ut[r>>6&63]+ut[r&63]}function zAr(r,e,t){for(var i,a=[],n=e;n<t;n+=3)i=(r[n]<<16&16711680)+(r[n+1]<<8&65280)+(r[n+2]&255),a.push(HAr(i));return a.join("")}function WAr(r){for(var e,t=r.length,i=t%3,a=[],n=16383,u=0,o=t-i;u<o;u+=n)a.push(zAr(r,u,u+n>o?o:u+n));return i===1?(e=r[t-1],a.push(ut[e>>2]+ut[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],a.push(ut[e>>10]+ut[e>>4&63]+ut[e<<2&63]+"=")),a.join("")}});var zN=s(qv=>{qv.read=function(r,e,t,i,a){var n,u,o=a*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?a-1:0,p=t?-1:1,m=r[e+l];for(l+=p,n=m&(1<<-c)-1,m>>=-c,c+=o;c>0;n=n*256+r[e+l],l+=p,c-=8);for(u=n&(1<<-c)-1,n>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(n===0)n=1-f;else{if(n===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),n=n-f}return(m?-1:1)*u*Math.pow(2,n-i)};qv.write=function(r,e,t,i,a,n){var u,o,v,f=n*8-a-1,c=(1<<f)-1,l=c>>1,p=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:n-1,y=i?1:-1,g=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,a),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,a),u=0));a>=8;r[t+m]=o&255,m+=y,o/=256,a-=8);for(u=u<<a|o,f+=a;f>0;r[t+m]=u&255,m+=y,u/=256,f-=8);r[t+m-y]|=g*128}});var uS=s(Ha=>{"use strict";var bv=HN(),Ga=zN(),WN=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ha.Buffer=H;Ha.SlowBuffer=$Ar;Ha.INSPECT_MAX_BYTES=50;var hs=2147483647;Ha.kMaxLength=hs;H.TYPED_ARRAY_SUPPORT=XAr();!H.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function XAr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(H.prototype,"parent",{enumerable:!0,get:function(){if(!!H.isBuffer(this))return this.buffer}});Object.defineProperty(H.prototype,"offset",{enumerable:!0,get:function(){if(!!H.isBuffer(this))return this.byteOffset}});function wt(r){if(r>hs)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,H.prototype),e}function H(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Sv(r)}return xN(r,e,t)}H.poolSize=8192;function xN(r,e,t){if(typeof r=="string")return YAr(r,e);if(ArrayBuffer.isView(r))return xAr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ot(r,ArrayBuffer)||r&&ot(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ot(r,SharedArrayBuffer)||r&&ot(r.buffer,SharedArrayBuffer)))return Ev(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return H.from(i,e,t);let a=ZAr(r);if(a)return a;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return H.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}H.from=function(r,e,t){return xN(r,e,t)};Object.setPrototypeOf(H.prototype,Uint8Array.prototype);Object.setPrototypeOf(H,Uint8Array);function ZN(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function JAr(r,e,t){return ZN(r),r<=0?wt(r):e!==void 0?typeof t=="string"?wt(r).fill(e,t):wt(r).fill(e):wt(r)}H.alloc=function(r,e,t){return JAr(r,e,t)};function Sv(r){return ZN(r),wt(r<0?0:Ov(r)|0)}H.allocUnsafe=function(r){return Sv(r)};H.allocUnsafeSlow=function(r){return Sv(r)};function YAr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!H.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=$N(r,e)|0,i=wt(t),a=i.write(r,e);return a!==t&&(i=i.slice(0,a)),i}function wv(r){let e=r.length<0?0:Ov(r.length)|0,t=wt(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function xAr(r){if(ot(r,Uint8Array)){let e=new Uint8Array(r);return Ev(e.buffer,e.byteOffset,e.byteLength)}return wv(r)}function Ev(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,H.prototype),i}function ZAr(r){if(H.isBuffer(r)){let e=Ov(r.length)|0,t=wt(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||_v(r.length)?wt(0):wv(r);if(r.type==="Buffer"&&Array.isArray(r.data))return wv(r.data)}function Ov(r){if(r>=hs)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+hs.toString(16)+" bytes");return r|0}function $Ar(r){return+r!=r&&(r=0),H.alloc(+r)}H.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==H.prototype};H.compare=function(e,t){if(ot(e,Uint8Array)&&(e=H.from(e,e.offset,e.byteLength)),ot(t,Uint8Array)&&(t=H.from(t,t.offset,t.byteLength)),!H.isBuffer(e)||!H.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,a=t.length;for(let n=0,u=Math.min(i,a);n<u;++n)if(e[n]!==t[n]){i=e[n],a=t[n];break}return i<a?-1:a<i?1:0};H.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};H.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return H.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let a=H.allocUnsafe(t),n=0;for(i=0;i<e.length;++i){let u=e[i];if(ot(u,Uint8Array))n+u.length>a.length?(H.isBuffer(u)||(u=H.from(u)),u.copy(a,n)):Uint8Array.prototype.set.call(a,u,n);else if(H.isBuffer(u))u.copy(a,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=u.length}return a};function $N(r,e){if(H.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ot(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let a=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Nv(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return sS(r).length;default:if(a)return i?-1:Nv(r).length;e=(""+e).toLowerCase(),a=!0}}H.byteLength=$N;function QAr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return o_r(this,e,t);case"utf8":case"utf-8":return KN(this,e,t);case"ascii":return s_r(this,e,t);case"latin1":case"binary":return u_r(this,e,t);case"base64":return a_r(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return v_r(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}H.prototype._isBuffer=!0;function aa(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}H.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)aa(this,t,t+1);return this};H.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)aa(this,t,t+3),aa(this,t+1,t+2);return this};H.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)aa(this,t,t+7),aa(this,t+1,t+6),aa(this,t+2,t+5),aa(this,t+3,t+4);return this};H.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?KN(this,0,e):QAr.apply(this,arguments)};H.prototype.toLocaleString=H.prototype.toString;H.prototype.equals=function(e){if(!H.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:H.compare(this,e)===0};H.prototype.inspect=function(){let e="",t=Ha.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};WN&&(H.prototype[WN]=H.prototype.inspect);H.prototype.compare=function(e,t,i,a,n){if(ot(e,Uint8Array)&&(e=H.from(e,e.offset,e.byteLength)),!H.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),a===void 0&&(a=0),n===void 0&&(n=this.length),t<0||i>e.length||a<0||n>this.length)throw new RangeError("out of range index");if(a>=n&&t>=i)return 0;if(a>=n)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,a>>>=0,n>>>=0,this===e)return 0;let u=n-a,o=i-t,v=Math.min(u,o),f=this.slice(a,n),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function QN(r,e,t,i,a){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,_v(t)&&(t=a?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(a)return-1;t=r.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof e=="string"&&(e=H.from(e,i)),H.isBuffer(e))return e.length===0?-1:XN(r,e,t,i,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):XN(r,[e],t,i,a);throw new TypeError("val must be string, number or Buffer")}function XN(r,e,t,i,a){let n=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;n=2,u/=2,o/=2,t/=2}function v(c,l){return n===1?c[l]:c.readUInt16BE(l*n)}let f;if(a){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*n}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}H.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};H.prototype.indexOf=function(e,t,i){return QN(this,e,t,i,!0)};H.prototype.lastIndexOf=function(e,t,i){return QN(this,e,t,i,!1)};function KAr(r,e,t,i){t=Number(t)||0;let a=r.length-t;i?(i=Number(i),i>a&&(i=a)):i=a;let n=e.length;i>n/2&&(i=n/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(_v(o))return u;r[t+u]=o}return u}function r_r(r,e,t,i){return qs(Nv(e,r.length-t),r,t,i)}function e_r(r,e,t,i){return qs(p_r(e),r,t,i)}function t_r(r,e,t,i){return qs(sS(e),r,t,i)}function i_r(r,e,t,i){return qs(d_r(e,r.length-t),r,t,i)}H.prototype.write=function(e,t,i,a){if(t===void 0)a="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")a=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,a===void 0&&(a="utf8")):(a=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let n=this.length-t;if((i===void 0||i>n)&&(i=n),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");let u=!1;for(;;)switch(a){case"hex":return KAr(this,e,t,i);case"utf8":case"utf-8":return r_r(this,e,t,i);case"ascii":case"latin1":case"binary":return e_r(this,e,t,i);case"base64":return t_r(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i_r(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),u=!0}};H.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function a_r(r,e,t){return e===0&&t===r.length?bv.fromByteArray(r):bv.fromByteArray(r.slice(e,t))}function KN(r,e,t){t=Math.min(r.length,t);let i=[],a=e;for(;a<t;){let n=r[a],u=null,o=n>239?4:n>223?3:n>191?2:1;if(a+o<=t){let v,f,c,l;switch(o){case 1:n<128&&(u=n);break;case 2:v=r[a+1],(v&192)===128&&(l=(n&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[a+1],f=r[a+2],(v&192)===128&&(f&192)===128&&(l=(n&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[a+1],f=r[a+2],c=r[a+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(n&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),a+=o}return n_r(i)}var JN=4096;function n_r(r){let e=r.length;if(e<=JN)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=JN));return t}function s_r(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]&127);return i}function u_r(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]);return i}function o_r(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let a="";for(let n=e;n<t;++n)a+=g_r[r[n]];return a}function v_r(r,e,t){let i=r.slice(e,t),a="";for(let n=0;n<i.length-1;n+=2)a+=String.fromCharCode(i[n]+i[n+1]*256);return a}H.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let a=this.subarray(e,t);return Object.setPrototypeOf(a,H.prototype),a};function ve(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}H.prototype.readUintLE=H.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return a};H.prototype.readUintBE=H.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e+--t],n=1;for(;t>0&&(n*=256);)a+=this[e+--t]*n;return a};H.prototype.readUint8=H.prototype.readUInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]};H.prototype.readUint16LE=H.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]|this[e+1]<<8};H.prototype.readUint16BE=H.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]<<8|this[e+1]};H.prototype.readUint32LE=H.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};H.prototype.readUint32BE=H.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};H.prototype.readBigUInt64LE=fi(function(e){e=e>>>0,Da(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Cn(e,this.length-8);let a=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,n=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(a)+(BigInt(n)<<BigInt(32))});H.prototype.readBigUInt64BE=fi(function(e){e=e>>>0,Da(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Cn(e,this.length-8);let a=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],n=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(a)<<BigInt(32))+BigInt(n)});H.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return n*=128,a>=n&&(a-=Math.pow(2,8*t)),a};H.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=t,n=1,u=this[e+--a];for(;a>0&&(n*=256);)u+=this[e+--a]*n;return n*=128,u>=n&&(u-=Math.pow(2,8*t)),u};H.prototype.readInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};H.prototype.readInt16LE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};H.prototype.readInt16BE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};H.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};H.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};H.prototype.readBigInt64LE=fi(function(e){e=e>>>0,Da(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Cn(e,this.length-8);let a=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(a)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});H.prototype.readBigInt64BE=fi(function(e){e=e>>>0,Da(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Cn(e,this.length-8);let a=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(a)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});H.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Ga.read(this,e,!0,23,4)};H.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Ga.read(this,e,!1,23,4)};H.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Ga.read(this,e,!0,52,8)};H.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Ga.read(this,e,!1,52,8)};function Ae(r,e,t,i,a,n){if(!H.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<n)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}H.prototype.writeUintLE=H.prototype.writeUIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;Ae(this,e,t,i,o,0)}let n=1,u=0;for(this[t]=e&255;++u<i&&(n*=256);)this[t+u]=e/n&255;return t+i};H.prototype.writeUintBE=H.prototype.writeUIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;Ae(this,e,t,i,o,0)}let n=i-1,u=1;for(this[t+n]=e&255;--n>=0&&(u*=256);)this[t+n]=e/u&255;return t+i};H.prototype.writeUint8=H.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,1,255,0),this[t]=e&255,t+1};H.prototype.writeUint16LE=H.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};H.prototype.writeUint16BE=H.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};H.prototype.writeUint32LE=H.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};H.prototype.writeUint32BE=H.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function rS(r,e,t,i,a){nS(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function eS(r,e,t,i,a){nS(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t+7]=n,n=n>>8,r[t+6]=n,n=n>>8,r[t+5]=n,n=n>>8,r[t+4]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}H.prototype.writeBigUInt64LE=fi(function(e,t=0){return rS(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});H.prototype.writeBigUInt64BE=fi(function(e,t=0){return eS(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});H.prototype.writeIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);Ae(this,e,t,i,v-1,-v)}let n=0,u=1,o=0;for(this[t]=e&255;++n<i&&(u*=256);)e<0&&o===0&&this[t+n-1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};H.prototype.writeIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);Ae(this,e,t,i,v-1,-v)}let n=i-1,u=1,o=0;for(this[t+n]=e&255;--n>=0&&(u*=256);)e<0&&o===0&&this[t+n+1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};H.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};H.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};H.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};H.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};H.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};H.prototype.writeBigInt64LE=fi(function(e,t=0){return rS(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});H.prototype.writeBigInt64BE=fi(function(e,t=0){return eS(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function tS(r,e,t,i,a,n){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function iS(r,e,t,i,a){return e=+e,t=t>>>0,a||tS(r,e,t,4,34028234663852886e22,-34028234663852886e22),Ga.write(r,e,t,i,23,4),t+4}H.prototype.writeFloatLE=function(e,t,i){return iS(this,e,t,!0,i)};H.prototype.writeFloatBE=function(e,t,i){return iS(this,e,t,!1,i)};function aS(r,e,t,i,a){return e=+e,t=t>>>0,a||tS(r,e,t,8,17976931348623157e292,-17976931348623157e292),Ga.write(r,e,t,i,52,8),t+8}H.prototype.writeDoubleLE=function(e,t,i){return aS(this,e,t,!0,i)};H.prototype.writeDoubleBE=function(e,t,i){return aS(this,e,t,!1,i)};H.prototype.copy=function(e,t,i,a){if(!H.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!a&&a!==0&&(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<i&&(a=i),a===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-i&&(a=e.length-t+i);let n=a-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,a):Uint8Array.prototype.set.call(e,this.subarray(i,a),t),n};H.prototype.fill=function(e,t,i,a){if(typeof e=="string"){if(typeof t=="string"?(a=t,t=0,i=this.length):typeof i=="string"&&(a=i,i=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!H.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){let u=e.charCodeAt(0);(a==="utf8"&&u<128||a==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let n;if(typeof e=="number")for(n=t;n<i;++n)this[n]=e;else{let u=H.isBuffer(e)?e:H.from(e,a),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<i-t;++n)this[n+t]=u[n%o]}return this};var Ua={};function Av(r,e,t){Ua[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(a){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:a,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}Av("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Av("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);Av("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,a=t;return Number.isInteger(t)&&Math.abs(t)>2**32?a=YN(String(t)):typeof t=="bigint"&&(a=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(a=YN(a)),a+="n"),i+=` It must be ${e}. Received ${a}`,i},RangeError);function YN(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function f_r(r,e,t){Da(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Cn(e,r.length-(t+1))}function nS(r,e,t,i,a,n){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw n>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(n+1)*8}${u}`:o=`>= -(2${u} ** ${(n+1)*8-1}${u}) and < 2 ** ${(n+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Ua.ERR_OUT_OF_RANGE("value",o,r)}f_r(i,a,n)}function Da(r,e){if(typeof r!="number")throw new Ua.ERR_INVALID_ARG_TYPE(e,"number",r)}function Cn(r,e,t){throw Math.floor(r)!==r?(Da(r,t),new Ua.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ua.ERR_BUFFER_OUT_OF_BOUNDS:new Ua.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var c_r=/[^+/0-9A-Za-z-_]/g;function l_r(r){if(r=r.split("=")[0],r=r.trim().replace(c_r,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Nv(r,e){e=e||1/0;let t,i=r.length,a=null,n=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!a){if(t>56319){(e-=3)>-1&&n.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&n.push(239,191,189);continue}a=t;continue}if(t<56320){(e-=3)>-1&&n.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(e-=3)>-1&&n.push(239,191,189);if(a=null,t<128){if((e-=1)<0)break;n.push(t)}else if(t<2048){if((e-=2)<0)break;n.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;n.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;n.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return n}function p_r(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function d_r(r,e){let t,i,a,n=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,a=t%256,n.push(a),n.push(i);return n}function sS(r){return bv.toByteArray(l_r(r))}function qs(r,e,t,i){let a;for(a=0;a<i&&!(a+t>=e.length||a>=r.length);++a)e[a+t]=r[a];return a}function ot(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function _v(r){return r!==r}var g_r=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let a=0;a<16;++a)e[i+a]=r[t]+r[a]}return e}();function fi(r){return typeof BigInt>"u"?m_r:r}function m_r(){throw new Error("BigInt not supported")}});var vS=s((JRe,oS)=>{"use strict";var y_r=uS().Buffer;oS.exports=y_r});var cS=s((YRe,fS)=>{"use strict";function h_r(){throw new Error("not implemented")}fS.exports=h_r});var ci=s((xRe,lS)=>{"use strict";var q_r=UN(),b_r=vS(),w_r=cS(),Tv;q_r()?Tv=b_r:Tv=w_r;lS.exports=Tv});var dS=s((ZRe,pS)=>{"use strict";var E_r=qr(),N_r=ci(),S_r=E_r(N_r.from);pS.exports=S_r});var mS=s(($Re,gS)=>{"use strict";var O_r=Yi(),A_r=V(),__r=ci();function T_r(r){if(!O_r(r))throw new TypeError(A_r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return __r.from(r)}gS.exports=T_r});var hS=s((QRe,yS)=>{"use strict";var I_r=Yi(),R_r=V(),L_r=ci();function P_r(r){if(!I_r(r))throw new TypeError(R_r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new L_r(r)}yS.exports=P_r});var bS=s((KRe,qS)=>{"use strict";var F_r=dS(),j_r=mS(),M_r=hS(),Iv;F_r?Iv=j_r:Iv=M_r;qS.exports=Iv});var NS=s((rLe,ES)=>{"use strict";var B_r=wa(),k_r=tt(),C_r=ba(),V_r=qa(),U_r=xi(),G_r=ui(),D_r=me(),H_r=et(),z_r=ge(),wS;function W_r(r){return new B_r(r)}function X_r(r){return new k_r(r)}function J_r(r){return new C_r(r)}function Y_r(r){return new V_r(r)}function x_r(r){return new U_r(r)}function Z_r(r){return new G_r(r)}function $_r(r){return new D_r(r)}function Q_r(r){return new H_r(r)}function K_r(r){return new z_r(r)}function rTr(){var r={int8array:W_r,uint8array:X_r,uint8clampedarray:J_r,int16array:Y_r,uint16array:x_r,int32array:Z_r,uint32array:$_r,float32array:Q_r,float64array:K_r};return r}wS=rTr();ES.exports=wS});var TS=s((eLe,_S)=>{"use strict";var bs=vr(),Rv=qe(),SS=Yi(),eTr=eE(),OS=z0(),tTr=cE(),iTr=ps(),AS=Va(),aTr=AN(),Vn=jN(),nTr=ta(),Un=ni(),sTr=bS(),uTr=NS();function oTr(r){var e,t,i,a,n,u,o,v;for(e=[],a=[],o=Object.create(nTr(r)),e.push(r),a.push(o),t=aTr(r),v=0;v<t.length;v++)i=t[v],n=Vn(r,i),bs(n,"value")&&(u=Rv(r[i])?[]:{},n.value=na(r[i],u,e,a,-1)),Un(o,i,n);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function vTr(r){var e=[],t=[],i,a,n,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=AS(r),v=0;v<i.length;v++)u=i[v],a=Vn(r,u),bs(a,"value")&&(n=Rv(r[u])?[]:{},a.value=na(r[u],n,e,t,-1)),Un(o,u,a);return o}function na(r,e,t,i,a){var n,u,o,v,f,c,l,p,m,y;if(a-=1,typeof r!="object"||r===null)return r;if(SS(r))return sTr(r);if(eTr(r))return vTr(r);if(o=OS(r),o==="date")return new Date(+r);if(o==="regexp")return tTr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=uTr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?oTr(r):{};if(u=AS(r),a>0)for(n=o,y=0;y<u.length;y++){if(c=u[y],p=r[c],o=OS(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||SS(p)){n==="object"?(v=Vn(r,c),bs(v,"value")&&(v.value=na(p)),Un(e,c,v)):e[c]=na(p);continue}if(m=iTr(t,p),m!==-1){e[c]=i[m];continue}l=Rv(p)?new Array(p.length):{},t.push(p),i.push(l),n==="array"?e[c]=na(p,l,t,i,a):(v=Vn(r,c),bs(v,"value")&&(v.value=na(p,l,t,i,a)),Un(e,c,v))}else if(o==="array")for(y=0;y<u.length;y++)c=u[y],e[c]=r[c];else for(y=0;y<u.length;y++)c=u[y],v=Vn(r,c),Un(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}_S.exports=na});var RS=s((tLe,IS)=>{"use strict";var fTr=qe(),cTr=be().isPrimitive,lTr=V(),pTr=pr(),dTr=TS();function gTr(r,e){var t;if(arguments.length>1){if(!cTr(e))throw new TypeError(lTr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=pTr;return t=fTr(r)?new Array(r.length):{},dTr(r,t,[r],[t],e)}IS.exports=gTr});var Gn=s((iLe,LS)=>{"use strict";var mTr=RS();LS.exports=mTr});var PS=s((aLe,yTr)=>{yTr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var jS=s((nLe,FS)=>{"use strict";var hTr=Gn(),qTr=PS();function bTr(){return hTr(qTr)}FS.exports=bTr});var MS=s((sLe,wTr)=>{wTr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var kS=s((uLe,BS)=>{"use strict";var ETr=Gn(),NTr=MS();function STr(){return ETr(NTr)}BS.exports=STr});var CS=s((oLe,OTr)=>{OTr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var US=s((vLe,VS)=>{"use strict";var ATr=Gn(),_Tr=CS();function TTr(){return ATr(_Tr)}VS.exports=TTr});var GS=s((fLe,ITr)=>{ITr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var HS=s((cLe,DS)=>{"use strict";var RTr=GS();function LTr(){return RTr.slice()}DS.exports=LTr});var zS=s((lLe,PTr)=>{PTr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var XS=s((pLe,WS)=>{"use strict";var FTr=Gn(),jTr=zS();function MTr(){return FTr(jTr)}WS.exports=MTr});var YS=s((dLe,JS)=>{"use strict";var Dn=Qr(),BTr=jS(),kTr=kS(),CTr=US(),VTr=HS(),UTr=XS();function GTr(r){return Dn(r,"AFINN_111",BTr),Dn(r,"AFINN_96",kTr),Dn(r,"ANSCOMBES_QUARTET",CTr),Dn(r,"HERNDON_VENUS_SEMIDIAMETERS",VTr),Dn(r,"NIGHTINGALES_ROSE",UTr),r}JS.exports=GTr});var ZS=s((gLe,xS)=>{"use strict";function DTr(r,e){return r+e}xS.exports=DTr});var QS=s((mLe,$S)=>{"use strict";var HTr=ZS();$S.exports=HTr});var rO=s((yLe,KS)=>{"use strict";var zTr=pr(),WTr=Ir();function XTr(r){return r===zTr||r===WTr}KS.exports=XTr});var _e=s((hLe,eO)=>{"use strict";var JTr=rO();eO.exports=JTr});var aO=s((qLe,iO)=>{"use strict";var tO=$0();function YTr(r){return r>0?tO(r-1):tO(r+1)}iO.exports=YTr});var ws=s((bLe,nO)=>{"use strict";var xTr=aO();nO.exports=xTr});var uO=s((wLe,sO)=>{"use strict";var ZTr=Math.sqrt;sO.exports=ZTr});var Rr=s((ELe,oO)=>{"use strict";var $Tr=uO();oO.exports=$Tr});var fO=s((NLe,vO)=>{"use strict";function QTr(r){return Math.abs(r)}vO.exports=QTr});var Dr=s((SLe,cO)=>{"use strict";var KTr=fO();cO.exports=KTr});var pO=s((OLe,lO)=>{"use strict";var rIr=tt(),eIr=xi(),tIr={uint16:eIr,uint8:rIr};lO.exports=tIr});var yO=s((ALe,mO)=>{"use strict";var dO=pO(),gO;function iIr(){var r,e;return r=new dO.uint16(1),r[0]=4660,e=new dO.uint8(r.buffer),e[0]===52}gO=iIr();mO.exports=gO});var xe=s((_Le,hO)=>{"use strict";var aIr=yO();hO.exports=aIr});var wO=s((TLe,bO)=>{"use strict";var nIr=xe(),qO,Lv,Pv;nIr===!0?(Lv=1,Pv=0):(Lv=0,Pv=1);qO={HIGH:Lv,LOW:Pv};bO.exports=qO});var Fv=s((ILe,OO)=>{"use strict";var sIr=me(),uIr=ge(),NO=wO(),SO=new uIr(1),EO=new sIr(SO.buffer),oIr=NO.HIGH,vIr=NO.LOW;function fIr(r,e,t,i){return SO[0]=r,e[i]=EO[oIr],e[i+t]=EO[vIr],e}OO.exports=fIr});var _O=s((RLe,AO)=>{"use strict";var cIr=Fv();function lIr(r){return cIr(r,[0>>>0,0>>>0],1,0)}AO.exports=lIr});var za=s((LLe,IO)=>{"use strict";var pIr=D(),TO=_O(),dIr=Fv();pIr(TO,"assign",dIr);IO.exports=TO});var LO=s((PLe,RO)=>{"use strict";var gIr=xe(),jv;gIr===!0?jv=0:jv=1;RO.exports=jv});var FO=s((FLe,PO)=>{"use strict";var mIr=me(),yIr=ge(),hIr=LO(),Mv=new yIr(1),qIr=new mIr(Mv.buffer);function bIr(r,e){return Mv[0]=r,qIr[hIr]=e>>>0,Mv[0]}PO.exports=bIr});var vt=s((jLe,jO)=>{"use strict";var wIr=FO();jO.exports=wIr});var BO=s((MLe,MO)=>{"use strict";function EIr(r){return r|0}MO.exports=EIr});var Bv=s((BLe,kO)=>{"use strict";var NIr=BO();kO.exports=NIr});var ft=s((kLe,CO)=>{"use strict";var SIr=2147483647;CO.exports=SIr});var kv=s((CLe,VO)=>{"use strict";var OIr=2147483648;VO.exports=OIr});var GO=s((VLe,UO)=>{"use strict";var AIr=xe(),Cv;AIr===!0?Cv=1:Cv=0;UO.exports=Cv});var zO=s((ULe,HO)=>{"use strict";var _Ir=me(),TIr=ge(),IIr=GO(),DO=new TIr(1),RIr=new _Ir(DO.buffer);function LIr(r){return DO[0]=r,RIr[IIr]}HO.exports=LIr});var ae=s((GLe,WO)=>{"use strict";var PIr=zO();WO.exports=PIr});var YO=s((DLe,JO)=>{"use strict";var FIr=xe(),XO,Vv,Uv;FIr===!0?(Vv=1,Uv=0):(Vv=0,Uv=1);XO={HIGH:Vv,LOW:Uv};JO.exports=XO});var KO=s((HLe,QO)=>{"use strict";var jIr=me(),MIr=ge(),ZO=YO(),$O=new MIr(1),xO=new jIr($O.buffer),BIr=ZO.HIGH,kIr=ZO.LOW;function CIr(r,e){return xO[BIr]=r,xO[kIr]=e,$O[0]}QO.exports=CIr});var Wa=s((zLe,rA)=>{"use strict";var VIr=KO();rA.exports=VIr});var tA=s((WLe,eA)=>{"use strict";var UIr=kv(),GIr=ft(),DIr=za(),HIr=ae(),zIr=Wa(),Gv=[0,0];function WIr(r,e){var t,i;return DIr.assign(r,Gv,1,0),t=Gv[0],t&=GIr,i=HIr(e),i&=UIr,t|=i,zIr(t,Gv[1])}eA.exports=WIr});var Es=s((XLe,iA)=>{"use strict";var XIr=tA();iA.exports=XIr});var sA=s((JLe,nA)=>{"use strict";var aA=ws(),JIr=Es(),YIr=Ir(),Ns=pr();function xIr(r,e){return e===YIr?Ns:e===Ns?0:e>0?aA(e)?r:0:aA(e)?JIr(Ns,r):Ns}nA.exports=xIr});var oA=s((YLe,uA)=>{"use strict";var ZIr=ft(),$Ir=ae(),QIr=1072693247,Ss=1e300,Os=1e-300;function KIr(r,e){var t,i;return i=$Ir(r),t=i&ZIr,t<=QIr?e<0?Ss*Ss:Os*Os:e>0?Ss*Ss:Os*Os}uA.exports=KIr});var cA=s((xLe,fA)=>{"use strict";var rRr=Dr(),vA=pr();function eRr(r,e){return r===-1?(r-r)/(r-r):r===1?1:rRr(r)<1==(e===vA)?0:vA}fA.exports=eRr});var pA=s((ZLe,lA)=>{"use strict";var tRr=xe(),Dv;tRr===!0?Dv=1:Dv=0;lA.exports=Dv});var gA=s(($Le,dA)=>{"use strict";var iRr=me(),aRr=ge(),nRr=pA(),Hv=new aRr(1),sRr=new iRr(Hv.buffer);function uRr(r,e){return Hv[0]=r,sRr[nRr]=e>>>0,Hv[0]}dA.exports=uRr});var Et=s((QLe,mA)=>{"use strict";var oRr=gA();mA.exports=oRr});var ct=s((KLe,yA)=>{"use strict";var vRr=1023;yA.exports=vRr});var qA=s((rPe,hA)=>{"use strict";function fRr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}hA.exports=fRr});var NA=s((ePe,EA)=>{"use strict";var cRr=ae(),As=vt(),bA=Et(),lRr=ct(),pRr=qA(),dRr=1048575,wA=1048576,gRr=1072693248,mRr=536870912,yRr=524288,hRr=20,qRr=9007199254740992,bRr=.9617966939259756,wRr=.9617967009544373,ERr=-7028461650952758e-24,NRr=[1,1.5],SRr=[0,.5849624872207642],ORr=[0,1350039202129749e-23];function ARr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O;return T=0,t<wA&&(e*=qRr,T-=53,t=cRr(e)),T+=(t>>hRr)-lRr|0,S=t&dRr|0,t=S|gRr|0,S<=235662?O=0:S<767610?O=1:(O=0,T+=1,t-=wA),e=bA(e,t),c=NRr[O],A=e-c,b=1/(e+c),a=A*b,u=As(a,0),i=(t>>1|mRr)+yRr,i+=O<<18,v=bA(0,i),f=e-(v-c),o=b*(A-u*v-u*f),n=a*a,w=n*n*pRr(n),w+=o*(u+a),n=u*u,v=3+n+w,v=As(v,0),f=w-(v-3-n),A=u*v,b=o*v+f*a,p=A+b,p=As(p,0),m=b-(p-A),y=wRr*p,g=ERr*p+m*bRr+ORr[O],l=SRr[O],q=T,d=y+g+l+q,d=As(d,0),h=g-(d-q-l-y),r[0]=d,r[1]=h,r}EA.exports=ARr});var OA=s((tPe,SA)=>{"use strict";function _Rr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}SA.exports=_Rr});var _A=s((iPe,AA)=>{"use strict";var TRr=vt(),IRr=OA(),RRr=1.4426950408889634,LRr=1.4426950216293335,PRr=19259629911266175e-24;function FRr(r,e){var t,i,a,n,u,o;return a=e-1,n=a*a*IRr(a),u=LRr*a,o=a*PRr-n*RRr,i=u+o,i=TRr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}AA.exports=FRr});var _s=s((aPe,TA)=>{"use strict";var jRr=1023;TA.exports=jRr});var RA=s((nPe,IA)=>{"use strict";var MRr=-1023;IA.exports=MRr});var zv=s((sPe,LA)=>{"use strict";var BRr=-1074;LA.exports=BRr});var Wv=s((uPe,PA)=>{"use strict";var kRr=22250738585072014e-324;PA.exports=kRr});var Xv=s((oPe,FA)=>{"use strict";var CRr=Wv(),VRr=_e(),URr=z(),GRr=Dr(),DRr=4503599627370496;function HRr(r,e,t,i){return URr(r)||VRr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&GRr(r)<CRr?(e[i]=r*DRr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}FA.exports=HRr});var MA=s((vPe,jA)=>{"use strict";var zRr=Xv();function WRr(r){return zRr(r,[0,0],1,0)}jA.exports=WRr});var CA=s((fPe,kA)=>{"use strict";var XRr=D(),BA=MA(),JRr=Xv();XRr(BA,"assign",JRr);kA.exports=BA});var Hn=s((cPe,VA)=>{"use strict";var YRr=2146435072;VA.exports=YRr});var GA=s((lPe,UA)=>{"use strict";var xRr=ae(),ZRr=Hn(),$Rr=ct();function QRr(r){var e=xRr(r);return e=(e&ZRr)>>>20,e-$Rr|0}UA.exports=QRr});var HA=s((pPe,DA)=>{"use strict";var KRr=GA();DA.exports=KRr});var WA=s((dPe,zA)=>{"use strict";var rLr=pr(),eLr=Ir(),tLr=ct(),iLr=_s(),aLr=RA(),nLr=zv(),sLr=z(),uLr=_e(),oLr=Es(),vLr=CA().assign,fLr=HA(),cLr=za(),lLr=Wa(),pLr=2220446049250313e-31,dLr=2148532223>>>0,Jv=[0,0],Yv=[0,0];function gLr(r,e){var t,i;return e===0||r===0||sLr(r)||uLr(r)?r:(vLr(r,Jv,1,0),r=Jv[0],e+=Jv[1],e+=fLr(r),e<nLr?oLr(0,r):e>iLr?r<0?eLr:rLr:(e<=aLr?(e+=52,i=pLr):i=1,cLr.assign(r,Yv,1,0),t=Yv[0],t&=dLr,t|=e+tLr<<20,i*lLr(t,Yv[1])))}zA.exports=gLr});var Xa=s((gPe,XA)=>{"use strict";var mLr=WA();XA.exports=mLr});var zn=s((mPe,JA)=>{"use strict";var yLr=.6931471805599453;JA.exports=yLr});var Ts=s((yPe,YA)=>{"use strict";var hLr=1048575;YA.exports=hLr});var ZA=s((hPe,xA)=>{"use strict";function qLr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}xA.exports=qLr});var i_=s((qPe,t_)=>{"use strict";var bLr=ae(),$A=Et(),wLr=vt(),ELr=Bv(),NLr=Xa(),SLr=zn(),QA=ct(),KA=ft(),r_=Ts(),OLr=ZA(),e_=1048576,ALr=1071644672,Wn=20,_Lr=.6931471824645996,TLr=-1904654299957768e-24;function ILr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m;return p=r&KA|0,m=(p>>Wn)-QA|0,l=0,p>ALr&&(l=r+(e_>>m+1)>>>0,m=((l&KA)>>Wn)-QA|0,i=(l&~(r_>>m))>>>0,n=$A(0,i),l=(l&r_|e_)>>Wn-m>>>0,r<0&&(l=-l),e-=n),n=t+e,n=wLr(n,0),o=n*_Lr,v=(t-(n-e))*SLr+n*TLr,c=o+v,f=v-(c-o),n=c*c,a=c-n*OLr(n),u=c*a/(a-2)-(f+c*f),c=1-(u-c),r=bLr(c),r=ELr(r),r+=l<<Wn>>>0,r>>Wn<=0?c=NLr(c,l):c=$A(c,r),c}t_.exports=ILr});var d_=s((bPe,p_)=>{"use strict";var a_=z(),n_=ws(),s_=_e(),RLr=Ee(),u_=Rr(),LLr=Dr(),xv=za(),PLr=vt(),o_=Bv(),FLr=Ir(),jLr=pr(),Zv=ft(),MLr=sA(),BLr=oA(),kLr=cA(),CLr=NA(),VLr=_A(),ULr=i_(),GLr=1072693247,DLr=1105199104,HLr=1139802112,v_=1083179008,zLr=1072693248,WLr=1083231232,XLr=3230714880>>>0,f_=31,li=1e300,pi=1e-300,JLr=8008566259537294e-32,Nt=[0,0],c_=[0,0];function l_(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;if(a_(r)||a_(e))return NaN;if(xv.assign(e,Nt,1,0),o=Nt[0],v=Nt[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return u_(r);if(e===-.5)return 1/u_(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(s_(e))return kLr(r,e)}if(xv.assign(r,Nt,1,0),n=Nt[0],u=Nt[1],u===0){if(n===0)return MLr(r,e);if(r===1)return 1;if(r===-1&&n_(e))return-1;if(s_(r))return r===FLr?l_(-0,-e):e<0?0:jLr}if(r<0&&RLr(e)===!1)return(r-r)/(r-r);if(a=LLr(r),t=n&Zv|0,i=o&Zv|0,f=n>>>f_|0,c=o>>>f_|0,f&&n_(e)?f=-1:f=1,i>DLr){if(i>HLr)return BLr(r,e);if(t<GLr)return c===1?f*li*li:f*pi*pi;if(t>zLr)return c===0?f*li*li:f*pi*pi;y=VLr(c_,a)}else y=CLr(c_,a,t);if(l=PLr(e,0),m=(e-l)*y[0]+e*y[1],p=l*y[0],g=m+p,xv.assign(g,Nt,1,0),d=o_(Nt[0]),h=o_(Nt[1]),d>=v_){if((d-v_|h)!==0||m+JLr>g-p)return f*li*li}else if((d&Zv)>=WLr&&((d-XLr|h)!==0||m<=g-p))return f*pi*pi;return g=ULr(d,p,m),f*g}p_.exports=l_});var Gr=s((wPe,g_)=>{"use strict";var YLr=d_();g_.exports=YLr});var sa=s((EPe,m_)=>{"use strict";var xLr=9007199254740991;m_.exports=xLr});var Xn=s((NPe,y_)=>{"use strict";var ZLr=308;y_.exports=ZLr});var Is=s((SPe,h_)=>{"use strict";var $Lr=-308;h_.exports=$Lr});var Rs=s((OPe,q_)=>{"use strict";var QLr=-324;q_.exports=QLr});var A_=s((APe,O_)=>{"use strict";var b_=z(),Ls=_e(),w_=Gr(),KLr=Dr(),E_=Ur(),rPr=sa(),N_=Xn(),ePr=Is(),tPr=Rs(),iPr=Ir(),aPr=rPr+1,S_=1e308;function nPr(r,e){var t,i;return b_(r)||b_(e)||Ls(e)?NaN:Ls(r)||r===0||e<tPr||KLr(r)>aPr&&e<=0?r:e>N_?r>=0?0:iPr:e<ePr?(t=w_(10,-(e+N_)),i=r*S_*t,Ls(i)?r:E_(i)/S_/t):(t=w_(10,-e),i=r*t,Ls(i)?r:E_(i)/t)}O_.exports=nPr});var T_=s((_Pe,__)=>{"use strict";var sPr=A_();__.exports=sPr});var R_=s((TPe,I_)=>{"use strict";function uPr(r,e){return r*e}I_.exports=uPr});var P_=s((IPe,L_)=>{"use strict";var oPr=R_();L_.exports=oPr});var j_=s((RPe,F_)=>{"use strict";function vPr(r,e){return r-e}F_.exports=vPr});var B_=s((LPe,M_)=>{"use strict";var fPr=j_();M_.exports=fPr});var C_=s((PPe,k_)=>{"use strict";var Jn=Qr(),cPr=QS(),lPr=T_(),pPr=P_(),dPr=Gr(),gPr=B_();function mPr(r){return Jn(r,"add",cPr),Jn(r,"floorn",lPr),Jn(r,"mul",pPr),Jn(r,"pow",dPr),Jn(r,"sub",gPr),r}k_.exports=mPr});var D_=s((FPe,G_)=>{"use strict";var V_=Nr().isPrimitive,yPr=pr(),hPr=Ir(),U_=V();function qPr(r,e){return t;function t(i,a){var n;if(!V_(i)){if(e.nonnumeric===void 0)throw new TypeError(U_("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!V_(a)){if(e.nonnumeric===void 0)throw new TypeError(U_("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return n=r(i,a),n!==n?e.nan:n===yPr?e.pinf:n===hPr?e.ninf:n}}G_.exports=qPr});var $v=s((jPe,H_)=>{"use strict";var bPr=D_();H_.exports=bPr});var W_=s((MPe,z_)=>{"use strict";var wPr=G0(),EPr=L1(),NPr=fs(),SPr=V(),OPr=vs(),APr=$v(),_Pr=["number","number"],TPr=["First argument","Second argument"];function IPr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(SPr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=OPr([r[0],r[1]],_Pr,TPr),t=wPr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=NPr(t),n=APr(e,i),r[0].push(a),r[1].push(t),EPr(r[0],r[1],n),a}z_.exports=IPr});var J_=s((BPe,X_)=>{"use strict";var RPr=W_();X_.exports=RPr});var x_=s((kPe,Y_)=>{"use strict";var LPr=Nr().isPrimitive,PPr=pr(),FPr=Ir(),jPr=V();function MPr(r,e){return t;function t(i){var a;if(!LPr(i)){if(e.nonnumeric===void 0)throw new TypeError(jPr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return a=r(i),a!==a?e.nan:a===PPr?e.pinf:a===FPr?e.ninf:a}}Y_.exports=MPr});var Ps=s((CPe,Z_)=>{"use strict";var BPr=x_();Z_.exports=BPr});var Q_=s((VPe,$_)=>{"use strict";var Qv=Nr().isPrimitive,kPr=pr(),CPr=Ir(),Kv=V();function VPr(r,e){return t;function t(i,a,n){var u;if(!Qv(i)){if(e.nonnumeric===void 0)throw new TypeError(Kv("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Qv(a)){if(e.nonnumeric===void 0)throw new TypeError(Kv("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Qv(n)){if(e.nonnumeric===void 0)throw new TypeError(Kv("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return u=r(i,a,n),u!==u?e.nan:u===kPr?e.pinf:u===CPr?e.ninf:u}}$_.exports=VPr});var r3=s((UPe,K_)=>{"use strict";var UPr=Q_();K_.exports=UPr});var eT=s((GPe,rT)=>{"use strict";var Fs=Nr().isPrimitive,GPr=pr(),DPr=Ir(),js=V();function HPr(r,e){return t;function t(i,a,n,u){var o;if(!Fs(i)){if(e.nonnumeric===void 0)throw new TypeError(js("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Fs(a)){if(e.nonnumeric===void 0)throw new TypeError(js("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Fs(n)){if(e.nonnumeric===void 0)throw new TypeError(js("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Fs(u)){if(e.nonnumeric===void 0)throw new TypeError(js("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,a,n,u),o!==o?e.nan:o===GPr?e.pinf:o===DPr?e.ninf:o}}rT.exports=HPr});var iT=s((DPe,tT)=>{"use strict";var zPr=eT();tT.exports=zPr});var nT=s((HPe,aT)=>{"use strict";var Yn=Nr().isPrimitive,WPr=pr(),XPr=Ir(),xn=V();function JPr(r,e){return t;function t(i,a,n,u,o){var v;if(!Yn(i)){if(e.nonnumeric===void 0)throw new TypeError(xn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Yn(a)){if(e.nonnumeric===void 0)throw new TypeError(xn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Yn(n)){if(e.nonnumeric===void 0)throw new TypeError(xn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Yn(u)){if(e.nonnumeric===void 0)throw new TypeError(xn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Yn(o)){if(e.nonnumeric===void 0)throw new TypeError(xn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,a,n,u,o),v!==v?e.nan:v===WPr?e.pinf:v===XPr?e.ninf:v}}aT.exports=JPr});var uT=s((zPe,sT)=>{"use strict";var YPr=nT();sT.exports=YPr});var vT=s((WPe,oT)=>{"use strict";var xPr=G0(),ZPr=F1(),$Pr=fs(),QPr=V(),KPr=vs(),rFr=r3(),eFr=["number","number","number"],tFr=["First argument","Second argument","Third argument"];function iFr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(QPr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=KPr([r[0],r[1],r[2]],eFr,tFr),t=xPr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=$Pr(t),n=rFr(e,i),r[0].push(a),r[1].push(t),ZPr(r[0],r[1],n),a}oT.exports=iFr});var cT=s((XPe,fT)=>{"use strict";var aFr=vT();fT.exports=aFr});var pT=s((JPe,lT)=>{"use strict";var nFr=qe(),sFr=j2(),uFr=V(),oFr=Ps();function vFr(r,e){var t,i,a,n,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")i[n]=r[u+1];else throw new Error(uFr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return a=oFr(e,i),nFr(t)?(sFr([t,t],[t.length,t[0].length],a),t):a(t)}lT.exports=vFr});var gT=s((YPe,dT)=>{"use strict";var fFr=pT();dT.exports=fFr});var yT=s((xPe,mT)=>{"use strict";function cFr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}mT.exports=cFr});var e3=s((ZPe,hT)=>{"use strict";var lFr=yT();hT.exports=lFr});var bT=s(($Pe,qT)=>{"use strict";function pFr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}qT.exports=pFr});var lt=s((QPe,wT)=>{"use strict";var dFr=bT();wT.exports=dFr});var NT=s((KPe,ET)=>{"use strict";var gFr=ma(),mFr=Ki(),yFr=W0(),hFr=Aa(),qFr=X0(),bFr=lt();function wFr(r){var e,t,i,a;return e=r.data,i=r.shape,a=r.dtype,t=gFr(e),{ref:r,dtype:a,data:e,length:bFr(i),shape:i,strides:r.strides,offset:r.offset,order:r.order,accessorProtocol:t,accessors:t?[mFr(a),yFr(a)]:[hFr(a),qFr(a)]}}ET.exports=wFr});var OT=s((rFe,ST)=>{"use strict";var EFr=NT();ST.exports=EFr});var _T=s((eFe,AT)=>{"use strict";function NFr(r){var e,t;if(e=[],r<=0)return e;for(t=0;t<r;t++)e.push(t);return e}AT.exports=NFr});var IT=s((tFe,TT)=>{"use strict";var SFr=_T();TT.exports=SFr});var LT=s((iFe,RT)=>{"use strict";function OFr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}RT.exports=OFr});var t3=s((aFe,PT)=>{"use strict";var AFr=LT();PT.exports=AFr});var jT=s((nFe,FT)=>{"use strict";function _Fr(r,e){var t,i,a,n,u,o,v,f,c,l;for(a=1,n=1,l=1;l<r.length;l++){for(v=r[a],t=v<0?-v:v,f=e[n],u=a-1,o=n-1;u>=0&&(c=r[u],i=c<0?-c:c,!(i<=t));)r[u+1]=c,e[o+1]=e[o],u-=1,o-=1;r[u+1]=v,e[o+1]=f,a+=1,n+=1}}FT.exports=_Fr});var kT=s((sFe,BT)=>{"use strict";var TFr=IT(),IFr=Sn(),MT=t3(),RFr=jT();function LFr(r,e,t){var i;return i=TFr(r.length),e=IFr(e),RFr(e,i),r=MT(r,i),t=MT(t,i),{sh:r,sx:e,sy:t}}BT.exports=LFr});var ne=s((uFe,CT)=>{"use strict";var PFr=kT();CT.exports=PFr});var VT=s((oFe,FFr)=>{FFr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var GT=s((vFe,UT)=>{"use strict";var jFr=VT();function MFr(r){return jFr[r]||null}UT.exports=MFr});var i3=s((fFe,DT)=>{"use strict";var BFr=GT();DT.exports=BFr});var zT=s((cFe,HT)=>{"use strict";var kFr={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};HT.exports=kFr});var JT=s((lFe,XT)=>{"use strict";var WT=i3(),a3=zT();function CFr(r,e){var t,i;return t=WT(r),i=WT(e),t===null||i===null?a3.BLOCK_SIZE_IN_ELEMENTS:t>i?a3.BLOCK_SIZE_IN_BYTES/t|0:a3.BLOCK_SIZE_IN_BYTES/i|0}XT.exports=CFr});var se=s((pFe,YT)=>{"use strict";var VFr=JT();YT.exports=VFr});var ZT=s((dFe,xT)=>{"use strict";var UFr=ne(),GFr=se();function DFr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E;for(E=UFr(r.shape,r.strides,e.strides),y=E.sh,h=E.sx,q=E.sy,i=GFr(r.dtype,e.dtype),w=r.offset,A=e.offset,a=r.data,n=e.data,v=h[0],c=q[0],u=r.accessors[0],o=e.accessors[1],I=y[1];I>0;)for(I<i?(d=I,I=0):(d=i,I-=i),p=w+I*h[1],m=A+I*q[1],N=y[0];N>0;)for(N<i?(g=N,N=0):(g=i,N-=i),b=p+N*h[0],T=m+N*q[0],f=h[1]-g*h[0],l=q[1]-g*q[0],O=0;O<d;O++){for(S=0;S<g;S++)o(n,T,t(u(a,b))),b+=v,T+=c;b+=f,T+=l}}xT.exports=DFr});var QT=s((gFe,$T)=>{"use strict";var HFr=ne(),zFr=se();function WFr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U;for(U=HFr(r.shape,r.strides,e.strides),q=U.sh,T=U.sx,S=U.sy,i=zFr(r.dtype,e.dtype),O=r.offset,N=e.offset,a=r.data,n=e.data,v=T[0],l=S[0],u=r.accessors[0],o=e.accessors[1],L=q[2];L>0;)for(L<i?(b=L,L=0):(b=i,L-=i),g=O+L*T[2],h=N+L*S[2],j=q[1];j>0;)for(j<i?(A=j,j=0):(A=i,j-=i),c=T[2]-A*T[1],m=S[2]-A*S[1],y=g+j*T[1],d=h+j*S[1],F=q[0];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),I=y+F*T[0],E=d+F*S[0],f=T[1]-w*T[0],p=S[1]-w*S[0],_=0;_<b;_++){for(M=0;M<A;M++){for(P=0;P<w;P++)o(n,E,t(u(a,I))),I+=v,E+=l;I+=f,E+=p}I+=c,E+=m}}$T.exports=WFr});var rI=s((mFe,KT)=>{"use strict";var XFr=ne(),JFr=se();function YFr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X;for(X=XFr(r.shape,r.strides,e.strides),T=X.sh,E=X.sx,P=X.sy,i=JFr(r.dtype,e.dtype),M=r.offset,_=e.offset,a=r.data,n=e.data,v=E[0],p=P[0],u=r.accessors[0],o=e.accessors[1],W=T[3];W>0;)for(W<i?(I=W,W=0):(I=i,W-=i),q=M+W*E[3],b=_+W*P[3],G=T[2];G>0;)for(G<i?(N=G,G=0):(N=i,G-=i),l=E[3]-N*E[2],g=P[3]-N*P[2],h=q+G*E[2],A=b+G*P[2],B=T[1];B>0;)for(B<i?(O=B,B=0):(O=i,B-=i),c=E[2]-O*E[1],y=P[2]-O*P[1],d=h+B*E[1],w=A+B*P[1],C=T[0];C>0;)for(C<i?(S=C,C=0):(S=i,C-=i),F=d+C*E[0],j=w+C*P[0],f=E[1]-S*E[0],m=P[1]-S*P[0],R=0;R<I;R++){for(k=0;k<N;k++){for(U=0;U<O;U++){for(L=0;L<S;L++)o(n,j,t(u(a,F))),F+=v,j+=p;F+=f,j+=m}F+=c,j+=y}F+=l,j+=g}}KT.exports=YFr});var tI=s((yFe,eI)=>{"use strict";var xFr=ne(),ZFr=se();function $Fr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er;for(er=xFr(r.shape,r.strides,e.strides),I=er.sh,j=er.sx,L=er.sy,i=ZFr(r.dtype,e.dtype),U=r.offset,k=e.offset,a=r.data,n=e.data,v=j[0],m=L[0],u=r.accessors[0],o=e.accessors[1],$=I[4];$>0;)for($<i?(F=$,$=0):(F=i,$-=i),b=U+$*j[4],N=k+$*L[4],Y=I[3];Y>0;)for(Y<i?(_=Y,Y=0):(_=i,Y-=i),p=j[4]-_*j[3],h=L[4]-_*L[3],A=b+Y*j[3],O=N+Y*L[3],J=I[2];J>0;)for(J<i?(M=J,J=0):(M=i,J-=i),l=j[3]-M*j[2],d=L[3]-M*L[2],w=A+J*j[2],S=O+J*L[2],Q=I[1];Q>0;)for(Q<i?(P=Q,Q=0):(P=i,Q-=i),c=j[2]-P*j[1],g=L[2]-P*L[1],q=w+Q*j[1],T=S+Q*L[1],Z=I[0];Z>0;)for(Z<i?(E=Z,Z=0):(E=i,Z-=i),R=q+Z*j[0],C=T+Z*L[0],f=j[1]-E*j[0],y=L[1]-E*L[0],x=0;x<F;x++){for(X=0;X<_;X++){for(W=0;W<M;W++){for(G=0;G<P;G++){for(B=0;B<E;B++)o(n,C,t(u(a,R))),R+=v,C+=m;R+=f,C+=y}R+=c,C+=g}R+=l,C+=d}R+=p,C+=h}}eI.exports=$Fr});var aI=s((hFe,iI)=>{"use strict";var QFr=ne(),KFr=se();function rjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir;for(ir=QFr(r.shape,r.strides,e.strides),_=ir.sh,C=ir.sx,B=ir.sy,i=KFr(r.dtype,e.dtype),G=r.offset,W=e.offset,a=r.data,n=e.data,v=C[0],y=B[0],u=r.accessors[0],o=e.accessors[1],fr=_[5];fr>0;)for(fr<i?(R=fr,fr=0):(R=i,fr-=i),O=G+fr*C[5],M=W+fr*B[5],ar=_[4];ar>0;)for(ar<i?(k=ar,ar=0):(k=i,ar-=i),m=C[5]-k*C[4],w=B[5]-k*B[4],S=O+ar*C[4],P=M+ar*B[4],tr=_[3];tr>0;)for(tr<i?(U=tr,tr=0):(U=i,tr-=i),p=C[4]-U*C[3],q=B[4]-U*B[3],T=S+tr*C[3],E=P+tr*B[3],rr=_[2];rr>0;)for(rr<i?(L=rr,rr=0):(L=i,rr-=i),l=C[3]-L*C[2],h=B[3]-L*B[2],b=T+rr*C[2],I=E+rr*B[2],K=_[1];K>0;)for(K<i?(j=K,K=0):(j=i,K-=i),c=C[2]-j*C[1],d=B[2]-j*B[1],A=b+K*C[1],N=I+K*B[1],ur=_[0];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),X=A+ur*C[0],x=N+ur*B[0],f=C[1]-F*C[0],g=B[1]-F*B[0],er=0;er<R;er++){for($=0;$<k;$++){for(Y=0;Y<U;Y++){for(J=0;J<L;J++){for(Q=0;Q<j;Q++){for(Z=0;Z<F;Z++)o(n,x,t(u(a,X))),X+=v,x+=y;X+=f,x+=g}X+=c,x+=d}X+=l,x+=h}X+=p,x+=q}X+=m,x+=w}}iI.exports=rjr});var sI=s((qFe,nI)=>{"use strict";var ejr=ne(),tjr=se();function ijr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr;for(yr=ejr(r.shape,r.strides,e.strides),U=yr.sh,x=yr.sx,Z=yr.sy,i=tjr(r.dtype,e.dtype),Q=r.offset,J=e.offset,a=r.data,n=e.data,v=x[0],g=Z[0],u=r.accessors[0],o=e.accessors[1],dr=U[6];dr>0;)for(dr<i?(X=dr,dr=0):(X=i,dr-=i),E=Q+dr*x[6],L=J+dr*Z[6],gr=U[5];gr>0;)for(gr<i?(W=gr,gr=0):(W=i,gr-=i),y=x[6]-W*x[5],b=Z[6]-W*Z[5],I=E+gr*x[5],j=L+gr*Z[5],cr=U[4];cr>0;)for(cr<i?(G=cr,cr=0):(G=i,cr-=i),m=x[5]-G*x[4],A=Z[5]-G*Z[4],N=I+cr*x[4],F=j+cr*Z[4],or=U[3];or>0;)for(or<i?(B=or,or=0):(B=i,or-=i),p=x[4]-B*x[3],w=Z[4]-B*Z[3],O=N+or*x[3],_=F+or*Z[3],sr=U[2];sr>0;)for(sr<i?(C=sr,sr=0):(C=i,sr-=i),l=x[3]-C*x[2],q=Z[3]-C*Z[2],S=O+sr*x[2],M=_+sr*Z[2],nr=U[1];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=x[2]-R*x[1],h=Z[2]-R*Z[1],T=S+nr*x[1],P=M+nr*Z[1],ir=U[0];ir>0;)for(ir<i?(k=ir,ir=0):(k=i,ir-=i),Y=T+ir*x[0],$=P+ir*Z[0],f=x[1]-k*x[0],d=Z[1]-k*Z[0],fr=0;fr<X;fr++){for(ar=0;ar<W;ar++){for(tr=0;tr<G;tr++){for(rr=0;rr<B;rr++){for(K=0;K<C;K++){for(ur=0;ur<R;ur++){for(er=0;er<k;er++)o(n,$,t(u(a,Y))),Y+=v,$+=g;Y+=f,$+=d}Y+=c,$+=h}Y+=l,$+=q}Y+=p,$+=w}Y+=m,$+=A}Y+=y,$+=b}}nI.exports=ijr});var oI=s((bFe,uI)=>{"use strict";var ajr=ne(),njr=se();function sjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er,Fr,kr;for(kr=ajr(r.shape,r.strides,e.strides),B=kr.sh,$=kr.sx,er=kr.sy,i=njr(r.dtype,e.dtype),ur=r.offset,K=e.offset,a=r.data,n=e.data,v=$[0],d=er[0],u=r.accessors[0],o=e.accessors[1],Fr=B[7];Fr>0;)for(Fr<i?(Y=Fr,Fr=0):(Y=i,Fr-=i),_=ur+Fr*$[7],C=K+Fr*er[7],Er=B[6];Er>0;)for(Er<i?(J=Er,Er=0):(J=i,Er-=i),g=$[7]-J*$[6],S=er[7]-J*er[6],M=_+Er*$[6],R=C+Er*er[6],Tr=B[5];Tr>0;)for(Tr<i?(Q=Tr,Tr=0):(Q=i,Tr-=i),y=$[6]-Q*$[5],T=er[6]-Q*er[5],P=M+Tr*$[5],k=R+Tr*er[5],_r=B[4];_r>0;)for(_r<i?(Z=_r,_r=0):(Z=i,_r-=i),m=$[5]-Z*$[4],b=er[5]-Z*er[4],E=P+_r*$[4],U=k+_r*er[4],Mr=B[3];Mr>0;)for(Mr<i?(x=Mr,Mr=0):(x=i,Mr-=i),p=$[4]-x*$[3],A=er[4]-x*er[3],I=E+Mr*$[3],L=U+Mr*er[3],jr=B[2];jr>0;)for(jr<i?(X=jr,jr=0):(X=i,jr-=i),l=$[3]-X*$[2],w=er[3]-X*er[2],N=I+jr*$[2],j=L+jr*er[2],yr=B[1];yr>0;)for(yr<i?(W=yr,yr=0):(W=i,yr-=i),c=$[2]-W*$[1],q=er[2]-W*er[1],O=N+yr*$[1],F=j+yr*er[1],dr=B[0];dr>0;)for(dr<i?(G=dr,dr=0):(G=i,dr-=i),rr=O+dr*$[0],tr=F+dr*er[0],f=$[1]-G*$[0],h=er[1]-G*er[0],gr=0;gr<Y;gr++){for(cr=0;cr<J;cr++){for(or=0;or<Q;or++){for(sr=0;sr<Z;sr++){for(nr=0;nr<x;nr++){for(ir=0;ir<X;ir++){for(fr=0;fr<W;fr++){for(ar=0;ar<G;ar++)o(n,tr,t(u(a,rr))),rr+=v,tr+=d;rr+=f,tr+=h}rr+=c,tr+=q}rr+=l,tr+=w}rr+=p,tr+=A}rr+=m,tr+=b}rr+=y,tr+=T}rr+=g,tr+=S}}uI.exports=sjr});var fI=s((wFe,vI)=>{"use strict";var ujr=ne(),ojr=se();function vjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er,Fr,kr,Jr,Cr,Vr,Pr,Br,Xr,Kr;for(Kr=ujr(r.shape,r.strides,e.strides),x=Kr.sh,tr=Kr.sx,ar=Kr.sy,i=ojr(r.dtype,e.dtype),fr=r.offset,ir=e.offset,a=r.data,n=e.data,v=tr[0],h=ar[0],u=r.accessors[0],o=e.accessors[1],Xr=x[8];Xr>0;)for(Xr<i?(rr=Xr,Xr=0):(rr=i,Xr-=i),L=fr+Xr*tr[8],X=ir+Xr*ar[8],Br=x[7];Br>0;)for(Br<i?(K=Br,Br=0):(K=i,Br-=i),d=tr[8]-K*tr[7],N=ar[8]-K*ar[7],j=L+Br*tr[7],W=X+Br*ar[7],Pr=x[6];Pr>0;)for(Pr<i?(ur=Pr,Pr=0):(ur=i,Pr-=i),g=tr[7]-ur*tr[6],O=ar[7]-ur*ar[6],F=j+Pr*tr[6],G=W+Pr*ar[6],Vr=x[5];Vr>0;)for(Vr<i?(er=Vr,Vr=0):(er=i,Vr-=i),y=tr[6]-er*tr[5],S=ar[6]-er*ar[5],_=F+Vr*tr[5],B=G+Vr*ar[5],Cr=x[4];Cr>0;)for(Cr<i?($=Cr,Cr=0):($=i,Cr-=i),m=tr[5]-$*tr[4],T=ar[5]-$*ar[4],M=_+Cr*tr[4],C=B+Cr*ar[4],Jr=x[3];Jr>0;)for(Jr<i?(Y=Jr,Jr=0):(Y=i,Jr-=i),p=tr[4]-Y*tr[3],b=ar[4]-Y*ar[3],P=M+Jr*tr[3],R=C+Jr*ar[3],kr=x[2];kr>0;)for(kr<i?(J=kr,kr=0):(J=i,kr-=i),l=tr[3]-J*tr[2],A=ar[3]-J*ar[2],E=P+kr*tr[2],k=R+kr*ar[2],Fr=x[1];Fr>0;)for(Fr<i?(Q=Fr,Fr=0):(Q=i,Fr-=i),c=tr[2]-Q*tr[1],w=ar[2]-Q*ar[1],I=E+Fr*tr[1],U=k+Fr*ar[1],Er=x[0];Er>0;)for(Er<i?(Z=Er,Er=0):(Z=i,Er-=i),nr=I+Er*tr[0],sr=U+Er*ar[0],f=tr[1]-Z*tr[0],q=ar[1]-Z*ar[0],Tr=0;Tr<rr;Tr++){for(_r=0;_r<K;_r++){for(Mr=0;Mr<ur;Mr++){for(jr=0;jr<er;jr++){for(yr=0;yr<$;yr++){for(dr=0;dr<Y;dr++){for(gr=0;gr<J;gr++){for(cr=0;cr<Q;cr++){for(or=0;or<Z;or++)o(n,sr,t(u(a,nr))),nr+=v,sr+=h;nr+=f,sr+=q}nr+=c,sr+=w}nr+=l,sr+=A}nr+=p,sr+=b}nr+=m,sr+=T}nr+=y,sr+=S}nr+=g,sr+=O}nr+=d,sr+=N}}vI.exports=vjr});var lI=s((EFe,cI)=>{"use strict";var fjr=ne(),cjr=se();function ljr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er,Fr,kr,Jr,Cr,Vr,Pr,Br,Xr,Kr,fe,ce,le,pe,Ce,ai,C0;for(C0=fjr(r.shape,r.strides,e.strides),Y=C0.sh,sr=C0.sx,or=C0.sy,i=cjr(r.dtype,e.dtype),cr=r.offset,gr=e.offset,a=r.data,n=e.data,v=sr[0],q=or[0],u=r.accessors[0],o=e.accessors[1],ai=Y[9];ai>0;)for(ai<i?(nr=ai,ai=0):(nr=i,ai-=i),R=cr+ai*sr[9],J=gr+ai*or[9],Ce=Y[8];Ce>0;)for(Ce<i?(ir=Ce,Ce=0):(ir=i,Ce-=i),h=sr[9]-ir*sr[8],E=or[9]-ir*or[8],k=R+Ce*sr[8],Q=J+Ce*or[8],pe=Y[7];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),d=sr[8]-fr*sr[7],I=or[8]-fr*or[7],U=k+pe*sr[7],Z=Q+pe*or[7],le=Y[6];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=sr[7]-ar*sr[6],N=or[7]-ar*or[6],L=U+le*sr[6],x=Z+le*or[6],ce=Y[5];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=sr[6]-tr*sr[5],O=or[6]-tr*or[5],j=L+ce*sr[5],X=x+ce*or[5],fe=Y[4];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=sr[5]-rr*sr[4],S=or[5]-rr*or[4],F=j+fe*sr[4],W=X+fe*or[4],Kr=Y[3];Kr>0;)for(Kr<i?(K=Kr,Kr=0):(K=i,Kr-=i),p=sr[4]-K*sr[3],T=or[4]-K*or[3],_=F+Kr*sr[3],G=W+Kr*or[3],Xr=Y[2];Xr>0;)for(Xr<i?(ur=Xr,Xr=0):(ur=i,Xr-=i),l=sr[3]-ur*sr[2],b=or[3]-ur*or[2],M=_+Xr*sr[2],B=G+Xr*or[2],Br=Y[1];Br>0;)for(Br<i?(er=Br,Br=0):(er=i,Br-=i),c=sr[2]-er*sr[1],A=or[2]-er*or[1],P=M+Br*sr[1],C=B+Br*or[1],Pr=Y[0];Pr>0;)for(Pr<i?($=Pr,Pr=0):($=i,Pr-=i),dr=P+Pr*sr[0],yr=C+Pr*or[0],f=sr[1]-$*sr[0],w=or[1]-$*or[0],Vr=0;Vr<nr;Vr++){for(Cr=0;Cr<ir;Cr++){for(Jr=0;Jr<fr;Jr++){for(kr=0;kr<ar;kr++){for(Fr=0;Fr<tr;Fr++){for(Er=0;Er<rr;Er++){for(Tr=0;Tr<K;Tr++){for(_r=0;_r<ur;_r++){for(Mr=0;Mr<er;Mr++){for(jr=0;jr<$;jr++)o(n,yr,t(u(a,dr))),dr+=v,yr+=q;dr+=f,yr+=w}dr+=c,yr+=A}dr+=l,yr+=b}dr+=p,yr+=T}dr+=m,yr+=S}dr+=y,yr+=O}dr+=g,yr+=N}dr+=d,yr+=I}dr+=h,yr+=E}}cI.exports=ljr});var dI=s((NFe,pI)=>{"use strict";var pjr=ne(),djr=se();function gjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N;for(N=pjr(r.shape,r.strides,e.strides),p=N.sh,g=N.sx,d=N.sy,i=djr(r.dtype,e.dtype),h=r.offset,q=e.offset,a=r.data,n=e.data,u=g[0],v=d[0],O=p[1];O>0;)for(O<i?(y=O,O=0):(y=i,O-=i),c=h+O*g[1],l=q+O*d[1],S=p[0];S>0;)for(S<i?(m=S,S=0):(m=i,S-=i),w=c+S*g[0],A=l+S*d[0],o=g[1]-m*g[0],f=d[1]-m*d[0],T=0;T<y;T++){for(b=0;b<m;b++)n[A]=t(a[w]),w+=u,A+=v;w+=o,A+=f}}pI.exports=gjr});var mI=s((SFe,gI)=>{"use strict";var mjr=ne(),yjr=se();function hjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j;for(j=mjr(r.shape,r.strides,e.strides),d=j.sh,A=j.sx,b=j.sy,i=yjr(r.dtype,e.dtype),T=r.offset,S=e.offset,a=r.data,n=e.data,u=A[0],f=b[0],F=d[2];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),m=T+F*A[2],g=S+F*b[2],_=d[1];_>0;)for(_<i?(q=_,_=0):(q=i,_-=i),v=A[2]-q*A[1],l=b[2]-q*b[1],p=m+_*A[1],y=g+_*b[1],M=d[0];M>0;)for(M<i?(h=M,M=0):(h=i,M-=i),O=p+M*A[0],N=y+M*b[0],o=A[1]-h*A[0],c=b[1]-h*b[0],P=0;P<w;P++){for(E=0;E<q;E++){for(I=0;I<h;I++)n[N]=t(a[O]),O+=u,N+=f;O+=o,N+=c}O+=v,N+=l}}gI.exports=hjr});var hI=s((OFe,yI)=>{"use strict";var qjr=ne(),bjr=se();function wjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G;for(G=qjr(r.shape,r.strides,e.strides),A=G.sh,N=G.sx,I=G.sy,i=bjr(r.dtype,e.dtype),E=r.offset,P=e.offset,a=r.data,n=e.data,u=N[0],c=I[0],B=A[3];B>0;)for(B<i?(O=B,B=0):(O=i,B-=i),d=E+B*N[3],w=P+B*I[3],C=A[2];C>0;)for(C<i?(S=C,C=0):(S=i,C-=i),f=N[3]-S*N[2],m=I[3]-S*I[2],g=d+C*N[2],q=w+C*I[2],R=A[1];R>0;)for(R<i?(T=R,R=0):(T=i,R-=i),v=N[2]-T*N[1],p=I[2]-T*I[1],y=g+R*N[1],h=q+R*I[1],k=A[0];k>0;)for(k<i?(b=k,k=0):(b=i,k-=i),M=y+k*N[0],_=h+k*I[0],o=N[1]-b*N[0],l=I[1]-b*I[0],U=0;U<O;U++){for(L=0;L<S;L++){for(j=0;j<T;j++){for(F=0;F<b;F++)n[_]=t(a[M]),M+=u,_+=c;M+=o,_+=l}M+=v,_+=p}M+=f,_+=m}}yI.exports=wjr});var bI=s((AFe,qI)=>{"use strict";var Ejr=ne(),Njr=se();function Sjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y;for(Y=Ejr(r.shape,r.strides,e.strides),O=Y.sh,_=Y.sx,F=Y.sy,i=Njr(r.dtype,e.dtype),j=r.offset,L=e.offset,a=r.data,n=e.data,u=_[0],l=F[0],J=O[4];J>0;)for(J<i?(M=J,J=0):(M=i,J-=i),w=j+J*_[4],S=L+J*F[4],Q=O[3];Q>0;)for(Q<i?(P=Q,Q=0):(P=i,Q-=i),c=_[4]-P*_[3],g=F[4]-P*F[3],q=w+Q*_[3],T=S+Q*F[3],Z=O[2];Z>0;)for(Z<i?(E=Z,Z=0):(E=i,Z-=i),f=_[3]-E*_[2],y=F[3]-E*F[2],h=q+Z*_[2],b=T+Z*F[2],x=O[1];x>0;)for(x<i?(I=x,x=0):(I=i,x-=i),v=_[2]-I*_[1],m=F[2]-I*F[1],d=h+x*_[1],A=b+x*F[1],X=O[0];X>0;)for(X<i?(N=X,X=0):(N=i,X-=i),U=d+X*_[0],k=A+X*F[0],o=_[1]-N*_[0],p=F[1]-N*F[0],W=0;W<M;W++){for(G=0;G<P;G++){for(B=0;B<E;B++){for(C=0;C<I;C++){for(R=0;R<N;R++)n[k]=t(a[U]),U+=u,k+=l;U+=o,k+=p}U+=v,k+=m}U+=f,k+=y}U+=c,k+=g}}qI.exports=Sjr});var EI=s((_Fe,wI)=>{"use strict";var Ojr=ne(),Ajr=se();function _jr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar;for(ar=Ojr(r.shape,r.strides,e.strides),P=ar.sh,k=ar.sx,R=ar.sy,i=Ajr(r.dtype,e.dtype),C=r.offset,B=e.offset,a=r.data,n=e.data,u=k[0],p=R[0],tr=P[5];tr>0;)for(tr<i?(U=tr,tr=0):(U=i,tr-=i),T=C+tr*k[5],E=B+tr*R[5],rr=P[4];rr>0;)for(rr<i?(L=rr,rr=0):(L=i,rr-=i),l=k[5]-L*k[4],h=R[5]-L*R[4],b=T+rr*k[4],I=E+rr*R[4],K=P[3];K>0;)for(K<i?(j=K,K=0):(j=i,K-=i),c=k[4]-j*k[3],d=R[4]-j*R[3],A=b+K*k[3],N=I+K*R[3],ur=P[2];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),f=k[3]-F*k[2],g=R[3]-F*R[2],w=A+ur*k[2],O=N+ur*R[2],er=P[1];er>0;)for(er<i?(_=er,er=0):(_=i,er-=i),v=k[2]-_*k[1],y=R[2]-_*R[1],q=w+er*k[1],S=O+er*R[1],$=P[0];$>0;)for($<i?(M=$,$=0):(M=i,$-=i),G=q+$*k[0],W=S+$*R[0],o=k[1]-M*k[0],m=R[1]-M*R[0],Y=0;Y<U;Y++){for(J=0;J<L;J++){for(Q=0;Q<j;Q++){for(Z=0;Z<F;Z++){for(x=0;x<_;x++){for(X=0;X<M;X++)n[W]=t(a[G]),G+=u,W+=p;G+=o,W+=m}G+=v,W+=y}G+=f,W+=g}G+=c,W+=d}G+=l,W+=h}}wI.exports=_jr});var SI=s((TFe,NI)=>{"use strict";var Tjr=ne(),Ijr=se();function Rjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr;for(gr=Tjr(r.shape,r.strides,e.strides),j=gr.sh,W=gr.sx,X=gr.sy,i=Ijr(r.dtype,e.dtype),x=r.offset,Z=e.offset,a=r.data,n=e.data,u=W[0],m=X[0],cr=j[6];cr>0;)for(cr<i?(G=cr,cr=0):(G=i,cr-=i),N=x+cr*W[6],F=Z+cr*X[6],or=j[5];or>0;)for(or<i?(B=or,or=0):(B=i,or-=i),p=W[6]-B*W[5],w=X[6]-B*X[5],O=N+or*W[5],_=F+or*X[5],sr=j[4];sr>0;)for(sr<i?(C=sr,sr=0):(C=i,sr-=i),l=W[5]-C*W[4],q=X[5]-C*X[4],S=O+sr*W[4],M=_+sr*X[4],nr=j[3];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=W[4]-R*W[3],h=X[4]-R*X[3],T=S+nr*W[3],P=M+nr*X[3],ir=j[2];ir>0;)for(ir<i?(k=ir,ir=0):(k=i,ir-=i),f=W[3]-k*W[2],d=X[3]-k*X[2],b=T+ir*W[2],E=P+ir*X[2],fr=j[1];fr>0;)for(fr<i?(U=fr,fr=0):(U=i,fr-=i),v=W[2]-U*W[1],g=X[2]-U*X[1],A=b+fr*W[1],I=E+fr*X[1],ar=j[0];ar>0;)for(ar<i?(L=ar,ar=0):(L=i,ar-=i),Q=A+ar*W[0],J=I+ar*X[0],o=W[1]-L*W[0],y=X[1]-L*X[0],tr=0;tr<G;tr++){for(rr=0;rr<B;rr++){for(K=0;K<C;K++){for(ur=0;ur<R;ur++){for(er=0;er<k;er++){for($=0;$<U;$++){for(Y=0;Y<L;Y++)n[J]=t(a[Q]),Q+=u,J+=m;Q+=o,J+=y}Q+=v,J+=g}Q+=f,J+=d}Q+=c,J+=h}Q+=l,J+=q}Q+=p,J+=w}}NI.exports=Rjr});var AI=s((IFe,OI)=>{"use strict";var Ljr=ne(),Pjr=se();function Fjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er;for(Er=Ljr(r.shape,r.strides,e.strides),R=Er.sh,J=Er.sx,Y=Er.sy,i=Pjr(r.dtype,e.dtype),$=r.offset,er=e.offset,a=r.data,n=e.data,u=J[0],y=Y[0],Tr=R[7];Tr>0;)for(Tr<i?(Q=Tr,Tr=0):(Q=i,Tr-=i),P=$+Tr*J[7],k=er+Tr*Y[7],_r=R[6];_r>0;)for(_r<i?(Z=_r,_r=0):(Z=i,_r-=i),m=J[7]-Z*J[6],b=Y[7]-Z*Y[6],E=P+_r*J[6],U=k+_r*Y[6],Mr=R[5];Mr>0;)for(Mr<i?(x=Mr,Mr=0):(x=i,Mr-=i),p=J[6]-x*J[5],A=Y[6]-x*Y[5],I=E+Mr*J[5],L=U+Mr*Y[5],jr=R[4];jr>0;)for(jr<i?(X=jr,jr=0):(X=i,jr-=i),l=J[5]-X*J[4],w=Y[5]-X*Y[4],N=I+jr*J[4],j=L+jr*Y[4],yr=R[3];yr>0;)for(yr<i?(W=yr,yr=0):(W=i,yr-=i),c=J[4]-W*J[3],q=Y[4]-W*Y[3],O=N+yr*J[3],F=j+yr*Y[3],dr=R[2];dr>0;)for(dr<i?(G=dr,dr=0):(G=i,dr-=i),f=J[3]-G*J[2],h=Y[3]-G*Y[2],S=O+dr*J[2],_=F+dr*Y[2],gr=R[1];gr>0;)for(gr<i?(B=gr,gr=0):(B=i,gr-=i),v=J[2]-B*J[1],d=Y[2]-B*Y[1],T=S+gr*J[1],M=_+gr*Y[1],cr=R[0];cr>0;)for(cr<i?(C=cr,cr=0):(C=i,cr-=i),ur=T+cr*J[0],K=M+cr*Y[0],o=J[1]-C*J[0],g=Y[1]-C*Y[0],or=0;or<Q;or++){for(sr=0;sr<Z;sr++){for(nr=0;nr<x;nr++){for(ir=0;ir<X;ir++){for(fr=0;fr<W;fr++){for(ar=0;ar<G;ar++){for(tr=0;tr<B;tr++){for(rr=0;rr<C;rr++)n[K]=t(a[ur]),ur+=u,K+=y;ur+=o,K+=g}ur+=v,K+=d}ur+=f,K+=h}ur+=c,K+=q}ur+=l,K+=w}ur+=p,K+=A}ur+=m,K+=b}}OI.exports=Fjr});var TI=s((RFe,_I)=>{"use strict";var jjr=ne(),Mjr=se();function Bjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er,Fr,kr,Jr,Cr,Vr,Pr,Br;for(Br=jjr(r.shape,r.strides,e.strides),W=Br.sh,K=Br.sx,rr=Br.sy,i=Mjr(r.dtype,e.dtype),tr=r.offset,ar=e.offset,a=r.data,n=e.data,u=K[0],g=rr[0],Pr=W[8];Pr>0;)for(Pr<i?(ur=Pr,Pr=0):(ur=i,Pr-=i),F=tr+Pr*K[8],G=ar+Pr*rr[8],Vr=W[7];Vr>0;)for(Vr<i?(er=Vr,Vr=0):(er=i,Vr-=i),y=K[8]-er*K[7],S=rr[8]-er*rr[7],_=F+Vr*K[7],B=G+Vr*rr[7],Cr=W[6];Cr>0;)for(Cr<i?($=Cr,Cr=0):($=i,Cr-=i),m=K[7]-$*K[6],T=rr[7]-$*rr[6],M=_+Cr*K[6],C=B+Cr*rr[6],Jr=W[5];Jr>0;)for(Jr<i?(Y=Jr,Jr=0):(Y=i,Jr-=i),p=K[6]-Y*K[5],b=rr[6]-Y*rr[5],P=M+Jr*K[5],R=C+Jr*rr[5],kr=W[4];kr>0;)for(kr<i?(J=kr,kr=0):(J=i,kr-=i),l=K[5]-J*K[4],A=rr[5]-J*rr[4],E=P+kr*K[4],k=R+kr*rr[4],Fr=W[3];Fr>0;)for(Fr<i?(Q=Fr,Fr=0):(Q=i,Fr-=i),c=K[4]-Q*K[3],w=rr[4]-Q*rr[3],I=E+Fr*K[3],U=k+Fr*rr[3],Er=W[2];Er>0;)for(Er<i?(Z=Er,Er=0):(Z=i,Er-=i),f=K[3]-Z*K[2],q=rr[3]-Z*rr[2],N=I+Er*K[2],L=U+Er*rr[2],Tr=W[1];Tr>0;)for(Tr<i?(x=Tr,Tr=0):(x=i,Tr-=i),v=K[2]-x*K[1],h=rr[2]-x*rr[1],O=N+Tr*K[1],j=L+Tr*rr[1],_r=W[0];_r>0;)for(_r<i?(X=_r,_r=0):(X=i,_r-=i),fr=O+_r*K[0],ir=j+_r*rr[0],o=K[1]-X*K[0],d=rr[1]-X*rr[0],Mr=0;Mr<ur;Mr++){for(jr=0;jr<er;jr++){for(yr=0;yr<$;yr++){for(dr=0;dr<Y;dr++){for(gr=0;gr<J;gr++){for(cr=0;cr<Q;cr++){for(or=0;or<Z;or++){for(sr=0;sr<x;sr++){for(nr=0;nr<X;nr++)n[ir]=t(a[fr]),fr+=u,ir+=g;fr+=o,ir+=d}fr+=v,ir+=h}fr+=f,ir+=q}fr+=c,ir+=w}fr+=l,ir+=A}fr+=p,ir+=b}fr+=m,ir+=T}fr+=y,ir+=S}}_I.exports=Bjr});var RI=s((LFe,II)=>{"use strict";var kjr=ne(),Cjr=se();function Vjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er,Fr,kr,Jr,Cr,Vr,Pr,Br,Xr,Kr,fe,ce,le,pe,Ce;for(Ce=kjr(r.shape,r.strides,e.strides),Q=Ce.sh,ir=Ce.sx,nr=Ce.sy,i=Cjr(r.dtype,e.dtype),sr=r.offset,or=e.offset,a=r.data,n=e.data,u=ir[0],d=nr[0],pe=Q[9];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),U=sr+pe*ir[9],Z=or+pe*nr[9],le=Q[8];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=ir[9]-ar*ir[8],N=nr[9]-ar*nr[8],L=U+le*ir[8],x=Z+le*nr[8],ce=Q[7];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=ir[8]-tr*ir[7],O=nr[8]-tr*nr[7],j=L+ce*ir[7],X=x+ce*nr[7],fe=Q[6];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=ir[7]-rr*ir[6],S=nr[7]-rr*nr[6],F=j+fe*ir[6],W=X+fe*nr[6],Kr=Q[5];Kr>0;)for(Kr<i?(K=Kr,Kr=0):(K=i,Kr-=i),p=ir[6]-K*ir[5],T=nr[6]-K*nr[5],_=F+Kr*ir[5],G=W+Kr*nr[5],Xr=Q[4];Xr>0;)for(Xr<i?(ur=Xr,Xr=0):(ur=i,Xr-=i),l=ir[5]-ur*ir[4],b=nr[5]-ur*nr[4],M=_+Xr*ir[4],B=G+Xr*nr[4],Br=Q[3];Br>0;)for(Br<i?(er=Br,Br=0):(er=i,Br-=i),c=ir[4]-er*ir[3],A=nr[4]-er*nr[3],P=M+Br*ir[3],C=B+Br*nr[3],Pr=Q[2];Pr>0;)for(Pr<i?($=Pr,Pr=0):($=i,Pr-=i),f=ir[3]-$*ir[2],w=nr[3]-$*nr[2],E=P+Pr*ir[2],R=C+Pr*nr[2],Vr=Q[1];Vr>0;)for(Vr<i?(Y=Vr,Vr=0):(Y=i,Vr-=i),v=ir[2]-Y*ir[1],q=nr[2]-Y*nr[1],I=E+Vr*ir[1],k=R+Vr*nr[1],Cr=Q[0];Cr>0;)for(Cr<i?(J=Cr,Cr=0):(J=i,Cr-=i),cr=I+Cr*ir[0],gr=k+Cr*nr[0],o=ir[1]-J*ir[0],h=nr[1]-J*nr[0],Jr=0;Jr<fr;Jr++){for(kr=0;kr<ar;kr++){for(Fr=0;Fr<tr;Fr++){for(Er=0;Er<rr;Er++){for(Tr=0;Tr<K;Tr++){for(_r=0;_r<ur;_r++){for(Mr=0;Mr<er;Mr++){for(jr=0;jr<$;jr++){for(yr=0;yr<Y;yr++){for(dr=0;dr<J;dr++)n[gr]=t(a[cr]),cr+=u,gr+=d;cr+=o,gr+=h}cr+=v,gr+=q}cr+=f,gr+=w}cr+=c,gr+=A}cr+=l,gr+=b}cr+=p,gr+=T}cr+=m,gr+=S}cr+=y,gr+=O}cr+=g,gr+=N}}II.exports=Vjr});var PI=s((PFe,LI)=>{"use strict";function Ujr(r,e,t){e.accessors[1](e.data,e.offset,t(r.accessors[0](r.data,r.offset)))}LI.exports=Ujr});var jI=s((FFe,FI)=>{"use strict";function Gjr(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(f=r.shape[0],o=r.strides[0],v=e.strides[0],c=r.offset,l=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],p=0;p<f;p++)u(a,l,t(n(i,c))),c+=o,l+=v}FI.exports=Gjr});var BI=s((jFe,MI)=>{"use strict";function Djr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;for(l=r.shape,y=r.strides,g=e.strides,r.order==="row-major"?(p=l[1],m=l[0],o=y[1],v=y[0]-p*y[1],f=g[1],c=g[0]-p*g[1]):(p=l[0],m=l[1],o=y[0],v=y[1]-p*y[0],f=g[0],c=g[1]-p*g[0]),d=r.offset,h=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],w=0;w<m;w++){for(q=0;q<p;q++)u(a,h,t(n(i,d))),d+=o,h+=f;d+=v,h+=c}}MI.exports=Djr});var CI=s((MFe,kI)=>{"use strict";function Hjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S;for(m=r.shape,h=r.strides,q=e.strides,r.order==="row-major"?(y=m[2],g=m[1],d=m[0],o=h[2],v=h[1]-y*h[2],f=h[0]-g*h[1],c=q[2],l=q[1]-y*q[2],p=q[0]-g*q[1]):(y=m[0],g=m[1],d=m[2],o=h[0],v=h[1]-y*h[0],f=h[2]-g*h[1],c=q[0],l=q[1]-y*q[0],p=q[2]-g*q[1]),w=r.offset,A=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],S=0;S<d;S++){for(T=0;T<g;T++){for(b=0;b<y;b++)u(a,A,t(n(i,w))),w+=o,A+=c;w+=v,A+=l}w+=f,A+=p}}kI.exports=Hjr});var UI=s((BFe,VI)=>{"use strict";function zjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E;for(g=r.shape,A=r.strides,b=e.strides,r.order==="row-major"?(d=g[3],h=g[2],q=g[1],w=g[0],o=A[3],v=A[2]-d*A[3],f=A[1]-h*A[2],c=A[0]-q*A[1],l=b[3],p=b[2]-d*b[3],m=b[1]-h*b[2],y=b[0]-q*b[1]):(d=g[0],h=g[1],q=g[2],w=g[3],o=A[0],v=A[1]-d*A[0],f=A[2]-h*A[1],c=A[3]-q*A[2],l=b[0],p=b[1]-d*b[0],m=b[2]-h*b[1],y=b[3]-q*b[2]),T=r.offset,S=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],E=0;E<w;E++){for(I=0;I<q;I++){for(N=0;N<h;N++){for(O=0;O<d;O++)u(a,S,t(n(i,T))),T+=o,S+=l;T+=v,S+=p}T+=f,S+=m}T+=c,S+=y}}VI.exports=zjr});var DI=s((kFe,GI)=>{"use strict";function Wjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F;for(h=r.shape,S=r.strides,O=e.strides,r.order==="row-major"?(q=h[4],w=h[3],A=h[2],b=h[1],T=h[0],o=S[4],v=S[3]-q*S[4],f=S[2]-w*S[3],c=S[1]-A*S[2],l=S[0]-b*S[1],p=O[4],m=O[3]-q*O[4],y=O[2]-w*O[3],g=O[1]-A*O[2],d=O[0]-b*O[1]):(q=h[0],w=h[1],A=h[2],b=h[3],T=h[4],o=S[0],v=S[1]-q*S[0],f=S[2]-w*S[1],c=S[3]-A*S[2],l=S[4]-b*S[3],p=O[0],m=O[1]-q*O[0],y=O[2]-w*O[1],g=O[3]-A*O[2],d=O[4]-b*O[3]),N=r.offset,I=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],F=0;F<T;F++){for(_=0;_<b;_++){for(M=0;M<A;M++){for(P=0;P<w;P++){for(E=0;E<q;E++)u(a,I,t(n(i,N))),N+=o,I+=p;N+=v,I+=m}N+=f,I+=y}N+=c,I+=g}N+=l,I+=d}}GI.exports=Wjr});var zI=s((CFe,HI)=>{"use strict";function Xjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k;for(w=r.shape,I=r.strides,E=e.strides,r.order==="row-major"?(A=w[5],b=w[4],T=w[3],S=w[2],O=w[1],N=w[0],o=I[5],v=I[4]-A*I[5],f=I[3]-b*I[4],c=I[2]-T*I[3],l=I[1]-S*I[2],p=I[0]-O*I[1],m=E[5],y=E[4]-A*E[5],g=E[3]-b*E[4],d=E[2]-T*E[3],h=E[1]-S*E[2],q=E[0]-O*E[1]):(A=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],o=I[0],v=I[1]-A*I[0],f=I[2]-b*I[1],c=I[3]-T*I[2],l=I[4]-S*I[3],p=I[5]-O*I[4],m=E[0],y=E[1]-A*E[0],g=E[2]-b*E[1],d=E[3]-T*E[2],h=E[4]-S*E[3],q=E[5]-O*E[4]),P=r.offset,M=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],k=0;k<N;k++){for(U=0;U<O;U++){for(L=0;L<S;L++){for(j=0;j<T;j++){for(F=0;F<b;F++){for(_=0;_<A;_++)u(a,M,t(n(i,P))),P+=o,M+=m;P+=v,M+=y}P+=f,M+=g}P+=c,M+=d}P+=l,M+=h}P+=p,M+=q}}HI.exports=Xjr});var XI=s((VFe,WI)=>{"use strict";function Jjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G;for(b=r.shape,M=r.strides,_=e.strides,r.order==="row-major"?(T=b[6],S=b[5],O=b[4],N=b[3],I=b[2],E=b[1],P=b[0],o=M[6],v=M[5]-T*M[6],f=M[4]-S*M[5],c=M[3]-O*M[4],l=M[2]-N*M[3],p=M[1]-I*M[2],m=M[0]-E*M[1],y=_[6],g=_[5]-T*_[6],d=_[4]-S*_[5],h=_[3]-O*_[4],q=_[2]-N*_[3],w=_[1]-I*_[2],A=_[0]-E*_[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],P=b[6],o=M[0],v=M[1]-T*M[0],f=M[2]-S*M[1],c=M[3]-O*M[2],l=M[4]-N*M[3],p=M[5]-I*M[4],m=M[6]-E*M[5],y=_[0],g=_[1]-T*_[0],d=_[2]-S*_[1],h=_[3]-O*_[2],q=_[4]-N*_[3],w=_[5]-I*_[4],A=_[6]-E*_[5]),F=r.offset,j=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],G=0;G<P;G++){for(B=0;B<E;B++){for(C=0;C<I;C++){for(R=0;R<N;R++){for(k=0;k<O;k++){for(U=0;U<S;U++){for(L=0;L<T;L++)u(a,j,t(n(i,F))),F+=o,j+=y;F+=v,j+=g}F+=f,j+=d}F+=c,j+=h}F+=l,j+=q}F+=p,j+=w}F+=m,j+=A}}WI.exports=Jjr});var YI=s((UFe,JI)=>{"use strict";function Yjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z;for(S=r.shape,j=r.strides,L=e.strides,r.order==="row-major"?(O=S[7],N=S[6],I=S[5],E=S[4],P=S[3],M=S[2],_=S[1],F=S[0],o=j[7],v=j[6]-O*j[7],f=j[5]-N*j[6],c=j[4]-I*j[5],l=j[3]-E*j[4],p=j[2]-P*j[3],m=j[1]-M*j[2],y=j[0]-_*j[1],g=L[7],d=L[6]-O*L[7],h=L[5]-N*L[6],q=L[4]-I*L[5],w=L[3]-E*L[4],A=L[2]-P*L[3],b=L[1]-M*L[2],T=L[0]-_*L[1]):(O=S[0],N=S[1],I=S[2],E=S[3],P=S[4],M=S[5],_=S[6],F=S[7],o=j[0],v=j[1]-O*j[0],f=j[2]-N*j[1],c=j[3]-I*j[2],l=j[4]-E*j[3],p=j[5]-P*j[4],m=j[6]-M*j[5],y=j[7]-_*j[6],g=L[0],d=L[1]-O*L[0],h=L[2]-N*L[1],q=L[3]-I*L[2],w=L[4]-E*L[3],A=L[5]-P*L[4],b=L[6]-M*L[5],T=L[7]-_*L[6]),U=r.offset,k=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],Z=0;Z<F;Z++){for(x=0;x<_;x++){for(X=0;X<M;X++){for(W=0;W<P;W++){for(G=0;G<E;G++){for(B=0;B<I;B++){for(C=0;C<N;C++){for(R=0;R<O;R++)u(a,k,t(n(i,U))),U+=o,k+=g;U+=v,k+=d}U+=f,k+=h}U+=c,k+=q}U+=l,k+=w}U+=p,k+=A}U+=m,k+=b}U+=y,k+=T}}JI.exports=Yjr});var ZI=s((GFe,xI)=>{"use strict";function xjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$;for(N=r.shape,k=r.strides,R=e.strides,r.order==="row-major"?(I=N[8],E=N[7],P=N[6],M=N[5],_=N[4],F=N[3],j=N[2],L=N[1],U=N[0],o=k[8],v=k[7]-I*k[8],f=k[6]-E*k[7],c=k[5]-P*k[6],l=k[4]-M*k[5],p=k[3]-_*k[4],m=k[2]-F*k[3],y=k[1]-j*k[2],g=k[0]-L*k[1],d=R[8],h=R[7]-I*R[8],q=R[6]-E*R[7],w=R[5]-P*R[6],A=R[4]-M*R[5],b=R[3]-_*R[4],T=R[2]-F*R[3],S=R[1]-j*R[2],O=R[0]-L*R[1]):(I=N[0],E=N[1],P=N[2],M=N[3],_=N[4],F=N[5],j=N[6],L=N[7],U=N[8],o=k[0],v=k[1]-I*k[0],f=k[2]-E*k[1],c=k[3]-P*k[2],l=k[4]-M*k[3],p=k[5]-_*k[4],m=k[6]-F*k[5],y=k[7]-j*k[6],g=k[8]-L*k[7],d=R[0],h=R[1]-I*R[0],q=R[2]-E*R[1],w=R[3]-P*R[2],A=R[4]-M*R[3],b=R[5]-_*R[4],T=R[6]-F*R[5],S=R[7]-j*R[6],O=R[8]-L*R[7]),C=r.offset,B=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],$=0;$<U;$++){for(Y=0;Y<L;Y++){for(J=0;J<j;J++){for(Q=0;Q<F;Q++){for(Z=0;Z<_;Z++){for(x=0;x<M;x++){for(X=0;X<P;X++){for(W=0;W<E;W++){for(G=0;G<I;G++)u(a,B,t(n(i,C))),C+=o,B+=d;C+=v,B+=h}C+=f,B+=q}C+=c,B+=w}C+=l,B+=A}C+=p,B+=b}C+=m,B+=T}C+=y,B+=S}C+=g,B+=O}}xI.exports=xjr});var QI=s((DFe,$I)=>{"use strict";function Zjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr;for(E=r.shape,B=r.strides,G=e.strides,r.order==="row-major"?(P=E[9],M=E[8],_=E[7],F=E[6],j=E[5],L=E[4],U=E[3],k=E[2],R=E[1],C=E[0],o=B[9],v=B[8]-P*B[9],f=B[7]-M*B[8],c=B[6]-_*B[7],l=B[5]-F*B[6],p=B[4]-j*B[5],m=B[3]-L*B[4],y=B[2]-U*B[3],g=B[1]-k*B[2],d=B[0]-R*B[1],h=G[9],q=G[8]-P*G[9],w=G[7]-M*G[8],A=G[6]-_*G[7],b=G[5]-F*G[6],T=G[4]-j*G[5],S=G[3]-L*G[4],O=G[2]-U*G[3],N=G[1]-k*G[2],I=G[0]-R*G[1]):(P=E[0],M=E[1],_=E[2],F=E[3],j=E[4],L=E[5],U=E[6],k=E[7],R=E[8],C=E[9],o=B[0],v=B[1]-P*B[0],f=B[2]-M*B[1],c=B[3]-_*B[2],l=B[4]-F*B[3],p=B[5]-j*B[4],m=B[6]-L*B[5],y=B[7]-U*B[6],g=B[8]-k*B[7],d=B[9]-R*B[8],h=G[0],q=G[1]-P*G[0],w=G[2]-M*G[1],A=G[3]-_*G[2],b=G[4]-F*G[3],T=G[5]-j*G[4],S=G[6]-L*G[5],O=G[7]-U*G[6],N=G[8]-k*G[7],I=G[9]-R*G[8]),W=r.offset,X=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],rr=0;rr<C;rr++){for(K=0;K<R;K++){for(ur=0;ur<k;ur++){for(er=0;er<U;er++){for($=0;$<L;$++){for(Y=0;Y<j;Y++){for(J=0;J<F;J++){for(Q=0;Q<_;Q++){for(Z=0;Z<M;Z++){for(x=0;x<P;x++)u(a,X,t(n(i,W))),W+=o,X+=h;W+=v,X+=q}W+=f,X+=w}W+=c,X+=A}W+=l,X+=b}W+=p,X+=T}W+=m,X+=S}W+=y,X+=O}W+=g,X+=N}W+=d,X+=I}}$I.exports=Zjr});var rR=s((HFe,KI)=>{"use strict";var $jr=V();function Qjr(r,e,t,i,a,n){var u,o,v,f,c;for(u=r.length,o=1,c=0;c<u;c++)o*=r[c];if(n==="clamp")a<0?a=0:a>=o&&(a=o-1);else if(n==="wrap")a<0?(a+=o,a<0&&(a%=o,a!==0&&(a+=o))):a>=o&&(a-=o,a>=o&&(a%=o));else if(a<0||a>=o)throw new RangeError($jr("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",o,a));if(v=t,i==="column-major"){for(c=0;c<u;c++)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}for(c=u-1;c>=0;c--)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}KI.exports=Qjr});var n3=s((zFe,eR)=>{"use strict";var Kjr=rR();eR.exports=Kjr});var nR=s((WFe,aR)=>{"use strict";var rMr=lt(),tR=n3(),iR="throw";function eMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(c=r.shape,o=rMr(c),i=r.data,a=e.data,l=r.strides,p=e.strides,m=r.offset,y=e.offset,n=r.order,u=e.order,v=r.accessors[0],f=e.accessors[1],h=0;h<o;h++)g=tR(c,l,m,n,h,iR),d=tR(c,p,y,u,h,iR),f(a,d,t(v(i,g)))}aR.exports=eMr});var uR=s((XFe,sR)=>{"use strict";function tMr(r,e,t){e.data[e.offset]=t(r.data[r.offset])}sR.exports=tMr});var vR=s((JFe,oR)=>{"use strict";function iMr(r,e,t){var i,a,n,u,o,v,f,c;for(o=r.shape[0],n=r.strides[0],u=e.strides[0],v=r.offset,f=e.offset,i=r.data,a=e.data,c=0;c<o;c++)a[f]=t(i[v]),v+=n,f+=u}oR.exports=iMr});var cR=s((YFe,fR)=>{"use strict";function aMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(f=r.shape,p=r.strides,m=e.strides,r.order==="row-major"?(c=f[1],l=f[0],n=p[1],u=p[0]-c*p[1],o=m[1],v=m[0]-c*m[1]):(c=f[0],l=f[1],n=p[0],u=p[1]-c*p[0],o=m[0],v=m[1]-c*m[0]),y=r.offset,g=e.offset,i=r.data,a=e.data,h=0;h<l;h++){for(d=0;d<c;d++)a[g]=t(i[y]),y+=n,g+=o;y+=u,g+=v}}fR.exports=aMr});var pR=s((xFe,lR)=>{"use strict";function nMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b;for(l=r.shape,g=r.strides,d=e.strides,r.order==="row-major"?(p=l[2],m=l[1],y=l[0],n=g[2],u=g[1]-p*g[2],o=g[0]-m*g[1],v=d[2],f=d[1]-p*d[2],c=d[0]-m*d[1]):(p=l[0],m=l[1],y=l[2],n=g[0],u=g[1]-p*g[0],o=g[2]-m*g[1],v=d[0],f=d[1]-p*d[0],c=d[2]-m*d[1]),h=r.offset,q=e.offset,i=r.data,a=e.data,b=0;b<y;b++){for(A=0;A<m;A++){for(w=0;w<p;w++)a[q]=t(i[h]),h+=n,q+=v;h+=u,q+=f}h+=o,q+=c}}lR.exports=nMr});var gR=s((ZFe,dR)=>{"use strict";function sMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N;for(m=r.shape,q=r.strides,w=e.strides,r.order==="row-major"?(y=m[3],g=m[2],d=m[1],h=m[0],n=q[3],u=q[2]-y*q[3],o=q[1]-g*q[2],v=q[0]-d*q[1],f=w[3],c=w[2]-y*w[3],l=w[1]-g*w[2],p=w[0]-d*w[1]):(y=m[0],g=m[1],d=m[2],h=m[3],n=q[0],u=q[1]-y*q[0],o=q[2]-g*q[1],v=q[3]-d*q[2],f=w[0],c=w[1]-y*w[0],l=w[2]-g*w[1],p=w[3]-d*w[2]),A=r.offset,b=e.offset,i=r.data,a=e.data,N=0;N<h;N++){for(O=0;O<d;O++){for(S=0;S<g;S++){for(T=0;T<y;T++)a[b]=t(i[A]),A+=n,b+=f;A+=u,b+=c}A+=o,b+=l}A+=v,b+=p}}dR.exports=sMr});var yR=s(($Fe,mR)=>{"use strict";function uMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M;for(g=r.shape,b=r.strides,T=e.strides,r.order==="row-major"?(d=g[4],h=g[3],q=g[2],w=g[1],A=g[0],n=b[4],u=b[3]-d*b[4],o=b[2]-h*b[3],v=b[1]-q*b[2],f=b[0]-w*b[1],c=T[4],l=T[3]-d*T[4],p=T[2]-h*T[3],m=T[1]-q*T[2],y=T[0]-w*T[1]):(d=g[0],h=g[1],q=g[2],w=g[3],A=g[4],n=b[0],u=b[1]-d*b[0],o=b[2]-h*b[1],v=b[3]-q*b[2],f=b[4]-w*b[3],c=T[0],l=T[1]-d*T[0],p=T[2]-h*T[1],m=T[3]-q*T[2],y=T[4]-w*T[3]),S=r.offset,O=e.offset,i=r.data,a=e.data,M=0;M<A;M++){for(P=0;P<w;P++){for(E=0;E<q;E++){for(I=0;I<h;I++){for(N=0;N<d;N++)a[O]=t(i[S]),S+=n,O+=c;S+=u,O+=l}S+=o,O+=p}S+=v,O+=m}S+=f,O+=y}}mR.exports=uMr});var qR=s((QFe,hR)=>{"use strict";function oMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L;for(h=r.shape,O=r.strides,N=e.strides,r.order==="row-major"?(q=h[5],w=h[4],A=h[3],b=h[2],T=h[1],S=h[0],n=O[5],u=O[4]-q*O[5],o=O[3]-w*O[4],v=O[2]-A*O[3],f=O[1]-b*O[2],c=O[0]-T*O[1],l=N[5],p=N[4]-q*N[5],m=N[3]-w*N[4],y=N[2]-A*N[3],g=N[1]-b*N[2],d=N[0]-T*N[1]):(q=h[0],w=h[1],A=h[2],b=h[3],T=h[4],S=h[5],n=O[0],u=O[1]-q*O[0],o=O[2]-w*O[1],v=O[3]-A*O[2],f=O[4]-b*O[3],c=O[5]-T*O[4],l=N[0],p=N[1]-q*N[0],m=N[2]-w*N[1],y=N[3]-A*N[2],g=N[4]-b*N[3],d=N[5]-T*N[4]),I=r.offset,E=e.offset,i=r.data,a=e.data,L=0;L<S;L++){for(j=0;j<T;j++){for(F=0;F<b;F++){for(_=0;_<A;_++){for(M=0;M<w;M++){for(P=0;P<q;P++)a[E]=t(i[I]),I+=n,E+=l;I+=u,E+=p}I+=o,E+=m}I+=v,E+=y}I+=f,E+=g}I+=c,E+=d}}hR.exports=oMr});var wR=s((KFe,bR)=>{"use strict";function vMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C;for(w=r.shape,E=r.strides,P=e.strides,r.order==="row-major"?(A=w[6],b=w[5],T=w[4],S=w[3],O=w[2],N=w[1],I=w[0],n=E[6],u=E[5]-A*E[6],o=E[4]-b*E[5],v=E[3]-T*E[4],f=E[2]-S*E[3],c=E[1]-O*E[2],l=E[0]-N*E[1],p=P[6],m=P[5]-A*P[6],y=P[4]-b*P[5],g=P[3]-T*P[4],d=P[2]-S*P[3],h=P[1]-O*P[2],q=P[0]-N*P[1]):(A=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],I=w[6],n=E[0],u=E[1]-A*E[0],o=E[2]-b*E[1],v=E[3]-T*E[2],f=E[4]-S*E[3],c=E[5]-O*E[4],l=E[6]-N*E[5],p=P[0],m=P[1]-A*P[0],y=P[2]-b*P[1],g=P[3]-T*P[2],d=P[4]-S*P[3],h=P[5]-O*P[4],q=P[6]-N*P[5]),M=r.offset,_=e.offset,i=r.data,a=e.data,C=0;C<I;C++){for(R=0;R<N;R++){for(k=0;k<O;k++){for(U=0;U<S;U++){for(L=0;L<T;L++){for(j=0;j<b;j++){for(F=0;F<A;F++)a[_]=t(i[M]),M+=n,_+=p;M+=u,_+=m}M+=o,_+=y}M+=v,_+=g}M+=f,_+=d}M+=c,_+=h}M+=l,_+=q}}bR.exports=vMr});var NR=s((rje,ER)=>{"use strict";function fMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X;for(b=r.shape,_=r.strides,F=e.strides,r.order==="row-major"?(T=b[7],S=b[6],O=b[5],N=b[4],I=b[3],E=b[2],P=b[1],M=b[0],n=_[7],u=_[6]-T*_[7],o=_[5]-S*_[6],v=_[4]-O*_[5],f=_[3]-N*_[4],c=_[2]-I*_[3],l=_[1]-E*_[2],p=_[0]-P*_[1],m=F[7],y=F[6]-T*F[7],g=F[5]-S*F[6],d=F[4]-O*F[5],h=F[3]-N*F[4],q=F[2]-I*F[3],w=F[1]-E*F[2],A=F[0]-P*F[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],P=b[6],M=b[7],n=_[0],u=_[1]-T*_[0],o=_[2]-S*_[1],v=_[3]-O*_[2],f=_[4]-N*_[3],c=_[5]-I*_[4],l=_[6]-E*_[5],p=_[7]-P*_[6],m=F[0],y=F[1]-T*F[0],g=F[2]-S*F[1],d=F[3]-O*F[2],h=F[4]-N*F[3],q=F[5]-I*F[4],w=F[6]-E*F[5],A=F[7]-P*F[6]),j=r.offset,L=e.offset,i=r.data,a=e.data,X=0;X<M;X++){for(W=0;W<P;W++){for(G=0;G<E;G++){for(B=0;B<I;B++){for(C=0;C<N;C++){for(R=0;R<O;R++){for(k=0;k<S;k++){for(U=0;U<T;U++)a[L]=t(i[j]),j+=n,L+=m;j+=u,L+=y}j+=o,L+=g}j+=v,L+=d}j+=f,L+=h}j+=c,L+=q}j+=l,L+=w}j+=p,L+=A}}ER.exports=fMr});var OR=s((eje,SR)=>{"use strict";function cMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J;for(S=r.shape,L=r.strides,U=e.strides,r.order==="row-major"?(O=S[8],N=S[7],I=S[6],E=S[5],P=S[4],M=S[3],_=S[2],F=S[1],j=S[0],n=L[8],u=L[7]-O*L[8],o=L[6]-N*L[7],v=L[5]-I*L[6],f=L[4]-E*L[5],c=L[3]-P*L[4],l=L[2]-M*L[3],p=L[1]-_*L[2],m=L[0]-F*L[1],y=U[8],g=U[7]-O*U[8],d=U[6]-N*U[7],h=U[5]-I*U[6],q=U[4]-E*U[5],w=U[3]-P*U[4],A=U[2]-M*U[3],b=U[1]-_*U[2],T=U[0]-F*U[1]):(O=S[0],N=S[1],I=S[2],E=S[3],P=S[4],M=S[5],_=S[6],F=S[7],j=S[8],n=L[0],u=L[1]-O*L[0],o=L[2]-N*L[1],v=L[3]-I*L[2],f=L[4]-E*L[3],c=L[5]-P*L[4],l=L[6]-M*L[5],p=L[7]-_*L[6],m=L[8]-F*L[7],y=U[0],g=U[1]-O*U[0],d=U[2]-N*U[1],h=U[3]-I*U[2],q=U[4]-E*U[3],w=U[5]-P*U[4],A=U[6]-M*U[5],b=U[7]-_*U[6],T=U[8]-F*U[7]),k=r.offset,R=e.offset,i=r.data,a=e.data,J=0;J<j;J++){for(Q=0;Q<F;Q++){for(Z=0;Z<_;Z++){for(x=0;x<M;x++){for(X=0;X<P;X++){for(W=0;W<E;W++){for(G=0;G<I;G++){for(B=0;B<N;B++){for(C=0;C<O;C++)a[R]=t(i[k]),k+=n,R+=y;k+=u,R+=g}k+=o,R+=d}k+=v,R+=h}k+=f,R+=q}k+=c,R+=w}k+=l,R+=A}k+=p,R+=b}k+=m,R+=T}}SR.exports=cMr});var _R=s((tje,AR)=>{"use strict";function lMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur;for(N=r.shape,R=r.strides,C=e.strides,r.order==="row-major"?(I=N[9],E=N[8],P=N[7],M=N[6],_=N[5],F=N[4],j=N[3],L=N[2],U=N[1],k=N[0],n=R[9],u=R[8]-I*R[9],o=R[7]-E*R[8],v=R[6]-P*R[7],f=R[5]-M*R[6],c=R[4]-_*R[5],l=R[3]-F*R[4],p=R[2]-j*R[3],m=R[1]-L*R[2],y=R[0]-U*R[1],g=C[9],d=C[8]-I*C[9],h=C[7]-E*C[8],q=C[6]-P*C[7],w=C[5]-M*C[6],A=C[4]-_*C[5],b=C[3]-F*C[4],T=C[2]-j*C[3],S=C[1]-L*C[2],O=C[0]-U*C[1]):(I=N[0],E=N[1],P=N[2],M=N[3],_=N[4],F=N[5],j=N[6],L=N[7],U=N[8],k=N[9],n=R[0],u=R[1]-I*R[0],o=R[2]-E*R[1],v=R[3]-P*R[2],f=R[4]-M*R[3],c=R[5]-_*R[4],l=R[6]-F*R[5],p=R[7]-j*R[6],m=R[8]-L*R[7],y=R[9]-U*R[8],g=C[0],d=C[1]-I*C[0],h=C[2]-E*C[1],q=C[3]-P*C[2],w=C[4]-M*C[3],A=C[5]-_*C[4],b=C[6]-F*C[5],T=C[7]-j*C[6],S=C[8]-L*C[7],O=C[9]-U*C[8]),B=r.offset,G=e.offset,i=r.data,a=e.data,ur=0;ur<k;ur++){for(er=0;er<U;er++){for($=0;$<L;$++){for(Y=0;Y<j;Y++){for(J=0;J<F;J++){for(Q=0;Q<_;Q++){for(Z=0;Z<M;Z++){for(x=0;x<P;x++){for(X=0;X<E;X++){for(W=0;W<I;W++)a[G]=t(i[B]),B+=n,G+=g;B+=u,G+=d}B+=o,G+=h}B+=v,G+=q}B+=f,G+=w}B+=c,G+=A}B+=l,G+=b}B+=p,G+=T}B+=m,G+=S}B+=y,G+=O}}AR.exports=lMr});var LR=s((ije,RR)=>{"use strict";var pMr=lt(),TR=n3(),IR="throw";function dMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g;for(v=r.shape,o=pMr(v),i=r.data,a=e.data,f=r.strides,c=e.strides,l=r.offset,p=e.offset,n=r.order,u=e.order,g=0;g<o;g++)m=TR(v,f,l,n,g,IR),y=TR(v,c,p,u,g,IR),a[y]=t(i[m])}RR.exports=dMr});var kR=s((aje,BR)=>{"use strict";var PR=e3(),FR=cs(),jR=OT(),gMr=ZT(),mMr=QT(),yMr=rI(),hMr=tI(),qMr=aI(),bMr=sI(),wMr=oI(),EMr=fI(),NMr=lI(),SMr=dI(),OMr=mI(),AMr=hI(),_Mr=bI(),TMr=EI(),IMr=SI(),RMr=AI(),LMr=TI(),PMr=RI(),FMr=PI(),jMr=jI(),MMr=BI(),BMr=CI(),kMr=UI(),CMr=DI(),VMr=zI(),UMr=XI(),GMr=YI(),DMr=ZI(),HMr=QI(),zMr=nR(),WMr=uR(),XMr=vR(),JMr=cR(),YMr=pR(),xMr=gR(),ZMr=yR(),$Mr=qR(),QMr=wR(),KMr=NR(),rBr=OR(),eBr=_R(),tBr=LR(),Ja=[WMr,XMr,JMr,YMr,xMr,ZMr,$Mr,QMr,KMr,rBr,eBr],Zn=[FMr,jMr,MMr,BMr,kMr,CMr,VMr,UMr,GMr,DMr,HMr],iBr=[SMr,OMr,AMr,_Mr,TMr,IMr,RMr,LMr,PMr],aBr=[gMr,mMr,yMr,hMr,qMr,bMr,wMr,EMr,NMr],MR=Ja.length-1;function nBr(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(g=jR(r[0]),d=jR(r[1]),n=g.shape,u=d.shape,t=n.length,t!==u.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+t+". ndims(y) == "+u.length+".");if(t===0)return g.accessorProtocol||d.accessorProtocol?Zn[t](g,d,e):Ja[t](g,d,e);for(f=1,y=0,q=0;q<t;q++){if(h=n[q],h!==u[q])throw new Error("invalid arguments. Arrays must have the same shape.");f*=h,h===1&&(y+=1)}if(f!==0){if(t===1)return g.accessorProtocol||d.accessorProtocol?Zn[t](g,d,e):Ja[t](g,d,e);if(c=g.strides,l=d.strides,y===t-1){for(q=0;q<t&&n[q]===1;q++);return g.shape=[n[q]],d.shape=g.shape,g.strides=[c[q]],d.strides=[l[q]],g.accessorProtocol||d.accessorProtocol?Zn[1](g,d,e):Ja[1](g,d,e)}if(o=PR(c),v=PR(l),o!==0&&v!==0&&g.order===d.order){if(i=FR(n,c,g.offset),a=FR(u,l,d.offset),f===i[1]-i[0]+1&&f===a[1]-a[0]+1)return o===1?p=i[0]:p=i[1],v===1?m=a[0]:m=a[1],g.shape=[f],d.shape=g.shape,g.strides=[o],d.strides=[v],g.offset=p,d.offset=m,g.accessorProtocol||d.accessorProtocol?Zn[1](g,d,e):Ja[1](g,d,e);if(t<=MR)return g.accessorProtocol||d.accessorProtocol?Zn[t](g,d,e):Ja[t](g,d,e)}if(t<=MR)return g.accessorProtocol||d.accessorProtocol?aBr[t-2](g,d,e):iBr[t-2](g,d,e);if(g.accessorProtocol||d.accessorProtocol)return zMr(g,d,e);tBr(g,d,e)}}BR.exports=nBr});var VR=s((nje,CR)=>{"use strict";var sBr=kR();CR.exports=sBr});var GR=s((sje,UR)=>{"use strict";var uBr=VR(),oBr=V(),vBr=Ps();function fBr(r,e){var t,i,a,n,u;for(t={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},i=r[0],a=r[1],u=2;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")t[n]=r[u+1];else throw new Error(oBr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return uBr([i,a],vBr(e,t)),a}UR.exports=fBr});var HR=s((uje,DR)=>{"use strict";var cBr=GR();DR.exports=cBr});var WR=s((oje,zR)=>{"use strict";var lBr=Qr(),pBr=HR();function dBr(r){return lBr(r,"unary",pBr),r}zR.exports=dBr});var JR=s((vje,XR)=>{"use strict";var St=Qr(),gBr=J_(),mBr=Ps(),yBr=$v(),hBr=r3(),qBr=iT(),bBr=uT(),wBr=cT(),EBr=gT(),NBr=WR();function SBr(r){return St(r,"binary",gBr),St(r,"d_d",mBr),St(r,"dd_d",yBr),St(r,"ddd_d",hBr),St(r,"dddd_d",qBr),St(r,"ddddd_d",bBr),St(r,"ternary",wBr),St(r,"unary",EBr),St(r,"ndarray",NBr({})),r}XR.exports=SBr});var xR=s((fje,YR)=>{"use strict";function OBr(r){return r*r}YR.exports=OBr});var Ms=s((cje,ZR)=>{"use strict";var ABr=xR();ZR.exports=ABr});var Bs=s((lje,$R)=>{"use strict";var _Br=.7853981633974483;$R.exports=_Br});var KR=s((pje,QR)=>{"use strict";function TBr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}QR.exports=TBr});var eL=s((dje,rL)=>{"use strict";function IBr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}rL.exports=IBr});var aL=s((gje,iL)=>{"use strict";var RBr=z(),LBr=Rr(),tL=Bs(),PBr=KR(),FBr=eL(),jBr=6123233995736766e-32;function MBr(r){var e,t,i,a,n;if(RBr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,a=t*FBr(t),t=LBr(t+t),n=tL-t,t=t*a-jBr,n-=t,n+=tL;else{if(i<1e-8)return r;t=i*i,n=t*PBr(t),n=i*n+i}return e?-n:n}iL.exports=MBr});var ua=s((mje,nL)=>{"use strict";var BBr=aL();nL.exports=BBr});var vL=s((yje,oL)=>{"use strict";var kBr=z(),sL=ua(),CBr=Rr(),uL=Bs(),VBr=6123233995736766e-32;function UBr(r){var e;return kBr(r)?NaN:r<-1||r>1?NaN:r>.5?2*sL(CBr(.5-.5*r)):(e=uL-sL(r),e+=VBr,e+=uL,e)}oL.exports=UBr});var $n=s((hje,fL)=>{"use strict";var GBr=vL();fL.exports=GBr});var lL=s((qje,cL)=>{"use strict";function DBr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}cL.exports=DBr});var yL=s((bje,mL)=>{"use strict";var HBr=z(),pL=ae(),dL=Et(),zBr=pr(),WBr=Ir(),gL=ct(),XBr=lL(),s3=.6931471803691238,u3=19082149292705877e-26,JBr=.41421356237309503,YBr=-.2928932188134525,xBr=1862645149230957e-24,ZBr=5551115123125783e-32,$Br=9007199254740992,QBr=.6666666666666666;function KBr(r){var e,t,i,a,n,u,o,v,f,c;if(r<-1||HBr(r))return NaN;if(r===-1)return WBr;if(r===zBr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<JBr){if(i<xBr)return i<ZBr?r:r-r*r*.5;r>YBr&&(c=0,a=r,t=1)}return c!==0&&(i<$Br?(f=1+r,t=pL(f),c=(t>>20)-gL,c>0?n=1-(f-r):n=r-(f-1),n/=f):(f=r,t=pL(f),c=(t>>20)-gL,n=0),t&=1048575,t<434334?f=dL(f,t|1072693248):(c+=1,f=dL(f,t|1071644672),t=1048576-t>>2),a=f-1),e=.5*a*a,t===0?a===0?(n+=c*u3,c*s3+n):(v=e*(1-QBr*a),c*s3-(v-(c*u3+n)-a)):(u=a/(2+a),o=u*u,v=o*XBr(o),c===0?a-(e-u*(e+v)):c*s3-(e-(u*(e+v)+(c*u3+n))-a))}mL.exports=KBr});var di=s((wje,hL)=>{"use strict";var rkr=yL();hL.exports=rkr});var bL=s((Eje,qL)=>{"use strict";function ekr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}qL.exports=ekr});var EL=s((Nje,wL)=>{"use strict";function tkr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}wL.exports=tkr});var AL=s((Sje,OL)=>{"use strict";var NL=ae(),ikr=Et(),akr=z(),nkr=ct(),skr=Ir(),ukr=bL(),okr=EL(),ks=.6931471803691238,Cs=19082149292705877e-26,vkr=0x40000000000000,fkr=.3333333333333333,SL=1048575,ckr=2146435072,lkr=1048576,pkr=1072693248;function dkr(r){var e,t,i,a,n,u,o,v,f,c,l,p;return r===0?skr:akr(r)||r<0?NaN:(t=NL(r),n=0,t<lkr&&(n-=54,r*=vkr,t=NL(r)),t>=ckr?r+r:(n+=(t>>20)-nkr|0,t&=SL,v=t+614244&1048576|0,r=ikr(r,t|v^pkr),n+=v>>20|0,o=r-1,(SL&2+t)<3?o===0?n===0?0:n*ks+n*Cs:(u=o*o*(.5-fkr*o),n===0?o-u:n*ks-(u-n*Cs-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,a=l*ukr(l),i=p*okr(l),v|=f,u=i+a,v>0?(e=.5*o*o,n===0?o-(e-c*(e+u)):n*ks-(e-(c*(e+u)+n*Cs)-o)):n===0?o-c*(o-u):n*ks-(c*(o-u)-n*Cs-o))))}OL.exports=dkr});var wr=s((Oje,_L)=>{"use strict";var gkr=AL();_L.exports=gkr});var LL=s((Aje,RL)=>{"use strict";var mkr=z(),ykr=di(),TL=Rr(),hkr=zn(),IL=wr(),qkr=1<<28;function bkr(r){var e;return mkr(r)||r<1?NaN:r===1?0:r>=qkr?IL(r)+hkr:r>2?IL(2*r-1/(r+TL(r*r-1))):(e=r-1,ykr(e+TL(2*e+e*e)))}RL.exports=bkr});var FL=s((_je,PL)=>{"use strict";var wkr=LL();PL.exports=wkr});var Ya=s((Tje,jL)=>{"use strict";var Ekr=1.5707963267948966;jL.exports=Ekr});var BL=s((Ije,ML)=>{"use strict";function Nkr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}ML.exports=Nkr});var CL=s((Rje,kL)=>{"use strict";function Skr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}kL.exports=Skr});var GL=s((Lje,UL)=>{"use strict";var Okr=z(),Akr=pr(),o3=Ya(),_kr=Bs(),Tkr=Ir(),Ikr=BL(),Rkr=CL(),VL=6123233995736766e-32,Lkr=2.414213562373095;function Pkr(r){var e,t,i,a;return Okr(r)||r===0?r:r===Akr?o3:r===Tkr?-o3:(r<0&&(t=!0,r=-r),e=0,r>Lkr?(i=o3,e=1,r=-(1/r)):r<=.66?i=0:(i=_kr,e=2,r=(r-1)/(r+1)),a=r*r,a=a*Ikr(a)/Rkr(a),a=r*a+r,e===2?a+=.5*VL:e===1&&(a+=VL),i+=a,t?-i:i)}UL.exports=Pkr});var Vs=s((Pje,DL)=>{"use strict";var Fkr=GL();DL.exports=Fkr});var zL=s((Fje,HL)=>{"use strict";var jkr=Vs();function Mkr(r){return jkr(1/r)}HL.exports=Mkr});var XL=s((jje,WL)=>{"use strict";var Bkr=zL();WL.exports=Bkr});var YL=s((Mje,JL)=>{"use strict";var kkr=ua();function Ckr(r){return kkr(1+r)}JL.exports=Ckr});var ZL=s((Bje,xL)=>{"use strict";var Vkr=YL();xL.exports=Vkr});var QL=s((kje,$L)=>{"use strict";var Ukr=ua();function Gkr(r){return Ukr(1-r)}$L.exports=Gkr});var rP=s((Cje,KL)=>{"use strict";var Dkr=QL();KL.exports=Dkr});var tP=s((Vje,eP)=>{"use strict";var Hkr=ua();function zkr(r){return Hkr(1/r)}eP.exports=zkr});var aP=s((Uje,iP)=>{"use strict";var Wkr=tP();iP.exports=Wkr});var oP=s((Gje,uP)=>{"use strict";var Xkr=_e(),Jkr=z(),Ykr=di(),nP=Rr(),xkr=zn(),sP=wr(),Zkr=1/(1<<28),$kr=1<<28;function Qkr(r){var e,t,i;return Jkr(r)||Xkr(r)?r:(r<0&&(r=-r,e=!0),r<Zkr?i=r:r>$kr?i=sP(r)+xkr:r>2?i=sP(2*r+1/(nP(r*r+1)+r)):(t=r*r,i=Ykr(r+t/(1+nP(1+t)))),e?-i:i)}uP.exports=Qkr});var v3=s((Dje,vP)=>{"use strict";var Kkr=oP();vP.exports=Kkr});var cP=s((Hje,fP)=>{"use strict";var rCr=v3();function eCr(r){return rCr(1/r)}fP.exports=eCr});var pP=s((zje,lP)=>{"use strict";var tCr=cP();lP.exports=tCr});var gP=s((Wje,dP)=>{"use strict";var iCr=$n(),aCr=Rr();function nCr(r){return 2*iCr(aCr(r))}dP.exports=nCr});var yP=s((Xje,mP)=>{"use strict";var sCr=gP();mP.exports=sCr});var qP=s((Jje,hP)=>{"use strict";var uCr=ua(),oCr=Rr();function vCr(r){return 2*uCr(oCr(r))}hP.exports=vCr});var wP=s((Yje,bP)=>{"use strict";var fCr=qP();bP.exports=fCr});var SP=s((xje,NP)=>{"use strict";var cCr=z(),EP=di(),lCr=pr(),pCr=Ir(),dCr=1/(1<<28);function gCr(r){var e,t;return cCr(r)||r<-1||r>1?NaN:r===1?lCr:r===-1?pCr:(r<0&&(e=!0,r=-r),r<dCr?e?-r:r:(r<.5?(t=r+r,t=.5*EP(t+t*r/(1-r))):t=.5*EP((r+r)/(1-r)),e?-t:t))}NP.exports=gCr});var AP=s((Zje,OP)=>{"use strict";var mCr=SP();OP.exports=mCr});var TP=s(($je,_P)=>{"use strict";var yCr=$n();function hCr(r){return yCr(1+r)}_P.exports=hCr});var RP=s((Qje,IP)=>{"use strict";var qCr=TP();IP.exports=qCr});var PP=s((Kje,LP)=>{"use strict";var bCr=$n();function wCr(r){return bCr(1-r)}LP.exports=wCr});var jP=s((rMe,FP)=>{"use strict";var ECr=PP();FP.exports=ECr});var BP=s((eMe,MP)=>{"use strict";var NCr=Ur();function SCr(r){return NCr(r)===r&&r>=0}MP.exports=SCr});var f3=s((tMe,kP)=>{"use strict";var OCr=BP();kP.exports=OCr});var CP=s((iMe,ACr)=>{ACr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var UP=s((aMe,VP)=>{"use strict";var _Cr=f3(),TCr=z(),ICr=ws(),RCr=Ir(),LCr=pr(),PCr=CP(),FCr=258;function jCr(r){return TCr(r)||!_Cr(r)?NaN:ICr(r)?0:r>FCr?r/2&1?LCr:RCr:PCr[r/2]}VP.exports=jCr});var DP=s((nMe,GP)=>{"use strict";var MCr=UP();GP.exports=MCr});var zP=s((sMe,HP)=>{"use strict";var BCr=xe(),c3;BCr===!0?c3=0:c3=1;HP.exports=c3});var JP=s((uMe,XP)=>{"use strict";var kCr=me(),CCr=ge(),VCr=zP(),WP=new CCr(1),UCr=new kCr(WP.buffer);function GCr(r){return WP[0]=r,UCr[VCr]}XP.exports=GCr});var xP=s((oMe,YP)=>{"use strict";var DCr=JP();YP.exports=DCr});var rF=s((vMe,KP)=>{"use strict";var HCr=Ur(),Us=Xa(),Hs=si(),$P=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],zCr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],l3=16777216,p3=5960464477539063e-23,Gs=Hs(20),ZP=Hs(20),Ds=Hs(20),he=Hs(20);function QP(r,e,t,i,a,n,u,o,v){var f,c,l,p,m,y,g,d,h;for(p=n,h=i[t],d=t,m=0;d>0;m++)c=p3*h|0,he[m]=h-l3*c|0,h=i[d-1]+c,d-=1;if(h=Us(h,a),h-=8*HCr(h*.125),g=h|0,h-=g,l=0,a>0?(m=he[t-1]>>24-a,g+=m,he[t-1]-=m<<24-a,l=he[t-1]>>23-a):a===0?l=he[t-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,m=0;m<t;m++)d=he[m],f===0?d!==0&&(f=1,he[m]=16777216-d):he[m]=16777215-d;if(a>0)switch(a){case 1:he[t-1]&=8388607;break;case 2:he[t-1]&=4194303;break}l===2&&(h=1-h,f!==0&&(h-=Us(1,a)))}if(h===0){for(d=0,m=t-1;m>=n;m--)d|=he[m];if(d===0){for(y=1;he[n-y]===0;y++);for(m=t+1;m<=t+y;m++){for(v[o+m]=$P[u+m],c=0,d=0;d<=o;d++)c+=r[d]*v[o+(m-d)];i[m]=c}return t+=y,QP(r,e,t,i,a,n,u,o,v)}}if(h===0)for(t-=1,a-=24;he[t]===0;)t-=1,a-=24;else h=Us(h,-a),h>=l3?(c=p3*h|0,he[t]=h-l3*c|0,t+=1,a+=24,he[t]=c):he[t]=h|0;for(c=Us(1,a),m=t;m>=0;m--)i[m]=c*he[m],c*=p3;for(m=t;m>=0;m--){for(c=0,y=0;y<=p&&y<=t-m;y++)c+=zCr[y]*i[m+y];Ds[t-m]=c}for(c=0,m=t;m>=0;m--)c+=Ds[m];for(l===0?e[0]=c:e[0]=-c,c=Ds[0]-c,m=1;m<=t;m++)c+=Ds[m];return l===0?e[1]=c:e[1]=-c,g&7}function WCr(r,e,t,i){var a,n,u,o,v,f,c,l,p;for(n=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+n,c=0;c<=p;c++)l<0?Gs[c]=0:Gs[c]=$P[l],l+=1;for(c=0;c<=n;c++){for(a=0,l=0;l<=o;l++)a+=r[l]*Gs[o+(c-l)];ZP[c]=a}return v=n,QP(r,e,v,ZP,f,n,u,o,Gs)}KP.exports=WCr});var tF=s((fMe,eF)=>{"use strict";var XCr=Math.round;eF.exports=XCr});var zs=s((cMe,iF)=>{"use strict";var JCr=tF();iF.exports=JCr});var uF=s((lMe,sF)=>{"use strict";var YCr=zs(),aF=ae(),xCr=.6366197723675814,ZCr=1.5707963267341256,$Cr=6077100506506192e-26,QCr=6077100506303966e-26,KCr=20222662487959506e-37,rVr=20222662487111665e-37,eVr=84784276603689e-45,nF=2047;function tVr(r,e,t){var i,a,n,u,o,v,f;return a=YCr(r*xCr),u=r-a*ZCr,o=a*$Cr,f=e>>20|0,t[0]=u-o,i=aF(t[0]),v=f-(i>>20&nF),v>16&&(n=u,o=a*QCr,u=n-o,o=a*KCr-(n-u-o),t[0]=u-o,i=aF(t[0]),v=f-(i>>20&nF),v>49&&(n=u,o=a*rVr,u=n-o,o=a*eVr-(n-u-o),t[0]=u-o)),t[1]=u-t[0]-o,a}sF.exports=tVr});var vF=s((pMe,oF)=>{"use strict";var iVr=ft(),aVr=Hn(),nVr=Ts(),sVr=ae(),uVr=xP(),oVr=Wa(),vVr=rF(),Ws=uF(),fVr=0,cVr=16777216,gi=1.5707963267341256,oa=6077100506506192e-26,Xs=2*oa,Js=3*oa,Ys=4*oa,lVr=598523,pVr=1072243195,dVr=1073928572,gVr=1074752122,mVr=1074977148,yVr=1075183036,hVr=1075388923,qVr=1075594811,bVr=1094263291,Qn=[0,0,0],Kn=[0,0];function wVr(r,e){var t,i,a,n,u,o,v,f;if(a=sVr(r),n=a&iVr|0,n<=pVr)return e[0]=r,e[1]=0,0;if(n<=gVr)return(n&nVr)===lVr?Ws(r,n,e):n<=dVr?r>0?(f=r-gi,e[0]=f-oa,e[1]=f-e[0]-oa,1):(f=r+gi,e[0]=f+oa,e[1]=f-e[0]+oa,-1):r>0?(f=r-2*gi,e[0]=f-Xs,e[1]=f-e[0]-Xs,2):(f=r+2*gi,e[0]=f+Xs,e[1]=f-e[0]+Xs,-2);if(n<=qVr)return n<=yVr?n===mVr?Ws(r,n,e):r>0?(f=r-3*gi,e[0]=f-Js,e[1]=f-e[0]-Js,3):(f=r+3*gi,e[0]=f+Js,e[1]=f-e[0]+Js,-3):n===hVr?Ws(r,n,e):r>0?(f=r-4*gi,e[0]=f-Ys,e[1]=f-e[0]-Ys,4):(f=r+4*gi,e[0]=f+Ys,e[1]=f-e[0]+Ys,-4);if(n<bVr)return Ws(r,n,e);if(n>=aVr)return e[0]=NaN,e[1]=NaN,0;for(t=uVr(r),i=(n>>20)-1046,f=oVr(n-(i<<20|0),t),o=0;o<2;o++)Qn[o]=f|0,f=(f-Qn[o])*cVr;for(Qn[2]=f,u=3;Qn[u-1]===fVr;)u-=1;return v=vVr(Qn,Kn,i,u,1),r<0?(e[0]=-Kn[0],e[1]=-Kn[1],-v):(e[0]=Kn[0],e[1]=Kn[1],v)}oF.exports=wVr});var r0=s((dMe,fF)=>{"use strict";var EVr=vF();fF.exports=EVr});var pF=s((gMe,lF)=>{"use strict";var cF=-.16666666666666632,NVr=.00833333333332249,SVr=-.0001984126982985795,OVr=27557313707070068e-22,AVr=-25050760253406863e-24,_Vr=158969099521155e-24,TVr=.0416666666666666,IVr=-.001388888888887411,RVr=2480158728947673e-20,LVr=-27557314351390663e-23,PVr=2087572321298175e-24,FVr=-11359647557788195e-27;function jVr(r,e,t,i,a){var n,u,o,v,f;return f=r*r,v=f*f,u=NVr+f*(SVr+f*OVr)+f*v*(AVr+f*_Vr),o=f*r,e===0?t[a]=r+o*(cF+f*u):t[a]=r-(f*(.5*e-o*u)-e-o*cF),u=f*(TVr+f*(IVr+f*RVr)),u+=v*v*(LVr+f*(PVr+f*FVr)),n=.5*f,v=1-n,t[a+i]=v+(1-v-n+(f*u-r*e)),t}lF.exports=jVr});var g3=s((mMe,gF)=>{"use strict";var MVr=ft(),BVr=Hn(),kVr=ae(),CVr=r0(),dF=pF(),VVr=1072243195,UVr=1044381696,d3=[0,0];function GVr(r,e,t,i){var a,n;if(a=kVr(r),a&=MVr,a<=VVr)return a<UVr&&(r|0)===0&&(e[i]=r,e[i+t]=0),dF(r,0,e,t,i);if(a>=BVr)return e[i]=NaN,e[i+t]=NaN,e;switch(n=CVr(r,d3),dF(d3[0],d3[1],e,t,i),n&3){case 1:return a=e[i+t],e[i+t]=-e[i],e[i]=a,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return a=-e[i+t],e[i+t]=e[i],e[i]=a,e;default:return e}}gF.exports=GVr});var yF=s((yMe,mF)=>{"use strict";var DVr=g3();function HVr(r){return DVr(r,[0,0],1,0)}mF.exports=HVr});var e0=s((hMe,qF)=>{"use strict";var zVr=D(),hF=yF(),WVr=g3();zVr(hF,"assign",WVr);qF.exports=hF});var wF=s((qMe,bF)=>{"use strict";function XVr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}bF.exports=XVr});var NF=s((bMe,EF)=>{"use strict";function JVr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}EF.exports=JVr});var OF=s((wMe,SF)=>{"use strict";function YVr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}SF.exports=YVr});var _F=s((EMe,AF)=>{"use strict";function xVr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}AF.exports=xVr});var IF=s((NMe,TF)=>{"use strict";var ZVr=Rr(),$Vr=e0().assign,QVr=pr(),KVr=wF(),rUr=NF(),eUr=OF(),tUr=_F(),iUr=.5641895835477563,aUr=2.404825557695773,nUr=5.520078110286311,sUr=616,uUr=-.0014244423042272315,oUr=1413,vUr=.0005468602863106496,t0=[0,0];function fUr(r){var e,t,i,a,n,u;return r<0&&(r=-r),r===QVr?0:r===0?1:r<=4?(n=r*r,a=KVr(n),u=(r+aUr)*(r-sUr/256-uUr),u*a):r<=8?(n=1-r*r/64,a=rUr(n),u=(r+nUr)*(r-oUr/256-vUr),u*a):(n=8/r,i=n*n,e=eUr(i),t=tUr(i),u=iUr/ZVr(r),$Vr(r,t0,1,0),u*(e*(t0[1]+t0[0])-n*t*(t0[0]-t0[1])))}TF.exports=fUr});var m3=s((SMe,RF)=>{"use strict";var cUr=IF();RF.exports=cUr});var xs=s((OMe,LF)=>{"use strict";var lUr=1.772453850905516;LF.exports=lUr});var FF=s((AMe,PF)=>{"use strict";function pUr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}PF.exports=pUr});var MF=s((_Me,jF)=>{"use strict";function dUr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}jF.exports=dUr});var kF=s((TMe,BF)=>{"use strict";function gUr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}BF.exports=gUr});var VF=s((IMe,CF)=>{"use strict";function mUr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}CF.exports=mUr});var GF=s((RMe,UF)=>{"use strict";var yUr=Rr(),hUr=Dr(),qUr=e0().assign,bUr=pr(),wUr=xs(),EUr=FF(),NUr=MF(),SUr=kF(),OUr=VF(),AUr=3.8317059702075125,_Ur=7.015586669815619,TUr=981,IUr=-.0003252797924876844,RUr=1796,LUr=-38330184381246464e-21,i0=[0,0];function PUr(r){var e,t,i,a,n,u,o,v;return v=hUr(r),r===0||v===bUr?0:(v<=4?(u=r*r,n=EUr(u),o=v*(v+AUr)*(v-TUr/256-IUr),e=o*n):v<=8?(u=r*r,n=NUr(u),o=v*(v+_Ur)*(v-RUr/256-LUr),e=o*n):(u=8/v,a=u*u,t=SUr(a),i=OUr(a),o=1/(yUr(v)*wUr),qUr(v,i0,1,0),e=o*(t*(i0[0]-i0[1])+u*i*(i0[0]+i0[1]))),r<0&&(e*=-1),e)}UF.exports=PUr});var y3=s((LMe,DF)=>{"use strict";var FUr=GF();DF.exports=FUr});var we=s((PMe,HF)=>{"use strict";var jUr=3.141592653589793;HF.exports=jUr});var WF=s((FMe,zF)=>{"use strict";function MUr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}zF.exports=MUr});var JF=s((jMe,XF)=>{"use strict";function BUr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}XF.exports=BUr});var xF=s((MMe,YF)=>{"use strict";function kUr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}YF.exports=kUr});var $F=s((BMe,ZF)=>{"use strict";function CUr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}ZF.exports=CUr});var KF=s((kMe,QF)=>{"use strict";function VUr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}QF.exports=VUr});var aj=s((CMe,ij)=>{"use strict";var h3=wr(),UUr=Rr(),GUr=we(),DUr=xs(),HUr=Ir(),zUr=pr(),WUr=e0().assign,q3=m3(),XUr=WF(),JUr=JF(),YUr=xF(),xUr=$F(),ZUr=KF(),$Ur=1/DUr,b3=2/GUr,rj=.8935769662791675,ej=3.957678419314858,tj=7.086051060301773,QUr=228,KUr=.0029519662791675214,rGr=1013,eGr=.0006471693148578684,tGr=1814,iGr=.00011356030177269763,a0=[0,0];function aGr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?HUr:r===zUr?0:r<=3?(n=r*r,u=h3(r/rj)*q3(r)*b3,a=XUr(n),o=(r+rj)*(r-QUr/256-KUr),u+o*a):r<=5.5?(n=r*r,u=h3(r/ej)*q3(r)*b3,a=JUr(n),o=(r+ej)*(r-rGr/256-eGr),u+o*a):r<=8?(n=r*r,u=h3(r/tj)*q3(r)*b3,a=YUr(n),o=(r+tj)*(r-tGr/256-iGr),u+o*a):(n=8/r,i=n*n,e=xUr(i),t=ZUr(i),o=$Ur/UUr(r),WUr(r,a0,1,0),o*(e*(a0[0]-a0[1])+n*t*(a0[1]+a0[0])))}ij.exports=aGr});var sj=s((VMe,nj)=>{"use strict";var nGr=aj();nj.exports=nGr});var oj=s((UMe,uj)=>{"use strict";function sGr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}uj.exports=sGr});var fj=s((GMe,vj)=>{"use strict";function uGr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}vj.exports=uGr});var lj=s((DMe,cj)=>{"use strict";function oGr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}cj.exports=oGr});var dj=s((HMe,pj)=>{"use strict";function vGr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}pj.exports=vGr});var wj=s((zMe,bj)=>{"use strict";var gj=wr(),fGr=Rr(),cGr=we(),lGr=xs(),pGr=Ir(),dGr=pr(),gGr=e0().assign,mj=y3(),mGr=oj(),yGr=fj(),hGr=lj(),qGr=dj(),bGr=1/lGr,yj=2/cGr,hj=2.197141326031017,qj=5.429681040794135,wGr=562,EGr=.001828826031017035,NGr=1390,SGr=-6459205864867228e-21,n0=[0,0];function OGr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?pGr:r===dGr?0:r<=4?(n=r*r,u=gj(r/hj)*mj(r)*yj,a=mGr(n),o=(r+hj)*(r-wGr/256-EGr)/r,u+o*a):r<=8?(n=r*r,u=gj(r/qj)*mj(r)*yj,a=yGr(n),o=(r+qj)*(r-NGr/256-SGr)/r,u+o*a):(n=8/r,i=n*n,e=hGr(i),t=qGr(i),o=bGr/fGr(r),gGr(r,n0,1,0),o*(n*t*(n0[0]-n0[1])-e*(n0[0]+n0[1])))}bj.exports=OGr});var Nj=s((WMe,Ej)=>{"use strict";var AGr=wj();Ej.exports=AGr});var Oj=s((XMe,Sj)=>{"use strict";function _Gr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}Sj.exports=_Gr});var _j=s((JMe,Aj)=>{"use strict";function TGr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}Aj.exports=TGr});var Ij=s((YMe,Tj)=>{"use strict";var IGr=Oj(),RGr=_j();function LGr(r,e){var t,i,a,n;return n=r*r,a=n*n,i=n*IGr(n),i+=a*a*RGr(n),t=.5*n,a=1-t,a+(1-a-t+(n*i-r*e))}Tj.exports=LGr});var w3=s((xMe,Rj)=>{"use strict";var PGr=Ij();Rj.exports=PGr});var Fj=s((ZMe,Pj)=>{"use strict";var Lj=-.16666666666666632,FGr=.00833333333332249,jGr=-.0001984126982985795,MGr=27557313707070068e-22,BGr=-25050760253406863e-24,kGr=158969099521155e-24;function CGr(r,e){var t,i,a,n;return n=r*r,a=n*n,t=FGr+n*(jGr+n*MGr)+n*a*(BGr+n*kGr),i=n*r,e===0?r+i*(Lj+n*t):r-(n*(.5*e-i*t)-e-i*Lj)}Pj.exports=CGr});var E3=s(($Me,jj)=>{"use strict";var VGr=Fj();jj.exports=VGr});var kj=s((QMe,Bj)=>{"use strict";var UGr=ae(),N3=w3(),Mj=E3(),GGr=r0(),Ot=[0,0],DGr=2147483647,HGr=1072243195,zGr=1044381696,WGr=2146435072;function XGr(r){var e,t;if(e=UGr(r),e&=DGr,e<=HGr)return e<zGr?1:N3(r,0);if(e>=WGr)return NaN;switch(t=GGr(r,Ot),t&3){case 0:return N3(Ot[0],Ot[1]);case 1:return-Mj(Ot[0],Ot[1]);case 2:return-N3(Ot[0],Ot[1]);default:return Mj(Ot[0],Ot[1])}}Bj.exports=XGr});var At=s((KMe,Cj)=>{"use strict";var JGr=kj();Cj.exports=JGr});var Gj=s((rBe,Uj)=>{"use strict";var YGr=ft(),xGr=Hn(),ZGr=ae(),Vj=w3(),S3=E3(),$Gr=r0(),QGr=1072243195,KGr=1045430272,_t=[0,0];function rDr(r){var e,t;if(e=ZGr(r),e&=YGr,e<=QGr)return e<KGr?r:S3(r,0);if(e>=xGr)return NaN;switch(t=$Gr(r,_t),t&3){case 0:return S3(_t[0],_t[1]);case 1:return Vj(_t[0],_t[1]);case 2:return-S3(_t[0],_t[1]);default:return-Vj(_t[0],_t[1])}}Uj.exports=rDr});var pt=s((eBe,Dj)=>{"use strict";var eDr=Gj();Dj.exports=eDr});var Wj=s((tBe,zj)=>{"use strict";var tDr=z(),iDr=_e(),aDr=Dr(),Hj=At(),nDr=pt(),sDr=Ur(),O3=we(),uDr=sa(),oDr=uDr+1;function vDr(r){var e,t,i,a;return tDr(r)?NaN:iDr(r)?NaN:(e=aDr(r),e>oDr?1:(t=sDr(e),i=e-t,i===.5?0:(i<.25?a=Hj(O3*i):i<.75?(i=.5-i,a=nDr(O3*i)):(i=1-i,a=-Hj(O3*i)),t%2===1?-a:a)))}zj.exports=vDr});var Jj=s((iBe,Xj)=>{"use strict";var fDr=Wj();Xj.exports=fDr});var xj=s((aBe,Yj)=>{"use strict";var cDr=1.618033988749895;Yj.exports=cDr});var $j=s((nBe,Zj)=>{"use strict";var lDr=z(),pDr=Jj(),dDr=Gr(),gDr=xj(),mDr=pr(),yDr=Ir(),hDr=2.23606797749979;function qDr(r){var e,t;return lDr(r)||r===mDr||r===yDr?NaN:(e=dDr(gDr,r),t=pDr(r)/e,(e-t)/hDr)}Zj.exports=qDr});var Kj=s((sBe,Qj)=>{"use strict";var bDr=$j();Qj.exports=bDr});var eM=s((uBe,rM)=>{"use strict";function wDr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}rM.exports=wDr});var nM=s((oBe,aM)=>{"use strict";var EDr=Wv(),NDr=kv(),tM=ft(),_3=ae(),SDr=Et(),ODr=_e(),iM=Wa(),ADr=za(),_Dr=z(),TDr=eM(),IDr=4294967295>>>0,RDr=3221225472>>>0,LDr=0x40000000000000,A3=2147483648>>>0,PDr=1>>>0,FDr=715094163>>>0,jDr=696219795>>>0,MDr=_3(EDr),va=[0>>>0,0>>>0];function BDr(r){var e,t,i,a,n,u,o;return r===0||_Dr(r)||ODr(r)?r:(t=_3(r)>>>0,e=(t&NDr)>>>0,t&=tM,t<MDr?(u=LDr*r,i=(_3(u)&tM)>>>0,i=(i/3>>>0)+jDr>>>0,u=iM(e|i,0)):(u=0,i=(t/3>>>0)+FDr>>>0,u=SDr(u,e|i)),a=u*u*(u/r),u*=TDr(a),ADr.assign(u,va,1,0),va[1]&A3?(va[0]+=PDr,va[1]&=~A3):va[1]|=A3,u=iM(va[0]&IDr,va[1]&RDr),n=u*u,a=r/n,o=u+u,a=(a-u)/(o+a),u+=u*a,u)}aM.exports=BDr});var uM=s((vBe,sM)=>{"use strict";var kDr=nM();sM.exports=kDr});var vM=s((fBe,oM)=>{"use strict";var CDr=Math.ceil;oM.exports=CDr});var xa=s((cBe,fM)=>{"use strict";var VDr=vM();fM.exports=VDr});var lM=s((lBe,cM)=>{"use strict";function UDr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}cM.exports=UDr});var dM=s((pBe,pM)=>{"use strict";function GDr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}pM.exports=GDr});var yM=s((dBe,mM)=>{"use strict";var DDr=ae(),HDr=lM(),zDr=dM(),gM=1048575,WDr=.3333333333333333;function XDr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=DDr(r),n=r-1,(gM&2+a)<3?n===0?0:n*n*(WDr*n-.5):(u=n/(2+n),o=u*u,a&=gM,c=a-398458|0,f=o*o,l=440401-a|0,t=f*HDr(f),i=o*zDr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}mM.exports=XDr});var wM=s((gBe,bM)=>{"use strict";var hM=ae(),JDr=Et(),YDr=vt(),xDr=z(),ZDr=ct(),$Dr=Ir(),QDr=yM(),KDr=0x40000000000000,qM=.4342944818781689,rHr=25082946711645275e-27,eHr=.30102999566361177,tHr=3694239077158931e-28,iHr=1048575,aHr=2146435072,nHr=1048576,sHr=1072693248;function uHr(r){var e,t,i,a,n,u,o,v;return xDr(r)||r<0?NaN:r===0?$Dr:(t=hM(r),u=0,t<nHr&&(u-=54,r*=KDr,t=hM(r)),t>=aHr?r+r:(u+=(t>>20)-ZDr|0,t&=iHr,n=t+614244&1048576|0,r=JDr(r,t|n^sHr),u+=n>>20|0,o=u,a=QDr(r),r-=1,e=YDr(r,0),i=r-e,v=o*tHr+(r+a)*rHr,v+=(i+a)*qM+e*qM,v+o*eHr))}bM.exports=uHr});var NM=s((mBe,EM)=>{"use strict";var oHr=wM();EM.exports=oHr});var OM=s((yBe,SM)=>{"use strict";var vHr=z(),fHr=_e(),cHr=Gr(),lHr=Ur(),pHr=xa(),dHr=NM(),gHr=Xn(),mHr=Rs(),yHr=pr();function hHr(r){var e,t;return vHr(r)||fHr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=dHr(r),e===-1?t=lHr(t):t=pHr(t),t<=mHr?e*0:t>gHr?yHr:e*cHr(10,t))}SM.exports=hHr});var _M=s((hBe,AM)=>{"use strict";var qHr=OM();AM.exports=qHr});var IM=s((qBe,TM)=>{"use strict";function bHr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}TM.exports=bHr});var LM=s((bBe,RM)=>{"use strict";function wHr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}RM.exports=wHr});var jM=s((wBe,FM)=>{"use strict";var EHr=ae(),NHr=IM(),SHr=LM(),PM=1048575,OHr=.3333333333333333;function AHr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=EHr(r),n=r-1,(PM&2+a)<3?n===0?0:n*n*(OHr*n-.5):(u=n/(2+n),o=u*u,a&=PM,c=a-398458|0,f=o*o,l=440401-a|0,t=f*NHr(f),i=o*SHr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}FM.exports=AHr});var kM=s((EBe,BM)=>{"use strict";var _Hr=ae(),THr=Et(),IHr=vt(),RHr=za(),LHr=z(),PHr=ft(),FHr=Ts(),jHr=ct(),MHr=Ir(),BHr=jM(),kHr=0x40000000000000,MM=1.4426950407214463,CHr=16751713164886512e-26,VHr=2146435072,UHr=1048576,GHr=1072693248,T3=[0,0];function DHr(r){var e,t,i,a,n,u,o;if(LHr(r)||r<0)return NaN;if(RHr.assign(r,T3,1,0),i=T3[0],a=T3[1],o=0,i<UHr){if((i&PHr|a)===0)return MHr;o-=54,r*=kHr,i=_Hr(r)}return i>=VHr?r+r:(o+=(i>>20)-jHr|0,i&=FHr,u=i+614244&1048576|0,r=THr(r,i|u^GHr),o+=u>>20|0,n=BHr(r),r-=1,e=IHr(r,0),t=r-e,(r+n)*CHr+(t+n)*MM+e*MM+o)}BM.exports=DHr});var VM=s((NBe,CM)=>{"use strict";var HHr=kM();CM.exports=HHr});var GM=s((SBe,UM)=>{"use strict";var zHr=z(),WHr=_e(),XHr=Gr(),JHr=Ur(),YHr=xa(),xHr=VM(),ZHr=_s(),$Hr=zv(),QHr=pr();function KHr(r){var e,t;return zHr(r)||WHr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=xHr(r),t===$Hr)?r:(e===-1?t=JHr(t):t=YHr(t),t>ZHr?QHr:e*XHr(2,t))}UM.exports=KHr});var HM=s((OBe,DM)=>{"use strict";var rzr=GM();DM.exports=rzr});var WM=s((ABe,zM)=>{"use strict";var ezr=Ur(),tzr=xa();function izr(r){return r<0?tzr(r):ezr(r)}zM.exports=izr});var Zs=s((_Be,XM)=>{"use strict";var azr=WM();XM.exports=azr});var YM=s((TBe,JM)=>{"use strict";function nzr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}JM.exports=nzr});var ZM=s((IBe,xM)=>{"use strict";var szr=Xa(),uzr=YM();function ozr(r,e,t){var i,a,n,u;return i=r-e,a=i*i,n=i-a*uzr(a),u=1-(e-i*n/(2-n)-r),szr(u,t)}xM.exports=ozr});var tB=s((RBe,eB)=>{"use strict";var vzr=z(),$M=Zs(),fzr=Ir(),QM=pr(),czr=ZM(),lzr=.6931471803691238,pzr=19082149292705877e-26,KM=1.4426950408889634,dzr=709.782712893384,gzr=-745.1332191019411,rB=1/(1<<28),mzr=-rB;function yzr(r){var e,t,i;return vzr(r)||r===QM?r:r===fzr?0:r>dzr?QM:r<gzr?0:r>mzr&&r<rB?1+r:(r<0?i=$M(KM*r-.5):i=$M(KM*r+.5),e=r-i*lzr,t=i*pzr,czr(e,t,i))}eB.exports=yzr});var xr=s((LBe,iB)=>{"use strict";var hzr=tB();iB.exports=hzr});var nB=s((PBe,aB)=>{"use strict";var qzr=z(),I3=xr();function bzr(r){return qzr(r)?r:(r<0&&(r=-r),r>21?I3(r)/2:(I3(r)+I3(-r))/2)}aB.exports=bzr});var uB=s((FBe,sB)=>{"use strict";var wzr=nB();sB.exports=wzr});var vB=s((jBe,oB)=>{"use strict";function Ezr(r){return r===0?.041666666666666664:.041666666666666664+r*(-.0013888888888888872+r*(2480158730157055e-20+r*(-2755731921499979e-22+r*(2087675428708152e-24+r*(-1147028484342536e-26+r*4737750796424621e-29)))))}oB.exports=Ezr});var lB=s((MBe,cB)=>{"use strict";var Nzr=At(),Szr=vB(),fB=.7853981633974483;function Ozr(r){var e;return r<-fB||r>fB?Nzr(r)-1:(e=r*r,-.5*e+e*e*Szr(e))}cB.exports=Ozr});var dB=s((BBe,pB)=>{"use strict";var Azr=lB();pB.exports=Azr});var yB=s((kBe,mB)=>{"use strict";var _zr=z(),Tzr=_e(),Izr=Dr(),gB=At(),Rzr=pt(),Lzr=Ur(),R3=we(),Pzr=sa(),Fzr=Pzr+1;function jzr(r){var e,t,i,a;return _zr(r)?NaN:Tzr(r)?NaN:(e=Izr(r),e>Fzr?1:(t=Lzr(e),i=e-t,i===.5?0:(i<.25?a=gB(R3*i):i<.75?(i=.5-i,a=Rzr(R3*i)):(i=1-i,a=-gB(R3*i)),t%2===1?-a:a)))}mB.exports=jzr});var qB=s((CBe,hB)=>{"use strict";var Mzr=yB();hB.exports=Mzr});var wB=s((VBe,bB)=>{"use strict";function Bzr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}bB.exports=Bzr});var NB=s((UBe,EB)=>{"use strict";function kzr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}EB.exports=kzr});var AB=s((GBe,OB)=>{"use strict";var Czr=ae(),SB=vt(),Vzr=wB(),Uzr=NB(),Gzr=.7853981633974483,Dzr=3061616997868383e-32,Hzr=.3333333333333341,zzr=2147483647;function Wzr(r,e,t){var i,a,n,u,o,v,f,c,l;return i=Czr(r),a=i&zzr|0,a>=1072010280&&(r<0&&(r=-r,e=-e),l=Gzr-r,c=Dzr-e,r=l+c,e=0),l=r*r,c=l*l,u=Vzr(c),f=l*Uzr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=Hzr*o,c=r+u,a>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=SB(c,0),f=u-(l-r),n=-1/c,v=SB(n,0),o=1+v*l,v+n*(o+v*f))}OB.exports=Wzr});var TB=s((DBe,_B)=>{"use strict";var Xzr=AB();_B.exports=Xzr});var LB=s((HBe,RB)=>{"use strict";var Jzr=ae(),IB=TB(),Yzr=r0(),L3=[0,0],xzr=2147483647,Zzr=1072243195,$zr=2146435072,Qzr=1044381696;function Kzr(r){var e,t;return e=Jzr(r),e&=xzr,e<=Zzr?e<Qzr?r:IB(r,0,1):e>=$zr?NaN:(t=Yzr(r,L3),IB(L3[0],L3[1],1-((t&1)<<1)))}RB.exports=Kzr});var s0=s((zBe,PB)=>{"use strict";var rWr=LB();PB.exports=rWr});var jB=s((WBe,FB)=>{"use strict";var eWr=s0();function tWr(r){return 1/eWr(r)}FB.exports=tWr});var BB=s((XBe,MB)=>{"use strict";var iWr=jB();MB.exports=iWr});var CB=s((JBe,kB)=>{"use strict";function aWr(r){var e,t,i;return r===0?-.3333333333333332:(r<0?e=-r:e=r,e<=1?(t=-1614.6876844170845+r*(-99.28772310019185+r*(-.9643991794250523+r*0)),i=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+r*1))):(r=1/r,t=0+r*(-.9643991794250523+r*(-99.28772310019185+r*-1614.6876844170845)),i=1+r*(112.81167849163293+r*(2235.4883906010045+r*4844.063053251255))),t/i)}kB.exports=aWr});var UB=s((YBe,VB)=>{"use strict";var nWr=Dr(),sWr=xr(),uWr=CB(),oWr=88.02969193111305;function vWr(r){var e,t;if(t=nWr(r),t>.5*oWr)return r<0?-1:1;if(t>=.625)e=sWr(2*t),t=1-2/(e+1),r<0&&(t=-t);else{if(r===0)return r;e=r*r,t=r+r*e*uWr(e)}return t}VB.exports=vWr});var DB=s((xBe,GB)=>{"use strict";var fWr=UB();GB.exports=fWr});var zB=s((ZBe,HB)=>{"use strict";var cWr=DB();function lWr(r){return 1/cWr(r)}HB.exports=lWr});var XB=s(($Be,WB)=>{"use strict";var pWr=zB();WB.exports=pWr});var YB=s((QBe,JB)=>{"use strict";var dWr=pt();function gWr(r){return 1+dWr(r)}JB.exports=gWr});var ZB=s((KBe,xB)=>{"use strict";var mWr=YB();xB.exports=mWr});var QB=s((rke,$B)=>{"use strict";var yWr=pt();function hWr(r){return 1-yWr(r)}$B.exports=hWr});var rk=s((eke,KB)=>{"use strict";var qWr=QB();KB.exports=qWr});var tk=s((tke,ek)=>{"use strict";var bWr=.017453292519943295;function wWr(r){return r*bWr}ek.exports=wWr});var ak=s((ike,ik)=>{"use strict";var EWr=tk();ik.exports=EWr});var sk=s((ake,nk)=>{"use strict";function NWr(r){return r===0?.08333333333333333:.08333333333333333+r*(-.008333333333333333+r*(.003968253968253968+r*(-.004166666666666667+r*(.007575757575757576+r*(-.021092796092796094+r*(.08333333333333333+r*-.4432598039215686))))))}nk.exports=NWr});var ok=s((nke,uk)=>{"use strict";var SWr=wr(),OWr=sk();function AWr(r){var e,t;return r-=1,e=SWr(r)+1/(2*r),t=1/(r*r),e-t*OWr(t)}uk.exports=AWr});var fk=s((ske,vk)=>{"use strict";function _Wr(r){var e,t,i;return r===0?.25479851061131553:(r<0?e=-r:e=r,e<=1?(t=.25479851061131553+r*(-.3255503118680449+r*(-.6503185377089651+r*(-.28919126444774784+r*(-.04525132144873906+r*(-.002071332116774595+r*0))))),i=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+r*-5578984132167551e-22)))))):(r=1/r,t=0+r*(-.002071332116774595+r*(-.04525132144873906+r*(-.28919126444774784+r*(-.6503185377089651+r*(-.3255503118680449+r*.25479851061131553))))),i=-5578984132167551e-22+r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+r*1)))))),t/i)}vk.exports=_Wr});var lk=s((uke,ck)=>{"use strict";var TWr=fk(),IWr=1569415565/1073741824,RWr=381566830/1073741824/1073741824,LWr=9016312093258695e-35,PWr=.9955816268920898;function FWr(r){var e,t;return e=r-IWr,e-=RWr,e-=LWr,t=TWr(r-1),e*PWr+e*t}ck.exports=FWr});var gk=s((oke,dk)=>{"use strict";var jWr=z(),MWr=Ur(),BWr=s0(),pk=we(),kWr=ok(),CWr=lk(),VWr=10;function UWr(r){var e,t;if(jWr(r)||r===0)return NaN;if(r<=-1){if(r=1-r,e=r-MWr(r),e>.5&&(e-=1),e===0)return NaN;t=pk/BWr(pk*e)}else t=0;if(r>=VWr)return t+=kWr(r),t;for(;r>2;)r-=1,t+=1/r;for(;r<1;)t-=1/r,r+=1;return t+=CWr(r),t}dk.exports=UWr});var yk=s((vke,mk)=>{"use strict";var GWr=gk();mk.exports=GWr});var qk=s((fke,hk)=>{"use strict";var DWr=.34657359027997264;hk.exports=DWr});var wk=s((cke,bk)=>{"use strict";function HWr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}bk.exports=HWr});var _k=s((lke,Ak)=>{"use strict";var zWr=z(),Ek=ae(),P3=Et(),WWr=Wa(),Nk=pr(),XWr=Ir(),Sk=ct(),JWr=qk(),YWr=wk(),xWr=709.782712893384,F3=.6931471803691238,j3=19082149292705877e-26,Ok=1.4426950408889634,ZWr=38.816242111356935,$Wr=1.0397207708399179;function QWr(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(r===Nk||zWr(r))return r;if(r===XWr)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=ZWr){if(i)return-1;if(v>=xWr)return Nk}if(u=Ek(v)|0,v>JWr)v<$Wr?i?(a=r+F3,n=-j3,m=-1):(a=r-F3,n=j3,m=1):(i?m=Ok*r-.5:m=Ok*r+.5,m|=0,l=m,a=r-l*F3,n=l*j3),r=a-n,c=a-r-n;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*YWr(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=WWr(Sk+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(a=Ek(v)+(m<<20)|0,v=P3(v,a)):v*=t,v-1):(l=1,m<20?(a=1072693248-(2097152>>m)|0,l=P3(l,a),v=l-(p-r)):(a=Sk-m<<20|0,l=P3(l,a),v=r-(p+l),v+=1),v*=t,v))}Ak.exports=QWr});var u0=s((pke,Tk)=>{"use strict";var KWr=_k();Tk.exports=KWr});var Pk=s((dke,Lk)=>{"use strict";var Ik=z(),Rk=Dr(),rXr=u0(),eXr=wr(),tXr=Gr(),iXr=Zs();function aXr(r,e){var t;if(Ik(r)||Ik(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((Rk(e*(r-1))<.5||Rk(e)<.2)&&(t=eXr(r)*e,t<.5))return rXr(t)}else if(iXr(e)!==e)return NaN;return tXr(r,e)-1}Lk.exports=aXr});var M3=s((gke,Fk)=>{"use strict";var nXr=Pk();Fk.exports=nXr});var Mk=s((mke,jk)=>{"use strict";var sXr=Ir();function uXr(r){return r===0&&1/r===sXr}jk.exports=uXr});var B3=s((yke,Bk)=>{"use strict";var oXr=Mk();Bk.exports=oXr});var k3=s((hke,kk)=>{"use strict";var vXr=2.5066282746310007;kk.exports=vXr});var Vk=s((qke,Ck)=>{"use strict";function fXr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Ck.exports=fXr});var Dk=s((bke,Gk)=>{"use strict";var cXr=k3(),Uk=Gr(),lXr=xr(),pXr=Vk(),dXr=143.01608;function gXr(r){var e,t,i;return e=1/r,e=1+e*pXr(e),t=lXr(r),r>dXr?(i=Uk(r,.5*r-.25),t=i*(i/t)):t=Uk(r,r-.5)/t,cXr*t*e}Gk.exports=gXr});var zk=s((wke,Hk)=>{"use strict";var mXr=.5772156649015329;Hk.exports=mXr});var Xk=s((Eke,Wk)=>{"use strict";var yXr=zk();function hXr(r,e){return e/((1+yXr*r)*r)}Wk.exports=hXr});var Yk=s((Nke,Jk)=>{"use strict";function qXr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Jk.exports=qXr});var tC=s((Ske,eC)=>{"use strict";var bXr=z(),wXr=Ee(),EXr=B3(),xk=Dr(),NXr=Ur(),SXr=pt(),Zk=pr(),$k=Ir(),Qk=we(),Kk=Dk(),rC=Xk(),OXr=Yk();function AXr(r){var e,t,i,a;if(wXr(r)&&r<0||r===$k||bXr(r))return NaN;if(r===0)return EXr(r)?$k:Zk;if(r>171.61447887182297)return Zk;if(r<-170.5674972726612)return 0;if(t=xk(r),t>33)return r>=0?Kk(r):(i=NXr(t),(i&1)===0?e=-1:e=1,a=t-i,a>.5&&(i+=1,a=t-i),a=t*SXr(Qk*a),e*Qk/(xk(a)*Kk(t)));for(a=1;r>=3;)r-=1,a*=r;for(;r<0;){if(r>-1e-9)return rC(r,a);a/=r,r+=1}for(;r<2;){if(r<1e-9)return rC(r,a);a/=r,r+=1}return r===2?a:(r-=2,a*OXr(r))}eC.exports=AXr});var Za=s((Oke,iC)=>{"use strict";var _Xr=tC();iC.exports=_Xr});var sC=s((Ake,nC)=>{"use strict";var TXr=z(),IXr=_e(),aC=At(),C3=pt(),RXr=Dr(),o0=Es(),v0=we();function LXr(r){var e,t;return TXr(r)?NaN:IXr(r)?NaN:(t=r%2,e=RXr(t),e===0||e===1?o0(0,t):e<.25?C3(v0*t):e<.75?(e=.5-e,o0(aC(v0*e),t)):e<1.25?(t=o0(1,t)-t,C3(v0*t)):e<1.75?(e-=1.5,-o0(aC(v0*e),t)):(t-=o0(2,t),C3(v0*t)))}nC.exports=LXr});var f0=s((_ke,uC)=>{"use strict";var PXr=sC();uC.exports=PXr});var vC=s((Tke,oC)=>{"use strict";function FXr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}oC.exports=FXr});var cC=s((Ike,fC)=>{"use strict";function jXr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}fC.exports=jXr});var pC=s((Rke,lC)=>{"use strict";function MXr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}lC.exports=MXr});var gC=s((Lke,dC)=>{"use strict";function BXr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}dC.exports=BXr});var yC=s((Pke,mC)=>{"use strict";function kXr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}mC.exports=kXr});var qC=s((Fke,hC)=>{"use strict";function CXr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}hC.exports=CXr});var wC=s((jke,bC)=>{"use strict";function VXr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}bC.exports=VXr});var NC=s((Mke,EC)=>{"use strict";function UXr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}EC.exports=UXr});var OC=s((Bke,SC)=>{"use strict";function GXr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}SC.exports=GXr});var _C=s((kke,AC)=>{"use strict";function DXr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}AC.exports=DXr});var RC=s((Cke,IC)=>{"use strict";var HXr=z(),zXr=_e(),WXr=Dr(),$a=wr(),XXr=Zs(),JXr=f0(),YXr=we(),V3=pr(),xXr=vC(),ZXr=cC(),$Xr=pC(),QXr=gC(),KXr=yC(),rJr=qC(),eJr=wC(),tJr=NC(),iJr=OC(),aJr=_C(),nJr=.07721566490153287,sJr=.3224670334241136,uJr=1,oJr=-.07721566490153287,vJr=.48383612272381005,fJr=-.1475877229945939,cJr=.06462494023913339,lJr=-.07721566490153287,pJr=1,dJr=.4189385332046727,$s=1.4616321449683622,gJr=4503599627370496,mJr=0x400000000000000,yJr=8470329472543003e-37,TC=1.4616321449683622,hJr=-.12148629053584961,qJr=-3638676997039505e-33;function bJr(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(HXr(r)||zXr(r))return r;if(r===0)return V3;if(r<0?(e=!0,r=-r):e=!1,r<yJr)return-$a(r);if(e){if(r>=gJr||(f=JXr(r),f===0))return V3;t=$a(YXr/WXr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-$a(r),r>=$s-1+.27?(l=1-r,i=0):r>=$s-1-.27?(l=r-(TC-1),i=1):(l=r,i=2)):(m=0,r>=$s+.27?(l=2-r,i=0):r>=$s-.27?(l=r-TC,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=nJr+p*xXr(p),n=p*(sJr+p*ZXr(p)),o=l*u+n,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=vJr+c*KXr(c),n=fJr+c*rJr(c),a=cJr+c*eJr(c),o=p*u-(qJr-c*(n+l*a)),m+=hJr+o;break;case 2:u=l*(lJr+l*tJr(l)),n=pJr+l*iJr(l),m+=-.5*l+u/n;break}else if(r<8)switch(i=XXr(r),l=r-i,o=l*(oJr+l*QXr(l)),v=uJr+l*$Xr(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=$a(p)}else r<mJr?(f=$a(r),p=1/r,l=p*p,c=dJr+p*aJr(l),m=(r-.5)*(f-1)+c):m=r*($a(r)-1);return e&&(m=t-m),m}IC.exports=bJr});var c0=s((Vke,LC)=>{"use strict";var wJr=RC();LC.exports=wJr});var mi=s((Uke,PC)=>{"use strict";var EJr=6.283185307179586;PC.exports=EJr});var U3=s((Gke,FC)=>{"use strict";var NJr=14901161193847656e-24;FC.exports=NJr});var G3=s((Dke,jC)=>{"use strict";var SJr=.9189385332046728;jC.exports=SJr});var MC=s((Hke,OJr)=>{OJr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var BC=s((zke,AJr)=>{AJr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var kC=s((Wke,_Jr)=>{_Jr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var VC=s((Xke,CC)=>{"use strict";function TJr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}CC.exports=TJr});var GC=s((Jke,UC)=>{"use strict";function IJr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}UC.exports=IJr});var HC=s((Yke,DC)=>{"use strict";function RJr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}DC.exports=RJr});var WC=s((xke,zC)=>{"use strict";function LJr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}zC.exports=LJr});var JC=s((Zke,XC)=>{"use strict";function PJr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}XC.exports=PJr});var xC=s(($ke,YC)=>{"use strict";function FJr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}YC.exports=FJr});var rV=s((Qke,KC)=>{"use strict";var jJr=z(),MJr=Ee(),BJr=Dr(),Qs=xr(),kJr=Ur(),CJr=Za(),VJr=c0(),ZC=f0(),$C=Gr(),UJr=wr(),GJr=pr(),DJr=Ir(),QC=mi(),HJr=U3(),zJr=G3(),WJr=MC(),XJr=BC(),JJr=kC(),YJr=VC(),xJr=GC(),ZJr=HC(),$Jr=WC(),QJr=JC(),KJr=xC(),rYr=129,eYr=170,tYr=709,iYr=1.2433929443359375,aYr=.6986598968505859;function D3(r){var e,t,i,a,n,u;if(jJr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(MJr(r)&&(a=r|0,a===r))if(a<0){if(i=-a|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=rYr)return-JJr[u]/(i+1)}else return(a&1)===0?XJr[a/2]:WJr[(a-3)/2];return BJr(r)<HJr?-.5-zJr*r:(t=1-r,r<0?kJr(r/2)===r/2?0:(e=r,r=t,t=e,r>eYr?(e=ZC(.5*t)*2*D3(r),n=VJr(r),n-=r*UJr(QC),n>tYr?e<0?DJr:GJr:e*Qs(n)):ZC(.5*t)*2*$C(QC,-r)*CJr(r)*D3(r)):r<1?(e=YJr(t),e-=iYr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+xJr(t)):r<=4?(e=aYr+1/-t,e+ZJr(r-2)):r<=7?(e=$Jr(r-4),1+Qs(e)):r<15?(e=QJr(r-7),1+Qs(e)):r<36?(e=KJr(r-15),1+Qs(e)):1+$C(2,-r))}KC.exports=D3});var H3=s((Kke,eV)=>{"use strict";var nYr=rV();eV.exports=nYr});var iV=s((rCe,tV)=>{"use strict";var sYr=z(),uYr=M3(),oYr=H3(),vYr=zn();function fYr(r){return sYr(r)?NaN:r===1?vYr:-uYr(2,1-r)*oYr(r)}tV.exports=fYr});var nV=s((eCe,aV)=>{"use strict";var cYr=iV();aV.exports=cYr});var uV=s((tCe,sV)=>{"use strict";function lYr(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}sV.exports=lYr});var vV=s((iCe,oV)=>{"use strict";function pYr(r){return r===0?1.63525673226458:1.63525673226458+r*(.4711906261487323+r*(.3097284108314996+r*(.2522083117731357+r*(.22672562321968465+r*(.21577444672958598+r*(.21310877187734892+r*(.21602912460518828+r*(.2232558316330579+r*(.23418050129420992+r*(.24855768297226408+r*.26636380989261754))))))))))}oV.exports=pYr});var cV=s((aCe,fV)=>{"use strict";function dYr(r){return r===0?1.685750354812596:1.685750354812596+r*(.5417318486132803+r*(.40152443839069024+r*(.3696424734208891+r*(.37606071535458363+r*(.4052358870851259+r*(.45329438175399905+r*(.5205189476511842+r*(.609426039204995+r*(.7242635222829089+r*(.8710138477098124+r*1.057652872753547))))))))))}fV.exports=dYr});var pV=s((nCe,lV)=>{"use strict";function gYr(r){return r===0?1.7443505972256133:1.7443505972256133+r*(.6348642753719353+r*(.5398425641644455+r*(.5718927051937874+r*(.6702951362654062+r*(.8325865900109772+r*(1.0738574482479333+r*(1.4220914606754977+r*(1.9203871834023047+r*(2.6325525483316543+r*(3.6521097473190394+r*(5.115867135558866+r*7.224080007363877)))))))))))}lV.exports=gYr});var gV=s((sCe,dV)=>{"use strict";function mYr(r){return r===0?1.8138839368169826:1.8138839368169826+r*(.7631632457005573+r*(.7619286053215958+r*(.9510746536684279+r*(1.315180671703161+r*(1.9285606934774109+r*(2.9375093425313787+r*(4.594894405442878+r*(7.33007122188172+r*(11.871512597425301+r*(19.45851374822938+r*(32.20638657246427+r*(53.73749198700555+r*90.27388602941))))))))))))}dV.exports=mYr});var yV=s((uCe,mV)=>{"use strict";function yYr(r){return r===0?1.8989249102715535:1.8989249102715535+r*(.9505217946182445+r*(1.1510775899590158+r*(1.7502391069863006+r*(2.952676812636875+r*(5.285800396121451+r*(9.83248571665998+r*(18.787148683275596+r*(36.61468615273698+r*(72.45292395127771+r*(145.1079577347069+r*(293.4786396308497+r*(598.385181505501+r*(1228.4200130758634+r*2536.5297553827645)))))))))))))}mV.exports=yYr});var qV=s((oCe,hV)=>{"use strict";function hYr(r){return r===0?2.0075983984243764:2.0075983984243764+r*(1.2484572312123474+r*(1.9262346570764797+r*(3.7512896400875877+r*(8.119944554932045+r*(18.665721308735552+r*(44.603924842914374+r*(109.50920543094983+r*(274.2779548232414+r*(697.5598008606327+r*(1795.7160145002472+r*(4668.38171679039+r*(12235.762468136643+r*(32290.17809718321+r*(85713.07608195965+r*(228672.1890493117+r*612757.2711915852)))))))))))))))}hV.exports=hYr});var wV=s((vCe,bV)=>{"use strict";function qYr(r){return r===0?2.1565156474996434:2.1565156474996434+r*(1.7918056418494632+r*(3.8267512874657132+r*(10.386724683637972+r*(31.403314054680703+r*(100.92370394986955+r*(337.3268282632273+r*(1158.7079305678278+r*(4060.9907421936323+r*(14454.001840343448+r*(52076.661075994045+r*(189493.65914621568+r*(695184.5762413896+r*(2567994048255285e-9+r*(9541921966748387e-9+r*(3563492744218076e-8+r*(13366929846120408e-8+r*(50335218668662846e-8+r*(190197572953866e-5+r*7208915015330104e-6))))))))))))))))))}bV.exports=qYr});var NV=s((fCe,EV)=>{"use strict";function bYr(r){return r===0?2.3181226217125106:2.3181226217125106+r*(2.6169201502912327+r*(7.897935075731356+r*(30.502397154466724+r*(131.48693655235286+r*(602.9847637356492+r*(2877.024617809973+r*(14110.519919151804+r*(70621.4408815654+r*(358977.266582531+r*(1.8472382637239718e6+r*(9600515416049214e-9+r*(5030767708502367e-8+r*(2654441886527128e-7+r*(14088623250287027e-7+r*7515687935373775e-6))))))))))))))}EV.exports=bYr});var OV=s((cCe,SV)=>{"use strict";function wYr(r){return r===0?2.473596173751344:2.473596173751344+r*(3.727624244118099+r*(15.607393035549306+r*(84.12850842805888+r*(506.98181970406137+r*(3252.2770581451236+r*(21713.242419574344+r*(149037.04518909327+r*(1.0439993310899908e6+r*(7427974817042039e-9+r*(5350383967558661e-8+r*(38924988699487084e-8+r*(28552883511008105e-7+r*(2109007703876684e-5+r*(1566998339477902e-4+r*(117022224242244e-2+r*(87779483236689375e-4+r*(6610124275248495e-2+r*(4994880537133888e-1+r*0x86813c6c7adde8))))))))))))))))))}SV.exports=wYr});var _V=s((lCe,AV)=>{"use strict";function EYr(r){return r===0?0:0+r*(.0625+r*(.03125+r*(.0205078125+r*(.01513671875+r*(.011934280395507812+r*(.009816169738769531+r*(.008315593004226685+r*(.007199153304100037+r*(.00633745662344154+r*(.00565311038371874+r*(.005097046040418718+r*(.004636680381850056+r*(.004249547423822886+r*.003919665602267974)))))))))))))}AV.exports=EYr});var IV=s((pCe,TV)=>{"use strict";function NYr(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}TV.exports=NYr});var LV=s((dCe,RV)=>{"use strict";var SYr=Rr(),OYr=wr(),AYr=pr(),_Yr=Ya(),TYr=uV(),IYr=vV(),RYr=cV(),LYr=pV(),PYr=gV(),FYr=yV(),jYr=qV(),MYr=wV(),BYr=NV(),kYr=OV(),CYr=_V(),VYr=IV(),UYr=.3183098861837907;function GYr(r){var e,t,i,a,n,u;return u=r,r<0&&(u=r/(r-1),e=!0),u===0?_Yr:u===1?AYr:u>1?NaN:(u<.1?n=TYr(u-.05):u<.2?n=IYr(u-.15):u<.3?n=RYr(u-.25):u<.4?n=LYr(u-.35):u<.5?n=PYr(u-.45):u<.6?n=FYr(u-.55):u<.7?n=jYr(u-.65):u<.8?n=MYr(u-.75):u<.85?n=BYr(u-.825):u<.9?n=kYr(u-.875):(i=1-u,a=CYr(i),t=VYr(i-.05),n=-OYr(a)*(t*UYr)),e?n/SYr(1-r):n)}RV.exports=GYr});var z3=s((gCe,PV)=>{"use strict";var DYr=LV();PV.exports=DYr});var jV=s((mCe,FV)=>{"use strict";function HYr(r){return r===0?1.5509733517804722:1.5509733517804722+r*(-.4003010201031985+r*(-.07849861944294194+r*(-.034318853117591995+r*(-.0197180433173655+r*(-.01305950773199331+r*(-.009442372874146548+r*(-.007246728512402157+r*(-.00580742401295609+r*-.004809187786009338))))))))}FV.exports=HYr});var BV=s((yCe,MV)=>{"use strict";function zYr(r){return r===0?1.5101218320928198:1.5101218320928198+r*(-.41711633390586755+r*(-.09012382040477457+r*(-.04372994401908431+r*(-.027965493064761784+r*(-.020644781177568104+r*(-.016650786739707237+r*(-.01426196082884252+r*(-.012759847429264804+r*(-.011799303775587354+r*-.011197445703074968)))))))))}MV.exports=zYr});var CV=s((hCe,kV)=>{"use strict";function WYr(r){return r===0?1.4674622093394272:1.4674622093394272+r*(-.43657629094633776+r*(-.10515555766694255+r*(-.05737184359324173+r*(-.04139162772734022+r*(-.03452772850528084+r*(-.031495443512532785+r*(-.030527000890325277+r*(-.0309169840192389+r*(-.03237139531475812+r*-.03478996038640416)))))))))}kV.exports=WYr});var UV=s((qCe,VV)=>{"use strict";function XYr(r){return r===0?1.4226911334908792:1.4226911334908792+r*(-.4595135196210487+r*(-.12525053982206188+r*(-.07813854509440948+r*(-.06471427847205+r*(-.06208433913173031+r*(-.06519703281557247+r*(-.07279389536257878+r*(-.084959075171781+r*(-.102539850131046+r*(-.12705358515769605+r*-.1607911206912746))))))))))}VV.exports=XYr});var DV=s((bCe,GV)=>{"use strict";function JYr(r){return r===0?1.3754019718711163:1.3754019718711163+r*(-.4872021832731848+r*(-.15331170134854022+r*(-.11184944491702783+r*(-.10884095252313576+r*(-.12295422312026907+r*(-.15221716396203505+r*(-.20049532364269734+r*(-.27617433306775174+r*(-.39351311430437586+r*(-.5757544060278792+r*(-.8605232357272398+r*-1.3088332057585401)))))))))))}GV.exports=JYr});var zV=s((wCe,HV)=>{"use strict";function YYr(r){return r===0?1.3250244979582302:1.3250244979582302+r*(-.5217276475575667+r*(-.19490643048212622+r*(-.17162372682201127+r*(-.20275465292641914+r*(-.27879895311853475+r*(-.42069845728100574+r*(-.675948400853106+r*(-1.1363431218392293+r*(-1.9767211439543984+r*(-3.5316967730957227+r*(-6.446753640156048+r*-11.97703130208884)))))))))))}HV.exports=YYr});var XV=s((ECe,WV)=>{"use strict";function xYr(r){return r===0?1.2707074796501499:1.2707074796501499+r*(-.5668391682878666+r*(-.2621607934324926+r*(-.2922441735330774+r*(-.4403978408504232+r*(-.7749476413813975+r*(-1.498870837987561+r*(-3.089708310445187+r*(-6.6675959033810015+r*(-14.89436036517319+r*(-34.18120574251449+r*(-80.15895841905397+r*(-191.34894807629848+r*(-463.5938853480342+r*-1137.38082216936)))))))))))))}WV.exports=xYr});var YV=s((NCe,JV)=>{"use strict";function ZYr(r){return r===0?1.2110560275684594:1.2110560275684594+r*(-.6303064132874558+r*(-.38716640952066916+r*(-.5922782353119346+r*(-1.23755558451305+r*(-3.0320566617452474+r*(-8.18168822157359+r*(-23.55507217389693+r*(-71.04099935893065+r*(-221.879685319235+r*(-712.1364793277636+r*(-2336.1253314403966+r*(-7801.945954775964+r*(-26448.19586059192+r*(-90799.48341621365+r*(-315126.04064491636+r*-1.1040113443115912e6)))))))))))))))}JV.exports=ZYr});var ZV=s((SCe,xV)=>{"use strict";function $Yr(r){return r===0?1.1613071521962828:1.1613071521962828+r*(-.7011002845552895+r*(-.5805514744654373+r*(-1.2436930610777865+r*(-3.679383613496635+r*(-12.815909243378957+r*(-49.25672530759985+r*(-202.18187354340904+r*(-869.8602699308701+r*(-3877.0058473132895+r*(-17761.7071017094+r*(-83182.69029154233+r*(-396650.4505013548+r*-1.9200334136826345e6))))))))))))}xV.exports=$Yr});var QV=s((OCe,$V)=>{"use strict";function QYr(r){return r===0?1.1246173251197522:1.1246173251197522+r*(-.7708450563609095+r*(-.8447940536449113+r*(-2.4900973094503946+r*(-10.239717411543843+r*(-49.7490054655148+r*(-267.09866751957054+r*(-1532.66588382523+r*(-9222.313478526092+r*(-57502.51612140314+r*(-368596.11674161063+r*(-2.4156110887010912e6+r*(-16120097815816568e-9+r*(-10920993852030899e-8+r*(-7493807581942496e-7+r*(-5198725846725541e-6+r*-364092568881214e-4)))))))))))))))}$V.exports=QYr});var rU=s((ACe,KV)=>{"use strict";function KYr(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}KV.exports=KYr});var tU=s((_Ce,eU)=>{"use strict";function rxr(r){return r===0?1.5509733517804722:1.5509733517804722+r*(-.4003010201031985+r*(-.07849861944294194+r*(-.034318853117591995+r*(-.0197180433173655+r*(-.01305950773199331+r*(-.009442372874146548+r*(-.007246728512402157+r*(-.00580742401295609+r*-.004809187786009338))))))))}eU.exports=rxr});var nU=s((TCe,aU)=>{"use strict";var exr=Rr(),iU=Ya(),txr=z3(),ixr=jV(),axr=BV(),nxr=CV(),sxr=UV(),uxr=DV(),oxr=zV(),vxr=XV(),fxr=YV(),cxr=ZV(),lxr=QV(),pxr=rU(),dxr=tU();function gxr(r){var e,t,i,a,n,u,o;return o=r,r<0&&(o=r/(r-1),e=!0),o===0?iU:o===1?1:o>1?NaN:(o<.1?u=ixr(o-.05):o<.2?u=axr(o-.15):o<.3?u=nxr(o-.25):o<.4?u=sxr(o-.35):o<.5?u=uxr(o-.45):o<.6?u=oxr(o-.55):o<.7?u=vxr(o-.65):o<.8?u=fxr(o-.75):o<.85?u=cxr(o-.825):o<.9?u=lxr(o-.875):(a=.95-o,t=pxr(a),i=dxr(a),n=txr(o),u=(iU+n*(t-i))/t),e?u*exr(1-r):u)}aU.exports=gxr});var uU=s((ICe,sU)=>{"use strict";var mxr=nU();sU.exports=mxr});var vU=s((RCe,oU)=>{"use strict";function yxr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}oU.exports=yxr});var cU=s((LCe,fU)=>{"use strict";function hxr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}fU.exports=hxr});var pU=s((PCe,lU)=>{"use strict";function qxr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}lU.exports=qxr});var gU=s((FCe,dU)=>{"use strict";function bxr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}dU.exports=bxr});var yU=s((jCe,mU)=>{"use strict";function wxr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}mU.exports=wxr});var qU=s((MCe,hU)=>{"use strict";function Exr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}hU.exports=Exr});var wU=s((BCe,bU)=>{"use strict";function Nxr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}bU.exports=Nxr});var NU=s((kCe,EU)=>{"use strict";function Sxr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}EU.exports=Sxr});var TU=s((CCe,_U)=>{"use strict";var Oxr=z(),SU=xr(),Axr=vt(),_xr=pr(),Txr=Ir(),Ixr=vU(),Rxr=cU(),Lxr=pU(),Pxr=gU(),Fxr=yU(),jxr=qU(),Mxr=wU(),Bxr=NU(),OU=1e-300,kxr=2848094538889218e-321,Cxr=3725290298461914e-24,AU=.8450629115104675,Vxr=.1283791670955126,Uxr=1.0270333367641007,Gxr=.12837916709551256,Dxr=1,Hxr=-.0023621185607526594,zxr=1,Wxr=-.009864944034847148,Xxr=1,Jxr=-.0098649429247001,Yxr=1;function xxr(r){var e,t,i,a,n,u,o,v;return Oxr(r)?NaN:r===_xr?1:r===Txr?-1:r===0?r:(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375?t<Cxr?t<kxr?.125*(8*r+Uxr*r):r+Vxr*r:(i=r*r,a=Gxr+i*Ixr(i),n=Dxr+i*Rxr(i),u=a/n,r+r*u):t<1.25?(n=t-1,o=Hxr+n*Lxr(n),v=zxr+n*Pxr(n),e?-AU-o/v:AU+o/v):t>=6?e?OU-1:1-OU:(n=1/(t*t),t<2.857142857142857?(a=Wxr+n*Fxr(n),n=Xxr+n*jxr(n)):(a=Jxr+n*Mxr(n),n=Yxr+n*Bxr(n)),i=Axr(t,0),a=SU(-(i*i)-.5625)*SU((i-t)*(i+t)+a/n),e?a/t-1:1-a/t))}_U.exports=xxr});var RU=s((VCe,IU)=>{"use strict";var Zxr=TU();IU.exports=Zxr});var PU=s((UCe,LU)=>{"use strict";function $xr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}LU.exports=$xr});var jU=s((GCe,FU)=>{"use strict";function Qxr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}FU.exports=Qxr});var BU=s((DCe,MU)=>{"use strict";function Kxr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}MU.exports=Kxr});var CU=s((HCe,kU)=>{"use strict";function rZr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}kU.exports=rZr});var UU=s((zCe,VU)=>{"use strict";function eZr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}VU.exports=eZr});var DU=s((WCe,GU)=>{"use strict";function tZr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}GU.exports=tZr});var zU=s((XCe,HU)=>{"use strict";function iZr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}HU.exports=iZr});var XU=s((JCe,WU)=>{"use strict";function aZr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}WU.exports=aZr});var ZU=s((YCe,xU)=>{"use strict";var nZr=z(),JU=xr(),sZr=vt(),uZr=pr(),oZr=Ir(),vZr=PU(),fZr=jU(),cZr=BU(),lZr=CU(),pZr=UU(),dZr=DU(),gZr=zU(),mZr=XU(),Ks=1e-300,yZr=13877787807814457e-33,YU=.8450629115104675,hZr=.12837916709551256,qZr=1,bZr=-.0023621185607526594,wZr=1,EZr=-.009864944034847148,NZr=1,SZr=-.0098649429247001,OZr=1;function AZr(r){var e,t,i,a,n,u,o,v;if(nZr(r))return NaN;if(r===uZr)return 0;if(r===oZr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<yZr?1-r:(i=r*r,a=hZr+i*vZr(i),n=qZr+i*fZr(i),u=a/n,r<.25?1-(r+r*u):(a=r*u,a+=r-.5,.5-a));if(t<1.25)return n=t-1,o=bZr+n*cZr(n),v=wZr+n*lZr(n),e?1+YU+o/v:1-YU-o/v;if(t<28){if(n=1/(t*t),t<2.857142857142857)a=EZr+n*pZr(n),n=NZr+n*dZr(n);else{if(r<-6)return 2-Ks;a=SZr+n*gZr(n),n=OZr+n*mZr(n)}return i=sZr(t,0),a=JU(-(i*i)-.5625)*JU((i-t)*(i+t)+a/n),e?2-a/t:a/t}return e?2-Ks:Ks*Ks}xU.exports=AZr});var yi=s((xCe,$U)=>{"use strict";var _Zr=ZU();$U.exports=_Zr});var KU=s((ZCe,QU)=>{"use strict";function TZr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}QU.exports=TZr});var eG=s(($Ce,rG)=>{"use strict";function IZr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}rG.exports=IZr});var iG=s((QCe,tG)=>{"use strict";function RZr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}tG.exports=RZr});var nG=s((KCe,aG)=>{"use strict";function LZr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}aG.exports=LZr});var uG=s((rVe,sG)=>{"use strict";function PZr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}sG.exports=PZr});var cG=s((eVe,fG)=>{"use strict";var FZr=z(),oG=Rr(),vG=wr(),jZr=pr(),MZr=Ir(),BZr=KU(),kZr=eG(),CZr=iG(),VZr=nG(),UZr=uG(),GZr=.08913147449493408,DZr=2.249481201171875,HZr=.807220458984375,zZr=.9399557113647461,WZr=.9836282730102539;function XZr(r){var e,t,i,a,n;return FZr(r)?NaN:r===0?jZr:r===2?MZr:r===1?0:r>2||r<0?NaN:(r>1?(e=-1,i=2-r):(e=1,i=r),r=1-i,r<=.5?(a=r*(r+10),n=BZr(r),e*(a*GZr+a*n)):i>=.25?(a=oG(-2*vG(i)),i-=.25,n=kZr(i),e*(a/(DZr+n))):(i=oG(-vG(i)),i<3?(t=i-1.125,n=CZr(t),e*(HZr*i+n*i)):i<6?(t=i-3,n=VZr(t),e*(zZr*i+n*i)):(t=i-6,n=UZr(t),e*(WZr*i+n*i))))}fG.exports=XZr});var pG=s((tVe,lG)=>{"use strict";var JZr=cG();lG.exports=JZr});var gG=s((iVe,dG)=>{"use strict";function YZr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}dG.exports=YZr});var yG=s((aVe,mG)=>{"use strict";function xZr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}mG.exports=xZr});var qG=s((nVe,hG)=>{"use strict";function ZZr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}hG.exports=ZZr});var wG=s((sVe,bG)=>{"use strict";function $Zr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}bG.exports=$Zr});var NG=s((uVe,EG)=>{"use strict";function QZr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}EG.exports=QZr});var _G=s((oVe,AG)=>{"use strict";var KZr=z(),SG=Rr(),OG=wr(),r$r=pr(),e$r=Ir(),t$r=gG(),i$r=yG(),a$r=qG(),n$r=wG(),s$r=NG(),u$r=.08913147449493408,o$r=2.249481201171875,v$r=.807220458984375,f$r=.9399557113647461,c$r=.9836282730102539;function l$r(r){var e,t,i,a,n,u;return KZr(r)?NaN:r===1?r$r:r===-1?e$r:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),a=1-t,t<=.5?(n=t*(t+10),u=t$r(t),e*(n*u$r+n*u)):a>=.25?(n=SG(-2*OG(a)),a-=.25,u=i$r(a),e*(n/(o$r+u))):(a=SG(-OG(a)),a<3?(i=a-1.125,u=a$r(i),e*(v$r*a+u*a)):a<6?(i=a-3,u=n$r(i),e*(f$r*a+u*a)):(i=a-6,u=s$r(i),e*(c$r*a+u*a))))}AG.exports=l$r});var ru=s((vVe,TG)=>{"use strict";var p$r=_G();TG.exports=p$r});var RG=s((fVe,IG)=>{"use strict";function d$r(r){return r===0?2394.2374120738828:2394.2374120738828+r*(406.7172899368727+r*(11.745273255434405+r*.040996251979858706))}IG.exports=d$r});var PG=s((cVe,LG)=>{"use strict";function g$r(r){return r===0?2079.608192860019:2079.608192860019+r*(1272.0927117834513+r*(85.09361608493066+r*1))}LG.exports=g$r});var MG=s((lVe,jG)=>{"use strict";var m$r=Ur(),FG=Xa(),y$r=z(),h$r=Xn(),q$r=Is(),b$r=pr(),w$r=RG(),E$r=PG(),N$r=3.321928094887362,S$r=.301025390625,O$r=4605038981195214e-21;function A$r(r){var e,t,i;return y$r(r)?r:r>h$r?b$r:r<q$r?0:(e=m$r(N$r*r+.5),i=e,r-=e*S$r,r-=e*O$r,t=r*r,e=r*w$r(t),r=e/(E$r(t)-e),r=1+FG(r,1),FG(r,i))}jG.exports=A$r});var kG=s((pVe,BG)=>{"use strict";var _$r=MG();BG.exports=_$r});var VG=s((dVe,CG)=>{"use strict";var T$r=-1022;CG.exports=T$r});var GG=s((gVe,UG)=>{"use strict";function I$r(r){return r===0?1513.906801156151:1513.906801156151+r*(20.202065669316532+r*.023093347705734523)}UG.exports=I$r});var HG=s((mVe,DG)=>{"use strict";function R$r(r){return r===0?4368.211668792106:4368.211668792106+r*(233.1842117223149+r*1)}DG.exports=R$r});var XG=s((yVe,WG)=>{"use strict";var L$r=_s(),P$r=VG(),F$r=zs(),zG=Xa(),j$r=z(),M$r=pr(),B$r=GG(),k$r=HG();function C$r(r){var e,t,i;return j$r(r)?r:r>L$r?M$r:r<P$r?0:(i=F$r(r),r-=i,t=r*r,e=r*B$r(t),r=e/(k$r(t)-e),r=1+zG(r,1),zG(r,i))}WG.exports=C$r});var YG=s((hVe,JG)=>{"use strict";var V$r=XG();JG.exports=V$r});var ZG=s((qVe,xG)=>{"use strict";var U$r=z(),G$r=xr();function D$r(r){return U$r(r)?r:1/(1+G$r(-r))}xG.exports=D$r});var QG=s((bVe,$G)=>{"use strict";var H$r=ZG();$G.exports=H$r});var hi=s((wVe,KG)=>{"use strict";var z$r=2220446049250313e-31;KG.exports=z$r});var eD=s((EVe,rD)=>{"use strict";var W$r=u0(),X$r=Dr(),J$r=hi(),Y$r=pr(),x$r=709.782712893384;function Z$r(r){return X$r(r)<=J$r?1:r>=x$r?Y$r:W$r(r)/r}rD.exports=Z$r});var iD=s((NVe,tD)=>{"use strict";var $$r=eD();tD.exports=$$r});var nD=s((SVe,aD)=>{"use strict";var lr=Qr(),Q$r=Dr(),K$r=Ms(),rQr=$n(),eQr=FL(),tQr=XL(),iQr=ZL(),aQr=rP(),nQr=aP(),sQr=pP(),uQr=yP(),oQr=wP(),vQr=ua(),fQr=v3(),cQr=Vs(),lQr=AP(),pQr=RP(),dQr=jP(),gQr=DP(),mQr=m3(),yQr=y3(),hQr=sj(),qQr=Nj(),bQr=Kj(),wQr=uM(),EQr=xa(),NQr=_M(),SQr=HM(),OQr=At(),AQr=uB(),_Qr=dB(),TQr=qB(),IQr=BB(),RQr=XB(),LQr=ZB(),PQr=rk(),FQr=ak(),jQr=yk(),MQr=nV(),BQr=uU(),kQr=z3(),CQr=RU(),VQr=yi(),UQr=pG(),GQr=ru(),DQr=xr(),HQr=kG(),zQr=YG(),WQr=QG(),XQr=u0(),JQr=iD(),YQr=pt(),xQr=Rr(),ZQr=H3();function $Qr(r){return lr(r,"abs",Q$r),lr(r,"abs2",K$r),lr(r,"acos",rQr),lr(r,"acosh",eQr),lr(r,"acot",tQr),lr(r,"acovercos",iQr),lr(r,"acoversin",aQr),lr(r,"acsc",nQr),lr(r,"acsch",sQr),lr(r,"ahavercos",uQr),lr(r,"ahaversin",oQr),lr(r,"asin",vQr),lr(r,"asinh",fQr),lr(r,"atan",cQr),lr(r,"atanh",lQr),lr(r,"avercos",pQr),lr(r,"aversin",dQr),lr(r,"bernoulli",gQr),lr(r,"besselj0",mQr),lr(r,"besselj1",yQr),lr(r,"bessely0",hQr),lr(r,"bessely1",qQr),lr(r,"binet",bQr),lr(r,"cbrt",wQr),lr(r,"ceil",EQr),lr(r,"ceil10",NQr),lr(r,"ceil2",SQr),lr(r,"cos",OQr),lr(r,"cosh",AQr),lr(r,"cosm1",_Qr),lr(r,"cospi",TQr),lr(r,"cot",IQr),lr(r,"coth",RQr),lr(r,"covercos",LQr),lr(r,"coversin",PQr),lr(r,"deg2rad",FQr),lr(r,"digamma",jQr),lr(r,"eta",MQr),lr(r,"ellipe",BQr),lr(r,"ellipk",kQr),lr(r,"erf",CQr),lr(r,"erfc",VQr),lr(r,"erfcinv",UQr),lr(r,"erfinv",GQr),lr(r,"exp",DQr),lr(r,"exp10",HQr),lr(r,"exp2",zQr),lr(r,"expit",WQr),lr(r,"expm1",XQr),lr(r,"expm1rel",JQr),lr(r,"sin",YQr),lr(r,"sqrt",xQr),lr(r,"zeta",ZQr),r}aD.exports=$Qr});var uD=s((OVe,sD)=>{"use strict";var QQr=Qr(),KQr=C_(),rKr=JR(),eKr=nD();function tKr(r){return QQr(r,"tools",rKr({})),r=KQr(r),r=eKr(r),r}sD.exports=tKr});var fD=s((AVe,vD)=>{"use strict";var iKr=D1(),oD=iKr();function aKr(){return typeof oD.BigInt=="function"&&typeof BigInt=="function"&&typeof oD.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}vD.exports=aKr});var lD=s((_Ve,cD)=>{"use strict";var nKr=fD();cD.exports=nKr});var gD=s((TVe,dD)=>{"use strict";var pD=Dr();function sKr(r){var e,t,i,a,n,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,a=pD(r[0]),u=1;u<t;u++)if(n=pD(r[u]),e&&n<a?e=!1:i&&n>a&&(i=!1),i||e)a=n;else return 0;return i&&e?3:i?1:2}dD.exports=sKr});var W3=s((IVe,mD)=>{"use strict";var uKr=gD();mD.exports=uKr});var hD=s((RVe,yD)=>{"use strict";function oKr(r,e){return e&&(r===2||r===3)}yD.exports=oKr});var bD=s((LVe,qD)=>{"use strict";function vKr(r,e){return e&&(r===1||r===3)}qD.exports=vKr});var ED=s((PVe,wD)=>{"use strict";var fKr=cs();function cKr(r,e,t,i,a){var n;return r===0||a===0?!1:(n=fKr(e,t,i),r===n[1]-n[0]+1)}wD.exports=cKr});var SD=s((FVe,ND)=>{"use strict";function lKr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}ND.exports=lKr});var AD=s((jVe,OD)=>{"use strict";function pKr(r){var e,t,i,a,n,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,a=this._offset,this._order==="column-major"){for(u=0;u<i;u++)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}for(u=i-1;u>=0;u--)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}OD.exports=pKr});var TD=s((MVe,_D)=>{"use strict";function dKr(r,e){var t,i,a,n,u,o;if(a=this._ndims,a===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,n=this._offset,this._order==="column-major"){for(o=0;o<a;o++)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}for(o=a-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}_D.exports=dKr});var RD=s((BVe,ID)=>{"use strict";function gKr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}ID.exports=gKr});var PD=s((kVe,LD)=>{"use strict";function mKr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}LD.exports=mKr});var jD=s((CVe,FD)=>{"use strict";var yKr=it(),hKr=at();function qKr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(yKr(t),hKr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}FD.exports=qKr});var kD=s((VVe,BD)=>{"use strict";var bKr=Yr().isPrimitive,wKr=V(),MD=/[-\/\\^$*+?.()|[\]{}]/g;function EKr(r){var e,t,i;if(!bKr(r))throw new TypeError(wKr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(MD,"\\$&"):(t=r.substring(1,i),t=t.replace(MD,"\\$&"),r=r[0]+t+r.substring(i),r)}BD.exports=EKr});var VD=s((UVe,CD)=>{"use strict";var NKr=kD();CD.exports=NKr});var GD=s((GVe,UD)=>{"use strict";var SKr=RegExp.prototype.exec;UD.exports=SKr});var HD=s((DVe,DD)=>{"use strict";var OKr=GD();function AKr(r){try{return OKr.call(r),!0}catch{return!1}}DD.exports=AKr});var WD=s((HVe,zD)=>{"use strict";var _Kr=ga(),TKr=re(),IKr=HD(),RKr=_Kr();function LKr(r){return typeof r=="object"?r instanceof RegExp?!0:RKr?IKr(r):TKr(r)==="[object RegExp]":!1}zD.exports=LKr});var JD=s((zVe,XD)=>{"use strict";var PKr=WD();XD.exports=PKr});var xD=s((WVe,YD)=>{"use strict";function FKr(r,e,t){return r.replace(e,t)}YD.exports=FKr});var qi=s((XVe,ZD)=>{"use strict";var jKr=xD();ZD.exports=jKr});var QD=s((JVe,$D)=>{"use strict";var MKr=VD(),BKr=qr(),X3=Yr().isPrimitive,kKr=JD(),J3=V(),CKr=qi();function VKr(r,e,t){if(!X3(r))throw new TypeError(J3("invalid argument. First argument must be a string. Value: `%s`.",r));if(X3(e))e=new RegExp(MKr(e),"g");else if(!kKr(e))throw new TypeError(J3("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!X3(t)&&!BKr(t))throw new TypeError(J3("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return CKr(r,e,t)}$D.exports=VKr});var rH=s((YVe,KD)=>{"use strict";var UKr=QD();KD.exports=UKr});var tH=s((xVe,eH)=>{"use strict";var GKr=rH(),Y3=it(),x3=at(),DKr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function HKr(){var r,e,t,i,a,n,u;if(e=this._shape.length,a=this._dtype,i="ndarray( '"+a+"', ",r="",this._length<=100)if(a==="complex64"||a==="complex128")for(u=0;u<this._length;u++)n=this.iget(u),r+=Y3(n)+", "+x3(n),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(a==="complex64"||a==="complex128")for(u=0;u<3;u++)n=this.iget(u),r+=Y3(n)+", "+x3(n),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",a==="complex64"||a==="complex128")for(u=2;u>=0;u--)n=this.iget(this._length-1-u),r+=Y3(n)+", "+x3(n),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=DKr[this.dtype],i+=GKr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}eH.exports=HKr});var aH=s((ZVe,iH)=>{"use strict";var zKr=typeof ArrayBuffer=="function"?ArrayBuffer:null;iH.exports=zKr});var sH=s(($Ve,nH)=>{"use strict";var WKr=x0(),XKr=ge(),eu=aH();function JKr(){var r,e,t;if(typeof eu!="function")return!1;try{t=new eu(16),r=WKr(t)&&typeof eu.isView=="function",r&&(e=new XKr(t),e[0]=-3.14,e[1]=NaN,r=r&&eu.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}nH.exports=JKr});var oH=s((QVe,uH)=>{"use strict";var YKr=sH();uH.exports=YKr});var fH=s((KVe,vH)=>{"use strict";var xKr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;vH.exports=xKr});var lH=s((rUe,cH)=>{"use strict";function ZKr(){throw new Error("not implemented")}cH.exports=ZKr});var tu=s((eUe,pH)=>{"use strict";var $Kr=oH(),QKr=fH(),KKr=lH(),Z3;$Kr()?Z3=QKr:Z3=KKr;pH.exports=Z3});var gH=s((tUe,dH)=>{"use strict";var rre=re(),ere=typeof DataView=="function";function tre(r){return ere&&r instanceof DataView||rre(r)==="[object DataView]"}dH.exports=tre});var yH=s((iUe,mH)=>{"use strict";var ire=gH();mH.exports=ire});var qH=s((aUe,hH)=>{"use strict";var are=typeof DataView=="function"?DataView:null;hH.exports=are});var EH=s((nUe,wH)=>{"use strict";var nre=yH(),sre=tu(),bH=qH();function ure(){var r,e,t;if(typeof bH!="function")return!1;try{t=new sre(24),e=new bH(t,8),r=nre(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}wH.exports=ure});var SH=s((sUe,NH)=>{"use strict";var ore=EH();NH.exports=ore});var AH=s((uUe,OH)=>{"use strict";var vre=typeof DataView=="function"?DataView:void 0;OH.exports=vre});var TH=s((oUe,_H)=>{"use strict";function fre(){throw new Error("not implemented")}_H.exports=fre});var l0=s((vUe,IH)=>{"use strict";var cre=SH(),lre=AH(),pre=TH(),$3;cre()?$3=lre:$3=pre;IH.exports=$3});var LH=s((fUe,RH)=>{"use strict";var dre=typeof BigInt=="function"?BigInt:void 0;RH.exports=dre});var FH=s((cUe,PH)=>{"use strict";var gre=LH();PH.exports=gre});var jH=s((lUe,mre)=>{mre.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var kH=s((pUe,BH)=>{"use strict";var MH=jH();function yre(){var r;return arguments.length===0?MH.all.slice():(r=MH[arguments[0]],r?r.slice():[])}BH.exports=yre});var VH=s((dUe,CH)=>{"use strict";function hre(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}CH.exports=hre});var GH=s((gUe,UH)=>{"use strict";var qre=Qr(),bre=Va();function wre(r,e){var t,i,a;for(t=bre(e),a=0;a<t.length;a++)i=t[a],qre(r,i,e[i]);return r}UH.exports=wre});var K3=s((mUe,HH)=>{"use strict";var Ere=D(),Q3=kH(),DH=VH(),Nre=GH();Ere(Q3,"enum",DH);Nre(Q3,DH());HH.exports=Q3});var zH=s((yUe,Sre)=>{Sre.exports=["row-major","column-major"]});var XH=s((hUe,WH)=>{"use strict";var Ore=zH();function Are(){return Ore.slice()}WH.exports=Are});var YH=s((qUe,JH)=>{"use strict";function _re(){return{"row-major":1,"column-major":2}}JH.exports=_re});var p0=s((bUe,ZH)=>{"use strict";var Tre=D(),xH=XH(),Ire=YH();Tre(xH,"enum",Ire);ZH.exports=xH});var $H=s((wUe,Rre)=>{Rre.exports=["throw","clamp","wrap"]});var KH=s((EUe,QH)=>{"use strict";var Lre=$H();function Pre(){return Lre.slice()}QH.exports=Pre});var ez=s((NUe,rz)=>{"use strict";function Fre(){return{throw:1,clamp:2,wrap:3}}rz.exports=Fre});var rf=s((SUe,iz)=>{"use strict";var jre=D(),tz=KH(),Mre=ez();jre(tz,"enum",Mre);iz.exports=tz});var sz=s((OUe,nz)=>{"use strict";var bi=xe(),Bre=tu(),kre=l0(),d0=FH(),Cre=K3().enum,Vre=p0().enum,Ure=rf().enum,Gre=Cre(),Dre=Vre(),az=Ure();function Hre(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m;if(v=this._mode||"throw",u=this._submode||[v],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new kre(new Bre(t)),a=this._shape,n=this._strides,i=this._dtype,r=this._bytesPerElement,f=0,o.setInt8(f,bi?1:0),f+=1,o.setInt16(f,Gre[i],bi),f+=2,o.setBigInt64(f,d0(l),bi),c=l*8,f+=8,m=0;m<l;m++)o.setBigInt64(f,d0(a[m]),bi),o.setBigInt64(f+c,d0(n[m]*r),bi),f+=8;for(f+=c,o.setBigInt64(f,d0(this._offset*r),bi),f+=8,o.setInt8(f,Dre[this._order]),f+=1,o.setInt8(f,az[v]),f+=1,o.setBigInt64(f,d0(p),bi),f+=8,m=0;m<p;m++)o.setInt8(f,az[u[m]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(f,e,bi),this.__meta_dataview__=o,o}nz.exports=Hre});var oz=s((AUe,uz)=>{"use strict";var g0=xe(),zre=tt(),Wre=l0(),Xre=Ur(),Jre=4294967295>>>0,Yre=4294967296;function xre(r){var e,t,i,a;return e=new zre(8),r===0||(a=(r&Jre)>>>0,i=Xre(r/Yre),t=new Wre(e.buffer),g0?(t.setUint32(0,a,g0),t.setUint32(4,i,g0)):(t.setUint32(0,i,g0),t.setUint32(4,a,g0))),e}uz.exports=xre});var fz=s((_Ue,vz)=>{"use strict";var m0=xe(),Zre=tt(),$re=l0(),Qre=Ur(),Kre=4294967295>>>0,ree=4294967296,au=new Zre(8),iu=new $re(au.buffer);function eee(r,e,t,i){var a,n,u;if(r===0){for(u=0;u<au.length;u++)e[i]=0,i+=t;return e}for(n=(r&Kre)>>>0,a=Qre(r/ree),m0?(iu.setUint32(0,n,m0),iu.setUint32(4,a,m0)):(iu.setUint32(0,a,m0),iu.setUint32(4,n,m0)),u=0;u<au.length;u++)e[i]=au[u],i+=t;return e}vz.exports=eee});var pz=s((TUe,lz)=>{"use strict";var tee=D(),cz=oz(),iee=fz();tee(cz,"assign",iee);lz.exports=cz});var mz=s((IUe,gz)=>{"use strict";var ef=xe(),aee=tu(),nee=l0(),see=tt(),uee=K3().enum,oee=p0().enum,vee=rf().enum,y0=pz().assign,fee=uee(),cee=oee(),dz=vee();function lee(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y;if(f=this._mode||"throw",o=this._submode||[f],p=this._ndims,m=o.length,i=33+p*16+m,v=this.__meta_dataview__,v&&v.byteLength===i)return v;for(v=new nee(new aee(i)),e=new see(v.buffer),n=this._shape,u=this._strides,a=this._dtype,r=this._bytesPerElement,c=0,v.setInt8(c,ef?1:0),c+=1,v.setInt16(c,fee[a],ef),c+=2,y0(p,e,1,c),l=p*8,c+=8,y=0;y<p;y++)y0(n[y],e,1,c),y0(u[y]*r,e,1,c+l),c+=8;for(c+=l,y0(this._offset*r,e,1,c),c+=8,v.setInt8(c,cee[this._order]),c+=1,v.setInt8(c,dz[f]),c+=1,y0(m,e,1,c),c+=8,y=0;y<m;y++)v.setInt8(c,dz[o[y]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,v.setInt32(c,t,ef),this.__meta_dataview__=v,v}gz.exports=lee});var hz=s((RUe,yz)=>{"use strict";var pee=lD(),wi=D(),Ze=br(),dee=i3(),gee=e3(),mee=W3(),yee=V1(),hee=hD(),qee=bD(),bee=ED(),wee=SD(),Eee=AD(),Nee=TD(),See=RD(),Oee=PD(),Aee=jD(),_ee=tH(),Tee=sz(),Iee=mz();function ie(r,e,t,i,a,n){var u,o,v,f,c;if(!(this instanceof ie))return new ie(r,e,t,i,a,n);for(f=1,c=0;c<t.length;c++)f*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*f:o=null,this._byteLength=o,this._bytesPerElement=dee(r),this._buffer=e,this._dtype=r,this._length=f,this._ndims=t.length,this._offset=a,this._order=n,this._shape=t,this._strides=i,this._accessors=yee(e.get&&e.set),this._iterationOrder=gee(i),u=bee(f,t,i,a,this._iterationOrder),v=mee(i),this._flags={ROW_MAJOR_CONTIGUOUS:qee(v,u),COLUMN_MAJOR_CONTIGUOUS:hee(v,u),READONLY:!1},this.__meta_dataview__=null,this}wi(ie,"name","ndarray");Ze(ie.prototype,"byteLength",function(){return this._byteLength});Ze(ie.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});Ze(ie.prototype,"data",function(){return this._buffer});Ze(ie.prototype,"dtype",function(){return this._dtype});Ze(ie.prototype,"flags",function(){return wee(this._flags)});Ze(ie.prototype,"length",function(){return this._length});Ze(ie.prototype,"ndims",function(){return this._ndims});Ze(ie.prototype,"offset",function(){return this._offset});Ze(ie.prototype,"order",function(){return this._order});Ze(ie.prototype,"shape",function(){return this._shape.slice()});Ze(ie.prototype,"strides",function(){return this._strides.slice()});wi(ie.prototype,"get",Oee);wi(ie.prototype,"iget",Eee);wi(ie.prototype,"set",See);wi(ie.prototype,"iset",Nee);wi(ie.prototype,"toString",_ee);wi(ie.prototype,"toJSON",Aee);wi(ie.prototype,"__array_meta_dataview__",pee()?Tee:Iee);yz.exports=ie});var h0=s((LUe,qz)=>{"use strict";var Ree=hz();qz.exports=Ree});var Ez=s((PUe,wz)=>{"use strict";function bz(r,e,t,i,a,n){var u,o,v,f,c;if(n>=e.length)return r.accessors[0](r.data,i);for(v=[],f=e[n],u=t[n],c=0;c<f;c++)o=bz(r,e,t,i,a,n+1),v.push(o),i+=u;return v}wz.exports=bz});var Sz=s((FUe,Nz)=>{"use strict";var Lee=Fn(),Pee=Ez();function Fee(r,e,t,i,a){var n;if(e.length===0)return[];for(n=0;n<e.length;n++)if(e[n]===0)return[];return Pee(Lee(r),e,t,i,a,0)}Nz.exports=Fee});var nu=s((jUe,Oz)=>{"use strict";var jee=Sz();Oz.exports=jee});var _z=s((MUe,Az)=>{"use strict";var Mee=nu(),Bee=lt();function kee(r,e,t,i,a,n,u,o){var v,f;for(v=0,r[v]="ndarray",v+=1,r[v]="shape",v+=1,f=0;f<i.length;f++)r[v]=i[f],v+=1;for(r[v]="strides",v+=1,f=0;f<a.length;f++)r[v]=a[f],v+=1;return r[v]="offset",v+=1,r[v]=n,v+=1,r[v]="order",v+=1,r[v]=u,v+=1,r[v]="dtype",v+=1,r[v]=t,v+=1,r[v]="length",v+=1,r[v]=i.length===0?1:Bee(i),v+=1,r[v]="capacity",v+=1,r[v]=e,v+=1,r[v]="data",o==="row"?[r]:Mee(r,[r.length,1],[1,1],0,"row-major")}Az.exports=kee});var Iz=s((BUe,Tz)=>{"use strict";var Cee=_z();Tz.exports=Cee});var Pz=s((kUe,Lz)=>{"use strict";var Vee=p0(),Rz=Vee(),Uee=Rz.length;function Gee(r){var e;for(e=0;e<Uee;e++)if(r===Rz[e])return!0;return!1}Lz.exports=Gee});var jz=s((CUe,Fz)=>{"use strict";var Dee=Pz();Fz.exports=Dee});var Bz=s((VUe,Mz)=>{"use strict";function Hee(r){return r.toLowerCase()}Mz.exports=Hee});var fa=s((UUe,kz)=>{"use strict";var zee=Bz();kz.exports=zee});var Vz=s((GUe,Cz)=>{"use strict";var Wee=ma(),Xee=Ki(),Jee=Aa(),Yee=Ma();function xee(r,e){var t,i,a,n;for(a=Yee(r),Wee(r)?i=Xee(a):i=Jee(a),t=r.length,n=0;n<t;n++)if(i(r,n)===e)return!0;return!1}Cz.exports=xee});var Gz=s((DUe,Uz)=>{"use strict";var Zee=Ve(),$ee=ma(),Qee=Ki(),Kee=Ma(),rte=V();function ete(r){var e,t,i;if(!Zee(r))throw new TypeError(rte("invalid argument. Must provide an array-like object. Value: `%s`.",r));return i=Kee(r),$ee(r)&&(e=Qee(i)),t=r.length,e===void 0?a:n;function a(u){var o;for(o=0;o<t;o++)if(r[o]===u)return!0;return!1}function n(u){var o;for(o=0;o<t;o++)if(e(r,o)===u)return!0;return!1}}Uz.exports=ete});var zz=s((HUe,Hz)=>{"use strict";var tte=D(),Dz=Vz(),ite=Gz();tte(Dz,"factory",ite);Hz.exports=Dz});var Yz=s((zUe,Jz)=>{"use strict";var su=be().isPrimitive,ate=ye().isPrimitive,Wz=Nr().isPrimitive,nte=jz(),ste=M2(),tf=fa(),ute=zz().factory,ote=p0(),vte=h0(),fte=lt(),dt=V(),cte=Z2(),lte=H0(),pte=ote(),Xz=["string","number","complex","boolean","date","any"],dte=["ndarray","shape","strides","offset","order","dtype","length","capacity","data"],gte=dte.length,mte=5,yte=ute(Xz);function hte(){return{ndims:0,shape:null,strides:null,offset:-1,order:"",dtype:"",length:-1,capacity:-1,ndarray:null,headerLength:0,rawBuffer:null}}function qte(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!Wz(i));a++){if(!su(i))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "shape" field must only contain nonnegative integers. Value: "%s".',i));t.push(i)}return t}function bte(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!Wz(i));a++){if(!ate(i))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "strides" field must only contain integers. Value: "%s".',i));t.push(i)}return t}function wte(r,e){var t,i,a;if(r[0]!=="ndarray")throw new TypeError(dt('invalid argument. The first field in a range representing an ndarray must equal the string "ndarray", thus marking the beginning of an ndarray range. Value: "%s".',r[0]));for(a=1;a<r.length;a++)if(i=tf(r[a]),i==="shape")e.shape=qte(r,a+1),e.ndims=e.shape.length,a+=e.ndims;else if(i==="strides")e.strides=bte(r,a+1),a+=e.strides.length;else if(i==="offset"){if(a+=1,t=r[a],!su(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "offset" field must be a nonnegative integer. Value: "%s".',t));e.offset=t}else if(i==="order"){if(a+=1,t=tf(r[a]),!nte(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "order" field must be one of the following: "%s". Value: "%s".',pte.join('", "'),t));e.order=t}else if(i==="dtype"){if(a+=1,t=tf(r[a]),!yte(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "dtype" field must be one of the following: "%s". Value: "%s".',Xz.join('", "'),t));e.dtype=t}else if(i==="length"){if(a+=1,t=r[a],!su(t))throw new TypeError('invalid argument. Range representing an ndarray is invalid. "length" field must be a nonnegative integer.');e.length=t}else if(i==="capacity"){if(a+=1,t=r[a],!su(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "capacity" field must be a nonnegative integer. Value: "%s".',t));e.capacity=t}else if(i==="data"){a+=1;break}else throw new TypeError(dt('invalid argument. Range presenting an ndarray is invalid. Unrecognized ndarray field. Value: "%s".',i));return e}function Ete(r,e){return gte+r+e+mte}function Nte(r){var e,t;if(e=r.ndims,r.shape===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "shape" field.');if(r.strides===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "strides" field.');if(e>0&&r.strides.length!==e)throw new TypeError(dt("invalid argument. Range representing an ndarray is invalid. Number of strides does not match the number of dimensions. Number of dimensions: %d. Number of strides: %d.",e,r.strides.length));if(e===0&&(r.strides.length!==1||r.strides[0]!==0))throw new TypeError("invalid argument. Range representing an ndarray is invalid. A zero-dimensional ndarray must have a single stride equal to 0.");if(r.offset===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "offset" field.');if(r.order==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "order" field.');if(r.dtype==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "dtype" field.');if(r.length===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "length" field.');if(t=fte(r.shape),t!==r.length)throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. The "length" field is not consistent with the "shape" field. Expected length: "%s". Computed length: "%s".',r.length,t));if(r.capacity===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "capacity" field.');if(t>0&&!ste(r.capacity,r.shape,r.strides,r.offset))throw new TypeError('invalid argument. Range representing an ndarray is invalid. The "capacity" field is incompatible with the specified ndarray meta data. Ensure that the "offset" field is valid with regard to the "strides" field and that the data buffer has enough elements to satisfy the desired ndarray shape.');return r}function Ste(r){var e;if(!cte(r))throw new TypeError("invalid argument. A range representing an ndarray must be either a single row or a single column.");return e=hte(),e.rawBuffer=lte(r),e=wte(e.rawBuffer,e),e=Nte(e),e.headerLength=Ete(e.ndims,e.strides.length),e.ndarray=new vte("generic",e.rawBuffer,e.shape,e.strides,e.offset+e.headerLength,e.order),e}Jz.exports=Ste});var Zz=s((WUe,xz)=>{"use strict";var Ote=Yz();xz.exports=Ote});var Qz=s((XUe,$z)=>{"use strict";var Ate=typeof String.prototype.trim<"u";$z.exports=Ate});var af=s((JUe,Kz)=>{"use strict";var _te=String.prototype.trim;Kz.exports=_te});var iW=s((YUe,tW)=>{"use strict";var rW=af(),Tte=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,eW="\u180E";function Ite(){return rW.call(Tte)===""&&rW.call(eW)===eW}tW.exports=Ite});var nW=s((xUe,aW)=>{"use strict";var Rte=qi(),Lte=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function Pte(r){return Rte(r,Lte,"$1")}aW.exports=Pte});var uW=s((ZUe,sW)=>{"use strict";var Fte=af();function jte(r){return Fte.call(r)}sW.exports=jte});var Ei=s(($Ue,oW)=>{"use strict";var Mte=Qz(),Bte=iW(),kte=nW(),Cte=uW(),nf;Mte&&Bte()?nf=Cte:nf=kte;oW.exports=nf});var fW=s((QUe,vW)=>{"use strict";function Vte(r){return r===null}vW.exports=Vte});var sf=s((KUe,cW)=>{"use strict";var Ute=fW();cW.exports=Ute});var pW=s((rGe,lW)=>{"use strict";function Gte(r){return r===void 0}lW.exports=Gte});var uf=s((eGe,dW)=>{"use strict";var Dte=pW();dW.exports=Dte});var mW=s((tGe,gW)=>{"use strict";var vf=D(),ff=br(),Hte=ye().isPrimitive,zte=sf(),Wte=uf(),uu=V();function of(r){return Hte(r)||zte(r)||Wte(r)}function Tt(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof Tt))return new Tt(e,t,i);if(!of(e))throw new TypeError(uu("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!of(t))throw new TypeError(uu("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(of(i)){if(i===0)throw new RangeError(uu("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(uu("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}vf(Tt,"name","Slice");ff(Tt.prototype,"start",function(){return this._start});ff(Tt.prototype,"stop",function(){return this._stop});ff(Tt.prototype,"step",function(){return this._step});vf(Tt.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});vf(Tt.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});gW.exports=Tt});var Qa=s((iGe,yW)=>{"use strict";var Xte=mW();yW.exports=Xte});var qW=s((aGe,hW)=>{"use strict";var Jte=Qa(),Yte=qt();function xte(r){return r instanceof Jte||Yte(r)==="Slice"}hW.exports=xte});var wW=s((nGe,bW)=>{"use strict";var Zte=qW();bW.exports=Zte});var SW=s((sGe,NW)=>{"use strict";var cf=D(),EW=br(),$te=ye().isPrimitive,Qte=sf(),Kte=uf(),rie=wW(),eie=V();function tie(r){return $te(r)||Qte(r)||Kte(r)||rie(r)}function Te(){var r,e,t,i,a;if(r=arguments.length,!(this instanceof Te)){if(r===1)return new Te(arguments[0]);if(r===2)return new Te(arguments[0],arguments[1]);if(r===3)return new Te(arguments[0],arguments[1],arguments[2]);if(r===4)return new Te(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Te(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],a=0;a<r;a++)t.push(arguments[a]);return e=Object.create(Te.prototype),Te.apply(e,t)}for(this._data=[],a=0;a<r;a++){if(i=arguments[a],!tie(i))throw new TypeError(eie("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",a,i));this._data.push(i===void 0?null:i)}return this}cf(Te,"name","MultiSlice");EW(Te.prototype,"ndims",function(){return this._data.length});EW(Te.prototype,"data",function(){return this._data.slice()});cf(Te.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});cf(Te.prototype,"toJSON",function(){var e,t,i,a;for(e=this._data,t={type:"MultiSlice",data:[]},a=0;a<e.length;a++)i=e[a],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});NW.exports=Te});var ou=s((uGe,OW)=>{"use strict";var iie=SW();OW.exports=iie});var _W=s((oGe,AW)=>{"use strict";var aie=/(?:\s*-\s*)(?=\d+)(\d+)$/;AW.exports=aie});var IW=s((vGe,TW)=>{"use strict";var nie=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;TW.exports=nie});var PW=s((fGe,LW)=>{"use strict";var RW=Ur(),sie=_W(),uie=IW();function oie(r,e,t,i){var a;if(r==="end")return e;if(a=r.match(sie),a){if(r=e-parseInt(a[1],10),r<0){if(i)return-2;r=0}return r}return a=r.match(uie),a?(r=parseFloat(a[1]),r<1?i?-2:-1:t&&e>0&&r!==1?RW((e-1)/r):RW(e/r)):-1}LW.exports=oie});var jW=s((cGe,FW)=>{"use strict";var vie=/\s*:\s*/;FW.exports=vie});var BW=s((lGe,MW)=>{"use strict";var fie=/^[-+]?[0-9]+$/;MW.exports=fie});var CW=s((pGe,kW)=>{"use strict";var cie=/^end/;kW.exports=cie});var UW=s((dGe,VW)=>{"use strict";function lie(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}VW.exports=lie});var DW=s((gGe,GW)=>{"use strict";function pie(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}GW.exports=pie});var zW=s((mGe,HW)=>{"use strict";function die(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}HW.exports=die});var xW=s((yGe,YW)=>{"use strict";var WW=Qa(),gie=Ei(),XW=PW(),mie=jW(),lf=BW(),JW=CW(),Ka=UW(),ca=DW(),yie=zW();function hie(r,e,t){var i,a,n;if(i=gie(r).split(mie),a=i.length,a<2||a>3)return Ka();if(a===3)if(n=i[2],n.length===0)i[2]=1;else{if(lf.test(n)===!1)return Ka();if(n=parseInt(n,10),n===0)return yie();i[2]=n}else i.push(1);if(n=i[0],n.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(JW.test(n)){if(n=XW(n,e,i[2]<0,t),n<0)return n===-2?ca():Ka();i[2]<0&&n>=e&&(n-=1),i[0]=n}else if(lf.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0){if(t)return ca();n=0}}else if(n>=e){if(t)return ca();i[2]<0?n=e-1:n=e}i[0]=n}else return Ka();if(n=i[1],n.length===0)i[2]<0?i[1]=null:i[1]=e;else if(JW.test(n)){if(n=XW(n,e,i[2]<0,t),n<0)return n===-2?ca():Ka();i[1]=n}else if(lf.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0)if(i[2]>0){if(t)return ca();n=0}else{if(t&&n<-1)return ca();n=null}}else if(n>e){if(t)return ca();n=e}i[1]=n}else return Ka();return e===0?new WW(0,0,i[2]):new WW(i[0],i[1],i[2])}YW.exports=hie});var $W=s((hGe,ZW)=>{"use strict";var qie=xW();ZW.exports=qie});var KW=s((qGe,QW)=>{"use strict";function bie(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}QW.exports=bie});var eX=s((bGe,rX)=>{"use strict";function wie(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}rX.exports=wie});var iX=s((wGe,tX)=>{"use strict";function Eie(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}tX.exports=Eie});var nX=s((EGe,aX)=>{"use strict";function Nie(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}aX.exports=Nie});var uX=s((NGe,sX)=>{"use strict";var Sie=/\s*,\s*/;sX.exports=Sie});var vX=s((SGe,oX)=>{"use strict";var Oie=/^[-+]?[0-9]+$/;oX.exports=Oie});var lX=s((OGe,cX)=>{"use strict";var Aie=Ei(),_ie=Qa(),Tie=ou(),Iie=$W(),Rie=KW(),Lie=eX(),Pie=iX(),fX=nX(),Fie=uX(),jie=vX();function Mie(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(o=e.length,i=Aie(r).split(Fie),v=i.length,n=!1,a=[],l=0,c=0;c<v;c++){if(f=i[c],f==="..."){if(n)return Rie();for(n=!0,p=0;p<o-v+1;p++)a.push(new _ie(0,e[l],1)),l+=1;continue}if(u=e[l],jie.test(f)){if(f=parseInt(f,10),t){if(f<0){if(u+f<0)return fX()}else if(f>=u)return fX()}l+=1}else{if(f=Iie(f,u,t),f.code)return f;l+=1}a.push(f)}return a.length!==o?a.length<o?Lie():Pie():Tie.apply(null,a)}cX.exports=Mie});var dX=s((AGe,pX)=>{"use strict";var Bie=lX();pX.exports=Bie});var yX=s((_Ge,mX)=>{"use strict";var kie=Yr().isPrimitive,gX=dX(),Cie=V();function Vie(r,e,t){var i;if(!kie(r))throw new TypeError(Cie('invalid argument. A slice indexing expression must be a string. Value: "%s".',r));if(i=gX(r,e,!0),i.code){if(i.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence.");if(i.code==="ERR_SLICE_INVALID_INCREMENT")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. The increment must be a non-zero integer value.");if(i.code==="ERR_SLICE_TOO_MANY_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression includes excess dimensions.");if(i.code==="ERR_SLICE_INSUFFICIENT_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression has too few dimensions.");if(i.code==="ERR_SLICE_INVALID_ELLIPSIS")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. A subsequence must only contain at most one ellipsis.");if(i.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError("invalid argument. The provided slice indexing expression resolves to a slice exceeding index bounds.");i=gX(r,e,!1)}}return i}mX.exports=Vie});var qX=s((TGe,hX)=>{"use strict";var Uie=yX();hX.exports=Uie});var wX=s((IGe,bX)=>{"use strict";function Gie(r){var e,t,i,a;for(e=r.length,t=[],a=0;a<e;a++)t.push(0);for(i=1,a=e-1;a>=0;a--)t[a]=i,i*=r[a];return t}function Die(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function Hie(r,e){return e==="column-major"?Die(r):Gie(r)}bX.exports=Hie});var NX=s((RGe,EX)=>{"use strict";function zie(r,e){var t,i,a;for(t=r.length,i=1,a=t-1;a>=0;a--)e[a]=i,i*=r[a];return e}function Wie(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function Xie(r,e,t){return e==="column-major"?Wie(r,t):zie(r,t)}EX.exports=Xie});var vu=s((LGe,OX)=>{"use strict";var Jie=D(),SX=wX(),Yie=NX();Jie(SX,"assign",Yie);OX.exports=SX});var _X=s((PGe,AX)=>{"use strict";function xie(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}AX.exports=xie});var IX=s((FGe,TX)=>{"use strict";var Zie=Qa(),q0=_X();function $ie(r,e,t){var i,a,n;if(i=r.start,a=r.stop,n=r.step,n===null&&(n=1),i===null)n>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return q0();i=0}}else if(i>=e){if(t)return q0();n<0?i=e-1:i=e}if(a===null)n>0?a=e:a=null;else if(a<0){if(a=e+a,a<0)if(n>0){if(t)return q0();a=0}else{if(t&&a<-1)return q0();a=null}}else if(a>e){if(t)return q0();a=e}return new Zie(i,a,n)}TX.exports=$ie});var LX=s((jGe,RX)=>{"use strict";var Qie=IX();RX.exports=Qie});var FX=s((MGe,PX)=>{"use strict";function Kie(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}PX.exports=Kie});var BX=s((BGe,MX)=>{"use strict";var rae=ou(),b0=Qa(),eae=LX(),jX=FX();function tae(r,e,t){return r===null?new b0(0,e,1):typeof r=="number"?r>=e?t?jX():new b0(e,e,1):r<0?(r=e+r,r<0?t?jX():new b0(0,0,1):new b0(r,r+1,1)):new b0(r,r+1,1):eae(r,e,t)}function iae(r,e,t){var i,a,n,u;for(i=r.data,a=[],u=0;u<i.length;u++){if(n=tae(i[u],e[u],t),n.code!==void 0)return n;a.push(n)}return rae.apply(null,a)}MX.exports=iae});var CX=s((kGe,kX)=>{"use strict";var aae=BX();kX.exports=aae});var UX=s((CGe,VX)=>{"use strict";function nae(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}VX.exports=nae});var DX=s((VGe,GX)=>{"use strict";var sae=UX();GX.exports=sae});var zX=s((UGe,HX)=>{"use strict";var uae=xa();function oae(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:uae((i-t)/e)}HX.exports=oae});var XX=s((GGe,WX)=>{"use strict";var vae=zX();WX.exports=vae});var YX=s((DGe,JX)=>{"use strict";var fae=XX();function cae(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(fae(e[i]));return t}JX.exports=cae});var ZX=s((HGe,xX)=>{"use strict";var lae=YX();xX.exports=lae});var QX=s((zGe,$X)=>{"use strict";function pae(r){return r.dtype}$X.exports=pae});var rJ=s((WGe,KX)=>{"use strict";var dae=QX();KX.exports=dae});var tJ=s((XGe,eJ)=>{"use strict";var gae=Sn();function mae(r,e){var t=r.shape;return e?gae(t):t}eJ.exports=mae});var aJ=s((JGe,iJ)=>{"use strict";var yae=tJ();iJ.exports=yae});var sJ=s((YGe,nJ)=>{"use strict";var hae=vu(),qae=Sn(),bae="row-major";function wae(r,e){var t,i,a;return a=r.strides,typeof a!="object"||a===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=bae),hae(i,t))):e?qae(a):a}nJ.exports=wae});var oJ=s((xGe,uJ)=>{"use strict";var Eae=sJ();uJ.exports=Eae});var fJ=s((ZGe,vJ)=>{"use strict";function Nae(r,e){var t,i,a;for(i=r.length,t=0,a=0;a<i;a++)e[a]<0&&(t-=e[a]*(r[a]-1));return t}vJ.exports=Nae});var fu=s(($Ge,cJ)=>{"use strict";var Sae=fJ();cJ.exports=Sae});var pJ=s((QGe,lJ)=>{"use strict";var Oae=fu();function Aae(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:Oae(t,e))}lJ.exports=Aae});var gJ=s((KGe,dJ)=>{"use strict";var _ae=pJ();dJ.exports=_ae});var yJ=s((rDe,mJ)=>{"use strict";var Tae=W3(),pf="row-major",Iae="column-major";function Rae(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=Tae(e),t===1||t===3)?pf:t===2?Iae:r.shape.length===0?pf:null)}mJ.exports=Rae});var qJ=s((eDe,hJ)=>{"use strict";var Lae=yJ();hJ.exports=Lae});var wJ=s((tDe,bJ)=>{"use strict";function Pae(r){return r.data}bJ.exports=Pae});var NJ=s((iDe,EJ)=>{"use strict";var Fae=wJ();EJ.exports=Fae});var OJ=s((aDe,SJ)=>{"use strict";function jae(r,e,t){var i,a,n;for(i=r.data,a=t,n=0;n<i.length;n++)a+=e[n]*i[n].start;return a}SJ.exports=jae});var _J=s((nDe,AJ)=>{"use strict";function Mae(r,e,t){var i,a,n,u;for(i=r.data,a=[],n=0;n<t.length;n++)u=t[n],a.push(e[u]*i[u].step);return a}AJ.exports=Mae});var IJ=s((sDe,TJ)=>{"use strict";var Bae=ci(),kae=ge(),Cae=et(),Vae=qa(),Uae=ui(),Gae=wa(),Dae=xi(),Hae=me(),zae=tt(),Wae=ba(),Xae=Ra(),Jae=ja(),Yae={binary:Bae,float64:kae,float32:Cae,generic:Array,int16:Vae,int32:Uae,int8:Gae,uint16:Dae,uint32:Hae,uint8:zae,uint8c:Wae,complex64:Xae,complex128:Jae};TJ.exports=Yae});var LJ=s((uDe,RJ)=>{"use strict";var xae=IJ();function Zae(r){return xae[r]||null}RJ.exports=Zae});var FJ=s((oDe,PJ)=>{"use strict";var $ae=LJ();PJ.exports=$ae});var MJ=s((vDe,jJ)=>{"use strict";var Qae=qr(),Kae=ci(),rne=Qae(Kae.allocUnsafe);jJ.exports=rne});var kJ=s((fDe,BJ)=>{"use strict";var ene=be(),tne=V(),ine=ci();function ane(r){if(!ene(r))throw new TypeError(tne("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return ine.allocUnsafe(r)}BJ.exports=ane});var VJ=s((cDe,CJ)=>{"use strict";var nne=be(),sne=V(),une=ci();function one(r){if(!nne(r))throw new TypeError(sne("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new une(r)}CJ.exports=one});var GJ=s((lDe,UJ)=>{"use strict";var vne=MJ(),fne=kJ(),cne=VJ(),df;vne?df=fne:df=cne;UJ.exports=df});var HJ=s((pDe,DJ)=>{"use strict";function lne(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}DJ.exports=lne});var WJ=s((dDe,zJ)=>{"use strict";var pne=FJ(),dne=GJ(),gne=HJ();function mne(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function yne(r){return gne(dne(r))}function hne(r,e){var t=pne(r);return t?new t(e):null}function qne(r,e){return r==="generic"?mne(e):r==="binary"?yne(e):hne(r,e)}zJ.exports=qne});var gf=s((gDe,XJ)=>{"use strict";var bne=WJ();XJ.exports=bne});var YJ=s((mDe,JJ)=>{"use strict";var wne=gf(),Ene=si();function Nne(r,e,t,i,a){var n,u;return u=t.length,u===0?n=[0]:n=Ene(u),new r(e,wne(e,0),t,n,0,i,{readonly:a})}JJ.exports=Nne});var rY=s((yDe,KJ)=>{"use strict";var xJ=CX(),Sne=DX(),ZJ=ZX(),mf=t3(),One=si(),$J=lt(),Ane=rJ(),_ne=aJ(),Tne=oJ(),Ine=gJ(),Rne=qJ(),yf=NJ(),QJ=V(),Lne=OJ(),Pne=_J(),Fne=YJ();function jne(r,e,t,i){var a,n,u,o,v,f,c,l,p,m;if(u=Ane(r),o=_ne(r,!0),a=Tne(r,!0),n=Ine(r),v=Rne(r),c=o.length,e.ndims!==c)throw new RangeError(QJ("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,yf(r),o,a,n,v,{readonly:!i});if(f=Sne(e),m=xJ(e,o,!0),m.code){if(t)throw new RangeError(QJ("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));m=xJ(e,o,!1),p=ZJ(m),$J(mf(p,f))>0&&(p=One(p.length))}else p=ZJ(m);return $J(p)===0?Fne(l,u,mf(p,f),v,!i):(n=Lne(m,a,n),p=mf(p,f),p.length===0?new l(u,yf(r),[],[0],n,v,{readonly:!i}):(a=Pne(m,a,f),new l(u,yf(r),p,a,n,v,{readonly:!i})))}KJ.exports=jne});var hf=s((hDe,eY)=>{"use strict";var Mne=rY();eY.exports=Mne});var iY=s((qDe,tY)=>{"use strict";var Bne=h0();function kne(r){return r instanceof Bne||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}tY.exports=kne});var nY=s((bDe,aY)=>{"use strict";var Cne=iY();aY.exports=Cne});var uY=s((wDe,sY)=>{"use strict";function Vne(r){var e=r.flags;return e&&e.READONLY===!0}sY.exports=Vne});var vY=s((EDe,oY)=>{"use strict";var Une=uY();oY.exports=Une});var cY=s((NDe,fY)=>{"use strict";var Gne=be().isPrimitive,Dne=Ve(),qf=V();function Hne(r){var e,t,i,a;if(typeof r!="object"||r===null)throw new TypeError(qf("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!Dne(t))throw new TypeError(qf("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],a=0;a<t.length;a++){if(i=t[a],!Gne(i))throw new TypeError(qf("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}fY.exports=Hne});var pY=s((SDe,lY)=>{"use strict";var zne=cY();lY.exports=zne});var bf=s((ODe,dY)=>{"use strict";var Wne="row-major";function Xne(r,e,t,i,a){var n,u;for(n=r-1;n>i;n--)a[n]=t[n];for(n=i;n>=0&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n--);for(n-=1;n>=0;n--)a[n]=t[n];return a}function Jne(r,e,t,i,a){var n,u;for(n=0;n<i;n++)a[n]=t[n];for(n=i;n<r&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n++);for(n+=1;n<r;n++)a[n]=t[n];return a}function Yne(r,e,t,i,a){var n=r.length;if(n===0)return null;if(i<0){if(i+=n,i<0)return null}else if(i>=n)return null;return e===Wne?Xne(n,r,t,i,a):Jne(n,r,t,i,a)}dY.exports=Yne});var mY=s((ADe,gY)=>{"use strict";var xne=si(),Zne=bf();function $ne(r,e,t,i){return Zne(r,e,t,i,xne(r.length))}gY.exports=$ne});var qY=s((_De,hY)=>{"use strict";var Qne=D(),yY=mY(),Kne=bf();Qne(yY,"assign",Kne);hY.exports=yY});var wY=s((TDe,bY)=>{"use strict";var We=ou();function r0e(r){switch(r.length){case 0:return new We;case 1:return new We(r[0]);case 2:return new We(r[0],r[1]);case 3:return new We(r[0],r[1],r[2]);case 4:return new We(r[0],r[1],r[2],r[3]);case 5:return new We(r[0],r[1],r[2],r[3],r[4]);case 6:return new We(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6]);case 8:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]);case 9:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]);case 10:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]);default:return We.apply(null,r)}}bY.exports=r0e});var NY=s((IDe,EY)=>{"use strict";var e0e=wY();EY.exports=e0e});var _Y=s((RDe,AY)=>{"use strict";var wf=D(),t0e=hr(),i0e=de().isPrimitive,a0e=nY(),n0e=vY(),s0e=vr(),SY=Rn(),u0e=si(),o0e=pY(),v0e=lt(),f0e=hf(),c0e=qY().assign,l0e=NY(),cu=V();function OY(r){var e,t,i,a,n,u,o,v,f,c,l;if(!a0e(r))throw new TypeError(cu("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(a={writable:!1},arguments.length>1){if(e=arguments[1],!t0e(e))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(s0e(e,"readonly")){if(!i0e(e.readonly))throw new TypeError(cu("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(a.writable=!e.readonly,a.writable&&n0e(r))throw new Error(cu("invalid option. Cannot write to read-only array."))}}if(t=o0e(r),i=t.length,i<3)throw new TypeError("invalid argument. First argument must be an ndarray having at least three dimensions.");return c=v0e(t),c===0&&(u=!0),c/=t[i-1]*t[i-2],v=i-3,f=t[v],l=-1,o=u0e(i),o[i-1]=null,o[i-2]=null,n={},wf(n,"next",p),wf(n,"return",m),SY&&wf(n,SY,y),n;function p(){var g,d,h;return l+=1,u||l>=c?{done:!0}:(g=o.slice(),d=l0e(o),h=(o[v]+1)%f,o[v]=h,h===0&&(o=c0e(t,"row-major",o,v-1,o)),{value:[g,f0e(r,d,!0,a.writable)],done:!1})}function m(g){return u=!0,arguments.length?{value:g,done:!0}:{done:!0}}function y(){return OY(r,a)}}AY.exports=OY});var IY=s((LDe,TY)=>{"use strict";var p0e=_Y();TY.exports=p0e});var PY=s((PDe,LY)=>{"use strict";var d0e=IY(),RY=nu(),g0e=On();function m0e(r){return[["[ ] ="],[""],[r.ndarray.get()]]}function y0e(r){var e=[["[ : ] ="],[""]];return r.length===0?(e.push(["(empty)"]),e):e.concat(RY(r.ndarray,[r.length,1],[1,1],0,"row-major"))}function w0(r){return g0e("",r)}function h0e(r){var e,t,i,a,n;for(e=r.length,t=e-1,n=e-2,i="",a=0;a<e;a++)a<n?i+=r[a].toString():i+=":",a<t&&(i+=", ");return i}function q0e(r){return RY(r.data,r.shape,r.strides,r.offset,r.order)}function b0e(r,e){var t;for(t=0;t<r.length;t++)e.push(r[t]);return e}function w0e(r,e){var t=w0(e);return t[0]="ndarray: ("+r.join(", ")+")",t}function E0e(r,e){var t=w0(e);return t[0]="[ "+h0e(r)+" ] =",t}function N0e(r){var e,t,i,a,n,u;if(t=r.ndims,t===0)return m0e(r);if(t===1)return y0e(r);for(e=r.shape,i=e[t-1],n=d0e(r.ndarray),a=[w0e(e,i),w0(i)];u=n.next(),!u.done;)a.push(E0e(u.value[0],i)),a.push(w0(i)),b0e(q0e(u.value[1]),a),a.push(w0(i));return a}LY.exports=N0e});var jY=s((FDe,FY)=>{"use strict";var S0e=PY();FY.exports=S0e});var BY=s((jDe,MY)=>{"use strict";var O0e=vu(),A0e=fu(),_0e=gf(),T0e=V(),I0e=h0(),R0e=lt();function L0e(r,e,t){var i,a,n,u;if(i=e.length,i>0?(n=R0e(e),u=O0e(e,t)):(n=1,u=[0]),a=_0e(r,n),a===null)throw new TypeError(T0e("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new I0e(r,a,e,u,A0e(e,u),t)}MY.exports=L0e});var CY=s((MDe,kY)=>{"use strict";var P0e=BY();kY.exports=P0e});var UY=s((BDe,VY)=>{"use strict";var $e=Qr(),F0e=h0(),j0e=Iz(),M0e=lt(),B0e=Zz(),k0e=qX(),C0e=vu(),V0e=hf(),U0e=jY(),G0e=fu(),D0e=nu(),H0e=CY();function z0e(r){return $e(r,"ndarray",F0e),$e(r,"ndarray2range",j0e),$e(r,"numel",M0e),$e(r,"range2ndarray",B0e),$e(r,"seq2multislice",k0e),$e(r,"shape2strides",C0e),$e(r,"slice",V0e),$e(r,"stackedRepr",U0e),$e(r,"strides2offset",G0e),$e(r,"toArray",D0e),$e(r,"zeros",H0e),r}VY.exports=z0e});var DY=s((kDe,GY)=>{"use strict";var W0e=ni();function X0e(r,e,t,i){W0e(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}GY.exports=X0e});var Sr=s((CDe,HY)=>{"use strict";var J0e=DY();HY.exports=J0e});var WY=s((VDe,zY)=>{"use strict";function Y0e(r){return e;function e(){return r}}zY.exports=Y0e});var mr=s((UDe,XY)=>{"use strict";var x0e=WY();XY.exports=x0e});var YY=s((GDe,JY)=>{"use strict";var Z0e=pr();function $0e(r){return r===0&&1/r===Z0e}JY.exports=$0e});var Ni=s((DDe,xY)=>{"use strict";var Q0e=YY();xY.exports=Q0e});var QY=s((HDe,$Y)=>{"use strict";var K0e=Ni(),ZY=z(),Ef=pr();function rse(r,e){return ZY(r)||ZY(e)?NaN:r===Ef||e===Ef?Ef:r===e&&r===0?K0e(r)?r:e:r>e?r:e}$Y.exports=rse});var Nf=s((zDe,KY)=>{"use strict";var ese=QY();KY.exports=ese});var tx=s((WDe,ex)=>{"use strict";var rx=65535;function tse(r,e){var t,i,a,n,u,o;return r>>>=0,e>>>=0,a=r>>>16>>>0,n=e>>>16>>>0,u=(r&rx)>>>0,o=(e&rx)>>>0,t=u*o>>>0,i=a*o+u*n<<16>>>0,t+i>>>0}ex.exports=tse});var ax=s((XDe,ix)=>{"use strict";var ise=tx();ix.exports=ise});var Sf=s((JDe,nx)=>{"use strict";function ase(r,e,t,i,a,n,u){var o,v,f,c,l,p,m;for(o=e.data,v=a.data,c=e.accessors[0],f=a.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=n;return e}nx.exports=ase});var ox=s((YDe,ux)=>{"use strict";var sx=Fn(),nse=Sf(),Of=8;function sse(r,e,t,i,a){var n,u,o,v,f,c;if(r<=0)return i;if(o=sx(e),v=sx(i),o.accessorProtocol||v.accessorProtocol)return t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,nse(r,o,t,n,v,a,u),v.data;if(t===1&&a===1){if(f=r%Of,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<Of)return i;for(c=f;c<r;c+=Of)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,c=0;c<r;c++)i[u]=e[n],n+=t,u+=a;return i}ux.exports=sse});var cx=s((xDe,fx)=>{"use strict";var vx=Fn(),use=Sf(),E0=8;function ose(r,e,t,i,a,n,u){var o,v,f,c,l,p;if(r<=0)return a;if(f=vx(e),c=vx(a),f.accessorProtocol||c.accessorProtocol)return use(r,f,t,i,c,n,u),c.data;if(o=i,v=u,t===1&&n===1){if(l=r%E0,l>0)for(p=0;p<l;p++)a[v]=e[o],o+=t,v+=n;if(r<E0)return a;for(p=l;p<r;p+=E0)a[v]=e[o],a[v+1]=e[o+1],a[v+2]=e[o+2],a[v+3]=e[o+3],a[v+4]=e[o+4],a[v+5]=e[o+5],a[v+6]=e[o+6],a[v+7]=e[o+7],o+=E0,v+=E0;return a}for(p=0;p<r;p++)a[v]=e[o],o+=t,v+=n;return a}fx.exports=ose});var Si=s((ZDe,px)=>{"use strict";var vse=D(),lx=ox(),fse=cx();vse(lx,"ndarray",fse);px.exports=lx});var gx=s(($De,dx)=>{"use strict";function cse(){}dx.exports=cse});var yx=s((QDe,mx)=>{"use strict";var lse=gx();function pse(){return lse.name==="foo"}mx.exports=pse});var qx=s((KDe,hx)=>{"use strict";var dse=yx();hx.exports=dse});var wx=s((rHe,bx)=>{"use strict";var gse=qr(),mse=qx(),yse=V(),hse=z1().REGEXP,qse=mse();function bse(r){if(gse(r)===!1)throw new TypeError(yse("invalid argument. Must provide a function. Value: `%s`.",r));return qse?r.name:hse.exec(r.toString())[1]}bx.exports=bse});var Nx=s((eHe,Ex)=>{"use strict";var wse=wx();Ex.exports=wse});var Ox=s((tHe,Sx)=>{"use strict";var Ese=wa(),Nse=tt(),Sse=ba(),Ose=qa(),Ase=xi(),_se=ui(),Tse=me(),Ise=et(),Rse=ge(),Lse=[Rse,Ise,_se,Tse,Ose,Ase,Ese,Nse,Sse];Sx.exports=Lse});var Ax=s((iHe,Pse)=>{Pse.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var Px=s((aHe,Lx)=>{"use strict";var Fse=qt(),jse=Nx(),Ix=ta(),Mse=Y1(),Bse=ge(),_x=Ox(),Tx=Ax(),lu=Mse()?Ix(Bse):Rx;lu=jse(lu)==="TypedArray"?lu:Rx;function Rx(){}function kse(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof lu)return!0;for(t=0;t<_x.length;t++)if(r instanceof _x[t])return!0;for(;r;){for(e=Fse(r),t=0;t<Tx.length;t++)if(Tx[t]===e)return!0;r=Ix(r)}return!1}Lx.exports=kse});var jx=s((nHe,Fx)=>{"use strict";var Cse=Px();Fx.exports=Cse});var Bx=s((sHe,Mx)=>{"use strict";var Vse=Ra(),Use=ja(),Gse=[Use,Vse];Mx.exports=Gse});var kx=s((uHe,Dse)=>{Dse.exports=["Complex64Array","Complex128Array"]});var Gx=s((oHe,Ux)=>{"use strict";var Hse=qt(),zse=ta(),Cx=Bx(),Vx=kx();function Wse(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<Cx.length;t++)if(r instanceof Cx[t])return!0;for(;r;){for(e=Hse(r),t=0;t<Vx.length;t++)if(Vx[t]===e)return!0;r=zse(r)}return!1}Ux.exports=Wse});var Hx=s((vHe,Dx)=>{"use strict";var Xse=Gx();Dx.exports=Xse});var Wx=s((fHe,zx)=>{"use strict";var Jse=V();function Yse(r,e){if(typeof e!="function")throw new TypeError(Jse("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}zx.exports=Yse});var Jx=s((cHe,Xx)=>{"use strict";var xse=Wx();Xx.exports=xse});var xx=s((lHe,Yx)=>{"use strict";var Zse=wa(),$se=tt(),Qse=ba(),Kse=qa(),rue=xi(),eue=ui(),tue=me(),iue=et(),aue=ge(),nue=Ra(),sue=ja(),uue=[[aue,"Float64Array"],[iue,"Float32Array"],[eue,"Int32Array"],[tue,"Uint32Array"],[Kse,"Int16Array"],[rue,"Uint16Array"],[Zse,"Int8Array"],[$se,"Uint8Array"],[Qse,"Uint8ClampedArray"],[nue,"Complex64Array"],[sue,"Complex128Array"]];Yx.exports=uue});var $x=s((pHe,Zx)=>{"use strict";var oue=Jx(),vue=qt(),fue=ta(),rn=xx();function cue(r){var e,t;for(t=0;t<rn.length;t++)if(oue(r,rn[t][0]))return rn[t][1];for(;r;){for(e=vue(r),t=0;t<rn.length;t++)if(e===rn[t][1])return rn[t][1];r=fue(r)}}Zx.exports=cue});var Kx=s((dHe,Qx)=>{"use strict";var lue=jx(),pue=Hx(),due=Sa(),gue=Oa(),mue=V(),yue=$x();function hue(r){var e,t,i;if(lue(r))e=r;else if(pue(r))r.BYTES_PER_ELEMENT===8?e=due(r,0):e=gue(r,0);else throw new TypeError(mue("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:yue(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}Qx.exports=hue});var Or=s((gHe,rZ)=>{"use strict";var que=Kx();rZ.exports=que});var Af=s((mHe,eZ)=>{"use strict";var bue=ya(),wue=Ur(),Eue=bue-1;function Nue(){var r=wue(1+Eue*Math.random());return r>>>0}eZ.exports=Nue});var jf=s((yHe,lZ)=>{"use strict";var It=D(),Oi=br(),tZ=Sr(),_f=vr(),Sue=hr(),Oue=Ve(),iZ=bt(),Aue=de().isPrimitive,aZ=nt().isPrimitive,vZ=sa(),fZ=ya(),Ie=me(),_ue=Nf(),Ff=ax(),en=Si(),Tue=Or(),Le=V(),nZ=Af(),ue=624,Tf=397,sZ=fZ>>>0,Iue=19650218>>>0,If=2147483648>>>0,Rf=2147483647>>>0,Rue=1812433253>>>0,Lue=1664525>>>0,Pue=1566083941>>>0,Fue=2636928640>>>0,jue=4022730752>>>0,Mue=2567483615>>>0,Lf=[0>>>0,Mue>>>0],cZ=1/(vZ+1),Bue=67108864>>>0,kue=2147483648>>>0,Pf=1>>>0,Cue=vZ*cZ,pu=1,du=3,Ai=2,_i=ue+3,Re=ue+5,N0=ue+6;function uZ(r,e){var t;return e?t="option":t="argument",r.length<N0+1?new RangeError(Le("invalid %s. `state` array has insufficient length.",t)):r[0]!==pu?new RangeError(Le("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,pu,r[0])):r[1]!==du?new RangeError(Le("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,du,r[1])):r[Ai]!==ue?new RangeError(Le("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ue,r[Ai])):r[_i]!==1?new RangeError(Le("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[_i])):r[Re]!==r.length-N0?new RangeError(Le("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-N0,r[Re])):null}function oZ(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=Ff(t,Rue)+i>>>0;return r}function Vue(r,e,t,i){var a,n,u,o;for(n=1,u=0,o=_ue(e,i);o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=Ff(a,Lue)>>>0,r[n]=(r[n]>>>0^a)+t[u]+u>>>0,n+=1,u+=1,n>=e&&(r[0]=r[e-1],n=1),u>=i&&(u=0);for(o=e-1;o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=Ff(a,Pue)>>>0,r[n]=(r[n]>>>0^a)-n>>>0,n+=1,n>=e&&(r[0]=r[e-1],n=1);return r[0]=kue,r}function Uue(r){var e,t,i,a;for(a=ue-Tf,t=0;t<a;t++)e=r[t]&If|r[t+1]&Rf,r[t]=r[t+Tf]^e>>>1^Lf[e&Pf];for(i=ue-1;t<i;t++)e=r[t]&If|r[t+1]&Rf,r[t]=r[t-a]^e>>>1^Lf[e&Pf];return e=r[i]&If|r[0]&Rf,r[i]=r[Tf-1]^e>>>1^Lf[e&Pf],r}function Gue(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!Sue(r))throw new TypeError(Le("invalid argument. Options argument must be an object. Value: `%s`.",r));if(_f(r,"copy")&&(i.copy=r.copy,!Aue(r.copy)))throw new TypeError(Le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(_f(r,"state")){if(t=r.state,i.state=!0,!iZ(t))throw new TypeError(Le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=uZ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ie(t.length),en(t.length,t,1,e,1)),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,t[Re])}if(a===void 0)if(_f(r,"seed"))if(a=r.seed,i.seed=!0,aZ(a)){if(a>sZ)throw new RangeError(Le("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else{if(Oue(a)===!1||a.length<1)throw new TypeError(Le("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a.length===1){if(a=a[0],!aZ(a))throw new TypeError(Le("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a>sZ)throw new RangeError(Le("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else n=a.length,e=new Ie(N0+n),e[0]=pu,e[1]=du,e[Ai]=ue,e[_i]=1,e[_i+1]=ue,e[Re]=n,en.ndarray(n,a,1,0,e,1,Re+1),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,n),t=oZ(t,ue,Iue),t=Vue(t,ue,a,n)}else a=nZ()>>>0}else a=nZ()>>>0;return t===void 0&&(e=new Ie(N0+1),e[0]=pu,e[1]=du,e[Ai]=ue,e[_i]=1,e[_i+1]=ue,e[Re]=1,e[Re+1]=a,t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,1),t=oZ(t,ue,a)),It(y,"NAME","mt19937"),Oi(y,"seed",o),Oi(y,"seedLength",v),tZ(y,"state",l,p),Oi(y,"stateLength",f),Oi(y,"byteLength",c),It(y,"toJSON",m),It(y,"MIN",0),It(y,"MAX",fZ),It(y,"normalized",g),It(g,"NAME",y.NAME),Oi(g,"seed",o),Oi(g,"seedLength",v),tZ(g,"state",l,p),Oi(g,"stateLength",f),Oi(g,"byteLength",c),It(g,"toJSON",m),It(g,"MIN",0),It(g,"MAX",Cue),y;function o(){var d=e[Re];return en(d,a,1,new Ie(d),1)}function v(){return e[Re]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return en(d,e,1,new Ie(d),1)}function p(d){var h;if(!iZ(d))throw new TypeError(Le("invalid argument. Must provide a Uint32Array. Value: `%s`.",d));if(h=uZ(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?en(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Ie(d.length)),en(d.length,d,1,e,1)),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,e[Re])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=Tue(e),d.params=[],d}function y(){var d,h;return h=e[_i+1],h>=ue&&(t=Uue(t),h=0),d=t[h],e[_i+1]=h+1,d^=d>>>11,d^=d<<7&Fue,d^=d<<15&jue,d^=d>>>18,d>>>0}function g(){var d=y()>>>5,h=y()>>>6;return(d*Bue+h)*cZ}}lZ.exports=Gue});var dZ=s((hHe,pZ)=>{"use strict";var Due=jf(),Hue=Af(),zue=Due({seed:Hue()});pZ.exports=zue});var Wr=s((qHe,mZ)=>{"use strict";var Wue=D(),gZ=dZ(),Xue=jf();Wue(gZ,"factory",Xue);mZ.exports=gZ});var bZ=s((bHe,qZ)=>{"use strict";var yZ=Nr().isPrimitive,Mf=V(),hZ=oe();function Jue(r,e){return!yZ(r)||hZ(r)?new TypeError(Mf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!yZ(e)||hZ(e)?new TypeError(Mf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Mf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}qZ.exports=Jue});var EZ=s((wHe,wZ)=>{"use strict";var Yue=Gr(),xue=pt(),Zue=Ya();function $ue(r,e,t){return e+Yue(xue(Zue*r()),2)*(t-e)}wZ.exports=$ue});var Bf=s((EHe,RZ)=>{"use strict";var Rt=D(),gu=br(),NZ=Sr(),SZ=hr(),OZ=qr(),AZ=vr(),_Z=mr(),Que=Lr(),mu=Wr().factory,TZ=z(),Kue=Or(),yu=V(),roe=bZ(),IZ=EZ();function eoe(){var r,e,t,i,a,n;if(arguments.length===0)e=mu();else if(arguments.length===1){if(r=arguments[0],!SZ(r))throw new TypeError(yu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(AZ(r,"prng")){if(!OZ(r.prng))throw new TypeError(yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=mu(r)}else{if(a=arguments[0],n=arguments[1],i=roe(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!SZ(r))throw new TypeError(yu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(AZ(r,"prng")){if(!OZ(r.prng))throw new TypeError(yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=mu(r)}else e=mu()}return a===void 0?t=y:t=m,Rt(t,"NAME","arcsine"),r&&r.prng?(Rt(t,"seed",null),Rt(t,"seedLength",null),NZ(t,"state",_Z(null),Que),Rt(t,"stateLength",null),Rt(t,"byteLength",null),Rt(t,"toJSON",_Z(null)),Rt(t,"PRNG",e)):(gu(t,"seed",u),gu(t,"seedLength",o),NZ(t,"state",c,l),gu(t,"stateLength",v),gu(t,"byteLength",f),Rt(t,"toJSON",p),Rt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Kue(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return IZ(e,a,n)}function y(g,d){return TZ(g)||TZ(d)||g>=d?NaN:IZ(e,g,d)}}RZ.exports=eoe});var PZ=s((NHe,LZ)=>{"use strict";var toe=Bf(),ioe=toe();LZ.exports=ioe});var MZ=s((SHe,jZ)=>{"use strict";var aoe=D(),FZ=PZ(),noe=Bf();aoe(FZ,"factory",noe);jZ.exports=FZ});var kf=s((OHe,GZ)=>{"use strict";var Lt=D(),hu=br(),BZ=Sr(),kZ=hr(),soe=Mn().isPrimitive,CZ=qr(),VZ=vr(),UZ=mr(),uoe=Lr(),qu=Wr().factory,ooe=z(),voe=Or(),bu=V();function foe(){var r,e,t,i;if(arguments.length===0)e=qu();else if(arguments.length===1&&kZ(arguments[0]))if(r=arguments[0],VZ(r,"prng")){if(!CZ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qu(r);else{if(i=arguments[0],!soe(i))throw new TypeError(bu("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!kZ(r))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(VZ(r,"prng")){if(!CZ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qu(r)}else e=qu()}return i===void 0?t=p:t=l,Lt(t,"NAME","bernoulli"),r&&r.prng?(Lt(t,"seed",null),Lt(t,"seedLength",null),BZ(t,"state",UZ(null),uoe),Lt(t,"stateLength",null),Lt(t,"byteLength",null),Lt(t,"toJSON",UZ(null)),Lt(t,"PRNG",e)):(hu(t,"seed",a),hu(t,"seedLength",n),BZ(t,"state",v,f),hu(t,"stateLength",u),hu(t,"byteLength",o),Lt(t,"toJSON",c),Lt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=voe(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return ooe(m)||m<0||m>1?NaN:e()<=m?1:0}}GZ.exports=foe});var HZ=s((AHe,DZ)=>{"use strict";var coe=kf(),loe=coe();DZ.exports=loe});var XZ=s((_He,WZ)=>{"use strict";var poe=D(),zZ=HZ(),doe=kf();poe(zZ,"factory",doe);WZ.exports=zZ});var ZZ=s((THe,xZ)=>{"use strict";var goe=Rr(),JZ=xr(),moe=wr(),YZ=.00991256303526217;function yoe(r,e){var t,i,a;for(i=JZ(-.5*e*e),t=[],t.push(YZ/i),t.push(e),a=2;a<r;a++)t[a]=goe(-2*moe(YZ/t[a-1]+i)),i=JZ(-.5*t[a]*t[a]);return t.push(0),t}xZ.exports=yoe});var QZ=s((IHe,$Z)=>{"use strict";function hoe(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}$Z.exports=hoe});var e$=s((RHe,r$)=>{"use strict";var KZ=wr();function qoe(r,e,t){var i,a;do i=KZ(r())/e,a=KZ(r());while(-2*a<i*i);return t?i-e:e-i}r$.exports=qoe});var n$=s((LHe,a$)=>{"use strict";var boe=Dr(),t$=xr(),woe=ZZ(),Eoe=QZ(),Noe=e$(),Soe=128,i$=3.442619855899,la=woe(Soe,i$),Ooe=Eoe(la),Aoe=127;function _oe(r,e){return t;function t(){for(var i,a,n,u,o,v,f;;){if(o=2*r()-1,v=e()&Aoe,boe(o)<Ooe[v])return o*la[v];if(v===0)return Noe(r,i$,o<0);if(u=o*la[v],n=u*u,f=v+1,i=t$(-.5*(la[v]*la[v]-n)),a=t$(-.5*(la[f]*la[f]-n)),a+r()*(i-a)<1)return u}}}a$.exports=_oe});var Vf=s((PHe,o$)=>{"use strict";var Ti=D(),wu=br(),s$=Sr(),Toe=qr(),Ioe=hr(),Roe=de().isPrimitive,Eu=vr(),Loe=bt(),Cf=Wr().factory,u$=mr(),Poe=Lr(),Foe=Ur(),joe=ya(),Moe=Or(),S0=V(),Boe=n$();function koe(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!Ioe(r))throw new TypeError(S0("invalid argument. Must provide an object. Value: `%s`.",r));if(Eu(r,"copy")&&(a.copy=r.copy,!Roe(r.copy)))throw new TypeError(S0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Eu(r,"prng")){if(!Toe(r.prng))throw new TypeError(S0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Eu(r,"state")){if(a.state=r.state,!Loe(r.state))throw new TypeError(S0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Eu(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(S0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(t=Cf(a),e=t.normalized):(t=Cf({seed:Foe(1+joe*e()),copy:a.copy}),a.seed=null):(t=Cf(a),e=t.normalized),i=Boe(e,t),Ti(i,"NAME","improved-ziggurat"),a.seed===null?(Ti(i,"seed",null),Ti(i,"seedLength",null)):(wu(i,"seed",n),wu(i,"seedLength",u)),r&&r.prng?(s$(i,"state",u$(null),Poe),Ti(i,"stateLength",null),Ti(i,"byteLength",null),Ti(i,"toJSON",u$(null))):(s$(i,"state",f,c),wu(i,"stateLength",o),wu(i,"byteLength",v),Ti(i,"toJSON",l)),Ti(i,"PRNG",e),i;function n(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=Moe(t.state),p.params=[],p}}o$.exports=koe});var f$=s((FHe,v$)=>{"use strict";var Coe=Vf(),Voe=Coe();v$.exports=Voe});var Ii=s((jHe,l$)=>{"use strict";var Uoe=D(),c$=f$(),Goe=Vf();Uoe(c$,"factory",Goe);l$.exports=c$});var d$=s((MHe,p$)=>{"use strict";var Doe=qr(),Hoe=Doe(Object.assign);p$.exports=Hoe});var m$=s((BHe,g$)=>{"use strict";var zoe=Object.assign;g$.exports=zoe});var h$=s((kHe,y$)=>{"use strict";var Woe=typeof Object.getOwnPropertySymbols<"u";y$.exports=Woe});var w$=s((CHe,b$)=>{"use strict";var q$=Ba(),Xoe=q$.getOwnPropertySymbols;function Joe(r){return Xoe(q$(r))}b$.exports=Joe});var N$=s((VHe,E$)=>{"use strict";function Yoe(){return[]}E$.exports=Yoe});var O$=s((UHe,S$)=>{"use strict";var xoe=h$(),Zoe=w$(),$oe=N$(),Uf;xoe?Uf=Zoe:Uf=$oe;S$.exports=Uf});var _$=s((GHe,A$)=>{"use strict";var Qoe=Va(),Koe=O$(),r1e=kn();function e1e(r){var e,t,i;for(e=Qoe(r),t=Koe(r),i=0;i<t.length;i++)r1e(r,t[i])&&e.push(t[i]);return e}A$.exports=e1e});var I$=s((DHe,T$)=>{"use strict";var t1e=_$();T$.exports=t1e});var P$=s((HHe,L$)=>{"use strict";var i1e=I$(),R$=Ba(),a1e=V();function n1e(r){var e,t,i,a,n,u,o;if(r==null)throw new TypeError(a1e("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(n=R$(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=i1e(R$(e)),a=t.length,o=0;o<a;o++)i=t[o],n[i]=e[i];return n}L$.exports=n1e});var O0=s((zHe,F$)=>{"use strict";var s1e=d$(),u1e=m$(),o1e=P$(),Gf;s1e?Gf=u1e:Gf=o1e;F$.exports=Gf});var k$=s((WHe,B$)=>{"use strict";var j$=Hr().isPrimitive,M$=V();function v1e(r,e){return j$(r)?j$(e)?null:new TypeError(M$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(M$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}B$.exports=v1e});var D$=s((XHe,G$)=>{"use strict";var C$=wr(),V$=Rr(),f1e=Gr(),U$=1/3;function c1e(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(t<1?(v=t+1-U$,o=1/V$(9*v),c=f1e(r(),1/t)):(v=t-U$,o=1/V$(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,a=f*f,n=1-.331*a*a,u=.5*a+v*(1-p+C$(p)),l=r(),(l<n||C$(l)<u)&&(i=!1)}return v*p*c}G$.exports=c1e});var W$=s((JHe,z$)=>{"use strict";var Df=Gr(),H$=wr();function l1e(r,e,t){var i,a,n,u,o,v,f,c;for(n=t-1,o=Df(n+n,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),a=Df(u,4),c=8*t-12,c=1-a/c,v<=c?i=!1:(c+=.5*Df(a/(8*t-8),2),v<c&&(c=n*H$(4*f*(1-f)),c+=u*u/2,c>=H$(v)&&(i=!1))));return f}z$.exports=l1e});var J$=s((YHe,X$)=>{"use strict";var p1e=Gr(),Nu=wr();function d1e(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y;for(o=t-1,v=i-1,f=o+v,c=f*Nu(f),u=o/f,a=.5/p1e(f,.5),n=!0;n===!0;)l=e(),m=u+l*a,m>=0&&m<=1&&(p=r(),y=o*Nu(m/o),y+=v*Nu((1-m)/v),y+=c+.5*l*l,y>=Nu(p)&&(n=!1));return m}X$.exports=d1e});var Z$=s((xHe,x$)=>{"use strict";var Hf=xr(),Y$=Gr(),zf=wr();function g1e(r,e,t){for(var i,a,n,u,o,v,f;;)if(u=r(),o=r(),v=Y$(u,1/e),f=Y$(o,1/t),n=v+f,n<=1)return n>0?v/n:(i=zf(u)/e,a=zf(o)/t,i>a?(a-=i,i=0):(i-=a,a=0),Hf(i-zf(Hf(i)+Hf(a))))}x$.exports=g1e});var K$=s((ZHe,Q$)=>{"use strict";var $$=D$(),m1e=W$(),y1e=J$(),h1e=Z$();function q1e(r,e,t,i){var a,n;return t===i&&t>1.5?m1e(r,e,t):t>1&&i>1?y1e(r,e,t,i):t<1&&i<1?h1e(r,t,i):(a=$$(r,e,t),n=$$(r,e,i),a/(a+n))}Q$.exports=q1e});var Yf=s(($He,vQ)=>{"use strict";var Pt=D(),Su=br(),rQ=Sr(),eQ=hr(),tQ=de().isPrimitive,iQ=qr(),tn=vr(),aQ=mr(),b1e=Lr(),nQ=Ii().factory,Ou=Wr().factory,sQ=z(),Wf=Si(),Xf=me(),Jf=bt(),uQ=O0(),w1e=Or(),Ft=V(),E1e=k$(),oQ=K$();function N1e(){var r,e,t,i,a,n,u,o,v;if(o=!0,arguments.length===0)a={copy:!1},n=Ou(a);else if(arguments.length===1){if(a=arguments[0],!eQ(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(tn(a,"copy")&&!tQ(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(tn(a,"prng")){if(!iQ(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(tn(a,"state")&&!Jf(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=uQ({},a),a.copy===!1?o=!1:a.state&&(a.state=Wf(a.state.length,a.state,1,new Xf(a.state.length),1)),a.copy=!1,n=Ou(a)}}else{if(t=arguments[0],i=arguments[1],v=E1e(t,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!eQ(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(tn(a,"copy")&&!tQ(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(tn(a,"prng")){if(!iQ(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(tn(a,"state")&&!Jf(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=uQ({},a),a.copy===!1?o=!1:a.state&&(a.state=Wf(a.state.length,a.state,1,new Xf(a.state.length),1)),a.copy=!1,n=Ou(a)}}else a={copy:!1},n=Ou(a)}return a&&a.prng?e=nQ({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),e=nQ({state:r,copy:!1})),t===void 0?u=h:u=d,Pt(u,"NAME","beta"),a&&a.prng?(Pt(u,"seed",null),Pt(u,"seedLength",null),rQ(u,"state",aQ(null),b1e),Pt(u,"stateLength",null),Pt(u,"byteLength",null),Pt(u,"toJSON",aQ(null)),Pt(u,"PRNG",n)):(Su(u,"seed",f),Su(u,"seedLength",c),rQ(u,"state",m,y),Su(u,"stateLength",l),Su(u,"byteLength",p),Pt(u,"toJSON",g),Pt(u,"PRNG",n),n=n.normalized),u;function f(){return n.seed}function c(){return n.seedLength}function l(){return n.stateLength}function p(){return n.byteLength}function m(){return n.state}function y(q){if(!Jf(q))throw new TypeError(Ft("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));o&&(q=Wf(q.length,q,1,new Xf(q.length),1)),n.state=q}function g(){var q={};return q.type="PRNG",q.name=u.NAME,q.state=w1e(n.state),t===void 0?q.params=[]:q.params=[t,i],q}function d(){return oQ(n,e,t,i)}function h(q,w){return sQ(q)||sQ(w)||q<=0||w<=0?NaN:oQ(n,e,q,w)}}vQ.exports=N1e});var cQ=s((QHe,fQ)=>{"use strict";var S1e=Yf(),O1e=S1e();fQ.exports=O1e});var dQ=s((KHe,pQ)=>{"use strict";var A1e=D(),lQ=cQ(),_1e=Yf();A1e(lQ,"factory",_1e);pQ.exports=lQ});var hQ=s((rze,yQ)=>{"use strict";var gQ=Hr().isPrimitive,mQ=V();function T1e(r,e){return gQ(r)?gQ(e)?null:new TypeError(mQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(mQ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}yQ.exports=T1e});var wQ=s((eze,bQ)=>{"use strict";var qQ=wr();function I1e(r,e,t,i,a){var n,u,o,v,f,c,l;for(n=!0;n;){do f=e(),l=1+a*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+qQ(l)),c=r(),(c<o||qQ(c)<v)&&(n=!1)}return 1/t*i*l}bQ.exports=I1e});var Kf=s((tze,LQ)=>{"use strict";var jt=D(),Au=br(),EQ=Sr(),NQ=hr(),xf=bt(),SQ=de().isPrimitive,OQ=qr(),an=vr(),AQ=mr(),R1e=Lr(),_Q=Ii().factory,_u=Wr().factory,TQ=z(),Zf=Rr(),IQ=Gr(),$f=Si(),Qf=me(),L1e=Or(),RQ=O0(),Mt=V(),P1e=hQ(),Tu=wQ(),Iu=1/3;function F1e(){var r,e,t,i,a,n,u,o,v,f,c;if(o=!0,arguments.length===0)a={copy:!1},n=_u(a);else if(arguments.length===1){if(a=arguments[0],!NQ(a))throw new TypeError(Mt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(an(a,"copy")&&!SQ(a.copy))throw new TypeError(Mt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(an(a,"prng")){if(!OQ(a.prng))throw new TypeError(Mt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(an(a,"state")&&!xf(a.state))throw new TypeError(Mt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=RQ({},a),a.copy===!1?o=!1:a.state&&(a.state=$f(a.state.length,a.state,1,new Qf(a.state.length),1)),a.copy=!1,n=_u(a)}}else{if(e=arguments[0],i=arguments[1],v=P1e(e,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!NQ(a))throw new TypeError(Mt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(an(a,"copy")&&!SQ(a.copy))throw new TypeError(Mt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(an(a,"prng")){if(!OQ(a.prng))throw new TypeError(Mt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(an(a,"state")&&!xf(a.state))throw new TypeError(Mt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=RQ({},a),a.copy===!1?o=!1:a.state&&(a.state=$f(a.state.length,a.state,1,new Qf(a.state.length),1)),a.copy=!1,n=_u(a)}}else a={copy:!1},n=_u(a)}return a&&a.prng?t=_Q({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),t=_Q({state:r,copy:!1})),e===void 0?u=A:(e>=1?(u=q,c=e-Iu):(u=w,c=e+1-Iu),f=1/Zf(9*c)),jt(u,"NAME","gamma"),a&&a.prng?(jt(u,"seed",null),jt(u,"seedLength",null),EQ(u,"state",AQ(null),R1e),jt(u,"stateLength",null),jt(u,"byteLength",null),jt(u,"toJSON",AQ(null)),jt(u,"PRNG",n)):(Au(u,"seed",l),Au(u,"seedLength",p),EQ(u,"state",g,d),Au(u,"stateLength",m),Au(u,"byteLength",y),jt(u,"toJSON",h),jt(u,"PRNG",n),n=n.normalized),u;function l(){return n.seed}function p(){return n.seedLength}function m(){return n.stateLength}function y(){return n.byteLength}function g(){return n.state}function d(b){if(!xf(b))throw new TypeError(Mt("invalid argument. Must provide a Uint32Array. Value: `%s`.",b));o&&(b=$f(b.length,b,1,new Qf(b.length),1)),n.state=b}function h(){var b={};return b.type="PRNG",b.name=u.NAME,b.state=L1e(n.state),e===void 0?b.params=[]:b.params=[e,i],b}function q(){return Tu(n,t,i,c,f)}function w(){return Tu(n,t,i,c,f)*IQ(n(),1/e)}function A(b,T){var S,O;return TQ(b)||TQ(T)||b<=0||T<=0?NaN:b<1?(O=b+1-Iu,S=1/Zf(9*O),Tu(n,t,T,O,S)*IQ(n(),1/b)):(O=b-Iu,S=1/Zf(9*O),Tu(n,t,T,O,S))}}LQ.exports=F1e});var FQ=s((ize,PQ)=>{"use strict";var j1e=Kf(),M1e=j1e();PQ.exports=M1e});var nn=s((aze,MQ)=>{"use strict";var B1e=D(),jQ=FQ(),k1e=Kf();B1e(jQ,"factory",k1e);MQ.exports=jQ});var VQ=s((nze,CQ)=>{"use strict";var BQ=Hr().isPrimitive,kQ=V();function C1e(r,e){return BQ(r)?BQ(e)?null:new TypeError(kQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(kQ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}CQ.exports=C1e});var GQ=s((sze,UQ)=>{"use strict";function V1e(r,e,t){return r(e,1)/r(t,1)}UQ.exports=V1e});var r4=s((uze,YQ)=>{"use strict";var Ri=D(),Ru=br(),DQ=Sr(),HQ=hr(),zQ=mr(),U1e=Lr(),Lu=nn().factory,WQ=z(),G1e=Or(),XQ=V(),D1e=VQ(),JQ=GQ();function H1e(){var r,e,t,i,a,n,u;if(arguments.length===0)r=Lu();else if(arguments.length===1){if(i=arguments[0],!HQ(i))throw new TypeError(XQ("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Lu(i)}else{if(e=arguments[0],t=arguments[1],u=D1e(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!HQ(i))throw new TypeError(XQ("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Lu(i)}else r=Lu()}return e===void 0?n=g:n=y,a=r.PRNG,Ri(n,"NAME","betaprime"),i&&i.prng?(Ri(n,"seed",null),Ri(n,"seedLength",null),DQ(n,"state",zQ(null),U1e),Ri(n,"stateLength",null),Ri(n,"byteLength",null),Ri(n,"toJSON",zQ(null))):(Ru(n,"seed",o),Ru(n,"seedLength",v),DQ(n,"state",l,p),Ru(n,"stateLength",f),Ru(n,"byteLength",c),Ri(n,"toJSON",m)),Ri(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=G1e(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return JQ(r,e,t)}function g(d,h){return WQ(d)||WQ(h)||d<=0||h<=0?NaN:JQ(r,d,h)}}YQ.exports=H1e});var ZQ=s((oze,xQ)=>{"use strict";var z1e=r4(),W1e=z1e();xQ.exports=W1e});var KQ=s((vze,QQ)=>{"use strict";var X1e=D(),$Q=ZQ(),J1e=r4();X1e($Q,"factory",J1e);QQ.exports=$Q});var eK=s((fze,rK)=>{"use strict";var Y1e=Ur();function x1e(r){return Y1e(r)===r&&r>0}rK.exports=x1e});var e4=s((cze,tK)=>{"use strict";var Z1e=eK();tK.exports=Z1e});var aK=s((lze,iK)=>{"use strict";function $1e(r){return r>=0&&r<=1}iK.exports=$1e});var sK=s((pze,nK)=>{"use strict";var Q1e=aK();nK.exports=Q1e});var vK=s((dze,oK)=>{"use strict";var K1e=nt().isPrimitive,r2e=Mn().isPrimitive,uK=V();function e2e(r,e){return K1e(r)?r2e(e)?null:new TypeError(uK("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(uK("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}oK.exports=e2e});var cK=s((gze,fK)=>{"use strict";function t2e(r,e,t){var i=0,a;for(a=0;a<e;a++)r()<=t&&(i+=1);return i}fK.exports=t2e});var pK=s((mze,lK)=>{"use strict";var i2e=z();function a2e(r){return r===0||i2e(r)?r:r<0?-1:1}lK.exports=a2e});var Pu=s((yze,dK)=>{"use strict";var n2e=pK();dK.exports=n2e});var mK=s((hze,gK)=>{"use strict";var s2e=Gr(),u2e=1/12,o2e=1/360,v2e=1/1260;function f2e(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=s2e(r,2),(u2e-(o2e-v2e/e)/e)/r}}gK.exports=f2e});var hK=s((qze,yK)=>{"use strict";var t4=Ur(),c2e=Pu(),l2e=Rr(),i4=Dr(),Fu=wr(),ju=mK(),p2e=1/6;function d2e(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P;for(T=t4((e+1)*t),f=e-T+1,S=1-t,O=t/S,c=(e+1)*O,u=e*t*S,n=l2e(u),d=1.15+2.53*n,g=-.0873+.0248*d+.01*t,h=e*t+.5,i=(2.83+5.1/d)*n,y=.92-4.2/d,a=.86*y,w=(T+.5)*Fu((T+1)/(O*f)),w+=ju(T)+ju(e-T);;){if(E=r(),E<=a)return I=E/y-.43,O=I*(2*g/(.5-i4(I))+d)+h,t4(O);if(E>=y?I=r()-.5:(I=E/y-.93,I=c2e(I)*.5-I,E=y*r()),l=.5-i4(I),b=t4(I*(2*g/l+d)+h),!(b<0||b>e))if(E=E*i/(g/(l*l)+d),p=i4(b-T),p>15){if(E=Fu(E),o=p/u,v=(p/3+.625)*p,v+=p2e,v/=u,o*=v+.5,N=-(p*p)/(2*u),E<N-o||E<=N+o&&(m=e-b+1,P=w+(e+1)*Fu(f/m),P+=(b+.5)*Fu(m*O/(b+1)),P+=-(ju(b)+ju(e-b)),E<=P))return b}else{if(q=1,T<b)for(A=T;A<=b;A++)q*=c/A-O;else if(T>b)for(A=b;A<=T;A++)E*=c/A-O;if(E<=q)return b}}}yK.exports=d2e});var wK=s((bze,bK)=>{"use strict";var g2e=cK(),m2e=hK();function qK(r,e,t){return t>.5?e-qK(r,e,1-t):e*t<10?g2e(r,e,t):m2e(r,e,t)}bK.exports=qK});var a4=s((wze,IK)=>{"use strict";var Bt=D(),Mu=br(),EK=Sr(),NK=hr(),SK=qr(),OK=vr(),AK=mr(),y2e=Lr(),_K=z(),h2e=e4(),q2e=sK(),Bu=Wr().factory,b2e=Or(),ku=V(),w2e=vK(),TK=wK();function E2e(){var r,e,t,i,a,n;if(arguments.length===0)e=Bu();else if(arguments.length===1){if(r=arguments[0],!NK(r))throw new TypeError(ku("invalid argument. Options argument must be an object. Value: `%s`.",r));if(OK(r,"prng")){if(!SK(r.prng))throw new TypeError(ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bu(r)}else{if(a=arguments[0],n=arguments[1],i=w2e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!NK(r))throw new TypeError(ku("invalid argument. Options argument must be an object. Value: `%s`.",r));if(OK(r,"prng")){if(!SK(r.prng))throw new TypeError(ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bu(r)}else e=Bu()}return a===void 0?t=y:t=m,Bt(t,"NAME","binomial"),r&&r.prng?(Bt(t,"seed",null),Bt(t,"seedLength",null),EK(t,"state",AK(null),y2e),Bt(t,"stateLength",null),Bt(t,"byteLength",null),Bt(t,"toJSON",AK(null)),Bt(t,"PRNG",e)):(Mu(t,"seed",u),Mu(t,"seedLength",o),EK(t,"state",c,l),Mu(t,"stateLength",v),Mu(t,"byteLength",f),Bt(t,"toJSON",p),Bt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=b2e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return TK(e,a,n)}function y(g,d){return _K(g)||_K(d)||!h2e(g)||!q2e(d)?NaN:TK(e,g,d)}}IK.exports=E2e});var LK=s((Eze,RK)=>{"use strict";var N2e=a4(),S2e=N2e();RK.exports=S2e});var jK=s((Nze,FK)=>{"use strict";var O2e=D(),PK=LK(),A2e=a4();O2e(PK,"factory",A2e);FK.exports=PK});var BK=s((Sze,MK)=>{"use strict";var _2e=Rr(),T2e=wr(),I2e=pt(),R2e=At(),L2e=mi();function P2e(r){var e,t;return e=!0,i;function i(){var a,n,u,o;if(e){do a=r(),n=r();while(a===0);return u=_2e(-2*T2e(a)),o=L2e*n,t=u*R2e(o),e=!1,u*I2e(o)}return e=!0,t}}MK.exports=P2e});var CK=s((Oze,kK)=>{"use strict";var F2e=Rr(),j2e=wr(),M2e=At(),B2e=we(),k2e=M2e(B2e);function C2e(r){var e=F2e(-2*j2e(r));return e*k2e}kK.exports=C2e});var UK=s((Aze,VK)=>{"use strict";var V2e=Rr(),U2e=wr(),G2e=At(),D2e=mi();function H2e(r){var e=V2e(-2*U2e(r)),t=D2e*r;return e*G2e(t)}VK.exports=H2e});var n4=s((_ze,zK)=>{"use strict";var Xe=D(),Cu=br(),GK=Sr(),z2e=hr(),W2e=qr(),X2e=de().isPrimitive,A0=vr(),J2e=bt(),DK=Wr().factory,HK=mr(),Y2e=Lr(),x2e=Or(),_0=V(),Z2e=BK(),$2e=CK(),Q2e=UK();function K2e(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!z2e(r))throw new TypeError(_0("invalid argument. Must provide an object. Value: `%s`.",r));if(A0(r,"copy")&&(a.copy=r.copy,!X2e(r.copy)))throw new TypeError(_0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(A0(r,"prng")){if(!W2e(r.prng))throw new TypeError(_0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(A0(r,"state")){if(a.state=r.state,!J2e(r.state))throw new TypeError(_0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(A0(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(_0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(i=DK(a),e=i.normalized):a.seed=null:(i=DK(a),e=i.normalized),t=Z2e(e),Xe(t,"NAME","box-muller"),a.seed===null?(Xe(t,"seed",null),Xe(t,"seedLength",null)):(Cu(t,"seed",n),Cu(t,"seedLength",u)),r&&r.prng?(GK(t,"state",HK(null),Y2e),Xe(t,"stateLength",null),Xe(t,"byteLength",null),Xe(t,"toJSON",HK(null))):(GK(t,"state",f,c),Cu(t,"stateLength",o),Cu(t,"byteLength",v),Xe(t,"toJSON",l)),Xe(t,"PRNG",e),A0(e,"MIN")?(Xe(t,"MIN",$2e(e.MIN)),Xe(t,"MAX",Q2e(e.MIN))):(Xe(t,"MIN",null),Xe(t,"MAX",null)),t;function n(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=x2e(i.state),p.params=[],p}}zK.exports=K2e});var XK=s((Tze,WK)=>{"use strict";var rve=n4(),eve=rve();WK.exports=eve});var xK=s((Ize,YK)=>{"use strict";var tve=D(),JK=XK(),ive=n4();tve(JK,"factory",ive);YK.exports=JK});var QK=s((Rze,$K)=>{"use strict";var ave=Nr().isPrimitive,nve=Hr().isPrimitive,ZK=V(),sve=oe();function uve(r,e){return!ave(r)||sve(r)?new TypeError(ZK("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):nve(e)?null:new TypeError(ZK("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}$K.exports=uve});var rrr=s((Lze,KK)=>{"use strict";var ove=s0(),vve=we();function fve(r,e,t){return e+t*ove(vve*(r()-.5))}KK.exports=fve});var s4=s((Pze,orr)=>{"use strict";var Li=D(),Vu=br(),err=Sr(),trr=hr(),irr=qr(),arr=vr(),nrr=mr(),cve=Lr(),srr=z(),sn=Ii().factory,lve=Or(),Uu=V(),pve=QK(),urr=rrr();function dve(){var r,e,t,i,a,n,u;if(arguments.length===0)e=sn();else if(arguments.length===1){if(t=arguments[0],!trr(t))throw new TypeError(Uu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(arr(t,"prng")){if(!irr(t.prng))throw new TypeError(Uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=sn({prng:t.prng})}else e=sn(t)}else{if(u=arguments[0],r=arguments[1],n=pve(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!trr(t))throw new TypeError(Uu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(arr(t,"prng")){if(!irr(t.prng))throw new TypeError(Uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=sn({prng:t.prng})}else e=sn(t)}else e=sn()}return u===void 0?a=g:a=y,i=e.PRNG,Li(a,"NAME","cauchy"),t&&t.prng?(Li(a,"seed",null),Li(a,"seedLength",null),err(a,"state",nrr(null),cve),Li(a,"stateLength",null),Li(a,"byteLength",null),Li(a,"toJSON",nrr(null))):(Vu(a,"seed",o),Vu(a,"seedLength",v),err(a,"state",l,p),Vu(a,"stateLength",f),Vu(a,"byteLength",c),Li(a,"toJSON",m)),Li(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=lve(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return urr(e,u,r)}function g(d,h){return srr(d)||srr(h)||h<=0?NaN:urr(e,d,h)}}orr.exports=dve});var frr=s((Fze,vrr)=>{"use strict";var gve=s4(),mve=gve();vrr.exports=mve});var prr=s((jze,lrr)=>{"use strict";var yve=D(),crr=frr(),hve=s4();yve(crr,"factory",hve);lrr.exports=crr});var u4=s((Mze,qrr)=>{"use strict";var Pi=D(),Gu=br(),drr=Sr(),qve=Hr().isPrimitive,grr=hr(),mrr=qr(),yrr=vr(),hrr=mr(),bve=Lr(),wve=z(),un=nn().factory,Eve=Or(),Du=V();function Nve(){var r,e,t,i,a;if(arguments.length===0)r=un();else if(arguments.length===1&&grr(arguments[0]))if(t=arguments[0],yrr(t,"prng")){if(!mrr(t.prng))throw new TypeError(Du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=un({prng:t.prng})}else r=un(t);else{if(a=arguments[0],!qve(a))throw new TypeError(Du("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!grr(t))throw new TypeError(Du("invalid argument. Options argument must be an object. Value: `%s`.",t));if(yrr(t,"prng")){if(!mrr(t.prng))throw new TypeError(Du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=un(a/2,.5,{prng:t.prng})}else r=un(a/2,.5,t)}else r=un(a/2,.5)}return a===void 0?i=m:i=p,e=r.PRNG,Pi(i,"NAME","chisquare"),t&&t.prng?(Pi(i,"seed",null),Pi(i,"seedLength",null),drr(i,"state",hrr(null),bve),Pi(i,"stateLength",null),Pi(i,"byteLength",null),Pi(i,"toJSON",hrr(null))):(Gu(i,"seed",n),Gu(i,"seedLength",u),drr(i,"state",f,c),Gu(i,"stateLength",o),Gu(i,"byteLength",v),Pi(i,"toJSON",l)),Pi(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=Eve(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return r()}function m(y){return wve(y)||y<=0?NaN:r(y/2,.5)}}qrr.exports=Nve});var wrr=s((Bze,brr)=>{"use strict";var Sve=u4(),Ove=Sve();brr.exports=Ove});var T0=s((kze,Nrr)=>{"use strict";var Ave=D(),Err=wrr(),_ve=u4();Ave(Err,"factory",_ve);Nrr.exports=Err});var o4=s((Cze,Rrr)=>{"use strict";var Fi=D(),Hu=br(),Srr=Sr(),Tve=Hr().isPrimitive,Orr=hr(),Arr=qr(),_rr=vr(),Trr=mr(),Ive=Lr(),Rve=z(),on=T0().factory,Lve=Or(),Irr=Rr(),zu=V();function Pve(){var r,e,t,i,a;if(arguments.length===0)r=on();else if(arguments.length===1&&Orr(arguments[0]))if(t=arguments[0],_rr(t,"prng")){if(!Arr(t.prng))throw new TypeError(zu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=on({prng:t.prng})}else r=on(t);else{if(a=arguments[0],!Tve(a))throw new TypeError(zu("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!Orr(t))throw new TypeError(zu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(_rr(t,"prng")){if(!Arr(t.prng))throw new TypeError(zu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=on(a,{prng:t.prng})}else r=on(a,t)}else r=on(a)}return a===void 0?i=m:i=p,e=r.PRNG,Fi(i,"NAME","chi"),t&&t.prng?(Fi(i,"seed",null),Fi(i,"seedLength",null),Srr(i,"state",Trr(null),Ive),Fi(i,"stateLength",null),Fi(i,"byteLength",null),Fi(i,"toJSON",Trr(null))):(Hu(i,"seed",n),Hu(i,"seedLength",u),Srr(i,"state",f,c),Hu(i,"stateLength",o),Hu(i,"byteLength",v),Fi(i,"toJSON",l)),Fi(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=Lve(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return Irr(r())}function m(y){return Rve(y)||y<=0?NaN:Irr(r(y))}}Rrr.exports=Pve});var Prr=s((Vze,Lrr)=>{"use strict";var Fve=o4(),jve=Fve();Lrr.exports=jve});var Mrr=s((Uze,jrr)=>{"use strict";var Mve=D(),Frr=Prr(),Bve=o4();Mve(Frr,"factory",Bve);jrr.exports=Frr});var Crr=s((Gze,krr)=>{"use strict";var kve=Nr().isPrimitive,Cve=Hr().isPrimitive,Brr=V(),Vve=oe();function Uve(r,e){return!kve(r)||Vve(r)?new TypeError(Brr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Cve(e)?null:new TypeError(Brr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}krr.exports=Uve});var Urr=s((Dze,Vrr)=>{"use strict";var v4=z(),Gve=f0(),Dve=we();function Hve(r,e,t){var i;return v4(r)||v4(e)||v4(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+Gve(i)/Dve)/2)}Vrr.exports=Hve});var Hrr=s((Hze,Drr)=>{"use strict";var Grr=z();function zve(r,e){return Grr(r)||Grr(e)?NaN:r<e?0:1}Drr.exports=zve});var Xrr=s((zze,Wrr)=>{"use strict";var Wve=mr(),zrr=z();function Xve(r){if(zrr(r))return Wve(NaN);return e;function e(t){return zrr(t)?NaN:t<r?0:1}}Wrr.exports=Xve});var Wu=s((Wze,Yrr)=>{"use strict";var Jve=D(),Jrr=Hrr(),Yve=Xrr();Jve(Jrr,"factory",Yve);Yrr.exports=Jrr});var Zrr=s((Xze,xrr)=>{"use strict";var xve=mr(),Zve=Wu().factory,f4=z(),$ve=f0(),Qve=we();function Kve(r,e){if(f4(r)||f4(e)||e<0)return xve(NaN);if(e===0)return Zve(r);return t;function t(i){var a;return f4(i)?NaN:i<r-e?0:i>r+e?1:(a=(i-r)/e,(1+a+$ve(a)/Qve)/2)}}xrr.exports=Kve});var Krr=s((Jze,Qrr)=>{"use strict";var r3e=D(),$rr=Urr(),e3e=Zrr();r3e($rr,"factory",e3e);Qrr.exports=$rr});var c4=s((Yze,rer)=>{"use strict";var t3e=Krr(),i3e=1e4,a3e=1e-12;function n3e(r,e,t){var i,a,n,u,o;for(o=1,i=e-t,a=e+t;o<i3e;){if(u=(i+a)/2,a-i<a3e)return u;n=t3e(u,e,t),r>n?i=u:a=u,o+=1}return u}rer.exports=n3e});var ter=s((xze,eer)=>{"use strict";var l4=z(),s3e=c4();function u3e(r,e,t){return l4(e)||l4(t)||l4(r)||t<0||r<0||r>1?NaN:t===0?e:s3e(r,e,t)}eer.exports=u3e});var aer=s((Zze,ier)=>{"use strict";var o3e=z();function v3e(r,e){return o3e(r)||r<0||r>1?NaN:e}ier.exports=v3e});var uer=s(($ze,ser)=>{"use strict";var f3e=mr(),ner=z();function c3e(r){if(ner(r))return f3e(NaN);return e;function e(t){return ner(t)||t<0||t>1?NaN:r}}ser.exports=c3e});var p4=s((Qze,ver)=>{"use strict";var l3e=D(),oer=aer(),p3e=uer();l3e(oer,"factory",p3e);ver.exports=oer});var cer=s((Kze,fer)=>{"use strict";var d3e=mr(),g3e=p4().factory,d4=z(),m3e=c4();function y3e(r,e){if(d4(r)||d4(e)||e<0)return d3e(NaN);if(e===0)return g3e(r);return t;function t(i){return d4(i)||i<0||i>1?NaN:m3e(i,r,e)}}fer.exports=y3e});var der=s((rWe,per)=>{"use strict";var h3e=D(),ler=ter(),q3e=cer();h3e(ler,"factory",q3e);per.exports=ler});var mer=s((eWe,ger)=>{"use strict";var b3e=der();function w3e(r,e,t){return b3e(r(),e,t)}ger.exports=w3e});var g4=s((tWe,Ser)=>{"use strict";var kt=D(),Xu=br(),yer=Sr(),her=hr(),qer=qr(),ber=vr(),wer=mr(),E3e=Lr(),Ju=Wr().factory,Eer=z(),N3e=Or(),Yu=V(),S3e=Crr(),Ner=mer();function O3e(){var r,e,t,i,a,n;if(arguments.length===0)e=Ju();else if(arguments.length===1){if(r=arguments[0],!her(r))throw new TypeError(Yu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ber(r,"prng")){if(!qer(r.prng))throw new TypeError(Yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ju(r)}else{if(a=arguments[0],n=arguments[1],i=S3e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!her(r))throw new TypeError(Yu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ber(r,"prng")){if(!qer(r.prng))throw new TypeError(Yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ju(r)}else e=Ju()}return a===void 0?t=y:t=m,kt(t,"NAME","cosine"),r&&r.prng?(kt(t,"seed",null),kt(t,"seedLength",null),yer(t,"state",wer(null),E3e),kt(t,"stateLength",null),kt(t,"byteLength",null),kt(t,"toJSON",wer(null)),kt(t,"PRNG",e)):(Xu(t,"seed",u),Xu(t,"seedLength",o),yer(t,"state",c,l),Xu(t,"stateLength",v),Xu(t,"byteLength",f),kt(t,"toJSON",p),kt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=N3e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Ner(e,a,n)}function y(g,d){return Eer(g)||Eer(d)||d<=0?NaN:Ner(e,g,d)}}Ser.exports=O3e});var Aer=s((iWe,Oer)=>{"use strict";var A3e=g4(),_3e=A3e();Oer.exports=_3e});var Ier=s((aWe,Ter)=>{"use strict";var T3e=D(),_er=Aer(),I3e=g4();T3e(_er,"factory",I3e);Ter.exports=_er});var Fer=s((nWe,Per)=>{"use strict";var Rer=ye().isPrimitive,m4=V(),Ler=oe();function R3e(r,e){return!Rer(r)||Ler(r)?new TypeError(m4("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!Rer(e)||Ler(e)?new TypeError(m4("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(m4("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}Per.exports=R3e});var Ber=s((sWe,Mer)=>{"use strict";var y4=sa(),vn=Ur();function jer(r,e,t){var i,a,n,u,o,v,f,c,l;if(n=t-e,n===0)return e;if(f=r.MIN,c=r.MAX,a=c-f,a===n)return r()-f+e;if(a<n)for(u=0;;){for(n===y4?(u=vn(n/(a+1)),n%(a+1)===a&&(u+=1)):u=vn((n+1)/(a+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*a===n-v+1)return i;v*=a+1}if(l=jer(r,0,vn(n/v)),!(l>y4/v)&&(l*=v,i+=l,!(i>n)))return i+e}for(a===y4?(o=vn(a/(n+1)),a%(n+1)===n&&(o+=1)):o=vn((a+1)/(n+1));;)if(i=r()-f,i=vn(i/o),i<=n)return i+e}Mer.exports=jer});var h4=s((uWe,zer)=>{"use strict";var Ct=D(),xu=br(),ker=Sr(),Cer=hr(),Ver=qr(),Uer=vr(),Ger=mr(),L3e=Lr(),Zu=Wr().factory,Der=z(),fn=Ee(),P3e=Or(),ji=V(),F3e=Fer(),Her=Ber();function j3e(){var r,e,t,i,a,n;if(arguments.length===0)e=Zu();else if(arguments.length===1){if(r=arguments[0],!Cer(r))throw new TypeError(ji("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Uer(r,"prng")){if(!Ver(r.prng))throw new TypeError(ji("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!fn(e.MIN))throw new TypeError(ji("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!fn(e.MAX))throw new TypeError(ji("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Zu(r)}else{if(a=arguments[0],n=arguments[1],i=F3e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Cer(r))throw new TypeError(ji("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Uer(r,"prng")){if(!Ver(r.prng))throw new TypeError(ji("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!fn(e.MIN))throw new TypeError(ji("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!fn(e.MAX))throw new TypeError(ji("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Zu(r)}else e=Zu()}return a===void 0?t=y:t=m,Ct(t,"NAME","discrete-uniform"),r&&r.prng?(Ct(t,"seed",null),Ct(t,"seedLength",null),ker(t,"state",Ger(null),L3e),Ct(t,"stateLength",null),Ct(t,"byteLength",null),Ct(t,"toJSON",Ger(null)),Ct(t,"PRNG",e)):(xu(t,"seed",u),xu(t,"seedLength",o),ker(t,"state",c,l),xu(t,"stateLength",v),xu(t,"byteLength",f),Ct(t,"toJSON",p),Ct(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=P3e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Her(e,a,n)}function y(g,d){return Der(g)||Der(d)||!fn(g)||!fn(d)||g>d?NaN:Her(e,g,d)}}zer.exports=j3e});var Xer=s((oWe,Wer)=>{"use strict";var M3e=h4(),B3e=M3e();Wer.exports=B3e});var xer=s((vWe,Yer)=>{"use strict";var k3e=D(),Jer=Xer(),C3e=h4();k3e(Jer,"factory",C3e);Yer.exports=Jer});var Qer=s((fWe,$er)=>{"use strict";var V3e=Hr().isPrimitive,U3e=nt().isPrimitive,Zer=V();function G3e(r,e){return U3e(r)?V3e(e)?null:new TypeError(Zer("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Zer("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}$er.exports=G3e});var rtr=s((cWe,Ker)=>{"use strict";var D3e=wr();function H3e(r,e,t){var i,a;for(i=1,a=0;a<e;a++)i*=r();return-(1/t)*D3e(i)}Ker.exports=H3e});var q4=s((lWe,otr)=>{"use strict";var Vt=D(),$u=br(),etr=Sr(),ttr=hr(),itr=qr(),atr=vr(),ntr=mr(),z3e=Lr(),Qu=Wr().factory,str=z(),W3e=e4(),X3e=Or(),Ku=V(),J3e=Qer(),utr=rtr();function Y3e(){var r,e,t,i,a,n;if(arguments.length===0)e=Qu();else if(arguments.length===1){if(t=arguments[0],!ttr(t))throw new TypeError(Ku("invalid argument. Options argument must be an object. Value: `%s`.",t));if(atr(t,"prng")){if(!itr(t.prng))throw new TypeError(Ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Qu(t)}else{if(n=arguments[0],r=arguments[1],a=J3e(n,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!ttr(t))throw new TypeError(Ku("invalid argument. Options argument must be an object. Value: `%s`.",t));if(atr(t,"prng")){if(!itr(t.prng))throw new TypeError(Ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Qu(t)}else e=Qu()}return n===void 0?i=y:i=m,Vt(i,"NAME","erlang"),t&&t.prng?(Vt(i,"seed",null),Vt(i,"seedLength",null),etr(i,"state",ntr(null),z3e),Vt(i,"stateLength",null),Vt(i,"byteLength",null),Vt(i,"toJSON",ntr(null)),Vt(i,"PRNG",e)):($u(i,"seed",u),$u(i,"seedLength",o),etr(i,"state",c,l),$u(i,"stateLength",v),$u(i,"byteLength",f),Vt(i,"toJSON",p),Vt(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=X3e(e.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return utr(e,n,r)}function y(g,d){return str(g)||str(d)||!W3e(g)||d<=0?NaN:utr(e,g,d)}}otr.exports=Y3e});var ftr=s((pWe,vtr)=>{"use strict";var x3e=q4(),Z3e=x3e();vtr.exports=Z3e});var ptr=s((dWe,ltr)=>{"use strict";var $3e=D(),ctr=ftr(),Q3e=q4();$3e(ctr,"factory",Q3e);ltr.exports=ctr});var gtr=s((gWe,dtr)=>{"use strict";var K3e=wr();function rfe(r,e){return-K3e(1-r())/e}dtr.exports=rfe});var b4=s((mWe,Etr)=>{"use strict";var Ut=D(),ro=br(),mtr=Sr(),efe=Hr().isPrimitive,ytr=hr(),htr=qr(),qtr=vr(),btr=mr(),tfe=Lr(),eo=Wr().factory,ife=z(),afe=Or(),to=V(),wtr=gtr();function nfe(){var r,e,t,i;if(arguments.length===0)t=eo();else if(arguments.length===1&&ytr(arguments[0]))if(e=arguments[0],qtr(e,"prng")){if(!htr(e.prng))throw new TypeError(to("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=eo(e);else{if(r=arguments[0],!efe(r))throw new TypeError(to("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!ytr(e))throw new TypeError(to("invalid argument. Options argument must be an object. Value: `%s`.",e));if(qtr(e,"prng")){if(!htr(e.prng))throw new TypeError(to("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=eo(e)}else t=eo()}return r===void 0?i=p:i=l,Ut(i,"NAME","exponential"),e&&e.prng?(Ut(i,"seed",null),Ut(i,"seedLength",null),mtr(i,"state",btr(null),tfe),Ut(i,"stateLength",null),Ut(i,"byteLength",null),Ut(i,"toJSON",btr(null)),Ut(i,"PRNG",t)):(ro(i,"seed",a),ro(i,"seedLength",n),mtr(i,"state",v,f),ro(i,"stateLength",u),ro(i,"byteLength",o),Ut(i,"toJSON",c),Ut(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=afe(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return wtr(t,r)}function p(m){return ife(m)||m<=0?NaN:wtr(t,m)}}Etr.exports=nfe});var Str=s((yWe,Ntr)=>{"use strict";var sfe=b4(),ufe=sfe();Ntr.exports=ufe});var _tr=s((hWe,Atr)=>{"use strict";var ofe=D(),Otr=Str(),vfe=b4();ofe(Otr,"factory",vfe);Atr.exports=Otr});var Ltr=s((qWe,Rtr)=>{"use strict";var Ttr=Hr().isPrimitive,Itr=V();function ffe(r,e){return Ttr(r)?Ttr(e)?null:new TypeError(Itr("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Itr("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Rtr.exports=ffe});var Ftr=s((bWe,Ptr)=>{"use strict";function cfe(r,e,t){var i=r(e)/e,a=r(t)/t;return i/a}Ptr.exports=cfe});var w4=s((wWe,Gtr)=>{"use strict";var Mi=D(),io=br(),jtr=Sr(),Mtr=hr(),Btr=qr(),ktr=vr(),Ctr=mr(),lfe=Lr(),cn=T0().factory,Vtr=z(),pfe=Or(),ao=V(),dfe=Ltr(),Utr=Ftr();function gfe(){var r,e,t,i,a,n,u;if(arguments.length===0)r=cn();else if(arguments.length===1){if(e=arguments[0],!Mtr(e))throw new TypeError(ao("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ktr(e,"prng")){if(!Btr(e.prng))throw new TypeError(ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=cn({prng:e.prng})}else r=cn(e)}else{if(n=arguments[0],u=arguments[1],a=dfe(n,u),a)throw a;if(arguments.length>2){if(e=arguments[2],!Mtr(e))throw new TypeError(ao("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ktr(e,"prng")){if(!Btr(e.prng))throw new TypeError(ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=cn({prng:e.prng})}else r=cn(e)}else r=cn()}return n===void 0?i=g:i=y,t=r.PRNG,Mi(i,"NAME","f"),e&&e.prng?(Mi(i,"seed",null),Mi(i,"seedLength",null),jtr(i,"state",Ctr(null),lfe),Mi(i,"stateLength",null),Mi(i,"byteLength",null),Mi(i,"toJSON",Ctr(null))):(io(i,"seed",o),io(i,"seedLength",v),jtr(i,"state",l,p),io(i,"stateLength",f),io(i,"byteLength",c),Mi(i,"toJSON",m)),Mi(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=pfe(t.state),n===void 0?d.params=[]:d.params=[n,u],d}function y(){return Utr(r,n,u)}function g(d,h){return Vtr(d)||Vtr(h)||d<=0||h<=0?NaN:Utr(r,d,h)}}Gtr.exports=gfe});var Htr=s((EWe,Dtr)=>{"use strict";var mfe=w4(),yfe=mfe();Dtr.exports=yfe});var Xtr=s((NWe,Wtr)=>{"use strict";var hfe=D(),ztr=Htr(),qfe=w4();hfe(ztr,"factory",qfe);Wtr.exports=ztr});var xtr=s((SWe,Ytr)=>{"use strict";var Jtr=Hr().isPrimitive,bfe=Nr().isPrimitive,E4=oe(),N4=V();function wfe(r,e,t){return!Jtr(r)||E4(r)?new TypeError(N4("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!Jtr(e)||E4(e)?new TypeError(N4("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!bfe(t)||E4(t)?new TypeError(N4("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}Ytr.exports=wfe});var $tr=s((OWe,Ztr)=>{"use strict";var Efe=Gr(),Nfe=wr();function Sfe(r,e,t,i){return i+t*Efe(-Nfe(r()),-1/e)}Ztr.exports=Sfe});var O4=s((AWe,air)=>{"use strict";var Gt=D(),no=br(),Qtr=Sr(),Ktr=hr(),rir=qr(),eir=vr(),tir=mr(),Ofe=Lr(),so=Wr().factory,S4=z(),Afe=Or(),uo=V(),_fe=xtr(),iir=$tr();function Tfe(){var r,e,t,i,a,n,u;if(arguments.length===0)t=so();else if(arguments.length===1){if(e=arguments[0],!Ktr(e))throw new TypeError(uo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(eir(e,"prng")){if(!rir(e.prng))throw new TypeError(uo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=so(e)}else{if(r=arguments[0],n=arguments[1],u=arguments[2],a=_fe(r,n,u),a)throw a;if(arguments.length>3){if(e=arguments[3],!Ktr(e))throw new TypeError(uo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(eir(e,"prng")){if(!rir(e.prng))throw new TypeError(uo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=so(e)}else t=so()}return r===void 0?i=g:i=y,Gt(i,"NAME","frechet"),e&&e.prng?(Gt(i,"seed",null),Gt(i,"seedLength",null),Qtr(i,"state",tir(null),Ofe),Gt(i,"stateLength",null),Gt(i,"byteLength",null),Gt(i,"toJSON",tir(null)),Gt(i,"PRNG",t)):(no(i,"seed",o),no(i,"seedLength",v),Qtr(i,"state",l,p),no(i,"stateLength",f),no(i,"byteLength",c),Gt(i,"toJSON",m),Gt(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=Afe(t.state),r===void 0?d.params=[]:d.params=[r,n,u],d}function y(){return iir(t,r,n,u)}function g(d,h,q){return S4(d)||S4(h)||S4(q)||d<=0||h<=0?NaN:iir(t,d,h,q)}}air.exports=Tfe});var sir=s((_We,nir)=>{"use strict";var Ife=O4(),Rfe=Ife();nir.exports=Rfe});var vir=s((TWe,oir)=>{"use strict";var Lfe=D(),uir=sir(),Pfe=O4();Lfe(uir,"factory",Pfe);oir.exports=uir});var lir=s((IWe,cir)=>{"use strict";var Ffe=Ur(),fir=wr();function jfe(r,e){var t=r();return t===0&&(t=r()),Ffe(fir(t)/fir(1-e))}cir.exports=jfe});var A4=s((RWe,qir)=>{"use strict";var Dt=D(),oo=br(),pir=Sr(),dir=hr(),Mfe=Mn().isPrimitive,gir=qr(),mir=vr(),yir=mr(),Bfe=Lr(),vo=Wr().factory,kfe=z(),Cfe=Or(),fo=V(),hir=lir();function Vfe(){var r,e,t,i;if(arguments.length===0)e=vo();else if(arguments.length===1&&dir(arguments[0]))if(r=arguments[0],mir(r,"prng")){if(!gir(r.prng))throw new TypeError(fo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vo(r);else{if(i=arguments[0],!Mfe(i))throw new TypeError(fo("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!dir(r))throw new TypeError(fo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(mir(r,"prng")){if(!gir(r.prng))throw new TypeError(fo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vo(r)}else e=vo()}return i===void 0?t=p:t=l,Dt(t,"NAME","geometric"),r&&r.prng?(Dt(t,"seed",null),Dt(t,"seedLength",null),pir(t,"state",yir(null),Bfe),Dt(t,"stateLength",null),Dt(t,"byteLength",null),Dt(t,"toJSON",yir(null)),Dt(t,"PRNG",e)):(oo(t,"seed",a),oo(t,"seedLength",n),pir(t,"state",v,f),oo(t,"stateLength",u),oo(t,"byteLength",o),Dt(t,"toJSON",c),Dt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Cfe(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return hir(e,i)}function p(m){return kfe(m)||m<0||m>1?NaN:hir(e,m)}}qir.exports=Vfe});var wir=s((LWe,bir)=>{"use strict";var Ufe=A4(),Gfe=Ufe();bir.exports=Gfe});var Sir=s((PWe,Nir)=>{"use strict";var Dfe=D(),Eir=wir(),Hfe=A4();Dfe(Eir,"factory",Hfe);Nir.exports=Eir});var _ir=s((FWe,Air)=>{"use strict";var zfe=Nr().isPrimitive,Wfe=Hr().isPrimitive,Oir=V(),Xfe=oe();function Jfe(r,e){return!zfe(r)||Xfe(r)?new TypeError(Oir("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Wfe(e)?null:new TypeError(Oir("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Air.exports=Jfe});var Rir=s((jWe,Iir)=>{"use strict";var Tir=wr();function Yfe(r,e,t){return e-t*Tir(-Tir(r()))}Iir.exports=Yfe});var _4=s((MWe,Cir)=>{"use strict";var Ht=D(),co=br(),Lir=Sr(),Pir=hr(),Fir=qr(),jir=vr(),Mir=mr(),xfe=Lr(),lo=Wr().factory,Bir=z(),Zfe=Or(),po=V(),$fe=_ir(),kir=Rir();function Qfe(){var r,e,t,i,a,n;if(arguments.length===0)t=lo();else if(arguments.length===1){if(e=arguments[0],!Pir(e))throw new TypeError(po("invalid argument. Options argument must be an object. Value: `%s`.",e));if(jir(e,"prng")){if(!Fir(e.prng))throw new TypeError(po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=lo(e)}else{if(n=arguments[0],r=arguments[1],a=$fe(n,r),a)throw a;if(arguments.length>2){if(e=arguments[2],!Pir(e))throw new TypeError(po("invalid argument. Options argument must be an object. Value: `%s`.",e));if(jir(e,"prng")){if(!Fir(e.prng))throw new TypeError(po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=lo(e)}else t=lo()}return n===void 0?i=y:i=m,Ht(i,"NAME","gumbel"),e&&e.prng?(Ht(i,"seed",null),Ht(i,"seedLength",null),Lir(i,"state",Mir(null),xfe),Ht(i,"stateLength",null),Ht(i,"byteLength",null),Ht(i,"toJSON",Mir(null)),Ht(i,"PRNG",t)):(co(i,"seed",u),co(i,"seedLength",o),Lir(i,"state",c,l),co(i,"stateLength",v),co(i,"byteLength",f),Ht(i,"toJSON",p),Ht(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Zfe(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return kir(t,n,r)}function y(g,d){return Bir(g)||Bir(d)||d<=0?NaN:kir(t,g,d)}}Cir.exports=Qfe});var Uir=s((BWe,Vir)=>{"use strict";var Kfe=_4(),r4e=Kfe();Vir.exports=r4e});var Hir=s((kWe,Dir)=>{"use strict";var e4e=D(),Gir=Uir(),t4e=_4();e4e(Gir,"factory",t4e);Dir.exports=Gir});var Wir=s((CWe,zir)=>{"use strict";var T4=be().isPrimitive,I0=V();function i4e(r,e,t){return T4(r)?T4(e)?T4(t)?t>r?new RangeError(I0("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(I0("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(I0("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(I0("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(I0("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}zir.exports=i4e});var Xir=s((VWe,a4e)=>{a4e.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var Yir=s((UWe,Jir)=>{"use strict";var n4e=z(),s4e=Ee(),u4e=Za(),o4e=pr(),v4e=Xir(),f4e=170;function c4e(r){return n4e(r)?NaN:s4e(r)?r<0?NaN:r<=f4e?v4e[r]:o4e:u4e(r+1)}Jir.exports=c4e});var Zir=s((GWe,xir)=>{"use strict";var l4e=Yir();xir.exports=l4e});var Qir=s((DWe,$ir)=>{"use strict";var Bi=Zir();function p4e(r,e,t,i){var a,n,u;for(i<t?(a=Bi(t)*Bi(e+t-i)/(Bi(e+t)*Bi(t-i)),u=0):(a=Bi(e)*Bi(i)/(Bi(i-t)*Bi(e+t)),u=i-t),n=r();n>a;)n-=a,a*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}$ir.exports=p4e});var rar=s((HWe,Kir)=>{"use strict";var go=Qir();function d4e(r,e,t,i){var a,n,u,o;return i>e/2?(u=e-i,2*t<=e?(a=t,n=e-t,o=go(r,a,n,u),t-o):(n=t,a=e-t,o=go(r,a,n,u),i-e+t+o)):(u=i,2*t<=e?(a=t,n=e-t,o=go(r,a,n,u),o):(a=e-t,n=t,o=go(r,a,n,u),i-o))}Kir.exports=d4e});var R4=s((zWe,oar)=>{"use strict";var zt=D(),mo=br(),ear=Sr(),tar=hr(),iar=qr(),aar=vr(),nar=mr(),g4e=Lr(),yo=Wr().factory,I4=f3(),sar=pr(),m4e=Or(),ho=V(),y4e=Wir(),uar=rar();function h4e(){var r,e,t,i,a,n,u;if(arguments.length===0)e=yo();else if(arguments.length===1){if(r=arguments[0],!tar(r))throw new TypeError(ho("invalid argument. Options argument must be an object. Value: `%s`.",r));if(aar(r,"prng")){if(!iar(r.prng))throw new TypeError(ho("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yo(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=y4e(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!tar(r))throw new TypeError(ho("invalid argument. Options argument must be an object. Value: `%s`.",r));if(aar(r,"prng")){if(!iar(r.prng))throw new TypeError(ho("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yo(r)}else e=yo()}return a===void 0?t=g:t=y,zt(t,"NAME","hypergeometric"),r&&r.prng?(zt(t,"seed",null),zt(t,"seedLength",null),ear(t,"state",nar(null),g4e),zt(t,"stateLength",null),zt(t,"byteLength",null),zt(t,"toJSON",nar(null)),zt(t,"PRNG",e)):(mo(t,"seed",o),mo(t,"seedLength",v),ear(t,"state",l,p),mo(t,"stateLength",f),mo(t,"byteLength",c),zt(t,"toJSON",m),zt(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=m4e(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return uar(e,a,n,u)}function g(d,h,q){return d===sar||h===sar||!I4(d)||!I4(h)||!I4(q)||q>d?NaN:uar(e,d,h,q)}}oar.exports=h4e});var car=s((WWe,far)=>{"use strict";var q4e=R4(),b4e=q4e();far.exports=b4e});var dar=s((XWe,par)=>{"use strict";var w4e=D(),lar=car(),E4e=R4();w4e(lar,"factory",E4e);par.exports=lar});var har=s((JWe,yar)=>{"use strict";var gar=Hr().isPrimitive,mar=V();function N4e(r,e){return gar(r)?gar(e)?null:new TypeError(mar("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(mar("invalid argument. First argument must be a positive number. Value: `%s`.",r))}yar.exports=N4e});var L4=s((YWe,Oar)=>{"use strict";var ki=D(),qo=br(),qar=Sr(),bar=hr(),war=qr(),Ear=vr(),Nar=mr(),S4e=Lr(),ln=nn().factory,Sar=z(),O4e=Or(),bo=V(),A4e=har();function _4e(){var r,e,t,i,a,n,u;if(arguments.length===0)r=ln();else if(arguments.length===1){if(i=arguments[0],!bar(i))throw new TypeError(bo("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ear(i,"prng")){if(!war(i.prng))throw new TypeError(bo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=ln({prng:i.prng})}else r=ln(i)}else{if(e=arguments[0],t=arguments[1],u=A4e(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!bar(i))throw new TypeError(bo("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ear(i,"prng")){if(!war(i.prng))throw new TypeError(bo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=ln(e,t,{prng:i.prng})}else r=ln(e,t,i)}else r=ln(e,t)}return e===void 0?n=g:n=y,a=r.PRNG,ki(n,"NAME","invgamma"),i&&i.prng?(ki(n,"seed",null),ki(n,"seedLength",null),qar(n,"state",Nar(null),S4e),ki(n,"stateLength",null),ki(n,"byteLength",null),ki(n,"toJSON",Nar(null))):(qo(n,"seed",o),qo(n,"seedLength",v),qar(n,"state",l,p),qo(n,"stateLength",f),qo(n,"byteLength",c),ki(n,"toJSON",m)),ki(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=O4e(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return 1/r()}function g(d,h){return Sar(d)||Sar(h)||d<=0||h<=0?NaN:1/r(d,h)}}Oar.exports=_4e});var _ar=s((xWe,Aar)=>{"use strict";var T4e=L4(),I4e=T4e();Aar.exports=I4e});var Rar=s((ZWe,Iar)=>{"use strict";var R4e=D(),Tar=_ar(),L4e=L4();R4e(Tar,"factory",L4e);Iar.exports=Tar});var jar=s(($We,Far)=>{"use strict";var Lar=Hr().isPrimitive,Par=V();function P4e(r,e){return Lar(r)?Lar(e)?null:new TypeError(Par("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Par("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Far.exports=P4e});var kar=s((QWe,Bar)=>{"use strict";var Mar=Gr();function F4e(r,e,t){var i=r();return Mar(1-Mar(1-i,1/t),1/e)}Bar.exports=F4e});var P4=s((KWe,War)=>{"use strict";var Wt=D(),wo=br(),Car=Sr(),Var=hr(),Uar=qr(),Gar=vr(),Dar=mr(),j4e=Lr(),Eo=Wr().factory,Har=z(),M4e=Or(),No=V(),B4e=jar(),zar=kar();function k4e(){var r,e,t,i,a,n;if(arguments.length===0)e=Eo();else if(arguments.length===1){if(r=arguments[0],!Var(r))throw new TypeError(No("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Gar(r,"prng")){if(!Uar(r.prng))throw new TypeError(No("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eo(r)}else{if(a=arguments[0],n=arguments[1],i=B4e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Var(r))throw new TypeError(No("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Gar(r,"prng")){if(!Uar(r.prng))throw new TypeError(No("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eo(r)}else e=Eo()}return a===void 0?t=y:t=m,Wt(t,"NAME","kumaraswamy"),r&&r.prng?(Wt(t,"seed",null),Wt(t,"seedLength",null),Car(t,"state",Dar(null),j4e),Wt(t,"stateLength",null),Wt(t,"byteLength",null),Wt(t,"toJSON",Dar(null)),Wt(t,"PRNG",e)):(wo(t,"seed",u),wo(t,"seedLength",o),Car(t,"state",c,l),wo(t,"stateLength",v),wo(t,"byteLength",f),Wt(t,"toJSON",p),Wt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=M4e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return zar(e,a,n)}function y(g,d){return Har(g)||Har(d)||g<=0||d<=0?NaN:zar(e,g,d)}}War.exports=k4e});var Jar=s((rXe,Xar)=>{"use strict";var C4e=P4(),V4e=C4e();Xar.exports=V4e});var Zar=s((eXe,xar)=>{"use strict";var U4e=D(),Yar=Jar(),G4e=P4();U4e(Yar,"factory",G4e);xar.exports=Yar});var Kar=s((tXe,Qar)=>{"use strict";var D4e=Nr().isPrimitive,H4e=Hr().isPrimitive,$ar=V(),z4e=oe();function W4e(r,e){return!D4e(r)||z4e(r)?new TypeError($ar("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):H4e(e)?null:new TypeError($ar("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Qar.exports=W4e});var enr=s((iXe,rnr)=>{"use strict";var X4e=Pu(),J4e=Dr(),Y4e=wr();function x4e(r,e,t){var i=r()-.5;return e-t*X4e(i)*Y4e(1-2*J4e(i))}rnr.exports=x4e});var F4=s((aXe,vnr)=>{"use strict";var Xt=D(),So=br(),tnr=Sr(),inr=hr(),anr=qr(),nnr=vr(),snr=mr(),Z4e=Lr(),Oo=Wr().factory,unr=z(),$4e=Or(),Ao=V(),Q4e=Kar(),onr=enr();function K4e(){var r,e,t,i,a,n;if(arguments.length===0)e=Oo();else if(arguments.length===1){if(r=arguments[0],!inr(r))throw new TypeError(Ao("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nnr(r,"prng")){if(!anr(r.prng))throw new TypeError(Ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Oo(r)}else{if(a=arguments[0],n=arguments[1],i=Q4e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!inr(r))throw new TypeError(Ao("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nnr(r,"prng")){if(!anr(r.prng))throw new TypeError(Ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Oo(r)}else e=Oo()}return a===void 0?t=y:t=m,Xt(t,"NAME","laplace"),r&&r.prng?(Xt(t,"seed",null),Xt(t,"seedLength",null),tnr(t,"state",snr(null),Z4e),Xt(t,"stateLength",null),Xt(t,"byteLength",null),Xt(t,"toJSON",snr(null)),Xt(t,"PRNG",e)):(So(t,"seed",u),So(t,"seedLength",o),tnr(t,"state",c,l),So(t,"stateLength",v),So(t,"byteLength",f),Xt(t,"toJSON",p),Xt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=$4e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return onr(e,a,n)}function y(g,d){return unr(g)||unr(d)||d<=0?NaN:onr(e,g,d)}}vnr.exports=K4e});var cnr=s((nXe,fnr)=>{"use strict";var r6e=F4(),e6e=r6e();fnr.exports=e6e});var dnr=s((sXe,pnr)=>{"use strict";var t6e=D(),lnr=cnr(),i6e=F4();t6e(lnr,"factory",i6e);pnr.exports=lnr});var ynr=s((uXe,mnr)=>{"use strict";var a6e=Nr().isPrimitive,n6e=Hr().isPrimitive,gnr=V(),s6e=oe();function u6e(r,e){return!a6e(r)||s6e(r)?new TypeError(gnr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):n6e(e)?null:new TypeError(gnr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}mnr.exports=u6e});var qnr=s((oXe,hnr)=>{"use strict";var o6e=ru(),j4=z(),v6e=Rr();function f6e(r,e,t){var i,a;return j4(e)||j4(t)||j4(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,a=t*v6e(2),i+a*o6e(2*r-1))}hnr.exports=f6e});var wnr=s((vXe,bnr)=>{"use strict";var c6e=mr(),l6e=p4().factory,p6e=ru(),M4=z(),d6e=Rr();function g6e(r,e){var t,i;if(M4(r)||M4(e)||e<0)return c6e(NaN);return e===0&&l6e(r),t=r,i=e*d6e(2),a;function a(n){return M4(n)||n<0||n>1?NaN:t+i*p6e(2*n-1)}}bnr.exports=g6e});var B4=s((fXe,Nnr)=>{"use strict";var m6e=D(),Enr=qnr(),y6e=wnr();m6e(Enr,"factory",y6e);Nnr.exports=Enr});var Onr=s((cXe,Snr)=>{"use strict";var h6e=B4();function q6e(r,e,t){var i=h6e(1-r()/2,0,1);return e+t/(i*i)}Snr.exports=q6e});var k4=s((lXe,Fnr)=>{"use strict";var Jt=D(),_o=br(),Anr=Sr(),_nr=hr(),Tnr=qr(),Inr=vr(),Rnr=mr(),b6e=Lr(),To=Wr().factory,Lnr=z(),w6e=Or(),Io=V(),E6e=ynr(),Pnr=Onr();function N6e(){var r,e,t,i,a,n;if(arguments.length===0)e=To();else if(arguments.length===1){if(r=arguments[0],!_nr(r))throw new TypeError(Io("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Inr(r,"prng")){if(!Tnr(r.prng))throw new TypeError(Io("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=To(r)}else{if(a=arguments[0],n=arguments[1],i=E6e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!_nr(r))throw new TypeError(Io("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Inr(r,"prng")){if(!Tnr(r.prng))throw new TypeError(Io("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=To(r)}else e=To()}return a===void 0?t=y:t=m,Jt(t,"NAME","levy"),r&&r.prng?(Jt(t,"seed",null),Jt(t,"seedLength",null),Anr(t,"state",Rnr(null),b6e),Jt(t,"stateLength",null),Jt(t,"byteLength",null),Jt(t,"toJSON",Rnr(null)),Jt(t,"PRNG",e)):(_o(t,"seed",u),_o(t,"seedLength",o),Anr(t,"state",c,l),_o(t,"stateLength",v),_o(t,"byteLength",f),Jt(t,"toJSON",p),Jt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=w6e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Pnr(e,a,n)}function y(g,d){return Lnr(g)||Lnr(d)||d<=0?NaN:Pnr(e,g,d)}}Fnr.exports=N6e});var Mnr=s((pXe,jnr)=>{"use strict";var S6e=k4(),O6e=S6e();jnr.exports=O6e});var Cnr=s((dXe,knr)=>{"use strict";var A6e=D(),Bnr=Mnr(),_6e=k4();A6e(Bnr,"factory",_6e);knr.exports=Bnr});var Gnr=s((gXe,Unr)=>{"use strict";var T6e=Nr().isPrimitive,I6e=Hr().isPrimitive,R6e=oe(),Vnr=V();function L6e(r,e){return!T6e(r)||R6e(r)?new TypeError(Vnr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):I6e(e)?null:new TypeError(Vnr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Unr.exports=L6e});var Hnr=s((mXe,Dnr)=>{"use strict";var P6e=wr();function F6e(r,e,t){var i=r();return e+t*P6e(i/(1-i))}Dnr.exports=F6e});var C4=s((yXe,$nr)=>{"use strict";var Yt=D(),Ro=br(),znr=Sr(),Wnr=hr(),Xnr=qr(),Jnr=vr(),Ynr=mr(),j6e=Lr(),Lo=Wr().factory,xnr=z(),M6e=Or(),Po=V(),B6e=Gnr(),Znr=Hnr();function k6e(){var r,e,t,i,a,n;if(arguments.length===0)e=Lo();else if(arguments.length===1){if(r=arguments[0],!Wnr(r))throw new TypeError(Po("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Jnr(r,"prng")){if(!Xnr(r.prng))throw new TypeError(Po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Lo(r)}else{if(a=arguments[0],n=arguments[1],i=B6e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Wnr(r))throw new TypeError(Po("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Jnr(r,"prng")){if(!Xnr(r.prng))throw new TypeError(Po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Lo(r)}else e=Lo()}return a===void 0?t=y:t=m,Yt(t,"NAME","logistic"),r&&r.prng?(Yt(t,"seed",null),Yt(t,"seedLength",null),znr(t,"state",Ynr(null),j6e),Yt(t,"stateLength",null),Yt(t,"byteLength",null),Yt(t,"toJSON",Ynr(null)),Yt(t,"PRNG",e)):(Ro(t,"seed",u),Ro(t,"seedLength",o),znr(t,"state",c,l),Ro(t,"stateLength",v),Ro(t,"byteLength",f),Yt(t,"toJSON",p),Yt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=M6e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Znr(e,a,n)}function y(g,d){return xnr(g)||xnr(d)||d<=0?NaN:Znr(e,g,d)}}$nr.exports=k6e});var Knr=s((hXe,Qnr)=>{"use strict";var C6e=C4(),V6e=C6e();Qnr.exports=V6e});var t0r=s((qXe,e0r)=>{"use strict";var U6e=D(),r0r=Knr(),G6e=C4();U6e(r0r,"factory",G6e);e0r.exports=r0r});var n0r=s((bXe,a0r)=>{"use strict";var D6e=Nr().isPrimitive,H6e=Hr().isPrimitive,i0r=V(),z6e=oe();function W6e(r,e){return!D6e(r)||z6e(r)?new TypeError(i0r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):H6e(e)?null:new TypeError(i0r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}a0r.exports=W6e});var u0r=s((wXe,s0r)=>{"use strict";var X6e=xr();function J6e(r,e,t){return X6e(e+t*r())}s0r.exports=J6e});var V4=s((EXe,g0r)=>{"use strict";var Ci=D(),Fo=br(),o0r=Sr(),v0r=hr(),f0r=qr(),c0r=vr(),l0r=mr(),Y6e=Lr(),pn=Ii().factory,p0r=z(),x6e=Or(),jo=V(),Z6e=n0r(),d0r=u0r();function $6e(){var r,e,t,i,a,n,u;if(arguments.length===0)e=pn();else if(arguments.length===1){if(t=arguments[0],!v0r(t))throw new TypeError(jo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(c0r(t,"prng")){if(!f0r(t.prng))throw new TypeError(jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=pn({prng:t.prng})}else e=pn(t)}else{if(u=arguments[0],r=arguments[1],n=Z6e(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!v0r(t))throw new TypeError(jo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(c0r(t,"prng")){if(!f0r(t.prng))throw new TypeError(jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=pn({prng:t.prng})}else e=pn(t)}else e=pn()}return u===void 0?a=g:a=y,i=e.PRNG,Ci(a,"NAME","lognormal"),t&&t.prng?(Ci(a,"seed",null),Ci(a,"seedLength",null),o0r(a,"state",l0r(null),Y6e),Ci(a,"stateLength",null),Ci(a,"byteLength",null),Ci(a,"toJSON",l0r(null))):(Fo(a,"seed",o),Fo(a,"seedLength",v),o0r(a,"state",l,p),Fo(a,"stateLength",f),Fo(a,"byteLength",c),Ci(a,"toJSON",m)),Ci(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=x6e(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return d0r(e,u,r)}function g(d,h){return p0r(d)||p0r(h)||h<=0?NaN:d0r(e,d,h)}}g0r.exports=$6e});var y0r=s((NXe,m0r)=>{"use strict";var Q6e=V4(),K6e=Q6e();m0r.exports=K6e});var b0r=s((SXe,q0r)=>{"use strict";var r5e=D(),h0r=y0r(),e5e=V4();r5e(h0r,"factory",e5e);q0r.exports=h0r});var U4=s((OXe,w0r)=>{"use strict";var t5e=ha(),i5e=Ur(),a5e=t5e-1;function n5e(){var r=i5e(1+a5e*Math.random());return r|0}w0r.exports=n5e});var H4=s((AXe,A0r)=>{"use strict";var xt=D(),Vi=br(),E0r=Sr(),G4=vr(),s5e=hr(),u5e=de().isPrimitive,o5e=Ve(),v5e=nt().isPrimitive,N0r=J0(),Qe=V(),Mo=ha(),Pe=ui(),dn=Si(),f5e=Or(),S0r=U4(),D4=Mo-1|0,c5e=Mo-1|0,l5e=16807,Bo=1,ko=2,Ui=2,Fe=4,R0=5;function O0r(r,e){var t;return e?t="option":t="argument",r.length<R0+1?new RangeError(Qe("invalid %s. State array has insufficient length.",t)):r[0]!==Bo?new RangeError(Qe("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Bo,r[0])):r[1]!==ko?new RangeError(Qe("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,ko,r[1])):r[Ui]!==1?new RangeError(Qe("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Ui])):r[Fe]!==r.length-R0?new RangeError(Qe("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-R0,r[Fe])):null}function p5e(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!s5e(r))throw new TypeError(Qe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(G4(r,"copy")&&(i.copy=r.copy,!u5e(r.copy)))throw new TypeError(Qe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(G4(r,"state")){if(t=r.state,i.state=!0,!N0r(t))throw new TypeError(Qe("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=O0r(t,!0),u)throw u;i.copy===!1?e=t:(e=new Pe(t.length),dn(t.length,t,1,e,1)),t=new Pe(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,t[Fe])}if(a===void 0)if(G4(r,"seed"))if(a=r.seed,i.seed=!0,v5e(a)){if(a>c5e)throw new RangeError(Qe("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(o5e(a)&&a.length>0)n=a.length,e=new Pe(R0+n),e[0]=Bo,e[1]=ko,e[Ui]=1,e[Fe]=n,dn.ndarray(n,a,1,0,e,1,Fe+1),t=new Pe(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,n),t[0]=a[0];else throw new TypeError(Qe("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=S0r()|0}else a=S0r()|0;return t===void 0&&(e=new Pe(R0+1),e[0]=Bo,e[1]=ko,e[Ui]=1,e[Fe]=1,e[Fe+1]=a,t=new Pe(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,1),t[0]=a[0]),xt(y,"NAME","minstd"),Vi(y,"seed",o),Vi(y,"seedLength",v),E0r(y,"state",l,p),Vi(y,"stateLength",f),Vi(y,"byteLength",c),xt(y,"toJSON",m),xt(y,"MIN",1),xt(y,"MAX",Mo-1),xt(y,"normalized",g),xt(g,"NAME",y.NAME),Vi(g,"seed",o),Vi(g,"seedLength",v),E0r(g,"state",l,p),Vi(g,"stateLength",f),Vi(g,"byteLength",c),xt(g,"toJSON",m),xt(g,"MIN",(y.MIN-1)/D4),xt(g,"MAX",(y.MAX-1)/D4),y;function o(){var d=e[Fe];return dn(d,a,1,new Pe(d),1)}function v(){return e[Fe]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return dn(d,e,1,new Pe(d),1)}function p(d){var h;if(!N0r(d))throw new TypeError(Qe("invalid argument. Must provide an Int32Array. Value: `%s`.",d));if(h=O0r(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?dn(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Pe(d.length)),dn(d.length,d,1,e,1)),t=new Pe(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,e[Fe])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=f5e(e),d.params=[],d}function y(){var d=t[0]|0;return d=l5e*d%Mo|0,t[0]=d,d|0}function g(){return(y()-1)/D4}}A0r.exports=p5e});var T0r=s((_Xe,_0r)=>{"use strict";var d5e=H4(),g5e=U4(),m5e=d5e({seed:g5e()});_0r.exports=m5e});var L0r=s((TXe,R0r)=>{"use strict";var y5e=D(),I0r=T0r(),h5e=H4();y5e(I0r,"factory",h5e);R0r.exports=I0r});var F0r=s((IXe,P0r)=>{"use strict";var q5e=z(),b5e=8;function w5e(r,e,t){var i,a;for(a=0;a<b5e;a++)if(i=r(),q5e(i))throw new Error("unexpected error. PRNG returned NaN.");for(a=t-1;a>=0;a--)e[a]=r();return e}P0r.exports=w5e});var z4=s((RXe,j0r)=>{"use strict";var E5e=ha(),N5e=Ur(),S5e=E5e-1;function O5e(){var r=N5e(1+S5e*Math.random());return r|0}j0r.exports=O5e});var J4=s((LXe,U0r)=>{"use strict";var Zt=D(),Gi=br(),M0r=Sr(),W4=vr(),A5e=hr(),_5e=de().isPrimitive,T5e=Ve(),I5e=nt().isPrimitive,B0r=J0(),gn=Si(),R5e=Ur(),je=ui(),L0=ha(),L5e=Or(),Je=V(),k0r=F0r(),C0r=z4(),X4=L0-1|0,P5e=L0-1|0,F5e=16807,Be=32,Uo=1,Go=3,Di=2,mn=Be+3,Me=Be+6,P0=Be+7,Co=mn+1,Vo=mn+2;function V0r(r,e){var t;return e?t="option":t="argument",r.length<P0+1?new RangeError(Je("invalid %s. State array has insufficient length.",t)):r[0]!==Uo?new RangeError(Je("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Uo,r[0])):r[1]!==Go?new RangeError(Je("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Go,r[1])):r[Di]!==Be?new RangeError(Je("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Be,r[Di])):r[mn]!==2?new RangeError(Je("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[mn])):r[Me]!==r.length-P0?new RangeError(Je("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-P0,r[Me])):null}function j5e(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!A5e(r))throw new TypeError(Je("invalid argument. Options argument must be an object. Value: `%s`.",r));if(W4(r,"copy")&&(i.copy=r.copy,!_5e(r.copy)))throw new TypeError(Je("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(W4(r,"state")){if(t=r.state,i.state=!0,!B0r(t))throw new TypeError(Je("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=V0r(t,!0),u)throw u;i.copy===!1?e=t:(e=new je(t.length),gn(t.length,t,1,e,1)),t=new je(e.buffer,e.byteOffset+(Di+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,t[Me])}if(a===void 0)if(W4(r,"seed"))if(a=r.seed,i.seed=!0,I5e(a)){if(a>P5e)throw new RangeError(Je("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(T5e(a)&&a.length>0)n=a.length,e=new je(P0+n),e[0]=Uo,e[1]=Go,e[Di]=Be,e[mn]=2,e[Vo]=a[0],e[Me]=n,gn.ndarray(n,a,1,0,e,1,Me+1),t=new je(e.buffer,e.byteOffset+(Di+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,n),t=k0r(y,t,Be),e[Co]=t[0];else throw new TypeError(Je("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=C0r()|0}else a=C0r()|0;return t===void 0&&(e=new je(P0+1),e[0]=Uo,e[1]=Go,e[Di]=Be,e[mn]=2,e[Vo]=a,e[Me]=1,e[Me+1]=a,t=new je(e.buffer,e.byteOffset+(Di+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,1),t=k0r(y,t,Be),e[Co]=t[0]),Zt(g,"NAME","minstd-shuffle"),Gi(g,"seed",o),Gi(g,"seedLength",v),M0r(g,"state",l,p),Gi(g,"stateLength",f),Gi(g,"byteLength",c),Zt(g,"toJSON",m),Zt(g,"MIN",1),Zt(g,"MAX",L0-1),Zt(g,"normalized",d),Zt(d,"NAME",g.NAME),Gi(d,"seed",o),Gi(d,"seedLength",v),M0r(d,"state",l,p),Gi(d,"stateLength",f),Gi(d,"byteLength",c),Zt(d,"toJSON",m),Zt(d,"MIN",(g.MIN-1)/X4),Zt(d,"MAX",(g.MAX-1)/X4),g;function o(){var h=e[Me];return gn(h,a,1,new je(h),1)}function v(){return e[Me]}function f(){return e.length}function c(){return e.byteLength}function l(){var h=e.length;return gn(h,e,1,new je(h),1)}function p(h){var q;if(!B0r(h))throw new TypeError(Je("invalid argument. Must provide an Int32Array. Value: `%s`.",h));if(q=V0r(h,!1),q)throw q;i.copy===!1?i.state&&h.length===e.length?gn(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new je(h.length)),gn(h.length,h,1,e,1)),t=new je(e.buffer,e.byteOffset+(Di+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,e[Me])}function m(){var h={};return h.type="PRNG",h.name=g.NAME,h.state=L5e(e),h.params=[],h}function y(){var h=e[Vo]|0;return h=F5e*h%L0|0,e[Vo]=h,h|0}function g(){var h,q;return h=e[Co],q=R5e(Be*(h/L0)),h=t[q],e[Co]=h,t[q]=y(),h}function d(){return(g()-1)/X4}}U0r.exports=j5e});var D0r=s((PXe,G0r)=>{"use strict";var M5e=J4(),B5e=z4(),k5e=M5e({seed:B5e()});G0r.exports=k5e});var W0r=s((FXe,z0r)=>{"use strict";var C5e=D(),H0r=D0r(),V5e=J4();C5e(H0r,"factory",V5e);z0r.exports=H0r});var J0r=s((jXe,X0r)=>{"use strict";var U5e=xr();function G5e(r,e){for(var t=r(),i=1;t>U5e(-e);)i+=1,t*=r();return i-1}X0r.exports=G5e});var x0r=s((MXe,Y0r)=>{"use strict";var D5e=Ur();function H5e(r){return D5e(r)===r&&r<0}Y0r.exports=H5e});var $0r=s((BXe,Z0r)=>{"use strict";var z5e=x0r();Z0r.exports=z5e});var K0r=s((kXe,Q0r)=>{"use strict";var W5e=$0r(),X5e=c0();function J5e(r){return W5e(r)?NaN:X5e(r+1)}Q0r.exports=J5e});var esr=s((CXe,rsr)=>{"use strict";var Y5e=K0r();rsr.exports=Y5e});var nsr=s((VXe,asr)=>{"use strict";var x5e=esr(),tsr=Ur(),Z5e=Pu(),$5e=Rr(),isr=Dr(),Do=wr(),Q5e=G3(),K5e=1/12,rce=1/360;function ece(r,e){var t,i,a,n,u,o,v,f,c,l;for(t=$5e(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,a=.86*u;;){if(l=r(),l<=a)return c=l/u-.43,c*=2*o/(.5-isr(c))+v,c+=e+.445,tsr(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=Z5e(c)*.5-c,l=u*r()),n=.5-isr(c),(n>=.013||n>=l)&&(f=tsr((2*o/n+v)*c+e+.445),l*=i/(o/(n*n)+v),c=(f+.5)*Do(e/f),c+=-e-Q5e+f,c-=(K5e-rce/(f*f))/f,f>=10&&c>=Do(l*t)||(c=f*Do(e)-e-x5e(f),f>=0&&f<=9&&c>=Do(l))))return f}}asr.exports=ece});var usr=s((UXe,ssr)=>{"use strict";var tce=J0r(),ice=nsr();function ace(r,e){return e<30?tce(r,e):ice(r,e)}ssr.exports=ace});var Y4=s((GXe,dsr)=>{"use strict";var $t=D(),Ho=br(),osr=Sr(),nce=Hr().isPrimitive,vsr=hr(),fsr=qr(),csr=vr(),lsr=mr(),sce=Lr(),zo=Wr().factory,uce=z(),oce=Or(),Wo=V(),psr=usr();function vce(){var r,e,t,i;if(arguments.length===0)t=zo();else if(arguments.length===1&&vsr(arguments[0]))if(e=arguments[0],csr(e,"prng")){if(!fsr(e.prng))throw new TypeError(Wo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zo(e);else{if(r=arguments[0],!nce(r))throw new TypeError(Wo("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!vsr(e))throw new TypeError(Wo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(csr(e,"prng")){if(!fsr(e.prng))throw new TypeError(Wo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zo(e)}else t=zo()}return r===void 0?i=p:i=l,$t(i,"NAME","poisson"),e&&e.prng?($t(i,"seed",null),$t(i,"seedLength",null),osr(i,"state",lsr(null),sce),$t(i,"stateLength",null),$t(i,"byteLength",null),$t(i,"toJSON",lsr(null)),$t(i,"PRNG",t)):(Ho(i,"seed",a),Ho(i,"seedLength",n),osr(i,"state",v,f),Ho(i,"stateLength",u),Ho(i,"byteLength",o),$t(i,"toJSON",c),$t(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=oce(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return psr(t,r)}function p(m){return uce(m)||m<=0?NaN:psr(t,m)}}dsr.exports=vce});var msr=s((DXe,gsr)=>{"use strict";var fce=Y4(),cce=fce();gsr.exports=cce});var x4=s((HXe,hsr)=>{"use strict";var lce=D(),ysr=msr(),pce=Y4();lce(ysr,"factory",pce);hsr.exports=ysr});var bsr=s((zXe,qsr)=>{"use strict";var dce=Hr().isPrimitive,gce=Nr().isPrimitive,Z4=V(),mce=oe();function yce(r,e){return dce(r)?!gce(e)||mce(e)?new TypeError(Z4("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Z4("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Z4("invalid argument. First argument must be a positive number. Value: `%s`.",r))}qsr.exports=yce});var r6=s((WXe,Tsr)=>{"use strict";var Hi=D(),Xo=br(),wsr=Sr(),yn=vr(),Esr=hr(),$4=bt(),Nsr=de().isPrimitive,Ssr=qr(),Osr=mr(),hce=Lr(),Asr=z(),hn=x4().factory,Jo=nn().factory,Q4=Si(),K4=me(),_sr=O0(),qce=Or(),Qt=V(),bce=bsr();function wce(){var r,e,t,i,a,n,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=hn(i);else if(arguments.length===1){if(i=arguments[0],!Esr(i))throw new TypeError(Qt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(yn(i,"copy")&&!Nsr(i.copy))throw new TypeError(Qt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(yn(i,"prng")){if(!Ssr(i.prng))throw new TypeError(Qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=hn({prng:i.prng})}else{if(yn(i,"state")&&!$4(i.state))throw new TypeError(Qt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=_sr({},i),i.copy===!1?u=!1:i.state&&(i.state=Q4(i.state.length,i.state,1,new K4(i.state.length),1)),i.copy=!1,t=hn(i)}}else{if(f=arguments[0],v=arguments[1],o=bce(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!Esr(i))throw new TypeError(Qt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(yn(i,"copy")&&!Nsr(i.copy))throw new TypeError(Qt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(yn(i,"prng")){if(!Ssr(i.prng))throw new TypeError(Qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=hn({prng:i.prng})}else{if(yn(i,"state")&&!$4(i.state))throw new TypeError(Qt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=_sr({},i),i.copy===!1?u=!1:i.state&&(i.state=Q4(i.state.length,i.state,1,new K4(i.state.length),1)),i.copy=!1,t=hn(i)}}else i={copy:!1},t=hn(i)}return i&&i.prng?f===void 0?r=Jo({prng:i.prng}):r=Jo(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Jo({state:e,copy:!1}):r=Jo(f,v/(1-v),{state:e,copy:!1})),f===void 0?a=q:a=h,n=t.PRNG,Hi(a,"NAME","negative-binomial"),i&&i.prng?(Hi(a,"seed",null),Hi(a,"seedLength",null),wsr(a,"state",Osr(null),hce),Hi(a,"stateLength",null),Hi(a,"byteLength",null),Hi(a,"toJSON",Osr(null))):(Xo(a,"seed",c),Xo(a,"seedLength",l),wsr(a,"state",y,g),Xo(a,"stateLength",p),Xo(a,"byteLength",m),Hi(a,"toJSON",d)),Hi(a,"PRNG",n),a;function c(){return n.seed}function l(){return n.seedLength}function p(){return n.stateLength}function m(){return n.byteLength}function y(){return n.state}function g(w){if(!$4(w))throw new TypeError(Qt("invalid argument. Must provide a Uint32Array. Value: `%s`.",w));u&&(w=Q4(w.length,w,1,new K4(w.length),1)),n.state=w}function d(){var w={};return w.type="PRNG",w.name=a.NAME,w.state=qce(n.state),f===void 0?w.params=[]:w.params=[f,v],w}function h(){return t(r())}function q(w,A){return Asr(w)||Asr(A)||A<=0||A>=1?NaN:t(r(w,A/(1-A)))}}Tsr.exports=wce});var Rsr=s((XXe,Isr)=>{"use strict";var Ece=r6(),Nce=Ece();Isr.exports=Nce});var Fsr=s((JXe,Psr)=>{"use strict";var Sce=D(),Lsr=Rsr(),Oce=r6();Sce(Lsr,"factory",Oce);Psr.exports=Lsr});var Bsr=s((YXe,Msr)=>{"use strict";var Ace=Nr().isPrimitive,_ce=Hr().isPrimitive,jsr=V(),Tce=oe();function Ice(r,e){return!Ace(r)||Tce(r)?new TypeError(jsr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):_ce(e)?null:new TypeError(jsr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Msr.exports=Ice});var Csr=s((xXe,ksr)=>{"use strict";function Rce(r,e,t){return e+t*r()}ksr.exports=Rce});var e6=s((ZXe,Xsr)=>{"use strict";var zi=D(),Yo=br(),Vsr=Sr(),Usr=hr(),Gsr=qr(),Dsr=vr(),Hsr=mr(),Lce=Lr(),qn=Ii().factory,zsr=z(),Pce=Or(),xo=V(),Fce=Bsr(),Wsr=Csr();function jce(){var r,e,t,i,a,n,u;if(arguments.length===0)e=qn();else if(arguments.length===1){if(t=arguments[0],!Usr(t))throw new TypeError(xo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Dsr(t,"prng")){if(!Gsr(t.prng))throw new TypeError(xo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=qn({prng:t.prng})}else e=qn(t)}else{if(u=arguments[0],r=arguments[1],n=Fce(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!Usr(t))throw new TypeError(xo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Dsr(t,"prng")){if(!Gsr(t.prng))throw new TypeError(xo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=qn({prng:t.prng})}else e=qn(t)}else e=qn()}return u===void 0?a=g:a=y,i=e.PRNG,zi(a,"NAME","normal"),t&&t.prng?(zi(a,"seed",null),zi(a,"seedLength",null),Vsr(a,"state",Hsr(null),Lce),zi(a,"stateLength",null),zi(a,"byteLength",null),zi(a,"toJSON",Hsr(null))):(Yo(a,"seed",o),Yo(a,"seedLength",v),Vsr(a,"state",l,p),Yo(a,"stateLength",f),Yo(a,"byteLength",c),zi(a,"toJSON",m)),zi(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=Pce(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return Wsr(e,u,r)}function g(d,h){return zsr(d)||zsr(h)||h<=0?NaN:Wsr(e,d,h)}}Xsr.exports=jce});var Ysr=s(($Xe,Jsr)=>{"use strict";var Mce=e6(),Bce=Mce();Jsr.exports=Bce});var $sr=s((QXe,Zsr)=>{"use strict";var kce=D(),xsr=Ysr(),Cce=e6();kce(xsr,"factory",Cce);Zsr.exports=xsr});var eur=s((KXe,rur)=>{"use strict";var Qsr=Hr().isPrimitive,Ksr=V();function Vce(r,e){return Qsr(r)?Qsr(e)?null:new TypeError(Ksr("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Ksr("invalid argument. First argument must be a positive number. Value: `%s`.",r))}rur.exports=Vce});var iur=s((rJe,tur)=>{"use strict";var Uce=Gr();function Gce(r,e,t){return t/Uce(r(),1/e)}tur.exports=Gce});var t6=s((eJe,cur)=>{"use strict";var Kt=D(),Zo=br(),aur=Sr(),nur=hr(),sur=qr(),uur=vr(),our=mr(),Dce=Lr(),$o=Wr().factory,vur=z(),Hce=Or(),Qo=V(),zce=eur(),fur=iur();function Wce(){var r,e,t,i,a,n;if(arguments.length===0)i=$o();else if(arguments.length===1){if(t=arguments[0],!nur(t))throw new TypeError(Qo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(uur(t,"prng")){if(!sur(t.prng))throw new TypeError(Qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=$o(t)}else{if(r=arguments[0],e=arguments[1],n=zce(r,e),n)throw n;if(arguments.length>2){if(t=arguments[2],!nur(t))throw new TypeError(Qo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(uur(t,"prng")){if(!sur(t.prng))throw new TypeError(Qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=$o(t)}else i=$o()}return r===void 0?a=y:a=m,Kt(a,"NAME","pareto-type1"),t&&t.prng?(Kt(a,"seed",null),Kt(a,"seedLength",null),aur(a,"state",our(null),Dce),Kt(a,"stateLength",null),Kt(a,"byteLength",null),Kt(a,"toJSON",our(null)),Kt(a,"PRNG",i)):(Zo(a,"seed",u),Zo(a,"seedLength",o),aur(a,"state",c,l),Zo(a,"stateLength",v),Zo(a,"byteLength",f),Kt(a,"toJSON",p),Kt(a,"PRNG",i),i=i.normalized),a;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(g){i.state=g}function p(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Hce(i.state),r===void 0?g.params=[]:g.params=[r,e],g}function m(){return fur(i,r,e)}function y(g,d){return vur(g)||vur(d)||g<=0||d<=0?NaN:fur(i,g,d)}}cur.exports=Wce});var pur=s((tJe,lur)=>{"use strict";var Xce=t6(),Jce=Xce();lur.exports=Jce});var mur=s((iJe,gur)=>{"use strict";var Yce=D(),dur=pur(),xce=t6();Yce(dur,"factory",xce);gur.exports=dur});var hur=s((aJe,yur)=>{"use strict";var Zce=Rr(),$ce=wr();function Qce(r,e){return e*Zce(-2*$ce(r()))}yur.exports=Qce});var i6=s((nJe,Our)=>{"use strict";var ri=D(),Ko=br(),qur=Sr(),Kce=Hr().isPrimitive,bur=hr(),wur=qr(),Eur=vr(),Nur=mr(),rle=Lr(),r1=Wr().factory,ele=z(),tle=Or(),e1=V(),Sur=hur();function ile(){var r,e,t,i;if(arguments.length===0)t=r1();else if(arguments.length===1&&bur(arguments[0]))if(e=arguments[0],Eur(e,"prng")){if(!wur(e.prng))throw new TypeError(e1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=r1(e);else{if(r=arguments[0],!Kce(r))throw new TypeError(e1("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!bur(e))throw new TypeError(e1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Eur(e,"prng")){if(!wur(e.prng))throw new TypeError(e1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=r1(e)}else t=r1()}return r===void 0?i=p:i=l,ri(i,"NAME","rayleigh"),e&&e.prng?(ri(i,"seed",null),ri(i,"seedLength",null),qur(i,"state",Nur(null),rle),ri(i,"stateLength",null),ri(i,"byteLength",null),ri(i,"toJSON",Nur(null)),ri(i,"PRNG",t)):(Ko(i,"seed",a),Ko(i,"seedLength",n),qur(i,"state",v,f),Ko(i,"stateLength",u),Ko(i,"byteLength",o),ri(i,"toJSON",c),ri(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=tle(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Sur(t,r)}function p(m){return ele(m)||m<=0?NaN:Sur(t,m)}}Our.exports=ile});var _ur=s((sJe,Aur)=>{"use strict";var ale=i6(),nle=ale();Aur.exports=nle});var Rur=s((uJe,Iur)=>{"use strict";var sle=D(),Tur=_ur(),ule=i6();sle(Tur,"factory",ule);Iur.exports=Tur});var u6=s((oJe,Vur)=>{"use strict";var Wi=D(),t1=br(),Lur=Sr(),bn=vr(),Pur=Hr().isPrimitive,Fur=hr(),a6=bt(),jur=de().isPrimitive,ole=z(),Mur=qr(),Bur=mr(),vle=Lr(),i1=T0().factory,wn=Ii().factory,n6=Si(),s6=me(),kur=O0(),fle=Or(),gt=V(),Cur=Rr();function cle(){var r,e,t,i,a,n,u,o;if(u=!0,arguments.length===0)a={copy:!1},t=wn(a);else if(arguments.length===1)if(Fur(arguments[0])){if(a=arguments[0],bn(a,"copy")&&!jur(a.copy))throw new TypeError(gt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(bn(a,"prng")){if(!Mur(a.prng))throw new TypeError(gt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=wn({prng:a.prng})}else{if(bn(a,"state")&&!a6(a.state))throw new TypeError(gt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=kur({},a),a.copy===!1?u=!1:a.state&&(a.state=n6(a.state.length,a.state,1,new s6(a.state.length),1)),a.copy=!1,t=wn(a)}}else{if(o=arguments[0],!Pur(o))throw new TypeError(gt("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));a={copy:!1},t=wn(a)}else{if(o=arguments[0],!Pur(o))throw new TypeError(gt("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(a=arguments[1],!Fur(a))throw new TypeError(gt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(bn(a,"copy")&&!jur(a.copy))throw new TypeError(gt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(bn(a,"prng")){if(!Mur(a.prng))throw new TypeError(gt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=wn({prng:a.prng})}else{if(bn(a,"state")&&!a6(a.state))throw new TypeError(gt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=kur({},a),a.copy===!1?u=!1:a.state&&(a.state=n6(a.state.length,a.state,1,new s6(a.state.length),1)),a.copy=!1,t=wn(a)}}return a&&a.prng?o===void 0?r=i1({prng:a.prng}):r=i1(o,{prng:a.prng}):(a.state?e=a.state:(e=t.state,t.state=e),o===void 0?r=i1({state:e,copy:!1}):r=i1(o,{state:e,copy:!1})),o===void 0?n=d:n=g,i=t.PRNG,Wi(n,"NAME","t"),a&&a.prng?(Wi(n,"seed",null),Wi(n,"seedLength",null),Lur(n,"state",Bur(null),vle),Wi(n,"stateLength",null),Wi(n,"byteLength",null),Wi(n,"toJSON",Bur(null))):(t1(n,"seed",v),t1(n,"seedLength",f),Lur(n,"state",p,m),t1(n,"stateLength",c),t1(n,"byteLength",l),Wi(n,"toJSON",y)),Wi(n,"PRNG",i),n;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(h){if(!a6(h))throw new TypeError(gt("invalid argument. Must provide a Uint32Array. Value: `%s`.",h));u&&(h=n6(h.length,h,1,new s6(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=n.NAME,h.state=fle(i.state),o===void 0?h.params=[]:h.params=[o],h}function g(){return t()/Cur(r()/o)}function d(h){return ole(h)||h<=0?NaN:t()/Cur(r(h)/h)}}Vur.exports=cle});var Gur=s((vJe,Uur)=>{"use strict";var lle=u6(),ple=lle();Uur.exports=ple});var zur=s((fJe,Hur)=>{"use strict";var dle=D(),Dur=Gur(),gle=u6();dle(Dur,"factory",gle);Hur.exports=Dur});var Xur=s((cJe,Wur)=>{"use strict";var o6=Nr().isPrimitive,a1=V(),v6=oe();function mle(r,e,t){return!o6(r)||v6(r)?new TypeError(a1("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!o6(e)||v6(e)?new TypeError(a1("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!o6(t)||v6(t)?new TypeError(a1("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(a1("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}Wur.exports=mle});var xur=s((lJe,Yur)=>{"use strict";var Jur=Rr();function yle(r,e,t,i){var a,n,u;return a=(i-e)/(t-e),u=r(),u<a?(n=(t-e)*(i-e),e+Jur(n*u)):(n=(t-e)*(t-i),t-Jur(n*(1-u)))}Yur.exports=yle});var c6=s((pJe,tor)=>{"use strict";var ei=D(),n1=br(),Zur=Sr(),$ur=hr(),Qur=qr(),Kur=vr(),ror=mr(),hle=Lr(),s1=Wr().factory,f6=z(),qle=Or(),u1=V(),ble=Xur(),eor=xur();function wle(){var r,e,t,i,a,n,u;if(arguments.length===0)e=s1();else if(arguments.length===1){if(r=arguments[0],!$ur(r))throw new TypeError(u1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Kur(r,"prng")){if(!Qur(r.prng))throw new TypeError(u1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=s1(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=ble(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!$ur(r))throw new TypeError(u1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Kur(r,"prng")){if(!Qur(r.prng))throw new TypeError(u1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=s1(r)}else e=s1()}return a===void 0?t=g:t=y,ei(t,"NAME","triangular"),r&&r.prng?(ei(t,"seed",null),ei(t,"seedLength",null),Zur(t,"state",ror(null),hle),ei(t,"stateLength",null),ei(t,"byteLength",null),ei(t,"toJSON",ror(null)),ei(t,"PRNG",e)):(n1(t,"seed",o),n1(t,"seedLength",v),Zur(t,"state",l,p),n1(t,"stateLength",f),n1(t,"byteLength",c),ei(t,"toJSON",m),ei(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=qle(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return eor(e,a,n,u)}function g(d,h,q){return f6(d)||f6(h)||f6(q)||!(d<=q&&q<=h)?NaN:eor(e,d,h,q)}}tor.exports=wle});var aor=s((dJe,ior)=>{"use strict";var Ele=c6(),Nle=Ele();ior.exports=Nle});var uor=s((gJe,sor)=>{"use strict";var Sle=D(),nor=aor(),Ole=c6();Sle(nor,"factory",Ole);sor.exports=nor});var lor=s((mJe,cor)=>{"use strict";var oor=Nr().isPrimitive,l6=V(),vor=oe();function Ale(r,e){return!oor(r)||vor(r)?new TypeError(l6("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!oor(e)||vor(e)?new TypeError(l6("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(l6("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}cor.exports=Ale});var dor=s((yJe,por)=>{"use strict";function _le(r,e,t){var i=r();return t*i+(1-i)*e}por.exports=_le});var p6=s((hJe,Eor)=>{"use strict";var ti=D(),o1=br(),gor=Sr(),mor=hr(),yor=qr(),hor=vr(),qor=mr(),Tle=Lr(),v1=Wr().factory,bor=z(),Ile=Or(),f1=V(),Rle=lor(),wor=dor();function Lle(){var r,e,t,i,a,n;if(arguments.length===0)e=v1();else if(arguments.length===1){if(r=arguments[0],!mor(r))throw new TypeError(f1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hor(r,"prng")){if(!yor(r.prng))throw new TypeError(f1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=v1(r)}else{if(a=arguments[0],n=arguments[1],i=Rle(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!mor(r))throw new TypeError(f1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hor(r,"prng")){if(!yor(r.prng))throw new TypeError(f1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=v1(r)}else e=v1()}return a===void 0?t=y:t=m,ti(t,"NAME","uniform"),r&&r.prng?(ti(t,"seed",null),ti(t,"seedLength",null),gor(t,"state",qor(null),Tle),ti(t,"stateLength",null),ti(t,"byteLength",null),ti(t,"toJSON",qor(null)),ti(t,"PRNG",e)):(o1(t,"seed",u),o1(t,"seedLength",o),gor(t,"state",c,l),o1(t,"stateLength",v),o1(t,"byteLength",f),ti(t,"toJSON",p),ti(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Ile(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return wor(e,a,n)}function y(g,d){return bor(g)||bor(d)||g>=d?NaN:wor(e,g,d)}}Eor.exports=Lle});var Sor=s((qJe,Nor)=>{"use strict";var Ple=p6(),Fle=Ple();Nor.exports=Fle});var _or=s((bJe,Aor)=>{"use strict";var jle=D(),Oor=Sor(),Mle=p6();jle(Oor,"factory",Mle);Aor.exports=Oor});var Lor=s((wJe,Ror)=>{"use strict";var Tor=Hr().isPrimitive,Ior=V();function Ble(r,e){return Tor(r)?Tor(e)?null:new TypeError(Ior("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(Ior("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}Ror.exports=Ble});var For=s((EJe,Por)=>{"use strict";var kle=Gr(),Cle=wr();function Vle(r,e,t){return t*kle(-Cle(1-r()),1/e)}Por.exports=Vle});var d6=s((NJe,Gor)=>{"use strict";var ii=D(),c1=br(),jor=Sr(),Mor=hr(),Bor=qr(),kor=vr(),Cor=mr(),Ule=Lr(),l1=Wr().factory,Vor=z(),Gle=Or(),p1=V(),Dle=Lor(),Uor=For();function Hle(){var r,e,t,i,a,n;if(arguments.length===0)t=l1();else if(arguments.length===1){if(e=arguments[0],!Mor(e))throw new TypeError(p1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(kor(e,"prng")){if(!Bor(e.prng))throw new TypeError(p1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=l1(e)}else{if(n=arguments[0],r=arguments[1],a=Dle(r,n),a)throw a;if(arguments.length>2){if(e=arguments[2],!Mor(e))throw new TypeError(p1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(kor(e,"prng")){if(!Bor(e.prng))throw new TypeError(p1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=l1(e)}else t=l1()}return r===void 0?i=y:i=m,ii(i,"NAME","weibull"),e&&e.prng?(ii(i,"seed",null),ii(i,"seedLength",null),jor(i,"state",Cor(null),Ule),ii(i,"stateLength",null),ii(i,"byteLength",null),ii(i,"toJSON",Cor(null)),ii(i,"PRNG",t)):(c1(i,"seed",u),c1(i,"seedLength",o),jor(i,"state",c,l),c1(i,"stateLength",v),c1(i,"byteLength",f),ii(i,"toJSON",p),ii(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Gle(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return Uor(t,n,r)}function y(g,d){return Vor(g)||Vor(d)||g<=0||d<=0?NaN:Uor(t,g,d)}}Gor.exports=Hle});var Hor=s((SJe,Dor)=>{"use strict";var zle=d6(),Wle=zle();Dor.exports=Wle});var Xor=s((OJe,Wor)=>{"use strict";var Xle=D(),zor=Hor(),Jle=d6();Xle(zor,"factory",Jle);Wor.exports=zor});var Yor=s((AJe,Jor)=>{"use strict";var Yle=qe(),xle=ye().isPrimitive,Zle=V(),$le=H0();function Qle(r){if(xle(r))return r;if(Yle(r))return $le(r);throw new TypeError(Zle("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}Jor.exports=Qle});var Zor=s((_Je,xor)=>{"use strict";var Kle=Yor();xor.exports=Kle});var Qor=s((TJe,$or)=>{"use strict";var Ar=Qr(),r8e=MZ().factory,e8e=XZ().factory,t8e=dQ().factory,i8e=KQ().factory,a8e=jK().factory,n8e=xK().factory,s8e=prr().factory,u8e=Mrr().factory,o8e=T0().factory,v8e=Ier().factory,f8e=xer().factory,c8e=ptr().factory,l8e=_tr().factory,p8e=Xtr().factory,d8e=vir().factory,g8e=nn().factory,m8e=Sir().factory,y8e=Hir().factory,h8e=dar().factory,q8e=Ii().factory,b8e=Rar().factory,w8e=Zar().factory,E8e=dnr().factory,N8e=Cnr().factory,S8e=t0r().factory,O8e=b0r().factory,A8e=L0r().factory,_8e=W0r().factory,T8e=Wr().factory,I8e=Fsr().factory,R8e=$sr().factory,L8e=mur().factory,P8e=x4().factory,F8e=Rur().factory,j8e=zur().factory,M8e=uor().factory,B8e=_or().factory,k8e=Xor().factory,C8e=Zor();function V8e(r){return Ar(r,"arcsine",r8e),Ar(r,"bernoulli",e8e),Ar(r,"beta",t8e),Ar(r,"betaprime",i8e),Ar(r,"binomial",a8e),Ar(r,"boxMuller",n8e),Ar(r,"cauchy",s8e),Ar(r,"chi",u8e),Ar(r,"chisquare",o8e),Ar(r,"cosine",v8e),Ar(r,"discreteUniform",f8e),Ar(r,"erlang",c8e),Ar(r,"exponential",l8e),Ar(r,"f",p8e),Ar(r,"frechet",d8e),Ar(r,"gamma",g8e),Ar(r,"geometric",m8e),Ar(r,"gumbel",y8e),Ar(r,"hypergeometric",h8e),Ar(r,"improvedZiggurat",q8e),Ar(r,"invgamma",b8e),Ar(r,"kumaraswamy",w8e),Ar(r,"laplace",E8e),Ar(r,"levy",N8e),Ar(r,"logistic",S8e),Ar(r,"lognormal",O8e),Ar(r,"minstd",A8e),Ar(r,"minstdShuffle",_8e),Ar(r,"mt19937",T8e),Ar(r,"negativeBinomial",I8e),Ar(r,"normal",R8e),Ar(r,"pareto1",L8e),Ar(r,"poisson",P8e),Ar(r,"rayleigh",F8e),Ar(r,"t",j8e),Ar(r,"triangular",M8e),Ar(r,"uniform",B8e),Ar(r,"weibull",k8e),r.base={},Ar(r.base,"normalizeSeed",C8e),r}$or.exports=V8e});var r1r=s((IJe,Kor)=>{"use strict";var U8e=hr(),d1=vr(),G8e=ye().isPrimitive,D8e=nt().isPrimitive,H8e=be().isPrimitive,z8e=ls().isPrimitive,F0=V();function W8e(r,e){return U8e(e)?d1(e,"period")&&(r.period=e.period,!D8e(e.period))?new TypeError(F0("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):d1(e,"amplitude")&&(r.amplitude=e.amplitude,!z8e(e.amplitude))?new TypeError(F0("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):d1(e,"offset")&&(r.offset=e.offset,!G8e(e.offset))?new TypeError(F0("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):d1(e,"iter")&&(r.iter=e.iter,!H8e(e.iter))?new TypeError(F0("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",e))}Kor.exports=W8e});var a1r=s((RJe,i1r)=>{"use strict";var g6=D(),e1r=Rn(),X8e=s0(),J8e=Vs(),Y8e=Ya(),x8e=we(),Z8e=r1r();function t1r(r){var e,t,i,a,n,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(a=Z8e(e,r),a))throw a;return n=(e.period-e.offset)%e.period,n<0&&(n+=e.period),n-=1,u=x8e/e.period,o=e.amplitude/Y8e,v=0,t={},g6(t,"next",f),g6(t,"return",c),e1r&&g6(t,e1r,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(n+=1,n%=e.period,{value:o*J8e(X8e(u*n)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return t1r(e)}}i1r.exports=t1r});var s1r=s((LJe,n1r)=>{"use strict";var $8e=a1r();n1r.exports=$8e});var o1r=s((PJe,u1r)=>{"use strict";var Q8e=Qr(),K8e=s1r();function r7e(r){return Q8e(r,"iterSawtoothWave",K8e),r}u1r.exports=r7e});var f1r=s((FJe,v1r)=>{"use strict";var e7e=17976931348623157e292;v1r.exports=e7e});var g1=s((jJe,c1r)=>{"use strict";var t7e=709.782712893384;c1r.exports=t7e});var p1r=s((MJe,l1r)=>{"use strict";var i7e=xr();function a7e(r,e){var t,i,a,n;if(a=i7e(-e),i=a,i!==0)for(t=i,n=1;n<r;++n)t/=n,t*=e,i+=t;return i}l1r.exports=a7e});var m1r=s((BJe,g1r)=>{"use strict";var n7e=yi(),d1r=Rr(),s7e=xr(),u7e=we();function o7e(r,e){var t,i,a,n,u;if(n=n7e(d1r(e)),n!==0&&r>1){for(i=s7e(-e)/d1r(u7e*e),i*=e,t=.5,i/=t,a=i,u=2;u<r;++u)i/=u-t,i*=e,a+=i;n+=a}return n}g1r.exports=o7e});var m6=s((kJe,y1r)=>{"use strict";var v7e=-708.3964185322641;y1r.exports=v7e});var w1r=s((CJe,b1r)=>{"use strict";var En=xr(),m1=Gr(),f7e=wr(),h1r=g1(),q1r=m6();function c7e(r,e){var t,i;return i=r*f7e(e),e>=1?i<h1r&&-e>q1r?t=m1(e,r)*En(-e):r>=1?t=m1(e/En(e/r),r):t=En(i-e):i>q1r?t=m1(e,r)*En(-e):e/r<h1r?t=m1(e/En(e/r),r):t=En(i-e),t}b1r.exports=c7e});var y6=s((VJe,E1r)=>{"use strict";function l7e(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}E1r.exports=l7e});var S1r=s((UJe,N1r)=>{"use strict";var p7e=Function;N1r.exports=p7e});var A1r=s((GJe,O1r)=>{"use strict";var d7e=S1r();O1r.exports=d7e});var T1r=s((DJe,_1r)=>{"use strict";var g7e=A1r(),m7e=y6();function y7e(r){var e,t,i,a;if(r.length>500)return n;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,a=1;a<t;a++)e+="+x*",a<i&&(e+="("),e+=r[a];for(a=0;a<i-1;a++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new g7e(e)();function n(u){return m7e(r,u)}}_1r.exports=y7e});var L1r=s((HJe,R1r)=>{"use strict";var h7e=D(),I1r=y6(),q7e=T1r();h7e(I1r,"factory",q7e);R1r.exports=I1r});var F1r=s((zJe,P1r)=>{"use strict";var b7e=eval;P1r.exports=b7e});var M1r=s((WJe,j1r)=>{"use strict";var w7e=F1r();function E7e(){var r;try{w7e('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}j1r.exports=E7e});var h6=s((XJe,B1r)=>{"use strict";var N7e=M1r();B1r.exports=N7e});var C1r=s((JJe,k1r)=>{"use strict";var y1=Dr(),S7e=hi(),O7e=1e6;function A7e(r,e){var t,i,a,n,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||S7e,n=o.maxTerms||O7e,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(a of r)if(u+=a,y1(i*u)>=y1(a)||--n===0)break}else do a=r(),u+=a;while(y1(i*u)<y1(a)&&--n);return u}k1r.exports=A7e});var G1r=s((YJe,U1r)=>{"use strict";var V1r=Dr(),_7e=hi(),T7e=1e6;function I7e(r,e){var t,i,a,n,u;u={},arguments.length>1&&(u=e),t=u.tolerance||_7e,a=u.maxTerms||T7e,n=u.initialValue||0;do i=r(),n+=i;while(V1r(t*n)<V1r(i)&&--a);return n}U1r.exports=I7e});var h1=s((xJe,D1r)=>{"use strict";var R7e=h6(),L7e=C1r(),P7e=G1r(),q6;R7e()?q6=L7e:q6=P7e;D1r.exports=q6});var z1r=s((ZJe,H1r)=>{"use strict";function F7e(r){var e=-r,t=-1,i=0;return a;function a(){return t*=e,i+=1,t/i}}H1r.exports=F7e});var X1r=s(($Je,W1r)=>{"use strict";var j7e=Dr(),M7e=wr(),B7e=hi(),k7e=h1(),C7e=z1r();function V7e(r){var e,t;return r<=-1?NaN:(t=j7e(r),t>.95?M7e(1+r)-r:t<B7e?-r*r/2:(e={initialValue:-r},k7e(C7e(r),e)))}W1r.exports=V7e});var Y1r=s((QJe,J1r)=>{"use strict";var U7e=X1r();J1r.exports=U7e});var Z1r=s((KJe,x1r)=>{"use strict";function G7e(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}x1r.exports=G7e});var Q1r=s((rYe,$1r)=>{"use strict";function D7e(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}$1r.exports=D7e});var r2r=s((eYe,K1r)=>{"use strict";function H7e(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}K1r.exports=H7e});var t2r=s((tYe,e2r)=>{"use strict";function z7e(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}e2r.exports=z7e});var a2r=s((iYe,i2r)=>{"use strict";function W7e(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}i2r.exports=W7e});var s2r=s((aYe,n2r)=>{"use strict";function X7e(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}n2r.exports=X7e});var o2r=s((nYe,u2r)=>{"use strict";function J7e(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}u2r.exports=J7e});var f2r=s((sYe,v2r)=>{"use strict";function Y7e(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}v2r.exports=Y7e});var l2r=s((uYe,c2r)=>{"use strict";function x7e(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}c2r.exports=x7e});var d2r=s((oYe,p2r)=>{"use strict";var Z7e=L1r(),$7e=Y1r(),Q7e=yi(),b6=Rr(),K7e=xr(),r9e=mi(),e9e=Z1r(),t9e=Q1r(),i9e=r2r(),a9e=t2r(),n9e=a2r(),s9e=s2r(),u9e=o2r(),o9e=f2r(),v9e=l2r(),Ke=[0,0,0,0,0,0,0,0,0,0];function f9e(r,e){var t,i,a,n,u;return i=(e-r)/r,a=-$7e(i),n=r*a,u=b6(2*a),e<r&&(u=-u),Ke[0]=e9e(u),Ke[1]=t9e(u),Ke[2]=i9e(u),Ke[3]=a9e(u),Ke[4]=n9e(u),Ke[5]=s9e(u),Ke[6]=u9e(u),Ke[7]=o9e(u),Ke[8]=v9e(u),Ke[9]=-.0005967612901927463,t=Z7e(Ke,1/r),t*=K7e(-n)/b6(r9e*r),e<r&&(t=-t),t+=Q7e(b6(n))/2,t}p2r.exports=f9e});var m2r=s((vYe,g2r)=>{"use strict";function c9e(r,e){var t=1,i=r,a=e;return n;function n(){var u=t;return i+=1,t*=a/i,u}}g2r.exports=c9e});var h2r=s((fYe,y2r)=>{"use strict";var l9e=h1(),p9e=m2r();function d9e(r,e,t){var i,a;return t=t||0,a=p9e(r,e),i=l9e(a,{initialValue:t}),i}y2r.exports=d9e});var b2r=s((cYe,q2r)=>{"use strict";function g9e(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}q2r.exports=g9e});var E2r=s((lYe,w2r)=>{"use strict";var m9e=b2r();w2r.exports=m9e});var S2r=s((pYe,N2r)=>{"use strict";var y9e=E2r();N2r.exports=y9e});var _2r=s((dYe,A2r)=>{"use strict";var h9e=B3(),O2r=z(),w6=Ir();function q9e(r,e){return O2r(r)||O2r(e)?NaN:r===w6||e===w6?w6:r===e&&r===0?h9e(r)?r:e:r<e?r:e}A2r.exports=q9e});var I2r=s((gYe,T2r)=>{"use strict";var b9e=_2r();T2r.exports=b9e});var L2r=s((mYe,R2r)=>{"use strict";var w9e=10.900511;R2r.exports=w9e});var E6=s((yYe,P2r)=>{"use strict";var E9e=2.718281828459045;P2r.exports=E9e});var M2r=s((hYe,j2r)=>{"use strict";var N9e=S2r(),S9e=c0(),O9e=Za(),A9e=di(),_9e=Rr(),T9e=Dr(),Xi=xr(),j0=Gr(),N6=Nf(),S6=I2r(),F2r=wr(),q1=g1(),M0=m6(),O6=L2r(),I9e=E6();function R9e(r,e){var t,i,a,n,u,o,v;return a=r+O6-.5,v=(e-r-O6+.5)/a,r<1?e<=M0?Xi(r*F2r(e)-e-S9e(r)):j0(e,r)*Xi(-e)/O9e(r):(T9e(v*v*r)<=100&&r>150?(t=r*(A9e(v)-v)+e*(.5-O6)/a,t=Xi(t)):(n=r*F2r(e/a),u=r-e,S6(n,u)<=M0||N6(n,u)>=q1?(i=u/r,S6(n,u)/2>M0&&N6(n,u)/2<q1?(o=j0(e/a,r/2)*Xi(u/2),t=o*o):S6(n,u)/4>M0&&N6(n,u)/4<q1&&e>r?(o=j0(e/a,r/4)*Xi(u/4),t=o*o,t*=t):i>M0&&i<q1?t=j0(e*Xi(i)/a,r):t=Xi(n+u)):t=j0(e/a,r)*Xi(u)),t*=_9e(a/I9e)/N9e(r),t)}j2r.exports=R9e});var k2r=s((qYe,B2r)=>{"use strict";function L9e(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}B2r.exports=L9e});var V2r=s((bYe,C2r)=>{"use strict";function P9e(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}C2r.exports=P9e});var G2r=s((wYe,U2r)=>{"use strict";function F9e(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}U2r.exports=F9e});var H2r=s((EYe,D2r)=>{"use strict";var A6=wr(),j9e=hi(),M9e=k2r(),B9e=V2r(),k9e=G2r(),C9e=.15896368026733398,V9e=.5281534194946289,U9e=.45201730728149414;function G9e(r,e,t){var i,a,n,u;if(r<j9e)return-A6(r);if(e===0||t===0)return 0;if(a=0,r>2){if(r>=3){do r-=1,t-=1,a+=A6(r);while(r>=3);t=r-2}return n=t*(r+1),u=M9e(t),a+=n*C9e+n*u,a}return r<1&&(a+=-A6(r),t=e,e=r,r+=1),r<=1.5?(n=B9e(e),i=e*t,a+=i*V9e+i*n,a):(n=t*e,u=k9e(-t),a+=n*U9e+n*u,a)}D2r.exports=G9e});var Y2r=s((NYe,J2r)=>{"use strict";var z2r=Za(),W2r=u0(),D9e=di(),H9e=z(),X2r=H2r();function z9e(r){return H9e(r)?NaN:r<0?r<-.5?z2r(1+r)-1:W2r(-D9e(r)+X2r(r+2,r+1,r)):r<2?W2r(X2r(r+1,r,r-1)):z2r(1+r)-1}J2r.exports=z9e});var Z2r=s((SYe,x2r)=>{"use strict";var W9e=Y2r();x2r.exports=W9e});var Q2r=s((OYe,$2r)=>{"use strict";function X9e(r,e){var t,i,a,n;return t=-e,e=-e,i=r+1,a=1,u;function u(){return n=t/i,t*=e,a+=1,t/=a,i+=1,n}}$2r.exports=X9e});var rvr=s((AYe,K2r)=>{"use strict";var J9e=M3(),Y9e=h1(),x9e=Z2r(),Z9e=Q2r();function $9e(r,e,t){var i,a,n,u,o;return a=x9e(r),n=(a+1)/r,u=J9e(e,r),a-=u,a/=r,o=Z9e(r,e),u+=1,i=t?n:0,a=-u*Y9e(o,{initialValue:(i-a)/u}),t&&(a=-a),[a,n]}K2r.exports=$9e});var _6=s((_Ye,evr)=>{"use strict";var Q9e=11754943508222875e-54;evr.exports=Q9e});var ivr=s((TYe,tvr)=>{"use strict";var b1=Dr(),mt=_6(),K9e=hi(),rpe=1e6;function epe(r,e,t){var i,a,n,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],n=f[0],u===0&&(u=mt),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=mt),o=f[1]+f[0]/o,o===0&&(o=mt),v=1/v,a=o*v,u*=a);while(b1(a-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=mt),o=f[1]+f[0]/o,o===0&&(o=mt),v=1/v,a=o*v,u*=a);while(f&&b1(a-1)>e&&--t);return n/u}function tpe(r,e,t){var i,a,n,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),n=v[1],n===0&&(n=mt),u=n,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=mt),u=v[1]+v[0]/u,u===0&&(u=mt),o=1/o,a=u*o,n*=a);while(v&&b1(a-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=mt),u=v[1]+v[0]/u,u===0&&(u=mt),o=1/o,a=u*o,n*=a);while(v&&b1(a-1)>e&&--t);return n}function ipe(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),t=i.maxIter||rpe,a=i.tolerance||K9e,i.keep?tpe(r,a,t):epe(r,a,t)}tvr.exports=ipe});var svr=s((IYe,nvr)=>{"use strict";var avr=Dr(),ape=hi(),Nn=_6(),npe=1e6;function spe(r,e,t){var i,a,n,u,o,v;v=r(),o=v[1],a=v[0],o===0&&(o=Nn),n=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=Nn),n=v[1]+v[0]/n,n===0&&(n=Nn),u=1/u,i=n*u,o*=i);while(v&&avr(i-1)>e&&--t);return a/o}function upe(r,e,t){var i,a,n,u,o;o=r(),u=o[1],u===0&&(u=Nn),a=u,n=0;do o=r(),o&&(n=o[1]+o[0]*n,n===0&&(n=Nn),a=o[1]+o[0]/a,a===0&&(a=Nn),n=1/n,i=a*n,u*=i);while(o&&avr(i-1)>e&&--t);return u}function ope(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),a=i.tolerance||ape,t=i.maxIter||npe,i.keep?upe(r,a,t):spe(r,a,t)}nvr.exports=ope});var ovr=s((RYe,uvr)=>{"use strict";var vpe=h6(),fpe=ivr(),cpe=svr(),T6;vpe()?T6=fpe:T6=cpe;uvr.exports=T6});var fvr=s((LYe,vvr)=>{"use strict";function lpe(r,e){var t=e-r+1,i=r,a=0;return n;function n(){return a+=1,t+=2,[a*(i-a),t]}}vvr.exports=lpe});var lvr=s((PYe,cvr)=>{"use strict";var ppe=ovr(),dpe=fvr();function gpe(r,e){var t=dpe(r,e);return 1/(e-r+1+ppe(t))}cvr.exports=gpe});var Evr=s((FYe,wvr)=>{"use strict";var mpe=c0(),ype=Ur(),B0=Za(),pvr=Dr(),hpe=xr(),dvr=Gr(),rt=wr(),qpe=U3(),gvr=f1r(),bpe=k3(),mvr=g1(),wpe=pr(),Epe=p1r(),Npe=m1r(),yvr=w1r(),Spe=d2r(),I6=h2r(),hvr=M2r(),Ope=rvr(),qvr=lvr(),Ape=170;function bvr(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(r<0||e<=0)return NaN;if(n=t===void 0?!0:t,l=i,p=0,e>=Ape&&!n)return l&&e*4<r?(p=e*rt(r)-r,p+=rt(qvr(e,r))):!l&&e>4*r?(p=e*rt(r)-r,o=0,p+=rt(I6(e,r,o)/e)):(p=bvr(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=rt(p)-e+(e-.5)*rt(e),p+=rt(bpe)):(p=e*rt(r)-r,o=0,p+=rt(I6(e,r,o)/e)):p=rt(p)+mpe(e)),p>mvr?wpe:hpe(p);switch(c=e<30&&e<=r+1&&r<mvr,c?(h=ype(e),m=h===e,v=m?!1:pvr(h-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<qpe&&e>1?u=6:r<.5?-.4/rt(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,n&&e>20&&(y=pvr((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=Epe(e,r),n===!1&&(p*=B0(e));break;case 1:p=Npe(e,r),n===!1&&(p*=B0(e));break;case 2:p=n?hvr(e,r):yvr(e,r),p!==0&&(o=0,a=!1,l&&(o=n?1:B0(e),n||p>=1||gvr*p>o?(o/=p,n||e<1||gvr/e>o?(o*=-e,a=!0):o=0):o=0)),p*=I6(e,r,o)/e,a&&(l=!1,p=-p);break;case 3:l=!l,d=Ope(e,r,l),p=d[0],q=d[1],l=!1,n&&(p/=q);break;case 4:p=n?hvr(e,r):yvr(e,r),p!==0&&(p*=qvr(e,r));break;case 5:p=Spe(e,r),r>=e&&(l=!l);break;case 6:p=n?dvr(r,e)/B0(e+1):dvr(r,e)/e,p*=1-e*r/(e+1);break}return n&&p>1&&(p=1),l&&(g=n?1:B0(e),p=g-p),p}wvr.exports=bvr});var R6=s((jYe,Nvr)=>{"use strict";var _pe=Evr();Nvr.exports=_pe});var Ovr=s((MYe,Svr)=>{"use strict";var Tpe=R6(),L6=z(),Ipe=pr();function Rpe(r,e,t){return L6(r)||L6(e)||L6(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Ipe?1:Tpe(r*t,e)}Svr.exports=Rpe});var Tvr=s((BYe,_vr)=>{"use strict";var Lpe=mr(),Ppe=Wu().factory,Fpe=R6(),Avr=z(),jpe=pr();function Mpe(r,e){if(Avr(r)||Avr(e)||r<0||e<=0)return Lpe(NaN);if(r===0)return Ppe(0);return t;function t(i){return i<=0?0:i===jpe?1:Fpe(i*e,r)}}_vr.exports=Mpe});var P6=s((kYe,Rvr)=>{"use strict";var Bpe=D(),Ivr=Ovr(),kpe=Tvr();Bpe(Ivr,"factory",kpe);Rvr.exports=Ivr});var Pvr=s((CYe,Lvr)=>{"use strict";var Cpe=P6();function Vpe(r,e){return Cpe(r,e/2,.5)}Lvr.exports=Vpe});var jvr=s((VYe,Fvr)=>{"use strict";var Upe=P6().factory;function Gpe(r){return Upe(r/2,.5)}Fvr.exports=Gpe});var kvr=s((UYe,Bvr)=>{"use strict";var Dpe=D(),Mvr=Pvr(),Hpe=jvr();Dpe(Mvr,"factory",Hpe);Bvr.exports=Mvr});var Gvr=s((GYe,Uvr)=>{"use strict";var zpe=hr(),Wpe=vr(),Xpe=ps(),Cvr=V(),Vvr=["values","indices","*"];function Jpe(r,e){return zpe(e)?Wpe(e,"returns")&&(r.returns=e.returns,Xpe(Vvr,r.returns)===-1)?new TypeError(Cvr('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Vvr.join('", "'),r.returns)):null:new TypeError(Cvr("invalid argument. Options argument must be an object. Value: `%s`.",e))}Uvr.exports=Jpe});var Hvr=s((DYe,Dvr)=>{"use strict";var Ype=vr();function xpe(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),Ype(t,a)?t[a].push(r[n]):t[a]=[r[n]];return t}Dvr.exports=xpe});var Wvr=s((HYe,zvr)=>{"use strict";var Zpe=vr();function $pe(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),Zpe(t,a)?t[a].push(n):t[a]=[n];return t}zvr.exports=$pe});var Jvr=s((zYe,Xvr)=>{"use strict";var Qpe=vr();function Kpe(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),Qpe(t,a)?t[a].push([n,r[n]]):t[a]=[[n,r[n]]];return t}Xvr.exports=Kpe});var $vr=s((WYe,Zvr)=>{"use strict";var Yvr=Ve(),xvr=V(),rde=Gvr(),ede=Hvr(),tde=Wvr(),ide=Jvr();function ade(r,e,t){var i,a,n;if(!Yvr(r))throw new TypeError(xvr("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)n=e;else{if(a=rde(i,e),a)throw a;n=t}if(!Yvr(n))throw new TypeError(xvr("invalid argument. Last argument must be a collection. Value: `%s`.",n));if(r.length!==n.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?ede(r,n):i.returns==="indices"?tde(r,n):ide(r,n)}Zvr.exports=ade});var Kvr=s((XYe,Qvr)=>{"use strict";var nde=$vr();Qvr.exports=nde});var e3r=s((JYe,r3r)=>{"use strict";function sde(r){var e,t,i,a,n,u;for(e=0,t=0,a=0,i=r.length,n=0;n<i;n++)u=r[n],e=u-t,t+=e/(n+1),a+=e*(u-t);return a/(n-1)}r3r.exports=sde});var a3r=s((YYe,i3r)=>{"use strict";var ude=qe(),ode=Nr().isPrimitive,vde=hr(),fde=oe(),t3r=vr(),F6=V();function cde(r,e){return vde(e)?t3r(e,"alpha")&&(r.alpha=e.alpha,!ode(r.alpha)||fde(r.alpha))?new TypeError(F6("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):t3r(e,"groups")&&(r.groups=e.groups,!ude(r.groups))?new TypeError(F6("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(F6("invalid argument. Options argument must be an object. Value: `%s`.",e))}i3r.exports=cde});var c3r=s((xYe,f3r)=>{"use strict";var n3r=z(),w1=_e(),s3r=Gr(),lde=Dr(),u3r=zs(),pde=sa(),o3r=Xn(),dde=Is(),gde=Rs(),mde=pde+1,v3r=1e308;function yde(r,e){var t,i;return n3r(r)||n3r(e)||w1(e)?NaN:w1(r)||r===0||e<gde||lde(r)>mde&&e<=0?r:e>o3r?0*r:e<dde?(t=s3r(10,-(e+o3r)),i=r*v3r*t,w1(i)?r:u3r(i)/v3r/t):(t=s3r(10,-e),i=r*t,w1(i)?r:u3r(i)/t)}f3r.exports=yde});var p3r=s((ZYe,l3r)=>{"use strict";var hde=c3r();l3r.exports=hde});var m3r=s(($Ye,g3r)=>{"use strict";var qde=nt(),bde=hr(),wde=de().isPrimitive,d3r=vr(),j6=V(),M6=p3r();function Ede(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!bde(r))throw new TypeError(j6("invalid argument. First argument must be an object. Value: `%s`.",r));if(d3r(r,"digits")){if(!qde(r.digits))throw new TypeError(j6("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(d3r(r,"decision")){if(!wde(r.decision))throw new TypeError(j6("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+M6(this.pValue,-t)+`
`,i+="    statistic: "+M6(this.statistic,-t)+`
`,i+="    df: "+M6(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}g3r.exports=Ede});var q3r=s((QYe,h3r)=>{"use strict";var Nde=Ve(),Sde=hr(),pa=Qr(),Ode=Va(),E1=V(),Ade=kvr(),_de=Kvr(),y3r=wr(),Tde=e3r(),Ide=a3r(),Rde=m3r();function Lde(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;if(v=[],e=arguments.length,f={},Sde(arguments[e-1])&&(r=arguments[e-1],e-=1,m=Ide(f,r),m))throw m;if(f.groups){if(a=_de(arguments[0],f.groups),i=Ode(a),e=i.length,e<2)throw new Error(E1("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(w=0;w<e;w++)v.push(a[i[w]])}else for(w=0;w<e;w++)v.push(arguments[w]);for(u=0,t=0,o=0,y=0,h=new Array(e),q=h.slice(),w=0;w<e;w++){if(p=v[w],!Nde(p))throw new TypeError(E1("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(E1("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));h[w]=p.length-1,u+=h[w],t+=1/h[w],q[w]=Tde(p),o+=h[w]*q[w],y+=h[w]*y3r(q[w])}if(o/=u,f.alpha===void 0?n=.05:n=f.alpha,n<0||n>1)throw new RangeError(E1("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",n));return l=u*y3r(o)-y,l/=1+(t-1/u)/(3*(e-1)),d=e-1,c=1-Ade(l,d),g={},pa(g,"rejected",c<=n),pa(g,"alpha",n),pa(g,"pValue",c),pa(g,"statistic",l),pa(g,"df",d),pa(g,"method","Bartlett's test of equal variances"),pa(g,"print",Rde),g}h3r.exports=Lde});var w3r=s((KYe,b3r)=>{"use strict";var Pde=q3r();b3r.exports=Pde});var N3r=s((rxe,E3r)=>{"use strict";var B6=z(),Fde=Ni();function jde(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,n=e[u],i[o]=n,o+=a,f=1,B6(n)===!1)for(f;f<r;f++){if(u+=t,v=e[u],B6(v)){n=v;break}(v>n||v===n&&Fde(v))&&(n=v),i[o]=n,o+=a}if(B6(n))for(f;f<r;f++)i[o]=n,o+=a;return i}E3r.exports=jde});var O3r=s((exe,S3r)=>{"use strict";var k6=z(),Mde=Ni();function Bde(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return a;if(v=i,f=u,o=e[v],a[f]=o,f+=n,l=1,k6(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],k6(c)){o=c;break}(c>o||c===o&&Mde(c))&&(o=c),a[f]=o,f+=n}if(k6(o))for(l;l<r;l++)a[f]=o,f+=n;return a}S3r.exports=Bde});var T3r=s((txe,_3r)=>{"use strict";var kde=D(),A3r=N3r(),Cde=O3r();kde(A3r,"ndarray",Cde);_3r.exports=A3r});var R3r=s((ixe,I3r)=>{"use strict";var Vde=T3r();I3r.exports=Vde});var P3r=s((axe,L3r)=>{"use strict";var Ude=z(),Gde=Ni();function Dde(r,e,t){var i,a,n,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?a=(1-r)*t:a=0,i=e[a],u=1;u<r;u++){if(a+=t,n=e[a],Ude(n))return n;(n>i||n===i&&Gde(n))&&(i=n)}return i}L3r.exports=Dde});var j3r=s((nxe,F3r)=>{"use strict";var Hde=z(),zde=Ni();function Wde(r,e,t,i){var a,n,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(n=i,a=e[n],o=1;o<r;o++){if(n+=t,u=e[n],Hde(u))return u;(u>a||u===a&&zde(u))&&(a=u)}return a}F3r.exports=Wde});var k3r=s((sxe,B3r)=>{"use strict";var Xde=D(),M3r=P3r(),Jde=j3r();Xde(M3r,"ndarray",Jde);B3r.exports=M3r});var V3r=s((uxe,C3r)=>{"use strict";var Yde=k3r();C3r.exports=Yde});var D3r=s((oxe,G3r)=>{"use strict";var U3r=z(),xde=Ni();function Zde(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=a;if(f===r)return NaN;if(n=e[u],U3r(n))return n;for(f+=1,f;f<r;f++)if(u+=t,o+=a,!i[o]){if(v=e[u],U3r(v))return v;(v>n||v===n&&xde(v))&&(n=v)}return n}G3r.exports=Zde});var W3r=s((vxe,z3r)=>{"use strict";var H3r=z(),$de=Ni();function Qde(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&a[f]!==0;l++)v+=t,f+=n;if(l===r)return NaN;if(o=e[v],H3r(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=n,!a[f]){if(c=e[v],H3r(c))return c;(c>o||c===o&&$de(c))&&(o=c)}return o}z3r.exports=Qde});var Y3r=s((fxe,J3r)=>{"use strict";var Kde=D(),X3r=D3r(),rge=W3r();Kde(X3r,"ndarray",rge);J3r.exports=X3r});var Z3r=s((cxe,x3r)=>{"use strict";var ege=yi(),tge=Rr(),C6=z();function ige(r,e,t){var i,a;return C6(r)||C6(e)||C6(t)||t<0?NaN:t===0?r<e?0:1:(i=t*tge(2),a=r-e,.5*ege(-a/i))}x3r.exports=ige});var Q3r=s((lxe,$3r)=>{"use strict";var age=mr(),nge=Wu().factory,V6=z(),sge=Rr(),uge=yi();function oge(r,e){var t;if(V6(r)||V6(e)||e<0)return age(NaN);if(e===0)return nge(r);return t=e*sge(2),i;function i(a){var n;return V6(a)?NaN:(n=a-r,.5*uge(-n/t))}}$3r.exports=oge});var efr=s((pxe,rfr)=>{"use strict";var vge=D(),K3r=Z3r(),fge=Q3r();vge(K3r,"factory",fge);rfr.exports=K3r});var afr=s((dxe,ifr)=>{"use strict";var tfr=z(),cge=wr(),lge=mi(),pge=E6();function dge(r,e){return tfr(r)||tfr(e)||e<=0?NaN:.5*cge(lge*pge*e*e)}ifr.exports=dge});var sfr=s((gxe,nfr)=>{"use strict";var gge=afr();nfr.exports=gge});var vfr=s((mxe,ofr)=>{"use strict";var ufr=z();function mge(r,e){return ufr(r)||ufr(e)||e<=0?NaN:0}ofr.exports=mge});var cfr=s((yxe,ffr)=>{"use strict";var yge=vfr();ffr.exports=yge});var pfr=s((hxe,lfr)=>{"use strict";var hge=Ur(),qge=[bge,wge,Ege,Nge,Sge,Oge,Age,_ge,Tge,Ige,Rge,Lge,Pge,Fge,jge,Mge,Bge,kge,Cge,Vge,Uge,Gge,Dge,Hge,zge,Wge,Xge,Jge,Yge,xge,Zge,$ge,Qge,Kge,rme,eme,tme,ime,ame,nme,sme,ume,ome,vme,fme,cme,lme,pme,dme,gme,mme,yme,hme,qme,bme,wme,Eme,Nme,Sme,Ome,Ame,_me,Tme,Ime,Rme,Lme,Pme,Fme,jme,Mme,Bme,kme,Cme,Vme,Ume,Gme,Dme,Hme,zme,Wme,Xme,Jme,Yme,xme,Zme,$me,Qme,Kme,rye,eye,tye,iye,aye,nye,sye,uye,oye,vye,fye,cye,lye];function bge(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function wge(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function Ege(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function Nge(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function Sge(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function Oge(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function Age(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function _ge(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function Tge(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function Ige(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function Rge(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function Lge(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function Pge(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function Fge(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function jge(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function Mge(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function Bge(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function kge(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function Cge(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function Vge(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function Uge(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function Gge(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function Dge(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function Hge(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function zge(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function Wge(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function Xge(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function Jge(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function Yge(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function xge(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function Zge(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function $ge(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function Qge(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function Kge(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function rme(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function eme(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function tme(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function ime(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function ame(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function nme(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function sme(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function ume(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function ome(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function vme(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function fme(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function cme(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function lme(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function pme(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function dme(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function gme(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function mme(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function yme(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function hme(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function qme(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function bme(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function wme(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function Eme(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function Nme(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function Sme(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function Ome(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function Ame(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function _me(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function Tme(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function Ime(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function Rme(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function Lme(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function Pme(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function Fme(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function jme(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function Mme(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function Bme(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function kme(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function Cme(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function Vme(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function Ume(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function Gme(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function Dme(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function Hme(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function zme(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function Wme(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function Xme(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function Jme(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function Yme(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function xme(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function Zme(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function $me(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function Qme(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function Kme(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function rye(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function eye(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function tye(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function iye(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function aye(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function nye(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function sye(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function uye(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function oye(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function vye(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function fye(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function cye(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function lye(){return 1}function pye(r){var e=hge(r),t=qge[e];return t(2*r-(2*e+1))}lfr.exports=pye});var hfr=s((qxe,yfr)=>{"use strict";var dfr=xr(),dye=pr(),gfr=pfr(),mfr=.5641895835477563;function gye(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?mfr/r:(e=r*r,mfr*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):gfr(400/(4+r)):r<-26.7?dye:(e=r*r,r<-6.1?2*dfr(e):2*dfr(e)-gfr(400/(4-r)))}yfr.exports=gye});var U6=s((bxe,qfr)=>{"use strict";var mye=hfr();qfr.exports=mye});var Efr=s((wxe,wfr)=>{"use strict";var yye=wr(),hye=di(),qye=Ms(),bye=yi(),wye=U6(),Eye=Ir(),G6=z(),bfr=.7071067811865475;function Nye(r,e,t){var i;return G6(r)||G6(e)||G6(t)||t<0?NaN:t===0?r<e?Eye:0:(i=(r-e)/t,i<-1?yye(wye(-i*bfr)/2)-qye(i)/2:hye(-bye(i*bfr)/2))}wfr.exports=Nye});var Ofr=s((Exe,Sfr)=>{"use strict";var Nfr=z(),Sye=Ir();function Oye(r,e){return Nfr(r)||Nfr(e)?NaN:r<e?Sye:0}Sfr.exports=Oye});var Tfr=s((Nxe,_fr)=>{"use strict";var Aye=mr(),Afr=z(),_ye=Ir();function Tye(r){if(Afr(r))return Aye(NaN);return e;function e(t){return Afr(t)?NaN:t<r?_ye:0}}_fr.exports=Tye});var Lfr=s((Sxe,Rfr)=>{"use strict";var Iye=D(),Ifr=Ofr(),Rye=Tfr();Iye(Ifr,"factory",Rye);Rfr.exports=Ifr});var Mfr=s((Oxe,jfr)=>{"use strict";var Lye=mr(),Pye=Lfr().factory,Pfr=z(),Fye=di(),jye=Ms(),Mye=yi(),Bye=U6(),kye=wr(),Ffr=.7071067811865475;function Cye(r,e){if(Pfr(r)||Pfr(e)||e<0)return Lye(NaN);if(e===0)return Pye(r);return t;function t(i){var a=(i-r)/e;return a<-1?kye(Bye(-a*Ffr)/2)-jye(a)/2:Fye(-Mye(a*Ffr)/2)}}jfr.exports=Cye});var Cfr=s((Axe,kfr)=>{"use strict";var Vye=D(),Bfr=Efr(),Uye=Mfr();Vye(Bfr,"factory",Uye);kfr.exports=Bfr});var D6=s((_xe,Vfr)=>{"use strict";var Gye=1.8378770664093456;Vfr.exports=Gye});var Dfr=s((Txe,Gfr)=>{"use strict";var Dye=wr(),Ufr=Gr(),Hye=D6(),zye=Ir(),Wye=pr(),H6=z();function Xye(r,e,t){var i,a,n;return H6(r)||H6(e)||H6(t)||t<0?NaN:t===0?r===e?Wye:zye:(i=Ufr(t,2),a=-.5*(2*Dye(t)+Hye),n=-1/(2*i),a+n*Ufr(r-e,2))}Gfr.exports=Xye});var Wfr=s((Ixe,zfr)=>{"use strict";var Jye=pr(),Yye=Ir(),Hfr=z();function xye(r,e){return Hfr(r)||Hfr(e)?NaN:r===e?Jye:Yye}zfr.exports=xye});var Yfr=s((Rxe,Jfr)=>{"use strict";var Zye=mr(),$ye=pr(),Qye=Ir(),Xfr=z();function Kye(r){if(Xfr(r))return Zye(NaN);return e;function e(t){return Xfr(t)?NaN:t===r?$ye:Qye}}Jfr.exports=Kye});var $fr=s((Lxe,Zfr)=>{"use strict";var rhe=D(),xfr=Wfr(),ehe=Yfr();rhe(xfr,"factory",ehe);Zfr.exports=xfr});var e4r=s((Pxe,r4r)=>{"use strict";var the=mr(),ihe=$fr().factory,ahe=D6(),Qfr=z(),Kfr=Gr(),nhe=wr();function she(r,e){var t,i,a;if(Qfr(r)||Qfr(e)||e<0)return the(NaN);if(e===0)return ihe(r);return t=Kfr(e,2),i=-.5*(2*nhe(e)+ahe),a=-1/(2*t),n;function n(u){return i+a*Kfr(u-r,2)}}r4r.exports=she});var a4r=s((Fxe,i4r)=>{"use strict";var uhe=D(),t4r=Dfr(),ohe=e4r();uhe(t4r,"factory",ohe);i4r.exports=t4r});var u4r=s((jxe,s4r)=>{"use strict";var n4r=z();function vhe(r,e){return n4r(r)||n4r(e)||e<=0?NaN:r}s4r.exports=vhe});var v4r=s((Mxe,o4r)=>{"use strict";var fhe=u4r();o4r.exports=fhe});var l4r=s((Bxe,c4r)=>{"use strict";var f4r=z();function che(r,e){return f4r(r)||f4r(e)||e<=0?NaN:r}c4r.exports=che});var d4r=s((kxe,p4r)=>{"use strict";var lhe=l4r();p4r.exports=lhe});var m4r=s((Cxe,g4r)=>{"use strict";var z6=z(),phe=xr(),dhe=Gr();function ghe(r,e,t){return z6(r)||z6(e)||z6(t)||t<=0?NaN:phe(e*r+.5*dhe(t*r,2))}g4r.exports=ghe});var h4r=s((Vxe,y4r)=>{"use strict";var mhe=mr(),W6=z(),yhe=xr(),hhe=Gr();function qhe(r,e){if(W6(r)||W6(e)||e<=0)return mhe(NaN);return t;function t(i){return W6(i)?NaN:yhe(r*i+.5*hhe(e*i,2))}}y4r.exports=qhe});var w4r=s((Uxe,b4r)=>{"use strict";var bhe=D(),q4r=m4r(),whe=h4r();bhe(q4r,"factory",whe);b4r.exports=q4r});var S4r=s((Gxe,N4r)=>{"use strict";var E4r=z();function Ehe(r,e){return E4r(r)||E4r(e)||e<=0?NaN:r}N4r.exports=Ehe});var A4r=s((Dxe,O4r)=>{"use strict";var Nhe=S4r();O4r.exports=Nhe});var I4r=s((Hxe,T4r)=>{"use strict";var She=xr(),_4r=Gr(),Ohe=Rr(),Ahe=mi(),_he=pr(),X6=z();function The(r,e,t){var i,a,n;return X6(r)||X6(e)||X6(t)||t<0?NaN:t===0?r===e?_he:0:(i=_4r(t,2),a=1/Ohe(i*Ahe),n=-1/(2*i),a*She(n*_4r(r-e,2)))}T4r.exports=The});var P4r=s((zxe,L4r)=>{"use strict";var Ihe=pr(),R4r=z();function Rhe(r,e){return R4r(r)||R4r(e)?NaN:r===e?Ihe:0}L4r.exports=Rhe});var M4r=s((Wxe,j4r)=>{"use strict";var Lhe=mr(),Phe=pr(),F4r=z();function Fhe(r){if(F4r(r))return Lhe(NaN);return e;function e(t){return F4r(t)?NaN:t===r?Phe:0}}j4r.exports=Fhe});var C4r=s((Xxe,k4r)=>{"use strict";var jhe=D(),B4r=P4r(),Mhe=M4r();jhe(B4r,"factory",Mhe);k4r.exports=B4r});var G4r=s((Jxe,U4r)=>{"use strict";var Bhe=mr(),khe=C4r().factory,J6=z(),Che=Rr(),Vhe=xr(),V4r=Gr(),Uhe=mi();function Ghe(r,e){var t,i,a;if(J6(r)||J6(e)||e<0)return Bhe(NaN);if(e===0)return khe(r);return t=V4r(e,2),i=1/Che(t*Uhe),a=-1/(2*t),n;function n(u){return J6(u)?NaN:i*Vhe(a*V4r(u-r,2))}}U4r.exports=Ghe});var z4r=s((Yxe,H4r)=>{"use strict";var Dhe=D(),D4r=I4r(),Hhe=G4r();Dhe(D4r,"factory",Hhe);H4r.exports=D4r});var J4r=s((xxe,X4r)=>{"use strict";var W4r=z();function zhe(r,e){return W4r(r)||W4r(e)||e<=0?NaN:0}X4r.exports=zhe});var x4r=s((Zxe,Y4r)=>{"use strict";var Whe=J4r();Y4r.exports=Whe});var Q4r=s(($xe,$4r)=>{"use strict";var Z4r=z();function Xhe(r,e){return Z4r(r)||Z4r(e)||e<=0?NaN:e}$4r.exports=Xhe});var r6r=s((Qxe,K4r)=>{"use strict";var Jhe=Q4r();K4r.exports=Jhe});var i6r=s((Kxe,t6r)=>{"use strict";var e6r=z();function Yhe(r,e){return e6r(r)||e6r(e)||e<=0?NaN:e*e}t6r.exports=Yhe});var n6r=s((rZe,a6r)=>{"use strict";var xhe=i6r();a6r.exports=xhe});var u6r=s((eZe,s6r)=>{"use strict";var ke=Qr(),Zhe=efr(),$he=sfr(),Qhe=cfr(),Khe=Cfr(),rqe=a4r(),eqe=v4r(),tqe=d4r(),iqe=w4r(),aqe=A4r(),nqe=z4r(),sqe=B4(),uqe=x4r(),oqe=r6r(),vqe=n6r();function fqe(r){return ke(r,"cdf",Zhe),ke(r,"entropy",$he),ke(r,"kurtosis",Qhe),ke(r,"logcdf",Khe),ke(r,"logpdf",rqe),ke(r,"mean",eqe),ke(r,"median",tqe),ke(r,"mgf",iqe),ke(r,"mode",aqe),ke(r,"pdf",nqe),ke(r,"quantile",sqe),ke(r,"skewness",uqe),ke(r,"stdev",oqe),ke(r,"variance",vqe),r}s6r.exports=fqe});var v6r=s((tZe,o6r)=>{"use strict";var cqe=Qr(),lqe=u6r();function pqe(r){return cqe(r,"normal",lqe({})),r}o6r.exports=pqe});var c6r=s((iZe,f6r)=>{"use strict";var k0=Qr(),dqe=w3r(),gqe=R3r().ndarray,mqe=V3r().ndarray,yqe=Y3r().ndarray,hqe=v6r();function qqe(r){return k0(r,"bartlettTest",dqe),k0(r,"cumax",gqe),k0(r,"max",mqe),k0(r,"mskmax",yqe),k0(r,"dists",hqe({})),r}f6r.exports=qqe});var p6r=s((aZe,l6r)=>{"use strict";var bqe=Yr().isPrimitive,wqe=V();function Eqe(r){return e;function e(t){if(!bqe(t))throw new TypeError(wqe("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}l6r.exports=Eqe});var g6r=s((nZe,d6r)=>{"use strict";var Nqe=p6r();d6r.exports=Nqe});var q6r=s((sZe,h6r)=>{"use strict";var m6r=Yr().isPrimitive,y6r=V();function Sqe(r){return e;function e(t,i){if(!m6r(t))throw new TypeError(y6r("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!m6r(i))throw new TypeError(y6r("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}h6r.exports=Sqe});var w6r=s((uZe,b6r)=>{"use strict";var Oqe=q6r();b6r.exports=Oqe});var N6r=s((oZe,E6r)=>{"use strict";var Y6=Yr().isPrimitive,x6=V();function Aqe(r){return e;function e(t,i,a){if(!Y6(t))throw new TypeError(x6("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Y6(i))throw new TypeError(x6("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Y6(a))throw new TypeError(x6("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(a)));return r(t,i,a)}}E6r.exports=Aqe});var O6r=s((vZe,S6r)=>{"use strict";var _qe=N6r();S6r.exports=_qe});var _6r=s((fZe,A6r)=>{"use strict";var Z6=Qr(),Tqe=g6r(),Iqe=w6r(),Rqe=O6r();function Lqe(r){return Z6(r,"s_o",Tqe),Z6(r,"ss_o",Iqe),Z6(r,"sss_o",Rqe),r}A6r.exports=Lqe});var I6r=s((cZe,T6r)=>{"use strict";function Pqe(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}T6r.exports=Pqe});var N1=s((lZe,R6r)=>{"use strict";var Fqe=I6r();R6r.exports=Fqe});var P6r=s((pZe,L6r)=>{"use strict";var jqe=N1(),Mqe=fa(),S1=qi(),Bqe=Ei(),kqe=/\s+/g,Cqe=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Vqe=/(?:\s|^)([^\s]+)(?=\s|$)/g,Uqe=/([a-z0-9])([A-Z])/g;function Gqe(r,e,t){return e=Mqe(e),t===0?e:jqe(e)}function Dqe(r){return r=S1(r,Cqe," "),r=S1(r,kqe," "),r=S1(r,Uqe,"$1 $2"),r=Bqe(r),S1(r,Vqe,Gqe)}L6r.exports=Dqe});var j6r=s((dZe,F6r)=>{"use strict";var Hqe=P6r();F6r.exports=Hqe});var B6r=s((gZe,M6r)=>{"use strict";var zqe=Yr().isPrimitive,Wqe=V(),Xqe=j6r();function Jqe(r){if(!zqe(r))throw new TypeError(Wqe("invalid argument. First argument must be a string. Value: `%s`.",r));return Xqe(r)}M6r.exports=Jqe});var C6r=s((mZe,k6r)=>{"use strict";var Yqe=B6r();k6r.exports=Yqe});var U6r=s((yZe,V6r)=>{"use strict";var xqe=Yr().isPrimitive,Zqe=V(),$qe=N1();function Qqe(r){if(!xqe(r))throw new TypeError(Zqe("invalid argument. First argument must be a string. Value: `%s`.",r));return $qe(r)}V6r.exports=Qqe});var D6r=s((hZe,G6r)=>{"use strict";var Kqe=U6r();G6r.exports=Kqe});var z6r=s((qZe,H6r)=>{"use strict";function rbe(r){return r.toUpperCase()}H6r.exports=rbe});var X6r=s((bZe,W6r)=>{"use strict";var ebe=z6r();W6r.exports=ebe});var Y6r=s((wZe,J6r)=>{"use strict";var tbe=X6r(),$6=qi(),ibe=Ei(),abe=/\s+/g,nbe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,sbe=/([a-z0-9])([A-Z])/g;function ube(r){return r=$6(r,nbe," "),r=$6(r,sbe,"$1 $2"),r=ibe(r),r=$6(r,abe,"_"),tbe(r)}J6r.exports=ube});var Z6r=s((EZe,x6r)=>{"use strict";var obe=Y6r();x6r.exports=obe});var Q6r=s((NZe,$6r)=>{"use strict";var vbe=Yr().isPrimitive,fbe=V(),cbe=Z6r();function lbe(r){if(!vbe(r))throw new TypeError(fbe("invalid argument. Must provide a string. Value: `%s`.",r));return cbe(r)}$6r.exports=lbe});var r5r=s((SZe,K6r)=>{"use strict";var pbe=Q6r();K6r.exports=pbe});var t5r=s((OZe,e5r)=>{"use strict";var dbe=fa(),Q6=qi(),gbe=Ei(),mbe=/\s+/g,ybe=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,hbe=/([a-z0-9])([A-Z])/g;function qbe(r){return r=Q6(r,ybe," "),r=Q6(r,hbe,"$1 $2"),r=gbe(r),r=Q6(r,mbe,"-"),dbe(r)}e5r.exports=qbe});var a5r=s((AZe,i5r)=>{"use strict";var bbe=t5r();i5r.exports=bbe});var s5r=s((_Ze,n5r)=>{"use strict";var wbe=Yr().isPrimitive,Ebe=V(),Nbe=a5r();function Sbe(r){if(!wbe(r))throw new TypeError(Ebe("invalid argument. Must provide a string. Value: `%s`.",r));return Nbe(r)}n5r.exports=Sbe});var o5r=s((TZe,u5r)=>{"use strict";var Obe=s5r();u5r.exports=Obe});var f5r=s((IZe,v5r)=>{"use strict";var Abe=Yr().isPrimitive,_be=V(),Tbe=fa();function Ibe(r){if(!Abe(r))throw new TypeError(_be("invalid argument. Must provide a string. Value: `%s`.",r));return Tbe(r)}v5r.exports=Ibe});var l5r=s((RZe,c5r)=>{"use strict";var Rbe=f5r();c5r.exports=Rbe});var d5r=s((LZe,p5r)=>{"use strict";var Lbe=N1(),Pbe=fa(),O1=qi(),Fbe=Ei(),jbe=/\s+/g,Mbe=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Bbe=/(?:\s|^)([^\s]+)(?=\s|$)/g,kbe=/([a-z0-9])([A-Z])/g;function Cbe(r,e){return Lbe(Pbe(e))}function Vbe(r){return r=O1(r,Mbe," "),r=O1(r,jbe," "),r=O1(r,kbe,"$1 $2"),r=Fbe(r),O1(r,Bbe,Cbe)}p5r.exports=Vbe});var m5r=s((PZe,g5r)=>{"use strict";var Ube=d5r();g5r.exports=Ube});var h5r=s((FZe,y5r)=>{"use strict";var Gbe=Yr().isPrimitive,Dbe=V(),Hbe=m5r();function zbe(r){if(!Gbe(r))throw new TypeError(Dbe("invalid argument. First argument must be a string. Value: `%s`.",r));return Hbe(r)}y5r.exports=zbe});var b5r=s((jZe,q5r)=>{"use strict";var Wbe=h5r();q5r.exports=Wbe});var E5r=s((MZe,w5r)=>{"use strict";var Xbe=fa(),K6=qi(),Jbe=Ei(),Ybe=/\s+/g,xbe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Zbe=/([a-z0-9])([A-Z])/g;function $be(r){return r=K6(r,xbe," "),r=K6(r,Zbe,"$1 $2"),r=Jbe(r),r=K6(r,Ybe,"_"),Xbe(r)}w5r.exports=$be});var S5r=s((BZe,N5r)=>{"use strict";var Qbe=E5r();N5r.exports=Qbe});var A5r=s((kZe,O5r)=>{"use strict";var Kbe=Yr().isPrimitive,rwe=V(),ewe=S5r();function twe(r){if(!Kbe(r))throw new TypeError(rwe("invalid argument. Must provide a string. Value: `%s`.",r));return ewe(r)}O5r.exports=twe});var T5r=s((CZe,_5r)=>{"use strict";var iwe=A5r();_5r.exports=iwe});var L5r=s((VZe,R5r)=>{"use strict";var awe=hr(),I5r=vr(),nwe=de().isPrimitive,swe=Yr().isPrimitive,r5=V();function uwe(r,e){return awe(e)?I5r(e,"flags")&&(r.flags=e.flags,!swe(r.flags))?new TypeError(r5("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):I5r(e,"capture")&&(r.capture=e.capture,!nwe(r.capture))?new TypeError(r5("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(r5("invalid argument. Options argument must be an object. Value: `%s`.",e))}R5r.exports=uwe});var A1=s((UZe,F5r)=>{"use strict";var owe=L5r(),P5r=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function vwe(r){var e,t;if(arguments.length>0){if(e={},t=owe(e,r),t)throw t;return e.capture?new RegExp("("+P5r+")",e.flags):new RegExp(P5r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}F5r.exports=vwe});var M5r=s((GZe,j5r)=>{"use strict";var fwe=A1(),cwe=fwe({capture:!0});j5r.exports=cwe});var k5r=s((DZe,B5r)=>{"use strict";var lwe=A1(),pwe=lwe();B5r.exports=pwe});var U5r=s((HZe,V5r)=>{"use strict";var C5r=D(),e5=A1(),dwe=M5r(),gwe=k5r();C5r(e5,"REGEXP",gwe);C5r(e5,"REGEXP_CAPTURE",dwe);V5r.exports=e5});var D5r=s((zZe,G5r)=>{"use strict";var mwe=U5r().REGEXP;function ywe(r){var e,t,i,a;for(e=!0,t="",a=0;a<r.length;a++)i=r.charAt(a),mwe.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}G5r.exports=ywe});var z5r=s((WZe,H5r)=>{"use strict";var hwe=D5r();H5r.exports=hwe});var X5r=s((XZe,W5r)=>{"use strict";var qwe=Yr().isPrimitive,bwe=V(),wwe=z5r();function Ewe(r){if(!qwe(r))throw new TypeError(bwe("invalid argument. Must provide a string. Value: `%s`.",r));return wwe(r)}W5r.exports=Ewe});var Y5r=s((JZe,J5r)=>{"use strict";var Nwe=X5r();J5r.exports=Nwe});var Z5r=s((YZe,x5r)=>{"use strict";function Swe(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}x5r.exports=Swe});var Q5r=s((xZe,$5r)=>{"use strict";var Owe=Z5r();$5r.exports=Owe});var rcr=s((ZZe,K5r)=>{"use strict";var Awe=Yr().isPrimitive,_we=V(),Twe=Q5r();function Iwe(r){if(!Awe(r))throw new TypeError(_we("invalid argument. First argument must be a string. Value: `%s`.",r));return Twe(r)}K5r.exports=Iwe});var tcr=s(($Ze,ecr)=>{"use strict";var Rwe=rcr();ecr.exports=Rwe});var acr=s((QZe,icr)=>{"use strict";var Lwe=Yr().isPrimitive,Pwe=V();function Fwe(r){if(!Lwe(r))throw new TypeError(Pwe("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}icr.exports=Fwe});var scr=s((KZe,ncr)=>{"use strict";var jwe=acr();ncr.exports=jwe});var ocr=s((r$e,ucr)=>{"use strict";var yt=Qr(),Mwe=C6r(),Bwe=D6r(),kwe=r5r(),Cwe=o5r(),Vwe=l5r(),Uwe=b5r(),Gwe=T5r(),Dwe=Y5r(),Hwe=tcr(),zwe=scr();function Wwe(r){return yt(r,"camelcase",Mwe),yt(r,"capitalize",Bwe),yt(r,"constantcase",kwe),yt(r,"kebabcase",Cwe),yt(r,"lowercase",Vwe),yt(r,"pascalcase",Uwe),yt(r,"snakecase",Gwe),yt(r,"startcase",Dwe),yt(r,"uncapitalize",Hwe),yt(r,"uppercase",zwe),r}ucr.exports=Wwe});var fcr=s((e$e,vcr)=>{"use strict";var Xwe=Qr(),Jwe=_6r(),Ywe=ocr();function xwe(r){return Xwe(r,"tools",Jwe({})),r=Ywe(r),r}vcr.exports=xwe});var lcr=s((t$e,ccr)=>{"use strict";var ht=Qr(),Zwe=_h(),$we=Dw(),Qwe=$w(),Kwe=YS(),rEe=uD(),eEe=UY(),tEe=Qor(),iEe=o1r(),aEe=c6r(),nEe=fcr();function sEe(){var r={};return ht(r,"array",Zwe({})),ht(r,"assert",$we({})),ht(r,"blas",Qwe({})),ht(r,"datasets",Kwe({})),ht(r,"math",rEe({})),ht(r,"ndarray",eEe({})),ht(r,"random",tEe({})),ht(r,"simulate",iEe({})),ht(r,"stats",aEe({})),ht(r,"string",nEe({})),r}ccr.exports=sEe});var dcr=s((i$e,pcr)=>{"use strict";var uEe=D(),t5=lcr();uEe(t5,"CACHED",t5());pcr.exports=t5});var vEe=s((a$e,gcr)=>{var oEe=dcr().CACHED;gcr.exports=oEe});return vEe();})();
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
	out = ns.blas.saxpy( N, alpha, ns.array.flatten2d( x ), strideX, offsetX, ns.array.flatten2d( y ), strideY, offsetY ); 
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
	out = ns.blas.daxpy( N, alpha, ns.array.flatten2d( x ), strideX, offsetX, ns.array.flatten2d( y ), strideY, offsetY ); 
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
* Creates an ndarray view.
*
* @customfunction
* @param {Range} x - input ndarray
* @param {string} slice - subsequence string
* @param {string} strict - option name for specifying whether to enforce strict bounds checking
* @param {boolean} strictValue - boolean indicating whether to enforce strict bounds checking
* @param {string} view - option name for specifying whether to return a "view" of the input ndarray
* @param {boolean} viewValue - boolean indicating whether to return a "view" of the input ndarray
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {Range} ndarray view
*
* @example
* STDLIB_NDSLICE( A1:A100, '::-1,...,::-2' )
*/
function STDLIB_NDSLICE( x, slice, strict, strictValue, view, viewValue, as, asValue ) { 
	var strides;
	var offset;
	var shape;
	var order;
	var ndims;
	var vhlen;
	var opts;
	var hlen;
	var vlen;
	var len;
	var tmp;
	var buf;
	var obj;
	var vx;
	var s;
	var o;
	var i;
	opts = {
		'strict': true,
		'view': false,
		'as': null
	};
	// Parse optional keyword arguments...
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'strict' || o === 'view' || o === 'as' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate strict/view/layout values
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Parse the input range as an ndarray:
	obj = ns.ndarray.range2ndarray( x );
	// Resolve the default presentation layout based on the presentation layout of the input array...
	if ( opts.as === null ) {
		if ( x.length === 1 && x[ 0 ].length > 1 ) { // TODO: move to utility package: gsheets/ndarray/default-presentation-layout
			opts.as = 'row';
		} else {
			opts.as = 'column';
		}
	}
	// Parse the provided indexing expression:
	s = ns.ndarray.seq2multislice( slice, obj.shape, opts.strict );
	// Cache a reference to the linearized ndarray data:
	x = obj.rawBuffer;
	hlen = obj.headerLength;
	// Create the slice:
	vx = ns.ndarray.slice( obj.ndarray, s, opts.strict, false );
	vlen = vx.length;
	shape = vx.shape;
	strides = vx.strides;
	order = vx.order;
	ndims = shape.length;
	// Calculate the header length for the slice:
	vhlen = 9 + ndims + strides.length + (5*1); // TODO: use internal utility package instead of hardcoding
	// Adjust the view index offset to account for the header info:
	offset = vx.offset - hlen;
	// Check whether we need to return the same data buffer as the input array...
	if ( opts.view ) {
		len = x.length;
		buf = x;
		// Check whether the number of dimensions was reduced and, if so, shift the data to account for less header info...
		if ( vhlen !== hlen ) {
			buf.splice( vhlen, hlen-vhlen );
		}
	}
	// Otherwise, return a fresh ndarray with data arranged contiguously...
	else {
		// Allocate a new data buffer which can accommodate the new header info and slice data:
		len = vhlen + vlen;
		buf = ns.array.zeros( len );
		// Return elements in array iteration order...
		if ( ndims > 0 ) {
			strides = ns.ndarray.shape2strides( shape, order );
			tmp = new ns.ndarray.ndarray( 'generic', buf, shape, strides, vhlen, order );
			for ( i = 0; i < vlen; i++ ) {
				tmp.iset( i, vx.iget( i ) ); // use getter as iteration order can be non-contiguous depending on the view
			}
		} else {
			strides = [ 0 ];
			buf[ len-1 ] = vx.get();
		}
		// Reset the index offset as the strides should all be nonnegative integers:
		offset = 0;
	}
	return ns.ndarray.ndarray2range( buf, len-vhlen, obj.dtype, shape, strides, offset, order, opts.as );
}
/**
* Creates a zero-filled ndarray having a specified shape.
*
* @customfunction
* @param {Range<integer>} shape - array shape
* @param {string} order - option name for specifying the ndarray memory layout
* @param {string} orderValue - order option value
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {Range} zero-filled ndarray
*
* @example
* STDLIB_NDZEROS( { 10, 1 } )
*/
function STDLIB_NDZEROS( shape, order, orderValue, as, asValue ) { 
	var strides;
	var ndims;
	var opts;
	var hlen;
	var buf;
	var len;
	var o;
	var i;
	opts = {
		'order': 'row-major',
		'as': 'column'
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'order' || o === 'as' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate order/layout value
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.isRange1d( shape, 'First argument' );
	shape = ns.array.flatten2d( shape );
	ns.assert.isValidShape( shape, 'First argument' );
	// Compute the output array strides from the input array shape:
	ndims = shape.length;
	if ( ndims === 0 ) { // TODO: consider moving this logic to a separate utility package, as this may be a recurring pattern
		strides = [ 0 ];
	} else {
		strides = ns.ndarray.shape2strides( shape, opts.order );
	}
	// Calculate the header length:
	hlen = 9 + ndims + strides.length + (5*1); // TODO: use internal utility package, rather than hardcode
	// Allocate an ndarray buffer which can accommodate both the header and data elements:
	if ( ndims === 0 ) {
		len = 1;
	} else {
		len = ns.ndarray.numel( shape );
	}
	buf = ns.array.zeros( hlen + len );
	// Serialize ndarray info to a range:
	return ns.ndarray.ndarray2range( buf, len, 'number', shape, strides, 0, opts.order, opts.as );
}
/**
* Creates an ndarray.
*
* @customfunction
* @param {Range} data - ndarray data
* @param {string} shape - option name for specifying the ndarray shape
* @param {Range<integer>} shapeValue - ndarray shape
* @param {string} strides - option name for specifying the ndarray strides
* @param {Range<integer>} stridesValue - ndarray strides
* @param {string} offset - option name for specifying an index offset
* @param {integer} offsetValue - index offset
* @param {string} order - option name for specifying the ndarray memory layout
* @param {string} orderValue - ndarray memory layout (either "row-major" or "column-major")
* @param {string} dtype - option name for specifying the ndarray data type
* @param {string} dtypeValue - ndarray data type
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {Range} ndarray
*
* @example
* STDLIB_NDARRAY( A1:A100, "shape", { 10, 10 } )
*/
function STDLIB_NDARRAY( data, shape, shapeValue, strides, stridesValue, offset, offsetValue, order, orderValue, dtype, dtypeValue, as, asValue ) { 
	var ndims;
	var opts;
	var hlen;
	var buf;
	var len;
	var o;
	var i;
	opts = {
		'shape': null,
		'strides': null,
		'offset': null,
		'order': 'row-major',
		'dtype': 'generic',
		'as': 'column'
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'shape' || o === 'strides' || o === 'offset' || o === 'order' || o === 'dtype' || o === 'as' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate option values: order, dtype, as
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.isRange1d( data, 'First argument' );
	if ( opts.shape === null ) {
		opts.shape = [ data.length ];
	} else {
		ns.assert.isRange1d( opts.shape, 'Shape argument' );
		opts.shape = ns.array.flatten2d( opts.shape );
		ns.assert.isValidShape( opts.shape, 'Shape argument' );
	}
	ndims = opts.shape.length;
	if ( opts.strides === null ) {
		if ( ndims === 0 ) {
			opts.strides = [ 0 ];
		} else {
			opts.strides = ns.ndarray.shape2strides( opts.shape, opts.order );
		}
	} else {
		ns.assert.isRange1d( opts.strides, 'Strides argument' );
		opts.strides = ns.array.flatten2d( opts.strides );
		ns.assert.isValidStrides( opts.strides, 'Strides argument' );
		if ( ndims === 0 && ( opts.strides.length !== 1 || opts.strides[ 0 ] !== 0 ) ) {
			// TODO: raise an exception
		}
	}
	if ( opts.offset === null ) {
		opts.offset = ns.ndarray.strides2offset( opts.shape, opts.strides );
	} else {
		ns.assert.isNonNegativeInteger( opts.offset, 'Offset argument' );
	}
	// Compute the number of elements in the provided data buffer:
	len = data.length * data[ 0 ].length;
	// Verify that, for zero-dimensional ndarrays, the index of the underlying data element does not exceed the bounds of the underlying data buffer:
	if ( ndims === 0 && offset >= len ) {
		// TODO: raise an exception
	}
	// Verify that the desired shape, strides, and offset are compatible with the number of elements in the provided data buffer:
	if ( len > 0 ) {
		ns.assert.isBufferLengthCompatible( len, opts.shape, opts.strides, opts.offset ); 
	}
	// Calculate the header length:
	hlen = 9 + ndims + opts.strides.length + (5*1); // TODO: use internal utility package, rather than hardcode
	// Allocate an ndarray buffer which can accommodate both the header and data elements:
	buf = ns.array.zeros( hlen + len );
	// Copy the data elements to the ndarray buffer:
	buf = ns.array.flatten2d.assign( data, buf, 1, hlen );
	// Serialize ndarray data as a range:
	return ns.ndarray.ndarray2range( buf, len, opts.dtype, opts.shape, opts.strides, opts.offset, opts.order, opts.as ); 
}
/**
* Displays a printable stacked representation of an ndarray.
*
* @customfunction
* @param {Range} x - input ndarray
* @returns {Range} stacked representation of an ndarray
*
* @example
* STDLIB_NDARRAY_STACKED_REPR( A1:A100 )
*/
function STDLIB_NDARRAY_STACKED_REPR( x ) { 
	var o;
	var i;
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		ns.assert.unrecognizedOptionName( o );
	}
	return ns.ndarray.stackedRepr( ns.ndarray.range2ndarray( x ) );
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
* Computes the coversed cosine.
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
* STDLIB_COVERCOS( -2.0 )
*
* @example
* STDLIB_COVERCOS( A1:A100 )
*
* @example
* STDLIB_COVERCOS( A1:D100 )
*
* @example
* STDLIB_COVERCOS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COVERCOS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.covercos );
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
* Evaluates the inverse error function.
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
* STDLIB_ERFINV( 0.5 )
*
* @example
* STDLIB_ERFINV( A1:A100 )
*
* @example
* STDLIB_ERFINV( A1:D100 )
*
* @example
* STDLIB_ERFINV( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ERFINV( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.erfinv );
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
* Computes the coversed sine.
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
* STDLIB_COVERSIN( -2.0 )
*
* @example
* STDLIB_COVERSIN( A1:A100 )
*
* @example
* STDLIB_COVERSIN( A1:D100 )
*
* @example
* STDLIB_COVERSIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COVERSIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.coversin );
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
* Computes the complete elliptic integral of the second kind.
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
* STDLIB_ELLIPE( -2.5 )
*
* @example
* STDLIB_ELLIPE( A1:A100 )
*
* @example
* STDLIB_ELLIPE( A1:D100 )
*
* @example
* STDLIB_ELLIPE( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ELLIPE( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ellipe );
}
/**
* Computes the complete elliptic integral of the first kind.
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
* STDLIB_ELLIPK( -2.5 )
*
* @example
* STDLIB_ELLIPK( A1:A100 )
*
* @example
* STDLIB_ELLIPK( A1:D100 )
*
* @example
* STDLIB_ELLIPK( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ELLIPK( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ellipk );
}
/**
* Computes the hyperbolic cotangent of a number.
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
* STDLIB_COTH( -2.0 )
*
* @example
* STDLIB_COTH( A1:A100 )
*
* @example
* STDLIB_COTH( A1:D100 )
*
* @example
* STDLIB_COTH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COTH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.coth );
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
* Evaluates the error function.
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
* STDLIB_ERF( -2.5 )
*
* @example
* STDLIB_ERF( A1:A100 )
*
* @example
* STDLIB_ERF( A1:D100 )
*
* @example
* STDLIB_ERF( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ERF( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.erf );
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
* Computes the hyperbolic cosine of a number.
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
* STDLIB_COSH( 0.0 )
*
* @example
* STDLIB_COSH( A1:A100 )
*
* @example
* STDLIB_COSH( A1:D100 )
*
* @example
* STDLIB_COSH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COSH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cosh );
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
* Computes the relative error exponential.
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
* STDLIB_EXPM1REL( 0.0 )
*
* @example
* STDLIB_EXPM1REL( A1:A100 )
*
* @example
* STDLIB_EXPM1REL( A1:D100 )
*
* @example
* STDLIB_EXPM1REL( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXPM1REL( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.expm1rel );
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
* Evaluates the inverse complementary error function.
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
* STDLIB_ERFCINV( 1.5 )
*
* @example
* STDLIB_ERFCINV( A1:A100 )
*
* @example
* STDLIB_ERFCINV( A1:D100 )
*
* @example
* STDLIB_ERFCINV( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ERFCINV( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.erfcinv );
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
* Computes the absolute value.
*
* @customfunction
* @param {Range} x - input ndarray
* @param {string} slice - option name for specifying a subsequence indexing expression for operating on an ndarray slice
* @param {string} sliceValue - subsequence string
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @param {string} view - option name for specifying whether to return a "view" of the input ndarray
* @param {boolean} viewValue - boolean indicating whether to return a "view" of the input ndarray
* @param {string} strict - option name for specifying whether to enforce strict bounds checking
* @param {boolean} strictValue - boolean indicating whether to enforce strict bounds checking
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ABS( A1:A100 )
*
* @example
* STDLIB_ABS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_NDARRAY_ABS( x, slice, sliceValue, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue, view, viewValue, strict, strictValue, as, asValue ) { 
	var strides;
	var offset;
	var shape;
	var order;
	var ndims;
	var vhlen;
	var opts;
	var args;
	var data;
	var hlen;
	var obj;
	var out;
	var len;
	var buf;
	var s;
	var d;
	var o;
	var i;
	opts = {
		'slice': null,
		'strict': true,
		'view': false,
		'as': 'column' // FIXME: infer default based on orientation of `x`
	};
	obj = ns.ndarray.range2ndarray( x );
	hlen = obj.headerLength;
	x = obj.ndarray;
	args = [ null, null ];
	for ( i = 1; i < arguments.length; i++ ) {
		o = arguments[ i ];
		if ( o === 'as' || o === 'slice' || o === 'strict' || o === 'view' ) {
			i += 1;
			opts[ o ] = arguments[ i ];
			// TODO: validate as/strict/view option values
		} else {
			args.push( o );
		}
	}
	if ( opts.slice !== null ) {
		// Parse the provided indexing expression:
		s = ns.ndarray.seq2multislice( opts.slice, obj.shape, opts.strict );
		// Create the slice:
		x = ns.ndarray.slice( x, s, opts.strict, false );
	}
	len = x.length; // numel(x)
	shape = x.shape;
	strides = x.strides;
	offset = x.offset;
	order = x.order;
	data = x.data;
	ndims = shape.length;
	// Calculate the header length for the slice:
	vhlen = 9 + ndims + strides.length + (5*1); // TODO: use internal utility package instead of hardcoding
	// Check whether we need to return the same data buffer as the input array...
	if ( opts.view ) {
		// Copy the data to avoid mutation of the same elements over which we are iterating:
		buf = data.slice();
	}
	// Otherwise, return a fresh ndarray with data arranged contiguously...
	else {
		// Allocate a new data buffer which can accommodate the new header info and slice data:
		buf = ns.array.zeros( vhlen + len );
		// When returning a view, return elements in array iteration order...
		if ( ndims > 0 ) {
			strides = ns.ndarray.shape2strides( shape, order );
		} else {
			strides = [ 0 ];
		}
		// Reset the index offset as the strides should all be nonnegative integers:
		offset = vhlen;
	}
	// Set the input and output ndarray arguments:
	args[ 0 ] = x;
	args[ 1 ] = new ns.ndarray.ndarray( 'generic', buf, shape, strides, offset, order );
	// Perform element-wise computation:
	out = ns.math.tools.ndarray.unary( args, ns.math.abs );
	// If we are returning a view of the input data buffer, check whether we need to shift the data to account for less header info and thus ensure a compact representation...
	len = buf.length; // header + numel(out)
	if ( opts.view ) {
		if ( vhlen !== hlen ) {
			d = hlen - vhlen;
			buf.splice( vhlen, d );
			offset -= d;
		}
	}
	// TODO: do we need to consider a returned ndarray having a different dtype? ANSWER: no. Once we convert this to a scaffold, we can hard code the expected output dtype
	// Serialize the output ndarray to a range:
	return ns.ndarray.ndarray2range( out.data, len-vhlen, obj.dtype, out.shape, out.strides, offset-vhlen, out.order, opts.as ); 
}
/**
* Computes the cosine of a number times π.
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
* STDLIB_COSPI( 0.0 )
*
* @example
* STDLIB_COSPI( A1:A100 )
*
* @example
* STDLIB_COSPI( A1:D100 )
*
* @example
* STDLIB_COSPI( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COSPI( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cospi );
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
* Evaluates the cotangent of a number.
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
* STDLIB_COT( 0.1 )
*
* @example
* STDLIB_COT( A1:A100 )
*
* @example
* STDLIB_COT( A1:D100 )
*
* @example
* STDLIB_COT( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COT( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cot );
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
* Evaluates the base 10 exponential function.
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
* STDLIB_EXP10( 4.0 )
*
* @example
* STDLIB_EXP10( A1:A100 )
*
* @example
* STDLIB_EXP10( A1:D100 )
*
* @example
* STDLIB_EXP10( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXP10( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.exp10 );
}
/**
* Evaluates the Dirichlet eta function.
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
* STDLIB_ETA( -2.5 )
*
* @example
* STDLIB_ETA( A1:A100 )
*
* @example
* STDLIB_ETA( A1:D100 )
*
* @example
* STDLIB_ETA( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ETA( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.eta );
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
* Evaluates the digamma function.
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
* STDLIB_DIGAMMA( -2.5 )
*
* @example
* STDLIB_DIGAMMA( A1:A100 )
*
* @example
* STDLIB_DIGAMMA( A1:D100 )
*
* @example
* STDLIB_DIGAMMA( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DIGAMMA( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.digamma );
}
/**
* Evaluates the complementary error function.
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
* STDLIB_ERFC( -2.5 )
*
* @example
* STDLIB_ERFC( A1:A100 )
*
* @example
* STDLIB_ERFC( A1:D100 )
*
* @example
* STDLIB_ERFC( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ERFC( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.erfc );
}
/**
* Computes the standard logistic function.
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
* STDLIB_EXPIT( 0.0 )
*
* @example
* STDLIB_EXPIT( A1:A100 )
*
* @example
* STDLIB_EXPIT( A1:D100 )
*
* @example
* STDLIB_EXPIT( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXPIT( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.expit );
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
* Converts an angle from degrees to radians.
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
* STDLIB_DEG2RAD( 90.0 )
*
* @example
* STDLIB_DEG2RAD( A1:A100 )
*
* @example
* STDLIB_DEG2RAD( A1:D100 )
*
* @example
* STDLIB_DEG2RAD( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DEG2RAD( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.deg2rad );
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
* Computes exp(x)-1, where exp(x) is the natural exponential function.
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
* STDLIB_EXPM1( 4.0 )
*
* @example
* STDLIB_EXPM1( A1:A100 )
*
* @example
* STDLIB_EXPM1( A1:D100 )
*
* @example
* STDLIB_EXPM1( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXPM1( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.expm1 );
}
/**
* Computes cos(x)-1.
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
* STDLIB_COSM1( 0.0 )
*
* @example
* STDLIB_COSM1( A1:A100 )
*
* @example
* STDLIB_COSM1( A1:D100 )
*
* @example
* STDLIB_COSM1( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COSM1( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cosm1 );
}
/**
* Evaluates the natural exponential function.
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
* STDLIB_EXP( 4.0 )
*
* @example
* STDLIB_EXP( A1:A100 )
*
* @example
* STDLIB_EXP( A1:D100 )
*
* @example
* STDLIB_EXP( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXP( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.exp );
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
* Evaluates the base 2 exponential function.
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
* STDLIB_EXP2( 4.0 )
*
* @example
* STDLIB_EXP2( A1:A100 )
*
* @example
* STDLIB_EXP2( A1:D100 )
*
* @example
* STDLIB_EXP2( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXP2( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.exp2 );
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
			opts[ o ] = ns.array.flatten2d( v );
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
	out = ns.stats.bartlettTest( ns.array.flatten2d( values ), opts );
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
	sarray = ns.array.flatten2d( x );
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
	sarray = ns.array.flatten2d( x );
	smask = ns.array.flatten2d( mask );
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
	sarray = ns.array.flatten2d( x );
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
