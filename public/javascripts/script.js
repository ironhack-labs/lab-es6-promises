// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], "#steak");
// }

// Iteration 1 using callbacks
// const promiseSteak = addFood(steak[0], "#steak", () => {
//   addFood(steak[1], "#steak", () => {
//     addFood(steak[2], "#steak", () => {
//       addFood(steak[3], "#steak", () => {
//         addFood(steak[4], "#steak", () => {
//           addFood(steak[5], "#steak", () => {
//             addFood(steak[6], "#steak", () => {
//               addFood(steak[7], "#steak", () => {
//                 //Bonus 1
//                 const steakImg = document.createElement("img");
//                 steakImg.src = "public/images/steak.jpg";
//                 document.getElementById("table").appendChild(steakImg);
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// Iteration 2 using `.then()`
// const promiseMash = addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
//   // ... your code here
//   //Bonus 1
//   const potatoeskImg = document.createElement("img");
//   potatoeskImg.src = "public/images/mashPotatoes.jpg";
//   addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
//     addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
//       addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
//         addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
//           //Bonus 1
//           document.getElementById("table").appendChild(potatoeskImg);
//         });
//       });
//     });
//   });
// });

// Iteration 3 using async and await
// async function makeFood(food, id) {
//   //Bonus 1
//   const brusselskImg = document.createElement("img");

//   brusselskImg.src = "public/images/brusselSprouts.jpg";
//   //brusselskImg.src = "../images/brusselSprouts.jpg";
//   for (const step of food) {
//     await addFood(step, id);
//   }
//   //Bonus 1
//   document.getElementById("table").appendChild(brusselskImg);
// }

// const addBrusselSprouts = makeFood(brusselSprouts, "#brusselSprouts");

// //Bonus 2
// Promise.all([promiseSteak, promiseMash, addBrusselSprouts]).then(() => {
//   const dinner = document.createElement("button");
//   dinner.innerHTML = "Dinner is served.";
//   document.getElementById("steps").appendChild(dinner);

//   //dinner.onmouseover = () =>  {
//   dinner.onclick = () => {
//     var audioDiner = new Audio("public/media/dinnerIsServed.mp3");
//     audioDiner.play();
//   };
// });

//V2:

// Iteration 3 using async and await
async function makeFood(foods, id, pic) {
  for (const food of foods) {
    await addFood(food, id);
  }
  let genImg = document.createElement("img");
  genImg.src = pic;
  document.getElementById("table").appendChild(genImg);
}

const addSteak = makeFood(steak, "#steak", "public/images/steak.jpg");
const addPotatoes = makeFood(mashPotatoes, "#mashPotatoes", "public/images/mashPotatoes.jpg");
const addSprout = makeFood(brusselSprouts, "#brusselSprouts", "public/images/brusselSprouts.jpg");

Promise.all([addSteak, addPotatoes, addSprout]).then(() => {
  const dinner = document.createElement("button");
  dinner.innerHTML = "Dinner is served.";
  document.getElementById("steps").appendChild(dinner);
  dinner.onclick = () => {
    var audioDiner = new Audio("public/media/dinnerIsServed.mp3");
    audioDiner.play();
  };
});