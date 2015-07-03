'use strict';

exports.prefix = 'n';

exports.type = 'number';

exports.encode = function (value) {
  return String(value);
};

exports.decode = function (value) {
  var newValue = Number(value);

  if (isNaN(newValue)) {
    throw new Error(value + ' is not a Number');
  }

  return newValue;
};
