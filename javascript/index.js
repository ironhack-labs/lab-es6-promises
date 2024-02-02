// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */

// Iteration 1 - using callbacks
// ...
function printMashedPotatoesSteps() {
  getInstruction(
    "mashedPotatoes",
    0,
    (step1) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step1}</li>`;

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
                      document
                        .querySelector("#mashedPotatoesImg")
                        .removeAttribute("hidden");

                      document.querySelector(
                        "#mashedPotatoes"
                      ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
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
}

printMashedPotatoesSteps();

// Iteration 2 - using promises
// ...

function printSteakSteps() {
  obtainInstruction("steak", 0)
    .then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

      return obtainInstruction("steak", 1);
    })
    .then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;

      return obtainInstruction("steak", 2);
    })
    .then((step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;

      return obtainInstruction("steak", 3);
    })
    .then((step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;

      return obtainInstruction("steak", 4);
    })
    .then((step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");

      document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    })
    .catch((error) => console.log(error));
}
// Call the function to print steak steps
printSteakSteps();

// Iteration 3 using async/await
// ...

async function printBroccoliSteps() {
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
  } catch (error) {
    console.log(error);
  }
}

// Call the async function to print broccoli steps
printBroccoliSteps();

// Bonus 2 - Promise all
// ...
function printBrusselsSproutsSteps() {
  const stepsPromises = Array.from(
    { length: brusselsSprouts.length },
    (_, step) => obtainInstruction("brusselsSprouts", step)
  );

  Promise.all(stepsPromises)
    .then((steps) => {
      steps.forEach((step, index) => {
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>${step}</li>`;
      });

      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    })
    .catch((error) => console.log(error));
}

// Call the function to print Brussels Sprouts steps
printBrusselsSproutsSteps();
