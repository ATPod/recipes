'use strict';

/**
 * @ngdoc overview
 * @name recipesApp
 * @description
 * # recipesApp
 *
 * Main module of the application.
 */
angular
  .module('recipesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/recipes', {
        templateUrl: 'views/recipes.html',
        controller: 'atpodRcpRecipesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
