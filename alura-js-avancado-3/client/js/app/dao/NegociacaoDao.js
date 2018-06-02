'use strict';

System.register(['./ConnectionFactory', '../models/Negociacao'], function (_export, _context) {
    "use strict";

    var ConnectionFactory, Negociacao, _createClass, NegociacaoDao;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_ConnectionFactory) {
            ConnectionFactory = _ConnectionFactory.ConnectionFactory;
        }, function (_modelsNegociacao) {
            Negociacao = _modelsNegociacao.Negociacao;
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

            _export('NegociacaoDao', NegociacaoDao = function () {
                function NegociacaoDao(connection) {
                    _classCallCheck(this, NegociacaoDao);

                    this._store = 'negociacoes';
                }

                _createClass(NegociacaoDao, [{
                    key: 'buscarTodos',
                    value: function buscarTodos() {
                        var _this = this;

                        return new Promise(function (resolve, reject) {
                            ConnectionFactory.getConnection().then(function (connection) {
                                var negociacoes = [];
                                var cursor = connection.transaction([_this._store], 'readwrite').objectStore(_this._store).openCursor();

                                cursor.onsuccess = function (evt) {
                                    var item = evt.target.result;
                                    if (item) {
                                        var dados = item.value;
                                        negociacoes.push(new Negociacao(dados._data, dados._quantidade, dados._valor));
                                        item.continue();
                                    } else {
                                        resolve(negociacoes);
                                    }
                                };

                                cursor.onerror = function (evt) {
                                    console.log(evt.target.error);
                                    reject('Não foi possível listar as negociações');
                                };
                            }).catch(function () {
                                reject('Não foi possível listar a negociação');
                            });
                        });
                    }
                }, {
                    key: 'incluir',
                    value: function incluir(negociacao) {
                        var _this2 = this;

                        return new Promise(function (resolve, reject) {
                            ConnectionFactory.getConnection().then(function (connection) {
                                var request = connection.transaction([_this2._store], 'readwrite').objectStore(_this2._store).add(negociacao);

                                request.onsuccess = function (evt) {
                                    console.log('Negociação incluída com sucesso');
                                    resolve(negociacao);
                                };

                                request.onerror = function (evt) {
                                    console.log(evt.target.error);
                                    reject('Não foi possível incluir a negociação');
                                };
                            }).catch(function () {
                                reject('Não foi possível incluir a negociação');
                            });
                        });
                    }
                }, {
                    key: 'limpar',
                    value: function limpar() {
                        var _this3 = this;

                        return new Promise(function (resolve, reject) {
                            ConnectionFactory.getConnection().then(function (connection) {
                                var request = connection.transaction([_this3._store], 'readwrite').objectStore(_this3._store).clear();

                                request.onsuccess = function (evt) {
                                    console.log('Negociações excluídas com sucesso');
                                    resolve();
                                };

                                request.onerror = function (evt) {
                                    console.log(evt.target.error);
                                    reject('Não foi possível excluir as negociações');
                                };
                            }).catch(function () {
                                reject('Não foi possível excluir as negociações');
                            });
                        });
                    }
                }]);

                return NegociacaoDao;
            }());

            _export('NegociacaoDao', NegociacaoDao);
        }
    };
});
//# sourceMappingURL=NegociacaoDao.js.map