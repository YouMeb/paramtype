'use strict';

var proto = Param.prototype;

module.exports = Param;

function Param(prefix, value) {
  if (!(this instanceof Param)) {
    return new Param(prefix, value);
  }
  this.prefix = prefix;
  this.value = value;
}

proto.toString = function () {
  return this.prefix + ':' + this.value;
};

Param.parse = function (str) {
  var parts = str.split(':');
  var prefix = parts.shift();
  var value = parts.join(':');

  if (!prefix) {
    value = prefix;
    prefix = 's';
  }

  return Param(prefix, value);
};
