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


# Valores Booleanos

Muy a menudo, en la programación, necesitará un tipo de datos que solo puede tener uno de dos valores, como

SÍ/NO
ENCENDIDO/APAGADO
true / false
Para esto, JavaScript tiene un Booleano tipo de datos. Solo puede toma los valores cierto o false.

# Comparadores 

| Operador | Descripción                          | Comparación | Resultado |
|----------|--------------------------------------|-------------|-----------|
| `==`     | igual a                              | `x == 8`    | `false`   |
|          |                                      | `x == 5`    | `true` 	|
|          |                                      | `x == "5"`  | `true` 	|
| `===`    | igual en valor e igual en tipo       | `x === 5`   | `true` 	|
|          |                                      | `x === "5"` | `false`   |
| `!=`     | no igual                             | `x != 8`    | `true` 	|
| `!==`    | no igual en valor o no igual en tipo | `x !== 5`   | `false`   |
|          |                                      | `x !== "5"` | `true` 	|
|          |                                      | `x !== 8`   | `true` 	|
| `>`      | mayor que                            | `x > 8`     | `false`   |
| `<`      | menor que                            | `x < 8`     | `true` 	|
| `>=`     | mayor o igual que                    | `x >= 8`    | `false`   |
| `<=`     | menor o igual que                    | `x <= 8`    | `true` 	|

# Operadores Logicos

| Operador | Descripción | Ejemplo                        |
|----------|-------------|--------------------------------|
| `&&`     | y (and)     | `(x < 10 && y > 1)` es `true`  |
| `||`     | o (or)      | `(x == 5 || y == 5)` es `false`|
| `!`      | no (not)    | `!(x == y)` es `true`          |

# Operador Condicional (Ternario)

JavaScript también contiene un operador condicional que asigna un valor a una variable basado en una condición.

**Sintaxis**

`nombreVariable = (condición) ? valor1 : valor2;`

**Ejemplo**

`let puedeVotar = (edad < 18) ? "Demasiado joven" : "Lo suficientemente mayor";`

Si la variable edad tiene un valor inferior a 18, el valor de la variable puedeVotar será “Demasiado joven”, de lo contrario, el valor de puedeVotar será “Lo suficientemente mayor”.

Este operador es una forma concisa de hacer evaluaciones condicionales en JavaScript y es muy útil para simplificar el código.

# Declaraciones condicionales 

Los Conditional Statements en JavaScript permiten ejecutar diferentes bloques de código en función de si una condición es verdadera o falsa. Aquí te explico los principales tipos de sentencias condicionales de forma sencilla:

1. **Declaración if**

La sentencia if ejecuta un bloque de código si una condición es verdadera.

`let edad = 18;`

`if (edad >= 18) {`
    `console.log("Eres mayor de edad.");`
`}`

Si la condición edad >= 18 es verdadera, se ejecuta el código dentro del bloque {}. Si es falsa, el código dentro del bloque no se ejecuta.

2. **Declaración Else**

La sentencia else se usa junto con if para ejecutar un bloque de código si la condición en el if es falsa.


`let edad = 16;`

`if (edad >= 18) {`
    `console.log("Eres mayor de edad.");`
`} else {`
    `console.log("Eres menor de edad.");`
`}`

3. **Declaración if else**

 Permite verificar múltiples condiciones. Se coloca entre un if y un else.

 `let edad = 17;`

`if (edad >= 18) {`
    `console.log("Eres mayor de edad.");`
`} else if (edad >= 13) {`
    `console.log("Eres un adolescente.");`
`} else {`
    `console.log("Eres un niño.");`
`}`

El código evalúa las condiciones en orden. Si edad >= 18 es falsa pero edad >= 13 es verdadera, se ejecuta el segundo bloque. Si ambas son falsas, se ejecuta el bloque en else.

4. Declaración switch

El switch se utiliza para seleccionar uno entre muchos bloques de código a ejecutar. Es útil cuando se tienen muchas condiciones que verificar.

`let dia = 3;`

`switch (dia) {`
   ` case 1:`
        `console.log("Es lunes.");`
        `break;`
    `case 2:`
      `  console.log("Es martes.");`
        `break;`
   ` case 3:`
       ` console.log("Es miércoles.");`
       ` break;`
   ` default:`
       ` console.log("No es un día válido.");`
`}`

switch evalúa la variable dia y ejecuta el bloque de código correspondiente al valor que coincide. default se ejecuta si ninguna de las condiciones se cumple.

# Bucles

JavaScript admite diferentes tipos de bucles:

- **for**: recorre un bloque de código un número específico de veces.
- **for/in**: recorre las propiedades de un objeto.
- **for/of**: recorre los valores de un objeto iterable.
- **while**: recorre un bloque de código mientras una condición especificada sea verdadera.
- **do/while**: también recorre un bloque de código mientras una condición especificada sea verdadera.

# Bucle For

La declaración `for` crea un bucle con 3 expresiones opcionales:

`for (expression 1; expression 2; expression 3) {`
 ` // bloque de codigo a ejecutar`
`}`

	•  Expresión 1: Se ejecuta una vez antes de que comience el bucle. Generalmente se utiliza para inicializar una variable.
	•	Expresión 2: Define la condición para ejecutar el bloque de código. Si es true, el bucle continúa; si es false, el bucle termina.
	•	Expresión 3: Se ejecuta al final de cada iteración para actualizar el contador.

Ejemplo:

`for (let i = 0; i < 5; i++) {`
 ` text += "El número es " + i + "<br>";`
`}`

En el ejemplo:

	•	Expresión 1: Inicializa la variable i (let i = 0).
	•	Expresión 2: Define la condición para continuar (i < 5).
	•	Expresión 3: Incrementa i en cada iteración (i++).

Expresiones Opcionales:

	•	Expresión 1: Se puede usar para inicializar múltiples variables o incluso omitir si las variables ya están inicializadas.
	•	Expresión 2: Evalúa la condición del bucle. Si se omite, debes incluir un break dentro del bucle para evitar un bucle infinito.
	•	Expresión 3: Usualmente incrementa el valor de la variable inicial, pero puede hacer cualquier cosa o ser omitida.

Alcance del Bucle:

	•	var en un bucle: Una variable var dentro del bucle redeclara la variable fuera del bucle, afectando su valor global.
	•	let en un bucle: Una variable let dentro del bucle no redeclara la variable fuera del bucle, limitando su alcance solo al interior del bucle.

	`var i = 5;`
`for (var i = 0; i < 10; i++) {`
 ` // algún código`
`}`
`// Aquí i es 10`

`let i = 5;`
`for (let i = 0; i < 10; i++) {`
  `// algún código`
`}`
`// Aquí i es 5`

# Bucle For In