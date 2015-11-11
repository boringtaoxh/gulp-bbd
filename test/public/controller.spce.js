'use strict';
describe('controller', function() {
  var $controlleContructor, scope;
  $controlleContructor = scope = {};
  beforeEach(module('app'));
  beforeEach(inject(function($controller, $rootScope) {
    $controlleContructor = $controller;
    return scope = $rootScope.$new();
  }));
  return it('should test the controller', function() {
    var ctrl;
    ctrl = $controlleContructor('controller', {
      $scope: scope
    });
    return expect(scope.title).to.be.equal('TDD');
  });
});
