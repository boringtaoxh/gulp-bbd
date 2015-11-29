'use strict'

describe 'directive', ->
  rootScope = scope = element = undefined

  beforeEach module('app')

  beforeEach inject( ($rootScope, $compile) ->
    rootScope = $rootScope
    scope = $rootScope.$new()
    scope.emcee = 'Izzy Ice'
    element = angular.element('<emcee></emcee>')
    $compile(element)(scope)
    scope.$digest()
  )

  it 'should assign scope emcee to element text when the onClick handler is called', ->
    scope.onClick()
    expect(element.text()).to.be.equal 'Step up Izzy Ice!'
    return
describe 'directiive testing', ->
  scope = artist = element = undefined
  beforeEach inject ($rootScope, $compile) ->
    scope = $rootScope.$new()
    scope.artist = artist
    element = angular.element '<writers></writers>'
    $compile(element) scope
    scope.$digest()
  it 'should display correct text in the DOM', ->
    expect(element.text()).to.be.equal 'Graffiti artist: ' + artist
    return