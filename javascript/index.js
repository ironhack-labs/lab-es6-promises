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
// In order but sequential
// E.g. getInstruction (step 2) isn't called until callback for getInstruction (step 1) has been resolved
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li><li>Mashed potatoes are ready!</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
// Still sequential
// E.g. obtainInstruction (step 2) isn't called until the Promise in obtainInstruction (step 1)
// has been settled and its 'resolved' result captured in the .then block
obtainInstruction("steak", 0)
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    obtainInstruction("steak", 1).then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      obtainInstruction("steak", 2).then((step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
        obtainInstruction("steak", 3).then((step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
          obtainInstruction("steak", 4).then((step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
            obtainInstruction("steak", 5).then((step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
              obtainInstruction("steak", 6).then((step7) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step7}</li>`;
                obtainInstruction("steak", 7).then((step8) => {
                  document.querySelector(
                    "#steak"
                  ).innerHTML += `<li>${step8}</li><li>Stake is ready!</li>`;
                  document.querySelector("#steakImg").removeAttribute("hidden");
                });
              });
            });
          });
        });
      });
    });
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
// Still sequential
// E.g. obtainInstruction (step 2) isn't called until the Promise in obtainInstruction (step 1),
// which has been called with 'await', has been settled.
async function makeBroccoli() {
  const broccoliList = document.querySelector("#broccoli");
  for (let i = 0; i < broccoli.length; i++) {
    const step = await obtainInstruction("broccoli", i);
    broccoliList.innerHTML += `<li>${step}</li>`;
  }
  broccoliList.innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all
// Everything running at the same time
// All obtainInstruction (step X) are executed simultaneously, then Promise.all(<array>),
// which has to be called with either 'await' or .then, waits for promises' results to be settled.
async function makeBrusselsSprouts() {
  const sproutsList = document.querySelector("#brusselsSprouts");
  const steps = [];

  for (let i = 0; i < brusselsSprouts.length; i++)
    steps.push(obtainInstruction("brusselsSprouts", i));

  Promise.all(steps)
    .then((stepArr) => {
      let stepListItems = "";
      for (step of stepArr) stepListItems += `<li>${step}</li>`;
      stepListItems += "<li>Brussels sprouts are ready!</li>";
      sproutsList.innerHTML += stepListItems;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    })
    .catch((error) => console.log(error));
}

makeBrusselsSprouts();
