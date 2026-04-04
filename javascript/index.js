// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  // ... Your code here
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        
        // ultimo paso con la frase personalizada
        document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        
        // iteration 4, borro el atributo hidden para mostrar la imagen
        document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));

      }, (error) => console.log(error));

    }, (error) => console.log(error));

  }, (error) => console.log(error));

}, (error) => console.log(error));



// Iteration 2 - using promises
// ...

  obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    //  ... Your code here
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;

    // muestro el ultimo paso personalizado
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;

    // iteration 4, borro el atributo hidden para mostrar la imagen
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch(error => {
    console.error("Error: ", error);
  });
 
  

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    // uso un for para no poner todas en línea como en callbacks o en Promises
    for (let i = 0; i < 7; i++) {
      const step = await obtainInstruction('broccoli', i);
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }
    // ultimo paso con la frase personalizada
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

    // iteration 4, borro el atributo hidden para mostrar la imagen
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch(err) {
    console.error("Algo ha ido mal", err)
  }
};
// llamar a la función
makeBroccoli();

// Iteration 4 Display the image
// línea 50, 103 y 124, con el método removeAttribute("hidden") para mostrar la imagen al final de cada receta


// Bonus 2 - Promise all
// ...

// creo un array de promesas para cada paso de la receta de Brussels sprouts
// para no tener que hacer una por una como los casos anteriores
const promises = [];

// uso un for para meter todas las líenas dentro del array, así no tengo que escribir cada una como en los casos anteriores
for (let i = 0; i < 8; i++) {
  promises.push(obtainInstruction('brusselsSprouts', i));
}

// uso Promise.all para ejecutar todas las promesas y mostrar los pasos en orden
Promise.all(promises)
  .then((steps) => {

    // uso forEach para iterar sobre el array de pasos y mostrarlos en el HTML
    steps.forEach(step => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    });
    
    // último paso con la frase personalizada
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;

    // borro el atributo hidden para mostrar la imagen
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

  })
  .catch(error => {
    console.error("Error: ", error);
  });