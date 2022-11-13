// Ordenar con .sort() || Número negativo para ordenar de menor a mayor
const arrayNumerico = [9, 10, 18, 2, 22, 38, 82, 1, 93, 15, 4];
arrayNumerico.sort((a,b) => {
    if(a>b){
        return 1;
    } else if(b>a) {
        return -1
    } else {
        return 0;
    }
})
console.log(arrayNumerico);

const arrayNum = [19, 1, 18, 2, 22, 38, 82, 1, 93, 15, 4];
arrayNum.sort((a, b) => b - a);
console.log(arrayNum);


//Interesante en array de objetos
const listaObjetos = [
    {nombre: "Alan", edad: 27},
    {nombre: "Aura", edad: 19},
    {nombre: "Justicia", edad: 10},
    {nombre: "Luz", edad: 33}
]

listaObjetos.sort((a, b) => {
    if(a.edad < b.edad){
        return -1;
    } else if(a.edad > b.edad) {
        return 1;
    } else {
        return 0;
    }
})

console.log(listaObjetos);