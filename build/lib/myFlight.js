/*! AirPorts 25-09-2014 */
$(window).on("orientationchange",function(e){e.preventDefault()}),$(document).on("pageinit","#mainPage",function(){$("p.abordTime, div.abordTimeBig").text(Math.floor(24*Math.random())+":00"),$("p.targetPlace").text(Math.floor(24*Math.random())+":00"),$("p.localWeather b").text(Math.floor(35*Math.random())),$(this).on("touchmove",function(){var e=document.body.scrollTop,t=document.body.clientHeight,i=document.body.scrollHeight;e+t>=i&&$.mobile.loadPage("index.html",{transition:"slideup"})}),$(this).on("swipeleft",function(){$.mobile.changePage("#smsPage",{transition:"slide"})}),$(this).delegate("#J_smsMe","click",function(){$(this).parent().html($("#enterPhoneNumber").html())}).delegate("#J_sendSms","click",function(){var e=$("#J_phoneNumber").val();$(this).parent().html($("#phoneNumberSuccuss").html().replace("{{{val}}}",e))})}),$(document).on("pageinit","#smsPage",function(){$(this).on("swiperight",function(){$.mobile.changePage("#mainPage",{transition:"slide",reverse:!0})}),$(this).delegate("#J_flightsInfo li","click",function(){var e=$(this),t=e.find("span.flyIcon img").attr("src"),i=e.find("span.flyFlag").text(),n=e.find("p.placeName").text(),s=e.find("p.timeInfo").text();$("#J_flightLogo").find("img").attr("src",t),$("#J_flagNum").text(i),/晚点/.test(s)?$("#J_timeInfo").addClass("font-onlate").text(s.replace(/\s.*/g,"")):$("#J_timeInfo").removeClass("font-onlate").text(s),$("#J_targetPlace").text(n),$.mobile.changePage("#mainPage",{transition:"slideup"})})});