'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var defaults = {
	type: 'prefix', // prefix: beforeHook, postfix: hookBefore
	before: 'before',
	after: 'after',
	capitalize: true // true: afterHook, false: afterhook
};

function isDef(o) {
	return o !== undefined;
}

function capitalize(str) {
	return str.substr(0, 1).toUpperCase() + str.substr(1);
}

function buildName(name, affix, opts) {
	var seq = opts.type === 'prefix' ? [affix, name] : [name, affix];
	if (opts.capitalize) seq[1] = capitalize(seq[1]);
	return seq.join('');
}

function fire(self, method, args) {
	if (isDef(self[method])) self[method].apply(self, args);
}

exports['default'] = function (name, func, options) {
	var opts = _extend2['default']({}, defaults, options);

	return function () {
		if (isDef(opts.before)) fire(this, buildName(name, opts.before, opts), arguments);
		var res = func.apply(this, arguments);
		if (isDef(opts.after)) fire(this, buildName(name, opts.after, opts), arguments);
		return res;
	};
};

module.exports = exports['default'];
