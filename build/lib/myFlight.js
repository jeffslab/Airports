/*! AirPorts 20-10-2014 */
$(function(){function e(e){e=e||10;var t=document,i=t.body.clientHeight,n=t.body.scrollHeight,o=t.body.scrollTop;return o+i>=n+e}function t(e){$("#mainPage, div.posBgFirstPage, div.posBgFirstPageEnd").css({minHeight:"auto"==e?"100%":e,height:e}),document.body.scrollTop=0}var i=document.body.scrollHeight;$(window).on("orientationchange",function(){t(document.body.scrollHeight)}),t(i),$("#smsPage").on("touchmove",function(){$("div.posBgSecondPage").addClass("posBgFirstAnimate").addClass("posBgFirstAnimateEnd"),20>=document.body.scrollTop&&$("div.posBgSecondPage").removeClass("posBgFirstAnimate posBgFirstAnimateEnd")}).on("touchend",function(){e(30)&&$("#J_flightsInfo li:first").trigger("tap"),20>=document.body.scrollTop&&$("div.posBgSecondPage").removeClass("posBgFirstAnimate posBgFirstAnimateEnd")}),$("#mainPage").on("touchmove",function(){$("div.posBgFirstPage").addClass("posBgFirstAnimate").addClass("posBgFirstAnimateEnd"),20>=document.body.scrollTop&&$("div.posBgFirstPage").removeClass("posBgFirstAnimate posBgFirstAnimateEnd")}).on("touchend",function(){e(30)&&$("#J_nextPageButton").click(),20>=document.body.scrollTop&&$("div.posBgFirstPage").removeClass("posBgFirstAnimate posBgFirstAnimateEnd")}),$("#J_nextPageButton").click(function(){$("#mainPage").animate({opacity:0},200,function(){$("#mainPage").css({opacity:1}),$("div.secondPageWrap").css({height:$("#smsPage").height()+40,zIndex:7}),$("div.posBgSecondPage").css({top:0,height:$("#smsPage").height()+40}),$("#smsPage").css({bottom:-document.body.clientHeight}).animate({bottom:0},700),t($("#smsPage").height()),$("#smsPage, div.posBgSecondPage").removeClass("posBgFirstAnimate posBgFirstAnimateEnd"),$("#mainPage, div.posBgFirstPage").removeClass("topSlide").removeClass("topEnd")})}),$("p.abordTime, div.abordTimeBig").text(Math.floor(24*Math.random())+":00"),$("p.targetPlace").text(Math.floor(24*Math.random())+":00"),$("p.localWeather b").text(Math.floor(35*Math.random())),$(this).delegate("#J_smsMe","click",function(){$(this).parent().html($("#enterPhoneNumber").html()).find("#J_phoneNumber").focus()}).delegate("#J_sendSms","click",function(e){e.stopPropagation();var t=$("#J_phoneNumber").val();$(this).parent().html($("#phoneNumberSuccuss").html().replace("{{{val}}}",t))}),$(this).delegate("#J_flightsInfo li","tap",function(e){e.stopPropagation();var i=$(this),n=i.find("span.flyIcon img").attr("src"),o=i.find("span.flyFlag").text(),s=i.find("p.placeName").text(),a=i.find("p.timeInfo").text();$("#J_flightLogo").find("img").attr("src",n),$("#J_flagNum").text(o),/晚点/.test(a)?$("#J_timeInfo").addClass("font-onlate").text(a.replace(/\s.*/g,"")):$("#J_timeInfo").removeClass("font-onlate").text(a),$("#J_targetPlace").text(s),$("div.posBgFirstPage").addClass("topSlide").addClass("topEnd").removeClass("posBgFirstAnimate").removeClass("posBgFirstAnimateEnd"),$("#mainPage").addClass("topSlide").addClass("topEnd"),$("#smsPage").animate({opacity:0},200,function(){$("div.secondPageWrap").css({zIndex:2}),t("auto"),setTimeout(function(){$("#smsPage").css("opacity",1)},500)})})});