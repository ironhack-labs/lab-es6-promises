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
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
        }, (error) => console.log(error));
        
      }, (error) => console.log(error));
      
    }, (error) => console.log(error));
    
  }, (error) => console.log(error));
  
}, (error) => console.log(error));


// Iteration 2 - using promises
function getSteakInstruction(step) {
  return new Promise((resolve, reject) => {
    getInstruction("steak", step, resolve, reject);
  });
}

getSteakInstruction(0)
  .then((step0) => {
    document.querySelector("#steakImg").removeAttribute("hidden");
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return getSteakInstruction(1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return getSteakInstruction(2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return getSteakInstruction(3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return getSteakInstruction(4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return getSteakInstruction(5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return getSteakInstruction(6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return getSteakInstruction(7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  })
  .catch((error) => console.log(error));


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const step0 = await new Promise((resolve, reject) => getInstruction("broccoli", 0, resolve, reject));
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await new Promise((resolve, reject) => getInstruction("broccoli", 1, resolve, reject));
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await new Promise((resolve, reject) => getInstruction("broccoli", 2, resolve, reject));
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await new Promise((resolve, reject) => getInstruction("broccoli", 3, resolve, reject));
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await new Promise((resolve, reject) => getInstruction("broccoli", 4, resolve, reject));
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await new Promise((resolve, reject) => getInstruction("broccoli", 5, resolve, reject));
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await new Promise((resolve, reject) => getInstruction("broccoli", 6, resolve, reject));
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
        
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();


// Bonus 2 - Promise all
function getBrusselsSproutStep(step) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(brusselsSprouts[step]);
    }, 1000); // SSe debe poner un tiempo para mockear la operacion asincrona
  });
}

async function displayBrusselsSproutsSteps() {
  try {
    const promises = brusselsSprouts.map((_, index) => getBrusselsSproutStep(index));
    const steps = await Promise.all(promises);

    // Display each step
    steps.forEach(step => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    });

    // AAgregar mensaje e imagen
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    
  } catch (error) {
    console.log(error);
  }
}

displayBrusselsSproutsSteps();