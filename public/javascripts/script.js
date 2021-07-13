// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// function comeGetIt() {
//   if (makeFood = true) {
//     alert ("Dinner is Served!")
//     }
// };

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {

    addFood(steak[2], '#steak', () =>{
      addFood(steak[3], '#steak', () =>{
        addFood(steak[4], '#steak', () =>{
          addFood(steak[5], '#steak', () =>{
            addFood(steak[6], '#steak', () =>{
              addFood(steak[7], '#steak', () =>{
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() =>{
  // ... your code here
addFood(mashPotatoes[1], '#mashPotatoes').then(() =>{
addFood(mashPotatoes[2], '#mashPotatoes').then(() =>{
addFood(mashPotatoes[3], '#mashPotatoes').then(() =>{
addFood(mashPotatoes[4], '#mashPotatoes').then(() =>{
})
})
})
})
});

// Iteration 3 using async/await

  async function makeFood(step) {
    // ... your code here
    // for (let i = 0; i < step.length; i++) {
    //   await addFood(step[i], '#brusselSprouts');
    // }
    await addFood(step[0], '#brusselSprouts')
    await addFood(step[1], '#brusselSprouts')
    await addFood(step[2], '#brusselSprouts')
    await addFood(step[3], '#brusselSprouts')
    await addFood(step[4], '#brusselSprouts')
    await addFood(step[5], '#brusselSprouts')
    await addFood(step[6], '#brusselSprouts')
    await addFood(step[7], '#brusselSprouts')
  };

   makeFood(brusselSprouts).then(()=> {
    alert ("Dinner is Served!");
    document.getElementById('dinnerBell').play();
   });
  //  comeGetIt();
  // alert ("Dinner is Served!")
   
  
