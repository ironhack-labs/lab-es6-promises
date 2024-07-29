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
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
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
        })
      })
    })
  })

});

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 1);
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 2);
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 3);
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 4);
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 5);
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 6);
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction('steak', 7);
  })
  .finally(() => {
    document.querySelector("#steakImg").removeAttribute("hidden");
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
  })
// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    const step1 = await obtainInstruction("broccoli", 0)
    const step2 = await obtainInstruction("broccoli", 1)
    const step3 = await obtainInstruction("broccoli", 2)
    const step4 = await obtainInstruction("broccoli", 3)
    const step5 = await obtainInstruction("broccoli", 4)
    const step6 = await obtainInstruction("broccoli", 5)
    const step7 = await obtainInstruction("broccoli", 6)
    
    document.querySelector("#broccoli").innerHTML += `
    <li>${step1}</li>
    <li>${step2}</li>
    <li>${step3}</li>
    <li>${step4}</li>
    <li>${step5}</li>
    <li>${step6}</li>
    <li>${step7}</li>
    <li>Broccoli is ready!</li>
    `

    document.querySelector("#broccoliImg").removeAttribute("hidden");
  
  } catch (error) {
    console.log(error);}
}

makeBroccoli()

// Bonus 2 - Promise all
// ...
const step1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(obtainInstruction('brusselsSprouts', 0)), 1000)
});
const step2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(obtainInstruction('brusselsSprouts', 1)), 1000)
});
const step3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(obtainInstruction('brusselsSprouts', 2)), 1000)
});
const step4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(obtainInstruction('brusselsSprouts', 3)), 1000)
});
const step5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(obtainInstruction('brusselsSprouts', 4)), 1000)
});
const step6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(obtainInstruction('brusselsSprouts', 5)), 1000)
});
const step7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(obtainInstruction('brusselsSprouts', 6)), 1000)
});
const step8 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(obtainInstruction('brusselsSprouts', 7)), 1000)
});

Promise.all([step1, step2, step3, step4, step5, step6, step7, step8]).then((values) => {document.querySelector("#brusselsSprouts").innerHTML += `
<li>${values[0]}</li>
<li>${values[1]}</li>
<li>${values[2]}</li>
<li>${values[3]}</li>
<li>${values[4]}</li>
<li>${values[5]}</li>
<li>${values[6]}</li>
<li>${values[7]}</li>
<li>Brussels sprouts are ready!</li>
`
document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})
