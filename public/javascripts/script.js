// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  console.log(mashPotatoes[i]);
}

// Iteration 1 using callbacks
// addFood(steak[0], "#steak", () => {
//   // ... your code here
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
//   // ... your code here
//   addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
//     addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
//       addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
//         addFood(mashPotatoes[4], "#mashPotatoes").then(() => {});
//       });
//     });
//   });
// });

// Iteration 3 using async and await

async function makeFood(steps, id, picname) {
  // ... your code here
  for (let i = 0; i < steps.length; i++) {
    await addFood(steps[i], id);
  }
  const divImg = document.createElement("div");
  divImg.innerHTML = `<img src=\"./public/images/${picname}.jpg\"></img>`;
  document.getElementById("table").appendChild(divImg);
}

const foodOne = makeFood(mashPotatoes, "#mashPotatoes", "mashPotatoes");
const foodTwo = makeFood(brusselSprouts, "#brusselSprouts", "brusselSprouts");
const foodThree = makeFood(steak, "#steak", "steak");

Promise.all([foodOne, foodTwo, foodThree]).then((values) => {
  const buttonEnd = document.createElement("button");
  buttonEnd.textContent = "Dinner is served.";
  document.querySelector("body").appendChild(buttonEnd);
  const audioFinal = "./public/media/dinnerIsServed.mp3";
  const playSound = (url) => new Audio(url).play(audioFinal);
  // buttonEnd.addEventListener("click", playSound);
  playSound(audioFinal);
});
