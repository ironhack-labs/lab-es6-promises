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

// Promise based function
function getInstructionPromise(food, step) {
  return new Promise((resolve, reject) => {
    getInstruction(
      food,
      step,
      (instruction) => resolve(instruction),
      (error) => reject(error)
    );
  });
}

// Example usage of the Promise-based function
getInstructionPromise("mashedPotatoes", 0)
  .then((instruction) => {
    console.log(instruction);
    return getInstructionPromise("mashedPotatoes", 1);
  })
  .then((instruction) => {
    console.log(instruction);
    return getInstructionPromise("mashedPotatoes", 2);
  })
  .then((instruction) => {
    console.log(instruction);
    return getInstructionPromise("mashedPotatoes", 3);
  })
  .then((instruction) => {
    console.log(instruction);
    return getInstructionPromise("mashedPotatoes", 4);
  })
  .then((instruction) => {
    console.log("Mashed potatoes are ready!");
  })
  .catch((error) => {
    console.error(error);
  });

/***** Example data (for reference) *****/
const mashedPotatoes = [
  "Boil water",
  "Add potatoes",
  "Mash potatoes",
  "Add butter",
  "Serve",
];

const steak = ["Season steak", "Heat pan", "Cook steak", "Rest steak", "Serve"];

const brusselsSprouts = [
  "Trim sprouts",
  "Boil water",
  "Add sprouts",
  "Cook sprouts",
  "Serve",
];

const broccoli = [
  "Cut broccoli",
  "Boil water",
  "Add broccoli",
  "Cook broccoli",
  "Serve",
];
