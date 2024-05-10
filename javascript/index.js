// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        document.querySelector("#mashedPotatoes").innerHTML += `<li class="ready">Mashed potatoes are ready!</li>`;
      }, (error) => {
        console.error(error);
      });
    }, (error) => {
      console.error(error);
    });
  }, (error) => {
    console.error(error);
  });
}, (error) => {
  console.error(error);
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#steak").innerHTML += `<li class="ready">Steak is ready!</li>`;
  })
  .catch((error) => {
    console.error(error);
  });


async function makeBroccoli() {
  try {

    // Obtain instructions for Broccoli
    const steps = [
      await obtainInstruction('broccoli', 0),
      await obtainInstruction('broccoli', 1),
      await obtainInstruction('broccoli', 2),
      await obtainInstruction('broccoli', 3),
      await obtainInstruction('broccoli', 4),
      await obtainInstruction('broccoli', 5),
      await obtainInstruction('broccoli', 6)
    ];

    // Add each step to the list
    steps.forEach(step => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });

    // Add final message
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

    // Display the broccoli image
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.error('Error:', error);
  }
}

makeBroccoli();




// Bonus 1
const allStepsCompleted = Promise.all([
  obtainInstruction('mashedPotatoes', mashedPotatoes.length - 1),
  obtainInstruction('steak', steak.length - 1),
  obtainInstruction('brusselsSprouts', brusselsSprouts.length - 1),
  obtainInstruction('broccoli', broccoli.length - 1)
]);

allStepsCompleted.then(() => {
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  document.querySelector("#steakImg").removeAttribute("hidden");
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  document.querySelector("#broccoliImg").removeAttribute("hidden");
});

// Bonus: Iteration 5
const brusselsSproutsSteps = [];
for (let i = 0; i < brusselsSprouts.length - 1; i++) {
  brusselsSproutsSteps.push(obtainInstruction('brusselsSprouts', i));
}

Promise.all(brusselsSproutsSteps)
  .then(steps => {
    const brusselsSproutsList = document.querySelector("#brusselsSprouts");
    steps.forEach(step => {
      brusselsSproutsList.innerHTML += `<li>${step}</li>`;
    });
    brusselsSproutsList.innerHTML += `<li>Brussels sprouts are ready!</li>`;
  })
  .catch(error => {
    console.error('Promise.all error:', error);
  });
