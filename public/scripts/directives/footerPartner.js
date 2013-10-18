angular.module('footerPartner', [])
  // Register the 'myCurrentTime' directive factory method.
  // We inject $timeout and dateFilter service since the factory method is DI.
  .directive('footerPartner', function() {
    return {
      restrict: 'A',
      replace: false,
      templateUrl: "views/footerPartner.html",
      controller: 'MainCtrl'
    };
    // return the directive link function. (compile function not needed)
  });
