define(['exports', 'external-all', 'external-default-namespace', 'external-named-namespace', 'external-namespace'], function (exports, externalAll, externalDefaultNamespace, externalNamedNamespace, externalNamespace$1) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) { return e; } else {
			var n = Object.create(null);
			if (e) {
				Object.keys(e).forEach(function (k) {
					if (k !== 'default') {
						var d = Object.getOwnPropertyDescriptor(e, k);
						Object.defineProperty(n, k, d.get ? d : {
							enumerable: true,
							get: function () {
								return e[k];
							}
						});
					}
				});
			}
			n['default'] = e;
			return Object.freeze(n);
		}
	}

	var externalAll__namespace = /*#__PURE__*/_interopNamespace(externalAll);
	var externalDefaultNamespace__namespace = /*#__PURE__*/_interopNamespace(externalDefaultNamespace);
	var externalNamedNamespace__namespace = /*#__PURE__*/_interopNamespace(externalNamedNamespace);
	var externalNamespace__namespace = /*#__PURE__*/_interopNamespace(externalNamespace$1);

	const externalNamespace = 1;
	const externalNamespace__ns = 1;
	console.log(externalNamespace, externalNamespace__ns);

	exports.foo = externalAll__namespace;
	exports.baz = externalDefaultNamespace__namespace;
	exports.quux = externalNamedNamespace__namespace;
	exports.bar = externalNamespace__namespace;

	Object.defineProperty(exports, '__esModule', { value: true });

});
