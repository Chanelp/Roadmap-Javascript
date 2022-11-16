function darr(arr){
  console.log(arr[0])
}

darr(["he", 3, 21]) 

function oxo(arr){
    arr.forEach(element => {
        console.log(element);
    });
}

oxo([3, 6, "err"]);

function iobj(obj) {
    for (const key in obj) {
        console.log(obj[key]);
    }
}

iobj({
    "name": "oli",
    "age": 9
})