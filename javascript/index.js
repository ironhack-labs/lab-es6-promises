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

getInstruction()

// ...

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
  .then((step1)=>{
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
        obtainInstruction('steak', 2)
  .then((step2)=>{
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`

        })
      })
  })

  // ... Your code here

// ...

// Iteration 3 using async/await

async function makeBroccoli() {
  let step0 = await obtainInstruction("broccoli",0)
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
  let step1 = await obtainInstruction("broccoli",1)
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
  let step2 = await obtainInstruction("broccoli",2)
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
}


  // for(let i = 0; i<broccoli.length; i++){
  //   const step = await obtainInstruction("broccoli", i)
  //   document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
  // }

makeBroccoli()






// ...

// Bonus 2 - Promise all

const makeBrusselsSprouts = ()=>{  
  let stepPromiseArray = []
  let counter = 0
  brusselsSprouts.forEach((step)=>{
    stepPromiseArray.push(obtainInstruction("brusselsSprouts", counter))
    counter ++
  })
  Promise.all(stepPromiseArray).then((stepsArray)=>{
    stepsArray.forEach((step)=>{
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
    })
  }
  )
}

makeBrusselsSprouts()
// ...