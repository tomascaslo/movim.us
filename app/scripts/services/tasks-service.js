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
  			return [
  				{
					name: 'Tapar bache',
					image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
					amount_collected: 231,
					current_contributors: 3242,
					description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					name: 'Barrer calle',
					image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
					amount_collected: 231,
					current_contributors: 42,
					description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					name: 'Recoger perro muerto',
					image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
					amount_collected: 23,
					current_contributors: 2,
					description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					name: 'Recoger basura',
					image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
					amount_collected: 40,
					current_contributors: 32,
					description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				}
  			];
  		},
  		getUserTasks: function (){
  			return [
				{
					name: 'Tapar bache',
					image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
					amount_collected: 231,
					current_contributors: 3242,
					description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					name: 'Barrer calle',
					image: 'http://radiopalihue.com.ar/wp-content/uploads/2014/06/539cd6345938a.jpg',
					amount_collected: 231,
					current_contributors: 42,
					description: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
  			];
  			// var url = 'tasks/';
  			// return $http.get(url);
  		}
  	}
  }]);
