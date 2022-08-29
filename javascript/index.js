// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   1,
//   (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   2,
//   (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   3,
//   (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   4,
//   (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   },
//   (error) => console.log(error)
// );

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                    document
                      .getElementById("mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (err) => {
                    console.log(err);
                  }
                );
              },
              (err) => {
                console.log(err);
              }
            );
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
  }
);

// Iteration 2 - using promises

// Manually
// obtainInstruction("steak", 0)
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 1);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 2);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 3);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 4);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 5);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 6);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 7);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => {
//     document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
//     document.getElementById("steakImg").removeAttribute("hidden");
//   });

// With a for loop
let inst;
for (let i = 1; i <= steak.length - 1; i++) {
  inst = obtainInstruction("steak", i)
    .then((step) => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    })
    .catch((err) => console.log(err));
}

inst.finally(() => {
  document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
  document.getElementById("steakImg").removeAttribute("hidden");
});

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    // Manually
    // const step0 = await obtainInstruction("broccoli", 0);
    // document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    // const step1 = await obtainInstruction("broccoli", 1);
    // document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    // const step2 = await obtainInstruction("broccoli", 2);
    // document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    // const step3 = await obtainInstruction("broccoli", 3);
    // document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    // const step4 = await obtainInstruction("broccoli", 4);
    // document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    // const step5 = await obtainInstruction("broccoli", 5);
    // document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    // const step6 = await obtainInstruction("broccoli", 6);
    // document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    // With a for loop
    for (let i = 0; i <= broccoli.length - 1; i++) {
      const step = await obtainInstruction("broccoli", i);
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }
  } catch {
    (err) => console.log(err);
  } finally {
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!.</li>`;
    document.getElementById("broccoliImg").removeAttribute("hidden");
  }
}
makeBroccoli();

// Bonus 2 - Promise all
// Manually
const step0 = obtainInstruction("brusselsSprouts", 0);
const step1 = obtainInstruction("brusselsSprouts", 1);
const step2 = obtainInstruction("brusselsSprouts", 2);
const step3 = obtainInstruction("brusselsSprouts", 3);
const step4 = obtainInstruction("brusselsSprouts", 4);
const step5 = obtainInstruction("brusselsSprouts", 5);
const step6 = obtainInstruction("brusselsSprouts", 6);
const step7 = obtainInstruction("brusselsSprouts", 7);

// With a for loop
const steps = [];
for (let i = 0; i <= brusselsSprouts.length - 1; i++) {
  const step = obtainInstruction("brusselsSprouts", i);
  steps.push(step);
}

// Manually we change steps for [step0,step1,step2,step2,step3,step4,step5,step6,step7]
Promise.all(steps)
  .then((values) => {
    for (let value of values) {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${value}</li>`;
    }
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels Sprouts are ready!.</li>`;
    document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
  });
