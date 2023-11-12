// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
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
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises

obtainInstruction('steak', 0)

  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 1)
  })

  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 2)
  })

  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 3)
  })

  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 4)
  })

  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 5)
  })

  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 6)
  })

  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction('steak', 7)
  })

  .then(() => {
    document.getElementById('steakImg').removeAttribute('hidden')
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    return obtainInstruction('steak', 8)
  })
  .catch((err) => {
    console.log(err)
  });

// Iteration 3 using async/await

async function makeBroccoli() {
  const stepsBroccoli = broccoli.length
  try {
    for (i = 0; i < stepsBroccoli; i++) {
      const step = await obtainInstruction('broccoli', i)
      document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`
    }
    document.querySelector('#broccoli').innerHTML += `<li>Broccoli is ready!</li>`
    document.getElementById('broccoliImg').removeAttribute('hidden')
  }
  catch (err) {
    console.log(err);
  }

}
makeBroccoli();

// Bonus 2 - Promise all

const makeBrusselsSprouts = async () => {
  const brusselPromises = []
  brusselsSprouts.forEach((eachStep, i) => {
    brusselPromises.push(obtainInstruction('brusselsSprouts', i))
  })
  Promise.all(brusselPromises)
    .then((allSteps) => {
      allSteps.forEach((eachStep, i) => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${eachStep}</li>`;
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
      })
    })
}
makeBrusselsSprouts()
