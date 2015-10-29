'use strict';

/**
 * @ngdoc function
 * @name angularExampleApp.controller:ExternalapiCtrl
 * @description
 * # ExternalapiCtrl
 * Controller of the angularExampleApp
 */
angular.module('angularExampleApp')
  .controller('ExternalapiCtrl', function ($scope, ebay) {
    $scope.results =null;
    $scope.search = null;

    $scope.searchFn = function(){
      ebay.search($scope.search).then(function (data) {
        $scope.results = data.findItemsByKeywordsResponse[0].searchResult[0].item;
      })
    };
  });
