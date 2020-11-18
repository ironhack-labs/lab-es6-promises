// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks. Print the directions to make Steak in the correct order. 
let steakDone = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {

    addFood(steak[2], '#steak', () => {

      addFood(steak[3], '#steak', () => {

        addFood(steak[4], '#steak', () => {

          addFood(steak[5], '#steak', () => {

            addFood(steak[6], '#steak', () => {

              addFood(steak[7], '#steak', () => {

                console.log(steak)

              })
            })

          })

        })

      })

    })

  })
});

// Iteration 2 using `.then()`
let potatoesDone = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {

    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {

      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {

        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {

          console.log(mashPotatoes)

        })

      })

    })

  })

});

// Iteration 3 using async and await
  async function makeFood(steps, id) {
    for (let i=0; i<steps.length - 1;i++){
      await addFood(steps[i], id)
    }
  }
  makeFood(brusselSprouts, '#brusselSprouts')



  // let brusselDone = async (steps, id) => {
  //   for (let i=0; i<steps.length - 1; i++){
  //     await addFood(steps[i], id)
  //   }
  //   return brusselSprouts, '#brusselSprouts'
  // }
  // brusselDone(brusselSprouts, '#brusselSprouts')
  
//Bonus 2
// let promiseAll = Promise.all([steakDone, potatoesDone, brusselDone]).then(() => {
//   alert('Dinner is served')
//   console.log("dinner is served")
// })
