//Generar id

function* generar(){
    let id= 0;

    while(true){
        id++;

        if(id === 10){
            return id
        }
        yield id; //Esperando a que se vuelva a llamar
    }
}

const gen = generar();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
