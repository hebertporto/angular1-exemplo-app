(function  () {
	'use strict';
	angular.module('app_controllers', []);
	angular.module('app_services', []);
	angular.module('app_components', []);
	angular.module('app_interceptors', []);

	angular.module('app', [
		'ui.router',
		'ui.bootstrap',
		'ngAnimate',
		'ngMessages',
		'app_controllers',
		'app_services',
		'app_components',
		'app_interceptors',
		'satellizer'
	])
	.config(['$urlRouterProvider', '$stateProvider', '$authProvider',
		function  ($urlRouterProvider, $stateProvider, $authProvider) {
		   
		   $authProvider.loginUrl = "http://localhost:3000/users/authenticate";

		   $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .state('signin', {
                url: '/signin',
                templateUrl: 'templates/authentication/signin.html',
                controller: 'authCtrl',
                controllerAs: 'vm'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard/dashboard.html',
                controller: 'dashboardCtrl',
                controllerAs: 'vm'
            });
                                ;
			$urlRouterProvider.otherwise('/');
		}])
	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.interceptors.push('loadingInterceptor');
	}])
	.run(function  ($rootScope, $state, authenticateService) {

		  // $rootScope.$on('$routeChangeStart', function(event, next, current) {
    //             if (next.auth) {
    //                 if (!authenticateService.getToken()) {
    //                     $rootScope.$evalAsync(function() {
    //                         $state.go('login');
    //                     });
    //                 }
    //             }
    //         });
	});

})();