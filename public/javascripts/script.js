// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                let image = new Image();
                image.src = './public/images/steak.jpg';
                document.getElementById('table').appendChild(image);
              })
            })
          })
        })
      })
    })

  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          let image = new Image();
          image.src= './public/images/mashPotatoes.jpg'
          document.getElementById('table').appendChild(image);
        })
      })
    })
  })
});

// Iteration 3 using async/await

  async function makeFood(step) {
    return await addFood(step, '#brusselSprouts')
  };
  makeFood(brusselSprouts[0])
  .then(() => makeFood(brusselSprouts[1]))
  .then(() => makeFood(brusselSprouts[2]))
  .then(() => makeFood(brusselSprouts[3]))
  .then(() => makeFood(brusselSprouts[4]))
  .then(() => makeFood(brusselSprouts[5]))
  .then(() => makeFood(brusselSprouts[6]))
  .then(() => makeFood(brusselSprouts[7]))
  .then(() => makeFood(brusselSprouts[8]))
  .then(() => {
    let image = new Image();
          image.src= './public/images/brusselSprouts.jpg'
          document.getElementById('table').appendChild(image);
  })

