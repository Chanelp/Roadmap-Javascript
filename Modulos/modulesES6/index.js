//import {suma, elevar, nombre} from './modulos/matematicas';
import * as MathModule from "./modulos/matematicas.js";
import getAutor, { libro } from "./modulos/literatura.js";

const sum = MathModule.suma(90, 4);
console.log(sum);

const potencia = MathModule.elevar(3, 3);
console.log(potencia);

console.log(MathModule.nombre);
console.log(getAutor());
console.log(libro);
