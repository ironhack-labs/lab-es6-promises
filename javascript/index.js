const addInstruction = (listId, instruction) => {
  document.querySelector(`#${listId}`).innerHTML += `<li>${instruction}</li>`;
};

const showFoodImage = (foodId) => {
  document.querySelector(`#${foodId}Img`).removeAttribute("hidden");
};

const handleError = (error) => {
  console.error(error);
};

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    addInstruction("mashedPotatoes", step0);

    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        addInstruction("mashedPotatoes", step1);

        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            addInstruction("mashedPotatoes", step2);

            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                addInstruction("mashedPotatoes", step3);

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    addInstruction("mashedPotatoes", step4);
                    addInstruction(
                      "mashedPotatoes",
                      "Mashed potatoes are ready!"
                    );
                    showFoodImage("mashedPotatoes");
                  },
                  handleError
                );
              },
              handleError
            );
          },
          handleError
        );
      },
      handleError
    );
  },
  handleError
);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    addInstruction("steak", step0);
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    addInstruction("steak", step1);
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    addInstruction("steak", step2);
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    addInstruction("steak", step3);
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    addInstruction("steak", step4);
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    addInstruction("steak", step5);
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    addInstruction("steak", step6);
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    addInstruction("steak", step7);
    addInstruction("steak", "Stake is ready!");
    showFoodImage("steak");
  })
  .catch(handleError);

// Iteration 3 - using async/await
async function makeBroccoli() {
  try {
    for (let step = 0; step < broccoli.length; step += 1) {
      const instruction = await obtainInstruction("broccoli", step);
      addInstruction("broccoli", instruction);
    }

    addInstruction("broccoli", "Broccoli is ready!");
    showFoodImage("broccoli");
  } catch (error) {
    handleError(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise.all()
const brusselsSproutsPromises = brusselsSprouts.map((_, step) => {
  return obtainInstruction("brusselsSprouts", step);
});

Promise.all(brusselsSproutsPromises)
  .then((instructions) => {
    instructions.forEach((instruction) => {
      addInstruction("brusselsSprouts", instruction);
    });

    addInstruction("brusselsSprouts", "Brussels sprouts are ready!");
    showFoodImage("brusselsSprouts");
  })
  .catch(handleError);
