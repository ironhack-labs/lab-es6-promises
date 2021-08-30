// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}*/

console.time("timer");

//Bonus 1

function addImage(img) {
  const newImg = document.createElement("img");
  newImg.src = img;
  const table = document.getElementById("table");
  table.appendChild(newImg);
}

//Bonus 2 - part 1

// -- BUTTON --
function alertButton() {
  const alertBtn = document.createElement("button");
  alertBtn.innerText = "Dinner is served.";
  document.body.appendChild(alertBtn);
}

// Iteration 1 using callBacks
function makeSteak() {
  addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  addImage("/public/images/steak.jpg");
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
function makePotatoes() {
  addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[1], "#mashPotatoes").then(() =>
      addFood(mashPotatoes[2], "#mashPotatoes").then(() =>
        addFood(mashPotatoes[3], "#mashPotatoes").then(() =>
          addFood(mashPotatoes[4], "#mashPotatoes")
            .then(() => addImage("/public/images/mashPotatoes.jpg"))
            .then(() => (potatoesReady = true))
            .catch((error) => console.log(`Error in secondPromise ${error}`))
        )
      )
    );
  });
}

// Iteration 3 using async/await

async function makeFood() {
  for (let i = 0; i < brusselSprouts.length; i++) {
    let response = await addFood(brusselSprouts[i], "#brusselSprouts");
    if (response.ok) {
      continue;
    }
  }
  addImage("/public/images/brusselSprouts.jpg");
}

const firstPromise = makeSteak();
const secondPromise = makePotatoes();
const thirdPromise = makeFood();

//Bonus 2 - part 2

Promise.all([firstPromise, secondPromise, thirdPromise])
  .then(alertButton)
  .catch((error) => console.log(`Error in promises ${error}`));
