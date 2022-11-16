export function factorialF(num){
    let factorial = 1;

    for(let i = 2; i<=num; i++){
        factorial*= i;
    } 
    return factorial;
}

export function elevar(a, b){
    return a ** b;
}

export function suma(a, b){
    return a + b;
}

export const nombre = "Matemáticas";