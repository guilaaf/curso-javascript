const databaseName = 'aluraframe';
const databaseVersion = 1;
const databaseStores = ['negociacoes'];
let connection = null;
let closeFunction = null;

export class ConnectionFactory {

    constructor() {
        throw new Error('ConnectionFactory can not be instatiated');
    }

    static getConnection() {
        return new Promise((resolve, reject) => {
            if (connection) {
                resolve(connection);
            }

            let openRequest = window.indexedDB.open(databaseName, databaseVersion);

            openRequest.onupgradeneeded = evt => {
                ConnectionFactory._createStores(evt.target.result);
            };

            openRequest.onsuccess = evt => {
                connection = evt.target.result;
                closeFunction = connection.close.bind(connection);
                connection.close = function() {
                    throw new Error("you can't call this method directly");
                };
                resolve(connection);
            };

            openRequest.onerror = evt => {
                console.log(evt.target.error);
                reject(evt.target.error.name);
            };
        });
    }

    static closeConnection() {
        if (connection) {
            closeFunction();
            closeFunction = null;
            connection = null;
        }
    }

    static _createStores(conn) {
        console.log(databaseVersion === 1 ? 'criando o banco de dados' : 'alterando o banco de dados');
        databaseStores.forEach(store => {
            if (conn.objectStoreNames.contains(store)) {
                conn.deleteObjectStore(store);
            }
            conn.createObjectStore(store, {autoIncrement: true});
        });
    }
};
