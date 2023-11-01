/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var kc=s((fle,jc)=>{"use strict";var k1r=typeof Object.defineProperty=="function"?Object.defineProperty:null;jc.exports=k1r});var Vc=s((cle,Cc)=>{"use strict";var C1r=kc();function V1r(){try{return C1r({},"x",{}),!0}catch{return!1}}Cc.exports=V1r});var Gc=s((lle,Uc)=>{"use strict";var U1r=Object.defineProperty;Uc.exports=U1r});var io=s((ple,xc)=>{"use strict";function G1r(r){return typeof r=="number"}xc.exports=G1r});var no=s((gle,Hc)=>{"use strict";function x1r(r){return r[0]==="-"}function Dc(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function D1r(r,e,t){var i=!1,n=e-r.length;return n<0||(x1r(r)&&(i=!0,r=r.substr(1)),r=t?r+Dc(n):Dc(n)+r,i&&(r="-"+r)),r}Hc.exports=D1r});var Jc=s((mle,Xc)=>{"use strict";var H1r=io(),Wc=no(),W1r=String.prototype.toLowerCase,zc=String.prototype.toUpperCase;function z1r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!H1r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Wc(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Wc(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===zc.call(r.specifier)?zc.call(t):W1r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Xc.exports=z1r});var $c=s((dle,Yc)=>{"use strict";function X1r(r){return typeof r=="string"}Yc.exports=X1r});var Kc=s((hle,Qc)=>{"use strict";var J1r=io(),Y1r=Math.abs,$1r=String.prototype.toLowerCase,Zc=String.prototype.toUpperCase,Ct=String.prototype.replace,Z1r=/e\+(\d)$/,Q1r=/e-(\d)$/,K1r=/^(\d+)$/,r2r=/^(\d+)e/,e2r=/\.0$/,t2r=/\.0*e/,i2r=/(\..*[^0])0*e/;function n2r(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!J1r(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Y1r(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Ct.call(t,i2r,"$1e"),t=Ct.call(t,t2r,"e"),t=Ct.call(t,e2r,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ct.call(t,Z1r,"e+0$1"),t=Ct.call(t,Q1r,"e-0$1"),r.alternate&&(t=Ct.call(t,K1r,"$1."),t=Ct.call(t,r2r,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Zc.call(r.specifier)?Zc.call(t):$1r.call(t),t}Qc.exports=n2r});var tl=s((qle,el)=>{"use strict";function rl(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function a2r(r,e,t){var i=e-r.length;return i<0||(r=t?r+rl(i):rl(i)+r),r}el.exports=a2r});var nl=s((yle,il)=>{"use strict";var s2r=Jc(),u2r=$c(),o2r=Kc(),v2r=tl(),f2r=no(),c2r=String.fromCharCode,ha=isNaN,l2r=Array.isArray;function p2r(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function g2r(r){var e,t,i,n,a,u,o,f,v;if(!l2r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],u2r(i))u+=i;else{if(e=i.precision!==void 0,i=p2r(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,ha(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,ha(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=s2r(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!ha(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ha(a)?String(i.arg):c2r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=o2r(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=f2r(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=v2r(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}il.exports=g2r});var sl=s((ble,al)=>{"use strict";var m2r=nl();al.exports=m2r});var ol=s((wle,ul)=>{"use strict";var qa=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function d2r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function h2r(r){var e,t,i,n;for(t=[],n=0,i=qa.exec(r);i;)e=r.slice(n,qa.lastIndex-i[0].length),e.length&&t.push(e),t.push(d2r(i)),n=qa.lastIndex,i=qa.exec(r);return e=r.slice(n),e.length&&t.push(e),t}ul.exports=h2r});var fl=s((Ele,vl)=>{"use strict";var q2r=ol();vl.exports=q2r});var ll=s((Nle,cl)=>{"use strict";function y2r(r){return typeof r=="string"}cl.exports=y2r});var ml=s((Ole,gl)=>{"use strict";var b2r=sl(),w2r=fl(),E2r=ll();function pl(r){var e,t,i;if(!E2r(r))throw new TypeError(pl("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=w2r(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return b2r.apply(null,t)}gl.exports=pl});var y=s((Sle,dl)=>{"use strict";var N2r=ml();dl.exports=N2r});var El=s((Ale,wl)=>{"use strict";var hl=y(),si=Object.prototype,ql=si.toString,yl=si.__defineGetter__,bl=si.__defineSetter__,O2r=si.__lookupGetter__,S2r=si.__lookupSetter__;function A2r(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||ql.call(r)==="[object Array]")throw new TypeError(hl("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||ql.call(t)==="[object Array]")throw new TypeError(hl("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(O2r.call(r,e)||S2r.call(r,e)?(i=r.__proto__,r.__proto__=si,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&yl&&yl.call(r,e,t.get),u&&bl&&bl.call(r,e,t.set),r}wl.exports=A2r});var $e=s((_le,Nl)=>{"use strict";var _2r=Vc(),T2r=Gc(),I2r=El(),ao;_2r()?ao=T2r:ao=I2r;Nl.exports=ao});var Sl=s((Tle,Ol)=>{"use strict";var L2r=$e();function R2r(r,e,t){L2r(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Ol.exports=R2r});var b=s((Ile,Al)=>{"use strict";var P2r=Sl();Al.exports=P2r});var Tl=s((Lle,_l)=>{"use strict";var F2r=$e();function M2r(r,e,t){F2r(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}_l.exports=M2r});var rr=s((Rle,Il)=>{"use strict";var B2r=Tl();Il.exports=B2r});var Rl=s((Ple,Ll)=>{"use strict";function j2r(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}Ll.exports=j2r});var ya=s((Fle,Pl)=>{"use strict";var k2r=Rl();Pl.exports=k2r});var Ml=s((Mle,Fl)=>{"use strict";function C2r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}Fl.exports=C2r});var ba=s((Ble,Bl)=>{"use strict";var V2r=Ml();Bl.exports=V2r});var kl=s((jle,jl)=>{"use strict";var U2r=ba();function G2r(r){return U2r(0,r)}jl.exports=G2r});var Ze=s((kle,Cl)=>{"use strict";var x2r=kl();Cl.exports=x2r});var Gl=s((Cle,Ul)=>{"use strict";var ln=ya(),D2r=Ze(),Vl=y();function H2r(r,e,t){var i,n,a,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(a=D2r(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(Vl("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",ln(e).join(", "),ln(t).join(", "),v));if(f===n)a[v]=1;else if(f===1)a[v]=0;else throw new Error(Vl("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",ln(e).join(", "),ln(t).join(", "),v))}return{ref:r,data:i,shape:ln(t),strides:a}}Ul.exports=H2r});var so=s((Vle,xl)=>{"use strict";var W2r=Gl();xl.exports=W2r});var Wl=s((Ule,Hl)=>{"use strict";var Dl=so();function z2r(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,H,K;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(F=Dl(r[0],e[0],N),A=F.data,O=F.strides,i=O[1],n=O[0],F=Dl(r[1],e[1],N),H=F.data,O=F.strides,a=O[1],u=O[0],K=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,g=0,d=A[p],m=H[h],q=K[c],v=0;v<o;v++)q[v]=t(d[l],m[g]),l+=i,g+=a;p+=n,h+=u}}Hl.exports=z2r});var uo=s((Gle,zl)=>{"use strict";var X2r=Wl();zl.exports=X2r});var Jl=s((xle,Xl)=>{"use strict";var oo=so();function J2r(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,H,K,G,Fr,Mr,or,kt,Bc;if(K=e[3],v=K[1],c=K[0],!(v<=0||c<=0))for(Fr=oo(r[0],e[0],K),Mr=Fr.data,G=Fr.strides,i=G[1],n=G[0],Fr=oo(r[1],e[1],K),or=Fr.data,G=Fr.strides,a=G[1],u=G[0],Fr=oo(r[2],e[2],K),kt=Fr.data,G=Fr.strides,o=G[1],f=G[0],Bc=r[3],h=0,m=0,N=0,p=0;p<c;p++){for(g=0,d=0,q=0,O=Mr[h],F=or[m],A=kt[N],H=Bc[p],l=0;l<v;l++)H[l]=t(O[g],F[d],A[q]),g+=i,d+=a,q+=o;h+=n,m+=u,N+=f}}Xl.exports=J2r});var vo=s((Dle,Yl)=>{"use strict";var Y2r=Jl();Yl.exports=Y2r});var Zl=s((Hle,$l)=>{"use strict";function $2r(r){var e,t,i,n,a,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}$l.exports=$2r});var wa=s((Wle,Ql)=>{"use strict";var Z2r=Zl();Ql.exports=Z2r});var r6=s((zle,Kl)=>{"use strict";var Q2r=ba();function K2r(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(Q2r(r,i));return t}Kl.exports=K2r});var Ea=s((Xle,e6)=>{"use strict";var r3r=r6();e6.exports=r3r});var i6=s((Jle,t6)=>{"use strict";function e3r(r,e,t){var i,n,a,u,o,f;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}t6.exports=e3r});var a6=s((Yle,n6)=>{"use strict";var t3r=i6();n6.exports=t3r});var u6=s(($le,s6)=>{"use strict";function i3r(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}s6.exports=i3r});var v6=s((Zle,o6)=>{"use strict";function n3r(r,e,t,i){var n,a,u,o,f,v;for(a=r.length,u=r[0].length,n=i,f=0;f<a;f++)for(o=r[f],v=0;v<u;v++)e[n]=o[v],n+=t;return e}o6.exports=n3r});var fo=s((Qle,c6)=>{"use strict";var a3r=b(),f6=u6(),s3r=v6();a3r(f6,"assign",s3r);c6.exports=f6});var p6=s((Kle,l6)=>{"use strict";var u3r=/./;l6.exports=u3r});var co=s((r6e,g6)=>{"use strict";function o3r(r){return typeof r=="boolean"}g6.exports=o3r});var d6=s((e6e,m6)=>{"use strict";function v3r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}m6.exports=v3r});var q6=s((t6e,h6)=>{"use strict";var f3r=d6();h6.exports=f3r});var b6=s((i6e,y6)=>{"use strict";var c3r=q6(),l3r=c3r();function p3r(){return l3r&&typeof Symbol.toStringTag=="symbol"}y6.exports=p3r});var ui=s((n6e,w6)=>{"use strict";var g3r=b6();w6.exports=g3r});var lo=s((a6e,E6)=>{"use strict";var m3r=Object.prototype.toString;E6.exports=m3r});var O6=s((s6e,N6)=>{"use strict";var d3r=lo();function h3r(r){return d3r.call(r)}N6.exports=h3r});var A6=s((u6e,S6)=>{"use strict";var q3r=Object.prototype.hasOwnProperty;function y3r(r,e){return r==null?!1:q3r.call(r,e)}S6.exports=y3r});var S=s((o6e,_6)=>{"use strict";var b3r=A6();_6.exports=b3r});var I6=s((v6e,T6)=>{"use strict";var w3r=typeof Symbol=="function"?Symbol:void 0;T6.exports=w3r});var po=s((f6e,L6)=>{"use strict";var E3r=I6();L6.exports=E3r});var F6=s((c6e,P6)=>{"use strict";var R6=po(),N3r=typeof R6=="function"?R6.toStringTag:"";P6.exports=N3r});var B6=s((l6e,M6)=>{"use strict";var O3r=S(),pn=F6(),go=lo();function S3r(r){var e,t,i;if(r==null)return go.call(r);t=r[pn],e=O3r(r,pn);try{r[pn]=void 0}catch{return go.call(r)}return i=go.call(r),e?r[pn]=t:delete r[pn],i}M6.exports=S3r});var er=s((p6e,j6)=>{"use strict";var A3r=ui(),_3r=O6(),T3r=B6(),mo;A3r()?mo=T3r:mo=_3r;j6.exports=mo});var C6=s((g6e,k6)=>{"use strict";var I3r=Boolean;k6.exports=I3r});var ho=s((m6e,V6)=>{"use strict";var L3r=C6();V6.exports=L3r});var G6=s((d6e,U6)=>{"use strict";var R3r=Boolean.prototype.toString;U6.exports=R3r});var D6=s((h6e,x6)=>{"use strict";var P3r=G6();function F3r(r){try{return P3r.call(r),!0}catch{return!1}}x6.exports=F3r});var qo=s((q6e,H6)=>{"use strict";var M3r=ui(),B3r=er(),j3r=ho(),k3r=D6(),C3r=M3r();function V3r(r){return typeof r=="object"?r instanceof j3r?!0:C3r?k3r(r):B3r(r)==="[object Boolean]":!1}H6.exports=V3r});var z6=s((y6e,W6)=>{"use strict";var U3r=co(),G3r=qo();function x3r(r){return U3r(r)||G3r(r)}W6.exports=x3r});var cr=s((b6e,J6)=>{"use strict";var X6=b(),yo=z6(),D3r=co(),H3r=qo();X6(yo,"isPrimitive",D3r);X6(yo,"isObject",H3r);J6.exports=yo});var $6=s((w6e,Y6)=>{"use strict";function W3r(){return new Function("return this;")()}Y6.exports=W3r});var Q6=s((E6e,Z6)=>{"use strict";var z3r=typeof self=="object"?self:null;Z6.exports=z3r});var r4=s((N6e,K6)=>{"use strict";var X3r=typeof window=="object"?window:null;K6.exports=X3r});var t4=s((O6e,e4)=>{"use strict";var J3r=typeof globalThis=="object"?globalThis:null;e4.exports=J3r});var bo=s((S6e,s4)=>{"use strict";var Y3r=cr().isPrimitive,$3r=y(),Z3r=$6(),i4=Q6(),n4=r4(),a4=t4();function Q3r(r){if(arguments.length){if(!Y3r(r))throw new TypeError($3r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Z3r()}if(a4)return a4;if(i4)return i4;if(n4)return n4;throw new Error("unexpected error. Unable to resolve global object.")}s4.exports=Q3r});var v4=s((A6e,o4)=>{"use strict";var K3r=bo(),u4=K3r(),rvr=u4.document&&u4.document.childNodes;o4.exports=rvr});var c4=s((_6e,f4)=>{"use strict";var evr=Int8Array;f4.exports=evr});var p4=s((T6e,l4)=>{"use strict";var tvr=p6(),ivr=v4(),nvr=c4();function avr(){return typeof tvr=="function"||typeof nvr=="object"||typeof ivr=="function"}l4.exports=avr});var wo=s((I6e,g4)=>{"use strict";function svr(){return/^\s*function\s*([^(]*)/i}g4.exports=svr});var d4=s((L6e,m4)=>{"use strict";var uvr=wo(),ovr=uvr();m4.exports=ovr});var Eo=s((R6e,q4)=>{"use strict";var vvr=b(),h4=wo(),fvr=d4();vvr(h4,"REGEXP",fvr);q4.exports=h4});var b4=s((P6e,y4)=>{"use strict";var cvr=er(),No;function lvr(r){return cvr(r)==="[object Array]"}Array.isArray?No=Array.isArray:No=lvr;y4.exports=No});var mr=s((F6e,w4)=>{"use strict";var pvr=b4();w4.exports=pvr});var N4=s((M6e,E4)=>{"use strict";var gvr=mr(),mvr=y();function dvr(r){if(typeof r!="function")throw new TypeError(mvr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!gvr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}E4.exports=dvr});var S4=s((B6e,O4)=>{"use strict";var hvr=N4();O4.exports=hvr});var _4=s((j6e,A4)=>{"use strict";function qvr(r){return r!==null&&typeof r=="object"}A4.exports=qvr});var So=s((k6e,T4)=>{"use strict";var yvr=b(),bvr=S4(),Oo=_4(),wvr=bvr(Oo);yvr(Oo,"isObjectLikeArray",wvr);T4.exports=Oo});var L4=s((C6e,I4)=>{"use strict";var Evr=So();function Nvr(r){return Evr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}I4.exports=Nvr});var Vt=s((V6e,R4)=>{"use strict";var Ovr=L4();R4.exports=Ovr});var F4=s((U6e,P4)=>{"use strict";var Svr=er(),Avr=Eo().REGEXP,_vr=Vt();function Tvr(r){var e,t,i;if(t=Svr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Avr.exec(i.toString()),e)return e[1]}return _vr(r)?"Buffer":t}P4.exports=Tvr});var le=s((G6e,M4)=>{"use strict";var Ivr=F4();M4.exports=Ivr});var j4=s((x6e,B4)=>{"use strict";var Lvr=le();function Rvr(r){var e;return r===null?"null":(e=typeof r,e==="object"?Lvr(r).toLowerCase():e)}B4.exports=Rvr});var C4=s((D6e,k4)=>{"use strict";var Pvr=le();function Fvr(r){return Pvr(r).toLowerCase()}k4.exports=Fvr});var Na=s((H6e,V4)=>{"use strict";var Mvr=p4(),Bvr=j4(),jvr=C4(),kvr=Mvr()?jvr:Bvr;V4.exports=kvr});var G4=s((W6e,U4)=>{"use strict";var Cvr=Na();function Vvr(r){return Cvr(r)==="function"}U4.exports=Vvr});var I=s((z6e,x4)=>{"use strict";var Uvr=G4();x4.exports=Uvr});var H4=s((X6e,D4)=>{"use strict";var Gvr=Math.floor;D4.exports=Gvr});var z=s((J6e,W4)=>{"use strict";var xvr=H4();W4.exports=xvr});var X4=s((Y6e,z4)=>{"use strict";var Dvr=z();function Hvr(r){return Dvr(r)===r}z4.exports=Hvr});var hr=s(($6e,J4)=>{"use strict";var Wvr=X4();J4.exports=Wvr});var $4=s((Z6e,Y4)=>{"use strict";var zvr=9007199254740991;Y4.exports=zvr});var Q4=s((Q6e,Z4)=>{"use strict";var Xvr=hr(),Jvr=$4();function Yvr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Xvr(r.length)&&r.length>=0&&r.length<=Jvr}Z4.exports=Yvr});var Vr=s((K6e,K4)=>{"use strict";var $vr=Q4();K4.exports=$vr});var e8=s((r4e,r8)=>{"use strict";var Zvr=I();function Qvr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Zvr(r.next)}r8.exports=Qvr});var i8=s((e4e,t8)=>{"use strict";var Kvr=e8();t8.exports=Kvr});var s8=s((t4e,a8)=>{"use strict";var n8="function";function rfr(r){return typeof r.get===n8&&typeof r.set===n8}a8.exports=rfr});var Ao=s((i4e,u8)=>{"use strict";var efr=s8();u8.exports=efr});var f8=s((n4e,v8)=>{"use strict";var o8={complex128:tfr,complex64:ifr,default:nfr};function tfr(r,e,t){r.set(t,e)}function ifr(r,e,t){r.set(t,e)}function nfr(r,e,t){r.set(t,e)}function afr(r){var e=o8[r];return typeof e=="function"?e:o8.default}v8.exports=afr});var _o=s((a4e,c8)=>{"use strict";var sfr=f8();c8.exports=sfr});var g8=s((s4e,p8)=>{"use strict";var l8={float64:ufr,float32:ofr,int32:vfr,int16:ffr,int8:cfr,uint32:lfr,uint16:pfr,uint8:gfr,uint8c:mfr,generic:dfr,default:hfr};function ufr(r,e,t){r[e]=t}function ofr(r,e,t){r[e]=t}function vfr(r,e,t){r[e]=t}function ffr(r,e,t){r[e]=t}function cfr(r,e,t){r[e]=t}function lfr(r,e,t){r[e]=t}function pfr(r,e,t){r[e]=t}function gfr(r,e,t){r[e]=t}function mfr(r,e,t){r[e]=t}function dfr(r,e,t){r[e]=t}function hfr(r,e,t){r[e]=t}function qfr(r){var e=l8[r];return typeof e=="function"?e:l8.default}p8.exports=qfr});var To=s((u4e,m8)=>{"use strict";var yfr=g8();m8.exports=yfr});var h8=s((o4e,d8)=>{"use strict";var bfr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};d8.exports=bfr});var y8=s((v4e,q8)=>{"use strict";var wfr=er(),Efr=typeof Float64Array=="function";function Nfr(r){return Efr&&r instanceof Float64Array||wfr(r)==="[object Float64Array]"}q8.exports=Nfr});var w8=s((f4e,b8)=>{"use strict";var Ofr=y8();b8.exports=Ofr});var N8=s((c4e,E8)=>{"use strict";var Sfr=typeof Float64Array=="function"?Float64Array:null;E8.exports=Sfr});var A8=s((l4e,S8)=>{"use strict";var Afr=w8(),O8=N8();function _fr(){var r,e;if(typeof O8!="function")return!1;try{e=new O8([1,3.14,-3.14,NaN]),r=Afr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}S8.exports=_fr});var Io=s((p4e,_8)=>{"use strict";var Tfr=A8();_8.exports=Tfr});var I8=s((g4e,T8)=>{"use strict";var Ifr=typeof Float64Array=="function"?Float64Array:void 0;T8.exports=Ifr});var R8=s((m4e,L8)=>{"use strict";function Lfr(){throw new Error("not implemented")}L8.exports=Lfr});var lr=s((d4e,P8)=>{"use strict";var Rfr=Io(),Pfr=I8(),Ffr=R8(),Lo;Rfr()?Lo=Pfr:Lo=Ffr;P8.exports=Lo});var M8=s((h4e,F8)=>{"use strict";var Mfr=er(),Bfr=typeof Float32Array=="function";function jfr(r){return Bfr&&r instanceof Float32Array||Mfr(r)==="[object Float32Array]"}F8.exports=jfr});var j8=s((q4e,B8)=>{"use strict";var kfr=M8();B8.exports=kfr});var L=s((y4e,k8)=>{"use strict";var Cfr=Number.POSITIVE_INFINITY;k8.exports=Cfr});var V8=s((b4e,C8)=>{"use strict";var Vfr=typeof Float32Array=="function"?Float32Array:null;C8.exports=Vfr});var x8=s((w4e,G8)=>{"use strict";var Ufr=j8(),Gfr=L(),U8=V8();function xfr(){var r,e;if(typeof U8!="function")return!1;try{e=new U8([1,3.14,-3.14,5e40]),r=Ufr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===Gfr}catch{r=!1}return r}G8.exports=xfr});var H8=s((E4e,D8)=>{"use strict";var Dfr=x8();D8.exports=Dfr});var z8=s((N4e,W8)=>{"use strict";var Hfr=typeof Float32Array=="function"?Float32Array:void 0;W8.exports=Hfr});var J8=s((O4e,X8)=>{"use strict";function Wfr(){throw new Error("not implemented")}X8.exports=Wfr});var Zr=s((S4e,Y8)=>{"use strict";var zfr=H8(),Xfr=z8(),Jfr=J8(),Ro;zfr()?Ro=Xfr:Ro=Jfr;Y8.exports=Ro});var Z8=s((A4e,$8)=>{"use strict";var Yfr=er(),$fr=typeof Uint32Array=="function";function Zfr(r){return $fr&&r instanceof Uint32Array||Yfr(r)==="[object Uint32Array]"}$8.exports=Zfr});var pe=s((_4e,Q8)=>{"use strict";var Qfr=Z8();Q8.exports=Qfr});var oi=s((T4e,K8)=>{"use strict";var Kfr=4294967295;K8.exports=Kfr});var e5=s((I4e,r5)=>{"use strict";var rcr=typeof Uint32Array=="function"?Uint32Array:null;r5.exports=rcr});var n5=s((L4e,i5)=>{"use strict";var ecr=pe(),Po=oi(),t5=e5();function tcr(){var r,e;if(typeof t5!="function")return!1;try{e=[1,3.14,-3.14,Po+1,Po+2],e=new t5(e),r=ecr(e)&&e[0]===1&&e[1]===3&&e[2]===Po-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}i5.exports=tcr});var s5=s((R4e,a5)=>{"use strict";var icr=n5();a5.exports=icr});var o5=s((P4e,u5)=>{"use strict";var ncr=typeof Uint32Array=="function"?Uint32Array:void 0;u5.exports=ncr});var f5=s((F4e,v5)=>{"use strict";function acr(){throw new Error("not implemented")}v5.exports=acr});var pr=s((M4e,c5)=>{"use strict";var scr=s5(),ucr=o5(),ocr=f5(),Fo;scr()?Fo=ucr:Fo=ocr;c5.exports=Fo});var p5=s((B4e,l5)=>{"use strict";var vcr=er(),fcr=typeof Int32Array=="function";function ccr(r){return fcr&&r instanceof Int32Array||vcr(r)==="[object Int32Array]"}l5.exports=ccr});var Oa=s((j4e,g5)=>{"use strict";var lcr=p5();g5.exports=lcr});var vi=s((k4e,m5)=>{"use strict";var pcr=2147483647;m5.exports=pcr});var h5=s((C4e,d5)=>{"use strict";var gcr=-2147483648;d5.exports=gcr});var y5=s((V4e,q5)=>{"use strict";var mcr=typeof Int32Array=="function"?Int32Array:null;q5.exports=mcr});var E5=s((U4e,w5)=>{"use strict";var dcr=Oa(),hcr=vi(),qcr=h5(),b5=y5();function ycr(){var r,e;if(typeof b5!="function")return!1;try{e=new b5([1,3.14,-3.14,hcr+1]),r=dcr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===qcr}catch{r=!1}return r}w5.exports=ycr});var O5=s((G4e,N5)=>{"use strict";var bcr=E5();N5.exports=bcr});var A5=s((x4e,S5)=>{"use strict";var wcr=typeof Int32Array=="function"?Int32Array:void 0;S5.exports=wcr});var T5=s((D4e,_5)=>{"use strict";function Ecr(){throw new Error("not implemented")}_5.exports=Ecr});var Qe=s((H4e,I5)=>{"use strict";var Ncr=O5(),Ocr=A5(),Scr=T5(),Mo;Ncr()?Mo=Ocr:Mo=Scr;I5.exports=Mo});var R5=s((W4e,L5)=>{"use strict";var Acr=er(),_cr=typeof Uint16Array=="function";function Tcr(r){return _cr&&r instanceof Uint16Array||Acr(r)==="[object Uint16Array]"}L5.exports=Tcr});var F5=s((z4e,P5)=>{"use strict";var Icr=R5();P5.exports=Icr});var B5=s((X4e,M5)=>{"use strict";var Lcr=65535;M5.exports=Lcr});var k5=s((J4e,j5)=>{"use strict";var Rcr=typeof Uint16Array=="function"?Uint16Array:null;j5.exports=Rcr});var U5=s((Y4e,V5)=>{"use strict";var Pcr=F5(),Bo=B5(),C5=k5();function Fcr(){var r,e;if(typeof C5!="function")return!1;try{e=[1,3.14,-3.14,Bo+1,Bo+2],e=new C5(e),r=Pcr(e)&&e[0]===1&&e[1]===3&&e[2]===Bo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}V5.exports=Fcr});var x5=s(($4e,G5)=>{"use strict";var Mcr=U5();G5.exports=Mcr});var H5=s((Z4e,D5)=>{"use strict";var Bcr=typeof Uint16Array=="function"?Uint16Array:void 0;D5.exports=Bcr});var z5=s((Q4e,W5)=>{"use strict";function jcr(){throw new Error("not implemented")}W5.exports=jcr});var Ut=s((K4e,X5)=>{"use strict";var kcr=x5(),Ccr=H5(),Vcr=z5(),jo;kcr()?jo=Ccr:jo=Vcr;X5.exports=jo});var Y5=s((r8e,J5)=>{"use strict";var Ucr=er(),Gcr=typeof Int16Array=="function";function xcr(r){return Gcr&&r instanceof Int16Array||Ucr(r)==="[object Int16Array]"}J5.exports=xcr});var Z5=s((e8e,$5)=>{"use strict";var Dcr=Y5();$5.exports=Dcr});var K5=s((t8e,Q5)=>{"use strict";var Hcr=32767;Q5.exports=Hcr});var ep=s((i8e,rp)=>{"use strict";var Wcr=-32768;rp.exports=Wcr});var ip=s((n8e,tp)=>{"use strict";var zcr=typeof Int16Array=="function"?Int16Array:null;tp.exports=zcr});var sp=s((a8e,ap)=>{"use strict";var Xcr=Z5(),Jcr=K5(),Ycr=ep(),np=ip();function $cr(){var r,e;if(typeof np!="function")return!1;try{e=new np([1,3.14,-3.14,Jcr+1]),r=Xcr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Ycr}catch{r=!1}return r}ap.exports=$cr});var op=s((s8e,up)=>{"use strict";var Zcr=sp();up.exports=Zcr});var fp=s((u8e,vp)=>{"use strict";var Qcr=typeof Int16Array=="function"?Int16Array:void 0;vp.exports=Qcr});var lp=s((o8e,cp)=>{"use strict";function Kcr(){throw new Error("not implemented")}cp.exports=Kcr});var fi=s((v8e,pp)=>{"use strict";var rlr=op(),elr=fp(),tlr=lp(),ko;rlr()?ko=elr:ko=tlr;pp.exports=ko});var mp=s((f8e,gp)=>{"use strict";var ilr=er(),nlr=typeof Uint8Array=="function";function alr(r){return nlr&&r instanceof Uint8Array||ilr(r)==="[object Uint8Array]"}gp.exports=alr});var hp=s((c8e,dp)=>{"use strict";var slr=mp();dp.exports=slr});var yp=s((l8e,qp)=>{"use strict";var ulr=255;qp.exports=ulr});var wp=s((p8e,bp)=>{"use strict";var olr=typeof Uint8Array=="function"?Uint8Array:null;bp.exports=olr});var Op=s((g8e,Np)=>{"use strict";var vlr=hp(),Co=yp(),Ep=wp();function flr(){var r,e;if(typeof Ep!="function")return!1;try{e=[1,3.14,-3.14,Co+1,Co+2],e=new Ep(e),r=vlr(e)&&e[0]===1&&e[1]===3&&e[2]===Co-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Np.exports=flr});var Ap=s((m8e,Sp)=>{"use strict";var clr=Op();Sp.exports=clr});var Tp=s((d8e,_p)=>{"use strict";var llr=typeof Uint8Array=="function"?Uint8Array:void 0;_p.exports=llr});var Lp=s((h8e,Ip)=>{"use strict";function plr(){throw new Error("not implemented")}Ip.exports=plr});var Qr=s((q8e,Rp)=>{"use strict";var glr=Ap(),mlr=Tp(),dlr=Lp(),Vo;glr()?Vo=mlr:Vo=dlr;Rp.exports=Vo});var Fp=s((y8e,Pp)=>{"use strict";var hlr=er(),qlr=typeof Uint8ClampedArray=="function";function ylr(r){return qlr&&r instanceof Uint8ClampedArray||hlr(r)==="[object Uint8ClampedArray]"}Pp.exports=ylr});var Bp=s((b8e,Mp)=>{"use strict";var blr=Fp();Mp.exports=blr});var kp=s((w8e,jp)=>{"use strict";var wlr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;jp.exports=wlr});var Up=s((E8e,Vp)=>{"use strict";var Elr=Bp(),Cp=kp();function Nlr(){var r,e;if(typeof Cp!="function")return!1;try{e=new Cp([-1,0,1,3.14,4.99,255,256]),r=Elr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Vp.exports=Nlr});var xp=s((N8e,Gp)=>{"use strict";var Olr=Up();Gp.exports=Olr});var Hp=s((O8e,Dp)=>{"use strict";var Slr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Dp.exports=Slr});var zp=s((S8e,Wp)=>{"use strict";function Alr(){throw new Error("not implemented")}Wp.exports=Alr});var ci=s((A8e,Xp)=>{"use strict";var _lr=xp(),Tlr=Hp(),Ilr=zp(),Uo;_lr()?Uo=Tlr:Uo=Ilr;Xp.exports=Uo});var Yp=s((_8e,Jp)=>{"use strict";var Llr=er(),Rlr=typeof Int8Array=="function";function Plr(r){return Rlr&&r instanceof Int8Array||Llr(r)==="[object Int8Array]"}Jp.exports=Plr});var Zp=s((T8e,$p)=>{"use strict";var Flr=Yp();$p.exports=Flr});var Kp=s((I8e,Qp)=>{"use strict";var Mlr=127;Qp.exports=Mlr});var e7=s((L8e,r7)=>{"use strict";var Blr=-128;r7.exports=Blr});var i7=s((R8e,t7)=>{"use strict";var jlr=typeof Int8Array=="function"?Int8Array:null;t7.exports=jlr});var s7=s((P8e,a7)=>{"use strict";var klr=Zp(),Clr=Kp(),Vlr=e7(),n7=i7();function Ulr(){var r,e;if(typeof n7!="function")return!1;try{e=new n7([1,3.14,-3.14,Clr+1]),r=klr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Vlr}catch{r=!1}return r}a7.exports=Ulr});var o7=s((F8e,u7)=>{"use strict";var Glr=s7();u7.exports=Glr});var f7=s((M8e,v7)=>{"use strict";var xlr=typeof Int8Array=="function"?Int8Array:void 0;v7.exports=xlr});var l7=s((B8e,c7)=>{"use strict";function Dlr(){throw new Error("not implemented")}c7.exports=Dlr});var li=s((j8e,p7)=>{"use strict";var Hlr=o7(),Wlr=f7(),zlr=l7(),Go;Hlr()?Go=Wlr:Go=zlr;p7.exports=Go});var xo=s((k8e,g7)=>{"use strict";function Xlr(r){return typeof r=="number"}g7.exports=Xlr});var d7=s((C8e,m7)=>{"use strict";m7.exports=Number});var Sa=s((V8e,h7)=>{"use strict";var Jlr=d7();h7.exports=Jlr});var y7=s((U8e,q7)=>{"use strict";var Ylr=Sa(),$lr=Ylr.prototype.toString;q7.exports=$lr});var w7=s((G8e,b7)=>{"use strict";var Zlr=y7();function Qlr(r){try{return Zlr.call(r),!0}catch{return!1}}b7.exports=Qlr});var Do=s((x8e,E7)=>{"use strict";var Klr=ui(),r6r=er(),e6r=Sa(),t6r=w7(),i6r=Klr();function n6r(r){return typeof r=="object"?r instanceof e6r?!0:i6r?t6r(r):r6r(r)==="[object Number]":!1}E7.exports=n6r});var O7=s((D8e,N7)=>{"use strict";var a6r=xo(),s6r=Do();function u6r(r){return a6r(r)||s6r(r)}N7.exports=u6r});var k=s((H8e,A7)=>{"use strict";var S7=b(),Ho=O7(),o6r=xo(),v6r=Do();S7(Ho,"isPrimitive",o6r);S7(Ho,"isObject",v6r);A7.exports=Ho});var V=s((W8e,_7)=>{"use strict";var f6r=Sa(),c6r=f6r.NEGATIVE_INFINITY;_7.exports=c6r});var Wo=s((z8e,T7)=>{"use strict";var l6r=L(),p6r=V(),g6r=hr();function m6r(r){return r<l6r&&r>p6r&&g6r(r)}T7.exports=m6r});var zo=s((X8e,I7)=>{"use strict";var d6r=k().isPrimitive,h6r=Wo();function q6r(r){return d6r(r)&&h6r(r)}I7.exports=q6r});var Xo=s((J8e,L7)=>{"use strict";var y6r=k().isObject,b6r=Wo();function w6r(r){return y6r(r)&&b6r(r.valueOf())}L7.exports=w6r});var P7=s((Y8e,R7)=>{"use strict";var E6r=zo(),N6r=Xo();function O6r(r){return E6r(r)||N6r(r)}R7.exports=O6r});var dr=s(($8e,M7)=>{"use strict";var F7=b(),Jo=P7(),S6r=zo(),A6r=Xo();F7(Jo,"isPrimitive",S6r);F7(Jo,"isObject",A6r);M7.exports=Jo});var Yo=s((Z8e,B7)=>{"use strict";var _6r=dr().isPrimitive;function T6r(r){return _6r(r)&&r>=0}B7.exports=T6r});var $o=s((Q8e,j7)=>{"use strict";var I6r=dr().isObject;function L6r(r){return I6r(r)&&r.valueOf()>=0}j7.exports=L6r});var C7=s((K8e,k7)=>{"use strict";var R6r=Yo(),P6r=$o();function F6r(r){return R6r(r)||P6r(r)}k7.exports=F6r});var qr=s((r5e,U7)=>{"use strict";var V7=b(),Zo=C7(),M6r=Yo(),B6r=$o();V7(Zo,"isPrimitive",M6r);V7(Zo,"isObject",B6r);U7.exports=Zo});var Qo=s((e5e,G7)=>{"use strict";var j6r=4294967295;G7.exports=j6r});var D7=s((t5e,x7)=>{"use strict";var k6r=hr(),C6r=Qo();function V6r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&k6r(r.length)&&r.length>=0&&r.length<=C6r}x7.exports=V6r});var Gt=s((i5e,H7)=>{"use strict";var U6r=D7();H7.exports=U6r});var z7=s((n5e,W7)=>{"use strict";var G6r=er(),x6r=typeof ArrayBuffer=="function";function D6r(r){return x6r&&r instanceof ArrayBuffer||G6r(r)==="[object ArrayBuffer]"}W7.exports=D6r});var Aa=s((a5e,X7)=>{"use strict";var H6r=z7();X7.exports=H6r});var Y7=s((s5e,J7)=>{"use strict";var W6r=mr();function z6r(r){return typeof r=="object"&&r!==null&&!W6r(r)}J7.exports=z6r});var _a=s((u5e,$7)=>{"use strict";var X6r=Y7();$7.exports=X6r});var Q7=s((o5e,Z7)=>{"use strict";function J6r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}Z7.exports=J6r});var r9=s((v5e,K7)=>{"use strict";function Y6r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}K7.exports=Y6r});var a9=s((f5e,n9)=>{"use strict";var e9=k().isPrimitive,t9=$e(),gn=b(),i9=y(),$6r=Q7(),Z6r=r9();function xt(r,e){if(!(this instanceof xt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!e9(r))throw new TypeError(i9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!e9(e))throw new TypeError(i9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return t9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),t9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}gn(xt,"BYTES_PER_ELEMENT",8);gn(xt.prototype,"BYTES_PER_ELEMENT",8);gn(xt.prototype,"byteLength",16);gn(xt.prototype,"toString",$6r);gn(xt.prototype,"toJSON",Z6r);n9.exports=xt});var pi=s((c5e,s9)=>{"use strict";var Q6r=a9();s9.exports=Q6r});var o9=s((l5e,u9)=>{"use strict";var K6r=typeof Math.fround=="function"?Math.fround:null;u9.exports=K6r});var c9=s((p5e,f9)=>{"use strict";var r4r=Zr(),v9=new r4r(1);function e4r(r){return v9[0]=r,v9[0]}f9.exports=e4r});var g9=s((g5e,p9)=>{"use strict";var l9=o9(),t4r=c9(),Ko;typeof l9=="function"?Ko=l9:Ko=t4r;p9.exports=Ko});var d9=s((m5e,m9)=>{"use strict";function i4r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}m9.exports=i4r});var q9=s((d5e,h9)=>{"use strict";function n4r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}h9.exports=n4r});var O9=s((h5e,N9)=>{"use strict";var y9=k().isPrimitive,b9=$e(),mn=b(),w9=g9(),E9=y(),a4r=d9(),s4r=q9();function Dt(r,e){if(!(this instanceof Dt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!y9(r))throw new TypeError(E9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!y9(e))throw new TypeError(E9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return b9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:w9(r)}),b9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:w9(e)}),this}mn(Dt,"BYTES_PER_ELEMENT",4);mn(Dt.prototype,"BYTES_PER_ELEMENT",4);mn(Dt.prototype,"byteLength",8);mn(Dt.prototype,"toString",a4r);mn(Dt.prototype,"toJSON",s4r);N9.exports=Dt});var gi=s((q5e,S9)=>{"use strict";var u4r=O9();S9.exports=u4r});var _9=s((y5e,A9)=>{"use strict";var o4r=pi(),v4r=gi();function f4r(r){return r instanceof o4r||r instanceof v4r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}A9.exports=f4r});var Wr=s((b5e,T9)=>{"use strict";var c4r=_9();T9.exports=c4r});var L9=s((w5e,I9)=>{"use strict";var l4r=hr();function p4r(r){return l4r(r/2)}I9.exports=p4r});var Ta=s((E5e,R9)=>{"use strict";var g4r=L9();R9.exports=g4r});var F9=s((N5e,P9)=>{"use strict";var m4r=S(),Ia=po();function d4r(){return typeof Ia=="function"&&typeof Ia("foo")=="symbol"&&m4r(Ia,"iterator")&&typeof Ia.iterator=="symbol"}P9.exports=d4r});var La=s((O5e,M9)=>{"use strict";var h4r=F9();M9.exports=h4r});var j9=s((S5e,B9)=>{"use strict";var q4r=La(),y4r=q4r()?Symbol.iterator:null;B9.exports=y4r});var dn=s((A5e,k9)=>{"use strict";var b4r=j9();k9.exports=b4r});var V9=s((_5e,C9)=>{"use strict";var w4r=$e();function E4r(r,e,t){w4r(r,e,{configurable:!1,enumerable:!1,get:t})}C9.exports=E4r});var R=s((T5e,U9)=>{"use strict";var N4r=V9();U9.exports=N4r});var x9=s((I5e,G9)=>{"use strict";function O4r(r){return r.re}G9.exports=O4r});var Ke=s((L5e,D9)=>{"use strict";var S4r=x9();D9.exports=S4r});var W9=s((R5e,H9)=>{"use strict";function A4r(r){return r.im}H9.exports=A4r});var rt=s((P5e,z9)=>{"use strict";var _4r=W9();z9.exports=_4r});var J9=s((F5e,X9)=>{"use strict";var T4r=Zr();function I4r(r,e){return new T4r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}X9.exports=I4r});var mi=s((M5e,Y9)=>{"use strict";var L4r=J9();Y9.exports=L4r});var Z9=s((B5e,$9)=>{"use strict";var R4r=lr();function P4r(r,e){return new R4r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}$9.exports=P4r});var di=s((j5e,Q9)=>{"use strict";var F4r=Z9();Q9.exports=F4r});var eg=s((k5e,rg)=>{"use strict";var K9={float64:M4r,float32:B4r,int32:j4r,int16:k4r,int8:C4r,uint32:V4r,uint16:U4r,uint8:G4r,uint8c:x4r,generic:D4r,default:H4r};function M4r(r,e){return r[e]}function B4r(r,e){return r[e]}function j4r(r,e){return r[e]}function k4r(r,e){return r[e]}function C4r(r,e){return r[e]}function V4r(r,e){return r[e]}function U4r(r,e){return r[e]}function G4r(r,e){return r[e]}function x4r(r,e){return r[e]}function D4r(r,e){return r[e]}function H4r(r,e){return r[e]}function W4r(r){var e=K9[r];return typeof e=="function"?e:K9.default}rg.exports=W4r});var Ra=s((C5e,tg)=>{"use strict";var z4r=eg();tg.exports=z4r});var ag=s((V5e,ng)=>{"use strict";var ig={complex128:X4r,complex64:J4r,default:Y4r};function X4r(r,e){return r.get(e)}function J4r(r,e){return r.get(e)}function Y4r(r,e){return r.get(e)}function $4r(r){var e=ig[r];return typeof e=="function"?e:ig.default}ng.exports=$4r});var Pa=s((U5e,sg)=>{"use strict";var Z4r=ag();sg.exports=Z4r});var og=s((G5e,ug)=>{"use strict";var Q4r=Gt(),K4r=Wr(),r8r=Ke(),e8r=rt(),t8r=y();function i8r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Q4r(i)&&i.length>=2)e.push(i[0],i[1]);else if(K4r(i))e.push(r8r(i),e8r(i));else return new TypeError(t8r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}ug.exports=i8r});var fg=s((x5e,vg)=>{"use strict";var n8r=Gt(),a8r=Wr(),s8r=Ke(),u8r=rt(),o8r=y();function v8r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),n8r(a)&&a.length>=2)i.push(a[0],a[1]);else if(a8r(a))i.push(s8r(a),u8r(a));else return new TypeError(o8r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}vg.exports=v8r});var lg=s((D5e,cg)=>{"use strict";var f8r=Wr(),c8r=Ke(),l8r=rt();function p8r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!f8r(i))return null;r[a]=c8r(i),r[a+1]=l8r(i),a+=2}return r}cg.exports=p8r});var wg=s((H5e,bg)=>{"use strict";var hn=qr().isPrimitive,pg=Gt(),e1=Vr(),gg=Aa(),mg=_a(),g8r=mr(),Ht=I(),hi=Wr(),Fa=Ta(),r1=hr(),m8r=La(),qi=dn(),yr=b(),ja=R(),Ur=Zr(),dg=gi(),$=y(),Ma=Ke(),Ba=rt(),d8r=mi(),h8r=di(),q8r=Ra(),y8r=Pa(),hg=og(),b8r=fg(),w8r=lg(),Br=Ur.BYTES_PER_ELEMENT*2,qg=m8r();function yi(r){return r instanceof tr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function yg(r){return r===tr||r.name==="Complex128Array"}function E8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Br}function N8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Br*2}function tr(){var r,e,t,i;if(e=arguments.length,!(this instanceof tr))return e===0?new tr:e===1?new tr(arguments[0]):e===2?new tr(arguments[0],arguments[1]):new tr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ur(0);else if(e===1)if(hn(arguments[0]))t=new Ur(arguments[0]*2);else if(e1(arguments[0]))if(t=arguments[0],i=t.length,i&&g8r(t)&&hi(t[0])){if(t=w8r(new Ur(i*2),t),t===null){if(!Fa(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(arguments[0])}}else{if(E8r(t))t=d8r(t,0);else if(N8r(t))t=h8r(t,0);else if(!Fa(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(t)}else if(gg(arguments[0])){if(t=arguments[0],!r1(t.byteLength/Br))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Br,t.byteLength));t=new Ur(t)}else if(mg(arguments[0])){if(t=arguments[0],qg===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ht(t[qi]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[qi](),!Ht(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=hg(t),t instanceof Error)throw t;t=new Ur(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!gg(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!hn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!r1(r/Br))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Br,r));if(e===2){if(i=t.byteLength-r,!r1(i/Br))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Br,i));t=new Ur(t,r)}else{if(i=arguments[2],!hn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Br>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Br));t=new Ur(t,r,i*2)}}return yr(this,"_buffer",t),yr(this,"_length",t.length/2),this}yr(tr,"BYTES_PER_ELEMENT",Br);yr(tr,"name","Complex64Array");yr(tr,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Ht(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Ht(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(yi(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),hi(l))u[g]=Ma(l),u[g+1]=Ba(l);else if(pg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(e1(e)){if(n){for(v=e.length,e.get&&e.set?f=y8r("default"):f=q8r("default"),p=0;p<v;p++)if(!hi(f(e,p))){c=!0;break}if(c){if(!Fa(v))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),hi(l))u[g]=Ma(l),u[g+1]=Ba(l);else if(pg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(mg(e)&&qg&&Ht(e[qi])){if(u=e[qi](),!Ht(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=b8r(u,n,t):o=hg(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});yr(tr,"of",function(){var e,t;if(!Ht(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ja(tr.prototype,"buffer",function(){return this._buffer.buffer});ja(tr.prototype,"byteLength",function(){return this._buffer.byteLength});ja(tr.prototype,"byteOffset",function(){return this._buffer.byteOffset});yr(tr.prototype,"BYTES_PER_ELEMENT",tr.BYTES_PER_ELEMENT);yr(tr.prototype,"copyWithin",function(e,t){if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});yr(tr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},yr(i,"next",f),yr(i,"return",v),qi&&yr(i,qi,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new dg(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});yr(tr.prototype,"get",function(e){var t;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new dg(t[e],t[e+1])});ja(tr.prototype,"length",function(){return this._length});yr(tr.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!hn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(hi(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ma(e),n[i+1]=Ba(e);return}if(yi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Br,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(e1(e)){for(o=e.length,v=0;v<o;v++)if(!hi(e[v])){u=!0;break}if(u){if(!Fa(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Br,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Ma(f),n[i+1]=Ba(f),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});bg.exports=tr});var bi=s((W5e,Eg)=>{"use strict";var O8r=wg();Eg.exports=O8r});var Og=s((z5e,Ng)=>{"use strict";function S8r(r){return r.re}Ng.exports=S8r});var Kr=s((X5e,Sg)=>{"use strict";var A8r=Og();Sg.exports=A8r});var _g=s((J5e,Ag)=>{"use strict";function _8r(r){return r.im}Ag.exports=_8r});var re=s((Y5e,Tg)=>{"use strict";var T8r=_g();Tg.exports=T8r});var Lg=s(($5e,Ig)=>{"use strict";var I8r=Gt(),L8r=Wr(),R8r=y(),P8r=Kr(),F8r=re();function M8r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,I8r(i)&&i.length>=2)e.push(i[0],i[1]);else if(L8r(i))e.push(P8r(i),F8r(i));else return new TypeError(R8r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Ig.exports=M8r});var Pg=s((Z5e,Rg)=>{"use strict";var B8r=Gt(),j8r=Wr(),k8r=y(),C8r=Kr(),V8r=re();function U8r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),B8r(a)&&a.length>=2)i.push(a[0],a[1]);else if(j8r(a))i.push(C8r(a),V8r(a));else return new TypeError(k8r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}Rg.exports=U8r});var Mg=s((Q5e,Fg)=>{"use strict";var G8r=Wr(),x8r=Kr(),D8r=re();function H8r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!G8r(i))return null;r[a]=x8r(i),r[a+1]=D8r(i),a+=2}return r}Fg.exports=H8r});var Dg=s((K5e,xg)=>{"use strict";var qn=qr().isPrimitive,Bg=Gt(),i1=Vr(),jg=Aa(),kg=_a(),W8r=mr(),Wt=I(),wi=Wr(),ka=Ta(),t1=hr(),z8r=La(),Ei=dn(),br=b(),Ua=R(),Gr=lr(),Cg=pi(),Ca=Kr(),Va=re(),X8r=mi(),J8r=di(),Y8r=Ra(),$8r=Pa(),Z=y(),Vg=Lg(),Z8r=Pg(),Q8r=Mg(),jr=Gr.BYTES_PER_ELEMENT*2,Ug=z8r();function Ni(r){return r instanceof ir||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Gg(r){return r===ir||r.name==="Complex64Array"}function K8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===jr/2}function r5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===jr}function ir(){var r,e,t,i;if(e=arguments.length,!(this instanceof ir))return e===0?new ir:e===1?new ir(arguments[0]):e===2?new ir(arguments[0],arguments[1]):new ir(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Gr(0);else if(e===1)if(qn(arguments[0]))t=new Gr(arguments[0]*2);else if(i1(arguments[0]))if(t=arguments[0],i=t.length,i&&W8r(t)&&wi(t[0])){if(t=Q8r(new Gr(i*2),t),t===null){if(!ka(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Gr(arguments[0])}}else{if(K8r(t))t=X8r(t,0);else if(r5r(t))t=J8r(t,0);else if(!ka(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Gr(t)}else if(jg(arguments[0])){if(t=arguments[0],!t1(t.byteLength/jr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",jr,t.byteLength));t=new Gr(t)}else if(kg(arguments[0])){if(t=arguments[0],Ug===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Wt(t[Ei]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ei](),!Wt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Vg(t),t instanceof Error)throw t;t=new Gr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!jg(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!qn(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!t1(r/jr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",jr,r));if(e===2){if(i=t.byteLength-r,!t1(i/jr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",jr,i));t=new Gr(t,r)}else{if(i=arguments[2],!qn(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*jr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*jr));t=new Gr(t,r,i*2)}}return br(this,"_buffer",t),br(this,"_length",t.length/2),this}br(ir,"BYTES_PER_ELEMENT",jr);br(ir,"name","Complex128Array");br(ir,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Gg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Wt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(Ni(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),wi(l))u[g]=Ca(l),u[g+1]=Va(l);else if(Bg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(i1(e)){if(n){for(v=e.length,e.get&&e.set?f=$8r("default"):f=Y8r("default"),p=0;p<v;p++)if(!wi(f(e,p))){c=!0;break}if(c){if(!ka(v))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),wi(l))u[g]=Ca(l),u[g+1]=Va(l);else if(Bg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(kg(e)&&Ug&&Wt(e[Ei])){if(u=e[Ei](),!Wt(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=Z8r(u,n,t):o=Vg(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});br(ir,"of",function(){var e,t;if(!Wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Gg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Ua(ir.prototype,"buffer",function(){return this._buffer.buffer});Ua(ir.prototype,"byteLength",function(){return this._buffer.byteLength});Ua(ir.prototype,"byteOffset",function(){return this._buffer.byteOffset});br(ir.prototype,"BYTES_PER_ELEMENT",ir.BYTES_PER_ELEMENT);br(ir.prototype,"copyWithin",function(e,t){if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});br(ir.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},br(i,"next",f),br(i,"return",v),Ei&&br(i,Ei,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Cg(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});br(ir.prototype,"get",function(e){var t;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!qn(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Cg(t[e],t[e+1])});Ua(ir.prototype,"length",function(){return this._length});br(ir.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!qn(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(wi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ca(e),n[i+1]=Va(e);return}if(Ni(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*jr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Gr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i1(e)){for(o=e.length,v=0;v<o;v++)if(!wi(e[v])){u=!0;break}if(u){if(!ka(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*jr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Gr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Ca(f),n[i+1]=Va(f),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});xg.exports=ir});var Oi=s((rpe,Hg)=>{"use strict";var e5r=Dg();Hg.exports=e5r});var zg=s((epe,Wg)=>{"use strict";var t5r=lr(),i5r=Zr(),n5r=pr(),a5r=Qe(),s5r=Ut(),u5r=fi(),o5r=Qr(),v5r=ci(),f5r=li(),c5r=bi(),l5r=Oi(),p5r=[t5r,i5r,a5r,n5r,u5r,s5r,f5r,o5r,v5r,c5r,l5r];Wg.exports=p5r});var Jg=s((tpe,Xg)=>{"use strict";var g5r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];Xg.exports=g5r});var Zg=s((ipe,$g)=>{"use strict";var m5r=Vt(),d5r=mr(),h5r=le(),q5r=h8(),y5r=zg(),Yg=Jg(),b5r=Yg.length;function w5r(r){var e;if(d5r(r))return"generic";if(m5r(r))return null;for(e=0;e<b5r;e++)if(r instanceof y5r[e])return Yg[e];return q5r[h5r(r)]||null}$g.exports=w5r});var Ga=s((npe,Qg)=>{"use strict";var E5r=Zg();Qg.exports=E5r});var em=s((ape,rm)=>{"use strict";var Kg=I(),N5r=Vr(),O5r=i8(),S5r=Ao(),A5r=_o(),_5r=To(),T5r=Ga(),n1=y();function I5r(){var r,e,t,i,n,a,u,o,f;if(r=arguments[0],arguments.length>1)if(N5r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!Kg(t))throw new TypeError(n1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!Kg(t))throw new TypeError(n1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!O5r(r))throw new TypeError(n1("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=T5r(i),S5r(i)?a=A5r(u):a=_5r(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}rm.exports=I5r});var im=s((spe,tm)=>{"use strict";var L5r=em();tm.exports=L5r});var am=s((upe,nm)=>{"use strict";function R5r(r){return r!==r}nm.exports=R5r});var E=s((ope,sm)=>{"use strict";var P5r=am();sm.exports=P5r});var om=s((vpe,um)=>{"use strict";var F5r={Complex64:"complex64",Complex128:"complex128"};um.exports=F5r});var fm=s((fpe,vm)=>{"use strict";var M5r=gi(),B5r=pi(),j5r=[M5r,B5r];vm.exports=j5r});var lm=s((cpe,cm)=>{"use strict";var k5r=["complex64","complex128"];cm.exports=k5r});var mm=s((lpe,gm)=>{"use strict";var C5r=le(),V5r=om(),U5r=fm(),pm=lm(),G5r=pm.length;function x5r(r){var e;for(e=0;e<G5r;e++)if(r instanceof U5r[e])return pm[e];return V5r[C5r(r)]||null}gm.exports=x5r});var a1=s((ppe,dm)=>{"use strict";var D5r=mm();dm.exports=D5r});var qm=s((gpe,hm)=>{"use strict";var H5r=lr(),W5r=Zr(),z5r=Oi(),X5r=bi(),J5r={float64:H5r,float32:W5r,complex128:z5r,complex64:X5r};hm.exports=J5r});var bm=s((mpe,ym)=>{"use strict";var Y5r=qm();function $5r(r){return Y5r[r]||null}ym.exports=$5r});var Em=s((dpe,wm)=>{"use strict";var Z5r=bm();wm.exports=Z5r});var Om=s((hpe,Nm)=>{"use strict";function Q5r(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}Nm.exports=Q5r});var Lm=s((qpe,Im)=>{"use strict";var K5r=gi(),rpr=pi(),Sm=Kr(),Am=re(),_m=Ke(),Tm=rt();function epr(r,e,t,i,n,a){var u,o,f,v,c,l,p,g,h,d,m,q,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=_m(e),l=Tm(e)):(v=Sm(e),l=Am(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=_m(i),p=Tm(i)):(c=Sm(i),p=Am(i)),o===2?u=K5r:u=rpr,n===1)return a?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],a?q=n-1:q=n,d=(c-v)/q,m=(p-l)/q,N=1;N<q;N++)g=v+d*N,h=l+m*N,f.push(new u(g,h));return a&&f.push(new u(c,p)),f}Im.exports=epr});var s1=s((ype,Rm)=>{"use strict";function tpr(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}Rm.exports=tpr});var u1=s((bpe,jm)=>{"use strict";var Pm=Kr(),Fm=re(),Mm=Ke(),Bm=rt();function ipr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=Mm(t),v=Bm(t)):(o=Pm(t),v=Fm(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=Mm(n),c=Bm(n)):(f=Pm(n),c=Fm(n)),a===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?g=a-1:g=a,l=(f-o)/g,p=(c-v)/g,d=2,h=1;h<g;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}jm.exports=ipr});var Cm=s((wpe,km)=>{"use strict";var npr=Object;km.exports=npr});var Si=s((Epe,Vm)=>{"use strict";var apr=Cm();Vm.exports=apr});var Gm=s((Npe,Um)=>{"use strict";var spr=Object.getPrototypeOf;Um.exports=spr});var Dm=s((Ope,xm)=>{"use strict";function upr(r){return r.__proto__}xm.exports=upr});var Wm=s((Spe,Hm)=>{"use strict";var opr=er(),vpr=Dm();function fpr(r){var e=vpr(r);return e||e===null?e:opr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Hm.exports=fpr});var Xm=s((Ape,zm)=>{"use strict";var cpr=I(),lpr=Gm(),ppr=Wm(),o1;cpr(Object.getPrototypeOf)?o1=lpr:o1=ppr;zm.exports=o1});var Ym=s((_pe,Jm)=>{"use strict";var gpr=Si(),mpr=Xm();function dpr(r){return r==null?null:(r=gpr(r),mpr(r))}Jm.exports=dpr});var zt=s((Tpe,$m)=>{"use strict";var hpr=Ym();$m.exports=hpr});var Km=s((Ipe,Qm)=>{"use strict";var qpr=_a(),Zm=I(),ypr=zt(),xa=S(),bpr=er(),wpr=Object.prototype;function Epr(r){var e;for(e in r)if(!xa(r,e))return!1;return!0}function Npr(r){var e;return qpr(r)?(e=ypr(r),e?!xa(r,"constructor")&&xa(e,"constructor")&&Zm(e.constructor)&&bpr(e.constructor)==="[object Function]"&&xa(e,"isPrototypeOf")&&Zm(e.isPrototypeOf)&&(e===wpr||Epr(r)):!0):!1}Qm.exports=Npr});var T=s((Lpe,rd)=>{"use strict";var Opr=Km();rd.exports=Opr});var v1=s((Rpe,ed)=>{"use strict";function Spr(r){return typeof r=="string"}ed.exports=Spr});var id=s((Ppe,td)=>{"use strict";var Apr=String.prototype.valueOf;td.exports=Apr});var ad=s((Fpe,nd)=>{"use strict";var _pr=id();function Tpr(r){try{return _pr.call(r),!0}catch{return!1}}nd.exports=Tpr});var f1=s((Mpe,sd)=>{"use strict";var Ipr=ui(),Lpr=er(),Rpr=ad(),Ppr=Ipr();function Fpr(r){return typeof r=="object"?r instanceof String?!0:Ppr?Rpr(r):Lpr(r)==="[object String]":!1}sd.exports=Fpr});var od=s((Bpe,ud)=>{"use strict";var Mpr=v1(),Bpr=f1();function jpr(r){return Mpr(r)||Bpr(r)}ud.exports=jpr});var Q=s((jpe,fd)=>{"use strict";var vd=b(),c1=od(),kpr=v1(),Cpr=f1();vd(c1,"isPrimitive",kpr);vd(c1,"isObject",Cpr);fd.exports=c1});var p1=s((kpe,ld)=>{"use strict";var Vpr=T(),cd=S(),Upr=Q().isPrimitive,Gpr=cr().isPrimitive,l1=y();function xpr(r,e){return Vpr(e)?cd(e,"dtype")&&(r.dtype=e.dtype,!Upr(r.dtype))?new TypeError(l1("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):cd(e,"endpoint")&&(r.endpoint=e.endpoint,!Gpr(r.endpoint))?new TypeError(l1("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(l1("invalid argument. Options argument must be an object. Value: `%s`.",e))}ld.exports=xpr});var g1=s((Cpe,Dpr)=>{Dpr.exports={endpoint:!0}});var yd=s((Vpe,qd)=>{"use strict";var pd=Wr(),gd=k().isPrimitive,Hpr=qr().isPrimitive,md=E(),dd=a1(),Wpr=Em(),zpr=mi(),Xpr=di(),Ai=y(),Jpr=Om(),Ypr=Lm(),$pr=s1(),hd=u1(),Zpr=p1(),Qpr=g1();function Kpr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(o=dd(r),o===null){if(!pd(r))throw new TypeError(Ai("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!gd(r)||md(r))throw new TypeError(Ai("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=dd(e),f===null){if(!pd(e))throw new TypeError(Ai("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!gd(e)||md(e))throw new TypeError(Ai("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!Hpr(t))throw new TypeError(Ai("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Qpr.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=Zpr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?Ypr(o,r,f,e,t,i.endpoint):Jpr(r,e,t,i.endpoint);if(n=Wpr(i.dtype),n===null)throw new TypeError(Ai('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return hd(zpr(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return hd(Xpr(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return $pr(u,r,e,t,i.endpoint)}qd.exports=Kpr});var wd=s((Upe,bd)=>{"use strict";var r7r=Ao(),e7r=Ra(),t7r=To(),i7r=Pa(),n7r=_o(),a7r=Ga();function s7r(r){var e=a7r(r);return r7r(r)?{accessorProtocol:!0,accessors:[i7r(e),n7r(e)]}:{accessorProtocol:!1,accessors:[e7r(e),t7r(e)]}}bd.exports=s7r});var Nd=s((Gpe,Ed)=>{"use strict";var u7r=wd();Ed.exports=u7r});var Sd=s((xpe,Od)=>{"use strict";var o7r=Nd();function v7r(r){var e=o7r(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Od.exports=v7r});var yn=s((Dpe,Ad)=>{"use strict";var f7r=Sd();Ad.exports=f7r});var Pd=s((Hpe,Rd)=>{"use strict";var c7r=gi(),l7r=pi(),_d=Kr(),Td=re(),Id=Ke(),Ld=rt();function p7r(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d,m,q,N,O,F;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=Id(t),l=Ld(t)):(v=_d(t),l=Td(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=Id(n),p=Ld(n)):(c=_d(n),p=Td(n)),f===2?o=c7r:o=l7r,h=r.data,g=r.accessors[1],a===1)return u?g(h,0,new o(c,p)):g(h,0,new o(v,l)),r;for(g(h,0,new o(v,l)),u?O=a-1:O=a,q=(c-v)/O,N=(p-l)/O,F=1;F<O;F++)d=v+q*F,m=l+N*F,g(h,F,new o(d,m));return u&&g(h,O,new o(c,p)),r}Rd.exports=p7r});var Md=s((Wpe,Fd)=>{"use strict";function g7r(r,e,t,i,n){var a,u,o,f,v;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(a,v,e+f*v);return n&&u(a,o,t),r}Fd.exports=g7r});var xd=s((zpe,Gd)=>{"use strict";var Bd=Wr(),jd=k().isPrimitive,m7r=Vr(),bn=y(),kd=E(),Cd=a1(),d7r=Ga(),h7r=mi(),q7r=di(),Vd=yn(),y7r=Pd(),b7r=Md(),Ud=u1(),w7r=s1(),E7r=p1(),N7r=g1();function O7r(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(a=Cd(r),a===null){if(!Bd(r))throw new TypeError(bn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!jd(r)||kd(r))throw new TypeError(bn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=Cd(e),u===null){if(!Bd(e))throw new TypeError(bn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!jd(e)||kd(e))throw new TypeError(bn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!m7r(t))throw new TypeError(bn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:N7r.endpoint},arguments.length>3&&(n=E7r(i,arguments[3]),n))throw n;if(f=d7r(t),f===null&&(f="generic"),f==="complex64")return Ud(h7r(t,0),a,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return Ud(q7r(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=Vd(t),y7r(v,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=Vd(t),v.accessorProtocol?(b7r(v,r,e,t.length,i.endpoint),t):(w7r(t,r,e,t.length,i.endpoint),t)}Gd.exports=O7r});var Wd=s((Xpe,Hd)=>{"use strict";var S7r=b(),Dd=yd(),A7r=xd();S7r(Dd,"assign",A7r);Hd.exports=Dd});var Xd=s((Jpe,zd)=>{"use strict";var _7r=k().isPrimitive,T7r=Q().isPrimitive,I7r=cr().isPrimitive,L7r=mr(),R7r=y(),P7r={number:_7r,string:T7r,boolean:I7r};function F7r(r,e,t){var i,n,a,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],a=e[f],u=P7r[a],u(o))i.push([[o]]),n.push([1,1]);else if(L7r(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(R7r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],a,a,String(o)));return[i,n]}zd.exports=F7r});var Da=s((Ype,Jd)=>{"use strict";var M7r=Xd();Jd.exports=M7r});var $d=s(($pe,Yd)=>{"use strict";var B7r=Ea();function j7r(r){return B7r(1,r)}Yd.exports=j7r});var Qd=s((Zpe,Zd)=>{"use strict";var k7r=$d();Zd.exports=k7r});var rh=s((Qpe,Kd)=>{"use strict";function C7r(r,e,t){var i,n,a,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],a=0;a<i;a++)f[a]=t(o[a])}Kd.exports=C7r});var m1=s((Kpe,eh)=>{"use strict";var V7r=rh();eh.exports=V7r});var ih=s((r7e,th)=>{"use strict";var U7r=Ea();function G7r(r){return U7r(0,r)}th.exports=G7r});var Ha=s((e7e,nh)=>{"use strict";var x7r=ih();nh.exports=x7r});var sh=s((t7e,ah)=>{"use strict";var wr=rr(),D7r=uo(),H7r=vo(),W7r=wa(),z7r=ba(),X7r=Ea(),J7r=a6(),Y7r=fo(),$7r=im(),Z7r=Wd(),Q7r=Da(),K7r=Qd(),r9r=m1(),e9r=Ze(),t9r=Ha();function i9r(r){return wr(r,"bbinary2d",D7r),wr(r,"bternary2d",H7r),wr(r,"broadcastShapes",W7r),wr(r,"filled",z7r),wr(r,"filled2d",X7r),wr(r,"filled2dBy",J7r),wr(r,"flatten2d",Y7r),wr(r,"iterator2array",$7r),wr(r,"linspace",Z7r),wr(r,"normalizeBroadcastArgs",Q7r),wr(r,"ones2d",K7r),wr(r,"unary2d",r9r),wr(r,"zeros",e9r),wr(r,"zeros2d",t9r),r}ah.exports=i9r});var vh=s((i7e,oh)=>{"use strict";var uh=y();function n9r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(uh('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(uh('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}oh.exports=n9r});var ch=s((n7e,fh)=>{"use strict";var a9r=vh();fh.exports=a9r});var ph=s((a7e,lh)=>{"use strict";var s9r=k().isPrimitive,u9r=ch(),o9r=y();function v9r(r,e,t,i,n,a){var u,o;if(!(s9r(r)&&u9r(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(o9r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}lh.exports=v9r});var mh=s((s7e,gh)=>{"use strict";var f9r=ph();gh.exports=f9r});var hh=s((u7e,dh)=>{"use strict";var c9r=cr().isPrimitive,l9r=y();function p9r(r,e){if(!c9r(r))throw new TypeError(l9r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}dh.exports=p9r});var yh=s((o7e,qh)=>{"use strict";var g9r=hh();qh.exports=g9r});var wh=s((v7e,bh)=>{"use strict";function m9r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}bh.exports=m9r});var Nh=s((f7e,Eh)=>{"use strict";var d9r=wh();Eh.exports=d9r});var Sh=s((c7e,Oh)=>{"use strict";var h9r=y(),q9r=Nh();function y9r(r,e,t){if(!q9r(r,e))throw new TypeError(h9r("invalid argument. %s must be broadcast compatible.",t))}Oh.exports=y9r});var _h=s((l7e,Ah)=>{"use strict";var b9r=Sh();Ah.exports=b9r});var Ih=s((p7e,Th)=>{"use strict";function w9r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}Th.exports=w9r});var Rh=s((g7e,Lh)=>{"use strict";var E9r=Ih();Lh.exports=E9r});var Fh=s((m7e,Ph)=>{"use strict";var N9r=y(),O9r=Rh();function S9r(r,e,t,i){if(!O9r(r,e))throw new TypeError(N9r("invalid argument. %s must be broadcast compatible with %s.",t,i))}Ph.exports=S9r});var Bh=s((d7e,Mh)=>{"use strict";var A9r=Fh();Mh.exports=A9r});var kh=s((h7e,jh)=>{"use strict";function _9r(r,e,t){var i,n,a,u,o;for(i=r.length,n=t,a=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?a+=u*(r[o]-1):u<0&&(n+=u*(r[o]-1))}return[n,a]}jh.exports=_9r});var Vh=s((q7e,Ch)=>{"use strict";function T9r(r,e,t,i){var n,a,u,o,f;for(n=r.length,a=t,u=t,f=0;f<n;f++){if(r[f]===0)return i[0]=t,i[1]=t,i;o=e[f],o>0?u+=o*(r[f]-1):o<0&&(a+=o*(r[f]-1))}return i[0]=a,i[1]=u,i}Ch.exports=T9r});var d1=s((y7e,Gh)=>{"use strict";var I9r=b(),Uh=kh(),L9r=Vh();I9r(Uh,"assign",L9r);Gh.exports=Uh});var Dh=s((b7e,xh)=>{"use strict";var R9r=d1();function P9r(r,e,t,i){var n=R9r(e,t,i);return n[0]>=0&&n[1]<r}xh.exports=P9r});var Wh=s((w7e,Hh)=>{"use strict";var F9r=Dh();Hh.exports=F9r});var Xh=s((E7e,zh)=>{"use strict";var M9r=Wh();function B9r(r,e,t,i){if(e.length&&!M9r(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}zh.exports=B9r});var Yh=s((N7e,Jh)=>{"use strict";var j9r=Xh();Jh.exports=j9r});var Zh=s((O7e,$h)=>{"use strict";var k9r=y();function C9r(r,e){if(r===void 0)throw new Error(k9r("invalid invocation. Must provide %s.",e))}$h.exports=C9r});var h1=s((S7e,Qh)=>{"use strict";var V9r=Zh();Qh.exports=V9r});var rq=s((A7e,Kh)=>{"use strict";var U9r=y();function G9r(r,e,t,i){if(!(r>e))throw new TypeError(U9r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Kh.exports=G9r});var tq=s((_7e,eq)=>{"use strict";var x9r=rq();eq.exports=x9r});var nq=s((T7e,iq)=>{"use strict";var D9r=y();function H9r(r,e,t,i){if(!(r>=e))throw new TypeError(D9r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}iq.exports=H9r});var sq=s((I7e,aq)=>{"use strict";var W9r=nq();aq.exports=W9r});var oq=s((L7e,uq)=>{"use strict";var z9r=dr().isPrimitive,X9r=y();function J9r(r,e){if(!z9r(r))throw new TypeError(X9r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}uq.exports=J9r});var fq=s((R7e,vq)=>{"use strict";var Y9r=oq();vq.exports=Y9r});var lq=s((P7e,cq)=>{"use strict";var $9r=y();function Z9r(r,e,t,i){if(!(r<e))throw new TypeError($9r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}cq.exports=Z9r});var gq=s((F7e,pq)=>{"use strict";var Q9r=lq();pq.exports=Q9r});var dq=s((M7e,mq)=>{"use strict";var K9r=y();function rgr(r,e,t,i){if(!(r<=e))throw new TypeError(K9r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}mq.exports=rgr});var qq=s((B7e,hq)=>{"use strict";var egr=dq();hq.exports=egr});var bq=s((j7e,yq)=>{"use strict";var tgr=qr().isPrimitive,igr=y();function ngr(r,e){if(!tgr(r))throw new TypeError(igr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}yq.exports=ngr});var Eq=s((k7e,wq)=>{"use strict";var agr=bq();wq.exports=agr});var q1=s((C7e,Nq)=>{"use strict";var sgr=k().isPrimitive;function ugr(r){return sgr(r)&&r>=0}Nq.exports=ugr});var y1=s((V7e,Oq)=>{"use strict";var ogr=k().isObject;function vgr(r){return ogr(r)&&r.valueOf()>=0}Oq.exports=vgr});var Aq=s((U7e,Sq)=>{"use strict";var fgr=q1(),cgr=y1();function lgr(r){return fgr(r)||cgr(r)}Sq.exports=lgr});var Wa=s((G7e,Tq)=>{"use strict";var _q=b(),b1=Aq(),pgr=q1(),ggr=y1();_q(b1,"isPrimitive",pgr);_q(b1,"isObject",ggr);Tq.exports=b1});var Lq=s((x7e,Iq)=>{"use strict";var mgr=Wa().isPrimitive,dgr=y();function hgr(r,e){if(!mgr(r))throw new TypeError(dgr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Iq.exports=hgr});var Pq=s((D7e,Rq)=>{"use strict";var qgr=Lq();Rq.exports=qgr});var Mq=s((H7e,Fq)=>{"use strict";var ygr=k().isPrimitive,bgr=y();function wgr(r,e){if(!ygr(r))throw new TypeError(bgr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Fq.exports=wgr});var jq=s((W7e,Bq)=>{"use strict";var Egr=Mq();Bq.exports=Egr});var Cq=s((z7e,kq)=>{"use strict";var Ngr=y();function Ogr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Ngr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}kq.exports=Ogr});var Uq=s((X7e,Vq)=>{"use strict";var Sgr=Cq();Vq.exports=Sgr});var w1=s((J7e,Gq)=>{"use strict";var Agr=dr().isPrimitive;function _gr(r){return Agr(r)&&r>0}Gq.exports=_gr});var E1=s((Y7e,xq)=>{"use strict";var Tgr=dr().isObject;function Igr(r){return Tgr(r)&&r.valueOf()>0}xq.exports=Igr});var Hq=s(($7e,Dq)=>{"use strict";var Lgr=w1(),Rgr=E1();function Pgr(r){return Lgr(r)||Rgr(r)}Dq.exports=Pgr});var ee=s((Z7e,zq)=>{"use strict";var Wq=b(),N1=Hq(),Fgr=w1(),Mgr=E1();Wq(N1,"isPrimitive",Fgr);Wq(N1,"isObject",Mgr);zq.exports=N1});var Jq=s((Q7e,Xq)=>{"use strict";var Bgr=ee().isPrimitive,jgr=y();function kgr(r,e){if(!Bgr(r))throw new TypeError(jgr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}Xq.exports=kgr});var O1=s((K7e,Yq)=>{"use strict";var Cgr=Jq();Yq.exports=Cgr});var S1=s((r9e,$q)=>{"use strict";var Vgr=k().isPrimitive;function Ugr(r){return Vgr(r)&&r>0}$q.exports=Ugr});var A1=s((e9e,Zq)=>{"use strict";var Ggr=k().isObject;function xgr(r){return Ggr(r)&&r.valueOf()>0}Zq.exports=xgr});var Kq=s((t9e,Qq)=>{"use strict";var Dgr=S1(),Hgr=A1();function Wgr(r){return Dgr(r)||Hgr(r)}Qq.exports=Wgr});var W=s((i9e,ey)=>{"use strict";var ry=b(),_1=Kq(),zgr=S1(),Xgr=A1();ry(_1,"isPrimitive",zgr);ry(_1,"isObject",Xgr);ey.exports=_1});var iy=s((n9e,ty)=>{"use strict";var Jgr=W().isPrimitive,Ygr=y();function $gr(r,e){if(!Jgr(r))throw new TypeError(Ygr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}ty.exports=$gr});var ay=s((a9e,ny)=>{"use strict";var Zgr=iy();ny.exports=Zgr});var T1=s((s9e,sy)=>{"use strict";var Qgr=k().isPrimitive;function Kgr(r){return Qgr(r)&&r>=0&&r<=1}sy.exports=Kgr});var I1=s((u9e,uy)=>{"use strict";var rmr=k().isObject;function emr(r){return rmr(r)&&r.valueOf()>=0&&r.valueOf()<=1}uy.exports=emr});var vy=s((o9e,oy)=>{"use strict";var tmr=T1(),imr=I1();function nmr(r){return tmr(r)||imr(r)}oy.exports=nmr});var wn=s((v9e,cy)=>{"use strict";var fy=b(),L1=vy(),amr=T1(),smr=I1();fy(L1,"isPrimitive",amr);fy(L1,"isObject",smr);cy.exports=L1});var py=s((f9e,ly)=>{"use strict";var umr=wn().isPrimitive,omr=y();function vmr(r,e){if(!umr(r))throw new TypeError(omr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}ly.exports=vmr});var my=s((c9e,gy)=>{"use strict";var fmr=py();gy.exports=fmr});var hy=s((l9e,dy)=>{"use strict";var cmr=mr(),lmr=y();function pmr(r,e){if(!cmr(r))throw new TypeError(lmr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}dy.exports=pmr});var yy=s((p9e,qy)=>{"use strict";var gmr=hy();qy.exports=gmr});var wy=s((g9e,by)=>{"use strict";function mmr(r){return r.length===1||r[0].length===1}by.exports=mmr});var Ny=s((m9e,Ey)=>{"use strict";var dmr=wy();Ey.exports=dmr});var Sy=s((d9e,Oy)=>{"use strict";var hmr=mr(),qmr=Ny();function ymr(r){return hmr(r)&&qmr(r)}Oy.exports=ymr});var _y=s((h9e,Ay)=>{"use strict";var bmr=Sy();Ay.exports=bmr});var Iy=s((q9e,Ty)=>{"use strict";var wmr=y(),Emr=_y();function Nmr(r,e){if(!Emr(r))throw new TypeError(wmr("invalid argument. %s must consist of only a single row or a single column.",e))}Ty.exports=Nmr});var Ry=s((y9e,Ly)=>{"use strict";var Omr=Iy();Ly.exports=Omr});var Fy=s((b9e,Py)=>{"use strict";function Smr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}Py.exports=Smr});var By=s((w9e,My)=>{"use strict";var Amr=Fy();My.exports=Amr});var ky=s((E9e,jy)=>{"use strict";var _mr=y(),Tmr=By();function Imr(r,e,t){if(!Tmr(r,e))throw new TypeError(_mr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}jy.exports=Imr});var Vy=s((N9e,Cy)=>{"use strict";var Lmr=ky();Cy.exports=Lmr});var Gy=s((O9e,Uy)=>{"use strict";var Rmr=Q().isPrimitive,Pmr=y();function Fmr(r,e){if(!Rmr(r))throw new TypeError(Pmr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}Uy.exports=Fmr});var Dy=s((S9e,xy)=>{"use strict";var Mmr=Gy();xy.exports=Mmr});var Wy=s((A9e,Hy)=>{"use strict";var Bmr=y(),jmr=qr().isPrimitive;function kmr(r,e){var t;for(t=0;t<r.length;t++)if(!jmr(r[t]))throw new TypeError(Bmr("invalid argument. %s must contain only nonnegative integers.",e))}Hy.exports=kmr});var Xy=s((_9e,zy)=>{"use strict";var Cmr=Wy();zy.exports=Cmr});var Yy=s((T9e,Jy)=>{"use strict";var Vmr=y(),Umr=dr().isPrimitive;function Gmr(r,e){var t;for(t=0;t<r.length;t++)if(!Umr(r[t]))throw new TypeError(Vmr("invalid argument. %s must contain only integers.",e))}Jy.exports=Gmr});var Zy=s((I9e,$y)=>{"use strict";var xmr=Yy();$y.exports=xmr});var Ky=s((L9e,Qy)=>{"use strict";var Dmr=y();function Hmr(r){throw new Error(Dmr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}Qy.exports=Hmr});var eb=s((R9e,rb)=>{"use strict";var Wmr=Ky();rb.exports=Wmr});var nb=s((P9e,ib)=>{"use strict";var tb=O1(),zmr=h1();function Xmr(r,e,t){tb(r,"Number of rows"),tb(e,"Number of columns"),zmr(t,"a pseudorandom number generator seed")}ib.exports=Xmr});var sb=s((F9e,ab)=>{"use strict";var Jmr=nb();ab.exports=Jmr});var ob=s((M9e,ub)=>{"use strict";var Ymr=hr(),$mr=Qo();function Zmr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&Ymr(r.length)&&r.length>=0&&r.length<=$mr}ub.exports=Zmr});var fb=s((B9e,vb)=>{"use strict";var Qmr=ob();vb.exports=Qmr});var lb=s((j9e,cb)=>{"use strict";var Kmr=fb(),rdr=y();function edr(r){if(typeof r!="function")throw new TypeError(rdr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Kmr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}cb.exports=edr});var R1=s((k9e,pb)=>{"use strict";var tdr=lb();pb.exports=tdr});var db=s((C9e,mb)=>{"use strict";var P1=dr(),gb=b(),F1=R1(),idr=F1(P1.isPrimitive),ndr=F1(P1.isObject),M1=F1(P1);gb(M1,"primitives",idr);gb(M1,"objects",ndr);mb.exports=M1});var yb=s((V9e,qb)=>{"use strict";var B1=qr(),hb=b(),j1=R1(),adr=j1(B1.isPrimitive),sdr=j1(B1.isObject),k1=j1(B1);hb(k1,"primitives",adr);hb(k1,"objects",sdr);qb.exports=k1});var wb=s((U9e,bb)=>{"use strict";var te=rr(),udr=mr(),odr=dr().isPrimitive,vdr=db().primitives,fdr=qr().isPrimitive,cdr=yb().primitives,ldr=Wa().isPrimitive,pdr=k().isPrimitive,gdr=ee().isPrimitive,mdr=W().isPrimitive,ddr=Q().isPrimitive;function hdr(r){return te(r,"isArray",udr),te(r,"isInteger",odr),te(r,"isIntegerArray",vdr),te(r,"isNonNegativeInteger",fdr),te(r,"isNonNegativeIntegerArray",cdr),te(r,"isNonNegativeNumber",ldr),te(r,"isNumber",pdr),te(r,"isPositiveInteger",gdr),te(r,"isPositiveNumber",mdr),te(r,"isString",ddr),r}bb.exports=hdr});var Nb=s((G9e,Eb)=>{"use strict";var X=rr(),qdr=mh(),ydr=yh(),bdr=_h(),wdr=Bh(),Edr=Yh(),Ndr=h1(),Odr=tq(),Sdr=sq(),Adr=fq(),_dr=gq(),Tdr=qq(),Idr=Eq(),Ldr=Pq(),Rdr=jq(),Pdr=Uq(),Fdr=O1(),Mdr=ay(),Bdr=my(),jdr=yy(),kdr=Ry(),Cdr=Vy(),Vdr=Dy(),Udr=Xy(),Gdr=Zy(),xdr=eb(),Ddr=sb(),Hdr=wb();function Wdr(r){return X(r,"isBetween",qdr),X(r,"isBoolean",ydr),X(r,"isBroadcastCompatible",bdr),X(r,"isBroadcastCompatibleWith",wdr),X(r,"isBufferLengthCompatible",Edr),X(r,"isDefined",Ndr),X(r,"isGreaterThan",Odr),X(r,"isGreaterThanEqual",Sdr),X(r,"isInteger",Adr),X(r,"isLessThan",_dr),X(r,"isLessThanEqual",Tdr),X(r,"isNonNegativeInteger",Idr),X(r,"isNonNegativeNumber",Ldr),X(r,"isNumber",Rdr),X(r,"isOneOf",Pdr),X(r,"isPositiveInteger",Fdr),X(r,"isPositiveNumber",Mdr),X(r,"isProbability",Bdr),X(r,"isRange",jdr),X(r,"isRange1d",kdr),X(r,"isSameShape",Cdr),X(r,"isString",Vdr),X(r,"isValidShape",Udr),X(r,"isValidStrides",Gdr),X(r,"unrecognizedOptionName",xdr),X(r,"verifyCommonPRNGArgs",Ddr),X(r,"base",Hdr({})),r}Eb.exports=Wdr});var Sb=s((x9e,Ob)=>{"use strict";var C1=4;function zdr(r,e,t,i,n,a){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%C1,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<C1)return n;for(v=f;v<r;v+=C1)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=a;return n}Ob.exports=zdr});var _b=s((D9e,Ab)=>{"use strict";var En=4;function Xdr(r,e,t,i,n,a,u,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&u===1){if(c=r%En,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=u;if(r<En)return a;for(l=c;l<r;l+=En)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=En,v+=En;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=u;return a}Ab.exports=Xdr});var V1=s((H9e,Ib)=>{"use strict";var Jdr=b(),Tb=Sb(),Ydr=_b();Jdr(Tb,"ndarray",Ydr);Ib.exports=Tb});var Pb=s((W9e,Rb)=>{"use strict";var Lb=rr(),$dr=V1().ndarray,Zdr=V1().ndarray;function Qdr(r){return Lb(r,"daxpy",$dr),Lb(r,"saxpy",Zdr),r}Rb.exports=Qdr});var Mb=s((z9e,Fb)=>{"use strict";var Kdr=zt(),rhr=er();function ehr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(rhr(r)==="[object Error]")return!0;r=Kdr(r)}return!1}Fb.exports=ehr});var jb=s((X9e,Bb)=>{"use strict";var thr=Mb();Bb.exports=thr});var U1=s((J9e,kb)=>{"use strict";function ihr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}kb.exports=ihr});var Vb=s((Y9e,Cb)=>{"use strict";var nhr=U1(),ahr=nhr();Cb.exports=ahr});var xb=s(($9e,Gb)=>{"use strict";var shr=b(),Ub=U1(),uhr=Vb();shr(Ub,"REGEXP",uhr);Gb.exports=Ub});var Hb=s((Z9e,Db)=>{"use strict";var ohr=Q().isPrimitive,vhr=xb(),fhr=y();function chr(r){if(!ohr(r))throw new TypeError(fhr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=vhr().exec(r),r?new RegExp(r[1],r[2]):null}Db.exports=chr});var zb=s((Q9e,Wb)=>{"use strict";var lhr=Hb();Wb.exports=lhr});var G1=s((K9e,Xb)=>{"use strict";var phr=k().isPrimitive,ghr=E();function mhr(r){return phr(r)&&ghr(r)}Xb.exports=mhr});var x1=s((rge,Jb)=>{"use strict";var dhr=k().isObject,hhr=E();function qhr(r){return dhr(r)&&hhr(r.valueOf())}Jb.exports=qhr});var $b=s((ege,Yb)=>{"use strict";var yhr=G1(),bhr=x1();function whr(r){return yhr(r)||bhr(r)}Yb.exports=whr});var vr=s((tge,Qb)=>{"use strict";var Zb=b(),D1=$b(),Ehr=G1(),Nhr=x1();Zb(D1,"isPrimitive",Ehr);Zb(D1,"isObject",Nhr);Qb.exports=D1});var tw=s((ige,ew)=>{"use strict";var Kb=vr(),Ohr=Vr(),Shr=Q().isPrimitive,Ahr=dr().isPrimitive,rw=y();function _hr(r,e,t){var i,n;if(!Ohr(r)&&!Shr(r))throw new TypeError(rw("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Ahr(t))throw new TypeError(rw("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(Kb(e)){for(;n<i;n++)if(Kb(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}ew.exports=_hr});var za=s((nge,iw)=>{"use strict";var Thr=tw();iw.exports=Thr});var Xa=s((age,nw)=>{"use strict";function Ihr(r){return Object.keys(Object(r))}nw.exports=Ihr});var sw=s((sge,aw)=>{"use strict";var Lhr=Xa();function Rhr(){return(Lhr(arguments)||"").length!==2}function Phr(){return Rhr(1,2)}aw.exports=Phr});var ow=s((uge,uw)=>{"use strict";var Fhr=typeof Object.keys<"u";uw.exports=Fhr});var H1=s((oge,vw)=>{"use strict";var Mhr=er();function Bhr(r){return Mhr(r)==="[object Arguments]"}vw.exports=Bhr});var lw=s((vge,cw)=>{"use strict";var jhr=H1(),fw;function khr(){return jhr(arguments)}fw=khr();cw.exports=fw});var W1=s((fge,pw)=>{"use strict";var Chr=Object.prototype.propertyIsEnumerable;pw.exports=Chr});var dw=s((cge,mw)=>{"use strict";var Vhr=W1(),gw;function Uhr(){return!Vhr.call("beep","0")}gw=Uhr();mw.exports=gw});var qw=s((lge,hw)=>{"use strict";var Ghr=Q(),xhr=vr().isPrimitive,Dhr=dr().isPrimitive,Hhr=W1(),Whr=dw();function zhr(r,e){var t;return r==null?!1:(t=Hhr.call(r,e),!t&&Whr&&Ghr(r)?(e=+e,!xhr(e)&&Dhr(e)&&e>=0&&e<r.length):t)}hw.exports=zhr});var Nn=s((pge,yw)=>{"use strict";var Xhr=qw();yw.exports=Xhr});var ww=s((gge,bw)=>{"use strict";var Jhr=S(),Yhr=Nn(),$hr=mr(),Zhr=hr(),Qhr=oi();function Khr(r){return r!==null&&typeof r=="object"&&!$hr(r)&&typeof r.length=="number"&&Zhr(r.length)&&r.length>=0&&r.length<=Qhr&&Jhr(r,"callee")&&!Yhr(r,"callee")}bw.exports=Khr});var X1=s((mge,Ew)=>{"use strict";var rqr=lw(),eqr=H1(),tqr=ww(),z1;rqr?z1=eqr:z1=tqr;Ew.exports=z1});var Sw=s((dge,Ow)=>{"use strict";var iqr=X1(),Nw=Xa(),nqr=Array.prototype.slice;function aqr(r){return iqr(r)?Nw(nqr.call(r)):Nw(r)}Ow.exports=aqr});var _w=s((hge,Aw)=>{"use strict";function sqr(){}Aw.exports=sqr});var C=s((qge,Tw)=>{"use strict";var uqr=_w();Tw.exports=uqr});var Lw=s((yge,Iw)=>{"use strict";var oqr=Nn(),vqr=C(),fqr=oqr(vqr,"prototype");Iw.exports=fqr});var Pw=s((bge,Rw)=>{"use strict";var cqr=Nn(),lqr={toString:null},pqr=!cqr(lqr,"toString");Rw.exports=pqr});var J1=s((wge,Fw)=>{"use strict";function gqr(r){return r.constructor&&r.constructor.prototype===r}Fw.exports=gqr});var Mw=s((Ege,mqr)=>{mqr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var jw=s((Nge,Bw)=>{"use strict";var dqr=typeof window>"u"?void 0:window;Bw.exports=dqr});var Uw=s((Oge,Vw)=>{"use strict";var hqr=S(),qqr=za(),kw=Na(),yqr=J1(),bqr=Mw(),_i=jw(),Cw;function wqr(){var r;if(kw(_i)==="undefined")return!1;for(r in _i)try{qqr(bqr,r)===-1&&hqr(_i,r)&&_i[r]!==null&&kw(_i[r])==="object"&&yqr(_i[r])}catch{return!0}return!1}Cw=wqr();Vw.exports=Cw});var xw=s((Sge,Gw)=>{"use strict";var Eqr=typeof window<"u";Gw.exports=Eqr});var Ww=s((Age,Hw)=>{"use strict";var Nqr=Uw(),Dw=J1(),Oqr=xw();function Sqr(r){if(Oqr===!1&&!Nqr)return Dw(r);try{return Dw(r)}catch{return!1}}Hw.exports=Sqr});var zw=s((_ge,Aqr)=>{Aqr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Yw=s((Tge,Jw)=>{"use strict";var _qr=So(),Y1=S(),Tqr=X1(),Iqr=Lw(),Lqr=Pw(),Rqr=Ww(),Xw=zw();function Pqr(r){var e,t,i,n,a,u,o;if(n=[],Tqr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!Y1(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!_qr(r))return n;t=Iqr&&i}for(a in r)!(t&&a==="prototype")&&Y1(r,a)&&n.push(String(a));if(Lqr)for(e=Rqr(r),o=0;o<Xw.length;o++)u=Xw[o],!(e&&u==="constructor")&&Y1(r,u)&&n.push(String(u));return n}Jw.exports=Pqr});var Zw=s((Ige,$w)=>{"use strict";var Fqr=sw(),Mqr=ow(),Bqr=Xa(),jqr=Sw(),kqr=Yw(),Ja;Mqr?Fqr()?Ja=jqr:Ja=Bqr:Ja=kqr;$w.exports=Ja});var Ti=s((Lge,Qw)=>{"use strict";var Cqr=Zw();Qw.exports=Cqr});var rE=s((Rge,Kw)=>{"use strict";var Vqr=typeof Object.getOwnPropertyNames<"u";Kw.exports=Vqr});var iE=s((Pge,tE)=>{"use strict";var eE=Si(),Uqr=eE.getOwnPropertyNames;function Gqr(r){return Uqr(eE(r))}tE.exports=Gqr});var aE=s((Fge,nE)=>{"use strict";var xqr=Si(),Dqr=Ti();function Hqr(r){return Dqr(xqr(r))}nE.exports=Hqr});var uE=s((Mge,sE)=>{"use strict";var Wqr=rE(),zqr=iE(),Xqr=aE(),$1;Wqr?$1=zqr:$1=Xqr;sE.exports=$1});var vE=s((Bge,oE)=>{"use strict";var Jqr=typeof Object.getOwnPropertyDescriptor<"u";oE.exports=Jqr});var cE=s((jge,fE)=>{"use strict";var Yqr=Object.getOwnPropertyDescriptor;function $qr(r,e){var t;return r==null?null:(t=Yqr(r,e),t===void 0?null:t)}fE.exports=$qr});var pE=s((kge,lE)=>{"use strict";var Zqr=S();function Qqr(r,e){return Zqr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}lE.exports=Qqr});var mE=s((Cge,gE)=>{"use strict";var Kqr=vE(),ryr=cE(),eyr=pE(),Z1;Kqr?Z1=ryr:Z1=eyr;gE.exports=Z1});var hE=s((Vge,dE)=>{"use strict";var tyr=typeof Buffer=="function"?Buffer:null;dE.exports=tyr});var yE=s((Uge,qE)=>{"use strict";var iyr=Vt(),Ya=hE();function nyr(){var r,e;if(typeof Ya!="function")return!1;try{typeof Ya.from=="function"?e=Ya.from([1,2,3,4]):e=new Ya([1,2,3,4]),r=iyr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}qE.exports=nyr});var wE=s((Gge,bE)=>{"use strict";var ayr=yE();bE.exports=ayr});var OE=s($a=>{"use strict";$a.byteLength=uyr;$a.toByteArray=vyr;$a.fromByteArray=lyr;var ie=[],xr=[],syr=typeof Uint8Array<"u"?Uint8Array:Array,Q1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Xt=0,EE=Q1.length;Xt<EE;++Xt)ie[Xt]=Q1[Xt],xr[Q1.charCodeAt(Xt)]=Xt;var Xt,EE;xr["-".charCodeAt(0)]=62;xr["_".charCodeAt(0)]=63;function NE(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function uyr(r){var e=NE(r),t=e[0],i=e[1];return(t+i)*3/4-i}function oyr(r,e,t){return(e+t)*3/4-t}function vyr(r){var e,t=NE(r),i=t[0],n=t[1],a=new syr(oyr(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=xr[r.charCodeAt(f)]<<18|xr[r.charCodeAt(f+1)]<<12|xr[r.charCodeAt(f+2)]<<6|xr[r.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=xr[r.charCodeAt(f)]<<2|xr[r.charCodeAt(f+1)]>>4,a[u++]=e&255),n===1&&(e=xr[r.charCodeAt(f)]<<10|xr[r.charCodeAt(f+1)]<<4|xr[r.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function fyr(r){return ie[r>>18&63]+ie[r>>12&63]+ie[r>>6&63]+ie[r&63]}function cyr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(fyr(i));return n.join("")}function lyr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(cyr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(ie[e>>2]+ie[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(ie[e>>10]+ie[e>>4&63]+ie[e<<2&63]+"=")),n.join("")}});var SE=s(K1=>{K1.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,g=r[e+l];for(l+=p,a=g&(1<<-c)-1,g>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-v}return(g?-1:1)*u*Math.pow(2,a-i)};K1.write=function(r,e,t,i,n,a){var u,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+g]=o&255,g+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+g]=u&255,g+=h,u/=256,v-=8);r[t+g-h]|=d*128}});var xE=s(Pi=>{"use strict";var r2=OE(),Li=SE(),AE=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Pi.Buffer=w;Pi.SlowBuffer=qyr;Pi.INSPECT_MAX_BYTES=50;var Za=2147483647;Pi.kMaxLength=Za;w.TYPED_ARRAY_SUPPORT=pyr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function pyr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function ge(r){if(r>Za)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return n2(r)}return LE(r,e,t)}w.poolSize=8192;function LE(r,e,t){if(typeof r=="string")return myr(r,e);if(ArrayBuffer.isView(r))return dyr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ne(r,ArrayBuffer)||r&&ne(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ne(r,SharedArrayBuffer)||r&&ne(r.buffer,SharedArrayBuffer)))return t2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=hyr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return LE(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function RE(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function gyr(r,e,t){return RE(r),r<=0?ge(r):e!==void 0?typeof t=="string"?ge(r).fill(e,t):ge(r).fill(e):ge(r)}w.alloc=function(r,e,t){return gyr(r,e,t)};function n2(r){return RE(r),ge(r<0?0:a2(r)|0)}w.allocUnsafe=function(r){return n2(r)};w.allocUnsafeSlow=function(r){return n2(r)};function myr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=PE(r,e)|0,i=ge(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function e2(r){let e=r.length<0?0:a2(r.length)|0,t=ge(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function dyr(r){if(ne(r,Uint8Array)){let e=new Uint8Array(r);return t2(e.buffer,e.byteOffset,e.byteLength)}return e2(r)}function t2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function hyr(r){if(w.isBuffer(r)){let e=a2(r.length)|0,t=ge(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||u2(r.length)?ge(0):e2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return e2(r.data)}function a2(r){if(r>=Za)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Za.toString(16)+" bytes");return r|0}function qyr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(ne(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),ne(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(ne(u,Uint8Array))a+u.length>n.length?(w.isBuffer(u)||(u=w.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(w.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function PE(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ne(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return i2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return GE(r).length;default:if(n)return i?-1:i2(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=PE;function yyr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Iyr(this,e,t);case"utf8":case"utf-8":return ME(this,e,t);case"ascii":return _yr(this,e,t);case"latin1":case"binary":return Tyr(this,e,t);case"base64":return Syr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Lyr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Jt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Jt(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Jt(this,t,t+3),Jt(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Jt(this,t,t+7),Jt(this,t+1,t+6),Jt(this,t+2,t+5),Jt(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?ME(this,0,e):yyr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=Pi.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};AE&&(w.prototype[AE]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(ne(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,f=Math.min(u,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function FE(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,u2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:_E(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):_E(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function _E(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return FE(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return FE(this,e,t,i,!1)};function byr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(u2(o))return u;r[t+u]=o}return u}function wyr(r,e,t,i){return Qa(i2(e,r.length-t),r,t,i)}function Eyr(r,e,t,i){return Qa(Myr(e),r,t,i)}function Nyr(r,e,t,i){return Qa(GE(e),r,t,i)}function Oyr(r,e,t,i){return Qa(Byr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return byr(this,e,t,i);case"utf8":case"utf-8":return wyr(this,e,t,i);case"ascii":case"latin1":case"binary":return Eyr(this,e,t,i);case"base64":return Nyr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Oyr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Syr(r,e,t){return e===0&&t===r.length?r2.fromByteArray(r):r2.fromByteArray(r.slice(e,t))}function ME(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return Ayr(i)}var TE=4096;function Ayr(r){let e=r.length;if(e<=TE)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=TE));return t}function _yr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function Tyr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function Iyr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=jyr[r[a]];return n}function Lyr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function fr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=et(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&On(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});w.prototype.readBigUInt64BE=et(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&On(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};w.prototype.readInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=et(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&On(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=et(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&On(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Li.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Li.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Li.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Li.read(this,e,!1,52,8)};function Er(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;Er(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;Er(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function BE(r,e,t,i,n){UE(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function jE(r,e,t,i,n){UE(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}w.prototype.writeBigUInt64LE=et(function(e,t=0){return BE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=et(function(e,t=0){return jE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);Er(this,e,t,i,f-1,-f)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);Er(this,e,t,i,f-1,-f)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=et(function(e,t=0){return BE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=et(function(e,t=0){return jE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function kE(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function CE(r,e,t,i,n){return e=+e,t=t>>>0,n||kE(r,e,t,4,34028234663852886e22,-34028234663852886e22),Li.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return CE(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return CE(this,e,t,!1,i)};function VE(r,e,t,i,n){return e=+e,t=t>>>0,n||kE(r,e,t,8,17976931348623157e292,-17976931348623157e292),Li.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return VE(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return VE(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=w.isBuffer(e)?e:w.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var Ii={};function s2(r,e,t){Ii[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}s2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);s2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);s2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=IE(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=IE(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function IE(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function Ryr(r,e,t){Ri(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&On(e,r.length-(t+1))}function UE(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Ii.ERR_OUT_OF_RANGE("value",o,r)}Ryr(i,n,a)}function Ri(r,e){if(typeof r!="number")throw new Ii.ERR_INVALID_ARG_TYPE(e,"number",r)}function On(r,e,t){throw Math.floor(r)!==r?(Ri(r,t),new Ii.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ii.ERR_BUFFER_OUT_OF_BOUNDS:new Ii.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var Pyr=/[^+/0-9A-Za-z-_]/g;function Fyr(r){if(r=r.split("=")[0],r=r.trim().replace(Pyr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function i2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Myr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Byr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function GE(r){return r2.toByteArray(Fyr(r))}function Qa(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function ne(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function u2(r){return r!==r}var jyr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function et(r){return typeof BigInt>"u"?kyr:r}function kyr(){throw new Error("BigInt not supported")}});var HE=s((zge,DE)=>{"use strict";var Cyr=xE().Buffer;DE.exports=Cyr});var zE=s((Xge,WE)=>{"use strict";function Vyr(){throw new Error("not implemented")}WE.exports=Vyr});var tt=s((Jge,XE)=>{"use strict";var Uyr=wE(),Gyr=HE(),xyr=zE(),o2;Uyr()?o2=Gyr:o2=xyr;XE.exports=o2});var YE=s((Yge,JE)=>{"use strict";var Dyr=I(),Hyr=tt(),Wyr=Dyr(Hyr.from);JE.exports=Wyr});var ZE=s(($ge,$E)=>{"use strict";var zyr=Vt(),Xyr=y(),Jyr=tt();function Yyr(r){if(!zyr(r))throw new TypeError(Xyr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Jyr.from(r)}$E.exports=Yyr});var KE=s((Zge,QE)=>{"use strict";var $yr=Vt(),Zyr=y(),Qyr=tt();function Kyr(r){if(!$yr(r))throw new TypeError(Zyr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Qyr(r)}QE.exports=Kyr});var eN=s((Qge,rN)=>{"use strict";var rbr=YE(),ebr=ZE(),tbr=KE(),v2;rbr?v2=ebr:v2=tbr;rN.exports=v2});var nN=s((Kge,iN)=>{"use strict";var ibr=li(),nbr=Qr(),abr=ci(),sbr=fi(),ubr=Ut(),obr=Qe(),vbr=pr(),fbr=Zr(),cbr=lr(),tN;function lbr(r){return new ibr(r)}function pbr(r){return new nbr(r)}function gbr(r){return new abr(r)}function mbr(r){return new sbr(r)}function dbr(r){return new ubr(r)}function hbr(r){return new obr(r)}function qbr(r){return new vbr(r)}function ybr(r){return new fbr(r)}function bbr(r){return new cbr(r)}function wbr(){var r={int8array:lbr,uint8array:pbr,uint8clampedarray:gbr,int16array:mbr,uint16array:dbr,int32array:hbr,uint32array:qbr,float32array:ybr,float64array:bbr};return r}tN=wbr();iN.exports=tN});var vN=s((rme,oN)=>{"use strict";var Ka=S(),f2=mr(),aN=Vt(),Ebr=jb(),sN=Na(),Nbr=zb(),Obr=za(),uN=Ti(),Sbr=uE(),Sn=mE(),Abr=zt(),An=$e(),_br=eN(),Tbr=nN();function Ibr(r){var e,t,i,n,a,u,o,f;for(e=[],n=[],o=Object.create(Abr(r)),e.push(r),n.push(o),t=Sbr(r),f=0;f<t.length;f++)i=t[f],a=Sn(r,i),Ka(a,"value")&&(u=f2(r[i])?[]:{},a.value=Yt(r[i],u,e,n,-1)),An(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Lbr(r){var e=[],t=[],i,n,a,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=uN(r),f=0;f<i.length;f++)u=i[f],n=Sn(r,u),Ka(n,"value")&&(a=f2(r[u])?[]:{},n.value=Yt(r[u],a,e,t,-1)),An(o,u,n);return o}function Yt(r,e,t,i,n){var a,u,o,f,v,c,l,p,g,h;if(n-=1,typeof r!="object"||r===null)return r;if(aN(r))return _br(r);if(Ebr(r))return Lbr(r);if(o=sN(r),o==="date")return new Date(+r);if(o==="regexp")return Nbr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=Tbr[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Ibr(r):{};if(u=uN(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=sN(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||aN(p)){a==="object"?(f=Sn(r,c),Ka(f,"value")&&(f.value=Yt(p)),An(e,c,f)):e[c]=Yt(p);continue}if(g=Obr(t,p),g!==-1){e[c]=i[g];continue}l=f2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Yt(p,l,t,i,n):(f=Sn(r,c),Ka(f,"value")&&(f.value=Yt(p,l,t,i,n)),An(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=Sn(r,c),An(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}oN.exports=Yt});var cN=s((eme,fN)=>{"use strict";var Rbr=mr(),Pbr=qr().isPrimitive,Fbr=y(),Mbr=L(),Bbr=vN();function jbr(r,e){var t;if(arguments.length>1){if(!Pbr(e))throw new TypeError(Fbr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=Mbr;return t=Rbr(r)?new Array(r.length):{},Bbr(r,t,[r],[t],e)}fN.exports=jbr});var _n=s((tme,lN)=>{"use strict";var kbr=cN();lN.exports=kbr});var pN=s((ime,Cbr)=>{Cbr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var mN=s((nme,gN)=>{"use strict";var Vbr=_n(),Ubr=pN();function Gbr(){return Vbr(Ubr)}gN.exports=Gbr});var dN=s((ame,xbr)=>{xbr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var qN=s((sme,hN)=>{"use strict";var Dbr=_n(),Hbr=dN();function Wbr(){return Dbr(Hbr)}hN.exports=Wbr});var yN=s((ume,zbr)=>{zbr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var wN=s((ome,bN)=>{"use strict";var Xbr=_n(),Jbr=yN();function Ybr(){return Xbr(Jbr)}bN.exports=Ybr});var EN=s((vme,$br)=>{$br.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var ON=s((fme,NN)=>{"use strict";var Zbr=EN();function Qbr(){return Zbr.slice()}NN.exports=Qbr});var SN=s((cme,Kbr)=>{Kbr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var _N=s((lme,AN)=>{"use strict";var rwr=_n(),ewr=SN();function twr(){return rwr(ewr)}AN.exports=twr});var IN=s((pme,TN)=>{"use strict";var Tn=rr(),iwr=mN(),nwr=qN(),awr=wN(),swr=ON(),uwr=_N();function owr(r){return Tn(r,"AFINN_111",iwr),Tn(r,"AFINN_96",nwr),Tn(r,"ANSCOMBES_QUARTET",awr),Tn(r,"HERNDON_VENUS_SEMIDIAMETERS",swr),Tn(r,"NIGHTINGALES_ROSE",uwr),r}TN.exports=owr});var RN=s((gme,LN)=>{"use strict";function vwr(r,e){return r+e}LN.exports=vwr});var FN=s((mme,PN)=>{"use strict";var fwr=RN();PN.exports=fwr});var BN=s((dme,MN)=>{"use strict";var cwr=L(),lwr=V();function pwr(r){return r===cwr||r===lwr}MN.exports=pwr});var kr=s((hme,jN)=>{"use strict";var gwr=BN();jN.exports=gwr});var VN=s((qme,CN)=>{"use strict";var kN=Ta();function mwr(r){return r>0?kN(r-1):kN(r+1)}CN.exports=mwr});var r0=s((yme,UN)=>{"use strict";var dwr=VN();UN.exports=dwr});var xN=s((bme,GN)=>{"use strict";var hwr=Math.sqrt;GN.exports=hwr});var U=s((wme,DN)=>{"use strict";var qwr=xN();DN.exports=qwr});var WN=s((Eme,HN)=>{"use strict";function ywr(r){return Math.abs(r)}HN.exports=ywr});var Y=s((Nme,zN)=>{"use strict";var bwr=WN();zN.exports=bwr});var JN=s((Ome,XN)=>{"use strict";var wwr=Qr(),Ewr=Ut(),Nwr={uint16:Ewr,uint8:wwr};XN.exports=Nwr});var QN=s((Sme,ZN)=>{"use strict";var YN=JN(),$N;function Owr(){var r,e;return r=new YN.uint16(1),r[0]=4660,e=new YN.uint8(r.buffer),e[0]===52}$N=Owr();ZN.exports=$N});var zr=s((Ame,KN)=>{"use strict";var Swr=QN();KN.exports=Swr});var tO=s((_me,eO)=>{"use strict";var Awr=zr(),rO,c2,l2;Awr===!0?(c2=1,l2=0):(c2=0,l2=1);rO={HIGH:c2,LOW:l2};eO.exports=rO});var p2=s((Tme,sO)=>{"use strict";var _wr=pr(),Twr=lr(),nO=tO(),aO=new Twr(1),iO=new _wr(aO.buffer),Iwr=nO.HIGH,Lwr=nO.LOW;function Rwr(r,e,t,i){return aO[0]=r,e[i]=iO[Iwr],e[i+t]=iO[Lwr],e}sO.exports=Rwr});var oO=s((Ime,uO)=>{"use strict";var Pwr=p2();function Fwr(r){return Pwr(r,[0>>>0,0>>>0],1,0)}uO.exports=Fwr});var Fi=s((Lme,fO)=>{"use strict";var Mwr=b(),vO=oO(),Bwr=p2();Mwr(vO,"assign",Bwr);fO.exports=vO});var lO=s((Rme,cO)=>{"use strict";var jwr=zr(),g2;jwr===!0?g2=0:g2=1;cO.exports=g2});var gO=s((Pme,pO)=>{"use strict";var kwr=pr(),Cwr=lr(),Vwr=lO(),m2=new Cwr(1),Uwr=new kwr(m2.buffer);function Gwr(r,e){return m2[0]=r,Uwr[Vwr]=e>>>0,m2[0]}pO.exports=Gwr});var me=s((Fme,mO)=>{"use strict";var xwr=gO();mO.exports=xwr});var hO=s((Mme,dO)=>{"use strict";function Dwr(r){return r|0}dO.exports=Dwr});var d2=s((Bme,qO)=>{"use strict";var Hwr=hO();qO.exports=Hwr});var ae=s((jme,yO)=>{"use strict";var Wwr=2147483647;yO.exports=Wwr});var h2=s((kme,bO)=>{"use strict";var zwr=2147483648;bO.exports=zwr});var EO=s((Cme,wO)=>{"use strict";var Xwr=zr(),q2;Xwr===!0?q2=1:q2=0;wO.exports=q2});var SO=s((Vme,OO)=>{"use strict";var Jwr=pr(),Ywr=lr(),$wr=EO(),NO=new Ywr(1),Zwr=new Jwr(NO.buffer);function Qwr(r){return NO[0]=r,Zwr[$wr]}OO.exports=Qwr});var ar=s((Ume,AO)=>{"use strict";var Kwr=SO();AO.exports=Kwr});var IO=s((Gme,TO)=>{"use strict";var rEr=zr(),_O,y2,b2;rEr===!0?(y2=1,b2=0):(y2=0,b2=1);_O={HIGH:y2,LOW:b2};TO.exports=_O});var MO=s((xme,FO)=>{"use strict";var eEr=pr(),tEr=lr(),RO=IO(),PO=new tEr(1),LO=new eEr(PO.buffer),iEr=RO.HIGH,nEr=RO.LOW;function aEr(r,e){return LO[iEr]=r,LO[nEr]=e,PO[0]}FO.exports=aEr});var Mi=s((Dme,BO)=>{"use strict";var sEr=MO();BO.exports=sEr});var kO=s((Hme,jO)=>{"use strict";var uEr=h2(),oEr=ae(),vEr=Fi(),fEr=ar(),cEr=Mi(),w2=[0,0];function lEr(r,e){var t,i;return vEr.assign(r,w2,1,0),t=w2[0],t&=oEr,i=fEr(e),i&=uEr,t|=i,cEr(t,w2[1])}jO.exports=lEr});var e0=s((Wme,CO)=>{"use strict";var pEr=kO();CO.exports=pEr});var GO=s((zme,UO)=>{"use strict";var VO=r0(),gEr=e0(),mEr=V(),t0=L();function dEr(r,e){return e===mEr?t0:e===t0?0:e>0?VO(e)?r:0:VO(e)?gEr(t0,r):t0}UO.exports=dEr});var DO=s((Xme,xO)=>{"use strict";var hEr=ae(),qEr=ar(),yEr=1072693247,i0=1e300,n0=1e-300;function bEr(r,e){var t,i;return i=qEr(r),t=i&hEr,t<=yEr?e<0?i0*i0:n0*n0:e>0?i0*i0:n0*n0}xO.exports=bEr});var zO=s((Jme,WO)=>{"use strict";var wEr=Y(),HO=L();function EEr(r,e){return r===-1?(r-r)/(r-r):r===1?1:wEr(r)<1==(e===HO)?0:HO}WO.exports=EEr});var JO=s((Yme,XO)=>{"use strict";var NEr=zr(),E2;NEr===!0?E2=1:E2=0;XO.exports=E2});var $O=s(($me,YO)=>{"use strict";var OEr=pr(),SEr=lr(),AEr=JO(),N2=new SEr(1),_Er=new OEr(N2.buffer);function TEr(r,e){return N2[0]=r,_Er[AEr]=e>>>0,N2[0]}YO.exports=TEr});var de=s((Zme,ZO)=>{"use strict";var IEr=$O();ZO.exports=IEr});var se=s((Qme,QO)=>{"use strict";var LEr=1023;QO.exports=LEr});var rS=s((Kme,KO)=>{"use strict";function REr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}KO.exports=REr});var nS=s((rde,iS)=>{"use strict";var PEr=ar(),a0=me(),eS=de(),FEr=se(),MEr=rS(),BEr=1048575,tS=1048576,jEr=1072693248,kEr=536870912,CEr=524288,VEr=20,UEr=9007199254740992,GEr=.9617966939259756,xEr=.9617967009544373,DEr=-7028461650952758e-24,HEr=[1,1.5],WEr=[0,.5849624872207642],zEr=[0,1350039202129749e-23];function XEr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,H,K,G;return H=0,t<tS&&(e*=UEr,H-=53,t=PEr(e)),H+=(t>>VEr)-FEr|0,K=t&BEr|0,t=K|jEr|0,K<=235662?G=0:K<767610?G=1:(G=0,H+=1,t-=tS),e=eS(e,t),c=HEr[G],F=e-c,A=1/(e+c),n=F*A,u=a0(n,0),i=(t>>1|kEr)+CEr,i+=G<<18,f=eS(0,i),v=e-(f-c),o=A*(F-u*f-u*v),a=n*n,O=a*a*MEr(a),O+=o*(u+n),a=u*u,f=3+a+O,f=a0(f,0),v=O-(f-3-a),F=u*f,A=o*f+v*n,p=F+A,p=a0(p,0),g=A-(p-F),h=xEr*p,d=DEr*p+g*GEr+zEr[G],l=WEr[G],N=H,m=h+d+l+N,m=a0(m,0),q=d-(m-N-l-h),r[0]=m,r[1]=q,r}iS.exports=XEr});var sS=s((ede,aS)=>{"use strict";function JEr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}aS.exports=JEr});var oS=s((tde,uS)=>{"use strict";var YEr=me(),$Er=sS(),ZEr=1.4426950408889634,QEr=1.4426950216293335,KEr=19259629911266175e-24;function rNr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*$Er(n),u=QEr*n,o=n*KEr-a*ZEr,i=u+o,i=YEr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}uS.exports=rNr});var O2=s((ide,vS)=>{"use strict";var eNr=1023;vS.exports=eNr});var cS=s((nde,fS)=>{"use strict";var tNr=-1023;fS.exports=tNr});var S2=s((ade,lS)=>{"use strict";var iNr=-1074;lS.exports=iNr});var A2=s((sde,pS)=>{"use strict";var nNr=22250738585072014e-324;pS.exports=nNr});var _2=s((ude,gS)=>{"use strict";var aNr=A2(),sNr=kr(),uNr=E(),oNr=Y(),vNr=4503599627370496;function fNr(r,e,t,i){return uNr(r)||sNr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&oNr(r)<aNr?(e[i]=r*vNr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}gS.exports=fNr});var dS=s((ode,mS)=>{"use strict";var cNr=_2();function lNr(r){return cNr(r,[0,0],1,0)}mS.exports=lNr});var yS=s((vde,qS)=>{"use strict";var pNr=b(),hS=dS(),gNr=_2();pNr(hS,"assign",gNr);qS.exports=hS});var In=s((fde,bS)=>{"use strict";var mNr=2146435072;bS.exports=mNr});var ES=s((cde,wS)=>{"use strict";var dNr=ar(),hNr=In(),qNr=se();function yNr(r){var e=dNr(r);return e=(e&hNr)>>>20,e-qNr|0}wS.exports=yNr});var OS=s((lde,NS)=>{"use strict";var bNr=ES();NS.exports=bNr});var AS=s((pde,SS)=>{"use strict";var wNr=L(),ENr=V(),NNr=se(),ONr=O2(),SNr=cS(),ANr=S2(),_Nr=E(),TNr=kr(),INr=e0(),LNr=yS().assign,RNr=OS(),PNr=Fi(),FNr=Mi(),MNr=2220446049250313e-31,BNr=2148532223>>>0,T2=[0,0],I2=[0,0];function jNr(r,e){var t,i;return e===0||r===0||_Nr(r)||TNr(r)?r:(LNr(r,T2,1,0),r=T2[0],e+=T2[1],e+=RNr(r),e<ANr?INr(0,r):e>ONr?r<0?ENr:wNr:(e<=SNr?(e+=52,i=MNr):i=1,PNr.assign(r,I2,1,0),t=I2[0],t&=BNr,t|=e+NNr<<20,i*FNr(t,I2[1])))}SS.exports=jNr});var s0=s((gde,_S)=>{"use strict";var kNr=AS();_S.exports=kNr});var u0=s((mde,TS)=>{"use strict";var CNr=.6931471805599453;TS.exports=CNr});var o0=s((dde,IS)=>{"use strict";var VNr=1048575;IS.exports=VNr});var RS=s((hde,LS)=>{"use strict";function UNr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}LS.exports=UNr});var CS=s((qde,kS)=>{"use strict";var GNr=ar(),PS=de(),xNr=me(),DNr=d2(),HNr=s0(),WNr=u0(),FS=se(),MS=ae(),BS=o0(),zNr=RS(),jS=1048576,XNr=1071644672,Ln=20,JNr=.6931471824645996,YNr=-1904654299957768e-24;function $Nr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g;return p=r&MS|0,g=(p>>Ln)-FS|0,l=0,p>XNr&&(l=r+(jS>>g+1)>>>0,g=((l&MS)>>Ln)-FS|0,i=(l&~(BS>>g))>>>0,a=PS(0,i),l=(l&BS|jS)>>Ln-g>>>0,r<0&&(l=-l),e-=a),a=t+e,a=xNr(a,0),o=a*JNr,f=(t-(a-e))*WNr+a*YNr,c=o+f,v=f-(c-o),a=c*c,n=c-a*zNr(a),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=GNr(c),r=DNr(r),r+=l<<Ln>>>0,r>>Ln<=0?c=HNr(c,l):c=PS(c,r),c}kS.exports=$Nr});var YS=s((yde,JS)=>{"use strict";var VS=E(),US=r0(),GS=kr(),ZNr=hr(),xS=U(),QNr=Y(),L2=Fi(),KNr=me(),DS=d2(),rOr=V(),eOr=L(),R2=ae(),tOr=GO(),iOr=DO(),nOr=zO(),aOr=nS(),sOr=oS(),uOr=CS(),oOr=1072693247,vOr=1105199104,fOr=1139802112,HS=1083179008,cOr=1072693248,lOr=1083231232,pOr=3230714880>>>0,WS=31,it=1e300,nt=1e-300,gOr=8008566259537294e-32,he=[0,0],zS=[0,0];function XS(r,e){var t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q;if(VS(r)||VS(e))return NaN;if(L2.assign(e,he,1,0),o=he[0],f=he[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return xS(r);if(e===-.5)return 1/xS(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(GS(e))return nOr(r,e)}if(L2.assign(r,he,1,0),a=he[0],u=he[1],u===0){if(a===0)return tOr(r,e);if(r===1)return 1;if(r===-1&&US(e))return-1;if(GS(r))return r===rOr?XS(-0,-e):e<0?0:eOr}if(r<0&&ZNr(e)===!1)return(r-r)/(r-r);if(n=QNr(r),t=a&R2|0,i=o&R2|0,v=a>>>WS|0,c=o>>>WS|0,v&&US(e)?v=-1:v=1,i>vOr){if(i>fOr)return iOr(r,e);if(t<oOr)return c===1?v*it*it:v*nt*nt;if(t>cOr)return c===0?v*it*it:v*nt*nt;h=sOr(zS,n)}else h=aOr(zS,n,t);if(l=KNr(e,0),g=(e-l)*h[0]+e*h[1],p=l*h[0],d=g+p,L2.assign(d,he,1,0),m=DS(he[0]),q=DS(he[1]),m>=HS){if((m-HS|q)!==0||g+gOr>d-p)return v*it*it}else if((m&R2)>=lOr&&((m-pOr|q)!==0||g<=d-p))return v*nt*nt;return d=uOr(m,p,g),v*d}JS.exports=XS});var D=s((bde,$S)=>{"use strict";var mOr=YS();$S.exports=mOr});var Bi=s((wde,ZS)=>{"use strict";var dOr=9007199254740991;ZS.exports=dOr});var v0=s((Ede,QS)=>{"use strict";var hOr=308;QS.exports=hOr});var P2=s((Nde,KS)=>{"use strict";var qOr=-308;KS.exports=qOr});var f0=s((Ode,rA)=>{"use strict";var yOr=-324;rA.exports=yOr});var uA=s((Sde,sA)=>{"use strict";var eA=E(),c0=kr(),tA=D(),bOr=Y(),iA=z(),wOr=Bi(),nA=v0(),EOr=P2(),NOr=f0(),OOr=V(),SOr=wOr+1,aA=1e308;function AOr(r,e){var t,i;return eA(r)||eA(e)||c0(e)?NaN:c0(r)||r===0||e<NOr||bOr(r)>SOr&&e<=0?r:e>nA?r>=0?0:OOr:e<EOr?(t=tA(10,-(e+nA)),i=r*aA*t,c0(i)?r:iA(i)/aA/t):(t=tA(10,-e),i=r*t,c0(i)?r:iA(i)/t)}sA.exports=AOr});var vA=s((Ade,oA)=>{"use strict";var _Or=uA();oA.exports=_Or});var cA=s((_de,fA)=>{"use strict";function TOr(r,e){return r*e}fA.exports=TOr});var pA=s((Tde,lA)=>{"use strict";var IOr=cA();lA.exports=IOr});var mA=s((Ide,gA)=>{"use strict";function LOr(r,e){return r-e}gA.exports=LOr});var hA=s((Lde,dA)=>{"use strict";var ROr=mA();dA.exports=ROr});var yA=s((Rde,qA)=>{"use strict";var Rn=rr(),POr=FN(),FOr=vA(),MOr=pA(),BOr=D(),jOr=hA();function kOr(r){return Rn(r,"add",POr),Rn(r,"floorn",FOr),Rn(r,"mul",MOr),Rn(r,"pow",BOr),Rn(r,"sub",jOr),r}qA.exports=kOr});var NA=s((Pde,EA)=>{"use strict";var bA=k().isPrimitive,COr=L(),VOr=V(),wA=y();function UOr(r,e){return t;function t(i,n){var a;if(!bA(i)){if(e.nonnumeric===void 0)throw new TypeError(wA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!bA(n)){if(e.nonnumeric===void 0)throw new TypeError(wA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===COr?e.pinf:a===VOr?e.ninf:a}}EA.exports=UOr});var F2=s((Fde,OA)=>{"use strict";var GOr=NA();OA.exports=GOr});var AA=s((Mde,SA)=>{"use strict";var xOr=wa(),DOr=uo(),HOr=Ha(),WOr=y(),zOr=Da(),XOr=F2(),JOr=["number","number"],YOr=["First argument","Second argument"];function $Or(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(WOr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=zOr([r[0],r[1]],JOr,YOr),t=xOr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=HOr(t),a=XOr(e,i),r[0].push(n),r[1].push(t),DOr(r[0],r[1],a),n}SA.exports=$Or});var TA=s((Bde,_A)=>{"use strict";var ZOr=AA();_A.exports=ZOr});var LA=s((jde,IA)=>{"use strict";var QOr=k().isPrimitive,KOr=L(),rSr=V(),eSr=y();function tSr(r,e){return t;function t(i){var n;if(!QOr(i)){if(e.nonnumeric===void 0)throw new TypeError(eSr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===KOr?e.pinf:n===rSr?e.ninf:n}}IA.exports=tSr});var M2=s((kde,RA)=>{"use strict";var iSr=LA();RA.exports=iSr});var FA=s((Cde,PA)=>{"use strict";var B2=k().isPrimitive,nSr=L(),aSr=V(),j2=y();function sSr(r,e){return t;function t(i,n,a){var u;if(!B2(i)){if(e.nonnumeric===void 0)throw new TypeError(j2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!B2(n)){if(e.nonnumeric===void 0)throw new TypeError(j2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!B2(a)){if(e.nonnumeric===void 0)throw new TypeError(j2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===nSr?e.pinf:u===aSr?e.ninf:u}}PA.exports=sSr});var k2=s((Vde,MA)=>{"use strict";var uSr=FA();MA.exports=uSr});var jA=s((Ude,BA)=>{"use strict";var l0=k().isPrimitive,oSr=L(),vSr=V(),p0=y();function fSr(r,e){return t;function t(i,n,a,u){var o;if(!l0(i)){if(e.nonnumeric===void 0)throw new TypeError(p0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!l0(n)){if(e.nonnumeric===void 0)throw new TypeError(p0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!l0(a)){if(e.nonnumeric===void 0)throw new TypeError(p0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!l0(u)){if(e.nonnumeric===void 0)throw new TypeError(p0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===oSr?e.pinf:o===vSr?e.ninf:o}}BA.exports=fSr});var CA=s((Gde,kA)=>{"use strict";var cSr=jA();kA.exports=cSr});var UA=s((xde,VA)=>{"use strict";var Pn=k().isPrimitive,lSr=L(),pSr=V(),Fn=y();function gSr(r,e){return t;function t(i,n,a,u,o){var f;if(!Pn(i)){if(e.nonnumeric===void 0)throw new TypeError(Fn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Pn(n)){if(e.nonnumeric===void 0)throw new TypeError(Fn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Pn(a)){if(e.nonnumeric===void 0)throw new TypeError(Fn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Pn(u)){if(e.nonnumeric===void 0)throw new TypeError(Fn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Pn(o)){if(e.nonnumeric===void 0)throw new TypeError(Fn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,a,u,o),f!==f?e.nan:f===lSr?e.pinf:f===pSr?e.ninf:f}}VA.exports=gSr});var xA=s((Dde,GA)=>{"use strict";var mSr=UA();GA.exports=mSr});var HA=s((Hde,DA)=>{"use strict";var dSr=wa(),hSr=vo(),qSr=Ha(),ySr=y(),bSr=Da(),wSr=k2(),ESr=["number","number","number"],NSr=["First argument","Second argument","Third argument"];function OSr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(ySr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=bSr([r[0],r[1],r[2]],ESr,NSr),t=dSr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=qSr(t),a=wSr(e,i),r[0].push(n),r[1].push(t),hSr(r[0],r[1],a),n}DA.exports=OSr});var zA=s((Wde,WA)=>{"use strict";var SSr=HA();WA.exports=SSr});var JA=s((zde,XA)=>{"use strict";var ASr=mr(),_Sr=m1(),TSr=y(),ISr=M2();function LSr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(TSr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=ISr(e,i),ASr(t)?(_Sr([t,t],[t.length,t[0].length],n),t):n(t)}XA.exports=LSr});var $A=s((Xde,YA)=>{"use strict";var RSr=JA();YA.exports=RSr});var QA=s((Jde,ZA)=>{"use strict";var at=rr(),PSr=TA(),FSr=M2(),MSr=F2(),BSr=k2(),jSr=CA(),kSr=xA(),CSr=zA(),VSr=$A();function USr(r){return at(r,"binary",PSr),at(r,"d_d",FSr),at(r,"dd_d",MSr),at(r,"ddd_d",BSr),at(r,"dddd_d",jSr),at(r,"ddddd_d",kSr),at(r,"ternary",CSr),at(r,"unary",VSr),r}ZA.exports=USr});var r_=s((Yde,KA)=>{"use strict";function GSr(r){return r*r}KA.exports=GSr});var g0=s(($de,e_)=>{"use strict";var xSr=r_();e_.exports=xSr});var m0=s((Zde,t_)=>{"use strict";var DSr=.7853981633974483;t_.exports=DSr});var n_=s((Qde,i_)=>{"use strict";function HSr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}i_.exports=HSr});var s_=s((Kde,a_)=>{"use strict";function WSr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}a_.exports=WSr});var v_=s((rhe,o_)=>{"use strict";var zSr=E(),XSr=U(),u_=m0(),JSr=n_(),YSr=s_(),$Sr=6123233995736766e-32;function ZSr(r){var e,t,i,n,a;if(zSr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*YSr(t),t=XSr(t+t),a=u_-t,t=t*n-$Sr,a-=t,a+=u_;else{if(i<1e-8)return r;t=i*i,a=t*JSr(t),a=i*a+i}return e?-a:a}o_.exports=ZSr});var $t=s((ehe,f_)=>{"use strict";var QSr=v_();f_.exports=QSr});var g_=s((the,p_)=>{"use strict";var KSr=E(),c_=$t(),rAr=U(),l_=m0(),eAr=6123233995736766e-32;function tAr(r){var e;return KSr(r)?NaN:r<-1||r>1?NaN:r>.5?2*c_(rAr(.5-.5*r)):(e=l_-c_(r),e+=eAr,e+=l_,e)}p_.exports=tAr});var Mn=s((ihe,m_)=>{"use strict";var iAr=g_();m_.exports=iAr});var h_=s((nhe,d_)=>{"use strict";function nAr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}d_.exports=nAr});var E_=s((ahe,w_)=>{"use strict";var aAr=E(),q_=ar(),y_=de(),sAr=L(),uAr=V(),b_=se(),oAr=h_(),C2=.6931471803691238,V2=19082149292705877e-26,vAr=.41421356237309503,fAr=-.2928932188134525,cAr=1862645149230957e-24,lAr=5551115123125783e-32,pAr=9007199254740992,gAr=.6666666666666666;function mAr(r){var e,t,i,n,a,u,o,f,v,c;if(r<-1||aAr(r))return NaN;if(r===-1)return uAr;if(r===sAr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<vAr){if(i<cAr)return i<lAr?r:r-r*r*.5;r>fAr&&(c=0,n=r,t=1)}return c!==0&&(i<pAr?(v=1+r,t=q_(v),c=(t>>20)-b_,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=q_(v),c=(t>>20)-b_,a=0),t&=1048575,t<434334?v=y_(v,t|1072693248):(c+=1,v=y_(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*V2,c*C2+a):(f=e*(1-gAr*n),c*C2-(f-(c*V2+a)-n)):(u=n/(2+n),o=u*u,f=o*oAr(o),c===0?n-(e-u*(e+f)):c*C2-(e-(u*(e+f)+(c*V2+a))-n))}w_.exports=mAr});var st=s((she,N_)=>{"use strict";var dAr=E_();N_.exports=dAr});var S_=s((uhe,O_)=>{"use strict";function hAr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}O_.exports=hAr});var __=s((ohe,A_)=>{"use strict";function qAr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}A_.exports=qAr});var R_=s((vhe,L_)=>{"use strict";var T_=ar(),yAr=de(),bAr=E(),wAr=se(),EAr=V(),NAr=S_(),OAr=__(),d0=.6931471803691238,h0=19082149292705877e-26,SAr=0x40000000000000,AAr=.3333333333333333,I_=1048575,_Ar=2146435072,TAr=1048576,IAr=1072693248;function LAr(r){var e,t,i,n,a,u,o,f,v,c,l,p;return r===0?EAr:bAr(r)||r<0?NaN:(t=T_(r),a=0,t<TAr&&(a-=54,r*=SAr,t=T_(r)),t>=_Ar?r+r:(a+=(t>>20)-wAr|0,t&=I_,f=t+614244&1048576|0,r=yAr(r,t|f^IAr),a+=f>>20|0,o=r-1,(I_&2+t)<3?o===0?a===0?0:a*d0+a*h0:(u=o*o*(.5-AAr*o),a===0?o-u:a*d0-(u-a*h0-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*NAr(l),i=p*OAr(l),f|=v,u=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*d0-(e-(c*(e+u)+a*h0)-o)):a===0?o-c*(o-u):a*d0-(c*(o-u)-a*h0-o))))}L_.exports=LAr});var P=s((fhe,P_)=>{"use strict";var RAr=R_();P_.exports=RAr});var j_=s((che,B_)=>{"use strict";var PAr=E(),FAr=st(),F_=U(),MAr=u0(),M_=P(),BAr=1<<28;function jAr(r){var e;return PAr(r)||r<1?NaN:r===1?0:r>=BAr?M_(r)+MAr:r>2?M_(2*r-1/(r+F_(r*r-1))):(e=r-1,FAr(e+F_(2*e+e*e)))}B_.exports=jAr});var C_=s((lhe,k_)=>{"use strict";var kAr=j_();k_.exports=kAr});var q0=s((phe,V_)=>{"use strict";var CAr=1.5707963267948966;V_.exports=CAr});var G_=s((ghe,U_)=>{"use strict";function VAr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}U_.exports=VAr});var D_=s((mhe,x_)=>{"use strict";function UAr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}x_.exports=UAr});var z_=s((dhe,W_)=>{"use strict";var GAr=E(),xAr=L(),U2=q0(),DAr=m0(),HAr=V(),WAr=G_(),zAr=D_(),H_=6123233995736766e-32,XAr=2.414213562373095;function JAr(r){var e,t,i,n;return GAr(r)||r===0?r:r===xAr?U2:r===HAr?-U2:(r<0&&(t=!0,r=-r),e=0,r>XAr?(i=U2,e=1,r=-(1/r)):r<=.66?i=0:(i=DAr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*WAr(n)/zAr(n),n=r*n+r,e===2?n+=.5*H_:e===1&&(n+=H_),i+=n,t?-i:i)}W_.exports=JAr});var y0=s((hhe,X_)=>{"use strict";var YAr=z_();X_.exports=YAr});var Y_=s((qhe,J_)=>{"use strict";var $Ar=y0();function ZAr(r){return $Ar(1/r)}J_.exports=ZAr});var Z_=s((yhe,$_)=>{"use strict";var QAr=Y_();$_.exports=QAr});var K_=s((bhe,Q_)=>{"use strict";var KAr=$t();function r_r(r){return KAr(1+r)}Q_.exports=r_r});var eT=s((whe,rT)=>{"use strict";var e_r=K_();rT.exports=e_r});var iT=s((Ehe,tT)=>{"use strict";var t_r=$t();function i_r(r){return t_r(1-r)}tT.exports=i_r});var aT=s((Nhe,nT)=>{"use strict";var n_r=iT();nT.exports=n_r});var uT=s((Ohe,sT)=>{"use strict";var a_r=$t();function s_r(r){return a_r(1/r)}sT.exports=s_r});var vT=s((She,oT)=>{"use strict";var u_r=uT();oT.exports=u_r});var pT=s((Ahe,lT)=>{"use strict";var o_r=kr(),v_r=E(),f_r=st(),fT=U(),c_r=u0(),cT=P(),l_r=1/(1<<28),p_r=1<<28;function g_r(r){var e,t,i;return v_r(r)||o_r(r)?r:(r<0&&(r=-r,e=!0),r<l_r?i=r:r>p_r?i=cT(r)+c_r:r>2?i=cT(2*r+1/(fT(r*r+1)+r)):(t=r*r,i=f_r(r+t/(1+fT(1+t)))),e?-i:i)}lT.exports=g_r});var G2=s((_he,gT)=>{"use strict";var m_r=pT();gT.exports=m_r});var dT=s((The,mT)=>{"use strict";var d_r=G2();function h_r(r){return d_r(1/r)}mT.exports=h_r});var qT=s((Ihe,hT)=>{"use strict";var q_r=dT();hT.exports=q_r});var bT=s((Lhe,yT)=>{"use strict";var y_r=Mn(),b_r=U();function w_r(r){return 2*y_r(b_r(r))}yT.exports=w_r});var ET=s((Rhe,wT)=>{"use strict";var E_r=bT();wT.exports=E_r});var OT=s((Phe,NT)=>{"use strict";var N_r=$t(),O_r=U();function S_r(r){return 2*N_r(O_r(r))}NT.exports=S_r});var AT=s((Fhe,ST)=>{"use strict";var A_r=OT();ST.exports=A_r});var IT=s((Mhe,TT)=>{"use strict";var __r=E(),_T=st(),T_r=L(),I_r=V(),L_r=1/(1<<28);function R_r(r){var e,t;return __r(r)||r<-1||r>1?NaN:r===1?T_r:r===-1?I_r:(r<0&&(e=!0,r=-r),r<L_r?e?-r:r:(r<.5?(t=r+r,t=.5*_T(t+t*r/(1-r))):t=.5*_T((r+r)/(1-r)),e?-t:t))}TT.exports=R_r});var RT=s((Bhe,LT)=>{"use strict";var P_r=IT();LT.exports=P_r});var FT=s((jhe,PT)=>{"use strict";var F_r=Mn();function M_r(r){return F_r(1+r)}PT.exports=M_r});var BT=s((khe,MT)=>{"use strict";var B_r=FT();MT.exports=B_r});var kT=s((Che,jT)=>{"use strict";var j_r=Mn();function k_r(r){return j_r(1-r)}jT.exports=k_r});var VT=s((Vhe,CT)=>{"use strict";var C_r=kT();CT.exports=C_r});var GT=s((Uhe,UT)=>{"use strict";var V_r=z();function U_r(r){return V_r(r)===r&&r>=0}UT.exports=U_r});var x2=s((Ghe,xT)=>{"use strict";var G_r=GT();xT.exports=G_r});var DT=s((xhe,x_r)=>{x_r.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var WT=s((Dhe,HT)=>{"use strict";var D_r=x2(),H_r=E(),W_r=r0(),z_r=V(),X_r=L(),J_r=DT(),Y_r=258;function $_r(r){return H_r(r)||!D_r(r)?NaN:W_r(r)?0:r>Y_r?r/2&1?X_r:z_r:J_r[r/2]}HT.exports=$_r});var XT=s((Hhe,zT)=>{"use strict";var Z_r=WT();zT.exports=Z_r});var YT=s((Whe,JT)=>{"use strict";var Q_r=zr(),D2;Q_r===!0?D2=0:D2=1;JT.exports=D2});var QT=s((zhe,ZT)=>{"use strict";var K_r=pr(),rTr=lr(),eTr=YT(),$T=new rTr(1),tTr=new K_r($T.buffer);function iTr(r){return $T[0]=r,tTr[eTr]}ZT.exports=iTr});var rI=s((Xhe,KT)=>{"use strict";var nTr=QT();KT.exports=nTr});var aI=s((Jhe,nI)=>{"use strict";var aTr=z(),b0=s0(),N0=Ze(),tI=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],sTr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],H2=16777216,W2=5960464477539063e-23,w0=N0(20),eI=N0(20),E0=N0(20),gr=N0(20);function iI(r,e,t,i,n,a,u,o,f){var v,c,l,p,g,h,d,m,q;for(p=a,q=i[t],m=t,g=0;m>0;g++)c=W2*q|0,gr[g]=q-H2*c|0,q=i[m-1]+c,m-=1;if(q=b0(q,n),q-=8*aTr(q*.125),d=q|0,q-=d,l=0,n>0?(g=gr[t-1]>>24-n,d+=g,gr[t-1]-=g<<24-n,l=gr[t-1]>>23-n):n===0?l=gr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,v=0,g=0;g<t;g++)m=gr[g],v===0?m!==0&&(v=1,gr[g]=16777216-m):gr[g]=16777215-m;if(n>0)switch(n){case 1:gr[t-1]&=8388607;break;case 2:gr[t-1]&=4194303;break}l===2&&(q=1-q,v!==0&&(q-=b0(1,n)))}if(q===0){for(m=0,g=t-1;g>=a;g--)m|=gr[g];if(m===0){for(h=1;gr[a-h]===0;h++);for(g=t+1;g<=t+h;g++){for(f[o+g]=tI[u+g],c=0,m=0;m<=o;m++)c+=r[m]*f[o+(g-m)];i[g]=c}return t+=h,iI(r,e,t,i,n,a,u,o,f)}}if(q===0)for(t-=1,n-=24;gr[t]===0;)t-=1,n-=24;else q=b0(q,-n),q>=H2?(c=W2*q|0,gr[t]=q-H2*c|0,t+=1,n+=24,gr[t]=c):gr[t]=q|0;for(c=b0(1,n),g=t;g>=0;g--)i[g]=c*gr[g],c*=W2;for(g=t;g>=0;g--){for(c=0,h=0;h<=p&&h<=t-g;h++)c+=sTr[h]*i[g+h];E0[t-g]=c}for(c=0,g=t;g>=0;g--)c+=E0[g];for(l===0?e[0]=c:e[0]=-c,c=E0[0]-c,g=1;g<=t;g++)c+=E0[g];return l===0?e[1]=c:e[1]=-c,d&7}function uTr(r,e,t,i){var n,a,u,o,f,v,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?w0[c]=0:w0[c]=tI[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*w0[o+(c-l)];eI[c]=n}return f=a,iI(r,e,f,eI,v,a,u,o,w0)}nI.exports=uTr});var uI=s((Yhe,sI)=>{"use strict";var oTr=Math.round;sI.exports=oTr});var z2=s(($he,oI)=>{"use strict";var vTr=uI();oI.exports=vTr});var lI=s((Zhe,cI)=>{"use strict";var fTr=z2(),vI=ar(),cTr=.6366197723675814,lTr=1.5707963267341256,pTr=6077100506506192e-26,gTr=6077100506303966e-26,mTr=20222662487959506e-37,dTr=20222662487111665e-37,hTr=84784276603689e-45,fI=2047;function qTr(r,e,t){var i,n,a,u,o,f,v;return n=fTr(r*cTr),u=r-n*lTr,o=n*pTr,v=e>>20|0,t[0]=u-o,i=vI(t[0]),f=v-(i>>20&fI),f>16&&(a=u,o=n*gTr,u=a-o,o=n*mTr-(a-u-o),t[0]=u-o,i=vI(t[0]),f=v-(i>>20&fI),f>49&&(a=u,o=n*dTr,u=a-o,o=n*hTr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}cI.exports=qTr});var gI=s((Qhe,pI)=>{"use strict";var yTr=ae(),bTr=In(),wTr=o0(),ETr=ar(),NTr=rI(),OTr=Mi(),STr=aI(),O0=lI(),ATr=0,_Tr=16777216,ut=1.5707963267341256,Zt=6077100506506192e-26,S0=2*Zt,A0=3*Zt,_0=4*Zt,TTr=598523,ITr=1072243195,LTr=1073928572,RTr=1074752122,PTr=1074977148,FTr=1075183036,MTr=1075388923,BTr=1075594811,jTr=1094263291,Bn=[0,0,0],jn=[0,0];function kTr(r,e){var t,i,n,a,u,o,f,v;if(n=ETr(r),a=n&yTr|0,a<=ITr)return e[0]=r,e[1]=0,0;if(a<=RTr)return(a&wTr)===TTr?O0(r,a,e):a<=LTr?r>0?(v=r-ut,e[0]=v-Zt,e[1]=v-e[0]-Zt,1):(v=r+ut,e[0]=v+Zt,e[1]=v-e[0]+Zt,-1):r>0?(v=r-2*ut,e[0]=v-S0,e[1]=v-e[0]-S0,2):(v=r+2*ut,e[0]=v+S0,e[1]=v-e[0]+S0,-2);if(a<=BTr)return a<=FTr?a===PTr?O0(r,a,e):r>0?(v=r-3*ut,e[0]=v-A0,e[1]=v-e[0]-A0,3):(v=r+3*ut,e[0]=v+A0,e[1]=v-e[0]+A0,-3):a===MTr?O0(r,a,e):r>0?(v=r-4*ut,e[0]=v-_0,e[1]=v-e[0]-_0,4):(v=r+4*ut,e[0]=v+_0,e[1]=v-e[0]+_0,-4);if(a<jTr)return O0(r,a,e);if(a>=bTr)return e[0]=NaN,e[1]=NaN,0;for(t=NTr(r),i=(a>>20)-1046,v=OTr(a-(i<<20|0),t),o=0;o<2;o++)Bn[o]=v|0,v=(v-Bn[o])*_Tr;for(Bn[2]=v,u=3;Bn[u-1]===ATr;)u-=1;return f=STr(Bn,jn,i,u,1),r<0?(e[0]=-jn[0],e[1]=-jn[1],-f):(e[0]=jn[0],e[1]=jn[1],f)}pI.exports=kTr});var kn=s((Khe,mI)=>{"use strict";var CTr=gI();mI.exports=CTr});var qI=s((rqe,hI)=>{"use strict";var dI=-.16666666666666632,VTr=.00833333333332249,UTr=-.0001984126982985795,GTr=27557313707070068e-22,xTr=-25050760253406863e-24,DTr=158969099521155e-24,HTr=.0416666666666666,WTr=-.001388888888887411,zTr=2480158728947673e-20,XTr=-27557314351390663e-23,JTr=2087572321298175e-24,YTr=-11359647557788195e-27;function $Tr(r,e,t,i,n){var a,u,o,f,v;return v=r*r,f=v*v,u=VTr+v*(UTr+v*GTr)+v*f*(xTr+v*DTr),o=v*r,e===0?t[n]=r+o*(dI+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*dI),u=v*(HTr+v*(WTr+v*zTr)),u+=f*f*(XTr+v*(JTr+v*YTr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*u-r*e)),t}hI.exports=$Tr});var J2=s((eqe,bI)=>{"use strict";var ZTr=ae(),QTr=In(),KTr=ar(),rIr=kn(),yI=qI(),eIr=1072243195,tIr=1044381696,X2=[0,0];function iIr(r,e,t,i){var n,a;if(n=KTr(r),n&=ZTr,n<=eIr)return n<tIr&&(r|0)===0&&(e[i]=r,e[i+t]=0),yI(r,0,e,t,i);if(n>=QTr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=rIr(r,X2),yI(X2[0],X2[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}bI.exports=iIr});var EI=s((tqe,wI)=>{"use strict";var nIr=J2();function aIr(r){return nIr(r,[0,0],1,0)}wI.exports=aIr});var Cn=s((iqe,OI)=>{"use strict";var sIr=b(),NI=EI(),uIr=J2();sIr(NI,"assign",uIr);OI.exports=NI});var AI=s((nqe,SI)=>{"use strict";function oIr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}SI.exports=oIr});var TI=s((aqe,_I)=>{"use strict";function vIr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}_I.exports=vIr});var LI=s((sqe,II)=>{"use strict";function fIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}II.exports=fIr});var PI=s((uqe,RI)=>{"use strict";function cIr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}RI.exports=cIr});var MI=s((oqe,FI)=>{"use strict";var lIr=U(),pIr=Cn().assign,gIr=L(),mIr=AI(),dIr=TI(),hIr=LI(),qIr=PI(),yIr=.5641895835477563,bIr=2.404825557695773,wIr=5.520078110286311,EIr=616,NIr=-.0014244423042272315,OIr=1413,SIr=.0005468602863106496,Vn=[0,0];function AIr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===gIr?0:r===0?1:r<=4?(a=r*r,n=mIr(a),u=(r+bIr)*(r-EIr/256-NIr),u*n):r<=8?(a=1-r*r/64,n=dIr(a),u=(r+wIr)*(r-OIr/256-SIr),u*n):(a=8/r,i=a*a,e=hIr(i),t=qIr(i),u=yIr/lIr(r),pIr(r,Vn,1,0),u*(e*(Vn[1]+Vn[0])-a*t*(Vn[0]-Vn[1])))}FI.exports=AIr});var Y2=s((vqe,BI)=>{"use strict";var _Ir=MI();BI.exports=_Ir});var T0=s((fqe,jI)=>{"use strict";var TIr=1.772453850905516;jI.exports=TIr});var CI=s((cqe,kI)=>{"use strict";function IIr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}kI.exports=IIr});var UI=s((lqe,VI)=>{"use strict";function LIr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}VI.exports=LIr});var xI=s((pqe,GI)=>{"use strict";function RIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}GI.exports=RIr});var HI=s((gqe,DI)=>{"use strict";function PIr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}DI.exports=PIr});var zI=s((mqe,WI)=>{"use strict";var FIr=U(),MIr=Y(),BIr=Cn().assign,jIr=L(),kIr=T0(),CIr=CI(),VIr=UI(),UIr=xI(),GIr=HI(),xIr=3.8317059702075125,DIr=7.015586669815619,HIr=981,WIr=-.0003252797924876844,zIr=1796,XIr=-38330184381246464e-21,Un=[0,0];function JIr(r){var e,t,i,n,a,u,o,f;return f=MIr(r),r===0||f===jIr?0:(f<=4?(u=r*r,a=CIr(u),o=f*(f+xIr)*(f-HIr/256-WIr),e=o*a):f<=8?(u=r*r,a=VIr(u),o=f*(f+DIr)*(f-zIr/256-XIr),e=o*a):(u=8/f,n=u*u,t=UIr(n),i=GIr(n),o=1/(FIr(f)*kIr),BIr(f,Un,1,0),e=o*(t*(Un[0]-Un[1])+u*i*(Un[0]+Un[1]))),r<0&&(e*=-1),e)}WI.exports=JIr});var $2=s((dqe,XI)=>{"use strict";var YIr=zI();XI.exports=YIr});var Cr=s((hqe,JI)=>{"use strict";var $Ir=3.141592653589793;JI.exports=$Ir});var $I=s((qqe,YI)=>{"use strict";function ZIr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}YI.exports=ZIr});var QI=s((yqe,ZI)=>{"use strict";function QIr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}ZI.exports=QIr});var rL=s((bqe,KI)=>{"use strict";function KIr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}KI.exports=KIr});var tL=s((wqe,eL)=>{"use strict";function rLr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}eL.exports=rLr});var nL=s((Eqe,iL)=>{"use strict";function eLr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}iL.exports=eLr});var vL=s((Nqe,oL)=>{"use strict";var Z2=P(),tLr=U(),iLr=Cr(),nLr=T0(),aLr=V(),sLr=L(),uLr=Cn().assign,Q2=Y2(),oLr=$I(),vLr=QI(),fLr=rL(),cLr=tL(),lLr=nL(),pLr=1/nLr,K2=2/iLr,aL=.8935769662791675,sL=3.957678419314858,uL=7.086051060301773,gLr=228,mLr=.0029519662791675214,dLr=1013,hLr=.0006471693148578684,qLr=1814,yLr=.00011356030177269763,Gn=[0,0];function bLr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?aLr:r===sLr?0:r<=3?(a=r*r,u=Z2(r/aL)*Q2(r)*K2,n=oLr(a),o=(r+aL)*(r-gLr/256-mLr),u+o*n):r<=5.5?(a=r*r,u=Z2(r/sL)*Q2(r)*K2,n=vLr(a),o=(r+sL)*(r-dLr/256-hLr),u+o*n):r<=8?(a=r*r,u=Z2(r/uL)*Q2(r)*K2,n=fLr(a),o=(r+uL)*(r-qLr/256-yLr),u+o*n):(a=8/r,i=a*a,e=cLr(i),t=lLr(i),o=pLr/tLr(r),uLr(r,Gn,1,0),o*(e*(Gn[0]-Gn[1])+a*t*(Gn[1]+Gn[0])))}oL.exports=bLr});var cL=s((Oqe,fL)=>{"use strict";var wLr=vL();fL.exports=wLr});var pL=s((Sqe,lL)=>{"use strict";function ELr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}lL.exports=ELr});var mL=s((Aqe,gL)=>{"use strict";function NLr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}gL.exports=NLr});var hL=s((_qe,dL)=>{"use strict";function OLr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}dL.exports=OLr});var yL=s((Tqe,qL)=>{"use strict";function SLr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}qL.exports=SLr});var AL=s((Iqe,SL)=>{"use strict";var bL=P(),ALr=U(),_Lr=Cr(),TLr=T0(),ILr=V(),LLr=L(),RLr=Cn().assign,wL=$2(),PLr=pL(),FLr=mL(),MLr=hL(),BLr=yL(),jLr=1/TLr,EL=2/_Lr,NL=2.197141326031017,OL=5.429681040794135,kLr=562,CLr=.001828826031017035,VLr=1390,ULr=-6459205864867228e-21,xn=[0,0];function GLr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?ILr:r===LLr?0:r<=4?(a=r*r,u=bL(r/NL)*wL(r)*EL,n=PLr(a),o=(r+NL)*(r-kLr/256-CLr)/r,u+o*n):r<=8?(a=r*r,u=bL(r/OL)*wL(r)*EL,n=FLr(a),o=(r+OL)*(r-VLr/256-ULr)/r,u+o*n):(a=8/r,i=a*a,e=MLr(i),t=BLr(i),o=jLr/ALr(r),RLr(r,xn,1,0),o*(a*t*(xn[0]-xn[1])-e*(xn[0]+xn[1])))}SL.exports=GLr});var TL=s((Lqe,_L)=>{"use strict";var xLr=AL();_L.exports=xLr});var LL=s((Rqe,IL)=>{"use strict";function DLr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}IL.exports=DLr});var PL=s((Pqe,RL)=>{"use strict";function HLr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}RL.exports=HLr});var ML=s((Fqe,FL)=>{"use strict";var WLr=LL(),zLr=PL();function XLr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*WLr(a),i+=n*n*zLr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}FL.exports=XLr});var r3=s((Mqe,BL)=>{"use strict";var JLr=ML();BL.exports=JLr});var CL=s((Bqe,kL)=>{"use strict";var jL=-.16666666666666632,YLr=.00833333333332249,$Lr=-.0001984126982985795,ZLr=27557313707070068e-22,QLr=-25050760253406863e-24,KLr=158969099521155e-24;function rRr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=YLr+a*($Lr+a*ZLr)+a*n*(QLr+a*KLr),i=a*r,e===0?r+i*(jL+a*t):r-(a*(.5*e-i*t)-e-i*jL)}kL.exports=rRr});var e3=s((jqe,VL)=>{"use strict";var eRr=CL();VL.exports=eRr});var xL=s((kqe,GL)=>{"use strict";var tRr=ar(),t3=r3(),UL=e3(),iRr=kn(),qe=[0,0],nRr=2147483647,aRr=1072243195,sRr=1044381696,uRr=2146435072;function oRr(r){var e,t;if(e=tRr(r),e&=nRr,e<=aRr)return e<sRr?1:t3(r,0);if(e>=uRr)return NaN;switch(t=iRr(r,qe),t&3){case 0:return t3(qe[0],qe[1]);case 1:return-UL(qe[0],qe[1]);case 2:return-t3(qe[0],qe[1]);default:return UL(qe[0],qe[1])}}GL.exports=oRr});var Qt=s((Cqe,DL)=>{"use strict";var vRr=xL();DL.exports=vRr});var zL=s((Vqe,WL)=>{"use strict";var fRr=ae(),cRr=In(),lRr=ar(),HL=r3(),i3=e3(),pRr=kn(),gRr=1072243195,mRr=1045430272,ye=[0,0];function dRr(r){var e,t;if(e=lRr(r),e&=fRr,e<=gRr)return e<mRr?r:i3(r,0);if(e>=cRr)return NaN;switch(t=pRr(r,ye),t&3){case 0:return i3(ye[0],ye[1]);case 1:return HL(ye[0],ye[1]);case 2:return-i3(ye[0],ye[1]);default:return-HL(ye[0],ye[1])}}WL.exports=dRr});var Kt=s((Uqe,XL)=>{"use strict";var hRr=zL();XL.exports=hRr});var $L=s((Gqe,YL)=>{"use strict";var qRr=E(),yRr=kr(),bRr=Y(),JL=Qt(),wRr=Kt(),ERr=z(),n3=Cr(),NRr=Bi(),ORr=NRr+1;function SRr(r){var e,t,i,n;return qRr(r)?NaN:yRr(r)?NaN:(e=bRr(r),e>ORr?1:(t=ERr(e),i=e-t,i===.5?0:(i<.25?n=JL(n3*i):i<.75?(i=.5-i,n=wRr(n3*i)):(i=1-i,n=-JL(n3*i)),t%2===1?-n:n)))}YL.exports=SRr});var QL=s((xqe,ZL)=>{"use strict";var ARr=$L();ZL.exports=ARr});var rR=s((Dqe,KL)=>{"use strict";var _Rr=1.618033988749895;KL.exports=_Rr});var tR=s((Hqe,eR)=>{"use strict";var TRr=E(),IRr=QL(),LRr=D(),RRr=rR(),PRr=L(),FRr=V(),MRr=2.23606797749979;function BRr(r){var e,t;return TRr(r)||r===PRr||r===FRr?NaN:(e=LRr(RRr,r),t=IRr(r)/e,(e-t)/MRr)}eR.exports=BRr});var nR=s((Wqe,iR)=>{"use strict";var jRr=tR();iR.exports=jRr});var sR=s((zqe,aR)=>{"use strict";function kRr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}aR.exports=kRr});var fR=s((Xqe,vR)=>{"use strict";var CRr=A2(),VRr=h2(),uR=ae(),s3=ar(),URr=de(),GRr=kr(),oR=Mi(),xRr=Fi(),DRr=E(),HRr=sR(),WRr=4294967295>>>0,zRr=3221225472>>>0,XRr=0x40000000000000,a3=2147483648>>>0,JRr=1>>>0,YRr=715094163>>>0,$Rr=696219795>>>0,ZRr=s3(CRr),ri=[0>>>0,0>>>0];function QRr(r){var e,t,i,n,a,u,o;return r===0||DRr(r)||GRr(r)?r:(t=s3(r)>>>0,e=(t&VRr)>>>0,t&=uR,t<ZRr?(u=XRr*r,i=(s3(u)&uR)>>>0,i=(i/3>>>0)+$Rr>>>0,u=oR(e|i,0)):(u=0,i=(t/3>>>0)+YRr>>>0,u=URr(u,e|i)),n=u*u*(u/r),u*=HRr(n),xRr.assign(u,ri,1,0),ri[1]&a3?(ri[0]+=JRr,ri[1]&=~a3):ri[1]|=a3,u=oR(ri[0]&WRr,ri[1]&zRr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}vR.exports=QRr});var lR=s((Jqe,cR)=>{"use strict";var KRr=fR();cR.exports=KRr});var gR=s((Yqe,pR)=>{"use strict";var rPr=Math.ceil;pR.exports=rPr});var ji=s(($qe,mR)=>{"use strict";var ePr=gR();mR.exports=ePr});var hR=s((Zqe,dR)=>{"use strict";function tPr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}dR.exports=tPr});var yR=s((Qqe,qR)=>{"use strict";function iPr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}qR.exports=iPr});var ER=s((Kqe,wR)=>{"use strict";var nPr=ar(),aPr=hR(),sPr=yR(),bR=1048575,uPr=.3333333333333333;function oPr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=nPr(r),a=r-1,(bR&2+n)<3?a===0?0:a*a*(uPr*a-.5):(u=a/(2+a),o=u*u,n&=bR,c=n-398458|0,v=o*o,l=440401-n|0,t=v*aPr(v),i=o*sPr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}wR.exports=oPr});var AR=s((rye,SR)=>{"use strict";var NR=ar(),vPr=de(),fPr=me(),cPr=E(),lPr=se(),pPr=V(),gPr=ER(),mPr=0x40000000000000,OR=.4342944818781689,dPr=25082946711645275e-27,hPr=.30102999566361177,qPr=3694239077158931e-28,yPr=1048575,bPr=2146435072,wPr=1048576,EPr=1072693248;function NPr(r){var e,t,i,n,a,u,o,f;return cPr(r)||r<0?NaN:r===0?pPr:(t=NR(r),u=0,t<wPr&&(u-=54,r*=mPr,t=NR(r)),t>=bPr?r+r:(u+=(t>>20)-lPr|0,t&=yPr,a=t+614244&1048576|0,r=vPr(r,t|a^EPr),u+=a>>20|0,o=u,n=gPr(r),r-=1,e=fPr(r,0),i=r-e,f=o*qPr+(r+n)*dPr,f+=(i+n)*OR+e*OR,f+o*hPr))}SR.exports=NPr});var TR=s((eye,_R)=>{"use strict";var OPr=AR();_R.exports=OPr});var LR=s((tye,IR)=>{"use strict";var SPr=E(),APr=kr(),_Pr=D(),TPr=z(),IPr=ji(),LPr=TR(),RPr=v0(),PPr=f0(),FPr=L();function MPr(r){var e,t;return SPr(r)||APr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=LPr(r),e===-1?t=TPr(t):t=IPr(t),t<=PPr?e*0:t>RPr?FPr:e*_Pr(10,t))}IR.exports=MPr});var PR=s((iye,RR)=>{"use strict";var BPr=LR();RR.exports=BPr});var MR=s((nye,FR)=>{"use strict";function jPr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}FR.exports=jPr});var jR=s((aye,BR)=>{"use strict";function kPr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}BR.exports=kPr});var VR=s((sye,CR)=>{"use strict";var CPr=ar(),VPr=MR(),UPr=jR(),kR=1048575,GPr=.3333333333333333;function xPr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=CPr(r),a=r-1,(kR&2+n)<3?a===0?0:a*a*(GPr*a-.5):(u=a/(2+a),o=u*u,n&=kR,c=n-398458|0,v=o*o,l=440401-n|0,t=v*VPr(v),i=o*UPr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}CR.exports=xPr});var xR=s((uye,GR)=>{"use strict";var DPr=ar(),HPr=de(),WPr=me(),zPr=Fi(),XPr=E(),JPr=ae(),YPr=o0(),$Pr=se(),ZPr=V(),QPr=VR(),KPr=0x40000000000000,UR=1.4426950407214463,rFr=16751713164886512e-26,eFr=2146435072,tFr=1048576,iFr=1072693248,u3=[0,0];function nFr(r){var e,t,i,n,a,u,o;if(XPr(r)||r<0)return NaN;if(zPr.assign(r,u3,1,0),i=u3[0],n=u3[1],o=0,i<tFr){if((i&JPr|n)===0)return ZPr;o-=54,r*=KPr,i=DPr(r)}return i>=eFr?r+r:(o+=(i>>20)-$Pr|0,i&=YPr,u=i+614244&1048576|0,r=HPr(r,i|u^iFr),o+=u>>20|0,a=QPr(r),r-=1,e=WPr(r,0),t=r-e,(r+a)*rFr+(t+a)*UR+e*UR+o)}GR.exports=nFr});var HR=s((oye,DR)=>{"use strict";var aFr=xR();DR.exports=aFr});var zR=s((vye,WR)=>{"use strict";var sFr=E(),uFr=kr(),oFr=D(),vFr=z(),fFr=ji(),cFr=HR(),lFr=O2(),pFr=S2(),gFr=L();function mFr(r){var e,t;return sFr(r)||uFr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=cFr(r),t===pFr)?r:(e===-1?t=vFr(t):t=fFr(t),t>lFr?gFr:e*oFr(2,t))}WR.exports=mFr});var JR=s((fye,XR)=>{"use strict";var dFr=zR();XR.exports=dFr});var $R=s((cye,YR)=>{"use strict";var hFr=z(),qFr=ji();function yFr(r){return r<0?qFr(r):hFr(r)}YR.exports=yFr});var I0=s((lye,ZR)=>{"use strict";var bFr=$R();ZR.exports=bFr});var KR=s((pye,QR)=>{"use strict";function wFr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}QR.exports=wFr});var eP=s((gye,rP)=>{"use strict";var EFr=s0(),NFr=KR();function OFr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*NFr(n),u=1-(e-i*a/(2-a)-r),EFr(u,t)}rP.exports=OFr});var uP=s((mye,sP)=>{"use strict";var SFr=E(),tP=I0(),AFr=V(),iP=L(),_Fr=eP(),TFr=.6931471803691238,IFr=19082149292705877e-26,nP=1.4426950408889634,LFr=709.782712893384,RFr=-745.1332191019411,aP=1/(1<<28),PFr=-aP;function FFr(r){var e,t,i;return SFr(r)||r===iP?r:r===AFr?0:r>LFr?iP:r<RFr?0:r>PFr&&r<aP?1+r:(r<0?i=tP(nP*r-.5):i=tP(nP*r+.5),e=r-i*TFr,t=i*IFr,_Fr(e,t,i))}sP.exports=FFr});var sr=s((dye,oP)=>{"use strict";var MFr=uP();oP.exports=MFr});var fP=s((hye,vP)=>{"use strict";var BFr=V();function jFr(r){return r===0&&1/r===BFr}vP.exports=jFr});var o3=s((qye,cP)=>{"use strict";var kFr=fP();cP.exports=kFr});var v3=s((yye,lP)=>{"use strict";var CFr=2.5066282746310007;lP.exports=CFr});var gP=s((bye,pP)=>{"use strict";function VFr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}pP.exports=VFr});var hP=s((wye,dP)=>{"use strict";var UFr=v3(),mP=D(),GFr=sr(),xFr=gP(),DFr=143.01608;function HFr(r){var e,t,i;return e=1/r,e=1+e*xFr(e),t=GFr(r),r>DFr?(i=mP(r,.5*r-.25),t=i*(i/t)):t=mP(r,r-.5)/t,UFr*t*e}dP.exports=HFr});var yP=s((Eye,qP)=>{"use strict";var WFr=.5772156649015329;qP.exports=WFr});var wP=s((Nye,bP)=>{"use strict";var zFr=yP();function XFr(r,e){return e/((1+zFr*r)*r)}bP.exports=XFr});var NP=s((Oye,EP)=>{"use strict";function JFr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}EP.exports=JFr});var RP=s((Sye,LP)=>{"use strict";var YFr=E(),$Fr=hr(),ZFr=o3(),OP=Y(),QFr=z(),KFr=Kt(),SP=L(),AP=V(),_P=Cr(),TP=hP(),IP=wP(),rMr=NP();function eMr(r){var e,t,i,n;if($Fr(r)&&r<0||r===AP||YFr(r))return NaN;if(r===0)return ZFr(r)?AP:SP;if(r>171.61447887182297)return SP;if(r<-170.5674972726612)return 0;if(t=OP(r),t>33)return r>=0?TP(r):(i=QFr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*KFr(_P*n),e*_P/(OP(n)*TP(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return IP(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return IP(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*rMr(r))}LP.exports=eMr});var ki=s((Aye,PP)=>{"use strict";var tMr=RP();PP.exports=tMr});var BP=s((_ye,MP)=>{"use strict";var iMr=E(),nMr=kr(),FP=Qt(),f3=Kt(),aMr=Y(),Dn=e0(),Hn=Cr();function sMr(r){var e,t;return iMr(r)?NaN:nMr(r)?NaN:(t=r%2,e=aMr(t),e===0||e===1?Dn(0,t):e<.25?f3(Hn*t):e<.75?(e=.5-e,Dn(FP(Hn*e),t)):e<1.25?(t=Dn(1,t)-t,f3(Hn*t)):e<1.75?(e-=1.5,-Dn(FP(Hn*e),t)):(t-=Dn(2,t),f3(Hn*t)))}MP.exports=sMr});var Wn=s((Tye,jP)=>{"use strict";var uMr=BP();jP.exports=uMr});var CP=s((Iye,kP)=>{"use strict";function oMr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}kP.exports=oMr});var UP=s((Lye,VP)=>{"use strict";function vMr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}VP.exports=vMr});var xP=s((Rye,GP)=>{"use strict";function fMr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}GP.exports=fMr});var HP=s((Pye,DP)=>{"use strict";function cMr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}DP.exports=cMr});var zP=s((Fye,WP)=>{"use strict";function lMr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}WP.exports=lMr});var JP=s((Mye,XP)=>{"use strict";function pMr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}XP.exports=pMr});var $P=s((Bye,YP)=>{"use strict";function gMr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}YP.exports=gMr});var QP=s((jye,ZP)=>{"use strict";function mMr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}ZP.exports=mMr});var rF=s((kye,KP)=>{"use strict";function dMr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}KP.exports=dMr});var tF=s((Cye,eF)=>{"use strict";function hMr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}eF.exports=hMr});var aF=s((Vye,nF)=>{"use strict";var qMr=E(),yMr=kr(),bMr=Y(),Ci=P(),wMr=I0(),EMr=Wn(),NMr=Cr(),c3=L(),OMr=CP(),SMr=UP(),AMr=xP(),_Mr=HP(),TMr=zP(),IMr=JP(),LMr=$P(),RMr=QP(),PMr=rF(),FMr=tF(),MMr=.07721566490153287,BMr=.3224670334241136,jMr=1,kMr=-.07721566490153287,CMr=.48383612272381005,VMr=-.1475877229945939,UMr=.06462494023913339,GMr=-.07721566490153287,xMr=1,DMr=.4189385332046727,L0=1.4616321449683622,HMr=4503599627370496,WMr=0x400000000000000,zMr=8470329472543003e-37,iF=1.4616321449683622,XMr=-.12148629053584961,JMr=-3638676997039505e-33;function YMr(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(qMr(r)||yMr(r))return r;if(r===0)return c3;if(r<0?(e=!0,r=-r):e=!1,r<zMr)return-Ci(r);if(e){if(r>=HMr||(v=EMr(r),v===0))return c3;t=Ci(NMr/bMr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(g=-Ci(r),r>=L0-1+.27?(l=1-r,i=0):r>=L0-1-.27?(l=r-(iF-1),i=1):(l=r,i=2)):(g=0,r>=L0+.27?(l=2-r,i=0):r>=L0-.27?(l=r-iF,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=MMr+p*OMr(p),a=p*(BMr+p*SMr(p)),o=l*u+a,g+=o-.5*l;break;case 1:p=l*l,c=p*l,u=CMr+c*TMr(c),a=VMr+c*IMr(c),n=UMr+c*LMr(c),o=p*u-(JMr-c*(a+l*n)),g+=XMr+o;break;case 2:u=l*(GMr+l*RMr(l)),a=xMr+l*PMr(l),g+=-.5*l+u/a;break}else if(r<8)switch(i=wMr(r),l=r-i,o=l*(kMr+l*_Mr(l)),f=jMr+l*AMr(l),g=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,g+=Ci(p)}else r<WMr?(v=Ci(r),p=1/r,l=p*p,c=DMr+p*FMr(l),g=(r-.5)*(v-1)+c):g=r*(Ci(r)-1);return e&&(g=t-g),g}nF.exports=YMr});var zn=s((Uye,sF)=>{"use strict";var $Mr=aF();sF.exports=$Mr});var ot=s((Gye,uF)=>{"use strict";var ZMr=6.283185307179586;uF.exports=ZMr});var l3=s((xye,oF)=>{"use strict";var QMr=14901161193847656e-24;oF.exports=QMr});var p3=s((Dye,vF)=>{"use strict";var KMr=.9189385332046728;vF.exports=KMr});var fF=s((Hye,rBr)=>{rBr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var cF=s((Wye,eBr)=>{eBr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var lF=s((zye,tBr)=>{tBr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var gF=s((Xye,pF)=>{"use strict";function iBr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}pF.exports=iBr});var dF=s((Jye,mF)=>{"use strict";function nBr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}mF.exports=nBr});var qF=s((Yye,hF)=>{"use strict";function aBr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}hF.exports=aBr});var bF=s(($ye,yF)=>{"use strict";function sBr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}yF.exports=sBr});var EF=s((Zye,wF)=>{"use strict";function uBr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}wF.exports=uBr});var OF=s((Qye,NF)=>{"use strict";function oBr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}NF.exports=oBr});var IF=s((Kye,TF)=>{"use strict";var vBr=E(),fBr=hr(),cBr=Y(),R0=sr(),lBr=z(),pBr=ki(),gBr=zn(),SF=Wn(),AF=D(),mBr=P(),dBr=L(),hBr=V(),_F=ot(),qBr=l3(),yBr=p3(),bBr=fF(),wBr=cF(),EBr=lF(),NBr=gF(),OBr=dF(),SBr=qF(),ABr=bF(),_Br=EF(),TBr=OF(),IBr=129,LBr=170,RBr=709,PBr=1.2433929443359375,FBr=.6986598968505859;function g3(r){var e,t,i,n,a,u;if(vBr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(fBr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=IBr)return-EBr[u]/(i+1)}else return(n&1)===0?wBr[n/2]:bBr[(n-3)/2];return cBr(r)<qBr?-.5-yBr*r:(t=1-r,r<0?lBr(r/2)===r/2?0:(e=r,r=t,t=e,r>LBr?(e=SF(.5*t)*2*g3(r),a=gBr(r),a-=r*mBr(_F),a>RBr?e<0?hBr:dBr:e*R0(a)):SF(.5*t)*2*AF(_F,-r)*pBr(r)*g3(r)):r<1?(e=NBr(t),e-=PBr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+OBr(t)):r<=4?(e=FBr+1/-t,e+SBr(r-2)):r<=7?(e=ABr(r-4),1+R0(e)):r<15?(e=_Br(r-7),1+R0(e)):r<36?(e=TBr(r-15),1+R0(e)):1+AF(2,-r))}TF.exports=g3});var RF=s((rbe,LF)=>{"use strict";var MBr=IF();LF.exports=MBr});var FF=s((ebe,PF)=>{"use strict";var x=rr(),BBr=Y(),jBr=g0(),kBr=Mn(),CBr=C_(),VBr=Z_(),UBr=eT(),GBr=aT(),xBr=vT(),DBr=qT(),HBr=ET(),WBr=AT(),zBr=$t(),XBr=G2(),JBr=y0(),YBr=RT(),$Br=BT(),ZBr=VT(),QBr=XT(),KBr=Y2(),rjr=$2(),ejr=cL(),tjr=TL(),ijr=nR(),njr=lR(),ajr=ji(),sjr=PR(),ujr=JR(),ojr=Qt(),vjr=Kt(),fjr=U(),cjr=RF();function ljr(r){return x(r,"abs",BBr),x(r,"abs2",jBr),x(r,"acos",kBr),x(r,"acosh",CBr),x(r,"acot",VBr),x(r,"acovercos",UBr),x(r,"acoversin",GBr),x(r,"acsc",xBr),x(r,"acsch",DBr),x(r,"ahavercos",HBr),x(r,"ahaversin",WBr),x(r,"asin",zBr),x(r,"asinh",XBr),x(r,"atan",JBr),x(r,"atanh",YBr),x(r,"avercos",$Br),x(r,"aversin",ZBr),x(r,"bernoulli",QBr),x(r,"besselj0",KBr),x(r,"besselj1",rjr),x(r,"bessely0",ejr),x(r,"bessely1",tjr),x(r,"binet",ijr),x(r,"cbrt",njr),x(r,"ceil",ajr),x(r,"ceil10",sjr),x(r,"ceil2",ujr),x(r,"cos",ojr),x(r,"sin",vjr),x(r,"sqrt",fjr),x(r,"zeta",cjr),r}PF.exports=ljr});var BF=s((tbe,MF)=>{"use strict";var pjr=rr(),gjr=yA(),mjr=QA(),djr=FF();function hjr(r){return pjr(r,"tools",mjr({})),r=gjr(r),r=djr(r),r}MF.exports=hjr});var CF=s((ibe,kF)=>{"use strict";var qjr=bo(),jF=qjr();function yjr(){return typeof jF.BigInt=="function"&&typeof BigInt=="function"&&typeof jF.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}kF.exports=yjr});var UF=s((nbe,VF)=>{"use strict";var bjr=CF();VF.exports=bjr});var GF=s((abe,wjr)=>{wjr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var DF=s((sbe,xF)=>{"use strict";var Ejr=GF();function Njr(r){return Ejr[r]||null}xF.exports=Njr});var WF=s((ube,HF)=>{"use strict";var Ojr=DF();HF.exports=Ojr});var XF=s((obe,zF)=>{"use strict";function Sjr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}zF.exports=Sjr});var YF=s((vbe,JF)=>{"use strict";var Ajr=XF();JF.exports=Ajr});var QF=s((fbe,ZF)=>{"use strict";var $F=Y();function _jr(r){var e,t,i,n,a,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,n=$F(r[0]),u=1;u<t;u++)if(a=$F(r[u]),e&&a<n?e=!1:i&&a>n&&(i=!1),i||e)n=a;else return 0;return i&&e?3:i?1:2}ZF.exports=_jr});var m3=s((cbe,KF)=>{"use strict";var Tjr=QF();KF.exports=Tjr});var eM=s((lbe,rM)=>{"use strict";function Ijr(r,e){return e&&(r===2||r===3)}rM.exports=Ijr});var iM=s((pbe,tM)=>{"use strict";function Ljr(r,e){return e&&(r===1||r===3)}tM.exports=Ljr});var aM=s((gbe,nM)=>{"use strict";var Rjr=d1();function Pjr(r,e,t,i,n){var a;return r===0||n===0?!1:(a=Rjr(e,t,i),r===a[1]-a[0]+1)}nM.exports=Pjr});var uM=s((mbe,sM)=>{"use strict";function Fjr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}sM.exports=Fjr});var vM=s((dbe,oM)=>{"use strict";function Mjr(r){var e,t,i,n,a,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,n=this._offset,this._order==="column-major"){for(u=0;u<i;u++)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}for(u=i-1;u>=0;u--)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}oM.exports=Mjr});var cM=s((hbe,fM)=>{"use strict";function Bjr(r,e){var t,i,n,a,u,o;if(n=this._ndims,n===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,a=this._offset,this._order==="column-major"){for(o=0;o<n;o++)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}for(o=n-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}fM.exports=Bjr});var pM=s((qbe,lM)=>{"use strict";function jjr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}lM.exports=jjr});var mM=s((ybe,gM)=>{"use strict";function kjr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}gM.exports=kjr});var hM=s((bbe,dM)=>{"use strict";var Cjr=Kr(),Vjr=re();function Ujr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(Cjr(t),Vjr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}dM.exports=Ujr});var bM=s((wbe,yM)=>{"use strict";var Gjr=Q().isPrimitive,xjr=y(),qM=/[-\/\\^$*+?.()|[\]{}]/g;function Djr(r){var e,t,i;if(!Gjr(r))throw new TypeError(xjr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(qM,"\\$&"):(t=r.substring(1,i),t=t.replace(qM,"\\$&"),r=r[0]+t+r.substring(i),r)}yM.exports=Djr});var EM=s((Ebe,wM)=>{"use strict";var Hjr=bM();wM.exports=Hjr});var OM=s((Nbe,NM)=>{"use strict";var Wjr=RegExp.prototype.exec;NM.exports=Wjr});var AM=s((Obe,SM)=>{"use strict";var zjr=OM();function Xjr(r){try{return zjr.call(r),!0}catch{return!1}}SM.exports=Xjr});var TM=s((Sbe,_M)=>{"use strict";var Jjr=ui(),Yjr=er(),$jr=AM(),Zjr=Jjr();function Qjr(r){return typeof r=="object"?r instanceof RegExp?!0:Zjr?$jr(r):Yjr(r)==="[object RegExp]":!1}_M.exports=Qjr});var LM=s((Abe,IM)=>{"use strict";var Kjr=TM();IM.exports=Kjr});var PM=s((_be,RM)=>{"use strict";function rkr(r,e,t){return r.replace(e,t)}RM.exports=rkr});var vt=s((Tbe,FM)=>{"use strict";var ekr=PM();FM.exports=ekr});var BM=s((Ibe,MM)=>{"use strict";var tkr=EM(),ikr=I(),d3=Q().isPrimitive,nkr=LM(),h3=y(),akr=vt();function skr(r,e,t){if(!d3(r))throw new TypeError(h3("invalid argument. First argument must be a string. Value: `%s`.",r));if(d3(e))e=new RegExp(tkr(e),"g");else if(!nkr(e))throw new TypeError(h3("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!d3(t)&&!ikr(t))throw new TypeError(h3("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return akr(r,e,t)}MM.exports=skr});var kM=s((Lbe,jM)=>{"use strict";var ukr=BM();jM.exports=ukr});var VM=s((Rbe,CM)=>{"use strict";var okr=kM(),q3=Kr(),y3=re(),vkr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function fkr(){var r,e,t,i,n,a,u;if(e=this._shape.length,n=this._dtype,i="ndarray( '"+n+"', ",r="",this._length<=100)if(n==="complex64"||n==="complex128")for(u=0;u<this._length;u++)a=this.iget(u),r+=q3(a)+", "+y3(a),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(n==="complex64"||n==="complex128")for(u=0;u<3;u++)a=this.iget(u),r+=q3(a)+", "+y3(a),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",n==="complex64"||n==="complex128")for(u=2;u>=0;u--)a=this.iget(this._length-1-u),r+=q3(a)+", "+y3(a),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=vkr[this.dtype],i+=okr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}CM.exports=fkr});var GM=s((Pbe,UM)=>{"use strict";var ckr=typeof ArrayBuffer=="function"?ArrayBuffer:null;UM.exports=ckr});var DM=s((Fbe,xM)=>{"use strict";var lkr=Aa(),pkr=lr(),P0=GM();function gkr(){var r,e,t;if(typeof P0!="function")return!1;try{t=new P0(16),r=lkr(t)&&typeof P0.isView=="function",r&&(e=new pkr(t),e[0]=-3.14,e[1]=NaN,r=r&&P0.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}xM.exports=gkr});var WM=s((Mbe,HM)=>{"use strict";var mkr=DM();HM.exports=mkr});var XM=s((Bbe,zM)=>{"use strict";var dkr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;zM.exports=dkr});var YM=s((jbe,JM)=>{"use strict";function hkr(){throw new Error("not implemented")}JM.exports=hkr});var F0=s((kbe,$M)=>{"use strict";var qkr=WM(),ykr=XM(),bkr=YM(),b3;qkr()?b3=ykr:b3=bkr;$M.exports=b3});var QM=s((Cbe,ZM)=>{"use strict";var wkr=er(),Ekr=typeof DataView=="function";function Nkr(r){return Ekr&&r instanceof DataView||wkr(r)==="[object DataView]"}ZM.exports=Nkr});var rB=s((Vbe,KM)=>{"use strict";var Okr=QM();KM.exports=Okr});var tB=s((Ube,eB)=>{"use strict";var Skr=typeof DataView=="function"?DataView:null;eB.exports=Skr});var aB=s((Gbe,nB)=>{"use strict";var Akr=rB(),_kr=F0(),iB=tB();function Tkr(){var r,e,t;if(typeof iB!="function")return!1;try{t=new _kr(24),e=new iB(t,8),r=Akr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}nB.exports=Tkr});var uB=s((xbe,sB)=>{"use strict";var Ikr=aB();sB.exports=Ikr});var vB=s((Dbe,oB)=>{"use strict";var Lkr=typeof DataView=="function"?DataView:void 0;oB.exports=Lkr});var cB=s((Hbe,fB)=>{"use strict";function Rkr(){throw new Error("not implemented")}fB.exports=Rkr});var Xn=s((Wbe,lB)=>{"use strict";var Pkr=uB(),Fkr=vB(),Mkr=cB(),w3;Pkr()?w3=Fkr:w3=Mkr;lB.exports=w3});var gB=s((zbe,pB)=>{"use strict";var Bkr=typeof BigInt=="function"?BigInt:void 0;pB.exports=Bkr});var dB=s((Xbe,mB)=>{"use strict";var jkr=gB();mB.exports=jkr});var hB=s((Jbe,kkr)=>{kkr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var bB=s((Ybe,yB)=>{"use strict";var qB=hB();function Ckr(){var r;return arguments.length===0?qB.all.slice():(r=qB[arguments[0]],r?r.slice():[])}yB.exports=Ckr});var EB=s(($be,wB)=>{"use strict";function Vkr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}wB.exports=Vkr});var OB=s((Zbe,NB)=>{"use strict";var Ukr=rr(),Gkr=Ti();function xkr(r,e){var t,i,n;for(t=Gkr(e),n=0;n<t.length;n++)i=t[n],Ukr(r,i,e[i]);return r}NB.exports=xkr});var N3=s((Qbe,AB)=>{"use strict";var Dkr=b(),E3=bB(),SB=EB(),Hkr=OB();Dkr(E3,"enum",SB);Hkr(E3,SB());AB.exports=E3});var _B=s((Kbe,Wkr)=>{Wkr.exports=["row-major","column-major"]});var IB=s((rwe,TB)=>{"use strict";var zkr=_B();function Xkr(){return zkr.slice()}TB.exports=Xkr});var RB=s((ewe,LB)=>{"use strict";function Jkr(){return{"row-major":1,"column-major":2}}LB.exports=Jkr});var O3=s((twe,FB)=>{"use strict";var Ykr=b(),PB=IB(),$kr=RB();Ykr(PB,"enum",$kr);FB.exports=PB});var MB=s((iwe,Zkr)=>{Zkr.exports=["throw","clamp","wrap"]});var jB=s((nwe,BB)=>{"use strict";var Qkr=MB();function Kkr(){return Qkr.slice()}BB.exports=Kkr});var CB=s((awe,kB)=>{"use strict";function rCr(){return{throw:1,clamp:2,wrap:3}}kB.exports=rCr});var S3=s((swe,UB)=>{"use strict";var eCr=b(),VB=jB(),tCr=CB();eCr(VB,"enum",tCr);UB.exports=VB});var DB=s((uwe,xB)=>{"use strict";var ft=zr(),iCr=F0(),nCr=Xn(),Jn=dB(),aCr=N3().enum,sCr=O3().enum,uCr=S3().enum,oCr=aCr(),vCr=sCr(),GB=uCr();function fCr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g;if(f=this._mode||"throw",u=this._submode||[f],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new nCr(new iCr(t)),n=this._shape,a=this._strides,i=this._dtype,r=this._bytesPerElement,v=0,o.setInt8(v,ft?1:0),v+=1,o.setInt16(v,oCr[i],ft),v+=2,o.setBigInt64(v,Jn(l),ft),c=l*8,v+=8,g=0;g<l;g++)o.setBigInt64(v,Jn(n[g]),ft),o.setBigInt64(v+c,Jn(a[g]*r),ft),v+=8;for(v+=c,o.setBigInt64(v,Jn(this._offset*r),ft),v+=8,o.setInt8(v,vCr[this._order]),v+=1,o.setInt8(v,GB[f]),v+=1,o.setBigInt64(v,Jn(p),ft),v+=8,g=0;g<p;g++)o.setInt8(v,GB[u[g]]),v+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(v,e,ft),this.__meta_dataview__=o,o}xB.exports=fCr});var WB=s((owe,HB)=>{"use strict";var Yn=zr(),cCr=Qr(),lCr=Xn(),pCr=z(),gCr=4294967295>>>0,mCr=4294967296;function dCr(r){var e,t,i,n;return e=new cCr(8),r===0||(n=(r&gCr)>>>0,i=pCr(r/mCr),t=new lCr(e.buffer),Yn?(t.setUint32(0,n,Yn),t.setUint32(4,i,Yn)):(t.setUint32(0,i,Yn),t.setUint32(4,n,Yn))),e}HB.exports=dCr});var XB=s((vwe,zB)=>{"use strict";var $n=zr(),hCr=Qr(),qCr=Xn(),yCr=z(),bCr=4294967295>>>0,wCr=4294967296,B0=new hCr(8),M0=new qCr(B0.buffer);function ECr(r,e,t,i){var n,a,u;if(r===0){for(u=0;u<B0.length;u++)e[i]=0,i+=t;return e}for(a=(r&bCr)>>>0,n=yCr(r/wCr),$n?(M0.setUint32(0,a,$n),M0.setUint32(4,n,$n)):(M0.setUint32(0,n,$n),M0.setUint32(4,a,$n)),u=0;u<B0.length;u++)e[i]=B0[u],i+=t;return e}zB.exports=ECr});var $B=s((fwe,YB)=>{"use strict";var NCr=b(),JB=WB(),OCr=XB();NCr(JB,"assign",OCr);YB.exports=JB});var KB=s((cwe,QB)=>{"use strict";var A3=zr(),SCr=F0(),ACr=Xn(),_Cr=Qr(),TCr=N3().enum,ICr=O3().enum,LCr=S3().enum,Zn=$B().assign,RCr=TCr(),PCr=ICr(),ZB=LCr();function FCr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h;if(v=this._mode||"throw",o=this._submode||[v],p=this._ndims,g=o.length,i=33+p*16+g,f=this.__meta_dataview__,f&&f.byteLength===i)return f;for(f=new ACr(new SCr(i)),e=new _Cr(f.buffer),a=this._shape,u=this._strides,n=this._dtype,r=this._bytesPerElement,c=0,f.setInt8(c,A3?1:0),c+=1,f.setInt16(c,RCr[n],A3),c+=2,Zn(p,e,1,c),l=p*8,c+=8,h=0;h<p;h++)Zn(a[h],e,1,c),Zn(u[h]*r,e,1,c+l),c+=8;for(c+=l,Zn(this._offset*r,e,1,c),c+=8,f.setInt8(c,PCr[this._order]),c+=1,f.setInt8(c,ZB[v]),c+=1,Zn(g,e,1,c),c+=8,h=0;h<g;h++)f.setInt8(c,ZB[o[h]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,f.setInt32(c,t,A3),this.__meta_dataview__=f,f}QB.exports=FCr});var ej=s((lwe,rj)=>{"use strict";var MCr=UF(),ct=b(),Xr=R(),BCr=WF(),jCr=YF(),kCr=m3(),CCr=ho(),VCr=eM(),UCr=iM(),GCr=aM(),xCr=uM(),DCr=vM(),HCr=cM(),WCr=pM(),zCr=mM(),XCr=hM(),JCr=VM(),YCr=DB(),$Cr=KB();function nr(r,e,t,i,n,a){var u,o,f,v,c;if(!(this instanceof nr))return new nr(r,e,t,i,n,a);for(v=1,c=0;c<t.length;c++)v*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*v:o=null,this._byteLength=o,this._bytesPerElement=BCr(r),this._buffer=e,this._dtype=r,this._length=v,this._ndims=t.length,this._offset=n,this._order=a,this._shape=t,this._strides=i,this._accessors=CCr(e.get&&e.set),this._iterationOrder=jCr(i),u=GCr(v,t,i,n,this._iterationOrder),f=kCr(i),this._flags={ROW_MAJOR_CONTIGUOUS:UCr(f,u),COLUMN_MAJOR_CONTIGUOUS:VCr(f,u),READONLY:!1},this.__meta_dataview__=null,this}ct(nr,"name","ndarray");Xr(nr.prototype,"byteLength",function(){return this._byteLength});Xr(nr.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});Xr(nr.prototype,"data",function(){return this._buffer});Xr(nr.prototype,"dtype",function(){return this._dtype});Xr(nr.prototype,"flags",function(){return xCr(this._flags)});Xr(nr.prototype,"length",function(){return this._length});Xr(nr.prototype,"ndims",function(){return this._ndims});Xr(nr.prototype,"offset",function(){return this._offset});Xr(nr.prototype,"order",function(){return this._order});Xr(nr.prototype,"shape",function(){return this._shape.slice()});Xr(nr.prototype,"strides",function(){return this._strides.slice()});ct(nr.prototype,"get",zCr);ct(nr.prototype,"iget",DCr);ct(nr.prototype,"set",WCr);ct(nr.prototype,"iset",HCr);ct(nr.prototype,"toString",JCr);ct(nr.prototype,"toJSON",XCr);ct(nr.prototype,"__array_meta_dataview__",MCr()?YCr:$Cr);rj.exports=nr});var j0=s((pwe,tj)=>{"use strict";var ZCr=ej();tj.exports=ZCr});var nj=s((gwe,ij)=>{"use strict";var QCr=j0();function KCr(r){return r instanceof QCr||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}ij.exports=KCr});var sj=s((mwe,aj)=>{"use strict";var rVr=nj();aj.exports=rVr});var oj=s((dwe,uj)=>{"use strict";function eVr(r){var e=r.flags;return e&&e.READONLY===!0}uj.exports=eVr});var fj=s((hwe,vj)=>{"use strict";var tVr=oj();vj.exports=tVr});var lj=s((qwe,cj)=>{"use strict";var iVr=qr().isPrimitive,nVr=Vr(),_3=y();function aVr(r){var e,t,i,n;if(typeof r!="object"||r===null)throw new TypeError(_3("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!nVr(t))throw new TypeError(_3("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],n=0;n<t.length;n++){if(i=t[n],!iVr(i))throw new TypeError(_3("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}cj.exports=aVr});var gj=s((ywe,pj)=>{"use strict";var sVr=lj();pj.exports=sVr});var dj=s((bwe,mj)=>{"use strict";function uVr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}mj.exports=uVr});var Qn=s((wwe,hj)=>{"use strict";var oVr=dj();hj.exports=oVr});var yj=s((Ewe,qj)=>{"use strict";function vVr(r){return r===null}qj.exports=vVr});var T3=s((Nwe,bj)=>{"use strict";var fVr=yj();bj.exports=fVr});var Ej=s((Owe,wj)=>{"use strict";function cVr(r){return r===void 0}wj.exports=cVr});var I3=s((Swe,Nj)=>{"use strict";var lVr=Ej();Nj.exports=lVr});var Sj=s((Awe,Oj)=>{"use strict";var R3=b(),P3=R(),pVr=dr().isPrimitive,gVr=T3(),mVr=I3(),k0=y();function L3(r){return pVr(r)||gVr(r)||mVr(r)}function be(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof be))return new be(e,t,i);if(!L3(e))throw new TypeError(k0("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!L3(t))throw new TypeError(k0("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(L3(i)){if(i===0)throw new RangeError(k0("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(k0("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}R3(be,"name","Slice");P3(be.prototype,"start",function(){return this._start});P3(be.prototype,"stop",function(){return this._stop});P3(be.prototype,"step",function(){return this._step});R3(be.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});R3(be.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});Oj.exports=be});var Vi=s((_we,Aj)=>{"use strict";var dVr=Sj();Aj.exports=dVr});var Tj=s((Twe,_j)=>{"use strict";var hVr=Vi(),qVr=le();function yVr(r){return r instanceof hVr||qVr(r)==="Slice"}_j.exports=yVr});var Lj=s((Iwe,Ij)=>{"use strict";var bVr=Tj();Ij.exports=bVr});var Fj=s((Lwe,Pj)=>{"use strict";var F3=b(),Rj=R(),wVr=dr().isPrimitive,EVr=T3(),NVr=I3(),OVr=Lj(),SVr=y();function AVr(r){return wVr(r)||EVr(r)||NVr(r)||OVr(r)}function Nr(){var r,e,t,i,n;if(r=arguments.length,!(this instanceof Nr)){if(r===1)return new Nr(arguments[0]);if(r===2)return new Nr(arguments[0],arguments[1]);if(r===3)return new Nr(arguments[0],arguments[1],arguments[2]);if(r===4)return new Nr(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Nr(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],n=0;n<r;n++)t.push(arguments[n]);return e=Object.create(Nr.prototype),Nr.apply(e,t)}for(this._data=[],n=0;n<r;n++){if(i=arguments[n],!AVr(i))throw new TypeError(SVr("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",n,i));this._data.push(i===void 0?null:i)}return this}F3(Nr,"name","MultiSlice");Rj(Nr.prototype,"ndims",function(){return this._data.length});Rj(Nr.prototype,"data",function(){return this._data.slice()});F3(Nr.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});F3(Nr.prototype,"toJSON",function(){var e,t,i,n;for(e=this._data,t={type:"MultiSlice",data:[]},n=0;n<e.length;n++)i=e[n],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});Pj.exports=Nr});var C0=s((Rwe,Mj)=>{"use strict";var _Vr=Fj();Mj.exports=_Vr});var jj=s((Pwe,Bj)=>{"use strict";function TVr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Bj.exports=TVr});var Cj=s((Fwe,kj)=>{"use strict";var IVr=Vi(),Kn=jj();function LVr(r,e,t){var i,n,a;if(i=r.start,n=r.stop,a=r.step,a===null&&(a=1),i===null)a>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return Kn();i=0}}else if(i>=e){if(t)return Kn();a<0?i=e-1:i=e}if(n===null)a>0?n=e:n=null;else if(n<0){if(n=e+n,n<0)if(a>0){if(t)return Kn();n=0}else{if(t&&n<-1)return Kn();n=null}}else if(n>e){if(t)return Kn();n=e}return new IVr(i,n,a)}kj.exports=LVr});var Uj=s((Mwe,Vj)=>{"use strict";var RVr=Cj();Vj.exports=RVr});var xj=s((Bwe,Gj)=>{"use strict";function PVr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Gj.exports=PVr});var Wj=s((jwe,Hj)=>{"use strict";var FVr=C0(),ra=Vi(),MVr=Uj(),Dj=xj();function BVr(r,e,t){return r===null?new ra(0,e,1):typeof r=="number"?r>=e?t?Dj():new ra(e,e,1):r<0?(r=e+r,r<0?t?Dj():new ra(0,0,1):new ra(r,r+1,1)):new ra(r,r+1,1):MVr(r,e,t)}function jVr(r,e,t){var i,n,a,u;for(i=r.data,n=[],u=0;u<i.length;u++){if(a=BVr(i[u],e[u],t),a.code!==void 0)return a;n.push(a)}return FVr.apply(null,n)}Hj.exports=jVr});var Xj=s((kwe,zj)=>{"use strict";var kVr=Wj();zj.exports=kVr});var Yj=s((Cwe,Jj)=>{"use strict";function CVr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}Jj.exports=CVr});var Zj=s((Vwe,$j)=>{"use strict";var VVr=Yj();$j.exports=VVr});var Kj=s((Uwe,Qj)=>{"use strict";var UVr=ji();function GVr(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:UVr((i-t)/e)}Qj.exports=GVr});var ek=s((Gwe,rk)=>{"use strict";var xVr=Kj();rk.exports=xVr});var ik=s((xwe,tk)=>{"use strict";var DVr=ek();function HVr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(DVr(e[i]));return t}tk.exports=HVr});var ak=s((Dwe,nk)=>{"use strict";var WVr=ik();nk.exports=WVr});var uk=s((Hwe,sk)=>{"use strict";function zVr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}sk.exports=zVr});var vk=s((Wwe,ok)=>{"use strict";var XVr=uk();ok.exports=XVr});var ck=s((zwe,fk)=>{"use strict";function JVr(r){return r.dtype}fk.exports=JVr});var pk=s((Xwe,lk)=>{"use strict";var YVr=ck();lk.exports=YVr});var mk=s((Jwe,gk)=>{"use strict";var $Vr=ya();function ZVr(r,e){var t=r.shape;return e?$Vr(t):t}gk.exports=ZVr});var hk=s((Ywe,dk)=>{"use strict";var QVr=mk();dk.exports=QVr});var yk=s(($we,qk)=>{"use strict";function KVr(r){var e,t,i,n;for(e=r.length,t=[],n=0;n<e;n++)t.push(0);for(i=1,n=e-1;n>=0;n--)t[n]=i,i*=r[n];return t}function rUr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function eUr(r,e){return e==="column-major"?rUr(r):KVr(r)}qk.exports=eUr});var wk=s((Zwe,bk)=>{"use strict";function tUr(r,e){var t,i,n;for(t=r.length,i=1,n=t-1;n>=0;n--)e[n]=i,i*=r[n];return e}function iUr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function nUr(r,e,t){return e==="column-major"?iUr(r,t):tUr(r,t)}bk.exports=nUr});var V0=s((Qwe,Nk)=>{"use strict";var aUr=b(),Ek=yk(),sUr=wk();aUr(Ek,"assign",sUr);Nk.exports=Ek});var Sk=s((Kwe,Ok)=>{"use strict";var uUr=V0(),oUr=ya(),vUr="row-major";function fUr(r,e){var t,i,n;return n=r.strides,typeof n!="object"||n===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=vUr),uUr(i,t))):e?oUr(n):n}Ok.exports=fUr});var _k=s((rEe,Ak)=>{"use strict";var cUr=Sk();Ak.exports=cUr});var Ik=s((eEe,Tk)=>{"use strict";function lUr(r,e){var t,i,n;for(i=r.length,t=0,n=0;n<i;n++)e[n]<0&&(t-=e[n]*(r[n]-1));return t}Tk.exports=lUr});var U0=s((tEe,Lk)=>{"use strict";var pUr=Ik();Lk.exports=pUr});var Pk=s((iEe,Rk)=>{"use strict";var gUr=U0();function mUr(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:gUr(t,e))}Rk.exports=mUr});var Mk=s((nEe,Fk)=>{"use strict";var dUr=Pk();Fk.exports=dUr});var jk=s((aEe,Bk)=>{"use strict";var hUr=m3(),M3="row-major",qUr="column-major";function yUr(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=hUr(e),t===1||t===3)?M3:t===2?qUr:r.shape.length===0?M3:null)}Bk.exports=yUr});var Ck=s((sEe,kk)=>{"use strict";var bUr=jk();kk.exports=bUr});var Uk=s((uEe,Vk)=>{"use strict";function wUr(r){return r.data}Vk.exports=wUr});var xk=s((oEe,Gk)=>{"use strict";var EUr=Uk();Gk.exports=EUr});var Hk=s((vEe,Dk)=>{"use strict";function NUr(r,e,t){var i,n,a;for(i=r.data,n=t,a=0;a<i.length;a++)n+=e[a]*i[a].start;return n}Dk.exports=NUr});var zk=s((fEe,Wk)=>{"use strict";function OUr(r,e,t){var i,n,a,u;for(i=r.data,n=[],a=0;a<t.length;a++)u=t[a],n.push(e[u]*i[u].step);return n}Wk.exports=OUr});var Jk=s((cEe,Xk)=>{"use strict";var SUr=tt(),AUr=lr(),_Ur=Zr(),TUr=fi(),IUr=Qe(),LUr=li(),RUr=Ut(),PUr=pr(),FUr=Qr(),MUr=ci(),BUr=bi(),jUr=Oi(),kUr={binary:SUr,float64:AUr,float32:_Ur,generic:Array,int16:TUr,int32:IUr,int8:LUr,uint16:RUr,uint32:PUr,uint8:FUr,uint8c:MUr,complex64:BUr,complex128:jUr};Xk.exports=kUr});var $k=s((lEe,Yk)=>{"use strict";var CUr=Jk();function VUr(r){return CUr[r]||null}Yk.exports=VUr});var Qk=s((pEe,Zk)=>{"use strict";var UUr=$k();Zk.exports=UUr});var rC=s((gEe,Kk)=>{"use strict";var GUr=I(),xUr=tt(),DUr=GUr(xUr.allocUnsafe);Kk.exports=DUr});var tC=s((mEe,eC)=>{"use strict";var HUr=qr(),WUr=y(),zUr=tt();function XUr(r){if(!HUr(r))throw new TypeError(WUr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return zUr.allocUnsafe(r)}eC.exports=XUr});var nC=s((dEe,iC)=>{"use strict";var JUr=qr(),YUr=y(),$Ur=tt();function ZUr(r){if(!JUr(r))throw new TypeError(YUr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new $Ur(r)}iC.exports=ZUr});var sC=s((hEe,aC)=>{"use strict";var QUr=rC(),KUr=tC(),rGr=nC(),B3;QUr?B3=KUr:B3=rGr;aC.exports=B3});var oC=s((qEe,uC)=>{"use strict";function eGr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}uC.exports=eGr});var fC=s((yEe,vC)=>{"use strict";var tGr=Qk(),iGr=sC(),nGr=oC();function aGr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function sGr(r){return nGr(iGr(r))}function uGr(r,e){var t=tGr(r);return t?new t(e):null}function oGr(r,e){return r==="generic"?aGr(e):r==="binary"?sGr(e):uGr(r,e)}vC.exports=oGr});var j3=s((bEe,cC)=>{"use strict";var vGr=fC();cC.exports=vGr});var pC=s((wEe,lC)=>{"use strict";var fGr=j3(),cGr=Ze();function lGr(r,e,t,i,n){var a,u;return u=t.length,u===0?a=[0]:a=cGr(u),new r(e,fGr(e,0),t,a,0,i,{readonly:n})}lC.exports=lGr});var yC=s((EEe,qC)=>{"use strict";var gC=Xj(),pGr=Zj(),mC=ak(),k3=vk(),gGr=Ze(),dC=Qn(),mGr=pk(),dGr=hk(),hGr=_k(),qGr=Mk(),yGr=Ck(),C3=xk(),hC=y(),bGr=Hk(),wGr=zk(),EGr=pC();function NGr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g;if(u=mGr(r),o=dGr(r,!0),n=hGr(r,!0),a=qGr(r),f=yGr(r),c=o.length,e.ndims!==c)throw new RangeError(hC("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,C3(r),o,n,a,f,{readonly:!i});if(v=pGr(e),g=gC(e,o,!0),g.code){if(t)throw new RangeError(hC("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));g=gC(e,o,!1),p=mC(g),dC(k3(p,v))>0&&(p=gGr(p.length))}else p=mC(g);return dC(p)===0?EGr(l,u,k3(p,v),f,!i):(a=bGr(g,n,a),p=k3(p,v),p.length===0?new l(u,C3(r),[],[0],a,f,{readonly:!i}):(n=wGr(g,n,v),new l(u,C3(r),p,n,a,f,{readonly:!i})))}qC.exports=NGr});var V3=s((NEe,bC)=>{"use strict";var OGr=yC();bC.exports=OGr});var U3=s((OEe,wC)=>{"use strict";var SGr="row-major";function AGr(r,e,t,i,n){var a,u;for(a=r-1;a>i;a--)n[a]=t[a];for(a=i;a>=0&&(u=(t[a]+1)%e[a],n[a]=u,!(u>0));a--);for(a-=1;a>=0;a--)n[a]=t[a];return n}function _Gr(r,e,t,i,n){var a,u;for(a=0;a<i;a++)n[a]=t[a];for(a=i;a<r&&(u=(t[a]+1)%e[a],n[a]=u,!(u>0));a++);for(a+=1;a<r;a++)n[a]=t[a];return n}function TGr(r,e,t,i,n){var a=r.length;if(a===0)return null;if(i<0){if(i+=a,i<0)return null}else if(i>=a)return null;return e===SGr?AGr(a,r,t,i,n):_Gr(a,r,t,i,n)}wC.exports=TGr});var NC=s((SEe,EC)=>{"use strict";var IGr=Ze(),LGr=U3();function RGr(r,e,t,i){return LGr(r,e,t,i,IGr(r.length))}EC.exports=RGr});var G3=s((AEe,SC)=>{"use strict";var PGr=b(),OC=NC(),FGr=U3();PGr(OC,"assign",FGr);SC.exports=OC});var IC=s((_Ee,TC)=>{"use strict";var x3=b(),MGr=T(),BGr=cr().isPrimitive,jGr=sj(),kGr=fj(),CGr=S(),AC=dn(),VGr=Ze(),UGr=gj(),GGr=Qn(),xGr=V3(),DGr=G3().assign,HGr=C0(),G0=y();function _C(r){var e,t,i,n,a,u,o,f,v,c,l;if(!jGr(r))throw new TypeError(G0("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(n={writable:!1},arguments.length>1){if(e=arguments[1],!MGr(e))throw new TypeError(G0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(CGr(e,"readonly")){if(!BGr(e.readonly))throw new TypeError(G0("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(n.writable=!e.readonly,n.writable&&kGr(r))throw new Error(G0("invalid option. Cannot write to read-only array."))}}if(t=UGr(r),i=t.length,i<2)throw new TypeError("invalid argument. First argument must be an ndarray having at least two dimensions.");return c=GGr(t),c===0&&(u=!0),c/=t[i-1],f=i-2,v=t[f],l=-1,o=VGr(i),o[i-1]=null,a={},x3(a,"next",p),x3(a,"return",g),AC&&x3(a,AC,h),a;function p(){var d,m;return l+=1,u||l>=c?{done:!0}:(d=HGr.apply(null,o),m=(o[f]+1)%v,o[f]=m,m===0&&(o=DGr(t,"row-major",o,f-1,o)),{value:xGr(r,d,!0,n.writable),done:!1})}function g(d){return u=!0,arguments.length?{value:d,done:!0}:{done:!0}}function h(){return _C(r,n)}}TC.exports=_C});var RC=s((TEe,LC)=>{"use strict";var WGr=IC();LC.exports=WGr});var FC=s((IEe,PC)=>{"use strict";var zGr=typeof String.prototype.trim<"u";PC.exports=zGr});var D3=s((LEe,MC)=>{"use strict";var XGr=String.prototype.trim;MC.exports=XGr});var CC=s((REe,kC)=>{"use strict";var BC=D3(),JGr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,jC="\u180E";function YGr(){return BC.call(JGr)===""&&BC.call(jC)===jC}kC.exports=YGr});var UC=s((PEe,VC)=>{"use strict";var $Gr=vt(),ZGr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function QGr(r){return $Gr(r,ZGr,"$1")}VC.exports=QGr});var xC=s((FEe,GC)=>{"use strict";var KGr=D3();function rxr(r){return KGr.call(r)}GC.exports=rxr});var lt=s((MEe,DC)=>{"use strict";var exr=FC(),txr=CC(),ixr=UC(),nxr=xC(),H3;exr&&txr()?H3=nxr:H3=ixr;DC.exports=H3});var WC=s((BEe,HC)=>{"use strict";var axr=/(?:\s*-\s*)(?=\d+)(\d+)$/;HC.exports=axr});var XC=s((jEe,zC)=>{"use strict";var sxr=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;zC.exports=sxr});var $C=s((kEe,YC)=>{"use strict";var JC=z(),uxr=WC(),oxr=XC();function vxr(r,e,t,i){var n;if(r==="end")return e;if(n=r.match(uxr),n){if(r=e-parseInt(n[1],10),r<0){if(i)return-2;r=0}return r}return n=r.match(oxr),n?(r=parseFloat(n[1]),r<1?i?-2:-1:t&&e>0&&r!==1?JC((e-1)/r):JC(e/r)):-1}YC.exports=vxr});var QC=s((CEe,ZC)=>{"use strict";var fxr=/\s*:\s*/;ZC.exports=fxr});var rV=s((VEe,KC)=>{"use strict";var cxr=/^[-+]?[0-9]+$/;KC.exports=cxr});var tV=s((UEe,eV)=>{"use strict";var lxr=/^end/;eV.exports=lxr});var nV=s((GEe,iV)=>{"use strict";function pxr(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}iV.exports=pxr});var sV=s((xEe,aV)=>{"use strict";function gxr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}aV.exports=gxr});var oV=s((DEe,uV)=>{"use strict";function mxr(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}uV.exports=mxr});var pV=s((HEe,lV)=>{"use strict";var vV=Vi(),dxr=lt(),fV=$C(),hxr=QC(),W3=rV(),cV=tV(),Ui=nV(),ei=sV(),qxr=oV();function yxr(r,e,t){var i,n,a;if(i=dxr(r).split(hxr),n=i.length,n<2||n>3)return Ui();if(n===3)if(a=i[2],a.length===0)i[2]=1;else{if(W3.test(a)===!1)return Ui();if(a=parseInt(a,10),a===0)return qxr();i[2]=a}else i.push(1);if(a=i[0],a.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(cV.test(a)){if(a=fV(a,e,i[2]<0,t),a<0)return a===-2?ei():Ui();i[2]<0&&a>=e&&(a-=1),i[0]=a}else if(W3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0){if(t)return ei();a=0}}else if(a>=e){if(t)return ei();i[2]<0?a=e-1:a=e}i[0]=a}else return Ui();if(a=i[1],a.length===0)i[2]<0?i[1]=null:i[1]=e;else if(cV.test(a)){if(a=fV(a,e,i[2]<0,t),a<0)return a===-2?ei():Ui();i[1]=a}else if(W3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0)if(i[2]>0){if(t)return ei();a=0}else{if(t&&a<-1)return ei();a=null}}else if(a>e){if(t)return ei();a=e}i[1]=a}else return Ui();return e===0?new vV(0,0,i[2]):new vV(i[0],i[1],i[2])}lV.exports=yxr});var mV=s((WEe,gV)=>{"use strict";var bxr=pV();gV.exports=bxr});var hV=s((zEe,dV)=>{"use strict";function wxr(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}dV.exports=wxr});var yV=s((XEe,qV)=>{"use strict";function Exr(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}qV.exports=Exr});var wV=s((JEe,bV)=>{"use strict";function Nxr(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}bV.exports=Nxr});var NV=s((YEe,EV)=>{"use strict";function Oxr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}EV.exports=Oxr});var SV=s(($Ee,OV)=>{"use strict";var Sxr=/\s*,\s*/;OV.exports=Sxr});var _V=s((ZEe,AV)=>{"use strict";var Axr=/^[-+]?[0-9]+$/;AV.exports=Axr});var LV=s((QEe,IV)=>{"use strict";var _xr=lt(),Txr=Vi(),Ixr=C0(),Lxr=mV(),Rxr=hV(),Pxr=yV(),Fxr=wV(),TV=NV(),Mxr=SV(),Bxr=_V();function jxr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(o=e.length,i=_xr(r).split(Mxr),f=i.length,a=!1,n=[],l=0,c=0;c<f;c++){if(v=i[c],v==="..."){if(a)return Rxr();for(a=!0,p=0;p<o-f+1;p++)n.push(new Txr(0,e[l],1)),l+=1;continue}if(u=e[l],Bxr.test(v)){if(v=parseInt(v,10),t){if(v<0){if(u+v<0)return TV()}else if(v>=u)return TV()}l+=1}else{if(v=Lxr(v,u,t),v.code)return v;l+=1}n.push(v)}return n.length!==o?n.length<o?Pxr():Fxr():Ixr.apply(null,n)}IV.exports=jxr});var PV=s((KEe,RV)=>{"use strict";var kxr=LV();RV.exports=kxr});var BV=s((rNe,MV)=>{"use strict";function FV(r,e,t,i,n,a){var u,o,f,v,c;if(a>=e.length)return r.accessors[0](r.data,i);for(f=[],v=e[a],u=t[a],c=0;c<v;c++)o=FV(r,e,t,i,n,a+1),f.push(o),i+=u;return f}MV.exports=FV});var kV=s((eNe,jV)=>{"use strict";var Cxr=yn(),Vxr=BV();function Uxr(r,e,t,i,n){var a;if(e.length===0)return[];for(a=0;a<e.length;a++)if(e[a]===0)return[];return Vxr(Cxr(r),e,t,i,n,0)}jV.exports=Uxr});var VV=s((tNe,CV)=>{"use strict";var Gxr=kV();CV.exports=Gxr});var GV=s((iNe,UV)=>{"use strict";var xxr=V0(),Dxr=U0(),Hxr=j3(),Wxr=y(),zxr=j0(),Xxr=Qn();function Jxr(r,e,t){var i,n,a,u;if(i=e.length,i>0?(a=Xxr(e),u=xxr(e,t)):(a=1,u=[0]),n=Hxr(r,a),n===null)throw new TypeError(Wxr("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new zxr(r,n,e,u,Dxr(e,u),t)}UV.exports=Jxr});var DV=s((nNe,xV)=>{"use strict";var Yxr=GV();xV.exports=Yxr});var WV=s((aNe,HV)=>{"use strict";var ue=rr(),$xr=RC(),Zxr=j0(),Qxr=G3(),Kxr=Qn(),rDr=PV(),eDr=V0(),tDr=V3(),iDr=U0(),nDr=VV(),aDr=DV();function sDr(r){return ue(r,"iterRows",$xr),ue(r,"ndarray",Zxr),ue(r,"nextCartesianIndex",Qxr),ue(r,"numel",Kxr),ue(r,"seq2multislice",rDr),ue(r,"shape2strides",eDr),ue(r,"slice",tDr),ue(r,"strides2offset",iDr),ue(r,"toArray",nDr),ue(r,"zeros",aDr),r}HV.exports=sDr});var XV=s((sNe,zV)=>{"use strict";var uDr=$e();function oDr(r,e,t,i){uDr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}zV.exports=oDr});var M=s((uNe,JV)=>{"use strict";var vDr=XV();JV.exports=vDr});var $V=s((oNe,YV)=>{"use strict";function fDr(r){return e;function e(){return r}}YV.exports=fDr});var _=s((vNe,ZV)=>{"use strict";var cDr=$V();ZV.exports=cDr});var KV=s((fNe,QV)=>{"use strict";var lDr=L();function pDr(r){return r===0&&1/r===lDr}QV.exports=pDr});var pt=s((cNe,rU)=>{"use strict";var gDr=KV();rU.exports=gDr});var iU=s((lNe,tU)=>{"use strict";var mDr=pt(),eU=E(),z3=L();function dDr(r,e){return eU(r)||eU(e)?NaN:r===z3||e===z3?z3:r===e&&r===0?mDr(r)?r:e:r>e?r:e}tU.exports=dDr});var X3=s((pNe,nU)=>{"use strict";var hDr=iU();nU.exports=hDr});var uU=s((gNe,sU)=>{"use strict";var aU=65535;function qDr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&aU)>>>0,o=(e&aU)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}sU.exports=qDr});var vU=s((mNe,oU)=>{"use strict";var yDr=uU();oU.exports=yDr});var J3=s((dNe,fU)=>{"use strict";function bDr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,g=0;g<r;g++)v(f,p,c(o,l)),l+=t,p+=a;return e}fU.exports=bDr});var pU=s((hNe,lU)=>{"use strict";var cU=yn(),wDr=J3(),Y3=8;function EDr(r,e,t,i,n){var a,u,o,f,v,c;if(r<=0)return i;if(o=cU(e),f=cU(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,wDr(r,o,t,a,f,n,u),f.data;if(t===1&&n===1){if(v=r%Y3,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<Y3)return i;for(c=v;c<r;c+=Y3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}lU.exports=EDr});var dU=s((qNe,mU)=>{"use strict";var gU=yn(),NDr=J3(),ea=8;function ODr(r,e,t,i,n,a,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=gU(e),c=gU(n),v.accessorProtocol||c.accessorProtocol)return NDr(r,v,t,i,c,a,u),c.data;if(o=i,f=u,t===1&&a===1){if(l=r%ea,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<ea)return n;for(p=l;p<r;p+=ea)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=ea,f+=ea;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}mU.exports=ODr});var gt=s((yNe,qU)=>{"use strict";var SDr=b(),hU=pU(),ADr=dU();SDr(hU,"ndarray",ADr);qU.exports=hU});var bU=s((bNe,yU)=>{"use strict";function _Dr(){}yU.exports=_Dr});var EU=s((wNe,wU)=>{"use strict";var TDr=bU();function IDr(){return TDr.name==="foo"}wU.exports=IDr});var OU=s((ENe,NU)=>{"use strict";var LDr=EU();NU.exports=LDr});var AU=s((NNe,SU)=>{"use strict";var RDr=I(),PDr=OU(),FDr=y(),MDr=Eo().REGEXP,BDr=PDr();function jDr(r){if(RDr(r)===!1)throw new TypeError(FDr("invalid argument. Must provide a function. Value: `%s`.",r));return BDr?r.name:MDr.exec(r.toString())[1]}SU.exports=jDr});var TU=s((ONe,_U)=>{"use strict";var kDr=AU();_U.exports=kDr});var LU=s((SNe,IU)=>{"use strict";var CDr=li(),VDr=Qr(),UDr=ci(),GDr=fi(),xDr=Ut(),DDr=Qe(),HDr=pr(),WDr=Zr(),zDr=lr(),XDr=[zDr,WDr,DDr,HDr,GDr,xDr,CDr,VDr,UDr];IU.exports=XDr});var RU=s((ANe,JDr)=>{JDr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var kU=s((_Ne,jU)=>{"use strict";var YDr=le(),$Dr=TU(),MU=zt(),ZDr=Io(),QDr=lr(),PU=LU(),FU=RU(),x0=ZDr()?MU(QDr):BU;x0=$Dr(x0)==="TypedArray"?x0:BU;function BU(){}function KDr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof x0)return!0;for(t=0;t<PU.length;t++)if(r instanceof PU[t])return!0;for(;r;){for(e=YDr(r),t=0;t<FU.length;t++)if(FU[t]===e)return!0;r=MU(r)}return!1}jU.exports=KDr});var VU=s((TNe,CU)=>{"use strict";var rHr=kU();CU.exports=rHr});var GU=s((INe,UU)=>{"use strict";var eHr=bi(),tHr=Oi(),iHr=[tHr,eHr];UU.exports=iHr});var xU=s((LNe,nHr)=>{nHr.exports=["Complex64Array","Complex128Array"]});var zU=s((RNe,WU)=>{"use strict";var aHr=le(),sHr=zt(),DU=GU(),HU=xU();function uHr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<DU.length;t++)if(r instanceof DU[t])return!0;for(;r;){for(e=aHr(r),t=0;t<HU.length;t++)if(HU[t]===e)return!0;r=sHr(r)}return!1}WU.exports=uHr});var JU=s((PNe,XU)=>{"use strict";var oHr=zU();XU.exports=oHr});var $U=s((FNe,YU)=>{"use strict";var vHr=y();function fHr(r,e){if(typeof e!="function")throw new TypeError(vHr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}YU.exports=fHr});var QU=s((MNe,ZU)=>{"use strict";var cHr=$U();ZU.exports=cHr});var rG=s((BNe,KU)=>{"use strict";var lHr=li(),pHr=Qr(),gHr=ci(),mHr=fi(),dHr=Ut(),hHr=Qe(),qHr=pr(),yHr=Zr(),bHr=lr(),wHr=bi(),EHr=Oi(),NHr=[[bHr,"Float64Array"],[yHr,"Float32Array"],[hHr,"Int32Array"],[qHr,"Uint32Array"],[mHr,"Int16Array"],[dHr,"Uint16Array"],[lHr,"Int8Array"],[pHr,"Uint8Array"],[gHr,"Uint8ClampedArray"],[wHr,"Complex64Array"],[EHr,"Complex128Array"]];KU.exports=NHr});var tG=s((jNe,eG)=>{"use strict";var OHr=QU(),SHr=le(),AHr=zt(),Gi=rG();function _Hr(r){var e,t;for(t=0;t<Gi.length;t++)if(OHr(r,Gi[t][0]))return Gi[t][1];for(;r;){for(e=SHr(r),t=0;t<Gi.length;t++)if(e===Gi[t][1])return Gi[t][1];r=AHr(r)}}eG.exports=_Hr});var nG=s((kNe,iG)=>{"use strict";var THr=VU(),IHr=JU(),LHr=mi(),RHr=di(),PHr=y(),FHr=tG();function MHr(r){var e,t,i;if(THr(r))e=r;else if(IHr(r))r.BYTES_PER_ELEMENT===8?e=LHr(r,0):e=RHr(r,0);else throw new TypeError(PHr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:FHr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}iG.exports=MHr});var B=s((CNe,aG)=>{"use strict";var BHr=nG();aG.exports=BHr});var $3=s((VNe,sG)=>{"use strict";var jHr=oi(),kHr=z(),CHr=jHr-1;function VHr(){var r=kHr(1+CHr*Math.random());return r>>>0}sG.exports=VHr});var nv=s((UNe,hG)=>{"use strict";var we=b(),mt=R(),uG=M(),Z3=S(),UHr=T(),GHr=Vr(),oG=pe(),xHr=cr().isPrimitive,vG=ee().isPrimitive,gG=Bi(),mG=oi(),Or=pr(),DHr=X3(),iv=vU(),xi=gt(),HHr=B(),Ar=y(),fG=$3(),ur=624,Q3=397,cG=mG>>>0,WHr=19650218>>>0,K3=2147483648>>>0,rv=2147483647>>>0,zHr=1812433253>>>0,XHr=1664525>>>0,JHr=1566083941>>>0,YHr=2636928640>>>0,$Hr=4022730752>>>0,ZHr=2567483615>>>0,ev=[0>>>0,ZHr>>>0],dG=1/(gG+1),QHr=67108864>>>0,KHr=2147483648>>>0,tv=1>>>0,rWr=gG*dG,D0=1,H0=3,dt=2,ht=ur+3,Sr=ur+5,ta=ur+6;function lG(r,e){var t;return e?t="option":t="argument",r.length<ta+1?new RangeError(Ar("invalid %s. `state` array has insufficient length.",t)):r[0]!==D0?new RangeError(Ar("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,D0,r[0])):r[1]!==H0?new RangeError(Ar("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,H0,r[1])):r[dt]!==ur?new RangeError(Ar("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ur,r[dt])):r[ht]!==1?new RangeError(Ar("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[ht])):r[Sr]!==r.length-ta?new RangeError(Ar("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ta,r[Sr])):null}function pG(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=iv(t,zHr)+i>>>0;return r}function eWr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=DHr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=iv(n,XHr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=iv(n,JHr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=KHr,r}function tWr(r){var e,t,i,n;for(n=ur-Q3,t=0;t<n;t++)e=r[t]&K3|r[t+1]&rv,r[t]=r[t+Q3]^e>>>1^ev[e&tv];for(i=ur-1;t<i;t++)e=r[t]&K3|r[t+1]&rv,r[t]=r[t-n]^e>>>1^ev[e&tv];return e=r[i]&K3|r[0]&rv,r[i]=r[Q3-1]^e>>>1^ev[e&tv],r}function iWr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!UHr(r))throw new TypeError(Ar("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Z3(r,"copy")&&(i.copy=r.copy,!xHr(r.copy)))throw new TypeError(Ar("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Z3(r,"state")){if(t=r.state,i.state=!0,!oG(t))throw new TypeError(Ar("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=lG(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),xi(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,t[Sr])}if(n===void 0)if(Z3(r,"seed"))if(n=r.seed,i.seed=!0,vG(n)){if(n>cG)throw new RangeError(Ar("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(GHr(n)===!1||n.length<1)throw new TypeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!vG(n))throw new TypeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>cG)throw new RangeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new Or(ta+a),e[0]=D0,e[1]=H0,e[dt]=ur,e[ht]=1,e[ht+1]=ur,e[Sr]=a,xi.ndarray(a,n,1,0,e,1,Sr+1),t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,a),t=pG(t,ur,WHr),t=eWr(t,ur,n,a)}else n=fG()>>>0}else n=fG()>>>0;return t===void 0&&(e=new Or(ta+1),e[0]=D0,e[1]=H0,e[dt]=ur,e[ht]=1,e[ht+1]=ur,e[Sr]=1,e[Sr+1]=n,t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,1),t=pG(t,ur,n)),we(h,"NAME","mt19937"),mt(h,"seed",o),mt(h,"seedLength",f),uG(h,"state",l,p),mt(h,"stateLength",v),mt(h,"byteLength",c),we(h,"toJSON",g),we(h,"MIN",0),we(h,"MAX",mG),we(h,"normalized",d),we(d,"NAME",h.NAME),mt(d,"seed",o),mt(d,"seedLength",f),uG(d,"state",l,p),mt(d,"stateLength",v),mt(d,"byteLength",c),we(d,"toJSON",g),we(d,"MIN",0),we(d,"MAX",rWr),h;function o(){var m=e[Sr];return xi(m,n,1,new Or(m),1)}function f(){return e[Sr]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return xi(m,e,1,new Or(m),1)}function p(m){var q;if(!oG(m))throw new TypeError(Ar("invalid argument. Must provide a Uint32Array. Value: `%s`.",m));if(q=lG(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?xi(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new Or(m.length)),xi(m.length,m,1,e,1)),t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,e[Sr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=HHr(e),m.params=[],m}function h(){var m,q;return q=e[ht+1],q>=ur&&(t=tWr(t),q=0),m=t[q],e[ht+1]=q+1,m^=m>>>11,m^=m<<7&YHr,m^=m<<15&$Hr,m^=m>>>18,m>>>0}function d(){var m=h()>>>5,q=h()>>>6;return(m*QHr+q)*dG}}hG.exports=iWr});var yG=s((GNe,qG)=>{"use strict";var nWr=nv(),aWr=$3(),sWr=nWr({seed:aWr()});qG.exports=sWr});var J=s((xNe,wG)=>{"use strict";var uWr=b(),bG=yG(),oWr=nv();uWr(bG,"factory",oWr);wG.exports=bG});var SG=s((DNe,OG)=>{"use strict";var EG=k().isPrimitive,av=y(),NG=vr();function vWr(r,e){return!EG(r)||NG(r)?new TypeError(av("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!EG(e)||NG(e)?new TypeError(av("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(av("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}OG.exports=vWr});var _G=s((HNe,AG)=>{"use strict";var fWr=D(),cWr=Kt(),lWr=q0();function pWr(r,e,t){return e+fWr(cWr(lWr*r()),2)*(t-e)}AG.exports=pWr});var sv=s((WNe,BG)=>{"use strict";var Ee=b(),W0=R(),TG=M(),IG=T(),LG=I(),RG=S(),PG=_(),gWr=C(),z0=J().factory,FG=E(),mWr=B(),X0=y(),dWr=SG(),MG=_G();function hWr(){var r,e,t,i,n,a;if(arguments.length===0)e=z0();else if(arguments.length===1){if(r=arguments[0],!IG(r))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(RG(r,"prng")){if(!LG(r.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=z0(r)}else{if(n=arguments[0],a=arguments[1],i=dWr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!IG(r))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(RG(r,"prng")){if(!LG(r.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=z0(r)}else e=z0()}return n===void 0?t=h:t=g,Ee(t,"NAME","arcsine"),r&&r.prng?(Ee(t,"seed",null),Ee(t,"seedLength",null),TG(t,"state",PG(null),gWr),Ee(t,"stateLength",null),Ee(t,"byteLength",null),Ee(t,"toJSON",PG(null)),Ee(t,"PRNG",e)):(W0(t,"seed",u),W0(t,"seedLength",o),TG(t,"state",c,l),W0(t,"stateLength",f),W0(t,"byteLength",v),Ee(t,"toJSON",p),Ee(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=mWr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return MG(e,n,a)}function h(d,m){return FG(d)||FG(m)||d>=m?NaN:MG(e,d,m)}}BG.exports=hWr});var kG=s((zNe,jG)=>{"use strict";var qWr=sv(),yWr=qWr();jG.exports=yWr});var UG=s((XNe,VG)=>{"use strict";var bWr=b(),CG=kG(),wWr=sv();bWr(CG,"factory",wWr);VG.exports=CG});var uv=s((JNe,zG)=>{"use strict";var Ne=b(),J0=R(),GG=M(),xG=T(),EWr=wn().isPrimitive,DG=I(),HG=S(),WG=_(),NWr=C(),Y0=J().factory,OWr=E(),SWr=B(),$0=y();function AWr(){var r,e,t,i;if(arguments.length===0)e=Y0();else if(arguments.length===1&&xG(arguments[0]))if(r=arguments[0],HG(r,"prng")){if(!DG(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Y0(r);else{if(i=arguments[0],!EWr(i))throw new TypeError($0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!xG(r))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(HG(r,"prng")){if(!DG(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Y0(r)}else e=Y0()}return i===void 0?t=p:t=l,Ne(t,"NAME","bernoulli"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),GG(t,"state",WG(null),NWr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",WG(null)),Ne(t,"PRNG",e)):(J0(t,"seed",n),J0(t,"seedLength",a),GG(t,"state",f,v),J0(t,"stateLength",u),J0(t,"byteLength",o),Ne(t,"toJSON",c),Ne(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=SWr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return e()<=i?1:0}function p(g){return OWr(g)||g<0||g>1?NaN:e()<=g?1:0}}zG.exports=AWr});var JG=s((YNe,XG)=>{"use strict";var _Wr=uv(),TWr=_Wr();XG.exports=TWr});var ZG=s(($Ne,$G)=>{"use strict";var IWr=b(),YG=JG(),LWr=uv();IWr(YG,"factory",LWr);$G.exports=YG});var ex=s((ZNe,rx)=>{"use strict";var RWr=U(),QG=sr(),PWr=P(),KG=.00991256303526217;function FWr(r,e){var t,i,n;for(i=QG(-.5*e*e),t=[],t.push(KG/i),t.push(e),n=2;n<r;n++)t[n]=RWr(-2*PWr(KG/t[n-1]+i)),i=QG(-.5*t[n]*t[n]);return t.push(0),t}rx.exports=FWr});var ix=s((QNe,tx)=>{"use strict";function MWr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}tx.exports=MWr});var sx=s((KNe,ax)=>{"use strict";var nx=P();function BWr(r,e,t){var i,n;do i=nx(r())/e,n=nx(r());while(-2*n<i*i);return t?i-e:e-i}ax.exports=BWr});var fx=s((rOe,vx)=>{"use strict";var jWr=Y(),ux=sr(),kWr=ex(),CWr=ix(),VWr=sx(),UWr=128,ox=3.442619855899,ti=kWr(UWr,ox),GWr=CWr(ti),xWr=127;function DWr(r,e){return t;function t(){for(var i,n,a,u,o,f,v;;){if(o=2*r()-1,f=e()&xWr,jWr(o)<GWr[f])return o*ti[f];if(f===0)return VWr(r,ox,o<0);if(u=o*ti[f],a=u*u,v=f+1,i=ux(-.5*(ti[f]*ti[f]-a)),n=ux(-.5*(ti[v]*ti[v]-a)),n+r()*(i-n)<1)return u}}}vx.exports=DWr});var vv=s((eOe,px)=>{"use strict";var qt=b(),Z0=R(),cx=M(),HWr=I(),WWr=T(),zWr=cr().isPrimitive,Q0=S(),XWr=pe(),ov=J().factory,lx=_(),JWr=C(),YWr=z(),$Wr=oi(),ZWr=B(),ia=y(),QWr=fx();function KWr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!WWr(r))throw new TypeError(ia("invalid argument. Must provide an object. Value: `%s`.",r));if(Q0(r,"copy")&&(n.copy=r.copy,!zWr(r.copy)))throw new TypeError(ia("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Q0(r,"prng")){if(!HWr(r.prng))throw new TypeError(ia("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Q0(r,"state")){if(n.state=r.state,!XWr(r.state))throw new TypeError(ia("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Q0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(ia("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=ov(n),e=t.normalized):(t=ov({seed:YWr(1+$Wr*e()),copy:n.copy}),n.seed=null):(t=ov(n),e=t.normalized),i=QWr(e,t),qt(i,"NAME","improved-ziggurat"),n.seed===null?(qt(i,"seed",null),qt(i,"seedLength",null)):(Z0(i,"seed",a),Z0(i,"seedLength",u)),r&&r.prng?(cx(i,"state",lx(null),JWr),qt(i,"stateLength",null),qt(i,"byteLength",null),qt(i,"toJSON",lx(null))):(cx(i,"state",v,c),Z0(i,"stateLength",o),Z0(i,"byteLength",f),qt(i,"toJSON",l)),qt(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=ZWr(t.state),p.params=[],p}}px.exports=KWr});var mx=s((tOe,gx)=>{"use strict";var rzr=vv(),ezr=rzr();gx.exports=ezr});var yt=s((iOe,hx)=>{"use strict";var tzr=b(),dx=mx(),izr=vv();tzr(dx,"factory",izr);hx.exports=dx});var yx=s((nOe,qx)=>{"use strict";var nzr=I(),azr=nzr(Object.assign);qx.exports=azr});var wx=s((aOe,bx)=>{"use strict";var szr=Object.assign;bx.exports=szr});var Nx=s((sOe,Ex)=>{"use strict";var uzr=typeof Object.getOwnPropertySymbols<"u";Ex.exports=uzr});var Ax=s((uOe,Sx)=>{"use strict";var Ox=Si(),ozr=Ox.getOwnPropertySymbols;function vzr(r){return ozr(Ox(r))}Sx.exports=vzr});var Tx=s((oOe,_x)=>{"use strict";function fzr(){return[]}_x.exports=fzr});var Lx=s((vOe,Ix)=>{"use strict";var czr=Nx(),lzr=Ax(),pzr=Tx(),fv;czr?fv=lzr:fv=pzr;Ix.exports=fv});var Px=s((fOe,Rx)=>{"use strict";var gzr=Ti(),mzr=Lx(),dzr=Nn();function hzr(r){var e,t,i;for(e=gzr(r),t=mzr(r),i=0;i<t.length;i++)dzr(r,t[i])&&e.push(t[i]);return e}Rx.exports=hzr});var Mx=s((cOe,Fx)=>{"use strict";var qzr=Px();Fx.exports=qzr});var kx=s((lOe,jx)=>{"use strict";var yzr=Mx(),Bx=Si(),bzr=y();function wzr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(bzr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=Bx(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=yzr(Bx(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}jx.exports=wzr});var na=s((pOe,Cx)=>{"use strict";var Ezr=yx(),Nzr=wx(),Ozr=kx(),cv;Ezr?cv=Nzr:cv=Ozr;Cx.exports=cv});var xx=s((gOe,Gx)=>{"use strict";var Vx=W().isPrimitive,Ux=y();function Szr(r,e){return Vx(r)?Vx(e)?null:new TypeError(Ux("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Ux("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Gx.exports=Szr});var Xx=s((mOe,zx)=>{"use strict";var Dx=P(),Hx=U(),Azr=D(),Wx=1/3;function _zr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(t<1?(f=t+1-Wx,o=1/Hx(9*f),c=Azr(r(),1/t)):(f=t-Wx,o=1/Hx(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,u=.5*n+f*(1-p+Dx(p)),l=r(),(l<a||Dx(l)<u)&&(i=!1)}return f*p*c}zx.exports=_zr});var $x=s((dOe,Yx)=>{"use strict";var lv=D(),Jx=P();function Tzr(r,e,t){var i,n,a,u,o,f,v,c;for(a=t-1,o=lv(a+a,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=lv(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*lv(n/(8*t-8),2),f<c&&(c=a*Jx(4*v*(1-v)),c+=u*u/2,c>=Jx(f)&&(i=!1))));return v}Yx.exports=Tzr});var Qx=s((hOe,Zx)=>{"use strict";var Izr=D(),K0=P();function Lzr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h;for(o=t-1,f=i-1,v=o+f,c=v*K0(v),u=o/v,n=.5/Izr(v,.5),a=!0;a===!0;)l=e(),g=u+l*n,g>=0&&g<=1&&(p=r(),h=o*K0(g/o),h+=f*K0((1-g)/f),h+=c+.5*l*l,h>=K0(p)&&(a=!1));return g}Zx.exports=Lzr});var eD=s((qOe,rD)=>{"use strict";var pv=sr(),Kx=D(),gv=P();function Rzr(r,e,t){for(var i,n,a,u,o,f,v;;)if(u=r(),o=r(),f=Kx(u,1/e),v=Kx(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=gv(u)/e,n=gv(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),pv(i-gv(pv(i)+pv(n))))}rD.exports=Rzr});var nD=s((yOe,iD)=>{"use strict";var tD=Xx(),Pzr=$x(),Fzr=Qx(),Mzr=eD();function Bzr(r,e,t,i){var n,a;return t===i&&t>1.5?Pzr(r,e,t):t>1&&i>1?Fzr(r,e,t,i):t<1&&i<1?Mzr(r,t,i):(n=tD(r,e,t),a=tD(r,e,i),n/(n+a))}iD.exports=Bzr});var qv=s((bOe,gD)=>{"use strict";var Oe=b(),rs=R(),aD=M(),sD=T(),uD=cr().isPrimitive,oD=I(),Di=S(),vD=_(),jzr=C(),fD=yt().factory,es=J().factory,cD=E(),mv=gt(),dv=pr(),hv=pe(),lD=na(),kzr=B(),Se=y(),Czr=xx(),pD=nD();function Vzr(){var r,e,t,i,n,a,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=es(n);else if(arguments.length===1){if(n=arguments[0],!sD(n))throw new TypeError(Se("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Di(n,"copy")&&!uD(n.copy))throw new TypeError(Se("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Di(n,"prng")){if(!oD(n.prng))throw new TypeError(Se("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Di(n,"state")&&!hv(n.state))throw new TypeError(Se("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=lD({},n),n.copy===!1?o=!1:n.state&&(n.state=mv(n.state.length,n.state,1,new dv(n.state.length),1)),n.copy=!1,a=es(n)}}else{if(t=arguments[0],i=arguments[1],f=Czr(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!sD(n))throw new TypeError(Se("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Di(n,"copy")&&!uD(n.copy))throw new TypeError(Se("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Di(n,"prng")){if(!oD(n.prng))throw new TypeError(Se("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Di(n,"state")&&!hv(n.state))throw new TypeError(Se("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=lD({},n),n.copy===!1?o=!1:n.state&&(n.state=mv(n.state.length,n.state,1,new dv(n.state.length),1)),n.copy=!1,a=es(n)}}else n={copy:!1},a=es(n)}return n&&n.prng?e=fD({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=fD({state:r,copy:!1})),t===void 0?u=q:u=m,Oe(u,"NAME","beta"),n&&n.prng?(Oe(u,"seed",null),Oe(u,"seedLength",null),aD(u,"state",vD(null),jzr),Oe(u,"stateLength",null),Oe(u,"byteLength",null),Oe(u,"toJSON",vD(null)),Oe(u,"PRNG",a)):(rs(u,"seed",v),rs(u,"seedLength",c),aD(u,"state",g,h),rs(u,"stateLength",l),rs(u,"byteLength",p),Oe(u,"toJSON",d),Oe(u,"PRNG",a),a=a.normalized),u;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function g(){return a.state}function h(N){if(!hv(N))throw new TypeError(Se("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=mv(N.length,N,1,new dv(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=kzr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function m(){return pD(a,e,t,i)}function q(N,O){return cD(N)||cD(O)||N<=0||O<=0?NaN:pD(a,e,N,O)}}gD.exports=Vzr});var dD=s((wOe,mD)=>{"use strict";var Uzr=qv(),Gzr=Uzr();mD.exports=Gzr});var yD=s((EOe,qD)=>{"use strict";var xzr=b(),hD=dD(),Dzr=qv();xzr(hD,"factory",Dzr);qD.exports=hD});var ND=s((NOe,ED)=>{"use strict";var bD=W().isPrimitive,wD=y();function Hzr(r,e){return bD(r)?bD(e)?null:new TypeError(wD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(wD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}ED.exports=Hzr});var AD=s((OOe,SD)=>{"use strict";var OD=P();function Wzr(r,e,t,i,n){var a,u,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+OD(l)),c=r(),(c<o||OD(c)<f)&&(a=!1)}return 1/t*i*l}SD.exports=Wzr});var Nv=s((SOe,jD)=>{"use strict";var Ae=b(),ts=R(),_D=M(),TD=T(),yv=pe(),ID=cr().isPrimitive,LD=I(),Hi=S(),RD=_(),zzr=C(),PD=yt().factory,is=J().factory,FD=E(),bv=U(),MD=D(),wv=gt(),Ev=pr(),Xzr=B(),BD=na(),_e=y(),Jzr=ND(),ns=AD(),as=1/3;function Yzr(){var r,e,t,i,n,a,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=is(n);else if(arguments.length===1){if(n=arguments[0],!TD(n))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Hi(n,"copy")&&!ID(n.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Hi(n,"prng")){if(!LD(n.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Hi(n,"state")&&!yv(n.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=BD({},n),n.copy===!1?o=!1:n.state&&(n.state=wv(n.state.length,n.state,1,new Ev(n.state.length),1)),n.copy=!1,a=is(n)}}else{if(e=arguments[0],i=arguments[1],f=Jzr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!TD(n))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Hi(n,"copy")&&!ID(n.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Hi(n,"prng")){if(!LD(n.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Hi(n,"state")&&!yv(n.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=BD({},n),n.copy===!1?o=!1:n.state&&(n.state=wv(n.state.length,n.state,1,new Ev(n.state.length),1)),n.copy=!1,a=is(n)}}else n={copy:!1},a=is(n)}return n&&n.prng?t=PD({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=PD({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-as):(u=O,c=e+1-as),v=1/bv(9*c)),Ae(u,"NAME","gamma"),n&&n.prng?(Ae(u,"seed",null),Ae(u,"seedLength",null),_D(u,"state",RD(null),zzr),Ae(u,"stateLength",null),Ae(u,"byteLength",null),Ae(u,"toJSON",RD(null)),Ae(u,"PRNG",a)):(ts(u,"seed",l),ts(u,"seedLength",p),_D(u,"state",d,m),ts(u,"stateLength",g),ts(u,"byteLength",h),Ae(u,"toJSON",q),Ae(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function g(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function m(A){if(!yv(A))throw new TypeError(_e("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));o&&(A=wv(A.length,A,1,new Ev(A.length),1)),a.state=A}function q(){var A={};return A.type="PRNG",A.name=u.NAME,A.state=Xzr(a.state),e===void 0?A.params=[]:A.params=[e,i],A}function N(){return ns(a,t,i,c,v)}function O(){return ns(a,t,i,c,v)*MD(a(),1/e)}function F(A,H){var K,G;return FD(A)||FD(H)||A<=0||H<=0?NaN:A<1?(G=A+1-as,K=1/bv(9*G),ns(a,t,H,G,K)*MD(a(),1/A)):(G=A-as,K=1/bv(9*G),ns(a,t,H,G,K))}}jD.exports=Yzr});var CD=s((AOe,kD)=>{"use strict";var $zr=Nv(),Zzr=$zr();kD.exports=Zzr});var Wi=s((_Oe,UD)=>{"use strict";var Qzr=b(),VD=CD(),Kzr=Nv();Qzr(VD,"factory",Kzr);UD.exports=VD});var HD=s((TOe,DD)=>{"use strict";var GD=W().isPrimitive,xD=y();function rXr(r,e){return GD(r)?GD(e)?null:new TypeError(xD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(xD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}DD.exports=rXr});var zD=s((IOe,WD)=>{"use strict";function eXr(r,e,t){return r(e,1)/r(t,1)}WD.exports=eXr});var Ov=s((LOe,KD)=>{"use strict";var bt=b(),ss=R(),XD=M(),JD=T(),YD=_(),tXr=C(),us=Wi().factory,$D=E(),iXr=B(),ZD=y(),nXr=HD(),QD=zD();function aXr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=us();else if(arguments.length===1){if(i=arguments[0],!JD(i))throw new TypeError(ZD("invalid argument. Options argument must be an object. Value: `%s`.",i));r=us(i)}else{if(e=arguments[0],t=arguments[1],u=nXr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!JD(i))throw new TypeError(ZD("invalid argument. Options argument must be an object. Value: `%s`.",i));r=us(i)}else r=us()}return e===void 0?a=d:a=h,n=r.PRNG,bt(a,"NAME","betaprime"),i&&i.prng?(bt(a,"seed",null),bt(a,"seedLength",null),XD(a,"state",YD(null),tXr),bt(a,"stateLength",null),bt(a,"byteLength",null),bt(a,"toJSON",YD(null))):(ss(a,"seed",o),ss(a,"seedLength",f),XD(a,"state",l,p),ss(a,"stateLength",v),ss(a,"byteLength",c),bt(a,"toJSON",g)),bt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=iXr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return QD(r,e,t)}function d(m,q){return $D(m)||$D(q)||m<=0||q<=0?NaN:QD(r,m,q)}}KD.exports=aXr});var eH=s((ROe,rH)=>{"use strict";var sXr=Ov(),uXr=sXr();rH.exports=uXr});var nH=s((POe,iH)=>{"use strict";var oXr=b(),tH=eH(),vXr=Ov();oXr(tH,"factory",vXr);iH.exports=tH});var sH=s((FOe,aH)=>{"use strict";var fXr=z();function cXr(r){return fXr(r)===r&&r>0}aH.exports=cXr});var Sv=s((MOe,uH)=>{"use strict";var lXr=sH();uH.exports=lXr});var vH=s((BOe,oH)=>{"use strict";function pXr(r){return r>=0&&r<=1}oH.exports=pXr});var cH=s((jOe,fH)=>{"use strict";var gXr=vH();fH.exports=gXr});var gH=s((kOe,pH)=>{"use strict";var mXr=ee().isPrimitive,dXr=wn().isPrimitive,lH=y();function hXr(r,e){return mXr(r)?dXr(e)?null:new TypeError(lH("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(lH("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}pH.exports=hXr});var dH=s((COe,mH)=>{"use strict";function qXr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}mH.exports=qXr});var qH=s((VOe,hH)=>{"use strict";var yXr=E();function bXr(r){return r===0||yXr(r)?r:r<0?-1:1}hH.exports=bXr});var os=s((UOe,yH)=>{"use strict";var wXr=qH();yH.exports=wXr});var wH=s((GOe,bH)=>{"use strict";var EXr=D(),NXr=1/12,OXr=1/360,SXr=1/1260;function AXr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=EXr(r,2),(NXr-(OXr-SXr/e)/e)/r}}bH.exports=AXr});var NH=s((xOe,EH)=>{"use strict";var Av=z(),_Xr=os(),TXr=U(),_v=Y(),vs=P(),fs=wH(),IXr=1/6;function LXr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,H,K,G,Fr,Mr,or,kt;for(H=Av((e+1)*t),v=e-H+1,K=1-t,G=t/K,c=(e+1)*G,u=e*t*K,a=TXr(u),m=1.15+2.53*a,d=-.0873+.0248*m+.01*t,q=e*t+.5,i=(2.83+5.1/m)*a,h=.92-4.2/m,n=.86*h,O=(H+.5)*vs((H+1)/(G*v)),O+=fs(H)+fs(e-H);;){if(or=r(),or<=n)return Mr=or/h-.43,G=Mr*(2*d/(.5-_v(Mr))+m)+q,Av(G);if(or>=h?Mr=r()-.5:(Mr=or/h-.93,Mr=_Xr(Mr)*.5-Mr,or=h*r()),l=.5-_v(Mr),A=Av(Mr*(2*d/l+m)+q),!(A<0||A>e))if(or=or*i/(d/(l*l)+m),p=_v(A-H),p>15){if(or=vs(or),o=p/u,f=(p/3+.625)*p,f+=IXr,f/=u,o*=f+.5,Fr=-(p*p)/(2*u),or<Fr-o||or<=Fr+o&&(g=e-A+1,kt=O+(e+1)*vs(v/g),kt+=(A+.5)*vs(g*G/(A+1)),kt+=-(fs(A)+fs(e-A)),or<=kt))return A}else{if(N=1,H<A)for(F=H;F<=A;F++)N*=c/F-G;else if(H>A)for(F=A;F<=H;F++)or*=c/F-G;if(or<=N)return A}}}EH.exports=LXr});var AH=s((DOe,SH)=>{"use strict";var RXr=dH(),PXr=NH();function OH(r,e,t){return t>.5?e-OH(r,e,1-t):e*t<10?RXr(r,e,t):PXr(r,e,t)}SH.exports=OH});var Tv=s((HOe,MH)=>{"use strict";var Te=b(),cs=R(),_H=M(),TH=T(),IH=I(),LH=S(),RH=_(),FXr=C(),PH=E(),MXr=Sv(),BXr=cH(),ls=J().factory,jXr=B(),ps=y(),kXr=gH(),FH=AH();function CXr(){var r,e,t,i,n,a;if(arguments.length===0)e=ls();else if(arguments.length===1){if(r=arguments[0],!TH(r))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LH(r,"prng")){if(!IH(r.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ls(r)}else{if(n=arguments[0],a=arguments[1],i=kXr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!TH(r))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LH(r,"prng")){if(!IH(r.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ls(r)}else e=ls()}return n===void 0?t=h:t=g,Te(t,"NAME","binomial"),r&&r.prng?(Te(t,"seed",null),Te(t,"seedLength",null),_H(t,"state",RH(null),FXr),Te(t,"stateLength",null),Te(t,"byteLength",null),Te(t,"toJSON",RH(null)),Te(t,"PRNG",e)):(cs(t,"seed",u),cs(t,"seedLength",o),_H(t,"state",c,l),cs(t,"stateLength",f),cs(t,"byteLength",v),Te(t,"toJSON",p),Te(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=jXr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return FH(e,n,a)}function h(d,m){return PH(d)||PH(m)||!MXr(d)||!BXr(m)?NaN:FH(e,d,m)}}MH.exports=CXr});var jH=s((WOe,BH)=>{"use strict";var VXr=Tv(),UXr=VXr();BH.exports=UXr});var VH=s((zOe,CH)=>{"use strict";var GXr=b(),kH=jH(),xXr=Tv();GXr(kH,"factory",xXr);CH.exports=kH});var GH=s((XOe,UH)=>{"use strict";var DXr=U(),HXr=P(),WXr=Kt(),zXr=Qt(),XXr=ot();function JXr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=DXr(-2*HXr(n)),o=XXr*a,t=u*zXr(o),e=!1,u*WXr(o)}return e=!0,t}}UH.exports=JXr});var DH=s((JOe,xH)=>{"use strict";var YXr=U(),$Xr=P(),ZXr=Qt(),QXr=Cr(),KXr=ZXr(QXr);function rJr(r){var e=YXr(-2*$Xr(r));return e*KXr}xH.exports=rJr});var WH=s((YOe,HH)=>{"use strict";var eJr=U(),tJr=P(),iJr=Qt(),nJr=ot();function aJr(r){var e=eJr(-2*tJr(r)),t=nJr*r;return e*iJr(t)}HH.exports=aJr});var Iv=s(($Oe,YH)=>{"use strict";var Dr=b(),gs=R(),zH=M(),sJr=T(),uJr=I(),oJr=cr().isPrimitive,aa=S(),vJr=pe(),XH=J().factory,JH=_(),fJr=C(),cJr=B(),sa=y(),lJr=GH(),pJr=DH(),gJr=WH();function mJr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!sJr(r))throw new TypeError(sa("invalid argument. Must provide an object. Value: `%s`.",r));if(aa(r,"copy")&&(n.copy=r.copy,!oJr(r.copy)))throw new TypeError(sa("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(aa(r,"prng")){if(!uJr(r.prng))throw new TypeError(sa("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(aa(r,"state")){if(n.state=r.state,!vJr(r.state))throw new TypeError(sa("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(aa(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(sa("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=XH(n),e=i.normalized):n.seed=null:(i=XH(n),e=i.normalized),t=lJr(e),Dr(t,"NAME","box-muller"),n.seed===null?(Dr(t,"seed",null),Dr(t,"seedLength",null)):(gs(t,"seed",a),gs(t,"seedLength",u)),r&&r.prng?(zH(t,"state",JH(null),fJr),Dr(t,"stateLength",null),Dr(t,"byteLength",null),Dr(t,"toJSON",JH(null))):(zH(t,"state",v,c),gs(t,"stateLength",o),gs(t,"byteLength",f),Dr(t,"toJSON",l)),Dr(t,"PRNG",e),aa(e,"MIN")?(Dr(t,"MIN",pJr(e.MIN)),Dr(t,"MAX",gJr(e.MIN))):(Dr(t,"MIN",null),Dr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=cJr(i.state),p.params=[],p}}YH.exports=mJr});var ZH=s((ZOe,$H)=>{"use strict";var dJr=Iv(),hJr=dJr();$H.exports=hJr});var rW=s((QOe,KH)=>{"use strict";var qJr=b(),QH=ZH(),yJr=Iv();qJr(QH,"factory",yJr);KH.exports=QH});var iW=s((KOe,tW)=>{"use strict";var bJr=k().isPrimitive,wJr=W().isPrimitive,eW=y(),EJr=vr();function NJr(r,e){return!bJr(r)||EJr(r)?new TypeError(eW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):wJr(e)?null:new TypeError(eW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}tW.exports=NJr});var aW=s((rSe,nW)=>{"use strict";function OJr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}nW.exports=OJr});var uW=s((eSe,sW)=>{"use strict";function SJr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}sW.exports=SJr});var fW=s((tSe,vW)=>{"use strict";var AJr=ar(),oW=me(),_Jr=aW(),TJr=uW(),IJr=.7853981633974483,LJr=3061616997868383e-32,RJr=.3333333333333341,PJr=2147483647;function FJr(r,e,t){var i,n,a,u,o,f,v,c,l;return i=AJr(r),n=i&PJr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=IJr-r,c=LJr-e,r=l+c,e=0),l=r*r,c=l*l,u=_Jr(c),v=l*TJr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=RJr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=oW(c,0),v=u-(l-r),a=-1/c,f=oW(a,0),o=1+f*l,f+a*(o+f*v))}vW.exports=FJr});var lW=s((iSe,cW)=>{"use strict";var MJr=fW();cW.exports=MJr});var mW=s((nSe,gW)=>{"use strict";var BJr=ar(),pW=lW(),jJr=kn(),Lv=[0,0],kJr=2147483647,CJr=1072243195,VJr=2146435072,UJr=1044381696;function GJr(r){var e,t;return e=BJr(r),e&=kJr,e<=CJr?e<UJr?r:pW(r,0,1):e>=VJr?NaN:(t=jJr(r,Lv),pW(Lv[0],Lv[1],1-((t&1)<<1)))}gW.exports=GJr});var Rv=s((aSe,dW)=>{"use strict";var xJr=mW();dW.exports=xJr});var qW=s((sSe,hW)=>{"use strict";var DJr=Rv(),HJr=Cr();function WJr(r,e,t){return e+t*DJr(HJr*(r()-.5))}hW.exports=WJr});var Pv=s((uSe,AW)=>{"use strict";var wt=b(),ms=R(),yW=M(),bW=T(),wW=I(),EW=S(),NW=_(),zJr=C(),OW=E(),zi=yt().factory,XJr=B(),ds=y(),JJr=iW(),SW=qW();function YJr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=zi();else if(arguments.length===1){if(t=arguments[0],!bW(t))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",t));if(EW(t,"prng")){if(!wW(t.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=zi({prng:t.prng})}else e=zi(t)}else{if(u=arguments[0],r=arguments[1],a=JJr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!bW(t))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",t));if(EW(t,"prng")){if(!wW(t.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=zi({prng:t.prng})}else e=zi(t)}else e=zi()}return u===void 0?n=d:n=h,i=e.PRNG,wt(n,"NAME","cauchy"),t&&t.prng?(wt(n,"seed",null),wt(n,"seedLength",null),yW(n,"state",NW(null),zJr),wt(n,"stateLength",null),wt(n,"byteLength",null),wt(n,"toJSON",NW(null))):(ms(n,"seed",o),ms(n,"seedLength",f),yW(n,"state",l,p),ms(n,"stateLength",v),ms(n,"byteLength",c),wt(n,"toJSON",g)),wt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=XJr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return SW(e,u,r)}function d(m,q){return OW(m)||OW(q)||q<=0?NaN:SW(e,m,q)}}AW.exports=YJr});var TW=s((oSe,_W)=>{"use strict";var $Jr=Pv(),ZJr=$Jr();_W.exports=ZJr});var RW=s((vSe,LW)=>{"use strict";var QJr=b(),IW=TW(),KJr=Pv();QJr(IW,"factory",KJr);LW.exports=IW});var Fv=s((fSe,kW)=>{"use strict";var Et=b(),hs=R(),PW=M(),rYr=W().isPrimitive,FW=T(),MW=I(),BW=S(),jW=_(),eYr=C(),tYr=E(),Xi=Wi().factory,iYr=B(),qs=y();function nYr(){var r,e,t,i,n;if(arguments.length===0)r=Xi();else if(arguments.length===1&&FW(arguments[0]))if(t=arguments[0],BW(t,"prng")){if(!MW(t.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Xi({prng:t.prng})}else r=Xi(t);else{if(n=arguments[0],!rYr(n))throw new TypeError(qs("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!FW(t))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(BW(t,"prng")){if(!MW(t.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Xi(n/2,.5,{prng:t.prng})}else r=Xi(n/2,.5,t)}else r=Xi(n/2,.5)}return n===void 0?i=g:i=p,e=r.PRNG,Et(i,"NAME","chisquare"),t&&t.prng?(Et(i,"seed",null),Et(i,"seedLength",null),PW(i,"state",jW(null),eYr),Et(i,"stateLength",null),Et(i,"byteLength",null),Et(i,"toJSON",jW(null))):(hs(i,"seed",a),hs(i,"seedLength",u),PW(i,"state",v,c),hs(i,"stateLength",o),hs(i,"byteLength",f),Et(i,"toJSON",l)),Et(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=iYr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function g(h){return tYr(h)||h<=0?NaN:r(h/2,.5)}}kW.exports=nYr});var VW=s((cSe,CW)=>{"use strict";var aYr=Fv(),sYr=aYr();CW.exports=sYr});var ua=s((lSe,GW)=>{"use strict";var uYr=b(),UW=VW(),oYr=Fv();uYr(UW,"factory",oYr);GW.exports=UW});var Mv=s((pSe,JW)=>{"use strict";var Nt=b(),ys=R(),xW=M(),vYr=W().isPrimitive,DW=T(),HW=I(),WW=S(),zW=_(),fYr=C(),cYr=E(),Ji=ua().factory,lYr=B(),XW=U(),bs=y();function pYr(){var r,e,t,i,n;if(arguments.length===0)r=Ji();else if(arguments.length===1&&DW(arguments[0]))if(t=arguments[0],WW(t,"prng")){if(!HW(t.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ji({prng:t.prng})}else r=Ji(t);else{if(n=arguments[0],!vYr(n))throw new TypeError(bs("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!DW(t))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(WW(t,"prng")){if(!HW(t.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ji(n,{prng:t.prng})}else r=Ji(n,t)}else r=Ji(n)}return n===void 0?i=g:i=p,e=r.PRNG,Nt(i,"NAME","chi"),t&&t.prng?(Nt(i,"seed",null),Nt(i,"seedLength",null),xW(i,"state",zW(null),fYr),Nt(i,"stateLength",null),Nt(i,"byteLength",null),Nt(i,"toJSON",zW(null))):(ys(i,"seed",a),ys(i,"seedLength",u),xW(i,"state",v,c),ys(i,"stateLength",o),ys(i,"byteLength",f),Nt(i,"toJSON",l)),Nt(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=lYr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return XW(r())}function g(h){return cYr(h)||h<=0?NaN:XW(r(h))}}JW.exports=pYr});var $W=s((gSe,YW)=>{"use strict";var gYr=Mv(),mYr=gYr();YW.exports=mYr});var KW=s((mSe,QW)=>{"use strict";var dYr=b(),ZW=$W(),hYr=Mv();dYr(ZW,"factory",hYr);QW.exports=ZW});var tz=s((dSe,ez)=>{"use strict";var qYr=k().isPrimitive,yYr=W().isPrimitive,rz=y(),bYr=vr();function wYr(r,e){return!qYr(r)||bYr(r)?new TypeError(rz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):yYr(e)?null:new TypeError(rz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}ez.exports=wYr});var nz=s((hSe,iz)=>{"use strict";var Bv=E(),EYr=Wn(),NYr=Cr();function OYr(r,e,t){var i;return Bv(r)||Bv(e)||Bv(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+EYr(i)/NYr)/2)}iz.exports=OYr});var uz=s((qSe,sz)=>{"use strict";var az=E();function SYr(r,e){return az(r)||az(e)?NaN:r<e?0:1}sz.exports=SYr});var fz=s((ySe,vz)=>{"use strict";var AYr=_(),oz=E();function _Yr(r){if(oz(r))return AYr(NaN);return e;function e(t){return oz(t)?NaN:t<r?0:1}}vz.exports=_Yr});var ws=s((bSe,lz)=>{"use strict";var TYr=b(),cz=uz(),IYr=fz();TYr(cz,"factory",IYr);lz.exports=cz});var gz=s((wSe,pz)=>{"use strict";var LYr=_(),RYr=ws().factory,jv=E(),PYr=Wn(),FYr=Cr();function MYr(r,e){if(jv(r)||jv(e)||e<0)return LYr(NaN);if(e===0)return RYr(r);return t;function t(i){var n;return jv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+PYr(n)/FYr)/2)}}pz.exports=MYr});var hz=s((ESe,dz)=>{"use strict";var BYr=b(),mz=nz(),jYr=gz();BYr(mz,"factory",jYr);dz.exports=mz});var kv=s((NSe,qz)=>{"use strict";var kYr=hz(),CYr=1e4,VYr=1e-12;function UYr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<CYr;){if(u=(i+n)/2,n-i<VYr)return u;a=kYr(u,e,t),r>a?i=u:n=u,o+=1}return u}qz.exports=UYr});var bz=s((OSe,yz)=>{"use strict";var Cv=E(),GYr=kv();function xYr(r,e,t){return Cv(e)||Cv(t)||Cv(r)||t<0||r<0||r>1?NaN:t===0?e:GYr(r,e,t)}yz.exports=xYr});var Ez=s((SSe,wz)=>{"use strict";var DYr=E();function HYr(r,e){return DYr(r)||r<0||r>1?NaN:e}wz.exports=HYr});var Sz=s((ASe,Oz)=>{"use strict";var WYr=_(),Nz=E();function zYr(r){if(Nz(r))return WYr(NaN);return e;function e(t){return Nz(t)||t<0||t>1?NaN:r}}Oz.exports=zYr});var Vv=s((_Se,_z)=>{"use strict";var XYr=b(),Az=Ez(),JYr=Sz();XYr(Az,"factory",JYr);_z.exports=Az});var Iz=s((TSe,Tz)=>{"use strict";var YYr=_(),$Yr=Vv().factory,Uv=E(),ZYr=kv();function QYr(r,e){if(Uv(r)||Uv(e)||e<0)return YYr(NaN);if(e===0)return $Yr(r);return t;function t(i){return Uv(i)||i<0||i>1?NaN:ZYr(i,r,e)}}Tz.exports=QYr});var Pz=s((ISe,Rz)=>{"use strict";var KYr=b(),Lz=bz(),r$r=Iz();KYr(Lz,"factory",r$r);Rz.exports=Lz});var Mz=s((LSe,Fz)=>{"use strict";var e$r=Pz();function t$r(r,e,t){return e$r(r(),e,t)}Fz.exports=t$r});var Gv=s((RSe,xz)=>{"use strict";var Ie=b(),Es=R(),Bz=M(),jz=T(),kz=I(),Cz=S(),Vz=_(),i$r=C(),Ns=J().factory,Uz=E(),n$r=B(),Os=y(),a$r=tz(),Gz=Mz();function s$r(){var r,e,t,i,n,a;if(arguments.length===0)e=Ns();else if(arguments.length===1){if(r=arguments[0],!jz(r))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Cz(r,"prng")){if(!kz(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else{if(n=arguments[0],a=arguments[1],i=a$r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!jz(r))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Cz(r,"prng")){if(!kz(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else e=Ns()}return n===void 0?t=h:t=g,Ie(t,"NAME","cosine"),r&&r.prng?(Ie(t,"seed",null),Ie(t,"seedLength",null),Bz(t,"state",Vz(null),i$r),Ie(t,"stateLength",null),Ie(t,"byteLength",null),Ie(t,"toJSON",Vz(null)),Ie(t,"PRNG",e)):(Es(t,"seed",u),Es(t,"seedLength",o),Bz(t,"state",c,l),Es(t,"stateLength",f),Es(t,"byteLength",v),Ie(t,"toJSON",p),Ie(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=n$r(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Gz(e,n,a)}function h(d,m){return Uz(d)||Uz(m)||m<=0?NaN:Gz(e,d,m)}}xz.exports=s$r});var Hz=s((PSe,Dz)=>{"use strict";var u$r=Gv(),o$r=u$r();Dz.exports=o$r});var Xz=s((FSe,zz)=>{"use strict";var v$r=b(),Wz=Hz(),f$r=Gv();v$r(Wz,"factory",f$r);zz.exports=Wz});var Zz=s((MSe,$z)=>{"use strict";var Jz=dr().isPrimitive,xv=y(),Yz=vr();function c$r(r,e){return!Jz(r)||Yz(r)?new TypeError(xv("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!Jz(e)||Yz(e)?new TypeError(xv("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(xv("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}$z.exports=c$r});var rX=s((BSe,Kz)=>{"use strict";var Dv=Bi(),Yi=z();function Qz(r,e,t){var i,n,a,u,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(u=0;;){for(a===Dv?(u=Yi(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Yi((a+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=Qz(r,0,Yi(a/f)),!(l>Dv/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===Dv?(o=Yi(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Yi((n+1)/(a+1));;)if(i=r()-v,i=Yi(i/o),i<=a)return i+e}Kz.exports=Qz});var Hv=s((jSe,oX)=>{"use strict";var Le=b(),Ss=R(),eX=M(),tX=T(),iX=I(),nX=S(),aX=_(),l$r=C(),As=J().factory,sX=E(),$i=hr(),p$r=B(),Ot=y(),g$r=Zz(),uX=rX();function m$r(){var r,e,t,i,n,a;if(arguments.length===0)e=As();else if(arguments.length===1){if(r=arguments[0],!tX(r))throw new TypeError(Ot("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nX(r,"prng")){if(!iX(r.prng))throw new TypeError(Ot("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!$i(e.MIN))throw new TypeError(Ot("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!$i(e.MAX))throw new TypeError(Ot("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=As(r)}else{if(n=arguments[0],a=arguments[1],i=g$r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!tX(r))throw new TypeError(Ot("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nX(r,"prng")){if(!iX(r.prng))throw new TypeError(Ot("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!$i(e.MIN))throw new TypeError(Ot("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!$i(e.MAX))throw new TypeError(Ot("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=As(r)}else e=As()}return n===void 0?t=h:t=g,Le(t,"NAME","discrete-uniform"),r&&r.prng?(Le(t,"seed",null),Le(t,"seedLength",null),eX(t,"state",aX(null),l$r),Le(t,"stateLength",null),Le(t,"byteLength",null),Le(t,"toJSON",aX(null)),Le(t,"PRNG",e)):(Ss(t,"seed",u),Ss(t,"seedLength",o),eX(t,"state",c,l),Ss(t,"stateLength",f),Ss(t,"byteLength",v),Le(t,"toJSON",p),Le(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=p$r(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return uX(e,n,a)}function h(d,m){return sX(d)||sX(m)||!$i(d)||!$i(m)||d>m?NaN:uX(e,d,m)}}oX.exports=m$r});var fX=s((kSe,vX)=>{"use strict";var d$r=Hv(),h$r=d$r();vX.exports=h$r});var pX=s((CSe,lX)=>{"use strict";var q$r=b(),cX=fX(),y$r=Hv();q$r(cX,"factory",y$r);lX.exports=cX});var dX=s((VSe,mX)=>{"use strict";var b$r=W().isPrimitive,w$r=ee().isPrimitive,gX=y();function E$r(r,e){return w$r(r)?b$r(e)?null:new TypeError(gX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(gX("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}mX.exports=E$r});var qX=s((USe,hX)=>{"use strict";var N$r=P();function O$r(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*N$r(i)}hX.exports=O$r});var Wv=s((GSe,AX)=>{"use strict";var Re=b(),_s=R(),yX=M(),bX=T(),wX=I(),EX=S(),NX=_(),S$r=C(),Ts=J().factory,OX=E(),A$r=Sv(),_$r=B(),Is=y(),T$r=dX(),SX=qX();function I$r(){var r,e,t,i,n,a;if(arguments.length===0)e=Ts();else if(arguments.length===1){if(t=arguments[0],!bX(t))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",t));if(EX(t,"prng")){if(!wX(t.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Ts(t)}else{if(a=arguments[0],r=arguments[1],n=T$r(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!bX(t))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",t));if(EX(t,"prng")){if(!wX(t.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Ts(t)}else e=Ts()}return a===void 0?i=h:i=g,Re(i,"NAME","erlang"),t&&t.prng?(Re(i,"seed",null),Re(i,"seedLength",null),yX(i,"state",NX(null),S$r),Re(i,"stateLength",null),Re(i,"byteLength",null),Re(i,"toJSON",NX(null)),Re(i,"PRNG",e)):(_s(i,"seed",u),_s(i,"seedLength",o),yX(i,"state",c,l),_s(i,"stateLength",f),_s(i,"byteLength",v),Re(i,"toJSON",p),Re(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=_$r(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return SX(e,a,r)}function h(d,m){return OX(d)||OX(m)||!A$r(d)||m<=0?NaN:SX(e,d,m)}}AX.exports=I$r});var TX=s((xSe,_X)=>{"use strict";var L$r=Wv(),R$r=L$r();_X.exports=R$r});var RX=s((DSe,LX)=>{"use strict";var P$r=b(),IX=TX(),F$r=Wv();P$r(IX,"factory",F$r);LX.exports=IX});var FX=s((HSe,PX)=>{"use strict";var M$r=P();function B$r(r,e){return-M$r(1-r())/e}PX.exports=B$r});var zv=s((WSe,UX)=>{"use strict";var Pe=b(),Ls=R(),MX=M(),j$r=W().isPrimitive,BX=T(),jX=I(),kX=S(),CX=_(),k$r=C(),Rs=J().factory,C$r=E(),V$r=B(),Ps=y(),VX=FX();function U$r(){var r,e,t,i;if(arguments.length===0)t=Rs();else if(arguments.length===1&&BX(arguments[0]))if(e=arguments[0],kX(e,"prng")){if(!jX(e.prng))throw new TypeError(Ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Rs(e);else{if(r=arguments[0],!j$r(r))throw new TypeError(Ps("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!BX(e))throw new TypeError(Ps("invalid argument. Options argument must be an object. Value: `%s`.",e));if(kX(e,"prng")){if(!jX(e.prng))throw new TypeError(Ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Rs(e)}else t=Rs()}return r===void 0?i=p:i=l,Pe(i,"NAME","exponential"),e&&e.prng?(Pe(i,"seed",null),Pe(i,"seedLength",null),MX(i,"state",CX(null),k$r),Pe(i,"stateLength",null),Pe(i,"byteLength",null),Pe(i,"toJSON",CX(null)),Pe(i,"PRNG",t)):(Ls(i,"seed",n),Ls(i,"seedLength",a),MX(i,"state",f,v),Ls(i,"stateLength",u),Ls(i,"byteLength",o),Pe(i,"toJSON",c),Pe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=V$r(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return VX(t,r)}function p(g){return C$r(g)||g<=0?NaN:VX(t,g)}}UX.exports=U$r});var xX=s((zSe,GX)=>{"use strict";var G$r=zv(),x$r=G$r();GX.exports=x$r});var WX=s((XSe,HX)=>{"use strict";var D$r=b(),DX=xX(),H$r=zv();D$r(DX,"factory",H$r);HX.exports=DX});var YX=s((JSe,JX)=>{"use strict";var zX=W().isPrimitive,XX=y();function W$r(r,e){return zX(r)?zX(e)?null:new TypeError(XX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(XX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}JX.exports=W$r});var ZX=s((YSe,$X)=>{"use strict";function z$r(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}$X.exports=z$r});var Xv=s(($Se,aJ)=>{"use strict";var St=b(),Fs=R(),QX=M(),KX=T(),rJ=I(),eJ=S(),tJ=_(),X$r=C(),Zi=ua().factory,iJ=E(),J$r=B(),Ms=y(),Y$r=YX(),nJ=ZX();function $$r(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Zi();else if(arguments.length===1){if(e=arguments[0],!KX(e))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",e));if(eJ(e,"prng")){if(!rJ(e.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Zi({prng:e.prng})}else r=Zi(e)}else{if(a=arguments[0],u=arguments[1],n=Y$r(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!KX(e))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",e));if(eJ(e,"prng")){if(!rJ(e.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Zi({prng:e.prng})}else r=Zi(e)}else r=Zi()}return a===void 0?i=d:i=h,t=r.PRNG,St(i,"NAME","f"),e&&e.prng?(St(i,"seed",null),St(i,"seedLength",null),QX(i,"state",tJ(null),X$r),St(i,"stateLength",null),St(i,"byteLength",null),St(i,"toJSON",tJ(null))):(Fs(i,"seed",o),Fs(i,"seedLength",f),QX(i,"state",l,p),Fs(i,"stateLength",v),Fs(i,"byteLength",c),St(i,"toJSON",g)),St(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=J$r(t.state),a===void 0?m.params=[]:m.params=[a,u],m}function h(){return nJ(r,a,u)}function d(m,q){return iJ(m)||iJ(q)||m<=0||q<=0?NaN:nJ(r,m,q)}}aJ.exports=$$r});var uJ=s((ZSe,sJ)=>{"use strict";var Z$r=Xv(),Q$r=Z$r();sJ.exports=Q$r});var fJ=s((QSe,vJ)=>{"use strict";var K$r=b(),oJ=uJ(),rZr=Xv();K$r(oJ,"factory",rZr);vJ.exports=oJ});var pJ=s((KSe,lJ)=>{"use strict";var cJ=W().isPrimitive,eZr=k().isPrimitive,Jv=vr(),Yv=y();function tZr(r,e,t){return!cJ(r)||Jv(r)?new TypeError(Yv("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!cJ(e)||Jv(e)?new TypeError(Yv("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!eZr(t)||Jv(t)?new TypeError(Yv("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}lJ.exports=tZr});var mJ=s((rAe,gJ)=>{"use strict";var iZr=D(),nZr=P();function aZr(r,e,t,i){return i+t*iZr(-nZr(r()),-1/e)}gJ.exports=aZr});var Zv=s((eAe,EJ)=>{"use strict";var Fe=b(),Bs=R(),dJ=M(),hJ=T(),qJ=I(),yJ=S(),bJ=_(),sZr=C(),js=J().factory,$v=E(),uZr=B(),ks=y(),oZr=pJ(),wJ=mJ();function vZr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=js();else if(arguments.length===1){if(e=arguments[0],!hJ(e))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(yJ(e,"prng")){if(!qJ(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=js(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=oZr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!hJ(e))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(yJ(e,"prng")){if(!qJ(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=js(e)}else t=js()}return r===void 0?i=d:i=h,Fe(i,"NAME","frechet"),e&&e.prng?(Fe(i,"seed",null),Fe(i,"seedLength",null),dJ(i,"state",bJ(null),sZr),Fe(i,"stateLength",null),Fe(i,"byteLength",null),Fe(i,"toJSON",bJ(null)),Fe(i,"PRNG",t)):(Bs(i,"seed",o),Bs(i,"seedLength",f),dJ(i,"state",l,p),Bs(i,"stateLength",v),Bs(i,"byteLength",c),Fe(i,"toJSON",g),Fe(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=uZr(t.state),r===void 0?m.params=[]:m.params=[r,a,u],m}function h(){return wJ(t,r,a,u)}function d(m,q,N){return $v(m)||$v(q)||$v(N)||m<=0||q<=0?NaN:wJ(t,m,q,N)}}EJ.exports=vZr});var OJ=s((tAe,NJ)=>{"use strict";var fZr=Zv(),cZr=fZr();NJ.exports=cZr});var _J=s((iAe,AJ)=>{"use strict";var lZr=b(),SJ=OJ(),pZr=Zv();lZr(SJ,"factory",pZr);AJ.exports=SJ});var LJ=s((nAe,IJ)=>{"use strict";var gZr=z(),TJ=P();function mZr(r,e){var t=r();return t===0&&(t=r()),gZr(TJ(t)/TJ(1-e))}IJ.exports=mZr});var Qv=s((aAe,kJ)=>{"use strict";var Me=b(),Cs=R(),RJ=M(),PJ=T(),dZr=wn().isPrimitive,FJ=I(),MJ=S(),BJ=_(),hZr=C(),Vs=J().factory,qZr=E(),yZr=B(),Us=y(),jJ=LJ();function bZr(){var r,e,t,i;if(arguments.length===0)e=Vs();else if(arguments.length===1&&PJ(arguments[0]))if(r=arguments[0],MJ(r,"prng")){if(!FJ(r.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vs(r);else{if(i=arguments[0],!dZr(i))throw new TypeError(Us("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!PJ(r))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",r));if(MJ(r,"prng")){if(!FJ(r.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vs(r)}else e=Vs()}return i===void 0?t=p:t=l,Me(t,"NAME","geometric"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),RJ(t,"state",BJ(null),hZr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",BJ(null)),Me(t,"PRNG",e)):(Cs(t,"seed",n),Cs(t,"seedLength",a),RJ(t,"state",f,v),Cs(t,"stateLength",u),Cs(t,"byteLength",o),Me(t,"toJSON",c),Me(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=yZr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return jJ(e,i)}function p(g){return qZr(g)||g<0||g>1?NaN:jJ(e,g)}}kJ.exports=bZr});var VJ=s((sAe,CJ)=>{"use strict";var wZr=Qv(),EZr=wZr();CJ.exports=EZr});var xJ=s((uAe,GJ)=>{"use strict";var NZr=b(),UJ=VJ(),OZr=Qv();NZr(UJ,"factory",OZr);GJ.exports=UJ});var WJ=s((oAe,HJ)=>{"use strict";var SZr=k().isPrimitive,AZr=W().isPrimitive,DJ=y(),_Zr=vr();function TZr(r,e){return!SZr(r)||_Zr(r)?new TypeError(DJ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):AZr(e)?null:new TypeError(DJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}HJ.exports=TZr});var JJ=s((vAe,XJ)=>{"use strict";var zJ=P();function IZr(r,e,t){return e-t*zJ(-zJ(r()))}XJ.exports=IZr});var Kv=s((fAe,tY)=>{"use strict";var Be=b(),Gs=R(),YJ=M(),$J=T(),ZJ=I(),QJ=S(),KJ=_(),LZr=C(),xs=J().factory,rY=E(),RZr=B(),Ds=y(),PZr=WJ(),eY=JJ();function FZr(){var r,e,t,i,n,a;if(arguments.length===0)t=xs();else if(arguments.length===1){if(e=arguments[0],!$J(e))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",e));if(QJ(e,"prng")){if(!ZJ(e.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=xs(e)}else{if(a=arguments[0],r=arguments[1],n=PZr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!$J(e))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",e));if(QJ(e,"prng")){if(!ZJ(e.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=xs(e)}else t=xs()}return a===void 0?i=h:i=g,Be(i,"NAME","gumbel"),e&&e.prng?(Be(i,"seed",null),Be(i,"seedLength",null),YJ(i,"state",KJ(null),LZr),Be(i,"stateLength",null),Be(i,"byteLength",null),Be(i,"toJSON",KJ(null)),Be(i,"PRNG",t)):(Gs(i,"seed",u),Gs(i,"seedLength",o),YJ(i,"state",c,l),Gs(i,"stateLength",f),Gs(i,"byteLength",v),Be(i,"toJSON",p),Be(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=RZr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return eY(t,a,r)}function h(d,m){return rY(d)||rY(m)||m<=0?NaN:eY(t,d,m)}}tY.exports=FZr});var nY=s((cAe,iY)=>{"use strict";var MZr=Kv(),BZr=MZr();iY.exports=BZr});var uY=s((lAe,sY)=>{"use strict";var jZr=b(),aY=nY(),kZr=Kv();jZr(aY,"factory",kZr);sY.exports=aY});var vY=s((pAe,oY)=>{"use strict";var rf=qr().isPrimitive,oa=y();function CZr(r,e,t){return rf(r)?rf(e)?rf(t)?t>r?new RangeError(oa("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(oa("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(oa("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(oa("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(oa("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}oY.exports=CZr});var fY=s((gAe,VZr)=>{VZr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var lY=s((mAe,cY)=>{"use strict";var UZr=E(),GZr=hr(),xZr=ki(),DZr=L(),HZr=fY(),WZr=170;function zZr(r){return UZr(r)?NaN:GZr(r)?r<0?NaN:r<=WZr?HZr[r]:DZr:xZr(r+1)}cY.exports=zZr});var gY=s((dAe,pY)=>{"use strict";var XZr=lY();pY.exports=XZr});var dY=s((hAe,mY)=>{"use strict";var At=gY();function JZr(r,e,t,i){var n,a,u;for(i<t?(n=At(t)*At(e+t-i)/(At(e+t)*At(t-i)),u=0):(n=At(e)*At(i)/(At(i-t)*At(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}mY.exports=JZr});var qY=s((qAe,hY)=>{"use strict";var Hs=dY();function YZr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=Hs(r,n,a,u),t-o):(a=t,n=e-t,o=Hs(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=Hs(r,n,a,u),o):(n=e-t,a=t,o=Hs(r,n,a,u),i-o))}hY.exports=YZr});var tf=s((yAe,AY)=>{"use strict";var je=b(),Ws=R(),yY=M(),bY=T(),wY=I(),EY=S(),NY=_(),$Zr=C(),zs=J().factory,ef=x2(),OY=L(),ZZr=B(),Xs=y(),QZr=vY(),SY=qY();function KZr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=zs();else if(arguments.length===1){if(r=arguments[0],!bY(r))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(EY(r,"prng")){if(!wY(r.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=zs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=QZr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!bY(r))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(EY(r,"prng")){if(!wY(r.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=zs(r)}else e=zs()}return n===void 0?t=d:t=h,je(t,"NAME","hypergeometric"),r&&r.prng?(je(t,"seed",null),je(t,"seedLength",null),yY(t,"state",NY(null),$Zr),je(t,"stateLength",null),je(t,"byteLength",null),je(t,"toJSON",NY(null)),je(t,"PRNG",e)):(Ws(t,"seed",o),Ws(t,"seedLength",f),yY(t,"state",l,p),Ws(t,"stateLength",v),Ws(t,"byteLength",c),je(t,"toJSON",g),je(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=ZZr(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return SY(e,n,a,u)}function d(m,q,N){return m===OY||q===OY||!ef(m)||!ef(q)||!ef(N)||N>m?NaN:SY(e,m,q,N)}}AY.exports=KZr});var TY=s((bAe,_Y)=>{"use strict";var rQr=tf(),eQr=rQr();_Y.exports=eQr});var RY=s((wAe,LY)=>{"use strict";var tQr=b(),IY=TY(),iQr=tf();tQr(IY,"factory",iQr);LY.exports=IY});var BY=s((EAe,MY)=>{"use strict";var PY=W().isPrimitive,FY=y();function nQr(r,e){return PY(r)?PY(e)?null:new TypeError(FY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(FY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}MY.exports=nQr});var nf=s((NAe,xY)=>{"use strict";var _t=b(),Js=R(),jY=M(),kY=T(),CY=I(),VY=S(),UY=_(),aQr=C(),Qi=Wi().factory,GY=E(),sQr=B(),Ys=y(),uQr=BY();function oQr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Qi();else if(arguments.length===1){if(i=arguments[0],!kY(i))throw new TypeError(Ys("invalid argument. Options argument must be an object. Value: `%s`.",i));if(VY(i,"prng")){if(!CY(i.prng))throw new TypeError(Ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Qi({prng:i.prng})}else r=Qi(i)}else{if(e=arguments[0],t=arguments[1],u=uQr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!kY(i))throw new TypeError(Ys("invalid argument. Options argument must be an object. Value: `%s`.",i));if(VY(i,"prng")){if(!CY(i.prng))throw new TypeError(Ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Qi(e,t,{prng:i.prng})}else r=Qi(e,t,i)}else r=Qi(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,_t(a,"NAME","invgamma"),i&&i.prng?(_t(a,"seed",null),_t(a,"seedLength",null),jY(a,"state",UY(null),aQr),_t(a,"stateLength",null),_t(a,"byteLength",null),_t(a,"toJSON",UY(null))):(Js(a,"seed",o),Js(a,"seedLength",f),jY(a,"state",l,p),Js(a,"stateLength",v),Js(a,"byteLength",c),_t(a,"toJSON",g)),_t(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=sQr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return 1/r()}function d(m,q){return GY(m)||GY(q)||m<=0||q<=0?NaN:1/r(m,q)}}xY.exports=oQr});var HY=s((OAe,DY)=>{"use strict";var vQr=nf(),fQr=vQr();DY.exports=fQr});var XY=s((SAe,zY)=>{"use strict";var cQr=b(),WY=HY(),lQr=nf();cQr(WY,"factory",lQr);zY.exports=WY});var ZY=s((AAe,$Y)=>{"use strict";var JY=W().isPrimitive,YY=y();function pQr(r,e){return JY(r)?JY(e)?null:new TypeError(YY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(YY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}$Y.exports=pQr});var r$=s((_Ae,KY)=>{"use strict";var QY=D();function gQr(r,e,t){var i=r();return QY(1-QY(1-i,1/t),1/e)}KY.exports=gQr});var af=s((TAe,o$)=>{"use strict";var ke=b(),$s=R(),e$=M(),t$=T(),i$=I(),n$=S(),a$=_(),mQr=C(),Zs=J().factory,s$=E(),dQr=B(),Qs=y(),hQr=ZY(),u$=r$();function qQr(){var r,e,t,i,n,a;if(arguments.length===0)e=Zs();else if(arguments.length===1){if(r=arguments[0],!t$(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(n$(r,"prng")){if(!i$(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else{if(n=arguments[0],a=arguments[1],i=hQr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!t$(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(n$(r,"prng")){if(!i$(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else e=Zs()}return n===void 0?t=h:t=g,ke(t,"NAME","kumaraswamy"),r&&r.prng?(ke(t,"seed",null),ke(t,"seedLength",null),e$(t,"state",a$(null),mQr),ke(t,"stateLength",null),ke(t,"byteLength",null),ke(t,"toJSON",a$(null)),ke(t,"PRNG",e)):($s(t,"seed",u),$s(t,"seedLength",o),e$(t,"state",c,l),$s(t,"stateLength",f),$s(t,"byteLength",v),ke(t,"toJSON",p),ke(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=dQr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return u$(e,n,a)}function h(d,m){return s$(d)||s$(m)||d<=0||m<=0?NaN:u$(e,d,m)}}o$.exports=qQr});var f$=s((IAe,v$)=>{"use strict";var yQr=af(),bQr=yQr();v$.exports=bQr});var p$=s((LAe,l$)=>{"use strict";var wQr=b(),c$=f$(),EQr=af();wQr(c$,"factory",EQr);l$.exports=c$});var d$=s((RAe,m$)=>{"use strict";var NQr=k().isPrimitive,OQr=W().isPrimitive,g$=y(),SQr=vr();function AQr(r,e){return!NQr(r)||SQr(r)?new TypeError(g$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):OQr(e)?null:new TypeError(g$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}m$.exports=AQr});var q$=s((PAe,h$)=>{"use strict";var _Qr=os(),TQr=Y(),IQr=P();function LQr(r,e,t){var i=r()-.5;return e-t*_Qr(i)*IQr(1-2*TQr(i))}h$.exports=LQr});var sf=s((FAe,A$)=>{"use strict";var Ce=b(),Ks=R(),y$=M(),b$=T(),w$=I(),E$=S(),N$=_(),RQr=C(),ru=J().factory,O$=E(),PQr=B(),eu=y(),FQr=d$(),S$=q$();function MQr(){var r,e,t,i,n,a;if(arguments.length===0)e=ru();else if(arguments.length===1){if(r=arguments[0],!b$(r))throw new TypeError(eu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(E$(r,"prng")){if(!w$(r.prng))throw new TypeError(eu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ru(r)}else{if(n=arguments[0],a=arguments[1],i=FQr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!b$(r))throw new TypeError(eu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(E$(r,"prng")){if(!w$(r.prng))throw new TypeError(eu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ru(r)}else e=ru()}return n===void 0?t=h:t=g,Ce(t,"NAME","laplace"),r&&r.prng?(Ce(t,"seed",null),Ce(t,"seedLength",null),y$(t,"state",N$(null),RQr),Ce(t,"stateLength",null),Ce(t,"byteLength",null),Ce(t,"toJSON",N$(null)),Ce(t,"PRNG",e)):(Ks(t,"seed",u),Ks(t,"seedLength",o),y$(t,"state",c,l),Ks(t,"stateLength",f),Ks(t,"byteLength",v),Ce(t,"toJSON",p),Ce(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=PQr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return S$(e,n,a)}function h(d,m){return O$(d)||O$(m)||m<=0?NaN:S$(e,d,m)}}A$.exports=MQr});var T$=s((MAe,_$)=>{"use strict";var BQr=sf(),jQr=BQr();_$.exports=jQr});var R$=s((BAe,L$)=>{"use strict";var kQr=b(),I$=T$(),CQr=sf();kQr(I$,"factory",CQr);L$.exports=I$});var M$=s((jAe,F$)=>{"use strict";var VQr=k().isPrimitive,UQr=W().isPrimitive,P$=y(),GQr=vr();function xQr(r,e){return!VQr(r)||GQr(r)?new TypeError(P$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):UQr(e)?null:new TypeError(P$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}F$.exports=xQr});var j$=s((kAe,B$)=>{"use strict";function DQr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}B$.exports=DQr});var C$=s((CAe,k$)=>{"use strict";function HQr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}k$.exports=HQr});var U$=s((VAe,V$)=>{"use strict";function WQr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}V$.exports=WQr});var x$=s((UAe,G$)=>{"use strict";function zQr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}G$.exports=zQr});var H$=s((GAe,D$)=>{"use strict";function XQr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}D$.exports=XQr});var J$=s((xAe,X$)=>{"use strict";var JQr=E(),W$=U(),z$=P(),YQr=L(),$Qr=V(),ZQr=j$(),QQr=C$(),KQr=U$(),rKr=x$(),eKr=H$(),tKr=.08913147449493408,iKr=2.249481201171875,nKr=.807220458984375,aKr=.9399557113647461,sKr=.9836282730102539;function uKr(r){var e,t,i,n,a,u;return JQr(r)?NaN:r===1?YQr:r===-1?$Qr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=ZQr(t),e*(a*tKr+a*u)):n>=.25?(a=W$(-2*z$(n)),n-=.25,u=QQr(n),e*(a/(iKr+u))):(n=W$(-z$(n)),n<3?(i=n-1.125,u=KQr(i),e*(nKr*n+u*n)):n<6?(i=n-3,u=rKr(i),e*(aKr*n+u*n)):(i=n-6,u=eKr(i),e*(sKr*n+u*n))))}X$.exports=uKr});var uf=s((DAe,Y$)=>{"use strict";var oKr=J$();Y$.exports=oKr});var Z$=s((HAe,$$)=>{"use strict";var vKr=uf(),of=E(),fKr=U();function cKr(r,e,t){var i,n;return of(e)||of(t)||of(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*fKr(2),i+n*vKr(2*r-1))}$$.exports=cKr});var K$=s((WAe,Q$)=>{"use strict";var lKr=_(),pKr=Vv().factory,gKr=uf(),vf=E(),mKr=U();function dKr(r,e){var t,i;if(vf(r)||vf(e)||e<0)return lKr(NaN);return e===0&&pKr(r),t=r,i=e*mKr(2),n;function n(a){return vf(a)||a<0||a>1?NaN:t+i*gKr(2*a-1)}}Q$.exports=dKr});var ff=s((zAe,eZ)=>{"use strict";var hKr=b(),rZ=Z$(),qKr=K$();hKr(rZ,"factory",qKr);eZ.exports=rZ});var iZ=s((XAe,tZ)=>{"use strict";var yKr=ff();function bKr(r,e,t){var i=yKr(1-r()/2,0,1);return e+t/(i*i)}tZ.exports=bKr});var cf=s((JAe,cZ)=>{"use strict";var Ve=b(),tu=R(),nZ=M(),aZ=T(),sZ=I(),uZ=S(),oZ=_(),wKr=C(),iu=J().factory,vZ=E(),EKr=B(),nu=y(),NKr=M$(),fZ=iZ();function OKr(){var r,e,t,i,n,a;if(arguments.length===0)e=iu();else if(arguments.length===1){if(r=arguments[0],!aZ(r))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uZ(r,"prng")){if(!sZ(r.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=iu(r)}else{if(n=arguments[0],a=arguments[1],i=NKr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!aZ(r))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uZ(r,"prng")){if(!sZ(r.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=iu(r)}else e=iu()}return n===void 0?t=h:t=g,Ve(t,"NAME","levy"),r&&r.prng?(Ve(t,"seed",null),Ve(t,"seedLength",null),nZ(t,"state",oZ(null),wKr),Ve(t,"stateLength",null),Ve(t,"byteLength",null),Ve(t,"toJSON",oZ(null)),Ve(t,"PRNG",e)):(tu(t,"seed",u),tu(t,"seedLength",o),nZ(t,"state",c,l),tu(t,"stateLength",f),tu(t,"byteLength",v),Ve(t,"toJSON",p),Ve(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=EKr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return fZ(e,n,a)}function h(d,m){return vZ(d)||vZ(m)||m<=0?NaN:fZ(e,d,m)}}cZ.exports=OKr});var pZ=s((YAe,lZ)=>{"use strict";var SKr=cf(),AKr=SKr();lZ.exports=AKr});var dZ=s(($Ae,mZ)=>{"use strict";var _Kr=b(),gZ=pZ(),TKr=cf();_Kr(gZ,"factory",TKr);mZ.exports=gZ});var yZ=s((ZAe,qZ)=>{"use strict";var IKr=k().isPrimitive,LKr=W().isPrimitive,RKr=vr(),hZ=y();function PKr(r,e){return!IKr(r)||RKr(r)?new TypeError(hZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):LKr(e)?null:new TypeError(hZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}qZ.exports=PKr});var wZ=s((QAe,bZ)=>{"use strict";var FKr=P();function MKr(r,e,t){var i=r();return e+t*FKr(i/(1-i))}bZ.exports=MKr});var lf=s((KAe,IZ)=>{"use strict";var Ue=b(),au=R(),EZ=M(),NZ=T(),OZ=I(),SZ=S(),AZ=_(),BKr=C(),su=J().factory,_Z=E(),jKr=B(),uu=y(),kKr=yZ(),TZ=wZ();function CKr(){var r,e,t,i,n,a;if(arguments.length===0)e=su();else if(arguments.length===1){if(r=arguments[0],!NZ(r))throw new TypeError(uu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SZ(r,"prng")){if(!OZ(r.prng))throw new TypeError(uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=su(r)}else{if(n=arguments[0],a=arguments[1],i=kKr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!NZ(r))throw new TypeError(uu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SZ(r,"prng")){if(!OZ(r.prng))throw new TypeError(uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=su(r)}else e=su()}return n===void 0?t=h:t=g,Ue(t,"NAME","logistic"),r&&r.prng?(Ue(t,"seed",null),Ue(t,"seedLength",null),EZ(t,"state",AZ(null),BKr),Ue(t,"stateLength",null),Ue(t,"byteLength",null),Ue(t,"toJSON",AZ(null)),Ue(t,"PRNG",e)):(au(t,"seed",u),au(t,"seedLength",o),EZ(t,"state",c,l),au(t,"stateLength",f),au(t,"byteLength",v),Ue(t,"toJSON",p),Ue(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=jKr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return TZ(e,n,a)}function h(d,m){return _Z(d)||_Z(m)||m<=0?NaN:TZ(e,d,m)}}IZ.exports=CKr});var RZ=s((r_e,LZ)=>{"use strict";var VKr=lf(),UKr=VKr();LZ.exports=UKr});var MZ=s((e_e,FZ)=>{"use strict";var GKr=b(),PZ=RZ(),xKr=lf();GKr(PZ,"factory",xKr);FZ.exports=PZ});var kZ=s((t_e,jZ)=>{"use strict";var DKr=k().isPrimitive,HKr=W().isPrimitive,BZ=y(),WKr=vr();function zKr(r,e){return!DKr(r)||WKr(r)?new TypeError(BZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):HKr(e)?null:new TypeError(BZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}jZ.exports=zKr});var VZ=s((i_e,CZ)=>{"use strict";var XKr=sr();function JKr(r,e,t){return XKr(e+t*r())}CZ.exports=JKr});var pf=s((n_e,XZ)=>{"use strict";var Tt=b(),ou=R(),UZ=M(),GZ=T(),xZ=I(),DZ=S(),HZ=_(),YKr=C(),Ki=yt().factory,WZ=E(),$Kr=B(),vu=y(),ZKr=kZ(),zZ=VZ();function QKr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ki();else if(arguments.length===1){if(t=arguments[0],!GZ(t))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(DZ(t,"prng")){if(!xZ(t.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ki({prng:t.prng})}else e=Ki(t)}else{if(u=arguments[0],r=arguments[1],a=ZKr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!GZ(t))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(DZ(t,"prng")){if(!xZ(t.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ki({prng:t.prng})}else e=Ki(t)}else e=Ki()}return u===void 0?n=d:n=h,i=e.PRNG,Tt(n,"NAME","lognormal"),t&&t.prng?(Tt(n,"seed",null),Tt(n,"seedLength",null),UZ(n,"state",HZ(null),YKr),Tt(n,"stateLength",null),Tt(n,"byteLength",null),Tt(n,"toJSON",HZ(null))):(ou(n,"seed",o),ou(n,"seedLength",f),UZ(n,"state",l,p),ou(n,"stateLength",v),ou(n,"byteLength",c),Tt(n,"toJSON",g)),Tt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=$Kr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return zZ(e,u,r)}function d(m,q){return WZ(m)||WZ(q)||q<=0?NaN:zZ(e,m,q)}}XZ.exports=QKr});var YZ=s((a_e,JZ)=>{"use strict";var KKr=pf(),rre=KKr();JZ.exports=rre});var QZ=s((s_e,ZZ)=>{"use strict";var ere=b(),$Z=YZ(),tre=pf();ere($Z,"factory",tre);ZZ.exports=$Z});var gf=s((u_e,KZ)=>{"use strict";var ire=vi(),nre=z(),are=ire-1;function sre(){var r=nre(1+are*Math.random());return r|0}KZ.exports=sre});var hf=s((o_e,nQ)=>{"use strict";var Ge=b(),It=R(),rQ=M(),mf=S(),ure=T(),ore=cr().isPrimitive,vre=Vr(),fre=ee().isPrimitive,eQ=Oa(),Jr=y(),fu=vi(),_r=Qe(),rn=gt(),cre=B(),tQ=gf(),df=fu-1|0,lre=fu-1|0,pre=16807,cu=1,lu=2,Lt=2,Tr=4,va=5;function iQ(r,e){var t;return e?t="option":t="argument",r.length<va+1?new RangeError(Jr("invalid %s. State array has insufficient length.",t)):r[0]!==cu?new RangeError(Jr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,cu,r[0])):r[1]!==lu?new RangeError(Jr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,lu,r[1])):r[Lt]!==1?new RangeError(Jr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Lt])):r[Tr]!==r.length-va?new RangeError(Jr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-va,r[Tr])):null}function gre(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!ure(r))throw new TypeError(Jr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(mf(r,"copy")&&(i.copy=r.copy,!ore(r.copy)))throw new TypeError(Jr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(mf(r,"state")){if(t=r.state,i.state=!0,!eQ(t))throw new TypeError(Jr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=iQ(t,!0),u)throw u;i.copy===!1?e=t:(e=new _r(t.length),rn(t.length,t,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,t[Tr])}if(n===void 0)if(mf(r,"seed"))if(n=r.seed,i.seed=!0,fre(n)){if(n>lre)throw new RangeError(Jr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(vre(n)&&n.length>0)a=n.length,e=new _r(va+a),e[0]=cu,e[1]=lu,e[Lt]=1,e[Tr]=a,rn.ndarray(a,n,1,0,e,1,Tr+1),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Jr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=tQ()|0}else n=tQ()|0;return t===void 0&&(e=new _r(va+1),e[0]=cu,e[1]=lu,e[Lt]=1,e[Tr]=1,e[Tr+1]=n,t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Ge(h,"NAME","minstd"),It(h,"seed",o),It(h,"seedLength",f),rQ(h,"state",l,p),It(h,"stateLength",v),It(h,"byteLength",c),Ge(h,"toJSON",g),Ge(h,"MIN",1),Ge(h,"MAX",fu-1),Ge(h,"normalized",d),Ge(d,"NAME",h.NAME),It(d,"seed",o),It(d,"seedLength",f),rQ(d,"state",l,p),It(d,"stateLength",v),It(d,"byteLength",c),Ge(d,"toJSON",g),Ge(d,"MIN",(h.MIN-1)/df),Ge(d,"MAX",(h.MAX-1)/df),h;function o(){var m=e[Tr];return rn(m,n,1,new _r(m),1)}function f(){return e[Tr]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return rn(m,e,1,new _r(m),1)}function p(m){var q;if(!eQ(m))throw new TypeError(Jr("invalid argument. Must provide an Int32Array. Value: `%s`.",m));if(q=iQ(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?rn(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new _r(m.length)),rn(m.length,m,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,e[Tr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=cre(e),m.params=[],m}function h(){var m=t[0]|0;return m=pre*m%fu|0,t[0]=m,m|0}function d(){return(h()-1)/df}}nQ.exports=gre});var sQ=s((v_e,aQ)=>{"use strict";var mre=hf(),dre=gf(),hre=mre({seed:dre()});aQ.exports=hre});var vQ=s((f_e,oQ)=>{"use strict";var qre=b(),uQ=sQ(),yre=hf();qre(uQ,"factory",yre);oQ.exports=uQ});var cQ=s((c_e,fQ)=>{"use strict";var bre=E(),wre=8;function Ere(r,e,t){var i,n;for(n=0;n<wre;n++)if(i=r(),bre(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}fQ.exports=Ere});var qf=s((l_e,lQ)=>{"use strict";var Nre=vi(),Ore=z(),Sre=Nre-1;function Are(){var r=Ore(1+Sre*Math.random());return r|0}lQ.exports=Are});var wf=s((p_e,qQ)=>{"use strict";var xe=b(),Rt=R(),pQ=M(),yf=S(),_re=T(),Tre=cr().isPrimitive,Ire=Vr(),Lre=ee().isPrimitive,gQ=Oa(),en=gt(),Rre=z(),Ir=Qe(),fa=vi(),Pre=B(),Hr=y(),mQ=cQ(),dQ=qf(),bf=fa-1|0,Fre=fa-1|0,Mre=16807,Rr=32,mu=1,du=3,Pt=2,tn=Rr+3,Lr=Rr+6,ca=Rr+7,pu=tn+1,gu=tn+2;function hQ(r,e){var t;return e?t="option":t="argument",r.length<ca+1?new RangeError(Hr("invalid %s. State array has insufficient length.",t)):r[0]!==mu?new RangeError(Hr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,mu,r[0])):r[1]!==du?new RangeError(Hr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,du,r[1])):r[Pt]!==Rr?new RangeError(Hr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Rr,r[Pt])):r[tn]!==2?new RangeError(Hr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[tn])):r[Lr]!==r.length-ca?new RangeError(Hr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ca,r[Lr])):null}function Bre(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!_re(r))throw new TypeError(Hr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yf(r,"copy")&&(i.copy=r.copy,!Tre(r.copy)))throw new TypeError(Hr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(yf(r,"state")){if(t=r.state,i.state=!0,!gQ(t))throw new TypeError(Hr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=hQ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ir(t.length),en(t.length,t,1,e,1)),t=new Ir(e.buffer,e.byteOffset+(Pt+1)*e.BYTES_PER_ELEMENT,Rr),n=new Ir(e.buffer,e.byteOffset+(Lr+1)*e.BYTES_PER_ELEMENT,t[Lr])}if(n===void 0)if(yf(r,"seed"))if(n=r.seed,i.seed=!0,Lre(n)){if(n>Fre)throw new RangeError(Hr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(Ire(n)&&n.length>0)a=n.length,e=new Ir(ca+a),e[0]=mu,e[1]=du,e[Pt]=Rr,e[tn]=2,e[gu]=n[0],e[Lr]=a,en.ndarray(a,n,1,0,e,1,Lr+1),t=new Ir(e.buffer,e.byteOffset+(Pt+1)*e.BYTES_PER_ELEMENT,Rr),n=new Ir(e.buffer,e.byteOffset+(Lr+1)*e.BYTES_PER_ELEMENT,a),t=mQ(h,t,Rr),e[pu]=t[0];else throw new TypeError(Hr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=dQ()|0}else n=dQ()|0;return t===void 0&&(e=new Ir(ca+1),e[0]=mu,e[1]=du,e[Pt]=Rr,e[tn]=2,e[gu]=n,e[Lr]=1,e[Lr+1]=n,t=new Ir(e.buffer,e.byteOffset+(Pt+1)*e.BYTES_PER_ELEMENT,Rr),n=new Ir(e.buffer,e.byteOffset+(Lr+1)*e.BYTES_PER_ELEMENT,1),t=mQ(h,t,Rr),e[pu]=t[0]),xe(d,"NAME","minstd-shuffle"),Rt(d,"seed",o),Rt(d,"seedLength",f),pQ(d,"state",l,p),Rt(d,"stateLength",v),Rt(d,"byteLength",c),xe(d,"toJSON",g),xe(d,"MIN",1),xe(d,"MAX",fa-1),xe(d,"normalized",m),xe(m,"NAME",d.NAME),Rt(m,"seed",o),Rt(m,"seedLength",f),pQ(m,"state",l,p),Rt(m,"stateLength",v),Rt(m,"byteLength",c),xe(m,"toJSON",g),xe(m,"MIN",(d.MIN-1)/bf),xe(m,"MAX",(d.MAX-1)/bf),d;function o(){var q=e[Lr];return en(q,n,1,new Ir(q),1)}function f(){return e[Lr]}function v(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return en(q,e,1,new Ir(q),1)}function p(q){var N;if(!gQ(q))throw new TypeError(Hr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=hQ(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?en(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Ir(q.length)),en(q.length,q,1,e,1)),t=new Ir(e.buffer,e.byteOffset+(Pt+1)*e.BYTES_PER_ELEMENT,Rr),n=new Ir(e.buffer,e.byteOffset+(Lr+1)*e.BYTES_PER_ELEMENT,e[Lr])}function g(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=Pre(e),q.params=[],q}function h(){var q=e[gu]|0;return q=Mre*q%fa|0,e[gu]=q,q|0}function d(){var q,N;return q=e[pu],N=Rre(Rr*(q/fa)),q=t[N],e[pu]=q,t[N]=h(),q}function m(){return(d()-1)/bf}}qQ.exports=Bre});var bQ=s((g_e,yQ)=>{"use strict";var jre=wf(),kre=qf(),Cre=jre({seed:kre()});yQ.exports=Cre});var NQ=s((m_e,EQ)=>{"use strict";var Vre=b(),wQ=bQ(),Ure=wf();Vre(wQ,"factory",Ure);EQ.exports=wQ});var SQ=s((d_e,OQ)=>{"use strict";var Gre=sr();function xre(r,e){for(var t=r(),i=1;t>Gre(-e);)i+=1,t*=r();return i-1}OQ.exports=xre});var _Q=s((h_e,AQ)=>{"use strict";var Dre=z();function Hre(r){return Dre(r)===r&&r<0}AQ.exports=Hre});var IQ=s((q_e,TQ)=>{"use strict";var Wre=_Q();TQ.exports=Wre});var RQ=s((y_e,LQ)=>{"use strict";var zre=IQ(),Xre=zn();function Jre(r){return zre(r)?NaN:Xre(r+1)}LQ.exports=Jre});var FQ=s((b_e,PQ)=>{"use strict";var Yre=RQ();PQ.exports=Yre});var kQ=s((w_e,jQ)=>{"use strict";var $re=FQ(),MQ=z(),Zre=os(),Qre=U(),BQ=Y(),hu=P(),Kre=p3(),ree=1/12,eee=1/360;function tee(r,e){var t,i,n,a,u,o,f,v,c,l;for(t=Qre(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-BQ(c))+f,c+=e+.445,MQ(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=Zre(c)*.5-c,l=u*r()),a=.5-BQ(c),(a>=.013||a>=l)&&(v=MQ((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*hu(e/v),c+=-e-Kre+v,c-=(ree-eee/(v*v))/v,v>=10&&c>=hu(l*t)||(c=v*hu(e)-e-$re(v),v>=0&&v<=9&&c>=hu(l))))return v}}jQ.exports=tee});var VQ=s((E_e,CQ)=>{"use strict";var iee=SQ(),nee=kQ();function aee(r,e){return e<30?iee(r,e):nee(r,e)}CQ.exports=aee});var Ef=s((N_e,zQ)=>{"use strict";var De=b(),qu=R(),UQ=M(),see=W().isPrimitive,GQ=T(),xQ=I(),DQ=S(),HQ=_(),uee=C(),yu=J().factory,oee=E(),vee=B(),bu=y(),WQ=VQ();function fee(){var r,e,t,i;if(arguments.length===0)t=yu();else if(arguments.length===1&&GQ(arguments[0]))if(e=arguments[0],DQ(e,"prng")){if(!xQ(e.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=yu(e);else{if(r=arguments[0],!see(r))throw new TypeError(bu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!GQ(e))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(DQ(e,"prng")){if(!xQ(e.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=yu(e)}else t=yu()}return r===void 0?i=p:i=l,De(i,"NAME","poisson"),e&&e.prng?(De(i,"seed",null),De(i,"seedLength",null),UQ(i,"state",HQ(null),uee),De(i,"stateLength",null),De(i,"byteLength",null),De(i,"toJSON",HQ(null)),De(i,"PRNG",t)):(qu(i,"seed",n),qu(i,"seedLength",a),UQ(i,"state",f,v),qu(i,"stateLength",u),qu(i,"byteLength",o),De(i,"toJSON",c),De(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=vee(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return WQ(t,r)}function p(g){return oee(g)||g<=0?NaN:WQ(t,g)}}zQ.exports=fee});var JQ=s((O_e,XQ)=>{"use strict";var cee=Ef(),lee=cee();XQ.exports=lee});var Nf=s((S_e,$Q)=>{"use strict";var pee=b(),YQ=JQ(),gee=Ef();pee(YQ,"factory",gee);$Q.exports=YQ});var QQ=s((A_e,ZQ)=>{"use strict";var mee=W().isPrimitive,dee=k().isPrimitive,Of=y(),hee=vr();function qee(r,e){return mee(r)?!dee(e)||hee(e)?new TypeError(Of("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Of("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Of("invalid argument. First argument must be a positive number. Value: `%s`.",r))}ZQ.exports=qee});var Tf=s((__e,sK)=>{"use strict";var Ft=b(),wu=R(),KQ=M(),nn=S(),rK=T(),Sf=pe(),eK=cr().isPrimitive,tK=I(),iK=_(),yee=C(),nK=E(),an=Nf().factory,Eu=Wi().factory,Af=gt(),_f=pr(),aK=na(),bee=B(),He=y(),wee=QQ();function Eee(){var r,e,t,i,n,a,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=an(i);else if(arguments.length===1){if(i=arguments[0],!rK(i))throw new TypeError(He("invalid argument. Options argument must be an object. Value: `%s`.",i));if(nn(i,"copy")&&!eK(i.copy))throw new TypeError(He("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(nn(i,"prng")){if(!tK(i.prng))throw new TypeError(He("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=an({prng:i.prng})}else{if(nn(i,"state")&&!Sf(i.state))throw new TypeError(He("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=aK({},i),i.copy===!1?u=!1:i.state&&(i.state=Af(i.state.length,i.state,1,new _f(i.state.length),1)),i.copy=!1,t=an(i)}}else{if(v=arguments[0],f=arguments[1],o=wee(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!rK(i))throw new TypeError(He("invalid argument. Options argument must be an object. Value: `%s`.",i));if(nn(i,"copy")&&!eK(i.copy))throw new TypeError(He("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(nn(i,"prng")){if(!tK(i.prng))throw new TypeError(He("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=an({prng:i.prng})}else{if(nn(i,"state")&&!Sf(i.state))throw new TypeError(He("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=aK({},i),i.copy===!1?u=!1:i.state&&(i.state=Af(i.state.length,i.state,1,new _f(i.state.length),1)),i.copy=!1,t=an(i)}}else i={copy:!1},t=an(i)}return i&&i.prng?v===void 0?r=Eu({prng:i.prng}):r=Eu(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=Eu({state:e,copy:!1}):r=Eu(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=q,a=t.PRNG,Ft(n,"NAME","negative-binomial"),i&&i.prng?(Ft(n,"seed",null),Ft(n,"seedLength",null),KQ(n,"state",iK(null),yee),Ft(n,"stateLength",null),Ft(n,"byteLength",null),Ft(n,"toJSON",iK(null))):(wu(n,"seed",c),wu(n,"seedLength",l),KQ(n,"state",h,d),wu(n,"stateLength",p),wu(n,"byteLength",g),Ft(n,"toJSON",m)),Ft(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function g(){return a.byteLength}function h(){return a.state}function d(O){if(!Sf(O))throw new TypeError(He("invalid argument. Must provide a Uint32Array. Value: `%s`.",O));u&&(O=Af(O.length,O,1,new _f(O.length),1)),a.state=O}function m(){var O={};return O.type="PRNG",O.name=n.NAME,O.state=bee(a.state),v===void 0?O.params=[]:O.params=[v,f],O}function q(){return t(r())}function N(O,F){return nK(O)||nK(F)||F<=0||F>=1?NaN:t(r(O,F/(1-F)))}}sK.exports=Eee});var oK=s((T_e,uK)=>{"use strict";var Nee=Tf(),Oee=Nee();uK.exports=Oee});var cK=s((I_e,fK)=>{"use strict";var See=b(),vK=oK(),Aee=Tf();See(vK,"factory",Aee);fK.exports=vK});var gK=s((L_e,pK)=>{"use strict";var _ee=k().isPrimitive,Tee=W().isPrimitive,lK=y(),Iee=vr();function Lee(r,e){return!_ee(r)||Iee(r)?new TypeError(lK("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Tee(e)?null:new TypeError(lK("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}pK.exports=Lee});var dK=s((R_e,mK)=>{"use strict";function Ree(r,e,t){return e+t*r()}mK.exports=Ree});var If=s((P_e,OK)=>{"use strict";var Mt=b(),Nu=R(),hK=M(),qK=T(),yK=I(),bK=S(),wK=_(),Pee=C(),sn=yt().factory,EK=E(),Fee=B(),Ou=y(),Mee=gK(),NK=dK();function Bee(){var r,e,t,i,n,a,u;if(arguments.length===0)e=sn();else if(arguments.length===1){if(t=arguments[0],!qK(t))throw new TypeError(Ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(bK(t,"prng")){if(!yK(t.prng))throw new TypeError(Ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=sn({prng:t.prng})}else e=sn(t)}else{if(u=arguments[0],r=arguments[1],a=Mee(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!qK(t))throw new TypeError(Ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(bK(t,"prng")){if(!yK(t.prng))throw new TypeError(Ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=sn({prng:t.prng})}else e=sn(t)}else e=sn()}return u===void 0?n=d:n=h,i=e.PRNG,Mt(n,"NAME","normal"),t&&t.prng?(Mt(n,"seed",null),Mt(n,"seedLength",null),hK(n,"state",wK(null),Pee),Mt(n,"stateLength",null),Mt(n,"byteLength",null),Mt(n,"toJSON",wK(null))):(Nu(n,"seed",o),Nu(n,"seedLength",f),hK(n,"state",l,p),Nu(n,"stateLength",v),Nu(n,"byteLength",c),Mt(n,"toJSON",g)),Mt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=Fee(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return NK(e,u,r)}function d(m,q){return EK(m)||EK(q)||q<=0?NaN:NK(e,m,q)}}OK.exports=Bee});var AK=s((F_e,SK)=>{"use strict";var jee=If(),kee=jee();SK.exports=kee});var IK=s((M_e,TK)=>{"use strict";var Cee=b(),_K=AK(),Vee=If();Cee(_K,"factory",Vee);TK.exports=_K});var FK=s((B_e,PK)=>{"use strict";var LK=W().isPrimitive,RK=y();function Uee(r,e){return LK(r)?LK(e)?null:new TypeError(RK("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(RK("invalid argument. First argument must be a positive number. Value: `%s`.",r))}PK.exports=Uee});var BK=s((j_e,MK)=>{"use strict";var Gee=D();function xee(r,e,t){return t/Gee(r(),1/e)}MK.exports=xee});var Lf=s((k_e,DK)=>{"use strict";var We=b(),Su=R(),jK=M(),kK=T(),CK=I(),VK=S(),UK=_(),Dee=C(),Au=J().factory,GK=E(),Hee=B(),_u=y(),Wee=FK(),xK=BK();function zee(){var r,e,t,i,n,a;if(arguments.length===0)i=Au();else if(arguments.length===1){if(t=arguments[0],!kK(t))throw new TypeError(_u("invalid argument. Options argument must be an object. Value: `%s`.",t));if(VK(t,"prng")){if(!CK(t.prng))throw new TypeError(_u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Au(t)}else{if(r=arguments[0],e=arguments[1],a=Wee(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!kK(t))throw new TypeError(_u("invalid argument. Options argument must be an object. Value: `%s`.",t));if(VK(t,"prng")){if(!CK(t.prng))throw new TypeError(_u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Au(t)}else i=Au()}return r===void 0?n=h:n=g,We(n,"NAME","pareto-type1"),t&&t.prng?(We(n,"seed",null),We(n,"seedLength",null),jK(n,"state",UK(null),Dee),We(n,"stateLength",null),We(n,"byteLength",null),We(n,"toJSON",UK(null)),We(n,"PRNG",i)):(Su(n,"seed",u),Su(n,"seedLength",o),jK(n,"state",c,l),Su(n,"stateLength",f),Su(n,"byteLength",v),We(n,"toJSON",p),We(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=Hee(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function g(){return xK(i,r,e)}function h(d,m){return GK(d)||GK(m)||d<=0||m<=0?NaN:xK(i,d,m)}}DK.exports=zee});var WK=s((C_e,HK)=>{"use strict";var Xee=Lf(),Jee=Xee();HK.exports=Jee});var JK=s((V_e,XK)=>{"use strict";var Yee=b(),zK=WK(),$ee=Lf();Yee(zK,"factory",$ee);XK.exports=zK});var $K=s((U_e,YK)=>{"use strict";var Zee=U(),Qee=P();function Kee(r,e){return e*Zee(-2*Qee(r()))}YK.exports=Kee});var Rf=s((G_e,irr)=>{"use strict";var ze=b(),Tu=R(),ZK=M(),rte=W().isPrimitive,QK=T(),KK=I(),rrr=S(),err=_(),ete=C(),Iu=J().factory,tte=E(),ite=B(),Lu=y(),trr=$K();function nte(){var r,e,t,i;if(arguments.length===0)t=Iu();else if(arguments.length===1&&QK(arguments[0]))if(e=arguments[0],rrr(e,"prng")){if(!KK(e.prng))throw new TypeError(Lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Iu(e);else{if(r=arguments[0],!rte(r))throw new TypeError(Lu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!QK(e))throw new TypeError(Lu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(rrr(e,"prng")){if(!KK(e.prng))throw new TypeError(Lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Iu(e)}else t=Iu()}return r===void 0?i=p:i=l,ze(i,"NAME","rayleigh"),e&&e.prng?(ze(i,"seed",null),ze(i,"seedLength",null),ZK(i,"state",err(null),ete),ze(i,"stateLength",null),ze(i,"byteLength",null),ze(i,"toJSON",err(null)),ze(i,"PRNG",t)):(Tu(i,"seed",n),Tu(i,"seedLength",a),ZK(i,"state",f,v),Tu(i,"stateLength",u),Tu(i,"byteLength",o),ze(i,"toJSON",c),ze(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=ite(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return trr(t,r)}function p(g){return tte(g)||g<=0?NaN:trr(t,g)}}irr.exports=nte});var arr=s((x_e,nrr)=>{"use strict";var ate=Rf(),ste=ate();nrr.exports=ste});var orr=s((D_e,urr)=>{"use strict";var ute=b(),srr=arr(),ote=Rf();ute(srr,"factory",ote);urr.exports=srr});var Bf=s((H_e,hrr)=>{"use strict";var Bt=b(),Ru=R(),vrr=M(),un=S(),frr=W().isPrimitive,crr=T(),Pf=pe(),lrr=cr().isPrimitive,vte=E(),prr=I(),grr=_(),fte=C(),Pu=ua().factory,on=yt().factory,Ff=gt(),Mf=pr(),mrr=na(),cte=B(),oe=y(),drr=U();function lte(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=on(n);else if(arguments.length===1)if(crr(arguments[0])){if(n=arguments[0],un(n,"copy")&&!lrr(n.copy))throw new TypeError(oe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(un(n,"prng")){if(!prr(n.prng))throw new TypeError(oe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=on({prng:n.prng})}else{if(un(n,"state")&&!Pf(n.state))throw new TypeError(oe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=mrr({},n),n.copy===!1?u=!1:n.state&&(n.state=Ff(n.state.length,n.state,1,new Mf(n.state.length),1)),n.copy=!1,t=on(n)}}else{if(o=arguments[0],!frr(o))throw new TypeError(oe("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=on(n)}else{if(o=arguments[0],!frr(o))throw new TypeError(oe("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!crr(n))throw new TypeError(oe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(un(n,"copy")&&!lrr(n.copy))throw new TypeError(oe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(un(n,"prng")){if(!prr(n.prng))throw new TypeError(oe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=on({prng:n.prng})}else{if(un(n,"state")&&!Pf(n.state))throw new TypeError(oe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=mrr({},n),n.copy===!1?u=!1:n.state&&(n.state=Ff(n.state.length,n.state,1,new Mf(n.state.length),1)),n.copy=!1,t=on(n)}}return n&&n.prng?o===void 0?r=Pu({prng:n.prng}):r=Pu(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Pu({state:e,copy:!1}):r=Pu(o,{state:e,copy:!1})),o===void 0?a=m:a=d,i=t.PRNG,Bt(a,"NAME","t"),n&&n.prng?(Bt(a,"seed",null),Bt(a,"seedLength",null),vrr(a,"state",grr(null),fte),Bt(a,"stateLength",null),Bt(a,"byteLength",null),Bt(a,"toJSON",grr(null))):(Ru(a,"seed",f),Ru(a,"seedLength",v),vrr(a,"state",p,g),Ru(a,"stateLength",c),Ru(a,"byteLength",l),Bt(a,"toJSON",h)),Bt(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function g(q){if(!Pf(q))throw new TypeError(oe("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=Ff(q.length,q,1,new Mf(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=cte(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/drr(r()/o)}function m(q){return vte(q)||q<=0?NaN:t()/drr(r(q)/q)}}hrr.exports=lte});var yrr=s((W_e,qrr)=>{"use strict";var pte=Bf(),gte=pte();qrr.exports=gte});var Err=s((z_e,wrr)=>{"use strict";var mte=b(),brr=yrr(),dte=Bf();mte(brr,"factory",dte);wrr.exports=brr});var Orr=s((X_e,Nrr)=>{"use strict";var jf=k().isPrimitive,Fu=y(),kf=vr();function hte(r,e,t){return!jf(r)||kf(r)?new TypeError(Fu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!jf(e)||kf(e)?new TypeError(Fu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!jf(t)||kf(t)?new TypeError(Fu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Fu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}Nrr.exports=hte});var _rr=s((J_e,Arr)=>{"use strict";var Srr=U();function qte(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+Srr(a*u)):(a=(t-e)*(t-i),t-Srr(a*(1-u)))}Arr.exports=qte});var Vf=s((Y_e,Mrr)=>{"use strict";var Xe=b(),Mu=R(),Trr=M(),Irr=T(),Lrr=I(),Rrr=S(),Prr=_(),yte=C(),Bu=J().factory,Cf=E(),bte=B(),ju=y(),wte=Orr(),Frr=_rr();function Ete(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Bu();else if(arguments.length===1){if(r=arguments[0],!Irr(r))throw new TypeError(ju("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rrr(r,"prng")){if(!Lrr(r.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=wte(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!Irr(r))throw new TypeError(ju("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rrr(r,"prng")){if(!Lrr(r.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bu(r)}else e=Bu()}return n===void 0?t=d:t=h,Xe(t,"NAME","triangular"),r&&r.prng?(Xe(t,"seed",null),Xe(t,"seedLength",null),Trr(t,"state",Prr(null),yte),Xe(t,"stateLength",null),Xe(t,"byteLength",null),Xe(t,"toJSON",Prr(null)),Xe(t,"PRNG",e)):(Mu(t,"seed",o),Mu(t,"seedLength",f),Trr(t,"state",l,p),Mu(t,"stateLength",v),Mu(t,"byteLength",c),Xe(t,"toJSON",g),Xe(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=bte(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return Frr(e,n,a,u)}function d(m,q,N){return Cf(m)||Cf(q)||Cf(N)||!(m<=N&&N<=q)?NaN:Frr(e,m,q,N)}}Mrr.exports=Ete});var jrr=s(($_e,Brr)=>{"use strict";var Nte=Vf(),Ote=Nte();Brr.exports=Ote});var Vrr=s((Z_e,Crr)=>{"use strict";var Ste=b(),krr=jrr(),Ate=Vf();Ste(krr,"factory",Ate);Crr.exports=krr});var Drr=s((Q_e,xrr)=>{"use strict";var Urr=k().isPrimitive,Uf=y(),Grr=vr();function _te(r,e){return!Urr(r)||Grr(r)?new TypeError(Uf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Urr(e)||Grr(e)?new TypeError(Uf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Uf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}xrr.exports=_te});var Wrr=s((K_e,Hrr)=>{"use strict";function Tte(r,e,t){var i=r();return t*i+(1-i)*e}Hrr.exports=Tte});var Gf=s((rTe,Krr)=>{"use strict";var Je=b(),ku=R(),zrr=M(),Xrr=T(),Jrr=I(),Yrr=S(),$rr=_(),Ite=C(),Cu=J().factory,Zrr=E(),Lte=B(),Vu=y(),Rte=Drr(),Qrr=Wrr();function Pte(){var r,e,t,i,n,a;if(arguments.length===0)e=Cu();else if(arguments.length===1){if(r=arguments[0],!Xrr(r))throw new TypeError(Vu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Yrr(r,"prng")){if(!Jrr(r.prng))throw new TypeError(Vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Cu(r)}else{if(n=arguments[0],a=arguments[1],i=Rte(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Xrr(r))throw new TypeError(Vu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Yrr(r,"prng")){if(!Jrr(r.prng))throw new TypeError(Vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Cu(r)}else e=Cu()}return n===void 0?t=h:t=g,Je(t,"NAME","uniform"),r&&r.prng?(Je(t,"seed",null),Je(t,"seedLength",null),zrr(t,"state",$rr(null),Ite),Je(t,"stateLength",null),Je(t,"byteLength",null),Je(t,"toJSON",$rr(null)),Je(t,"PRNG",e)):(ku(t,"seed",u),ku(t,"seedLength",o),zrr(t,"state",c,l),ku(t,"stateLength",f),ku(t,"byteLength",v),Je(t,"toJSON",p),Je(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Lte(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Qrr(e,n,a)}function h(d,m){return Zrr(d)||Zrr(m)||d>=m?NaN:Qrr(e,d,m)}}Krr.exports=Pte});var eer=s((eTe,rer)=>{"use strict";var Fte=Gf(),Mte=Fte();rer.exports=Mte});var ner=s((tTe,ier)=>{"use strict";var Bte=b(),ter=eer(),jte=Gf();Bte(ter,"factory",jte);ier.exports=ter});var oer=s((iTe,uer)=>{"use strict";var aer=W().isPrimitive,ser=y();function kte(r,e){return aer(r)?aer(e)?null:new TypeError(ser("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(ser("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}uer.exports=kte});var fer=s((nTe,ver)=>{"use strict";var Cte=D(),Vte=P();function Ute(r,e,t){return t*Cte(-Vte(1-r()),1/e)}ver.exports=Ute});var xf=s((aTe,qer)=>{"use strict";var Ye=b(),Uu=R(),cer=M(),ler=T(),per=I(),ger=S(),mer=_(),Gte=C(),Gu=J().factory,der=E(),xte=B(),xu=y(),Dte=oer(),her=fer();function Hte(){var r,e,t,i,n,a;if(arguments.length===0)t=Gu();else if(arguments.length===1){if(e=arguments[0],!ler(e))throw new TypeError(xu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ger(e,"prng")){if(!per(e.prng))throw new TypeError(xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gu(e)}else{if(a=arguments[0],r=arguments[1],n=Dte(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!ler(e))throw new TypeError(xu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ger(e,"prng")){if(!per(e.prng))throw new TypeError(xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gu(e)}else t=Gu()}return r===void 0?i=h:i=g,Ye(i,"NAME","weibull"),e&&e.prng?(Ye(i,"seed",null),Ye(i,"seedLength",null),cer(i,"state",mer(null),Gte),Ye(i,"stateLength",null),Ye(i,"byteLength",null),Ye(i,"toJSON",mer(null)),Ye(i,"PRNG",t)):(Uu(i,"seed",u),Uu(i,"seedLength",o),cer(i,"state",c,l),Uu(i,"stateLength",f),Uu(i,"byteLength",v),Ye(i,"toJSON",p),Ye(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=xte(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return her(t,a,r)}function h(d,m){return der(d)||der(m)||d<=0||m<=0?NaN:her(t,d,m)}}qer.exports=Hte});var ber=s((sTe,yer)=>{"use strict";var Wte=xf(),zte=Wte();yer.exports=zte});var Ner=s((uTe,Eer)=>{"use strict";var Xte=b(),wer=ber(),Jte=xf();Xte(wer,"factory",Jte);Eer.exports=wer});var Ser=s((oTe,Oer)=>{"use strict";var Yte=mr(),$te=dr().isPrimitive,Zte=y(),Qte=fo();function Kte(r){if($te(r))return r;if(Yte(r))return Qte(r);throw new TypeError(Zte("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}Oer.exports=Kte});var _er=s((vTe,Aer)=>{"use strict";var rie=Ser();Aer.exports=rie});var Ier=s((fTe,Ter)=>{"use strict";var j=rr(),eie=UG().factory,tie=ZG().factory,iie=yD().factory,nie=nH().factory,aie=VH().factory,sie=rW().factory,uie=RW().factory,oie=KW().factory,vie=ua().factory,fie=Xz().factory,cie=pX().factory,lie=RX().factory,pie=WX().factory,gie=fJ().factory,mie=_J().factory,die=Wi().factory,hie=xJ().factory,qie=uY().factory,yie=RY().factory,bie=yt().factory,wie=XY().factory,Eie=p$().factory,Nie=R$().factory,Oie=dZ().factory,Sie=MZ().factory,Aie=QZ().factory,_ie=vQ().factory,Tie=NQ().factory,Iie=J().factory,Lie=cK().factory,Rie=IK().factory,Pie=JK().factory,Fie=Nf().factory,Mie=orr().factory,Bie=Err().factory,jie=Vrr().factory,kie=ner().factory,Cie=Ner().factory,Vie=_er();function Uie(r){return j(r,"arcsine",eie),j(r,"bernoulli",tie),j(r,"beta",iie),j(r,"betaprime",nie),j(r,"binomial",aie),j(r,"boxMuller",sie),j(r,"cauchy",uie),j(r,"chi",oie),j(r,"chisquare",vie),j(r,"cosine",fie),j(r,"discreteUniform",cie),j(r,"erlang",lie),j(r,"exponential",pie),j(r,"f",gie),j(r,"frechet",mie),j(r,"gamma",die),j(r,"geometric",hie),j(r,"gumbel",qie),j(r,"hypergeometric",yie),j(r,"improvedZiggurat",bie),j(r,"invgamma",wie),j(r,"kumaraswamy",Eie),j(r,"laplace",Nie),j(r,"levy",Oie),j(r,"logistic",Sie),j(r,"lognormal",Aie),j(r,"minstd",_ie),j(r,"minstdShuffle",Tie),j(r,"mt19937",Iie),j(r,"negativeBinomial",Lie),j(r,"normal",Rie),j(r,"pareto1",Pie),j(r,"poisson",Fie),j(r,"rayleigh",Mie),j(r,"t",Bie),j(r,"triangular",jie),j(r,"uniform",kie),j(r,"weibull",Cie),r.base={},j(r.base,"normalizeSeed",Vie),r}Ter.exports=Uie});var Rer=s((cTe,Ler)=>{"use strict";var Gie=T(),Du=S(),xie=dr().isPrimitive,Die=ee().isPrimitive,Hie=qr().isPrimitive,Wie=Wa().isPrimitive,la=y();function zie(r,e){return Gie(e)?Du(e,"period")&&(r.period=e.period,!Die(e.period))?new TypeError(la("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Du(e,"amplitude")&&(r.amplitude=e.amplitude,!Wie(e.amplitude))?new TypeError(la("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Du(e,"offset")&&(r.offset=e.offset,!xie(e.offset))?new TypeError(la("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Du(e,"iter")&&(r.iter=e.iter,!Hie(e.iter))?new TypeError(la("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(la("invalid argument. Options argument must be an object. Value: `%s`.",e))}Ler.exports=zie});var Ber=s((lTe,Mer)=>{"use strict";var Df=b(),Per=dn(),Xie=Rv(),Jie=y0(),Yie=q0(),$ie=Cr(),Zie=Rer();function Fer(r){var e,t,i,n,a,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=Zie(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=$ie/e.period,o=e.amplitude/Yie,f=0,t={},Df(t,"next",v),Df(t,"return",c),Per&&Df(t,Per,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*Jie(Xie(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return Fer(e)}}Mer.exports=Fer});var ker=s((pTe,jer)=>{"use strict";var Qie=Ber();jer.exports=Qie});var Ver=s((gTe,Cer)=>{"use strict";var Kie=rr(),rne=ker();function ene(r){return Kie(r,"iterSawtoothWave",rne),r}Cer.exports=ene});var Ger=s((mTe,Uer)=>{"use strict";var tne=17976931348623157e292;Uer.exports=tne});var Hu=s((dTe,xer)=>{"use strict";var ine=709.782712893384;xer.exports=ine});var Her=s((hTe,Der)=>{"use strict";var nne=sr();function ane(r,e){var t,i,n,a;if(n=nne(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}Der.exports=ane});var zer=s((qTe,Wer)=>{"use strict";function sne(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}Wer.exports=sne});var Jer=s((yTe,Xer)=>{"use strict";function une(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Xer.exports=une});var $er=s((bTe,Yer)=>{"use strict";function one(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}Yer.exports=one});var Qer=s((wTe,Zer)=>{"use strict";function vne(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}Zer.exports=vne});var rtr=s((ETe,Ker)=>{"use strict";function fne(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}Ker.exports=fne});var ttr=s((NTe,etr)=>{"use strict";function cne(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}etr.exports=cne});var ntr=s((OTe,itr)=>{"use strict";function lne(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}itr.exports=lne});var str=s((STe,atr)=>{"use strict";function pne(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}atr.exports=pne});var ftr=s((ATe,vtr)=>{"use strict";var gne=E(),utr=sr(),mne=me(),dne=L(),hne=V(),qne=zer(),yne=Jer(),bne=$er(),wne=Qer(),Ene=rtr(),Nne=ttr(),One=ntr(),Sne=str(),Wu=1e-300,Ane=13877787807814457e-33,otr=.8450629115104675,_ne=.12837916709551256,Tne=1,Ine=-.0023621185607526594,Lne=1,Rne=-.009864944034847148,Pne=1,Fne=-.0098649429247001,Mne=1;function Bne(r){var e,t,i,n,a,u,o,f;if(gne(r))return NaN;if(r===dne)return 0;if(r===hne)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Ane?1-r:(i=r*r,n=_ne+i*qne(i),a=Tne+i*yne(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Ine+a*bne(a),f=Lne+a*wne(a),e?1+otr+o/f:1-otr-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=Rne+a*Ene(a),a=Pne+a*Nne(a);else{if(r<-6)return 2-Wu;n=Fne+a*One(a),a=Mne+a*Sne(a)}return i=mne(t,0),n=utr(-(i*i)-.5625)*utr((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Wu:Wu*Wu}vtr.exports=Bne});var ii=s((_Te,ctr)=>{"use strict";var jne=ftr();ctr.exports=jne});var gtr=s((TTe,ptr)=>{"use strict";var kne=ii(),ltr=U(),Cne=sr(),Vne=Cr();function Une(r,e){var t,i,n,a,u;if(a=kne(ltr(e)),a!==0&&r>1){for(i=Cne(-e)/ltr(Vne*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}ptr.exports=Une});var Hf=s((ITe,mtr)=>{"use strict";var Gne=-708.3964185322641;mtr.exports=Gne});var ytr=s((LTe,qtr)=>{"use strict";var vn=sr(),zu=D(),xne=P(),dtr=Hu(),htr=Hf();function Dne(r,e){var t,i;return i=r*xne(e),e>=1?i<dtr&&-e>htr?t=zu(e,r)*vn(-e):r>=1?t=zu(e/vn(e/r),r):t=vn(i-e):i>htr?t=zu(e,r)*vn(-e):e/r<dtr?t=zu(e/vn(e/r),r):t=vn(i-e),t}qtr.exports=Dne});var Wf=s((RTe,btr)=>{"use strict";function Hne(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}btr.exports=Hne});var Etr=s((PTe,wtr)=>{"use strict";var Wne=Function;wtr.exports=Wne});var Otr=s((FTe,Ntr)=>{"use strict";var zne=Etr();Ntr.exports=zne});var Atr=s((MTe,Str)=>{"use strict";var Xne=Otr(),Jne=Wf();function Yne(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Xne(e)();function a(u){return Jne(r,u)}}Str.exports=Yne});var Itr=s((BTe,Ttr)=>{"use strict";var $ne=b(),_tr=Wf(),Zne=Atr();$ne(_tr,"factory",Zne);Ttr.exports=_tr});var ni=s((jTe,Ltr)=>{"use strict";var Qne=2220446049250313e-31;Ltr.exports=Qne});var Ptr=s((kTe,Rtr)=>{"use strict";var Kne=eval;Rtr.exports=Kne});var Mtr=s((CTe,Ftr)=>{"use strict";var rae=Ptr();function eae(){var r;try{rae('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}Ftr.exports=eae});var zf=s((VTe,Btr)=>{"use strict";var tae=Mtr();Btr.exports=tae});var ktr=s((UTe,jtr)=>{"use strict";var Xu=Y(),iae=ni(),nae=1e6;function aae(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||iae,a=o.maxTerms||nae,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Xu(i*u)>=Xu(n)||--a===0)break}else do n=r(),u+=n;while(Xu(i*u)<Xu(n)&&--a);return u}jtr.exports=aae});var Utr=s((GTe,Vtr)=>{"use strict";var Ctr=Y(),sae=ni(),uae=1e6;function oae(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||sae,n=u.maxTerms||uae,a=u.initialValue||0;do i=r(),a+=i;while(Ctr(t*a)<Ctr(i)&&--n);return a}Vtr.exports=oae});var Ju=s((xTe,Gtr)=>{"use strict";var vae=zf(),fae=ktr(),cae=Utr(),Xf;vae()?Xf=fae:Xf=cae;Gtr.exports=Xf});var Dtr=s((DTe,xtr)=>{"use strict";function lae(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}xtr.exports=lae});var Wtr=s((HTe,Htr)=>{"use strict";var pae=Y(),gae=P(),mae=ni(),dae=Ju(),hae=Dtr();function qae(r){var e,t;return r<=-1?NaN:(t=pae(r),t>.95?gae(1+r)-r:t<mae?-r*r/2:(e={initialValue:-r},dae(hae(r),e)))}Htr.exports=qae});var Xtr=s((WTe,ztr)=>{"use strict";var yae=Wtr();ztr.exports=yae});var Ytr=s((zTe,Jtr)=>{"use strict";function bae(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Jtr.exports=bae});var Ztr=s((XTe,$tr)=>{"use strict";function wae(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}$tr.exports=wae});var Ktr=s((JTe,Qtr)=>{"use strict";function Eae(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Qtr.exports=Eae});var eir=s((YTe,rir)=>{"use strict";function Nae(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}rir.exports=Nae});var iir=s(($Te,tir)=>{"use strict";function Oae(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}tir.exports=Oae});var air=s((ZTe,nir)=>{"use strict";function Sae(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}nir.exports=Sae});var uir=s((QTe,sir)=>{"use strict";function Aae(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}sir.exports=Aae});var vir=s((KTe,oir)=>{"use strict";function _ae(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}oir.exports=_ae});var cir=s((rIe,fir)=>{"use strict";function Tae(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}fir.exports=Tae});var pir=s((eIe,lir)=>{"use strict";var Iae=Itr(),Lae=Xtr(),Rae=ii(),Jf=U(),Pae=sr(),Fae=ot(),Mae=Ytr(),Bae=Ztr(),jae=Ktr(),kae=eir(),Cae=iir(),Vae=air(),Uae=uir(),Gae=vir(),xae=cir(),Yr=[0,0,0,0,0,0,0,0,0,0];function Dae(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-Lae(i),a=r*n,u=Jf(2*n),e<r&&(u=-u),Yr[0]=Mae(u),Yr[1]=Bae(u),Yr[2]=jae(u),Yr[3]=kae(u),Yr[4]=Cae(u),Yr[5]=Vae(u),Yr[6]=Uae(u),Yr[7]=Gae(u),Yr[8]=xae(u),Yr[9]=-.0005967612901927463,t=Iae(Yr,1/r),t*=Pae(-a)/Jf(Fae*r),e<r&&(t=-t),t+=Rae(Jf(a))/2,t}lir.exports=Dae});var mir=s((tIe,gir)=>{"use strict";function Hae(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}gir.exports=Hae});var hir=s((iIe,dir)=>{"use strict";var Wae=Ju(),zae=mir();function Xae(r,e,t){var i,n;return t=t||0,n=zae(r,e),i=Wae(n,{initialValue:t}),i}dir.exports=Xae});var yir=s((nIe,qir)=>{"use strict";function Jae(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}qir.exports=Jae});var wir=s((aIe,bir)=>{"use strict";var Yae=yir();bir.exports=Yae});var Nir=s((sIe,Eir)=>{"use strict";var $ae=wir();Eir.exports=$ae});var Air=s((uIe,Sir)=>{"use strict";var Zae=o3(),Oir=E(),Yf=V();function Qae(r,e){return Oir(r)||Oir(e)?NaN:r===Yf||e===Yf?Yf:r===e&&r===0?Zae(r)?r:e:r<e?r:e}Sir.exports=Qae});var Tir=s((oIe,_ir)=>{"use strict";var Kae=Air();_ir.exports=Kae});var Lir=s((vIe,Iir)=>{"use strict";var r0e=10.900511;Iir.exports=r0e});var $f=s((fIe,Rir)=>{"use strict";var e0e=2.718281828459045;Rir.exports=e0e});var Mir=s((cIe,Fir)=>{"use strict";var t0e=Nir(),i0e=zn(),n0e=ki(),a0e=st(),s0e=U(),u0e=Y(),jt=sr(),pa=D(),Zf=X3(),Qf=Tir(),Pir=P(),Yu=Hu(),ga=Hf(),Kf=Lir(),o0e=$f();function v0e(r,e){var t,i,n,a,u,o,f;return n=r+Kf-.5,f=(e-r-Kf+.5)/n,r<1?e<=ga?jt(r*Pir(e)-e-i0e(r)):pa(e,r)*jt(-e)/n0e(r):(u0e(f*f*r)<=100&&r>150?(t=r*(a0e(f)-f)+e*(.5-Kf)/n,t=jt(t)):(a=r*Pir(e/n),u=r-e,Qf(a,u)<=ga||Zf(a,u)>=Yu?(i=u/r,Qf(a,u)/2>ga&&Zf(a,u)/2<Yu?(o=pa(e/n,r/2)*jt(u/2),t=o*o):Qf(a,u)/4>ga&&Zf(a,u)/4<Yu&&e>r?(o=pa(e/n,r/4)*jt(u/4),t=o*o,t*=t):i>ga&&i<Yu?t=pa(e*jt(i)/n,r):t=jt(a+u)):t=pa(e/n,r)*jt(u)),t*=s0e(n/o0e)/t0e(r),t)}Fir.exports=v0e});var jir=s((lIe,Bir)=>{"use strict";var f0e=.34657359027997264;Bir.exports=f0e});var Cir=s((pIe,kir)=>{"use strict";function c0e(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}kir.exports=c0e});var Hir=s((gIe,Dir)=>{"use strict";var l0e=E(),Vir=ar(),rc=de(),p0e=Mi(),Uir=L(),g0e=V(),Gir=se(),m0e=jir(),d0e=Cir(),h0e=709.782712893384,ec=.6931471803691238,tc=19082149292705877e-26,xir=1.4426950408889634,q0e=38.816242111356935,y0e=1.0397207708399179;function b0e(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(r===Uir||l0e(r))return r;if(r===g0e)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=q0e){if(i)return-1;if(f>=h0e)return Uir}if(u=Vir(f)|0,f>m0e)f<y0e?i?(n=r+ec,a=-tc,g=-1):(n=r-ec,a=tc,g=1):(i?g=xir*r-.5:g=xir*r+.5,g|=0,l=g,n=r-l*ec,a=l*tc),r=n-a,c=n-r-a;else{if(u<1016070144)return r;g=0}return e=.5*r,v=r*e,o=1+v*d0e(v),l=3-o*e,p=v*((o-l)/(6-r*l)),g===0?r-(r*p-v):(t=p0e(Gir+g<<20,0),p=r*(p-c)-c,p-=v,g===-1?.5*(r-p)-.5:g===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):g<=-2||g>56?(f=1-(p-r),g===1024?(n=Vir(f)+(g<<20)|0,f=rc(f,n)):f*=t,f-1):(l=1,g<20?(n=1072693248-(2097152>>g)|0,l=rc(l,n),f=l-(p-r)):(n=Gir-g<<20|0,l=rc(l,n),f=r-(p+l),f+=1),f*=t,f))}Dir.exports=b0e});var ic=s((mIe,Wir)=>{"use strict";var w0e=Hir();Wir.exports=w0e});var Yir=s((dIe,Jir)=>{"use strict";var zir=E(),Xir=Y(),E0e=ic(),N0e=P(),O0e=D(),S0e=I0();function A0e(r,e){var t;if(zir(r)||zir(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((Xir(e*(r-1))<.5||Xir(e)<.2)&&(t=N0e(r)*e,t<.5))return E0e(t)}else if(S0e(e)!==e)return NaN;return O0e(r,e)-1}Jir.exports=A0e});var Zir=s((hIe,$ir)=>{"use strict";var _0e=Yir();$ir.exports=_0e});var Kir=s((qIe,Qir)=>{"use strict";function T0e(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Qir.exports=T0e});var enr=s((yIe,rnr)=>{"use strict";function I0e(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}rnr.exports=I0e});var inr=s((bIe,tnr)=>{"use strict";function L0e(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}tnr.exports=L0e});var anr=s((wIe,nnr)=>{"use strict";var nc=P(),R0e=ni(),P0e=Kir(),F0e=enr(),M0e=inr(),B0e=.15896368026733398,j0e=.5281534194946289,k0e=.45201730728149414;function C0e(r,e,t){var i,n,a,u;if(r<R0e)return-nc(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=nc(r);while(r>=3);t=r-2}return a=t*(r+1),u=P0e(t),n+=a*B0e+a*u,n}return r<1&&(n+=-nc(r),t=e,e=r,r+=1),r<=1.5?(a=F0e(e),i=e*t,n+=i*j0e+i*a,n):(a=t*e,u=M0e(-t),n+=a*k0e+a*u,n)}nnr.exports=C0e});var fnr=s((EIe,vnr)=>{"use strict";var snr=ki(),unr=ic(),V0e=st(),U0e=E(),onr=anr();function G0e(r){return U0e(r)?NaN:r<0?r<-.5?snr(1+r)-1:unr(-V0e(r)+onr(r+2,r+1,r)):r<2?unr(onr(r+1,r,r-1)):snr(1+r)-1}vnr.exports=G0e});var lnr=s((NIe,cnr)=>{"use strict";var x0e=fnr();cnr.exports=x0e});var gnr=s((OIe,pnr)=>{"use strict";function D0e(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}pnr.exports=D0e});var dnr=s((SIe,mnr)=>{"use strict";var H0e=Zir(),W0e=Ju(),z0e=lnr(),X0e=gnr();function J0e(r,e,t){var i,n,a,u,o;return n=z0e(r),a=(n+1)/r,u=H0e(e,r),n-=u,n/=r,o=X0e(r,e),u+=1,i=t?a:0,n=-u*W0e(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}mnr.exports=J0e});var ac=s((AIe,hnr)=>{"use strict";var Y0e=11754943508222875e-54;hnr.exports=Y0e});var ynr=s((_Ie,qnr)=>{"use strict";var $u=Y(),ve=ac(),$0e=ni(),Z0e=1e6;function Q0e(r,e,t){var i,n,a,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],a=v[0],u===0&&(u=ve),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=ve),o=v[1]+v[0]/o,o===0&&(o=ve),f=1/f,n=o*f,u*=n);while($u(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=ve),o=v[1]+v[0]/o,o===0&&(o=ve),f=1/f,n=o*f,u*=n);while(v&&$u(n-1)>e&&--t);return a/u}function K0e(r,e,t){var i,n,a,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=ve),u=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=ve),u=f[1]+f[0]/u,u===0&&(u=ve),o=1/o,n=u*o,a*=n);while(f&&$u(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=ve),u=f[1]+f[0]/u,u===0&&(u=ve),o=1/o,n=u*o,a*=n);while(f&&$u(n-1)>e&&--t);return a}function rse(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||Z0e,n=i.tolerance||$0e,i.keep?K0e(r,n,t):Q0e(r,n,t)}qnr.exports=rse});var Enr=s((TIe,wnr)=>{"use strict";var bnr=Y(),ese=ni(),fn=ac(),tse=1e6;function ise(r,e,t){var i,n,a,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=fn),a=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=fn),a=f[1]+f[0]/a,a===0&&(a=fn),u=1/u,i=a*u,o*=i);while(f&&bnr(i-1)>e&&--t);return n/o}function nse(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=fn),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=fn),n=o[1]+o[0]/n,n===0&&(n=fn),a=1/a,i=n*a,u*=i);while(o&&bnr(i-1)>e&&--t);return u}function ase(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||ese,t=i.maxIter||tse,i.keep?nse(r,n,t):ise(r,n,t)}wnr.exports=ase});var Onr=s((IIe,Nnr)=>{"use strict";var sse=zf(),use=ynr(),ose=Enr(),sc;sse()?sc=use:sc=ose;Nnr.exports=sc});var Anr=s((LIe,Snr)=>{"use strict";function vse(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Snr.exports=vse});var Tnr=s((RIe,_nr)=>{"use strict";var fse=Onr(),cse=Anr();function lse(r,e){var t=cse(r,e);return 1/(e-r+1+fse(t))}_nr.exports=lse});var Cnr=s((PIe,knr)=>{"use strict";var pse=zn(),gse=z(),ma=ki(),Inr=Y(),mse=sr(),Lnr=D(),$r=P(),dse=l3(),Rnr=Ger(),hse=v3(),Pnr=Hu(),qse=L(),yse=Her(),bse=gtr(),Fnr=ytr(),wse=pir(),uc=hir(),Mnr=Mir(),Ese=dnr(),Bnr=Tnr(),Nse=170;function jnr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h,d,m,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=Nse&&!a)return l&&e*4<r?(p=e*$r(r)-r,p+=$r(Bnr(e,r))):!l&&e>4*r?(p=e*$r(r)-r,o=0,p+=$r(uc(e,r,o)/e)):(p=jnr(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=$r(p)-e+(e-.5)*$r(e),p+=$r(hse)):(p=e*$r(r)-r,o=0,p+=$r(uc(e,r,o)/e)):p=$r(p)+pse(e)),p>Pnr?qse:mse(p);switch(c=e<30&&e<=r+1&&r<Pnr,c?(q=gse(e),g=q===e,f=g?!1:Inr(q-e)===.5):g=f=!1,g&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<dse&&e>1?u=6:r<.5?-.4/$r(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,a&&e>20&&(h=Inr((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=yse(e,r),a===!1&&(p*=ma(e));break;case 1:p=bse(e,r),a===!1&&(p*=ma(e));break;case 2:p=a?Mnr(e,r):Fnr(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:ma(e),a||p>=1||Rnr*p>o?(o/=p,a||e<1||Rnr/e>o?(o*=-e,n=!0):o=0):o=0)),p*=uc(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,m=Ese(e,r,l),p=m[0],N=m[1],l=!1,a&&(p/=N);break;case 4:p=a?Mnr(e,r):Fnr(e,r),p!==0&&(p*=Bnr(e,r));break;case 5:p=wse(e,r),r>=e&&(l=!l);break;case 6:p=a?Lnr(r,e)/ma(e+1):Lnr(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:ma(e),p=d-p),p}knr.exports=jnr});var oc=s((FIe,Vnr)=>{"use strict";var Ose=Cnr();Vnr.exports=Ose});var Gnr=s((MIe,Unr)=>{"use strict";var Sse=oc(),vc=E(),Ase=L();function _se(r,e,t){return vc(r)||vc(e)||vc(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Ase?1:Sse(r*t,e)}Unr.exports=_se});var Hnr=s((BIe,Dnr)=>{"use strict";var Tse=_(),Ise=ws().factory,Lse=oc(),xnr=E(),Rse=L();function Pse(r,e){if(xnr(r)||xnr(e)||r<0||e<=0)return Tse(NaN);if(r===0)return Ise(0);return t;function t(i){return i<=0?0:i===Rse?1:Lse(i*e,r)}}Dnr.exports=Pse});var fc=s((jIe,znr)=>{"use strict";var Fse=b(),Wnr=Gnr(),Mse=Hnr();Fse(Wnr,"factory",Mse);znr.exports=Wnr});var Jnr=s((kIe,Xnr)=>{"use strict";var Bse=fc();function jse(r,e){return Bse(r,e/2,.5)}Xnr.exports=jse});var $nr=s((CIe,Ynr)=>{"use strict";var kse=fc().factory;function Cse(r){return kse(r/2,.5)}Ynr.exports=Cse});var Knr=s((VIe,Qnr)=>{"use strict";var Vse=b(),Znr=Jnr(),Use=$nr();Vse(Znr,"factory",Use);Qnr.exports=Znr});var iar=s((UIe,tar)=>{"use strict";var Gse=T(),xse=S(),Dse=za(),rar=y(),ear=["values","indices","*"];function Hse(r,e){return Gse(e)?xse(e,"returns")&&(r.returns=e.returns,Dse(ear,r.returns)===-1)?new TypeError(rar('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",ear.join('", "'),r.returns)):null:new TypeError(rar("invalid argument. Options argument must be an object. Value: `%s`.",e))}tar.exports=Hse});var aar=s((GIe,nar)=>{"use strict";var Wse=S();function zse(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Wse(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}nar.exports=zse});var uar=s((xIe,sar)=>{"use strict";var Xse=S();function Jse(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Xse(t,n)?t[n].push(a):t[n]=[a];return t}sar.exports=Jse});var far=s((DIe,oar)=>{"use strict";var Yse=S();function $se(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Yse(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}oar.exports=$se});var gar=s((HIe,par)=>{"use strict";var car=Vr(),lar=y(),Zse=iar(),Qse=aar(),Kse=uar(),rue=far();function eue(r,e,t){var i,n,a;if(!car(r))throw new TypeError(lar("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=Zse(i,e),n)throw n;a=t}if(!car(a))throw new TypeError(lar("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?Qse(r,a):i.returns==="indices"?Kse(r,a):rue(r,a)}par.exports=eue});var dar=s((WIe,mar)=>{"use strict";var tue=gar();mar.exports=tue});var qar=s((zIe,har)=>{"use strict";function iue(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}har.exports=iue});var war=s((XIe,bar)=>{"use strict";var nue=mr(),aue=k().isPrimitive,sue=T(),uue=vr(),yar=S(),cc=y();function oue(r,e){return sue(e)?yar(e,"alpha")&&(r.alpha=e.alpha,!aue(r.alpha)||uue(r.alpha))?new TypeError(cc("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):yar(e,"groups")&&(r.groups=e.groups,!nue(r.groups))?new TypeError(cc("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(cc("invalid argument. Options argument must be an object. Value: `%s`.",e))}bar.exports=oue});var Tar=s((JIe,_ar)=>{"use strict";var Ear=E(),Zu=kr(),Nar=D(),vue=Y(),Oar=z2(),fue=Bi(),Sar=v0(),cue=P2(),lue=f0(),pue=fue+1,Aar=1e308;function gue(r,e){var t,i;return Ear(r)||Ear(e)||Zu(e)?NaN:Zu(r)||r===0||e<lue||vue(r)>pue&&e<=0?r:e>Sar?0*r:e<cue?(t=Nar(10,-(e+Sar)),i=r*Aar*t,Zu(i)?r:Oar(i)/Aar/t):(t=Nar(10,-e),i=r*t,Zu(i)?r:Oar(i)/t)}_ar.exports=gue});var Lar=s((YIe,Iar)=>{"use strict";var mue=Tar();Iar.exports=mue});var Far=s(($Ie,Par)=>{"use strict";var due=ee(),hue=T(),que=cr().isPrimitive,Rar=S(),lc=y(),pc=Lar();function yue(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!hue(r))throw new TypeError(lc("invalid argument. First argument must be an object. Value: `%s`.",r));if(Rar(r,"digits")){if(!due(r.digits))throw new TypeError(lc("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(Rar(r,"decision")){if(!que(r.decision))throw new TypeError(lc("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+pc(this.pValue,-t)+`
`,i+="    statistic: "+pc(this.statistic,-t)+`
`,i+="    df: "+pc(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}Par.exports=yue});var jar=s((ZIe,Bar)=>{"use strict";var bue=Vr(),wue=T(),ai=rr(),Eue=Ti(),Qu=y(),Nue=Knr(),Oue=dar(),Mar=P(),Sue=qar(),Aue=war(),_ue=Far();function Tue(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O;if(f=[],e=arguments.length,v={},wue(arguments[e-1])&&(r=arguments[e-1],e-=1,g=Aue(v,r),g))throw g;if(v.groups){if(n=Oue(arguments[0],v.groups),i=Eue(n),e=i.length,e<2)throw new Error(Qu("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(O=0;O<e;O++)f.push(n[i[O]])}else for(O=0;O<e;O++)f.push(arguments[O]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),O=0;O<e;O++){if(p=f[O],!bue(p))throw new TypeError(Qu("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(Qu("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[O]=p.length-1,u+=q[O],t+=1/q[O],N[O]=Sue(p),o+=q[O]*N[O],h+=q[O]*Mar(N[O])}if(o/=u,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(Qu("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*Mar(o)-h,l/=1+(t-1/u)/(3*(e-1)),m=e-1,c=1-Nue(l,m),d={},ai(d,"rejected",c<=a),ai(d,"alpha",a),ai(d,"pValue",c),ai(d,"statistic",l),ai(d,"df",m),ai(d,"method","Bartlett's test of equal variances"),ai(d,"print",_ue),d}Bar.exports=Tue});var Car=s((QIe,kar)=>{"use strict";var Iue=jar();kar.exports=Iue});var Uar=s((KIe,Var)=>{"use strict";var gc=E(),Lue=pt();function Rue(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,v=1,gc(a)===!1)for(v;v<r;v++){if(u+=t,f=e[u],gc(f)){a=f;break}(f>a||f===a&&Lue(f))&&(a=f),i[o]=a,o+=n}if(gc(a))for(v;v<r;v++)i[o]=a,o+=n;return i}Var.exports=Rue});var xar=s((rLe,Gar)=>{"use strict";var mc=E(),Pue=pt();function Fue(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=a,l=1,mc(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],mc(c)){o=c;break}(c>o||c===o&&Pue(c))&&(o=c),n[v]=o,v+=a}if(mc(o))for(l;l<r;l++)n[v]=o,v+=a;return n}Gar.exports=Fue});var War=s((eLe,Har)=>{"use strict";var Mue=b(),Dar=Uar(),Bue=xar();Mue(Dar,"ndarray",Bue);Har.exports=Dar});var Xar=s((tLe,zar)=>{"use strict";var jue=War();zar.exports=jue});var Yar=s((iLe,Jar)=>{"use strict";var kue=E(),Cue=pt();function Vue(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],kue(a))return a;(a>i||a===i&&Cue(a))&&(i=a)}return i}Jar.exports=Vue});var Zar=s((nLe,$ar)=>{"use strict";var Uue=E(),Gue=pt();function xue(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],Uue(u))return u;(u>n||u===n&&Gue(u))&&(n=u)}return n}$ar.exports=xue});var r0r=s((aLe,Kar)=>{"use strict";var Due=b(),Qar=Yar(),Hue=Zar();Due(Qar,"ndarray",Hue);Kar.exports=Qar});var t0r=s((sLe,e0r)=>{"use strict";var Wue=r0r();e0r.exports=Wue});var a0r=s((uLe,n0r)=>{"use strict";var i0r=E(),zue=pt();function Xue(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(a=e[u],i0r(a))return a;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],i0r(f))return f;(f>a||f===a&&zue(f))&&(a=f)}return a}n0r.exports=Xue});var o0r=s((oLe,u0r)=>{"use strict";var s0r=E(),Jue=pt();function Yue(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],s0r(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],s0r(c))return c;(c>o||c===o&&Jue(c))&&(o=c)}return o}u0r.exports=Yue});var c0r=s((vLe,f0r)=>{"use strict";var $ue=b(),v0r=a0r(),Zue=o0r();$ue(v0r,"ndarray",Zue);f0r.exports=v0r});var p0r=s((fLe,l0r)=>{"use strict";var Que=ii(),Kue=U(),dc=E();function roe(r,e,t){var i,n;return dc(r)||dc(e)||dc(t)||t<0?NaN:t===0?r<e?0:1:(i=t*Kue(2),n=r-e,.5*Que(-n/i))}l0r.exports=roe});var m0r=s((cLe,g0r)=>{"use strict";var eoe=_(),toe=ws().factory,hc=E(),ioe=U(),noe=ii();function aoe(r,e){var t;if(hc(r)||hc(e)||e<0)return eoe(NaN);if(e===0)return toe(r);return t=e*ioe(2),i;function i(n){var a;return hc(n)?NaN:(a=n-r,.5*noe(-a/t))}}g0r.exports=aoe});var q0r=s((lLe,h0r)=>{"use strict";var soe=b(),d0r=p0r(),uoe=m0r();soe(d0r,"factory",uoe);h0r.exports=d0r});var w0r=s((pLe,b0r)=>{"use strict";var y0r=E(),ooe=P(),voe=ot(),foe=$f();function coe(r,e){return y0r(r)||y0r(e)||e<=0?NaN:.5*ooe(voe*foe*e*e)}b0r.exports=coe});var N0r=s((gLe,E0r)=>{"use strict";var loe=w0r();E0r.exports=loe});var A0r=s((mLe,S0r)=>{"use strict";var O0r=E();function poe(r,e){return O0r(r)||O0r(e)||e<=0?NaN:0}S0r.exports=poe});var T0r=s((dLe,_0r)=>{"use strict";var goe=A0r();_0r.exports=goe});var L0r=s((hLe,I0r)=>{"use strict";var moe=z(),doe=[hoe,qoe,yoe,boe,woe,Eoe,Noe,Ooe,Soe,Aoe,_oe,Toe,Ioe,Loe,Roe,Poe,Foe,Moe,Boe,joe,koe,Coe,Voe,Uoe,Goe,xoe,Doe,Hoe,Woe,zoe,Xoe,Joe,Yoe,$oe,Zoe,Qoe,Koe,r1e,e1e,t1e,i1e,n1e,a1e,s1e,u1e,o1e,v1e,f1e,c1e,l1e,p1e,g1e,m1e,d1e,h1e,q1e,y1e,b1e,w1e,E1e,N1e,O1e,S1e,A1e,_1e,T1e,I1e,L1e,R1e,P1e,F1e,M1e,B1e,j1e,k1e,C1e,V1e,U1e,G1e,x1e,D1e,H1e,W1e,z1e,X1e,J1e,Y1e,$1e,Z1e,Q1e,K1e,r2e,e2e,t2e,i2e,n2e,a2e,s2e,u2e,o2e,v2e];function hoe(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function qoe(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function yoe(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function boe(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function woe(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function Eoe(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function Noe(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function Ooe(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function Soe(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function Aoe(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function _oe(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function Toe(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function Ioe(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function Loe(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function Roe(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function Poe(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function Foe(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function Moe(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function Boe(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function joe(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function koe(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function Coe(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function Voe(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function Uoe(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function Goe(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function xoe(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function Doe(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function Hoe(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function Woe(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function zoe(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function Xoe(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function Joe(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function Yoe(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function $oe(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function Zoe(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function Qoe(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function Koe(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function r1e(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function e1e(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function t1e(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function i1e(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function n1e(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function a1e(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function s1e(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function u1e(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function o1e(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function v1e(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function f1e(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function c1e(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function l1e(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function p1e(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function g1e(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function m1e(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function d1e(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function h1e(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function q1e(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function y1e(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function b1e(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function w1e(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function E1e(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function N1e(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function O1e(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function S1e(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function A1e(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function _1e(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function T1e(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function I1e(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function L1e(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function R1e(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function P1e(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function F1e(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function M1e(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function B1e(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function j1e(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function k1e(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function C1e(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function V1e(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function U1e(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function G1e(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function x1e(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function D1e(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function H1e(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function W1e(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function z1e(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function X1e(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function J1e(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function Y1e(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function $1e(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function Z1e(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function Q1e(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function K1e(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function r2e(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function e2e(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function t2e(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function i2e(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function n2e(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function a2e(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function s2e(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function u2e(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function o2e(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function v2e(){return 1}function f2e(r){var e=moe(r),t=doe[e];return t(2*r-(2*e+1))}I0r.exports=f2e});var B0r=s((qLe,M0r)=>{"use strict";var R0r=sr(),c2e=L(),P0r=L0r(),F0r=.5641895835477563;function l2e(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?F0r/r:(e=r*r,F0r*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):P0r(400/(4+r)):r<-26.7?c2e:(e=r*r,r<-6.1?2*R0r(e):2*R0r(e)-P0r(400/(4-r)))}M0r.exports=l2e});var qc=s((yLe,j0r)=>{"use strict";var p2e=B0r();j0r.exports=p2e});var V0r=s((bLe,C0r)=>{"use strict";var g2e=P(),m2e=st(),d2e=g0(),h2e=ii(),q2e=qc(),y2e=V(),yc=E(),k0r=.7071067811865475;function b2e(r,e,t){var i;return yc(r)||yc(e)||yc(t)||t<0?NaN:t===0?r<e?y2e:0:(i=(r-e)/t,i<-1?g2e(q2e(-i*k0r)/2)-d2e(i)/2:m2e(-h2e(i*k0r)/2))}C0r.exports=b2e});var x0r=s((wLe,G0r)=>{"use strict";var U0r=E(),w2e=V();function E2e(r,e){return U0r(r)||U0r(e)?NaN:r<e?w2e:0}G0r.exports=E2e});var W0r=s((ELe,H0r)=>{"use strict";var N2e=_(),D0r=E(),O2e=V();function S2e(r){if(D0r(r))return N2e(NaN);return e;function e(t){return D0r(t)?NaN:t<r?O2e:0}}H0r.exports=S2e});var J0r=s((NLe,X0r)=>{"use strict";var A2e=b(),z0r=x0r(),_2e=W0r();A2e(z0r,"factory",_2e);X0r.exports=z0r});var Q0r=s((OLe,Z0r)=>{"use strict";var T2e=_(),I2e=J0r().factory,Y0r=E(),L2e=st(),R2e=g0(),P2e=ii(),F2e=qc(),M2e=P(),$0r=.7071067811865475;function B2e(r,e){if(Y0r(r)||Y0r(e)||e<0)return T2e(NaN);if(e===0)return I2e(r);return t;function t(i){var n=(i-r)/e;return n<-1?M2e(F2e(-n*$0r)/2)-R2e(n)/2:L2e(-P2e(n*$0r)/2)}}Z0r.exports=B2e});var esr=s((SLe,rsr)=>{"use strict";var j2e=b(),K0r=V0r(),k2e=Q0r();j2e(K0r,"factory",k2e);rsr.exports=K0r});var bc=s((ALe,tsr)=>{"use strict";var C2e=1.8378770664093456;tsr.exports=C2e});var asr=s((_Le,nsr)=>{"use strict";var V2e=P(),isr=D(),U2e=bc(),G2e=V(),x2e=L(),wc=E();function D2e(r,e,t){var i,n,a;return wc(r)||wc(e)||wc(t)||t<0?NaN:t===0?r===e?x2e:G2e:(i=isr(t,2),n=-.5*(2*V2e(t)+U2e),a=-1/(2*i),n+a*isr(r-e,2))}nsr.exports=D2e});var osr=s((TLe,usr)=>{"use strict";var H2e=L(),W2e=V(),ssr=E();function z2e(r,e){return ssr(r)||ssr(e)?NaN:r===e?H2e:W2e}usr.exports=z2e});var csr=s((ILe,fsr)=>{"use strict";var X2e=_(),J2e=L(),Y2e=V(),vsr=E();function $2e(r){if(vsr(r))return X2e(NaN);return e;function e(t){return vsr(t)?NaN:t===r?J2e:Y2e}}fsr.exports=$2e});var gsr=s((LLe,psr)=>{"use strict";var Z2e=b(),lsr=osr(),Q2e=csr();Z2e(lsr,"factory",Q2e);psr.exports=lsr});var qsr=s((RLe,hsr)=>{"use strict";var K2e=_(),r3e=gsr().factory,e3e=bc(),msr=E(),dsr=D(),t3e=P();function i3e(r,e){var t,i,n;if(msr(r)||msr(e)||e<0)return K2e(NaN);if(e===0)return r3e(r);return t=dsr(e,2),i=-.5*(2*t3e(e)+e3e),n=-1/(2*t),a;function a(u){return i+n*dsr(u-r,2)}}hsr.exports=i3e});var wsr=s((PLe,bsr)=>{"use strict";var n3e=b(),ysr=asr(),a3e=qsr();n3e(ysr,"factory",a3e);bsr.exports=ysr});var Osr=s((FLe,Nsr)=>{"use strict";var Esr=E();function s3e(r,e){return Esr(r)||Esr(e)||e<=0?NaN:r}Nsr.exports=s3e});var Asr=s((MLe,Ssr)=>{"use strict";var u3e=Osr();Ssr.exports=u3e});var Isr=s((BLe,Tsr)=>{"use strict";var _sr=E();function o3e(r,e){return _sr(r)||_sr(e)||e<=0?NaN:r}Tsr.exports=o3e});var Rsr=s((jLe,Lsr)=>{"use strict";var v3e=Isr();Lsr.exports=v3e});var Fsr=s((kLe,Psr)=>{"use strict";var Ec=E(),f3e=sr(),c3e=D();function l3e(r,e,t){return Ec(r)||Ec(e)||Ec(t)||t<=0?NaN:f3e(e*r+.5*c3e(t*r,2))}Psr.exports=l3e});var Bsr=s((CLe,Msr)=>{"use strict";var p3e=_(),Nc=E(),g3e=sr(),m3e=D();function d3e(r,e){if(Nc(r)||Nc(e)||e<=0)return p3e(NaN);return t;function t(i){return Nc(i)?NaN:g3e(r*i+.5*m3e(e*i,2))}}Msr.exports=d3e});var Csr=s((VLe,ksr)=>{"use strict";var h3e=b(),jsr=Fsr(),q3e=Bsr();h3e(jsr,"factory",q3e);ksr.exports=jsr});var Gsr=s((ULe,Usr)=>{"use strict";var Vsr=E();function y3e(r,e){return Vsr(r)||Vsr(e)||e<=0?NaN:r}Usr.exports=y3e});var Dsr=s((GLe,xsr)=>{"use strict";var b3e=Gsr();xsr.exports=b3e});var zsr=s((xLe,Wsr)=>{"use strict";var w3e=sr(),Hsr=D(),E3e=U(),N3e=ot(),O3e=L(),Oc=E();function S3e(r,e,t){var i,n,a;return Oc(r)||Oc(e)||Oc(t)||t<0?NaN:t===0?r===e?O3e:0:(i=Hsr(t,2),n=1/E3e(i*N3e),a=-1/(2*i),n*w3e(a*Hsr(r-e,2)))}Wsr.exports=S3e});var Ysr=s((DLe,Jsr)=>{"use strict";var A3e=L(),Xsr=E();function _3e(r,e){return Xsr(r)||Xsr(e)?NaN:r===e?A3e:0}Jsr.exports=_3e});var Qsr=s((HLe,Zsr)=>{"use strict";var T3e=_(),I3e=L(),$sr=E();function L3e(r){if($sr(r))return T3e(NaN);return e;function e(t){return $sr(t)?NaN:t===r?I3e:0}}Zsr.exports=L3e});var eur=s((WLe,rur)=>{"use strict";var R3e=b(),Ksr=Ysr(),P3e=Qsr();R3e(Ksr,"factory",P3e);rur.exports=Ksr});var nur=s((zLe,iur)=>{"use strict";var F3e=_(),M3e=eur().factory,Sc=E(),B3e=U(),j3e=sr(),tur=D(),k3e=ot();function C3e(r,e){var t,i,n;if(Sc(r)||Sc(e)||e<0)return F3e(NaN);if(e===0)return M3e(r);return t=tur(e,2),i=1/B3e(t*k3e),n=-1/(2*t),a;function a(u){return Sc(u)?NaN:i*j3e(n*tur(u-r,2))}}iur.exports=C3e});var uur=s((XLe,sur)=>{"use strict";var V3e=b(),aur=zsr(),U3e=nur();V3e(aur,"factory",U3e);sur.exports=aur});var fur=s((JLe,vur)=>{"use strict";var our=E();function G3e(r,e){return our(r)||our(e)||e<=0?NaN:0}vur.exports=G3e});var lur=s((YLe,cur)=>{"use strict";var x3e=fur();cur.exports=x3e});var mur=s(($Le,gur)=>{"use strict";var pur=E();function D3e(r,e){return pur(r)||pur(e)||e<=0?NaN:e}gur.exports=D3e});var hur=s((ZLe,dur)=>{"use strict";var H3e=mur();dur.exports=H3e});var bur=s((QLe,yur)=>{"use strict";var qur=E();function W3e(r,e){return qur(r)||qur(e)||e<=0?NaN:e*e}yur.exports=W3e});var Eur=s((KLe,wur)=>{"use strict";var z3e=bur();wur.exports=z3e});var Our=s((rRe,Nur)=>{"use strict";var Pr=rr(),X3e=q0r(),J3e=N0r(),Y3e=T0r(),$3e=esr(),Z3e=wsr(),Q3e=Asr(),K3e=Rsr(),rve=Csr(),eve=Dsr(),tve=uur(),ive=ff(),nve=lur(),ave=hur(),sve=Eur();function uve(r){return Pr(r,"cdf",X3e),Pr(r,"entropy",J3e),Pr(r,"kurtosis",Y3e),Pr(r,"logcdf",$3e),Pr(r,"logpdf",Z3e),Pr(r,"mean",Q3e),Pr(r,"median",K3e),Pr(r,"mgf",rve),Pr(r,"mode",eve),Pr(r,"pdf",tve),Pr(r,"quantile",ive),Pr(r,"skewness",nve),Pr(r,"stdev",ave),Pr(r,"variance",sve),r}Nur.exports=uve});var Aur=s((eRe,Sur)=>{"use strict";var ove=rr(),vve=Our();function fve(r){return ove(r,"normal",vve({})),r}Sur.exports=fve});var Tur=s((tRe,_ur)=>{"use strict";var da=rr(),cve=Car(),lve=Xar().ndarray,pve=t0r().ndarray,gve=c0r().ndarray,mve=Aur();function dve(r){return da(r,"bartlettTest",cve),da(r,"cumax",lve),da(r,"max",pve),da(r,"mskmax",gve),da(r,"dists",mve({})),r}_ur.exports=dve});var Lur=s((iRe,Iur)=>{"use strict";var hve=Q().isPrimitive,qve=y();function yve(r){return e;function e(t){if(!hve(t))throw new TypeError(qve("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Iur.exports=yve});var Pur=s((nRe,Rur)=>{"use strict";var bve=Lur();Rur.exports=bve});var jur=s((aRe,Bur)=>{"use strict";var Fur=Q().isPrimitive,Mur=y();function wve(r){return e;function e(t,i){if(!Fur(t))throw new TypeError(Mur("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Fur(i))throw new TypeError(Mur("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Bur.exports=wve});var Cur=s((sRe,kur)=>{"use strict";var Eve=jur();kur.exports=Eve});var Uur=s((uRe,Vur)=>{"use strict";var Ac=Q().isPrimitive,_c=y();function Nve(r){return e;function e(t,i,n){if(!Ac(t))throw new TypeError(_c("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Ac(i))throw new TypeError(_c("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Ac(n))throw new TypeError(_c("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}Vur.exports=Nve});var xur=s((oRe,Gur)=>{"use strict";var Ove=Uur();Gur.exports=Ove});var Hur=s((vRe,Dur)=>{"use strict";var Tc=rr(),Sve=Pur(),Ave=Cur(),_ve=xur();function Tve(r){return Tc(r,"s_o",Sve),Tc(r,"ss_o",Ave),Tc(r,"sss_o",_ve),r}Dur.exports=Tve});var zur=s((fRe,Wur)=>{"use strict";function Ive(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}Wur.exports=Ive});var Ku=s((cRe,Xur)=>{"use strict";var Lve=zur();Xur.exports=Lve});var Yur=s((lRe,Jur)=>{"use strict";function Rve(r){return r.toLowerCase()}Jur.exports=Rve});var cn=s((pRe,$ur)=>{"use strict";var Pve=Yur();$ur.exports=Pve});var Qur=s((gRe,Zur)=>{"use strict";var Fve=Ku(),Mve=cn(),ro=vt(),Bve=lt(),jve=/\s+/g,kve=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Cve=/(?:\s|^)([^\s]+)(?=\s|$)/g,Vve=/([a-z0-9])([A-Z])/g;function Uve(r,e,t){return e=Mve(e),t===0?e:Fve(e)}function Gve(r){return r=ro(r,kve," "),r=ro(r,jve," "),r=ro(r,Vve,"$1 $2"),r=Bve(r),ro(r,Cve,Uve)}Zur.exports=Gve});var ror=s((mRe,Kur)=>{"use strict";var xve=Qur();Kur.exports=xve});var tor=s((dRe,eor)=>{"use strict";var Dve=Q().isPrimitive,Hve=y(),Wve=ror();function zve(r){if(!Dve(r))throw new TypeError(Hve("invalid argument. First argument must be a string. Value: `%s`.",r));return Wve(r)}eor.exports=zve});var nor=s((hRe,ior)=>{"use strict";var Xve=tor();ior.exports=Xve});var sor=s((qRe,aor)=>{"use strict";var Jve=Q().isPrimitive,Yve=y(),$ve=Ku();function Zve(r){if(!Jve(r))throw new TypeError(Yve("invalid argument. First argument must be a string. Value: `%s`.",r));return $ve(r)}aor.exports=Zve});var oor=s((yRe,uor)=>{"use strict";var Qve=sor();uor.exports=Qve});var cor=s((bRe,vor)=>{"use strict";function Kve(r){return r.toUpperCase()}vor.exports=Kve});var por=s((wRe,lor)=>{"use strict";var rfe=cor();lor.exports=rfe});var mor=s((ERe,gor)=>{"use strict";var efe=por(),Ic=vt(),tfe=lt(),ife=/\s+/g,nfe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,afe=/([a-z0-9])([A-Z])/g;function sfe(r){return r=Ic(r,nfe," "),r=Ic(r,afe,"$1 $2"),r=tfe(r),r=Ic(r,ife,"_"),efe(r)}gor.exports=sfe});var hor=s((NRe,dor)=>{"use strict";var ufe=mor();dor.exports=ufe});var yor=s((ORe,qor)=>{"use strict";var ofe=Q().isPrimitive,vfe=y(),ffe=hor();function cfe(r){if(!ofe(r))throw new TypeError(vfe("invalid argument. Must provide a string. Value: `%s`.",r));return ffe(r)}qor.exports=cfe});var wor=s((SRe,bor)=>{"use strict";var lfe=yor();bor.exports=lfe});var Nor=s((ARe,Eor)=>{"use strict";var pfe=cn(),Lc=vt(),gfe=lt(),mfe=/\s+/g,dfe=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,hfe=/([a-z0-9])([A-Z])/g;function qfe(r){return r=Lc(r,dfe," "),r=Lc(r,hfe,"$1 $2"),r=gfe(r),r=Lc(r,mfe,"-"),pfe(r)}Eor.exports=qfe});var Sor=s((_Re,Oor)=>{"use strict";var yfe=Nor();Oor.exports=yfe});var _or=s((TRe,Aor)=>{"use strict";var bfe=Q().isPrimitive,wfe=y(),Efe=Sor();function Nfe(r){if(!bfe(r))throw new TypeError(wfe("invalid argument. Must provide a string. Value: `%s`.",r));return Efe(r)}Aor.exports=Nfe});var Ior=s((IRe,Tor)=>{"use strict";var Ofe=_or();Tor.exports=Ofe});var Ror=s((LRe,Lor)=>{"use strict";var Sfe=Q().isPrimitive,Afe=y(),_fe=cn();function Tfe(r){if(!Sfe(r))throw new TypeError(Afe("invalid argument. Must provide a string. Value: `%s`.",r));return _fe(r)}Lor.exports=Tfe});var For=s((RRe,Por)=>{"use strict";var Ife=Ror();Por.exports=Ife});var Bor=s((PRe,Mor)=>{"use strict";var Lfe=Ku(),Rfe=cn(),eo=vt(),Pfe=lt(),Ffe=/\s+/g,Mfe=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Bfe=/(?:\s|^)([^\s]+)(?=\s|$)/g,jfe=/([a-z0-9])([A-Z])/g;function kfe(r,e){return Lfe(Rfe(e))}function Cfe(r){return r=eo(r,Mfe," "),r=eo(r,Ffe," "),r=eo(r,jfe,"$1 $2"),r=Pfe(r),eo(r,Bfe,kfe)}Mor.exports=Cfe});var kor=s((FRe,jor)=>{"use strict";var Vfe=Bor();jor.exports=Vfe});var Vor=s((MRe,Cor)=>{"use strict";var Ufe=Q().isPrimitive,Gfe=y(),xfe=kor();function Dfe(r){if(!Ufe(r))throw new TypeError(Gfe("invalid argument. First argument must be a string. Value: `%s`.",r));return xfe(r)}Cor.exports=Dfe});var Gor=s((BRe,Uor)=>{"use strict";var Hfe=Vor();Uor.exports=Hfe});var Dor=s((jRe,xor)=>{"use strict";var Wfe=cn(),Rc=vt(),zfe=lt(),Xfe=/\s+/g,Jfe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Yfe=/([a-z0-9])([A-Z])/g;function $fe(r){return r=Rc(r,Jfe," "),r=Rc(r,Yfe,"$1 $2"),r=zfe(r),r=Rc(r,Xfe,"_"),Wfe(r)}xor.exports=$fe});var Wor=s((kRe,Hor)=>{"use strict";var Zfe=Dor();Hor.exports=Zfe});var Xor=s((CRe,zor)=>{"use strict";var Qfe=Q().isPrimitive,Kfe=y(),rce=Wor();function ece(r){if(!Qfe(r))throw new TypeError(Kfe("invalid argument. Must provide a string. Value: `%s`.",r));return rce(r)}zor.exports=ece});var Yor=s((VRe,Jor)=>{"use strict";var tce=Xor();Jor.exports=tce});var Qor=s((URe,Zor)=>{"use strict";var ice=T(),$or=S(),nce=cr().isPrimitive,ace=Q().isPrimitive,Pc=y();function sce(r,e){return ice(e)?$or(e,"flags")&&(r.flags=e.flags,!ace(r.flags))?new TypeError(Pc("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):$or(e,"capture")&&(r.capture=e.capture,!nce(r.capture))?new TypeError(Pc("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Pc("invalid argument. Options argument must be an object. Value: `%s`.",e))}Zor.exports=sce});var to=s((GRe,r1r)=>{"use strict";var uce=Qor(),Kor=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function oce(r){var e,t;if(arguments.length>0){if(e={},t=uce(e,r),t)throw t;return e.capture?new RegExp("("+Kor+")",e.flags):new RegExp(Kor,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}r1r.exports=oce});var t1r=s((xRe,e1r)=>{"use strict";var vce=to(),fce=vce({capture:!0});e1r.exports=fce});var n1r=s((DRe,i1r)=>{"use strict";var cce=to(),lce=cce();i1r.exports=lce});var u1r=s((HRe,s1r)=>{"use strict";var a1r=b(),Fc=to(),pce=t1r(),gce=n1r();a1r(Fc,"REGEXP",gce);a1r(Fc,"REGEXP_CAPTURE",pce);s1r.exports=Fc});var v1r=s((WRe,o1r)=>{"use strict";var mce=u1r().REGEXP;function dce(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),mce.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}o1r.exports=dce});var c1r=s((zRe,f1r)=>{"use strict";var hce=v1r();f1r.exports=hce});var p1r=s((XRe,l1r)=>{"use strict";var qce=Q().isPrimitive,yce=y(),bce=c1r();function wce(r){if(!qce(r))throw new TypeError(yce("invalid argument. Must provide a string. Value: `%s`.",r));return bce(r)}l1r.exports=wce});var m1r=s((JRe,g1r)=>{"use strict";var Ece=p1r();g1r.exports=Ece});var h1r=s((YRe,d1r)=>{"use strict";function Nce(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}d1r.exports=Nce});var y1r=s(($Re,q1r)=>{"use strict";var Oce=h1r();q1r.exports=Oce});var w1r=s((ZRe,b1r)=>{"use strict";var Sce=Q().isPrimitive,Ace=y(),_ce=y1r();function Tce(r){if(!Sce(r))throw new TypeError(Ace("invalid argument. First argument must be a string. Value: `%s`.",r));return _ce(r)}b1r.exports=Tce});var N1r=s((QRe,E1r)=>{"use strict";var Ice=w1r();E1r.exports=Ice});var S1r=s((KRe,O1r)=>{"use strict";var Lce=Q().isPrimitive,Rce=y();function Pce(r){if(!Lce(r))throw new TypeError(Rce("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}O1r.exports=Pce});var _1r=s((rPe,A1r)=>{"use strict";var Fce=S1r();A1r.exports=Fce});var I1r=s((ePe,T1r)=>{"use strict";var fe=rr(),Mce=nor(),Bce=oor(),jce=wor(),kce=Ior(),Cce=For(),Vce=Gor(),Uce=Yor(),Gce=m1r(),xce=N1r(),Dce=_1r();function Hce(r){return fe(r,"camelcase",Mce),fe(r,"capitalize",Bce),fe(r,"constantcase",jce),fe(r,"kebabcase",kce),fe(r,"lowercase",Cce),fe(r,"pascalcase",Vce),fe(r,"snakecase",Uce),fe(r,"startcase",Gce),fe(r,"uncapitalize",xce),fe(r,"uppercase",Dce),r}T1r.exports=Hce});var R1r=s((tPe,L1r)=>{"use strict";var Wce=rr(),zce=Hur(),Xce=I1r();function Jce(r){return Wce(r,"tools",zce({})),r=Xce(r),r}L1r.exports=Jce});var F1r=s((iPe,P1r)=>{"use strict";var ce=rr(),Yce=sh(),$ce=Nb(),Zce=Pb(),Qce=IN(),Kce=BF(),rle=WV(),ele=Ier(),tle=Ver(),ile=Tur(),nle=R1r();function ale(){var r={};return ce(r,"array",Yce({})),ce(r,"assert",$ce({})),ce(r,"blas",Zce({})),ce(r,"datasets",Qce({})),ce(r,"math",Kce({})),ce(r,"ndarray",rle({})),ce(r,"random",ele({})),ce(r,"simulate",tle({})),ce(r,"stats",ile({})),ce(r,"string",nle({})),r}P1r.exports=ale});var B1r=s((nPe,M1r)=>{"use strict";var sle=b(),Mc=F1r();sle(Mc,"CACHED",Mc());M1r.exports=Mc});var ole=s((aPe,j1r)=>{var ule=B1r().CACHED;j1r.exports=ule});return ole();})();
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
	var dtype;
	var order;
	var ndims;
	var vhlen;
	var opts;
	var hlen;
	var vlen;
	var arr;
	var len;
	var tmp;
	var buf;
	var vx;
	var ih;
	var s;
	var o;
	var i;
	opts = {
		'strict': true,
		'view': false,
		'as': null
	};
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'strict' || o === 'view' || o === 'as' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate strict/view/layout values
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.isRange1d( x, 'First argument' );
	// Resolve the default presentation layout based on the presentation layout of the input array...
	if ( opts.as === null ) {
		if ( x.length === 1 && x[ 0 ].length > 1 ) {
			opts.as = 'row';
		} else {
			opts.as = 'column';
		}
	}
	x = ns.array.flatten2d( x );
	// Resolve ndarray meta data...
	ns.assert.isString( x[ 0 ], 'First range element' );
	for ( i = 0; i < x.length; i++ ) {
		o = ns.string.lowercase( x[ i ] );
		if ( o === 'shape' ) {
			i += 1;
			shape = [];
			for ( ; i < x.length; i++ ) {
				if ( !ns.assert.base.isNumber( x[ i ] ) ) {
					i -= 1;
					break;
				}
				shape.push( x[ i ] );
			}
		} else if ( o === 'strides' ) {
			i += 1;
			strides = [];
			for ( ; i < x.length; i++ ) {
				if ( !ns.assert.base.isNumber( x[ i ] ) ) {
					i -= 1;
					break;
				}
				strides.push( x[ i ] );
			}
		} else if ( o === 'offset' ) {
			i += 1;
			offset = x[ i ];
		} else if ( o === 'order' ) {
			i += 1;
			order = x[ i ];
		} else if ( o === 'dtype' ) {
			i += 1;
			dtype = x[ i ];
		} else if ( o === 'length' || o === 'capacity' ) {
			i += 1;
		} else if ( o === 'data' ) {
			i += 1;
			break;
		} else {
			throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Unrecognized meta data field.' );
		}
	}
	if ( !ns.assert.base.isArray( shape ) || ( shape.length && !ns.assert.base.isNonNegativeIntegerArray( shape ) ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Shape must only contain nonnegative integer values.' );
	}
	ndims = shape.length;
	if ( !ns.assert.base.isArray( strides ) || ( strides.length && !ns.assert.base.isIntegerArray( strides ) ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Strides must only contain integer values.' );
	}
	if ( ndims > 0 && strides.length !== ndims ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Number of strides does not match the number of dimensions.' );
	} else if ( ndims === 0 && ( strides.length !== 1 || strides[ 0 ] !== 0 ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. A zero-dimensional ndarray should have a single stride equal to 0.' );
	}
	if ( !ns.assert.base.isNonNegativeInteger( offset ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Offset must be a nonnegative integer.' );
	}
	// TODO: validate order
	// TODO: validate dtype
	ns.assert.isString( slice, 'Second argument' );
	s = ns.ndarray.seq2multislice( slice, shape, true );
	if ( s.code ) {
		if ( s.code === 'ERR_SLICE_INVALID_SUBSEQUENCE' ) {
			throw new TypeError( 'invalid argument. Second argument is not a valid subsequence.' );
		}
		if ( s.code === 'ERR_SLICE_INVALID_INCREMENT' ) {
			throw new TypeError( 'invalid argument. Second argument is not a valid subsequence. The increment must be a non-zero integer value.' );
		}
		if ( s.code === 'ERR_SLICE_TOO_MANY_DIMENSIONS' ) {
			throw new TypeError( 'invalid argument. Second argument has more dimensions than the provided ndarray.' );
		}
		if ( s.code === 'ERR_SLICE_INSUFFICIENT_DIMENSIONS' ) {
			throw new TypeError( 'invalid argument. Second argument has fewer dimensions than the provided ndarray.' );
		}
		if ( s.code === 'ERR_SLICE_INVALID_ELLIPSIS' ) {
			throw new TypeError( 'invalid argument. Second argument is not a valid subsequence. A subsequence must only contain at most one ellipsis.' );
		}
		// NOTE: the following error check must come last due to fall-through when in non-strict mode...
		if ( s.code === 'ERR_SLICE_OUT_OF_BOUNDS' ) {
			if ( opts.strict ) {
				throw new RangeError( 'invalid argument. Second argument resolves to a slice exceeding index bounds.' );
			}
			// Repeat parsing, this time allowing for out-of-bounds slices:
			s = ns.ndarray.seq2multislice( slice, shape, false );
		}
	}
	// Calculate the header length:
	hlen = 8 + ndims + strides.length + (5*1);
	// Create an ndarray view, adjusting the offset to account for the header info:
	arr = new ns.ndarray.ndarray( 'generic', x, shape, strides, offset+hlen, order );
	// Create the slice:
	vx = ns.ndarray.slice( arr, s, opts.strict, false );
	vlen = vx.length;
	shape = vx.shape;
	ndims = shape.length;
	strides = vx.strides;
	order = vx.order;
	// Calculate the header length for the slice:
	vhlen = 8 + ndims + strides.length + (5*1);
	// Revert the header info offset adjustment:
	offset = vx.offset - hlen;
	// Check whether we need to return the same data buffer as the input array...
	if ( opts.view ) {
		len = x.length;
		buf = x;
		// Check whether the number of dimensions was reduced and, if so, shift the data to account for less header info...
		if ( vhlen !== hlen ) {
			len -= hlen - vhlen;
			// Because the meta data does not consume as much memory, we need to shift the data up to ensure a compact representation...
			for ( i = 0; i < len; i++ ) {
				buf[ vhlen+i ] = buf[ hlen+i ];
			}
			// Trim off the leftover items:
			x.length = len;
		}
	}
	// Otherwise, return a fresh ndarray with data arranged contiguously...
	else {
		// Allocate a new data buffer which can accommodate the new header info and slice data:
		len = vhlen + vlen;
		buf = ns.array.zeros( len );
		// When returning a view, return elements in array iteration order...
		if ( ndims > 0 ) {
			strides = ns.ndarray.shape2strides( shape, order );
			tmp = new ns.ndarray.ndarray( 'generic', buf, shape, strides, vhlen, order );
			for ( i = 0; i < vlen; i++ ) {
				tmp.iset( i, vx.iget( i ) );
			}
		} else {
			strides = [ 0 ];
			buf[ len-1 ] = vx.get();
		}
		// Reset the index offset as the strides should all be nonnegative integers:
		offset = 0;
	}
	// Set the header info...
	ih = 0;
	buf[ ih ] = 'shape';
	ih += 1;
	for ( i = 0; i < shape.length; i++ ) {
		buf[ ih ] = shape[ i ];
		ih += 1;
	}
	buf[ ih ] = 'strides';
	ih += 1;
	for ( i = 0; i < strides.length; i++ ) {
		buf[ ih ] = strides[ i ];
		ih += 1;
	}
	buf[ ih ] = 'offset';
	ih += 1;
	buf[ ih ] = offset;
	ih += 1;
	buf[ ih ] = 'order';
	ih += 1;
	buf[ ih ] = order;
	ih += 1;
	buf[ ih ] = 'dtype';
	ih += 1;
	buf[ ih ] = dtype;
	ih += 1;
	buf[ ih ] = 'length';
	ih += 1;
	buf[ ih ] = vlen;
	ih += 1;
	buf[ ih ] = 'capacity';
	ih += 1;
	buf[ ih ] = len - vhlen;
	ih += 1;
	buf[ ih ] = 'data';
	if ( opts.as === 'row' ) {
		return [ buf ];
	}
	// opts.as === 'column'
	return ns.ndarray.toArray( buf, [ len, 1 ], [ 1, 1 ], 0, 'row-major' ); // TODO: replace with @stdlib/array/base/equivalent
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
	var offset;
	var ndims;
	var opts;
	var hlen;
	var arr;
	var len;
	var o;
	var i;
	opts = {
		'order': 'row-major',
		'dtype': 'generic',
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
	ndims = shape.length;
	if ( ndims === 0 ) {
		strides = [ 0 ];
	} else {
		strides = ns.ndarray.shape2strides( shape, opts.order );
	}
	// Calculate the header length:
	hlen = 8 + ndims + strides.length + (5*1);
	// Allocate an ndarray buffer which can accommodate both the header and data elements:
	if ( ndims === 0 ) {
		len = 1;
	} else {
		len = ns.ndarray.numel( shape );
	}
	arr = ns.array.zeros( hlen + len );
	offset = 0;
	arr[ offset ] = 'shape';
	offset += 1;
	for ( i = 0; i < ndims; i++ ) {
		arr[ offset ] = shape[ i ];
		offset += 1;
	}
	arr[ offset ] = 'strides';
	offset += 1;
	for ( i = 0; i < strides.length; i++ ) {
		arr[ offset ] = strides[ i ];
		offset += 1;
	}
	arr[ offset ] = 'offset';
	offset += 1;
	arr[ offset ] = 0;
	offset += 1;
	arr[ offset ] = 'order';
	offset += 1;
	arr[ offset ] = opts.order;
	offset += 1;
	arr[ offset ] = 'dtype';
	offset += 1;
	arr[ offset ] = 'number';
	offset += 1;
	arr[ offset ] = 'length';
	offset += 1;
	arr[ offset ] = len;
	offset += 1;
	arr[ offset ] = 'capacity';
	offset += 1;
	arr[ offset ] = len;
	offset += 1;
	arr[ offset ] = 'data';
	if ( opts.as === 'row' ) {
		return [ arr ];
	}
	// opts.as === 'column'
	return ns.ndarray.toArray( arr, [ arr.length, 1 ], [ 1, 1 ], 0, 'row-major' ); // TODO: replace with @stdlib/array/base/equivalent
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
	var arr;
	var len;
	var ix;
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
		// TODO: validate strides when ndims === 0
	}
	if ( opts.offset === null ) {
		opts.offset = ns.ndarray.strides2offset( opts.shape, opts.strides );
	} else {
		ns.assert.isNonNegativeInteger( opts.offset, 'Offset argument' );
	}
	len = data.length * data[ 0 ].length;
	// TODO: validate that, for zero-dimensional arrays, len >= 1
	// TODO: confirm that the following can handle zero-dimensional arrays
	ns.assert.isBufferLengthCompatible( len, opts.shape, opts.strides, opts.offset ); 
	// TODO: determine a means to abstract the following logic to a helper utility package
	// Calculate the header length:
	hlen = 8 + ndims + opts.strides.length + (5*1);
	// Allocate an ndarray buffer which can accommodate both the header and data elements:
	arr = ns.array.zeros( hlen + len );
	ix = 0;
	arr[ ix ] = 'shape';
	ix += 1;
	for ( i = 0; i < opts.shape.length; i++ ) {
		arr[ ix ] = opts.shape[ i ];
		ix += 1;
	}
	arr[ ix ] = 'strides';
	ix += 1;
	for ( i = 0; i < opts.strides.length; i++ ) {
		arr[ ix ] = opts.strides[ i ];
		ix += 1;
	}
	arr[ ix ] = 'offset';
	ix += 1;
	arr[ ix ] = opts.offset;
	ix += 1;
	arr[ ix ] = 'order';
	ix += 1;
	arr[ ix ] = opts.order;
	ix += 1;
	arr[ ix ] = 'dtype';
	ix += 1;
	arr[ ix ] = opts.dtype;
	ix += 1;
	arr[ ix ] = 'length';
	ix += 1;
	arr[ ix ] = ( ndims === 0 ) ? 1 : ns.ndarray.numel( opts.shape );
	ix += 1;
	arr[ ix ] = 'capacity';
	ix += 1;
	arr[ ix ] = len;
	ix += 1;
	arr[ ix ] = 'data';
	ix += 1;
	arr = ns.array.flatten2d.assign( data, arr, 1, ix );
	if ( opts.as === 'row' ) {
		return [ arr ];
	}
	// opts.as === 'column'
	return ns.ndarray.toArray( arr, [ arr.length, 1 ], [ 1, 1 ], 0, 'row-major' ); // TODO: replace with @stdlib/array/base/equivalent
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
	var strides;
	var offset;
	var shape;
	var order;
	var ndims;
	var hlen;
	var arr;
	var out;
	var row;
	var idx;
	var dim;
	var it;
	var N;
	var M;
	var s;
	var o;
	var i;
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		ns.assert.unrecognizedOptionName( o );
	}
	ns.assert.isRange1d( x, 'First argument' );
	x = ns.array.flatten2d( x );
	// Resolve ndarray meta data...
	ns.assert.isString( x[ 0 ], 'First range element' );
	for ( i = 0; i < x.length; i++ ) {
		o = ns.string.lowercase( x[ i ] );
		if ( o === 'shape' ) {
			i += 1;
			shape = [];
			for ( ; i < x.length; i++ ) {
				if ( !ns.assert.base.isNumber( x[ i ] ) ) {
					i -= 1;
					break;
				}
				shape.push( x[ i ] );
			}
		} else if ( o === 'strides' ) {
			i += 1;
			strides = [];
			for ( ; i < x.length; i++ ) {
				if ( !ns.assert.base.isNumber( x[ i ] ) ) {
					i -= 1;
					break;
				}
				strides.push( x[ i ] );
			}
		} else if ( o === 'offset' ) {
			i += 1;
			offset = x[ i ];
		} else if ( o === 'order' ) {
			i += 1;
			order = x[ i ];
		} else if ( o === 'dtype' || o === 'length' || o === 'capacity' ) {
			i += 1;
		} else if ( o === 'data' ) {
			i += 1;
			break;
		} else {
			throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Unrecognized meta data field.' );
		}
	}
	if ( !ns.assert.base.isArray( shape ) || ( shape.length && !ns.assert.base.isNonNegativeIntegerArray( shape ) ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Shape must only contain nonnegative integer values.' );
	}
	ndims = shape.length;
	if ( !ns.assert.base.isArray( strides ) || ( strides.length && !ns.assert.base.isIntegerArray( strides ) ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Strides must only contain integer values.' );
	}
	if ( ndims > 0 && strides.length !== ndims ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Number of strides does not match the number of dimensions.' );
	} else if ( ndims === 0 && ( strides.length !== 1 || strides[ 0 ] !== 0 ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. A zero-dimensional ndarray should have a single stride equal to 0.' );
	}
	if ( !ns.assert.base.isNonNegativeInteger( offset ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Offset must be a nonnegative integer.' );
	}
	// TODO: validate order
	// TODO: validate dtype
	// Calculate the header length: 8 field names + 2 fields having length rank(shape) + 5 fields having one value
	hlen = 8 + ndims + strides.length + (5*1);
	// Create an ndarray view, adjusting the offset to account for the header info:
	arr = new ns.ndarray.ndarray( 'generic', x, shape, strides, offset+hlen, order );
	if ( ndims === 0 ) {
		return [
			[ '[ ] =' ],
			[ arr.get() ]
		];
	}
	if ( ndims === 1 ) {
		out = [ [ '[ : ] =' ] ];
		if ( arr.length === 0 ) {
			out.push( [ '(empty)' ] );
			return out;
		}
		return out.concat( ns.ndarray.toArray( arr, [ arr.length, 1 ], [ 1, 1 ], 0, 'row-major' ) ); // TODO: replace with @stdlib/array/base equivalent
	}
	// Determine the number of rows and columns per matrix:
	dim = ndims - 2;
	N = shape[ dim ];
	M = shape[ dim+1 ];
	// Create an iterator which iterates over each row in the ndarray:
	it = ns.ndarray.iterRows( arr );
	// Initialize a row counter:
	row = 0;
	// Initialize an index array for tracking indices:
	idx = ns.array.zeros( ndims );
	// Set the last two elements to ':' to indicate that we are selecting all elements:
	idx[ dim ] = ':';
	idx[ dim+1 ] = ':';
	// Assemble the output nested array...
	out = [ ns.array.filled( '', M ) ];
	out[ 0 ][ 0 ] = 'ndarray: (' + shape.join( ', ' ) + ')';
	out.push( ns.array.filled( '', M ) );
	while ( true ) {
		s = it.next();
		if ( s.done ) {
			break;
		}
		if ( row === 0 ) {
			out.push( ns.array.filled( '', M ) );
			out[ out.length-1 ][ 0 ] = '[ ' + idx.join( ', ' ) +' ] =';
			out.push( ns.array.filled( '', M ) );
		}
		s = s.value;
		out.push( ns.ndarray.toArray( s.data, s.shape, s.strides, s.offset, s.order ) ); // TODO: replace with @stdlib/array/base equivalent
		row = (row+1) % N;
		if ( row === 0 ) {
			out.push( ns.array.filled( '', M ) );
		}
		idx = ns.ndarray.nextCartesianIndex.assign( shape, order, idx, dim-1, idx );
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
