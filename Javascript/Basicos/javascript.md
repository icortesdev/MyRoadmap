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

El loop **for in** en JavaScript se utiliza para iterar sobre todas las propiedades enumerables de un objeto, o sobre los índices de un array. A diferencia del loop for tradicional, que se usa para iterar un número determinado de veces, for...in está diseñado para recorrer las propiedades de un objeto o las claves de un array.

Sintaxis:
`for (variable in objeto) {`
  `// Código que se ejecuta en cada iteración`
`}`

	•	variable: Es una variable que se asignará al nombre de cada propiedad o índice en cada iteración.
	•	objeto: Es el objeto o array sobre el cual se va a iterar.

**Ejemplo con un objeto:**

`const persona = {`
  `nombre: 'Juan',`
  `edad: 30,`
  `profesion: 'Desarrollador'`
`};`

`for (let clave in persona) {`
 ` console.log(clave + ': ' + persona[clave]);`
`}`

**Explicación:**

	•	El loop for...in recorre cada propiedad del objeto persona.
	•	En cada iteración, la variable clave toma el nombre de la propiedad actual (nombre, edad, profesion).
	•	Dentro del bucle, persona[clave] devuelve el valor de la propiedad correspondiente, que se imprime en la consola.


**Cuándo usar for in:**

	•	Es más adecuado para iterar sobre las propiedades de un objeto.
	•	Para iterar sobre arrays, for...in es menos común, ya que hay otros métodos más apropiados como for, for...of, o forEach.

# ForEach 

El método forEach en JavaScript es una función incorporada para recorrer los elementos de un array y ejecutar una función para cada uno de ellos. Es una alternativa más legible y directa al bucle for tradicional cuando quieres iterar sobre los elementos de un array y realizar una acción en cada uno de ellos.

**Sintaxis:**

`array.forEach(function(elemento, indice, array) {`
 ` // Código que se ejecuta para cada elemento`
`});`

	•	array: Es el array sobre el que se va a iterar.
	•	elemento: El elemento actual del array que está siendo procesado.
	•	indice (opcional): El índice del elemento actual.
	•	array (opcional): El array sobre el que se está iterando.

**Ejemplo:**

`const numeros = [1, 2, 3, 4, 5];`

`numeros.forEach(function(numero) {`
 ` console.log('Número:', numero);`
`});`

	•	forEach recorre el array numeros y ejecuta la función proporcionada para cada elemento.
	•	En cada iteración, numero es el elemento actual del array.
	•	Se imprime en la consola cada número del array.

**Características y Consideraciones:**

1.	**Inmutabilidad:** forEach no modifica el array original, a menos que se haga explícitamente dentro de la función que se pasa. Es una buena práctica no modificar el array dentro de forEach.

2.	**No retorna valor:** A diferencia de otros métodos de array como map o filter, forEach no devuelve un nuevo array. Simplemente ejecuta una función para cada elemento.

3.	**Asincronía:** Si dentro de un forEach se utilizan operaciones asíncronas (como llamadas a API con fetch), el forEach no espera a que esas operaciones se completen antes de pasar al siguiente elemento. Esto puede llevar a comportamientos inesperados.

4.	**No se puede romper:** A diferencia de un bucle for, no se puede usar break para salir de un forEach antes de que termine de recorrer todos los elementos. Si necesitas salir de un bucle antes de que termine, podrías considerar usar un for o for...of.

**Cuándo usar forEach**

	•	forEach es ideal para ejecutar efectos secundarios en cada elemento de un array, como imprimir valores, realizar modificaciones en un objeto externo, o ejecutar funciones que no necesitan devolver un valor.
	•	Si necesitas un nuevo array como resultado de la iteración, considera usar map. Si necesitas filtrar elementos, usa filter. Si buscas un elemento en particular, usa find.


# Loop While

El loop while en JavaScript se utiliza para ejecutar un bloque de código repetidamente mientras una condición específica sea verdadera. Es especialmente útil cuando no se conoce de antemano cuántas veces debe ejecutarse el bucle.

`while (condicion) {`
 ` // Código a ejecutar mientras la condición sea verdadera`
`}`

•	condicion: Es una expresión que se evalúa antes de cada iteración. Si es true, el bucle se ejecuta; si es false, el bucle termina.

