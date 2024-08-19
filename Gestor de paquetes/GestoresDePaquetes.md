## ¿Que es un gestor de paquetes?

Un gestor de paquetes es una herramienta que automatiza la instalación, actualización, configuración y eliminación de software en un sistema. Facilita la gestión de bibliotecas o módulos, asegurando que todas las dependencias del software estén correctamente instaladas y actualizadas. Los gestores de paquetes son esenciales en el desarrollo de software, ya que permiten a los desarrolladores compartir y reutilizar código, mantener sus proyectos organizados y administrar fácilmente las versiones de las bibliotecas utilizadas. Ejemplos comunes incluyen **npm** (JavaScript) y **pip** (Python).

## npm (Node Package Manager)

Es el gestor de paquetes predeterminado para Node.js, y también actúa como un entorno de ejecución de paquetes para JavaScript. Se compone de tres partes clave:

1.	**El Repositorio de Paquetes:** Un enorme repositorio en línea que contiene millones de paquetes reutilizables (también conocidos como módulos o librerías). Estos paquetes pueden ser creados por la comunidad y están disponibles para que otros los usen en sus proyectos.

2.	**El CLI de npm (Interfaz de Línea de Comandos):** Una herramienta que se utiliza desde la terminal para interactuar con el repositorio npm. Permite realizar tareas como instalar paquetes, actualizar dependencias, ejecutar scripts definidos en el proyecto, gestionar versiones de paquetes, y más.

3.	**El archivo package.json:** Este archivo es un componente esencial en cualquier proyecto que utilice npm. Contiene metadatos importantes del proyecto, como su nombre, versión, scripts, y lo más importante, las dependencias (es decir, los paquetes que el proyecto necesita para funcionar).

# Funciones Clave de npm:**

	•	Instalación de Paquetes: Con comandos como npm install, se pueden instalar las dependencias necesarias para un proyecto desde el repositorio npm.

	•	Gestión de Dependencias: Diferencia entre dependencias para producción (dependencies) y para desarrollo (devDependencies).

	•	Scripts Personalizados: npm permite ejecutar scripts definidos en el archivo package.json mediante el comando npm run. Esto permite automatizar tareas comunes como pruebas, compilación, o despliegue.

	•	Publicación de Paquetes: Los desarrolladores pueden publicar sus propios paquetes en el repositorio npm, lo que facilita compartir código con la comunidad global de desarrolladores.

	•	Gestión Global de Paquetes: npm permite instalar paquetes globalmente en el sistema, lo cual es útil para herramientas que se usan en la línea de comandos, como linters o frameworks.

**Ejemplo de uso:**

Supongamos que estás creando una aplicación en Node.js. Usarías npm para instalar todas las bibliotecas que necesitas, como Express para manejar rutas o Mongoose para conectarte a una base de datos MongoDB. Estos paquetes se instalarían en la carpeta node_modules y se listarían en package.json.

Además, si quisieras automatizar la ejecución de pruebas en tu proyecto, podrías definir un script en el archivo package.json para ejecutarlo con npm run test.