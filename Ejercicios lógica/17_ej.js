/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */

const calcularAnios = (fecha = undefined) => {
    //VALIDACIONES
  
    if (fecha === undefined) return console.warn("No ingresaste la fecha");
  
    if (!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha valida");
  
    // LOGICA: Restar a la fecha de hoy, la fecha ingresada. Expresado en milisegundos
  
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
      aniosEnMilisegundos = 1000 * 60 * 60 * 24 * 365,
      aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMilisegundos);
  
    return (Math.sign(aniosHumanos) === -1)
      ? console.info(
          `Faltan ${Math.abs(aniosHumanos)} para el ${fecha.getFullYear()}.`
        )
      : (Math.sign(aniosHumanos) === 1)
      ? console.info(
          `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`
        )
      : console.info(`No hay diferencia, estamos en el año actual ${fecha.getFullYear()}`);
  };
  
  calcularAnios(new Date(2022, 4, 23))
  