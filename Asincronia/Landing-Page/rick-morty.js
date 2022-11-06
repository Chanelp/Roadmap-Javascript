const API = "https://rickandmortyapi.com/api/character";
const content = document.getElementById("content");

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

//Función autoejecutable, para que no se tenga que depender de una invocación a la lógica, sino que automaticamente ejecuta la función

(async () => {
  try {
    const personajes = await fetchData(API);
    let view = personajes.results.map(
      (personaje) => `<div class="group relative">
	  <div
		  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
		  <img src="${personaje.image}" alt="${personaje.status}" class="w-full">
	  </div>
	  <div class="mt-4 flex justify-between">
		  <h3 class="text-sm text-gray-700">
			  <span aria-hidden="true" class="absolute inset-0"></span>
			  <b>Nombre: </b> ${personaje.name}
			  <hr>
			  <b>Estado: </b>${personaje.status}
			  <hr>
			  <b>Especie: </b>${personaje.species}
			  <hr>
			  <b>Origen: </b>${personaje.location.name}
		  </h3>
	  </div>
  </div>`
    );

    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
