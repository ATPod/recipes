'use strict';

/**
 * @ngdoc function
 * @name recipesApp.controller:RecipesCtrl
 * @description
 * # AboutCtrl
 * Controller of the recipesApp
 */
angular.module('recipesApp')
  .controller('atpodRcpRecipesCtrl', function ($scope) {
  console.log('$scope1',$scope);
  //var self = this;  
  $scope.results = {docs: [] };
  console.log('$scope1.results:', $scope.results);
});
