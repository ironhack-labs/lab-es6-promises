// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /**getInstruction("mashedPotatoes", 0, (step1) => {
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
function getInstruction(recipe, stepIndex, callback) {
    setTimeout(() => {
        const step = mashedPotatoes[stepIndex];
        callback(step);
    }, 1000);

console.log("Start making Mashed Potatoes!");

getInstruction("mashedPotatoes", 0, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    
    getInstruction("mashedPotatoes", 1, (step1) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
        
        getInstruction("mashedPotatoes", 2, (step2) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
            
            getInstruction("mashedPotatoes", 3, (step3) => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
                
                getInstruction("mashedPotatoes", 4, (step4) => {
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                });
            });
        });
    });
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return "Steak is ready!";
  })
  .then((completionMessage) => {
    document.querySelector("#steak").innerHTML += `<li>${completionMessage}</li>`;
  })
  .catch((error) => {
    console.error(error);
  });


// Iteration 3 using async/await
async function makeBrusselsSprouts() {
  try {
      const step0 = await obtainInstruction('brusselsSprouts', 0);
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;
      
      const step1 = await obtainInstruction('brusselsSprouts', 1);
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;
      
      const step2 = await obtainInstruction('brusselsSprouts', 2);
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;
      
      const step3 = await obtainInstruction('brusselsSprouts', 3);
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;
      
      document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`;
  } catch (error) {
      console.error(error);
  }
}
makeBrusselsSprouts();