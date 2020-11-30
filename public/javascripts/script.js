// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

let table = document.querySelector("#table")
let steakImg = `<img src="./public/images/steak.jpg"/>`
let mashImg = `<img src="./public/images/mashPotatoes.jpg"/>`
let brussImg = `<img src="./public/images/brusselSprouts.jpg"/>`
let sound = document.querySelector("#sound")
 
// Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//   addFood(steak[1], '#steak', () => {
//     addFood(steak[2], '#steak', () => {
//       addFood(steak[3], '#steak', () => {
//         addFood(steak[4], '#steak', () => {
//           addFood(steak[5], '#steak', () => {
//             addFood(steak[6], '#steak', () => {
//               addFood(steak[7], '#steak', () => {
//                 table.innerHTML += steakImg

//               })
//             })
//           })
//         })
//       })
//     })
//   })
// });

//ITERATION 1 USING ASYNC
// makeFood(steak, '#steak', steakImg);

// Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[1], '#mashPotatoes').then (() => {
//     addFood(mashPotatoes[2], '#mashPotatoes').then (() => {
//       addFood(mashPotatoes[3], '#mashPotatoes').then (() => {
//         addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
//           table.innerHTML += mashImg
//         })
//       })
//     }) 
//   })
// });

//ITERATION 2 USING ASYNC
// makeFood(mashPotatoes, '#mashPotatoes', mashImg);

// Iteration 3 using async and await

  async function makeFood(step, id, img) {

  for(let i =0; i < step.length; i++) {
   await addFood(step[i], id)
  }
  table.innerHTML += img
  }

  // makeFood(brusselSprouts, '#brusselSprouts', brussImg);

Promise.all([makeFood(steak, '#steak', steakImg), makeFood(mashPotatoes, '#mashPotatoes', mashImg), makeFood(brusselSprouts, '#brusselSprouts', brussImg)]).then( () => {
  setTimeout(() => {
    alert("dinner is ready!!!")
    sound.play()
  }, 1000);

}) 
  

  
