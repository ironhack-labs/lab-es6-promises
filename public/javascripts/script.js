// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
let promise1 = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                elem = document.createElement("img");
                elem.setAttribute("src", "./public/images/steak.jpg");
                document.getElementById('table').appendChild(elem)
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
let promise2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(()=>{
    addFood(mashPotatoes[2], '#mashPotatoes').then(()=>{
      addFood(mashPotatoes[3], '#mashPotatoes').then(()=>{
        addFood(mashPotatoes[4], '#mashPotatoes').then(()=>{
          elem = document.createElement("img");
          elem.setAttribute("src", "./public/images/mashPotatoes.jpg");
          document.getElementById('table').appendChild(elem)
        })
      })
    })
  })
});

// Iteration 3 using async and await

async function makeFood(step) {
  for(x=0; x<step.length; x++){
    await addFood(step[x], '#brusselSprouts')
  }
  elem = document.createElement("img");
  elem.setAttribute("src", "./public/images/brusselSprouts.jpg");
  document.getElementById('table').appendChild(elem)

}


 let promise3 = makeFood(brusselSprouts);
  
  Promise.all([promise1, promise2, promise3]).then(() => {
    setTimeout(()=>{
      alert("dinner is served!")
    },800)
    
  });