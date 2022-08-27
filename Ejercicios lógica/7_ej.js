    /* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

    const palindromo = (palabra = "") => {
        if(!palabra) return console.warn("No ingresaste una palabra o frase");

        palabra = palabra.toLocaleLowerCase();
        let alReves = palabra.split("").reverse().join("");

        return (palabra === alReves)
         ? console.info(`Sí es palíndormo. Palabra original ${palabra}. Palabra alreves ${alReves}`)
         : console.info(`NO es palíndormo. Palabra original ${palabra}. Palabra alreves ${alReves}`);
    }

    palindromo("Reconocer");