// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  // addFood(mashPotatoes[i], '#mashPotatoes');
}
for (let i = 0; i < brusselSprouts.length; i++) {
  // addFood(brusselSprouts[i], '#brusselSprouts');
}

for (let i = 0; i < steak.length; i++) {
  //addFood(steak[i], '#steak');
}

// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {});
            });
          });
        });
      });
    });
  });
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

async function makeFood(steps, id) {
  const food = await addFood(steps[0], id);
  await addFood(steps[1], id);
  await addFood(steps[2], id);
  await addFood(steps[3], id);
  await addFood(steps[4], id);
  await addFood(steps[5], id);
  await addFood(steps[6], id);
  await addFood(steps[7], id);
  await addFood(steps[8], id);
}
makeFood(brusselSprouts, "#brusselSprouts");
