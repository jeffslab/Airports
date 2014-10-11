//阻止横屏
$(window).on('orientationchange', function (e) {
    e.preventDefault();
});

$(function () {
    //页面控制
    //设置高度之后不会有滚动时背景图拉伸闪烁
    var dh = document.body.clientHeight;
    $('#mainPage, div.posBgFirstPage').css({
        minHeight: dh
    });
    //页面虚化
    $('#smsPage').on('touchstart', function () {
        /*
        $('div.posBgFirstPage').css({
            '-webkit-filter': 'blur(4px)'
        });
        */
        $('div.posBgSecondPage').addClass('posBgFirstAnimate').addClass('posBgFirstAnimateEnd');
    }).on('touchend', function () {
        $('div.posBgSecondPage').removeClass('posBgFirstAnimate posBgFirstAnimateEnd');
    });
    //页面虚化
    $('#mainPage').on('touchstart', function () {
        /*
        $('div.posBgFirstPage').css({
            '-webkit-filter': 'blur(4px)'
        });
        */
        $('div.posBgFirstPage').addClass('posBgFirstAnimate').addClass('posBgFirstAnimateEnd');
    }).on('touchend', function () {
        $('div.posBgFirstPage').removeClass('posBgFirstAnimate posBgFirstAnimateEnd');
    });
    //点击切换
    $('#J_nextPageButton').click(function () {
        $('#smsPage').css({
            zIndex: 7,
            top: 0
        });
        $('div.posBgSecondPage').css({
            zIndex: 6,
            top: 0
        });
    });
    //随机数据测试使用
    $('p.abordTime, div.abordTimeBig').text(Math.floor(Math.random() * 24) + ':00');
    $('p.targetPlace').text(Math.floor(Math.random() * 24) + ':00');
    $('p.localWeather b').text(Math.floor(Math.random() * 35));
    /*
    $('div.posAbsBg').css({
        height: document.body.clientHeight
    })
    $(this).on('touchstart', function () {
        console.warn(document.documentElement.scrollTop);
        $(this).find('div.posAbsBg').css({
            'background-image':'url(' + img2 + ')',
            'top': document.body.scrollTop
        }).animate({
            opacity: .9
        }, 500)
    });
    $(this).on('touchend', function () {
        $(this).find('div.posAbsBg').css({
            'background-image':'url(' + img1 + ')'
        }).animate({
            opacity: 1
        }, 200)
    });
    $(this).on('swipeleft', function (e) {
        $.mobile.changePage('#smsPage', {
            transition: 'slide'
        });
    });
    */
    //短信通知的逻辑
    $(this).delegate('#J_smsMe', 'click', function (e) {
        $(this).parent().html($('#enterPhoneNumber').html());
    }).delegate('#J_sendSms', 'click', function (e) {
        e.stopPropagation();
        var v = $('#J_phoneNumber').val();
        $(this).parent().html($('#phoneNumberSuccuss').html().replace('{{{val}}}', v));
    });
    //新的页面切换逻辑
    console.warn(document.body.scrollHeight);

    //gate informations page
    /*
    $('div.posAbsSmsPage').css({
        height: document.body.clientHeight
    });
    $(this).on('touchstart', function () {
        $(this).find('div.posAbsSmsPage').css({
            'background-image':'url(' + img4 + ')'
        });
    });
    $(this).on('touchend', function () {
        $(this).find('div.posAbsSmsPage').css({
            'background-image':'url(' + img3 + ')'
        });
    });
    $(this).on('swiperight', function () {
        $.mobile.changePage('#mainPage', {
            transition: 'slide',
            reverse: true
        });
    });
    */
    $(this).delegate('#J_flightsInfo li', 'click', function (e) {
        console.warn(this);
        e.stopPropagation();
        //同步数据
        var m = $(this),
            i = m.find('span.flyIcon img').attr('src'),
            f = m.find('span.flyFlag').text(),
            t = m.find('p.placeName').text(),
            o = m.find('p.timeInfo').text();
        $('#J_flightLogo').find('img').attr('src', i);
        $('#J_flagNum').text(f);
        if (/晚点/.test(o)) {
            $('#J_timeInfo').addClass('font-onlate').text(o.replace(/\s.*/g, ''));
        } else {
            $('#J_timeInfo').removeClass('font-onlate').text(o);
        }
        $('#J_targetPlace').text(t);
        $('#smsPage').css({
            zIndex: 1
        });
        $('div.posBgSecondPage').css({
            zIndex: 2
        });
    });
});
