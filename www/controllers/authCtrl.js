(function(){
	'use strict';
	angular
		  .module('app_controllers')
		  .controller('authCtrl', authCtrl);

		  authCtrl.$inject = ['authenticateService', '$state', '$http', '$auth'];

		  function authCtrl(authenticateService, $state, $http, $auth){
		  	
		  	var vm = this;

		  	vm.signin = signin;
		  	vm.signup = signup;

		  	function signin (objForm){
			  	authenticateService.login(objForm).then(function(result){
			  			$state.go('dashboard');
			  		})
			  		.catch(function(err){
			  			console.log("error ao logar")
			  		});

		  		console.log("logando");
		  	}

		  	function signup(){

		  	}
		  }
})();