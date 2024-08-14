
const a = 5;
const b = 10;

//Funcion

function MostrarSuma() {

    const resultado = a + b;

    document.getElementById('resultado').innerHTML = "El resultado de la suma es: " + resultado;
}

//Objetos
const usuario =
{
    nombre: "John",
    apellido: "Doe",
    age: 50,
    genero: "Hombre",
};
const cars = ["Saab", "Volvo", "BMW", "Tesla", "Audi", "Skoda", "Opel"];

const textoUsuario = `El usuario ${usuario.nombre} ${usuario.apellido} es un ${usuario.genero} de ${usuario.age} años tienen un ${cars[3]}`

document.getElementById('infoUsuario').innerHTML = textoUsuario

//Booleanos
document.getElementById('boolean').innerHTML = Boolean(10 > 9);

//Comparaciones

function myFunction() {
    let voteable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "No has introducido tu edad";
    } else {
        voteable = (age < 18) ? "Demasiado joven" : "Suficiente edad";
    }
    document.getElementById("comparaciones").innerHTML = voteable + " para votar";
}


// Ejemplo de un loop for en JavaScript

// Este bucle for imprimirá los números del 1 al 5 en la consola.
for (let i = 1; i <= 5; i++) {
    console.log('Número:', i);
}

// Explicación:
// - let i = 1: Inicializa la variable i con un valor de 1.
// - i <= 5: Condición que se evalúa antes de cada iteración. El bucle se ejecuta mientras i sea menor o igual a 5.
// - i++: Incrementa el valor de i en 1 después de cada iteración.
// - console.log('Número:', i): Imprime el valor actual de i en la consola.


//Ejemplo foreach

const letras = ['a', 'b', 'c'];

letras.forEach((letra, indice) => {
  console.log(`Letra en el índice ${indice} es ${letra}`);
});

//Ejemplo while

let contador = 0;

while (contador < 5) {
  console.log('Contador:', contador);
  contador++;
}