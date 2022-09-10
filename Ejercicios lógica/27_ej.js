/* EJERCICIO DE CLASES

27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
        - Todos los datos del objeto son obligatorios.
        - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
        - Valida que el título no rebase los 100 caracteres.
        - Valida que el director no rebase los 50 caracteres.
        - Valida que el año de estreno sea un número entero de 4 dígitos.
        - Valida que el país o paises sea introducidos en forma de arreglo.
        - Valida que los géneros sean introducidos en forma de arreglo.
        - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
        - Crea un método estático que devuelva los géneros aceptados*.
         - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
        - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
        */

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    //REALIZAR VALIDACIONES AL INSTANCIAR
    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  //ATRIBUTOS ESTATICOS Y METODOS GET - SET

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los metodos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  //METODOS PARA VALIDACIONES

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es una cadena de texto`
      );

    return true; //Todo correcto
  }

  //Metodo valdiar longitud de la cadena

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede de caracteres permitidos (${longitud}).`
      );

    return true;
  }

  //Metodo para validar longitud de la cadena

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es un numero`
      );

    return true;
  }

  //Metodo para validar los arreglos

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (!(valor instanceof Array))
      return console.error(
        `${propiedad} "${valor} ingresado NO es un arreglo"`
      );

    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" paises NO tiene datos.`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor ingresado ${cadena} no es una cadena de texto`
        );
    }

    return true;
  }

  //Metodo para validar el ID

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      //Si esto es verdadero, pues a validar la expresion regular
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `EL IMDB id ${id}, no es valido. Debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`
        );
      }
    }
  }

  //Metodo para validar Titulo

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo)) {
      //Si esto es verdadero, pues ejecutar validar longitud
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }

  //Metodo para validar Director

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      //Si esto es verdadero, pues ejecutar validar longitud
      this.validarLongitudCadena("Director", director, 50);
    }
  }

  //Metodo para validar año de estreno

  validarEstreno(estreno) {
    if (this.validarNumero("Año de streno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno)) {
        return console.error(
          `Año de estreno ${estreno} no es válido. Debe ser un numero de 4 digitos.`
        );
      }
    }
  }

  //Metodo para validar paises

  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  //Metodo para validar generos que se introducen formen parte de los generos permitdos

  validarGeneros(generos) {
    if (this.validarArreglo("Géneros", generos)) {
      for (let genero of generos) {
        // console.log(genero, Pelicula.listaGeneros.includes(genero));

        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Generos incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  //Metodo para validar califiacion

  validarCalificacion(califiacion) {
    if (this.validarNumero("Calificacion", califiacion)) {
      return califiacion < 0 || califiacion > 10
        ? console.error(
            "La calificacion tiene que estar en un rango entre 0 y 10"
          )
        : (this.calificacion = califiacion.toFixed(1));
    }
  }

  //Metodo para imprimir la ficha tecnica

  fichaTecnica() {
    console.info(
      `Ficha tecnica: \nTitulo: ${this.titulo} \nDirector: ${this.director}\nEstreno: ${this.estreno}\nPais: ${this.pais}\nGeneros: ${this.generos}\nCalificaicon: ${this.calificacion}\nId: ${this.id}`
    );
  }
}
//END OF CLASS

// Pelicula.generosAceptados();

// Ejemplo 1
// const peli = new Pelicula({
//   id: "tt4158118",
//   titulo: "La vida es bella",
//   director: "Rogerto Benigni",
//   estreno: 1997,
//   pais: ["Alemania"],
//   generos: ["Adventure", "Fantasy"],
//   calificacion: 7.33,
// });

const misPelis = [
  {
    id: "tt4158117",
    titulo: "La vida es bella",
    director: "Rogerto Benigni",
    estreno: 1997,
    pais: ["Alemania"],
    generos: ["Adventure", "Fantasy"],
    calificacion: 7.33,
  },

  {
    id: "tt4158118",
    titulo: "El gran pez",
    director: "Rogerto Benigni",
    estreno: 1998,
    pais: ["Alemania"],
    generos: ["Adventure", "Fantasy"],
    calificacion: 8.33,
  },

  {
    id: "tt4158119",
    titulo: "V for Vendeta",
    director: "Rogerto Benigni",
    estreno: 1999,
    pais: ["Alemania"],
    generos: ["Adventure", "Fantasy"],
    calificacion: 9.33,
  },
];

misPelis.forEach((el) => new Pelicula(el).fichaTecnica());

/* NOTAS
* Expresion regular se indica: ^ no puede haber nada delante 
* $ no puede haber nada al final[a-z] 
* solo letras de a-z en minuscula 
* {2} solo pueden ser 2 letras
* [0-9] puedes acpetar digitos del 0 al 9 ... y vas a aceptar 7 de esos digitos {7}*/
