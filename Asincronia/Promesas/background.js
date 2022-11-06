function delay(time, message) {
    // Tu código aquí 👈
    const myPromise = new Promise(function (resolve, reject) {
        if (time >= 0) {
            setTimeout(() => {
                resolve(message);
            }, time)
        } else {
            reject("Time cannot be negative");
        }
    })

    return myPromise
}

delay(2000, "Learning how to use Promises").then((result) => console.log(result)).catch((error) => console.log(error));


//SOLUCION 2

function delay(time, message) {
    return new Promise((resolve, reject) => {
        if (time >= 0) {
            setTimeout(() => {
                resolve(message);
            }, time);
        } else {
            reject("Time cannot be negative")
        }
    })
};

delay(-2000, "Hii chao").then((result) => console.log(result)).catch((error) => console.log(error))