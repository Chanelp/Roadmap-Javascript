// new Set()
//Con la estructura set nos aseguramos de que no habrá elementos repetidos.

const arr = [1, 2, 3, 4, "hi", {}, "hi", 2];
const mySet = new Set(arr);
console.log(arr);
console.log(mySet);

//Método para agregar .add()
mySet.add(90);
console.log(mySet);

//Cómo saber si contiene un elemento .has() parecido al .includes() de los arrays.
console.log(mySet.has("hi"));
console.log(arr.includes(1));

//Cuantos elementos únicos tiene un set .size
console.log(mySet.size);

//Recorrer elementos de un set con forEach
mySet.forEach(valor => {console.log(valor)});

//Método para eliminar .delete()
mySet.delete("hi");
console.log(mySet);

//Limpiar todo el set .clear()
mySet.clear();
console.log(mySet);

//Convertir un set en iterador con .values()
const it_myset = mySet.values();
console.log(it_myset);

//Usar el factor de propagación para convertir set a arreglo
const arr_myset = [...mySet];
console.log(arr_myset);