//- Una función sin parámetros que devuelva siempre "true"
const everTrue = () => true;
console.log(everTrue());

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const salute = new Promise((resolve, reject) => {
    resolve();
    reject();
});

salute
    .then(() => setTimeout(() => console.log("Hola soy una promesa"), 5000))
    .catch(() => console.log("ERROR"));

    
//- Una función generadora de índices pares automáticos

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