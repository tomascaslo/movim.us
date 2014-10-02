'use strict';

/**
 * @ngdoc overview
 * @name movimusApp
 * @description
 * # movimusApp
 *
 * Main module of the application.
 */
angular
	.module('movimusApp', [
		'LocalStorageModule',
		'ui.router',
		'ngAnimate',
		'ngCookies',
		'ngSanitize',
		'ngTouch',
		'google-maps',
	])
	.run(['$rootScope', '$state', '$stateParams', 'localStorageService', 
		function ($rootScope, $state, $stateParams, localStorageService) {

		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		
		$rootScope.$on('$stateChangeStart', function (event, current, previous){
			var loggedin = !!localStorageService.get('loggedin');
			console.log('logged in: ' + loggedin);
			if(current.authenticate && !loggedin){
				console.log('not authenticated');
				$state.transitionTo('login');
				event.preventDefault();
			}
		});
	}])
	.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider',
		function ($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

		Parse.initialize("JkCdrrNfvFii8J1ZE57vcHTKwIlBdeuqYFRmeT0F", "U0krlGjUbRx1YdcVK23Ruvmp4IBQOrrUEwScVpst");

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
			.state('login',{
				url: '/login',
				views: {
					'generalView' : {
						templateUrl: 'views/sign-in.html',
						controller: 'LoginCtrl'
					},
				}
			})
			.state('sign-up',{
				url: '/sign-up',
				views: {
					'generalView' : {
						templateUrl: 'views/sign-up.html',
						controller: 'SignUpCtrl'
					},
				}
			})
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
						templateUrl: 'views/home.html',
						controller: 'TaskListCtrl'
					}
				}
			})
			.state('h.task-detail',{
				url: '/task_detail/:taskId',
				views: {
					'bodyView': {
						templateUrl: 'views/task-detail.html',
						controller: 'TaskDetailCtrl'
					}
				}
			})
			.state('h.new-proposal',{
				url: '/new_proposal',
				authenticate: true,
				views: {
					'bodyView': {
						templateUrl: 'views/new-proposal.html',
						controller: 'NewProposalCtrl'
					}
				}
			})
			.state('h.profile',{
				url: '/profile',
				views: {
					'header' : {
						templateUrl: 'views/commons/header.html'
					},
					'bodyView': {
						templateUrl: 'views/profile.html',
						controller: 'ProfileCtrl'
					}
				}
			});

	}]);