angular.module('app').directive 'emcee', ->
  restrict: 'E'
  link: (scope, element) ->
    scope.onClick = ->
      element.text 'Step up ' + scope.emcee + '!'
      return
    return