## ¿Qué es DNS?

**El Sistema de Nombres de Dominio (DNS)** es como la guía telefónica de Internet. Los humanos acceden a la información en línea a través de nombres de dominio, como github.com o youtube.com. Los navegadores web interactúan a través de direcciones de Protocolo de Internet (IP). El DNS traduce los nombres de dominio en direcciones IP para que los navegadores puedan cargar los recursos en Internet.

Cada dispositivo conectado a Internet tiene una dirección IP única que otras máquinas usan para encontrar ese dispositivo. Los servidores DNS eliminan la necesidad de que los humanos memoricen direcciones IP como 192.168.1.1 (en IPv4) o direcciones IP alfanuméricas más complejas como 2400:cb00:2048:1::c629
(en IPv6).

## ¿Cómo funciona el DNS?

El proceso de resolución DNS implica convertir un nombre de host (como www.example.com) en una dirección IP amigable para el ordenador (como 192.168.1.1). Cada dispositivo en Internet tiene una dirección IP, y esa dirección es necesaria para encontrar el dispositivo adecuado, similar a cómo una dirección de calle se usa para encontrar una casa específica. Cuando un usuario quiere cargar una página web, debe ocurrir una traducción entre lo que el usuario escribe en su navegador (example.com) y la dirección amigable para la máquina necesaria para ubicar la página web example.com.

Para entender el proceso detrás de la resolución DNS, es importante conocer los diferentes componentes de hardware por los que debe pasar una consulta DNS. Para el navegador web, la búsqueda DNS ocurre "entre bastidores" y no requiere interacción del ordenador del usuario aparte de la solicitud inicial.

## Hay 4 servidores DNS involucrados en la carga de una página web:

1. **solucionador recursivo (también conocido como recursor de DNS):** El recursor puede considerarse como un bibliotecario encargado de encontrar un libro específico en una biblioteca. Es un servidor diseñado para recibir consultas de las máquinas clientes a través de aplicaciones como navegadores web. El recursor es responsable de realizar solicitudes adicionales para satisfacer la consulta DNS del cliente.

2. **Servidor raíz:** El servidor raíz es el primer paso en la traducción de nombres de host legibles por humanos a direcciones IP. Se puede pensar en él como un índice en una biblioteca que señala diferentes estantes de libros; normalmente sirve como referencia a ubicaciones más específicas.

3. **Servidor TLD:** El servidor de dominio de nivel superior (TLD) se puede considerar como un estante específico de libros en una biblioteca. Este servidor es el siguiente paso en la búsqueda de una dirección IP específica y aloja la última parte de un nombre de host (en example.com, el servidor TLD es "com").

4. **Servidor autoritativo:** Este servidor final puede verse como un diccionario en un estante de libros, en el que un nombre específico se traduce en su definición. El servidor autoritativo es la última parada en la consulta de nombres. Si el servidor autoritativo tiene acceso al registro solicitado, devolverá la dirección IP del nombre de host solicitado al Recursor DNS (el bibliotecario) que hizo la solicitud inicial.