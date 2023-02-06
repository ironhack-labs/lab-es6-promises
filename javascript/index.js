// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  console.log(step1);
  getInstruction("mashedPotatoes", 1, (step2) => {
    console.log(step2);
    getInstruction("mashedPotatoes", 2, (step3) => {
      console.log(step3);
      getInstruction("mashedPotatoes", 3, (step4) => {
        console.log(step4);
        getInstruction("mashedPotatoes", 4, (step5) => {
          console.log(step5);
          getInstruction("mashedPotatoes");
        });
      });
    });
  });
});

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1)
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2)
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 4)
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5)
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 6)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction("steak", 7)
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction("steak", 1)
  })
  .then( (step8) => {
    document.querySelector("#steak").innerHTML += `<li>"Stake is ready!"</li>`
    
  })


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
   const step0 = await obtainInstruction("broccoli", 0)
   document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
   const step1 = await obtainInstruction("broccoli", 1)
   document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
   const step2 = await obtainInstruction("broccoli", 2)
   document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
   const step3 = await obtainInstruction("broccoli", 3)
   document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
   const step4 = await obtainInstruction("broccoli", 4)
   document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
   const step5 = await obtainInstruction("broccoli", 5)
   document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
   const step6 = await obtainInstruction("broccoli", 6)
   document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
   const step7 = await obtainInstruction("broccoli", 8)
   document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
   const step8 = await obtainInstruction("broccoli", 9)
   document.append("#broccoli").innerHTML += `<li>"Broccoli is ready!"</li>`
  } catch (error){
  }
  
}
makeBroccoli()

// Bonus 2 - Promise all
Promise.all([
  step0 = document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`,
  
])
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});
