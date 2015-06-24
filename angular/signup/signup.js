angular.module( 'sample.signup', [
  'ui.router',
  'angular-storage'
])
.config(function($stateProvider) {
    // CHALLENGE: Add a signup route
})
.controller( 'SignupCtrl', function SignupController( $scope, store, $state) {
    $scope.user = {};

    $scope.createUser = function () {
      // CHALLENGE: Handle creating the user
      // HINT: What information would we save?
      // HINT: Where should a registered user be?
    };
});
