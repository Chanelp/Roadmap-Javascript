const numeroImpar = (numero = undefined) => {
    if(numero===undefined) return console.warn("No ingresaste un numero");

    if(typeof numero!== "number") return console.warn(`El valor {numero} ingresado, NO es un numero`);

    return (numero % 2) === 0
     ? console.log(`El numero {numero} es Par.`)
     : console.log(`El numero {numero} es Impar.`);
}

numeroImpar();
numeroImpar(54);
numeroImpar(-196);