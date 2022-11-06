import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//DELETE

function deleteData(urlApi){ //no es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        } //no es necesario especificar el body
    });

    return response;
}

//se debe colocar el id del objeto qu se quiere modificar/borrar
const idNumber = 217;

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
    .then(() => {
        console.log(`Borrado: ${idNumber}`); //es opcional imprimir en consola
    });