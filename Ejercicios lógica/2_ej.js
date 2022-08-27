/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

let corte = 7,
 cadena = "Murcielago", 
 recortada = "";

const recortar = (cadena, corte) => {
  for (let index = 0; index <= corte; index++) {
    recortada += cadena[index];
  }

  return recortada;
};

console.log(recortar(cadena, corte));
