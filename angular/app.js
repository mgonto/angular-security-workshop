angular.module( 'sample', [
  'sample.home',
  'sample.login',
  'sample.signup',
  'angular-jwt',
  'angular-storage'
])
.config( function myAppConfig ($urlRouterProvider, jwtInterceptorProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

  // CHALLENGE: Add jwtInterceptorProvider as an interceptor to the application
})
.run(function($rootScope, $state, store, jwtHelper) {
  // CHALLENGE: Intercept the $stateChangeStart event and check if the route is restricted
  // CHALLENGE: Intercept the `$stateChangeStart` event and validate the user session
})
.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$routeChangeSuccess', function(e, nextRoute){
    if ( nextRoute.$$route && angular.isDefined( nextRoute.$$route.pageTitle ) ) {
      $scope.pageTitle = nextRoute.$$route.pageTitle + ' | Angular Security Sample' ;
    }
  });
})

;

