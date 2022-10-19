/**
 * Un generador es convertir el código de una función en iterable
 * Una función que nos permite trabajar con las interfaces de los elementos iterables.
 * Se definen colocando un asterisco * al lado de la palabra function
 * Se usa yield como un return especial que va a detener la función
 * 
 */

function* iterable() {
    yield "Hola 1";
    console.log("Primer saludo");
    yield "Hola 2";
    console.log("Segundo saludo");
    yield "Hola 3"
}

let iterador = iterable();

for (let y of iterador) {
    console.log(y)
}

let arr = [...iterable()];
console.log(arr);