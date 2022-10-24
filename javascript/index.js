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
getInstruction("mashedPotatoes", 0, (step0) => {
  document.getElementById("mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.getElementById("mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.getElementById("mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.getElementById("mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.getElementById("mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          let lastInfo = document.createElement("li");
          document.getElementById("mashedPotatoes").appendChild(lastInfo).innerHTML += `Mashed Potatoes are ready`;
          document.getElementById("mashedPotatoesImg").removeAttribute("hidden");
         }, (error) => console.log(error));
       }, (error) => console.log(error));
     }, (error) => console.log(error));
   }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction("steak", 0)
.then((step0) => {
  document.getElementById("steak").innerHTML += `<li>${step0}</li>`
  return obtainInstruction("steak", 1)
})
.then((step1) => {
  document.getElementById("steak").innerHTML += `<li>${step1}</li>`
  return obtainInstruction("steak", 2)
})
.then((step2) => {
  document.getElementById("steak").innerHTML += `<li>${step2}</li>`
  return obtainInstruction("steak", 3)
})
.then((step3) => {
  document.getElementById("steak").innerHTML += `<li>${step3}</li>`
  return obtainInstruction("steak", 4)
})
.then((step4) => {
  document.getElementById("steak").innerHTML += `<li>${step4}</li>`
  return obtainInstruction("steak", 5)
})
.then((step5) => {
  document.getElementById("steak").innerHTML += `<li>${step5}</li>`
  return obtainInstruction("steak", 6)
})
.then((step6) => {
  document.getElementById("steak").innerHTML += `<li>${step6}</li>`
  return obtainInstruction("steak", 7)
})
.then((step7) => {
  document.getElementById("steak").innerHTML += `<li>${step7}</li>`
})
.catch((error) => console.log(error))
.finally(() => {
  let finalStep = document.createElement("li");
  document.getElementById("steak").appendChild(finalStep).innerHTML += "Stake is ready!!"
  document.getElementById("steakImg").removeAttribute("hidden");
})

// Iteration 3 using async/await
let makeBroccoli = async () => {
  //use variables to store the awaits instead of .then() dummy
  try {
    await obtainInstruction("broccoli", 0).then((step0) => document.getElementById("broccoli").innerHTML += `<li>${step0}</li>`);
    await obtainInstruction("broccoli", 1).then((step1) => document.getElementById("broccoli").innerHTML += `<li>${step1}</li>`);
    await obtainInstruction("broccoli", 2).then((step2) => document.getElementById("broccoli").innerHTML += `<li>${step2}</li>`);
    await obtainInstruction("broccoli", 3).then((step3) => document.getElementById("broccoli").innerHTML += `<li>${step3}</li>`);
    await obtainInstruction("broccoli", 4).then((step4) => document.getElementById("broccoli").innerHTML += `<li>${step4}</li>`);
    await obtainInstruction("broccoli", 5).then((step5) => document.getElementById("broccoli").innerHTML += `<li>${step5}</li>`);
    await obtainInstruction("broccoli", 6).then((step6) => document.getElementById("broccoli").innerHTML += `<li>${step6}</li>`); 
     
  } catch (error) {
    console.log(error);

  } finally {
    let finalStep = document.createElement("li");
    document.getElementById("broccoli").appendChild(finalStep).innerHTML += "Broccoli is ready!!"
    document.getElementById("broccoliImg").removeAttribute("hidden");
  }
}
makeBroccoli();


// Bonus 2 - Promise all

Promise.all(
  [obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7)
  ])
  .then(allValues => {
    allValues.forEach(el => document.getElementById("brusselsSprouts").innerHTML += `<li>${el}</li>`)
  })
  .catch((err) => console.log(err))
  .finally(() => {
    document.getElementById("brusselsSprouts").innerHTML += `<li>Brussels are readyy!!</li>`;
    document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
  })