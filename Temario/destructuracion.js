// DESESTRUCTURACION CON ARRAYS

const numeros = [1, 2, 3];

const [uno, dos, tres] = numeros;

console.log(uno, dos, tres);

/*  DESESTRUCTURACION CON OBJETOS
Para que la desestructuracion funcione en los objetos, es muy importante que la variable que trato de crear se llame igual que la propiedad que pretendo aislar en una sola variable */

let persona = {
  nombre: "Mariano",
  apellido: "Paredes",
  edad: 50,
};

let { nombre, apellido, edad } = persona;

console.log(nombre, apellido, edad);
