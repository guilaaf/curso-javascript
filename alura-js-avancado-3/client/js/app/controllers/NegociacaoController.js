'use strict';

System.register(['../helpers/Binding', '../models/Mensagem', '../models/Negociacao', '../models/NegociacaoRepository', '../services/NegociacaoService', '../dao/NegociacaoDao', '../views/MensagemView', '../views/NegociacoesView'], function (_export, _context) {
    "use strict";

    var Binding, Mensagem, Negociacao, NegociacaoRepository, NegociacaoService, NegociacaoDao, MensagemView, NegociacoesView, _createClass, NegociacaoController, controller;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_helpersBinding) {
            Binding = _helpersBinding.Binding;
        }, function (_modelsMensagem) {
            Mensagem = _modelsMensagem.Mensagem;
        }, function (_modelsNegociacao) {
            Negociacao = _modelsNegociacao.Negociacao;
        }, function (_modelsNegociacaoRepository) {
            NegociacaoRepository = _modelsNegociacaoRepository.NegociacaoRepository;
        }, function (_servicesNegociacaoService) {
            NegociacaoService = _servicesNegociacaoService.NegociacaoService;
        }, function (_daoNegociacaoDao) {
            NegociacaoDao = _daoNegociacaoDao.NegociacaoDao;
        }, function (_viewsMensagemView) {
            MensagemView = _viewsMensagemView.MensagemView;
        }, function (_viewsNegociacoesView) {
            NegociacoesView = _viewsNegociacoesView.NegociacoesView;
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

            NegociacaoController = function () {
                function NegociacaoController() {
                    var _this = this;

                    _classCallCheck(this, NegociacaoController);

                    var $ = document.querySelector.bind(document);

                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');

                    this._negociacaoRepository = new Binding(new NegociacaoRepository(), new NegociacoesView($('#negociacoesView')), 'adicionar', 'esvaziar', 'ordenar');
                    this._mensagem = new Binding(new Mensagem(), new MensagemView($('#mensagemView')), 'texto');

                    this._ordenacaoAtual = '';
                    this._direcaoOrdenacao = 1;

                    new NegociacaoDao().buscarTodos().then(function (negociacoes) {
                        return negociacoes.forEach(function (neg) {
                            return _this._negociacaoRepository.adicionar(neg);
                        });
                    }).catch(function (msgErro) {
                        return _this._mensagem.texto = msgErro;
                    });

                    setInterval(function () {
                        _this.importarNegociacoes();
                    }, 20000);
                }

                _createClass(NegociacaoController, [{
                    key: 'adicionarNegociacao',
                    value: function adicionarNegociacao(event) {
                        var _this2 = this;

                        event.preventDefault();

                        var neg = new Negociacao(this._inputData.value, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                        new NegociacaoDao().incluir(neg).then(function (negociacao) {
                            _this2._negociacaoRepository.adicionar(negociacao);
                            _this2._mensagem.texto = 'Negociação adicionada com sucesso';
                            _this2._limparFormulario();
                        }).catch(function (msgErro) {
                            return _this2._mensagem.texto = msgErro;
                        });
                    }
                }, {
                    key: 'importarNegociacoes',
                    value: function importarNegociacoes(event) {
                        var _this3 = this;

                        var service = new NegociacaoService();
                        service.obterTodasNegociacoes().then(function (negociacoes) {
                            return negociacoes.filter(function (negociacao) {
                                return !_this3._negociacaoRepository.contains(negociacao);
                            });
                        }).then(function (negociacoes) {
                            if (negociacoes.length > 0) {
                                negociacoes.forEach(function (neg) {
                                    return _this3._negociacaoRepository.adicionar(neg);
                                });
                                _this3._mensagem.texto = 'Negociações importadas com sucesso';
                            } else {
                                _this3._mensagem.texto = 'Não existem negociações para serem importadas no momento';
                            }
                        }).catch(function (erro) {
                            return _this3._mensagem.texto = erro;
                        });
                    }
                }, {
                    key: 'limparNegociacoes',
                    value: function limparNegociacoes(event) {
                        var _this4 = this;

                        event.preventDefault();

                        new NegociacaoDao().limpar().then(function () {
                            _this4._negociacaoRepository.esvaziar();
                            _this4._mensagem.texto = 'Negociações excluídas com sucesso';
                        }).catch(function (msgErro) {
                            return _this4._mensagem.texto = msgErro;
                        });
                    }
                }, {
                    key: 'ordenarNegociacoes',
                    value: function ordenarNegociacoes(campo) {
                        var _this5 = this;

                        this._direcaoOrdenacao = campo === this._ordenacaoAtual ? -1 * this._direcaoOrdenacao : 1;
                        this._negociacaoRepository.ordenar(function (a, b) {
                            return (a[campo] - b[campo]) * _this5._direcaoOrdenacao;
                        });
                        this._ordenacaoAtual = campo;
                    }
                }, {
                    key: '_limparFormulario',
                    value: function _limparFormulario() {
                        this._inputData.value = '';
                        this._inputQuantidade.value = '1';
                        this._inputValor.value = '0.0';
                        this._inputData.focus();
                    }
                }]);

                return NegociacaoController;
            }();

            controller = new NegociacaoController();
            function currentInstance() {
                return controller;
            }

            _export('currentInstance', currentInstance);
        }
    };
});
//# sourceMappingURL=NegociacaoController.js.map