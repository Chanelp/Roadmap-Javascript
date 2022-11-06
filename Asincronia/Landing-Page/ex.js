import fetch from "node-fetch";

const API = 'https://rickandmortyapi.com/api/character';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlApi) => {
    try {
        const products = await fetchData(urlApi);

        console.log(products.results[0].name);
    }
    catch (error) {
        console.error(error);
    }
}

anotherFn(API);