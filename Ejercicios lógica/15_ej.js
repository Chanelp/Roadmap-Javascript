/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined)
      return console.warn("No ingresaste el numero a convertir");
  
    if (typeof numero !== "number")
      return console.error(`El valor ${numero} NO es un numero`);
  
    if (base === undefined)
      return console.warn("No ingresaste la base a convertir");
  
    if (typeof base !== "number")
      return console.error(`El valor ${base} NO es un numero`);
  
    //Convertir de base binaria a decimal
    if (base == 2) {
      return console.info(
        `${numero} en Base ${base} = ${parseInt(numero, base)} en Base 10`
      );
    } else if (base == 10) {
      return console.info(
        `${numero} en Base ${base} = ${numero.toString(2)} en Base 2`
      );
    } else {
      console.error("El tipo de base a convertir no es valido");
    }
  };
  
  convertirBinarioDecimal();
  convertirBinarioDecimal("2");
  convertirBinarioDecimal(1101, 2);
  convertirBinarioDecimal(4, 10);
  convertirBinarioDecimal(114, 10);
  