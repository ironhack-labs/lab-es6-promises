// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /*getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
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
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })
    .then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
      return obtainInstruction('steak', 2);
    })
    .then( (step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
      return obtainInstruction('steak', 3);
    })
    .then( (step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
      return obtainInstruction('steak', 4);
    })
    .then( (step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
      return obtainInstruction('steak', 5);
    })
    .then( (step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
      return obtainInstruction('steak', 6);
    })
    .then( (step6) => {
      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
      return obtainInstruction('steak', 7);
    })
    .then( (step7) => {
      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
      return obtainInstruction('steak', 8);
    })
    .then( (step8) => {
      document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
    })
    .finally(() => {
      document.querySelector("#steakImg").removeAttribute("hidden");
      })
// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
    const step1 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
    const step2 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    const step3 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    const step4 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    const step5 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    const step6 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
    const step7 = await obtainInstruction('broccoli', 7);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
    const step8 = await obtainInstruction('broccoli', 8);
    document.querySelector("#broccoli").innerHTML += `<li>${step8}</li>`
    
  } catch(error) {

    console.log("Something went wrong: ", error)
  } 
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli()

// Bonus 2 - Promise all
const p8 = new obtainInstruction('brusselsSprouts', 7);
const p7 = new obtainInstruction('brusselsSprouts', 6);
const p6 = new obtainInstruction('brusselsSprouts', 5);
const p5 = new obtainInstruction('brusselsSprouts', 4);
const p4 = new obtainInstruction('brusselsSprouts', 3);
const p3 = new obtainInstruction('brusselsSprouts', 2);
const p2 = new obtainInstruction('brusselsSprouts', 1);
const p1 = new obtainInstruction('brusselsSprouts', 0);
Promise.all([p1, p2, p3, p4, p5, p6, p7, p8])
.then((step) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[0]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[1]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[2]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[3]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[4]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[5]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[6]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[7]}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})