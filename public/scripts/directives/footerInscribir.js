angular.module('footerInscribir', [])
  // Register the 'myCurrentTime' directive factory method.
  // We inject $timeout and dateFilter service since the factory method is DI.
  .directive('footerInscribir', function() {
    return {
      restrict: 'A',
      replace: false,
      templateUrl: "views/footerInscribir.html"
    };
    // return the directive link function. (compile function not needed)
  });
