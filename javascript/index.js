// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);*/

// Iteration 1 - using callbacks

function getInstruction(instructionsIndex, callback, errorCallback) {
  if (!mashedPotatoes[instructionsIndex]) {
    errorCallback("Instruction not found");
    return;
  }

  document.querySelector(
    "#mashedPotatoes"
  ).innerHTML += `<li>${mashedPotatoes[instructionsIndex]}</li>`;

  callback();
}
getInstruction(0, () => {
  getInstruction(1, () => {
    getInstruction(2, () => {
      getInstruction(3, () => {
        getInstruction(4, () => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed Potatoes are ready!</li>`;
          document
            .querySelector("#mashedPotatoesImg")
            .removeAttribute("hidden");
        });
      });
    });
  });
});

// Iteration 2 - using promises

obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.error("Error in obtaining steak instructions:", error);
  });

// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    const step1 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}

makeBroccoli();

function makeBrusselsSprouts() {
  const promise1 = obtainInstruction("brusselsSprouts", 0);
  const promise2 = obtainInstruction("brusselsSprouts", 1);
  const promise3 = obtainInstruction("brusselsSprouts", 2);
  const promise4 = obtainInstruction("brusselsSprouts", 3);
  const promise5 = obtainInstruction("brusselsSprouts", 4);
  const promise6 = obtainInstruction("brusselsSprouts", 5);
  const promise7 = obtainInstruction("brusselsSprouts", 6);
  const promise8 = obtainInstruction("brusselsSprouts", 7);

  Promise.all([
    promise1,
    promise2,
    promise3,
    promise4,
    promise5,
    promise6,
    promise7,
    promise8,
  ])
    .then((values) => {
      values.forEach((instruction) => {
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>${instruction}</li>`;
      });

      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>Brussels sprouts are ready!</li>`;

      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

makeBrusselsSprouts();
