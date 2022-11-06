import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//PUT

function putData(urlApi, dataUpdate){
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });

    return response;
}

const dataUpdate = {
    "title": "Actualizando producto",
    "price": 817
}

putData(`${API}/products/217`, dataUpdate)
    .then(response => response.json())
    .then(dataUpdate => console.log(dataUpdate));