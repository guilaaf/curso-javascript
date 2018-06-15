var mysql = require('mysql');

function createConnection() {
    return mysql.createConnection({
        host : 'localhost',
        port : 3311,
        user : 'root',
        password : 'root',
        database : 'casadocodigo_nodejs'
    });
};

module.exports = function() {
    return createConnection;
};