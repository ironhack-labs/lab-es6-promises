// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction(
    "mashedPotatoes",
    1,
    (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
      getInstruction(
        "mashedPotatoes",
        2,
        (step2) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
          getInstruction(
            "mashedPotatoes",
            3,
            (step3) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
              getInstruction(
                "mashedPotatoes",
                4,
                (step4) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
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
});

// Iteration 2 - using promises
// obtainInstruction("steak", 0)
//   .then((step0) => (document.querySelector("#steak").innerHTML += `<li>${step0}</li>`))
//   .then(() => obtainInstruction("steak", 1))
//   .then((step1) => (document.querySelector("#steak").innerHTML += `<li>${step1}</li>`))
//   .then(() => obtainInstruction("steak", 2))
//   .then((step2) => (document.querySelector("#steak").innerHTML += `<li>${step2}</li>`))
//   .then(() => obtainInstruction("steak", 3))
//   .then((step3) => (document.querySelector("#steak").innerHTML += `<li>${step3}</li>`))
//   .then(() => obtainInstruction("steak", 4))
//   .then((step4) => (document.querySelector("#steak").innerHTML += `<li>${step4}</li>`))
//   .then(() => obtainInstruction("steak", 5))
//   .then((step5) => (document.querySelector("#steak").innerHTML += `<li>${step5}</li>`))
//   .then(() => obtainInstruction("steak", 6))
//   .then((step6) => (document.querySelector("#steak").innerHTML += `<li>${step6}</li>`))
//   .then(() => obtainInstruction("steak", 7))
//   .then((step7) => (document.querySelector("#steak").innerHTML += `<li>${step7}</li>`))
//   .then(() => document.querySelector("#steakImg").removeAttribute("hidden"))
//   .catch((error) => console.log(error));

steak.forEach((step, index) => {
  obtainInstruction("steak", index)
    .then((step) => (document.querySelector("#steak").innerHTML += `<li>${step}</li>`))
    .catch((error) => console.log(error));
});
// .then(() => document.querySelector("#steakImg").removeAttribute("hidden"));

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    Promise.allSettled(
      broccoli.map(async (step, index) => {
        const instruction = await obtainInstruction("broccoli", index);
        document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
      })
    ).then(() => {
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
      document.querySelector("#broccoliImg").removeAttribute("hidden");
    });
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all

let promises = [];
brusselsSprouts.forEach((step, index) => promises.push(obtainInstruction("brusselsSprouts", index)));

Promise.all(promises)
  .then((steps) => {
    steps.forEach((step) => (document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`));
  })
  .then(() => (document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`))
  .then(() => document.querySelector("#brusselsSproutsImg").removeAttribute("hidden"))
  .catch((error) => console.log(error));
