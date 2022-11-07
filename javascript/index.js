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
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    // ...
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`

      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`

        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`

          getInstruction('mashedPotatoes', 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`

            getInstruction('mashedPotatoes', 6, (step5) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`

            });
          });
        });
      });
    });
  });
});



// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
   return obtainInstruction('steak', 1);
  })
  // ... Your code here
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    //  ... Your code here
    return obtainInstruction('steak',2);
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 3);
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 4);
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 5);
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 6);
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    //  ... Your code here
    return obtainInstruction('steak', 8);
  })
  .then( (step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
    //  ... Your code here
  })

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  const step1 = await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

  const step2 = await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

  const step3 = await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

  const step4 = await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

  const step5 = await obtainInstruction('broccoli', 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

  const step6 = await obtainInstruction('broccoli', 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

  const step7 = await obtainInstruction('broccoli', 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;

  const step8 = await obtainInstruction('broccoli', 7);
  document.querySelector("#broccoli").innerHTML += `<li>${step8}</li>`;

}

makeBroccoli();

// Bonus 2 - Promise all
// ...

const p1 = obtainInstruction('brusselsSprouts', 0) 
const p2 = obtainInstruction('brusselsSprouts', 1) 
const p3 = obtainInstruction('brusselsSprouts', 2) 
const p4 = obtainInstruction('brusselsSprouts', 3) 
const p5 = obtainInstruction('brusselsSprouts', 4) 
const p6 = obtainInstruction('brusselsSprouts', 5) 
const p7 = obtainInstruction('brusselsSprouts', 6) 
const p8 = obtainInstruction('brusselsSprouts', 7) 
const p9 = obtainInstruction('brusselsSprouts', 8) 

Promise.all([p1, p2, p3, p4, p5, p6, p7, p8, p9])
.then((values) => {
  values.forEach(element => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`;
  });
});