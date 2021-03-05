// Iteration 1 using callbacks

function steakCallback(index) {
  if (index < 8) {
    addFood(steak[index], "#steak", () => {
      steakCallback(index + 1);
    });
  }
}

addFood(steak[0], "#steak", () => {
  steakCallback(1);
});

// Iteration 2 using `.then()`

addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes");
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(step) {
  await addFood(brusselSprouts[step], "#brusselSprouts");
  if (step < brusselSprouts.length - 1) {
    makeFood(step + 1);
  }
}

makeFood(0);
