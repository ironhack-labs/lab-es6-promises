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
const obtainStepPotatoes =
getInstruction('mashedPotatoes', 0, (step1) => { 
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

getInstruction('mashedPotatoes', 1, (step2) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

getInstruction('mashedPotatoes', 2, (step3) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

getInstruction('mashedPotatoes', 3, (step4) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

getInstruction('mashedPotatoes', 4, (step5) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
}, (error) => console.log(error));
}, (error) => console.log(error));
}, (error) => console.log(error));
}, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step1) => {
    document.querySelector("#steakImg").removeAttribute("hidden")
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>` 
    return obtainInstruction('steak', 1) 
  })
  .then( (step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
  return obtainInstruction('steak', 2) 
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 3) 
  })
  .then( (step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
  return obtainInstruction('steak', 4) 
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5) 
 })
 .then( (step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
  return obtainInstruction('steak', 6) 
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7) 
 })
 .then( (step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  document.querySelector("#steak").innerHTML += `<li>Steak are ready!</li>` 
  return obtainInstruction('steak', 8) 
  })

// Iteration 3 using async/await
const makeBroccoli = async() => {
  // ... Your code here
  try{
    document.querySelector("#broccoliImg").removeAttribute("hidden")
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli',0)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli',1)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli',2)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli',3)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli',4)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli',5)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli',6)}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>` 
   
  }catch(error){
    document.querySelector("#broccoli").innerHTML += `<li>${error}</li>`
  }
}

makeBroccoli()


// Bonus 2 - Promise all
// ...
var p0 = document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
var p1 = obtainInstruction('brusselsSprouts',0)
var p2 = obtainInstruction('brusselsSprouts',1)
var p3 = obtainInstruction('brusselsSprouts',2)
var p4 = obtainInstruction('brusselsSprouts',3)
var p5 = obtainInstruction('brusselsSprouts',4)
var p6 = obtainInstruction('brusselsSprouts',5)
var p7 = obtainInstruction('brusselsSprouts',6)
var p8 = obtainInstruction('brusselsSprouts',7)
var p9 = document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!.</li>` 


Promise.all([p1,p2,p3,p4,p5,p6,p7,p8,p9]).then(values => {
  values.forEach(value =>{
    
  return document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`

  })
})