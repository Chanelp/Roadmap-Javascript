//Ámbito de las clases, métodos y atributos públicos, privados y protegidos

class Persona {
    //Private --> #
    //Private --> Sólo se puede acceder desde dentro de la clase
    #nombre;
    #edad;

    //Protected --> _
    //Private --> Sólo se puede acceder desde dentro de la clase y en clases descendientes
    _isDeveloper = true;

    //Función constructora
    constructor(nom, edad) {
      this.#nombre = nom;
      this.#edad = edad;
    }
  
    //Métodos. Con .this puedes acceder a un atributo
    saludo() {
      console.log(`Hola, mi nombre es ${this.#nombre}. Tengo ${this.#edad} de edad.`);
    }

    obtenNombre(){
      return this.#nombre;
    }

    getEdad(){
        return this.#edad;
    }

    setEdad(nuevaedad){
        this.#edad = nuevaedad;
    }
}

const persona1 = new Persona("Angela", 23);
persona1.saludo();
console.log(persona1.obtenNombre());

//GETTERS Y SETTERS EN OBJETOS. Estos son públicos porque se puede acceder desde fuera de la clase.

//Getter -> Métodos que nos permiten acceder a atributos/métodos privados o protegidos
const edad = persona1.getEdad();
console.log(edad);

//Setter -> Métodos que nos permiten cambiar el valor de alguno de los métodos privados o protegidos
//Quiero cambiar la edad de la persona
persona1.setEdad(31);
console.log(persona1.getEdad());