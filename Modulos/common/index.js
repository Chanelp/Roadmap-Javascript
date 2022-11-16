//Ways to export and import modules
//1- CommonJS - require
//const moduleMath = require("./maths");

// 2- Import ES6 - Import

const { elevar, suma, factorialF } = require("./maths");

const fact = factorialF(5);
console.log(fact);

const result = elevar(3, 3);
console.log(result);

const total = suma(3, 8);
console.log(total);