// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

function imageTag(imageName, alt) {
  let img = document.createElement("img");
  img.src = "/public/images/" + imageName;
  img.alt = alt;
  return img;
}

const table = document.getElementById("table");
// Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//   // ... your code here
//   addFood(steak[1], '#steak', () => {
//     addFood(steak[2], '#steak', () => {
//       addFood(steak[3], '#steak', () => {
//         addFood(steak[4], '#steak', () => {
//           addFood(steak[5], '#steak', () => {
//             addFood(steak[6], '#steak', () => {
//               addFood(steak[7], '#steak', () => {
//                 table.appendChild(imageTag("steak.jpg", "steak"));
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
//   // ... your code here
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//     addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//       addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//         addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
//           table.appendChild(imageTag("mashPotatoes.jpg", "mash potatoes"));
//         })
//       })
//     })
//   })
// });

// Iteration 3 using async and await

  async function makeFood(step, id, imgName, imgAlt) {
    // ... your code here
    for (let food of step) {
      await addFood(food, id);
    }
    table.appendChild(imageTag(imgName, imgAlt));
  }

  Promise.all([
    makeFood(steak, "#steak", "steak.jpg", "steak"),
    makeFood(mashPotatoes, "#mashPotatoes", "mashPotatoes.jpg", "mashPotatoes"),
    makeFood(brusselSprouts, "#brusselSprouts", "brusselSprouts.jpg", "brusselSprouts"),
  ])
    .then(() => setTimeout(() => alert("Dinner is served!"), 200))



