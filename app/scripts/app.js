'use strict';

/**
 * @ngdoc overview
 * @name angularExampleApp
 * @description
 * # angularExampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularExampleApp', [ //the .module call creates a new module if you pass an array of dependencies as the second parameter
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'pieDirective', //a module I made previously
    'mpInfoBar',   //a module from mp-web
    'ui.keypress', //some modules I grabbed from bower
    'ui.highlight'
  ])
  .config(function ($routeProvider, $locationProvider) { //config is only in your main file typically it handles routing
    //routing!
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/todolist', {
        templateUrl: 'views/todolistPage.html',
        controller: 'TodolistPageCtrl'
      })
      .when('/databinding', {
        templateUrl: 'views/databinding.html',
        controller: 'DatabindingCtrl'
      })
      .when('/externalapi', {
        templateUrl: 'views/externalapi.html',
        controller: 'ExternalapiCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    //this changes sub views to use standard urls without hashbang prefixes
    $locationProvider.html5Mode(true);
  });
