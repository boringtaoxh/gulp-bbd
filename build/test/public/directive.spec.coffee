'use strict'

describe 'directive', ->
  beforeEach module('app')

  it 'should assign scope emcee to element text when the onClick handler is called', inject ($rootScope, $compile) ->
    rootScope = $rootScope
    scope = $rootScope.$new()
    scope.emcee = 'Izzy Ice'
    element = angular.element('<emcee></emcee>')
    $compile(element)(scope)
    scope.$digest()
    scope.onClick()
    expect(element.text()).to.be.equal 'Step up Izzy Ice!'
    return