'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {

    $scope.car = {make: 'Honda',
                  model: 'Civic',
                  year: 2014,
                  price: 24000
                 }


  }])
  .controller('MyCtrl2', [function() {

  }]);