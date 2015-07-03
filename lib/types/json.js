'use strict';

exports.prefix = 'j';

exports.type = 'object';

exports.encode = function (value) {
  return JSON.stringify(value);
};

exports.decode = function (value) {
  return JSON.parse(value);
};
