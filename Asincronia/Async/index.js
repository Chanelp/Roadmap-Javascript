const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve("Async!"), 2000)
        : reject(new Error("Error!"))
    });
}

//Usando el concepto de async - await

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("Hello");
}

console.log("Before");
anotherFn();
console.log("After");

//Lo que hace await es esperar a que se resuelva la promesa, mientras permite continuar ejecutando otras tareas que puedan realizarse.