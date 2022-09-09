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

  return console.info({
    original: arr,
    sinDuplicados: arr.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  });
};

quitarDuplicados();
quitarDuplicados([]);
quitarDuplicados([1]);
quitarDuplicados(true);
quitarDuplicados(["x", 3, 29, "x", 4, 4]);
