/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

const separarParesImpares = (arr = undefined) => {
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

  return console.info({
    pares: arr.filter((num) => num % 2 === 0),
    impares: arr.filter((num) => num % 2 === 1),
  });
};

separarParesImpares([31, 52, 48, 83, 14, 75]);
