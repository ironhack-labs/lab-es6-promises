// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// // 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
  // addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }
const sectionImg = document.querySelector('#table')
const imgSteak = document.createElement('img')
imgSteak.src = './public/images/steak.jpg'
const imgPotato = document.createElement('img')
imgPotato.src = './public/images/mashPotatoes.jpg'
const imgSprouts = document.createElement('img')
imgSprouts.src = './public/images/brusselSprouts.jpg'
// Iteration 1 using callbacks

// addFood(steak[0], '#steak', () => {
//   addFood(steak[1], '#steak', () => {
//     addFood(steak[2], '#steak', () => {
//       addFood(steak[3], '#steak', () => {
//         addFood(steak[4], '#steak', () => {
//           addFood(steak[5], '#steak', () => {
//             addFood(steak[6], '#steak', () => {
//               addFood(steak[7], '#steak', () => {
//                 addFood(mashPotatoes[4], '#mashPotatoes')
//                 const imgSteak = document.createElement('img')
//                 imgSteak.src = './public/images/steak.jpg'
//                 sectionImg.appendChild(imgSteak)
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
//         addFood(mashPotatoes[4], '#mashPotatoes')
//         const imgPotato = document.createElement('img')
//         imgPotato.src = './public/images/mashPotatoes.jpg'
//         sectionImg.appendChild(imgPotato)
//       });
//     });
//   });
// });

// Iteration 3 using async and await

async function makeFood(steps, id, image) {
     
  for(step of steps){
    await addFood(step, id)
  }
  sectionImg.appendChild(image)
}



Promise.all([ makeFood(steak, '#steak', imgSteak),  makeFood(mashPotatoes, '#mashPotatoes', imgPotato),  makeFood(brusselSprouts, '#brusselSprouts', imgSprouts)])
          .then(()=> setTimeout(() => {
            document.body.innerHTML += `<button>Dinner is served!</button>`
          }, 1000))