/* MÉTODOS ESTÁTICOS CON STATIC y LOS METODOS OBTENEDORES Y ESTABLECEDORES: GET AND SET. Estos últimos en javascript no se tratan como métodos sino como propiedades.

En JS no existe modificadores de acceso, todo es público. No hay clases abstractas ni interfaces. */

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, raza) {
    super(nombre, genero);
    this.nombre = nombre;
    this.genero = genero;
    this.raza = null;
  }
  sonar() {
    console.log("Suelto un ladrido");
  }

  // La palabra reservada static delante de métodos estáticos, el static sirve para llamar métodos sin tener que instanciar una clase.

  static ladrar() {
    console.log("Woff woff");
  }

  set setRaza(raza) {
    this.raza = raza;
  }

  get getRaza() {
    return this.raza;
  }
}

const nary = new Perro("Nary", "Peluche");
console.log(nary);
nary.setRaza = "Danessa";
console.log(nary.getRaza);
