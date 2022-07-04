// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
//   getInstruction("mashedPotatoes", 0, (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   }, (error) => console.log(error));

//  getInstruction("mashedPotatoes", 1, (step2) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//   }, (error) => console.log(error));

//   getInstruction("mashedPotatoes", 2, (step3) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//   }, (error) => console.log(error));

//   getInstruction("mashedPotatoes", 3, (step4) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//   }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks

function getIngredientFor(meal, stepNumber, onSuccess) {
  getInstruction(
    meal,
    stepNumber,
    (step) => {
      document.querySelector(`#${meal}`).innerHTML += `<li>${step}</li>`;
      onSuccess && onSuccess();
    },
    (error) => console.log(error)
  );
}

function showPotatoImage() {
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
}
// Iteration 1 - using callbacks
getIngredientFor("mashedPotatoes", 0, () => {
  getIngredientFor("mashedPotatoes", 1, () => {
    getIngredientFor("mashedPotatoes", 2, () => {
      getIngredientFor("mashedPotatoes", 3, () => {
        getIngredientFor("mashedPotatoes", 4, () => {
          showPotatoImage();
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
        });
      });
    });
  });
});

// Iteration 2 - using promises
obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  obtainInstruction("steak", 1).then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    obtainInstruction("steak", 2).then((step0) => {
      document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
      obtainInstruction("steak", 4).then((step0) => {
        document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
        obtainInstruction("steak", 5).then((step0) => {
          document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
          obtainInstruction("steak", 6).then((step0) => {
            document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
            obtainInstruction("steak", 7).then((step0) => {
              document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
              document.querySelector(
                "#steak"
              ).innerHTML += `<li>Stake is ready!</li>`;
              document.querySelector("#steakImg").removeAttribute("hidden");
            });
          });
        });
      });
    });
  });
});
// Iteration 3 using async/await
makeBroccoli();
async function makeBroccoli() {
  for (let i = 0; i < 7; i++) {
    await obtainInstruction("broccoli", i).then((step0) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    });
  }
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

// Bonus 2 - Promise all
makeBrusselsSprouts();
async function makeBrusselsSprouts() {
  let steps = [];
  for (let i = 0; i < 8; i++) {
    steps = [
      ...steps,
      obtainInstruction("brusselsSprouts", i).then((step) => {
        return step;
      }),
    ];
  }

  Promise.all(steps)
    .then((results) => {
      results.forEach((step) => {
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>${step}</li>`;
      });
    })
    .then(() => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    });
}
