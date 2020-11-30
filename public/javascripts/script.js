// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }
const table = document.getElementById('table')
// Iteration 1 using callbacks
const steakP = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                table.innerHTML += `<img src="./public/images/steak.jpg" alt="steak">`
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
const potatoesP = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          table.innerHTML += `<img src="./public/images/mashPotatoes.jpg" alt="steak">`
        })
      })
    })
  })
});

// Iteration 3 using async and await

async function makeFood(steps) {

  for (let i = 0; i < steps; i++) {
    await addFood(brusselSprouts[i], '#brusselSprouts')
  }
  table.innerHTML += `<img src="./public/images/brusselSprouts.jpg" alt="steak">`
}
// makeFood(9);



//BONUS 2
Promise.all([steakP, potatoesP, makeFood(9)]).then(() => {

    const button = document.createElement("button");
    button.textContent = "Dinner is served.";
    document.getElementById("steps").appendChild(button);

})