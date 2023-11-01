/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var jc=s((vle,Bc)=>{"use strict";var k1r=typeof Object.defineProperty=="function"?Object.defineProperty:null;Bc.exports=k1r});var Cc=s((fle,kc)=>{"use strict";var C1r=jc();function V1r(){try{return C1r({},"x",{}),!0}catch{return!1}}kc.exports=V1r});var Uc=s((cle,Vc)=>{"use strict";var U1r=Object.defineProperty;Vc.exports=U1r});var io=s((lle,Gc)=>{"use strict";function G1r(r){return typeof r=="number"}Gc.exports=G1r});var no=s((ple,Dc)=>{"use strict";function x1r(r){return r[0]==="-"}function xc(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function D1r(r,e,t){var i=!1,n=e-r.length;return n<0||(x1r(r)&&(i=!0,r=r.substr(1)),r=t?r+xc(n):xc(n)+r,i&&(r="-"+r)),r}Dc.exports=D1r});var Xc=s((gle,zc)=>{"use strict";var H1r=io(),Hc=no(),W1r=String.prototype.toLowerCase,Wc=String.prototype.toUpperCase;function z1r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!H1r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Hc(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Hc(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Wc.call(r.specifier)?Wc.call(t):W1r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}zc.exports=z1r});var Yc=s((mle,Jc)=>{"use strict";function X1r(r){return typeof r=="string"}Jc.exports=X1r});var Qc=s((dle,Zc)=>{"use strict";var J1r=io(),Y1r=Math.abs,$1r=String.prototype.toLowerCase,$c=String.prototype.toUpperCase,Ct=String.prototype.replace,Z1r=/e\+(\d)$/,Q1r=/e-(\d)$/,K1r=/^(\d+)$/,r2r=/^(\d+)e/,e2r=/\.0$/,t2r=/\.0*e/,i2r=/(\..*[^0])0*e/;function n2r(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!J1r(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Y1r(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Ct.call(t,i2r,"$1e"),t=Ct.call(t,t2r,"e"),t=Ct.call(t,e2r,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ct.call(t,Z1r,"e+0$1"),t=Ct.call(t,Q1r,"e-0$1"),r.alternate&&(t=Ct.call(t,K1r,"$1."),t=Ct.call(t,r2r,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===$c.call(r.specifier)?$c.call(t):$1r.call(t),t}Zc.exports=n2r});var el=s((hle,rl)=>{"use strict";function Kc(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function a2r(r,e,t){var i=e-r.length;return i<0||(r=t?r+Kc(i):Kc(i)+r),r}rl.exports=a2r});var il=s((qle,tl)=>{"use strict";var s2r=Xc(),u2r=Yc(),o2r=Qc(),v2r=el(),f2r=no(),c2r=String.fromCharCode,ha=isNaN,l2r=Array.isArray;function p2r(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function g2r(r){var e,t,i,n,a,u,o,f,v;if(!l2r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],u2r(i))u+=i;else{if(e=i.precision!==void 0,i=p2r(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,ha(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,ha(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=s2r(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!ha(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ha(a)?String(i.arg):c2r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=o2r(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=f2r(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=v2r(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}tl.exports=g2r});var al=s((yle,nl)=>{"use strict";var m2r=il();nl.exports=m2r});var ul=s((ble,sl)=>{"use strict";var qa=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function d2r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function h2r(r){var e,t,i,n;for(t=[],n=0,i=qa.exec(r);i;)e=r.slice(n,qa.lastIndex-i[0].length),e.length&&t.push(e),t.push(d2r(i)),n=qa.lastIndex,i=qa.exec(r);return e=r.slice(n),e.length&&t.push(e),t}sl.exports=h2r});var vl=s((wle,ol)=>{"use strict";var q2r=ul();ol.exports=q2r});var cl=s((Ele,fl)=>{"use strict";function y2r(r){return typeof r=="string"}fl.exports=y2r});var gl=s((Nle,pl)=>{"use strict";var b2r=al(),w2r=vl(),E2r=cl();function ll(r){var e,t,i;if(!E2r(r))throw new TypeError(ll("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=w2r(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return b2r.apply(null,t)}pl.exports=ll});var y=s((Ole,ml)=>{"use strict";var N2r=gl();ml.exports=N2r});var wl=s((Sle,bl)=>{"use strict";var dl=y(),si=Object.prototype,hl=si.toString,ql=si.__defineGetter__,yl=si.__defineSetter__,O2r=si.__lookupGetter__,S2r=si.__lookupSetter__;function A2r(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||hl.call(r)==="[object Array]")throw new TypeError(dl("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||hl.call(t)==="[object Array]")throw new TypeError(dl("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(O2r.call(r,e)||S2r.call(r,e)?(i=r.__proto__,r.__proto__=si,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&ql&&ql.call(r,e,t.get),u&&yl&&yl.call(r,e,t.set),r}bl.exports=A2r});var $e=s((Ale,El)=>{"use strict";var _2r=Cc(),T2r=Uc(),I2r=wl(),ao;_2r()?ao=T2r:ao=I2r;El.exports=ao});var Ol=s((_le,Nl)=>{"use strict";var L2r=$e();function R2r(r,e,t){L2r(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Nl.exports=R2r});var b=s((Tle,Sl)=>{"use strict";var P2r=Ol();Sl.exports=P2r});var _l=s((Ile,Al)=>{"use strict";var F2r=$e();function M2r(r,e,t){F2r(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}Al.exports=M2r});var rr=s((Lle,Tl)=>{"use strict";var B2r=_l();Tl.exports=B2r});var Ll=s((Rle,Il)=>{"use strict";function j2r(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}Il.exports=j2r});var ya=s((Ple,Rl)=>{"use strict";var k2r=Ll();Rl.exports=k2r});var Fl=s((Fle,Pl)=>{"use strict";function C2r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}Pl.exports=C2r});var ba=s((Mle,Ml)=>{"use strict";var V2r=Fl();Ml.exports=V2r});var jl=s((Ble,Bl)=>{"use strict";var U2r=ba();function G2r(r){return U2r(0,r)}Bl.exports=G2r});var Ze=s((jle,kl)=>{"use strict";var x2r=jl();kl.exports=x2r});var Ul=s((kle,Vl)=>{"use strict";var ln=ya(),D2r=Ze(),Cl=y();function H2r(r,e,t){var i,n,a,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(a=D2r(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(Cl("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",ln(e).join(", "),ln(t).join(", "),v));if(f===n)a[v]=1;else if(f===1)a[v]=0;else throw new Error(Cl("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",ln(e).join(", "),ln(t).join(", "),v))}return{ref:r,data:i,shape:ln(t),strides:a}}Vl.exports=H2r});var so=s((Cle,Gl)=>{"use strict";var W2r=Ul();Gl.exports=W2r});var Hl=s((Vle,Dl)=>{"use strict";var xl=so();function z2r(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,H,K;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(F=xl(r[0],e[0],N),A=F.data,O=F.strides,i=O[1],n=O[0],F=xl(r[1],e[1],N),H=F.data,O=F.strides,a=O[1],u=O[0],K=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,g=0,d=A[p],m=H[h],q=K[c],v=0;v<o;v++)q[v]=t(d[l],m[g]),l+=i,g+=a;p+=n,h+=u}}Dl.exports=z2r});var uo=s((Ule,Wl)=>{"use strict";var X2r=Hl();Wl.exports=X2r});var Xl=s((Gle,zl)=>{"use strict";var oo=so();function J2r(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,H,K,G,Fr,Mr,or,kt,Mc;if(K=e[3],v=K[1],c=K[0],!(v<=0||c<=0))for(Fr=oo(r[0],e[0],K),Mr=Fr.data,G=Fr.strides,i=G[1],n=G[0],Fr=oo(r[1],e[1],K),or=Fr.data,G=Fr.strides,a=G[1],u=G[0],Fr=oo(r[2],e[2],K),kt=Fr.data,G=Fr.strides,o=G[1],f=G[0],Mc=r[3],h=0,m=0,N=0,p=0;p<c;p++){for(g=0,d=0,q=0,O=Mr[h],F=or[m],A=kt[N],H=Mc[p],l=0;l<v;l++)H[l]=t(O[g],F[d],A[q]),g+=i,d+=a,q+=o;h+=n,m+=u,N+=f}}zl.exports=J2r});var vo=s((xle,Jl)=>{"use strict";var Y2r=Xl();Jl.exports=Y2r});var $l=s((Dle,Yl)=>{"use strict";function $2r(r){var e,t,i,n,a,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}Yl.exports=$2r});var wa=s((Hle,Zl)=>{"use strict";var Z2r=$l();Zl.exports=Z2r});var Kl=s((Wle,Ql)=>{"use strict";var Q2r=ba();function K2r(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(Q2r(r,i));return t}Ql.exports=K2r});var Ea=s((zle,r6)=>{"use strict";var r3r=Kl();r6.exports=r3r});var t6=s((Xle,e6)=>{"use strict";function e3r(r,e,t){var i,n,a,u,o,f;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}e6.exports=e3r});var n6=s((Jle,i6)=>{"use strict";var t3r=t6();i6.exports=t3r});var s6=s((Yle,a6)=>{"use strict";function i3r(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}a6.exports=i3r});var o6=s(($le,u6)=>{"use strict";function n3r(r,e,t,i){var n,a,u,o,f,v;for(a=r.length,u=r[0].length,n=i,f=0;f<a;f++)for(o=r[f],v=0;v<u;v++)e[n]=o[v],n+=t;return e}u6.exports=n3r});var fo=s((Zle,f6)=>{"use strict";var a3r=b(),v6=s6(),s3r=o6();a3r(v6,"assign",s3r);f6.exports=v6});var l6=s((Qle,c6)=>{"use strict";var u3r=/./;c6.exports=u3r});var co=s((Kle,p6)=>{"use strict";function o3r(r){return typeof r=="boolean"}p6.exports=o3r});var m6=s((r6e,g6)=>{"use strict";function v3r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}g6.exports=v3r});var h6=s((e6e,d6)=>{"use strict";var f3r=m6();d6.exports=f3r});var y6=s((t6e,q6)=>{"use strict";var c3r=h6(),l3r=c3r();function p3r(){return l3r&&typeof Symbol.toStringTag=="symbol"}q6.exports=p3r});var ui=s((i6e,b6)=>{"use strict";var g3r=y6();b6.exports=g3r});var lo=s((n6e,w6)=>{"use strict";var m3r=Object.prototype.toString;w6.exports=m3r});var N6=s((a6e,E6)=>{"use strict";var d3r=lo();function h3r(r){return d3r.call(r)}E6.exports=h3r});var S6=s((s6e,O6)=>{"use strict";var q3r=Object.prototype.hasOwnProperty;function y3r(r,e){return r==null?!1:q3r.call(r,e)}O6.exports=y3r});var S=s((u6e,A6)=>{"use strict";var b3r=S6();A6.exports=b3r});var T6=s((o6e,_6)=>{"use strict";var w3r=typeof Symbol=="function"?Symbol:void 0;_6.exports=w3r});var po=s((v6e,I6)=>{"use strict";var E3r=T6();I6.exports=E3r});var P6=s((f6e,R6)=>{"use strict";var L6=po(),N3r=typeof L6=="function"?L6.toStringTag:"";R6.exports=N3r});var M6=s((c6e,F6)=>{"use strict";var O3r=S(),pn=P6(),go=lo();function S3r(r){var e,t,i;if(r==null)return go.call(r);t=r[pn],e=O3r(r,pn);try{r[pn]=void 0}catch{return go.call(r)}return i=go.call(r),e?r[pn]=t:delete r[pn],i}F6.exports=S3r});var er=s((l6e,B6)=>{"use strict";var A3r=ui(),_3r=N6(),T3r=M6(),mo;A3r()?mo=T3r:mo=_3r;B6.exports=mo});var k6=s((p6e,j6)=>{"use strict";var I3r=Boolean;j6.exports=I3r});var ho=s((g6e,C6)=>{"use strict";var L3r=k6();C6.exports=L3r});var U6=s((m6e,V6)=>{"use strict";var R3r=Boolean.prototype.toString;V6.exports=R3r});var x6=s((d6e,G6)=>{"use strict";var P3r=U6();function F3r(r){try{return P3r.call(r),!0}catch{return!1}}G6.exports=F3r});var qo=s((h6e,D6)=>{"use strict";var M3r=ui(),B3r=er(),j3r=ho(),k3r=x6(),C3r=M3r();function V3r(r){return typeof r=="object"?r instanceof j3r?!0:C3r?k3r(r):B3r(r)==="[object Boolean]":!1}D6.exports=V3r});var W6=s((q6e,H6)=>{"use strict";var U3r=co(),G3r=qo();function x3r(r){return U3r(r)||G3r(r)}H6.exports=x3r});var cr=s((y6e,X6)=>{"use strict";var z6=b(),yo=W6(),D3r=co(),H3r=qo();z6(yo,"isPrimitive",D3r);z6(yo,"isObject",H3r);X6.exports=yo});var Y6=s((b6e,J6)=>{"use strict";function W3r(){return new Function("return this;")()}J6.exports=W3r});var Z6=s((w6e,$6)=>{"use strict";var z3r=typeof self=="object"?self:null;$6.exports=z3r});var K6=s((E6e,Q6)=>{"use strict";var X3r=typeof window=="object"?window:null;Q6.exports=X3r});var e4=s((N6e,r4)=>{"use strict";var J3r=typeof globalThis=="object"?globalThis:null;r4.exports=J3r});var bo=s((O6e,a4)=>{"use strict";var Y3r=cr().isPrimitive,$3r=y(),Z3r=Y6(),t4=Z6(),i4=K6(),n4=e4();function Q3r(r){if(arguments.length){if(!Y3r(r))throw new TypeError($3r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Z3r()}if(n4)return n4;if(t4)return t4;if(i4)return i4;throw new Error("unexpected error. Unable to resolve global object.")}a4.exports=Q3r});var o4=s((S6e,u4)=>{"use strict";var K3r=bo(),s4=K3r(),rvr=s4.document&&s4.document.childNodes;u4.exports=rvr});var f4=s((A6e,v4)=>{"use strict";var evr=Int8Array;v4.exports=evr});var l4=s((_6e,c4)=>{"use strict";var tvr=l6(),ivr=o4(),nvr=f4();function avr(){return typeof tvr=="function"||typeof nvr=="object"||typeof ivr=="function"}c4.exports=avr});var wo=s((T6e,p4)=>{"use strict";function svr(){return/^\s*function\s*([^(]*)/i}p4.exports=svr});var m4=s((I6e,g4)=>{"use strict";var uvr=wo(),ovr=uvr();g4.exports=ovr});var Eo=s((L6e,h4)=>{"use strict";var vvr=b(),d4=wo(),fvr=m4();vvr(d4,"REGEXP",fvr);h4.exports=d4});var y4=s((R6e,q4)=>{"use strict";var cvr=er(),No;function lvr(r){return cvr(r)==="[object Array]"}Array.isArray?No=Array.isArray:No=lvr;q4.exports=No});var mr=s((P6e,b4)=>{"use strict";var pvr=y4();b4.exports=pvr});var E4=s((F6e,w4)=>{"use strict";var gvr=mr(),mvr=y();function dvr(r){if(typeof r!="function")throw new TypeError(mvr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!gvr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}w4.exports=dvr});var O4=s((M6e,N4)=>{"use strict";var hvr=E4();N4.exports=hvr});var A4=s((B6e,S4)=>{"use strict";function qvr(r){return r!==null&&typeof r=="object"}S4.exports=qvr});var So=s((j6e,_4)=>{"use strict";var yvr=b(),bvr=O4(),Oo=A4(),wvr=bvr(Oo);yvr(Oo,"isObjectLikeArray",wvr);_4.exports=Oo});var I4=s((k6e,T4)=>{"use strict";var Evr=So();function Nvr(r){return Evr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}T4.exports=Nvr});var Vt=s((C6e,L4)=>{"use strict";var Ovr=I4();L4.exports=Ovr});var P4=s((V6e,R4)=>{"use strict";var Svr=er(),Avr=Eo().REGEXP,_vr=Vt();function Tvr(r){var e,t,i;if(t=Svr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Avr.exec(i.toString()),e)return e[1]}return _vr(r)?"Buffer":t}R4.exports=Tvr});var ce=s((U6e,F4)=>{"use strict";var Ivr=P4();F4.exports=Ivr});var B4=s((G6e,M4)=>{"use strict";var Lvr=ce();function Rvr(r){var e;return r===null?"null":(e=typeof r,e==="object"?Lvr(r).toLowerCase():e)}M4.exports=Rvr});var k4=s((x6e,j4)=>{"use strict";var Pvr=ce();function Fvr(r){return Pvr(r).toLowerCase()}j4.exports=Fvr});var Na=s((D6e,C4)=>{"use strict";var Mvr=l4(),Bvr=B4(),jvr=k4(),kvr=Mvr()?jvr:Bvr;C4.exports=kvr});var U4=s((H6e,V4)=>{"use strict";var Cvr=Na();function Vvr(r){return Cvr(r)==="function"}V4.exports=Vvr});var I=s((W6e,G4)=>{"use strict";var Uvr=U4();G4.exports=Uvr});var D4=s((z6e,x4)=>{"use strict";var Gvr=Math.floor;x4.exports=Gvr});var z=s((X6e,H4)=>{"use strict";var xvr=D4();H4.exports=xvr});var z4=s((J6e,W4)=>{"use strict";var Dvr=z();function Hvr(r){return Dvr(r)===r}W4.exports=Hvr});var hr=s((Y6e,X4)=>{"use strict";var Wvr=z4();X4.exports=Wvr});var Y4=s(($6e,J4)=>{"use strict";var zvr=9007199254740991;J4.exports=zvr});var Z4=s((Z6e,$4)=>{"use strict";var Xvr=hr(),Jvr=Y4();function Yvr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Xvr(r.length)&&r.length>=0&&r.length<=Jvr}$4.exports=Yvr});var Vr=s((Q6e,Q4)=>{"use strict";var $vr=Z4();Q4.exports=$vr});var r8=s((K6e,K4)=>{"use strict";var Zvr=I();function Qvr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Zvr(r.next)}K4.exports=Qvr});var t8=s((r4e,e8)=>{"use strict";var Kvr=r8();e8.exports=Kvr});var a8=s((e4e,n8)=>{"use strict";var i8="function";function rfr(r){return typeof r.get===i8&&typeof r.set===i8}n8.exports=rfr});var Ao=s((t4e,s8)=>{"use strict";var efr=a8();s8.exports=efr});var v8=s((i4e,o8)=>{"use strict";var u8={complex128:tfr,complex64:ifr,default:nfr};function tfr(r,e,t){r.set(t,e)}function ifr(r,e,t){r.set(t,e)}function nfr(r,e,t){r.set(t,e)}function afr(r){var e=u8[r];return typeof e=="function"?e:u8.default}o8.exports=afr});var _o=s((n4e,f8)=>{"use strict";var sfr=v8();f8.exports=sfr});var p8=s((a4e,l8)=>{"use strict";var c8={float64:ufr,float32:ofr,int32:vfr,int16:ffr,int8:cfr,uint32:lfr,uint16:pfr,uint8:gfr,uint8c:mfr,generic:dfr,default:hfr};function ufr(r,e,t){r[e]=t}function ofr(r,e,t){r[e]=t}function vfr(r,e,t){r[e]=t}function ffr(r,e,t){r[e]=t}function cfr(r,e,t){r[e]=t}function lfr(r,e,t){r[e]=t}function pfr(r,e,t){r[e]=t}function gfr(r,e,t){r[e]=t}function mfr(r,e,t){r[e]=t}function dfr(r,e,t){r[e]=t}function hfr(r,e,t){r[e]=t}function qfr(r){var e=c8[r];return typeof e=="function"?e:c8.default}l8.exports=qfr});var To=s((s4e,g8)=>{"use strict";var yfr=p8();g8.exports=yfr});var d8=s((u4e,m8)=>{"use strict";var bfr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};m8.exports=bfr});var q8=s((o4e,h8)=>{"use strict";var wfr=er(),Efr=typeof Float64Array=="function";function Nfr(r){return Efr&&r instanceof Float64Array||wfr(r)==="[object Float64Array]"}h8.exports=Nfr});var b8=s((v4e,y8)=>{"use strict";var Ofr=q8();y8.exports=Ofr});var E8=s((f4e,w8)=>{"use strict";var Sfr=typeof Float64Array=="function"?Float64Array:null;w8.exports=Sfr});var S8=s((c4e,O8)=>{"use strict";var Afr=b8(),N8=E8();function _fr(){var r,e;if(typeof N8!="function")return!1;try{e=new N8([1,3.14,-3.14,NaN]),r=Afr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}O8.exports=_fr});var Io=s((l4e,A8)=>{"use strict";var Tfr=S8();A8.exports=Tfr});var T8=s((p4e,_8)=>{"use strict";var Ifr=typeof Float64Array=="function"?Float64Array:void 0;_8.exports=Ifr});var L8=s((g4e,I8)=>{"use strict";function Lfr(){throw new Error("not implemented")}I8.exports=Lfr});var lr=s((m4e,R8)=>{"use strict";var Rfr=Io(),Pfr=T8(),Ffr=L8(),Lo;Rfr()?Lo=Pfr:Lo=Ffr;R8.exports=Lo});var F8=s((d4e,P8)=>{"use strict";var Mfr=er(),Bfr=typeof Float32Array=="function";function jfr(r){return Bfr&&r instanceof Float32Array||Mfr(r)==="[object Float32Array]"}P8.exports=jfr});var B8=s((h4e,M8)=>{"use strict";var kfr=F8();M8.exports=kfr});var L=s((q4e,j8)=>{"use strict";var Cfr=Number.POSITIVE_INFINITY;j8.exports=Cfr});var C8=s((y4e,k8)=>{"use strict";var Vfr=typeof Float32Array=="function"?Float32Array:null;k8.exports=Vfr});var G8=s((b4e,U8)=>{"use strict";var Ufr=B8(),Gfr=L(),V8=C8();function xfr(){var r,e;if(typeof V8!="function")return!1;try{e=new V8([1,3.14,-3.14,5e40]),r=Ufr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===Gfr}catch{r=!1}return r}U8.exports=xfr});var D8=s((w4e,x8)=>{"use strict";var Dfr=G8();x8.exports=Dfr});var W8=s((E4e,H8)=>{"use strict";var Hfr=typeof Float32Array=="function"?Float32Array:void 0;H8.exports=Hfr});var X8=s((N4e,z8)=>{"use strict";function Wfr(){throw new Error("not implemented")}z8.exports=Wfr});var Zr=s((O4e,J8)=>{"use strict";var zfr=D8(),Xfr=W8(),Jfr=X8(),Ro;zfr()?Ro=Xfr:Ro=Jfr;J8.exports=Ro});var $8=s((S4e,Y8)=>{"use strict";var Yfr=er(),$fr=typeof Uint32Array=="function";function Zfr(r){return $fr&&r instanceof Uint32Array||Yfr(r)==="[object Uint32Array]"}Y8.exports=Zfr});var le=s((A4e,Z8)=>{"use strict";var Qfr=$8();Z8.exports=Qfr});var oi=s((_4e,Q8)=>{"use strict";var Kfr=4294967295;Q8.exports=Kfr});var r5=s((T4e,K8)=>{"use strict";var rcr=typeof Uint32Array=="function"?Uint32Array:null;K8.exports=rcr});var i5=s((I4e,t5)=>{"use strict";var ecr=le(),Po=oi(),e5=r5();function tcr(){var r,e;if(typeof e5!="function")return!1;try{e=[1,3.14,-3.14,Po+1,Po+2],e=new e5(e),r=ecr(e)&&e[0]===1&&e[1]===3&&e[2]===Po-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}t5.exports=tcr});var a5=s((L4e,n5)=>{"use strict";var icr=i5();n5.exports=icr});var u5=s((R4e,s5)=>{"use strict";var ncr=typeof Uint32Array=="function"?Uint32Array:void 0;s5.exports=ncr});var v5=s((P4e,o5)=>{"use strict";function acr(){throw new Error("not implemented")}o5.exports=acr});var pr=s((F4e,f5)=>{"use strict";var scr=a5(),ucr=u5(),ocr=v5(),Fo;scr()?Fo=ucr:Fo=ocr;f5.exports=Fo});var l5=s((M4e,c5)=>{"use strict";var vcr=er(),fcr=typeof Int32Array=="function";function ccr(r){return fcr&&r instanceof Int32Array||vcr(r)==="[object Int32Array]"}c5.exports=ccr});var Oa=s((B4e,p5)=>{"use strict";var lcr=l5();p5.exports=lcr});var vi=s((j4e,g5)=>{"use strict";var pcr=2147483647;g5.exports=pcr});var d5=s((k4e,m5)=>{"use strict";var gcr=-2147483648;m5.exports=gcr});var q5=s((C4e,h5)=>{"use strict";var mcr=typeof Int32Array=="function"?Int32Array:null;h5.exports=mcr});var w5=s((V4e,b5)=>{"use strict";var dcr=Oa(),hcr=vi(),qcr=d5(),y5=q5();function ycr(){var r,e;if(typeof y5!="function")return!1;try{e=new y5([1,3.14,-3.14,hcr+1]),r=dcr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===qcr}catch{r=!1}return r}b5.exports=ycr});var N5=s((U4e,E5)=>{"use strict";var bcr=w5();E5.exports=bcr});var S5=s((G4e,O5)=>{"use strict";var wcr=typeof Int32Array=="function"?Int32Array:void 0;O5.exports=wcr});var _5=s((x4e,A5)=>{"use strict";function Ecr(){throw new Error("not implemented")}A5.exports=Ecr});var Qe=s((D4e,T5)=>{"use strict";var Ncr=N5(),Ocr=S5(),Scr=_5(),Mo;Ncr()?Mo=Ocr:Mo=Scr;T5.exports=Mo});var L5=s((H4e,I5)=>{"use strict";var Acr=er(),_cr=typeof Uint16Array=="function";function Tcr(r){return _cr&&r instanceof Uint16Array||Acr(r)==="[object Uint16Array]"}I5.exports=Tcr});var P5=s((W4e,R5)=>{"use strict";var Icr=L5();R5.exports=Icr});var M5=s((z4e,F5)=>{"use strict";var Lcr=65535;F5.exports=Lcr});var j5=s((X4e,B5)=>{"use strict";var Rcr=typeof Uint16Array=="function"?Uint16Array:null;B5.exports=Rcr});var V5=s((J4e,C5)=>{"use strict";var Pcr=P5(),Bo=M5(),k5=j5();function Fcr(){var r,e;if(typeof k5!="function")return!1;try{e=[1,3.14,-3.14,Bo+1,Bo+2],e=new k5(e),r=Pcr(e)&&e[0]===1&&e[1]===3&&e[2]===Bo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}C5.exports=Fcr});var G5=s((Y4e,U5)=>{"use strict";var Mcr=V5();U5.exports=Mcr});var D5=s(($4e,x5)=>{"use strict";var Bcr=typeof Uint16Array=="function"?Uint16Array:void 0;x5.exports=Bcr});var W5=s((Z4e,H5)=>{"use strict";function jcr(){throw new Error("not implemented")}H5.exports=jcr});var Ut=s((Q4e,z5)=>{"use strict";var kcr=G5(),Ccr=D5(),Vcr=W5(),jo;kcr()?jo=Ccr:jo=Vcr;z5.exports=jo});var J5=s((K4e,X5)=>{"use strict";var Ucr=er(),Gcr=typeof Int16Array=="function";function xcr(r){return Gcr&&r instanceof Int16Array||Ucr(r)==="[object Int16Array]"}X5.exports=xcr});var $5=s((r8e,Y5)=>{"use strict";var Dcr=J5();Y5.exports=Dcr});var Q5=s((e8e,Z5)=>{"use strict";var Hcr=32767;Z5.exports=Hcr});var rp=s((t8e,K5)=>{"use strict";var Wcr=-32768;K5.exports=Wcr});var tp=s((i8e,ep)=>{"use strict";var zcr=typeof Int16Array=="function"?Int16Array:null;ep.exports=zcr});var ap=s((n8e,np)=>{"use strict";var Xcr=$5(),Jcr=Q5(),Ycr=rp(),ip=tp();function $cr(){var r,e;if(typeof ip!="function")return!1;try{e=new ip([1,3.14,-3.14,Jcr+1]),r=Xcr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Ycr}catch{r=!1}return r}np.exports=$cr});var up=s((a8e,sp)=>{"use strict";var Zcr=ap();sp.exports=Zcr});var vp=s((s8e,op)=>{"use strict";var Qcr=typeof Int16Array=="function"?Int16Array:void 0;op.exports=Qcr});var cp=s((u8e,fp)=>{"use strict";function Kcr(){throw new Error("not implemented")}fp.exports=Kcr});var fi=s((o8e,lp)=>{"use strict";var rlr=up(),elr=vp(),tlr=cp(),ko;rlr()?ko=elr:ko=tlr;lp.exports=ko});var gp=s((v8e,pp)=>{"use strict";var ilr=er(),nlr=typeof Uint8Array=="function";function alr(r){return nlr&&r instanceof Uint8Array||ilr(r)==="[object Uint8Array]"}pp.exports=alr});var dp=s((f8e,mp)=>{"use strict";var slr=gp();mp.exports=slr});var qp=s((c8e,hp)=>{"use strict";var ulr=255;hp.exports=ulr});var bp=s((l8e,yp)=>{"use strict";var olr=typeof Uint8Array=="function"?Uint8Array:null;yp.exports=olr});var Np=s((p8e,Ep)=>{"use strict";var vlr=dp(),Co=qp(),wp=bp();function flr(){var r,e;if(typeof wp!="function")return!1;try{e=[1,3.14,-3.14,Co+1,Co+2],e=new wp(e),r=vlr(e)&&e[0]===1&&e[1]===3&&e[2]===Co-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Ep.exports=flr});var Sp=s((g8e,Op)=>{"use strict";var clr=Np();Op.exports=clr});var _p=s((m8e,Ap)=>{"use strict";var llr=typeof Uint8Array=="function"?Uint8Array:void 0;Ap.exports=llr});var Ip=s((d8e,Tp)=>{"use strict";function plr(){throw new Error("not implemented")}Tp.exports=plr});var Qr=s((h8e,Lp)=>{"use strict";var glr=Sp(),mlr=_p(),dlr=Ip(),Vo;glr()?Vo=mlr:Vo=dlr;Lp.exports=Vo});var Pp=s((q8e,Rp)=>{"use strict";var hlr=er(),qlr=typeof Uint8ClampedArray=="function";function ylr(r){return qlr&&r instanceof Uint8ClampedArray||hlr(r)==="[object Uint8ClampedArray]"}Rp.exports=ylr});var Mp=s((y8e,Fp)=>{"use strict";var blr=Pp();Fp.exports=blr});var jp=s((b8e,Bp)=>{"use strict";var wlr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Bp.exports=wlr});var Vp=s((w8e,Cp)=>{"use strict";var Elr=Mp(),kp=jp();function Nlr(){var r,e;if(typeof kp!="function")return!1;try{e=new kp([-1,0,1,3.14,4.99,255,256]),r=Elr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Cp.exports=Nlr});var Gp=s((E8e,Up)=>{"use strict";var Olr=Vp();Up.exports=Olr});var Dp=s((N8e,xp)=>{"use strict";var Slr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;xp.exports=Slr});var Wp=s((O8e,Hp)=>{"use strict";function Alr(){throw new Error("not implemented")}Hp.exports=Alr});var ci=s((S8e,zp)=>{"use strict";var _lr=Gp(),Tlr=Dp(),Ilr=Wp(),Uo;_lr()?Uo=Tlr:Uo=Ilr;zp.exports=Uo});var Jp=s((A8e,Xp)=>{"use strict";var Llr=er(),Rlr=typeof Int8Array=="function";function Plr(r){return Rlr&&r instanceof Int8Array||Llr(r)==="[object Int8Array]"}Xp.exports=Plr});var $p=s((_8e,Yp)=>{"use strict";var Flr=Jp();Yp.exports=Flr});var Qp=s((T8e,Zp)=>{"use strict";var Mlr=127;Zp.exports=Mlr});var r7=s((I8e,Kp)=>{"use strict";var Blr=-128;Kp.exports=Blr});var t7=s((L8e,e7)=>{"use strict";var jlr=typeof Int8Array=="function"?Int8Array:null;e7.exports=jlr});var a7=s((R8e,n7)=>{"use strict";var klr=$p(),Clr=Qp(),Vlr=r7(),i7=t7();function Ulr(){var r,e;if(typeof i7!="function")return!1;try{e=new i7([1,3.14,-3.14,Clr+1]),r=klr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Vlr}catch{r=!1}return r}n7.exports=Ulr});var u7=s((P8e,s7)=>{"use strict";var Glr=a7();s7.exports=Glr});var v7=s((F8e,o7)=>{"use strict";var xlr=typeof Int8Array=="function"?Int8Array:void 0;o7.exports=xlr});var c7=s((M8e,f7)=>{"use strict";function Dlr(){throw new Error("not implemented")}f7.exports=Dlr});var li=s((B8e,l7)=>{"use strict";var Hlr=u7(),Wlr=v7(),zlr=c7(),Go;Hlr()?Go=Wlr:Go=zlr;l7.exports=Go});var xo=s((j8e,p7)=>{"use strict";function Xlr(r){return typeof r=="number"}p7.exports=Xlr});var m7=s((k8e,g7)=>{"use strict";g7.exports=Number});var Sa=s((C8e,d7)=>{"use strict";var Jlr=m7();d7.exports=Jlr});var q7=s((V8e,h7)=>{"use strict";var Ylr=Sa(),$lr=Ylr.prototype.toString;h7.exports=$lr});var b7=s((U8e,y7)=>{"use strict";var Zlr=q7();function Qlr(r){try{return Zlr.call(r),!0}catch{return!1}}y7.exports=Qlr});var Do=s((G8e,w7)=>{"use strict";var Klr=ui(),r6r=er(),e6r=Sa(),t6r=b7(),i6r=Klr();function n6r(r){return typeof r=="object"?r instanceof e6r?!0:i6r?t6r(r):r6r(r)==="[object Number]":!1}w7.exports=n6r});var N7=s((x8e,E7)=>{"use strict";var a6r=xo(),s6r=Do();function u6r(r){return a6r(r)||s6r(r)}E7.exports=u6r});var k=s((D8e,S7)=>{"use strict";var O7=b(),Ho=N7(),o6r=xo(),v6r=Do();O7(Ho,"isPrimitive",o6r);O7(Ho,"isObject",v6r);S7.exports=Ho});var V=s((H8e,A7)=>{"use strict";var f6r=Sa(),c6r=f6r.NEGATIVE_INFINITY;A7.exports=c6r});var Wo=s((W8e,_7)=>{"use strict";var l6r=L(),p6r=V(),g6r=hr();function m6r(r){return r<l6r&&r>p6r&&g6r(r)}_7.exports=m6r});var zo=s((z8e,T7)=>{"use strict";var d6r=k().isPrimitive,h6r=Wo();function q6r(r){return d6r(r)&&h6r(r)}T7.exports=q6r});var Xo=s((X8e,I7)=>{"use strict";var y6r=k().isObject,b6r=Wo();function w6r(r){return y6r(r)&&b6r(r.valueOf())}I7.exports=w6r});var R7=s((J8e,L7)=>{"use strict";var E6r=zo(),N6r=Xo();function O6r(r){return E6r(r)||N6r(r)}L7.exports=O6r});var dr=s((Y8e,F7)=>{"use strict";var P7=b(),Jo=R7(),S6r=zo(),A6r=Xo();P7(Jo,"isPrimitive",S6r);P7(Jo,"isObject",A6r);F7.exports=Jo});var Yo=s(($8e,M7)=>{"use strict";var _6r=dr().isPrimitive;function T6r(r){return _6r(r)&&r>=0}M7.exports=T6r});var $o=s((Z8e,B7)=>{"use strict";var I6r=dr().isObject;function L6r(r){return I6r(r)&&r.valueOf()>=0}B7.exports=L6r});var k7=s((Q8e,j7)=>{"use strict";var R6r=Yo(),P6r=$o();function F6r(r){return R6r(r)||P6r(r)}j7.exports=F6r});var qr=s((K8e,V7)=>{"use strict";var C7=b(),Zo=k7(),M6r=Yo(),B6r=$o();C7(Zo,"isPrimitive",M6r);C7(Zo,"isObject",B6r);V7.exports=Zo});var Qo=s((r5e,U7)=>{"use strict";var j6r=4294967295;U7.exports=j6r});var x7=s((e5e,G7)=>{"use strict";var k6r=hr(),C6r=Qo();function V6r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&k6r(r.length)&&r.length>=0&&r.length<=C6r}G7.exports=V6r});var Gt=s((t5e,D7)=>{"use strict";var U6r=x7();D7.exports=U6r});var W7=s((i5e,H7)=>{"use strict";var G6r=er(),x6r=typeof ArrayBuffer=="function";function D6r(r){return x6r&&r instanceof ArrayBuffer||G6r(r)==="[object ArrayBuffer]"}H7.exports=D6r});var Aa=s((n5e,z7)=>{"use strict";var H6r=W7();z7.exports=H6r});var J7=s((a5e,X7)=>{"use strict";var W6r=mr();function z6r(r){return typeof r=="object"&&r!==null&&!W6r(r)}X7.exports=z6r});var _a=s((s5e,Y7)=>{"use strict";var X6r=J7();Y7.exports=X6r});var Z7=s((u5e,$7)=>{"use strict";function J6r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}$7.exports=J6r});var K7=s((o5e,Q7)=>{"use strict";function Y6r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}Q7.exports=Y6r});var n9=s((v5e,i9)=>{"use strict";var r9=k().isPrimitive,e9=$e(),gn=b(),t9=y(),$6r=Z7(),Z6r=K7();function xt(r,e){if(!(this instanceof xt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!r9(r))throw new TypeError(t9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!r9(e))throw new TypeError(t9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return e9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),e9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}gn(xt,"BYTES_PER_ELEMENT",8);gn(xt.prototype,"BYTES_PER_ELEMENT",8);gn(xt.prototype,"byteLength",16);gn(xt.prototype,"toString",$6r);gn(xt.prototype,"toJSON",Z6r);i9.exports=xt});var pi=s((f5e,a9)=>{"use strict";var Q6r=n9();a9.exports=Q6r});var u9=s((c5e,s9)=>{"use strict";var K6r=typeof Math.fround=="function"?Math.fround:null;s9.exports=K6r});var f9=s((l5e,v9)=>{"use strict";var r4r=Zr(),o9=new r4r(1);function e4r(r){return o9[0]=r,o9[0]}v9.exports=e4r});var p9=s((p5e,l9)=>{"use strict";var c9=u9(),t4r=f9(),Ko;typeof c9=="function"?Ko=c9:Ko=t4r;l9.exports=Ko});var m9=s((g5e,g9)=>{"use strict";function i4r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}g9.exports=i4r});var h9=s((m5e,d9)=>{"use strict";function n4r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}d9.exports=n4r});var N9=s((d5e,E9)=>{"use strict";var q9=k().isPrimitive,y9=$e(),mn=b(),b9=p9(),w9=y(),a4r=m9(),s4r=h9();function Dt(r,e){if(!(this instanceof Dt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!q9(r))throw new TypeError(w9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!q9(e))throw new TypeError(w9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return y9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:b9(r)}),y9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:b9(e)}),this}mn(Dt,"BYTES_PER_ELEMENT",4);mn(Dt.prototype,"BYTES_PER_ELEMENT",4);mn(Dt.prototype,"byteLength",8);mn(Dt.prototype,"toString",a4r);mn(Dt.prototype,"toJSON",s4r);E9.exports=Dt});var gi=s((h5e,O9)=>{"use strict";var u4r=N9();O9.exports=u4r});var A9=s((q5e,S9)=>{"use strict";var o4r=pi(),v4r=gi();function f4r(r){return r instanceof o4r||r instanceof v4r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}S9.exports=f4r});var Wr=s((y5e,_9)=>{"use strict";var c4r=A9();_9.exports=c4r});var I9=s((b5e,T9)=>{"use strict";var l4r=hr();function p4r(r){return l4r(r/2)}T9.exports=p4r});var Ta=s((w5e,L9)=>{"use strict";var g4r=I9();L9.exports=g4r});var P9=s((E5e,R9)=>{"use strict";var m4r=S(),Ia=po();function d4r(){return typeof Ia=="function"&&typeof Ia("foo")=="symbol"&&m4r(Ia,"iterator")&&typeof Ia.iterator=="symbol"}R9.exports=d4r});var La=s((N5e,F9)=>{"use strict";var h4r=P9();F9.exports=h4r});var B9=s((O5e,M9)=>{"use strict";var q4r=La(),y4r=q4r()?Symbol.iterator:null;M9.exports=y4r});var dn=s((S5e,j9)=>{"use strict";var b4r=B9();j9.exports=b4r});var C9=s((A5e,k9)=>{"use strict";var w4r=$e();function E4r(r,e,t){w4r(r,e,{configurable:!1,enumerable:!1,get:t})}k9.exports=E4r});var R=s((_5e,V9)=>{"use strict";var N4r=C9();V9.exports=N4r});var G9=s((T5e,U9)=>{"use strict";function O4r(r){return r.re}U9.exports=O4r});var Ke=s((I5e,x9)=>{"use strict";var S4r=G9();x9.exports=S4r});var H9=s((L5e,D9)=>{"use strict";function A4r(r){return r.im}D9.exports=A4r});var rt=s((R5e,W9)=>{"use strict";var _4r=H9();W9.exports=_4r});var X9=s((P5e,z9)=>{"use strict";var T4r=Zr();function I4r(r,e){return new T4r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}z9.exports=I4r});var mi=s((F5e,J9)=>{"use strict";var L4r=X9();J9.exports=L4r});var $9=s((M5e,Y9)=>{"use strict";var R4r=lr();function P4r(r,e){return new R4r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}Y9.exports=P4r});var di=s((B5e,Z9)=>{"use strict";var F4r=$9();Z9.exports=F4r});var rg=s((j5e,K9)=>{"use strict";var Q9={float64:M4r,float32:B4r,int32:j4r,int16:k4r,int8:C4r,uint32:V4r,uint16:U4r,uint8:G4r,uint8c:x4r,generic:D4r,default:H4r};function M4r(r,e){return r[e]}function B4r(r,e){return r[e]}function j4r(r,e){return r[e]}function k4r(r,e){return r[e]}function C4r(r,e){return r[e]}function V4r(r,e){return r[e]}function U4r(r,e){return r[e]}function G4r(r,e){return r[e]}function x4r(r,e){return r[e]}function D4r(r,e){return r[e]}function H4r(r,e){return r[e]}function W4r(r){var e=Q9[r];return typeof e=="function"?e:Q9.default}K9.exports=W4r});var Ra=s((k5e,eg)=>{"use strict";var z4r=rg();eg.exports=z4r});var ng=s((C5e,ig)=>{"use strict";var tg={complex128:X4r,complex64:J4r,default:Y4r};function X4r(r,e){return r.get(e)}function J4r(r,e){return r.get(e)}function Y4r(r,e){return r.get(e)}function $4r(r){var e=tg[r];return typeof e=="function"?e:tg.default}ig.exports=$4r});var Pa=s((V5e,ag)=>{"use strict";var Z4r=ng();ag.exports=Z4r});var ug=s((U5e,sg)=>{"use strict";var Q4r=Gt(),K4r=Wr(),r8r=Ke(),e8r=rt(),t8r=y();function i8r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Q4r(i)&&i.length>=2)e.push(i[0],i[1]);else if(K4r(i))e.push(r8r(i),e8r(i));else return new TypeError(t8r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}sg.exports=i8r});var vg=s((G5e,og)=>{"use strict";var n8r=Gt(),a8r=Wr(),s8r=Ke(),u8r=rt(),o8r=y();function v8r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),n8r(a)&&a.length>=2)i.push(a[0],a[1]);else if(a8r(a))i.push(s8r(a),u8r(a));else return new TypeError(o8r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}og.exports=v8r});var cg=s((x5e,fg)=>{"use strict";var f8r=Wr(),c8r=Ke(),l8r=rt();function p8r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!f8r(i))return null;r[a]=c8r(i),r[a+1]=l8r(i),a+=2}return r}fg.exports=p8r});var bg=s((D5e,yg)=>{"use strict";var hn=qr().isPrimitive,lg=Gt(),e1=Vr(),pg=Aa(),gg=_a(),g8r=mr(),Ht=I(),hi=Wr(),Fa=Ta(),r1=hr(),m8r=La(),qi=dn(),yr=b(),ja=R(),Ur=Zr(),mg=gi(),$=y(),Ma=Ke(),Ba=rt(),d8r=mi(),h8r=di(),q8r=Ra(),y8r=Pa(),dg=ug(),b8r=vg(),w8r=cg(),Br=Ur.BYTES_PER_ELEMENT*2,hg=m8r();function yi(r){return r instanceof tr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function qg(r){return r===tr||r.name==="Complex128Array"}function E8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Br}function N8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Br*2}function tr(){var r,e,t,i;if(e=arguments.length,!(this instanceof tr))return e===0?new tr:e===1?new tr(arguments[0]):e===2?new tr(arguments[0],arguments[1]):new tr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ur(0);else if(e===1)if(hn(arguments[0]))t=new Ur(arguments[0]*2);else if(e1(arguments[0]))if(t=arguments[0],i=t.length,i&&g8r(t)&&hi(t[0])){if(t=w8r(new Ur(i*2),t),t===null){if(!Fa(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(arguments[0])}}else{if(E8r(t))t=d8r(t,0);else if(N8r(t))t=h8r(t,0);else if(!Fa(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(t)}else if(pg(arguments[0])){if(t=arguments[0],!r1(t.byteLength/Br))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Br,t.byteLength));t=new Ur(t)}else if(gg(arguments[0])){if(t=arguments[0],hg===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ht(t[qi]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[qi](),!Ht(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=dg(t),t instanceof Error)throw t;t=new Ur(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!pg(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!hn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!r1(r/Br))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Br,r));if(e===2){if(i=t.byteLength-r,!r1(i/Br))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Br,i));t=new Ur(t,r)}else{if(i=arguments[2],!hn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Br>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Br));t=new Ur(t,r,i*2)}}return yr(this,"_buffer",t),yr(this,"_length",t.length/2),this}yr(tr,"BYTES_PER_ELEMENT",Br);yr(tr,"name","Complex64Array");yr(tr,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Ht(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Ht(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(yi(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),hi(l))u[g]=Ma(l),u[g+1]=Ba(l);else if(lg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(e1(e)){if(n){for(v=e.length,e.get&&e.set?f=y8r("default"):f=q8r("default"),p=0;p<v;p++)if(!hi(f(e,p))){c=!0;break}if(c){if(!Fa(v))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),hi(l))u[g]=Ma(l),u[g+1]=Ba(l);else if(lg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(gg(e)&&hg&&Ht(e[qi])){if(u=e[qi](),!Ht(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=b8r(u,n,t):o=dg(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});yr(tr,"of",function(){var e,t;if(!Ht(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ja(tr.prototype,"buffer",function(){return this._buffer.buffer});ja(tr.prototype,"byteLength",function(){return this._buffer.byteLength});ja(tr.prototype,"byteOffset",function(){return this._buffer.byteOffset});yr(tr.prototype,"BYTES_PER_ELEMENT",tr.BYTES_PER_ELEMENT);yr(tr.prototype,"copyWithin",function(e,t){if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});yr(tr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},yr(i,"next",f),yr(i,"return",v),qi&&yr(i,qi,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new mg(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});yr(tr.prototype,"get",function(e){var t;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new mg(t[e],t[e+1])});ja(tr.prototype,"length",function(){return this._length});yr(tr.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!hn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(hi(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ma(e),n[i+1]=Ba(e);return}if(yi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Br,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(e1(e)){for(o=e.length,v=0;v<o;v++)if(!hi(e[v])){u=!0;break}if(u){if(!Fa(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Br,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Ma(f),n[i+1]=Ba(f),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});yg.exports=tr});var bi=s((H5e,wg)=>{"use strict";var O8r=bg();wg.exports=O8r});var Ng=s((W5e,Eg)=>{"use strict";function S8r(r){return r.re}Eg.exports=S8r});var Kr=s((z5e,Og)=>{"use strict";var A8r=Ng();Og.exports=A8r});var Ag=s((X5e,Sg)=>{"use strict";function _8r(r){return r.im}Sg.exports=_8r});var re=s((J5e,_g)=>{"use strict";var T8r=Ag();_g.exports=T8r});var Ig=s((Y5e,Tg)=>{"use strict";var I8r=Gt(),L8r=Wr(),R8r=y(),P8r=Kr(),F8r=re();function M8r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,I8r(i)&&i.length>=2)e.push(i[0],i[1]);else if(L8r(i))e.push(P8r(i),F8r(i));else return new TypeError(R8r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Tg.exports=M8r});var Rg=s(($5e,Lg)=>{"use strict";var B8r=Gt(),j8r=Wr(),k8r=y(),C8r=Kr(),V8r=re();function U8r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),B8r(a)&&a.length>=2)i.push(a[0],a[1]);else if(j8r(a))i.push(C8r(a),V8r(a));else return new TypeError(k8r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}Lg.exports=U8r});var Fg=s((Z5e,Pg)=>{"use strict";var G8r=Wr(),x8r=Kr(),D8r=re();function H8r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!G8r(i))return null;r[a]=x8r(i),r[a+1]=D8r(i),a+=2}return r}Pg.exports=H8r});var xg=s((Q5e,Gg)=>{"use strict";var qn=qr().isPrimitive,Mg=Gt(),i1=Vr(),Bg=Aa(),jg=_a(),W8r=mr(),Wt=I(),wi=Wr(),ka=Ta(),t1=hr(),z8r=La(),Ei=dn(),br=b(),Ua=R(),Gr=lr(),kg=pi(),Ca=Kr(),Va=re(),X8r=mi(),J8r=di(),Y8r=Ra(),$8r=Pa(),Z=y(),Cg=Ig(),Z8r=Rg(),Q8r=Fg(),jr=Gr.BYTES_PER_ELEMENT*2,Vg=z8r();function Ni(r){return r instanceof ir||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Ug(r){return r===ir||r.name==="Complex64Array"}function K8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===jr/2}function r5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===jr}function ir(){var r,e,t,i;if(e=arguments.length,!(this instanceof ir))return e===0?new ir:e===1?new ir(arguments[0]):e===2?new ir(arguments[0],arguments[1]):new ir(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Gr(0);else if(e===1)if(qn(arguments[0]))t=new Gr(arguments[0]*2);else if(i1(arguments[0]))if(t=arguments[0],i=t.length,i&&W8r(t)&&wi(t[0])){if(t=Q8r(new Gr(i*2),t),t===null){if(!ka(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Gr(arguments[0])}}else{if(K8r(t))t=X8r(t,0);else if(r5r(t))t=J8r(t,0);else if(!ka(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Gr(t)}else if(Bg(arguments[0])){if(t=arguments[0],!t1(t.byteLength/jr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",jr,t.byteLength));t=new Gr(t)}else if(jg(arguments[0])){if(t=arguments[0],Vg===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Wt(t[Ei]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ei](),!Wt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Cg(t),t instanceof Error)throw t;t=new Gr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Bg(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!qn(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!t1(r/jr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",jr,r));if(e===2){if(i=t.byteLength-r,!t1(i/jr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",jr,i));t=new Gr(t,r)}else{if(i=arguments[2],!qn(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*jr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*jr));t=new Gr(t,r,i*2)}}return br(this,"_buffer",t),br(this,"_length",t.length/2),this}br(ir,"BYTES_PER_ELEMENT",jr);br(ir,"name","Complex128Array");br(ir,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ug(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Wt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(Ni(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),wi(l))u[g]=Ca(l),u[g+1]=Va(l);else if(Mg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(i1(e)){if(n){for(v=e.length,e.get&&e.set?f=$8r("default"):f=Y8r("default"),p=0;p<v;p++)if(!wi(f(e,p))){c=!0;break}if(c){if(!ka(v))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),wi(l))u[g]=Ca(l),u[g+1]=Va(l);else if(Mg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(jg(e)&&Vg&&Wt(e[Ei])){if(u=e[Ei](),!Wt(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=Z8r(u,n,t):o=Cg(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});br(ir,"of",function(){var e,t;if(!Wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ug(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Ua(ir.prototype,"buffer",function(){return this._buffer.buffer});Ua(ir.prototype,"byteLength",function(){return this._buffer.byteLength});Ua(ir.prototype,"byteOffset",function(){return this._buffer.byteOffset});br(ir.prototype,"BYTES_PER_ELEMENT",ir.BYTES_PER_ELEMENT);br(ir.prototype,"copyWithin",function(e,t){if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});br(ir.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},br(i,"next",f),br(i,"return",v),Ei&&br(i,Ei,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new kg(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});br(ir.prototype,"get",function(e){var t;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!qn(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new kg(t[e],t[e+1])});Ua(ir.prototype,"length",function(){return this._length});br(ir.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!qn(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(wi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ca(e),n[i+1]=Va(e);return}if(Ni(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*jr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Gr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i1(e)){for(o=e.length,v=0;v<o;v++)if(!wi(e[v])){u=!0;break}if(u){if(!ka(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*jr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Gr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Ca(f),n[i+1]=Va(f),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Gg.exports=ir});var Oi=s((K5e,Dg)=>{"use strict";var e5r=xg();Dg.exports=e5r});var Wg=s((rpe,Hg)=>{"use strict";var t5r=lr(),i5r=Zr(),n5r=pr(),a5r=Qe(),s5r=Ut(),u5r=fi(),o5r=Qr(),v5r=ci(),f5r=li(),c5r=bi(),l5r=Oi(),p5r=[t5r,i5r,a5r,n5r,u5r,s5r,f5r,o5r,v5r,c5r,l5r];Hg.exports=p5r});var Xg=s((epe,zg)=>{"use strict";var g5r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];zg.exports=g5r});var $g=s((tpe,Yg)=>{"use strict";var m5r=Vt(),d5r=mr(),h5r=ce(),q5r=d8(),y5r=Wg(),Jg=Xg(),b5r=Jg.length;function w5r(r){var e;if(d5r(r))return"generic";if(m5r(r))return null;for(e=0;e<b5r;e++)if(r instanceof y5r[e])return Jg[e];return q5r[h5r(r)]||null}Yg.exports=w5r});var Ga=s((ipe,Zg)=>{"use strict";var E5r=$g();Zg.exports=E5r});var rm=s((npe,Kg)=>{"use strict";var Qg=I(),N5r=Vr(),O5r=t8(),S5r=Ao(),A5r=_o(),_5r=To(),T5r=Ga(),n1=y();function I5r(){var r,e,t,i,n,a,u,o,f;if(r=arguments[0],arguments.length>1)if(N5r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!Qg(t))throw new TypeError(n1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!Qg(t))throw new TypeError(n1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!O5r(r))throw new TypeError(n1("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=T5r(i),S5r(i)?a=A5r(u):a=_5r(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}Kg.exports=I5r});var tm=s((ape,em)=>{"use strict";var L5r=rm();em.exports=L5r});var nm=s((spe,im)=>{"use strict";function R5r(r){return r!==r}im.exports=R5r});var E=s((upe,am)=>{"use strict";var P5r=nm();am.exports=P5r});var um=s((ope,sm)=>{"use strict";var F5r={Complex64:"complex64",Complex128:"complex128"};sm.exports=F5r});var vm=s((vpe,om)=>{"use strict";var M5r=gi(),B5r=pi(),j5r=[M5r,B5r];om.exports=j5r});var cm=s((fpe,fm)=>{"use strict";var k5r=["complex64","complex128"];fm.exports=k5r});var gm=s((cpe,pm)=>{"use strict";var C5r=ce(),V5r=um(),U5r=vm(),lm=cm(),G5r=lm.length;function x5r(r){var e;for(e=0;e<G5r;e++)if(r instanceof U5r[e])return lm[e];return V5r[C5r(r)]||null}pm.exports=x5r});var a1=s((lpe,mm)=>{"use strict";var D5r=gm();mm.exports=D5r});var hm=s((ppe,dm)=>{"use strict";var H5r=lr(),W5r=Zr(),z5r=Oi(),X5r=bi(),J5r={float64:H5r,float32:W5r,complex128:z5r,complex64:X5r};dm.exports=J5r});var ym=s((gpe,qm)=>{"use strict";var Y5r=hm();function $5r(r){return Y5r[r]||null}qm.exports=$5r});var wm=s((mpe,bm)=>{"use strict";var Z5r=ym();bm.exports=Z5r});var Nm=s((dpe,Em)=>{"use strict";function Q5r(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}Em.exports=Q5r});var Im=s((hpe,Tm)=>{"use strict";var K5r=gi(),rpr=pi(),Om=Kr(),Sm=re(),Am=Ke(),_m=rt();function epr(r,e,t,i,n,a){var u,o,f,v,c,l,p,g,h,d,m,q,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=Am(e),l=_m(e)):(v=Om(e),l=Sm(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Am(i),p=_m(i)):(c=Om(i),p=Sm(i)),o===2?u=K5r:u=rpr,n===1)return a?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],a?q=n-1:q=n,d=(c-v)/q,m=(p-l)/q,N=1;N<q;N++)g=v+d*N,h=l+m*N,f.push(new u(g,h));return a&&f.push(new u(c,p)),f}Tm.exports=epr});var s1=s((qpe,Lm)=>{"use strict";function tpr(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}Lm.exports=tpr});var u1=s((ype,Bm)=>{"use strict";var Rm=Kr(),Pm=re(),Fm=Ke(),Mm=rt();function ipr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=Fm(t),v=Mm(t)):(o=Rm(t),v=Pm(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=Fm(n),c=Mm(n)):(f=Rm(n),c=Pm(n)),a===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?g=a-1:g=a,l=(f-o)/g,p=(c-v)/g,d=2,h=1;h<g;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}Bm.exports=ipr});var km=s((bpe,jm)=>{"use strict";var npr=Object;jm.exports=npr});var Si=s((wpe,Cm)=>{"use strict";var apr=km();Cm.exports=apr});var Um=s((Epe,Vm)=>{"use strict";var spr=Object.getPrototypeOf;Vm.exports=spr});var xm=s((Npe,Gm)=>{"use strict";function upr(r){return r.__proto__}Gm.exports=upr});var Hm=s((Ope,Dm)=>{"use strict";var opr=er(),vpr=xm();function fpr(r){var e=vpr(r);return e||e===null?e:opr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Dm.exports=fpr});var zm=s((Spe,Wm)=>{"use strict";var cpr=I(),lpr=Um(),ppr=Hm(),o1;cpr(Object.getPrototypeOf)?o1=lpr:o1=ppr;Wm.exports=o1});var Jm=s((Ape,Xm)=>{"use strict";var gpr=Si(),mpr=zm();function dpr(r){return r==null?null:(r=gpr(r),mpr(r))}Xm.exports=dpr});var zt=s((_pe,Ym)=>{"use strict";var hpr=Jm();Ym.exports=hpr});var Qm=s((Tpe,Zm)=>{"use strict";var qpr=_a(),$m=I(),ypr=zt(),xa=S(),bpr=er(),wpr=Object.prototype;function Epr(r){var e;for(e in r)if(!xa(r,e))return!1;return!0}function Npr(r){var e;return qpr(r)?(e=ypr(r),e?!xa(r,"constructor")&&xa(e,"constructor")&&$m(e.constructor)&&bpr(e.constructor)==="[object Function]"&&xa(e,"isPrototypeOf")&&$m(e.isPrototypeOf)&&(e===wpr||Epr(r)):!0):!1}Zm.exports=Npr});var T=s((Ipe,Km)=>{"use strict";var Opr=Qm();Km.exports=Opr});var v1=s((Lpe,rd)=>{"use strict";function Spr(r){return typeof r=="string"}rd.exports=Spr});var td=s((Rpe,ed)=>{"use strict";var Apr=String.prototype.valueOf;ed.exports=Apr});var nd=s((Ppe,id)=>{"use strict";var _pr=td();function Tpr(r){try{return _pr.call(r),!0}catch{return!1}}id.exports=Tpr});var f1=s((Fpe,ad)=>{"use strict";var Ipr=ui(),Lpr=er(),Rpr=nd(),Ppr=Ipr();function Fpr(r){return typeof r=="object"?r instanceof String?!0:Ppr?Rpr(r):Lpr(r)==="[object String]":!1}ad.exports=Fpr});var ud=s((Mpe,sd)=>{"use strict";var Mpr=v1(),Bpr=f1();function jpr(r){return Mpr(r)||Bpr(r)}sd.exports=jpr});var Q=s((Bpe,vd)=>{"use strict";var od=b(),c1=ud(),kpr=v1(),Cpr=f1();od(c1,"isPrimitive",kpr);od(c1,"isObject",Cpr);vd.exports=c1});var p1=s((jpe,cd)=>{"use strict";var Vpr=T(),fd=S(),Upr=Q().isPrimitive,Gpr=cr().isPrimitive,l1=y();function xpr(r,e){return Vpr(e)?fd(e,"dtype")&&(r.dtype=e.dtype,!Upr(r.dtype))?new TypeError(l1("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):fd(e,"endpoint")&&(r.endpoint=e.endpoint,!Gpr(r.endpoint))?new TypeError(l1("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(l1("invalid argument. Options argument must be an object. Value: `%s`.",e))}cd.exports=xpr});var g1=s((kpe,Dpr)=>{Dpr.exports={endpoint:!0}});var qd=s((Cpe,hd)=>{"use strict";var ld=Wr(),pd=k().isPrimitive,Hpr=qr().isPrimitive,gd=E(),md=a1(),Wpr=wm(),zpr=mi(),Xpr=di(),Ai=y(),Jpr=Nm(),Ypr=Im(),$pr=s1(),dd=u1(),Zpr=p1(),Qpr=g1();function Kpr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(o=md(r),o===null){if(!ld(r))throw new TypeError(Ai("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!pd(r)||gd(r))throw new TypeError(Ai("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=md(e),f===null){if(!ld(e))throw new TypeError(Ai("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!pd(e)||gd(e))throw new TypeError(Ai("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!Hpr(t))throw new TypeError(Ai("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Qpr.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=Zpr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?Ypr(o,r,f,e,t,i.endpoint):Jpr(r,e,t,i.endpoint);if(n=Wpr(i.dtype),n===null)throw new TypeError(Ai('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return dd(zpr(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return dd(Xpr(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return $pr(u,r,e,t,i.endpoint)}hd.exports=Kpr});var bd=s((Vpe,yd)=>{"use strict";var r7r=Ao(),e7r=Ra(),t7r=To(),i7r=Pa(),n7r=_o(),a7r=Ga();function s7r(r){var e=a7r(r);return r7r(r)?{accessorProtocol:!0,accessors:[i7r(e),n7r(e)]}:{accessorProtocol:!1,accessors:[e7r(e),t7r(e)]}}yd.exports=s7r});var Ed=s((Upe,wd)=>{"use strict";var u7r=bd();wd.exports=u7r});var Od=s((Gpe,Nd)=>{"use strict";var o7r=Ed();function v7r(r){var e=o7r(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Nd.exports=v7r});var yn=s((xpe,Sd)=>{"use strict";var f7r=Od();Sd.exports=f7r});var Rd=s((Dpe,Ld)=>{"use strict";var c7r=gi(),l7r=pi(),Ad=Kr(),_d=re(),Td=Ke(),Id=rt();function p7r(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d,m,q,N,O,F;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=Td(t),l=Id(t)):(v=Ad(t),l=_d(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=Td(n),p=Id(n)):(c=Ad(n),p=_d(n)),f===2?o=c7r:o=l7r,h=r.data,g=r.accessors[1],a===1)return u?g(h,0,new o(c,p)):g(h,0,new o(v,l)),r;for(g(h,0,new o(v,l)),u?O=a-1:O=a,q=(c-v)/O,N=(p-l)/O,F=1;F<O;F++)d=v+q*F,m=l+N*F,g(h,F,new o(d,m));return u&&g(h,O,new o(c,p)),r}Ld.exports=p7r});var Fd=s((Hpe,Pd)=>{"use strict";function g7r(r,e,t,i,n){var a,u,o,f,v;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(a,v,e+f*v);return n&&u(a,o,t),r}Pd.exports=g7r});var Gd=s((Wpe,Ud)=>{"use strict";var Md=Wr(),Bd=k().isPrimitive,m7r=Vr(),bn=y(),jd=E(),kd=a1(),d7r=Ga(),h7r=mi(),q7r=di(),Cd=yn(),y7r=Rd(),b7r=Fd(),Vd=u1(),w7r=s1(),E7r=p1(),N7r=g1();function O7r(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(a=kd(r),a===null){if(!Md(r))throw new TypeError(bn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!Bd(r)||jd(r))throw new TypeError(bn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=kd(e),u===null){if(!Md(e))throw new TypeError(bn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!Bd(e)||jd(e))throw new TypeError(bn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!m7r(t))throw new TypeError(bn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:N7r.endpoint},arguments.length>3&&(n=E7r(i,arguments[3]),n))throw n;if(f=d7r(t),f===null&&(f="generic"),f==="complex64")return Vd(h7r(t,0),a,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return Vd(q7r(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=Cd(t),y7r(v,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=Cd(t),v.accessorProtocol?(b7r(v,r,e,t.length,i.endpoint),t):(w7r(t,r,e,t.length,i.endpoint),t)}Ud.exports=O7r});var Hd=s((zpe,Dd)=>{"use strict";var S7r=b(),xd=qd(),A7r=Gd();S7r(xd,"assign",A7r);Dd.exports=xd});var zd=s((Xpe,Wd)=>{"use strict";var _7r=k().isPrimitive,T7r=Q().isPrimitive,I7r=cr().isPrimitive,L7r=mr(),R7r=y(),P7r={number:_7r,string:T7r,boolean:I7r};function F7r(r,e,t){var i,n,a,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],a=e[f],u=P7r[a],u(o))i.push([[o]]),n.push([1,1]);else if(L7r(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(R7r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],a,a,String(o)));return[i,n]}Wd.exports=F7r});var Da=s((Jpe,Xd)=>{"use strict";var M7r=zd();Xd.exports=M7r});var Yd=s((Ype,Jd)=>{"use strict";var B7r=Ea();function j7r(r){return B7r(1,r)}Jd.exports=j7r});var Zd=s(($pe,$d)=>{"use strict";var k7r=Yd();$d.exports=k7r});var Kd=s((Zpe,Qd)=>{"use strict";function C7r(r,e,t){var i,n,a,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],a=0;a<i;a++)f[a]=t(o[a])}Qd.exports=C7r});var m1=s((Qpe,rh)=>{"use strict";var V7r=Kd();rh.exports=V7r});var th=s((Kpe,eh)=>{"use strict";var U7r=Ea();function G7r(r){return U7r(0,r)}eh.exports=G7r});var Ha=s((r7e,ih)=>{"use strict";var x7r=th();ih.exports=x7r});var ah=s((e7e,nh)=>{"use strict";var wr=rr(),D7r=uo(),H7r=vo(),W7r=wa(),z7r=ba(),X7r=Ea(),J7r=n6(),Y7r=fo(),$7r=tm(),Z7r=Hd(),Q7r=Da(),K7r=Zd(),r9r=m1(),e9r=Ze(),t9r=Ha();function i9r(r){return wr(r,"bbinary2d",D7r),wr(r,"bternary2d",H7r),wr(r,"broadcastShapes",W7r),wr(r,"filled",z7r),wr(r,"filled2d",X7r),wr(r,"filled2dBy",J7r),wr(r,"flatten2d",Y7r),wr(r,"iterator2array",$7r),wr(r,"linspace",Z7r),wr(r,"normalizeBroadcastArgs",Q7r),wr(r,"ones2d",K7r),wr(r,"unary2d",r9r),wr(r,"zeros",e9r),wr(r,"zeros2d",t9r),r}nh.exports=i9r});var oh=s((t7e,uh)=>{"use strict";var sh=y();function n9r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(sh('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(sh('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}uh.exports=n9r});var fh=s((i7e,vh)=>{"use strict";var a9r=oh();vh.exports=a9r});var lh=s((n7e,ch)=>{"use strict";var s9r=k().isPrimitive,u9r=fh(),o9r=y();function v9r(r,e,t,i,n,a){var u,o;if(!(s9r(r)&&u9r(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(o9r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}ch.exports=v9r});var gh=s((a7e,ph)=>{"use strict";var f9r=lh();ph.exports=f9r});var dh=s((s7e,mh)=>{"use strict";var c9r=cr().isPrimitive,l9r=y();function p9r(r,e){if(!c9r(r))throw new TypeError(l9r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}mh.exports=p9r});var qh=s((u7e,hh)=>{"use strict";var g9r=dh();hh.exports=g9r});var bh=s((o7e,yh)=>{"use strict";function m9r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}yh.exports=m9r});var Eh=s((v7e,wh)=>{"use strict";var d9r=bh();wh.exports=d9r});var Oh=s((f7e,Nh)=>{"use strict";var h9r=y(),q9r=Eh();function y9r(r,e,t){if(!q9r(r,e))throw new TypeError(h9r("invalid argument. %s must be broadcast compatible.",t))}Nh.exports=y9r});var Ah=s((c7e,Sh)=>{"use strict";var b9r=Oh();Sh.exports=b9r});var Th=s((l7e,_h)=>{"use strict";function w9r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}_h.exports=w9r});var Lh=s((p7e,Ih)=>{"use strict";var E9r=Th();Ih.exports=E9r});var Ph=s((g7e,Rh)=>{"use strict";var N9r=y(),O9r=Lh();function S9r(r,e,t,i){if(!O9r(r,e))throw new TypeError(N9r("invalid argument. %s must be broadcast compatible with %s.",t,i))}Rh.exports=S9r});var Mh=s((m7e,Fh)=>{"use strict";var A9r=Ph();Fh.exports=A9r});var jh=s((d7e,Bh)=>{"use strict";function _9r(r,e,t){var i,n,a,u,o;for(i=r.length,n=t,a=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?a+=u*(r[o]-1):u<0&&(n+=u*(r[o]-1))}return[n,a]}Bh.exports=_9r});var Ch=s((h7e,kh)=>{"use strict";function T9r(r,e,t,i){var n,a,u,o,f;for(n=r.length,a=t,u=t,f=0;f<n;f++){if(r[f]===0)return i[0]=t,i[1]=t,i;o=e[f],o>0?u+=o*(r[f]-1):o<0&&(a+=o*(r[f]-1))}return i[0]=a,i[1]=u,i}kh.exports=T9r});var d1=s((q7e,Uh)=>{"use strict";var I9r=b(),Vh=jh(),L9r=Ch();I9r(Vh,"assign",L9r);Uh.exports=Vh});var xh=s((y7e,Gh)=>{"use strict";var R9r=d1();function P9r(r,e,t,i){var n=R9r(e,t,i);return n[0]>=0&&n[1]<r}Gh.exports=P9r});var Hh=s((b7e,Dh)=>{"use strict";var F9r=xh();Dh.exports=F9r});var zh=s((w7e,Wh)=>{"use strict";var M9r=Hh();function B9r(r,e,t,i){if(e.length&&!M9r(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}Wh.exports=B9r});var Jh=s((E7e,Xh)=>{"use strict";var j9r=zh();Xh.exports=j9r});var $h=s((N7e,Yh)=>{"use strict";var k9r=y();function C9r(r,e){if(r===void 0)throw new Error(k9r("invalid invocation. Must provide %s.",e))}Yh.exports=C9r});var h1=s((O7e,Zh)=>{"use strict";var V9r=$h();Zh.exports=V9r});var Kh=s((S7e,Qh)=>{"use strict";var U9r=y();function G9r(r,e,t,i){if(!(r>e))throw new TypeError(U9r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Qh.exports=G9r});var eq=s((A7e,rq)=>{"use strict";var x9r=Kh();rq.exports=x9r});var iq=s((_7e,tq)=>{"use strict";var D9r=y();function H9r(r,e,t,i){if(!(r>=e))throw new TypeError(D9r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}tq.exports=H9r});var aq=s((T7e,nq)=>{"use strict";var W9r=iq();nq.exports=W9r});var uq=s((I7e,sq)=>{"use strict";var z9r=dr().isPrimitive,X9r=y();function J9r(r,e){if(!z9r(r))throw new TypeError(X9r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}sq.exports=J9r});var vq=s((L7e,oq)=>{"use strict";var Y9r=uq();oq.exports=Y9r});var cq=s((R7e,fq)=>{"use strict";var $9r=y();function Z9r(r,e,t,i){if(!(r<e))throw new TypeError($9r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}fq.exports=Z9r});var pq=s((P7e,lq)=>{"use strict";var Q9r=cq();lq.exports=Q9r});var mq=s((F7e,gq)=>{"use strict";var K9r=y();function rgr(r,e,t,i){if(!(r<=e))throw new TypeError(K9r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}gq.exports=rgr});var hq=s((M7e,dq)=>{"use strict";var egr=mq();dq.exports=egr});var yq=s((B7e,qq)=>{"use strict";var tgr=qr().isPrimitive,igr=y();function ngr(r,e){if(!tgr(r))throw new TypeError(igr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}qq.exports=ngr});var wq=s((j7e,bq)=>{"use strict";var agr=yq();bq.exports=agr});var q1=s((k7e,Eq)=>{"use strict";var sgr=k().isPrimitive;function ugr(r){return sgr(r)&&r>=0}Eq.exports=ugr});var y1=s((C7e,Nq)=>{"use strict";var ogr=k().isObject;function vgr(r){return ogr(r)&&r.valueOf()>=0}Nq.exports=vgr});var Sq=s((V7e,Oq)=>{"use strict";var fgr=q1(),cgr=y1();function lgr(r){return fgr(r)||cgr(r)}Oq.exports=lgr});var Wa=s((U7e,_q)=>{"use strict";var Aq=b(),b1=Sq(),pgr=q1(),ggr=y1();Aq(b1,"isPrimitive",pgr);Aq(b1,"isObject",ggr);_q.exports=b1});var Iq=s((G7e,Tq)=>{"use strict";var mgr=Wa().isPrimitive,dgr=y();function hgr(r,e){if(!mgr(r))throw new TypeError(dgr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Tq.exports=hgr});var Rq=s((x7e,Lq)=>{"use strict";var qgr=Iq();Lq.exports=qgr});var Fq=s((D7e,Pq)=>{"use strict";var ygr=k().isPrimitive,bgr=y();function wgr(r,e){if(!ygr(r))throw new TypeError(bgr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Pq.exports=wgr});var Bq=s((H7e,Mq)=>{"use strict";var Egr=Fq();Mq.exports=Egr});var kq=s((W7e,jq)=>{"use strict";var Ngr=y();function Ogr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Ngr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}jq.exports=Ogr});var Vq=s((z7e,Cq)=>{"use strict";var Sgr=kq();Cq.exports=Sgr});var w1=s((X7e,Uq)=>{"use strict";var Agr=dr().isPrimitive;function _gr(r){return Agr(r)&&r>0}Uq.exports=_gr});var E1=s((J7e,Gq)=>{"use strict";var Tgr=dr().isObject;function Igr(r){return Tgr(r)&&r.valueOf()>0}Gq.exports=Igr});var Dq=s((Y7e,xq)=>{"use strict";var Lgr=w1(),Rgr=E1();function Pgr(r){return Lgr(r)||Rgr(r)}xq.exports=Pgr});var ee=s(($7e,Wq)=>{"use strict";var Hq=b(),N1=Dq(),Fgr=w1(),Mgr=E1();Hq(N1,"isPrimitive",Fgr);Hq(N1,"isObject",Mgr);Wq.exports=N1});var Xq=s((Z7e,zq)=>{"use strict";var Bgr=ee().isPrimitive,jgr=y();function kgr(r,e){if(!Bgr(r))throw new TypeError(jgr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}zq.exports=kgr});var O1=s((Q7e,Jq)=>{"use strict";var Cgr=Xq();Jq.exports=Cgr});var S1=s((K7e,Yq)=>{"use strict";var Vgr=k().isPrimitive;function Ugr(r){return Vgr(r)&&r>0}Yq.exports=Ugr});var A1=s((r9e,$q)=>{"use strict";var Ggr=k().isObject;function xgr(r){return Ggr(r)&&r.valueOf()>0}$q.exports=xgr});var Qq=s((e9e,Zq)=>{"use strict";var Dgr=S1(),Hgr=A1();function Wgr(r){return Dgr(r)||Hgr(r)}Zq.exports=Wgr});var W=s((t9e,ry)=>{"use strict";var Kq=b(),_1=Qq(),zgr=S1(),Xgr=A1();Kq(_1,"isPrimitive",zgr);Kq(_1,"isObject",Xgr);ry.exports=_1});var ty=s((i9e,ey)=>{"use strict";var Jgr=W().isPrimitive,Ygr=y();function $gr(r,e){if(!Jgr(r))throw new TypeError(Ygr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}ey.exports=$gr});var ny=s((n9e,iy)=>{"use strict";var Zgr=ty();iy.exports=Zgr});var T1=s((a9e,ay)=>{"use strict";var Qgr=k().isPrimitive;function Kgr(r){return Qgr(r)&&r>=0&&r<=1}ay.exports=Kgr});var I1=s((s9e,sy)=>{"use strict";var rmr=k().isObject;function emr(r){return rmr(r)&&r.valueOf()>=0&&r.valueOf()<=1}sy.exports=emr});var oy=s((u9e,uy)=>{"use strict";var tmr=T1(),imr=I1();function nmr(r){return tmr(r)||imr(r)}uy.exports=nmr});var wn=s((o9e,fy)=>{"use strict";var vy=b(),L1=oy(),amr=T1(),smr=I1();vy(L1,"isPrimitive",amr);vy(L1,"isObject",smr);fy.exports=L1});var ly=s((v9e,cy)=>{"use strict";var umr=wn().isPrimitive,omr=y();function vmr(r,e){if(!umr(r))throw new TypeError(omr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}cy.exports=vmr});var gy=s((f9e,py)=>{"use strict";var fmr=ly();py.exports=fmr});var dy=s((c9e,my)=>{"use strict";var cmr=mr(),lmr=y();function pmr(r,e){if(!cmr(r))throw new TypeError(lmr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}my.exports=pmr});var qy=s((l9e,hy)=>{"use strict";var gmr=dy();hy.exports=gmr});var by=s((p9e,yy)=>{"use strict";function mmr(r){return r.length===1||r[0].length===1}yy.exports=mmr});var Ey=s((g9e,wy)=>{"use strict";var dmr=by();wy.exports=dmr});var Oy=s((m9e,Ny)=>{"use strict";var hmr=mr(),qmr=Ey();function ymr(r){return hmr(r)&&qmr(r)}Ny.exports=ymr});var Ay=s((d9e,Sy)=>{"use strict";var bmr=Oy();Sy.exports=bmr});var Ty=s((h9e,_y)=>{"use strict";var wmr=y(),Emr=Ay();function Nmr(r,e){if(!Emr(r))throw new TypeError(wmr("invalid argument. %s must consist of only a single row or a single column.",e))}_y.exports=Nmr});var Ly=s((q9e,Iy)=>{"use strict";var Omr=Ty();Iy.exports=Omr});var Py=s((y9e,Ry)=>{"use strict";function Smr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}Ry.exports=Smr});var My=s((b9e,Fy)=>{"use strict";var Amr=Py();Fy.exports=Amr});var jy=s((w9e,By)=>{"use strict";var _mr=y(),Tmr=My();function Imr(r,e,t){if(!Tmr(r,e))throw new TypeError(_mr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}By.exports=Imr});var Cy=s((E9e,ky)=>{"use strict";var Lmr=jy();ky.exports=Lmr});var Uy=s((N9e,Vy)=>{"use strict";var Rmr=Q().isPrimitive,Pmr=y();function Fmr(r,e){if(!Rmr(r))throw new TypeError(Pmr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}Vy.exports=Fmr});var xy=s((O9e,Gy)=>{"use strict";var Mmr=Uy();Gy.exports=Mmr});var Hy=s((S9e,Dy)=>{"use strict";var Bmr=y(),jmr=qr().isPrimitive;function kmr(r,e){var t;for(t=0;t<r.length;t++)if(!jmr(r[t]))throw new TypeError(Bmr("invalid argument. %s must contain only nonnegative integers.",e))}Dy.exports=kmr});var zy=s((A9e,Wy)=>{"use strict";var Cmr=Hy();Wy.exports=Cmr});var Jy=s((_9e,Xy)=>{"use strict";var Vmr=y(),Umr=dr().isPrimitive;function Gmr(r,e){var t;for(t=0;t<r.length;t++)if(!Umr(r[t]))throw new TypeError(Vmr("invalid argument. %s must contain only integers.",e))}Xy.exports=Gmr});var $y=s((T9e,Yy)=>{"use strict";var xmr=Jy();Yy.exports=xmr});var Qy=s((I9e,Zy)=>{"use strict";var Dmr=y();function Hmr(r){throw new Error(Dmr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}Zy.exports=Hmr});var rb=s((L9e,Ky)=>{"use strict";var Wmr=Qy();Ky.exports=Wmr});var ib=s((R9e,tb)=>{"use strict";var eb=O1(),zmr=h1();function Xmr(r,e,t){eb(r,"Number of rows"),eb(e,"Number of columns"),zmr(t,"a pseudorandom number generator seed")}tb.exports=Xmr});var ab=s((P9e,nb)=>{"use strict";var Jmr=ib();nb.exports=Jmr});var ub=s((F9e,sb)=>{"use strict";var Ymr=hr(),$mr=Qo();function Zmr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&Ymr(r.length)&&r.length>=0&&r.length<=$mr}sb.exports=Zmr});var vb=s((M9e,ob)=>{"use strict";var Qmr=ub();ob.exports=Qmr});var cb=s((B9e,fb)=>{"use strict";var Kmr=vb(),rdr=y();function edr(r){if(typeof r!="function")throw new TypeError(rdr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Kmr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}fb.exports=edr});var R1=s((j9e,lb)=>{"use strict";var tdr=cb();lb.exports=tdr});var mb=s((k9e,gb)=>{"use strict";var P1=dr(),pb=b(),F1=R1(),idr=F1(P1.isPrimitive),ndr=F1(P1.isObject),M1=F1(P1);pb(M1,"primitives",idr);pb(M1,"objects",ndr);gb.exports=M1});var qb=s((C9e,hb)=>{"use strict";var B1=qr(),db=b(),j1=R1(),adr=j1(B1.isPrimitive),sdr=j1(B1.isObject),k1=j1(B1);db(k1,"primitives",adr);db(k1,"objects",sdr);hb.exports=k1});var bb=s((V9e,yb)=>{"use strict";var te=rr(),udr=mr(),odr=dr().isPrimitive,vdr=mb().primitives,fdr=qr().isPrimitive,cdr=qb().primitives,ldr=Wa().isPrimitive,pdr=k().isPrimitive,gdr=ee().isPrimitive,mdr=W().isPrimitive,ddr=Q().isPrimitive;function hdr(r){return te(r,"isArray",udr),te(r,"isInteger",odr),te(r,"isIntegerArray",vdr),te(r,"isNonNegativeInteger",fdr),te(r,"isNonNegativeIntegerArray",cdr),te(r,"isNonNegativeNumber",ldr),te(r,"isNumber",pdr),te(r,"isPositiveInteger",gdr),te(r,"isPositiveNumber",mdr),te(r,"isString",ddr),r}yb.exports=hdr});var Eb=s((U9e,wb)=>{"use strict";var X=rr(),qdr=gh(),ydr=qh(),bdr=Ah(),wdr=Mh(),Edr=Jh(),Ndr=h1(),Odr=eq(),Sdr=aq(),Adr=vq(),_dr=pq(),Tdr=hq(),Idr=wq(),Ldr=Rq(),Rdr=Bq(),Pdr=Vq(),Fdr=O1(),Mdr=ny(),Bdr=gy(),jdr=qy(),kdr=Ly(),Cdr=Cy(),Vdr=xy(),Udr=zy(),Gdr=$y(),xdr=rb(),Ddr=ab(),Hdr=bb();function Wdr(r){return X(r,"isBetween",qdr),X(r,"isBoolean",ydr),X(r,"isBroadcastCompatible",bdr),X(r,"isBroadcastCompatibleWith",wdr),X(r,"isBufferLengthCompatible",Edr),X(r,"isDefined",Ndr),X(r,"isGreaterThan",Odr),X(r,"isGreaterThanEqual",Sdr),X(r,"isInteger",Adr),X(r,"isLessThan",_dr),X(r,"isLessThanEqual",Tdr),X(r,"isNonNegativeInteger",Idr),X(r,"isNonNegativeNumber",Ldr),X(r,"isNumber",Rdr),X(r,"isOneOf",Pdr),X(r,"isPositiveInteger",Fdr),X(r,"isPositiveNumber",Mdr),X(r,"isProbability",Bdr),X(r,"isRange",jdr),X(r,"isRange1d",kdr),X(r,"isSameShape",Cdr),X(r,"isString",Vdr),X(r,"isValidShape",Udr),X(r,"isValidStrides",Gdr),X(r,"unrecognizedOptionName",xdr),X(r,"verifyCommonPRNGArgs",Ddr),X(r,"base",Hdr({})),r}wb.exports=Wdr});var Ob=s((G9e,Nb)=>{"use strict";var C1=4;function zdr(r,e,t,i,n,a){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%C1,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<C1)return n;for(v=f;v<r;v+=C1)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=a;return n}Nb.exports=zdr});var Ab=s((x9e,Sb)=>{"use strict";var En=4;function Xdr(r,e,t,i,n,a,u,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&u===1){if(c=r%En,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=u;if(r<En)return a;for(l=c;l<r;l+=En)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=En,v+=En;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=u;return a}Sb.exports=Xdr});var V1=s((D9e,Tb)=>{"use strict";var Jdr=b(),_b=Ob(),Ydr=Ab();Jdr(_b,"ndarray",Ydr);Tb.exports=_b});var Rb=s((H9e,Lb)=>{"use strict";var Ib=rr(),$dr=V1().ndarray,Zdr=V1().ndarray;function Qdr(r){return Ib(r,"daxpy",$dr),Ib(r,"saxpy",Zdr),r}Lb.exports=Qdr});var Fb=s((W9e,Pb)=>{"use strict";var Kdr=zt(),rhr=er();function ehr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(rhr(r)==="[object Error]")return!0;r=Kdr(r)}return!1}Pb.exports=ehr});var Bb=s((z9e,Mb)=>{"use strict";var thr=Fb();Mb.exports=thr});var U1=s((X9e,jb)=>{"use strict";function ihr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}jb.exports=ihr});var Cb=s((J9e,kb)=>{"use strict";var nhr=U1(),ahr=nhr();kb.exports=ahr});var Gb=s((Y9e,Ub)=>{"use strict";var shr=b(),Vb=U1(),uhr=Cb();shr(Vb,"REGEXP",uhr);Ub.exports=Vb});var Db=s(($9e,xb)=>{"use strict";var ohr=Q().isPrimitive,vhr=Gb(),fhr=y();function chr(r){if(!ohr(r))throw new TypeError(fhr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=vhr().exec(r),r?new RegExp(r[1],r[2]):null}xb.exports=chr});var Wb=s((Z9e,Hb)=>{"use strict";var lhr=Db();Hb.exports=lhr});var G1=s((Q9e,zb)=>{"use strict";var phr=k().isPrimitive,ghr=E();function mhr(r){return phr(r)&&ghr(r)}zb.exports=mhr});var x1=s((K9e,Xb)=>{"use strict";var dhr=k().isObject,hhr=E();function qhr(r){return dhr(r)&&hhr(r.valueOf())}Xb.exports=qhr});var Yb=s((rge,Jb)=>{"use strict";var yhr=G1(),bhr=x1();function whr(r){return yhr(r)||bhr(r)}Jb.exports=whr});var vr=s((ege,Zb)=>{"use strict";var $b=b(),D1=Yb(),Ehr=G1(),Nhr=x1();$b(D1,"isPrimitive",Ehr);$b(D1,"isObject",Nhr);Zb.exports=D1});var ew=s((tge,rw)=>{"use strict";var Qb=vr(),Ohr=Vr(),Shr=Q().isPrimitive,Ahr=dr().isPrimitive,Kb=y();function _hr(r,e,t){var i,n;if(!Ohr(r)&&!Shr(r))throw new TypeError(Kb("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Ahr(t))throw new TypeError(Kb("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(Qb(e)){for(;n<i;n++)if(Qb(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}rw.exports=_hr});var za=s((ige,tw)=>{"use strict";var Thr=ew();tw.exports=Thr});var Xa=s((nge,iw)=>{"use strict";function Ihr(r){return Object.keys(Object(r))}iw.exports=Ihr});var aw=s((age,nw)=>{"use strict";var Lhr=Xa();function Rhr(){return(Lhr(arguments)||"").length!==2}function Phr(){return Rhr(1,2)}nw.exports=Phr});var uw=s((sge,sw)=>{"use strict";var Fhr=typeof Object.keys<"u";sw.exports=Fhr});var H1=s((uge,ow)=>{"use strict";var Mhr=er();function Bhr(r){return Mhr(r)==="[object Arguments]"}ow.exports=Bhr});var cw=s((oge,fw)=>{"use strict";var jhr=H1(),vw;function khr(){return jhr(arguments)}vw=khr();fw.exports=vw});var W1=s((vge,lw)=>{"use strict";var Chr=Object.prototype.propertyIsEnumerable;lw.exports=Chr});var mw=s((fge,gw)=>{"use strict";var Vhr=W1(),pw;function Uhr(){return!Vhr.call("beep","0")}pw=Uhr();gw.exports=pw});var hw=s((cge,dw)=>{"use strict";var Ghr=Q(),xhr=vr().isPrimitive,Dhr=dr().isPrimitive,Hhr=W1(),Whr=mw();function zhr(r,e){var t;return r==null?!1:(t=Hhr.call(r,e),!t&&Whr&&Ghr(r)?(e=+e,!xhr(e)&&Dhr(e)&&e>=0&&e<r.length):t)}dw.exports=zhr});var Nn=s((lge,qw)=>{"use strict";var Xhr=hw();qw.exports=Xhr});var bw=s((pge,yw)=>{"use strict";var Jhr=S(),Yhr=Nn(),$hr=mr(),Zhr=hr(),Qhr=oi();function Khr(r){return r!==null&&typeof r=="object"&&!$hr(r)&&typeof r.length=="number"&&Zhr(r.length)&&r.length>=0&&r.length<=Qhr&&Jhr(r,"callee")&&!Yhr(r,"callee")}yw.exports=Khr});var X1=s((gge,ww)=>{"use strict";var rqr=cw(),eqr=H1(),tqr=bw(),z1;rqr?z1=eqr:z1=tqr;ww.exports=z1});var Ow=s((mge,Nw)=>{"use strict";var iqr=X1(),Ew=Xa(),nqr=Array.prototype.slice;function aqr(r){return iqr(r)?Ew(nqr.call(r)):Ew(r)}Nw.exports=aqr});var Aw=s((dge,Sw)=>{"use strict";function sqr(){}Sw.exports=sqr});var C=s((hge,_w)=>{"use strict";var uqr=Aw();_w.exports=uqr});var Iw=s((qge,Tw)=>{"use strict";var oqr=Nn(),vqr=C(),fqr=oqr(vqr,"prototype");Tw.exports=fqr});var Rw=s((yge,Lw)=>{"use strict";var cqr=Nn(),lqr={toString:null},pqr=!cqr(lqr,"toString");Lw.exports=pqr});var J1=s((bge,Pw)=>{"use strict";function gqr(r){return r.constructor&&r.constructor.prototype===r}Pw.exports=gqr});var Fw=s((wge,mqr)=>{mqr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Bw=s((Ege,Mw)=>{"use strict";var dqr=typeof window>"u"?void 0:window;Mw.exports=dqr});var Vw=s((Nge,Cw)=>{"use strict";var hqr=S(),qqr=za(),jw=Na(),yqr=J1(),bqr=Fw(),_i=Bw(),kw;function wqr(){var r;if(jw(_i)==="undefined")return!1;for(r in _i)try{qqr(bqr,r)===-1&&hqr(_i,r)&&_i[r]!==null&&jw(_i[r])==="object"&&yqr(_i[r])}catch{return!0}return!1}kw=wqr();Cw.exports=kw});var Gw=s((Oge,Uw)=>{"use strict";var Eqr=typeof window<"u";Uw.exports=Eqr});var Hw=s((Sge,Dw)=>{"use strict";var Nqr=Vw(),xw=J1(),Oqr=Gw();function Sqr(r){if(Oqr===!1&&!Nqr)return xw(r);try{return xw(r)}catch{return!1}}Dw.exports=Sqr});var Ww=s((Age,Aqr)=>{Aqr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Jw=s((_ge,Xw)=>{"use strict";var _qr=So(),Y1=S(),Tqr=X1(),Iqr=Iw(),Lqr=Rw(),Rqr=Hw(),zw=Ww();function Pqr(r){var e,t,i,n,a,u,o;if(n=[],Tqr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!Y1(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!_qr(r))return n;t=Iqr&&i}for(a in r)!(t&&a==="prototype")&&Y1(r,a)&&n.push(String(a));if(Lqr)for(e=Rqr(r),o=0;o<zw.length;o++)u=zw[o],!(e&&u==="constructor")&&Y1(r,u)&&n.push(String(u));return n}Xw.exports=Pqr});var $w=s((Tge,Yw)=>{"use strict";var Fqr=aw(),Mqr=uw(),Bqr=Xa(),jqr=Ow(),kqr=Jw(),Ja;Mqr?Fqr()?Ja=jqr:Ja=Bqr:Ja=kqr;Yw.exports=Ja});var Ti=s((Ige,Zw)=>{"use strict";var Cqr=$w();Zw.exports=Cqr});var Kw=s((Lge,Qw)=>{"use strict";var Vqr=typeof Object.getOwnPropertyNames<"u";Qw.exports=Vqr});var tE=s((Rge,eE)=>{"use strict";var rE=Si(),Uqr=rE.getOwnPropertyNames;function Gqr(r){return Uqr(rE(r))}eE.exports=Gqr});var nE=s((Pge,iE)=>{"use strict";var xqr=Si(),Dqr=Ti();function Hqr(r){return Dqr(xqr(r))}iE.exports=Hqr});var sE=s((Fge,aE)=>{"use strict";var Wqr=Kw(),zqr=tE(),Xqr=nE(),$1;Wqr?$1=zqr:$1=Xqr;aE.exports=$1});var oE=s((Mge,uE)=>{"use strict";var Jqr=typeof Object.getOwnPropertyDescriptor<"u";uE.exports=Jqr});var fE=s((Bge,vE)=>{"use strict";var Yqr=Object.getOwnPropertyDescriptor;function $qr(r,e){var t;return r==null?null:(t=Yqr(r,e),t===void 0?null:t)}vE.exports=$qr});var lE=s((jge,cE)=>{"use strict";var Zqr=S();function Qqr(r,e){return Zqr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}cE.exports=Qqr});var gE=s((kge,pE)=>{"use strict";var Kqr=oE(),ryr=fE(),eyr=lE(),Z1;Kqr?Z1=ryr:Z1=eyr;pE.exports=Z1});var dE=s((Cge,mE)=>{"use strict";var tyr=typeof Buffer=="function"?Buffer:null;mE.exports=tyr});var qE=s((Vge,hE)=>{"use strict";var iyr=Vt(),Ya=dE();function nyr(){var r,e;if(typeof Ya!="function")return!1;try{typeof Ya.from=="function"?e=Ya.from([1,2,3,4]):e=new Ya([1,2,3,4]),r=iyr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}hE.exports=nyr});var bE=s((Uge,yE)=>{"use strict";var ayr=qE();yE.exports=ayr});var NE=s($a=>{"use strict";$a.byteLength=uyr;$a.toByteArray=vyr;$a.fromByteArray=lyr;var ie=[],xr=[],syr=typeof Uint8Array<"u"?Uint8Array:Array,Q1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Xt=0,wE=Q1.length;Xt<wE;++Xt)ie[Xt]=Q1[Xt],xr[Q1.charCodeAt(Xt)]=Xt;var Xt,wE;xr["-".charCodeAt(0)]=62;xr["_".charCodeAt(0)]=63;function EE(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function uyr(r){var e=EE(r),t=e[0],i=e[1];return(t+i)*3/4-i}function oyr(r,e,t){return(e+t)*3/4-t}function vyr(r){var e,t=EE(r),i=t[0],n=t[1],a=new syr(oyr(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=xr[r.charCodeAt(f)]<<18|xr[r.charCodeAt(f+1)]<<12|xr[r.charCodeAt(f+2)]<<6|xr[r.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=xr[r.charCodeAt(f)]<<2|xr[r.charCodeAt(f+1)]>>4,a[u++]=e&255),n===1&&(e=xr[r.charCodeAt(f)]<<10|xr[r.charCodeAt(f+1)]<<4|xr[r.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function fyr(r){return ie[r>>18&63]+ie[r>>12&63]+ie[r>>6&63]+ie[r&63]}function cyr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(fyr(i));return n.join("")}function lyr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(cyr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(ie[e>>2]+ie[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(ie[e>>10]+ie[e>>4&63]+ie[e<<2&63]+"=")),n.join("")}});var OE=s(K1=>{K1.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,g=r[e+l];for(l+=p,a=g&(1<<-c)-1,g>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-v}return(g?-1:1)*u*Math.pow(2,a-i)};K1.write=function(r,e,t,i,n,a){var u,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+g]=o&255,g+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+g]=u&255,g+=h,u/=256,v-=8);r[t+g-h]|=d*128}});var GE=s(Pi=>{"use strict";var r2=NE(),Li=OE(),SE=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Pi.Buffer=w;Pi.SlowBuffer=qyr;Pi.INSPECT_MAX_BYTES=50;var Za=2147483647;Pi.kMaxLength=Za;w.TYPED_ARRAY_SUPPORT=pyr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function pyr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function pe(r){if(r>Za)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return n2(r)}return IE(r,e,t)}w.poolSize=8192;function IE(r,e,t){if(typeof r=="string")return myr(r,e);if(ArrayBuffer.isView(r))return dyr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ne(r,ArrayBuffer)||r&&ne(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ne(r,SharedArrayBuffer)||r&&ne(r.buffer,SharedArrayBuffer)))return t2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=hyr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return IE(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function LE(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function gyr(r,e,t){return LE(r),r<=0?pe(r):e!==void 0?typeof t=="string"?pe(r).fill(e,t):pe(r).fill(e):pe(r)}w.alloc=function(r,e,t){return gyr(r,e,t)};function n2(r){return LE(r),pe(r<0?0:a2(r)|0)}w.allocUnsafe=function(r){return n2(r)};w.allocUnsafeSlow=function(r){return n2(r)};function myr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=RE(r,e)|0,i=pe(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function e2(r){let e=r.length<0?0:a2(r.length)|0,t=pe(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function dyr(r){if(ne(r,Uint8Array)){let e=new Uint8Array(r);return t2(e.buffer,e.byteOffset,e.byteLength)}return e2(r)}function t2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function hyr(r){if(w.isBuffer(r)){let e=a2(r.length)|0,t=pe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||u2(r.length)?pe(0):e2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return e2(r.data)}function a2(r){if(r>=Za)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Za.toString(16)+" bytes");return r|0}function qyr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(ne(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),ne(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(ne(u,Uint8Array))a+u.length>n.length?(w.isBuffer(u)||(u=w.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(w.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function RE(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ne(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return i2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return UE(r).length;default:if(n)return i?-1:i2(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=RE;function yyr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Iyr(this,e,t);case"utf8":case"utf-8":return FE(this,e,t);case"ascii":return _yr(this,e,t);case"latin1":case"binary":return Tyr(this,e,t);case"base64":return Syr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Lyr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Jt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Jt(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Jt(this,t,t+3),Jt(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Jt(this,t,t+7),Jt(this,t+1,t+6),Jt(this,t+2,t+5),Jt(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?FE(this,0,e):yyr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=Pi.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};SE&&(w.prototype[SE]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(ne(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,f=Math.min(u,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function PE(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,u2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:AE(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):AE(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function AE(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return PE(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return PE(this,e,t,i,!1)};function byr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(u2(o))return u;r[t+u]=o}return u}function wyr(r,e,t,i){return Qa(i2(e,r.length-t),r,t,i)}function Eyr(r,e,t,i){return Qa(Myr(e),r,t,i)}function Nyr(r,e,t,i){return Qa(UE(e),r,t,i)}function Oyr(r,e,t,i){return Qa(Byr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return byr(this,e,t,i);case"utf8":case"utf-8":return wyr(this,e,t,i);case"ascii":case"latin1":case"binary":return Eyr(this,e,t,i);case"base64":return Nyr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Oyr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Syr(r,e,t){return e===0&&t===r.length?r2.fromByteArray(r):r2.fromByteArray(r.slice(e,t))}function FE(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return Ayr(i)}var _E=4096;function Ayr(r){let e=r.length;if(e<=_E)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=_E));return t}function _yr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function Tyr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function Iyr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=jyr[r[a]];return n}function Lyr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function fr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=et(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&On(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});w.prototype.readBigUInt64BE=et(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&On(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};w.prototype.readInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=et(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&On(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=et(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&On(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Li.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Li.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Li.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Li.read(this,e,!1,52,8)};function Er(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;Er(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;Er(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function ME(r,e,t,i,n){VE(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function BE(r,e,t,i,n){VE(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}w.prototype.writeBigUInt64LE=et(function(e,t=0){return ME(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=et(function(e,t=0){return BE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);Er(this,e,t,i,f-1,-f)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);Er(this,e,t,i,f-1,-f)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=et(function(e,t=0){return ME(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=et(function(e,t=0){return BE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function jE(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function kE(r,e,t,i,n){return e=+e,t=t>>>0,n||jE(r,e,t,4,34028234663852886e22,-34028234663852886e22),Li.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return kE(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return kE(this,e,t,!1,i)};function CE(r,e,t,i,n){return e=+e,t=t>>>0,n||jE(r,e,t,8,17976931348623157e292,-17976931348623157e292),Li.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return CE(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return CE(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=w.isBuffer(e)?e:w.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var Ii={};function s2(r,e,t){Ii[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}s2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);s2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);s2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=TE(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=TE(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function TE(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function Ryr(r,e,t){Ri(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&On(e,r.length-(t+1))}function VE(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Ii.ERR_OUT_OF_RANGE("value",o,r)}Ryr(i,n,a)}function Ri(r,e){if(typeof r!="number")throw new Ii.ERR_INVALID_ARG_TYPE(e,"number",r)}function On(r,e,t){throw Math.floor(r)!==r?(Ri(r,t),new Ii.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ii.ERR_BUFFER_OUT_OF_BOUNDS:new Ii.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var Pyr=/[^+/0-9A-Za-z-_]/g;function Fyr(r){if(r=r.split("=")[0],r=r.trim().replace(Pyr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function i2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Myr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Byr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function UE(r){return r2.toByteArray(Fyr(r))}function Qa(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function ne(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function u2(r){return r!==r}var jyr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function et(r){return typeof BigInt>"u"?kyr:r}function kyr(){throw new Error("BigInt not supported")}});var DE=s((Wge,xE)=>{"use strict";var Cyr=GE().Buffer;xE.exports=Cyr});var WE=s((zge,HE)=>{"use strict";function Vyr(){throw new Error("not implemented")}HE.exports=Vyr});var tt=s((Xge,zE)=>{"use strict";var Uyr=bE(),Gyr=DE(),xyr=WE(),o2;Uyr()?o2=Gyr:o2=xyr;zE.exports=o2});var JE=s((Jge,XE)=>{"use strict";var Dyr=I(),Hyr=tt(),Wyr=Dyr(Hyr.from);XE.exports=Wyr});var $E=s((Yge,YE)=>{"use strict";var zyr=Vt(),Xyr=y(),Jyr=tt();function Yyr(r){if(!zyr(r))throw new TypeError(Xyr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Jyr.from(r)}YE.exports=Yyr});var QE=s(($ge,ZE)=>{"use strict";var $yr=Vt(),Zyr=y(),Qyr=tt();function Kyr(r){if(!$yr(r))throw new TypeError(Zyr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Qyr(r)}ZE.exports=Kyr});var rN=s((Zge,KE)=>{"use strict";var rbr=JE(),ebr=$E(),tbr=QE(),v2;rbr?v2=ebr:v2=tbr;KE.exports=v2});var iN=s((Qge,tN)=>{"use strict";var ibr=li(),nbr=Qr(),abr=ci(),sbr=fi(),ubr=Ut(),obr=Qe(),vbr=pr(),fbr=Zr(),cbr=lr(),eN;function lbr(r){return new ibr(r)}function pbr(r){return new nbr(r)}function gbr(r){return new abr(r)}function mbr(r){return new sbr(r)}function dbr(r){return new ubr(r)}function hbr(r){return new obr(r)}function qbr(r){return new vbr(r)}function ybr(r){return new fbr(r)}function bbr(r){return new cbr(r)}function wbr(){var r={int8array:lbr,uint8array:pbr,uint8clampedarray:gbr,int16array:mbr,uint16array:dbr,int32array:hbr,uint32array:qbr,float32array:ybr,float64array:bbr};return r}eN=wbr();tN.exports=eN});var oN=s((Kge,uN)=>{"use strict";var Ka=S(),f2=mr(),nN=Vt(),Ebr=Bb(),aN=Na(),Nbr=Wb(),Obr=za(),sN=Ti(),Sbr=sE(),Sn=gE(),Abr=zt(),An=$e(),_br=rN(),Tbr=iN();function Ibr(r){var e,t,i,n,a,u,o,f;for(e=[],n=[],o=Object.create(Abr(r)),e.push(r),n.push(o),t=Sbr(r),f=0;f<t.length;f++)i=t[f],a=Sn(r,i),Ka(a,"value")&&(u=f2(r[i])?[]:{},a.value=Yt(r[i],u,e,n,-1)),An(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Lbr(r){var e=[],t=[],i,n,a,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=sN(r),f=0;f<i.length;f++)u=i[f],n=Sn(r,u),Ka(n,"value")&&(a=f2(r[u])?[]:{},n.value=Yt(r[u],a,e,t,-1)),An(o,u,n);return o}function Yt(r,e,t,i,n){var a,u,o,f,v,c,l,p,g,h;if(n-=1,typeof r!="object"||r===null)return r;if(nN(r))return _br(r);if(Ebr(r))return Lbr(r);if(o=aN(r),o==="date")return new Date(+r);if(o==="regexp")return Nbr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=Tbr[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Ibr(r):{};if(u=sN(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=aN(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||nN(p)){a==="object"?(f=Sn(r,c),Ka(f,"value")&&(f.value=Yt(p)),An(e,c,f)):e[c]=Yt(p);continue}if(g=Obr(t,p),g!==-1){e[c]=i[g];continue}l=f2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Yt(p,l,t,i,n):(f=Sn(r,c),Ka(f,"value")&&(f.value=Yt(p,l,t,i,n)),An(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=Sn(r,c),An(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}uN.exports=Yt});var fN=s((rme,vN)=>{"use strict";var Rbr=mr(),Pbr=qr().isPrimitive,Fbr=y(),Mbr=L(),Bbr=oN();function jbr(r,e){var t;if(arguments.length>1){if(!Pbr(e))throw new TypeError(Fbr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=Mbr;return t=Rbr(r)?new Array(r.length):{},Bbr(r,t,[r],[t],e)}vN.exports=jbr});var _n=s((eme,cN)=>{"use strict";var kbr=fN();cN.exports=kbr});var lN=s((tme,Cbr)=>{Cbr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var gN=s((ime,pN)=>{"use strict";var Vbr=_n(),Ubr=lN();function Gbr(){return Vbr(Ubr)}pN.exports=Gbr});var mN=s((nme,xbr)=>{xbr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var hN=s((ame,dN)=>{"use strict";var Dbr=_n(),Hbr=mN();function Wbr(){return Dbr(Hbr)}dN.exports=Wbr});var qN=s((sme,zbr)=>{zbr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var bN=s((ume,yN)=>{"use strict";var Xbr=_n(),Jbr=qN();function Ybr(){return Xbr(Jbr)}yN.exports=Ybr});var wN=s((ome,$br)=>{$br.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var NN=s((vme,EN)=>{"use strict";var Zbr=wN();function Qbr(){return Zbr.slice()}EN.exports=Qbr});var ON=s((fme,Kbr)=>{Kbr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var AN=s((cme,SN)=>{"use strict";var rwr=_n(),ewr=ON();function twr(){return rwr(ewr)}SN.exports=twr});var TN=s((lme,_N)=>{"use strict";var Tn=rr(),iwr=gN(),nwr=hN(),awr=bN(),swr=NN(),uwr=AN();function owr(r){return Tn(r,"AFINN_111",iwr),Tn(r,"AFINN_96",nwr),Tn(r,"ANSCOMBES_QUARTET",awr),Tn(r,"HERNDON_VENUS_SEMIDIAMETERS",swr),Tn(r,"NIGHTINGALES_ROSE",uwr),r}_N.exports=owr});var LN=s((pme,IN)=>{"use strict";function vwr(r,e){return r+e}IN.exports=vwr});var PN=s((gme,RN)=>{"use strict";var fwr=LN();RN.exports=fwr});var MN=s((mme,FN)=>{"use strict";var cwr=L(),lwr=V();function pwr(r){return r===cwr||r===lwr}FN.exports=pwr});var kr=s((dme,BN)=>{"use strict";var gwr=MN();BN.exports=gwr});var CN=s((hme,kN)=>{"use strict";var jN=Ta();function mwr(r){return r>0?jN(r-1):jN(r+1)}kN.exports=mwr});var r0=s((qme,VN)=>{"use strict";var dwr=CN();VN.exports=dwr});var GN=s((yme,UN)=>{"use strict";var hwr=Math.sqrt;UN.exports=hwr});var U=s((bme,xN)=>{"use strict";var qwr=GN();xN.exports=qwr});var HN=s((wme,DN)=>{"use strict";function ywr(r){return Math.abs(r)}DN.exports=ywr});var Y=s((Eme,WN)=>{"use strict";var bwr=HN();WN.exports=bwr});var XN=s((Nme,zN)=>{"use strict";var wwr=Qr(),Ewr=Ut(),Nwr={uint16:Ewr,uint8:wwr};zN.exports=Nwr});var ZN=s((Ome,$N)=>{"use strict";var JN=XN(),YN;function Owr(){var r,e;return r=new JN.uint16(1),r[0]=4660,e=new JN.uint8(r.buffer),e[0]===52}YN=Owr();$N.exports=YN});var zr=s((Sme,QN)=>{"use strict";var Swr=ZN();QN.exports=Swr});var eO=s((Ame,rO)=>{"use strict";var Awr=zr(),KN,c2,l2;Awr===!0?(c2=1,l2=0):(c2=0,l2=1);KN={HIGH:c2,LOW:l2};rO.exports=KN});var p2=s((_me,aO)=>{"use strict";var _wr=pr(),Twr=lr(),iO=eO(),nO=new Twr(1),tO=new _wr(nO.buffer),Iwr=iO.HIGH,Lwr=iO.LOW;function Rwr(r,e,t,i){return nO[0]=r,e[i]=tO[Iwr],e[i+t]=tO[Lwr],e}aO.exports=Rwr});var uO=s((Tme,sO)=>{"use strict";var Pwr=p2();function Fwr(r){return Pwr(r,[0>>>0,0>>>0],1,0)}sO.exports=Fwr});var Fi=s((Ime,vO)=>{"use strict";var Mwr=b(),oO=uO(),Bwr=p2();Mwr(oO,"assign",Bwr);vO.exports=oO});var cO=s((Lme,fO)=>{"use strict";var jwr=zr(),g2;jwr===!0?g2=0:g2=1;fO.exports=g2});var pO=s((Rme,lO)=>{"use strict";var kwr=pr(),Cwr=lr(),Vwr=cO(),m2=new Cwr(1),Uwr=new kwr(m2.buffer);function Gwr(r,e){return m2[0]=r,Uwr[Vwr]=e>>>0,m2[0]}lO.exports=Gwr});var ge=s((Pme,gO)=>{"use strict";var xwr=pO();gO.exports=xwr});var dO=s((Fme,mO)=>{"use strict";function Dwr(r){return r|0}mO.exports=Dwr});var d2=s((Mme,hO)=>{"use strict";var Hwr=dO();hO.exports=Hwr});var ae=s((Bme,qO)=>{"use strict";var Wwr=2147483647;qO.exports=Wwr});var h2=s((jme,yO)=>{"use strict";var zwr=2147483648;yO.exports=zwr});var wO=s((kme,bO)=>{"use strict";var Xwr=zr(),q2;Xwr===!0?q2=1:q2=0;bO.exports=q2});var OO=s((Cme,NO)=>{"use strict";var Jwr=pr(),Ywr=lr(),$wr=wO(),EO=new Ywr(1),Zwr=new Jwr(EO.buffer);function Qwr(r){return EO[0]=r,Zwr[$wr]}NO.exports=Qwr});var ar=s((Vme,SO)=>{"use strict";var Kwr=OO();SO.exports=Kwr});var TO=s((Ume,_O)=>{"use strict";var rEr=zr(),AO,y2,b2;rEr===!0?(y2=1,b2=0):(y2=0,b2=1);AO={HIGH:y2,LOW:b2};_O.exports=AO});var FO=s((Gme,PO)=>{"use strict";var eEr=pr(),tEr=lr(),LO=TO(),RO=new tEr(1),IO=new eEr(RO.buffer),iEr=LO.HIGH,nEr=LO.LOW;function aEr(r,e){return IO[iEr]=r,IO[nEr]=e,RO[0]}PO.exports=aEr});var Mi=s((xme,MO)=>{"use strict";var sEr=FO();MO.exports=sEr});var jO=s((Dme,BO)=>{"use strict";var uEr=h2(),oEr=ae(),vEr=Fi(),fEr=ar(),cEr=Mi(),w2=[0,0];function lEr(r,e){var t,i;return vEr.assign(r,w2,1,0),t=w2[0],t&=oEr,i=fEr(e),i&=uEr,t|=i,cEr(t,w2[1])}BO.exports=lEr});var e0=s((Hme,kO)=>{"use strict";var pEr=jO();kO.exports=pEr});var UO=s((Wme,VO)=>{"use strict";var CO=r0(),gEr=e0(),mEr=V(),t0=L();function dEr(r,e){return e===mEr?t0:e===t0?0:e>0?CO(e)?r:0:CO(e)?gEr(t0,r):t0}VO.exports=dEr});var xO=s((zme,GO)=>{"use strict";var hEr=ae(),qEr=ar(),yEr=1072693247,i0=1e300,n0=1e-300;function bEr(r,e){var t,i;return i=qEr(r),t=i&hEr,t<=yEr?e<0?i0*i0:n0*n0:e>0?i0*i0:n0*n0}GO.exports=bEr});var WO=s((Xme,HO)=>{"use strict";var wEr=Y(),DO=L();function EEr(r,e){return r===-1?(r-r)/(r-r):r===1?1:wEr(r)<1==(e===DO)?0:DO}HO.exports=EEr});var XO=s((Jme,zO)=>{"use strict";var NEr=zr(),E2;NEr===!0?E2=1:E2=0;zO.exports=E2});var YO=s((Yme,JO)=>{"use strict";var OEr=pr(),SEr=lr(),AEr=XO(),N2=new SEr(1),_Er=new OEr(N2.buffer);function TEr(r,e){return N2[0]=r,_Er[AEr]=e>>>0,N2[0]}JO.exports=TEr});var me=s(($me,$O)=>{"use strict";var IEr=YO();$O.exports=IEr});var se=s((Zme,ZO)=>{"use strict";var LEr=1023;ZO.exports=LEr});var KO=s((Qme,QO)=>{"use strict";function REr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}QO.exports=REr});var iS=s((Kme,tS)=>{"use strict";var PEr=ar(),a0=ge(),rS=me(),FEr=se(),MEr=KO(),BEr=1048575,eS=1048576,jEr=1072693248,kEr=536870912,CEr=524288,VEr=20,UEr=9007199254740992,GEr=.9617966939259756,xEr=.9617967009544373,DEr=-7028461650952758e-24,HEr=[1,1.5],WEr=[0,.5849624872207642],zEr=[0,1350039202129749e-23];function XEr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,H,K,G;return H=0,t<eS&&(e*=UEr,H-=53,t=PEr(e)),H+=(t>>VEr)-FEr|0,K=t&BEr|0,t=K|jEr|0,K<=235662?G=0:K<767610?G=1:(G=0,H+=1,t-=eS),e=rS(e,t),c=HEr[G],F=e-c,A=1/(e+c),n=F*A,u=a0(n,0),i=(t>>1|kEr)+CEr,i+=G<<18,f=rS(0,i),v=e-(f-c),o=A*(F-u*f-u*v),a=n*n,O=a*a*MEr(a),O+=o*(u+n),a=u*u,f=3+a+O,f=a0(f,0),v=O-(f-3-a),F=u*f,A=o*f+v*n,p=F+A,p=a0(p,0),g=A-(p-F),h=xEr*p,d=DEr*p+g*GEr+zEr[G],l=WEr[G],N=H,m=h+d+l+N,m=a0(m,0),q=d-(m-N-l-h),r[0]=m,r[1]=q,r}tS.exports=XEr});var aS=s((rde,nS)=>{"use strict";function JEr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}nS.exports=JEr});var uS=s((ede,sS)=>{"use strict";var YEr=ge(),$Er=aS(),ZEr=1.4426950408889634,QEr=1.4426950216293335,KEr=19259629911266175e-24;function rNr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*$Er(n),u=QEr*n,o=n*KEr-a*ZEr,i=u+o,i=YEr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}sS.exports=rNr});var O2=s((tde,oS)=>{"use strict";var eNr=1023;oS.exports=eNr});var fS=s((ide,vS)=>{"use strict";var tNr=-1023;vS.exports=tNr});var S2=s((nde,cS)=>{"use strict";var iNr=-1074;cS.exports=iNr});var A2=s((ade,lS)=>{"use strict";var nNr=22250738585072014e-324;lS.exports=nNr});var _2=s((sde,pS)=>{"use strict";var aNr=A2(),sNr=kr(),uNr=E(),oNr=Y(),vNr=4503599627370496;function fNr(r,e,t,i){return uNr(r)||sNr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&oNr(r)<aNr?(e[i]=r*vNr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}pS.exports=fNr});var mS=s((ude,gS)=>{"use strict";var cNr=_2();function lNr(r){return cNr(r,[0,0],1,0)}gS.exports=lNr});var qS=s((ode,hS)=>{"use strict";var pNr=b(),dS=mS(),gNr=_2();pNr(dS,"assign",gNr);hS.exports=dS});var In=s((vde,yS)=>{"use strict";var mNr=2146435072;yS.exports=mNr});var wS=s((fde,bS)=>{"use strict";var dNr=ar(),hNr=In(),qNr=se();function yNr(r){var e=dNr(r);return e=(e&hNr)>>>20,e-qNr|0}bS.exports=yNr});var NS=s((cde,ES)=>{"use strict";var bNr=wS();ES.exports=bNr});var SS=s((lde,OS)=>{"use strict";var wNr=L(),ENr=V(),NNr=se(),ONr=O2(),SNr=fS(),ANr=S2(),_Nr=E(),TNr=kr(),INr=e0(),LNr=qS().assign,RNr=NS(),PNr=Fi(),FNr=Mi(),MNr=2220446049250313e-31,BNr=2148532223>>>0,T2=[0,0],I2=[0,0];function jNr(r,e){var t,i;return e===0||r===0||_Nr(r)||TNr(r)?r:(LNr(r,T2,1,0),r=T2[0],e+=T2[1],e+=RNr(r),e<ANr?INr(0,r):e>ONr?r<0?ENr:wNr:(e<=SNr?(e+=52,i=MNr):i=1,PNr.assign(r,I2,1,0),t=I2[0],t&=BNr,t|=e+NNr<<20,i*FNr(t,I2[1])))}OS.exports=jNr});var s0=s((pde,AS)=>{"use strict";var kNr=SS();AS.exports=kNr});var u0=s((gde,_S)=>{"use strict";var CNr=.6931471805599453;_S.exports=CNr});var o0=s((mde,TS)=>{"use strict";var VNr=1048575;TS.exports=VNr});var LS=s((dde,IS)=>{"use strict";function UNr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}IS.exports=UNr});var kS=s((hde,jS)=>{"use strict";var GNr=ar(),RS=me(),xNr=ge(),DNr=d2(),HNr=s0(),WNr=u0(),PS=se(),FS=ae(),MS=o0(),zNr=LS(),BS=1048576,XNr=1071644672,Ln=20,JNr=.6931471824645996,YNr=-1904654299957768e-24;function $Nr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g;return p=r&FS|0,g=(p>>Ln)-PS|0,l=0,p>XNr&&(l=r+(BS>>g+1)>>>0,g=((l&FS)>>Ln)-PS|0,i=(l&~(MS>>g))>>>0,a=RS(0,i),l=(l&MS|BS)>>Ln-g>>>0,r<0&&(l=-l),e-=a),a=t+e,a=xNr(a,0),o=a*JNr,f=(t-(a-e))*WNr+a*YNr,c=o+f,v=f-(c-o),a=c*c,n=c-a*zNr(a),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=GNr(c),r=DNr(r),r+=l<<Ln>>>0,r>>Ln<=0?c=HNr(c,l):c=RS(c,r),c}jS.exports=$Nr});var JS=s((qde,XS)=>{"use strict";var CS=E(),VS=r0(),US=kr(),ZNr=hr(),GS=U(),QNr=Y(),L2=Fi(),KNr=ge(),xS=d2(),rOr=V(),eOr=L(),R2=ae(),tOr=UO(),iOr=xO(),nOr=WO(),aOr=iS(),sOr=uS(),uOr=kS(),oOr=1072693247,vOr=1105199104,fOr=1139802112,DS=1083179008,cOr=1072693248,lOr=1083231232,pOr=3230714880>>>0,HS=31,it=1e300,nt=1e-300,gOr=8008566259537294e-32,de=[0,0],WS=[0,0];function zS(r,e){var t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q;if(CS(r)||CS(e))return NaN;if(L2.assign(e,de,1,0),o=de[0],f=de[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return GS(r);if(e===-.5)return 1/GS(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(US(e))return nOr(r,e)}if(L2.assign(r,de,1,0),a=de[0],u=de[1],u===0){if(a===0)return tOr(r,e);if(r===1)return 1;if(r===-1&&VS(e))return-1;if(US(r))return r===rOr?zS(-0,-e):e<0?0:eOr}if(r<0&&ZNr(e)===!1)return(r-r)/(r-r);if(n=QNr(r),t=a&R2|0,i=o&R2|0,v=a>>>HS|0,c=o>>>HS|0,v&&VS(e)?v=-1:v=1,i>vOr){if(i>fOr)return iOr(r,e);if(t<oOr)return c===1?v*it*it:v*nt*nt;if(t>cOr)return c===0?v*it*it:v*nt*nt;h=sOr(WS,n)}else h=aOr(WS,n,t);if(l=KNr(e,0),g=(e-l)*h[0]+e*h[1],p=l*h[0],d=g+p,L2.assign(d,de,1,0),m=xS(de[0]),q=xS(de[1]),m>=DS){if((m-DS|q)!==0||g+gOr>d-p)return v*it*it}else if((m&R2)>=lOr&&((m-pOr|q)!==0||g<=d-p))return v*nt*nt;return d=uOr(m,p,g),v*d}XS.exports=zS});var D=s((yde,YS)=>{"use strict";var mOr=JS();YS.exports=mOr});var Bi=s((bde,$S)=>{"use strict";var dOr=9007199254740991;$S.exports=dOr});var v0=s((wde,ZS)=>{"use strict";var hOr=308;ZS.exports=hOr});var P2=s((Ede,QS)=>{"use strict";var qOr=-308;QS.exports=qOr});var f0=s((Nde,KS)=>{"use strict";var yOr=-324;KS.exports=yOr});var sA=s((Ode,aA)=>{"use strict";var rA=E(),c0=kr(),eA=D(),bOr=Y(),tA=z(),wOr=Bi(),iA=v0(),EOr=P2(),NOr=f0(),OOr=V(),SOr=wOr+1,nA=1e308;function AOr(r,e){var t,i;return rA(r)||rA(e)||c0(e)?NaN:c0(r)||r===0||e<NOr||bOr(r)>SOr&&e<=0?r:e>iA?r>=0?0:OOr:e<EOr?(t=eA(10,-(e+iA)),i=r*nA*t,c0(i)?r:tA(i)/nA/t):(t=eA(10,-e),i=r*t,c0(i)?r:tA(i)/t)}aA.exports=AOr});var oA=s((Sde,uA)=>{"use strict";var _Or=sA();uA.exports=_Or});var fA=s((Ade,vA)=>{"use strict";function TOr(r,e){return r*e}vA.exports=TOr});var lA=s((_de,cA)=>{"use strict";var IOr=fA();cA.exports=IOr});var gA=s((Tde,pA)=>{"use strict";function LOr(r,e){return r-e}pA.exports=LOr});var dA=s((Ide,mA)=>{"use strict";var ROr=gA();mA.exports=ROr});var qA=s((Lde,hA)=>{"use strict";var Rn=rr(),POr=PN(),FOr=oA(),MOr=lA(),BOr=D(),jOr=dA();function kOr(r){return Rn(r,"add",POr),Rn(r,"floorn",FOr),Rn(r,"mul",MOr),Rn(r,"pow",BOr),Rn(r,"sub",jOr),r}hA.exports=kOr});var EA=s((Rde,wA)=>{"use strict";var yA=k().isPrimitive,COr=L(),VOr=V(),bA=y();function UOr(r,e){return t;function t(i,n){var a;if(!yA(i)){if(e.nonnumeric===void 0)throw new TypeError(bA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!yA(n)){if(e.nonnumeric===void 0)throw new TypeError(bA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===COr?e.pinf:a===VOr?e.ninf:a}}wA.exports=UOr});var F2=s((Pde,NA)=>{"use strict";var GOr=EA();NA.exports=GOr});var SA=s((Fde,OA)=>{"use strict";var xOr=wa(),DOr=uo(),HOr=Ha(),WOr=y(),zOr=Da(),XOr=F2(),JOr=["number","number"],YOr=["First argument","Second argument"];function $Or(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(WOr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=zOr([r[0],r[1]],JOr,YOr),t=xOr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=HOr(t),a=XOr(e,i),r[0].push(n),r[1].push(t),DOr(r[0],r[1],a),n}OA.exports=$Or});var _A=s((Mde,AA)=>{"use strict";var ZOr=SA();AA.exports=ZOr});var IA=s((Bde,TA)=>{"use strict";var QOr=k().isPrimitive,KOr=L(),rSr=V(),eSr=y();function tSr(r,e){return t;function t(i){var n;if(!QOr(i)){if(e.nonnumeric===void 0)throw new TypeError(eSr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===KOr?e.pinf:n===rSr?e.ninf:n}}TA.exports=tSr});var M2=s((jde,LA)=>{"use strict";var iSr=IA();LA.exports=iSr});var PA=s((kde,RA)=>{"use strict";var B2=k().isPrimitive,nSr=L(),aSr=V(),j2=y();function sSr(r,e){return t;function t(i,n,a){var u;if(!B2(i)){if(e.nonnumeric===void 0)throw new TypeError(j2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!B2(n)){if(e.nonnumeric===void 0)throw new TypeError(j2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!B2(a)){if(e.nonnumeric===void 0)throw new TypeError(j2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===nSr?e.pinf:u===aSr?e.ninf:u}}RA.exports=sSr});var k2=s((Cde,FA)=>{"use strict";var uSr=PA();FA.exports=uSr});var BA=s((Vde,MA)=>{"use strict";var l0=k().isPrimitive,oSr=L(),vSr=V(),p0=y();function fSr(r,e){return t;function t(i,n,a,u){var o;if(!l0(i)){if(e.nonnumeric===void 0)throw new TypeError(p0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!l0(n)){if(e.nonnumeric===void 0)throw new TypeError(p0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!l0(a)){if(e.nonnumeric===void 0)throw new TypeError(p0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!l0(u)){if(e.nonnumeric===void 0)throw new TypeError(p0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===oSr?e.pinf:o===vSr?e.ninf:o}}MA.exports=fSr});var kA=s((Ude,jA)=>{"use strict";var cSr=BA();jA.exports=cSr});var VA=s((Gde,CA)=>{"use strict";var Pn=k().isPrimitive,lSr=L(),pSr=V(),Fn=y();function gSr(r,e){return t;function t(i,n,a,u,o){var f;if(!Pn(i)){if(e.nonnumeric===void 0)throw new TypeError(Fn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Pn(n)){if(e.nonnumeric===void 0)throw new TypeError(Fn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Pn(a)){if(e.nonnumeric===void 0)throw new TypeError(Fn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Pn(u)){if(e.nonnumeric===void 0)throw new TypeError(Fn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Pn(o)){if(e.nonnumeric===void 0)throw new TypeError(Fn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,a,u,o),f!==f?e.nan:f===lSr?e.pinf:f===pSr?e.ninf:f}}CA.exports=gSr});var GA=s((xde,UA)=>{"use strict";var mSr=VA();UA.exports=mSr});var DA=s((Dde,xA)=>{"use strict";var dSr=wa(),hSr=vo(),qSr=Ha(),ySr=y(),bSr=Da(),wSr=k2(),ESr=["number","number","number"],NSr=["First argument","Second argument","Third argument"];function OSr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(ySr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=bSr([r[0],r[1],r[2]],ESr,NSr),t=dSr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=qSr(t),a=wSr(e,i),r[0].push(n),r[1].push(t),hSr(r[0],r[1],a),n}xA.exports=OSr});var WA=s((Hde,HA)=>{"use strict";var SSr=DA();HA.exports=SSr});var XA=s((Wde,zA)=>{"use strict";var ASr=mr(),_Sr=m1(),TSr=y(),ISr=M2();function LSr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(TSr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=ISr(e,i),ASr(t)?(_Sr([t,t],[t.length,t[0].length],n),t):n(t)}zA.exports=LSr});var YA=s((zde,JA)=>{"use strict";var RSr=XA();JA.exports=RSr});var ZA=s((Xde,$A)=>{"use strict";var at=rr(),PSr=_A(),FSr=M2(),MSr=F2(),BSr=k2(),jSr=kA(),kSr=GA(),CSr=WA(),VSr=YA();function USr(r){return at(r,"binary",PSr),at(r,"d_d",FSr),at(r,"dd_d",MSr),at(r,"ddd_d",BSr),at(r,"dddd_d",jSr),at(r,"ddddd_d",kSr),at(r,"ternary",CSr),at(r,"unary",VSr),r}$A.exports=USr});var KA=s((Jde,QA)=>{"use strict";function GSr(r){return r*r}QA.exports=GSr});var g0=s((Yde,r_)=>{"use strict";var xSr=KA();r_.exports=xSr});var m0=s(($de,e_)=>{"use strict";var DSr=.7853981633974483;e_.exports=DSr});var i_=s((Zde,t_)=>{"use strict";function HSr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}t_.exports=HSr});var a_=s((Qde,n_)=>{"use strict";function WSr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}n_.exports=WSr});var o_=s((Kde,u_)=>{"use strict";var zSr=E(),XSr=U(),s_=m0(),JSr=i_(),YSr=a_(),$Sr=6123233995736766e-32;function ZSr(r){var e,t,i,n,a;if(zSr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*YSr(t),t=XSr(t+t),a=s_-t,t=t*n-$Sr,a-=t,a+=s_;else{if(i<1e-8)return r;t=i*i,a=t*JSr(t),a=i*a+i}return e?-a:a}u_.exports=ZSr});var $t=s((rhe,v_)=>{"use strict";var QSr=o_();v_.exports=QSr});var p_=s((ehe,l_)=>{"use strict";var KSr=E(),f_=$t(),rAr=U(),c_=m0(),eAr=6123233995736766e-32;function tAr(r){var e;return KSr(r)?NaN:r<-1||r>1?NaN:r>.5?2*f_(rAr(.5-.5*r)):(e=c_-f_(r),e+=eAr,e+=c_,e)}l_.exports=tAr});var Mn=s((the,g_)=>{"use strict";var iAr=p_();g_.exports=iAr});var d_=s((ihe,m_)=>{"use strict";function nAr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}m_.exports=nAr});var w_=s((nhe,b_)=>{"use strict";var aAr=E(),h_=ar(),q_=me(),sAr=L(),uAr=V(),y_=se(),oAr=d_(),C2=.6931471803691238,V2=19082149292705877e-26,vAr=.41421356237309503,fAr=-.2928932188134525,cAr=1862645149230957e-24,lAr=5551115123125783e-32,pAr=9007199254740992,gAr=.6666666666666666;function mAr(r){var e,t,i,n,a,u,o,f,v,c;if(r<-1||aAr(r))return NaN;if(r===-1)return uAr;if(r===sAr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<vAr){if(i<cAr)return i<lAr?r:r-r*r*.5;r>fAr&&(c=0,n=r,t=1)}return c!==0&&(i<pAr?(v=1+r,t=h_(v),c=(t>>20)-y_,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=h_(v),c=(t>>20)-y_,a=0),t&=1048575,t<434334?v=q_(v,t|1072693248):(c+=1,v=q_(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*V2,c*C2+a):(f=e*(1-gAr*n),c*C2-(f-(c*V2+a)-n)):(u=n/(2+n),o=u*u,f=o*oAr(o),c===0?n-(e-u*(e+f)):c*C2-(e-(u*(e+f)+(c*V2+a))-n))}b_.exports=mAr});var st=s((ahe,E_)=>{"use strict";var dAr=w_();E_.exports=dAr});var O_=s((she,N_)=>{"use strict";function hAr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}N_.exports=hAr});var A_=s((uhe,S_)=>{"use strict";function qAr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}S_.exports=qAr});var L_=s((ohe,I_)=>{"use strict";var __=ar(),yAr=me(),bAr=E(),wAr=se(),EAr=V(),NAr=O_(),OAr=A_(),d0=.6931471803691238,h0=19082149292705877e-26,SAr=0x40000000000000,AAr=.3333333333333333,T_=1048575,_Ar=2146435072,TAr=1048576,IAr=1072693248;function LAr(r){var e,t,i,n,a,u,o,f,v,c,l,p;return r===0?EAr:bAr(r)||r<0?NaN:(t=__(r),a=0,t<TAr&&(a-=54,r*=SAr,t=__(r)),t>=_Ar?r+r:(a+=(t>>20)-wAr|0,t&=T_,f=t+614244&1048576|0,r=yAr(r,t|f^IAr),a+=f>>20|0,o=r-1,(T_&2+t)<3?o===0?a===0?0:a*d0+a*h0:(u=o*o*(.5-AAr*o),a===0?o-u:a*d0-(u-a*h0-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*NAr(l),i=p*OAr(l),f|=v,u=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*d0-(e-(c*(e+u)+a*h0)-o)):a===0?o-c*(o-u):a*d0-(c*(o-u)-a*h0-o))))}I_.exports=LAr});var P=s((vhe,R_)=>{"use strict";var RAr=L_();R_.exports=RAr});var B_=s((fhe,M_)=>{"use strict";var PAr=E(),FAr=st(),P_=U(),MAr=u0(),F_=P(),BAr=1<<28;function jAr(r){var e;return PAr(r)||r<1?NaN:r===1?0:r>=BAr?F_(r)+MAr:r>2?F_(2*r-1/(r+P_(r*r-1))):(e=r-1,FAr(e+P_(2*e+e*e)))}M_.exports=jAr});var k_=s((che,j_)=>{"use strict";var kAr=B_();j_.exports=kAr});var q0=s((lhe,C_)=>{"use strict";var CAr=1.5707963267948966;C_.exports=CAr});var U_=s((phe,V_)=>{"use strict";function VAr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}V_.exports=VAr});var x_=s((ghe,G_)=>{"use strict";function UAr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}G_.exports=UAr});var W_=s((mhe,H_)=>{"use strict";var GAr=E(),xAr=L(),U2=q0(),DAr=m0(),HAr=V(),WAr=U_(),zAr=x_(),D_=6123233995736766e-32,XAr=2.414213562373095;function JAr(r){var e,t,i,n;return GAr(r)||r===0?r:r===xAr?U2:r===HAr?-U2:(r<0&&(t=!0,r=-r),e=0,r>XAr?(i=U2,e=1,r=-(1/r)):r<=.66?i=0:(i=DAr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*WAr(n)/zAr(n),n=r*n+r,e===2?n+=.5*D_:e===1&&(n+=D_),i+=n,t?-i:i)}H_.exports=JAr});var y0=s((dhe,z_)=>{"use strict";var YAr=W_();z_.exports=YAr});var J_=s((hhe,X_)=>{"use strict";var $Ar=y0();function ZAr(r){return $Ar(1/r)}X_.exports=ZAr});var $_=s((qhe,Y_)=>{"use strict";var QAr=J_();Y_.exports=QAr});var Q_=s((yhe,Z_)=>{"use strict";var KAr=$t();function r_r(r){return KAr(1+r)}Z_.exports=r_r});var rT=s((bhe,K_)=>{"use strict";var e_r=Q_();K_.exports=e_r});var tT=s((whe,eT)=>{"use strict";var t_r=$t();function i_r(r){return t_r(1-r)}eT.exports=i_r});var nT=s((Ehe,iT)=>{"use strict";var n_r=tT();iT.exports=n_r});var sT=s((Nhe,aT)=>{"use strict";var a_r=$t();function s_r(r){return a_r(1/r)}aT.exports=s_r});var oT=s((Ohe,uT)=>{"use strict";var u_r=sT();uT.exports=u_r});var lT=s((She,cT)=>{"use strict";var o_r=kr(),v_r=E(),f_r=st(),vT=U(),c_r=u0(),fT=P(),l_r=1/(1<<28),p_r=1<<28;function g_r(r){var e,t,i;return v_r(r)||o_r(r)?r:(r<0&&(r=-r,e=!0),r<l_r?i=r:r>p_r?i=fT(r)+c_r:r>2?i=fT(2*r+1/(vT(r*r+1)+r)):(t=r*r,i=f_r(r+t/(1+vT(1+t)))),e?-i:i)}cT.exports=g_r});var G2=s((Ahe,pT)=>{"use strict";var m_r=lT();pT.exports=m_r});var mT=s((_he,gT)=>{"use strict";var d_r=G2();function h_r(r){return d_r(1/r)}gT.exports=h_r});var hT=s((The,dT)=>{"use strict";var q_r=mT();dT.exports=q_r});var yT=s((Ihe,qT)=>{"use strict";var y_r=Mn(),b_r=U();function w_r(r){return 2*y_r(b_r(r))}qT.exports=w_r});var wT=s((Lhe,bT)=>{"use strict";var E_r=yT();bT.exports=E_r});var NT=s((Rhe,ET)=>{"use strict";var N_r=$t(),O_r=U();function S_r(r){return 2*N_r(O_r(r))}ET.exports=S_r});var ST=s((Phe,OT)=>{"use strict";var A_r=NT();OT.exports=A_r});var TT=s((Fhe,_T)=>{"use strict";var __r=E(),AT=st(),T_r=L(),I_r=V(),L_r=1/(1<<28);function R_r(r){var e,t;return __r(r)||r<-1||r>1?NaN:r===1?T_r:r===-1?I_r:(r<0&&(e=!0,r=-r),r<L_r?e?-r:r:(r<.5?(t=r+r,t=.5*AT(t+t*r/(1-r))):t=.5*AT((r+r)/(1-r)),e?-t:t))}_T.exports=R_r});var LT=s((Mhe,IT)=>{"use strict";var P_r=TT();IT.exports=P_r});var PT=s((Bhe,RT)=>{"use strict";var F_r=Mn();function M_r(r){return F_r(1+r)}RT.exports=M_r});var MT=s((jhe,FT)=>{"use strict";var B_r=PT();FT.exports=B_r});var jT=s((khe,BT)=>{"use strict";var j_r=Mn();function k_r(r){return j_r(1-r)}BT.exports=k_r});var CT=s((Che,kT)=>{"use strict";var C_r=jT();kT.exports=C_r});var UT=s((Vhe,VT)=>{"use strict";var V_r=z();function U_r(r){return V_r(r)===r&&r>=0}VT.exports=U_r});var x2=s((Uhe,GT)=>{"use strict";var G_r=UT();GT.exports=G_r});var xT=s((Ghe,x_r)=>{x_r.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var HT=s((xhe,DT)=>{"use strict";var D_r=x2(),H_r=E(),W_r=r0(),z_r=V(),X_r=L(),J_r=xT(),Y_r=258;function $_r(r){return H_r(r)||!D_r(r)?NaN:W_r(r)?0:r>Y_r?r/2&1?X_r:z_r:J_r[r/2]}DT.exports=$_r});var zT=s((Dhe,WT)=>{"use strict";var Z_r=HT();WT.exports=Z_r});var JT=s((Hhe,XT)=>{"use strict";var Q_r=zr(),D2;Q_r===!0?D2=0:D2=1;XT.exports=D2});var ZT=s((Whe,$T)=>{"use strict";var K_r=pr(),rTr=lr(),eTr=JT(),YT=new rTr(1),tTr=new K_r(YT.buffer);function iTr(r){return YT[0]=r,tTr[eTr]}$T.exports=iTr});var KT=s((zhe,QT)=>{"use strict";var nTr=ZT();QT.exports=nTr});var nI=s((Xhe,iI)=>{"use strict";var aTr=z(),b0=s0(),N0=Ze(),eI=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],sTr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],H2=16777216,W2=5960464477539063e-23,w0=N0(20),rI=N0(20),E0=N0(20),gr=N0(20);function tI(r,e,t,i,n,a,u,o,f){var v,c,l,p,g,h,d,m,q;for(p=a,q=i[t],m=t,g=0;m>0;g++)c=W2*q|0,gr[g]=q-H2*c|0,q=i[m-1]+c,m-=1;if(q=b0(q,n),q-=8*aTr(q*.125),d=q|0,q-=d,l=0,n>0?(g=gr[t-1]>>24-n,d+=g,gr[t-1]-=g<<24-n,l=gr[t-1]>>23-n):n===0?l=gr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,v=0,g=0;g<t;g++)m=gr[g],v===0?m!==0&&(v=1,gr[g]=16777216-m):gr[g]=16777215-m;if(n>0)switch(n){case 1:gr[t-1]&=8388607;break;case 2:gr[t-1]&=4194303;break}l===2&&(q=1-q,v!==0&&(q-=b0(1,n)))}if(q===0){for(m=0,g=t-1;g>=a;g--)m|=gr[g];if(m===0){for(h=1;gr[a-h]===0;h++);for(g=t+1;g<=t+h;g++){for(f[o+g]=eI[u+g],c=0,m=0;m<=o;m++)c+=r[m]*f[o+(g-m)];i[g]=c}return t+=h,tI(r,e,t,i,n,a,u,o,f)}}if(q===0)for(t-=1,n-=24;gr[t]===0;)t-=1,n-=24;else q=b0(q,-n),q>=H2?(c=W2*q|0,gr[t]=q-H2*c|0,t+=1,n+=24,gr[t]=c):gr[t]=q|0;for(c=b0(1,n),g=t;g>=0;g--)i[g]=c*gr[g],c*=W2;for(g=t;g>=0;g--){for(c=0,h=0;h<=p&&h<=t-g;h++)c+=sTr[h]*i[g+h];E0[t-g]=c}for(c=0,g=t;g>=0;g--)c+=E0[g];for(l===0?e[0]=c:e[0]=-c,c=E0[0]-c,g=1;g<=t;g++)c+=E0[g];return l===0?e[1]=c:e[1]=-c,d&7}function uTr(r,e,t,i){var n,a,u,o,f,v,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?w0[c]=0:w0[c]=eI[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*w0[o+(c-l)];rI[c]=n}return f=a,tI(r,e,f,rI,v,a,u,o,w0)}iI.exports=uTr});var sI=s((Jhe,aI)=>{"use strict";var oTr=Math.round;aI.exports=oTr});var z2=s((Yhe,uI)=>{"use strict";var vTr=sI();uI.exports=vTr});var cI=s(($he,fI)=>{"use strict";var fTr=z2(),oI=ar(),cTr=.6366197723675814,lTr=1.5707963267341256,pTr=6077100506506192e-26,gTr=6077100506303966e-26,mTr=20222662487959506e-37,dTr=20222662487111665e-37,hTr=84784276603689e-45,vI=2047;function qTr(r,e,t){var i,n,a,u,o,f,v;return n=fTr(r*cTr),u=r-n*lTr,o=n*pTr,v=e>>20|0,t[0]=u-o,i=oI(t[0]),f=v-(i>>20&vI),f>16&&(a=u,o=n*gTr,u=a-o,o=n*mTr-(a-u-o),t[0]=u-o,i=oI(t[0]),f=v-(i>>20&vI),f>49&&(a=u,o=n*dTr,u=a-o,o=n*hTr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}fI.exports=qTr});var pI=s((Zhe,lI)=>{"use strict";var yTr=ae(),bTr=In(),wTr=o0(),ETr=ar(),NTr=KT(),OTr=Mi(),STr=nI(),O0=cI(),ATr=0,_Tr=16777216,ut=1.5707963267341256,Zt=6077100506506192e-26,S0=2*Zt,A0=3*Zt,_0=4*Zt,TTr=598523,ITr=1072243195,LTr=1073928572,RTr=1074752122,PTr=1074977148,FTr=1075183036,MTr=1075388923,BTr=1075594811,jTr=1094263291,Bn=[0,0,0],jn=[0,0];function kTr(r,e){var t,i,n,a,u,o,f,v;if(n=ETr(r),a=n&yTr|0,a<=ITr)return e[0]=r,e[1]=0,0;if(a<=RTr)return(a&wTr)===TTr?O0(r,a,e):a<=LTr?r>0?(v=r-ut,e[0]=v-Zt,e[1]=v-e[0]-Zt,1):(v=r+ut,e[0]=v+Zt,e[1]=v-e[0]+Zt,-1):r>0?(v=r-2*ut,e[0]=v-S0,e[1]=v-e[0]-S0,2):(v=r+2*ut,e[0]=v+S0,e[1]=v-e[0]+S0,-2);if(a<=BTr)return a<=FTr?a===PTr?O0(r,a,e):r>0?(v=r-3*ut,e[0]=v-A0,e[1]=v-e[0]-A0,3):(v=r+3*ut,e[0]=v+A0,e[1]=v-e[0]+A0,-3):a===MTr?O0(r,a,e):r>0?(v=r-4*ut,e[0]=v-_0,e[1]=v-e[0]-_0,4):(v=r+4*ut,e[0]=v+_0,e[1]=v-e[0]+_0,-4);if(a<jTr)return O0(r,a,e);if(a>=bTr)return e[0]=NaN,e[1]=NaN,0;for(t=NTr(r),i=(a>>20)-1046,v=OTr(a-(i<<20|0),t),o=0;o<2;o++)Bn[o]=v|0,v=(v-Bn[o])*_Tr;for(Bn[2]=v,u=3;Bn[u-1]===ATr;)u-=1;return f=STr(Bn,jn,i,u,1),r<0?(e[0]=-jn[0],e[1]=-jn[1],-f):(e[0]=jn[0],e[1]=jn[1],f)}lI.exports=kTr});var kn=s((Qhe,gI)=>{"use strict";var CTr=pI();gI.exports=CTr});var hI=s((Khe,dI)=>{"use strict";var mI=-.16666666666666632,VTr=.00833333333332249,UTr=-.0001984126982985795,GTr=27557313707070068e-22,xTr=-25050760253406863e-24,DTr=158969099521155e-24,HTr=.0416666666666666,WTr=-.001388888888887411,zTr=2480158728947673e-20,XTr=-27557314351390663e-23,JTr=2087572321298175e-24,YTr=-11359647557788195e-27;function $Tr(r,e,t,i,n){var a,u,o,f,v;return v=r*r,f=v*v,u=VTr+v*(UTr+v*GTr)+v*f*(xTr+v*DTr),o=v*r,e===0?t[n]=r+o*(mI+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*mI),u=v*(HTr+v*(WTr+v*zTr)),u+=f*f*(XTr+v*(JTr+v*YTr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*u-r*e)),t}dI.exports=$Tr});var J2=s((rqe,yI)=>{"use strict";var ZTr=ae(),QTr=In(),KTr=ar(),rIr=kn(),qI=hI(),eIr=1072243195,tIr=1044381696,X2=[0,0];function iIr(r,e,t,i){var n,a;if(n=KTr(r),n&=ZTr,n<=eIr)return n<tIr&&(r|0)===0&&(e[i]=r,e[i+t]=0),qI(r,0,e,t,i);if(n>=QTr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=rIr(r,X2),qI(X2[0],X2[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}yI.exports=iIr});var wI=s((eqe,bI)=>{"use strict";var nIr=J2();function aIr(r){return nIr(r,[0,0],1,0)}bI.exports=aIr});var Cn=s((tqe,NI)=>{"use strict";var sIr=b(),EI=wI(),uIr=J2();sIr(EI,"assign",uIr);NI.exports=EI});var SI=s((iqe,OI)=>{"use strict";function oIr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}OI.exports=oIr});var _I=s((nqe,AI)=>{"use strict";function vIr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}AI.exports=vIr});var II=s((aqe,TI)=>{"use strict";function fIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}TI.exports=fIr});var RI=s((sqe,LI)=>{"use strict";function cIr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}LI.exports=cIr});var FI=s((uqe,PI)=>{"use strict";var lIr=U(),pIr=Cn().assign,gIr=L(),mIr=SI(),dIr=_I(),hIr=II(),qIr=RI(),yIr=.5641895835477563,bIr=2.404825557695773,wIr=5.520078110286311,EIr=616,NIr=-.0014244423042272315,OIr=1413,SIr=.0005468602863106496,Vn=[0,0];function AIr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===gIr?0:r===0?1:r<=4?(a=r*r,n=mIr(a),u=(r+bIr)*(r-EIr/256-NIr),u*n):r<=8?(a=1-r*r/64,n=dIr(a),u=(r+wIr)*(r-OIr/256-SIr),u*n):(a=8/r,i=a*a,e=hIr(i),t=qIr(i),u=yIr/lIr(r),pIr(r,Vn,1,0),u*(e*(Vn[1]+Vn[0])-a*t*(Vn[0]-Vn[1])))}PI.exports=AIr});var Y2=s((oqe,MI)=>{"use strict";var _Ir=FI();MI.exports=_Ir});var T0=s((vqe,BI)=>{"use strict";var TIr=1.772453850905516;BI.exports=TIr});var kI=s((fqe,jI)=>{"use strict";function IIr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}jI.exports=IIr});var VI=s((cqe,CI)=>{"use strict";function LIr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}CI.exports=LIr});var GI=s((lqe,UI)=>{"use strict";function RIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}UI.exports=RIr});var DI=s((pqe,xI)=>{"use strict";function PIr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}xI.exports=PIr});var WI=s((gqe,HI)=>{"use strict";var FIr=U(),MIr=Y(),BIr=Cn().assign,jIr=L(),kIr=T0(),CIr=kI(),VIr=VI(),UIr=GI(),GIr=DI(),xIr=3.8317059702075125,DIr=7.015586669815619,HIr=981,WIr=-.0003252797924876844,zIr=1796,XIr=-38330184381246464e-21,Un=[0,0];function JIr(r){var e,t,i,n,a,u,o,f;return f=MIr(r),r===0||f===jIr?0:(f<=4?(u=r*r,a=CIr(u),o=f*(f+xIr)*(f-HIr/256-WIr),e=o*a):f<=8?(u=r*r,a=VIr(u),o=f*(f+DIr)*(f-zIr/256-XIr),e=o*a):(u=8/f,n=u*u,t=UIr(n),i=GIr(n),o=1/(FIr(f)*kIr),BIr(f,Un,1,0),e=o*(t*(Un[0]-Un[1])+u*i*(Un[0]+Un[1]))),r<0&&(e*=-1),e)}HI.exports=JIr});var $2=s((mqe,zI)=>{"use strict";var YIr=WI();zI.exports=YIr});var Cr=s((dqe,XI)=>{"use strict";var $Ir=3.141592653589793;XI.exports=$Ir});var YI=s((hqe,JI)=>{"use strict";function ZIr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}JI.exports=ZIr});var ZI=s((qqe,$I)=>{"use strict";function QIr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}$I.exports=QIr});var KI=s((yqe,QI)=>{"use strict";function KIr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}QI.exports=KIr});var eL=s((bqe,rL)=>{"use strict";function rLr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}rL.exports=rLr});var iL=s((wqe,tL)=>{"use strict";function eLr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}tL.exports=eLr});var oL=s((Eqe,uL)=>{"use strict";var Z2=P(),tLr=U(),iLr=Cr(),nLr=T0(),aLr=V(),sLr=L(),uLr=Cn().assign,Q2=Y2(),oLr=YI(),vLr=ZI(),fLr=KI(),cLr=eL(),lLr=iL(),pLr=1/nLr,K2=2/iLr,nL=.8935769662791675,aL=3.957678419314858,sL=7.086051060301773,gLr=228,mLr=.0029519662791675214,dLr=1013,hLr=.0006471693148578684,qLr=1814,yLr=.00011356030177269763,Gn=[0,0];function bLr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?aLr:r===sLr?0:r<=3?(a=r*r,u=Z2(r/nL)*Q2(r)*K2,n=oLr(a),o=(r+nL)*(r-gLr/256-mLr),u+o*n):r<=5.5?(a=r*r,u=Z2(r/aL)*Q2(r)*K2,n=vLr(a),o=(r+aL)*(r-dLr/256-hLr),u+o*n):r<=8?(a=r*r,u=Z2(r/sL)*Q2(r)*K2,n=fLr(a),o=(r+sL)*(r-qLr/256-yLr),u+o*n):(a=8/r,i=a*a,e=cLr(i),t=lLr(i),o=pLr/tLr(r),uLr(r,Gn,1,0),o*(e*(Gn[0]-Gn[1])+a*t*(Gn[1]+Gn[0])))}uL.exports=bLr});var fL=s((Nqe,vL)=>{"use strict";var wLr=oL();vL.exports=wLr});var lL=s((Oqe,cL)=>{"use strict";function ELr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}cL.exports=ELr});var gL=s((Sqe,pL)=>{"use strict";function NLr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}pL.exports=NLr});var dL=s((Aqe,mL)=>{"use strict";function OLr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}mL.exports=OLr});var qL=s((_qe,hL)=>{"use strict";function SLr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}hL.exports=SLr});var SL=s((Tqe,OL)=>{"use strict";var yL=P(),ALr=U(),_Lr=Cr(),TLr=T0(),ILr=V(),LLr=L(),RLr=Cn().assign,bL=$2(),PLr=lL(),FLr=gL(),MLr=dL(),BLr=qL(),jLr=1/TLr,wL=2/_Lr,EL=2.197141326031017,NL=5.429681040794135,kLr=562,CLr=.001828826031017035,VLr=1390,ULr=-6459205864867228e-21,xn=[0,0];function GLr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?ILr:r===LLr?0:r<=4?(a=r*r,u=yL(r/EL)*bL(r)*wL,n=PLr(a),o=(r+EL)*(r-kLr/256-CLr)/r,u+o*n):r<=8?(a=r*r,u=yL(r/NL)*bL(r)*wL,n=FLr(a),o=(r+NL)*(r-VLr/256-ULr)/r,u+o*n):(a=8/r,i=a*a,e=MLr(i),t=BLr(i),o=jLr/ALr(r),RLr(r,xn,1,0),o*(a*t*(xn[0]-xn[1])-e*(xn[0]+xn[1])))}OL.exports=GLr});var _L=s((Iqe,AL)=>{"use strict";var xLr=SL();AL.exports=xLr});var IL=s((Lqe,TL)=>{"use strict";function DLr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}TL.exports=DLr});var RL=s((Rqe,LL)=>{"use strict";function HLr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}LL.exports=HLr});var FL=s((Pqe,PL)=>{"use strict";var WLr=IL(),zLr=RL();function XLr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*WLr(a),i+=n*n*zLr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}PL.exports=XLr});var r3=s((Fqe,ML)=>{"use strict";var JLr=FL();ML.exports=JLr});var kL=s((Mqe,jL)=>{"use strict";var BL=-.16666666666666632,YLr=.00833333333332249,$Lr=-.0001984126982985795,ZLr=27557313707070068e-22,QLr=-25050760253406863e-24,KLr=158969099521155e-24;function rRr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=YLr+a*($Lr+a*ZLr)+a*n*(QLr+a*KLr),i=a*r,e===0?r+i*(BL+a*t):r-(a*(.5*e-i*t)-e-i*BL)}jL.exports=rRr});var e3=s((Bqe,CL)=>{"use strict";var eRr=kL();CL.exports=eRr});var GL=s((jqe,UL)=>{"use strict";var tRr=ar(),t3=r3(),VL=e3(),iRr=kn(),he=[0,0],nRr=2147483647,aRr=1072243195,sRr=1044381696,uRr=2146435072;function oRr(r){var e,t;if(e=tRr(r),e&=nRr,e<=aRr)return e<sRr?1:t3(r,0);if(e>=uRr)return NaN;switch(t=iRr(r,he),t&3){case 0:return t3(he[0],he[1]);case 1:return-VL(he[0],he[1]);case 2:return-t3(he[0],he[1]);default:return VL(he[0],he[1])}}UL.exports=oRr});var Qt=s((kqe,xL)=>{"use strict";var vRr=GL();xL.exports=vRr});var WL=s((Cqe,HL)=>{"use strict";var fRr=ae(),cRr=In(),lRr=ar(),DL=r3(),i3=e3(),pRr=kn(),gRr=1072243195,mRr=1045430272,qe=[0,0];function dRr(r){var e,t;if(e=lRr(r),e&=fRr,e<=gRr)return e<mRr?r:i3(r,0);if(e>=cRr)return NaN;switch(t=pRr(r,qe),t&3){case 0:return i3(qe[0],qe[1]);case 1:return DL(qe[0],qe[1]);case 2:return-i3(qe[0],qe[1]);default:return-DL(qe[0],qe[1])}}HL.exports=dRr});var Kt=s((Vqe,zL)=>{"use strict";var hRr=WL();zL.exports=hRr});var YL=s((Uqe,JL)=>{"use strict";var qRr=E(),yRr=kr(),bRr=Y(),XL=Qt(),wRr=Kt(),ERr=z(),n3=Cr(),NRr=Bi(),ORr=NRr+1;function SRr(r){var e,t,i,n;return qRr(r)?NaN:yRr(r)?NaN:(e=bRr(r),e>ORr?1:(t=ERr(e),i=e-t,i===.5?0:(i<.25?n=XL(n3*i):i<.75?(i=.5-i,n=wRr(n3*i)):(i=1-i,n=-XL(n3*i)),t%2===1?-n:n)))}JL.exports=SRr});var ZL=s((Gqe,$L)=>{"use strict";var ARr=YL();$L.exports=ARr});var KL=s((xqe,QL)=>{"use strict";var _Rr=1.618033988749895;QL.exports=_Rr});var eR=s((Dqe,rR)=>{"use strict";var TRr=E(),IRr=ZL(),LRr=D(),RRr=KL(),PRr=L(),FRr=V(),MRr=2.23606797749979;function BRr(r){var e,t;return TRr(r)||r===PRr||r===FRr?NaN:(e=LRr(RRr,r),t=IRr(r)/e,(e-t)/MRr)}rR.exports=BRr});var iR=s((Hqe,tR)=>{"use strict";var jRr=eR();tR.exports=jRr});var aR=s((Wqe,nR)=>{"use strict";function kRr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}nR.exports=kRr});var vR=s((zqe,oR)=>{"use strict";var CRr=A2(),VRr=h2(),sR=ae(),s3=ar(),URr=me(),GRr=kr(),uR=Mi(),xRr=Fi(),DRr=E(),HRr=aR(),WRr=4294967295>>>0,zRr=3221225472>>>0,XRr=0x40000000000000,a3=2147483648>>>0,JRr=1>>>0,YRr=715094163>>>0,$Rr=696219795>>>0,ZRr=s3(CRr),ri=[0>>>0,0>>>0];function QRr(r){var e,t,i,n,a,u,o;return r===0||DRr(r)||GRr(r)?r:(t=s3(r)>>>0,e=(t&VRr)>>>0,t&=sR,t<ZRr?(u=XRr*r,i=(s3(u)&sR)>>>0,i=(i/3>>>0)+$Rr>>>0,u=uR(e|i,0)):(u=0,i=(t/3>>>0)+YRr>>>0,u=URr(u,e|i)),n=u*u*(u/r),u*=HRr(n),xRr.assign(u,ri,1,0),ri[1]&a3?(ri[0]+=JRr,ri[1]&=~a3):ri[1]|=a3,u=uR(ri[0]&WRr,ri[1]&zRr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}oR.exports=QRr});var cR=s((Xqe,fR)=>{"use strict";var KRr=vR();fR.exports=KRr});var pR=s((Jqe,lR)=>{"use strict";var rPr=Math.ceil;lR.exports=rPr});var ji=s((Yqe,gR)=>{"use strict";var ePr=pR();gR.exports=ePr});var dR=s(($qe,mR)=>{"use strict";function tPr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}mR.exports=tPr});var qR=s((Zqe,hR)=>{"use strict";function iPr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}hR.exports=iPr});var wR=s((Qqe,bR)=>{"use strict";var nPr=ar(),aPr=dR(),sPr=qR(),yR=1048575,uPr=.3333333333333333;function oPr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=nPr(r),a=r-1,(yR&2+n)<3?a===0?0:a*a*(uPr*a-.5):(u=a/(2+a),o=u*u,n&=yR,c=n-398458|0,v=o*o,l=440401-n|0,t=v*aPr(v),i=o*sPr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}bR.exports=oPr});var SR=s((Kqe,OR)=>{"use strict";var ER=ar(),vPr=me(),fPr=ge(),cPr=E(),lPr=se(),pPr=V(),gPr=wR(),mPr=0x40000000000000,NR=.4342944818781689,dPr=25082946711645275e-27,hPr=.30102999566361177,qPr=3694239077158931e-28,yPr=1048575,bPr=2146435072,wPr=1048576,EPr=1072693248;function NPr(r){var e,t,i,n,a,u,o,f;return cPr(r)||r<0?NaN:r===0?pPr:(t=ER(r),u=0,t<wPr&&(u-=54,r*=mPr,t=ER(r)),t>=bPr?r+r:(u+=(t>>20)-lPr|0,t&=yPr,a=t+614244&1048576|0,r=vPr(r,t|a^EPr),u+=a>>20|0,o=u,n=gPr(r),r-=1,e=fPr(r,0),i=r-e,f=o*qPr+(r+n)*dPr,f+=(i+n)*NR+e*NR,f+o*hPr))}OR.exports=NPr});var _R=s((rye,AR)=>{"use strict";var OPr=SR();AR.exports=OPr});var IR=s((eye,TR)=>{"use strict";var SPr=E(),APr=kr(),_Pr=D(),TPr=z(),IPr=ji(),LPr=_R(),RPr=v0(),PPr=f0(),FPr=L();function MPr(r){var e,t;return SPr(r)||APr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=LPr(r),e===-1?t=TPr(t):t=IPr(t),t<=PPr?e*0:t>RPr?FPr:e*_Pr(10,t))}TR.exports=MPr});var RR=s((tye,LR)=>{"use strict";var BPr=IR();LR.exports=BPr});var FR=s((iye,PR)=>{"use strict";function jPr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}PR.exports=jPr});var BR=s((nye,MR)=>{"use strict";function kPr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}MR.exports=kPr});var CR=s((aye,kR)=>{"use strict";var CPr=ar(),VPr=FR(),UPr=BR(),jR=1048575,GPr=.3333333333333333;function xPr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=CPr(r),a=r-1,(jR&2+n)<3?a===0?0:a*a*(GPr*a-.5):(u=a/(2+a),o=u*u,n&=jR,c=n-398458|0,v=o*o,l=440401-n|0,t=v*VPr(v),i=o*UPr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}kR.exports=xPr});var GR=s((sye,UR)=>{"use strict";var DPr=ar(),HPr=me(),WPr=ge(),zPr=Fi(),XPr=E(),JPr=ae(),YPr=o0(),$Pr=se(),ZPr=V(),QPr=CR(),KPr=0x40000000000000,VR=1.4426950407214463,rFr=16751713164886512e-26,eFr=2146435072,tFr=1048576,iFr=1072693248,u3=[0,0];function nFr(r){var e,t,i,n,a,u,o;if(XPr(r)||r<0)return NaN;if(zPr.assign(r,u3,1,0),i=u3[0],n=u3[1],o=0,i<tFr){if((i&JPr|n)===0)return ZPr;o-=54,r*=KPr,i=DPr(r)}return i>=eFr?r+r:(o+=(i>>20)-$Pr|0,i&=YPr,u=i+614244&1048576|0,r=HPr(r,i|u^iFr),o+=u>>20|0,a=QPr(r),r-=1,e=WPr(r,0),t=r-e,(r+a)*rFr+(t+a)*VR+e*VR+o)}UR.exports=nFr});var DR=s((uye,xR)=>{"use strict";var aFr=GR();xR.exports=aFr});var WR=s((oye,HR)=>{"use strict";var sFr=E(),uFr=kr(),oFr=D(),vFr=z(),fFr=ji(),cFr=DR(),lFr=O2(),pFr=S2(),gFr=L();function mFr(r){var e,t;return sFr(r)||uFr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=cFr(r),t===pFr)?r:(e===-1?t=vFr(t):t=fFr(t),t>lFr?gFr:e*oFr(2,t))}HR.exports=mFr});var XR=s((vye,zR)=>{"use strict";var dFr=WR();zR.exports=dFr});var YR=s((fye,JR)=>{"use strict";var hFr=z(),qFr=ji();function yFr(r){return r<0?qFr(r):hFr(r)}JR.exports=yFr});var I0=s((cye,$R)=>{"use strict";var bFr=YR();$R.exports=bFr});var QR=s((lye,ZR)=>{"use strict";function wFr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}ZR.exports=wFr});var rP=s((pye,KR)=>{"use strict";var EFr=s0(),NFr=QR();function OFr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*NFr(n),u=1-(e-i*a/(2-a)-r),EFr(u,t)}KR.exports=OFr});var sP=s((gye,aP)=>{"use strict";var SFr=E(),eP=I0(),AFr=V(),tP=L(),_Fr=rP(),TFr=.6931471803691238,IFr=19082149292705877e-26,iP=1.4426950408889634,LFr=709.782712893384,RFr=-745.1332191019411,nP=1/(1<<28),PFr=-nP;function FFr(r){var e,t,i;return SFr(r)||r===tP?r:r===AFr?0:r>LFr?tP:r<RFr?0:r>PFr&&r<nP?1+r:(r<0?i=eP(iP*r-.5):i=eP(iP*r+.5),e=r-i*TFr,t=i*IFr,_Fr(e,t,i))}aP.exports=FFr});var sr=s((mye,uP)=>{"use strict";var MFr=sP();uP.exports=MFr});var vP=s((dye,oP)=>{"use strict";var BFr=V();function jFr(r){return r===0&&1/r===BFr}oP.exports=jFr});var o3=s((hye,fP)=>{"use strict";var kFr=vP();fP.exports=kFr});var v3=s((qye,cP)=>{"use strict";var CFr=2.5066282746310007;cP.exports=CFr});var pP=s((yye,lP)=>{"use strict";function VFr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}lP.exports=VFr});var dP=s((bye,mP)=>{"use strict";var UFr=v3(),gP=D(),GFr=sr(),xFr=pP(),DFr=143.01608;function HFr(r){var e,t,i;return e=1/r,e=1+e*xFr(e),t=GFr(r),r>DFr?(i=gP(r,.5*r-.25),t=i*(i/t)):t=gP(r,r-.5)/t,UFr*t*e}mP.exports=HFr});var qP=s((wye,hP)=>{"use strict";var WFr=.5772156649015329;hP.exports=WFr});var bP=s((Eye,yP)=>{"use strict";var zFr=qP();function XFr(r,e){return e/((1+zFr*r)*r)}yP.exports=XFr});var EP=s((Nye,wP)=>{"use strict";function JFr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}wP.exports=JFr});var LP=s((Oye,IP)=>{"use strict";var YFr=E(),$Fr=hr(),ZFr=o3(),NP=Y(),QFr=z(),KFr=Kt(),OP=L(),SP=V(),AP=Cr(),_P=dP(),TP=bP(),rMr=EP();function eMr(r){var e,t,i,n;if($Fr(r)&&r<0||r===SP||YFr(r))return NaN;if(r===0)return ZFr(r)?SP:OP;if(r>171.61447887182297)return OP;if(r<-170.5674972726612)return 0;if(t=NP(r),t>33)return r>=0?_P(r):(i=QFr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*KFr(AP*n),e*AP/(NP(n)*_P(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return TP(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return TP(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*rMr(r))}IP.exports=eMr});var ki=s((Sye,RP)=>{"use strict";var tMr=LP();RP.exports=tMr});var MP=s((Aye,FP)=>{"use strict";var iMr=E(),nMr=kr(),PP=Qt(),f3=Kt(),aMr=Y(),Dn=e0(),Hn=Cr();function sMr(r){var e,t;return iMr(r)?NaN:nMr(r)?NaN:(t=r%2,e=aMr(t),e===0||e===1?Dn(0,t):e<.25?f3(Hn*t):e<.75?(e=.5-e,Dn(PP(Hn*e),t)):e<1.25?(t=Dn(1,t)-t,f3(Hn*t)):e<1.75?(e-=1.5,-Dn(PP(Hn*e),t)):(t-=Dn(2,t),f3(Hn*t)))}FP.exports=sMr});var Wn=s((_ye,BP)=>{"use strict";var uMr=MP();BP.exports=uMr});var kP=s((Tye,jP)=>{"use strict";function oMr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}jP.exports=oMr});var VP=s((Iye,CP)=>{"use strict";function vMr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}CP.exports=vMr});var GP=s((Lye,UP)=>{"use strict";function fMr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}UP.exports=fMr});var DP=s((Rye,xP)=>{"use strict";function cMr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}xP.exports=cMr});var WP=s((Pye,HP)=>{"use strict";function lMr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}HP.exports=lMr});var XP=s((Fye,zP)=>{"use strict";function pMr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}zP.exports=pMr});var YP=s((Mye,JP)=>{"use strict";function gMr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}JP.exports=gMr});var ZP=s((Bye,$P)=>{"use strict";function mMr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}$P.exports=mMr});var KP=s((jye,QP)=>{"use strict";function dMr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}QP.exports=dMr});var eF=s((kye,rF)=>{"use strict";function hMr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}rF.exports=hMr});var nF=s((Cye,iF)=>{"use strict";var qMr=E(),yMr=kr(),bMr=Y(),Ci=P(),wMr=I0(),EMr=Wn(),NMr=Cr(),c3=L(),OMr=kP(),SMr=VP(),AMr=GP(),_Mr=DP(),TMr=WP(),IMr=XP(),LMr=YP(),RMr=ZP(),PMr=KP(),FMr=eF(),MMr=.07721566490153287,BMr=.3224670334241136,jMr=1,kMr=-.07721566490153287,CMr=.48383612272381005,VMr=-.1475877229945939,UMr=.06462494023913339,GMr=-.07721566490153287,xMr=1,DMr=.4189385332046727,L0=1.4616321449683622,HMr=4503599627370496,WMr=0x400000000000000,zMr=8470329472543003e-37,tF=1.4616321449683622,XMr=-.12148629053584961,JMr=-3638676997039505e-33;function YMr(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(qMr(r)||yMr(r))return r;if(r===0)return c3;if(r<0?(e=!0,r=-r):e=!1,r<zMr)return-Ci(r);if(e){if(r>=HMr||(v=EMr(r),v===0))return c3;t=Ci(NMr/bMr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(g=-Ci(r),r>=L0-1+.27?(l=1-r,i=0):r>=L0-1-.27?(l=r-(tF-1),i=1):(l=r,i=2)):(g=0,r>=L0+.27?(l=2-r,i=0):r>=L0-.27?(l=r-tF,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=MMr+p*OMr(p),a=p*(BMr+p*SMr(p)),o=l*u+a,g+=o-.5*l;break;case 1:p=l*l,c=p*l,u=CMr+c*TMr(c),a=VMr+c*IMr(c),n=UMr+c*LMr(c),o=p*u-(JMr-c*(a+l*n)),g+=XMr+o;break;case 2:u=l*(GMr+l*RMr(l)),a=xMr+l*PMr(l),g+=-.5*l+u/a;break}else if(r<8)switch(i=wMr(r),l=r-i,o=l*(kMr+l*_Mr(l)),f=jMr+l*AMr(l),g=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,g+=Ci(p)}else r<WMr?(v=Ci(r),p=1/r,l=p*p,c=DMr+p*FMr(l),g=(r-.5)*(v-1)+c):g=r*(Ci(r)-1);return e&&(g=t-g),g}iF.exports=YMr});var zn=s((Vye,aF)=>{"use strict";var $Mr=nF();aF.exports=$Mr});var ot=s((Uye,sF)=>{"use strict";var ZMr=6.283185307179586;sF.exports=ZMr});var l3=s((Gye,uF)=>{"use strict";var QMr=14901161193847656e-24;uF.exports=QMr});var p3=s((xye,oF)=>{"use strict";var KMr=.9189385332046728;oF.exports=KMr});var vF=s((Dye,rBr)=>{rBr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var fF=s((Hye,eBr)=>{eBr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var cF=s((Wye,tBr)=>{tBr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var pF=s((zye,lF)=>{"use strict";function iBr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}lF.exports=iBr});var mF=s((Xye,gF)=>{"use strict";function nBr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}gF.exports=nBr});var hF=s((Jye,dF)=>{"use strict";function aBr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}dF.exports=aBr});var yF=s((Yye,qF)=>{"use strict";function sBr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}qF.exports=sBr});var wF=s(($ye,bF)=>{"use strict";function uBr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}bF.exports=uBr});var NF=s((Zye,EF)=>{"use strict";function oBr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}EF.exports=oBr});var TF=s((Qye,_F)=>{"use strict";var vBr=E(),fBr=hr(),cBr=Y(),R0=sr(),lBr=z(),pBr=ki(),gBr=zn(),OF=Wn(),SF=D(),mBr=P(),dBr=L(),hBr=V(),AF=ot(),qBr=l3(),yBr=p3(),bBr=vF(),wBr=fF(),EBr=cF(),NBr=pF(),OBr=mF(),SBr=hF(),ABr=yF(),_Br=wF(),TBr=NF(),IBr=129,LBr=170,RBr=709,PBr=1.2433929443359375,FBr=.6986598968505859;function g3(r){var e,t,i,n,a,u;if(vBr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(fBr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=IBr)return-EBr[u]/(i+1)}else return(n&1)===0?wBr[n/2]:bBr[(n-3)/2];return cBr(r)<qBr?-.5-yBr*r:(t=1-r,r<0?lBr(r/2)===r/2?0:(e=r,r=t,t=e,r>LBr?(e=OF(.5*t)*2*g3(r),a=gBr(r),a-=r*mBr(AF),a>RBr?e<0?hBr:dBr:e*R0(a)):OF(.5*t)*2*SF(AF,-r)*pBr(r)*g3(r)):r<1?(e=NBr(t),e-=PBr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+OBr(t)):r<=4?(e=FBr+1/-t,e+SBr(r-2)):r<=7?(e=ABr(r-4),1+R0(e)):r<15?(e=_Br(r-7),1+R0(e)):r<36?(e=TBr(r-15),1+R0(e)):1+SF(2,-r))}_F.exports=g3});var LF=s((Kye,IF)=>{"use strict";var MBr=TF();IF.exports=MBr});var PF=s((rbe,RF)=>{"use strict";var x=rr(),BBr=Y(),jBr=g0(),kBr=Mn(),CBr=k_(),VBr=$_(),UBr=rT(),GBr=nT(),xBr=oT(),DBr=hT(),HBr=wT(),WBr=ST(),zBr=$t(),XBr=G2(),JBr=y0(),YBr=LT(),$Br=MT(),ZBr=CT(),QBr=zT(),KBr=Y2(),rjr=$2(),ejr=fL(),tjr=_L(),ijr=iR(),njr=cR(),ajr=ji(),sjr=RR(),ujr=XR(),ojr=Qt(),vjr=Kt(),fjr=U(),cjr=LF();function ljr(r){return x(r,"abs",BBr),x(r,"abs2",jBr),x(r,"acos",kBr),x(r,"acosh",CBr),x(r,"acot",VBr),x(r,"acovercos",UBr),x(r,"acoversin",GBr),x(r,"acsc",xBr),x(r,"acsch",DBr),x(r,"ahavercos",HBr),x(r,"ahaversin",WBr),x(r,"asin",zBr),x(r,"asinh",XBr),x(r,"atan",JBr),x(r,"atanh",YBr),x(r,"avercos",$Br),x(r,"aversin",ZBr),x(r,"bernoulli",QBr),x(r,"besselj0",KBr),x(r,"besselj1",rjr),x(r,"bessely0",ejr),x(r,"bessely1",tjr),x(r,"binet",ijr),x(r,"cbrt",njr),x(r,"ceil",ajr),x(r,"ceil10",sjr),x(r,"ceil2",ujr),x(r,"cos",ojr),x(r,"sin",vjr),x(r,"sqrt",fjr),x(r,"zeta",cjr),r}RF.exports=ljr});var MF=s((ebe,FF)=>{"use strict";var pjr=rr(),gjr=qA(),mjr=ZA(),djr=PF();function hjr(r){return pjr(r,"tools",mjr({})),r=gjr(r),r=djr(r),r}FF.exports=hjr});var kF=s((tbe,jF)=>{"use strict";var qjr=bo(),BF=qjr();function yjr(){return typeof BF.BigInt=="function"&&typeof BigInt=="function"&&typeof BF.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}jF.exports=yjr});var VF=s((ibe,CF)=>{"use strict";var bjr=kF();CF.exports=bjr});var UF=s((nbe,wjr)=>{wjr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var xF=s((abe,GF)=>{"use strict";var Ejr=UF();function Njr(r){return Ejr[r]||null}GF.exports=Njr});var HF=s((sbe,DF)=>{"use strict";var Ojr=xF();DF.exports=Ojr});var zF=s((ube,WF)=>{"use strict";function Sjr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}WF.exports=Sjr});var JF=s((obe,XF)=>{"use strict";var Ajr=zF();XF.exports=Ajr});var ZF=s((vbe,$F)=>{"use strict";var YF=Y();function _jr(r){var e,t,i,n,a,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,n=YF(r[0]),u=1;u<t;u++)if(a=YF(r[u]),e&&a<n?e=!1:i&&a>n&&(i=!1),i||e)n=a;else return 0;return i&&e?3:i?1:2}$F.exports=_jr});var m3=s((fbe,QF)=>{"use strict";var Tjr=ZF();QF.exports=Tjr});var rM=s((cbe,KF)=>{"use strict";function Ijr(r,e){return e&&(r===2||r===3)}KF.exports=Ijr});var tM=s((lbe,eM)=>{"use strict";function Ljr(r,e){return e&&(r===1||r===3)}eM.exports=Ljr});var nM=s((pbe,iM)=>{"use strict";var Rjr=d1();function Pjr(r,e,t,i,n){var a;return r===0||n===0?!1:(a=Rjr(e,t,i),r===a[1]-a[0]+1)}iM.exports=Pjr});var sM=s((gbe,aM)=>{"use strict";function Fjr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}aM.exports=Fjr});var oM=s((mbe,uM)=>{"use strict";function Mjr(r){var e,t,i,n,a,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,n=this._offset,this._order==="column-major"){for(u=0;u<i;u++)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}for(u=i-1;u>=0;u--)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}uM.exports=Mjr});var fM=s((dbe,vM)=>{"use strict";function Bjr(r,e){var t,i,n,a,u,o;if(n=this._ndims,n===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,a=this._offset,this._order==="column-major"){for(o=0;o<n;o++)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}for(o=n-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}vM.exports=Bjr});var lM=s((hbe,cM)=>{"use strict";function jjr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}cM.exports=jjr});var gM=s((qbe,pM)=>{"use strict";function kjr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}pM.exports=kjr});var dM=s((ybe,mM)=>{"use strict";var Cjr=Kr(),Vjr=re();function Ujr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(Cjr(t),Vjr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}mM.exports=Ujr});var yM=s((bbe,qM)=>{"use strict";var Gjr=Q().isPrimitive,xjr=y(),hM=/[-\/\\^$*+?.()|[\]{}]/g;function Djr(r){var e,t,i;if(!Gjr(r))throw new TypeError(xjr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(hM,"\\$&"):(t=r.substring(1,i),t=t.replace(hM,"\\$&"),r=r[0]+t+r.substring(i),r)}qM.exports=Djr});var wM=s((wbe,bM)=>{"use strict";var Hjr=yM();bM.exports=Hjr});var NM=s((Ebe,EM)=>{"use strict";var Wjr=RegExp.prototype.exec;EM.exports=Wjr});var SM=s((Nbe,OM)=>{"use strict";var zjr=NM();function Xjr(r){try{return zjr.call(r),!0}catch{return!1}}OM.exports=Xjr});var _M=s((Obe,AM)=>{"use strict";var Jjr=ui(),Yjr=er(),$jr=SM(),Zjr=Jjr();function Qjr(r){return typeof r=="object"?r instanceof RegExp?!0:Zjr?$jr(r):Yjr(r)==="[object RegExp]":!1}AM.exports=Qjr});var IM=s((Sbe,TM)=>{"use strict";var Kjr=_M();TM.exports=Kjr});var RM=s((Abe,LM)=>{"use strict";function rkr(r,e,t){return r.replace(e,t)}LM.exports=rkr});var vt=s((_be,PM)=>{"use strict";var ekr=RM();PM.exports=ekr});var MM=s((Tbe,FM)=>{"use strict";var tkr=wM(),ikr=I(),d3=Q().isPrimitive,nkr=IM(),h3=y(),akr=vt();function skr(r,e,t){if(!d3(r))throw new TypeError(h3("invalid argument. First argument must be a string. Value: `%s`.",r));if(d3(e))e=new RegExp(tkr(e),"g");else if(!nkr(e))throw new TypeError(h3("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!d3(t)&&!ikr(t))throw new TypeError(h3("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return akr(r,e,t)}FM.exports=skr});var jM=s((Ibe,BM)=>{"use strict";var ukr=MM();BM.exports=ukr});var CM=s((Lbe,kM)=>{"use strict";var okr=jM(),q3=Kr(),y3=re(),vkr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function fkr(){var r,e,t,i,n,a,u;if(e=this._shape.length,n=this._dtype,i="ndarray( '"+n+"', ",r="",this._length<=100)if(n==="complex64"||n==="complex128")for(u=0;u<this._length;u++)a=this.iget(u),r+=q3(a)+", "+y3(a),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(n==="complex64"||n==="complex128")for(u=0;u<3;u++)a=this.iget(u),r+=q3(a)+", "+y3(a),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",n==="complex64"||n==="complex128")for(u=2;u>=0;u--)a=this.iget(this._length-1-u),r+=q3(a)+", "+y3(a),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=vkr[this.dtype],i+=okr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}kM.exports=fkr});var UM=s((Rbe,VM)=>{"use strict";var ckr=typeof ArrayBuffer=="function"?ArrayBuffer:null;VM.exports=ckr});var xM=s((Pbe,GM)=>{"use strict";var lkr=Aa(),pkr=lr(),P0=UM();function gkr(){var r,e,t;if(typeof P0!="function")return!1;try{t=new P0(16),r=lkr(t)&&typeof P0.isView=="function",r&&(e=new pkr(t),e[0]=-3.14,e[1]=NaN,r=r&&P0.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}GM.exports=gkr});var HM=s((Fbe,DM)=>{"use strict";var mkr=xM();DM.exports=mkr});var zM=s((Mbe,WM)=>{"use strict";var dkr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;WM.exports=dkr});var JM=s((Bbe,XM)=>{"use strict";function hkr(){throw new Error("not implemented")}XM.exports=hkr});var F0=s((jbe,YM)=>{"use strict";var qkr=HM(),ykr=zM(),bkr=JM(),b3;qkr()?b3=ykr:b3=bkr;YM.exports=b3});var ZM=s((kbe,$M)=>{"use strict";var wkr=er(),Ekr=typeof DataView=="function";function Nkr(r){return Ekr&&r instanceof DataView||wkr(r)==="[object DataView]"}$M.exports=Nkr});var KM=s((Cbe,QM)=>{"use strict";var Okr=ZM();QM.exports=Okr});var eB=s((Vbe,rB)=>{"use strict";var Skr=typeof DataView=="function"?DataView:null;rB.exports=Skr});var nB=s((Ube,iB)=>{"use strict";var Akr=KM(),_kr=F0(),tB=eB();function Tkr(){var r,e,t;if(typeof tB!="function")return!1;try{t=new _kr(24),e=new tB(t,8),r=Akr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}iB.exports=Tkr});var sB=s((Gbe,aB)=>{"use strict";var Ikr=nB();aB.exports=Ikr});var oB=s((xbe,uB)=>{"use strict";var Lkr=typeof DataView=="function"?DataView:void 0;uB.exports=Lkr});var fB=s((Dbe,vB)=>{"use strict";function Rkr(){throw new Error("not implemented")}vB.exports=Rkr});var Xn=s((Hbe,cB)=>{"use strict";var Pkr=sB(),Fkr=oB(),Mkr=fB(),w3;Pkr()?w3=Fkr:w3=Mkr;cB.exports=w3});var pB=s((Wbe,lB)=>{"use strict";var Bkr=typeof BigInt=="function"?BigInt:void 0;lB.exports=Bkr});var mB=s((zbe,gB)=>{"use strict";var jkr=pB();gB.exports=jkr});var dB=s((Xbe,kkr)=>{kkr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var yB=s((Jbe,qB)=>{"use strict";var hB=dB();function Ckr(){var r;return arguments.length===0?hB.all.slice():(r=hB[arguments[0]],r?r.slice():[])}qB.exports=Ckr});var wB=s((Ybe,bB)=>{"use strict";function Vkr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}bB.exports=Vkr});var NB=s(($be,EB)=>{"use strict";var Ukr=rr(),Gkr=Ti();function xkr(r,e){var t,i,n;for(t=Gkr(e),n=0;n<t.length;n++)i=t[n],Ukr(r,i,e[i]);return r}EB.exports=xkr});var N3=s((Zbe,SB)=>{"use strict";var Dkr=b(),E3=yB(),OB=wB(),Hkr=NB();Dkr(E3,"enum",OB);Hkr(E3,OB());SB.exports=E3});var AB=s((Qbe,Wkr)=>{Wkr.exports=["row-major","column-major"]});var TB=s((Kbe,_B)=>{"use strict";var zkr=AB();function Xkr(){return zkr.slice()}_B.exports=Xkr});var LB=s((rwe,IB)=>{"use strict";function Jkr(){return{"row-major":1,"column-major":2}}IB.exports=Jkr});var O3=s((ewe,PB)=>{"use strict";var Ykr=b(),RB=TB(),$kr=LB();Ykr(RB,"enum",$kr);PB.exports=RB});var FB=s((twe,Zkr)=>{Zkr.exports=["throw","clamp","wrap"]});var BB=s((iwe,MB)=>{"use strict";var Qkr=FB();function Kkr(){return Qkr.slice()}MB.exports=Kkr});var kB=s((nwe,jB)=>{"use strict";function rCr(){return{throw:1,clamp:2,wrap:3}}jB.exports=rCr});var S3=s((awe,VB)=>{"use strict";var eCr=b(),CB=BB(),tCr=kB();eCr(CB,"enum",tCr);VB.exports=CB});var xB=s((swe,GB)=>{"use strict";var ft=zr(),iCr=F0(),nCr=Xn(),Jn=mB(),aCr=N3().enum,sCr=O3().enum,uCr=S3().enum,oCr=aCr(),vCr=sCr(),UB=uCr();function fCr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g;if(f=this._mode||"throw",u=this._submode||[f],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new nCr(new iCr(t)),n=this._shape,a=this._strides,i=this._dtype,r=this._bytesPerElement,v=0,o.setInt8(v,ft?1:0),v+=1,o.setInt16(v,oCr[i],ft),v+=2,o.setBigInt64(v,Jn(l),ft),c=l*8,v+=8,g=0;g<l;g++)o.setBigInt64(v,Jn(n[g]),ft),o.setBigInt64(v+c,Jn(a[g]*r),ft),v+=8;for(v+=c,o.setBigInt64(v,Jn(this._offset*r),ft),v+=8,o.setInt8(v,vCr[this._order]),v+=1,o.setInt8(v,UB[f]),v+=1,o.setBigInt64(v,Jn(p),ft),v+=8,g=0;g<p;g++)o.setInt8(v,UB[u[g]]),v+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(v,e,ft),this.__meta_dataview__=o,o}GB.exports=fCr});var HB=s((uwe,DB)=>{"use strict";var Yn=zr(),cCr=Qr(),lCr=Xn(),pCr=z(),gCr=4294967295>>>0,mCr=4294967296;function dCr(r){var e,t,i,n;return e=new cCr(8),r===0||(n=(r&gCr)>>>0,i=pCr(r/mCr),t=new lCr(e.buffer),Yn?(t.setUint32(0,n,Yn),t.setUint32(4,i,Yn)):(t.setUint32(0,i,Yn),t.setUint32(4,n,Yn))),e}DB.exports=dCr});var zB=s((owe,WB)=>{"use strict";var $n=zr(),hCr=Qr(),qCr=Xn(),yCr=z(),bCr=4294967295>>>0,wCr=4294967296,B0=new hCr(8),M0=new qCr(B0.buffer);function ECr(r,e,t,i){var n,a,u;if(r===0){for(u=0;u<B0.length;u++)e[i]=0,i+=t;return e}for(a=(r&bCr)>>>0,n=yCr(r/wCr),$n?(M0.setUint32(0,a,$n),M0.setUint32(4,n,$n)):(M0.setUint32(0,n,$n),M0.setUint32(4,a,$n)),u=0;u<B0.length;u++)e[i]=B0[u],i+=t;return e}WB.exports=ECr});var YB=s((vwe,JB)=>{"use strict";var NCr=b(),XB=HB(),OCr=zB();NCr(XB,"assign",OCr);JB.exports=XB});var QB=s((fwe,ZB)=>{"use strict";var A3=zr(),SCr=F0(),ACr=Xn(),_Cr=Qr(),TCr=N3().enum,ICr=O3().enum,LCr=S3().enum,Zn=YB().assign,RCr=TCr(),PCr=ICr(),$B=LCr();function FCr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h;if(v=this._mode||"throw",o=this._submode||[v],p=this._ndims,g=o.length,i=33+p*16+g,f=this.__meta_dataview__,f&&f.byteLength===i)return f;for(f=new ACr(new SCr(i)),e=new _Cr(f.buffer),a=this._shape,u=this._strides,n=this._dtype,r=this._bytesPerElement,c=0,f.setInt8(c,A3?1:0),c+=1,f.setInt16(c,RCr[n],A3),c+=2,Zn(p,e,1,c),l=p*8,c+=8,h=0;h<p;h++)Zn(a[h],e,1,c),Zn(u[h]*r,e,1,c+l),c+=8;for(c+=l,Zn(this._offset*r,e,1,c),c+=8,f.setInt8(c,PCr[this._order]),c+=1,f.setInt8(c,$B[v]),c+=1,Zn(g,e,1,c),c+=8,h=0;h<g;h++)f.setInt8(c,$B[o[h]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,f.setInt32(c,t,A3),this.__meta_dataview__=f,f}ZB.exports=FCr});var rj=s((cwe,KB)=>{"use strict";var MCr=VF(),ct=b(),Xr=R(),BCr=HF(),jCr=JF(),kCr=m3(),CCr=ho(),VCr=rM(),UCr=tM(),GCr=nM(),xCr=sM(),DCr=oM(),HCr=fM(),WCr=lM(),zCr=gM(),XCr=dM(),JCr=CM(),YCr=xB(),$Cr=QB();function nr(r,e,t,i,n,a){var u,o,f,v,c;if(!(this instanceof nr))return new nr(r,e,t,i,n,a);for(v=1,c=0;c<t.length;c++)v*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*v:o=null,this._byteLength=o,this._bytesPerElement=BCr(r),this._buffer=e,this._dtype=r,this._length=v,this._ndims=t.length,this._offset=n,this._order=a,this._shape=t,this._strides=i,this._accessors=CCr(e.get&&e.set),this._iterationOrder=jCr(i),u=GCr(v,t,i,n,this._iterationOrder),f=kCr(i),this._flags={ROW_MAJOR_CONTIGUOUS:UCr(f,u),COLUMN_MAJOR_CONTIGUOUS:VCr(f,u),READONLY:!1},this.__meta_dataview__=null,this}ct(nr,"name","ndarray");Xr(nr.prototype,"byteLength",function(){return this._byteLength});Xr(nr.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});Xr(nr.prototype,"data",function(){return this._buffer});Xr(nr.prototype,"dtype",function(){return this._dtype});Xr(nr.prototype,"flags",function(){return xCr(this._flags)});Xr(nr.prototype,"length",function(){return this._length});Xr(nr.prototype,"ndims",function(){return this._ndims});Xr(nr.prototype,"offset",function(){return this._offset});Xr(nr.prototype,"order",function(){return this._order});Xr(nr.prototype,"shape",function(){return this._shape.slice()});Xr(nr.prototype,"strides",function(){return this._strides.slice()});ct(nr.prototype,"get",zCr);ct(nr.prototype,"iget",DCr);ct(nr.prototype,"set",WCr);ct(nr.prototype,"iset",HCr);ct(nr.prototype,"toString",JCr);ct(nr.prototype,"toJSON",XCr);ct(nr.prototype,"__array_meta_dataview__",MCr()?YCr:$Cr);KB.exports=nr});var j0=s((lwe,ej)=>{"use strict";var ZCr=rj();ej.exports=ZCr});var ij=s((pwe,tj)=>{"use strict";var QCr=j0();function KCr(r){return r instanceof QCr||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}tj.exports=KCr});var aj=s((gwe,nj)=>{"use strict";var rVr=ij();nj.exports=rVr});var uj=s((mwe,sj)=>{"use strict";function eVr(r){var e=r.flags;return e&&e.READONLY===!0}sj.exports=eVr});var vj=s((dwe,oj)=>{"use strict";var tVr=uj();oj.exports=tVr});var cj=s((hwe,fj)=>{"use strict";var iVr=qr().isPrimitive,nVr=Vr(),_3=y();function aVr(r){var e,t,i,n;if(typeof r!="object"||r===null)throw new TypeError(_3("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!nVr(t))throw new TypeError(_3("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],n=0;n<t.length;n++){if(i=t[n],!iVr(i))throw new TypeError(_3("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}fj.exports=aVr});var pj=s((qwe,lj)=>{"use strict";var sVr=cj();lj.exports=sVr});var mj=s((ywe,gj)=>{"use strict";function uVr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}gj.exports=uVr});var Qn=s((bwe,dj)=>{"use strict";var oVr=mj();dj.exports=oVr});var qj=s((wwe,hj)=>{"use strict";function vVr(r){return r===null}hj.exports=vVr});var T3=s((Ewe,yj)=>{"use strict";var fVr=qj();yj.exports=fVr});var wj=s((Nwe,bj)=>{"use strict";function cVr(r){return r===void 0}bj.exports=cVr});var I3=s((Owe,Ej)=>{"use strict";var lVr=wj();Ej.exports=lVr});var Oj=s((Swe,Nj)=>{"use strict";var R3=b(),P3=R(),pVr=dr().isPrimitive,gVr=T3(),mVr=I3(),k0=y();function L3(r){return pVr(r)||gVr(r)||mVr(r)}function ye(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof ye))return new ye(e,t,i);if(!L3(e))throw new TypeError(k0("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!L3(t))throw new TypeError(k0("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(L3(i)){if(i===0)throw new RangeError(k0("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(k0("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}R3(ye,"name","Slice");P3(ye.prototype,"start",function(){return this._start});P3(ye.prototype,"stop",function(){return this._stop});P3(ye.prototype,"step",function(){return this._step});R3(ye.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});R3(ye.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});Nj.exports=ye});var Vi=s((Awe,Sj)=>{"use strict";var dVr=Oj();Sj.exports=dVr});var _j=s((_we,Aj)=>{"use strict";var hVr=Vi(),qVr=ce();function yVr(r){return r instanceof hVr||qVr(r)==="Slice"}Aj.exports=yVr});var Ij=s((Twe,Tj)=>{"use strict";var bVr=_j();Tj.exports=bVr});var Pj=s((Iwe,Rj)=>{"use strict";var F3=b(),Lj=R(),wVr=dr().isPrimitive,EVr=T3(),NVr=I3(),OVr=Ij(),SVr=y();function AVr(r){return wVr(r)||EVr(r)||NVr(r)||OVr(r)}function Nr(){var r,e,t,i,n;if(r=arguments.length,!(this instanceof Nr)){if(r===1)return new Nr(arguments[0]);if(r===2)return new Nr(arguments[0],arguments[1]);if(r===3)return new Nr(arguments[0],arguments[1],arguments[2]);if(r===4)return new Nr(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Nr(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],n=0;n<r;n++)t.push(arguments[n]);return e=Object.create(Nr.prototype),Nr.apply(e,t)}for(this._data=[],n=0;n<r;n++){if(i=arguments[n],!AVr(i))throw new TypeError(SVr("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",n,i));this._data.push(i===void 0?null:i)}return this}F3(Nr,"name","MultiSlice");Lj(Nr.prototype,"ndims",function(){return this._data.length});Lj(Nr.prototype,"data",function(){return this._data.slice()});F3(Nr.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});F3(Nr.prototype,"toJSON",function(){var e,t,i,n;for(e=this._data,t={type:"MultiSlice",data:[]},n=0;n<e.length;n++)i=e[n],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});Rj.exports=Nr});var C0=s((Lwe,Fj)=>{"use strict";var _Vr=Pj();Fj.exports=_Vr});var Bj=s((Rwe,Mj)=>{"use strict";function TVr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Mj.exports=TVr});var kj=s((Pwe,jj)=>{"use strict";var IVr=Vi(),Kn=Bj();function LVr(r,e,t){var i,n,a;if(i=r.start,n=r.stop,a=r.step,a===null&&(a=1),i===null)a>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return Kn();i=0}}else if(i>=e){if(t)return Kn();a<0?i=e-1:i=e}if(n===null)a>0?n=e:n=null;else if(n<0){if(n=e+n,n<0)if(a>0){if(t)return Kn();n=0}else{if(t&&n<-1)return Kn();n=null}}else if(n>e){if(t)return Kn();n=e}return new IVr(i,n,a)}jj.exports=LVr});var Vj=s((Fwe,Cj)=>{"use strict";var RVr=kj();Cj.exports=RVr});var Gj=s((Mwe,Uj)=>{"use strict";function PVr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Uj.exports=PVr});var Hj=s((Bwe,Dj)=>{"use strict";var FVr=C0(),ra=Vi(),MVr=Vj(),xj=Gj();function BVr(r,e,t){return r===null?new ra(0,e,1):typeof r=="number"?r>=e?t?xj():new ra(e,e,1):r<0?(r=e+r,r<0?t?xj():new ra(0,0,1):new ra(r,r+1,1)):new ra(r,r+1,1):MVr(r,e,t)}function jVr(r,e,t){var i,n,a,u;for(i=r.data,n=[],u=0;u<i.length;u++){if(a=BVr(i[u],e[u],t),a.code!==void 0)return a;n.push(a)}return FVr.apply(null,n)}Dj.exports=jVr});var zj=s((jwe,Wj)=>{"use strict";var kVr=Hj();Wj.exports=kVr});var Jj=s((kwe,Xj)=>{"use strict";function CVr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}Xj.exports=CVr});var $j=s((Cwe,Yj)=>{"use strict";var VVr=Jj();Yj.exports=VVr});var Qj=s((Vwe,Zj)=>{"use strict";var UVr=ji();function GVr(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:UVr((i-t)/e)}Zj.exports=GVr});var rk=s((Uwe,Kj)=>{"use strict";var xVr=Qj();Kj.exports=xVr});var tk=s((Gwe,ek)=>{"use strict";var DVr=rk();function HVr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(DVr(e[i]));return t}ek.exports=HVr});var nk=s((xwe,ik)=>{"use strict";var WVr=tk();ik.exports=WVr});var sk=s((Dwe,ak)=>{"use strict";function zVr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}ak.exports=zVr});var ok=s((Hwe,uk)=>{"use strict";var XVr=sk();uk.exports=XVr});var fk=s((Wwe,vk)=>{"use strict";function JVr(r){return r.dtype}vk.exports=JVr});var lk=s((zwe,ck)=>{"use strict";var YVr=fk();ck.exports=YVr});var gk=s((Xwe,pk)=>{"use strict";var $Vr=ya();function ZVr(r,e){var t=r.shape;return e?$Vr(t):t}pk.exports=ZVr});var dk=s((Jwe,mk)=>{"use strict";var QVr=gk();mk.exports=QVr});var qk=s((Ywe,hk)=>{"use strict";function KVr(r){var e,t,i,n;for(e=r.length,t=[],n=0;n<e;n++)t.push(0);for(i=1,n=e-1;n>=0;n--)t[n]=i,i*=r[n];return t}function rUr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function eUr(r,e){return e==="column-major"?rUr(r):KVr(r)}hk.exports=eUr});var bk=s(($we,yk)=>{"use strict";function tUr(r,e){var t,i,n;for(t=r.length,i=1,n=t-1;n>=0;n--)e[n]=i,i*=r[n];return e}function iUr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function nUr(r,e,t){return e==="column-major"?iUr(r,t):tUr(r,t)}yk.exports=nUr});var V0=s((Zwe,Ek)=>{"use strict";var aUr=b(),wk=qk(),sUr=bk();aUr(wk,"assign",sUr);Ek.exports=wk});var Ok=s((Qwe,Nk)=>{"use strict";var uUr=V0(),oUr=ya(),vUr="row-major";function fUr(r,e){var t,i,n;return n=r.strides,typeof n!="object"||n===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=vUr),uUr(i,t))):e?oUr(n):n}Nk.exports=fUr});var Ak=s((Kwe,Sk)=>{"use strict";var cUr=Ok();Sk.exports=cUr});var Tk=s((rEe,_k)=>{"use strict";function lUr(r,e){var t,i,n;for(i=r.length,t=0,n=0;n<i;n++)e[n]<0&&(t-=e[n]*(r[n]-1));return t}_k.exports=lUr});var U0=s((eEe,Ik)=>{"use strict";var pUr=Tk();Ik.exports=pUr});var Rk=s((tEe,Lk)=>{"use strict";var gUr=U0();function mUr(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:gUr(t,e))}Lk.exports=mUr});var Fk=s((iEe,Pk)=>{"use strict";var dUr=Rk();Pk.exports=dUr});var Bk=s((nEe,Mk)=>{"use strict";var hUr=m3(),M3="row-major",qUr="column-major";function yUr(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=hUr(e),t===1||t===3)?M3:t===2?qUr:r.shape.length===0?M3:null)}Mk.exports=yUr});var kk=s((aEe,jk)=>{"use strict";var bUr=Bk();jk.exports=bUr});var Vk=s((sEe,Ck)=>{"use strict";function wUr(r){return r.data}Ck.exports=wUr});var Gk=s((uEe,Uk)=>{"use strict";var EUr=Vk();Uk.exports=EUr});var Dk=s((oEe,xk)=>{"use strict";function NUr(r,e,t){var i,n,a;for(i=r.data,n=t,a=0;a<i.length;a++)n+=e[a]*i[a].start;return n}xk.exports=NUr});var Wk=s((vEe,Hk)=>{"use strict";function OUr(r,e,t){var i,n,a,u;for(i=r.data,n=[],a=0;a<t.length;a++)u=t[a],n.push(e[u]*i[u].step);return n}Hk.exports=OUr});var Xk=s((fEe,zk)=>{"use strict";var SUr=tt(),AUr=lr(),_Ur=Zr(),TUr=fi(),IUr=Qe(),LUr=li(),RUr=Ut(),PUr=pr(),FUr=Qr(),MUr=ci(),BUr=bi(),jUr=Oi(),kUr={binary:SUr,float64:AUr,float32:_Ur,generic:Array,int16:TUr,int32:IUr,int8:LUr,uint16:RUr,uint32:PUr,uint8:FUr,uint8c:MUr,complex64:BUr,complex128:jUr};zk.exports=kUr});var Yk=s((cEe,Jk)=>{"use strict";var CUr=Xk();function VUr(r){return CUr[r]||null}Jk.exports=VUr});var Zk=s((lEe,$k)=>{"use strict";var UUr=Yk();$k.exports=UUr});var Kk=s((pEe,Qk)=>{"use strict";var GUr=I(),xUr=tt(),DUr=GUr(xUr.allocUnsafe);Qk.exports=DUr});var eC=s((gEe,rC)=>{"use strict";var HUr=qr(),WUr=y(),zUr=tt();function XUr(r){if(!HUr(r))throw new TypeError(WUr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return zUr.allocUnsafe(r)}rC.exports=XUr});var iC=s((mEe,tC)=>{"use strict";var JUr=qr(),YUr=y(),$Ur=tt();function ZUr(r){if(!JUr(r))throw new TypeError(YUr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new $Ur(r)}tC.exports=ZUr});var aC=s((dEe,nC)=>{"use strict";var QUr=Kk(),KUr=eC(),rGr=iC(),B3;QUr?B3=KUr:B3=rGr;nC.exports=B3});var uC=s((hEe,sC)=>{"use strict";function eGr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}sC.exports=eGr});var vC=s((qEe,oC)=>{"use strict";var tGr=Zk(),iGr=aC(),nGr=uC();function aGr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function sGr(r){return nGr(iGr(r))}function uGr(r,e){var t=tGr(r);return t?new t(e):null}function oGr(r,e){return r==="generic"?aGr(e):r==="binary"?sGr(e):uGr(r,e)}oC.exports=oGr});var j3=s((yEe,fC)=>{"use strict";var vGr=vC();fC.exports=vGr});var lC=s((bEe,cC)=>{"use strict";var fGr=j3(),cGr=Ze();function lGr(r,e,t,i,n){var a,u;return u=t.length,u===0?a=[0]:a=cGr(u),new r(e,fGr(e,0),t,a,0,i,{readonly:n})}cC.exports=lGr});var qC=s((wEe,hC)=>{"use strict";var pC=zj(),pGr=$j(),gC=nk(),k3=ok(),gGr=Ze(),mC=Qn(),mGr=lk(),dGr=dk(),hGr=Ak(),qGr=Fk(),yGr=kk(),C3=Gk(),dC=y(),bGr=Dk(),wGr=Wk(),EGr=lC();function NGr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g;if(u=mGr(r),o=dGr(r,!0),n=hGr(r,!0),a=qGr(r),f=yGr(r),c=o.length,e.ndims!==c)throw new RangeError(dC("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,C3(r),o,n,a,f,{readonly:!i});if(v=pGr(e),g=pC(e,o,!0),g.code){if(t)throw new RangeError(dC("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));g=pC(e,o,!1),p=gC(g),mC(k3(p,v))>0&&(p=gGr(p.length))}else p=gC(g);return mC(p)===0?EGr(l,u,k3(p,v),f,!i):(a=bGr(g,n,a),p=k3(p,v),p.length===0?new l(u,C3(r),[],[0],a,f,{readonly:!i}):(n=wGr(g,n,v),new l(u,C3(r),p,n,a,f,{readonly:!i})))}hC.exports=NGr});var V3=s((EEe,yC)=>{"use strict";var OGr=qC();yC.exports=OGr});var U3=s((NEe,bC)=>{"use strict";var SGr="row-major";function AGr(r,e,t,i,n){var a,u;for(a=r-1;a>i;a--)n[a]=t[a];for(a=i;a>=0&&(u=(t[a]+1)%e[a],n[a]=u,!(u>0));a--);for(a-=1;a>=0;a--)n[a]=t[a];return n}function _Gr(r,e,t,i,n){var a,u;for(a=0;a<i;a++)n[a]=t[a];for(a=i;a<r&&(u=(t[a]+1)%e[a],n[a]=u,!(u>0));a++);for(a+=1;a<r;a++)n[a]=t[a];return n}function TGr(r,e,t,i,n){var a=r.length;if(a===0)return null;if(i<0){if(i+=a,i<0)return null}else if(i>=a)return null;return e===SGr?AGr(a,r,t,i,n):_Gr(a,r,t,i,n)}bC.exports=TGr});var EC=s((OEe,wC)=>{"use strict";var IGr=Ze(),LGr=U3();function RGr(r,e,t,i){return LGr(r,e,t,i,IGr(r.length))}wC.exports=RGr});var SC=s((SEe,OC)=>{"use strict";var PGr=b(),NC=EC(),FGr=U3();PGr(NC,"assign",FGr);OC.exports=NC});var IC=s((AEe,TC)=>{"use strict";var G3=b(),MGr=T(),BGr=cr().isPrimitive,jGr=aj(),kGr=vj(),CGr=S(),AC=dn(),VGr=Ze(),UGr=pj(),GGr=Qn(),xGr=V3(),DGr=SC().assign,HGr=C0(),G0=y();function _C(r){var e,t,i,n,a,u,o,f,v,c,l;if(!jGr(r))throw new TypeError(G0("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(n={writable:!1},arguments.length>1){if(e=arguments[1],!MGr(e))throw new TypeError(G0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(CGr(e,"readonly")){if(!BGr(e.readonly))throw new TypeError(G0("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(n.writable=!e.readonly,n.writable&&kGr(r))throw new Error(G0("invalid option. Cannot write to read-only array."))}}if(t=UGr(r),i=t.length,i<2)throw new TypeError("invalid argument. First argument must be an ndarray having at least two dimensions.");return c=GGr(t),c===0&&(u=!0),c/=t[i-1],f=i-2,v=t[f],l=-1,o=VGr(i),o[i-1]=null,a={},G3(a,"next",p),G3(a,"return",g),AC&&G3(a,AC,h),a;function p(){var d,m;return l+=1,u||l>=c?{done:!0}:(d=HGr.apply(null,o),m=(o[f]+1)%v,o[f]=m,m===0&&(o=DGr(t,"row-major",o,f-1,o)),{value:xGr(r,d,!0,n.writable),done:!1})}function g(d){return u=!0,arguments.length?{value:d,done:!0}:{done:!0}}function h(){return _C(r,n)}}TC.exports=_C});var RC=s((_Ee,LC)=>{"use strict";var WGr=IC();LC.exports=WGr});var FC=s((TEe,PC)=>{"use strict";var zGr=typeof String.prototype.trim<"u";PC.exports=zGr});var x3=s((IEe,MC)=>{"use strict";var XGr=String.prototype.trim;MC.exports=XGr});var CC=s((LEe,kC)=>{"use strict";var BC=x3(),JGr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,jC="\u180E";function YGr(){return BC.call(JGr)===""&&BC.call(jC)===jC}kC.exports=YGr});var UC=s((REe,VC)=>{"use strict";var $Gr=vt(),ZGr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function QGr(r){return $Gr(r,ZGr,"$1")}VC.exports=QGr});var xC=s((PEe,GC)=>{"use strict";var KGr=x3();function rxr(r){return KGr.call(r)}GC.exports=rxr});var lt=s((FEe,DC)=>{"use strict";var exr=FC(),txr=CC(),ixr=UC(),nxr=xC(),D3;exr&&txr()?D3=nxr:D3=ixr;DC.exports=D3});var WC=s((MEe,HC)=>{"use strict";var axr=/(?:\s*-\s*)(?=\d+)(\d+)$/;HC.exports=axr});var XC=s((BEe,zC)=>{"use strict";var sxr=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;zC.exports=sxr});var $C=s((jEe,YC)=>{"use strict";var JC=z(),uxr=WC(),oxr=XC();function vxr(r,e,t,i){var n;if(r==="end")return e;if(n=r.match(uxr),n){if(r=e-parseInt(n[1],10),r<0){if(i)return-2;r=0}return r}return n=r.match(oxr),n?(r=parseFloat(n[1]),r<1?i?-2:-1:t&&e>0&&r!==1?JC((e-1)/r):JC(e/r)):-1}YC.exports=vxr});var QC=s((kEe,ZC)=>{"use strict";var fxr=/\s*:\s*/;ZC.exports=fxr});var rV=s((CEe,KC)=>{"use strict";var cxr=/^[-+]?[0-9]+$/;KC.exports=cxr});var tV=s((VEe,eV)=>{"use strict";var lxr=/^end/;eV.exports=lxr});var nV=s((UEe,iV)=>{"use strict";function pxr(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}iV.exports=pxr});var sV=s((GEe,aV)=>{"use strict";function gxr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}aV.exports=gxr});var oV=s((xEe,uV)=>{"use strict";function mxr(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}uV.exports=mxr});var pV=s((DEe,lV)=>{"use strict";var vV=Vi(),dxr=lt(),fV=$C(),hxr=QC(),H3=rV(),cV=tV(),Ui=nV(),ei=sV(),qxr=oV();function yxr(r,e,t){var i,n,a;if(i=dxr(r).split(hxr),n=i.length,n<2||n>3)return Ui();if(n===3)if(a=i[2],a.length===0)i[2]=1;else{if(H3.test(a)===!1)return Ui();if(a=parseInt(a,10),a===0)return qxr();i[2]=a}else i.push(1);if(a=i[0],a.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(cV.test(a)){if(a=fV(a,e,i[2]<0,t),a<0)return a===-2?ei():Ui();i[2]<0&&a>=e&&(a-=1),i[0]=a}else if(H3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0){if(t)return ei();a=0}}else if(a>=e){if(t)return ei();i[2]<0?a=e-1:a=e}i[0]=a}else return Ui();if(a=i[1],a.length===0)i[2]<0?i[1]=null:i[1]=e;else if(cV.test(a)){if(a=fV(a,e,i[2]<0,t),a<0)return a===-2?ei():Ui();i[1]=a}else if(H3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0)if(i[2]>0){if(t)return ei();a=0}else{if(t&&a<-1)return ei();a=null}}else if(a>e){if(t)return ei();a=e}i[1]=a}else return Ui();return e===0?new vV(0,0,i[2]):new vV(i[0],i[1],i[2])}lV.exports=yxr});var mV=s((HEe,gV)=>{"use strict";var bxr=pV();gV.exports=bxr});var hV=s((WEe,dV)=>{"use strict";function wxr(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}dV.exports=wxr});var yV=s((zEe,qV)=>{"use strict";function Exr(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}qV.exports=Exr});var wV=s((XEe,bV)=>{"use strict";function Nxr(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}bV.exports=Nxr});var NV=s((JEe,EV)=>{"use strict";function Oxr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}EV.exports=Oxr});var SV=s((YEe,OV)=>{"use strict";var Sxr=/\s*,\s*/;OV.exports=Sxr});var _V=s(($Ee,AV)=>{"use strict";var Axr=/^[-+]?[0-9]+$/;AV.exports=Axr});var LV=s((ZEe,IV)=>{"use strict";var _xr=lt(),Txr=Vi(),Ixr=C0(),Lxr=mV(),Rxr=hV(),Pxr=yV(),Fxr=wV(),TV=NV(),Mxr=SV(),Bxr=_V();function jxr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(o=e.length,i=_xr(r).split(Mxr),f=i.length,a=!1,n=[],l=0,c=0;c<f;c++){if(v=i[c],v==="..."){if(a)return Rxr();for(a=!0,p=0;p<o-f+1;p++)n.push(new Txr(0,e[l],1)),l+=1;continue}if(u=e[l],Bxr.test(v)){if(v=parseInt(v,10),t){if(v<0){if(u+v<0)return TV()}else if(v>=u)return TV()}l+=1}else{if(v=Lxr(v,u,t),v.code)return v;l+=1}n.push(v)}return n.length!==o?n.length<o?Pxr():Fxr():Ixr.apply(null,n)}IV.exports=jxr});var PV=s((QEe,RV)=>{"use strict";var kxr=LV();RV.exports=kxr});var BV=s((KEe,MV)=>{"use strict";function FV(r,e,t,i,n,a){var u,o,f,v,c;if(a>=e.length)return r.accessors[0](r.data,i);for(f=[],v=e[a],u=t[a],c=0;c<v;c++)o=FV(r,e,t,i,n,a+1),f.push(o),i+=u;return f}MV.exports=FV});var kV=s((rNe,jV)=>{"use strict";var Cxr=yn(),Vxr=BV();function Uxr(r,e,t,i,n){var a;if(e.length===0)return[];for(a=0;a<e.length;a++)if(e[a]===0)return[];return Vxr(Cxr(r),e,t,i,n,0)}jV.exports=Uxr});var VV=s((eNe,CV)=>{"use strict";var Gxr=kV();CV.exports=Gxr});var GV=s((tNe,UV)=>{"use strict";var xxr=V0(),Dxr=U0(),Hxr=j3(),Wxr=y(),zxr=j0(),Xxr=Qn();function Jxr(r,e,t){var i,n,a,u;if(i=e.length,i>0?(a=Xxr(e),u=xxr(e,t)):(a=1,u=[0]),n=Hxr(r,a),n===null)throw new TypeError(Wxr("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new zxr(r,n,e,u,Dxr(e,u),t)}UV.exports=Jxr});var DV=s((iNe,xV)=>{"use strict";var Yxr=GV();xV.exports=Yxr});var WV=s((nNe,HV)=>{"use strict";var be=rr(),$xr=RC(),Zxr=j0(),Qxr=Qn(),Kxr=PV(),rDr=V0(),eDr=V3(),tDr=U0(),iDr=VV(),nDr=DV();function aDr(r){return be(r,"iterRows",$xr),be(r,"ndarray",Zxr),be(r,"numel",Qxr),be(r,"seq2multislice",Kxr),be(r,"shape2strides",rDr),be(r,"slice",eDr),be(r,"strides2offset",tDr),be(r,"toArray",iDr),be(r,"zeros",nDr),r}HV.exports=aDr});var XV=s((aNe,zV)=>{"use strict";var sDr=$e();function uDr(r,e,t,i){sDr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}zV.exports=uDr});var M=s((sNe,JV)=>{"use strict";var oDr=XV();JV.exports=oDr});var $V=s((uNe,YV)=>{"use strict";function vDr(r){return e;function e(){return r}}YV.exports=vDr});var _=s((oNe,ZV)=>{"use strict";var fDr=$V();ZV.exports=fDr});var KV=s((vNe,QV)=>{"use strict";var cDr=L();function lDr(r){return r===0&&1/r===cDr}QV.exports=lDr});var pt=s((fNe,rU)=>{"use strict";var pDr=KV();rU.exports=pDr});var iU=s((cNe,tU)=>{"use strict";var gDr=pt(),eU=E(),W3=L();function mDr(r,e){return eU(r)||eU(e)?NaN:r===W3||e===W3?W3:r===e&&r===0?gDr(r)?r:e:r>e?r:e}tU.exports=mDr});var z3=s((lNe,nU)=>{"use strict";var dDr=iU();nU.exports=dDr});var uU=s((pNe,sU)=>{"use strict";var aU=65535;function hDr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&aU)>>>0,o=(e&aU)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}sU.exports=hDr});var vU=s((gNe,oU)=>{"use strict";var qDr=uU();oU.exports=qDr});var X3=s((mNe,fU)=>{"use strict";function yDr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,g=0;g<r;g++)v(f,p,c(o,l)),l+=t,p+=a;return e}fU.exports=yDr});var pU=s((dNe,lU)=>{"use strict";var cU=yn(),bDr=X3(),J3=8;function wDr(r,e,t,i,n){var a,u,o,f,v,c;if(r<=0)return i;if(o=cU(e),f=cU(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,bDr(r,o,t,a,f,n,u),f.data;if(t===1&&n===1){if(v=r%J3,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<J3)return i;for(c=v;c<r;c+=J3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}lU.exports=wDr});var dU=s((hNe,mU)=>{"use strict";var gU=yn(),EDr=X3(),ea=8;function NDr(r,e,t,i,n,a,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=gU(e),c=gU(n),v.accessorProtocol||c.accessorProtocol)return EDr(r,v,t,i,c,a,u),c.data;if(o=i,f=u,t===1&&a===1){if(l=r%ea,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<ea)return n;for(p=l;p<r;p+=ea)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=ea,f+=ea;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}mU.exports=NDr});var gt=s((qNe,qU)=>{"use strict";var ODr=b(),hU=pU(),SDr=dU();ODr(hU,"ndarray",SDr);qU.exports=hU});var bU=s((yNe,yU)=>{"use strict";function ADr(){}yU.exports=ADr});var EU=s((bNe,wU)=>{"use strict";var _Dr=bU();function TDr(){return _Dr.name==="foo"}wU.exports=TDr});var OU=s((wNe,NU)=>{"use strict";var IDr=EU();NU.exports=IDr});var AU=s((ENe,SU)=>{"use strict";var LDr=I(),RDr=OU(),PDr=y(),FDr=Eo().REGEXP,MDr=RDr();function BDr(r){if(LDr(r)===!1)throw new TypeError(PDr("invalid argument. Must provide a function. Value: `%s`.",r));return MDr?r.name:FDr.exec(r.toString())[1]}SU.exports=BDr});var TU=s((NNe,_U)=>{"use strict";var jDr=AU();_U.exports=jDr});var LU=s((ONe,IU)=>{"use strict";var kDr=li(),CDr=Qr(),VDr=ci(),UDr=fi(),GDr=Ut(),xDr=Qe(),DDr=pr(),HDr=Zr(),WDr=lr(),zDr=[WDr,HDr,xDr,DDr,UDr,GDr,kDr,CDr,VDr];IU.exports=zDr});var RU=s((SNe,XDr)=>{XDr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var kU=s((ANe,jU)=>{"use strict";var JDr=ce(),YDr=TU(),MU=zt(),$Dr=Io(),ZDr=lr(),PU=LU(),FU=RU(),x0=$Dr()?MU(ZDr):BU;x0=YDr(x0)==="TypedArray"?x0:BU;function BU(){}function QDr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof x0)return!0;for(t=0;t<PU.length;t++)if(r instanceof PU[t])return!0;for(;r;){for(e=JDr(r),t=0;t<FU.length;t++)if(FU[t]===e)return!0;r=MU(r)}return!1}jU.exports=QDr});var VU=s((_Ne,CU)=>{"use strict";var KDr=kU();CU.exports=KDr});var GU=s((TNe,UU)=>{"use strict";var rHr=bi(),eHr=Oi(),tHr=[eHr,rHr];UU.exports=tHr});var xU=s((INe,iHr)=>{iHr.exports=["Complex64Array","Complex128Array"]});var zU=s((LNe,WU)=>{"use strict";var nHr=ce(),aHr=zt(),DU=GU(),HU=xU();function sHr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<DU.length;t++)if(r instanceof DU[t])return!0;for(;r;){for(e=nHr(r),t=0;t<HU.length;t++)if(HU[t]===e)return!0;r=aHr(r)}return!1}WU.exports=sHr});var JU=s((RNe,XU)=>{"use strict";var uHr=zU();XU.exports=uHr});var $U=s((PNe,YU)=>{"use strict";var oHr=y();function vHr(r,e){if(typeof e!="function")throw new TypeError(oHr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}YU.exports=vHr});var QU=s((FNe,ZU)=>{"use strict";var fHr=$U();ZU.exports=fHr});var rG=s((MNe,KU)=>{"use strict";var cHr=li(),lHr=Qr(),pHr=ci(),gHr=fi(),mHr=Ut(),dHr=Qe(),hHr=pr(),qHr=Zr(),yHr=lr(),bHr=bi(),wHr=Oi(),EHr=[[yHr,"Float64Array"],[qHr,"Float32Array"],[dHr,"Int32Array"],[hHr,"Uint32Array"],[gHr,"Int16Array"],[mHr,"Uint16Array"],[cHr,"Int8Array"],[lHr,"Uint8Array"],[pHr,"Uint8ClampedArray"],[bHr,"Complex64Array"],[wHr,"Complex128Array"]];KU.exports=EHr});var tG=s((BNe,eG)=>{"use strict";var NHr=QU(),OHr=ce(),SHr=zt(),Gi=rG();function AHr(r){var e,t;for(t=0;t<Gi.length;t++)if(NHr(r,Gi[t][0]))return Gi[t][1];for(;r;){for(e=OHr(r),t=0;t<Gi.length;t++)if(e===Gi[t][1])return Gi[t][1];r=SHr(r)}}eG.exports=AHr});var nG=s((jNe,iG)=>{"use strict";var _Hr=VU(),THr=JU(),IHr=mi(),LHr=di(),RHr=y(),PHr=tG();function FHr(r){var e,t,i;if(_Hr(r))e=r;else if(THr(r))r.BYTES_PER_ELEMENT===8?e=IHr(r,0):e=LHr(r,0);else throw new TypeError(RHr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:PHr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}iG.exports=FHr});var B=s((kNe,aG)=>{"use strict";var MHr=nG();aG.exports=MHr});var Y3=s((CNe,sG)=>{"use strict";var BHr=oi(),jHr=z(),kHr=BHr-1;function CHr(){var r=jHr(1+kHr*Math.random());return r>>>0}sG.exports=CHr});var iv=s((VNe,hG)=>{"use strict";var we=b(),mt=R(),uG=M(),$3=S(),VHr=T(),UHr=Vr(),oG=le(),GHr=cr().isPrimitive,vG=ee().isPrimitive,gG=Bi(),mG=oi(),Or=pr(),xHr=z3(),tv=vU(),xi=gt(),DHr=B(),Ar=y(),fG=Y3(),ur=624,Z3=397,cG=mG>>>0,HHr=19650218>>>0,Q3=2147483648>>>0,K3=2147483647>>>0,WHr=1812433253>>>0,zHr=1664525>>>0,XHr=1566083941>>>0,JHr=2636928640>>>0,YHr=4022730752>>>0,$Hr=2567483615>>>0,rv=[0>>>0,$Hr>>>0],dG=1/(gG+1),ZHr=67108864>>>0,QHr=2147483648>>>0,ev=1>>>0,KHr=gG*dG,D0=1,H0=3,dt=2,ht=ur+3,Sr=ur+5,ta=ur+6;function lG(r,e){var t;return e?t="option":t="argument",r.length<ta+1?new RangeError(Ar("invalid %s. `state` array has insufficient length.",t)):r[0]!==D0?new RangeError(Ar("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,D0,r[0])):r[1]!==H0?new RangeError(Ar("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,H0,r[1])):r[dt]!==ur?new RangeError(Ar("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ur,r[dt])):r[ht]!==1?new RangeError(Ar("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[ht])):r[Sr]!==r.length-ta?new RangeError(Ar("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ta,r[Sr])):null}function pG(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=tv(t,WHr)+i>>>0;return r}function rWr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=xHr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=tv(n,zHr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=tv(n,XHr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=QHr,r}function eWr(r){var e,t,i,n;for(n=ur-Z3,t=0;t<n;t++)e=r[t]&Q3|r[t+1]&K3,r[t]=r[t+Z3]^e>>>1^rv[e&ev];for(i=ur-1;t<i;t++)e=r[t]&Q3|r[t+1]&K3,r[t]=r[t-n]^e>>>1^rv[e&ev];return e=r[i]&Q3|r[0]&K3,r[i]=r[Z3-1]^e>>>1^rv[e&ev],r}function tWr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!VHr(r))throw new TypeError(Ar("invalid argument. Options argument must be an object. Value: `%s`.",r));if($3(r,"copy")&&(i.copy=r.copy,!GHr(r.copy)))throw new TypeError(Ar("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if($3(r,"state")){if(t=r.state,i.state=!0,!oG(t))throw new TypeError(Ar("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=lG(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),xi(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,t[Sr])}if(n===void 0)if($3(r,"seed"))if(n=r.seed,i.seed=!0,vG(n)){if(n>cG)throw new RangeError(Ar("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(UHr(n)===!1||n.length<1)throw new TypeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!vG(n))throw new TypeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>cG)throw new RangeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new Or(ta+a),e[0]=D0,e[1]=H0,e[dt]=ur,e[ht]=1,e[ht+1]=ur,e[Sr]=a,xi.ndarray(a,n,1,0,e,1,Sr+1),t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,a),t=pG(t,ur,HHr),t=rWr(t,ur,n,a)}else n=fG()>>>0}else n=fG()>>>0;return t===void 0&&(e=new Or(ta+1),e[0]=D0,e[1]=H0,e[dt]=ur,e[ht]=1,e[ht+1]=ur,e[Sr]=1,e[Sr+1]=n,t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,1),t=pG(t,ur,n)),we(h,"NAME","mt19937"),mt(h,"seed",o),mt(h,"seedLength",f),uG(h,"state",l,p),mt(h,"stateLength",v),mt(h,"byteLength",c),we(h,"toJSON",g),we(h,"MIN",0),we(h,"MAX",mG),we(h,"normalized",d),we(d,"NAME",h.NAME),mt(d,"seed",o),mt(d,"seedLength",f),uG(d,"state",l,p),mt(d,"stateLength",v),mt(d,"byteLength",c),we(d,"toJSON",g),we(d,"MIN",0),we(d,"MAX",KHr),h;function o(){var m=e[Sr];return xi(m,n,1,new Or(m),1)}function f(){return e[Sr]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return xi(m,e,1,new Or(m),1)}function p(m){var q;if(!oG(m))throw new TypeError(Ar("invalid argument. Must provide a Uint32Array. Value: `%s`.",m));if(q=lG(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?xi(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new Or(m.length)),xi(m.length,m,1,e,1)),t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,e[Sr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=DHr(e),m.params=[],m}function h(){var m,q;return q=e[ht+1],q>=ur&&(t=eWr(t),q=0),m=t[q],e[ht+1]=q+1,m^=m>>>11,m^=m<<7&JHr,m^=m<<15&YHr,m^=m>>>18,m>>>0}function d(){var m=h()>>>5,q=h()>>>6;return(m*ZHr+q)*dG}}hG.exports=tWr});var yG=s((UNe,qG)=>{"use strict";var iWr=iv(),nWr=Y3(),aWr=iWr({seed:nWr()});qG.exports=aWr});var J=s((GNe,wG)=>{"use strict";var sWr=b(),bG=yG(),uWr=iv();sWr(bG,"factory",uWr);wG.exports=bG});var SG=s((xNe,OG)=>{"use strict";var EG=k().isPrimitive,nv=y(),NG=vr();function oWr(r,e){return!EG(r)||NG(r)?new TypeError(nv("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!EG(e)||NG(e)?new TypeError(nv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(nv("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}OG.exports=oWr});var _G=s((DNe,AG)=>{"use strict";var vWr=D(),fWr=Kt(),cWr=q0();function lWr(r,e,t){return e+vWr(fWr(cWr*r()),2)*(t-e)}AG.exports=lWr});var av=s((HNe,BG)=>{"use strict";var Ee=b(),W0=R(),TG=M(),IG=T(),LG=I(),RG=S(),PG=_(),pWr=C(),z0=J().factory,FG=E(),gWr=B(),X0=y(),mWr=SG(),MG=_G();function dWr(){var r,e,t,i,n,a;if(arguments.length===0)e=z0();else if(arguments.length===1){if(r=arguments[0],!IG(r))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(RG(r,"prng")){if(!LG(r.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=z0(r)}else{if(n=arguments[0],a=arguments[1],i=mWr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!IG(r))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(RG(r,"prng")){if(!LG(r.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=z0(r)}else e=z0()}return n===void 0?t=h:t=g,Ee(t,"NAME","arcsine"),r&&r.prng?(Ee(t,"seed",null),Ee(t,"seedLength",null),TG(t,"state",PG(null),pWr),Ee(t,"stateLength",null),Ee(t,"byteLength",null),Ee(t,"toJSON",PG(null)),Ee(t,"PRNG",e)):(W0(t,"seed",u),W0(t,"seedLength",o),TG(t,"state",c,l),W0(t,"stateLength",f),W0(t,"byteLength",v),Ee(t,"toJSON",p),Ee(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=gWr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return MG(e,n,a)}function h(d,m){return FG(d)||FG(m)||d>=m?NaN:MG(e,d,m)}}BG.exports=dWr});var kG=s((WNe,jG)=>{"use strict";var hWr=av(),qWr=hWr();jG.exports=qWr});var UG=s((zNe,VG)=>{"use strict";var yWr=b(),CG=kG(),bWr=av();yWr(CG,"factory",bWr);VG.exports=CG});var sv=s((XNe,zG)=>{"use strict";var Ne=b(),J0=R(),GG=M(),xG=T(),wWr=wn().isPrimitive,DG=I(),HG=S(),WG=_(),EWr=C(),Y0=J().factory,NWr=E(),OWr=B(),$0=y();function SWr(){var r,e,t,i;if(arguments.length===0)e=Y0();else if(arguments.length===1&&xG(arguments[0]))if(r=arguments[0],HG(r,"prng")){if(!DG(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Y0(r);else{if(i=arguments[0],!wWr(i))throw new TypeError($0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!xG(r))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(HG(r,"prng")){if(!DG(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Y0(r)}else e=Y0()}return i===void 0?t=p:t=l,Ne(t,"NAME","bernoulli"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),GG(t,"state",WG(null),EWr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",WG(null)),Ne(t,"PRNG",e)):(J0(t,"seed",n),J0(t,"seedLength",a),GG(t,"state",f,v),J0(t,"stateLength",u),J0(t,"byteLength",o),Ne(t,"toJSON",c),Ne(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=OWr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return e()<=i?1:0}function p(g){return NWr(g)||g<0||g>1?NaN:e()<=g?1:0}}zG.exports=SWr});var JG=s((JNe,XG)=>{"use strict";var AWr=sv(),_Wr=AWr();XG.exports=_Wr});var ZG=s((YNe,$G)=>{"use strict";var TWr=b(),YG=JG(),IWr=sv();TWr(YG,"factory",IWr);$G.exports=YG});var ex=s(($Ne,rx)=>{"use strict";var LWr=U(),QG=sr(),RWr=P(),KG=.00991256303526217;function PWr(r,e){var t,i,n;for(i=QG(-.5*e*e),t=[],t.push(KG/i),t.push(e),n=2;n<r;n++)t[n]=LWr(-2*RWr(KG/t[n-1]+i)),i=QG(-.5*t[n]*t[n]);return t.push(0),t}rx.exports=PWr});var ix=s((ZNe,tx)=>{"use strict";function FWr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}tx.exports=FWr});var sx=s((QNe,ax)=>{"use strict";var nx=P();function MWr(r,e,t){var i,n;do i=nx(r())/e,n=nx(r());while(-2*n<i*i);return t?i-e:e-i}ax.exports=MWr});var fx=s((KNe,vx)=>{"use strict";var BWr=Y(),ux=sr(),jWr=ex(),kWr=ix(),CWr=sx(),VWr=128,ox=3.442619855899,ti=jWr(VWr,ox),UWr=kWr(ti),GWr=127;function xWr(r,e){return t;function t(){for(var i,n,a,u,o,f,v;;){if(o=2*r()-1,f=e()&GWr,BWr(o)<UWr[f])return o*ti[f];if(f===0)return CWr(r,ox,o<0);if(u=o*ti[f],a=u*u,v=f+1,i=ux(-.5*(ti[f]*ti[f]-a)),n=ux(-.5*(ti[v]*ti[v]-a)),n+r()*(i-n)<1)return u}}}vx.exports=xWr});var ov=s((rOe,px)=>{"use strict";var qt=b(),Z0=R(),cx=M(),DWr=I(),HWr=T(),WWr=cr().isPrimitive,Q0=S(),zWr=le(),uv=J().factory,lx=_(),XWr=C(),JWr=z(),YWr=oi(),$Wr=B(),ia=y(),ZWr=fx();function QWr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!HWr(r))throw new TypeError(ia("invalid argument. Must provide an object. Value: `%s`.",r));if(Q0(r,"copy")&&(n.copy=r.copy,!WWr(r.copy)))throw new TypeError(ia("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Q0(r,"prng")){if(!DWr(r.prng))throw new TypeError(ia("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Q0(r,"state")){if(n.state=r.state,!zWr(r.state))throw new TypeError(ia("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Q0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(ia("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=uv(n),e=t.normalized):(t=uv({seed:JWr(1+YWr*e()),copy:n.copy}),n.seed=null):(t=uv(n),e=t.normalized),i=ZWr(e,t),qt(i,"NAME","improved-ziggurat"),n.seed===null?(qt(i,"seed",null),qt(i,"seedLength",null)):(Z0(i,"seed",a),Z0(i,"seedLength",u)),r&&r.prng?(cx(i,"state",lx(null),XWr),qt(i,"stateLength",null),qt(i,"byteLength",null),qt(i,"toJSON",lx(null))):(cx(i,"state",v,c),Z0(i,"stateLength",o),Z0(i,"byteLength",f),qt(i,"toJSON",l)),qt(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=$Wr(t.state),p.params=[],p}}px.exports=QWr});var mx=s((eOe,gx)=>{"use strict";var KWr=ov(),rzr=KWr();gx.exports=rzr});var yt=s((tOe,hx)=>{"use strict";var ezr=b(),dx=mx(),tzr=ov();ezr(dx,"factory",tzr);hx.exports=dx});var yx=s((iOe,qx)=>{"use strict";var izr=I(),nzr=izr(Object.assign);qx.exports=nzr});var wx=s((nOe,bx)=>{"use strict";var azr=Object.assign;bx.exports=azr});var Nx=s((aOe,Ex)=>{"use strict";var szr=typeof Object.getOwnPropertySymbols<"u";Ex.exports=szr});var Ax=s((sOe,Sx)=>{"use strict";var Ox=Si(),uzr=Ox.getOwnPropertySymbols;function ozr(r){return uzr(Ox(r))}Sx.exports=ozr});var Tx=s((uOe,_x)=>{"use strict";function vzr(){return[]}_x.exports=vzr});var Lx=s((oOe,Ix)=>{"use strict";var fzr=Nx(),czr=Ax(),lzr=Tx(),vv;fzr?vv=czr:vv=lzr;Ix.exports=vv});var Px=s((vOe,Rx)=>{"use strict";var pzr=Ti(),gzr=Lx(),mzr=Nn();function dzr(r){var e,t,i;for(e=pzr(r),t=gzr(r),i=0;i<t.length;i++)mzr(r,t[i])&&e.push(t[i]);return e}Rx.exports=dzr});var Mx=s((fOe,Fx)=>{"use strict";var hzr=Px();Fx.exports=hzr});var kx=s((cOe,jx)=>{"use strict";var qzr=Mx(),Bx=Si(),yzr=y();function bzr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(yzr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=Bx(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=qzr(Bx(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}jx.exports=bzr});var na=s((lOe,Cx)=>{"use strict";var wzr=yx(),Ezr=wx(),Nzr=kx(),fv;wzr?fv=Ezr:fv=Nzr;Cx.exports=fv});var xx=s((pOe,Gx)=>{"use strict";var Vx=W().isPrimitive,Ux=y();function Ozr(r,e){return Vx(r)?Vx(e)?null:new TypeError(Ux("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Ux("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Gx.exports=Ozr});var Xx=s((gOe,zx)=>{"use strict";var Dx=P(),Hx=U(),Szr=D(),Wx=1/3;function Azr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(t<1?(f=t+1-Wx,o=1/Hx(9*f),c=Szr(r(),1/t)):(f=t-Wx,o=1/Hx(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,u=.5*n+f*(1-p+Dx(p)),l=r(),(l<a||Dx(l)<u)&&(i=!1)}return f*p*c}zx.exports=Azr});var $x=s((mOe,Yx)=>{"use strict";var cv=D(),Jx=P();function _zr(r,e,t){var i,n,a,u,o,f,v,c;for(a=t-1,o=cv(a+a,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=cv(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*cv(n/(8*t-8),2),f<c&&(c=a*Jx(4*v*(1-v)),c+=u*u/2,c>=Jx(f)&&(i=!1))));return v}Yx.exports=_zr});var Qx=s((dOe,Zx)=>{"use strict";var Tzr=D(),K0=P();function Izr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h;for(o=t-1,f=i-1,v=o+f,c=v*K0(v),u=o/v,n=.5/Tzr(v,.5),a=!0;a===!0;)l=e(),g=u+l*n,g>=0&&g<=1&&(p=r(),h=o*K0(g/o),h+=f*K0((1-g)/f),h+=c+.5*l*l,h>=K0(p)&&(a=!1));return g}Zx.exports=Izr});var eD=s((hOe,rD)=>{"use strict";var lv=sr(),Kx=D(),pv=P();function Lzr(r,e,t){for(var i,n,a,u,o,f,v;;)if(u=r(),o=r(),f=Kx(u,1/e),v=Kx(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=pv(u)/e,n=pv(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),lv(i-pv(lv(i)+lv(n))))}rD.exports=Lzr});var nD=s((qOe,iD)=>{"use strict";var tD=Xx(),Rzr=$x(),Pzr=Qx(),Fzr=eD();function Mzr(r,e,t,i){var n,a;return t===i&&t>1.5?Rzr(r,e,t):t>1&&i>1?Pzr(r,e,t,i):t<1&&i<1?Fzr(r,t,i):(n=tD(r,e,t),a=tD(r,e,i),n/(n+a))}iD.exports=Mzr});var hv=s((yOe,gD)=>{"use strict";var Oe=b(),rs=R(),aD=M(),sD=T(),uD=cr().isPrimitive,oD=I(),Di=S(),vD=_(),Bzr=C(),fD=yt().factory,es=J().factory,cD=E(),gv=gt(),mv=pr(),dv=le(),lD=na(),jzr=B(),Se=y(),kzr=xx(),pD=nD();function Czr(){var r,e,t,i,n,a,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=es(n);else if(arguments.length===1){if(n=arguments[0],!sD(n))throw new TypeError(Se("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Di(n,"copy")&&!uD(n.copy))throw new TypeError(Se("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Di(n,"prng")){if(!oD(n.prng))throw new TypeError(Se("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Di(n,"state")&&!dv(n.state))throw new TypeError(Se("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=lD({},n),n.copy===!1?o=!1:n.state&&(n.state=gv(n.state.length,n.state,1,new mv(n.state.length),1)),n.copy=!1,a=es(n)}}else{if(t=arguments[0],i=arguments[1],f=kzr(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!sD(n))throw new TypeError(Se("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Di(n,"copy")&&!uD(n.copy))throw new TypeError(Se("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Di(n,"prng")){if(!oD(n.prng))throw new TypeError(Se("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Di(n,"state")&&!dv(n.state))throw new TypeError(Se("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=lD({},n),n.copy===!1?o=!1:n.state&&(n.state=gv(n.state.length,n.state,1,new mv(n.state.length),1)),n.copy=!1,a=es(n)}}else n={copy:!1},a=es(n)}return n&&n.prng?e=fD({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=fD({state:r,copy:!1})),t===void 0?u=q:u=m,Oe(u,"NAME","beta"),n&&n.prng?(Oe(u,"seed",null),Oe(u,"seedLength",null),aD(u,"state",vD(null),Bzr),Oe(u,"stateLength",null),Oe(u,"byteLength",null),Oe(u,"toJSON",vD(null)),Oe(u,"PRNG",a)):(rs(u,"seed",v),rs(u,"seedLength",c),aD(u,"state",g,h),rs(u,"stateLength",l),rs(u,"byteLength",p),Oe(u,"toJSON",d),Oe(u,"PRNG",a),a=a.normalized),u;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function g(){return a.state}function h(N){if(!dv(N))throw new TypeError(Se("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=gv(N.length,N,1,new mv(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=jzr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function m(){return pD(a,e,t,i)}function q(N,O){return cD(N)||cD(O)||N<=0||O<=0?NaN:pD(a,e,N,O)}}gD.exports=Czr});var dD=s((bOe,mD)=>{"use strict";var Vzr=hv(),Uzr=Vzr();mD.exports=Uzr});var yD=s((wOe,qD)=>{"use strict";var Gzr=b(),hD=dD(),xzr=hv();Gzr(hD,"factory",xzr);qD.exports=hD});var ND=s((EOe,ED)=>{"use strict";var bD=W().isPrimitive,wD=y();function Dzr(r,e){return bD(r)?bD(e)?null:new TypeError(wD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(wD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}ED.exports=Dzr});var AD=s((NOe,SD)=>{"use strict";var OD=P();function Hzr(r,e,t,i,n){var a,u,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+OD(l)),c=r(),(c<o||OD(c)<f)&&(a=!1)}return 1/t*i*l}SD.exports=Hzr});var Ev=s((OOe,jD)=>{"use strict";var Ae=b(),ts=R(),_D=M(),TD=T(),qv=le(),ID=cr().isPrimitive,LD=I(),Hi=S(),RD=_(),Wzr=C(),PD=yt().factory,is=J().factory,FD=E(),yv=U(),MD=D(),bv=gt(),wv=pr(),zzr=B(),BD=na(),_e=y(),Xzr=ND(),ns=AD(),as=1/3;function Jzr(){var r,e,t,i,n,a,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=is(n);else if(arguments.length===1){if(n=arguments[0],!TD(n))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Hi(n,"copy")&&!ID(n.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Hi(n,"prng")){if(!LD(n.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Hi(n,"state")&&!qv(n.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=BD({},n),n.copy===!1?o=!1:n.state&&(n.state=bv(n.state.length,n.state,1,new wv(n.state.length),1)),n.copy=!1,a=is(n)}}else{if(e=arguments[0],i=arguments[1],f=Xzr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!TD(n))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Hi(n,"copy")&&!ID(n.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Hi(n,"prng")){if(!LD(n.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Hi(n,"state")&&!qv(n.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=BD({},n),n.copy===!1?o=!1:n.state&&(n.state=bv(n.state.length,n.state,1,new wv(n.state.length),1)),n.copy=!1,a=is(n)}}else n={copy:!1},a=is(n)}return n&&n.prng?t=PD({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=PD({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-as):(u=O,c=e+1-as),v=1/yv(9*c)),Ae(u,"NAME","gamma"),n&&n.prng?(Ae(u,"seed",null),Ae(u,"seedLength",null),_D(u,"state",RD(null),Wzr),Ae(u,"stateLength",null),Ae(u,"byteLength",null),Ae(u,"toJSON",RD(null)),Ae(u,"PRNG",a)):(ts(u,"seed",l),ts(u,"seedLength",p),_D(u,"state",d,m),ts(u,"stateLength",g),ts(u,"byteLength",h),Ae(u,"toJSON",q),Ae(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function g(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function m(A){if(!qv(A))throw new TypeError(_e("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));o&&(A=bv(A.length,A,1,new wv(A.length),1)),a.state=A}function q(){var A={};return A.type="PRNG",A.name=u.NAME,A.state=zzr(a.state),e===void 0?A.params=[]:A.params=[e,i],A}function N(){return ns(a,t,i,c,v)}function O(){return ns(a,t,i,c,v)*MD(a(),1/e)}function F(A,H){var K,G;return FD(A)||FD(H)||A<=0||H<=0?NaN:A<1?(G=A+1-as,K=1/yv(9*G),ns(a,t,H,G,K)*MD(a(),1/A)):(G=A-as,K=1/yv(9*G),ns(a,t,H,G,K))}}jD.exports=Jzr});var CD=s((SOe,kD)=>{"use strict";var Yzr=Ev(),$zr=Yzr();kD.exports=$zr});var Wi=s((AOe,UD)=>{"use strict";var Zzr=b(),VD=CD(),Qzr=Ev();Zzr(VD,"factory",Qzr);UD.exports=VD});var HD=s((_Oe,DD)=>{"use strict";var GD=W().isPrimitive,xD=y();function Kzr(r,e){return GD(r)?GD(e)?null:new TypeError(xD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(xD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}DD.exports=Kzr});var zD=s((TOe,WD)=>{"use strict";function rXr(r,e,t){return r(e,1)/r(t,1)}WD.exports=rXr});var Nv=s((IOe,KD)=>{"use strict";var bt=b(),ss=R(),XD=M(),JD=T(),YD=_(),eXr=C(),us=Wi().factory,$D=E(),tXr=B(),ZD=y(),iXr=HD(),QD=zD();function nXr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=us();else if(arguments.length===1){if(i=arguments[0],!JD(i))throw new TypeError(ZD("invalid argument. Options argument must be an object. Value: `%s`.",i));r=us(i)}else{if(e=arguments[0],t=arguments[1],u=iXr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!JD(i))throw new TypeError(ZD("invalid argument. Options argument must be an object. Value: `%s`.",i));r=us(i)}else r=us()}return e===void 0?a=d:a=h,n=r.PRNG,bt(a,"NAME","betaprime"),i&&i.prng?(bt(a,"seed",null),bt(a,"seedLength",null),XD(a,"state",YD(null),eXr),bt(a,"stateLength",null),bt(a,"byteLength",null),bt(a,"toJSON",YD(null))):(ss(a,"seed",o),ss(a,"seedLength",f),XD(a,"state",l,p),ss(a,"stateLength",v),ss(a,"byteLength",c),bt(a,"toJSON",g)),bt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=tXr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return QD(r,e,t)}function d(m,q){return $D(m)||$D(q)||m<=0||q<=0?NaN:QD(r,m,q)}}KD.exports=nXr});var eH=s((LOe,rH)=>{"use strict";var aXr=Nv(),sXr=aXr();rH.exports=sXr});var nH=s((ROe,iH)=>{"use strict";var uXr=b(),tH=eH(),oXr=Nv();uXr(tH,"factory",oXr);iH.exports=tH});var sH=s((POe,aH)=>{"use strict";var vXr=z();function fXr(r){return vXr(r)===r&&r>0}aH.exports=fXr});var Ov=s((FOe,uH)=>{"use strict";var cXr=sH();uH.exports=cXr});var vH=s((MOe,oH)=>{"use strict";function lXr(r){return r>=0&&r<=1}oH.exports=lXr});var cH=s((BOe,fH)=>{"use strict";var pXr=vH();fH.exports=pXr});var gH=s((jOe,pH)=>{"use strict";var gXr=ee().isPrimitive,mXr=wn().isPrimitive,lH=y();function dXr(r,e){return gXr(r)?mXr(e)?null:new TypeError(lH("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(lH("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}pH.exports=dXr});var dH=s((kOe,mH)=>{"use strict";function hXr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}mH.exports=hXr});var qH=s((COe,hH)=>{"use strict";var qXr=E();function yXr(r){return r===0||qXr(r)?r:r<0?-1:1}hH.exports=yXr});var os=s((VOe,yH)=>{"use strict";var bXr=qH();yH.exports=bXr});var wH=s((UOe,bH)=>{"use strict";var wXr=D(),EXr=1/12,NXr=1/360,OXr=1/1260;function SXr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=wXr(r,2),(EXr-(NXr-OXr/e)/e)/r}}bH.exports=SXr});var NH=s((GOe,EH)=>{"use strict";var Sv=z(),AXr=os(),_Xr=U(),Av=Y(),vs=P(),fs=wH(),TXr=1/6;function IXr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,H,K,G,Fr,Mr,or,kt;for(H=Sv((e+1)*t),v=e-H+1,K=1-t,G=t/K,c=(e+1)*G,u=e*t*K,a=_Xr(u),m=1.15+2.53*a,d=-.0873+.0248*m+.01*t,q=e*t+.5,i=(2.83+5.1/m)*a,h=.92-4.2/m,n=.86*h,O=(H+.5)*vs((H+1)/(G*v)),O+=fs(H)+fs(e-H);;){if(or=r(),or<=n)return Mr=or/h-.43,G=Mr*(2*d/(.5-Av(Mr))+m)+q,Sv(G);if(or>=h?Mr=r()-.5:(Mr=or/h-.93,Mr=AXr(Mr)*.5-Mr,or=h*r()),l=.5-Av(Mr),A=Sv(Mr*(2*d/l+m)+q),!(A<0||A>e))if(or=or*i/(d/(l*l)+m),p=Av(A-H),p>15){if(or=vs(or),o=p/u,f=(p/3+.625)*p,f+=TXr,f/=u,o*=f+.5,Fr=-(p*p)/(2*u),or<Fr-o||or<=Fr+o&&(g=e-A+1,kt=O+(e+1)*vs(v/g),kt+=(A+.5)*vs(g*G/(A+1)),kt+=-(fs(A)+fs(e-A)),or<=kt))return A}else{if(N=1,H<A)for(F=H;F<=A;F++)N*=c/F-G;else if(H>A)for(F=A;F<=H;F++)or*=c/F-G;if(or<=N)return A}}}EH.exports=IXr});var AH=s((xOe,SH)=>{"use strict";var LXr=dH(),RXr=NH();function OH(r,e,t){return t>.5?e-OH(r,e,1-t):e*t<10?LXr(r,e,t):RXr(r,e,t)}SH.exports=OH});var _v=s((DOe,MH)=>{"use strict";var Te=b(),cs=R(),_H=M(),TH=T(),IH=I(),LH=S(),RH=_(),PXr=C(),PH=E(),FXr=Ov(),MXr=cH(),ls=J().factory,BXr=B(),ps=y(),jXr=gH(),FH=AH();function kXr(){var r,e,t,i,n,a;if(arguments.length===0)e=ls();else if(arguments.length===1){if(r=arguments[0],!TH(r))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LH(r,"prng")){if(!IH(r.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ls(r)}else{if(n=arguments[0],a=arguments[1],i=jXr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!TH(r))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LH(r,"prng")){if(!IH(r.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ls(r)}else e=ls()}return n===void 0?t=h:t=g,Te(t,"NAME","binomial"),r&&r.prng?(Te(t,"seed",null),Te(t,"seedLength",null),_H(t,"state",RH(null),PXr),Te(t,"stateLength",null),Te(t,"byteLength",null),Te(t,"toJSON",RH(null)),Te(t,"PRNG",e)):(cs(t,"seed",u),cs(t,"seedLength",o),_H(t,"state",c,l),cs(t,"stateLength",f),cs(t,"byteLength",v),Te(t,"toJSON",p),Te(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=BXr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return FH(e,n,a)}function h(d,m){return PH(d)||PH(m)||!FXr(d)||!MXr(m)?NaN:FH(e,d,m)}}MH.exports=kXr});var jH=s((HOe,BH)=>{"use strict";var CXr=_v(),VXr=CXr();BH.exports=VXr});var VH=s((WOe,CH)=>{"use strict";var UXr=b(),kH=jH(),GXr=_v();UXr(kH,"factory",GXr);CH.exports=kH});var GH=s((zOe,UH)=>{"use strict";var xXr=U(),DXr=P(),HXr=Kt(),WXr=Qt(),zXr=ot();function XXr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=xXr(-2*DXr(n)),o=zXr*a,t=u*WXr(o),e=!1,u*HXr(o)}return e=!0,t}}UH.exports=XXr});var DH=s((XOe,xH)=>{"use strict";var JXr=U(),YXr=P(),$Xr=Qt(),ZXr=Cr(),QXr=$Xr(ZXr);function KXr(r){var e=JXr(-2*YXr(r));return e*QXr}xH.exports=KXr});var WH=s((JOe,HH)=>{"use strict";var rJr=U(),eJr=P(),tJr=Qt(),iJr=ot();function nJr(r){var e=rJr(-2*eJr(r)),t=iJr*r;return e*tJr(t)}HH.exports=nJr});var Tv=s((YOe,YH)=>{"use strict";var Dr=b(),gs=R(),zH=M(),aJr=T(),sJr=I(),uJr=cr().isPrimitive,aa=S(),oJr=le(),XH=J().factory,JH=_(),vJr=C(),fJr=B(),sa=y(),cJr=GH(),lJr=DH(),pJr=WH();function gJr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!aJr(r))throw new TypeError(sa("invalid argument. Must provide an object. Value: `%s`.",r));if(aa(r,"copy")&&(n.copy=r.copy,!uJr(r.copy)))throw new TypeError(sa("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(aa(r,"prng")){if(!sJr(r.prng))throw new TypeError(sa("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(aa(r,"state")){if(n.state=r.state,!oJr(r.state))throw new TypeError(sa("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(aa(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(sa("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=XH(n),e=i.normalized):n.seed=null:(i=XH(n),e=i.normalized),t=cJr(e),Dr(t,"NAME","box-muller"),n.seed===null?(Dr(t,"seed",null),Dr(t,"seedLength",null)):(gs(t,"seed",a),gs(t,"seedLength",u)),r&&r.prng?(zH(t,"state",JH(null),vJr),Dr(t,"stateLength",null),Dr(t,"byteLength",null),Dr(t,"toJSON",JH(null))):(zH(t,"state",v,c),gs(t,"stateLength",o),gs(t,"byteLength",f),Dr(t,"toJSON",l)),Dr(t,"PRNG",e),aa(e,"MIN")?(Dr(t,"MIN",lJr(e.MIN)),Dr(t,"MAX",pJr(e.MIN))):(Dr(t,"MIN",null),Dr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=fJr(i.state),p.params=[],p}}YH.exports=gJr});var ZH=s(($Oe,$H)=>{"use strict";var mJr=Tv(),dJr=mJr();$H.exports=dJr});var rW=s((ZOe,KH)=>{"use strict";var hJr=b(),QH=ZH(),qJr=Tv();hJr(QH,"factory",qJr);KH.exports=QH});var iW=s((QOe,tW)=>{"use strict";var yJr=k().isPrimitive,bJr=W().isPrimitive,eW=y(),wJr=vr();function EJr(r,e){return!yJr(r)||wJr(r)?new TypeError(eW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):bJr(e)?null:new TypeError(eW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}tW.exports=EJr});var aW=s((KOe,nW)=>{"use strict";function NJr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}nW.exports=NJr});var uW=s((rSe,sW)=>{"use strict";function OJr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}sW.exports=OJr});var fW=s((eSe,vW)=>{"use strict";var SJr=ar(),oW=ge(),AJr=aW(),_Jr=uW(),TJr=.7853981633974483,IJr=3061616997868383e-32,LJr=.3333333333333341,RJr=2147483647;function PJr(r,e,t){var i,n,a,u,o,f,v,c,l;return i=SJr(r),n=i&RJr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=TJr-r,c=IJr-e,r=l+c,e=0),l=r*r,c=l*l,u=AJr(c),v=l*_Jr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=LJr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=oW(c,0),v=u-(l-r),a=-1/c,f=oW(a,0),o=1+f*l,f+a*(o+f*v))}vW.exports=PJr});var lW=s((tSe,cW)=>{"use strict";var FJr=fW();cW.exports=FJr});var mW=s((iSe,gW)=>{"use strict";var MJr=ar(),pW=lW(),BJr=kn(),Iv=[0,0],jJr=2147483647,kJr=1072243195,CJr=2146435072,VJr=1044381696;function UJr(r){var e,t;return e=MJr(r),e&=jJr,e<=kJr?e<VJr?r:pW(r,0,1):e>=CJr?NaN:(t=BJr(r,Iv),pW(Iv[0],Iv[1],1-((t&1)<<1)))}gW.exports=UJr});var Lv=s((nSe,dW)=>{"use strict";var GJr=mW();dW.exports=GJr});var qW=s((aSe,hW)=>{"use strict";var xJr=Lv(),DJr=Cr();function HJr(r,e,t){return e+t*xJr(DJr*(r()-.5))}hW.exports=HJr});var Rv=s((sSe,AW)=>{"use strict";var wt=b(),ms=R(),yW=M(),bW=T(),wW=I(),EW=S(),NW=_(),WJr=C(),OW=E(),zi=yt().factory,zJr=B(),ds=y(),XJr=iW(),SW=qW();function JJr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=zi();else if(arguments.length===1){if(t=arguments[0],!bW(t))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",t));if(EW(t,"prng")){if(!wW(t.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=zi({prng:t.prng})}else e=zi(t)}else{if(u=arguments[0],r=arguments[1],a=XJr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!bW(t))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",t));if(EW(t,"prng")){if(!wW(t.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=zi({prng:t.prng})}else e=zi(t)}else e=zi()}return u===void 0?n=d:n=h,i=e.PRNG,wt(n,"NAME","cauchy"),t&&t.prng?(wt(n,"seed",null),wt(n,"seedLength",null),yW(n,"state",NW(null),WJr),wt(n,"stateLength",null),wt(n,"byteLength",null),wt(n,"toJSON",NW(null))):(ms(n,"seed",o),ms(n,"seedLength",f),yW(n,"state",l,p),ms(n,"stateLength",v),ms(n,"byteLength",c),wt(n,"toJSON",g)),wt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=zJr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return SW(e,u,r)}function d(m,q){return OW(m)||OW(q)||q<=0?NaN:SW(e,m,q)}}AW.exports=JJr});var TW=s((uSe,_W)=>{"use strict";var YJr=Rv(),$Jr=YJr();_W.exports=$Jr});var RW=s((oSe,LW)=>{"use strict";var ZJr=b(),IW=TW(),QJr=Rv();ZJr(IW,"factory",QJr);LW.exports=IW});var Pv=s((vSe,kW)=>{"use strict";var Et=b(),hs=R(),PW=M(),KJr=W().isPrimitive,FW=T(),MW=I(),BW=S(),jW=_(),rYr=C(),eYr=E(),Xi=Wi().factory,tYr=B(),qs=y();function iYr(){var r,e,t,i,n;if(arguments.length===0)r=Xi();else if(arguments.length===1&&FW(arguments[0]))if(t=arguments[0],BW(t,"prng")){if(!MW(t.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Xi({prng:t.prng})}else r=Xi(t);else{if(n=arguments[0],!KJr(n))throw new TypeError(qs("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!FW(t))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(BW(t,"prng")){if(!MW(t.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Xi(n/2,.5,{prng:t.prng})}else r=Xi(n/2,.5,t)}else r=Xi(n/2,.5)}return n===void 0?i=g:i=p,e=r.PRNG,Et(i,"NAME","chisquare"),t&&t.prng?(Et(i,"seed",null),Et(i,"seedLength",null),PW(i,"state",jW(null),rYr),Et(i,"stateLength",null),Et(i,"byteLength",null),Et(i,"toJSON",jW(null))):(hs(i,"seed",a),hs(i,"seedLength",u),PW(i,"state",v,c),hs(i,"stateLength",o),hs(i,"byteLength",f),Et(i,"toJSON",l)),Et(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=tYr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function g(h){return eYr(h)||h<=0?NaN:r(h/2,.5)}}kW.exports=iYr});var VW=s((fSe,CW)=>{"use strict";var nYr=Pv(),aYr=nYr();CW.exports=aYr});var ua=s((cSe,GW)=>{"use strict";var sYr=b(),UW=VW(),uYr=Pv();sYr(UW,"factory",uYr);GW.exports=UW});var Fv=s((lSe,JW)=>{"use strict";var Nt=b(),ys=R(),xW=M(),oYr=W().isPrimitive,DW=T(),HW=I(),WW=S(),zW=_(),vYr=C(),fYr=E(),Ji=ua().factory,cYr=B(),XW=U(),bs=y();function lYr(){var r,e,t,i,n;if(arguments.length===0)r=Ji();else if(arguments.length===1&&DW(arguments[0]))if(t=arguments[0],WW(t,"prng")){if(!HW(t.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ji({prng:t.prng})}else r=Ji(t);else{if(n=arguments[0],!oYr(n))throw new TypeError(bs("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!DW(t))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(WW(t,"prng")){if(!HW(t.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ji(n,{prng:t.prng})}else r=Ji(n,t)}else r=Ji(n)}return n===void 0?i=g:i=p,e=r.PRNG,Nt(i,"NAME","chi"),t&&t.prng?(Nt(i,"seed",null),Nt(i,"seedLength",null),xW(i,"state",zW(null),vYr),Nt(i,"stateLength",null),Nt(i,"byteLength",null),Nt(i,"toJSON",zW(null))):(ys(i,"seed",a),ys(i,"seedLength",u),xW(i,"state",v,c),ys(i,"stateLength",o),ys(i,"byteLength",f),Nt(i,"toJSON",l)),Nt(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=cYr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return XW(r())}function g(h){return fYr(h)||h<=0?NaN:XW(r(h))}}JW.exports=lYr});var $W=s((pSe,YW)=>{"use strict";var pYr=Fv(),gYr=pYr();YW.exports=gYr});var KW=s((gSe,QW)=>{"use strict";var mYr=b(),ZW=$W(),dYr=Fv();mYr(ZW,"factory",dYr);QW.exports=ZW});var tz=s((mSe,ez)=>{"use strict";var hYr=k().isPrimitive,qYr=W().isPrimitive,rz=y(),yYr=vr();function bYr(r,e){return!hYr(r)||yYr(r)?new TypeError(rz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):qYr(e)?null:new TypeError(rz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}ez.exports=bYr});var nz=s((dSe,iz)=>{"use strict";var Mv=E(),wYr=Wn(),EYr=Cr();function NYr(r,e,t){var i;return Mv(r)||Mv(e)||Mv(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+wYr(i)/EYr)/2)}iz.exports=NYr});var uz=s((hSe,sz)=>{"use strict";var az=E();function OYr(r,e){return az(r)||az(e)?NaN:r<e?0:1}sz.exports=OYr});var fz=s((qSe,vz)=>{"use strict";var SYr=_(),oz=E();function AYr(r){if(oz(r))return SYr(NaN);return e;function e(t){return oz(t)?NaN:t<r?0:1}}vz.exports=AYr});var ws=s((ySe,lz)=>{"use strict";var _Yr=b(),cz=uz(),TYr=fz();_Yr(cz,"factory",TYr);lz.exports=cz});var gz=s((bSe,pz)=>{"use strict";var IYr=_(),LYr=ws().factory,Bv=E(),RYr=Wn(),PYr=Cr();function FYr(r,e){if(Bv(r)||Bv(e)||e<0)return IYr(NaN);if(e===0)return LYr(r);return t;function t(i){var n;return Bv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+RYr(n)/PYr)/2)}}pz.exports=FYr});var hz=s((wSe,dz)=>{"use strict";var MYr=b(),mz=nz(),BYr=gz();MYr(mz,"factory",BYr);dz.exports=mz});var jv=s((ESe,qz)=>{"use strict";var jYr=hz(),kYr=1e4,CYr=1e-12;function VYr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<kYr;){if(u=(i+n)/2,n-i<CYr)return u;a=jYr(u,e,t),r>a?i=u:n=u,o+=1}return u}qz.exports=VYr});var bz=s((NSe,yz)=>{"use strict";var kv=E(),UYr=jv();function GYr(r,e,t){return kv(e)||kv(t)||kv(r)||t<0||r<0||r>1?NaN:t===0?e:UYr(r,e,t)}yz.exports=GYr});var Ez=s((OSe,wz)=>{"use strict";var xYr=E();function DYr(r,e){return xYr(r)||r<0||r>1?NaN:e}wz.exports=DYr});var Sz=s((SSe,Oz)=>{"use strict";var HYr=_(),Nz=E();function WYr(r){if(Nz(r))return HYr(NaN);return e;function e(t){return Nz(t)||t<0||t>1?NaN:r}}Oz.exports=WYr});var Cv=s((ASe,_z)=>{"use strict";var zYr=b(),Az=Ez(),XYr=Sz();zYr(Az,"factory",XYr);_z.exports=Az});var Iz=s((_Se,Tz)=>{"use strict";var JYr=_(),YYr=Cv().factory,Vv=E(),$Yr=jv();function ZYr(r,e){if(Vv(r)||Vv(e)||e<0)return JYr(NaN);if(e===0)return YYr(r);return t;function t(i){return Vv(i)||i<0||i>1?NaN:$Yr(i,r,e)}}Tz.exports=ZYr});var Pz=s((TSe,Rz)=>{"use strict";var QYr=b(),Lz=bz(),KYr=Iz();QYr(Lz,"factory",KYr);Rz.exports=Lz});var Mz=s((ISe,Fz)=>{"use strict";var r$r=Pz();function e$r(r,e,t){return r$r(r(),e,t)}Fz.exports=e$r});var Uv=s((LSe,xz)=>{"use strict";var Ie=b(),Es=R(),Bz=M(),jz=T(),kz=I(),Cz=S(),Vz=_(),t$r=C(),Ns=J().factory,Uz=E(),i$r=B(),Os=y(),n$r=tz(),Gz=Mz();function a$r(){var r,e,t,i,n,a;if(arguments.length===0)e=Ns();else if(arguments.length===1){if(r=arguments[0],!jz(r))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Cz(r,"prng")){if(!kz(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else{if(n=arguments[0],a=arguments[1],i=n$r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!jz(r))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Cz(r,"prng")){if(!kz(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else e=Ns()}return n===void 0?t=h:t=g,Ie(t,"NAME","cosine"),r&&r.prng?(Ie(t,"seed",null),Ie(t,"seedLength",null),Bz(t,"state",Vz(null),t$r),Ie(t,"stateLength",null),Ie(t,"byteLength",null),Ie(t,"toJSON",Vz(null)),Ie(t,"PRNG",e)):(Es(t,"seed",u),Es(t,"seedLength",o),Bz(t,"state",c,l),Es(t,"stateLength",f),Es(t,"byteLength",v),Ie(t,"toJSON",p),Ie(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=i$r(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Gz(e,n,a)}function h(d,m){return Uz(d)||Uz(m)||m<=0?NaN:Gz(e,d,m)}}xz.exports=a$r});var Hz=s((RSe,Dz)=>{"use strict";var s$r=Uv(),u$r=s$r();Dz.exports=u$r});var Xz=s((PSe,zz)=>{"use strict";var o$r=b(),Wz=Hz(),v$r=Uv();o$r(Wz,"factory",v$r);zz.exports=Wz});var Zz=s((FSe,$z)=>{"use strict";var Jz=dr().isPrimitive,Gv=y(),Yz=vr();function f$r(r,e){return!Jz(r)||Yz(r)?new TypeError(Gv("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!Jz(e)||Yz(e)?new TypeError(Gv("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(Gv("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}$z.exports=f$r});var rX=s((MSe,Kz)=>{"use strict";var xv=Bi(),Yi=z();function Qz(r,e,t){var i,n,a,u,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(u=0;;){for(a===xv?(u=Yi(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Yi((a+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=Qz(r,0,Yi(a/f)),!(l>xv/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===xv?(o=Yi(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Yi((n+1)/(a+1));;)if(i=r()-v,i=Yi(i/o),i<=a)return i+e}Kz.exports=Qz});var Dv=s((BSe,oX)=>{"use strict";var Le=b(),Ss=R(),eX=M(),tX=T(),iX=I(),nX=S(),aX=_(),c$r=C(),As=J().factory,sX=E(),$i=hr(),l$r=B(),Ot=y(),p$r=Zz(),uX=rX();function g$r(){var r,e,t,i,n,a;if(arguments.length===0)e=As();else if(arguments.length===1){if(r=arguments[0],!tX(r))throw new TypeError(Ot("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nX(r,"prng")){if(!iX(r.prng))throw new TypeError(Ot("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!$i(e.MIN))throw new TypeError(Ot("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!$i(e.MAX))throw new TypeError(Ot("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=As(r)}else{if(n=arguments[0],a=arguments[1],i=p$r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!tX(r))throw new TypeError(Ot("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nX(r,"prng")){if(!iX(r.prng))throw new TypeError(Ot("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!$i(e.MIN))throw new TypeError(Ot("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!$i(e.MAX))throw new TypeError(Ot("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=As(r)}else e=As()}return n===void 0?t=h:t=g,Le(t,"NAME","discrete-uniform"),r&&r.prng?(Le(t,"seed",null),Le(t,"seedLength",null),eX(t,"state",aX(null),c$r),Le(t,"stateLength",null),Le(t,"byteLength",null),Le(t,"toJSON",aX(null)),Le(t,"PRNG",e)):(Ss(t,"seed",u),Ss(t,"seedLength",o),eX(t,"state",c,l),Ss(t,"stateLength",f),Ss(t,"byteLength",v),Le(t,"toJSON",p),Le(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=l$r(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return uX(e,n,a)}function h(d,m){return sX(d)||sX(m)||!$i(d)||!$i(m)||d>m?NaN:uX(e,d,m)}}oX.exports=g$r});var fX=s((jSe,vX)=>{"use strict";var m$r=Dv(),d$r=m$r();vX.exports=d$r});var pX=s((kSe,lX)=>{"use strict";var h$r=b(),cX=fX(),q$r=Dv();h$r(cX,"factory",q$r);lX.exports=cX});var dX=s((CSe,mX)=>{"use strict";var y$r=W().isPrimitive,b$r=ee().isPrimitive,gX=y();function w$r(r,e){return b$r(r)?y$r(e)?null:new TypeError(gX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(gX("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}mX.exports=w$r});var qX=s((VSe,hX)=>{"use strict";var E$r=P();function N$r(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*E$r(i)}hX.exports=N$r});var Hv=s((USe,AX)=>{"use strict";var Re=b(),_s=R(),yX=M(),bX=T(),wX=I(),EX=S(),NX=_(),O$r=C(),Ts=J().factory,OX=E(),S$r=Ov(),A$r=B(),Is=y(),_$r=dX(),SX=qX();function T$r(){var r,e,t,i,n,a;if(arguments.length===0)e=Ts();else if(arguments.length===1){if(t=arguments[0],!bX(t))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",t));if(EX(t,"prng")){if(!wX(t.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Ts(t)}else{if(a=arguments[0],r=arguments[1],n=_$r(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!bX(t))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",t));if(EX(t,"prng")){if(!wX(t.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Ts(t)}else e=Ts()}return a===void 0?i=h:i=g,Re(i,"NAME","erlang"),t&&t.prng?(Re(i,"seed",null),Re(i,"seedLength",null),yX(i,"state",NX(null),O$r),Re(i,"stateLength",null),Re(i,"byteLength",null),Re(i,"toJSON",NX(null)),Re(i,"PRNG",e)):(_s(i,"seed",u),_s(i,"seedLength",o),yX(i,"state",c,l),_s(i,"stateLength",f),_s(i,"byteLength",v),Re(i,"toJSON",p),Re(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=A$r(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return SX(e,a,r)}function h(d,m){return OX(d)||OX(m)||!S$r(d)||m<=0?NaN:SX(e,d,m)}}AX.exports=T$r});var TX=s((GSe,_X)=>{"use strict";var I$r=Hv(),L$r=I$r();_X.exports=L$r});var RX=s((xSe,LX)=>{"use strict";var R$r=b(),IX=TX(),P$r=Hv();R$r(IX,"factory",P$r);LX.exports=IX});var FX=s((DSe,PX)=>{"use strict";var F$r=P();function M$r(r,e){return-F$r(1-r())/e}PX.exports=M$r});var Wv=s((HSe,UX)=>{"use strict";var Pe=b(),Ls=R(),MX=M(),B$r=W().isPrimitive,BX=T(),jX=I(),kX=S(),CX=_(),j$r=C(),Rs=J().factory,k$r=E(),C$r=B(),Ps=y(),VX=FX();function V$r(){var r,e,t,i;if(arguments.length===0)t=Rs();else if(arguments.length===1&&BX(arguments[0]))if(e=arguments[0],kX(e,"prng")){if(!jX(e.prng))throw new TypeError(Ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Rs(e);else{if(r=arguments[0],!B$r(r))throw new TypeError(Ps("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!BX(e))throw new TypeError(Ps("invalid argument. Options argument must be an object. Value: `%s`.",e));if(kX(e,"prng")){if(!jX(e.prng))throw new TypeError(Ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Rs(e)}else t=Rs()}return r===void 0?i=p:i=l,Pe(i,"NAME","exponential"),e&&e.prng?(Pe(i,"seed",null),Pe(i,"seedLength",null),MX(i,"state",CX(null),j$r),Pe(i,"stateLength",null),Pe(i,"byteLength",null),Pe(i,"toJSON",CX(null)),Pe(i,"PRNG",t)):(Ls(i,"seed",n),Ls(i,"seedLength",a),MX(i,"state",f,v),Ls(i,"stateLength",u),Ls(i,"byteLength",o),Pe(i,"toJSON",c),Pe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=C$r(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return VX(t,r)}function p(g){return k$r(g)||g<=0?NaN:VX(t,g)}}UX.exports=V$r});var xX=s((WSe,GX)=>{"use strict";var U$r=Wv(),G$r=U$r();GX.exports=G$r});var WX=s((zSe,HX)=>{"use strict";var x$r=b(),DX=xX(),D$r=Wv();x$r(DX,"factory",D$r);HX.exports=DX});var YX=s((XSe,JX)=>{"use strict";var zX=W().isPrimitive,XX=y();function H$r(r,e){return zX(r)?zX(e)?null:new TypeError(XX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(XX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}JX.exports=H$r});var ZX=s((JSe,$X)=>{"use strict";function W$r(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}$X.exports=W$r});var zv=s((YSe,aJ)=>{"use strict";var St=b(),Fs=R(),QX=M(),KX=T(),rJ=I(),eJ=S(),tJ=_(),z$r=C(),Zi=ua().factory,iJ=E(),X$r=B(),Ms=y(),J$r=YX(),nJ=ZX();function Y$r(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Zi();else if(arguments.length===1){if(e=arguments[0],!KX(e))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",e));if(eJ(e,"prng")){if(!rJ(e.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Zi({prng:e.prng})}else r=Zi(e)}else{if(a=arguments[0],u=arguments[1],n=J$r(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!KX(e))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",e));if(eJ(e,"prng")){if(!rJ(e.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Zi({prng:e.prng})}else r=Zi(e)}else r=Zi()}return a===void 0?i=d:i=h,t=r.PRNG,St(i,"NAME","f"),e&&e.prng?(St(i,"seed",null),St(i,"seedLength",null),QX(i,"state",tJ(null),z$r),St(i,"stateLength",null),St(i,"byteLength",null),St(i,"toJSON",tJ(null))):(Fs(i,"seed",o),Fs(i,"seedLength",f),QX(i,"state",l,p),Fs(i,"stateLength",v),Fs(i,"byteLength",c),St(i,"toJSON",g)),St(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=X$r(t.state),a===void 0?m.params=[]:m.params=[a,u],m}function h(){return nJ(r,a,u)}function d(m,q){return iJ(m)||iJ(q)||m<=0||q<=0?NaN:nJ(r,m,q)}}aJ.exports=Y$r});var uJ=s(($Se,sJ)=>{"use strict";var $$r=zv(),Z$r=$$r();sJ.exports=Z$r});var fJ=s((ZSe,vJ)=>{"use strict";var Q$r=b(),oJ=uJ(),K$r=zv();Q$r(oJ,"factory",K$r);vJ.exports=oJ});var pJ=s((QSe,lJ)=>{"use strict";var cJ=W().isPrimitive,rZr=k().isPrimitive,Xv=vr(),Jv=y();function eZr(r,e,t){return!cJ(r)||Xv(r)?new TypeError(Jv("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!cJ(e)||Xv(e)?new TypeError(Jv("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!rZr(t)||Xv(t)?new TypeError(Jv("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}lJ.exports=eZr});var mJ=s((KSe,gJ)=>{"use strict";var tZr=D(),iZr=P();function nZr(r,e,t,i){return i+t*tZr(-iZr(r()),-1/e)}gJ.exports=nZr});var $v=s((rAe,EJ)=>{"use strict";var Fe=b(),Bs=R(),dJ=M(),hJ=T(),qJ=I(),yJ=S(),bJ=_(),aZr=C(),js=J().factory,Yv=E(),sZr=B(),ks=y(),uZr=pJ(),wJ=mJ();function oZr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=js();else if(arguments.length===1){if(e=arguments[0],!hJ(e))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(yJ(e,"prng")){if(!qJ(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=js(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=uZr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!hJ(e))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(yJ(e,"prng")){if(!qJ(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=js(e)}else t=js()}return r===void 0?i=d:i=h,Fe(i,"NAME","frechet"),e&&e.prng?(Fe(i,"seed",null),Fe(i,"seedLength",null),dJ(i,"state",bJ(null),aZr),Fe(i,"stateLength",null),Fe(i,"byteLength",null),Fe(i,"toJSON",bJ(null)),Fe(i,"PRNG",t)):(Bs(i,"seed",o),Bs(i,"seedLength",f),dJ(i,"state",l,p),Bs(i,"stateLength",v),Bs(i,"byteLength",c),Fe(i,"toJSON",g),Fe(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=sZr(t.state),r===void 0?m.params=[]:m.params=[r,a,u],m}function h(){return wJ(t,r,a,u)}function d(m,q,N){return Yv(m)||Yv(q)||Yv(N)||m<=0||q<=0?NaN:wJ(t,m,q,N)}}EJ.exports=oZr});var OJ=s((eAe,NJ)=>{"use strict";var vZr=$v(),fZr=vZr();NJ.exports=fZr});var _J=s((tAe,AJ)=>{"use strict";var cZr=b(),SJ=OJ(),lZr=$v();cZr(SJ,"factory",lZr);AJ.exports=SJ});var LJ=s((iAe,IJ)=>{"use strict";var pZr=z(),TJ=P();function gZr(r,e){var t=r();return t===0&&(t=r()),pZr(TJ(t)/TJ(1-e))}IJ.exports=gZr});var Zv=s((nAe,kJ)=>{"use strict";var Me=b(),Cs=R(),RJ=M(),PJ=T(),mZr=wn().isPrimitive,FJ=I(),MJ=S(),BJ=_(),dZr=C(),Vs=J().factory,hZr=E(),qZr=B(),Us=y(),jJ=LJ();function yZr(){var r,e,t,i;if(arguments.length===0)e=Vs();else if(arguments.length===1&&PJ(arguments[0]))if(r=arguments[0],MJ(r,"prng")){if(!FJ(r.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vs(r);else{if(i=arguments[0],!mZr(i))throw new TypeError(Us("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!PJ(r))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",r));if(MJ(r,"prng")){if(!FJ(r.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vs(r)}else e=Vs()}return i===void 0?t=p:t=l,Me(t,"NAME","geometric"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),RJ(t,"state",BJ(null),dZr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",BJ(null)),Me(t,"PRNG",e)):(Cs(t,"seed",n),Cs(t,"seedLength",a),RJ(t,"state",f,v),Cs(t,"stateLength",u),Cs(t,"byteLength",o),Me(t,"toJSON",c),Me(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=qZr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return jJ(e,i)}function p(g){return hZr(g)||g<0||g>1?NaN:jJ(e,g)}}kJ.exports=yZr});var VJ=s((aAe,CJ)=>{"use strict";var bZr=Zv(),wZr=bZr();CJ.exports=wZr});var xJ=s((sAe,GJ)=>{"use strict";var EZr=b(),UJ=VJ(),NZr=Zv();EZr(UJ,"factory",NZr);GJ.exports=UJ});var WJ=s((uAe,HJ)=>{"use strict";var OZr=k().isPrimitive,SZr=W().isPrimitive,DJ=y(),AZr=vr();function _Zr(r,e){return!OZr(r)||AZr(r)?new TypeError(DJ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):SZr(e)?null:new TypeError(DJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}HJ.exports=_Zr});var JJ=s((oAe,XJ)=>{"use strict";var zJ=P();function TZr(r,e,t){return e-t*zJ(-zJ(r()))}XJ.exports=TZr});var Qv=s((vAe,tY)=>{"use strict";var Be=b(),Gs=R(),YJ=M(),$J=T(),ZJ=I(),QJ=S(),KJ=_(),IZr=C(),xs=J().factory,rY=E(),LZr=B(),Ds=y(),RZr=WJ(),eY=JJ();function PZr(){var r,e,t,i,n,a;if(arguments.length===0)t=xs();else if(arguments.length===1){if(e=arguments[0],!$J(e))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",e));if(QJ(e,"prng")){if(!ZJ(e.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=xs(e)}else{if(a=arguments[0],r=arguments[1],n=RZr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!$J(e))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",e));if(QJ(e,"prng")){if(!ZJ(e.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=xs(e)}else t=xs()}return a===void 0?i=h:i=g,Be(i,"NAME","gumbel"),e&&e.prng?(Be(i,"seed",null),Be(i,"seedLength",null),YJ(i,"state",KJ(null),IZr),Be(i,"stateLength",null),Be(i,"byteLength",null),Be(i,"toJSON",KJ(null)),Be(i,"PRNG",t)):(Gs(i,"seed",u),Gs(i,"seedLength",o),YJ(i,"state",c,l),Gs(i,"stateLength",f),Gs(i,"byteLength",v),Be(i,"toJSON",p),Be(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=LZr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return eY(t,a,r)}function h(d,m){return rY(d)||rY(m)||m<=0?NaN:eY(t,d,m)}}tY.exports=PZr});var nY=s((fAe,iY)=>{"use strict";var FZr=Qv(),MZr=FZr();iY.exports=MZr});var uY=s((cAe,sY)=>{"use strict";var BZr=b(),aY=nY(),jZr=Qv();BZr(aY,"factory",jZr);sY.exports=aY});var vY=s((lAe,oY)=>{"use strict";var Kv=qr().isPrimitive,oa=y();function kZr(r,e,t){return Kv(r)?Kv(e)?Kv(t)?t>r?new RangeError(oa("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(oa("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(oa("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(oa("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(oa("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}oY.exports=kZr});var fY=s((pAe,CZr)=>{CZr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var lY=s((gAe,cY)=>{"use strict";var VZr=E(),UZr=hr(),GZr=ki(),xZr=L(),DZr=fY(),HZr=170;function WZr(r){return VZr(r)?NaN:UZr(r)?r<0?NaN:r<=HZr?DZr[r]:xZr:GZr(r+1)}cY.exports=WZr});var gY=s((mAe,pY)=>{"use strict";var zZr=lY();pY.exports=zZr});var dY=s((dAe,mY)=>{"use strict";var At=gY();function XZr(r,e,t,i){var n,a,u;for(i<t?(n=At(t)*At(e+t-i)/(At(e+t)*At(t-i)),u=0):(n=At(e)*At(i)/(At(i-t)*At(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}mY.exports=XZr});var qY=s((hAe,hY)=>{"use strict";var Hs=dY();function JZr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=Hs(r,n,a,u),t-o):(a=t,n=e-t,o=Hs(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=Hs(r,n,a,u),o):(n=e-t,a=t,o=Hs(r,n,a,u),i-o))}hY.exports=JZr});var ef=s((qAe,AY)=>{"use strict";var je=b(),Ws=R(),yY=M(),bY=T(),wY=I(),EY=S(),NY=_(),YZr=C(),zs=J().factory,rf=x2(),OY=L(),$Zr=B(),Xs=y(),ZZr=vY(),SY=qY();function QZr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=zs();else if(arguments.length===1){if(r=arguments[0],!bY(r))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(EY(r,"prng")){if(!wY(r.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=zs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=ZZr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!bY(r))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(EY(r,"prng")){if(!wY(r.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=zs(r)}else e=zs()}return n===void 0?t=d:t=h,je(t,"NAME","hypergeometric"),r&&r.prng?(je(t,"seed",null),je(t,"seedLength",null),yY(t,"state",NY(null),YZr),je(t,"stateLength",null),je(t,"byteLength",null),je(t,"toJSON",NY(null)),je(t,"PRNG",e)):(Ws(t,"seed",o),Ws(t,"seedLength",f),yY(t,"state",l,p),Ws(t,"stateLength",v),Ws(t,"byteLength",c),je(t,"toJSON",g),je(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=$Zr(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return SY(e,n,a,u)}function d(m,q,N){return m===OY||q===OY||!rf(m)||!rf(q)||!rf(N)||N>m?NaN:SY(e,m,q,N)}}AY.exports=QZr});var TY=s((yAe,_Y)=>{"use strict";var KZr=ef(),rQr=KZr();_Y.exports=rQr});var RY=s((bAe,LY)=>{"use strict";var eQr=b(),IY=TY(),tQr=ef();eQr(IY,"factory",tQr);LY.exports=IY});var BY=s((wAe,MY)=>{"use strict";var PY=W().isPrimitive,FY=y();function iQr(r,e){return PY(r)?PY(e)?null:new TypeError(FY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(FY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}MY.exports=iQr});var tf=s((EAe,xY)=>{"use strict";var _t=b(),Js=R(),jY=M(),kY=T(),CY=I(),VY=S(),UY=_(),nQr=C(),Qi=Wi().factory,GY=E(),aQr=B(),Ys=y(),sQr=BY();function uQr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Qi();else if(arguments.length===1){if(i=arguments[0],!kY(i))throw new TypeError(Ys("invalid argument. Options argument must be an object. Value: `%s`.",i));if(VY(i,"prng")){if(!CY(i.prng))throw new TypeError(Ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Qi({prng:i.prng})}else r=Qi(i)}else{if(e=arguments[0],t=arguments[1],u=sQr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!kY(i))throw new TypeError(Ys("invalid argument. Options argument must be an object. Value: `%s`.",i));if(VY(i,"prng")){if(!CY(i.prng))throw new TypeError(Ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Qi(e,t,{prng:i.prng})}else r=Qi(e,t,i)}else r=Qi(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,_t(a,"NAME","invgamma"),i&&i.prng?(_t(a,"seed",null),_t(a,"seedLength",null),jY(a,"state",UY(null),nQr),_t(a,"stateLength",null),_t(a,"byteLength",null),_t(a,"toJSON",UY(null))):(Js(a,"seed",o),Js(a,"seedLength",f),jY(a,"state",l,p),Js(a,"stateLength",v),Js(a,"byteLength",c),_t(a,"toJSON",g)),_t(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=aQr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return 1/r()}function d(m,q){return GY(m)||GY(q)||m<=0||q<=0?NaN:1/r(m,q)}}xY.exports=uQr});var HY=s((NAe,DY)=>{"use strict";var oQr=tf(),vQr=oQr();DY.exports=vQr});var XY=s((OAe,zY)=>{"use strict";var fQr=b(),WY=HY(),cQr=tf();fQr(WY,"factory",cQr);zY.exports=WY});var ZY=s((SAe,$Y)=>{"use strict";var JY=W().isPrimitive,YY=y();function lQr(r,e){return JY(r)?JY(e)?null:new TypeError(YY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(YY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}$Y.exports=lQr});var r$=s((AAe,KY)=>{"use strict";var QY=D();function pQr(r,e,t){var i=r();return QY(1-QY(1-i,1/t),1/e)}KY.exports=pQr});var nf=s((_Ae,o$)=>{"use strict";var ke=b(),$s=R(),e$=M(),t$=T(),i$=I(),n$=S(),a$=_(),gQr=C(),Zs=J().factory,s$=E(),mQr=B(),Qs=y(),dQr=ZY(),u$=r$();function hQr(){var r,e,t,i,n,a;if(arguments.length===0)e=Zs();else if(arguments.length===1){if(r=arguments[0],!t$(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(n$(r,"prng")){if(!i$(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else{if(n=arguments[0],a=arguments[1],i=dQr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!t$(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(n$(r,"prng")){if(!i$(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else e=Zs()}return n===void 0?t=h:t=g,ke(t,"NAME","kumaraswamy"),r&&r.prng?(ke(t,"seed",null),ke(t,"seedLength",null),e$(t,"state",a$(null),gQr),ke(t,"stateLength",null),ke(t,"byteLength",null),ke(t,"toJSON",a$(null)),ke(t,"PRNG",e)):($s(t,"seed",u),$s(t,"seedLength",o),e$(t,"state",c,l),$s(t,"stateLength",f),$s(t,"byteLength",v),ke(t,"toJSON",p),ke(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=mQr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return u$(e,n,a)}function h(d,m){return s$(d)||s$(m)||d<=0||m<=0?NaN:u$(e,d,m)}}o$.exports=hQr});var f$=s((TAe,v$)=>{"use strict";var qQr=nf(),yQr=qQr();v$.exports=yQr});var p$=s((IAe,l$)=>{"use strict";var bQr=b(),c$=f$(),wQr=nf();bQr(c$,"factory",wQr);l$.exports=c$});var d$=s((LAe,m$)=>{"use strict";var EQr=k().isPrimitive,NQr=W().isPrimitive,g$=y(),OQr=vr();function SQr(r,e){return!EQr(r)||OQr(r)?new TypeError(g$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):NQr(e)?null:new TypeError(g$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}m$.exports=SQr});var q$=s((RAe,h$)=>{"use strict";var AQr=os(),_Qr=Y(),TQr=P();function IQr(r,e,t){var i=r()-.5;return e-t*AQr(i)*TQr(1-2*_Qr(i))}h$.exports=IQr});var af=s((PAe,A$)=>{"use strict";var Ce=b(),Ks=R(),y$=M(),b$=T(),w$=I(),E$=S(),N$=_(),LQr=C(),ru=J().factory,O$=E(),RQr=B(),eu=y(),PQr=d$(),S$=q$();function FQr(){var r,e,t,i,n,a;if(arguments.length===0)e=ru();else if(arguments.length===1){if(r=arguments[0],!b$(r))throw new TypeError(eu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(E$(r,"prng")){if(!w$(r.prng))throw new TypeError(eu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ru(r)}else{if(n=arguments[0],a=arguments[1],i=PQr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!b$(r))throw new TypeError(eu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(E$(r,"prng")){if(!w$(r.prng))throw new TypeError(eu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ru(r)}else e=ru()}return n===void 0?t=h:t=g,Ce(t,"NAME","laplace"),r&&r.prng?(Ce(t,"seed",null),Ce(t,"seedLength",null),y$(t,"state",N$(null),LQr),Ce(t,"stateLength",null),Ce(t,"byteLength",null),Ce(t,"toJSON",N$(null)),Ce(t,"PRNG",e)):(Ks(t,"seed",u),Ks(t,"seedLength",o),y$(t,"state",c,l),Ks(t,"stateLength",f),Ks(t,"byteLength",v),Ce(t,"toJSON",p),Ce(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=RQr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return S$(e,n,a)}function h(d,m){return O$(d)||O$(m)||m<=0?NaN:S$(e,d,m)}}A$.exports=FQr});var T$=s((FAe,_$)=>{"use strict";var MQr=af(),BQr=MQr();_$.exports=BQr});var R$=s((MAe,L$)=>{"use strict";var jQr=b(),I$=T$(),kQr=af();jQr(I$,"factory",kQr);L$.exports=I$});var M$=s((BAe,F$)=>{"use strict";var CQr=k().isPrimitive,VQr=W().isPrimitive,P$=y(),UQr=vr();function GQr(r,e){return!CQr(r)||UQr(r)?new TypeError(P$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):VQr(e)?null:new TypeError(P$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}F$.exports=GQr});var j$=s((jAe,B$)=>{"use strict";function xQr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}B$.exports=xQr});var C$=s((kAe,k$)=>{"use strict";function DQr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}k$.exports=DQr});var U$=s((CAe,V$)=>{"use strict";function HQr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}V$.exports=HQr});var x$=s((VAe,G$)=>{"use strict";function WQr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}G$.exports=WQr});var H$=s((UAe,D$)=>{"use strict";function zQr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}D$.exports=zQr});var J$=s((GAe,X$)=>{"use strict";var XQr=E(),W$=U(),z$=P(),JQr=L(),YQr=V(),$Qr=j$(),ZQr=C$(),QQr=U$(),KQr=x$(),rKr=H$(),eKr=.08913147449493408,tKr=2.249481201171875,iKr=.807220458984375,nKr=.9399557113647461,aKr=.9836282730102539;function sKr(r){var e,t,i,n,a,u;return XQr(r)?NaN:r===1?JQr:r===-1?YQr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=$Qr(t),e*(a*eKr+a*u)):n>=.25?(a=W$(-2*z$(n)),n-=.25,u=ZQr(n),e*(a/(tKr+u))):(n=W$(-z$(n)),n<3?(i=n-1.125,u=QQr(i),e*(iKr*n+u*n)):n<6?(i=n-3,u=KQr(i),e*(nKr*n+u*n)):(i=n-6,u=rKr(i),e*(aKr*n+u*n))))}X$.exports=sKr});var sf=s((xAe,Y$)=>{"use strict";var uKr=J$();Y$.exports=uKr});var Z$=s((DAe,$$)=>{"use strict";var oKr=sf(),uf=E(),vKr=U();function fKr(r,e,t){var i,n;return uf(e)||uf(t)||uf(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*vKr(2),i+n*oKr(2*r-1))}$$.exports=fKr});var K$=s((HAe,Q$)=>{"use strict";var cKr=_(),lKr=Cv().factory,pKr=sf(),of=E(),gKr=U();function mKr(r,e){var t,i;if(of(r)||of(e)||e<0)return cKr(NaN);return e===0&&lKr(r),t=r,i=e*gKr(2),n;function n(a){return of(a)||a<0||a>1?NaN:t+i*pKr(2*a-1)}}Q$.exports=mKr});var vf=s((WAe,eZ)=>{"use strict";var dKr=b(),rZ=Z$(),hKr=K$();dKr(rZ,"factory",hKr);eZ.exports=rZ});var iZ=s((zAe,tZ)=>{"use strict";var qKr=vf();function yKr(r,e,t){var i=qKr(1-r()/2,0,1);return e+t/(i*i)}tZ.exports=yKr});var ff=s((XAe,cZ)=>{"use strict";var Ve=b(),tu=R(),nZ=M(),aZ=T(),sZ=I(),uZ=S(),oZ=_(),bKr=C(),iu=J().factory,vZ=E(),wKr=B(),nu=y(),EKr=M$(),fZ=iZ();function NKr(){var r,e,t,i,n,a;if(arguments.length===0)e=iu();else if(arguments.length===1){if(r=arguments[0],!aZ(r))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uZ(r,"prng")){if(!sZ(r.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=iu(r)}else{if(n=arguments[0],a=arguments[1],i=EKr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!aZ(r))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uZ(r,"prng")){if(!sZ(r.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=iu(r)}else e=iu()}return n===void 0?t=h:t=g,Ve(t,"NAME","levy"),r&&r.prng?(Ve(t,"seed",null),Ve(t,"seedLength",null),nZ(t,"state",oZ(null),bKr),Ve(t,"stateLength",null),Ve(t,"byteLength",null),Ve(t,"toJSON",oZ(null)),Ve(t,"PRNG",e)):(tu(t,"seed",u),tu(t,"seedLength",o),nZ(t,"state",c,l),tu(t,"stateLength",f),tu(t,"byteLength",v),Ve(t,"toJSON",p),Ve(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=wKr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return fZ(e,n,a)}function h(d,m){return vZ(d)||vZ(m)||m<=0?NaN:fZ(e,d,m)}}cZ.exports=NKr});var pZ=s((JAe,lZ)=>{"use strict";var OKr=ff(),SKr=OKr();lZ.exports=SKr});var dZ=s((YAe,mZ)=>{"use strict";var AKr=b(),gZ=pZ(),_Kr=ff();AKr(gZ,"factory",_Kr);mZ.exports=gZ});var yZ=s(($Ae,qZ)=>{"use strict";var TKr=k().isPrimitive,IKr=W().isPrimitive,LKr=vr(),hZ=y();function RKr(r,e){return!TKr(r)||LKr(r)?new TypeError(hZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):IKr(e)?null:new TypeError(hZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}qZ.exports=RKr});var wZ=s((ZAe,bZ)=>{"use strict";var PKr=P();function FKr(r,e,t){var i=r();return e+t*PKr(i/(1-i))}bZ.exports=FKr});var cf=s((QAe,IZ)=>{"use strict";var Ue=b(),au=R(),EZ=M(),NZ=T(),OZ=I(),SZ=S(),AZ=_(),MKr=C(),su=J().factory,_Z=E(),BKr=B(),uu=y(),jKr=yZ(),TZ=wZ();function kKr(){var r,e,t,i,n,a;if(arguments.length===0)e=su();else if(arguments.length===1){if(r=arguments[0],!NZ(r))throw new TypeError(uu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SZ(r,"prng")){if(!OZ(r.prng))throw new TypeError(uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=su(r)}else{if(n=arguments[0],a=arguments[1],i=jKr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!NZ(r))throw new TypeError(uu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SZ(r,"prng")){if(!OZ(r.prng))throw new TypeError(uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=su(r)}else e=su()}return n===void 0?t=h:t=g,Ue(t,"NAME","logistic"),r&&r.prng?(Ue(t,"seed",null),Ue(t,"seedLength",null),EZ(t,"state",AZ(null),MKr),Ue(t,"stateLength",null),Ue(t,"byteLength",null),Ue(t,"toJSON",AZ(null)),Ue(t,"PRNG",e)):(au(t,"seed",u),au(t,"seedLength",o),EZ(t,"state",c,l),au(t,"stateLength",f),au(t,"byteLength",v),Ue(t,"toJSON",p),Ue(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=BKr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return TZ(e,n,a)}function h(d,m){return _Z(d)||_Z(m)||m<=0?NaN:TZ(e,d,m)}}IZ.exports=kKr});var RZ=s((KAe,LZ)=>{"use strict";var CKr=cf(),VKr=CKr();LZ.exports=VKr});var MZ=s((r_e,FZ)=>{"use strict";var UKr=b(),PZ=RZ(),GKr=cf();UKr(PZ,"factory",GKr);FZ.exports=PZ});var kZ=s((e_e,jZ)=>{"use strict";var xKr=k().isPrimitive,DKr=W().isPrimitive,BZ=y(),HKr=vr();function WKr(r,e){return!xKr(r)||HKr(r)?new TypeError(BZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):DKr(e)?null:new TypeError(BZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}jZ.exports=WKr});var VZ=s((t_e,CZ)=>{"use strict";var zKr=sr();function XKr(r,e,t){return zKr(e+t*r())}CZ.exports=XKr});var lf=s((i_e,XZ)=>{"use strict";var Tt=b(),ou=R(),UZ=M(),GZ=T(),xZ=I(),DZ=S(),HZ=_(),JKr=C(),Ki=yt().factory,WZ=E(),YKr=B(),vu=y(),$Kr=kZ(),zZ=VZ();function ZKr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ki();else if(arguments.length===1){if(t=arguments[0],!GZ(t))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(DZ(t,"prng")){if(!xZ(t.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ki({prng:t.prng})}else e=Ki(t)}else{if(u=arguments[0],r=arguments[1],a=$Kr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!GZ(t))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(DZ(t,"prng")){if(!xZ(t.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ki({prng:t.prng})}else e=Ki(t)}else e=Ki()}return u===void 0?n=d:n=h,i=e.PRNG,Tt(n,"NAME","lognormal"),t&&t.prng?(Tt(n,"seed",null),Tt(n,"seedLength",null),UZ(n,"state",HZ(null),JKr),Tt(n,"stateLength",null),Tt(n,"byteLength",null),Tt(n,"toJSON",HZ(null))):(ou(n,"seed",o),ou(n,"seedLength",f),UZ(n,"state",l,p),ou(n,"stateLength",v),ou(n,"byteLength",c),Tt(n,"toJSON",g)),Tt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=YKr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return zZ(e,u,r)}function d(m,q){return WZ(m)||WZ(q)||q<=0?NaN:zZ(e,m,q)}}XZ.exports=ZKr});var YZ=s((n_e,JZ)=>{"use strict";var QKr=lf(),KKr=QKr();JZ.exports=KKr});var QZ=s((a_e,ZZ)=>{"use strict";var rre=b(),$Z=YZ(),ere=lf();rre($Z,"factory",ere);ZZ.exports=$Z});var pf=s((s_e,KZ)=>{"use strict";var tre=vi(),ire=z(),nre=tre-1;function are(){var r=ire(1+nre*Math.random());return r|0}KZ.exports=are});var df=s((u_e,nQ)=>{"use strict";var Ge=b(),It=R(),rQ=M(),gf=S(),sre=T(),ure=cr().isPrimitive,ore=Vr(),vre=ee().isPrimitive,eQ=Oa(),Jr=y(),fu=vi(),_r=Qe(),rn=gt(),fre=B(),tQ=pf(),mf=fu-1|0,cre=fu-1|0,lre=16807,cu=1,lu=2,Lt=2,Tr=4,va=5;function iQ(r,e){var t;return e?t="option":t="argument",r.length<va+1?new RangeError(Jr("invalid %s. State array has insufficient length.",t)):r[0]!==cu?new RangeError(Jr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,cu,r[0])):r[1]!==lu?new RangeError(Jr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,lu,r[1])):r[Lt]!==1?new RangeError(Jr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Lt])):r[Tr]!==r.length-va?new RangeError(Jr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-va,r[Tr])):null}function pre(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!sre(r))throw new TypeError(Jr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gf(r,"copy")&&(i.copy=r.copy,!ure(r.copy)))throw new TypeError(Jr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(gf(r,"state")){if(t=r.state,i.state=!0,!eQ(t))throw new TypeError(Jr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=iQ(t,!0),u)throw u;i.copy===!1?e=t:(e=new _r(t.length),rn(t.length,t,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,t[Tr])}if(n===void 0)if(gf(r,"seed"))if(n=r.seed,i.seed=!0,vre(n)){if(n>cre)throw new RangeError(Jr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(ore(n)&&n.length>0)a=n.length,e=new _r(va+a),e[0]=cu,e[1]=lu,e[Lt]=1,e[Tr]=a,rn.ndarray(a,n,1,0,e,1,Tr+1),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Jr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=tQ()|0}else n=tQ()|0;return t===void 0&&(e=new _r(va+1),e[0]=cu,e[1]=lu,e[Lt]=1,e[Tr]=1,e[Tr+1]=n,t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Ge(h,"NAME","minstd"),It(h,"seed",o),It(h,"seedLength",f),rQ(h,"state",l,p),It(h,"stateLength",v),It(h,"byteLength",c),Ge(h,"toJSON",g),Ge(h,"MIN",1),Ge(h,"MAX",fu-1),Ge(h,"normalized",d),Ge(d,"NAME",h.NAME),It(d,"seed",o),It(d,"seedLength",f),rQ(d,"state",l,p),It(d,"stateLength",v),It(d,"byteLength",c),Ge(d,"toJSON",g),Ge(d,"MIN",(h.MIN-1)/mf),Ge(d,"MAX",(h.MAX-1)/mf),h;function o(){var m=e[Tr];return rn(m,n,1,new _r(m),1)}function f(){return e[Tr]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return rn(m,e,1,new _r(m),1)}function p(m){var q;if(!eQ(m))throw new TypeError(Jr("invalid argument. Must provide an Int32Array. Value: `%s`.",m));if(q=iQ(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?rn(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new _r(m.length)),rn(m.length,m,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,e[Tr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=fre(e),m.params=[],m}function h(){var m=t[0]|0;return m=lre*m%fu|0,t[0]=m,m|0}function d(){return(h()-1)/mf}}nQ.exports=pre});var sQ=s((o_e,aQ)=>{"use strict";var gre=df(),mre=pf(),dre=gre({seed:mre()});aQ.exports=dre});var vQ=s((v_e,oQ)=>{"use strict";var hre=b(),uQ=sQ(),qre=df();hre(uQ,"factory",qre);oQ.exports=uQ});var cQ=s((f_e,fQ)=>{"use strict";var yre=E(),bre=8;function wre(r,e,t){var i,n;for(n=0;n<bre;n++)if(i=r(),yre(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}fQ.exports=wre});var hf=s((c_e,lQ)=>{"use strict";var Ere=vi(),Nre=z(),Ore=Ere-1;function Sre(){var r=Nre(1+Ore*Math.random());return r|0}lQ.exports=Sre});var bf=s((l_e,qQ)=>{"use strict";var xe=b(),Rt=R(),pQ=M(),qf=S(),Are=T(),_re=cr().isPrimitive,Tre=Vr(),Ire=ee().isPrimitive,gQ=Oa(),en=gt(),Lre=z(),Ir=Qe(),fa=vi(),Rre=B(),Hr=y(),mQ=cQ(),dQ=hf(),yf=fa-1|0,Pre=fa-1|0,Fre=16807,Rr=32,mu=1,du=3,Pt=2,tn=Rr+3,Lr=Rr+6,ca=Rr+7,pu=tn+1,gu=tn+2;function hQ(r,e){var t;return e?t="option":t="argument",r.length<ca+1?new RangeError(Hr("invalid %s. State array has insufficient length.",t)):r[0]!==mu?new RangeError(Hr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,mu,r[0])):r[1]!==du?new RangeError(Hr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,du,r[1])):r[Pt]!==Rr?new RangeError(Hr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Rr,r[Pt])):r[tn]!==2?new RangeError(Hr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[tn])):r[Lr]!==r.length-ca?new RangeError(Hr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ca,r[Lr])):null}function Mre(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!Are(r))throw new TypeError(Hr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(qf(r,"copy")&&(i.copy=r.copy,!_re(r.copy)))throw new TypeError(Hr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(qf(r,"state")){if(t=r.state,i.state=!0,!gQ(t))throw new TypeError(Hr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=hQ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ir(t.length),en(t.length,t,1,e,1)),t=new Ir(e.buffer,e.byteOffset+(Pt+1)*e.BYTES_PER_ELEMENT,Rr),n=new Ir(e.buffer,e.byteOffset+(Lr+1)*e.BYTES_PER_ELEMENT,t[Lr])}if(n===void 0)if(qf(r,"seed"))if(n=r.seed,i.seed=!0,Ire(n)){if(n>Pre)throw new RangeError(Hr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(Tre(n)&&n.length>0)a=n.length,e=new Ir(ca+a),e[0]=mu,e[1]=du,e[Pt]=Rr,e[tn]=2,e[gu]=n[0],e[Lr]=a,en.ndarray(a,n,1,0,e,1,Lr+1),t=new Ir(e.buffer,e.byteOffset+(Pt+1)*e.BYTES_PER_ELEMENT,Rr),n=new Ir(e.buffer,e.byteOffset+(Lr+1)*e.BYTES_PER_ELEMENT,a),t=mQ(h,t,Rr),e[pu]=t[0];else throw new TypeError(Hr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=dQ()|0}else n=dQ()|0;return t===void 0&&(e=new Ir(ca+1),e[0]=mu,e[1]=du,e[Pt]=Rr,e[tn]=2,e[gu]=n,e[Lr]=1,e[Lr+1]=n,t=new Ir(e.buffer,e.byteOffset+(Pt+1)*e.BYTES_PER_ELEMENT,Rr),n=new Ir(e.buffer,e.byteOffset+(Lr+1)*e.BYTES_PER_ELEMENT,1),t=mQ(h,t,Rr),e[pu]=t[0]),xe(d,"NAME","minstd-shuffle"),Rt(d,"seed",o),Rt(d,"seedLength",f),pQ(d,"state",l,p),Rt(d,"stateLength",v),Rt(d,"byteLength",c),xe(d,"toJSON",g),xe(d,"MIN",1),xe(d,"MAX",fa-1),xe(d,"normalized",m),xe(m,"NAME",d.NAME),Rt(m,"seed",o),Rt(m,"seedLength",f),pQ(m,"state",l,p),Rt(m,"stateLength",v),Rt(m,"byteLength",c),xe(m,"toJSON",g),xe(m,"MIN",(d.MIN-1)/yf),xe(m,"MAX",(d.MAX-1)/yf),d;function o(){var q=e[Lr];return en(q,n,1,new Ir(q),1)}function f(){return e[Lr]}function v(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return en(q,e,1,new Ir(q),1)}function p(q){var N;if(!gQ(q))throw new TypeError(Hr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=hQ(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?en(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Ir(q.length)),en(q.length,q,1,e,1)),t=new Ir(e.buffer,e.byteOffset+(Pt+1)*e.BYTES_PER_ELEMENT,Rr),n=new Ir(e.buffer,e.byteOffset+(Lr+1)*e.BYTES_PER_ELEMENT,e[Lr])}function g(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=Rre(e),q.params=[],q}function h(){var q=e[gu]|0;return q=Fre*q%fa|0,e[gu]=q,q|0}function d(){var q,N;return q=e[pu],N=Lre(Rr*(q/fa)),q=t[N],e[pu]=q,t[N]=h(),q}function m(){return(d()-1)/yf}}qQ.exports=Mre});var bQ=s((p_e,yQ)=>{"use strict";var Bre=bf(),jre=hf(),kre=Bre({seed:jre()});yQ.exports=kre});var NQ=s((g_e,EQ)=>{"use strict";var Cre=b(),wQ=bQ(),Vre=bf();Cre(wQ,"factory",Vre);EQ.exports=wQ});var SQ=s((m_e,OQ)=>{"use strict";var Ure=sr();function Gre(r,e){for(var t=r(),i=1;t>Ure(-e);)i+=1,t*=r();return i-1}OQ.exports=Gre});var _Q=s((d_e,AQ)=>{"use strict";var xre=z();function Dre(r){return xre(r)===r&&r<0}AQ.exports=Dre});var IQ=s((h_e,TQ)=>{"use strict";var Hre=_Q();TQ.exports=Hre});var RQ=s((q_e,LQ)=>{"use strict";var Wre=IQ(),zre=zn();function Xre(r){return Wre(r)?NaN:zre(r+1)}LQ.exports=Xre});var FQ=s((y_e,PQ)=>{"use strict";var Jre=RQ();PQ.exports=Jre});var kQ=s((b_e,jQ)=>{"use strict";var Yre=FQ(),MQ=z(),$re=os(),Zre=U(),BQ=Y(),hu=P(),Qre=p3(),Kre=1/12,ree=1/360;function eee(r,e){var t,i,n,a,u,o,f,v,c,l;for(t=Zre(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-BQ(c))+f,c+=e+.445,MQ(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=$re(c)*.5-c,l=u*r()),a=.5-BQ(c),(a>=.013||a>=l)&&(v=MQ((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*hu(e/v),c+=-e-Qre+v,c-=(Kre-ree/(v*v))/v,v>=10&&c>=hu(l*t)||(c=v*hu(e)-e-Yre(v),v>=0&&v<=9&&c>=hu(l))))return v}}jQ.exports=eee});var VQ=s((w_e,CQ)=>{"use strict";var tee=SQ(),iee=kQ();function nee(r,e){return e<30?tee(r,e):iee(r,e)}CQ.exports=nee});var wf=s((E_e,zQ)=>{"use strict";var De=b(),qu=R(),UQ=M(),aee=W().isPrimitive,GQ=T(),xQ=I(),DQ=S(),HQ=_(),see=C(),yu=J().factory,uee=E(),oee=B(),bu=y(),WQ=VQ();function vee(){var r,e,t,i;if(arguments.length===0)t=yu();else if(arguments.length===1&&GQ(arguments[0]))if(e=arguments[0],DQ(e,"prng")){if(!xQ(e.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=yu(e);else{if(r=arguments[0],!aee(r))throw new TypeError(bu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!GQ(e))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(DQ(e,"prng")){if(!xQ(e.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=yu(e)}else t=yu()}return r===void 0?i=p:i=l,De(i,"NAME","poisson"),e&&e.prng?(De(i,"seed",null),De(i,"seedLength",null),UQ(i,"state",HQ(null),see),De(i,"stateLength",null),De(i,"byteLength",null),De(i,"toJSON",HQ(null)),De(i,"PRNG",t)):(qu(i,"seed",n),qu(i,"seedLength",a),UQ(i,"state",f,v),qu(i,"stateLength",u),qu(i,"byteLength",o),De(i,"toJSON",c),De(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=oee(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return WQ(t,r)}function p(g){return uee(g)||g<=0?NaN:WQ(t,g)}}zQ.exports=vee});var JQ=s((N_e,XQ)=>{"use strict";var fee=wf(),cee=fee();XQ.exports=cee});var Ef=s((O_e,$Q)=>{"use strict";var lee=b(),YQ=JQ(),pee=wf();lee(YQ,"factory",pee);$Q.exports=YQ});var QQ=s((S_e,ZQ)=>{"use strict";var gee=W().isPrimitive,mee=k().isPrimitive,Nf=y(),dee=vr();function hee(r,e){return gee(r)?!mee(e)||dee(e)?new TypeError(Nf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Nf("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Nf("invalid argument. First argument must be a positive number. Value: `%s`.",r))}ZQ.exports=hee});var _f=s((A_e,sK)=>{"use strict";var Ft=b(),wu=R(),KQ=M(),nn=S(),rK=T(),Of=le(),eK=cr().isPrimitive,tK=I(),iK=_(),qee=C(),nK=E(),an=Ef().factory,Eu=Wi().factory,Sf=gt(),Af=pr(),aK=na(),yee=B(),He=y(),bee=QQ();function wee(){var r,e,t,i,n,a,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=an(i);else if(arguments.length===1){if(i=arguments[0],!rK(i))throw new TypeError(He("invalid argument. Options argument must be an object. Value: `%s`.",i));if(nn(i,"copy")&&!eK(i.copy))throw new TypeError(He("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(nn(i,"prng")){if(!tK(i.prng))throw new TypeError(He("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=an({prng:i.prng})}else{if(nn(i,"state")&&!Of(i.state))throw new TypeError(He("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=aK({},i),i.copy===!1?u=!1:i.state&&(i.state=Sf(i.state.length,i.state,1,new Af(i.state.length),1)),i.copy=!1,t=an(i)}}else{if(v=arguments[0],f=arguments[1],o=bee(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!rK(i))throw new TypeError(He("invalid argument. Options argument must be an object. Value: `%s`.",i));if(nn(i,"copy")&&!eK(i.copy))throw new TypeError(He("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(nn(i,"prng")){if(!tK(i.prng))throw new TypeError(He("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=an({prng:i.prng})}else{if(nn(i,"state")&&!Of(i.state))throw new TypeError(He("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=aK({},i),i.copy===!1?u=!1:i.state&&(i.state=Sf(i.state.length,i.state,1,new Af(i.state.length),1)),i.copy=!1,t=an(i)}}else i={copy:!1},t=an(i)}return i&&i.prng?v===void 0?r=Eu({prng:i.prng}):r=Eu(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=Eu({state:e,copy:!1}):r=Eu(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=q,a=t.PRNG,Ft(n,"NAME","negative-binomial"),i&&i.prng?(Ft(n,"seed",null),Ft(n,"seedLength",null),KQ(n,"state",iK(null),qee),Ft(n,"stateLength",null),Ft(n,"byteLength",null),Ft(n,"toJSON",iK(null))):(wu(n,"seed",c),wu(n,"seedLength",l),KQ(n,"state",h,d),wu(n,"stateLength",p),wu(n,"byteLength",g),Ft(n,"toJSON",m)),Ft(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function g(){return a.byteLength}function h(){return a.state}function d(O){if(!Of(O))throw new TypeError(He("invalid argument. Must provide a Uint32Array. Value: `%s`.",O));u&&(O=Sf(O.length,O,1,new Af(O.length),1)),a.state=O}function m(){var O={};return O.type="PRNG",O.name=n.NAME,O.state=yee(a.state),v===void 0?O.params=[]:O.params=[v,f],O}function q(){return t(r())}function N(O,F){return nK(O)||nK(F)||F<=0||F>=1?NaN:t(r(O,F/(1-F)))}}sK.exports=wee});var oK=s((__e,uK)=>{"use strict";var Eee=_f(),Nee=Eee();uK.exports=Nee});var cK=s((T_e,fK)=>{"use strict";var Oee=b(),vK=oK(),See=_f();Oee(vK,"factory",See);fK.exports=vK});var gK=s((I_e,pK)=>{"use strict";var Aee=k().isPrimitive,_ee=W().isPrimitive,lK=y(),Tee=vr();function Iee(r,e){return!Aee(r)||Tee(r)?new TypeError(lK("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):_ee(e)?null:new TypeError(lK("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}pK.exports=Iee});var dK=s((L_e,mK)=>{"use strict";function Lee(r,e,t){return e+t*r()}mK.exports=Lee});var Tf=s((R_e,OK)=>{"use strict";var Mt=b(),Nu=R(),hK=M(),qK=T(),yK=I(),bK=S(),wK=_(),Ree=C(),sn=yt().factory,EK=E(),Pee=B(),Ou=y(),Fee=gK(),NK=dK();function Mee(){var r,e,t,i,n,a,u;if(arguments.length===0)e=sn();else if(arguments.length===1){if(t=arguments[0],!qK(t))throw new TypeError(Ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(bK(t,"prng")){if(!yK(t.prng))throw new TypeError(Ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=sn({prng:t.prng})}else e=sn(t)}else{if(u=arguments[0],r=arguments[1],a=Fee(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!qK(t))throw new TypeError(Ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(bK(t,"prng")){if(!yK(t.prng))throw new TypeError(Ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=sn({prng:t.prng})}else e=sn(t)}else e=sn()}return u===void 0?n=d:n=h,i=e.PRNG,Mt(n,"NAME","normal"),t&&t.prng?(Mt(n,"seed",null),Mt(n,"seedLength",null),hK(n,"state",wK(null),Ree),Mt(n,"stateLength",null),Mt(n,"byteLength",null),Mt(n,"toJSON",wK(null))):(Nu(n,"seed",o),Nu(n,"seedLength",f),hK(n,"state",l,p),Nu(n,"stateLength",v),Nu(n,"byteLength",c),Mt(n,"toJSON",g)),Mt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=Pee(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return NK(e,u,r)}function d(m,q){return EK(m)||EK(q)||q<=0?NaN:NK(e,m,q)}}OK.exports=Mee});var AK=s((P_e,SK)=>{"use strict";var Bee=Tf(),jee=Bee();SK.exports=jee});var IK=s((F_e,TK)=>{"use strict";var kee=b(),_K=AK(),Cee=Tf();kee(_K,"factory",Cee);TK.exports=_K});var FK=s((M_e,PK)=>{"use strict";var LK=W().isPrimitive,RK=y();function Vee(r,e){return LK(r)?LK(e)?null:new TypeError(RK("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(RK("invalid argument. First argument must be a positive number. Value: `%s`.",r))}PK.exports=Vee});var BK=s((B_e,MK)=>{"use strict";var Uee=D();function Gee(r,e,t){return t/Uee(r(),1/e)}MK.exports=Gee});var If=s((j_e,DK)=>{"use strict";var We=b(),Su=R(),jK=M(),kK=T(),CK=I(),VK=S(),UK=_(),xee=C(),Au=J().factory,GK=E(),Dee=B(),_u=y(),Hee=FK(),xK=BK();function Wee(){var r,e,t,i,n,a;if(arguments.length===0)i=Au();else if(arguments.length===1){if(t=arguments[0],!kK(t))throw new TypeError(_u("invalid argument. Options argument must be an object. Value: `%s`.",t));if(VK(t,"prng")){if(!CK(t.prng))throw new TypeError(_u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Au(t)}else{if(r=arguments[0],e=arguments[1],a=Hee(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!kK(t))throw new TypeError(_u("invalid argument. Options argument must be an object. Value: `%s`.",t));if(VK(t,"prng")){if(!CK(t.prng))throw new TypeError(_u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Au(t)}else i=Au()}return r===void 0?n=h:n=g,We(n,"NAME","pareto-type1"),t&&t.prng?(We(n,"seed",null),We(n,"seedLength",null),jK(n,"state",UK(null),xee),We(n,"stateLength",null),We(n,"byteLength",null),We(n,"toJSON",UK(null)),We(n,"PRNG",i)):(Su(n,"seed",u),Su(n,"seedLength",o),jK(n,"state",c,l),Su(n,"stateLength",f),Su(n,"byteLength",v),We(n,"toJSON",p),We(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=Dee(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function g(){return xK(i,r,e)}function h(d,m){return GK(d)||GK(m)||d<=0||m<=0?NaN:xK(i,d,m)}}DK.exports=Wee});var WK=s((k_e,HK)=>{"use strict";var zee=If(),Xee=zee();HK.exports=Xee});var JK=s((C_e,XK)=>{"use strict";var Jee=b(),zK=WK(),Yee=If();Jee(zK,"factory",Yee);XK.exports=zK});var $K=s((V_e,YK)=>{"use strict";var $ee=U(),Zee=P();function Qee(r,e){return e*$ee(-2*Zee(r()))}YK.exports=Qee});var Lf=s((U_e,irr)=>{"use strict";var ze=b(),Tu=R(),ZK=M(),Kee=W().isPrimitive,QK=T(),KK=I(),rrr=S(),err=_(),rte=C(),Iu=J().factory,ete=E(),tte=B(),Lu=y(),trr=$K();function ite(){var r,e,t,i;if(arguments.length===0)t=Iu();else if(arguments.length===1&&QK(arguments[0]))if(e=arguments[0],rrr(e,"prng")){if(!KK(e.prng))throw new TypeError(Lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Iu(e);else{if(r=arguments[0],!Kee(r))throw new TypeError(Lu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!QK(e))throw new TypeError(Lu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(rrr(e,"prng")){if(!KK(e.prng))throw new TypeError(Lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Iu(e)}else t=Iu()}return r===void 0?i=p:i=l,ze(i,"NAME","rayleigh"),e&&e.prng?(ze(i,"seed",null),ze(i,"seedLength",null),ZK(i,"state",err(null),rte),ze(i,"stateLength",null),ze(i,"byteLength",null),ze(i,"toJSON",err(null)),ze(i,"PRNG",t)):(Tu(i,"seed",n),Tu(i,"seedLength",a),ZK(i,"state",f,v),Tu(i,"stateLength",u),Tu(i,"byteLength",o),ze(i,"toJSON",c),ze(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=tte(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return trr(t,r)}function p(g){return ete(g)||g<=0?NaN:trr(t,g)}}irr.exports=ite});var arr=s((G_e,nrr)=>{"use strict";var nte=Lf(),ate=nte();nrr.exports=ate});var orr=s((x_e,urr)=>{"use strict";var ste=b(),srr=arr(),ute=Lf();ste(srr,"factory",ute);urr.exports=srr});var Mf=s((D_e,hrr)=>{"use strict";var Bt=b(),Ru=R(),vrr=M(),un=S(),frr=W().isPrimitive,crr=T(),Rf=le(),lrr=cr().isPrimitive,ote=E(),prr=I(),grr=_(),vte=C(),Pu=ua().factory,on=yt().factory,Pf=gt(),Ff=pr(),mrr=na(),fte=B(),ue=y(),drr=U();function cte(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=on(n);else if(arguments.length===1)if(crr(arguments[0])){if(n=arguments[0],un(n,"copy")&&!lrr(n.copy))throw new TypeError(ue("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(un(n,"prng")){if(!prr(n.prng))throw new TypeError(ue("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=on({prng:n.prng})}else{if(un(n,"state")&&!Rf(n.state))throw new TypeError(ue("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=mrr({},n),n.copy===!1?u=!1:n.state&&(n.state=Pf(n.state.length,n.state,1,new Ff(n.state.length),1)),n.copy=!1,t=on(n)}}else{if(o=arguments[0],!frr(o))throw new TypeError(ue("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=on(n)}else{if(o=arguments[0],!frr(o))throw new TypeError(ue("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!crr(n))throw new TypeError(ue("invalid argument. Options argument must be an object. Value: `%s`.",n));if(un(n,"copy")&&!lrr(n.copy))throw new TypeError(ue("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(un(n,"prng")){if(!prr(n.prng))throw new TypeError(ue("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=on({prng:n.prng})}else{if(un(n,"state")&&!Rf(n.state))throw new TypeError(ue("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=mrr({},n),n.copy===!1?u=!1:n.state&&(n.state=Pf(n.state.length,n.state,1,new Ff(n.state.length),1)),n.copy=!1,t=on(n)}}return n&&n.prng?o===void 0?r=Pu({prng:n.prng}):r=Pu(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Pu({state:e,copy:!1}):r=Pu(o,{state:e,copy:!1})),o===void 0?a=m:a=d,i=t.PRNG,Bt(a,"NAME","t"),n&&n.prng?(Bt(a,"seed",null),Bt(a,"seedLength",null),vrr(a,"state",grr(null),vte),Bt(a,"stateLength",null),Bt(a,"byteLength",null),Bt(a,"toJSON",grr(null))):(Ru(a,"seed",f),Ru(a,"seedLength",v),vrr(a,"state",p,g),Ru(a,"stateLength",c),Ru(a,"byteLength",l),Bt(a,"toJSON",h)),Bt(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function g(q){if(!Rf(q))throw new TypeError(ue("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=Pf(q.length,q,1,new Ff(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=fte(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/drr(r()/o)}function m(q){return ote(q)||q<=0?NaN:t()/drr(r(q)/q)}}hrr.exports=cte});var yrr=s((H_e,qrr)=>{"use strict";var lte=Mf(),pte=lte();qrr.exports=pte});var Err=s((W_e,wrr)=>{"use strict";var gte=b(),brr=yrr(),mte=Mf();gte(brr,"factory",mte);wrr.exports=brr});var Orr=s((z_e,Nrr)=>{"use strict";var Bf=k().isPrimitive,Fu=y(),jf=vr();function dte(r,e,t){return!Bf(r)||jf(r)?new TypeError(Fu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Bf(e)||jf(e)?new TypeError(Fu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Bf(t)||jf(t)?new TypeError(Fu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Fu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}Nrr.exports=dte});var _rr=s((X_e,Arr)=>{"use strict";var Srr=U();function hte(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+Srr(a*u)):(a=(t-e)*(t-i),t-Srr(a*(1-u)))}Arr.exports=hte});var Cf=s((J_e,Mrr)=>{"use strict";var Xe=b(),Mu=R(),Trr=M(),Irr=T(),Lrr=I(),Rrr=S(),Prr=_(),qte=C(),Bu=J().factory,kf=E(),yte=B(),ju=y(),bte=Orr(),Frr=_rr();function wte(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Bu();else if(arguments.length===1){if(r=arguments[0],!Irr(r))throw new TypeError(ju("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rrr(r,"prng")){if(!Lrr(r.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=bte(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!Irr(r))throw new TypeError(ju("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rrr(r,"prng")){if(!Lrr(r.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bu(r)}else e=Bu()}return n===void 0?t=d:t=h,Xe(t,"NAME","triangular"),r&&r.prng?(Xe(t,"seed",null),Xe(t,"seedLength",null),Trr(t,"state",Prr(null),qte),Xe(t,"stateLength",null),Xe(t,"byteLength",null),Xe(t,"toJSON",Prr(null)),Xe(t,"PRNG",e)):(Mu(t,"seed",o),Mu(t,"seedLength",f),Trr(t,"state",l,p),Mu(t,"stateLength",v),Mu(t,"byteLength",c),Xe(t,"toJSON",g),Xe(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=yte(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return Frr(e,n,a,u)}function d(m,q,N){return kf(m)||kf(q)||kf(N)||!(m<=N&&N<=q)?NaN:Frr(e,m,q,N)}}Mrr.exports=wte});var jrr=s((Y_e,Brr)=>{"use strict";var Ete=Cf(),Nte=Ete();Brr.exports=Nte});var Vrr=s(($_e,Crr)=>{"use strict";var Ote=b(),krr=jrr(),Ste=Cf();Ote(krr,"factory",Ste);Crr.exports=krr});var Drr=s((Z_e,xrr)=>{"use strict";var Urr=k().isPrimitive,Vf=y(),Grr=vr();function Ate(r,e){return!Urr(r)||Grr(r)?new TypeError(Vf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Urr(e)||Grr(e)?new TypeError(Vf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Vf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}xrr.exports=Ate});var Wrr=s((Q_e,Hrr)=>{"use strict";function _te(r,e,t){var i=r();return t*i+(1-i)*e}Hrr.exports=_te});var Uf=s((K_e,Krr)=>{"use strict";var Je=b(),ku=R(),zrr=M(),Xrr=T(),Jrr=I(),Yrr=S(),$rr=_(),Tte=C(),Cu=J().factory,Zrr=E(),Ite=B(),Vu=y(),Lte=Drr(),Qrr=Wrr();function Rte(){var r,e,t,i,n,a;if(arguments.length===0)e=Cu();else if(arguments.length===1){if(r=arguments[0],!Xrr(r))throw new TypeError(Vu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Yrr(r,"prng")){if(!Jrr(r.prng))throw new TypeError(Vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Cu(r)}else{if(n=arguments[0],a=arguments[1],i=Lte(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Xrr(r))throw new TypeError(Vu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Yrr(r,"prng")){if(!Jrr(r.prng))throw new TypeError(Vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Cu(r)}else e=Cu()}return n===void 0?t=h:t=g,Je(t,"NAME","uniform"),r&&r.prng?(Je(t,"seed",null),Je(t,"seedLength",null),zrr(t,"state",$rr(null),Tte),Je(t,"stateLength",null),Je(t,"byteLength",null),Je(t,"toJSON",$rr(null)),Je(t,"PRNG",e)):(ku(t,"seed",u),ku(t,"seedLength",o),zrr(t,"state",c,l),ku(t,"stateLength",f),ku(t,"byteLength",v),Je(t,"toJSON",p),Je(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Ite(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Qrr(e,n,a)}function h(d,m){return Zrr(d)||Zrr(m)||d>=m?NaN:Qrr(e,d,m)}}Krr.exports=Rte});var eer=s((rTe,rer)=>{"use strict";var Pte=Uf(),Fte=Pte();rer.exports=Fte});var ner=s((eTe,ier)=>{"use strict";var Mte=b(),ter=eer(),Bte=Uf();Mte(ter,"factory",Bte);ier.exports=ter});var oer=s((tTe,uer)=>{"use strict";var aer=W().isPrimitive,ser=y();function jte(r,e){return aer(r)?aer(e)?null:new TypeError(ser("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(ser("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}uer.exports=jte});var fer=s((iTe,ver)=>{"use strict";var kte=D(),Cte=P();function Vte(r,e,t){return t*kte(-Cte(1-r()),1/e)}ver.exports=Vte});var Gf=s((nTe,qer)=>{"use strict";var Ye=b(),Uu=R(),cer=M(),ler=T(),per=I(),ger=S(),mer=_(),Ute=C(),Gu=J().factory,der=E(),Gte=B(),xu=y(),xte=oer(),her=fer();function Dte(){var r,e,t,i,n,a;if(arguments.length===0)t=Gu();else if(arguments.length===1){if(e=arguments[0],!ler(e))throw new TypeError(xu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ger(e,"prng")){if(!per(e.prng))throw new TypeError(xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gu(e)}else{if(a=arguments[0],r=arguments[1],n=xte(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!ler(e))throw new TypeError(xu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ger(e,"prng")){if(!per(e.prng))throw new TypeError(xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gu(e)}else t=Gu()}return r===void 0?i=h:i=g,Ye(i,"NAME","weibull"),e&&e.prng?(Ye(i,"seed",null),Ye(i,"seedLength",null),cer(i,"state",mer(null),Ute),Ye(i,"stateLength",null),Ye(i,"byteLength",null),Ye(i,"toJSON",mer(null)),Ye(i,"PRNG",t)):(Uu(i,"seed",u),Uu(i,"seedLength",o),cer(i,"state",c,l),Uu(i,"stateLength",f),Uu(i,"byteLength",v),Ye(i,"toJSON",p),Ye(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=Gte(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return her(t,a,r)}function h(d,m){return der(d)||der(m)||d<=0||m<=0?NaN:her(t,d,m)}}qer.exports=Dte});var ber=s((aTe,yer)=>{"use strict";var Hte=Gf(),Wte=Hte();yer.exports=Wte});var Ner=s((sTe,Eer)=>{"use strict";var zte=b(),wer=ber(),Xte=Gf();zte(wer,"factory",Xte);Eer.exports=wer});var Ser=s((uTe,Oer)=>{"use strict";var Jte=mr(),Yte=dr().isPrimitive,$te=y(),Zte=fo();function Qte(r){if(Yte(r))return r;if(Jte(r))return Zte(r);throw new TypeError($te("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}Oer.exports=Qte});var _er=s((oTe,Aer)=>{"use strict";var Kte=Ser();Aer.exports=Kte});var Ier=s((vTe,Ter)=>{"use strict";var j=rr(),rie=UG().factory,eie=ZG().factory,tie=yD().factory,iie=nH().factory,nie=VH().factory,aie=rW().factory,sie=RW().factory,uie=KW().factory,oie=ua().factory,vie=Xz().factory,fie=pX().factory,cie=RX().factory,lie=WX().factory,pie=fJ().factory,gie=_J().factory,mie=Wi().factory,die=xJ().factory,hie=uY().factory,qie=RY().factory,yie=yt().factory,bie=XY().factory,wie=p$().factory,Eie=R$().factory,Nie=dZ().factory,Oie=MZ().factory,Sie=QZ().factory,Aie=vQ().factory,_ie=NQ().factory,Tie=J().factory,Iie=cK().factory,Lie=IK().factory,Rie=JK().factory,Pie=Ef().factory,Fie=orr().factory,Mie=Err().factory,Bie=Vrr().factory,jie=ner().factory,kie=Ner().factory,Cie=_er();function Vie(r){return j(r,"arcsine",rie),j(r,"bernoulli",eie),j(r,"beta",tie),j(r,"betaprime",iie),j(r,"binomial",nie),j(r,"boxMuller",aie),j(r,"cauchy",sie),j(r,"chi",uie),j(r,"chisquare",oie),j(r,"cosine",vie),j(r,"discreteUniform",fie),j(r,"erlang",cie),j(r,"exponential",lie),j(r,"f",pie),j(r,"frechet",gie),j(r,"gamma",mie),j(r,"geometric",die),j(r,"gumbel",hie),j(r,"hypergeometric",qie),j(r,"improvedZiggurat",yie),j(r,"invgamma",bie),j(r,"kumaraswamy",wie),j(r,"laplace",Eie),j(r,"levy",Nie),j(r,"logistic",Oie),j(r,"lognormal",Sie),j(r,"minstd",Aie),j(r,"minstdShuffle",_ie),j(r,"mt19937",Tie),j(r,"negativeBinomial",Iie),j(r,"normal",Lie),j(r,"pareto1",Rie),j(r,"poisson",Pie),j(r,"rayleigh",Fie),j(r,"t",Mie),j(r,"triangular",Bie),j(r,"uniform",jie),j(r,"weibull",kie),r.base={},j(r.base,"normalizeSeed",Cie),r}Ter.exports=Vie});var Rer=s((fTe,Ler)=>{"use strict";var Uie=T(),Du=S(),Gie=dr().isPrimitive,xie=ee().isPrimitive,Die=qr().isPrimitive,Hie=Wa().isPrimitive,la=y();function Wie(r,e){return Uie(e)?Du(e,"period")&&(r.period=e.period,!xie(e.period))?new TypeError(la("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Du(e,"amplitude")&&(r.amplitude=e.amplitude,!Hie(e.amplitude))?new TypeError(la("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Du(e,"offset")&&(r.offset=e.offset,!Gie(e.offset))?new TypeError(la("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Du(e,"iter")&&(r.iter=e.iter,!Die(e.iter))?new TypeError(la("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(la("invalid argument. Options argument must be an object. Value: `%s`.",e))}Ler.exports=Wie});var Ber=s((cTe,Mer)=>{"use strict";var xf=b(),Per=dn(),zie=Lv(),Xie=y0(),Jie=q0(),Yie=Cr(),$ie=Rer();function Fer(r){var e,t,i,n,a,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=$ie(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=Yie/e.period,o=e.amplitude/Jie,f=0,t={},xf(t,"next",v),xf(t,"return",c),Per&&xf(t,Per,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*Xie(zie(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return Fer(e)}}Mer.exports=Fer});var ker=s((lTe,jer)=>{"use strict";var Zie=Ber();jer.exports=Zie});var Ver=s((pTe,Cer)=>{"use strict";var Qie=rr(),Kie=ker();function rne(r){return Qie(r,"iterSawtoothWave",Kie),r}Cer.exports=rne});var Ger=s((gTe,Uer)=>{"use strict";var ene=17976931348623157e292;Uer.exports=ene});var Hu=s((mTe,xer)=>{"use strict";var tne=709.782712893384;xer.exports=tne});var Her=s((dTe,Der)=>{"use strict";var ine=sr();function nne(r,e){var t,i,n,a;if(n=ine(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}Der.exports=nne});var zer=s((hTe,Wer)=>{"use strict";function ane(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}Wer.exports=ane});var Jer=s((qTe,Xer)=>{"use strict";function sne(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Xer.exports=sne});var $er=s((yTe,Yer)=>{"use strict";function une(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}Yer.exports=une});var Qer=s((bTe,Zer)=>{"use strict";function one(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}Zer.exports=one});var rtr=s((wTe,Ker)=>{"use strict";function vne(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}Ker.exports=vne});var ttr=s((ETe,etr)=>{"use strict";function fne(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}etr.exports=fne});var ntr=s((NTe,itr)=>{"use strict";function cne(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}itr.exports=cne});var str=s((OTe,atr)=>{"use strict";function lne(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}atr.exports=lne});var ftr=s((STe,vtr)=>{"use strict";var pne=E(),utr=sr(),gne=ge(),mne=L(),dne=V(),hne=zer(),qne=Jer(),yne=$er(),bne=Qer(),wne=rtr(),Ene=ttr(),Nne=ntr(),One=str(),Wu=1e-300,Sne=13877787807814457e-33,otr=.8450629115104675,Ane=.12837916709551256,_ne=1,Tne=-.0023621185607526594,Ine=1,Lne=-.009864944034847148,Rne=1,Pne=-.0098649429247001,Fne=1;function Mne(r){var e,t,i,n,a,u,o,f;if(pne(r))return NaN;if(r===mne)return 0;if(r===dne)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Sne?1-r:(i=r*r,n=Ane+i*hne(i),a=_ne+i*qne(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Tne+a*yne(a),f=Ine+a*bne(a),e?1+otr+o/f:1-otr-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=Lne+a*wne(a),a=Rne+a*Ene(a);else{if(r<-6)return 2-Wu;n=Pne+a*Nne(a),a=Fne+a*One(a)}return i=gne(t,0),n=utr(-(i*i)-.5625)*utr((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Wu:Wu*Wu}vtr.exports=Mne});var ii=s((ATe,ctr)=>{"use strict";var Bne=ftr();ctr.exports=Bne});var gtr=s((_Te,ptr)=>{"use strict";var jne=ii(),ltr=U(),kne=sr(),Cne=Cr();function Vne(r,e){var t,i,n,a,u;if(a=jne(ltr(e)),a!==0&&r>1){for(i=kne(-e)/ltr(Cne*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}ptr.exports=Vne});var Df=s((TTe,mtr)=>{"use strict";var Une=-708.3964185322641;mtr.exports=Une});var ytr=s((ITe,qtr)=>{"use strict";var vn=sr(),zu=D(),Gne=P(),dtr=Hu(),htr=Df();function xne(r,e){var t,i;return i=r*Gne(e),e>=1?i<dtr&&-e>htr?t=zu(e,r)*vn(-e):r>=1?t=zu(e/vn(e/r),r):t=vn(i-e):i>htr?t=zu(e,r)*vn(-e):e/r<dtr?t=zu(e/vn(e/r),r):t=vn(i-e),t}qtr.exports=xne});var Hf=s((LTe,btr)=>{"use strict";function Dne(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}btr.exports=Dne});var Etr=s((RTe,wtr)=>{"use strict";var Hne=Function;wtr.exports=Hne});var Otr=s((PTe,Ntr)=>{"use strict";var Wne=Etr();Ntr.exports=Wne});var Atr=s((FTe,Str)=>{"use strict";var zne=Otr(),Xne=Hf();function Jne(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new zne(e)();function a(u){return Xne(r,u)}}Str.exports=Jne});var Itr=s((MTe,Ttr)=>{"use strict";var Yne=b(),_tr=Hf(),$ne=Atr();Yne(_tr,"factory",$ne);Ttr.exports=_tr});var ni=s((BTe,Ltr)=>{"use strict";var Zne=2220446049250313e-31;Ltr.exports=Zne});var Ptr=s((jTe,Rtr)=>{"use strict";var Qne=eval;Rtr.exports=Qne});var Mtr=s((kTe,Ftr)=>{"use strict";var Kne=Ptr();function rae(){var r;try{Kne('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}Ftr.exports=rae});var Wf=s((CTe,Btr)=>{"use strict";var eae=Mtr();Btr.exports=eae});var ktr=s((VTe,jtr)=>{"use strict";var Xu=Y(),tae=ni(),iae=1e6;function nae(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||tae,a=o.maxTerms||iae,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Xu(i*u)>=Xu(n)||--a===0)break}else do n=r(),u+=n;while(Xu(i*u)<Xu(n)&&--a);return u}jtr.exports=nae});var Utr=s((UTe,Vtr)=>{"use strict";var Ctr=Y(),aae=ni(),sae=1e6;function uae(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||aae,n=u.maxTerms||sae,a=u.initialValue||0;do i=r(),a+=i;while(Ctr(t*a)<Ctr(i)&&--n);return a}Vtr.exports=uae});var Ju=s((GTe,Gtr)=>{"use strict";var oae=Wf(),vae=ktr(),fae=Utr(),zf;oae()?zf=vae:zf=fae;Gtr.exports=zf});var Dtr=s((xTe,xtr)=>{"use strict";function cae(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}xtr.exports=cae});var Wtr=s((DTe,Htr)=>{"use strict";var lae=Y(),pae=P(),gae=ni(),mae=Ju(),dae=Dtr();function hae(r){var e,t;return r<=-1?NaN:(t=lae(r),t>.95?pae(1+r)-r:t<gae?-r*r/2:(e={initialValue:-r},mae(dae(r),e)))}Htr.exports=hae});var Xtr=s((HTe,ztr)=>{"use strict";var qae=Wtr();ztr.exports=qae});var Ytr=s((WTe,Jtr)=>{"use strict";function yae(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Jtr.exports=yae});var Ztr=s((zTe,$tr)=>{"use strict";function bae(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}$tr.exports=bae});var Ktr=s((XTe,Qtr)=>{"use strict";function wae(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Qtr.exports=wae});var eir=s((JTe,rir)=>{"use strict";function Eae(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}rir.exports=Eae});var iir=s((YTe,tir)=>{"use strict";function Nae(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}tir.exports=Nae});var air=s(($Te,nir)=>{"use strict";function Oae(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}nir.exports=Oae});var uir=s((ZTe,sir)=>{"use strict";function Sae(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}sir.exports=Sae});var vir=s((QTe,oir)=>{"use strict";function Aae(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}oir.exports=Aae});var cir=s((KTe,fir)=>{"use strict";function _ae(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}fir.exports=_ae});var pir=s((rIe,lir)=>{"use strict";var Tae=Itr(),Iae=Xtr(),Lae=ii(),Xf=U(),Rae=sr(),Pae=ot(),Fae=Ytr(),Mae=Ztr(),Bae=Ktr(),jae=eir(),kae=iir(),Cae=air(),Vae=uir(),Uae=vir(),Gae=cir(),Yr=[0,0,0,0,0,0,0,0,0,0];function xae(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-Iae(i),a=r*n,u=Xf(2*n),e<r&&(u=-u),Yr[0]=Fae(u),Yr[1]=Mae(u),Yr[2]=Bae(u),Yr[3]=jae(u),Yr[4]=kae(u),Yr[5]=Cae(u),Yr[6]=Vae(u),Yr[7]=Uae(u),Yr[8]=Gae(u),Yr[9]=-.0005967612901927463,t=Tae(Yr,1/r),t*=Rae(-a)/Xf(Pae*r),e<r&&(t=-t),t+=Lae(Xf(a))/2,t}lir.exports=xae});var mir=s((eIe,gir)=>{"use strict";function Dae(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}gir.exports=Dae});var hir=s((tIe,dir)=>{"use strict";var Hae=Ju(),Wae=mir();function zae(r,e,t){var i,n;return t=t||0,n=Wae(r,e),i=Hae(n,{initialValue:t}),i}dir.exports=zae});var yir=s((iIe,qir)=>{"use strict";function Xae(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}qir.exports=Xae});var wir=s((nIe,bir)=>{"use strict";var Jae=yir();bir.exports=Jae});var Nir=s((aIe,Eir)=>{"use strict";var Yae=wir();Eir.exports=Yae});var Air=s((sIe,Sir)=>{"use strict";var $ae=o3(),Oir=E(),Jf=V();function Zae(r,e){return Oir(r)||Oir(e)?NaN:r===Jf||e===Jf?Jf:r===e&&r===0?$ae(r)?r:e:r<e?r:e}Sir.exports=Zae});var Tir=s((uIe,_ir)=>{"use strict";var Qae=Air();_ir.exports=Qae});var Lir=s((oIe,Iir)=>{"use strict";var Kae=10.900511;Iir.exports=Kae});var Yf=s((vIe,Rir)=>{"use strict";var r0e=2.718281828459045;Rir.exports=r0e});var Mir=s((fIe,Fir)=>{"use strict";var e0e=Nir(),t0e=zn(),i0e=ki(),n0e=st(),a0e=U(),s0e=Y(),jt=sr(),pa=D(),$f=z3(),Zf=Tir(),Pir=P(),Yu=Hu(),ga=Df(),Qf=Lir(),u0e=Yf();function o0e(r,e){var t,i,n,a,u,o,f;return n=r+Qf-.5,f=(e-r-Qf+.5)/n,r<1?e<=ga?jt(r*Pir(e)-e-t0e(r)):pa(e,r)*jt(-e)/i0e(r):(s0e(f*f*r)<=100&&r>150?(t=r*(n0e(f)-f)+e*(.5-Qf)/n,t=jt(t)):(a=r*Pir(e/n),u=r-e,Zf(a,u)<=ga||$f(a,u)>=Yu?(i=u/r,Zf(a,u)/2>ga&&$f(a,u)/2<Yu?(o=pa(e/n,r/2)*jt(u/2),t=o*o):Zf(a,u)/4>ga&&$f(a,u)/4<Yu&&e>r?(o=pa(e/n,r/4)*jt(u/4),t=o*o,t*=t):i>ga&&i<Yu?t=pa(e*jt(i)/n,r):t=jt(a+u)):t=pa(e/n,r)*jt(u)),t*=a0e(n/u0e)/e0e(r),t)}Fir.exports=o0e});var jir=s((cIe,Bir)=>{"use strict";var v0e=.34657359027997264;Bir.exports=v0e});var Cir=s((lIe,kir)=>{"use strict";function f0e(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}kir.exports=f0e});var Hir=s((pIe,Dir)=>{"use strict";var c0e=E(),Vir=ar(),Kf=me(),l0e=Mi(),Uir=L(),p0e=V(),Gir=se(),g0e=jir(),m0e=Cir(),d0e=709.782712893384,rc=.6931471803691238,ec=19082149292705877e-26,xir=1.4426950408889634,h0e=38.816242111356935,q0e=1.0397207708399179;function y0e(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(r===Uir||c0e(r))return r;if(r===p0e)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=h0e){if(i)return-1;if(f>=d0e)return Uir}if(u=Vir(f)|0,f>g0e)f<q0e?i?(n=r+rc,a=-ec,g=-1):(n=r-rc,a=ec,g=1):(i?g=xir*r-.5:g=xir*r+.5,g|=0,l=g,n=r-l*rc,a=l*ec),r=n-a,c=n-r-a;else{if(u<1016070144)return r;g=0}return e=.5*r,v=r*e,o=1+v*m0e(v),l=3-o*e,p=v*((o-l)/(6-r*l)),g===0?r-(r*p-v):(t=l0e(Gir+g<<20,0),p=r*(p-c)-c,p-=v,g===-1?.5*(r-p)-.5:g===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):g<=-2||g>56?(f=1-(p-r),g===1024?(n=Vir(f)+(g<<20)|0,f=Kf(f,n)):f*=t,f-1):(l=1,g<20?(n=1072693248-(2097152>>g)|0,l=Kf(l,n),f=l-(p-r)):(n=Gir-g<<20|0,l=Kf(l,n),f=r-(p+l),f+=1),f*=t,f))}Dir.exports=y0e});var tc=s((gIe,Wir)=>{"use strict";var b0e=Hir();Wir.exports=b0e});var Yir=s((mIe,Jir)=>{"use strict";var zir=E(),Xir=Y(),w0e=tc(),E0e=P(),N0e=D(),O0e=I0();function S0e(r,e){var t;if(zir(r)||zir(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((Xir(e*(r-1))<.5||Xir(e)<.2)&&(t=E0e(r)*e,t<.5))return w0e(t)}else if(O0e(e)!==e)return NaN;return N0e(r,e)-1}Jir.exports=S0e});var Zir=s((dIe,$ir)=>{"use strict";var A0e=Yir();$ir.exports=A0e});var Kir=s((hIe,Qir)=>{"use strict";function _0e(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Qir.exports=_0e});var enr=s((qIe,rnr)=>{"use strict";function T0e(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}rnr.exports=T0e});var inr=s((yIe,tnr)=>{"use strict";function I0e(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}tnr.exports=I0e});var anr=s((bIe,nnr)=>{"use strict";var ic=P(),L0e=ni(),R0e=Kir(),P0e=enr(),F0e=inr(),M0e=.15896368026733398,B0e=.5281534194946289,j0e=.45201730728149414;function k0e(r,e,t){var i,n,a,u;if(r<L0e)return-ic(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=ic(r);while(r>=3);t=r-2}return a=t*(r+1),u=R0e(t),n+=a*M0e+a*u,n}return r<1&&(n+=-ic(r),t=e,e=r,r+=1),r<=1.5?(a=P0e(e),i=e*t,n+=i*B0e+i*a,n):(a=t*e,u=F0e(-t),n+=a*j0e+a*u,n)}nnr.exports=k0e});var fnr=s((wIe,vnr)=>{"use strict";var snr=ki(),unr=tc(),C0e=st(),V0e=E(),onr=anr();function U0e(r){return V0e(r)?NaN:r<0?r<-.5?snr(1+r)-1:unr(-C0e(r)+onr(r+2,r+1,r)):r<2?unr(onr(r+1,r,r-1)):snr(1+r)-1}vnr.exports=U0e});var lnr=s((EIe,cnr)=>{"use strict";var G0e=fnr();cnr.exports=G0e});var gnr=s((NIe,pnr)=>{"use strict";function x0e(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}pnr.exports=x0e});var dnr=s((OIe,mnr)=>{"use strict";var D0e=Zir(),H0e=Ju(),W0e=lnr(),z0e=gnr();function X0e(r,e,t){var i,n,a,u,o;return n=W0e(r),a=(n+1)/r,u=D0e(e,r),n-=u,n/=r,o=z0e(r,e),u+=1,i=t?a:0,n=-u*H0e(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}mnr.exports=X0e});var nc=s((SIe,hnr)=>{"use strict";var J0e=11754943508222875e-54;hnr.exports=J0e});var ynr=s((AIe,qnr)=>{"use strict";var $u=Y(),oe=nc(),Y0e=ni(),$0e=1e6;function Z0e(r,e,t){var i,n,a,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],a=v[0],u===0&&(u=oe),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=oe),o=v[1]+v[0]/o,o===0&&(o=oe),f=1/f,n=o*f,u*=n);while($u(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=oe),o=v[1]+v[0]/o,o===0&&(o=oe),f=1/f,n=o*f,u*=n);while(v&&$u(n-1)>e&&--t);return a/u}function Q0e(r,e,t){var i,n,a,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=oe),u=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=oe),u=f[1]+f[0]/u,u===0&&(u=oe),o=1/o,n=u*o,a*=n);while(f&&$u(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=oe),u=f[1]+f[0]/u,u===0&&(u=oe),o=1/o,n=u*o,a*=n);while(f&&$u(n-1)>e&&--t);return a}function K0e(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||$0e,n=i.tolerance||Y0e,i.keep?Q0e(r,n,t):Z0e(r,n,t)}qnr.exports=K0e});var Enr=s((_Ie,wnr)=>{"use strict";var bnr=Y(),rse=ni(),fn=nc(),ese=1e6;function tse(r,e,t){var i,n,a,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=fn),a=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=fn),a=f[1]+f[0]/a,a===0&&(a=fn),u=1/u,i=a*u,o*=i);while(f&&bnr(i-1)>e&&--t);return n/o}function ise(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=fn),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=fn),n=o[1]+o[0]/n,n===0&&(n=fn),a=1/a,i=n*a,u*=i);while(o&&bnr(i-1)>e&&--t);return u}function nse(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||rse,t=i.maxIter||ese,i.keep?ise(r,n,t):tse(r,n,t)}wnr.exports=nse});var Onr=s((TIe,Nnr)=>{"use strict";var ase=Wf(),sse=ynr(),use=Enr(),ac;ase()?ac=sse:ac=use;Nnr.exports=ac});var Anr=s((IIe,Snr)=>{"use strict";function ose(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Snr.exports=ose});var Tnr=s((LIe,_nr)=>{"use strict";var vse=Onr(),fse=Anr();function cse(r,e){var t=fse(r,e);return 1/(e-r+1+vse(t))}_nr.exports=cse});var Cnr=s((RIe,knr)=>{"use strict";var lse=zn(),pse=z(),ma=ki(),Inr=Y(),gse=sr(),Lnr=D(),$r=P(),mse=l3(),Rnr=Ger(),dse=v3(),Pnr=Hu(),hse=L(),qse=Her(),yse=gtr(),Fnr=ytr(),bse=pir(),sc=hir(),Mnr=Mir(),wse=dnr(),Bnr=Tnr(),Ese=170;function jnr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h,d,m,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=Ese&&!a)return l&&e*4<r?(p=e*$r(r)-r,p+=$r(Bnr(e,r))):!l&&e>4*r?(p=e*$r(r)-r,o=0,p+=$r(sc(e,r,o)/e)):(p=jnr(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=$r(p)-e+(e-.5)*$r(e),p+=$r(dse)):(p=e*$r(r)-r,o=0,p+=$r(sc(e,r,o)/e)):p=$r(p)+lse(e)),p>Pnr?hse:gse(p);switch(c=e<30&&e<=r+1&&r<Pnr,c?(q=pse(e),g=q===e,f=g?!1:Inr(q-e)===.5):g=f=!1,g&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<mse&&e>1?u=6:r<.5?-.4/$r(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,a&&e>20&&(h=Inr((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=qse(e,r),a===!1&&(p*=ma(e));break;case 1:p=yse(e,r),a===!1&&(p*=ma(e));break;case 2:p=a?Mnr(e,r):Fnr(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:ma(e),a||p>=1||Rnr*p>o?(o/=p,a||e<1||Rnr/e>o?(o*=-e,n=!0):o=0):o=0)),p*=sc(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,m=wse(e,r,l),p=m[0],N=m[1],l=!1,a&&(p/=N);break;case 4:p=a?Mnr(e,r):Fnr(e,r),p!==0&&(p*=Bnr(e,r));break;case 5:p=bse(e,r),r>=e&&(l=!l);break;case 6:p=a?Lnr(r,e)/ma(e+1):Lnr(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:ma(e),p=d-p),p}knr.exports=jnr});var uc=s((PIe,Vnr)=>{"use strict";var Nse=Cnr();Vnr.exports=Nse});var Gnr=s((FIe,Unr)=>{"use strict";var Ose=uc(),oc=E(),Sse=L();function Ase(r,e,t){return oc(r)||oc(e)||oc(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Sse?1:Ose(r*t,e)}Unr.exports=Ase});var Hnr=s((MIe,Dnr)=>{"use strict";var _se=_(),Tse=ws().factory,Ise=uc(),xnr=E(),Lse=L();function Rse(r,e){if(xnr(r)||xnr(e)||r<0||e<=0)return _se(NaN);if(r===0)return Tse(0);return t;function t(i){return i<=0?0:i===Lse?1:Ise(i*e,r)}}Dnr.exports=Rse});var vc=s((BIe,znr)=>{"use strict";var Pse=b(),Wnr=Gnr(),Fse=Hnr();Pse(Wnr,"factory",Fse);znr.exports=Wnr});var Jnr=s((jIe,Xnr)=>{"use strict";var Mse=vc();function Bse(r,e){return Mse(r,e/2,.5)}Xnr.exports=Bse});var $nr=s((kIe,Ynr)=>{"use strict";var jse=vc().factory;function kse(r){return jse(r/2,.5)}Ynr.exports=kse});var Knr=s((CIe,Qnr)=>{"use strict";var Cse=b(),Znr=Jnr(),Vse=$nr();Cse(Znr,"factory",Vse);Qnr.exports=Znr});var iar=s((VIe,tar)=>{"use strict";var Use=T(),Gse=S(),xse=za(),rar=y(),ear=["values","indices","*"];function Dse(r,e){return Use(e)?Gse(e,"returns")&&(r.returns=e.returns,xse(ear,r.returns)===-1)?new TypeError(rar('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",ear.join('", "'),r.returns)):null:new TypeError(rar("invalid argument. Options argument must be an object. Value: `%s`.",e))}tar.exports=Dse});var aar=s((UIe,nar)=>{"use strict";var Hse=S();function Wse(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Hse(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}nar.exports=Wse});var uar=s((GIe,sar)=>{"use strict";var zse=S();function Xse(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),zse(t,n)?t[n].push(a):t[n]=[a];return t}sar.exports=Xse});var far=s((xIe,oar)=>{"use strict";var Jse=S();function Yse(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Jse(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}oar.exports=Yse});var gar=s((DIe,par)=>{"use strict";var car=Vr(),lar=y(),$se=iar(),Zse=aar(),Qse=uar(),Kse=far();function rue(r,e,t){var i,n,a;if(!car(r))throw new TypeError(lar("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=$se(i,e),n)throw n;a=t}if(!car(a))throw new TypeError(lar("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?Zse(r,a):i.returns==="indices"?Qse(r,a):Kse(r,a)}par.exports=rue});var dar=s((HIe,mar)=>{"use strict";var eue=gar();mar.exports=eue});var qar=s((WIe,har)=>{"use strict";function tue(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}har.exports=tue});var war=s((zIe,bar)=>{"use strict";var iue=mr(),nue=k().isPrimitive,aue=T(),sue=vr(),yar=S(),fc=y();function uue(r,e){return aue(e)?yar(e,"alpha")&&(r.alpha=e.alpha,!nue(r.alpha)||sue(r.alpha))?new TypeError(fc("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):yar(e,"groups")&&(r.groups=e.groups,!iue(r.groups))?new TypeError(fc("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(fc("invalid argument. Options argument must be an object. Value: `%s`.",e))}bar.exports=uue});var Tar=s((XIe,_ar)=>{"use strict";var Ear=E(),Zu=kr(),Nar=D(),oue=Y(),Oar=z2(),vue=Bi(),Sar=v0(),fue=P2(),cue=f0(),lue=vue+1,Aar=1e308;function pue(r,e){var t,i;return Ear(r)||Ear(e)||Zu(e)?NaN:Zu(r)||r===0||e<cue||oue(r)>lue&&e<=0?r:e>Sar?0*r:e<fue?(t=Nar(10,-(e+Sar)),i=r*Aar*t,Zu(i)?r:Oar(i)/Aar/t):(t=Nar(10,-e),i=r*t,Zu(i)?r:Oar(i)/t)}_ar.exports=pue});var Lar=s((JIe,Iar)=>{"use strict";var gue=Tar();Iar.exports=gue});var Far=s((YIe,Par)=>{"use strict";var mue=ee(),due=T(),hue=cr().isPrimitive,Rar=S(),cc=y(),lc=Lar();function que(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!due(r))throw new TypeError(cc("invalid argument. First argument must be an object. Value: `%s`.",r));if(Rar(r,"digits")){if(!mue(r.digits))throw new TypeError(cc("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(Rar(r,"decision")){if(!hue(r.decision))throw new TypeError(cc("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+lc(this.pValue,-t)+`
`,i+="    statistic: "+lc(this.statistic,-t)+`
`,i+="    df: "+lc(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}Par.exports=que});var jar=s(($Ie,Bar)=>{"use strict";var yue=Vr(),bue=T(),ai=rr(),wue=Ti(),Qu=y(),Eue=Knr(),Nue=dar(),Mar=P(),Oue=qar(),Sue=war(),Aue=Far();function _ue(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O;if(f=[],e=arguments.length,v={},bue(arguments[e-1])&&(r=arguments[e-1],e-=1,g=Sue(v,r),g))throw g;if(v.groups){if(n=Nue(arguments[0],v.groups),i=wue(n),e=i.length,e<2)throw new Error(Qu("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(O=0;O<e;O++)f.push(n[i[O]])}else for(O=0;O<e;O++)f.push(arguments[O]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),O=0;O<e;O++){if(p=f[O],!yue(p))throw new TypeError(Qu("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(Qu("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[O]=p.length-1,u+=q[O],t+=1/q[O],N[O]=Oue(p),o+=q[O]*N[O],h+=q[O]*Mar(N[O])}if(o/=u,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(Qu("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*Mar(o)-h,l/=1+(t-1/u)/(3*(e-1)),m=e-1,c=1-Eue(l,m),d={},ai(d,"rejected",c<=a),ai(d,"alpha",a),ai(d,"pValue",c),ai(d,"statistic",l),ai(d,"df",m),ai(d,"method","Bartlett's test of equal variances"),ai(d,"print",Aue),d}Bar.exports=_ue});var Car=s((ZIe,kar)=>{"use strict";var Tue=jar();kar.exports=Tue});var Uar=s((QIe,Var)=>{"use strict";var pc=E(),Iue=pt();function Lue(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,v=1,pc(a)===!1)for(v;v<r;v++){if(u+=t,f=e[u],pc(f)){a=f;break}(f>a||f===a&&Iue(f))&&(a=f),i[o]=a,o+=n}if(pc(a))for(v;v<r;v++)i[o]=a,o+=n;return i}Var.exports=Lue});var xar=s((KIe,Gar)=>{"use strict";var gc=E(),Rue=pt();function Pue(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=a,l=1,gc(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],gc(c)){o=c;break}(c>o||c===o&&Rue(c))&&(o=c),n[v]=o,v+=a}if(gc(o))for(l;l<r;l++)n[v]=o,v+=a;return n}Gar.exports=Pue});var War=s((rLe,Har)=>{"use strict";var Fue=b(),Dar=Uar(),Mue=xar();Fue(Dar,"ndarray",Mue);Har.exports=Dar});var Xar=s((eLe,zar)=>{"use strict";var Bue=War();zar.exports=Bue});var Yar=s((tLe,Jar)=>{"use strict";var jue=E(),kue=pt();function Cue(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],jue(a))return a;(a>i||a===i&&kue(a))&&(i=a)}return i}Jar.exports=Cue});var Zar=s((iLe,$ar)=>{"use strict";var Vue=E(),Uue=pt();function Gue(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],Vue(u))return u;(u>n||u===n&&Uue(u))&&(n=u)}return n}$ar.exports=Gue});var r0r=s((nLe,Kar)=>{"use strict";var xue=b(),Qar=Yar(),Due=Zar();xue(Qar,"ndarray",Due);Kar.exports=Qar});var t0r=s((aLe,e0r)=>{"use strict";var Hue=r0r();e0r.exports=Hue});var a0r=s((sLe,n0r)=>{"use strict";var i0r=E(),Wue=pt();function zue(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(a=e[u],i0r(a))return a;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],i0r(f))return f;(f>a||f===a&&Wue(f))&&(a=f)}return a}n0r.exports=zue});var o0r=s((uLe,u0r)=>{"use strict";var s0r=E(),Xue=pt();function Jue(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],s0r(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],s0r(c))return c;(c>o||c===o&&Xue(c))&&(o=c)}return o}u0r.exports=Jue});var c0r=s((oLe,f0r)=>{"use strict";var Yue=b(),v0r=a0r(),$ue=o0r();Yue(v0r,"ndarray",$ue);f0r.exports=v0r});var p0r=s((vLe,l0r)=>{"use strict";var Zue=ii(),Que=U(),mc=E();function Kue(r,e,t){var i,n;return mc(r)||mc(e)||mc(t)||t<0?NaN:t===0?r<e?0:1:(i=t*Que(2),n=r-e,.5*Zue(-n/i))}l0r.exports=Kue});var m0r=s((fLe,g0r)=>{"use strict";var roe=_(),eoe=ws().factory,dc=E(),toe=U(),ioe=ii();function noe(r,e){var t;if(dc(r)||dc(e)||e<0)return roe(NaN);if(e===0)return eoe(r);return t=e*toe(2),i;function i(n){var a;return dc(n)?NaN:(a=n-r,.5*ioe(-a/t))}}g0r.exports=noe});var q0r=s((cLe,h0r)=>{"use strict";var aoe=b(),d0r=p0r(),soe=m0r();aoe(d0r,"factory",soe);h0r.exports=d0r});var w0r=s((lLe,b0r)=>{"use strict";var y0r=E(),uoe=P(),ooe=ot(),voe=Yf();function foe(r,e){return y0r(r)||y0r(e)||e<=0?NaN:.5*uoe(ooe*voe*e*e)}b0r.exports=foe});var N0r=s((pLe,E0r)=>{"use strict";var coe=w0r();E0r.exports=coe});var A0r=s((gLe,S0r)=>{"use strict";var O0r=E();function loe(r,e){return O0r(r)||O0r(e)||e<=0?NaN:0}S0r.exports=loe});var T0r=s((mLe,_0r)=>{"use strict";var poe=A0r();_0r.exports=poe});var L0r=s((dLe,I0r)=>{"use strict";var goe=z(),moe=[doe,hoe,qoe,yoe,boe,woe,Eoe,Noe,Ooe,Soe,Aoe,_oe,Toe,Ioe,Loe,Roe,Poe,Foe,Moe,Boe,joe,koe,Coe,Voe,Uoe,Goe,xoe,Doe,Hoe,Woe,zoe,Xoe,Joe,Yoe,$oe,Zoe,Qoe,Koe,r1e,e1e,t1e,i1e,n1e,a1e,s1e,u1e,o1e,v1e,f1e,c1e,l1e,p1e,g1e,m1e,d1e,h1e,q1e,y1e,b1e,w1e,E1e,N1e,O1e,S1e,A1e,_1e,T1e,I1e,L1e,R1e,P1e,F1e,M1e,B1e,j1e,k1e,C1e,V1e,U1e,G1e,x1e,D1e,H1e,W1e,z1e,X1e,J1e,Y1e,$1e,Z1e,Q1e,K1e,r2e,e2e,t2e,i2e,n2e,a2e,s2e,u2e,o2e];function doe(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function hoe(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function qoe(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function yoe(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function boe(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function woe(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function Eoe(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function Noe(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function Ooe(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function Soe(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function Aoe(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function _oe(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function Toe(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function Ioe(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function Loe(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function Roe(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function Poe(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function Foe(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function Moe(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function Boe(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function joe(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function koe(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function Coe(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function Voe(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function Uoe(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function Goe(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function xoe(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function Doe(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function Hoe(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function Woe(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function zoe(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function Xoe(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function Joe(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function Yoe(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function $oe(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function Zoe(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function Qoe(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function Koe(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function r1e(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function e1e(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function t1e(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function i1e(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function n1e(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function a1e(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function s1e(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function u1e(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function o1e(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function v1e(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function f1e(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function c1e(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function l1e(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function p1e(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function g1e(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function m1e(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function d1e(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function h1e(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function q1e(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function y1e(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function b1e(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function w1e(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function E1e(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function N1e(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function O1e(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function S1e(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function A1e(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function _1e(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function T1e(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function I1e(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function L1e(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function R1e(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function P1e(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function F1e(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function M1e(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function B1e(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function j1e(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function k1e(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function C1e(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function V1e(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function U1e(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function G1e(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function x1e(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function D1e(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function H1e(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function W1e(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function z1e(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function X1e(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function J1e(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function Y1e(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function $1e(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function Z1e(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function Q1e(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function K1e(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function r2e(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function e2e(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function t2e(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function i2e(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function n2e(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function a2e(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function s2e(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function u2e(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function o2e(){return 1}function v2e(r){var e=goe(r),t=moe[e];return t(2*r-(2*e+1))}I0r.exports=v2e});var B0r=s((hLe,M0r)=>{"use strict";var R0r=sr(),f2e=L(),P0r=L0r(),F0r=.5641895835477563;function c2e(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?F0r/r:(e=r*r,F0r*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):P0r(400/(4+r)):r<-26.7?f2e:(e=r*r,r<-6.1?2*R0r(e):2*R0r(e)-P0r(400/(4-r)))}M0r.exports=c2e});var hc=s((qLe,j0r)=>{"use strict";var l2e=B0r();j0r.exports=l2e});var V0r=s((yLe,C0r)=>{"use strict";var p2e=P(),g2e=st(),m2e=g0(),d2e=ii(),h2e=hc(),q2e=V(),qc=E(),k0r=.7071067811865475;function y2e(r,e,t){var i;return qc(r)||qc(e)||qc(t)||t<0?NaN:t===0?r<e?q2e:0:(i=(r-e)/t,i<-1?p2e(h2e(-i*k0r)/2)-m2e(i)/2:g2e(-d2e(i*k0r)/2))}C0r.exports=y2e});var x0r=s((bLe,G0r)=>{"use strict";var U0r=E(),b2e=V();function w2e(r,e){return U0r(r)||U0r(e)?NaN:r<e?b2e:0}G0r.exports=w2e});var W0r=s((wLe,H0r)=>{"use strict";var E2e=_(),D0r=E(),N2e=V();function O2e(r){if(D0r(r))return E2e(NaN);return e;function e(t){return D0r(t)?NaN:t<r?N2e:0}}H0r.exports=O2e});var J0r=s((ELe,X0r)=>{"use strict";var S2e=b(),z0r=x0r(),A2e=W0r();S2e(z0r,"factory",A2e);X0r.exports=z0r});var Q0r=s((NLe,Z0r)=>{"use strict";var _2e=_(),T2e=J0r().factory,Y0r=E(),I2e=st(),L2e=g0(),R2e=ii(),P2e=hc(),F2e=P(),$0r=.7071067811865475;function M2e(r,e){if(Y0r(r)||Y0r(e)||e<0)return _2e(NaN);if(e===0)return T2e(r);return t;function t(i){var n=(i-r)/e;return n<-1?F2e(P2e(-n*$0r)/2)-L2e(n)/2:I2e(-R2e(n*$0r)/2)}}Z0r.exports=M2e});var esr=s((OLe,rsr)=>{"use strict";var B2e=b(),K0r=V0r(),j2e=Q0r();B2e(K0r,"factory",j2e);rsr.exports=K0r});var yc=s((SLe,tsr)=>{"use strict";var k2e=1.8378770664093456;tsr.exports=k2e});var asr=s((ALe,nsr)=>{"use strict";var C2e=P(),isr=D(),V2e=yc(),U2e=V(),G2e=L(),bc=E();function x2e(r,e,t){var i,n,a;return bc(r)||bc(e)||bc(t)||t<0?NaN:t===0?r===e?G2e:U2e:(i=isr(t,2),n=-.5*(2*C2e(t)+V2e),a=-1/(2*i),n+a*isr(r-e,2))}nsr.exports=x2e});var osr=s((_Le,usr)=>{"use strict";var D2e=L(),H2e=V(),ssr=E();function W2e(r,e){return ssr(r)||ssr(e)?NaN:r===e?D2e:H2e}usr.exports=W2e});var csr=s((TLe,fsr)=>{"use strict";var z2e=_(),X2e=L(),J2e=V(),vsr=E();function Y2e(r){if(vsr(r))return z2e(NaN);return e;function e(t){return vsr(t)?NaN:t===r?X2e:J2e}}fsr.exports=Y2e});var gsr=s((ILe,psr)=>{"use strict";var $2e=b(),lsr=osr(),Z2e=csr();$2e(lsr,"factory",Z2e);psr.exports=lsr});var qsr=s((LLe,hsr)=>{"use strict";var Q2e=_(),K2e=gsr().factory,r3e=yc(),msr=E(),dsr=D(),e3e=P();function t3e(r,e){var t,i,n;if(msr(r)||msr(e)||e<0)return Q2e(NaN);if(e===0)return K2e(r);return t=dsr(e,2),i=-.5*(2*e3e(e)+r3e),n=-1/(2*t),a;function a(u){return i+n*dsr(u-r,2)}}hsr.exports=t3e});var wsr=s((RLe,bsr)=>{"use strict";var i3e=b(),ysr=asr(),n3e=qsr();i3e(ysr,"factory",n3e);bsr.exports=ysr});var Osr=s((PLe,Nsr)=>{"use strict";var Esr=E();function a3e(r,e){return Esr(r)||Esr(e)||e<=0?NaN:r}Nsr.exports=a3e});var Asr=s((FLe,Ssr)=>{"use strict";var s3e=Osr();Ssr.exports=s3e});var Isr=s((MLe,Tsr)=>{"use strict";var _sr=E();function u3e(r,e){return _sr(r)||_sr(e)||e<=0?NaN:r}Tsr.exports=u3e});var Rsr=s((BLe,Lsr)=>{"use strict";var o3e=Isr();Lsr.exports=o3e});var Fsr=s((jLe,Psr)=>{"use strict";var wc=E(),v3e=sr(),f3e=D();function c3e(r,e,t){return wc(r)||wc(e)||wc(t)||t<=0?NaN:v3e(e*r+.5*f3e(t*r,2))}Psr.exports=c3e});var Bsr=s((kLe,Msr)=>{"use strict";var l3e=_(),Ec=E(),p3e=sr(),g3e=D();function m3e(r,e){if(Ec(r)||Ec(e)||e<=0)return l3e(NaN);return t;function t(i){return Ec(i)?NaN:p3e(r*i+.5*g3e(e*i,2))}}Msr.exports=m3e});var Csr=s((CLe,ksr)=>{"use strict";var d3e=b(),jsr=Fsr(),h3e=Bsr();d3e(jsr,"factory",h3e);ksr.exports=jsr});var Gsr=s((VLe,Usr)=>{"use strict";var Vsr=E();function q3e(r,e){return Vsr(r)||Vsr(e)||e<=0?NaN:r}Usr.exports=q3e});var Dsr=s((ULe,xsr)=>{"use strict";var y3e=Gsr();xsr.exports=y3e});var zsr=s((GLe,Wsr)=>{"use strict";var b3e=sr(),Hsr=D(),w3e=U(),E3e=ot(),N3e=L(),Nc=E();function O3e(r,e,t){var i,n,a;return Nc(r)||Nc(e)||Nc(t)||t<0?NaN:t===0?r===e?N3e:0:(i=Hsr(t,2),n=1/w3e(i*E3e),a=-1/(2*i),n*b3e(a*Hsr(r-e,2)))}Wsr.exports=O3e});var Ysr=s((xLe,Jsr)=>{"use strict";var S3e=L(),Xsr=E();function A3e(r,e){return Xsr(r)||Xsr(e)?NaN:r===e?S3e:0}Jsr.exports=A3e});var Qsr=s((DLe,Zsr)=>{"use strict";var _3e=_(),T3e=L(),$sr=E();function I3e(r){if($sr(r))return _3e(NaN);return e;function e(t){return $sr(t)?NaN:t===r?T3e:0}}Zsr.exports=I3e});var eur=s((HLe,rur)=>{"use strict";var L3e=b(),Ksr=Ysr(),R3e=Qsr();L3e(Ksr,"factory",R3e);rur.exports=Ksr});var nur=s((WLe,iur)=>{"use strict";var P3e=_(),F3e=eur().factory,Oc=E(),M3e=U(),B3e=sr(),tur=D(),j3e=ot();function k3e(r,e){var t,i,n;if(Oc(r)||Oc(e)||e<0)return P3e(NaN);if(e===0)return F3e(r);return t=tur(e,2),i=1/M3e(t*j3e),n=-1/(2*t),a;function a(u){return Oc(u)?NaN:i*B3e(n*tur(u-r,2))}}iur.exports=k3e});var uur=s((zLe,sur)=>{"use strict";var C3e=b(),aur=zsr(),V3e=nur();C3e(aur,"factory",V3e);sur.exports=aur});var fur=s((XLe,vur)=>{"use strict";var our=E();function U3e(r,e){return our(r)||our(e)||e<=0?NaN:0}vur.exports=U3e});var lur=s((JLe,cur)=>{"use strict";var G3e=fur();cur.exports=G3e});var mur=s((YLe,gur)=>{"use strict";var pur=E();function x3e(r,e){return pur(r)||pur(e)||e<=0?NaN:e}gur.exports=x3e});var hur=s(($Le,dur)=>{"use strict";var D3e=mur();dur.exports=D3e});var bur=s((ZLe,yur)=>{"use strict";var qur=E();function H3e(r,e){return qur(r)||qur(e)||e<=0?NaN:e*e}yur.exports=H3e});var Eur=s((QLe,wur)=>{"use strict";var W3e=bur();wur.exports=W3e});var Our=s((KLe,Nur)=>{"use strict";var Pr=rr(),z3e=q0r(),X3e=N0r(),J3e=T0r(),Y3e=esr(),$3e=wsr(),Z3e=Asr(),Q3e=Rsr(),K3e=Csr(),rve=Dsr(),eve=uur(),tve=vf(),ive=lur(),nve=hur(),ave=Eur();function sve(r){return Pr(r,"cdf",z3e),Pr(r,"entropy",X3e),Pr(r,"kurtosis",J3e),Pr(r,"logcdf",Y3e),Pr(r,"logpdf",$3e),Pr(r,"mean",Z3e),Pr(r,"median",Q3e),Pr(r,"mgf",K3e),Pr(r,"mode",rve),Pr(r,"pdf",eve),Pr(r,"quantile",tve),Pr(r,"skewness",ive),Pr(r,"stdev",nve),Pr(r,"variance",ave),r}Nur.exports=sve});var Aur=s((rRe,Sur)=>{"use strict";var uve=rr(),ove=Our();function vve(r){return uve(r,"normal",ove({})),r}Sur.exports=vve});var Tur=s((eRe,_ur)=>{"use strict";var da=rr(),fve=Car(),cve=Xar().ndarray,lve=t0r().ndarray,pve=c0r().ndarray,gve=Aur();function mve(r){return da(r,"bartlettTest",fve),da(r,"cumax",cve),da(r,"max",lve),da(r,"mskmax",pve),da(r,"dists",gve({})),r}_ur.exports=mve});var Lur=s((tRe,Iur)=>{"use strict";var dve=Q().isPrimitive,hve=y();function qve(r){return e;function e(t){if(!dve(t))throw new TypeError(hve("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Iur.exports=qve});var Pur=s((iRe,Rur)=>{"use strict";var yve=Lur();Rur.exports=yve});var jur=s((nRe,Bur)=>{"use strict";var Fur=Q().isPrimitive,Mur=y();function bve(r){return e;function e(t,i){if(!Fur(t))throw new TypeError(Mur("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Fur(i))throw new TypeError(Mur("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Bur.exports=bve});var Cur=s((aRe,kur)=>{"use strict";var wve=jur();kur.exports=wve});var Uur=s((sRe,Vur)=>{"use strict";var Sc=Q().isPrimitive,Ac=y();function Eve(r){return e;function e(t,i,n){if(!Sc(t))throw new TypeError(Ac("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Sc(i))throw new TypeError(Ac("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Sc(n))throw new TypeError(Ac("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}Vur.exports=Eve});var xur=s((uRe,Gur)=>{"use strict";var Nve=Uur();Gur.exports=Nve});var Hur=s((oRe,Dur)=>{"use strict";var _c=rr(),Ove=Pur(),Sve=Cur(),Ave=xur();function _ve(r){return _c(r,"s_o",Ove),_c(r,"ss_o",Sve),_c(r,"sss_o",Ave),r}Dur.exports=_ve});var zur=s((vRe,Wur)=>{"use strict";function Tve(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}Wur.exports=Tve});var Ku=s((fRe,Xur)=>{"use strict";var Ive=zur();Xur.exports=Ive});var Yur=s((cRe,Jur)=>{"use strict";function Lve(r){return r.toLowerCase()}Jur.exports=Lve});var cn=s((lRe,$ur)=>{"use strict";var Rve=Yur();$ur.exports=Rve});var Qur=s((pRe,Zur)=>{"use strict";var Pve=Ku(),Fve=cn(),ro=vt(),Mve=lt(),Bve=/\s+/g,jve=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,kve=/(?:\s|^)([^\s]+)(?=\s|$)/g,Cve=/([a-z0-9])([A-Z])/g;function Vve(r,e,t){return e=Fve(e),t===0?e:Pve(e)}function Uve(r){return r=ro(r,jve," "),r=ro(r,Bve," "),r=ro(r,Cve,"$1 $2"),r=Mve(r),ro(r,kve,Vve)}Zur.exports=Uve});var ror=s((gRe,Kur)=>{"use strict";var Gve=Qur();Kur.exports=Gve});var tor=s((mRe,eor)=>{"use strict";var xve=Q().isPrimitive,Dve=y(),Hve=ror();function Wve(r){if(!xve(r))throw new TypeError(Dve("invalid argument. First argument must be a string. Value: `%s`.",r));return Hve(r)}eor.exports=Wve});var nor=s((dRe,ior)=>{"use strict";var zve=tor();ior.exports=zve});var sor=s((hRe,aor)=>{"use strict";var Xve=Q().isPrimitive,Jve=y(),Yve=Ku();function $ve(r){if(!Xve(r))throw new TypeError(Jve("invalid argument. First argument must be a string. Value: `%s`.",r));return Yve(r)}aor.exports=$ve});var oor=s((qRe,uor)=>{"use strict";var Zve=sor();uor.exports=Zve});var cor=s((yRe,vor)=>{"use strict";function Qve(r){return r.toUpperCase()}vor.exports=Qve});var por=s((bRe,lor)=>{"use strict";var Kve=cor();lor.exports=Kve});var mor=s((wRe,gor)=>{"use strict";var rfe=por(),Tc=vt(),efe=lt(),tfe=/\s+/g,ife=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,nfe=/([a-z0-9])([A-Z])/g;function afe(r){return r=Tc(r,ife," "),r=Tc(r,nfe,"$1 $2"),r=efe(r),r=Tc(r,tfe,"_"),rfe(r)}gor.exports=afe});var hor=s((ERe,dor)=>{"use strict";var sfe=mor();dor.exports=sfe});var yor=s((NRe,qor)=>{"use strict";var ufe=Q().isPrimitive,ofe=y(),vfe=hor();function ffe(r){if(!ufe(r))throw new TypeError(ofe("invalid argument. Must provide a string. Value: `%s`.",r));return vfe(r)}qor.exports=ffe});var wor=s((ORe,bor)=>{"use strict";var cfe=yor();bor.exports=cfe});var Nor=s((SRe,Eor)=>{"use strict";var lfe=cn(),Ic=vt(),pfe=lt(),gfe=/\s+/g,mfe=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,dfe=/([a-z0-9])([A-Z])/g;function hfe(r){return r=Ic(r,mfe," "),r=Ic(r,dfe,"$1 $2"),r=pfe(r),r=Ic(r,gfe,"-"),lfe(r)}Eor.exports=hfe});var Sor=s((ARe,Oor)=>{"use strict";var qfe=Nor();Oor.exports=qfe});var _or=s((_Re,Aor)=>{"use strict";var yfe=Q().isPrimitive,bfe=y(),wfe=Sor();function Efe(r){if(!yfe(r))throw new TypeError(bfe("invalid argument. Must provide a string. Value: `%s`.",r));return wfe(r)}Aor.exports=Efe});var Ior=s((TRe,Tor)=>{"use strict";var Nfe=_or();Tor.exports=Nfe});var Ror=s((IRe,Lor)=>{"use strict";var Ofe=Q().isPrimitive,Sfe=y(),Afe=cn();function _fe(r){if(!Ofe(r))throw new TypeError(Sfe("invalid argument. Must provide a string. Value: `%s`.",r));return Afe(r)}Lor.exports=_fe});var For=s((LRe,Por)=>{"use strict";var Tfe=Ror();Por.exports=Tfe});var Bor=s((RRe,Mor)=>{"use strict";var Ife=Ku(),Lfe=cn(),eo=vt(),Rfe=lt(),Pfe=/\s+/g,Ffe=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Mfe=/(?:\s|^)([^\s]+)(?=\s|$)/g,Bfe=/([a-z0-9])([A-Z])/g;function jfe(r,e){return Ife(Lfe(e))}function kfe(r){return r=eo(r,Ffe," "),r=eo(r,Pfe," "),r=eo(r,Bfe,"$1 $2"),r=Rfe(r),eo(r,Mfe,jfe)}Mor.exports=kfe});var kor=s((PRe,jor)=>{"use strict";var Cfe=Bor();jor.exports=Cfe});var Vor=s((FRe,Cor)=>{"use strict";var Vfe=Q().isPrimitive,Ufe=y(),Gfe=kor();function xfe(r){if(!Vfe(r))throw new TypeError(Ufe("invalid argument. First argument must be a string. Value: `%s`.",r));return Gfe(r)}Cor.exports=xfe});var Gor=s((MRe,Uor)=>{"use strict";var Dfe=Vor();Uor.exports=Dfe});var Dor=s((BRe,xor)=>{"use strict";var Hfe=cn(),Lc=vt(),Wfe=lt(),zfe=/\s+/g,Xfe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Jfe=/([a-z0-9])([A-Z])/g;function Yfe(r){return r=Lc(r,Xfe," "),r=Lc(r,Jfe,"$1 $2"),r=Wfe(r),r=Lc(r,zfe,"_"),Hfe(r)}xor.exports=Yfe});var Wor=s((jRe,Hor)=>{"use strict";var $fe=Dor();Hor.exports=$fe});var Xor=s((kRe,zor)=>{"use strict";var Zfe=Q().isPrimitive,Qfe=y(),Kfe=Wor();function rce(r){if(!Zfe(r))throw new TypeError(Qfe("invalid argument. Must provide a string. Value: `%s`.",r));return Kfe(r)}zor.exports=rce});var Yor=s((CRe,Jor)=>{"use strict";var ece=Xor();Jor.exports=ece});var Qor=s((VRe,Zor)=>{"use strict";var tce=T(),$or=S(),ice=cr().isPrimitive,nce=Q().isPrimitive,Rc=y();function ace(r,e){return tce(e)?$or(e,"flags")&&(r.flags=e.flags,!nce(r.flags))?new TypeError(Rc("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):$or(e,"capture")&&(r.capture=e.capture,!ice(r.capture))?new TypeError(Rc("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Rc("invalid argument. Options argument must be an object. Value: `%s`.",e))}Zor.exports=ace});var to=s((URe,r1r)=>{"use strict";var sce=Qor(),Kor=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function uce(r){var e,t;if(arguments.length>0){if(e={},t=sce(e,r),t)throw t;return e.capture?new RegExp("("+Kor+")",e.flags):new RegExp(Kor,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}r1r.exports=uce});var t1r=s((GRe,e1r)=>{"use strict";var oce=to(),vce=oce({capture:!0});e1r.exports=vce});var n1r=s((xRe,i1r)=>{"use strict";var fce=to(),cce=fce();i1r.exports=cce});var u1r=s((DRe,s1r)=>{"use strict";var a1r=b(),Pc=to(),lce=t1r(),pce=n1r();a1r(Pc,"REGEXP",pce);a1r(Pc,"REGEXP_CAPTURE",lce);s1r.exports=Pc});var v1r=s((HRe,o1r)=>{"use strict";var gce=u1r().REGEXP;function mce(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),gce.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}o1r.exports=mce});var c1r=s((WRe,f1r)=>{"use strict";var dce=v1r();f1r.exports=dce});var p1r=s((zRe,l1r)=>{"use strict";var hce=Q().isPrimitive,qce=y(),yce=c1r();function bce(r){if(!hce(r))throw new TypeError(qce("invalid argument. Must provide a string. Value: `%s`.",r));return yce(r)}l1r.exports=bce});var m1r=s((XRe,g1r)=>{"use strict";var wce=p1r();g1r.exports=wce});var h1r=s((JRe,d1r)=>{"use strict";function Ece(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}d1r.exports=Ece});var y1r=s((YRe,q1r)=>{"use strict";var Nce=h1r();q1r.exports=Nce});var w1r=s(($Re,b1r)=>{"use strict";var Oce=Q().isPrimitive,Sce=y(),Ace=y1r();function _ce(r){if(!Oce(r))throw new TypeError(Sce("invalid argument. First argument must be a string. Value: `%s`.",r));return Ace(r)}b1r.exports=_ce});var N1r=s((ZRe,E1r)=>{"use strict";var Tce=w1r();E1r.exports=Tce});var S1r=s((QRe,O1r)=>{"use strict";var Ice=Q().isPrimitive,Lce=y();function Rce(r){if(!Ice(r))throw new TypeError(Lce("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}O1r.exports=Rce});var _1r=s((KRe,A1r)=>{"use strict";var Pce=S1r();A1r.exports=Pce});var I1r=s((rPe,T1r)=>{"use strict";var ve=rr(),Fce=nor(),Mce=oor(),Bce=wor(),jce=Ior(),kce=For(),Cce=Gor(),Vce=Yor(),Uce=m1r(),Gce=N1r(),xce=_1r();function Dce(r){return ve(r,"camelcase",Fce),ve(r,"capitalize",Mce),ve(r,"constantcase",Bce),ve(r,"kebabcase",jce),ve(r,"lowercase",kce),ve(r,"pascalcase",Cce),ve(r,"snakecase",Vce),ve(r,"startcase",Uce),ve(r,"uncapitalize",Gce),ve(r,"uppercase",xce),r}T1r.exports=Dce});var R1r=s((ePe,L1r)=>{"use strict";var Hce=rr(),Wce=Hur(),zce=I1r();function Xce(r){return Hce(r,"tools",Wce({})),r=zce(r),r}L1r.exports=Xce});var F1r=s((tPe,P1r)=>{"use strict";var fe=rr(),Jce=ah(),Yce=Eb(),$ce=Rb(),Zce=TN(),Qce=MF(),Kce=WV(),rle=Ier(),ele=Ver(),tle=Tur(),ile=R1r();function nle(){var r={};return fe(r,"array",Jce({})),fe(r,"assert",Yce({})),fe(r,"blas",$ce({})),fe(r,"datasets",Zce({})),fe(r,"math",Qce({})),fe(r,"ndarray",Kce({})),fe(r,"random",rle({})),fe(r,"simulate",ele({})),fe(r,"stats",tle({})),fe(r,"string",ile({})),r}P1r.exports=nle});var B1r=s((iPe,M1r)=>{"use strict";var ale=b(),Fc=F1r();ale(Fc,"CACHED",Fc());M1r.exports=Fc});var ule=s((nPe,j1r)=>{var sle=B1r().CACHED;j1r.exports=sle});return ule();})();
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
	hlen = 8 + ndims + strides.length + (5*1);
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
	N = shape[ ndims-2 ];
	M = shape[ ndims-1 ];
	// Create an iterator which iterates over each row in the ndarray:
	it = ns.ndarray.iterRows( arr );
	// Initialize a row counter:
	row = 0;
	// Assemble the output nested array...
	out = [ ns.array.filled( '', M ) ];
	out[ 0 ][ 0 ] = shape.join( 'x' ) + ' ndarray:';
	out = [ ns.array.filled( '', M ) ];
	while ( true ) {
		s = it.next();
		if ( s.done ) {
			break;
		}
		if ( row === 0 ) {
			out.push( ns.array.filled( '', M ) );
			out[ out.length-1 ][ 0 ] = '[ :, : ] ='; // FIXME: indexing subsequence
			out.push( ns.array.filled( '', M ) );
		}
		s = s.value;
		out.push( ns.ndarray.toArray( s.data, s.shape, s.strides, s.offset, s.order ) ); // TODO: replace with @stdlib/array/base equivalent
		row = (row+1) % N;
		if ( row === 0 ) {
			out.push( ns.array.filled( '', M ) );
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
