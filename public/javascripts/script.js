// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], '#steak');
// }

// // Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//   addFood(steak[1], '#steak', () => {
//     addFood(steak[2], '#steak', () => {
//       addFood(steak[3], '#steak', () => {
//         addFood(steak[4], '#steak', () => {
//           addFood(steak[5], '#steak', () => {
//             addFood(steak[6], '#steak', () => {
//               addFood(steak[7], '#steak', () => {
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// // Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//     addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//       addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//         addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
//         });
//       });
//     });
//   });
// });

// Iteration 3 using async and await

// brusselSprouts.forEach(eachStep => {
//   async function makeFood(step) {
//     await addFood(step, '#brusselSprouts');
//   }
//   makeFood(eachStep);
// });

//changed to a "for of" loop for the async/await methods
const makeFood = async (food, id, image) =>{
  let img = document.createElement("img");
  img.src = `./public/images/${image}`;
  for (const eachStep of food) {
    await addFood(eachStep, id);
  }
  document.getElementById('table').appendChild(img)
}

//wrapped makeFood function call in a new promise to call promise.all later
const steakPromise = new Promise((resolve, reject) => {
  const task = async () => {
    await makeFood(steak, '#steak', 'steak.jpg');
    resolve();
  }
  task();   
});
const mashPromise = new Promise((resolve, reject) => {
  const task = async () => {
    await makeFood(mashPotatoes, '#mashPotatoes', 'mashPotatoes.jpg');
    resolve();
  }
  task();
});
const brusselPromise = new Promise((resolve, reject) => {
  const task = async () => {
    await makeFood(brusselSprouts, '#brusselSprouts', 'brusselSprouts.jpg');
    resolve();
  }
  task();
});

const dinnerBell = new Audio('./public/media/dinnerIsServed.mp3');

//when all promises are resolved the "dinner is served" button is added to the DOM"
Promise.all([steakPromise, mashPromise, brusselPromise]).then(() => {
  const btn = document.createElement('button');
  btn.innerHTML = "Dinner is served!";
  document.body.appendChild(btn);
  btn.addEventListener('click', () => dinnerBell.play());
})
