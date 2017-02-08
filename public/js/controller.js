myapp
    .controller('home.main.ctrl', ['$scope', '$http', function ($scope, $http) {

    }])
    .controller('about.main.ctrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {

    }])
    .controller('case.main.ctrl', ['$stateParams', '$http', '$scope', function ($stateParams, $http, $scope) {
        //获取服务器数据

            $http({
                url: '/api/case',
                method: 'get',
            }).then(
                (res) => {
                    let data = res.data;
                    if (data.isSuccess) {
                        //console.log(data);
                        $scope.product = data.list;
                        //console.log($scope.product);
                    } else {
                    }
                })
//动画遮罩效果
        var getDirection = function (ev, obj) {
            var w = obj.offsetWidth,
                h = obj.offsetHeight,
                x = ev.pageX - obj.offsetLeft - w / 2 * (w > h ? h / w : 1),
                y = ev.pageY - obj.offsetTop - h / 2 * (h > w ? w / h : 1),
                d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
            return d;
        };
        var nodes = $('.ca_content_uls li'),
            _nodes = [].slice.call(nodes, 0);

        var addClass = function (ev, obj, state) {
            var direction = getDirection(ev, obj), class_suffix = '';
            obj.className = '';
            switch (direction) {
                case 0:
                    class_suffix = '-top';
                    break;
                case 1:
                    class_suffix = '-right';
                    break;
                case 2:
                    class_suffix = '-bottom';
                    break;
                case 3:
                    class_suffix = '-left';
                    break;
            }
            obj.classList.add(state + class_suffix);
        };
        _nodes.forEach(function (el) {
            el.addEventListener('mouseover', function (ev) {
                addClass(ev, this, 'in');
            }, false);
            el.addEventListener('mouseout', function (ev) {
                addClass(ev, this, 'out');
            }, false);
        });



    }])
    .controller('service.main.ctrl', [function () {

    }])
    .controller('mobile.main.ctrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {

    }])
    .controller('solution.main.ctrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {

    }])
    .controller('news.main.ctrl', ['$scope', '$http', '$state', '$stateParams', function ($scope, $http, $state, $stateParams) {

        /* $scope.news = [{title:'这是网站建设',content:'这是网站建设'}];*/
        $scope.mynews = function (a) {
            if (a == 'signs') {
                $http({
                    url: '/api/news',
                    method: 'post',
                    data: {name: 'signs'}
                }).then(
                    (res) => {
                        let data = res.data;
                        if (data.isSuccess) {
                            $scope.news = data.list
                        } else {
                        }
                    })
            }
            if (a == 'mynews') {
                $http({
                    url: '/api/news',
                    method: 'post',
                    data: {name: 'mynews'}
                }).then(
                    (res) => {
                        let data = res.data;
                        if (data.isSuccess) {
                            $scope.news = data.list

                        } else {
                        }
                    })
            }
            if (a == 'faqs') {
                $http({
                    url: '/api/news',
                    method: 'post',
                    data: {name: 'faqs'}
                }).then(
                    (res) => {
                        let data = res.data;
                        if (data.isSuccess) {
                            $scope.news = data.list

                        } else {
                        }
                    })
            }
            if (a == 'websites') {
                $http({
                    url: '/api/news',
                    method: 'post',
                    data: {name: 'websites'}
                }).then(
                    (res) => {
                        let data = res.data;
                        if (data.isSuccess) {
                            $scope.news = data.list
                        } else {
                        }
                    })
            }

        }
        BindHover();
        function BindHover() {
            var $line_top = '<span class="line line_top"></span>';
            var $line_bottom = '<span class="line line_bottom"></span>';
            var $line_left = '<span class="line line_left"></span>';
            var $line_right = '<span class="line line_right"></span>';
            $(document).on('mouseenter', '.news-list li', function () {
                $(this).append($line_top, $line_bottom, $line_left, $line_right);
                var wd = $(this).outerWidth(true);
                var hg = $(this).height();
                var time = 500;
                $(this).find(".line_top").css({left: -wd, top: 0, width: wd, height: 1, opacity: 0}).animate({
                    left: 0,
                    opacity: 1
                }, time);
                $(this).find(".line_bottom").css({left: wd, bottom: 0, width: wd, height: 1, opacity: 0}).animate({
                    left: 0,
                    opacity: 1
                }, time);
                $(this).find(".line_right").css({right: 0, top: -hg, width: 1, height: hg, opacity: 0}).animate({
                    top: 0,
                    opacity: 1
                }, time);
                $(this).find(".line_left").css({left: 0, top: -hg, width: 1, height: hg, opacity: 0}).animate({
                    top: 0,
                    opacity: 1
                }, time);
            });
            $(document).on('mouseleave','.news-list li', function () {
                    $(this).find(".line").remove();
                })
            // $('.news-list li').hover(function () {
            //     alert('a');
            //     $(this).append($line_top, $line_bottom, $line_left, $line_right);
            //     var wd = $(this).outerWidth(true);
            //     var hg = $(this).height();
            //     var time = 500;
            //     $(this).find(".line_top").css({left: -wd, top: 0, width: wd, height: 1, opacity: 0}).animate({
            //         left: 0,
            //         opacity: 1
            //     }, time);
            //     $(this).find(".line_bottom").css({left: wd, bottom: 0, width: wd, height: 1, opacity: 0}).animate({
            //         left: 0,
            //         opacity: 1
            //     }, time);
            //     $(this).find(".line_right").css({right: 0, top: -hg, width: 1, height: hg, opacity: 0}).animate({
            //         top: 0,
            //         opacity: 1
            //     }, time);
            //     $(this).find(".line_left").css({left: 0, top: -hg, width: 1, height: hg, opacity: 0}).animate({
            //         top: 0,
            //         opacity: 1
            //     }, time);
            // }, function () {
            //     $(this).find(".line").remove();
            // });
            $(".news_seek img").mouseenter(function () {
                $(this).siblings("input").stop().animate({width: 200}, 600).select();
            });
            $(".inside_banner").click(function (e) {
                $(this).find(".text").animate({width: 0}, 300);
            });
            $(".news_seek").click(function (e) {
                e.stopPropagation();
            });
            $('#k').bind('keypress', function (event) {
                if (event.keyCode == "13") {
                    search_news();
                }
            })
        }

        //点击保存数据到localStorage
        $scope.click = (a, b) => {
            //console.log(a)
            window.localStorage.setItem('detail', JSON.stringify(a, b));

        }

    }])
    .controller('contact.main.ctrl', ['$scope', '$http', '$state','$rootScope', '$location',
        function ($scope, $http, $state,$rootScope,$location) {
        $scope.leaveWord = function () {
            $http({
                url: '/api/contact',
                method: 'post',
                data: $scope.leaveWords
            }).then(
                (res) => {
                    let data = res.data;
                    if (data.isSuccess) {
                        alert('提交成功！')

                    } else {
                    }
                })
        }
        $scope.renovation = function () {
            $http({
                url: '/api/home',
                method: 'get',
            }).then(
                (res) => {
                    let data = res.data;
                    if (data.isSuccess) {
                        // console.log(data);
                        $scope.product = data.list;
                        //console.log($scope.product[0].nickname);
                        $rootScope.nickname = ''
                        angular.forEach($scope.product,function (data,index,array) {
                            $rootScope.nickname += '昵称：'+data.nickname+'  留言：'+data.content+ '   ';
                            $location.path('/home');
                        })
                        // console.log($scope.nickname)

                    } else {
                    }
                })
        }
    }])
    .controller('detail.main.ctrl', ['$stateParams', '$scope', '$http', '$location',
        function ($stateParams, $scope, $http, $location) {
            let detailInfo = JSON.parse(window.localStorage.getItem('detail'));
            $scope.newsdetail = detailInfo;
           // console.log($scope.newsdetail.title)
            /*  console.log($location)
             console.log( $scope.search = $location.search())*/

            //$stateParams  包含传递的所有参数   ui-sref="detail({id:article._id})" 传递参数方法
            //  console.log($stateParams.id);
            let content = () => {
                $http({
                    url: '/api/article/' + $stateParams.id,
                    method: 'get',
                    data: $stateParams.id
                }).then(
                    (res) => {
                        let data = res.data;
                        if (data.isSuccess) {
                            console.log(data.list);
                            $scope.articledetail = data.list[0];
                        } else {
                            //alert(data.err)
                        }
                    })
            };
            content()
        }]);

myapp.run(['$rootScope', function ($rootScope) {

}]);