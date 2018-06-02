'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, databaseName, databaseVersion, databaseStores, connection, closeFunction, ConnectionFactory;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
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

            databaseName = 'aluraframe';
            databaseVersion = 1;
            databaseStores = ['negociacoes'];
            connection = null;
            closeFunction = null;

            _export('ConnectionFactory', ConnectionFactory = function () {
                function ConnectionFactory() {
                    _classCallCheck(this, ConnectionFactory);

                    throw new Error('ConnectionFactory can not be instatiated');
                }

                _createClass(ConnectionFactory, null, [{
                    key: 'getConnection',
                    value: function getConnection() {
                        return new Promise(function (resolve, reject) {
                            if (connection) {
                                resolve(connection);
                            }

                            var openRequest = window.indexedDB.open(databaseName, databaseVersion);

                            openRequest.onupgradeneeded = function (evt) {
                                ConnectionFactory._createStores(evt.target.result);
                            };

                            openRequest.onsuccess = function (evt) {
                                connection = evt.target.result;
                                closeFunction = connection.close.bind(connection);
                                connection.close = function () {
                                    throw new Error("you can't call this method directly");
                                };
                                resolve(connection);
                            };

                            openRequest.onerror = function (evt) {
                                console.log(evt.target.error);
                                reject(evt.target.error.name);
                            };
                        });
                    }
                }, {
                    key: 'closeConnection',
                    value: function closeConnection() {
                        if (connection) {
                            closeFunction();
                            closeFunction = null;
                            connection = null;
                        }
                    }
                }, {
                    key: '_createStores',
                    value: function _createStores(conn) {
                        console.log(databaseVersion === 1 ? 'criando o banco de dados' : 'alterando o banco de dados');
                        databaseStores.forEach(function (store) {
                            if (conn.objectStoreNames.contains(store)) {
                                conn.deleteObjectStore(store);
                            }
                            conn.createObjectStore(store, { autoIncrement: true });
                        });
                    }
                }]);

                return ConnectionFactory;
            }());

            _export('ConnectionFactory', ConnectionFactory);

            ;
        }
    };
});
//# sourceMappingURL=ConnectionFactory.js.map