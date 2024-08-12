## Javascript

# Introducción a JavaScript

JavaScript es un lenguaje de programación ligero, interpretado y orientado a objetos, que se utiliza principalmente para el desarrollo web. Es uno de los pilares del desarrollo web, junto con HTML y CSS, y permite crear interactividad y dinamismo en las páginas web. Fue creado por Brendan Eich en 1995 y ha evolucionado significativamente desde entonces.

# Manipulación del DOM

El DOM (Document Object Model) es una representación estructurada del documento HTML que permite a JavaScript acceder y manipular el contenido, la estructura y los estilos de la página. A través del DOM, JavaScript puede modificar dinámicamente el contenido de la página, responder a eventos del usuario, y actualizar el diseño sin necesidad de recargar la página.

Uno de los métodos más comunes para interactuar con el DOM es getElementById(), que se utiliza para seleccionar un elemento HTML por su id y realizar diversas manipulaciones, como cambiar su contenido, estilo, o atributos.

# Manipulación del contenido HTML con JavaScript

Uno de los métodos más comunes en JavaScript para interactuar con HTML es `getElementById()`.

Este método se utiliza para "encontrar" un elemento HTML por su `id` y cambiar su contenido utilizando `innerHTML`.

**Ejemplo:**

`document.getElementById("demo").innerHTML = "Hello JavaScript";`


# Cambiar los Valores de Atributos HTML

En este ejemplo JavaScript cambia el valor de la src (fuente) atributo de un <img> etiqueta:

**Ejemplo:**

`<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>`

 # Cambia los estilos HTML (CSS)

 `document.getElementById("demo").style.fontSize = "35px";`


# Oculta elementos HTML

Ocultar elementos HTML se puede lograr cambiando el estilo de display:

`document.getElementById("demo").style.display = "none";`

# Muestra elementos HTML que estaban ocultos

`document.getElementById("demo").style.display = "block";`

# Posibilidades de Visualización en JavaScript

**JavaScript puede “mostrar” datos de diferentes maneras:**

	•	Escribiendo dentro de un elemento HTML, utilizando innerHTML.
	•	Escribiendo en la salida HTML utilizando document.write().
	•	Escribiendo en una caja de alerta, utilizando window.alert().
	•	Escribiendo en la consola del navegador, utilizando console.log().

## Sintaxis de JavaScript

La sintaxis de JavaScript es el conjunto de reglas sobre cómo se construyen los programas en JavaScript.

**Cómo crear variables:**

`var x`
`let y`

**Cómo usar variables**

`x= 5`
`y = 6 `
`let z = x + y`

# Valores en JavaScript

La sintaxis de JavaScript define dos tipos de valores:

1. Valores fijos: llamados literales.
2.	Valores variables: llamados variables.

# Literales en JavaScript

Las dos reglas sintácticas más importantes para los valores fijos son:

1. 	Los números se escriben con o sin decimales:
	•	Ejemplo: 10.50, 1001
2.	Las cadenas de texto se escriben entre comillas dobles o simples:
	•	Ejemplo: "John Doe", 'John Doe'

# Variables en JavaScript

Las variables se utilizan para almacenar valores de datos. JavaScript usa las palabras clave var, let, y const para declarar variables.

`let x;`
`x = 6;`

# Operadores en JavaScript

JavaScript utiliza operadores aritméticos (+, -, *, /) para calcular valores y el operador de asignación (=) para asignar valores a variables.

`let x, y;`
`x = 5;`
`y = 6;`

# Expresiones en JavaScript

Una expresión es una combinación de valores, variables y operadores que se evalúa en un valor.

	•	Ejemplo de evaluación: 5 * 10 evalúa a 50.
	•	Las expresiones también pueden contener variables:
	•	Ejemplo: x * 10
	•	Ejemplo con cadenas de texto: "John" + " " + "Doe" evalúa a "John Doe"

# Palabras clave en JavaScript

Las palabras clave en JavaScript identifican las acciones a realizar. Ejemplo: let, var y const se utilizan para crear variables.

`let x, y;`
`x = 5 + 6;`
`y = x * 10;`

# Comentarios en JavaScript

No todas las declaraciones en JavaScript se ejecutan. El código después de // o entre /* y */ se trata como un comentario y no se ejecuta.

`let x = 5;   // Esto se ejecutará`

`// x = 6;   Esto NO se ejecutará`

# dentificadores y Nombres en JavaScript

Los identificadores son nombres en JavaScript utilizados para variables, palabras clave y funciones. Un identificador debe comenzar con una letra, un signo de dólar ($) o un guion bajo (_).

	•	Ejemplo: let lastname, lastName;
	•	JavaScript distingue entre mayúsculas y minúsculas (lastName y lastname son variables diferentes).

# Convenciones de Nombres en JavaScript

En JavaScript, se utilizan diferentes formas para unir palabras en nombres de variables:

	•	Guion bajo: first_name, last_name
	•	Camel Case: firstName, lastName (preferido por los programadores de JavaScript)
	•	Pascal Case: FirstName, LastName

# Conjunto de Caracteres en JavaScript

JavaScript utiliza el conjunto de caracteres Unicode, que cubre casi todos los caracteres, puntuaciones y símbolos del mundo.