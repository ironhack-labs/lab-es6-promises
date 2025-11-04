// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction("mashedPotatoes", 0, (step1) => { // step 1 is value of instruction, in other words, it's the output of first step.
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error))



// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...

obtainInstruction("steak", 0)
  .then((outputOfStep0) => {
    document.querySelector("#steak").innerHTML += `<li>${outputOfStep0}</li>`;
    return obtainInstruction("steak", 1)
  })
  .then((outputOfStep1) => {
    document.querySelector("#steak").innerHTML += `<li>${outputOfStep1}</li>`;
    return obtainInstruction("steak", 2)
  })
  .then((outputOfStep2) => {
    document.querySelector("#steak").innerHTML += `<li>${outputOfStep2}</li>`;
    return obtainInstruction("steak", 3)
  })
  .then((outputOfStep3) => {
    document.querySelector("#steak").innerHTML += `<li>${outputOfStep3}</li>`;
    return obtainInstruction("steak", 4)
  })
  .then((outputOfStep4) => {
    document.querySelector("#steak").innerHTML += `<li>${outputOfStep4}</li>`;
    return obtainInstruction("steak", 5)
  })
  .then((outputOfStep5) => {
    document.querySelector("#steak").innerHTML += `<li>${outputOfStep5}</li>`;
    return obtainInstruction("steak", 6)
  })
  .then((outputOfStep6) => {
    document.querySelector("#steak").innerHTML += `<li>${outputOfStep6}</li>`;
    return obtainInstruction("steak", 7)
  })
  .then((outputOfStep7) => {
    document.querySelector("#steak").innerHTML += `<li>${outputOfStep7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error))

// Iteration 3 using async/await
// ...

async function makeBroccoli() {

  try {
    const outputStep0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${outputStep0}</li>`;

    const outputStep1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${outputStep1}</li>`;

    const outputStep2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${outputStep2}</li>`;

    const outputStep3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${outputStep3}</li>`;

    const outputStep4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${outputStep4}</li>`;

    const outputStep5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${outputStep5}</li>`;

    const outputStep6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${outputStep6}</li>`;

    document.querySelector("#steak").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden")

  }
  catch (error) {
    console.log(error)
  }

}

makeBroccoli()



// Bonus 2 - Promise all
// ...

Promise.all( //just writing down all functions that returns each steps value one by one
 [ obtainInstruction("brusselsSprouts", 0), // IT NEEDS TO BE ARRAY WITH SQUARE BRACKETS []
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),]
).then((steps => { //returns an array so i need to be careful and use map methodds to process data that i exrtracted
  steps.forEach(step => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
  });
  document.querySelector("#steak").innerHTML += `<li>Brussels sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")

}))