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
// ...
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
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
        });
      });
    });
  });
});

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  })
  .then(
    obtainInstruction("steak", 1).then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
      return obtainInstruction("steak", 2)
    })
  )
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak", 8)
  })
  .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;    
  })


// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  try {
    const instructionOne = await obtainInstruction("broccoli", 0);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${instructionOne}</li>`;
    const instructionTwo = await obtainInstruction("broccoli", 1);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${instructionTwo}</li>`;
    const instructionThree = await obtainInstruction("broccoli", 2);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${instructionThree}</li>`;
    const instructionFour = await obtainInstruction("broccoli", 3);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${instructionFour}</li>`;
    const instructionFive = await obtainInstruction("broccoli", 4);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${instructionFive}</li>`;
    const instructionSix = await obtainInstruction("broccoli", 5);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${instructionSix}</li>`;
    const instructionSeven = await obtainInstruction("broccoli", 6);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${instructionSeven}</li>`;
  } finally {
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
  }
}
makeBroccoli();
// Bonus 2 - Promise all
// ...

const firstPromise = obtainInstruction("brusselsSprouts", 0);
const secondPromise = obtainInstruction("brusselsSprouts", 1);
const thirdPromise = obtainInstruction("brusselsSprouts", 2);
const fourthPromise = obtainInstruction("brusselsSprouts", 3);
const fifthPromise = obtainInstruction("brusselsSprouts", 4);
const sixthPromise = obtainInstruction("brusselsSprouts", 5);
const seventhPromise = obtainInstruction("brusselsSprouts", 6);

Promise.all([
  firstPromise,
  secondPromise,
  thirdPromise,
  fourthPromise,
  fifthPromise,
  sixthPromise,
  seventhPromise,
]).then((instruction) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction[0]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction[1]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction[2]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction[3]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction[4]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction[5]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction[6]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
});
