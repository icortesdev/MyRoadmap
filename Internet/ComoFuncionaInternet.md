# ¿Qué es Internet?

Internet es una red global de computadoras conectadas entre sí que se comunican a través de un conjunto estandarizado de protocolos. Lo que hoy llamamos Internet es el resultado de otro experimento llamado **ARPANET** (Advanced Research Projects Agency Network, Red de Agencias de Proyectos Avanzados de Investigación). Este fue un proyecto del Departamento de Defensa de EE.UU. en el que trataban de construir un sistema de comunicación que pudiera sobrevivir a un ataque nuclear. Con los años, se ha convertido en una red compleja y sofisticada que abarca todo el mundo.

Internet se compone de un número increíblemente grande de redes operadas independientemente; es un sistema distribuido, no hay un control central que decida cómo se enrutan los paquetes o dónde se construyen partes de la red.

Internet funciona conectando dispositivos y sistemas informáticos utilizando un conjunto de protocolos estandarizados. Estos protocolos definen cómo se intercambia información entre dispositivos y aseguran que los datos se transmitan de manera confiable y segura. El núcleo de Internet es una red global de enrutadores interconectados, responsables de dirigir el tráfico entre diferentes dispositivos y sistemas. Cuando envías datos a través de Internet, estos se dividen en pequeños paquetes que se envían desde tu dispositivo a un enrutador. El enrutador examina el paquete y lo reenvía al siguiente enrutador en el camino hacia su destino. Este proceso continúa hasta que el paquete alcanza su destino final. Para garantizar que los paquetes se envíen y reciban correctamente, Internet utiliza una variedad de protocolos, incluidos el Protocolo de Internet (IP) y el Protocolo de Control de Transmisión (TCP). IP es responsable de enrutar los paquetes a su destino correcto, mientras que TCP garantiza que los paquetes se transmitan de manera confiable y en el orden correcto.

## Términos y Conceptos Clave a Tener en Cuenta

1. **Paquete:** Una pequeña unidad de datos que se transmite a través de Internet.
2. **Enrutador:** Un dispositivo que dirige paquetes de datos entre diferentes redes.
3. **Dirección IP:** Un identificador único asignado a cada dispositivo en una red, utilizado para enrutar los datos al destino correcto.
4. **Nombre de Dominio:** Un nombre legible por humanos que se utiliza para identificar un sitio web, como google.com.
5. **DNS:** El Sistema de Nombres de Dominio es responsable de traducir los nombres de dominio a direcciones IP.
6. **HTTP:** El Protocolo de Transferencia de Hipertexto se utiliza para transferir datos entre un cliente (como un navegador web) y un servidor (como un sitio web).
7. **HTTPS:** Una versión cifrada de HTTP que se utiliza para proporcionar una comunicación segura entre un cliente y un servidor.
8. **SSL/TLS:** Los protocolos Secure Sockets Layer y Transport Layer Security se utilizan para proporcionar una comunicación segura a través de Internet.

## El Papel de los Protocolos en Internet

Un protocolo es un conjunto de reglas y estándares que definen cómo se intercambia información entre dispositivos y sistemas. Hay muchos protocolos diferentes utilizados en la comunicación por Internet, incluyendo el Protocolo de Internet (IP), el Protocolo de Control de Transmisión (TCP), el Protocolo de Datagrama de Usuario (UDP), el Sistema de Nombres de Dominio (DNS), entre otros.

Uno de los beneficios clave del uso de protocolos estandarizados es que permiten que los dispositivos y sistemas de diferentes fabricantes y proveedores se comuniquen entre sí sin problemas. Por ejemplo, un navegador web desarrollado por una empresa puede comunicarse con un servidor web desarrollado por otra empresa, siempre y cuando ambos se adhieran al protocolo HTTP.

## Creación de Aplicaciones con TCP/IP

TCP/IP es el protocolo de comunicación subyacente utilizado por la mayoría de las aplicaciones y servicios basados en Internet. Proporciona una entrega de datos confiable, ordenada y verificada por errores entre aplicaciones que se ejecutan en diferentes dispositivos.

- **Puerto:** Se utilizan para identificar la aplicación o servicio que se ejecuta en un dispositivo. A cada aplicación o servicio se le asigna un número de puerto único, lo que permite enviar los datos al destino correcto.
- **Sockets:** Combinación de una dirección IP y un número de puerto, que representa un punto final específico para la comunicación.

Al crear aplicaciones con TCP/IP, deberás asegurarte de que tu aplicación esté diseñada para funcionar con los puertos, sockets y conexiones apropiados.

## Conclusión

Internet es una red global de computadoras interconectadas que utiliza un conjunto estándar de protocolos de comunicación para intercambiar datos. Funciona conectando dispositivos y sistemas informáticos utilizando protocolos estandarizados, como IP y TCP. El núcleo es una red global de enrutadores interconectados que dirigen el tráfico entre diferentes dispositivos y sistemas. Los conceptos básicos y la terminología con la que debes familiarizarte incluyen paquetes, enrutadores, direcciones IP, nombres de dominio, DNS, HTTP, HTTPS y SSL/TLS. Los protocolos desempeñan un papel fundamental para permitir la comunicación y el intercambio de datos a través de Internet, permitiendo que los dispositivos y sistemas de diferentes fabricantes y proveedores se comuniquen sin problemas.

