//PRIMER MECANISMO PARA MANEJAR LA ASINCRONIA
//Con los callbacks no se tiene un manejo adecuado de los errores.

function cuadradoCallback(valor, callback){
    setTimeout(() => {
        callback(valor, valor * valor);
    }, 0 | Math.random() * 100)
}

cuadradoCallback(3, (valor, result) => {
    console.log("Iniciar callback");
    console.log(`Callback: ${valor}, ${result}`)
});