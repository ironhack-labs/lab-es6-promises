// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
let i = 0;
const steakSteps = setInterval(() => {
  addFood(steak[i], '#steak', () => {
    if (i >= steak.length - 1) {
      clearInterval(steakSteps);
    }
    console.log(steak[i]);
    i++;

  })
}, 1000);




// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes')
});

// Iteration 3 using async and await

async function makeFood(step) {
  // ... your code here

}
makeFood(eachStep);