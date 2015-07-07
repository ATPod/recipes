(function(){
  'use strict';
  // load from ls on app start up
  // save to ls after each search request
  angular.module('recipesApp')
    .factory('atpodRcpLSQueries', ['$window','$cookieStore', 
                                   function($window, $cookieStore){
      return {
          setData: function( key, value ){
            try {
              if( angular.isDefined($window.Storage) ){
                $window.localStorage.setItem(key, value);
                return true;
              } else {
                $cookieStore.put(key, value);
                return false;
              }
            } catch( error ){
              console.error( error, error.message );
            }
          },
          getData: function( key ){
            try{
              if( angular.isDefined($window.Storage) ){
                return $window.localStorage.getItem( key );
              } else {
                return $cookieStore.get(key);
              }
            } catch( error ){
              console.error( error, error.message );
            }
          }
      };
    }]);
})();