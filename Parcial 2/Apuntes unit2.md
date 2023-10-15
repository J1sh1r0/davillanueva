# APUNTES DE CLASE DE LA UNIDAD 2

## JAVA SCRIPT

**Nota:** Nos concentraremos en el JAVA Vanila

### JavaScript
* Tipos de Datos  
* Variables  
* Estructuras  
* Objetos  

### Dialectos
* Typescript

**Donde pondremos el script?** Insertaremos el scrip como si fuera un CSS lo pondremos en un archivo aparte ligandolo al html o poniendolo dentro del Head.  

---
## Node.js
* Funciones
* Prop.
* Window

**Que es NPM?** Son los paquetes repositorio  
---
## Framcworks
* Angular
* Vue
* React
---
## Tipos de Variables javascript
* Var: La vemos solo en la funcion
* Let: La vemos en el bloque de codigo donde este colocado
* Cont: Se comporta como de bloque ya que es constante  

**Nota:** No se recomienda usar var ya que hay un comportamiento que se llama Hoisting

### Ambito de Variables:
Si declaramos una variable con var dentro de una funcion esta sera local a la funcion.  
* Let es bloque  
* Var es funcion  

---
## Tipos de datos primitivos y objetos
|Primitivos| Objetos   |
|----------|-----------|
| Number   | E         |
| String   | E         | 
| Bigint   | C         |
| Boleano  | C         |
| Null     | C         |
| Undefine | C         |
| Symbol   | C         |
---
## Modulos
|WEB           |Node         |
|--------------|-------------|
|Nativo/Ecma/Es|Conmonjs     |
|export        |Module.export|
|Import        |Requerie()   |

### Como declarar una funcion en javascript
```
funtion nombre(__nombre){
    return
}
```

### Los objetos en javascript se representa como 
```
{
    prop: valor
    prop:valor
}
```
**Que es un modulo:** Modulo que es un paquete javascript que exporta cosas

---
## Protocolo HTTP 
**HTTP:** Protocolo de transferencia de Iper Texto, en si son puras peticiones.  

**Metodos**
* Get: Es una consulta en el navegador.
* Post: Cuando enviaras informacion.
* Put: Actualizar toda la base de datos.
* DELETE: Borrar un elemento.
* PATCH: Actualizar solo una parte de la base de datos.

---
## Formato para intercambiar unformacion
* XML: Se usa cuando vas a transmitir datos al gobierno y archivos de config
* JSON Java: Es as facil de implementar y el activo de internet
