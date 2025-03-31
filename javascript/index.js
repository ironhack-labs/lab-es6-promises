// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

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



// Iteration 1 - using callbacks
const cookSteak = new Promise((resolve, reject) => {
  addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  document.querySelector(
                    "#table"
                  ).innerHTML += `<img src="public/images/steak.jpg" />`;
                  resolve();
                });
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 - using promises
const cookMash = new Promise((resolve, reject) => {
  addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
          addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
            document.querySelector(
              "#table"
            ).innerHTML += `<img src="public/images/mashPotatoes.jpg" />`;

            resolve();
          });
        });
      });
    });
  });
});


// Iteration 3 using async/await
async function makeFood(steps, id) {
  return new Promise(async (resolve, reject) => {
    for (let step of steps) {
      await addFood(step, id);
    }

    document.querySelector(
      "#table"
    ).innerHTML += `<img src="public/images/brusselSprouts.jpg" />`;

    resolve();
  });
}

const cookBrusselSprouts = makeFood(brusselsSprouts, "#brusselSprouts");

// Bonus 2 - Promise all
const audio = new Audio("public/media/dinnerIsServed.mp3");
audio.volume = 0.5;
audio.play();
alert("Dinner is served!");
