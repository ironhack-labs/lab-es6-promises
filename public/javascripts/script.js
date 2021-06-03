// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], "#steak");
//   console.log(mashPotatoes[i]);
// }

// Iteration 1 using callbacks
const steakCook = addFood(steak[0], "#steak", () => {
  // ... your code here
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                let imageDiv = document.getElementById("table");
                let image = document.createElement("img");
                image.src = "./public/images/steak.jpg";
                imageDiv.appendChild(image);
              });
            });
          });
        });
      });
    });
  });
}).catch((error) => console.log(error));

// Iteration 2 using `.then()`
const mashPotatoesCook = addFood(mashPotatoes[0], "#mashPotatoes")
  .then(() => {
    // ... your code here
    addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
          addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
            let imageDiv = document.getElementById("table");
            let image = document.createElement("img");
            image.src = "./public/images/mashPotatoes.jpg";
            imageDiv.appendChild(image);
          });
        });
      });
    });
  })
  .catch((error) => console.log(error));

// Iteration 3 using async and await

async function makeFood(step) {
  // ... your code here
  for (let i = 0; i < step.length; i++) {
    await addFood(step[i], "#brusselSprouts");
  }
}
const brusselSproutsCook = makeFood(brusselSprouts)
  .then(() => {
    let imageDiv = document.getElementById("table");
    let image = document.createElement("img");
    image.src = "./public/images/brusselSprouts.jpg";
    imageDiv.appendChild(image);
  })
  .catch((error) => console.log(error));

Promise.all([steakCook, mashPotatoesCook, brusselSproutsCook]).then(() => {
  let alertDiv = document.getElementById("table");
  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "Dinner is served!";
  alertDiv.appendChild(button);
});
