function delay(time, message) {
    return new Promise((resolve, reject) => {
        if(time >= 0){
            setTimeout(() => {
                resolve(message);
            }, time);
        } else {
            reject("Time cannot be negative")
        }
    })
};

delay(-2000, "Hii chao").then((result) => console.log(result)).catch((error) => console.log(error))