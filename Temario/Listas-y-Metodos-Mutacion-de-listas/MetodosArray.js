const array = [1, 2, 3, 4, 5, 6];
const var1 = {id: 45};
const array2 = [true, null, "texto", 2, undefined, var1];
console.log(array2);

//Acceder a los valores de un array: A través de su posición con el corchete [indice]
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[3]);

//Cómo INTRODUCIR valores con métodos, para mutar los arrays: .push() , .unshift()

// .push() => Valores al final, todos los valores que quieras.
array2.push(false, "YES", 3);
console.log(array2);

// .unshift() => Valores al principio, todos los valores que quieras.
array2.unshift("Inicio", "Start");
console.log(array2);

//Como ELIMINAR valores en array con métodos, mutar el array: .pop() .shift()

// .pop() => Eliminar valores al final
array2.pop();
console.log(array2);

// .shift() => Eliminar valores al inicio
array2.shift();
console.log(array2);

//Método multiuso, para eliminar, modificar, añadir valores a nuestro array => .splice(x, y, z)

const array3 = [1, 2, 3, 4, 5, 6];

//Eliminar valores: .splice(indice, numValoresAEliminar)
array3.splice(2, 1);
console.log(array3);

//Agregar valores: .splice(indice, 0, ValoresAgregar)
array3.splice(2, 0, "nuevo");
console.log(array3);

//Modificar valores: .splice(indice, 1, ValorAgregar)
array3.splice(2, 1, 3);
console.log(array3);