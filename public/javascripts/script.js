// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
// addFood(steak[i], "#steak");
//   console.log(mashPotatoes[i]);
// }

var imageSteak = new Image();
imageSteak.src = "public/images/steak.jpg";

let imagePotato = new Image();
imagePotato.src = "public/images/mashPotatoes.jpg";

let imageBrussel = new Image();
imageBrussel.src = "public/images/brusselSprouts.jpg";

// Iteration 1 using callbacks
let promise1 = "";

addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              promise1 = addFood(steak[7], "#steak", () => {
                let steak = document.getElementById("table");
                steak.appendChild(imageSteak);
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
let promise2 = "";

addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        promise2 = addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          let potato = document.getElementById("table");
          potato.appendChild(imagePotato);
        });
      });
    });
  });
});

// Iteration 3 using async and await
let promise3 = "";
async function makeFood() {
  try {
    let step1 = await addFood(brusselSprouts[0], "#brusselSprouts");
    let step2 = await addFood(brusselSprouts[1], "#brusselSprouts");
    let step3 = await addFood(brusselSprouts[2], "#brusselSprouts");
    let step4 = await addFood(brusselSprouts[3], "#brusselSprouts");
    let step5 = await addFood(brusselSprouts[4], "#brusselSprouts");
    let step6 = await addFood(brusselSprouts[5], "#brusselSprouts");
    let step7 = await addFood(brusselSprouts[6], "#brusselSprouts");
    let step8 = await addFood(brusselSprouts[7], "#brusselSprouts");
    promise3 = await addFood(brusselSprouts[8], "#brusselSprouts");
    let brussel = document.getElementById("table");
    brussel.appendChild(imageBrussel);
  } catch {}
}
makeFood();

Promise.all([promise1, promise2, promise3]).then(() => {
  alert("Dinner is ready!");
});
