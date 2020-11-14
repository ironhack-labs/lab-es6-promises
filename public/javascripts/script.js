// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

////  WAYS TO ADD IMAGE TO THE DOM
const addImage = img => {
  ////  SHORTEST
  document.querySelector('#table').innerHTML += `<img src ="public/images/${img}.jpg"/>`;

}

const addImageChild = img => {
  ////  LONGEST
  let image = document.createElement('img');               //// CREATE ELEMENT <img> IN VARIABLE 'img'
  image.src = `public/images/${img}.jpg`;                  ////  ASSIGN 'src'
  document.querySelector('#table').appendChild(image);     ////  ADD 'img' ELEMENT IN '#table'

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


// Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//     addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//       addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//         addFood(mashPotatoes[4], '#mashPotatoes').then(() => {   

//           addImage('mashPotatoes');
        
//         })
//       })
//     })
//   })
// });

// // Iteration 3 using async and await

  // async function makeFood(recipe) {

  //   for(step in recipe) await addFood(recipe[step], '#brusselSprouts');

  //   addImage('brusselSprouts')

  // }

  // makeFood(brusselSprouts);


//// NEEDS ARRAY OF PROMISES
Promise.all([
  addFood(mashPotatoes, '#mashPotatoes'),
  addFood(steak,  '#steak'),
  addFood(brusselSprouts, '#brusselSprouts'),

]).then(() => {

  addImage('mashPotatoes');
  addImage('steak');
  addImage('brusselSprouts')

  document.body.innerHTML +=
  `<button onclick="new Audio('public/media/dinnerIsServed.mp3').play()"> Dinner is Served </button>`
});



