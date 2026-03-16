// // This will print in the wrong order.
// // We added it as an example and to test that the arrays from data.js are loaded

// // 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync
//   getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 2, (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 3, (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 4, (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   }, (error) => console.log(error));

// // Iteration 1 - using callbacks
// // ...
function addStep (foodId, step) {
  document.querySelector("#" + foodId).innerHTML += `<li>${step}</li>`;
}

function showImage(imgId) {
  document.querySelector("#" + imgId).hidden = false;
}

function logError (error) {
  console.log(error);
}

getInstruction('mashedPotatoes', 0, (step0) => {
  addStep('mashedPotatoes', step0);
  getInstruction('mashedPotatoes', 1, (step1) => {
    addStep('mashedPotatoes', step1);
    getInstruction('mashedPotatoes', 2, (step2) => {
      addStep('mashedPotatoes', step2);
        getInstruction('mashedPotatoes', 3, (step3) => {
          addStep('mashedPotatoes', step3);
          getInstruction('mashedPotatoes', 4, (step4) => {
            addStep('mashedPotatoes', step4);
            addStep('mashedPotatoes', 'Mashed potatoes are ready!');
            showImage('mashedPotatoesImg');
          }, (error) => logError(error));
        }, (error) => logError(error));
    }, (error) => logError(error));
  }, (error) => logError(error));
}, (error) => logError(error));


// // Iteration 2 - using promises
// // ...
obtainInstruction('steak', 0)
  .then( (step) => {
    addStep('steak', step);
    return obtainInstruction('steak', 1);
  })
  .then((step) => {
    addStep('steak', step);
    return obtainInstruction('steak', 2);
  })
  .then((step) => {
    addStep('steak', step);
    return obtainInstruction('steak', 3);
  })
  .then((step) => {
    addStep('steak', step);
    return obtainInstruction('steak', 4);
  })
  .then((step) => {
    addStep('steak', step);
    return obtainInstruction('steak', 5);
  })
  .then((step) => {
    addStep('steak', step);
    return obtainInstruction('steak', 6);
  })
  .then((step) => {
    addStep('steak', step);
    return obtainInstruction('steak', 7);
  })
  .then((step) => {
    addStep('steak', step);
    addStep('steak', 'Steak is ready!');
    showImage('steakImg');
  })
  .catch((error) => {logError(error)})

// // Iteration 3 using async/await
// // ...
async function makeBroccoli() {
  // ... Your code here
  try{
    const step1 = await obtainInstruction('broccoli', 0);
    addStep('broccoli', step1);
    const step2 = await obtainInstruction('broccoli', 1);
    addStep('broccoli', step2);
    const step3 = await obtainInstruction('broccoli', 2);
    addStep('broccoli', step3);
    const step4 = await obtainInstruction('broccoli', 3);
    addStep('broccoli', step4);
    const step5 = await obtainInstruction('broccoli', 4);
    addStep('broccoli', step5);
    const step6 = await obtainInstruction('broccoli', 5);
    addStep('broccoli', step6);
    const step7 = await obtainInstruction('broccoli', 6);
    addStep('broccoli', step7);
    addStep('broccoli', 'Broccoli is ready!');
    showImage('broccoliImg');
  } catch (error) {
    logError(error);
  }
}

makeBroccoli();


const step1 = obtainInstruction('brusselsSprouts', 0);
const step2 = obtainInstruction('brusselsSprouts', 1);
const step3 = obtainInstruction('brusselsSprouts', 2);
const step4 = obtainInstruction('brusselsSprouts', 3);
const step5 = obtainInstruction('brusselsSprouts', 4);
const step6 = obtainInstruction('brusselsSprouts', 5);
const step7 = obtainInstruction('brusselsSprouts', 6);
const step8 = obtainInstruction('brusselsSprouts', 7);

Promise.all([step1, step2, step3, step4, step5, step6, step7, step8])
.then((responsesArray) => {
  responsesArray.forEach((response) => {
    addStep('brusselsSprouts', response);
  })
  addStep('brusselsSprouts', 'Brussels sprouts are ready!');
  showImage('brusselsSproutsImg');
})
.catch((error) => {logError(error)})