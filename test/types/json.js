'use strict';

var expect = require('chai').expect;
var paramtype = require('../../');

describe('number', function () {
  describe('encode', function () {
    it('should work', function () {
      var val = paramtype.encode({ a: 'b' });
      expect(val).to.equal('j:{"a":"b"}');
      val = paramtype.encode([1, 2, 3]);
      expect(val).to.equal('j:[1,2,3]');
    });
  });

  describe('decode', function () {
    it('should work', function () {
      var val = paramtype.decode('j:{"a":"b"}');
      expect(val).to.deep.equal({ a: 'b' });
      val = paramtype.decode('j:[1,2,3]');
      expect(val).to.deep.equal([1, 2, 3]);
    });
  });
});
