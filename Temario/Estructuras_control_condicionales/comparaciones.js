//Comparaciones 
//Igualdad

// == SOLO COMPARA EL VALOR
// === COMPARA EL VALOR Y EL TIPO

if (5 == 5){
    console.log("Igualdad debil");
}

if (5 === 5){
    console.log("Igualdad fuerte");
}

let a = 5;
console.log(typeof a);

let b = "5";
console.log(typeof b);

//Comparacion de desigualdad - 3 tipos.

let c = 4;
let d = "4";

//Si es diferente en valor
if (c != d){
    console.log("C es diferente a D - debil")
}

//Si es diferente en valor o en tipo
if (c !== d){
    console.log("C es diferente a D - debil")
}

//COMPARACIONES MAYORES Y MENORES QUE

let max = 10;
let min = 5;

if (max > min) {
    console.log("Max es mayor que min");
}

if (max >= min) {
    console.log("Max es mayor o igual que min");
}

if (max > min) {
    console.log("Max es mayor que min");
}

if (min < max) {
    console.log("Min es menor que max");
}

if (min <= max) {
    console.log("Min es menor o igual que max");
}