// @ts-nocheck
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

const addLiElement = (id, content) => {
  document.querySelector(`#${id}`).innerHTML += `<li>${content}</li>`
}

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  addLiElement("mashedPotatoes", step0)
  
  getInstruction('mashedPotatoes', 1, (step1) => {
    addLiElement("mashedPotatoes", step1)

    getInstruction("mashedPotatoes", 2, (step2) => {
      addLiElement("mashedPotatoes", step2)

      getInstruction("mashedPotatoes", 3, (step3) => {
        addLiElement("mashedPotatoes", step3)

        getInstruction("mashedPotatoes", 4, (step4) => {
          addLiElement("mashedPotatoes", step4)
          addLiElement("mashedPotatoes", "Mashed potatoes are ready!")
          unhide("mashedPotatoesImg")
        }, (error) => console.error(error))
      }, (error) => console.error(error))
    }, (error) => console.error(error))
  }, (error) => console.error(error))
}, (error) => console.error(error))

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    addLiElement('steak', step0)
    return obtainInstruction("steak", 1)
  })
  .then((step1) => {
    addLiElement('steak', step1)
    return obtainInstruction("steak", 2)
  })
  .then((step2) => {
    addLiElement('steak', step2)
    return obtainInstruction("steak", 3)
  })
  .then((step3) => {
    addLiElement('steak', step3)
    return obtainInstruction("steak", 4)
  })
  .then((step4) => {
    addLiElement('steak', step4)
    return obtainInstruction("steak", 5)
  })
  .then((step5) => {
    addLiElement('steak', step5)
    return obtainInstruction("steak", 6)
  })
  .then((step6) => {
    addLiElement('steak', step6)
    addLiElement('steak', 'Steak is ready!')
    unhide("steakImg")
  })

// Iteration 3 using async/await
async function makeBroccoli() {
  const addLi = async (food, step) => {
    document.querySelector(
      `#${food}`
    ).innerHTML += `<li>${await obtainInstruction(food, step)}</li>`
  }

  for (let i = 0; i < 7; i++) await addLi("broccoli", i)

  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
  unhide("broccoliImg")
}
makeBroccoli()

// Bonus 1 - Make img visible
function unhide(id) {
  document.querySelector(`#${id}`).removeAttribute("hidden")
}

// Bonus 2 - Promise all
// ...