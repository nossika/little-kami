!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Kami",[],n):"object"==typeof exports?exports.Kami=n():t.Kami=n()}("undefined"!=typeof self?self:this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=58)}([function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(32)("wks"),o=e(17),i=e(4).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(4),o=e(0),i=e(10),u=e(8),f=function(t,n,e){var c,s,a,l=t&f.F,p=t&f.G,v=t&f.S,d=t&f.P,h=t&f.B,y=t&f.W,_=p?o:o[n]||(o[n]={}),x=_.prototype,g=p?r:v?r[n]:(r[n]||{}).prototype;p&&(e=n);for(c in e)(s=!l&&g&&void 0!==g[c])&&c in _||(a=s?g[c]:e[c],_[c]=p&&"function"!=typeof g[c]?e[c]:h&&s?i(a,r):y&&g[c]==a?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(a):d&&"function"==typeof a?i(Function.call,a):a,d&&((_.virtual||(_.virtual={}))[c]=a,t&f.R&&x&&!x[c]&&u(x,c,a)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(7),o=e(52),i=e(43),u=Object.defineProperty;n.f=e(1)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(5),o=e(24);t.exports=e(1)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(41);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports={}},function(t,n,e){var r=e(10),o=e(72),i=e(73),u=e(7),f=e(27),c=e(45),s={},a={},n=t.exports=function(t,n,e,l,p){var v,d,h,y,_=p?function(){return t}:c(t),x=r(e,l,n?2:1),g=0;if("function"!=typeof _)throw TypeError(t+" is not iterable!");if(i(_)){for(v=f(t.length);v>g;g++)if((y=n?x(u(d=t[g])[0],d[1]):x(t[g]))===s||y===a)return y}else for(h=_.call(t);!(d=h.next()).done;)if((y=o(h,x,d.value,n))===s||y===a)return y};n.BREAK=s,n.RETURN=a},function(t,n,e){var r=e(39),o=e(22);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(6);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,e){e(61);for(var r=e(4),o=e(8),i=e(12),u=e(2)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<f.length;c++){var s=f[c],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(5).f,o=e(9),i=e(2)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(22);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(17)("meta"),o=e(6),i=e(9),u=e(5).f,f=0,c=Object.isExtensible||function(){return!0},s=!e(11)(function(){return c(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!n)return"E";a(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!c(t))return!0;if(!n)return!1;a(t)}return t[r].w},v=function(t){return s&&d.NEED&&c(t)&&!i(t,r)&&a(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:v}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";var r=e(40),o=e(3),i=e(53),u=e(8),f=e(9),c=e(12),s=e(63),a=e(18),l=e(55),p=e(2)("iterator"),v=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,n,e,h,y,_,x){s(e,n,h);var g,b,S,w=function(t){if(!v&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},m=n+" Iterator",O="values"==y,k=!1,E=t.prototype,j=E[p]||E["@@iterator"]||y&&E[y],M=j||w(y),L=y?O?w("entries"):M:void 0,T="Array"==n?E.entries||j:j;if(T&&(S=l(T.call(new t)))!==Object.prototype&&S.next&&(a(S,m,!0),r||f(S,p)||u(S,p,d)),O&&j&&"values"!==j.name&&(k=!0,M=function(){return j.call(this)}),r&&!x||!v&&!k&&E[p]||u(E,p,M),c[n]=M,c[m]=d,y)if(g={values:O?M:w("values"),keys:_?M:w("keys"),entries:L},x)for(b in g)b in E||i(E,b,g[b]);else o(o.P+o.F*(v||k),n,g);return g}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(7),o=e(44),i=e(33),u=e(29)("IE_PROTO"),f=function(){},c=function(){var t,n=e(42)("iframe"),r=i.length;for(n.style.display="none",e(66).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(f.prototype=r(t),e=new f,f.prototype=null,e[u]=t):e=c(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(54),o=e(33);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(32)("keys"),o=e(17);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(8);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(4),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){"use strict";var r=e(67)(!0);e(23)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n){},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";n.__esModule=!0;var r=e(88),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(6),o=e(4).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(6);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(5),o=e(7),i=e(26);t.exports=e(1)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),f=u.length,c=0;f>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){var r=e(46),o=e(2)("iterator"),i=e(12);t.exports=e(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(21),o=e(2)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,f;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(f=r(n))&&"function"==typeof n.callee?"Arguments":f}},function(t,n,e){t.exports={default:e(69),__esModule:!0}},function(t,n,e){"use strict";var r=e(4),o=e(3),i=e(20),u=e(11),f=e(8),c=e(30),s=e(13),a=e(31),l=e(6),p=e(18),v=e(5).f,d=e(49)(0),h=e(1);t.exports=function(t,n,e,y,_,x){var g=r[t],b=g,S=_?"set":"add",w=b&&b.prototype,m={};return h&&"function"==typeof b&&(x||w.forEach&&!u(function(){(new b).entries().next()}))?(b=n(function(n,e){a(n,b,t,"_c"),n._c=new g,void 0!=e&&s(e,_,n[S],n)}),d("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var n="add"==t||"set"==t;t in w&&(!x||"clear"!=t)&&f(b.prototype,t,function(e,r){if(a(this,b,t),!n&&x&&!l(e))return"get"==t&&void 0;var o=this._c[t](0===e?0:e,r);return n?this:o})}),x||v(b.prototype,"size",{get:function(){return this._c.size}})):(b=y.getConstructor(n,t,_,S),c(b.prototype,e),i.NEED=!0),p(b,t),m[t]=b,o(o.G+o.W+o.F,m),x||y.setStrong(b,t,_),b}},function(t,n,e){var r=e(10),o=e(39),i=e(19),u=e(27),f=e(75);t.exports=function(t,n){var e=1==t,c=2==t,s=3==t,a=4==t,l=6==t,p=5==t||l,v=n||f;return function(n,f,d){for(var h,y,_=i(n),x=o(_),g=r(f,d,3),b=u(x.length),S=0,w=e?v(n,b):c?v(n,0):void 0;b>S;S++)if((p||S in x)&&(h=x[S],y=g(h,S,_),t))if(e)w[S]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:w.push(h)}else if(a)return!1;return l?-1:s||a?a:w}}},function(t,n,e){"use strict";var r=e(3);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,n=Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,e){"use strict";var r=e(3),o=e(41),i=e(10),u=e(13);t.exports=function(t){r(r.S,t,{from:function(t){var n,e,r,f,c=arguments[1];return o(this),n=void 0!==c,n&&o(c),void 0==t?new this:(e=[],n?(r=0,f=i(c,arguments[2],2),u(t,!1,function(t){e.push(f(t,r++))})):u(t,!1,e.push,e),new this(e))}})}},function(t,n,e){t.exports=!e(1)&&!e(11)(function(){return 7!=Object.defineProperty(e(42)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){t.exports=e(8)},function(t,n,e){var r=e(9),o=e(14),i=e(64)(!1),u=e(29)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,s=[];for(e in f)e!=u&&r(f,e)&&s.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(9),o=e(19),i=e(29)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(21);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(3),o=e(0),i=e(11);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){var t={},n=this._originGrids.map(function(n){return n.map(function(n){return t[n]=!0,new w.default(n)})});(0,b.default)(n,{getNode:{value:function(t,n){return this[n]&&this[n][t]||null},enumerable:!1}}),n.forEach(function(t,e){t.forEach(function(t,r){t.link(n.getNode(r,e-1),n.getNode(r,e+1),n.getNode(r+(r+e&1?1:-1),e))})}),this.nodeGrids=n,this._tapCount=0,this.types=(0,x.default)(t).map(function(t){return+t}).filter(function(t){return t}),this._canvas&&"function"==typeof this.mount&&this.mount(this._canvas)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,u,f=e(59),c=r(f),s=e(47),a=r(s),l=e(82),p=r(l),v=e(36),d=r(v),h=e(37),y=r(h),_=e(91),x=r(_),g=e(94),b=r(g),S=e(97),w=r(S),m=e(98),O=(u=i=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.canvas,r=void 0===e?null:e,i=n.grids,u=n.colors,f=void 0===u?t.defaultColors:u,c=n.lines,s=void 0===c?t.defaultLines:c;if((0,d.default)(this,t),!i||!i[0])throw new Error("please use correct grids");this._originGrids=i,this._canvas=r,this.colors=f,this.lines=s,o.call(this)}return(0,y.default)(t,[{key:"tap",value:function(t,n){var e=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.delay,i=r.onEnd,u=t.type;if(n!==u){this._tapCount++;var f=new p.default,s=new a.default([t]);!function t(){var r=new a.default;s.forEach(function(t){f.add(t),t.type=n,"function"==typeof e.setStyles&&e.setStyles({node:t});var o=!0,i=!1,s=void 0;try{for(var a,l=(0,c.default)(t._linkNodes);!(o=(a=l.next()).done);o=!0){var p=a.value;f.has(p)||p.type!==u||r.add(p)}}catch(t){i=!0,s=t}finally{try{!o&&l.return&&l.return()}finally{if(i)throw s}}}),s=r,s.size?o?(o=o/10*9,"function"==typeof e.render&&e.render(),setTimeout(t,o)):t():("function"==typeof e.render&&e.render(),i&&i({result:e.checkConsistency(),tapCount:e._tapCount}))}()}}},{key:"reset",value:function(){o.call(this)}},{key:"checkConsistency",value:function(){var t=void 0,n=!0,e=!1,r=void 0;try{for(var o,i=(0,c.default)(this.nodeGrids);!(n=(o=i.next()).done);n=!0){var u=o.value,f=!0,s=!1,a=void 0;try{for(var l,p=(0,c.default)(u);!(f=(l=p.next()).done);f=!0){var v=l.value;if(t||(t=v.type),v.type&&v.type!==t)return!1}}catch(t){s=!0,a=t}finally{try{!f&&p.return&&p.return()}finally{if(s)throw a}}}}catch(t){e=!0,r=t}finally{try{!n&&i.return&&i.return()}finally{if(e)throw r}}return!0}}]),t}(),i.defaultLines=m.defaultLines,i.defaultColors=m.defaultColors,u);n.default=O,t.exports=O},function(t,n,e){t.exports={default:e(60),__esModule:!0}},function(t,n,e){e(16),e(34),t.exports=e(68)},function(t,n,e){"use strict";var r=e(62),o=e(38),i=e(12),u=e(14);t.exports=e(23)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n,e){"use strict";var r=e(25),o=e(24),i=e(18),u={};e(8)(u,e(2)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(14),o=e(27),i=e(65);t.exports=function(t){return function(n,e,u){var f,c=r(n),s=o(c.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if((f=c[a++])!=f)return!0}else for(;s>a;a++)if((t||a in c)&&c[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(28),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(4).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(28),o=e(22);t.exports=function(t){return function(n,e){var i,u,f=String(o(n)),c=r(e),s=f.length;return c<0||c>=s?t?"":void 0:(i=f.charCodeAt(c),i<55296||i>56319||c+1===s||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){var r=e(7),o=e(45);t.exports=e(0).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},function(t,n,e){e(35),e(34),e(16),e(70),e(77),e(80),e(81),t.exports=e(0).Set},function(t,n,e){"use strict";var r=e(71),o=e(15);t.exports=e(48)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},function(t,n,e){"use strict";var r=e(5).f,o=e(25),i=e(30),u=e(10),f=e(31),c=e(13),s=e(23),a=e(38),l=e(74),p=e(1),v=e(20).fastKey,d=e(15),h=p?"_s":"size",y=function(t,n){var e,r=v(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,s){var a=t(function(t,r){f(t,a,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&c(r,e,t[s],t)});return i(a.prototype,{clear:function(){for(var t=d(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var e=d(this,n),r=y(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[h]--}return!!r},forEach:function(t){d(this,n);for(var e,r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(d(this,n),t)}}),p&&r(a.prototype,"size",{get:function(){return d(this,n)[h]}}),a},def:function(t,n,e){var r,o,i=y(t,n);return i?i.v=e:(t._l=i={i:o=v(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[h]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,n,e){s(t,n,function(t,e){this._t=d(t,n),this._k=e,this._l=void 0},function(){for(var t=this,n=t._k,e=t._l;e&&e.r;)e=e.p;return t._t&&(t._l=e=e?e.n:t._t._f)?"keys"==n?a(0,e.k):"values"==n?a(0,e.v):a(0,[e.k,e.v]):(t._t=void 0,a(1))},e?"entries":"values",!e,!0),l(n)}}},function(t,n,e){var r=e(7);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(12),o=e(2)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){"use strict";var r=e(4),o=e(0),i=e(5),u=e(1),f=e(2)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[f]&&i.f(n,f,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(76);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(6),o=e(56),i=e(2)("species");t.exports=function(t){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){var r=e(3);r(r.P+r.R,"Set",{toJSON:e(78)("Set")})},function(t,n,e){var r=e(46),o=e(79);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},function(t,n,e){var r=e(13);t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},function(t,n,e){e(50)("Set")},function(t,n,e){e(51)("Set")},function(t,n,e){t.exports={default:e(83),__esModule:!0}},function(t,n,e){e(35),e(16),e(84),e(86),e(87),t.exports=e(0).WeakSet},function(t,n,e){"use strict";var r=e(85),o=e(15);e(48)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(o(this,"WeakSet"),t,!0)}},r,!1,!0)},function(t,n,e){"use strict";var r=e(30),o=e(20).getWeak,i=e(7),u=e(6),f=e(31),c=e(13),s=e(49),a=e(9),l=e(15),p=s(5),v=s(6),d=0,h=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},_=function(t,n){return p(t.a,function(t){return t[0]===n})};y.prototype={get:function(t){var n=_(this,t);if(n)return n[1]},has:function(t){return!!_(this,t)},set:function(t,n){var e=_(this,t);e?e[1]=n:this.a.push([t,n])},delete:function(t){var n=v(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,i){var s=t(function(t,r){f(t,s,n,"_i"),t._t=n,t._i=d++,t._l=void 0,void 0!=r&&c(r,e,t[i],t)});return r(s.prototype,{delete:function(t){if(!u(t))return!1;var e=o(t);return!0===e?h(l(this,n)).delete(t):e&&a(e,this._i)&&delete e[this._i]},has:function(t){if(!u(t))return!1;var e=o(t);return!0===e?h(l(this,n)).has(t):e&&a(e,this._i)}}),s},def:function(t,n,e){var r=o(i(n),!0);return!0===r?h(t).set(n,e):r[t._i]=e,t},ufstore:h}},function(t,n,e){e(50)("WeakSet")},function(t,n,e){e(51)("WeakSet")},function(t,n,e){t.exports={default:e(89),__esModule:!0}},function(t,n,e){e(90);var r=e(0).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(3);r(r.S+r.F*!e(1),"Object",{defineProperty:e(5).f})},function(t,n,e){t.exports={default:e(92),__esModule:!0}},function(t,n,e){e(93),t.exports=e(0).Object.keys},function(t,n,e){var r=e(19),o=e(26);e(57)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){t.exports={default:e(95),__esModule:!0}},function(t,n,e){e(96);var r=e(0).Object;t.exports=function(t,n){return r.defineProperties(t,n)}},function(t,n,e){var r=e(3);r(r.S+r.F*!e(1),"Object",{defineProperties:e(44)})},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(47),i=r(o),u=e(36),f=r(u),c=e(37),s=r(c),a=function(){function t(n){(0,f.default)(this,t),this.type=n,this.color="",this.line="",this._linkNodes=new i.default}return(0,s.default)(t,[{key:"link",value:function(){var n=this;if(this.type){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];r.filter(function(n){return n&&n instanceof t&&n.type}).forEach(function(t){n._linkNodes.has(t)||(n._linkNodes.add(t),t._linkNodes.add(n))})}}},{key:"unlink",value:function(){for(var n=this,e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];r.filter(function(n){return n&&n instanceof t&&n.type}).forEach(function(t){n._linkNodes.delete(t),t._linkNodes.delete(n)})}}]),t}();n.default=a},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.defaultLines={1:"rgba(205,150,112,.15)",2:"rgba(190,112,34,.15)",3:"rgba(190,133,84,.15)",4:"rgba(140,90,5,.15)",5:"rgba(120,80,36,.15)",6:"rgba(202,129,60,.15)"},n.defaultColors={1:"rgba(255,186,132,1)",2:"rgba(233,139,42,1)",3:"rgba(233,163,104,1)",4:"rgba(177,120,6,1)",5:"rgba(150,99,46,1)",6:"rgba(252,159,77,1)"}}])});
//# sourceMappingURL=Kami.core.js.map