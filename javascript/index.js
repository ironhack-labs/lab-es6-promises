// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /* getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error)); */





// Iteration 1 - using callbacks
let oldStep6 = "Mashed potatoes are ready!";

getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction('mashedPotatoes', 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction('mashedPotatoes', 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction('mashedPotatoes', 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction('mashedPotatoes', 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${oldStep6}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        })
      })
    })
  })
})

// ...

// Iteration 2 - using promises
let oldStep8 = "Stake is ready!";

obtainInstruction('steak', 0)
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    obtainInstruction('steak', 1)
    .then( (step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
      obtainInstruction('steak', 2)
      .then( (step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
        obtainInstruction('steak', 3)
        .then( (step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
          obtainInstruction('steak', 4)
          .then( (step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
            obtainInstruction('steak', 5)
            .then( (step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
              obtainInstruction('steak', 6)
              .then( (step7) => {
                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                document.querySelector("#steak").innerHTML += `<li>${oldStep8}</li>`
                document.querySelector("#steakImg").removeAttribute("hidden");
              })
            })
          })
        })
      })
    })
  })
// ...

// Iteration 3 using async/await
let newStep8 = "Broccoli is ready!";

async function makeBroccoli() {
  try{
    const step1 = await obtainInstruction("broccoli", 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    const step2 = await obtainInstruction("broccoli", 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    const step3 = await obtainInstruction("broccoli", 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    const step4 = await obtainInstruction("broccoli", 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    const step5 = await obtainInstruction("broccoli", 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    const step6 = await obtainInstruction("broccoli", 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    const step7 = await obtainInstruction("broccoli", 6)
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${newStep8}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
  catch(error){
    console.log(error);
  }
}

makeBroccoli();
// ...

// Bonus 2 - Promise all
const brusselsElem = document.getElementById("brusselsSprouts");

function makeBrussels(){
  const step0 = obtainInstruction("brusselsSprouts", 0);
  const step1 = obtainInstruction("brusselsSprouts", 1);
  const step2 = obtainInstruction("brusselsSprouts", 2);
  const step3 = obtainInstruction("brusselsSprouts", 3);
  const step4 = obtainInstruction("brusselsSprouts", 4);
  const step5 = obtainInstruction("brusselsSprouts", 5);
  const step6 = obtainInstruction("brusselsSprouts", 6);
  const step7 = obtainInstruction("brusselsSprouts", 7);
  Promise.all([step0, step1, step2, step3,step4, step5, step6, step7]).then(steps=>{
    steps.forEach(step=> brusselsElem.innerHTML += `<li>${step}</li>`)
  }).then(()=>{
    brusselsElem.innerHTML+=`<li>Brussels sprouts are ready!</li>`
  }).then(()=>{
    document.getElementById("brusselsSproutsImg").removeAttribute("hidden")
  })
}
makeBrussels();

// ...