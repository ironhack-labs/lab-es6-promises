// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
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
                const image = new Image();
                image.src = '../../public/images/steak.jpg'
                image.onload = (e) => {document.querySelector('#table').appendChild(image)}
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
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes')
        const image = new Image();
        image.src = '../../public/images/mashPotatoes.jpg'
        image.onload = (e) => {document.querySelector('#table').appendChild(image)}
      });
    });
  });
});

// Iteration 3 using async/await

async function makeFood(steps, id) {
  await addFood(steps[0], '#brusselSprouts')
  await addFood(steps[1], '#brusselSprouts')
  await addFood(steps[2], '#brusselSprouts')
  await addFood(steps[3], '#brusselSprouts')
  await addFood(steps[4], '#brusselSprouts')
  await addFood(steps[5], '#brusselSprouts')
  await addFood(steps[6], '#brusselSprouts')
  await addFood(steps[7], '#brusselSprouts')
  await addFood(steps[8], '#brusselSprouts')
  
  const image = new Image();
  image.src = '../../public/images/brusselSprouts.jpg'
  image.onload = (e) => {document.querySelector('#table').appendChild(image)}
};
makeFood(brusselSprouts);


// Bonus 2
Promise.all([steak,mashPotatoes, makeFood]).then(() => {
  let button = document.createElement('button');
  button.innerText = 'dinner is served' 
});