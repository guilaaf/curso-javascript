'use strict';

System.register(['./ProxyFactory'], function (_export, _context) {
    "use strict";

    var ProxyFactory, Binding;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_ProxyFactory) {
            ProxyFactory = _ProxyFactory.ProxyFactory;
        }],
        execute: function () {
            _export('Binding', Binding = function Binding(model, view) {
                _classCallCheck(this, Binding);

                for (var _len = arguments.length, props = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    props[_key - 2] = arguments[_key];
                }

                var proxy = ProxyFactory.create(model, props, function (m) {
                    return view.update(m);
                });

                view.update(model);

                return proxy;
            });

            _export('Binding', Binding);
        }
    };
});
//# sourceMappingURL=Binding.js.map