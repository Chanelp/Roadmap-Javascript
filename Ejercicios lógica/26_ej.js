/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */

const promedio = (arr = undefined) => {
  //VALIDACIONES

  if (arr === undefined)
    return console.info("No has ingresado un arreglo de numeros");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.info("El arreglo esta vacio");

  if (arr.length === 1)
    return console.info("El arreglo debe tener al menos dos elementos");

  //LOGICA

  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};

promedio();
promedio([]);
promedio({});
promedio([80, 90, 10, 87]);
