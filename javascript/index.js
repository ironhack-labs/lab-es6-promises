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
const mashPotatoesElement = document.querySelector('#mashedPotatoes');

getInstruction("mashedPotatoes", 0, (step0) => {
  mashPotatoesElement.innerHTML += `<li>${step0}</li>`;

  getInstruction("mashedPotatoes", 1, (step1) => {
    mashPotatoesElement.innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 2, (step2) => {
      mashPotatoesElement.innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 3, (step3) => {
        mashPotatoesElement.innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 4, (step4) => {
          mashPotatoesElement.innerHTML += `<li>${step4}</li>`;
          mashPotatoesElement.innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));



// Iteration 2 - using promises
const steakElement = document.querySelector('#steak');
obtainInstruction('steak', 0)
  .then((step0) => {
    steakElement.innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
      .then((step1) => {
        steakElement.innerHTML += `<li>${step1}</li>`
        obtainInstruction('steak', 2)
          .then((step2) => {
            steakElement.innerHTML += `<li>${step2}</li>`
            obtainInstruction('steak', 3)
              .then((step3) => {
                steakElement.innerHTML += `<li>${step3}</li>`
                obtainInstruction('steak', 4)
                  .then((step4) => {
                    steakElement.innerHTML += `<li>${step4}</li>`
                    obtainInstruction('steak', 5)
                      .then((step5) => {
                        steakElement.innerHTML += `<li>${step5}</li>`
                        obtainInstruction('steak', 6)
                          .then((step6) => {
                            steakElement.innerHTML += `<li>${step6}</li>`
                            obtainInstruction('steak', 7)
                              .then((step7) => {
                                steakElement.innerHTML += `<li>${step7}</li>`
                                steak.innerHTML += `<li>Steak is ready!</li>`;
                                document.querySelector("#steakImg").removeAttribute("hidden");
                              })
                          })
                      })
                  })
              })
          })
      })
  }
  ).catch((error) => {
    console.error(error);
  });


// Iteration 3 using async/await

const broccoliElement = document.querySelector('#broccoli');
async function makeBroccoli() {

  try {
    // Obtener y mostrar cada paso
    const step0 = await obtainInstruction('broccoli', 0);
    broccoliElement.innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction('broccoli', 1);
    broccoliElement.innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction('broccoli', 2);
    broccoliElement.innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction('broccoli', 3);
    broccoliElement.innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction('broccoli', 4);
    broccoliElement.innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction('broccoli', 5);
    broccoliElement.innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction('broccoli', 6);
    broccoliElement.innerHTML += `<li>${step6}</li>`;

    // Mostrar mensaje final e imagen
    broccoliElement.innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");

  } catch (error) {
    console.log(error);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
const brusselsSproutsElement = document.querySelector('#brusselsSprouts');

function makeBrusselsSprouts(){
  Promise.all([
    obtainInstruction('brusselsSprouts', 0),
    obtainInstruction('brusselsSprouts', 1),
    obtainInstruction('brusselsSprouts', 2),
    obtainInstruction('brusselsSprouts', 3),
    obtainInstruction('brusselsSprouts', 4),
    obtainInstruction('brusselsSprouts', 5),
    obtainInstruction('brusselsSprouts', 6),
    obtainInstruction('brusselsSprouts', 7)
  ])
    .then((steps) => {
      steps.forEach(step => {
        brusselsSproutsElement.innerHTML += `<li>${step}</li>`;
      });
      brusselsSproutsElement.innerHTML += `<li>Brussels sprouts are ready!</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    })
    .catch(error => console.error(error));

}
makeBrusselsSprouts()