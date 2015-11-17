'use strict'

describe 'controller', ->
  $controlleContructor = scope = {}

  beforeEach module('app')

  beforeEach inject( ($controller, $rootScope)->
    scope = $rootScope.$new()
    $controller 'controller', {$scope: scope}
  )

  it 'should test the controller', ->
    expect(scope.title).to.be.equal('TDD')

