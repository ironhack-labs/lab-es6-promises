// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}*/
const areaImg = document.getElementById("table")
// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  ///
  
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                areaImg.innerHTML += "<img src=\'./public/images/steak.jpg\'>"
                
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
  addFood(mashPotatoes[1], '#mashPotatoes')
 // areaImg.innerHTML = "<img src=\"./public/images/mashPotatoes.jpg\">"
}).then(() => {

  addFood(mashPotatoes[2], '#mashPotatoes')
  //areaImg.innerHTML = "<img src=\"./public/images/mashPotatoes.jpg\">"
}).then(() => {

  addFood(mashPotatoes[3], '#mashPotatoes')
 // areaImg.innerHTML = "<img src=\"./public/images/mashPotatoes.jpg\">"
}).then(() => {

  addFood(mashPotatoes[4], '#mashPotatoes')
  areaImg.innerHTML = "<img src=\"./public/images/mashPotatoes.jpg\">"
})


// Iteration 3 using async and await
const eachStep = brusselSprouts

  async function makeFood(eachStep) {

   await addFood(eachStep[0], '#brusselSprouts')
   await addFood(eachStep[1], '#brusselSprouts')
   await addFood(eachStep[2], '#brusselSprouts')
   await addFood(eachStep[3], '#brusselSprouts')
   await addFood(eachStep[4], '#brusselSprouts')
   await addFood(eachStep[5], '#brusselSprouts')
   await addFood(eachStep[6], '#brusselSprouts') 
   await addFood(eachStep[7], '#brusselSprouts') 
   await addFood(eachStep[8], '#brusselSprouts')  
   areaImg.innerHTML += "<img src=\"./public/images/brusselSprouts.jpg\">"

  }
  makeFood(eachStep);
  const audio = new Audio(src = "./public/media/dinnerIsServed.mp3")
audio.play()
  
