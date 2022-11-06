import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }
    catch (error) {
        console.error(error);
    }
}

anotherFn(API);

/*En este desafío vas a conectarte a una API que no existe, por ende debes capturar el error haciendo uso de try/catch y lanzar un error con el mensaje API Not Found.*/

export async function runCode() {
    // Tu código aquí 👈
    const url = 'https://domain-api-com';

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch {
        throw new Error('API Not Found');
    }
}

runCode();