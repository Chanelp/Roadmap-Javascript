//Clases en js

class Persona {
  //Atributos, si son variables públicas no hace falta declarlas así, puedes quitarlas.
  nombre;
  edad;
  isDev;

  //Función constructora
  constructor(nombre, edad, isDev) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDev = isDev;
  }

  //Métodos. Con .this puedes acceder a un atributo
  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre}. Tengo ${this.edad} de edad.`);
  }
}

//Instanciar obejto con new
const persona1 = new Persona("Mar", 28, true);
console.log(persona1);
persona1.saludo();

//Conceptos diferentes || instanceof -> Similar a typeof pero para clases

let numero = 60; //Inicialiación
console.log(typeof numero);

const persona2 = new Persona("Oscar", 30, true);  //Instanciación
console.log(persona2 instanceof Persona);