angular.module('starter.services', [])

.factory('Offers', function($http) {
  var offerslist = [];
  return {
    getAll: function() {
      return $http.get('/data/offers.json').then(function(response) {
        var offerslist = response;
        return offerslist;
      });
    }
   
  };
})

.factory('Facilities', function($http) {
  var facilitiesList = [];
  return {
    getAll: function() {
      return $http.get('/data/facilities.json').then(function(response) {
        var facilitiesList = response;
        return facilitiesList;
      });
    }
  };
})