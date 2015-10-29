'use strict';

/**
 * @ngdoc filter
 * @name angularExampleApp.filter:textMirror
 * @function
 * @description
 * # textMirror
 * Filter in the angularExampleApp.
 */
angular.module('angularExampleApp')
  .filter('textMirror', function () {
    return function (input) {
      return 'Test Mirror: ' + input
    };
  });
