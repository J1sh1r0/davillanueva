//Ejercicio Propio
/*function saludarPersona(nombre) {
    return `Hola, ${nombre}!`;
}  
module.exports = saludarPersona;*/

//Ejercicio propio 2
class Person {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  // Exportar la clase para que otros módulos puedan usarla
  module.exports = Person;