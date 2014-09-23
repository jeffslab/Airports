//阻止横屏
$(window).on('orientationchange', function (e) {
    e.preventDefault();
});
$(document).on('pageinit', '#mainPage', function () {
    $(this).on('scrollstart', function (e) {
        //e.preventDefault();
    });
    $(this).on('swipeleft', function (e) {
        console.warn(e);
        $.mobile.changePage('#smsPage', {
            transition: 'slideup'
        });
    });
    //短信通知的逻辑
    $(this).delegate('#J_smsMe', 'click', function () {
        $(this).parent().html($('#enterPhoneNumber').html());
    });
    $(this).delegate('#J_sendSms', 'click', function () {
        var v = $('#J_phoneNumber').val();
        $(this).parent().html($('#phoneNumberSuccuss').html().replace('{{{val}}}', v));
    });
});
$(document).on('pageinit', '#smsPage', function () {
    $(this).on('scrollstart', function () {
    });
    $(this).on('swiperight', function () {
        $.mobile.changePage('#mainPage', {
            transition: 'slidedown',
            reverse: true
        });
    });
});
