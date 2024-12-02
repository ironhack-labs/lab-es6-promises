/* CALL THIS FUNCTION FROM OTHER FILES */
/****** DO NOT TOUCH vvv *****/

/* function getInstruction that uses callbacks to asynchronously retrieve instruction steps for any food. 
It uses setTimeout to mimic an asynchronous operation: each function execution time is randomized to mimic how promise function would execute, so steps will come out of order*/
function getInstruction(food, step, callback, errorCallback) {
    setTimeout(() => {
      // Get the instruction string
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

      // Invoke the provided callback or errorCallback
      if (!instruction) {
        errorCallback("Instruction step does not exist!");
      } else {
        callback(instruction);
      }

    }, Math.floor(Math.random() * 1000));
}

/***** ^^^ DO NOT TOUCH *****/
