'use strict';

/**
 * @ngdoc service
 * @name foodtruckieApp.userService
 * @description
 * # userService
 * Service in the foodtruckieApp.
 */
angular.module('movimusApp')
  .service('userService', ['$http', function ($http) {
  	return {
  		getUser: function(userId){
  			return {
  				name: 'Gabriel Berlanga',
  				profileImage: 'images/berlanga.jpg',
  				score: 20
  			}
  			// var url = 'users/' + userId + '/';
  			// $http.get(url);
  		},
  	}
  }]);
