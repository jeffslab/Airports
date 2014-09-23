(function () {
    var adjust = function () {
        var width, dom = document.getElementsByTagName('html')[0];
        return function () {
            var w = Math.min(dom.offsetWidth, 480);
            if (width != w) {
                width = w;
                dom.style.fontSize = (10 / 480 * width) + 'px';
            }
        };
    }();
    adjust();
    window.addEventListener('resize',function () {
        setTimeout(adjust, 200);
    }, false);
}());
