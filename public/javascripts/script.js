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
const makeFood = async (food, id) =>{
  for (const eachStep of food) {
    await addFood(eachStep, id);
  }
}
makeFood(steak, '#steak');
makeFood(mashPotatoes, '#mashPotatoes');
makeFood(brusselSprouts, '#brusselSprouts');


