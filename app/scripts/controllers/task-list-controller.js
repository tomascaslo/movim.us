'use strict';

/**
 * @ngdoc function
 * @name foodtruckieApp.controller:TaskListControllerCtrl
 * @description
 * # TaskListControllerCtrl
 * Controller of the foodtruckieApp
 */
angular.module('movimusApp')
	.controller('TaskListCtrl', ['$scope', 'tasksService', function ($scope, tasksService) {
		function initController(){
			$scope.tasks = tasksService.getLatestTasks();
		}
		initController();
	}]);
