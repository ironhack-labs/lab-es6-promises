// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// // Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//   // ... your code here
//   addFood(steak[1], '#steak', () => {
//     addFood(steak[2], '#steak', () => {
//       addFood(steak[3], '#steak', () => {
//         addFood(steak[4], '#steak', () => {
//           addFood(steak[5], '#steak', () => {
//             addFood(steak[6], '#steak', () => {
//               addFood(steak[7], '#steak', () => {

//                 const image = new Image();
//                 image.src = './public/images/steak.jpg';
//                 image.onload = ()=>{
//                   document.querySelector('.images-top').appendChild(image);
//                 }

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
//   // ... your code here
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//     // ... your code here
//     addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//       // ... your code here
//       addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//         // ... your code here
//         addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
//           // ... your code here
//           const image = new Image();
//           image.src = './public/images/mashPotatoes.jpg';
//           image.onload = ()=>{
//             document.querySelector('.images-top').appendChild(image);
//           }

//         })
//       })
//     })
//   })
// });

// Iteration 3 using async/await

  async function makeFood(steps, recipeId, imagePath) {
    // ... your code here
    for( let i = 0 ; i<steps.length  ; i++){
      await addFood(steps[i], recipeId);
    }
    const image = new Image();
    image.src = imagePath;
    image.onload = ()=>{
      document.querySelector('.images-top').appendChild(image);
    }
  }
  
  Promise.all([
    makeFood(brusselSprouts, '#brusselSprouts','./public/images/brusselSprouts.jpg'),
    makeFood(brusselSprouts, '#steak','./public/images/steak.jpg'),
    makeFood(brusselSprouts, '#mashPotatoes','./public/images/mashPotatoes.jpg')
  ]).then( ()=>{
    const btn = document.createElement('button'); 
    btn.innerText = 'Dinner is served'
    document.querySelector('body').appendChild(btn);

  }
    
  );
