// /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

///^[A-Za-zÑñÁáÉéÍéÓóÚúÜüç\s]+$/g

//FUSION de ejercicio 19 y 20

const validarPatron = (cadena = "", patron = undefined) => {
    //VALIDACIONES
  
    if (!cadena)
      return console.warn("No ingresaste una cadena de texto a evaluar");
  
    if (typeof cadena !== "string")
      return console.error(`El valor ${cadena} NO es una cadena de texto`);
  
    if (patron === undefined)
      return console.warn("No ingresaste un patron a evaluar");
  
    if (!(patron instanceof RegExp))
      return console.error(`El valor ${patron} NO es una expresion regular`);
  
    //Simbolo de circunflejo^ para indicar que no puede haber nada antes de la expresion regular, y el dolar es que no puede haber nada despues. Los corchetes que son agrupadores para que lo evalue cada caracter que tiene la cadena de texto.
  
    //LOGICA
    let expReg = patron.test(cadena);
  
    return expReg
      ? console.info(`${cadena} cumple con el patron ingresado`)
      : console.info(`${correo} NO cumple con el patron ingresado`);
  };
  
  validarPatron();
  validarPatron(2);
  validarPatron("Chanel Paredes", /^[A-Za-zÑñÁáÉéÍéÓóÚúÜüç\s]+$/g);
  