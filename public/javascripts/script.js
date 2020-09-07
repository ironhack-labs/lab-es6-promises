// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i]);
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

// // Iteration 2 using `.then()`
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
const imgTable = document.getElementById("table");
const steakImg = document.createElement("img");
steakImg.src = "/public/images/steak.jpg";
const potatoImg = document.createElement("img");
potatoImg.src = "/public/images/mashPotatoes.jpg";
const sproutImg = document.createElement("img");
sproutImg.src = "/public/images/brusselSprouts.jpg";

async function makeFood(steps, id, img) {
  for (const [i, v] of steps.entries()) {
    await addFood(steps[i], id);
  }
  imgTable.appendChild(img);
}

Promise.all([
  makeFood(steak, "#steak", steakImg),
  makeFood(mashPotatoes, "#mashPotatoes", potatoImg),
  makeFood(brusselSprouts, "#brusselSprouts", sproutImg),
]).then(() => alert("Dinner is served!"));
