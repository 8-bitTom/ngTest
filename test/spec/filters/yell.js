'use strict';

describe('Filter: yell', function () {

  // load the filter's module
  beforeEach(module('angularExampleApp'));

  // initialize a new instance of the filter before each test
  var yell;
  beforeEach(inject(function ($filter) {
    yell = $filter('yell');
  }));

  it('should return the input prefixed with "yell filter:"', function () {
    var text = 'angularjs';
    expect(yell(text)).toBe('yell filter: ' + text);
  });

});
