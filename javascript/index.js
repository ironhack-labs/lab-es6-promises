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

const mashedPotatoesEl = document.querySelector("#mashedPotatoes"),
  steakEl = document.querySelector("#steak"),
  broccoliEl = document.querySelector("#broccoli"),
  brusselsSproutsEl = document.querySelector("#brusselsSprouts");



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, step0 => {
  mashedPotatoesEl.innerHTML += `<li>${step0}</li>`
  // ... Your code here
  getInstruction("mashedPotatoes", 1, step2 => {
    mashedPotatoesEl.innerHTML += `<li>${step2}</li>`;

    getInstruction("mashedPotatoes", 2, step3 => {
      mashedPotatoesEl.innerHTML += `<li>${step3}</li>`;

      getInstruction("mashedPotatoes", 3, step4 => {
        mashedPotatoesEl.innerHTML += `<li>${step4}</li>`;

        getInstruction("mashedPotatoes", 4, step5 => {
          mashedPotatoesEl.innerHTML += `<li>${step5}</li>`;
          mashedPotatoesEl.innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

        }, error => console.log(error));
      }, error => console.log(error));
    }, error => console.log(error));
  }, error => console.log(error));
}, error => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then(step0 => {
    steakEl.innerHTML += `<li>${step0}</li>`;
    return obtainInstruction(`steak`, 1);
  })
  .then(step1 => {
    steakEl.innerHTML += `<li>${step1}</li>`;
    return obtainInstruction(`steak`, 2);
  })
  .then(step2 => {
    steakEl.innerHTML += `<li>${step2}</li>`;
    return obtainInstruction(`steak`, 3);
  })
  .then(step3 => {
    steakEl.innerHTML += `<li>${step3}</li>`;
    return obtainInstruction(`steak`, 4);
  })
  .then(step4 => {
    steakEl.innerHTML += `<li>${step4}</li>`;
    return obtainInstruction(`steak`, 5);
  })
  .then(step5 => {
    steakEl.innerHTML += `<li>${step5}</li>`;
    return obtainInstruction(`steak`, 6);
  })
  .then(step6 => {
    steakEl.innerHTML += `<li>${step6}</li>`;
    return obtainInstruction(`steak`, 7);
  })
  .then(step7 => {
    steakEl.innerHTML += `<li>${step7}</li>`;
    steakEl.innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector(`#steakImg`).removeAttribute(`hidden`);
  })
  .catch(error => {
    console.error(error);
  });

// Iteration 3 using async/await
(async function makeBroccoli() {
  try {
    const steps = [
      await obtainInstruction(`broccoli`, 0),
      await obtainInstruction(`broccoli`, 1),
      await obtainInstruction(`broccoli`, 2),
      await obtainInstruction(`broccoli`, 3),
      await obtainInstruction(`broccoli`, 4),
      await obtainInstruction(`broccoli`, 5),
      await obtainInstruction(`broccoli`, 6)
    ]

    steps.forEach(step => {
      broccoliEl.innerHTML += `<li>${step}</li>`;
    });

    broccoliEl.innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector(`#broccoliImg`).removeAttribute(`hidden`);
  } catch (error) {
    console.error(error);
  }
})()

// Bonus 2 - Promise all
Promise.all([
  obtainInstruction(`brusselsSprouts`, 0),
  obtainInstruction(`brusselsSprouts`, 1),
  obtainInstruction(`brusselsSprouts`, 2),
  obtainInstruction(`brusselsSprouts`, 3),
  obtainInstruction(`brusselsSprouts`, 4),
  obtainInstruction(`brusselsSprouts`, 5),
  obtainInstruction(`brusselsSprouts`, 6),
  obtainInstruction(`brusselsSprouts`, 7)
]).then(steps => {
  steps.forEach(step => {
    brusselsSproutsEl.innerHTML += `<li>${step}</li>`;
  });

  brusselsSproutsEl.innerHTML += `<li>Brussels Sprouts are ready!</li>`;
  document.querySelector(`#brusselsSproutsImg`).removeAttribute(`hidden`);
})
.catch(error => {
  console.error(error);
});