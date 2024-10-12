# Creación Chatbots WhatsApp mediante Builderbot:

## Como iniciar builderbot:

`pnpm create builderbot@latest --provider=baileys --database=memory --language=js`

## 3 pilares para construir un chatbot:

	•	Flow:  Encargado de construir todo el contexto de la conversación.
	•	Provider: Como si de un conector se tratara, el objetivo es poder cambiar fácilmente de proveedor de WhatsApp en minutos sin el riesgo de dañar otras partes del bot.
	•	Database: De igual manera que el provider, tiene la capacidad de poder cambiar de capa de persistencia de datos (guardar datos) sin invertir tiempo en reescribir.


Memory = mock

**Para cambiar de proveedor:**

`const BaileysProvider = require('@bot-whatsapp/provider/*	PROVEEDOR ELEGIDO*’)`


## Estructura flow:
```
const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'Buenas', 'buenas'], {
    sensitive: false // Para que detecte indistintamente mayúsculas y minúsculas
}) ```
    .addAnswer('🙌 Hola bienvenido a este *Chatbot*')
    .addAnswer([
        'Te comparto los siguientes links de interés sobre el proyecto',
        '👉 *doc* para ver la documentación',
        '👉 *gracias* para ver la lista de videos',
        '👉 *discord* para unirte al discord',
    ], null, null, [flowDocs, flowGracias, flowTuto, flowDiscord]);
  ```

## Eventos:

El bot responde a determinados eventos como el envío de una nota de voz, una ubicación o un documento pdf.


* `const flowBienvenida = addKeyword(EVENTS.WELCOME).addAnswer`('Hola, bienvenido a mi tienda online')

* `const flowNotaVoz = addKeyword(EVENTS.VOICE_NOTE).addAnswer`('te escucho en un momento')

* `const flowUbicacion = addKeyword(EVENTS.LOCATION).addAnswer`('te escucho en un momento')

* `const flowMedia = addKeyword(EVENTS.MEDIA).addAnswer`('te escucho en un momento')

* `const flowDocumento = addKeyword(EVENTS.DOCUMENT).addAnswer`('te escucho en un momento')

**Enviar archivos multimedia:**

`const flujoMultimedia = addKeyword('hola')
    .addAnswer('Te envío una foto',
        {
            media: 'https://www.laopinion.co/sites/default/files/2016/10/06/imagen/simio.jpg'
        }
    )`

## Mas opciones addAnswer:

**Capture:**

* Espera la captura de la respuesta antes de volver a responder

`const flujoMultimedia = addKeyword('hola')
    .addAnswer([‘Como estas!’, 
{
Capture: true
})
.addAnswer(‘Gracias por la respuesta’)`

**Delay:**

* Espera dos segundos para enviar la respuesta

`const flujoMultimedia = addKeyword('hola')
    .addAnswer([‘Como estas!’, 
{
Delay: 2000
}`

**Buttons:**

Muestra botones 
```javascript
const flujoMultimedia = addKeyword(‘hola’)
.addAnswer([‘Bienvenido que quieres ver’, {
buttons: [
{
body: ‘cursos’
},
{
body: ‘Libros’
},
{
body: ‘Podcast’
}
]
}])
```

## Array de flujos hijos: 


 * `const A = obligatorio: un texto "hola",array ["Hola", "como estas"]`
 * `const B = opcional null = es un objeto {media, delay, capture, buttons}`
 * `const C = opcional null = es una función callback function!`
 * `const D = opcional = es un array de flujos hijos!`
 

`const flujoDespedida = addKeyword('chao').addAnswer('Nos vemos')` el flujo despedida solo se activa con la palabra chao

```javascript
const flujoBienvenida = addKeyword(‘hola’)
.addAnswer(‘Bienvenido a mi tienda’)
.addAnswer(’¿Como puedo ayudarte’, null, null, [flujoDespedida])
```
 el flujo despedida se activa solo cuando se ha producido la respuesta de como puedo ayudarte 


**Flujos dinámicos:**
```
const API = 'https://fakestoreapi.com/products'

const flujoDeProductos = addKeyword('VER PRODUCTOS')
    .addAnswer('Consultando items en la base de datos...', null,
        async (ctx, { flowDynamic }) => {
            const respuesta = await axios(API)
            
            for(const item of respuesta.data){
                if(contador > 4) break; // cuando contador es mayor que 4 rompe el ciclo
                contador++ //contador incrementa 1 
                flowDynamic({body: item.title, media: item.image})
            }
        })

const flujoPrincipal = addKeyword('hola')
    .addAnswer('Bienvenido a mi ecommerce a continuacion puedes ver una lista de productos',
        {
            buttons: [
                {
                    body: 'VER PRODUCTOS'
                }
            ]
        },
        null,
        [flujoDeProductos]
    )
```
    

**Funcionalidad AddAction:**

`const flujoOn = addKeyword('prender').addAction(() => swith = true)`
`const flujoOff = addKeyword('apagar').addAction(() => swith = false)`

Cuando dices prender  el swith cambia a false

## Modularizar flujos:

Al desplegar un bot en produccion podemos tener muchos flows por lo que para evitar problemas al mantenerlo y que nuestro codigo se convierta en codigo espagueti conviene modularizar los flujos con los que trabajamos.

Una estructura de carpetas a la hora de crear un bot puede ser esta: 

```src
├── app.ts
├── database
│   └── index.ts
├── flow
│   ├── index.ts
│   └── welcome.flow.ts
│   └── bye.flow.ts
│   └── media.flow.ts
├── provider
│   └── index.ts
└── services
    └── ai.ts```