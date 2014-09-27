'use strict';

/**
 * @ngdoc overview
 * @name foodtruckieApp
 * @description
 * # foodtruckieApp
 *
 * Main module of the application.
 */
angular
	.module('foodtruckieApp', [
		'ui.router',
		'LocalStorageModule',
		'ngAnimate',
		'ngCookies',
		'ngSanitize',
		'ngTouch'
	])
	.run(['$rootScope', '$state', '$stateParams', 'localStorageService', 
		function ($rootScope, $state, $stateParams, localStorageService) {

		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		
		// $rootScope.$on('$stateChangeStart', function (event, current, previous){
		// 	var loggedin = !!localStorageService.get('loggedin');
		// 	console.log('logged in: ' + loggedin);
		// 	if(current.authenticate && !loggedin){
		// 		console.log('not authenticated');
		// 		$state.transitionTo('login');
		// 		event.preventDefault();
		// 	}
		// });
	}])
	.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider',
		function ($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
		// Setting up the xsrf token for gets and petitions
		$httpProvider.defaults.xsrfCookieName = 'csrftoken';
		$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
		$httpProvider.defaults.headers.patch = {
			'Content-Type': 'application/json;charset=utf-8'
		};
		
		$urlRouterProvider
			.otherwise('/home');
		// $locationProvider.html5Mode(true);
		// $locationProvider.hashPrefix('');

		$stateProvider
			.state('home',{
				url: '/home',
				views: {
					'bodyView': {
						templateUrl: 'views/body.html'
					}
				}
			});

	}]);