/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */

const validarNombre = (nombre = "") => {
  //VALIDACIONES

  if (!nombre) return console.warn("No ingresaste una cadena de texto");

  if (typeof nombre !== "string")
    return console.error(`El valor ${nombre} NO es una cadena de texto`);

  //Simbolo de circunflejo^ para indicar que no puede haber nada antes de la expresion regular, y el dolar es que no puede haber nada despues. Los corchetes que son agrupadores para que lo evalue cada caracter que tiene la cadena de texto.

  //LOGICA
  let expReg = /^[A-Za-zÑñÁáÉéÍéÓóÚúÜüç\s]+$/g.test(nombre);

  return expReg
    ? console.info("El nombre ingresado es valido")
    : console.info("El nombre ingresado NO es valido");
};

validarNombre();
validarNombre(2);
validarNombre("Chanel");
