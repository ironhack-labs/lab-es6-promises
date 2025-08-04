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
// ...
// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li>`;
                    let step5 = "Mashed potatoes are ready!";
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += ` <li>${step5}</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  () => {}
                );
              },
              () => {}
            );
          },
          () => {}
        );
      },
      () => {}
    );
  },
  () => {}
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
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    let step8 = "Steak is ready!";
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
  })
  .finally(() => {
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

async function makeBroccoli() {
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
  let step7 = "Broccoli is ready!";
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}
makeBroccoli();

async function makeBrusselsSprouts() {
  const step0 = await obtainInstruction("brusselsSprouts", 0);
  // document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;
  const step1 = await obtainInstruction("brusselsSprouts", 1);
  // document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;
  const step2 = await obtainInstruction("brusselsSprouts", 2);
  // document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;
  const step3 = await obtainInstruction("brusselsSprouts", 3);
  // document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;
  const step4 = await obtainInstruction("brusselsSprouts", 4);
  // document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;
  const step5 = await obtainInstruction("brusselsSprouts", 5);
  // document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;
  const step6 = await obtainInstruction("brusselsSprouts", 6);
  // document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;
  const step7 = await obtainInstruction("brusselsSprouts", 7);
  // document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;

  const result = await Promise.all([
    step0,
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    step7,
  ]);
  result.forEach(
    (oneItem) =>
      (document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${oneItem}</li>`)
  );
  let step8 = "BrusselsSprouts are ready!";
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step8}</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBrusselsSprouts();
// Bonus 2 - Promise all
// ...
