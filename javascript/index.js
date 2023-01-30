// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// función asíncrona que recibe dos argumentos: el nombre del plato (mashedPotatoes) y un número de índice (0-4)
//es llamada secuencialmente 5 veces
// La función recibe una tercera argumento que es una callback, que es invocada con el resultado de la función getInstruction. 
//La función callback se encarga de actualizar el HTML con la instrucción devuelta por getInstruction.

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
    getInstruction("mashedPotatoes", 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
        getInstruction("mashedPotatoes", 2, (step2) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
            getInstruction("mashedPotatoes", 3, (step3) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
                getInstruction("mashedPotatoes", 4, (step4) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
                      document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready</li>`
                      ///Finalmente, cuando se han agregado todas las instrucciones a la página web, se remueve el atributo "hidden" del elemento HTML con id "mashedPotatoesImg".
                      document.querySelector("#mashedPotatoesImg").removeAttribute(`hidden`)
                      ////getInstruction para manejar errores. En caso de que ocurra un error
                    }, (err) => console.log(err)) 
                },(err) => console.log(err))
            }, (err) => console.log(err))
        }, (err) => console.log(err))
    },(err) => console.log(err) )


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction(`steak`, 1)})
  .then((step1) =>{
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction (`steak`, 2)})
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction (`steak`, 3)})
  .then((step3) =>{
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction (`steak`, 4)})
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction(`steak`, 5)})
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction(`steak`, 6)  
  })
  .then((step6) => {
    // Esta expresión selecciona un elemento con un ID de "steak" en el DOM y agrega un elemento de lista (li) 
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    // agrega un elemento de lista con el texto "Steak is ready"
    document.querySelector(`#steak`).innerHTML += `<li> Steak is ready</li>`
    ////Selecciona un elemento con un ID de "steakImg" en el DOM y elimina el atributo "hidden"
    document.querySelector("#steakImg").removeAttribute(`hidden`);
  })

  //En caso de que ocurra un error, se pasará un objeto "err" 
  //a la función de retorno de llamada y se imprimirá en la consola con "console.log(err)".
 .catch((err)=> console.log(err))



// Iteration 3 using async/await

//definición de una función asíncrona
//try: El bloque "try" contiene código que se ejecuta y puede generar una excepción.
async function makeBroccoli() {
  try {
 ///espera a que se complete antes de continuar con la ejecución. La función "obtainInstruction" probablemente devuelve una promesa, y "await" permite la espera de la resolución de la promesa antes de continuar.
   const step0 = await obtainInstruction("broccoli", 0)
   document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
 
   const step1 = await obtainInstruction("broccoli", 1)
   document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
 
   const step2 = await obtainInstruction("broccoli", 2)
   document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
 
   const step3 = await obtainInstruction("broccoli", 3)
   document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
 
   const step4 = await obtainInstruction("broccoli", 4)
   document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
 
   const step5 = await obtainInstruction("broccoli", 5)
   document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
 
   const step6 = await obtainInstruction("broccoli", 6)
   //esta expresión selecciona un elemento con un ID de "broccoli" en el DOM y agrega un elemento de lista (li)
   document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
   document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready</li>`;
   document.querySelector("#broccoliImg").removeAttribute(`hidden`);
 
  }
 ////El bloque "catch" contiene código que se ejecuta si se produce una excepción dentro del bloque "try". En este caso, se pasa un objeto "err" a la función de retorno de llamada y se imprime en la consola con "console.log(err)".
  catch {(err) => console.log(err) }
 }
 
 //// Esta es la invocación de la función asíncrona "makeBroccoli". Esto ejecutará el código dentro de la función y mostrará los resultados en la página web.
 makeBroccoli()

// Bonus 2 - Promise all



///La función obtainInstruction se llama 7 veces con diferentes parámetros, cada vez retornando una promesa. Luego, el método Promise.all es llamado con el objetivo de esperar a que todas las promesas se resuelvan antes de continuar.
const step0 = obtainInstruction ("brusselsSprouts", 0)
const step1 = obtainInstruction ("brusselsSprouts", 1)
const step2 = obtainInstruction ("brusselsSprouts", 2)
const step3 = obtainInstruction ("brusselsSprouts", 3)
const step4 = obtainInstruction ("brusselsSprouts", 4)
const step5 = obtainInstruction ("brusselsSprouts", 5)
const step6 = obtainInstruction ("brusselsSprouts", 6)

////se llama a un método .then que recibe como parámetro el resultado de la promesa (un array de valores), y usa .forEach para agregar cada uno de estos valores como un nuevo elemento de una lista en el HTML 

Promise.all([step0, step1, step2, step3, step4, step5, step6])
  .then((element) => {
    element.forEach((ele) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${ele}</li>`})})

      ///.then es llamado para remover el atributo hidden del elemento con id "brusselsSproutsImg". Esto hace que la imagen sea visible en la página.
  .then ( document.querySelector("#brusselsSproutsImg").removeAttribute(`hidden`));



