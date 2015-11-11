angular.module('app').factory 'products', [
  '$resource'
  ($resource) ->
    $resource '/api/products'
]

angular.module('app').factory 'services', ->
  output =
    data: ->
      return [
        {
          'title': 'C# for Sociopaths'
          'designer': 1
          'published': '2013-10-04T23:00:00.000Z'
          'liked': [1,3]
        },
        {
          'title': 'C# for Sociopaths'
          'designer': 1
          'published': '2013-10-04T23:00:00.000Z'
          'liked': [1,3]
        }
      ]
  return output

angular.module('app').controller 'controller', ($scope) ->
  $scope.title = 'TDD'