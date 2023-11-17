const exprees = require('express');
const app = exprees();

app.get('/',(req,res)=>{
    console.log(req.query);
    res.json({mensaje:"Server Express respondiendo a get"});
});

app.post('/',(req,res)=>{
    res.json({mensaje:"Server Express respondiendo a post"});
});

app.delete('/',(req,res)=>{
    res.json({mensaje:"Server Express respondiendo a delete"});
});

app.listen(8082,(req,res)=>{
    console.log("Servidor Express corriendo en puerto 8082");
});