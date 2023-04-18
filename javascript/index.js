// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
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



// Iteration 1 - using callbacks
// ...
let receipeStep = 0
const timeoutId = setTimeout(geInstruction,1000)
    console.log($step );

// Iteration 2 - using promises
const steak = [
  "season steak generously with salt, pepper and garlic powder",
  "place in zip lock bag",
  "cook in sous vide at 120 F for 1-2 hours",
  "remove from bag and pat dry",
  "heat pan with grapeseed oil and a quarter stick of butter",
  "cook steak for 30-60 seconds per side using a spoon to baste with butter",
  "rest for 10 minutes",
  "enjoy",
];

function(step) {
  return new Promise (function (resolve, reject) {
      console.log( obtainInstructions[step] );

      if (!obtainInstructions[step]) reject("Instruction step does not exist!.")
      else resolve(); 
  })
};

obtainInstructions(0)
  .then(() => obtainInstructions(1) )
  .then(() => obtainInstructions(2) )
  .then(() => obtainInstructions(3) )
  .then(() => obtainInstructions(4) )
  .then(() => obtainInstructions(5) )
  .then(() => obtainInstructions(6) )
  .finally(() => console.log("Enjoy!") )
  .catch((err) => console.log(err));


// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...