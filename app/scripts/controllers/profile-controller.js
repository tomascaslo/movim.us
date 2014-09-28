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

		var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		testObject.save({foo: "bar"}).then(function(object) {
		  alert("yay! it worked");
		});

		function initController(){
			$scope.user = userService.getUser();
			$scope.tasks = tasksService.getUserTasks();
		}
		initController();
	}]);
