/* CALL THIS FUNCTION FROM OTHER FILES */
/****** DO NOT TOUCH vvv *****/

// Callback based function
function getInstruction(food, step, callback, errorCallback) {
  setTimeout(() => {
    // Get the instruction string
    let instruction;

    if (food === "mashedPotatoes") {
      instruction = mashedPotatoes[step];
    } else if (food === "steak") {
      instruction = steak[step];
    } else if (food === "brusselsSprouts") {
      instruction = brusselsSprouts[step];
    } else if (food === "broccoli") {
      instruction = broccoli[step];
    }

    // Invoke the provided callback or errorCallback
    if (!instruction) {
      errorCallback("Instruction step does not exist!");
    } else {
      callback(instruction);
    }
  }, Math.floor(Math.random() * 1000));
}

/***** ^^^ DO NOT TOUCH *****/
async function makeBrusselsSprouts() {
  try {
    const brusselsSproutsSteps = [
      obtainInstruction("brusselsSprouts", 0),
      obtainInstruction("brusselsSprouts", 1),
      obtainInstruction("brusselsSprouts", 2),
      obtainInstruction("brusselsSprouts", 3),
      obtainInstruction("brusselsSprouts", 4),
      obtainInstruction("brusselsSprouts", 5),
      obtainInstruction("brusselsSprouts", 6),
      obtainInstruction("brusselsSprouts", 7),
    ];

    const steps = await Promise.all(brusselsSproutsSteps);

    const brusselsSproutsList = document.querySelector("#brusselsSprouts");

    steps.forEach((step) => {
      brusselsSproutsList.innerHTML += `<li>${step}</li>`;
    });

    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

    brusselsSproutsList.innerHTML += `<li>Brussels sprouts are ready!</li>`;
  } catch (error) {
    console.log(error);
  }
}

makeBrusselsSprouts();
