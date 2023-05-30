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
// getInstruction("mashedPotatoes", 0, (step1) => {
//   // add step1 to the DOM
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//     getInstruction("mashedPotatoes", 2, (step3) => {
//       document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//       getInstruction("mashedPotatoes", 3, (step4) => {
//         document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//         getInstruction("mashedPotatoes", 4, (step5) => {
//           document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//           document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
//           document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//         }, (error) => {console.log(error);});
//       }, (error) => {console.log(error);});
//     }, (error) => {console.log(error);});
//   }, (error) => {console.log(error);});
// }, (error) => {console.log(error);});

function getInstructionsRecursion(index) {
  if (index >= mashedPotatoes.length) {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
    return;
  }
  getInstruction("mashedPotatoes", index, (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstructionsRecursion(++index)
  }, (error) => {console.log(error);});
}
getInstructionsRecursion(0)

// Iteration 2 - using promises
// obtainInstruction("steak", 0)
//   .then((step1) => {
//     document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
//     return obtainInstruction("steak", 1);
//   })
//   .then((step2) => {
//     document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
//     return obtainInstruction("steak", 2);
//   })
//   .then((step3) => {
//     document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
//     return obtainInstruction("steak", 3);
//   })
//   .then((step4) => {
//     document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
//     return obtainInstruction("steak", 4);
//   })
//   .then((step5) => {
//     document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
//     return obtainInstruction("steak", 5);
//   })
//   .then((step6) => {
//     document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
//     return obtainInstruction("steak", 6);
//   })
//   .then((step7) => {
//     document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
//     return obtainInstruction("steak", 7);
//   })
//   .then((step8) => {
//     document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
//     document.querySelector("#steak").innerHTML += `<li>Steak is are ready!</li>`;
//     document.querySelector("#steakImg").removeAttribute("hidden");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

let promiseChain = Promise.resolve();
for (let i = 0; i < steak.length; i++) {
  promiseChain = promiseChain.then(() => {
    return obtainInstruction("steak", i)
      .then((step) => {
        // force an error
        if (i===3) document.querySelector("#blablabla").innerHTML += `<li>${step}</li>`;
        else document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
      })
      .catch((error) => {
        console.log(error);
        document.querySelector("#steak").innerHTML += `<li>error @[i = ${i}]: ${error}</li>`;
        return Promise.resolve(); // return a resolved promise to continue the chain even if an error occurs
      });
  });
}
promiseChain
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => {
    console.log("here");
    console.log(error);
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    for (let i = 0; i < broccoli.length; i++) {
      let response = await obtainInstruction("broccoli", i);
      document.querySelector("#broccoli").innerHTML += `<li>${response}</li>`;
    }
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}
makeBroccoli();
console.log('returning immediately after makeBroccoli()...')

// Bonus 2 - Promise all
promises = []
for (let i = 0; i < brusselsSprouts.length; i++) {
  promises.push(obtainInstruction("brusselsSprouts", i));
}

Promise.all(promises).then((responses) => {
  responses.forEach(response => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${response}</li>`;
  })
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussel sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})

// other idea:
// const list = [
//   obtainInstruction("brusselsSprouts", 0),
//   obtainInstruction("brusselsSprouts", 1),
//   obtainInstruction("brusselsSprouts", 2),
//   obtainInstruction("brusselsSprouts", 3),
//   obtainInstruction("brusselsSprouts", 4),
//   obtainInstruction("brusselsSprouts", 5),
//   obtainInstruction("brusselsSprouts", 6),
//   obtainInstruction("brusselsSprouts", 7),
// ];

// Promise.all(list).then((response) => {
//   response.forEach(response => {
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>${response}</li>`;
//   })
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussel sprouts are ready!</li>`;
//   document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
// })