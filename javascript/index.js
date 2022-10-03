// // This will print in the wrong order.
// // We added it as an example and to test that the arrays from data.js are loaded

// // 🚨🚨🚨 Comment out the below code before you start working on the code

// // Out of sync
//   getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 2, (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 3, (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));
  
//   getInstruction("mashedPotatoes", 4, (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
  getInstruction('mashedPotatoes', 1, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
  getInstruction('mashedPotatoes', 3, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
    getInstruction('mashedPotatoes', 4, (step4) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
      document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute('hidden');
        }) 
      }) 
    }) 
  })
    // ...
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
    return obtainInstruction('steak', 2);
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
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
    document.querySelector("#steakImg").removeAttribute('hidden');
    
    //  ... Your code here
  })



// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  await obtainInstruction('broccoli', 0)
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[0]}</li>`
  await obtainInstruction('broccoli', 1)
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[1]}</li>`
  await obtainInstruction('broccoli', 2)
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[2]}</li>`
  await obtainInstruction('broccoli', 3)
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[3]}</li>`
  await obtainInstruction('broccoli', 4)
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[4]}</li>`
  await obtainInstruction('broccoli', 5)
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[5]}</li>`
  await obtainInstruction('broccoli', 6)
  document.querySelector("#broccoli").innerHTML += `<li>${broccoli[6]}</li>`
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
  document.querySelector("#broccoliImg").removeAttribute('hidden');

}

makeBroccoli();
// Bonus 2 - Promise all
// ...
// let step0 = obtainInstruction('brusselsSprouts', 0);
// let step1 = obtainInstruction('brusselsSprouts', 1);
// let step2 = obtainInstruction('brusselsSprouts', 2);
// let step3 = obtainInstruction('brusselsSprouts', 3);
// let step4 = obtainInstruction('brusselsSprouts', 4);
// let step5 = obtainInstruction('brusselsSprouts', 5);
// let step6 = obtainInstruction('brusselsSprouts', 6);
// let step7 = obtainInstruction('brusselsSprouts', 7);

Promise.all(brusselsSprouts)
  .then(async (steps) => {
    for(let i = 0; i < steps.length; i++){
      await obtainInstruction('brusselsSprouts', i)
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps[i]}</li>`
    }
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts is ready!</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute('hidden');
  })
   

