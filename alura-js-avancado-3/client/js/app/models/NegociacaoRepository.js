'use strict';

System.register(['./Negociacao'], function (_export, _context) {
    "use strict";

    var Negociacao, _createClass, NegociacaoRepository;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_Negociacao) {
            Negociacao = _Negociacao.Negociacao;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('NegociacaoRepository', NegociacaoRepository = function () {
                function NegociacaoRepository() {
                    _classCallCheck(this, NegociacaoRepository);

                    this._negociacoes = [];
                }

                _createClass(NegociacaoRepository, [{
                    key: 'contains',
                    value: function contains(negociacao) {
                        return this._negociacoes.some(function (neg) {
                            return neg.isEqual(negociacao);
                        });
                    }
                }, {
                    key: 'adicionar',
                    value: function adicionar(negociacao) {
                        this._negociacoes.push(negociacao);
                    }
                }, {
                    key: 'esvaziar',
                    value: function esvaziar() {
                        this._negociacoes.length = 0;
                    }
                }, {
                    key: 'ordenar',
                    value: function ordenar(criterio) {
                        this._negociacoes.sort(criterio);
                    }
                }, {
                    key: 'negociacoes',
                    get: function get() {
                        return [].concat(this._negociacoes);
                    }
                }, {
                    key: 'total',
                    get: function get() {
                        return this._negociacoes.reduce(function (total, neg) {
                            return total + neg.volume;
                        }, 0.0);
                    }
                }]);

                return NegociacaoRepository;
            }());

            _export('NegociacaoRepository', NegociacaoRepository);
        }
    };
});
//# sourceMappingURL=NegociacaoRepository.js.map