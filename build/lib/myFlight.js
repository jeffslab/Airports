/*! AirPorts 26-09-2014 */
$(window).on("orientationchange",function(e){e.preventDefault()}),$(document).on("pageinit","#mainPage",function(){$("p.abordTime, div.abordTimeBig").text(Math.floor(24*Math.random())+":00"),$("p.targetPlace").text(Math.floor(24*Math.random())+":00"),$("p.localWeather b").text(Math.floor(35*Math.random())),$(this).on("touchmove",function(e){console.warn(e.view.scrollY,e.view.pageYOffset);var t=document.body.scrollTop,i=document.body.clientHeight,n=document.body.scrollHeight;console.warn(t,i,n)}),$(this).on("swipeleft",function(){$.mobile.changePage("#smsPage",{transition:"slide"})}),$(this).delegate("#J_smsMe","click",function(){$(this).parent().html($("#enterPhoneNumber").html())}).delegate("#J_sendSms","click",function(){var e=$("#J_phoneNumber").val();$(this).parent().html($("#phoneNumberSuccuss").html().replace("{{{val}}}",e))})}),$(document).on("pageinit","#smsPage",function(){$(this).on("swiperight",function(){$.mobile.changePage("#mainPage",{transition:"slide",reverse:!0})}),$(this).delegate("#J_flightsInfo li","click",function(){var e=$(this),t=e.find("span.flyIcon img").attr("src"),i=e.find("span.flyFlag").text(),n=e.find("p.placeName").text(),o=e.find("p.timeInfo").text();$("#J_flightLogo").find("img").attr("src",t),$("#J_flagNum").text(i),/晚点/.test(o)?$("#J_timeInfo").addClass("font-onlate").text(o.replace(/\s.*/g,"")):$("#J_timeInfo").removeClass("font-onlate").text(o),$("#J_targetPlace").text(n),$.mobile.changePage("#mainPage",{transition:"slideup"})})});