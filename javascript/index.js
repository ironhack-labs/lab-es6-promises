// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  

// Iteration 1 - using callbacks
const step5 = "Mashed potatoes are ready!";

  getInstruction("mashedPotatoes", 0, (step0) => {
    getInstruction("mashedPotatoes", 1, (step1) => {
      getInstruction("mashedPotatoes", 2, (step2) => {
        getInstruction("mashedPotatoes", 3, (step3) => {
          getInstruction("mashedPotatoes", 4, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          }, (error) => console.log(error));
           
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        }, (error) => console.log(error));
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      }, (error) => console.log(error));
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
  }, (error) => console.log(error));
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  const mashedPotatoesImg = document.getElementById("mashedPotatoesImg");
  mashedPotatoesImg.removeAttribute('hidden');
  }, (error) => console.log(error));


// Iteration 2 - using promises
const step7 = "Steak is ready!";

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
   })
  
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
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

  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 6)
  })
  
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 7)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    const steakImg = document.getElementById("steakImg");
    steakImg.removeAttribute('hidden');
    return obtainInstruction('steak', 8)
  })
  .catch ((error) => {
  //console.log(error)
  })

// Iteration 3 using async/await

async function makeBroccoli() {
  const step7 = "Broccoli is ready!";
  try {
    const step0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    const step1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    const step2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    const step3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    const step4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    const step5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    const step6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    const broccoliImg = document.getElementById('broccoliImg');
    broccoliImg.removeAttribute('hidden');

  } catch (e) {
    console.log("An error occurred:", e);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
const lastStep = "Brussels sprouts are ready!"
Promise.all([brusselsSprouts[0],brusselsSprouts[1], brusselsSprouts[2], brusselsSprouts[3],brusselsSprouts[4],brusselsSprouts[5],brusselsSprouts[6],brusselsSprouts[7]])

.then((step) => {
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[0] }</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[1] }</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[2] }</li>`; 
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[3] }</li>`; 
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[4] }</li>`; 
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[5] }</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[6] }</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[7] }</li>`;
document.querySelector("#brusselsSprouts").innerHTML += `<li>${lastStep}</li>`;
const brusselsSproutsiImg = document.getElementById('brusselsSproutsImg');
brusselsSproutsiImg.removeAttribute('hidden');


})