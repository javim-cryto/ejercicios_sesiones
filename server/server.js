var http = require("http");

var server = http.createServer(function (peticion, respuesta){
  respuesta.end(`<h1>Hola mundo</h1>`);
});

server.listen(3000, function(){
  console.log("Servidor escuchando en el puerto " + this.address().port);
});nm