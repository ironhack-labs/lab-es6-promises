// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }
const appendPic = (id) => {
  if(id === '#brusselSprouts') document.getElementById('table').innerHTML +='<img src="./public/images/brusselSprouts.jpg" alt=""></img>';
  else if(id === '#steak') document.getElementById('table').innerHTML += '<img src="./public/images/steak.jpg" alt="">';
  else document.getElementById('table').innerHTML += '<img src="./public/images/mashPotatoes.jpg" alt="">';
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
//                 appendPic(2);
//               })
//             })
//           })
//         })
//       })
//     })
//   });
// });



// // Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//     addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//       addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//         addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
//           appendPic();
//         })
//       });
//     });
//   });
// });

// Iteration 3 using async and await
const makeFood = async (step, id) => {
  for(let i=0; i<step.length; i++) await addFood(step[i], id);
  appendPic(id)
};

let makeMash = makeFood(mashPotatoes, '#mashPotatoes');
let makeBrussel = makeFood(brusselSprouts, '#brusselSprouts');
let makeSteak = makeFood(steak, '#steak');


Promise.all([makeMash, makeBrussel, makeSteak])
.then(() => document.body.innerHTML += '<button>Dinner is served!</button>');