**Ejemplo:**

`let contador = 0;`

`while (contador < 5) {`
 `console.log('Contador:', contador);`
 ` contador++;`
`}`

**Características clave:**

1.	Condición al inicio: El while verifica la condición antes de ejecutar el bloque de código. Si la condición es falsa desde el principio, el código dentro del bucle no se ejecutará ni una sola vez.
2.	Bucles infinitos: Si la condición nunca se vuelve false, el while seguirá ejecutándose indefinidamente, lo que puede llevar a un **“bucle infinito”** que bloquea la aplicación. Es importante asegurarse de que la condición eventualmente se vuelva false.


# Declaración break y continue

La declaración **break** se usa para terminar un bucle prematuramente. Cuando se encuentra un break dentro de un bucle, el control del programa “salta” fuera del bucle, terminando su ejecución inmediatamente. Esto significa que ninguna otra iteración del bucle se ejecutará, y el programa continuará ejecutando el código que viene después del bucle.

`for (let i = 0; i < 10; i++) {`
 ` if (i === 5) {`
   ` break; // Sale del bucle cuando i es igual a 5`
 ` }`
  `console.log(i);`
`}`

`console.log('El bucle ha terminado.');`

La declaración **continue** se utiliza para omitir la iteración actual de un bucle y pasar directamente a la siguiente. Cuando continue se ejecuta, el bucle no ejecuta el código que sigue dentro de la iteración actual; en su lugar, salta directamente al siguiente ciclo del bucle.

`for (let i = 0; i < 10; i++) {`
 ` if (i === 5) {`
    `continue; // Omite la iteración cuando i es igual a 5`
 ` }`
  `console.log(i);`
`}`

`console.log('El bucle ha terminado.');`


# ¿QUE ES JSON?

JSON (JavaScript Object Notation) es un formato de texto ligero y fácil de leer/escribir para el intercambio de datos. Es ampliamente utilizado para transmitir datos entre un servidor y una aplicación web, o entre distintas aplicaciones, debido a su simplicidad y compatibilidad con la mayoría de los lenguajes de programación.

**Características principales de JSON:**

1.	Formato de Texto: JSON es un formato basado en texto, lo que significa que es fácilmente legible tanto por humanos como por máquinas.
2.	Ligero: JSON es minimalista y no contiene datos innecesarios, lo que lo hace eficiente para transferencias de datos.
3.	Estructura basada en pares clave-valor: Los datos en JSON se representan como pares de clave-valor, donde una clave (nombre del campo) está asociada a un valor.

Estructura de JSON

JSON utiliza dos estructuras principales:

1.	Objetos: Se representan como un conjunto de pares clave-valor encerrados entre llaves {}.
	•	Cada clave es una cadena de texto (string).
	•	Cada valor puede ser un número, cadena, booleano, array, otro objeto, o null.

	**Ejemplo de un objeto JSON:**

	`{`
 ` "nombre": "Juan",`
 `"edad": 30,`
  `"profesion": "Desarrollador",`
  `"esCasado": false`
`}`

en el archivo[ejemplo.json](./ejemplo.json) se puede observar otro ejemplo.


	2.	Arrays: Son listas ordenadas de valores, encerradas entre corchetes [].
	•	Los valores pueden ser de cualquier tipo, incluyendo objetos y otros arrays.

**Ejemplo de un array JSON:**
`{`
  `"coloresFavoritos": ["rojo", "azul", "verde"]`
`}`

**Uso común de JSON**

JSON se usa principalmente para intercambiar datos entre un cliente (como un navegador web) y un servidor. Por ejemplo, cuando una aplicación web necesita obtener datos de un servidor, esos datos se suelen recibir en formato JSON.

**Ejemplo de un intercambio de datos JSON:**

	1.	Solicitud al servidor: Una aplicación solicita los datos de un usuario.
	2.	Respuesta del servidor: El servidor envía los datos en formato JSON.

**Ventajas de JSON:**

	•	Simplicidad: Su estructura sencilla lo hace fácil de leer y escribir.
	•	Compatibilidad: JSON es compatible con la mayoría de los lenguajes de programación, como JavaScript, Python, Java, y más.
	•	Eficiencia: JSON es ligero, lo que lo hace ideal para el intercambio de datos en aplicaciones web.