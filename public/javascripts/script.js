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
//               addFood(steak[7], "#steak", () => {
//                 var img = document.createElement("img");
//                 var src = document.getElementById("table");
//                 img.src = "/public/images/steak.jpg";
//                 src.appendChild(img);
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
//           var img = document.createElement("img");
//           var src = document.getElementById("table");
//           img.src = "/public/images/mashPotatoes.jpg";
//           src.appendChild(img);
//           makeFood();
//         });
//       });
//     });
//   });
// });

// // Iteration 3 using async and await

// async function makeFood() {
//   // 'brusselSprouts'
//   for (const [i, eachStep] of brusselSprouts.entries()) {
//     await addFood(brusselSprouts[i], "#brusselSprouts");
//   }
//   var img = document.createElement("img");
//   var src = document.getElementById("table");
//   img.src = "/public/images/brusselSprouts.jpg";
//   src.appendChild(img);

// }

// Best ------------------------------

async function makeFood(steps, id) {
  for (const [i, eachStep] of steps.entries()) {
    await addFood(steps[i], `#${id}`);
  }
  var img = document.createElement("img");
  var src = document.getElementById("table");
  img.src = `/public/images/${id}.jpg`;
  src.appendChild(img);
}

Promise.all([
  makeFood(steak, "steak"),
  makeFood(mashPotatoes, "mashPotatoes"),
  makeFood(brusselSprouts, "brusselSprouts"),
]).then(() => {
  alert("DINNER IS SERVED");
});
