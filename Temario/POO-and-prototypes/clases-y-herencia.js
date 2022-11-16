// CLASES Y HERENCIA

// EN LAS CLASES NO SE PASAN LOS PARAMETROS, SINO EN EL CONSTRUCTOR

class Animal {
  constructor(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
  }

  // EN LAS CLASES NO TIENES QUE SACAR LOS METODOS FUERA NI USAR PROTOTYPE DELANTE. Y SE DEFINEN IGUAL EN LOS OBJETOS LITERALES SIN LA PALABRA FUNCTION

  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
}

// HERENCIA

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

const lola = new Perro("Lola", "danes", 5);
console.log(lola);
lola.ladrar();
