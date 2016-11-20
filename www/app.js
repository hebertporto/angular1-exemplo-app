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
		'app_interceptors'
	])
	.config(['$urlRouterProvider', '$stateProvider',
		function  ($urlRouterProvider, $stateProvider) {
		   
		   $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            });
                                ;
			$urlRouterProvider.otherwise('/');
		}])
	.run(function  () {
		
	});

})();