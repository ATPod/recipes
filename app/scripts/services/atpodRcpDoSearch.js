(function() {
    'use strict';
    angular.module('recipesApp').factory('atpodRcpDoSearch',
            [ '$http', function($http) {
                var searchResults = {};
                searchResults.getResults = function(query) {
                    console.log('query:', query);
                    return $http({
                        method : 'JSONP',
                        url : 'http://localhost:8983/solr/collection1/select',
                        params : {
                            'json.wrf' : 'JSON_CALLBACK',
                            'q' : query,
                            'wt' : 'json'
                        }
                    });
                };
                return searchResults;
            } ]);
})();