//Asincronía nos puede servir para hacer una llamada a una base de datos externa
//Puede darnos algún error

const miPromesa = new Promise((resolve, reject) => {
    const numAleat = Math.floor(Math.random() * 2);
    if(numAleat !== 0){
        resolve();
    } else {
        reject();
    }
});

miPromesa
    .then(() => console.log("Se ha ejecutado bien"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Me ejecuto siempre"));