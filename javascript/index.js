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
// ...
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
                    ).innerHTML += `<li>${step5}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
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
// ...
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
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
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    const domElm = document.querySelector("#broccoli");

    const step0 = await obtainInstruction("steak", 0);
    domElm.innerHTML += `<li>${step0}</li>`;
    const step1 = await obtainInstruction("steak", 1);
    domElm.innerHTML += `<li>${step1}</li>`;
    const step2 = await obtainInstruction("steak", 2);
    domElm.innerHTML += `<li>${step2}</li>`;
    const step3 = await obtainInstruction("steak", 3);
    domElm.innerHTML += `<li>${step3}</li>`;
    const step4 = await obtainInstruction("steak", 4);
    domElm.innerHTML += `<li>${step4}</li>`;
    const step5 = await obtainInstruction("steak", 5);
    domElm.innerHTML += `<li>${step5}</li>`;
    const step6 = await obtainInstruction("steak", 6);
    domElm.innerHTML += `<li>${step6}</li>`;
    domElm.innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.log(err);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// ...

function makeBrusselsSprouts() {
  const step0 = obtainInstruction("brusselsSprouts", 0);
  const step1 = obtainInstruction("brusselsSprouts", 1);
  const step2 = obtainInstruction("brusselsSprouts", 2);
  const step3 = obtainInstruction("brusselsSprouts", 3);
  const step4 = obtainInstruction("brusselsSprouts", 4);
  const step5 = obtainInstruction("brusselsSprouts", 5);
  const step6 = obtainInstruction("brusselsSprouts", 6);
  const step7 = obtainInstruction("brusselsSprouts", 7);

  const promiseArr = [step0, step1, step2, step3, step4, step5, step6, step7];

  Promise.all(promiseArr)
    .then(([step0, step1, step2, step3, step4, step5, step6, step7]) => {
      const domElm = document.querySelector("#brusselsSprouts");
      domElm.innerHTML += `<li>${step0}</li>`;
      domElm.innerHTML += `<li>${step1}</li>`;
      domElm.innerHTML += `<li>${step2}</li>`;
      domElm.innerHTML += `<li>${step3}</li>`;
      domElm.innerHTML += `<li>${step4}</li>`;
      domElm.innerHTML += `<li>${step5}</li>`;
      domElm.innerHTML += `<li>${step6}</li>`;
      domElm.innerHTML += `<li>${step7}</li>`;
      domElm.innerHTML += `<li>Brussels sprouts are ready!</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    })
    .catch((err) => console.log(err));
}

makeBrusselsSprouts();
