###
it.only 'route controller should be mapped to HomeCtrl', inject(($rootScope, $location, $route) ->
  $location.path '/'
  $rootScope.$apply()
  expect($route.current.controller).toEqual 'controller'
  return
)###
