/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

const aplicarDescuento = (monto = undefined, descuento = 0) => {
  //VALIDACIONES

  if (monto === undefined) return console.warn("No has ingresado el monto");

  if (typeof monto !== "number")
    return console.error(`El valor ${monto} ingresado no es un numero`);

  if (monto === 0) return console.error("El monto no puede ser 0");

  if (Math.sign(monto) === -1)
    return console.error("El monto no puede ser negativo");

  if (typeof descuento !== "number")
    return console.error(`El valor ${descuento} ingresado NO es un numero`);

  if (Math.sign(descuento) === -1)
    return console.error("El descuento no puede ser negativo");

  // LOGICA

  return console.info(
    `$${monto}-${descuento}% = $${monto - (monto * descuento) / 100}`
  );
};

aplicarDescuento();
aplicarDescuento("200");
aplicarDescuento(0);
aplicarDescuento(-1000);
aplicarDescuento(1000, "20");
aplicarDescuento(1000, -20);
aplicarDescuento(1000);
aplicarDescuento(1000, 20);
