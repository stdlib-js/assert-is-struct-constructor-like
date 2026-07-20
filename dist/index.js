"use strict";var c=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(o){throw (i=0, o)}};};var f=c(function(g,n){
var e=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,t=require('@stdlib/assert-is-function/dist'),s=require('@stdlib/assert-has-own-property/dist');function O(r){return t(r)&&e(r.alignment)&&e(r.byteLength)&&t(r.byteLengthOf)&&t(r.byteOffsetOf)&&t(r.bufferOf)&&t(r.isStruct)&&t(r.viewOf)&&s(r,"fields")&&s(r,"layout")}n.exports=O
});var u=f();module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
