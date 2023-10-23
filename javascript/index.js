// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /*getInstruction("mashedPotatoes", 0, (step1) => {
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
  }, (error) => console.log(error));*/



// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, step0 => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction("mashedPotatoes", 1, step1 => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
      getInstruction("mashedPotatoes", 2, step2 => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
          getInstruction("mashedPotatoes", 3, step3 => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
              getInstruction("mashedPotatoes", 4, step4 => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
                  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
              })
          })
      })
  })
})

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then(step0 => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then(step1 => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then(step2 => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then(step3 => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then(step4 => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then(step5 => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then(step6 => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then(step7 => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch(error => {
    console.error("Error occurred:", error);
  });
//other way to do exercise 2
  /*function obtainAndDisplay(Index) {
  return obtainInstruction("steak", Index)
    .then(step => {
      document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
      return Index + 1; 
    });
}

function cookSteak() {
  let steakProcess = Promise.resolve(0); // Start the chain with a resolved promise
  for (let i = 0; i <= 7; i++) {
    steakProcess = steakProcess.then(obtainAndDisplay);
  }

  return steakProcess.then(() => {
    document.querySelector("#steak").innerHTML += "<li>Steak is ready!</li>";
    document.querySelector("#steakImg").removeAttribute("hidden");
  });
}

cookSteak().catch(console.log);*/
                          

// Iteration 3 using async/await
// ...
async function makeBroccoli(){
  try{
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
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
      document.querySelector("#broccoliImg").removeAttribute("hidden")
  } catch (err) {
      console.log(err)
  }
}

makeBroccoli()


// Bonus 2 - Promise all
// ...

Promise.all(brusselsSprouts.map((_, i) => obtainInstruction("brusselsSprouts", i)))
    .then(stepArray => {
        const listItems = stepArray.map(step => `<li>${step}</li>`).join('');
        document.querySelector("#brusselsSprouts").innerHTML += listItems + "<li>Brussels sprouts are ready!</li>";
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    })
    .catch();



    // other way to do bonus 2
/*const brusselsSproutsPromise = []
for (let i = 0; i < brusselsSprouts.length; i++) {
    brusselsSproutsPromise.push(obtainInstruction("brusselsSprouts", i))
}

const allBrusselsSproutsPromise = Promise.all(brusselsSproutsPromise)
allBrusselsSproutsPromise
    .then(stepArray => {
        for (let i = 0; i < stepArray.length; i++) {
            document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepArray[i]}</li>`
        }
    })
    .catch(err => console.log(err))
    .finally(() => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
    })*/










