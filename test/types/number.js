'use strict';

var expect = require('chai').expect;
var paramtype = require('../../');

describe('number', function () {
  describe('encode', function () {
    it('should work', function () {
      var val = paramtype.encode(123);
      expect(val).to.equal('n:123');
    });
  });

  describe('decode', function () {
    it('should work', function () {
      var val = paramtype.decode('n:123');
      expect(val).to.equal(123);
    });
  });
});
