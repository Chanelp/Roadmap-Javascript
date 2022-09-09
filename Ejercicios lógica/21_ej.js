/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

//MI SOLUCION

const devolverCuadrados = (arr = undefined) => {
    //VALIDACIONES
  
    if (arr === undefined)
      return console.info("No has ingresado un arreglo numerico");
  
    if (!(arr instanceof Array))
      return console.error("Lo que ha ingresado no es un arreglo numerico");
  
    if (arr.length === 0) return console.info("Has enviado un arreglo vacio");
  
    //LOGICA
  
    const nuevoAray = [];
    arr.forEach((element) => {
      //Validacion
      if (typeof element !== "number")
        return console.error(`El valor ${element} NO es un numero`);
  
      let elevado = Math.pow(element, 2);
      nuevoAray.push(elevado);
    });
  
    return console.info(nuevoAray);
  };
  
  devolverCuadrados();
  devolverCuadrados([]);
  devolverCuadrados("");
  devolverCuadrados([1, 3, 5]);


  
  // Solucion Logica de Jon Mircha
  
  const elevarCuadrado = (arr = undefined) => {
    //VALIDACIONES
  
    if (arr === undefined)
      return console.info("No has ingresado un arreglo numerico");
  
    if (!(arr instanceof Array))
      return console.error("Lo que ha ingresado no es un arreglo numerico");
  
    if (arr.length === 0) return console.info("Has enviado un arreglo vacio");
  
    //LOGICA
  
    for (let num of arr) {
      if (typeof num !== "number")
        return console.error(`El valor ${num} NO es un numero`);
    }
  
    const newArr = arr.map((el) => el * el);
  
    return console.info(
      `Arreglo original: ${arr}.\nArreglo elevado al cuadradoo: ${newArr}`
    );
  };
  
  elevarCuadrado([9, 3]);
  