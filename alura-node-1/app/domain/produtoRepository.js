function ProdutoRepository(app) {
    this.app = app;
}

ProdutoRepository.prototype.listar = function(callback) {
    connection = this.app.infra.connectionFactory();
    connection.query('select * from livros', callback);
    connection.end();
};

ProdutoRepository.prototype.salvar = function(produto, callback) {
    connection = this.app.infra.connectionFactory();
    connection.query('insert into livros set ?', produto, callback);
    connection.end();
};

module.exports = function (app) {
    return function() {
        return new ProdutoRepository(app);
    };
};