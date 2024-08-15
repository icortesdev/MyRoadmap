# ¿Qué es el DOM en JavaScript?

El DOM (Document Object Model) es una interfaz de programación que permite a los desarrolladores web interactuar con documentos HTML y XML. Básicamente, es una representación en memoria del documento estructurado como un árbol, donde cada nodo del árbol es un objeto que representa una parte del documento, como un elemento, un atributo o un texto.

![alt text](image.png)

## Conceptos Clave del DOM

1. **Documento como un Árbol de Nodos**:
   - El DOM representa un documento HTML como un árbol jerárquico de nodos.
   - Cada elemento HTML, atributo y fragmento de texto en el documento se convierte en un nodo en este árbol.
   - El nodo más alto de este árbol es el objeto `document`, que representa todo el documento HTML.

2. **Nodos**:
   - **Element Nodes**: Representan las etiquetas HTML (`<div>`, `<p>`, `<a>`, etc.).
   - **Attribute Nodes**: Representan los atributos de un elemento HTML (`class`, `id`, etc.).
   - **Text Nodes**: Representan el contenido de texto de los elementos HTML.

3. **Interacción con el DOM usando JavaScript**:
   - JavaScript puede acceder y manipular el DOM, lo que permite modificar el contenido, la estructura y el estilo de una página web de manera dinámica.

## Acceder a Elementos del DOM

Una de las tareas más comunes es acceder a elementos específicos en el DOM para leer o modificar su contenido o atributos.

### Métodos comunes para acceder a elementos:

1. **`document.getElementById(id)`**:
   - Retorna el elemento con el `id` especificado.
   - Ejemplo:
    
     `const encabezado = document.getElementById('miEncabezado');`
   

2. **`document.getElementsByClassName(className)`**:
   - Retorna una colección (HTMLCollection) de todos los elementos con la clase especificada.
   - Ejemplo:
    
     `const items = document.getElementsByClassName('item');`
     

3. **`document.getElementsByTagName(tagName)`**:
   - Retorna una colección de todos los elementos con el nombre de etiqueta especificado.
   - Ejemplo:
    
     `const parrafos = document.getElementsByTagName('p');`
   

4. **`document.querySelector(selector)`**:
   - Retorna el primer elemento que coincide con el selector CSS especificado.
   - Ejemplo:
     
     `const primerItem = document.querySelector('.item');`
   

5. **`document.querySelectorAll(selector)`**:
   - Retorna todos los elementos que coinciden con el selector CSS especificado (NodeList).
   - Ejemplo:
    
     `const todosLosItems = document.querySelectorAll('.item');`
     

## Manipulación del DOM

Una vez que has accedido a un elemento del DOM, puedes manipularlo de varias maneras:

1. **Modificar el contenido**:
   - Usando `innerHTML`:
     
     `const parrafo = document.getElementById('miParrafo');`
     `parrafo.innerHTML = 'Nuevo contenido';`
     
   - Usando `textContent`:
    
    ` parrafo.textContent = 'Nuevo texto';`
 

2. **Modificar atributos**:
   - Usando `setAttribute` y `getAttribute`:
     
     `const imagen = document.getElementById('miImagen');`
     `imagen.setAttribute('src', 'nueva-imagen.jpg');`
     `const src = imagen.getAttribute('src');`
    
3. **Modificar estilos**:
   - Directamente con la propiedad `style`:
   
     `parrafo.style.color = 'red';`
     `parrafo.style.fontSize = '20px';`
   

4. **Añadir y remover clases**:
   - Usando `classList`:
     
     `const div = document.querySelector('div');`
     `div.classList.add('activo');`
     `div.classList.remove('inactivo');`

5. **Añadir y eliminar elementos**:
   - **Crear un nuevo elemento**:
     
     `const nuevoElemento = document.createElement('div');`
     `nuevoElemento.textContent = 'Hola, soy un nuevo div!';`
     `document.body.appendChild(nuevoElemento);`
     
   - **Eliminar un elemento**:
     
     `const elementoParaEliminar = document.getElementById('miDiv');`
     `elementoParaEliminar.remove();`
 

## Eventos del DOM

El DOM también permite responder a eventos, como clics del ratón, teclas presionadas, o cuando un documento se ha cargado completamente.

- **Escuchar eventos**:

  `const boton = document.getElementById('miBoton');`
  `boton.addEventListener('click', function() {`
    `alert('Botón clickeado!');`
  `});`


  El DOM es una parte fundamental del desarrollo web moderno, ya que permite a los desarrolladores crear experiencias interactivas y dinámicas al manipular la estructura, el contenido y el estilo de las páginas web en tiempo real. Comprender cómo interactuar con el DOM usando JavaScript es esencial para cualquier desarrollador web.