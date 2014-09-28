'use strict';

/**
 * @ngdoc service
 * @name foodtruckieApp.userService
 * @description
 * # userService
 * Service in the foodtruckieApp.
 */
angular.module('movimusApp')
  .service('userService', ['$http', '$state', 'localStorageService', 
    function ($http, $state, localStorageService) {
  	return {
  		getUser: function(userId){
  			return {
  				name: 'Gabriel Berlanga',
  				profileImage: 'images/berlanga.jpg',
  				score: 20
  			}
        },
      signUp: function(userData){
        if(userData.password === userData.passwordConfirmation){
          // console.log(Parse.User());
          var user = new Parse.User();
          user.set('username', userData.username);
          user.set('email', userData.email);
          user.set('password', userData.password); 
          user.signUp(null, {
            success: function(user) {
              localStorageService.set('loggedin', true);
              $state.go('h.home');
            },
            error: function(user, error) {
              localStorageService.set('loggedin', false);
              $state.go('h.home');
              alert("Error: " + error.code + " " + error.message);
            }
        })
        } else {
          window.alert("Contrasenas diferentes!");
        }
  			// var url = 'users/' + userId + '/';
  			// $http.get(url);
  		},
  	}
  }]);
