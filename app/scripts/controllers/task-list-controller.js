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
		$scope.openDetail = function (id){
			$state.go('h.task-detail', {taskID: id});
		};

		function initController(){
			$scope.tasks = tasksService.getLatestTasks();
		}
		initController();
	}]);
