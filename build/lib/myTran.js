/*! AirPorts 14-10-2014 */
var myTran={goTo:function(e,t,i,n){myTran.transition(e,t,i,n)},transition:function(e,t,i,n){reverseClass=t?" reverse":"",$(n).addClass(e+" out"+reverseClass)},restore:function(e,t){$(t).removeClass(e+" out")},loadToPage:function(e,t){if(t){var i=myTran.urlLoadContent(t),n=$(i).attr("id");return $(e).after(i),$("#"+n).addClass("hide"),"#"+n}},urlLoadContent:function(e){var t="";return $.ajax({url:e,type:"GET",dataType:"html",async:!1,success:function(e){t=e},error:function(){t=""}}),t},animationend:function(e){$(e).off("animationend webkitAnimationEnd mozAnimationEnd"),$(e).on("animationend webkitAnimationEnd mozAnimationEnd",function(){$(this).attr("class").indexOf(" in")>0?($(this).removeClass(),$(this).addClass("ui-mobile-viewport-transitioning ui-page")):($(this).removeClass(),$(this).addClass("ui-mobile-viewport-transitioning ui-page hide"))})}};