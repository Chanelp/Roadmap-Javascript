import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function* fetchProduct (urlApi){
    yield await fetch(urlApi).then(response => response.json());
}

fetchProduct(`${API}/products`).next().then(({value, done}) => {
    console.log(value)

    const productId = value[0].id;
    
    console.log(`Copiame => ${API}/products/${productId}. Pegame en el navegador`);
    
    fetchProduct(`${API}/products/${productId}`).next().then(({value, done}) => {
        console.log(value.title)
    });
    
    const idCategory = value.category.id;
    
    fetchProduct(`${API}/categories/${idCategory}`).next().then(({value, done}) => {
        console.log(value.name);
    });
});
