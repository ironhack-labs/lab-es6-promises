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

const mashedPotatoesError = () => {
  document.querySelector(
    "#mashedPotatoes"
  ).innerHTML += `<li>Mashed potatoes are ready!</li>`;

  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
};
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction(
    "mashedPotatoes",
    1,
    (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;

      getInstruction(
        "mashedPotatoes",
        2,
        (step3) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step3}</li>`;

          getInstruction(
            "mashedPotatoes",
            3,
            (step4) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step4}</li>`;

              getInstruction(
                "mashedPotatoes",
                4,
                (step5) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step5}</li>`;

                  getInstruction(
                    "mashedPotatoes",
                    5,
                    (step6) => {
                      document.querySelector(
                        "#mashedPotatoes"
                      ).innerHTML += `<li>${step6}</li>`;
                    },
                    () => mashedPotatoesError()
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
});

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 7);
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  let i = 0;
  while (true) {
    try {
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${await obtainInstruction("broccoli", i)}</li>`;
      i++;
    } catch (error) {
      break;
    }
  }
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli();

// Bonus 2);broccolall
let brusselsSproutsPromises = [];
for (let i = 0; i < 8; i++) {
  brusselsSproutsPromises.push(obtainInstruction("brusselsSprouts", i));
}

Promise.all(brusselsSproutsPromises).then((steps) => {
  steps.forEach(
    (step) =>
      (document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step}</li>`)
  );
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
