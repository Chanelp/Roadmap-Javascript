//Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array = ["Santiago", "La Vega", "Azua", "Barahona"];

const val = array.map(v => {console.log(v)});

const eMap = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(eMap);

// .filter() => Pasar condiciones

const listaObjetos = [
    {nombre: "Alan", edad: 27},
    {nombre: "Aura", edad: 19},
    {nombre: "Justicia", edad: 10},
    {nombre: "Luz", edad: 33},
    {nombre: "Ann", edad: 3}
]

/*const personasMayores = listaObjetos.filter(obj => {
    if(obj.edad >= 18){
        return true;
    } else{
        return false;
    }
});*/

const personasMayores = listaObjetos.filter(obj => obj.edad >= 18);
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Ann");
console.log(nuevaLista);

// .reduce() => Para casos específicos
const valores = [2, 4, 6, 8, 1];

const suma = valores.reduce((acumulador, actual, indice, arrOriginal) => {
    console.log(acumulador);
    console.log(actual);
    console.log(indice);
    console.log(arrOriginal);
    return acumulador + actual;
})

console.log(suma);