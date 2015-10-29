'use strict';

describe('Service: ebay', function () {

  // load the service's module
  beforeEach(module('angularExampleApp'));

  // instantiate service
  var ebay;
  beforeEach(inject(function (_ebay_) {
    ebay = _ebay_;
  }));

  it('should do something', function () {
    expect(!!ebay).toBe(true);
  });

});
