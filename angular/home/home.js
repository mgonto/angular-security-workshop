angular.module( 'sample.home', [
  'ui.router',
  'angular-storage'
])
.config(function($stateProvider) {
    // CHALLENGE: Add a default home route
})
.controller( 'HomeCtrl', function HomeController( $scope, store, $state) {
    $scope.logout = function() {
      // CHALLENGE: Log the user out
      // HINT: What information will you have to delete?
      // HINT: Where should a logged out user be?
    };
});
