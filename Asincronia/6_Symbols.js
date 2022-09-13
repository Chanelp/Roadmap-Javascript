
/* Una vez creado un Symbol su valor se va a mantener privado y para uso interno
    - Suelen agregarse como caracteristicas de objetos, como una propiedad.
    - Funcionan como propiedades privadas, para ocultar ciertas propiedades.
    - Mandamos a llamar directamente la funcion constructora sin new
    - Nos oermiten crear identificadores unicos, identificadores de referencia
    - Usar notacion de corcheres [] para declarar propiedad privada a objetos
    - Le podemos poner una descripcion dentro de comillas
*/

//Nuevos tipos de datos en Javascript (Symbol es primitivo).

let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);

const NOMBRE = Symbol("name");
const SALUDAR = Symbol("saludar");

const persona = {
    [NOMBRE]: "Charlotte"
}

console.log(persona);

persona.NOMBRE = "Nora";
console.log(persona);

console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
    console.log("Ciao");
}

persona[SALUDAR]();

for(let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

// COMO LISTAR LOS SIMBOLOS --> Object.getOwnPropertySymbols();
console.log(Object.getOwnPropertySymbols(persona));