//Iterar los valores de una lista
const array = ["Hola", 2, 4, 6, false, undefined];

//Forma antigua (Poco eficiente)
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//Forma ES6 (Más eficiente) .forEach()
array.forEach(valor => {
    console.log(valor);
})

//Ejemplo
let suma = 0;
const arrayNums = [3, 11, 5, 29, 40, 20, 56];
arrayNums.forEach(num => {
    suma+= num;
})

console.log(`La suma vale: ${suma}`);

//Método .find()

const listaObjetos = [
    {nombre: "Alan", edad: 27},
    {nombre: "Aura", edad: 19},
    {nombre: "Justicia", edad: 10},
    {nombre: "Luz", edad: 33}
]

/*const objetoBuscar = listaObjetos.find(persona => {
    if(persona.nombre === "Justicia"){
        return true;
    }
})*/

/*const objetoBuscar = listaObjetos.find(persona => {
    return persona.nombre === "Alan";
})*/

const objetoBuscar = listaObjetos.find(persona => persona.nombre)

console.log(objetoBuscar.edad);

//Otra forma con destructuración de objetos
const { edad } = listaObjetos.find(p => p.nombre === "Aura");
console.log(edad);