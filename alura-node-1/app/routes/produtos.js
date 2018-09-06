module.exports = function (app) {
    
    app.get("/produtos", function(req, res) {
        let produtoRepository = app.domain.produtoRepository();
        produtoRepository.listar(function(err, results) {
            res.format({
                html: function () {
                    res.render("produtos/index", {lista: results});
                },
                json: function () {
                    res.json(results);
                }
            });
        });
    });
    
    app.get("/produtos/form", function(req, res) {
        res.render("produtos/form", {erros: null, produto: {}});
    });
    
    app.post("/produtos/form", function(req, res) {
        console.log(req.body);
        let produto = req.body;
        
        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();
        var erros = req.validationErrors();
        if (erros) {
            res.format({
                html: function () {
                    res.status(400).render('produtos/form', {erros: erros, produto: produto});
                },
                json: function () {
                    res.status(400).json(erros);
                }
            });
            return;
        }
        
        let produtoRepository = app.domain.produtoRepository();
        produtoRepository.salvar(produto, function(err, results) {
            res.redirect("/produtos");
        });
    });
};