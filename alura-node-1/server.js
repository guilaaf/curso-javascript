var http = require("http");
var porta = 3000;
var ip = "localhost";

var requestHanldler = function(request, response) {
    console.log("Recebendo request");
    response.writeHead(    200, {'Content-Type': 'text/html'});
    response.end("<html><body><h1>Request recebido!</h1></body></html>");
};

var server = http.createServer(requestHanldler);

server.listen(porta, ip);

console.log("Server running at http://" + ip + ":" + porta + "/");


