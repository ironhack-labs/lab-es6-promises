// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

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



// Iteration 1 - using callbacks
// ...
// function requestRecipe (stepIndex, callback, callbackErr) {
//   if (mashedPotatoes[stepIndex] === undefined) {
//      callbackErr ("No existe este paso")
//   }else {
//     callback(mashedPotatoes[stepIndex])
//   }
// }

// console.log(requestRecipe(0, requestRecipe1,err ))

// requestRecipe1 (0, (response1) => {
//   console.log(response1)
// })

// requestRecipe(mashedPotatoes)

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  
    return obtainInstruction('steak', 1)
  })
  .then ( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2 )
  })
  .then ((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3 )
  })
  .then ((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4 )
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then ( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6 )
  })
  .then ((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7 )
  })
  .then ((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steak").innerHTML += `<li>The steak is ready!</li>`
    document.getElementById("steakImg").removeAttribute("hidden")
  })
  .catch (() => {
    console.log("No hay más pasos")
  })
   
  
  // ... Your code here

// Iteration 3 using async/await

async function makeBroccoli() {

  try{
    const step1 = await obtainInstruction('broccoli',0)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`

    const step2 = await obtainInstruction('broccoli',1)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`

    const step3 = await obtainInstruction('broccoli',2)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`

    const step4 = await obtainInstruction('broccoli',3)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`

    const step5 = await obtainInstruction('broccoli',4)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    
    const step6 = await obtainInstruction('broccoli',5)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
    
    const step7 = await obtainInstruction('broccoli',6)
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`

    document.getElementById("broccoliImg").removeAttribute("hidden")
    






    const step8 = await obtainInstruction('broccoli',7)
    document.querySelector("#broccoli").innerHTML += `<li>${step8}</li>`
    

  } catch (err) {
    console.log("Error")
  }

}
 makeBroccoli()


// ...


// Bonus 2 - Promise all
// ...
Promise.all ([
  obtainInstruction('brusselsSprouts',0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts',2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts',4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts',6),
  obtainInstruction('brusselsSprouts', 7),

])
.then (response =>  {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[0]}</li>` 
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[1]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[2]}</li>` 
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[3]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[4]}</li>` 
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[5]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[6]}</li>` 
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${response[7]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
  document.getElementById("brusselsSproutsImg").removeAttribute("hidden")
})
