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




