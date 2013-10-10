'use strict';

angular.module('bimeApp')
  .controller('MainCtrl', function ($scope, $location) {
  	
 	$scope.go = function (path) {
     	$location.path(path);
  	}
   
});
