// Identificar si algún valor cumple la condición o si existe tal valor
// .some()

const array = [100, 60, 11, 7, 23, 41, 12, -9];

const res = array.some(valor => valor < 0);
console.log(res);

const existe = array.some(valor => valor === 1)
console.log(existe);

const listaObjetos = [
    {nombre: "Alan", edad: 27},
    {nombre: "Aura", edad: 19},
    {nombre: "Justicia", edad: 10},
    {nombre: "Luz", edad: 33}
]

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel");
console.log(existeMiguel);

//Cómo obtener una lista a partir de un objeto iterable con Array.from() || new Set || .keys() 
//No se suelen utilizar

const str = "Hola a todos!";
const ar_str =  Array.from(str);
console.log(ar_str);

const set = new Set([1, 2, "txt", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

const key = array.keys();
console.log(key);

const ar_key = Array.from(key);
console.log(ar_key);