"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=u(function(b,n){
var E=require('@stdlib/string-utf16-to-utf8-array/dist'),s=95,c=46,f=45,p=126,N=48,R=57,l=65,A=90,D=97,I=122;function O(e){var r,v,i,t,a;for(t=E(e),i=t.length,v="",a=0;a<i;a++)r=t[a],r>=N&&r<=R||r>=l&&r<=A||r>=D&&r<=I||r===f||r===c||r===s||r===p?v+=e.charAt(a):v+="%"+r.toString(16).toUpperCase();return v}n.exports=O
});var T=o();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
