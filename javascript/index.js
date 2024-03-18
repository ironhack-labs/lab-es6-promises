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
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step5}</li>`;
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
          const mashedPotatoesImg = document.getElementById("mashedPotatoesImg");
          mashedPotatoesImg.removeAttribute("hidden");
        });
      });
    });
  });
});

  //document.querySelector("#mashedPotatoes").innerHTML =`<li>"Mashed potatoes are ready!"</li>`;

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak", 8);
  })
  .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    const steakImage = document.getElementById("steakImg");
    steakImage.removeAttribute("hidden");

  });

//iteration 3 Promises
async function makeBroccoli() {
  for(let i=0; i<broccoli.length; i++) {
    const step = await obtainInstruction("broccoli", i);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  } 
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  const broccoliImg = document.getElementById("broccoliImg");
  broccoliImg.removeAttribute("hidden");
}
  
makeBroccoli();

// Bonus Iteration 5 - Promise all
// async function brusselsSprouts() {
//   for(let i=0; i<brusselsSprouts.length; i++) {
//     const step = await obtainInstruction("brusselsSprouts", i);
//     document.querySelector("#brusselsSproutsImg").innerHTML += `<li>${step}</li>`;
//   } 
//   document.querySelector("#brusselsSproutsImg").innerHTML += `<li>Brussel sprouts are ready!</li>`;
//   const brusselsSproutsImg = document.getElementById("brusselsSproutsImg");
//   brusselsSproutsImg.removeAttribute("hidden");
// };
// brusselsSprouts();
// const  promiseAll= Promise.all( [obtainInstruction] )
//   .then((values) => console.log("values", values));


// Promise.all(steps.map((step, index) => cookStep(step.step, step.delay)))
//             .then(cookedSteps => {
//                 const cookingStepsList = document.getElementById("cookingSteps");
//                 cookedSteps.forEach(step => {
//                     const li = document.createElement("li");
//                     li.textContent = step;
//                     cookingStepsList.appendChild(li);
//                 });
//                 // Display final message
//                 const finalLi = document.createElement("li");
//                 finalLi.textContent = "Brussels sprouts are ready!";
//                 cookingStepsList.appendChild(finalLi);
//             });