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

const errorHandler = (error) => {
  console.log(error);
};
// ...
// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (setp2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${setp2}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li> 
                    <li>Mashed potatoes are ready!</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  errorHandler
                );
              },
              errorHandler
            );
          },
          errorHandler
        );
      },
      errorHandler
    );
  },
  errorHandler
);

// Iteration 2 - using promises
// ...

const steakContainer = document.querySelector("#steak");


obtainInstruction("steak", 0)
  .then((step0) => {
    steakContainer.innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    steakContainer.innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    steakContainer.innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    steakContainer.innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    steakContainer.innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    steakContainer.innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    steakContainer.innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    steakContainer.innerHTML += `<li>${step7}</li>`;
    return obtainInstruction("steak", 8);
  })
  .then((step8) => {
    steakContainer.innerHTML += `<li>${step8}</li> <li>steak is Ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch(errorHandler);

// Iteration 3 using async/await
// ...
const broccoliContainer = document.querySelector("#broccoli");

async function makeBroccoli() {
  for (let i = 0; i < broccoli.length; i++) {
    const step = await obtainInstruction("broccoli", i);
    if (i === broccoli.length - 1) {
      broccoliContainer.innerHTML += `<li>${step}</li> <li>Broccoli is ready!</li>`;
      document.querySelector("#broccoliImg").removeAttribute("hidden");
      break;
    }
    broccoliContainer.innerHTML += `<li>${step}</li>`;
  }
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
const brusselsSproutsContainer = document.querySelector("#brusselsSprouts");

async function makeBrussels() {
  const brusselsSproutsSteps = [];

  for (let i = 0; i < brusselsSprouts.length; i++) {
    const step = await obtainInstruction("brusselsSprouts", i);
    if (i === brusselsSprouts.length - 1) {
      brusselsSproutsSteps.push(`${step} <li>brusselsSprouts is Ready!</li>`);
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
      break;
    }
    brusselsSproutsSteps.push(step);
  }

  Promise.all(brusselsSproutsSteps).then((steps) => {
    for (let step of steps)
      brusselsSproutsContainer.innerHTML += `<li>${step}</li>`;
  });
}

makeBrussels();
