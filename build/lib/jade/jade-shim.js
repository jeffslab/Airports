/*! AirPorts 22-09-2014 */
(function(t){"function"==typeof define?define(function(){t()}):t()})(function(t){if(!Function.prototype.bind){var e=Array.prototype.slice;Function.prototype.bind=function(){function t(){if(this instanceof t){var n=Object.create(i.prototype);return i.apply(n,o.concat(e.call(arguments))),n}return i.call.apply(i,o.concat(e.call(arguments)))}var i=this;if("function"!=typeof i.apply||"function"!=typeof i.call)return new TypeError;var o=e.call(arguments);return t.length="function"==typeof i?Math.max(i.length-o.length,0):0,t}}var i=Function.prototype.call;Array.prototype;var o,n,s,r,a,l=Object.prototype,h=i.bind(l.hasOwnProperty);if((a=h(l,"__defineGetter__"))&&(o=i.bind(l.__defineGetter__),n=i.bind(l.__defineSetter__),s=i.bind(l.__lookupGetter__),r=i.bind(l.__lookupSetter__)),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){for(var i=+this.length,o=0;i>o;o++)o in this&&t.call(e,this[o],o,this)}),Array.prototype.map||(Array.prototype.map=function(t){var e=+this.length;if("function"!=typeof t)throw new TypeError;for(var i=Array(e),o=arguments[1],n=0;e>n;n++)n in this&&(i[n]=t.call(o,this[n],n,this));return i}),Array.prototype.filter||(Array.prototype.filter=function(t){for(var e=[],i=arguments[1],o=0;this.length>o;o++)t.call(i,this[o])&&e.push(this[o]);return e}),Array.prototype.every||(Array.prototype.every=function(t){for(var e=arguments[1],i=0;this.length>i;i++)if(!t.call(e,this[i]))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t){for(var e=arguments[1],i=0;this.length>i;i++)if(t.call(e,this[i]))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var e=+this.length;if("function"!=typeof t)throw new TypeError;if(0===e&&1===arguments.length)throw new TypeError;var i=0;if(arguments.length>=2)var o=arguments[1];else for(;;){if(i in this){o=this[i++];break}if(++i>=e)throw new TypeError}for(;e>i;i++)i in this&&(o=t.call(null,o,this[i],i,this));return o}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){var e=+this.length;if("function"!=typeof t)throw new TypeError;if(0===e&&1===arguments.length)throw new TypeError;var i,o=e-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in this){i=this[o--];break}if(0>--o)throw new TypeError}for(;o>=0;o--)o in this&&(i=t.call(null,i,this[o],o,this));return i}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e=this.length;if(!e)return-1;var i=arguments[1]||0;if(i>=e)return-1;for(0>i&&(i+=e);e>i;i++)if(i in this&&t===this[i])return i;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){var e=this.length;if(!e)return-1;var i=arguments[1]||e;for(0>i&&(i+=e),i=Math.min(i,e-1);i>=0;i--)if(i in this&&t===this[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(t){return t.__proto__||t.constructor.prototype}),void function(t){"use strict";function e(t){null==t&&(t={});var e={};try{return Object.defineProperty(t,"test",{get:function(){return e}}),t.test===e}catch(i){return!1}}function i(t){null==t&&(t={});var e={};t.test=e;try{var i=Object.getOwnPropertyDescriptor(t,"test");return i.value===e}catch(o){return!1}}if(Object.defineProperty){var o=e(),n=e(t.document.createElement("div"));if(n&&o||(Object.__defineProperty__=Object.defineProperty),Object.getOwnPropertyDescriptor){var s=i(),r=i(t.document.createElement("div"));r&&s||(Object.__getOwnPropertyDescriptor__=Object.getOwnPropertyDescriptor)}}}(this),!Object.getOwnPropertyDescriptor||Object.__getOwnPropertyDescriptor__){var p="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(e,i){if(Object.__getOwnPropertyDescriptor__)try{return Object.__getOwnPropertyDescriptor__(e,i)}catch(o){}if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError(p+e);if("__proto__"==i&&!h(e,i))return t;var n,c,f;if(n={enumerable:!0,configurable:!0},a){var d=e.__proto__;e.__proto__=l;var c=s(e,i),f=r(e,i);if(e.__proto__=d,c||f)return c&&(n.get=c),f&&(n.set=f),n}return n.value=e[i],n}}if(Object.create||(Object.create=function(e,i){var o;if(null===e)o={};else{if("object"!=typeof e)throw new TypeError("typeof prototype["+typeof e+"] != 'object'");var n=function(){};n.prototype=e,o=new n}return o.__proto__=e,i!==t&&Object.defineProperties(o,i),o}),!Object.defineProperty||Object.__defineProperty__){var c="Property description must be an object: ",f="Object.defineProperty called on non-object: ",d="getters & setters can not be defined on this javascript engine";Object.defineProperty=function(t,e,i){if(Object.__defineProperty__)try{return Object.__defineProperty__(t,e,i)}catch(p){}if("object"!=typeof t&&"function"!=typeof t)throw new TypeError(f+t);if("object"!=typeof i||null===i)throw new TypeError(c+i);if(h(i,"value"))if(a&&(s(t,e)||r(t,e))){var u=t.__proto__;t.__proto__=l,delete t[e],t[e]=i.value,t.__proto__=u}else t[e]=i.value;else{if(!a)throw new TypeError(d);h(i,"get")&&o(t,e,i.get),h(i,"set")&&n(t,e,i.set)}return t}}Object.defineProperties||(Object.defineProperties=function(t,e){for(var i in e)h(e,i)&&Object.defineProperty(t,i,e[i]);return t}),Object.seal||(Object.seal=function(t){return t}),Object.freeze||(Object.freeze=function(t){return t});try{Object.freeze(function(){})}catch(u){Object.freeze=function(t){return function(e){return"function"==typeof e?e:t(e)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(t){return t}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(){return!0}),Object.keys||(Object.keys=function(t){for(var e=[],i=Object.getOwnPropertyNames(t),o=0;i.length>o;o++)Object.getOwnPropertyDescriptor(t,i[o]).enumerable&&e.push(i[o]);return e}),!Object.getOwnPropertyNames){var g=!0,v=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],m=v.length;for(var y in{toString:null})g=!1;Object.getOwnPropertyNames=function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");var e=[];for(var i in t)"__proto__"!==i&&h(t,i)&&e.push(i);if(g)for(var o=0,n=m;n>o;o++){var s=v[o];h(t,s)&&e.push(s)}return e}}if(Date.prototype.toISOString||(Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+(this.getUTCMonth()+1)+"-"+this.getUTCDate()+"T"+this.getUTCHours()+":"+this.getUTCMinutes()+":"+this.getUTCSeconds()+"Z"}),Date.now||(Date.now=function(){return(new Date).getTime()}),Date.prototype.toJSON||(Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()}),isNaN(Date.parse("T00:00"))&&(Date=function(e){var i=function(t,o,n,s,r,a,l){var h=arguments.length;if(this instanceof e){var p=1===h&&t+""===t?new e(i.parse(t)):h>=7?new e(t,o,n,s,r,a,l):h>=6?new e(t,o,n,s,r,a):h>=5?new e(t,o,n,s,r):h>=4?new e(t,o,n,s):h>=3?new e(t,o,n):h>=2?new e(t,o):h>=1?new e(t):new e;return p.constructor=i,p}return e.apply(this,arguments)},o=RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");for(var n in e)i[n]=e[n];return i.now=e.now,i.UTC=e.UTC,i.prototype=e.prototype,i.prototype.constructor=i,i.parse=function(i){var n=o.exec(i);if(n){n.shift();for(var s=n[0]===t,r=0;10>r;r++)7!==r&&(n[r]=+(n[r]||(3>r?1:0)),1===r&&n[r]--);if(s)return 1e3*(60*(60*n[3]+n[4])+n[5])+n[6];var a=1e3*60*(60*n[8]+n[9]);return"-"===n[6]&&(a=-a),e.UTC.apply(this,n.slice(0,7))+a}return e.parse.apply(this,arguments)},i}(Date)),!String.prototype.trim){var b=/^\s\s*/,w=/\s\s*$/;String.prototype.trim=function(){return(this+"").replace(b,"").replace(w,"")}}});