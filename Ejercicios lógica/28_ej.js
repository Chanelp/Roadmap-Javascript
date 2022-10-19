//Recorrer objetos

const citys = {
    usa: "New York",
    rd: "Santiago",
    italy: "Venecia"
}

const objArr = Object.values(citys)
console.log(objArr);

// Otra forma

console.log(Object.entries(citys));