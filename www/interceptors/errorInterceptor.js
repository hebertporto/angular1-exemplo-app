(function (){
	'use strict';
	angular
		.module('dm_interceptor')
		.factory('errorInterceptor', errorInterceptor);

		errorInterceptor.$inject = ['$q'];

		function errorInterceptor ($q){
			return {
				responseError : function (rejection) {

					if(rejection.status === 404) {
						
					}
					console.log(rejection);
					return $q.reject(rejection);
				}
			}
		}
})();