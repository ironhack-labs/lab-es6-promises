// // Iteration 1 using callbacks
// addFood(steak[0], "#steak", () => {
//   addFood(steak[1], "#steak", () => {
//     addFood(steak[2], "#steak", () => {
//       addFood(steak[3], "#steak", () => {
//         addFood(steak[4], "#steak", () => {
//           addFood(steak[5], "#steak", () => {
//             addFood(steak[6], "#steak", () => {
//               addFood(steak[7], "#steak", () => {
//                 document.querySelector(
//                   "#table"
//                 ).innerHTML += `<img src="public/images/steak.jpg" />`;
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// // Iteration 2 using `.then()`
// addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
//   addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
//     addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
//       addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
//         addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
//           document.querySelector(
//             "#table"
//           ).innerHTML += `<img src="public/images/mashPotatoes.jpg" />`;
//         });
//       });
//     });
//   });
// });

// Iteration 3 using async and await

async function makeFood(steps, id) {
  for (let step of steps) {
    await addFood(step, id);
  }

  document.querySelector(
    "#table"
  ).innerHTML += `<img src="public/images/${id.replace("#", "")}.jpg" />`;
}

// IIFE
(async function run() {
  await Promise.all([
    makeFood(steak, "#steak"),
    makeFood(mashPotatoes, "#mashPotatoes"),
    makeFood(brusselSprouts, "#brusselSprouts"),
  ]);

  const audio = new Audio("public/media/dinnerIsServed.mp3");
  audio.volume = 0.5;
  audio.play();
  alert("Dinner is served!");
})();
