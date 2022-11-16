//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const personalInfo = {
    name: "Chanel",
    lastname: "Paredes",
    age: 20,
    height: 1.65,
    isDev: true
};

//- Una variable que obtenga tu edad a partir del objeto anterior
const { age } = personalInfo;
console.log(age);

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const newList = [personalInfo, {
    name: "Jesús",
    lastname: "Son of God",
    age: 33,
    height: 1.75,
    isDev: true
},{
    name: "Books",
    lastname: "Knowlegde",
    age: 3,
    height: 0.75,
    isDev: true
}];

console.log(newList);

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const orderList = newList.sort((a, b) => a.age - b.age);
console.log(orderList);