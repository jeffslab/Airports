//阻止横屏
$(window).on('orientationchange', function (e) {
    e.preventDefault();
});

$(document).on('pageinit', '#mainPage', function (e) {
    //随机数据测试使用
    $('p.abordTime, div.abordTimeBig').text(Math.floor(Math.random() * 24) + ':00');
    $('p.targetPlace').text(Math.floor(Math.random() * 24) + ':00');
    $('p.localWeather b').text(Math.floor(Math.random() * 35));
    $(this).on('touchmove', function (e) {
        console.warn(e.view.scrollY, e.view.pageYOffset);
        var dScrollTop = document.body.scrollTop,
            dClientHeight = document.body.clientHeight,
            dScrollHeight = document.body.scrollHeight;
        console.warn(dScrollTop, dClientHeight, dScrollHeight);
        /*
        if (dScrollTop + dClientHeight >= dScrollHeight) {
            e.preventDefault();
            $.mobile.changePage('#smsPage', {
                transition: 'slidedown'
            });
        }
        */
    });
    $(this).on('swipeleft', function (e) {
        $.mobile.changePage('#smsPage', {
            transition: 'slide'
        });
    });
    //短信通知的逻辑
    $(this).delegate('#J_smsMe', 'click', function () {
        $(this).parent().html($('#enterPhoneNumber').html());
    }).delegate('#J_sendSms', 'click', function () {
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
    $(this).delegate('#J_flightsInfo li', 'click', function () {
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
        //console.warn(i, f, t, o, $('#J_flagNum'), this);
        $.mobile.changePage('#mainPage', {
            transition: 'slideup'
        });
    });
});
