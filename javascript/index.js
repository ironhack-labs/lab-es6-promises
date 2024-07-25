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
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;

          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log('Error:', error));
      }, (error) => console.log('Error:', error));
    }, (error) => console.log('Error:', error));
  }, (error) => console.log('Error:', error));
}, (error) => console.log('Error:', error));


// Iteration 2 - using promises
obtainInstruction('steak', 0)
    .then((step0) => {
      document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
      return obtainInstruction('steak', 1); // Return the next promise
    })
    .then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
      return obtainInstruction('steak', 2); // Return the next promise
    })
    .then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      return obtainInstruction('steak', 3); // Return the next promise
    })
    .then((step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
      return obtainInstruction('steak', 4); // Return the next promise
    })
    .then((step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
      return obtainInstruction('steak', 5); // Return the next promise
    })
    .then((step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
      return obtainInstruction('steak', 6); // Return the next promise
    })
    .then((step6) => {
      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
      return obtainInstruction('steak', 7); // Return the next promise
    })
    .then((step7) => {
      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;

      document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;

      document.querySelector("#steakImg").removeAttribute("hidden");
    })
    .catch((error) => console.log('Error:', error)); // Handle any errors


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    // Fetch and display each step sequentially
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 0)}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 1)}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 2)}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 3)}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 4)}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 5)}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 6)}</li>`;

    // Add the final message
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");

  } catch (error) {
    console.log('Error:', error); // Handle any errors
  }
}

makeBroccoli();


// Bonus 2 - Promise all
async function makeBrusselsSprouts() {
  try {
    const stepsPromises = [
      obtainInstruction('brusselsSprouts', 0),
      obtainInstruction('brusselsSprouts', 1),
      obtainInstruction('brusselsSprouts', 2),
      obtainInstruction('brusselsSprouts', 3),
      obtainInstruction('brusselsSprouts', 4),
      obtainInstruction('brusselsSprouts', 5),
      obtainInstruction('brusselsSprouts', 6),
      obtainInstruction('brusselsSprouts', 7),
    ];

    // Wait for all promises to resolve
    const steps = await Promise.all(stepsPromises);

    // Display each step
    steps.forEach(step => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    });

    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.log('Error:', error); // Handle any errors
  }

}

makeBrusselsSprouts();
