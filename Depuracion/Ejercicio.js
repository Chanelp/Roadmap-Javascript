//- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

function fibonacci(num){
    let arrFibo = [];
    let suma = 0;
    let pre = 0;
    let pos = 1;

    for(let i = 0; i < num; i++){
        suma= pre + pos;
        pre = pos;
        pos = suma;
        arrFibo = [...arrFibo, suma];
    }

    return arrFibo;
}

console.log(fibonacci(6));