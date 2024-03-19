// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code
/*
// Out of sync
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
          document.querySelector("#mashedPotatoes").innerHTML += "<li>Mashed potatoes are ready</li>"
          document.querySelector("#mashedPotatoesImg").style.display = 'block';
        });

      });

    });
  });
});



// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`; // Adding "Steak is ready!" after all steps
    document.querySelector("#steakImg").style.display = 'block'
  }).catch((error) => {
    console.error(error)
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  try {

    const step0 = await obtainInstruction('broccoli', 0);
    displayStep(step0);

    const step1 = await obtainInstruction('broccoli', 1);
    displayStep(step1);

    const step2 = await obtainInstruction('broccoli', 2);
    displayStep(step2);

    const step3 = await obtainInstruction('broccoli', 3);
    displayStep(step3);
    const step4 = await obtainInstruction('broccoli', 4);
    displayStep(step4);
    const step5 = await obtainInstruction('broccoli', 5);
    displayStep(step5);
    const step6 = await obtainInstruction('broccoli', 6);
    displayStep(step6);
    const picture = (document.querySelector("#broccoliImg").style.display = 'block')

  } catch (error) {
    console.error(error);
  }
}

function displayStep(step) {
  const broccoliList = document.querySelector("#broccoli");
  broccoliList.innerHTML += `<li>${step}</li>`;
}

makeBroccoli()
  .finally(() => {
    const broccoliList = document.querySelector("#broccoli");
    broccoliList.innerHTML += `<li>Broccoli is ready!</li>`;
  });
// Bonus 2 - Promise all
const cookingSteps = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5)
];
Promise.all(cookingSteps)
  .then((steps) => {
    const brusselsSproutsElement = document.querySelector("#brusselsSprouts");
    steps.forEach((step) => {
      brusselsSproutsElement.innerHTML += `<li>${step}</li>`;
    })
    brusselsSproutsElement.innerHTML += "<li>Brussels sprouts are ready!</li>";
    document.querySelector("#brusselsSproutsImg").style.display = 'block'

  })
  .catch((error) => {

  });