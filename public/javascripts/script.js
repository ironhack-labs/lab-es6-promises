const tableElement = document.getElementsByTagName('section')[0];3

const addImage = (foodName) => {
  tableElement.innerHTML += `<img src="./public/images/${foodName}.jpg">`;
}

// Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//   addFood(steak[1], '#steak', () => {
//     addFood(steak[2], '#steak', () => {
//       addFood(steak[3], '#steak', () => {
//         addFood(steak[4], '#steak', () => {
//           addFood(steak[5], '#steak', () => {
//             addFood(steak[6], '#steak', () => {
//               addFood(steak[7], '#steak', () => {
//                 addImage('steak');
//               })
//             })
//           })
//         })
//       })
//     })
//   })
// });

// // Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//     addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//       addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//         addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
//           addImage('mashPotatoes');
//         });
//       });
//     });
//   });
// });

// Iteration 3 using async and await

async function makeFood(steps, id) {
  for (let step of steps) await addFood(step, id);
}

// Bonus 2:
async function promiseAll() {
  await Promise.all([
    makeFood(steak, '#steak'),
    makeFood(mashPotatoes, '#mashPotatoes'),
    makeFood(brusselSprouts, '#brusselSprouts')
  ]).then(() => {
    addImage('steak');
    addImage('mashPotatoes');
    addImage('brusselSprouts');
  }).then(() => {
    const audio = new Audio('/public/media/dinnerIsServed.mp3');
    audio.volume = 0.2;
    audio.play();
    alert('🍽 time!')
  });
}

promiseAll();
