/*Ejemplo de uso de la promesa fetch para anidar solicitudes a una api, transformar la información y presentarla en consola.
⭐ Fetch: Nos permite realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verboso.*/

/* Básicamente llamamos a Fetch y le pasamos como parámetro la URL de la petición.*/

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi).then(response => response.json());
}

fetchData(`${API}/products`)
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(category => {
        console.log(category.name)
    })
    .catch(error => console.log(error))
    .finally(() => console.log('FINALLY'));



/*PRIMER EJEMPLO
Fetch devolvera una promesa, la cual le podremos aplicar los métodos then y catch
fetchData(`${API}/products`)
    then(response => response.json())
        .then(products => console.log(products))
        .catch(error => console.log(error));
*/
    