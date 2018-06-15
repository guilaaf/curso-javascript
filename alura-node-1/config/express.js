var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");

module.exports = function () {
    var app = express();
    
    // CONFIGURACAO DO TEMPLATE MANAGER
    app.set('view engine','ejs');
    app.set('views','./app/views');
    
    // CONFIGURACAO DE MIDDLEWARE
    app.use(bodyParser.urlencoded({extended: true}));
    
    load('routes', {cwd: 'app'})
        .then('domain')
        .then('infra')
        .into(app);
    
    return app;
};