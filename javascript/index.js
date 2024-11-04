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
function callBack(food) {
  function executeStep(step) {
      getInstruction(food, step, (desc) => {
          document.querySelector(`#${food}`).innerHTML += `<li>${desc}</li>`;

          // Verifica si hay mas steps, si no muestra la imagen y un mensaje final
          getInstruction(food, step + 1, (nextDesc) => {
              executeStep(step + 1);
          }, () => {
              document.querySelector(`#${food}Img`).removeAttribute("hidden");
              document.querySelector(`#${food}`).innerHTML += `<li>${food} is ready!</li>`;
          });
      });
  }

  // Comienza la secuencia desde el primer paso
  executeStep(0);
}

callBack('mashedPotatoes');


// Iteration 2 - using promises
function promises(food) {
  let step = 0;

  function handleStep() {
      obtainInstruction(food, step)
          .then((desc) => {
              document.querySelector(`#${food}`).innerHTML += `<li>${desc}</li>`;
              step++;
              handleStep(); // Llamar a la siguiente instrucción
          })
          .catch(() => {
              document.querySelector(`#${food}Img`).removeAttribute("hidden");
          });
  }

  handleStep(); // Iniciar el proceso
}

// Llama a la función inicial
promises('steak');


// Iteration 3 using async/await
async function asyncAwait(food) {
  try {
      let step = 0;
      let desc;
      
      while (true) {
          desc = await obtainInstruction(food, step);
          document.querySelector(`#${food}`).innerHTML += `<li>${desc}</li>`;
          step++;
      }
  } catch (error) {
      document.querySelector(`#${food}`).innerHTML += `<li>${food} is ready!</li>`;
      document.querySelector(`#${food}Img`).removeAttribute("hidden");
  }
}

asyncAwait('brusselsSprouts');


// Bonus 2 - Promise all
function promiseAll(food) {
  const stepCount = 7; // Definimos la cantidad de pasos
  const promises = Array.from({ length: stepCount }, (_, step) => obtainInstruction(food, step));

  Promise.all(promises)
      .then((descs) => {
          // Agregar todas las instrucciones al DOM
          const foodElement = document.querySelector(`#${food}`);
          foodElement.innerHTML += descs.map(desc => `<li>${desc}</li>`).join('');
      })
      .catch((error) => {
          console.error('Error while obtaining instructions:', error);
      })
      .finally(() => {
          // Mostrar la imagen al final
          document.querySelector(`#${food}Img`).removeAttribute("hidden");
      });
}

promiseAll('broccoli');
