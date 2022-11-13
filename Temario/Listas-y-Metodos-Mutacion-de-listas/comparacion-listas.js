// Cómo podemos comparar listas
// .every() => Si todos los elementos cumplen una condición.

const array = [1, -2, 3, 54, 21, 9, 7, 43, -16, "Hi"];

/*const result = array.every((value) => {
    if(typeof value === "number"){
        return true;
    } else {
        return false;
    }
});*/
const result = array.every((value) => typeof value === "number")
console.log(result);

//Comparación de listas

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

const compararArrays = (arr_1, arr_2) => {
    if(arr_1.length !== arr_2.length) return false;
    const res = arr_1.every((valor, i) => valor === arr_2[i]);
    return res;
}

console.log(compararArrays(arr1, arr2));

const arr3 = [2, 4, 7, 6];

console.log(compararArrays(arr1, arr3));