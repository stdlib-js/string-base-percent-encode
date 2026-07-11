"use strict";var u=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var o=u(function(b,n){
var E=require('@stdlib/string-utf16-to-utf8-array/dist'),s=95,c=46,f=45,p=126,N=48,R=57,l=65,A=90,D=97,I=122;function O(v){var r,a,i,t,e;for(t=E(v),i=t.length,a="",e=0;e<i;e++)r=t[e],r>=N&&r<=R||r>=l&&r<=A||r>=D&&r<=I||r===f||r===c||r===s||r===p?a+=v.charAt(e):a+="%"+r.toString(16).toUpperCase();return a}n.exports=O
});var T=o();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
