/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */

const quitarDuplicados = (arr = undefined) => {
  //VALIDACIONES

  if (arr === undefined)
    return console.info("No has ingresado un arreglo de numeros");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.info("El arreglo esta vacio");

  if (arr.length === 1)
    return console.info("El arreglo debe tener al menos dos elementos");


  //Resolucion convencional con filter e indexOf
  // return console.info({
  //     original: arr,
  //     sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
  // })


  //SOLUCION MAS OPTIMA: SET nuevo tipo de dato
  return console.info({
    original: arr,
    sinDuplicados: [...new Set(arr)],
  });
};

quitarDuplicados();
quitarDuplicados([]);
quitarDuplicados([1]);
quitarDuplicados(true);
quitarDuplicados(["x", 3, 29, "x", "4", 4, "4"]);

// Explicación ejercicio 25:
// filter crea un nuevo array a partir del antiguo, recorriendo los valores de este aplicando la condición. Si la cumplen, pasan. 
// En este caso la condición es que el índice del parámetro que está siendo recorrido sea igual al índice de la PRIMERA vez que se vea a ese valor.
// [5,4,5,3,2] 
// El índice de 5 es 0. Comparado con su propio indexOf (la primera vez que se le ve, en el índice 0) da lo mismo (0===0), pasa.
// El índice de 4 es 1. Comparado con su propio indexOf(la primera vez que se le ve, en el índice 1) da lo mismo (0===0), pasa.
// El índice del segundo 5 es 2. Comparado con su propio indexOf (la primera vez que se le ve, en el índice 0), no da lo mismo (0!==2), no pasa._
// Y así...
// p.d self no es necesario, se puede poner arr sin problema.