// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

const addImage = img => document.querySelector('#table').innerHTML += `<img src="/public/images/${img}.jpg" alt="mashed taters">`


// Iteration 1 using callbacks
let firstSet = addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                addImage('steak')
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
let secondSet = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
          addImage('mashPotatoes');
        })
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(steps) {
  for (let step of steps){
    await addFood(step, '#brusselSprouts')
  }
  addImage('brusselSprouts')
}
let thirdSet = makeFood(brusselSprouts);


// Bonus 2
let allPromises = Promise.all([firstSet, secondSet, thirdSet]).then(()=>{
  document.querySelector('#dinner-alert').innerHTML =  `<button onclick="new Audio('public/media/dinnerIsServed.mp3').play()">
  Dinner is served
  </button>`
})

// Refactored
// async function makeFood(steps, id){
//   for (let step of steps){
//     await addFood(step, id)
//   }
//   addImage(id.slice(1))
// }

// Promise.all([
// makeFood(steak, '#steak'),
// makeFood(brusselSprouts, '#brusselSprouts'),
// makeFood(mashPotatoes, '#mashPotatoes')
// ]).then (()=> {
//   document.querySelector('#dinner-alert').innerHTML = `<button>Dinner is served</button>`
// })