// PARAMETROS REST: Capacidad de tener parametros infinitos

/* LOS PARAMATROS REST SON UNA FORMA DE VIRTUALMENTE IR AGREGANDO PARAMETROS INFINITOS YA SEA A UNA FUNCION O VARIABLE, SE DEFINEN ANTEPONIENDO TRES PUNTOS SUSPENSIBVOS... */

function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });

  return resultado;
}

console.log(sumar(1, 2, 3, 4, 5));

function restar(x, y, ...z) {
  let igual = x - y;

  z.forEach(function (i) {
    igual -= i;
  });

  return igual;
}

console.log(restar(10, 5, 2));

/* ----- OPERADOR SPREAD, operador de propagacion 
Nos va a permitir que cuando una expresion la tengamos que expandir en situaciones en donde tengamos que guardar o almacenar multiples arguementos o elementos, lo podamos hacer.  */

// La diferencia es que REST son parametros que recibe una function, y el operador de PROPAGACION se puede estar ejecutando en cualquier sentencia

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

// Creando un nuevo arreglo aunando los dos arrays con spread operator
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// DATO CURIOSO: METODO .concat() ejemplo:

const array1 = [1, 2, 3, 4, 5];
    array2 = [6, 7, 8, 9, 10];
    array3 = [11, 12, 13, 14, 15];
    arrayFinal = array1.concat(array2, array3);

console.log(arrayFinal);
