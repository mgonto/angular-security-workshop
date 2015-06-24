angular.module('sample', [
  'sample.home',
  'sample.login',
  'sample.signup',
  'angular-storage'
])
  .config(function myAppConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  })
  .controller('AppCtrl', function AppCtrl($scope) {
    // CHALLENGE: Put a route change event here
  })
;

