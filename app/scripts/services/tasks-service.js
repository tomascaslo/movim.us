'use strict';

/**
 * @ngdoc service
 * @name foodtruckieApp.tasksService
 * @description
 * # tasksService
 * Service in the foodtruckieApp.
 */
angular.module('movimusApp')
  .service('tasksService', ['$http', function tasksService($http) {
  	return {
  		getLatestTasks: function (){
  			var task = Parse.Object.extend("task");
			var query = new Parse.Query(task);
			return query.find();
  		},
  		addNewProposal: function (taskData){
  			var Task = Parse.Object.extend("task");
  			var task = new Task();

  			task.set('description', taskData.description);
  			task.set('name', taskData.name);
  			task.set('quantity', taskData.quantity);
  			return task.save();
  		},
  		getUserTasks: function (){
  			return [
				{
					taskID: 1,
					name: 'Tapar bache',
					image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
					amount_collected: 231,
					current_contributors: 3242,
					description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					taskID: 2,
					name: 'Barrer calle',
					image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
					amount_collected: 231,
					current_contributors: 42,
					description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
  			];
  			// var url = 'tasks/';
  			// return $http.get(url);
  		},
  		getTask: function (id){
        // var task = Parse.Object.extend("task");
        // var query = new Parse.Query(task);
        // query.equalTo("objectId", id);
        // return '';
  			return {
					taskID: 1,
					name: 'Tapar bache',
					image: 'images/bache.jpeg',
					amount_collected: 231,
					current_contributors: 3242,
					description: 'Hay un bache cerca de mi casa, ya me tiene hasta la madre, quien me ayuda?'
			};	
  			// var url = 'tasks/' + id + '/';
  			// return $http.get(url);
  		}
  	}
  }]);
