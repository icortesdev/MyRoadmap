# ¿Qué es un Dominio?

Los nombres de dominio son una parte clave de la infraestructura de Internet. Proporcionan una dirección legible por humanos para cualquier servidor web disponible en Internet.

Se puede llegar a cualquier ordenador conectado a internet a traves de una dirección IP, IPv4(ej. 192.0.2.172) o IPv6(ej. 2001:db8:8b73:0000:0000:8a2e:0370:1337). Los ordenadores pueden manejar estas direcciones pero a las personas les cuesta saber quien esta ejecutando el servidor oque servicio ofrece el sitio web. Las direcciones IP son dificiles de recordad y pueden cambiar con el tiempo. Para resolver esto utilizamos direcciones legibles por los humanos llamadas **Dominios**.

# Estructura de los Dominos.

Un nombre de dominio tiene una estructura simple hecha de varias partes (puede ser una sola parte, dos, tres...), separadas por puntos y lea de derecha a izquierda:

Cada una de esas partes proporciona información específica sobre todo el nombre de dominio.

![alt text](image-1.png)

**TLD**

Los TLD le dicen a los usuarios el propósito general del servicio detrás del nombre de dominio. Los TLD más genéricos (.com, .org, .net) no requieren que los servicios web cumplan con ningún criterio en particular, pero algunos TLD aplican políticas más estrictas, por lo que es más claro cuál es su propósito. Por ejemplo:

1. TLD locales como **.us, .fr, o .se** puede requerir que el servicio se brinde en un idioma determinado o se aloje en un país determinado — se supone que deben indicar un recurso en un idioma o país en particular.
2. TLD que contienen **.gov** solo se les permite ser utilizados por los departamentos gubernamentales.
3. El **.edu** TLD es solo para uso de instituciones educativas y académicas.

Los TLD pueden contener caracteres especiales y latinos. La longitud máxima de un TLD es de 63 caracteres, aunque la mayoría son alrededor de 2–3.

**Etiqueta (o componente)**
Las etiquetas son las que siguen al TLD. Una etiqueta es una secuencia de caracteres insensible a casos de entre uno y sesenta y tres caracteres de longitud, que contiene solo las letras A a través Z, dígitos 0 a través 9, y el carácter '-' (que puede no ser el primer o último carácter en la etiqueta). a, 97, y hello-strange-person-16-how-are-you son todos ejemplos de etiquetas válidas.

 # ¿Cómo funciona una solicitud DNS?

cuando desea mostrar una página web en su navegador es más fácil escribir un nombre de dominio que una dirección IP. Echemos un vistazo al proceso:

1. Tipo mozilla.org en la barra de ubicación de su navegador.
2. Su navegador le pregunta a su ordenador si ya reconoce la dirección IP identificada por este nombre de dominio (usando una caché DNS local). Si lo hace, el nombre se traduce a la dirección IP y el navegador negocia los contenidos con el servidor web. Fin de la historia.
3. Si su ordenador no sabe qué IP está detrás del mozilla.org nombre, continúa preguntando a un servidor DNS, cuyo trabajo es precisamente decirle a su ordenador qué dirección IP coincide con cada nombre de dominio registrado.
4. Ahora que el ordenador conoce la dirección IP solicitada, su navegador puede negociar contenidos con el servidor web.

# Diferencia entre URL y Dominio.

Un Localizador Uniforme de Recursos (URL, por sus siglas en inglés), a veces llamado dirección web, contiene el nombre de dominio de un sitio, así como otra información, incluyendo el protocolo y la ruta. Por ejemplo, en la URL ‘https://cloudflare.com/learning/’, ‘cloudflare.com’ es el nombre de dominio, mientras que ‘https’ es el protocolo y ‘/learning/’ es la ruta a una página específica en el sitio web.