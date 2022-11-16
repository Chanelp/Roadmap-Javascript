function factorialF(num){
    let factorial = 1;

    for(let i = 2; i<=num; i++){
        factorial*= i;
    } 
    return factorial;
}

function elevar(a, b){
    return a ** b;
}

function suma(a, b){
    return a + b;
}

//Exportar funciones => 1- CommonJS: require => module.exports = {}
module.exports = {
    factorialF,
    elevar,
    suma
}