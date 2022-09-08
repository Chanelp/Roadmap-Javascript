/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */
//ej

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined) return console.warn("No ingresaste un numero");

  if (typeof grados !== "number")
    return console.warn(`El valor ${grados} ingresado de no es un numero`);

  if (unidad === undefined)
    return console.warn("No ingresaste en tipo de grado a convertir");

  if (typeof unidad !== "string")
    return console.warn("No es un cadena de texto");

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor de unidad no reconocido,");

  if (unidad === "C") {
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
  } else if (unidad === "F") {
    return console.info(
      `${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
    );
  } else {
    return console.warn("El tipo de grados a convertir no es valido");
  }
};

convertirGrados(0, "C");
