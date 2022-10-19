const h1 = document.querySelector('h1');

const p1 = document.querySelector('p');

const p2 = document.querySelector('.yolo');

const p3 = document.querySelector('#pid');

const input = document.querySelector('input');

console.log(h1);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(input.value);


h1.innerText = "Otro texto"
p1.innerHTML = "<hr> Parrafo con salto y <br> linea horizontal arriba"
p2.classList.add('titi');


const div1 = document.createElement('div');
div1.className = 'contenedor';
p1.append(div1);

p2.classList.add('OtraClase');
p2.classList.remove('titi');

p2.classList.contains('foo');