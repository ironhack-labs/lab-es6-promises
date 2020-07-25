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
  console.log(mashPotatoes[0]);
  return addFood(mashPotatoes[1], '#mashPotatoes');
}).then(() => {
  console.log(mashPotatoes[1]);
  return addFood(mashPotatoes[2], '#mashPotatoes');
}).then(() => {
  console.log(mashPotatoes[2]);
  return addFood(mashPotatoes[3], '#mashPotatoes');
}).then(() => {
  console.log(mashPotatoes[3]);
  return addFood(mashPotatoes[4], '#mashPotatoes');
}).then(() => {
  console.log(mashPotatoes[4]);
}).catch((error) => {
  console.log(error);
});

// Iteration 3 using async and await

async function makeFood(step) {
  // ... your code here

}
makeFood(eachStep);