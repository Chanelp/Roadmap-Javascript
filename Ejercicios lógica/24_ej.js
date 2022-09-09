/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

const ordenarArreglo = (arr = undefined) => {
  //VALIDACIONES

  if (arr === undefined)
    return console.info("No has ingresado un arreglo de numeros");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.info("El arreglo esta vacio");

  //VALIDAR QUE CADA ELEMENTO ES UN NUMERO
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} NO es un numero`);
  }

  //LOGICA

  return console.info({
    arr,
    asc: arr.map((el) => el).sort(), //Sort() metodo para ordernar de forma ascendente
    desc: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

ordenarArreglo();
ordenarArreglo([]);
ordenarArreglo(true);
ordenarArreglo([3, 4, true]);
ordenarArreglo([1, 4, 7, 2]);
