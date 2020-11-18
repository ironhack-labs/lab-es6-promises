// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
//  addFood(mashPotatoes[i], '#mashPotatoes');
//}

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
                document.querySelector("#table").innerHTML += '<img alt="steak" src="./public/images/steak.jpg" width="100%" />';
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
  addFood(mashPotatoes[1], '#mashPotatoes').then(()=>{
    addFood(mashPotatoes[2], '#mashPotatoes').then(()=>{
      addFood(mashPotatoes[3], '#mashPotatoes').then(()=>{
        addFood(mashPotatoes[4], '#mashPotatoes').then(()=>{
          document.querySelector("#table").innerHTML += '<img alt="mashPotatoe" src="./public/images/mashPotatoes.jpg" width="100%" />'
        })
      })
    })
  })
});

// Iteration 3 using async and await


async function makeFood(steps) {
  // your code here…
  for (let i = 0; i<steps.length; i++){
    await addFood(steps[i], '#brusselSprouts');
  }
  document.querySelector("#table").innerHTML += '<img alt="brussel" src="./public/images/brusselSprouts.jpg" width="100%" >'
}
makeFood(brusselSprouts);

//var p1 = addFood(mashPotatoes[4],steak[7],brusselSprouts[8])
//var p2 = steak[7];
//var p3 = brusselSprouts[8];
//
//Promise.all([mashPotatoes,steak,brusselSprouts]).then(()=>{
//  alert("Dinner is served.");
//})
