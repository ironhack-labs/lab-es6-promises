// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/* for (let i = 0; i < steak.length; i++) {
  addFood(steak[i], '#steak');
} */

const img = document.getElementById("table");

// Iteration 1 using callbacks
function addSteak() {
  addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  img.innerHTML += `<img src="./public/images/steak.jpg">`;
                });
              });
            });
          });
        });
      });
    });
  });
}

// Iteration 2 using `.then()`
function addPotatoes() {
  addFood(mashPotatoes[0], "#mashPotatoes")
    .then(() => addFood(mashPotatoes[1], "#mashPotatoes"))
    .then(() => addFood(mashPotatoes[2], "#mashPotatoes"))
    .then(() => addFood(mashPotatoes[3], "#mashPotatoes"))
    .then(() => addFood(mashPotatoes[4], "#mashPotatoes"))
    .then(
      () => (img.innerHTML += `<img src="./public/images/mashPotatoes.jpg">`)
    );
}

// Iteration 3 using async and await

/* brusselSprouts.forEach(eachStep => {
  async function makeFood(step) {
    // ... your code here
  }
  makeFood(eachStep);
}); */

const makeFood = async () => {
  try {
    for (let i = 0; i < brusselSprouts.length; i++) {
      const step = brusselSprouts[i];
      await addFood(step, "#brusselSprouts");
    }
    img.innerHTML += `<img src="./public/images/brusselSprouts.jpg">`;
  } catch (error) {
    console.log(error);
  }
};

Promise.all([addSteak(), addPotatoes(), makeFood()]).then(() => {
  document.getElementById(
    "steps"
  ).innerHTML += `<button>Dinner is served!</button>`;
});
