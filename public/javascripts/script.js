
const areaImage = document.querySelector("#table")
// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak')
              areaImage.innerHTML += `<img src=“./public/images/steak.jpg" />`                      
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(()=>{
  addFood(mashPotatoes[1], '#mashPotatoes')
}).then(()=>{
  addFood(mashPotatoes[2], '#mashPotatoes')
}).then(()=>{
  addFood(mashPotatoes[3], '#mashPotatoes')
}).then(()=>{
  addFood(mashPotatoes[4], '#mashPotatoes')
}).then(()=>{
  return areaImage.innerHTML += `<img src=“./public/images/mashPotatoes.jpg” />`
})

// Iteration 3 using async and await

 async function makeFood(step) {
    for(i = 0; i < step.length; i++) {
      await addFood(step[i], '#brusselSprouts')
    }
    return areaImage.innerHTML += `<img src=“./public/images/brusselSprouts.jpg” />`
  }

  makeFood(brusselSprouts);

  //BONUS

/* Promise.all([
  makeFood(steak),
  makeFood(mashPotatoes),
  makeFood(brusselSprouts)
]).then(() => {
    alert('Dinner is served!')
})
*/



