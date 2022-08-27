/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */

const capicua = (numero = 0) => {

    //Validaciones
    if (!numero) return console.warn("No has ingresado un numero");

    if (typeof numero !== "number") return console.info(`Tu ${numero} no es un numero.`);
  
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");
  
    return (numero === alReves)
      ? console.log(
          `Sí es capicúa. Número original: ${numero}. Númmero al reves: ${alReves}`
        )
      : console.log(
          `NO es capicúa. Número original: ${numero}. Númmero al reves: ${alReves}`
        );
  };
  
  capicua(2002);