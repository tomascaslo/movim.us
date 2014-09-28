'use strict';

angular.module('movimusApp')
	.controller('NewProposalCtrl', ['$scope', function($scope){
		$scope.map = {
			center: {
				latitude: 45,
				longitude: -73
			},
			zoom: 8
		};
	}]);