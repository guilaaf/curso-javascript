class NegociacaoDao {
    
    constructor(connection) {
        this._store = 'negociacoes';
    }
    
    buscarTodos() {
        return new Promise((resolve, reject) => {
            ConnectionFactory.getConnection()
                .then(connection => {
                    let negociacoes = [];
                    let cursor = connection
                        .transaction([this._store], 'readwrite')
                        .objectStore(this._store)
                        .openCursor();

                    cursor.onsuccess = evt => {
                        let item = evt.target.result;
                        if (item) {
                            let dados = item.value;
                            negociacoes.push(new Negociacao(dados._data, dados._quantidade, dados._valor));
                            item.continue();
                        } else {
                            resolve(negociacoes);
                        }
                    };

                    cursor.onerror = evt => {
                        console.log(evt.target.error);
                        reject('Não foi possível listar as negociações');
                    };
                })
                .catch(() => {
                    reject('Não foi possível listar a negociação');
                });
        });
    }
    
    incluir(negociacao) {
        return new Promise((resolve, reject) => {
            ConnectionFactory.getConnection()
                .then(connection => {
                    let request = connection
                        .transaction([this._store], 'readwrite')
                        .objectStore(this._store)
                        .add(negociacao);

                    request.onsuccess = evt => {
                        console.log('Negociação incluída com sucesso');
                        resolve(negociacao);
                    };

                    request.onerror = evt => {
                        console.log(evt.target.error);
                        reject('Não foi possível incluir a negociação');
                    };
                })
                .catch(() => {
                    reject('Não foi possível incluir a negociação');
                });
        });
    }
    
    limpar() {
        return new Promise((resolve, reject) => {
            ConnectionFactory.getConnection()
                .then(connection => {
                    let request = connection
                        .transaction([this._store], 'readwrite')
                        .objectStore(this._store)
                        .clear();

                    request.onsuccess = evt => {
                        console.log('Negociações excluídas com sucesso');
                        resolve();
                    };

                    request.onerror = evt => {
                        console.log(evt.target.error);
                        reject('Não foi possível excluir as negociações');
                    };
                })
                .catch(() => {
                    reject('Não foi possível excluir as negociações');
                });
        });
    }
}
