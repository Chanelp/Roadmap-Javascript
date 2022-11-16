//Sentencias Switch
// NOS SERVIRA EN UNA SITUACION DONDE TENGAMOS DIFERENTES VALORES PARA UNA MISMA VARIABLE

// EJEMPLO NOTA

let nota = 5;

switch (nota) {
    case 5:
        console.log("Sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo");
        break;
    case 3:
        console.log("Suficiente");
        break;
    case 2:
        console.log("Por poco");
        break;
    case 1:
        console.log("Chale");
        break;
    default: 
        console.log("Error");
        break;
}

// EJEMPLO DIAS

let dia = 2;

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miercoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    case 6:
        console.log("Sabado");
        break;

    default:
        console.log("El dia no existe");
        break;
}