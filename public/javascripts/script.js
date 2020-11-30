// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code

// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], "#steak");
//   console.log(mashPotatoes[i]);
// }

let audio = new Audio("../public/media/dinnerIsServed.mp3");

// Iteration 1 using callbacks
const steakIt = addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {});

              let addImage = document.createElement("img");
              addImage.src = "./public/images/steak.jpg";
              table.appendChild(addImage);
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
const potatoesIt = addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {});

        let addImage = document.createElement("img");
        addImage.src = "./public/images/mashPotatoes.jpg";
        table.appendChild(addImage);
      });
    });
  });
});

// Iteration 3 using async and await
// 1st way
// async function makeFood() {
//   await addFood(brusselSprouts[0], "#brusselSprouts");
//   await addFood(brusselSprouts[1], "#brusselSprouts");
//   await addFood(brusselSprouts[2], "#brusselSprouts");
//   await addFood(brusselSprouts[3], "#brusselSprouts");
//   await addFood(brusselSprouts[4], "#brusselSprouts");
//   await addFood(brusselSprouts[5], "#brusselSprouts");
//   await addFood(brusselSprouts[6], "#brusselSprouts");
//   await addFood(brusselSprouts[7], "#brusselSprouts");
// }
// makeFood(steps);

// 2nd way - but not ordering cause trigger Math.random
// function makeFood(steps, id) {
//   steps.forEach(async function (step) {
//     // declare async here so it'll work
//     await addFood(step, id);
//   });
// }
// makeFood(brusselSprouts, "#brusselSprouts");

// 3rd way
async function makeFood(steps, id) {
  for (let i = 0; i < steps.length; i++) {
    await addFood(steps[i], id);
  }
  let addImage = document.createElement("img");
  addImage.src = "./public/images/brusselSprouts.jpg";
  table.appendChild(addImage);
}

// Bonus 2
Promise.all([
  steakIt,
  potatoesIt,
  makeFood(brusselSprouts, "#brusselSprouts"),
]).then(() => {
  document.body.innerHTML += `<button>Dinner is served!</button>`;
  audio.play();
});
