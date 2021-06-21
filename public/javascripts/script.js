// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

// Iteration 1 using callbacks
/*
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {

  })
});

*/

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[2], '#mashPotatoes').then (() => {
  addFood(mashPotatoes[3], '#mashPotatoes').then (() => {
  addFood(mashPotatoes[4], '#mashPotatoes').then (() => {
  document.querySelector('#table').innerHTML += '<img src="public/images/mashPotatoes.jpg" alt=""/>'
  })
  })
  })
  })
});

addFood(steak[0], '#steak').then(() => {
  // ... your code here
  addFood(steak[1], '#steak').then(() => {
  addFood(steak[2], '#steak').then (() => {
  addFood(steak[3], '#steak').then (() => {
  addFood(steak[4], '#steak').then (() => {
  addFood(steak[5], '#steak').then (() => {
  addFood(steak[6], '#steak').then (() => {
  addFood(steak[7], '#steak').then (() => {
  document.querySelector('#table').innerHTML += '<img src="public/images/steak.jpg" alt=""/>'
  })
  })
  })
  })
  })
  })
  })
  });

addFood(brusselSprouts[0], '#brusselSprouts').then(() => {
  // ... your code here
  addFood(brusselSprouts[1], '#brusselSprouts').then(() => {
  addFood(brusselSprouts[2], '#brusselSprouts').then (() => {
  addFood(brusselSprouts[3], '#brusselSprouts').then (() => {
  addFood(brusselSprouts[4], '#brusselSprouts').then (() => {
  addFood(brusselSprouts[5], '#brusselSprouts').then(() => {
  addFood(brusselSprouts[6], '#brusselSprouts').then (() => {
  addFood(brusselSprouts[7], '#brusselSprouts').then (() => {
  addFood(brusselSprouts[8], '#brusselSprouts').then (() => {
  document.querySelector('#table').innerHTML += '<img src="public/images/brusselSprouts.jpg" alt=""/>'
  })
  })
  })
  })
  })
  })
  })
  })
  });

// Iteration 3 using async/await
/*
  async function makeFood(step) {
    // ... your code here
    
  }
  makeFood(eachStep);
*/