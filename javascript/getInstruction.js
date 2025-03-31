/* CALL THIS FUNCTION FROM OTHER FILES */
/****** DO NOT TOUCH vvv *****/

// Callback based function

function addFood(step, id, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('step ', step, 'id ', id);
      document.querySelector(id).innerHTML += `<li>${step}</li`;
      resolve(step);
      callback ? callback() : ''; // For iteration one
    }, Math.floor(Math.random() * 1000));
  });
}
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
