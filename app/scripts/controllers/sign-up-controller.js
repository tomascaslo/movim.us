'use strict';

/**
 * @ngdoc function
 * @name foodtruckieApp.controller:SignUpControllerCtrl
 * @description
 * # SignUpControllerCtrl
 * Controller of the foodtruckieApp
 */
angular.module('movimusApp')
	.controller('SignUpCtrl', ['$scope', 'userService', function ($scope, userService) {
		$scope.userData = {
			name: '',
			email: '', 
			password: '',
			passwordConfirmation: ''
		};

		$scope.signUp = function (){
			console.log(userService);
			userService.signUp($scope.userData);
		};

	}]);
