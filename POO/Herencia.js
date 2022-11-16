//Inheritance - Herencia 
// Para usar el constructor de una clase padre, usamos super()
//Polimorfismo : varias formas

class Persona {
    _nombre;
    _edad;
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    saludo(){
        console.log(`Hola, soy ${this._nombre} y tengo ${this._edad} años.`);
    }

    saludoDesarrollador(){

    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguajes){
        super(nombre, edad);
        this.lenguajes = lenguajes;
    }

    //Sobreescritura - Override
    saludo(){
        super.saludo();
        console.log(`Soy desarrollador de ${this.lenguajes}`);
    }
}

const dev1 = new Desarrollador("Migue", 34, "Javascript");
console.log(dev1);
dev1.saludo();


//Interfaces -> duck typing, como js es interprestado no necesita tener todo definido.
//TypeScript -> Sí podemos usar las interfaces