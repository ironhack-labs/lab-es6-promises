// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

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
                //console.log('list is done.')
                document.querySelector('#table').innerHTML += `<img src="public/images/steak.jpg"/>`
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
/* addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          console.log('potatoe list finished')
          document.querySelector('#table').innerHTML += `<img src="public/images/mashPotatoes.jpg"/>`
}); */

/* // Iteration 3 using async/await

  async function makeFood(step) {
    for (let step of steps) {
      await addFood(step, id)
    }
    // console.log('brussel sprouts done');
    document.querySelector('#table').innerHTML += `<img src="public/images/${id.slice(1)}.jpg"/>`
    
  }
  
  Promise.all([
    makeFood(steak, '#steak'),
    makeFood(brusselSprouts, '#brusselSprouts'),
    makeFood(mashPotatoes, '#mashPotatoes')
  ]).then(() => {
    // console.log('everything finished');
    document.querySelector('body').innerHTML += '<button>Dinner is serverd</button>'
  })
 */