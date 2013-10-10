'use strict';

angular.module('bimeApp')
  .controller('MainCtrl', function ($scope, $location, $translate) {
  	$scope.changeLanguage = function (langKey) {
    	$translate.uses(langKey);
  	};	
 	$scope.go = function (path) {
     	$location.path(path);
  	}
   
});
