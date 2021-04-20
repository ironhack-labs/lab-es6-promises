// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the

for (let i = 0; i < brusselSprouts.length; i++) {
  //addFood(steak[i], '#steak');
  // console.log(brusselSprouts[i]);
}

for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  // console.log(mashPotatoes[i]);
}

// Iteration 1 using callbacks

setTimeout(() => {
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
}, 1000);

// Iteration 2 using `.then()`

setTimeout(() => {
  addFood(mashPotatoes[0], "#mashPotatoes")
    .then(() => {
      addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
          addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
            addFood(mashPotatoes[4], "#mashPotatoes");
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}, 1000);
// Iteration 3 using async and await

async function makeFood(step) {
  for (let i = 0; i < step; i++) {
    await addFood(brusselSprouts[i], "#brusselSprouts");
  }
}
makeFood(9);
