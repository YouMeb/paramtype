'use strict';

var types = [
  require('./json'),
  require('./number'),
  require('./string'),
  require('./boolean')
];

var prefixMap = createMap('prefix', types);
var dataTypeMap = createMap('type', types);

exports.getTypeByPrefix = function (prefix) {
  var type = prefixMap[prefix];
  if (!type) {
    throw new Error('Unsupported prefix: ' + prefix);
  }
  return type;
};

exports.getTypeByDataType = function (dataType) {
  var type = dataTypeMap[dataType];
  if (!type) {
    throw new Error('Unsupported data type: ' + dataType);
  }
  return type;
};

function createMap(propName, types) {
  var map = {};
  var len = types.length;
  var i, type;

  for (i = 0; i < len; i += 1) {
    type = types[i];
    map[type[propName]] = type;
  }

  return map;
}
