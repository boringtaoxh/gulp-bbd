angular.module('app').factory 'products', [
  '$resource'
  ($resource) ->
    $resource '/api/products'
]

angular.module('app').factory 'services', (services2) ->
  output =
    data: ->
      return [
        {
          'title': 'C# for Sociopaths'
          'designer': 1
          'published': '2013-10-04T23:00:00.000Z'
          'liked': [1,3]
          'category': services2.category()
        },
        {
          'title': 'C# for Sociopaths'
          'designer': 1
          'published': '2013-10-04T23:00:00.000Z'
          'liked': [1,3]
          'category': services2.category()
        }
      ]
  return output

angular.module('app').factory 'services2', ->
  output =
    category: ->
      return 2
  return output

angular.module('app').controller 'controller', ($scope) ->
  $scope.title = 'TDD'