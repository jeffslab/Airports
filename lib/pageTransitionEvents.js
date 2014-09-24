//阻止横屏
$(window).on('orientationchange', function (e) {
    e.preventDefault();
});
$(document).on('pageinit', '#mainPage', function () {
    $(this).on('scrollstart', function (e) {
        var dScrollTop = document.body.scrollTop,
            dClientHeight = document.body.clientHeight,
            dScrollHeight = document.body.scrollHeight;
        console.warn(dScrollTop, dClientHeight, dScrollHeight);
        if (dScrollTop + dClientHeight >= dScrollHeight) {
            $.mobile.changePage('#smsPage', {
                transition: 'slideup'
            });
        }
    });
    $(this).on('swipeleft', function (e) {
        console.warn(e);
        $.mobile.changePage('#smsPage', {
            transition: 'slide'
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
    $(this).on('swiperight', function () {
        $.mobile.changePage('#mainPage', {
            transition: 'slide',
            reverse: true
        });
    });
});
