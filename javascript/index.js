// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /*  getInstruction("mashedPotatoes", 0, (step1) => {
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
// 
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction('mashedPotatoes', 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;  
        getInstruction('mashedPotatoes', 2, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;  
          getInstruction('mashedPotatoes', 3, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;  
            getInstruction('mashedPotatoes', 4, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;  
            getInstruction('mashedPotatoes', 5, (step5) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
              });
               document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
               document.getElementById("mashedPotatoesImg").removeAttribute("hidden")

              });
          });
        });
      });
  });

// Iteration 2 - using promises
let stepS = 0
obtainInstruction('steak', stepS)
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    stepS ++
    return obtainInstruction('steak', stepS)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    stepS ++
    return obtainInstruction('steak', stepS)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    stepS ++
    return obtainInstruction('steak', stepS)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    stepS ++
    return obtainInstruction('steak', stepS)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    stepS ++
    return obtainInstruction('steak', stepS)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    stepS ++
    return obtainInstruction('steak', stepS)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    stepS ++
    return obtainInstruction('steak', stepS)
  })
  .then( (step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
    document.getElementById("steakImg").removeAttribute("hidden")
  })
  .catch ( (error) => {
    console.log(error)
  })
  

// Iteration 3 using async/await

async function makeBroccoli() {
  let step = 0;
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', step++)}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', step++)}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', step++)}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', step++)}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', step++)}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', step++)}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', step)}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
  document.getElementById("broccoliImg").removeAttribute("hidden")
}
makeBroccoli()


// Bonus 2 - Promise all
Promise.all([
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7),
])
.then ( (array) => {
  array.forEach (element => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`
  })
  document.getElementById("brusselsSproutsImg").removeAttribute("hidden")
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
} )
.catch ( error => error)


