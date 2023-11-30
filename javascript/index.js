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
function getInstruction(step, callback, errorCallback) {
  // ... Your code here
  
    //setTimeout(() => {
      console.log(mashedPotatoes[step])
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${mashedPotatoes[step]}</li>`

      if (!mashedPotatoes[step]) errorCallback("Instructions not found.")
      else callback();
      //}, 2000);

}

getInstruction(0, () => {
  getInstruction(1, () => {
    getInstruction(2, () => {
      getInstruction(3, () => {
        getInstruction(4, () => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready!</li>`
        document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")}
        ,(err) => console.log(err));
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
},(err) => console.log(err))


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    document.querySelector("#steakImg").removeAttribute("hidden")
  })

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  let step0 = await obtainInstruction('broccoli', 0)
  let step1 = await obtainInstruction('broccoli', 1)
  let step2 = await obtainInstruction('broccoli', 2)
  let step3 = await obtainInstruction('broccoli', 3)
  let step4 = await obtainInstruction('broccoli', 4)
  let step5 = await obtainInstruction('broccoli', 5)
  let step6 = await obtainInstruction('broccoli', 6)

  document.querySelector("#broccoli").innerHTML += `
        <li>${step0}</li>
        <li>${step1}</li>
        <li>${step2}</li>
        <li>${step3}</li>
        <li>${step4}</li>
        <li>${step5}</li>
        <li>${step6}</li>
  `
  document.querySelector("#broccoliImg").removeAttribute("hidden")

  document.querySelector("#broccoliImg").removeAttribute("hidden")
}

makeBroccoli()
  


// Bonus 2 - Promise all
// ...

async function makeBrusselsSprouts() {
  let step0 = obtainInstruction('brusselsSprouts', 0)
  let step1 = obtainInstruction('brusselsSprouts', 1)
  let step2 = obtainInstruction('brusselsSprouts', 2)
  let step3 = obtainInstruction('brusselsSprouts', 3)
  let step4 = obtainInstruction('brusselsSprouts', 4)
  let step5 = obtainInstruction('brusselsSprouts', 5)
  let step6 = obtainInstruction('brusselsSprouts', 6)
  let step7 = obtainInstruction('brusselsSprouts', 7)

  let steps = [step0, step1, step2, step3, step4, step5, step6, step7]

  let directions = await Promise.all(steps)

  directions.forEach((direction) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${direction}</li>`
  })

  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")

}

makeBrusselsSprouts()