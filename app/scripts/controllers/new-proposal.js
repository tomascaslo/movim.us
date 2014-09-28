'use strict';

angular.module('movimusApp')
	.controller('NewProposalCtrl', ['$scope', '$state', 'tasksService', 
		function($scope, $state, tasksService){
		$scope.map = {
			center: {
				latitude: 45,
				longitude: -73
			},
			zoom: 8
		};

		$scope.proposalData = {
			description: '',
			name: '',
			quantity: 0
		};

		$scope.$watch('proposalData', function(newValue){
			console.log(newValue);
		});

		$scope.addNewProposal = function (){
			tasksService.addNewProposal($scope.proposalData).then(function(result){
				console.log(result);
				alert("Propuesta agregada!");
				$state.go('h.home');

			}, function(){
				alert("No se pudo agregar la propuesta.");
			});
		}

	}]);