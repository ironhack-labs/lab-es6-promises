//thanks Nacho!
const addStep = (step) => {
  document.querySelector('#mashedPotatoes').innerHTML += `<li>${step}</li>`;
}

const errorCallback = function (error) {
  console.error('Error: ', error);
}

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step) => {
  addStep(step);
  getInstruction("mashedPotatoes", 1, (step) => {
    addStep(step);
    getInstruction("mashedPotatoes", 2, (step) => {
      addStep(step);
      getInstruction("mashedPotatoes", 3, (step) => {
        addStep(step);
        getInstruction("mashedPotatoes", 4, (step) => {
          addStep(step);
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, errorCallback);
      },errorCallback);
    },errorCallback);
  }, errorCallback);
}, errorCallback);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((instruction) => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
  })
  .then(() => document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`)
  .catch(errorCallback)
  .finally(() => {
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
async function makeBroccoli() {
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
    document.querySelector("#broccoli").innerHTML += 
      `<li>${step6}</li>
       <li>Broccoli is ready!</li>`;
    document.querySelector('#broccoliImg').removeAttribute('hidden');
  } catch (error) {
    errorCallback(error);
  }
}

makeBroccoli();

//Bonus 2 - Promise all
const brusselsSproutsPromiseArray = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7),
]

Promise.all(brusselsSproutsPromiseArray)
  .then((response) => {
    response.forEach(instruction => {
      document.querySelector('#brusselsSprouts').innerHTML += `<li>${instruction}</li>`;
    })
  })
  .catch(errorCallback)
  .finally(() => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>brusselsSprouts is ready!</li>`;
    document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
  });