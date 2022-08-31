// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*   getInstruction("mashedPotatoes",  0, (step1) => {
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

setTimeout(() => {
  getInstruction("mashedPotatoes", 0, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  });
}, 0);

setTimeout(() => {
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  });
}, 1001);

setTimeout(() => {
  getInstruction("mashedPotatoes", 2, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  });
}, 2002);

setTimeout(() => {
  getInstruction("mashedPotatoes", 3, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  });
}, 3003);

setTimeout(() => {
  getInstruction("mashedPotatoes", 4, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
    document.querySelector("#mashedPotatoes").innerHTML +=
      "<li>Mashed potatoes are ready!</li>";
    document.getElementById("mashedPotatoesImg").removeAttribute("hidden");
  });
}, 4004);

// Iteration 2 - using promises

obtainInstruction("steak", 0)
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((result) => {
    document.querySelector("#steak").innerHTML += `<li>${result}</li>`;
    document.querySelector("#steak").innerHTML += "<li>Steak is ready!</li>";
    document.getElementById("steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await

async function inputBroccoliRecipe() {
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
    const step6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  } finally {
    document.querySelector("#broccoli").innerHTML +=
      "<li>Broccoli is ready!</li>";
    document.getElementById("broccoliImg").removeAttribute("hidden");
  }
}

inputBroccoliRecipe();

// Bonus 2 - Promise all

const promiseStep0 = obtainInstruction("brusselsSprouts", 0);
const promiseStep1 = obtainInstruction("brusselsSprouts", 1);
const promiseStep2 = obtainInstruction("brusselsSprouts", 2);
const promiseStep3 = obtainInstruction("brusselsSprouts", 3);
const promiseStep4 = obtainInstruction("brusselsSprouts", 4);
const promiseStep5 = obtainInstruction("brusselsSprouts", 5);
const promiseStep6 = obtainInstruction("brusselsSprouts", 6);
const promiseStep7 = obtainInstruction("brusselsSprouts", 7);

Promise.all([
  promiseStep0,
  promiseStep1,
  promiseStep2,
  promiseStep3,
  promiseStep4,
  promiseStep5,
  promiseStep6,
  promiseStep7,
]).then((values) => {
  values.forEach(
    (value) =>
      (document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${value}</li>`)
  );
  document.querySelector("#brusselsSprouts").innerHTML +=
    "<li>Brussels Sprouts is ready!</li>";
  document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
});
 