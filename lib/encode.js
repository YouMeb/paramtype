'use strict';

var types = require('./types');
var Param = require('./param');

module.exports = function encode(value) {
  var type = types.getTypeByDataType(typeof value);
  var value = type.encode(value);
  var param = Param(type.prefix, value);
  return param.toString();
};
