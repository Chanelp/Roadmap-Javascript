/*  ----- OBJETOS LITERALES: EcmaScript6  -----
Los objetos literales son una forma de escribir atributos y metodos e incluso de asignarlos. */

// Si la variable que vas a asigarnarle como valor a una propiedad del objeto tiene el mismo nombre de la propiedad que vas a asignar, entonces simplemente guardas un solo nombre.

let sellama = "lobi";
edad = 9;

const perro = {
  sellama,
  edad,
  ladrar() {
    console.log("guaaaaaaau");
  },
};

console.log(perro);
perro.ladrar();
