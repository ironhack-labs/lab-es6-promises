// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /* getInstruction("mashedPotatoes", 0, (step1) => {
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
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li><li>Mashed potatoes are ready!</li>`;                  
        }, (error) => console.log(error));        
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0) 
  .then((value) => printStep('steak', value))
  .then(() => obtainInstruction('steak', 1).then((value) => printStep('steak', value)))
  .then(() => obtainInstruction('steak', 2).then((value) => printStep('steak', value)))
  .then(() => obtainInstruction('steak', 3).then((value) => printStep('steak', value)))
  .then(() => obtainInstruction('steak', 4).then((value) => printStep('steak', value)))
  .then(() => obtainInstruction('steak', 5).then((value) => printStep('steak', value)))
  .then(() => obtainInstruction('steak', 6).then((value) => printStep('steak', value)))
  .finally(() => document.querySelector(`#steak`).innerHTML += `<li>Steak is ready!</li>`)


function printStep(food, value) {
  document.querySelector(`#${food}`).innerHTML += `<li>${value}</li>`;
}

// Iteration 3 using async/await
async function makeBroccoli() {
  printStep('broccoli', await obtainInstruction('broccoli', 0));
  printStep('broccoli', await obtainInstruction('broccoli', 1));
  printStep('broccoli', await obtainInstruction('broccoli', 2));
  printStep('broccoli', await obtainInstruction('broccoli', 3));
  printStep('broccoli', await obtainInstruction('broccoli', 4));
  printStep('broccoli', await obtainInstruction('broccoli', 5));
  printStep('broccoli', await obtainInstruction('broccoli', 6));
  printStep('broccoli', "Broccoli is ready!");
}
makeBroccoli();

// Bonus 1 - Promise all

// Bonus 2 - Promise all
promiseArray = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7)
]

Promise.all([
 promiseArray[0],
 promiseArray[1],
 promiseArray[2],
 promiseArray[3],
 promiseArray[4],
 promiseArray[5],
 promiseArray[6],
 promiseArray[7]])
 .then(
   promiseArray.forEach((value, i) => obtainInstruction('brusselsSprouts', i).then((value) => printStep('brusselsSprouts', value)))) 
