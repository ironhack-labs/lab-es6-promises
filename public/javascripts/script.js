// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], '#steak');
// }

// Iteration 1 using callbacks
function promiseSteak() {
  return addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  document.getElementById(
                    "table"
                  ).innerHTML += `<img src="public/images/steak.jpg">`;
                });
              });
            });
          });
        });
      });
    });
  });
}

function promiseFood() {
  // Iteration 2 using `.then()`
  return addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
    // ... your code here
    addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
          addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
            document.getElementById(
              "table"
            ).innerHTML += `<img src="public/images/mashPotatoes.jpg">`;
          });
        });
      });
    });
  });
}
// Iteration 3 using async and await

// brusselSprouts.forEach((eachStep) => {
async function makeFood() {
  // ... your code here
  for (let i = 0; i < brusselSprouts.length; i++) {
    const element = brusselSprouts[i];
    await addFood(element, "#brusselSprouts");
  }
  document.getElementById(
    "table"
  ).innerHTML += `<img src="public/images/brusselSprouts.jpg">`;
}
// makeFood();

// });

Promise.all([promiseSteak(), promiseFood(), makeFood()]).then((res) => {
  console.log("res");
  alert("The dinner is ready");
});
