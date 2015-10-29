'use strict';

/**
 * @ngdoc function
 * @name angularExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularExampleApp
 */
angular.module('angularExampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
