angular.module('footer', [])
  // Register the 'myCurrentTime' directive factory method.
  // We inject $timeout and dateFilter service since the factory method is DI.
  .directive('footerMain', function() {
    return {
      restrict: 'A',
      replace: false,
      templateUrl: "views/footer.html",
      controller: 'MainCtrl'
    };
    // return the directive link function. (compile function not needed)
  });
