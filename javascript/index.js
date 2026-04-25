// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
  getInstruction("mashedPotatoes", 1, (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstruction("mashedPotatoes", 2, (step) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
      getInstruction("mashedPotatoes", 3, (step) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
        getInstruction("mashedPotatoes", 4, (step) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    obtainInstruction('steak', 1)
      .then( (step) => {
        document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
        obtainInstruction('steak', 2)
          .then( (step) => {
            document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
            obtainInstruction('steak', 3)
              .then( (step) => {
                document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
                obtainInstruction('steak', 4)
                  .then( (step) => {
                    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
                    obtainInstruction('steak', 5)
                      .then( (step) => {
                        document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
                        obtainInstruction('steak', 6)
                          .then( (step) => {
                            document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
                            obtainInstruction('steak', 7)
                              .then( (step) => {
                                document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
                                document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
                                document.querySelector("#steakImg").removeAttribute("hidden");
                              })
                          })
                      })
                  })
              })
          })
      })
  })

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    for(let step = 0; step < 7; step++) {
      const stepText = await obtainInstruction('broccoli', step);
      document.querySelector("#broccoli").innerHTML += `<li>${stepText}</li>`;
    }
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch(error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
async function makeBrusselsSprouts() {
  const stepPromises = [];

  for(let step=0; step < 8; step++) {
    stepPromises[step] = obtainInstruction('brusselsSprouts', step);
  }

  Promise.all(stepPromises)
  .then( (steps) => {
    steps.forEach( (step) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    });
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch( (error) => console.log(error));
}

makeBrusselsSprouts();