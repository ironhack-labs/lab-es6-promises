function addStep(food, step) {
  document.querySelector(`#${food}`).innerHTML += `<li>${step}</li>`;
}

function showFood(food) {
  document.querySelector(`#${food}Img`).removeAttribute("hidden");
}

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    addStep("mashedPotatoes", step0);

    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        addStep("mashedPotatoes", step1);

        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            addStep("mashedPotatoes", step2);

            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                addStep("mashedPotatoes", step3);

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    addStep("mashedPotatoes", step4);
                    addStep("mashedPotatoes", "Mashed potatoes are ready!");
                    showFood("mashedPotatoes");
                  },
                  console.error,
                );
              },
              console.error,
            );
          },
          console.error,
        );
      },
      console.error,
    );
  },
  console.error,
);

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
    addStep("steak", "Steak is ready!");
    showFood("steak");
  })
  .catch(console.error);

// Iteration 3 - using async/await
async function makeBroccoli() {
  try {
    for (let stepNumber = 0; stepNumber < broccoli.length; stepNumber += 1) {
      const step = await obtainInstruction("broccoli", stepNumber);
      addStep("broccoli", step);
    }

    addStep("broccoli", "Broccoli is ready!");
    showFood("broccoli");
  } catch (error) {
    console.error(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
Promise.all(
  brusselsSprouts.map((_, stepNumber) =>
    obtainInstruction("brusselsSprouts", stepNumber),
  ),
)
  .then((steps) => {
    steps.forEach((step) => addStep("brusselsSprouts", step));
    addStep("brusselsSprouts", "Brussels sprouts are ready!");
    showFood("brusselsSprouts");
  })
  .catch(console.error);
