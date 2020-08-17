// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  // for (let i = 0; i < steak.length; i++) {
  //     addFood(steak[i], '#steak');
  //     steak.sort();
  // }
  addFood(steak[1], '#steak', () => {

    addFood(steak[2], '#steak', () => {
      
      addFood(steak[3], '#steak', () => {

        addFood(steak[4], '#steak', () => {

          addFood(steak[5], '#steak', () => {

            addFood(steak[6], '#steak', () => {

              addFood(steak[7], '#steak', () => {
                
                // BONUS 1
                const image = document.createElement('img');
                image.src = "public/images/steak.jpg";
                document.querySelector('#table').appendChild(image);

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
          // BONUS 1
          const image = document.createElement('img');
          image.src = "public/images/mashPotatoes.jpg";
          document.querySelector('#table').appendChild(image);

        })
      })
    })
  })
});

// Iteration 3 using async and await

  async function makeFood(step) {
    // ... your code here
    for (let i = 0; i < brusselSprouts.length; i++) {
       await addFood(brusselSprouts[i], '#brusselSprouts');
  }
    // BONUS 1
    const image = document.createElement('img');
    image.src = "public/images/brusselSprouts.jpg";
    document.querySelector('#table').appendChild(image);
}

makeFood(brusselSprouts);
  // makeFood(eachStep);

  //BONUS 2 -- I tried something 

  // const recipesArr = [...steak, ...brusselSprouts, ...mashPotatoes];

  // const addRecipes = recipesArr.map(recipe => addFood(recipe).catch((promiseErr) => console.log(promiseErr)));

  // Promise.all(addRecipes).then(results => console.log(results)).catch(err => console.error(err))

