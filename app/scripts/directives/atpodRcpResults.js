(function(){
  'use strict';
  angular.module('recipesApp')
    .directive('atpodRcpResults', function(){
        return {
            templateUrl: 'views/components/results.html',
            restrict: 'AE',
            scope: {
            	item:'='
            }
        };
    });
  })();