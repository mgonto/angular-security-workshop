angular.module( 'sample.login', [
  'ui.router',
  'angular-storage'
])
.run(function($rootScope, $location, $state, store) {
  $rootScope.$on('$locationChangeStart', function() {
    var hash = $location.hash();
    if (hash.match(/error/)) {
      alert("Error logging in");
      $state.go('login');
    }
    var loginResults = hash.match(/jwt=(.+)/);
    if(!loginResults) {
      // Invalid hash URL
      return;
    } else {
      var jwt = loginResults[1];
      store.set('jwt', jwt);
      state.go('home');
    }
  });
})
.config(function($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    controller: 'LoginCtrl',
    templateUrl: 'login/login.html'
  });
})
.controller( 'LoginCtrl', function LoginController( $scope, $http, store, $state) {

  $scope.user = {};

  $scope.login = function() {
    $http({
      url: 'http://localhost:3001/sessions/create',
      method: 'POST',
      data: $scope.user
    }).then(function(response) {
      store.set('jwt', response.data.id_token);
      $state.go('home');
    }, function(error) {
      alert(error.data);
    });
  }

});
