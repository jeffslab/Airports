//阻止横屏
$(window).on('orientationchange', function (e) {
    e.preventDefault();
});

$(function () {
    //页面控制
    //设置高度之后不会有滚动时背景图拉伸闪烁
    var dh = document.body.scrollHeight;
    //console.warn($('#smsPage').height(), dh, document.body.scrollHeight);
    function resetMinHeight (h) {
        $('#mainPage, div.posBgFirstPage').css({
            minHeight: h,
            height: h
        });
        document.body.scrollTop = 0;
    }
    resetMinHeight(dh);
    //页面虚化
    $('#smsPage').on('touchmove', function () {
        /*
        $('div.posBgFirstPage').css({
            '-webkit-filter': 'blur(4px)'
        });
        */
        $('div.posBgSecondPage').addClass('posBgFirstAnimate').addClass('posBgFirstAnimateEnd');
        if (document.body.scrollTop <= 20) {
            $('div.posBgSecondPage').removeClass('posBgFirstAnimate posBgFirstAnimateEnd');
        }
    }).on('touchend', function () {
    });
    //页面虚化
    $('#mainPage').on('touchmove', function () {
        /*
        $('div.posBgFirstPage').css({
            '-webkit-filter': 'blur(4px)'
        });
        */
        $('div.posBgFirstPage').addClass('posBgFirstAnimate').addClass('posBgFirstAnimateEnd');
        if (document.body.scrollTop <= 20) {
            $('div.posBgFirstPage').removeClass('posBgFirstAnimate posBgFirstAnimateEnd');
        }
    }).on('touchend', function () {
        //$('div.posBgFirstPage').removeClass('posBgFirstAnimate posBgFirstAnimateEnd');
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
        resetMinHeight($('#smsPage').height());
        $('#mainPage, div.posBgFirstPage').removeClass('topSlide').removeClass('topEnd');
        //切换下一场景
        $('div.posBgSecondPage, #smsPage').addClass('topNagetiveSlide').addClass('topEnd');
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
    //console.warn(document.body.scrollHeight);

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
    $(this).delegate('#J_flightsInfo li', 'tap', function (e) {
        //console.warn(this);
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
        //console.warn($('#mainPage').height(), $('#mainPage').offsetHeight);
        //切换动画
        $('div.posBgFirstPage').addClass('topSlide').addClass('topEnd').removeClass('posBgFirstAnimate').removeClass('posBgFirstAnimateEnd');
        $('#mainPage').addClass('topSlide').addClass('topEnd');
        //清楚css3 animations
        $('div.posBgSecondPage, #smsPage').removeClass('topNagetiveSlide').addClass('topEnd');
        resetMinHeight('auto');
        //console.warn(document.body.scrollTop, window.scrollTop);
    });
});
