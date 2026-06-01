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

const updateUI = (step, recipe) => {
  if (recipe === "mashedPotatoes") {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`
  } else if (recipe === "steak") {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
  } else if (recipe === "brusselsSprouts") {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
  } else {
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
  }
}

const recipe1 = "mashedPotatoes"
const recipe2 = "steak"
const recipe3 = "brusselsSprouts"
const recipe4 = "broccoli"

// Iteration 1 - using callbacks
getInstruction(recipe1, 0, (data) => {
  updateUI(data, recipe1)
  getInstruction(recipe1, 1, (data) => {
    updateUI(data, recipe1)
    getInstruction(recipe1, 2, (data) => {
      updateUI(data, recipe1)
      getInstruction(recipe1, 3, (data) => {
        updateUI(data, recipe1)
        getInstruction(recipe1, 4, (data) => {
          updateUI(data, recipe1)
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
        }, (error) => {
          console.log(error)
        })
      }, (error => {
        console.log(error)
      }))
    }, (error) => {
      console.log(error)
    })
  }, (error) => {
    console.log(error)
  })
}, (error) => {
  console.log(error)
})


// Iteration 2 - using promises
obtainInstruction(recipe2, 0)
  .then((data) => {
    updateUI(data, recipe2)
    return obtainInstruction(recipe2, 1)
  })
  .then((data) => {
    updateUI(data, recipe2)
    return obtainInstruction(recipe2, 2)
  })
  .then((data) => {
    updateUI(data, recipe2)
    return obtainInstruction(recipe2, 3)
  })
  .then((data) => {
    updateUI(data, recipe2)
    return obtainInstruction(recipe2, 4)
  })
  .then((data) => {
    updateUI(data, recipe2)
    return obtainInstruction(recipe2, 5)
  })
  .then((data) => {
    updateUI(data, recipe2)
    return obtainInstruction(recipe2, 6)
  })
  .then((data) => {
    updateUI(data, recipe2)
    return obtainInstruction(recipe2, 7)
  })
  .then((data) => {
    updateUI(data, recipe2)
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.log(error)

  })

// Iteration 3 using async/await
async function displayRecipe(recipe) {
  try {
    const step1 = await obtainInstruction(recipe, 0)
    updateUI(step1, recipe)
    const step2 = await obtainInstruction(recipe, 1)
    updateUI(step2, recipe)
    const step3 = await obtainInstruction(recipe, 2)
    updateUI(step3, recipe)
    const step4 = await obtainInstruction(recipe, 3)
    updateUI(step4, recipe)
    const step5 = await obtainInstruction(recipe, 4)
    updateUI(step5, recipe)
    const step6 = await obtainInstruction(recipe, 5)
    updateUI(step6, recipe)
    const step7 = await obtainInstruction(recipe, 6)
    updateUI(step7, recipe)
    const step8 = await obtainInstruction(recipe, 7)
    updateUI(step8, recipe)
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
  } catch (error) {
    console.log(error)
  }
}
displayRecipe(recipe3)

// Bonus 2 - Promise all
Promise.all([
  obtainInstruction(recipe4, 0),
  obtainInstruction(recipe4, 1),
  obtainInstruction(recipe4, 2),
  obtainInstruction(recipe4, 3),
  obtainInstruction(recipe4, 4),
  obtainInstruction(recipe4, 5),
  obtainInstruction(recipe4, 6)
])
  .then((data) => {
    data.forEach(step => {
      updateUI(step, recipe4)
    })
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.log(error)
  })

// Promise.allSettled([
//   obtainInstruction(recipe4, 0),
//   obtainInstruction(recipe4, 1),
//   obtainInstruction(recipe4, 2),
//   obtainInstruction(recipe4, 3),
//   obtainInstruction(recipe4, 4),
//   obtainInstruction(recipe4, 5),
//   obtainInstruction(recipe4, 6)
// ])
//   .then((data) => {
//     data.forEach(step => {
//       if (step.status === "fulfilled") {
//         updateUI(step.value, recipe4)
//       }
//     })
//     document.querySelector("#broccoliImg").removeAttribute("hidden");
//   })