'use strict';

angular.module('movimusApp')
	.controller('NewProposalCtrl', ['$scope', 'tasksService', function($scope, tasksService){
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

		$scope.addNewProposal = function (){
			tasksService.addNewProposal($scope.proposalData).then(function(result){
				console.log(result);
				alert("Propuesta agregada!");
			}, function(){
				alert("No se pudo agregar la propuesta.");
			});
		}

	}]);