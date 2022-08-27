// PALABRAS RESERVADAS: BREAK AND CONTINUE

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// BREAK
for (let i = 0; i < numeros.lenth; i++){
    console.log(numeros[i]);
    if (i === 5){
        break; //El break se sale de la estructura de control
    }
}

// CONTINUE

for (let i = 0; i < numeros.length; i++){
    if (i === 5){
        continue; //El continue se va a saltar la iteracion, generalmente invocada en una condicional, y va a seguir con la ejecucion normal del ciclo hasta que termine.
    }
    console.log(numeros[i]);
}

// EJERCICIO DE NUMEROS IMPARES

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x = 0; x < numbers.length; x++){
    if (numbers[x] % 2 === 0){
        continue;
    }

    console.log(numbers[x]);
}

// EJERCICIO DE NUMEROS PARES

for (let x = 0; x < numbers.length; x++){
    if (numbers[x] % 2 === 1){
        continue;
    }

    console.log(numbers[x]);
}