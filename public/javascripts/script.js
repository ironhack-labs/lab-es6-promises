// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//     addFood(steak[1], '#steak', () => {
//       addFood(steak[2], '#steak', () => {
//         addFood(steak[3], '#steak', () => {
//           addFood(steak[4], '#steak', () => {
//             addFood(steak[5], '#steak', () => {
//               addFood(steak[6], '#steak', () => {
//                 addFood(steak[7], '#steak', () => {
//                   const steakImg = document.createElement('img');
//                   steakImg.src = './public/images/steak.jpg';
//                   document.querySelector('#table').appendChild(steakImg);
//                 });
//               });
//             });
//           });
//         });
//       });
//   });
// });



// // Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//     addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//       addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//         addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
//           const mashedPotatoesImg = document.createElement('img');
//           mashedPotatoesImg.src = './public/images/mashPotatoes.jpg';
//           document.querySelector('#table').appendChild(mashedPotatoesImg);
//         });
//       });
//     });
//   });
// });

// Iteration 3 using async and await
 
  async function makeFood(steps, id) {
    for(let step of steps) {
      await addFood(step, `#${id}`);
    }  
    document.querySelector('#table').innerHTML += `<img src="public/images/${id}.jpg"/>`;
  }
  // makeFood(brusselSprouts, 'brusselSprouts');

  Promise.all([
    makeFood(steak, 'steak'),
    makeFood(mashPotatoes, 'mashPotatoes'),
    makeFood(brusselSprouts, 'brusselSprouts'),
  ]).then(() => {
    const button = document.createElement('button');
    button.innerText = "Food's Up!";
    document.body.appendChild(button);
  });
    