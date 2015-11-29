angular.module('app').directive('emcee', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {
      scope.onClick = function() {
        element.text('Step up ' + scope.emcee + '!');
      };
    }
  };
});

angular.module('app').directive('writers', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {
      element.text('Graffiti artist: ' + scope.artist);
    }
  };
});
