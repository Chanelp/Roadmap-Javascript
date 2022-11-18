// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript

localStorage.setItem("Nombre", "Chanel")
localStorage.setItem("nombre", "Miguel")
console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify({ nombre: "gorka", edad: 32 }))
console.log(JSON.parse(localStorage.getItem("persona")))

localStorage.removeItem("nombre")

/* sessionStorage */
sessionStorage.setItem("Usuario", "Loli")
sessionStorage.setItem("nombre-sesion", "Gorka")

/* Cookies */
document.cookie = "nombreCookie=GorkaCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)