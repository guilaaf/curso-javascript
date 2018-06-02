"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observable = function () {
    function Observable() {
        _classCallCheck(this, Observable);

        this._listeners = [];
    }

    _createClass(Observable, [{
        key: "adicionarListener",
        value: function adicionarListener(listener) {
            this._listeners.push(listener);
        }
    }, {
        key: "notificarListeners",
        value: function notificarListeners() {
            var _this = this;

            this._listeners.forEach(function (listenerFunction) {
                return listenerFunction(_this);
            });
        }
    }]);

    return Observable;
}();
//# sourceMappingURL=Observable.js.map