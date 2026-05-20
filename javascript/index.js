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
const potatoElement = document.querySelector("#mashedPotatoes")

getInstruction("mashedPotatoes", 0, step1 => {
  potatoElement.innerHTML += `<li>${step1}</li>`
  getInstruction("mashedPotatoes", 1, step2 => {
    potatoElement.innerHTML += `<li>${step2}</li>`
    getInstruction("mashedPotatoes", 2, step3 => {
      potatoElement.innerHTML += `<li>${step3}</li>`
      getInstruction("mashedPotatoes", 3, step4 => {
        potatoElement.innerHTML +=
          `<li>${step4}</li>` -
          getInstruction("mashedPotatoes", 4, step5 => {
            potatoElement.innerHTML += `<li>${step5}</li>`
            document
              .querySelector("#mashedPotatoesImg")
              .removeAttribute("hidden")
          })
      })
    })
  })
})

// Iteration 2 - using promises
// ...
const steakElement = document.querySelector("#steak")

obtainInstruction("steak", 0)
  .then(step1 => {
    steakElement.innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 1)
  })
  .then(step2 => {
    steakElement.innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 2)
  })
  .then(step3 => {
    steakElement.innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 3)
  })
  .then(step4 => {
    steakElement.innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 4)
  })
  .then(step5 => {
    steakElement.innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 5)
  })
  .then(step6 => {
    steakElement.innerHTML += `<li>${step6}</li>`
    return obtainInstruction("steak", 6)
  })
  .then(step7 => {
    steakElement.innerHTML += `<li>${step7}</li>`
    return obtainInstruction("steak", 7)
  })
  .then(step8 => {
    steakElement.innerHTML += `<li>${step8}</li>`
    document.querySelector("#steakImg").removeAttribute("hidden")
  })
  .catch(error => console.log(error))

// Iteration 3 using async/await
// ...

const brusselsElement = document.querySelector("#brusselsSprouts")
const makeBrusselsSprouts = async () => {
  try {
    const step1 = await obtainInstruction("brusselsSprouts", 0)
    brusselsElement.innerHTML += `<li>${step1}</li>`
    const step2 = await obtainInstruction("brusselsSprouts", 1)
    brusselsElement.innerHTML += `<li>${step2}</li>`
    const step3 = await obtainInstruction("brusselsSprouts", 2)
    brusselsElement.innerHTML += `<li>${step3}</li>`
    const step4 = await obtainInstruction("brusselsSprouts", 3)
    brusselsElement.innerHTML += `<li>${step4}</li>`
    const step5 = await obtainInstruction("brusselsSprouts", 4)
    brusselsElement.innerHTML += `<li>${step5}</li>`
    const step6 = await obtainInstruction("brusselsSprouts", 5)
    brusselsElement.innerHTML += `<li>${step6}</li>`
    const step7 = await obtainInstruction("brusselsSprouts", 6)
    brusselsElement.innerHTML += `<li>${step7}</li>`
    const step8 = await obtainInstruction("brusselsSprouts", 7)
    brusselsElement.innerHTML += `<li>${step8}</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
  } catch (error) {
    console.log(error)
  }
}

makeBrusselsSprouts()

// Bonus 2 - Promise all
// ...
const broccoliElement = document.querySelector("#broccoli")

const step1 = obtainInstruction("broccoli", 0)
const step2 = obtainInstruction("broccoli", 1)
const step3 = obtainInstruction("broccoli", 2)
const step4 = obtainInstruction("broccoli", 3)
const step5 = obtainInstruction("broccoli", 4)
const step6 = obtainInstruction("broccoli", 5)
const step7 = obtainInstruction("broccoli", 6)

// Promise.all().then().catch()

const makeBroccoli = async () => {
  try {
    const results = await Promise.all([
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
    ])
    results.forEach(element => {
      broccoliElement.innerHTML += `<li>${element}</li>`
    })

    document.querySelector("#broccoliImg").removeAttribute("hidden")
  } catch (error) {
    console.log(error)
  }
}

makeBroccoli()
