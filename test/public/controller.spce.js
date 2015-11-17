'use strict';
describe('controller', function() {
  var $controlleContructor, scope;
  $controlleContructor = scope = {};
  beforeEach(module('app'));
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    return $controller('controller', {
      $scope: scope
    });
  }));
  return it('should test the controller', function() {
    return expect(scope.title).to.be.equal('TDD');
  });
});
