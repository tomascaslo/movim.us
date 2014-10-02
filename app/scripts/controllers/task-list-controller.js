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
			$scope.tasks = [];
			tasksService.getLatestTasks().then(function (results){
				angular.forEach(results, function(item){
					console.log('hi');
					$scope.$apply(function() {
						item.attributes["id"] = item.id;
						$scope.tasks.push(item.attributes);
					});
					//$scope.tasks.push(item.attributes);
				});
			    console.log($scope.tasks);
			  	// _.each(results, function(task){
			  	// 	$scope.tasks.push(task.attributes);
			  	// });
			}, function (error){
				alert("Error: " + error.code + " " + error.message);
			});
		}
		initController();
	}]);
