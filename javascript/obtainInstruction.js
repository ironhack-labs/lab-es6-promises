/* CALL THIS FUNCTION FROM OTHER FILES LIKE */

/****** DO NOT TOUCH vvv *****/

// Promise based function
function obtainInstruction(food, step) {
  let errorMessage = "";
  return new Promise((resolve, reject) => {
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
      } else {
        errorMessage = `Food "${food}" does not exist`;
      }

      // Resolve or reject the promise
      if (!instruction) {
        reject(errorMessage !== "" ? errorMessage : "Instruction step does not exist!");
      } else {
        resolve(instruction);
      }
    }, Math.floor(Math.random() * 1000));
  });
}

/***** ^^^ DO NOT TOUCH *****/
