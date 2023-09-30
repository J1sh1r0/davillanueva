//EJERCICIO PROPIO 1
/*const saludarPersona = require('./Area.js');
const nombre = 'Dominic';
const saludo = saludarPersona(nombre);
console.log(saludo);*/

//EJERCICIO PROPIO 2
const Person = require('./Person.js');
const persona = new Person('Dominic', 21); // Crear una instancia de la clase Person
persona.saludar();// Llamar al método saludar