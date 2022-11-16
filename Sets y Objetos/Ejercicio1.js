//- Un nuevo Set con los nombres de tu familia

const family = new Set(["Mariano", "Sorlanlly", "Charlotte", "Chanel", "Lobi", "Ramona"]);
console.log(family);

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
family.add("Chanel");
console.log(family);

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
family.add("Javascript");