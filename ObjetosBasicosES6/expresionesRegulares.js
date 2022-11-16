/* EXPRESIONES REGULARES
Las expresiones regulares se usan mayormente para validar Formularios
test --- te devuelve un verdadero o falso si se cumple el patron o no dentro de la cadena que estás buscando.
exec ---- te deuelve un arreglo con un objeto dentro con información de las coincidencias, en que caracter lo encontró en la fuente de datos.*/

let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque numquam porro veritatis, non in illum delectus maxime adipisci aspernatur, labore rerum architecto quos fugit explicabo quas minus, eaque eveniet? lorem";

let expReg = new RegExp("lorem", "ig");
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

let expReg2 = /lorem/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
