'use strict';

angular.module('movimusApp')
	.controller('TaskDetailCtrl', ['$scope', '$stateParams', 'tasksService', function($scope, $stateParams, tasksService){
		$scope.map = {
			center: {
				latitude: 45,
				longitude: -73
			},
			zoom: 8
		};

		function initController(){
			tasksService.getTask($stateParams.taskId).then(function(result){
				$scope.task = result;
			}, function(){});
		}
		initController();
	}]);