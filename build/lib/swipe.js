/*! AirPorts 08-10-2014 */
function Swipe(e,t){"use strict";function i(){m=g.children,v=m.length,2>m.length&&(t.continuous=!1),p.transitions&&t.continuous&&3>m.length&&(g.appendChild(m[0].cloneNode(!0)),g.appendChild(g.children[1].cloneNode(!0)),m=g.children),f=Array(m.length),b=e.getBoundingClientRect().width||e.offsetWidth,g.style.width=m.length*b+"px";for(var i=m.length;i--;){var n=m[i];n.style.width=b+"px",n.setAttribute("data-index",i),p.transitions&&(n.style.left=i*-b+"px",o(i,y>i?-b:i>y?b:0,0))}t.continuous&&p.transitions&&(o(r(y-1),-b,0),o(r(y+1),b,0)),p.transitions||(g.style.left=y*-b+"px"),e.style.visibility="visible"}function n(){t.continuous?a(y-1):y&&a(y-1)}function s(){t.continuous?a(y+1):m.length-1>y&&a(y+1)}function r(e){return(m.length+e%m.length)%m.length}function a(e,i){if(y!=e){if(p.transitions){var n=Math.abs(y-e)/(y-e);if(t.continuous){var s=n;n=-f[r(e)]/b,n!==s&&(e=-n*m.length+e)}for(var a=Math.abs(y-e)-1;a--;)o(r((e>y?e:y)-a-1),b*n,0);e=r(e),o(y,b*n,i||x),o(e,0,i||x),t.continuous&&o(r(e-n),-(b*n),0)}else e=r(e),A(y*-b,e*-b,i||x);y=e,h(t.callback&&t.callback(y,m[y]))}}function o(e,t,i){l(e,t,i),f[e]=t}function l(e,t,i){var n=m[e],s=n&&n.style;s&&(s.webkitTransitionDuration=s.MozTransitionDuration=s.msTransitionDuration=s.OTransitionDuration=s.transitionDuration=i+"ms",s.webkitTransform="translate("+t+"px,0)"+"translateZ(0)",s.msTransform=s.MozTransform=s.OTransform="translateX("+t+"px)")}function A(e,i,n){if(!n)return g.style.left=i+"px",void 0;var s=+new Date,r=setInterval(function(){var a=+new Date-s;return a>n?(g.style.left=i+"px",W&&u(),t.transitionEnd&&t.transitionEnd.call(event,y,m[y]),clearInterval(r),void 0):(g.style.left=(i-e)*(Math.floor(100*(a/n))/100)+e+"px",void 0)},4)}function u(){T=setTimeout(s,W)}function c(){W=0,clearTimeout(T)}var d=function(){},h=function(e){setTimeout(e||d,0)},p={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var i in t)if(void 0!==e.style[t[i]])return!0;return!1}(document.createElement("swipe"))};if(e){var m,f,b,v,g=e.children[0];t=t||{};var y=parseInt(t.startSlide,10)||0,x=t.speed||300;t.continuous=void 0!==t.continuous?t.continuous:!0;var T,X,W=t.auto||0,q={},V={},S={handleEvent:function(e){switch(e.type){case"touchstart":this.start(e);break;case"touchmove":this.move(e);break;case"touchend":h(this.end(e));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":h(this.transitionEnd(e));break;case"resize":h(i)}t.stopPropagation&&e.stopPropagation()},start:function(e){var t=e.touches[0];q={x:t.pageX,y:t.pageY,time:+new Date},X=void 0,V={},g.addEventListener("touchmove",this,!1),g.addEventListener("touchend",this,!1)},move:function(e){if(!(e.touches.length>1||e.scale&&1!==e.scale)){t.disableScroll&&e.preventDefault();var i=e.touches[0];V={x:i.pageX-q.x,y:i.pageY-q.y},X===void 0&&(X=!!(X||Math.abs(V.x)<Math.abs(V.y))),X||(e.preventDefault(),c(),t.continuous?(l(r(y-1),V.x+f[r(y-1)],0),l(y,V.x+f[y],0),l(r(y+1),V.x+f[r(y+1)],0)):(V.x=V.x/(!y&&V.x>0||y==m.length-1&&0>V.x?Math.abs(V.x)/b+1:1),l(y-1,V.x+f[y-1],0),l(y,V.x+f[y],0),l(y+1,V.x+f[y+1],0)))}},end:function(){var e=+new Date-q.time,i=250>Number(e)&&Math.abs(V.x)>20||Math.abs(V.x)>b/2,n=!y&&V.x>0||y==m.length-1&&0>V.x;t.continuous&&(n=!1);var s=0>V.x;X||(i&&!n?(s?(t.continuous?(o(r(y-1),-b,0),o(r(y+2),b,0)):o(y-1,-b,0),o(y,f[y]-b,x),o(r(y+1),f[r(y+1)]-b,x),y=r(y+1)):(t.continuous?(o(r(y+1),b,0),o(r(y-2),-b,0)):o(y+1,b,0),o(y,f[y]+b,x),o(r(y-1),f[r(y-1)]+b,x),y=r(y-1)),t.callback&&t.callback(y,m[y])):t.continuous?(o(r(y-1),-b,x),o(y,0,x),o(r(y+1),b,x)):(o(y-1,-b,x),o(y,0,x),o(y+1,b,x))),g.removeEventListener("touchmove",S,!1),g.removeEventListener("touchend",S,!1)},transitionEnd:function(e){parseInt(e.target.getAttribute("data-index"),10)==y&&(W&&u(),t.transitionEnd&&t.transitionEnd.call(e,y,m[y]))}};return i(),W&&u(),p.addEventListener?(p.touch&&g.addEventListener("touchstart",S,!1),p.transitions&&(g.addEventListener("webkitTransitionEnd",S,!1),g.addEventListener("msTransitionEnd",S,!1),g.addEventListener("oTransitionEnd",S,!1),g.addEventListener("otransitionend",S,!1),g.addEventListener("transitionend",S,!1)),window.addEventListener("resize",S,!1)):window.onresize=function(){i()},{setup:function(){i()},slide:function(e,t){c(),a(e,t)},prev:function(){c(),n()},next:function(){c(),s()},stop:function(){c()},getPos:function(){return y},getNumSlides:function(){return v},kill:function(){c(),g.style.width="",g.style.left="";for(var e=m.length;e--;){var t=m[e];t.style.width="",t.style.left="",p.transitions&&l(e,0,0)}p.addEventListener?(g.removeEventListener("touchstart",S,!1),g.removeEventListener("webkitTransitionEnd",S,!1),g.removeEventListener("msTransitionEnd",S,!1),g.removeEventListener("oTransitionEnd",S,!1),g.removeEventListener("otransitionend",S,!1),g.removeEventListener("transitionend",S,!1),window.removeEventListener("resize",S,!1)):window.onresize=null}}}}(window.jQuery||window.Zepto)&&function(e){e.fn.Swipe=function(t){return this.each(function(){e(this).data("Swipe",new Swipe(e(this)[0],t))})}}(window.jQuery||window.Zepto);