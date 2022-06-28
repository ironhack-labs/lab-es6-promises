// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
//  getInstruction("mashedPotatoes", 0, (step1) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//  }, (error) => console.log(error));
//  
//  getInstruction("mashedPotatoes", 1, (step2) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//  }, (error) => console.log(error));
//  
//  getInstruction("mashedPotatoes", 2, (step3) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//  }, (error) => console.log(error));
//  
//  getInstruction("mashedPotatoes", 3, (step4) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//  }, (error) => console.log(error));
//  
//  getInstruction("mashedPotatoes", 4, (step5) => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
let mashedSteps = (step) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
}
getInstruction("mashedPotatoes", 0, (step1) => {
  mashedSteps(step1);
  getInstruction("mashedPotatoes", 1, (step2) => {
    mashedSteps(step2);
    getInstruction("mashedPotatoes", 2, (step3) => {
      mashedSteps(step3);
      getInstruction("mashedPotatoes", 3, (step4) => {
        mashedSteps(step4);
        getInstruction("mashedPotatoes", 4, (step5) => {
          mashedSteps(step5);
          mashedSteps("Mashed potatoes are ready!");
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
// ...
let steakSteps = (step) => {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`
}
obtainInstruction("steak", 0)
  .then((step1) => {
    steakSteps(step1);
    return obtainInstruction("steak", 1)})
  .then((step2) => {
    steakSteps(step2);
    return obtainInstruction("steak", 2)})
  .then((step3) => {
    steakSteps(step3);
    return obtainInstruction("steak", 3)})
  .then((step4) => {
    steakSteps(step4);
    return obtainInstruction("steak", 4)})
  .then((step5) => {
    steakSteps(step5);
    return obtainInstruction("steak", 5)})
  .then((step6) => {
    steakSteps(step6);
    return obtainInstruction("steak", 6)})
  .then((step7) => {
    steakSteps(step7);
    return obtainInstruction("steak", 7)})
  .then((step8) => {
    steakSteps(step8);
    steakSteps("Steak is ready!");
    document.querySelector("#steakImg").removeAttribute("hidden");
  }).catch((err) => console.log(err))

// Iteration 3 using async/await
// ...
let broccoliSteps = (step) => {
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
}
async function getBroccoli() {
  try {
   broccoliSteps(await obtainInstruction("broccoli", 0));
   broccoliSteps(await obtainInstruction("broccoli", 1));
   broccoliSteps(await obtainInstruction("broccoli", 2));
   broccoliSteps(await obtainInstruction("broccoli", 3));
   broccoliSteps(await obtainInstruction("broccoli", 4));
   broccoliSteps(await obtainInstruction("broccoli", 5));
   broccoliSteps(await obtainInstruction("broccoli", 6));
   broccoliSteps("Broccoli is ready!");
   document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err){console.log(err)}

}
getBroccoli()
// Bonus 2 - Promise all
// ...
let brusselsSteps = (step) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
}
const step1 = obtainInstruction("brusselsSprouts", 0);
const step2 = obtainInstruction("brusselsSprouts", 1);
const step3 = obtainInstruction("brusselsSprouts", 2);
const step4 = obtainInstruction("brusselsSprouts", 3);
const step5 = obtainInstruction("brusselsSprouts", 4);
const step6 = obtainInstruction("brusselsSprouts", 5);
const step7 = obtainInstruction("brusselsSprouts", 6);
const step8 = obtainInstruction("brusselsSprouts", 7);

Promise.all([step1, step2, step3, step4, step5, step6, step7, step8]).then((steps) => {
  steps.forEach(step => brusselsSteps(step));
  brusselsSteps("Brussels sprouts are ready!");
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});



