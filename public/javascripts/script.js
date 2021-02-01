// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
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
              addFood(steak[7], '#steak', () => {
                 let steakImg = document.createElement('img');
                 steakImg.setAttribute('src', 'public/images/steak.jpg')
                 steakImg.setAttribute('alt', 'happy steak')
                 document.getElementById('table').appendChild(steakImg)
                  
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
  addFood(mashPotatoes[1], '#mashPotatoes');
  addFood(mashPotatoes[2], '#mashPotatoes');
  addFood(mashPotatoes[3], '#mashPotatoes');
  addFood(mashPotatoes[4], '#mashPotatoes');
  addFood(mashPotatoes[5], '#mashPotatoes');
  let potatoImg = document.createElement('img');
  potatoImg.setAttribute('src', 'public/images/mashPotatoes.jpg')
  potatoImg.setAttribute('alt', 'happy potato')
  document.getElementById('table').appendChild(potatoImg)
});

// Iteration 3 using async and await

let eachStep = [...brusselSprouts]
console.log(eachStep)

  async function makeFood(steps) {
    // ... your code here
      for (let step of steps) {
        await addFood(step, '#brusselSprouts')
      }
  let sproutsImg = document.createElement('img');
  sproutsImg.setAttribute('src', 'public/images/brusselSprouts.jpg')
  sproutsImg.setAttribute('alt', 'brussels sprout')
  document.getElementById('table').appendChild(sproutsImg)
  }
  makeFood(eachStep);



