// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction("mashedPotatoes", 1, (step1) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step1}</li>`;
      getInstruction("mashedPotatoes", 2, (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction("mashedPotatoes", 3, (step3) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step3}</li>`;
          getInstruction("mashedPotatoes", 4, (step4) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step4}</li>`;
            document.querySelector("#mashedPotatoes").innerHTML +=
              "<li>Mashed potatoes are ready!</li>";
            document
              .querySelector("#mashedPotatoesImg")
              .removeAttribute("hidden");
          });
        });
      });
    });
  },
  (error) => {
    console.error(error);
  }
);

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
    document.querySelector("#steak").innerHTML += "<li>Steak is ready!</li>";
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.error(error);
  });

// Iteration 3 - using async/await
async function makeBrusselsSprouts() {
  try {
    const step0 = await obtainInstruction("brusselsSprouts", 0);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction("brusselsSprouts", 1);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction("brusselsSprouts", 2);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction("brusselsSprouts", 3);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("brusselsSprouts", 4);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction("brusselsSprouts", 5);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction("brusselsSprouts", 6);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;

    const step7 = await obtainInstruction("brusselsSprouts", 7);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`;

    const step8 = await obtainInstruction("brusselsSprouts", 8);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step8}</li>`;

    document.querySelector("#brusselsSprouts").innerHTML +=
      "<li>Brussels sprouts are ready!</li>";
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}

makeBrusselsSprouts();

// Iteration 4 - using async/await
async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    document.querySelector("#broccoli").innerHTML +=
      "<li>Broccoli is ready!</li>";
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}

makeBroccoli();
