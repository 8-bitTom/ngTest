'use strict';

/**
 * @ngdoc function
 * @name angularExampleApp.controller:TodolistCtrl
 * @description
 * # TodolistCtrl
 * Controller of the angularExampleApp
 */
angular.module('angularExampleApp')
  .controller('TodolistCtrl', function ($scope, todoList) {
    $scope.newItem = '';
    $scope.toDoList = todoList.list;
    $scope.addItem = function(){
      if($scope.newItem){
        var newItem = {
          name : $scope.newItem,
          created : new Date(),
          done : false
        };

        $scope.toDoList.unshift(newItem);

        $scope.newItem = '';
      }
    }
  });
