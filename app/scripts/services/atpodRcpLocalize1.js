(function() {
  'use strict';
  angular.module('recipesApp')
    .factory('atpodRcpLocalize1', ['$window','$http', 
                                  function($window,$http){
      var atpodRcpLocalize1 = {};
      atpodRcpLocalize1.language = $window.navigator.userLanguage || 
        $window.navigator.language;
      atpodRcpLocalize1.dictinary = {};
      atpodRcpLocalize1.resourceFileLoaded = false;
      atpodRcpLocalize1.initLocalization = function(){
          $http({ method:'GET',
              url:'scripts/i18n/resources-locale_' + 
                atpodRcpLocalize1.language + '.json', 
              cache:false 
        })
        .success(function(data,status){
          console.log('1',data);
          console.log('1',status);
        })
        .error(function(){
            $http({ method:'GET',
                url:'scripts/i18n/resources-locale_default.json', 
                cache:false 
          })
          .success(function(data, status){
              atpodRcpLocalize1.dictinary = data;
              console.log('atpodRcpLocalize1.dictinary',atpodRcpLocalize1.dictinary);
              console.log('data',data);
              console.log('status',status);
              atpodRcpLocalize1.resourceFileLoaded=true;
          })
          .error(function(){
            console('localization error');
          });
        });
      };
      
      atpodRcpLocalize1.getLocalizedString = function(key){
        if(!atpodRcpLocalize1.resourceFileLoaded){
          atpodRcpLocalize1.initLocalization();
        }
        return atpodRcpLocalize1.dictinary[key];
      };
      return atpodRcpLocalize1;
    }])
  
  .filter('i18n1', ['atpodRcpLocalize1',
                   function (atpodRcpLocalize1) {
                     return function (input) {
                       var test = atpodRcpLocalize1.getLocalizedString(input);
                       return test + 'test';
                     };
                   }]);
})();