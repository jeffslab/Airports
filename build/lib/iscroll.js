/*! AirPorts 08-10-2014 */
(function(o,t){function r(o){return""===n?o:(o=o.charAt(0).toUpperCase()+o.substr(1),n+o)}var e=Math,l=t.createElement("div").style,n=function(){for(var o,t="t,webkitT,MozT,msT,OT".split(","),r=0,e=t.length;e>r;r++)if(o=t[r]+"ransform",o in l)return t[r].substr(0,t[r].length-1);return!1}(),s=n?"-"+n.toLowerCase()+"-":"",i=r("transform"),a=r("transitionProperty"),c=r("transitionDuration"),p=r("transformOrigin"),m=r("transitionTimingFunction"),h=r("transitionDelay"),u=/android/gi.test(navigator.appVersion),S=/iphone|ipad/gi.test(navigator.appVersion),d=/hp-tablet/gi.test(navigator.appVersion),b=r("perspective")in l,f="ontouchstart"in o&&!d,x=n!==!1,g=r("transition")in l,v="onorientationchange"in o?"orientationchange":"resize",y=f?"touchstart":"mousedown",Y=f?"touchmove":"mousemove",T=f?"touchend":"mouseup",X=f?"touchcancel":"mouseup",w=function(){if(n===!1)return!1;var o={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"};return o[n]}(),_=function(){return o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame||function(o){return setTimeout(o,1)}}(),z=function(){return o.cancelRequestAnimationFrame||o.webkitCancelAnimationFrame||o.webkitCancelRequestAnimationFrame||o.mozCancelRequestAnimationFrame||o.oCancelRequestAnimationFrame||o.msCancelRequestAnimationFrame||clearTimeout}(),M=b?" translateZ(0)":"",E=function(r,e){var l,n=this;n.wrapper="object"==typeof r?r:t.getElementById(r),n.wrapper.style.overflow="hidden",n.scroller=n.wrapper.children[0],n.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:u,hideScrollbar:S,fadeScrollbar:S&&b,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(o){o.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(l in e)n.options[l]=e[l];n.x=n.options.x,n.y=n.options.y,n.options.useTransform=x&&n.options.useTransform,n.options.hScrollbar=n.options.hScroll&&n.options.hScrollbar,n.options.vScrollbar=n.options.vScroll&&n.options.vScrollbar,n.options.zoom=n.options.useTransform&&n.options.zoom,n.options.useTransition=g&&n.options.useTransition,n.options.zoom&&u&&(M=""),n.scroller.style[a]=n.options.useTransform?s+"transform":"top left",n.scroller.style[c]="0",n.scroller.style[p]="0 0",n.options.useTransition&&(n.scroller.style[m]="cubic-bezier(0.33,0.66,0.66,1)"),n.options.useTransform?n.scroller.style[i]="translate("+n.x+"px,"+n.y+"px)"+M:n.scroller.style.cssText+=";position:absolute;top:"+n.y+"px;left:"+n.x+"px",n.options.useTransition&&(n.options.fixedScrollbar=!0),n.refresh(),n._bind(v,o),n._bind(y),f||"none"!=n.options.wheelAction&&(n._bind("DOMMouseScroll"),n._bind("mousewheel")),n.options.checkDOMChanges&&(n.checkDOMTime=setInterval(function(){n._checkDOMChanges()},500))};E.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(o){var t=this;switch(o.type){case y:if(!f&&0!==o.button)return;t._start(o);break;case Y:t._move(o);break;case T:case X:t._end(o);break;case v:t._resize();break;case"DOMMouseScroll":case"mousewheel":t._wheel(o);break;case w:t._transitionEnd(o)}},_checkDOMChanges:function(){this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale||this.refresh()},_scrollbar:function(o){var r,l=this;return l[o+"Scrollbar"]?(l[o+"ScrollbarWrapper"]||(r=t.createElement("div"),l.options.scrollbarClass?r.className=l.options.scrollbarClass+o.toUpperCase():r.style.cssText="position:absolute;z-index:100;"+("h"==o?"height:7px;bottom:1px;left:2px;right:"+(l.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(l.hScrollbar?"7":"2")+"px;top:2px;right:1px"),r.style.cssText+=";pointer-events:none;"+s+"transition-property:opacity;"+s+"transition-duration:"+(l.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(l.options.hideScrollbar?"0":"1"),l.wrapper.appendChild(r),l[o+"ScrollbarWrapper"]=r,r=t.createElement("div"),l.options.scrollbarClass||(r.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+s+"background-clip:padding-box;"+s+"box-sizing:border-box;"+("h"==o?"height:100%":"width:100%")+";"+s+"border-radius:3px;border-radius:3px"),r.style.cssText+=";pointer-events:none;"+s+"transition-property:"+s+"transform;"+s+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+s+"transition-duration:0;"+s+"transform: translate(0,0)"+M,l.options.useTransition&&(r.style.cssText+=";"+s+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),l[o+"ScrollbarWrapper"].appendChild(r),l[o+"ScrollbarIndicator"]=r),"h"==o?(l.hScrollbarSize=l.hScrollbarWrapper.clientWidth,l.hScrollbarIndicatorSize=e.max(e.round(l.hScrollbarSize*l.hScrollbarSize/l.scrollerW),8),l.hScrollbarIndicator.style.width=l.hScrollbarIndicatorSize+"px",l.hScrollbarMaxScroll=l.hScrollbarSize-l.hScrollbarIndicatorSize,l.hScrollbarProp=l.hScrollbarMaxScroll/l.maxScrollX):(l.vScrollbarSize=l.vScrollbarWrapper.clientHeight,l.vScrollbarIndicatorSize=e.max(e.round(l.vScrollbarSize*l.vScrollbarSize/l.scrollerH),8),l.vScrollbarIndicator.style.height=l.vScrollbarIndicatorSize+"px",l.vScrollbarMaxScroll=l.vScrollbarSize-l.vScrollbarIndicatorSize,l.vScrollbarProp=l.vScrollbarMaxScroll/l.maxScrollY),l._scrollbarPos(o,!0),void 0):(l[o+"ScrollbarWrapper"]&&(x&&(l[o+"ScrollbarIndicator"].style[i]=""),l[o+"ScrollbarWrapper"].parentNode.removeChild(l[o+"ScrollbarWrapper"]),l[o+"ScrollbarWrapper"]=null,l[o+"ScrollbarIndicator"]=null),void 0)},_resize:function(){var o=this;setTimeout(function(){o.refresh()},u?200:0)},_pos:function(o,t){this.zoomed||(o=this.hScroll?o:0,t=this.vScroll?t:0,this.options.useTransform?this.scroller.style[i]="translate("+o+"px,"+t+"px) scale("+this.scale+")"+M:(o=e.round(o),t=e.round(t),this.scroller.style.left=o+"px",this.scroller.style.top=t+"px"),this.x=o,this.y=t,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(o,t){var r,l=this,n="h"==o?l.x:l.y;l[o+"Scrollbar"]&&(n=l[o+"ScrollbarProp"]*n,0>n?(l.options.fixedScrollbar||(r=l[o+"ScrollbarIndicatorSize"]+e.round(3*n),8>r&&(r=8),l[o+"ScrollbarIndicator"].style["h"==o?"width":"height"]=r+"px"),n=0):n>l[o+"ScrollbarMaxScroll"]&&(l.options.fixedScrollbar?n=l[o+"ScrollbarMaxScroll"]:(r=l[o+"ScrollbarIndicatorSize"]-e.round(3*(n-l[o+"ScrollbarMaxScroll"])),8>r&&(r=8),l[o+"ScrollbarIndicator"].style["h"==o?"width":"height"]=r+"px",n=l[o+"ScrollbarMaxScroll"]+(l[o+"ScrollbarIndicatorSize"]-r))),l[o+"ScrollbarWrapper"].style[h]="0",l[o+"ScrollbarWrapper"].style.opacity=t&&l.options.hideScrollbar?"0":"1",l[o+"ScrollbarIndicator"].style[i]="translate("+("h"==o?n+"px,0)":"0,"+n+"px)")+M)},_start:function(t){var r,l,n,s,a,c=this,p=f?t.touches[0]:t;c.enabled&&(c.options.onBeforeScrollStart&&c.options.onBeforeScrollStart.call(c,t),(c.options.useTransition||c.options.zoom)&&c._transitionTime(0),c.moved=!1,c.animating=!1,c.zoomed=!1,c.distX=0,c.distY=0,c.absDistX=0,c.absDistY=0,c.dirX=0,c.dirY=0,c.options.zoom&&f&&t.touches.length>1&&(s=e.abs(t.touches[0].pageX-t.touches[1].pageX),a=e.abs(t.touches[0].pageY-t.touches[1].pageY),c.touchesDistStart=e.sqrt(s*s+a*a),c.originX=e.abs(t.touches[0].pageX+t.touches[1].pageX-2*c.wrapperOffsetLeft)/2-c.x,c.originY=e.abs(t.touches[0].pageY+t.touches[1].pageY-2*c.wrapperOffsetTop)/2-c.y,c.options.onZoomStart&&c.options.onZoomStart.call(c,t)),c.options.momentum&&(c.options.useTransform?(r=getComputedStyle(c.scroller,null)[i].replace(/[^0-9\-.,]/g,"").split(","),l=+(r[12]||r[4]),n=+(r[13]||r[5])):(l=+getComputedStyle(c.scroller,null).left.replace(/[^0-9-]/g,""),n=+getComputedStyle(c.scroller,null).top.replace(/[^0-9-]/g,"")),(l!=c.x||n!=c.y)&&(c.options.useTransition?c._unbind(w):z(c.aniTime),c.steps=[],c._pos(l,n),c.options.onScrollEnd&&c.options.onScrollEnd.call(c))),c.absStartX=c.x,c.absStartY=c.y,c.startX=c.x,c.startY=c.y,c.pointX=p.pageX,c.pointY=p.pageY,c.startTime=t.timeStamp||Date.now(),c.options.onScrollStart&&c.options.onScrollStart.call(c,t),c._bind(Y,o),c._bind(T,o),c._bind(X,o))},_move:function(o){var t,r,l,n=this,s=f?o.touches[0]:o,a=s.pageX-n.pointX,c=s.pageY-n.pointY,p=n.x+a,m=n.y+c,h=o.timeStamp||Date.now();return n.options.onBeforeScrollMove&&n.options.onBeforeScrollMove.call(n,o),n.options.zoom&&f&&o.touches.length>1?(t=e.abs(o.touches[0].pageX-o.touches[1].pageX),r=e.abs(o.touches[0].pageY-o.touches[1].pageY),n.touchesDist=e.sqrt(t*t+r*r),n.zoomed=!0,l=1/n.touchesDistStart*n.touchesDist*this.scale,n.options.zoomMin>l?l=.5*n.options.zoomMin*Math.pow(2,l/n.options.zoomMin):l>n.options.zoomMax&&(l=2*n.options.zoomMax*Math.pow(.5,n.options.zoomMax/l)),n.lastScale=l/this.scale,p=this.originX-this.originX*n.lastScale+this.x,m=this.originY-this.originY*n.lastScale+this.y,this.scroller.style[i]="translate("+p+"px,"+m+"px) scale("+l+")"+M,n.options.onZoom&&n.options.onZoom.call(n,o),void 0):(n.pointX=s.pageX,n.pointY=s.pageY,(p>0||n.maxScrollX>p)&&(p=n.options.bounce?n.x+a/2:p>=0||n.maxScrollX>=0?0:n.maxScrollX),(m>n.minScrollY||n.maxScrollY>m)&&(m=n.options.bounce?n.y+c/2:m>=n.minScrollY||n.maxScrollY>=0?n.minScrollY:n.maxScrollY),n.distX+=a,n.distY+=c,n.absDistX=e.abs(n.distX),n.absDistY=e.abs(n.distY),6>n.absDistX&&6>n.absDistY||(n.options.lockDirection&&(n.absDistX>n.absDistY+5?(m=n.y,c=0):n.absDistY>n.absDistX+5&&(p=n.x,a=0)),n.moved=!0,n._pos(p,m),n.dirX=a>0?-1:0>a?1:0,n.dirY=c>0?-1:0>c?1:0,h-n.startTime>300&&(n.startTime=h,n.startX=n.x,n.startY=n.y),n.options.onScrollMove&&n.options.onScrollMove.call(n,o)),void 0)},_end:function(r){if(!f||0===r.touches.length){var l,n,s,a,p,m,h,u=this,S=f?r.changedTouches[0]:r,d={dist:0,time:0},b={dist:0,time:0},x=(r.timeStamp||Date.now())-u.startTime,g=u.x,v=u.y;if(u._unbind(Y,o),u._unbind(T,o),u._unbind(X,o),u.options.onBeforeScrollEnd&&u.options.onBeforeScrollEnd.call(u,r),u.zoomed)return h=u.scale*u.lastScale,h=Math.max(u.options.zoomMin,h),h=Math.min(u.options.zoomMax,h),u.lastScale=h/u.scale,u.scale=h,u.x=u.originX-u.originX*u.lastScale+u.x,u.y=u.originY-u.originY*u.lastScale+u.y,u.scroller.style[c]="200ms",u.scroller.style[i]="translate("+u.x+"px,"+u.y+"px) scale("+u.scale+")"+M,u.zoomed=!1,u.refresh(),u.options.onZoomEnd&&u.options.onZoomEnd.call(u,r),void 0;if(!u.moved)return f&&(u.doubleTapTimer&&u.options.zoom?(clearTimeout(u.doubleTapTimer),u.doubleTapTimer=null,u.options.onZoomStart&&u.options.onZoomStart.call(u,r),u.zoom(u.pointX,u.pointY,1==u.scale?u.options.doubleTapZoom:1),u.options.onZoomEnd&&setTimeout(function(){u.options.onZoomEnd.call(u,r)},200)):this.options.handleClick&&(u.doubleTapTimer=setTimeout(function(){for(u.doubleTapTimer=null,l=S.target;1!=l.nodeType;)l=l.parentNode;"SELECT"!=l.tagName&&"INPUT"!=l.tagName&&"TEXTAREA"!=l.tagName&&(n=t.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,r.view,1,S.screenX,S.screenY,S.clientX,S.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,0,null),n._fake=!0,l.dispatchEvent(n))},u.options.zoom?250:0))),u._resetPos(400),u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r),void 0;if(300>x&&u.options.momentum&&(d=g?u._momentum(g-u.startX,x,-u.x,u.scrollerW-u.wrapperW+u.x,u.options.bounce?u.wrapperW:0):d,b=v?u._momentum(v-u.startY,x,-u.y,0>u.maxScrollY?u.scrollerH-u.wrapperH+u.y-u.minScrollY:0,u.options.bounce?u.wrapperH:0):b,g=u.x+d.dist,v=u.y+b.dist,(u.x>0&&g>0||u.x<u.maxScrollX&&u.maxScrollX>g)&&(d={dist:0,time:0}),(u.y>u.minScrollY&&v>u.minScrollY||u.y<u.maxScrollY&&u.maxScrollY>v)&&(b={dist:0,time:0})),d.dist||b.dist)return p=e.max(e.max(d.time,b.time),10),u.options.snap&&(s=g-u.absStartX,a=v-u.absStartY,e.abs(s)<u.options.snapThreshold&&e.abs(a)<u.options.snapThreshold?u.scrollTo(u.absStartX,u.absStartY,200):(m=u._snap(g,v),g=m.x,v=m.y,p=e.max(m.time,p))),u.scrollTo(e.round(g),e.round(v),p),u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r),void 0;if(u.options.snap)return s=g-u.absStartX,a=v-u.absStartY,e.abs(s)<u.options.snapThreshold&&e.abs(a)<u.options.snapThreshold?u.scrollTo(u.absStartX,u.absStartY,200):(m=u._snap(u.x,u.y),(m.x!=u.x||m.y!=u.y)&&u.scrollTo(m.x,m.y,m.time)),u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r),void 0;u._resetPos(200),u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r)}},_resetPos:function(o){var t=this,r=t.x>=0?0:t.x<t.maxScrollX?t.maxScrollX:t.x,e=t.y>=t.minScrollY||t.maxScrollY>0?t.minScrollY:t.y<t.maxScrollY?t.maxScrollY:t.y;return r==t.x&&e==t.y?(t.moved&&(t.moved=!1,t.options.onScrollEnd&&t.options.onScrollEnd.call(t)),t.hScrollbar&&t.options.hideScrollbar&&("webkit"==n&&(t.hScrollbarWrapper.style[h]="300ms"),t.hScrollbarWrapper.style.opacity="0"),t.vScrollbar&&t.options.hideScrollbar&&("webkit"==n&&(t.vScrollbarWrapper.style[h]="300ms"),t.vScrollbarWrapper.style.opacity="0"),void 0):(t.scrollTo(r,e,o||0),void 0)},_wheel:function(o){var t,r,e,l,n,s=this;if("wheelDeltaX"in o)t=o.wheelDeltaX/12,r=o.wheelDeltaY/12;else if("wheelDelta"in o)t=r=o.wheelDelta/12;else{if(!("detail"in o))return;t=r=3*-o.detail}return"zoom"==s.options.wheelAction?(n=s.scale*Math.pow(2,1/3*(r?r/Math.abs(r):0)),s.options.zoomMin>n&&(n=s.options.zoomMin),n>s.options.zoomMax&&(n=s.options.zoomMax),n!=s.scale&&(!s.wheelZoomCount&&s.options.onZoomStart&&s.options.onZoomStart.call(s,o),s.wheelZoomCount++,s.zoom(o.pageX,o.pageY,n,400),setTimeout(function(){s.wheelZoomCount--,!s.wheelZoomCount&&s.options.onZoomEnd&&s.options.onZoomEnd.call(s,o)},400)),void 0):(e=s.x+t,l=s.y+r,e>0?e=0:s.maxScrollX>e&&(e=s.maxScrollX),l>s.minScrollY?l=s.minScrollY:s.maxScrollY>l&&(l=s.maxScrollY),0>s.maxScrollY&&s.scrollTo(e,l,0),void 0)},_transitionEnd:function(o){var t=this;o.target==t.scroller&&(t._unbind(w),t._startAni())},_startAni:function(){var o,t,r,l=this,n=l.x,s=l.y,i=Date.now();if(!l.animating){if(!l.steps.length)return l._resetPos(400),void 0;if(o=l.steps.shift(),o.x==n&&o.y==s&&(o.time=0),l.animating=!0,l.moved=!0,l.options.useTransition)return l._transitionTime(o.time),l._pos(o.x,o.y),l.animating=!1,o.time?l._bind(w):l._resetPos(0),void 0;r=function(){var a,c,p=Date.now();return p>=i+o.time?(l._pos(o.x,o.y),l.animating=!1,l.options.onAnimationEnd&&l.options.onAnimationEnd.call(l),l._startAni(),void 0):(p=(p-i)/o.time-1,t=e.sqrt(1-p*p),a=(o.x-n)*t+n,c=(o.y-s)*t+s,l._pos(a,c),l.animating&&(l.aniTime=_(r)),void 0)},r()}},_transitionTime:function(o){o+="ms",this.scroller.style[c]=o,this.hScrollbar&&(this.hScrollbarIndicator.style[c]=o),this.vScrollbar&&(this.vScrollbarIndicator.style[c]=o)},_momentum:function(o,t,r,l,n){var s=6e-4,i=e.abs(o)/t,a=i*i/(2*s),c=0,p=0;return o>0&&a>r?(p=n/(6/(a/i*s)),r+=p,i=i*r/a,a=r):0>o&&a>l&&(p=n/(6/(a/i*s)),l+=p,i=i*l/a,a=l),a*=0>o?-1:1,c=i/s,{dist:a,time:e.round(c)}},_offset:function(o){for(var t=-o.offsetLeft,r=-o.offsetTop;o=o.offsetParent;)t-=o.offsetLeft,r-=o.offsetTop;return o!=this.wrapper&&(t*=this.scale,r*=this.scale),{left:t,top:r}},_snap:function(o,t){var r,l,n,s,i,a,c=this;for(n=c.pagesX.length-1,r=0,l=c.pagesX.length;l>r;r++)if(o>=c.pagesX[r]){n=r;break}for(n==c.currPageX&&n>0&&0>c.dirX&&n--,o=c.pagesX[n],i=e.abs(o-c.pagesX[c.currPageX]),i=i?500*(e.abs(c.x-o)/i):0,c.currPageX=n,n=c.pagesY.length-1,r=0;n>r;r++)if(t>=c.pagesY[r]){n=r;break}return n==c.currPageY&&n>0&&0>c.dirY&&n--,t=c.pagesY[n],a=e.abs(t-c.pagesY[c.currPageY]),a=a?500*(e.abs(c.y-t)/a):0,c.currPageY=n,s=e.round(e.max(i,a))||200,{x:o,y:t,time:s}},_bind:function(o,t,r){(t||this.scroller).addEventListener(o,this,!!r)},_unbind:function(o,t,r){(t||this.scroller).removeEventListener(o,this,!!r)},destroy:function(){var t=this;t.scroller.style[i]="",t.hScrollbar=!1,t.vScrollbar=!1,t._scrollbar("h"),t._scrollbar("v"),t._unbind(v,o),t._unbind(y),t._unbind(Y,o),t._unbind(T,o),t._unbind(X,o),t.options.hasTouch||(t._unbind("DOMMouseScroll"),t._unbind("mousewheel")),t.options.useTransition&&t._unbind(w),t.options.checkDOMChanges&&clearInterval(t.checkDOMTime),t.options.onDestroy&&t.options.onDestroy.call(t)},refresh:function(){var o,t,r,l,n=this,s=0,i=0;if(n.scale<n.options.zoomMin&&(n.scale=n.options.zoomMin),n.wrapperW=n.wrapper.clientWidth||1,n.wrapperH=n.wrapper.clientHeight||1,n.minScrollY=-n.options.topOffset||0,n.scrollerW=e.round(n.scroller.offsetWidth*n.scale),n.scrollerH=e.round((n.scroller.offsetHeight+n.minScrollY)*n.scale),n.maxScrollX=n.wrapperW-n.scrollerW,n.maxScrollY=n.wrapperH-n.scrollerH+n.minScrollY,n.dirX=0,n.dirY=0,n.options.onRefresh&&n.options.onRefresh.call(n),n.hScroll=n.options.hScroll&&0>n.maxScrollX,n.vScroll=n.options.vScroll&&(!n.options.bounceLock&&!n.hScroll||n.scrollerH>n.wrapperH),n.hScrollbar=n.hScroll&&n.options.hScrollbar,n.vScrollbar=n.vScroll&&n.options.vScrollbar&&n.scrollerH>n.wrapperH,o=n._offset(n.wrapper),n.wrapperOffsetLeft=-o.left,n.wrapperOffsetTop=-o.top,"string"==typeof n.options.snap)for(n.pagesX=[],n.pagesY=[],l=n.scroller.querySelectorAll(n.options.snap),t=0,r=l.length;r>t;t++)s=n._offset(l[t]),s.left+=n.wrapperOffsetLeft,s.top+=n.wrapperOffsetTop,n.pagesX[t]=s.left<n.maxScrollX?n.maxScrollX:s.left*n.scale,n.pagesY[t]=s.top<n.maxScrollY?n.maxScrollY:s.top*n.scale;else if(n.options.snap){for(n.pagesX=[];s>=n.maxScrollX;)n.pagesX[i]=s,s-=n.wrapperW,i++;for(n.maxScrollX%n.wrapperW&&(n.pagesX[n.pagesX.length]=n.maxScrollX-n.pagesX[n.pagesX.length-1]+n.pagesX[n.pagesX.length-1]),s=0,i=0,n.pagesY=[];s>=n.maxScrollY;)n.pagesY[i]=s,s-=n.wrapperH,i++;n.maxScrollY%n.wrapperH&&(n.pagesY[n.pagesY.length]=n.maxScrollY-n.pagesY[n.pagesY.length-1]+n.pagesY[n.pagesY.length-1])}n._scrollbar("h"),n._scrollbar("v"),n.zoomed||(n.scroller.style[c]="0",n._resetPos(400))},scrollTo:function(o,t,r,e){var l,n,s=this,i=o;for(s.stop(),i.length||(i=[{x:o,y:t,time:r,relative:e}]),l=0,n=i.length;n>l;l++)i[l].relative&&(i[l].x=s.x-i[l].x,i[l].y=s.y-i[l].y),s.steps.push({x:i[l].x,y:i[l].y,time:i[l].time||0});s._startAni()},scrollToElement:function(o,t){var r,l=this;o=o.nodeType?o:l.scroller.querySelector(o),o&&(r=l._offset(o),r.left+=l.wrapperOffsetLeft,r.top+=l.wrapperOffsetTop,r.left=r.left>0?0:r.left<l.maxScrollX?l.maxScrollX:r.left,r.top=r.top>l.minScrollY?l.minScrollY:r.top<l.maxScrollY?l.maxScrollY:r.top,t=void 0===t?e.max(2*e.abs(r.left),2*e.abs(r.top)):t,l.scrollTo(r.left,r.top,t))},scrollToPage:function(o,t,r){var e,l,n=this;r=void 0===r?400:r,n.options.onScrollStart&&n.options.onScrollStart.call(n),n.options.snap?(o="next"==o?n.currPageX+1:"prev"==o?n.currPageX-1:o,t="next"==t?n.currPageY+1:"prev"==t?n.currPageY-1:t,o=0>o?0:o>n.pagesX.length-1?n.pagesX.length-1:o,t=0>t?0:t>n.pagesY.length-1?n.pagesY.length-1:t,n.currPageX=o,n.currPageY=t,e=n.pagesX[o],l=n.pagesY[t]):(e=-n.wrapperW*o,l=-n.wrapperH*t,n.maxScrollX>e&&(e=n.maxScrollX),n.maxScrollY>l&&(l=n.maxScrollY)),n.scrollTo(e,l,r)},disable:function(){this.stop(),this._resetPos(0),this.enabled=!1,this._unbind(Y,o),this._unbind(T,o),this._unbind(X,o)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(w):z(this.aniTime),this.steps=[],this.moved=!1,this.animating=!1},zoom:function(o,t,r,e){var l=this,n=r/l.scale;l.options.useTransform&&(l.zoomed=!0,e=void 0===e?200:e,o=o-l.wrapperOffsetLeft-l.x,t=t-l.wrapperOffsetTop-l.y,l.x=o-o*n+l.x,l.y=t-t*n+l.y,l.scale=r,l.refresh(),l.x=l.x>0?0:l.x<l.maxScrollX?l.maxScrollX:l.x,l.y=l.y>l.minScrollY?l.minScrollY:l.y<l.maxScrollY?l.maxScrollY:l.y,l.scroller.style[c]=e+"ms",l.scroller.style[i]="translate("+l.x+"px,"+l.y+"px) scale("+r+")"+M,l.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}},l=null,"undefined"!=typeof exports?exports.iScroll=E:o.iScroll=E})(window,document);