/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

const factorial = (numero = undefined) => {
  if (numero === 0) return console.warn("No ingresaste un número");

  if (typeof numero !== "number")
    return console.error(`El valor ${numero} no es un número`);

  if (numero < 0)
    return console.error("NO se puede sacar factorial de números negativos");

  if (Math.sign(numero) === -1) return "EL numeor no puede ser negativo";

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info(`El factorial de ${numero} es ${factorial}`);
};

factorial(4);
