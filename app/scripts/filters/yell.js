'use strict';

/**
 * @ngdoc filter
 * @name angularExampleApp.filter:yell
 * @function
 * @description
 * # yell
 * Filter in the angularExampleApp.
 */
angular.module('angularExampleApp')
  .filter('yell', function () {
    return function (input) {
      return input.toUpperCase();
    };
  });
