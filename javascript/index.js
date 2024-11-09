// javascript/index.js

// Iteration 1 - using callbacks to display the steps in the correct order
// Mashed potatoes example using nested callbacks
// This section uses nested callbacks to ensure each instruction for mashed potatoes is executed in the correct order, displaying each step sequentially.
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`; // Adds the first step to the mashed potatoes list in the HTML
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`; // Adds the second step to the mashed potatoes list in the HTML
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`; // Adds the third step to the mashed potatoes list in the HTML
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`; // Adds the fourth step to the mashed potatoes list in the HTML
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`; // Adds the fifth step to the mashed potatoes list in the HTML
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`; // Adds a final message indicating that the mashed potatoes are ready
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden"); // Reveals the mashed potatoes image
        }, (error) => console.log(error)); // Handles any errors for step 4
      }, (error) => console.log(error)); // Handles any errors for step 3
    }, (error) => console.log(error)); // Handles any errors for step 2
  }, (error) => console.log(error)); // Handles any errors for step 1
}, (error) => console.log(error)); // Handles any errors for step 0

// Iteration 2 - using promises to display the steps in the correct order
// Steak example using promises
// This starts the chain of promises to ensure each instruction for steak is executed in the correct order, displaying each step sequentially.
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`; // Adds the first step to the steak list in the HTML
    return obtainInstruction('steak', 1); // Returns the next promise
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`; // Adds the second step to the steak list in the HTML
    return obtainInstruction('steak', 2); // Returns the next promise
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`; // Adds the third step to the steak list in the HTML
    return obtainInstruction('steak', 3); // Returns the next promise
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`; // Adds the fourth step to the steak list in the HTML
    return obtainInstruction('steak', 4); // Returns the next promise
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`; // Adds the fifth step to the steak list in the HTML
    return obtainInstruction('steak', 5); // Returns the next promise
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`; // Adds the sixth step to the steak list in the HTML
    return obtainInstruction('steak', 6); // Returns the next promise
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`; // Adds the seventh step to the steak list in the HTML
    return obtainInstruction('steak', 7); // Returns the next promise
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`; // Adds the eighth step to the steak list in the HTML
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`; // Adds a final message indicating that the steak is ready
    document.querySelector("#steakImg").removeAttribute("hidden"); // Reveals the steak image
  })
  .catch((error) => console.log(error)); // Handles any errors during the chain

// Iteration 3 using async/await to display the steps in the correct order
// Brussels sprouts example using async/await
// Defines an async function that uses async/await to execute each instruction for Brussels sprouts in the correct order.
async function makeBrusselsSprouts() {
  try {
    const step0 = await obtainInstruction('brusselsSprouts', 0);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`; // Adds the first step to the Brussels sprouts list in the HTML

    const step1 = await obtainInstruction('brusselsSprouts', 1);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`; // Adds the second step to the Brussels sprouts list in the HTML

    const step2 = await obtainInstruction('brusselsSprouts', 2);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`; // Adds the third step to the Brussels sprouts list in the HTML

    const step3 = await obtainInstruction('brusselsSprouts', 3);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`; // Adds the fourth step to the Brussels sprouts list in the HTML

    const step4 = await obtainInstruction('brusselsSprouts', 4);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`; // Adds the fifth step to the Brussels sprouts list in the HTML

    const step5 = await obtainInstruction('brusselsSprouts', 5);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`; // Adds the sixth step to the Brussels sprouts list in the HTML

    const step6 = await obtainInstruction('brusselsSprouts', 6);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`; // Adds the seventh step to the Brussels sprouts list in the HTML

    const step7 = await obtainInstruction('brusselsSprouts', 7);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`; // Adds the eighth step to the Brussels sprouts list in the HTML

    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`; // Adds a final message indicating that the Brussels sprouts are ready
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden"); // Reveals the Brussels sprouts image
  } catch (error) {
    console.log(error); // Handles any errors that occur during the async/await execution
  }
}
makeBrusselsSprouts();

// Bonus - Broccoli using async/await
// Defines an async function that uses async/await to execute each instruction for broccoli in the correct order.
async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`; // Adds the first step to the broccoli list in the HTML

    const step1 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`; // Adds the second step to the broccoli list in the HTML

    const step2 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`; // Adds the third step to the broccoli list in the HTML

    const step3 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`; // Adds the fourth step to the broccoli list in the HTML

    const step4 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`; // Adds the fifth step to the broccoli list in the HTML

    const step5 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`; // Adds the sixth step to the broccoli list in the HTML

    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`; // Adds a final message indicating that the broccoli is ready
    document.querySelector("#broccoliImg").removeAttribute("hidden"); // Reveals the broccoli image
  } catch (error) {
    console.log(error); // Handles any errors that occur during the async/await execution
  }
}
makeBroccoli();

// Bonus - Iteration 5 - Promise.all()
// Creates an array of promises for each step of Brussels sprouts preparation to be executed with Promise.all.
const brusselsSproutsPromises = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7)
];

// Uses Promise.all to ensure all Brussels sprouts steps are completed before displaying the final message.
Promise.all(brusselsSproutsPromises)
  .then((steps) => {
    steps.forEach((step) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`; // Adds each step to the Brussels sprouts list in the HTML
    });
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`; // Adds a final message indicating that the Brussels sprouts are ready
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden"); // Reveals the Brussels sprouts image
  })
  .catch((error) => console.log(error)); // Handles any errors that occur during the execution of Promise.all
