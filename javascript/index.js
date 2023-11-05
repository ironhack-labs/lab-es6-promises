// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 

// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

          //  final message 
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));
 

// Iteration 2 - using promises
// Start with step 0
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    // Continue with step 1
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    // Continue with step 2
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    // Continue with step 3
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    // Continue with step 4
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    // Continue with step 5
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    // Continue with step 6
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    // After the last step, add the final message
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.log(error);
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  const instructions = [];
  try {
    for (let stepNumber = 0; stepNumber < broccoli.length; stepNumber++) {
      const step = await obtainInstruction('broccoli', stepNumber);
      instructions.push(step);
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    if (instructions.length === broccoli.length) {
      document.querySelector("#broccoliImg").removeAttribute("hidden");
    }
  } catch (error) {
    console.log(error);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
async function makeBrusselsSprouts() {
  const stepsPromises = brusselsSprouts.map((_, index) => obtainInstruction('brusselsSprouts', index));

  try {
    const steps = await Promise.all(stepsPromises);

    for (const step of steps) {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    }

    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

makeBrusselsSprouts();