let http = require ('http');

let servidor = http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.write('Servidor HTTP Node contestando a peticion get');
    res.end();
})

servidor.listen(8082, () => {
    console.log('Servidor Node HTTP corriendo en puerto 8082')
});
