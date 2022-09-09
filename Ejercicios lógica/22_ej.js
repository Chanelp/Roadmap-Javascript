/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

//MI SOLUCION

const devolverMinMax = (arr = undefined) => {
  //VALIDACIONES
  if (arr === undefined) return console.warn("No se ha ingresado un arreglo");

  if (!(arr instanceof Array))
    return console.error(`El valor ingresado ${arr} no es un arreglo`);

  let numMax = 0;
  let numMin = 1;

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El elemento ${num} no es un numero`);

    return console.info(
      `Maximo: ${Math.max(...arr)} - Minimo: ${Math.min(...arr)}`
    );
  }

  const nuevoArr = [];
  nuevoArr.push(numMax);
  nuevoArr.push(numMin);
  return console.info(nuevoArr);
};

devolverMinMax([3, 5, 7, -9, 12, 1]);

// SOLUCION DE JON MIRCHA

const arrayMinMax = (arr = undefined) => {
  //VALIDACIONES

  if (arr === undefined)
    return console.info("No has ingresado un arreglo numerico");

  if (!(arr instanceof Array))
    return console.error("Lo que ha ingresado no es un arreglo numerico");

  if (arr.length === 0) return console.info("Has enviado un arreglo vacio");

  //LOGICA

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} NO es un numero`);
  }

  return console.info(
    `Arreglo original ${arr}\nValor mayor: ${Math.max(
      ...arr
    )}\nValor menor: ${Math.min(...arr)}`
  );
};

arrayMinMax([]);
arrayMinMax([1, 2, false]);
arrayMinMax([2, 4, 6, 33, 9, 21, 5, 19, -12, 2]);
