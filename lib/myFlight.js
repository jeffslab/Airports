
$(function () {
    //页面控制
    //判断是否拖拽到底部
    function isBottom (s) {
        s = s || 10;
        var d = document,
            dc = d.body.clientHeight,
            ds = d.body.scrollHeight,
            dt = d.body.scrollTop;
        return  dt + dc >= ds + s;
    }
    //设置高度之后不会有滚动时背景图拉伸闪烁
    var dh = document.body.scrollHeight;
    function resetMinHeight (h) {
        //console.warn(dh, document.body.scrollHeight);
        $('#mainPage, div.posBgFirstPage, div.posBgFirstPageEnd').css({
            minHeight: h == 'auto' ? '100%' : h,
            height: h
        });
        document.body.scrollTop = 0;
    }
    //横屏时设置页面高度
    $(window).on('orientationchange', function () {
        resetMinHeight(document.body.scrollHeight);
    });
    resetMinHeight(dh);
    //页面虚化
    $('#smsPage').on('touchmove', function () {
        $('div.posBgSecondPage').addClass('posBgFirstAnimate').addClass('posBgFirstAnimateEnd');
        if (document.body.scrollTop <= 20) {
            $('div.posBgSecondPage').removeClass('posBgFirstAnimate posBgFirstAnimateEnd');
        }
    }).on('touchend', function () {
        //到底的拖拽切换页面
        if (isBottom(30)) {
        $('#J_flightsInfo li:first').trigger('tap');
        }
        if (document.body.scrollTop <= 20) {
            $('div.posBgSecondPage').removeClass('posBgFirstAnimate posBgFirstAnimateEnd');
        }
    });
    //页面虚化
    $('#mainPage').on('touchmove', function () {
        $('div.posBgFirstPage').addClass('posBgFirstAnimate').addClass('posBgFirstAnimateEnd');
        if (document.body.scrollTop <= 20) {
            $('div.posBgFirstPage').removeClass('posBgFirstAnimate posBgFirstAnimateEnd');
        }
    }).on('touchend', function () {
        //到底的拖拽切换页面
        if (isBottom(30)) {
            $('#J_nextPageButton').click();
        }
        if (document.body.scrollTop <= 20) {
            $('div.posBgFirstPage').removeClass('posBgFirstAnimate posBgFirstAnimateEnd');
        }
    });
    //点击切换
    $('#J_nextPageButton').click(function () {
        $('#mainPage').animate({
            opacity: 0
        }, 200, function () {
            $('#mainPage').css({
                opacity: 1
            });
            $('div.secondPageWrap').css({
                height: $('#smsPage').height() + 40,
                zIndex: 7
            });
            $('div.posBgSecondPage').css({
                top: 0,
                height: $('#smsPage').height() + 40
            });
            $('#smsPage').css({
                bottom: -document.body.clientHeight
            }).animate({
                bottom: 0
            }, 700);
            resetMinHeight($('#smsPage').height());
            $('#smsPage, div.posBgSecondPage').removeClass('posBgFirstAnimate posBgFirstAnimateEnd');
            $('#mainPage, div.posBgFirstPage').removeClass('topSlide').removeClass('topEnd');
        });
    });
    //随机数据测试使用
    $('p.abordTime, div.abordTimeBig').text(Math.floor(Math.random() * 24) + ':00');
    $('p.targetPlace').text(Math.floor(Math.random() * 24) + ':00');
    $('p.localWeather b').text(Math.floor(Math.random() * 35));
    //短信通知的逻辑
    $(this).delegate('#J_smsMe', 'click', function (e) {
        $(this).parent().html($('#enterPhoneNumber').html()).find('#J_phoneNumber').focus();
    }).delegate('#J_sendSms', 'click', function (e) {
        e.stopPropagation();
        var v = $('#J_phoneNumber').val();
        $(this).parent().html($('#phoneNumberSuccuss').html().replace('{{{val}}}', v));
    });
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
        //console.warn($('#mainPage').height(), $('#mainPage').offsetHeight);
        //切换动画
        $('div.posBgFirstPage').addClass('topSlide').addClass('topEnd').removeClass('posBgFirstAnimate').removeClass('posBgFirstAnimateEnd');
        $('#mainPage').addClass('topSlide').addClass('topEnd');
        //清楚css3 animations
        //$('div.posBgSecondPage, #smsPage').removeClass('topSlide').addClass('topEnd');
        $('#smsPage').animate({
            opacity: 0
        }, 200, function () {
            $('div.secondPageWrap').css({
                zIndex: 2
            });
            resetMinHeight('auto');
            setTimeout(function () {
                $('#smsPage').css('opacity', 1);
            }, 500);
        });
    });
});
