// 🚨 Iteration 0: deja comentado el código "Out of sync" del starter.
// (Si lo has borrado, da igual.)

// Helpers
const addStep = (selector, text) => {
  document.querySelector(selector).innerHTML += `<li>${text}</li>`;
};

const showImg = (imgSelector) => {
  document.querySelector(imgSelector).removeAttribute("hidden");
};

// ==========================
// Iteration 1 - callbacks (mashedPotatoes)
// ==========================
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    addStep("#mashedPotatoes", step0);

    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        addStep("#mashedPotatoes", step1);

        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            addStep("#mashedPotatoes", step2);

            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                addStep("#mashedPotatoes", step3);

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    addStep("#mashedPotatoes", step4);
                    addStep("#mashedPotatoes", "Mashed potatoes are ready!");
                    showImg("#mashedPotatoesImg");
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

// ==========================
// Iteration 2 - promises then() (steak)
// ==========================
obtainInstruction("steak", 0)
  .then((step0) => {
    addStep("#steak", step0);
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    addStep("#steak", step1);
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    addStep("#steak", step2);
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    addStep("#steak", step3);
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    addStep("#steak", step4);
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    addStep("#steak", step5);
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    addStep("#steak", step6);
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    addStep("#steak", step7);
    addStep("#steak", "Steak is ready!");
    showImg("#steakImg");
  })
  .catch((error) => console.log(error));

// ==========================
// Iteration 3 - async/await (broccoli)
// ==========================
async function makeBroccoli() {
  try {
    for (let i = 0; i < broccoli.length; i++) {
      const step = await obtainInstruction("broccoli", i);
      addStep("#broccoli", step);
    }
    addStep("#broccoli", "Broccoli is ready!");
    showImg("#broccoliImg");
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// ==========================
// Bonus - Promise.all() (brusselsSprouts)
// ==========================
Promise.all(
  brusselsSprouts.map((_, i) => obtainInstruction("brusselsSprouts", i))
)
  .then((steps) => {
    steps.forEach((step) => addStep("#brusselsSprouts", step));
    addStep("#brusselsSprouts", "Brussels sprouts are ready!");
    showImg("#brusselsSproutsImg");
  })
  .catch((error) => console.log(error));
