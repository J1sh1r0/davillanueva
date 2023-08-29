# Modelo de Caja y Display


**Nombre del alumno:** *Dominic Andre Villanueva Quevedo*

## Modelo de Caja en HTML

El **modelo de caja** en HTML es un concepto fundamental que se refiere a como se estructura y representan visualmente los elementos HTML en una pagina web. Cada elemento en HTML se trata como una **"caja"** rectangular que comprende diversas partes, determinando tanto su diseño como su comportamiento en la pagina.  

### Partes del Modelo de Caja  
El modelo de caja esta compuesto por varias partes ecenciales:

1. **Contenido (Content):** Es el propio contenido del elemento, como texto, imagenes u otros elementos HTML anidados.
2. **Relleno (Padding):** Es un espacio transparente que rodea el contenido dentro de la caja. Puede ser configurado para controlar el espacio entre el contenido y los bordes de la caja. 
3. **Borde (Border):** Es una linea que rodea el contenido y su relleno. Puede tener diferentes estilos, grosores y colores.
4. **Margen (Margin):** Es un espacio transparente que rodea la caja en su conjunto. Controla el espacio entre esta caja y otros elementos circundantes.  

Estos elementos se conbinan para formar una **caja** completa que define como se vera y se comportara un elemento en la pagina.  

---
## Propiedad Display y Valores  

La pripiedad **Display** en CSS determina como se muestra un elemento en la pagina. Puede alterar el comportamiento predeterminando  de como los elementos se colocan en el flujo del documento. Algunos de los valores mas comunes de la propiedad *display* son:  

1. **Block:** Convierte el elemento en un bloque que ocupa todo el ancho disponible y crea un salto de linea antes y despues de el. Ejemplos de elementos con *display block* incluyen parrafos, encabezados y divs.  
2. **Inline:** Convierte el elemento de un linea que ocupa solo el espacio necesario para su contenido y no crea un salto de linea antes o despues de el. Ejemplos de elementos con *display inline* incluyen las etiquetas de texto como **\<span>** y **\<a>**.  
3. **Inline-Block:** Similar al display inline, pero permite configurar propiedades de bloque, como ancho y altura. Esto permite que el elemento se comporte como un elemento en línea pero con características de bloque.
4. **None:** Hace que el elemento no sea visible ni ocupe espacio en la página. Es como si el elemento no existiera en el documento.

5. **Flex:** Introduce el modelo de diseño flexible (flexbox) al elemento, lo que facilita la creación de diseños complejos y responsivos.

6. **Grid:** Introduce el modelo de diseño de cuadrícula (grid) al elemento, permitiendo un control más avanzado de la disposición de los elementos en filas y columnas.
