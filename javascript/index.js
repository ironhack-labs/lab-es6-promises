// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/* Out of sync
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
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step1) => document.querySelector("#steak").innerHTML += `<li>${step1}</li>`)
  .then( () => obtainInstruction('steak', 1))

  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  })
  .then( () => obtainInstruction('steak', 2))
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    
  })
  .then( () => obtainInstruction('steak', 3))

  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
   
  })
  .then( () => obtainInstruction('steak', 4))
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    
  })
  .then( () => obtainInstruction('steak', 5))
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    
  })
  .then( () => obtainInstruction('steak', 6))
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  })
  .then( () => obtainInstruction('steak', 7))
  .then( () =>document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`)

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    let step1=await obtainInstruction(0); 
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    let step2=await obtainInstruction(1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    let step3=await obtainInstruction(2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    let step4=await obtainInstruction(3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    let step5=await obtainInstruction(4);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    let step6=await obtainInstruction(5);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    let step7=await obtainInstruction(6);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  }
 catch(error){console.log(error)}
}
makeBroccoli()
// Bonus 2 - Promise all
// ...