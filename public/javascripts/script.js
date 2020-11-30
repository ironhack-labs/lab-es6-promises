// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i]);
}

const table = document.querySelector("#table");

var audio = new Audio("../public/media/dinnerIsServed.mp3");

// Iteration 1 using callbacks
const steakRecipe = addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                let image = document.createElement("img");
                image.src = "./public/images/steak.jpg";
                table.appendChild(image);
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
const potatoesRecipe = addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          let image = document.createElement("img");
          image.src = "./public/images/mashPotatoes.jpg";
          table.appendChild(image);
        });
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(steps, id) {
  for (let i = 0; i < steps.length; i++) {
    await addFood(steps[i], id);
  }
  let image = document.createElement("img");
  image.src = "./public/images/brusselSprouts.jpg";
  table.appendChild(image);
}

const brusselsRecipe = makeFood(brusselSprouts, "#brusselSprouts");

Promise.all([steakRecipe, potatoesRecipe, brusselsRecipe]).then(() => {
  document.body.innerHTML += `<button>Dinner is served!</button>`;
  audio.play();
});
