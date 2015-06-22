'use strict';

/**
 * @ngdoc function
 * @name recipesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the recipesApp
 */
angular.module('recipesApp')
  .controller('AboutCtrl', function ($scope, $http) {
  console.log('$scope',$scope);
  var self = this;  
  $scope.results = {docs: {} };
  self.submit = function() {
    console.log('User clicked submit with ', self.query);
    $http(
            {method: 'JSONP',
             url: 'http://localhost:8983/solr/collection1/select',
             params:{'json.wrf': 'JSON_CALLBACK',
                    'q': self.query,
                    'wt': 'json'}
            })
            .success(function(data) {
              var docs = data.response.docs;
              console.log('search success!', self.query);
              $scope.results.docs = docs;
            }).error(function() {
              console.log('Search failed!');
            });
  };
        

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
