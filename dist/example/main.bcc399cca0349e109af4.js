webpackJsonp([1],{128:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(60),o=i(r),l=n(40),s=i(l),a=n(41),u=i(a),f=function(){function e(t){(0,s.default)(this,e),this.type=t,this.color="",this.line="",this._linkNodes=new o.default}return(0,u.default)(e,[{key:"link",value:function(){var t=this;if(this.type){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];i.filter(function(t){return t&&t instanceof e&&t.type}).forEach(function(e){t._linkNodes.has(e)||(t._linkNodes.add(e),e._linkNodes.add(t))})}}},{key:"unlink",value:function(){for(var t=this,n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];i.filter(function(t){return t&&t instanceof e&&t.type}).forEach(function(e){t._linkNodes.delete(e),e._linkNodes.delete(t)})}}]),e}();t.default=f},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.defaultLines={1:"rgba(205,150,112,.15)",2:"rgba(190,112,34,.15)",3:"rgba(190,133,84,.15)",4:"rgba(140,90,5,.15)",5:"rgba(120,80,36,.15)",6:"rgba(202,129,60,.15)"},t.defaultColors={1:"rgba(255,186,132,1)",2:"rgba(233,139,42,1)",3:"rgba(233,163,104,1)",4:"rgba(177,120,6,1)",5:"rgba(150,99,46,1)",6:"rgba(252,159,77,1)"}},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{grids:[[1,1,3,1,1,2,1,1,1,1],[1,1,3,1,0,1,1,1,1,1],[1,1,3,0,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,1],[1,1,1,1,2,2,2,4,4,1],[1,1,1,1,1,2,1,1,1,1],[1,1,3,1,1,1,1,1,1,1],[1,1,3,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,2,2,2,1,1,1],[1,1,1,1,1,2,1,1,1,1],[1,1,3,1,1,1,1,1,1,1],[1,1,3,1,1,1,1,1,1,1]],steps:6},{grids:[[1,1,1,3,1,1,1,1,1,1],[1,1,3,1,1,1,1,1,1,1],[1,3,3,1,1,1,1,1,1,1],[3,1,3,1,1,1,2,1,1,1],[1,1,1,1,1,2,2,1,1,1],[1,1,3,1,2,2,2,1,1,1],[1,1,3,1,1,2,1,1,1,1],[1,1,3,0,0,1,1,1,1,1],[1,1,3,0,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,1],[1,1,1,1,2,2,2,4,4,1],[1,1,1,1,1,2,1,1,1,1],[1,1,3,1,1,1,1,1,1,1],[1,1,3,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,2,2,2,1,1,1],[1,1,1,1,1,2,1,1,1,1],[1,1,3,1,1,1,1,1,1,1],[1,1,3,1,1,1,1,1,1,1],[1,1,3,1,1,6,6,1,1,1],[1,1,3,5,5,5,5,1,1,1],[1,1,1,1,1,6,6,1,1,1]],steps:5}]},65:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(){var e=a.default[u].grids,t=a.default[u].steps,n=new l.default({grids:e}),i=document.querySelector("#canvas-wrapper"),o=document.querySelector("#colors-wrapper"),s=document.querySelector("#tips-wrapper");i.innerHTML='<canvas width="300" height="400"></canvas>',o.innerHTML="",n.types.forEach(function(e){o.innerHTML+='<span\n            data-type="'+e+'" \n            class="color"\n            style="background: '+n.colors[e]+"; border: 3px solid "+n.lines[e]+'"\n        ></span>'}),s.innerHTML="<div>请在"+t+"步之内完成</div>";var f=void 0,d=[].slice.call(o.querySelectorAll("[data-type]"));d.forEach(function(e){e.addEventListener("click",function(e){d.forEach(function(e){e.classList.remove("selected")}),this.classList.add("selected"),f=+this.dataset.type})}),o.querySelector("[data-type]").click();var c=i.querySelector("canvas");c.addEventListener("click",function(e){var i=n.getNodeByOffset(e.offsetX/c.offsetWidth,e.offsetY/c.offsetHeight);n.tap(i,f,{onEnd:function(e){var i=e.result,o=e.tapCount;if(i){if(++u>=a.default.length)return void alert("已完成所有");alert("完成"),r()}else o>t&&(alert("失败"),n.reset())},delay:100})}),n.mount(c)}var o=n(66),l=i(o),s=n(130),a=i(s),u=0;r()},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(67),r=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=r.default},67:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(24),o=i(r),l=n(84),s=i(l),a=n(40),u=i(a),f=n(41),d=i(f),c=n(90),h=i(c),v=n(91),y=i(v),p=n(99),_=i(p),g=function(e){function t(){return(0,u.default)(this,t),(0,h.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,d.default)(t,[{key:"mount",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.colors,r=n.lines;this._canvas=e,i=i||this.colors||t.defaultColors,r=r||this.lines||t.defaultLines,this.setStyles({colors:i,lines:r}),this.render()}},{key:"setStyles",value:function(e){var t=this,n=e.node,i=e.colors,r=e.lines;this.colors=i||this.colors,this.lines=r||this.lines,n?(n.color=this.colors[n.type]||"",n.line="object"===(0,o.default)(this.lines)?this.lines[n.type]:n.type?this.lines:""):this.nodeGrids.forEach(function(e){e.forEach(function(e){e.color=t.colors[e.type]||"",e.line="object"===(0,o.default)(t.lines)?t.lines[e.type]:e.type?t.lines:""})})}},{key:"render",value:function(){if(this._canvas){var e=this.nodeGrids,t=this._canvas,n=t.width,i=t.height,r=t.getContext("2d"),o=e[0].length,l=e.length,s=n/o,a=i/((l-1)/2)/2;r.clearRect(0,0,n,i),e.forEach(function(e,t){e.forEach(function(e,n){var i=n+t&1;r.beginPath(),i?(r.moveTo(s*n,a*t),r.lineTo(s*(n+1),a*(t-1)),r.lineTo(s*(n+1),a*(t+1)),r.lineTo(s*n,a*t)):(r.moveTo(s*n,a*(t-1)),r.lineTo(s*(n+1),a*t),r.lineTo(s*n,a*(t+1)),r.lineTo(s*n,a*(t-1))),r.fillStyle=e.color,e.color&&r.fill(),r.strokeStyle=e.line,e.line&&r.stroke(),r.closePath()})})}}},{key:"getNodeByOffset",value:function(e,t){var n=1/this.nodeGrids[0].length,i=1/(this.nodeGrids.length-1),r=e/n|0,o=e/n-r,l=t/i|0,s=1-(t/i-l),a=r+l&1?1-o<s:o<s,u=r,f=a?l:l+1;return this.nodeGrids[f][u]}}]),t}(_.default);t.default=g,e.exports=g},99:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(){var e={},t=this._originGrids.map(function(t){return t.map(function(t){return e[t]=!0,new E.default(t)})});(0,b.default)(t,{getNode:{value:function(e,t){return this[t]&&this[t][e]||null},enumerable:!1}}),t.forEach(function(e,n){e.forEach(function(e,i){e.link(t.getNode(i,n-1),t.getNode(i,n+1),t.getNode(i+(i+n&1?1:-1),n))})}),this.nodeGrids=t,this._tapCount=0,this.types=(0,g.default)(e).map(function(e){return+e}).filter(function(e){return e}),this._canvas&&"function"==typeof this.mount&&this.mount(this._canvas)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,l,s=n(100),a=i(s),u=n(60),f=i(u),d=n(116),c=i(d),h=n(40),v=i(h),y=n(41),p=i(y),_=n(122),g=i(_),k=n(125),b=i(k),w=n(128),E=i(w),m=n(129),M=(l=o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.canvas,i=void 0===n?null:n,o=t.grids,l=t.colors,s=void 0===l?e.defaultColors:l,a=t.lines,u=void 0===a?e.defaultLines:a;if((0,v.default)(this,e),!o||!o[0])throw new Error("please use correct grids");this._originGrids=o,this._canvas=i,this.colors=s,this.lines=u,r.call(this)}return(0,p.default)(e,[{key:"tap",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.delay,o=i.onEnd,l=e.type;if(t!==l){this._tapCount++;var s=new c.default,u=new f.default([e]);!function e(){var i=new f.default;u.forEach(function(e){s.add(e),e.type=t,"function"==typeof n.setStyles&&n.setStyles({node:e});var r=!0,o=!1,u=void 0;try{for(var f,d=(0,a.default)(e._linkNodes);!(r=(f=d.next()).done);r=!0){var c=f.value;s.has(c)||c.type!==l||i.add(c)}}catch(e){o=!0,u=e}finally{try{!r&&d.return&&d.return()}finally{if(o)throw u}}}),u=i,u.size?r?(r=r/10*9,"function"==typeof n.render&&n.render(),setTimeout(e,r)):e():("function"==typeof n.render&&n.render(),o&&o({result:n.checkConsistency(),tapCount:n._tapCount}))}()}}},{key:"reset",value:function(){r.call(this)}},{key:"checkConsistency",value:function(){var e=void 0,t=!0,n=!1,i=void 0;try{for(var r,o=(0,a.default)(this.nodeGrids);!(t=(r=o.next()).done);t=!0){var l=r.value,s=!0,u=!1,f=void 0;try{for(var d,c=(0,a.default)(l);!(s=(d=c.next()).done);s=!0){var h=d.value;if(e||(e=h.type),h.type&&h.type!==e)return!1}}catch(e){u=!0,f=e}finally{try{!s&&c.return&&c.return()}finally{if(u)throw f}}}}catch(e){n=!0,i=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw i}}return!0}}]),e}(),o.defaultLines=m.defaultLines,o.defaultColors=m.defaultColors,l);t.default=M,e.exports=M}},[65]);
//# sourceMappingURL=main.bcc399cca0349e109af4.js.map