'use strict';

var expect = require('chai').expect;
var paramtype = require('../../');

describe('string', function () {
  describe('encode', function () {
    it('should work', function () {
      var val = paramtype.encode('abc');
      expect(val).to.equal('s:abc');
    });
  });

  describe('decode', function () {
    it('should work', function () {
      var val = paramtype.decode('s:abc');
      expect(val).to.equal('abc');
    });
  });
});
