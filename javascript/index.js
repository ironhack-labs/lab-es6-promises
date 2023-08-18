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
          getInstruction("mashedPotatoes", 5, (step6) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
})

// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
async function makeBroccoli(instructions) {

  for (let i = 0; i < instructions.length; i++) {
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction("broccoli", i)}</li>`
  }
  document.querySelector("#broccoli").innerHTML += "<li>Broccoli is ready!</li>"
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}
makeBroccoli(broccoli)

// Bonus 2 - Promise all

function promiseAllBrusselsSprouts() {
  let promisesArray = [];
  for (let i = 0; i < brusselsSprouts.length; i++) {
    promisesArray.push(obtainInstruction("brusselsSprouts", i).then((value) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`;
    }))
  }
  return promisesArray;
}

Promise.all(promiseAllBrusselsSprouts())
    .then(() => {
      document.querySelector("#brusselsSprouts").innerHTML += "<li>Brussels sprouts are ready!</li>"
    })
    .then(() => {
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
    })
