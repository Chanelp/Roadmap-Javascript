/* Los hilos son las unidades básicas de ejecución de cada proceso que realiza nuestra máquina.

Javascript tiene un sólo hilo de ejecución.
Trabaja bajo la filosofia LIFO _> Last in, First out

---------------------------------------------------------------

1) Procesamiento Single Thread y Multi Thread.

EVENT LOOP:
    - Call Stack: las peticiones que va haciendo la aplicacion o incluso las interacciones del usuario.

    - Cola de Eventos o mensajes: van apilando las tareas. Conforme van terminando van mandando los mensajes y todo se va comunicando en un mismo hilo.

---------------------------------------------------------------

2) Operaciones de CPU y Operaciones de I / O.

- CPU: son aquellas operaciones que van a pasar el mayor tiempo consumiento los procesos de nuestra cpu.

- I/O: aquellas operaciones que van a pasar la mayor parte del tiempo esperando la peticion del recurso que han solicitado. (P. e. pago en linea donde esperas que el API cobre y responda los datos; o cuando enviamos un formulario y esperamos que nos notifique ya se ha procesado; o cuando se solicitan datos a una API y los devuelve en JSON).

---------------------------------------------------------------

3) Operaciones Concurrentes o Pararelas.

- Concurrencia: cuando dos o mas tareas van progresando simultaneamente.

- Paralelismo: cuando dos tareas se ejecutan a la vez, al mismo tiempo, al unisono

4) Operaciones bloqueantes y no bloqueantes.

Esto se refiere a la fase de espera cada que se va ejecutando una operacion de neustro codigo. Si una operacion es bloq o no bloq, se refiere a como toma esa fase de espera.

- Bloqueante: no va a devolver el control a la aplicacion hasta que no haya terminado toda su tarea. (No van a devolver la ejecucion al hilo principal hasta que no hayan terminado sus tareas).

- No bloqueante: significa que las operaciones se ejecutan y devuelven el control inmediatamente al hilo principal, no importando si han terminado o no, la tarea. 
En el momento que una tarea no bloqueante se acabe, mandara una notificacion y entonces ya se avisara al hilo principal; y en caso de que se haya completado devolvera los datos solicitados o el mensaje correspondiente. En caso contrario, se podra manejar incluso un codigo de error.

---------------------------------------------------------------

5) Operaciones Sincronas y Asincronas

Se refiere a cuando tendra lugar la respuesta.

- Sincrono: significa que la respuesta sucede en el presente, en tiempo inmediato. Una operacion sincrona espera el resultado en tiempo presente y sigue.

- Asincrono: la respuesta viene en un futuro. Se ejecuta pero no sabe cuando va a venir la respuesta. Es decir, la operacion asicrona no va a esperar el resultado. Es por eso que suelta inmediantamente el control y lo regresa al hilo principal.

En Javascript tendremos, codigo sincrono bloqueante y codigo asincrono no bloqueante. Todo ello en un Single Thread y la mayoria de veces en operaciones I/O.

En resumen, Javascript usa un modelo asincrono y no bloqueante, con un Loop de eventos implementado en un solo hilo (Single Thread) para la realizacion de oepraciones de entrada y salida.
    
    */
