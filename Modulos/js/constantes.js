export const PI = Math.PI;

export const usuario = "Melodi";
const password = "qwerty";
// export default password;

/* EXPORTAR VARIABLES O FUNCIONES POR DEFECTO. NO se pueden duplicar los default
Para importar constantes o variables por defecto, primero hacer la asignación y al final exportas. Si es una función o una clase directamente puedes colocar el default */

export default function saludar() {
    console.log("Hola modulos de ES6");
}

export class Saludar {
    constructor() {
        console.log("Exportando clase");
    }
}