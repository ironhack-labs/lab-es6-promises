// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

/* Out of sync
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
  }, (error) => console.log(error)); */

// Iteration 1 - using callbacks
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
                  (error) => {
                    console.log(error);
                  }
                );
              },
              (error) => {
                console.log(error);
              }
            );
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// Iteration 2 - using promises


/*function getFirstStep() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step1}</li>`), 2000);
  })
}

function getSecondStep() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step2}</li>`), 1000);
  })
}

function getThirdStep() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step3}</li>`), 200);
  })
}

function getFourthStep() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step4}</li>`), 500);
  })
}

function getFifthStep() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step5}</li>`), 300);
  })
}

function getSixthStep() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step6}</li>`), 800);
  })
}

function getSeventhStep() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step7}</li>`), 1100);
  })
}

function getEigthStep() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step8}</li>`), 400);
  })
}

function askForStep("steak", 0) {

return new Promise((resolve) => {
  const theStep = stake(0)
  setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${theStep}</li>`), 400);
} )

}*/


obtainInstruction("steak", 0)
  .then((step0) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step0}</li>`), 400)
    }, 1000)
  })
  .then((step1) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step1}</li>`), 400)
    }, 1000)
  })
  .then((step2) => {
    console.log(step2)
    return new Promise((resolve) => {
      setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step2}</li>`), 400)
    }, 1000)
  })
  .then((step3) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step3}</li>`), 400)
    }, 1000)
  })
  .then((step4) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step4}</li>`), 400)
    }, 1000)
  })
  .then((step5) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step5}</li>`), 400)
    }, 1000)
  })
  .then((step6) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step6}</li>`), 400)
    }, 1000)
  })
  .then((step7) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(document.querySelector("#steak").innerHTML += `<li>${step7}</li>`), 400)
    }, 1000)
  })
  .catch((error) => {
    return console.log(error);
  });

// Iteration 3 using async/await
function obtainInstruction(food, step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
      let instruction;

      if (food === "mashedPotatoes") {
        instruction = mashedPotatoes[step];
      }
      else if (food === "steak") {
        instruction = steak[step];
      }
      else if (food === "brusselsSprouts") {
        instruction = brusselsSprouts[step];
      }
      else if (food === "broccoli") {
        instruction = broccoli[step];
      };
      

      // Resolve or reject the promise
      if (!instruction) {
        reject("Instruction step does not exist!")
      }
      else {
        resolve(instruction);
      }

    }, Math.floor(Math.random() * 1000));
  });
}


async function makeBroccoli() {

try {
const step1 = await obtainInstruction("broccoli", 0)
console.log(step1)

const step2 = await obtainInstruction("broccoli", 1)
console.log(step2)

const step3 = await obtainInstruction("broccoli", 2)
console.log(step3)

const step4 = await obtainInstruction("broccoli", 3)
console.log(step4)

const step5 = await obtainInstruction("broccoli", 4)
console.log(step5)

const step6 = await obtainInstruction("broccoli", 5)
console.log(step6)

const step7 = await obtainInstruction("broccoli", 6)
console.log(step7)

}
catch(error) {
  console.log(error)
}
}; 

// Bonus 2 - Promise all

Promise.all([
obtainInstruction("brusselsSprouts", 0),
obtainInstruction("brusselsSprouts", 1),
obtainInstruction("brusselsSprouts", 2),
obtainInstruction("brusselsSprouts", 3),
obtainInstruction("brusselsSprouts", 4),
obtainInstruction("brusselsSprouts", 5),
obtainInstruction("brusselsSprouts", 6),
obtainInstruction("brusselsSprouts", 7),
])
.then((result) => {
  console.log(result)
  result.map((eachResult) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${eachResult}</li>`
  })
})
.catch((error) => {
  console.log(error)
})