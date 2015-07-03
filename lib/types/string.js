'use strict';

exports.prefix = 's';

exports.type = 'string';

exports.encode = function (value) {
  return String(value);
};

exports.decode = function (value) {
  return value;
};
