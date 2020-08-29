// // This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//   addFood(steak[1], '#steak', () => {
//     addFood(steak[2], '#steak', () => {
//       addFood(steak[3], '#steak', () => {
//         addFood(steak[4], '#steak', () => {
//           addFood(steak[5], '#steak', () => {
//             addFood(steak[6], '#steak', () => {
//               addFood(steak[7], '#steak', () => {
//                 const image = new Image();
//                 image.src = './public/images/steak.jpg';
//                 image.onload = () => {
//                   document.querySelector('#table').appendChild(image);
//                 };
//               })
//             })
//           })
//         })
//       })
//     })
//   })
// });



// Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//     addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//       addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//         addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
//           const image = new Image();
//           image.src = './public/images/mashPotatoes.jpg';
//           image.onload = () => {
//             document.querySelector('#table').appendChild(image);
//           };
//         })
//       })
//     })
//   })
// });


  // const allSteps = steps.map(oneStep => {
  //   return addFood(oneStep, '#brusselSprouts');
  // });

  //BONUS 1
  //BRUSSELSPROUTS
  // Promise.all(allSteps)
  //   .then(response => {
  //     const brussel = new Image();
  //     brussel.src = './public/images/brusselSprouts.jpg';

  //     brussel.onload = () => {
  //       const table = document.querySelector("#table");
  //       table.appendChild(brussel);
  //     };
  //   });
// }
// makeFood(brusselSprouts);

//MASH POTATOES

// async function makeMashPotatoes(steps) {
//   const allSteps = steps.map(oneStep => {
//     return addFood(oneStep, '#mashPotatoes');
//   });

  // Promise.all(allSteps)
  //   .then(response => {
  //     const potatoes = new Image();
  //     brussel.src = './public/images/brusselSprouts.jpg';

  //     brussel.onload = () => {
  //       const table = document.querySelector("#table");
  //       table.appendChild(brussel);
  //     };
  //   });

// }
// makeMashPotatoes(mashPotatoes);

//BONUS 2

// Iteration 3 using async and await

async function makeFood(step, recipeId, imagePath) {
  for (let i=0; i<step.length; i++) {
    await addFood(step[i], recipeId);
  }
  const image = new Image();
  image.src = imagePath;
  image.onload = () => {
    document.querySelector('#table').appendChild(image);
  }
}

Promise.all([
  makeFood(mashPotatoes, '#mashPotatoes', './public/images/mashPotatoes.jpg'), 
  makeFood(steak, '#steak', './public/images/steak.jpg'), 
  makeFood(brusselSprouts, '#brusselSprouts', './public/images/brusselSprouts.jpg')
])
.then(() => {
  const button = document.createElement('button');
  button.innerText = 'Dinner is served!';
  document.body.appendChild(button);
});