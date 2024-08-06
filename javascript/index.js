// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/* getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
); */

// Iteration 1 - using callbacks
// ...
function getInstruction(instructionIndex, callback, errorCallback) {
  setTimeout(() => {
    if (!mashedPotatoes[instructionIndex]) {
      errorCallback("Instruction not found");
      return;
    }

    console.log(mashedPotatoes[instructionIndex]);
    document.querySelector(
      "#mashedPotatoes"
    ).innerHTML += `<li>${mashedPotatoes[instructionIndex]}</li>`;

    callback();
  }, 1000);
}
getInstruction(
  0,
  () => {
    getInstruction(
      1,
      () => {
        getInstruction(
          2,
          () => {
            getInstruction(
              3,
              () => {
                getInstruction(
                  4,
                  () => {
                    console.log("Mashed potatoes are ready!");
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
                  },
                  (err) => console.log(err)
                );
              },
              (err) => console.log(err)
            );
          },
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );
  },
  (err) => console.log(err)
);

// Iteration 2 - using promises
// ...

function obtainInstruction(step) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(steak[step]);
      document.querySelector("#steak").innerHTML += `<li>${steak[step]}</li>`;
      if (!steak[step]) reject("Instructions not found.");
      else resolve();
    }, 1000);
  });
}
//
obtainInstruction(0)
  .then(() => obtainInstruction(1))
  .then(() => obtainInstruction(2))
  .then(() => obtainInstruction(3))
  .then(() => obtainInstruction(4))
  .then(() => obtainInstruction(5))
  .then(() => obtainInstruction(6))
  .then(() => obtainInstruction(7))

  .then(() => {
    console.log("Steak is ready!");
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  })
  .catch((err) => console.log(err));

// Iteration 3 using async/await
// ...
function obtainInstructionBroccoli(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(broccoli[step]);
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${broccoli[step]}</li>`;

      if (!broccoli[step]) reject("Instructions not found.");
      else resolve();
    }, 1000);
  });
}

async function getBroccoli() {
  try {
    await obtainInstructionBroccoli(0);
    await obtainInstructionBroccoli(1);
    await obtainInstructionBroccoli(2);
    await obtainInstructionBroccoli(3);
    await obtainInstructionBroccoli(4);
    await obtainInstructionBroccoli(5);
    await obtainInstructionBroccoli(6);

    console.log("Broccoli is ready!");
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
  } catch (err) {
    console.log(err);
  }
}
getBroccoli();

// Bonus 2 - Promise all
// ...
