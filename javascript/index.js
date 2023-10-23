



// Iteration 1 - using callbacks
 getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`


getInstruction("mashedPotatoes", 1, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`


getInstruction("mashedPotatoes", 2, (step2) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`


getInstruction("mashedPotatoes", 3, (step3) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`

getInstruction("mashedPotatoes", 4, (step4) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
  
   
})
})
})
})
 })



// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
obtainInstruction('steak', 1)
  .then( (step1) => {
     document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
obtainInstruction('steak', 2)  
   .then( (step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`   
 obtainInstruction('steak', 3)  
   .then( (step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`   
  obtainInstruction('steak', 4)  
   .then( (step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
  obtainInstruction('steak', 5)  
    .then( (step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`   
  obtainInstruction('steak', 6)  
    .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`   
    document.querySelector("#steakImg").removeAttribute("hidden")
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
                            
         })
        })
      })
    })
  })
})
  })


      


Iteration 3 using async/await

 
async function makeBroccoli() {
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

  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
}

makeBroccoli();

     

// Bonus 2 - Promise all
// ...