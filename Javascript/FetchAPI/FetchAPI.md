## El Fetch API 

 Es una herramienta moderna que permite realizar peticiones HTTP de manera sencilla desde los navegadores web. Es una mejora respecto a la forma antigua de hacer peticiones con el objeto XMLHttpRequest, ya que es más fácil de usar y hace el código más limpio y legible.

# ¿Qué hace Fetch API?

	•	Envía peticiones HTTP: Te permite hacer solicitudes a URLs para obtener o enviar datos a un servidor.
	•	Asincronía: Fetch trabaja con Promesas, lo que facilita el manejo de procesos asincrónicos, como esperar por una respuesta   del servidor sin bloquear la ejecución del código.
	•	Respuesta flexible: Una vez que obtienes la respuesta, puedes manejar diferentes formatos de datos como JSON, texto, imágenes, etc.

¿Cómo usarlo?

1. **Enviar una petición:** El método fetch() recibe una URL y envía una petición al servidor.

`fetch('https://ejemplo.com/api')`
   ` .then(response => response.json())  // Procesa la respuesta como JSON`
   ` .then(data => console.log(data))    // Muestra los datos`
    `.catch(error => console.error('Error:', error));  // Maneja errores`

2. **Usar async/await:** Esto hace que el código sea más fácil de leer.

`const response = await fetch('https://ejemplo.com/api');`
`const data = await response.json();`
`console.log(data);`

3. **Manejo de errores:** Utiliza try...catch para gestionar cualquier error que ocurra durante la solicitud.

`try {`
    `const response = await fetch('https://ejemplo.com/api');`
    `if (!response.ok) throw new Error('Error en la petición');`
    `const data = await response.json();`
    `console.log(data);`
`} catch (error) {`
    `console.error('Error:', error);`
`}`

# Ejemplo práctico

Imaginemos que quieres obtener una lista de usuarios de un API y mostrarla en tu página web. El código podría verse así:

`(async () => {`
   `const response = await fetch('https://jsonplaceholder.typicode.com/users');`
   `const users = await response.json();`
  ` document.querySelector('#content').innerHTML = users.map(user => `<li>${user.name} (${user.email})</li>`).join('');`
`})();`

**En este ejemplo:**

1.  fetch() hace la petición al servidor.
2.	await response.json() convierte la respuesta en formato JSON.
3.	document.querySelector('#content').innerHTML inserta los datos de los usuarios en la página.

# Resumen:

	•	Fetch API simplifica las peticiones HTTP comparado con métodos anteriores.
	•	Es flexible para manejar diferentes tipos de datos y gestionar errores.
	•	Se puede combinar con async/await para un código más limpio y fácil de leer.