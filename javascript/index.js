// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));



console.log()

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...

obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction("steak", 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
  })


// Iteration 3 using async/await
// ...

const makeBroccoli = async () => {
  try {
    const step0 = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`

    const step2 = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`

    const step3 = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`

    const step4 = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`

    const step5 = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`

    const step6 = await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
  catch (error) {
    console.log(error)
  }
  finally {
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
  }

}

makeBroccoli()
// Bonus 2 - Promise all
// ...

const step1 = obtainInstruction("brusselsSprouts", 0)
const step2 = obtainInstruction("brusselsSprouts", 1)
const step3 = obtainInstruction("brusselsSprouts", 2)
const step4 = obtainInstruction("brusselsSprouts", 3)
const step5 = obtainInstruction("brusselsSprouts", 4)
const step6 = obtainInstruction("brusselsSprouts", 5)
const step7 = obtainInstruction("brusselsSprouts", 6)
const step8 = obtainInstruction("brusselsSprouts", 7)

const arrayOfSteps = [step1, step2, step3, step4, step5, step6, step7, step8]

Promise.all(arrayOfSteps)
  .then((responseArr) => {

    const resultOne = responseArr[0];
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${resultOne}</li>`
    const resultTwo = responseArr[1];
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${resultTwo}</li>`
    const resultThree = responseArr[2];
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${resultThree}</li>`
    const resultFour = responseArr[3];
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${resultFour}</li>`
    const resultFive = responseArr[4];
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${resultFive}</li>`
    const resultSix = responseArr[5];
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${resultSix}</li>`
    const resultSeven = responseArr[6];
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${resultSeven}</li>`
    const resultEight = responseArr[7];
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${resultEight}</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
  })
