//Cómo unir dos listas: .concat(lista2) => No muta, se crea nueva lista

const list1 = ["Hi", 2, false, null];
const list2 = ["Bye", 8, true, undefined];
const list3 = list1.concat(list2);
console.log(list3);

//Cómo unir dos listas con el factor de propagación ...
console.log(...list3);
const list4 = [...list1, ...list2];
console.log(list4);

//ERROR! Mal entendido el concepto de factor de propagación
const list5 = [list1, list2];
console.log(list5);