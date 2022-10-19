/**
 * Contienen referencias débiles. No permiten el uso de .size ni .clear().
 * No son iterables.
 * No permiten agregar elementos en la defincion sino con add o set.
 * 
 */

 let ws = new WeakSet();

 let valor1 = {"valor1": 1};
 let valor2 = {"valor2": 2};
 let valor3 = {"valor1": 3};
 let valor4 = "truee";

 ws.add(valor1);
 ws.add(valor2);
 ws.add(valor3);

 console.log(ws)

 //setInterval(()=> console.log(ws), 1000);
 
 /*setTimeout(()=> {
     valor1 = null,
     valor2 = null
 },2000);*/
 
 //WeakMaps
 
 let wm = new WeakMap();
 let llave1 = {};
 let llave2 = {};
 let llave3 = {};
 
 wm.set(llave1, 1);
 wm.set(llave2, 2);
 
 console.log(wm.has(llave1));
 console.log(wm.has(llave3));
 
 console.log(wm.get(llave1));
 console.log(wm.get(llave2));
 console.log(wm.get(llave3));
 
 wm.delete(llave2);
 console.log(wm);
 
 wm.set(llave2, 2);
 wm.set(llave3, 3);
 
 console.log(wm);
 
 // Anulando
 //setInterval(()=> console.log(wm), 1000);
 
 /*setTimeout(()=> {
     llave1 = null,
     llave2 = null,
     llave3 = 3
 },5000)*/