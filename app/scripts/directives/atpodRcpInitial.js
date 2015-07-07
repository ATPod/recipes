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
        	console.log('latestQuery', latestQuery);
        	if (angular.isString(latestQuery)){
        		console.log('TEST');
        		atpodRcpDoSearch.getResults(latestQuery)
        		.success(function(data) {
        			console.log('test111', data.response.docs);
                    var docs = data.response.docs;
                    if(angular.isObject(data.response) && 
                      !(angular.isUndefined(data.response))){
                        $scope.resultsContainer.docs = docs;
                    } else {
                    	console.log('Search failed!');
                    }
                  }).error(function() {
                    console.log('Search failed!');
                  });
        	} else {
        		// return most popular recipes
        	}
        }  
      };
    }]);
})();