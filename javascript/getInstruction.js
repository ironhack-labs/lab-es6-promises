/* CALL THIS FUNCTION FROM OTHER FILES */
/****** DO NOT TOUCH vvv *****/

// Callback based function
function getInstruction(food, step, callback, errorCallback) {
    setTimeout(() => {
      // Get the instruction string
      let instruction; // yemegin yapilisindaki o anki adimi temsilen

      if (food === "mashedPotatoes") { //burada condition ile verilen yemegin tarifinin hangi adimini istiyorsak onu elde ediyoruz if bloklari ile
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
      if (!instruction) { //instruction yoksa error donmesi lazim iceride erroru yaziyoruz
        errorCallback("Instruction step does not exist!");
      } else {
        callback(instruction);
      }

    }, Math.floor(Math.random() * 1000));
}

/***** ^^^ DO NOT TOUCH *****/
