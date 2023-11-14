const exprees = require('express');
const app = exprees();

app.get('/clientes',(req,res)=>{
    console.log(req.query);
    res.json({mensaje:"Server Express respondiendo a get"});
});

app.post('/clientes',(req,res)=>{
    res.json({mensaje:"Server Express respondiendo a post"});
});

app.delete('/clientes',(req,res)=>{
    res.json({mensaje:"Server Express respondiendo a delete"});
});

app.listen(8082,(req,res)=>{
    console.log("Servidor Express corriendo en puerto 8082");
});