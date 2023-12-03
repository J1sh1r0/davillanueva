// const { error } = require('console');
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Mostrar Toda la tabla
app.get('/manga', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mangas'
    });
    connection.connect();
    connection.query(`SELECT * FROM manga `, function (error, results, fields) {
        if (error) {
            res.json(error);
        } else {
            if (results.length === 0) {
                res.json({ Mensaje: "Manga no encontrada" });
            } else {
                res.json(results);
            }
        }
    });
    connection.end();
});

//CONSULTA2 Mostrar solo uno con el Id
app.get('/manga/:id', (req, res) => {
    //podria ser req.params.id    tambien con .body.id    query.id
    if (typeof (req.params.id) === 'undefined') {
        res.json({
            estado: 0,
            resultado: "Debe enviar el ID"
        });
    } else {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'mangas'
        });
        connection.connect();
        //podria ser req.params.id   tambine con req.body.id    
        connection.query(`SELECT * FROM manga WHERE ID=${req.params.id}`, function (error, results, fields) {
            if (error) {
                res.json({ estado: 0, resultado: error.sqlMessage });
            } else {
                if (results.length === 0) {
                    res.json({ estado: 0, resultado: "Manga no encontrado" });
                } else {
                    res.json({ estado: 1, resultado: results[0] });
                }
            }
        });
        connection.end();
    }
});

//BORRAR
app.delete('/manga/:id', (req, res) => {
    //Para validar si el cliente puso un id para buscar el dato
    if (typeof (req.params.id) === `undefined`) {
        res.json({
            estado: 0,
            resultado: "debe de enviar el parametro Id en la cadena de consulta"
        })
    } else {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'mangas'
        });
        connection.connect();
        connection.query(`delete  from manga where ID = ${req.params.id}`, function (error, results, fields) {
            //para validar si el id que pusierin no esta, si esta mal la forma de la consulta en la linea 26, si no pueron id
            if (error) {
                res.json({ estado: 0, resultado: error.sqlMessage });

            } else {
                if (results.affectedRows == 1) {
                    res.json({ estado: 1, resultado: "Manga borrado" });

                } else {
                    res.json({ estado: 0, resultado: "ocurrio un error en la eliminacion" });
                }
            }
        });
        connection.end();
    }
})

//ALTA
app.post('/manga', (req, res) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mangas'
    });

    let sentenciasql = "insert into manga values(" + req.body.Id + "," +
        "'" + req.body.Nombre + "'," +
        "'" + req.body.Genero + "'," +
        "'" + req.body.FechaEstreno + "'," +
        "'" + req.body.CantCapitulos + "'" + ")";

    console.log(sentenciasql);
    connection.connect();
    connection.query(sentenciasql, function (error, results, fields) {
        if (error) {
            res.json(error);

        } else {
            console.log(results);
            res.json(results);
        }
    });
    connection.end();
})

//MODIFICAR
app.put('/manga/:id', (req, res) => {

    let sentenciaSQL = "update manga set " +
        "Nombre='" + req.body.Nombre + "'," +
        "Genero='" + req.body.Generos + "'," +
        "FechaEstreno='" + req.body.FechaEstreno + "'," +
        "CantCapitulos='" + req.body.CantCapitulos + "'" + "where ID=" + req.params.id;

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mangas'
    });
    connection.connect();
    connection.query(sentenciaSQL, function (error, results, fields) {
        if (error) {
            res.json(error);
        } else {
            console.log(results);
            if (results.affectedRows == 1) {
                res.json({
                    estado: 1,
                    resultado: "Manga Modificado"
                });
            } else {
                res.json({
                    estado: 1,
                    resultado: "Ocurrio un error"
                });
            }
        }
    });
    connection.end();
});

app.post('/', (req, res) => {
    res.json({ respuesta: "Respuesta a peticion get" })
})

app.listen(8082, (req, res) => {
})
console.log('Servidor express escuchando en puerto 8082')
