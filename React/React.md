## ¿Qué es React?

ReactJS es una biblioteca de JavaScript desarrollada por Facebook, diseñada para construir interfaces de usuario, especialmente aquellas que requieren una actualización dinámica y eficiente de los componentes en respuesta a las interacciones del usuario.

# Javascript necesiario para React:

1. **Template literals:**
**En Javascript**
```javascript
const nombre = “John”;
const apellido = “Doe”;

console.log(nombre + " " + apellido);
```
**En React**

```javascript
const nombre = “John”;
const apellido = “Doe”;
console.log(`${nombre} ${apellido}`);

function Componente({ backgroundColor }) {
return (<div className={`bg-color-${backgroundColor}`}>Hola</div>);
}
```

2. **Shorthand property names:**
**En Javascript**

```javascript 
const nombre = "John"
const edad = "36"
const twitter = "https://twitter.com"

const persona = {
	nombre:nombre,
	edad: edad,
	twitter: twitter
}
console.log(persona)
```
**En React**

```javascript 
const nombre = "John"
const edad = "36"
const twitter = "https://twitter.com"

const persona = {
	nombre,
	edad,
	twitter
}
console.log(persona)
```

3. **Arrow functions:**

```javascript
fuction ListaDeTareas () {
return (
	<ul>
	{listado.map(elemento => (<li>{elemento.nombre}</li>))}
	</ul>
)
}
```

4. **Destructuring:**

**En Javascript**
```javascript
const cuadrado = {
	x = 10,
	y = 10
}
function calcularArea(cuadrado) {
	return cuadrado.x * cuadrado.y
}
calcularArea(cuadrado);
```
**En React**
```javascript
const cuadrado = {
	x = 10,
	y = 10
}
function calcularArea(cuadrado) {
	const {x,y} = cuadrado
	return x * y
}
calcularArea(cuadrado);
```

5. **Default parameters:**

**En Javascript**
```javascript
function suma (a, b){
	if ( a === undefined || b = undefined){
		console.log('Debes introducir dos valores')
		return;
	}
return	a + b
}

suma()

```
**En React**

```javascript
function suma (a = 0, b = 0){
return	a + b
}

suma()
```

6. **Spread operators / rest parameters:**

**En Javascript**

```javascript
const array = [1,2,3,4,5]
const otroArray = [6,7,8,9,10]

const nuevoArray = array.concat(otroArray)

console.log(nuevoArray)


const obj1 = {
	a: "a",
	b: "b",
	c: "c"
}

const obj2 = {
	d: "d",
	e: "e"
}

const nuevoObjeto = object.assign({}, obj1, obj2)
console.log(nuevoObjeto)
```

**En React**

```javascript
const array = [1,2,3,4,5]
const otroArray = [6,7,8,9,10]

const nuevoArray = [...array, ...otroArray]

console.log(nuevoArray)


const obj1 = {
	a: "a",
	b: "b",
	c: "c"
}

const obj2 = {
	d: "d",
	e: "e"
}

const nuevoObjeto = {...obj1, ...obj2}
console.log(nuevoObjeto)
```

7. **ESModules:**
Son una característica estándar de JavaScript que permite organizar y modularizar el código, te permiten una estructura de código más clara, reutilizable y eficiente, mejorando tanto el desarrollo como el rendimiento de las aplicaciones.

8. **Ternary operator:**

**En Javascript**

```javascript
const coche = {
	marca: "Tesla",
	modelo: "Cybertruck"
}

let modelo;
if(coche.model){
	modelo = coche.model
} else {
	 modelo = "X"
}
modelo;

```

**En React**

```javascript
const coche = {
	marca: "Tesla",
	modelo: "Cybertruck"
}

let modelo = coche.model ? coche.model : 'X';

modelo;
```

9. **Metodos de Arrays mas utilizados en React:**

 **`find`**:
    Busca el primer elemento en un array que cumpla con una condición específica.
   - **Ejemplo**:
     ```javascript
     const numeros = [1, 2, 3, 4, 5];
     const resultado = numeros.find(num => num > 3); // Devuelve 4
     ```

 **`some`**:
    Verifica si al menos un elemento en el array cumple con una condición. Devuelve `true` o `false`.
   - **Ejemplo**:
     ```javascript
     const numeros = [1, 2, 3, 4, 5];
     const resultado = numeros.some(num => num > 3); // Devuelve true
     ```

 **`every`**:
    Verifica si todos los elementos en el array cumplen con una condición. Devuelve `true` o `false`.
   - **Ejemplo**:
     ```javascript
     const numeros = [1, 2, 3, 4, 5];
     const resultado = numeros.every(num => num > 0); // Devuelve true
     ```

 **`includes`**:
    Verifica si un array contiene un valor específico. Devuelve `true` o `false`.
   - **Ejemplo**:
     ```javascript
     const numeros = [1, 2, 3, 4, 5];
     const resultado = numeros.includes(3); // Devuelve true
     ```

 **`map`**:
  Crea un nuevo array aplicando una función a cada elemento del array original.
   - **Ejemplo**:
     ```javascript
     const numeros = [1, 2, 3, 4, 5];
     const resultado = numeros.map(num => num * 2); // Devuelve [2, 4, 6, 8, 10]
     ```

 **`filter`**:
    Crea un nuevo array con los elementos que cumplan una condición específica.
   - **Ejemplo**:
     ```javascript
     const numeros = [1, 2, 3, 4, 5];
     const resultado = numeros.filter(num => num > 3); // Devuelve [4, 5]
     ```

 **`reduce`**:
    Reduce todos los elementos de un array a un único valor usando una función acumuladora.
   - **Ejemplo**:
     ```javascript
     const numeros = [1, 2, 3, 4, 5];
     const resultado = numeros.reduce((acc, num) => acc + num, 0); // Devuelve 15
     ```

# Características principales de React:

1.	**Componentes:**
	React se basa en el concepto de componentes. Un componente es una pieza reutilizable de código que representa una parte de la interfaz de usuario. Puedes pensar en ellos como bloques de construcción que pueden encapsular tanto la estructura como la lógica de una parte específica de la UI.

2.	**Virtual DOM:**
		React utiliza un DOM virtual para optimizar las actualizaciones de la interfaz de usuario. En lugar de actualizar el DOM real directamente (que puede ser costoso en términos de rendimiento), React primero actualiza un DOM virtual y luego aplica solo los cambios necesarios al DOM real. Esto mejora la eficiencia y el rendimiento.

3.	**Unidirectional Data Flow (Flujo de datos unidireccional):**
	React sigue un flujo de datos unidireccional, lo que significa que los datos fluyen desde el componente padre hacia los componentes hijos. Este enfoque ayuda a hacer que el código sea más predecible y fácil de depurar.

4.	**JSX (JavaScript XML):**
	React introduce una sintaxis especial llamada JSX, que permite escribir HTML dentro del código JavaScript. Aunque JSX no es obligatorio, es comúnmente utilizado por los desarrolladores de React porque hace que la estructura del componente sea más intuitiva.

5.	**Ecosistema y comunidad:**
	React tiene un ecosistema enorme con una gran cantidad de bibliotecas y herramientas de soporte (como React Router para el enrutamiento y Redux para la gestión del estado). Además, cuenta con una comunidad activa, lo que significa que siempre hay soluciones y recursos disponibles.

6.	**React Native:**
	React también sirve como base para React Native, un framework que permite crear aplicaciones móviles nativas para iOS y Android utilizando los mismos principios y componentes que en ReactJS, pero renderizando interfaces nativas en lugar de componentes HTML.

    