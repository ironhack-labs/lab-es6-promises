// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  

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
obtainInstruction("steak", 0)
.then((step) => {
  document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  return obtainInstruction("steak", 1)
})
.then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  return obtainInstruction("steak", 2)
})
.then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  return obtainInstruction("steak", 3)
})
.then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  return obtainInstruction("steak", 4)
})
.then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
  return obtainInstruction("steak", 5)
})
.then((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  return obtainInstruction("steak", 6)
})
.then((step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  return obtainInstruction("steak", 7)
})
.then((step8) => {
  document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
  document.querySelector("#steakImg").removeAttribute("hidden");
  return obtainInstruction("steak", 8)

})


.catch((err) => console.log(err));

// Iteration 3 using async/await


  async function makeFood() {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${await obtainInstruction("brusselsSprouts", 0)}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${await obtainInstruction("brusselsSprouts", 1)}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${await obtainInstruction("brusselsSprouts", 2)}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${await obtainInstruction("brusselsSprouts", 3)}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${await obtainInstruction("brusselsSprouts", 4)}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${await obtainInstruction("brusselsSprouts", 5)}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${await obtainInstruction("brusselsSprouts", 6)}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${await obtainInstruction("brusselsSprouts", 7)}</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  }
  
  makeFood(8);




// Bonus 2 - Promise all

Promise.all([
	obtainInstruction("broccoli", 0),
	obtainInstruction("broccoli", 1),
	obtainInstruction("broccoli", 2),
	obtainInstruction("broccoli", 3),
	obtainInstruction("broccoli", 4),
	obtainInstruction("broccoli", 5),
	obtainInstruction("broccoli", 6),
])

	.then((steps) => {
		steps.forEach((step) => {
			document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
		});
		document.querySelector("#broccoliImg").removeAttribute("hidden");
	})
	.catch((error) => console.log(error));
