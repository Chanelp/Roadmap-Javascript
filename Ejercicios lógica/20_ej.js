/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */

const validarCorreo = (correo = "") => {
  //VALIDACIONES

  if (!correo) return console.warn("No ingresaste un correo electronico");

  if (typeof correo !== "string")
    return console.error(`El valor ${correo} NO un correo`);

  //Simbolo de circunflejo^ para indicar que no puede haber nada antes de la expresion regular, y el dolar es que no puede haber nada despues. Los corchetes que son agrupadores para que lo evalue cada caracter que tiene la cadena de texto.

  //LOGICA
  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      correo
    );

  return expReg
    ? console.info(`${correo} es un email valido`)
    : console.info(`${correo} NO es un email valido`);
};

validarCorreo();
validarCorreo(2);
validarCorreo("chanelp,27@gmail.com");
