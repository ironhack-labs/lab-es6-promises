
// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], "#steak");
//   console.log(mashPotatoes[i]);
// }
let mashImg = document.createElement("img");
mashImg.src = "../public/images/mashPotatoes.jpg";

let steakImg = document.createElement("img");
steakImg.src = "../public/images/steak.jpg";

let brusselImg = document.createElement("img");
brusselImg.src = "../public/images/brusselSprouts.jpg";

let table = document.getElementById("table");

function addImg(img) {
  table.append(img);
}

//* Iteration 1 using callbacks

addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                addImg(steakImg);
              });
            });
          });
        });
      });
    });
  });
});

console.log(makeSteak);

//* Iteration 2 using `.then()`
addFood(mashPotatoes[0], "#mashPotatoes")
  .then(() => {
    addFood(mashPotatoes[1], "#mashPotatoes");
  })
  .then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes");
  })
  .then(() => {
    addFood(mashPotatoes[3], "#mashPotatoes");
  })
  .then(() => {
    addFood(mashPotatoes[4], "#mashPotatoes");
  })
  .then(() => {
    addImg(mashImg);
  })
  .catch((err) => {
    console.log(err);
  });
console.log(makeMashPotatoes);

//* Iteration 3 using async and await

async function makeFood(step) {
  const result1 = await addFood(brusselSprouts[step], "#brusselSprouts");
  for (let i = 0; i < brusselSprouts.length; i++) {
    const sprout = brusselSprouts[i];
    addFood(brusselSprouts[i], "#brusselSprouts");
    document.getElementById("table").appendChild(brusselImg);
  }
  addImg(brusselImg);
}
makeFood();

function playSound() {
  let sound = new Audio();
  sound.src = "./public/media/dinnerIsServed.mp3";
  return sound;
}

const button = document.createElement("button");
document.getElementById("table").append(button);
console.log(button);
button.textContent = "Dinner is served";
button.addEventListener("click", playSound);
