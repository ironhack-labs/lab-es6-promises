let audio = new Audio("../public/media/dinnerIsServed.mp3");

// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
// addFood(steak[0], "#steak", () => {
//   addFood(steak[1], "#steak", () => {
//     addFood(steak[2], "#steak", () => {
//       addFood(steak[3], "#steak", () => {
//         addFood(steak[4], "#steak", () => {
//           addFood(steak[5], "#steak", () => {
//             addFood(steak[6], "#steak", () => {
//               addFood(steak[7], "#steak", () => {});
//             });
//           });
//         });
//       });
//     });
//   });
// });

// Iteration 2 using `.then()`
// addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
//   addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
//     addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
//       addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
//         addFood(mashPotatoes[4], "#mashPotatoes").then(() => {});
//       });
//     });
//   });
// });

// Iteration 3 using async and await
async function makeFood(step, id, img) {
  for (let i = 0; i < step.length; i++) {
    try {
      await addFood(step[i], id);
    } catch {}
  }
  document.getElementById(
    "table"
  ).innerHTML += `<img src="../public/images/${img}">`;
}
const p1 = makeFood(steak, "#steak", "steak.jpg");
const p2 = makeFood(mashPotatoes, "#mashPotatoes", "mashPotatoes.jpg");
const p3 = makeFood(brusselSprouts, "#brusselSprouts", "brusselSprouts.jpg");

Promise.all([p1, p2, p3]).then(() => {
  document.querySelector(
    "body"
  ).innerHTML += `<button>Dinner is served!</button>`;
  audio.play();
});
