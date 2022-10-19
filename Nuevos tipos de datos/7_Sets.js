/**
 * Los Set son una estructura que nos permiten crear un arreglo sin elementos duplicados a partir de un arreglo dado
 * Se crean con new Set()
 * Para ver su longitud, usamos .size
 * Para añadir un elemento, usamos add()
 * Pueden ser recorridos con cualquier método de arreglos
 * Para acceder a la posicion de un set, utilizamos el metodo from de Array y lo guardamos en una variable para que el set se convierta de un objeto a un arreglo -> const arr = Arra.from(set)
 */

 let set = [1, 2, 3, 3, "js", false, true, true, {}];
 console.log(set);
 
 const set2 = new Set(set);
 console.log(set2);

 set2.add(81);
 console.log(set2);
 console.log(set2.size);

//Recorrer set: for & forEach

for(item of set) {
    console.log(item);
}

set2.forEach(item => console.log(item));

//Acceder a la posición de un set: Array.from(set)

const arr = Array.from(set);
console.log(arr[0]);

//Otras funciones

//Eliminar un elementos

set2.delete(1);
console.log(set2);
console.log(set2.has("js"))
console.log(set2.has("hi"));
set2.clear();
console.log(set2);