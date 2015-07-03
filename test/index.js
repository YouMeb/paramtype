'use strict';

var expect = require('chai').expect;
var paramtype = require('../');
console.log(123);

describe('encode', function () {
  describe('with unsupported data type', function () {
    expect(function () {
      paramtype.encode(undefined);
    }).to.throw('Unsupported data type: undefined');
  });
});

describe('decode', function () {
  describe('with unsupported prefix', function () {
    expect(function () {
      paramtype.decode('p:...');
    }).to.throw('Unsupported prefix: p');
  });
});
