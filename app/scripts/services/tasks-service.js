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
			// query.equalTo("playerName", "Dan Stemkoski");
			query.find({
			  success: function(results) {
			  	console.log(results);
			    return results;
			  },
			  error: function(error) {
			    alert("Error: " + error.code + " " + error.message);
			  }
			});
  		// 	return [
  		// 		{
  		// 			taskID: 1,
				// 	name: 'Tapar bache',
				// 	image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
				// 	amount_collected: 231,
				// 	current_contributors: 3242,
				// 	description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				// },
				// {
				// 	taskID: 2,
				// 	name: 'Barrer calle',
				// 	image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
				// 	amount_collected: 231,
				// 	current_contributors: 42,
				// 	description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				// },
				// {
				// 	taskID: 3,
				// 	name: 'Recoger perro muerto',
				// 	image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
				// 	amount_collected: 23,
				// 	current_contributors: 2,
				// 	description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				// },
				// {
				// 	taskID: 4,
				// 	name: 'Recoger basura',
				// 	image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
				// 	amount_collected: 40,
				// 	current_contributors: 32,
				// 	description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				// }
  		// 	];
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
