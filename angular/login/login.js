angular.module( 'sample.login', [
  'ui.router',
  'angular-storage'
])
.config(function($stateProvider) {
    // CHALLENGE: Add a login route
})
.controller( 'LoginCtrl', function LoginController( $scope, store, $state) {
    $scope.user = {};

    $scope.login = function () {
      // CHALLENGE: Handle logging the user in
      // HINT: What information would we save?
      // HINT: Where should a logged in user be?
    };
});
