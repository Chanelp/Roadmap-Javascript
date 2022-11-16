//Trabajando con objetos

const obj = {
    id: 4,
    nombre: "Lucas",
    apellido: "Ruiz",
    isDev: true,
    libros_favoritos: ["Odisea", "Iliada"],
    "4-juegos": [1, 2, 3, 4]
};

//Como acceder a las propiedades
console.log(obj["nombre"]);
console.log(obj.id);

//Pasar propiedad por variables
const prop = "isDev";
console.log(obj[prop]);

//Replicar objetos, no es muy efectivo. Porque no se copian los valores sino la referencia en memoria. Mejor usar factor de propagación
const obj2 = obj;
console.log(obj2);

obj.nombre = "Inigo";
console.log(obj);

const obj3 = { ...obj2 };
obj3.nombre = "Jualiana";

console.log(obj3.nombre);
console.log(obj2.nombre);


///Ordenar lista de objeto en función de una propiedad

const listaPeliculas = [
    { title: "Hulk", year: 2008},
    { title: "Batman", year: 2012},
    { title: "Spiderman", year: 2015},
    { title: "Superman", year: 2007}
];

console.log(listaPeliculas);

listaPeliculas.sort((a, b) => a.year - b.year);
console.log(listaPeliculas);