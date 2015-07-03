'use strict';

var types = require('./types');
var Param = require('./param');

module.exports = function decode(value) {
  var param = Param.parse(value);
  var type = types.getTypeByPrefix(param.prefix);
  return type.decode(param.value);
};
