//- La fecha de hoy
const today = new Date();
console.log(today);

//- La fecha de tu nacimiento
const birth = new Date(2002, 8, 27);
console.log(birth);

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const moreLate = today.getDate() > birth.getDate();
console.log(moreLate);

//- Una variable que contenga el día de tu nacimiento
const dayB = birth.getDate();
console.log(dayB);

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const monthB = birth.getMonth();
console.log(monthB);

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const yearB = birth.getFullYear();
console.log(yearB);