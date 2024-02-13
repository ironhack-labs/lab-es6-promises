// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  'mashedPotatoes',
  0,
  (step1) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  1,
  (step2) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  2,
  (step3) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  3,
  (step4) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  4,
  (step5) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step5}</li>`;
    document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;

  // Get the next step
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;

    // Get the next step
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector(
        '#mashedPotatoes'
      ).innerHTML += `<li>${step2}</li>`;

      // Get the next step
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${step3}</li>`;

        // Get the next step
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector(
            '#mashedPotatoes'
          ).innerHTML += `<li>${step4}</li>`;

          // Get the next step
          getInstruction('mashedPotatoes', 5, (step5) => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${step5}</li>`;

            // Get the next step
            getInstruction('mashedPotatoes', 6, (step6) => {
              document.querySelector(
                '#mashedPotatoes'
              ).innerHTML += `<li>${step6}</li>`;

              // Get the next step
              getInstruction('mashedPotatoes', 7, (step7) => {
                document.querySelector(
                  '#mashedPotatoes'
                ).innerHTML += `<li>${step7}</li>`;

                // Get the next step
                getInstruction('mashedPotatoes', 8, (step8) => {
                  document.querySelector(
                    '#mashedPotatoes'
                  ).innerHTML += `<li>${step8}</li>`;

                  // Get the next step
                  getInstruction('mashedPotatoes', 9, (step9) => {
                    document.querySelector(
                      '#mashedPotatoes'
                    ).innerHTML += `<li>${step9}</li>`;

                    // No more steps
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 - using promises
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;

    // Get the next step
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;

    // Get the next step
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;

    // Get the next step
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;

    // Get the next step
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;

    // Get the next step
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector('#steak').innerHTML += `<li>${step5}</li>`;

    // Get the next step
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector('#steak').innerHTML += `<li>${step6}</li>`;

    // Get the next step
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector('#steak').innerHTML += `<li>${step7}</li>`;

    // Get the next step
    return obtainInstruction('steak', 8);
  })
  .then((step8) => {
    document.querySelector('#steak').innerHTML += `<li>${step8}</li>`;

    // Get the next step
    return obtainInstruction('steak', 9);
  })
  .then((step9) => {
    document.querySelector('#steak').innerHTML += `<li>${step9}</li>`;

    // No more steps
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    // Obtain each instruction in order using await
    const step0 = await obtainInstruction('broccoli', 0);
    document.querySelector('#broccoli').innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction('broccoli', 1);
    document.querySelector('#broccoli').innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction('broccoli', 2);
    document.querySelector('#broccoli').innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction('broccoli', 3);
    document.querySelector('#broccoli').innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction('broccoli', 4);
    document.querySelector('#broccoli').innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction('broccoli', 5);
    document.querySelector('#broccoli').innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction('broccoli', 6);
    document.querySelector('#broccoli').innerHTML += `<li>${step6}</li>`;

    const step7 = await obtainInstruction('broccoli', 7);
    document.querySelector('#broccoli').innerHTML += `<li>${step7}</li>`;

    const step8 = await obtainInstruction('broccoli', 8);
    document.querySelector('#broccoli').innerHTML += `<li>${step8}</li>`;

    const step9 = await obtainInstruction('broccoli', 9);
    document.querySelector('#broccoli').innerHTML += `<li>${step9}</li>`;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the async function to start the process
makeBroccoli();
// Bonus 2 - Promise all
async function makeBroccoli() {
  try {
    // Obtain each instruction in order using await
    const step0 = await obtainInstruction('broccoli', 0);
    document.querySelector('#broccoli').innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction('broccoli', 1);
    document.querySelector('#broccoli').innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction('broccoli', 2);
    document.querySelector('#broccoli').innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction('broccoli', 3);
    document.querySelector('#broccoli').innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction('broccoli', 4);
    document.querySelector('#broccoli').innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction('broccoli', 5);
    document.querySelector('#broccoli').innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction('broccoli', 6);
    document.querySelector('#broccoli').innerHTML += `<li>${step6}</li>`;

    const step7 = await obtainInstruction('broccoli', 7);
    document.querySelector('#broccoli').innerHTML += `<li>${step7}</li>`;

    const step8 = await obtainInstruction('broccoli', 8);
    document.querySelector('#broccoli').innerHTML += `<li>${step8}</li>`;

    const step9 = await obtainInstruction('broccoli', 9);
    document.querySelector('#broccoli').innerHTML += `<li>${step9}</li>`;

    // Check if all steps for broccoli are listed
    const broccoliSteps = document.querySelectorAll('#broccoli li');
    if (broccoliSteps.length === 10) {
      // Assuming there are 10 steps
      // Remove the hidden attribute from the broccoli image
      document.getElementById('broccoliImg').removeAttribute('hidden');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the async function to start the process
makeBroccoli();

//Iteration 5
async function makeBrusselsSprouts() {
  try {
    // Obtain all instructions concurrently using Promise.all
    const instructions = await Promise.all([
      obtainInstruction('brusselsSprouts', 0),
      obtainInstruction('brusselsSprouts', 1),
      obtainInstruction('brusselsSprouts', 2),
      obtainInstruction('brusselsSprouts', 3),
      obtainInstruction('brusselsSprouts', 4),
      obtainInstruction('brusselsSprouts', 5),
      obtainInstruction('brusselsSprouts', 6),
      obtainInstruction('brusselsSprouts', 7),
      obtainInstruction('brusselsSprouts', 8),
      obtainInstruction('brusselsSprouts', 9),
    ]);

    // Append each instruction to the #brusselsSprouts element
    const brusselsSproutsList = document.querySelector('#brusselsSprouts');
    instructions.forEach((instruction) => {
      brusselsSproutsList.innerHTML += `<li>${instruction}</li>`;
    });

    // Display additional message indicating Brussels sprouts are ready
    brusselsSproutsList.innerHTML += `<li>Brussels sprouts are ready!</li>`;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the async function to start the process
makeBrusselsSprouts();
