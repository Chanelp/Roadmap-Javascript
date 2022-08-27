let contador = 0; //Variable que controla el ciclo

// BUCLE O CICLO WHILE

while(contador < 10){ //Condicion
    console.log("while: " + contador);
    contador++; //Incremento o decremento 
}

do {
    console.log("do while: " + contador);
    contador++;
} while(contador < 10);

// CICLO FOR
// Inicializacion de la  variable; condicion; incremento o decrmento... en el parentesis, las lineas que va a ejecutar el for

for( let i = 0; i <= 10; i++){
    console.log("For : " + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// VARIANTES: FOR IN --> Permite recorrer o iterar las propiedades de un objeto

const persona = {
    nombre: "Sorlanlly",
    apellido: "Sanchez",
    edad: 46
}

for (const propiedad in persona) {
    console.log(propiedad);
}

for (const propiedad in persona) {
    console.log(`Key: " ${propiedad}, Value: ${persona[propiedad]}`);
}

/* Para acceder a la propiedad de un objeto en un CICLO, se usa la notacion de [corchetes] */

// ---------------------------------------

// VARIANTES: FOR OF --> Permite recorrer todos los elementos de cualquier  objeto que sea iterable en js

for (const elemento of numeros) {
    console.log(elemento);
}
/*Ejemplo iterar cadena de caracteres*/

let cadena = "Hola mundo";

for (const caracter of cadena) {
    console.log(caracter)
}