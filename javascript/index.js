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
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step5}</li>`;
          document
            .querySelector("#mashedPotatoesImg")
            .removeAttribute("hidden"),
            (error) => console.log(error);
        });
      });
    });
  });
});

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => {
    alert(error);
  });

// Iteration 3 using async/await
let step1;
let step2;
let step3;
let step4;
let step5;
let step6;
let step7;

async function makeBroccoli() {
  try {
    step1 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    step2 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    step3 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    step4 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    step5 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    step6 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    step7 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${"Broccoli is ready!"}</li>`;
  } catch (error) {
    alert(error);
  }
}

makeBroccoli();

let bsStep1 = obtainInstruction("brusselsSprouts", 0);
let bsStep2 = obtainInstruction("brusselsSprouts", 1);
let bsStep3 = obtainInstruction("brusselsSprouts", 2);
let bsStep4 = obtainInstruction("brusselsSprouts", 3);
let bsStep5 = obtainInstruction("brusselsSprouts", 4);
let bsStep6 = obtainInstruction("brusselsSprouts", 5);
let bsStep7 = obtainInstruction("brusselsSprouts", 6);
let bsStep8 = obtainInstruction("brusselsSprouts", 7);

let brusselsSproutsArray = [
  bsStep1,
  bsStep2,
  bsStep3,
  bsStep4,
  bsStep5,
  bsStep6,
  bsStep7,
  bsStep8,
];

Promise.all(brusselsSproutsArray).then((brusselsSproutsArray.forEach((step) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
})))

document.querySelector(
  "#brusselsSprouts"
).innerHTML += `<li>${"BrusselsSprouts are ready!"}</li>`;
document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
