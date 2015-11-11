'use strict'



describe 'controller', ->
  $controlleContructor = scope = {}

  beforeEach module('app')

  beforeEach inject( ($controller, $rootScope)->
    $controlleContructor = $controller
    scope = $rootScope.$new()
  )

  it 'should test the controller', ->
    ctrl = $controlleContructor 'controller', {$scope: scope}
    expect(scope.title).to.be.equal('TDD')

