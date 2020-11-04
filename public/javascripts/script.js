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
                let imgSteak = document.createElement('img');                 
                imgSteak.src = './public/images/steak.jpg';       
                document.getElementById('table').appendChild(imgSteak);
              });
            });
          });
        });
      });
    });
  });
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  return addFood(mashPotatoes[1], '#mashPotatoes')
  .then(() => {
    return addFood(mashPotatoes[2], '#mashPotatoes')
    .then(() => {
      return addFood(mashPotatoes[3], '#mashPotatoes')
      .then(() => {
        return addFood(mashPotatoes[4], '#mashPotatoes')
        .then(() => {
          let imgPotatoes = document.createElement('img');                 
          imgPotatoes.src = './public/images/mashPotatoes.jpg';       
          document.getElementById('table').appendChild(imgPotatoes);        
        })
      })
    })
  })
});

// Iteration 3 using async and await

  async function makeFood(step) {
    await addFood(brusselSprouts[0], '#brusselSprouts')
    await addFood(brusselSprouts[1], '#brusselSprouts')
    await addFood(brusselSprouts[2], '#brusselSprouts')
    await addFood(brusselSprouts[3], '#brusselSprouts')
    await addFood(brusselSprouts[4], '#brusselSprouts')
    await addFood(brusselSprouts[5], '#brusselSprouts')
    await addFood(brusselSprouts[6], '#brusselSprouts')
    await addFood(brusselSprouts[7], '#brusselSprouts')
    await addFood(brusselSprouts[8], '#brusselSprouts')
    let imgSprouts = document.createElement('img');                 
    imgSprouts.src = './public/images/brusselSprouts.jpg';       
    await document.getElementById('table').appendChild(imgSprouts);     
  }
  
  makeFood(brusselSprouts);

  let resolvedPromisesArray = [steak[7],brusselSprouts[4], mashPotatoes[8] ]

  Promise.all([steak[7], brusselSprouts[4], mashPotatoes[8]])
  .then(() => {
    alert('Dinner is served!')
  });
