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
  }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes", 
  0, 
  (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));

}, 
(error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((response)=>{
  document.querySelector("#steak").innerHTML += `<li>${response}</li>`
  return obtainInstruction("steak", 1)
})
.then((response2)=>{
  document.querySelector("#steak").innerHTML += `<li>${response2}</li>`
  return obtainInstruction("steak", 2)
})
.then((response3)=>{
  document.querySelector("#steak").innerHTML += `<li>${response3}</li>`
  return obtainInstruction("steak", 3)
})
.then((response4)=>{
  document.querySelector("#steak").innerHTML += `<li>${response4}</li>`
  return obtainInstruction("steak", 4)
})
.then((response5)=>{
  document.querySelector("#steak").innerHTML += `<li>${response5}</li>`
  return obtainInstruction("steak", 5)
})
.then((response6)=>{
  document.querySelector("#steak").innerHTML += `<li>${response6}</li>`
  return obtainInstruction("steak", 6)
})
.then((response7)=>{
  document.querySelector("#steak").innerHTML += `<li>${response7}</li>`
  return obtainInstruction("steak", 7)
})
.then((response8)=>{
  document.querySelector("#steak").innerHTML += `<li>${response8}</li>`
  return obtainInstruction("steak", 8)
})
  .catch(err => console.log(err))

// Iteration 3 using async/await
async function makeBrusselSprouts() {
  try{
const response1 = await obtainInstruction("brusselsSprouts", 0)
const response2 = await obtainInstruction("brusselsSprouts", 1)
const response3 = await obtainInstruction("brusselsSprouts", 2)
const response4 = await obtainInstruction("brusselsSprouts", 3)
const response5 = await obtainInstruction("brusselsSprouts", 4)
const response6 = await obtainInstruction("brusselsSprouts", 5)
const response7 = await obtainInstruction("brusselsSprouts", 6)
const response8 = await obtainInstruction("brusselsSprouts", 7)
document.querySelector("#brusselsSprouts").innerHTML += `<li>${response1}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${response2}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${response3}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${response4}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${response5}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${response6}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${response7}</li>`
document.querySelector("#brusselsSprouts").innerHTML += `<li>${response8}</li>`
  }
  catch(error){
    console.log(error)
  }
}
makeBrusselSprouts()

// Bonus 2 - Promise all
// ...