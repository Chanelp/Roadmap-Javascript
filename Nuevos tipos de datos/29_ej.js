// Usar un solo condicional para imprimir mensajes dependiendo el tipo de suscripcion

const tiposDeSubcripcion = {
    free: "Gratis, no pagas",
    basic: "Basico, pagas poco",
    expert: "Uy experto, pagas un poco mas",
    pro: "Pro, huele a money tree"
}

function obtenerTipoDeSubcripcion(suscripcion) {
    if(tiposDeSubcripcion[suscripcion]) {
        console.log(tiposDeSubcripcion[suscripcion]);
        return;
    }

    console.warn("Esa susbcripcion no existe");
}

obtenerTipoDeSubcripcion("pro");


//Otra solucion

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
 }

 function encontrarSuscripcion(suscripcion){
    return tiposDeSuscripciones[suscripcion];
 }