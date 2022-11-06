
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//Ejemplo para recorrer array
function* iterator(array){
    for(let ele of array){
        yield ele;
    }
}

const iter = iterator(["Oscar", "Miguel", "Martina"]);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);