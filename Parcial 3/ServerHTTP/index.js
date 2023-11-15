const http = require ('http');

http.createServer((req,res)=>{
    //res.setHeader('Access-Control-Allow-Origin', "*")
    res.write("Servidor HTTP Node contestando a peticion get");
    res.end();
});

Server.liste(8082, ()=>{
    Console.log("Servidor Node HTTP corriendo en puerto 8082");
});
