/*Van a epserar a que algo se cumpla para poder seguir ejecutando el proceso.

    - La funcion debe ser declarada con async, de lo contrario no se puede usar el await.

    - Las funciones asincronas por lo general van a ser dadas de una promesa.

    - Para el manejo de errores conviene un bloque try catch.

    - La optimizacion a nivel de sintaxis es que al trabajar con funciones asincronas, cada peticion la puedo guardar en un variable, y estar evitando hacer uso de .then().

    Las funciones asincronas no vienen a sustituir a las promesas. El catch puede capturar el reject de la promesa.

    Esto sirve mucho cuando estan cargando elementos del dom.

    */

function cuadradoPromise(valor) {
  if (typeof valor !== "number") {
    return Promise.reject(`El valor ingresado ${valor} no es un numero`);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        valor,
        result: valor * valor,
      });
    }, 0 | (Math.random() * 100));
  });
}

async function funcionAsincronaDeclarada(params) {
  try {
    console.log("Start Async Function");

    //Cada cuadradoPromuse() devuelve una promesa, y cada promesa un objeto.
    let obj = await cuadradoPromise(2);
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    obj = await cuadradoPromise("5");
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    console.log("End Async Function");
  } catch (err) {
    console.error(err);
  }
}

funcionAsincronaDeclarada();

// MISMO CODIFO PERO EN FUNCION EXPRESADA
/*Van a epserar a que algo se cumpla para poder seguir ejecutando el proceso.

    - Las funciones asincronas por lo general van a ser dadad de una promesa .

    - Para el manejo de errores conviene un bloque try catch.

    - La optimizacion a nivel de sintaxis es que al trabajar con funciones asincronas, cada peticion la puedo guardar en un variable, y estar evitando hacer uso de .then().

    Las funciones asincronas no vienen a sustituir a las promesas. El catch puede capturar el reject de la promesa.

    */

function cuadradoPromise(valor) {
  if (typeof valor !== "number") {
    return Promise.reject(`El valor ingresado ${valor} no es un numero`);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        valor,
        result: valor * valor,
      });
    }, 0 | (Math.random() * 100));
  });
}

async function funcionAsincronaDeclarada(params) {
  try {
    console.log("Start Async Function");

    //Cada cuadradoPromuse() devuelve una promesa, y cada promesa un objeto.

    let obj = await cuadradoPromise(2);
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    obj = await cuadradoPromise("5");
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    console.log("End Async Function");
  } catch (err) {
    console.error(err);
  }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
  try {
    console.log("Start Async Function");

    //Cada cuadradoPromuse() devuelve una promesa, y cada promesa un objeto.

    let obj = await cuadradoPromise(6);
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    obj = await cuadradoPromise(8);
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    obj = await cuadradoPromise("9");
    console.log(`Async Function ${obj.valor}, ${obj.result}`);

    console.log("End Async Function");
  } catch (err) {
    console.error(err);
  }
};

funcionAsincronaExpresada();
