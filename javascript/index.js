// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// obtainInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// obtainInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// obtainInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// obtainInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// obtainInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
const mashedPotatoesContainer = document.querySelector("#mashedPotatoes");
const mashedPotatoesImg = document.querySelector("#mashedPotatoesImg");
getInstruction("mashedPotatoes", 0, (step0) => {
  mashedPotatoesContainer.innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    mashedPotatoesContainer.innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      mashedPotatoesContainer.innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        mashedPotatoesContainer.innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          mashedPotatoesContainer.innerHTML += `<li>${step4}</li>`;
          // After the last step, add the final message
          mashedPotatoesContainer.innerHTML += `<li>Mashed potatoes are ready!</li>`;
          mashedPotatoesImg.removeAttribute("hidden");
        });
      });
    });
  });
});

// Iteration 2 - using promises
const steakContainer = document.querySelector("#steak");
const steakImg = document.querySelector("#steakImg");

obtainInstruction("steak", 0)
  .then((step0) => {
    steakContainer.innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    steakContainer.innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    steakContainer.innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    steakContainer.innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    steakContainer.innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    steakContainer.innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    steakContainer.innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    steakContainer.innerHTML += `<li>${step7}</li>`;
    // After the last step, add the final message
    steakContainer.innerHTML += `<li>Steak is ready!</li>`;
    steakImg.removeAttribute("hidden");
  })
  .catch((error) => {
    console.error(error);
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  const broccoliContainer = document.querySelector("#broccoli");
  const broccoliImg = document.querySelector("#broccoliImg");
  try {
    let step0 = await obtainInstruction("broccoli", 0);
    broccoliContainer.innerHTML += `<li>${step0}</li>`;

    let step1 = await obtainInstruction("broccoli", 1);
    broccoliContainer.innerHTML += `<li>${step1}</li>`;

    let step2 = await obtainInstruction("broccoli", 2);
    broccoliContainer.innerHTML += `<li>${step2}</li>`;

    let step3 = await obtainInstruction("broccoli", 3);
    broccoliContainer.innerHTML += `<li>${step3}</li>`;

    let step4 = await obtainInstruction("broccoli", 4);
    broccoliContainer.innerHTML += `<li>${step4}</li>`;

    let step5 = await obtainInstruction("broccoli", 5);
    broccoliContainer.innerHTML += `<li>${step5}</li>`;

    let step6 = await obtainInstruction("broccoli", 6);
    broccoliContainer.innerHTML += `<li>${step6}</li>`;

    broccoliContainer.innerHTML += `<li>Broccoli is ready!</li>`;
    broccoliImg.removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
async function makeBrusselsSprouts() {
  const brusselsSproutsContainer = document.querySelector("#brusselsSprouts");
  const brusselsSproutsImg = document.querySelector("#brusselsSproutsImg");

  try {
    const cookingStepPromises = [
      obtainInstruction("brusselsSprouts", 0),
      obtainInstruction("brusselsSprouts", 1),
      obtainInstruction("brusselsSprouts", 2),
      obtainInstruction("brusselsSprouts", 3),
      obtainInstruction("brusselsSprouts", 4),
      obtainInstruction("brusselsSprouts", 5),
      obtainInstruction("brusselsSprouts", 6),
      obtainInstruction("brusselsSprouts", 7),
    ];

    const cookingSteps = await Promise.all(cookingStepPromises);

    cookingSteps.forEach((step) => {
      brusselsSproutsContainer.innerHTML += `<li>${step}</li>`;
    });

    brusselsSproutsContainer.innerHTML += `<li>Brussels sprouts are ready!</li>`;
    brusselsSproutsImg.removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}

makeBrusselsSprouts();
