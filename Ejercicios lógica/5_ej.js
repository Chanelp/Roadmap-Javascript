/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

const cadena = "Hola mundo";

const invertirCadena = (cadena) => 
    (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(cadena.split("").reverse().join(""));

invertirCadena(cadena);