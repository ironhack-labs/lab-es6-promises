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
                    // After the last step, add the final statement
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                    // Optionally, reveal the image if there's one associated with this step
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
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
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1); // Chain next step promise
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2); // Chain next step promise (and so on)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    // ... Continue chaining for subsequent steps
  })
  .then((finalStep) => {
    // Handle the final step
    document.querySelector("#steak").innerHTML += `<li>${finalStep}</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  })
  .catch((error) => console.error(error)); // Handle any errors during promise chain

// Iteration 3 using async/await
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

    // After the last step, add the final statement.
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;

    // Optionally, reveal the image if there's one associated with this step.
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    // Handle any errors that might occur during the fetch
    console.error(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
function displayBrusselsSproutsInstructions() {
  // Creating an array of promises for each instruction step
  const promises = [
    obtainInstruction("brusselsSprouts", 0),
    obtainInstruction("brusselsSprouts", 1),
    obtainInstruction("brusselsSprouts", 2),
    obtainInstruction("brusselsSprouts", 3),
    obtainInstruction("brusselsSprouts", 4),
    obtainInstruction("brusselsSprouts", 5),
    obtainInstruction("brusselsSprouts", 6),
    obtainInstruction("brusselsSprouts", 7),
  ];

  Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          document.querySelector(
            "#brusselsSprouts"
          ).innerHTML += `<li>${result.value}</li>`;
        } else {
          console.error(`Step ${index} failed with`, result.reason);
          // Optionally handle the rejected promise, like showing an error message
          // document.querySelector("#brusselsSprouts").innerHTML += `<li>Step ${index} could not be loaded</li>`;
        }
      });
      // After all steps, add the final statement
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
      // Optionally, reveal the image if there's one associated with this step
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    })
    .catch((error) => {
      // This catch block is technically not necessary for Promise.allSettled,
      // but could be used for additional error handling outside the promise processing
      console.error("Unexpected error:", error);
    });
}
displayBrusselsSproutsInstructions();
