const addStep = (food, step) => {
  document.querySelector(`#${food}`).innerHTML += `<li>${step}</li>`;
};

const showFood = (food) => {
  document.querySelector(`#${food}Img`).removeAttribute("hidden");
};

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
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
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
  })
  .then((step7) => {
    addStep("steak", step7);
    addStep("steak", "Stake is ready!");
    showFood("steak");
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    for (let step = 0; step < broccoli.length; step++) {
      const instruction = await obtainInstruction("broccoli", step);
      addStep("broccoli", instruction);
    }

    addStep("broccoli", "Brocoli is ready!");
    showFood("broccoli");
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
const brusselsSproutsPromises = [
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
];

Promise.all(brusselsSproutsPromises)
  .then((steps) => {
    steps.forEach((step) => addStep("brusselsSprouts", step));
    addStep("brusselsSprouts", "Brussels sprouts are ready!");
  })
  .catch((error) => console.log(error));
