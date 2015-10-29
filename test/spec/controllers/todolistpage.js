'use strict';

describe('Controller: TodolistpageCtrl', function () {

  // load the controller's module
  beforeEach(module('angularExampleApp'));

  var TodolistpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodolistpageCtrl = $controller('TodolistpageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
