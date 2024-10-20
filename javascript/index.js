// 🚨🚨🚨 Comment out the below code before you start working on the code
// Out of sync

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
}, (error) => console.log(error));


// Function to play sound
function playSound() {
  const audio = new Audio('path/to/dinner_is_served.mp3'); // Replace with the actual path
  audio.play();
}

// Iteration 1 - using callbacks for Mashed Potatoes
function displayMashedPotatoes() {
  getInstruction('mashedPotatoes', 0, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    
    getInstruction('mashedPotatoes', 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
      
      getInstruction('mashedPotatoes', 2, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        
        getInstruction('mashedPotatoes', 3, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
          
          getInstruction('mashedPotatoes', 4, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
            document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute('hidden');
            // Play sound
            playSound();
          });
        });
      });
    });
  });
}

// Iteration 2 - using promises for Steak
function displaySteak() {
  obtainInstruction('steak', 0)
    .then((step0) => {
      document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
      return obtainInstruction('steak', 1);
    })
    .then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
      return obtainInstruction('steak', 2);
    })
    .then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      return obtainInstruction('steak', 3);
    })
    .then((step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
      return obtainInstruction('steak', 4);
    })
    .then((step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
      return obtainInstruction('steak', 5);
    })
    .then((step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
      document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
      document.querySelector("#steakImg").removeAttribute('hidden');
      // Play sound
      playSound();
    })
    .catch(error => console.error(error));
}

// Iteration 3 - using async/await for Broccoli
async function displayBroccoli() {
  try {
    for (let i = 0; i < 5; i++) {
      const step = await obtainInstruction('broccoli', i);
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute('hidden');
    // Play sound
    playSound();
  } catch (error) {
    console.error(error);
  }
}

// Bonus - Promise.all for Brussels Sprouts
function displayBrusselsSprouts() {
  const brusselsSproutsPromises = [
    obtainInstruction('brusselsSprouts', 0),
    obtainInstruction('brusselsSprouts', 1),
    obtainInstruction('brusselsSprouts', 2),
    obtainInstruction('brusselsSprouts', 3),
    obtainInstruction('brusselsSprouts', 4),
    obtainInstruction('brusselsSprouts', 5),
  ];

  Promise.all(brusselsSproutsPromises)
    .then(steps => {
      steps.forEach(step => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
      });
      document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute('hidden');
      // Play sound
      playSound();
    })
    .catch(error => console.error(error));
}

// Execute all display functions in order
function displayAllSteps() {
  displayMashedPotatoes();
  displaySteak();
  displayBroccoli();
  displayBrusselsSprouts();
}

// Call the function to execute it
displayAllSteps();
