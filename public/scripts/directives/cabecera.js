angular.module('cabecera', [])
  // Register the 'myCurrentTime' directive factory method.
  // We inject $timeout and dateFilter service since the factory method is DI.
  .directive('cabeceraMenu', function() {
    return {
      restrict: 'A',
      replace: false,
      templateUrl: "views/cabecera.html",
      controller: 'MainCtrl'
    };
    // return the directive link function. (compile function not needed)
  });
