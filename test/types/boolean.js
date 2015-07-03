'use strict';

var expect = require('chai').expect;
var paramtype = require('../../');

describe('boolean', function () {
  describe('encode', function () {
    it('should work', function () {
      var val = paramtype.encode(true);
      expect(val).to.equal('b:true');
      val = paramtype.encode(false);
      expect(val).to.equal('b:false');
    });
  });

  describe('decode', function () {
    it('should work', function () {
      var val = paramtype.decode('b:true');
      expect(val).to.be.true;
      val = paramtype.decode('b:True');
      expect(val).to.be.true;
      val = paramtype.decode('b:1');
      expect(val).to.be.true;

      val = paramtype.decode('b:false');
      expect(val).to.be.false;
      val = paramtype.decode('b:False');
      expect(val).to.be.false;
      val = paramtype.decode('b:0');
      expect(val).to.be.false;
    });
  });
});
