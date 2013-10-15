'use strict';

angular.module('bimeApp')
  .controller('MainCtrl', function ($scope, $location, $translate) {
  	$scope.changeLanguage = function (langKey) {
    	$translate.uses(langKey);
  	};	
 	$scope.go = function (path) {
     	$location.path(path);
  	}
  	$scope.img_translate = $translate('IMG_CABECERA');
  	$scope.img = $scope.img_translate;
   
});
