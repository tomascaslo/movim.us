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
		'LocalStorageModule',
		'ui.router',
		'ngAnimate',
		'ngCookies',
		'ngSanitize',
		'ngTouch',
		'google-maps'
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
			.state('h',{
				abstract: true,
				views: {
					'header' : {
						templateUrl: 'views/commons/header.html'
					},
				}
			})
			.state('h.home',{
				url: '/home',
				views: {
					'bodyView': {
						templateUrl: 'views/body.html'
					}
				}
			})
			.state('h.task-detail',{
				url: '/task_detail',
				views: {
					'bodyView': {
						templateUrl: 'views/task-detail.html',
						controller: 'TaskDetailCtrl'
					}
				}
			})
			.state('h.new-proposal',{
				url: '/new_proposal',
				views: {
					'bodyView': {
						templateUrl: 'views/new-proposal.html'
					}
				}
			})
			.state('profile',{
				url: '/profile',
				views: {
					'header' : {
						templateUrl: 'views/commons/header.html'
					},
					'bodyView': {
						templateUrl: 'views/profile.html'
					}
				}
			});

	}]);