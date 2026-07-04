// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded.

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));
//
// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));
//
// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));
//
// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));
//
// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

function addStep(foodId, step) {
  document.querySelector(`#${foodId}`).innerHTML += `<li>${step}</li>`;
}

function showFoodImage(foodId) {
  document.querySelector(`#${foodId}Img`).removeAttribute("hidden");
}

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  addStep("mashedPotatoes", step0);

  getInstruction("mashedPotatoes", 1, (step1) => {
    addStep("mashedPotatoes", step1);

    getInstruction("mashedPotatoes", 2, (step2) => {
      addStep("mashedPotatoes", step2);

      getInstruction("mashedPotatoes", 3, (step3) => {
        addStep("mashedPotatoes", step3);

        getInstruction("mashedPotatoes", 4, (step4) => {
          addStep("mashedPotatoes", step4);
          addStep("mashedPotatoes", "Mashed potatoes are ready!");
          showFoodImage("mashedPotatoes");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    addStep("steak", step0);
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    addStep("steak", step1);
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    addStep("steak", step2);
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    addStep("steak", step3);
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    addStep("steak", step4);
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    addStep("steak", step5);
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    addStep("steak", step6);
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    addStep("steak", step7);
    addStep("steak", "Stake is ready!");
    showFoodImage("steak");
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    for (let i = 0; i < broccoli.length; i += 1) {
      const step = await obtainInstruction("broccoli", i);
      addStep("broccoli", step);
    }

    addStep("broccoli", "Broccoli is ready!");
    showFoodImage("broccoli");
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
])
  .then((steps) => {
    steps.forEach((step) => addStep("brusselsSprouts", step));
    addStep("brusselsSprouts", "Brussels sprouts are ready!");
    showFoodImage("brusselsSprouts");
  })
  .catch((error) => console.log(error));
