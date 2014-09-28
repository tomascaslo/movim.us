'use strict';

/**
 * @ngdoc function
 * @name foodtruckieApp.controller:ProfileControllerCtrl
 * @description
 * # ProfileControllerCtrl
 * Controller of the foodtruckieApp
 */
angular.module('movimusApp')
	.controller('ProfileCtrl', ['$scope', 'userService', 'tasksService', 
		function ($scope, userService, tasksService) {

		function initController(){
			$scope.user = userService.getUser();
			$scope.tasks = tasksService.getUserTasks();
		}
		initController();
	}]);
