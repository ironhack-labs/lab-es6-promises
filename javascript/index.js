// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /*
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
*/


// Iteration 1 - using callbacks
function agregarPasoReceta(plato, paso, onSuccess, onError) {
  getInstruction(plato, paso, (step) => {
    document.querySelector(`#${plato}`).innerHTML += `<li>${step}</li>`;
    onSuccess();
  }, onError);
}

agregarPasoReceta("mashedPotatoes", 0, () => {
  agregarPasoReceta("mashedPotatoes", 1, () => {
    agregarPasoReceta("mashedPotatoes", 2, () => {
      agregarPasoReceta("mashedPotatoes", 3, () => {
        agregarPasoReceta("mashedPotatoes", 4, () => {
          agregarPasoReceta("mashedPotatoes", 5, () => {
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));
}, (error) => console.log(error));
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1);
  })
    .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
      return obtainInstruction("steak", 2);
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3);
})
.then( (step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
  return obtainInstruction("steak", 4);
})
.then( (step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
  return obtainInstruction("steak", 5);
})
.then( (step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
  return obtainInstruction("steak", 6);
})
.then( (step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
  return obtainInstruction("steak", 7);
})
.then( (step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  return obtainInstruction("steak", 8);
})
.catch((error) => console.log(error));

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const step0 = await getInstruction ('broccoli', 0);
    console.log(step0);

    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await getInstruction ('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await getInstruction ('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await getInstruction ('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await getInstruction ('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await getInstruction ('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await getInstruction ('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  } catch (error) {

  }
}

// Bonus 2 - Promise all
// ...