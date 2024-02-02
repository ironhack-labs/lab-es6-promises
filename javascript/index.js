// 🚨🚨🚨 Comment out the below code before you start working on the code
function getInstructionPromise(recipe, step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getInstruction(recipe, step, resolve, reject);
    }, 1000);
  });
}

async function CookingSteps() {
  try {
    const step0 = await getInstructionPromise("mashedPotatoes", 0);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

    const step1 = await getInstructionPromise("mashedPotatoes", 1);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    const step2 = await getInstructionPromise("mashedPotatoes", 2);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

    const step3 = await getInstructionPromise("mashedPotatoes", 3);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

    const step4 = await getInstructionPromise("mashedPotatoes", 4);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

CookingSteps();

// Iteration 2 - using promises
function obtainInstruction(recipe, step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getInstruction(recipe, step, resolve, reject);
    }, 000);
  });
}

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
    document.querySelector("steak", 8).removeAttribute("");
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
function obtainInstruction(recipe, step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getInstruction(recipe, step, resolve, reject);
    }, 1000);
  });
}

async function BroccoliCookingSteps() {
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
    document.querySelector("#broccoliImg").removeAttribute("");
  } catch (error) {
    console.log(error);
  }
}
BroccoliCookingSteps();

// Bonus 2 - Promise all
// ...
