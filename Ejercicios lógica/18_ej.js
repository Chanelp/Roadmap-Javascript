/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

const contarLetras = (cadena = "") => {
  //VALIDACIONES 1- SI LA CADENA ESTA VACIA 2- SI NO ES UNA CADENA

  if (!cadena) return console.warn("No ingresaste una cadena de texto");

  if (typeof cadena !== "string")
    return console.error(`El valor ${cadena} NO es una cadena de texto`);

  //LOGICA

  let vocales = 0,
    consonantes = 0,
    signos = 0;

  //POR CADA LETRA QUE VENGA EN LA CADENA DE TEXTO, VOY A EVALUAR LAS SIGUIENTES EXPRESIONES REGULARES
  for (let letra of cadena) {
    //Expresion regular para vocales
    if (/[AEIOUÁÉÍÓÚÜaeiouáéíóúü]/.test(letra)) vocales++;

    //Expresion regular para consonantes
    if (/[QWRTYPSDFGHJKLÑZXCVBNMqwrtypsdfghjklñzxcvbnm]/.test(letra))
      consonantes++;

    if (/[,.!`:;_ -]/.test(letra)) signos++;
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
    signos,
  });
};

contarLetras("Murcielago");
