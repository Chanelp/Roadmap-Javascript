/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

const texto = "Cambio ";
const vez = 3;

const miFuncion = (texto, vez) => {
  let repito = texto.repeat(vez);
  console.log(repito);
};

miFuncion(texto, vez);