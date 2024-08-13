
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