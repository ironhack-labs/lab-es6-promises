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
// ...

getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  })
})

// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector('#steak').innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector('#steak').innerHTML += `<li>${step6}</li>`;
    return document.querySelector('#steak').innerHTML += `<li>Stake is ready!</li>`;
  })
  .then(() => {
    document.querySelector('#steakImg').removeAttribute("hidden");
  })

// Iteration 3 using async/await

function obtainInstruction(recipe, index) {
  return new Promise((resolve, reject) => {
    getInstruction(recipe, index, resolve, reject);
  });
}

async function makeBroccoli() {
  const steps = [
    obtainInstruction('broccoli', 0),
    obtainInstruction('broccoli', 1),
    obtainInstruction('broccoli', 2),
    obtainInstruction('broccoli', 3),
    obtainInstruction('broccoli', 4),
    obtainInstruction('broccoli', 5),
    obtainInstruction('broccoli', 6),
  ];

  for (let i = 0; i < steps.length; i++) {
    const step = await steps[i];
    document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`;
  }

  document.querySelector('#broccoli').innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector('#broccoliImg').removeAttribute("hidden");
  return;
}

makeBroccoli();

// Bonus 2 - Promise all

// Define obtainInstructions function
// Define the obtainInstructions function
function obtainInstructions(recipe, index) {
  return new Promise((resolve, reject) => {
    getInstruction(recipe, index, resolve, reject);
  });
}

// Define async function makeBrusselsSprouts
async function makeBrusselsSprouts() {
  const steps = [
    obtainInstructions('brusselsSprouts', 0),
    obtainInstructions('brusselsSprouts', 1),
    obtainInstructions('brusselsSprouts', 2),
    obtainInstructions('brusselsSprouts', 3),
    obtainInstructions('brusselsSprouts', 4),
    obtainInstructions('brusselsSprouts', 5),
    obtainInstructions('brusselsSprouts', 6),
    obtainInstructions('brusselsSprouts', 7),
  ];

  try {
    const resolvedSteps = await Promise.all(steps);

    resolvedSteps.forEach((step) => {
      document.querySelector('#brusselsSprouts').innerHTML += `<li>${step}</li>`;
    });

    document.querySelector('#brusselsSprouts').innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector('#brusselsSproutsImg').removeAttribute("hidden");
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

makeBrusselsSprouts();

