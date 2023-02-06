// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync


// Iteration 1 - using callbacks

// CALLBACK HELL

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
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
            document.getElementById("mashedPotatoesImg").removeAttribute("hidden");
          });
        });
      });
    });
  },(error) => console.log(error));


// Iteration 2 - using promises
obtainInstruction('steak', 0)

  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return steak[1];
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return steak[3];
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return steak[4];
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return steak[5];
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return steak[6];
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return steak[7];
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return steak[8];
  })
  .then(() => {
  document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
  document.getElementById("steakImg").removeAttribute("hidden");
  return steak[9]
  })
  
// Iteration 3 using async/await

async function makeBroccoli() {
  // ... Your code here
  try {
    const first = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${first}</li>`
    const second = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${second}</li>`
    const third = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${third}</li>`
    const fourth = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${fourth}</li>`
    const fifth = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${fifth}</li>`
    const sixth = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${sixth}</li>`
    const seventh = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${seventh}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
    document.getElementById("broccoliImg").removeAttribute("hidden");
  } catch(error) {
    console.log("Something went wrong ", error)
  } 
}
makeBroccoli()

// Bonus 2 - Promise all
Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
])

.then((values)=> {
  values.forEach((value) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`
 })

 document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
 document.getElementById("brusselsSproutsImg").removeAttribute("hidden")
})
.catch((err) => console.log(err))