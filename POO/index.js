// Programación Orientada a Objetos: forma más profesional, encapsulada y segura de hacer funcionalidad poo.

//Objetos primitivos
const persona = {
    nombre: "Jessica",
    edad: 27,
    isDeveloper: true,
    saludo: function(){
        console.log("Hola");
    }
}
console.log(persona);

//Function Factory
const crearPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hello");
        }
    }
}

const newPerson = crearPersona("Mary", 30, true);

console.log(newPerson);
newPerson.saludo();