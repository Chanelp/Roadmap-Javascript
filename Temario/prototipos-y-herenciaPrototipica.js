// Un prototipo en js es un mecanismo por el cual un objeto puede heredar de un objeto padre, sus atributos y metodos

/* Clases: Modelo a seguir.
Objetos: Es una instancia de una clase
    Atributos: es una caracteristica o propiedad del objeto (son variables dentro de un objeto).
    Metodos: son las acciones que un objeto puede realizar (son funciones dentro de un objeto)*/

// Funcion constructora. Tanto los atributos como los metodos tienen que colgar del objeto this. Las funciones dentro deben declarse como se hace noramlmente, no como array function ni otras formas.

// A la funcion constructora le asignamos solo las variables o atributos, y los metodos fuera, al prototipo.

// function Animal(nombre, genero) {
//     // Atributos
//     this.nombre = nombre;
//     this.genero = genero;

//     // Metodos
//     this.sonar = function() {
//         console.log("Hago sonidos porque estoy vivio");
//     }

//     this.saludar = function(){
//         console.log(`Hola, me llamo ${this.nombre}`)
//     }
// }

const snoopy = new Animal("Lobi", "Lobo macho"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");

function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}

// Asignar prototipo: primero mandar a llamar el nombre de la funcion constructora, luego .protoype, .nombreDelMetodo

// Metodos agregados al protototipo de la funcion constructora
Animal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo");
};

Animal.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre}`);
};

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
lolaBunny.saludar();

// ******** HERENCIA PROTOTIPICA

function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

// PERRO ESTA HEREDANDO DE ANIMAL

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// SOBREESCRITURA DE METODOS DEL PROTOTIPO PADRE EN EL HIJO

Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};

Perro.prototype.ladrar = function () {
  console.log("Guau guau!!!");
};

// COMPROBANDO HERENCIA POR CONSOLA

const puchi = new Perro("Puchi", "Peludo", 12);
console.log(puchi);
puchi.ladrar();
puchi.sonar();

const ucho = new Animal("Ucho", "Viralata");
console.log(ucho);
ucho.sonar();
ucho.saludar();

// HERENCIA EN CLASES

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    // Con el metodo super() se manda a llamar el constructor del metodo padre
    super(nombre, genero);

    this.tamanio = tamanio;
  }

  sonar() {
    console.log("Mi sonido es un ladrido");
  }

  ladrar() {
    console.log("Guauuu guauuu!!");
  }
}
