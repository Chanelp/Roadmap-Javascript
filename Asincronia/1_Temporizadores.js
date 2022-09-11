/*Temporizadores (setTimeout & setInterval) : 
Manera de poder ejecutar a posterior funciones o ciertas acciones.
* setTimeout -> recibe una funcion a ejecutar, y el tiempo expresado en milisegundos
* setInterval -> ejecuta la funcion cada x tiempo
*/

console.log("Inicio")

let temporizador = setTimeout (() =>
    console.log("Esto se ejecuta una sola vez"), 1000);

let temporizador2 = setInterval(() => 
console.log(new Date().toLocaleTimeString()) , 1000); 

clearTimeout(temporizador);
clearInterval(temporizador2);

//Funciones contraparte, que cancelan estos temporizadores
// clearTimeout, clearInterval --> para que funcione, el setTimeout debe ser guardado en una variable, recibe esa variable.