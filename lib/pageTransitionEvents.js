//阻止横屏
$(window).on('orientationchange', function (e) {
    e.preventDefault();
});
$(document).on('pageinit', '#pageOne', function () {
    $(this).on('scrollstart', function (e) {
        //e.preventDefault();
    });
    $(this).on('swipeleft', function (e) {
        console.warn(e);
        $.mobile.changePage('#pageTwo', {
            transition: 'slide'
        });
    });
});
$(document).on('pageinit', '#pageTwo', function () {
    $(this).on('scrollstart', function () {
    });
    $(this).on('swiperight', function () {
        $.mobile.changePage('#pageOne', {
            transition: 'slide',
            reverse: true
        });
    });
});
