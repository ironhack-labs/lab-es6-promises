// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code

for (let i = 0; i < mashPotatoes.length; i++) {
  // addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

// Iteration 1 using callbacks
const steakFood = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                const table = document.getElementById('table')
                const img = document.createElement('img');
                img.src = '../public/images/steak.jpg'
                table.appendChild(img)
              })
            })
          })  
        })
      })
    })
  })
});

// Iteration 2 using `.then()`
const mashPotatoesFood = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          const table = document.getElementById('table')
          const img = document.createElement('img');
          img.src = '../public/images/mashPotatoes.jpg'
          table.appendChild(img)
        })
      })
    })
  })
});

// Iteration 3 using async and await

  async function makeFood(steps, id) {
    for(let i = 0; i < steps.length; i++) {
      await addFood(steps[i], id)
    }
    const table = document.getElementById('table')
    const img = document.createElement('img');
    img.src = '../public/images/brusselSprouts.jpg'
    table.appendChild(img)
  }

  const brousselFood = makeFood(brusselSprouts, '#brusselSprouts');

  Promise.all([
    steakFood,
    mashPotatoesFood,
    brousselFood
  ])
  .then(() => {
    alert('Dinner is served!')
  })
