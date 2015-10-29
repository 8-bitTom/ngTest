'use strict';

describe('Filter: textMirror', function () {

  // load the filter's module
  beforeEach(module('angularExampleApp'));

  // initialize a new instance of the filter before each test
  var textMirror;
  beforeEach(inject(function ($filter) {
    textMirror = $filter('textMirror');
  }));

  it('should return the input prefixed with "textMirror filter:"', function () {
    var text = 'angularjs';
    expect(textMirror(text)).toBe('textMirror filter: ' + text);
  });

});
