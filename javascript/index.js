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
// getInstruction("mashedPotatoes", 0, (step0) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
//   // ... Your code here
//   // ...
// });

getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

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
        });
      });
    });
  });

  document.querySelector(
    "#mashedPotatoes"
  ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
});

// Iteration 2 - using promises
// Function to obtain instruction using a Promise
function obtainInstruction(recipe, stepIndex) {
  // Simulated asynchronous behavior using setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Resolve the promise with the instruction for the given recipe and stepIndex
      resolve(recipe[stepIndex]);
    }, 1000); // Simulated delay of 1 second
  });
}

// Iteration 2 - using promises
obtainInstruction(steak, 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction(steak, 1); // Proceed to the next step
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction(steak, 2); // Proceed to the next step
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction(steak, 3);
    // Continue chaining promises for subsequent steps if needed
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction(steak, 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction(steak, 5);
  })
  .catch((error) => {
    // Handle any errors that might occur during the Promise chain
    console.error("An error occurred:", error);
  });

// Iteration 3 using async/await
// Function to obtain instruction using a Promise
function obtainInstruction(recipe, stepIndex) {
  // Simulated asynchronous behavior using setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Resolve the promise with the instruction for the given recipe and stepIndex
      resolve(recipe[stepIndex]);
    }, 1000); // Simulated delay of 1 second
  });
}

// Async function to make broccoli
async function makeBroccoli() {
  try {
    // Obtain instructions for each step using await
    const step0 = await obtainInstruction(broccoli, 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction(broccoli, 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction(broccoli, 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction(broccoli, 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction(broccoli, 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction(broccoli, 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction(broccoli, 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    // If there are more steps, continue obtaining instructions and appending them to the list
  } catch (error) {
    // Handle any errors that might occur during the execution
    console.error("An error occurred:", error);
  }
}

// Call the makeBroccoli function to start the process
makeBroccoli();

// Bonus 2 - Promise all
// ...
