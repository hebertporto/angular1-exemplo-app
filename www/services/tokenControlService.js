(function (){
	'use strict';
	angular
		  .module('app_services')
		  .factory('tokenControlService', tokenControlService);

		  tokenControlService.$inject = [];

		  function tokenControlService (){

		  	var _setItem = function (key, value){
		  		return localStorage.setItem(key, val);
		  	}

		  	var _getItem = function (key){
		  		return localStorage.getItem(key);
		  	}

		  	var _removeItem = function (key){
		  		return localStorage.removeItem(key, val);
		  	}

		  	return {
		  		setItem 	: _setItem,
		  		getItem 	: _getItem,
		  		removeItem  : _removeItem
		  	}
		  }
})();