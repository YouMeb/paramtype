'use strict';

var map = {
  'true': true,
  'True': true,
  '1': true,

  'false': false,
  'False': false,
  '0': false
};

exports.prefix = 'b';

exports.type = 'boolean';

exports.encode = function (value) {
  return String(value);
};

exports.decode = function (value) {
  if (!map.hasOwnProperty(value)) {
    throw new Error(value + ' is not a Boolean');
  }
  return map[value];
};
