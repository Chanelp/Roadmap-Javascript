/*addeventListener --> Una funcion que recibe dos argumentos, el primero es el evento y el segundo el codigo js a ejecutar.
     A la funcion que recibe el escuchador no se le coloca parentesis
     //A QUIÉN -    QUÉ ACCIÓN - CUAL FUNCION
    btn.addEventListener('click',btnOnClick);

    Referencias: https://developer.mozilla.org/en-US/docs/Web/Events
    
    Los formularios interprestan que el ultimo boton dentro es para enviar el formulario, como un submit.
    Para que los formularios no se recarguen por defecto agregamos un evento y usamos su propiedad preventDefault();
    */

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.querySelector('#result');

// form.addEventListener('submit', btnOnClick);

// function btnOnClick(event) {
//     console.log({event});
//     event.preventDefault();
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     p.innerText = "El resultado de la suma es de: " + sumaInputs;
// }

// function inputOnChange() {
//     console.log("eventos de input");
// }

//Otra manera de hacerlo sin el evento es especificarle al hmtl el tipo del boton como button

btn.addEventListener('click', btnOnClick);

function btnOnClick(evnt) {
    const sumaInputs = Number(input1.value) + Number(input2.value);
    p.innerText = "El resultado de la suma es de: " + sumaInputs;
}

function inputOnChange() {
    console.log("eventos de input");
}
