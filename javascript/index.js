// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// function getInstruction(food, step, callback, errorCallback)

const food = "mashedPotatoes";
const step = 0;

// function addStep (step) {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
// };

const addStep = (food, step) => {
  document.querySelector(`#${food}`).innerHTML += `<li>${step}</li>`;
}

function showError (error) {
  console.log(error);
}

const showFinalInstruction = (food, step) => {
  addStep(food, step)
  document.querySelector(`#${food}Img`).removeAttribute("hidden");
}

  // getInstruction("mashedPotatoes", 0, addStep, showError);
  
  // getInstruction("mashedPotatoes", 1, addStep, showError);
  
  // getInstruction("mashedPotatoes", 2, addStep, showError);
  
  // getInstruction("mashedPotatoes", 3, addStep, showError);
  
  // getInstruction("mashedPotatoes", 4, showFinalInstruction, showError);

//   function showFiveStep() {
//     getInstruction("mashedPotatoes", 4, showFinalInstruction, showError);
//   }

//   function showFourthStep() {
//     getInstruction("mashedPotatoes", 3, (step) => {
//       addStep(step)
//       showFiveStep()
//     }, showError);
//   }

//   function showThirdStep() {
//     getInstruction("mashedPotatoes", 2, (step) => {
//       addStep(step)
//       showFourthStep()
//     }, showError);
//   }


//   function showSecondStep() {
//     getInstruction("mashedPotatoes", 1, (step) => {
//       addStep(step)
//       showThirdStep()
//     }, showError);
//   }

// // Iteration 1 - using callbacks
// // ...
//   function showFirstStep() {
//     getInstruction("mashedPotatoes", 0, (step) => {
//       addStep(step)
//       showSecondStep()
//     }, showError);
//   }

  getInstruction("mashedPotatoes", 0, (step) => {
    addStep('mashedPotatoes', step)
    getInstruction("mashedPotatoes", 1, (step) => {
      addStep('mashedPotatoes', step)
      getInstruction("mashedPotatoes", 2, (step) => {
        addStep('mashedPotatoes', step)
        getInstruction("mashedPotatoes", 3, (step) => {
          addStep('mashedPotatoes', step)
          getInstruction("mashedPotatoes", 4, (step) => {
            showFinalInstruction('mashedPotatoes', step)
            addStep('mashedPotatoes', 'Mashed potatoes are ready!')
          }, showError);
        }, showError);
      }, showError);
    }, showError);
  }, showError);



// Iteration 2 - using promises
// ...

async function showAsyncInstructions() {
  try {
    for (let i = 0; i < steak.length; i++) {
      const step = await obtainInstruction('steak', i)
  
      if (i === steak.length - 1) {
        showFinalInstruction('steak', step)
      } else {
        addStep('steak', step)
      }
    }
  } catch(err) {
    console.log(err)
  }

  addStep('steak', 'Dinner is served!')
}

// showAsyncInstructions()

obtainInstruction('steak', 0)
  .then((stepZero) => {
    addStep('steak', stepZero)
    return obtainInstruction('steak', 1)
  })
  .then((stepOne) => {
    addStep('steak', stepOne)
    return obtainInstruction('steak', 2)
  })
  .then((stepTwo) => {
    addStep('steak', stepTwo)
    return obtainInstruction('steak', 3)
  })
  .then((stepThree) => {
    addStep('steak', stepThree)
    return obtainInstruction('steak', 4)
  })
  .then((stepFour) => {
    addStep('steak', stepFour)
    return obtainInstruction('steak', 5)
  })
  .then((stepFive) => {
    addStep('steak', stepFive)
    return obtainInstruction('steak', 6)
  })
  .then((stepSix) => {
    addStep('steak', stepSix)
    return obtainInstruction('steak', 7)
  })
  .then((finalStep) => {
    showFinalInstruction('steak', finalStep)
  })
  .catch(showError)
  .finally(() => addStep('steak', 'Dinner is served!'))

// Iteration 3 using async/await
// ...

async function showBrusselsSprouts() {
  try {
    const stepZero = await obtainInstruction('brusselsSprouts', 0)
    addStep('brusselsSprouts', stepZero)
    const stepOne = await obtainInstruction('brusselsSprouts', 1)
    addStep('brusselsSprouts', stepOne)
    const stepTwo = await obtainInstruction('brusselsSprouts', 2)
    addStep('brusselsSprouts', stepTwo)
    const stepThree = await obtainInstruction('brusselsSprouts', 3)
    addStep('brusselsSprouts', stepThree)
    const stepFour = await obtainInstruction('brusselsSprouts', 4)
    addStep('brusselsSprouts', stepFour)
    const stepFive = await obtainInstruction('brusselsSprouts', 5)
    addStep('brusselsSprouts', stepFive)
    const stepSix = await obtainInstruction('brusselsSprouts', 6)
    addStep('brusselsSprouts', stepSix)
    const stepSeven = await obtainInstruction('brusselsSprouts', 7)
    showFinalInstruction('brusselsSprouts', stepSeven)

    addStep('brusselsdfsdfsdfsSprouts', 'Dinner is served!')
  } catch(err) {
    showError(err)
  }
}

showBrusselsSprouts()

// Bonus 2 - Promise all
// ...

function showPromiseAllInstructions() {

  const promiseArr = []

  for (let i = 0; i < broccoli.length; i++) {
    const promise = obtainInstruction('broccoli', i)
    promiseArr.push(promise)
  }

  // try {
  //   const steps = await Promise.all(promiseArr)
  //   steps.forEach((step, i) => {
  //     if (i === broccoli.length - 1) {
  //       showFinalInstruction('broccoli', step)
  //     } else {
  //       addStep('broccoli', step)
  //     }
  //   })
  //   addStep('broccoli', 'Dinner is served!')
  // } catch(err) {
  //   showError(err)
  // }

  Promise.all(promiseArr)
    .then((steps) => {
      steps.forEach((step, i) => {
        if (i === broccoli.length - 1) {
          showFinalInstruction('broccoli', step)
        } else {
          addStep('broccoli', step)
        }
      })
    })
    .catch(showError)
    .finally(() => addStep('broccoli', 'Dinner is served!'))

    /**
     * Acordaros que el Promise.allSettled, si alguna promise falla,
     * no corta la ejecución de las demás promises y siempre se ejecuta
     * el finally
     */
  // Promise.allSettled(promiseArr)
  //   .then((steps) => {
  //     console.log(steps)
  //     steps.forEach((step, i) => {

  //       const stepStatus = step.status

  //       if (stepStatus !== 'fulfilled') {
  //         showError(step.reason)
  //         return
  //       }

  //       if (i === broccoli.length - 1) {
  //         showFinalInstruction('broccoli', step.value)
  //       } else {
  //         addStep('broccoli', step.value)
  //       }
  //     })
  //   })
}

showPromiseAllInstructions()