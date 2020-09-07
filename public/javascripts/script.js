// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i]);
// }

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak');
              document.querySelector(
                '#table'
              ).innerHTML += `<img src="public/images/steak.jpg"/>`;
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes');
        document.querySelector(
          '#table'
        ).innerHTML += `<img src="public/images/mashPotatoes.jpg"/>`;
      });
    });
  });
});

// Iteration 3 using async and await

brusselSprouts.forEach((eachStep) => {
  async function makeFood(step) {
    await addFood(step, '#brusselSprouts');
    if (brusselSprouts.indexOf(step) === brusselSprouts.length - 1) {
      document.querySelector(
        '#table'
      ).innerHTML += `<img src="public/images/brusselSprouts.jpg"/>`;
    }
  }
  makeFood(eachStep);
});
