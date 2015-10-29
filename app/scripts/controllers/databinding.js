'use strict';

/**
 * @ngdoc function
 * @name angularExampleApp.controller:DatabindingCtrl
 * @description
 * # DatabindingCtrl
 * Controller of the angularExampleApp
 */
angular.module('angularExampleApp')
  .controller('DatabindingCtrl', function ($scope) {
    $scope.percentage = 50;
    $scope.text = '';
    $scope.highlight = ''
  });
