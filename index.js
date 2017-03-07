(function (window, $) {
    window.hy = window.hy || {};
    window.hy.notify = function (userOpt) {
        var defOpt = {
            title: {
                enable: true,
                label: '新信息',
                duration: 800
            }
        }
        var opt = $.extend({}, defOpt, userOpt);

        // 浏览器标题闪动
        var isTitleShine = false;
        console.log(opt);
        init();

        function init() {

        }

        function titleShine() {
            if (opt.title.enable === true) {
                var initTitle = document.title;
                var title = opt.title.label;
                var blank = title.split('')
                    .map(function (n) { return ' ' })
                    .join('');

                if (isTitleShine === true) {
                    setInterval(function () {
                        if (document.title.indexOf(title) === -1) {
                            document.title = '【' + title + '】';
                        } else {
                            document.title = '【' + blank + '】';
                        }
                    }, opt.title.duration);
                } else {
                    document.title = initTitle;
                }
            }
        }


        function showNotify(cb) {
            console.log(window);
            if (window.Notification === undefined) {
                throw new Error('broswer is not support Notification');
            }
            Notification.requestPermission(function (res) {
                if (res === 'granted') {
                    // cb.call(this);
                    new Notification('测试', {
                        body: '呵呵呵水电费就开始打开了防守打法科鲁兹手机发蓝色空房间辣史可法克里斯法呵呵呵水电费就开始打开了防守打法科鲁兹手机发蓝色空房间辣史可法克里斯法呵呵呵水电费就开始打开了防守打法科鲁兹手机发蓝色空房间辣史可法克里斯法',
                        // tag: 'tag',
                        icon: '//www.baidu.com/img/bd_logo1.png',
                        silent: true
                    })
                }
            })
        }

        this.pushMessage = function (title, msg, conf) {
            isTitleShine = true;
            titleShine();
            showNotify();
        }
    }
}(window, Zepto))