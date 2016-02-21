(function() {
  'use strict';
  angular.module('recipesApp')
    .factory('localize', ['$http','$rootScope','$window', 
                                  function($http,$rootScope,$window){
      var localize = {
            language:$window.navigator.userLanguage || $window.navigator.language,
            dictionary:[],
            resourceFileLoaded:false,
            
            successCallback:function (data) {
                localize.dictionary = data;
                localize.resourceFileLoaded = true;
                $rootScope.$broadcast('localizeResourcesUpdates');
            },
            
            initLocalization:function(){
             
              $http({ method:'GET',
                      url:'scripts/i18n/resources-locale_' + localize.language + '.json', 
                      cache:false 
                })
                .success(localize.successCallback)
                .error(function()  {
                          $http({ method:'GET', 
                                 url: 'scripts/i18n/resources-locale_default.json', 
                                 cache:false })
                           .success(localize.successCallback)
                           .error(localize.successCallback);
                       });
            },
            getLocalizedString:function(value){
                if (localize.resourceFileLoaded) {
                    if (localize.dictionary.hasOwnProperty(value)) {
                      return localize.dictionary[value];
                    } else {
                      return 'unknown key: "' + value + '"';
                    }
                }
               
            }
      };
      
      localize.initLocalization();
      
      return localize;
    }])
  
  .filter('i18n', ['localize',
                   function (localize) {
                     return function (input) {
                       var test = localize.getLocalizedString(input);
                       return test;
                     };
                   }]);
})();