//Gestión de errores 
//Hay que tratar de envolver los programas en try - catch

const miFuncion = valor => {
    if(typeof valor === "number"){
        return 2 *  valor;
    }
    throw new Error("El valor debe ser de tipo número.");
}

const numero = 8;

//Código que puede fallar
try{
    console.log("Está ejecutándose de manera correcta");
    let doble = miFuncion(numero);
    console.log(doble);
} 
//En caso de fallar, quiero que ejecutes
catch(e) {
    console.error("ERROR!");
    console.error(e);
}

//Errores pre-generados: InternalError, SyntaxError, TypeError, rangeError, ReferenceError