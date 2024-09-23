// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

  
  



// Iteration 1 - using callbacks
// ...

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
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));

      }, (error) => console.log(error));

    }, (error) => console.log(error));

  }, (error) => console.log(error));

}, (error) => console.log(error));

// Iteration 2 - using promises
// ...

obtainInstruction(`steak`,0)
.then((data1) => {
  document.querySelector("#steak").innerHTML += `<li>${data1}</li>`;
  return obtainInstruction(`steak`,1)
})
.then((data2) => {
  document.querySelector("#steak").innerHTML += `<li>${data2}</li>`;
  return obtainInstruction(`steak`,2)
})
.then((data3) => {
  document.querySelector("#steak").innerHTML += `<li>${data3}</li>`;
  return obtainInstruction(`steak`,3)
})
.then((data4) => {
  document.querySelector("#steak").innerHTML += `<li>${data4}</li>`;
  return obtainInstruction(`steak`,4)
})
.then((data5) => {
  document.querySelector("#steak").innerHTML += `<li>${data5}</li>`;
  return obtainInstruction(`steak`,5)
})
.then((data6) => {
  document.querySelector("#steak").innerHTML += `<li>${data6}</li>`;
  return obtainInstruction(`steak`,6)
})
.then((data7) => {
  document.querySelector("#steak").innerHTML += `<li>${data7}</li>`;
  return obtainInstruction(`steak`,7)
})
.then((data8) => {
  document.querySelector("#steak").innerHTML += `<li>${data8}</li>`;
  document.querySelector("#steak").innerHTML += `<li>Steak is READY!</li>`;
  document.querySelector("#steakImg").removeAttribute("hidden");
})
.catch((error) => console.log(error))

// Iteration 3 using async/await
// ...

async function name() {
  try {
    const step1 = await obtainInstruction("broccoli",0)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    const step2 = await obtainInstruction("broccoli",1)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    const step3 = await obtainInstruction("broccoli",2)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    const step4 = await obtainInstruction("broccoli",3)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    const step5 = await obtainInstruction("broccoli",4)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    const step6 = await obtainInstruction("broccoli",5)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    const step7 = await obtainInstruction("broccoli",6)
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");


  } catch (error) {
    console.log(error)
  }
}

name()


// Bonus 2 - Promise all
// ...

Promise.all([
  obtainInstruction("brusselsSprouts",0),
  obtainInstruction("brusselsSprouts",1),
  obtainInstruction("brusselsSprouts",2),
  obtainInstruction("brusselsSprouts",3),
  obtainInstruction("brusselsSprouts",4),
  obtainInstruction("brusselsSprouts",5),
  obtainInstruction("brusselsSprouts",6),
  obtainInstruction("brusselsSprouts",7),
])
.then((step) => {
  step.forEach((step) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
  })
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  
})