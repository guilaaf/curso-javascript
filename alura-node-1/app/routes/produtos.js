module.exports = function (app) {
    app.get("/produtos", function(req, res) {
        let produtoRepository = app.domain.produtoRepository();
        produtoRepository.listar(function(err, results) {
            res.render("produtos/index", {lista: results});
        });
    });
    app.get("/produtos/form", function(req, res) {
        res.render("produtos/form");
    });
    app.post("/produtos/form", function(req, res) {
        console.log(req.body);
        let produto = req.body;
        let produtoRepository = app.domain.produtoRepository();
        produtoRepository.salvar(produto, function(err, results) {
            res.redirect("/produtos");
        });
    });
};