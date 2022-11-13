//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const shoppingList = ["1 saco de arroz", "Lentejas y habichuelas", "Verduras", "Sal", "Sazones", "Carnes", "Huevos"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
shoppingList.push("Aceite de girasol");
console.log(shoppingList);

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
shoppingList.pop();
console.log(shoppingList);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const favsFilm = [
    {titulo: "El gran pez", director: "Tim Burton", fecha: 2003},
    {titulo: "Batman Asciende", director: "Christopher Nolan", fecha: 2012},
    {titulo: "La vida es bella", director: "Roberto Benigni", fecha: 1997},
    {titulo: "Las ventajas de ser invisible", director: "Stephen Chbosky", fecha: 2012}
];

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const posterior = favsFilm.filter(peli => peli.fecha > 2010);
console.log(posterior);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directors = favsFilm.map(peli => peli.director);
console.log(directors);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titles = favsFilm.map(peli => peli.titulo);
console.log(titles);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const dirAndTitle = directors.concat(titles);
console.log(dirAndTitle);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const factorP = [...directors, ...titles];
console.log(factorP);