//Aprendiendo sobre métodos http con promesa fetch

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//POST
function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Another clothes",
    "price": 217,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));
