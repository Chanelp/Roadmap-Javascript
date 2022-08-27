/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */

const CADENA = "Hola mundo";
let contador = 0;

const miFunción = (cadena) => {
  for (const letra in cadena) {
    contador++;
  }
  console.log(
    `La cadena introducida: "${cadena}", tiene un total de ${contador} caracteres.`
  );
};

// const otraForma = (cadena) => {
//   contador = cadena.length;
//   console.log(contador)
// };

miFunción(CADENA);