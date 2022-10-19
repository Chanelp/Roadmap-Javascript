/**
 * Iterable: el elemento cuyo contenido puede ser recorrido.
 * Iterador: el mecanismo o apuntador que está recorriendo los elementos.
 * Para acceder a la interfaz de iterador usar [Symbol.iterator]()
 * La propiedad next nos sirve para mostrar los elementos. Cuenta con value y done
 */

const cadenaIterbale = "La vida es bella";
const arrIterable = [1, 2, 3, 4, 5];
const setIterable = new Set([1, true, true, 2, false, 3]);
const mapaIterable = new Map([["nombre", "Chanel"], ["correo", "corr@gmail.com"]]);

const iterador = cadenaIterbale[Symbol.iterator]();

let next = iterador.next();

while (!next.done) {
    console.log(next.value);
    next = iterador.next();
}