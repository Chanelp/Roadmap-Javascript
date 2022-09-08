/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

const numeroPrimo = (numero = undefined) => {
  //VALIDACIONES
  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un número`);
  if (numero === 0) return console.warn("No ingresaste un número");

  if (numero === 1) return console.warn("El numero no puede ser 1");

  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");

  let divisible = false;

  //CICLO DE COMPROBACION
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.log(`El numero {numero}, NO es primo`)
    : console.log(`El numero {numero}, SI es primo`);
};

numeroPrimo(6);
