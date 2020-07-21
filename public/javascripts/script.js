// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], '#steak');
// }

// Iteration 1 using callbacks
for (let i = 0; i < steak.length; i++){
  addFood(steak[i], '#steak', () => {
    setTimeout(() => {}, 2000);
  });
}

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
});

// Iteration 3 using async and await

brusselSprouts.forEach(eachStep => {
  async function makeFood(step) {
    // ... your code here
  }
  makeFood(eachStep);
});
