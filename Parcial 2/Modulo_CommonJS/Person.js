//Ejercicio Propio
/*function saludarPersona(nombre) {
    return `Hola, ${nombre}!`;
}  
module.exports = saludarPersona;*/

//Ejercicio propio 2
/*class Person {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  // Exportar la clase para que otros módulos puedan usarla
  module.exports = Person;*/

  //EJERCICIO 3
  // Definir una función que suma dos números
/*function sumar(a, b) {
  return a + b;
}

// Definir una función que resta dos números
function restar(a, b) {
  return a - b;
}

// Exportar las funciones
module.exports.sumar = sumar;
module.exports.restar = restar;*/



// Importa el módulo axios
const axios = require('axios');
// URL de ejemplo para hacer una petición GET
const url = 'https://jsonplaceholder.typicode.com/posts/1';
// Realiza una petición GET a la URL
axios.get(url)
  .then(response => {
    console.log('Datos recibidos:', response.data);
  })

  .catch(error => {
    console.error('Error al hacer la petición:', error);
  });
