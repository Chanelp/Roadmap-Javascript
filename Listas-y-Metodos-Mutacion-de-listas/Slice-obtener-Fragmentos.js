//Cómo obtener una lista a partir de otra .slice()

const array = ["Hola", 1, 2, 3, true, null, "Adios"];

//NO MODIFICA EL VALOR ORIGINAL
console.log(array.slice(1, 4));
const arr2 = array.slice(2, 5);
console.log(arr2);

const arr3 = array.slice(2, -2);
console.log(arr3);