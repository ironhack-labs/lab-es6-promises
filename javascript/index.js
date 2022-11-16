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
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        getInstruction("mashedPotatoes", 2, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
            getInstruction("mashedPotatoes", 3, (step4) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                getInstruction("mashedPotatoes", 4, (step5) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
                  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
                }, (error) => console.log(error));
            }, (error) => console.log(error));
        }, (error) => console.log(error));
    }, (error) => console.log(error));
}, (error) => console.log(error));



// Iteration 2 - using promises
const obtainInstructions = (step) => {
  return new Promise((callback, errorCallback)=>{
    setTimeout(() => {
      let instruction = steak[step];
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
      if (!instruction) {
        errorCallback("Instruction step does not exist!");
      } else {
        callback(instruction);
      }
    }, Math.floor(Math.random() * 1000));
  });
}


obtainInstructions(0)
  .then(() => obtainInstructions(1))
  .then(() => obtainInstructions(2))
  .then(() => obtainInstructions(3))
  .then(() => obtainInstructions(4))
  .then(() => obtainInstructions(5))
  .then(() => obtainInstructions(6))
  .then(() => obtainInstructions(7))
  .catch((error) => console.log(error))

// Iteration 3 using async/await

const obtainInstructionsBrussels = (step) => {
  return new Promise((callback, errorCallback)=>{
    setTimeout(() => {
      let instruction = brusselsSprouts[step];
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${instruction}</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
      if (!instruction) {
        errorCallback("Instruction step does not exist!");
      } else {
        callback(instruction);
      }
    }, Math.floor(Math.random() * 1000));
  });
}

const getInstructionBrussels = async () => {
  try {
    await obtainInstructionsBrussels(0);
    await obtainInstructionsBrussels(1);
    await obtainInstructionsBrussels(2);
    await obtainInstructionsBrussels(3);
    await obtainInstructionsBrussels(4);
    await obtainInstructionsBrussels(5);
    await obtainInstructionsBrussels(6);
    await obtainInstructionsBrussels(7);
  } catch (error) {
    console.error(error);
  }
}

getInstructionBrussels();

// Bonus 2 - Promise all

const obtainInstructionsBroccoli = (step) => {
  return new Promise((callback, errorCallback)=>{
    setTimeout(() => {
      let instruction = broccoli[step];
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
      document.querySelector("#broccoliImg").removeAttribute("hidden");
      if (!instruction) {
        errorCallback("Instruction step does not exist!");
      } else {
        callback(instruction);
      }
    }, 1000);
  });
}

const p1 = obtainInstructionsBroccoli(0);
const p2 = obtainInstructionsBroccoli(1);
const p3 = obtainInstructionsBroccoli(2);
const p4 = obtainInstructionsBroccoli(3);
const p5 = obtainInstructionsBroccoli(4);
const p6 = obtainInstructionsBroccoli(5);
const p7 = obtainInstructionsBroccoli(6);

Promise.all([p1,p2,p3,p4,p5,p6]);
