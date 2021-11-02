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

  function buildDom(id, step) {
    document.querySelector(id).innerHTML += `<li>${step}</li>`;
  }


// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  buildDom("#mashedPotatoes", step0)
      getInstruction("mashedPotatoes", 1, (step1) => {
        buildDom("#mashedPotatoes", step1)
          getInstruction("mashedPotatoes", 2, (step2) => {
            buildDom("#mashedPotatoes", step2)
            getInstruction("mashedPotatoes", 3, (step3) => {
              buildDom("#mashedPotatoes", step3)
              getInstruction("mashedPotatoes", 4, (step4) => {
                buildDom("#mashedPotatoes", step4)
                buildDom("#mashedPotatoes", "Mashed potatoes are ready!")
                document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
              }, (error) => console.log(error));
            }, (error) => console.log(error));
          }, (error) => console.log(error));
      }, (error) => console.log(error));
  }, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step) => {
    buildDom("#steak", step)
    return obtainInstruction('steak', 1)
  })
  .then( (step) => {
    buildDom("#steak", step)
    return obtainInstruction('steak', 2)
  })
  .then( (step) => {
    buildDom("#steak", step)
    return obtainInstruction('steak', 3)
  })
  .then( (step) => {
    buildDom("#steak", step)
    return obtainInstruction('steak', 4)
  })
  .then( (step) => {
    buildDom("#steak", step)
    return obtainInstruction('steak', 5)
  })
  .then( (step) => {
    buildDom("#steak", step)
    return obtainInstruction('steak', 6)
  })
  .then( (step) => {
    buildDom("#steak", step)
    return obtainInstruction('steak', 7)
  })
  .then( (step) => {
    buildDom("#steak", step)
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => {console.log(error);})


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    let step0 = await obtainInstruction("broccoli", 0)
    buildDom("#broccoli", step0)
    let step1 = await obtainInstruction("broccoli", 1)
    buildDom("#broccoli", step1)
    let step2 = await obtainInstruction("broccoli", 2)
    buildDom("#broccoli", step2)
    let step3 = await obtainInstruction("broccoli", 3)
    buildDom("#broccoli", step3)
    let step4 = await obtainInstruction("broccoli", 4)
    buildDom("#broccoli", step4)
    let step5 = await obtainInstruction("broccoli", 5)
    buildDom("#broccoli", step5)
    let step6 = await obtainInstruction("broccoli", 6)
    buildDom("#broccoli", step6)
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    
  }
}
makeBroccoli()

// Bonus 2 - Promise all
async function makeBrussels() {
  try {
    let step0 = await obtainInstruction("brusselsSprouts", 0)
    let step1 = await obtainInstruction("brusselsSprouts", 1)
    let step2 = await obtainInstruction("brusselsSprouts", 2)
    let step3 = await obtainInstruction("brusselsSprouts", 3)
    let step4 = await obtainInstruction("brusselsSprouts", 4)
    let step5 = await obtainInstruction("brusselsSprouts", 5)
    let step6 = await obtainInstruction("brusselsSprouts", 6)
    Promise.all([step0, step1, step2, step3, step4, step5, step6])
    .then(value => {
      value.forEach(element => {
        buildDom("#brusselsSprouts", element)
      });
      buildDom("#brusselsSprouts", "Brussels sprouts are ready!")
    })
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    
  }
}
makeBrussels()