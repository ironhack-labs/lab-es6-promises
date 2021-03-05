// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
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

//                 const steakImg = new Image();
//                 steakImg.src = './public/images/steak.jpg';
//                 steakImg.onload = () => {
//                   document.querySelector('#table').appendChild(steakImg);
//                 };
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });



// Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//     addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//       addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//         addFood(mashPotatoes[4], '#mashPotatoes').then(() => {

//           const steakImg = new Image();
//                 steakImg.src = './public/images/mashPotatoes.jpg';
//                 steakImg.onload = () => {
//                   document.querySelector('#table').appendChild(steakImg);
//                 };
//         });
//       });
//     });
//   });
// });

// Iteration 3 using async and await

/*
  async function makeFood(steps) {
    await addFood(steps[0], '#brusselSprouts');
    await addFood(steps[1], '#brusselSprouts');
    await addFood(steps[2], '#brusselSprouts');
    await addFood(steps[3], '#brusselSprouts');
    await addFood(steps[4], '#brusselSprouts');
    await addFood(steps[5], '#brusselSprouts');
    await addFood(steps[6], '#brusselSprouts');
    await addFood(steps[7], '#brusselSprouts');
    await addFood(steps[8], '#brusselSprouts');
    const steakImg = new Image();
    steakImg.src = './public/images/brusselSprouts.jpg';

    steakImg.onload = () => {
      document.querySelector('#table').appendChild(steakImg);
    };

    
  }
  makeFood(brusselSprouts);
*/

async function makeFood(steps, recipeId, imagePath) {
  for (let i = 0; i < steps.length; i ++) {
    await addFood( steps[i], recipeId)
  }

  const image = new Image();
  image.src = imagePath;

  image.onload = () => {
    document.querySelector('#table').appendChild(image);
    };
  }

Promise.all([
  makeFood(brusselSprouts, '#brusselSprouts', './public/images/brusselSprouts.jpg'),
  makeFood(steak, '#steak', './public/images/steak.jpg'),
  makeFood(mashPotatoes, '#mashPotatoes', './public/images/mashPotatoes.jpg'),
]).then(() => {
  const button = document.createElement('button');
  button.innerText = 'Dinner is served!';

  document.body.appendChild(button);
});


