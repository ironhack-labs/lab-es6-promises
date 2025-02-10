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
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
        });
      });
    });
  });
});


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 2)
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 3)
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 4)
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 5)
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 6)
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 7)
  })
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
    document.querySelector("#steakImg").removeAttribute("hidden")
    return obtainInstruction('steak', 8)
  })

// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    const totalSteps = broccoli.length;
    for (let i = 0; i < totalSteps; i++) {
      const step = await obtainInstruction('broccoli', i);
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
    document.querySelector("#broccoliImg").removeAttribute("hidden")
  } catch (error) {
    console.log("Broccoli error:", error);
  }
}

makeBroccoli();



// Bonus 2 - Promise all

async function makeSprouts() {

  try {
    const steps = await Promise.all(brusselsSprouts);

    steps.forEach(element => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`;

    });
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")

  } catch (error) { console.log(error) }
}

makeSprouts()