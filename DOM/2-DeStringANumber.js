let result;
let value1 = input1.value;
let value2 = input2.value;

//Number(valor)
//Convierte a Number. "12" -> 12 
result = Number(value1) + Number(value2);

//parseInt()
//Convierte a Number entero, se indica la base en el sistema //numeral
// En este caso 10 es sistema Decimal
// "19.99" -> 19 
result = parseInt(value1, 10) + parseInt(value2, 10);

//parseFloat()
//Convierte a Number dejando la parte decimal. "10.2" -> 10.2
result = parseFloat(value1) + parseFloat(value2);

//(+valor)
//Convierte a Number y deja la parte decimal. "12.99" -> 12.99 
result = (+value1) + (+value2);

//(valor * 1)
//Convierte a Number y deja la parte decimal. "19.99" -> 19.99  
result = (value1 * 1) + (value2 * 1);

//(valor / 1)
//Convierte a Number y deja la parte decimal. "10.5" -> 10.5 
result = (value1 / 1) + (value2 / 1);

//(valor - 0)
//Convierte a Number y deja la parte decimal. "19.99" -> 19.99 
result = (value1 - 0) + (value2 - 0);

//(~~valor)
//Convierte a Number y quita la parte decimal. "19.99" -> 19 
//Convierte a 0 si se pasa un String. "Bien" -> 0
//Usar para enteros de no mas de 32 bit
result = (~~value1) + (~~value2);

//Math.floor()
//Convierte a Number y Redondea hacia abajo. "9.8" -> 9
result = Math.floor(value1) + Math.floor(value2);

//Math.ceil()
//Convierte a Number y Redondea hacia el entero mas grande. "7.18" -> 8
result = Math.ceil(value1) + Math.ceil(value2);

//Math.round()
//Convierte a Number y Redondea hacia el entero mas grande proximo. "6.3" -> 6
result = Math.round(value1) + Math.round(value2);
