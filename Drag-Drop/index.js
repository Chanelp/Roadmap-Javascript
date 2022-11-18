const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".secciones")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", evento => {
        console.log("Estoy arrastrando el parrafo " + parrafo.innerText);
        parrafo.classList.add("dragging")
        evento.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", e => {
        //Prevenir comportamniento por defecto
        e.preventDefault();
        //console.log("Drag Over");
    })

    seccion.addEventListener("drop", evento => {
        console.log("Drop");
        const id_parrafo = evento.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})