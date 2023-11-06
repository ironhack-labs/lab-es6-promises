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
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li> Mashed potatoes are ready! </li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          

           }, () => {});
         }, () => {});
       }, () => {});
  }, () => {});
}, (error) => console.log(error));



// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li> Steak is ready! </li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error))

// Iteration 3 using async/await

  async function makeBroccoli() {
    for (let step = 0; step < broccoli.length; step++) {
      try {
       
        const instruction = await obtainInstruction('broccoli', step);
        document.querySelector('#broccoli').innerHTML += `<li>${instruction}</li>`;
        document.querySelector("#broccoliImg").removeAttribute("hidden");
        document.querySelector("#broccoli").innerHTML += `<li> Broccoli is ready! </li>`
      } catch (error) {
        console.log(error);
      }
    }}
  makeBroccoli();


// Bonus 2 - Promise all
const step1 = obtainInstruction('brusselsSprouts', 0)
const step2 = obtainInstruction('brusselsSprouts', 1)
const step3 = obtainInstruction('brusselsSprouts', 2)
const step4 = obtainInstruction('brusselsSprouts', 3)
const step5 = obtainInstruction('brusselsSprouts', 4)
const step6 = obtainInstruction('brusselsSprouts', 5)
const step7 = obtainInstruction('brusselsSprouts', 6)
const step8 = obtainInstruction('brusselsSprouts', 7)

Promise.all([step1, step2, step3, step4, step5, step6, step7, step8])
.then((step) => {
  step.forEach((currentStep) => document.querySelector("#brusselsSprouts").innerHTML += `<li>${currentStep}</li>`);
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

}).catch(err => console.log(err))



