/* Si las variables que exportas son normales, usar la desestructuración para mandarlas a llamar.
-----------------
En tus archivos sólo puedes tene una variable, funcion o clase exportada por defecto, que sale de la desestructuración, se llama de forma independiente  */

import saludar, { Saludar, PI, usuario } from "./constantes.js";

import { aritmetica as calculo} from "./aritmetica.js"; //Alias con as

console.log("Archivo modulo js");
console.log(PI, usuario);
console.log(calculo.sumar(5,4));
saludar();

let saludo = new Saludar();
saludo;