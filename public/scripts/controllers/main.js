'use strict';

angular.module('bimeApp')
  .controller('MainCtrl', function ($scope, $location, $translate, $route) {
  	$scope.img_translate = '/img/banner-es.png'
  	$scope.changeLanguage = function (langKey) {
    	$translate.uses(langKey);
    	$scope.img_translate = '/img/banner-'+langKey+'.png';
  	};	
 	$scope.go = function (path) {
     	$location.path(path);
  }
});
