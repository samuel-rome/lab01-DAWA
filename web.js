var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type': 'text/html'});

    switch(request.url){
        case '/':
            paginas = "index.html";
            break;
        case '/nosotros':
            paginas = "nosotros.html";
            break;
        case '/servicios':
            paginas = "servicios.html";
            break;
        case '/clientes':
            paginas = "clientes.html";
            break;
        case '/contacto':
            paginas = "contacto.html";
            break;
    }

    fs.readFile("./"+paginas, function(error,data){
        response.write(data);
        response.end();
    });
}).listen(8080);