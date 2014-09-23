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
    $('#smsMe').on('click', function (e) {
        $(this).parent().html($('#enterPhoneNumber').html());
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
