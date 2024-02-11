// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code
//import { obtainInstruction } from "./obtainInstruction";
//import { myData } from './data.js';
const steak = [
  "season steak generously with salt, pepper and garlic powder",
  "place in zip lock bag",
  "cook in sous vide at 120 F for 1-2 hours",
  "remove from bag and pat dry",
  "heat pan with grapeseed oil and a quarter stick of butter",
  "cook steak for 30-60 seconds per side using a spoon to baste with butter",
  "rest for 10 minutes",
  "enjoy",
];

const mashedPotatoes = [
  "boil water",
  "tear open bag of of instant potato mix and pour into bowl",
  "pour in water",
  "mix",
  "enjoy",
];

const brusselsSprouts = [
  'wash brussels sprouts',
  'cut off base and chop in half',
  'toss in bowl with olive oil, balsamic vinegar and salt',
  'preheat oven to 500 F',
  'coat baking sheet with olive oil',
  'roast in the oven for 20 minutes',
  'place back in bowl and add salt and pepper',
  'enjoy'
];

const broccoli = [
  'wash broccoli in cold water',
  'trim and cut the stalk in half, then finely slice it',
  'fill a pot with water, add a pinch of salt and bring to the boil',
  'once boiling, carefully lower the broccoli into the water',
  'cook for 3 to 4 minutes, or until tender',
  'drain, then leave to steam dry for a minute',
  'enjoy'
];




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



function obtainInstruction(food, step) {
  return new Promise((resolve, reject) => {
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

// Out of sync
 /* getInstruction("mashedPotatoes", 0, (step1) => {
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
// ...



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += "<li>Mashed potatoes are ready!</li>";
        }, errorCallback);
      }, errorCallback);
    }, errorCallback);
  }, errorCallback);
}, errorCallback);








  // ... Your code here
    // ...


// Iteration 2 - using promises
// ...



  // Iteration 2 - using promises
function updateSteakInstructions() {
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
      document.querySelector("#steak").innerHTML += "<li>Steak is ready!</li>";
    })
    .catch((error) => {
      console.error(error);
    });
}



updateSteakInstructions();

// Call the function to update Steak instructions in the HTML



// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    document.querySelector("#broccoli").innerHTML += "<li>Broccoli is ready!</li>";
  } catch (error) {
    console.error(error);
  }
}


makeBroccoli();

// Bonus 2 - Promise all
// ...