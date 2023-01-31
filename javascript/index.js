// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   1,
//   (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   2,
//   (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   3,
//   (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   },
//   (error) => console.log(error)
// );

// getInstruction(
//   "mashedPotatoes",
//   4,
//   (step5) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//     document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
//   },
//   (error) => console.log(error)
// );

// Iteration 1 - using callbacks
// ...
mashedPotatoes.push("Mashed potatoes are ready!");
getInstruction("mashedPotatoes", 0, (stepCero) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${stepCero}</li>`;
  getInstruction("mashedPotatoes", 1, (stepUno) => {
    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>${stepUno}</li>`;
    getInstruction("mashedPotatoes", 2, (stepDos) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${stepDos}</li>`;
      getInstruction("mashedPotatoes", 3, (stepTres) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${stepTres}</li>`;
        getInstruction("mashedPotatoes", 4, (stepCuatro) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${stepCuatro}</li>`;
          getInstruction("mashedPotatoes", 5, (stepCinco) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${stepCinco}</li>`;
            getInstruction("mashedPotatoes", 6, (stepSeis) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${stepSeis}</li>`;
            });
            document
              .getElementById("mashedPotatoesImg")
              .removeAttribute("hidden");
          });
        });
      });
    });
  });
});

// Iteration 2 - using promises
steak.push("Steak is ready!");
obtainInstruction("steak", 0)
  .then((stepCero) => {
    document.querySelector("#steak").innerHTML += `<li>${stepCero}</li>`;
    return obtainInstruction("steak", 1);
  })
  // ... Your code here
  .then((stepUno) => {
    document.querySelector("#steak").innerHTML += `<li>${stepUno}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((stepDos) => {
    document.querySelector("#steak").innerHTML += `<li>${stepDos}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((stepTres) => {
    document.querySelector("#steak").innerHTML += `<li>${stepTres}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((stepCuatro) => {
    document.querySelector("#steak").innerHTML += `<li>${stepCuatro}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((stepCinco) => {
    document.querySelector("#steak").innerHTML += `<li>${stepCinco}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((stepSeis) => {
    document.querySelector("#steak").innerHTML += `<li>${stepSeis}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((stepSiete) => {
    document.querySelector("#steak").innerHTML += `<li>${stepSiete}</li>`;
    return obtainInstruction("steak", 8);
  })
  .then((stepOcho) => {
    document.querySelector("#steak").innerHTML += `<li>${stepOcho}</li>`;
    document.getElementById("steakImg").removeAttribute("hidden");
    return obtainInstruction("steak", 9);
  });

// Iteration 3 using async/await
// ...
broccoli.push("Brocoli is ready");
async function makeBroccoli() {
  // ... Your code here
  try {
    let stepCero = await obtainInstruction("broccoli", 0);
    document.getElementById("broccoli").innerHTML += `<li>${stepCero}</li>`;
    let stepUno = await obtainInstruction("broccoli", 1);
    document.getElementById("broccoli").innerHTML += `<li>${stepUno}</li>`;
    let stepDos = await obtainInstruction("broccoli", 2);
    document.getElementById("broccoli").innerHTML += `<li>${stepDos}</li>`;
    let stepTres = await obtainInstruction("broccoli", 3);
    document.getElementById("broccoli").innerHTML += `<li>${stepTres}</li>`;
    let stepCuatro = await obtainInstruction("broccoli", 4);
    document.getElementById("broccoli").innerHTML += `<li>${stepCuatro}</li>`;
    let stepCinco = await obtainInstruction("broccoli", 5);
    document.getElementById("broccoli").innerHTML += `<li>${stepCinco}</li>`;
    let stepSeis = await obtainInstruction("broccoli", 6);
    document.getElementById("broccoli").innerHTML += `<li>${stepSeis}</li>`;
    let stepSiete = await obtainInstruction("broccoli", 7);
    document.getElementById("broccoli").innerHTML += `<li>${stepSiete}</li>`;
    document.getElementById("broccoliImg").removeAttribute("hidden");
  } catch (err) {}
}

makeBroccoli();

// Bonus 2 - Promise all
brusselsSprouts.push("Brussel sprouts are ready!");
const promises = [
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
  obtainInstruction("brusselsSprouts", 8),
];

Promise.all(promises)
  .then((steps) => {
    document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
    steps.forEach((step) => {
      document.getElementById(
        "brusselsSprouts"
      ).innerHTML += `<li>${step}</li>`;
    });
  })
  .catch((error) => {
    console.error("Error :( ", error);
  });
