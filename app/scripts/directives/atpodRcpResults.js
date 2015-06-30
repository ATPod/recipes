(function(){
  'use strict';
  angular.module('recipesApp')
    .directive('atpodRcpResults', function(){
        return {
            templateUrl: 'views/components/results.html',
            restrict: 'AE',
            scope: {
            	item:'='
            },
            link: function($scope,$element,$attrs){
                console.log('from results scope: ', $scope.item);
                console.log('from results element: ', $element);
                console.log('from results attrs: ', $attrs);           	
            }
        };
    });
  })();