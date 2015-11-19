app = angular.module 'app', ['ngResource']

angular.module('app').controller 'tdd', ($scope, $resource, products, services) ->
  $scope.title = 'TDD'

  $scope.products = $resource('/api/products').query()

  console.log services.data()

  products.save({'title': 'C# for Sociopaths','designer': 1,'published': '2013-10-04T23:00:00.000Z','liked': [1, 3]});
  return