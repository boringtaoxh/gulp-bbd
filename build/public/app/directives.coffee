angular.module('app').directive 'emcee', ->
  restrict: 'E'
  link: (scope, element) ->
    scope.onClick = ->
      element.text 'Step up ' + scope.emcee + '!'
      return
    return

angular.module('app').directive 'writers', ->
  restrict: 'E'
  link: (scope, element) ->
    element.text 'Graffiti artist: ' + scope.artist
    return