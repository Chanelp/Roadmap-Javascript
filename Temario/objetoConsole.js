// OBJETO CONSOLE Y METODOS

console.log(console);

console.error("Esto es un error");

console.warn("Esto es un aviso");

console.info("Esto es un mensaje informativo");

console.log("Un registro de lo que está pasando en nuestra aplicación");

let nombre = "maira",
 apellido = "sanchez",
 edad = 65;

console.log(`Hola mi nombres es %s %s y tengo %d años`, nombre, apellido, edad);

console.clear();

console.dir(document);

console.group("Aquí empieza el group collapse");
console.log("Pertece al grupo");
console.log("Otro elemento");
console.groupEnd();

console.table(Object.entries(console).sort()); //.SORT para orden alfabeticamente


const numeros = [1, 2, 3, 4, 5],
 vocales = ["a", "e", "i", "o", "u"];
console.table(numeros);

console.table(vocales);

// Para calcular el rendimiento de la aplicacion cuando consumimos recursos como Apis. console.time. Debe tener un mismo alias al inicio y al final

console.time("Time");
const arreglo = Array(100);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd("Time");

// count para contar las veces que se repite algo
for (let x = 0; x <= 10; x++) {
    console.count("codigo for");
    console.log(x);
}

// .assert() puede servir para pruebas
let z = 8,
 y = 6,
 pruebaZY = "Se espera que y sea menor que z";

console.assert(z<y, (z,y,pruebaZY));