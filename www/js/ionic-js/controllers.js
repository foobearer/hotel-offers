angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('OffersCtrl', function($scope, Offers) {
  Offers.getAll().then(function(response) {
    $scope.offers = response.data;
  }).catch(function(response){
    console.log("Offers Service Error");
  });
})

.controller('OffersDetailCtrl', function($scope, $stateParams, Offers, $filter) {
  var datalist = Offers.getAll();
  datalist.then(function(response) {
    $scope.details = $filter('filter')(response.data, {id: $stateParams.offerslistId})[0];
  })
})

.controller('FacilitiesCtrl', function($scope, Facilities) {
  Facilities.getAll().then(function(response) {
    $scope.facilities = response.data;
  })
})

.controller('FacilitiesDetailCtrl', function($scope, $stateParams, $filter, Facilities) {
  var datalist = Facilities.getAll()
  datalist.then(function(response) {
    $scope.details = $filter('filter')(response.data, {id: $stateParams.facilitieslistId})[0];
  })
});