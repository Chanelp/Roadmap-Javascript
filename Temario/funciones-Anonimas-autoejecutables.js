// Patrón muy utilizado para la encapsulación y ejecución de código en vanilla o usando jquery

// Estructura: función dentro de parentesis y termina con punto y coma. Tendrá parentesis para parámetros y paréntesis para ejecución.

(function () {
  console.log("Mi primer IIFE");
})();

(function () {
  console.log("Mi segunda IIFE");
})();

(function (d, w, c) {
  c.log("Este es un console.log");
})(document, window, console);

//Formas de escribir las funciones Anónimas Autoejecutables

//Clásica
(function () {
  console.log("versión Clásica");
})();
//La Crockford (JavaScript The Good Parts)
(function () {
  console.log("versión Crockford");
})();
//Unaria
+(function () {
  console.log("versión Unaria");
})();
//Facebook
!(function () {
  console.log("versión Facebook");
})();
