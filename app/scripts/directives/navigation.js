'use strict';

/**
 * @ngdoc directive
 * @name angularExampleApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('angularExampleApp')
  .directive('aeNavigation', function () {
    return {
      templateUrl: 'views/navigation.html',
      restrict: 'E',
      replace: true,
      controller: function($scope, $element, $attrs, $location){ //directives can have inline controllers if you want!
        $scope.page = $location.path();

        $scope.pages = [
          {
            name: 'Main',
            url: '/'
          },
          {
            name: 'Data Binding',
            url: '/databinding'
          },
          {
            name: 'External data',
            url: '/externalapi'
          }
        ];

        $scope.$on('$routeChangeStart', function(next, current){
          $scope.page = $location.path();
          console.log($scope.page);
        });

      }
    };
  });
