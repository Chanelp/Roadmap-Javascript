// TRY, CATCH, FINALLY Y THROW NEW ERROR PARA ERRORES PERSONALIZADOS

// EJEMPLO

try {
    console.log("En el try se agrega el codigo a evaluar");
    noExiste;
    console.log("Segundo mensaje en el try");

} catch (error) {
    console.log("Catch, captura cualquier error surgido o lanzado en el try");
    console.log(error);

} finally {
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch");
}

// EJEMPLO 

try{
    let numero = 'y';

    if (isNaN(numero)){
        throw new Error("El caracter introducido no es un numero");
    }

    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}

