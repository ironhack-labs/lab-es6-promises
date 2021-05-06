// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code

for (let i = 0; i < mashPotatoes.length; i++) {
  // addFood(steak[i], '#steak');
  console.log(mashPotatoes[i]);
}

// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                document.getElementById(
                  "table"
                ).innerHTML += `<img src="public/images/steak.jpg"/>`;
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`

addFood(mashPotatoes[0], "#mashPotatoes").then((res) => {
  addFood(mashPotatoes[1], "#mashPotatoes").then((res) => {
    addFood(mashPotatoes[2], "#mashPotatoes").then((res) => {
      addFood(mashPotatoes[3], "#mashPotatoes").then((res) => {
        addFood(mashPotatoes[4], "#mashPotatoes").then((res) => {
          document.querySelector(
            "#table"
          ).innerHTML += `<img src="public/images/mashPotatoes.jpg"/>`;
        });
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(steps, id) {
  for (let step of steps) {
    await addFood(step, `#${id}`);
  }
  // makeFood(eachStep);
  document.getElementById(
    "table"
  ).innerHTML += `<img src="public/images/${id}.jpg"/>`;
}
makeFood(brusselSprouts, "brusselSprouts");
Promise.all([
  makeFood(steak, "steak"),
  makeFood(mashPotatoes, "mashPotatoes"),
  makeFood(brusselSprouts, "brusselSprouts"),
]).then(() => {
  document.body.innerHTML += `<button>Dinner is served</button>`;
});
