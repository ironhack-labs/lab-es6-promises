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

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>` 
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>` 
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>` 
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>` 
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>` 
        }, (error) =>{
          console.log(error)
        });
      }, (error) =>{
        console.log(error)
      });
    }, (error) =>{
      console.log(error)
    });
  }, (error) =>{
    console.log(error)
  });
}, (error) =>{
  console.log(error)
});





// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction("steak", 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${"Steak is ready!"}</li>`
    return obtainInstruction("steak", 6)
  })
  


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
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
  } catch (err) {
    console.log("something went wrong")
  }

}

makeBroccoli()



// Bonus 2 - Promise all



const step0Brussels = obtainInstruction("brusselsSprouts", 0)
const step1Brussels = obtainInstruction("brusselsSprouts", 1)
const step2Brussels = obtainInstruction("brusselsSprouts", 2)
const step3Brussels = obtainInstruction("brusselsSprouts", 3)
const step4Brussels = obtainInstruction("brusselsSprouts", 4)
const step5Brussels = obtainInstruction("brusselsSprouts", 5)
const step6Brussels = obtainInstruction("brusselsSprouts", 6)
const step7Brussels = obtainInstruction("brusselsSprouts", 7)

Promise.all ([step0Brussels, step1Brussels, step2Brussels, step3Brussels, step4Brussels, step5Brussels, step6Brussels, step7Brussels])
  .then((response) => {
    const response0 = response[0]
    const response1 = response[1]
    const response2 = response[2]
    const response3 = response[3]
    const response4 = response[4]
    const response5 = response[5]
    const response6 = response[6]
    const response7 = response[7]

    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response0}</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response1}</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response2}</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response3}</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response4}</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response5}</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response6}</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response7}</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${"Brussels sprouts are ready!"}</li>`
  })
  
