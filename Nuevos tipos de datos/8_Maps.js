/**
 * Son un nuevo tipo de dato, que funciona como una colección de objetos relacionados, e.g: catálogo.
 * Se crean con new Map().
 * Se agregan y obtienen datos como en POO, con set() y get()
 * Otra forma de agregar datos es con [["llave", "valor"]]
 * También tiene implementado size, has, delete.
 * Puedes separar las keys y values usando desestructuacion ...
 */

 let mapa = new Map();
 mapa.set("nombre", "Charlotte");
 mapa.set("apellido", "Paredes")
 mapa.set("edad", 13);
 console.log(mapa);
 console.log(mapa.has("correo"));
 console.log(mapa.get("nombre"));
 mapa.delete("edad");
 console.log(mapa);
 console.log(mapa.set("apellido", "Paredes Sánchez"));
 
 //Recorrer mapa
 for(let [key, value] of mapa){
     console.log(`Llave: ${key}, Valor: ${value}`)
 }
 
 //Otro modo de establecer valores a mapas
 
 const mapa2 = new Map([
     ["correo", "person1@gmail.com"],
     ["fecha", "jueves 6/10/22"]
 ])
 
 console.log(mapa2);
 
 //Usar desestructuración para separar en arreglos tanto las llaves como los valores
 
 let m2keys = [... mapa2.keys()];
 let m2values = [... mapa2.values()];
 console.log(m2keys);
 console.log(m2values);