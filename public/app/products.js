angular.module('app').factory('products', [
  '$resource', function($resource) {
    return $resource('/api/products');
  }
]);

angular.module('app').factory('services', function(services2) {
  var output;
  output = {
    data: function() {
      return [
        {
          'title': 'C# for Sociopaths',
          'designer': 1,
          'published': '2013-10-04T23:00:00.000Z',
          'liked': [1, 3],
          'category': services2.category()
        }, {
          'title': 'C# for Sociopaths',
          'designer': 1,
          'published': '2013-10-04T23:00:00.000Z',
          'liked': [1, 3],
          'category': services2.category()
        }
      ];
    }
  };
  return output;
});

angular.module('app').factory('services2', function() {
  var output;
  output = {
    category: function() {
      return 2;
    }
  };
  return output;
});

angular.module('app').controller('controller', function($scope) {
  return $scope.title = 'TDD';
});
