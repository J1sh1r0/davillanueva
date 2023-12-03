const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
 
const app = express();
const port = 8082;
 
// Configuración de CORS
app.use(cors());
 
// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'pruebaweb',
  port: 3306, 
});
 
// Ruta para obtener datos de la base de datos
app.get('/datos', (req, res) => {
  // Realiza la consulta a la base de datos
  connection.query('SELECT * FROM alumnos', (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
      return;
    }
 
    // Envia los resultados como respuesta
    res.json(results);
  });
});
 
// Ruta para obtener datos de la base de datos por usuario_id
app.get('/datos/:ID', (req, res) => {
  const usuarioId = req.params.usuario_id;
 
  // Realiza la consulta a la base de datos filtrando por usuario_id
  connection.query('SELECT * FROM usuario WHERE ID = ?', [usuarioId], (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
      return;
    }
 
    // Verifica si se encontraron resultados
    if (results.length === 0) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      // Envia el resultado como respuesta
      res.json(results[0]);  // Devuelve solo el primer resultado (asumiendo que usuario_id es único)
    }
  });
});
 
// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});