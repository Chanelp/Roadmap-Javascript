const hTexto = document.getElementById('h-texto');
console.log(hTexto);

hTexto.addEventListener("cambioTexto", evento =>{
    console.log(evento.detail);
    hTexto.innerHTML = evento.detail.texto;
    hTexto.style.color = evento.detail.color;
})

//Crear nuevo evento
function cambiarTexto(nuevoTexto, color){
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })

    hTexto.dispatchEvent(evento);
}