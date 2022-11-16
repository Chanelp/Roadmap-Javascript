/*- Una clase llamada "Estudiante" que tenga:
- Una variable llamada nombre
- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
- Crea una nueva instancia de "Estudiante"
- Haz la llamada al método obtenDatos
*/

class Estudiante {
    nombre;
    asiganturas;

    constructor(nombre){
        this.nombre = nombre;
        this.asiganturas = ["Javascript", "HTML", "CSS"];
    }

    obtenDatos(){
        return {
            nombre: this.nombre,
            asignaturas: this.asiganturas
        }
    }
}

const estudiante1 = new Estudiante("Jose");
console.log(estudiante1.obtenDatos());
const estudiante2 = new Estudiante("Marta");
console.log(estudiante2.obtenDatos());