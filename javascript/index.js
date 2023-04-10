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
getInstruction("mashedPotatoes", 0, () => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[0]}</li>`
  getInstruction("mashedPotatoes", 1, () => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[1]}</li>`
    getInstruction("mashedPotatoes", 2, () => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[2]}</li>`
      getInstruction("mashedPotatoes", 3, () => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[3]}</li>`
        getInstruction("mashedPotatoes", 4, () => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[4]}</li>`
          const finalStep = document.createElement("li");
          const finalStepText = document.createTextNode("Mashed potatoes are ready!");
          finalStep.appendChild(finalStepText);
          document.getElementById("mashedPotatoes").appendChild(finalStep)
        }, (error) => console.log(error))
      },(error) => console.log(error))
    },(error) => console.log(error))
  },(error) => console.log(error))
},(error) => console.log(error))

// Iteration 2 - using promises
// ...
const finalStep2 = document.createElement("li");
const finalStepText2 = document.createTextNode("Steak is ready!");
finalStep2.appendChild(finalStepText2);


obtainInstruction("steak", 0)
  .then(() => document.querySelector("#steak").innerHTML += `<li>${steak[0]}</li>`)
  .then(() => document.querySelector("#steak").innerHTML += `<li>${steak[1]}</li>`)
  .then(() => document.querySelector("#steak").innerHTML += `<li>${steak[2]}</li>`)
  .then(() => document.querySelector("#steak").innerHTML += `<li>${steak[3]}</li>`)
  .then(() => document.querySelector("#steak").innerHTML += `<li>${steak[4]}</li>`)
  .then(() => document.querySelector("#steak").innerHTML += `<li>${steak[5]}</li>`)
  .then(() => document.querySelector("#steak").innerHTML += `<li>${steak[6]}</li>`)
  .then(() => document.querySelector("#steak").innerHTML += `<li>${steak[7]}</li>`)
  .then(() => document.getElementById("steak").appendChild(finalStep2))
  .catch((err) => console.log(err))

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    let broccoliIngredient = ""
    for (i=0; i<broccoli.length; i++) {
      broccoliIngredient = await (obtainInstruction("broccoli", i))
      document.querySelector("#broccoli").innerHTML += `<li>${broccoliIngredient}</li>`
    }
    const finalStep3 = document.createElement("li");
    const finalStepText3 = document.createTextNode("Broccoli is ready!");
    finalStep3.appendChild(finalStepText3);
    document.getElementById("broccoli").appendChild(finalStep3);
  }
  catch (err) {
    console.log(err)
  }
}

makeBroccoli()


// Bonus 2 - Promise all
// ...
Promise.all([
  obtainInstruction("brusselsSprouts", 0), 
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
]).then((values) => {
  for (value of values) {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`
  }
})

