//PRIMER MECANISMO PARA MANEJAR LA ASINCRONIA

function cuadradoCallback(valor, callback){
    setTimeout(() => {
        callback(valor, valor * valor);
    }, 0 | Math.random() * 100)
}

cuadradoCallback(3, (valor, result) => {
    console.log("Iniciar callback");
    console.log(`Callback: ${valor}, ${result}`)
});