const express = require('express');
const sql = require('mssql');

const app = express();
const PORT = 8082;

// Configuración de la conexión a SQL Server
const config = {
  user: 'ADDES/krono',
  password: '',
  server: 'ADESS\SQLEXPRESSr',
  database: 'Northwind',
  options: {
    enableArithAbort: true,
  },
};

// Endpoint para obtener datos de la tabla
app.get('/datos', async (req, res) => {
  try {
    // Conectar a SQL Server
    await sql.connect(config);

    // Ejecutar una consulta
    const result = await sql.query('SELECT * FROM Employees');

    // Enviar los resultados como respuesta
    res.json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  } finally {
    // Cerrar la conexión
    await sql.close();
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
