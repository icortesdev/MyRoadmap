## Formularios HTML.

Un formulario HTML se utiliza para recopilar datos del usuario. Los datos del usuario suelen enviarse a un servidor para su procesamiento.

1. form: -->el elemento se utiliza para crear un formulario HTML para la entrada de datos del usuario, es un contenedor para diferentes tipos de elementos de entrada, tales como: campos de texto, casillas de verificación, radio buttons , botones de envío, etc.

2. input: Es el elemento mas usado en formularios, se puede mostrar de muchas maneras dependiendo del type del atributo, por ejemplo:
<!--<input type="text">	-->Muestra un campo de entrada de texto de una sola línea.
<!--<input type="radio">	-->Muestra un botón de radio (para seleccionar una de las muchas opciones)
<!--<input type="checkbox">-->	Muestra una casilla de verificación (para seleccionar cero o más de muchas opciones)
<!--<input type="submit">-->	Muestra un botón de envío (para enviar el formulario)
<!--<tipo de entrada="botón">	-->Muestra un botón en el que se puede hacer click

3. elemento label: define una etiqueta para muchos elementos de formulario, es útil para los usuarios de lectores de pantalla, ya que el lector de pantalla leerá en voz alta la etiqueta cuando el usuario se enfoque en el elemento de entrada. también ayuda a los usuarios que tienen dificultades para hacer clic en áreas muy pequeñas (como botones de opción o casillas de verificación), porque cuando el usuario hace clic en el texto dentro del elemento label, se activa el botón de opción o la casilla de verificación.
El atributo for de la etiqueta label debe ser igual al atributo id del elemento input para vincularlos juntos.

 4. Radio buttons: <!--<input type="radio"> -->los radio buttons dejan al usuario seleccionar una opcion de un numero limitado de opciones. 

5. Checkbox: <!--<input type="checkbox"> -->ldeja seleccionar entre ninguna y mas opciones en un numero limitado de opciones.

6. Submit button: <!--<input type="submit"> -->lEs un boton para enviar los datos del formulario a un controlador de formularios. El controlador de formularios suele ser un archivo en el servidor con un script para su procesamiento datos de entrada.
El controlador de formularios se especifica en los formularios action atributo.