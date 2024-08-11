## Que es el diseño responsive?

Responsive Web Design (RWD) es un enfoque de diseño web que garantiza que las páginas se vean bien en todos los dispositivos, desde móviles hasta pantallas grandes. Esto se logra utilizando un diseño fluido y flexible basado en cuadrículas, imágenes flexibles y media queries en CSS. Estos permiten adaptar el contenido al tamaño de la pantalla, mejorando la experiencia del usuario. Herramientas como viewport, flexbox, y grid son clave para construir sitios web responsives.

## ¿Qué son las media querys?

on una técnica que permite aplicar estilos diferentes según las características del dispositivo en el que se visualiza una página web, como el ancho de la pantalla, la resolución, la orientación, entre otros. Esto permite crear diseños responsives, adaptando el contenido para que se vea bien en dispositivos móviles, tablets, y computadoras de escritorio.

Por ejemplo, puedes usar una media query para cambiar el diseño cuando la pantalla es menor a 600 píxeles de ancho:

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

En este caso, cuando la pantalla sea de 600 píxeles o menos, el fondo del cuerpo cambiará a color azul claro.
Las media queries son fundamentales para el diseño web responsive y permiten crear sitios que se adaptan fluidamente a diferentes tamaños de pantalla y dispositivos.

## ¿Que es el viewport?
El viewport es la parte visible de una página web en un dispositivo y varía en tamaño según el dispositivo (por ejemplo, es más pequeño en un móvil que en una computadora). Antes de la llegada de dispositivos móviles, las páginas web se diseñaban con tamaños fijos para pantallas de computadoras. Con HTML5, se introdujo el uso de la etiqueta `<meta>` para permitir a los diseñadores web controlar el viewport, ajustando el ancho de la página al dispositivo y estableciendo el nivel de zoom inicial.

Configuración del Viewport:

Se recomienda incluir la siguiente etiqueta `<meta>` en todas las páginas web:

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

        width=device-width: Establece el ancho de la página para que coincida con el ancho de la pantalla del dispositivo.
	    initial-scale=1.0: Establece el nivel de zoom inicial cuando la página se carga.

Importancia de Ajustar el Contenido al Viewport:

Los usuarios suelen desplazarse verticalmente en sitios web, pero no horizontalmente. Forzar a los usuarios a desplazarse horizontalmente o a hacer zoom para ver el contenido completo afecta negativamente la experiencia del usuario. Para evitar esto:

1. Evita elementos de ancho fijo grandes: Asegúrate de que el contenido se ajuste dentro del ancho del viewport.

2.	No dependas de un ancho de viewport específico: Diseña para diferentes anchos de pantalla utilizando valores relativos y evita valores absolutos que puedan causar problemas en dispositivos más pequeños.

3.	Usa media queries: Aplica estilos diferentes para pantallas pequeñas y grandes, lo que asegura que el contenido se muestre correctamente en cualquier dispositivo.

