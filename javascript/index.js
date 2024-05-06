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
getInstruction('mashedPotatoes', 0, instruction => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
  getInstruction('mashedPotatoes', 1, instruction => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
    getInstruction('mashedPotatoes', 2, instruction => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
      getInstruction('mashedPotatoes', 3, instruction => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
        getInstruction('mashedPotatoes', 4, instruction => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").toggleAttribute("hidden");
        }, err => console.log(err))
      }, err => console.log(err))
    }, err => console.log(err))
  }, err => console.log(err))
}, err => console.log(err))

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then(instruction => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak', 1)
  })
  .then(instruction => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak', 2)
  })
  .then(instruction => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak', 3)
  })
  .then(instruction => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak', 4)
  })
  .then(instruction => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak', 5)
  })
  .then(instruction => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak', 6)
  })
  .then(instruction => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    return obtainInstruction('steak', 7)
  })
  .then(instruction => {
    document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").toggleAttribute("hidden");
  })

// Iteration 3 using async/await
async function makeBroccoli() {
  const steps = [];
  for (let i = 0; i < 7; i++) {
    steps.push(await obtainInstruction('broccoli', i));
  }
  for (let step of steps) {
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  }
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").toggleAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all
Promise.all([
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7)
])
  .then(instructions => {
    for (let instruction of instructions) {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction}</li>`;  
    }
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussel Sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").toggleAttribute("hidden");
  })