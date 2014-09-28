'use strict';

/**
 * @ngdoc directive
 * @name foodtruckieApp.directive:taskElementDirective
 * @description
 * # taskElementDirective
 */
angular.module('movimusApp')
	.controller('TaskElementCtrl', ['$scope', function($scope){
		$scope.desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	}])
	.directive('taskElementDirective', function () {
		return {
			restrict: 'E',
			templateUrl: 'views/directive-templates/task-element.html',
			controller: 'TaskElementCtrl', 
			link: function postLink(scope, element, attrs) {

			}
		};
	});
