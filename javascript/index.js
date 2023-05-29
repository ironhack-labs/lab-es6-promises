// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

/*
  getInstruction("mashedPotatoes", 0, (step1) => {
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
getInstruction
('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
    getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        });
      });
    });
  });
  
});
// Iteration 2 - using promises

 obtainInstruction('steak', 0)
 
  .then( (step) => {
    document.querySelector("#steakImg").removeAttribute("hidden");

    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 1)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 2)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 3)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 4)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 5)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 6)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    return obtainInstruction('steak', 7)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`

  })
  .catch(function() {

  });

  obtainInstruction();

// Iteration 3 using async/await

async function makeBroccoli() {
  try{
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    for (let i = 0; i < 15; i++) {
      let veggieValue = await obtainInstruction('broccoli', i); 
      document.querySelector("#broccoli").innerHTML += `<li>${veggieValue}</li>`
      if (i === 6) {
        document.querySelector("#broccoli").innerHTML += `<li>IT IS WORKING</li>`
      }
    }
     
      
  
  } catch (err) {

  }
}

makeBroccoli();

// Bonus 2 - Promise all
const step0 = new Promise((resolve, reject) => {
  obtainInstruction('brusselsSprouts', 0); 
});
const step1 = new Promise((resolve, reject) => {
  obtainInstruction('brusselsSprouts', 1); 
});
const step2 = new Promise((resolve, reject) => {
  obtainInstruction('brusselsSprouts', 2); 
});
const step3 = new Promise((resolve, reject) => {
  obtainInstruction('brusselsSprouts', 3); 
});
const step4 = new Promise((resolve, reject) => {
  obtainInstruction('brusselsSprouts', 4); 
});
const step5 = new Promise((resolve, reject) => {
  obtainInstruction('brusselsSprouts', 5); 
});
const step6 = new Promise((resolve, reject) => {
  obtainInstruction('brusselsSprouts', 6); 
});
Promise.all([step0, step1, step2, step3, step4, step5, step6])
  .then((value) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`

  })