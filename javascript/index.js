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
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
.then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
  return obtainInstruction("steak", 1)
})
.then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
  return obtainInstruction("steak", 2)
})
.then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
  return obtainInstruction("steak", 3)
})
.then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
  return obtainInstruction("steak", 4)
})
.then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
  return obtainInstruction("steak", 5)
 })
.then((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
  return obtainInstruction("steak", 6)
})
.then((step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  return obtainInstruction("steak", 7)
  })
  .then((step8) => {
  document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
  return obtainInstruction("steak", 8)
  })

// Iteration 3 using async/await
// ...
async function makeBrusselsSprouts() {
  try {
    const step1 = await obtainInstruction("brusselsSprouts", 0);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;
    const step2 = await obtainInstruction("brusselsSprouts", 1);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;
    const step3 = await obtainInstruction("brusselsSprouts", 2);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;
    const step4 = await obtainInstruction("brusselsSprouts", 3);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;
    const step5 = await obtainInstruction("brusselsSprouts", 4);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;
    const step6 = await obtainInstruction("brusselsSprouts", 5);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;
    const step7 = await obtainInstruction("brusselsSprouts", 6);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`;
    const step8 = await obtainInstruction("brusselsSprouts", 7);
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step8}</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (err) {
    console.log(err);
  }
}
makeBrusselsSprouts()

// Bonus 2 - Promise all
// ...
const promisesArr = [
  obtainInstruction("broccoli", 0),
  obtainInstruction("broccoli", 1),
  obtainInstruction("broccoli", 2),
  obtainInstruction("broccoli", 3),
  obtainInstruction("broccoli", 4),
  obtainInstruction("broccoli", 5),
  obtainInstruction("broccoli", 6),
];

Promise.all(promisesArr)
  .then((response) => {
    response.forEach((step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    });
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  })
  .catch((err) => console.log(err))