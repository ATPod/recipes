(function(){
  'use strict';
  angular.module('recipesApp')
    .directive('atpodRcpInitial', ['atpodRcpLSQueries', 'atpodRcpDoSearch', 
                                     function(atpodRcpLSQueries, atpodRcpDoSearch){
      return {
        restrict:'AE',
        scope: {
            resultsContainer:'='
          },
        link: function($scope){
          var latestQuery = atpodRcpLSQueries.getData('atpodRcpQueries');
          console.log('latestQuery',latestQuery );
          if (angular.isString(latestQuery)){
            atpodRcpDoSearch.getResults(latestQuery)
                    .success(function(data) {
                    if(angular.isObject(data.response) && 
                      !(angular.isUndefined(data.response))){
                    	// TODO add hl to highlight results
                        $scope.resultsContainer.docs = data.response.docs;
                    } else {
                      console.log('Search failed!');
                    }
                  }).error(function() {
                    console.log('Search failed!');
                  });
          } else {
          // return most popular recipes
              atpodRcpDoSearch.getResults('%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86')
              .success(function(data) {
              if(angular.isObject(data.response) && 
                !(angular.isUndefined(data.response))){
                  $scope.resultsContainer.docs = data.response.docs;
              } else {
                console.log('Search failed!');
              }
            }).error(function() {
              console.log('Search failed!');
            });
          }
        }  
      };
    }]);
})();