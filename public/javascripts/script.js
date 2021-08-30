const brusselSrc = "./public/images/brusselSprouts.jpg";
const mashSrc = "./public/images/mashPotatoes.jpg";
const steakSrc = "./public/images/steak.jpg";

function loadImg(src) {
  const img = document.createElement("img");
  img.src = src;
  img.loaded;
  img.onload = () => document.querySelector("#table").appendChild(img);
}

// Iteration 1 using callbacks

function steakRecipe() {
  addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  loadImg(steakSrc);
                });
              });
            });
          });
        });
      });
    });
  });
}

// Iteration 2 using `.then()`

function mashPotatoesRecipe() {
  addFood(mashPotatoes[0], "#mashPotatoes")
    .then(() => addFood(mashPotatoes[1], "#mashPotatoes"))
    .then(() => addFood(mashPotatoes[2], "#mashPotatoes"))
    .then(() => addFood(mashPotatoes[3], "#mashPotatoes"))
    .then(() => addFood(mashPotatoes[4], "#mashPotatoes"))
    .then(() => loadImg(mashSrc));
}

// Iteration 3 using async/await

async function brusselSproutsRecipe(steps) {
  for (const step of steps) await addFood(step, "#brusselSprouts");
  loadImg(brusselSrc);
}

//Bonus

async function makeFood(steps, id, imgSrc) {
  for (const step of steps) await addFood(step, id);
  loadImg(imgSrc);
}

Promise.all([
  makeFood(mashPotatoes, "#mashPotatoes", mashSrc),
  makeFood(steak, "#steak", steakSrc),
  makeFood(brusselSprouts, "#brusselSprouts", brusselSrc),
]).then(() => {
  alert("Dinner is served!");
});
