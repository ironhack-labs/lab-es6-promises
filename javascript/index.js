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


mashedPotatoes.push('Mashed potatoes are ready!')
// Iteration 1 - using callbacks
// ...
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
    // ...
    getInstruction('mashedPotatoes', 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
      // ... Your code here
        // ...
        getInstruction('mashedPotatoes', 2, (step2) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
          // ... Your code here
            // ...
            getInstruction('mashedPotatoes', 3, (step3) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
              // ... Your code here
                // ...
                getInstruction('mashedPotatoes', 4, (step4) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
                  // ... Your code here
                    // ...
                    getInstruction('mashedPotatoes', 5, (step5) => {
                      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
                      // ... Your code here
                        // ...
                        getInstruction('mashedPotatoes', 6, (step6) => {
                          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`
                          // ... Your code here
                            // ...
                            
                        });
                        document.getElementById('mashedPotatoesImg').removeAttribute('hidden')
                    });
                });
            });
        });
    });
});

// Iteration 2 - using promises
steak.push('Steak is ready!')
obtainInstruction('steak',0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })
  // ... Your code here
  .then ((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then ((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3);
  })
  .then ((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4);
  })
  .then ((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5);
  })
  .then ((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6);
  })
  .then ((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7);
  })
  .then ((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction('steak', 8);
  })
  .then ((step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
    document.getElementById('steakImg').removeAttribute('hidden')
    return obtainInstruction('steak', 9);
  })



// Iteration 3 using async/await
// ...
broccoli.push('Broccoli is ready!')

async function makeBroccoli() {
  // ... Your code here
  let step0 = await obtainInstruction('broccoli', 0)
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
  let step1 = await obtainInstruction('broccoli', 1)
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
  let step2 = await obtainInstruction('broccoli', 2)
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
  let step3 = await obtainInstruction('broccoli', 3)
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
  let step4 = await obtainInstruction('broccoli', 4)
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
  let step5 = await obtainInstruction('broccoli', 5)
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
  let step6 = await obtainInstruction('broccoli', 6)
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
  let step7 = await obtainInstruction('broccoli', 7)
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
  document.getElementById('broccoliImg').removeAttribute('hidden')
}


makeBroccoli()

// Bonus 2 - Promise all
// ...

brusselsSprouts.push("Brussels sprouts are ready!")
const promises = [
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
  obtainInstruction("brusselsSprouts", 8)
]

Promise.all(promises)
.then((steps) => {
document.getElementById("brusselsSproutsImg").removeAttribute("hidden")
steps.forEach((stepAll)=> {
  document.getElementById("brusselsSprouts").innerHTML += `<li>${stepAll}</li>`})
})
