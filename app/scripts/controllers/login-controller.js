'use strict';

/**
 * @ngdoc function
 * @name foodtruckieApp.controller:LoginControllerCtrl
 * @description
 * # LoginControllerCtrl
 * Controller of the foodtruckieApp
 */
angular.module('movimusApp')
  .controller('LoginCtrl', ['$scope', 'userService', function ($scope, userService) {
  	$scope.userData = {
  		username: '',
  		password: ''
  	};

  	$scope.login = function(){
  		userService.login($scope.userData);
  	}
  }]);
