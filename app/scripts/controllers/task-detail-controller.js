'use strict';

angular.module('movimusApp')
	.controller('TaskDetailCtrl', ['$scope', function($scope){
		$scope.map = {
			center: {
				latitude: 45,
				longitude: -73
			},
			zoom: 8
		};
	}]);