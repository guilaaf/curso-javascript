var app = require("./config/express")();
var porta = 3000;

// INICIANDO O SERVIDOR

app.listen(porta, function() {
    console.log(`servidor iniciado na porta ${porta}`);
});