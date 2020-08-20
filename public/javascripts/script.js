// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
 // console.log(mashPotatoes[i])
//}

// Iteration 1 using callbacks
function addSteak() {
  addFood(steak[0], '#steak', () => {
    addFood(steak[1], '#steak', () => {
      addFood(steak[2], '#steak', () =>{ 
        addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7],'#steak', () => {
                  table.innerHTML +=`<img src="./public/images/steak.jpg">`
                })
              })
            })
          })
        })
      })
    })
  });
}
//addSteak()


// Iteration 2 using `.then()`
function addMashPotatoes() {
  addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[2], '#mashPotatoes').then(() =>{
        addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
          addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
            table.innerHTML += `<img src="/public/images/mashPotatoes.jpg">`
          })
        })
      })
    })
  });
}
//addMashPotatoes()

// Iteration 3 using async and await

  async function makeFood() {
    for (let i=0; i< brusselSprouts.length; i++) {
        const step = brusselSprouts[i]
         try {
          await addFood(step, '#brusselSprouts')
        }  catch(error) {
        console.log(error)
      }
    }
    table.innerHTML += `<img src="./public/images/brusselSprouts.jpg">`
  }
  //makeFood();

  // Bonus 2 using promise.all

Promise.all([addSteak(), addMashPotatoes(), makeFood()])
  .then( () => {
      document.getElementById("steps").innerHTML += `<button>Dinner is served.</button>`
  })
  .catch(error => {
    console.log(error)
  })