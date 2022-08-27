/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

//MI SOLUCION

const text =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae soluta iste officiis inventore officia amet repudiandae, incidunt error culpa autem mi Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, minus beatae? Pariatur nesciunt quia ab nostrum magnam, adipisci inventore, odit cumque doloremque nihil at eum iusto, dignissimos aliquid tempore explicabo!";

const expReg = /ipsum/gi;
const veces = text.match(expReg);
console.log(`La palabra se repite ${veces.length} de veces`);




//SOLUCION DE VIDEO MAS EFICIENTE

const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("NO ingresaste el texto largo");

  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0;
  let contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};

textoEnCadena(
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae soluta iste officiis inventore officia amet repudiandae, incidunt error culpa autem mi Lorem ipsum dolor sit amet consectetur dolor adipisicing elit. Doloremque, minus beatae? Pariatur nesciunt quia ab nostrum magnam, adipisci inventore, odit cumque doloremque nihil at eum iusto, dignissimos aliquid tempore explicabo",
  "dolor"
);
