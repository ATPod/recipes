'use strict';

angular.module('recipesApp')
  .directive('atpodRcpSearch', ['atpodRcpDoSearch', function(atpodRcpDoSearch){
    return {
      templateUrl: 'views/components/search.html',
      restrict: 'AE',
      scope: {
        resultsContainer:'='
      },
      link: function($scope, $element, $attrs){
        console.log('scope: ', $scope);
        console.log('element: ', $element);
        console.log('attrs: ', $attrs);
        console.log('scope.results:', $scope.resultsContainer);
        $scope.submit = function(){
          console.log('submit from directive');
          var self = this;
          atpodRcpDoSearch.getResults(self.query)
                  .success(function(data) {
                    var docs = data.response.docs;
                    if(angular.isObject(data.response) && 
                      !(angular.isUndefined(data.response))){
                        console.log('search success!', self.query);
                        $scope.resultsContainer.docs = docs;
                    } else {
                    	console.log('Search failed!');
                    }
                  }).error(function() {
                    console.log('Search failed!');
                  });
          /*
          $http(
                  {method: 'JSONP',
                   url: 'http://localhost:8983/solr/collection1/select',
                   params:{'json.wrf': 'JSON_CALLBACK',
                          'q': self.query,
                          'wt': 'json'}
                  })
                  .success(function(data) {
                    var docs = data.response.docs;
                    if(angular.isObject(data.response) && 
                      !(angular.isUndefined(data.response))){
                        console.log('search success!', self.query);
                        $scope.resultsContainer.docs = docs;
                    } else {
                    	console.log('Search failed!');
                    }
                  }).error(function() {
                    console.log('Search failed!');
          });*/
          console.log('scope.results1:', $scope.resultsContainer);//return 
        };
      }
    };
  }]);