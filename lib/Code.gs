/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var a5=s((hEe,i5)=>{"use strict";var bcr=typeof Object.defineProperty=="function"?Object.defineProperty:null;i5.exports=bcr});var s5=s((qEe,n5)=>{"use strict";var wcr=a5();function Ecr(){try{return wcr({},"x",{}),!0}catch{return!1}}n5.exports=Ecr});var o5=s((bEe,u5)=>{"use strict";var Ncr=Object.defineProperty;u5.exports=Ncr});var _1=s((wEe,v5)=>{"use strict";function Scr(r){return typeof r=="number"}v5.exports=Scr});var T1=s((EEe,c5)=>{"use strict";function Ocr(r){return r[0]==="-"}function f5(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Acr(r,e,t){var i=!1,a=e-r.length;return a<0||(Ocr(r)&&(i=!0,r=r.substr(1)),r=t?r+f5(a):f5(a)+r,i&&(r="-"+r)),r}c5.exports=Acr});var g5=s((NEe,d5)=>{"use strict";var _cr=_1(),l5=T1(),Tcr=String.prototype.toLowerCase,p5=String.prototype.toUpperCase;function Icr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!_cr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=l5(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=l5(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===p5.call(r.specifier)?p5.call(t):Tcr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}d5.exports=Icr});var y5=s((SEe,m5)=>{"use strict";function Rcr(r){return typeof r=="string"}m5.exports=Rcr});var b5=s((OEe,q5)=>{"use strict";var Lcr=_1(),Pcr=Math.abs,Fcr=String.prototype.toLowerCase,h5=String.prototype.toUpperCase,Ji=String.prototype.replace,jcr=/e\+(\d)$/,Mcr=/e-(\d)$/,Bcr=/^(\d+)$/,kcr=/^(\d+)e/,Ccr=/\.0$/,Vcr=/\.0*e/,Ucr=/(\..*[^0])0*e/;function Gcr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Lcr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Pcr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Ji.call(t,Ucr,"$1e"),t=Ji.call(t,Vcr,"e"),t=Ji.call(t,Ccr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ji.call(t,jcr,"e+0$1"),t=Ji.call(t,Mcr,"e-0$1"),r.alternate&&(t=Ji.call(t,Bcr,"$1."),t=Ji.call(t,kcr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===h5.call(r.specifier)?h5.call(t):Fcr.call(t),t}q5.exports=Gcr});var N5=s((AEe,E5)=>{"use strict";function w5(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function Dcr(r,e,t){var i=e-r.length;return i<0||(r=t?r+w5(i):w5(i)+r),r}E5.exports=Dcr});var O5=s((_Ee,S5)=>{"use strict";var Hcr=g5(),zcr=y5(),Wcr=b5(),Xcr=N5(),Jcr=T1(),Ycr=String.fromCharCode,V0=isNaN,xcr=Array.isArray;function Zcr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $cr(r){var e,t,i,a,n,u,o,v,f;if(!xcr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],zcr(i))u+=i;else{if(e=i.precision!==void 0,i=Zcr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,V0(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,V0(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Hcr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!V0(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=V0(n)?String(i.arg):Ycr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Wcr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Jcr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Xcr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}S5.exports=$cr});var _5=s((TEe,A5)=>{"use strict";var Qcr=O5();A5.exports=Qcr});var I5=s((IEe,T5)=>{"use strict";var U0=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Kcr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function rlr(r){var e,t,i,a;for(t=[],a=0,i=U0.exec(r);i;)e=r.slice(a,U0.lastIndex-i[0].length),e.length&&t.push(e),t.push(Kcr(i)),a=U0.lastIndex,i=U0.exec(r);return e=r.slice(a),e.length&&t.push(e),t}T5.exports=rlr});var L5=s((REe,R5)=>{"use strict";var elr=I5();R5.exports=elr});var F5=s((LEe,P5)=>{"use strict";function tlr(r){return typeof r=="string"}P5.exports=tlr});var B5=s((PEe,M5)=>{"use strict";var ilr=_5(),alr=L5(),nlr=F5();function j5(r){var e,t,i;if(!nlr(r))throw new TypeError(j5("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=alr(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return ilr.apply(null,t)}M5.exports=j5});var V=s((FEe,k5)=>{"use strict";var slr=B5();k5.exports=slr});var H5=s((jEe,D5)=>{"use strict";var C5=V(),da=Object.prototype,V5=da.toString,U5=da.__defineGetter__,G5=da.__defineSetter__,ulr=da.__lookupGetter__,olr=da.__lookupSetter__;function vlr(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||V5.call(r)==="[object Array]")throw new TypeError(C5("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||V5.call(t)==="[object Array]")throw new TypeError(C5("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(ulr.call(r,e)||olr.call(r,e)?(i=r.__proto__,r.__proto__=da,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&U5&&U5.call(r,e,t.get),u&&G5&&G5.call(r,e,t.set),r}D5.exports=vlr});var ni=s((MEe,z5)=>{"use strict";var flr=s5(),clr=o5(),llr=H5(),I1;flr()?I1=clr:I1=llr;z5.exports=I1});var X5=s((BEe,W5)=>{"use strict";var plr=ni();function dlr(r,e,t){plr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}W5.exports=dlr});var D=s((kEe,J5)=>{"use strict";var glr=X5();J5.exports=glr});var x5=s((CEe,Y5)=>{"use strict";var mlr=ni();function ylr(r,e,t){mlr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}Y5.exports=ylr});var Qr=s((VEe,Z5)=>{"use strict";var hlr=x5();Z5.exports=hlr});var Q5=s((UEe,$5)=>{"use strict";function qlr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}$5.exports=qlr});var Sn=s((GEe,K5)=>{"use strict";var blr=Q5();K5.exports=blr});var ec=s((DEe,rc)=>{"use strict";function wlr(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}rc.exports=wlr});var On=s((HEe,tc)=>{"use strict";var Elr=ec();tc.exports=Elr});var ac=s((zEe,ic)=>{"use strict";var Nlr=On();function Slr(r){return Nlr(0,r)}ic.exports=Slr});var si=s((WEe,nc)=>{"use strict";var Olr=ac();nc.exports=Olr});var oc=s((XEe,uc)=>{"use strict";var An=Sn(),Alr=si(),sc=V();function _lr(r,e,t){var i,a,n,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(n=Alr(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],a=t[f],a!==0&&a<v)throw new Error(sc("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",An(e).join(", "),An(t).join(", "),f));if(v===a)n[f]=1;else if(v===1)n[f]=0;else throw new Error(sc("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",An(e).join(", "),An(t).join(", "),f))}return{ref:r,data:i,shape:An(t),strides:n}}uc.exports=_lr});var R1=s((JEe,vc)=>{"use strict";var Tlr=oc();vc.exports=Tlr});var lc=s((YEe,cc)=>{"use strict";var fc=R1();function Ilr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S;if(q=e[2],o=q[1],v=q[0],!(o<=0||v<=0))for(A=fc(r[0],e[0],q),b=A.data,w=A.strides,i=w[1],a=w[0],A=fc(r[1],e[1],q),T=A.data,w=A.strides,n=w[1],u=w[0],S=r[2],p=0,y=0,c=0;c<v;c++){for(l=0,m=0,g=b[p],d=T[y],h=S[c],f=0;f<o;f++)h[f]=t(g[l],d[m]),l+=i,m+=n;p+=a,y+=u}}cc.exports=Ilr});var L1=s((xEe,pc)=>{"use strict";var Rlr=lc();pc.exports=Rlr});var gc=s((ZEe,dc)=>{"use strict";var P1=R1();function Llr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M;if(S=e[3],f=S[1],c=S[0],!(f<=0||c<=0))for(N=P1(r[0],e[0],S),I=N.data,O=N.strides,i=O[1],a=O[0],N=P1(r[1],e[1],S),E=N.data,O=N.strides,n=O[1],u=O[0],N=P1(r[2],e[2],S),P=N.data,O=N.strides,o=O[1],v=O[0],M=r[3],y=0,d=0,q=0,p=0;p<c;p++){for(m=0,g=0,h=0,w=I[y],A=E[d],b=P[q],T=M[p],l=0;l<f;l++)T[l]=t(w[m],A[g],b[h]),m+=i,g+=n,h+=o;y+=a,d+=u,q+=v}}dc.exports=Llr});var F1=s(($Ee,mc)=>{"use strict";var Plr=gc();mc.exports=Plr});var hc=s((QEe,yc)=>{"use strict";function Flr(r){var e,t,i,a,n,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(a=r[0],f=a.length,v===1){for(c=0;c<f;c++)t.push(a[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(n=e[0]-f+c,n>=0?i=a[n]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}yc.exports=Flr});var G0=s((KEe,qc)=>{"use strict";var jlr=hc();qc.exports=jlr});var wc=s((rNe,bc)=>{"use strict";var Mlr=On();function Blr(r,e){var t,i,a,n;for(i=e[1],a=e[0],t=[],n=0;n<a;n++)t.push(Mlr(r,i));return t}bc.exports=Blr});var D0=s((eNe,Ec)=>{"use strict";var klr=wc();Ec.exports=klr});var Sc=s((tNe,Nc)=>{"use strict";function Clr(r,e,t){var i,a,n,u,o,v;for(n=r[1],u=r[0],i=[],o=0;o<u;o++){for(a=[],v=0;v<n;v++)a.push(e.call(t,[o,v]));i.push(a)}return i}Nc.exports=Clr});var Ac=s((iNe,Oc)=>{"use strict";var Vlr=Sc();Oc.exports=Vlr});var Tc=s((aNe,_c)=>{"use strict";function Ulr(r){var e,t,i,a,n,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],n=0;n<t;n++)for(a=r[n],u=0;u<i;u++)e.push(a[u]);return e}_c.exports=Ulr});var Rc=s((nNe,Ic)=>{"use strict";function Glr(r,e,t,i){var a,n,u,o,v,f;for(n=r.length,u=r[0].length,a=i,v=0;v<n;v++)for(o=r[v],f=0;f<u;f++)e[a]=o[f],a+=t;return e}Ic.exports=Glr});var H0=s((sNe,Pc)=>{"use strict";var Dlr=D(),Lc=Tc(),Hlr=Rc();Dlr(Lc,"assign",Hlr);Pc.exports=Lc});var jc=s((uNe,Fc)=>{"use strict";var zlr=/./;Fc.exports=zlr});var j1=s((oNe,Mc)=>{"use strict";function Wlr(r){return typeof r=="boolean"}Mc.exports=Wlr});var kc=s((vNe,Bc)=>{"use strict";function Xlr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Bc.exports=Xlr});var Vc=s((fNe,Cc)=>{"use strict";var Jlr=kc();Cc.exports=Jlr});var Gc=s((cNe,Uc)=>{"use strict";var Ylr=Vc(),xlr=Ylr();function Zlr(){return xlr&&typeof Symbol.toStringTag=="symbol"}Uc.exports=Zlr});var ga=s((lNe,Dc)=>{"use strict";var $lr=Gc();Dc.exports=$lr});var M1=s((pNe,Hc)=>{"use strict";var Qlr=Object.prototype.toString;Hc.exports=Qlr});var Wc=s((dNe,zc)=>{"use strict";var Klr=M1();function r8r(r){return Klr.call(r)}zc.exports=r8r});var Jc=s((gNe,Xc)=>{"use strict";var e8r=Object.prototype.hasOwnProperty;function t8r(r,e){return r==null?!1:e8r.call(r,e)}Xc.exports=t8r});var vr=s((mNe,Yc)=>{"use strict";var i8r=Jc();Yc.exports=i8r});var Zc=s((yNe,xc)=>{"use strict";var a8r=typeof Symbol=="function"?Symbol:void 0;xc.exports=a8r});var B1=s((hNe,$c)=>{"use strict";var n8r=Zc();$c.exports=n8r});var rl=s((qNe,Kc)=>{"use strict";var Qc=B1(),s8r=typeof Qc=="function"?Qc.toStringTag:"";Kc.exports=s8r});var tl=s((bNe,el)=>{"use strict";var u8r=vr(),_n=rl(),k1=M1();function o8r(r){var e,t,i;if(r==null)return k1.call(r);t=r[_n],e=u8r(r,_n);try{r[_n]=void 0}catch{return k1.call(r)}return i=k1.call(r),e?r[_n]=t:delete r[_n],i}el.exports=o8r});var re=s((wNe,il)=>{"use strict";var v8r=ga(),f8r=Wc(),c8r=tl(),C1;v8r()?C1=c8r:C1=f8r;il.exports=C1});var nl=s((ENe,al)=>{"use strict";var l8r=Boolean;al.exports=l8r});var V1=s((NNe,sl)=>{"use strict";var p8r=nl();sl.exports=p8r});var ol=s((SNe,ul)=>{"use strict";var d8r=Boolean.prototype.toString;ul.exports=d8r});var fl=s((ONe,vl)=>{"use strict";var g8r=ol();function m8r(r){try{return g8r.call(r),!0}catch{return!1}}vl.exports=m8r});var U1=s((ANe,cl)=>{"use strict";var y8r=ga(),h8r=re(),q8r=V1(),b8r=fl(),w8r=y8r();function E8r(r){return typeof r=="object"?r instanceof q8r?!0:w8r?b8r(r):h8r(r)==="[object Boolean]":!1}cl.exports=E8r});var pl=s((_Ne,ll)=>{"use strict";var N8r=j1(),S8r=U1();function O8r(r){return N8r(r)||S8r(r)}ll.exports=O8r});var de=s((TNe,gl)=>{"use strict";var dl=D(),G1=pl(),A8r=j1(),_8r=U1();dl(G1,"isPrimitive",A8r);dl(G1,"isObject",_8r);gl.exports=G1});var yl=s((INe,ml)=>{"use strict";function T8r(){return new Function("return this;")()}ml.exports=T8r});var ql=s((RNe,hl)=>{"use strict";var I8r=typeof self=="object"?self:null;hl.exports=I8r});var wl=s((LNe,bl)=>{"use strict";var R8r=typeof window=="object"?window:null;bl.exports=R8r});var Nl=s((PNe,El)=>{"use strict";var L8r=typeof globalThis=="object"?globalThis:null;El.exports=L8r});var D1=s((FNe,_l)=>{"use strict";var P8r=de().isPrimitive,F8r=V(),j8r=yl(),Sl=ql(),Ol=wl(),Al=Nl();function M8r(r){if(arguments.length){if(!P8r(r))throw new TypeError(F8r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return j8r()}if(Al)return Al;if(Sl)return Sl;if(Ol)return Ol;throw new Error("unexpected error. Unable to resolve global object.")}_l.exports=M8r});var Rl=s((jNe,Il)=>{"use strict";var B8r=D1(),Tl=B8r(),k8r=Tl.document&&Tl.document.childNodes;Il.exports=k8r});var Pl=s((MNe,Ll)=>{"use strict";var C8r=Int8Array;Ll.exports=C8r});var jl=s((BNe,Fl)=>{"use strict";var V8r=jc(),U8r=Rl(),G8r=Pl();function D8r(){return typeof V8r=="function"||typeof G8r=="object"||typeof U8r=="function"}Fl.exports=D8r});var H1=s((kNe,Ml)=>{"use strict";function H8r(){return/^\s*function\s*([^(]*)/i}Ml.exports=H8r});var kl=s((CNe,Bl)=>{"use strict";var z8r=H1(),W8r=z8r();Bl.exports=W8r});var z1=s((VNe,Vl)=>{"use strict";var X8r=D(),Cl=H1(),J8r=kl();X8r(Cl,"REGEXP",J8r);Vl.exports=Cl});var Gl=s((UNe,Ul)=>{"use strict";var Y8r=re(),W1;function x8r(r){return Y8r(r)==="[object Array]"}Array.isArray?W1=Array.isArray:W1=x8r;Ul.exports=W1});var qe=s((GNe,Dl)=>{"use strict";var Z8r=Gl();Dl.exports=Z8r});var zl=s((DNe,Hl)=>{"use strict";var $8r=qe(),Q8r=V();function K8r(r){if(typeof r!="function")throw new TypeError(Q8r("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!$8r(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}Hl.exports=K8r});var Xl=s((HNe,Wl)=>{"use strict";var r7r=zl();Wl.exports=r7r});var Yl=s((zNe,Jl)=>{"use strict";function e7r(r){return r!==null&&typeof r=="object"}Jl.exports=e7r});var J1=s((WNe,xl)=>{"use strict";var t7r=D(),i7r=Xl(),X1=Yl(),a7r=i7r(X1);t7r(X1,"isObjectLikeArray",a7r);xl.exports=X1});var $l=s((XNe,Zl)=>{"use strict";var n7r=J1();function s7r(r){return n7r(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}Zl.exports=s7r});var Yi=s((JNe,Ql)=>{"use strict";var u7r=$l();Ql.exports=u7r});var r8=s((YNe,Kl)=>{"use strict";var o7r=re(),v7r=z1().REGEXP,f7r=Yi();function c7r(r){var e,t,i;if(t=o7r(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=v7r.exec(i.toString()),e)return e[1]}return f7r(r)?"Buffer":t}Kl.exports=c7r});var qt=s((xNe,e8)=>{"use strict";var l7r=r8();e8.exports=l7r});var i8=s((ZNe,t8)=>{"use strict";var p7r=qt();function d7r(r){var e;return r===null?"null":(e=typeof r,e==="object"?p7r(r).toLowerCase():e)}t8.exports=d7r});var n8=s(($Ne,a8)=>{"use strict";var g7r=qt();function m7r(r){return g7r(r).toLowerCase()}a8.exports=m7r});var z0=s((QNe,s8)=>{"use strict";var y7r=jl(),h7r=i8(),q7r=n8(),b7r=y7r()?q7r:h7r;s8.exports=b7r});var o8=s((KNe,u8)=>{"use strict";var w7r=z0();function E7r(r){return w7r(r)==="function"}u8.exports=E7r});var qr=s((rSe,v8)=>{"use strict";var N7r=o8();v8.exports=N7r});var c8=s((eSe,f8)=>{"use strict";var S7r=Math.floor;f8.exports=S7r});var Ur=s((tSe,l8)=>{"use strict";var O7r=c8();l8.exports=O7r});var d8=s((iSe,p8)=>{"use strict";var A7r=Ur();function _7r(r){return A7r(r)===r}p8.exports=_7r});var Ne=s((aSe,g8)=>{"use strict";var T7r=d8();g8.exports=T7r});var y8=s((nSe,m8)=>{"use strict";var I7r=9007199254740991;m8.exports=I7r});var q8=s((sSe,h8)=>{"use strict";var R7r=Ne(),L7r=y8();function P7r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&R7r(r.length)&&r.length>=0&&r.length<=L7r}h8.exports=P7r});var Ve=s((uSe,b8)=>{"use strict";var F7r=q8();b8.exports=F7r});var E8=s((oSe,w8)=>{"use strict";var j7r=qr();function M7r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&j7r(r.next)}w8.exports=M7r});var S8=s((vSe,N8)=>{"use strict";var B7r=E8();N8.exports=B7r});var _8=s((fSe,A8)=>{"use strict";var O8="function";function k7r(r){return typeof r.get===O8&&typeof r.set===O8}A8.exports=k7r});var ma=s((cSe,T8)=>{"use strict";var C7r=_8();T8.exports=C7r});var L8=s((lSe,R8)=>{"use strict";var I8={complex128:V7r,complex64:U7r,default:G7r};function V7r(r,e,t){r.set(t,e)}function U7r(r,e,t){r.set(t,e)}function G7r(r,e,t){r.set(t,e)}function D7r(r){var e=I8[r];return typeof e=="function"?e:I8.default}R8.exports=D7r});var W0=s((pSe,P8)=>{"use strict";var H7r=L8();P8.exports=H7r});var M8=s((dSe,j8)=>{"use strict";var F8={float64:z7r,float32:W7r,int32:X7r,int16:J7r,int8:Y7r,uint32:x7r,uint16:Z7r,uint8:$7r,uint8c:Q7r,generic:K7r,default:r9r};function z7r(r,e,t){r[e]=t}function W7r(r,e,t){r[e]=t}function X7r(r,e,t){r[e]=t}function J7r(r,e,t){r[e]=t}function Y7r(r,e,t){r[e]=t}function x7r(r,e,t){r[e]=t}function Z7r(r,e,t){r[e]=t}function $7r(r,e,t){r[e]=t}function Q7r(r,e,t){r[e]=t}function K7r(r,e,t){r[e]=t}function r9r(r,e,t){r[e]=t}function e9r(r){var e=F8[r];return typeof e=="function"?e:F8.default}j8.exports=e9r});var X0=s((gSe,B8)=>{"use strict";var t9r=M8();B8.exports=t9r});var C8=s((mSe,k8)=>{"use strict";var i9r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};k8.exports=i9r});var U8=s((ySe,V8)=>{"use strict";var a9r=re(),n9r=typeof Float64Array=="function";function s9r(r){return n9r&&r instanceof Float64Array||a9r(r)==="[object Float64Array]"}V8.exports=s9r});var D8=s((hSe,G8)=>{"use strict";var u9r=U8();G8.exports=u9r});var z8=s((qSe,H8)=>{"use strict";var o9r=typeof Float64Array=="function"?Float64Array:null;H8.exports=o9r});var J8=s((bSe,X8)=>{"use strict";var v9r=D8(),W8=z8();function f9r(){var r,e;if(typeof W8!="function")return!1;try{e=new W8([1,3.14,-3.14,NaN]),r=v9r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}X8.exports=f9r});var Y1=s((wSe,Y8)=>{"use strict";var c9r=J8();Y8.exports=c9r});var Z8=s((ESe,x8)=>{"use strict";var l9r=typeof Float64Array=="function"?Float64Array:void 0;x8.exports=l9r});var Q8=s((NSe,$8)=>{"use strict";function p9r(){throw new Error("not implemented")}$8.exports=p9r});var ge=s((SSe,K8)=>{"use strict";var d9r=Y1(),g9r=Z8(),m9r=Q8(),x1;d9r()?x1=g9r:x1=m9r;K8.exports=x1});var e7=s((OSe,r7)=>{"use strict";var y9r=re(),h9r=typeof Float32Array=="function";function q9r(r){return h9r&&r instanceof Float32Array||y9r(r)==="[object Float32Array]"}r7.exports=q9r});var i7=s((ASe,t7)=>{"use strict";var b9r=e7();t7.exports=b9r});var pr=s((_Se,a7)=>{"use strict";var w9r=Number.POSITIVE_INFINITY;a7.exports=w9r});var s7=s((TSe,n7)=>{"use strict";var E9r=typeof Float32Array=="function"?Float32Array:null;n7.exports=E9r});var v7=s((ISe,o7)=>{"use strict";var N9r=i7(),S9r=pr(),u7=s7();function O9r(){var r,e;if(typeof u7!="function")return!1;try{e=new u7([1,3.14,-3.14,5e40]),r=N9r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===S9r}catch{r=!1}return r}o7.exports=O9r});var c7=s((RSe,f7)=>{"use strict";var A9r=v7();f7.exports=A9r});var p7=s((LSe,l7)=>{"use strict";var _9r=typeof Float32Array=="function"?Float32Array:void 0;l7.exports=_9r});var g7=s((PSe,d7)=>{"use strict";function T9r(){throw new Error("not implemented")}d7.exports=T9r});var et=s((FSe,m7)=>{"use strict";var I9r=c7(),R9r=p7(),L9r=g7(),Z1;I9r()?Z1=R9r:Z1=L9r;m7.exports=Z1});var h7=s((jSe,y7)=>{"use strict";var P9r=re(),F9r=typeof Uint32Array=="function";function j9r(r){return F9r&&r instanceof Uint32Array||P9r(r)==="[object Uint32Array]"}y7.exports=j9r});var bt=s((MSe,q7)=>{"use strict";var M9r=h7();q7.exports=M9r});var ya=s((BSe,b7)=>{"use strict";var B9r=4294967295;b7.exports=B9r});var E7=s((kSe,w7)=>{"use strict";var k9r=typeof Uint32Array=="function"?Uint32Array:null;w7.exports=k9r});var O7=s((CSe,S7)=>{"use strict";var C9r=bt(),$1=ya(),N7=E7();function V9r(){var r,e;if(typeof N7!="function")return!1;try{e=[1,3.14,-3.14,$1+1,$1+2],e=new N7(e),r=C9r(e)&&e[0]===1&&e[1]===3&&e[2]===$1-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}S7.exports=V9r});var _7=s((VSe,A7)=>{"use strict";var U9r=O7();A7.exports=U9r});var I7=s((USe,T7)=>{"use strict";var G9r=typeof Uint32Array=="function"?Uint32Array:void 0;T7.exports=G9r});var L7=s((GSe,R7)=>{"use strict";function D9r(){throw new Error("not implemented")}R7.exports=D9r});var me=s((DSe,P7)=>{"use strict";var H9r=_7(),z9r=I7(),W9r=L7(),Q1;H9r()?Q1=z9r:Q1=W9r;P7.exports=Q1});var j7=s((HSe,F7)=>{"use strict";var X9r=re(),J9r=typeof Int32Array=="function";function Y9r(r){return J9r&&r instanceof Int32Array||X9r(r)==="[object Int32Array]"}F7.exports=Y9r});var J0=s((zSe,M7)=>{"use strict";var x9r=j7();M7.exports=x9r});var ha=s((WSe,B7)=>{"use strict";var Z9r=2147483647;B7.exports=Z9r});var C7=s((XSe,k7)=>{"use strict";var $9r=-2147483648;k7.exports=$9r});var U7=s((JSe,V7)=>{"use strict";var Q9r=typeof Int32Array=="function"?Int32Array:null;V7.exports=Q9r});var H7=s((YSe,D7)=>{"use strict";var K9r=J0(),rpr=ha(),epr=C7(),G7=U7();function tpr(){var r,e;if(typeof G7!="function")return!1;try{e=new G7([1,3.14,-3.14,rpr+1]),r=K9r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===epr}catch{r=!1}return r}D7.exports=tpr});var W7=s((xSe,z7)=>{"use strict";var ipr=H7();z7.exports=ipr});var J7=s((ZSe,X7)=>{"use strict";var apr=typeof Int32Array=="function"?Int32Array:void 0;X7.exports=apr});var x7=s(($Se,Y7)=>{"use strict";function npr(){throw new Error("not implemented")}Y7.exports=npr});var ui=s((QSe,Z7)=>{"use strict";var spr=W7(),upr=J7(),opr=x7(),K1;spr()?K1=upr:K1=opr;Z7.exports=K1});var Q7=s((KSe,$7)=>{"use strict";var vpr=re(),fpr=typeof Uint16Array=="function";function cpr(r){return fpr&&r instanceof Uint16Array||vpr(r)==="[object Uint16Array]"}$7.exports=cpr});var r9=s((rOe,K7)=>{"use strict";var lpr=Q7();K7.exports=lpr});var t9=s((eOe,e9)=>{"use strict";var ppr=65535;e9.exports=ppr});var a9=s((tOe,i9)=>{"use strict";var dpr=typeof Uint16Array=="function"?Uint16Array:null;i9.exports=dpr});var u9=s((iOe,s9)=>{"use strict";var gpr=r9(),r2=t9(),n9=a9();function mpr(){var r,e;if(typeof n9!="function")return!1;try{e=[1,3.14,-3.14,r2+1,r2+2],e=new n9(e),r=gpr(e)&&e[0]===1&&e[1]===3&&e[2]===r2-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}s9.exports=mpr});var v9=s((aOe,o9)=>{"use strict";var ypr=u9();o9.exports=ypr});var c9=s((nOe,f9)=>{"use strict";var hpr=typeof Uint16Array=="function"?Uint16Array:void 0;f9.exports=hpr});var p9=s((sOe,l9)=>{"use strict";function qpr(){throw new Error("not implemented")}l9.exports=qpr});var xi=s((uOe,d9)=>{"use strict";var bpr=v9(),wpr=c9(),Epr=p9(),e2;bpr()?e2=wpr:e2=Epr;d9.exports=e2});var m9=s((oOe,g9)=>{"use strict";var Npr=re(),Spr=typeof Int16Array=="function";function Opr(r){return Spr&&r instanceof Int16Array||Npr(r)==="[object Int16Array]"}g9.exports=Opr});var h9=s((vOe,y9)=>{"use strict";var Apr=m9();y9.exports=Apr});var b9=s((fOe,q9)=>{"use strict";var _pr=32767;q9.exports=_pr});var E9=s((cOe,w9)=>{"use strict";var Tpr=-32768;w9.exports=Tpr});var S9=s((lOe,N9)=>{"use strict";var Ipr=typeof Int16Array=="function"?Int16Array:null;N9.exports=Ipr});var _9=s((pOe,A9)=>{"use strict";var Rpr=h9(),Lpr=b9(),Ppr=E9(),O9=S9();function Fpr(){var r,e;if(typeof O9!="function")return!1;try{e=new O9([1,3.14,-3.14,Lpr+1]),r=Rpr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Ppr}catch{r=!1}return r}A9.exports=Fpr});var I9=s((dOe,T9)=>{"use strict";var jpr=_9();T9.exports=jpr});var L9=s((gOe,R9)=>{"use strict";var Mpr=typeof Int16Array=="function"?Int16Array:void 0;R9.exports=Mpr});var F9=s((mOe,P9)=>{"use strict";function Bpr(){throw new Error("not implemented")}P9.exports=Bpr});var qa=s((yOe,j9)=>{"use strict";var kpr=I9(),Cpr=L9(),Vpr=F9(),t2;kpr()?t2=Cpr:t2=Vpr;j9.exports=t2});var B9=s((hOe,M9)=>{"use strict";var Upr=re(),Gpr=typeof Uint8Array=="function";function Dpr(r){return Gpr&&r instanceof Uint8Array||Upr(r)==="[object Uint8Array]"}M9.exports=Dpr});var C9=s((qOe,k9)=>{"use strict";var Hpr=B9();k9.exports=Hpr});var U9=s((bOe,V9)=>{"use strict";var zpr=255;V9.exports=zpr});var D9=s((wOe,G9)=>{"use strict";var Wpr=typeof Uint8Array=="function"?Uint8Array:null;G9.exports=Wpr});var W9=s((EOe,z9)=>{"use strict";var Xpr=C9(),i2=U9(),H9=D9();function Jpr(){var r,e;if(typeof H9!="function")return!1;try{e=[1,3.14,-3.14,i2+1,i2+2],e=new H9(e),r=Xpr(e)&&e[0]===1&&e[1]===3&&e[2]===i2-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}z9.exports=Jpr});var J9=s((NOe,X9)=>{"use strict";var Ypr=W9();X9.exports=Ypr});var x9=s((SOe,Y9)=>{"use strict";var xpr=typeof Uint8Array=="function"?Uint8Array:void 0;Y9.exports=xpr});var $9=s((OOe,Z9)=>{"use strict";function Zpr(){throw new Error("not implemented")}Z9.exports=Zpr});var tt=s((AOe,Q9)=>{"use strict";var $pr=J9(),Qpr=x9(),Kpr=$9(),a2;$pr()?a2=Qpr:a2=Kpr;Q9.exports=a2});var rp=s((_Oe,K9)=>{"use strict";var rdr=re(),edr=typeof Uint8ClampedArray=="function";function tdr(r){return edr&&r instanceof Uint8ClampedArray||rdr(r)==="[object Uint8ClampedArray]"}K9.exports=tdr});var tp=s((TOe,ep)=>{"use strict";var idr=rp();ep.exports=idr});var ap=s((IOe,ip)=>{"use strict";var adr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;ip.exports=adr});var up=s((ROe,sp)=>{"use strict";var ndr=tp(),np=ap();function sdr(){var r,e;if(typeof np!="function")return!1;try{e=new np([-1,0,1,3.14,4.99,255,256]),r=ndr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}sp.exports=sdr});var vp=s((LOe,op)=>{"use strict";var udr=up();op.exports=udr});var cp=s((POe,fp)=>{"use strict";var odr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;fp.exports=odr});var pp=s((FOe,lp)=>{"use strict";function vdr(){throw new Error("not implemented")}lp.exports=vdr});var ba=s((jOe,dp)=>{"use strict";var fdr=vp(),cdr=cp(),ldr=pp(),n2;fdr()?n2=cdr:n2=ldr;dp.exports=n2});var mp=s((MOe,gp)=>{"use strict";var pdr=re(),ddr=typeof Int8Array=="function";function gdr(r){return ddr&&r instanceof Int8Array||pdr(r)==="[object Int8Array]"}gp.exports=gdr});var hp=s((BOe,yp)=>{"use strict";var mdr=mp();yp.exports=mdr});var bp=s((kOe,qp)=>{"use strict";var ydr=127;qp.exports=ydr});var Ep=s((COe,wp)=>{"use strict";var hdr=-128;wp.exports=hdr});var Sp=s((VOe,Np)=>{"use strict";var qdr=typeof Int8Array=="function"?Int8Array:null;Np.exports=qdr});var _p=s((UOe,Ap)=>{"use strict";var bdr=hp(),wdr=bp(),Edr=Ep(),Op=Sp();function Ndr(){var r,e;if(typeof Op!="function")return!1;try{e=new Op([1,3.14,-3.14,wdr+1]),r=bdr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Edr}catch{r=!1}return r}Ap.exports=Ndr});var Ip=s((GOe,Tp)=>{"use strict";var Sdr=_p();Tp.exports=Sdr});var Lp=s((DOe,Rp)=>{"use strict";var Odr=typeof Int8Array=="function"?Int8Array:void 0;Rp.exports=Odr});var Fp=s((HOe,Pp)=>{"use strict";function Adr(){throw new Error("not implemented")}Pp.exports=Adr});var wa=s((zOe,jp)=>{"use strict";var _dr=Ip(),Tdr=Lp(),Idr=Fp(),s2;_dr()?s2=Tdr:s2=Idr;jp.exports=s2});var u2=s((WOe,Mp)=>{"use strict";function Rdr(r){return typeof r=="number"}Mp.exports=Rdr});var kp=s((XOe,Bp)=>{"use strict";Bp.exports=Number});var Y0=s((JOe,Cp)=>{"use strict";var Ldr=kp();Cp.exports=Ldr});var Up=s((YOe,Vp)=>{"use strict";var Pdr=Y0(),Fdr=Pdr.prototype.toString;Vp.exports=Fdr});var Dp=s((xOe,Gp)=>{"use strict";var jdr=Up();function Mdr(r){try{return jdr.call(r),!0}catch{return!1}}Gp.exports=Mdr});var o2=s((ZOe,Hp)=>{"use strict";var Bdr=ga(),kdr=re(),Cdr=Y0(),Vdr=Dp(),Udr=Bdr();function Gdr(r){return typeof r=="object"?r instanceof Cdr?!0:Udr?Vdr(r):kdr(r)==="[object Number]":!1}Hp.exports=Gdr});var Wp=s(($Oe,zp)=>{"use strict";var Ddr=u2(),Hdr=o2();function zdr(r){return Ddr(r)||Hdr(r)}zp.exports=zdr});var Nr=s((QOe,Jp)=>{"use strict";var Xp=D(),v2=Wp(),Wdr=u2(),Xdr=o2();Xp(v2,"isPrimitive",Wdr);Xp(v2,"isObject",Xdr);Jp.exports=v2});var Ir=s((KOe,Yp)=>{"use strict";var Jdr=Y0(),Ydr=Jdr.NEGATIVE_INFINITY;Yp.exports=Ydr});var f2=s((rAe,xp)=>{"use strict";var xdr=pr(),Zdr=Ir(),$dr=Ne();function Qdr(r){return r<xdr&&r>Zdr&&$dr(r)}xp.exports=Qdr});var c2=s((eAe,Zp)=>{"use strict";var Kdr=Nr().isPrimitive,rgr=f2();function egr(r){return Kdr(r)&&rgr(r)}Zp.exports=egr});var l2=s((tAe,$p)=>{"use strict";var tgr=Nr().isObject,igr=f2();function agr(r){return tgr(r)&&igr(r.valueOf())}$p.exports=agr});var Kp=s((iAe,Qp)=>{"use strict";var ngr=c2(),sgr=l2();function ugr(r){return ngr(r)||sgr(r)}Qp.exports=ugr});var ye=s((aAe,ed)=>{"use strict";var rd=D(),p2=Kp(),ogr=c2(),vgr=l2();rd(p2,"isPrimitive",ogr);rd(p2,"isObject",vgr);ed.exports=p2});var d2=s((nAe,td)=>{"use strict";var fgr=ye().isPrimitive;function cgr(r){return fgr(r)&&r>=0}td.exports=cgr});var g2=s((sAe,id)=>{"use strict";var lgr=ye().isObject;function pgr(r){return lgr(r)&&r.valueOf()>=0}id.exports=pgr});var nd=s((uAe,ad)=>{"use strict";var dgr=d2(),ggr=g2();function mgr(r){return dgr(r)||ggr(r)}ad.exports=mgr});var be=s((oAe,ud)=>{"use strict";var sd=D(),m2=nd(),ygr=d2(),hgr=g2();sd(m2,"isPrimitive",ygr);sd(m2,"isObject",hgr);ud.exports=m2});var y2=s((vAe,od)=>{"use strict";var qgr=4294967295;od.exports=qgr});var fd=s((fAe,vd)=>{"use strict";var bgr=Ne(),wgr=y2();function Egr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&bgr(r.length)&&r.length>=0&&r.length<=wgr}vd.exports=Egr});var Zi=s((cAe,cd)=>{"use strict";var Ngr=fd();cd.exports=Ngr});var pd=s((lAe,ld)=>{"use strict";var Sgr=re(),Ogr=typeof ArrayBuffer=="function";function Agr(r){return Ogr&&r instanceof ArrayBuffer||Sgr(r)==="[object ArrayBuffer]"}ld.exports=Agr});var x0=s((pAe,dd)=>{"use strict";var _gr=pd();dd.exports=_gr});var md=s((dAe,gd)=>{"use strict";var Tgr=qe();function Igr(r){return typeof r=="object"&&r!==null&&!Tgr(r)}gd.exports=Igr});var Z0=s((gAe,yd)=>{"use strict";var Rgr=md();yd.exports=Rgr});var qd=s((mAe,hd)=>{"use strict";function Lgr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}hd.exports=Lgr});var wd=s((yAe,bd)=>{"use strict";function Pgr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}bd.exports=Pgr});var Ad=s((hAe,Od)=>{"use strict";var Ed=Nr().isPrimitive,Nd=ni(),Tn=D(),Sd=V(),Fgr=qd(),jgr=wd();function $i(r,e){if(!(this instanceof $i))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ed(r))throw new TypeError(Sd("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Ed(e))throw new TypeError(Sd("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Nd(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),Nd(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Tn($i,"BYTES_PER_ELEMENT",8);Tn($i.prototype,"BYTES_PER_ELEMENT",8);Tn($i.prototype,"byteLength",16);Tn($i.prototype,"toString",Fgr);Tn($i.prototype,"toJSON",jgr);Od.exports=$i});var Ea=s((qAe,_d)=>{"use strict";var Mgr=Ad();_d.exports=Mgr});var Id=s((bAe,Td)=>{"use strict";var Bgr=typeof Math.fround=="function"?Math.fround:null;Td.exports=Bgr});var Pd=s((wAe,Ld)=>{"use strict";var kgr=et(),Rd=new kgr(1);function Cgr(r){return Rd[0]=r,Rd[0]}Ld.exports=Cgr});var Md=s((EAe,jd)=>{"use strict";var Fd=Id(),Vgr=Pd(),h2;typeof Fd=="function"?h2=Fd:h2=Vgr;jd.exports=h2});var kd=s((NAe,Bd)=>{"use strict";function Ugr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}Bd.exports=Ugr});var Vd=s((SAe,Cd)=>{"use strict";function Ggr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}Cd.exports=Ggr});var Wd=s((OAe,zd)=>{"use strict";var Ud=Nr().isPrimitive,Gd=ni(),In=D(),Dd=Md(),Hd=V(),Dgr=kd(),Hgr=Vd();function Qi(r,e){if(!(this instanceof Qi))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ud(r))throw new TypeError(Hd("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Ud(e))throw new TypeError(Hd("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Gd(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Dd(r)}),Gd(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Dd(e)}),this}In(Qi,"BYTES_PER_ELEMENT",4);In(Qi.prototype,"BYTES_PER_ELEMENT",4);In(Qi.prototype,"byteLength",8);In(Qi.prototype,"toString",Dgr);In(Qi.prototype,"toJSON",Hgr);zd.exports=Qi});var Na=s((AAe,Xd)=>{"use strict";var zgr=Wd();Xd.exports=zgr});var Yd=s((_Ae,Jd)=>{"use strict";var Wgr=Ea(),Xgr=Na();function Jgr(r){return r instanceof Wgr||r instanceof Xgr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}Jd.exports=Jgr});var Ye=s((TAe,xd)=>{"use strict";var Ygr=Yd();xd.exports=Ygr});var $d=s((IAe,Zd)=>{"use strict";var xgr=Ne();function Zgr(r){return xgr(r/2)}Zd.exports=Zgr});var $0=s((RAe,Qd)=>{"use strict";var $gr=$d();Qd.exports=$gr});var rg=s((LAe,Kd)=>{"use strict";var Qgr=vr(),Q0=B1();function Kgr(){return typeof Q0=="function"&&typeof Q0("foo")=="symbol"&&Qgr(Q0,"iterator")&&typeof Q0.iterator=="symbol"}Kd.exports=Kgr});var K0=s((PAe,eg)=>{"use strict";var rmr=rg();eg.exports=rmr});var ig=s((FAe,tg)=>{"use strict";var emr=K0(),tmr=emr()?Symbol.iterator:null;tg.exports=tmr});var Rn=s((jAe,ag)=>{"use strict";var imr=ig();ag.exports=imr});var sg=s((MAe,ng)=>{"use strict";var amr=ni();function nmr(r,e,t){amr(r,e,{configurable:!1,enumerable:!1,get:t})}ng.exports=nmr});var br=s((BAe,ug)=>{"use strict";var smr=sg();ug.exports=smr});var vg=s((kAe,og)=>{"use strict";function umr(r){return r.re}og.exports=umr});var oi=s((CAe,fg)=>{"use strict";var omr=vg();fg.exports=omr});var lg=s((VAe,cg)=>{"use strict";function vmr(r){return r.im}cg.exports=vmr});var vi=s((UAe,pg)=>{"use strict";var fmr=lg();pg.exports=fmr});var gg=s((GAe,dg)=>{"use strict";var cmr=et();function lmr(r,e){return new cmr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}dg.exports=lmr});var Sa=s((DAe,mg)=>{"use strict";var pmr=gg();mg.exports=pmr});var hg=s((HAe,yg)=>{"use strict";var dmr=ge();function gmr(r,e){return new dmr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}yg.exports=gmr});var Oa=s((zAe,qg)=>{"use strict";var mmr=hg();qg.exports=mmr});var Eg=s((WAe,wg)=>{"use strict";var bg={float64:ymr,float32:hmr,int32:qmr,int16:bmr,int8:wmr,uint32:Emr,uint16:Nmr,uint8:Smr,uint8c:Omr,generic:Amr,default:_mr};function ymr(r,e){return r[e]}function hmr(r,e){return r[e]}function qmr(r,e){return r[e]}function bmr(r,e){return r[e]}function wmr(r,e){return r[e]}function Emr(r,e){return r[e]}function Nmr(r,e){return r[e]}function Smr(r,e){return r[e]}function Omr(r,e){return r[e]}function Amr(r,e){return r[e]}function _mr(r,e){return r[e]}function Tmr(r){var e=bg[r];return typeof e=="function"?e:bg.default}wg.exports=Tmr});var Aa=s((XAe,Ng)=>{"use strict";var Imr=Eg();Ng.exports=Imr});var Ag=s((JAe,Og)=>{"use strict";var Sg={complex128:Rmr,complex64:Lmr,default:Pmr};function Rmr(r,e){return r.get(e)}function Lmr(r,e){return r.get(e)}function Pmr(r,e){return r.get(e)}function Fmr(r){var e=Sg[r];return typeof e=="function"?e:Sg.default}Og.exports=Fmr});var Ki=s((YAe,_g)=>{"use strict";var jmr=Ag();_g.exports=jmr});var Ig=s((xAe,Tg)=>{"use strict";var Mmr=Zi(),Bmr=Ye(),kmr=oi(),Cmr=vi(),Vmr=V();function Umr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Mmr(i)&&i.length>=2)e.push(i[0],i[1]);else if(Bmr(i))e.push(kmr(i),Cmr(i));else return new TypeError(Vmr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Tg.exports=Umr});var Lg=s((ZAe,Rg)=>{"use strict";var Gmr=Zi(),Dmr=Ye(),Hmr=oi(),zmr=vi(),Wmr=V();function Xmr(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),Gmr(n)&&n.length>=2)i.push(n[0],n[1]);else if(Dmr(n))i.push(Hmr(n),zmr(n));else return new TypeError(Wmr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}Rg.exports=Xmr});var Fg=s(($Ae,Pg)=>{"use strict";var Jmr=Ye(),Ymr=oi(),xmr=vi();function Zmr(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!Jmr(i))return null;r[n]=Ymr(i),r[n+1]=xmr(i),n+=2}return r}Pg.exports=Zmr});var Dg=s((QAe,Gg)=>{"use strict";var Ln=be().isPrimitive,jg=Zi(),b2=Ve(),Mg=x0(),Bg=Z0(),$mr=qe(),ra=qr(),_a=Ye(),rs=$0(),q2=Ne(),Qmr=K0(),Ta=Rn(),Se=D(),is=br(),De=et(),kg=Na(),Zr=V(),es=oi(),ts=vi(),Kmr=Sa(),ryr=Oa(),eyr=Aa(),tyr=Ki(),Cg=Ig(),iyr=Lg(),ayr=Fg(),Ue=De.BYTES_PER_ELEMENT*2,Vg=Qmr();function Ia(r){return r instanceof ee||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Ug(r){return r===ee||r.name==="Complex128Array"}function nyr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ue}function syr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ue*2}function ee(){var r,e,t,i;if(e=arguments.length,!(this instanceof ee))return e===0?new ee:e===1?new ee(arguments[0]):e===2?new ee(arguments[0],arguments[1]):new ee(arguments[0],arguments[1],arguments[2]);if(e===0)t=new De(0);else if(e===1)if(Ln(arguments[0]))t=new De(arguments[0]*2);else if(b2(arguments[0]))if(t=arguments[0],i=t.length,i&&$mr(t)&&_a(t[0])){if(t=ayr(new De(i*2),t),t===null){if(!rs(i))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(arguments[0])}}else{if(nyr(t))t=Kmr(t,0);else if(syr(t))t=ryr(t,0);else if(!rs(i))throw new RangeError(Zr("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(t)}else if(Mg(arguments[0])){if(t=arguments[0],!q2(t.byteLength/Ue))throw new RangeError(Zr("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ue,t.byteLength));t=new De(t)}else if(Bg(arguments[0])){if(t=arguments[0],Vg===!1)throw new TypeError(Zr("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!ra(t[Ta]))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ta](),!ra(t.next))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Cg(t),t instanceof Error)throw t;t=new De(t)}else throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Mg(t))throw new TypeError(Zr("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Ln(r))throw new TypeError(Zr("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!q2(r/Ue))throw new RangeError(Zr("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ue,r));if(e===2){if(i=t.byteLength-r,!q2(i/Ue))throw new RangeError(Zr("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ue,i));t=new De(t,r)}else{if(i=arguments[2],!Ln(i))throw new TypeError(Zr("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ue>t.byteLength-r)throw new RangeError(Zr("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ue));t=new De(t,r,i*2)}}return Se(this,"_buffer",t),Se(this,"_length",t.length/2),this}Se(ee,"BYTES_PER_ELEMENT",Ue);Se(ee,"name","Complex64Array");Se(ee,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!ra(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ug(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!ra(a))throw new TypeError(Zr("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(Ia(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),_a(l))u[m]=es(l),u[m+1]=ts(l);else if(jg(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(b2(e)){if(a){for(f=e.length,e.get&&e.set?v=tyr("default"):v=eyr("default"),p=0;p<f;p++)if(!_a(v(e,p))){c=!0;break}if(c){if(!rs(f))throw new RangeError(Zr("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),_a(l))u[m]=es(l),u[m+1]=ts(l);else if(jg(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(Bg(e)&&Vg&&ra(e[Ta])){if(u=e[Ta](),!ra(u.next))throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=iyr(u,a,t):o=Cg(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Se(ee,"of",function(){var e,t;if(!ra(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ug(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});is(ee.prototype,"buffer",function(){return this._buffer.buffer});is(ee.prototype,"byteLength",function(){return this._buffer.byteLength});is(ee.prototype,"byteOffset",function(){return this._buffer.byteOffset});Se(ee.prototype,"BYTES_PER_ELEMENT",ee.BYTES_PER_ELEMENT);Se(ee.prototype,"copyWithin",function(e,t){if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Se(ee.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Se(i,"next",v),Se(i,"return",f),Ta&&Se(i,Ta,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new kg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Se(ee.prototype,"get",function(e){var t;if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ln(e))throw new TypeError(Zr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new kg(t[e],t[e+1])});is(ee.prototype,"length",function(){return this._length});Se(ee.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!Ln(i))throw new TypeError(Zr("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(_a(e)){if(i>=this._length)throw new RangeError(Zr("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=es(e),a[i+1]=ts(e);return}if(Ia(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ue,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(b2(e)){for(o=e.length,f=0;f<o;f++)if(!_a(e[f])){u=!0;break}if(u){if(!rs(o))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ue,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=es(v),a[i+1]=ts(v),i+=2;return}throw new TypeError(Zr("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Gg.exports=ee});var Ra=s((KAe,Hg)=>{"use strict";var uyr=Dg();Hg.exports=uyr});var Wg=s((r_e,zg)=>{"use strict";function oyr(r){return r.re}zg.exports=oyr});var it=s((e_e,Xg)=>{"use strict";var vyr=Wg();Xg.exports=vyr});var Yg=s((t_e,Jg)=>{"use strict";function fyr(r){return r.im}Jg.exports=fyr});var at=s((i_e,xg)=>{"use strict";var cyr=Yg();xg.exports=cyr});var $g=s((a_e,Zg)=>{"use strict";var lyr=Zi(),pyr=Ye(),dyr=V(),gyr=it(),myr=at();function yyr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,lyr(i)&&i.length>=2)e.push(i[0],i[1]);else if(pyr(i))e.push(gyr(i),myr(i));else return new TypeError(dyr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Zg.exports=yyr});var Kg=s((n_e,Qg)=>{"use strict";var hyr=Zi(),qyr=Ye(),byr=V(),wyr=it(),Eyr=at();function Nyr(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),hyr(n)&&n.length>=2)i.push(n[0],n[1]);else if(qyr(n))i.push(wyr(n),Eyr(n));else return new TypeError(byr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}Qg.exports=Nyr});var em=s((s_e,rm)=>{"use strict";var Syr=Ye(),Oyr=it(),Ayr=at();function _yr(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!Syr(i))return null;r[n]=Oyr(i),r[n+1]=Ayr(i),n+=2}return r}rm.exports=_yr});var fm=s((u_e,vm)=>{"use strict";var Pn=be().isPrimitive,tm=Zi(),E2=Ve(),im=x0(),am=Z0(),Tyr=qe(),ea=qr(),La=Ye(),as=$0(),w2=Ne(),Iyr=K0(),Pa=Rn(),Oe=D(),us=br(),He=ge(),nm=Ea(),ns=it(),ss=at(),Ryr=Sa(),Lyr=Oa(),Pyr=Aa(),Fyr=Ki(),$r=V(),sm=$g(),jyr=Kg(),Myr=em(),Ge=He.BYTES_PER_ELEMENT*2,um=Iyr();function Fa(r){return r instanceof te||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function om(r){return r===te||r.name==="Complex64Array"}function Byr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ge/2}function kyr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ge}function te(){var r,e,t,i;if(e=arguments.length,!(this instanceof te))return e===0?new te:e===1?new te(arguments[0]):e===2?new te(arguments[0],arguments[1]):new te(arguments[0],arguments[1],arguments[2]);if(e===0)t=new He(0);else if(e===1)if(Pn(arguments[0]))t=new He(arguments[0]*2);else if(E2(arguments[0]))if(t=arguments[0],i=t.length,i&&Tyr(t)&&La(t[0])){if(t=Myr(new He(i*2),t),t===null){if(!as(i))throw new RangeError($r("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new He(arguments[0])}}else{if(Byr(t))t=Ryr(t,0);else if(kyr(t))t=Lyr(t,0);else if(!as(i))throw new RangeError($r("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new He(t)}else if(im(arguments[0])){if(t=arguments[0],!w2(t.byteLength/Ge))throw new RangeError($r("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ge,t.byteLength));t=new He(t)}else if(am(arguments[0])){if(t=arguments[0],um===!1)throw new TypeError($r("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!ea(t[Pa]))throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Pa](),!ea(t.next))throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=sm(t),t instanceof Error)throw t;t=new He(t)}else throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!im(t))throw new TypeError($r("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Pn(r))throw new TypeError($r("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!w2(r/Ge))throw new RangeError($r("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ge,r));if(e===2){if(i=t.byteLength-r,!w2(i/Ge))throw new RangeError($r("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ge,i));t=new He(t,r)}else{if(i=arguments[2],!Pn(i))throw new TypeError($r("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ge>t.byteLength-r)throw new RangeError($r("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ge));t=new He(t,r,i*2)}}return Oe(this,"_buffer",t),Oe(this,"_length",t.length/2),this}Oe(te,"BYTES_PER_ELEMENT",Ge);Oe(te,"name","Complex128Array");Oe(te,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!ea(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!om(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!ea(a))throw new TypeError($r("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(Fa(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),La(l))u[m]=ns(l),u[m+1]=ss(l);else if(tm(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(E2(e)){if(a){for(f=e.length,e.get&&e.set?v=Fyr("default"):v=Pyr("default"),p=0;p<f;p++)if(!La(v(e,p))){c=!0;break}if(c){if(!as(f))throw new RangeError($r("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),La(l))u[m]=ns(l),u[m+1]=ss(l);else if(tm(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(am(e)&&um&&ea(e[Pa])){if(u=e[Pa](),!ea(u.next))throw new TypeError($r("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=jyr(u,a,t):o=sm(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError($r("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Oe(te,"of",function(){var e,t;if(!ea(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!om(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});us(te.prototype,"buffer",function(){return this._buffer.buffer});us(te.prototype,"byteLength",function(){return this._buffer.byteLength});us(te.prototype,"byteOffset",function(){return this._buffer.byteOffset});Oe(te.prototype,"BYTES_PER_ELEMENT",te.BYTES_PER_ELEMENT);Oe(te.prototype,"copyWithin",function(e,t){if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Oe(te.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Oe(i,"next",v),Oe(i,"return",f),Pa&&Oe(i,Pa,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new nm(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Oe(te.prototype,"get",function(e){var t;if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Pn(e))throw new TypeError($r("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new nm(t[e],t[e+1])});us(te.prototype,"length",function(){return this._length});Oe(te.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!Pn(i))throw new TypeError($r("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(La(e)){if(i>=this._length)throw new RangeError($r("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=ns(e),a[i+1]=ss(e);return}if(Fa(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ge,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new He(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(E2(e)){for(o=e.length,f=0;f<o;f++)if(!La(e[f])){u=!0;break}if(u){if(!as(o))throw new RangeError($r("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ge,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new He(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=ns(v),a[i+1]=ss(v),i+=2;return}throw new TypeError($r("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});vm.exports=te});var ja=s((o_e,cm)=>{"use strict";var Cyr=fm();cm.exports=Cyr});var pm=s((v_e,lm)=>{"use strict";var Vyr=ge(),Uyr=et(),Gyr=me(),Dyr=ui(),Hyr=xi(),zyr=qa(),Wyr=tt(),Xyr=ba(),Jyr=wa(),Yyr=Ra(),xyr=ja(),Zyr=[Vyr,Uyr,Dyr,Gyr,zyr,Hyr,Jyr,Wyr,Xyr,Yyr,xyr];lm.exports=Zyr});var gm=s((f_e,dm)=>{"use strict";var $yr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];dm.exports=$yr});var hm=s((c_e,ym)=>{"use strict";var Qyr=Yi(),Kyr=qe(),rhr=qt(),ehr=C8(),thr=pm(),mm=gm(),ihr=mm.length;function ahr(r){var e;if(Kyr(r))return"generic";if(Qyr(r))return null;for(e=0;e<ihr;e++)if(r instanceof thr[e])return mm[e];return ehr[rhr(r)]||null}ym.exports=ahr});var Ma=s((l_e,qm)=>{"use strict";var nhr=hm();qm.exports=nhr});var Em=s((p_e,wm)=>{"use strict";var bm=qr(),shr=Ve(),uhr=S8(),ohr=ma(),vhr=W0(),fhr=X0(),chr=Ma(),N2=V();function lhr(){var r,e,t,i,a,n,u,o,v;if(r=arguments[0],arguments.length>1)if(shr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!bm(t))throw new TypeError(N2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!bm(t))throw new TypeError(N2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!uhr(r))throw new TypeError(N2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(a=i.length,u=chr(i),ohr(i)?n=vhr(u):n=fhr(u),t){for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,t.call(e,v.value,o));return i}for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,v.value);return i}wm.exports=lhr});var Sm=s((d_e,Nm)=>{"use strict";var phr=Em();Nm.exports=phr});var Am=s((g_e,Om)=>{"use strict";function dhr(r){return r!==r}Om.exports=dhr});var z=s((m_e,_m)=>{"use strict";var ghr=Am();_m.exports=ghr});var Im=s((y_e,Tm)=>{"use strict";var mhr={Complex64:"complex64",Complex128:"complex128"};Tm.exports=mhr});var Lm=s((h_e,Rm)=>{"use strict";var yhr=Na(),hhr=Ea(),qhr=[yhr,hhr];Rm.exports=qhr});var Fm=s((q_e,Pm)=>{"use strict";var bhr=["complex64","complex128"];Pm.exports=bhr});var Bm=s((b_e,Mm)=>{"use strict";var whr=qt(),Ehr=Im(),Nhr=Lm(),jm=Fm(),Shr=jm.length;function Ohr(r){var e;for(e=0;e<Shr;e++)if(r instanceof Nhr[e])return jm[e];return Ehr[whr(r)]||null}Mm.exports=Ohr});var S2=s((w_e,km)=>{"use strict";var Ahr=Bm();km.exports=Ahr});var Vm=s((E_e,Cm)=>{"use strict";var _hr=ge(),Thr=et(),Ihr=ja(),Rhr=Ra(),Lhr={float64:_hr,float32:Thr,complex128:Ihr,complex64:Rhr};Cm.exports=Lhr});var Gm=s((N_e,Um)=>{"use strict";var Phr=Vm();function Fhr(r){return Phr[r]||null}Um.exports=Fhr});var Hm=s((S_e,Dm)=>{"use strict";var jhr=Gm();Dm.exports=jhr});var Wm=s((O_e,zm)=>{"use strict";function Mhr(r,e,t,i){var a,n,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(a=[r],i?n=t-1:n=t,u=(e-r)/n,o=1;o<n;o++)a.push(r+u*o);return i&&a.push(e),a}zm.exports=Mhr});var $m=s((A_e,Zm)=>{"use strict";var Bhr=Na(),khr=Ea(),Xm=it(),Jm=at(),Ym=oi(),xm=vi();function Chr(r,e,t,i,a,n){var u,o,v,f,c,l,p,m,y,g,d,h,q;if(a===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=Ym(e),l=xm(e)):(f=Xm(e),l=Jm(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Ym(i),p=xm(i)):(c=Xm(i),p=Jm(i)),o===2?u=Bhr:u=khr,a===1)return n?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],n?h=a-1:h=a,g=(c-f)/h,d=(p-l)/h,q=1;q<h;q++)m=f+g*q,y=l+d*q,v.push(new u(m,y));return n&&v.push(new u(c,p)),v}Zm.exports=Chr});var O2=s((__e,Qm)=>{"use strict";function Vhr(r,e,t,i,a){var n,u,o;if(i===0)return r;if(i===1)return a?r[0]=t:r[0]=e,r;for(r[0]=e,a?n=i-1:n=i,u=(t-e)/n,o=1;o<n;o++)r[o]=e+u*o;return a&&(r[n]=t),r}Qm.exports=Vhr});var A2=s((T_e,iy)=>{"use strict";var Km=it(),ry=at(),ey=oi(),ty=vi();function Uhr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g;if(n===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=ey(t),f=ty(t)):(o=Km(t),f=ry(t)),i==="float64"?(v=a,c=0):i==="complex64"?(v=ey(a),c=ty(a)):(v=Km(a),c=ry(a)),n===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=n-1:m=n,l=(v-o)/m,p=(c-f)/m,g=2,y=1;y<m;y++)r[g]=o+l*y,r[g+1]=f+p*y,g+=2;return u&&(r[g]=v,r[g+1]=c),r}iy.exports=Uhr});var ny=s((I_e,ay)=>{"use strict";var Ghr=Object;ay.exports=Ghr});var Ba=s((R_e,sy)=>{"use strict";var Dhr=ny();sy.exports=Dhr});var oy=s((L_e,uy)=>{"use strict";var Hhr=Object.getPrototypeOf;uy.exports=Hhr});var fy=s((P_e,vy)=>{"use strict";function zhr(r){return r.__proto__}vy.exports=zhr});var ly=s((F_e,cy)=>{"use strict";var Whr=re(),Xhr=fy();function Jhr(r){var e=Xhr(r);return e||e===null?e:Whr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}cy.exports=Jhr});var dy=s((j_e,py)=>{"use strict";var Yhr=qr(),xhr=oy(),Zhr=ly(),_2;Yhr(Object.getPrototypeOf)?_2=xhr:_2=Zhr;py.exports=_2});var my=s((M_e,gy)=>{"use strict";var $hr=Ba(),Qhr=dy();function Khr(r){return r==null?null:(r=$hr(r),Qhr(r))}gy.exports=Khr});var ta=s((B_e,yy)=>{"use strict";var rqr=my();yy.exports=rqr});var by=s((k_e,qy)=>{"use strict";var eqr=Z0(),hy=qr(),tqr=ta(),os=vr(),iqr=re(),aqr=Object.prototype;function nqr(r){var e;for(e in r)if(!os(r,e))return!1;return!0}function sqr(r){var e;return eqr(r)?(e=tqr(r),e?!os(r,"constructor")&&os(e,"constructor")&&hy(e.constructor)&&iqr(e.constructor)==="[object Function]"&&os(e,"isPrototypeOf")&&hy(e.isPrototypeOf)&&(e===aqr||nqr(r)):!0):!1}qy.exports=sqr});var hr=s((C_e,wy)=>{"use strict";var uqr=by();wy.exports=uqr});var T2=s((V_e,Ey)=>{"use strict";function oqr(r){return typeof r=="string"}Ey.exports=oqr});var Sy=s((U_e,Ny)=>{"use strict";var vqr=String.prototype.valueOf;Ny.exports=vqr});var Ay=s((G_e,Oy)=>{"use strict";var fqr=Sy();function cqr(r){try{return fqr.call(r),!0}catch{return!1}}Oy.exports=cqr});var I2=s((D_e,_y)=>{"use strict";var lqr=ga(),pqr=re(),dqr=Ay(),gqr=lqr();function mqr(r){return typeof r=="object"?r instanceof String?!0:gqr?dqr(r):pqr(r)==="[object String]":!1}_y.exports=mqr});var Iy=s((H_e,Ty)=>{"use strict";var yqr=T2(),hqr=I2();function qqr(r){return yqr(r)||hqr(r)}Ty.exports=qqr});var Yr=s((z_e,Ly)=>{"use strict";var Ry=D(),R2=Iy(),bqr=T2(),wqr=I2();Ry(R2,"isPrimitive",bqr);Ry(R2,"isObject",wqr);Ly.exports=R2});var P2=s((W_e,Fy)=>{"use strict";var Eqr=hr(),Py=vr(),Nqr=Yr().isPrimitive,Sqr=de().isPrimitive,L2=V();function Oqr(r,e){return Eqr(e)?Py(e,"dtype")&&(r.dtype=e.dtype,!Nqr(r.dtype))?new TypeError(L2("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Py(e,"endpoint")&&(r.endpoint=e.endpoint,!Sqr(r.endpoint))?new TypeError(L2("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(L2("invalid argument. Options argument must be an object. Value: `%s`.",e))}Fy.exports=Oqr});var F2=s((X_e,Aqr)=>{Aqr.exports={endpoint:!0}});var Uy=s((J_e,Vy)=>{"use strict";var jy=Ye(),My=Nr().isPrimitive,_qr=be().isPrimitive,By=z(),ky=S2(),Tqr=Hm(),Iqr=Sa(),Rqr=Oa(),ka=V(),Lqr=Wm(),Pqr=$m(),Fqr=O2(),Cy=A2(),jqr=P2(),Mqr=F2();function Bqr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(o=ky(r),o===null){if(!jy(r))throw new TypeError(ka("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!My(r)||By(r))throw new TypeError(ka("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=ky(e),v===null){if(!jy(e))throw new TypeError(ka("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!My(e)||By(e))throw new TypeError(ka("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!_qr(t))throw new TypeError(ka("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Mqr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(n=jqr(i,arguments[3]),n))throw n;if(i.dtype==="generic")return f?Pqr(o,r,v,e,t,i.endpoint):Lqr(r,e,t,i.endpoint);if(a=Tqr(i.dtype),a===null)throw new TypeError(ka('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new a(t),i.dtype==="complex64")return Cy(Iqr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return Cy(Rqr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return Fqr(u,r,e,t,i.endpoint)}Vy.exports=Bqr});var Dy=s((Y_e,Gy)=>{"use strict";var kqr=ma(),Cqr=Aa(),Vqr=X0(),Uqr=Ki(),Gqr=W0(),Dqr=Ma();function Hqr(r){var e=Dqr(r);return kqr(r)?{accessorProtocol:!0,accessors:[Uqr(e),Gqr(e)]}:{accessorProtocol:!1,accessors:[Cqr(e),Vqr(e)]}}Gy.exports=Hqr});var zy=s((x_e,Hy)=>{"use strict";var zqr=Dy();Hy.exports=zqr});var Xy=s((Z_e,Wy)=>{"use strict";var Wqr=zy();function Xqr(r){var e=Wqr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Wy.exports=Xqr});var Fn=s(($_e,Jy)=>{"use strict";var Jqr=Xy();Jy.exports=Jqr});var Ky=s((Q_e,Qy)=>{"use strict";var Yqr=Na(),xqr=Ea(),Yy=it(),xy=at(),Zy=oi(),$y=vi();function Zqr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g,d,h,q,w,A;if(n===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=Zy(t),l=$y(t)):(f=Yy(t),l=xy(t)),i==="float64"?(c=a,p=0):i==="complex64"?(v+=1,c=Zy(a),p=$y(a)):(c=Yy(a),p=xy(a)),v===2?o=Yqr:o=xqr,y=r.data,m=r.accessors[1],n===1)return u?m(y,0,new o(c,p)):m(y,0,new o(f,l)),r;for(m(y,0,new o(f,l)),u?w=n-1:w=n,h=(c-f)/w,q=(p-l)/w,A=1;A<w;A++)g=f+h*A,d=l+q*A,m(y,A,new o(g,d));return u&&m(y,w,new o(c,p)),r}Qy.exports=Zqr});var eh=s((K_e,rh)=>{"use strict";function $qr(r,e,t,i,a){var n,u,o,v,f;if(i===0)return r;if(n=r.data,u=r.accessors[1],i===1)return a?u(n,0,t):u(n,0,e),r;for(u(n,0,e),a?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(n,f,e+v*f);return a&&u(n,o,t),r}rh.exports=$qr});var vh=s((rTe,oh)=>{"use strict";var th=Ye(),ih=Nr().isPrimitive,Qqr=Ve(),jn=V(),ah=z(),nh=S2(),Kqr=Ma(),rbr=Sa(),ebr=Oa(),sh=Fn(),tbr=Ky(),ibr=eh(),uh=A2(),abr=O2(),nbr=P2(),sbr=F2();function ubr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(n=nh(r),n===null){if(!th(r))throw new TypeError(jn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="complex128"}o=!0}else{if(!ih(r)||ah(r))throw new TypeError(jn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="float64"}if(typeof e=="object"){if(u=nh(e),u===null){if(!th(e))throw new TypeError(jn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!ih(e)||ah(e))throw new TypeError(jn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!Qqr(t))throw new TypeError(jn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:sbr.endpoint},arguments.length>3&&(a=nbr(i,arguments[3]),a))throw a;if(v=Kqr(t),v===null&&(v="generic"),v==="complex64")return uh(rbr(t,0),n,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return uh(ebr(t,0),n,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=sh(t),tbr(f,n,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=sh(t),f.accessorProtocol?(ibr(f,r,e,t.length,i.endpoint),t):(abr(t,r,e,t.length,i.endpoint),t)}oh.exports=ubr});var lh=s((eTe,ch)=>{"use strict";var obr=D(),fh=Uy(),vbr=vh();obr(fh,"assign",vbr);ch.exports=fh});var dh=s((tTe,ph)=>{"use strict";var fbr=Nr().isPrimitive,cbr=Yr().isPrimitive,lbr=de().isPrimitive,pbr=qe(),dbr=V(),gbr={number:fbr,string:cbr,boolean:lbr};function mbr(r,e,t){var i,a,n,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],i=[],v=0;v<r.length;v++)if(o=r[v],n=e[v],u=gbr[n],u(o))i.push([[o]]),a.push([1,1]);else if(pbr(o))i.push(o),a.push([o.length,o[0].length]);else throw new TypeError(dbr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],n,n,String(o)));return[i,a]}ph.exports=mbr});var vs=s((iTe,gh)=>{"use strict";var ybr=dh();gh.exports=ybr});var yh=s((aTe,mh)=>{"use strict";var hbr=D0();function qbr(r){return hbr(1,r)}mh.exports=qbr});var qh=s((nTe,hh)=>{"use strict";var bbr=yh();hh.exports=bbr});var wh=s((sTe,bh)=>{"use strict";function wbr(r,e,t,i){var a,n,u,o,v,f,c,l,p;for(f=e[0],v=e[1],o=t[0],u=t[1],a=[],l=0;l<f;l++){for(n=[],p=i+o*l,c=0;c<v;c++)n.push(r[p]),p+=u;a.push(n)}return a}bh.exports=wbr});var fs=s((uTe,Eh)=>{"use strict";var Ebr=wh();Eh.exports=Ebr});var Sh=s((oTe,Nh)=>{"use strict";function Nbr(r,e,t){var i,a,n,u,o,v,f,c;if(i=e[1],a=e[0],!(i<=0||a<=0))for(f=r[0],c=r[1],u=0;u<a;u++)for(o=f[u],v=c[u],n=0;n<i;n++)v[n]=t(o[n])}Nh.exports=Nbr});var j2=s((vTe,Oh)=>{"use strict";var Sbr=Sh();Oh.exports=Sbr});var _h=s((fTe,Ah)=>{"use strict";var Obr=D0();function Abr(r){return Obr(0,r)}Ah.exports=Abr});var cs=s((cTe,Th)=>{"use strict";var _br=_h();Th.exports=_br});var Rh=s((lTe,Ih)=>{"use strict";var we=Qr(),Tbr=L1(),Ibr=F1(),Rbr=G0(),Lbr=On(),Pbr=D0(),Fbr=Ac(),jbr=H0(),Mbr=Sm(),Bbr=lh(),kbr=vs(),Cbr=qh(),Vbr=fs(),Ubr=j2(),Gbr=si(),Dbr=cs();function Hbr(r){return we(r,"bbinary2d",Tbr),we(r,"bternary2d",Ibr),we(r,"broadcastShapes",Rbr),we(r,"filled",Lbr),we(r,"filled2d",Pbr),we(r,"filled2dBy",Fbr),we(r,"flatten2d",jbr),we(r,"iterator2array",Mbr),we(r,"linspace",Bbr),we(r,"normalizeBroadcastArgs",kbr),we(r,"ones2d",Cbr),we(r,"strided2array2d",Vbr),we(r,"unary2d",Ubr),we(r,"zeros",Gbr),we(r,"zeros2d",Dbr),r}Ih.exports=Hbr});var Fh=s((pTe,Ph)=>{"use strict";var Lh=V();function zbr(r,e,t,i,a){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(Lh('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(a!=="closed"&&a!=="open")throw new TypeError(Lh('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),a))}return i==="closed"||i===void 0?a==="closed"||a===void 0?r>=e&&r<=t:r>=e&&r<t:a==="closed"||a===void 0?r>e&&r<=t:r>e&&r<t}Ph.exports=zbr});var Mh=s((dTe,jh)=>{"use strict";var Wbr=Fh();jh.exports=Wbr});var kh=s((gTe,Bh)=>{"use strict";var Xbr=Nr().isPrimitive,Jbr=Mh(),Ybr=V();function xbr(r,e,t,i,a,n){var u,o;if(!(Xbr(r)&&Jbr(r,e,t,i,a)))throw i==="closed"?u="[":u="(",a==="closed"?o="]":o=")",new TypeError(Ybr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",n,u,e,t,o,String(r)))}Bh.exports=xbr});var Vh=s((mTe,Ch)=>{"use strict";var Zbr=kh();Ch.exports=Zbr});var Gh=s((yTe,Uh)=>{"use strict";var $br=de().isPrimitive,Qbr=V();function Kbr(r,e){if(!$br(r))throw new TypeError(Qbr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Uh.exports=Kbr});var Hh=s((hTe,Dh)=>{"use strict";var rwr=Gh();Dh.exports=rwr});var Wh=s((qTe,zh)=>{"use strict";function ewr(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,e!==1&&i!==1&&i!==e||t!==1&&a!==1&&a!==t)return!1;return!0}zh.exports=ewr});var Jh=s((bTe,Xh)=>{"use strict";var twr=Wh();Xh.exports=twr});var xh=s((wTe,Yh)=>{"use strict";var iwr=V(),awr=Jh();function nwr(r,e,t){if(!awr(r,e))throw new TypeError(iwr("invalid argument. %s must be broadcast compatible.",t))}Yh.exports=nwr});var $h=s((ETe,Zh)=>{"use strict";var swr=xh();Zh.exports=swr});var Kh=s((NTe,Qh)=>{"use strict";function uwr(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,i!==1&&i!==e||a!==1&&a!==t)return!1;return!0}Qh.exports=uwr});var eq=s((STe,rq)=>{"use strict";var owr=Kh();rq.exports=owr});var iq=s((OTe,tq)=>{"use strict";var vwr=V(),fwr=eq();function cwr(r,e,t,i){if(!fwr(r,e))throw new TypeError(vwr("invalid argument. %s must be broadcast compatible with %s.",t,i))}tq.exports=cwr});var nq=s((ATe,aq)=>{"use strict";var lwr=iq();aq.exports=lwr});var uq=s((_Te,sq)=>{"use strict";function pwr(r,e,t){var i,a,n,u,o;for(i=r.length,a=t,n=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?n+=u*(r[o]-1):u<0&&(a+=u*(r[o]-1))}return[a,n]}sq.exports=pwr});var vq=s((TTe,oq)=>{"use strict";function dwr(r,e,t,i){var a,n,u,o,v;for(a=r.length,n=t,u=t,v=0;v<a;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(n+=o*(r[v]-1))}return i[0]=n,i[1]=u,i}oq.exports=dwr});var ls=s((ITe,cq)=>{"use strict";var gwr=D(),fq=uq(),mwr=vq();gwr(fq,"assign",mwr);cq.exports=fq});var pq=s((RTe,lq)=>{"use strict";var ywr=ls();function hwr(r,e,t,i){var a=ywr(e,t,i);return a[0]>=0&&a[1]<r}lq.exports=hwr});var M2=s((LTe,dq)=>{"use strict";var qwr=pq();dq.exports=qwr});var mq=s((PTe,gq)=>{"use strict";var bwr=M2();function wwr(r,e,t,i){if(e.length&&!bwr(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}gq.exports=wwr});var hq=s((FTe,yq)=>{"use strict";var Ewr=mq();yq.exports=Ewr});var bq=s((jTe,qq)=>{"use strict";var Nwr=V();function Swr(r,e){if(r===void 0)throw new Error(Nwr("invalid invocation. Must provide %s.",e))}qq.exports=Swr});var B2=s((MTe,wq)=>{"use strict";var Owr=bq();wq.exports=Owr});var Nq=s((BTe,Eq)=>{"use strict";var Awr=V();function _wr(r,e,t,i){if(!(r>e))throw new TypeError(Awr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Eq.exports=_wr});var Oq=s((kTe,Sq)=>{"use strict";var Twr=Nq();Sq.exports=Twr});var _q=s((CTe,Aq)=>{"use strict";var Iwr=V();function Rwr(r,e,t,i){if(!(r>=e))throw new TypeError(Iwr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Aq.exports=Rwr});var Iq=s((VTe,Tq)=>{"use strict";var Lwr=_q();Tq.exports=Lwr});var Lq=s((UTe,Rq)=>{"use strict";var Pwr=ye().isPrimitive,Fwr=V();function jwr(r,e){if(!Pwr(r))throw new TypeError(Fwr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}Rq.exports=jwr});var Fq=s((GTe,Pq)=>{"use strict";var Mwr=Lq();Pq.exports=Mwr});var Mq=s((DTe,jq)=>{"use strict";var Bwr=V();function kwr(r,e,t,i){if(!(r<e))throw new TypeError(Bwr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}jq.exports=kwr});var kq=s((HTe,Bq)=>{"use strict";var Cwr=Mq();Bq.exports=Cwr});var Vq=s((zTe,Cq)=>{"use strict";var Vwr=V();function Uwr(r,e,t,i){if(!(r<=e))throw new TypeError(Vwr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Cq.exports=Uwr});var Gq=s((WTe,Uq)=>{"use strict";var Gwr=Vq();Uq.exports=Gwr});var Hq=s((XTe,Dq)=>{"use strict";var Dwr=be().isPrimitive,Hwr=V();function zwr(r,e){if(!Dwr(r))throw new TypeError(Hwr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Dq.exports=zwr});var Wq=s((JTe,zq)=>{"use strict";var Wwr=Hq();zq.exports=Wwr});var k2=s((YTe,Xq)=>{"use strict";var Xwr=Nr().isPrimitive;function Jwr(r){return Xwr(r)&&r>=0}Xq.exports=Jwr});var C2=s((xTe,Jq)=>{"use strict";var Ywr=Nr().isObject;function xwr(r){return Ywr(r)&&r.valueOf()>=0}Jq.exports=xwr});var xq=s((ZTe,Yq)=>{"use strict";var Zwr=k2(),$wr=C2();function Qwr(r){return Zwr(r)||$wr(r)}Yq.exports=Qwr});var ps=s(($Te,$q)=>{"use strict";var Zq=D(),V2=xq(),Kwr=k2(),rEr=C2();Zq(V2,"isPrimitive",Kwr);Zq(V2,"isObject",rEr);$q.exports=V2});var Kq=s((QTe,Qq)=>{"use strict";var eEr=ps().isPrimitive,tEr=V();function iEr(r,e){if(!eEr(r))throw new TypeError(tEr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Qq.exports=iEr});var eb=s((KTe,rb)=>{"use strict";var aEr=Kq();rb.exports=aEr});var ib=s((rIe,tb)=>{"use strict";var nEr=Nr().isPrimitive,sEr=V();function uEr(r,e){if(!nEr(r))throw new TypeError(sEr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}tb.exports=uEr});var nb=s((eIe,ab)=>{"use strict";var oEr=ib();ab.exports=oEr});var ub=s((tIe,sb)=>{"use strict";var vEr=V();function fEr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(vEr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}sb.exports=fEr});var vb=s((iIe,ob)=>{"use strict";var cEr=ub();ob.exports=cEr});var U2=s((aIe,fb)=>{"use strict";var lEr=ye().isPrimitive;function pEr(r){return lEr(r)&&r>0}fb.exports=pEr});var G2=s((nIe,cb)=>{"use strict";var dEr=ye().isObject;function gEr(r){return dEr(r)&&r.valueOf()>0}cb.exports=gEr});var pb=s((sIe,lb)=>{"use strict";var mEr=U2(),yEr=G2();function hEr(r){return mEr(r)||yEr(r)}lb.exports=hEr});var nt=s((uIe,gb)=>{"use strict";var db=D(),D2=pb(),qEr=U2(),bEr=G2();db(D2,"isPrimitive",qEr);db(D2,"isObject",bEr);gb.exports=D2});var yb=s((oIe,mb)=>{"use strict";var wEr=nt().isPrimitive,EEr=V();function NEr(r,e){if(!wEr(r))throw new TypeError(EEr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}mb.exports=NEr});var H2=s((vIe,hb)=>{"use strict";var SEr=yb();hb.exports=SEr});var z2=s((fIe,qb)=>{"use strict";var OEr=Nr().isPrimitive;function AEr(r){return OEr(r)&&r>0}qb.exports=AEr});var W2=s((cIe,bb)=>{"use strict";var _Er=Nr().isObject;function TEr(r){return _Er(r)&&r.valueOf()>0}bb.exports=TEr});var Eb=s((lIe,wb)=>{"use strict";var IEr=z2(),REr=W2();function LEr(r){return IEr(r)||REr(r)}wb.exports=LEr});var Hr=s((pIe,Sb)=>{"use strict";var Nb=D(),X2=Eb(),PEr=z2(),FEr=W2();Nb(X2,"isPrimitive",PEr);Nb(X2,"isObject",FEr);Sb.exports=X2});var Ab=s((dIe,Ob)=>{"use strict";var jEr=Hr().isPrimitive,MEr=V();function BEr(r,e){if(!jEr(r))throw new TypeError(MEr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}Ob.exports=BEr});var Tb=s((gIe,_b)=>{"use strict";var kEr=Ab();_b.exports=kEr});var J2=s((mIe,Ib)=>{"use strict";var CEr=Nr().isPrimitive;function VEr(r){return CEr(r)&&r>=0&&r<=1}Ib.exports=VEr});var Y2=s((yIe,Rb)=>{"use strict";var UEr=Nr().isObject;function GEr(r){return UEr(r)&&r.valueOf()>=0&&r.valueOf()<=1}Rb.exports=GEr});var Pb=s((hIe,Lb)=>{"use strict";var DEr=J2(),HEr=Y2();function zEr(r){return DEr(r)||HEr(r)}Lb.exports=zEr});var Mn=s((qIe,jb)=>{"use strict";var Fb=D(),x2=Pb(),WEr=J2(),XEr=Y2();Fb(x2,"isPrimitive",WEr);Fb(x2,"isObject",XEr);jb.exports=x2});var Bb=s((bIe,Mb)=>{"use strict";var JEr=Mn().isPrimitive,YEr=V();function xEr(r,e){if(!JEr(r))throw new TypeError(YEr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}Mb.exports=xEr});var Cb=s((wIe,kb)=>{"use strict";var ZEr=Bb();kb.exports=ZEr});var Ub=s((EIe,Vb)=>{"use strict";var $Er=qe(),QEr=V();function KEr(r,e){if(!$Er(r))throw new TypeError(QEr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Vb.exports=KEr});var Db=s((NIe,Gb)=>{"use strict";var rNr=Ub();Gb.exports=rNr});var zb=s((SIe,Hb)=>{"use strict";function eNr(r){return r.length===1||r[0].length===1}Hb.exports=eNr});var Xb=s((OIe,Wb)=>{"use strict";var tNr=zb();Wb.exports=tNr});var Yb=s((AIe,Jb)=>{"use strict";var iNr=qe(),aNr=Xb();function nNr(r){return iNr(r)&&aNr(r)}Jb.exports=nNr});var Z2=s((_Ie,xb)=>{"use strict";var sNr=Yb();xb.exports=sNr});var $b=s((TIe,Zb)=>{"use strict";var uNr=V(),oNr=Z2();function vNr(r,e){if(!oNr(r))throw new TypeError(uNr("invalid argument. %s must consist of only a single row or a single column.",e))}Zb.exports=vNr});var Kb=s((IIe,Qb)=>{"use strict";var fNr=$b();Qb.exports=fNr});var ew=s((RIe,rw)=>{"use strict";function cNr(r){var e,t,i,a;for(e=r.length,t=r[0].length,a=1;a<arguments.length;a++)if(i=arguments[a],i.length!==e||i[0].length!==t)return!1;return!0}rw.exports=cNr});var iw=s((LIe,tw)=>{"use strict";var lNr=ew();tw.exports=lNr});var nw=s((PIe,aw)=>{"use strict";var pNr=V(),dNr=iw();function gNr(r,e,t){if(!dNr(r,e))throw new TypeError(pNr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}aw.exports=gNr});var uw=s((FIe,sw)=>{"use strict";var mNr=nw();sw.exports=mNr});var vw=s((jIe,ow)=>{"use strict";var yNr=Yr().isPrimitive,hNr=V();function qNr(r,e){if(!yNr(r))throw new TypeError(hNr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}ow.exports=qNr});var cw=s((MIe,fw)=>{"use strict";var bNr=vw();fw.exports=bNr});var pw=s((BIe,lw)=>{"use strict";var wNr=V(),ENr=be().isPrimitive;function NNr(r,e){var t;for(t=0;t<r.length;t++)if(!ENr(r[t]))throw new TypeError(wNr("invalid argument. %s must contain only nonnegative integers.",e))}lw.exports=NNr});var gw=s((kIe,dw)=>{"use strict";var SNr=pw();dw.exports=SNr});var yw=s((CIe,mw)=>{"use strict";var ONr=V(),ANr=ye().isPrimitive;function _Nr(r,e){var t;for(t=0;t<r.length;t++)if(!ANr(r[t]))throw new TypeError(ONr("invalid argument. %s must contain only integers.",e))}mw.exports=_Nr});var qw=s((VIe,hw)=>{"use strict";var TNr=yw();hw.exports=TNr});var ww=s((UIe,bw)=>{"use strict";var INr=V();function RNr(r){throw new Error(INr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}bw.exports=RNr});var Nw=s((GIe,Ew)=>{"use strict";var LNr=ww();Ew.exports=LNr});var Aw=s((DIe,Ow)=>{"use strict";var Sw=H2(),PNr=B2();function FNr(r,e,t){Sw(r,"Number of rows"),Sw(e,"Number of columns"),PNr(t,"a pseudorandom number generator seed")}Ow.exports=FNr});var Tw=s((HIe,_w)=>{"use strict";var jNr=Aw();_w.exports=jNr});var Rw=s((zIe,Iw)=>{"use strict";var MNr=Ne(),BNr=y2();function kNr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&MNr(r.length)&&r.length>=0&&r.length<=BNr}Iw.exports=kNr});var Pw=s((WIe,Lw)=>{"use strict";var CNr=Rw();Lw.exports=CNr});var jw=s((XIe,Fw)=>{"use strict";var VNr=Pw(),UNr=V();function GNr(r){if(typeof r!="function")throw new TypeError(UNr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!VNr(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}Fw.exports=GNr});var $2=s((JIe,Mw)=>{"use strict";var DNr=jw();Mw.exports=DNr});var Cw=s((YIe,kw)=>{"use strict";var Q2=ye(),Bw=D(),K2=$2(),HNr=K2(Q2.isPrimitive),zNr=K2(Q2.isObject),rv=K2(Q2);Bw(rv,"primitives",HNr);Bw(rv,"objects",zNr);kw.exports=rv});var Gw=s((xIe,Uw)=>{"use strict";var ev=be(),Vw=D(),tv=$2(),WNr=tv(ev.isPrimitive),XNr=tv(ev.isObject),iv=tv(ev);Vw(iv,"primitives",WNr);Vw(iv,"objects",XNr);Uw.exports=iv});var Hw=s((ZIe,Dw)=>{"use strict";var st=Qr(),JNr=qe(),YNr=ye().isPrimitive,xNr=Cw().primitives,ZNr=be().isPrimitive,$Nr=Gw().primitives,QNr=ps().isPrimitive,KNr=Nr().isPrimitive,rSr=nt().isPrimitive,eSr=Hr().isPrimitive,tSr=Yr().isPrimitive;function iSr(r){return st(r,"isArray",JNr),st(r,"isInteger",YNr),st(r,"isIntegerArray",xNr),st(r,"isNonNegativeInteger",ZNr),st(r,"isNonNegativeIntegerArray",$Nr),st(r,"isNonNegativeNumber",QNr),st(r,"isNumber",KNr),st(r,"isPositiveInteger",rSr),st(r,"isPositiveNumber",eSr),st(r,"isString",tSr),r}Dw.exports=iSr});var Ww=s(($Ie,zw)=>{"use strict";var zr=Qr(),aSr=Vh(),nSr=Hh(),sSr=$h(),uSr=nq(),oSr=hq(),vSr=B2(),fSr=Oq(),cSr=Iq(),lSr=Fq(),pSr=kq(),dSr=Gq(),gSr=Wq(),mSr=eb(),ySr=nb(),hSr=vb(),qSr=H2(),bSr=Tb(),wSr=Cb(),ESr=Db(),NSr=Kb(),SSr=uw(),OSr=cw(),ASr=gw(),_Sr=qw(),TSr=Nw(),ISr=Tw(),RSr=Hw();function LSr(r){return zr(r,"isBetween",aSr),zr(r,"isBoolean",nSr),zr(r,"isBroadcastCompatible",sSr),zr(r,"isBroadcastCompatibleWith",uSr),zr(r,"isBufferLengthCompatible",oSr),zr(r,"isDefined",vSr),zr(r,"isGreaterThan",fSr),zr(r,"isGreaterThanEqual",cSr),zr(r,"isInteger",lSr),zr(r,"isLessThan",pSr),zr(r,"isLessThanEqual",dSr),zr(r,"isNonNegativeInteger",gSr),zr(r,"isNonNegativeNumber",mSr),zr(r,"isNumber",ySr),zr(r,"isOneOf",hSr),zr(r,"isPositiveInteger",qSr),zr(r,"isPositiveNumber",bSr),zr(r,"isProbability",wSr),zr(r,"isRange",ESr),zr(r,"isRange1d",NSr),zr(r,"isSameShape",SSr),zr(r,"isString",OSr),zr(r,"isValidShape",ASr),zr(r,"isValidStrides",_Sr),zr(r,"unrecognizedOptionName",TSr),zr(r,"verifyCommonPRNGArgs",ISr),zr(r,"base",RSr({})),r}zw.exports=LSr});var Jw=s((QIe,Xw)=>{"use strict";var av=4;function PSr(r,e,t,i,a,n){var u,o,v,f;if(r<=0||e===0)return a;if(i===1&&n===1){if(v=r%av,v>0)for(f=0;f<v;f++)a[f]+=e*t[f];if(r<av)return a;for(f=v;f<r;f+=av)a[f]+=e*t[f],a[f+1]+=e*t[f+1],a[f+2]+=e*t[f+2],a[f+3]+=e*t[f+3];return a}for(i<0?u=(1-r)*i:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r;f++)a[o]+=e*t[u],u+=i,o+=n;return a}Xw.exports=PSr});var xw=s((KIe,Yw)=>{"use strict";var Bn=4;function FSr(r,e,t,i,a,n,u,o){var v,f,c,l;if(r<=0||e===0)return n;if(v=a,f=o,i===1&&u===1){if(c=r%Bn,c>0)for(l=0;l<c;l++)n[f]+=e*t[v],v+=i,f+=u;if(r<Bn)return n;for(l=c;l<r;l+=Bn)n[f]+=e*t[v],n[f+1]+=e*t[v+1],n[f+2]+=e*t[v+2],n[f+3]+=e*t[v+3],v+=Bn,f+=Bn;return n}for(l=0;l<r;l++)n[f]+=e*t[v],v+=i,f+=u;return n}Yw.exports=FSr});var nv=s((rRe,$w)=>{"use strict";var jSr=D(),Zw=Jw(),MSr=xw();jSr(Zw,"ndarray",MSr);$w.exports=Zw});var rE=s((eRe,Kw)=>{"use strict";var Qw=Qr(),BSr=nv().ndarray,kSr=nv().ndarray;function CSr(r){return Qw(r,"daxpy",BSr),Qw(r,"saxpy",kSr),r}Kw.exports=CSr});var tE=s((tRe,eE)=>{"use strict";var VSr=ta(),USr=re();function GSr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(USr(r)==="[object Error]")return!0;r=VSr(r)}return!1}eE.exports=GSr});var aE=s((iRe,iE)=>{"use strict";var DSr=tE();iE.exports=DSr});var sv=s((aRe,nE)=>{"use strict";function HSr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}nE.exports=HSr});var uE=s((nRe,sE)=>{"use strict";var zSr=sv(),WSr=zSr();sE.exports=WSr});var fE=s((sRe,vE)=>{"use strict";var XSr=D(),oE=sv(),JSr=uE();XSr(oE,"REGEXP",JSr);vE.exports=oE});var lE=s((uRe,cE)=>{"use strict";var YSr=Yr().isPrimitive,xSr=fE(),ZSr=V();function $Sr(r){if(!YSr(r))throw new TypeError(ZSr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=xSr().exec(r),r?new RegExp(r[1],r[2]):null}cE.exports=$Sr});var dE=s((oRe,pE)=>{"use strict";var QSr=lE();pE.exports=QSr});var uv=s((vRe,gE)=>{"use strict";var KSr=Nr().isPrimitive,rOr=z();function eOr(r){return KSr(r)&&rOr(r)}gE.exports=eOr});var ov=s((fRe,mE)=>{"use strict";var tOr=Nr().isObject,iOr=z();function aOr(r){return tOr(r)&&iOr(r.valueOf())}mE.exports=aOr});var hE=s((cRe,yE)=>{"use strict";var nOr=uv(),sOr=ov();function uOr(r){return nOr(r)||sOr(r)}yE.exports=uOr});var oe=s((lRe,bE)=>{"use strict";var qE=D(),vv=hE(),oOr=uv(),vOr=ov();qE(vv,"isPrimitive",oOr);qE(vv,"isObject",vOr);bE.exports=vv});var SE=s((pRe,NE)=>{"use strict";var wE=oe(),fOr=Ve(),cOr=Yr().isPrimitive,lOr=ye().isPrimitive,EE=V();function pOr(r,e,t){var i,a;if(!fOr(r)&&!cOr(r))throw new TypeError(EE("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!lOr(t))throw new TypeError(EE("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;a=t}else a=i+t,a<0&&(a=0)}else a=0;if(wE(e)){for(;a<i;a++)if(wE(r[a]))return a}else for(;a<i;a++)if(r[a]===e)return a;return-1}NE.exports=pOr});var ds=s((dRe,OE)=>{"use strict";var dOr=SE();OE.exports=dOr});var gs=s((gRe,AE)=>{"use strict";function gOr(r){return Object.keys(Object(r))}AE.exports=gOr});var TE=s((mRe,_E)=>{"use strict";var mOr=gs();function yOr(){return(mOr(arguments)||"").length!==2}function hOr(){return yOr(1,2)}_E.exports=hOr});var RE=s((yRe,IE)=>{"use strict";var qOr=typeof Object.keys<"u";IE.exports=qOr});var fv=s((hRe,LE)=>{"use strict";var bOr=re();function wOr(r){return bOr(r)==="[object Arguments]"}LE.exports=wOr});var jE=s((qRe,FE)=>{"use strict";var EOr=fv(),PE;function NOr(){return EOr(arguments)}PE=NOr();FE.exports=PE});var cv=s((bRe,ME)=>{"use strict";var SOr=Object.prototype.propertyIsEnumerable;ME.exports=SOr});var CE=s((wRe,kE)=>{"use strict";var OOr=cv(),BE;function AOr(){return!OOr.call("beep","0")}BE=AOr();kE.exports=BE});var UE=s((ERe,VE)=>{"use strict";var _Or=Yr(),TOr=oe().isPrimitive,IOr=ye().isPrimitive,ROr=cv(),LOr=CE();function POr(r,e){var t;return r==null?!1:(t=ROr.call(r,e),!t&&LOr&&_Or(r)?(e=+e,!TOr(e)&&IOr(e)&&e>=0&&e<r.length):t)}VE.exports=POr});var kn=s((NRe,GE)=>{"use strict";var FOr=UE();GE.exports=FOr});var HE=s((SRe,DE)=>{"use strict";var jOr=vr(),MOr=kn(),BOr=qe(),kOr=Ne(),COr=ya();function VOr(r){return r!==null&&typeof r=="object"&&!BOr(r)&&typeof r.length=="number"&&kOr(r.length)&&r.length>=0&&r.length<=COr&&jOr(r,"callee")&&!MOr(r,"callee")}DE.exports=VOr});var pv=s((ORe,zE)=>{"use strict";var UOr=jE(),GOr=fv(),DOr=HE(),lv;UOr?lv=GOr:lv=DOr;zE.exports=lv});var JE=s((ARe,XE)=>{"use strict";var HOr=pv(),WE=gs(),zOr=Array.prototype.slice;function WOr(r){return HOr(r)?WE(zOr.call(r)):WE(r)}XE.exports=WOr});var xE=s((_Re,YE)=>{"use strict";function XOr(){}YE.exports=XOr});var Lr=s((TRe,ZE)=>{"use strict";var JOr=xE();ZE.exports=JOr});var QE=s((IRe,$E)=>{"use strict";var YOr=kn(),xOr=Lr(),ZOr=YOr(xOr,"prototype");$E.exports=ZOr});var rN=s((RRe,KE)=>{"use strict";var $Or=kn(),QOr={toString:null},KOr=!$Or(QOr,"toString");KE.exports=KOr});var dv=s((LRe,eN)=>{"use strict";function rAr(r){return r.constructor&&r.constructor.prototype===r}eN.exports=rAr});var tN=s((PRe,eAr)=>{eAr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var aN=s((FRe,iN)=>{"use strict";var tAr=typeof window>"u"?void 0:window;iN.exports=tAr});var oN=s((jRe,uN)=>{"use strict";var iAr=vr(),aAr=ds(),nN=z0(),nAr=dv(),sAr=tN(),Ca=aN(),sN;function uAr(){var r;if(nN(Ca)==="undefined")return!1;for(r in Ca)try{aAr(sAr,r)===-1&&iAr(Ca,r)&&Ca[r]!==null&&nN(Ca[r])==="object"&&nAr(Ca[r])}catch{return!0}return!1}sN=uAr();uN.exports=sN});var fN=s((MRe,vN)=>{"use strict";var oAr=typeof window<"u";vN.exports=oAr});var pN=s((BRe,lN)=>{"use strict";var vAr=oN(),cN=dv(),fAr=fN();function cAr(r){if(fAr===!1&&!vAr)return cN(r);try{return cN(r)}catch{return!1}}lN.exports=cAr});var dN=s((kRe,lAr)=>{lAr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var yN=s((CRe,mN)=>{"use strict";var pAr=J1(),gv=vr(),dAr=pv(),gAr=QE(),mAr=rN(),yAr=pN(),gN=dN();function hAr(r){var e,t,i,a,n,u,o;if(a=[],dAr(r)){for(o=0;o<r.length;o++)a.push(o.toString());return a}if(typeof r=="string"){if(r.length>0&&!gv(r,"0"))for(o=0;o<r.length;o++)a.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!pAr(r))return a;t=gAr&&i}for(n in r)!(t&&n==="prototype")&&gv(r,n)&&a.push(String(n));if(mAr)for(e=yAr(r),o=0;o<gN.length;o++)u=gN[o],!(e&&u==="constructor")&&gv(r,u)&&a.push(String(u));return a}mN.exports=hAr});var qN=s((VRe,hN)=>{"use strict";var qAr=TE(),bAr=RE(),wAr=gs(),EAr=JE(),NAr=yN(),ms;bAr?qAr()?ms=EAr:ms=wAr:ms=NAr;hN.exports=ms});var Va=s((URe,bN)=>{"use strict";var SAr=qN();bN.exports=SAr});var EN=s((GRe,wN)=>{"use strict";var OAr=typeof Object.getOwnPropertyNames<"u";wN.exports=OAr});var ON=s((DRe,SN)=>{"use strict";var NN=Ba(),AAr=NN.getOwnPropertyNames;function _Ar(r){return AAr(NN(r))}SN.exports=_Ar});var _N=s((HRe,AN)=>{"use strict";var TAr=Ba(),IAr=Va();function RAr(r){return IAr(TAr(r))}AN.exports=RAr});var IN=s((zRe,TN)=>{"use strict";var LAr=EN(),PAr=ON(),FAr=_N(),mv;LAr?mv=PAr:mv=FAr;TN.exports=mv});var LN=s((WRe,RN)=>{"use strict";var jAr=typeof Object.getOwnPropertyDescriptor<"u";RN.exports=jAr});var FN=s((XRe,PN)=>{"use strict";var MAr=Object.getOwnPropertyDescriptor;function BAr(r,e){var t;return r==null?null:(t=MAr(r,e),t===void 0?null:t)}PN.exports=BAr});var MN=s((JRe,jN)=>{"use strict";var kAr=vr();function CAr(r,e){return kAr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}jN.exports=CAr});var kN=s((YRe,BN)=>{"use strict";var VAr=LN(),UAr=FN(),GAr=MN(),yv;VAr?yv=UAr:yv=GAr;BN.exports=yv});var VN=s((xRe,CN)=>{"use strict";var DAr=typeof Buffer=="function"?Buffer:null;CN.exports=DAr});var GN=s((ZRe,UN)=>{"use strict";var HAr=Yi(),ys=VN();function zAr(){var r,e;if(typeof ys!="function")return!1;try{typeof ys.from=="function"?e=ys.from([1,2,3,4]):e=new ys([1,2,3,4]),r=HAr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}UN.exports=zAr});var HN=s(($Re,DN)=>{"use strict";var WAr=GN();DN.exports=WAr});var XN=s(hs=>{"use strict";hs.byteLength=JAr;hs.toByteArray=xAr;hs.fromByteArray=QAr;var ut=[],ze=[],XAr=typeof Uint8Array<"u"?Uint8Array:Array,hv="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ia=0,zN=hv.length;ia<zN;++ia)ut[ia]=hv[ia],ze[hv.charCodeAt(ia)]=ia;var ia,zN;ze["-".charCodeAt(0)]=62;ze["_".charCodeAt(0)]=63;function WN(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function JAr(r){var e=WN(r),t=e[0],i=e[1];return(t+i)*3/4-i}function YAr(r,e,t){return(e+t)*3/4-t}function xAr(r){var e,t=WN(r),i=t[0],a=t[1],n=new XAr(YAr(r,i,a)),u=0,o=a>0?i-4:i,v;for(v=0;v<o;v+=4)e=ze[r.charCodeAt(v)]<<18|ze[r.charCodeAt(v+1)]<<12|ze[r.charCodeAt(v+2)]<<6|ze[r.charCodeAt(v+3)],n[u++]=e>>16&255,n[u++]=e>>8&255,n[u++]=e&255;return a===2&&(e=ze[r.charCodeAt(v)]<<2|ze[r.charCodeAt(v+1)]>>4,n[u++]=e&255),a===1&&(e=ze[r.charCodeAt(v)]<<10|ze[r.charCodeAt(v+1)]<<4|ze[r.charCodeAt(v+2)]>>2,n[u++]=e>>8&255,n[u++]=e&255),n}function ZAr(r){return ut[r>>18&63]+ut[r>>12&63]+ut[r>>6&63]+ut[r&63]}function $Ar(r,e,t){for(var i,a=[],n=e;n<t;n+=3)i=(r[n]<<16&16711680)+(r[n+1]<<8&65280)+(r[n+2]&255),a.push(ZAr(i));return a.join("")}function QAr(r){for(var e,t=r.length,i=t%3,a=[],n=16383,u=0,o=t-i;u<o;u+=n)a.push($Ar(r,u,u+n>o?o:u+n));return i===1?(e=r[t-1],a.push(ut[e>>2]+ut[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],a.push(ut[e>>10]+ut[e>>4&63]+ut[e<<2&63]+"=")),a.join("")}});var JN=s(qv=>{qv.read=function(r,e,t,i,a){var n,u,o=a*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?a-1:0,p=t?-1:1,m=r[e+l];for(l+=p,n=m&(1<<-c)-1,m>>=-c,c+=o;c>0;n=n*256+r[e+l],l+=p,c-=8);for(u=n&(1<<-c)-1,n>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(n===0)n=1-f;else{if(n===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),n=n-f}return(m?-1:1)*u*Math.pow(2,n-i)};qv.write=function(r,e,t,i,a,n){var u,o,v,f=n*8-a-1,c=(1<<f)-1,l=c>>1,p=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:n-1,y=i?1:-1,g=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,a),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,a),u=0));a>=8;r[t+m]=o&255,m+=y,o/=256,a-=8);for(u=u<<a|o,f+=a;f>0;r[t+m]=u&255,m+=y,u/=256,f-=8);r[t+m-y]|=g*128}});var fS=s(Ha=>{"use strict";var bv=XN(),Ga=JN(),YN=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ha.Buffer=H;Ha.SlowBuffer=a_r;Ha.INSPECT_MAX_BYTES=50;var qs=2147483647;Ha.kMaxLength=qs;H.TYPED_ARRAY_SUPPORT=KAr();!H.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function KAr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(H.prototype,"parent",{enumerable:!0,get:function(){if(!!H.isBuffer(this))return this.buffer}});Object.defineProperty(H.prototype,"offset",{enumerable:!0,get:function(){if(!!H.isBuffer(this))return this.byteOffset}});function wt(r){if(r>qs)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,H.prototype),e}function H(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Sv(r)}return QN(r,e,t)}H.poolSize=8192;function QN(r,e,t){if(typeof r=="string")return e_r(r,e);if(ArrayBuffer.isView(r))return t_r(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ot(r,ArrayBuffer)||r&&ot(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ot(r,SharedArrayBuffer)||r&&ot(r.buffer,SharedArrayBuffer)))return Ev(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return H.from(i,e,t);let a=i_r(r);if(a)return a;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return H.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}H.from=function(r,e,t){return QN(r,e,t)};Object.setPrototypeOf(H.prototype,Uint8Array.prototype);Object.setPrototypeOf(H,Uint8Array);function KN(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function r_r(r,e,t){return KN(r),r<=0?wt(r):e!==void 0?typeof t=="string"?wt(r).fill(e,t):wt(r).fill(e):wt(r)}H.alloc=function(r,e,t){return r_r(r,e,t)};function Sv(r){return KN(r),wt(r<0?0:Ov(r)|0)}H.allocUnsafe=function(r){return Sv(r)};H.allocUnsafeSlow=function(r){return Sv(r)};function e_r(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!H.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=rS(r,e)|0,i=wt(t),a=i.write(r,e);return a!==t&&(i=i.slice(0,a)),i}function wv(r){let e=r.length<0?0:Ov(r.length)|0,t=wt(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function t_r(r){if(ot(r,Uint8Array)){let e=new Uint8Array(r);return Ev(e.buffer,e.byteOffset,e.byteLength)}return wv(r)}function Ev(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,H.prototype),i}function i_r(r){if(H.isBuffer(r)){let e=Ov(r.length)|0,t=wt(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||_v(r.length)?wt(0):wv(r);if(r.type==="Buffer"&&Array.isArray(r.data))return wv(r.data)}function Ov(r){if(r>=qs)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+qs.toString(16)+" bytes");return r|0}function a_r(r){return+r!=r&&(r=0),H.alloc(+r)}H.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==H.prototype};H.compare=function(e,t){if(ot(e,Uint8Array)&&(e=H.from(e,e.offset,e.byteLength)),ot(t,Uint8Array)&&(t=H.from(t,t.offset,t.byteLength)),!H.isBuffer(e)||!H.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,a=t.length;for(let n=0,u=Math.min(i,a);n<u;++n)if(e[n]!==t[n]){i=e[n],a=t[n];break}return i<a?-1:a<i?1:0};H.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};H.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return H.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let a=H.allocUnsafe(t),n=0;for(i=0;i<e.length;++i){let u=e[i];if(ot(u,Uint8Array))n+u.length>a.length?(H.isBuffer(u)||(u=H.from(u)),u.copy(a,n)):Uint8Array.prototype.set.call(a,u,n);else if(H.isBuffer(u))u.copy(a,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=u.length}return a};function rS(r,e){if(H.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ot(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let a=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Nv(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return vS(r).length;default:if(a)return i?-1:Nv(r).length;e=(""+e).toLowerCase(),a=!0}}H.byteLength=rS;function n_r(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return g_r(this,e,t);case"utf8":case"utf-8":return tS(this,e,t);case"ascii":return p_r(this,e,t);case"latin1":case"binary":return d_r(this,e,t);case"base64":return c_r(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return m_r(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}H.prototype._isBuffer=!0;function aa(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}H.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)aa(this,t,t+1);return this};H.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)aa(this,t,t+3),aa(this,t+1,t+2);return this};H.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)aa(this,t,t+7),aa(this,t+1,t+6),aa(this,t+2,t+5),aa(this,t+3,t+4);return this};H.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?tS(this,0,e):n_r.apply(this,arguments)};H.prototype.toLocaleString=H.prototype.toString;H.prototype.equals=function(e){if(!H.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:H.compare(this,e)===0};H.prototype.inspect=function(){let e="",t=Ha.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};YN&&(H.prototype[YN]=H.prototype.inspect);H.prototype.compare=function(e,t,i,a,n){if(ot(e,Uint8Array)&&(e=H.from(e,e.offset,e.byteLength)),!H.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),a===void 0&&(a=0),n===void 0&&(n=this.length),t<0||i>e.length||a<0||n>this.length)throw new RangeError("out of range index");if(a>=n&&t>=i)return 0;if(a>=n)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,a>>>=0,n>>>=0,this===e)return 0;let u=n-a,o=i-t,v=Math.min(u,o),f=this.slice(a,n),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function eS(r,e,t,i,a){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,_v(t)&&(t=a?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(a)return-1;t=r.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof e=="string"&&(e=H.from(e,i)),H.isBuffer(e))return e.length===0?-1:xN(r,e,t,i,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):xN(r,[e],t,i,a);throw new TypeError("val must be string, number or Buffer")}function xN(r,e,t,i,a){let n=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;n=2,u/=2,o/=2,t/=2}function v(c,l){return n===1?c[l]:c.readUInt16BE(l*n)}let f;if(a){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*n}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}H.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};H.prototype.indexOf=function(e,t,i){return eS(this,e,t,i,!0)};H.prototype.lastIndexOf=function(e,t,i){return eS(this,e,t,i,!1)};function s_r(r,e,t,i){t=Number(t)||0;let a=r.length-t;i?(i=Number(i),i>a&&(i=a)):i=a;let n=e.length;i>n/2&&(i=n/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(_v(o))return u;r[t+u]=o}return u}function u_r(r,e,t,i){return bs(Nv(e,r.length-t),r,t,i)}function o_r(r,e,t,i){return bs(b_r(e),r,t,i)}function v_r(r,e,t,i){return bs(vS(e),r,t,i)}function f_r(r,e,t,i){return bs(w_r(e,r.length-t),r,t,i)}H.prototype.write=function(e,t,i,a){if(t===void 0)a="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")a=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,a===void 0&&(a="utf8")):(a=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let n=this.length-t;if((i===void 0||i>n)&&(i=n),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");let u=!1;for(;;)switch(a){case"hex":return s_r(this,e,t,i);case"utf8":case"utf-8":return u_r(this,e,t,i);case"ascii":case"latin1":case"binary":return o_r(this,e,t,i);case"base64":return v_r(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f_r(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),u=!0}};H.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function c_r(r,e,t){return e===0&&t===r.length?bv.fromByteArray(r):bv.fromByteArray(r.slice(e,t))}function tS(r,e,t){t=Math.min(r.length,t);let i=[],a=e;for(;a<t;){let n=r[a],u=null,o=n>239?4:n>223?3:n>191?2:1;if(a+o<=t){let v,f,c,l;switch(o){case 1:n<128&&(u=n);break;case 2:v=r[a+1],(v&192)===128&&(l=(n&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[a+1],f=r[a+2],(v&192)===128&&(f&192)===128&&(l=(n&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[a+1],f=r[a+2],c=r[a+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(n&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),a+=o}return l_r(i)}var ZN=4096;function l_r(r){let e=r.length;if(e<=ZN)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=ZN));return t}function p_r(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]&127);return i}function d_r(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]);return i}function g_r(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let a="";for(let n=e;n<t;++n)a+=E_r[r[n]];return a}function m_r(r,e,t){let i=r.slice(e,t),a="";for(let n=0;n<i.length-1;n+=2)a+=String.fromCharCode(i[n]+i[n+1]*256);return a}H.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let a=this.subarray(e,t);return Object.setPrototypeOf(a,H.prototype),a};function ve(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}H.prototype.readUintLE=H.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return a};H.prototype.readUintBE=H.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e+--t],n=1;for(;t>0&&(n*=256);)a+=this[e+--t]*n;return a};H.prototype.readUint8=H.prototype.readUInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]};H.prototype.readUint16LE=H.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]|this[e+1]<<8};H.prototype.readUint16BE=H.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]<<8|this[e+1]};H.prototype.readUint32LE=H.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};H.prototype.readUint32BE=H.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};H.prototype.readBigUInt64LE=fi(function(e){e=e>>>0,Da(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Cn(e,this.length-8);let a=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,n=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(a)+(BigInt(n)<<BigInt(32))});H.prototype.readBigUInt64BE=fi(function(e){e=e>>>0,Da(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Cn(e,this.length-8);let a=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],n=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(a)<<BigInt(32))+BigInt(n)});H.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return n*=128,a>=n&&(a-=Math.pow(2,8*t)),a};H.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=t,n=1,u=this[e+--a];for(;a>0&&(n*=256);)u+=this[e+--a]*n;return n*=128,u>=n&&(u-=Math.pow(2,8*t)),u};H.prototype.readInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};H.prototype.readInt16LE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};H.prototype.readInt16BE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};H.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};H.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};H.prototype.readBigInt64LE=fi(function(e){e=e>>>0,Da(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Cn(e,this.length-8);let a=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(a)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});H.prototype.readBigInt64BE=fi(function(e){e=e>>>0,Da(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Cn(e,this.length-8);let a=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(a)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});H.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Ga.read(this,e,!0,23,4)};H.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Ga.read(this,e,!1,23,4)};H.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Ga.read(this,e,!0,52,8)};H.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Ga.read(this,e,!1,52,8)};function Ae(r,e,t,i,a,n){if(!H.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<n)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}H.prototype.writeUintLE=H.prototype.writeUIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;Ae(this,e,t,i,o,0)}let n=1,u=0;for(this[t]=e&255;++u<i&&(n*=256);)this[t+u]=e/n&255;return t+i};H.prototype.writeUintBE=H.prototype.writeUIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;Ae(this,e,t,i,o,0)}let n=i-1,u=1;for(this[t+n]=e&255;--n>=0&&(u*=256);)this[t+n]=e/u&255;return t+i};H.prototype.writeUint8=H.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,1,255,0),this[t]=e&255,t+1};H.prototype.writeUint16LE=H.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};H.prototype.writeUint16BE=H.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};H.prototype.writeUint32LE=H.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};H.prototype.writeUint32BE=H.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function iS(r,e,t,i,a){oS(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function aS(r,e,t,i,a){oS(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t+7]=n,n=n>>8,r[t+6]=n,n=n>>8,r[t+5]=n,n=n>>8,r[t+4]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}H.prototype.writeBigUInt64LE=fi(function(e,t=0){return iS(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});H.prototype.writeBigUInt64BE=fi(function(e,t=0){return aS(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});H.prototype.writeIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);Ae(this,e,t,i,v-1,-v)}let n=0,u=1,o=0;for(this[t]=e&255;++n<i&&(u*=256);)e<0&&o===0&&this[t+n-1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};H.prototype.writeIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);Ae(this,e,t,i,v-1,-v)}let n=i-1,u=1,o=0;for(this[t+n]=e&255;--n>=0&&(u*=256);)e<0&&o===0&&this[t+n+1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};H.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};H.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};H.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};H.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};H.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};H.prototype.writeBigInt64LE=fi(function(e,t=0){return iS(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});H.prototype.writeBigInt64BE=fi(function(e,t=0){return aS(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function nS(r,e,t,i,a,n){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function sS(r,e,t,i,a){return e=+e,t=t>>>0,a||nS(r,e,t,4,34028234663852886e22,-34028234663852886e22),Ga.write(r,e,t,i,23,4),t+4}H.prototype.writeFloatLE=function(e,t,i){return sS(this,e,t,!0,i)};H.prototype.writeFloatBE=function(e,t,i){return sS(this,e,t,!1,i)};function uS(r,e,t,i,a){return e=+e,t=t>>>0,a||nS(r,e,t,8,17976931348623157e292,-17976931348623157e292),Ga.write(r,e,t,i,52,8),t+8}H.prototype.writeDoubleLE=function(e,t,i){return uS(this,e,t,!0,i)};H.prototype.writeDoubleBE=function(e,t,i){return uS(this,e,t,!1,i)};H.prototype.copy=function(e,t,i,a){if(!H.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!a&&a!==0&&(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<i&&(a=i),a===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-i&&(a=e.length-t+i);let n=a-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,a):Uint8Array.prototype.set.call(e,this.subarray(i,a),t),n};H.prototype.fill=function(e,t,i,a){if(typeof e=="string"){if(typeof t=="string"?(a=t,t=0,i=this.length):typeof i=="string"&&(a=i,i=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!H.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){let u=e.charCodeAt(0);(a==="utf8"&&u<128||a==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let n;if(typeof e=="number")for(n=t;n<i;++n)this[n]=e;else{let u=H.isBuffer(e)?e:H.from(e,a),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<i-t;++n)this[n+t]=u[n%o]}return this};var Ua={};function Av(r,e,t){Ua[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(a){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:a,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}Av("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);Av("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);Av("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,a=t;return Number.isInteger(t)&&Math.abs(t)>2**32?a=$N(String(t)):typeof t=="bigint"&&(a=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(a=$N(a)),a+="n"),i+=` It must be ${e}. Received ${a}`,i},RangeError);function $N(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function y_r(r,e,t){Da(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Cn(e,r.length-(t+1))}function oS(r,e,t,i,a,n){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw n>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(n+1)*8}${u}`:o=`>= -(2${u} ** ${(n+1)*8-1}${u}) and < 2 ** ${(n+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Ua.ERR_OUT_OF_RANGE("value",o,r)}y_r(i,a,n)}function Da(r,e){if(typeof r!="number")throw new Ua.ERR_INVALID_ARG_TYPE(e,"number",r)}function Cn(r,e,t){throw Math.floor(r)!==r?(Da(r,t),new Ua.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ua.ERR_BUFFER_OUT_OF_BOUNDS:new Ua.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var h_r=/[^+/0-9A-Za-z-_]/g;function q_r(r){if(r=r.split("=")[0],r=r.trim().replace(h_r,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Nv(r,e){e=e||1/0;let t,i=r.length,a=null,n=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!a){if(t>56319){(e-=3)>-1&&n.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&n.push(239,191,189);continue}a=t;continue}if(t<56320){(e-=3)>-1&&n.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(e-=3)>-1&&n.push(239,191,189);if(a=null,t<128){if((e-=1)<0)break;n.push(t)}else if(t<2048){if((e-=2)<0)break;n.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;n.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;n.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return n}function b_r(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function w_r(r,e){let t,i,a,n=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,a=t%256,n.push(a),n.push(i);return n}function vS(r){return bv.toByteArray(q_r(r))}function bs(r,e,t,i){let a;for(a=0;a<i&&!(a+t>=e.length||a>=r.length);++a)e[a+t]=r[a];return a}function ot(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function _v(r){return r!==r}var E_r=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let a=0;a<16;++a)e[i+a]=r[t]+r[a]}return e}();function fi(r){return typeof BigInt>"u"?N_r:r}function N_r(){throw new Error("BigInt not supported")}});var lS=s((tLe,cS)=>{"use strict";var S_r=fS().Buffer;cS.exports=S_r});var dS=s((iLe,pS)=>{"use strict";function O_r(){throw new Error("not implemented")}pS.exports=O_r});var ci=s((aLe,gS)=>{"use strict";var A_r=HN(),__r=lS(),T_r=dS(),Tv;A_r()?Tv=__r:Tv=T_r;gS.exports=Tv});var yS=s((nLe,mS)=>{"use strict";var I_r=qr(),R_r=ci(),L_r=I_r(R_r.from);mS.exports=L_r});var qS=s((sLe,hS)=>{"use strict";var P_r=Yi(),F_r=V(),j_r=ci();function M_r(r){if(!P_r(r))throw new TypeError(F_r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return j_r.from(r)}hS.exports=M_r});var wS=s((uLe,bS)=>{"use strict";var B_r=Yi(),k_r=V(),C_r=ci();function V_r(r){if(!B_r(r))throw new TypeError(k_r("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new C_r(r)}bS.exports=V_r});var NS=s((oLe,ES)=>{"use strict";var U_r=yS(),G_r=qS(),D_r=wS(),Iv;U_r?Iv=G_r:Iv=D_r;ES.exports=Iv});var AS=s((vLe,OS)=>{"use strict";var H_r=wa(),z_r=tt(),W_r=ba(),X_r=qa(),J_r=xi(),Y_r=ui(),x_r=me(),Z_r=et(),$_r=ge(),SS;function Q_r(r){return new H_r(r)}function K_r(r){return new z_r(r)}function rTr(r){return new W_r(r)}function eTr(r){return new X_r(r)}function tTr(r){return new J_r(r)}function iTr(r){return new Y_r(r)}function aTr(r){return new x_r(r)}function nTr(r){return new Z_r(r)}function sTr(r){return new $_r(r)}function uTr(){var r={int8array:Q_r,uint8array:K_r,uint8clampedarray:rTr,int16array:eTr,uint16array:tTr,int32array:iTr,uint32array:aTr,float32array:nTr,float64array:sTr};return r}SS=uTr();OS.exports=SS});var LS=s((fLe,RS)=>{"use strict";var ws=vr(),Rv=qe(),_S=Yi(),oTr=aE(),TS=z0(),vTr=dE(),fTr=ds(),IS=Va(),cTr=IN(),Vn=kN(),lTr=ta(),Un=ni(),pTr=NS(),dTr=AS();function gTr(r){var e,t,i,a,n,u,o,v;for(e=[],a=[],o=Object.create(lTr(r)),e.push(r),a.push(o),t=cTr(r),v=0;v<t.length;v++)i=t[v],n=Vn(r,i),ws(n,"value")&&(u=Rv(r[i])?[]:{},n.value=na(r[i],u,e,a,-1)),Un(o,i,n);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function mTr(r){var e=[],t=[],i,a,n,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=IS(r),v=0;v<i.length;v++)u=i[v],a=Vn(r,u),ws(a,"value")&&(n=Rv(r[u])?[]:{},a.value=na(r[u],n,e,t,-1)),Un(o,u,a);return o}function na(r,e,t,i,a){var n,u,o,v,f,c,l,p,m,y;if(a-=1,typeof r!="object"||r===null)return r;if(_S(r))return pTr(r);if(oTr(r))return mTr(r);if(o=TS(r),o==="date")return new Date(+r);if(o==="regexp")return vTr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=dTr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?gTr(r):{};if(u=IS(r),a>0)for(n=o,y=0;y<u.length;y++){if(c=u[y],p=r[c],o=TS(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||_S(p)){n==="object"?(v=Vn(r,c),ws(v,"value")&&(v.value=na(p)),Un(e,c,v)):e[c]=na(p);continue}if(m=fTr(t,p),m!==-1){e[c]=i[m];continue}l=Rv(p)?new Array(p.length):{},t.push(p),i.push(l),n==="array"?e[c]=na(p,l,t,i,a):(v=Vn(r,c),ws(v,"value")&&(v.value=na(p,l,t,i,a)),Un(e,c,v))}else if(o==="array")for(y=0;y<u.length;y++)c=u[y],e[c]=r[c];else for(y=0;y<u.length;y++)c=u[y],v=Vn(r,c),Un(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}RS.exports=na});var FS=s((cLe,PS)=>{"use strict";var yTr=qe(),hTr=be().isPrimitive,qTr=V(),bTr=pr(),wTr=LS();function ETr(r,e){var t;if(arguments.length>1){if(!hTr(e))throw new TypeError(qTr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=bTr;return t=yTr(r)?new Array(r.length):{},wTr(r,t,[r],[t],e)}PS.exports=ETr});var Gn=s((lLe,jS)=>{"use strict";var NTr=FS();jS.exports=NTr});var MS=s((pLe,STr)=>{STr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var kS=s((dLe,BS)=>{"use strict";var OTr=Gn(),ATr=MS();function _Tr(){return OTr(ATr)}BS.exports=_Tr});var CS=s((gLe,TTr)=>{TTr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var US=s((mLe,VS)=>{"use strict";var ITr=Gn(),RTr=CS();function LTr(){return ITr(RTr)}VS.exports=LTr});var GS=s((yLe,PTr)=>{PTr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var HS=s((hLe,DS)=>{"use strict";var FTr=Gn(),jTr=GS();function MTr(){return FTr(jTr)}DS.exports=MTr});var zS=s((qLe,BTr)=>{BTr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var XS=s((bLe,WS)=>{"use strict";var kTr=zS();function CTr(){return kTr.slice()}WS.exports=CTr});var JS=s((wLe,VTr)=>{VTr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var xS=s((ELe,YS)=>{"use strict";var UTr=Gn(),GTr=JS();function DTr(){return UTr(GTr)}YS.exports=DTr});var $S=s((NLe,ZS)=>{"use strict";var Dn=Qr(),HTr=kS(),zTr=US(),WTr=HS(),XTr=XS(),JTr=xS();function YTr(r){return Dn(r,"AFINN_111",HTr),Dn(r,"AFINN_96",zTr),Dn(r,"ANSCOMBES_QUARTET",WTr),Dn(r,"HERNDON_VENUS_SEMIDIAMETERS",XTr),Dn(r,"NIGHTINGALES_ROSE",JTr),r}ZS.exports=YTr});var KS=s((SLe,QS)=>{"use strict";function xTr(r,e){return r+e}QS.exports=xTr});var eO=s((OLe,rO)=>{"use strict";var ZTr=KS();rO.exports=ZTr});var iO=s((ALe,tO)=>{"use strict";var $Tr=pr(),QTr=Ir();function KTr(r){return r===$Tr||r===QTr}tO.exports=KTr});var _e=s((_Le,aO)=>{"use strict";var rIr=iO();aO.exports=rIr});var uO=s((TLe,sO)=>{"use strict";var nO=$0();function eIr(r){return r>0?nO(r-1):nO(r+1)}sO.exports=eIr});var Es=s((ILe,oO)=>{"use strict";var tIr=uO();oO.exports=tIr});var fO=s((RLe,vO)=>{"use strict";var iIr=Math.sqrt;vO.exports=iIr});var Rr=s((LLe,cO)=>{"use strict";var aIr=fO();cO.exports=aIr});var pO=s((PLe,lO)=>{"use strict";function nIr(r){return Math.abs(r)}lO.exports=nIr});var Dr=s((FLe,dO)=>{"use strict";var sIr=pO();dO.exports=sIr});var mO=s((jLe,gO)=>{"use strict";var uIr=tt(),oIr=xi(),vIr={uint16:oIr,uint8:uIr};gO.exports=vIr});var bO=s((MLe,qO)=>{"use strict";var yO=mO(),hO;function fIr(){var r,e;return r=new yO.uint16(1),r[0]=4660,e=new yO.uint8(r.buffer),e[0]===52}hO=fIr();qO.exports=hO});var xe=s((BLe,wO)=>{"use strict";var cIr=bO();wO.exports=cIr});var SO=s((kLe,NO)=>{"use strict";var lIr=xe(),EO,Lv,Pv;lIr===!0?(Lv=1,Pv=0):(Lv=0,Pv=1);EO={HIGH:Lv,LOW:Pv};NO.exports=EO});var Fv=s((CLe,TO)=>{"use strict";var pIr=me(),dIr=ge(),AO=SO(),_O=new dIr(1),OO=new pIr(_O.buffer),gIr=AO.HIGH,mIr=AO.LOW;function yIr(r,e,t,i){return _O[0]=r,e[i]=OO[gIr],e[i+t]=OO[mIr],e}TO.exports=yIr});var RO=s((VLe,IO)=>{"use strict";var hIr=Fv();function qIr(r){return hIr(r,[0>>>0,0>>>0],1,0)}IO.exports=qIr});var za=s((ULe,PO)=>{"use strict";var bIr=D(),LO=RO(),wIr=Fv();bIr(LO,"assign",wIr);PO.exports=LO});var jO=s((GLe,FO)=>{"use strict";var EIr=xe(),jv;EIr===!0?jv=0:jv=1;FO.exports=jv});var BO=s((DLe,MO)=>{"use strict";var NIr=me(),SIr=ge(),OIr=jO(),Mv=new SIr(1),AIr=new NIr(Mv.buffer);function _Ir(r,e){return Mv[0]=r,AIr[OIr]=e>>>0,Mv[0]}MO.exports=_Ir});var vt=s((HLe,kO)=>{"use strict";var TIr=BO();kO.exports=TIr});var VO=s((zLe,CO)=>{"use strict";function IIr(r){return r|0}CO.exports=IIr});var Bv=s((WLe,UO)=>{"use strict";var RIr=VO();UO.exports=RIr});var ft=s((XLe,GO)=>{"use strict";var LIr=2147483647;GO.exports=LIr});var kv=s((JLe,DO)=>{"use strict";var PIr=2147483648;DO.exports=PIr});var zO=s((YLe,HO)=>{"use strict";var FIr=xe(),Cv;FIr===!0?Cv=1:Cv=0;HO.exports=Cv});var JO=s((xLe,XO)=>{"use strict";var jIr=me(),MIr=ge(),BIr=zO(),WO=new MIr(1),kIr=new jIr(WO.buffer);function CIr(r){return WO[0]=r,kIr[BIr]}XO.exports=CIr});var ae=s((ZLe,YO)=>{"use strict";var VIr=JO();YO.exports=VIr});var $O=s(($Le,ZO)=>{"use strict";var UIr=xe(),xO,Vv,Uv;UIr===!0?(Vv=1,Uv=0):(Vv=0,Uv=1);xO={HIGH:Vv,LOW:Uv};ZO.exports=xO});var tA=s((QLe,eA)=>{"use strict";var GIr=me(),DIr=ge(),KO=$O(),rA=new DIr(1),QO=new GIr(rA.buffer),HIr=KO.HIGH,zIr=KO.LOW;function WIr(r,e){return QO[HIr]=r,QO[zIr]=e,rA[0]}eA.exports=WIr});var Wa=s((KLe,iA)=>{"use strict";var XIr=tA();iA.exports=XIr});var nA=s((rPe,aA)=>{"use strict";var JIr=kv(),YIr=ft(),xIr=za(),ZIr=ae(),$Ir=Wa(),Gv=[0,0];function QIr(r,e){var t,i;return xIr.assign(r,Gv,1,0),t=Gv[0],t&=YIr,i=ZIr(e),i&=JIr,t|=i,$Ir(t,Gv[1])}aA.exports=QIr});var Ns=s((ePe,sA)=>{"use strict";var KIr=nA();sA.exports=KIr});var vA=s((tPe,oA)=>{"use strict";var uA=Es(),rRr=Ns(),eRr=Ir(),Ss=pr();function tRr(r,e){return e===eRr?Ss:e===Ss?0:e>0?uA(e)?r:0:uA(e)?rRr(Ss,r):Ss}oA.exports=tRr});var cA=s((iPe,fA)=>{"use strict";var iRr=ft(),aRr=ae(),nRr=1072693247,Os=1e300,As=1e-300;function sRr(r,e){var t,i;return i=aRr(r),t=i&iRr,t<=nRr?e<0?Os*Os:As*As:e>0?Os*Os:As*As}fA.exports=sRr});var dA=s((aPe,pA)=>{"use strict";var uRr=Dr(),lA=pr();function oRr(r,e){return r===-1?(r-r)/(r-r):r===1?1:uRr(r)<1==(e===lA)?0:lA}pA.exports=oRr});var mA=s((nPe,gA)=>{"use strict";var vRr=xe(),Dv;vRr===!0?Dv=1:Dv=0;gA.exports=Dv});var hA=s((sPe,yA)=>{"use strict";var fRr=me(),cRr=ge(),lRr=mA(),Hv=new cRr(1),pRr=new fRr(Hv.buffer);function dRr(r,e){return Hv[0]=r,pRr[lRr]=e>>>0,Hv[0]}yA.exports=dRr});var Et=s((uPe,qA)=>{"use strict";var gRr=hA();qA.exports=gRr});var ct=s((oPe,bA)=>{"use strict";var mRr=1023;bA.exports=mRr});var EA=s((vPe,wA)=>{"use strict";function yRr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}wA.exports=yRr});var AA=s((fPe,OA)=>{"use strict";var hRr=ae(),_s=vt(),NA=Et(),qRr=ct(),bRr=EA(),wRr=1048575,SA=1048576,ERr=1072693248,NRr=536870912,SRr=524288,ORr=20,ARr=9007199254740992,_Rr=.9617966939259756,TRr=.9617967009544373,IRr=-7028461650952758e-24,RRr=[1,1.5],LRr=[0,.5849624872207642],PRr=[0,1350039202129749e-23];function FRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O;return T=0,t<SA&&(e*=ARr,T-=53,t=hRr(e)),T+=(t>>ORr)-qRr|0,S=t&wRr|0,t=S|ERr|0,S<=235662?O=0:S<767610?O=1:(O=0,T+=1,t-=SA),e=NA(e,t),c=RRr[O],A=e-c,b=1/(e+c),a=A*b,u=_s(a,0),i=(t>>1|NRr)+SRr,i+=O<<18,v=NA(0,i),f=e-(v-c),o=b*(A-u*v-u*f),n=a*a,w=n*n*bRr(n),w+=o*(u+a),n=u*u,v=3+n+w,v=_s(v,0),f=w-(v-3-n),A=u*v,b=o*v+f*a,p=A+b,p=_s(p,0),m=b-(p-A),y=TRr*p,g=IRr*p+m*_Rr+PRr[O],l=LRr[O],q=T,d=y+g+l+q,d=_s(d,0),h=g-(d-q-l-y),r[0]=d,r[1]=h,r}OA.exports=FRr});var TA=s((cPe,_A)=>{"use strict";function jRr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}_A.exports=jRr});var RA=s((lPe,IA)=>{"use strict";var MRr=vt(),BRr=TA(),kRr=1.4426950408889634,CRr=1.4426950216293335,VRr=19259629911266175e-24;function URr(r,e){var t,i,a,n,u,o;return a=e-1,n=a*a*BRr(a),u=CRr*a,o=a*VRr-n*kRr,i=u+o,i=MRr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}IA.exports=URr});var Ts=s((pPe,LA)=>{"use strict";var GRr=1023;LA.exports=GRr});var FA=s((dPe,PA)=>{"use strict";var DRr=-1023;PA.exports=DRr});var zv=s((gPe,jA)=>{"use strict";var HRr=-1074;jA.exports=HRr});var Wv=s((mPe,MA)=>{"use strict";var zRr=22250738585072014e-324;MA.exports=zRr});var Xv=s((yPe,BA)=>{"use strict";var WRr=Wv(),XRr=_e(),JRr=z(),YRr=Dr(),xRr=4503599627370496;function ZRr(r,e,t,i){return JRr(r)||XRr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&YRr(r)<WRr?(e[i]=r*xRr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}BA.exports=ZRr});var CA=s((hPe,kA)=>{"use strict";var $Rr=Xv();function QRr(r){return $Rr(r,[0,0],1,0)}kA.exports=QRr});var GA=s((qPe,UA)=>{"use strict";var KRr=D(),VA=CA(),rLr=Xv();KRr(VA,"assign",rLr);UA.exports=VA});var Hn=s((bPe,DA)=>{"use strict";var eLr=2146435072;DA.exports=eLr});var zA=s((wPe,HA)=>{"use strict";var tLr=ae(),iLr=Hn(),aLr=ct();function nLr(r){var e=tLr(r);return e=(e&iLr)>>>20,e-aLr|0}HA.exports=nLr});var XA=s((EPe,WA)=>{"use strict";var sLr=zA();WA.exports=sLr});var YA=s((NPe,JA)=>{"use strict";var uLr=pr(),oLr=Ir(),vLr=ct(),fLr=Ts(),cLr=FA(),lLr=zv(),pLr=z(),dLr=_e(),gLr=Ns(),mLr=GA().assign,yLr=XA(),hLr=za(),qLr=Wa(),bLr=2220446049250313e-31,wLr=2148532223>>>0,Jv=[0,0],Yv=[0,0];function ELr(r,e){var t,i;return e===0||r===0||pLr(r)||dLr(r)?r:(mLr(r,Jv,1,0),r=Jv[0],e+=Jv[1],e+=yLr(r),e<lLr?gLr(0,r):e>fLr?r<0?oLr:uLr:(e<=cLr?(e+=52,i=bLr):i=1,hLr.assign(r,Yv,1,0),t=Yv[0],t&=wLr,t|=e+vLr<<20,i*qLr(t,Yv[1])))}JA.exports=ELr});var Xa=s((SPe,xA)=>{"use strict";var NLr=YA();xA.exports=NLr});var zn=s((OPe,ZA)=>{"use strict";var SLr=.6931471805599453;ZA.exports=SLr});var Is=s((APe,$A)=>{"use strict";var OLr=1048575;$A.exports=OLr});var KA=s((_Pe,QA)=>{"use strict";function ALr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}QA.exports=ALr});var s_=s((TPe,n_)=>{"use strict";var _Lr=ae(),r_=Et(),TLr=vt(),ILr=Bv(),RLr=Xa(),LLr=zn(),e_=ct(),t_=ft(),i_=Is(),PLr=KA(),a_=1048576,FLr=1071644672,Wn=20,jLr=.6931471824645996,MLr=-1904654299957768e-24;function BLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m;return p=r&t_|0,m=(p>>Wn)-e_|0,l=0,p>FLr&&(l=r+(a_>>m+1)>>>0,m=((l&t_)>>Wn)-e_|0,i=(l&~(i_>>m))>>>0,n=r_(0,i),l=(l&i_|a_)>>Wn-m>>>0,r<0&&(l=-l),e-=n),n=t+e,n=TLr(n,0),o=n*jLr,v=(t-(n-e))*LLr+n*MLr,c=o+v,f=v-(c-o),n=c*c,a=c-n*PLr(n),u=c*a/(a-2)-(f+c*f),c=1-(u-c),r=_Lr(c),r=ILr(r),r+=l<<Wn>>>0,r>>Wn<=0?c=RLr(c,l):c=r_(c,r),c}n_.exports=BLr});var y_=s((IPe,m_)=>{"use strict";var u_=z(),o_=Es(),v_=_e(),kLr=Ne(),f_=Rr(),CLr=Dr(),xv=za(),VLr=vt(),c_=Bv(),ULr=Ir(),GLr=pr(),Zv=ft(),DLr=vA(),HLr=cA(),zLr=dA(),WLr=AA(),XLr=RA(),JLr=s_(),YLr=1072693247,xLr=1105199104,ZLr=1139802112,l_=1083179008,$Lr=1072693248,QLr=1083231232,KLr=3230714880>>>0,p_=31,li=1e300,pi=1e-300,rPr=8008566259537294e-32,Nt=[0,0],d_=[0,0];function g_(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;if(u_(r)||u_(e))return NaN;if(xv.assign(e,Nt,1,0),o=Nt[0],v=Nt[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return f_(r);if(e===-.5)return 1/f_(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(v_(e))return zLr(r,e)}if(xv.assign(r,Nt,1,0),n=Nt[0],u=Nt[1],u===0){if(n===0)return DLr(r,e);if(r===1)return 1;if(r===-1&&o_(e))return-1;if(v_(r))return r===ULr?g_(-0,-e):e<0?0:GLr}if(r<0&&kLr(e)===!1)return(r-r)/(r-r);if(a=CLr(r),t=n&Zv|0,i=o&Zv|0,f=n>>>p_|0,c=o>>>p_|0,f&&o_(e)?f=-1:f=1,i>xLr){if(i>ZLr)return HLr(r,e);if(t<YLr)return c===1?f*li*li:f*pi*pi;if(t>$Lr)return c===0?f*li*li:f*pi*pi;y=XLr(d_,a)}else y=WLr(d_,a,t);if(l=VLr(e,0),m=(e-l)*y[0]+e*y[1],p=l*y[0],g=m+p,xv.assign(g,Nt,1,0),d=c_(Nt[0]),h=c_(Nt[1]),d>=l_){if((d-l_|h)!==0||m+rPr>g-p)return f*li*li}else if((d&Zv)>=QLr&&((d-KLr|h)!==0||m<=g-p))return f*pi*pi;return g=JLr(d,p,m),f*g}m_.exports=g_});var Gr=s((RPe,h_)=>{"use strict";var ePr=y_();h_.exports=ePr});var sa=s((LPe,q_)=>{"use strict";var tPr=9007199254740991;q_.exports=tPr});var Xn=s((PPe,b_)=>{"use strict";var iPr=308;b_.exports=iPr});var Rs=s((FPe,w_)=>{"use strict";var aPr=-308;w_.exports=aPr});var Ls=s((jPe,E_)=>{"use strict";var nPr=-324;E_.exports=nPr});var I_=s((MPe,T_)=>{"use strict";var N_=z(),Ps=_e(),S_=Gr(),sPr=Dr(),O_=Ur(),uPr=sa(),A_=Xn(),oPr=Rs(),vPr=Ls(),fPr=Ir(),cPr=uPr+1,__=1e308;function lPr(r,e){var t,i;return N_(r)||N_(e)||Ps(e)?NaN:Ps(r)||r===0||e<vPr||sPr(r)>cPr&&e<=0?r:e>A_?r>=0?0:fPr:e<oPr?(t=S_(10,-(e+A_)),i=r*__*t,Ps(i)?r:O_(i)/__/t):(t=S_(10,-e),i=r*t,Ps(i)?r:O_(i)/t)}T_.exports=lPr});var L_=s((BPe,R_)=>{"use strict";var pPr=I_();R_.exports=pPr});var F_=s((kPe,P_)=>{"use strict";function dPr(r,e){return r*e}P_.exports=dPr});var M_=s((CPe,j_)=>{"use strict";var gPr=F_();j_.exports=gPr});var k_=s((VPe,B_)=>{"use strict";function mPr(r,e){return r-e}B_.exports=mPr});var V_=s((UPe,C_)=>{"use strict";var yPr=k_();C_.exports=yPr});var G_=s((GPe,U_)=>{"use strict";var Jn=Qr(),hPr=eO(),qPr=L_(),bPr=M_(),wPr=Gr(),EPr=V_();function NPr(r){return Jn(r,"add",hPr),Jn(r,"floorn",qPr),Jn(r,"mul",bPr),Jn(r,"pow",wPr),Jn(r,"sub",EPr),r}U_.exports=NPr});var W_=s((DPe,z_)=>{"use strict";var D_=Nr().isPrimitive,SPr=pr(),OPr=Ir(),H_=V();function APr(r,e){return t;function t(i,a){var n;if(!D_(i)){if(e.nonnumeric===void 0)throw new TypeError(H_("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!D_(a)){if(e.nonnumeric===void 0)throw new TypeError(H_("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return n=r(i,a),n!==n?e.nan:n===SPr?e.pinf:n===OPr?e.ninf:n}}z_.exports=APr});var $v=s((HPe,X_)=>{"use strict";var _Pr=W_();X_.exports=_Pr});var Y_=s((zPe,J_)=>{"use strict";var TPr=G0(),IPr=L1(),RPr=cs(),LPr=V(),PPr=vs(),FPr=$v(),jPr=["number","number"],MPr=["First argument","Second argument"];function BPr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(LPr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=PPr([r[0],r[1]],jPr,MPr),t=TPr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=RPr(t),n=FPr(e,i),r[0].push(a),r[1].push(t),IPr(r[0],r[1],n),a}J_.exports=BPr});var Z_=s((WPe,x_)=>{"use strict";var kPr=Y_();x_.exports=kPr});var Q_=s((XPe,$_)=>{"use strict";var CPr=Nr().isPrimitive,VPr=pr(),UPr=Ir(),GPr=V();function DPr(r,e){return t;function t(i){var a;if(!CPr(i)){if(e.nonnumeric===void 0)throw new TypeError(GPr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return a=r(i),a!==a?e.nan:a===VPr?e.pinf:a===UPr?e.ninf:a}}$_.exports=DPr});var Fs=s((JPe,K_)=>{"use strict";var HPr=Q_();K_.exports=HPr});var eT=s((YPe,rT)=>{"use strict";var Qv=Nr().isPrimitive,zPr=pr(),WPr=Ir(),Kv=V();function XPr(r,e){return t;function t(i,a,n){var u;if(!Qv(i)){if(e.nonnumeric===void 0)throw new TypeError(Kv("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Qv(a)){if(e.nonnumeric===void 0)throw new TypeError(Kv("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Qv(n)){if(e.nonnumeric===void 0)throw new TypeError(Kv("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return u=r(i,a,n),u!==u?e.nan:u===zPr?e.pinf:u===WPr?e.ninf:u}}rT.exports=XPr});var r3=s((xPe,tT)=>{"use strict";var JPr=eT();tT.exports=JPr});var aT=s((ZPe,iT)=>{"use strict";var js=Nr().isPrimitive,YPr=pr(),xPr=Ir(),Ms=V();function ZPr(r,e){return t;function t(i,a,n,u){var o;if(!js(i)){if(e.nonnumeric===void 0)throw new TypeError(Ms("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!js(a)){if(e.nonnumeric===void 0)throw new TypeError(Ms("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!js(n)){if(e.nonnumeric===void 0)throw new TypeError(Ms("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!js(u)){if(e.nonnumeric===void 0)throw new TypeError(Ms("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,a,n,u),o!==o?e.nan:o===YPr?e.pinf:o===xPr?e.ninf:o}}iT.exports=ZPr});var sT=s(($Pe,nT)=>{"use strict";var $Pr=aT();nT.exports=$Pr});var oT=s((QPe,uT)=>{"use strict";var Yn=Nr().isPrimitive,QPr=pr(),KPr=Ir(),xn=V();function rFr(r,e){return t;function t(i,a,n,u,o){var v;if(!Yn(i)){if(e.nonnumeric===void 0)throw new TypeError(xn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Yn(a)){if(e.nonnumeric===void 0)throw new TypeError(xn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Yn(n)){if(e.nonnumeric===void 0)throw new TypeError(xn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Yn(u)){if(e.nonnumeric===void 0)throw new TypeError(xn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Yn(o)){if(e.nonnumeric===void 0)throw new TypeError(xn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,a,n,u,o),v!==v?e.nan:v===QPr?e.pinf:v===KPr?e.ninf:v}}uT.exports=rFr});var fT=s((KPe,vT)=>{"use strict";var eFr=oT();vT.exports=eFr});var lT=s((rFe,cT)=>{"use strict";var tFr=G0(),iFr=F1(),aFr=cs(),nFr=V(),sFr=vs(),uFr=r3(),oFr=["number","number","number"],vFr=["First argument","Second argument","Third argument"];function fFr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(nFr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=sFr([r[0],r[1],r[2]],oFr,vFr),t=tFr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=aFr(t),n=uFr(e,i),r[0].push(a),r[1].push(t),iFr(r[0],r[1],n),a}cT.exports=fFr});var dT=s((eFe,pT)=>{"use strict";var cFr=lT();pT.exports=cFr});var mT=s((tFe,gT)=>{"use strict";var lFr=qe(),pFr=j2(),dFr=V(),gFr=Fs();function mFr(r,e){var t,i,a,n,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")i[n]=r[u+1];else throw new Error(dFr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return a=gFr(e,i),lFr(t)?(pFr([t,t],[t.length,t[0].length],a),t):a(t)}gT.exports=mFr});var hT=s((iFe,yT)=>{"use strict";var yFr=mT();yT.exports=yFr});var bT=s((aFe,qT)=>{"use strict";function hFr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}qT.exports=hFr});var e3=s((nFe,wT)=>{"use strict";var qFr=bT();wT.exports=qFr});var NT=s((sFe,ET)=>{"use strict";function bFr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}ET.exports=bFr});var lt=s((uFe,ST)=>{"use strict";var wFr=NT();ST.exports=wFr});var AT=s((oFe,OT)=>{"use strict";var EFr=ma(),NFr=Ki(),SFr=W0(),OFr=Aa(),AFr=X0(),_Fr=lt();function TFr(r){var e,t,i,a;return e=r.data,i=r.shape,a=r.dtype,t=EFr(e),{ref:r,dtype:a,data:e,length:_Fr(i),shape:i,strides:r.strides,offset:r.offset,order:r.order,accessorProtocol:t,accessors:t?[NFr(a),SFr(a)]:[OFr(a),AFr(a)]}}OT.exports=TFr});var TT=s((vFe,_T)=>{"use strict";var IFr=AT();_T.exports=IFr});var RT=s((fFe,IT)=>{"use strict";function RFr(r){var e,t;if(e=[],r<=0)return e;for(t=0;t<r;t++)e.push(t);return e}IT.exports=RFr});var PT=s((cFe,LT)=>{"use strict";var LFr=RT();LT.exports=LFr});var jT=s((lFe,FT)=>{"use strict";function PFr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}FT.exports=PFr});var t3=s((pFe,MT)=>{"use strict";var FFr=jT();MT.exports=FFr});var kT=s((dFe,BT)=>{"use strict";function jFr(r,e){var t,i,a,n,u,o,v,f,c,l;for(a=1,n=1,l=1;l<r.length;l++){for(v=r[a],t=v<0?-v:v,f=e[n],u=a-1,o=n-1;u>=0&&(c=r[u],i=c<0?-c:c,!(i<=t));)r[u+1]=c,e[o+1]=e[o],u-=1,o-=1;r[u+1]=v,e[o+1]=f,a+=1,n+=1}}BT.exports=jFr});var UT=s((gFe,VT)=>{"use strict";var MFr=PT(),BFr=Sn(),CT=t3(),kFr=kT();function CFr(r,e,t){var i;return i=MFr(r.length),e=BFr(e),kFr(e,i),r=CT(r,i),t=CT(t,i),{sh:r,sx:e,sy:t}}VT.exports=CFr});var ne=s((mFe,GT)=>{"use strict";var VFr=UT();GT.exports=VFr});var DT=s((yFe,UFr)=>{UFr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var zT=s((hFe,HT)=>{"use strict";var GFr=DT();function DFr(r){return GFr[r]||null}HT.exports=DFr});var i3=s((qFe,WT)=>{"use strict";var HFr=zT();WT.exports=HFr});var JT=s((bFe,XT)=>{"use strict";var zFr={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};XT.exports=zFr});var ZT=s((wFe,xT)=>{"use strict";var YT=i3(),a3=JT();function WFr(r,e){var t,i;return t=YT(r),i=YT(e),t===null||i===null?a3.BLOCK_SIZE_IN_ELEMENTS:t>i?a3.BLOCK_SIZE_IN_BYTES/t|0:a3.BLOCK_SIZE_IN_BYTES/i|0}xT.exports=WFr});var se=s((EFe,$T)=>{"use strict";var XFr=ZT();$T.exports=XFr});var KT=s((NFe,QT)=>{"use strict";var JFr=ne(),YFr=se();function xFr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E;for(E=JFr(r.shape,r.strides,e.strides),y=E.sh,h=E.sx,q=E.sy,i=YFr(r.dtype,e.dtype),w=r.offset,A=e.offset,a=r.data,n=e.data,v=h[0],c=q[0],u=r.accessors[0],o=e.accessors[1],I=y[1];I>0;)for(I<i?(d=I,I=0):(d=i,I-=i),p=w+I*h[1],m=A+I*q[1],N=y[0];N>0;)for(N<i?(g=N,N=0):(g=i,N-=i),b=p+N*h[0],T=m+N*q[0],f=h[1]-g*h[0],l=q[1]-g*q[0],O=0;O<d;O++){for(S=0;S<g;S++)o(n,T,t(u(a,b))),b+=v,T+=c;b+=f,T+=l}}QT.exports=xFr});var eI=s((SFe,rI)=>{"use strict";var ZFr=ne(),$Fr=se();function QFr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U;for(U=ZFr(r.shape,r.strides,e.strides),q=U.sh,T=U.sx,S=U.sy,i=$Fr(r.dtype,e.dtype),O=r.offset,N=e.offset,a=r.data,n=e.data,v=T[0],l=S[0],u=r.accessors[0],o=e.accessors[1],L=q[2];L>0;)for(L<i?(b=L,L=0):(b=i,L-=i),g=O+L*T[2],h=N+L*S[2],j=q[1];j>0;)for(j<i?(A=j,j=0):(A=i,j-=i),c=T[2]-A*T[1],m=S[2]-A*S[1],y=g+j*T[1],d=h+j*S[1],F=q[0];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),I=y+F*T[0],E=d+F*S[0],f=T[1]-w*T[0],p=S[1]-w*S[0],_=0;_<b;_++){for(M=0;M<A;M++){for(P=0;P<w;P++)o(n,E,t(u(a,I))),I+=v,E+=l;I+=f,E+=p}I+=c,E+=m}}rI.exports=QFr});var iI=s((OFe,tI)=>{"use strict";var KFr=ne(),rjr=se();function ejr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X;for(X=KFr(r.shape,r.strides,e.strides),T=X.sh,E=X.sx,P=X.sy,i=rjr(r.dtype,e.dtype),M=r.offset,_=e.offset,a=r.data,n=e.data,v=E[0],p=P[0],u=r.accessors[0],o=e.accessors[1],W=T[3];W>0;)for(W<i?(I=W,W=0):(I=i,W-=i),q=M+W*E[3],b=_+W*P[3],G=T[2];G>0;)for(G<i?(N=G,G=0):(N=i,G-=i),l=E[3]-N*E[2],g=P[3]-N*P[2],h=q+G*E[2],A=b+G*P[2],B=T[1];B>0;)for(B<i?(O=B,B=0):(O=i,B-=i),c=E[2]-O*E[1],y=P[2]-O*P[1],d=h+B*E[1],w=A+B*P[1],C=T[0];C>0;)for(C<i?(S=C,C=0):(S=i,C-=i),F=d+C*E[0],j=w+C*P[0],f=E[1]-S*E[0],m=P[1]-S*P[0],R=0;R<I;R++){for(k=0;k<N;k++){for(U=0;U<O;U++){for(L=0;L<S;L++)o(n,j,t(u(a,F))),F+=v,j+=p;F+=f,j+=m}F+=c,j+=y}F+=l,j+=g}}tI.exports=ejr});var nI=s((AFe,aI)=>{"use strict";var tjr=ne(),ijr=se();function ajr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er;for(er=tjr(r.shape,r.strides,e.strides),I=er.sh,j=er.sx,L=er.sy,i=ijr(r.dtype,e.dtype),U=r.offset,k=e.offset,a=r.data,n=e.data,v=j[0],m=L[0],u=r.accessors[0],o=e.accessors[1],$=I[4];$>0;)for($<i?(F=$,$=0):(F=i,$-=i),b=U+$*j[4],N=k+$*L[4],Y=I[3];Y>0;)for(Y<i?(_=Y,Y=0):(_=i,Y-=i),p=j[4]-_*j[3],h=L[4]-_*L[3],A=b+Y*j[3],O=N+Y*L[3],J=I[2];J>0;)for(J<i?(M=J,J=0):(M=i,J-=i),l=j[3]-M*j[2],d=L[3]-M*L[2],w=A+J*j[2],S=O+J*L[2],Q=I[1];Q>0;)for(Q<i?(P=Q,Q=0):(P=i,Q-=i),c=j[2]-P*j[1],g=L[2]-P*L[1],q=w+Q*j[1],T=S+Q*L[1],Z=I[0];Z>0;)for(Z<i?(E=Z,Z=0):(E=i,Z-=i),R=q+Z*j[0],C=T+Z*L[0],f=j[1]-E*j[0],y=L[1]-E*L[0],x=0;x<F;x++){for(X=0;X<_;X++){for(W=0;W<M;W++){for(G=0;G<P;G++){for(B=0;B<E;B++)o(n,C,t(u(a,R))),R+=v,C+=m;R+=f,C+=y}R+=c,C+=g}R+=l,C+=d}R+=p,C+=h}}aI.exports=ajr});var uI=s((_Fe,sI)=>{"use strict";var njr=ne(),sjr=se();function ujr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir;for(ir=njr(r.shape,r.strides,e.strides),_=ir.sh,C=ir.sx,B=ir.sy,i=sjr(r.dtype,e.dtype),G=r.offset,W=e.offset,a=r.data,n=e.data,v=C[0],y=B[0],u=r.accessors[0],o=e.accessors[1],fr=_[5];fr>0;)for(fr<i?(R=fr,fr=0):(R=i,fr-=i),O=G+fr*C[5],M=W+fr*B[5],ar=_[4];ar>0;)for(ar<i?(k=ar,ar=0):(k=i,ar-=i),m=C[5]-k*C[4],w=B[5]-k*B[4],S=O+ar*C[4],P=M+ar*B[4],tr=_[3];tr>0;)for(tr<i?(U=tr,tr=0):(U=i,tr-=i),p=C[4]-U*C[3],q=B[4]-U*B[3],T=S+tr*C[3],E=P+tr*B[3],rr=_[2];rr>0;)for(rr<i?(L=rr,rr=0):(L=i,rr-=i),l=C[3]-L*C[2],h=B[3]-L*B[2],b=T+rr*C[2],I=E+rr*B[2],K=_[1];K>0;)for(K<i?(j=K,K=0):(j=i,K-=i),c=C[2]-j*C[1],d=B[2]-j*B[1],A=b+K*C[1],N=I+K*B[1],ur=_[0];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),X=A+ur*C[0],x=N+ur*B[0],f=C[1]-F*C[0],g=B[1]-F*B[0],er=0;er<R;er++){for($=0;$<k;$++){for(Y=0;Y<U;Y++){for(J=0;J<L;J++){for(Q=0;Q<j;Q++){for(Z=0;Z<F;Z++)o(n,x,t(u(a,X))),X+=v,x+=y;X+=f,x+=g}X+=c,x+=d}X+=l,x+=h}X+=p,x+=q}X+=m,x+=w}}sI.exports=ujr});var vI=s((TFe,oI)=>{"use strict";var ojr=ne(),vjr=se();function fjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr;for(yr=ojr(r.shape,r.strides,e.strides),U=yr.sh,x=yr.sx,Z=yr.sy,i=vjr(r.dtype,e.dtype),Q=r.offset,J=e.offset,a=r.data,n=e.data,v=x[0],g=Z[0],u=r.accessors[0],o=e.accessors[1],dr=U[6];dr>0;)for(dr<i?(X=dr,dr=0):(X=i,dr-=i),E=Q+dr*x[6],L=J+dr*Z[6],gr=U[5];gr>0;)for(gr<i?(W=gr,gr=0):(W=i,gr-=i),y=x[6]-W*x[5],b=Z[6]-W*Z[5],I=E+gr*x[5],j=L+gr*Z[5],cr=U[4];cr>0;)for(cr<i?(G=cr,cr=0):(G=i,cr-=i),m=x[5]-G*x[4],A=Z[5]-G*Z[4],N=I+cr*x[4],F=j+cr*Z[4],or=U[3];or>0;)for(or<i?(B=or,or=0):(B=i,or-=i),p=x[4]-B*x[3],w=Z[4]-B*Z[3],O=N+or*x[3],_=F+or*Z[3],sr=U[2];sr>0;)for(sr<i?(C=sr,sr=0):(C=i,sr-=i),l=x[3]-C*x[2],q=Z[3]-C*Z[2],S=O+sr*x[2],M=_+sr*Z[2],nr=U[1];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=x[2]-R*x[1],h=Z[2]-R*Z[1],T=S+nr*x[1],P=M+nr*Z[1],ir=U[0];ir>0;)for(ir<i?(k=ir,ir=0):(k=i,ir-=i),Y=T+ir*x[0],$=P+ir*Z[0],f=x[1]-k*x[0],d=Z[1]-k*Z[0],fr=0;fr<X;fr++){for(ar=0;ar<W;ar++){for(tr=0;tr<G;tr++){for(rr=0;rr<B;rr++){for(K=0;K<C;K++){for(ur=0;ur<R;ur++){for(er=0;er<k;er++)o(n,$,t(u(a,Y))),Y+=v,$+=g;Y+=f,$+=d}Y+=c,$+=h}Y+=l,$+=q}Y+=p,$+=w}Y+=m,$+=A}Y+=y,$+=b}}oI.exports=fjr});var cI=s((IFe,fI)=>{"use strict";var cjr=ne(),ljr=se();function pjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er,Fr,kr;for(kr=cjr(r.shape,r.strides,e.strides),B=kr.sh,$=kr.sx,er=kr.sy,i=ljr(r.dtype,e.dtype),ur=r.offset,K=e.offset,a=r.data,n=e.data,v=$[0],d=er[0],u=r.accessors[0],o=e.accessors[1],Fr=B[7];Fr>0;)for(Fr<i?(Y=Fr,Fr=0):(Y=i,Fr-=i),_=ur+Fr*$[7],C=K+Fr*er[7],Er=B[6];Er>0;)for(Er<i?(J=Er,Er=0):(J=i,Er-=i),g=$[7]-J*$[6],S=er[7]-J*er[6],M=_+Er*$[6],R=C+Er*er[6],Tr=B[5];Tr>0;)for(Tr<i?(Q=Tr,Tr=0):(Q=i,Tr-=i),y=$[6]-Q*$[5],T=er[6]-Q*er[5],P=M+Tr*$[5],k=R+Tr*er[5],_r=B[4];_r>0;)for(_r<i?(Z=_r,_r=0):(Z=i,_r-=i),m=$[5]-Z*$[4],b=er[5]-Z*er[4],E=P+_r*$[4],U=k+_r*er[4],Mr=B[3];Mr>0;)for(Mr<i?(x=Mr,Mr=0):(x=i,Mr-=i),p=$[4]-x*$[3],A=er[4]-x*er[3],I=E+Mr*$[3],L=U+Mr*er[3],jr=B[2];jr>0;)for(jr<i?(X=jr,jr=0):(X=i,jr-=i),l=$[3]-X*$[2],w=er[3]-X*er[2],N=I+jr*$[2],j=L+jr*er[2],yr=B[1];yr>0;)for(yr<i?(W=yr,yr=0):(W=i,yr-=i),c=$[2]-W*$[1],q=er[2]-W*er[1],O=N+yr*$[1],F=j+yr*er[1],dr=B[0];dr>0;)for(dr<i?(G=dr,dr=0):(G=i,dr-=i),rr=O+dr*$[0],tr=F+dr*er[0],f=$[1]-G*$[0],h=er[1]-G*er[0],gr=0;gr<Y;gr++){for(cr=0;cr<J;cr++){for(or=0;or<Q;or++){for(sr=0;sr<Z;sr++){for(nr=0;nr<x;nr++){for(ir=0;ir<X;ir++){for(fr=0;fr<W;fr++){for(ar=0;ar<G;ar++)o(n,tr,t(u(a,rr))),rr+=v,tr+=d;rr+=f,tr+=h}rr+=c,tr+=q}rr+=l,tr+=w}rr+=p,tr+=A}rr+=m,tr+=b}rr+=y,tr+=T}rr+=g,tr+=S}}fI.exports=pjr});var pI=s((RFe,lI)=>{"use strict";var djr=ne(),gjr=se();function mjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er,Fr,kr,Jr,Cr,Vr,Pr,Br,Xr,Kr;for(Kr=djr(r.shape,r.strides,e.strides),x=Kr.sh,tr=Kr.sx,ar=Kr.sy,i=gjr(r.dtype,e.dtype),fr=r.offset,ir=e.offset,a=r.data,n=e.data,v=tr[0],h=ar[0],u=r.accessors[0],o=e.accessors[1],Xr=x[8];Xr>0;)for(Xr<i?(rr=Xr,Xr=0):(rr=i,Xr-=i),L=fr+Xr*tr[8],X=ir+Xr*ar[8],Br=x[7];Br>0;)for(Br<i?(K=Br,Br=0):(K=i,Br-=i),d=tr[8]-K*tr[7],N=ar[8]-K*ar[7],j=L+Br*tr[7],W=X+Br*ar[7],Pr=x[6];Pr>0;)for(Pr<i?(ur=Pr,Pr=0):(ur=i,Pr-=i),g=tr[7]-ur*tr[6],O=ar[7]-ur*ar[6],F=j+Pr*tr[6],G=W+Pr*ar[6],Vr=x[5];Vr>0;)for(Vr<i?(er=Vr,Vr=0):(er=i,Vr-=i),y=tr[6]-er*tr[5],S=ar[6]-er*ar[5],_=F+Vr*tr[5],B=G+Vr*ar[5],Cr=x[4];Cr>0;)for(Cr<i?($=Cr,Cr=0):($=i,Cr-=i),m=tr[5]-$*tr[4],T=ar[5]-$*ar[4],M=_+Cr*tr[4],C=B+Cr*ar[4],Jr=x[3];Jr>0;)for(Jr<i?(Y=Jr,Jr=0):(Y=i,Jr-=i),p=tr[4]-Y*tr[3],b=ar[4]-Y*ar[3],P=M+Jr*tr[3],R=C+Jr*ar[3],kr=x[2];kr>0;)for(kr<i?(J=kr,kr=0):(J=i,kr-=i),l=tr[3]-J*tr[2],A=ar[3]-J*ar[2],E=P+kr*tr[2],k=R+kr*ar[2],Fr=x[1];Fr>0;)for(Fr<i?(Q=Fr,Fr=0):(Q=i,Fr-=i),c=tr[2]-Q*tr[1],w=ar[2]-Q*ar[1],I=E+Fr*tr[1],U=k+Fr*ar[1],Er=x[0];Er>0;)for(Er<i?(Z=Er,Er=0):(Z=i,Er-=i),nr=I+Er*tr[0],sr=U+Er*ar[0],f=tr[1]-Z*tr[0],q=ar[1]-Z*ar[0],Tr=0;Tr<rr;Tr++){for(_r=0;_r<K;_r++){for(Mr=0;Mr<ur;Mr++){for(jr=0;jr<er;jr++){for(yr=0;yr<$;yr++){for(dr=0;dr<Y;dr++){for(gr=0;gr<J;gr++){for(cr=0;cr<Q;cr++){for(or=0;or<Z;or++)o(n,sr,t(u(a,nr))),nr+=v,sr+=h;nr+=f,sr+=q}nr+=c,sr+=w}nr+=l,sr+=A}nr+=p,sr+=b}nr+=m,sr+=T}nr+=y,sr+=S}nr+=g,sr+=O}nr+=d,sr+=N}}lI.exports=mjr});var gI=s((LFe,dI)=>{"use strict";var yjr=ne(),hjr=se();function qjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er,Fr,kr,Jr,Cr,Vr,Pr,Br,Xr,Kr,fe,ce,le,pe,Ce,ai,C0;for(C0=yjr(r.shape,r.strides,e.strides),Y=C0.sh,sr=C0.sx,or=C0.sy,i=hjr(r.dtype,e.dtype),cr=r.offset,gr=e.offset,a=r.data,n=e.data,v=sr[0],q=or[0],u=r.accessors[0],o=e.accessors[1],ai=Y[9];ai>0;)for(ai<i?(nr=ai,ai=0):(nr=i,ai-=i),R=cr+ai*sr[9],J=gr+ai*or[9],Ce=Y[8];Ce>0;)for(Ce<i?(ir=Ce,Ce=0):(ir=i,Ce-=i),h=sr[9]-ir*sr[8],E=or[9]-ir*or[8],k=R+Ce*sr[8],Q=J+Ce*or[8],pe=Y[7];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),d=sr[8]-fr*sr[7],I=or[8]-fr*or[7],U=k+pe*sr[7],Z=Q+pe*or[7],le=Y[6];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=sr[7]-ar*sr[6],N=or[7]-ar*or[6],L=U+le*sr[6],x=Z+le*or[6],ce=Y[5];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=sr[6]-tr*sr[5],O=or[6]-tr*or[5],j=L+ce*sr[5],X=x+ce*or[5],fe=Y[4];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=sr[5]-rr*sr[4],S=or[5]-rr*or[4],F=j+fe*sr[4],W=X+fe*or[4],Kr=Y[3];Kr>0;)for(Kr<i?(K=Kr,Kr=0):(K=i,Kr-=i),p=sr[4]-K*sr[3],T=or[4]-K*or[3],_=F+Kr*sr[3],G=W+Kr*or[3],Xr=Y[2];Xr>0;)for(Xr<i?(ur=Xr,Xr=0):(ur=i,Xr-=i),l=sr[3]-ur*sr[2],b=or[3]-ur*or[2],M=_+Xr*sr[2],B=G+Xr*or[2],Br=Y[1];Br>0;)for(Br<i?(er=Br,Br=0):(er=i,Br-=i),c=sr[2]-er*sr[1],A=or[2]-er*or[1],P=M+Br*sr[1],C=B+Br*or[1],Pr=Y[0];Pr>0;)for(Pr<i?($=Pr,Pr=0):($=i,Pr-=i),dr=P+Pr*sr[0],yr=C+Pr*or[0],f=sr[1]-$*sr[0],w=or[1]-$*or[0],Vr=0;Vr<nr;Vr++){for(Cr=0;Cr<ir;Cr++){for(Jr=0;Jr<fr;Jr++){for(kr=0;kr<ar;kr++){for(Fr=0;Fr<tr;Fr++){for(Er=0;Er<rr;Er++){for(Tr=0;Tr<K;Tr++){for(_r=0;_r<ur;_r++){for(Mr=0;Mr<er;Mr++){for(jr=0;jr<$;jr++)o(n,yr,t(u(a,dr))),dr+=v,yr+=q;dr+=f,yr+=w}dr+=c,yr+=A}dr+=l,yr+=b}dr+=p,yr+=T}dr+=m,yr+=S}dr+=y,yr+=O}dr+=g,yr+=N}dr+=d,yr+=I}dr+=h,yr+=E}}dI.exports=qjr});var yI=s((PFe,mI)=>{"use strict";var bjr=ne(),wjr=se();function Ejr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N;for(N=bjr(r.shape,r.strides,e.strides),p=N.sh,g=N.sx,d=N.sy,i=wjr(r.dtype,e.dtype),h=r.offset,q=e.offset,a=r.data,n=e.data,u=g[0],v=d[0],O=p[1];O>0;)for(O<i?(y=O,O=0):(y=i,O-=i),c=h+O*g[1],l=q+O*d[1],S=p[0];S>0;)for(S<i?(m=S,S=0):(m=i,S-=i),w=c+S*g[0],A=l+S*d[0],o=g[1]-m*g[0],f=d[1]-m*d[0],T=0;T<y;T++){for(b=0;b<m;b++)n[A]=t(a[w]),w+=u,A+=v;w+=o,A+=f}}mI.exports=Ejr});var qI=s((FFe,hI)=>{"use strict";var Njr=ne(),Sjr=se();function Ojr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j;for(j=Njr(r.shape,r.strides,e.strides),d=j.sh,A=j.sx,b=j.sy,i=Sjr(r.dtype,e.dtype),T=r.offset,S=e.offset,a=r.data,n=e.data,u=A[0],f=b[0],F=d[2];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),m=T+F*A[2],g=S+F*b[2],_=d[1];_>0;)for(_<i?(q=_,_=0):(q=i,_-=i),v=A[2]-q*A[1],l=b[2]-q*b[1],p=m+_*A[1],y=g+_*b[1],M=d[0];M>0;)for(M<i?(h=M,M=0):(h=i,M-=i),O=p+M*A[0],N=y+M*b[0],o=A[1]-h*A[0],c=b[1]-h*b[0],P=0;P<w;P++){for(E=0;E<q;E++){for(I=0;I<h;I++)n[N]=t(a[O]),O+=u,N+=f;O+=o,N+=c}O+=v,N+=l}}hI.exports=Ojr});var wI=s((jFe,bI)=>{"use strict";var Ajr=ne(),_jr=se();function Tjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G;for(G=Ajr(r.shape,r.strides,e.strides),A=G.sh,N=G.sx,I=G.sy,i=_jr(r.dtype,e.dtype),E=r.offset,P=e.offset,a=r.data,n=e.data,u=N[0],c=I[0],B=A[3];B>0;)for(B<i?(O=B,B=0):(O=i,B-=i),d=E+B*N[3],w=P+B*I[3],C=A[2];C>0;)for(C<i?(S=C,C=0):(S=i,C-=i),f=N[3]-S*N[2],m=I[3]-S*I[2],g=d+C*N[2],q=w+C*I[2],R=A[1];R>0;)for(R<i?(T=R,R=0):(T=i,R-=i),v=N[2]-T*N[1],p=I[2]-T*I[1],y=g+R*N[1],h=q+R*I[1],k=A[0];k>0;)for(k<i?(b=k,k=0):(b=i,k-=i),M=y+k*N[0],_=h+k*I[0],o=N[1]-b*N[0],l=I[1]-b*I[0],U=0;U<O;U++){for(L=0;L<S;L++){for(j=0;j<T;j++){for(F=0;F<b;F++)n[_]=t(a[M]),M+=u,_+=c;M+=o,_+=l}M+=v,_+=p}M+=f,_+=m}}bI.exports=Tjr});var NI=s((MFe,EI)=>{"use strict";var Ijr=ne(),Rjr=se();function Ljr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y;for(Y=Ijr(r.shape,r.strides,e.strides),O=Y.sh,_=Y.sx,F=Y.sy,i=Rjr(r.dtype,e.dtype),j=r.offset,L=e.offset,a=r.data,n=e.data,u=_[0],l=F[0],J=O[4];J>0;)for(J<i?(M=J,J=0):(M=i,J-=i),w=j+J*_[4],S=L+J*F[4],Q=O[3];Q>0;)for(Q<i?(P=Q,Q=0):(P=i,Q-=i),c=_[4]-P*_[3],g=F[4]-P*F[3],q=w+Q*_[3],T=S+Q*F[3],Z=O[2];Z>0;)for(Z<i?(E=Z,Z=0):(E=i,Z-=i),f=_[3]-E*_[2],y=F[3]-E*F[2],h=q+Z*_[2],b=T+Z*F[2],x=O[1];x>0;)for(x<i?(I=x,x=0):(I=i,x-=i),v=_[2]-I*_[1],m=F[2]-I*F[1],d=h+x*_[1],A=b+x*F[1],X=O[0];X>0;)for(X<i?(N=X,X=0):(N=i,X-=i),U=d+X*_[0],k=A+X*F[0],o=_[1]-N*_[0],p=F[1]-N*F[0],W=0;W<M;W++){for(G=0;G<P;G++){for(B=0;B<E;B++){for(C=0;C<I;C++){for(R=0;R<N;R++)n[k]=t(a[U]),U+=u,k+=l;U+=o,k+=p}U+=v,k+=m}U+=f,k+=y}U+=c,k+=g}}EI.exports=Ljr});var OI=s((BFe,SI)=>{"use strict";var Pjr=ne(),Fjr=se();function jjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar;for(ar=Pjr(r.shape,r.strides,e.strides),P=ar.sh,k=ar.sx,R=ar.sy,i=Fjr(r.dtype,e.dtype),C=r.offset,B=e.offset,a=r.data,n=e.data,u=k[0],p=R[0],tr=P[5];tr>0;)for(tr<i?(U=tr,tr=0):(U=i,tr-=i),T=C+tr*k[5],E=B+tr*R[5],rr=P[4];rr>0;)for(rr<i?(L=rr,rr=0):(L=i,rr-=i),l=k[5]-L*k[4],h=R[5]-L*R[4],b=T+rr*k[4],I=E+rr*R[4],K=P[3];K>0;)for(K<i?(j=K,K=0):(j=i,K-=i),c=k[4]-j*k[3],d=R[4]-j*R[3],A=b+K*k[3],N=I+K*R[3],ur=P[2];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),f=k[3]-F*k[2],g=R[3]-F*R[2],w=A+ur*k[2],O=N+ur*R[2],er=P[1];er>0;)for(er<i?(_=er,er=0):(_=i,er-=i),v=k[2]-_*k[1],y=R[2]-_*R[1],q=w+er*k[1],S=O+er*R[1],$=P[0];$>0;)for($<i?(M=$,$=0):(M=i,$-=i),G=q+$*k[0],W=S+$*R[0],o=k[1]-M*k[0],m=R[1]-M*R[0],Y=0;Y<U;Y++){for(J=0;J<L;J++){for(Q=0;Q<j;Q++){for(Z=0;Z<F;Z++){for(x=0;x<_;x++){for(X=0;X<M;X++)n[W]=t(a[G]),G+=u,W+=p;G+=o,W+=m}G+=v,W+=y}G+=f,W+=g}G+=c,W+=d}G+=l,W+=h}}SI.exports=jjr});var _I=s((kFe,AI)=>{"use strict";var Mjr=ne(),Bjr=se();function kjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr;for(gr=Mjr(r.shape,r.strides,e.strides),j=gr.sh,W=gr.sx,X=gr.sy,i=Bjr(r.dtype,e.dtype),x=r.offset,Z=e.offset,a=r.data,n=e.data,u=W[0],m=X[0],cr=j[6];cr>0;)for(cr<i?(G=cr,cr=0):(G=i,cr-=i),N=x+cr*W[6],F=Z+cr*X[6],or=j[5];or>0;)for(or<i?(B=or,or=0):(B=i,or-=i),p=W[6]-B*W[5],w=X[6]-B*X[5],O=N+or*W[5],_=F+or*X[5],sr=j[4];sr>0;)for(sr<i?(C=sr,sr=0):(C=i,sr-=i),l=W[5]-C*W[4],q=X[5]-C*X[4],S=O+sr*W[4],M=_+sr*X[4],nr=j[3];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=W[4]-R*W[3],h=X[4]-R*X[3],T=S+nr*W[3],P=M+nr*X[3],ir=j[2];ir>0;)for(ir<i?(k=ir,ir=0):(k=i,ir-=i),f=W[3]-k*W[2],d=X[3]-k*X[2],b=T+ir*W[2],E=P+ir*X[2],fr=j[1];fr>0;)for(fr<i?(U=fr,fr=0):(U=i,fr-=i),v=W[2]-U*W[1],g=X[2]-U*X[1],A=b+fr*W[1],I=E+fr*X[1],ar=j[0];ar>0;)for(ar<i?(L=ar,ar=0):(L=i,ar-=i),Q=A+ar*W[0],J=I+ar*X[0],o=W[1]-L*W[0],y=X[1]-L*X[0],tr=0;tr<G;tr++){for(rr=0;rr<B;rr++){for(K=0;K<C;K++){for(ur=0;ur<R;ur++){for(er=0;er<k;er++){for($=0;$<U;$++){for(Y=0;Y<L;Y++)n[J]=t(a[Q]),Q+=u,J+=m;Q+=o,J+=y}Q+=v,J+=g}Q+=f,J+=d}Q+=c,J+=h}Q+=l,J+=q}Q+=p,J+=w}}AI.exports=kjr});var II=s((CFe,TI)=>{"use strict";var Cjr=ne(),Vjr=se();function Ujr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er;for(Er=Cjr(r.shape,r.strides,e.strides),R=Er.sh,J=Er.sx,Y=Er.sy,i=Vjr(r.dtype,e.dtype),$=r.offset,er=e.offset,a=r.data,n=e.data,u=J[0],y=Y[0],Tr=R[7];Tr>0;)for(Tr<i?(Q=Tr,Tr=0):(Q=i,Tr-=i),P=$+Tr*J[7],k=er+Tr*Y[7],_r=R[6];_r>0;)for(_r<i?(Z=_r,_r=0):(Z=i,_r-=i),m=J[7]-Z*J[6],b=Y[7]-Z*Y[6],E=P+_r*J[6],U=k+_r*Y[6],Mr=R[5];Mr>0;)for(Mr<i?(x=Mr,Mr=0):(x=i,Mr-=i),p=J[6]-x*J[5],A=Y[6]-x*Y[5],I=E+Mr*J[5],L=U+Mr*Y[5],jr=R[4];jr>0;)for(jr<i?(X=jr,jr=0):(X=i,jr-=i),l=J[5]-X*J[4],w=Y[5]-X*Y[4],N=I+jr*J[4],j=L+jr*Y[4],yr=R[3];yr>0;)for(yr<i?(W=yr,yr=0):(W=i,yr-=i),c=J[4]-W*J[3],q=Y[4]-W*Y[3],O=N+yr*J[3],F=j+yr*Y[3],dr=R[2];dr>0;)for(dr<i?(G=dr,dr=0):(G=i,dr-=i),f=J[3]-G*J[2],h=Y[3]-G*Y[2],S=O+dr*J[2],_=F+dr*Y[2],gr=R[1];gr>0;)for(gr<i?(B=gr,gr=0):(B=i,gr-=i),v=J[2]-B*J[1],d=Y[2]-B*Y[1],T=S+gr*J[1],M=_+gr*Y[1],cr=R[0];cr>0;)for(cr<i?(C=cr,cr=0):(C=i,cr-=i),ur=T+cr*J[0],K=M+cr*Y[0],o=J[1]-C*J[0],g=Y[1]-C*Y[0],or=0;or<Q;or++){for(sr=0;sr<Z;sr++){for(nr=0;nr<x;nr++){for(ir=0;ir<X;ir++){for(fr=0;fr<W;fr++){for(ar=0;ar<G;ar++){for(tr=0;tr<B;tr++){for(rr=0;rr<C;rr++)n[K]=t(a[ur]),ur+=u,K+=y;ur+=o,K+=g}ur+=v,K+=d}ur+=f,K+=h}ur+=c,K+=q}ur+=l,K+=w}ur+=p,K+=A}ur+=m,K+=b}}TI.exports=Ujr});var LI=s((VFe,RI)=>{"use strict";var Gjr=ne(),Djr=se();function Hjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er,Fr,kr,Jr,Cr,Vr,Pr,Br;for(Br=Gjr(r.shape,r.strides,e.strides),W=Br.sh,K=Br.sx,rr=Br.sy,i=Djr(r.dtype,e.dtype),tr=r.offset,ar=e.offset,a=r.data,n=e.data,u=K[0],g=rr[0],Pr=W[8];Pr>0;)for(Pr<i?(ur=Pr,Pr=0):(ur=i,Pr-=i),F=tr+Pr*K[8],G=ar+Pr*rr[8],Vr=W[7];Vr>0;)for(Vr<i?(er=Vr,Vr=0):(er=i,Vr-=i),y=K[8]-er*K[7],S=rr[8]-er*rr[7],_=F+Vr*K[7],B=G+Vr*rr[7],Cr=W[6];Cr>0;)for(Cr<i?($=Cr,Cr=0):($=i,Cr-=i),m=K[7]-$*K[6],T=rr[7]-$*rr[6],M=_+Cr*K[6],C=B+Cr*rr[6],Jr=W[5];Jr>0;)for(Jr<i?(Y=Jr,Jr=0):(Y=i,Jr-=i),p=K[6]-Y*K[5],b=rr[6]-Y*rr[5],P=M+Jr*K[5],R=C+Jr*rr[5],kr=W[4];kr>0;)for(kr<i?(J=kr,kr=0):(J=i,kr-=i),l=K[5]-J*K[4],A=rr[5]-J*rr[4],E=P+kr*K[4],k=R+kr*rr[4],Fr=W[3];Fr>0;)for(Fr<i?(Q=Fr,Fr=0):(Q=i,Fr-=i),c=K[4]-Q*K[3],w=rr[4]-Q*rr[3],I=E+Fr*K[3],U=k+Fr*rr[3],Er=W[2];Er>0;)for(Er<i?(Z=Er,Er=0):(Z=i,Er-=i),f=K[3]-Z*K[2],q=rr[3]-Z*rr[2],N=I+Er*K[2],L=U+Er*rr[2],Tr=W[1];Tr>0;)for(Tr<i?(x=Tr,Tr=0):(x=i,Tr-=i),v=K[2]-x*K[1],h=rr[2]-x*rr[1],O=N+Tr*K[1],j=L+Tr*rr[1],_r=W[0];_r>0;)for(_r<i?(X=_r,_r=0):(X=i,_r-=i),fr=O+_r*K[0],ir=j+_r*rr[0],o=K[1]-X*K[0],d=rr[1]-X*rr[0],Mr=0;Mr<ur;Mr++){for(jr=0;jr<er;jr++){for(yr=0;yr<$;yr++){for(dr=0;dr<Y;dr++){for(gr=0;gr<J;gr++){for(cr=0;cr<Q;cr++){for(or=0;or<Z;or++){for(sr=0;sr<x;sr++){for(nr=0;nr<X;nr++)n[ir]=t(a[fr]),fr+=u,ir+=g;fr+=o,ir+=d}fr+=v,ir+=h}fr+=f,ir+=q}fr+=c,ir+=w}fr+=l,ir+=A}fr+=p,ir+=b}fr+=m,ir+=T}fr+=y,ir+=S}}RI.exports=Hjr});var FI=s((UFe,PI)=>{"use strict";var zjr=ne(),Wjr=se();function Xjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,_r,Tr,Er,Fr,kr,Jr,Cr,Vr,Pr,Br,Xr,Kr,fe,ce,le,pe,Ce;for(Ce=zjr(r.shape,r.strides,e.strides),Q=Ce.sh,ir=Ce.sx,nr=Ce.sy,i=Wjr(r.dtype,e.dtype),sr=r.offset,or=e.offset,a=r.data,n=e.data,u=ir[0],d=nr[0],pe=Q[9];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),U=sr+pe*ir[9],Z=or+pe*nr[9],le=Q[8];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=ir[9]-ar*ir[8],N=nr[9]-ar*nr[8],L=U+le*ir[8],x=Z+le*nr[8],ce=Q[7];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=ir[8]-tr*ir[7],O=nr[8]-tr*nr[7],j=L+ce*ir[7],X=x+ce*nr[7],fe=Q[6];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=ir[7]-rr*ir[6],S=nr[7]-rr*nr[6],F=j+fe*ir[6],W=X+fe*nr[6],Kr=Q[5];Kr>0;)for(Kr<i?(K=Kr,Kr=0):(K=i,Kr-=i),p=ir[6]-K*ir[5],T=nr[6]-K*nr[5],_=F+Kr*ir[5],G=W+Kr*nr[5],Xr=Q[4];Xr>0;)for(Xr<i?(ur=Xr,Xr=0):(ur=i,Xr-=i),l=ir[5]-ur*ir[4],b=nr[5]-ur*nr[4],M=_+Xr*ir[4],B=G+Xr*nr[4],Br=Q[3];Br>0;)for(Br<i?(er=Br,Br=0):(er=i,Br-=i),c=ir[4]-er*ir[3],A=nr[4]-er*nr[3],P=M+Br*ir[3],C=B+Br*nr[3],Pr=Q[2];Pr>0;)for(Pr<i?($=Pr,Pr=0):($=i,Pr-=i),f=ir[3]-$*ir[2],w=nr[3]-$*nr[2],E=P+Pr*ir[2],R=C+Pr*nr[2],Vr=Q[1];Vr>0;)for(Vr<i?(Y=Vr,Vr=0):(Y=i,Vr-=i),v=ir[2]-Y*ir[1],q=nr[2]-Y*nr[1],I=E+Vr*ir[1],k=R+Vr*nr[1],Cr=Q[0];Cr>0;)for(Cr<i?(J=Cr,Cr=0):(J=i,Cr-=i),cr=I+Cr*ir[0],gr=k+Cr*nr[0],o=ir[1]-J*ir[0],h=nr[1]-J*nr[0],Jr=0;Jr<fr;Jr++){for(kr=0;kr<ar;kr++){for(Fr=0;Fr<tr;Fr++){for(Er=0;Er<rr;Er++){for(Tr=0;Tr<K;Tr++){for(_r=0;_r<ur;_r++){for(Mr=0;Mr<er;Mr++){for(jr=0;jr<$;jr++){for(yr=0;yr<Y;yr++){for(dr=0;dr<J;dr++)n[gr]=t(a[cr]),cr+=u,gr+=d;cr+=o,gr+=h}cr+=v,gr+=q}cr+=f,gr+=w}cr+=c,gr+=A}cr+=l,gr+=b}cr+=p,gr+=T}cr+=m,gr+=S}cr+=y,gr+=O}cr+=g,gr+=N}}PI.exports=Xjr});var MI=s((GFe,jI)=>{"use strict";function Jjr(r,e,t){e.accessors[1](e.data,e.offset,t(r.accessors[0](r.data,r.offset)))}jI.exports=Jjr});var kI=s((DFe,BI)=>{"use strict";function Yjr(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(f=r.shape[0],o=r.strides[0],v=e.strides[0],c=r.offset,l=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],p=0;p<f;p++)u(a,l,t(n(i,c))),c+=o,l+=v}BI.exports=Yjr});var VI=s((HFe,CI)=>{"use strict";function xjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;for(l=r.shape,y=r.strides,g=e.strides,r.order==="row-major"?(p=l[1],m=l[0],o=y[1],v=y[0]-p*y[1],f=g[1],c=g[0]-p*g[1]):(p=l[0],m=l[1],o=y[0],v=y[1]-p*y[0],f=g[0],c=g[1]-p*g[0]),d=r.offset,h=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],w=0;w<m;w++){for(q=0;q<p;q++)u(a,h,t(n(i,d))),d+=o,h+=f;d+=v,h+=c}}CI.exports=xjr});var GI=s((zFe,UI)=>{"use strict";function Zjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S;for(m=r.shape,h=r.strides,q=e.strides,r.order==="row-major"?(y=m[2],g=m[1],d=m[0],o=h[2],v=h[1]-y*h[2],f=h[0]-g*h[1],c=q[2],l=q[1]-y*q[2],p=q[0]-g*q[1]):(y=m[0],g=m[1],d=m[2],o=h[0],v=h[1]-y*h[0],f=h[2]-g*h[1],c=q[0],l=q[1]-y*q[0],p=q[2]-g*q[1]),w=r.offset,A=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],S=0;S<d;S++){for(T=0;T<g;T++){for(b=0;b<y;b++)u(a,A,t(n(i,w))),w+=o,A+=c;w+=v,A+=l}w+=f,A+=p}}UI.exports=Zjr});var HI=s((WFe,DI)=>{"use strict";function $jr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E;for(g=r.shape,A=r.strides,b=e.strides,r.order==="row-major"?(d=g[3],h=g[2],q=g[1],w=g[0],o=A[3],v=A[2]-d*A[3],f=A[1]-h*A[2],c=A[0]-q*A[1],l=b[3],p=b[2]-d*b[3],m=b[1]-h*b[2],y=b[0]-q*b[1]):(d=g[0],h=g[1],q=g[2],w=g[3],o=A[0],v=A[1]-d*A[0],f=A[2]-h*A[1],c=A[3]-q*A[2],l=b[0],p=b[1]-d*b[0],m=b[2]-h*b[1],y=b[3]-q*b[2]),T=r.offset,S=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],E=0;E<w;E++){for(I=0;I<q;I++){for(N=0;N<h;N++){for(O=0;O<d;O++)u(a,S,t(n(i,T))),T+=o,S+=l;T+=v,S+=p}T+=f,S+=m}T+=c,S+=y}}DI.exports=$jr});var WI=s((XFe,zI)=>{"use strict";function Qjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F;for(h=r.shape,S=r.strides,O=e.strides,r.order==="row-major"?(q=h[4],w=h[3],A=h[2],b=h[1],T=h[0],o=S[4],v=S[3]-q*S[4],f=S[2]-w*S[3],c=S[1]-A*S[2],l=S[0]-b*S[1],p=O[4],m=O[3]-q*O[4],y=O[2]-w*O[3],g=O[1]-A*O[2],d=O[0]-b*O[1]):(q=h[0],w=h[1],A=h[2],b=h[3],T=h[4],o=S[0],v=S[1]-q*S[0],f=S[2]-w*S[1],c=S[3]-A*S[2],l=S[4]-b*S[3],p=O[0],m=O[1]-q*O[0],y=O[2]-w*O[1],g=O[3]-A*O[2],d=O[4]-b*O[3]),N=r.offset,I=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],F=0;F<T;F++){for(_=0;_<b;_++){for(M=0;M<A;M++){for(P=0;P<w;P++){for(E=0;E<q;E++)u(a,I,t(n(i,N))),N+=o,I+=p;N+=v,I+=m}N+=f,I+=y}N+=c,I+=g}N+=l,I+=d}}zI.exports=Qjr});var JI=s((JFe,XI)=>{"use strict";function Kjr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k;for(w=r.shape,I=r.strides,E=e.strides,r.order==="row-major"?(A=w[5],b=w[4],T=w[3],S=w[2],O=w[1],N=w[0],o=I[5],v=I[4]-A*I[5],f=I[3]-b*I[4],c=I[2]-T*I[3],l=I[1]-S*I[2],p=I[0]-O*I[1],m=E[5],y=E[4]-A*E[5],g=E[3]-b*E[4],d=E[2]-T*E[3],h=E[1]-S*E[2],q=E[0]-O*E[1]):(A=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],o=I[0],v=I[1]-A*I[0],f=I[2]-b*I[1],c=I[3]-T*I[2],l=I[4]-S*I[3],p=I[5]-O*I[4],m=E[0],y=E[1]-A*E[0],g=E[2]-b*E[1],d=E[3]-T*E[2],h=E[4]-S*E[3],q=E[5]-O*E[4]),P=r.offset,M=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],k=0;k<N;k++){for(U=0;U<O;U++){for(L=0;L<S;L++){for(j=0;j<T;j++){for(F=0;F<b;F++){for(_=0;_<A;_++)u(a,M,t(n(i,P))),P+=o,M+=m;P+=v,M+=y}P+=f,M+=g}P+=c,M+=d}P+=l,M+=h}P+=p,M+=q}}XI.exports=Kjr});var xI=s((YFe,YI)=>{"use strict";function rMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G;for(b=r.shape,M=r.strides,_=e.strides,r.order==="row-major"?(T=b[6],S=b[5],O=b[4],N=b[3],I=b[2],E=b[1],P=b[0],o=M[6],v=M[5]-T*M[6],f=M[4]-S*M[5],c=M[3]-O*M[4],l=M[2]-N*M[3],p=M[1]-I*M[2],m=M[0]-E*M[1],y=_[6],g=_[5]-T*_[6],d=_[4]-S*_[5],h=_[3]-O*_[4],q=_[2]-N*_[3],w=_[1]-I*_[2],A=_[0]-E*_[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],P=b[6],o=M[0],v=M[1]-T*M[0],f=M[2]-S*M[1],c=M[3]-O*M[2],l=M[4]-N*M[3],p=M[5]-I*M[4],m=M[6]-E*M[5],y=_[0],g=_[1]-T*_[0],d=_[2]-S*_[1],h=_[3]-O*_[2],q=_[4]-N*_[3],w=_[5]-I*_[4],A=_[6]-E*_[5]),F=r.offset,j=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],G=0;G<P;G++){for(B=0;B<E;B++){for(C=0;C<I;C++){for(R=0;R<N;R++){for(k=0;k<O;k++){for(U=0;U<S;U++){for(L=0;L<T;L++)u(a,j,t(n(i,F))),F+=o,j+=y;F+=v,j+=g}F+=f,j+=d}F+=c,j+=h}F+=l,j+=q}F+=p,j+=w}F+=m,j+=A}}YI.exports=rMr});var $I=s((xFe,ZI)=>{"use strict";function eMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z;for(S=r.shape,j=r.strides,L=e.strides,r.order==="row-major"?(O=S[7],N=S[6],I=S[5],E=S[4],P=S[3],M=S[2],_=S[1],F=S[0],o=j[7],v=j[6]-O*j[7],f=j[5]-N*j[6],c=j[4]-I*j[5],l=j[3]-E*j[4],p=j[2]-P*j[3],m=j[1]-M*j[2],y=j[0]-_*j[1],g=L[7],d=L[6]-O*L[7],h=L[5]-N*L[6],q=L[4]-I*L[5],w=L[3]-E*L[4],A=L[2]-P*L[3],b=L[1]-M*L[2],T=L[0]-_*L[1]):(O=S[0],N=S[1],I=S[2],E=S[3],P=S[4],M=S[5],_=S[6],F=S[7],o=j[0],v=j[1]-O*j[0],f=j[2]-N*j[1],c=j[3]-I*j[2],l=j[4]-E*j[3],p=j[5]-P*j[4],m=j[6]-M*j[5],y=j[7]-_*j[6],g=L[0],d=L[1]-O*L[0],h=L[2]-N*L[1],q=L[3]-I*L[2],w=L[4]-E*L[3],A=L[5]-P*L[4],b=L[6]-M*L[5],T=L[7]-_*L[6]),U=r.offset,k=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],Z=0;Z<F;Z++){for(x=0;x<_;x++){for(X=0;X<M;X++){for(W=0;W<P;W++){for(G=0;G<E;G++){for(B=0;B<I;B++){for(C=0;C<N;C++){for(R=0;R<O;R++)u(a,k,t(n(i,U))),U+=o,k+=g;U+=v,k+=d}U+=f,k+=h}U+=c,k+=q}U+=l,k+=w}U+=p,k+=A}U+=m,k+=b}U+=y,k+=T}}ZI.exports=eMr});var KI=s((ZFe,QI)=>{"use strict";function tMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$;for(N=r.shape,k=r.strides,R=e.strides,r.order==="row-major"?(I=N[8],E=N[7],P=N[6],M=N[5],_=N[4],F=N[3],j=N[2],L=N[1],U=N[0],o=k[8],v=k[7]-I*k[8],f=k[6]-E*k[7],c=k[5]-P*k[6],l=k[4]-M*k[5],p=k[3]-_*k[4],m=k[2]-F*k[3],y=k[1]-j*k[2],g=k[0]-L*k[1],d=R[8],h=R[7]-I*R[8],q=R[6]-E*R[7],w=R[5]-P*R[6],A=R[4]-M*R[5],b=R[3]-_*R[4],T=R[2]-F*R[3],S=R[1]-j*R[2],O=R[0]-L*R[1]):(I=N[0],E=N[1],P=N[2],M=N[3],_=N[4],F=N[5],j=N[6],L=N[7],U=N[8],o=k[0],v=k[1]-I*k[0],f=k[2]-E*k[1],c=k[3]-P*k[2],l=k[4]-M*k[3],p=k[5]-_*k[4],m=k[6]-F*k[5],y=k[7]-j*k[6],g=k[8]-L*k[7],d=R[0],h=R[1]-I*R[0],q=R[2]-E*R[1],w=R[3]-P*R[2],A=R[4]-M*R[3],b=R[5]-_*R[4],T=R[6]-F*R[5],S=R[7]-j*R[6],O=R[8]-L*R[7]),C=r.offset,B=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],$=0;$<U;$++){for(Y=0;Y<L;Y++){for(J=0;J<j;J++){for(Q=0;Q<F;Q++){for(Z=0;Z<_;Z++){for(x=0;x<M;x++){for(X=0;X<P;X++){for(W=0;W<E;W++){for(G=0;G<I;G++)u(a,B,t(n(i,C))),C+=o,B+=d;C+=v,B+=h}C+=f,B+=q}C+=c,B+=w}C+=l,B+=A}C+=p,B+=b}C+=m,B+=T}C+=y,B+=S}C+=g,B+=O}}QI.exports=tMr});var eR=s(($Fe,rR)=>{"use strict";function iMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur,K,rr;for(E=r.shape,B=r.strides,G=e.strides,r.order==="row-major"?(P=E[9],M=E[8],_=E[7],F=E[6],j=E[5],L=E[4],U=E[3],k=E[2],R=E[1],C=E[0],o=B[9],v=B[8]-P*B[9],f=B[7]-M*B[8],c=B[6]-_*B[7],l=B[5]-F*B[6],p=B[4]-j*B[5],m=B[3]-L*B[4],y=B[2]-U*B[3],g=B[1]-k*B[2],d=B[0]-R*B[1],h=G[9],q=G[8]-P*G[9],w=G[7]-M*G[8],A=G[6]-_*G[7],b=G[5]-F*G[6],T=G[4]-j*G[5],S=G[3]-L*G[4],O=G[2]-U*G[3],N=G[1]-k*G[2],I=G[0]-R*G[1]):(P=E[0],M=E[1],_=E[2],F=E[3],j=E[4],L=E[5],U=E[6],k=E[7],R=E[8],C=E[9],o=B[0],v=B[1]-P*B[0],f=B[2]-M*B[1],c=B[3]-_*B[2],l=B[4]-F*B[3],p=B[5]-j*B[4],m=B[6]-L*B[5],y=B[7]-U*B[6],g=B[8]-k*B[7],d=B[9]-R*B[8],h=G[0],q=G[1]-P*G[0],w=G[2]-M*G[1],A=G[3]-_*G[2],b=G[4]-F*G[3],T=G[5]-j*G[4],S=G[6]-L*G[5],O=G[7]-U*G[6],N=G[8]-k*G[7],I=G[9]-R*G[8]),W=r.offset,X=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],rr=0;rr<C;rr++){for(K=0;K<R;K++){for(ur=0;ur<k;ur++){for(er=0;er<U;er++){for($=0;$<L;$++){for(Y=0;Y<j;Y++){for(J=0;J<F;J++){for(Q=0;Q<_;Q++){for(Z=0;Z<M;Z++){for(x=0;x<P;x++)u(a,X,t(n(i,W))),W+=o,X+=h;W+=v,X+=q}W+=f,X+=w}W+=c,X+=A}W+=l,X+=b}W+=p,X+=T}W+=m,X+=S}W+=y,X+=O}W+=g,X+=N}W+=d,X+=I}}rR.exports=iMr});var iR=s((QFe,tR)=>{"use strict";var aMr=V();function nMr(r,e,t,i,a,n){var u,o,v,f,c;for(u=r.length,o=1,c=0;c<u;c++)o*=r[c];if(n==="clamp")a<0?a=0:a>=o&&(a=o-1);else if(n==="wrap")a<0?(a+=o,a<0&&(a%=o,a!==0&&(a+=o))):a>=o&&(a-=o,a>=o&&(a%=o));else if(a<0||a>=o)throw new RangeError(aMr("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",o,a));if(v=t,i==="column-major"){for(c=0;c<u;c++)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}for(c=u-1;c>=0;c--)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}tR.exports=nMr});var n3=s((KFe,aR)=>{"use strict";var sMr=iR();aR.exports=sMr});var oR=s((rje,uR)=>{"use strict";var uMr=lt(),nR=n3(),sR="throw";function oMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(c=r.shape,o=uMr(c),i=r.data,a=e.data,l=r.strides,p=e.strides,m=r.offset,y=e.offset,n=r.order,u=e.order,v=r.accessors[0],f=e.accessors[1],h=0;h<o;h++)g=nR(c,l,m,n,h,sR),d=nR(c,p,y,u,h,sR),f(a,d,t(v(i,g)))}uR.exports=oMr});var fR=s((eje,vR)=>{"use strict";function vMr(r,e,t){e.data[e.offset]=t(r.data[r.offset])}vR.exports=vMr});var lR=s((tje,cR)=>{"use strict";function fMr(r,e,t){var i,a,n,u,o,v,f,c;for(o=r.shape[0],n=r.strides[0],u=e.strides[0],v=r.offset,f=e.offset,i=r.data,a=e.data,c=0;c<o;c++)a[f]=t(i[v]),v+=n,f+=u}cR.exports=fMr});var dR=s((ije,pR)=>{"use strict";function cMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(f=r.shape,p=r.strides,m=e.strides,r.order==="row-major"?(c=f[1],l=f[0],n=p[1],u=p[0]-c*p[1],o=m[1],v=m[0]-c*m[1]):(c=f[0],l=f[1],n=p[0],u=p[1]-c*p[0],o=m[0],v=m[1]-c*m[0]),y=r.offset,g=e.offset,i=r.data,a=e.data,h=0;h<l;h++){for(d=0;d<c;d++)a[g]=t(i[y]),y+=n,g+=o;y+=u,g+=v}}pR.exports=cMr});var mR=s((aje,gR)=>{"use strict";function lMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b;for(l=r.shape,g=r.strides,d=e.strides,r.order==="row-major"?(p=l[2],m=l[1],y=l[0],n=g[2],u=g[1]-p*g[2],o=g[0]-m*g[1],v=d[2],f=d[1]-p*d[2],c=d[0]-m*d[1]):(p=l[0],m=l[1],y=l[2],n=g[0],u=g[1]-p*g[0],o=g[2]-m*g[1],v=d[0],f=d[1]-p*d[0],c=d[2]-m*d[1]),h=r.offset,q=e.offset,i=r.data,a=e.data,b=0;b<y;b++){for(A=0;A<m;A++){for(w=0;w<p;w++)a[q]=t(i[h]),h+=n,q+=v;h+=u,q+=f}h+=o,q+=c}}gR.exports=lMr});var hR=s((nje,yR)=>{"use strict";function pMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N;for(m=r.shape,q=r.strides,w=e.strides,r.order==="row-major"?(y=m[3],g=m[2],d=m[1],h=m[0],n=q[3],u=q[2]-y*q[3],o=q[1]-g*q[2],v=q[0]-d*q[1],f=w[3],c=w[2]-y*w[3],l=w[1]-g*w[2],p=w[0]-d*w[1]):(y=m[0],g=m[1],d=m[2],h=m[3],n=q[0],u=q[1]-y*q[0],o=q[2]-g*q[1],v=q[3]-d*q[2],f=w[0],c=w[1]-y*w[0],l=w[2]-g*w[1],p=w[3]-d*w[2]),A=r.offset,b=e.offset,i=r.data,a=e.data,N=0;N<h;N++){for(O=0;O<d;O++){for(S=0;S<g;S++){for(T=0;T<y;T++)a[b]=t(i[A]),A+=n,b+=f;A+=u,b+=c}A+=o,b+=l}A+=v,b+=p}}yR.exports=pMr});var bR=s((sje,qR)=>{"use strict";function dMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M;for(g=r.shape,b=r.strides,T=e.strides,r.order==="row-major"?(d=g[4],h=g[3],q=g[2],w=g[1],A=g[0],n=b[4],u=b[3]-d*b[4],o=b[2]-h*b[3],v=b[1]-q*b[2],f=b[0]-w*b[1],c=T[4],l=T[3]-d*T[4],p=T[2]-h*T[3],m=T[1]-q*T[2],y=T[0]-w*T[1]):(d=g[0],h=g[1],q=g[2],w=g[3],A=g[4],n=b[0],u=b[1]-d*b[0],o=b[2]-h*b[1],v=b[3]-q*b[2],f=b[4]-w*b[3],c=T[0],l=T[1]-d*T[0],p=T[2]-h*T[1],m=T[3]-q*T[2],y=T[4]-w*T[3]),S=r.offset,O=e.offset,i=r.data,a=e.data,M=0;M<A;M++){for(P=0;P<w;P++){for(E=0;E<q;E++){for(I=0;I<h;I++){for(N=0;N<d;N++)a[O]=t(i[S]),S+=n,O+=c;S+=u,O+=l}S+=o,O+=p}S+=v,O+=m}S+=f,O+=y}}qR.exports=dMr});var ER=s((uje,wR)=>{"use strict";function gMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L;for(h=r.shape,O=r.strides,N=e.strides,r.order==="row-major"?(q=h[5],w=h[4],A=h[3],b=h[2],T=h[1],S=h[0],n=O[5],u=O[4]-q*O[5],o=O[3]-w*O[4],v=O[2]-A*O[3],f=O[1]-b*O[2],c=O[0]-T*O[1],l=N[5],p=N[4]-q*N[5],m=N[3]-w*N[4],y=N[2]-A*N[3],g=N[1]-b*N[2],d=N[0]-T*N[1]):(q=h[0],w=h[1],A=h[2],b=h[3],T=h[4],S=h[5],n=O[0],u=O[1]-q*O[0],o=O[2]-w*O[1],v=O[3]-A*O[2],f=O[4]-b*O[3],c=O[5]-T*O[4],l=N[0],p=N[1]-q*N[0],m=N[2]-w*N[1],y=N[3]-A*N[2],g=N[4]-b*N[3],d=N[5]-T*N[4]),I=r.offset,E=e.offset,i=r.data,a=e.data,L=0;L<S;L++){for(j=0;j<T;j++){for(F=0;F<b;F++){for(_=0;_<A;_++){for(M=0;M<w;M++){for(P=0;P<q;P++)a[E]=t(i[I]),I+=n,E+=l;I+=u,E+=p}I+=o,E+=m}I+=v,E+=y}I+=f,E+=g}I+=c,E+=d}}wR.exports=gMr});var SR=s((oje,NR)=>{"use strict";function mMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C;for(w=r.shape,E=r.strides,P=e.strides,r.order==="row-major"?(A=w[6],b=w[5],T=w[4],S=w[3],O=w[2],N=w[1],I=w[0],n=E[6],u=E[5]-A*E[6],o=E[4]-b*E[5],v=E[3]-T*E[4],f=E[2]-S*E[3],c=E[1]-O*E[2],l=E[0]-N*E[1],p=P[6],m=P[5]-A*P[6],y=P[4]-b*P[5],g=P[3]-T*P[4],d=P[2]-S*P[3],h=P[1]-O*P[2],q=P[0]-N*P[1]):(A=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],I=w[6],n=E[0],u=E[1]-A*E[0],o=E[2]-b*E[1],v=E[3]-T*E[2],f=E[4]-S*E[3],c=E[5]-O*E[4],l=E[6]-N*E[5],p=P[0],m=P[1]-A*P[0],y=P[2]-b*P[1],g=P[3]-T*P[2],d=P[4]-S*P[3],h=P[5]-O*P[4],q=P[6]-N*P[5]),M=r.offset,_=e.offset,i=r.data,a=e.data,C=0;C<I;C++){for(R=0;R<N;R++){for(k=0;k<O;k++){for(U=0;U<S;U++){for(L=0;L<T;L++){for(j=0;j<b;j++){for(F=0;F<A;F++)a[_]=t(i[M]),M+=n,_+=p;M+=u,_+=m}M+=o,_+=y}M+=v,_+=g}M+=f,_+=d}M+=c,_+=h}M+=l,_+=q}}NR.exports=mMr});var AR=s((vje,OR)=>{"use strict";function yMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X;for(b=r.shape,_=r.strides,F=e.strides,r.order==="row-major"?(T=b[7],S=b[6],O=b[5],N=b[4],I=b[3],E=b[2],P=b[1],M=b[0],n=_[7],u=_[6]-T*_[7],o=_[5]-S*_[6],v=_[4]-O*_[5],f=_[3]-N*_[4],c=_[2]-I*_[3],l=_[1]-E*_[2],p=_[0]-P*_[1],m=F[7],y=F[6]-T*F[7],g=F[5]-S*F[6],d=F[4]-O*F[5],h=F[3]-N*F[4],q=F[2]-I*F[3],w=F[1]-E*F[2],A=F[0]-P*F[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],P=b[6],M=b[7],n=_[0],u=_[1]-T*_[0],o=_[2]-S*_[1],v=_[3]-O*_[2],f=_[4]-N*_[3],c=_[5]-I*_[4],l=_[6]-E*_[5],p=_[7]-P*_[6],m=F[0],y=F[1]-T*F[0],g=F[2]-S*F[1],d=F[3]-O*F[2],h=F[4]-N*F[3],q=F[5]-I*F[4],w=F[6]-E*F[5],A=F[7]-P*F[6]),j=r.offset,L=e.offset,i=r.data,a=e.data,X=0;X<M;X++){for(W=0;W<P;W++){for(G=0;G<E;G++){for(B=0;B<I;B++){for(C=0;C<N;C++){for(R=0;R<O;R++){for(k=0;k<S;k++){for(U=0;U<T;U++)a[L]=t(i[j]),j+=n,L+=m;j+=u,L+=y}j+=o,L+=g}j+=v,L+=d}j+=f,L+=h}j+=c,L+=q}j+=l,L+=w}j+=p,L+=A}}OR.exports=yMr});var TR=s((fje,_R)=>{"use strict";function hMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J;for(S=r.shape,L=r.strides,U=e.strides,r.order==="row-major"?(O=S[8],N=S[7],I=S[6],E=S[5],P=S[4],M=S[3],_=S[2],F=S[1],j=S[0],n=L[8],u=L[7]-O*L[8],o=L[6]-N*L[7],v=L[5]-I*L[6],f=L[4]-E*L[5],c=L[3]-P*L[4],l=L[2]-M*L[3],p=L[1]-_*L[2],m=L[0]-F*L[1],y=U[8],g=U[7]-O*U[8],d=U[6]-N*U[7],h=U[5]-I*U[6],q=U[4]-E*U[5],w=U[3]-P*U[4],A=U[2]-M*U[3],b=U[1]-_*U[2],T=U[0]-F*U[1]):(O=S[0],N=S[1],I=S[2],E=S[3],P=S[4],M=S[5],_=S[6],F=S[7],j=S[8],n=L[0],u=L[1]-O*L[0],o=L[2]-N*L[1],v=L[3]-I*L[2],f=L[4]-E*L[3],c=L[5]-P*L[4],l=L[6]-M*L[5],p=L[7]-_*L[6],m=L[8]-F*L[7],y=U[0],g=U[1]-O*U[0],d=U[2]-N*U[1],h=U[3]-I*U[2],q=U[4]-E*U[3],w=U[5]-P*U[4],A=U[6]-M*U[5],b=U[7]-_*U[6],T=U[8]-F*U[7]),k=r.offset,R=e.offset,i=r.data,a=e.data,J=0;J<j;J++){for(Q=0;Q<F;Q++){for(Z=0;Z<_;Z++){for(x=0;x<M;x++){for(X=0;X<P;X++){for(W=0;W<E;W++){for(G=0;G<I;G++){for(B=0;B<N;B++){for(C=0;C<O;C++)a[R]=t(i[k]),k+=n,R+=y;k+=u,R+=g}k+=o,R+=d}k+=v,R+=h}k+=f,R+=q}k+=c,R+=w}k+=l,R+=A}k+=p,R+=b}k+=m,R+=T}}_R.exports=hMr});var RR=s((cje,IR)=>{"use strict";function qMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,U,k,R,C,B,G,W,X,x,Z,Q,J,Y,$,er,ur;for(N=r.shape,R=r.strides,C=e.strides,r.order==="row-major"?(I=N[9],E=N[8],P=N[7],M=N[6],_=N[5],F=N[4],j=N[3],L=N[2],U=N[1],k=N[0],n=R[9],u=R[8]-I*R[9],o=R[7]-E*R[8],v=R[6]-P*R[7],f=R[5]-M*R[6],c=R[4]-_*R[5],l=R[3]-F*R[4],p=R[2]-j*R[3],m=R[1]-L*R[2],y=R[0]-U*R[1],g=C[9],d=C[8]-I*C[9],h=C[7]-E*C[8],q=C[6]-P*C[7],w=C[5]-M*C[6],A=C[4]-_*C[5],b=C[3]-F*C[4],T=C[2]-j*C[3],S=C[1]-L*C[2],O=C[0]-U*C[1]):(I=N[0],E=N[1],P=N[2],M=N[3],_=N[4],F=N[5],j=N[6],L=N[7],U=N[8],k=N[9],n=R[0],u=R[1]-I*R[0],o=R[2]-E*R[1],v=R[3]-P*R[2],f=R[4]-M*R[3],c=R[5]-_*R[4],l=R[6]-F*R[5],p=R[7]-j*R[6],m=R[8]-L*R[7],y=R[9]-U*R[8],g=C[0],d=C[1]-I*C[0],h=C[2]-E*C[1],q=C[3]-P*C[2],w=C[4]-M*C[3],A=C[5]-_*C[4],b=C[6]-F*C[5],T=C[7]-j*C[6],S=C[8]-L*C[7],O=C[9]-U*C[8]),B=r.offset,G=e.offset,i=r.data,a=e.data,ur=0;ur<k;ur++){for(er=0;er<U;er++){for($=0;$<L;$++){for(Y=0;Y<j;Y++){for(J=0;J<F;J++){for(Q=0;Q<_;Q++){for(Z=0;Z<M;Z++){for(x=0;x<P;x++){for(X=0;X<E;X++){for(W=0;W<I;W++)a[G]=t(i[B]),B+=n,G+=g;B+=u,G+=d}B+=o,G+=h}B+=v,G+=q}B+=f,G+=w}B+=c,G+=A}B+=l,G+=b}B+=p,G+=T}B+=m,G+=S}B+=y,G+=O}}IR.exports=qMr});var jR=s((lje,FR)=>{"use strict";var bMr=lt(),LR=n3(),PR="throw";function wMr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g;for(v=r.shape,o=bMr(v),i=r.data,a=e.data,f=r.strides,c=e.strides,l=r.offset,p=e.offset,n=r.order,u=e.order,g=0;g<o;g++)m=LR(v,f,l,n,g,PR),y=LR(v,c,p,u,g,PR),a[y]=t(i[m])}FR.exports=wMr});var UR=s((pje,VR)=>{"use strict";var MR=e3(),BR=ls(),kR=TT(),EMr=KT(),NMr=eI(),SMr=iI(),OMr=nI(),AMr=uI(),_Mr=vI(),TMr=cI(),IMr=pI(),RMr=gI(),LMr=yI(),PMr=qI(),FMr=wI(),jMr=NI(),MMr=OI(),BMr=_I(),kMr=II(),CMr=LI(),VMr=FI(),UMr=MI(),GMr=kI(),DMr=VI(),HMr=GI(),zMr=HI(),WMr=WI(),XMr=JI(),JMr=xI(),YMr=$I(),xMr=KI(),ZMr=eR(),$Mr=oR(),QMr=fR(),KMr=lR(),rBr=dR(),eBr=mR(),tBr=hR(),iBr=bR(),aBr=ER(),nBr=SR(),sBr=AR(),uBr=TR(),oBr=RR(),vBr=jR(),Ja=[QMr,KMr,rBr,eBr,tBr,iBr,aBr,nBr,sBr,uBr,oBr],Zn=[UMr,GMr,DMr,HMr,zMr,WMr,XMr,JMr,YMr,xMr,ZMr],fBr=[LMr,PMr,FMr,jMr,MMr,BMr,kMr,CMr,VMr],cBr=[EMr,NMr,SMr,OMr,AMr,_Mr,TMr,IMr,RMr],CR=Ja.length-1;function lBr(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(g=kR(r[0]),d=kR(r[1]),n=g.shape,u=d.shape,t=n.length,t!==u.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+t+". ndims(y) == "+u.length+".");if(t===0)return g.accessorProtocol||d.accessorProtocol?Zn[t](g,d,e):Ja[t](g,d,e);for(f=1,y=0,q=0;q<t;q++){if(h=n[q],h!==u[q])throw new Error("invalid arguments. Arrays must have the same shape.");f*=h,h===1&&(y+=1)}if(f!==0){if(t===1)return g.accessorProtocol||d.accessorProtocol?Zn[t](g,d,e):Ja[t](g,d,e);if(c=g.strides,l=d.strides,y===t-1){for(q=0;q<t&&n[q]===1;q++);return g.shape=[n[q]],d.shape=g.shape,g.strides=[c[q]],d.strides=[l[q]],g.accessorProtocol||d.accessorProtocol?Zn[1](g,d,e):Ja[1](g,d,e)}if(o=MR(c),v=MR(l),o!==0&&v!==0&&g.order===d.order){if(i=BR(n,c,g.offset),a=BR(u,l,d.offset),f===i[1]-i[0]+1&&f===a[1]-a[0]+1)return o===1?p=i[0]:p=i[1],v===1?m=a[0]:m=a[1],g.shape=[f],d.shape=g.shape,g.strides=[o],d.strides=[v],g.offset=p,d.offset=m,g.accessorProtocol||d.accessorProtocol?Zn[1](g,d,e):Ja[1](g,d,e);if(t<=CR)return g.accessorProtocol||d.accessorProtocol?Zn[t](g,d,e):Ja[t](g,d,e)}if(t<=CR)return g.accessorProtocol||d.accessorProtocol?cBr[t-2](g,d,e):fBr[t-2](g,d,e);if(g.accessorProtocol||d.accessorProtocol)return $Mr(g,d,e);vBr(g,d,e)}}VR.exports=lBr});var DR=s((dje,GR)=>{"use strict";var pBr=UR();GR.exports=pBr});var zR=s((gje,HR)=>{"use strict";var dBr=DR(),gBr=V(),mBr=Fs();function yBr(r,e){var t,i,a,n,u;for(t={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},i=r[0],a=r[1],u=2;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")t[n]=r[u+1];else throw new Error(gBr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return dBr([i,a],mBr(e,t)),a}HR.exports=yBr});var XR=s((mje,WR)=>{"use strict";var hBr=zR();WR.exports=hBr});var YR=s((yje,JR)=>{"use strict";var qBr=Qr(),bBr=XR();function wBr(r){return qBr(r,"unary",bBr),r}JR.exports=wBr});var ZR=s((hje,xR)=>{"use strict";var St=Qr(),EBr=Z_(),NBr=Fs(),SBr=$v(),OBr=r3(),ABr=sT(),_Br=fT(),TBr=dT(),IBr=hT(),RBr=YR();function LBr(r){return St(r,"binary",EBr),St(r,"d_d",NBr),St(r,"dd_d",SBr),St(r,"ddd_d",OBr),St(r,"dddd_d",ABr),St(r,"ddddd_d",_Br),St(r,"ternary",TBr),St(r,"unary",IBr),St(r,"ndarray",RBr({})),r}xR.exports=LBr});var QR=s((qje,$R)=>{"use strict";function PBr(r){return r*r}$R.exports=PBr});var Bs=s((bje,KR)=>{"use strict";var FBr=QR();KR.exports=FBr});var ks=s((wje,rL)=>{"use strict";var jBr=.7853981633974483;rL.exports=jBr});var tL=s((Eje,eL)=>{"use strict";function MBr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}eL.exports=MBr});var aL=s((Nje,iL)=>{"use strict";function BBr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}iL.exports=BBr});var uL=s((Sje,sL)=>{"use strict";var kBr=z(),CBr=Rr(),nL=ks(),VBr=tL(),UBr=aL(),GBr=6123233995736766e-32;function DBr(r){var e,t,i,a,n;if(kBr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,a=t*UBr(t),t=CBr(t+t),n=nL-t,t=t*a-GBr,n-=t,n+=nL;else{if(i<1e-8)return r;t=i*i,n=t*VBr(t),n=i*n+i}return e?-n:n}sL.exports=DBr});var ua=s((Oje,oL)=>{"use strict";var HBr=uL();oL.exports=HBr});var lL=s((Aje,cL)=>{"use strict";var zBr=z(),vL=ua(),WBr=Rr(),fL=ks(),XBr=6123233995736766e-32;function JBr(r){var e;return zBr(r)?NaN:r<-1||r>1?NaN:r>.5?2*vL(WBr(.5-.5*r)):(e=fL-vL(r),e+=XBr,e+=fL,e)}cL.exports=JBr});var $n=s((_je,pL)=>{"use strict";var YBr=lL();pL.exports=YBr});var gL=s((Tje,dL)=>{"use strict";function xBr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}dL.exports=xBr});var bL=s((Ije,qL)=>{"use strict";var ZBr=z(),mL=ae(),yL=Et(),$Br=pr(),QBr=Ir(),hL=ct(),KBr=gL(),s3=.6931471803691238,u3=19082149292705877e-26,rkr=.41421356237309503,ekr=-.2928932188134525,tkr=1862645149230957e-24,ikr=5551115123125783e-32,akr=9007199254740992,nkr=.6666666666666666;function skr(r){var e,t,i,a,n,u,o,v,f,c;if(r<-1||ZBr(r))return NaN;if(r===-1)return QBr;if(r===$Br||r===0)return r;if(r<0?i=-r:i=r,c=1,i<rkr){if(i<tkr)return i<ikr?r:r-r*r*.5;r>ekr&&(c=0,a=r,t=1)}return c!==0&&(i<akr?(f=1+r,t=mL(f),c=(t>>20)-hL,c>0?n=1-(f-r):n=r-(f-1),n/=f):(f=r,t=mL(f),c=(t>>20)-hL,n=0),t&=1048575,t<434334?f=yL(f,t|1072693248):(c+=1,f=yL(f,t|1071644672),t=1048576-t>>2),a=f-1),e=.5*a*a,t===0?a===0?(n+=c*u3,c*s3+n):(v=e*(1-nkr*a),c*s3-(v-(c*u3+n)-a)):(u=a/(2+a),o=u*u,v=o*KBr(o),c===0?a-(e-u*(e+v)):c*s3-(e-(u*(e+v)+(c*u3+n))-a))}qL.exports=skr});var di=s((Rje,wL)=>{"use strict";var ukr=bL();wL.exports=ukr});var NL=s((Lje,EL)=>{"use strict";function okr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}EL.exports=okr});var OL=s((Pje,SL)=>{"use strict";function vkr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}SL.exports=vkr});var IL=s((Fje,TL)=>{"use strict";var AL=ae(),fkr=Et(),ckr=z(),lkr=ct(),pkr=Ir(),dkr=NL(),gkr=OL(),Cs=.6931471803691238,Vs=19082149292705877e-26,mkr=0x40000000000000,ykr=.3333333333333333,_L=1048575,hkr=2146435072,qkr=1048576,bkr=1072693248;function wkr(r){var e,t,i,a,n,u,o,v,f,c,l,p;return r===0?pkr:ckr(r)||r<0?NaN:(t=AL(r),n=0,t<qkr&&(n-=54,r*=mkr,t=AL(r)),t>=hkr?r+r:(n+=(t>>20)-lkr|0,t&=_L,v=t+614244&1048576|0,r=fkr(r,t|v^bkr),n+=v>>20|0,o=r-1,(_L&2+t)<3?o===0?n===0?0:n*Cs+n*Vs:(u=o*o*(.5-ykr*o),n===0?o-u:n*Cs-(u-n*Vs-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,a=l*dkr(l),i=p*gkr(l),v|=f,u=i+a,v>0?(e=.5*o*o,n===0?o-(e-c*(e+u)):n*Cs-(e-(c*(e+u)+n*Vs)-o)):n===0?o-c*(o-u):n*Cs-(c*(o-u)-n*Vs-o))))}TL.exports=wkr});var wr=s((jje,RL)=>{"use strict";var Ekr=IL();RL.exports=Ekr});var jL=s((Mje,FL)=>{"use strict";var Nkr=z(),Skr=di(),LL=Rr(),Okr=zn(),PL=wr(),Akr=1<<28;function _kr(r){var e;return Nkr(r)||r<1?NaN:r===1?0:r>=Akr?PL(r)+Okr:r>2?PL(2*r-1/(r+LL(r*r-1))):(e=r-1,Skr(e+LL(2*e+e*e)))}FL.exports=_kr});var BL=s((Bje,ML)=>{"use strict";var Tkr=jL();ML.exports=Tkr});var Ya=s((kje,kL)=>{"use strict";var Ikr=1.5707963267948966;kL.exports=Ikr});var VL=s((Cje,CL)=>{"use strict";function Rkr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}CL.exports=Rkr});var GL=s((Vje,UL)=>{"use strict";function Lkr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}UL.exports=Lkr});var zL=s((Uje,HL)=>{"use strict";var Pkr=z(),Fkr=pr(),o3=Ya(),jkr=ks(),Mkr=Ir(),Bkr=VL(),kkr=GL(),DL=6123233995736766e-32,Ckr=2.414213562373095;function Vkr(r){var e,t,i,a;return Pkr(r)||r===0?r:r===Fkr?o3:r===Mkr?-o3:(r<0&&(t=!0,r=-r),e=0,r>Ckr?(i=o3,e=1,r=-(1/r)):r<=.66?i=0:(i=jkr,e=2,r=(r-1)/(r+1)),a=r*r,a=a*Bkr(a)/kkr(a),a=r*a+r,e===2?a+=.5*DL:e===1&&(a+=DL),i+=a,t?-i:i)}HL.exports=Vkr});var Us=s((Gje,WL)=>{"use strict";var Ukr=zL();WL.exports=Ukr});var JL=s((Dje,XL)=>{"use strict";var Gkr=Us();function Dkr(r){return Gkr(1/r)}XL.exports=Dkr});var xL=s((Hje,YL)=>{"use strict";var Hkr=JL();YL.exports=Hkr});var $L=s((zje,ZL)=>{"use strict";var zkr=ua();function Wkr(r){return zkr(1+r)}ZL.exports=Wkr});var KL=s((Wje,QL)=>{"use strict";var Xkr=$L();QL.exports=Xkr});var eP=s((Xje,rP)=>{"use strict";var Jkr=ua();function Ykr(r){return Jkr(1-r)}rP.exports=Ykr});var iP=s((Jje,tP)=>{"use strict";var xkr=eP();tP.exports=xkr});var nP=s((Yje,aP)=>{"use strict";var Zkr=ua();function $kr(r){return Zkr(1/r)}aP.exports=$kr});var uP=s((xje,sP)=>{"use strict";var Qkr=nP();sP.exports=Qkr});var cP=s((Zje,fP)=>{"use strict";var Kkr=_e(),rCr=z(),eCr=di(),oP=Rr(),tCr=zn(),vP=wr(),iCr=1/(1<<28),aCr=1<<28;function nCr(r){var e,t,i;return rCr(r)||Kkr(r)?r:(r<0&&(r=-r,e=!0),r<iCr?i=r:r>aCr?i=vP(r)+tCr:r>2?i=vP(2*r+1/(oP(r*r+1)+r)):(t=r*r,i=eCr(r+t/(1+oP(1+t)))),e?-i:i)}fP.exports=nCr});var v3=s(($je,lP)=>{"use strict";var sCr=cP();lP.exports=sCr});var dP=s((Qje,pP)=>{"use strict";var uCr=v3();function oCr(r){return uCr(1/r)}pP.exports=oCr});var mP=s((Kje,gP)=>{"use strict";var vCr=dP();gP.exports=vCr});var hP=s((rMe,yP)=>{"use strict";var fCr=$n(),cCr=Rr();function lCr(r){return 2*fCr(cCr(r))}yP.exports=lCr});var bP=s((eMe,qP)=>{"use strict";var pCr=hP();qP.exports=pCr});var EP=s((tMe,wP)=>{"use strict";var dCr=ua(),gCr=Rr();function mCr(r){return 2*dCr(gCr(r))}wP.exports=mCr});var SP=s((iMe,NP)=>{"use strict";var yCr=EP();NP.exports=yCr});var _P=s((aMe,AP)=>{"use strict";var hCr=z(),OP=di(),qCr=pr(),bCr=Ir(),wCr=1/(1<<28);function ECr(r){var e,t;return hCr(r)||r<-1||r>1?NaN:r===1?qCr:r===-1?bCr:(r<0&&(e=!0,r=-r),r<wCr?e?-r:r:(r<.5?(t=r+r,t=.5*OP(t+t*r/(1-r))):t=.5*OP((r+r)/(1-r)),e?-t:t))}AP.exports=ECr});var IP=s((nMe,TP)=>{"use strict";var NCr=_P();TP.exports=NCr});var LP=s((sMe,RP)=>{"use strict";var SCr=$n();function OCr(r){return SCr(1+r)}RP.exports=OCr});var FP=s((uMe,PP)=>{"use strict";var ACr=LP();PP.exports=ACr});var MP=s((oMe,jP)=>{"use strict";var _Cr=$n();function TCr(r){return _Cr(1-r)}jP.exports=TCr});var kP=s((vMe,BP)=>{"use strict";var ICr=MP();BP.exports=ICr});var VP=s((fMe,CP)=>{"use strict";var RCr=Ur();function LCr(r){return RCr(r)===r&&r>=0}CP.exports=LCr});var f3=s((cMe,UP)=>{"use strict";var PCr=VP();UP.exports=PCr});var GP=s((lMe,FCr)=>{FCr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var HP=s((pMe,DP)=>{"use strict";var jCr=f3(),MCr=z(),BCr=Es(),kCr=Ir(),CCr=pr(),VCr=GP(),UCr=258;function GCr(r){return MCr(r)||!jCr(r)?NaN:BCr(r)?0:r>UCr?r/2&1?CCr:kCr:VCr[r/2]}DP.exports=GCr});var WP=s((dMe,zP)=>{"use strict";var DCr=HP();zP.exports=DCr});var JP=s((gMe,XP)=>{"use strict";var HCr=xe(),c3;HCr===!0?c3=0:c3=1;XP.exports=c3});var ZP=s((mMe,xP)=>{"use strict";var zCr=me(),WCr=ge(),XCr=JP(),YP=new WCr(1),JCr=new zCr(YP.buffer);function YCr(r){return YP[0]=r,JCr[XCr]}xP.exports=YCr});var QP=s((yMe,$P)=>{"use strict";var xCr=ZP();$P.exports=xCr});var iF=s((hMe,tF)=>{"use strict";var ZCr=Ur(),Gs=Xa(),zs=si(),rF=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],$Cr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],l3=16777216,p3=5960464477539063e-23,Ds=zs(20),KP=zs(20),Hs=zs(20),he=zs(20);function eF(r,e,t,i,a,n,u,o,v){var f,c,l,p,m,y,g,d,h;for(p=n,h=i[t],d=t,m=0;d>0;m++)c=p3*h|0,he[m]=h-l3*c|0,h=i[d-1]+c,d-=1;if(h=Gs(h,a),h-=8*ZCr(h*.125),g=h|0,h-=g,l=0,a>0?(m=he[t-1]>>24-a,g+=m,he[t-1]-=m<<24-a,l=he[t-1]>>23-a):a===0?l=he[t-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,m=0;m<t;m++)d=he[m],f===0?d!==0&&(f=1,he[m]=16777216-d):he[m]=16777215-d;if(a>0)switch(a){case 1:he[t-1]&=8388607;break;case 2:he[t-1]&=4194303;break}l===2&&(h=1-h,f!==0&&(h-=Gs(1,a)))}if(h===0){for(d=0,m=t-1;m>=n;m--)d|=he[m];if(d===0){for(y=1;he[n-y]===0;y++);for(m=t+1;m<=t+y;m++){for(v[o+m]=rF[u+m],c=0,d=0;d<=o;d++)c+=r[d]*v[o+(m-d)];i[m]=c}return t+=y,eF(r,e,t,i,a,n,u,o,v)}}if(h===0)for(t-=1,a-=24;he[t]===0;)t-=1,a-=24;else h=Gs(h,-a),h>=l3?(c=p3*h|0,he[t]=h-l3*c|0,t+=1,a+=24,he[t]=c):he[t]=h|0;for(c=Gs(1,a),m=t;m>=0;m--)i[m]=c*he[m],c*=p3;for(m=t;m>=0;m--){for(c=0,y=0;y<=p&&y<=t-m;y++)c+=$Cr[y]*i[m+y];Hs[t-m]=c}for(c=0,m=t;m>=0;m--)c+=Hs[m];for(l===0?e[0]=c:e[0]=-c,c=Hs[0]-c,m=1;m<=t;m++)c+=Hs[m];return l===0?e[1]=c:e[1]=-c,g&7}function QCr(r,e,t,i){var a,n,u,o,v,f,c,l,p;for(n=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+n,c=0;c<=p;c++)l<0?Ds[c]=0:Ds[c]=rF[l],l+=1;for(c=0;c<=n;c++){for(a=0,l=0;l<=o;l++)a+=r[l]*Ds[o+(c-l)];KP[c]=a}return v=n,eF(r,e,v,KP,f,n,u,o,Ds)}tF.exports=QCr});var nF=s((qMe,aF)=>{"use strict";var KCr=Math.round;aF.exports=KCr});var Ws=s((bMe,sF)=>{"use strict";var rVr=nF();sF.exports=rVr});var fF=s((wMe,vF)=>{"use strict";var eVr=Ws(),uF=ae(),tVr=.6366197723675814,iVr=1.5707963267341256,aVr=6077100506506192e-26,nVr=6077100506303966e-26,sVr=20222662487959506e-37,uVr=20222662487111665e-37,oVr=84784276603689e-45,oF=2047;function vVr(r,e,t){var i,a,n,u,o,v,f;return a=eVr(r*tVr),u=r-a*iVr,o=a*aVr,f=e>>20|0,t[0]=u-o,i=uF(t[0]),v=f-(i>>20&oF),v>16&&(n=u,o=a*nVr,u=n-o,o=a*sVr-(n-u-o),t[0]=u-o,i=uF(t[0]),v=f-(i>>20&oF),v>49&&(n=u,o=a*uVr,u=n-o,o=a*oVr-(n-u-o),t[0]=u-o)),t[1]=u-t[0]-o,a}vF.exports=vVr});var lF=s((EMe,cF)=>{"use strict";var fVr=ft(),cVr=Hn(),lVr=Is(),pVr=ae(),dVr=QP(),gVr=Wa(),mVr=iF(),Xs=fF(),yVr=0,hVr=16777216,gi=1.5707963267341256,oa=6077100506506192e-26,Js=2*oa,Ys=3*oa,xs=4*oa,qVr=598523,bVr=1072243195,wVr=1073928572,EVr=1074752122,NVr=1074977148,SVr=1075183036,OVr=1075388923,AVr=1075594811,_Vr=1094263291,Qn=[0,0,0],Kn=[0,0];function TVr(r,e){var t,i,a,n,u,o,v,f;if(a=pVr(r),n=a&fVr|0,n<=bVr)return e[0]=r,e[1]=0,0;if(n<=EVr)return(n&lVr)===qVr?Xs(r,n,e):n<=wVr?r>0?(f=r-gi,e[0]=f-oa,e[1]=f-e[0]-oa,1):(f=r+gi,e[0]=f+oa,e[1]=f-e[0]+oa,-1):r>0?(f=r-2*gi,e[0]=f-Js,e[1]=f-e[0]-Js,2):(f=r+2*gi,e[0]=f+Js,e[1]=f-e[0]+Js,-2);if(n<=AVr)return n<=SVr?n===NVr?Xs(r,n,e):r>0?(f=r-3*gi,e[0]=f-Ys,e[1]=f-e[0]-Ys,3):(f=r+3*gi,e[0]=f+Ys,e[1]=f-e[0]+Ys,-3):n===OVr?Xs(r,n,e):r>0?(f=r-4*gi,e[0]=f-xs,e[1]=f-e[0]-xs,4):(f=r+4*gi,e[0]=f+xs,e[1]=f-e[0]+xs,-4);if(n<_Vr)return Xs(r,n,e);if(n>=cVr)return e[0]=NaN,e[1]=NaN,0;for(t=dVr(r),i=(n>>20)-1046,f=gVr(n-(i<<20|0),t),o=0;o<2;o++)Qn[o]=f|0,f=(f-Qn[o])*hVr;for(Qn[2]=f,u=3;Qn[u-1]===yVr;)u-=1;return v=mVr(Qn,Kn,i,u,1),r<0?(e[0]=-Kn[0],e[1]=-Kn[1],-v):(e[0]=Kn[0],e[1]=Kn[1],v)}cF.exports=TVr});var r0=s((NMe,pF)=>{"use strict";var IVr=lF();pF.exports=IVr});var mF=s((SMe,gF)=>{"use strict";var dF=-.16666666666666632,RVr=.00833333333332249,LVr=-.0001984126982985795,PVr=27557313707070068e-22,FVr=-25050760253406863e-24,jVr=158969099521155e-24,MVr=.0416666666666666,BVr=-.001388888888887411,kVr=2480158728947673e-20,CVr=-27557314351390663e-23,VVr=2087572321298175e-24,UVr=-11359647557788195e-27;function GVr(r,e,t,i,a){var n,u,o,v,f;return f=r*r,v=f*f,u=RVr+f*(LVr+f*PVr)+f*v*(FVr+f*jVr),o=f*r,e===0?t[a]=r+o*(dF+f*u):t[a]=r-(f*(.5*e-o*u)-e-o*dF),u=f*(MVr+f*(BVr+f*kVr)),u+=v*v*(CVr+f*(VVr+f*UVr)),n=.5*f,v=1-n,t[a+i]=v+(1-v-n+(f*u-r*e)),t}gF.exports=GVr});var g3=s((OMe,hF)=>{"use strict";var DVr=ft(),HVr=Hn(),zVr=ae(),WVr=r0(),yF=mF(),XVr=1072243195,JVr=1044381696,d3=[0,0];function YVr(r,e,t,i){var a,n;if(a=zVr(r),a&=DVr,a<=XVr)return a<JVr&&(r|0)===0&&(e[i]=r,e[i+t]=0),yF(r,0,e,t,i);if(a>=HVr)return e[i]=NaN,e[i+t]=NaN,e;switch(n=WVr(r,d3),yF(d3[0],d3[1],e,t,i),n&3){case 1:return a=e[i+t],e[i+t]=-e[i],e[i]=a,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return a=-e[i+t],e[i+t]=e[i],e[i]=a,e;default:return e}}hF.exports=YVr});var bF=s((AMe,qF)=>{"use strict";var xVr=g3();function ZVr(r){return xVr(r,[0,0],1,0)}qF.exports=ZVr});var e0=s((_Me,EF)=>{"use strict";var $Vr=D(),wF=bF(),QVr=g3();$Vr(wF,"assign",QVr);EF.exports=wF});var SF=s((TMe,NF)=>{"use strict";function KVr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}NF.exports=KVr});var AF=s((IMe,OF)=>{"use strict";function rUr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}OF.exports=rUr});var TF=s((RMe,_F)=>{"use strict";function eUr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}_F.exports=eUr});var RF=s((LMe,IF)=>{"use strict";function tUr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}IF.exports=tUr});var PF=s((PMe,LF)=>{"use strict";var iUr=Rr(),aUr=e0().assign,nUr=pr(),sUr=SF(),uUr=AF(),oUr=TF(),vUr=RF(),fUr=.5641895835477563,cUr=2.404825557695773,lUr=5.520078110286311,pUr=616,dUr=-.0014244423042272315,gUr=1413,mUr=.0005468602863106496,t0=[0,0];function yUr(r){var e,t,i,a,n,u;return r<0&&(r=-r),r===nUr?0:r===0?1:r<=4?(n=r*r,a=sUr(n),u=(r+cUr)*(r-pUr/256-dUr),u*a):r<=8?(n=1-r*r/64,a=uUr(n),u=(r+lUr)*(r-gUr/256-mUr),u*a):(n=8/r,i=n*n,e=oUr(i),t=vUr(i),u=fUr/iUr(r),aUr(r,t0,1,0),u*(e*(t0[1]+t0[0])-n*t*(t0[0]-t0[1])))}LF.exports=yUr});var m3=s((FMe,FF)=>{"use strict";var hUr=PF();FF.exports=hUr});var Zs=s((jMe,jF)=>{"use strict";var qUr=1.772453850905516;jF.exports=qUr});var BF=s((MMe,MF)=>{"use strict";function bUr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}MF.exports=bUr});var CF=s((BMe,kF)=>{"use strict";function wUr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}kF.exports=wUr});var UF=s((kMe,VF)=>{"use strict";function EUr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}VF.exports=EUr});var DF=s((CMe,GF)=>{"use strict";function NUr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}GF.exports=NUr});var zF=s((VMe,HF)=>{"use strict";var SUr=Rr(),OUr=Dr(),AUr=e0().assign,_Ur=pr(),TUr=Zs(),IUr=BF(),RUr=CF(),LUr=UF(),PUr=DF(),FUr=3.8317059702075125,jUr=7.015586669815619,MUr=981,BUr=-.0003252797924876844,kUr=1796,CUr=-38330184381246464e-21,i0=[0,0];function VUr(r){var e,t,i,a,n,u,o,v;return v=OUr(r),r===0||v===_Ur?0:(v<=4?(u=r*r,n=IUr(u),o=v*(v+FUr)*(v-MUr/256-BUr),e=o*n):v<=8?(u=r*r,n=RUr(u),o=v*(v+jUr)*(v-kUr/256-CUr),e=o*n):(u=8/v,a=u*u,t=LUr(a),i=PUr(a),o=1/(SUr(v)*TUr),AUr(v,i0,1,0),e=o*(t*(i0[0]-i0[1])+u*i*(i0[0]+i0[1]))),r<0&&(e*=-1),e)}HF.exports=VUr});var y3=s((UMe,WF)=>{"use strict";var UUr=zF();WF.exports=UUr});var Ee=s((GMe,XF)=>{"use strict";var GUr=3.141592653589793;XF.exports=GUr});var YF=s((DMe,JF)=>{"use strict";function DUr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}JF.exports=DUr});var ZF=s((HMe,xF)=>{"use strict";function HUr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}xF.exports=HUr});var QF=s((zMe,$F)=>{"use strict";function zUr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}$F.exports=zUr});var rj=s((WMe,KF)=>{"use strict";function WUr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}KF.exports=WUr});var tj=s((XMe,ej)=>{"use strict";function XUr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}ej.exports=XUr});var uj=s((JMe,sj)=>{"use strict";var h3=wr(),JUr=Rr(),YUr=Ee(),xUr=Zs(),ZUr=Ir(),$Ur=pr(),QUr=e0().assign,q3=m3(),KUr=YF(),rGr=ZF(),eGr=QF(),tGr=rj(),iGr=tj(),aGr=1/xUr,b3=2/YUr,ij=.8935769662791675,aj=3.957678419314858,nj=7.086051060301773,nGr=228,sGr=.0029519662791675214,uGr=1013,oGr=.0006471693148578684,vGr=1814,fGr=.00011356030177269763,a0=[0,0];function cGr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?ZUr:r===$Ur?0:r<=3?(n=r*r,u=h3(r/ij)*q3(r)*b3,a=KUr(n),o=(r+ij)*(r-nGr/256-sGr),u+o*a):r<=5.5?(n=r*r,u=h3(r/aj)*q3(r)*b3,a=rGr(n),o=(r+aj)*(r-uGr/256-oGr),u+o*a):r<=8?(n=r*r,u=h3(r/nj)*q3(r)*b3,a=eGr(n),o=(r+nj)*(r-vGr/256-fGr),u+o*a):(n=8/r,i=n*n,e=tGr(i),t=iGr(i),o=aGr/JUr(r),QUr(r,a0,1,0),o*(e*(a0[0]-a0[1])+n*t*(a0[1]+a0[0])))}sj.exports=cGr});var vj=s((YMe,oj)=>{"use strict";var lGr=uj();oj.exports=lGr});var cj=s((xMe,fj)=>{"use strict";function pGr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}fj.exports=pGr});var pj=s((ZMe,lj)=>{"use strict";function dGr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}lj.exports=dGr});var gj=s(($Me,dj)=>{"use strict";function gGr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}dj.exports=gGr});var yj=s((QMe,mj)=>{"use strict";function mGr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}mj.exports=mGr});var Sj=s((KMe,Nj)=>{"use strict";var hj=wr(),yGr=Rr(),hGr=Ee(),qGr=Zs(),bGr=Ir(),wGr=pr(),EGr=e0().assign,qj=y3(),NGr=cj(),SGr=pj(),OGr=gj(),AGr=yj(),_Gr=1/qGr,bj=2/hGr,wj=2.197141326031017,Ej=5.429681040794135,TGr=562,IGr=.001828826031017035,RGr=1390,LGr=-6459205864867228e-21,n0=[0,0];function PGr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?bGr:r===wGr?0:r<=4?(n=r*r,u=hj(r/wj)*qj(r)*bj,a=NGr(n),o=(r+wj)*(r-TGr/256-IGr)/r,u+o*a):r<=8?(n=r*r,u=hj(r/Ej)*qj(r)*bj,a=SGr(n),o=(r+Ej)*(r-RGr/256-LGr)/r,u+o*a):(n=8/r,i=n*n,e=OGr(i),t=AGr(i),o=_Gr/yGr(r),EGr(r,n0,1,0),o*(n*t*(n0[0]-n0[1])-e*(n0[0]+n0[1])))}Nj.exports=PGr});var Aj=s((rBe,Oj)=>{"use strict";var FGr=Sj();Oj.exports=FGr});var Tj=s((eBe,_j)=>{"use strict";function jGr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}_j.exports=jGr});var Rj=s((tBe,Ij)=>{"use strict";function MGr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}Ij.exports=MGr});var Pj=s((iBe,Lj)=>{"use strict";var BGr=Tj(),kGr=Rj();function CGr(r,e){var t,i,a,n;return n=r*r,a=n*n,i=n*BGr(n),i+=a*a*kGr(n),t=.5*n,a=1-t,a+(1-a-t+(n*i-r*e))}Lj.exports=CGr});var w3=s((aBe,Fj)=>{"use strict";var VGr=Pj();Fj.exports=VGr});var Bj=s((nBe,Mj)=>{"use strict";var jj=-.16666666666666632,UGr=.00833333333332249,GGr=-.0001984126982985795,DGr=27557313707070068e-22,HGr=-25050760253406863e-24,zGr=158969099521155e-24;function WGr(r,e){var t,i,a,n;return n=r*r,a=n*n,t=UGr+n*(GGr+n*DGr)+n*a*(HGr+n*zGr),i=n*r,e===0?r+i*(jj+n*t):r-(n*(.5*e-i*t)-e-i*jj)}Mj.exports=WGr});var E3=s((sBe,kj)=>{"use strict";var XGr=Bj();kj.exports=XGr});var Uj=s((uBe,Vj)=>{"use strict";var JGr=ae(),N3=w3(),Cj=E3(),YGr=r0(),Ot=[0,0],xGr=2147483647,ZGr=1072243195,$Gr=1044381696,QGr=2146435072;function KGr(r){var e,t;if(e=JGr(r),e&=xGr,e<=ZGr)return e<$Gr?1:N3(r,0);if(e>=QGr)return NaN;switch(t=YGr(r,Ot),t&3){case 0:return N3(Ot[0],Ot[1]);case 1:return-Cj(Ot[0],Ot[1]);case 2:return-N3(Ot[0],Ot[1]);default:return Cj(Ot[0],Ot[1])}}Vj.exports=KGr});var At=s((oBe,Gj)=>{"use strict";var rDr=Uj();Gj.exports=rDr});var zj=s((vBe,Hj)=>{"use strict";var eDr=ft(),tDr=Hn(),iDr=ae(),Dj=w3(),S3=E3(),aDr=r0(),nDr=1072243195,sDr=1045430272,_t=[0,0];function uDr(r){var e,t;if(e=iDr(r),e&=eDr,e<=nDr)return e<sDr?r:S3(r,0);if(e>=tDr)return NaN;switch(t=aDr(r,_t),t&3){case 0:return S3(_t[0],_t[1]);case 1:return Dj(_t[0],_t[1]);case 2:return-S3(_t[0],_t[1]);default:return-Dj(_t[0],_t[1])}}Hj.exports=uDr});var pt=s((fBe,Wj)=>{"use strict";var oDr=zj();Wj.exports=oDr});var Yj=s((cBe,Jj)=>{"use strict";var vDr=z(),fDr=_e(),cDr=Dr(),Xj=At(),lDr=pt(),pDr=Ur(),O3=Ee(),dDr=sa(),gDr=dDr+1;function mDr(r){var e,t,i,a;return vDr(r)?NaN:fDr(r)?NaN:(e=cDr(r),e>gDr?1:(t=pDr(e),i=e-t,i===.5?0:(i<.25?a=Xj(O3*i):i<.75?(i=.5-i,a=lDr(O3*i)):(i=1-i,a=-Xj(O3*i)),t%2===1?-a:a)))}Jj.exports=mDr});var Zj=s((lBe,xj)=>{"use strict";var yDr=Yj();xj.exports=yDr});var Qj=s((pBe,$j)=>{"use strict";var hDr=1.618033988749895;$j.exports=hDr});var rM=s((dBe,Kj)=>{"use strict";var qDr=z(),bDr=Zj(),wDr=Gr(),EDr=Qj(),NDr=pr(),SDr=Ir(),ODr=2.23606797749979;function ADr(r){var e,t;return qDr(r)||r===NDr||r===SDr?NaN:(e=wDr(EDr,r),t=bDr(r)/e,(e-t)/ODr)}Kj.exports=ADr});var tM=s((gBe,eM)=>{"use strict";var _Dr=rM();eM.exports=_Dr});var aM=s((mBe,iM)=>{"use strict";function TDr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}iM.exports=TDr});var oM=s((yBe,uM)=>{"use strict";var IDr=Wv(),RDr=kv(),nM=ft(),_3=ae(),LDr=Et(),PDr=_e(),sM=Wa(),FDr=za(),jDr=z(),MDr=aM(),BDr=4294967295>>>0,kDr=3221225472>>>0,CDr=0x40000000000000,A3=2147483648>>>0,VDr=1>>>0,UDr=715094163>>>0,GDr=696219795>>>0,DDr=_3(IDr),va=[0>>>0,0>>>0];function HDr(r){var e,t,i,a,n,u,o;return r===0||jDr(r)||PDr(r)?r:(t=_3(r)>>>0,e=(t&RDr)>>>0,t&=nM,t<DDr?(u=CDr*r,i=(_3(u)&nM)>>>0,i=(i/3>>>0)+GDr>>>0,u=sM(e|i,0)):(u=0,i=(t/3>>>0)+UDr>>>0,u=LDr(u,e|i)),a=u*u*(u/r),u*=MDr(a),FDr.assign(u,va,1,0),va[1]&A3?(va[0]+=VDr,va[1]&=~A3):va[1]|=A3,u=sM(va[0]&BDr,va[1]&kDr),n=u*u,a=r/n,o=u+u,a=(a-u)/(o+a),u+=u*a,u)}uM.exports=HDr});var fM=s((hBe,vM)=>{"use strict";var zDr=oM();vM.exports=zDr});var lM=s((qBe,cM)=>{"use strict";var WDr=Math.ceil;cM.exports=WDr});var xa=s((bBe,pM)=>{"use strict";var XDr=lM();pM.exports=XDr});var gM=s((wBe,dM)=>{"use strict";function JDr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}dM.exports=JDr});var yM=s((EBe,mM)=>{"use strict";function YDr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}mM.exports=YDr});var bM=s((NBe,qM)=>{"use strict";var xDr=ae(),ZDr=gM(),$Dr=yM(),hM=1048575,QDr=.3333333333333333;function KDr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=xDr(r),n=r-1,(hM&2+a)<3?n===0?0:n*n*(QDr*n-.5):(u=n/(2+n),o=u*u,a&=hM,c=a-398458|0,f=o*o,l=440401-a|0,t=f*ZDr(f),i=o*$Dr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}qM.exports=KDr});var SM=s((SBe,NM)=>{"use strict";var wM=ae(),rHr=Et(),eHr=vt(),tHr=z(),iHr=ct(),aHr=Ir(),nHr=bM(),sHr=0x40000000000000,EM=.4342944818781689,uHr=25082946711645275e-27,oHr=.30102999566361177,vHr=3694239077158931e-28,fHr=1048575,cHr=2146435072,lHr=1048576,pHr=1072693248;function dHr(r){var e,t,i,a,n,u,o,v;return tHr(r)||r<0?NaN:r===0?aHr:(t=wM(r),u=0,t<lHr&&(u-=54,r*=sHr,t=wM(r)),t>=cHr?r+r:(u+=(t>>20)-iHr|0,t&=fHr,n=t+614244&1048576|0,r=rHr(r,t|n^pHr),u+=n>>20|0,o=u,a=nHr(r),r-=1,e=eHr(r,0),i=r-e,v=o*vHr+(r+a)*uHr,v+=(i+a)*EM+e*EM,v+o*oHr))}NM.exports=dHr});var AM=s((OBe,OM)=>{"use strict";var gHr=SM();OM.exports=gHr});var TM=s((ABe,_M)=>{"use strict";var mHr=z(),yHr=_e(),hHr=Gr(),qHr=Ur(),bHr=xa(),wHr=AM(),EHr=Xn(),NHr=Ls(),SHr=pr();function OHr(r){var e,t;return mHr(r)||yHr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=wHr(r),e===-1?t=qHr(t):t=bHr(t),t<=NHr?e*0:t>EHr?SHr:e*hHr(10,t))}_M.exports=OHr});var RM=s((_Be,IM)=>{"use strict";var AHr=TM();IM.exports=AHr});var PM=s((TBe,LM)=>{"use strict";function _Hr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}LM.exports=_Hr});var jM=s((IBe,FM)=>{"use strict";function THr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}FM.exports=THr});var kM=s((RBe,BM)=>{"use strict";var IHr=ae(),RHr=PM(),LHr=jM(),MM=1048575,PHr=.3333333333333333;function FHr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=IHr(r),n=r-1,(MM&2+a)<3?n===0?0:n*n*(PHr*n-.5):(u=n/(2+n),o=u*u,a&=MM,c=a-398458|0,f=o*o,l=440401-a|0,t=f*RHr(f),i=o*LHr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}BM.exports=FHr});var UM=s((LBe,VM)=>{"use strict";var jHr=ae(),MHr=Et(),BHr=vt(),kHr=za(),CHr=z(),VHr=ft(),UHr=Is(),GHr=ct(),DHr=Ir(),HHr=kM(),zHr=0x40000000000000,CM=1.4426950407214463,WHr=16751713164886512e-26,XHr=2146435072,JHr=1048576,YHr=1072693248,T3=[0,0];function xHr(r){var e,t,i,a,n,u,o;if(CHr(r)||r<0)return NaN;if(kHr.assign(r,T3,1,0),i=T3[0],a=T3[1],o=0,i<JHr){if((i&VHr|a)===0)return DHr;o-=54,r*=zHr,i=jHr(r)}return i>=XHr?r+r:(o+=(i>>20)-GHr|0,i&=UHr,u=i+614244&1048576|0,r=MHr(r,i|u^YHr),o+=u>>20|0,n=HHr(r),r-=1,e=BHr(r,0),t=r-e,(r+n)*WHr+(t+n)*CM+e*CM+o)}VM.exports=xHr});var DM=s((PBe,GM)=>{"use strict";var ZHr=UM();GM.exports=ZHr});var zM=s((FBe,HM)=>{"use strict";var $Hr=z(),QHr=_e(),KHr=Gr(),rzr=Ur(),ezr=xa(),tzr=DM(),izr=Ts(),azr=zv(),nzr=pr();function szr(r){var e,t;return $Hr(r)||QHr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=tzr(r),t===azr)?r:(e===-1?t=rzr(t):t=ezr(t),t>izr?nzr:e*KHr(2,t))}HM.exports=szr});var XM=s((jBe,WM)=>{"use strict";var uzr=zM();WM.exports=uzr});var YM=s((MBe,JM)=>{"use strict";var ozr=Ur(),vzr=xa();function fzr(r){return r<0?vzr(r):ozr(r)}JM.exports=fzr});var $s=s((BBe,xM)=>{"use strict";var czr=YM();xM.exports=czr});var $M=s((kBe,ZM)=>{"use strict";function lzr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}ZM.exports=lzr});var KM=s((CBe,QM)=>{"use strict";var pzr=Xa(),dzr=$M();function gzr(r,e,t){var i,a,n,u;return i=r-e,a=i*i,n=i-a*dzr(a),u=1-(e-i*n/(2-n)-r),pzr(u,t)}QM.exports=gzr});var nB=s((VBe,aB)=>{"use strict";var mzr=z(),rB=$s(),yzr=Ir(),eB=pr(),hzr=KM(),qzr=.6931471803691238,bzr=19082149292705877e-26,tB=1.4426950408889634,wzr=709.782712893384,Ezr=-745.1332191019411,iB=1/(1<<28),Nzr=-iB;function Szr(r){var e,t,i;return mzr(r)||r===eB?r:r===yzr?0:r>wzr?eB:r<Ezr?0:r>Nzr&&r<iB?1+r:(r<0?i=rB(tB*r-.5):i=rB(tB*r+.5),e=r-i*qzr,t=i*bzr,hzr(e,t,i))}aB.exports=Szr});var xr=s((UBe,sB)=>{"use strict";var Ozr=nB();sB.exports=Ozr});var oB=s((GBe,uB)=>{"use strict";var Azr=z(),I3=xr();function _zr(r){return Azr(r)?r:(r<0&&(r=-r),r>21?I3(r)/2:(I3(r)+I3(-r))/2)}uB.exports=_zr});var fB=s((DBe,vB)=>{"use strict";var Tzr=oB();vB.exports=Tzr});var lB=s((HBe,cB)=>{"use strict";function Izr(r){return r===0?.041666666666666664:.041666666666666664+r*(-.0013888888888888872+r*(2480158730157055e-20+r*(-2755731921499979e-22+r*(2087675428708152e-24+r*(-1147028484342536e-26+r*4737750796424621e-29)))))}cB.exports=Izr});var gB=s((zBe,dB)=>{"use strict";var Rzr=At(),Lzr=lB(),pB=.7853981633974483;function Pzr(r){var e;return r<-pB||r>pB?Rzr(r)-1:(e=r*r,-.5*e+e*e*Lzr(e))}dB.exports=Pzr});var yB=s((WBe,mB)=>{"use strict";var Fzr=gB();mB.exports=Fzr});var bB=s((XBe,qB)=>{"use strict";var jzr=z(),Mzr=_e(),Bzr=Dr(),hB=At(),kzr=pt(),Czr=Ur(),R3=Ee(),Vzr=sa(),Uzr=Vzr+1;function Gzr(r){var e,t,i,a;return jzr(r)?NaN:Mzr(r)?NaN:(e=Bzr(r),e>Uzr?1:(t=Czr(e),i=e-t,i===.5?0:(i<.25?a=hB(R3*i):i<.75?(i=.5-i,a=kzr(R3*i)):(i=1-i,a=-hB(R3*i)),t%2===1?-a:a)))}qB.exports=Gzr});var EB=s((JBe,wB)=>{"use strict";var Dzr=bB();wB.exports=Dzr});var SB=s((YBe,NB)=>{"use strict";function Hzr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}NB.exports=Hzr});var AB=s((xBe,OB)=>{"use strict";function zzr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}OB.exports=zzr});var IB=s((ZBe,TB)=>{"use strict";var Wzr=ae(),_B=vt(),Xzr=SB(),Jzr=AB(),Yzr=.7853981633974483,xzr=3061616997868383e-32,Zzr=.3333333333333341,$zr=2147483647;function Qzr(r,e,t){var i,a,n,u,o,v,f,c,l;return i=Wzr(r),a=i&$zr|0,a>=1072010280&&(r<0&&(r=-r,e=-e),l=Yzr-r,c=xzr-e,r=l+c,e=0),l=r*r,c=l*l,u=Xzr(c),f=l*Jzr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=Zzr*o,c=r+u,a>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=_B(c,0),f=u-(l-r),n=-1/c,v=_B(n,0),o=1+v*l,v+n*(o+v*f))}TB.exports=Qzr});var LB=s(($Be,RB)=>{"use strict";var Kzr=IB();RB.exports=Kzr});var jB=s((QBe,FB)=>{"use strict";var rWr=ae(),PB=LB(),eWr=r0(),L3=[0,0],tWr=2147483647,iWr=1072243195,aWr=2146435072,nWr=1044381696;function sWr(r){var e,t;return e=rWr(r),e&=tWr,e<=iWr?e<nWr?r:PB(r,0,1):e>=aWr?NaN:(t=eWr(r,L3),PB(L3[0],L3[1],1-((t&1)<<1)))}FB.exports=sWr});var s0=s((KBe,MB)=>{"use strict";var uWr=jB();MB.exports=uWr});var kB=s((rke,BB)=>{"use strict";var oWr=s0();function vWr(r){return 1/oWr(r)}BB.exports=vWr});var VB=s((eke,CB)=>{"use strict";var fWr=kB();CB.exports=fWr});var GB=s((tke,UB)=>{"use strict";function cWr(r){var e,t,i;return r===0?-.3333333333333332:(r<0?e=-r:e=r,e<=1?(t=-1614.6876844170845+r*(-99.28772310019185+r*(-.9643991794250523+r*0)),i=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+r*1))):(r=1/r,t=0+r*(-.9643991794250523+r*(-99.28772310019185+r*-1614.6876844170845)),i=1+r*(112.81167849163293+r*(2235.4883906010045+r*4844.063053251255))),t/i)}UB.exports=cWr});var HB=s((ike,DB)=>{"use strict";var lWr=Dr(),pWr=xr(),dWr=GB(),gWr=88.02969193111305;function mWr(r){var e,t;if(t=lWr(r),t>.5*gWr)return r<0?-1:1;if(t>=.625)e=pWr(2*t),t=1-2/(e+1),r<0&&(t=-t);else{if(r===0)return r;e=r*r,t=r+r*e*dWr(e)}return t}DB.exports=mWr});var WB=s((ake,zB)=>{"use strict";var yWr=HB();zB.exports=yWr});var JB=s((nke,XB)=>{"use strict";var hWr=WB();function qWr(r){return 1/hWr(r)}XB.exports=qWr});var xB=s((ske,YB)=>{"use strict";var bWr=JB();YB.exports=bWr});var $B=s((uke,ZB)=>{"use strict";var wWr=pt();function EWr(r){return 1+wWr(r)}ZB.exports=EWr});var KB=s((oke,QB)=>{"use strict";var NWr=$B();QB.exports=NWr});var ek=s((vke,rk)=>{"use strict";var SWr=pt();function OWr(r){return 1-SWr(r)}rk.exports=OWr});var ik=s((fke,tk)=>{"use strict";var AWr=ek();tk.exports=AWr});var nk=s((cke,ak)=>{"use strict";var _Wr=.017453292519943295;function TWr(r){return r*_Wr}ak.exports=TWr});var uk=s((lke,sk)=>{"use strict";var IWr=nk();sk.exports=IWr});var vk=s((pke,ok)=>{"use strict";function RWr(r){return r===0?.08333333333333333:.08333333333333333+r*(-.008333333333333333+r*(.003968253968253968+r*(-.004166666666666667+r*(.007575757575757576+r*(-.021092796092796094+r*(.08333333333333333+r*-.4432598039215686))))))}ok.exports=RWr});var ck=s((dke,fk)=>{"use strict";var LWr=wr(),PWr=vk();function FWr(r){var e,t;return r-=1,e=LWr(r)+1/(2*r),t=1/(r*r),e-t*PWr(t)}fk.exports=FWr});var pk=s((gke,lk)=>{"use strict";function jWr(r){var e,t,i;return r===0?.25479851061131553:(r<0?e=-r:e=r,e<=1?(t=.25479851061131553+r*(-.3255503118680449+r*(-.6503185377089651+r*(-.28919126444774784+r*(-.04525132144873906+r*(-.002071332116774595+r*0))))),i=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+r*-5578984132167551e-22)))))):(r=1/r,t=0+r*(-.002071332116774595+r*(-.04525132144873906+r*(-.28919126444774784+r*(-.6503185377089651+r*(-.3255503118680449+r*.25479851061131553))))),i=-5578984132167551e-22+r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+r*1)))))),t/i)}lk.exports=jWr});var gk=s((mke,dk)=>{"use strict";var MWr=pk(),BWr=1569415565/1073741824,kWr=381566830/1073741824/1073741824,CWr=9016312093258695e-35,VWr=.9955816268920898;function UWr(r){var e,t;return e=r-BWr,e-=kWr,e-=CWr,t=MWr(r-1),e*VWr+e*t}dk.exports=UWr});var hk=s((yke,yk)=>{"use strict";var GWr=z(),DWr=Ur(),HWr=s0(),mk=Ee(),zWr=ck(),WWr=gk(),XWr=10;function JWr(r){var e,t;if(GWr(r)||r===0)return NaN;if(r<=-1){if(r=1-r,e=r-DWr(r),e>.5&&(e-=1),e===0)return NaN;t=mk/HWr(mk*e)}else t=0;if(r>=XWr)return t+=zWr(r),t;for(;r>2;)r-=1,t+=1/r;for(;r<1;)t-=1/r,r+=1;return t+=WWr(r),t}yk.exports=JWr});var bk=s((hke,qk)=>{"use strict";var YWr=hk();qk.exports=YWr});var Ek=s((qke,wk)=>{"use strict";var xWr=.34657359027997264;wk.exports=xWr});var Sk=s((bke,Nk)=>{"use strict";function ZWr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}Nk.exports=ZWr});var Rk=s((wke,Ik)=>{"use strict";var $Wr=z(),Ok=ae(),P3=Et(),QWr=Wa(),Ak=pr(),KWr=Ir(),_k=ct(),rXr=Ek(),eXr=Sk(),tXr=709.782712893384,F3=.6931471803691238,j3=19082149292705877e-26,Tk=1.4426950408889634,iXr=38.816242111356935,aXr=1.0397207708399179;function nXr(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(r===Ak||$Wr(r))return r;if(r===KWr)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=iXr){if(i)return-1;if(v>=tXr)return Ak}if(u=Ok(v)|0,v>rXr)v<aXr?i?(a=r+F3,n=-j3,m=-1):(a=r-F3,n=j3,m=1):(i?m=Tk*r-.5:m=Tk*r+.5,m|=0,l=m,a=r-l*F3,n=l*j3),r=a-n,c=a-r-n;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*eXr(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=QWr(_k+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(a=Ok(v)+(m<<20)|0,v=P3(v,a)):v*=t,v-1):(l=1,m<20?(a=1072693248-(2097152>>m)|0,l=P3(l,a),v=l-(p-r)):(a=_k-m<<20|0,l=P3(l,a),v=r-(p+l),v+=1),v*=t,v))}Ik.exports=nXr});var u0=s((Eke,Lk)=>{"use strict";var sXr=Rk();Lk.exports=sXr});var Mk=s((Nke,jk)=>{"use strict";var Pk=z(),Fk=Dr(),uXr=u0(),oXr=wr(),vXr=Gr(),fXr=$s();function cXr(r,e){var t;if(Pk(r)||Pk(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((Fk(e*(r-1))<.5||Fk(e)<.2)&&(t=oXr(r)*e,t<.5))return uXr(t)}else if(fXr(e)!==e)return NaN;return vXr(r,e)-1}jk.exports=cXr});var M3=s((Ske,Bk)=>{"use strict";var lXr=Mk();Bk.exports=lXr});var Ck=s((Oke,kk)=>{"use strict";var pXr=Ir();function dXr(r){return r===0&&1/r===pXr}kk.exports=dXr});var B3=s((Ake,Vk)=>{"use strict";var gXr=Ck();Vk.exports=gXr});var k3=s((_ke,Uk)=>{"use strict";var mXr=2.5066282746310007;Uk.exports=mXr});var Dk=s((Tke,Gk)=>{"use strict";function yXr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Gk.exports=yXr});var Wk=s((Ike,zk)=>{"use strict";var hXr=k3(),Hk=Gr(),qXr=xr(),bXr=Dk(),wXr=143.01608;function EXr(r){var e,t,i;return e=1/r,e=1+e*bXr(e),t=qXr(r),r>wXr?(i=Hk(r,.5*r-.25),t=i*(i/t)):t=Hk(r,r-.5)/t,hXr*t*e}zk.exports=EXr});var Jk=s((Rke,Xk)=>{"use strict";var NXr=.5772156649015329;Xk.exports=NXr});var xk=s((Lke,Yk)=>{"use strict";var SXr=Jk();function OXr(r,e){return e/((1+SXr*r)*r)}Yk.exports=OXr});var $k=s((Pke,Zk)=>{"use strict";function AXr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Zk.exports=AXr});var nC=s((Fke,aC)=>{"use strict";var _Xr=z(),TXr=Ne(),IXr=B3(),Qk=Dr(),RXr=Ur(),LXr=pt(),Kk=pr(),rC=Ir(),eC=Ee(),tC=Wk(),iC=xk(),PXr=$k();function FXr(r){var e,t,i,a;if(TXr(r)&&r<0||r===rC||_Xr(r))return NaN;if(r===0)return IXr(r)?rC:Kk;if(r>171.61447887182297)return Kk;if(r<-170.5674972726612)return 0;if(t=Qk(r),t>33)return r>=0?tC(r):(i=RXr(t),(i&1)===0?e=-1:e=1,a=t-i,a>.5&&(i+=1,a=t-i),a=t*LXr(eC*a),e*eC/(Qk(a)*tC(t)));for(a=1;r>=3;)r-=1,a*=r;for(;r<0;){if(r>-1e-9)return iC(r,a);a/=r,r+=1}for(;r<2;){if(r<1e-9)return iC(r,a);a/=r,r+=1}return r===2?a:(r-=2,a*PXr(r))}aC.exports=FXr});var Za=s((jke,sC)=>{"use strict";var jXr=nC();sC.exports=jXr});var vC=s((Mke,oC)=>{"use strict";var MXr=z(),BXr=_e(),uC=At(),C3=pt(),kXr=Dr(),o0=Ns(),v0=Ee();function CXr(r){var e,t;return MXr(r)?NaN:BXr(r)?NaN:(t=r%2,e=kXr(t),e===0||e===1?o0(0,t):e<.25?C3(v0*t):e<.75?(e=.5-e,o0(uC(v0*e),t)):e<1.25?(t=o0(1,t)-t,C3(v0*t)):e<1.75?(e-=1.5,-o0(uC(v0*e),t)):(t-=o0(2,t),C3(v0*t)))}oC.exports=CXr});var f0=s((Bke,fC)=>{"use strict";var VXr=vC();fC.exports=VXr});var lC=s((kke,cC)=>{"use strict";function UXr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}cC.exports=UXr});var dC=s((Cke,pC)=>{"use strict";function GXr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}pC.exports=GXr});var mC=s((Vke,gC)=>{"use strict";function DXr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}gC.exports=DXr});var hC=s((Uke,yC)=>{"use strict";function HXr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}yC.exports=HXr});var bC=s((Gke,qC)=>{"use strict";function zXr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}qC.exports=zXr});var EC=s((Dke,wC)=>{"use strict";function WXr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}wC.exports=WXr});var SC=s((Hke,NC)=>{"use strict";function XXr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}NC.exports=XXr});var AC=s((zke,OC)=>{"use strict";function JXr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}OC.exports=JXr});var TC=s((Wke,_C)=>{"use strict";function YXr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}_C.exports=YXr});var RC=s((Xke,IC)=>{"use strict";function xXr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}IC.exports=xXr});var FC=s((Jke,PC)=>{"use strict";var ZXr=z(),$Xr=_e(),QXr=Dr(),$a=wr(),KXr=$s(),rJr=f0(),eJr=Ee(),V3=pr(),tJr=lC(),iJr=dC(),aJr=mC(),nJr=hC(),sJr=bC(),uJr=EC(),oJr=SC(),vJr=AC(),fJr=TC(),cJr=RC(),lJr=.07721566490153287,pJr=.3224670334241136,dJr=1,gJr=-.07721566490153287,mJr=.48383612272381005,yJr=-.1475877229945939,hJr=.06462494023913339,qJr=-.07721566490153287,bJr=1,wJr=.4189385332046727,Qs=1.4616321449683622,EJr=4503599627370496,NJr=0x400000000000000,SJr=8470329472543003e-37,LC=1.4616321449683622,OJr=-.12148629053584961,AJr=-3638676997039505e-33;function _Jr(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(ZXr(r)||$Xr(r))return r;if(r===0)return V3;if(r<0?(e=!0,r=-r):e=!1,r<SJr)return-$a(r);if(e){if(r>=EJr||(f=rJr(r),f===0))return V3;t=$a(eJr/QXr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-$a(r),r>=Qs-1+.27?(l=1-r,i=0):r>=Qs-1-.27?(l=r-(LC-1),i=1):(l=r,i=2)):(m=0,r>=Qs+.27?(l=2-r,i=0):r>=Qs-.27?(l=r-LC,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=lJr+p*tJr(p),n=p*(pJr+p*iJr(p)),o=l*u+n,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=mJr+c*sJr(c),n=yJr+c*uJr(c),a=hJr+c*oJr(c),o=p*u-(AJr-c*(n+l*a)),m+=OJr+o;break;case 2:u=l*(qJr+l*vJr(l)),n=bJr+l*fJr(l),m+=-.5*l+u/n;break}else if(r<8)switch(i=KXr(r),l=r-i,o=l*(gJr+l*nJr(l)),v=dJr+l*aJr(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=$a(p)}else r<NJr?(f=$a(r),p=1/r,l=p*p,c=wJr+p*cJr(l),m=(r-.5)*(f-1)+c):m=r*($a(r)-1);return e&&(m=t-m),m}PC.exports=_Jr});var c0=s((Yke,jC)=>{"use strict";var TJr=FC();jC.exports=TJr});var mi=s((xke,MC)=>{"use strict";var IJr=6.283185307179586;MC.exports=IJr});var U3=s((Zke,BC)=>{"use strict";var RJr=14901161193847656e-24;BC.exports=RJr});var G3=s(($ke,kC)=>{"use strict";var LJr=.9189385332046728;kC.exports=LJr});var CC=s((Qke,PJr)=>{PJr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var VC=s((Kke,FJr)=>{FJr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var UC=s((rCe,jJr)=>{jJr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var DC=s((eCe,GC)=>{"use strict";function MJr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}GC.exports=MJr});var zC=s((tCe,HC)=>{"use strict";function BJr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}HC.exports=BJr});var XC=s((iCe,WC)=>{"use strict";function kJr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}WC.exports=kJr});var YC=s((aCe,JC)=>{"use strict";function CJr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}JC.exports=CJr});var ZC=s((nCe,xC)=>{"use strict";function VJr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}xC.exports=VJr});var QC=s((sCe,$C)=>{"use strict";function UJr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}$C.exports=UJr});var iV=s((uCe,tV)=>{"use strict";var GJr=z(),DJr=Ne(),HJr=Dr(),Ks=xr(),zJr=Ur(),WJr=Za(),XJr=c0(),KC=f0(),rV=Gr(),JJr=wr(),YJr=pr(),xJr=Ir(),eV=mi(),ZJr=U3(),$Jr=G3(),QJr=CC(),KJr=VC(),rYr=UC(),eYr=DC(),tYr=zC(),iYr=XC(),aYr=YC(),nYr=ZC(),sYr=QC(),uYr=129,oYr=170,vYr=709,fYr=1.2433929443359375,cYr=.6986598968505859;function D3(r){var e,t,i,a,n,u;if(GJr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(DJr(r)&&(a=r|0,a===r))if(a<0){if(i=-a|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=uYr)return-rYr[u]/(i+1)}else return(a&1)===0?KJr[a/2]:QJr[(a-3)/2];return HJr(r)<ZJr?-.5-$Jr*r:(t=1-r,r<0?zJr(r/2)===r/2?0:(e=r,r=t,t=e,r>oYr?(e=KC(.5*t)*2*D3(r),n=XJr(r),n-=r*JJr(eV),n>vYr?e<0?xJr:YJr:e*Ks(n)):KC(.5*t)*2*rV(eV,-r)*WJr(r)*D3(r)):r<1?(e=eYr(t),e-=fYr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+tYr(t)):r<=4?(e=cYr+1/-t,e+iYr(r-2)):r<=7?(e=aYr(r-4),1+Ks(e)):r<15?(e=nYr(r-7),1+Ks(e)):r<36?(e=sYr(r-15),1+Ks(e)):1+rV(2,-r))}tV.exports=D3});var H3=s((oCe,aV)=>{"use strict";var lYr=iV();aV.exports=lYr});var sV=s((vCe,nV)=>{"use strict";var pYr=z(),dYr=M3(),gYr=H3(),mYr=zn();function yYr(r){return pYr(r)?NaN:r===1?mYr:-dYr(2,1-r)*gYr(r)}nV.exports=yYr});var oV=s((fCe,uV)=>{"use strict";var hYr=sV();uV.exports=hYr});var fV=s((cCe,vV)=>{"use strict";function qYr(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}vV.exports=qYr});var lV=s((lCe,cV)=>{"use strict";function bYr(r){return r===0?1.63525673226458:1.63525673226458+r*(.4711906261487323+r*(.3097284108314996+r*(.2522083117731357+r*(.22672562321968465+r*(.21577444672958598+r*(.21310877187734892+r*(.21602912460518828+r*(.2232558316330579+r*(.23418050129420992+r*(.24855768297226408+r*.26636380989261754))))))))))}cV.exports=bYr});var dV=s((pCe,pV)=>{"use strict";function wYr(r){return r===0?1.685750354812596:1.685750354812596+r*(.5417318486132803+r*(.40152443839069024+r*(.3696424734208891+r*(.37606071535458363+r*(.4052358870851259+r*(.45329438175399905+r*(.5205189476511842+r*(.609426039204995+r*(.7242635222829089+r*(.8710138477098124+r*1.057652872753547))))))))))}pV.exports=wYr});var mV=s((dCe,gV)=>{"use strict";function EYr(r){return r===0?1.7443505972256133:1.7443505972256133+r*(.6348642753719353+r*(.5398425641644455+r*(.5718927051937874+r*(.6702951362654062+r*(.8325865900109772+r*(1.0738574482479333+r*(1.4220914606754977+r*(1.9203871834023047+r*(2.6325525483316543+r*(3.6521097473190394+r*(5.115867135558866+r*7.224080007363877)))))))))))}gV.exports=EYr});var hV=s((gCe,yV)=>{"use strict";function NYr(r){return r===0?1.8138839368169826:1.8138839368169826+r*(.7631632457005573+r*(.7619286053215958+r*(.9510746536684279+r*(1.315180671703161+r*(1.9285606934774109+r*(2.9375093425313787+r*(4.594894405442878+r*(7.33007122188172+r*(11.871512597425301+r*(19.45851374822938+r*(32.20638657246427+r*(53.73749198700555+r*90.27388602941))))))))))))}yV.exports=NYr});var bV=s((mCe,qV)=>{"use strict";function SYr(r){return r===0?1.8989249102715535:1.8989249102715535+r*(.9505217946182445+r*(1.1510775899590158+r*(1.7502391069863006+r*(2.952676812636875+r*(5.285800396121451+r*(9.83248571665998+r*(18.787148683275596+r*(36.61468615273698+r*(72.45292395127771+r*(145.1079577347069+r*(293.4786396308497+r*(598.385181505501+r*(1228.4200130758634+r*2536.5297553827645)))))))))))))}qV.exports=SYr});var EV=s((yCe,wV)=>{"use strict";function OYr(r){return r===0?2.0075983984243764:2.0075983984243764+r*(1.2484572312123474+r*(1.9262346570764797+r*(3.7512896400875877+r*(8.119944554932045+r*(18.665721308735552+r*(44.603924842914374+r*(109.50920543094983+r*(274.2779548232414+r*(697.5598008606327+r*(1795.7160145002472+r*(4668.38171679039+r*(12235.762468136643+r*(32290.17809718321+r*(85713.07608195965+r*(228672.1890493117+r*612757.2711915852)))))))))))))))}wV.exports=OYr});var SV=s((hCe,NV)=>{"use strict";function AYr(r){return r===0?2.1565156474996434:2.1565156474996434+r*(1.7918056418494632+r*(3.8267512874657132+r*(10.386724683637972+r*(31.403314054680703+r*(100.92370394986955+r*(337.3268282632273+r*(1158.7079305678278+r*(4060.9907421936323+r*(14454.001840343448+r*(52076.661075994045+r*(189493.65914621568+r*(695184.5762413896+r*(2567994048255285e-9+r*(9541921966748387e-9+r*(3563492744218076e-8+r*(13366929846120408e-8+r*(50335218668662846e-8+r*(190197572953866e-5+r*7208915015330104e-6))))))))))))))))))}NV.exports=AYr});var AV=s((qCe,OV)=>{"use strict";function _Yr(r){return r===0?2.3181226217125106:2.3181226217125106+r*(2.6169201502912327+r*(7.897935075731356+r*(30.502397154466724+r*(131.48693655235286+r*(602.9847637356492+r*(2877.024617809973+r*(14110.519919151804+r*(70621.4408815654+r*(358977.266582531+r*(1.8472382637239718e6+r*(9600515416049214e-9+r*(5030767708502367e-8+r*(2654441886527128e-7+r*(14088623250287027e-7+r*7515687935373775e-6))))))))))))))}OV.exports=_Yr});var TV=s((bCe,_V)=>{"use strict";function TYr(r){return r===0?2.473596173751344:2.473596173751344+r*(3.727624244118099+r*(15.607393035549306+r*(84.12850842805888+r*(506.98181970406137+r*(3252.2770581451236+r*(21713.242419574344+r*(149037.04518909327+r*(1.0439993310899908e6+r*(7427974817042039e-9+r*(5350383967558661e-8+r*(38924988699487084e-8+r*(28552883511008105e-7+r*(2109007703876684e-5+r*(1566998339477902e-4+r*(117022224242244e-2+r*(87779483236689375e-4+r*(6610124275248495e-2+r*(4994880537133888e-1+r*0x86813c6c7adde8))))))))))))))))))}_V.exports=TYr});var RV=s((wCe,IV)=>{"use strict";function IYr(r){return r===0?0:0+r*(.0625+r*(.03125+r*(.0205078125+r*(.01513671875+r*(.011934280395507812+r*(.009816169738769531+r*(.008315593004226685+r*(.007199153304100037+r*(.00633745662344154+r*(.00565311038371874+r*(.005097046040418718+r*(.004636680381850056+r*(.004249547423822886+r*.003919665602267974)))))))))))))}IV.exports=IYr});var PV=s((ECe,LV)=>{"use strict";function RYr(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}LV.exports=RYr});var jV=s((NCe,FV)=>{"use strict";var LYr=Rr(),PYr=wr(),FYr=pr(),jYr=Ya(),MYr=fV(),BYr=lV(),kYr=dV(),CYr=mV(),VYr=hV(),UYr=bV(),GYr=EV(),DYr=SV(),HYr=AV(),zYr=TV(),WYr=RV(),XYr=PV(),JYr=.3183098861837907;function YYr(r){var e,t,i,a,n,u;return u=r,r<0&&(u=r/(r-1),e=!0),u===0?jYr:u===1?FYr:u>1?NaN:(u<.1?n=MYr(u-.05):u<.2?n=BYr(u-.15):u<.3?n=kYr(u-.25):u<.4?n=CYr(u-.35):u<.5?n=VYr(u-.45):u<.6?n=UYr(u-.55):u<.7?n=GYr(u-.65):u<.8?n=DYr(u-.75):u<.85?n=HYr(u-.825):u<.9?n=zYr(u-.875):(i=1-u,a=WYr(i),t=XYr(i-.05),n=-PYr(a)*(t*JYr)),e?n/LYr(1-r):n)}FV.exports=YYr});var z3=s((SCe,MV)=>{"use strict";var xYr=jV();MV.exports=xYr});var kV=s((OCe,BV)=>{"use strict";function ZYr(r){return r===0?1.5509733517804722:1.5509733517804722+r*(-.4003010201031985+r*(-.07849861944294194+r*(-.034318853117591995+r*(-.0197180433173655+r*(-.01305950773199331+r*(-.009442372874146548+r*(-.007246728512402157+r*(-.00580742401295609+r*-.004809187786009338))))))))}BV.exports=ZYr});var VV=s((ACe,CV)=>{"use strict";function $Yr(r){return r===0?1.5101218320928198:1.5101218320928198+r*(-.41711633390586755+r*(-.09012382040477457+r*(-.04372994401908431+r*(-.027965493064761784+r*(-.020644781177568104+r*(-.016650786739707237+r*(-.01426196082884252+r*(-.012759847429264804+r*(-.011799303775587354+r*-.011197445703074968)))))))))}CV.exports=$Yr});var GV=s((_Ce,UV)=>{"use strict";function QYr(r){return r===0?1.4674622093394272:1.4674622093394272+r*(-.43657629094633776+r*(-.10515555766694255+r*(-.05737184359324173+r*(-.04139162772734022+r*(-.03452772850528084+r*(-.031495443512532785+r*(-.030527000890325277+r*(-.0309169840192389+r*(-.03237139531475812+r*-.03478996038640416)))))))))}UV.exports=QYr});var HV=s((TCe,DV)=>{"use strict";function KYr(r){return r===0?1.4226911334908792:1.4226911334908792+r*(-.4595135196210487+r*(-.12525053982206188+r*(-.07813854509440948+r*(-.06471427847205+r*(-.06208433913173031+r*(-.06519703281557247+r*(-.07279389536257878+r*(-.084959075171781+r*(-.102539850131046+r*(-.12705358515769605+r*-.1607911206912746))))))))))}DV.exports=KYr});var WV=s((ICe,zV)=>{"use strict";function rxr(r){return r===0?1.3754019718711163:1.3754019718711163+r*(-.4872021832731848+r*(-.15331170134854022+r*(-.11184944491702783+r*(-.10884095252313576+r*(-.12295422312026907+r*(-.15221716396203505+r*(-.20049532364269734+r*(-.27617433306775174+r*(-.39351311430437586+r*(-.5757544060278792+r*(-.8605232357272398+r*-1.3088332057585401)))))))))))}zV.exports=rxr});var JV=s((RCe,XV)=>{"use strict";function exr(r){return r===0?1.3250244979582302:1.3250244979582302+r*(-.5217276475575667+r*(-.19490643048212622+r*(-.17162372682201127+r*(-.20275465292641914+r*(-.27879895311853475+r*(-.42069845728100574+r*(-.675948400853106+r*(-1.1363431218392293+r*(-1.9767211439543984+r*(-3.5316967730957227+r*(-6.446753640156048+r*-11.97703130208884)))))))))))}XV.exports=exr});var xV=s((LCe,YV)=>{"use strict";function txr(r){return r===0?1.2707074796501499:1.2707074796501499+r*(-.5668391682878666+r*(-.2621607934324926+r*(-.2922441735330774+r*(-.4403978408504232+r*(-.7749476413813975+r*(-1.498870837987561+r*(-3.089708310445187+r*(-6.6675959033810015+r*(-14.89436036517319+r*(-34.18120574251449+r*(-80.15895841905397+r*(-191.34894807629848+r*(-463.5938853480342+r*-1137.38082216936)))))))))))))}YV.exports=txr});var $V=s((PCe,ZV)=>{"use strict";function ixr(r){return r===0?1.2110560275684594:1.2110560275684594+r*(-.6303064132874558+r*(-.38716640952066916+r*(-.5922782353119346+r*(-1.23755558451305+r*(-3.0320566617452474+r*(-8.18168822157359+r*(-23.55507217389693+r*(-71.04099935893065+r*(-221.879685319235+r*(-712.1364793277636+r*(-2336.1253314403966+r*(-7801.945954775964+r*(-26448.19586059192+r*(-90799.48341621365+r*(-315126.04064491636+r*-1.1040113443115912e6)))))))))))))))}ZV.exports=ixr});var KV=s((FCe,QV)=>{"use strict";function axr(r){return r===0?1.1613071521962828:1.1613071521962828+r*(-.7011002845552895+r*(-.5805514744654373+r*(-1.2436930610777865+r*(-3.679383613496635+r*(-12.815909243378957+r*(-49.25672530759985+r*(-202.18187354340904+r*(-869.8602699308701+r*(-3877.0058473132895+r*(-17761.7071017094+r*(-83182.69029154233+r*(-396650.4505013548+r*-1.9200334136826345e6))))))))))))}QV.exports=axr});var eU=s((jCe,rU)=>{"use strict";function nxr(r){return r===0?1.1246173251197522:1.1246173251197522+r*(-.7708450563609095+r*(-.8447940536449113+r*(-2.4900973094503946+r*(-10.239717411543843+r*(-49.7490054655148+r*(-267.09866751957054+r*(-1532.66588382523+r*(-9222.313478526092+r*(-57502.51612140314+r*(-368596.11674161063+r*(-2.4156110887010912e6+r*(-16120097815816568e-9+r*(-10920993852030899e-8+r*(-7493807581942496e-7+r*(-5198725846725541e-6+r*-364092568881214e-4)))))))))))))))}rU.exports=nxr});var iU=s((MCe,tU)=>{"use strict";function sxr(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}tU.exports=sxr});var nU=s((BCe,aU)=>{"use strict";function uxr(r){return r===0?1.5509733517804722:1.5509733517804722+r*(-.4003010201031985+r*(-.07849861944294194+r*(-.034318853117591995+r*(-.0197180433173655+r*(-.01305950773199331+r*(-.009442372874146548+r*(-.007246728512402157+r*(-.00580742401295609+r*-.004809187786009338))))))))}aU.exports=uxr});var oU=s((kCe,uU)=>{"use strict";var oxr=Rr(),sU=Ya(),vxr=z3(),fxr=kV(),cxr=VV(),lxr=GV(),pxr=HV(),dxr=WV(),gxr=JV(),mxr=xV(),yxr=$V(),hxr=KV(),qxr=eU(),bxr=iU(),wxr=nU();function Exr(r){var e,t,i,a,n,u,o;return o=r,r<0&&(o=r/(r-1),e=!0),o===0?sU:o===1?1:o>1?NaN:(o<.1?u=fxr(o-.05):o<.2?u=cxr(o-.15):o<.3?u=lxr(o-.25):o<.4?u=pxr(o-.35):o<.5?u=dxr(o-.45):o<.6?u=gxr(o-.55):o<.7?u=mxr(o-.65):o<.8?u=yxr(o-.75):o<.85?u=hxr(o-.825):o<.9?u=qxr(o-.875):(a=.95-o,t=bxr(a),i=wxr(a),n=vxr(o),u=(sU+n*(t-i))/t),e?u*oxr(1-r):u)}uU.exports=Exr});var fU=s((CCe,vU)=>{"use strict";var Nxr=oU();vU.exports=Nxr});var lU=s((VCe,cU)=>{"use strict";function Sxr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}cU.exports=Sxr});var dU=s((UCe,pU)=>{"use strict";function Oxr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}pU.exports=Oxr});var mU=s((GCe,gU)=>{"use strict";function Axr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}gU.exports=Axr});var hU=s((DCe,yU)=>{"use strict";function _xr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}yU.exports=_xr});var bU=s((HCe,qU)=>{"use strict";function Txr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}qU.exports=Txr});var EU=s((zCe,wU)=>{"use strict";function Ixr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}wU.exports=Ixr});var SU=s((WCe,NU)=>{"use strict";function Rxr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}NU.exports=Rxr});var AU=s((XCe,OU)=>{"use strict";function Lxr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}OU.exports=Lxr});var LU=s((JCe,RU)=>{"use strict";var Pxr=z(),_U=xr(),Fxr=vt(),jxr=pr(),Mxr=Ir(),Bxr=lU(),kxr=dU(),Cxr=mU(),Vxr=hU(),Uxr=bU(),Gxr=EU(),Dxr=SU(),Hxr=AU(),TU=1e-300,zxr=2848094538889218e-321,Wxr=3725290298461914e-24,IU=.8450629115104675,Xxr=.1283791670955126,Jxr=1.0270333367641007,Yxr=.12837916709551256,xxr=1,Zxr=-.0023621185607526594,$xr=1,Qxr=-.009864944034847148,Kxr=1,rZr=-.0098649429247001,eZr=1;function tZr(r){var e,t,i,a,n,u,o,v;return Pxr(r)?NaN:r===jxr?1:r===Mxr?-1:r===0?r:(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375?t<Wxr?t<zxr?.125*(8*r+Jxr*r):r+Xxr*r:(i=r*r,a=Yxr+i*Bxr(i),n=xxr+i*kxr(i),u=a/n,r+r*u):t<1.25?(n=t-1,o=Zxr+n*Cxr(n),v=$xr+n*Vxr(n),e?-IU-o/v:IU+o/v):t>=6?e?TU-1:1-TU:(n=1/(t*t),t<2.857142857142857?(a=Qxr+n*Uxr(n),n=Kxr+n*Gxr(n)):(a=rZr+n*Dxr(n),n=eZr+n*Hxr(n)),i=Fxr(t,0),a=_U(-(i*i)-.5625)*_U((i-t)*(i+t)+a/n),e?a/t-1:1-a/t))}RU.exports=tZr});var FU=s((YCe,PU)=>{"use strict";var iZr=LU();PU.exports=iZr});var MU=s((xCe,jU)=>{"use strict";function aZr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}jU.exports=aZr});var kU=s((ZCe,BU)=>{"use strict";function nZr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}BU.exports=nZr});var VU=s(($Ce,CU)=>{"use strict";function sZr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}CU.exports=sZr});var GU=s((QCe,UU)=>{"use strict";function uZr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}UU.exports=uZr});var HU=s((KCe,DU)=>{"use strict";function oZr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}DU.exports=oZr});var WU=s((rVe,zU)=>{"use strict";function vZr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}zU.exports=vZr});var JU=s((eVe,XU)=>{"use strict";function fZr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}XU.exports=fZr});var xU=s((tVe,YU)=>{"use strict";function cZr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}YU.exports=cZr});var KU=s((iVe,QU)=>{"use strict";var lZr=z(),ZU=xr(),pZr=vt(),dZr=pr(),gZr=Ir(),mZr=MU(),yZr=kU(),hZr=VU(),qZr=GU(),bZr=HU(),wZr=WU(),EZr=JU(),NZr=xU(),ru=1e-300,SZr=13877787807814457e-33,$U=.8450629115104675,OZr=.12837916709551256,AZr=1,_Zr=-.0023621185607526594,TZr=1,IZr=-.009864944034847148,RZr=1,LZr=-.0098649429247001,PZr=1;function FZr(r){var e,t,i,a,n,u,o,v;if(lZr(r))return NaN;if(r===dZr)return 0;if(r===gZr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<SZr?1-r:(i=r*r,a=OZr+i*mZr(i),n=AZr+i*yZr(i),u=a/n,r<.25?1-(r+r*u):(a=r*u,a+=r-.5,.5-a));if(t<1.25)return n=t-1,o=_Zr+n*hZr(n),v=TZr+n*qZr(n),e?1+$U+o/v:1-$U-o/v;if(t<28){if(n=1/(t*t),t<2.857142857142857)a=IZr+n*bZr(n),n=RZr+n*wZr(n);else{if(r<-6)return 2-ru;a=LZr+n*EZr(n),n=PZr+n*NZr(n)}return i=pZr(t,0),a=ZU(-(i*i)-.5625)*ZU((i-t)*(i+t)+a/n),e?2-a/t:a/t}return e?2-ru:ru*ru}QU.exports=FZr});var yi=s((aVe,rG)=>{"use strict";var jZr=KU();rG.exports=jZr});var tG=s((nVe,eG)=>{"use strict";function MZr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}eG.exports=MZr});var aG=s((sVe,iG)=>{"use strict";function BZr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}iG.exports=BZr});var sG=s((uVe,nG)=>{"use strict";function kZr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}nG.exports=kZr});var oG=s((oVe,uG)=>{"use strict";function CZr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}uG.exports=CZr});var fG=s((vVe,vG)=>{"use strict";function VZr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}vG.exports=VZr});var dG=s((fVe,pG)=>{"use strict";var UZr=z(),cG=Rr(),lG=wr(),GZr=pr(),DZr=Ir(),HZr=tG(),zZr=aG(),WZr=sG(),XZr=oG(),JZr=fG(),YZr=.08913147449493408,xZr=2.249481201171875,ZZr=.807220458984375,$Zr=.9399557113647461,QZr=.9836282730102539;function KZr(r){var e,t,i,a,n;return UZr(r)?NaN:r===0?GZr:r===2?DZr:r===1?0:r>2||r<0?NaN:(r>1?(e=-1,i=2-r):(e=1,i=r),r=1-i,r<=.5?(a=r*(r+10),n=HZr(r),e*(a*YZr+a*n)):i>=.25?(a=cG(-2*lG(i)),i-=.25,n=zZr(i),e*(a/(xZr+n))):(i=cG(-lG(i)),i<3?(t=i-1.125,n=WZr(t),e*(ZZr*i+n*i)):i<6?(t=i-3,n=XZr(t),e*($Zr*i+n*i)):(t=i-6,n=JZr(t),e*(QZr*i+n*i))))}pG.exports=KZr});var mG=s((cVe,gG)=>{"use strict";var r$r=dG();gG.exports=r$r});var hG=s((lVe,yG)=>{"use strict";function e$r(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}yG.exports=e$r});var bG=s((pVe,qG)=>{"use strict";function t$r(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}qG.exports=t$r});var EG=s((dVe,wG)=>{"use strict";function i$r(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}wG.exports=i$r});var SG=s((gVe,NG)=>{"use strict";function a$r(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}NG.exports=a$r});var AG=s((mVe,OG)=>{"use strict";function n$r(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}OG.exports=n$r});var RG=s((yVe,IG)=>{"use strict";var s$r=z(),_G=Rr(),TG=wr(),u$r=pr(),o$r=Ir(),v$r=hG(),f$r=bG(),c$r=EG(),l$r=SG(),p$r=AG(),d$r=.08913147449493408,g$r=2.249481201171875,m$r=.807220458984375,y$r=.9399557113647461,h$r=.9836282730102539;function q$r(r){var e,t,i,a,n,u;return s$r(r)?NaN:r===1?u$r:r===-1?o$r:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),a=1-t,t<=.5?(n=t*(t+10),u=v$r(t),e*(n*d$r+n*u)):a>=.25?(n=_G(-2*TG(a)),a-=.25,u=f$r(a),e*(n/(g$r+u))):(a=_G(-TG(a)),a<3?(i=a-1.125,u=c$r(i),e*(m$r*a+u*a)):a<6?(i=a-3,u=l$r(i),e*(y$r*a+u*a)):(i=a-6,u=p$r(i),e*(h$r*a+u*a))))}IG.exports=q$r});var eu=s((hVe,LG)=>{"use strict";var b$r=RG();LG.exports=b$r});var FG=s((qVe,PG)=>{"use strict";function w$r(r){return r===0?2394.2374120738828:2394.2374120738828+r*(406.7172899368727+r*(11.745273255434405+r*.040996251979858706))}PG.exports=w$r});var MG=s((bVe,jG)=>{"use strict";function E$r(r){return r===0?2079.608192860019:2079.608192860019+r*(1272.0927117834513+r*(85.09361608493066+r*1))}jG.exports=E$r});var CG=s((wVe,kG)=>{"use strict";var N$r=Ur(),BG=Xa(),S$r=z(),O$r=Xn(),A$r=Rs(),_$r=pr(),T$r=FG(),I$r=MG(),R$r=3.321928094887362,L$r=.301025390625,P$r=4605038981195214e-21;function F$r(r){var e,t,i;return S$r(r)?r:r>O$r?_$r:r<A$r?0:(e=N$r(R$r*r+.5),i=e,r-=e*L$r,r-=e*P$r,t=r*r,e=r*T$r(t),r=e/(I$r(t)-e),r=1+BG(r,1),BG(r,i))}kG.exports=F$r});var UG=s((EVe,VG)=>{"use strict";var j$r=CG();VG.exports=j$r});var DG=s((NVe,GG)=>{"use strict";var M$r=-1022;GG.exports=M$r});var zG=s((SVe,HG)=>{"use strict";function B$r(r){return r===0?1513.906801156151:1513.906801156151+r*(20.202065669316532+r*.023093347705734523)}HG.exports=B$r});var XG=s((OVe,WG)=>{"use strict";function k$r(r){return r===0?4368.211668792106:4368.211668792106+r*(233.1842117223149+r*1)}WG.exports=k$r});var xG=s((AVe,YG)=>{"use strict";var C$r=Ts(),V$r=DG(),U$r=Ws(),JG=Xa(),G$r=z(),D$r=pr(),H$r=zG(),z$r=XG();function W$r(r){var e,t,i;return G$r(r)?r:r>C$r?D$r:r<V$r?0:(i=U$r(r),r-=i,t=r*r,e=r*H$r(t),r=e/(z$r(t)-e),r=1+JG(r,1),JG(r,i))}YG.exports=W$r});var $G=s((_Ve,ZG)=>{"use strict";var X$r=xG();ZG.exports=X$r});var KG=s((TVe,QG)=>{"use strict";var J$r=z(),Y$r=xr();function x$r(r){return J$r(r)?r:1/(1+Y$r(-r))}QG.exports=x$r});var eD=s((IVe,rD)=>{"use strict";var Z$r=KG();rD.exports=Z$r});var hi=s((RVe,tD)=>{"use strict";var $$r=2220446049250313e-31;tD.exports=$$r});var aD=s((LVe,iD)=>{"use strict";var Q$r=u0(),K$r=Dr(),rQr=hi(),eQr=pr(),tQr=709.782712893384;function iQr(r){return K$r(r)<=rQr?1:r>=tQr?eQr:Q$r(r)/r}iD.exports=iQr});var sD=s((PVe,nD)=>{"use strict";var aQr=aD();nD.exports=aQr});var oD=s((FVe,uD)=>{"use strict";var lr=Qr(),nQr=Dr(),sQr=Bs(),uQr=$n(),oQr=BL(),vQr=xL(),fQr=KL(),cQr=iP(),lQr=uP(),pQr=mP(),dQr=bP(),gQr=SP(),mQr=ua(),yQr=v3(),hQr=Us(),qQr=IP(),bQr=FP(),wQr=kP(),EQr=WP(),NQr=m3(),SQr=y3(),OQr=vj(),AQr=Aj(),_Qr=tM(),TQr=fM(),IQr=xa(),RQr=RM(),LQr=XM(),PQr=At(),FQr=fB(),jQr=yB(),MQr=EB(),BQr=VB(),kQr=xB(),CQr=KB(),VQr=ik(),UQr=uk(),GQr=bk(),DQr=oV(),HQr=fU(),zQr=z3(),WQr=FU(),XQr=yi(),JQr=mG(),YQr=eu(),xQr=xr(),ZQr=UG(),$Qr=$G(),QQr=eD(),KQr=u0(),rKr=sD(),eKr=pt(),tKr=Rr(),iKr=H3();function aKr(r){return lr(r,"abs",nQr),lr(r,"abs2",sQr),lr(r,"acos",uQr),lr(r,"acosh",oQr),lr(r,"acot",vQr),lr(r,"acovercos",fQr),lr(r,"acoversin",cQr),lr(r,"acsc",lQr),lr(r,"acsch",pQr),lr(r,"ahavercos",dQr),lr(r,"ahaversin",gQr),lr(r,"asin",mQr),lr(r,"asinh",yQr),lr(r,"atan",hQr),lr(r,"atanh",qQr),lr(r,"avercos",bQr),lr(r,"aversin",wQr),lr(r,"bernoulli",EQr),lr(r,"besselj0",NQr),lr(r,"besselj1",SQr),lr(r,"bessely0",OQr),lr(r,"bessely1",AQr),lr(r,"binet",_Qr),lr(r,"cbrt",TQr),lr(r,"ceil",IQr),lr(r,"ceil10",RQr),lr(r,"ceil2",LQr),lr(r,"cos",PQr),lr(r,"cosh",FQr),lr(r,"cosm1",jQr),lr(r,"cospi",MQr),lr(r,"cot",BQr),lr(r,"coth",kQr),lr(r,"covercos",CQr),lr(r,"coversin",VQr),lr(r,"deg2rad",UQr),lr(r,"digamma",GQr),lr(r,"eta",DQr),lr(r,"ellipe",HQr),lr(r,"ellipk",zQr),lr(r,"erf",WQr),lr(r,"erfc",XQr),lr(r,"erfcinv",JQr),lr(r,"erfinv",YQr),lr(r,"exp",xQr),lr(r,"exp10",ZQr),lr(r,"exp2",$Qr),lr(r,"expit",QQr),lr(r,"expm1",KQr),lr(r,"expm1rel",rKr),lr(r,"sin",eKr),lr(r,"sqrt",tKr),lr(r,"zeta",iKr),r}uD.exports=aKr});var fD=s((jVe,vD)=>{"use strict";var nKr=Qr(),sKr=G_(),uKr=ZR(),oKr=oD();function vKr(r){return nKr(r,"tools",uKr({})),r=sKr(r),r=oKr(r),r}vD.exports=vKr});var pD=s((MVe,lD)=>{"use strict";var fKr=D1(),cD=fKr();function cKr(){return typeof cD.BigInt=="function"&&typeof BigInt=="function"&&typeof cD.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}lD.exports=cKr});var gD=s((BVe,dD)=>{"use strict";var lKr=pD();dD.exports=lKr});var hD=s((kVe,yD)=>{"use strict";var mD=Dr();function pKr(r){var e,t,i,a,n,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,a=mD(r[0]),u=1;u<t;u++)if(n=mD(r[u]),e&&n<a?e=!1:i&&n>a&&(i=!1),i||e)a=n;else return 0;return i&&e?3:i?1:2}yD.exports=pKr});var W3=s((CVe,qD)=>{"use strict";var dKr=hD();qD.exports=dKr});var wD=s((VVe,bD)=>{"use strict";function gKr(r,e){return e&&(r===2||r===3)}bD.exports=gKr});var ND=s((UVe,ED)=>{"use strict";function mKr(r,e){return e&&(r===1||r===3)}ED.exports=mKr});var OD=s((GVe,SD)=>{"use strict";var yKr=ls();function hKr(r,e,t,i,a){var n;return r===0||a===0?!1:(n=yKr(e,t,i),r===n[1]-n[0]+1)}SD.exports=hKr});var _D=s((DVe,AD)=>{"use strict";function qKr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}AD.exports=qKr});var ID=s((HVe,TD)=>{"use strict";function bKr(r){var e,t,i,a,n,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,a=this._offset,this._order==="column-major"){for(u=0;u<i;u++)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}for(u=i-1;u>=0;u--)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}TD.exports=bKr});var LD=s((zVe,RD)=>{"use strict";function wKr(r,e){var t,i,a,n,u,o;if(a=this._ndims,a===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,n=this._offset,this._order==="column-major"){for(o=0;o<a;o++)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}for(o=a-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}RD.exports=wKr});var FD=s((WVe,PD)=>{"use strict";function EKr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}PD.exports=EKr});var MD=s((XVe,jD)=>{"use strict";function NKr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}jD.exports=NKr});var kD=s((JVe,BD)=>{"use strict";var SKr=it(),OKr=at();function AKr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(SKr(t),OKr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}BD.exports=AKr});var UD=s((YVe,VD)=>{"use strict";var _Kr=Yr().isPrimitive,TKr=V(),CD=/[-\/\\^$*+?.()|[\]{}]/g;function IKr(r){var e,t,i;if(!_Kr(r))throw new TypeError(TKr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(CD,"\\$&"):(t=r.substring(1,i),t=t.replace(CD,"\\$&"),r=r[0]+t+r.substring(i),r)}VD.exports=IKr});var DD=s((xVe,GD)=>{"use strict";var RKr=UD();GD.exports=RKr});var zD=s((ZVe,HD)=>{"use strict";var LKr=RegExp.prototype.exec;HD.exports=LKr});var XD=s(($Ve,WD)=>{"use strict";var PKr=zD();function FKr(r){try{return PKr.call(r),!0}catch{return!1}}WD.exports=FKr});var YD=s((QVe,JD)=>{"use strict";var jKr=ga(),MKr=re(),BKr=XD(),kKr=jKr();function CKr(r){return typeof r=="object"?r instanceof RegExp?!0:kKr?BKr(r):MKr(r)==="[object RegExp]":!1}JD.exports=CKr});var ZD=s((KVe,xD)=>{"use strict";var VKr=YD();xD.exports=VKr});var QD=s((rUe,$D)=>{"use strict";function UKr(r,e,t){return r.replace(e,t)}$D.exports=UKr});var qi=s((eUe,KD)=>{"use strict";var GKr=QD();KD.exports=GKr});var eH=s((tUe,rH)=>{"use strict";var DKr=DD(),HKr=qr(),X3=Yr().isPrimitive,zKr=ZD(),J3=V(),WKr=qi();function XKr(r,e,t){if(!X3(r))throw new TypeError(J3("invalid argument. First argument must be a string. Value: `%s`.",r));if(X3(e))e=new RegExp(DKr(e),"g");else if(!zKr(e))throw new TypeError(J3("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!X3(t)&&!HKr(t))throw new TypeError(J3("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return WKr(r,e,t)}rH.exports=XKr});var iH=s((iUe,tH)=>{"use strict";var JKr=eH();tH.exports=JKr});var nH=s((aUe,aH)=>{"use strict";var YKr=iH(),Y3=it(),x3=at(),xKr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function ZKr(){var r,e,t,i,a,n,u;if(e=this._shape.length,a=this._dtype,i="ndarray( '"+a+"', ",r="",this._length<=100)if(a==="complex64"||a==="complex128")for(u=0;u<this._length;u++)n=this.iget(u),r+=Y3(n)+", "+x3(n),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(a==="complex64"||a==="complex128")for(u=0;u<3;u++)n=this.iget(u),r+=Y3(n)+", "+x3(n),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",a==="complex64"||a==="complex128")for(u=2;u>=0;u--)n=this.iget(this._length-1-u),r+=Y3(n)+", "+x3(n),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=xKr[this.dtype],i+=YKr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}aH.exports=ZKr});var uH=s((nUe,sH)=>{"use strict";var $Kr=typeof ArrayBuffer=="function"?ArrayBuffer:null;sH.exports=$Kr});var vH=s((sUe,oH)=>{"use strict";var QKr=x0(),KKr=ge(),tu=uH();function rre(){var r,e,t;if(typeof tu!="function")return!1;try{t=new tu(16),r=QKr(t)&&typeof tu.isView=="function",r&&(e=new KKr(t),e[0]=-3.14,e[1]=NaN,r=r&&tu.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}oH.exports=rre});var cH=s((uUe,fH)=>{"use strict";var ere=vH();fH.exports=ere});var pH=s((oUe,lH)=>{"use strict";var tre=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;lH.exports=tre});var gH=s((vUe,dH)=>{"use strict";function ire(){throw new Error("not implemented")}dH.exports=ire});var iu=s((fUe,mH)=>{"use strict";var are=cH(),nre=pH(),sre=gH(),Z3;are()?Z3=nre:Z3=sre;mH.exports=Z3});var hH=s((cUe,yH)=>{"use strict";var ure=re(),ore=typeof DataView=="function";function vre(r){return ore&&r instanceof DataView||ure(r)==="[object DataView]"}yH.exports=vre});var bH=s((lUe,qH)=>{"use strict";var fre=hH();qH.exports=fre});var EH=s((pUe,wH)=>{"use strict";var cre=typeof DataView=="function"?DataView:null;wH.exports=cre});var OH=s((dUe,SH)=>{"use strict";var lre=bH(),pre=iu(),NH=EH();function dre(){var r,e,t;if(typeof NH!="function")return!1;try{t=new pre(24),e=new NH(t,8),r=lre(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}SH.exports=dre});var _H=s((gUe,AH)=>{"use strict";var gre=OH();AH.exports=gre});var IH=s((mUe,TH)=>{"use strict";var mre=typeof DataView=="function"?DataView:void 0;TH.exports=mre});var LH=s((yUe,RH)=>{"use strict";function yre(){throw new Error("not implemented")}RH.exports=yre});var l0=s((hUe,PH)=>{"use strict";var hre=_H(),qre=IH(),bre=LH(),$3;hre()?$3=qre:$3=bre;PH.exports=$3});var jH=s((qUe,FH)=>{"use strict";var wre=typeof BigInt=="function"?BigInt:void 0;FH.exports=wre});var BH=s((bUe,MH)=>{"use strict";var Ere=jH();MH.exports=Ere});var kH=s((wUe,Nre)=>{Nre.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var UH=s((EUe,VH)=>{"use strict";var CH=kH();function Sre(){var r;return arguments.length===0?CH.all.slice():(r=CH[arguments[0]],r?r.slice():[])}VH.exports=Sre});var DH=s((NUe,GH)=>{"use strict";function Ore(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}GH.exports=Ore});var zH=s((SUe,HH)=>{"use strict";var Are=Qr(),_re=Va();function Tre(r,e){var t,i,a;for(t=_re(e),a=0;a<t.length;a++)i=t[a],Are(r,i,e[i]);return r}HH.exports=Tre});var K3=s((OUe,XH)=>{"use strict";var Ire=D(),Q3=UH(),WH=DH(),Rre=zH();Ire(Q3,"enum",WH);Rre(Q3,WH());XH.exports=Q3});var JH=s((AUe,Lre)=>{Lre.exports=["row-major","column-major"]});var xH=s((_Ue,YH)=>{"use strict";var Pre=JH();function Fre(){return Pre.slice()}YH.exports=Fre});var $H=s((TUe,ZH)=>{"use strict";function jre(){return{"row-major":1,"column-major":2}}ZH.exports=jre});var p0=s((IUe,KH)=>{"use strict";var Mre=D(),QH=xH(),Bre=$H();Mre(QH,"enum",Bre);KH.exports=QH});var rz=s((RUe,kre)=>{kre.exports=["throw","clamp","wrap"]});var tz=s((LUe,ez)=>{"use strict";var Cre=rz();function Vre(){return Cre.slice()}ez.exports=Vre});var az=s((PUe,iz)=>{"use strict";function Ure(){return{throw:1,clamp:2,wrap:3}}iz.exports=Ure});var rf=s((FUe,sz)=>{"use strict";var Gre=D(),nz=tz(),Dre=az();Gre(nz,"enum",Dre);sz.exports=nz});var vz=s((jUe,oz)=>{"use strict";var bi=xe(),Hre=iu(),zre=l0(),d0=BH(),Wre=K3().enum,Xre=p0().enum,Jre=rf().enum,Yre=Wre(),xre=Xre(),uz=Jre();function Zre(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m;if(v=this._mode||"throw",u=this._submode||[v],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new zre(new Hre(t)),a=this._shape,n=this._strides,i=this._dtype,r=this._bytesPerElement,f=0,o.setInt8(f,bi?1:0),f+=1,o.setInt16(f,Yre[i],bi),f+=2,o.setBigInt64(f,d0(l),bi),c=l*8,f+=8,m=0;m<l;m++)o.setBigInt64(f,d0(a[m]),bi),o.setBigInt64(f+c,d0(n[m]*r),bi),f+=8;for(f+=c,o.setBigInt64(f,d0(this._offset*r),bi),f+=8,o.setInt8(f,xre[this._order]),f+=1,o.setInt8(f,uz[v]),f+=1,o.setBigInt64(f,d0(p),bi),f+=8,m=0;m<p;m++)o.setInt8(f,uz[u[m]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(f,e,bi),this.__meta_dataview__=o,o}oz.exports=Zre});var cz=s((MUe,fz)=>{"use strict";var g0=xe(),$re=tt(),Qre=l0(),Kre=Ur(),ree=4294967295>>>0,eee=4294967296;function tee(r){var e,t,i,a;return e=new $re(8),r===0||(a=(r&ree)>>>0,i=Kre(r/eee),t=new Qre(e.buffer),g0?(t.setUint32(0,a,g0),t.setUint32(4,i,g0)):(t.setUint32(0,i,g0),t.setUint32(4,a,g0))),e}fz.exports=tee});var pz=s((BUe,lz)=>{"use strict";var m0=xe(),iee=tt(),aee=l0(),nee=Ur(),see=4294967295>>>0,uee=4294967296,nu=new iee(8),au=new aee(nu.buffer);function oee(r,e,t,i){var a,n,u;if(r===0){for(u=0;u<nu.length;u++)e[i]=0,i+=t;return e}for(n=(r&see)>>>0,a=nee(r/uee),m0?(au.setUint32(0,n,m0),au.setUint32(4,a,m0)):(au.setUint32(0,a,m0),au.setUint32(4,n,m0)),u=0;u<nu.length;u++)e[i]=nu[u],i+=t;return e}lz.exports=oee});var mz=s((kUe,gz)=>{"use strict";var vee=D(),dz=cz(),fee=pz();vee(dz,"assign",fee);gz.exports=dz});var qz=s((CUe,hz)=>{"use strict";var ef=xe(),cee=iu(),lee=l0(),pee=tt(),dee=K3().enum,gee=p0().enum,mee=rf().enum,y0=mz().assign,yee=dee(),hee=gee(),yz=mee();function qee(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y;if(f=this._mode||"throw",o=this._submode||[f],p=this._ndims,m=o.length,i=33+p*16+m,v=this.__meta_dataview__,v&&v.byteLength===i)return v;for(v=new lee(new cee(i)),e=new pee(v.buffer),n=this._shape,u=this._strides,a=this._dtype,r=this._bytesPerElement,c=0,v.setInt8(c,ef?1:0),c+=1,v.setInt16(c,yee[a],ef),c+=2,y0(p,e,1,c),l=p*8,c+=8,y=0;y<p;y++)y0(n[y],e,1,c),y0(u[y]*r,e,1,c+l),c+=8;for(c+=l,y0(this._offset*r,e,1,c),c+=8,v.setInt8(c,hee[this._order]),c+=1,v.setInt8(c,yz[f]),c+=1,y0(m,e,1,c),c+=8,y=0;y<m;y++)v.setInt8(c,yz[o[y]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,v.setInt32(c,t,ef),this.__meta_dataview__=v,v}hz.exports=qee});var wz=s((VUe,bz)=>{"use strict";var bee=gD(),wi=D(),Ze=br(),wee=i3(),Eee=e3(),Nee=W3(),See=V1(),Oee=wD(),Aee=ND(),_ee=OD(),Tee=_D(),Iee=ID(),Ree=LD(),Lee=FD(),Pee=MD(),Fee=kD(),jee=nH(),Mee=vz(),Bee=qz();function ie(r,e,t,i,a,n){var u,o,v,f,c;if(!(this instanceof ie))return new ie(r,e,t,i,a,n);for(f=1,c=0;c<t.length;c++)f*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*f:o=null,this._byteLength=o,this._bytesPerElement=wee(r),this._buffer=e,this._dtype=r,this._length=f,this._ndims=t.length,this._offset=a,this._order=n,this._shape=t,this._strides=i,this._accessors=See(e.get&&e.set),this._iterationOrder=Eee(i),u=_ee(f,t,i,a,this._iterationOrder),v=Nee(i),this._flags={ROW_MAJOR_CONTIGUOUS:Aee(v,u),COLUMN_MAJOR_CONTIGUOUS:Oee(v,u),READONLY:!1},this.__meta_dataview__=null,this}wi(ie,"name","ndarray");Ze(ie.prototype,"byteLength",function(){return this._byteLength});Ze(ie.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});Ze(ie.prototype,"data",function(){return this._buffer});Ze(ie.prototype,"dtype",function(){return this._dtype});Ze(ie.prototype,"flags",function(){return Tee(this._flags)});Ze(ie.prototype,"length",function(){return this._length});Ze(ie.prototype,"ndims",function(){return this._ndims});Ze(ie.prototype,"offset",function(){return this._offset});Ze(ie.prototype,"order",function(){return this._order});Ze(ie.prototype,"shape",function(){return this._shape.slice()});Ze(ie.prototype,"strides",function(){return this._strides.slice()});wi(ie.prototype,"get",Pee);wi(ie.prototype,"iget",Iee);wi(ie.prototype,"set",Lee);wi(ie.prototype,"iset",Ree);wi(ie.prototype,"toString",jee);wi(ie.prototype,"toJSON",Fee);wi(ie.prototype,"__array_meta_dataview__",bee()?Mee:Bee);bz.exports=ie});var h0=s((UUe,Ez)=>{"use strict";var kee=wz();Ez.exports=kee});var Sz=s((GUe,Nz)=>{"use strict";var Cee=fs(),Vee=lt();function Uee(r,e,t,i,a,n,u,o){var v,f;for(v=0,r[v]="ndarray",v+=1,r[v]="shape",v+=1,f=0;f<i.length;f++)r[v]=i[f],v+=1;for(r[v]="strides",v+=1,f=0;f<a.length;f++)r[v]=a[f],v+=1;return r[v]="offset",v+=1,r[v]=n,v+=1,r[v]="order",v+=1,r[v]=u,v+=1,r[v]="dtype",v+=1,r[v]=t,v+=1,r[v]="length",v+=1,r[v]=i.length===0?1:Vee(i),v+=1,r[v]="capacity",v+=1,r[v]=e,v+=1,r[v]="data",o==="row"?[r]:Cee(r,[r.length,1],[1,1],0)}Nz.exports=Uee});var Az=s((DUe,Oz)=>{"use strict";var Gee=Sz();Oz.exports=Gee});var Iz=s((HUe,Tz)=>{"use strict";var Dee=p0(),_z=Dee(),Hee=_z.length;function zee(r){var e;for(e=0;e<Hee;e++)if(r===_z[e])return!0;return!1}Tz.exports=zee});var Lz=s((zUe,Rz)=>{"use strict";var Wee=Iz();Rz.exports=Wee});var Fz=s((WUe,Pz)=>{"use strict";function Xee(r){return r.toLowerCase()}Pz.exports=Xee});var fa=s((XUe,jz)=>{"use strict";var Jee=Fz();jz.exports=Jee});var Bz=s((JUe,Mz)=>{"use strict";var Yee=ma(),xee=Ki(),Zee=Aa(),$ee=Ma();function Qee(r,e){var t,i,a,n;for(a=$ee(r),Yee(r)?i=xee(a):i=Zee(a),t=r.length,n=0;n<t;n++)if(i(r,n)===e)return!0;return!1}Mz.exports=Qee});var Cz=s((YUe,kz)=>{"use strict";var Kee=Ve(),rte=ma(),ete=Ki(),tte=Ma(),ite=V();function ate(r){var e,t,i;if(!Kee(r))throw new TypeError(ite("invalid argument. Must provide an array-like object. Value: `%s`.",r));return i=tte(r),rte(r)&&(e=ete(i)),t=r.length,e===void 0?a:n;function a(u){var o;for(o=0;o<t;o++)if(r[o]===u)return!0;return!1}function n(u){var o;for(o=0;o<t;o++)if(e(r,o)===u)return!0;return!1}}kz.exports=ate});var Gz=s((xUe,Uz)=>{"use strict";var nte=D(),Vz=Bz(),ste=Cz();nte(Vz,"factory",ste);Uz.exports=Vz});var Wz=s((ZUe,zz)=>{"use strict";var su=be().isPrimitive,ute=ye().isPrimitive,Dz=Nr().isPrimitive,ote=Lz(),vte=M2(),tf=fa(),fte=Gz().factory,cte=p0(),lte=h0(),pte=lt(),dt=V(),dte=Z2(),gte=H0(),mte=cte(),Hz=["string","number","complex","boolean","date","any"],yte=["ndarray","shape","strides","offset","order","dtype","length","capacity","data"],hte=yte.length,qte=5,bte=fte(Hz);function wte(){return{ndims:0,shape:null,strides:null,offset:-1,order:"",dtype:"",length:-1,capacity:-1,ndarray:null,headerLength:0,rawBuffer:null}}function Ete(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!Dz(i));a++){if(!su(i))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "shape" field must only contain nonnegative integers. Value: "%s".',i));t.push(i)}return t}function Nte(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!Dz(i));a++){if(!ute(i))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "strides" field must only contain integers. Value: "%s".',i));t.push(i)}return t}function Ste(r,e){var t,i,a;if(r[0]!=="ndarray")throw new TypeError(dt('invalid argument. The first field in a range representing an ndarray must equal the string "ndarray", thus marking the beginning of an ndarray range. Value: "%s".',r[0]));for(a=1;a<r.length;a++)if(i=tf(r[a]),i==="shape")e.shape=Ete(r,a+1),e.ndims=e.shape.length,a+=e.ndims;else if(i==="strides")e.strides=Nte(r,a+1),a+=e.strides.length;else if(i==="offset"){if(a+=1,t=r[a],!su(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "offset" field must be a nonnegative integer. Value: "%s".',t));e.offset=t}else if(i==="order"){if(a+=1,t=tf(r[a]),!ote(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "order" field must be one of the following: "%s". Value: "%s".',mte.join('", "'),t));e.order=t}else if(i==="dtype"){if(a+=1,t=tf(r[a]),!bte(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "dtype" field must be one of the following: "%s". Value: "%s".',Hz.join('", "'),t));e.dtype=t}else if(i==="length"){if(a+=1,t=r[a],!su(t))throw new TypeError('invalid argument. Range representing an ndarray is invalid. "length" field must be a nonnegative integer.');e.length=t}else if(i==="capacity"){if(a+=1,t=r[a],!su(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "capacity" field must be a nonnegative integer. Value: "%s".',t));e.capacity=t}else if(i==="data"){a+=1;break}else throw new TypeError(dt('invalid argument. Range presenting an ndarray is invalid. Unrecognized ndarray field. Value: "%s".',i));return e}function Ote(r,e){return hte+r+e+qte}function Ate(r){var e,t;if(e=r.ndims,r.shape===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "shape" field.');if(r.strides===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "strides" field.');if(e>0&&r.strides.length!==e)throw new TypeError(dt("invalid argument. Range representing an ndarray is invalid. Number of strides does not match the number of dimensions. Number of dimensions: %d. Number of strides: %d.",e,r.strides.length));if(e===0&&(r.strides.length!==1||r.strides[0]!==0))throw new TypeError("invalid argument. Range representing an ndarray is invalid. A zero-dimensional ndarray must have a single stride equal to 0.");if(r.offset===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "offset" field.');if(r.order==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "order" field.');if(r.dtype==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "dtype" field.');if(r.length===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "length" field.');if(t=pte(r.shape),t!==r.length)throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. The "length" field is not consistent with the "shape" field. Expected length: "%s". Computed length: "%s".',r.length,t));if(r.capacity===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "capacity" field.');if(t>0&&!vte(r.capacity,r.shape,r.strides,r.offset))throw new TypeError('invalid argument. Range representing an ndarray is invalid. The "capacity" field is incompatible with the specified ndarray meta data. Ensure that the "offset" field is valid with regard to the "strides" field and that the data buffer has enough elements to satisfy the desired ndarray shape.');return r}function _te(r){var e;if(!dte(r))throw new TypeError("invalid argument. A range representing an ndarray must be either a single row or a single column.");return e=wte(),e.rawBuffer=gte(r),e=Ste(e.rawBuffer,e),e=Ate(e),e.headerLength=Ote(e.ndims,e.strides.length),e.ndarray=new lte("generic",e.rawBuffer,e.shape,e.strides,e.offset+e.headerLength,e.order),e}zz.exports=_te});var Jz=s(($Ue,Xz)=>{"use strict";var Tte=Wz();Xz.exports=Tte});var xz=s((QUe,Yz)=>{"use strict";var Ite=typeof String.prototype.trim<"u";Yz.exports=Ite});var af=s((KUe,Zz)=>{"use strict";var Rte=String.prototype.trim;Zz.exports=Rte});var rW=s((rGe,Kz)=>{"use strict";var $z=af(),Lte=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,Qz="\u180E";function Pte(){return $z.call(Lte)===""&&$z.call(Qz)===Qz}Kz.exports=Pte});var tW=s((eGe,eW)=>{"use strict";var Fte=qi(),jte=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function Mte(r){return Fte(r,jte,"$1")}eW.exports=Mte});var aW=s((tGe,iW)=>{"use strict";var Bte=af();function kte(r){return Bte.call(r)}iW.exports=kte});var Ei=s((iGe,nW)=>{"use strict";var Cte=xz(),Vte=rW(),Ute=tW(),Gte=aW(),nf;Cte&&Vte()?nf=Gte:nf=Ute;nW.exports=nf});var uW=s((aGe,sW)=>{"use strict";function Dte(r){return r===null}sW.exports=Dte});var sf=s((nGe,oW)=>{"use strict";var Hte=uW();oW.exports=Hte});var fW=s((sGe,vW)=>{"use strict";function zte(r){return r===void 0}vW.exports=zte});var uf=s((uGe,cW)=>{"use strict";var Wte=fW();cW.exports=Wte});var pW=s((oGe,lW)=>{"use strict";var vf=D(),ff=br(),Xte=ye().isPrimitive,Jte=sf(),Yte=uf(),uu=V();function of(r){return Xte(r)||Jte(r)||Yte(r)}function Tt(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof Tt))return new Tt(e,t,i);if(!of(e))throw new TypeError(uu("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!of(t))throw new TypeError(uu("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(of(i)){if(i===0)throw new RangeError(uu("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(uu("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}vf(Tt,"name","Slice");ff(Tt.prototype,"start",function(){return this._start});ff(Tt.prototype,"stop",function(){return this._stop});ff(Tt.prototype,"step",function(){return this._step});vf(Tt.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});vf(Tt.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});lW.exports=Tt});var Qa=s((vGe,dW)=>{"use strict";var xte=pW();dW.exports=xte});var mW=s((fGe,gW)=>{"use strict";var Zte=Qa(),$te=qt();function Qte(r){return r instanceof Zte||$te(r)==="Slice"}gW.exports=Qte});var hW=s((cGe,yW)=>{"use strict";var Kte=mW();yW.exports=Kte});var wW=s((lGe,bW)=>{"use strict";var cf=D(),qW=br(),rie=ye().isPrimitive,eie=sf(),tie=uf(),iie=hW(),aie=V();function nie(r){return rie(r)||eie(r)||tie(r)||iie(r)}function Te(){var r,e,t,i,a;if(r=arguments.length,!(this instanceof Te)){if(r===1)return new Te(arguments[0]);if(r===2)return new Te(arguments[0],arguments[1]);if(r===3)return new Te(arguments[0],arguments[1],arguments[2]);if(r===4)return new Te(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Te(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],a=0;a<r;a++)t.push(arguments[a]);return e=Object.create(Te.prototype),Te.apply(e,t)}for(this._data=[],a=0;a<r;a++){if(i=arguments[a],!nie(i))throw new TypeError(aie("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",a,i));this._data.push(i===void 0?null:i)}return this}cf(Te,"name","MultiSlice");qW(Te.prototype,"ndims",function(){return this._data.length});qW(Te.prototype,"data",function(){return this._data.slice()});cf(Te.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});cf(Te.prototype,"toJSON",function(){var e,t,i,a;for(e=this._data,t={type:"MultiSlice",data:[]},a=0;a<e.length;a++)i=e[a],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});bW.exports=Te});var ou=s((pGe,EW)=>{"use strict";var sie=wW();EW.exports=sie});var SW=s((dGe,NW)=>{"use strict";var uie=/(?:\s*-\s*)(?=\d+)(\d+)$/;NW.exports=uie});var AW=s((gGe,OW)=>{"use strict";var oie=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;OW.exports=oie});var IW=s((mGe,TW)=>{"use strict";var _W=Ur(),vie=SW(),fie=AW();function cie(r,e,t,i){var a;if(r==="end")return e;if(a=r.match(vie),a){if(r=e-parseInt(a[1],10),r<0){if(i)return-2;r=0}return r}return a=r.match(fie),a?(r=parseFloat(a[1]),r<1?i?-2:-1:t&&e>0&&r!==1?_W((e-1)/r):_W(e/r)):-1}TW.exports=cie});var LW=s((yGe,RW)=>{"use strict";var lie=/\s*:\s*/;RW.exports=lie});var FW=s((hGe,PW)=>{"use strict";var pie=/^[-+]?[0-9]+$/;PW.exports=pie});var MW=s((qGe,jW)=>{"use strict";var die=/^end/;jW.exports=die});var kW=s((bGe,BW)=>{"use strict";function gie(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}BW.exports=gie});var VW=s((wGe,CW)=>{"use strict";function mie(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}CW.exports=mie});var GW=s((EGe,UW)=>{"use strict";function yie(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}UW.exports=yie});var XW=s((NGe,WW)=>{"use strict";var DW=Qa(),hie=Ei(),HW=IW(),qie=LW(),lf=FW(),zW=MW(),Ka=kW(),ca=VW(),bie=GW();function wie(r,e,t){var i,a,n;if(i=hie(r).split(qie),a=i.length,a<2||a>3)return Ka();if(a===3)if(n=i[2],n.length===0)i[2]=1;else{if(lf.test(n)===!1)return Ka();if(n=parseInt(n,10),n===0)return bie();i[2]=n}else i.push(1);if(n=i[0],n.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(zW.test(n)){if(n=HW(n,e,i[2]<0,t),n<0)return n===-2?ca():Ka();i[2]<0&&n>=e&&(n-=1),i[0]=n}else if(lf.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0){if(t)return ca();n=0}}else if(n>=e){if(t)return ca();i[2]<0?n=e-1:n=e}i[0]=n}else return Ka();if(n=i[1],n.length===0)i[2]<0?i[1]=null:i[1]=e;else if(zW.test(n)){if(n=HW(n,e,i[2]<0,t),n<0)return n===-2?ca():Ka();i[1]=n}else if(lf.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0)if(i[2]>0){if(t)return ca();n=0}else{if(t&&n<-1)return ca();n=null}}else if(n>e){if(t)return ca();n=e}i[1]=n}else return Ka();return e===0?new DW(0,0,i[2]):new DW(i[0],i[1],i[2])}WW.exports=wie});var YW=s((SGe,JW)=>{"use strict";var Eie=XW();JW.exports=Eie});var ZW=s((OGe,xW)=>{"use strict";function Nie(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}xW.exports=Nie});var QW=s((AGe,$W)=>{"use strict";function Sie(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}$W.exports=Sie});var rX=s((_Ge,KW)=>{"use strict";function Oie(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}KW.exports=Oie});var tX=s((TGe,eX)=>{"use strict";function Aie(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}eX.exports=Aie});var aX=s((IGe,iX)=>{"use strict";var _ie=/\s*,\s*/;iX.exports=_ie});var sX=s((RGe,nX)=>{"use strict";var Tie=/^[-+]?[0-9]+$/;nX.exports=Tie});var vX=s((LGe,oX)=>{"use strict";var Iie=Ei(),Rie=Qa(),Lie=ou(),Pie=YW(),Fie=ZW(),jie=QW(),Mie=rX(),uX=tX(),Bie=aX(),kie=sX();function Cie(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(o=e.length,i=Iie(r).split(Bie),v=i.length,n=!1,a=[],l=0,c=0;c<v;c++){if(f=i[c],f==="..."){if(n)return Fie();for(n=!0,p=0;p<o-v+1;p++)a.push(new Rie(0,e[l],1)),l+=1;continue}if(u=e[l],kie.test(f)){if(f=parseInt(f,10),t){if(f<0){if(u+f<0)return uX()}else if(f>=u)return uX()}l+=1}else{if(f=Pie(f,u,t),f.code)return f;l+=1}a.push(f)}return a.length!==o?a.length<o?jie():Mie():Lie.apply(null,a)}oX.exports=Cie});var cX=s((PGe,fX)=>{"use strict";var Vie=vX();fX.exports=Vie});var dX=s((FGe,pX)=>{"use strict";var Uie=Yr().isPrimitive,lX=cX(),Gie=V();function Die(r,e,t){var i;if(!Uie(r))throw new TypeError(Gie('invalid argument. A slice indexing expression must be a string. Value: "%s".',r));if(i=lX(r,e,!0),i.code){if(i.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence.");if(i.code==="ERR_SLICE_INVALID_INCREMENT")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. The increment must be a non-zero integer value.");if(i.code==="ERR_SLICE_TOO_MANY_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression includes excess dimensions.");if(i.code==="ERR_SLICE_INSUFFICIENT_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression has too few dimensions.");if(i.code==="ERR_SLICE_INVALID_ELLIPSIS")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. A subsequence must only contain at most one ellipsis.");if(i.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError("invalid argument. The provided slice indexing expression resolves to a slice exceeding index bounds.");i=lX(r,e,!1)}}return i}pX.exports=Die});var mX=s((jGe,gX)=>{"use strict";var Hie=dX();gX.exports=Hie});var hX=s((MGe,yX)=>{"use strict";function zie(r){var e,t,i,a;for(e=r.length,t=[],a=0;a<e;a++)t.push(0);for(i=1,a=e-1;a>=0;a--)t[a]=i,i*=r[a];return t}function Wie(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function Xie(r,e){return e==="column-major"?Wie(r):zie(r)}yX.exports=Xie});var bX=s((BGe,qX)=>{"use strict";function Jie(r,e){var t,i,a;for(t=r.length,i=1,a=t-1;a>=0;a--)e[a]=i,i*=r[a];return e}function Yie(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function xie(r,e,t){return e==="column-major"?Yie(r,t):Jie(r,t)}qX.exports=xie});var vu=s((kGe,EX)=>{"use strict";var Zie=D(),wX=hX(),$ie=bX();Zie(wX,"assign",$ie);EX.exports=wX});var SX=s((CGe,NX)=>{"use strict";function Qie(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}NX.exports=Qie});var AX=s((VGe,OX)=>{"use strict";var Kie=Qa(),q0=SX();function rae(r,e,t){var i,a,n;if(i=r.start,a=r.stop,n=r.step,n===null&&(n=1),i===null)n>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return q0();i=0}}else if(i>=e){if(t)return q0();n<0?i=e-1:i=e}if(a===null)n>0?a=e:a=null;else if(a<0){if(a=e+a,a<0)if(n>0){if(t)return q0();a=0}else{if(t&&a<-1)return q0();a=null}}else if(a>e){if(t)return q0();a=e}return new Kie(i,a,n)}OX.exports=rae});var TX=s((UGe,_X)=>{"use strict";var eae=AX();_X.exports=eae});var RX=s((GGe,IX)=>{"use strict";function tae(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}IX.exports=tae});var FX=s((DGe,PX)=>{"use strict";var iae=ou(),b0=Qa(),aae=TX(),LX=RX();function nae(r,e,t){return r===null?new b0(0,e,1):typeof r=="number"?r>=e?t?LX():new b0(e,e,1):r<0?(r=e+r,r<0?t?LX():new b0(0,0,1):new b0(r,r+1,1)):new b0(r,r+1,1):aae(r,e,t)}function sae(r,e,t){var i,a,n,u;for(i=r.data,a=[],u=0;u<i.length;u++){if(n=nae(i[u],e[u],t),n.code!==void 0)return n;a.push(n)}return iae.apply(null,a)}PX.exports=sae});var MX=s((HGe,jX)=>{"use strict";var uae=FX();jX.exports=uae});var kX=s((zGe,BX)=>{"use strict";function oae(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}BX.exports=oae});var VX=s((WGe,CX)=>{"use strict";var vae=kX();CX.exports=vae});var GX=s((XGe,UX)=>{"use strict";var fae=xa();function cae(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:fae((i-t)/e)}UX.exports=cae});var HX=s((JGe,DX)=>{"use strict";var lae=GX();DX.exports=lae});var WX=s((YGe,zX)=>{"use strict";var pae=HX();function dae(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(pae(e[i]));return t}zX.exports=dae});var JX=s((xGe,XX)=>{"use strict";var gae=WX();XX.exports=gae});var xX=s((ZGe,YX)=>{"use strict";function mae(r){return r.dtype}YX.exports=mae});var $X=s(($Ge,ZX)=>{"use strict";var yae=xX();ZX.exports=yae});var KX=s((QGe,QX)=>{"use strict";var hae=Sn();function qae(r,e){var t=r.shape;return e?hae(t):t}QX.exports=qae});var eJ=s((KGe,rJ)=>{"use strict";var bae=KX();rJ.exports=bae});var iJ=s((rDe,tJ)=>{"use strict";var wae=vu(),Eae=Sn(),Nae="row-major";function Sae(r,e){var t,i,a;return a=r.strides,typeof a!="object"||a===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=Nae),wae(i,t))):e?Eae(a):a}tJ.exports=Sae});var nJ=s((eDe,aJ)=>{"use strict";var Oae=iJ();aJ.exports=Oae});var uJ=s((tDe,sJ)=>{"use strict";function Aae(r,e){var t,i,a;for(i=r.length,t=0,a=0;a<i;a++)e[a]<0&&(t-=e[a]*(r[a]-1));return t}sJ.exports=Aae});var fu=s((iDe,oJ)=>{"use strict";var _ae=uJ();oJ.exports=_ae});var fJ=s((aDe,vJ)=>{"use strict";var Tae=fu();function Iae(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:Tae(t,e))}vJ.exports=Iae});var lJ=s((nDe,cJ)=>{"use strict";var Rae=fJ();cJ.exports=Rae});var dJ=s((sDe,pJ)=>{"use strict";var Lae=W3(),pf="row-major",Pae="column-major";function Fae(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=Lae(e),t===1||t===3)?pf:t===2?Pae:r.shape.length===0?pf:null)}pJ.exports=Fae});var mJ=s((uDe,gJ)=>{"use strict";var jae=dJ();gJ.exports=jae});var hJ=s((oDe,yJ)=>{"use strict";function Mae(r){return r.data}yJ.exports=Mae});var bJ=s((vDe,qJ)=>{"use strict";var Bae=hJ();qJ.exports=Bae});var EJ=s((fDe,wJ)=>{"use strict";function kae(r,e,t){var i,a,n;for(i=r.data,a=t,n=0;n<i.length;n++)a+=e[n]*i[n].start;return a}wJ.exports=kae});var SJ=s((cDe,NJ)=>{"use strict";function Cae(r,e,t){var i,a,n,u;for(i=r.data,a=[],n=0;n<t.length;n++)u=t[n],a.push(e[u]*i[u].step);return a}NJ.exports=Cae});var AJ=s((lDe,OJ)=>{"use strict";var Vae=ci(),Uae=ge(),Gae=et(),Dae=qa(),Hae=ui(),zae=wa(),Wae=xi(),Xae=me(),Jae=tt(),Yae=ba(),xae=Ra(),Zae=ja(),$ae={binary:Vae,float64:Uae,float32:Gae,generic:Array,int16:Dae,int32:Hae,int8:zae,uint16:Wae,uint32:Xae,uint8:Jae,uint8c:Yae,complex64:xae,complex128:Zae};OJ.exports=$ae});var TJ=s((pDe,_J)=>{"use strict";var Qae=AJ();function Kae(r){return Qae[r]||null}_J.exports=Kae});var RJ=s((dDe,IJ)=>{"use strict";var rne=TJ();IJ.exports=rne});var PJ=s((gDe,LJ)=>{"use strict";var ene=qr(),tne=ci(),ine=ene(tne.allocUnsafe);LJ.exports=ine});var jJ=s((mDe,FJ)=>{"use strict";var ane=be(),nne=V(),sne=ci();function une(r){if(!ane(r))throw new TypeError(nne("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return sne.allocUnsafe(r)}FJ.exports=une});var BJ=s((yDe,MJ)=>{"use strict";var one=be(),vne=V(),fne=ci();function cne(r){if(!one(r))throw new TypeError(vne("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new fne(r)}MJ.exports=cne});var CJ=s((hDe,kJ)=>{"use strict";var lne=PJ(),pne=jJ(),dne=BJ(),df;lne?df=pne:df=dne;kJ.exports=df});var UJ=s((qDe,VJ)=>{"use strict";function gne(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}VJ.exports=gne});var DJ=s((bDe,GJ)=>{"use strict";var mne=RJ(),yne=CJ(),hne=UJ();function qne(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function bne(r){return hne(yne(r))}function wne(r,e){var t=mne(r);return t?new t(e):null}function Ene(r,e){return r==="generic"?qne(e):r==="binary"?bne(e):wne(r,e)}GJ.exports=Ene});var gf=s((wDe,HJ)=>{"use strict";var Nne=DJ();HJ.exports=Nne});var WJ=s((EDe,zJ)=>{"use strict";var Sne=gf(),One=si();function Ane(r,e,t,i,a){var n,u;return u=t.length,u===0?n=[0]:n=One(u),new r(e,Sne(e,0),t,n,0,i,{readonly:a})}zJ.exports=Ane});var $J=s((NDe,ZJ)=>{"use strict";var XJ=MX(),_ne=VX(),JJ=JX(),mf=t3(),Tne=si(),YJ=lt(),Ine=$X(),Rne=eJ(),Lne=nJ(),Pne=lJ(),Fne=mJ(),yf=bJ(),xJ=V(),jne=EJ(),Mne=SJ(),Bne=WJ();function kne(r,e,t,i){var a,n,u,o,v,f,c,l,p,m;if(u=Ine(r),o=Rne(r,!0),a=Lne(r,!0),n=Pne(r),v=Fne(r),c=o.length,e.ndims!==c)throw new RangeError(xJ("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,yf(r),o,a,n,v,{readonly:!i});if(f=_ne(e),m=XJ(e,o,!0),m.code){if(t)throw new RangeError(xJ("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));m=XJ(e,o,!1),p=JJ(m),YJ(mf(p,f))>0&&(p=Tne(p.length))}else p=JJ(m);return YJ(p)===0?Bne(l,u,mf(p,f),v,!i):(n=jne(m,a,n),p=mf(p,f),p.length===0?new l(u,yf(r),[],[0],n,v,{readonly:!i}):(a=Mne(m,a,f),new l(u,yf(r),p,a,n,v,{readonly:!i})))}ZJ.exports=kne});var hf=s((SDe,QJ)=>{"use strict";var Cne=$J();QJ.exports=Cne});var rY=s((ODe,KJ)=>{"use strict";var Vne=h0();function Une(r){return r instanceof Vne||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}KJ.exports=Une});var tY=s((ADe,eY)=>{"use strict";var Gne=rY();eY.exports=Gne});var aY=s((_De,iY)=>{"use strict";function Dne(r){var e=r.flags;return e&&e.READONLY===!0}iY.exports=Dne});var sY=s((TDe,nY)=>{"use strict";var Hne=aY();nY.exports=Hne});var oY=s((IDe,uY)=>{"use strict";var zne=be().isPrimitive,Wne=Ve(),qf=V();function Xne(r){var e,t,i,a;if(typeof r!="object"||r===null)throw new TypeError(qf("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!Wne(t))throw new TypeError(qf("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],a=0;a<t.length;a++){if(i=t[a],!zne(i))throw new TypeError(qf("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}uY.exports=Xne});var fY=s((RDe,vY)=>{"use strict";var Jne=oY();vY.exports=Jne});var bf=s((LDe,cY)=>{"use strict";var Yne="row-major";function xne(r,e,t,i,a){var n,u;for(n=r-1;n>i;n--)a[n]=t[n];for(n=i;n>=0&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n--);for(n-=1;n>=0;n--)a[n]=t[n];return a}function Zne(r,e,t,i,a){var n,u;for(n=0;n<i;n++)a[n]=t[n];for(n=i;n<r&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n++);for(n+=1;n<r;n++)a[n]=t[n];return a}function $ne(r,e,t,i,a){var n=r.length;if(n===0)return null;if(i<0){if(i+=n,i<0)return null}else if(i>=n)return null;return e===Yne?xne(n,r,t,i,a):Zne(n,r,t,i,a)}cY.exports=$ne});var pY=s((PDe,lY)=>{"use strict";var Qne=si(),Kne=bf();function r0e(r,e,t,i){return Kne(r,e,t,i,Qne(r.length))}lY.exports=r0e});var mY=s((FDe,gY)=>{"use strict";var e0e=D(),dY=pY(),t0e=bf();e0e(dY,"assign",t0e);gY.exports=dY});var hY=s((jDe,yY)=>{"use strict";var We=ou();function i0e(r){switch(r.length){case 0:return new We;case 1:return new We(r[0]);case 2:return new We(r[0],r[1]);case 3:return new We(r[0],r[1],r[2]);case 4:return new We(r[0],r[1],r[2],r[3]);case 5:return new We(r[0],r[1],r[2],r[3],r[4]);case 6:return new We(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6]);case 8:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]);case 9:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]);case 10:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]);default:return We.apply(null,r)}}yY.exports=i0e});var bY=s((MDe,qY)=>{"use strict";var a0e=hY();qY.exports=a0e});var SY=s((BDe,NY)=>{"use strict";var wf=D(),n0e=hr(),s0e=de().isPrimitive,u0e=tY(),o0e=sY(),v0e=vr(),wY=Rn(),f0e=si(),c0e=fY(),l0e=lt(),p0e=hf(),d0e=mY().assign,g0e=bY(),cu=V();function EY(r){var e,t,i,a,n,u,o,v,f,c,l;if(!u0e(r))throw new TypeError(cu("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(a={writable:!1},arguments.length>1){if(e=arguments[1],!n0e(e))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(v0e(e,"readonly")){if(!s0e(e.readonly))throw new TypeError(cu("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(a.writable=!e.readonly,a.writable&&o0e(r))throw new Error(cu("invalid option. Cannot write to read-only array."))}}if(t=c0e(r),i=t.length,i<3)throw new TypeError("invalid argument. First argument must be an ndarray having at least three dimensions.");return c=l0e(t),c===0&&(u=!0),c/=t[i-1]*t[i-2],v=i-3,f=t[v],l=-1,o=f0e(i),o[i-1]=null,o[i-2]=null,n={},wf(n,"next",p),wf(n,"return",m),wY&&wf(n,wY,y),n;function p(){var g,d,h;return l+=1,u||l>=c?{done:!0}:(g=o.slice(),d=g0e(o),h=(o[v]+1)%f,o[v]=h,h===0&&(o=d0e(t,"row-major",o,v-1,o)),{value:[g,p0e(r,d,!0,a.writable)],done:!1})}function m(g){return u=!0,arguments.length?{value:g,done:!0}:{done:!0}}function y(){return EY(r,a)}}NY.exports=EY});var AY=s((kDe,OY)=>{"use strict";var m0e=SY();OY.exports=m0e});var IY=s((CDe,TY)=>{"use strict";var y0e=AY(),_Y=fs(),h0e=On();function q0e(r){return[["[ ] ="],[""],[r.ndarray.get()]]}function b0e(r){var e=[["[ : ] ="],[""]];return r.length===0?(e.push(["(empty)"]),e):e.concat(_Y(r.ndarray.data,[r.length,1],[r.strides[0],1],r.ndarray.offset))}function w0(r){return h0e("",r)}function w0e(r){var e,t,i,a,n;for(e=r.length,t=e-1,n=e-2,i="",a=0;a<e;a++)a<n?i+=r[a].toString():i+=":",a<t&&(i+=", ");return i}function E0e(r){return _Y(r.data,r.shape,r.strides,r.offset)}function N0e(r,e){var t;for(t=0;t<r.length;t++)e.push(r[t]);return e}function S0e(r,e){var t=w0(e);return t[0]="ndarray: ("+r.join(", ")+")",t}function O0e(r,e){var t=w0(e);return t[0]="[ "+w0e(r)+" ] =",t}function A0e(r){var e,t,i,a,n,u;if(t=r.ndims,t===0)return q0e(r);if(t===1)return b0e(r);for(e=r.shape,i=e[t-1],n=y0e(r.ndarray),a=[S0e(e,i),w0(i)];u=n.next(),!u.done;)a.push(O0e(u.value[0],i)),a.push(w0(i)),N0e(E0e(u.value[1]),a),a.push(w0(i));return a}TY.exports=A0e});var LY=s((VDe,RY)=>{"use strict";var _0e=IY();RY.exports=_0e});var jY=s((UDe,FY)=>{"use strict";function PY(r,e,t,i,a,n){var u,o,v,f,c;if(n>=e.length)return r.accessors[0](r.data,i);for(v=[],f=e[n],u=t[n],c=0;c<f;c++)o=PY(r,e,t,i,a,n+1),v.push(o),i+=u;return v}FY.exports=PY});var BY=s((GDe,MY)=>{"use strict";var T0e=Fn(),I0e=jY();function R0e(r,e,t,i,a){var n;if(e.length===0)return[];for(n=0;n<e.length;n++)if(e[n]===0)return[];return I0e(T0e(r),e,t,i,a,0)}MY.exports=R0e});var CY=s((DDe,kY)=>{"use strict";var L0e=BY();kY.exports=L0e});var UY=s((HDe,VY)=>{"use strict";var P0e=vu(),F0e=fu(),j0e=gf(),M0e=V(),B0e=h0(),k0e=lt();function C0e(r,e,t){var i,a,n,u;if(i=e.length,i>0?(n=k0e(e),u=P0e(e,t)):(n=1,u=[0]),a=j0e(r,n),a===null)throw new TypeError(M0e("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new B0e(r,a,e,u,F0e(e,u),t)}VY.exports=C0e});var DY=s((zDe,GY)=>{"use strict";var V0e=UY();GY.exports=V0e});var zY=s((WDe,HY)=>{"use strict";var $e=Qr(),U0e=h0(),G0e=Az(),D0e=lt(),H0e=Jz(),z0e=mX(),W0e=vu(),X0e=hf(),J0e=LY(),Y0e=fu(),x0e=CY(),Z0e=DY();function $0e(r){return $e(r,"ndarray",U0e),$e(r,"ndarray2range",G0e),$e(r,"numel",D0e),$e(r,"range2ndarray",H0e),$e(r,"seq2multislice",z0e),$e(r,"shape2strides",W0e),$e(r,"slice",X0e),$e(r,"stackedRepr",J0e),$e(r,"strides2offset",Y0e),$e(r,"toArray",x0e),$e(r,"zeros",Z0e),r}HY.exports=$0e});var XY=s((XDe,WY)=>{"use strict";var Q0e=ni();function K0e(r,e,t,i){Q0e(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}WY.exports=K0e});var Sr=s((JDe,JY)=>{"use strict";var rse=XY();JY.exports=rse});var xY=s((YDe,YY)=>{"use strict";function ese(r){return e;function e(){return r}}YY.exports=ese});var mr=s((xDe,ZY)=>{"use strict";var tse=xY();ZY.exports=tse});var QY=s((ZDe,$Y)=>{"use strict";var ise=pr();function ase(r){return r===0&&1/r===ise}$Y.exports=ase});var Ni=s(($De,KY)=>{"use strict";var nse=QY();KY.exports=nse});var tx=s((QDe,ex)=>{"use strict";var sse=Ni(),rx=z(),Ef=pr();function use(r,e){return rx(r)||rx(e)?NaN:r===Ef||e===Ef?Ef:r===e&&r===0?sse(r)?r:e:r>e?r:e}ex.exports=use});var Nf=s((KDe,ix)=>{"use strict";var ose=tx();ix.exports=ose});var sx=s((rHe,nx)=>{"use strict";var ax=65535;function vse(r,e){var t,i,a,n,u,o;return r>>>=0,e>>>=0,a=r>>>16>>>0,n=e>>>16>>>0,u=(r&ax)>>>0,o=(e&ax)>>>0,t=u*o>>>0,i=a*o+u*n<<16>>>0,t+i>>>0}nx.exports=vse});var ox=s((eHe,ux)=>{"use strict";var fse=sx();ux.exports=fse});var Sf=s((tHe,vx)=>{"use strict";function cse(r,e,t,i,a,n,u){var o,v,f,c,l,p,m;for(o=e.data,v=a.data,c=e.accessors[0],f=a.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=n;return e}vx.exports=cse});var lx=s((iHe,cx)=>{"use strict";var fx=Fn(),lse=Sf(),Of=8;function pse(r,e,t,i,a){var n,u,o,v,f,c;if(r<=0)return i;if(o=fx(e),v=fx(i),o.accessorProtocol||v.accessorProtocol)return t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,lse(r,o,t,n,v,a,u),v.data;if(t===1&&a===1){if(f=r%Of,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<Of)return i;for(c=f;c<r;c+=Of)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,c=0;c<r;c++)i[u]=e[n],n+=t,u+=a;return i}cx.exports=pse});var gx=s((aHe,dx)=>{"use strict";var px=Fn(),dse=Sf(),E0=8;function gse(r,e,t,i,a,n,u){var o,v,f,c,l,p;if(r<=0)return a;if(f=px(e),c=px(a),f.accessorProtocol||c.accessorProtocol)return dse(r,f,t,i,c,n,u),c.data;if(o=i,v=u,t===1&&n===1){if(l=r%E0,l>0)for(p=0;p<l;p++)a[v]=e[o],o+=t,v+=n;if(r<E0)return a;for(p=l;p<r;p+=E0)a[v]=e[o],a[v+1]=e[o+1],a[v+2]=e[o+2],a[v+3]=e[o+3],a[v+4]=e[o+4],a[v+5]=e[o+5],a[v+6]=e[o+6],a[v+7]=e[o+7],o+=E0,v+=E0;return a}for(p=0;p<r;p++)a[v]=e[o],o+=t,v+=n;return a}dx.exports=gse});var Si=s((nHe,yx)=>{"use strict";var mse=D(),mx=lx(),yse=gx();mse(mx,"ndarray",yse);yx.exports=mx});var qx=s((sHe,hx)=>{"use strict";function hse(){}hx.exports=hse});var wx=s((uHe,bx)=>{"use strict";var qse=qx();function bse(){return qse.name==="foo"}bx.exports=bse});var Nx=s((oHe,Ex)=>{"use strict";var wse=wx();Ex.exports=wse});var Ox=s((vHe,Sx)=>{"use strict";var Ese=qr(),Nse=Nx(),Sse=V(),Ose=z1().REGEXP,Ase=Nse();function _se(r){if(Ese(r)===!1)throw new TypeError(Sse("invalid argument. Must provide a function. Value: `%s`.",r));return Ase?r.name:Ose.exec(r.toString())[1]}Sx.exports=_se});var _x=s((fHe,Ax)=>{"use strict";var Tse=Ox();Ax.exports=Tse});var Ix=s((cHe,Tx)=>{"use strict";var Ise=wa(),Rse=tt(),Lse=ba(),Pse=qa(),Fse=xi(),jse=ui(),Mse=me(),Bse=et(),kse=ge(),Cse=[kse,Bse,jse,Mse,Pse,Fse,Ise,Rse,Lse];Tx.exports=Cse});var Rx=s((lHe,Vse)=>{Vse.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var Bx=s((pHe,Mx)=>{"use strict";var Use=qt(),Gse=_x(),Fx=ta(),Dse=Y1(),Hse=ge(),Lx=Ix(),Px=Rx(),lu=Dse()?Fx(Hse):jx;lu=Gse(lu)==="TypedArray"?lu:jx;function jx(){}function zse(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof lu)return!0;for(t=0;t<Lx.length;t++)if(r instanceof Lx[t])return!0;for(;r;){for(e=Use(r),t=0;t<Px.length;t++)if(Px[t]===e)return!0;r=Fx(r)}return!1}Mx.exports=zse});var Cx=s((dHe,kx)=>{"use strict";var Wse=Bx();kx.exports=Wse});var Ux=s((gHe,Vx)=>{"use strict";var Xse=Ra(),Jse=ja(),Yse=[Jse,Xse];Vx.exports=Yse});var Gx=s((mHe,xse)=>{xse.exports=["Complex64Array","Complex128Array"]});var Wx=s((yHe,zx)=>{"use strict";var Zse=qt(),$se=ta(),Dx=Ux(),Hx=Gx();function Qse(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<Dx.length;t++)if(r instanceof Dx[t])return!0;for(;r;){for(e=Zse(r),t=0;t<Hx.length;t++)if(Hx[t]===e)return!0;r=$se(r)}return!1}zx.exports=Qse});var Jx=s((hHe,Xx)=>{"use strict";var Kse=Wx();Xx.exports=Kse});var xx=s((qHe,Yx)=>{"use strict";var rue=V();function eue(r,e){if(typeof e!="function")throw new TypeError(rue("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}Yx.exports=eue});var $x=s((bHe,Zx)=>{"use strict";var tue=xx();Zx.exports=tue});var Kx=s((wHe,Qx)=>{"use strict";var iue=wa(),aue=tt(),nue=ba(),sue=qa(),uue=xi(),oue=ui(),vue=me(),fue=et(),cue=ge(),lue=Ra(),pue=ja(),due=[[cue,"Float64Array"],[fue,"Float32Array"],[oue,"Int32Array"],[vue,"Uint32Array"],[sue,"Int16Array"],[uue,"Uint16Array"],[iue,"Int8Array"],[aue,"Uint8Array"],[nue,"Uint8ClampedArray"],[lue,"Complex64Array"],[pue,"Complex128Array"]];Qx.exports=due});var eZ=s((EHe,rZ)=>{"use strict";var gue=$x(),mue=qt(),yue=ta(),rn=Kx();function hue(r){var e,t;for(t=0;t<rn.length;t++)if(gue(r,rn[t][0]))return rn[t][1];for(;r;){for(e=mue(r),t=0;t<rn.length;t++)if(e===rn[t][1])return rn[t][1];r=yue(r)}}rZ.exports=hue});var iZ=s((NHe,tZ)=>{"use strict";var que=Cx(),bue=Jx(),wue=Sa(),Eue=Oa(),Nue=V(),Sue=eZ();function Oue(r){var e,t,i;if(que(r))e=r;else if(bue(r))r.BYTES_PER_ELEMENT===8?e=wue(r,0):e=Eue(r,0);else throw new TypeError(Nue("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:Sue(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}tZ.exports=Oue});var Or=s((SHe,aZ)=>{"use strict";var Aue=iZ();aZ.exports=Aue});var Af=s((OHe,nZ)=>{"use strict";var _ue=ya(),Tue=Ur(),Iue=_ue-1;function Rue(){var r=Tue(1+Iue*Math.random());return r>>>0}nZ.exports=Rue});var jf=s((AHe,mZ)=>{"use strict";var It=D(),Oi=br(),sZ=Sr(),_f=vr(),Lue=hr(),Pue=Ve(),uZ=bt(),Fue=de().isPrimitive,oZ=nt().isPrimitive,pZ=sa(),dZ=ya(),Ie=me(),jue=Nf(),Ff=ox(),en=Si(),Mue=Or(),Le=V(),vZ=Af(),ue=624,Tf=397,fZ=dZ>>>0,Bue=19650218>>>0,If=2147483648>>>0,Rf=2147483647>>>0,kue=1812433253>>>0,Cue=1664525>>>0,Vue=1566083941>>>0,Uue=2636928640>>>0,Gue=4022730752>>>0,Due=2567483615>>>0,Lf=[0>>>0,Due>>>0],gZ=1/(pZ+1),Hue=67108864>>>0,zue=2147483648>>>0,Pf=1>>>0,Wue=pZ*gZ,pu=1,du=3,Ai=2,_i=ue+3,Re=ue+5,N0=ue+6;function cZ(r,e){var t;return e?t="option":t="argument",r.length<N0+1?new RangeError(Le("invalid %s. `state` array has insufficient length.",t)):r[0]!==pu?new RangeError(Le("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,pu,r[0])):r[1]!==du?new RangeError(Le("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,du,r[1])):r[Ai]!==ue?new RangeError(Le("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ue,r[Ai])):r[_i]!==1?new RangeError(Le("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[_i])):r[Re]!==r.length-N0?new RangeError(Le("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-N0,r[Re])):null}function lZ(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=Ff(t,kue)+i>>>0;return r}function Xue(r,e,t,i){var a,n,u,o;for(n=1,u=0,o=jue(e,i);o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=Ff(a,Cue)>>>0,r[n]=(r[n]>>>0^a)+t[u]+u>>>0,n+=1,u+=1,n>=e&&(r[0]=r[e-1],n=1),u>=i&&(u=0);for(o=e-1;o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=Ff(a,Vue)>>>0,r[n]=(r[n]>>>0^a)-n>>>0,n+=1,n>=e&&(r[0]=r[e-1],n=1);return r[0]=zue,r}function Jue(r){var e,t,i,a;for(a=ue-Tf,t=0;t<a;t++)e=r[t]&If|r[t+1]&Rf,r[t]=r[t+Tf]^e>>>1^Lf[e&Pf];for(i=ue-1;t<i;t++)e=r[t]&If|r[t+1]&Rf,r[t]=r[t-a]^e>>>1^Lf[e&Pf];return e=r[i]&If|r[0]&Rf,r[i]=r[Tf-1]^e>>>1^Lf[e&Pf],r}function Yue(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!Lue(r))throw new TypeError(Le("invalid argument. Options argument must be an object. Value: `%s`.",r));if(_f(r,"copy")&&(i.copy=r.copy,!Fue(r.copy)))throw new TypeError(Le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(_f(r,"state")){if(t=r.state,i.state=!0,!uZ(t))throw new TypeError(Le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=cZ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ie(t.length),en(t.length,t,1,e,1)),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,t[Re])}if(a===void 0)if(_f(r,"seed"))if(a=r.seed,i.seed=!0,oZ(a)){if(a>fZ)throw new RangeError(Le("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else{if(Pue(a)===!1||a.length<1)throw new TypeError(Le("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a.length===1){if(a=a[0],!oZ(a))throw new TypeError(Le("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a>fZ)throw new RangeError(Le("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else n=a.length,e=new Ie(N0+n),e[0]=pu,e[1]=du,e[Ai]=ue,e[_i]=1,e[_i+1]=ue,e[Re]=n,en.ndarray(n,a,1,0,e,1,Re+1),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,n),t=lZ(t,ue,Bue),t=Xue(t,ue,a,n)}else a=vZ()>>>0}else a=vZ()>>>0;return t===void 0&&(e=new Ie(N0+1),e[0]=pu,e[1]=du,e[Ai]=ue,e[_i]=1,e[_i+1]=ue,e[Re]=1,e[Re+1]=a,t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,1),t=lZ(t,ue,a)),It(y,"NAME","mt19937"),Oi(y,"seed",o),Oi(y,"seedLength",v),sZ(y,"state",l,p),Oi(y,"stateLength",f),Oi(y,"byteLength",c),It(y,"toJSON",m),It(y,"MIN",0),It(y,"MAX",dZ),It(y,"normalized",g),It(g,"NAME",y.NAME),Oi(g,"seed",o),Oi(g,"seedLength",v),sZ(g,"state",l,p),Oi(g,"stateLength",f),Oi(g,"byteLength",c),It(g,"toJSON",m),It(g,"MIN",0),It(g,"MAX",Wue),y;function o(){var d=e[Re];return en(d,a,1,new Ie(d),1)}function v(){return e[Re]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return en(d,e,1,new Ie(d),1)}function p(d){var h;if(!uZ(d))throw new TypeError(Le("invalid argument. Must provide a Uint32Array. Value: `%s`.",d));if(h=cZ(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?en(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Ie(d.length)),en(d.length,d,1,e,1)),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,e[Re])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=Mue(e),d.params=[],d}function y(){var d,h;return h=e[_i+1],h>=ue&&(t=Jue(t),h=0),d=t[h],e[_i+1]=h+1,d^=d>>>11,d^=d<<7&Uue,d^=d<<15&Gue,d^=d>>>18,d>>>0}function g(){var d=y()>>>5,h=y()>>>6;return(d*Hue+h)*gZ}}mZ.exports=Yue});var hZ=s((_He,yZ)=>{"use strict";var xue=jf(),Zue=Af(),$ue=xue({seed:Zue()});yZ.exports=$ue});var Wr=s((THe,bZ)=>{"use strict";var Que=D(),qZ=hZ(),Kue=jf();Que(qZ,"factory",Kue);bZ.exports=qZ});var SZ=s((IHe,NZ)=>{"use strict";var wZ=Nr().isPrimitive,Mf=V(),EZ=oe();function roe(r,e){return!wZ(r)||EZ(r)?new TypeError(Mf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!wZ(e)||EZ(e)?new TypeError(Mf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Mf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}NZ.exports=roe});var AZ=s((RHe,OZ)=>{"use strict";var eoe=Gr(),toe=pt(),ioe=Ya();function aoe(r,e,t){return e+eoe(toe(ioe*r()),2)*(t-e)}OZ.exports=aoe});var Bf=s((LHe,jZ)=>{"use strict";var Rt=D(),gu=br(),_Z=Sr(),TZ=hr(),IZ=qr(),RZ=vr(),LZ=mr(),noe=Lr(),mu=Wr().factory,PZ=z(),soe=Or(),yu=V(),uoe=SZ(),FZ=AZ();function ooe(){var r,e,t,i,a,n;if(arguments.length===0)e=mu();else if(arguments.length===1){if(r=arguments[0],!TZ(r))throw new TypeError(yu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(RZ(r,"prng")){if(!IZ(r.prng))throw new TypeError(yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=mu(r)}else{if(a=arguments[0],n=arguments[1],i=uoe(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!TZ(r))throw new TypeError(yu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(RZ(r,"prng")){if(!IZ(r.prng))throw new TypeError(yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=mu(r)}else e=mu()}return a===void 0?t=y:t=m,Rt(t,"NAME","arcsine"),r&&r.prng?(Rt(t,"seed",null),Rt(t,"seedLength",null),_Z(t,"state",LZ(null),noe),Rt(t,"stateLength",null),Rt(t,"byteLength",null),Rt(t,"toJSON",LZ(null)),Rt(t,"PRNG",e)):(gu(t,"seed",u),gu(t,"seedLength",o),_Z(t,"state",c,l),gu(t,"stateLength",v),gu(t,"byteLength",f),Rt(t,"toJSON",p),Rt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=soe(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return FZ(e,a,n)}function y(g,d){return PZ(g)||PZ(d)||g>=d?NaN:FZ(e,g,d)}}jZ.exports=ooe});var BZ=s((PHe,MZ)=>{"use strict";var voe=Bf(),foe=voe();MZ.exports=foe});var VZ=s((FHe,CZ)=>{"use strict";var coe=D(),kZ=BZ(),loe=Bf();coe(kZ,"factory",loe);CZ.exports=kZ});var kf=s((jHe,WZ)=>{"use strict";var Lt=D(),hu=br(),UZ=Sr(),GZ=hr(),poe=Mn().isPrimitive,DZ=qr(),HZ=vr(),zZ=mr(),doe=Lr(),qu=Wr().factory,goe=z(),moe=Or(),bu=V();function yoe(){var r,e,t,i;if(arguments.length===0)e=qu();else if(arguments.length===1&&GZ(arguments[0]))if(r=arguments[0],HZ(r,"prng")){if(!DZ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qu(r);else{if(i=arguments[0],!poe(i))throw new TypeError(bu("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!GZ(r))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(HZ(r,"prng")){if(!DZ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qu(r)}else e=qu()}return i===void 0?t=p:t=l,Lt(t,"NAME","bernoulli"),r&&r.prng?(Lt(t,"seed",null),Lt(t,"seedLength",null),UZ(t,"state",zZ(null),doe),Lt(t,"stateLength",null),Lt(t,"byteLength",null),Lt(t,"toJSON",zZ(null)),Lt(t,"PRNG",e)):(hu(t,"seed",a),hu(t,"seedLength",n),UZ(t,"state",v,f),hu(t,"stateLength",u),hu(t,"byteLength",o),Lt(t,"toJSON",c),Lt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=moe(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return goe(m)||m<0||m>1?NaN:e()<=m?1:0}}WZ.exports=yoe});var JZ=s((MHe,XZ)=>{"use strict";var hoe=kf(),qoe=hoe();XZ.exports=qoe});var ZZ=s((BHe,xZ)=>{"use strict";var boe=D(),YZ=JZ(),woe=kf();boe(YZ,"factory",woe);xZ.exports=YZ});var r$=s((kHe,KZ)=>{"use strict";var Eoe=Rr(),$Z=xr(),Noe=wr(),QZ=.00991256303526217;function Soe(r,e){var t,i,a;for(i=$Z(-.5*e*e),t=[],t.push(QZ/i),t.push(e),a=2;a<r;a++)t[a]=Eoe(-2*Noe(QZ/t[a-1]+i)),i=$Z(-.5*t[a]*t[a]);return t.push(0),t}KZ.exports=Soe});var t$=s((CHe,e$)=>{"use strict";function Ooe(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}e$.exports=Ooe});var n$=s((VHe,a$)=>{"use strict";var i$=wr();function Aoe(r,e,t){var i,a;do i=i$(r())/e,a=i$(r());while(-2*a<i*i);return t?i-e:e-i}a$.exports=Aoe});var v$=s((UHe,o$)=>{"use strict";var _oe=Dr(),s$=xr(),Toe=r$(),Ioe=t$(),Roe=n$(),Loe=128,u$=3.442619855899,la=Toe(Loe,u$),Poe=Ioe(la),Foe=127;function joe(r,e){return t;function t(){for(var i,a,n,u,o,v,f;;){if(o=2*r()-1,v=e()&Foe,_oe(o)<Poe[v])return o*la[v];if(v===0)return Roe(r,u$,o<0);if(u=o*la[v],n=u*u,f=v+1,i=s$(-.5*(la[v]*la[v]-n)),a=s$(-.5*(la[f]*la[f]-n)),a+r()*(i-a)<1)return u}}}o$.exports=joe});var Vf=s((GHe,l$)=>{"use strict";var Ti=D(),wu=br(),f$=Sr(),Moe=qr(),Boe=hr(),koe=de().isPrimitive,Eu=vr(),Coe=bt(),Cf=Wr().factory,c$=mr(),Voe=Lr(),Uoe=Ur(),Goe=ya(),Doe=Or(),S0=V(),Hoe=v$();function zoe(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!Boe(r))throw new TypeError(S0("invalid argument. Must provide an object. Value: `%s`.",r));if(Eu(r,"copy")&&(a.copy=r.copy,!koe(r.copy)))throw new TypeError(S0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Eu(r,"prng")){if(!Moe(r.prng))throw new TypeError(S0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Eu(r,"state")){if(a.state=r.state,!Coe(r.state))throw new TypeError(S0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Eu(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(S0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(t=Cf(a),e=t.normalized):(t=Cf({seed:Uoe(1+Goe*e()),copy:a.copy}),a.seed=null):(t=Cf(a),e=t.normalized),i=Hoe(e,t),Ti(i,"NAME","improved-ziggurat"),a.seed===null?(Ti(i,"seed",null),Ti(i,"seedLength",null)):(wu(i,"seed",n),wu(i,"seedLength",u)),r&&r.prng?(f$(i,"state",c$(null),Voe),Ti(i,"stateLength",null),Ti(i,"byteLength",null),Ti(i,"toJSON",c$(null))):(f$(i,"state",f,c),wu(i,"stateLength",o),wu(i,"byteLength",v),Ti(i,"toJSON",l)),Ti(i,"PRNG",e),i;function n(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=Doe(t.state),p.params=[],p}}l$.exports=zoe});var d$=s((DHe,p$)=>{"use strict";var Woe=Vf(),Xoe=Woe();p$.exports=Xoe});var Ii=s((HHe,m$)=>{"use strict";var Joe=D(),g$=d$(),Yoe=Vf();Joe(g$,"factory",Yoe);m$.exports=g$});var h$=s((zHe,y$)=>{"use strict";var xoe=qr(),Zoe=xoe(Object.assign);y$.exports=Zoe});var b$=s((WHe,q$)=>{"use strict";var $oe=Object.assign;q$.exports=$oe});var E$=s((XHe,w$)=>{"use strict";var Qoe=typeof Object.getOwnPropertySymbols<"u";w$.exports=Qoe});var O$=s((JHe,S$)=>{"use strict";var N$=Ba(),Koe=N$.getOwnPropertySymbols;function r1e(r){return Koe(N$(r))}S$.exports=r1e});var _$=s((YHe,A$)=>{"use strict";function e1e(){return[]}A$.exports=e1e});var I$=s((xHe,T$)=>{"use strict";var t1e=E$(),i1e=O$(),a1e=_$(),Uf;t1e?Uf=i1e:Uf=a1e;T$.exports=Uf});var L$=s((ZHe,R$)=>{"use strict";var n1e=Va(),s1e=I$(),u1e=kn();function o1e(r){var e,t,i;for(e=n1e(r),t=s1e(r),i=0;i<t.length;i++)u1e(r,t[i])&&e.push(t[i]);return e}R$.exports=o1e});var F$=s(($He,P$)=>{"use strict";var v1e=L$();P$.exports=v1e});var B$=s((QHe,M$)=>{"use strict";var f1e=F$(),j$=Ba(),c1e=V();function l1e(r){var e,t,i,a,n,u,o;if(r==null)throw new TypeError(c1e("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(n=j$(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=f1e(j$(e)),a=t.length,o=0;o<a;o++)i=t[o],n[i]=e[i];return n}M$.exports=l1e});var O0=s((KHe,k$)=>{"use strict";var p1e=h$(),d1e=b$(),g1e=B$(),Gf;p1e?Gf=d1e:Gf=g1e;k$.exports=Gf});var G$=s((rze,U$)=>{"use strict";var C$=Hr().isPrimitive,V$=V();function m1e(r,e){return C$(r)?C$(e)?null:new TypeError(V$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(V$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}U$.exports=m1e});var X$=s((eze,W$)=>{"use strict";var D$=wr(),H$=Rr(),y1e=Gr(),z$=1/3;function h1e(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(t<1?(v=t+1-z$,o=1/H$(9*v),c=y1e(r(),1/t)):(v=t-z$,o=1/H$(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,a=f*f,n=1-.331*a*a,u=.5*a+v*(1-p+D$(p)),l=r(),(l<n||D$(l)<u)&&(i=!1)}return v*p*c}W$.exports=h1e});var x$=s((tze,Y$)=>{"use strict";var Df=Gr(),J$=wr();function q1e(r,e,t){var i,a,n,u,o,v,f,c;for(n=t-1,o=Df(n+n,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),a=Df(u,4),c=8*t-12,c=1-a/c,v<=c?i=!1:(c+=.5*Df(a/(8*t-8),2),v<c&&(c=n*J$(4*f*(1-f)),c+=u*u/2,c>=J$(v)&&(i=!1))));return f}Y$.exports=q1e});var $$=s((ize,Z$)=>{"use strict";var b1e=Gr(),Nu=wr();function w1e(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y;for(o=t-1,v=i-1,f=o+v,c=f*Nu(f),u=o/f,a=.5/b1e(f,.5),n=!0;n===!0;)l=e(),m=u+l*a,m>=0&&m<=1&&(p=r(),y=o*Nu(m/o),y+=v*Nu((1-m)/v),y+=c+.5*l*l,y>=Nu(p)&&(n=!1));return m}Z$.exports=w1e});var rQ=s((aze,K$)=>{"use strict";var Hf=xr(),Q$=Gr(),zf=wr();function E1e(r,e,t){for(var i,a,n,u,o,v,f;;)if(u=r(),o=r(),v=Q$(u,1/e),f=Q$(o,1/t),n=v+f,n<=1)return n>0?v/n:(i=zf(u)/e,a=zf(o)/t,i>a?(a-=i,i=0):(i-=a,a=0),Hf(i-zf(Hf(i)+Hf(a))))}K$.exports=E1e});var iQ=s((nze,tQ)=>{"use strict";var eQ=X$(),N1e=x$(),S1e=$$(),O1e=rQ();function A1e(r,e,t,i){var a,n;return t===i&&t>1.5?N1e(r,e,t):t>1&&i>1?S1e(r,e,t,i):t<1&&i<1?O1e(r,t,i):(a=eQ(r,e,t),n=eQ(r,e,i),a/(a+n))}tQ.exports=A1e});var Yf=s((sze,pQ)=>{"use strict";var Pt=D(),Su=br(),aQ=Sr(),nQ=hr(),sQ=de().isPrimitive,uQ=qr(),tn=vr(),oQ=mr(),_1e=Lr(),vQ=Ii().factory,Ou=Wr().factory,fQ=z(),Wf=Si(),Xf=me(),Jf=bt(),cQ=O0(),T1e=Or(),Ft=V(),I1e=G$(),lQ=iQ();function R1e(){var r,e,t,i,a,n,u,o,v;if(o=!0,arguments.length===0)a={copy:!1},n=Ou(a);else if(arguments.length===1){if(a=arguments[0],!nQ(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(tn(a,"copy")&&!sQ(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(tn(a,"prng")){if(!uQ(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(tn(a,"state")&&!Jf(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=cQ({},a),a.copy===!1?o=!1:a.state&&(a.state=Wf(a.state.length,a.state,1,new Xf(a.state.length),1)),a.copy=!1,n=Ou(a)}}else{if(t=arguments[0],i=arguments[1],v=I1e(t,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!nQ(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(tn(a,"copy")&&!sQ(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(tn(a,"prng")){if(!uQ(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(tn(a,"state")&&!Jf(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=cQ({},a),a.copy===!1?o=!1:a.state&&(a.state=Wf(a.state.length,a.state,1,new Xf(a.state.length),1)),a.copy=!1,n=Ou(a)}}else a={copy:!1},n=Ou(a)}return a&&a.prng?e=vQ({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),e=vQ({state:r,copy:!1})),t===void 0?u=h:u=d,Pt(u,"NAME","beta"),a&&a.prng?(Pt(u,"seed",null),Pt(u,"seedLength",null),aQ(u,"state",oQ(null),_1e),Pt(u,"stateLength",null),Pt(u,"byteLength",null),Pt(u,"toJSON",oQ(null)),Pt(u,"PRNG",n)):(Su(u,"seed",f),Su(u,"seedLength",c),aQ(u,"state",m,y),Su(u,"stateLength",l),Su(u,"byteLength",p),Pt(u,"toJSON",g),Pt(u,"PRNG",n),n=n.normalized),u;function f(){return n.seed}function c(){return n.seedLength}function l(){return n.stateLength}function p(){return n.byteLength}function m(){return n.state}function y(q){if(!Jf(q))throw new TypeError(Ft("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));o&&(q=Wf(q.length,q,1,new Xf(q.length),1)),n.state=q}function g(){var q={};return q.type="PRNG",q.name=u.NAME,q.state=T1e(n.state),t===void 0?q.params=[]:q.params=[t,i],q}function d(){return lQ(n,e,t,i)}function h(q,w){return fQ(q)||fQ(w)||q<=0||w<=0?NaN:lQ(n,e,q,w)}}pQ.exports=R1e});var gQ=s((uze,dQ)=>{"use strict";var L1e=Yf(),P1e=L1e();dQ.exports=P1e});var hQ=s((oze,yQ)=>{"use strict";var F1e=D(),mQ=gQ(),j1e=Yf();F1e(mQ,"factory",j1e);yQ.exports=mQ});var EQ=s((vze,wQ)=>{"use strict";var qQ=Hr().isPrimitive,bQ=V();function M1e(r,e){return qQ(r)?qQ(e)?null:new TypeError(bQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(bQ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}wQ.exports=M1e});var OQ=s((fze,SQ)=>{"use strict";var NQ=wr();function B1e(r,e,t,i,a){var n,u,o,v,f,c,l;for(n=!0;n;){do f=e(),l=1+a*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+NQ(l)),c=r(),(c<o||NQ(c)<v)&&(n=!1)}return 1/t*i*l}SQ.exports=B1e});var Kf=s((cze,MQ)=>{"use strict";var jt=D(),Au=br(),AQ=Sr(),_Q=hr(),xf=bt(),TQ=de().isPrimitive,IQ=qr(),an=vr(),RQ=mr(),k1e=Lr(),LQ=Ii().factory,_u=Wr().factory,PQ=z(),Zf=Rr(),FQ=Gr(),$f=Si(),Qf=me(),C1e=Or(),jQ=O0(),Mt=V(),V1e=EQ(),Tu=OQ(),Iu=1/3;function U1e(){var r,e,t,i,a,n,u,o,v,f,c;if(o=!0,arguments.length===0)a={copy:!1},n=_u(a);else if(arguments.length===1){if(a=arguments[0],!_Q(a))throw new TypeError(Mt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(an(a,"copy")&&!TQ(a.copy))throw new TypeError(Mt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(an(a,"prng")){if(!IQ(a.prng))throw new TypeError(Mt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(an(a,"state")&&!xf(a.state))throw new TypeError(Mt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=jQ({},a),a.copy===!1?o=!1:a.state&&(a.state=$f(a.state.length,a.state,1,new Qf(a.state.length),1)),a.copy=!1,n=_u(a)}}else{if(e=arguments[0],i=arguments[1],v=V1e(e,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!_Q(a))throw new TypeError(Mt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(an(a,"copy")&&!TQ(a.copy))throw new TypeError(Mt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(an(a,"prng")){if(!IQ(a.prng))throw new TypeError(Mt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(an(a,"state")&&!xf(a.state))throw new TypeError(Mt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=jQ({},a),a.copy===!1?o=!1:a.state&&(a.state=$f(a.state.length,a.state,1,new Qf(a.state.length),1)),a.copy=!1,n=_u(a)}}else a={copy:!1},n=_u(a)}return a&&a.prng?t=LQ({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),t=LQ({state:r,copy:!1})),e===void 0?u=A:(e>=1?(u=q,c=e-Iu):(u=w,c=e+1-Iu),f=1/Zf(9*c)),jt(u,"NAME","gamma"),a&&a.prng?(jt(u,"seed",null),jt(u,"seedLength",null),AQ(u,"state",RQ(null),k1e),jt(u,"stateLength",null),jt(u,"byteLength",null),jt(u,"toJSON",RQ(null)),jt(u,"PRNG",n)):(Au(u,"seed",l),Au(u,"seedLength",p),AQ(u,"state",g,d),Au(u,"stateLength",m),Au(u,"byteLength",y),jt(u,"toJSON",h),jt(u,"PRNG",n),n=n.normalized),u;function l(){return n.seed}function p(){return n.seedLength}function m(){return n.stateLength}function y(){return n.byteLength}function g(){return n.state}function d(b){if(!xf(b))throw new TypeError(Mt("invalid argument. Must provide a Uint32Array. Value: `%s`.",b));o&&(b=$f(b.length,b,1,new Qf(b.length),1)),n.state=b}function h(){var b={};return b.type="PRNG",b.name=u.NAME,b.state=C1e(n.state),e===void 0?b.params=[]:b.params=[e,i],b}function q(){return Tu(n,t,i,c,f)}function w(){return Tu(n,t,i,c,f)*FQ(n(),1/e)}function A(b,T){var S,O;return PQ(b)||PQ(T)||b<=0||T<=0?NaN:b<1?(O=b+1-Iu,S=1/Zf(9*O),Tu(n,t,T,O,S)*FQ(n(),1/b)):(O=b-Iu,S=1/Zf(9*O),Tu(n,t,T,O,S))}}MQ.exports=U1e});var kQ=s((lze,BQ)=>{"use strict";var G1e=Kf(),D1e=G1e();BQ.exports=D1e});var nn=s((pze,VQ)=>{"use strict";var H1e=D(),CQ=kQ(),z1e=Kf();H1e(CQ,"factory",z1e);VQ.exports=CQ});var HQ=s((dze,DQ)=>{"use strict";var UQ=Hr().isPrimitive,GQ=V();function W1e(r,e){return UQ(r)?UQ(e)?null:new TypeError(GQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(GQ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}DQ.exports=W1e});var WQ=s((gze,zQ)=>{"use strict";function X1e(r,e,t){return r(e,1)/r(t,1)}zQ.exports=X1e});var r4=s((mze,QQ)=>{"use strict";var Ri=D(),Ru=br(),XQ=Sr(),JQ=hr(),YQ=mr(),J1e=Lr(),Lu=nn().factory,xQ=z(),Y1e=Or(),ZQ=V(),x1e=HQ(),$Q=WQ();function Z1e(){var r,e,t,i,a,n,u;if(arguments.length===0)r=Lu();else if(arguments.length===1){if(i=arguments[0],!JQ(i))throw new TypeError(ZQ("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Lu(i)}else{if(e=arguments[0],t=arguments[1],u=x1e(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!JQ(i))throw new TypeError(ZQ("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Lu(i)}else r=Lu()}return e===void 0?n=g:n=y,a=r.PRNG,Ri(n,"NAME","betaprime"),i&&i.prng?(Ri(n,"seed",null),Ri(n,"seedLength",null),XQ(n,"state",YQ(null),J1e),Ri(n,"stateLength",null),Ri(n,"byteLength",null),Ri(n,"toJSON",YQ(null))):(Ru(n,"seed",o),Ru(n,"seedLength",v),XQ(n,"state",l,p),Ru(n,"stateLength",f),Ru(n,"byteLength",c),Ri(n,"toJSON",m)),Ri(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=Y1e(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return $Q(r,e,t)}function g(d,h){return xQ(d)||xQ(h)||d<=0||h<=0?NaN:$Q(r,d,h)}}QQ.exports=Z1e});var rK=s((yze,KQ)=>{"use strict";var $1e=r4(),Q1e=$1e();KQ.exports=Q1e});var iK=s((hze,tK)=>{"use strict";var K1e=D(),eK=rK(),r2e=r4();K1e(eK,"factory",r2e);tK.exports=eK});var nK=s((qze,aK)=>{"use strict";var e2e=Ur();function t2e(r){return e2e(r)===r&&r>0}aK.exports=t2e});var e4=s((bze,sK)=>{"use strict";var i2e=nK();sK.exports=i2e});var oK=s((wze,uK)=>{"use strict";function a2e(r){return r>=0&&r<=1}uK.exports=a2e});var fK=s((Eze,vK)=>{"use strict";var n2e=oK();vK.exports=n2e});var pK=s((Nze,lK)=>{"use strict";var s2e=nt().isPrimitive,u2e=Mn().isPrimitive,cK=V();function o2e(r,e){return s2e(r)?u2e(e)?null:new TypeError(cK("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(cK("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}lK.exports=o2e});var gK=s((Sze,dK)=>{"use strict";function v2e(r,e,t){var i=0,a;for(a=0;a<e;a++)r()<=t&&(i+=1);return i}dK.exports=v2e});var yK=s((Oze,mK)=>{"use strict";var f2e=z();function c2e(r){return r===0||f2e(r)?r:r<0?-1:1}mK.exports=c2e});var Pu=s((Aze,hK)=>{"use strict";var l2e=yK();hK.exports=l2e});var bK=s((_ze,qK)=>{"use strict";var p2e=Gr(),d2e=1/12,g2e=1/360,m2e=1/1260;function y2e(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=p2e(r,2),(d2e-(g2e-m2e/e)/e)/r}}qK.exports=y2e});var EK=s((Tze,wK)=>{"use strict";var t4=Ur(),h2e=Pu(),q2e=Rr(),i4=Dr(),Fu=wr(),ju=bK(),b2e=1/6;function w2e(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P;for(T=t4((e+1)*t),f=e-T+1,S=1-t,O=t/S,c=(e+1)*O,u=e*t*S,n=q2e(u),d=1.15+2.53*n,g=-.0873+.0248*d+.01*t,h=e*t+.5,i=(2.83+5.1/d)*n,y=.92-4.2/d,a=.86*y,w=(T+.5)*Fu((T+1)/(O*f)),w+=ju(T)+ju(e-T);;){if(E=r(),E<=a)return I=E/y-.43,O=I*(2*g/(.5-i4(I))+d)+h,t4(O);if(E>=y?I=r()-.5:(I=E/y-.93,I=h2e(I)*.5-I,E=y*r()),l=.5-i4(I),b=t4(I*(2*g/l+d)+h),!(b<0||b>e))if(E=E*i/(g/(l*l)+d),p=i4(b-T),p>15){if(E=Fu(E),o=p/u,v=(p/3+.625)*p,v+=b2e,v/=u,o*=v+.5,N=-(p*p)/(2*u),E<N-o||E<=N+o&&(m=e-b+1,P=w+(e+1)*Fu(f/m),P+=(b+.5)*Fu(m*O/(b+1)),P+=-(ju(b)+ju(e-b)),E<=P))return b}else{if(q=1,T<b)for(A=T;A<=b;A++)q*=c/A-O;else if(T>b)for(A=b;A<=T;A++)E*=c/A-O;if(E<=q)return b}}}wK.exports=w2e});var OK=s((Ize,SK)=>{"use strict";var E2e=gK(),N2e=EK();function NK(r,e,t){return t>.5?e-NK(r,e,1-t):e*t<10?E2e(r,e,t):N2e(r,e,t)}SK.exports=NK});var a4=s((Rze,FK)=>{"use strict";var Bt=D(),Mu=br(),AK=Sr(),_K=hr(),TK=qr(),IK=vr(),RK=mr(),S2e=Lr(),LK=z(),O2e=e4(),A2e=fK(),Bu=Wr().factory,_2e=Or(),ku=V(),T2e=pK(),PK=OK();function I2e(){var r,e,t,i,a,n;if(arguments.length===0)e=Bu();else if(arguments.length===1){if(r=arguments[0],!_K(r))throw new TypeError(ku("invalid argument. Options argument must be an object. Value: `%s`.",r));if(IK(r,"prng")){if(!TK(r.prng))throw new TypeError(ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bu(r)}else{if(a=arguments[0],n=arguments[1],i=T2e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!_K(r))throw new TypeError(ku("invalid argument. Options argument must be an object. Value: `%s`.",r));if(IK(r,"prng")){if(!TK(r.prng))throw new TypeError(ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bu(r)}else e=Bu()}return a===void 0?t=y:t=m,Bt(t,"NAME","binomial"),r&&r.prng?(Bt(t,"seed",null),Bt(t,"seedLength",null),AK(t,"state",RK(null),S2e),Bt(t,"stateLength",null),Bt(t,"byteLength",null),Bt(t,"toJSON",RK(null)),Bt(t,"PRNG",e)):(Mu(t,"seed",u),Mu(t,"seedLength",o),AK(t,"state",c,l),Mu(t,"stateLength",v),Mu(t,"byteLength",f),Bt(t,"toJSON",p),Bt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=_2e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return PK(e,a,n)}function y(g,d){return LK(g)||LK(d)||!O2e(g)||!A2e(d)?NaN:PK(e,g,d)}}FK.exports=I2e});var MK=s((Lze,jK)=>{"use strict";var R2e=a4(),L2e=R2e();jK.exports=L2e});var CK=s((Pze,kK)=>{"use strict";var P2e=D(),BK=MK(),F2e=a4();P2e(BK,"factory",F2e);kK.exports=BK});var UK=s((Fze,VK)=>{"use strict";var j2e=Rr(),M2e=wr(),B2e=pt(),k2e=At(),C2e=mi();function V2e(r){var e,t;return e=!0,i;function i(){var a,n,u,o;if(e){do a=r(),n=r();while(a===0);return u=j2e(-2*M2e(a)),o=C2e*n,t=u*k2e(o),e=!1,u*B2e(o)}return e=!0,t}}VK.exports=V2e});var DK=s((jze,GK)=>{"use strict";var U2e=Rr(),G2e=wr(),D2e=At(),H2e=Ee(),z2e=D2e(H2e);function W2e(r){var e=U2e(-2*G2e(r));return e*z2e}GK.exports=W2e});var zK=s((Mze,HK)=>{"use strict";var X2e=Rr(),J2e=wr(),Y2e=At(),x2e=mi();function Z2e(r){var e=X2e(-2*J2e(r)),t=x2e*r;return e*Y2e(t)}HK.exports=Z2e});var n4=s((Bze,YK)=>{"use strict";var Xe=D(),Cu=br(),WK=Sr(),$2e=hr(),Q2e=qr(),K2e=de().isPrimitive,A0=vr(),rve=bt(),XK=Wr().factory,JK=mr(),eve=Lr(),tve=Or(),_0=V(),ive=UK(),ave=DK(),nve=zK();function sve(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!$2e(r))throw new TypeError(_0("invalid argument. Must provide an object. Value: `%s`.",r));if(A0(r,"copy")&&(a.copy=r.copy,!K2e(r.copy)))throw new TypeError(_0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(A0(r,"prng")){if(!Q2e(r.prng))throw new TypeError(_0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(A0(r,"state")){if(a.state=r.state,!rve(r.state))throw new TypeError(_0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(A0(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(_0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(i=XK(a),e=i.normalized):a.seed=null:(i=XK(a),e=i.normalized),t=ive(e),Xe(t,"NAME","box-muller"),a.seed===null?(Xe(t,"seed",null),Xe(t,"seedLength",null)):(Cu(t,"seed",n),Cu(t,"seedLength",u)),r&&r.prng?(WK(t,"state",JK(null),eve),Xe(t,"stateLength",null),Xe(t,"byteLength",null),Xe(t,"toJSON",JK(null))):(WK(t,"state",f,c),Cu(t,"stateLength",o),Cu(t,"byteLength",v),Xe(t,"toJSON",l)),Xe(t,"PRNG",e),A0(e,"MIN")?(Xe(t,"MIN",ave(e.MIN)),Xe(t,"MAX",nve(e.MIN))):(Xe(t,"MIN",null),Xe(t,"MAX",null)),t;function n(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=tve(i.state),p.params=[],p}}YK.exports=sve});var ZK=s((kze,xK)=>{"use strict";var uve=n4(),ove=uve();xK.exports=ove});var KK=s((Cze,QK)=>{"use strict";var vve=D(),$K=ZK(),fve=n4();vve($K,"factory",fve);QK.exports=$K});var trr=s((Vze,err)=>{"use strict";var cve=Nr().isPrimitive,lve=Hr().isPrimitive,rrr=V(),pve=oe();function dve(r,e){return!cve(r)||pve(r)?new TypeError(rrr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):lve(e)?null:new TypeError(rrr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}err.exports=dve});var arr=s((Uze,irr)=>{"use strict";var gve=s0(),mve=Ee();function yve(r,e,t){return e+t*gve(mve*(r()-.5))}irr.exports=yve});var s4=s((Gze,lrr)=>{"use strict";var Li=D(),Vu=br(),nrr=Sr(),srr=hr(),urr=qr(),orr=vr(),vrr=mr(),hve=Lr(),frr=z(),sn=Ii().factory,qve=Or(),Uu=V(),bve=trr(),crr=arr();function wve(){var r,e,t,i,a,n,u;if(arguments.length===0)e=sn();else if(arguments.length===1){if(t=arguments[0],!srr(t))throw new TypeError(Uu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(orr(t,"prng")){if(!urr(t.prng))throw new TypeError(Uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=sn({prng:t.prng})}else e=sn(t)}else{if(u=arguments[0],r=arguments[1],n=bve(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!srr(t))throw new TypeError(Uu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(orr(t,"prng")){if(!urr(t.prng))throw new TypeError(Uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=sn({prng:t.prng})}else e=sn(t)}else e=sn()}return u===void 0?a=g:a=y,i=e.PRNG,Li(a,"NAME","cauchy"),t&&t.prng?(Li(a,"seed",null),Li(a,"seedLength",null),nrr(a,"state",vrr(null),hve),Li(a,"stateLength",null),Li(a,"byteLength",null),Li(a,"toJSON",vrr(null))):(Vu(a,"seed",o),Vu(a,"seedLength",v),nrr(a,"state",l,p),Vu(a,"stateLength",f),Vu(a,"byteLength",c),Li(a,"toJSON",m)),Li(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=qve(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return crr(e,u,r)}function g(d,h){return frr(d)||frr(h)||h<=0?NaN:crr(e,d,h)}}lrr.exports=wve});var drr=s((Dze,prr)=>{"use strict";var Eve=s4(),Nve=Eve();prr.exports=Nve});var yrr=s((Hze,mrr)=>{"use strict";var Sve=D(),grr=drr(),Ove=s4();Sve(grr,"factory",Ove);mrr.exports=grr});var u4=s((zze,Nrr)=>{"use strict";var Pi=D(),Gu=br(),hrr=Sr(),Ave=Hr().isPrimitive,qrr=hr(),brr=qr(),wrr=vr(),Err=mr(),_ve=Lr(),Tve=z(),un=nn().factory,Ive=Or(),Du=V();function Rve(){var r,e,t,i,a;if(arguments.length===0)r=un();else if(arguments.length===1&&qrr(arguments[0]))if(t=arguments[0],wrr(t,"prng")){if(!brr(t.prng))throw new TypeError(Du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=un({prng:t.prng})}else r=un(t);else{if(a=arguments[0],!Ave(a))throw new TypeError(Du("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!qrr(t))throw new TypeError(Du("invalid argument. Options argument must be an object. Value: `%s`.",t));if(wrr(t,"prng")){if(!brr(t.prng))throw new TypeError(Du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=un(a/2,.5,{prng:t.prng})}else r=un(a/2,.5,t)}else r=un(a/2,.5)}return a===void 0?i=m:i=p,e=r.PRNG,Pi(i,"NAME","chisquare"),t&&t.prng?(Pi(i,"seed",null),Pi(i,"seedLength",null),hrr(i,"state",Err(null),_ve),Pi(i,"stateLength",null),Pi(i,"byteLength",null),Pi(i,"toJSON",Err(null))):(Gu(i,"seed",n),Gu(i,"seedLength",u),hrr(i,"state",f,c),Gu(i,"stateLength",o),Gu(i,"byteLength",v),Pi(i,"toJSON",l)),Pi(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=Ive(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return r()}function m(y){return Tve(y)||y<=0?NaN:r(y/2,.5)}}Nrr.exports=Rve});var Orr=s((Wze,Srr)=>{"use strict";var Lve=u4(),Pve=Lve();Srr.exports=Pve});var T0=s((Xze,_rr)=>{"use strict";var Fve=D(),Arr=Orr(),jve=u4();Fve(Arr,"factory",jve);_rr.exports=Arr});var o4=s((Jze,jrr)=>{"use strict";var Fi=D(),Hu=br(),Trr=Sr(),Mve=Hr().isPrimitive,Irr=hr(),Rrr=qr(),Lrr=vr(),Prr=mr(),Bve=Lr(),kve=z(),on=T0().factory,Cve=Or(),Frr=Rr(),zu=V();function Vve(){var r,e,t,i,a;if(arguments.length===0)r=on();else if(arguments.length===1&&Irr(arguments[0]))if(t=arguments[0],Lrr(t,"prng")){if(!Rrr(t.prng))throw new TypeError(zu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=on({prng:t.prng})}else r=on(t);else{if(a=arguments[0],!Mve(a))throw new TypeError(zu("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!Irr(t))throw new TypeError(zu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Lrr(t,"prng")){if(!Rrr(t.prng))throw new TypeError(zu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=on(a,{prng:t.prng})}else r=on(a,t)}else r=on(a)}return a===void 0?i=m:i=p,e=r.PRNG,Fi(i,"NAME","chi"),t&&t.prng?(Fi(i,"seed",null),Fi(i,"seedLength",null),Trr(i,"state",Prr(null),Bve),Fi(i,"stateLength",null),Fi(i,"byteLength",null),Fi(i,"toJSON",Prr(null))):(Hu(i,"seed",n),Hu(i,"seedLength",u),Trr(i,"state",f,c),Hu(i,"stateLength",o),Hu(i,"byteLength",v),Fi(i,"toJSON",l)),Fi(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=Cve(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return Frr(r())}function m(y){return kve(y)||y<=0?NaN:Frr(r(y))}}jrr.exports=Vve});var Brr=s((Yze,Mrr)=>{"use strict";var Uve=o4(),Gve=Uve();Mrr.exports=Gve});var Vrr=s((xze,Crr)=>{"use strict";var Dve=D(),krr=Brr(),Hve=o4();Dve(krr,"factory",Hve);Crr.exports=krr});var Drr=s((Zze,Grr)=>{"use strict";var zve=Nr().isPrimitive,Wve=Hr().isPrimitive,Urr=V(),Xve=oe();function Jve(r,e){return!zve(r)||Xve(r)?new TypeError(Urr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Wve(e)?null:new TypeError(Urr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Grr.exports=Jve});var zrr=s(($ze,Hrr)=>{"use strict";var v4=z(),Yve=f0(),xve=Ee();function Zve(r,e,t){var i;return v4(r)||v4(e)||v4(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+Yve(i)/xve)/2)}Hrr.exports=Zve});var Jrr=s((Qze,Xrr)=>{"use strict";var Wrr=z();function $ve(r,e){return Wrr(r)||Wrr(e)?NaN:r<e?0:1}Xrr.exports=$ve});var Zrr=s((Kze,xrr)=>{"use strict";var Qve=mr(),Yrr=z();function Kve(r){if(Yrr(r))return Qve(NaN);return e;function e(t){return Yrr(t)?NaN:t<r?0:1}}xrr.exports=Kve});var Wu=s((rWe,Qrr)=>{"use strict";var r3e=D(),$rr=Jrr(),e3e=Zrr();r3e($rr,"factory",e3e);Qrr.exports=$rr});var rer=s((eWe,Krr)=>{"use strict";var t3e=mr(),i3e=Wu().factory,f4=z(),a3e=f0(),n3e=Ee();function s3e(r,e){if(f4(r)||f4(e)||e<0)return t3e(NaN);if(e===0)return i3e(r);return t;function t(i){var a;return f4(i)?NaN:i<r-e?0:i>r+e?1:(a=(i-r)/e,(1+a+a3e(a)/n3e)/2)}}Krr.exports=s3e});var ier=s((tWe,ter)=>{"use strict";var u3e=D(),eer=zrr(),o3e=rer();u3e(eer,"factory",o3e);ter.exports=eer});var c4=s((iWe,aer)=>{"use strict";var v3e=ier(),f3e=1e4,c3e=1e-12;function l3e(r,e,t){var i,a,n,u,o;for(o=1,i=e-t,a=e+t;o<f3e;){if(u=(i+a)/2,a-i<c3e)return u;n=v3e(u,e,t),r>n?i=u:a=u,o+=1}return u}aer.exports=l3e});var ser=s((aWe,ner)=>{"use strict";var l4=z(),p3e=c4();function d3e(r,e,t){return l4(e)||l4(t)||l4(r)||t<0||r<0||r>1?NaN:t===0?e:p3e(r,e,t)}ner.exports=d3e});var oer=s((nWe,uer)=>{"use strict";var g3e=z();function m3e(r,e){return g3e(r)||r<0||r>1?NaN:e}uer.exports=m3e});var cer=s((sWe,fer)=>{"use strict";var y3e=mr(),ver=z();function h3e(r){if(ver(r))return y3e(NaN);return e;function e(t){return ver(t)||t<0||t>1?NaN:r}}fer.exports=h3e});var p4=s((uWe,per)=>{"use strict";var q3e=D(),ler=oer(),b3e=cer();q3e(ler,"factory",b3e);per.exports=ler});var ger=s((oWe,der)=>{"use strict";var w3e=mr(),E3e=p4().factory,d4=z(),N3e=c4();function S3e(r,e){if(d4(r)||d4(e)||e<0)return w3e(NaN);if(e===0)return E3e(r);return t;function t(i){return d4(i)||i<0||i>1?NaN:N3e(i,r,e)}}der.exports=S3e});var her=s((vWe,yer)=>{"use strict";var O3e=D(),mer=ser(),A3e=ger();O3e(mer,"factory",A3e);yer.exports=mer});var ber=s((fWe,qer)=>{"use strict";var _3e=her();function T3e(r,e,t){return _3e(r(),e,t)}qer.exports=T3e});var g4=s((cWe,Ter)=>{"use strict";var kt=D(),Xu=br(),wer=Sr(),Eer=hr(),Ner=qr(),Ser=vr(),Oer=mr(),I3e=Lr(),Ju=Wr().factory,Aer=z(),R3e=Or(),Yu=V(),L3e=Drr(),_er=ber();function P3e(){var r,e,t,i,a,n;if(arguments.length===0)e=Ju();else if(arguments.length===1){if(r=arguments[0],!Eer(r))throw new TypeError(Yu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ser(r,"prng")){if(!Ner(r.prng))throw new TypeError(Yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ju(r)}else{if(a=arguments[0],n=arguments[1],i=L3e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Eer(r))throw new TypeError(Yu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ser(r,"prng")){if(!Ner(r.prng))throw new TypeError(Yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ju(r)}else e=Ju()}return a===void 0?t=y:t=m,kt(t,"NAME","cosine"),r&&r.prng?(kt(t,"seed",null),kt(t,"seedLength",null),wer(t,"state",Oer(null),I3e),kt(t,"stateLength",null),kt(t,"byteLength",null),kt(t,"toJSON",Oer(null)),kt(t,"PRNG",e)):(Xu(t,"seed",u),Xu(t,"seedLength",o),wer(t,"state",c,l),Xu(t,"stateLength",v),Xu(t,"byteLength",f),kt(t,"toJSON",p),kt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=R3e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return _er(e,a,n)}function y(g,d){return Aer(g)||Aer(d)||d<=0?NaN:_er(e,g,d)}}Ter.exports=P3e});var Rer=s((lWe,Ier)=>{"use strict";var F3e=g4(),j3e=F3e();Ier.exports=j3e});var Fer=s((pWe,Per)=>{"use strict";var M3e=D(),Ler=Rer(),B3e=g4();M3e(Ler,"factory",B3e);Per.exports=Ler});var ker=s((dWe,Ber)=>{"use strict";var jer=ye().isPrimitive,m4=V(),Mer=oe();function k3e(r,e){return!jer(r)||Mer(r)?new TypeError(m4("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!jer(e)||Mer(e)?new TypeError(m4("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(m4("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}Ber.exports=k3e});var Uer=s((gWe,Ver)=>{"use strict";var y4=sa(),vn=Ur();function Cer(r,e,t){var i,a,n,u,o,v,f,c,l;if(n=t-e,n===0)return e;if(f=r.MIN,c=r.MAX,a=c-f,a===n)return r()-f+e;if(a<n)for(u=0;;){for(n===y4?(u=vn(n/(a+1)),n%(a+1)===a&&(u+=1)):u=vn((n+1)/(a+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*a===n-v+1)return i;v*=a+1}if(l=Cer(r,0,vn(n/v)),!(l>y4/v)&&(l*=v,i+=l,!(i>n)))return i+e}for(a===y4?(o=vn(a/(n+1)),a%(n+1)===n&&(o+=1)):o=vn((a+1)/(n+1));;)if(i=r()-f,i=vn(i/o),i<=n)return i+e}Ver.exports=Cer});var h4=s((mWe,Yer)=>{"use strict";var Ct=D(),xu=br(),Ger=Sr(),Der=hr(),Her=qr(),zer=vr(),Wer=mr(),C3e=Lr(),Zu=Wr().factory,Xer=z(),fn=Ne(),V3e=Or(),ji=V(),U3e=ker(),Jer=Uer();function G3e(){var r,e,t,i,a,n;if(arguments.length===0)e=Zu();else if(arguments.length===1){if(r=arguments[0],!Der(r))throw new TypeError(ji("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zer(r,"prng")){if(!Her(r.prng))throw new TypeError(ji("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!fn(e.MIN))throw new TypeError(ji("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!fn(e.MAX))throw new TypeError(ji("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Zu(r)}else{if(a=arguments[0],n=arguments[1],i=U3e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Der(r))throw new TypeError(ji("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zer(r,"prng")){if(!Her(r.prng))throw new TypeError(ji("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!fn(e.MIN))throw new TypeError(ji("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!fn(e.MAX))throw new TypeError(ji("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Zu(r)}else e=Zu()}return a===void 0?t=y:t=m,Ct(t,"NAME","discrete-uniform"),r&&r.prng?(Ct(t,"seed",null),Ct(t,"seedLength",null),Ger(t,"state",Wer(null),C3e),Ct(t,"stateLength",null),Ct(t,"byteLength",null),Ct(t,"toJSON",Wer(null)),Ct(t,"PRNG",e)):(xu(t,"seed",u),xu(t,"seedLength",o),Ger(t,"state",c,l),xu(t,"stateLength",v),xu(t,"byteLength",f),Ct(t,"toJSON",p),Ct(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=V3e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Jer(e,a,n)}function y(g,d){return Xer(g)||Xer(d)||!fn(g)||!fn(d)||g>d?NaN:Jer(e,g,d)}}Yer.exports=G3e});var Zer=s((yWe,xer)=>{"use strict";var D3e=h4(),H3e=D3e();xer.exports=H3e});var Ker=s((hWe,Qer)=>{"use strict";var z3e=D(),$er=Zer(),W3e=h4();z3e($er,"factory",W3e);Qer.exports=$er});var ttr=s((qWe,etr)=>{"use strict";var X3e=Hr().isPrimitive,J3e=nt().isPrimitive,rtr=V();function Y3e(r,e){return J3e(r)?X3e(e)?null:new TypeError(rtr("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(rtr("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}etr.exports=Y3e});var atr=s((bWe,itr)=>{"use strict";var x3e=wr();function Z3e(r,e,t){var i,a;for(i=1,a=0;a<e;a++)i*=r();return-(1/t)*x3e(i)}itr.exports=Z3e});var q4=s((wWe,ltr)=>{"use strict";var Vt=D(),$u=br(),ntr=Sr(),str=hr(),utr=qr(),otr=vr(),vtr=mr(),$3e=Lr(),Qu=Wr().factory,ftr=z(),Q3e=e4(),K3e=Or(),Ku=V(),rfe=ttr(),ctr=atr();function efe(){var r,e,t,i,a,n;if(arguments.length===0)e=Qu();else if(arguments.length===1){if(t=arguments[0],!str(t))throw new TypeError(Ku("invalid argument. Options argument must be an object. Value: `%s`.",t));if(otr(t,"prng")){if(!utr(t.prng))throw new TypeError(Ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Qu(t)}else{if(n=arguments[0],r=arguments[1],a=rfe(n,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!str(t))throw new TypeError(Ku("invalid argument. Options argument must be an object. Value: `%s`.",t));if(otr(t,"prng")){if(!utr(t.prng))throw new TypeError(Ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Qu(t)}else e=Qu()}return n===void 0?i=y:i=m,Vt(i,"NAME","erlang"),t&&t.prng?(Vt(i,"seed",null),Vt(i,"seedLength",null),ntr(i,"state",vtr(null),$3e),Vt(i,"stateLength",null),Vt(i,"byteLength",null),Vt(i,"toJSON",vtr(null)),Vt(i,"PRNG",e)):($u(i,"seed",u),$u(i,"seedLength",o),ntr(i,"state",c,l),$u(i,"stateLength",v),$u(i,"byteLength",f),Vt(i,"toJSON",p),Vt(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=K3e(e.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return ctr(e,n,r)}function y(g,d){return ftr(g)||ftr(d)||!Q3e(g)||d<=0?NaN:ctr(e,g,d)}}ltr.exports=efe});var dtr=s((EWe,ptr)=>{"use strict";var tfe=q4(),ife=tfe();ptr.exports=ife});var ytr=s((NWe,mtr)=>{"use strict";var afe=D(),gtr=dtr(),nfe=q4();afe(gtr,"factory",nfe);mtr.exports=gtr});var qtr=s((SWe,htr)=>{"use strict";var sfe=wr();function ufe(r,e){return-sfe(1-r())/e}htr.exports=ufe});var b4=s((OWe,Atr)=>{"use strict";var Ut=D(),ro=br(),btr=Sr(),ofe=Hr().isPrimitive,wtr=hr(),Etr=qr(),Ntr=vr(),Str=mr(),vfe=Lr(),eo=Wr().factory,ffe=z(),cfe=Or(),to=V(),Otr=qtr();function lfe(){var r,e,t,i;if(arguments.length===0)t=eo();else if(arguments.length===1&&wtr(arguments[0]))if(e=arguments[0],Ntr(e,"prng")){if(!Etr(e.prng))throw new TypeError(to("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=eo(e);else{if(r=arguments[0],!ofe(r))throw new TypeError(to("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!wtr(e))throw new TypeError(to("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Ntr(e,"prng")){if(!Etr(e.prng))throw new TypeError(to("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=eo(e)}else t=eo()}return r===void 0?i=p:i=l,Ut(i,"NAME","exponential"),e&&e.prng?(Ut(i,"seed",null),Ut(i,"seedLength",null),btr(i,"state",Str(null),vfe),Ut(i,"stateLength",null),Ut(i,"byteLength",null),Ut(i,"toJSON",Str(null)),Ut(i,"PRNG",t)):(ro(i,"seed",a),ro(i,"seedLength",n),btr(i,"state",v,f),ro(i,"stateLength",u),ro(i,"byteLength",o),Ut(i,"toJSON",c),Ut(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=cfe(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Otr(t,r)}function p(m){return ffe(m)||m<=0?NaN:Otr(t,m)}}Atr.exports=lfe});var Ttr=s((AWe,_tr)=>{"use strict";var pfe=b4(),dfe=pfe();_tr.exports=dfe});var Ltr=s((_We,Rtr)=>{"use strict";var gfe=D(),Itr=Ttr(),mfe=b4();gfe(Itr,"factory",mfe);Rtr.exports=Itr});var Mtr=s((TWe,jtr)=>{"use strict";var Ptr=Hr().isPrimitive,Ftr=V();function yfe(r,e){return Ptr(r)?Ptr(e)?null:new TypeError(Ftr("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Ftr("invalid argument. First argument must be a positive number. Value: `%s`.",r))}jtr.exports=yfe});var ktr=s((IWe,Btr)=>{"use strict";function hfe(r,e,t){var i=r(e)/e,a=r(t)/t;return i/a}Btr.exports=hfe});var w4=s((RWe,Wtr)=>{"use strict";var Mi=D(),io=br(),Ctr=Sr(),Vtr=hr(),Utr=qr(),Gtr=vr(),Dtr=mr(),qfe=Lr(),cn=T0().factory,Htr=z(),bfe=Or(),ao=V(),wfe=Mtr(),ztr=ktr();function Efe(){var r,e,t,i,a,n,u;if(arguments.length===0)r=cn();else if(arguments.length===1){if(e=arguments[0],!Vtr(e))throw new TypeError(ao("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Gtr(e,"prng")){if(!Utr(e.prng))throw new TypeError(ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=cn({prng:e.prng})}else r=cn(e)}else{if(n=arguments[0],u=arguments[1],a=wfe(n,u),a)throw a;if(arguments.length>2){if(e=arguments[2],!Vtr(e))throw new TypeError(ao("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Gtr(e,"prng")){if(!Utr(e.prng))throw new TypeError(ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=cn({prng:e.prng})}else r=cn(e)}else r=cn()}return n===void 0?i=g:i=y,t=r.PRNG,Mi(i,"NAME","f"),e&&e.prng?(Mi(i,"seed",null),Mi(i,"seedLength",null),Ctr(i,"state",Dtr(null),qfe),Mi(i,"stateLength",null),Mi(i,"byteLength",null),Mi(i,"toJSON",Dtr(null))):(io(i,"seed",o),io(i,"seedLength",v),Ctr(i,"state",l,p),io(i,"stateLength",f),io(i,"byteLength",c),Mi(i,"toJSON",m)),Mi(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=bfe(t.state),n===void 0?d.params=[]:d.params=[n,u],d}function y(){return ztr(r,n,u)}function g(d,h){return Htr(d)||Htr(h)||d<=0||h<=0?NaN:ztr(r,d,h)}}Wtr.exports=Efe});var Jtr=s((LWe,Xtr)=>{"use strict";var Nfe=w4(),Sfe=Nfe();Xtr.exports=Sfe});var Ztr=s((PWe,xtr)=>{"use strict";var Ofe=D(),Ytr=Jtr(),Afe=w4();Ofe(Ytr,"factory",Afe);xtr.exports=Ytr});var Ktr=s((FWe,Qtr)=>{"use strict";var $tr=Hr().isPrimitive,_fe=Nr().isPrimitive,E4=oe(),N4=V();function Tfe(r,e,t){return!$tr(r)||E4(r)?new TypeError(N4("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!$tr(e)||E4(e)?new TypeError(N4("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!_fe(t)||E4(t)?new TypeError(N4("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}Qtr.exports=Tfe});var eir=s((jWe,rir)=>{"use strict";var Ife=Gr(),Rfe=wr();function Lfe(r,e,t,i){return i+t*Ife(-Rfe(r()),-1/e)}rir.exports=Lfe});var O4=s((MWe,oir)=>{"use strict";var Gt=D(),no=br(),tir=Sr(),iir=hr(),air=qr(),nir=vr(),sir=mr(),Pfe=Lr(),so=Wr().factory,S4=z(),Ffe=Or(),uo=V(),jfe=Ktr(),uir=eir();function Mfe(){var r,e,t,i,a,n,u;if(arguments.length===0)t=so();else if(arguments.length===1){if(e=arguments[0],!iir(e))throw new TypeError(uo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(nir(e,"prng")){if(!air(e.prng))throw new TypeError(uo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=so(e)}else{if(r=arguments[0],n=arguments[1],u=arguments[2],a=jfe(r,n,u),a)throw a;if(arguments.length>3){if(e=arguments[3],!iir(e))throw new TypeError(uo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(nir(e,"prng")){if(!air(e.prng))throw new TypeError(uo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=so(e)}else t=so()}return r===void 0?i=g:i=y,Gt(i,"NAME","frechet"),e&&e.prng?(Gt(i,"seed",null),Gt(i,"seedLength",null),tir(i,"state",sir(null),Pfe),Gt(i,"stateLength",null),Gt(i,"byteLength",null),Gt(i,"toJSON",sir(null)),Gt(i,"PRNG",t)):(no(i,"seed",o),no(i,"seedLength",v),tir(i,"state",l,p),no(i,"stateLength",f),no(i,"byteLength",c),Gt(i,"toJSON",m),Gt(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=Ffe(t.state),r===void 0?d.params=[]:d.params=[r,n,u],d}function y(){return uir(t,r,n,u)}function g(d,h,q){return S4(d)||S4(h)||S4(q)||d<=0||h<=0?NaN:uir(t,d,h,q)}}oir.exports=Mfe});var fir=s((BWe,vir)=>{"use strict";var Bfe=O4(),kfe=Bfe();vir.exports=kfe});var pir=s((kWe,lir)=>{"use strict";var Cfe=D(),cir=fir(),Vfe=O4();Cfe(cir,"factory",Vfe);lir.exports=cir});var mir=s((CWe,gir)=>{"use strict";var Ufe=Ur(),dir=wr();function Gfe(r,e){var t=r();return t===0&&(t=r()),Ufe(dir(t)/dir(1-e))}gir.exports=Gfe});var A4=s((VWe,Nir)=>{"use strict";var Dt=D(),oo=br(),yir=Sr(),hir=hr(),Dfe=Mn().isPrimitive,qir=qr(),bir=vr(),wir=mr(),Hfe=Lr(),vo=Wr().factory,zfe=z(),Wfe=Or(),fo=V(),Eir=mir();function Xfe(){var r,e,t,i;if(arguments.length===0)e=vo();else if(arguments.length===1&&hir(arguments[0]))if(r=arguments[0],bir(r,"prng")){if(!qir(r.prng))throw new TypeError(fo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vo(r);else{if(i=arguments[0],!Dfe(i))throw new TypeError(fo("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!hir(r))throw new TypeError(fo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(bir(r,"prng")){if(!qir(r.prng))throw new TypeError(fo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vo(r)}else e=vo()}return i===void 0?t=p:t=l,Dt(t,"NAME","geometric"),r&&r.prng?(Dt(t,"seed",null),Dt(t,"seedLength",null),yir(t,"state",wir(null),Hfe),Dt(t,"stateLength",null),Dt(t,"byteLength",null),Dt(t,"toJSON",wir(null)),Dt(t,"PRNG",e)):(oo(t,"seed",a),oo(t,"seedLength",n),yir(t,"state",v,f),oo(t,"stateLength",u),oo(t,"byteLength",o),Dt(t,"toJSON",c),Dt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Wfe(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return Eir(e,i)}function p(m){return zfe(m)||m<0||m>1?NaN:Eir(e,m)}}Nir.exports=Xfe});var Oir=s((UWe,Sir)=>{"use strict";var Jfe=A4(),Yfe=Jfe();Sir.exports=Yfe});var Tir=s((GWe,_ir)=>{"use strict";var xfe=D(),Air=Oir(),Zfe=A4();xfe(Air,"factory",Zfe);_ir.exports=Air});var Lir=s((DWe,Rir)=>{"use strict";var $fe=Nr().isPrimitive,Qfe=Hr().isPrimitive,Iir=V(),Kfe=oe();function r4e(r,e){return!$fe(r)||Kfe(r)?new TypeError(Iir("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Qfe(e)?null:new TypeError(Iir("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Rir.exports=r4e});var jir=s((HWe,Fir)=>{"use strict";var Pir=wr();function e4e(r,e,t){return e-t*Pir(-Pir(r()))}Fir.exports=e4e});var _4=s((zWe,Dir)=>{"use strict";var Ht=D(),co=br(),Mir=Sr(),Bir=hr(),kir=qr(),Cir=vr(),Vir=mr(),t4e=Lr(),lo=Wr().factory,Uir=z(),i4e=Or(),po=V(),a4e=Lir(),Gir=jir();function n4e(){var r,e,t,i,a,n;if(arguments.length===0)t=lo();else if(arguments.length===1){if(e=arguments[0],!Bir(e))throw new TypeError(po("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Cir(e,"prng")){if(!kir(e.prng))throw new TypeError(po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=lo(e)}else{if(n=arguments[0],r=arguments[1],a=a4e(n,r),a)throw a;if(arguments.length>2){if(e=arguments[2],!Bir(e))throw new TypeError(po("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Cir(e,"prng")){if(!kir(e.prng))throw new TypeError(po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=lo(e)}else t=lo()}return n===void 0?i=y:i=m,Ht(i,"NAME","gumbel"),e&&e.prng?(Ht(i,"seed",null),Ht(i,"seedLength",null),Mir(i,"state",Vir(null),t4e),Ht(i,"stateLength",null),Ht(i,"byteLength",null),Ht(i,"toJSON",Vir(null)),Ht(i,"PRNG",t)):(co(i,"seed",u),co(i,"seedLength",o),Mir(i,"state",c,l),co(i,"stateLength",v),co(i,"byteLength",f),Ht(i,"toJSON",p),Ht(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=i4e(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return Gir(t,n,r)}function y(g,d){return Uir(g)||Uir(d)||d<=0?NaN:Gir(t,g,d)}}Dir.exports=n4e});var zir=s((WWe,Hir)=>{"use strict";var s4e=_4(),u4e=s4e();Hir.exports=u4e});var Jir=s((XWe,Xir)=>{"use strict";var o4e=D(),Wir=zir(),v4e=_4();o4e(Wir,"factory",v4e);Xir.exports=Wir});var xir=s((JWe,Yir)=>{"use strict";var T4=be().isPrimitive,I0=V();function f4e(r,e,t){return T4(r)?T4(e)?T4(t)?t>r?new RangeError(I0("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(I0("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(I0("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(I0("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(I0("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}Yir.exports=f4e});var Zir=s((YWe,c4e)=>{c4e.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var Qir=s((xWe,$ir)=>{"use strict";var l4e=z(),p4e=Ne(),d4e=Za(),g4e=pr(),m4e=Zir(),y4e=170;function h4e(r){return l4e(r)?NaN:p4e(r)?r<0?NaN:r<=y4e?m4e[r]:g4e:d4e(r+1)}$ir.exports=h4e});var rar=s((ZWe,Kir)=>{"use strict";var q4e=Qir();Kir.exports=q4e});var tar=s(($We,ear)=>{"use strict";var Bi=rar();function b4e(r,e,t,i){var a,n,u;for(i<t?(a=Bi(t)*Bi(e+t-i)/(Bi(e+t)*Bi(t-i)),u=0):(a=Bi(e)*Bi(i)/(Bi(i-t)*Bi(e+t)),u=i-t),n=r();n>a;)n-=a,a*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}ear.exports=b4e});var aar=s((QWe,iar)=>{"use strict";var go=tar();function w4e(r,e,t,i){var a,n,u,o;return i>e/2?(u=e-i,2*t<=e?(a=t,n=e-t,o=go(r,a,n,u),t-o):(n=t,a=e-t,o=go(r,a,n,u),i-e+t+o)):(u=i,2*t<=e?(a=t,n=e-t,o=go(r,a,n,u),o):(a=e-t,n=t,o=go(r,a,n,u),i-o))}iar.exports=w4e});var R4=s((KWe,par)=>{"use strict";var zt=D(),mo=br(),nar=Sr(),sar=hr(),uar=qr(),oar=vr(),far=mr(),E4e=Lr(),yo=Wr().factory,I4=f3(),car=pr(),N4e=Or(),ho=V(),S4e=xir(),lar=aar();function O4e(){var r,e,t,i,a,n,u;if(arguments.length===0)e=yo();else if(arguments.length===1){if(r=arguments[0],!sar(r))throw new TypeError(ho("invalid argument. Options argument must be an object. Value: `%s`.",r));if(oar(r,"prng")){if(!uar(r.prng))throw new TypeError(ho("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yo(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=S4e(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!sar(r))throw new TypeError(ho("invalid argument. Options argument must be an object. Value: `%s`.",r));if(oar(r,"prng")){if(!uar(r.prng))throw new TypeError(ho("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yo(r)}else e=yo()}return a===void 0?t=g:t=y,zt(t,"NAME","hypergeometric"),r&&r.prng?(zt(t,"seed",null),zt(t,"seedLength",null),nar(t,"state",far(null),E4e),zt(t,"stateLength",null),zt(t,"byteLength",null),zt(t,"toJSON",far(null)),zt(t,"PRNG",e)):(mo(t,"seed",o),mo(t,"seedLength",v),nar(t,"state",l,p),mo(t,"stateLength",f),mo(t,"byteLength",c),zt(t,"toJSON",m),zt(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=N4e(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return lar(e,a,n,u)}function g(d,h,q){return d===car||h===car||!I4(d)||!I4(h)||!I4(q)||q>d?NaN:lar(e,d,h,q)}}par.exports=O4e});var gar=s((rXe,dar)=>{"use strict";var A4e=R4(),_4e=A4e();dar.exports=_4e});var har=s((eXe,yar)=>{"use strict";var T4e=D(),mar=gar(),I4e=R4();T4e(mar,"factory",I4e);yar.exports=mar});var Ear=s((tXe,war)=>{"use strict";var qar=Hr().isPrimitive,bar=V();function R4e(r,e){return qar(r)?qar(e)?null:new TypeError(bar("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(bar("invalid argument. First argument must be a positive number. Value: `%s`.",r))}war.exports=R4e});var L4=s((iXe,Iar)=>{"use strict";var ki=D(),qo=br(),Nar=Sr(),Sar=hr(),Oar=qr(),Aar=vr(),_ar=mr(),L4e=Lr(),ln=nn().factory,Tar=z(),P4e=Or(),bo=V(),F4e=Ear();function j4e(){var r,e,t,i,a,n,u;if(arguments.length===0)r=ln();else if(arguments.length===1){if(i=arguments[0],!Sar(i))throw new TypeError(bo("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Aar(i,"prng")){if(!Oar(i.prng))throw new TypeError(bo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=ln({prng:i.prng})}else r=ln(i)}else{if(e=arguments[0],t=arguments[1],u=F4e(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!Sar(i))throw new TypeError(bo("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Aar(i,"prng")){if(!Oar(i.prng))throw new TypeError(bo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=ln(e,t,{prng:i.prng})}else r=ln(e,t,i)}else r=ln(e,t)}return e===void 0?n=g:n=y,a=r.PRNG,ki(n,"NAME","invgamma"),i&&i.prng?(ki(n,"seed",null),ki(n,"seedLength",null),Nar(n,"state",_ar(null),L4e),ki(n,"stateLength",null),ki(n,"byteLength",null),ki(n,"toJSON",_ar(null))):(qo(n,"seed",o),qo(n,"seedLength",v),Nar(n,"state",l,p),qo(n,"stateLength",f),qo(n,"byteLength",c),ki(n,"toJSON",m)),ki(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=P4e(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return 1/r()}function g(d,h){return Tar(d)||Tar(h)||d<=0||h<=0?NaN:1/r(d,h)}}Iar.exports=j4e});var Lar=s((aXe,Rar)=>{"use strict";var M4e=L4(),B4e=M4e();Rar.exports=B4e});var jar=s((nXe,Far)=>{"use strict";var k4e=D(),Par=Lar(),C4e=L4();k4e(Par,"factory",C4e);Far.exports=Par});var Car=s((sXe,kar)=>{"use strict";var Mar=Hr().isPrimitive,Bar=V();function V4e(r,e){return Mar(r)?Mar(e)?null:new TypeError(Bar("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Bar("invalid argument. First argument must be a positive number. Value: `%s`.",r))}kar.exports=V4e});var Gar=s((uXe,Uar)=>{"use strict";var Var=Gr();function U4e(r,e,t){var i=r();return Var(1-Var(1-i,1/t),1/e)}Uar.exports=U4e});var P4=s((oXe,xar)=>{"use strict";var Wt=D(),wo=br(),Dar=Sr(),Har=hr(),zar=qr(),War=vr(),Xar=mr(),G4e=Lr(),Eo=Wr().factory,Jar=z(),D4e=Or(),No=V(),H4e=Car(),Yar=Gar();function z4e(){var r,e,t,i,a,n;if(arguments.length===0)e=Eo();else if(arguments.length===1){if(r=arguments[0],!Har(r))throw new TypeError(No("invalid argument. Options argument must be an object. Value: `%s`.",r));if(War(r,"prng")){if(!zar(r.prng))throw new TypeError(No("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eo(r)}else{if(a=arguments[0],n=arguments[1],i=H4e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Har(r))throw new TypeError(No("invalid argument. Options argument must be an object. Value: `%s`.",r));if(War(r,"prng")){if(!zar(r.prng))throw new TypeError(No("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eo(r)}else e=Eo()}return a===void 0?t=y:t=m,Wt(t,"NAME","kumaraswamy"),r&&r.prng?(Wt(t,"seed",null),Wt(t,"seedLength",null),Dar(t,"state",Xar(null),G4e),Wt(t,"stateLength",null),Wt(t,"byteLength",null),Wt(t,"toJSON",Xar(null)),Wt(t,"PRNG",e)):(wo(t,"seed",u),wo(t,"seedLength",o),Dar(t,"state",c,l),wo(t,"stateLength",v),wo(t,"byteLength",f),Wt(t,"toJSON",p),Wt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=D4e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Yar(e,a,n)}function y(g,d){return Jar(g)||Jar(d)||g<=0||d<=0?NaN:Yar(e,g,d)}}xar.exports=z4e});var $ar=s((vXe,Zar)=>{"use strict";var W4e=P4(),X4e=W4e();Zar.exports=X4e});var rnr=s((fXe,Kar)=>{"use strict";var J4e=D(),Qar=$ar(),Y4e=P4();J4e(Qar,"factory",Y4e);Kar.exports=Qar});var inr=s((cXe,tnr)=>{"use strict";var x4e=Nr().isPrimitive,Z4e=Hr().isPrimitive,enr=V(),$4e=oe();function Q4e(r,e){return!x4e(r)||$4e(r)?new TypeError(enr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Z4e(e)?null:new TypeError(enr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}tnr.exports=Q4e});var nnr=s((lXe,anr)=>{"use strict";var K4e=Pu(),r6e=Dr(),e6e=wr();function t6e(r,e,t){var i=r()-.5;return e-t*K4e(i)*e6e(1-2*r6e(i))}anr.exports=t6e});var F4=s((pXe,pnr)=>{"use strict";var Xt=D(),So=br(),snr=Sr(),unr=hr(),onr=qr(),vnr=vr(),fnr=mr(),i6e=Lr(),Oo=Wr().factory,cnr=z(),a6e=Or(),Ao=V(),n6e=inr(),lnr=nnr();function s6e(){var r,e,t,i,a,n;if(arguments.length===0)e=Oo();else if(arguments.length===1){if(r=arguments[0],!unr(r))throw new TypeError(Ao("invalid argument. Options argument must be an object. Value: `%s`.",r));if(vnr(r,"prng")){if(!onr(r.prng))throw new TypeError(Ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Oo(r)}else{if(a=arguments[0],n=arguments[1],i=n6e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!unr(r))throw new TypeError(Ao("invalid argument. Options argument must be an object. Value: `%s`.",r));if(vnr(r,"prng")){if(!onr(r.prng))throw new TypeError(Ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Oo(r)}else e=Oo()}return a===void 0?t=y:t=m,Xt(t,"NAME","laplace"),r&&r.prng?(Xt(t,"seed",null),Xt(t,"seedLength",null),snr(t,"state",fnr(null),i6e),Xt(t,"stateLength",null),Xt(t,"byteLength",null),Xt(t,"toJSON",fnr(null)),Xt(t,"PRNG",e)):(So(t,"seed",u),So(t,"seedLength",o),snr(t,"state",c,l),So(t,"stateLength",v),So(t,"byteLength",f),Xt(t,"toJSON",p),Xt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=a6e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return lnr(e,a,n)}function y(g,d){return cnr(g)||cnr(d)||d<=0?NaN:lnr(e,g,d)}}pnr.exports=s6e});var gnr=s((dXe,dnr)=>{"use strict";var u6e=F4(),o6e=u6e();dnr.exports=o6e});var hnr=s((gXe,ynr)=>{"use strict";var v6e=D(),mnr=gnr(),f6e=F4();v6e(mnr,"factory",f6e);ynr.exports=mnr});var wnr=s((mXe,bnr)=>{"use strict";var c6e=Nr().isPrimitive,l6e=Hr().isPrimitive,qnr=V(),p6e=oe();function d6e(r,e){return!c6e(r)||p6e(r)?new TypeError(qnr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):l6e(e)?null:new TypeError(qnr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}bnr.exports=d6e});var Nnr=s((yXe,Enr)=>{"use strict";var g6e=eu(),j4=z(),m6e=Rr();function y6e(r,e,t){var i,a;return j4(e)||j4(t)||j4(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,a=t*m6e(2),i+a*g6e(2*r-1))}Enr.exports=y6e});var Onr=s((hXe,Snr)=>{"use strict";var h6e=mr(),q6e=p4().factory,b6e=eu(),M4=z(),w6e=Rr();function E6e(r,e){var t,i;if(M4(r)||M4(e)||e<0)return h6e(NaN);return e===0&&q6e(r),t=r,i=e*w6e(2),a;function a(n){return M4(n)||n<0||n>1?NaN:t+i*b6e(2*n-1)}}Snr.exports=E6e});var B4=s((qXe,_nr)=>{"use strict";var N6e=D(),Anr=Nnr(),S6e=Onr();N6e(Anr,"factory",S6e);_nr.exports=Anr});var Inr=s((bXe,Tnr)=>{"use strict";var O6e=B4();function A6e(r,e,t){var i=O6e(1-r()/2,0,1);return e+t/(i*i)}Tnr.exports=A6e});var k4=s((wXe,knr)=>{"use strict";var Jt=D(),_o=br(),Rnr=Sr(),Lnr=hr(),Pnr=qr(),Fnr=vr(),jnr=mr(),_6e=Lr(),To=Wr().factory,Mnr=z(),T6e=Or(),Io=V(),I6e=wnr(),Bnr=Inr();function R6e(){var r,e,t,i,a,n;if(arguments.length===0)e=To();else if(arguments.length===1){if(r=arguments[0],!Lnr(r))throw new TypeError(Io("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Fnr(r,"prng")){if(!Pnr(r.prng))throw new TypeError(Io("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=To(r)}else{if(a=arguments[0],n=arguments[1],i=I6e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Lnr(r))throw new TypeError(Io("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Fnr(r,"prng")){if(!Pnr(r.prng))throw new TypeError(Io("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=To(r)}else e=To()}return a===void 0?t=y:t=m,Jt(t,"NAME","levy"),r&&r.prng?(Jt(t,"seed",null),Jt(t,"seedLength",null),Rnr(t,"state",jnr(null),_6e),Jt(t,"stateLength",null),Jt(t,"byteLength",null),Jt(t,"toJSON",jnr(null)),Jt(t,"PRNG",e)):(_o(t,"seed",u),_o(t,"seedLength",o),Rnr(t,"state",c,l),_o(t,"stateLength",v),_o(t,"byteLength",f),Jt(t,"toJSON",p),Jt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=T6e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Bnr(e,a,n)}function y(g,d){return Mnr(g)||Mnr(d)||d<=0?NaN:Bnr(e,g,d)}}knr.exports=R6e});var Vnr=s((EXe,Cnr)=>{"use strict";var L6e=k4(),P6e=L6e();Cnr.exports=P6e});var Dnr=s((NXe,Gnr)=>{"use strict";var F6e=D(),Unr=Vnr(),j6e=k4();F6e(Unr,"factory",j6e);Gnr.exports=Unr});var Wnr=s((SXe,znr)=>{"use strict";var M6e=Nr().isPrimitive,B6e=Hr().isPrimitive,k6e=oe(),Hnr=V();function C6e(r,e){return!M6e(r)||k6e(r)?new TypeError(Hnr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):B6e(e)?null:new TypeError(Hnr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}znr.exports=C6e});var Jnr=s((OXe,Xnr)=>{"use strict";var V6e=wr();function U6e(r,e,t){var i=r();return e+t*V6e(i/(1-i))}Xnr.exports=U6e});var C4=s((AXe,e0r)=>{"use strict";var Yt=D(),Ro=br(),Ynr=Sr(),xnr=hr(),Znr=qr(),$nr=vr(),Qnr=mr(),G6e=Lr(),Lo=Wr().factory,Knr=z(),D6e=Or(),Po=V(),H6e=Wnr(),r0r=Jnr();function z6e(){var r,e,t,i,a,n;if(arguments.length===0)e=Lo();else if(arguments.length===1){if(r=arguments[0],!xnr(r))throw new TypeError(Po("invalid argument. Options argument must be an object. Value: `%s`.",r));if($nr(r,"prng")){if(!Znr(r.prng))throw new TypeError(Po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Lo(r)}else{if(a=arguments[0],n=arguments[1],i=H6e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!xnr(r))throw new TypeError(Po("invalid argument. Options argument must be an object. Value: `%s`.",r));if($nr(r,"prng")){if(!Znr(r.prng))throw new TypeError(Po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Lo(r)}else e=Lo()}return a===void 0?t=y:t=m,Yt(t,"NAME","logistic"),r&&r.prng?(Yt(t,"seed",null),Yt(t,"seedLength",null),Ynr(t,"state",Qnr(null),G6e),Yt(t,"stateLength",null),Yt(t,"byteLength",null),Yt(t,"toJSON",Qnr(null)),Yt(t,"PRNG",e)):(Ro(t,"seed",u),Ro(t,"seedLength",o),Ynr(t,"state",c,l),Ro(t,"stateLength",v),Ro(t,"byteLength",f),Yt(t,"toJSON",p),Yt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=D6e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return r0r(e,a,n)}function y(g,d){return Knr(g)||Knr(d)||d<=0?NaN:r0r(e,g,d)}}e0r.exports=z6e});var i0r=s((_Xe,t0r)=>{"use strict";var W6e=C4(),X6e=W6e();t0r.exports=X6e});var s0r=s((TXe,n0r)=>{"use strict";var J6e=D(),a0r=i0r(),Y6e=C4();J6e(a0r,"factory",Y6e);n0r.exports=a0r});var v0r=s((IXe,o0r)=>{"use strict";var x6e=Nr().isPrimitive,Z6e=Hr().isPrimitive,u0r=V(),$6e=oe();function Q6e(r,e){return!x6e(r)||$6e(r)?new TypeError(u0r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Z6e(e)?null:new TypeError(u0r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}o0r.exports=Q6e});var c0r=s((RXe,f0r)=>{"use strict";var K6e=xr();function r5e(r,e,t){return K6e(e+t*r())}f0r.exports=r5e});var V4=s((LXe,q0r)=>{"use strict";var Ci=D(),Fo=br(),l0r=Sr(),p0r=hr(),d0r=qr(),g0r=vr(),m0r=mr(),e5e=Lr(),pn=Ii().factory,y0r=z(),t5e=Or(),jo=V(),i5e=v0r(),h0r=c0r();function a5e(){var r,e,t,i,a,n,u;if(arguments.length===0)e=pn();else if(arguments.length===1){if(t=arguments[0],!p0r(t))throw new TypeError(jo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(g0r(t,"prng")){if(!d0r(t.prng))throw new TypeError(jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=pn({prng:t.prng})}else e=pn(t)}else{if(u=arguments[0],r=arguments[1],n=i5e(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!p0r(t))throw new TypeError(jo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(g0r(t,"prng")){if(!d0r(t.prng))throw new TypeError(jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=pn({prng:t.prng})}else e=pn(t)}else e=pn()}return u===void 0?a=g:a=y,i=e.PRNG,Ci(a,"NAME","lognormal"),t&&t.prng?(Ci(a,"seed",null),Ci(a,"seedLength",null),l0r(a,"state",m0r(null),e5e),Ci(a,"stateLength",null),Ci(a,"byteLength",null),Ci(a,"toJSON",m0r(null))):(Fo(a,"seed",o),Fo(a,"seedLength",v),l0r(a,"state",l,p),Fo(a,"stateLength",f),Fo(a,"byteLength",c),Ci(a,"toJSON",m)),Ci(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=t5e(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return h0r(e,u,r)}function g(d,h){return y0r(d)||y0r(h)||h<=0?NaN:h0r(e,d,h)}}q0r.exports=a5e});var w0r=s((PXe,b0r)=>{"use strict";var n5e=V4(),s5e=n5e();b0r.exports=s5e});var S0r=s((FXe,N0r)=>{"use strict";var u5e=D(),E0r=w0r(),o5e=V4();u5e(E0r,"factory",o5e);N0r.exports=E0r});var U4=s((jXe,O0r)=>{"use strict";var v5e=ha(),f5e=Ur(),c5e=v5e-1;function l5e(){var r=f5e(1+c5e*Math.random());return r|0}O0r.exports=l5e});var H4=s((MXe,R0r)=>{"use strict";var xt=D(),Vi=br(),A0r=Sr(),G4=vr(),p5e=hr(),d5e=de().isPrimitive,g5e=Ve(),m5e=nt().isPrimitive,_0r=J0(),Qe=V(),Mo=ha(),Pe=ui(),dn=Si(),y5e=Or(),T0r=U4(),D4=Mo-1|0,h5e=Mo-1|0,q5e=16807,Bo=1,ko=2,Ui=2,Fe=4,R0=5;function I0r(r,e){var t;return e?t="option":t="argument",r.length<R0+1?new RangeError(Qe("invalid %s. State array has insufficient length.",t)):r[0]!==Bo?new RangeError(Qe("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Bo,r[0])):r[1]!==ko?new RangeError(Qe("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,ko,r[1])):r[Ui]!==1?new RangeError(Qe("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Ui])):r[Fe]!==r.length-R0?new RangeError(Qe("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-R0,r[Fe])):null}function b5e(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!p5e(r))throw new TypeError(Qe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(G4(r,"copy")&&(i.copy=r.copy,!d5e(r.copy)))throw new TypeError(Qe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(G4(r,"state")){if(t=r.state,i.state=!0,!_0r(t))throw new TypeError(Qe("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=I0r(t,!0),u)throw u;i.copy===!1?e=t:(e=new Pe(t.length),dn(t.length,t,1,e,1)),t=new Pe(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,t[Fe])}if(a===void 0)if(G4(r,"seed"))if(a=r.seed,i.seed=!0,m5e(a)){if(a>h5e)throw new RangeError(Qe("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(g5e(a)&&a.length>0)n=a.length,e=new Pe(R0+n),e[0]=Bo,e[1]=ko,e[Ui]=1,e[Fe]=n,dn.ndarray(n,a,1,0,e,1,Fe+1),t=new Pe(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,n),t[0]=a[0];else throw new TypeError(Qe("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=T0r()|0}else a=T0r()|0;return t===void 0&&(e=new Pe(R0+1),e[0]=Bo,e[1]=ko,e[Ui]=1,e[Fe]=1,e[Fe+1]=a,t=new Pe(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,1),t[0]=a[0]),xt(y,"NAME","minstd"),Vi(y,"seed",o),Vi(y,"seedLength",v),A0r(y,"state",l,p),Vi(y,"stateLength",f),Vi(y,"byteLength",c),xt(y,"toJSON",m),xt(y,"MIN",1),xt(y,"MAX",Mo-1),xt(y,"normalized",g),xt(g,"NAME",y.NAME),Vi(g,"seed",o),Vi(g,"seedLength",v),A0r(g,"state",l,p),Vi(g,"stateLength",f),Vi(g,"byteLength",c),xt(g,"toJSON",m),xt(g,"MIN",(y.MIN-1)/D4),xt(g,"MAX",(y.MAX-1)/D4),y;function o(){var d=e[Fe];return dn(d,a,1,new Pe(d),1)}function v(){return e[Fe]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return dn(d,e,1,new Pe(d),1)}function p(d){var h;if(!_0r(d))throw new TypeError(Qe("invalid argument. Must provide an Int32Array. Value: `%s`.",d));if(h=I0r(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?dn(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Pe(d.length)),dn(d.length,d,1,e,1)),t=new Pe(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,e[Fe])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=y5e(e),d.params=[],d}function y(){var d=t[0]|0;return d=q5e*d%Mo|0,t[0]=d,d|0}function g(){return(y()-1)/D4}}R0r.exports=b5e});var P0r=s((BXe,L0r)=>{"use strict";var w5e=H4(),E5e=U4(),N5e=w5e({seed:E5e()});L0r.exports=N5e});var M0r=s((kXe,j0r)=>{"use strict";var S5e=D(),F0r=P0r(),O5e=H4();S5e(F0r,"factory",O5e);j0r.exports=F0r});var k0r=s((CXe,B0r)=>{"use strict";var A5e=z(),_5e=8;function T5e(r,e,t){var i,a;for(a=0;a<_5e;a++)if(i=r(),A5e(i))throw new Error("unexpected error. PRNG returned NaN.");for(a=t-1;a>=0;a--)e[a]=r();return e}B0r.exports=T5e});var z4=s((VXe,C0r)=>{"use strict";var I5e=ha(),R5e=Ur(),L5e=I5e-1;function P5e(){var r=R5e(1+L5e*Math.random());return r|0}C0r.exports=P5e});var J4=s((UXe,z0r)=>{"use strict";var Zt=D(),Gi=br(),V0r=Sr(),W4=vr(),F5e=hr(),j5e=de().isPrimitive,M5e=Ve(),B5e=nt().isPrimitive,U0r=J0(),gn=Si(),k5e=Ur(),je=ui(),L0=ha(),C5e=Or(),Je=V(),G0r=k0r(),D0r=z4(),X4=L0-1|0,V5e=L0-1|0,U5e=16807,Be=32,Uo=1,Go=3,Di=2,mn=Be+3,Me=Be+6,P0=Be+7,Co=mn+1,Vo=mn+2;function H0r(r,e){var t;return e?t="option":t="argument",r.length<P0+1?new RangeError(Je("invalid %s. State array has insufficient length.",t)):r[0]!==Uo?new RangeError(Je("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Uo,r[0])):r[1]!==Go?new RangeError(Je("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Go,r[1])):r[Di]!==Be?new RangeError(Je("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Be,r[Di])):r[mn]!==2?new RangeError(Je("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[mn])):r[Me]!==r.length-P0?new RangeError(Je("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-P0,r[Me])):null}function G5e(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!F5e(r))throw new TypeError(Je("invalid argument. Options argument must be an object. Value: `%s`.",r));if(W4(r,"copy")&&(i.copy=r.copy,!j5e(r.copy)))throw new TypeError(Je("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(W4(r,"state")){if(t=r.state,i.state=!0,!U0r(t))throw new TypeError(Je("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=H0r(t,!0),u)throw u;i.copy===!1?e=t:(e=new je(t.length),gn(t.length,t,1,e,1)),t=new je(e.buffer,e.byteOffset+(Di+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,t[Me])}if(a===void 0)if(W4(r,"seed"))if(a=r.seed,i.seed=!0,B5e(a)){if(a>V5e)throw new RangeError(Je("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(M5e(a)&&a.length>0)n=a.length,e=new je(P0+n),e[0]=Uo,e[1]=Go,e[Di]=Be,e[mn]=2,e[Vo]=a[0],e[Me]=n,gn.ndarray(n,a,1,0,e,1,Me+1),t=new je(e.buffer,e.byteOffset+(Di+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,n),t=G0r(y,t,Be),e[Co]=t[0];else throw new TypeError(Je("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=D0r()|0}else a=D0r()|0;return t===void 0&&(e=new je(P0+1),e[0]=Uo,e[1]=Go,e[Di]=Be,e[mn]=2,e[Vo]=a,e[Me]=1,e[Me+1]=a,t=new je(e.buffer,e.byteOffset+(Di+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,1),t=G0r(y,t,Be),e[Co]=t[0]),Zt(g,"NAME","minstd-shuffle"),Gi(g,"seed",o),Gi(g,"seedLength",v),V0r(g,"state",l,p),Gi(g,"stateLength",f),Gi(g,"byteLength",c),Zt(g,"toJSON",m),Zt(g,"MIN",1),Zt(g,"MAX",L0-1),Zt(g,"normalized",d),Zt(d,"NAME",g.NAME),Gi(d,"seed",o),Gi(d,"seedLength",v),V0r(d,"state",l,p),Gi(d,"stateLength",f),Gi(d,"byteLength",c),Zt(d,"toJSON",m),Zt(d,"MIN",(g.MIN-1)/X4),Zt(d,"MAX",(g.MAX-1)/X4),g;function o(){var h=e[Me];return gn(h,a,1,new je(h),1)}function v(){return e[Me]}function f(){return e.length}function c(){return e.byteLength}function l(){var h=e.length;return gn(h,e,1,new je(h),1)}function p(h){var q;if(!U0r(h))throw new TypeError(Je("invalid argument. Must provide an Int32Array. Value: `%s`.",h));if(q=H0r(h,!1),q)throw q;i.copy===!1?i.state&&h.length===e.length?gn(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new je(h.length)),gn(h.length,h,1,e,1)),t=new je(e.buffer,e.byteOffset+(Di+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,e[Me])}function m(){var h={};return h.type="PRNG",h.name=g.NAME,h.state=C5e(e),h.params=[],h}function y(){var h=e[Vo]|0;return h=U5e*h%L0|0,e[Vo]=h,h|0}function g(){var h,q;return h=e[Co],q=k5e(Be*(h/L0)),h=t[q],e[Co]=h,t[q]=y(),h}function d(){return(g()-1)/X4}}z0r.exports=G5e});var X0r=s((GXe,W0r)=>{"use strict";var D5e=J4(),H5e=z4(),z5e=D5e({seed:H5e()});W0r.exports=z5e});var x0r=s((DXe,Y0r)=>{"use strict";var W5e=D(),J0r=X0r(),X5e=J4();W5e(J0r,"factory",X5e);Y0r.exports=J0r});var $0r=s((HXe,Z0r)=>{"use strict";var J5e=xr();function Y5e(r,e){for(var t=r(),i=1;t>J5e(-e);)i+=1,t*=r();return i-1}Z0r.exports=Y5e});var K0r=s((zXe,Q0r)=>{"use strict";var x5e=Ur();function Z5e(r){return x5e(r)===r&&r<0}Q0r.exports=Z5e});var esr=s((WXe,rsr)=>{"use strict";var $5e=K0r();rsr.exports=$5e});var isr=s((XXe,tsr)=>{"use strict";var Q5e=esr(),K5e=c0();function rce(r){return Q5e(r)?NaN:K5e(r+1)}tsr.exports=rce});var nsr=s((JXe,asr)=>{"use strict";var ece=isr();asr.exports=ece});var vsr=s((YXe,osr)=>{"use strict";var tce=nsr(),ssr=Ur(),ice=Pu(),ace=Rr(),usr=Dr(),Do=wr(),nce=G3(),sce=1/12,uce=1/360;function oce(r,e){var t,i,a,n,u,o,v,f,c,l;for(t=ace(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,a=.86*u;;){if(l=r(),l<=a)return c=l/u-.43,c*=2*o/(.5-usr(c))+v,c+=e+.445,ssr(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=ice(c)*.5-c,l=u*r()),n=.5-usr(c),(n>=.013||n>=l)&&(f=ssr((2*o/n+v)*c+e+.445),l*=i/(o/(n*n)+v),c=(f+.5)*Do(e/f),c+=-e-nce+f,c-=(sce-uce/(f*f))/f,f>=10&&c>=Do(l*t)||(c=f*Do(e)-e-tce(f),f>=0&&f<=9&&c>=Do(l))))return f}}osr.exports=oce});var csr=s((xXe,fsr)=>{"use strict";var vce=$0r(),fce=vsr();function cce(r,e){return e<30?vce(r,e):fce(r,e)}fsr.exports=cce});var Y4=s((ZXe,hsr)=>{"use strict";var $t=D(),Ho=br(),lsr=Sr(),lce=Hr().isPrimitive,psr=hr(),dsr=qr(),gsr=vr(),msr=mr(),pce=Lr(),zo=Wr().factory,dce=z(),gce=Or(),Wo=V(),ysr=csr();function mce(){var r,e,t,i;if(arguments.length===0)t=zo();else if(arguments.length===1&&psr(arguments[0]))if(e=arguments[0],gsr(e,"prng")){if(!dsr(e.prng))throw new TypeError(Wo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zo(e);else{if(r=arguments[0],!lce(r))throw new TypeError(Wo("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!psr(e))throw new TypeError(Wo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gsr(e,"prng")){if(!dsr(e.prng))throw new TypeError(Wo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zo(e)}else t=zo()}return r===void 0?i=p:i=l,$t(i,"NAME","poisson"),e&&e.prng?($t(i,"seed",null),$t(i,"seedLength",null),lsr(i,"state",msr(null),pce),$t(i,"stateLength",null),$t(i,"byteLength",null),$t(i,"toJSON",msr(null)),$t(i,"PRNG",t)):(Ho(i,"seed",a),Ho(i,"seedLength",n),lsr(i,"state",v,f),Ho(i,"stateLength",u),Ho(i,"byteLength",o),$t(i,"toJSON",c),$t(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=gce(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return ysr(t,r)}function p(m){return dce(m)||m<=0?NaN:ysr(t,m)}}hsr.exports=mce});var bsr=s(($Xe,qsr)=>{"use strict";var yce=Y4(),hce=yce();qsr.exports=hce});var x4=s((QXe,Esr)=>{"use strict";var qce=D(),wsr=bsr(),bce=Y4();qce(wsr,"factory",bce);Esr.exports=wsr});var Ssr=s((KXe,Nsr)=>{"use strict";var wce=Hr().isPrimitive,Ece=Nr().isPrimitive,Z4=V(),Nce=oe();function Sce(r,e){return wce(r)?!Ece(e)||Nce(e)?new TypeError(Z4("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Z4("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Z4("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Nsr.exports=Sce});var r6=s((rJe,Psr)=>{"use strict";var Hi=D(),Xo=br(),Osr=Sr(),yn=vr(),Asr=hr(),$4=bt(),_sr=de().isPrimitive,Tsr=qr(),Isr=mr(),Oce=Lr(),Rsr=z(),hn=x4().factory,Jo=nn().factory,Q4=Si(),K4=me(),Lsr=O0(),Ace=Or(),Qt=V(),_ce=Ssr();function Tce(){var r,e,t,i,a,n,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=hn(i);else if(arguments.length===1){if(i=arguments[0],!Asr(i))throw new TypeError(Qt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(yn(i,"copy")&&!_sr(i.copy))throw new TypeError(Qt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(yn(i,"prng")){if(!Tsr(i.prng))throw new TypeError(Qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=hn({prng:i.prng})}else{if(yn(i,"state")&&!$4(i.state))throw new TypeError(Qt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=Lsr({},i),i.copy===!1?u=!1:i.state&&(i.state=Q4(i.state.length,i.state,1,new K4(i.state.length),1)),i.copy=!1,t=hn(i)}}else{if(f=arguments[0],v=arguments[1],o=_ce(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!Asr(i))throw new TypeError(Qt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(yn(i,"copy")&&!_sr(i.copy))throw new TypeError(Qt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(yn(i,"prng")){if(!Tsr(i.prng))throw new TypeError(Qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=hn({prng:i.prng})}else{if(yn(i,"state")&&!$4(i.state))throw new TypeError(Qt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=Lsr({},i),i.copy===!1?u=!1:i.state&&(i.state=Q4(i.state.length,i.state,1,new K4(i.state.length),1)),i.copy=!1,t=hn(i)}}else i={copy:!1},t=hn(i)}return i&&i.prng?f===void 0?r=Jo({prng:i.prng}):r=Jo(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Jo({state:e,copy:!1}):r=Jo(f,v/(1-v),{state:e,copy:!1})),f===void 0?a=q:a=h,n=t.PRNG,Hi(a,"NAME","negative-binomial"),i&&i.prng?(Hi(a,"seed",null),Hi(a,"seedLength",null),Osr(a,"state",Isr(null),Oce),Hi(a,"stateLength",null),Hi(a,"byteLength",null),Hi(a,"toJSON",Isr(null))):(Xo(a,"seed",c),Xo(a,"seedLength",l),Osr(a,"state",y,g),Xo(a,"stateLength",p),Xo(a,"byteLength",m),Hi(a,"toJSON",d)),Hi(a,"PRNG",n),a;function c(){return n.seed}function l(){return n.seedLength}function p(){return n.stateLength}function m(){return n.byteLength}function y(){return n.state}function g(w){if(!$4(w))throw new TypeError(Qt("invalid argument. Must provide a Uint32Array. Value: `%s`.",w));u&&(w=Q4(w.length,w,1,new K4(w.length),1)),n.state=w}function d(){var w={};return w.type="PRNG",w.name=a.NAME,w.state=Ace(n.state),f===void 0?w.params=[]:w.params=[f,v],w}function h(){return t(r())}function q(w,A){return Rsr(w)||Rsr(A)||A<=0||A>=1?NaN:t(r(w,A/(1-A)))}}Psr.exports=Tce});var jsr=s((eJe,Fsr)=>{"use strict";var Ice=r6(),Rce=Ice();Fsr.exports=Rce});var ksr=s((tJe,Bsr)=>{"use strict";var Lce=D(),Msr=jsr(),Pce=r6();Lce(Msr,"factory",Pce);Bsr.exports=Msr});var Usr=s((iJe,Vsr)=>{"use strict";var Fce=Nr().isPrimitive,jce=Hr().isPrimitive,Csr=V(),Mce=oe();function Bce(r,e){return!Fce(r)||Mce(r)?new TypeError(Csr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):jce(e)?null:new TypeError(Csr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Vsr.exports=Bce});var Dsr=s((aJe,Gsr)=>{"use strict";function kce(r,e,t){return e+t*r()}Gsr.exports=kce});var e6=s((nJe,Zsr)=>{"use strict";var zi=D(),Yo=br(),Hsr=Sr(),zsr=hr(),Wsr=qr(),Xsr=vr(),Jsr=mr(),Cce=Lr(),qn=Ii().factory,Ysr=z(),Vce=Or(),xo=V(),Uce=Usr(),xsr=Dsr();function Gce(){var r,e,t,i,a,n,u;if(arguments.length===0)e=qn();else if(arguments.length===1){if(t=arguments[0],!zsr(t))throw new TypeError(xo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Xsr(t,"prng")){if(!Wsr(t.prng))throw new TypeError(xo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=qn({prng:t.prng})}else e=qn(t)}else{if(u=arguments[0],r=arguments[1],n=Uce(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!zsr(t))throw new TypeError(xo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Xsr(t,"prng")){if(!Wsr(t.prng))throw new TypeError(xo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=qn({prng:t.prng})}else e=qn(t)}else e=qn()}return u===void 0?a=g:a=y,i=e.PRNG,zi(a,"NAME","normal"),t&&t.prng?(zi(a,"seed",null),zi(a,"seedLength",null),Hsr(a,"state",Jsr(null),Cce),zi(a,"stateLength",null),zi(a,"byteLength",null),zi(a,"toJSON",Jsr(null))):(Yo(a,"seed",o),Yo(a,"seedLength",v),Hsr(a,"state",l,p),Yo(a,"stateLength",f),Yo(a,"byteLength",c),zi(a,"toJSON",m)),zi(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=Vce(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return xsr(e,u,r)}function g(d,h){return Ysr(d)||Ysr(h)||h<=0?NaN:xsr(e,d,h)}}Zsr.exports=Gce});var Qsr=s((sJe,$sr)=>{"use strict";var Dce=e6(),Hce=Dce();$sr.exports=Hce});var eur=s((uJe,rur)=>{"use strict";var zce=D(),Ksr=Qsr(),Wce=e6();zce(Ksr,"factory",Wce);rur.exports=Ksr});var nur=s((oJe,aur)=>{"use strict";var tur=Hr().isPrimitive,iur=V();function Xce(r,e){return tur(r)?tur(e)?null:new TypeError(iur("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(iur("invalid argument. First argument must be a positive number. Value: `%s`.",r))}aur.exports=Xce});var uur=s((vJe,sur)=>{"use strict";var Jce=Gr();function Yce(r,e,t){return t/Jce(r(),1/e)}sur.exports=Yce});var t6=s((fJe,gur)=>{"use strict";var Kt=D(),Zo=br(),our=Sr(),vur=hr(),fur=qr(),cur=vr(),lur=mr(),xce=Lr(),$o=Wr().factory,pur=z(),Zce=Or(),Qo=V(),$ce=nur(),dur=uur();function Qce(){var r,e,t,i,a,n;if(arguments.length===0)i=$o();else if(arguments.length===1){if(t=arguments[0],!vur(t))throw new TypeError(Qo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(cur(t,"prng")){if(!fur(t.prng))throw new TypeError(Qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=$o(t)}else{if(r=arguments[0],e=arguments[1],n=$ce(r,e),n)throw n;if(arguments.length>2){if(t=arguments[2],!vur(t))throw new TypeError(Qo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(cur(t,"prng")){if(!fur(t.prng))throw new TypeError(Qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=$o(t)}else i=$o()}return r===void 0?a=y:a=m,Kt(a,"NAME","pareto-type1"),t&&t.prng?(Kt(a,"seed",null),Kt(a,"seedLength",null),our(a,"state",lur(null),xce),Kt(a,"stateLength",null),Kt(a,"byteLength",null),Kt(a,"toJSON",lur(null)),Kt(a,"PRNG",i)):(Zo(a,"seed",u),Zo(a,"seedLength",o),our(a,"state",c,l),Zo(a,"stateLength",v),Zo(a,"byteLength",f),Kt(a,"toJSON",p),Kt(a,"PRNG",i),i=i.normalized),a;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(g){i.state=g}function p(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Zce(i.state),r===void 0?g.params=[]:g.params=[r,e],g}function m(){return dur(i,r,e)}function y(g,d){return pur(g)||pur(d)||g<=0||d<=0?NaN:dur(i,g,d)}}gur.exports=Qce});var yur=s((cJe,mur)=>{"use strict";var Kce=t6(),rle=Kce();mur.exports=rle});var bur=s((lJe,qur)=>{"use strict";var ele=D(),hur=yur(),tle=t6();ele(hur,"factory",tle);qur.exports=hur});var Eur=s((pJe,wur)=>{"use strict";var ile=Rr(),ale=wr();function nle(r,e){return e*ile(-2*ale(r()))}wur.exports=nle});var i6=s((dJe,Iur)=>{"use strict";var ri=D(),Ko=br(),Nur=Sr(),sle=Hr().isPrimitive,Sur=hr(),Our=qr(),Aur=vr(),_ur=mr(),ule=Lr(),r1=Wr().factory,ole=z(),vle=Or(),e1=V(),Tur=Eur();function fle(){var r,e,t,i;if(arguments.length===0)t=r1();else if(arguments.length===1&&Sur(arguments[0]))if(e=arguments[0],Aur(e,"prng")){if(!Our(e.prng))throw new TypeError(e1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=r1(e);else{if(r=arguments[0],!sle(r))throw new TypeError(e1("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!Sur(e))throw new TypeError(e1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Aur(e,"prng")){if(!Our(e.prng))throw new TypeError(e1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=r1(e)}else t=r1()}return r===void 0?i=p:i=l,ri(i,"NAME","rayleigh"),e&&e.prng?(ri(i,"seed",null),ri(i,"seedLength",null),Nur(i,"state",_ur(null),ule),ri(i,"stateLength",null),ri(i,"byteLength",null),ri(i,"toJSON",_ur(null)),ri(i,"PRNG",t)):(Ko(i,"seed",a),Ko(i,"seedLength",n),Nur(i,"state",v,f),Ko(i,"stateLength",u),Ko(i,"byteLength",o),ri(i,"toJSON",c),ri(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=vle(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Tur(t,r)}function p(m){return ole(m)||m<=0?NaN:Tur(t,m)}}Iur.exports=fle});var Lur=s((gJe,Rur)=>{"use strict";var cle=i6(),lle=cle();Rur.exports=lle});var jur=s((mJe,Fur)=>{"use strict";var ple=D(),Pur=Lur(),dle=i6();ple(Pur,"factory",dle);Fur.exports=Pur});var u6=s((yJe,Hur)=>{"use strict";var Wi=D(),t1=br(),Mur=Sr(),bn=vr(),Bur=Hr().isPrimitive,kur=hr(),a6=bt(),Cur=de().isPrimitive,gle=z(),Vur=qr(),Uur=mr(),mle=Lr(),i1=T0().factory,wn=Ii().factory,n6=Si(),s6=me(),Gur=O0(),yle=Or(),gt=V(),Dur=Rr();function hle(){var r,e,t,i,a,n,u,o;if(u=!0,arguments.length===0)a={copy:!1},t=wn(a);else if(arguments.length===1)if(kur(arguments[0])){if(a=arguments[0],bn(a,"copy")&&!Cur(a.copy))throw new TypeError(gt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(bn(a,"prng")){if(!Vur(a.prng))throw new TypeError(gt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=wn({prng:a.prng})}else{if(bn(a,"state")&&!a6(a.state))throw new TypeError(gt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=Gur({},a),a.copy===!1?u=!1:a.state&&(a.state=n6(a.state.length,a.state,1,new s6(a.state.length),1)),a.copy=!1,t=wn(a)}}else{if(o=arguments[0],!Bur(o))throw new TypeError(gt("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));a={copy:!1},t=wn(a)}else{if(o=arguments[0],!Bur(o))throw new TypeError(gt("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(a=arguments[1],!kur(a))throw new TypeError(gt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(bn(a,"copy")&&!Cur(a.copy))throw new TypeError(gt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(bn(a,"prng")){if(!Vur(a.prng))throw new TypeError(gt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=wn({prng:a.prng})}else{if(bn(a,"state")&&!a6(a.state))throw new TypeError(gt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=Gur({},a),a.copy===!1?u=!1:a.state&&(a.state=n6(a.state.length,a.state,1,new s6(a.state.length),1)),a.copy=!1,t=wn(a)}}return a&&a.prng?o===void 0?r=i1({prng:a.prng}):r=i1(o,{prng:a.prng}):(a.state?e=a.state:(e=t.state,t.state=e),o===void 0?r=i1({state:e,copy:!1}):r=i1(o,{state:e,copy:!1})),o===void 0?n=d:n=g,i=t.PRNG,Wi(n,"NAME","t"),a&&a.prng?(Wi(n,"seed",null),Wi(n,"seedLength",null),Mur(n,"state",Uur(null),mle),Wi(n,"stateLength",null),Wi(n,"byteLength",null),Wi(n,"toJSON",Uur(null))):(t1(n,"seed",v),t1(n,"seedLength",f),Mur(n,"state",p,m),t1(n,"stateLength",c),t1(n,"byteLength",l),Wi(n,"toJSON",y)),Wi(n,"PRNG",i),n;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(h){if(!a6(h))throw new TypeError(gt("invalid argument. Must provide a Uint32Array. Value: `%s`.",h));u&&(h=n6(h.length,h,1,new s6(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=n.NAME,h.state=yle(i.state),o===void 0?h.params=[]:h.params=[o],h}function g(){return t()/Dur(r()/o)}function d(h){return gle(h)||h<=0?NaN:t()/Dur(r(h)/h)}}Hur.exports=hle});var Wur=s((hJe,zur)=>{"use strict";var qle=u6(),ble=qle();zur.exports=ble});var Yur=s((qJe,Jur)=>{"use strict";var wle=D(),Xur=Wur(),Ele=u6();wle(Xur,"factory",Ele);Jur.exports=Xur});var Zur=s((bJe,xur)=>{"use strict";var o6=Nr().isPrimitive,a1=V(),v6=oe();function Nle(r,e,t){return!o6(r)||v6(r)?new TypeError(a1("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!o6(e)||v6(e)?new TypeError(a1("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!o6(t)||v6(t)?new TypeError(a1("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(a1("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}xur.exports=Nle});var Kur=s((wJe,Qur)=>{"use strict";var $ur=Rr();function Sle(r,e,t,i){var a,n,u;return a=(i-e)/(t-e),u=r(),u<a?(n=(t-e)*(i-e),e+$ur(n*u)):(n=(t-e)*(t-i),t-$ur(n*(1-u)))}Qur.exports=Sle});var c6=s((EJe,sor)=>{"use strict";var ei=D(),n1=br(),ror=Sr(),eor=hr(),tor=qr(),ior=vr(),aor=mr(),Ole=Lr(),s1=Wr().factory,f6=z(),Ale=Or(),u1=V(),_le=Zur(),nor=Kur();function Tle(){var r,e,t,i,a,n,u;if(arguments.length===0)e=s1();else if(arguments.length===1){if(r=arguments[0],!eor(r))throw new TypeError(u1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ior(r,"prng")){if(!tor(r.prng))throw new TypeError(u1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=s1(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=_le(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!eor(r))throw new TypeError(u1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ior(r,"prng")){if(!tor(r.prng))throw new TypeError(u1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=s1(r)}else e=s1()}return a===void 0?t=g:t=y,ei(t,"NAME","triangular"),r&&r.prng?(ei(t,"seed",null),ei(t,"seedLength",null),ror(t,"state",aor(null),Ole),ei(t,"stateLength",null),ei(t,"byteLength",null),ei(t,"toJSON",aor(null)),ei(t,"PRNG",e)):(n1(t,"seed",o),n1(t,"seedLength",v),ror(t,"state",l,p),n1(t,"stateLength",f),n1(t,"byteLength",c),ei(t,"toJSON",m),ei(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Ale(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return nor(e,a,n,u)}function g(d,h,q){return f6(d)||f6(h)||f6(q)||!(d<=q&&q<=h)?NaN:nor(e,d,h,q)}}sor.exports=Tle});var oor=s((NJe,uor)=>{"use strict";var Ile=c6(),Rle=Ile();uor.exports=Rle});var lor=s((SJe,cor)=>{"use strict";var Lle=D(),vor=oor(),Ple=c6();Lle(vor,"factory",Ple);cor.exports=vor});var mor=s((OJe,gor)=>{"use strict";var por=Nr().isPrimitive,l6=V(),dor=oe();function Fle(r,e){return!por(r)||dor(r)?new TypeError(l6("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!por(e)||dor(e)?new TypeError(l6("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(l6("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}gor.exports=Fle});var hor=s((AJe,yor)=>{"use strict";function jle(r,e,t){var i=r();return t*i+(1-i)*e}yor.exports=jle});var p6=s((_Je,Aor)=>{"use strict";var ti=D(),o1=br(),qor=Sr(),bor=hr(),wor=qr(),Eor=vr(),Nor=mr(),Mle=Lr(),v1=Wr().factory,Sor=z(),Ble=Or(),f1=V(),kle=mor(),Oor=hor();function Cle(){var r,e,t,i,a,n;if(arguments.length===0)e=v1();else if(arguments.length===1){if(r=arguments[0],!bor(r))throw new TypeError(f1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Eor(r,"prng")){if(!wor(r.prng))throw new TypeError(f1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=v1(r)}else{if(a=arguments[0],n=arguments[1],i=kle(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!bor(r))throw new TypeError(f1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Eor(r,"prng")){if(!wor(r.prng))throw new TypeError(f1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=v1(r)}else e=v1()}return a===void 0?t=y:t=m,ti(t,"NAME","uniform"),r&&r.prng?(ti(t,"seed",null),ti(t,"seedLength",null),qor(t,"state",Nor(null),Mle),ti(t,"stateLength",null),ti(t,"byteLength",null),ti(t,"toJSON",Nor(null)),ti(t,"PRNG",e)):(o1(t,"seed",u),o1(t,"seedLength",o),qor(t,"state",c,l),o1(t,"stateLength",v),o1(t,"byteLength",f),ti(t,"toJSON",p),ti(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Ble(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Oor(e,a,n)}function y(g,d){return Sor(g)||Sor(d)||g>=d?NaN:Oor(e,g,d)}}Aor.exports=Cle});var Tor=s((TJe,_or)=>{"use strict";var Vle=p6(),Ule=Vle();_or.exports=Ule});var Lor=s((IJe,Ror)=>{"use strict";var Gle=D(),Ior=Tor(),Dle=p6();Gle(Ior,"factory",Dle);Ror.exports=Ior});var Mor=s((RJe,jor)=>{"use strict";var Por=Hr().isPrimitive,For=V();function Hle(r,e){return Por(r)?Por(e)?null:new TypeError(For("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(For("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}jor.exports=Hle});var kor=s((LJe,Bor)=>{"use strict";var zle=Gr(),Wle=wr();function Xle(r,e,t){return t*zle(-Wle(1-r()),1/e)}Bor.exports=Xle});var d6=s((PJe,Wor)=>{"use strict";var ii=D(),c1=br(),Cor=Sr(),Vor=hr(),Uor=qr(),Gor=vr(),Dor=mr(),Jle=Lr(),l1=Wr().factory,Hor=z(),Yle=Or(),p1=V(),xle=Mor(),zor=kor();function Zle(){var r,e,t,i,a,n;if(arguments.length===0)t=l1();else if(arguments.length===1){if(e=arguments[0],!Vor(e))throw new TypeError(p1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Gor(e,"prng")){if(!Uor(e.prng))throw new TypeError(p1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=l1(e)}else{if(n=arguments[0],r=arguments[1],a=xle(r,n),a)throw a;if(arguments.length>2){if(e=arguments[2],!Vor(e))throw new TypeError(p1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Gor(e,"prng")){if(!Uor(e.prng))throw new TypeError(p1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=l1(e)}else t=l1()}return r===void 0?i=y:i=m,ii(i,"NAME","weibull"),e&&e.prng?(ii(i,"seed",null),ii(i,"seedLength",null),Cor(i,"state",Dor(null),Jle),ii(i,"stateLength",null),ii(i,"byteLength",null),ii(i,"toJSON",Dor(null)),ii(i,"PRNG",t)):(c1(i,"seed",u),c1(i,"seedLength",o),Cor(i,"state",c,l),c1(i,"stateLength",v),c1(i,"byteLength",f),ii(i,"toJSON",p),ii(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Yle(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return zor(t,n,r)}function y(g,d){return Hor(g)||Hor(d)||g<=0||d<=0?NaN:zor(t,g,d)}}Wor.exports=Zle});var Jor=s((FJe,Xor)=>{"use strict";var $le=d6(),Qle=$le();Xor.exports=Qle});var Zor=s((jJe,xor)=>{"use strict";var Kle=D(),Yor=Jor(),r8e=d6();Kle(Yor,"factory",r8e);xor.exports=Yor});var Qor=s((MJe,$or)=>{"use strict";var e8e=qe(),t8e=ye().isPrimitive,i8e=V(),a8e=H0();function n8e(r){if(t8e(r))return r;if(e8e(r))return a8e(r);throw new TypeError(i8e("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}$or.exports=n8e});var r1r=s((BJe,Kor)=>{"use strict";var s8e=Qor();Kor.exports=s8e});var t1r=s((kJe,e1r)=>{"use strict";var Ar=Qr(),u8e=VZ().factory,o8e=ZZ().factory,v8e=hQ().factory,f8e=iK().factory,c8e=CK().factory,l8e=KK().factory,p8e=yrr().factory,d8e=Vrr().factory,g8e=T0().factory,m8e=Fer().factory,y8e=Ker().factory,h8e=ytr().factory,q8e=Ltr().factory,b8e=Ztr().factory,w8e=pir().factory,E8e=nn().factory,N8e=Tir().factory,S8e=Jir().factory,O8e=har().factory,A8e=Ii().factory,_8e=jar().factory,T8e=rnr().factory,I8e=hnr().factory,R8e=Dnr().factory,L8e=s0r().factory,P8e=S0r().factory,F8e=M0r().factory,j8e=x0r().factory,M8e=Wr().factory,B8e=ksr().factory,k8e=eur().factory,C8e=bur().factory,V8e=x4().factory,U8e=jur().factory,G8e=Yur().factory,D8e=lor().factory,H8e=Lor().factory,z8e=Zor().factory,W8e=r1r();function X8e(r){return Ar(r,"arcsine",u8e),Ar(r,"bernoulli",o8e),Ar(r,"beta",v8e),Ar(r,"betaprime",f8e),Ar(r,"binomial",c8e),Ar(r,"boxMuller",l8e),Ar(r,"cauchy",p8e),Ar(r,"chi",d8e),Ar(r,"chisquare",g8e),Ar(r,"cosine",m8e),Ar(r,"discreteUniform",y8e),Ar(r,"erlang",h8e),Ar(r,"exponential",q8e),Ar(r,"f",b8e),Ar(r,"frechet",w8e),Ar(r,"gamma",E8e),Ar(r,"geometric",N8e),Ar(r,"gumbel",S8e),Ar(r,"hypergeometric",O8e),Ar(r,"improvedZiggurat",A8e),Ar(r,"invgamma",_8e),Ar(r,"kumaraswamy",T8e),Ar(r,"laplace",I8e),Ar(r,"levy",R8e),Ar(r,"logistic",L8e),Ar(r,"lognormal",P8e),Ar(r,"minstd",F8e),Ar(r,"minstdShuffle",j8e),Ar(r,"mt19937",M8e),Ar(r,"negativeBinomial",B8e),Ar(r,"normal",k8e),Ar(r,"pareto1",C8e),Ar(r,"poisson",V8e),Ar(r,"rayleigh",U8e),Ar(r,"t",G8e),Ar(r,"triangular",D8e),Ar(r,"uniform",H8e),Ar(r,"weibull",z8e),r.base={},Ar(r.base,"normalizeSeed",W8e),r}e1r.exports=X8e});var a1r=s((CJe,i1r)=>{"use strict";var J8e=hr(),d1=vr(),Y8e=ye().isPrimitive,x8e=nt().isPrimitive,Z8e=be().isPrimitive,$8e=ps().isPrimitive,F0=V();function Q8e(r,e){return J8e(e)?d1(e,"period")&&(r.period=e.period,!x8e(e.period))?new TypeError(F0("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):d1(e,"amplitude")&&(r.amplitude=e.amplitude,!$8e(e.amplitude))?new TypeError(F0("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):d1(e,"offset")&&(r.offset=e.offset,!Y8e(e.offset))?new TypeError(F0("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):d1(e,"iter")&&(r.iter=e.iter,!Z8e(e.iter))?new TypeError(F0("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",e))}i1r.exports=Q8e});var o1r=s((VJe,u1r)=>{"use strict";var g6=D(),n1r=Rn(),K8e=s0(),r7e=Us(),e7e=Ya(),t7e=Ee(),i7e=a1r();function s1r(r){var e,t,i,a,n,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(a=i7e(e,r),a))throw a;return n=(e.period-e.offset)%e.period,n<0&&(n+=e.period),n-=1,u=t7e/e.period,o=e.amplitude/e7e,v=0,t={},g6(t,"next",f),g6(t,"return",c),n1r&&g6(t,n1r,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(n+=1,n%=e.period,{value:o*r7e(K8e(u*n)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return s1r(e)}}u1r.exports=s1r});var f1r=s((UJe,v1r)=>{"use strict";var a7e=o1r();v1r.exports=a7e});var l1r=s((GJe,c1r)=>{"use strict";var n7e=Qr(),s7e=f1r();function u7e(r){return n7e(r,"iterSawtoothWave",s7e),r}c1r.exports=u7e});var d1r=s((DJe,p1r)=>{"use strict";var o7e=17976931348623157e292;p1r.exports=o7e});var g1=s((HJe,g1r)=>{"use strict";var v7e=709.782712893384;g1r.exports=v7e});var y1r=s((zJe,m1r)=>{"use strict";var f7e=xr();function c7e(r,e){var t,i,a,n;if(a=f7e(-e),i=a,i!==0)for(t=i,n=1;n<r;++n)t/=n,t*=e,i+=t;return i}m1r.exports=c7e});var b1r=s((WJe,q1r)=>{"use strict";var l7e=yi(),h1r=Rr(),p7e=xr(),d7e=Ee();function g7e(r,e){var t,i,a,n,u;if(n=l7e(h1r(e)),n!==0&&r>1){for(i=p7e(-e)/h1r(d7e*e),i*=e,t=.5,i/=t,a=i,u=2;u<r;++u)i/=u-t,i*=e,a+=i;n+=a}return n}q1r.exports=g7e});var m6=s((XJe,w1r)=>{"use strict";var m7e=-708.3964185322641;w1r.exports=m7e});var O1r=s((JJe,S1r)=>{"use strict";var En=xr(),m1=Gr(),y7e=wr(),E1r=g1(),N1r=m6();function h7e(r,e){var t,i;return i=r*y7e(e),e>=1?i<E1r&&-e>N1r?t=m1(e,r)*En(-e):r>=1?t=m1(e/En(e/r),r):t=En(i-e):i>N1r?t=m1(e,r)*En(-e):e/r<E1r?t=m1(e/En(e/r),r):t=En(i-e),t}S1r.exports=h7e});var y6=s((YJe,A1r)=>{"use strict";function q7e(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}A1r.exports=q7e});var T1r=s((xJe,_1r)=>{"use strict";var b7e=Function;_1r.exports=b7e});var R1r=s((ZJe,I1r)=>{"use strict";var w7e=T1r();I1r.exports=w7e});var P1r=s(($Je,L1r)=>{"use strict";var E7e=R1r(),N7e=y6();function S7e(r){var e,t,i,a;if(r.length>500)return n;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,a=1;a<t;a++)e+="+x*",a<i&&(e+="("),e+=r[a];for(a=0;a<i-1;a++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new E7e(e)();function n(u){return N7e(r,u)}}L1r.exports=S7e});var M1r=s((QJe,j1r)=>{"use strict";var O7e=D(),F1r=y6(),A7e=P1r();O7e(F1r,"factory",A7e);j1r.exports=F1r});var k1r=s((KJe,B1r)=>{"use strict";var _7e=eval;B1r.exports=_7e});var V1r=s((rYe,C1r)=>{"use strict";var T7e=k1r();function I7e(){var r;try{T7e('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}C1r.exports=I7e});var h6=s((eYe,U1r)=>{"use strict";var R7e=V1r();U1r.exports=R7e});var D1r=s((tYe,G1r)=>{"use strict";var y1=Dr(),L7e=hi(),P7e=1e6;function F7e(r,e){var t,i,a,n,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||L7e,n=o.maxTerms||P7e,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(a of r)if(u+=a,y1(i*u)>=y1(a)||--n===0)break}else do a=r(),u+=a;while(y1(i*u)<y1(a)&&--n);return u}G1r.exports=F7e});var W1r=s((iYe,z1r)=>{"use strict";var H1r=Dr(),j7e=hi(),M7e=1e6;function B7e(r,e){var t,i,a,n,u;u={},arguments.length>1&&(u=e),t=u.tolerance||j7e,a=u.maxTerms||M7e,n=u.initialValue||0;do i=r(),n+=i;while(H1r(t*n)<H1r(i)&&--a);return n}z1r.exports=B7e});var h1=s((aYe,X1r)=>{"use strict";var k7e=h6(),C7e=D1r(),V7e=W1r(),q6;k7e()?q6=C7e:q6=V7e;X1r.exports=q6});var Y1r=s((nYe,J1r)=>{"use strict";function U7e(r){var e=-r,t=-1,i=0;return a;function a(){return t*=e,i+=1,t/i}}J1r.exports=U7e});var Z1r=s((sYe,x1r)=>{"use strict";var G7e=Dr(),D7e=wr(),H7e=hi(),z7e=h1(),W7e=Y1r();function X7e(r){var e,t;return r<=-1?NaN:(t=G7e(r),t>.95?D7e(1+r)-r:t<H7e?-r*r/2:(e={initialValue:-r},z7e(W7e(r),e)))}x1r.exports=X7e});var Q1r=s((uYe,$1r)=>{"use strict";var J7e=Z1r();$1r.exports=J7e});var r2r=s((oYe,K1r)=>{"use strict";function Y7e(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}K1r.exports=Y7e});var t2r=s((vYe,e2r)=>{"use strict";function x7e(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}e2r.exports=x7e});var a2r=s((fYe,i2r)=>{"use strict";function Z7e(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}i2r.exports=Z7e});var s2r=s((cYe,n2r)=>{"use strict";function $7e(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}n2r.exports=$7e});var o2r=s((lYe,u2r)=>{"use strict";function Q7e(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}u2r.exports=Q7e});var f2r=s((pYe,v2r)=>{"use strict";function K7e(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}v2r.exports=K7e});var l2r=s((dYe,c2r)=>{"use strict";function r9e(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}c2r.exports=r9e});var d2r=s((gYe,p2r)=>{"use strict";function e9e(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}p2r.exports=e9e});var m2r=s((mYe,g2r)=>{"use strict";function t9e(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}g2r.exports=t9e});var h2r=s((yYe,y2r)=>{"use strict";var i9e=M1r(),a9e=Q1r(),n9e=yi(),b6=Rr(),s9e=xr(),u9e=mi(),o9e=r2r(),v9e=t2r(),f9e=a2r(),c9e=s2r(),l9e=o2r(),p9e=f2r(),d9e=l2r(),g9e=d2r(),m9e=m2r(),Ke=[0,0,0,0,0,0,0,0,0,0];function y9e(r,e){var t,i,a,n,u;return i=(e-r)/r,a=-a9e(i),n=r*a,u=b6(2*a),e<r&&(u=-u),Ke[0]=o9e(u),Ke[1]=v9e(u),Ke[2]=f9e(u),Ke[3]=c9e(u),Ke[4]=l9e(u),Ke[5]=p9e(u),Ke[6]=d9e(u),Ke[7]=g9e(u),Ke[8]=m9e(u),Ke[9]=-.0005967612901927463,t=i9e(Ke,1/r),t*=s9e(-n)/b6(u9e*r),e<r&&(t=-t),t+=n9e(b6(n))/2,t}y2r.exports=y9e});var b2r=s((hYe,q2r)=>{"use strict";function h9e(r,e){var t=1,i=r,a=e;return n;function n(){var u=t;return i+=1,t*=a/i,u}}q2r.exports=h9e});var E2r=s((qYe,w2r)=>{"use strict";var q9e=h1(),b9e=b2r();function w9e(r,e,t){var i,a;return t=t||0,a=b9e(r,e),i=q9e(a,{initialValue:t}),i}w2r.exports=w9e});var S2r=s((bYe,N2r)=>{"use strict";function E9e(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}N2r.exports=E9e});var A2r=s((wYe,O2r)=>{"use strict";var N9e=S2r();O2r.exports=N9e});var T2r=s((EYe,_2r)=>{"use strict";var S9e=A2r();_2r.exports=S9e});var L2r=s((NYe,R2r)=>{"use strict";var O9e=B3(),I2r=z(),w6=Ir();function A9e(r,e){return I2r(r)||I2r(e)?NaN:r===w6||e===w6?w6:r===e&&r===0?O9e(r)?r:e:r<e?r:e}R2r.exports=A9e});var F2r=s((SYe,P2r)=>{"use strict";var _9e=L2r();P2r.exports=_9e});var M2r=s((OYe,j2r)=>{"use strict";var T9e=10.900511;j2r.exports=T9e});var E6=s((AYe,B2r)=>{"use strict";var I9e=2.718281828459045;B2r.exports=I9e});var V2r=s((_Ye,C2r)=>{"use strict";var R9e=T2r(),L9e=c0(),P9e=Za(),F9e=di(),j9e=Rr(),M9e=Dr(),Xi=xr(),j0=Gr(),N6=Nf(),S6=F2r(),k2r=wr(),q1=g1(),M0=m6(),O6=M2r(),B9e=E6();function k9e(r,e){var t,i,a,n,u,o,v;return a=r+O6-.5,v=(e-r-O6+.5)/a,r<1?e<=M0?Xi(r*k2r(e)-e-L9e(r)):j0(e,r)*Xi(-e)/P9e(r):(M9e(v*v*r)<=100&&r>150?(t=r*(F9e(v)-v)+e*(.5-O6)/a,t=Xi(t)):(n=r*k2r(e/a),u=r-e,S6(n,u)<=M0||N6(n,u)>=q1?(i=u/r,S6(n,u)/2>M0&&N6(n,u)/2<q1?(o=j0(e/a,r/2)*Xi(u/2),t=o*o):S6(n,u)/4>M0&&N6(n,u)/4<q1&&e>r?(o=j0(e/a,r/4)*Xi(u/4),t=o*o,t*=t):i>M0&&i<q1?t=j0(e*Xi(i)/a,r):t=Xi(n+u)):t=j0(e/a,r)*Xi(u)),t*=j9e(a/B9e)/R9e(r),t)}C2r.exports=k9e});var G2r=s((TYe,U2r)=>{"use strict";function C9e(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}U2r.exports=C9e});var H2r=s((IYe,D2r)=>{"use strict";function V9e(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}D2r.exports=V9e});var W2r=s((RYe,z2r)=>{"use strict";function U9e(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}z2r.exports=U9e});var J2r=s((LYe,X2r)=>{"use strict";var A6=wr(),G9e=hi(),D9e=G2r(),H9e=H2r(),z9e=W2r(),W9e=.15896368026733398,X9e=.5281534194946289,J9e=.45201730728149414;function Y9e(r,e,t){var i,a,n,u;if(r<G9e)return-A6(r);if(e===0||t===0)return 0;if(a=0,r>2){if(r>=3){do r-=1,t-=1,a+=A6(r);while(r>=3);t=r-2}return n=t*(r+1),u=D9e(t),a+=n*W9e+n*u,a}return r<1&&(a+=-A6(r),t=e,e=r,r+=1),r<=1.5?(n=H9e(e),i=e*t,a+=i*X9e+i*n,a):(n=t*e,u=z9e(-t),a+=n*J9e+n*u,a)}X2r.exports=Y9e});var Q2r=s((PYe,$2r)=>{"use strict";var Y2r=Za(),x2r=u0(),x9e=di(),Z9e=z(),Z2r=J2r();function $9e(r){return Z9e(r)?NaN:r<0?r<-.5?Y2r(1+r)-1:x2r(-x9e(r)+Z2r(r+2,r+1,r)):r<2?x2r(Z2r(r+1,r,r-1)):Y2r(1+r)-1}$2r.exports=$9e});var rvr=s((FYe,K2r)=>{"use strict";var Q9e=Q2r();K2r.exports=Q9e});var tvr=s((jYe,evr)=>{"use strict";function K9e(r,e){var t,i,a,n;return t=-e,e=-e,i=r+1,a=1,u;function u(){return n=t/i,t*=e,a+=1,t/=a,i+=1,n}}evr.exports=K9e});var avr=s((MYe,ivr)=>{"use strict";var rpe=M3(),epe=h1(),tpe=rvr(),ipe=tvr();function ape(r,e,t){var i,a,n,u,o;return a=tpe(r),n=(a+1)/r,u=rpe(e,r),a-=u,a/=r,o=ipe(r,e),u+=1,i=t?n:0,a=-u*epe(o,{initialValue:(i-a)/u}),t&&(a=-a),[a,n]}ivr.exports=ape});var _6=s((BYe,nvr)=>{"use strict";var npe=11754943508222875e-54;nvr.exports=npe});var uvr=s((kYe,svr)=>{"use strict";var b1=Dr(),mt=_6(),spe=hi(),upe=1e6;function ope(r,e,t){var i,a,n,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],n=f[0],u===0&&(u=mt),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=mt),o=f[1]+f[0]/o,o===0&&(o=mt),v=1/v,a=o*v,u*=a);while(b1(a-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=mt),o=f[1]+f[0]/o,o===0&&(o=mt),v=1/v,a=o*v,u*=a);while(f&&b1(a-1)>e&&--t);return n/u}function vpe(r,e,t){var i,a,n,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),n=v[1],n===0&&(n=mt),u=n,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=mt),u=v[1]+v[0]/u,u===0&&(u=mt),o=1/o,a=u*o,n*=a);while(v&&b1(a-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=mt),u=v[1]+v[0]/u,u===0&&(u=mt),o=1/o,a=u*o,n*=a);while(v&&b1(a-1)>e&&--t);return n}function fpe(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),t=i.maxIter||upe,a=i.tolerance||spe,i.keep?vpe(r,a,t):ope(r,a,t)}svr.exports=fpe});var fvr=s((CYe,vvr)=>{"use strict";var ovr=Dr(),cpe=hi(),Nn=_6(),lpe=1e6;function ppe(r,e,t){var i,a,n,u,o,v;v=r(),o=v[1],a=v[0],o===0&&(o=Nn),n=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=Nn),n=v[1]+v[0]/n,n===0&&(n=Nn),u=1/u,i=n*u,o*=i);while(v&&ovr(i-1)>e&&--t);return a/o}function dpe(r,e,t){var i,a,n,u,o;o=r(),u=o[1],u===0&&(u=Nn),a=u,n=0;do o=r(),o&&(n=o[1]+o[0]*n,n===0&&(n=Nn),a=o[1]+o[0]/a,a===0&&(a=Nn),n=1/n,i=a*n,u*=i);while(o&&ovr(i-1)>e&&--t);return u}function gpe(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),a=i.tolerance||cpe,t=i.maxIter||lpe,i.keep?dpe(r,a,t):ppe(r,a,t)}vvr.exports=gpe});var lvr=s((VYe,cvr)=>{"use strict";var mpe=h6(),ype=uvr(),hpe=fvr(),T6;mpe()?T6=ype:T6=hpe;cvr.exports=T6});var dvr=s((UYe,pvr)=>{"use strict";function qpe(r,e){var t=e-r+1,i=r,a=0;return n;function n(){return a+=1,t+=2,[a*(i-a),t]}}pvr.exports=qpe});var mvr=s((GYe,gvr)=>{"use strict";var bpe=lvr(),wpe=dvr();function Epe(r,e){var t=wpe(r,e);return 1/(e-r+1+bpe(t))}gvr.exports=Epe});var Avr=s((DYe,Ovr)=>{"use strict";var Npe=c0(),Spe=Ur(),B0=Za(),yvr=Dr(),Ope=xr(),hvr=Gr(),rt=wr(),Ape=U3(),qvr=d1r(),_pe=k3(),bvr=g1(),Tpe=pr(),Ipe=y1r(),Rpe=b1r(),wvr=O1r(),Lpe=h2r(),I6=E2r(),Evr=V2r(),Ppe=avr(),Nvr=mvr(),Fpe=170;function Svr(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(r<0||e<=0)return NaN;if(n=t===void 0?!0:t,l=i,p=0,e>=Fpe&&!n)return l&&e*4<r?(p=e*rt(r)-r,p+=rt(Nvr(e,r))):!l&&e>4*r?(p=e*rt(r)-r,o=0,p+=rt(I6(e,r,o)/e)):(p=Svr(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=rt(p)-e+(e-.5)*rt(e),p+=rt(_pe)):(p=e*rt(r)-r,o=0,p+=rt(I6(e,r,o)/e)):p=rt(p)+Npe(e)),p>bvr?Tpe:Ope(p);switch(c=e<30&&e<=r+1&&r<bvr,c?(h=Spe(e),m=h===e,v=m?!1:yvr(h-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<Ape&&e>1?u=6:r<.5?-.4/rt(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,n&&e>20&&(y=yvr((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=Ipe(e,r),n===!1&&(p*=B0(e));break;case 1:p=Rpe(e,r),n===!1&&(p*=B0(e));break;case 2:p=n?Evr(e,r):wvr(e,r),p!==0&&(o=0,a=!1,l&&(o=n?1:B0(e),n||p>=1||qvr*p>o?(o/=p,n||e<1||qvr/e>o?(o*=-e,a=!0):o=0):o=0)),p*=I6(e,r,o)/e,a&&(l=!1,p=-p);break;case 3:l=!l,d=Ppe(e,r,l),p=d[0],q=d[1],l=!1,n&&(p/=q);break;case 4:p=n?Evr(e,r):wvr(e,r),p!==0&&(p*=Nvr(e,r));break;case 5:p=Lpe(e,r),r>=e&&(l=!l);break;case 6:p=n?hvr(r,e)/B0(e+1):hvr(r,e)/e,p*=1-e*r/(e+1);break}return n&&p>1&&(p=1),l&&(g=n?1:B0(e),p=g-p),p}Ovr.exports=Svr});var R6=s((HYe,_vr)=>{"use strict";var jpe=Avr();_vr.exports=jpe});var Ivr=s((zYe,Tvr)=>{"use strict";var Mpe=R6(),L6=z(),Bpe=pr();function kpe(r,e,t){return L6(r)||L6(e)||L6(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Bpe?1:Mpe(r*t,e)}Tvr.exports=kpe});var Pvr=s((WYe,Lvr)=>{"use strict";var Cpe=mr(),Vpe=Wu().factory,Upe=R6(),Rvr=z(),Gpe=pr();function Dpe(r,e){if(Rvr(r)||Rvr(e)||r<0||e<=0)return Cpe(NaN);if(r===0)return Vpe(0);return t;function t(i){return i<=0?0:i===Gpe?1:Upe(i*e,r)}}Lvr.exports=Dpe});var P6=s((XYe,jvr)=>{"use strict";var Hpe=D(),Fvr=Ivr(),zpe=Pvr();Hpe(Fvr,"factory",zpe);jvr.exports=Fvr});var Bvr=s((JYe,Mvr)=>{"use strict";var Wpe=P6();function Xpe(r,e){return Wpe(r,e/2,.5)}Mvr.exports=Xpe});var Cvr=s((YYe,kvr)=>{"use strict";var Jpe=P6().factory;function Ype(r){return Jpe(r/2,.5)}kvr.exports=Ype});var Gvr=s((xYe,Uvr)=>{"use strict";var xpe=D(),Vvr=Bvr(),Zpe=Cvr();xpe(Vvr,"factory",Zpe);Uvr.exports=Vvr});var Wvr=s((ZYe,zvr)=>{"use strict";var $pe=hr(),Qpe=vr(),Kpe=ds(),Dvr=V(),Hvr=["values","indices","*"];function rde(r,e){return $pe(e)?Qpe(e,"returns")&&(r.returns=e.returns,Kpe(Hvr,r.returns)===-1)?new TypeError(Dvr('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Hvr.join('", "'),r.returns)):null:new TypeError(Dvr("invalid argument. Options argument must be an object. Value: `%s`.",e))}zvr.exports=rde});var Jvr=s(($Ye,Xvr)=>{"use strict";var ede=vr();function tde(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),ede(t,a)?t[a].push(r[n]):t[a]=[r[n]];return t}Xvr.exports=tde});var xvr=s((QYe,Yvr)=>{"use strict";var ide=vr();function ade(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),ide(t,a)?t[a].push(n):t[a]=[n];return t}Yvr.exports=ade});var $vr=s((KYe,Zvr)=>{"use strict";var nde=vr();function sde(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),nde(t,a)?t[a].push([n,r[n]]):t[a]=[[n,r[n]]];return t}Zvr.exports=sde});var e3r=s((rxe,r3r)=>{"use strict";var Qvr=Ve(),Kvr=V(),ude=Wvr(),ode=Jvr(),vde=xvr(),fde=$vr();function cde(r,e,t){var i,a,n;if(!Qvr(r))throw new TypeError(Kvr("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)n=e;else{if(a=ude(i,e),a)throw a;n=t}if(!Qvr(n))throw new TypeError(Kvr("invalid argument. Last argument must be a collection. Value: `%s`.",n));if(r.length!==n.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?ode(r,n):i.returns==="indices"?vde(r,n):fde(r,n)}r3r.exports=cde});var i3r=s((exe,t3r)=>{"use strict";var lde=e3r();t3r.exports=lde});var n3r=s((txe,a3r)=>{"use strict";function pde(r){var e,t,i,a,n,u;for(e=0,t=0,a=0,i=r.length,n=0;n<i;n++)u=r[n],e=u-t,t+=e/(n+1),a+=e*(u-t);return a/(n-1)}a3r.exports=pde});var o3r=s((ixe,u3r)=>{"use strict";var dde=qe(),gde=Nr().isPrimitive,mde=hr(),yde=oe(),s3r=vr(),F6=V();function hde(r,e){return mde(e)?s3r(e,"alpha")&&(r.alpha=e.alpha,!gde(r.alpha)||yde(r.alpha))?new TypeError(F6("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):s3r(e,"groups")&&(r.groups=e.groups,!dde(r.groups))?new TypeError(F6("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(F6("invalid argument. Options argument must be an object. Value: `%s`.",e))}u3r.exports=hde});var g3r=s((axe,d3r)=>{"use strict";var v3r=z(),w1=_e(),f3r=Gr(),qde=Dr(),c3r=Ws(),bde=sa(),l3r=Xn(),wde=Rs(),Ede=Ls(),Nde=bde+1,p3r=1e308;function Sde(r,e){var t,i;return v3r(r)||v3r(e)||w1(e)?NaN:w1(r)||r===0||e<Ede||qde(r)>Nde&&e<=0?r:e>l3r?0*r:e<wde?(t=f3r(10,-(e+l3r)),i=r*p3r*t,w1(i)?r:c3r(i)/p3r/t):(t=f3r(10,-e),i=r*t,w1(i)?r:c3r(i)/t)}d3r.exports=Sde});var y3r=s((nxe,m3r)=>{"use strict";var Ode=g3r();m3r.exports=Ode});var b3r=s((sxe,q3r)=>{"use strict";var Ade=nt(),_de=hr(),Tde=de().isPrimitive,h3r=vr(),j6=V(),M6=y3r();function Ide(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!_de(r))throw new TypeError(j6("invalid argument. First argument must be an object. Value: `%s`.",r));if(h3r(r,"digits")){if(!Ade(r.digits))throw new TypeError(j6("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(h3r(r,"decision")){if(!Tde(r.decision))throw new TypeError(j6("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+M6(this.pValue,-t)+`
`,i+="    statistic: "+M6(this.statistic,-t)+`
`,i+="    df: "+M6(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}q3r.exports=Ide});var N3r=s((uxe,E3r)=>{"use strict";var Rde=Ve(),Lde=hr(),pa=Qr(),Pde=Va(),E1=V(),Fde=Gvr(),jde=i3r(),w3r=wr(),Mde=n3r(),Bde=o3r(),kde=b3r();function Cde(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;if(v=[],e=arguments.length,f={},Lde(arguments[e-1])&&(r=arguments[e-1],e-=1,m=Bde(f,r),m))throw m;if(f.groups){if(a=jde(arguments[0],f.groups),i=Pde(a),e=i.length,e<2)throw new Error(E1("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(w=0;w<e;w++)v.push(a[i[w]])}else for(w=0;w<e;w++)v.push(arguments[w]);for(u=0,t=0,o=0,y=0,h=new Array(e),q=h.slice(),w=0;w<e;w++){if(p=v[w],!Rde(p))throw new TypeError(E1("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(E1("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));h[w]=p.length-1,u+=h[w],t+=1/h[w],q[w]=Mde(p),o+=h[w]*q[w],y+=h[w]*w3r(q[w])}if(o/=u,f.alpha===void 0?n=.05:n=f.alpha,n<0||n>1)throw new RangeError(E1("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",n));return l=u*w3r(o)-y,l/=1+(t-1/u)/(3*(e-1)),d=e-1,c=1-Fde(l,d),g={},pa(g,"rejected",c<=n),pa(g,"alpha",n),pa(g,"pValue",c),pa(g,"statistic",l),pa(g,"df",d),pa(g,"method","Bartlett's test of equal variances"),pa(g,"print",kde),g}E3r.exports=Cde});var O3r=s((oxe,S3r)=>{"use strict";var Vde=N3r();S3r.exports=Vde});var _3r=s((vxe,A3r)=>{"use strict";var B6=z(),Ude=Ni();function Gde(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,n=e[u],i[o]=n,o+=a,f=1,B6(n)===!1)for(f;f<r;f++){if(u+=t,v=e[u],B6(v)){n=v;break}(v>n||v===n&&Ude(v))&&(n=v),i[o]=n,o+=a}if(B6(n))for(f;f<r;f++)i[o]=n,o+=a;return i}A3r.exports=Gde});var I3r=s((fxe,T3r)=>{"use strict";var k6=z(),Dde=Ni();function Hde(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return a;if(v=i,f=u,o=e[v],a[f]=o,f+=n,l=1,k6(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],k6(c)){o=c;break}(c>o||c===o&&Dde(c))&&(o=c),a[f]=o,f+=n}if(k6(o))for(l;l<r;l++)a[f]=o,f+=n;return a}T3r.exports=Hde});var P3r=s((cxe,L3r)=>{"use strict";var zde=D(),R3r=_3r(),Wde=I3r();zde(R3r,"ndarray",Wde);L3r.exports=R3r});var j3r=s((lxe,F3r)=>{"use strict";var Xde=P3r();F3r.exports=Xde});var B3r=s((pxe,M3r)=>{"use strict";var Jde=z(),Yde=Ni();function xde(r,e,t){var i,a,n,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?a=(1-r)*t:a=0,i=e[a],u=1;u<r;u++){if(a+=t,n=e[a],Jde(n))return n;(n>i||n===i&&Yde(n))&&(i=n)}return i}M3r.exports=xde});var C3r=s((dxe,k3r)=>{"use strict";var Zde=z(),$de=Ni();function Qde(r,e,t,i){var a,n,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(n=i,a=e[n],o=1;o<r;o++){if(n+=t,u=e[n],Zde(u))return u;(u>a||u===a&&$de(u))&&(a=u)}return a}k3r.exports=Qde});var G3r=s((gxe,U3r)=>{"use strict";var Kde=D(),V3r=B3r(),rge=C3r();Kde(V3r,"ndarray",rge);U3r.exports=V3r});var H3r=s((mxe,D3r)=>{"use strict";var ege=G3r();D3r.exports=ege});var X3r=s((yxe,W3r)=>{"use strict";var z3r=z(),tge=Ni();function ige(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=a;if(f===r)return NaN;if(n=e[u],z3r(n))return n;for(f+=1,f;f<r;f++)if(u+=t,o+=a,!i[o]){if(v=e[u],z3r(v))return v;(v>n||v===n&&tge(v))&&(n=v)}return n}W3r.exports=ige});var x3r=s((hxe,Y3r)=>{"use strict";var J3r=z(),age=Ni();function nge(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&a[f]!==0;l++)v+=t,f+=n;if(l===r)return NaN;if(o=e[v],J3r(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=n,!a[f]){if(c=e[v],J3r(c))return c;(c>o||c===o&&age(c))&&(o=c)}return o}Y3r.exports=nge});var Q3r=s((qxe,$3r)=>{"use strict";var sge=D(),Z3r=X3r(),uge=x3r();sge(Z3r,"ndarray",uge);$3r.exports=Z3r});var rfr=s((bxe,K3r)=>{"use strict";var oge=yi(),vge=Rr(),C6=z();function fge(r,e,t){var i,a;return C6(r)||C6(e)||C6(t)||t<0?NaN:t===0?r<e?0:1:(i=t*vge(2),a=r-e,.5*oge(-a/i))}K3r.exports=fge});var tfr=s((wxe,efr)=>{"use strict";var cge=mr(),lge=Wu().factory,V6=z(),pge=Rr(),dge=yi();function gge(r,e){var t;if(V6(r)||V6(e)||e<0)return cge(NaN);if(e===0)return lge(r);return t=e*pge(2),i;function i(a){var n;return V6(a)?NaN:(n=a-r,.5*dge(-n/t))}}efr.exports=gge});var nfr=s((Exe,afr)=>{"use strict";var mge=D(),ifr=rfr(),yge=tfr();mge(ifr,"factory",yge);afr.exports=ifr});var ofr=s((Nxe,ufr)=>{"use strict";var sfr=z(),hge=wr(),qge=mi(),bge=E6();function wge(r,e){return sfr(r)||sfr(e)||e<=0?NaN:.5*hge(qge*bge*e*e)}ufr.exports=wge});var ffr=s((Sxe,vfr)=>{"use strict";var Ege=ofr();vfr.exports=Ege});var pfr=s((Oxe,lfr)=>{"use strict";var cfr=z();function Nge(r,e){return cfr(r)||cfr(e)||e<=0?NaN:0}lfr.exports=Nge});var gfr=s((Axe,dfr)=>{"use strict";var Sge=pfr();dfr.exports=Sge});var yfr=s((_xe,mfr)=>{"use strict";var Oge=Ur(),Age=[_ge,Tge,Ige,Rge,Lge,Pge,Fge,jge,Mge,Bge,kge,Cge,Vge,Uge,Gge,Dge,Hge,zge,Wge,Xge,Jge,Yge,xge,Zge,$ge,Qge,Kge,rme,eme,tme,ime,ame,nme,sme,ume,ome,vme,fme,cme,lme,pme,dme,gme,mme,yme,hme,qme,bme,wme,Eme,Nme,Sme,Ome,Ame,_me,Tme,Ime,Rme,Lme,Pme,Fme,jme,Mme,Bme,kme,Cme,Vme,Ume,Gme,Dme,Hme,zme,Wme,Xme,Jme,Yme,xme,Zme,$me,Qme,Kme,rye,eye,tye,iye,aye,nye,sye,uye,oye,vye,fye,cye,lye,pye,dye,gye,mye,yye,hye,qye];function _ge(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function Tge(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function Ige(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function Rge(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function Lge(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function Pge(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function Fge(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function jge(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function Mge(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function Bge(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function kge(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function Cge(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function Vge(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function Uge(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function Gge(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function Dge(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function Hge(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function zge(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function Wge(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function Xge(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function Jge(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function Yge(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function xge(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function Zge(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function $ge(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function Qge(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function Kge(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function rme(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function eme(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function tme(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function ime(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function ame(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function nme(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function sme(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function ume(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function ome(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function vme(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function fme(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function cme(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function lme(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function pme(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function dme(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function gme(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function mme(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function yme(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function hme(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function qme(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function bme(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function wme(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function Eme(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function Nme(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function Sme(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function Ome(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function Ame(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function _me(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function Tme(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function Ime(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function Rme(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function Lme(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function Pme(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function Fme(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function jme(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function Mme(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function Bme(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function kme(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function Cme(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function Vme(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function Ume(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function Gme(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function Dme(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function Hme(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function zme(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function Wme(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function Xme(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function Jme(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function Yme(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function xme(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function Zme(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function $me(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function Qme(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function Kme(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function rye(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function eye(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function tye(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function iye(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function aye(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function nye(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function sye(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function uye(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function oye(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function vye(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function fye(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function cye(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function lye(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function pye(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function dye(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function gye(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function mye(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function yye(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function hye(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function qye(){return 1}function bye(r){var e=Oge(r),t=Age[e];return t(2*r-(2*e+1))}mfr.exports=bye});var Efr=s((Txe,wfr)=>{"use strict";var hfr=xr(),wye=pr(),qfr=yfr(),bfr=.5641895835477563;function Eye(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?bfr/r:(e=r*r,bfr*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):qfr(400/(4+r)):r<-26.7?wye:(e=r*r,r<-6.1?2*hfr(e):2*hfr(e)-qfr(400/(4-r)))}wfr.exports=Eye});var U6=s((Ixe,Nfr)=>{"use strict";var Nye=Efr();Nfr.exports=Nye});var Afr=s((Rxe,Ofr)=>{"use strict";var Sye=wr(),Oye=di(),Aye=Bs(),_ye=yi(),Tye=U6(),Iye=Ir(),G6=z(),Sfr=.7071067811865475;function Rye(r,e,t){var i;return G6(r)||G6(e)||G6(t)||t<0?NaN:t===0?r<e?Iye:0:(i=(r-e)/t,i<-1?Sye(Tye(-i*Sfr)/2)-Aye(i)/2:Oye(-_ye(i*Sfr)/2))}Ofr.exports=Rye});var Ifr=s((Lxe,Tfr)=>{"use strict";var _fr=z(),Lye=Ir();function Pye(r,e){return _fr(r)||_fr(e)?NaN:r<e?Lye:0}Tfr.exports=Pye});var Pfr=s((Pxe,Lfr)=>{"use strict";var Fye=mr(),Rfr=z(),jye=Ir();function Mye(r){if(Rfr(r))return Fye(NaN);return e;function e(t){return Rfr(t)?NaN:t<r?jye:0}}Lfr.exports=Mye});var Mfr=s((Fxe,jfr)=>{"use strict";var Bye=D(),Ffr=Ifr(),kye=Pfr();Bye(Ffr,"factory",kye);jfr.exports=Ffr});var Vfr=s((jxe,Cfr)=>{"use strict";var Cye=mr(),Vye=Mfr().factory,Bfr=z(),Uye=di(),Gye=Bs(),Dye=yi(),Hye=U6(),zye=wr(),kfr=.7071067811865475;function Wye(r,e){if(Bfr(r)||Bfr(e)||e<0)return Cye(NaN);if(e===0)return Vye(r);return t;function t(i){var a=(i-r)/e;return a<-1?zye(Hye(-a*kfr)/2)-Gye(a)/2:Uye(-Dye(a*kfr)/2)}}Cfr.exports=Wye});var Dfr=s((Mxe,Gfr)=>{"use strict";var Xye=D(),Ufr=Afr(),Jye=Vfr();Xye(Ufr,"factory",Jye);Gfr.exports=Ufr});var D6=s((Bxe,Hfr)=>{"use strict";var Yye=1.8378770664093456;Hfr.exports=Yye});var Xfr=s((kxe,Wfr)=>{"use strict";var xye=wr(),zfr=Gr(),Zye=D6(),$ye=Ir(),Qye=pr(),H6=z();function Kye(r,e,t){var i,a,n;return H6(r)||H6(e)||H6(t)||t<0?NaN:t===0?r===e?Qye:$ye:(i=zfr(t,2),a=-.5*(2*xye(t)+Zye),n=-1/(2*i),a+n*zfr(r-e,2))}Wfr.exports=Kye});var xfr=s((Cxe,Yfr)=>{"use strict";var rhe=pr(),ehe=Ir(),Jfr=z();function the(r,e){return Jfr(r)||Jfr(e)?NaN:r===e?rhe:ehe}Yfr.exports=the});var Qfr=s((Vxe,$fr)=>{"use strict";var ihe=mr(),ahe=pr(),nhe=Ir(),Zfr=z();function she(r){if(Zfr(r))return ihe(NaN);return e;function e(t){return Zfr(t)?NaN:t===r?ahe:nhe}}$fr.exports=she});var e4r=s((Uxe,r4r)=>{"use strict";var uhe=D(),Kfr=xfr(),ohe=Qfr();uhe(Kfr,"factory",ohe);r4r.exports=Kfr});var n4r=s((Gxe,a4r)=>{"use strict";var vhe=mr(),fhe=e4r().factory,che=D6(),t4r=z(),i4r=Gr(),lhe=wr();function phe(r,e){var t,i,a;if(t4r(r)||t4r(e)||e<0)return vhe(NaN);if(e===0)return fhe(r);return t=i4r(e,2),i=-.5*(2*lhe(e)+che),a=-1/(2*t),n;function n(u){return i+a*i4r(u-r,2)}}a4r.exports=phe});var o4r=s((Dxe,u4r)=>{"use strict";var dhe=D(),s4r=Xfr(),ghe=n4r();dhe(s4r,"factory",ghe);u4r.exports=s4r});var c4r=s((Hxe,f4r)=>{"use strict";var v4r=z();function mhe(r,e){return v4r(r)||v4r(e)||e<=0?NaN:r}f4r.exports=mhe});var p4r=s((zxe,l4r)=>{"use strict";var yhe=c4r();l4r.exports=yhe});var m4r=s((Wxe,g4r)=>{"use strict";var d4r=z();function hhe(r,e){return d4r(r)||d4r(e)||e<=0?NaN:r}g4r.exports=hhe});var h4r=s((Xxe,y4r)=>{"use strict";var qhe=m4r();y4r.exports=qhe});var b4r=s((Jxe,q4r)=>{"use strict";var z6=z(),bhe=xr(),whe=Gr();function Ehe(r,e,t){return z6(r)||z6(e)||z6(t)||t<=0?NaN:bhe(e*r+.5*whe(t*r,2))}q4r.exports=Ehe});var E4r=s((Yxe,w4r)=>{"use strict";var Nhe=mr(),W6=z(),She=xr(),Ohe=Gr();function Ahe(r,e){if(W6(r)||W6(e)||e<=0)return Nhe(NaN);return t;function t(i){return W6(i)?NaN:She(r*i+.5*Ohe(e*i,2))}}w4r.exports=Ahe});var O4r=s((xxe,S4r)=>{"use strict";var _he=D(),N4r=b4r(),The=E4r();_he(N4r,"factory",The);S4r.exports=N4r});var T4r=s((Zxe,_4r)=>{"use strict";var A4r=z();function Ihe(r,e){return A4r(r)||A4r(e)||e<=0?NaN:r}_4r.exports=Ihe});var R4r=s(($xe,I4r)=>{"use strict";var Rhe=T4r();I4r.exports=Rhe});var F4r=s((Qxe,P4r)=>{"use strict";var Lhe=xr(),L4r=Gr(),Phe=Rr(),Fhe=mi(),jhe=pr(),X6=z();function Mhe(r,e,t){var i,a,n;return X6(r)||X6(e)||X6(t)||t<0?NaN:t===0?r===e?jhe:0:(i=L4r(t,2),a=1/Phe(i*Fhe),n=-1/(2*i),a*Lhe(n*L4r(r-e,2)))}P4r.exports=Mhe});var B4r=s((Kxe,M4r)=>{"use strict";var Bhe=pr(),j4r=z();function khe(r,e){return j4r(r)||j4r(e)?NaN:r===e?Bhe:0}M4r.exports=khe});var V4r=s((rZe,C4r)=>{"use strict";var Che=mr(),Vhe=pr(),k4r=z();function Uhe(r){if(k4r(r))return Che(NaN);return e;function e(t){return k4r(t)?NaN:t===r?Vhe:0}}C4r.exports=Uhe});var D4r=s((eZe,G4r)=>{"use strict";var Ghe=D(),U4r=B4r(),Dhe=V4r();Ghe(U4r,"factory",Dhe);G4r.exports=U4r});var W4r=s((tZe,z4r)=>{"use strict";var Hhe=mr(),zhe=D4r().factory,J6=z(),Whe=Rr(),Xhe=xr(),H4r=Gr(),Jhe=mi();function Yhe(r,e){var t,i,a;if(J6(r)||J6(e)||e<0)return Hhe(NaN);if(e===0)return zhe(r);return t=H4r(e,2),i=1/Whe(t*Jhe),a=-1/(2*t),n;function n(u){return J6(u)?NaN:i*Xhe(a*H4r(u-r,2))}}z4r.exports=Yhe});var Y4r=s((iZe,J4r)=>{"use strict";var xhe=D(),X4r=F4r(),Zhe=W4r();xhe(X4r,"factory",Zhe);J4r.exports=X4r});var $4r=s((aZe,Z4r)=>{"use strict";var x4r=z();function $he(r,e){return x4r(r)||x4r(e)||e<=0?NaN:0}Z4r.exports=$he});var K4r=s((nZe,Q4r)=>{"use strict";var Qhe=$4r();Q4r.exports=Qhe});var t6r=s((sZe,e6r)=>{"use strict";var r6r=z();function Khe(r,e){return r6r(r)||r6r(e)||e<=0?NaN:e}e6r.exports=Khe});var a6r=s((uZe,i6r)=>{"use strict";var rqe=t6r();i6r.exports=rqe});var u6r=s((oZe,s6r)=>{"use strict";var n6r=z();function eqe(r,e){return n6r(r)||n6r(e)||e<=0?NaN:e*e}s6r.exports=eqe});var v6r=s((vZe,o6r)=>{"use strict";var tqe=u6r();o6r.exports=tqe});var c6r=s((fZe,f6r)=>{"use strict";var ke=Qr(),iqe=nfr(),aqe=ffr(),nqe=gfr(),sqe=Dfr(),uqe=o4r(),oqe=p4r(),vqe=h4r(),fqe=O4r(),cqe=R4r(),lqe=Y4r(),pqe=B4(),dqe=K4r(),gqe=a6r(),mqe=v6r();function yqe(r){return ke(r,"cdf",iqe),ke(r,"entropy",aqe),ke(r,"kurtosis",nqe),ke(r,"logcdf",sqe),ke(r,"logpdf",uqe),ke(r,"mean",oqe),ke(r,"median",vqe),ke(r,"mgf",fqe),ke(r,"mode",cqe),ke(r,"pdf",lqe),ke(r,"quantile",pqe),ke(r,"skewness",dqe),ke(r,"stdev",gqe),ke(r,"variance",mqe),r}f6r.exports=yqe});var p6r=s((cZe,l6r)=>{"use strict";var hqe=Qr(),qqe=c6r();function bqe(r){return hqe(r,"normal",qqe({})),r}l6r.exports=bqe});var g6r=s((lZe,d6r)=>{"use strict";var k0=Qr(),wqe=O3r(),Eqe=j3r().ndarray,Nqe=H3r().ndarray,Sqe=Q3r().ndarray,Oqe=p6r();function Aqe(r){return k0(r,"bartlettTest",wqe),k0(r,"cumax",Eqe),k0(r,"max",Nqe),k0(r,"mskmax",Sqe),k0(r,"dists",Oqe({})),r}d6r.exports=Aqe});var y6r=s((pZe,m6r)=>{"use strict";var _qe=Yr().isPrimitive,Tqe=V();function Iqe(r){return e;function e(t){if(!_qe(t))throw new TypeError(Tqe("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}m6r.exports=Iqe});var q6r=s((dZe,h6r)=>{"use strict";var Rqe=y6r();h6r.exports=Rqe});var N6r=s((gZe,E6r)=>{"use strict";var b6r=Yr().isPrimitive,w6r=V();function Lqe(r){return e;function e(t,i){if(!b6r(t))throw new TypeError(w6r("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!b6r(i))throw new TypeError(w6r("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}E6r.exports=Lqe});var O6r=s((mZe,S6r)=>{"use strict";var Pqe=N6r();S6r.exports=Pqe});var _6r=s((yZe,A6r)=>{"use strict";var Y6=Yr().isPrimitive,x6=V();function Fqe(r){return e;function e(t,i,a){if(!Y6(t))throw new TypeError(x6("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Y6(i))throw new TypeError(x6("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Y6(a))throw new TypeError(x6("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(a)));return r(t,i,a)}}A6r.exports=Fqe});var I6r=s((hZe,T6r)=>{"use strict";var jqe=_6r();T6r.exports=jqe});var L6r=s((qZe,R6r)=>{"use strict";var Z6=Qr(),Mqe=q6r(),Bqe=O6r(),kqe=I6r();function Cqe(r){return Z6(r,"s_o",Mqe),Z6(r,"ss_o",Bqe),Z6(r,"sss_o",kqe),r}R6r.exports=Cqe});var F6r=s((bZe,P6r)=>{"use strict";function Vqe(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}P6r.exports=Vqe});var N1=s((wZe,j6r)=>{"use strict";var Uqe=F6r();j6r.exports=Uqe});var B6r=s((EZe,M6r)=>{"use strict";var Gqe=N1(),Dqe=fa(),S1=qi(),Hqe=Ei(),zqe=/\s+/g,Wqe=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Xqe=/(?:\s|^)([^\s]+)(?=\s|$)/g,Jqe=/([a-z0-9])([A-Z])/g;function Yqe(r,e,t){return e=Dqe(e),t===0?e:Gqe(e)}function xqe(r){return r=S1(r,Wqe," "),r=S1(r,zqe," "),r=S1(r,Jqe,"$1 $2"),r=Hqe(r),S1(r,Xqe,Yqe)}M6r.exports=xqe});var C6r=s((NZe,k6r)=>{"use strict";var Zqe=B6r();k6r.exports=Zqe});var U6r=s((SZe,V6r)=>{"use strict";var $qe=Yr().isPrimitive,Qqe=V(),Kqe=C6r();function rbe(r){if(!$qe(r))throw new TypeError(Qqe("invalid argument. First argument must be a string. Value: `%s`.",r));return Kqe(r)}V6r.exports=rbe});var D6r=s((OZe,G6r)=>{"use strict";var ebe=U6r();G6r.exports=ebe});var z6r=s((AZe,H6r)=>{"use strict";var tbe=Yr().isPrimitive,ibe=V(),abe=N1();function nbe(r){if(!tbe(r))throw new TypeError(ibe("invalid argument. First argument must be a string. Value: `%s`.",r));return abe(r)}H6r.exports=nbe});var X6r=s((_Ze,W6r)=>{"use strict";var sbe=z6r();W6r.exports=sbe});var Y6r=s((TZe,J6r)=>{"use strict";function ube(r){return r.toUpperCase()}J6r.exports=ube});var Z6r=s((IZe,x6r)=>{"use strict";var obe=Y6r();x6r.exports=obe});var Q6r=s((RZe,$6r)=>{"use strict";var vbe=Z6r(),$6=qi(),fbe=Ei(),cbe=/\s+/g,lbe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,pbe=/([a-z0-9])([A-Z])/g;function dbe(r){return r=$6(r,lbe," "),r=$6(r,pbe,"$1 $2"),r=fbe(r),r=$6(r,cbe,"_"),vbe(r)}$6r.exports=dbe});var r5r=s((LZe,K6r)=>{"use strict";var gbe=Q6r();K6r.exports=gbe});var t5r=s((PZe,e5r)=>{"use strict";var mbe=Yr().isPrimitive,ybe=V(),hbe=r5r();function qbe(r){if(!mbe(r))throw new TypeError(ybe("invalid argument. Must provide a string. Value: `%s`.",r));return hbe(r)}e5r.exports=qbe});var a5r=s((FZe,i5r)=>{"use strict";var bbe=t5r();i5r.exports=bbe});var s5r=s((jZe,n5r)=>{"use strict";var wbe=fa(),Q6=qi(),Ebe=Ei(),Nbe=/\s+/g,Sbe=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Obe=/([a-z0-9])([A-Z])/g;function Abe(r){return r=Q6(r,Sbe," "),r=Q6(r,Obe,"$1 $2"),r=Ebe(r),r=Q6(r,Nbe,"-"),wbe(r)}n5r.exports=Abe});var o5r=s((MZe,u5r)=>{"use strict";var _be=s5r();u5r.exports=_be});var f5r=s((BZe,v5r)=>{"use strict";var Tbe=Yr().isPrimitive,Ibe=V(),Rbe=o5r();function Lbe(r){if(!Tbe(r))throw new TypeError(Ibe("invalid argument. Must provide a string. Value: `%s`.",r));return Rbe(r)}v5r.exports=Lbe});var l5r=s((kZe,c5r)=>{"use strict";var Pbe=f5r();c5r.exports=Pbe});var d5r=s((CZe,p5r)=>{"use strict";var Fbe=Yr().isPrimitive,jbe=V(),Mbe=fa();function Bbe(r){if(!Fbe(r))throw new TypeError(jbe("invalid argument. Must provide a string. Value: `%s`.",r));return Mbe(r)}p5r.exports=Bbe});var m5r=s((VZe,g5r)=>{"use strict";var kbe=d5r();g5r.exports=kbe});var h5r=s((UZe,y5r)=>{"use strict";var Cbe=N1(),Vbe=fa(),O1=qi(),Ube=Ei(),Gbe=/\s+/g,Dbe=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Hbe=/(?:\s|^)([^\s]+)(?=\s|$)/g,zbe=/([a-z0-9])([A-Z])/g;function Wbe(r,e){return Cbe(Vbe(e))}function Xbe(r){return r=O1(r,Dbe," "),r=O1(r,Gbe," "),r=O1(r,zbe,"$1 $2"),r=Ube(r),O1(r,Hbe,Wbe)}y5r.exports=Xbe});var b5r=s((GZe,q5r)=>{"use strict";var Jbe=h5r();q5r.exports=Jbe});var E5r=s((DZe,w5r)=>{"use strict";var Ybe=Yr().isPrimitive,xbe=V(),Zbe=b5r();function $be(r){if(!Ybe(r))throw new TypeError(xbe("invalid argument. First argument must be a string. Value: `%s`.",r));return Zbe(r)}w5r.exports=$be});var S5r=s((HZe,N5r)=>{"use strict";var Qbe=E5r();N5r.exports=Qbe});var A5r=s((zZe,O5r)=>{"use strict";var Kbe=fa(),K6=qi(),rwe=Ei(),ewe=/\s+/g,twe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,iwe=/([a-z0-9])([A-Z])/g;function awe(r){return r=K6(r,twe," "),r=K6(r,iwe,"$1 $2"),r=rwe(r),r=K6(r,ewe,"_"),Kbe(r)}O5r.exports=awe});var T5r=s((WZe,_5r)=>{"use strict";var nwe=A5r();_5r.exports=nwe});var R5r=s((XZe,I5r)=>{"use strict";var swe=Yr().isPrimitive,uwe=V(),owe=T5r();function vwe(r){if(!swe(r))throw new TypeError(uwe("invalid argument. Must provide a string. Value: `%s`.",r));return owe(r)}I5r.exports=vwe});var P5r=s((JZe,L5r)=>{"use strict";var fwe=R5r();L5r.exports=fwe});var M5r=s((YZe,j5r)=>{"use strict";var cwe=hr(),F5r=vr(),lwe=de().isPrimitive,pwe=Yr().isPrimitive,r5=V();function dwe(r,e){return cwe(e)?F5r(e,"flags")&&(r.flags=e.flags,!pwe(r.flags))?new TypeError(r5("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):F5r(e,"capture")&&(r.capture=e.capture,!lwe(r.capture))?new TypeError(r5("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(r5("invalid argument. Options argument must be an object. Value: `%s`.",e))}j5r.exports=dwe});var A1=s((xZe,k5r)=>{"use strict";var gwe=M5r(),B5r=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function mwe(r){var e,t;if(arguments.length>0){if(e={},t=gwe(e,r),t)throw t;return e.capture?new RegExp("("+B5r+")",e.flags):new RegExp(B5r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}k5r.exports=mwe});var V5r=s((ZZe,C5r)=>{"use strict";var ywe=A1(),hwe=ywe({capture:!0});C5r.exports=hwe});var G5r=s(($Ze,U5r)=>{"use strict";var qwe=A1(),bwe=qwe();U5r.exports=bwe});var z5r=s((QZe,H5r)=>{"use strict";var D5r=D(),e5=A1(),wwe=V5r(),Ewe=G5r();D5r(e5,"REGEXP",Ewe);D5r(e5,"REGEXP_CAPTURE",wwe);H5r.exports=e5});var X5r=s((KZe,W5r)=>{"use strict";var Nwe=z5r().REGEXP;function Swe(r){var e,t,i,a;for(e=!0,t="",a=0;a<r.length;a++)i=r.charAt(a),Nwe.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}W5r.exports=Swe});var Y5r=s((r$e,J5r)=>{"use strict";var Owe=X5r();J5r.exports=Owe});var Z5r=s((e$e,x5r)=>{"use strict";var Awe=Yr().isPrimitive,_we=V(),Twe=Y5r();function Iwe(r){if(!Awe(r))throw new TypeError(_we("invalid argument. Must provide a string. Value: `%s`.",r));return Twe(r)}x5r.exports=Iwe});var Q5r=s((t$e,$5r)=>{"use strict";var Rwe=Z5r();$5r.exports=Rwe});var rcr=s((i$e,K5r)=>{"use strict";function Lwe(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}K5r.exports=Lwe});var tcr=s((a$e,ecr)=>{"use strict";var Pwe=rcr();ecr.exports=Pwe});var acr=s((n$e,icr)=>{"use strict";var Fwe=Yr().isPrimitive,jwe=V(),Mwe=tcr();function Bwe(r){if(!Fwe(r))throw new TypeError(jwe("invalid argument. First argument must be a string. Value: `%s`.",r));return Mwe(r)}icr.exports=Bwe});var scr=s((s$e,ncr)=>{"use strict";var kwe=acr();ncr.exports=kwe});var ocr=s((u$e,ucr)=>{"use strict";var Cwe=Yr().isPrimitive,Vwe=V();function Uwe(r){if(!Cwe(r))throw new TypeError(Vwe("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}ucr.exports=Uwe});var fcr=s((o$e,vcr)=>{"use strict";var Gwe=ocr();vcr.exports=Gwe});var lcr=s((v$e,ccr)=>{"use strict";var yt=Qr(),Dwe=D6r(),Hwe=X6r(),zwe=a5r(),Wwe=l5r(),Xwe=m5r(),Jwe=S5r(),Ywe=P5r(),xwe=Q5r(),Zwe=scr(),$we=fcr();function Qwe(r){return yt(r,"camelcase",Dwe),yt(r,"capitalize",Hwe),yt(r,"constantcase",zwe),yt(r,"kebabcase",Wwe),yt(r,"lowercase",Xwe),yt(r,"pascalcase",Jwe),yt(r,"snakecase",Ywe),yt(r,"startcase",xwe),yt(r,"uncapitalize",Zwe),yt(r,"uppercase",$we),r}ccr.exports=Qwe});var dcr=s((f$e,pcr)=>{"use strict";var Kwe=Qr(),rEe=L6r(),eEe=lcr();function tEe(r){return Kwe(r,"tools",rEe({})),r=eEe(r),r}pcr.exports=tEe});var mcr=s((c$e,gcr)=>{"use strict";var ht=Qr(),iEe=Rh(),aEe=Ww(),nEe=rE(),sEe=$S(),uEe=fD(),oEe=zY(),vEe=t1r(),fEe=l1r(),cEe=g6r(),lEe=dcr();function pEe(){var r={};return ht(r,"array",iEe({})),ht(r,"assert",aEe({})),ht(r,"blas",nEe({})),ht(r,"datasets",sEe({})),ht(r,"math",uEe({})),ht(r,"ndarray",oEe({})),ht(r,"random",vEe({})),ht(r,"simulate",fEe({})),ht(r,"stats",cEe({})),ht(r,"string",lEe({})),r}gcr.exports=pEe});var hcr=s((l$e,ycr)=>{"use strict";var dEe=D(),t5=mcr();dEe(t5,"CACHED",t5());ycr.exports=t5});var mEe=s((p$e,qcr)=>{var gEe=hcr().CACHED;qcr.exports=gEe});return mEe();})();
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
