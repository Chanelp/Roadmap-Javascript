/* Las promesas convienen cuando tenemos una concatenacion de varios procesos asincronos.

Las promesas son una evolucion a las callbacks, nos permiten tener un codigo mas elegante y ordenado, y nos permite manejar en cualquier peticion concatenada que tengamos, el error.

El resolve es como el retorno positivo de la promesa en cada de que se cumpla; el reject es el return negativo.

.then() --> es el siguiente bloque que se va a ejecutar una vez que se cumpla la fucion inicial. Podemos tener tantos metodos .then como se necesiten. Al final de los .then() va .catch().

El .then() recibe una funcion que es el resolve.

.catch() --> va a capturar el error resultante del reject.

El setTimeout ayuda a simular la asincronia.

*/

function cuadradoPromise(valor) {
  //SI el valor ingresado no es un numero, rechaza la promesa y manda el mensaje

  if (typeof valor !== "number") {
    return Promise.reject(`Error. El valor ingresado ${valor} no es un numero`);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        valor,
        result: valor * valor,
      });
    }, 0 | (Math.random() * 10));
  });
}

cuadradoPromise(2)
  .then((obj) => {
    console.log("Inicio de la promesa");
    console.log(`Promesa: ${obj.valor}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.valor}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.valor}, ${obj.result}`);
    return cuadradoPromise("5");
  })
  .then((obj) => {
    console.log(`Promesa: ${obj.valor}, ${obj.result}`);
    console.log("Fin de la promesa");
  })
  .catch((err) => console.error(err)); //Este mecanismo de rechazo de la promesa valida en cualqueir punto
