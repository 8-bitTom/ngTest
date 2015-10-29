"use strict";
angular.module('mpInfoBar', []);

angular.module('mpInfoBar').directive('mpInfoBar',
  function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/modules/infoBar/infoBar.html',
      controller: 'InfoBarCtrl',
      replace: true,
      scope: {
        title: '@mpTitle', //@ binds static data like a string
        maxVal: '=mpMax',
        baseVal: '=mpBase',
        curVal: '=mpValue'
      }
    }
  }
);
