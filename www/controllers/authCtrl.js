(function(){
	'use strict';
	angular
		  .module('app_controllers')
		  .controller('authCtrl', authCtrl);

		  authCtrl.$inject = ['authenticateService'];

		  function authCtrl(authenticateService){
		  	
		  	var vm = this;

		  	vm.signin = signin;
		  	vm.signup = signup;

		  	function signin (objForm){
		  		authenticateService.login(objForm)
			  		.then(function(result){
			  			
			  		})
			  		.catch(function(err){

			  		});

		  		console.log("logando");
		  	}

		  	function signup(){

		  	}
		  }
})();