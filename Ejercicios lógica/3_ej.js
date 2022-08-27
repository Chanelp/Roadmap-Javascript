/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

     const MISTRING = "Mora, Feid y Jhay",
      ESPACIO = ' ';

     const separar = (stg, sepa) => {
        let arreglo = stg.split(sepa);
        console.log(arreglo);
    }

    separar(MISTRING, ESPACIO);