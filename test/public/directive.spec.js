'use strict';
describe('directive', function() {
  var element, rootScope, scope;
  rootScope = scope = element = void 0;
  beforeEach(module('app'));
  beforeEach(inject(function($rootScope, $compile) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    scope.emcee = 'Izzy Ice';
    element = angular.element('<emcee></emcee>');
    $compile(element)(scope);
    return scope.$digest();
  }));
  return it('should assign scope emcee to element text when the onClick handler is called', function() {
    scope.onClick();
    expect(element.text()).to.be.equal('Step up Izzy Ice!');
  });
});
