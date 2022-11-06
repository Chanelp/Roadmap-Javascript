//LLAMADO A UNA SOLICITUD FORMA MAS ANTIGUA: XMLHTTPREQUEST

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Referencia al root de la api
const API = 'https://api.escuelajs.co/api/v1';

//Función para acceder a esos datos de la api, recibira la ruta a la que hará el llamado y el callback, que será la información que nos va a retornar la data o el error

function fecthData(urlApi, callback) {
    //Crear objeto xhttp
    let xhttp = new XMLHttpRequest();

    //Abrir una conexión a la api, recibe tipo de peticion, url, true para permitir la conexion
    xhttp.open('GET', urlApi, true);

    //Leer los estados de la solicitud para saber cuando está disponible con onreadystatechange. Recibe una funcion y evento para validar el valor
    xhttp.onreadystatechange = function(event) {
        //Validar tipo de estado
        if (xhttp.readyState === 4) {
            //Validar estado
            if (xhttp.status === 200) {
                //Llamar al callback que recibe un nulo y una transformacion de la información
                callback(null, JSON.parse(xhttp.responseText));
            }//Manejo de error
            else {
                const error = new Error('Error' + urlApi);
                //Retornar el callback con el error y un nulo, porque no se esta regresando ningun dato
                return callback(error, null);
            }
        }
    }
    //send para ejecutar la lógica previa, es decir, enviar la peticion al servidor
    xhttp.send();
}

fecthData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fecthData(`${API}/products/${data1[2].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fecthData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);

            //AHORA MOSTRAR LA INFORMACION DE LAS PETICIONES
            console.log(data1[2]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});






/**
 * xhttp es un objeto instanciado de la clase XMLHttpRequest.
Para ello que usamos el siguiente código:
-  let xhttp = new XMLHttpRequest();
* xhttp.open()
xhttp.onreadystatechange()
xhttp.readyState
xhttp.status
xhttp.send()

Mismo código bien documentado: https://platzi.com/comentario/3765772/
 */