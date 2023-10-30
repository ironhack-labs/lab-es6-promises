// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
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
// ...
const mashedElem =  document.querySelector("#mashedPotatoes");
getInstruction("mashedPotatoes", 0, step0=>{
  mashedElem.innerHTML += `<li>${step0}</li>`
    getInstruction("mashedPotatoes", 1, step1=>{
      mashedElem.innerHTML += `<li>${step1}</li>`
      getInstruction("mashedPotatoes",2, step2=>{
        mashedElem.innerHTML += `<li>${step2}</li>`
        getInstruction("mashedPotatoes",3, step3=>{
          mashedElem.innerHTML += `<li>${step3}</li>`
          getInstruction("mashedPotatoes",4, step4=>{
          mashedElem.innerHTML += `<li>${step4}</li>`
          mashedElem.innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.getElementById("mashedPotatoesImg").removeAttribute("hidden")
          }, error=>console.log(error))
        }, error=>console.log(error))
      }, error=>console.log(error))
    }, error=>console.log(error))
}, error=>console.log(error))

// Iteration 2 - using promises
// ...

const steakElem =  document.querySelector("#steak");

obtainInstruction("steak", 0).then(step=>{
  steakElem.innerHTML += `<li>${step}</li>`
  return obtainInstruction("steak", 1)
})
.then(step=>{
  steakElem.innerHTML += `<li>${step}</li>`
  return obtainInstruction("steak", 2)
})
.then(step=>{
  steakElem.innerHTML += `<li>${step}</li>`
  return obtainInstruction("steak", 3)
})
.then(step=>{
  steakElem.innerHTML += `<li>${step}</li>`
  return obtainInstruction("steak", 4)
})
.then(step=>{
  steakElem.innerHTML += `<li>${step}</li>`
  return obtainInstruction("steak", 5)
})
.then(step=>{
  steakElem.innerHTML += `<li>${step}</li>`
  return obtainInstruction("steak", 6)
})
.then(step=>{
  steakElem.innerHTML += `<li>${step}</li>`
  return obtainInstruction("steak", 7)
})
.then(step=>{
  steakElem.innerHTML += `<li>${step}</li>`
}).then(()=>{
  steakElem.innerHTML += `<li>Steak is ready</li>`
  document.getElementById("steakImg").removeAttribute("hidden")
})





// Iteration 3 using async/await
// ...
const broccoliElem = document.querySelector("#broccoli");

async function makeBroccoli(){
  try{
    const step0 = await obtainInstruction("broccoli", 0);
    broccoliElem.innerHTML += `<li>${step0}</li>`
    const step1 = await obtainInstruction("broccoli", 1);
    broccoliElem.innerHTML += `<li>${step1}</li>`
    const step2 = await obtainInstruction("broccoli", 2);
    broccoliElem.innerHTML += `<li>${step2}</li>`
    const step3 = await obtainInstruction("broccoli", 3);
    broccoliElem.innerHTML += `<li>${step3}</li>`
    const step4 = await obtainInstruction("broccoli", 4);
    broccoliElem.innerHTML += `<li>${step4}</li>`
    const step5 = await obtainInstruction("broccoli", 5);
    broccoliElem.innerHTML += `<li>${step5}</li>`
    const step6 = await obtainInstruction("broccoli", 6);
    broccoliElem.innerHTML += `<li>${step6}</li>`
    broccoliElem.innerHTML += `<li>Broccoli is ready!</li>`
    document.getElementById("broccoliImg").removeAttribute("hidden")
  }
  catch{
    console.log("error");
  }
  
  
}
makeBroccoli()

// Bonus 2 - Promise all
// ...
const brusselsElem = document.querySelector("#brusselsSprouts");
function makeBrussels(){
  const step0 = obtainInstruction("brusselsSprouts", 0);
  const step1 = obtainInstruction("brusselsSprouts", 1);
  const step2 = obtainInstruction("brusselsSprouts", 2);
  const step3 = obtainInstruction("brusselsSprouts", 3);
  const step4 = obtainInstruction("brusselsSprouts", 4);
  const step5 = obtainInstruction("brusselsSprouts", 5);
  const step6 = obtainInstruction("brusselsSprouts", 6);
  const step7 = obtainInstruction("brusselsSprouts", 7);

  Promise.all([step0, step1, step2, step3,step4, step5, step6, step7]).then((steps)=>{
    steps.forEach(step=> brusselsElem.innerHTML += `<li>${step}</li>`)
  }).then(()=>{
    brusselsElem.innerHTML+=`<li>Brussels sprouts are ready!</li>`
  }).then(()=>{
    document.getElementById("brusselsSproutsImg").removeAttribute("hidden")
  })

}
makeBrussels()
