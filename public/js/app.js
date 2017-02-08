const myapp = angular.module('yuxapp', ['ui.router']);

myapp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);

        $stateProvider.state('home', {
            url: '/home',
            views: {
                'viewMain': {
                    templateUrl: '/views/home.main.tpl.html',
                    controller: 'home.main.ctrl'
                }
            }
        }).state('about', {
            url: '/about',
            views: {
                'viewMain': {
                    templateUrl: '/views/about.main.tpl.html',
                    controller: 'about.main.ctrl'
                }
            }
        }).state('case', {
            url: '/case',
            views: {
                'viewMain': {
                    templateUrl: '/views/case.main.tpl.html',
                    controller: 'case.main.ctrl'
                }
            }
        }).state('service', {
            url: '/service',
            views: {
                'viewMain': {
                    templateUrl: '/views/service.main.tpl.html',
                    controller: 'service.main.ctrl'
                }
            }
        }).state('mobile', {
            url: '/mobile',
            views: {
                'viewMain': {
                    templateUrl: '/views/mobile.main.tpl.html',
                    controller: 'mobile.main.ctrl'
                }
            }
        }).state('solution', {
            url: '/solution',
            views: {
                'viewMain': {
                    templateUrl: '/views/solution.main.tpl.html',
                    controller: 'solution.main.ctrl'
                }
            }
        }).state('news', {
            url: '/news',
            views: {
                'viewMain': {
                    templateUrl: '/views/news.main.tpl.html',
                    controller: 'news.main.ctrl'
                }
            }
        }).state('contact', {
            url: '/contact',
            views: {
                'viewMain': {
                    templateUrl: '/views/contact.main.tpl.html',
                    controller: 'contact.main.ctrl'
                }
            }
        }).state('detail', {
            url: '/detail',
            views: {
                'viewMain': {
                    templateUrl: '/views/detail.main.tpl.html',
                    controller: 'detail.main.ctrl'
                }
            }
        });

        $urlRouterProvider.otherwise('/home');
    }]);
myapp.controller('myApp',['$scope','$http',function ($scope,$http) {
    //获取服务器数据
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
                $scope.nickname = ''
                angular.forEach($scope.product,function (data,index,array) {
                    $scope.nickname += '昵称：'+data.nickname+'  留言：'+data.content+ '   ';

                })
               // console.log($scope.nickname)

            } else {
            }
        })
}])
