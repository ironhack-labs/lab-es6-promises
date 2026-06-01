// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/* example

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

*/

// Iteration 1 - using callbacks
// ... the old ugly way: the pyramide of doom: callback hell


function doPyramidOfDoom() {
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
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Meshpotatos are ready!</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
          }), (error) => console.log(error)
        }), (error) => console.log(error)   
        
      }), (error) => console.log(error)      
    }), (error) => console.log(error)      
  }), (error) => console.log(error)
}

doPyramidOfDoom()

// Iteration 2 - using promises
// ...

function usePromises(food) {

  try {
    // Iteration 2 - using promises
    obtainInstruction(food, 0)
      .then( (step0) => {
        document.querySelector(`#${food}`).innerHTML += `<li>${step0}</li>`
        //  ... Your code here
        obtainInstruction(food, 1).then( (step1) => {
          document.querySelector(`#${food}`).innerHTML += `<li>${step1}</li>`

          obtainInstruction(food, 2).then( (step2) => {
            document.querySelector(`#${food}`).innerHTML += `<li>${step2}</li>`
            obtainInstruction(food, 3).then( (step3) => {
              document.querySelector(`#${food}`).innerHTML += `<li>${step3}</li>` 
              obtainInstruction(food, 4).then( (step4) => {
                document.querySelector(`#${food}`).innerHTML += `<li>${step4}</li>`
                obtainInstruction(food, 5).then( (step5) => {
                  document.querySelector(`#${food}`).innerHTML += `<li>${step5}</li>`
                
                  obtainInstruction(food, 6).then( (step6) => {
                    document.querySelector(`#${food}`).innerHTML += `<li>${step6}</li>`

                    obtainInstruction(food, 7).then( (step7) => {
                      document.querySelector(`#${food}`).innerHTML += `<li>${step7}</li>`
                      document.querySelector(`#${food}`).innerHTML += `<li>${food} is ready!</li>`

                      document.querySelector(`#${food}Img`).removeAttribute("hidden")

                    }), (error) => console.log(error)
                  }), (error) => console.log(error)

                }), (error) => console.log(error)
              }), (error) => console.log(error)
            }), (error) => console.log(error)
          }), (error) => console.log(error)
        }), (error) => console.log(error)
      }), (error) => console.log(error)
  }
  catch (error) {
    console.log(error)
  }

    // ... Your code here
}

// usePromises("mashedPotatoes")
usePromises("steak")

// Iteration 3 using async/await
// ...

async function makeBroccoli() {

  try {
    // Iteration 3 using async/await
    const step0 = await obtainInstruction("broccoli", 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
    
    const step1 = await obtainInstruction("broccoli", 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
    
    const step2 = await obtainInstruction("broccoli", 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    
    const step3 = await obtainInstruction("broccoli", 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    
    const step4 = await obtainInstruction("broccoli", 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    
    const step5 = await obtainInstruction("broccoli", 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    
    const step6 = await obtainInstruction("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
    
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`

    document.querySelector("#broccoliImg").removeAttribute("hidden")

  }
  catch (error) {
    console.log(error)
  }

}

makeBroccoli()

// Bonus 2 - Promise all
// ...
// this is most quick
Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7)
]).then((steps) => {

  steps.forEach((step) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
  })

  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")

}).catch((error) => {
  console.log(error)
})