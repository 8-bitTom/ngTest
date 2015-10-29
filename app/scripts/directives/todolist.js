'use strict';

/**
 * @ngdoc directive
 * @name angularExampleApp.directive:todoList
 * @description
 * # todoList
 */
angular.module('angularExampleApp')
  .directive('aeTodoList', function () { //directive names are camel cased in the html they are hypenated always prefix!
    return {
      templateUrl: 'views/todolist.html',
      replace: true,
      restrict: 'E', //E is for element
      controller: 'TodolistCtrl',
      scope : { //when you define a scope the directive gets isolate scope and doesn't inherit!
        editable : '=aeEditable' //scope gets set by HTML params and works the same as name (always prefix)
      }
    };
  });
