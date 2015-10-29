'use strict';

describe('Service: todoList', function () {

  // load the service's module
  beforeEach(module('angularExampleApp'));

  // instantiate service
  var todoList;
  beforeEach(inject(function (_todoList_) {
    todoList = _todoList_;
  }));

  it('should do something', function () {
    expect(!!todoList).toBe(true);
  });

});
